import * as Ka from "vue";
import { computed as $, ref as E, shallowRef as Io, watch as ee, getCurrentScope as Br, onScopeDispose as kr, shallowReadonly as Rt, unref as s, defineComponent as w, createBlock as C, openBlock as h, normalizeProps as U, guardReactiveProps as G, withCtx as y, renderSlot as _, toRefs as fe, createVNode as V, mergeProps as P, onMounted as le, watchEffect as xe, normalizeStyle as Ot, createCommentVNode as pe, getCurrentInstance as mt, toRef as bl, camelize as $r, withKeys as _t, toHandlers as wl, resolveDynamicComponent as Ne, withModifiers as $e, nextTick as re, withDirectives as Wt, vShow as Vn, h as Ct, createTextVNode as Se, watchSyncEffect as xl, toDisplayString as De, isRef as Bt, onBeforeMount as Sr, onUnmounted as Ye, createElementBlock as N, Fragment as ke, renderList as kt, useSlots as Or, Teleport as No, onBeforeUnmount as Ko, inject as zn, provide as Nn, toHandlerKey as _l, onBeforeUpdate as Cl, onUpdated as Bl, reactive as Tr, readonly as Kn, Comment as Dr, cloneVNode as kl, markRaw as $l, createElementVNode as ae, vModelSelect as Sl, toRaw as Ol, mergeDefaults as Er, watchPostEffect as Tl, effectScope as Pr, customRef as Dl, normalizeClass as oe, isVNode as El, vModelText as Ar } from "vue";
function Ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pl = {
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
}, pn = Pl, jn = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Al(e) {
  return e.trim().replace(jn.whitespace, " ");
}
function Il(e) {
  return encodeURIComponent(e).replace(jn.urlHexPairs, Rl);
}
function Ml(e) {
  return Object.keys(pn).forEach(function(t) {
    pn[t].test(e) && (e = e.replace(pn[t], t));
  }), e;
}
function Rl(e) {
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
function kn(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Ml(Al(e)).replace(jn.quotes, "'");
  return "data:image/svg+xml," + Il(t);
}
kn.toSrcset = function(t) {
  return kn(t).replace(/ /g, "%20");
};
var Fl = kn, Mr = {}, Rr = {};
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
    const r = function(l) {
      return {
        __options: l,
        handler: n(l),
        config: a(l)
      };
    };
    return r.__isOptionsFunction = !0, r.__pluginFunction = n, r.__configFunction = a, r;
  };
  const o = t;
})(Rr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ o(Rr);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const n = t.default;
})(Mr);
let fn = Mr;
var Fr = (fn.__esModule ? fn : { default: fn }).default, Lr = {}, Vr = {};
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
})(Vr);
var Ll = {
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
  const t = Vr, o = /* @__PURE__ */ n(Ll);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(o.default.theme);
})(Lr);
let mn = Lr;
var Vl = (mn.__esModule ? mn : { default: mn }).default, zr = {}, Nr = {}, Hn = { exports: {} }, X = String, Kr = function() {
  return { isColorSupported: !1, reset: X, bold: X, dim: X, italic: X, underline: X, inverse: X, hidden: X, strikethrough: X, black: X, red: X, green: X, yellow: X, blue: X, magenta: X, cyan: X, white: X, gray: X, bgBlack: X, bgRed: X, bgGreen: X, bgYellow: X, bgBlue: X, bgMagenta: X, bgCyan: X, bgWhite: X, blackBright: X, redBright: X, greenBright: X, yellowBright: X, blueBright: X, magentaBright: X, cyanBright: X, whiteBright: X, bgBlackBright: X, bgRedBright: X, bgGreenBright: X, bgYellowBright: X, bgBlueBright: X, bgMagentaBright: X, bgCyanBright: X, bgWhiteBright: X };
};
Hn.exports = Kr();
Hn.exports.createColors = Kr;
var zl = Hn.exports;
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
  const o = /* @__PURE__ */ n(zl);
  function n(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  let a = /* @__PURE__ */ new Set();
  function r(u, d, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && a.has(c) || (c && a.add(c), console.warn(""), d.forEach((p) => console.warn(u, "-", p)));
  }
  function l(u) {
    return o.default.dim(u);
  }
  const i = {
    info(u, d) {
      r(o.default.bold(o.default.cyan("info")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    warn(u, d) {
      r(o.default.bold(o.default.yellow("warn")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    },
    risk(u, d) {
      r(o.default.bold(o.default.magenta("risk")), ...Array.isArray(u) ? [
        u
      ] : [
        d,
        u
      ]);
    }
  };
})(Nr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ o(Nr);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function n({ version: r, from: l, to: i }) {
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
})(zr);
let vn = zr;
var Nl = (vn.__esModule ? vn : { default: vn }).default;
const $o = Fl, Kl = Fr, jr = Vl, lt = Nl, [jl, { lineHeight: Hl }] = jr.fontSize.base, { spacing: et, borderWidth: ja, borderRadius: Ha } = jr;
function wt(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Wl = Kl.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: o, theme: n }) {
    function a(u, d) {
      let c = n(u);
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
          "border-color": wt(
            n("colors.gray.500", lt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": ja.DEFAULT,
          "border-radius": Ha.none,
          "padding-top": et[2],
          "padding-right": et[3],
          "padding-bottom": et[2],
          "padding-left": et[3],
          "font-size": jl,
          "line-height": Hl,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": wt(
              n("colors.blue.600", lt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": wt(
              n("colors.blue.600", lt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: wt(n("colors.gray.500", lt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${$o(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              lt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${et[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": et[10],
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
          "padding-right": et[3],
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
          height: et[4],
          width: et[4],
          color: wt(n("colors.blue.600", lt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": wt(
            n("colors.gray.500", lt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": ja.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Ha.none
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
          "--tw-ring-color": wt(
            n("colors.blue.600", lt.blue[600]),
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
          "background-image": `url("${$o(
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
          "background-image": `url("${$o(
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
          "background-image": `url("${$o(
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
    r.includes("base") && t(i("base")), r.includes("class") && o(i("class"));
  };
});
var Ul = Wl;
const Gl = /* @__PURE__ */ Ir(Ul), ql = Fr;
function Wa(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Yl = ql(
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
      { values: Wa(o("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: o("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Wa(o("animationTimingFunction")) }
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
const Xl = /* @__PURE__ */ Ir(Yl), Bg = {
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
    Xl,
    Gl({
      strategy: "class"
    })
  ]
}, Zl = ["top", "right", "bottom", "left"], ct = Math.min, Ie = Math.max, Mo = Math.round, So = Math.floor, Ge = (e) => ({
  x: e,
  y: e
}), Jl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ql = {
  start: "end",
  end: "start"
};
function $n(e, t, o) {
  return Ie(e, ct(t, o));
}
function at(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rt(e) {
  return e.split("-")[0];
}
function Ut(e) {
  return e.split("-")[1];
}
function Wn(e) {
  return e === "x" ? "y" : "x";
}
function Un(e) {
  return e === "y" ? "height" : "width";
}
function pt(e) {
  return ["top", "bottom"].includes(rt(e)) ? "y" : "x";
}
function Gn(e) {
  return Wn(pt(e));
}
function ei(e, t, o) {
  o === void 0 && (o = !1);
  const n = Ut(e), a = Gn(e), r = Un(a);
  let l = a === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Ro(l)), [l, Ro(l)];
}
function ti(e) {
  const t = Ro(e);
  return [Sn(e), t, Sn(t)];
}
function Sn(e) {
  return e.replace(/start|end/g, (t) => Ql[t]);
}
function oi(e, t, o) {
  const n = ["left", "right"], a = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function ni(e, t, o, n) {
  const a = Ut(e);
  let r = oi(rt(e), o === "start", n);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(Sn)))), r;
}
function Ro(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Jl[t]);
}
function ai(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hr(e) {
  return typeof e != "number" ? ai(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Fo(e) {
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
function Ua(e, t, o) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = pt(t), l = Gn(t), i = Un(l), u = rt(t), d = r === "y", c = n.x + n.width / 2 - a.width / 2, p = n.y + n.height / 2 - a.height / 2, f = n[i] / 2 - a[i] / 2;
  let m;
  switch (u) {
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
  switch (Ut(t)) {
    case "start":
      m[l] -= f * (o && d ? -1 : 1);
      break;
    case "end":
      m[l] += f * (o && d ? -1 : 1);
      break;
  }
  return m;
}
const ri = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: l
  } = o, i = r.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: p
  } = Ua(d, n, u), f = n, m = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: x
    } = i[g], {
      x: k,
      y: B,
      data: D,
      reset: O
    } = await x({
      x: c,
      y: p,
      initialPlacement: n,
      placement: f,
      strategy: a,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = k ?? c, p = B ?? p, m = {
      ...m,
      [b]: {
        ...m[b],
        ...D
      }
    }, O && v <= 50 && (v++, typeof O == "object" && (O.placement && (f = O.placement), O.rects && (d = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : O.rects), {
      x: c,
      y: p
    } = Ua(d, f, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: f,
    strategy: a,
    middlewareData: m
  };
};
async function io(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
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
    padding: m = 0
  } = at(t, e), v = Hr(m), b = i[f ? p === "floating" ? "reference" : "floating" : p], x = Fo(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(b))) == null || o ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), k = p === "floating" ? {
    x: n,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), D = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Fo(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: B,
    strategy: u
  }) : k);
  return {
    top: (x.top - O.top + v.top) / D.y,
    bottom: (O.bottom - x.bottom + v.bottom) / D.y,
    left: (x.left - O.left + v.left) / D.x,
    right: (O.right - x.right + v.right) / D.x
  };
}
const si = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: a,
      rects: r,
      platform: l,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: c = 0
    } = at(e, t) || {};
    if (d == null)
      return {};
    const p = Hr(c), f = {
      x: o,
      y: n
    }, m = Gn(a), v = Un(m), g = await l.getDimensions(d), b = m === "y", x = b ? "top" : "left", k = b ? "bottom" : "right", B = b ? "clientHeight" : "clientWidth", D = r.reference[v] + r.reference[m] - f[m] - r.floating[v], O = f[m] - r.reference[m], A = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let S = A ? A[B] : 0;
    (!S || !await (l.isElement == null ? void 0 : l.isElement(A))) && (S = i.floating[B] || r.floating[v]);
    const I = D / 2 - O / 2, F = S / 2 - g[v] / 2 - 1, T = ct(p[x], F), L = ct(p[k], F), R = T, q = S - g[v] - L, H = S / 2 - g[v] / 2 + I, te = $n(R, H, q), se = !u.arrow && Ut(a) != null && H !== te && r.reference[v] / 2 - (H < R ? T : L) - g[v] / 2 < 0, ce = se ? H < R ? H - R : H - q : 0;
    return {
      [m]: f[m] + ce,
      data: {
        [m]: te,
        centerOffset: H - te - ce,
        ...se && {
          alignmentOffset: ce
        }
      },
      reset: se
    };
  }
}), li = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
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
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = at(e, t);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const x = rt(a), k = pt(i), B = rt(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), O = f || (B || !g ? [Ro(i)] : ti(i)), A = v !== "none";
      !f && A && O.push(...ni(i, g, v, D));
      const S = [i, ...O], I = await io(t, b), F = [];
      let T = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (c && F.push(I[x]), p) {
        const H = ei(a, l, D);
        F.push(I[H[0]], I[H[1]]);
      }
      if (T = [...T, {
        placement: a,
        overflows: F
      }], !F.every((H) => H <= 0)) {
        var L, R;
        const H = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, te = S[H];
        if (te)
          return {
            data: {
              index: H,
              overflows: T
            },
            reset: {
              placement: te
            }
          };
        let se = (R = T.filter((ce) => ce.overflows[0] <= 0).sort((ce, ue) => ce.overflows[1] - ue.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!se)
          switch (m) {
            case "bestFit": {
              var q;
              const ce = (q = T.filter((ue) => {
                if (A) {
                  const j = pt(ue.placement);
                  return j === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((ue) => [ue.placement, ue.overflows.filter((j) => j > 0).reduce((j, J) => j + J, 0)]).sort((ue, j) => ue[1] - j[1])[0]) == null ? void 0 : q[0];
              ce && (se = ce);
              break;
            }
            case "initialPlacement":
              se = i;
              break;
          }
        if (a !== se)
          return {
            reset: {
              placement: se
            }
          };
      }
      return {};
    }
  };
};
function Ga(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function qa(e) {
  return Zl.some((t) => e[t] >= 0);
}
const ii = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: n = "referenceHidden",
        ...a
      } = at(e, t);
      switch (n) {
        case "referenceHidden": {
          const r = await io(t, {
            ...a,
            elementContext: "reference"
          }), l = Ga(r, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: qa(l)
            }
          };
        }
        case "escaped": {
          const r = await io(t, {
            ...a,
            altBoundary: !0
          }), l = Ga(r, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: qa(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ui(e, t) {
  const {
    placement: o,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), l = rt(o), i = Ut(o), u = pt(o) === "y", d = ["left", "top"].includes(l) ? -1 : 1, c = r && u ? -1 : 1, p = at(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
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
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), u ? {
    x: m * c,
    y: f * d
  } : {
    x: f * d,
    y: m * c
  };
}
const di = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: a,
        y: r,
        placement: l,
        middlewareData: i
      } = t, u = await ui(t, e);
      return l === ((o = i.offset) == null ? void 0 : o.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: a + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, ci = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: n,
        placement: a
      } = t, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x,
              y: k
            } = b;
            return {
              x,
              y: k
            };
          }
        },
        ...u
      } = at(e, t), d = {
        x: o,
        y: n
      }, c = await io(t, u), p = pt(rt(a)), f = Wn(p);
      let m = d[f], v = d[p];
      if (r) {
        const b = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", k = m + c[b], B = m - c[x];
        m = $n(k, m, B);
      }
      if (l) {
        const b = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", k = v + c[b], B = v - c[x];
        v = $n(k, v, B);
      }
      const g = i.fn({
        ...t,
        [f]: m,
        [p]: v
      });
      return {
        ...g,
        data: {
          x: g.x - o,
          y: g.y - n,
          enabled: {
            [f]: r,
            [p]: l
          }
        }
      };
    }
  };
}, pi = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: n,
        placement: a,
        rects: r,
        middlewareData: l
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = at(e, t), c = {
        x: o,
        y: n
      }, p = pt(a), f = Wn(p);
      let m = c[f], v = c[p];
      const g = at(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const B = f === "y" ? "height" : "width", D = r.reference[f] - r.floating[B] + b.mainAxis, O = r.reference[f] + r.reference[B] - b.mainAxis;
        m < D ? m = D : m > O && (m = O);
      }
      if (d) {
        var x, k;
        const B = f === "y" ? "width" : "height", D = ["top", "left"].includes(rt(a)), O = r.reference[p] - r.floating[B] + (D && ((x = l.offset) == null ? void 0 : x[p]) || 0) + (D ? 0 : b.crossAxis), A = r.reference[p] + r.reference[B] + (D ? 0 : ((k = l.offset) == null ? void 0 : k[p]) || 0) - (D ? b.crossAxis : 0);
        v < O ? v = O : v > A && (v = A);
      }
      return {
        [f]: m,
        [p]: v
      };
    }
  };
}, fi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: a,
        rects: r,
        platform: l,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...d
      } = at(e, t), c = await io(t, d), p = rt(a), f = Ut(a), m = pt(a) === "y", {
        width: v,
        height: g
      } = r.floating;
      let b, x;
      p === "top" || p === "bottom" ? (b = p, x = f === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = p, b = f === "end" ? "top" : "bottom");
      const k = g - c.top - c.bottom, B = v - c.left - c.right, D = ct(g - c[b], k), O = ct(v - c[x], B), A = !t.middlewareData.shift;
      let S = D, I = O;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (I = B), (n = t.middlewareData.shift) != null && n.enabled.y && (S = k), A && !f) {
        const T = Ie(c.left, 0), L = Ie(c.right, 0), R = Ie(c.top, 0), q = Ie(c.bottom, 0);
        m ? I = v - 2 * (T !== 0 || L !== 0 ? T + L : Ie(c.left, c.right)) : S = g - 2 * (R !== 0 || q !== 0 ? R + q : Ie(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: S
      });
      const F = await l.getDimensions(i.floating);
      return v !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function jo() {
  return typeof window < "u";
}
function Tt(e) {
  return qn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xe(e) {
  var t;
  return (t = (qn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qn(e) {
  return jo() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function je(e) {
  return jo() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function qe(e) {
  return jo() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function Ya(e) {
  return !jo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function go(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: a
  } = He(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(a);
}
function mi(e) {
  return ["table", "td", "th"].includes(Tt(e));
}
function Ho(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Yn(e) {
  const t = Xn(), o = je(e) ? He(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => o[n] ? o[n] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function vi(e) {
  let t = ft(e);
  for (; qe(t) && !Kt(t); ) {
    if (Yn(t))
      return t;
    if (Ho(t))
      return null;
    t = ft(t);
  }
  return null;
}
function Xn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Kt(e) {
  return ["html", "body", "#document"].includes(Tt(e));
}
function He(e) {
  return Me(e).getComputedStyle(e);
}
function Wo(e) {
  return je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Tt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ya(e) && e.host || // Fallback.
    Xe(e)
  );
  return Ya(t) ? t.host : t;
}
function Wr(e) {
  const t = ft(e);
  return Kt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : qe(t) && go(t) ? t : Wr(t);
}
function uo(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const a = Wr(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Me(a);
  if (r) {
    const i = On(l);
    return t.concat(l, l.visualViewport || [], go(a) ? a : [], i && o ? uo(i) : []);
  }
  return t.concat(a, uo(a, [], o));
}
function On(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ur(e) {
  const t = He(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = qe(e), r = a ? e.offsetWidth : o, l = a ? e.offsetHeight : n, i = Mo(o) !== r || Mo(n) !== l;
  return i && (o = r, n = l), {
    width: o,
    height: n,
    $: i
  };
}
function Zn(e) {
  return je(e) ? e : e.contextElement;
}
function Vt(e) {
  const t = Zn(e);
  if (!qe(t))
    return Ge(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: r
  } = Ur(t);
  let l = (r ? Mo(o.width) : o.width) / n, i = (r ? Mo(o.height) : o.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const gi = /* @__PURE__ */ Ge(0);
function Gr(e) {
  const t = Me(e);
  return !Xn() || !t.visualViewport ? gi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function hi(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== Me(e) ? !1 : t;
}
function $t(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const a = e.getBoundingClientRect(), r = Zn(e);
  let l = Ge(1);
  t && (n ? je(n) && (l = Vt(n)) : l = Vt(e));
  const i = hi(r, o, n) ? Gr(r) : Ge(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const f = Me(r), m = n && je(n) ? Me(n) : n;
    let v = f, g = On(v);
    for (; g && n && m !== v; ) {
      const b = Vt(g), x = g.getBoundingClientRect(), k = He(g), B = x.left + (g.clientLeft + parseFloat(k.paddingLeft)) * b.x, D = x.top + (g.clientTop + parseFloat(k.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, p *= b.y, u += B, d += D, v = Me(g), g = On(v);
    }
  }
  return Fo({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function Jn(e, t) {
  const o = Wo(e).scrollLeft;
  return t ? t.left + o : $t(Xe(e)).left + o;
}
function qr(e, t, o) {
  o === void 0 && (o = !1);
  const n = e.getBoundingClientRect(), a = n.left + t.scrollLeft - (o ? 0 : (
    // RTL <body> scrollbar.
    Jn(e, n)
  )), r = n.top + t.scrollTop;
  return {
    x: a,
    y: r
  };
}
function yi(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: a
  } = e;
  const r = a === "fixed", l = Xe(n), i = t ? Ho(t.floating) : !1;
  if (n === l || i && r)
    return o;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ge(1);
  const c = Ge(0), p = qe(n);
  if ((p || !p && !r) && ((Tt(n) !== "body" || go(l)) && (u = Wo(n)), qe(n))) {
    const m = $t(n);
    d = Vt(n), c.x = m.x + n.clientLeft, c.y = m.y + n.clientTop;
  }
  const f = l && !p && !r ? qr(l, u, !0) : Ge(0);
  return {
    width: o.width * d.x,
    height: o.height * d.y,
    x: o.x * d.x - u.scrollLeft * d.x + c.x + f.x,
    y: o.y * d.y - u.scrollTop * d.y + c.y + f.y
  };
}
function bi(e) {
  return Array.from(e.getClientRects());
}
function wi(e) {
  const t = Xe(e), o = Wo(e), n = e.ownerDocument.body, a = Ie(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = Ie(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -o.scrollLeft + Jn(e);
  const i = -o.scrollTop;
  return He(n).direction === "rtl" && (l += Ie(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
function xi(e, t) {
  const o = Me(e), n = Xe(e), a = o.visualViewport;
  let r = n.clientWidth, l = n.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = Xn();
    (!d || d && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function _i(e, t) {
  const o = $t(e, !0, t === "fixed"), n = o.top + e.clientTop, a = o.left + e.clientLeft, r = qe(e) ? Vt(e) : Ge(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = n * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function Xa(e, t, o) {
  let n;
  if (t === "viewport")
    n = xi(e, o);
  else if (t === "document")
    n = wi(Xe(e));
  else if (je(t))
    n = _i(t, o);
  else {
    const a = Gr(e);
    n = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Fo(n);
}
function Yr(e, t) {
  const o = ft(e);
  return o === t || !je(o) || Kt(o) ? !1 : He(o).position === "fixed" || Yr(o, t);
}
function Ci(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = uo(e, [], !1).filter((i) => je(i) && Tt(i) !== "body"), a = null;
  const r = He(e).position === "fixed";
  let l = r ? ft(e) : e;
  for (; je(l) && !Kt(l); ) {
    const i = He(l), u = Yn(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || go(l) && !u && Yr(e, l)) ? n = n.filter((c) => c !== l) : a = i, l = ft(l);
  }
  return t.set(e, n), n;
}
function Bi(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: a
  } = e;
  const l = [...o === "clippingAncestors" ? Ho(t) ? [] : Ci(t, this._c) : [].concat(o), n], i = l[0], u = l.reduce((d, c) => {
    const p = Xa(t, c, a);
    return d.top = Ie(p.top, d.top), d.right = ct(p.right, d.right), d.bottom = ct(p.bottom, d.bottom), d.left = Ie(p.left, d.left), d;
  }, Xa(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function ki(e) {
  const {
    width: t,
    height: o
  } = Ur(e);
  return {
    width: t,
    height: o
  };
}
function $i(e, t, o) {
  const n = qe(t), a = Xe(t), r = o === "fixed", l = $t(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ge(0);
  if (n || !n && !r)
    if ((Tt(t) !== "body" || go(a)) && (i = Wo(t)), n) {
      const f = $t(t, !0, r, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else a && (u.x = Jn(a));
  const d = a && !n && !r ? qr(a, i) : Ge(0), c = l.left + i.scrollLeft - u.x - d.x, p = l.top + i.scrollTop - u.y - d.y;
  return {
    x: c,
    y: p,
    width: l.width,
    height: l.height
  };
}
function gn(e) {
  return He(e).position === "static";
}
function Za(e, t) {
  if (!qe(e) || He(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return Xe(e) === o && (o = o.ownerDocument.body), o;
}
function Xr(e, t) {
  const o = Me(e);
  if (Ho(e))
    return o;
  if (!qe(e)) {
    let a = ft(e);
    for (; a && !Kt(a); ) {
      if (je(a) && !gn(a))
        return a;
      a = ft(a);
    }
    return o;
  }
  let n = Za(e, t);
  for (; n && mi(n) && gn(n); )
    n = Za(n, t);
  return n && Kt(n) && gn(n) && !Yn(n) ? o : n || vi(e) || o;
}
const Si = async function(e) {
  const t = this.getOffsetParent || Xr, o = this.getDimensions, n = await o(e.floating);
  return {
    reference: $i(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Oi(e) {
  return He(e).direction === "rtl";
}
const Ti = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yi,
  getDocumentElement: Xe,
  getClippingRect: Bi,
  getOffsetParent: Xr,
  getElementRects: Si,
  getClientRects: bi,
  getDimensions: ki,
  getScale: Vt,
  isElement: je,
  isRTL: Oi
};
function Zr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Di(e, t) {
  let o = null, n;
  const a = Xe(e);
  function r() {
    var i;
    clearTimeout(n), (i = o) == null || i.disconnect(), o = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: f,
      height: m
    } = d;
    if (i || t(), !f || !m)
      return;
    const v = So(p), g = So(a.clientWidth - (c + f)), b = So(a.clientHeight - (p + m)), x = So(c), B = {
      rootMargin: -v + "px " + -g + "px " + -b + "px " + -x + "px",
      threshold: Ie(0, ct(1, u)) || 1
    };
    let D = !0;
    function O(A) {
      const S = A[0].intersectionRatio;
      if (S !== u) {
        if (!D)
          return l();
        S ? l(!1, S) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Zr(d, e.getBoundingClientRect()) && l(), D = !1;
    }
    try {
      o = new IntersectionObserver(O, {
        ...B,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(O, B);
    }
    o.observe(e);
  }
  return l(!0), r;
}
function Ei(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, d = Zn(e), c = a || r ? [...d ? uo(d) : [], ...uo(t)] : [];
  c.forEach((x) => {
    a && x.addEventListener("scroll", o, {
      passive: !0
    }), r && x.addEventListener("resize", o);
  });
  const p = d && i ? Di(d, o) : null;
  let f = -1, m = null;
  l && (m = new ResizeObserver((x) => {
    let [k] = x;
    k && k.target === d && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var B;
      (B = m) == null || B.observe(t);
    })), o();
  }), d && !u && m.observe(d), m.observe(t));
  let v, g = u ? $t(e) : null;
  u && b();
  function b() {
    const x = $t(e);
    g && !Zr(g, x) && o(), g = x, v = requestAnimationFrame(b);
  }
  return o(), () => {
    var x;
    c.forEach((k) => {
      a && k.removeEventListener("scroll", o), r && k.removeEventListener("resize", o);
    }), p == null || p(), (x = m) == null || x.disconnect(), m = null, u && cancelAnimationFrame(v);
  };
}
const Pi = di, Ai = ci, Ja = li, Ii = fi, Mi = ii, Ri = si, Fi = pi, Li = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: Ti,
    ...o
  }, r = {
    ...a.platform,
    _c: n
  };
  return ri(e, t, {
    ...a,
    platform: r
  });
};
function Vi(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Tn(e) {
  if (Vi(e)) {
    const t = e.$el;
    return qn(t) && Tt(t) === "#comment" ? null : t;
  }
  return e;
}
function Lt(e) {
  return typeof e == "function" ? e() : s(e);
}
function zi(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = Tn(Lt(e.element));
      return o == null ? {} : Ri({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Jr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qa(e, t) {
  const o = Jr(e);
  return Math.round(t * o) / o;
}
function Ni(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, a = $(() => {
    var S;
    return (S = Lt(o.open)) != null ? S : !0;
  }), r = $(() => Lt(o.middleware)), l = $(() => {
    var S;
    return (S = Lt(o.placement)) != null ? S : "bottom";
  }), i = $(() => {
    var S;
    return (S = Lt(o.strategy)) != null ? S : "absolute";
  }), u = $(() => {
    var S;
    return (S = Lt(o.transform)) != null ? S : !0;
  }), d = $(() => Tn(e.value)), c = $(() => Tn(t.value)), p = E(0), f = E(0), m = E(i.value), v = E(l.value), g = Io({}), b = E(!1), x = $(() => {
    const S = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return S;
    const I = Qa(c.value, p.value), F = Qa(c.value, f.value);
    return u.value ? {
      ...S,
      transform: "translate(" + I + "px, " + F + "px)",
      ...Jr(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: I + "px",
      top: F + "px"
    };
  });
  let k;
  function B() {
    if (d.value == null || c.value == null)
      return;
    const S = a.value;
    Li(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      p.value = I.x, f.value = I.y, m.value = I.strategy, v.value = I.placement, g.value = I.middlewareData, b.value = S !== !1;
    });
  }
  function D() {
    typeof k == "function" && (k(), k = void 0);
  }
  function O() {
    if (D(), n === void 0) {
      B();
      return;
    }
    if (d.value != null && c.value != null) {
      k = n(d.value, c.value, B);
      return;
    }
  }
  function A() {
    a.value || (b.value = !1);
  }
  return ee([r, l, i, a], B, {
    flush: "sync"
  }), ee([d, c], O, {
    flush: "sync"
  }), ee(a, A, {
    flush: "sync"
  }), Br() && kr(D), {
    x: Rt(p),
    y: Rt(f),
    strategy: Rt(m),
    placement: Rt(v),
    middlewareData: Rt(g),
    isPositioned: Rt(b),
    floatingStyles: x,
    update: B
  };
}
function ne(e, t) {
  const o = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(o);
  return [(a) => {
    const r = zn(n, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Nn(n, a), a)];
}
function Qn(e, t, o) {
  const n = o.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function Lo(e, t = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY) {
  return Math.min(o, Math.max(t, e));
}
function Ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ji = function e(t, o) {
  if (t === o) return !0;
  if (t && o && typeof t == "object" && typeof o == "object") {
    if (t.constructor !== o.constructor) return !1;
    var n, a, r;
    if (Array.isArray(t)) {
      if (n = t.length, n != o.length) return !1;
      for (a = n; a-- !== 0; )
        if (!e(t[a], o[a])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === o.source && t.flags === o.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === o.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === o.toString();
    if (r = Object.keys(t), n = r.length, n !== Object.keys(o).length) return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(o, r[a])) return !1;
    for (a = n; a-- !== 0; ) {
      var l = r[a];
      if (!e(t[l], o[l])) return !1;
    }
    return !0;
  }
  return t !== t && o !== o;
};
const xt = /* @__PURE__ */ Ki(ji);
function zt(e) {
  return e == null;
}
function Hi(e, t) {
  var o;
  const n = Io();
  return xe(() => {
    n.value = e();
  }, {
    ...t,
    flush: (o = void 0) != null ? o : "sync"
  }), Kn(n);
}
function Dt(e) {
  return Br() ? (kr(e), !0) : !1;
}
function Wi() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const n = () => t(o);
      return Dt(n), {
        off: n
      };
    },
    off: t,
    trigger: (...o) => Promise.all(Array.from(e).map((n) => n(...o)))
  };
}
function Ui(e) {
  let t = !1, o;
  const n = Pr(!0);
  return (...a) => (t || (o = n.run(() => e(...a)), t = !0), o);
}
function Qr(e) {
  let t = 0, o, n;
  const a = () => {
    t -= 1, n && t <= 0 && (n.stop(), o = void 0, n = void 0);
  };
  return (...r) => (t += 1, o || (n = Pr(!0), o = n.run(() => e(...r))), Dt(a), o);
}
function nt(e) {
  return typeof e == "function" ? e() : s(e);
}
const Ze = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gi = (e) => typeof e < "u", qi = (e) => e != null, Yi = Object.prototype.toString, Xi = (e) => Yi.call(e) === "[object Object]", es = () => {
}, er = /* @__PURE__ */ Zi();
function Zi() {
  var e, t;
  return Ze && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ji(e) {
  return mt();
}
function ts(e, t = 1e4) {
  return Dl((o, n) => {
    let a = nt(e), r;
    const l = () => setTimeout(() => {
      a = nt(e), n();
    }, nt(t));
    return Dt(() => {
      clearTimeout(r);
    }), {
      get() {
        return o(), a;
      },
      set(i) {
        a = i, n(), clearTimeout(r), r = l();
      }
    };
  });
}
function Qi(e, t) {
  Ji() && Ko(e, t);
}
function ea(e, t, o = {}) {
  const {
    immediate: n = !0
  } = o, a = E(!1);
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
    }, nt(t));
  }
  return n && (a.value = !0, Ze && u()), Dt(i), {
    isPending: Kn(a),
    start: u,
    stop: i
  };
}
function eu(e = 1e3, t = {}) {
  const {
    controls: o = !1,
    callback: n
  } = t, a = ea(
    n ?? es,
    e,
    t
  ), r = $(() => !a.isPending.value);
  return o ? {
    ready: r,
    ...a
  } : r;
}
function Re(e) {
  var t;
  const o = nt(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const ho = Ze ? window : void 0;
function jt(...e) {
  let t, o, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, a] = e, t = ho) : [t, o, n, a] = e, !t)
    return es;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), u = ee(
    () => [Re(t), nt(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const f = Xi(p) ? { ...p } : p;
      r.push(
        ...o.flatMap((m) => n.map((v) => i(c, m, v, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Dt(d), d;
}
function tu(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ta(...e) {
  let t, o, n = {};
  e.length === 3 ? (t = e[0], o = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], n = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: a = ho,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = n, u = tu(t);
  return jt(a, r, (d) => {
    d.repeat && nt(i) || u(d) && o(d);
  }, l);
}
function oa() {
  const e = E(!1), t = mt();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function ou(e) {
  const t = oa();
  return $(() => (t.value, !!e()));
}
function nu(e, t, o = {}) {
  const { window: n = ho, ...a } = o;
  let r;
  const l = ou(() => n && "MutationObserver" in n), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = $(() => {
    const f = nt(e), m = (Array.isArray(f) ? f : [f]).map(Re).filter(qi);
    return new Set(m);
  }), d = ee(
    () => u.value,
    (f) => {
      i(), l.value && f.size && (r = new MutationObserver(t), f.forEach((m) => r.observe(m, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return Dt(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function os(e, t = {}) {
  const {
    immediate: o = !0,
    fpsLimit: n = void 0,
    window: a = ho
  } = t, r = E(!1), l = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(f) {
    if (!r.value || !a)
      return;
    i || (i = f);
    const m = f - i;
    if (l && m < l) {
      u = a.requestAnimationFrame(d);
      return;
    }
    i = f, e({ delta: m, timestamp: f }), u = a.requestAnimationFrame(d);
  }
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return o && c(), Dt(p), {
    isActive: Kn(r),
    pause: p,
    resume: c
  };
}
function au(e) {
  return JSON.parse(JSON.stringify(e));
}
function ge(e, t, o, n = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = n, m = mt(), v = o || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (B) => i ? typeof i == "function" ? i(B) : au(B) : B, x = () => Gi(e[t]) ? b(e[t]) : p, k = (B) => {
    f ? f(B) && v(g, B) : v(g, B);
  };
  if (u) {
    const B = x(), D = E(B);
    let O = !1;
    return ee(
      () => e[t],
      (A) => {
        O || (O = !0, D.value = b(A), re(() => O = !1));
      }
    ), ee(
      D,
      (A) => {
        !O && (A !== e[t] || c) && k(A);
      },
      { deep: c }
    ), D;
  } else
    return $({
      get() {
        return x();
      },
      set(B) {
        k(B);
      }
    });
}
function Uo(e) {
  return e ? e.flatMap((t) => t.type === ke ? Uo(t.children) : [t]) : [];
}
function Ce() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const ru = ["INPUT", "TEXTAREA"];
function ns(e, t, o, n = {}) {
  if (!t || n.enableIgnoredElement && ru.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = n, [p, f, m, v, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], x = m || v, k = p || f;
  if (!g && !b && (!x && !k || a === "vertical" && k || a === "horizontal" && x))
    return null;
  const B = o ? Array.from(o.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let D = null;
  return k || x ? D = as(B, t, {
    goForward: x ? v : u === "ltr" ? p : f,
    loop: i
  }) : g ? D = B.at(0) || null : b && (D = B.at(-1) || null), c && (D == null || D.focus()), D;
}
function as(e, t, o, n = e.length) {
  if (--n === 0)
    return null;
  const a = e.indexOf(t), r = o.goForward ? a + 1 : a - 1;
  if (!o.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? as(
    e,
    i,
    o,
    n
  ) : i : null;
}
function hn(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Dn(e, t, o = ".", n) {
  if (!hn(t))
    return Dn(e, {}, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : hn(l) && hn(a[r]) ? a[r] = Dn(
      l,
      a[r],
      (o ? `${o}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function su(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((o, n) => Dn(o, n, ""), {})
  );
}
const lu = su(), [Go, kg] = ne("ConfigProvider");
let iu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", uu = (e = 21) => {
  let t = "", o = e;
  for (; o--; )
    t += iu[Math.random() * 64 | 0];
  return t;
};
const du = Qr(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), o = $(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), n = Go({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", er && (a == null || a()), t.value = void 0;
  };
  return ee(o, (l, i) => {
    var u;
    if (!Ze)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? lu({
      padding: n.scrollBody.value.padding === !0 ? d : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? d : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), er && (a = jt(
      document,
      "touchmove",
      (f) => cu(f),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function yo(e) {
  const t = uu(6), o = du();
  o.value.set(t, e ?? !1);
  const n = $({
    get: () => o.value.get(t) ?? !1,
    set: (a) => o.value.set(t, a)
  });
  return Qi(() => {
    o.value.delete(t);
  }), n;
}
function rs(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const o = e.parentNode;
    return !o || o.tagName === "BODY" ? !1 : rs(o);
  }
}
function cu(e) {
  const t = e || window.event, o = t.target;
  return o instanceof Element && rs(o) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const pu = "data-radix-vue-collection-item";
function Gt(e, t = pu) {
  const o = Symbol();
  return { createCollection: (n) => {
    const a = E([]);
    function r() {
      const l = Re(n);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Cl(() => {
      a.value = [];
    }), le(r), Bl(r), ee(() => n == null ? void 0 : n.value, r, { immediate: !0 }), Nn(o, a), a;
  }, injectCollection: () => zn(o, E([])) };
}
function vt(e) {
  const t = Go({
    dir: E("ltr")
  });
  return $(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function gt(e) {
  const t = mt(), o = t == null ? void 0 : t.type.emits, n = {};
  return o != null && o.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), o == null || o.forEach((a) => {
    n[_l($r(a))] = (...r) => e(a, ...r);
  }), n;
}
let yn = 0;
function na() {
  xe((e) => {
    if (!Ze)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? tr()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? tr()
    ), yn++, e(() => {
      yn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), yn--;
    });
  });
}
function tr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function qo(e) {
  return $(() => {
    var t;
    return nt(e) ? !!((t = Re(e)) != null && t.closest("form")) : !0;
  });
}
function Be(e) {
  const t = mt(), o = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), n = bl(e);
  return $(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[$r(l)] = r[l];
    }), Object.keys({ ...o, ...a }).reduce((l, i) => (n.value[i] !== void 0 && (l[i] = n.value[i]), l), {});
  });
}
function Y(e, t) {
  const o = Be(e), n = t ? gt(t) : {};
  return $(() => ({
    ...o.value,
    ...n
  }));
}
function M() {
  const e = mt(), t = E(), o = $(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Re(t);
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
  function r(l) {
    t.value = l, !(l instanceof Element || !l) && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l.$el
    }), e.exposed = a);
  }
  return { forwardRef: r, currentRef: t, currentElement: o };
}
function fu(e, t) {
  const o = ts(!1, 300), n = E(null), a = Wi();
  function r() {
    n.value = null, o.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = mu(c, d.getBoundingClientRect()), f = vu(c, p), m = gu(u.getBoundingClientRect()), v = yu([...f, ...m]);
    n.value = v, o.value = !0;
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
    if (n.value) {
      const d = (c) => {
        var p, f;
        if (!n.value)
          return;
        const m = c.target, v = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(m)) || ((f = t.value) == null ? void 0 : f.contains(m)), b = !hu(v, n.value), x = !!m.closest("[data-grace-area-trigger]");
        g ? r() : (b || x) && (r(), a.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: o,
    onPointerExit: a.on
  };
}
function mu(e, t) {
  const o = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), a = Math.abs(t.right - e.x), r = Math.abs(t.left - e.x);
  switch (Math.min(o, n, a, r)) {
    case r:
      return "left";
    case a:
      return "right";
    case o:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function vu(e, t, o = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - o, y: e.y + o },
        { x: e.x + o, y: e.y + o }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - o, y: e.y - o },
        { x: e.x + o, y: e.y - o }
      );
      break;
    case "left":
      n.push(
        { x: e.x + o, y: e.y - o },
        { x: e.x + o, y: e.y + o }
      );
      break;
    case "right":
      n.push(
        { x: e.x - o, y: e.y - o },
        { x: e.x - o, y: e.y + o }
      );
      break;
  }
  return n;
}
function gu(e) {
  const { top: t, right: o, bottom: n, left: a } = e;
  return [
    { x: a, y: t },
    { x: o, y: t },
    { x: o, y: n },
    { x: a, y: n }
  ];
}
function hu(e, t) {
  const { x: o, y: n } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > n != c > n && o < (d - i) * (n - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function yu(e) {
  const t = e.slice();
  return t.sort((o, n) => o.x < n.x ? -1 : o.x > n.x ? 1 : o.y < n.y ? -1 : o.y > n.y ? 1 : 0), bu(t);
}
function bu(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], l = t[t.length - 2];
      if ((r.x - l.x) * (a.y - l.y) >= (r.y - l.y) * (a.x - l.x))
        t.pop();
      else break;
    }
    t.push(a);
  }
  t.pop();
  const o = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e[n];
    for (; o.length >= 2; ) {
      const r = o[o.length - 1], l = o[o.length - 2];
      if ((r.x - l.x) * (a.y - l.y) >= (r.y - l.y) * (a.x - l.x))
        o.pop();
      else break;
    }
    o.push(a);
  }
  return o.pop(), t.length === 1 && o.length === 1 && t[0].x === o[0].x && t[0].y === o[0].y ? t : t.concat(o);
}
var wu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ft = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), To = {}, bn = 0, ss = function(e) {
  return e && (e.host || ss(e.parentNode));
}, xu = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var n = ss(o);
    return n && e.contains(n) ? n : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, _u = function(e, t, o, n) {
  var a = xu(t, Array.isArray(e) ? e : [e]);
  To[o] || (To[o] = /* @__PURE__ */ new WeakMap());
  var r = To[o], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(n), v = m !== null && m !== "false", g = (Ft.get(f) || 0) + 1, b = (r.get(f) || 0) + 1;
          Ft.set(f, g), r.set(f, b), l.push(f), g === 1 && v && Oo.set(f, !0), b === 1 && f.setAttribute(o, "true"), v || f.setAttribute(n, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", f, x);
        }
    });
  };
  return c(t), i.clear(), bn++, function() {
    l.forEach(function(p) {
      var f = Ft.get(p) - 1, m = r.get(p) - 1;
      Ft.set(p, f), r.set(p, m), f || (Oo.has(p) || p.removeAttribute(n), Oo.delete(p)), m || p.removeAttribute(o);
    }), bn--, bn || (Ft = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), To = {});
  };
}, Cu = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = wu(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), _u(n, a, o, "aria-hidden")) : function() {
    return null;
  };
};
function bo(e) {
  let t;
  ee(() => Re(e), (o) => {
    o ? t = Cu(o) : t && t();
  }), Ye(() => {
    t && t();
  });
}
let Bu = 0;
function _e(e, t = "radix") {
  const o = Go({ useId: void 0 });
  return Ka.useId ? `${t}-${Ka.useId()}` : o.useId ? `${t}-${o.useId()}` : `${t}-${++Bu}`;
}
function ls(e) {
  const t = E(), o = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = $(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return le(() => {
    const a = Re(e);
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
    width: o,
    height: n
  };
}
function ku(e, t) {
  const o = E(e);
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
const $u = "data-item-text";
function aa(e) {
  const t = ts("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, n) => {
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + o;
      const a = (e == null ? void 0 : e.value) ?? n, r = Ce(), l = a.map((p) => {
        var f;
        return {
          ref: p,
          textValue: ((f = (p.querySelector(`[${$u}]`) ?? p).textContent) == null ? void 0 : f.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Ou(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Su(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
function Ou(e, t, o) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = o ? e.indexOf(o) : -1;
  let r = Su(e, Math.max(a, 0));
  n.length === 1 && (r = r.filter((i) => i !== o));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== o ? l : void 0;
}
const ra = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      var n, a;
      if (!o.default)
        return null;
      const r = Uo(o.default()), l = r.findIndex((c) => c.type !== Dr);
      if (l === -1)
        return r;
      const i = r[l];
      (n = i.props) == null || delete n.ref;
      const u = i.props ? P(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = kl(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
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
  setup(e, { attrs: t, slots: o }) {
    const n = e.asChild ? "template" : e.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Ct(n, t) : n !== "template" ? () => Ct(e.as, t, { default: o.default }) : () => Ct(ra, t, { default: o.default });
  }
});
function is() {
  const e = E(), t = $(() => {
    var o, n;
    return ["#text", "#comment"].includes((o = e.value) == null ? void 0 : o.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Re(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [us, Tu] = ne("CollapsibleRoot"), Du = /* @__PURE__ */ w({
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
    const n = e, a = ge(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = ge(n, "disabled");
    return Tu({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), M(), (l, i) => (h(), C(s(K), {
      as: l.as,
      "as-child": n.asChild,
      "data-state": s(a) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: y(() => [
        _(l.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Eu = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const o = us();
    return (n, a) => {
      var r, l;
      return h(), C(s(K), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": s(o).contentId,
        "aria-expanded": s(o).open.value,
        "data-state": s(o).open.value ? "open" : "closed",
        "data-disabled": (r = s(o).disabled) != null && r.value ? "" : void 0,
        disabled: (l = s(o).disabled) == null ? void 0 : l.value,
        onClick: s(o).onOpenToggle
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Pu(e, t) {
  var o;
  const n = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((o = t.value) == null ? void 0 : o.ownerDocument.defaultView) ?? ho, { state: d, dispatch: c } = ku(l, {
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
    var x;
    if (Ze) {
      const k = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (x = t.value) == null || x.dispatchEvent(k);
    }
  };
  ee(
    e,
    async (b, x) => {
      var k;
      const B = x !== b;
      if (await re(), B) {
        const D = a.value, O = Do(t.value);
        b ? (c("MOUNT"), p("enter"), O === "none" && p("after-enter")) : O === "none" || ((k = n.value) == null ? void 0 : k.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : x && D !== O ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (b) => {
    const x = Do(t.value), k = x.includes(
      b.animationName
    ), B = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && k && (p(`after-${B}`), c("ANIMATION_END"), !r.value)) {
      const D = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var O;
        ((O = t.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = D);
      });
    }
    b.target === t.value && x === "none" && c("ANIMATION_END");
  }, m = (b) => {
    b.target === t.value && (a.value = Do(t.value));
  }, v = ee(
    t,
    (b, x) => {
      b ? (n.value = getComputedStyle(b), b.addEventListener("animationstart", m), b.addEventListener("animationcancel", f), b.addEventListener("animationend", f)) : (c("ANIMATION_END"), u == null || u.clearTimeout(i), x == null || x.removeEventListener("animationstart", m), x == null || x.removeEventListener("animationcancel", f), x == null || x.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), g = ee(d, () => {
    const b = Do(t.value);
    a.value = d.value === "mounted" ? b : "none";
  });
  return Ye(() => {
    v(), g();
  }), {
    isPresent: $(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Do(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Fe = w({
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
    const { present: a, forceMount: r } = fe(e), l = E(), { isPresent: i } = Pu(a, l);
    o({ present: i });
    let u = t.default({ present: i });
    u = Uo(u || []);
    const d = mt();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const c = (n = d == null ? void 0 : d.parent) != null && n.type.name ? `<${d.parent.type.name} />` : "component";
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
    return () => r.value || a.value || i.value ? Ct(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Re(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), Au = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = us();
    o.contentId || (o.contentId = _e(void 0, "radix-vue-collapsible-content"));
    const n = E(), { forwardRef: a, currentElement: r } = M(), l = E(0), i = E(0), u = $(() => o.open.value), d = E(u.value), c = E();
    return ee(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
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
        const f = p.getBoundingClientRect();
        i.value = f.height, l.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), le(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, f) => (h(), C(s(Fe), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || s(o).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var m, v;
        return [
          V(s(K), P(p.$attrs, {
            id: s(o).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
            "data-state": s(o).open.value ? "open" : "closed",
            "data-disabled": (m = s(o).disabled) != null && m.value ? "" : void 0,
            hidden: !((v = n.value) != null && v.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: y(() => {
              var g;
              return [
                (g = n.value) != null && g.present ? _(p.$slots, "default", { key: 0 }) : pe("", !0)
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
function ds({ type: e, defaultValue: t, modelValue: o }) {
  const n = o || t;
  if (zt(e) && zt(o) && zt(t))
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
    const r = Array.isArray(o) || Array.isArray(t), l = o !== void 0 ? "modelValue" : "defaultValue", i = l === "modelValue" ? typeof o : typeof t;
    if (e === "single" && r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "multiple";
    if (e === "multiple" && !r)
      return console.error(`Invalid prop \`${l}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${l} prop.`), "single";
  }
  return a ? Array.isArray(n) ? "multiple" : "single" : e;
}
function Iu({ type: e, defaultValue: t, modelValue: o }) {
  return e || ds({ type: e, defaultValue: t, modelValue: o });
}
function Mu({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Ru(e, t) {
  const o = E(Iu(e)), n = ge(e, "modelValue", t, {
    defaultValue: Mu(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  ee(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = ds(e);
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
        const u = i.findIndex((d) => d === l);
        i.splice(u, 1);
      } else
        i.push(l);
      n.value = i;
    }
  }
  const r = $(() => o.value === "single");
  return {
    modelValue: n,
    type: o,
    changeModelValue: a,
    isSingle: r
  };
}
const [Yo, Fu] = ne("AccordionRoot"), Lu = /* @__PURE__ */ w({
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
    const o = e, n = t, { dir: a, disabled: r } = fe(o), l = vt(a), { modelValue: i, changeModelValue: u, isSingle: d } = Ru(o, n), { forwardRef: c, currentElement: p } = M();
    return Fu({
      disabled: r,
      direction: l,
      orientation: o.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: o.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, m) => (h(), C(s(K), {
      ref: s(c),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: y(() => [
        _(f.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [sa, Vu] = ne("AccordionItem"), zu = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const o = e, n = Yo(), a = $(
      () => n.isSingle.value ? o.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(o.value)
    ), r = $(() => n.disabled.value || o.disabled), l = $(() => r.value ? "" : void 0), i = $(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = M();
    Vu({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: $(() => o.value)
    });
    function c(p) {
      var f;
      const m = p.target;
      if (Array.from(((f = n.parentElement.value) == null ? void 0 : f.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === m) === -1)
        return null;
      ns(
        p,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (p, f) => (h(), C(s(Du), {
      "data-orientation": s(n).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: o.as,
      "as-child": o.asChild,
      onKeydown: _t(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Nu = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Yo(), n = sa();
    return M(), (a, r) => (h(), C(s(Au), {
      role: "region",
      hidden: !s(n).open.value,
      "as-child": t.asChild,
      "force-mount": t.forceMount,
      "aria-labelledby": s(n).triggerId,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value,
      "data-orientation": s(o).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), Ku = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, o = Yo(), n = sa();
    return M(), (a, r) => (h(), C(s(K), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": s(o).orientation,
      "data-state": s(n).dataState.value,
      "data-disabled": s(n).dataDisabled.value
    }, {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), ju = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Yo(), n = sa();
    n.triggerId || (n.triggerId = _e(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = o.isSingle.value && n.open.value && !o.collapsible;
      n.disabled.value || r || o.changeModelValue(n.value.value);
    }
    return (r, l) => (h(), C(s(Eu), {
      id: s(n).triggerId,
      ref: s(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": s(n).disabled.value || void 0,
      "aria-expanded": s(n).open.value || !1,
      "data-disabled": s(n).dataDisabled.value,
      "data-orientation": s(o).orientation,
      "data-state": s(n).dataState.value,
      disabled: s(n).disabled.value,
      onClick: a
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [Je, Hu] = ne("DialogRoot"), la = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = ge(o, "open", t, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), a = E(), r = E(), { modal: l } = fe(o);
    return Hu({
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
      contentElement: r
    }), (i, u) => _(i.$slots, "default", { open: s(n) });
  }
}), ia = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Je(), { forwardRef: n, currentElement: a } = M();
    return o.contentId || (o.contentId = _e(void 0, "radix-vue-dialog-content")), le(() => {
      o.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(K), P(t, {
      ref: s(n),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(o).open.value || !1,
      "aria-controls": s(o).open.value ? s(o).contentId : void 0,
      "data-state": s(o).open.value ? "open" : "closed",
      onClick: s(o).onOpenToggle
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), qt = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = oa();
    return (o, n) => s(t) || o.forceMount ? (h(), C(No, {
      key: 0,
      to: o.to,
      disabled: o.disabled
    }, [
      _(o.$slots, "default")
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), ua = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(qt), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wu = "dismissableLayer.pointerDownOutside", Uu = "dismissableLayer.focusOutside";
function cs(e, t) {
  const o = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(o && n === o || a.indexOf(n) < a.indexOf(o));
}
function Gu(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return xe((l) => {
    if (!Ze)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (cs(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            Qn(
              Wu,
              e,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = p, n.addEventListener("click", r.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", r.value);
        a.value = !1;
      }
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", i), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => a.value = !0
  };
}
function qu(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return xe((r) => {
    if (!Ze)
      return;
    const l = async (i) => {
      t != null && t.value && (await re(), !(!t.value || cs(t.value, i.target)) && i.target && !a.value && Qn(
        Uu,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", l), r(() => n.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => a.value = !0,
    onBlurCapture: () => a.value = !1
  };
}
const Ve = Tr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yt = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: r } = M(), l = $(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = $(() => Ve.layersRoot), u = $(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = $(() => Ve.layersWithOutsidePointerEventsDisabled.size > 0), c = $(() => {
      const v = Array.from(i.value), [g] = [...Ve.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), p = Gu(async (v) => {
      const g = [...Ve.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || g || (n("pointerDownOutside", v), n("interactOutside", v), await re(), v.defaultPrevented || n("dismiss"));
    }, r), f = qu((v) => {
      [...Ve.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (n("focusOutside", v), n("interactOutside", v), v.defaultPrevented || n("dismiss"));
    }, r);
    ta("Escape", (v) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", v), v.defaultPrevented || n("dismiss"));
    });
    let m;
    return xe((v) => {
      r.value && (o.disableOutsidePointerEvents && (Ve.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ve.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        o.disableOutsidePointerEvents && Ve.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), xe((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), Ve.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (h(), C(s(K), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Ot({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Yu = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = M();
    return le(() => {
      Ve.branches.add(n.value);
    }), Ye(() => {
      Ve.branches.delete(n.value);
    }), (a, r) => (h(), C(s(K), P({ ref: s(o) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wn = "focusScope.autoFocusOnMount", xn = "focusScope.autoFocusOnUnmount", or = { bubbles: !1, cancelable: !0 };
function Ao(e, { select: t = !1 } = {}) {
  const o = Ce();
  for (const n of e)
    if (dt(n, { select: t }), Ce() !== o)
      return !0;
}
function Xu(e) {
  const t = da(e), o = nr(t, e), n = nr(t.reverse(), e);
  return [o, n];
}
function da(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function nr(e, t) {
  for (const o of e)
    if (!Zu(o, { upTo: t }))
      return o;
}
function Zu(e, { upTo: t }) {
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
function Ju(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function dt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = Ce();
    e.focus({ preventScroll: !0 }), e !== o && Ju(e) && t && e.select();
  }
}
const Qu = Ui(() => E([]));
function ed() {
  const e = Qu();
  return {
    add(t) {
      const o = e.value[0];
      t !== o && (o == null || o.pause()), e.value = ar(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var o;
      e.value = ar(e.value, t), (o = e.value[0]) == null || o.resume();
    }
  };
}
function ar(e, t) {
  const o = [...e], n = o.indexOf(t);
  return n !== -1 && o.splice(n, 1), o;
}
function td(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Xo = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, { currentRef: a, currentElement: r } = M(), l = E(null), i = ed(), u = Tr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!Ze)
        return;
      const p = r.value;
      if (!o.trapped)
        return;
      function f(b) {
        if (u.paused || !p)
          return;
        const x = b.target;
        p.contains(x) ? l.value = x : dt(l.value, { select: !0 });
      }
      function m(b) {
        if (u.paused || !p)
          return;
        const x = b.relatedTarget;
        x !== null && (p.contains(x) || dt(l.value, { select: !0 }));
      }
      function v(b) {
        p.contains(l.value) || dt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), xe(async (c) => {
      const p = r.value;
      if (await re(), !p)
        return;
      i.add(u);
      const f = Ce();
      if (!p.contains(f)) {
        const m = new CustomEvent(wn, or);
        p.addEventListener(wn, (v) => n("mountAutoFocus", v)), p.dispatchEvent(m), m.defaultPrevented || (Ao(td(da(p)), {
          select: !0
        }), Ce() === f && dt(p));
      }
      c(() => {
        p.removeEventListener(wn, (g) => n("mountAutoFocus", g));
        const m = new CustomEvent(xn, or), v = (g) => {
          n("unmountAutoFocus", g);
        };
        p.addEventListener(xn, v), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || dt(f ?? document.body, { select: !0 }), p.removeEventListener(xn, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!o.loop && !o.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = Ce();
      if (p && f) {
        const m = c.currentTarget, [v, g] = Xu(m);
        v && g ? !c.shiftKey && f === g ? (c.preventDefault(), o.loop && dt(v, { select: !0 })) : c.shiftKey && f === v && (c.preventDefault(), o.loop && dt(g, { select: !0 })) : f === m && c.preventDefault();
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
}), od = "menu.itemSelect", En = ["Enter", " "], nd = ["ArrowDown", "PageUp", "Home"], ps = ["ArrowUp", "PageDown", "End"], ad = [...nd, ...ps], rd = {
  ltr: [...En, "ArrowRight"],
  rtl: [...En, "ArrowLeft"]
}, sd = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function ca(e) {
  return e ? "open" : "closed";
}
function Vo(e) {
  return e === "indeterminate";
}
function pa(e) {
  return Vo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Pn(e) {
  const t = Ce();
  for (const o of e)
    if (o === t || (o.focus(), Ce() !== t))
      return;
}
function ld(e, t) {
  const { x: o, y: n } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > n != c > n && o < (d - i) * (n - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function id(e, t) {
  if (!t)
    return !1;
  const o = { x: e.clientX, y: e.clientY };
  return ld(o, t);
}
function co(e) {
  return e.pointerType === "mouse";
}
const ud = "DialogTitle", dd = "DialogContent";
function cd({
  titleName: e = ud,
  contentName: t = dd,
  componentLink: o = "dialog.html#title",
  titleId: n,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${o}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  le(() => {
    var u;
    document.getElementById(n) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const fs = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Je(), { forwardRef: r, currentElement: l } = M();
    return a.titleId || (a.titleId = _e(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = _e(void 0, "radix-vue-dialog-description")), le(() => {
      a.contentElement = l, Ce() !== document.body && (a.triggerElement.value = Ce());
    }), process.env.NODE_ENV !== "production" && cd({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(Xo), {
      "as-child": "",
      loop: "",
      trapped: o.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: y(() => [
        V(s(Yt), P({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(ca)(s(a).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
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
}), pd = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Je(), r = gt(n), { forwardRef: l, currentElement: i } = M();
    return bo(i), (u, d) => (h(), C(fs, P({ ...o, ...s(r) }, {
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
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), fd = /* @__PURE__ */ w({
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
    const o = e, n = gt(t);
    M();
    const a = Je(), r = E(!1), l = E(!1);
    return (i, u) => (h(), C(fs, P({ ...o, ...s(n) }, {
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
}), Zo = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Je(), r = gt(n), { forwardRef: l } = M();
    return (i, u) => (h(), C(s(Fe), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(pd, P({
          key: 0,
          ref: s(l)
        }, { ...o, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(fd, P({
          key: 1,
          ref: s(l)
        }, { ...o, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), md = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Je();
    return yo(!0), M(), (o, n) => (h(), C(s(K), {
      as: o.as,
      "as-child": o.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Jo = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Je(), { forwardRef: o } = M();
    return (n, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(Fe), {
        key: 0,
        present: n.forceMount || s(t).open.value
      }, {
        default: y(() => [
          V(md, P(n.$attrs, {
            ref: s(o),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: y(() => [
              _(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : pe("", !0);
    };
  }
}), Et = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const o = Je();
    return (n, a) => (h(), C(s(K), P(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(o).onOpenChange(!1))
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), fa = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, o = Je();
    return M(), (n, a) => (h(), C(s(K), P(t, {
      id: s(o).titleId
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ma = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    M();
    const o = Je();
    return (n, a) => (h(), C(s(K), P(t, {
      id: s(o).descriptionId
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), vd = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Y(e, t);
    return M(), (n, a) => (h(), C(s(la), P(s(o), { modal: !0 }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gd = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(ia), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hd = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(qt), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [yd, bd] = ne("AlertDialogContent"), wd = /* @__PURE__ */ w({
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
    const o = e, n = gt(t);
    M();
    const a = E();
    return bd({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(Zo), P({ ...o, ...s(n) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = $e(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = $e(() => {
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
}), xd = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(Jo), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _d = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = yd(), { forwardRef: n, currentElement: a } = M();
    return le(() => {
      o.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(Et), P(t, { ref: s(n) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cd = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(fa), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bd = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(ma), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kd = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(Et), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ms, $d] = ne("AvatarRoot"), Sd = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), $d({
      imageLoadingStatus: E("loading")
    }), (t, o) => (h(), C(s(K), {
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
function Od(e, t) {
  const o = E("idle"), n = E(!1), a = (r) => () => {
    n.value && (o.value = r);
  };
  return le(() => {
    n.value = !0, ee([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        o.value = "error";
      else {
        const i = new window.Image();
        o.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), Ye(() => {
    n.value = !1;
  }), o;
}
const Td = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const o = e, n = t, { src: a, referrerPolicy: r } = fe(o);
    M();
    const l = ms(), i = Od(a, r);
    return ee(
      i,
      (u) => {
        n("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => Wt((h(), C(s(K), {
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
      [Vn, s(i) === "loaded"]
    ]);
  }
}), Dd = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = ms();
    M();
    const n = E(!1);
    let a;
    return ee(o.imageLoadingStatus, (r) => {
      r === "loading" && (n.value = !1, t.delayMs ? a = setTimeout(() => {
        n.value = !0, clearTimeout(a);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (r, l) => n.value && s(o).imageLoadingStatus.value !== "loaded" ? (h(), C(s(K), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : pe("", !0);
  }
}), [vs, Ed] = ne("PopperRoot"), Xt = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Ed({
      anchor: t,
      onAnchorChange: (o) => t.value = o
    }), (o, n) => _(o.$slots, "default");
  }
}), wo = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = M(), a = vs();
    return xe(() => {
      a.onAnchorChange(t.element ?? n.value);
    }), (r, l) => (h(), C(s(K), {
      ref: s(o),
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
function Pd(e) {
  return e !== null;
}
function Ad(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var o, n, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((o = i.arrow) == null ? void 0 : o.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, f] = An(r), m = { start: "0%", center: "50%", end: "100%" }[f], v = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let b = "", x = "";
      return p === "bottom" ? (b = u ? m : `${v}px`, x = `${-c}px`) : p === "top" ? (b = u ? m : `${v}px`, x = `${l.floating.height + c}px`) : p === "right" ? (b = `${-c}px`, x = u ? m : `${g}px`) : p === "left" && (b = `${l.floating.width + c}px`, x = u ? m : `${g}px`), { data: { x: b, y: x } };
    }
  };
}
function An(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
const gs = {
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
}, [$g, Id] = ne("PopperContent"), Ht = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Er({
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
    ...gs
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = vs(), { forwardRef: r, currentElement: l } = M(), i = E(), u = E(), { width: d, height: c } = ls(u), p = $(
      () => o.side + (o.align !== "center" ? `-${o.align}` : "")
    ), f = $(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), m = $(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), v = $(() => ({
      padding: f.value,
      boundary: m.value.filter(Pd),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = Hi(() => [
      Pi({
        mainAxis: o.sideOffset + c.value,
        alignmentAxis: o.alignOffset
      }),
      o.prioritizePosition && o.avoidCollisions && Ja({
        ...v.value
      }),
      o.avoidCollisions && Ai({
        mainAxis: !0,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? Fi() : void 0,
        ...v.value
      }),
      !o.prioritizePosition && o.avoidCollisions && Ja({
        ...v.value
      }),
      Ii({
        ...v.value,
        apply: ({ elements: T, rects: L, availableWidth: R, availableHeight: q }) => {
          const { width: H, height: te } = L.reference, se = T.floating.style;
          se.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), se.setProperty(
            "--radix-popper-available-height",
            `${q}px`
          ), se.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), se.setProperty(
            "--radix-popper-anchor-height",
            `${te}px`
          );
        }
      }),
      u.value && zi({ element: u.value, padding: o.arrowPadding }),
      Ad({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      o.hideWhenDetached && Mi({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: x, isPositioned: k, middlewareData: B } = Ni(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...T) => Ei(...T, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = $(
      () => An(x.value)[0]
    ), O = $(
      () => An(x.value)[1]
    );
    Tl(() => {
      k.value && n("placed");
    });
    const A = $(
      () => {
        var T;
        return ((T = B.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), S = E("");
    xe(() => {
      l.value && (S.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = $(() => {
      var T;
      return ((T = B.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), F = $(() => {
      var T;
      return ((T = B.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Id({
      placedSide: D,
      onArrowChange: (T) => u.value = T,
      arrowX: I,
      arrowY: F,
      shouldHideArrow: A
    }), (T, L) => {
      var R, q, H;
      return h(), N("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Ot({
          ...s(b),
          transform: s(k) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: S.value,
          "--radix-popper-transform-origin": [
            (R = s(B).transformOrigin) == null ? void 0 : R.x,
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
        V(s(K), P({ ref: s(r) }, T.$attrs, {
          "as-child": o.asChild,
          as: T.as,
          "data-side": D.value,
          "data-align": O.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(k) ? void 0 : "none"
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
}), xo = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), (t, o) => (h(), C(s(K), {
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
}), Md = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = $(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, a) => typeof n == "object" ? Object.entries(n).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, a]) => ({ name: `[${t.name}][${n}]`, value: a })) : []);
    return (n, a) => (h(!0), N(ke, null, kt(o.value, (r) => (h(), C(xo, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), Rd = "data-radix-vue-collection-item", [va, Fd] = ne("CollectionProvider");
function ga(e = Rd) {
  const t = E(/* @__PURE__ */ new Map()), o = E(), n = Fd({
    collectionRef: o,
    itemMap: t,
    attrName: e
  }), { getItems: a } = ya(n), r = $(() => Array.from(n.itemMap.value.values())), l = $(() => n.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const ha = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const o = va(), { primitiveElement: n, currentElement: a } = is();
    return ee(a, () => {
      o.collectionRef.value = a.value;
    }), () => Ct(ra, { ref: n }, t);
  }
}), Qo = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: o }) {
    const n = va(), { primitiveElement: a, currentElement: r } = is();
    return xe((l) => {
      if (r.value) {
        const i = $l(r.value);
        n.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => n.itemMap.value.delete(i));
      }
    }), () => Ct(ra, { ...o, [n.attrName]: "", ref: a }, t);
  }
});
function ya(e) {
  const t = e ?? va();
  return { getItems: () => {
    const o = t.collectionRef.value;
    if (!o)
      return [];
    const n = Array.from(o.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (a, r) => n.indexOf(a.ref) - n.indexOf(r.ref)
    );
  } };
}
const [Zt, Ld] = ne("ComboboxRoot"), Vd = /* @__PURE__ */ w({
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
    const o = e, n = t, { multiple: a, disabled: r, dir: l } = fe(o), i = vt(l), u = ge(o, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: o.searchTerm === void 0
    }), d = ge(o, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: o.defaultValue ?? a.value ? [] : void 0,
      passive: o.modelValue === void 0,
      deep: !0
    }), c = ge(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), p = ge(o, "selectedValue", n, {
      defaultValue: void 0,
      passive: o.selectedValue === void 0
    });
    async function f(j) {
      var J, Q;
      c.value = j, await re(), j ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (J = B().find((Ee) => {
        var Ae, Pe;
        return ((Pe = (Ae = Ee.ref) == null ? void 0 : Ae.dataset) == null ? void 0 : Pe.state) === "checked";
      })) == null ? void 0 : J.value : p.value = d.value), await re(), (Q = g.value) == null || Q.focus(), q()) : (v.value = !1, o.resetSearchTermOnBlur && I("blur"));
    }
    function m(j) {
      if (Array.isArray(d.value) && a.value) {
        const J = d.value.findIndex((Ee) => xt(Ee, j)), Q = [...d.value];
        J === -1 ? Q.push(j) : Q.splice(J, 1), d.value = Q;
      } else
        d.value = j, f(!1);
    }
    const v = E(!1), g = E(), b = E(), { forwardRef: x, currentElement: k } = M(), { getItems: B, reactiveItems: D, itemMapSize: O } = ga("data-radix-vue-combobox-item"), A = E([]);
    ee(() => O.value, () => {
      A.value = B().map((j) => j.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const S = $(() => {
      if (v.value) {
        if (o.filterFunction)
          return o.filterFunction(A.value, u.value);
        const j = A.value.filter((J) => typeof J == "string");
        if (j.length)
          return j.filter((J) => {
            var Q;
            return J.toLowerCase().includes((Q = u.value) == null ? void 0 : Q.toLowerCase());
          });
      }
      return A.value;
    });
    function I(j) {
      const J = j === "blur" || j === "select" && o.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? o.displayValue ? u.value = o.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : J && (u.value = "") : J && (u.value = "");
    }
    const F = $(() => S.value.findIndex((j) => xt(j, p.value))), T = $(() => {
      var j;
      return (j = D.value.find((J) => xt(J.value, p.value))) == null ? void 0 : j.ref;
    }), L = $(() => JSON.stringify(d.value));
    ee(L, async () => {
      await re(), await re(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !o.searchTerm
    }), ee(() => [S.value.length, u.value.length], async ([j, J], [Q, Ee]) => {
      await re(), await re(), j && (Ee > J || F.value === -1) && (p.value = S.value[0]);
    });
    const R = qo(k);
    function q() {
      var j;
      T.value instanceof Element && ((j = T.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      T.value instanceof Element && T.value.focus && T.value.focus();
    }
    const te = E(!1);
    function se() {
      te.value = !0;
    }
    function ce() {
      requestAnimationFrame(() => {
        te.value = !1;
      });
    }
    async function ue(j) {
      var J;
      S.value.length && p.value && T.value instanceof Element && (j.preventDefault(), j.stopPropagation(), te.value || (J = T.value) == null || J.click());
    }
    return Ld({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: v,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: f,
      filteredOptions: S,
      contentId: "",
      inputElement: g,
      selectedElement: T,
      onInputElementChange: (j) => g.value = j,
      onInputNavigation: async (j) => {
        const J = F.value;
        J === 0 && j === "up" || J === S.value.length - 1 && j === "down" || (J === -1 && S.value.length || j === "home" ? p.value = S.value[0] : j === "end" ? p.value = S.value[S.value.length - 1] : p.value = S.value[j === "up" ? J - 1 : J + 1], await re(), q(), H(), re(() => {
          var Q;
          return (Q = g.value) == null ? void 0 : Q.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ue,
      onCompositionEnd: ce,
      onCompositionStart: se,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: k,
      contentElement: b,
      onContentElementChange: (j) => b.value = j
    }), (j, J) => (h(), C(s(Xt), null, {
      default: y(() => [
        V(s(K), P({
          ref: s(x),
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
            s(R) && o.name ? (h(), C(s(Md), {
              key: 0,
              name: o.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : pe("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), zd = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, o = Zt(), { forwardRef: n, currentElement: a } = M();
    le(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (o.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = $(() => t.disabled || o.disabled.value || !1), l = E();
    xl(() => {
      var c;
      return l.value = (c = o.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      o.open.value ? o.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : o.onOpenChange(!0);
    }
    function u(c) {
      o.open.value && o.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var p;
      o.searchTerm.value = (p = c.target) == null ? void 0 : p.value, o.open.value || o.onOpenChange(!0), o.isUserInputted.value = !0;
    }
    return (c, p) => (h(), C(s(K), {
      ref: s(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: r.value,
      value: s(o).searchTerm.value,
      "aria-expanded": s(o).open.value,
      "aria-controls": s(o).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": l.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        _t($e(i, ["prevent"]), ["down", "up"]),
        _t(s(o).onInputEnter, ["enter"]),
        _t($e(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(o).onCompositionStart,
      onCompositionend: s(o).onCompositionEnd
    }, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [hs, Nd] = ne("ComboboxGroup"), Kd = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: o, currentElement: n } = M(), a = _e(void 0, "radix-vue-combobox-group"), r = Zt(), l = E(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return nu(n, () => {
      re(() => {
        i();
      });
    }, { childList: !0 }), ee(() => r.searchTerm.value, () => {
      re(() => {
        i();
      });
    }, { immediate: !0 }), Nd({
      id: a
    }), (u, d) => Wt((h(), C(s(K), P(t, {
      ref_key: "currentRef",
      ref: o,
      role: "group",
      "aria-labelledby": s(a)
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Vn, l.value]
    ]);
  }
}), jd = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    M();
    const o = hs({ id: "" });
    return (n, a) => (h(), C(s(K), P(t, {
      id: s(o).id
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Sg, Hd] = ne("ComboboxContent"), Wd = /* @__PURE__ */ w({
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
    const o = e, n = t, { position: a } = fe(o), r = Zt();
    yo(o.bodyLock);
    const { forwardRef: l, currentElement: i } = M();
    bo(r.parentElement);
    const u = $(() => o.position === "popper" ? o : {}), d = Be(u.value);
    function c(f) {
      r.onSelectedValueChange("");
    }
    le(() => {
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
    return Hd({ position: a }), (f, m) => (h(), C(s(ha), null, {
      default: y(() => [
        f.dismissable ? (h(), C(s(Yt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (v) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (v) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), n("focusOutside", v);
          }),
          onInteractOutside: m[2] || (m[2] = (v) => n("interactOutside", v)),
          onEscapeKeyDown: m[3] || (m[3] = (v) => n("escapeKeyDown", v)),
          onPointerDownOutside: m[4] || (m[4] = (v) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), n("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (h(), C(Ne(s(a) === "popper" ? s(Ht) : s(K)), P({ ...f.$attrs, ...s(d) }, {
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
                _(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (h(), C(Ne(s(a) === "popper" ? s(Ht) : s(K)), P({ key: 1 }, { ...f.$attrs, ...u.value }, {
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
            _(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Ud = /* @__PURE__ */ w({
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
    const o = Y(e, t), { forwardRef: n } = M(), a = Zt();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(Fe), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        V(Wd, P({ ...s(o), ...r.$attrs }, { ref: s(n) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Gd = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    M();
    const o = Zt(), n = $(() => o.filteredOptions.value.length === 0);
    return (a, r) => n.value ? (h(), C(s(K), U(P({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          Se("No options")
        ])
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
});
function qd(e) {
  const t = Go({
    nonce: E()
  });
  return $(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.nonce) == null ? void 0 : o.value);
  });
}
const [Og, Yd] = ne("ComboboxItem"), Xd = "combobox.select", Zd = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { disabled: a } = fe(o), r = Zt();
    hs({ id: "", options: E([]) });
    const { forwardRef: l } = M(), i = $(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((x) => xt(x, o.value)) : xt((b = r.modelValue) == null ? void 0 : b.value, o.value);
      }
    ), u = $(() => xt(r.selectedValue.value, o.value)), d = _e(void 0, "radix-vue-combobox-item"), c = _e(void 0, "radix-vue-combobox-option"), p = $(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => xt(g, o.value)) : !0);
    async function f(g) {
      n("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(o.value);
    }
    function m(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: o.value };
      Qn(Xd, f, b);
    }
    async function v(g) {
      await re(), !g.defaultPrevented && r.onSelectedValueChange(o.value);
    }
    if (o.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Yd({
      isSelected: i
    }), (g, b) => (h(), C(s(Qo), { value: g.value }, {
      default: y(() => [
        Wt(V(s(K), {
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
          onPointermove: v
        }, {
          default: y(() => [
            _(g.$slots, "default", {}, () => [
              Se(De(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Vn, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Jd = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(K), P(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ys = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(wo), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Qd() {
  const e = E(!1);
  return le(() => {
    jt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), jt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const ec = Qr(Qd), [Pt, bs] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [_o, tc] = ne("MenuRoot"), oc = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a, dir: r } = fe(o), l = vt(r), i = ge(o, "open", n), u = E(), d = ec();
    return bs({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), tc({
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
}), nc = "rovingFocusGroup.onEntryFocus", ac = { bubbles: !1, cancelable: !0 }, rc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function sc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function lc(e, t, o) {
  const n = sc(e.key, o);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return rc[n];
}
function ws(e, t = !1) {
  const o = Ce();
  for (const n of e)
    if (n === o || (n.focus({ preventScroll: t }), Ce() !== o))
      return;
}
function ic(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
const [uc, dc] = ne("RovingFocusGroup"), xs = /* @__PURE__ */ w({
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
    const n = e, a = o, { loop: r, orientation: l, dir: i } = fe(n), u = vt(i), d = ge(n, "currentTabStopId", a, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), f = E(0), { getItems: m } = ga();
    function v(b) {
      const x = !p.value;
      if (b.currentTarget && b.target === b.currentTarget && x && !c.value) {
        const k = new CustomEvent(nc, ac);
        if (b.currentTarget.dispatchEvent(k), a("entryFocus", k), !k.defaultPrevented) {
          const B = m().map((S) => S.ref).filter((S) => S.dataset.disabled !== ""), D = B.find((S) => S.getAttribute("data-active") === "true"), O = B.find(
            (S) => S.id === d.value
          ), A = [D, O, ...B].filter(
            Boolean
          );
          ws(A, n.preventScrollOnEntryFocus);
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
    }), dc({
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
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (b, x) => (h(), C(s(ha), null, {
      default: y(() => [
        V(s(K), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: x[0] || (x[0] = (k) => p.value = !0),
          onMouseup: g,
          onFocus: v,
          onBlur: x[1] || (x[1] = (k) => c.value = !1)
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
}), cc = /* @__PURE__ */ w({
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
    const t = e, o = uc(), n = $(() => t.tabStopId || _e()), a = $(
      () => o.currentTabStopId.value === n.value
    ), { getItems: r } = ya();
    le(() => {
      t.focusable && o.onFocusableItemAdd();
    }), Ye(() => {
      t.focusable && o.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        o.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = lc(
        i,
        o.orientation.value,
        o.dir.value
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
          d = o.loop.value ? ic(d, c + 1) : d.slice(c + 1);
        }
        re(() => ws(d));
      }
    }
    return (i, u) => (h(), C(s(Qo), null, {
      default: y(() => [
        V(s(K), {
          tabindex: a.value ? 0 : -1,
          "data-orientation": s(o).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? s(o).onItemFocus(n.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => s(o).onItemFocus(n.value)),
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
}), [ba, pc] = ne("MenuContent"), wa = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Er({
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
    ...gs
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = Pt(), r = _o(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = fe(o);
    na(), yo(i.value);
    const d = E(""), c = E(0), p = E(0), f = E(null), m = E("right"), v = E(0), g = E(null), { createCollection: b } = Gt(), { forwardRef: x, currentElement: k } = M(), B = b(k);
    ee(k, (T) => {
      a.onContentChange(T);
    });
    const { handleTypeaheadSearch: D } = aa(B);
    Ye(() => {
      window.clearTimeout(c.value);
    });
    function O(T) {
      var L, R;
      return m.value === ((L = f.value) == null ? void 0 : L.side) && id(T, (R = f.value) == null ? void 0 : R.area);
    }
    async function A(T) {
      var L;
      n("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), (L = k.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function S(T) {
      if (T.defaultPrevented)
        return;
      const L = T.target.closest("[data-radix-menu-content]") === T.currentTarget, R = T.ctrlKey || T.altKey || T.metaKey, q = T.key.length === 1, H = ns(
        T,
        Ce(),
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
      if (T.code === "Space" || (L && (T.key === "Tab" && T.preventDefault(), !R && q && D(T.key)), T.target !== k.value) || !ad.includes(T.key))
        return;
      T.preventDefault();
      const te = B.value;
      ps.includes(T.key) && te.reverse(), Pn(te);
    }
    function I(T) {
      var L, R;
      (R = (L = T == null ? void 0 : T.currentTarget) == null ? void 0 : L.contains) != null && R.call(L, T.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(T) {
      var L;
      if (!co(T))
        return;
      const R = T.target, q = v.value !== T.clientX;
      if ((L = T == null ? void 0 : T.currentTarget) != null && L.contains(R) && q) {
        const H = T.clientX > v.value ? "right" : "left";
        m.value = H, v.value = T.clientX;
      }
    }
    return pc({
      onItemEnter: (T) => !!O(T),
      onItemLeave: (T) => {
        var L;
        O(T) || ((L = k.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (T) => !!O(T),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (T) => {
        f.value = T;
      }
    }), (T, L) => (h(), C(s(Xo), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: A,
      onUnmountAutoFocus: L[7] || (L[7] = (R) => n("closeAutoFocus", R))
    }, {
      default: y(() => [
        V(s(Yt), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: L[3] || (L[3] = (R) => n("pointerDownOutside", R)),
          onFocusOutside: L[4] || (L[4] = (R) => n("focusOutside", R)),
          onInteractOutside: L[5] || (L[5] = (R) => n("interactOutside", R)),
          onDismiss: L[6] || (L[6] = (R) => n("dismiss"))
        }, {
          default: y(() => [
            V(s(xs), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (R) => g.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: L[1] || (L[1] = (R) => {
                n("entryFocus", R), s(r).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: y(() => [
                V(s(Ht), {
                  ref: s(x),
                  role: "menu",
                  as: T.as,
                  "as-child": T.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(ca)(s(a).open.value),
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
                  onKeydown: S,
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
}), _s = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = ba(), { forwardRef: n } = M(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && co(i)) {
        if (t.disabled)
          o.onItemLeave(i);
        else if (!o.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await re(), !i.defaultPrevented && co(i) && o.onItemLeave(i);
    }
    return (i, u) => (h(), C(s(Qo), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        V(s(K), P({
          ref: s(n),
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
}), xa = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: r } = M(), l = _o(), i = ba(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!o.disabled && c) {
        const p = new CustomEvent(od, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await re(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), C(_s, P(o, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var m;
        await re(), !f.defaultPrevented && (u.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const m = s(i).searchRef.value !== "";
        c.disabled || m && f.key === " " || s(En).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [fc, Cs] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), mc = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = fc({
      checked: E(!1)
    });
    return (o, n) => (h(), C(s(Fe), {
      present: o.forceMount || s(Vo)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        V(s(K), {
          as: o.as,
          "as-child": o.asChild,
          "data-state": s(pa)(s(t).checked.value)
        }, {
          default: y(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), vc = /* @__PURE__ */ w({
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
    const o = e, n = t, a = ge(o, "checked", n);
    return Cs({ checked: a }), (r, l) => (h(), C(xa, P({ role: "menuitemcheckbox" }, o, {
      "aria-checked": s(Vo)(s(a)) ? "mixed" : s(a),
      "data-state": s(pa)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        n("select", i), s(Vo)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), gc = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Y(o, n), r = Pt(), { forwardRef: l, currentElement: i } = M();
    return bo(i), (u, d) => (h(), C(wa, P(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = $e((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), hc = /* @__PURE__ */ w({
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
    const o = Y(e, t), n = Pt();
    return (a, r) => (h(), C(wa, P(s(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yc = /* @__PURE__ */ w({
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
    const o = Y(e, t), n = Pt(), a = _o();
    return (r, l) => (h(), C(s(Fe), {
      present: r.forceMount || s(n).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(gc, U(P({ key: 0 }, { ...r.$attrs, ...s(o) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(hc, U(P({ key: 1 }, { ...r.$attrs, ...s(o) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bs = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(K), P({ role: "group" }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bc = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(K), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wc = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(qt), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [xc, _c] = ne("MenuRadioGroup"), Cc = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = ge(o, "modelValue", t);
    return _c({
      modelValue: n,
      onValueChange: (a) => {
        n.value = a;
      }
    }), (a, r) => (h(), C(Bs, U(G(o)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), Bc = /* @__PURE__ */ w({
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
    const o = e, n = t, { value: a } = fe(o), r = xc(), l = $(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return Cs({ checked: l }), (i, u) => (h(), C(xa, P({ role: "menuitemradio" }, o, {
      "aria-checked": l.value,
      "data-state": s(pa)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), s(r).onValueChange(s(a));
      })
    }), {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), kc = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(K), P(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ks, $c] = ne("MenuSub"), Sc = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = ge(o, "open", t, {
      defaultValue: !1,
      passive: o.open === void 0
    }), a = Pt(), r = E(), l = E();
    return xe((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), bs({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), $c({
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
}), Oc = /* @__PURE__ */ w({
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
    const o = Y(e, t), n = Pt(), a = _o(), r = ks(), { forwardRef: l, currentElement: i } = M();
    return r.contentId || (r.contentId = _e(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(Fe), {
      present: u.forceMount || s(n).open.value
    }, {
      default: y(() => [
        V(wa, P(s(o), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = $e((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = $e(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, f;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), v = s(sd)[s(a).dir.value].includes(c.key);
            m && v && (s(n).onOpenChange(!1), (f = s(r).trigger.value) == null || f.focus(), c.preventDefault());
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
}), Tc = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Pt(), n = _o(), a = ks(), r = ba(), l = E(null);
    a.triggerId || (a.triggerId = _e(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ye(() => {
      i();
    });
    function u(p) {
      !co(p) || r.onItemEnter(p) || !t.disabled && !o.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        o.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var f, m;
      if (!co(p))
        return;
      i();
      const v = (f = o.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (m = o.content.value) == null ? void 0 : m.dataset.side, b = g === "right", x = b ? -5 : 5, k = v[b ? "left" : "right"], B = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + x, y: p.clientY },
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
        if (r.onTriggerLeave(p))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var f;
      const m = r.searchRef.value !== "";
      t.disabled || m && p.key === " " || rd[n.dir.value].includes(p.key) && (o.onOpenChange(!0), await re(), (f = o.content.value) == null || f.focus(), p.preventDefault());
    }
    return (p, f) => (h(), C(ys, { "as-child": "" }, {
      default: y(() => [
        V(_s, P(t, {
          id: s(a).triggerId,
          ref: (m) => {
            var v;
            (v = s(a)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(o).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(ca)(s(o).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(o).open.value || s(o).onOpenChange(!0));
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
}), [$s, Dc] = ne("DropdownMenuRoot"), Ec = /* @__PURE__ */ w({
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
    M();
    const a = ge(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = E(), { modal: l, dir: i } = fe(o), u = vt(i);
    return Dc({
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
    }), (d, c) => (h(), C(s(oc), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => Bt(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Pc = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = $s(), { forwardRef: n, currentElement: a } = M();
    return le(() => {
      o.triggerElement = a;
    }), o.triggerId || (o.triggerId = _e(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(ys), { "as-child": "" }, {
      default: y(() => [
        V(s(K), {
          id: s(o).triggerId,
          ref: s(n),
          type: r.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": s(o).open.value,
          "aria-controls": s(o).open.value ? s(o).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": s(o).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(o)) == null || u.onOpenToggle(), await re(), s(o).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = _t(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && s(o).onOpenToggle(), i.key === "ArrowDown" && s(o).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
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
}), Ac = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(wc), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ic = /* @__PURE__ */ w({
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
    const o = Y(e, t);
    M();
    const n = $s(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = _e(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(yc), P(s(o), {
        id: s(n).contentId,
        "aria-labelledby": (u = s(n)) == null ? void 0 : u.triggerId,
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
          const p = d.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || f;
          (!s(n).modal.value || m) && (a.value = !0), (c = s(n).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Mc = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = gt(t);
    return M(), (a, r) => (h(), C(s(xa), U(G({ ...o, ...s(n) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rc = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(Bs), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fc = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(kc), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lc = /* @__PURE__ */ w({
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
    const o = e, n = gt(t);
    return M(), (a, r) => (h(), C(s(vc), U(G({ ...o, ...s(n) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ss = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(mc), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vc = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(bc), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zc = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = gt(t);
    return M(), (a, r) => (h(), C(s(Cc), U(G({ ...o, ...s(n) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nc = /* @__PURE__ */ w({
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
    const o = Y(e, t);
    return M(), (n, a) => (h(), C(s(Bc), U(G(s(o))), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kc = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = ge(o, "open", t, {
      passive: o.open === void 0,
      defaultValue: o.defaultOpen ?? !1
    });
    return M(), (a, r) => (h(), C(s(Sc), {
      open: s(n),
      "onUpdate:open": r[0] || (r[0] = (l) => Bt(n) ? n.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), jc = /* @__PURE__ */ w({
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
    const o = Y(e, t);
    return M(), (n, a) => (h(), C(s(Oc), P(s(o), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hc = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(Tc), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wc = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(K), P(t, {
      onMousedown: n[0] || (n[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Jt, Uc] = ne("PopoverRoot"), Gc = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a } = fe(o), r = ge(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = E(), i = E(!1);
    return Uc({
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
}), qc = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Jt(), { forwardRef: n, currentElement: a } = M();
    return le(() => {
      o.triggerElement.value = a.value;
    }), (r, l) => (h(), C(Ne(s(o).hasCustomAnchor.value ? s(K) : s(wo)), { "as-child": "" }, {
      default: y(() => [
        V(s(K), {
          ref: s(n),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": s(o).open.value,
          "aria-controls": s(o).contentId,
          "data-state": s(o).open.value ? "open" : "closed",
          as: r.as,
          "as-child": t.asChild,
          onClick: s(o).onOpenToggle
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
}), Yc = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(qt), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Os = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Be(o), { forwardRef: r } = M(), l = Jt();
    return na(), (i, u) => (h(), C(s(Xo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: y(() => [
        V(s(Yt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            V(s(Ht), P(s(a), {
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
}), Xc = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Jt(), r = E(!1);
    yo(!0);
    const l = Y(o, n), { forwardRef: i, currentElement: u } = M();
    return bo(u), (d, c) => (h(), C(Os, P(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = $e(
        (p) => {
          var f;
          n("closeAutoFocus", p), r.value || (f = s(a).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const f = p.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, v = f.button === 2 || m;
        r.value = v;
      }),
      onFocusOutside: c[2] || (c[2] = $e(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Zc = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Jt(), r = E(!1), l = E(!1), i = Y(o, n);
    return (u, d) => (h(), C(Os, P(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(a).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const f = c.target;
        (p = s(a).triggerElement.value) != null && p.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jc = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Jt(), r = Y(o, n), { forwardRef: l } = M();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(Fe), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Xc, P({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Zc, P({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Tg = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    M();
    const o = Jt();
    return Sr(() => {
      o.hasCustomAnchor.value = !0;
    }), Ye(() => {
      o.hasCustomAnchor.value = !1;
    }), (n, a) => (h(), C(s(wo), U(G(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), po = 100, [Qc, ep] = ne("ProgressRoot"), _a = (e) => typeof e == "number";
function tp(e, t) {
  return zt(e) || _a(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${po} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function op(e) {
  return _a(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${po}\`.`
  ), po);
}
const np = /* @__PURE__ */ w({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: po },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * po)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    M();
    const a = ge(o, "modelValue", n, {
      passive: o.modelValue === void 0
    }), r = ge(o, "max", n, {
      passive: o.max === void 0
    });
    ee(
      () => a.value,
      async (i) => {
        const u = tp(i, o.max);
        u !== i && (await re(), a.value = u);
      },
      { immediate: !0 }
    ), ee(
      () => o.max,
      (i) => {
        const u = op(o.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = $(() => zt(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return ep({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(K), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": _a(s(a)) ? s(a) : void 0,
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
}), ap = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Qc();
    return M(), (n, a) => {
      var r;
      return h(), C(s(K), P(t, {
        "data-state": s(o).progressState.value,
        "data-value": ((r = s(o).modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": s(o).max.value
      }), {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), rp = ["default-value"], sp = /* @__PURE__ */ w({
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
    const t = e, { value: o } = fe(t), n = E();
    return (a, r) => (h(), C(s(xo), { "as-child": "" }, {
      default: y(() => [
        Wt(ae("select", P({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => Bt(o) ? o.value = l : null),
          "default-value": s(o)
        }), [
          _(a.$slots, "default")
        ], 16, rp), [
          [Sl, s(o)]
        ])
      ]),
      _: 3
    }));
  }
}), lp = {
  key: 0,
  value: ""
}, [At, Ts] = ne("SelectRoot"), [ip, up] = ne("SelectRoot"), dp = /* @__PURE__ */ w({
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
    const o = e, n = t, a = ge(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), r = ge(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: p, dir: f } = fe(o), m = vt(f);
    Ts({
      triggerElement: l,
      onTriggerChange: (x) => {
        l.value = x;
      },
      valueElement: i,
      onValueElementChange: (x) => {
        i.value = x;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (x) => {
        d.value = x;
      },
      contentId: "",
      modelValue: a,
      onValueChange: (x) => {
        a.value = x;
      },
      open: r,
      required: c,
      onOpenChange: (x) => {
        r.value = x;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const v = qo(l), g = E(/* @__PURE__ */ new Set()), b = $(() => Array.from(g.value).map((x) => {
      var k;
      return (k = x.props) == null ? void 0 : k.value;
    }).join(";"));
    return up({
      onNativeOptionAdd: (x) => {
        g.value.add(x);
      },
      onNativeOptionRemove: (x) => {
        g.value.delete(x);
      }
    }), (x, k) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(x.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(v) ? (h(), C(sp, P({ key: b.value }, x.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: x.name,
          autocomplete: x.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: k[0] || (k[0] = (B) => a.value = B.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), N("option", lp)) : pe("", !0),
            (h(!0), N(ke, null, kt(Array.from(g.value), (B) => (h(), C(Ne(B), P({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : pe("", !0)
      ]),
      _: 3
    }));
  }
}), cp = [" ", "Enter", "ArrowUp", "ArrowDown"], pp = [" ", "Enter"], ze = 10;
function Ds(e) {
  return e === "" || zt(e);
}
const fp = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = At(), n = $(() => {
      var m;
      return ((m = o.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = M();
    o.contentId || (o.contentId = _e(void 0, "radix-vue-select-content")), le(() => {
      o.triggerElement = r;
    });
    const { injectCollection: l } = Gt(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = aa(i);
    function p() {
      n.value || (o.onOpenChange(!0), c());
    }
    function f(m) {
      p(), o.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, v) => (h(), C(s(wo), { "as-child": "" }, {
      default: y(() => {
        var g, b, x, k;
        return [
          V(s(K), {
            ref: s(a),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(o).contentId,
            "aria-expanded": s(o).open.value || !1,
            "aria-required": (g = s(o).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (b = s(o)) == null ? void 0 : b.dir.value,
            "data-state": (x = s(o)) != null && x.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": s(Ds)((k = s(o).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: v[0] || (v[0] = (B) => {
              var D;
              (D = B == null ? void 0 : B.currentTarget) == null || D.focus();
            }),
            onPointerdown: v[1] || (v[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const D = B.target;
              D.hasPointerCapture(B.pointerId) && D.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (f(B), B.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = $e(
              (B) => {
                B.pointerType === "touch" && f(B);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (B) => {
              const D = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && D && B.key === " " || (s(d)(B.key), s(cp).includes(B.key) && (p(), B.preventDefault()));
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
}), mp = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(qt), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ca, vp] = ne("SelectItemAlignedPosition"), gp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { injectCollection: a } = Gt(), r = At(), l = It(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: f } = M(), { viewport: m, selectedItem: v, selectedItemText: g, focusSelectedItem: b } = l;
    function x() {
      if (r.triggerElement.value && r.valueElement.value && c.value && f.value && m != null && m.value && v != null && v.value && g != null && g.value) {
        const D = r.triggerElement.value.getBoundingClientRect(), O = f.value.getBoundingClientRect(), A = r.valueElement.value.getBoundingClientRect(), S = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const ye = S.left - O.left, me = A.left - ye, Oe = D.left - me, be = D.width + Oe, de = Math.max(be, O.width), W = window.innerWidth - ze, ie = Lo(me, ze, Math.max(ze, W - de));
          c.value.style.minWidth = `${be}px`, c.value.style.left = `${ie}px`;
        } else {
          const ye = O.right - S.right, me = window.innerWidth - A.right - ye, Oe = window.innerWidth - D.right - me, be = D.width + Oe, de = Math.max(be, O.width), W = window.innerWidth - ze, ie = Lo(
            me,
            ze,
            Math.max(ze, W - de)
          );
          c.value.style.minWidth = `${be}px`, c.value.style.right = `${ie}px`;
        }
        const I = i.value, F = window.innerHeight - ze * 2, T = m.value.scrollHeight, L = window.getComputedStyle(f.value), R = Number.parseInt(
          L.borderTopWidth,
          10
        ), q = Number.parseInt(L.paddingTop, 10), H = Number.parseInt(
          L.borderBottomWidth,
          10
        ), te = Number.parseInt(
          L.paddingBottom,
          10
        ), se = R + q + T + te + H, ce = Math.min(
          v.value.offsetHeight * 5,
          se
        ), ue = window.getComputedStyle(m.value), j = Number.parseInt(ue.paddingTop, 10), J = Number.parseInt(
          ue.paddingBottom,
          10
        ), Q = D.top + D.height / 2 - ze, Ee = F - Q, Ae = v.value.offsetHeight / 2, Pe = v.value.offsetTop + Ae, We = R + q + Pe, ht = se - We;
        if (We <= Q) {
          const ye = v.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const me = f.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Oe = Math.max(
            Ee,
            Ae + (ye ? J : 0) + me + H
          ), be = We + Oe;
          c.value.style.height = `${be}px`;
        } else {
          const ye = v.value === I[0];
          c.value.style.top = "0px";
          const me = Math.max(
            Q,
            R + m.value.offsetTop + (ye ? j : 0) + Ae
          ) + ht;
          c.value.style.height = `${me}px`, m.value.scrollTop = We - Q + m.value.offsetTop;
        }
        c.value.style.margin = `${ze}px 0`, c.value.style.minHeight = `${ce}px`, c.value.style.maxHeight = `${F}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = E("");
    le(async () => {
      await re(), x(), f.value && (k.value = window.getComputedStyle(f.value).zIndex);
    });
    function B(D) {
      D && d.value === !0 && (x(), b == null || b(), d.value = !1);
    }
    return vp({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (D, O) => (h(), N("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Ot({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      V(s(K), P({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...D.$attrs, ...o }), {
        default: y(() => [
          _(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), hp = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: ze },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Be(e);
    return (o, n) => (h(), C(s(Ht), P(s(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [It, yp] = ne("SelectContent"), bp = /* @__PURE__ */ w({
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
    const o = e, n = t, a = At();
    na(), yo(o.bodyLock);
    const { createCollection: r } = Gt(), l = E();
    bo(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = aa(i), c = E(), p = E(), f = E(), m = E(!1), v = E(!1);
    function g() {
      p.value && l.value && Pn([p.value, l.value]);
    }
    ee(m, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: x } = a;
    xe((O) => {
      if (!l.value)
        return;
      let A = { x: 0, y: 0 };
      const S = (F) => {
        var T, L;
        A = {
          x: Math.abs(
            Math.round(F.pageX) - (((T = x.value) == null ? void 0 : T.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((L = x.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (F) => {
        var T;
        F.pointerType !== "touch" && (A.x <= 10 && A.y <= 10 ? F.preventDefault() : (T = l.value) != null && T.contains(F.target) || b(!1), document.removeEventListener("pointermove", S), x.value = null);
      };
      x.value !== null && (document.addEventListener("pointermove", S), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), O(() => {
        document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function k(O) {
      const A = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !A && O.key.length === 1 && d(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let S = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const I = O.target, F = S.indexOf(I);
          S = S.slice(F + 1);
        }
        setTimeout(() => Pn(S)), O.preventDefault();
      }
    }
    const B = $(() => o.position === "popper" ? o : {}), D = Be(B.value);
    return yp({
      content: l,
      viewport: c,
      onViewportChange: (O) => {
        c.value = O;
      },
      itemRefCallback: (O, A, S) => {
        var I, F;
        const T = !v.value && !S;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === A || T) && (p.value = O, T && (v.value = !0));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var O;
        (O = l.value) == null || O.focus();
      },
      itemTextRefCallback: (O, A, S) => {
        var I, F;
        const T = !v.value && !S;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === A || T) && (f.value = O);
      },
      focusSelectedItem: g,
      position: o.position,
      isPositioned: m,
      searchRef: u
    }), (O, A) => (h(), C(s(Xo), {
      "as-child": "",
      onMountAutoFocus: A[6] || (A[6] = $e(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: A[7] || (A[7] = (S) => {
        var I;
        n("closeAutoFocus", S), !S.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), S.preventDefault());
      })
    }, {
      default: y(() => [
        V(s(Yt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: A[2] || (A[2] = $e(() => {
          }, ["prevent"])),
          onDismiss: A[3] || (A[3] = (S) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: A[4] || (A[4] = (S) => n("escapeKeyDown", S)),
          onPointerDownOutside: A[5] || (A[5] = (S) => n("pointerDownOutside", S))
        }, {
          default: y(() => [
            (h(), C(Ne(
              O.position === "popper" ? hp : gp
            ), P({ ...O.$attrs, ...s(D) }, {
              id: s(a).contentId,
              ref: (S) => {
                l.value = s(Re)(S);
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
              onContextmenu: A[0] || (A[0] = $e(() => {
              }, ["prevent"])),
              onPlaced: A[1] || (A[1] = (S) => m.value = !0),
              onKeydown: k
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
}), wp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Ts(e.context), (t, o) => _(t.$slots, "default");
  }
}), xp = { key: 1 }, _p = /* @__PURE__ */ w({
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
    const o = e, n = Y(o, t), a = At(), r = E();
    le(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = $(() => o.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), C(s(Fe), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          V(bp, U(G({ ...s(n), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), N("div", xp, [
        (h(), C(No, { to: r.value }, [
          V(wp, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : pe("", !0);
    };
  }
}), Cp = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(K), P({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Es, Bp] = ne("SelectItem"), kp = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: o } = fe(t), n = At(), a = It(Qt), { forwardRef: r, currentElement: l } = M(), i = $(() => {
      var g;
      return ((g = n.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = _e(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await re(), !(g != null && g.defaultPrevented) && (o.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function f(g) {
      var b;
      await re(), !g.defaultPrevented && (o.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var b;
      await re(), !g.defaultPrevented && g.currentTarget === Ce() && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function v(g) {
      var b;
      await re(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (pp.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), Bp({
      value: t.value,
      disabled: o,
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
      "aria-disabled": s(o) || void 0,
      "data-disabled": s(o) ? "" : void 0,
      tabindex: s(o) ? void 0 : -1,
      as: g.as,
      "as-child": g.asChild,
      onFocus: b[0] || (b[0] = (x) => u.value = !0),
      onBlur: b[1] || (b[1] = (x) => u.value = !1),
      onPointerup: p,
      onPointerdown: b[2] || (b[2] = (x) => {
        x.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = $e(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: m,
      onKeydown: v
    }, {
      default: y(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), $p = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = Es();
    return (n, a) => s(o).isSelected.value ? (h(), C(s(K), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), [Sp, Op] = ne("SelectGroup"), Tp = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = _e(void 0, "radix-vue-select-group");
    return Op({ id: o }), (n, a) => (h(), C(s(K), P({ role: "group" }, t, { "aria-labelledby": s(o) }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Dp = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, o = Sp({ id: "" });
    return (n, a) => (h(), C(s(K), P(t, {
      id: s(o).id
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ps = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = At(), n = It(Qt), a = ip(), r = Es(), { forwardRef: l, currentElement: i } = M(), u = $(() => {
      var d;
      return Ct("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return le(() => {
      i.value && (r.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), a.onNativeOptionAdd(u.value));
    }), Ko(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), N(ke, null, [
      V(s(K), P({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(o).valueElement.value && !s(o).valueElementHasChildren.value ? (h(), C(No, {
        key: 0,
        to: s(o).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : pe("", !0)
    ], 64));
  }
}), Ep = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: o } = fe(t), n = qd(o), a = It(Qt), r = a.position === "item-aligned" ? Ca() : void 0, { forwardRef: l, currentElement: i } = M();
    le(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: m } = r ?? {};
      if (f != null && f.value && m != null && m.value) {
        const v = Math.abs(u.value - p.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - ze * 2, b = Number.parseFloat(
            m.value.style.minHeight
          ), x = Number.parseFloat(m.value.style.height), k = Math.max(b, x);
          if (k < g) {
            const B = k + v, D = Math.min(g, B), O = B - D;
            m.value.style.height = `${D}px`, m.value.style.bottom === "0px" && (p.scrollTop = O > 0 ? O : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), N(ke, null, [
      V(s(K), P({
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
      V(s(K), {
        as: "style",
        nonce: s(n)
      }, {
        default: y(() => [
          Se(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), As = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const o = t, { injectCollection: n } = Gt(), a = n(), r = It(Qt), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    xe(() => {
      const c = a.value.find(
        (p) => p === Ce()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = r.onItemLeave) == null || c.call(r), l.value === null && (l.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    return Ko(() => i()), (c, p) => {
      var f;
      return h(), C(s(K), P({
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
          _(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Pp = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = It(Qt), o = t.position === "item-aligned" ? Ca() : void 0, { forwardRef: n, currentElement: a } = M(), r = E(!1);
    return xe((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), ee(a, () => {
      a.value && (o == null || o.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(As, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), Ap = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = It(Qt), o = t.position === "item-aligned" ? Ca() : void 0, { forwardRef: n, currentElement: a } = M(), r = E(!1);
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
    }), ee(a, () => {
      a.value && (o == null || o.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(As, {
      key: 0,
      ref: s(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = s(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), Ip = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: o } = M(), n = At(), a = Or();
    return Sr(() => {
      var r;
      const l = !!Uo((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      n.onValueElementHasChildrenChange(l);
    }), le(() => {
      n.valueElement = o;
    }), (r, l) => (h(), C(s(K), {
      ref: s(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          s(Ds)((i = s(n).modelValue) == null ? void 0 : i.value) ? (h(), N(ke, { key: 0 }, [
            Se(De(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Mp = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, o) => (h(), C(s(K), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        _(t.$slots, "default", {}, () => [
          Se("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Rp(e = [], t, o) {
  const n = [...e];
  return n[o] = t, n.sort((a, r) => a - r);
}
function Is(e, t, o) {
  const n = 100 / (o - t) * (e - t);
  return Lo(n, 0, 100);
}
function Fp(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Lp(e, t) {
  if (e.length === 1)
    return 0;
  const o = e.map((a) => Math.abs(a - t)), n = Math.min(...o);
  return o.indexOf(n);
}
function Vp(e, t, o) {
  const n = e / 2, a = Ba([0, 50], [0, n]);
  return (n - a(t) * o) * o;
}
function zp(e) {
  return e.slice(0, -1).map((t, o) => e[o + 1] - t);
}
function Np(e, t) {
  if (t > 0) {
    const o = zp(e);
    return Math.min(...o) >= t;
  }
  return !0;
}
function Ba(e, t) {
  return (o) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (o - e[0]);
  };
}
function Kp(e) {
  return (String(e).split(".")[1] || "").length;
}
function jp(e, t) {
  const o = 10 ** t;
  return Math.round(e * o) / o;
}
const Ms = ["PageUp", "PageDown"], Rs = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Fs = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ls, Vs] = ne(["SliderVertical", "SliderHorizontal"]), zs = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = en();
    return (r, l) => (h(), C(s(K), P({ "data-slider-impl": "" }, o, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : s(Ms).concat(s(Rs)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), s(a).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: l[2] || (l[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: l[3] || (l[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hp = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, { max: a, min: r, dir: l, inverted: i } = fe(o), { forwardRef: u, currentElement: d } = M(), c = E(), p = $(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function f(m) {
      const v = c.value || d.value.getBoundingClientRect(), g = [0, v.width], b = p.value ? [r.value, a.value] : [a.value, r.value], x = Ba(g, b);
      return c.value = v, x(m - v.left);
    }
    return Vs({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, v) => (h(), C(zs, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: v[0] || (v[0] = (g) => {
        const b = f(g.clientX);
        n("slideStart", b);
      }),
      onSlideMove: v[1] || (v[1] = (g) => {
        const b = f(g.clientX);
        n("slideMove", b);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const b = p.value ? "from-left" : "from-right", x = s(Fs)[b].includes(g.key);
        n("stepKeyDown", g, x ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: v[5] || (v[5] = (g) => n("homeKeyDown", g))
    }, {
      default: y(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Wp = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const o = e, n = t, { max: a, min: r, inverted: l } = fe(o), { forwardRef: i, currentElement: u } = M(), d = E(), c = $(() => !l.value);
    function p(f) {
      const m = d.value || u.value.getBoundingClientRect(), v = [0, m.height], g = c.value ? [a.value, r.value] : [r.value, a.value], b = Ba(v, g);
      return d.value = m, b(f - m.top);
    }
    return Vs({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, m) => (h(), C(zs, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (v) => {
        const g = p(v.clientY);
        n("slideStart", g);
      }),
      onSlideMove: m[1] || (m[1] = (v) => {
        const g = p(v.clientY);
        n("slideMove", g);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (v) => {
        const g = c.value ? "from-bottom" : "from-top", b = s(Fs)[g].includes(v.key);
        n("stepKeyDown", v, b ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (v) => n("endKeyDown", v)),
      onHomeKeyDown: m[5] || (m[5] = (v) => n("homeKeyDown", v))
    }, {
      default: y(() => [
        _(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Up = ["value", "name", "disabled", "step"], [en, Gp] = ne("SliderRoot"), qp = /* @__PURE__ */ w({
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
    const o = e, n = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = fe(o), p = vt(c), { forwardRef: f, currentElement: m } = M(), v = qo(m);
    ga();
    const g = ge(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), b = E(0), x = E(g.value);
    function k(S) {
      const I = Lp(g.value, S);
      O(S, I);
    }
    function B(S) {
      O(S, b.value);
    }
    function D() {
      const S = x.value[b.value];
      g.value[b.value] !== S && n("valueCommit", Ol(g.value));
    }
    function O(S, I, { commit: F } = { commit: !1 }) {
      var T;
      const L = Kp(l.value), R = jp(Math.round((S - a.value) / l.value) * l.value + a.value, L), q = Lo(R, a.value, r.value), H = Rp(g.value, q, I);
      if (Np(H, i.value * l.value)) {
        b.value = H.indexOf(q);
        const te = String(H) !== String(g.value);
        te && F && n("valueCommit", H), te && ((T = A.value[b.value]) == null || T.focus(), g.value = H);
      }
    }
    const A = E([]);
    return Gp({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: A,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (S, I) => (h(), N(ke, null, [
      V(s(ha), null, {
        default: y(() => [
          (h(), C(Ne(s(u) === "horizontal" ? Hp : Wp), P(S.$attrs, {
            ref: s(f),
            "as-child": S.asChild,
            as: S.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: S.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (x.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (F) => !s(d) && k(F)),
            onSlideMove: I[2] || (I[2] = (F) => !s(d) && B(F)),
            onSlideEnd: I[3] || (I[3] = (F) => !s(d) && D()),
            onHomeKeyDown: I[4] || (I[4] = (F) => !s(d) && O(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (F) => !s(d) && O(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (F, T) => {
              if (!s(d)) {
                const L = s(Ms).includes(F.key) || F.shiftKey && s(Rs).includes(F.key) ? 10 : 1, R = b.value, q = s(g)[R], H = s(l) * L * T;
                O(q + H, R, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              _(S.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(v) ? (h(!0), N(ke, { key: 0 }, kt(s(g), (F, T) => (h(), N("input", {
        key: T,
        value: F,
        type: "number",
        style: { display: "none" },
        name: S.name ? S.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, Up))), 128)) : pe("", !0)
    ], 64));
  }
}), Yp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = en(), n = Ls(), { forwardRef: a, currentElement: r } = M(), l = $(() => {
      var m, v;
      return (v = (m = o.modelValue) == null ? void 0 : m.value) == null ? void 0 : v[t.index];
    }), i = $(() => l.value === void 0 ? 0 : Is(l.value, o.min.value ?? 0, o.max.value ?? 100)), u = $(() => {
      var m, v;
      return Fp(t.index, ((v = (m = o.modelValue) == null ? void 0 : m.value) == null ? void 0 : v.length) ?? 0);
    }), d = ls(r), c = $(() => d[n.size].value), p = $(() => c.value ? Vp(c.value, i.value, n.direction) : 0), f = oa();
    return le(() => {
      o.thumbElements.value.push(r.value);
    }), Ye(() => {
      const m = o.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      o.thumbElements.value.splice(m, 1);
    }), (m, v) => (h(), C(s(Qo), null, {
      default: y(() => [
        V(s(K), P(m.$attrs, {
          ref: s(a),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: s(o).disabled.value ? void 0 : 0,
          "aria-label": m.$attrs["aria-label"] || u.value,
          "data-disabled": s(o).disabled.value ? "" : void 0,
          "data-orientation": s(o).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": s(o).min.value,
          "aria-valuemax": s(o).max.value,
          "aria-orientation": s(o).orientation.value,
          "as-child": m.asChild,
          as: m.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [s(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !s(f) && l.value === void 0 ? "none" : void 0
          },
          onFocus: v[0] || (v[0] = () => {
            s(o).valueIndexToChangeRef.value = m.index;
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
}), Xp = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: o } = ya(), { forwardRef: n, currentElement: a } = M(), r = $(() => a.value ? o().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(Yp, P({ ref: s(n) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Zp = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = en();
    return M(), (o, n) => (h(), C(s(K), {
      "as-child": o.asChild,
      as: o.as,
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Jp = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = en(), o = Ls();
    M();
    const n = $(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => Is(u, t.min.value, t.max.value)
      );
    }), a = $(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), r = $(() => 100 - Math.max(...n.value));
    return (l, i) => (h(), C(s(K), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: Ot({
        [s(o).startEdge]: `${a.value}%`,
        [s(o).endEdge]: `${r.value}%`
      })
    }, {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
function Qp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Qp();
const ef = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [tf, of] = ne("SwitchRoot"), nf = /* @__PURE__ */ w({
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
    const o = e, n = t, { disabled: a } = fe(o), r = ge(o, "checked", n, {
      defaultValue: o.defaultChecked,
      passive: o.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = M(), d = qo(u), c = $(() => {
      var p;
      return o.id && u.value ? (p = document.querySelector(`[for="${o.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return of({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, f) => (h(), N(ke, null, [
      V(s(K), P(p.$attrs, {
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
        onKeydown: _t($e(l, ["prevent"]), ["enter"])
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
      }, null, 8, ef)) : pe("", !0)
    ], 64));
  }
}), af = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = tf();
    return M(), (o, n) => {
      var a;
      return h(), C(s(K), {
        "data-state": (a = s(t).checked) != null && a.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": o.asChild,
        as: o.as
      }, {
        default: y(() => [
          _(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [ka, rf] = ne("TabsRoot"), sf = /* @__PURE__ */ w({
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
    const o = e, n = t, { orientation: a, dir: r } = fe(o), l = vt(r);
    M();
    const i = ge(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), u = E();
    return rf({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: o.activationMode,
      baseId: _e(void 0, "radix-vue-tabs"),
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
}), lf = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: o } = fe(t), { forwardRef: n, currentElement: a } = M(), r = ka();
    return r.tabsList = a, (l, i) => (h(), C(s(xs), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(o)
    }, {
      default: y(() => [
        V(s(K), {
          ref: s(n),
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
function Ns(e, t) {
  return `${e}-trigger-${t}`;
}
function Ks(e, t) {
  return `${e}-content-${t}`;
}
const uf = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o } = M(), n = ka(), a = $(() => Ns(n.baseId, t.value)), r = $(() => Ks(n.baseId, t.value)), l = $(() => t.value === n.modelValue.value), i = E(l.value);
    return le(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), C(s(Fe), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        V(s(K), {
          id: r.value,
          ref: s(o),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": s(n).orientation.value,
          "aria-labelledby": a.value,
          hidden: !c.value,
          tabindex: "0",
          style: Ot({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? _(u.$slots, "default", { key: 0 }) : pe("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), df = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: o } = M(), n = ka(), a = $(() => Ns(n.baseId, t.value)), r = $(() => Ks(n.baseId, t.value)), l = $(() => t.value === n.modelValue.value);
    return (i, u) => (h(), C(s(cc), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        V(s(K), {
          id: a.value,
          ref: s(o),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": l.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": l.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": s(n).orientation.value,
          onMousedown: u[0] || (u[0] = $e((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = _t((d) => s(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = s(n).activationMode !== "manual";
            !l.value && !i.disabled && d && s(n).changeModelValue(i.value);
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
}), [tn, cf] = ne("ToastProvider"), pf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: o, duration: n, swipeDirection: a, swipeThreshold: r } = fe(t), l = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return cf({
      label: o,
      duration: n,
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
}), ff = "toast.swipeStart", mf = "toast.swipeMove", vf = "toast.swipeCancel", gf = "toast.swipeEnd", In = "toast.viewportPause", Mn = "toast.viewportResume";
function Eo(e, t, o) {
  const n = o.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function rr(e, t, o = 0) {
  const n = Math.abs(e.x), a = Math.abs(e.y), r = n > a;
  return t === "left" || t === "right" ? r && n > o : !r && a > o;
}
function hf(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function js(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), hf(o)) {
      const n = o.ariaHidden || o.hidden || o.style.display === "none", a = o.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (a) {
          const r = o.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...js(o));
    }
  }), t;
}
const yf = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = tn(), o = eu(1e3), n = E(!1);
    return os(() => {
      n.value = !0;
    }), (a, r) => s(o) || n.value ? (h(), C(s(xo), { key: 0 }, {
      default: y(() => [
        Se(De(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : pe("", !0);
  }
}), [bf, wf] = ne("ToastRoot"), xf = /* @__PURE__ */ w({
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
    const o = e, n = t, { forwardRef: a, currentElement: r } = M(), l = tn(), i = E(null), u = E(null), d = $(
      () => typeof o.duration == "number" ? o.duration : l.duration.value
    ), c = E(0), p = E(d.value), f = E(0), m = E(d.value), v = os(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - k, 0);
    }, { fpsLimit: 60 });
    function g(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || Ze && (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(b, k));
    }
    function b() {
      var k, B;
      (k = r.value) != null && k.contains(Ce()) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, n("close");
    }
    const x = $(() => r.value ? js(r.value) : null);
    if (o.type && !["foreground", "background"].includes(o.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return xe((k) => {
      const B = l.viewport.value;
      if (B) {
        const D = () => {
          g(p.value), v.resume(), n("resume");
        }, O = () => {
          const A = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - A, window.clearTimeout(f.value), v.pause(), n("pause");
        };
        return B.addEventListener(In, O), B.addEventListener(Mn, D), () => {
          B.removeEventListener(In, O), B.removeEventListener(Mn, D);
        };
      }
    }), ee(() => [o.open, d.value], () => {
      p.value = d.value, o.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), ta("Escape", (k) => {
      n("escapeKeyDown", k), k.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), le(() => {
      l.onToastAdd();
    }), Ye(() => {
      l.onToastRemove();
    }), wf({ onClose: b }), (k, B) => (h(), N(ke, null, [
      x.value ? (h(), C(yf, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Se(De(x.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : pe("", !0),
      s(l).viewport.value ? (h(), C(No, {
        key: 1,
        to: s(l).viewport.value
      }, [
        V(s(K), P({
          ref: s(a),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, k.$attrs, {
          as: k.as,
          "as-child": k.asChild,
          "data-state": k.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = $e((D) => {
            i.value = { x: D.clientX, y: D.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (D) => {
            if (!i.value) return;
            const O = D.clientX - i.value.x, A = D.clientY - i.value.y, S = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), F = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, T = I ? F(0, O) : 0, L = I ? 0 : F(0, A), R = D.pointerType === "touch" ? 10 : 2, q = { x: T, y: L }, H = { originalEvent: D, delta: q };
            S ? (u.value = q, s(Eo)(s(mf), (te) => n("swipeMove", te), H)) : s(rr)(q, s(l).swipeDirection.value, R) ? (u.value = q, s(Eo)(s(ff), (te) => n("swipeStart", te), H), D.target.setPointerCapture(D.pointerId)) : (Math.abs(O) > R || Math.abs(A) > R) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (D) => {
            const O = u.value, A = D.target;
            if (A.hasPointerCapture(D.pointerId) && A.releasePointerCapture(D.pointerId), u.value = null, i.value = null, O) {
              const S = D.currentTarget, I = { originalEvent: D, delta: O };
              s(rr)(O, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(Eo)(s(gf), (F) => n("swipeEnd", F), I) : s(Eo)(s(vf), (F) => n("swipeCancel", F), I), S == null || S.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(k.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : pe("", !0)
    ], 64));
  }
}), _f = /* @__PURE__ */ w({
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
    const o = e, n = t, { forwardRef: a } = M(), r = ge(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    return (l, i) => (h(), C(s(Fe), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        V(xf, P({
          ref: s(a),
          open: s(r),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = !1),
          onPause: i[1] || (i[1] = (u) => n("pause")),
          onResume: i[2] || (i[2] = (u) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
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
}), Hs = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, o) => (h(), C(s(K), {
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
}), Ws = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = bf(), { forwardRef: n } = M();
    return (a, r) => (h(), C(Hs, { "as-child": "" }, {
      default: y(() => [
        V(s(K), P(t, {
          ref: s(n),
          type: a.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => s(o).onClose())
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
}), Cf = /* @__PURE__ */ w({
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
    return (o, n) => o.altText ? (h(), C(Hs, {
      key: 0,
      "alt-text": o.altText,
      "as-child": ""
    }, {
      default: y(() => [
        V(Ws, {
          ref: s(t),
          as: o.as,
          "as-child": o.asChild
        }, {
          default: y(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : pe("", !0);
  }
}), sr = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const o = t, n = tn();
    return (a, r) => (h(), C(s(xo), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (l) => {
        var i;
        const u = l.relatedTarget;
        !((i = s(n).viewport.value) != null && i.contains(u)) && o("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Bf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: o, label: n } = fe(t), { forwardRef: a, currentElement: r } = M(), { createCollection: l } = Gt(), i = l(r), u = tn(), d = $(() => u.toastCount.value > 0), c = E(), p = E(), f = $(() => o.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    ta(o.value, () => {
      r.value.focus();
    }), le(() => {
      u.onViewportChange(r.value);
    }), xe((v) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const O = new CustomEvent(In);
            g.dispatchEvent(O), u.isClosePausedRef.value = !0;
          }
        }, x = () => {
          if (u.isClosePausedRef.value) {
            const O = new CustomEvent(Mn);
            g.dispatchEvent(O), u.isClosePausedRef.value = !1;
          }
        }, k = (O) => {
          !g.contains(O.relatedTarget) && x();
        }, B = () => {
          g.contains(Ce()) || x();
        }, D = (O) => {
          var A, S, I;
          const F = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !F) {
            const T = Ce(), L = O.shiftKey;
            if (O.target === g && L) {
              (A = c.value) == null || A.focus();
              return;
            }
            const R = m({ tabbingDirection: L ? "backwards" : "forwards" }), q = R.findIndex((H) => H === T);
            Ao(R.slice(q + 1)) ? O.preventDefault() : L ? (S = c.value) == null || S.focus() : (I = p.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", k), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", B), g.addEventListener("keydown", D), window.addEventListener("blur", b), window.addEventListener("focus", x), v(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", B), g.removeEventListener("keydown", D), window.removeEventListener("blur", b), window.removeEventListener("focus", x);
        });
      }
    });
    function m({ tabbingDirection: v }) {
      const g = i.value.map((b) => {
        const x = [b, ...da(b)];
        return v === "forwards" ? x : x.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (h(), C(s(Yu), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", f.value) : s(n)(f.value),
      tabindex: "-1",
      style: Ot({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), C(sr, {
          key: 0,
          ref: (b) => {
            c.value = s(Re)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = m({
              tabbingDirection: "forwards"
            });
            s(Ao)(b);
          })
        }, null, 512)) : pe("", !0),
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
        d.value ? (h(), C(sr, {
          key: 1,
          ref: (b) => {
            p.value = s(Re)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = m({
              tabbingDirection: "backwards"
            });
            s(Ao)(b);
          })
        }, null, 512)) : pe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), kf = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(K), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $f = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), C(s(K), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Us = "tooltip.open", [$a, Sf] = ne("TooltipProvider"), Of = /* @__PURE__ */ w({
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
    const t = e, { delayDuration: o, skipDelayDuration: n, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = fe(t);
    M();
    const u = E(!0), d = E(!1), { start: c, stop: p } = ea(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return Sf({
      isOpenDelayed: u,
      delayDuration: o,
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
    }), (f, m) => _(f.$slots, "default");
  }
}), [on, Tf] = ne("TooltipRoot"), Df = /* @__PURE__ */ w({
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
    const o = e, n = t;
    M();
    const a = $a(), r = $(() => o.disableHoverableContent ?? a.disableHoverableContent.value), l = $(() => o.disableClosingTrigger ?? a.disableClosingTrigger.value), i = $(() => o.disabled ?? a.disabled.value), u = $(() => o.delayDuration ?? a.delayDuration.value), d = $(() => o.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = ge(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    ee(c, (B) => {
      a.onClose && (B ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Us))) : a.onClose());
    });
    const p = E(!1), f = E(), m = $(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: g } = ea(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), p.value = !1, c.value = !0;
    }
    function x() {
      g(), c.value = !1;
    }
    function k() {
      v();
    }
    return Tf({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: f,
      onTriggerChange(B) {
        f.value = B;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? k() : b();
      },
      onTriggerLeave() {
        r.value ? x() : g();
      },
      onOpen: b,
      onClose: x,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (B, D) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(B.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), Ef = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = on(), n = $a();
    o.contentId || (o.contentId = _e(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = M(), l = E(!1), i = E(!1), u = $(() => o.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
      blur: v
    });
    le(() => {
      o.onTriggerChange(r.value);
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
      b.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (o.onTriggerEnter(), i.value = !0);
    }
    function f() {
      o.onTriggerLeave(), i.value = !1;
    }
    function m(b) {
      var x, k;
      l.value || o.ignoreNonKeyboardFocus.value && !((k = (x = b.target).matches) != null && k.call(x, ":focus-visible")) || o.onOpen();
    }
    function v() {
      o.onClose();
    }
    function g() {
      o.disableClosingTrigger.value || o.onClose();
    }
    return (b, x) => (h(), C(s(wo), { "as-child": "" }, {
      default: y(() => [
        V(s(K), P({
          ref: s(a),
          "aria-describedby": s(o).open.value ? s(o).contentId : void 0,
          "data-state": s(o).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, wl(u.value)), {
          default: y(() => [
            _(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Gs = /* @__PURE__ */ w({
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
    const o = e, n = t, a = on(), { forwardRef: r } = M(), l = Or(), i = $(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = $(() => {
      var c;
      if (o.ariaLabel)
        return o.ariaLabel;
      let p = "";
      function f(m) {
        typeof m.children == "string" && m.type !== Dr ? p += m.children : Array.isArray(m.children) && m.children.forEach((v) => f(v));
      }
      return (c = i.value) == null || c.forEach((m) => f(m)), p;
    }), d = $(() => {
      const { ariaLabel: c, ...p } = o;
      return p;
    });
    return le(() => {
      jt(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), jt(window, Us, a.onClose);
    }), (c, p) => (h(), C(s(Yt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var m;
        s(a).disableClosingTrigger.value && (m = s(a).trigger.value) != null && m.contains(f.target) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = $e(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => s(a).onClose())
    }, {
      default: y(() => [
        V(s(Ht), P({
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
            V(s(xo), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Se(De(u.value), 1)
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
}), Pf = /* @__PURE__ */ w({
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
    const t = Be(e), { forwardRef: o, currentElement: n } = M(), { trigger: a, onClose: r } = on(), l = $a(), { isPointerInTransit: i, onPointerExit: u } = fu(a, n);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), C(Gs, P({ ref: s(o) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Af = /* @__PURE__ */ w({
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
    const o = e, n = t, a = on(), r = Y(o, n), { forwardRef: l } = M();
    return (i, u) => (h(), C(s(Fe), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), C(Ne(s(a).disableHoverableContent.value ? Gs : Pf), P({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), If = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(qt), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eo = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, Mf = {}, Rf = { class: "h-full bg-background dark:text-white" };
function Ff(e, t) {
  return h(), N("div", Rf, [
    _(e.$slots, "default")
  ]);
}
const Dg = /* @__PURE__ */ eo(Mf, [["render", Ff]]), Lf = {}, Vf = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function zf(e, t) {
  return h(), N("header", Vf, [
    _(e.$slots, "default")
  ]);
}
const Eg = /* @__PURE__ */ eo(Lf, [["render", zf]]), Nf = {}, Kf = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function jf(e, t) {
  return h(), N("main", Kf, [
    _(e.$slots, "default")
  ]);
}
const Pg = /* @__PURE__ */ eo(Nf, [["render", jf]]), Hf = {};
function Wf(e, t) {
  return _(e.$slots, "default");
}
const Ag = /* @__PURE__ */ eo(Hf, [["render", Wf]]), Uf = {}, Gf = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, qf = { class: "gap-y-5 overflow-y-auto" };
function Yf(e, t) {
  return h(), N("div", Gf, [
    ae("div", qf, [
      _(e.$slots, "default")
    ])
  ]);
}
const Ig = /* @__PURE__ */ eo(Uf, [["render", Yf]]), Xf = {};
function Zf(e, t) {
  return _(e.$slots, "default");
}
const Mg = /* @__PURE__ */ eo(Xf, [["render", Zf]]);
function Jf(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ae("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Qf(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ae("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function lr(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ae("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function em(e, t) {
  return h(), N("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ae("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const tm = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, Rg = /* @__PURE__ */ w({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, o) => (h(), N("button", tm, [
      o[0] || (o[0] = ae("span", { class: "sr-only" }, "Open sidebar", -1)),
      V(s(Jf), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), om = 3, nm = 1e6, ot = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let _n = 0;
function am() {
  return _n = (_n + 1) % Number.MAX_VALUE, _n.toString();
}
const Cn = /* @__PURE__ */ new Map();
function ir(e) {
  if (Cn.has(e)) return;
  const t = setTimeout(() => {
    Cn.delete(e), so({
      type: ot.REMOVE_TOAST,
      toastId: e
    });
  }, nm);
  Cn.set(e, t);
}
const Le = E({
  toasts: []
});
function so(e) {
  switch (e.type) {
    case ot.ADD_TOAST:
      Le.value.toasts = [e.toast, ...Le.value.toasts].slice(0, om);
      break;
    case ot.UPDATE_TOAST:
      Le.value.toasts = Le.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case ot.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? ir(t) : Le.value.toasts.forEach((o) => {
        ir(o.id);
      }), Le.value.toasts = Le.value.toasts.map(
        (o) => o.id === t || t === void 0 ? {
          ...o,
          open: !1
        } : o
      );
      break;
    }
    case ot.REMOVE_TOAST:
      e.toastId === void 0 ? Le.value.toasts = [] : Le.value.toasts = Le.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function qs() {
  return {
    toasts: $(() => Le.value.toasts),
    toast: rm,
    dismiss: (e) => so({ type: ot.DISMISS_TOAST, toastId: e })
  };
}
function rm(e) {
  const t = am(), o = (a) => so({
    type: ot.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), n = () => so({ type: ot.DISMISS_TOAST, toastId: t });
  return so({
    type: ot.ADD_TOAST,
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
const sm = { class: "flex items-start space-x-3" }, lm = { class: "grid gap-1" }, im = { class: "font-bold" }, um = /* @__PURE__ */ w({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = qs();
    return (o, n) => (h(), C(s(Qm), null, {
      default: y(() => [
        (h(!0), N(ke, null, kt(s(t), (a) => (h(), C(s(Km), P({
          key: a.id,
          ref_for: !0
        }, a, { class: "mt-1.5" }), {
          default: y(() => [
            ae("div", sm, [
              a.icon ? (h(), C(Ne(a.icon), {
                key: 0,
                class: oe(["h-6 w-6", a.iconClasses])
              }, null, 8, ["class"])) : pe("", !0),
              ae("div", lm, [
                a.title ? (h(), C(s(Jm), { key: 0 }, {
                  default: y(() => [
                    Se(De(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : pe("", !0),
                a.description ? (h(), N(ke, { key: 1 }, [
                  El(a.description) ? (h(), C(s(cr), { key: 0 }, {
                    default: y(() => [
                      (h(), C(Ne(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), N(ke, { key: 1 }, kt(a.description, (r, l) => (h(), N("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), N(ke, { key: 0 }, [
                      Se(De(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), N(ke, { key: 1 }, [
                      ae("span", im, De(l), 1),
                      Se(": " + De(r), 1)
                    ], 64)) : (h(), N(ke, { key: 2 }, [
                      Se(De(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(cr), { key: 2 }, {
                    default: y(() => [
                      Se(De(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : pe("", !0),
                V(s(Zm))
              ])
            ]),
            (h(), C(Ne(a.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        V(s(jm))
      ]),
      _: 1
    }));
  }
});
function Ys(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (o = Ys(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function Xs() {
  for (var e, t, o = 0, n = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (t = Ys(e)) && (n && (n += " "), n += t);
  return n;
}
const Sa = "-", dm = (e) => {
  const t = pm(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Sa);
      return i[0] === "" && i.length !== 1 && i.shift(), Zs(i, t) || cm(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = o[l] || [];
      return i && n[l] ? [...u, ...n[l]] : u;
    }
  };
}, Zs = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], n = t.nextPart.get(o), a = n ? Zs(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Sa);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, ur = /^\[(.+)\]$/, cm = (e) => {
  if (ur.test(e)) {
    const t = ur.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, pm = (e) => {
  const {
    theme: t,
    prefix: o
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return mm(Object.entries(e.classGroups), o).forEach(([r, l]) => {
    Rn(l, n, r, t);
  }), n;
}, Rn = (e, t, o, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : dr(t, a);
      r.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (fm(a)) {
        Rn(a(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Rn(l, dr(t, r), o, n);
    });
  });
}, dr = (e, t) => {
  let o = e;
  return t.split(Sa).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, fm = (e) => e.isThemeGetter, mm = (e, t) => t ? e.map(([o, n]) => {
  const a = n.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [o, a];
}) : e, vm = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (r, l) => {
    o.set(r, l), t++, t > e && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let l = o.get(r);
      if (l !== void 0)
        return l;
      if ((l = n.get(r)) !== void 0)
        return a(r, l), l;
    },
    set(r, l) {
      o.has(r) ? o.set(r, l) : a(r, l);
    }
  };
}, Js = "!", gm = (e) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = e, n = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let b = 0; b < i.length; b++) {
      let x = i[b];
      if (d === 0) {
        if (x === a && (n || i.slice(b, b + r) === t)) {
          u.push(i.slice(c, b)), c = b + r;
          continue;
        }
        if (x === "/") {
          p = b;
          continue;
        }
      }
      x === "[" ? d++ : x === "]" && d--;
    }
    const f = u.length === 0 ? i : i.substring(c), m = f.startsWith(Js), v = m ? f.substring(1) : f, g = p && p > c ? p - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return o ? (i) => o({
    className: i,
    parseClassName: l
  }) : l;
}, hm = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let o = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, ym = (e) => ({
  cache: vm(e.cacheSize),
  parseClassName: gm(e),
  ...dm(e)
}), bm = /\s+/, wm = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(bm);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = o(d);
    let v = !!m, g = n(v ? f.substring(0, m) : f);
    if (!g) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(f), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = hm(c).join(":"), x = p ? b + Js : b, k = x + g;
    if (r.includes(k))
      continue;
    r.push(k);
    const B = a(g, v);
    for (let D = 0; D < B.length; ++D) {
      const O = B[D];
      r.push(x + O);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function xm() {
  let e = 0, t, o, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Qs(t)) && (n && (n += " "), n += o);
  return n;
}
const Qs = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Qs(e[n])) && (o && (o += " "), o += t);
  return o;
};
function _m(e, ...t) {
  let o, n, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return o = ym(d), n = o.cache.get, a = o.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = n(u);
    if (d)
      return d;
    const c = wm(u, o);
    return a(u, c), c;
  }
  return function() {
    return r(xm.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, el = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cm = /^\d+\/\d+$/, Bm = /* @__PURE__ */ new Set(["px", "full", "screen"]), km = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $m = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Om = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Tm = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, tt = (e) => Nt(e) || Bm.has(e) || Cm.test(e), it = (e) => to(e, "length", Fm), Nt = (e) => !!e && !Number.isNaN(Number(e)), Bn = (e) => to(e, "number", Nt), no = (e) => !!e && Number.isInteger(Number(e)), Dm = (e) => e.endsWith("%") && Nt(e.slice(0, -1)), Z = (e) => el.test(e), ut = (e) => km.test(e), Em = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Pm = (e) => to(e, Em, tl), Am = (e) => to(e, "position", tl), Im = /* @__PURE__ */ new Set(["image", "url"]), Mm = (e) => to(e, Im, Vm), Rm = (e) => to(e, "", Lm), ao = () => !0, to = (e, t, o) => {
  const n = el.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, Fm = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $m.test(e) && !Sm.test(e)
), tl = () => !1, Lm = (e) => Om.test(e), Vm = (e) => Tm.test(e), zm = () => {
  const e = ve("colors"), t = ve("spacing"), o = ve("blur"), n = ve("brightness"), a = ve("borderColor"), r = ve("borderRadius"), l = ve("borderSpacing"), i = ve("borderWidth"), u = ve("contrast"), d = ve("grayscale"), c = ve("hueRotate"), p = ve("invert"), f = ve("gap"), m = ve("gradientColorStops"), v = ve("gradientColorStopPositions"), g = ve("inset"), b = ve("margin"), x = ve("opacity"), k = ve("padding"), B = ve("saturate"), D = ve("scale"), O = ve("sepia"), A = ve("skew"), S = ve("space"), I = ve("translate"), F = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", Z, t], R = () => [Z, t], q = () => ["", tt, it], H = () => ["auto", Nt, Z], te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], se = () => ["solid", "dashed", "dotted", "double", "none"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", Z], J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [Nt, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ao],
      spacing: [tt, it],
      blur: ["none", "", ut, Z],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ut, Z],
      borderSpacing: R(),
      borderWidth: q(),
      contrast: Q(),
      grayscale: j(),
      hueRotate: Q(),
      invert: j(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Dm, it],
      inset: L(),
      margin: L(),
      opacity: Q(),
      padding: R(),
      saturate: Q(),
      scale: Q(),
      sepia: j(),
      skew: Q(),
      space: R(),
      translate: R()
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
        "break-after": J()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": J()
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
        object: [...te(), Z]
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
        z: ["auto", no, Z]
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
        flex: ["1", "auto", "initial", "none", Z]
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
        order: ["first", "last", "none", no, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ao]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", no, Z]
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
        "grid-rows": [ao]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [no, Z]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ao]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Nt, Bn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", tt, Z]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: [...se(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", tt, it]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", tt, Z]
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
        indent: R()
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
        "bg-opacity": [x]
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
        bg: [...te(), Am]
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
        bg: ["auto", "cover", "contain", Pm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Mm]
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
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...se(), "hidden"]
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: se()
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
        outline: ["", ...se()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [tt, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [tt, it]
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [tt, it]
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
        shadow: ["", "inner", "none", ut, Rm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ao]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
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
        "backdrop-opacity": [x]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
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
        delay: Q()
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
        rotate: [no, Z]
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
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        stroke: [tt, it, Bn]
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
}, Nm = /* @__PURE__ */ _m(zm);
function z(...e) {
  return Nm(Xs(e));
}
const Km = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(_f), P(s(r), {
      class: s(z)(s(ev)({ variant: l.variant }), o.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), jm = /* @__PURE__ */ w({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Bf), P(o.value, {
      class: s(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Fg = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Cf), P(o.value, {
      class: s(z)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function Hm(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function Wm(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function Um(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function ol(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function nl(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function Gm(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function qm(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function nn(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function Ym(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function Xm(e, t) {
  return h(), N("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ae("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const Zm = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Ws), P(o.value, {
      class: s(z)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        V(s(nn), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Jm = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(kf), P(o.value, {
      class: s(z)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cr = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s($f), P({
      class: s(z)("text-sm opacity-90", t.class)
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qm = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(pf), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, fr = Xs, Co = (e, t) => (o) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return fr(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = o == null ? void 0 : o[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const f = pr(c) || pr(p);
    return a[d][f];
  }), i = o && Object.entries(o).reduce((d, c) => {
    let [p, f] = c;
    return f === void 0 || (d[p] = f), d;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, c) => {
    let { class: p, className: f, ...m } = c;
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
      p,
      f
    ] : d;
  }, []);
  return fr(e, l, u, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, ev = Co(
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
), { toast: Po } = qs();
function tv() {
  return {
    info: (e) => {
      Po({
        icon: em,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Po({
        icon: Qf,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Po({
        icon: lr,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Po({
        icon: lr,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const Lg = /* @__PURE__ */ w({
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
      error: r
    } = tv();
    return ee(
      () => t.info,
      (l) => {
        l && o(t.info);
      },
      {
        immediate: !0
      }
    ), ee(
      () => t.success,
      (l) => {
        l && n(t.success);
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
    ), (l, i) => (h(), C(s(um)));
  }
}), ov = { class: "flex items-center justify-between space-y-2" }, nv = { class: "flex items-center space-x-2" }, Vg = /* @__PURE__ */ w({
  __name: "Heading",
  props: {
    as: { default: "h2" }
  },
  setup(e) {
    return (t, o) => (h(), N("div", ov, [
      (h(), C(Ne(t.as), { class: "text-3xl font-bold tracking-tight" }, {
        default: y(() => [
          _(t.$slots, "default")
        ]),
        _: 3
      })),
      ae("div", nv, [
        _(t.$slots, "actions")
      ])
    ]));
  }
}), av = /* @__PURE__ */ w({
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
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Lu), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zg = /* @__PURE__ */ w({
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
    const a = Y(e, t);
    return (r, l) => (h(), C(av, U(G(s(a))), {
      default: y(() => [
        (h(!0), N(ke, null, kt(r.content, (i, u) => (h(), C(s(sv), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            V(s(lv), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  Se(De(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            V(s(rv), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  Se(De(i.content), 1)
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
}), rv = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Nu), P(o.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        ae("div", {
          class: oe(s(z)("pb-4 pt-0", t.class))
        }, [
          _(n.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), sv = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(zu), P(s(n), {
      class: s(z)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lv = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Ku), { class: "flex" }, {
      default: y(() => [
        V(s(ju), P(o.value, {
          class: s(z)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(n.$slots, "default"),
            _(n.$slots, "icon", {}, () => [
              V(s(nl), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ng = /* @__PURE__ */ w({
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
    const a = Y(e, t);
    return (r, l) => (h(), C(s(dv), null, {
      default: y(() => [
        V(s(iv), U(G(s(a))), {
          default: y(() => [
            V(s(cv), {
              class: oe(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            V(s(uv), U(G(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  Se(De(r.tooltip), 1)
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
}), iv = /* @__PURE__ */ w({
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
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Df), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uv = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(If), null, {
      default: y(() => [
        V(s(Af), P({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
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
}), dv = /* @__PURE__ */ w({
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
    return (o, n) => (h(), C(s(Of), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cv = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Ef), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kg = /* @__PURE__ */ w({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(vd), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jg = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(gd), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hg = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(hd), null, {
      default: y(() => [
        V(s(xd), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(wd), P(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
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
}), Wg = /* @__PURE__ */ w({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), Ug = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Cd), P(o.value, {
      class: s(z)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gg = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Bd), P(o.value, {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qg = /* @__PURE__ */ w({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), al = /* @__PURE__ */ w({
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
    return (o, n) => (h(), C(s(K), {
      as: o.as,
      "as-child": o.asChild,
      class: oe(s(z)(s(Oa)({ variant: o.variant, size: o.size }), t.class))
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Oa = Co(
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
), Yg = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(kd), P(o.value, {
      class: s(z)(s(Oa)(), t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xg = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(_d), P(o.value, {
      class: s(z)(s(Oa)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zg = /* @__PURE__ */ w({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Sd), {
      class: oe(s(z)(s(pv)({ size: o.size, shape: o.shape }), t.class))
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Jg = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Td), P(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), Qg = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Dd), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pv = Co(
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
), e0 = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)(s(fv)({ variant: o.variant }), t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), fv = Co(
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
), t0 = /* @__PURE__ */ w({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), o0 = /* @__PURE__ */ w({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("p-6 pt-0", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), n0 = /* @__PURE__ */ w({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("p", {
      class: oe(s(z)("text-sm text-muted-foreground", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), a0 = /* @__PURE__ */ w({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex items-center p-6 pt-0", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), r0 = /* @__PURE__ */ w({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), s0 = /* @__PURE__ */ w({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("h3", {
      class: oe(s(z)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
});
var mr;
const mv = typeof window < "u", vv = (e) => typeof e < "u", gv = (e) => typeof e == "function";
mv && ((mr = window == null ? void 0 : window.navigator) != null && mr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function hv(e) {
  return e;
}
function yv(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return Nn(t, r), r;
  }, () => zn(t)];
}
function bv(e) {
  return JSON.parse(JSON.stringify(e));
}
const vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gr = "__vueuse_ssr_handlers__";
vr[gr] = vr[gr] || {};
var hr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hr || (hr = {}));
var wv = Object.defineProperty, yr = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, _v = Object.prototype.propertyIsEnumerable, br = (e, t, o) => t in e ? wv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Cv = (e, t) => {
  for (var o in t || (t = {}))
    xv.call(t, o) && br(e, o, t[o]);
  if (yr)
    for (var o of yr(t))
      _v.call(t, o) && br(e, o, t[o]);
  return e;
};
const Bv = {
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
Cv({
  linear: hv
}, Bv);
function rl(e, t, o, n = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = n, f = mt(), m = o || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let v = d;
  v = d || v || `update:${t.toString()}`;
  const g = (x) => i ? gv(i) ? i(x) : bv(x) : x, b = () => vv(e[t]) ? g(e[t]) : p;
  if (u) {
    const x = b(), k = E(x);
    return ee(() => e[t], (B) => k.value = g(B)), ee(k, (B) => {
      (B !== e[t] || c) && m(v, B);
    }, { deep: c }), k;
  } else
    return $({
      get() {
        return b();
      },
      set(x) {
        m(v, x);
      }
    });
}
function kv(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function wr(e) {
  return kv(e) || Array.isArray(e);
}
function $v() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ta(e, t) {
  const o = Object.keys(e), n = Object.keys(t);
  if (o.length !== n.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : o.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !wr(i) || !wr(u) ? i === u : Ta(i, u);
  });
}
function xr(e) {
  return e.concat().sort((t, o) => t.name > o.name ? 1 : -1).map((t) => t.options);
}
function Sv(e, t) {
  if (e.length !== t.length) return !1;
  const o = xr(e), n = xr(t);
  return o.every((a, r) => {
    const l = n[r];
    return Ta(a, l);
  });
}
function Da(e) {
  return typeof e == "number";
}
function Fn(e) {
  return typeof e == "string";
}
function an(e) {
  return typeof e == "boolean";
}
function _r(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function he(e) {
  return Math.abs(e);
}
function Ea(e) {
  return Math.sign(e);
}
function lo(e, t) {
  return he(e - t);
}
function Ov(e, t) {
  if (e === 0 || t === 0 || he(e) <= he(t)) return 0;
  const o = lo(he(e), he(t));
  return he(o / e);
}
function Tv(e) {
  return Math.round(e * 100) / 100;
}
function fo(e) {
  return mo(e).map(Number);
}
function Ke(e) {
  return e[Bo(e)];
}
function Bo(e) {
  return Math.max(0, e.length - 1);
}
function Pa(e, t) {
  return t === Bo(e);
}
function Cr(e, t = 0) {
  return Array.from(Array(e), (o, n) => t + n);
}
function mo(e) {
  return Object.keys(e);
}
function sl(e, t) {
  return [e, t].reduce((o, n) => (mo(n).forEach((a) => {
    const r = o[a], l = n[a], i = _r(r) && _r(l);
    o[a] = i ? sl(r, l) : l;
  }), o), {});
}
function Ln(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Dv(e, t) {
  const o = {
    start: n,
    center: a,
    end: r
  };
  function n() {
    return 0;
  }
  function a(u) {
    return r(u) / 2;
  }
  function r(u) {
    return t - u;
  }
  function l(u, d) {
    return Fn(e) ? o[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function vo() {
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
    return e.push(u), n;
  }
  function o() {
    e = e.filter((a) => a());
  }
  const n = {
    add: t,
    clear: o
  };
  return n;
}
function Ev(e, t, o, n) {
  const a = vo(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function c() {
    m(), a.clear();
  }
  function p(b) {
    if (!u) return;
    l || (l = b, o(), o());
    const x = b - l;
    for (l = b, i += x; i >= r; )
      o(), i -= r;
    const k = i / r;
    n(k), u && (u = t.requestAnimationFrame(p));
  }
  function f() {
    u || (u = t.requestAnimationFrame(p));
  }
  function m() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function v() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: f,
    stop: m,
    update: o,
    render: n
  };
}
function Pv(e, t) {
  const o = t === "rtl", n = e === "y", a = n ? "y" : "x", r = n ? "x" : "y", l = !n && o ? -1 : 1, i = c(), u = p();
  function d(v) {
    const {
      height: g,
      width: b
    } = v;
    return n ? g : b;
  }
  function c() {
    return n ? "top" : o ? "right" : "left";
  }
  function p() {
    return n ? "bottom" : o ? "left" : "right";
  }
  function f(v) {
    return v * l;
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
function St(e = 0, t = 0) {
  const o = he(e - t);
  function n(d) {
    return d < e;
  }
  function a(d) {
    return d > t;
  }
  function r(d) {
    return n(d) || a(d);
  }
  function l(d) {
    return r(d) ? n(d) ? e : t : d;
  }
  function i(d) {
    return o ? d - o * Math.ceil((d - t) / o) : d;
  }
  return {
    length: o,
    max: t,
    min: e,
    constrain: l,
    reachedAny: r,
    reachedMax: a,
    reachedMin: n,
    removeOffset: i
  };
}
function ll(e, t, o) {
  const {
    constrain: n
  } = St(0, e), a = e + 1;
  let r = l(t);
  function l(f) {
    return o ? he((a + f) % a) : n(f);
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
    return ll(e, i(), o);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function Av(e, t, o, n, a, r, l, i, u, d, c, p, f, m, v, g, b, x, k) {
  const {
    cross: B,
    direction: D
  } = e, O = ["INPUT", "SELECT", "TEXTAREA"], A = {
    passive: !1
  }, S = vo(), I = vo(), F = St(50, 225).constrain(m.measure(20)), T = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, R = v ? 43 : 25;
  let q = !1, H = 0, te = 0, se = !1, ce = !1, ue = !1, j = !1;
  function J(W) {
    if (!k) return;
    function ie(Te) {
      (an(k) || k(W, Te)) && ht(Te);
    }
    const we = t;
    S.add(we, "dragstart", (Te) => Te.preventDefault(), A).add(we, "touchmove", () => {
    }, A).add(we, "touchend", () => {
    }).add(we, "touchstart", ie).add(we, "mousedown", ie).add(we, "touchcancel", me).add(we, "contextmenu", me).add(we, "click", Oe, !0);
  }
  function Q() {
    S.clear(), I.clear();
  }
  function Ee() {
    const W = j ? o : t;
    I.add(W, "touchmove", ye, A).add(W, "touchend", me).add(W, "mousemove", ye, A).add(W, "mouseup", me);
  }
  function Ae(W) {
    const ie = W.nodeName || "";
    return O.includes(ie);
  }
  function Pe() {
    return (v ? L : T)[j ? "mouse" : "touch"];
  }
  function We(W, ie) {
    const we = p.add(Ea(W) * -1), Te = c.byDistance(W, !v).distance;
    return v || he(W) < F ? Te : b && ie ? Te * 0.5 : c.byIndex(we.get(), 0).distance;
  }
  function ht(W) {
    const ie = Ln(W, n);
    j = ie, ue = v && ie && !W.buttons && q, q = lo(a.get(), l.get()) >= 2, !(ie && W.button !== 0) && (Ae(W.target) || (se = !0, r.pointerDown(W), d.useFriction(0).useDuration(0), a.set(l), Ee(), H = r.readPoint(W), te = r.readPoint(W, B), f.emit("pointerDown")));
  }
  function ye(W) {
    if (!Ln(W, n) && W.touches.length >= 2) return me(W);
    const we = r.readPoint(W), Te = r.readPoint(W, B), Ue = lo(we, H), Qe = lo(Te, te);
    if (!ce && !j && (!W.cancelable || (ce = Ue > Qe, !ce)))
      return me(W);
    const yt = r.pointerMove(W);
    Ue > g && (ue = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(D(yt)), W.preventDefault();
  }
  function me(W) {
    const we = c.byDistance(0, !1).index !== p.get(), Te = r.pointerUp(W) * Pe(), Ue = We(D(Te), we), Qe = Ov(Te, Ue), yt = R - 10 * Qe, st = x + Qe / 50;
    ce = !1, se = !1, I.clear(), d.useDuration(yt).useFriction(st), u.distance(Ue, !v), j = !1, f.emit("pointerUp");
  }
  function Oe(W) {
    ue && (W.stopPropagation(), W.preventDefault(), ue = !1);
  }
  function be() {
    return se;
  }
  return {
    init: J,
    destroy: Q,
    pointerDown: be
  };
}
function Iv(e, t) {
  let n, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, f) {
    const v = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ln(p, t) ? p : p.touches[0])[v];
  }
  function i(p) {
    return n = p, a = p, l(p);
  }
  function u(p) {
    const f = l(p) - l(a), m = r(p) - r(n) > 170;
    return a = p, m && (n = p), f;
  }
  function d(p) {
    if (!n || !a) return 0;
    const f = l(a) - l(n), m = r(p) - r(n), v = r(p) - r(a) > 170, g = f / m;
    return m && !v && he(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function Mv() {
  function e(o) {
    const {
      offsetTop: n,
      offsetLeft: a,
      offsetWidth: r,
      offsetHeight: l
    } = o;
    return {
      top: n,
      right: a + r,
      bottom: n + l,
      left: a,
      width: r,
      height: l
    };
  }
  return {
    measure: e
  };
}
function Rv(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function Fv(e, t, o, n, a, r, l) {
  const i = [e].concat(n);
  let u, d, c = [], p = !1;
  function f(b) {
    return a.measureSize(l.measure(b));
  }
  function m(b) {
    if (!r) return;
    d = f(e), c = n.map(f);
    function x(k) {
      for (const B of k) {
        if (p) return;
        const D = B.target === e, O = n.indexOf(B.target), A = D ? d : c[O], S = f(D ? e : n[O]);
        if (he(S - A) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((k) => {
      (an(r) || r(b, k)) && x(k);
    }), o.requestAnimationFrame(() => {
      i.forEach((k) => u.observe(k));
    });
  }
  function v() {
    p = !0, u && u.disconnect();
  }
  return {
    init: m,
    destroy: v
  };
}
function Lv(e, t, o, n, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function f() {
    const A = n.get() - e.get(), S = !u;
    let I = 0;
    return S ? (l = 0, o.set(n), e.set(n), I = A) : (o.set(e), l += A / u, l *= d, c += l, e.add(l), I = c - p), i = Ea(I), p = c, O;
  }
  function m() {
    const A = n.get() - t.get();
    return he(A) < 1e-3;
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
  function x() {
    return B(a);
  }
  function k() {
    return D(r);
  }
  function B(A) {
    return u = A, O;
  }
  function D(A) {
    return d = A, O;
  }
  const O = {
    direction: g,
    duration: v,
    velocity: b,
    seek: f,
    settled: m,
    useBaseFriction: k,
    useBaseDuration: x,
    useFriction: D,
    useDuration: B
  };
  return O;
}
function Vv(e, t, o, n, a) {
  const r = a.measure(10), l = a.measure(50), i = St(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(o.get()) || !e.reachedAny(t.get()));
  }
  function c(m) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = he(e[v] - t.get()), b = o.get() - t.get(), x = i.constrain(g / l);
    o.subtract(b * x), !m && he(b) < r && (o.set(e.constrain(o.get())), n.useDuration(25).useBaseFriction());
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
function zv(e, t, o, n, a) {
  const r = St(-t + e, 0), l = p(), i = c(), u = f();
  function d(v, g) {
    return lo(v, g) <= 1;
  }
  function c() {
    const v = l[0], g = Ke(l), b = l.lastIndexOf(v), x = l.indexOf(g) + 1;
    return St(b, x);
  }
  function p() {
    return o.map((v, g) => {
      const {
        min: b,
        max: x
      } = r, k = r.constrain(v), B = !g, D = Pa(o, g);
      return B ? x : D || d(b, k) ? b : d(x, k) ? x : k;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function f() {
    if (t <= e + a) return [r.max];
    if (n === "keepSnaps") return l;
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
function Nv(e, t, o) {
  const n = t[0], a = o ? n - e : Ke(t);
  return {
    limit: St(a, n)
  };
}
function Kv(e, t, o, n) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = St(r, l);
  function d(f) {
    return f === 1 ? u(o.get()) : f === -1 ? i(o.get()) : !1;
  }
  function c(f) {
    if (!d(f)) return;
    const m = e * (f * -1);
    n.forEach((v) => v.add(m));
  }
  return {
    loop: c
  };
}
function jv(e) {
  const {
    max: t,
    length: o
  } = e;
  function n(r) {
    const l = r - t;
    return o ? l / -o : 0;
  }
  return {
    get: n
  };
}
function Hv(e, t, o, n, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = f(), c = m();
  function p() {
    return i(n).map((g) => Ke(g)[l] - g[0][r]).map(he);
  }
  function f() {
    return n.map((g) => o[r] - g[r]).map((g) => -he(g));
  }
  function m() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function Wv(e, t, o, n, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = n, d = c();
  function c() {
    const f = l(r), m = !e || t === "keepSnaps";
    return o.length === 1 ? [r] : m ? f : f.slice(i, u).map((v, g, b) => {
      const x = !g, k = Pa(b, g);
      if (x) {
        const B = Ke(b[0]) + 1;
        return Cr(B);
      }
      if (k) {
        const B = Bo(r) - Ke(b)[0] + 1;
        return Cr(B, Ke(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function Uv(e, t, o, n, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = n;
  function u(v) {
    return v.concat().sort((g, b) => he(g) - he(b))[0];
  }
  function d(v) {
    const g = e ? l(v) : i(v), b = t.map((k, B) => ({
      diff: c(k - g, 0),
      index: B
    })).sort((k, B) => he(k.diff) - he(B.diff)), {
      index: x
    } = b[0];
    return {
      index: x,
      distance: g
    };
  }
  function c(v, g) {
    const b = [v, v + o, v - o];
    if (!e) return v;
    if (!g) return u(b);
    const x = b.filter((k) => Ea(k) === g);
    return x.length ? u(x) : Ke(b) - o;
  }
  function p(v, g) {
    const b = t[v] - a.get(), x = c(b, g);
    return {
      index: v,
      distance: x
    };
  }
  function f(v, g) {
    const b = a.get() + v, {
      index: x,
      distance: k
    } = d(b), B = !e && r(b);
    if (!g || B) return {
      index: x,
      distance: v
    };
    const D = t[x] - k, O = v + c(D, 0);
    return {
      index: x,
      distance: O
    };
  }
  return {
    byDistance: f,
    byIndex: p,
    shortcut: c
  };
}
function Gv(e, t, o, n, a, r, l) {
  function i(p) {
    const f = p.distance, m = p.index !== t.get();
    r.add(f), f && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (o.set(t.get()), t.set(p.index), l.emit("select"));
  }
  function u(p, f) {
    const m = a.byDistance(p, f);
    i(m);
  }
  function d(p, f) {
    const m = t.clone().set(p), v = a.byIndex(m.get(), f);
    i(v);
  }
  return {
    distance: u,
    index: d
  };
}
function qv(e, t, o, n, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(m) {
    if (!i) return;
    function v(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const k = o.findIndex((B) => B.includes(g));
      Da(k) && (a.useDuration(0), n.index(k, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, b) => {
      r.add(g, "focus", (x) => {
        (an(i) || i(m, x)) && v(b);
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
function ro(e) {
  let t = e;
  function o() {
    return t;
  }
  function n(u) {
    t = l(u);
  }
  function a(u) {
    t += l(u);
  }
  function r(u) {
    t -= l(u);
  }
  function l(u) {
    return Da(u) ? u : u.get();
  }
  return {
    get: o,
    set: n,
    add: a,
    subtract: r
  };
}
function il(e, t) {
  const o = e.scroll === "x" ? l : i, n = t.style;
  let a = null, r = !1;
  function l(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function i(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function u(f) {
    if (r) return;
    const m = Tv(e.direction(f));
    m !== a && (n.transform = o(m), a = m);
  }
  function d(f) {
    r = !f;
  }
  function c() {
    r || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: c,
    to: u,
    toggleActive: d
  };
}
function Yv(e, t, o, n, a, r, l, i, u) {
  const c = fo(a), p = fo(a).reverse(), f = x().concat(k());
  function m(S, I) {
    return S.reduce((F, T) => F - a[T], I);
  }
  function v(S, I) {
    return S.reduce((F, T) => m(F, I) > 0 ? F.concat([T]) : F, []);
  }
  function g(S) {
    return r.map((I, F) => ({
      start: I - n[F] + 0.5 + S,
      end: I + t - 0.5 + S
    }));
  }
  function b(S, I, F) {
    const T = g(I);
    return S.map((L) => {
      const R = F ? 0 : -o, q = F ? o : 0, H = F ? "end" : "start", te = T[L][H];
      return {
        index: L,
        loopPoint: te,
        slideLocation: ro(-1),
        translate: il(e, u[L]),
        target: () => i.get() > te ? R : q
      };
    });
  }
  function x() {
    const S = l[0], I = v(p, S);
    return b(I, o, !1);
  }
  function k() {
    const S = t - l[0] - 1, I = v(c, S);
    return b(I, -o, !0);
  }
  function B() {
    return f.every(({
      index: S
    }) => {
      const I = c.filter((F) => F !== S);
      return m(I, t) <= 0.1;
    });
  }
  function D() {
    f.forEach((S) => {
      const {
        target: I,
        translate: F,
        slideLocation: T
      } = S, L = I();
      L !== T.get() && (F.to(L), T.set(L));
    });
  }
  function O() {
    f.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: B,
    clear: O,
    loop: D,
    loopPoints: f
  };
}
function Xv(e, t, o) {
  let n, a = !1;
  function r(u) {
    if (!o) return;
    function d(c) {
      for (const p of c)
        if (p.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    n = new MutationObserver((c) => {
      a || (an(o) || o(u, c)) && d(c);
    }), n.observe(e, {
      childList: !0
    });
  }
  function l() {
    n && n.disconnect(), a = !0;
  }
  return {
    init: r,
    destroy: l
  };
}
function Zv(e, t, o, n) {
  const a = {};
  let r = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((v) => {
      u || (v.forEach((g) => {
        const b = t.indexOf(g.target);
        a[b] = g;
      }), r = null, l = null, o.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: n
    }), t.forEach((v) => i.observe(v));
  }
  function c() {
    i && i.disconnect(), u = !0;
  }
  function p(v) {
    return mo(a).reduce((g, b) => {
      const x = parseInt(b), {
        isIntersecting: k
      } = a[x];
      return (v && k || !v && !k) && g.push(x), g;
    }, []);
  }
  function f(v = !0) {
    if (v && r) return r;
    if (!v && l) return l;
    const g = p(v);
    return v && (r = g), v || (l = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: f
  };
}
function Jv(e, t, o, n, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = o[0] && a, c = v(), p = g(), f = o.map(l), m = b();
  function v() {
    if (!d) return 0;
    const k = o[0];
    return he(t[i] - k[i]);
  }
  function g() {
    if (!d) return 0;
    const k = r.getComputedStyle(Ke(n));
    return parseFloat(k.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return o.map((k, B, D) => {
      const O = !B, A = Pa(D, B);
      return O ? f[B] + c : A ? f[B] + p : D[B + 1][i] - k[i];
    }).map(he);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: m,
    startGap: c,
    endGap: p
  };
}
function Qv(e, t, o, n, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, f = Da(o);
  function m(x, k) {
    return fo(x).filter((B) => B % k === 0).map((B) => x.slice(B, B + k));
  }
  function v(x) {
    return x.length ? fo(x).reduce((k, B, D) => {
      const O = Ke(k) || 0, A = O === 0, S = B === Bo(x), I = a[d] - r[O][d], F = a[d] - r[B][c], T = !n && A ? p(l) : 0, L = !n && S ? p(i) : 0, R = he(F - L - (I + T));
      return D && R > t + u && k.push(B), S && k.push(x.length), k;
    }, []).map((k, B, D) => {
      const O = Math.max(D[B - 1] || 0);
      return x.slice(O, k);
    }) : [];
  }
  function g(x) {
    return f ? m(x, o) : v(x);
  }
  return {
    groupSlides: g
  };
}
function eg(e, t, o, n, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: p,
    duration: f,
    dragFree: m,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: x,
    containScroll: k,
    watchResize: B,
    watchSlides: D,
    watchDrag: O,
    watchFocus: A
  } = r, S = 2, I = Mv(), F = I.measure(t), T = o.map(I.measure), L = Pv(u, d), R = L.measureSize(F), q = Rv(R), H = Dv(i, R), te = !p && !!k, se = p || !!k, {
    slideSizes: ce,
    slideSizesWithGaps: ue,
    startGap: j,
    endGap: J
  } = Jv(L, F, T, o, se, a), Q = Qv(L, R, b, p, F, T, j, J, S), {
    snaps: Ee,
    snapsAligned: Ae
  } = Hv(L, H, F, T, Q), Pe = -Ke(Ee) + Ke(ue), {
    snapsContained: We,
    scrollContainLimit: ht
  } = zv(R, Pe, Ae, k, S), ye = te ? We : Ae, {
    limit: me
  } = Nv(Pe, ye, p), Oe = ll(Bo(ye), c, p), be = Oe.clone(), de = fo(o), W = ({
    dragHandler: Mt,
    scrollBody: dn,
    scrollBounds: cn,
    options: {
      loop: ko
    }
  }) => {
    ko || cn.constrain(Mt.pointerDown()), dn.seek();
  }, ie = ({
    scrollBody: Mt,
    translate: dn,
    location: cn,
    offsetLocation: ko,
    previousLocation: cl,
    scrollLooper: pl,
    slideLooper: fl,
    dragHandler: ml,
    animation: vl,
    eventHandler: Fa,
    scrollBounds: gl,
    options: {
      loop: La
    }
  }, Va) => {
    const za = Mt.settled(), hl = !gl.shouldConstrain(), Na = La ? za : za && hl;
    Na && !ml.pointerDown() && (vl.stop(), Fa.emit("settle")), Na || Fa.emit("scroll");
    const yl = cn.get() * Va + cl.get() * (1 - Va);
    ko.set(yl), La && (pl.loop(Mt.direction()), fl.loop()), dn.to(ko.get());
  }, we = Ev(n, a, () => W(un), (Mt) => ie(un, Mt)), Te = 0.68, Ue = ye[Oe.get()], Qe = ro(Ue), yt = ro(Ue), st = ro(Ue), bt = ro(Ue), oo = Lv(Qe, st, yt, bt, f, Te), sn = Uv(p, ye, Pe, me, bt), ln = Gv(we, Oe, be, oo, sn, bt, l), Ia = jv(me), Ma = vo(), ul = Zv(t, o, l, g), {
    slideRegistry: Ra
  } = Wv(te, k, ye, ht, Q, de), dl = qv(e, o, Ra, ln, oo, Ma, l, A), un = {
    ownerDocument: n,
    ownerWindow: a,
    eventHandler: l,
    containerRect: F,
    slideRects: T,
    animation: we,
    axis: L,
    dragHandler: Av(L, e, n, a, bt, Iv(L, a), Qe, we, ln, oo, sn, Oe, l, q, m, v, x, Te, O),
    eventStore: Ma,
    percentOfView: q,
    index: Oe,
    indexPrevious: be,
    limit: me,
    location: Qe,
    offsetLocation: st,
    previousLocation: yt,
    options: r,
    resizeHandler: Fv(t, l, a, o, L, B, I),
    scrollBody: oo,
    scrollBounds: Vv(me, st, bt, oo, q),
    scrollLooper: Kv(Pe, me, st, [Qe, st, yt, bt]),
    scrollProgress: Ia,
    scrollSnapList: ye.map(Ia.get),
    scrollSnaps: ye,
    scrollTarget: sn,
    scrollTo: ln,
    slideLooper: Yv(L, R, Pe, ce, ue, Ee, ye, st, o),
    slideFocus: dl,
    slidesHandler: Xv(t, l, D),
    slidesInView: ul,
    slideIndexes: de,
    slideRegistry: Ra,
    slidesToScroll: Q,
    target: bt,
    translate: il(L, t)
  };
  return un;
}
function tg() {
  let e = {}, t;
  function o(d) {
    t = d;
  }
  function n(d) {
    return e[d] || [];
  }
  function a(d) {
    return n(d).forEach((c) => c(t, d)), u;
  }
  function r(d, c) {
    return e[d] = n(d).concat([c]), u;
  }
  function l(d, c) {
    return e[d] = n(d).filter((p) => p !== c), u;
  }
  function i() {
    e = {};
  }
  const u = {
    init: o,
    emit: a,
    off: l,
    on: r,
    clear: i
  };
  return u;
}
const og = {
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
function ng(e) {
  function t(r, l) {
    return sl(r, l || {});
  }
  function o(r) {
    const l = r.breakpoints || {}, i = mo(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function n(r) {
    return r.map((l) => mo(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: o,
    optionsMediaQueries: n
  };
}
function ag(e) {
  let t = [];
  function o(r, l) {
    return t = l.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(r, e)), l.reduce((i, u) => Object.assign(i, {
      [u.name]: u
    }), {});
  }
  function n() {
    t = t.filter((r) => r.destroy());
  }
  return {
    init: o,
    destroy: n
  };
}
function zo(e, t, o) {
  const n = e.ownerDocument, a = n.defaultView, r = ng(a), l = ag(r), i = vo(), u = tg(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: f,
    off: m,
    emit: v
  } = u, g = L;
  let b = !1, x, k = d(og, zo.globalOptions), B = d(k), D = [], O, A, S;
  function I() {
    const {
      container: de,
      slides: W
    } = B;
    A = (Fn(de) ? e.querySelector(de) : de) || e.children[0];
    const we = Fn(W) ? A.querySelectorAll(W) : W;
    S = [].slice.call(we || A.children);
  }
  function F(de) {
    const W = eg(e, A, S, n, a, de, u);
    if (de.loop && !W.slideLooper.canLoop()) {
      const ie = Object.assign({}, de, {
        loop: !1
      });
      return F(ie);
    }
    return W;
  }
  function T(de, W) {
    b || (k = d(k, de), B = c(k), D = W || D, I(), x = F(B), p([k, ...D.map(({
      options: ie
    }) => ie)]).forEach((ie) => i.add(ie, "change", L)), B.active && (x.translate.to(x.location.get()), x.animation.init(), x.slidesInView.init(), x.slideFocus.init(be), x.eventHandler.init(be), x.resizeHandler.init(be), x.slidesHandler.init(be), x.options.loop && x.slideLooper.loop(), A.offsetParent && S.length && x.dragHandler.init(be), O = l.init(be, D)));
  }
  function L(de, W) {
    const ie = Q();
    R(), T(d({
      startIndex: ie
    }, de), W), u.emit("reInit");
  }
  function R() {
    x.dragHandler.destroy(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), x.animation.destroy(), l.destroy(), i.clear();
  }
  function q() {
    b || (b = !0, i.clear(), R(), u.emit("destroy"), u.clear());
  }
  function H(de, W, ie) {
    !B.active || b || (x.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : B.duration), x.scrollTo.index(de, ie || 0));
  }
  function te(de) {
    const W = x.index.add(1).get();
    H(W, de, -1);
  }
  function se(de) {
    const W = x.index.add(-1).get();
    H(W, de, 1);
  }
  function ce() {
    return x.index.add(1).get() !== Q();
  }
  function ue() {
    return x.index.add(-1).get() !== Q();
  }
  function j() {
    return x.scrollSnapList;
  }
  function J() {
    return x.scrollProgress.get(x.location.get());
  }
  function Q() {
    return x.index.get();
  }
  function Ee() {
    return x.indexPrevious.get();
  }
  function Ae() {
    return x.slidesInView.get();
  }
  function Pe() {
    return x.slidesInView.get(!1);
  }
  function We() {
    return O;
  }
  function ht() {
    return x;
  }
  function ye() {
    return e;
  }
  function me() {
    return A;
  }
  function Oe() {
    return S;
  }
  const be = {
    canScrollNext: ce,
    canScrollPrev: ue,
    containerNode: me,
    internalEngine: ht,
    destroy: q,
    off: m,
    on: f,
    emit: v,
    plugins: We,
    previousScrollSnap: Ee,
    reInit: g,
    rootNode: ye,
    scrollNext: te,
    scrollPrev: se,
    scrollProgress: J,
    scrollSnapList: j,
    scrollTo: H,
    selectedScrollSnap: Q,
    slideNodes: Oe,
    slidesInView: Ae,
    slidesNotInView: Pe
  };
  return T(t, o), setTimeout(() => u.emit("init"), 0), be;
}
zo.globalOptions = void 0;
function Aa(e = {}, t = []) {
  const o = Bt(e), n = Bt(t);
  let a = o ? e.value : e, r = n ? t.value : t;
  const l = Io(), i = Io();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return le(() => {
    !$v() || !l.value || (zo.globalOptions = Aa.globalOptions, i.value = zo(l.value, a, r));
  }), Ko(() => {
    i.value && i.value.destroy();
  }), o && ee(e, (d) => {
    Ta(a, d) || (a = d, u());
  }), n && ee(t, (d) => {
    Sv(r, d) || (r = d, u());
  }), [l, i];
}
Aa.globalOptions = void 0;
const [rg, sg] = yv(
  ({ opts: e, orientation: t, plugins: o }, n) => {
    const [a, r] = Aa(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      o
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
    return le(() => {
      var p, f, m;
      r.value && ((p = r.value) == null || p.on("init", c), (f = r.value) == null || f.on("reInit", c), (m = r.value) == null || m.on("select", c), n("init-api", r.value));
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
function rn() {
  const e = sg();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const l0 = /* @__PURE__ */ w({
  __name: "Carousel",
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(e, { expose: t, emit: o }) {
    const n = e, a = o, {
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    } = rg(n, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    });
    function f(m) {
      const v = n.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = n.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (m.key === v) {
        m.preventDefault(), p();
        return;
      }
      m.key === g && (m.preventDefault(), c());
    }
    return (m, v) => (h(), N("div", {
      class: oe(s(z)("relative", n.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: f
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
}), i0 = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: o, orientation: n } = rn();
    return (a, r) => (h(), N("div", {
      ref_key: "carouselRef",
      ref: o,
      class: "overflow-hidden"
    }, [
      ae("div", P({
        class: s(z)("flex", s(n) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), u0 = /* @__PURE__ */ w({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: o } = rn();
    return (n, a) => (h(), N("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: oe(
        s(z)(
          "min-w-0 shrink-0 grow-0 basis-full",
          s(o) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), d0 = /* @__PURE__ */ w({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: o, canScrollPrev: n, scrollPrev: a } = rn();
    return (r, l) => (h(), C(s(al), {
      disabled: !s(n),
      class: oe(
        s(z)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          s(o) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: s(a)
    }, {
      default: y(() => [
        _(r.$slots, "default", {}, () => [
          V(s(Hm), { class: "size-4 text-current" }),
          l[0] || (l[0] = ae("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), c0 = /* @__PURE__ */ w({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: o, canScrollNext: n, scrollNext: a } = rn();
    return (r, l) => (h(), C(s(al), {
      disabled: !s(n),
      class: oe(
        s(z)(
          "touch-manipulation absolute size-8 rounded-full p-0",
          s(o) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t.class
        )
      ),
      variant: "outline",
      onClick: s(a)
    }, {
      default: y(() => [
        _(r.$slots, "default", {}, () => [
          V(s(Wm), { class: "size-4 text-current" }),
          l[0] || (l[0] = ae("span", { class: "sr-only" }, "Next Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), lg = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(Vd), P(s(r), {
      class: s(z)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        o.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ig = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(la), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), p0 = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Et), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), f0 = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(ia), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m0 = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), v0 = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(fa), P(s(n), {
      class: s(z)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g0 = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(ma), P(s(n), {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ug = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(ua), null, {
      default: y(() => [
        V(s(Jo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(Zo), P(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            V(s(Et), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => n("close", u))
            }, {
              default: y(() => [
                V(s(nn), { class: "size-4" }),
                i[1] || (i[1] = ae("span", { class: "sr-only" }, "Close", -1))
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
}), h0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(ua), null, {
      default: y(() => [
        V(s(Jo), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            V(s(Zo), P({
              class: s(z)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                o.class
              )
            }, s(r), {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const d = u.detail.originalEvent, c = d.target;
                (d.offsetX > c.clientWidth || d.offsetY > c.clientHeight) && u.preventDefault();
              })
            }), {
              default: y(() => [
                _(l.$slots, "default"),
                V(s(Et), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    V(s(nn), { class: "h-4 w-4" }),
                    i[1] || (i[1] = ae("span", { class: "sr-only" }, "Close", -1))
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
}), y0 = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), b0 = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(ig), U(G(s(a))), {
      default: y(() => [
        V(s(ug), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            V(lg, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), w0 = /* @__PURE__ */ w({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Gd), P(o.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x0 = /* @__PURE__ */ w({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Kd), P(o.value, {
      class: s(z)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        n.heading ? (h(), C(s(jd), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Se(De(n.heading), 1)
          ]),
          _: 1
        })) : pe("", !0),
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dg = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, _0 = /* @__PURE__ */ w({
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
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), N("div", dg, [
      V(s(Xm), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      V(s(zd), P({ ...s(n), ...a.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), C0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(Zd), P(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cg = { role: "presentation" }, B0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(Ud), P(s(r), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", o.class)
    }), {
      default: y(() => [
        ae("div", cg, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k0 = /* @__PURE__ */ w({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Jd), P(o.value, {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $0 = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("span", {
      class: oe(s(z)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), S0 = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Ec), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O0 = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = Be(e);
    return (n, a) => (h(), C(s(Pc), P({ class: "outline-none" }, s(o)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(Ac), null, {
      default: y(() => [
        V(s(Ic), P(s(r), {
          class: s(z)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
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
}), D0 = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Rc), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E0 = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(zc), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P0 = /* @__PURE__ */ w({
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
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(Mc), P(s(n), {
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
}), pg = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, A0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(Lc), P(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        ae("span", pg, [
          V(s(Ss), null, {
            default: y(() => [
              V(s(ol), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fg = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, I0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(Nc), P(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        ae("span", fg, [
          V(s(Ss), null, {
            default: y(() => [
              V(s(Ym), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M0 = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("span", {
      class: oe(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), R0 = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Fc), P(o.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), F0 = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(Vc), P(s(n), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L0 = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Kc), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V0 = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(Hc), P(s(n), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        V(s(Gm), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(jc), P(s(r), {
      class: s(z)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        o.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), N0 = /* @__PURE__ */ w({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = rl(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (r, l) => Wt((h(), N("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Bt(a) ? a.value = i : null),
      class: oe(
        s(z)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          o.class
        )
      )
    }, null, 2)), [
      [Ar, s(a)]
    ]);
  }
}), K0 = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Wc), P(o.value, {
      class: s(z)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j0 = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Gc), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), H0 = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(qc), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(Yc), null, {
      default: y(() => [
        V(s(Jc), P({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
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
}), U0 = /* @__PURE__ */ w({
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
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(np), P(o.value, {
      class: s(z)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        V(s(ap), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Ot(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), G0 = /* @__PURE__ */ w({
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
    const a = Y(e, t);
    return (r, l) => (h(), C(s(dp), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q0 = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Ip), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y0 = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(fp), P(s(n), {
      class: s(z)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        V(s(Mp), { "as-child": "" }, {
          default: y(() => [
            V(s(Um), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X0 = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(mp), null, {
      default: y(() => [
        V(s(_p), P({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            o.class
          )
        }), {
          default: y(() => [
            V(s(vg)),
            V(s(Ep), {
              class: oe(
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
            V(s(gg))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Z0 = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Tp), P({
      class: s(z)("p-1 w-full", t.class)
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mg = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, J0 = /* @__PURE__ */ w({
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
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(kp), P(s(n), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        ae("span", mg, [
          V(s($p), null, {
            default: y(() => [
              V(s(ol), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        V(s(Ps), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q0 = /* @__PURE__ */ w({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Ps), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Dp), {
      class: oe(s(z)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), th = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(Cp), P(o.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), vg = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(Pp), P(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          V(s(qm))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gg = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(Ap), P(s(n), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          V(s(nl))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oh = /* @__PURE__ */ w({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(la), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nh = /* @__PURE__ */ w({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(ia), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ w({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), C(s(Et), U(G(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rh = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, side: i, ...u } = o;
      return u;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(ua), null, {
      default: y(() => [
        V(s(Jo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(Zo), P({
          class: s(z)(s(hg)({ side: l.side }), o.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            V(s(Et), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                V(s(nn), { class: "h-4 w-4" })
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
}), sh = /* @__PURE__ */ w({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), lh = /* @__PURE__ */ w({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(fa), P({
      class: s(z)("text-lg font-semibold text-foreground", t.class)
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ih = /* @__PURE__ */ w({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(ma), P({
      class: s(z)("text-sm text-muted-foreground", t.class)
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uh = /* @__PURE__ */ w({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), hg = Co(
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
), dh = /* @__PURE__ */ w({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", {
      class: oe(s(z)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), ch = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(qp), P({
      class: s(z)("relative flex w-full touch-none select-none items-center", o.class)
    }, s(r)), {
      default: y(() => [
        V(s(Zp), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            V(s(Jp), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), N(ke, null, kt(l.modelValue, (u, d) => (h(), C(s(Xp), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ph = /* @__PURE__ */ w({
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
    const o = e, n = t, a = $(() => {
      const { class: l, ...i } = o;
      return i;
    }), r = Y(a, n);
    return (l, i) => (h(), C(s(nf), P(s(r), {
      class: s(z)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        o.class
      )
    }), {
      default: y(() => [
        V(s(af), {
          class: oe(
            s(z)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), yg = { class: "relative w-full overflow-auto" }, fh = /* @__PURE__ */ w({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("div", yg, [
      ae("table", {
        class: oe(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(o.$slots, "default")
      ], 2)
    ]));
  }
}), mh = /* @__PURE__ */ w({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("tbody", {
      class: oe(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), bg = /* @__PURE__ */ w({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("td", {
      class: oe(
        s(z)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), vh = /* @__PURE__ */ w({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("th", {
      class: oe(
        s(z)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), gh = /* @__PURE__ */ w({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("thead", {
      class: oe(s(z)("[&_tr]:border-b", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), hh = /* @__PURE__ */ w({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("tfoot", {
      class: oe(s(z)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), wg = /* @__PURE__ */ w({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("tr", {
      class: oe(
        s(z)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), yh = /* @__PURE__ */ w({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), N("caption", {
      class: oe(s(z)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), xg = { class: "flex items-center justify-center py-10" }, bh = /* @__PURE__ */ w({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(wg, null, {
      default: y(() => [
        V(bg, P({
          class: s(z)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, o.value), {
          default: y(() => [
            ae("div", xg, [
              _(n.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), wh = /* @__PURE__ */ w({
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
    const a = Y(e, t);
    return (r, l) => (h(), C(s(sf), U(G(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xh = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(uf), P({
      class: s(z)(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        t.class
      )
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _h = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: n, ...a } = t;
      return a;
    });
    return (n, a) => (h(), C(s(lf), P(o.value, {
      class: s(z)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _g = { class: "truncate" }, Ch = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = $(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = Be(o);
    return (a, r) => (h(), C(s(df), P(s(n), {
      class: s(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        ae("span", _g, [
          _(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bh = /* @__PURE__ */ w({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = rl(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (r, l) => Wt((h(), N("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => Bt(a) ? a.value = i : null),
      class: oe(
        s(z)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          o.class
        )
      )
    }, null, 2)), [
      [Ar, s(a)]
    ]);
  }
});
export {
  zg as Accord,
  av as Accordion,
  rv as AccordionContent,
  sv as AccordionItem,
  lv as AccordionTrigger,
  Kg as AlertDialog,
  Yg as AlertDialogAction,
  Xg as AlertDialogCancel,
  Hg as AlertDialogContent,
  Gg as AlertDialogDescription,
  qg as AlertDialogFooter,
  Wg as AlertDialogHeader,
  Ug as AlertDialogTitle,
  jg as AlertDialogTrigger,
  Zg as Avatar,
  Qg as AvatarFallback,
  Jg as AvatarImage,
  e0 as Badge,
  al as Button,
  t0 as Card,
  o0 as CardContent,
  n0 as CardDescription,
  a0 as CardFooter,
  r0 as CardHeader,
  s0 as CardTitle,
  l0 as Carousel,
  i0 as CarouselContent,
  u0 as CarouselItem,
  c0 as CarouselNext,
  d0 as CarouselPrevious,
  lg as Command,
  b0 as CommandDialog,
  w0 as CommandEmpty,
  x0 as CommandGroup,
  _0 as CommandInput,
  C0 as CommandItem,
  B0 as CommandList,
  k0 as CommandSeparator,
  $0 as CommandShortcut,
  ig as Dialog,
  p0 as DialogClose,
  ug as DialogContent,
  g0 as DialogDescription,
  y0 as DialogFooter,
  m0 as DialogHeader,
  h0 as DialogScrollContent,
  v0 as DialogTitle,
  f0 as DialogTrigger,
  S0 as DropdownMenu,
  A0 as DropdownMenuCheckboxItem,
  T0 as DropdownMenuContent,
  D0 as DropdownMenuGroup,
  P0 as DropdownMenuItem,
  F0 as DropdownMenuLabel,
  Ac as DropdownMenuPortal,
  E0 as DropdownMenuRadioGroup,
  I0 as DropdownMenuRadioItem,
  R0 as DropdownMenuSeparator,
  M0 as DropdownMenuShortcut,
  L0 as DropdownMenuSub,
  z0 as DropdownMenuSubContent,
  V0 as DropdownMenuSubTrigger,
  O0 as DropdownMenuTrigger,
  Lg as Flasher,
  Eg as Header,
  Vg as Heading,
  N0 as Input,
  K0 as Label,
  Pg as Main,
  j0 as Popover,
  Tg as PopoverAnchor,
  W0 as PopoverContent,
  H0 as PopoverTrigger,
  U0 as Progress,
  G0 as Select,
  X0 as SelectContent,
  Z0 as SelectGroup,
  J0 as SelectItem,
  Q0 as SelectItemText,
  eh as SelectLabel,
  gg as SelectScrollDownButton,
  vg as SelectScrollUpButton,
  th as SelectSeparator,
  Y0 as SelectTrigger,
  q0 as SelectValue,
  oh as Sheet,
  ah as SheetClose,
  rh as SheetContent,
  ih as SheetDescription,
  uh as SheetFooter,
  sh as SheetHeader,
  lh as SheetTitle,
  nh as SheetTrigger,
  dh as Skeleton,
  ch as Slider,
  ph as Switch,
  fh as Table,
  mh as TableBody,
  yh as TableCaption,
  bg as TableCell,
  bh as TableEmpty,
  hh as TableFooter,
  vh as TableHead,
  gh as TableHeader,
  wg as TableRow,
  wh as Tabs,
  xh as TabsContent,
  _h as TabsList,
  Ch as TabsTrigger,
  Bh as Textarea,
  Ng as Tip,
  Km as Toast,
  Fg as ToastAction,
  Zm as ToastClose,
  cr as ToastDescription,
  Qm as ToastProvider,
  Jm as ToastTitle,
  jm as ToastViewport,
  um as Toaster,
  iv as Tooltip,
  uv as TooltipContent,
  dv as TooltipProvider,
  cv as TooltipTrigger,
  Dg as TwoColumnLayout,
  Ag as TwoColumnLayoutSidebar,
  Ig as TwoColumnLayoutSidebarDesktop,
  Mg as TwoColumnLayoutSidebarMobile,
  Rg as TwoColumnLayoutSidebarTrigger,
  pv as avatarVariant,
  fv as badgeVariants,
  Oa as buttonVariants,
  Bg as preset,
  hg as sheetVariants,
  rm as toast,
  ev as toastVariants,
  rn as useCarousel,
  tv as useFlasher,
  qs as useToast
};
