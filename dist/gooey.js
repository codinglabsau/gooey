import * as zn from "vue";
import { computed as D, ref as $, shallowRef as ya, watch as Q, getCurrentScope as ba, onScopeDispose as wa, shallowReadonly as dt, unref as r, getCurrentInstance as Ye, toRef as Wr, camelize as xa, defineComponent as b, Comment as Hr, mergeProps as P, cloneVNode as Ur, h as ot, toRefs as le, renderSlot as w, onMounted as se, openBlock as m, createBlock as x, withCtx as y, normalizeProps as W, guardReactiveProps as U, reactive as _a, createVNode as R, createCommentVNode as re, withModifiers as fe, nextTick as ee, withDirectives as gt, vShow as en, watchEffect as ce, markRaw as Gr, watchSyncEffect as qr, withKeys as Pt, createTextVNode as ye, toDisplayString as Ce, isRef as Ft, resolveDynamicComponent as Oe, onBeforeMount as Ca, onUnmounted as ze, createElementBlock as K, Fragment as pe, renderList as mt, Teleport as lo, onBeforeUnmount as tn, useSlots as Xr, normalizeStyle as ht, effectScope as Ba, toHandlerKey as Yr, createElementVNode as oe, vModelSelect as Zr, toRaw as Qr, inject as ka, provide as Oa, customRef as Jr, readonly as on, onBeforeUpdate as es, onUpdated as ts, mergeDefaults as Da, watchPostEffect as os, normalizeClass as ne, isVNode as ns, vModelText as $a } from "vue";
function Ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var as = {
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
}, $o = as, nn = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function rs(e) {
  return e.trim().replace(nn.whitespace, " ");
}
function ss(e) {
  return encodeURIComponent(e).replace(nn.urlHexPairs, is);
}
function ls(e) {
  return Object.keys($o).forEach(function(t) {
    $o[t].test(e) && (e = e.replace($o[t], t));
  }), e;
}
function is(e) {
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
function No(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = ls(rs(e)).replace(nn.quotes, "'");
  return "data:image/svg+xml," + ss(t);
}
No.toSrcset = function(t) {
  return No(t).replace(/ /g, "%20");
};
var ds = No, Pa = {}, Sa = {};
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
})(Sa);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ o(Sa);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const n = t.default;
})(Pa);
let Eo = Pa;
var Aa = (Eo.__esModule ? Eo : { default: Eo }).default, Ta = {}, Ma = {};
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
})(Ma);
var us = {
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
  const t = Ma, o = /* @__PURE__ */ n(us);
  function n(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  const a = (0, t.cloneDeep)(o.default.theme);
})(Ta);
let Po = Ta;
var cs = (Po.__esModule ? Po : { default: Po }).default, Ia = {}, Ra = {}, an = { exports: {} }, q = String, Fa = function() {
  return { isColorSupported: !1, reset: q, bold: q, dim: q, italic: q, underline: q, inverse: q, hidden: q, strikethrough: q, black: q, red: q, green: q, yellow: q, blue: q, magenta: q, cyan: q, white: q, gray: q, bgBlack: q, bgRed: q, bgGreen: q, bgYellow: q, bgBlue: q, bgMagenta: q, bgCyan: q, bgWhite: q, blackBright: q, redBright: q, greenBright: q, yellowBright: q, blueBright: q, magentaBright: q, cyanBright: q, whiteBright: q, bgBlackBright: q, bgRedBright: q, bgGreenBright: q, bgYellowBright: q, bgBlueBright: q, bgMagentaBright: q, bgCyanBright: q, bgWhiteBright: q };
};
an.exports = Fa();
an.exports.createColors = Fa;
var ps = an.exports;
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
  const o = /* @__PURE__ */ n(ps);
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
})(Ra);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ o(Ra);
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
})(Ia);
let So = Ia;
var fs = (So.__esModule ? So : { default: So }).default;
const Gt = ds, ms = Aa, La = cs, Ke = fs, [vs, { lineHeight: gs }] = La.fontSize.base, { spacing: Te, borderWidth: Nn, borderRadius: Kn } = La;
function et(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const hs = ms.withOptions(function(e = { strategy: void 0 }) {
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
          "border-width": Nn.DEFAULT,
          "border-radius": Kn.none,
          "padding-top": Te[2],
          "padding-right": Te[3],
          "padding-bottom": Te[2],
          "padding-left": Te[3],
          "font-size": vs,
          "line-height": gs,
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
          "background-image": `url("${Gt(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              Ke.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Te[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Te[10],
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
          "padding-right": Te[3],
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
          height: Te[4],
          width: Te[4],
          color: et(n("colors.blue.600", Ke.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": et(
            n("colors.gray.500", Ke.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Nn.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Kn.none
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
          "background-image": `url("${Gt(
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
          "background-image": `url("${Gt(
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
          "background-image": `url("${Gt(
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
var ys = hs;
const bs = /* @__PURE__ */ Ea(ys), ws = Aa;
function jn(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var xs = ws(
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
      { values: jn(o("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: o("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: jn(o("animationTimingFunction")) }
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
const _s = /* @__PURE__ */ Ea(xs), xf = {
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
    _s,
    bs({
      strategy: "class"
    })
  ]
}, Cs = ["top", "right", "bottom", "left"], Ue = Math.min, he = Math.max, to = Math.round, qt = Math.floor, Ge = (e) => ({
  x: e,
  y: e
}), Bs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ks = {
  start: "end",
  end: "start"
};
function Ko(e, t, o) {
  return he(e, Ue(t, o));
}
function Le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e) {
  return e.split("-")[0];
}
function yt(e) {
  return e.split("-")[1];
}
function rn(e) {
  return e === "x" ? "y" : "x";
}
function sn(e) {
  return e === "y" ? "height" : "width";
}
function qe(e) {
  return ["top", "bottom"].includes(Ve(e)) ? "y" : "x";
}
function ln(e) {
  return rn(qe(e));
}
function Os(e, t, o) {
  o === void 0 && (o = !1);
  const n = yt(e), a = ln(e), s = sn(a);
  let l = a === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = oo(l)), [l, oo(l)];
}
function Ds(e) {
  const t = oo(e);
  return [jo(e), t, jo(t)];
}
function jo(e) {
  return e.replace(/start|end/g, (t) => ks[t]);
}
function $s(e, t, o) {
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
function Es(e, t, o, n) {
  const a = yt(e);
  let s = $s(Ve(e), o === "start", n);
  return a && (s = s.map((l) => l + "-" + a), t && (s = s.concat(s.map(jo)))), s;
}
function oo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bs[t]);
}
function Ps(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Va(e) {
  return typeof e != "number" ? Ps(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function no(e) {
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
function Wn(e, t, o) {
  let {
    reference: n,
    floating: a
  } = e;
  const s = qe(t), l = ln(t), i = sn(l), d = Ve(t), u = s === "y", c = n.x + n.width / 2 - a.width / 2, p = n.y + n.height / 2 - a.height / 2, v = n[i] / 2 - a[i] / 2;
  let f;
  switch (d) {
    case "top":
      f = {
        x: c,
        y: n.y - a.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: n.x - a.width,
        y: p
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (yt(t)) {
    case "start":
      f[l] -= v * (o && u ? -1 : 1);
      break;
    case "end":
      f[l] += v * (o && u ? -1 : 1);
      break;
  }
  return f;
}
const Ss = async (e, t, o) => {
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
  } = Wn(u, n, d), v = n, f = {}, g = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: _,
      fn: C
    } = i[h], {
      x: k,
      y: B,
      data: A,
      reset: E
    } = await C({
      x: c,
      y: p,
      initialPlacement: n,
      placement: v,
      strategy: a,
      middlewareData: f,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = k ?? c, p = B ?? p, f = {
      ...f,
      [_]: {
        ...f[_],
        ...A
      }
    }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (v = E.placement), E.rects && (u = E.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : E.rects), {
      x: c,
      y: p
    } = Wn(u, v, d)), h = -1);
  }
  return {
    x: c,
    y: p,
    placement: v,
    strategy: a,
    middlewareData: f
  };
};
async function At(e, t) {
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
    padding: f = 0
  } = Le(t, e), g = Va(f), _ = i[v ? p === "floating" ? "reference" : "floating" : p], C = no(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(_))) == null || o ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), k = p === "floating" ? {
    x: n,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), A = await (s.isElement == null ? void 0 : s.isElement(B)) ? await (s.getScale == null ? void 0 : s.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = no(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: B,
    strategy: d
  }) : k);
  return {
    top: (C.top - E.top + g.top) / A.y,
    bottom: (E.bottom - C.bottom + g.bottom) / A.y,
    left: (C.left - E.left + g.left) / A.x,
    right: (E.right - C.right + g.right) / A.x
  };
}
const As = (e) => ({
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
    const p = Va(c), v = {
      x: o,
      y: n
    }, f = ln(a), g = sn(f), h = await l.getDimensions(u), _ = f === "y", C = _ ? "top" : "left", k = _ ? "bottom" : "right", B = _ ? "clientHeight" : "clientWidth", A = s.reference[g] + s.reference[f] - v[f] - s.floating[g], E = v[f] - s.reference[f], I = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let S = I ? I[B] : 0;
    (!S || !await (l.isElement == null ? void 0 : l.isElement(I))) && (S = i.floating[B] || s.floating[g]);
    const F = A / 2 - E / 2, z = S / 2 - h[g] / 2 - 1, O = Ue(p[C], z), V = Ue(p[k], z), M = O, Y = S - h[g] - V, H = S / 2 - h[g] / 2 + F, N = Ko(M, H, Y), G = !d.arrow && yt(a) != null && H !== N && s.reference[g] / 2 - (H < M ? O : V) - h[g] / 2 < 0, te = G ? H < M ? H - M : H - Y : 0;
    return {
      [f]: v[f] + te,
      data: {
        [f]: N,
        centerOffset: H - N - te,
        ...G && {
          alignmentOffset: te
        }
      },
      reset: G
    };
  }
}), Ts = function(e) {
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
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ..._
      } = Le(e, t);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const C = Ve(a), k = qe(i), B = Ve(i) === i, A = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), E = v || (B || !h ? [oo(i)] : Ds(i)), I = g !== "none";
      !v && I && E.push(...Es(i, h, g, A));
      const S = [i, ...E], F = await At(t, _), z = [];
      let O = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && z.push(F[C]), p) {
        const H = Os(a, l, A);
        z.push(F[H[0]], F[H[1]]);
      }
      if (O = [...O, {
        placement: a,
        overflows: z
      }], !z.every((H) => H <= 0)) {
        var V, M;
        const H = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1, N = S[H];
        if (N)
          return {
            data: {
              index: H,
              overflows: O
            },
            reset: {
              placement: N
            }
          };
        let G = (M = O.filter((te) => te.overflows[0] <= 0).sort((te, ie) => te.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!G)
          switch (f) {
            case "bestFit": {
              var Y;
              const te = (Y = O.filter((ie) => {
                if (I) {
                  const ue = qe(ie.placement);
                  return ue === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((ue) => ue > 0).reduce((ue, Se) => ue + Se, 0)]).sort((ie, ue) => ie[1] - ue[1])[0]) == null ? void 0 : Y[0];
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
function Hn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Un(e) {
  return Cs.some((t) => e[t] >= 0);
}
const Ms = function(e) {
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
          const s = await At(t, {
            ...a,
            elementContext: "reference"
          }), l = Hn(s, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Un(l)
            }
          };
        }
        case "escaped": {
          const s = await At(t, {
            ...a,
            altBoundary: !0
          }), l = Hn(s, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Un(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Is(e, t) {
  const {
    placement: o,
    platform: n,
    elements: a
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), l = Ve(o), i = yt(o), d = qe(o) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = s && d ? -1 : 1, p = Le(t, e);
  let {
    mainAxis: v,
    crossAxis: f,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof g == "number" && (f = i === "end" ? g * -1 : g), d ? {
    x: f * c,
    y: v * u
  } : {
    x: v * u,
    y: f * c
  };
}
const Rs = function(e) {
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
      } = t, d = await Is(t, e);
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
}, Fs = function(e) {
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
              y: k
            } = _;
            return {
              x: C,
              y: k
            };
          }
        },
        ...d
      } = Le(e, t), u = {
        x: o,
        y: n
      }, c = await At(t, d), p = qe(Ve(a)), v = rn(p);
      let f = u[v], g = u[p];
      if (s) {
        const _ = v === "y" ? "top" : "left", C = v === "y" ? "bottom" : "right", k = f + c[_], B = f - c[C];
        f = Ko(k, f, B);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", k = g + c[_], B = g - c[C];
        g = Ko(k, g, B);
      }
      const h = i.fn({
        ...t,
        [v]: f,
        [p]: g
      });
      return {
        ...h,
        data: {
          x: h.x - o,
          y: h.y - n,
          enabled: {
            [v]: s,
            [p]: l
          }
        }
      };
    }
  };
}, Ls = function(e) {
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
      }, p = qe(a), v = rn(p);
      let f = c[v], g = c[p];
      const h = Le(i, t), _ = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (d) {
        const B = v === "y" ? "height" : "width", A = s.reference[v] - s.floating[B] + _.mainAxis, E = s.reference[v] + s.reference[B] - _.mainAxis;
        f < A ? f = A : f > E && (f = E);
      }
      if (u) {
        var C, k;
        const B = v === "y" ? "width" : "height", A = ["top", "left"].includes(Ve(a)), E = s.reference[p] - s.floating[B] + (A && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (A ? 0 : _.crossAxis), I = s.reference[p] + s.reference[B] + (A ? 0 : ((k = l.offset) == null ? void 0 : k[p]) || 0) - (A ? _.crossAxis : 0);
        g < E ? g = E : g > I && (g = I);
      }
      return {
        [v]: f,
        [p]: g
      };
    }
  };
}, Vs = function(e) {
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
      } = Le(e, t), c = await At(t, u), p = Ve(a), v = yt(a), f = qe(a) === "y", {
        width: g,
        height: h
      } = s.floating;
      let _, C;
      p === "top" || p === "bottom" ? (_ = p, C = v === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, _ = v === "end" ? "top" : "bottom");
      const k = h - c.top - c.bottom, B = g - c.left - c.right, A = Ue(h - c[_], k), E = Ue(g - c[C], B), I = !t.middlewareData.shift;
      let S = A, F = E;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (F = B), (n = t.middlewareData.shift) != null && n.enabled.y && (S = k), I && !v) {
        const O = he(c.left, 0), V = he(c.right, 0), M = he(c.top, 0), Y = he(c.bottom, 0);
        f ? F = g - 2 * (O !== 0 || V !== 0 ? O + V : he(c.left, c.right)) : S = h - 2 * (M !== 0 || Y !== 0 ? M + Y : he(c.top, c.bottom));
      }
      await d({
        ...t,
        availableWidth: F,
        availableHeight: S
      });
      const z = await l.getDimensions(i.floating);
      return g !== z.width || h !== z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function io() {
  return typeof window < "u";
}
function at(e) {
  return dn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $e(e) {
  var t;
  return (t = (dn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function dn(e) {
  return io() ? e instanceof Node || e instanceof be(e).Node : !1;
}
function Be(e) {
  return io() ? e instanceof Element || e instanceof be(e).Element : !1;
}
function De(e) {
  return io() ? e instanceof HTMLElement || e instanceof be(e).HTMLElement : !1;
}
function Gn(e) {
  return !io() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof be(e).ShadowRoot;
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
function zs(e) {
  return ["table", "td", "th"].includes(at(e));
}
function uo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function un(e) {
  const t = cn(), o = Be(e) ? ke(e) : e;
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function Ns(e) {
  let t = Xe(e);
  for (; De(t) && !vt(t); ) {
    if (un(t))
      return t;
    if (uo(t))
      return null;
    t = Xe(t);
  }
  return null;
}
function cn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vt(e) {
  return ["html", "body", "#document"].includes(at(e));
}
function ke(e) {
  return be(e).getComputedStyle(e);
}
function co(e) {
  return Be(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Xe(e) {
  if (at(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Gn(e) && e.host || // Fallback.
    $e(e)
  );
  return Gn(t) ? t.host : t;
}
function za(e) {
  const t = Xe(e);
  return vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : De(t) && Lt(t) ? t : za(t);
}
function Tt(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const a = za(e), s = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = be(a);
  if (s) {
    const i = Wo(l);
    return t.concat(l, l.visualViewport || [], Lt(a) ? a : [], i && o ? Tt(i) : []);
  }
  return t.concat(a, Tt(a, [], o));
}
function Wo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Na(e) {
  const t = ke(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = De(e), s = a ? e.offsetWidth : o, l = a ? e.offsetHeight : n, i = to(o) !== s || to(n) !== l;
  return i && (o = s, n = l), {
    width: o,
    height: n,
    $: i
  };
}
function pn(e) {
  return Be(e) ? e : e.contextElement;
}
function pt(e) {
  const t = pn(e);
  if (!De(t))
    return Ge(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: s
  } = Na(t);
  let l = (s ? to(o.width) : o.width) / n, i = (s ? to(o.height) : o.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Ks = /* @__PURE__ */ Ge(0);
function Ka(e) {
  const t = be(e);
  return !cn() || !t.visualViewport ? Ks : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function js(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== be(e) ? !1 : t;
}
function nt(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const a = e.getBoundingClientRect(), s = pn(e);
  let l = Ge(1);
  t && (n ? Be(n) && (l = pt(n)) : l = pt(e));
  const i = js(s, o, n) ? Ka(s) : Ge(0);
  let d = (a.left + i.x) / l.x, u = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (s) {
    const v = be(s), f = n && Be(n) ? be(n) : n;
    let g = v, h = Wo(g);
    for (; h && n && f !== g; ) {
      const _ = pt(h), C = h.getBoundingClientRect(), k = ke(h), B = C.left + (h.clientLeft + parseFloat(k.paddingLeft)) * _.x, A = C.top + (h.clientTop + parseFloat(k.paddingTop)) * _.y;
      d *= _.x, u *= _.y, c *= _.x, p *= _.y, d += B, u += A, g = be(h), h = Wo(g);
    }
  }
  return no({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function Ws(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: a
  } = e;
  const s = a === "fixed", l = $e(n), i = t ? uo(t.floating) : !1;
  if (n === l || i && s)
    return o;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ge(1);
  const c = Ge(0), p = De(n);
  if ((p || !p && !s) && ((at(n) !== "body" || Lt(l)) && (d = co(n)), De(n))) {
    const v = nt(n);
    u = pt(n), c.x = v.x + n.clientLeft, c.y = v.y + n.clientTop;
  }
  return {
    width: o.width * u.x,
    height: o.height * u.y,
    x: o.x * u.x - d.scrollLeft * u.x + c.x,
    y: o.y * u.y - d.scrollTop * u.y + c.y
  };
}
function Hs(e) {
  return Array.from(e.getClientRects());
}
function Ho(e, t) {
  const o = co(e).scrollLeft;
  return t ? t.left + o : nt($e(e)).left + o;
}
function Us(e) {
  const t = $e(e), o = co(e), n = e.ownerDocument.body, a = he(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = he(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -o.scrollLeft + Ho(e);
  const i = -o.scrollTop;
  return ke(n).direction === "rtl" && (l += he(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: s,
    x: l,
    y: i
  };
}
function Gs(e, t) {
  const o = be(e), n = $e(e), a = o.visualViewport;
  let s = n.clientWidth, l = n.clientHeight, i = 0, d = 0;
  if (a) {
    s = a.width, l = a.height;
    const u = cn();
    (!u || u && t === "fixed") && (i = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: i,
    y: d
  };
}
function qs(e, t) {
  const o = nt(e, !0, t === "fixed"), n = o.top + e.clientTop, a = o.left + e.clientLeft, s = De(e) ? pt(e) : Ge(1), l = e.clientWidth * s.x, i = e.clientHeight * s.y, d = a * s.x, u = n * s.y;
  return {
    width: l,
    height: i,
    x: d,
    y: u
  };
}
function qn(e, t, o) {
  let n;
  if (t === "viewport")
    n = Gs(e, o);
  else if (t === "document")
    n = Us($e(e));
  else if (Be(t))
    n = qs(t, o);
  else {
    const a = Ka(e);
    n = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return no(n);
}
function ja(e, t) {
  const o = Xe(e);
  return o === t || !Be(o) || vt(o) ? !1 : ke(o).position === "fixed" || ja(o, t);
}
function Xs(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = Tt(e, [], !1).filter((i) => Be(i) && at(i) !== "body"), a = null;
  const s = ke(e).position === "fixed";
  let l = s ? Xe(e) : e;
  for (; Be(l) && !vt(l); ) {
    const i = ke(l), d = un(l);
    !d && i.position === "fixed" && (a = null), (s ? !d && !a : !d && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Lt(l) && !d && ja(e, l)) ? n = n.filter((c) => c !== l) : a = i, l = Xe(l);
  }
  return t.set(e, n), n;
}
function Ys(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: a
  } = e;
  const l = [...o === "clippingAncestors" ? uo(t) ? [] : Xs(t, this._c) : [].concat(o), n], i = l[0], d = l.reduce((u, c) => {
    const p = qn(t, c, a);
    return u.top = he(p.top, u.top), u.right = Ue(p.right, u.right), u.bottom = Ue(p.bottom, u.bottom), u.left = he(p.left, u.left), u;
  }, qn(t, i, a));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Zs(e) {
  const {
    width: t,
    height: o
  } = Na(e);
  return {
    width: t,
    height: o
  };
}
function Qs(e, t, o) {
  const n = De(t), a = $e(t), s = o === "fixed", l = nt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ge(0);
  if (n || !n && !s)
    if ((at(t) !== "body" || Lt(a)) && (i = co(t)), n) {
      const f = nt(t, !0, s, t);
      d.x = f.x + t.clientLeft, d.y = f.y + t.clientTop;
    } else a && (d.x = Ho(a));
  let u = 0, c = 0;
  if (a && !n && !s) {
    const f = a.getBoundingClientRect();
    c = f.top + i.scrollTop, u = f.left + i.scrollLeft - // RTL <body> scrollbar.
    Ho(a, f);
  }
  const p = l.left + i.scrollLeft - d.x - u, v = l.top + i.scrollTop - d.y - c;
  return {
    x: p,
    y: v,
    width: l.width,
    height: l.height
  };
}
function Ao(e) {
  return ke(e).position === "static";
}
function Xn(e, t) {
  if (!De(e) || ke(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return $e(e) === o && (o = o.ownerDocument.body), o;
}
function Wa(e, t) {
  const o = be(e);
  if (uo(e))
    return o;
  if (!De(e)) {
    let a = Xe(e);
    for (; a && !vt(a); ) {
      if (Be(a) && !Ao(a))
        return a;
      a = Xe(a);
    }
    return o;
  }
  let n = Xn(e, t);
  for (; n && zs(n) && Ao(n); )
    n = Xn(n, t);
  return n && vt(n) && Ao(n) && !un(n) ? o : n || Ns(e) || o;
}
const Js = async function(e) {
  const t = this.getOffsetParent || Wa, o = this.getDimensions, n = await o(e.floating);
  return {
    reference: Qs(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function el(e) {
  return ke(e).direction === "rtl";
}
const tl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ws,
  getDocumentElement: $e,
  getClippingRect: Ys,
  getOffsetParent: Wa,
  getElementRects: Js,
  getClientRects: Hs,
  getDimensions: Zs,
  getScale: pt,
  isElement: Be,
  isRTL: el
};
function ol(e, t) {
  let o = null, n;
  const a = $e(e);
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
    const f = qt(c), g = qt(a.clientWidth - (u + p)), h = qt(a.clientHeight - (c + v)), _ = qt(u), k = {
      rootMargin: -f + "px " + -g + "px " + -h + "px " + -_ + "px",
      threshold: he(0, Ue(1, d)) || 1
    };
    let B = !0;
    function A(E) {
      const I = E[0].intersectionRatio;
      if (I !== d) {
        if (!B)
          return l();
        I ? l(!1, I) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      o = new IntersectionObserver(A, {
        ...k,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(A, k);
    }
    o.observe(e);
  }
  return l(!0), s;
}
function nl(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = pn(e), c = a || s ? [...u ? Tt(u) : [], ...Tt(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", o, {
      passive: !0
    }), s && C.addEventListener("resize", o);
  });
  const p = u && i ? ol(u, o) : null;
  let v = -1, f = null;
  l && (f = new ResizeObserver((C) => {
    let [k] = C;
    k && k.target === u && f && (f.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var B;
      (B = f) == null || B.observe(t);
    })), o();
  }), u && !d && f.observe(u), f.observe(t));
  let g, h = d ? nt(e) : null;
  d && _();
  function _() {
    const C = nt(e);
    h && (C.x !== h.x || C.y !== h.y || C.width !== h.width || C.height !== h.height) && o(), h = C, g = requestAnimationFrame(_);
  }
  return o(), () => {
    var C;
    c.forEach((k) => {
      a && k.removeEventListener("scroll", o), s && k.removeEventListener("resize", o);
    }), p == null || p(), (C = f) == null || C.disconnect(), f = null, d && cancelAnimationFrame(g);
  };
}
const al = Rs, rl = Fs, Yn = Ts, sl = Vs, ll = Ms, il = As, dl = Ls, ul = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: tl,
    ...o
  }, s = {
    ...a.platform,
    _c: n
  };
  return Ss(e, t, {
    ...a,
    platform: s
  });
};
function cl(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Uo(e) {
  if (cl(e)) {
    const t = e.$el;
    return dn(t) && at(t) === "#comment" ? null : t;
  }
  return e;
}
function ct(e) {
  return typeof e == "function" ? e() : r(e);
}
function pl(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = Uo(ct(e.element));
      return o == null ? {} : il({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ha(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zn(e, t) {
  const o = Ha(e);
  return Math.round(t * o) / o;
}
function fl(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, a = D(() => {
    var S;
    return (S = ct(o.open)) != null ? S : !0;
  }), s = D(() => ct(o.middleware)), l = D(() => {
    var S;
    return (S = ct(o.placement)) != null ? S : "bottom";
  }), i = D(() => {
    var S;
    return (S = ct(o.strategy)) != null ? S : "absolute";
  }), d = D(() => {
    var S;
    return (S = ct(o.transform)) != null ? S : !0;
  }), u = D(() => Uo(e.value)), c = D(() => Uo(t.value)), p = $(0), v = $(0), f = $(i.value), g = $(l.value), h = ya({}), _ = $(!1), C = D(() => {
    const S = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return S;
    const F = Zn(c.value, p.value), z = Zn(c.value, v.value);
    return d.value ? {
      ...S,
      transform: "translate(" + F + "px, " + z + "px)",
      ...Ha(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: F + "px",
      top: z + "px"
    };
  });
  let k;
  function B() {
    if (u.value == null || c.value == null)
      return;
    const S = a.value;
    ul(u.value, c.value, {
      middleware: s.value,
      placement: l.value,
      strategy: i.value
    }).then((F) => {
      p.value = F.x, v.value = F.y, f.value = F.strategy, g.value = F.placement, h.value = F.middlewareData, _.value = S !== !1;
    });
  }
  function A() {
    typeof k == "function" && (k(), k = void 0);
  }
  function E() {
    if (A(), n === void 0) {
      B();
      return;
    }
    if (u.value != null && c.value != null) {
      k = n(u.value, c.value, B);
      return;
    }
  }
  function I() {
    a.value || (_.value = !1);
  }
  return Q([s, l, i, a], B, {
    flush: "sync"
  }), Q([u, c], E, {
    flush: "sync"
  }), Q(a, I, {
    flush: "sync"
  }), ba() && wa(A), {
    x: dt(p),
    y: dt(v),
    strategy: dt(f),
    placement: dt(g),
    middlewareData: dt(h),
    isPositioned: dt(_),
    floatingStyles: C,
    update: B
  };
}
function J(e, t) {
  const o = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(o);
  return [(a) => {
    const s = ka(n, a);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Oa(n, a), a)];
}
function fn(e, t, o) {
  const n = o.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function ao(e, t = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), o);
}
function ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vl = function e(t, o) {
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
const tt = /* @__PURE__ */ ml(vl);
function mn(e) {
  return e == null;
}
function gl(e, t) {
  var o;
  const n = ya();
  return ce(() => {
    n.value = e();
  }, {
    ...t,
    flush: (o = void 0) != null ? o : "sync"
  }), on(n);
}
function bt(e) {
  return ba() ? (wa(e), !0) : !1;
}
function hl(e) {
  let t = !1, o;
  const n = Ba(!0);
  return (...a) => (t || (o = n.run(() => e(...a)), t = !0), o);
}
function Ua(e) {
  let t = 0, o, n;
  const a = () => {
    t -= 1, n && t <= 0 && (n.stop(), o = void 0, n = void 0);
  };
  return (...s) => (t += 1, o || (n = Ba(!0), o = n.run(() => e(...s))), bt(a), o);
}
function Fe(e) {
  return typeof e == "function" ? e() : r(e);
}
const Ee = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const yl = (e) => typeof e < "u", bl = (e) => e != null, wl = Object.prototype.toString, xl = (e) => wl.call(e) === "[object Object]", Ga = () => {
}, Qn = /* @__PURE__ */ _l();
function _l() {
  var e, t;
  return Ee && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Cl(e) {
  return Ye();
}
function Bl(e, t = 1e4) {
  return Jr((o, n) => {
    let a = Fe(e), s;
    const l = () => setTimeout(() => {
      a = Fe(e), n();
    }, Fe(t));
    return bt(() => {
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
function kl(e, t) {
  Cl() && tn(e, t);
}
function Ol(e, t, o = {}) {
  const {
    immediate: n = !0
  } = o, a = $(!1);
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
    }, Fe(t));
  }
  return n && (a.value = !0, Ee && d()), bt(i), {
    isPending: on(a),
    start: d,
    stop: i
  };
}
function Dl(e = 1e3, t = {}) {
  const {
    controls: o = !1,
    callback: n
  } = t, a = Ol(
    n ?? Ga,
    e,
    t
  ), s = D(() => !a.isPending.value);
  return o ? {
    ready: s,
    ...a
  } : s;
}
function we(e) {
  var t;
  const o = Fe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const po = Ee ? window : void 0;
function ro(...e) {
  let t, o, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, a] = e, t = po) : [t, o, n, a] = e, !t)
    return Ga;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const s = [], l = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, v, f) => (c.addEventListener(p, v, f), () => c.removeEventListener(p, v, f)), d = Q(
    () => [we(t), Fe(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const v = xl(p) ? { ...p } : p;
      s.push(
        ...o.flatMap((f) => n.map((g) => i(c, f, g, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), l();
  };
  return bt(u), u;
}
function $l(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function vn(...e) {
  let t, o, n = {};
  e.length === 3 ? (t = e[0], o = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], n = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: a = po,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, d = $l(t);
  return ro(a, s, (u) => {
    u.repeat && Fe(i) || d(u) && o(u);
  }, l);
}
function gn() {
  const e = $(!1), t = Ye();
  return t && se(() => {
    e.value = !0;
  }, t), e;
}
function El(e) {
  const t = gn();
  return D(() => (t.value, !!e()));
}
function Pl(e, t, o = {}) {
  const { window: n = po, ...a } = o;
  let s;
  const l = El(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, d = D(() => {
    const v = Fe(e), f = (Array.isArray(v) ? v : [v]).map(we).filter(bl);
    return new Set(f);
  }), u = Q(
    () => d.value,
    (v) => {
      i(), l.value && v.size && (s = new MutationObserver(t), v.forEach((f) => s.observe(f, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), u();
  };
  return bt(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function qa(e, t = {}) {
  const {
    immediate: o = !0,
    fpsLimit: n = void 0,
    window: a = po
  } = t, s = $(!1), l = n ? 1e3 / n : null;
  let i = 0, d = null;
  function u(v) {
    if (!s.value || !a)
      return;
    i || (i = v);
    const f = v - i;
    if (l && f < l) {
      d = a.requestAnimationFrame(u);
      return;
    }
    i = v, e({ delta: f, timestamp: v }), d = a.requestAnimationFrame(u);
  }
  function c() {
    !s.value && a && (s.value = !0, i = 0, d = a.requestAnimationFrame(u));
  }
  function p() {
    s.value = !1, d != null && a && (a.cancelAnimationFrame(d), d = null);
  }
  return o && c(), bt(p), {
    isActive: on(s),
    pause: p,
    resume: c
  };
}
function Sl(e) {
  return JSON.parse(JSON.stringify(e));
}
function de(e, t, o, n = {}) {
  var a, s, l;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: v
  } = n, f = Ye(), g = o || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (s = f == null ? void 0 : f.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let h = u;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const _ = (B) => i ? typeof i == "function" ? i(B) : Sl(B) : B, C = () => yl(e[t]) ? _(e[t]) : p, k = (B) => {
    v ? v(B) && g(h, B) : g(h, B);
  };
  if (d) {
    const B = C(), A = $(B);
    let E = !1;
    return Q(
      () => e[t],
      (I) => {
        E || (E = !0, A.value = _(I), ee(() => E = !1));
      }
    ), Q(
      A,
      (I) => {
        !E && (I !== e[t] || c) && k(I);
      },
      { deep: c }
    ), A;
  } else
    return D({
      get() {
        return C();
      },
      set(B) {
        k(B);
      }
    });
}
function fo(e) {
  return e ? e.flatMap((t) => t.type === pe ? fo(t.children) : [t]) : [];
}
const Al = ["INPUT", "TEXTAREA"];
function Tl(e, t, o, n = {}) {
  if (!t || n.enableIgnoredElement && Al.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, v, f, g, h, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = f || g, k = p || v;
  if (!h && !_ && (!C && !k || a === "vertical" && k || a === "horizontal" && C))
    return null;
  const B = o ? Array.from(o.querySelectorAll(s)) : l;
  if (!B.length)
    return null;
  u && e.preventDefault();
  let A = null;
  return k || C ? A = Xa(B, t, {
    goForward: C ? g : d === "ltr" ? p : v,
    loop: i
  }) : h ? A = B.at(0) || null : _ && (A = B.at(-1) || null), c && (A == null || A.focus()), A;
}
function Xa(e, t, o, n = e.length) {
  if (--n === 0)
    return null;
  const a = e.indexOf(t), s = o.goForward ? a + 1 : a - 1;
  if (!o.loop && (s < 0 || s >= e.length))
    return null;
  const l = (s + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Xa(
    e,
    i,
    o,
    n
  ) : i : null;
}
function To(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Go(e, t, o = ".", n) {
  if (!To(t))
    return Go(e, {}, o);
  const a = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const l = e[s];
    l != null && (Array.isArray(l) && Array.isArray(a[s]) ? a[s] = [...l, ...a[s]] : To(l) && To(a[s]) ? a[s] = Go(
      l,
      a[s],
      (o ? `${o}.` : "") + s.toString()
    ) : a[s] = l);
  }
  return a;
}
function Ml(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((o, n) => Go(o, n, ""), {})
  );
}
const Il = Ml(), [mo, _f] = J("ConfigProvider");
let Rl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Fl = (e = 21) => {
  let t = "", o = e;
  for (; o--; )
    t += Rl[Math.random() * 64 | 0];
  return t;
};
const Ll = Ua(() => {
  const e = $(/* @__PURE__ */ new Map()), t = $(), o = D(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), n = mo({
    scrollBody: $(!0)
  });
  let a = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Qn && (a == null || a()), t.value = void 0;
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
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? Il({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Qn && (a = ro(
      document,
      "touchmove",
      (v) => {
        var f;
        v.target === document.documentElement && (v.touches.length > 1 || (f = v.preventDefault) == null || f.call(v));
      },
      { passive: !1 }
    )), ee(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Vt(e) {
  const t = Fl(6), o = Ll();
  o.value.set(t, e ?? !1);
  const n = D({
    get: () => o.value.get(t) ?? !1,
    set: (a) => o.value.set(t, a)
  });
  return kl(() => {
    o.value.delete(t);
  }), n;
}
const Vl = "data-radix-vue-collection-item";
function wt(e, t = Vl) {
  const o = Symbol();
  return { createCollection: (n) => {
    const a = $([]);
    function s() {
      const l = we(n);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return es(() => {
      a.value = [];
    }), se(s), ts(s), Q(() => n == null ? void 0 : n.value, s, { immediate: !0 }), Oa(o, a), a;
  }, injectCollection: () => ka(o, $([])) };
}
function xt(e) {
  const t = mo({
    dir: $("ltr")
  });
  return D(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function Ze(e) {
  const t = Ye(), o = t == null ? void 0 : t.type.emits, n = {};
  return o != null && o.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), o == null || o.forEach((a) => {
    n[Yr(xa(a))] = (...s) => e(a, ...s);
  }), n;
}
let Mo = 0;
function hn() {
  ce((e) => {
    if (!Ee)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Jn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Jn()
    ), Mo++, e(() => {
      Mo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), Mo--;
    });
  });
}
function Jn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function vo(e) {
  return D(() => {
    var t;
    return Fe(e) ? !!((t = we(e)) != null && t.closest("form")) : !0;
  });
}
function me(e) {
  const t = Ye(), o = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, s) => {
    const l = (t == null ? void 0 : t.type.props[s]).default;
    return l !== void 0 && (a[s] = l), a;
  }, {}), n = Wr(e);
  return D(() => {
    const a = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((l) => {
      a[xa(l)] = s[l];
    }), Object.keys({ ...o, ...a }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function Z(e, t) {
  const o = me(e), n = t ? Ze(t) : {};
  return D(() => ({
    ...o.value,
    ...n
  }));
}
function T() {
  const e = Ye(), t = $(), o = D(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : we(t);
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
var zl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ut = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Yt = {}, Io = 0, Ya = function(e) {
  return e && (e.host || Ya(e.parentNode));
}, Nl = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var n = Ya(o);
    return n && e.contains(n) ? n : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Kl = function(e, t, o, n) {
  var a = Nl(t, Array.isArray(e) ? e : [e]);
  Yt[o] || (Yt[o] = /* @__PURE__ */ new WeakMap());
  var s = Yt[o], l = [], i = /* @__PURE__ */ new Set(), d = new Set(a), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  a.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(v) {
      if (i.has(v))
        c(v);
      else
        try {
          var f = v.getAttribute(n), g = f !== null && f !== "false", h = (ut.get(v) || 0) + 1, _ = (s.get(v) || 0) + 1;
          ut.set(v, h), s.set(v, _), l.push(v), h === 1 && g && Xt.set(v, !0), _ === 1 && v.setAttribute(o, "true"), g || v.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", v, C);
        }
    });
  };
  return c(t), i.clear(), Io++, function() {
    l.forEach(function(p) {
      var v = ut.get(p) - 1, f = s.get(p) - 1;
      ut.set(p, v), s.set(p, f), v || (Xt.has(p) || p.removeAttribute(n), Xt.delete(p)), f || p.removeAttribute(o);
    }), Io--, Io || (ut = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Yt = {});
  };
}, jl = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = zl(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), Kl(n, a, o, "aria-hidden")) : function() {
    return null;
  };
};
function zt(e) {
  let t;
  Q(() => we(e), (o) => {
    o ? t = jl(o) : t && t();
  }), ze(() => {
    t && t();
  });
}
let Wl = 0;
function ve(e, t = "radix") {
  const o = mo({ useId: void 0 });
  return zn.useId ? `${t}-${zn.useId()}` : o.useId ? `${t}-${o.useId()}` : `${t}-${++Wl}`;
}
function Za(e) {
  const t = $(), o = D(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = D(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return se(() => {
    const a = we(e);
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
function Hl(e, t) {
  const o = $(e);
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
function yn(e) {
  const t = Bl("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, n) => {
      var a, s;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + o;
      const l = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((s = (a = l.find((v) => v === i)) == null ? void 0 : a.textContent) == null ? void 0 : s.trim()) ?? "", u = l.map((v) => {
        var f;
        return ((f = v.textContent) == null ? void 0 : f.trim()) ?? "";
      }), c = Gl(u, t.value, d), p = l.find(
        (v) => {
          var f;
          return ((f = v.textContent) == null ? void 0 : f.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Ul(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
function Gl(e, t, o) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = o ? e.indexOf(o) : -1;
  let s = Ul(e, Math.max(a, 0));
  n.length === 1 && (s = s.filter((i) => i !== o));
  const l = s.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== o ? l : void 0;
}
const bn = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      var n, a;
      if (!o.default)
        return null;
      const s = fo(o.default()), l = s.findIndex((c) => c.type !== Hr);
      if (l === -1)
        return s;
      const i = s[l];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? P(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const u = Ur(i, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return s.length === 1 ? u : (s[l] = u, s);
    };
  }
}), j = b({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => ot(n, t) : n !== "template" ? () => ot(e.as, t, { default: o.default }) : () => ot(bn, t, { default: o.default });
  }
});
function Qa() {
  const e = $(), t = D(() => {
    var o, n;
    return ["#text", "#comment"].includes((o = e.value) == null ? void 0 : o.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : we(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function ql(e, t) {
  const o = $({}), n = $("none"), a = e.value ? "mounted" : "unmounted", { state: s, dispatch: l } = Hl(a, {
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
    var f;
    if (Ee) {
      const g = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (f = t.value) == null || f.dispatchEvent(g);
    }
  };
  Q(
    e,
    async (v, f) => {
      var g;
      const h = f !== v;
      if (await ee(), h) {
        const _ = n.value, C = Zt(t.value);
        v ? (l("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((g = o.value) == null ? void 0 : g.display) === "none" ? (l("UNMOUNT"), i("leave"), i("after-leave")) : f && _ !== C ? (l("ANIMATION_OUT"), i("leave")) : (l("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (v) => {
    const f = Zt(t.value), g = f.includes(
      v.animationName
    ), h = s.value === "mounted" ? "enter" : "leave";
    v.target === t.value && g && (i(`after-${h}`), l("ANIMATION_END")), v.target === t.value && f === "none" && l("ANIMATION_END");
  }, u = (v) => {
    v.target === t.value && (n.value = Zt(t.value));
  }, c = Q(
    t,
    (v, f) => {
      v ? (o.value = getComputedStyle(v), v.addEventListener("animationstart", u), v.addEventListener("animationcancel", d), v.addEventListener("animationend", d)) : (l("ANIMATION_END"), f == null || f.removeEventListener("animationstart", u), f == null || f.removeEventListener("animationcancel", d), f == null || f.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = Q(s, () => {
    const v = Zt(t.value);
    n.value = s.value === "mounted" ? v : "none";
  });
  return ze(() => {
    c(), p();
  }), {
    isPresent: D(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Zt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ne = b({
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
    const { present: a, forceMount: s } = le(e), l = $(), { isPresent: i } = ql(a, l);
    o({ present: i });
    let d = t.default({ present: i });
    d = fo(d || []);
    const u = Ye();
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
        const p = we(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), [Pe, Xl] = J("DialogRoot"), wn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = de(o, "open", t, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), a = $(), s = $(), { modal: l } = le(o);
    return Xl({
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
}), xn = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Pe(), { forwardRef: n, currentElement: a } = T();
    return o.contentId || (o.contentId = ve(void 0, "radix-vue-dialog-content")), se(() => {
      o.triggerElement.value = a.value;
    }), (s, l) => (m(), x(r(j), P(t, {
      ref: r(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": r(o).open.value || !1,
      "aria-controls": r(o).open.value ? r(o).contentId : void 0,
      "data-state": r(o).open.value ? "open" : "closed",
      onClick: r(o).onOpenToggle
    }), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Nt = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = gn();
    return (o, n) => r(t) || o.forceMount ? (m(), x(lo, {
      key: 0,
      to: o.to,
      disabled: o.disabled
    }, [
      w(o.$slots, "default")
    ], 8, ["to", "disabled"])) : re("", !0);
  }
}), _n = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Nt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yl = "dismissableLayer.pointerDownOutside", Zl = "dismissableLayer.focusOutside";
function Ja(e, t) {
  const o = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(o && n === o || a.indexOf(n) < a.indexOf(o));
}
function Ql(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = $(!1), s = $(() => {
  });
  return ce((l) => {
    if (!Ee)
      return;
    const i = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (Ja(t.value, c)) {
          a.value = !1;
          return;
        }
        if (u.target && !a.value) {
          let p = function() {
            fn(
              Yl,
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
function Jl(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = $(!1);
  return ce((s) => {
    if (!Ee)
      return;
    const l = async (i) => {
      t != null && t.value && (await ee(), !(!t.value || Ja(t.value, i.target)) && i.target && !a.value && fn(
        Zl,
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
const _e = _a({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Kt = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: s } = T(), l = D(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), i = D(() => _e.layersRoot), d = D(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), u = D(() => _e.layersWithOutsidePointerEventsDisabled.size > 0), c = D(() => {
      const g = Array.from(i.value), [h] = [..._e.layersWithOutsidePointerEventsDisabled].slice(-1), _ = g.indexOf(h);
      return d.value >= _;
    }), p = Ql(async (g) => {
      const h = [..._e.branches].some(
        (_) => _ == null ? void 0 : _.contains(g.target)
      );
      !c.value || h || (n("pointerDownOutside", g), n("interactOutside", g), await ee(), g.defaultPrevented || n("dismiss"));
    }, s), v = Jl((g) => {
      [..._e.branches].some(
        (h) => h == null ? void 0 : h.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, s);
    vn("Escape", (g) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let f;
    return ce((g) => {
      s.value && (o.disableOutsidePointerEvents && (_e.layersWithOutsidePointerEventsDisabled.size === 0 && (f = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), _e.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        o.disableOutsidePointerEvents && _e.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = f);
      }));
    }), ce((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), _e.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, h) => (m(), x(r(j), {
      ref: r(a),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: ht({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: r(v).onFocusCapture,
      onBlurCapture: r(v).onBlurCapture,
      onPointerdownCapture: r(p).onPointerDownCapture
    }, {
      default: y(() => [
        w(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), ei = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = T();
    return se(() => {
      _e.branches.add(n.value);
    }), ze(() => {
      _e.branches.delete(n.value);
    }), (a, s) => (m(), x(r(j), P({ ref: r(o) }, t), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ro = "focusScope.autoFocusOnMount", Fo = "focusScope.autoFocusOnUnmount", ea = { bubbles: !1, cancelable: !0 };
function eo(e, { select: t = !1 } = {}) {
  const o = document.activeElement;
  for (const n of e)
    if (He(n, { select: t }), document.activeElement !== o)
      return !0;
}
function ti(e) {
  const t = Cn(e), o = ta(t, e), n = ta(t.reverse(), e);
  return [o, n];
}
function Cn(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function ta(e, t) {
  for (const o of e)
    if (!oi(o, { upTo: t }))
      return o;
}
function oi(e, { upTo: t }) {
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
function ni(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && ni(e) && t && e.select();
  }
}
const ai = hl(() => $([]));
function ri() {
  const e = ai();
  return {
    add(t) {
      const o = e.value[0];
      t !== o && (o == null || o.pause()), e.value = oa(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var o;
      e.value = oa(e.value, t), (o = e.value[0]) == null || o.resume();
    }
  };
}
function oa(e, t) {
  const o = [...e], n = o.indexOf(t);
  return n !== -1 && o.splice(n, 1), o;
}
function si(e) {
  return e.filter((t) => t.tagName !== "A");
}
const go = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, { currentRef: a, currentElement: s } = T(), l = $(null), i = ri(), d = _a({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ce((c) => {
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
      function f(_) {
        if (d.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || He(l.value, { select: !0 }));
      }
      function g(_) {
        p.contains(l.value) || He(p);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", f);
      const h = new MutationObserver(g);
      p && h.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", f), h.disconnect();
      });
    }), ce(async (c) => {
      const p = s.value;
      if (await ee(), !p)
        return;
      i.add(d);
      const v = document.activeElement;
      if (!p.contains(v)) {
        const f = new CustomEvent(Ro, ea);
        p.addEventListener(Ro, (g) => n("mountAutoFocus", g)), p.dispatchEvent(f), f.defaultPrevented || (eo(si(Cn(p)), {
          select: !0
        }), document.activeElement === v && He(p));
      }
      c(() => {
        p.removeEventListener(Ro, (h) => n("mountAutoFocus", h));
        const f = new CustomEvent(Fo, ea), g = (h) => {
          n("unmountAutoFocus", h);
        };
        p.addEventListener(Fo, g), p.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || He(v ?? document.body, { select: !0 }), p.removeEventListener(Fo, g), i.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!o.loop && !o.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = document.activeElement;
      if (p && v) {
        const f = c.currentTarget, [g, h] = ti(f);
        g && h ? !c.shiftKey && v === h ? (c.preventDefault(), o.loop && He(g, { select: !0 })) : c.shiftKey && v === g && (c.preventDefault(), o.loop && He(h, { select: !0 })) : v === f && c.preventDefault();
      }
    }
    return (c, p) => (m(), x(r(j), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), li = "menu.itemSelect", qo = ["Enter", " "], ii = ["ArrowDown", "PageUp", "Home"], er = ["ArrowUp", "PageDown", "End"], di = [...ii, ...er], ui = {
  ltr: [...qo, "ArrowRight"],
  rtl: [...qo, "ArrowLeft"]
}, ci = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Bn(e) {
  return e ? "open" : "closed";
}
function so(e) {
  return e === "indeterminate";
}
function kn(e) {
  return so(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Xo(e) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus(), document.activeElement !== t))
      return;
}
function pi(e, t) {
  const { x: o, y: n } = e;
  let a = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const i = t[s].x, d = t[s].y, u = t[l].x, c = t[l].y;
    d > n != c > n && o < (u - i) * (n - d) / (c - d) + i && (a = !a);
  }
  return a;
}
function fi(e, t) {
  if (!t)
    return !1;
  const o = { x: e.clientX, y: e.clientY };
  return pi(o, t);
}
function Mt(e) {
  return e.pointerType === "mouse";
}
const mi = "DialogTitle", vi = "DialogContent";
function gi({
  titleName: e = mi,
  contentName: t = vi,
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
const tr = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Pe(), { forwardRef: s, currentElement: l } = T();
    return a.titleId || (a.titleId = ve(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = ve(void 0, "radix-vue-dialog-description")), se(() => {
      a.contentElement = l, document.activeElement !== document.body && (a.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && gi({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, d) => (m(), x(r(go), {
      "as-child": "",
      loop: "",
      trapped: o.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: y(() => [
        R(r(Kt), P({
          id: r(a).contentId,
          ref: r(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": r(a).descriptionId,
          "aria-labelledby": r(a).titleId,
          "data-state": r(Bn)(r(a).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => r(a).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
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
}), hi = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Pe(), s = Ze(n), { forwardRef: l, currentElement: i } = T();
    return zt(i), (d, u) => (m(), x(tr, P({ ...o, ...r(s) }, {
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
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), yi = /* @__PURE__ */ b({
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
    const a = Pe(), s = $(!1), l = $(!1);
    return (i, d) => (m(), x(tr, P({ ...o, ...r(n) }, {
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
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ho = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Pe(), s = Ze(n), { forwardRef: l } = T();
    return (i, d) => (m(), x(r(Ne), {
      present: i.forceMount || r(a).open.value
    }, {
      default: y(() => [
        r(a).modal.value ? (m(), x(hi, P({
          key: 0,
          ref: r(l)
        }, { ...o, ...r(s), ...i.$attrs }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (m(), x(yi, P({
          key: 1,
          ref: r(l)
        }, { ...o, ...r(s), ...i.$attrs }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), bi = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pe();
    return Vt(!0), T(), (o, n) => (m(), x(r(j), {
      as: o.as,
      "as-child": o.asChild,
      "data-state": r(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), yo = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pe(), { forwardRef: o } = T();
    return (n, a) => {
      var s;
      return (s = r(t)) != null && s.modal.value ? (m(), x(r(Ne), {
        key: 0,
        present: n.forceMount || r(t).open.value
      }, {
        default: y(() => [
          R(bi, P(n.$attrs, {
            ref: r(o),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: y(() => [
              w(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : re("", !0);
    };
  }
}), rt = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    T();
    const o = Pe();
    return (n, a) => (m(), x(r(j), P(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (s) => r(o).onOpenChange(!1))
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), On = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, o = Pe();
    return T(), (n, a) => (m(), x(r(j), P(t, {
      id: r(o).titleId
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Dn = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    T();
    const o = Pe();
    return (n, a) => (m(), x(r(j), P(t, {
      id: r(o).descriptionId
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), wi = /* @__PURE__ */ b({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Z(e, t);
    return T(), (n, a) => (m(), x(r(wn), P(r(o), { modal: !0 }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xi = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(xn), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _i = /* @__PURE__ */ b({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Nt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ci, Bi] = J("AlertDialogContent"), ki = /* @__PURE__ */ b({
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
    const a = $();
    return Bi({
      onCancelElementChange: (s) => {
        a.value = s;
      }
    }), (s, l) => (m(), x(r(ho), P({ ...o, ...r(n) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = fe(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = fe(() => {
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
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oi = /* @__PURE__ */ b({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(yo), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Di = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Ci(), { forwardRef: n, currentElement: a } = T();
    return se(() => {
      o.onCancelElementChange(a.value);
    }), (s, l) => (m(), x(r(rt), P(t, { ref: r(n) }), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $i = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(On), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ei = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(Dn), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pi = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(rt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [or, Si] = J("AvatarRoot"), Ai = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return T(), Si({
      imageLoadingStatus: $("loading")
    }), (t, o) => (m(), x(r(j), {
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
function Ti(e) {
  const t = $("idle"), o = $(!1), n = (a) => () => {
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
  }), ze(() => {
    o.value = !1;
  }), t;
}
const Mi = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const o = e, n = t, { src: a } = le(o);
    T();
    const s = or(), l = Ti(a);
    return Q(
      l,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, d) => gt((m(), x(r(j), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: r(a)
    }, {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [en, r(l) === "loaded"]
    ]);
  }
}), Ii = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = or();
    T();
    const n = $(!1);
    let a;
    return Q(o.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = !1, t.delayMs ? a = setTimeout(() => {
        n.value = !0, clearTimeout(a);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (s, l) => n.value && r(o).imageLoadingStatus.value !== "loaded" ? (m(), x(r(j), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : re("", !0);
  }
}), [nr, Ri] = J("PopperRoot"), jt = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = $();
    return Ri({
      anchor: t,
      onAnchorChange: (o) => t.value = o
    }), (o, n) => w(o.$slots, "default");
  }
}), bo = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = T(), a = nr();
    return ce(() => {
      a.onAnchorChange(t.element ?? n.value);
    }), (s, l) => (m(), x(r(j), {
      ref: r(o),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Fi(e) {
  return e !== null;
}
function Li(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var o, n, a;
      const { placement: s, rects: l, middlewareData: i } = t, d = ((o = i.arrow) == null ? void 0 : o.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, v] = Yo(s), f = { start: "0%", center: "50%", end: "100%" }[v], g = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, h = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? f : `${g}px`, C = `${-c}px`) : p === "top" ? (_ = d ? f : `${g}px`, C = `${l.floating.height + c}px`) : p === "right" ? (_ = `${-c}px`, C = d ? f : `${h}px`) : p === "left" && (_ = `${l.floating.width + c}px`, C = d ? f : `${h}px`), { data: { x: _, y: C } };
    }
  };
}
function Yo(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
const ar = {
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
}, [Cf, Vi] = J("PopperContent"), It = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Da({
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
    ...ar
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = nr(), { forwardRef: s, currentElement: l } = T(), i = $(), d = $(), { width: u, height: c } = Za(d), p = D(
      () => o.side + (o.align !== "center" ? `-${o.align}` : "")
    ), v = D(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), f = D(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), g = D(() => ({
      padding: v.value,
      boundary: f.value.filter(Fi),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: f.value.length > 0
    })), h = gl(() => [
      al({
        mainAxis: o.sideOffset + c.value,
        alignmentAxis: o.alignOffset
      }),
      o.prioritizePosition && o.avoidCollisions && Yn({
        ...g.value
      }),
      o.avoidCollisions && rl({
        mainAxis: !0,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? dl() : void 0,
        ...g.value
      }),
      !o.prioritizePosition && o.avoidCollisions && Yn({
        ...g.value
      }),
      sl({
        ...g.value,
        apply: ({ elements: O, rects: V, availableWidth: M, availableHeight: Y }) => {
          const { width: H, height: N } = V.reference, G = O.floating.style;
          G.setProperty(
            "--radix-popper-available-width",
            `${M}px`
          ), G.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), G.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), G.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      d.value && pl({ element: d.value, padding: o.arrowPadding }),
      Li({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      o.hideWhenDetached && ll({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: _, placement: C, isPositioned: k, middlewareData: B } = fl(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...O) => nl(...O, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), A = D(
      () => Yo(C.value)[0]
    ), E = D(
      () => Yo(C.value)[1]
    );
    os(() => {
      k.value && n("placed");
    });
    const I = D(
      () => {
        var O;
        return ((O = B.value.arrow) == null ? void 0 : O.centerOffset) !== 0;
      }
    ), S = $("");
    ce(() => {
      l.value && (S.value = window.getComputedStyle(l.value).zIndex);
    });
    const F = D(() => {
      var O;
      return ((O = B.value.arrow) == null ? void 0 : O.x) ?? 0;
    }), z = D(() => {
      var O;
      return ((O = B.value.arrow) == null ? void 0 : O.y) ?? 0;
    });
    return Vi({
      placedSide: A,
      onArrowChange: (O) => d.value = O,
      arrowX: F,
      arrowY: z,
      shouldHideArrow: I
    }), (O, V) => {
      var M, Y, H;
      return m(), K("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: ht({
          ...r(_),
          transform: r(k) ? r(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: S.value,
          "--radix-popper-transform-origin": [
            (M = r(B).transformOrigin) == null ? void 0 : M.x,
            (Y = r(B).transformOrigin) == null ? void 0 : Y.y
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
        R(r(j), P({ ref: r(s) }, O.$attrs, {
          "as-child": o.asChild,
          as: O.as,
          "data-side": A.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: r(k) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            w(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), wo = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return T(), (t, o) => (m(), x(r(j), {
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
}), zi = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = D(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, a) => typeof n == "object" ? Object.entries(n).map(([s, l]) => ({ name: `[${a}][${t.name}][${s}]`, value: l })) : { name: `[${t.name}][${a}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, a]) => ({ name: `[${t.name}][${n}]`, value: a })) : []);
    return (n, a) => (m(!0), K(pe, null, mt(o.value, (s) => (m(), x(wo, {
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
}), Ni = "data-radix-vue-collection-item", [$n, Ki] = J("CollectionProvider");
function En(e = Ni) {
  const t = $(/* @__PURE__ */ new Map()), o = $(), n = Ki({
    collectionRef: o,
    itemMap: t,
    attrName: e
  }), { getItems: a } = rr(n), s = D(() => Array.from(n.itemMap.value.values())), l = D(() => n.itemMap.value.size);
  return { getItems: a, reactiveItems: s, itemMapSize: l };
}
const Pn = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const o = $n(), { primitiveElement: n, currentElement: a } = Qa();
    return Q(a, () => {
      o.collectionRef.value = a.value;
    }), () => ot(bn, { ref: n }, t);
  }
}), Sn = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: o }) {
    const n = $n(), { primitiveElement: a, currentElement: s } = Qa();
    return ce((l) => {
      if (s.value) {
        const i = Gr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: e.value }), l(() => n.itemMap.value.delete(i));
      }
    }), () => ot(bn, { ...o, [n.attrName]: "", ref: a }, t);
  }
});
function rr(e) {
  const t = e ?? $n();
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
const [_t, ji] = J("ComboboxRoot"), Wi = /* @__PURE__ */ b({
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
    const o = e, n = t, { multiple: a, disabled: s, dir: l } = le(o), i = xt(l), d = de(o, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: o.searchTerm === void 0
    }), u = de(o, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: o.defaultValue ?? a.value ? [] : void 0,
      passive: o.modelValue === void 0,
      deep: !0
    }), c = de(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), p = de(o, "selectedValue", n, {
      defaultValue: void 0,
      passive: o.selectedValue === void 0
    });
    async function v(N) {
      var G, te;
      c.value = N, await ee(), N ? (u.value && (Array.isArray(u.value) && a.value ? p.value = (G = B().find((ie) => {
        var ue, Se;
        return ((Se = (ue = ie.ref) == null ? void 0 : ue.dataset) == null ? void 0 : Se.state) === "checked";
      })) == null ? void 0 : G.value : p.value = u.value), await ee(), (te = h.value) == null || te.focus(), Y()) : (g.value = !1, o.resetSearchTermOnBlur && F());
    }
    function f(N) {
      if (Array.isArray(u.value) && a.value) {
        const G = u.value.findIndex((ie) => tt(ie, N)), te = [...u.value];
        G === -1 ? te.push(N) : te.splice(G, 1), u.value = te;
      } else
        u.value = N, v(!1);
    }
    const g = $(!1), h = $(), _ = $(), { forwardRef: C, currentElement: k } = T(), { getItems: B, reactiveItems: A, itemMapSize: E } = En("data-radix-vue-combobox-item"), I = $([]);
    Q(() => E.value, () => {
      I.value = B().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const S = D(() => {
      if (g.value) {
        if (o.filterFunction)
          return o.filterFunction(I.value, d.value);
        const N = I.value.filter((G) => typeof G == "string");
        if (N.length)
          return N.filter((G) => {
            var te;
            return G.toLowerCase().includes((te = d.value) == null ? void 0 : te.toLowerCase());
          });
      }
      return I.value;
    });
    function F() {
      !a.value && u.value && !Array.isArray(u.value) ? o.displayValue ? d.value = o.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : d.value = "" : d.value = "";
    }
    const z = D(() => S.value.findIndex((N) => tt(N, p.value))), O = D(() => {
      var N;
      return (N = A.value.find((G) => tt(G.value, p.value))) == null ? void 0 : N.ref;
    }), V = D(() => JSON.stringify(u.value));
    Q(V, async () => {
      await ee(), await ee(), F();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !o.searchTerm
    }), Q(() => [S.value.length, d.value.length], async ([N, G], [te, ie]) => {
      await ee(), await ee(), N && (ie > G || z.value === -1) && (p.value = S.value[0]);
    });
    const M = vo(k);
    function Y() {
      var N;
      O.value instanceof Element && ((N = O.value) == null || N.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      O.value instanceof Element && O.value.focus && O.value.focus();
    }
    return ji({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: f,
      isUserInputted: g,
      multiple: a,
      disabled: s,
      open: c,
      onOpenChange: v,
      filteredOptions: S,
      contentId: "",
      inputElement: h,
      selectedElement: O,
      onInputElementChange: (N) => h.value = N,
      onInputNavigation: async (N) => {
        const G = z.value;
        G === 0 && N === "up" || G === S.value.length - 1 && N === "down" || (G === -1 && S.value.length || N === "home" ? p.value = S.value[0] : N === "end" ? p.value = S.value[S.value.length - 1] : p.value = S.value[N === "up" ? G - 1 : G + 1], await ee(), Y(), H(), ee(() => {
          var te;
          return (te = h.value) == null ? void 0 : te.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (N) => {
        var G;
        S.value.length && p.value && O.value instanceof Element && (N.preventDefault(), N.stopPropagation(), (G = O.value) == null || G.click());
      },
      selectedValue: p,
      onSelectedValueChange: (N) => p.value = N,
      parentElement: k,
      contentElement: _,
      onContentElementChange: (N) => _.value = N
    }), (N, G) => (m(), x(r(jt), null, {
      default: y(() => [
        R(r(j), P({
          ref: r(C),
          style: {
            pointerEvents: r(c) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: r(i)
        }, N.$attrs), {
          default: y(() => [
            w(N.$slots, "default", {
              open: r(c),
              modelValue: r(u)
            }),
            r(M) && o.name ? (m(), x(r(zi), {
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
}), Hi = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, o = _t(), { forwardRef: n, currentElement: a } = T();
    se(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (o.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = D(() => t.disabled || o.disabled.value || !1), l = $();
    qr(() => {
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
    return (c, p) => (m(), x(r(j), {
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
        Pt(fe(i, ["prevent"]), ["down", "up"]),
        Pt(r(o).onInputEnter, ["enter"]),
        Pt(fe(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [sr, Ui] = J("ComboboxGroup"), Gi = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: o, currentElement: n } = T(), a = ve(void 0, "radix-vue-combobox-group"), s = _t(), l = $(!1);
    function i() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!d.length;
    }
    return Pl(n, () => {
      ee(() => {
        i();
      });
    }, { childList: !0 }), Q(() => s.searchTerm.value, () => {
      ee(() => {
        i();
      });
    }, { immediate: !0 }), Ui({
      id: a
    }), (d, u) => gt((m(), x(r(j), P(t, {
      ref_key: "currentRef",
      ref: o,
      role: "group",
      "aria-labelledby": r(a)
    }), {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [en, l.value]
    ]);
  }
}), qi = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    T();
    const o = sr({ id: "" });
    return (n, a) => (m(), x(r(j), P(t, {
      id: r(o).id
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Bf, Xi] = J("ComboboxContent"), Yi = /* @__PURE__ */ b({
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
    const o = e, n = t, { position: a } = le(o), s = _t();
    Vt(o.bodyLock);
    const { forwardRef: l, currentElement: i } = T();
    zt(s.parentElement);
    const d = D(() => o.position === "popper" ? o : {}), u = me(d.value);
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
    return Xi({ position: a }), (v, f) => (m(), x(r(Pn), null, {
      default: y(() => [
        v.dismissable ? (m(), x(r(Kt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": v.disableOutsidePointerEvents,
          onDismiss: f[0] || (f[0] = (g) => r(s).onOpenChange(!1)),
          onFocusOutside: f[1] || (f[1] = (g) => {
            var h;
            (h = r(s).parentElement.value) != null && h.contains(g.target) && g.preventDefault(), n("focusOutside", g);
          }),
          onInteractOutside: f[2] || (f[2] = (g) => n("interactOutside", g)),
          onEscapeKeyDown: f[3] || (f[3] = (g) => n("escapeKeyDown", g)),
          onPointerDownOutside: f[4] || (f[4] = (g) => {
            var h;
            (h = r(s).parentElement.value) != null && h.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
          })
        }, {
          default: y(() => [
            (m(), x(Oe(r(a) === "popper" ? r(It) : r(j)), P({ ...v.$attrs, ...r(u) }, {
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
              default: y(() => [
                w(v.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (m(), x(Oe(r(a) === "popper" ? r(It) : r(j)), P({ key: 1 }, { ...v.$attrs, ...d.value }, {
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
          default: y(() => [
            w(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Zi = /* @__PURE__ */ b({
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
    const o = Z(e, t), { forwardRef: n } = T(), a = _t();
    return a.contentId || (a.contentId = ve(void 0, "radix-vue-combobox-content")), (s, l) => (m(), x(r(Ne), {
      present: s.forceMount || r(a).open.value
    }, {
      default: y(() => [
        R(Yi, P({ ...r(o), ...s.$attrs }, { ref: r(n) }), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Qi = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    T();
    const o = _t(), n = D(() => o.filteredOptions.value.length === 0);
    return (a, s) => n.value ? (m(), x(r(j), W(P({ key: 0 }, t)), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          ye("No options")
        ])
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
});
function Ji(e) {
  const t = mo({
    nonce: $()
  });
  return D(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.nonce) == null ? void 0 : o.value);
  });
}
const [kf, ed] = J("ComboboxItem"), td = "combobox.select", od = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { disabled: a } = le(o), s = _t();
    sr({ id: "", options: $([]) });
    const { forwardRef: l } = T(), i = D(
      () => {
        var h, _;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (h = s.modelValue.value) == null ? void 0 : h.some((C) => tt(C, o.value)) : tt((_ = s.modelValue) == null ? void 0 : _.value, o.value);
      }
    ), d = D(() => tt(s.selectedValue.value, o.value)), u = ve(void 0, "radix-vue-combobox-item"), c = ve(void 0, "radix-vue-combobox-option"), p = D(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((h) => tt(h, o.value)) : !0);
    async function v(h) {
      n("select", h), !(h != null && h.defaultPrevented) && !a.value && h && s.onValueChange(o.value);
    }
    function f(h) {
      if (!h)
        return;
      const _ = { originalEvent: h, value: o.value };
      fn(td, v, _);
    }
    async function g(h) {
      await ee(), !h.defaultPrevented && s.onSelectedValueChange(o.value);
    }
    if (o.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ed({
      isSelected: i
    }), (h, _) => (m(), x(r(Sn), { value: h.value }, {
      default: y(() => [
        gt(R(r(j), {
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
          as: h.as,
          "as-child": h.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: f,
          onPointermove: g
        }, {
          default: y(() => [
            w(h.$slots, "default", {}, () => [
              ye(Ce(h.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [en, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), nd = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(j), P(t, { "aria-hidden": "true" }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lr = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(bo), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ad() {
  const e = $(!1);
  return se(() => {
    ro("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), ro(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const rd = Ua(ad), [st, ir] = J(["MenuRoot", "MenuSub"], "MenuContext"), [Wt, sd] = J("MenuRoot"), ld = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a, dir: s } = le(o), l = xt(s), i = de(o, "open", n), d = $(), u = rd();
    return ir({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), sd({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: l,
      modal: a
    }), (c, p) => (m(), x(r(jt), null, {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), id = "rovingFocusGroup.onEntryFocus", dd = { bubbles: !1, cancelable: !0 };
function ud(e, t = !1, o) {
  const n = document.activeElement;
  for (const a of e)
    if (a === n || (a.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [Of, cd] = J("RovingFocusGroup"), pd = /* @__PURE__ */ b({
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
    const n = e, a = o, { loop: s, orientation: l, dir: i } = le(n), d = xt(i), u = de(n, "currentTabStopId", a, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = $(!1), p = $(!1), v = $(0), { getItems: f } = En();
    function g(_) {
      const C = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const k = new CustomEvent(id, dd);
        if (_.currentTarget.dispatchEvent(k), a("entryFocus", k), !k.defaultPrevented) {
          const B = f().map((S) => S.ref).filter((S) => S.dataset.disabled !== ""), A = B.find((S) => S.getAttribute("data-active") === "true"), E = B.find(
            (S) => S.id === u.value
          ), I = [A, E, ...B].filter(
            Boolean
          );
          ud(I, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    function h() {
      setTimeout(() => {
        p.value = !1;
      }, 1);
    }
    return t({
      getItems: f
    }), cd({
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
    }), (_, C) => (m(), x(r(Pn), null, {
      default: y(() => [
        R(r(j), {
          tabindex: c.value || v.value === 0 ? -1 : 0,
          "data-orientation": r(l),
          as: _.as,
          "as-child": _.asChild,
          dir: r(d),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (k) => p.value = !0),
          onMouseup: h,
          onFocus: g,
          onBlur: C[1] || (C[1] = (k) => c.value = !1)
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
}), [An, fd] = J("MenuContent"), Tn = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Da({
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
    ...ar
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = st(), s = Wt(), { trapFocus: l, disableOutsidePointerEvents: i, loop: d } = le(o);
    hn(), Vt(i.value);
    const u = $(""), c = $(0), p = $(0), v = $(null), f = $("right"), g = $(0), h = $(null), { createCollection: _ } = wt(), { forwardRef: C, currentElement: k } = T(), B = _(k);
    Q(k, (O) => {
      a.onContentChange(O);
    });
    const { handleTypeaheadSearch: A } = yn(B);
    ze(() => {
      window.clearTimeout(c.value);
    });
    function E(O) {
      var V, M;
      return f.value === ((V = v.value) == null ? void 0 : V.side) && fi(O, (M = v.value) == null ? void 0 : M.area);
    }
    async function I(O) {
      var V;
      n("openAutoFocus", O), !O.defaultPrevented && (O.preventDefault(), (V = k.value) == null || V.focus({
        preventScroll: !0
      }));
    }
    function S(O) {
      if (O.defaultPrevented)
        return;
      const V = O.target.closest("[data-radix-menu-content]") === O.currentTarget, M = O.ctrlKey || O.altKey || O.metaKey, Y = O.key.length === 1, H = Tl(
        O,
        document.activeElement,
        k.value,
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
      if (O.code === "Space" || (V && (O.key === "Tab" && O.preventDefault(), !M && Y && A(O.key)), O.target !== k.value) || !di.includes(O.key))
        return;
      O.preventDefault();
      const N = B.value;
      er.includes(O.key) && N.reverse(), Xo(N);
    }
    function F(O) {
      var V, M;
      (M = (V = O == null ? void 0 : O.currentTarget) == null ? void 0 : V.contains) != null && M.call(V, O.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function z(O) {
      var V;
      if (!Mt(O))
        return;
      const M = O.target, Y = g.value !== O.clientX;
      if ((V = O == null ? void 0 : O.currentTarget) != null && V.contains(M) && Y) {
        const H = O.clientX > g.value ? "right" : "left";
        f.value = H, g.value = O.clientX;
      }
    }
    return fd({
      onItemEnter: (O) => !!E(O),
      onItemLeave: (O) => {
        var V;
        E(O) || ((V = k.value) == null || V.focus(), h.value = null);
      },
      onTriggerLeave: (O) => !!E(O),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (O) => {
        v.value = O;
      }
    }), (O, V) => (m(), x(r(go), {
      "as-child": "",
      trapped: r(l),
      onMountAutoFocus: I,
      onUnmountAutoFocus: V[7] || (V[7] = (M) => n("closeAutoFocus", M))
    }, {
      default: y(() => [
        R(r(Kt), {
          "as-child": "",
          "disable-outside-pointer-events": r(i),
          onEscapeKeyDown: V[2] || (V[2] = (M) => n("escapeKeyDown", M)),
          onPointerDownOutside: V[3] || (V[3] = (M) => n("pointerDownOutside", M)),
          onFocusOutside: V[4] || (V[4] = (M) => n("focusOutside", M)),
          onInteractOutside: V[5] || (V[5] = (M) => n("interactOutside", M)),
          onDismiss: V[6] || (V[6] = (M) => n("dismiss"))
        }, {
          default: y(() => [
            R(r(pd), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": V[0] || (V[0] = (M) => h.value = M),
              "as-child": "",
              orientation: "vertical",
              dir: r(s).dir.value,
              loop: r(d),
              onEntryFocus: V[1] || (V[1] = (M) => {
                n("entryFocus", M), r(s).isUsingKeyboardRef.value || M.preventDefault();
              })
            }, {
              default: y(() => [
                R(r(It), {
                  ref: r(C),
                  role: "menu",
                  as: O.as,
                  "as-child": O.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": r(Bn)(r(a).open.value),
                  dir: r(s).dir.value,
                  side: O.side,
                  "side-offset": O.sideOffset,
                  align: O.align,
                  "align-offset": O.alignOffset,
                  "avoid-collisions": O.avoidCollisions,
                  "collision-boundary": O.collisionBoundary,
                  "collision-padding": O.collisionPadding,
                  "arrow-padding": O.arrowPadding,
                  "prioritize-position": O.prioritizePosition,
                  sticky: O.sticky,
                  "hide-when-detached": O.hideWhenDetached,
                  onKeydown: S,
                  onBlur: F,
                  onPointermove: z
                }, {
                  default: y(() => [
                    w(O.$slots, "default")
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
}), dr = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = An(), { forwardRef: n } = T(), a = $(!1);
    async function s(i) {
      if (!i.defaultPrevented && Mt(i)) {
        if (t.disabled)
          o.onItemLeave(i);
        else if (!o.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ee(), !i.defaultPrevented && Mt(i) && o.onItemLeave(i);
    }
    return (i, d) => (m(), x(r(Sn), null, {
      default: y(() => [
        R(r(j), P({
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
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), Mn = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: s } = T(), l = Wt(), i = An(), d = $(!1);
    async function u() {
      const c = s.value;
      if (!o.disabled && c) {
        const p = new CustomEvent(li, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await ee(), p.defaultPrevented ? d.value = !1 : l.onClose();
      }
    }
    return (c, p) => (m(), x(dr, P(o, {
      ref: r(a),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (v) => {
        var f;
        await ee(), !v.defaultPrevented && (d.value || (f = v.currentTarget) == null || f.click());
      }),
      onKeydown: p[2] || (p[2] = async (v) => {
        const f = r(i).searchRef.value !== "";
        c.disabled || f && v.key === " " || r(qo).includes(v.key) && (v.currentTarget.click(), v.preventDefault());
      })
    }), {
      default: y(() => [
        w(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [md, ur] = J(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), vd = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = md({
      checked: $(!1)
    });
    return (o, n) => (m(), x(r(Ne), {
      present: o.forceMount || r(so)(r(t).checked.value) || r(t).checked.value === !0
    }, {
      default: y(() => [
        R(r(j), {
          as: o.as,
          "as-child": o.asChild,
          "data-state": r(kn)(r(t).checked.value)
        }, {
          default: y(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), gd = /* @__PURE__ */ b({
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
    const o = e, n = t, a = de(o, "checked", n);
    return ur({ checked: a }), (s, l) => (m(), x(Mn, P({ role: "menuitemcheckbox" }, o, {
      "aria-checked": r(so)(r(a)) ? "mixed" : r(a),
      "data-state": r(kn)(r(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        n("select", i), r(so)(r(a)) ? a.value = !0 : a.value = !r(a);
      })
    }), {
      default: y(() => [
        w(s.$slots, "default", { checked: r(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), hd = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Z(o, n), s = st(), { forwardRef: l, currentElement: i } = T();
    return zt(i), (d, u) => (m(), x(Tn, P(r(a), {
      ref: r(l),
      "trap-focus": r(s).open.value,
      "disable-outside-pointer-events": r(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => r(s).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = fe((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), yd = /* @__PURE__ */ b({
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
    const o = Z(e, t), n = st();
    return (a, s) => (m(), x(Tn, P(r(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: s[0] || (s[0] = (l) => r(n).onOpenChange(!1))
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bd = /* @__PURE__ */ b({
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
    const o = Z(e, t), n = st(), a = Wt();
    return (s, l) => (m(), x(r(Ne), {
      present: s.forceMount || r(n).open.value
    }, {
      default: y(() => [
        r(a).modal.value ? (m(), x(hd, W(P({ key: 0 }, { ...s.$attrs, ...r(o) })), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (m(), x(yd, W(P({ key: 1 }, { ...s.$attrs, ...r(o) })), {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), cr = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(j), P({ role: "group" }, t), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wd = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(j), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xd = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Nt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [_d, Cd] = J("MenuRadioGroup"), Bd = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = de(o, "modelValue", t);
    return Cd({
      modelValue: n,
      onValueChange: (a) => {
        n.value = a;
      }
    }), (a, s) => (m(), x(cr, W(U(o)), {
      default: y(() => [
        w(a.$slots, "default", { modelValue: r(n) })
      ]),
      _: 3
    }, 16));
  }
}), kd = /* @__PURE__ */ b({
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
    const o = e, n = t, { value: a } = le(o), s = _d(), l = D(
      () => s.modelValue.value === (a == null ? void 0 : a.value)
    );
    return ur({ checked: l }), (i, d) => (m(), x(Mn, P({ role: "menuitemradio" }, o, {
      "aria-checked": l.value,
      "data-state": r(kn)(l.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), r(s).onValueChange(r(a));
      })
    }), {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Od = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(j), P(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [pr, Dd] = J("MenuSub"), $d = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = de(o, "open", t, {
      defaultValue: !1,
      passive: o.open === void 0
    }), a = st(), s = $(), l = $();
    return ce((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), ir({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Dd({
      triggerId: "",
      contentId: "",
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, d) => (m(), x(r(jt), null, {
      default: y(() => [
        w(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ed = /* @__PURE__ */ b({
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
    const o = Z(e, t), n = st(), a = Wt(), s = pr(), { forwardRef: l, currentElement: i } = T();
    return s.contentId || (s.contentId = ve(void 0, "radix-vue-menu-sub-content")), (d, u) => (m(), x(r(Ne), {
      present: d.forceMount || r(n).open.value
    }, {
      default: y(() => [
        R(Tn, P(r(o), {
          id: r(s).contentId,
          ref: r(l),
          "aria-labelledby": r(s).triggerId,
          align: "start",
          side: r(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = fe((c) => {
            var p;
            r(a).isUsingKeyboardRef.value && ((p = r(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = fe(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== r(s).trigger.value && r(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            r(a).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, v;
            const f = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), g = r(ci)[r(a).dir.value].includes(c.key);
            f && g && (r(n).onOpenChange(!1), (v = r(s).trigger.value) == null || v.focus(), c.preventDefault());
          })
        }), {
          default: y(() => [
            w(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Pd = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = st(), n = Wt(), a = pr(), s = An(), l = $(null);
    a.triggerId || (a.triggerId = ve(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    ze(() => {
      i();
    });
    function d(p) {
      !Mt(p) || s.onItemEnter(p) || !t.disabled && !o.open.value && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        o.onOpenChange(!0), i();
      }, 100));
    }
    async function u(p) {
      var v, f;
      if (!Mt(p))
        return;
      i();
      const g = (v = o.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (g != null && g.width) {
        const h = (f = o.content.value) == null ? void 0 : f.dataset.side, _ = h === "right", C = _ ? -5 : 5, k = g[_ ? "left" : "right"], B = g[_ ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: k, y: g.top },
            { x: B, y: g.top },
            { x: B, y: g.bottom },
            { x: k, y: g.bottom }
          ],
          side: h
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
      const f = s.searchRef.value !== "";
      t.disabled || f && p.key === " " || ui[n.dir.value].includes(p.key) && (o.onOpenChange(!0), await ee(), (v = o.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, v) => (m(), x(lr, { "as-child": "" }, {
      default: y(() => [
        R(dr, P(t, {
          id: r(a).triggerId,
          ref: (f) => {
            var g;
            (g = r(a)) == null || g.onTriggerChange(f == null ? void 0 : f.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": r(o).open.value,
          "aria-controls": r(a).contentId,
          "data-state": r(Bn)(r(o).open.value),
          onClick: v[0] || (v[0] = async (f) => {
            t.disabled || f.defaultPrevented || (f.currentTarget.focus(), r(o).open.value || r(o).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
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
}), [fr, Sd] = J("DropdownMenuRoot"), Ad = /* @__PURE__ */ b({
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
    const a = de(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), s = $(), { modal: l, dir: i } = le(o), d = xt(i);
    return Sd({
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
    }), (u, c) => (m(), x(r(ld), {
      open: r(a),
      "onUpdate:open": c[0] || (c[0] = (p) => Ft(a) ? a.value = p : null),
      dir: r(d),
      modal: r(l)
    }, {
      default: y(() => [
        w(u.$slots, "default", { open: r(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Td = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = fr(), { forwardRef: n, currentElement: a } = T();
    return se(() => {
      o.triggerElement = a;
    }), o.triggerId || (o.triggerId = ve(void 0, "radix-vue-dropdown-menu-trigger")), (s, l) => (m(), x(r(lr), { "as-child": "" }, {
      default: y(() => [
        R(r(j), {
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
          onKeydown: l[1] || (l[1] = Pt(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && r(o).onOpenToggle(), i.key === "ArrowDown" && r(o).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Md = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(xd), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Id = /* @__PURE__ */ b({
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
    const o = Z(e, t);
    T();
    const n = fr(), a = $(!1);
    function s(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = ve(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var d;
      return m(), x(r(bd), P(r(o), {
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
          const p = u.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, f = p.button === 2 || v;
          (!r(n).modal.value || f) && (a.value = !0), (c = r(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: y(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Rd = /* @__PURE__ */ b({
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
    return T(), (a, s) => (m(), x(r(Mn), W(U({ ...o, ...r(n) })), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fd = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(cr), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ld = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(Od), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vd = /* @__PURE__ */ b({
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
    return T(), (a, s) => (m(), x(r(gd), W(U({ ...o, ...r(n) })), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mr = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(vd), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zd = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(wd), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nd = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = Ze(t);
    return T(), (a, s) => (m(), x(r(Bd), W(U({ ...o, ...r(n) })), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kd = /* @__PURE__ */ b({
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
    const o = Z(e, t);
    return T(), (n, a) => (m(), x(r(kd), W(U(r(o))), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jd = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = de(o, "open", t, {
      passive: o.open === void 0,
      defaultValue: o.defaultOpen ?? !1
    });
    return T(), (a, s) => (m(), x(r($d), {
      open: r(n),
      "onUpdate:open": s[0] || (s[0] = (l) => Ft(n) ? n.value = l : null)
    }, {
      default: y(() => [
        w(a.$slots, "default", { open: r(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Wd = /* @__PURE__ */ b({
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
    const o = Z(e, t);
    return T(), (n, a) => (m(), x(r(Ed), P(r(o), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hd = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(Pd), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ud = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(j), P(t, {
      onMousedown: n[0] || (n[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ct, Gd] = J("PopoverRoot"), qd = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a } = le(o), s = de(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = $(), i = $(!1);
    return Gd({
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
    }), (d, u) => (m(), x(r(jt), null, {
      default: y(() => [
        w(d.$slots, "default", { open: r(s) })
      ]),
      _: 3
    }));
  }
}), Xd = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Ct(), { forwardRef: n, currentElement: a } = T();
    return se(() => {
      o.triggerElement.value = a.value;
    }), (s, l) => (m(), x(Oe(r(o).hasCustomAnchor.value ? r(j) : r(bo)), { "as-child": "" }, {
      default: y(() => [
        R(r(j), {
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
          default: y(() => [
            w(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Yd = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Nt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vr = /* @__PURE__ */ b({
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
    const o = e, n = t, a = me(o), { forwardRef: s } = T(), l = Ct();
    return hn(), (i, d) => (m(), x(r(go), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: y(() => [
        R(r(Kt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => r(l).onOpenChange(!1))
        }, {
          default: y(() => [
            R(r(It), P(r(a), {
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
}), Zd = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Ct(), s = $(!1);
    Vt(!0);
    const l = Z(o, n), { forwardRef: i, currentElement: d } = T();
    return zt(d), (u, c) => (m(), x(vr, P(r(l), {
      ref: r(i),
      "trap-focus": r(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = fe(
        (p) => {
          var v;
          n("closeAutoFocus", p), s.value || (v = r(a).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const v = p.detail.originalEvent, f = v.button === 0 && v.ctrlKey === !0, g = v.button === 2 || f;
        s.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = fe(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        w(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Qd = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Ct(), s = $(!1), l = $(!1), i = Z(o, n);
    return (d, u) => (m(), x(vr, P(r(i), {
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
      default: y(() => [
        w(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jd = /* @__PURE__ */ b({
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
    const o = e, n = t, a = Ct(), s = Z(o, n), { forwardRef: l } = T();
    return a.contentId || (a.contentId = ve(void 0, "radix-vue-popover-content")), (i, d) => (m(), x(r(Ne), {
      present: i.forceMount || r(a).open.value
    }, {
      default: y(() => [
        r(a).modal.value ? (m(), x(Zd, P({ key: 0 }, r(s), { ref: r(l) }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (m(), x(Qd, P({ key: 1 }, r(s), { ref: r(l) }), {
          default: y(() => [
            w(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Df = /* @__PURE__ */ b({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    T();
    const o = Ct();
    return Ca(() => {
      o.hasCustomAnchor.value = !0;
    }), ze(() => {
      o.hasCustomAnchor.value = !1;
    }), (n, a) => (m(), x(r(bo), W(U(t)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rt = 100, [eu, tu] = J("ProgressRoot"), In = (e) => typeof e == "number";
function ou(e, t) {
  return mn(e) || In(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Rt} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function nu(e) {
  return In(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Rt}\`.`
  ), Rt);
}
const au = /* @__PURE__ */ b({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: Rt },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * Rt)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    T();
    const a = de(o, "modelValue", n, {
      passive: o.modelValue === void 0
    }), s = de(o, "max", n, {
      passive: o.max === void 0
    });
    Q(
      () => a.value,
      async (i) => {
        const d = ou(i, o.max);
        d !== i && (await ee(), a.value = d);
      },
      { immediate: !0 }
    ), Q(
      () => o.max,
      (i) => {
        const d = nu(o.max);
        d !== i && (s.value = d);
      },
      { immediate: !0 }
    );
    const l = D(() => mn(a.value) ? "indeterminate" : a.value === s.value ? "complete" : "loading");
    return tu({
      modelValue: a,
      max: s,
      progressState: l
    }), (i, d) => (m(), x(r(j), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": r(s),
      "aria-valuemin": 0,
      "aria-valuenow": In(r(a)) ? r(a) : void 0,
      "aria-valuetext": i.getValueLabel(r(a), r(s)),
      "aria-label": i.getValueLabel(r(a), r(s)),
      role: "progressbar",
      "data-state": l.value,
      "data-value": r(a) ?? void 0,
      "data-max": r(s)
    }, {
      default: y(() => [
        w(i.$slots, "default", { modelValue: r(a) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), ru = /* @__PURE__ */ b({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = eu();
    return T(), (n, a) => {
      var s;
      return m(), x(r(j), P(t, {
        "data-state": r(o).progressState.value,
        "data-value": ((s = r(o).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": r(o).max.value
      }), {
        default: y(() => [
          w(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), su = ["default-value"], lu = /* @__PURE__ */ b({
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
    const t = e, { value: o } = le(t), n = $();
    return (a, s) => (m(), x(r(wo), { "as-child": "" }, {
      default: y(() => [
        gt(oe("select", P({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => Ft(o) ? o.value = l : null),
          "default-value": r(o)
        }), [
          w(a.$slots, "default")
        ], 16, su), [
          [Zr, r(o)]
        ])
      ]),
      _: 3
    }));
  }
}), iu = {
  key: 0,
  value: ""
}, [lt, gr] = J("SelectRoot"), [du, uu] = J("SelectRoot"), cu = /* @__PURE__ */ b({
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
    const o = e, n = t, a = de(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), s = de(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = $(), i = $(), d = $({
      x: 0,
      y: 0
    }), u = $(!1), { required: c, disabled: p, dir: v } = le(o), f = xt(v);
    gr({
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
      dir: f,
      triggerPointerDownPosRef: d,
      disabled: p
    });
    const g = vo(l), h = $(/* @__PURE__ */ new Set()), _ = D(() => Array.from(h.value).map((C) => {
      var k;
      return (k = C.props) == null ? void 0 : k.value;
    }).join(";"));
    return uu({
      onNativeOptionAdd: (C) => {
        h.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        h.value.delete(C);
      }
    }), (C, k) => (m(), x(r(jt), null, {
      default: y(() => [
        w(C.$slots, "default", {
          modelValue: r(a),
          open: r(s)
        }),
        r(g) ? (m(), x(lu, P({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: r(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: r(p),
          value: r(a),
          onChange: k[0] || (k[0] = (B) => a.value = B.target.value)
        }), {
          default: y(() => [
            r(a) === void 0 ? (m(), K("option", iu)) : re("", !0),
            (m(!0), K(pe, null, mt(Array.from(h.value), (B) => (m(), x(Oe(B), P({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : re("", !0)
      ]),
      _: 3
    }));
  }
}), pu = [" ", "Enter", "ArrowUp", "ArrowDown"], fu = [" ", "Enter"], Ie = 10;
function hr(e) {
  return e === "" || mn(e);
}
const mu = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = lt(), n = D(() => {
      var f;
      return ((f = o.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: a, currentElement: s } = T();
    o.contentId || (o.contentId = ve(void 0, "radix-vue-select-content")), se(() => {
      o.triggerElement = s;
    });
    const { injectCollection: l } = wt(), i = l(), { search: d, handleTypeaheadSearch: u, resetTypeahead: c } = yn(i);
    function p() {
      n.value || (o.onOpenChange(!0), c());
    }
    function v(f) {
      p(), o.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, g) => (m(), x(r(bo), { "as-child": "" }, {
      default: y(() => {
        var h, _, C, k;
        return [
          R(r(j), {
            ref: r(a),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": r(o).contentId,
            "aria-expanded": r(o).open.value || !1,
            "aria-required": (h = r(o).required) == null ? void 0 : h.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (_ = r(o)) == null ? void 0 : _.dir.value,
            "data-state": (C = r(o)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": r(hr)((k = r(o).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: g[0] || (g[0] = (B) => {
              var A;
              (A = B == null ? void 0 : B.currentTarget) == null || A.focus();
            }),
            onPointerdown: g[1] || (g[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const A = B.target;
              A.hasPointerCapture(B.pointerId) && A.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (v(B), B.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = fe(
              (B) => {
                B.pointerType === "touch" && v(B);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (B) => {
              const A = r(d) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && A && B.key === " " || (r(u)(B.key), r(pu).includes(B.key) && (p(), B.preventDefault()));
            })
          }, {
            default: y(() => [
              w(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), vu = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Nt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Rn, gu] = J("SelectItemAlignedPosition"), hu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { injectCollection: a } = wt(), s = lt(), l = it(), i = a(), d = $(!1), u = $(!0), c = $(), { forwardRef: p, currentElement: v } = T(), { viewport: f, selectedItem: g, selectedItemText: h, focusSelectedItem: _ } = l;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && v.value && f != null && f.value && g != null && g.value && h != null && h.value) {
        const A = s.triggerElement.value.getBoundingClientRect(), E = v.value.getBoundingClientRect(), I = s.valueElement.value.getBoundingClientRect(), S = h.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Qe = S.left - E.left, Ae = I.left - Qe, Dt = A.left - Ae, Je = A.width + Dt, ko = Math.max(Je, E.width), Oo = window.innerWidth - Ie, Do = ao(Ae, Ie, Oo - ko);
          c.value.style.minWidth = `${Je}px`, c.value.style.left = `${Do}px`;
        } else {
          const Qe = E.right - S.right, Ae = window.innerWidth - I.right - Qe, Dt = window.innerWidth - A.right - Ae, Je = A.width + Dt, ko = Math.max(Je, E.width), Oo = window.innerWidth - Ie, Do = ao(
            Ae,
            Ie,
            Oo - ko
          );
          c.value.style.minWidth = `${Je}px`, c.value.style.right = `${Do}px`;
        }
        const F = i.value, z = window.innerHeight - Ie * 2, O = f.value.scrollHeight, V = window.getComputedStyle(v.value), M = Number.parseInt(
          V.borderTopWidth,
          10
        ), Y = Number.parseInt(V.paddingTop, 10), H = Number.parseInt(
          V.borderBottomWidth,
          10
        ), N = Number.parseInt(
          V.paddingBottom,
          10
        ), G = M + Y + O + N + H, te = Math.min(
          g.value.offsetHeight * 5,
          G
        ), ie = window.getComputedStyle(f.value), ue = Number.parseInt(ie.paddingTop, 10), Se = Number.parseInt(
          ie.paddingBottom,
          10
        ), ge = A.top + A.height / 2 - Ie, Nr = z - ge, Bo = g.value.offsetHeight / 2, Kr = g.value.offsetTop + Bo, Ut = M + Y + Kr, jr = G - Ut;
        if (Ut <= ge) {
          const Qe = g.value === F[F.length - 1];
          c.value.style.bottom = "0px";
          const Ae = v.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Dt = Math.max(
            Nr,
            Bo + (Qe ? Se : 0) + Ae + H
          ), Je = Ut + Dt;
          c.value.style.height = `${Je}px`;
        } else {
          const Qe = g.value === F[0];
          c.value.style.top = "0px";
          const Ae = Math.max(
            ge,
            M + f.value.offsetTop + (Qe ? ue : 0) + Bo
          ) + jr;
          c.value.style.height = `${Ae}px`, f.value.scrollTop = Ut - ge + f.value.offsetTop;
        }
        c.value.style.margin = `${Ie}px 0`, c.value.style.minHeight = `${te}px`, c.value.style.maxHeight = `${z}px`, n("placed"), requestAnimationFrame(() => d.value = !0);
      }
    }
    const k = $("");
    se(async () => {
      await ee(), C(), v.value && (k.value = window.getComputedStyle(v.value).zIndex);
    });
    function B(A) {
      A && u.value === !0 && (C(), _ == null || _(), u.value = !1);
    }
    return gu({
      contentWrapper: c,
      shouldExpandOnScrollRef: d,
      onScrollButtonChange: B
    }), (A, E) => (m(), K("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: ht({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      R(r(j), P({
        ref: r(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...A.$attrs, ...o }), {
        default: y(() => [
          w(A.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), yu = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ie },
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
    return (o, n) => (m(), x(r(It), P(r(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [it, bu] = J("SelectContent"), wu = /* @__PURE__ */ b({
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
    const o = e, n = t, a = lt();
    hn(), Vt(o.bodyLock);
    const { createCollection: s } = wt(), l = $();
    zt(l);
    const i = s(l), { search: d, handleTypeaheadSearch: u } = yn(i), c = $(), p = $(), v = $(), f = $(!1), g = $(!1);
    function h() {
      p.value && l.value && Xo([p.value, l.value]);
    }
    Q(f, () => {
      h();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = a;
    ce((E) => {
      if (!l.value)
        return;
      let I = { x: 0, y: 0 };
      const S = (z) => {
        var O, V;
        I = {
          x: Math.abs(
            Math.round(z.pageX) - (((O = C.value) == null ? void 0 : O.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(z.pageY) - (((V = C.value) == null ? void 0 : V.y) ?? 0)
          )
        };
      }, F = (z) => {
        var O;
        z.pointerType !== "touch" && (I.x <= 10 && I.y <= 10 ? z.preventDefault() : (O = l.value) != null && O.contains(z.target) || _(!1), document.removeEventListener("pointermove", S), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", S), document.addEventListener("pointerup", F, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", F, {
          capture: !0
        });
      });
    });
    function k(E) {
      const I = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !I && E.key.length === 1 && u(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let S = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const F = E.target, z = S.indexOf(F);
          S = S.slice(z + 1);
        }
        setTimeout(() => Xo(S)), E.preventDefault();
      }
    }
    const B = D(() => o.position === "popper" ? o : {}), A = me(B.value);
    return bu({
      content: l,
      viewport: c,
      onViewportChange: (E) => {
        c.value = E;
      },
      itemRefCallback: (E, I, S) => {
        var F, z;
        const O = !g.value && !S;
        (((F = a.modelValue) == null ? void 0 : F.value) !== void 0 && ((z = a.modelValue) == null ? void 0 : z.value) === I || O) && (p.value = E, O && (g.value = !0));
      },
      selectedItem: p,
      selectedItemText: v,
      onItemLeave: () => {
        var E;
        (E = l.value) == null || E.focus();
      },
      itemTextRefCallback: (E, I, S) => {
        var F, z;
        const O = !g.value && !S;
        (((F = a.modelValue) == null ? void 0 : F.value) !== void 0 && ((z = a.modelValue) == null ? void 0 : z.value) === I || O) && (v.value = E);
      },
      focusSelectedItem: h,
      position: o.position,
      isPositioned: f,
      searchRef: d
    }), (E, I) => (m(), x(r(go), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = fe(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (S) => {
        var F;
        n("closeAutoFocus", S), !S.defaultPrevented && ((F = r(a).triggerElement.value) == null || F.focus({ preventScroll: !0 }), S.preventDefault());
      })
    }, {
      default: y(() => [
        R(r(Kt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = fe(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (S) => r(a).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (S) => n("escapeKeyDown", S)),
          onPointerDownOutside: I[5] || (I[5] = (S) => n("pointerDownOutside", S))
        }, {
          default: y(() => [
            (m(), x(Oe(
              E.position === "popper" ? yu : hu
            ), P({ ...E.$attrs, ...r(A) }, {
              id: r(a).contentId,
              ref: (S) => {
                l.value = r(we)(S);
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
              onContextmenu: I[0] || (I[0] = fe(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (S) => f.value = !0),
              onKeydown: k
            }), {
              default: y(() => [
                w(E.$slots, "default")
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
}), xu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return gr(e.context), (t, o) => w(t.$slots, "default");
  }
}), _u = { key: 1 }, Cu = /* @__PURE__ */ b({
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
    const o = e, n = Z(o, t), a = lt(), s = $();
    se(() => {
      s.value = new DocumentFragment();
    });
    const l = $(), i = D(() => o.forceMount || a.open.value);
    return (d, u) => {
      var c;
      return i.value ? (m(), x(r(Ne), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          R(wu, W(U({ ...r(n), ...d.$attrs })), {
            default: y(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && s.value ? (m(), K("div", _u, [
        (m(), x(lo, { to: s.value }, [
          R(xu, { context: r(a) }, {
            default: y(() => [
              w(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : re("", !0);
    };
  }
}), Bu = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(j), P({ "aria-hidden": "true" }, t), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [yr, ku] = J("SelectItem"), Ou = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: o } = le(t), n = lt(), a = it(Bt), { forwardRef: s, currentElement: l } = T(), i = D(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), d = $(!1), u = $(t.textValue ?? ""), c = ve(void 0, "radix-vue-select-item-text");
    async function p(h) {
      await ee(), !(h != null && h.defaultPrevented) && (o.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function v(h) {
      var _;
      await ee(), !h.defaultPrevented && (o.value ? (_ = a.onItemLeave) == null || _.call(a) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function f(h) {
      var _;
      await ee(), !h.defaultPrevented && h.currentTarget === document.activeElement && ((_ = a.onItemLeave) == null || _.call(a));
    }
    async function g(h) {
      var _;
      await ee(), !(h.defaultPrevented || ((_ = a.searchRef) == null ? void 0 : _.value) !== "" && h.key === " ") && (fu.includes(h.key) && p(), h.key === " " && h.preventDefault());
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
    }), ku({
      value: t.value,
      disabled: o,
      textId: c,
      isSelected: i,
      onItemTextChange: (h) => {
        u.value = ((u.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, _) => (m(), x(r(j), {
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
      as: h.as,
      "as-child": h.asChild,
      onFocus: _[0] || (_[0] = (C) => d.value = !0),
      onBlur: _[1] || (_[1] = (C) => d.value = !1),
      onPointerup: p,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: _[3] || (_[3] = fe(() => {
      }, ["prevent", "stop"])),
      onPointermove: v,
      onPointerleave: f,
      onKeydown: g
    }, {
      default: y(() => [
        w(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Du = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = yr();
    return (n, a) => r(o).isSelected.value ? (m(), x(r(j), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
}), [$u, Eu] = J("SelectGroup"), Pu = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = ve(void 0, "radix-vue-select-group");
    return Eu({ id: o }), (n, a) => (m(), x(r(j), P({ role: "group" }, t, { "aria-labelledby": r(o) }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Su = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, o = $u({ id: "" });
    return (n, a) => (m(), x(r(j), P(t, {
      id: r(o).id
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), br = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = lt(), n = it(Bt), a = du(), s = yr(), { forwardRef: l, currentElement: i } = T(), d = D(() => {
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
    }), tn(() => {
      a.onNativeOptionRemove(d.value);
    }), (u, c) => (m(), K(pe, null, [
      R(r(j), P({
        id: r(s).textId,
        ref: r(l)
      }, { ...t, ...u.$attrs }), {
        default: y(() => [
          w(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      r(s).isSelected.value && r(o).valueElement.value && !r(o).valueElementHasChildren.value ? (m(), x(lo, {
        key: 0,
        to: r(o).valueElement.value
      }, [
        w(u.$slots, "default")
      ], 8, ["to"])) : re("", !0)
    ], 64));
  }
}), Au = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: o } = le(t), n = Ji(o), a = it(Bt), s = a.position === "item-aligned" ? Rn() : void 0, { forwardRef: l, currentElement: i } = T();
    se(() => {
      a == null || a.onViewportChange(i.value);
    });
    const d = $(0);
    function u(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: v, contentWrapper: f } = s ?? {};
      if (v != null && v.value && f != null && f.value) {
        const g = Math.abs(d.value - p.scrollTop);
        if (g > 0) {
          const h = window.innerHeight - Ie * 2, _ = Number.parseFloat(
            f.value.style.minHeight
          ), C = Number.parseFloat(f.value.style.height), k = Math.max(_, C);
          if (k < h) {
            const B = k + g, A = Math.min(h, B), E = B - A;
            f.value.style.height = `${A}px`, f.value.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, f.value.style.justifyContent = "flex-end");
          }
        }
      }
      d.value = p.scrollTop;
    }
    return (c, p) => (m(), K(pe, null, [
      R(r(j), P({
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
        default: y(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      R(r(j), {
        as: "style",
        nonce: r(n)
      }, {
        default: y(() => [
          ye(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), wr = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const o = t, { injectCollection: n } = wt(), a = n(), s = it(Bt), l = $(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    ce(() => {
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
    return tn(() => i()), (c, p) => {
      var v;
      return m(), x(r(j), P({
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
        default: y(() => [
          w(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Tu = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = it(Bt), o = t.position === "item-aligned" ? Rn() : void 0, { forwardRef: n, currentElement: a } = T(), s = $(!1);
    return ce((l) => {
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
    }), (l, i) => s.value ? (m(), x(wr, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = r(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop - u.value.offsetHeight);
      })
    }, {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : re("", !0);
  }
}), Mu = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = it(Bt), o = t.position === "item-aligned" ? Rn() : void 0, { forwardRef: n, currentElement: a } = T(), s = $(!1);
    return ce((l) => {
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
    }), (l, i) => s.value ? (m(), x(wr, {
      key: 0,
      ref: r(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: d, selectedItem: u } = r(t);
        d != null && d.value && u != null && u.value && (d.value.scrollTop = d.value.scrollTop + u.value.offsetHeight);
      })
    }, {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : re("", !0);
  }
}), Iu = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: o } = T(), n = lt(), a = Xr();
    return Ca(() => {
      var s;
      const l = !!fo((s = a == null ? void 0 : a.default) == null ? void 0 : s.call(a)).length;
      n.onValueElementHasChildrenChange(l);
    }), se(() => {
      n.valueElement = o;
    }), (s, l) => (m(), x(r(j), {
      ref: r(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          r(hr)((i = r(n).modelValue) == null ? void 0 : i.value) ? (m(), K(pe, { key: 0 }, [
            ye(Ce(s.placeholder), 1)
          ], 64)) : w(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ru = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, o) => (m(), x(r(j), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        w(t.$slots, "default", {}, () => [
          ye("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Fu(e = [], t, o) {
  const n = [...e];
  return n[o] = t, n.sort((a, s) => a - s);
}
function xr(e, t, o) {
  const n = 100 / (o - t) * (e - t);
  return ao(n, 0, 100);
}
function Lu(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Vu(e, t) {
  if (e.length === 1)
    return 0;
  const o = e.map((a) => Math.abs(a - t)), n = Math.min(...o);
  return o.indexOf(n);
}
function zu(e, t, o) {
  const n = e / 2, a = Fn([0, 50], [0, n]);
  return (n - a(t) * o) * o;
}
function Nu(e) {
  return e.slice(0, -1).map((t, o) => e[o + 1] - t);
}
function Ku(e, t) {
  if (t > 0) {
    const o = Nu(e);
    return Math.min(...o) >= t;
  }
  return !0;
}
function Fn(e, t) {
  return (o) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (o - e[0]);
  };
}
function ju(e) {
  return (String(e).split(".")[1] || "").length;
}
function Wu(e, t) {
  const o = 10 ** t;
  return Math.round(e * o) / o;
}
const _r = ["PageUp", "PageDown"], Cr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Br = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [kr, Or] = J(["SliderVertical", "SliderHorizontal"]), Dr = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = xo();
    return (s, l) => (m(), x(r(j), P({ "data-slider-impl": "" }, o, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : r(_r).concat(r(Cr)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hu = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, { max: a, min: s, dir: l, inverted: i } = le(o), { forwardRef: d, currentElement: u } = T(), c = $(), p = D(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function v(f) {
      const g = c.value || u.value.getBoundingClientRect(), h = [0, g.width], _ = p.value ? [s.value, a.value] : [a.value, s.value], C = Fn(h, _);
      return c.value = g, C(f - g.left);
    }
    return Or({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (f, g) => (m(), x(Dr, {
      ref: r(d),
      dir: r(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: g[0] || (g[0] = (h) => {
        const _ = v(h.clientX);
        n("slideStart", _);
      }),
      onSlideMove: g[1] || (g[1] = (h) => {
        const _ = v(h.clientX);
        n("slideMove", _);
      }),
      onSlideEnd: g[2] || (g[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: g[3] || (g[3] = (h) => {
        const _ = p.value ? "from-left" : "from-right", C = r(Br)[_].includes(h.key);
        n("stepKeyDown", h, C ? -1 : 1);
      }),
      onEndKeyDown: g[4] || (g[4] = (h) => n("endKeyDown", h)),
      onHomeKeyDown: g[5] || (g[5] = (h) => n("homeKeyDown", h))
    }, {
      default: y(() => [
        w(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Uu = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, { max: a, min: s, inverted: l } = le(o), { forwardRef: i, currentElement: d } = T(), u = $(), c = D(() => !l.value);
    function p(v) {
      const f = u.value || d.value.getBoundingClientRect(), g = [0, f.height], h = c.value ? [a.value, s.value] : [s.value, a.value], _ = Fn(g, h);
      return u.value = f, _(v - f.top);
    }
    return Or({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (v, f) => (m(), x(Dr, {
      ref: r(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: f[0] || (f[0] = (g) => {
        const h = p(g.clientY);
        n("slideStart", h);
      }),
      onSlideMove: f[1] || (f[1] = (g) => {
        const h = p(g.clientY);
        n("slideMove", h);
      }),
      onSlideEnd: f[2] || (f[2] = () => {
        u.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: f[3] || (f[3] = (g) => {
        const h = c.value ? "from-bottom" : "from-top", _ = r(Br)[h].includes(g.key);
        n("stepKeyDown", g, _ ? -1 : 1);
      }),
      onEndKeyDown: f[4] || (f[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: f[5] || (f[5] = (g) => n("homeKeyDown", g))
    }, {
      default: y(() => [
        w(v.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Gu = ["value", "name", "disabled", "step"], [xo, qu] = J("SliderRoot"), Xu = /* @__PURE__ */ b({
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
    const o = e, n = t, { min: a, max: s, step: l, minStepsBetweenThumbs: i, orientation: d, disabled: u, dir: c } = le(o), p = xt(c), { forwardRef: v, currentElement: f } = T(), g = vo(f);
    En();
    const h = de(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), _ = $(0), C = $(h.value);
    function k(S) {
      const F = Vu(h.value, S);
      E(S, F);
    }
    function B(S) {
      E(S, _.value);
    }
    function A() {
      const S = C.value[_.value];
      h.value[_.value] !== S && n("valueCommit", Qr(h.value));
    }
    function E(S, F, { commit: z } = { commit: !1 }) {
      var O;
      const V = ju(l.value), M = Wu(Math.round((S - a.value) / l.value) * l.value + a.value, V), Y = ao(M, a.value, s.value), H = Fu(h.value, Y, F);
      if (Ku(H, i.value * l.value)) {
        _.value = H.indexOf(Y);
        const N = String(H) !== String(h.value);
        N && z && n("valueCommit", H), N && ((O = I.value[_.value]) == null || O.focus(), h.value = H);
      }
    }
    const I = $([]);
    return qu({
      modelValue: h,
      valueIndexToChangeRef: _,
      thumbElements: I,
      orientation: d,
      min: a,
      max: s,
      disabled: u
    }), (S, F) => (m(), K(pe, null, [
      R(r(Pn), null, {
        default: y(() => [
          (m(), x(Oe(r(d) === "horizontal" ? Hu : Uu), P(S.$attrs, {
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
              r(u) || (C.value = r(h));
            }),
            onSlideStart: F[1] || (F[1] = (z) => !r(u) && k(z)),
            onSlideMove: F[2] || (F[2] = (z) => !r(u) && B(z)),
            onSlideEnd: F[3] || (F[3] = (z) => !r(u) && A()),
            onHomeKeyDown: F[4] || (F[4] = (z) => !r(u) && E(r(a), 0, { commit: !0 })),
            onEndKeyDown: F[5] || (F[5] = (z) => !r(u) && E(r(s), r(h).length - 1, { commit: !0 })),
            onStepKeyDown: F[6] || (F[6] = (z, O) => {
              if (!r(u)) {
                const V = r(_r).includes(z.key) || z.shiftKey && r(Cr).includes(z.key) ? 10 : 1, M = _.value, Y = r(h)[M], H = r(l) * V * O;
                E(Y + H, M, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              w(S.$slots, "default", { modelValue: r(h) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      r(g) ? (m(!0), K(pe, { key: 0 }, mt(r(h), (z, O) => (m(), K("input", {
        key: O,
        value: z,
        type: "number",
        style: { display: "none" },
        name: S.name ? S.name + (r(h).length > 1 ? "[]" : "") : void 0,
        disabled: r(u),
        step: r(l)
      }, null, 8, Gu))), 128)) : re("", !0)
    ], 64));
  }
}), Yu = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = xo(), n = kr(), { forwardRef: a, currentElement: s } = T(), l = D(() => {
      var f, g;
      return (g = (f = o.modelValue) == null ? void 0 : f.value) == null ? void 0 : g[t.index];
    }), i = D(() => l.value === void 0 ? 0 : xr(l.value, o.min.value ?? 0, o.max.value ?? 100)), d = D(() => {
      var f, g;
      return Lu(t.index, ((g = (f = o.modelValue) == null ? void 0 : f.value) == null ? void 0 : g.length) ?? 0);
    }), u = Za(s), c = D(() => u[n.size].value), p = D(() => c.value ? zu(c.value, i.value, n.direction) : 0), v = gn();
    return se(() => {
      o.thumbElements.value.push(s.value);
    }), ze(() => {
      const f = o.thumbElements.value.findIndex((g) => g === s.value) ?? -1;
      o.thumbElements.value.splice(f, 1);
    }), (f, g) => (m(), x(r(Sn), null, {
      default: y(() => [
        R(r(j), P(f.$attrs, {
          ref: r(a),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: r(o).disabled.value ? void 0 : 0,
          "aria-label": f.$attrs["aria-label"] || d.value,
          "data-disabled": r(o).disabled.value ? "" : void 0,
          "data-orientation": r(o).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": r(o).min.value,
          "aria-valuemax": r(o).max.value,
          "aria-orientation": r(o).orientation.value,
          "as-child": f.asChild,
          as: f.as,
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
          onFocus: g[0] || (g[0] = () => {
            r(o).valueIndexToChangeRef.value = f.index;
          })
        }), {
          default: y(() => [
            w(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Zu = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: o } = rr(), { forwardRef: n, currentElement: a } = T(), s = D(() => a.value ? o().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (m(), x(Yu, P({ ref: r(n) }, t, { index: s.value }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Qu = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = xo();
    return T(), (o, n) => (m(), x(r(j), {
      "as-child": o.asChild,
      as: o.as,
      "data-disabled": r(t).disabled.value ? "" : void 0,
      "data-orientation": r(t).orientation.value
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Ju = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = xo(), o = kr();
    T();
    const n = D(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (d) => xr(d, t.min.value, t.max.value)
      );
    }), a = D(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = D(() => 100 - Math.max(...n.value));
    return (l, i) => (m(), x(r(j), {
      "data-disabled": r(t).disabled.value ? "" : void 0,
      "data-orientation": r(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: ht({
        [r(o).startEdge]: `${a.value}%`,
        [r(o).endEdge]: `${s.value}%`
      })
    }, {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function ec() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ec();
const tc = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [oc, nc] = J("SwitchRoot"), ac = /* @__PURE__ */ b({
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
    const o = e, n = t, { disabled: a } = le(o), s = de(o, "checked", n, {
      defaultValue: o.defaultChecked,
      passive: o.checked === void 0
    });
    function l() {
      a.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: d } = T(), u = vo(d), c = D(() => {
      var p;
      return o.id && d.value ? (p = document.querySelector(`[for="${o.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return nc({
      checked: s,
      toggleCheck: l,
      disabled: a
    }), (p, v) => (m(), K(pe, null, [
      R(r(j), P(p.$attrs, {
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
        onKeydown: Pt(fe(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          w(p.$slots, "default", { checked: r(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      r(u) ? (m(), K("input", {
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
      }, null, 8, tc)) : re("", !0)
    ], 64));
  }
}), rc = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = oc();
    return T(), (o, n) => {
      var a;
      return m(), x(r(j), {
        "data-state": (a = r(t).checked) != null && a.value ? "checked" : "unchecked",
        "data-disabled": r(t).disabled.value ? "" : void 0,
        "as-child": o.asChild,
        as: o.as
      }, {
        default: y(() => [
          w(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [_o, sc] = J("ToastProvider"), lc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: o, duration: n, swipeDirection: a, swipeThreshold: s } = le(t), l = $(), i = $(0), d = $(!1), u = $(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return sc({
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
}), ic = "toast.swipeStart", dc = "toast.swipeMove", uc = "toast.swipeCancel", cc = "toast.swipeEnd", Zo = "toast.viewportPause", Qo = "toast.viewportResume";
function Qt(e, t, o) {
  const n = o.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function na(e, t, o = 0) {
  const n = Math.abs(e.x), a = Math.abs(e.y), s = n > a;
  return t === "left" || t === "right" ? s && n > o : !s && a > o;
}
function pc(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function $r(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), pc(o)) {
      const n = o.ariaHidden || o.hidden || o.style.display === "none", a = o.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (a) {
          const s = o.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...$r(o));
    }
  }), t;
}
const fc = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = _o(), o = Dl(1e3), n = $(!1);
    return qa(() => {
      n.value = !0;
    }), (a, s) => r(o) || n.value ? (m(), x(r(wo), { key: 0 }, {
      default: y(() => [
        ye(Ce(r(t).label.value) + " ", 1),
        w(a.$slots, "default")
      ]),
      _: 3
    })) : re("", !0);
  }
}), [mc, vc] = J("ToastRoot"), gc = /* @__PURE__ */ b({
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
    const o = e, n = t, { forwardRef: a, currentElement: s } = T(), l = _o(), i = $(null), d = $(null), u = D(() => o.duration || l.duration.value), c = $(0), p = $(u.value), v = $(0), f = $(u.value), g = qa(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - c.value;
      f.value = Math.max(p.value - k, 0);
    }, { fpsLimit: 60 });
    function h(k) {
      !k || k === Number.POSITIVE_INFINITY || Ee && (window.clearTimeout(v.value), c.value = (/* @__PURE__ */ new Date()).getTime(), v.value = window.setTimeout(_, k));
    }
    function _() {
      var k, B;
      (k = s.value) != null && k.contains(document.activeElement) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, n("close");
    }
    const C = D(() => s.value ? $r(s.value) : null);
    if (o.type && !["foreground", "background"].includes(o.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return ce((k) => {
      const B = l.viewport.value;
      if (B) {
        const A = () => {
          h(p.value), g.resume(), n("resume");
        }, E = () => {
          const I = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - I, window.clearTimeout(v.value), g.pause(), n("pause");
        };
        return B.addEventListener(Zo, E), B.addEventListener(Qo, A), () => {
          B.removeEventListener(Zo, E), B.removeEventListener(Qo, A);
        };
      }
    }), Q(() => [o.open, u.value], () => {
      p.value = u.value, o.open && !l.isClosePausedRef.value && h(u.value);
    }, { immediate: !0 }), vn("Escape", (k) => {
      n("escapeKeyDown", k), k.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), se(() => {
      l.onToastAdd();
    }), ze(() => {
      l.onToastRemove();
    }), vc({ onClose: _ }), (k, B) => (m(), K(pe, null, [
      C.value ? (m(), x(fc, {
        key: 0,
        role: "status",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          ye(Ce(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : re("", !0),
      r(l).viewport.value ? (m(), x(lo, {
        key: 1,
        to: r(l).viewport.value
      }, [
        R(r(j), P({
          ref: r(a),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, k.$attrs, {
          as: k.as,
          "as-child": k.asChild,
          "data-state": k.open ? "open" : "closed",
          "data-swipe-direction": r(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = fe((A) => {
            i.value = { x: A.clientX, y: A.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (A) => {
            if (!i.value) return;
            const E = A.clientX - i.value.x, I = A.clientY - i.value.y, S = !!d.value, F = ["left", "right"].includes(r(l).swipeDirection.value), z = ["left", "up"].includes(r(l).swipeDirection.value) ? Math.min : Math.max, O = F ? z(0, E) : 0, V = F ? 0 : z(0, I), M = A.pointerType === "touch" ? 10 : 2, Y = { x: O, y: V }, H = { originalEvent: A, delta: Y };
            S ? (d.value = Y, r(Qt)(r(dc), (N) => n("swipeMove", N), H)) : r(na)(Y, r(l).swipeDirection.value, M) ? (d.value = Y, r(Qt)(r(ic), (N) => n("swipeStart", N), H), A.target.setPointerCapture(A.pointerId)) : (Math.abs(E) > M || Math.abs(I) > M) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (A) => {
            const E = d.value, I = A.target;
            if (I.hasPointerCapture(A.pointerId) && I.releasePointerCapture(A.pointerId), d.value = null, i.value = null, E) {
              const S = A.currentTarget, F = { originalEvent: A, delta: E };
              r(na)(E, r(l).swipeDirection.value, r(l).swipeThreshold.value) ? r(Qt)(r(cc), (z) => n("swipeEnd", z), F) : r(Qt)(r(uc), (z) => n("swipeCancel", z), F), S == null || S.addEventListener("click", (z) => z.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            w(k.$slots, "default", {
              remaining: f.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : re("", !0)
    ], 64));
  }
}), hc = /* @__PURE__ */ b({
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
    const o = e, n = t, { forwardRef: a } = T(), s = de(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    return (l, i) => (m(), x(r(Ne), {
      present: l.forceMount || r(s)
    }, {
      default: y(() => [
        R(gc, P({
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
          default: y(({ remaining: d, duration: u }) => [
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
}), Er = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, o) => (m(), x(r(j), {
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
}), Pr = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = mc(), { forwardRef: n } = T();
    return (a, s) => (m(), x(Er, { "as-child": "" }, {
      default: y(() => [
        R(r(j), P(t, {
          ref: r(n),
          type: a.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (l) => r(o).onClose())
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
}), yc = /* @__PURE__ */ b({
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
    return (o, n) => o.altText ? (m(), x(Er, {
      key: 0,
      "alt-text": o.altText,
      "as-child": ""
    }, {
      default: y(() => [
        R(Pr, {
          ref: r(t),
          as: o.as,
          "as-child": o.asChild
        }, {
          default: y(() => [
            w(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : re("", !0);
  }
}), aa = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const o = t, n = _o();
    return (a, s) => (m(), x(r(wo), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (l) => {
        var i;
        const d = l.relatedTarget;
        !((i = r(n).viewport.value) != null && i.contains(d)) && o("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }));
  }
}), bc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: o, label: n } = le(t), { forwardRef: a, currentElement: s } = T(), { createCollection: l } = wt(), i = l(s), d = _o(), u = D(() => d.toastCount.value > 0), c = $(), p = $(), v = D(() => o.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    vn(o.value, () => {
      s.value.focus();
    }), se(() => {
      d.onViewportChange(s.value);
    }), ce((g) => {
      const h = s.value;
      if (u.value && h) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const E = new CustomEvent(Zo);
            h.dispatchEvent(E), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const E = new CustomEvent(Qo);
            h.dispatchEvent(E), d.isClosePausedRef.value = !1;
          }
        }, k = (E) => {
          !h.contains(E.relatedTarget) && C();
        }, B = () => {
          h.contains(document.activeElement) || C();
        }, A = (E) => {
          var I, S, F;
          const z = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !z) {
            const O = document.activeElement, V = E.shiftKey;
            if (E.target === h && V) {
              (I = c.value) == null || I.focus();
              return;
            }
            const M = f({ tabbingDirection: V ? "backwards" : "forwards" }), Y = M.findIndex((H) => H === O);
            eo(M.slice(Y + 1)) ? E.preventDefault() : V ? (S = c.value) == null || S.focus() : (F = p.value) == null || F.focus();
          }
        };
        h.addEventListener("focusin", _), h.addEventListener("focusout", k), h.addEventListener("pointermove", _), h.addEventListener("pointerleave", B), h.addEventListener("keydown", A), window.addEventListener("blur", _), window.addEventListener("focus", C), g(() => {
          h.removeEventListener("focusin", _), h.removeEventListener("focusout", k), h.removeEventListener("pointermove", _), h.removeEventListener("pointerleave", B), h.removeEventListener("keydown", A), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function f({ tabbingDirection: g }) {
      const h = i.value.map((_) => {
        const C = [_, ...Cn(_)];
        return g === "forwards" ? C : C.reverse();
      });
      return (g === "forwards" ? h.reverse() : h).flat();
    }
    return (g, h) => (m(), x(r(ei), {
      role: "region",
      "aria-label": typeof r(n) == "string" ? r(n).replace("{hotkey}", v.value) : r(n)(v.value),
      tabindex: "-1",
      style: ht({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        u.value ? (m(), x(aa, {
          key: 0,
          ref: (_) => {
            c.value = r(we)(_);
          },
          onFocusFromOutsideViewport: h[0] || (h[0] = () => {
            const _ = f({
              tabbingDirection: "forwards"
            });
            r(eo)(_);
          })
        }, null, 512)) : re("", !0),
        R(r(j), P({
          ref: r(a),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: y(() => [
            w(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        u.value ? (m(), x(aa, {
          key: 1,
          ref: (_) => {
            p.value = r(we)(_);
          },
          onFocusFromOutsideViewport: h[1] || (h[1] = () => {
            const _ = f({
              tabbingDirection: "backwards"
            });
            r(eo)(_);
          })
        }, null, 512)) : re("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), wc = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(j), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xc = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return T(), (o, n) => (m(), x(r(j), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, _c = {}, Cc = { class: "h-full bg-background dark:text-white" };
function Bc(e, t) {
  return m(), K("div", Cc, [
    w(e.$slots, "default")
  ]);
}
const $f = /* @__PURE__ */ kt(_c, [["render", Bc]]), kc = {}, Oc = { class: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-accent bg-background/80 px-4 shadow-sm backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Dc(e, t) {
  return m(), K("header", Oc, [
    w(e.$slots, "default")
  ]);
}
const Ef = /* @__PURE__ */ kt(kc, [["render", Dc]]), $c = {}, Ec = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Pc(e, t) {
  return m(), K("main", Ec, [
    w(e.$slots, "default")
  ]);
}
const Pf = /* @__PURE__ */ kt($c, [["render", Pc]]), Sc = {};
function Ac(e, t) {
  return w(e.$slots, "default");
}
const Sf = /* @__PURE__ */ kt(Sc, [["render", Ac]]), Tc = {}, Mc = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Ic = { class: "gap-y-5 overflow-y-auto" };
function Rc(e, t) {
  return m(), K("div", Mc, [
    oe("div", Ic, [
      w(e.$slots, "default")
    ])
  ]);
}
const Af = /* @__PURE__ */ kt(Tc, [["render", Rc]]), Fc = {};
function Lc(e, t) {
  return w(e.$slots, "default");
}
const Tf = /* @__PURE__ */ kt(Fc, [["render", Lc]]);
function Vc(e, t) {
  return m(), K("svg", {
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
function zc(e, t) {
  return m(), K("svg", {
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
function ra(e, t) {
  return m(), K("svg", {
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
function Nc(e, t) {
  return m(), K("svg", {
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
const Kc = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, Mf = /* @__PURE__ */ b({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, o) => (m(), K("button", Kc, [
      o[0] || (o[0] = oe("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(r(Vc), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), jc = 3, Wc = 1e6, Re = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Lo = 0;
function Hc() {
  return Lo = (Lo + 1) % Number.MAX_VALUE, Lo.toString();
}
const Vo = /* @__PURE__ */ new Map();
function sa(e) {
  if (Vo.has(e)) return;
  const t = setTimeout(() => {
    Vo.delete(e), St({
      type: Re.REMOVE_TOAST,
      toastId: e
    });
  }, Wc);
  Vo.set(e, t);
}
const xe = $({
  toasts: []
});
function St(e) {
  switch (e.type) {
    case Re.ADD_TOAST:
      xe.value.toasts = [e.toast, ...xe.value.toasts].slice(0, jc);
      break;
    case Re.UPDATE_TOAST:
      xe.value.toasts = xe.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Re.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? sa(t) : xe.value.toasts.forEach((o) => {
        sa(o.id);
      }), xe.value.toasts = xe.value.toasts.map(
        (o) => o.id === t || t === void 0 ? {
          ...o,
          open: !1
        } : o
      );
      break;
    }
    case Re.REMOVE_TOAST:
      e.toastId === void 0 ? xe.value.toasts = [] : xe.value.toasts = xe.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Sr() {
  return {
    toasts: D(() => xe.value.toasts),
    toast: Uc,
    dismiss: (e) => St({ type: Re.DISMISS_TOAST, toastId: e })
  };
}
function Uc(e) {
  const t = Hc(), o = (a) => St({
    type: Re.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), n = () => St({ type: Re.DISMISS_TOAST, toastId: t });
  return St({
    type: Re.ADD_TOAST,
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
const Gc = { class: "flex items-start space-x-3" }, qc = { class: "grid gap-1" }, Xc = { class: "font-bold" }, Yc = /* @__PURE__ */ b({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Sr();
    return (o, n) => (m(), x(r(zp), null, {
      default: y(() => [
        (m(!0), K(pe, null, mt(r(t), (a) => (m(), x(r(Pp), P({
          key: a.id,
          ref_for: !0
        }, a, { class: "mt-1.5" }), {
          default: y(() => [
            oe("div", Gc, [
              a.icon ? (m(), x(Oe(a.icon), {
                key: 0,
                class: ne(["h-6 w-6", a.iconClasses])
              }, null, 8, ["class"])) : re("", !0),
              oe("div", qc, [
                a.title ? (m(), x(r(Vp), { key: 0 }, {
                  default: y(() => [
                    ye(Ce(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : re("", !0),
                a.description ? (m(), K(pe, { key: 1 }, [
                  ns(a.description) ? (m(), x(r(da), { key: 0 }, {
                    default: y(() => [
                      (m(), x(Oe(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (m(!0), K(pe, { key: 1 }, mt(a.description, (s, l) => (m(), K("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (m(), K(pe, { key: 0 }, [
                      ye(Ce(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (m(), K(pe, { key: 1 }, [
                      oe("span", Xc, Ce(l), 1),
                      ye(": " + Ce(s), 1)
                    ], 64)) : (m(), K(pe, { key: 2 }, [
                      ye(Ce(s), 1)
                    ], 64))
                  ]))), 128)) : (m(), x(r(da), { key: 2 }, {
                    default: y(() => [
                      ye(Ce(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : re("", !0),
                R(r(Lp))
              ])
            ]),
            (m(), x(Oe(a.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        R(r(Sp))
      ]),
      _: 1
    }));
  }
});
function Ar(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (o = Ar(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function Zc() {
  for (var e, t, o = 0, n = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (t = Ar(e)) && (n && (n += " "), n += t);
  return n;
}
const Ln = "-", Qc = (e) => {
  const t = ep(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Ln);
      return i[0] === "" && i.length !== 1 && i.shift(), Tr(i, t) || Jc(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const d = o[l] || [];
      return i && n[l] ? [...d, ...n[l]] : d;
    }
  };
}, Tr = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], n = t.nextPart.get(o), a = n ? Tr(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ln);
  return (l = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : l.classGroupId;
}, la = /^\[(.+)\]$/, Jc = (e) => {
  if (la.test(e)) {
    const t = la.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, ep = (e) => {
  const {
    theme: t,
    prefix: o
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return op(Object.entries(e.classGroups), o).forEach(([s, l]) => {
    Jo(l, n, s, t);
  }), n;
}, Jo = (e, t, o, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? t : ia(t, a);
      s.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (tp(a)) {
        Jo(a(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([s, l]) => {
      Jo(l, ia(t, s), o, n);
    });
  });
}, ia = (e, t) => {
  let o = e;
  return t.split(Ln).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, tp = (e) => e.isThemeGetter, op = (e, t) => t ? e.map(([o, n]) => {
  const a = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([l, i]) => [t + l, i])) : s);
  return [o, a];
}) : e, np = (e) => {
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
}, Mr = "!", ap = (e) => {
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
    const v = d.length === 0 ? i : i.substring(c), f = v.startsWith(Mr), g = f ? v.substring(1) : v, h = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: g,
      maybePostfixModifierPosition: h
    };
  };
  return o ? (i) => o({
    className: i,
    parseClassName: l
  }) : l;
}, rp = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let o = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, sp = (e) => ({
  cache: np(e.cacheSize),
  parseClassName: ap(e),
  ...Qc(e)
}), lp = /\s+/, ip = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, s = [], l = e.trim().split(lp);
  let i = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const u = l[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: f
    } = o(u);
    let g = !!f, h = n(g ? v.substring(0, f) : v);
    if (!h) {
      if (!g) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = n(v), !h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      g = !1;
    }
    const _ = rp(c).join(":"), C = p ? _ + Mr : _, k = C + h;
    if (s.includes(k))
      continue;
    s.push(k);
    const B = a(h, g);
    for (let A = 0; A < B.length; ++A) {
      const E = B[A];
      s.push(C + E);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function dp() {
  let e = 0, t, o, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Ir(t)) && (n && (n += " "), n += o);
  return n;
}
const Ir = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ir(e[n])) && (o && (o += " "), o += t);
  return o;
};
function up(e, ...t) {
  let o, n, a, s = l;
  function l(d) {
    const u = t.reduce((c, p) => p(c), e());
    return o = sp(u), n = o.cache.get, a = o.cache.set, s = i, i(d);
  }
  function i(d) {
    const u = n(d);
    if (u)
      return u;
    const c = ip(d, o);
    return a(d, c), c;
  }
  return function() {
    return s(dp.apply(null, arguments));
  };
}
const ae = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, Rr = /^\[(?:([a-z-]+):)?(.+)\]$/i, cp = /^\d+\/\d+$/, pp = /* @__PURE__ */ new Set(["px", "full", "screen"]), fp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, mp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, gp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Me = (e) => ft(e) || pp.has(e) || cp.test(e), je = (e) => Ot(e, "length", kp), ft = (e) => !!e && !Number.isNaN(Number(e)), zo = (e) => Ot(e, "number", ft), $t = (e) => !!e && Number.isInteger(Number(e)), yp = (e) => e.endsWith("%") && ft(e.slice(0, -1)), X = (e) => Rr.test(e), We = (e) => fp.test(e), bp = /* @__PURE__ */ new Set(["length", "size", "percentage"]), wp = (e) => Ot(e, bp, Fr), xp = (e) => Ot(e, "position", Fr), _p = /* @__PURE__ */ new Set(["image", "url"]), Cp = (e) => Ot(e, _p, Dp), Bp = (e) => Ot(e, "", Op), Et = () => !0, Ot = (e, t, o) => {
  const n = Rr.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, kp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  mp.test(e) && !vp.test(e)
), Fr = () => !1, Op = (e) => gp.test(e), Dp = (e) => hp.test(e), $p = () => {
  const e = ae("colors"), t = ae("spacing"), o = ae("blur"), n = ae("brightness"), a = ae("borderColor"), s = ae("borderRadius"), l = ae("borderSpacing"), i = ae("borderWidth"), d = ae("contrast"), u = ae("grayscale"), c = ae("hueRotate"), p = ae("invert"), v = ae("gap"), f = ae("gradientColorStops"), g = ae("gradientColorStopPositions"), h = ae("inset"), _ = ae("margin"), C = ae("opacity"), k = ae("padding"), B = ae("saturate"), A = ae("scale"), E = ae("sepia"), I = ae("skew"), S = ae("space"), F = ae("translate"), z = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", X, t], M = () => [X, t], Y = () => ["", Me, je], H = () => ["auto", ft, X], N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ue = () => ["", "0", X], Se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ge = () => [ft, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Et],
      spacing: [Me, je],
      blur: ["none", "", We, X],
      brightness: ge(),
      borderColor: [e],
      borderRadius: ["none", "", "full", We, X],
      borderSpacing: M(),
      borderWidth: Y(),
      contrast: ge(),
      grayscale: ue(),
      hueRotate: ge(),
      invert: ue(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [yp, je],
      inset: V(),
      margin: V(),
      opacity: ge(),
      padding: M(),
      saturate: ge(),
      scale: ge(),
      sepia: ue(),
      skew: ge(),
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
        aspect: ["auto", "square", "video", X]
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
        "break-after": Se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Se()
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
        object: [...N(), X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
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
        z: ["auto", $t, X]
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
        flex: ["1", "auto", "initial", "none", X]
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
        order: ["first", "last", "none", $t, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Et]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", $t, X]
        }, X]
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
        "grid-rows": [Et]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [$t, X]
        }, X]
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
        "auto-cols": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", X]
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
        justify: ["normal", ...ie()]
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
        content: ["normal", ...ie(), "baseline"]
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
        "place-content": [...ie(), "baseline"]
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [We]
        }, We]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Et]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ft, zo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Me, X]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", X]
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
        decoration: ["auto", "from-font", Me, je]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Me, X]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
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
        content: ["none", X]
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
        bg: [...N(), xp]
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
        bg: ["auto", "cover", "contain", wp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Cp]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
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
        "outline-offset": [Me, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Me, je]
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
        ring: Y()
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
        "ring-offset": [Me, je]
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
        shadow: ["", "inner", "none", We, Bp]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Et]
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
        "drop-shadow": ["", "none", We, X]
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
        sepia: [E]
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
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ge()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", X]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ge()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", X]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [$t, X]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
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
        "will-change": ["auto", "scroll", "contents", "transform", X]
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
        stroke: [Me, je, zo]
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
}, Ep = /* @__PURE__ */ up($p);
function L(...e) {
  return Ep(Zc(e));
}
const Pp = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(hc), P(r(s), {
      class: r(L)(r(Kp)({ variant: l.variant }), o.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Sp = /* @__PURE__ */ b({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(bc), P(o.value, {
      class: r(L)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), If = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(yc), P(o.value, {
      class: r(L)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Ap(e, t) {
  return m(), K("svg", {
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
function Lr(e, t) {
  return m(), K("svg", {
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
function Tp(e, t) {
  return m(), K("svg", {
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
function Mp(e, t) {
  return m(), K("svg", {
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
function Ip(e, t) {
  return m(), K("svg", {
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
function Co(e, t) {
  return m(), K("svg", {
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
function Rp(e, t) {
  return m(), K("svg", {
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
function Fp(e, t) {
  return m(), K("svg", {
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
const Lp = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Pr), P(o.value, {
      class: r(L)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        R(r(Co), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Vp = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(wc), P(o.value, {
      class: r(L)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), da = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(xc), P({
      class: r(L)("text-sm opacity-90", t.class)
    }, o.value), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zp = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(lc), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Vr(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (o = Vr(e[t])) && (n && (n += " "), n += o);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Np() {
  for (var e, t, o = 0, n = ""; o < arguments.length; ) (e = arguments[o++]) && (t = Vr(e)) && (n && (n += " "), n += t);
  return n;
}
const ua = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ca = Np, Ht = (e, t) => (o) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return ca(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: a, defaultVariants: s } = t, l = Object.keys(a).map((u) => {
    const c = o == null ? void 0 : o[u], p = s == null ? void 0 : s[u];
    if (c === null) return null;
    const v = ua(c) || ua(p);
    return a[u][v];
  }), i = o && Object.entries(o).reduce((u, c) => {
    let [p, v] = c;
    return v === void 0 || (u[p] = v), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: v, ...f } = c;
    return Object.entries(f).every((g) => {
      let [h, _] = g;
      return Array.isArray(_) ? _.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === _;
    }) ? [
      ...u,
      p,
      v
    ] : u;
  }, []);
  return ca(e, l, d, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, Kp = Ht(
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
), { toast: Jt } = Sr();
function jp() {
  return {
    info: (e) => {
      Jt({
        icon: Nc,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Jt({
        icon: zc,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Jt({
        icon: ra,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Jt({
        icon: ra,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const Rf = /* @__PURE__ */ b({
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
    } = jp();
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
    ), (l, i) => (m(), x(r(Yc)));
  }
}), Wp = { class: "flex items-center justify-between space-y-2" }, Hp = { class: "flex items-center space-x-2" }, Ff = /* @__PURE__ */ b({
  __name: "Heading",
  props: {
    as: { default: "h2" }
  },
  setup(e) {
    return (t, o) => (m(), K("div", Wp, [
      (m(), x(Oe(t.as), { class: "text-3xl font-bold tracking-tight" }, {
        default: y(() => [
          w(t.$slots, "default")
        ]),
        _: 3
      })),
      oe("div", Hp, [
        w(t.$slots, "actions")
      ])
    ]));
  }
}), Lf = /* @__PURE__ */ b({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (s, l) => (m(), x(r(wi), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vf = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(xi), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zf = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(_i), null, {
      default: y(() => [
        R(r(Oi), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(r(ki), P(r(s), {
          class: r(L)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
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
}), Nf = /* @__PURE__ */ b({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Kf = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r($i), P(o.value, {
      class: r(L)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jf = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Ei), P(o.value, {
      class: r(L)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wf = /* @__PURE__ */ b({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Hf = /* @__PURE__ */ b({
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
    return (o, n) => (m(), x(r(j), {
      as: o.as,
      "as-child": o.asChild,
      class: ne(r(L)(r(Vn)({ variant: o.variant, size: o.size }), t.class))
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Vn = Ht(
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
), Uf = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Pi), P(o.value, {
      class: r(L)(r(Vn)(), t.class)
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gf = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Di), P(o.value, {
      class: r(L)(r(Vn)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Ai), {
      class: ne(r(L)(r(Up)({ size: o.size, shape: o.shape }), t.class))
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xf = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Mi), P(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), Yf = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Ii), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Up = Ht(
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
), Zf = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)(r(Gp)({ variant: o.variant }), t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Gp = Ht(
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
), qp = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Wi), P(r(s), {
      class: r(L)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        o.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xp = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (s, l) => (m(), x(r(wn), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qf = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(rt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jf = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(xn), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), em = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), tm = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(On), P(r(n), {
      class: r(L)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), om = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(Dn), P(r(n), {
      class: r(L)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yp = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(_n), null, {
      default: y(() => [
        R(r(yo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(r(ho), P(r(s), {
          class: r(L)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
          )
        }), {
          default: y(() => [
            w(l.$slots, "default"),
            R(r(rt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
              default: y(() => [
                R(r(Co), { class: "h-4 w-4" }),
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
}), nm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(_n), null, {
      default: y(() => [
        R(r(yo), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            R(r(ho), P({
              class: r(L)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                o.class
              )
            }, r(s), {
              onPointerDownOutside: i[0] || (i[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: y(() => [
                w(l.$slots, "default"),
                R(r(rt), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    R(r(Co), { class: "h-4 w-4" }),
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
}), am = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), rm = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (s, l) => (m(), x(r(Xp), W(U(r(a))), {
      default: y(() => [
        R(r(Yp), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            R(qp, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: y(() => [
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
}), sm = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Qi), P(o.value, {
      class: r(L)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lm = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Gi), P(o.value, {
      class: r(L)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        n.heading ? (m(), x(r(qi), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            ye(Ce(n.heading), 1)
          ]),
          _: 1
        })) : re("", !0),
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zp = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, im = /* @__PURE__ */ b({
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
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), K("div", Zp, [
      R(r(Fp), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(r(Hi), P({ ...r(n), ...a.$attrs }, {
        "auto-focus": "",
        class: r(L)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), dm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(od), P(r(s), {
      class: r(L)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qp = { role: "presentation" }, um = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Zi), P(r(s), {
      class: r(L)("max-h-[300px] overflow-y-auto overflow-x-hidden", o.class)
    }), {
      default: y(() => [
        oe("div", Qp, [
          w(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cm = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(nd), P(o.value, {
      class: r(L)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pm = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("span", {
      class: ne(r(L)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), fm = /* @__PURE__ */ b({
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
    return (s, l) => (m(), x(r(Ad), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = me(e);
    return (n, a) => (m(), x(r(Td), P({ class: "outline-none" }, r(o)), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Md), null, {
      default: y(() => [
        R(r(Id), P(r(s), {
          class: r(L)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
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
}), gm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Fd), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
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
    const a = Z(e, t);
    return (s, l) => (m(), x(r(Nd), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ b({
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
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(Rd), P(r(n), {
      class: r(L)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jp = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, bm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Vd), P(r(s), {
      class: r(L)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        oe("span", Jp, [
          R(r(mr), null, {
            default: y(() => [
              R(r(Lr), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ef = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, wm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Kd), P(r(s), {
      class: r(L)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        oe("span", ef, [
          R(r(mr), null, {
            default: y(() => [
              R(r(Rp), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xm = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("span", {
      class: ne(r(L)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), _m = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Ld), P(o.value, {
      class: r(L)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Cm = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(zd), P(r(n), {
      class: r(L)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bm = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (s, l) => (m(), x(r(jd), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), km = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(Hd), P(r(n), {
      class: r(L)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default"),
        R(r(Mp), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Om = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Wd), P(r(s), {
      class: r(L)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        o.class
      )
    }), {
      default: y(() => [
        w(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var pa;
const tf = typeof window < "u", of = (e) => typeof e < "u", nf = (e) => typeof e == "function";
tf && ((pa = window == null ? void 0 : window.navigator) != null && pa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function af(e) {
  return e;
}
function rf(e) {
  return JSON.parse(JSON.stringify(e));
}
const fa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ma = "__vueuse_ssr_handlers__";
fa[ma] = fa[ma] || {};
var va;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(va || (va = {}));
var sf = Object.defineProperty, ga = Object.getOwnPropertySymbols, lf = Object.prototype.hasOwnProperty, df = Object.prototype.propertyIsEnumerable, ha = (e, t, o) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, uf = (e, t) => {
  for (var o in t || (t = {}))
    lf.call(t, o) && ha(e, o, t[o]);
  if (ga)
    for (var o of ga(t))
      df.call(t, o) && ha(e, o, t[o]);
  return e;
};
const cf = {
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
uf({
  linear: af
}, cf);
function zr(e, t, o, n = {}) {
  var a, s, l;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p
  } = n, v = Ye(), f = o || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (s = v == null ? void 0 : v.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = u;
  g = u || g || `update:${t.toString()}`;
  const h = (C) => i ? nf(i) ? i(C) : rf(C) : C, _ = () => of(e[t]) ? h(e[t]) : p;
  if (d) {
    const C = _(), k = $(C);
    return Q(() => e[t], (B) => k.value = h(B)), Q(k, (B) => {
      (B !== e[t] || c) && f(g, B);
    }, { deep: c }), k;
  } else
    return D({
      get() {
        return _();
      },
      set(C) {
        f(g, C);
      }
    });
}
const Dm = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = zr(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (s, l) => gt((m(), K("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Ft(a) ? a.value = i : null),
      class: ne(
        r(L)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          o.class
        )
      )
    }, null, 2)), [
      [$a, r(a)]
    ]);
  }
}), $m = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Ud), P(o.value, {
      class: r(L)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Em = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (s, l) => (m(), x(r(qd), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Xd), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Yd), null, {
      default: y(() => [
        R(r(Jd), P({ ...r(s), ...l.$attrs }, {
          class: r(L)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
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
}), Am = /* @__PURE__ */ b({
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
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(au), P(o.value, {
      class: r(L)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        R(r(ru), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: ht(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Tm = /* @__PURE__ */ b({
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
    return (s, l) => (m(), x(r(cu), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mm = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Iu), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Im = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(mu), P(r(n), {
      class: r(L)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        w(a.$slots, "default"),
        R(r(Ru), { "as-child": "" }, {
          default: y(() => [
            R(r(Ap), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(vu), null, {
      default: y(() => [
        R(r(Cu), P({ ...r(s), ...l.$attrs }, {
          class: r(L)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            o.class
          )
        }), {
          default: y(() => [
            R(r(ff)),
            R(r(Au), {
              class: ne(
                r(L)(
                  "p-1",
                  l.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: y(() => [
                w(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(r(mf))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Fm = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Pu), P({
      class: r(L)("p-1 w-full", t.class)
    }, o.value), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pf = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, Lm = /* @__PURE__ */ b({
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
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(Ou), P(r(n), {
      class: r(L)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        oe("span", pf, [
          R(r(Du), null, {
            default: y(() => [
              R(r(Lr), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(r(br), null, {
          default: y(() => [
            w(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vm = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(br), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zm = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(Su), {
      class: ne(r(L)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nm = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Bu), P(o.value, {
      class: r(L)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), ff = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(Tu), P(r(n), {
      class: r(L)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          R(r(Ip))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mf = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...s } = t;
      return s;
    }), n = me(o);
    return (a, s) => (m(), x(r(Mu), P(r(n), {
      class: r(L)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        w(a.$slots, "default", {}, () => [
          R(r(Tp))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Km = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (s, l) => (m(), x(r(wn), W(U(r(a))), {
      default: y(() => [
        w(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(xn), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wm = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), x(r(rt), W(U(t)), {
      default: y(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, side: i, ...d } = o;
      return d;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(_n), null, {
      default: y(() => [
        R(r(yo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(r(ho), P({
          class: r(L)(r(vf)({ side: l.side }), o.class)
        }, { ...r(s), ...l.$attrs }), {
          default: y(() => [
            w(l.$slots, "default"),
            R(r(rt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                R(r(Co), { class: "h-4 w-4" })
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
}), Um = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Gm = /* @__PURE__ */ b({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(On), P({
      class: r(L)("text-lg font-semibold text-foreground", t.class)
    }, o.value), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qm = /* @__PURE__ */ b({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(r(Dn), P({
      class: r(L)("text-sm text-muted-foreground", t.class)
    }, o.value), {
      default: y(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xm = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), vf = Ht(
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
), Ym = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", {
      class: ne(r(L)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), Zm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(Xu), P({
      class: r(L)("relative flex w-full touch-none select-none items-center", o.class)
    }, r(s)), {
      default: y(() => [
        R(r(Qu), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            R(r(Ju), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (m(!0), K(pe, null, mt(l.modelValue, (d, u) => (m(), x(r(Zu), {
          key: u,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Qm = /* @__PURE__ */ b({
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
    const o = e, n = t, a = D(() => {
      const { class: l, ...i } = o;
      return i;
    }), s = Z(a, n);
    return (l, i) => (m(), x(r(ac), P(r(s), {
      class: r(L)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        o.class
      )
    }), {
      default: y(() => [
        R(r(rc), {
          class: ne(
            r(L)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), gf = { class: "relative w-full overflow-auto" }, Jm = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("div", gf, [
      oe("table", {
        class: ne(r(L)("w-full caption-bottom text-sm", t.class))
      }, [
        w(o.$slots, "default")
      ], 2)
    ]));
  }
}), ev = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("tbody", {
      class: ne(r(L)("[&_tr:last-child]:border-0", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), hf = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("td", {
      class: ne(
        r(L)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), tv = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("th", {
      class: ne(
        r(L)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), ov = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("thead", {
      class: ne(r(L)("[&_tr]:border-b", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), nv = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("tfoot", {
      class: ne(r(L)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), yf = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("tr", {
      class: ne(
        r(L)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), av = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (m(), K("caption", {
      class: ne(r(L)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), bf = { class: "flex items-center justify-center py-10" }, rv = /* @__PURE__ */ b({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (m(), x(yf, null, {
      default: y(() => [
        R(hf, P({
          class: r(L)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, o.value), {
          default: y(() => [
            oe("div", bf, [
              w(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), sv = /* @__PURE__ */ b({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = zr(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (s, l) => gt((m(), K("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Ft(a) ? a.value = i : null),
      class: ne(
        r(L)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          o.class
        )
      )
    }, null, 2)), [
      [$a, r(a)]
    ]);
  }
});
export {
  Lf as AlertDialog,
  Uf as AlertDialogAction,
  Gf as AlertDialogCancel,
  zf as AlertDialogContent,
  jf as AlertDialogDescription,
  Wf as AlertDialogFooter,
  Nf as AlertDialogHeader,
  Kf as AlertDialogTitle,
  Vf as AlertDialogTrigger,
  qf as Avatar,
  Yf as AvatarFallback,
  Xf as AvatarImage,
  Zf as Badge,
  Hf as Button,
  qp as Command,
  rm as CommandDialog,
  sm as CommandEmpty,
  lm as CommandGroup,
  im as CommandInput,
  dm as CommandItem,
  um as CommandList,
  cm as CommandSeparator,
  pm as CommandShortcut,
  Xp as Dialog,
  Qf as DialogClose,
  Yp as DialogContent,
  om as DialogDescription,
  am as DialogFooter,
  em as DialogHeader,
  nm as DialogScrollContent,
  tm as DialogTitle,
  Jf as DialogTrigger,
  fm as DropdownMenu,
  bm as DropdownMenuCheckboxItem,
  vm as DropdownMenuContent,
  gm as DropdownMenuGroup,
  ym as DropdownMenuItem,
  Cm as DropdownMenuLabel,
  Md as DropdownMenuPortal,
  hm as DropdownMenuRadioGroup,
  wm as DropdownMenuRadioItem,
  _m as DropdownMenuSeparator,
  xm as DropdownMenuShortcut,
  Bm as DropdownMenuSub,
  Om as DropdownMenuSubContent,
  km as DropdownMenuSubTrigger,
  mm as DropdownMenuTrigger,
  Rf as Flasher,
  Ef as Header,
  Ff as Heading,
  Dm as Input,
  $m as Label,
  Pf as Main,
  Em as Popover,
  Df as PopoverAnchor,
  Sm as PopoverContent,
  Pm as PopoverTrigger,
  Am as Progress,
  Tm as Select,
  Rm as SelectContent,
  Fm as SelectGroup,
  Lm as SelectItem,
  Vm as SelectItemText,
  zm as SelectLabel,
  mf as SelectScrollDownButton,
  ff as SelectScrollUpButton,
  Nm as SelectSeparator,
  Im as SelectTrigger,
  Mm as SelectValue,
  Km as Sheet,
  Wm as SheetClose,
  Hm as SheetContent,
  qm as SheetDescription,
  Xm as SheetFooter,
  Um as SheetHeader,
  Gm as SheetTitle,
  jm as SheetTrigger,
  Ym as Skeleton,
  Zm as Slider,
  Qm as Switch,
  Jm as Table,
  ev as TableBody,
  av as TableCaption,
  hf as TableCell,
  rv as TableEmpty,
  nv as TableFooter,
  tv as TableHead,
  ov as TableHeader,
  yf as TableRow,
  sv as Textarea,
  Pp as Toast,
  If as ToastAction,
  Lp as ToastClose,
  da as ToastDescription,
  zp as ToastProvider,
  Vp as ToastTitle,
  Sp as ToastViewport,
  Yc as Toaster,
  $f as TwoColumnLayout,
  Sf as TwoColumnLayoutSidebar,
  Af as TwoColumnLayoutSidebarDesktop,
  Tf as TwoColumnLayoutSidebarMobile,
  Mf as TwoColumnLayoutSidebarTrigger,
  Up as avatarVariant,
  Gp as badgeVariants,
  Vn as buttonVariants,
  xf as preset,
  vf as sheetVariants,
  Uc as toast,
  Kp as toastVariants,
  jp as useFlasher,
  Sr as useToast
};
