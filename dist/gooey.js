import * as La from "vue";
import { computed as $, ref as A, shallowRef as Dn, watch as ee, getCurrentScope as br, onScopeDispose as wr, shallowReadonly as Pt, unref as s, getCurrentInstance as vt, toRef as tl, camelize as xr, defineComponent as x, Comment as nl, mergeProps as P, cloneVNode as ol, h as xt, toRefs as ge, openBlock as h, createBlock as C, withCtx as y, renderSlot as _, withKeys as Mt, onMounted as ue, normalizeProps as G, guardReactiveProps as X, reactive as _r, createVNode as V, createCommentVNode as fe, withModifiers as Be, nextTick as oe, withDirectives as zt, vShow as Fo, watchEffect as xe, markRaw as al, watchSyncEffect as rl, createTextVNode as Ee, toDisplayString as De, isRef as _t, resolveDynamicComponent as je, onBeforeMount as Cr, onUnmounted as nt, createElementBlock as j, Fragment as we, renderList as Ct, Teleport as Ln, onBeforeUnmount as Fn, useSlots as sl, normalizeStyle as Nt, effectScope as Br, toHandlerKey as ll, createElementVNode as ne, vModelSelect as il, toRaw as ul, inject as Vo, provide as zo, customRef as dl, readonly as No, onBeforeUpdate as cl, onUpdated as pl, mergeDefaults as kr, watchPostEffect as fl, normalizeClass as re, isVNode as ml, vModelText as Sr } from "vue";
function Or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vl = {
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
}, uo = vl, jo = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function gl(e) {
  return e.trim().replace(jo.whitespace, " ");
}
function hl(e) {
  return encodeURIComponent(e).replace(jo.urlHexPairs, bl);
}
function yl(e) {
  return Object.keys(uo).forEach(function(t) {
    uo[t].test(e) && (e = e.replace(uo[t], t));
  }), e;
}
function bl(e) {
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
function Co(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = yl(gl(e)).replace(jo.quotes, "'");
  return "data:image/svg+xml," + hl(t);
}
Co.toSrcset = function(t) {
  return Co(t).replace(/ /g, "%20");
};
var wl = Co, Er = {}, Dr = {};
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
})(Dr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Dr);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(Er);
let co = Er;
var $r = (co.__esModule ? co : { default: co }).default, Ar = {}, Pr = {};
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
})(Pr);
var xl = {
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
  const t = Pr, n = /* @__PURE__ */ o(xl);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(Ar);
let po = Ar;
var _l = (po.__esModule ? po : { default: po }).default, Tr = {}, Ir = {}, Ko = { exports: {} }, Y = String, Mr = function() {
  return { isColorSupported: !1, reset: Y, bold: Y, dim: Y, italic: Y, underline: Y, inverse: Y, hidden: Y, strikethrough: Y, black: Y, red: Y, green: Y, yellow: Y, blue: Y, magenta: Y, cyan: Y, white: Y, gray: Y, bgBlack: Y, bgRed: Y, bgGreen: Y, bgYellow: Y, bgBlue: Y, bgMagenta: Y, bgCyan: Y, bgWhite: Y, blackBright: Y, redBright: Y, greenBright: Y, yellowBright: Y, blueBright: Y, magentaBright: Y, cyanBright: Y, whiteBright: Y, bgBlackBright: Y, bgRedBright: Y, bgGreenBright: Y, bgYellowBright: Y, bgBlueBright: Y, bgMagentaBright: Y, bgCyanBright: Y, bgWhiteBright: Y };
};
Ko.exports = Mr();
Ko.exports.createColors = Mr;
var Cl = Ko.exports;
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
  const n = /* @__PURE__ */ o(Cl);
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
})(Ir);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Ir);
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
})(Tr);
let fo = Tr;
var Bl = (fo.__esModule ? fo : { default: fo }).default;
const xn = wl, kl = $r, Rr = _l, lt = Bl, [Sl, { lineHeight: Ol }] = Rr.fontSize.base, { spacing: Xe, borderWidth: Fa, borderRadius: Va } = Rr;
function bt(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const El = kl.withOptions(function(e = { strategy: void 0 }) {
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
          "border-color": bt(
            o("colors.gray.500", lt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Fa.DEFAULT,
          "border-radius": Va.none,
          "padding-top": Xe[2],
          "padding-right": Xe[3],
          "padding-bottom": Xe[2],
          "padding-left": Xe[3],
          "font-size": Sl,
          "line-height": Ol,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": bt(
              o("colors.blue.600", lt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": bt(
              o("colors.blue.600", lt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: bt(o("colors.gray.500", lt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${xn(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              lt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Xe[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Xe[10],
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
          "padding-right": Xe[3],
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
          height: Xe[4],
          width: Xe[4],
          color: bt(o("colors.blue.600", lt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": bt(
            o("colors.gray.500", lt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Fa.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Va.none
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
          "--tw-ring-color": bt(
            o("colors.blue.600", lt.blue[600]),
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
          "background-image": `url("${xn(
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
          "background-image": `url("${xn(
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
          "background-image": `url("${xn(
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
var Dl = El;
const $l = /* @__PURE__ */ Or(Dl), Al = $r;
function za(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Pl = Al(
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
      { values: za(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: za(n("animationTimingFunction")) }
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
const Tl = /* @__PURE__ */ Or(Pl), Av = {
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
    Tl,
    $l({
      strategy: "class"
    })
  ]
}, Il = ["top", "right", "bottom", "left"], ct = Math.min, $e = Math.max, $n = Math.round, _n = Math.floor, pt = (e) => ({
  x: e,
  y: e
}), Ml = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rl = {
  start: "end",
  end: "start"
};
function Bo(e, t, n) {
  return $e(e, ct(t, n));
}
function et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tt(e) {
  return e.split("-")[0];
}
function jt(e) {
  return e.split("-")[1];
}
function Ho(e) {
  return e === "x" ? "y" : "x";
}
function Wo(e) {
  return e === "y" ? "height" : "width";
}
function ft(e) {
  return ["top", "bottom"].includes(tt(e)) ? "y" : "x";
}
function Uo(e) {
  return Ho(ft(e));
}
function Ll(e, t, n) {
  n === void 0 && (n = !1);
  const o = jt(e), a = Uo(e), r = Wo(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = An(l)), [l, An(l)];
}
function Fl(e) {
  const t = An(e);
  return [ko(e), t, ko(t)];
}
function ko(e) {
  return e.replace(/start|end/g, (t) => Rl[t]);
}
function Vl(e, t, n) {
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
function zl(e, t, n, o) {
  const a = jt(e);
  let r = Vl(tt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(ko)))), r;
}
function An(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ml[t]);
}
function Nl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Lr(e) {
  return typeof e != "number" ? Nl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pn(e) {
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
function Na(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = ft(t), l = Uo(t), i = Wo(l), u = tt(t), d = r === "y", p = o.x + o.width / 2 - a.width / 2, c = o.y + o.height / 2 - a.height / 2, m = o[i] / 2 - a[i] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: p,
        y: o.y - a.height
      };
      break;
    case "bottom":
      f = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: c
      };
      break;
    case "left":
      f = {
        x: o.x - a.width,
        y: c
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (jt(t)) {
    case "start":
      f[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      f[l] += m * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const jl = async (e, t, n) => {
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
  } = Na(d, o, u), m = o, f = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: w
    } = i[g], {
      x: k,
      y: B,
      data: D,
      reset: E
    } = await w({
      x: p,
      y: c,
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
    p = k ?? p, c = B ?? c, f = {
      ...f,
      [b]: {
        ...f[b],
        ...D
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (d = E.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : E.rects), {
      x: p,
      y: c
    } = Na(d, m, u)), g = -1);
  }
  return {
    x: p,
    y: c,
    placement: m,
    strategy: a,
    middlewareData: f
  };
};
async function nn(e, t) {
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
    altBoundary: m = !1,
    padding: f = 0
  } = et(t, e), v = Lr(f), b = i[m ? c === "floating" ? "reference" : "floating" : c], w = Pn(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: u
  })), k = c === "floating" ? {
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
  }, E = Pn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: B,
    strategy: u
  }) : k);
  return {
    top: (w.top - E.top + v.top) / D.y,
    bottom: (E.bottom - w.bottom + v.bottom) / D.y,
    left: (w.left - E.left + v.left) / D.x,
    right: (E.right - w.right + v.right) / D.x
  };
}
const Kl = (e) => ({
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
    } = et(e, t) || {};
    if (d == null)
      return {};
    const c = Lr(p), m = {
      x: n,
      y: o
    }, f = Uo(a), v = Wo(f), g = await l.getDimensions(d), b = f === "y", w = b ? "top" : "left", k = b ? "bottom" : "right", B = b ? "clientHeight" : "clientWidth", D = r.reference[v] + r.reference[f] - m[f] - r.floating[v], E = m[f] - r.reference[f], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let O = T ? T[B] : 0;
    (!O || !await (l.isElement == null ? void 0 : l.isElement(T))) && (O = i.floating[B] || r.floating[v]);
    const I = D / 2 - E / 2, R = O / 2 - g[v] / 2 - 1, S = ct(c[w], R), M = ct(c[k], R), L = S, q = O - g[v] - M, H = O / 2 - g[v] / 2 + I, N = Bo(L, H, q), U = !u.arrow && jt(a) != null && H !== N && r.reference[v] / 2 - (H < L ? S : M) - g[v] / 2 < 0, J = U ? H < L ? H - L : H - q : 0;
    return {
      [f]: m[f] + J,
      data: {
        [f]: N,
        centerOffset: H - N - J,
        ...U && {
          alignmentOffset: J
        }
      },
      reset: U
    };
  }
}), Hl = function(e) {
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
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = et(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const w = tt(a), k = ft(i), B = tt(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), E = m || (B || !g ? [An(i)] : Fl(i)), T = v !== "none";
      !m && T && E.push(...zl(i, g, v, D));
      const O = [i, ...E], I = await nn(t, b), R = [];
      let S = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (p && R.push(I[w]), c) {
        const H = Ll(a, l, D);
        R.push(I[H[0]], I[H[1]]);
      }
      if (S = [...S, {
        placement: a,
        overflows: R
      }], !R.every((H) => H <= 0)) {
        var M, L;
        const H = (((M = r.flip) == null ? void 0 : M.index) || 0) + 1, N = O[H];
        if (N)
          return {
            data: {
              index: H,
              overflows: S
            },
            reset: {
              placement: N
            }
          };
        let U = (L = S.filter((J) => J.overflows[0] <= 0).sort((J, ae) => J.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!U)
          switch (f) {
            case "bestFit": {
              var q;
              const J = (q = S.filter((ae) => {
                if (T) {
                  const le = ft(ae.placement);
                  return le === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  le === "y";
                }
                return !0;
              }).map((ae) => [ae.placement, ae.overflows.filter((le) => le > 0).reduce((le, ke) => le + ke, 0)]).sort((ae, le) => ae[1] - le[1])[0]) == null ? void 0 : q[0];
              J && (U = J);
              break;
            }
            case "initialPlacement":
              U = i;
              break;
          }
        if (a !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function ja(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ka(e) {
  return Il.some((t) => e[t] >= 0);
}
const Wl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = et(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await nn(t, {
            ...a,
            elementContext: "reference"
          }), l = ja(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Ka(l)
            }
          };
        }
        case "escaped": {
          const r = await nn(t, {
            ...a,
            altBoundary: !0
          }), l = ja(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Ka(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ul(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = tt(n), i = jt(n), u = ft(n) === "y", d = ["left", "top"].includes(l) ? -1 : 1, p = r && u ? -1 : 1, c = et(t, e);
  let {
    mainAxis: m,
    crossAxis: f,
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
  return i && typeof v == "number" && (f = i === "end" ? v * -1 : v), u ? {
    x: f * p,
    y: m * d
  } : {
    x: m * d,
    y: f * p
  };
}
const Gl = function(e) {
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
      } = t, u = await Ul(t, e);
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
}, ql = function(e) {
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
              y: k
            } = b;
            return {
              x: w,
              y: k
            };
          }
        },
        ...u
      } = et(e, t), d = {
        x: n,
        y: o
      }, p = await nn(t, u), c = ft(tt(a)), m = Ho(c);
      let f = d[m], v = d[c];
      if (r) {
        const b = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", k = f + p[b], B = f - p[w];
        f = Bo(k, f, B);
      }
      if (l) {
        const b = c === "y" ? "top" : "left", w = c === "y" ? "bottom" : "right", k = v + p[b], B = v - p[w];
        v = Bo(k, v, B);
      }
      const g = i.fn({
        ...t,
        [m]: f,
        [c]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [m]: r,
            [c]: l
          }
        }
      };
    }
  };
}, Xl = function(e) {
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
      } = et(e, t), p = {
        x: n,
        y: o
      }, c = ft(a), m = Ho(c);
      let f = p[m], v = p[c];
      const g = et(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const B = m === "y" ? "height" : "width", D = r.reference[m] - r.floating[B] + b.mainAxis, E = r.reference[m] + r.reference[B] - b.mainAxis;
        f < D ? f = D : f > E && (f = E);
      }
      if (d) {
        var w, k;
        const B = m === "y" ? "width" : "height", D = ["top", "left"].includes(tt(a)), E = r.reference[c] - r.floating[B] + (D && ((w = l.offset) == null ? void 0 : w[c]) || 0) + (D ? 0 : b.crossAxis), T = r.reference[c] + r.reference[B] + (D ? 0 : ((k = l.offset) == null ? void 0 : k[c]) || 0) - (D ? b.crossAxis : 0);
        v < E ? v = E : v > T && (v = T);
      }
      return {
        [m]: f,
        [c]: v
      };
    }
  };
}, Yl = function(e) {
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
      } = et(e, t), p = await nn(t, d), c = tt(a), m = jt(a), f = ft(a) === "y", {
        width: v,
        height: g
      } = r.floating;
      let b, w;
      c === "top" || c === "bottom" ? (b = c, w = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = c, b = m === "end" ? "top" : "bottom");
      const k = g - p.top - p.bottom, B = v - p.left - p.right, D = ct(g - p[b], k), E = ct(v - p[w], B), T = !t.middlewareData.shift;
      let O = D, I = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = B), (o = t.middlewareData.shift) != null && o.enabled.y && (O = k), T && !m) {
        const S = $e(p.left, 0), M = $e(p.right, 0), L = $e(p.top, 0), q = $e(p.bottom, 0);
        f ? I = v - 2 * (S !== 0 || M !== 0 ? S + M : $e(p.left, p.right)) : O = g - 2 * (L !== 0 || q !== 0 ? L + q : $e(p.top, p.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: O
      });
      const R = await l.getDimensions(i.floating);
      return v !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Vn() {
  return typeof window < "u";
}
function St(e) {
  return Go(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function He(e) {
  var t;
  return (t = (Go(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Go(e) {
  return Vn() ? e instanceof Node || e instanceof Ae(e).Node : !1;
}
function Le(e) {
  return Vn() ? e instanceof Element || e instanceof Ae(e).Element : !1;
}
function Ke(e) {
  return Vn() ? e instanceof HTMLElement || e instanceof Ae(e).HTMLElement : !1;
}
function Ha(e) {
  return !Vn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ae(e).ShadowRoot;
}
function cn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = Fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(a);
}
function Zl(e) {
  return ["table", "td", "th"].includes(St(e));
}
function zn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function qo(e) {
  const t = Xo(), n = Le(e) ? Fe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ql(e) {
  let t = mt(e);
  for (; Ke(t) && !Vt(t); ) {
    if (qo(t))
      return t;
    if (zn(t))
      return null;
    t = mt(t);
  }
  return null;
}
function Xo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vt(e) {
  return ["html", "body", "#document"].includes(St(e));
}
function Fe(e) {
  return Ae(e).getComputedStyle(e);
}
function Nn(e) {
  return Le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if (St(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ha(e) && e.host || // Fallback.
    He(e)
  );
  return Ha(t) ? t.host : t;
}
function Fr(e) {
  const t = mt(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ke(t) && cn(t) ? t : Fr(t);
}
function on(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Fr(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Ae(a);
  if (r) {
    const i = So(l);
    return t.concat(l, l.visualViewport || [], cn(a) ? a : [], i && n ? on(i) : []);
  }
  return t.concat(a, on(a, [], n));
}
function So(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vr(e) {
  const t = Fe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = Ke(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = $n(n) !== r || $n(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function Yo(e) {
  return Le(e) ? e : e.contextElement;
}
function Rt(e) {
  const t = Yo(e);
  if (!Ke(t))
    return pt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Vr(t);
  let l = (r ? $n(n.width) : n.width) / o, i = (r ? $n(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Jl = /* @__PURE__ */ pt(0);
function zr(e) {
  const t = Ae(e);
  return !Xo() || !t.visualViewport ? Jl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ei(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ae(e) ? !1 : t;
}
function Bt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = Yo(e);
  let l = pt(1);
  t && (o ? Le(o) && (l = Rt(o)) : l = Rt(e));
  const i = ei(r, n, o) ? zr(r) : pt(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, p = a.width / l.x, c = a.height / l.y;
  if (r) {
    const m = Ae(r), f = o && Le(o) ? Ae(o) : o;
    let v = m, g = So(v);
    for (; g && o && f !== v; ) {
      const b = Rt(g), w = g.getBoundingClientRect(), k = Fe(g), B = w.left + (g.clientLeft + parseFloat(k.paddingLeft)) * b.x, D = w.top + (g.clientTop + parseFloat(k.paddingTop)) * b.y;
      u *= b.x, d *= b.y, p *= b.x, c *= b.y, u += B, d += D, v = Ae(g), g = So(v);
    }
  }
  return Pn({
    width: p,
    height: c,
    x: u,
    y: d
  });
}
function ti(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = He(o), i = t ? zn(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = pt(1);
  const p = pt(0), c = Ke(o);
  if ((c || !c && !r) && ((St(o) !== "body" || cn(l)) && (u = Nn(o)), Ke(o))) {
    const m = Bt(o);
    d = Rt(o), p.x = m.x + o.clientLeft, p.y = m.y + o.clientTop;
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + p.x,
    y: n.y * d.y - u.scrollTop * d.y + p.y
  };
}
function ni(e) {
  return Array.from(e.getClientRects());
}
function Oo(e, t) {
  const n = Nn(e).scrollLeft;
  return t ? t.left + n : Bt(He(e)).left + n;
}
function oi(e) {
  const t = He(e), n = Nn(e), o = e.ownerDocument.body, a = $e(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = $e(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Oo(e);
  const i = -n.scrollTop;
  return Fe(o).direction === "rtl" && (l += $e(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
function ai(e, t) {
  const n = Ae(e), o = He(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = Xo();
    (!d || d && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function ri(e, t) {
  const n = Bt(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = Ke(e) ? Rt(e) : pt(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function Wa(e, t, n) {
  let o;
  if (t === "viewport")
    o = ai(e, n);
  else if (t === "document")
    o = oi(He(e));
  else if (Le(t))
    o = ri(t, n);
  else {
    const a = zr(e);
    o = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return Pn(o);
}
function Nr(e, t) {
  const n = mt(e);
  return n === t || !Le(n) || Vt(n) ? !1 : Fe(n).position === "fixed" || Nr(n, t);
}
function si(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = on(e, [], !1).filter((i) => Le(i) && St(i) !== "body"), a = null;
  const r = Fe(e).position === "fixed";
  let l = r ? mt(e) : e;
  for (; Le(l) && !Vt(l); ) {
    const i = Fe(l), u = qo(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || cn(l) && !u && Nr(e, l)) ? o = o.filter((p) => p !== l) : a = i, l = mt(l);
  }
  return t.set(e, o), o;
}
function li(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? zn(t) ? [] : si(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, p) => {
    const c = Wa(t, p, a);
    return d.top = $e(c.top, d.top), d.right = ct(c.right, d.right), d.bottom = ct(c.bottom, d.bottom), d.left = $e(c.left, d.left), d;
  }, Wa(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function ii(e) {
  const {
    width: t,
    height: n
  } = Vr(e);
  return {
    width: t,
    height: n
  };
}
function ui(e, t, n) {
  const o = Ke(t), a = He(t), r = n === "fixed", l = Bt(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = pt(0);
  if (o || !o && !r)
    if ((St(t) !== "body" || cn(a)) && (i = Nn(t)), o) {
      const f = Bt(t, !0, r, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else a && (u.x = Oo(a));
  let d = 0, p = 0;
  if (a && !o && !r) {
    const f = a.getBoundingClientRect();
    p = f.top + i.scrollTop, d = f.left + i.scrollLeft - // RTL <body> scrollbar.
    Oo(a, f);
  }
  const c = l.left + i.scrollLeft - u.x - d, m = l.top + i.scrollTop - u.y - p;
  return {
    x: c,
    y: m,
    width: l.width,
    height: l.height
  };
}
function mo(e) {
  return Fe(e).position === "static";
}
function Ua(e, t) {
  if (!Ke(e) || Fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return He(e) === n && (n = n.ownerDocument.body), n;
}
function jr(e, t) {
  const n = Ae(e);
  if (zn(e))
    return n;
  if (!Ke(e)) {
    let a = mt(e);
    for (; a && !Vt(a); ) {
      if (Le(a) && !mo(a))
        return a;
      a = mt(a);
    }
    return n;
  }
  let o = Ua(e, t);
  for (; o && Zl(o) && mo(o); )
    o = Ua(o, t);
  return o && Vt(o) && mo(o) && !qo(o) ? n : o || Ql(e) || n;
}
const di = async function(e) {
  const t = this.getOffsetParent || jr, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: ui(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ci(e) {
  return Fe(e).direction === "rtl";
}
const pi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ti,
  getDocumentElement: He,
  getClippingRect: li,
  getOffsetParent: jr,
  getElementRects: di,
  getClientRects: ni,
  getDimensions: ii,
  getScale: Rt,
  isElement: Le,
  isRTL: ci
};
function fi(e, t) {
  let n = null, o;
  const a = He(e);
  function r() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const {
      left: d,
      top: p,
      width: c,
      height: m
    } = e.getBoundingClientRect();
    if (i || t(), !c || !m)
      return;
    const f = _n(p), v = _n(a.clientWidth - (d + c)), g = _n(a.clientHeight - (p + m)), b = _n(d), k = {
      rootMargin: -f + "px " + -v + "px " + -g + "px " + -b + "px",
      threshold: $e(0, ct(1, u)) || 1
    };
    let B = !0;
    function D(E) {
      const T = E[0].intersectionRatio;
      if (T !== u) {
        if (!B)
          return l();
        T ? l(!1, T) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      n = new IntersectionObserver(D, {
        ...k,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(D, k);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function mi(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Yo(e), p = a || r ? [...d ? on(d) : [], ...on(t)] : [];
  p.forEach((w) => {
    a && w.addEventListener("scroll", n, {
      passive: !0
    }), r && w.addEventListener("resize", n);
  });
  const c = d && i ? fi(d, n) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [k] = w;
    k && k.target === d && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var B;
      (B = f) == null || B.observe(t);
    })), n();
  }), d && !u && f.observe(d), f.observe(t));
  let v, g = u ? Bt(e) : null;
  u && b();
  function b() {
    const w = Bt(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    p.forEach((k) => {
      a && k.removeEventListener("scroll", n), r && k.removeEventListener("resize", n);
    }), c == null || c(), (w = f) == null || w.disconnect(), f = null, u && cancelAnimationFrame(v);
  };
}
const vi = Gl, gi = ql, Ga = Hl, hi = Yl, yi = Wl, bi = Kl, wi = Xl, xi = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: pi,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return jl(e, t, {
    ...a,
    platform: r
  });
};
function _i(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Eo(e) {
  if (_i(e)) {
    const t = e.$el;
    return Go(t) && St(t) === "#comment" ? null : t;
  }
  return e;
}
function It(e) {
  return typeof e == "function" ? e() : s(e);
}
function Ci(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Eo(It(e.element));
      return n == null ? {} : bi({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Kr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qa(e, t) {
  const n = Kr(e);
  return Math.round(t * n) / n;
}
function Bi(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = $(() => {
    var O;
    return (O = It(n.open)) != null ? O : !0;
  }), r = $(() => It(n.middleware)), l = $(() => {
    var O;
    return (O = It(n.placement)) != null ? O : "bottom";
  }), i = $(() => {
    var O;
    return (O = It(n.strategy)) != null ? O : "absolute";
  }), u = $(() => {
    var O;
    return (O = It(n.transform)) != null ? O : !0;
  }), d = $(() => Eo(e.value)), p = $(() => Eo(t.value)), c = A(0), m = A(0), f = A(i.value), v = A(l.value), g = Dn({}), b = A(!1), w = $(() => {
    const O = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return O;
    const I = qa(p.value, c.value), R = qa(p.value, m.value);
    return u.value ? {
      ...O,
      transform: "translate(" + I + "px, " + R + "px)",
      ...Kr(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: I + "px",
      top: R + "px"
    };
  });
  let k;
  function B() {
    if (d.value == null || p.value == null)
      return;
    const O = a.value;
    xi(d.value, p.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      c.value = I.x, m.value = I.y, f.value = I.strategy, v.value = I.placement, g.value = I.middlewareData, b.value = O !== !1;
    });
  }
  function D() {
    typeof k == "function" && (k(), k = void 0);
  }
  function E() {
    if (D(), o === void 0) {
      B();
      return;
    }
    if (d.value != null && p.value != null) {
      k = o(d.value, p.value, B);
      return;
    }
  }
  function T() {
    a.value || (b.value = !1);
  }
  return ee([r, l, i, a], B, {
    flush: "sync"
  }), ee([d, p], E, {
    flush: "sync"
  }), ee(a, T, {
    flush: "sync"
  }), br() && wr(D), {
    x: Pt(c),
    y: Pt(m),
    strategy: Pt(f),
    placement: Pt(v),
    middlewareData: Pt(g),
    isPositioned: Pt(b),
    floatingStyles: w,
    update: B
  };
}
function te(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = Vo(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (zo(o, a), a)];
}
function Zo(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Tn(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), n);
}
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Si = function e(t, n) {
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
const wt = /* @__PURE__ */ ki(Si);
function Lt(e) {
  return e == null;
}
function Oi(e, t) {
  var n;
  const o = Dn();
  return xe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), No(o);
}
function Kt(e) {
  return br() ? (wr(e), !0) : !1;
}
function Ei(e) {
  let t = !1, n;
  const o = Br(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Hr(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Br(!0), n = o.run(() => e(...r))), Kt(a), n);
}
function Je(e) {
  return typeof e == "function" ? e() : s(e);
}
const We = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Di = (e) => typeof e < "u", $i = (e) => e != null, Ai = Object.prototype.toString, Pi = (e) => Ai.call(e) === "[object Object]", Wr = () => {
}, Xa = /* @__PURE__ */ Ti();
function Ti() {
  var e, t;
  return We && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ii(e) {
  return vt();
}
function Mi(e, t = 1e4) {
  return dl((n, o) => {
    let a = Je(e), r;
    const l = () => setTimeout(() => {
      a = Je(e), o();
    }, Je(t));
    return Kt(() => {
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
function Ri(e, t) {
  Ii() && Fn(e, t);
}
function Li(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = A(!1);
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
    }, Je(t));
  }
  return o && (a.value = !0, We && u()), Kt(i), {
    isPending: No(a),
    start: u,
    stop: i
  };
}
function Fi(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = Li(
    o ?? Wr,
    e,
    t
  ), r = $(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function Pe(e) {
  var t;
  const n = Je(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const jn = We ? window : void 0;
function In(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = jn) : [t, n, o, a] = e, !t)
    return Wr;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((p) => p()), r.length = 0;
  }, i = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), u = ee(
    () => [Pe(t), Je(a)],
    ([p, c]) => {
      if (l(), !p)
        return;
      const m = Pi(c) ? { ...c } : c;
      r.push(
        ...n.flatMap((f) => o.map((v) => i(p, f, v, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Kt(d), d;
}
function Vi(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Qo(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = jn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = Vi(t);
  return In(a, r, (d) => {
    d.repeat && Je(i) || u(d) && n(d);
  }, l);
}
function Jo() {
  const e = A(!1), t = vt();
  return t && ue(() => {
    e.value = !0;
  }, t), e;
}
function zi(e) {
  const t = Jo();
  return $(() => (t.value, !!e()));
}
function Ni(e, t, n = {}) {
  const { window: o = jn, ...a } = n;
  let r;
  const l = zi(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = $(() => {
    const m = Je(e), f = (Array.isArray(m) ? m : [m]).map(Pe).filter($i);
    return new Set(f);
  }), d = ee(
    () => u.value,
    (m) => {
      i(), l.value && m.size && (r = new MutationObserver(t), m.forEach((f) => r.observe(f, a)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => r == null ? void 0 : r.takeRecords(), c = () => {
    i(), d();
  };
  return Kt(c), {
    isSupported: l,
    stop: c,
    takeRecords: p
  };
}
function Ur(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = jn
  } = t, r = A(!1), l = o ? 1e3 / o : null;
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
  function p() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function c() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && p(), Kt(c), {
    isActive: No(r),
    pause: c,
    resume: p
  };
}
function ji(e) {
  return JSON.parse(JSON.stringify(e));
}
function ve(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: m
  } = o, f = vt(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (B) => i ? typeof i == "function" ? i(B) : ji(B) : B, w = () => Di(e[t]) ? b(e[t]) : c, k = (B) => {
    m ? m(B) && v(g, B) : v(g, B);
  };
  if (u) {
    const B = w(), D = A(B);
    let E = !1;
    return ee(
      () => e[t],
      (T) => {
        E || (E = !0, D.value = b(T), oe(() => E = !1));
      }
    ), ee(
      D,
      (T) => {
        !E && (T !== e[t] || p) && k(T);
      },
      { deep: p }
    ), D;
  } else
    return $({
      get() {
        return w();
      },
      set(B) {
        k(B);
      }
    });
}
function Kn(e) {
  return e ? e.flatMap((t) => t.type === we ? Kn(t.children) : [t]) : [];
}
const Ki = ["INPUT", "TEXTAREA"];
function Gr(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Ki.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: p = !1
  } = o, [c, m, f, v, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = f || v, k = c || m;
  if (!g && !b && (!w && !k || a === "vertical" && k || a === "horizontal" && w))
    return null;
  const B = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let D = null;
  return k || w ? D = qr(B, t, {
    goForward: w ? v : u === "ltr" ? c : m,
    loop: i
  }) : g ? D = B.at(0) || null : b && (D = B.at(-1) || null), p && (D == null || D.focus()), D;
}
function qr(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? qr(
    e,
    i,
    n,
    o
  ) : i : null;
}
function vo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Do(e, t, n = ".", o) {
  if (!vo(t))
    return Do(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : vo(l) && vo(a[r]) ? a[r] = Do(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function Hi(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Do(n, o, ""), {})
  );
}
const Wi = Hi(), [Hn, Pv] = te("ConfigProvider");
let Ui = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Gi = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Ui[Math.random() * 64 | 0];
  return t;
};
const qi = Hr(() => {
  const e = A(/* @__PURE__ */ new Map()), t = A(), n = $(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = Hn({
    scrollBody: A(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Xa && (a == null || a()), t.value = void 0;
  };
  return ee(n, (l, i) => {
    var u;
    if (!We)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, p = { padding: d, margin: 0 }, c = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Wi({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), Xa && (a = In(
      document,
      "touchmove",
      (m) => {
        var f;
        m.target === document.documentElement && (m.touches.length > 1 || (f = m.preventDefault) == null || f.call(m));
      },
      { passive: !1 }
    )), oe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function pn(e) {
  const t = Gi(6), n = qi();
  n.value.set(t, e ?? !1);
  const o = $({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Ri(() => {
    n.value.delete(t);
  }), o;
}
const Xi = "data-radix-vue-collection-item";
function Ht(e, t = Xi) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = A([]);
    function r() {
      const l = Pe(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return cl(() => {
      a.value = [];
    }), ue(r), pl(r), ee(() => o == null ? void 0 : o.value, r, { immediate: !0 }), zo(n, a), a;
  }, injectCollection: () => Vo(n, A([])) };
}
function Ot(e) {
  const t = Hn({
    dir: A("ltr")
  });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function gt(e) {
  const t = vt(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[ll(xr(a))] = (...r) => e(a, ...r);
  }), o;
}
let go = 0;
function ea() {
  xe((e) => {
    if (!We)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ya()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ya()
    ), go++, e(() => {
      go === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), go--;
    });
  });
}
function Ya() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Wn(e) {
  return $(() => {
    var t;
    return Je(e) ? !!((t = Pe(e)) != null && t.closest("form")) : !0;
  });
}
function Ce(e) {
  const t = vt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = tl(e);
  return $(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[xr(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Q(e, t) {
  const n = Ce(e), o = t ? gt(t) : {};
  return $(() => ({
    ...n.value,
    ...o
  }));
}
function F() {
  const e = vt(), t = A(), n = $(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Pe(t);
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
    t.value = l, !(l instanceof Element || !l) && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l.$el
    }), e.exposed = a);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
var Yi = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Tt = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), Bn = {}, ho = 0, Xr = function(e) {
  return e && (e.host || Xr(e.parentNode));
}, Zi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Xr(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Qi = function(e, t, n, o) {
  var a = Zi(t, Array.isArray(e) ? e : [e]);
  Bn[n] || (Bn[n] = /* @__PURE__ */ new WeakMap());
  var r = Bn[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  a.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(m) {
      if (i.has(m))
        p(m);
      else
        try {
          var f = m.getAttribute(o), v = f !== null && f !== "false", g = (Tt.get(m) || 0) + 1, b = (r.get(m) || 0) + 1;
          Tt.set(m, g), r.set(m, b), l.push(m), g === 1 && v && Cn.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return p(t), i.clear(), ho++, function() {
    l.forEach(function(c) {
      var m = Tt.get(c) - 1, f = r.get(c) - 1;
      Tt.set(c, m), r.set(c, f), m || (Cn.has(c) || c.removeAttribute(o), Cn.delete(c)), f || c.removeAttribute(n);
    }), ho--, ho || (Tt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), Bn = {});
  };
}, Ji = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Yi(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), Qi(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function fn(e) {
  let t;
  ee(() => Pe(e), (n) => {
    n ? t = Ji(n) : t && t();
  }), nt(() => {
    t && t();
  });
}
let eu = 0;
function _e(e, t = "radix") {
  const n = Hn({ useId: void 0 });
  return La.useId ? `${t}-${La.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++eu}`;
}
function Yr(e) {
  const t = A(), n = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ue(() => {
    const a = Pe(e);
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
function tu(e, t) {
  const n = A(e);
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
function ta(e) {
  const t = Mi("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      var a, r;
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const l = (e == null ? void 0 : e.value) ?? o, i = document.activeElement, u = ((r = (a = l.find((m) => m === i)) == null ? void 0 : a.textContent) == null ? void 0 : r.trim()) ?? "", d = l.map((m) => {
        var f;
        return ((f = m.textContent) == null ? void 0 : f.trim()) ?? "";
      }), p = ou(d, t.value, u), c = l.find(
        (m) => {
          var f;
          return ((f = m.textContent) == null ? void 0 : f.trim()) === p;
        }
      );
      return c && c.focus(), c;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function nu(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function ou(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = nu(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const na = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = Kn(n.default()), l = r.findIndex((p) => p.type !== nl);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? P(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = ol(i, u);
      for (const p in u)
        p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = u[p]);
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => xt(o, t) : o !== "template" ? () => xt(e.as, t, { default: n.default }) : () => xt(na, t, { default: n.default });
  }
});
function Zr() {
  const e = A(), t = $(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Pe(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Qr, au] = te("CollapsibleRoot"), ru = /* @__PURE__ */ x({
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
    const o = e, a = ve(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = ve(o, "disabled");
    return au({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), F(), (l, i) => (h(), C(s(K), {
      as: l.as,
      "as-child": o.asChild,
      "data-state": o.open ? "open" : "closed",
      "data-disabled": o.disabled ? "" : void 0
    }, {
      default: y(() => [
        _(l.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), su = /* @__PURE__ */ x({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const n = Qr();
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
function lu(e, t) {
  const n = A({}), o = A("none"), a = e.value ? "mounted" : "unmounted", { state: r, dispatch: l } = tu(a, {
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
  }), i = (m) => {
    var f;
    if (We) {
      const v = new CustomEvent(m, { bubbles: !1, cancelable: !1 });
      (f = t.value) == null || f.dispatchEvent(v);
    }
  };
  ee(
    e,
    async (m, f) => {
      var v;
      const g = f !== m;
      if (await oe(), g) {
        const b = o.value, w = kn(t.value);
        m ? (l("MOUNT"), i("enter"), w === "none" && i("after-enter")) : w === "none" || ((v = n.value) == null ? void 0 : v.display) === "none" ? (l("UNMOUNT"), i("leave"), i("after-leave")) : f && b !== w ? (l("ANIMATION_OUT"), i("leave")) : (l("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (m) => {
    const f = kn(t.value), v = f.includes(
      m.animationName
    ), g = r.value === "mounted" ? "enter" : "leave";
    m.target === t.value && v && (i(`after-${g}`), l("ANIMATION_END")), m.target === t.value && f === "none" && l("ANIMATION_END");
  }, d = (m) => {
    m.target === t.value && (o.value = kn(t.value));
  }, p = ee(
    t,
    (m, f) => {
      m ? (n.value = getComputedStyle(m), m.addEventListener("animationstart", d), m.addEventListener("animationcancel", u), m.addEventListener("animationend", u)) : (l("ANIMATION_END"), f == null || f.removeEventListener("animationstart", d), f == null || f.removeEventListener("animationcancel", u), f == null || f.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), c = ee(r, () => {
    const m = kn(t.value);
    o.value = r.value === "mounted" ? m : "none";
  });
  return nt(() => {
    p(), c();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(r.value)
    )
  };
}
function kn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ue = x({
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
    const { present: a, forceMount: r } = ge(e), l = A(), { isPresent: i } = lu(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = Kn(u || []);
    const d = vt();
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
    return () => r.value || a.value || i.value ? xt(t.default({ present: i })[0], {
      ref: (p) => {
        const c = Pe(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? l.value = c.firstElementChild : l.value = c), c;
      }
    }) : null;
  }
}), iu = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qr();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-collapsible-content"));
    const o = A(), { forwardRef: a, currentElement: r } = F(), l = A(0), i = A(0), u = $(() => n.open.value), d = A(u.value), p = A();
    return ee(
      () => {
        var c;
        return [u.value, (c = o.value) == null ? void 0 : c.present];
      },
      async () => {
        await oe();
        const c = r.value;
        if (!c)
          return;
        p.value = p.value || {
          transitionDuration: c.style.transitionDuration,
          animationName: c.style.animationName
        }, c.style.transitionDuration = "0s", c.style.animationName = "none";
        const m = c.getBoundingClientRect();
        i.value = m.height, l.value = m.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: !0
      }
    ), ue(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (c, m) => (h(), C(s(Ue), {
      ref_key: "presentRef",
      ref: o,
      present: c.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var f, v;
        return [
          V(s(K), P(c.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: c.as,
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
                (g = o.value) != null && g.present ? _(c.$slots, "default", { key: 0 }) : fe("", !0)
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
function Jr({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (Lt(e) && Lt(n) && Lt(t))
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
function uu({ type: e, defaultValue: t, modelValue: n }) {
  return e || Jr({ type: e, defaultValue: t, modelValue: n });
}
function du({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function cu(e, t) {
  const n = A(uu(e)), o = ve(e, "modelValue", t, {
    defaultValue: du(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = Jr(e);
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
const [Un, pu] = te("AccordionRoot"), fu = /* @__PURE__ */ x({
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
    const n = e, o = t, { dir: a, disabled: r } = ge(n), l = Ot(a), { modelValue: i, changeModelValue: u, isSingle: d } = cu(n, o), { forwardRef: p, currentElement: c } = F();
    return pu({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: c,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (m, f) => (h(), C(s(K), {
      ref: s(p),
      "as-child": m.asChild,
      as: m.as
    }, {
      default: y(() => [
        _(m.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [oa, mu] = te("AccordionItem"), vu = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = Un(), a = $(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = $(() => o.disabled.value || n.disabled || o.isSingle.value && a.value && !o.collapsible), l = $(() => r.value ? "" : void 0), i = $(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = F();
    mu({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: $(() => n.value)
    });
    function p(c) {
      Gr(
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
    return (c, m) => (h(), C(s(ru), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Mt(p, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(c.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), gu = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Un(), o = oa();
    return F(), (a, r) => (h(), C(s(iu), {
      role: "region",
      hidden: !s(o).open.value,
      "as-child": t.asChild,
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
    }, 8, ["hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), hu = /* @__PURE__ */ x({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = Un(), o = oa();
    return F(), (a, r) => (h(), C(s(K), {
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
}), yu = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Un(), o = oa();
    o.triggerId || (o.triggerId = _e(void 0, "radix-vue-accordion-trigger"));
    function a() {
      o.disabled.value || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), C(s(su), {
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
}), [Ge, bu] = te("DialogRoot"), aa = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = A(), r = A(), { modal: l } = ge(n);
    return bu({
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
}), ra = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ge(), { forwardRef: o, currentElement: a } = F();
    return n.contentId || (n.contentId = _e(void 0, "radix-vue-dialog-content")), ue(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(K), P(t, {
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
}), mn = /* @__PURE__ */ x({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Jo();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Ln, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : fe("", !0);
  }
}), sa = /* @__PURE__ */ x({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mn), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wu = "dismissableLayer.pointerDownOutside", xu = "dismissableLayer.focusOutside";
function es(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function _u(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = A(!1), r = A(() => {
  });
  return xe((l) => {
    if (!We)
      return;
    const i = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (es(t.value, p)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let c = function() {
            Zo(
              wu,
              e,
              m
            );
          };
          const m = { originalEvent: d };
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
function Cu(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = A(!1);
  return xe((r) => {
    if (!We)
      return;
    const l = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || es(t.value, i.target)) && i.target && !a.value && Zo(
        xu,
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
const Me = _r({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vn = /* @__PURE__ */ x({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = F(), l = $(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => Me.layersRoot), u = $(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = $(() => Me.layersWithOutsidePointerEventsDisabled.size > 0), p = $(() => {
      const v = Array.from(i.value), [g] = [...Me.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), c = _u(async (v) => {
      const g = [...Me.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !p.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await oe(), v.defaultPrevented || o("dismiss"));
    }, r), m = Cu((v) => {
      [...Me.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, r);
    Qo("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let f;
    return xe((v) => {
      r.value && (n.disableOutsidePointerEvents && (Me.layersWithOutsidePointerEventsDisabled.size === 0 && (f = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Me.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && Me.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = f);
      }));
    }), xe((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), Me.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (h(), C(s(K), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Nt({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(m).onFocusCapture,
      onBlurCapture: s(m).onBlurCapture,
      onPointerdownCapture: s(c).onPointerDownCapture
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Bu = /* @__PURE__ */ x({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = F();
    return ue(() => {
      Me.branches.add(o.value);
    }), nt(() => {
      Me.branches.delete(o.value);
    }), (a, r) => (h(), C(s(K), P({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yo = "focusScope.autoFocusOnMount", bo = "focusScope.autoFocusOnUnmount", Za = { bubbles: !1, cancelable: !0 };
function En(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (dt(o, { select: t }), document.activeElement !== n)
      return !0;
}
function ku(e) {
  const t = la(e), n = Qa(t, e), o = Qa(t.reverse(), e);
  return [n, o];
}
function la(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qa(e, t) {
  for (const n of e)
    if (!Su(n, { upTo: t }))
      return n;
}
function Su(e, { upTo: t }) {
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
function Ou(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function dt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ou(e) && t && e.select();
  }
}
const Eu = Ei(() => A([]));
function Du() {
  const e = Eu();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Ja(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Ja(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Ja(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function $u(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Gn = /* @__PURE__ */ x({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = F(), l = A(null), i = Du(), u = _r({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((p) => {
      if (!We)
        return;
      const c = r.value;
      if (!n.trapped)
        return;
      function m(b) {
        if (u.paused || !c)
          return;
        const w = b.target;
        c.contains(w) ? l.value = w : dt(l.value, { select: !0 });
      }
      function f(b) {
        if (u.paused || !c)
          return;
        const w = b.relatedTarget;
        w !== null && (c.contains(w) || dt(l.value, { select: !0 }));
      }
      function v(b) {
        c.contains(l.value) || dt(c);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", f);
      const g = new MutationObserver(v);
      c && g.observe(c, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", f), g.disconnect();
      });
    }), xe(async (p) => {
      const c = r.value;
      if (await oe(), !c)
        return;
      i.add(u);
      const m = document.activeElement;
      if (!c.contains(m)) {
        const f = new CustomEvent(yo, Za);
        c.addEventListener(yo, (v) => o("mountAutoFocus", v)), c.dispatchEvent(f), f.defaultPrevented || (En($u(la(c)), {
          select: !0
        }), document.activeElement === m && dt(c));
      }
      p(() => {
        c.removeEventListener(yo, (g) => o("mountAutoFocus", g));
        const f = new CustomEvent(bo, Za), v = (g) => {
          o("unmountAutoFocus", g);
        };
        c.addEventListener(bo, v), c.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || dt(m ?? document.body, { select: !0 }), c.removeEventListener(bo, v), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, m = document.activeElement;
      if (c && m) {
        const f = p.currentTarget, [v, g] = ku(f);
        v && g ? !p.shiftKey && m === g ? (p.preventDefault(), n.loop && dt(v, { select: !0 })) : p.shiftKey && m === v && (p.preventDefault(), n.loop && dt(g, { select: !0 })) : m === f && p.preventDefault();
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
        _(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Au = "menu.itemSelect", $o = ["Enter", " "], Pu = ["ArrowDown", "PageUp", "Home"], ts = ["ArrowUp", "PageDown", "End"], Tu = [...Pu, ...ts], Iu = {
  ltr: [...$o, "ArrowRight"],
  rtl: [...$o, "ArrowLeft"]
}, Mu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function ia(e) {
  return e ? "open" : "closed";
}
function Mn(e) {
  return e === "indeterminate";
}
function ua(e) {
  return Mn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ao(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Ru(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (a = !a);
  }
  return a;
}
function Lu(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ru(n, t);
}
function an(e) {
  return e.pointerType === "mouse";
}
const Fu = "DialogTitle", Vu = "DialogContent";
function zu({
  titleName: e = Fu,
  contentName: t = Vu,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ue(() => {
    var u;
    document.getElementById(o) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const ns = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ge(), { forwardRef: r, currentElement: l } = F();
    return a.titleId || (a.titleId = _e(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = _e(void 0, "radix-vue-dialog-description")), ue(() => {
      a.contentElement = l, document.activeElement !== document.body && (a.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && zu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(Gn), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        V(s(vn), P({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(ia)(s(a).open.value)
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
}), Nu = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ge(), r = gt(o), { forwardRef: l, currentElement: i } = F();
    return fn(i), (u, d) => (h(), C(ns, P({ ...n, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        p.defaultPrevented || (p.preventDefault(), (c = s(a).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        const c = p.detail.originalEvent, m = c.button === 0 && c.ctrlKey === !0;
        (c.button === 2 || m) && p.preventDefault();
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
}), ju = /* @__PURE__ */ x({
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
    const n = e, o = gt(t);
    F();
    const a = Ge(), r = A(!1), l = A(!1);
    return (i, u) => (h(), C(ns, P({ ...n, ...s(o) }, {
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
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qn = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ge(), r = gt(o), { forwardRef: l } = F();
    return (i, u) => (h(), C(s(Ue), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Nu, P({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(ju, P({
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
}), Ku = /* @__PURE__ */ x({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ge();
    return pn(!0), F(), (n, o) => (h(), C(s(K), {
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
}), Xn = /* @__PURE__ */ x({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ge(), { forwardRef: n } = F();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(Ue), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          V(Ku, P(o.$attrs, {
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
      }, 8, ["present"])) : fe("", !0);
    };
  }
}), Et = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    F();
    const n = Ge();
    return (o, a) => (h(), C(s(K), P(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), da = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Ge();
    return F(), (o, a) => (h(), C(s(K), P(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ca = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    F();
    const n = Ge();
    return (o, a) => (h(), C(s(K), P(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Hu = /* @__PURE__ */ x({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = Q(e, t);
    return F(), (o, a) => (h(), C(s(aa), P(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wu = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(ra), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = /* @__PURE__ */ x({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mn), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Gu, qu] = te("AlertDialogContent"), Xu = /* @__PURE__ */ x({
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
    const n = e, o = gt(t);
    F();
    const a = A();
    return qu({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(qn), P({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Be(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Be(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        oe(() => {
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
}), Yu = /* @__PURE__ */ x({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(Xn), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zu = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Gu(), { forwardRef: o, currentElement: a } = F();
    return ue(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(Et), P(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qu = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(da), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(ca), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ed = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(Et), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [os, td] = te("AvatarRoot"), nd = /* @__PURE__ */ x({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return F(), td({
      imageLoadingStatus: A("loading")
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
function od(e) {
  const t = A("idle"), n = A(!1), o = (a) => () => {
    n.value && (t.value = a);
  };
  return ue(() => {
    n.value = !0, ee(e, (a) => {
      if (!a)
        t.value = "error";
      else {
        const r = new window.Image();
        t.value = "loading", r.onload = o("loaded"), r.onerror = o("error"), r.src = a;
      }
    }, { immediate: !0 });
  }), nt(() => {
    n.value = !1;
  }), t;
}
const ad = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a } = ge(n);
    F();
    const r = os(), l = od(a);
    return ee(
      l,
      (i) => {
        o("loadingStatusChange", i), i !== "idle" && (r.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, u) => zt((h(), C(s(K), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: s(a)
    }, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [Fo, s(l) === "loaded"]
    ]);
  }
}), rd = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = os();
    F();
    const o = A(!1);
    let a;
    return ee(n.imageLoadingStatus, (r) => {
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
    }, 8, ["as-child", "as"])) : fe("", !0);
  }
}), [as, sd] = te("PopperRoot"), gn = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = A();
    return sd({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), Yn = /* @__PURE__ */ x({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = F(), a = as();
    return xe(() => {
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
function ld(e) {
  return e !== null;
}
function id(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [c, m] = Po(r), f = { start: "0%", center: "50%", end: "100%" }[m], v = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + p / 2;
      let b = "", w = "";
      return c === "bottom" ? (b = u ? f : `${v}px`, w = `${-p}px`) : c === "top" ? (b = u ? f : `${v}px`, w = `${l.floating.height + p}px`) : c === "right" ? (b = `${-p}px`, w = u ? f : `${g}px`) : c === "left" && (b = `${l.floating.width + p}px`, w = u ? f : `${g}px`), { data: { x: b, y: w } };
    }
  };
}
function Po(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const rs = {
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
}, [Tv, ud] = te("PopperContent"), rn = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ kr({
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
    ...rs
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = as(), { forwardRef: r, currentElement: l } = F(), i = A(), u = A(), { width: d, height: p } = Yr(u), c = $(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = $(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), f = $(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = $(() => ({
      padding: m.value,
      boundary: f.value.filter(ld),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: f.value.length > 0
    })), g = Oi(() => [
      vi({
        mainAxis: n.sideOffset + p.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ga({
        ...v.value
      }),
      n.avoidCollisions && gi({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? wi() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ga({
        ...v.value
      }),
      hi({
        ...v.value,
        apply: ({ elements: S, rects: M, availableWidth: L, availableHeight: q }) => {
          const { width: H, height: N } = M.reference, U = S.floating.style;
          U.setProperty(
            "--radix-popper-available-width",
            `${L}px`
          ), U.setProperty(
            "--radix-popper-available-height",
            `${q}px`
          ), U.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), U.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && Ci({ element: u.value, padding: n.arrowPadding }),
      id({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      n.hideWhenDetached && yi({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: w, isPositioned: k, middlewareData: B } = Bi(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...S) => mi(...S, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = $(
      () => Po(w.value)[0]
    ), E = $(
      () => Po(w.value)[1]
    );
    fl(() => {
      k.value && o("placed");
    });
    const T = $(
      () => {
        var S;
        return ((S = B.value.arrow) == null ? void 0 : S.centerOffset) !== 0;
      }
    ), O = A("");
    xe(() => {
      l.value && (O.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = $(() => {
      var S;
      return ((S = B.value.arrow) == null ? void 0 : S.x) ?? 0;
    }), R = $(() => {
      var S;
      return ((S = B.value.arrow) == null ? void 0 : S.y) ?? 0;
    });
    return ud({
      placedSide: D,
      onArrowChange: (S) => u.value = S,
      arrowX: I,
      arrowY: R,
      shouldHideArrow: T
    }), (S, M) => {
      var L, q, H;
      return h(), j("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Nt({
          ...s(b),
          transform: s(k) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: O.value,
          "--radix-popper-transform-origin": [
            (L = s(B).transformOrigin) == null ? void 0 : L.x,
            (q = s(B).transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = s(B).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        V(s(K), P({ ref: s(r) }, S.$attrs, {
          "as-child": n.asChild,
          as: S.as,
          "data-side": D.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(k) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            _(S.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Zn = /* @__PURE__ */ x({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return F(), (t, n) => (h(), C(s(K), {
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
}), dd = /* @__PURE__ */ x({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), j(we, null, Ct(n.value, (r) => (h(), C(Zn, {
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
}), cd = "data-radix-vue-collection-item", [pa, pd] = te("CollectionProvider");
function fa(e = cd) {
  const t = A(/* @__PURE__ */ new Map()), n = A(), o = pd({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = ss(o), r = $(() => Array.from(o.itemMap.value.values())), l = $(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const ma = x({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = pa(), { primitiveElement: o, currentElement: a } = Zr();
    return ee(a, () => {
      n.collectionRef.value = a.value;
    }), () => xt(na, { ref: o }, t);
  }
}), va = x({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = pa(), { primitiveElement: a, currentElement: r } = Zr();
    return xe((l) => {
      if (r.value) {
        const i = al(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => xt(na, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function ss(e) {
  const t = e ?? pa();
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
const [Wt, fd] = te("ComboboxRoot"), md = /* @__PURE__ */ x({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = ge(n), i = Ot(l), u = ve(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = ve(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), p = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), c = ve(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function m(N) {
      var U, J;
      p.value = N, await oe(), N ? (d.value && (Array.isArray(d.value) && a.value ? c.value = (U = B().find((ae) => {
        var le, ke;
        return ((ke = (le = ae.ref) == null ? void 0 : le.dataset) == null ? void 0 : ke.state) === "checked";
      })) == null ? void 0 : U.value : c.value = d.value), await oe(), (J = g.value) == null || J.focus(), q()) : (v.value = !1, n.resetSearchTermOnBlur && I());
    }
    function f(N) {
      if (Array.isArray(d.value) && a.value) {
        const U = d.value.findIndex((ae) => wt(ae, N)), J = [...d.value];
        U === -1 ? J.push(N) : J.splice(U, 1), d.value = J;
      } else
        d.value = N, m(!1);
    }
    const v = A(!1), g = A(), b = A(), { forwardRef: w, currentElement: k } = F(), { getItems: B, reactiveItems: D, itemMapSize: E } = fa("data-radix-vue-combobox-item"), T = A([]);
    ee(() => E.value, () => {
      T.value = B().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const O = $(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(T.value, u.value);
        const N = T.value.filter((U) => typeof U == "string");
        if (N.length)
          return N.filter((U) => {
            var J;
            return U.toLowerCase().includes((J = u.value) == null ? void 0 : J.toLowerCase());
          });
      }
      return T.value;
    });
    function I() {
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const R = $(() => O.value.findIndex((N) => wt(N, c.value))), S = $(() => {
      var N;
      return (N = D.value.find((U) => wt(U.value, c.value))) == null ? void 0 : N.ref;
    }), M = $(() => JSON.stringify(d.value));
    ee(M, async () => {
      await oe(), await oe(), I();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), ee(() => [O.value.length, u.value.length], async ([N, U], [J, ae]) => {
      await oe(), await oe(), N && (ae > U || R.value === -1) && (c.value = O.value[0]);
    });
    const L = Wn(k);
    function q() {
      var N;
      S.value instanceof Element && ((N = S.value) == null || N.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      S.value instanceof Element && S.value.focus && S.value.focus();
    }
    return fd({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: f,
      isUserInputted: v,
      multiple: a,
      disabled: r,
      open: p,
      onOpenChange: m,
      filteredOptions: O,
      contentId: "",
      inputElement: g,
      selectedElement: S,
      onInputElementChange: (N) => g.value = N,
      onInputNavigation: async (N) => {
        const U = R.value;
        U === 0 && N === "up" || U === O.value.length - 1 && N === "down" || (U === -1 && O.value.length || N === "home" ? c.value = O.value[0] : N === "end" ? c.value = O.value[O.value.length - 1] : c.value = O.value[N === "up" ? U - 1 : U + 1], await oe(), q(), H(), oe(() => {
          var J;
          return (J = g.value) == null ? void 0 : J.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (N) => {
        var U;
        O.value.length && c.value && S.value instanceof Element && (N.preventDefault(), N.stopPropagation(), (U = S.value) == null || U.click());
      },
      selectedValue: c,
      onSelectedValueChange: (N) => c.value = N,
      parentElement: k,
      contentElement: b,
      onContentElementChange: (N) => b.value = N
    }), (N, U) => (h(), C(s(gn), null, {
      default: y(() => [
        V(s(K), P({
          ref: s(w),
          style: {
            pointerEvents: s(p) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: s(i)
        }, N.$attrs), {
          default: y(() => [
            _(N.$slots, "default", {
              open: s(p),
              modelValue: s(d)
            }),
            s(L) && n.name ? (h(), C(s(dd), {
              key: 0,
              name: n.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : fe("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), vd = /* @__PURE__ */ x({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Wt(), { forwardRef: o, currentElement: a } = F();
    ue(() => {
      const p = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      p && (n.onInputElementChange(p), setTimeout(() => {
        t.autoFocus && (p == null || p.focus());
      }, 1));
    });
    const r = $(() => t.disabled || n.disabled.value || !1), l = A();
    rl(() => {
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
        Mt(Be(i, ["prevent"]), ["down", "up"]),
        Mt(s(n).onInputEnter, ["enter"]),
        Mt(Be(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [ls, gd] = te("ComboboxGroup"), hd = /* @__PURE__ */ x({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = F(), a = _e(void 0, "radix-vue-combobox-group"), r = Wt(), l = A(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Ni(o, () => {
      oe(() => {
        i();
      });
    }, { childList: !0 }), ee(() => r.searchTerm.value, () => {
      oe(() => {
        i();
      });
    }, { immediate: !0 }), gd({
      id: a
    }), (u, d) => zt((h(), C(s(K), P(t, {
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
      [Fo, l.value]
    ]);
  }
}), yd = /* @__PURE__ */ x({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    F();
    const n = ls({ id: "" });
    return (o, a) => (h(), C(s(K), P(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Iv, bd] = te("ComboboxContent"), wd = /* @__PURE__ */ x({
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
    const n = e, o = t, { position: a } = ge(n), r = Wt();
    pn(n.bodyLock);
    const { forwardRef: l, currentElement: i } = F();
    fn(r.parentElement);
    const u = $(() => n.position === "popper" ? n : {}), d = Ce(u.value);
    function p(m) {
      r.onSelectedValueChange("");
    }
    ue(() => {
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
    return bd({ position: a }), (m, f) => (h(), C(s(ma), null, {
      default: y(() => [
        m.dismissable ? (h(), C(s(vn), {
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
            (h(), C(je(s(a) === "popper" ? s(rn) : s(K)), P({ ...m.$attrs, ...s(d) }, {
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
                _(m.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (h(), C(je(s(a) === "popper" ? s(rn) : s(K)), P({ key: 1 }, { ...m.$attrs, ...u.value }, {
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
            _(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), xd = /* @__PURE__ */ x({
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
    const n = Q(e, t), { forwardRef: o } = F(), a = Wt();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(Ue), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        V(wd, P({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _d = /* @__PURE__ */ x({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    F();
    const n = Wt(), o = $(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), C(s(K), G(P({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          Ee("No options")
        ])
      ]),
      _: 3
    }, 16)) : fe("", !0);
  }
});
function Cd(e) {
  const t = Hn({
    nonce: A()
  });
  return $(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [Mv, Bd] = te("ComboboxItem"), kd = "combobox.select", Sd = /* @__PURE__ */ x({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = ge(n), r = Wt();
    ls({ id: "", options: A([]) });
    const { forwardRef: l } = F(), i = $(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((w) => wt(w, n.value)) : wt((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = $(() => wt(r.selectedValue.value, n.value)), d = _e(void 0, "radix-vue-combobox-item"), p = _e(void 0, "radix-vue-combobox-option"), c = $(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => wt(g, n.value)) : !0);
    async function m(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function f(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      Zo(kd, m, b);
    }
    async function v(g) {
      await oe(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Bd({
      isSelected: i
    }), (g, b) => (h(), C(s(va), { value: g.value }, {
      default: y(() => [
        zt(V(s(K), {
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
          onClick: f,
          onPointermove: v
        }, {
          default: y(() => [
            _(g.$slots, "default", {}, () => [
              Ee(De(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Fo, c.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Od = /* @__PURE__ */ x({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(K), P(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), is = /* @__PURE__ */ x({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Yn), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ed() {
  const e = A(!1);
  return ue(() => {
    In("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), In(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Dd = Hr(Ed), [Dt, us] = te(["MenuRoot", "MenuSub"], "MenuContext"), [hn, $d] = te("MenuRoot"), Ad = /* @__PURE__ */ x({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = ge(n), l = Ot(r), i = ve(n, "open", o), u = A(), d = Dd();
    return us({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), $d({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (p, c) => (h(), C(s(gn), null, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Pd = "rovingFocusGroup.onEntryFocus", Td = { bubbles: !1, cancelable: !0 };
function Id(e, t = !1, n) {
  const o = document.activeElement;
  for (const a of e)
    if (a === o || (a.focus({ preventScroll: t }), document.activeElement !== o))
      return;
}
const [Rv, Md] = te("RovingFocusGroup"), Rd = /* @__PURE__ */ x({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = ge(o), u = Ot(i), d = ve(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), p = A(!1), c = A(!1), m = A(0), { getItems: f } = fa();
    function v(b) {
      const w = !c.value;
      if (b.currentTarget && b.target === b.currentTarget && w && !p.value) {
        const k = new CustomEvent(Pd, Td);
        if (b.currentTarget.dispatchEvent(k), a("entryFocus", k), !k.defaultPrevented) {
          const B = f().map((O) => O.ref).filter((O) => O.dataset.disabled !== ""), D = B.find((O) => O.getAttribute("data-active") === "true"), E = B.find(
            (O) => O.id === d.value
          ), T = [D, E, ...B].filter(
            Boolean
          );
          Id(T, o.preventScrollOnEntryFocus);
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
      getItems: f
    }), Md({
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
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (b, w) => (h(), C(s(ma), null, {
      default: y(() => [
        V(s(K), {
          tabindex: p.value || m.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (k) => c.value = !0),
          onMouseup: g,
          onFocus: v,
          onBlur: w[1] || (w[1] = (k) => p.value = !1)
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
}), [ga, Ld] = te("MenuContent"), ha = /* @__PURE__ */ x({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ kr({
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
    ...rs
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Dt(), r = hn(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = ge(n);
    ea(), pn(i.value);
    const d = A(""), p = A(0), c = A(0), m = A(null), f = A("right"), v = A(0), g = A(null), { createCollection: b } = Ht(), { forwardRef: w, currentElement: k } = F(), B = b(k);
    ee(k, (S) => {
      a.onContentChange(S);
    });
    const { handleTypeaheadSearch: D } = ta(B);
    nt(() => {
      window.clearTimeout(p.value);
    });
    function E(S) {
      var M, L;
      return f.value === ((M = m.value) == null ? void 0 : M.side) && Lu(S, (L = m.value) == null ? void 0 : L.area);
    }
    async function T(S) {
      var M;
      o("openAutoFocus", S), !S.defaultPrevented && (S.preventDefault(), (M = k.value) == null || M.focus({
        preventScroll: !0
      }));
    }
    function O(S) {
      if (S.defaultPrevented)
        return;
      const M = S.target.closest("[data-radix-menu-content]") === S.currentTarget, L = S.ctrlKey || S.altKey || S.metaKey, q = S.key.length === 1, H = Gr(
        S,
        document.activeElement,
        k.value,
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
      if (S.code === "Space" || (M && (S.key === "Tab" && S.preventDefault(), !L && q && D(S.key)), S.target !== k.value) || !Tu.includes(S.key))
        return;
      S.preventDefault();
      const N = B.value;
      ts.includes(S.key) && N.reverse(), Ao(N);
    }
    function I(S) {
      var M, L;
      (L = (M = S == null ? void 0 : S.currentTarget) == null ? void 0 : M.contains) != null && L.call(M, S.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function R(S) {
      var M;
      if (!an(S))
        return;
      const L = S.target, q = v.value !== S.clientX;
      if ((M = S == null ? void 0 : S.currentTarget) != null && M.contains(L) && q) {
        const H = S.clientX > v.value ? "right" : "left";
        f.value = H, v.value = S.clientX;
      }
    }
    return Ld({
      onItemEnter: (S) => !!E(S),
      onItemLeave: (S) => {
        var M;
        E(S) || ((M = k.value) == null || M.focus(), g.value = null);
      },
      onTriggerLeave: (S) => !!E(S),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (S) => {
        m.value = S;
      }
    }), (S, M) => (h(), C(s(Gn), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: T,
      onUnmountAutoFocus: M[7] || (M[7] = (L) => o("closeAutoFocus", L))
    }, {
      default: y(() => [
        V(s(vn), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: M[2] || (M[2] = (L) => o("escapeKeyDown", L)),
          onPointerDownOutside: M[3] || (M[3] = (L) => o("pointerDownOutside", L)),
          onFocusOutside: M[4] || (M[4] = (L) => o("focusOutside", L)),
          onInteractOutside: M[5] || (M[5] = (L) => o("interactOutside", L)),
          onDismiss: M[6] || (M[6] = (L) => o("dismiss"))
        }, {
          default: y(() => [
            V(s(Rd), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": M[0] || (M[0] = (L) => g.value = L),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: M[1] || (M[1] = (L) => {
                o("entryFocus", L), s(r).isUsingKeyboardRef.value || L.preventDefault();
              })
            }, {
              default: y(() => [
                V(s(rn), {
                  ref: s(w),
                  role: "menu",
                  as: S.as,
                  "as-child": S.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(ia)(s(a).open.value),
                  dir: s(r).dir.value,
                  side: S.side,
                  "side-offset": S.sideOffset,
                  align: S.align,
                  "align-offset": S.alignOffset,
                  "avoid-collisions": S.avoidCollisions,
                  "collision-boundary": S.collisionBoundary,
                  "collision-padding": S.collisionPadding,
                  "arrow-padding": S.arrowPadding,
                  "prioritize-position": S.prioritizePosition,
                  sticky: S.sticky,
                  "hide-when-detached": S.hideWhenDetached,
                  onKeydown: O,
                  onBlur: I,
                  onPointermove: R
                }, {
                  default: y(() => [
                    _(S.$slots, "default")
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
}), ds = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ga(), { forwardRef: o } = F(), a = A(!1);
    async function r(i) {
      if (!i.defaultPrevented && an(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await oe(), !i.defaultPrevented && an(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), C(s(va), null, {
      default: y(() => [
        V(s(K), P({
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
            await oe(), !(d.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await oe(), !d.defaultPrevented && (a.value = !1);
          })
        }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), ya = /* @__PURE__ */ x({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = F(), l = hn(), i = ga(), u = A(!1);
    async function d() {
      const p = r.value;
      if (!n.disabled && p) {
        const c = new CustomEvent(Au, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", c), await oe(), c.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (p, c) => (h(), C(ds, P(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = !0;
      }),
      onPointerup: c[1] || (c[1] = async (m) => {
        var f;
        await oe(), !m.defaultPrevented && (u.value || (f = m.currentTarget) == null || f.click());
      }),
      onKeydown: c[2] || (c[2] = async (m) => {
        const f = s(i).searchRef.value !== "";
        p.disabled || f && m.key === " " || s($o).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fd, cs] = te(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Vd = /* @__PURE__ */ x({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Fd({
      checked: A(!1)
    });
    return (n, o) => (h(), C(s(Ue), {
      present: n.forceMount || s(Mn)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        V(s(K), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(ua)(s(t).checked.value)
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
}), zd = /* @__PURE__ */ x({
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
    const n = e, o = t, a = ve(n, "checked", o);
    return cs({ checked: a }), (r, l) => (h(), C(ya, P({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Mn)(s(a)) ? "mixed" : s(a),
      "data-state": s(ua)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Mn)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Nd = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Q(n, o), r = Dt(), { forwardRef: l, currentElement: i } = F();
    return fn(i), (u, d) => (h(), C(ha, P(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (p) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Be((p) => o("focusOutside", p), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), jd = /* @__PURE__ */ x({
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
    const n = Q(e, t), o = Dt();
    return (a, r) => (h(), C(ha, P(s(n), {
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
}), Kd = /* @__PURE__ */ x({
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
    const n = Q(e, t), o = Dt(), a = hn();
    return (r, l) => (h(), C(s(Ue), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Nd, G(P({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(jd, G(P({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ps = /* @__PURE__ */ x({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), P({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hd = /* @__PURE__ */ x({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wd = /* @__PURE__ */ x({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mn), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ud, Gd] = te("MenuRadioGroup"), qd = /* @__PURE__ */ x({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "modelValue", t);
    return Gd({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), C(ps, G(X(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), Xd = /* @__PURE__ */ x({
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
    const n = e, o = t, { value: a } = ge(n), r = Ud(), l = $(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return cs({ checked: l }), (i, u) => (h(), C(ya, P({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(ua)(l.value),
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
}), Yd = /* @__PURE__ */ x({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), P(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [fs, Zd] = te("MenuSub"), Qd = /* @__PURE__ */ x({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = Dt(), r = A(), l = A();
    return xe((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), us({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Zd({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), C(s(gn), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Jd = /* @__PURE__ */ x({
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
    const n = Q(e, t), o = Dt(), a = hn(), r = fs(), { forwardRef: l, currentElement: i } = F();
    return r.contentId || (r.contentId = _e(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(Ue), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        V(ha, P(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Be((p) => {
            var c;
            s(a).isUsingKeyboardRef.value && ((c = s(i)) == null || c.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Be(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (p) => {
            p.defaultPrevented || p.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (p) => {
            s(a).onClose(), p.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (p) => {
            var c, m;
            const f = (c = p.currentTarget) == null ? void 0 : c.contains(p.target), v = s(Mu)[s(a).dir.value].includes(p.key);
            f && v && (s(o).onOpenChange(!1), (m = s(r).trigger.value) == null || m.focus(), p.preventDefault());
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
}), ec = /* @__PURE__ */ x({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Dt(), o = hn(), a = fs(), r = ga(), l = A(null);
    a.triggerId || (a.triggerId = _e(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    nt(() => {
      i();
    });
    function u(c) {
      !an(c) || r.onItemEnter(c) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(c) {
      var m, f;
      if (!an(c))
        return;
      i();
      const v = (m = n.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (f = n.content.value) == null ? void 0 : f.dataset.side, b = g === "right", w = b ? -5 : 5, k = v[b ? "left" : "right"], B = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + w, y: c.clientY },
            { x: k, y: v.top },
            { x: B, y: v.top },
            { x: B, y: v.bottom },
            { x: k, y: v.bottom }
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
      var m;
      const f = r.searchRef.value !== "";
      t.disabled || f && c.key === " " || Iu[o.dir.value].includes(c.key) && (n.onOpenChange(!0), await oe(), (m = n.content.value) == null || m.focus(), c.preventDefault());
    }
    return (c, m) => (h(), C(is, { "as-child": "" }, {
      default: y(() => [
        V(ds, P(t, {
          id: s(a).triggerId,
          ref: (f) => {
            var v;
            (v = s(a)) == null || v.onTriggerChange(f == null ? void 0 : f.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(ia)(s(n).open.value),
          onClick: m[0] || (m[0] = async (f) => {
            t.disabled || f.defaultPrevented || (f.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
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
}), [ms, tc] = te("DropdownMenuRoot"), nc = /* @__PURE__ */ x({
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
    F();
    const a = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = A(), { modal: l, dir: i } = ge(n), u = Ot(i);
    return tc({
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
    }), (d, p) => (h(), C(s(Ad), {
      open: s(a),
      "onUpdate:open": p[0] || (p[0] = (c) => _t(a) ? a.value = c : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), oc = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ms(), { forwardRef: o, currentElement: a } = F();
    return ue(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = _e(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(is), { "as-child": "" }, {
      default: y(() => [
        V(s(K), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await oe(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Mt(
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
}), ac = /* @__PURE__ */ x({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Wd), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rc = /* @__PURE__ */ x({
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
    const n = Q(e, t);
    F();
    const o = ms(), a = A(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = _e(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(Kd), P(s(n), {
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
          const c = d.detail.originalEvent, m = c.button === 0 && c.ctrlKey === !0, f = c.button === 2 || m;
          (!s(o).modal.value || f) && (a.value = !0), (p = s(o).triggerElement.value) != null && p.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), sc = /* @__PURE__ */ x({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = gt(t);
    return F(), (a, r) => (h(), C(s(ya), G(X({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lc = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(ps), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ic = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(Yd), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uc = /* @__PURE__ */ x({
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
    const n = e, o = gt(t);
    return F(), (a, r) => (h(), C(s(zd), G(X({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vs = /* @__PURE__ */ x({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(Vd), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dc = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(Hd), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cc = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = gt(t);
    return F(), (a, r) => (h(), C(s(qd), G(X({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pc = /* @__PURE__ */ x({
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
    const n = Q(e, t);
    return F(), (o, a) => (h(), C(s(Xd), G(X(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fc = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return F(), (a, r) => (h(), C(s(Qd), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => _t(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), mc = /* @__PURE__ */ x({
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
    const n = Q(e, t);
    return F(), (o, a) => (h(), C(s(Jd), P(s(n), { style: {
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
}), vc = /* @__PURE__ */ x({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(ec), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gc = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(K), P(t, {
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
}), [Ut, hc] = te("PopoverRoot"), yc = /* @__PURE__ */ x({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = ge(n), r = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = A(), i = A(!1);
    return hc({
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
    }), (u, d) => (h(), C(s(gn), null, {
      default: y(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), bc = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ut(), { forwardRef: o, currentElement: a } = F();
    return ue(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(je(s(n).hasCustomAnchor.value ? s(K) : s(Yn)), { "as-child": "" }, {
      default: y(() => [
        V(s(K), {
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
}), wc = /* @__PURE__ */ x({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mn), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gs = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ce(n), { forwardRef: r } = F(), l = Ut();
    return ea(), (i, u) => (h(), C(s(Gn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        V(s(vn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            V(s(rn), P(s(a), {
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
}), xc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ut(), r = A(!1);
    pn(!0);
    const l = Q(n, o), { forwardRef: i, currentElement: u } = F();
    return fn(u), (d, p) => (h(), C(gs, P(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = Be(
        (c) => {
          var m;
          o("closeAutoFocus", c), r.value || (m = s(a).triggerElement.value) == null || m.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: p[1] || (p[1] = (c) => {
        o("pointerDownOutside", c);
        const m = c.detail.originalEvent, f = m.button === 0 && m.ctrlKey === !0, v = m.button === 2 || f;
        r.value = v;
      }),
      onFocusOutside: p[2] || (p[2] = Be(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), _c = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ut(), r = A(!1), l = A(!1), i = Q(n, o);
    return (u, d) => (h(), C(gs, P(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        o("closeAutoFocus", p), p.defaultPrevented || (r.value || (c = s(a).triggerElement.value) == null || c.focus(), p.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (p) => {
        var c;
        o("interactOutside", p), p.defaultPrevented || (r.value = !0, p.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const m = p.target;
        (c = s(a).triggerElement.value) != null && c.contains(m) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && l.value && p.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ut(), r = Q(n, o), { forwardRef: l } = F();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(Ue), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(xc, P({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(_c, P({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Lv = /* @__PURE__ */ x({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    F();
    const n = Ut();
    return Cr(() => {
      n.hasCustomAnchor.value = !0;
    }), nt(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), C(s(Yn), G(X(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sn = 100, [Bc, kc] = te("ProgressRoot"), ba = (e) => typeof e == "number";
function Sc(e, t) {
  return Lt(e) || ba(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${sn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Oc(e) {
  return ba(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${sn}\`.`
  ), sn);
}
const Ec = /* @__PURE__ */ x({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: sn },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * sn)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    F();
    const a = ve(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = ve(n, "max", o, {
      passive: n.max === void 0
    });
    ee(
      () => a.value,
      async (i) => {
        const u = Sc(i, n.max);
        u !== i && (await oe(), a.value = u);
      },
      { immediate: !0 }
    ), ee(
      () => n.max,
      (i) => {
        const u = Oc(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = $(() => Lt(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return kc({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(K), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": ba(s(a)) ? s(a) : void 0,
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
}), Dc = /* @__PURE__ */ x({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Bc();
    return F(), (o, a) => {
      var r;
      return h(), C(s(K), P(t, {
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
}), $c = ["default-value"], Ac = /* @__PURE__ */ x({
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
    const t = e, { value: n } = ge(t), o = A();
    return (a, r) => (h(), C(s(Zn), { "as-child": "" }, {
      default: y(() => [
        zt(ne("select", P({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => _t(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, $c), [
          [il, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Pc = {
  key: 0,
  value: ""
}, [$t, hs] = te("SelectRoot"), [Tc, Ic] = te("SelectRoot"), Mc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = ve(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = A(), i = A(), u = A({
      x: 0,
      y: 0
    }), d = A(!1), { required: p, disabled: c, dir: m } = ge(n), f = Ot(m);
    hs({
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
      required: p,
      onOpenChange: (w) => {
        r.value = w;
      },
      dir: f,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const v = Wn(l), g = A(/* @__PURE__ */ new Set()), b = $(() => Array.from(g.value).map((w) => {
      var k;
      return (k = w.props) == null ? void 0 : k.value;
    }).join(";"));
    return Ic({
      onNativeOptionAdd: (w) => {
        g.value.add(w);
      },
      onNativeOptionRemove: (w) => {
        g.value.delete(w);
      }
    }), (w, k) => (h(), C(s(gn), null, {
      default: y(() => [
        _(w.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(v) ? (h(), C(Ac, P({ key: b.value }, w.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(p),
          name: w.name,
          autocomplete: w.autocomplete,
          disabled: s(c),
          value: s(a),
          onChange: k[0] || (k[0] = (B) => a.value = B.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), j("option", Pc)) : fe("", !0),
            (h(!0), j(we, null, Ct(Array.from(g.value), (B) => (h(), C(je(B), P({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : fe("", !0)
      ]),
      _: 3
    }));
  }
}), Rc = [" ", "Enter", "ArrowUp", "ArrowDown"], Lc = [" ", "Enter"], Ze = 10;
function ys(e) {
  return e === "" || Lt(e);
}
const Fc = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $t(), o = $(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = F();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-select-content")), ue(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Ht(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = ta(i);
    function c() {
      o.value || (n.onOpenChange(!0), p());
    }
    function m(f) {
      c(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, v) => (h(), C(s(Yn), { "as-child": "" }, {
      default: y(() => {
        var g, b, w, k;
        return [
          V(s(K), {
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
            "data-placeholder": s(ys)((k = s(n).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: v[0] || (v[0] = (B) => {
              var D;
              (D = B == null ? void 0 : B.currentTarget) == null || D.focus();
            }),
            onPointerdown: v[1] || (v[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const D = B.target;
              D.hasPointerCapture(B.pointerId) && D.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (m(B), B.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Be(
              (B) => {
                B.pointerType === "touch" && m(B);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (B) => {
              const D = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && D && B.key === " " || (s(d)(B.key), s(Rc).includes(B.key) && (c(), B.preventDefault()));
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
}), Vc = /* @__PURE__ */ x({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mn), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [wa, zc] = te("SelectItemAlignedPosition"), Nc = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Ht(), r = $t(), l = At(), i = a(), u = A(!1), d = A(!0), p = A(), { forwardRef: c, currentElement: m } = F(), { viewport: f, selectedItem: v, selectedItemText: g, focusSelectedItem: b } = l;
    function w() {
      if (r.triggerElement.value && r.valueElement.value && p.value && m.value && f != null && f.value && v != null && v.value && g != null && g.value) {
        const D = r.triggerElement.value.getBoundingClientRect(), E = m.value.getBoundingClientRect(), T = r.valueElement.value.getBoundingClientRect(), O = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const he = O.left - E.left, ce = T.left - he, Se = D.left - ce, ye = D.width + Se, ie = Math.max(ye, E.width), W = window.innerWidth - Ze, se = Tn(ce, Ze, W - ie);
          p.value.style.minWidth = `${ye}px`, p.value.style.left = `${se}px`;
        } else {
          const he = E.right - O.right, ce = window.innerWidth - T.right - he, Se = window.innerWidth - D.right - ce, ye = D.width + Se, ie = Math.max(ye, E.width), W = window.innerWidth - Ze, se = Tn(
            ce,
            Ze,
            W - ie
          );
          p.value.style.minWidth = `${ye}px`, p.value.style.right = `${se}px`;
        }
        const I = i.value, R = window.innerHeight - Ze * 2, S = f.value.scrollHeight, M = window.getComputedStyle(m.value), L = Number.parseInt(
          M.borderTopWidth,
          10
        ), q = Number.parseInt(M.paddingTop, 10), H = Number.parseInt(
          M.borderBottomWidth,
          10
        ), N = Number.parseInt(
          M.paddingBottom,
          10
        ), U = L + q + S + N + H, J = Math.min(
          v.value.offsetHeight * 5,
          U
        ), ae = window.getComputedStyle(f.value), le = Number.parseInt(ae.paddingTop, 10), ke = Number.parseInt(
          ae.paddingBottom,
          10
        ), de = D.top + D.height / 2 - Ze, ot = R - de, Ve = v.value.offsetHeight / 2, Te = v.value.offsetTop + Ve, ze = L + q + Te, ht = U - ze;
        if (ze <= de) {
          const he = v.value === I[I.length - 1];
          p.value.style.bottom = "0px";
          const ce = m.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Se = Math.max(
            ot,
            Ve + (he ? ke : 0) + ce + H
          ), ye = ze + Se;
          p.value.style.height = `${ye}px`;
        } else {
          const he = v.value === I[0];
          p.value.style.top = "0px";
          const ce = Math.max(
            de,
            L + f.value.offsetTop + (he ? le : 0) + Ve
          ) + ht;
          p.value.style.height = `${ce}px`, f.value.scrollTop = ze - de + f.value.offsetTop;
        }
        p.value.style.margin = `${Ze}px 0`, p.value.style.minHeight = `${J}px`, p.value.style.maxHeight = `${R}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = A("");
    ue(async () => {
      await oe(), w(), m.value && (k.value = window.getComputedStyle(m.value).zIndex);
    });
    function B(D) {
      D && d.value === !0 && (w(), b == null || b(), d.value = !1);
    }
    return zc({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (D, E) => (h(), j("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: Nt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      V(s(K), P({
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
          _(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), jc = /* @__PURE__ */ x({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ze },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ce(e);
    return (n, o) => (h(), C(s(rn), P(s(t), { style: {
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
}), Gt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [At, Kc] = te("SelectContent"), Hc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = $t();
    ea(), pn(n.bodyLock);
    const { createCollection: r } = Ht(), l = A();
    fn(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = ta(i), p = A(), c = A(), m = A(), f = A(!1), v = A(!1);
    function g() {
      c.value && l.value && Ao([c.value, l.value]);
    }
    ee(f, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: w } = a;
    xe((E) => {
      if (!l.value)
        return;
      let T = { x: 0, y: 0 };
      const O = (R) => {
        var S, M;
        T = {
          x: Math.abs(
            Math.round(R.pageX) - (((S = w.value) == null ? void 0 : S.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((M = w.value) == null ? void 0 : M.y) ?? 0)
          )
        };
      }, I = (R) => {
        var S;
        R.pointerType !== "touch" && (T.x <= 10 && T.y <= 10 ? R.preventDefault() : (S = l.value) != null && S.contains(R.target) || b(!1), document.removeEventListener("pointermove", O), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", O), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function k(E) {
      const T = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !T && E.key.length === 1 && d(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let O = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (O = O.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const I = E.target, R = O.indexOf(I);
          O = O.slice(R + 1);
        }
        setTimeout(() => Ao(O)), E.preventDefault();
      }
    }
    const B = $(() => n.position === "popper" ? n : {}), D = Ce(B.value);
    return Kc({
      content: l,
      viewport: p,
      onViewportChange: (E) => {
        p.value = E;
      },
      itemRefCallback: (E, T, O) => {
        var I, R;
        const S = !v.value && !O;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === T || S) && (c.value = E, S && (v.value = !0));
      },
      selectedItem: c,
      selectedItemText: m,
      onItemLeave: () => {
        var E;
        (E = l.value) == null || E.focus();
      },
      itemTextRefCallback: (E, T, O) => {
        var I, R;
        const S = !v.value && !O;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === T || S) && (m.value = E);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: f,
      searchRef: u
    }), (E, T) => (h(), C(s(Gn), {
      "as-child": "",
      onMountAutoFocus: T[6] || (T[6] = Be(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: T[7] || (T[7] = (O) => {
        var I;
        o("closeAutoFocus", O), !O.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), O.preventDefault());
      })
    }, {
      default: y(() => [
        V(s(vn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: T[2] || (T[2] = Be(() => {
          }, ["prevent"])),
          onDismiss: T[3] || (T[3] = (O) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: T[4] || (T[4] = (O) => o("escapeKeyDown", O)),
          onPointerDownOutside: T[5] || (T[5] = (O) => o("pointerDownOutside", O))
        }, {
          default: y(() => [
            (h(), C(je(
              E.position === "popper" ? jc : Nc
            ), P({ ...E.$attrs, ...s(D) }, {
              id: s(a).contentId,
              ref: (O) => {
                l.value = s(Pe)(O);
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
              onContextmenu: T[0] || (T[0] = Be(() => {
              }, ["prevent"])),
              onPlaced: T[1] || (T[1] = (O) => f.value = !0),
              onKeydown: k
            }), {
              default: y(() => [
                _(E.$slots, "default")
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
}), Wc = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return hs(e.context), (t, n) => _(t.$slots, "default");
  }
}), Uc = { key: 1 }, Gc = /* @__PURE__ */ x({
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
    const n = e, o = Q(n, t), a = $t(), r = A();
    ue(() => {
      r.value = new DocumentFragment();
    });
    const l = A(), i = $(() => n.forceMount || a.open.value);
    return (u, d) => {
      var p;
      return i.value ? (h(), C(s(Ue), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          V(Hc, G(X({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = l.value) != null && p.present) && r.value ? (h(), j("div", Uc, [
        (h(), C(Ln, { to: r.value }, [
          V(Wc, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : fe("", !0);
    };
  }
}), qc = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), P({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bs, Xc] = te("SelectItem"), Yc = /* @__PURE__ */ x({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = ge(t), o = $t(), a = At(Gt), { forwardRef: r, currentElement: l } = F(), i = $(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = A(!1), d = A(t.textValue ?? ""), p = _e(void 0, "radix-vue-select-item-text");
    async function c(g) {
      await oe(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function m(g) {
      var b;
      await oe(), !g.defaultPrevented && (n.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function f(g) {
      var b;
      await oe(), !g.defaultPrevented && g.currentTarget === document.activeElement && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function v(g) {
      var b;
      await oe(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (Lc.includes(g.key) && c(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ue(() => {
      l.value && a.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), Xc({
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
      onFocus: b[0] || (b[0] = (w) => u.value = !0),
      onBlur: b[1] || (b[1] = (w) => u.value = !1),
      onPointerup: c,
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
}), Zc = /* @__PURE__ */ x({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = bs();
    return (o, a) => s(n).isSelected.value ? (h(), C(s(K), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : fe("", !0);
  }
}), [Qc, Jc] = te("SelectGroup"), ep = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = _e(void 0, "radix-vue-select-group");
    return Jc({ id: n }), (o, a) => (h(), C(s(K), P({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), tp = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Qc({ id: "" });
    return (o, a) => (h(), C(s(K), P(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ws = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = $t(), o = At(Gt), a = Tc(), r = bs(), { forwardRef: l, currentElement: i } = F(), u = $(() => {
      var d;
      return xt("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return ue(() => {
      i.value && (r.onItemTextChange(i.value), o.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), a.onNativeOptionAdd(u.value));
    }), Fn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, p) => (h(), j(we, null, [
      V(s(K), P({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), C(Ln, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : fe("", !0)
    ], 64));
  }
}), np = /* @__PURE__ */ x({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = ge(t), o = Cd(n), a = At(Gt), r = a.position === "item-aligned" ? wa() : void 0, { forwardRef: l, currentElement: i } = F();
    ue(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = A(0);
    function d(p) {
      const c = p.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: f } = r ?? {};
      if (m != null && m.value && f != null && f.value) {
        const v = Math.abs(u.value - c.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - Ze * 2, b = Number.parseFloat(
            f.value.style.minHeight
          ), w = Number.parseFloat(f.value.style.height), k = Math.max(b, w);
          if (k < g) {
            const B = k + v, D = Math.min(g, B), E = B - D;
            f.value.style.height = `${D}px`, f.value.style.bottom === "0px" && (c.scrollTop = E > 0 ? E : 0, f.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = c.scrollTop;
    }
    return (p, c) => (h(), j(we, null, [
      V(s(K), P({
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
          overflow: "auto"
        },
        onScroll: d
      }), {
        default: y(() => [
          _(p.$slots, "default")
        ]),
        _: 3
      }, 16),
      V(s(K), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          Ee(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), xs = /* @__PURE__ */ x({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Ht(), a = o(), r = At(Gt), l = A(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    xe(() => {
      const p = a.value.find(
        (c) => c === document.activeElement
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
    return Fn(() => i()), (p, c) => {
      var m;
      return h(), C(s(K), P({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (m = p.$parent) == null ? void 0 : m.$props, {
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
}), op = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = At(Gt), n = t.position === "item-aligned" ? wa() : void 0, { forwardRef: o, currentElement: a } = F(), r = A(!1);
    return xe((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), ee(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(xs, {
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
    }, 512)) : fe("", !0);
  }
}), ap = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = At(Gt), n = t.position === "item-aligned" ? wa() : void 0, { forwardRef: o, currentElement: a } = F(), r = A(!1);
    return xe((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          r.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), ee(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(xs, {
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
    }, 512)) : fe("", !0);
  }
}), rp = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = F(), o = $t(), a = sl();
    return Cr(() => {
      var r;
      const l = !!Kn((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), ue(() => {
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
          s(ys)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), j(we, { key: 0 }, [
            Ee(De(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), sp = /* @__PURE__ */ x({
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
          Ee("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function lp(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function _s(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return Tn(o, 0, 100);
}
function ip(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function up(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function dp(e, t, n) {
  const o = e / 2, a = xa([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function cp(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function pp(e, t) {
  if (t > 0) {
    const n = cp(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function xa(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function fp(e) {
  return (String(e).split(".")[1] || "").length;
}
function mp(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Cs = ["PageUp", "PageDown"], Bs = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ks = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ss, Os] = te(["SliderVertical", "SliderHorizontal"]), Es = /* @__PURE__ */ x({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Qn();
    return (r, l) => (h(), C(s(K), P({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(Cs).concat(s(Bs)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), vp = /* @__PURE__ */ x({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = ge(n), { forwardRef: u, currentElement: d } = F(), p = A(), c = $(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function m(f) {
      const v = p.value || d.value.getBoundingClientRect(), g = [0, v.width], b = c.value ? [r.value, a.value] : [a.value, r.value], w = xa(g, b);
      return p.value = v, w(f - v.left);
    }
    return Os({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (f, v) => (h(), C(Es, {
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
        p.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const b = c.value ? "from-left" : "from-right", w = s(ks)[b].includes(g.key);
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
}), gp = /* @__PURE__ */ x({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = ge(n), { forwardRef: i, currentElement: u } = F(), d = A(), p = $(() => !l.value);
    function c(m) {
      const f = d.value || u.value.getBoundingClientRect(), v = [0, f.height], g = p.value ? [a.value, r.value] : [r.value, a.value], b = xa(v, g);
      return d.value = f, b(m - f.top);
    }
    return Os({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (m, f) => (h(), C(Es, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: f[0] || (f[0] = (v) => {
        const g = c(v.clientY);
        o("slideStart", g);
      }),
      onSlideMove: f[1] || (f[1] = (v) => {
        const g = c(v.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: f[2] || (f[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: f[3] || (f[3] = (v) => {
        const g = p.value ? "from-bottom" : "from-top", b = s(ks)[g].includes(v.key);
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
}), hp = ["value", "name", "disabled", "step"], [Qn, yp] = te("SliderRoot"), bp = /* @__PURE__ */ x({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = ge(n), c = Ot(p), { forwardRef: m, currentElement: f } = F(), v = Wn(f);
    fa();
    const g = ve(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = A(0), w = A(g.value);
    function k(O) {
      const I = up(g.value, O);
      E(O, I);
    }
    function B(O) {
      E(O, b.value);
    }
    function D() {
      const O = w.value[b.value];
      g.value[b.value] !== O && o("valueCommit", ul(g.value));
    }
    function E(O, I, { commit: R } = { commit: !1 }) {
      var S;
      const M = fp(l.value), L = mp(Math.round((O - a.value) / l.value) * l.value + a.value, M), q = Tn(L, a.value, r.value), H = lp(g.value, q, I);
      if (pp(H, i.value * l.value)) {
        b.value = H.indexOf(q);
        const N = String(H) !== String(g.value);
        N && R && o("valueCommit", H), N && ((S = T.value[b.value]) == null || S.focus(), g.value = H);
      }
    }
    const T = A([]);
    return yp({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: T,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (O, I) => (h(), j(we, null, [
      V(s(ma), null, {
        default: y(() => [
          (h(), C(je(s(u) === "horizontal" ? vp : gp), P(O.$attrs, {
            ref: s(m),
            "as-child": O.asChild,
            as: O.as,
            min: s(a),
            max: s(r),
            dir: s(c),
            inverted: O.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (w.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (R) => !s(d) && k(R)),
            onSlideMove: I[2] || (I[2] = (R) => !s(d) && B(R)),
            onSlideEnd: I[3] || (I[3] = (R) => !s(d) && D()),
            onHomeKeyDown: I[4] || (I[4] = (R) => !s(d) && E(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (R) => !s(d) && E(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (R, S) => {
              if (!s(d)) {
                const M = s(Cs).includes(R.key) || R.shiftKey && s(Bs).includes(R.key) ? 10 : 1, L = b.value, q = s(g)[L], H = s(l) * M * S;
                E(q + H, L, { commit: !0 });
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
      s(v) ? (h(!0), j(we, { key: 0 }, Ct(s(g), (R, S) => (h(), j("input", {
        key: S,
        value: R,
        type: "number",
        style: { display: "none" },
        name: O.name ? O.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, hp))), 128)) : fe("", !0)
    ], 64));
  }
}), wp = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qn(), o = Ss(), { forwardRef: a, currentElement: r } = F(), l = $(() => {
      var f, v;
      return (v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v[t.index];
    }), i = $(() => l.value === void 0 ? 0 : _s(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = $(() => {
      var f, v;
      return ip(t.index, ((v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v.length) ?? 0);
    }), d = Yr(r), p = $(() => d[o.size].value), c = $(() => p.value ? dp(p.value, i.value, o.direction) : 0), m = Jo();
    return ue(() => {
      n.thumbElements.value.push(r.value);
    }), nt(() => {
      const f = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(f, 1);
    }), (f, v) => (h(), C(s(va), null, {
      default: y(() => [
        V(s(K), P(f.$attrs, {
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
            [s(o).startEdge]: `calc(${i.value}% + ${c.value}px)`,
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
}), xp = /* @__PURE__ */ x({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = ss(), { forwardRef: o, currentElement: a } = F(), r = $(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(wp, P({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), _p = /* @__PURE__ */ x({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Qn();
    return F(), (n, o) => (h(), C(s(K), {
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
}), Cp = /* @__PURE__ */ x({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Qn(), n = Ss();
    F();
    const o = $(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => _s(u, t.min.value, t.max.value)
      );
    }), a = $(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = $(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), C(s(K), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: Nt({
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
function Bp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Bp();
const kp = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Sp, Op] = te("SwitchRoot"), Ep = /* @__PURE__ */ x({
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
    const n = e, o = t, { disabled: a } = ge(n), r = ve(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = F(), d = Wn(u), p = $(() => {
      var c;
      return n.id && u.value ? (c = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return Op({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (c, m) => (h(), j(we, null, [
      V(s(K), P(c.$attrs, {
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
        onKeydown: Mt(Be(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(c.$slots, "default", { checked: s(r) })
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
      }, null, 8, kp)) : fe("", !0)
    ], 64));
  }
}), Dp = /* @__PURE__ */ x({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Sp();
    return F(), (n, o) => {
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
}), [Jn, $p] = te("ToastProvider"), Ap = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = ge(t), l = A(), i = A(0), u = A(!1), d = A(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return $p({
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
    }), (p, c) => _(p.$slots, "default");
  }
}), Pp = "toast.swipeStart", Tp = "toast.swipeMove", Ip = "toast.swipeCancel", Mp = "toast.swipeEnd", To = "toast.viewportPause", Io = "toast.viewportResume";
function Sn(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function er(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Rp(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ds(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Rp(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Ds(n));
    }
  }), t;
}
const Lp = /* @__PURE__ */ x({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Jn(), n = Fi(1e3), o = A(!1);
    return Ur(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), C(s(Zn), { key: 0 }, {
      default: y(() => [
        Ee(De(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : fe("", !0);
  }
}), [Fp, Vp] = te("ToastRoot"), zp = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = F(), l = Jn(), i = A(null), u = A(null), d = $(() => n.duration || l.duration.value), p = A(0), c = A(d.value), m = A(0), f = A(d.value), v = Ur(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - p.value;
      f.value = Math.max(c.value - k, 0);
    }, { fpsLimit: 60 });
    function g(k) {
      !k || k === Number.POSITIVE_INFINITY || We && (window.clearTimeout(m.value), p.value = (/* @__PURE__ */ new Date()).getTime(), m.value = window.setTimeout(b, k));
    }
    function b() {
      var k, B;
      (k = r.value) != null && k.contains(document.activeElement) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const w = $(() => r.value ? Ds(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return xe((k) => {
      const B = l.viewport.value;
      if (B) {
        const D = () => {
          g(c.value), v.resume(), o("resume");
        }, E = () => {
          const T = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - T, window.clearTimeout(m.value), v.pause(), o("pause");
        };
        return B.addEventListener(To, E), B.addEventListener(Io, D), () => {
          B.removeEventListener(To, E), B.removeEventListener(Io, D);
        };
      }
    }), ee(() => [n.open, d.value], () => {
      c.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), Qo("Escape", (k) => {
      o("escapeKeyDown", k), k.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), ue(() => {
      l.onToastAdd();
    }), nt(() => {
      l.onToastRemove();
    }), Vp({ onClose: b }), (k, B) => (h(), j(we, null, [
      w.value ? (h(), C(Lp, {
        key: 0,
        role: "status",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          Ee(De(w.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : fe("", !0),
      s(l).viewport.value ? (h(), C(Ln, {
        key: 1,
        to: s(l).viewport.value
      }, [
        V(s(K), P({
          ref: s(a),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, k.$attrs, {
          as: k.as,
          "as-child": k.asChild,
          "data-state": k.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = Be((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (D) => {
            if (!i.value) return;
            const E = D.clientX - i.value.x, T = D.clientY - i.value.y, O = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), R = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, S = I ? R(0, E) : 0, M = I ? 0 : R(0, T), L = D.pointerType === "touch" ? 10 : 2, q = { x: S, y: M }, H = { originalEvent: D, delta: q };
            O ? (u.value = q, s(Sn)(s(Tp), (N) => o("swipeMove", N), H)) : s(er)(q, s(l).swipeDirection.value, L) ? (u.value = q, s(Sn)(s(Pp), (N) => o("swipeStart", N), H), D.target.setPointerCapture(D.pointerId)) : (Math.abs(E) > L || Math.abs(T) > L) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (D) => {
            const E = u.value, T = D.target;
            if (T.hasPointerCapture(D.pointerId) && T.releasePointerCapture(D.pointerId), u.value = null, i.value = null, E) {
              const O = D.currentTarget, I = { originalEvent: D, delta: E };
              s(er)(E, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(Sn)(s(Mp), (R) => o("swipeEnd", R), I) : s(Sn)(s(Ip), (R) => o("swipeCancel", R), I), O == null || O.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(k.$slots, "default", {
              remaining: f.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : fe("", !0)
    ], 64));
  }
}), Np = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a } = F(), r = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), C(s(Ue), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        V(zp, P({
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
}), $s = /* @__PURE__ */ x({
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
}), As = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Fp(), { forwardRef: o } = F();
    return (a, r) => (h(), C($s, { "as-child": "" }, {
      default: y(() => [
        V(s(K), P(t, {
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
}), jp = /* @__PURE__ */ x({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = F();
    return (n, o) => n.altText ? (h(), C($s, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        V(As, {
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
    }, 8, ["alt-text"])) : fe("", !0);
  }
}), tr = /* @__PURE__ */ x({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Jn();
    return (a, r) => (h(), C(s(Zn), {
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
}), Kp = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = ge(t), { forwardRef: a, currentElement: r } = F(), { createCollection: l } = Ht(), i = l(r), u = Jn(), d = $(() => u.toastCount.value > 0), p = A(), c = A(), m = $(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Qo(n.value, () => {
      r.value.focus();
    }), ue(() => {
      u.onViewportChange(r.value);
    }), xe((v) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const E = new CustomEvent(To);
            g.dispatchEvent(E), u.isClosePausedRef.value = !0;
          }
        }, w = () => {
          if (u.isClosePausedRef.value) {
            const E = new CustomEvent(Io);
            g.dispatchEvent(E), u.isClosePausedRef.value = !1;
          }
        }, k = (E) => {
          !g.contains(E.relatedTarget) && w();
        }, B = () => {
          g.contains(document.activeElement) || w();
        }, D = (E) => {
          var T, O, I;
          const R = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !R) {
            const S = document.activeElement, M = E.shiftKey;
            if (E.target === g && M) {
              (T = p.value) == null || T.focus();
              return;
            }
            const L = f({ tabbingDirection: M ? "backwards" : "forwards" }), q = L.findIndex((H) => H === S);
            En(L.slice(q + 1)) ? E.preventDefault() : M ? (O = p.value) == null || O.focus() : (I = c.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", k), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", B), g.addEventListener("keydown", D), window.addEventListener("blur", b), window.addEventListener("focus", w), v(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", B), g.removeEventListener("keydown", D), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        });
      }
    });
    function f({ tabbingDirection: v }) {
      const g = i.value.map((b) => {
        const w = [b, ...la(b)];
        return v === "forwards" ? w : w.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (h(), C(s(Bu), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", m.value) : s(o)(m.value),
      tabindex: "-1",
      style: Nt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), C(tr, {
          key: 0,
          ref: (b) => {
            p.value = s(Pe)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = f({
              tabbingDirection: "forwards"
            });
            s(En)(b);
          })
        }, null, 512)) : fe("", !0),
        V(s(K), P({
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
        d.value ? (h(), C(tr, {
          key: 1,
          ref: (b) => {
            c.value = s(Pe)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = f({
              tabbingDirection: "backwards"
            });
            s(En)(b);
          })
        }, null, 512)) : fe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Hp = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(K), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wp = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return F(), (n, o) => (h(), C(s(K), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, Up = {}, Gp = { class: "h-full bg-background dark:text-white" };
function qp(e, t) {
  return h(), j("div", Gp, [
    _(e.$slots, "default")
  ]);
}
const Fv = /* @__PURE__ */ qt(Up, [["render", qp]]), Xp = {}, Yp = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Zp(e, t) {
  return h(), j("header", Yp, [
    _(e.$slots, "default")
  ]);
}
const Vv = /* @__PURE__ */ qt(Xp, [["render", Zp]]), Qp = {}, Jp = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function ef(e, t) {
  return h(), j("main", Jp, [
    _(e.$slots, "default")
  ]);
}
const zv = /* @__PURE__ */ qt(Qp, [["render", ef]]), tf = {};
function nf(e, t) {
  return _(e.$slots, "default");
}
const Nv = /* @__PURE__ */ qt(tf, [["render", nf]]), of = {}, af = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, rf = { class: "gap-y-5 overflow-y-auto" };
function sf(e, t) {
  return h(), j("div", af, [
    ne("div", rf, [
      _(e.$slots, "default")
    ])
  ]);
}
const jv = /* @__PURE__ */ qt(of, [["render", sf]]), lf = {};
function uf(e, t) {
  return _(e.$slots, "default");
}
const Kv = /* @__PURE__ */ qt(lf, [["render", uf]]);
function df(e, t) {
  return h(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ne("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function cf(e, t) {
  return h(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ne("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function nr(e, t) {
  return h(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ne("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function pf(e, t) {
  return h(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ne("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const ff = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, Hv = /* @__PURE__ */ x({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), j("button", ff, [
      n[0] || (n[0] = ne("span", { class: "sr-only" }, "Open sidebar", -1)),
      V(s(df), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), mf = 3, vf = 1e6, Qe = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let wo = 0;
function gf() {
  return wo = (wo + 1) % Number.MAX_VALUE, wo.toString();
}
const xo = /* @__PURE__ */ new Map();
function or(e) {
  if (xo.has(e)) return;
  const t = setTimeout(() => {
    xo.delete(e), en({
      type: Qe.REMOVE_TOAST,
      toastId: e
    });
  }, vf);
  xo.set(e, t);
}
const Ie = A({
  toasts: []
});
function en(e) {
  switch (e.type) {
    case Qe.ADD_TOAST:
      Ie.value.toasts = [e.toast, ...Ie.value.toasts].slice(0, mf);
      break;
    case Qe.UPDATE_TOAST:
      Ie.value.toasts = Ie.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Qe.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? or(t) : Ie.value.toasts.forEach((n) => {
        or(n.id);
      }), Ie.value.toasts = Ie.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Qe.REMOVE_TOAST:
      e.toastId === void 0 ? Ie.value.toasts = [] : Ie.value.toasts = Ie.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Ps() {
  return {
    toasts: $(() => Ie.value.toasts),
    toast: hf,
    dismiss: (e) => en({ type: Qe.DISMISS_TOAST, toastId: e })
  };
}
function hf(e) {
  const t = gf(), n = (a) => en({
    type: Qe.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => en({ type: Qe.DISMISS_TOAST, toastId: t });
  return en({
    type: Qe.ADD_TOAST,
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
const yf = { class: "flex items-start space-x-3" }, bf = { class: "grid gap-1" }, wf = { class: "font-bold" }, xf = /* @__PURE__ */ x({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Ps();
    return (n, o) => (h(), C(s(pm), null, {
      default: y(() => [
        (h(!0), j(we, null, Ct(s(t), (a) => (h(), C(s(tm), P({
          key: a.id,
          ref_for: !0
        }, a, { class: "mt-1.5" }), {
          default: y(() => [
            ne("div", yf, [
              a.icon ? (h(), C(je(a.icon), {
                key: 0,
                class: re(["h-6 w-6", a.iconClasses])
              }, null, 8, ["class"])) : fe("", !0),
              ne("div", bf, [
                a.title ? (h(), C(s(cm), { key: 0 }, {
                  default: y(() => [
                    Ee(De(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : fe("", !0),
                a.description ? (h(), j(we, { key: 1 }, [
                  ml(a.description) ? (h(), C(s(sr), { key: 0 }, {
                    default: y(() => [
                      (h(), C(je(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), j(we, { key: 1 }, Ct(a.description, (r, l) => (h(), j("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), j(we, { key: 0 }, [
                      Ee(De(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), j(we, { key: 1 }, [
                      ne("span", wf, De(l), 1),
                      Ee(": " + De(r), 1)
                    ], 64)) : (h(), j(we, { key: 2 }, [
                      Ee(De(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(sr), { key: 2 }, {
                    default: y(() => [
                      Ee(De(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : fe("", !0),
                V(s(dm))
              ])
            ]),
            (h(), C(je(a.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        V(s(nm))
      ]),
      _: 1
    }));
  }
});
function Ts(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Ts(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function _f() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Ts(e)) && (o && (o += " "), o += t);
  return o;
}
const _a = "-", Cf = (e) => {
  const t = kf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(_a);
      return i[0] === "" && i.length !== 1 && i.shift(), Is(i, t) || Bf(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, Is = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? Is(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(_a);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, ar = /^\[(.+)\]$/, Bf = (e) => {
  if (ar.test(e)) {
    const t = ar.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, kf = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Of(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Mo(l, o, r, t);
  }), o;
}, Mo = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : rr(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Sf(a)) {
        Mo(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Mo(l, rr(t, r), n, o);
    });
  });
}, rr = (e, t) => {
  let n = e;
  return t.split(_a).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Sf = (e) => e.isThemeGetter, Of = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, Ef = (e) => {
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
}, Ms = "!", Df = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, p = 0, c;
    for (let b = 0; b < i.length; b++) {
      let w = i[b];
      if (d === 0) {
        if (w === a && (o || i.slice(b, b + r) === t)) {
          u.push(i.slice(p, b)), p = b + r;
          continue;
        }
        if (w === "/") {
          c = b;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const m = u.length === 0 ? i : i.substring(p), f = m.startsWith(Ms), v = f ? m.substring(1) : m, g = c && c > p ? c - p : void 0;
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
}, $f = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Af = (e) => ({
  cache: Ef(e.cacheSize),
  parseClassName: Df(e),
  ...Cf(e)
}), Pf = /\s+/, Tf = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(Pf);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: p,
      hasImportantModifier: c,
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
    const b = $f(p).join(":"), w = c ? b + Ms : b, k = w + g;
    if (r.includes(k))
      continue;
    r.push(k);
    const B = a(g, v);
    for (let D = 0; D < B.length; ++D) {
      const E = B[D];
      r.push(w + E);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function If() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Rs(t)) && (o && (o += " "), o += n);
  return o;
}
const Rs = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Rs(e[o])) && (n && (n += " "), n += t);
  return n;
};
function Mf(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((p, c) => c(p), e());
    return n = Af(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const p = Tf(u, n);
    return a(u, p), p;
  }
  return function() {
    return r(If.apply(null, arguments));
  };
}
const pe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ls = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rf = /^\d+\/\d+$/, Lf = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ff = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, zf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Nf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ye = (e) => Ft(e) || Lf.has(e) || Rf.test(e), it = (e) => Xt(e, "length", Yf), Ft = (e) => !!e && !Number.isNaN(Number(e)), _o = (e) => Xt(e, "number", Ft), Zt = (e) => !!e && Number.isInteger(Number(e)), Kf = (e) => e.endsWith("%") && Ft(e.slice(0, -1)), Z = (e) => Ls.test(e), ut = (e) => Ff.test(e), Hf = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Wf = (e) => Xt(e, Hf, Fs), Uf = (e) => Xt(e, "position", Fs), Gf = /* @__PURE__ */ new Set(["image", "url"]), qf = (e) => Xt(e, Gf, Qf), Xf = (e) => Xt(e, "", Zf), Qt = () => !0, Xt = (e, t, n) => {
  const o = Ls.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Yf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Vf.test(e) && !zf.test(e)
), Fs = () => !1, Zf = (e) => Nf.test(e), Qf = (e) => jf.test(e), Jf = () => {
  const e = pe("colors"), t = pe("spacing"), n = pe("blur"), o = pe("brightness"), a = pe("borderColor"), r = pe("borderRadius"), l = pe("borderSpacing"), i = pe("borderWidth"), u = pe("contrast"), d = pe("grayscale"), p = pe("hueRotate"), c = pe("invert"), m = pe("gap"), f = pe("gradientColorStops"), v = pe("gradientColorStopPositions"), g = pe("inset"), b = pe("margin"), w = pe("opacity"), k = pe("padding"), B = pe("saturate"), D = pe("scale"), E = pe("sepia"), T = pe("skew"), O = pe("space"), I = pe("translate"), R = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", Z, t], L = () => [Z, t], q = () => ["", Ye, it], H = () => ["auto", Ft, Z], N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], le = () => ["", "0", Z], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [Ft, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qt],
      spacing: [Ye, it],
      blur: ["none", "", ut, Z],
      brightness: de(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ut, Z],
      borderSpacing: L(),
      borderWidth: q(),
      contrast: de(),
      grayscale: le(),
      hueRotate: de(),
      invert: le(),
      gap: L(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Kf, it],
      inset: M(),
      margin: M(),
      opacity: de(),
      padding: L(),
      saturate: de(),
      scale: de(),
      sepia: le(),
      skew: de(),
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
        aspect: ["auto", "square", "video", Z]
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
        columns: [ut]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ke()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ke()
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
        object: [...N(), Z]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
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
        z: ["auto", Zt, Z]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
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
        flex: ["1", "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: le()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: le()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Zt, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Zt, Z]
        }, Z]
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
        "grid-rows": [Qt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Zt, Z]
        }, Z]
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
        "auto-cols": ["auto", "min", "max", "fr", Z]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Z]
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
        justify: ["normal", ...ae()]
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
        content: ["normal", ...ae(), "baseline"]
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
        "place-content": [...ae(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Z, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Z, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ut]
        }, ut]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Z, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ut, it]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _o]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ft, _o]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ye, Z]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Z]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Z]
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
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ye, it]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ye, Z]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z]
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
        content: ["none", Z]
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
        bg: [...N(), Uf]
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
        bg: ["auto", "cover", "contain", Wf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, qf]
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
        border: [...U(), "hidden"]
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
        divide: U()
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
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ye, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ye, it]
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
        "ring-offset": [Ye, it]
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
        shadow: ["", "inner", "none", ut, Xf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qt]
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
        "drop-shadow": ["", "none", ut, Z]
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
        "backdrop-opacity": [w]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: de()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: de()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Z]
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
        rotate: [Zt, Z]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Z]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z]
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
        "will-change": ["auto", "scroll", "contents", "transform", Z]
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
        stroke: [Ye, it, _o]
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
}, em = /* @__PURE__ */ Mf(Jf);
function z(...e) {
  return em(_f(e));
}
const tm = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(Np), P(s(r), {
      class: s(z)(s(mm)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), nm = /* @__PURE__ */ x({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = $(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Kp), P(n.value, {
      class: s(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Wv = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(jp), P(n.value, {
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
function om(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function am(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function rm(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function Vs(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function zs(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function sm(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function lm(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function eo(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function im(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function um(e, t) {
  return h(), j("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ne("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const dm = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(As), P(n.value, {
      class: s(z)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        V(s(eo), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), cm = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(Hp), P(n.value, {
      class: s(z)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sr = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(Wp), P({
      class: s(z)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pm = /* @__PURE__ */ x({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ap), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ns(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Ns(e[t])) && (o && (o += " "), o += n);
  else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function fm() {
  for (var e, t, n = 0, o = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Ns(e)) && (o && (o += " "), o += t);
  return o;
}
const lr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ir = fm, yn = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return ir(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const p = n == null ? void 0 : n[d], c = r == null ? void 0 : r[d];
    if (p === null) return null;
    const m = lr(p) || lr(c);
    return a[d][m];
  }), i = n && Object.entries(n).reduce((d, p) => {
    let [c, m] = p;
    return m === void 0 || (d[c] = m), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, p) => {
    let { class: c, className: m, ...f } = p;
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
      c,
      m
    ] : d;
  }, []);
  return ir(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, mm = yn(
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
), { toast: On } = Ps();
function vm() {
  return {
    info: (e) => {
      On({
        icon: pf,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      On({
        icon: cf,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      On({
        icon: nr,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      On({
        icon: nr,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const Uv = /* @__PURE__ */ x({
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
    } = vm();
    return ee(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), ee(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), ee(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), ee(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), C(s(xf)));
  }
}), gm = { class: "flex items-center justify-between space-y-2" }, hm = { class: "flex items-center space-x-2" }, Gv = /* @__PURE__ */ x({
  __name: "Heading",
  props: {
    as: { default: "h2" }
  },
  setup(e) {
    return (t, n) => (h(), j("div", gm, [
      (h(), C(je(t.as), { class: "text-3xl font-bold tracking-tight" }, {
        default: y(() => [
          _(t.$slots, "default")
        ]),
        _: 3
      })),
      ne("div", hm, [
        _(t.$slots, "actions")
      ])
    ]));
  }
}), qv = /* @__PURE__ */ x({
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
    const a = Q(e, t);
    return (r, l) => (h(), C(s(fu), G(X(s(a))), {
      default: y(() => [
        (h(!0), j(we, null, Ct(r.content, (i, u) => (h(), C(s(bm), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            V(s(wm), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  Ee(De(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            V(s(ym), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  Ee(De(i.content), 1)
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
}), ym = /* @__PURE__ */ x({
  __name: "AccordionContent",
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
    return (o, a) => (h(), C(s(gu), P(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        ne("div", {
          class: re(s(z)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(vu), P(s(o), {
      class: s(z)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wm = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(hu), { class: "flex" }, {
      default: y(() => [
        V(s(yu), P(n.value, {
          class: s(z)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              V(s(zs), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Xv = /* @__PURE__ */ x({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(Hu), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yv = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Wu), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(Uu), null, {
      default: y(() => [
        V(s(Yu), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(Xu), P(s(r), {
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
}), Qv = /* @__PURE__ */ x({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Jv = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(Qu), P(n.value, {
      class: s(z)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(Ju), P(n.value, {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t0 = /* @__PURE__ */ x({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), js = /* @__PURE__ */ x({
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
      class: re(s(z)(s(Ca)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ca = yn(
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
), n0 = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
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
    return (o, a) => (h(), C(s(ed), P(n.value, {
      class: s(z)(s(Ca)(), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(Zu), P(n.value, {
      class: s(z)(s(Ca)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a0 = /* @__PURE__ */ x({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(nd), {
      class: re(s(z)(s(xm)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), r0 = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ad), P(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), s0 = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(rd), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = yn(
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
), l0 = /* @__PURE__ */ x({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)(s(_m)({ variant: n.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), _m = yn(
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
);
var ur;
const Cm = typeof window < "u", Bm = (e) => typeof e < "u", km = (e) => typeof e == "function";
Cm && ((ur = window == null ? void 0 : window.navigator) != null && ur.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Sm(e) {
  return e;
}
function Om(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return zo(t, r), r;
  }, () => Vo(t)];
}
function Em(e) {
  return JSON.parse(JSON.stringify(e));
}
const dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cr = "__vueuse_ssr_handlers__";
dr[cr] = dr[cr] || {};
var pr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(pr || (pr = {}));
var Dm = Object.defineProperty, fr = Object.getOwnPropertySymbols, $m = Object.prototype.hasOwnProperty, Am = Object.prototype.propertyIsEnumerable, mr = (e, t, n) => t in e ? Dm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pm = (e, t) => {
  for (var n in t || (t = {}))
    $m.call(t, n) && mr(e, n, t[n]);
  if (fr)
    for (var n of fr(t))
      Am.call(t, n) && mr(e, n, t[n]);
  return e;
};
const Tm = {
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
Pm({
  linear: Sm
}, Tm);
function Ks(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c
  } = o, m = vt(), f = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let v = d;
  v = d || v || `update:${t.toString()}`;
  const g = (w) => i ? km(i) ? i(w) : Em(w) : w, b = () => Bm(e[t]) ? g(e[t]) : c;
  if (u) {
    const w = b(), k = A(w);
    return ee(() => e[t], (B) => k.value = g(B)), ee(k, (B) => {
      (B !== e[t] || p) && f(v, B);
    }, { deep: p }), k;
  } else
    return $({
      get() {
        return b();
      },
      set(w) {
        f(v, w);
      }
    });
}
function Im(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function vr(e) {
  return Im(e) || Array.isArray(e);
}
function Mm() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ba(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !vr(i) || !vr(u) ? i === u : Ba(i, u);
  });
}
function gr(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Rm(e, t) {
  if (e.length !== t.length) return !1;
  const n = gr(e), o = gr(t);
  return n.every((a, r) => {
    const l = o[r];
    return Ba(a, l);
  });
}
function ka(e) {
  return typeof e == "number";
}
function Ro(e) {
  return typeof e == "string";
}
function to(e) {
  return typeof e == "boolean";
}
function hr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function me(e) {
  return Math.abs(e);
}
function Sa(e) {
  return Math.sign(e);
}
function tn(e, t) {
  return me(e - t);
}
function Lm(e, t) {
  if (e === 0 || t === 0 || me(e) <= me(t)) return 0;
  const n = tn(me(e), me(t));
  return me(n / e);
}
function ln(e) {
  return un(e).map(Number);
}
function Re(e) {
  return e[bn(e)];
}
function bn(e) {
  return Math.max(0, e.length - 1);
}
function Oa(e, t) {
  return t === bn(e);
}
function yr(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function un(e) {
  return Object.keys(e);
}
function Hs(e, t) {
  return [e, t].reduce((n, o) => (un(o).forEach((a) => {
    const r = n[a], l = o[a], i = hr(r) && hr(l);
    n[a] = i ? Hs(r, l) : l;
  }), n), {});
}
function Lo(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Fm(e, t) {
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
    return Ro(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function dn() {
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
function Vm(e, t, n, o) {
  const a = dn(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function p() {
    f(), a.clear();
  }
  function c(b) {
    if (!u) return;
    l || (l = b);
    const w = b - l;
    for (l = b, i += w; i >= r; )
      n(r), i -= r;
    const k = i / r;
    o(k), u && t.requestAnimationFrame(c);
  }
  function m() {
    u || (u = t.requestAnimationFrame(c));
  }
  function f() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function v() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: p,
    start: m,
    stop: f,
    update: () => n(r),
    render: o
  };
}
function zm(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = p(), u = c();
  function d(v) {
    const {
      height: g,
      width: b
    } = v;
    return o ? g : b;
  }
  function p() {
    return o ? "top" : n ? "right" : "left";
  }
  function c() {
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
  const n = me(e - t);
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
function Ws(e, t, n) {
  const {
    constrain: o
  } = kt(0, e), a = e + 1;
  let r = l(t);
  function l(m) {
    return n ? me((a + m) % a) : o(m);
  }
  function i() {
    return r;
  }
  function u(m) {
    return r = l(m), c;
  }
  function d(m) {
    return p().set(i() + m);
  }
  function p() {
    return Ws(e, i(), n);
  }
  const c = {
    get: i,
    set: u,
    add: d,
    clone: p
  };
  return c;
}
function Nm(e, t, n, o, a, r, l, i, u, d, p, c, m, f, v, g, b, w, k) {
  const {
    cross: B,
    direction: D
  } = e, E = ["INPUT", "SELECT", "TEXTAREA"], T = {
    passive: !1
  }, O = dn(), I = dn(), R = kt(50, 225).constrain(f.measure(20)), S = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, L = v ? 43 : 25;
  let q = !1, H = 0, N = 0, U = !1, J = !1, ae = !1, le = !1;
  function ke(W) {
    if (!k) return;
    function se(Oe) {
      (to(k) || k(W, Oe)) && ht(Oe);
    }
    const be = t;
    O.add(be, "dragstart", (Oe) => Oe.preventDefault(), T).add(be, "touchmove", () => {
    }, T).add(be, "touchend", () => {
    }).add(be, "touchstart", se).add(be, "mousedown", se).add(be, "touchcancel", ce).add(be, "contextmenu", ce).add(be, "click", Se, !0);
  }
  function de() {
    O.clear(), I.clear();
  }
  function ot() {
    const W = le ? n : t;
    I.add(W, "touchmove", he, T).add(W, "touchend", ce).add(W, "mousemove", he, T).add(W, "mouseup", ce);
  }
  function Ve(W) {
    const se = W.nodeName || "";
    return E.includes(se);
  }
  function Te() {
    return (v ? M : S)[le ? "mouse" : "touch"];
  }
  function ze(W, se) {
    const be = c.add(Sa(W) * -1), Oe = p.byDistance(W, !v).distance;
    return v || me(W) < R ? Oe : b && se ? Oe * 0.5 : p.byIndex(be.get(), 0).distance;
  }
  function ht(W) {
    const se = Lo(W, o);
    le = se, ae = v && se && !W.buttons && q, q = tn(a.get(), l.get()) >= 2, !(se && W.button !== 0) && (Ve(W.target) || (U = !0, r.pointerDown(W), d.useFriction(0).useDuration(0), a.set(l), ot(), H = r.readPoint(W), N = r.readPoint(W, B), m.emit("pointerDown")));
  }
  function he(W) {
    if (!Lo(W, o) && W.touches.length >= 2) return ce(W);
    const be = r.readPoint(W), Oe = r.readPoint(W, B), Ne = tn(be, H), qe = tn(Oe, N);
    if (!J && !le && (!W.cancelable || (J = Ne > qe, !J)))
      return ce(W);
    const at = r.pointerMove(W);
    Ne > g && (ae = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(D(at)), W.preventDefault();
  }
  function ce(W) {
    const be = p.byDistance(0, !1).index !== c.get(), Oe = r.pointerUp(W) * Te(), Ne = ze(D(Oe), be), qe = Lm(Oe, Ne), at = L - 10 * qe, rt = w + qe / 50;
    J = !1, U = !1, I.clear(), d.useDuration(at).useFriction(rt), u.distance(Ne, !v), le = !1, m.emit("pointerUp");
  }
  function Se(W) {
    ae && (W.stopPropagation(), W.preventDefault(), ae = !1);
  }
  function ye() {
    return U;
  }
  return {
    init: ke,
    destroy: de,
    pointerDown: ye
  };
}
function jm(e, t) {
  let o, a;
  function r(c) {
    return c.timeStamp;
  }
  function l(c, m) {
    const v = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Lo(c, t) ? c : c.touches[0])[v];
  }
  function i(c) {
    return o = c, a = c, l(c);
  }
  function u(c) {
    const m = l(c) - l(a), f = r(c) - r(o) > 170;
    return a = c, f && (o = c), m;
  }
  function d(c) {
    if (!o || !a) return 0;
    const m = l(a) - l(o), f = r(c) - r(o), v = r(c) - r(a) > 170, g = m / f;
    return f && !v && me(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function Km() {
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
function Hm(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function Wm(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, p = [], c = !1;
  function m(b) {
    return a.measureSize(l.measure(b));
  }
  function f(b) {
    if (!r) return;
    d = m(e), p = o.map(m);
    function w(k) {
      for (const B of k) {
        if (c) return;
        const D = B.target === e, E = o.indexOf(B.target), T = D ? d : p[E], O = m(D ? e : o[E]);
        if (me(O - T) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((k) => {
      (to(r) || r(b, k)) && w(k);
    }), n.requestAnimationFrame(() => {
      i.forEach((k) => u.observe(k));
    });
  }
  function v() {
    c = !0, u && u.disconnect();
  }
  return {
    init: f,
    destroy: v
  };
}
function Um(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, p = e.get(), c = 0;
  function m(T) {
    const O = T / 1e3, I = u * O, R = o.get() - e.get(), S = !u;
    let M = 0;
    return S ? (l = 0, n.set(o), e.set(o), M = R) : (n.set(e), l += R / I, l *= d, p += l, e.add(l * O), M = p - c), i = Sa(M), c = p, E;
  }
  function f() {
    const T = o.get() - t.get();
    return me(T) < 1e-3;
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
    return B(a);
  }
  function k() {
    return D(r);
  }
  function B(T) {
    return u = T, E;
  }
  function D(T) {
    return d = T, E;
  }
  const E = {
    direction: g,
    duration: v,
    velocity: b,
    seek: m,
    settled: f,
    useBaseFriction: k,
    useBaseDuration: w,
    useFriction: D,
    useDuration: B
  };
  return E;
}
function Gm(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = kt(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function p(f) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = me(e[v] - t.get()), b = n.get() - t.get(), w = i.constrain(g / l);
    n.subtract(b * w), !f && me(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function c(f) {
    u = !f;
  }
  return {
    shouldConstrain: d,
    constrain: p,
    toggleActive: c
  };
}
function qm(e, t, n, o, a) {
  const r = kt(-t + e, 0), l = c(), i = p(), u = m();
  function d(v, g) {
    return tn(v, g) < 1;
  }
  function p() {
    const v = l[0], g = Re(l), b = l.lastIndexOf(v), w = l.indexOf(g) + 1;
    return kt(b, w);
  }
  function c() {
    return n.map((v, g) => {
      const {
        min: b,
        max: w
      } = r, k = r.constrain(v), B = !g, D = Oa(n, g);
      return B ? w : D || d(b, k) ? b : d(w, k) ? w : k;
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
function Xm(e, t, n) {
  const o = t[0], a = n ? o - e : Re(t);
  return {
    limit: kt(a, o)
  };
}
function Ym(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = kt(r, l);
  function d(m) {
    return m === 1 ? u(n.get()) : m === -1 ? i(n.get()) : !1;
  }
  function p(m) {
    if (!d(m)) return;
    const f = e * (m * -1);
    o.forEach((v) => v.add(f));
  }
  return {
    loop: p
  };
}
function Zm(e) {
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
function Qm(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = c().map(t.measure), d = m(), p = f();
  function c() {
    return i(o).map((g) => Re(g)[l] - g[0][r]).map(me);
  }
  function m() {
    return o.map((g) => n[r] - g[r]).map((g) => -me(g));
  }
  function f() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: p
  };
}
function Jm(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = p();
  function p() {
    const m = l(r), f = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : f ? m : m.slice(i, u).map((v, g, b) => {
      const w = !g, k = Oa(b, g);
      if (w) {
        const B = Re(b[0]) + 1;
        return yr(B);
      }
      if (k) {
        const B = bn(r) - Re(b)[0] + 1;
        return yr(B, Re(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function ev(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(v) {
    return v.concat().sort((g, b) => me(g) - me(b))[0];
  }
  function d(v) {
    const g = e ? l(v) : i(v), b = t.map((k, B) => ({
      diff: p(k - g, 0),
      index: B
    })).sort((k, B) => me(k.diff) - me(B.diff)), {
      index: w
    } = b[0];
    return {
      index: w,
      distance: g
    };
  }
  function p(v, g) {
    const b = [v, v + n, v - n];
    if (!e) return v;
    if (!g) return u(b);
    const w = b.filter((k) => Sa(k) === g);
    return w.length ? u(w) : Re(b) - n;
  }
  function c(v, g) {
    const b = t[v] - a.get(), w = p(b, g);
    return {
      index: v,
      distance: w
    };
  }
  function m(v, g) {
    const b = a.get() + v, {
      index: w,
      distance: k
    } = d(b), B = !e && r(b);
    if (!g || B) return {
      index: w,
      distance: v
    };
    const D = t[w] - k, E = v + p(D, 0);
    return {
      index: w,
      distance: E
    };
  }
  return {
    byDistance: m,
    byIndex: c,
    shortcut: p
  };
}
function tv(e, t, n, o, a, r, l) {
  function i(c) {
    const m = c.distance, f = c.index !== t.get();
    r.add(m), m && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), f && (n.set(t.get()), t.set(c.index), l.emit("select"));
  }
  function u(c, m) {
    const f = a.byDistance(c, m);
    i(f);
  }
  function d(c, m) {
    const f = t.clone().set(c), v = a.byIndex(f.get(), m);
    i(v);
  }
  return {
    distance: u,
    index: d
  };
}
function nv(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function p(f) {
    if (!i) return;
    function v(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const k = n.findIndex((B) => B.includes(g));
      ka(k) && (a.useDuration(0), o.index(k, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", c, !1), t.forEach((g, b) => {
      r.add(g, "focus", (w) => {
        (to(i) || i(f, w)) && v(b);
      }, u);
    });
  }
  function c(f) {
    f.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: p
  };
}
function Jt(e) {
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
    return ka(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function Us(e, t) {
  const n = e.scroll === "x" ? r : l, o = t.style;
  let a = !1;
  function r(c) {
    return `translate3d(${c}px,0px,0px)`;
  }
  function l(c) {
    return `translate3d(0px,${c}px,0px)`;
  }
  function i(c) {
    a || (o.transform = n(e.direction(c)));
  }
  function u(c) {
    a = !c;
  }
  function d() {
    a || (o.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: i,
    toggleActive: u
  };
}
function ov(e, t, n, o, a, r, l, i, u) {
  const p = ln(a), c = ln(a).reverse(), m = w().concat(k());
  function f(O, I) {
    return O.reduce((R, S) => R - a[S], I);
  }
  function v(O, I) {
    return O.reduce((R, S) => f(R, I) > 0 ? R.concat([S]) : R, []);
  }
  function g(O) {
    return r.map((I, R) => ({
      start: I - o[R] + 0.5 + O,
      end: I + t - 0.5 + O
    }));
  }
  function b(O, I, R) {
    const S = g(I);
    return O.map((M) => {
      const L = R ? 0 : -n, q = R ? n : 0, H = R ? "end" : "start", N = S[M][H];
      return {
        index: M,
        loopPoint: N,
        slideLocation: Jt(-1),
        translate: Us(e, u[M]),
        target: () => i.get() > N ? L : q
      };
    });
  }
  function w() {
    const O = l[0], I = v(c, O);
    return b(I, n, !1);
  }
  function k() {
    const O = t - l[0] - 1, I = v(p, O);
    return b(I, -n, !0);
  }
  function B() {
    return m.every(({
      index: O
    }) => {
      const I = p.filter((R) => R !== O);
      return f(I, t) <= 0.1;
    });
  }
  function D() {
    m.forEach((O) => {
      const {
        target: I,
        translate: R,
        slideLocation: S
      } = O, M = I();
      M !== S.get() && (R.to(M), S.set(M));
    });
  }
  function E() {
    m.forEach((O) => O.translate.clear());
  }
  return {
    canLoop: B,
    clear: E,
    loop: D,
    loopPoints: m
  };
}
function av(e, t, n) {
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
      a || (to(n) || n(u, p)) && d(p);
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
function rv(e, t, n, o) {
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
  function p() {
    i && i.disconnect(), u = !0;
  }
  function c(v) {
    return un(a).reduce((g, b) => {
      const w = parseInt(b), {
        isIntersecting: k
      } = a[w];
      return (v && k || !v && !k) && g.push(w), g;
    }, []);
  }
  function m(v = !0) {
    if (v && r) return r;
    if (!v && l) return l;
    const g = c(v);
    return v && (r = g), v || (l = g), g;
  }
  return {
    init: d,
    destroy: p,
    get: m
  };
}
function sv(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, p = v(), c = g(), m = n.map(l), f = b();
  function v() {
    if (!d) return 0;
    const k = n[0];
    return me(t[i] - k[i]);
  }
  function g() {
    if (!d) return 0;
    const k = r.getComputedStyle(Re(o));
    return parseFloat(k.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map((k, B, D) => {
      const E = !B, T = Oa(D, B);
      return E ? m[B] + p : T ? m[B] + c : D[B + 1][i] - k[i];
    }).map(me);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: f,
    startGap: p,
    endGap: c
  };
}
function lv(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: p,
    direction: c
  } = e, m = ka(n);
  function f(w, k) {
    return ln(w).filter((B) => B % k === 0).map((B) => w.slice(B, B + k));
  }
  function v(w) {
    return w.length ? ln(w).reduce((k, B, D) => {
      const E = Re(k) || 0, T = E === 0, O = B === bn(w), I = a[d] - r[E][d], R = a[d] - r[B][p], S = !o && T ? c(l) : 0, M = !o && O ? c(i) : 0, L = me(R - M - (I + S));
      return D && L > t + u && k.push(B), O && k.push(w.length), k;
    }, []).map((k, B, D) => {
      const E = Math.max(D[B - 1] || 0);
      return w.slice(E, k);
    }) : [];
  }
  function g(w) {
    return m ? f(w, n) : v(w);
  }
  return {
    groupSlides: g
  };
}
function iv(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: p,
    loop: c,
    duration: m,
    dragFree: f,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: w,
    containScroll: k,
    watchResize: B,
    watchSlides: D,
    watchDrag: E,
    watchFocus: T
  } = r, O = 2, I = Km(), R = I.measure(t), S = n.map(I.measure), M = zm(u, d), L = M.measureSize(R), q = Hm(L), H = Fm(i, L), N = !c && !!k, U = c || !!k, {
    slideSizes: J,
    slideSizesWithGaps: ae,
    startGap: le,
    endGap: ke
  } = sv(M, R, S, n, U, a), de = lv(M, L, b, c, R, S, le, ke, O), {
    snaps: ot,
    snapsAligned: Ve
  } = Qm(M, H, R, S, de), Te = -Re(ot) + Re(ae), {
    snapsContained: ze,
    scrollContainLimit: ht
  } = qm(L, Te, Ve, k, O), he = N ? ze : Ve, {
    limit: ce
  } = Xm(Te, he, c), Se = Ws(bn(he), p, c), ye = Se.clone(), ie = ln(n), W = ({
    dragHandler: st,
    scrollBody: so,
    scrollBounds: lo,
    options: {
      loop: wn
    }
  }, io) => {
    wn || lo.constrain(st.pointerDown()), so.seek(io);
  }, se = ({
    scrollBody: st,
    translate: so,
    location: lo,
    offsetLocation: wn,
    scrollLooper: io,
    slideLooper: Xs,
    dragHandler: Ys,
    animation: Zs,
    eventHandler: Pa,
    scrollBounds: Qs,
    options: {
      loop: Ta
    }
  }, Ia) => {
    const Ma = st.settled(), Js = !Qs.shouldConstrain(), Ra = Ta ? Ma : Ma && Js;
    Ra && !Ys.pointerDown() && (Zs.stop(), Pa.emit("settle")), Ra || Pa.emit("scroll");
    const el = lo.get() * Ia + at.get() * (1 - Ia);
    wn.set(el), Ta && (io.loop(st.direction()), Xs.loop()), so.to(wn.get());
  }, be = Vm(o, a, (st) => W(ro, st), (st) => se(ro, st)), Oe = 0.68, Ne = he[Se.get()], qe = Jt(Ne), at = Jt(Ne), rt = Jt(Ne), yt = Jt(Ne), Yt = Um(qe, rt, at, yt, m, Oe), oo = ev(c, he, Te, ce, yt), ao = tv(be, Se, ye, Yt, oo, yt, l), Da = Zm(ce), $a = dn(), Gs = rv(t, n, l, g), {
    slideRegistry: Aa
  } = Jm(N, k, he, ht, de, ie), qs = nv(e, n, Aa, ao, Yt, $a, l, T), ro = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: R,
    slideRects: S,
    animation: be,
    axis: M,
    dragHandler: Nm(M, e, o, a, yt, jm(M, a), qe, be, ao, Yt, oo, Se, l, q, f, v, w, Oe, E),
    eventStore: $a,
    percentOfView: q,
    index: Se,
    indexPrevious: ye,
    limit: ce,
    location: qe,
    offsetLocation: rt,
    previousLocation: at,
    options: r,
    resizeHandler: Wm(t, l, a, n, M, B, I),
    scrollBody: Yt,
    scrollBounds: Gm(ce, rt, yt, Yt, q),
    scrollLooper: Ym(Te, ce, rt, [qe, rt, at, yt]),
    scrollProgress: Da,
    scrollSnapList: he.map(Da.get),
    scrollSnaps: he,
    scrollTarget: oo,
    scrollTo: ao,
    slideLooper: ov(M, L, Te, J, ae, ot, he, rt, n),
    slideFocus: qs,
    slidesHandler: av(t, l, D),
    slidesInView: Gs,
    slideIndexes: ie,
    slideRegistry: Aa,
    slidesToScroll: de,
    target: yt,
    translate: Us(M, t)
  };
  return ro;
}
function uv() {
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
const dv = {
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
function cv(e) {
  function t(r, l) {
    return Hs(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = un(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => un(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function pv(e) {
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
function Rn(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = cv(a), l = pv(r), i = dn(), u = uv(), {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: c
  } = r, {
    on: m,
    off: f,
    emit: v
  } = u, g = M;
  let b = !1, w, k = d(dv, Rn.globalOptions), B = d(k), D = [], E, T, O;
  function I() {
    const {
      container: ie,
      slides: W
    } = B;
    T = (Ro(ie) ? e.querySelector(ie) : ie) || e.children[0];
    const be = Ro(W) ? T.querySelectorAll(W) : W;
    O = [].slice.call(be || T.children);
  }
  function R(ie) {
    const W = iv(e, T, O, o, a, ie, u);
    if (ie.loop && !W.slideLooper.canLoop()) {
      const se = Object.assign({}, ie, {
        loop: !1
      });
      return R(se);
    }
    return W;
  }
  function S(ie, W) {
    b || (k = d(k, ie), B = p(k), D = W || D, I(), w = R(B), c([k, ...D.map(({
      options: se
    }) => se)]).forEach((se) => i.add(se, "change", M)), B.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(ye), w.eventHandler.init(ye), w.resizeHandler.init(ye), w.slidesHandler.init(ye), w.options.loop && w.slideLooper.loop(), T.offsetParent && O.length && w.dragHandler.init(ye), E = l.init(ye, D)));
  }
  function M(ie, W) {
    const se = de();
    L(), S(d({
      startIndex: se
    }, ie), W), u.emit("reInit");
  }
  function L() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), l.destroy(), i.clear();
  }
  function q() {
    b || (b = !0, i.clear(), L(), u.emit("destroy"), u.clear());
  }
  function H(ie, W, se) {
    !B.active || b || (w.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : B.duration), w.scrollTo.index(ie, se || 0));
  }
  function N(ie) {
    const W = w.index.add(1).get();
    H(W, ie, -1);
  }
  function U(ie) {
    const W = w.index.add(-1).get();
    H(W, ie, 1);
  }
  function J() {
    return w.index.add(1).get() !== de();
  }
  function ae() {
    return w.index.add(-1).get() !== de();
  }
  function le() {
    return w.scrollSnapList;
  }
  function ke() {
    return w.scrollProgress.get(w.location.get());
  }
  function de() {
    return w.index.get();
  }
  function ot() {
    return w.indexPrevious.get();
  }
  function Ve() {
    return w.slidesInView.get();
  }
  function Te() {
    return w.slidesInView.get(!1);
  }
  function ze() {
    return E;
  }
  function ht() {
    return w;
  }
  function he() {
    return e;
  }
  function ce() {
    return T;
  }
  function Se() {
    return O;
  }
  const ye = {
    canScrollNext: J,
    canScrollPrev: ae,
    containerNode: ce,
    internalEngine: ht,
    destroy: q,
    off: f,
    on: m,
    emit: v,
    plugins: ze,
    previousScrollSnap: ot,
    reInit: g,
    rootNode: he,
    scrollNext: N,
    scrollPrev: U,
    scrollProgress: ke,
    scrollSnapList: le,
    scrollTo: H,
    selectedScrollSnap: de,
    slideNodes: Se,
    slidesInView: Ve,
    slidesNotInView: Te
  };
  return S(t, n), setTimeout(() => u.emit("init"), 0), ye;
}
Rn.globalOptions = void 0;
function Ea(e = {}, t = []) {
  const n = _t(e), o = _t(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Dn(), i = Dn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return ue(() => {
    !Mm() || !l.value || (Rn.globalOptions = Ea.globalOptions, i.value = Rn(l.value, a, r));
  }), Fn(() => {
    i.value && i.value.destroy();
  }), n && ee(e, (d) => {
    Ba(a, d) || (a = d, u());
  }), o && ee(t, (d) => {
    Rm(r, d) || (r = d, u());
  }), [l, i];
}
Ea.globalOptions = void 0;
const [fv, mv] = Om(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Ea(
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
    const u = A(!1), d = A(!1);
    function p(c) {
      u.value = (c == null ? void 0 : c.canScrollNext()) || !1, d.value = (c == null ? void 0 : c.canScrollPrev()) || !1;
    }
    return ue(() => {
      var c, m, f;
      r.value && ((c = r.value) == null || c.on("init", p), (m = r.value) == null || m.on("reInit", p), (f = r.value) == null || f.on("select", p), o("init-api", r.value));
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
function no() {
  const e = mv();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const i0 = /* @__PURE__ */ x({
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
    } = fv(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: p,
      scrollPrev: c
    });
    function m(f) {
      const v = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (f.key === v) {
        f.preventDefault(), c();
        return;
      }
      f.key === g && (f.preventDefault(), p());
    }
    return (f, v) => (h(), j("div", {
      class: re(s(z)("relative", o.class)),
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
        scrollNext: s(p),
        scrollPrev: s(c)
      })
    ], 34));
  }
}), u0 = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = no();
    return (a, r) => (h(), j("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      ne("div", P({
        class: s(z)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), d0 = /* @__PURE__ */ x({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = no();
    return (o, a) => (h(), j("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: re(
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
}), c0 = /* @__PURE__ */ x({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = no();
    return (r, l) => (h(), C(s(js), {
      disabled: !s(o),
      class: re(
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
          V(s(om), { class: "size-4 text-current" }),
          l[0] || (l[0] = ne("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), p0 = /* @__PURE__ */ x({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = no();
    return (r, l) => (h(), C(s(js), {
      disabled: !s(o),
      class: re(
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
          V(s(am), { class: "size-4 text-current" }),
          l[0] || (l[0] = ne("span", { class: "sr-only" }, "Next Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), vv = /* @__PURE__ */ x({
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
    const n = e, o = t, a = $(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(md), P(s(r), {
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
}), gv = /* @__PURE__ */ x({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(aa), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f0 = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Et), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m0 = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ra), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v0 = /* @__PURE__ */ x({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), g0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(da), P(s(o), {
      class: s(z)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), h0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(ca), P(s(o), {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hv = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(sa), null, {
      default: y(() => [
        V(s(Xn), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(qn), P(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            V(s(Et), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                V(s(eo), { class: "size-4" }),
                i[1] || (i[1] = ne("span", { class: "sr-only" }, "Close", -1))
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
}), y0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(sa), null, {
      default: y(() => [
        V(s(Xn), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            V(s(qn), P({
              class: s(z)(
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
                _(l.$slots, "default"),
                V(s(Et), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    V(s(eo), { class: "h-4 w-4" }),
                    i[1] || (i[1] = ne("span", { class: "sr-only" }, "Close", -1))
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
}), b0 = /* @__PURE__ */ x({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), w0 = /* @__PURE__ */ x({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(gv), G(X(s(a))), {
      default: y(() => [
        V(s(hv), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            V(vv, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), x0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(_d), P(n.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(hd), P(n.value, {
      class: s(z)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), C(s(yd), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Ee(De(o.heading), 1)
          ]),
          _: 1
        })) : fe("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yv = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, C0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), j("div", yv, [
      V(s(um), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      V(s(vd), P({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), B0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(Sd), P(s(r), {
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
}), bv = { role: "presentation" }, k0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(xd), P(s(r), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        ne("div", bv, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(Od), P(n.value, {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O0 = /* @__PURE__ */ x({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("span", {
      class: re(s(z)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), E0 = /* @__PURE__ */ x({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(nc), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D0 = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ce(e);
    return (o, a) => (h(), C(s(oc), P({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(ac), null, {
      default: y(() => [
        V(s(rc), P(s(r), {
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
}), A0 = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(lc), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P0 = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(cc), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(sc), P(s(o), {
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
}), wv = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, I0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(uc), P(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ne("span", wv, [
          V(s(vs), null, {
            default: y(() => [
              V(s(Vs), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xv = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, M0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(pc), P(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ne("span", xv, [
          V(s(vs), null, {
            default: y(() => [
              V(s(im), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R0 = /* @__PURE__ */ x({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("span", {
      class: re(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), L0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(ic), P(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), F0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(dc), P(s(o), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V0 = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(fc), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(vc), P(s(o), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        V(s(sm), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(mc), P(s(r), {
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
}), j0 = /* @__PURE__ */ x({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Ks(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => zt((h(), j("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => _t(a) ? a.value = i : null),
      class: re(
        s(z)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Sr, s(a)]
    ]);
  }
}), K0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(gc), P(n.value, {
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
}), H0 = /* @__PURE__ */ x({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(yc), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W0 = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(bc), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), U0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(wc), null, {
      default: y(() => [
        V(s(Cc), P({ ...s(r), ...l.$attrs }, {
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
}), G0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(Ec), P(n.value, {
      class: s(z)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        V(s(Dc), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Nt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), q0 = /* @__PURE__ */ x({
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
    const a = Q(e, t);
    return (r, l) => (h(), C(s(Mc), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X0 = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(rp), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(Fc), P(s(o), {
      class: s(z)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        V(s(sp), { "as-child": "" }, {
          default: y(() => [
            V(s(rm), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z0 = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(Vc), null, {
      default: y(() => [
        V(s(Gc), P({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            V(s(Cv)),
            V(s(np), {
              class: re(
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
            V(s(Bv))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Q0 = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(ep), P({
      class: s(z)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _v = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, J0 = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(Yc), P(s(o), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        ne("span", _v, [
          V(s(Zc), null, {
            default: y(() => [
              V(s(Vs), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        V(s(ws), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eg = /* @__PURE__ */ x({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ws), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tg = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(tp), {
      class: re(s(z)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ng = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(qc), P(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Cv = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(op), P(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          V(s(lm))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bv = /* @__PURE__ */ x({
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
    }), o = Ce(n);
    return (a, r) => (h(), C(s(ap), P(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          V(s(zs))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), og = /* @__PURE__ */ x({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Q(e, t);
    return (r, l) => (h(), C(s(aa), G(X(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ag = /* @__PURE__ */ x({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ra), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rg = /* @__PURE__ */ x({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Et), G(X(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sg = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(sa), null, {
      default: y(() => [
        V(s(Xn), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(qn), P({
          class: s(z)(s(kv)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            V(s(Et), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                V(s(eo), { class: "h-4 w-4" })
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
}), lg = /* @__PURE__ */ x({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ig = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(da), P({
      class: s(z)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ug = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(s(ca), P({
      class: s(z)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dg = /* @__PURE__ */ x({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), kv = yn(
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
), cg = /* @__PURE__ */ x({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", {
      class: re(s(z)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), pg = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(bp), P({
      class: s(z)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        V(s(_p), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            V(s(Cp), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), j(we, null, Ct(l.modelValue, (u, d) => (h(), C(s(xp), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), fg = /* @__PURE__ */ x({
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
    }), r = Q(a, o);
    return (l, i) => (h(), C(s(Ep), P(s(r), {
      class: s(z)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        V(s(Dp), {
          class: re(
            s(z)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Sv = { class: "relative w-full overflow-auto" }, mg = /* @__PURE__ */ x({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("div", Sv, [
      ne("table", {
        class: re(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), vg = /* @__PURE__ */ x({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("tbody", {
      class: re(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ov = /* @__PURE__ */ x({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("td", {
      class: re(
        s(z)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), gg = /* @__PURE__ */ x({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("th", {
      class: re(
        s(z)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), hg = /* @__PURE__ */ x({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("thead", {
      class: re(s(z)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), yg = /* @__PURE__ */ x({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("tfoot", {
      class: re(s(z)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ev = /* @__PURE__ */ x({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("tr", {
      class: re(
        s(z)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), bg = /* @__PURE__ */ x({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), j("caption", {
      class: re(s(z)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Dv = { class: "flex items-center justify-center py-10" }, wg = /* @__PURE__ */ x({
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
    return (o, a) => (h(), C(Ev, null, {
      default: y(() => [
        V(Ov, P({
          class: s(z)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            ne("div", Dv, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), xg = /* @__PURE__ */ x({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Ks(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => zt((h(), j("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => _t(a) ? a.value = i : null),
      class: re(
        s(z)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Sr, s(a)]
    ]);
  }
});
export {
  qv as Accordion,
  ym as AccordionContent,
  bm as AccordionItem,
  wm as AccordionTrigger,
  Xv as AlertDialog,
  n0 as AlertDialogAction,
  o0 as AlertDialogCancel,
  Zv as AlertDialogContent,
  e0 as AlertDialogDescription,
  t0 as AlertDialogFooter,
  Qv as AlertDialogHeader,
  Jv as AlertDialogTitle,
  Yv as AlertDialogTrigger,
  a0 as Avatar,
  s0 as AvatarFallback,
  r0 as AvatarImage,
  l0 as Badge,
  js as Button,
  i0 as Carousel,
  u0 as CarouselContent,
  d0 as CarouselItem,
  p0 as CarouselNext,
  c0 as CarouselPrevious,
  vv as Command,
  w0 as CommandDialog,
  x0 as CommandEmpty,
  _0 as CommandGroup,
  C0 as CommandInput,
  B0 as CommandItem,
  k0 as CommandList,
  S0 as CommandSeparator,
  O0 as CommandShortcut,
  gv as Dialog,
  f0 as DialogClose,
  hv as DialogContent,
  h0 as DialogDescription,
  b0 as DialogFooter,
  v0 as DialogHeader,
  y0 as DialogScrollContent,
  g0 as DialogTitle,
  m0 as DialogTrigger,
  E0 as DropdownMenu,
  I0 as DropdownMenuCheckboxItem,
  $0 as DropdownMenuContent,
  A0 as DropdownMenuGroup,
  T0 as DropdownMenuItem,
  F0 as DropdownMenuLabel,
  ac as DropdownMenuPortal,
  P0 as DropdownMenuRadioGroup,
  M0 as DropdownMenuRadioItem,
  L0 as DropdownMenuSeparator,
  R0 as DropdownMenuShortcut,
  V0 as DropdownMenuSub,
  N0 as DropdownMenuSubContent,
  z0 as DropdownMenuSubTrigger,
  D0 as DropdownMenuTrigger,
  Uv as Flasher,
  Vv as Header,
  Gv as Heading,
  j0 as Input,
  K0 as Label,
  zv as Main,
  H0 as Popover,
  Lv as PopoverAnchor,
  U0 as PopoverContent,
  W0 as PopoverTrigger,
  G0 as Progress,
  q0 as Select,
  Z0 as SelectContent,
  Q0 as SelectGroup,
  J0 as SelectItem,
  eg as SelectItemText,
  tg as SelectLabel,
  Bv as SelectScrollDownButton,
  Cv as SelectScrollUpButton,
  ng as SelectSeparator,
  Y0 as SelectTrigger,
  X0 as SelectValue,
  og as Sheet,
  rg as SheetClose,
  sg as SheetContent,
  ug as SheetDescription,
  dg as SheetFooter,
  lg as SheetHeader,
  ig as SheetTitle,
  ag as SheetTrigger,
  cg as Skeleton,
  pg as Slider,
  fg as Switch,
  mg as Table,
  vg as TableBody,
  bg as TableCaption,
  Ov as TableCell,
  wg as TableEmpty,
  yg as TableFooter,
  gg as TableHead,
  hg as TableHeader,
  Ev as TableRow,
  xg as Textarea,
  tm as Toast,
  Wv as ToastAction,
  dm as ToastClose,
  sr as ToastDescription,
  pm as ToastProvider,
  cm as ToastTitle,
  nm as ToastViewport,
  xf as Toaster,
  Fv as TwoColumnLayout,
  Nv as TwoColumnLayoutSidebar,
  jv as TwoColumnLayoutSidebarDesktop,
  Kv as TwoColumnLayoutSidebarMobile,
  Hv as TwoColumnLayoutSidebarTrigger,
  xm as avatarVariant,
  _m as badgeVariants,
  Ca as buttonVariants,
  Av as preset,
  kv as sheetVariants,
  hf as toast,
  mm as toastVariants,
  no as useCarousel,
  vm as useFlasher,
  Ps as useToast
};
