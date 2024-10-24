import * as za from "vue";
import { computed as D, ref as T, shallowRef as Pn, watch as J, getCurrentScope as _r, onScopeDispose as Cr, shallowReadonly as At, unref as s, getCurrentInstance as vt, toRef as ul, camelize as Br, defineComponent as x, Comment as kr, mergeProps as P, cloneVNode as dl, h as xt, toRefs as ve, openBlock as h, createBlock as C, withCtx as y, renderSlot as _, withKeys as Lt, onMounted as ie, normalizeProps as U, guardReactiveProps as q, reactive as Or, createVNode as V, createCommentVNode as fe, withModifiers as ke, nextTick as oe, withDirectives as jt, vShow as Vo, watchEffect as we, markRaw as cl, watchSyncEffect as pl, createTextVNode as Be, toDisplayString as Ee, isRef as _t, resolveDynamicComponent as Le, onBeforeMount as Sr, onUnmounted as nt, createElementBlock as K, Fragment as xe, renderList as Ct, Teleport as Vn, onBeforeUnmount as zn, useSlots as Dr, normalizeStyle as Ht, toHandlers as fl, effectScope as Er, readonly as zo, toHandlerKey as ml, createElementVNode as ne, vModelSelect as vl, toRaw as gl, inject as No, provide as Ko, customRef as hl, onBeforeUpdate as yl, onUpdated as bl, mergeDefaults as $r, watchPostEffect as wl, normalizeClass as ae, isVNode as xl, vModelText as Tr } from "vue";
function Pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _l = {
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
}, co = _l, jo = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Cl(e) {
  return e.trim().replace(jo.whitespace, " ");
}
function Bl(e) {
  return encodeURIComponent(e).replace(jo.urlHexPairs, Ol);
}
function kl(e) {
  return Object.keys(co).forEach(function(t) {
    co[t].test(e) && (e = e.replace(co[t], t));
  }), e;
}
function Ol(e) {
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
function Bo(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = kl(Cl(e)).replace(jo.quotes, "'");
  return "data:image/svg+xml," + Bl(t);
}
Bo.toSrcset = function(t) {
  return Bo(t).replace(/ /g, "%20");
};
var Sl = Bo, Ar = {}, Ir = {};
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
})(Ir);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Ir);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(Ar);
let po = Ar;
var Mr = (po.__esModule ? po : { default: po }).default, Lr = {}, Rr = {};
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
})(Rr);
var Dl = {
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
  const t = Rr, n = /* @__PURE__ */ o(Dl);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(Lr);
let fo = Lr;
var El = (fo.__esModule ? fo : { default: fo }).default, Fr = {}, Vr = {}, Ho = { exports: {} }, Z = String, zr = function() {
  return { isColorSupported: !1, reset: Z, bold: Z, dim: Z, italic: Z, underline: Z, inverse: Z, hidden: Z, strikethrough: Z, black: Z, red: Z, green: Z, yellow: Z, blue: Z, magenta: Z, cyan: Z, white: Z, gray: Z, bgBlack: Z, bgRed: Z, bgGreen: Z, bgYellow: Z, bgBlue: Z, bgMagenta: Z, bgCyan: Z, bgWhite: Z, blackBright: Z, redBright: Z, greenBright: Z, yellowBright: Z, blueBright: Z, magentaBright: Z, cyanBright: Z, whiteBright: Z, bgBlackBright: Z, bgRedBright: Z, bgGreenBright: Z, bgYellowBright: Z, bgBlueBright: Z, bgMagentaBright: Z, bgCyanBright: Z, bgWhiteBright: Z };
};
Ho.exports = zr();
Ho.exports.createColors = zr;
var $l = Ho.exports;
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
  const n = /* @__PURE__ */ o($l);
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
})(Vr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Vr);
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
})(Fr);
let mo = Fr;
var Tl = (mo.__esModule ? mo : { default: mo }).default;
const Bn = Sl, Pl = Mr, Nr = El, lt = Tl, [Al, { lineHeight: Il }] = Nr.fontSize.base, { spacing: Xe, borderWidth: Na, borderRadius: Ka } = Nr;
function bt(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Ml = Pl.withOptions(function(e = { strategy: void 0 }) {
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
          "border-width": Na.DEFAULT,
          "border-radius": Ka.none,
          "padding-top": Xe[2],
          "padding-right": Xe[3],
          "padding-bottom": Xe[2],
          "padding-left": Xe[3],
          "font-size": Al,
          "line-height": Il,
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
          "background-image": `url("${Bn(
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
          "border-width": Na.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Ka.none
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
          "background-image": `url("${Bn(
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
          "background-image": `url("${Bn(
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
          "background-image": `url("${Bn(
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
var Ll = Ml;
const Rl = /* @__PURE__ */ Pr(Ll), Fl = Mr;
function ja(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Vl = Fl(
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
      { values: ja(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: ja(n("animationTimingFunction")) }
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
const zl = /* @__PURE__ */ Pr(Vl), t0 = {
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
    zl,
    Rl({
      strategy: "class"
    })
  ]
}, Nl = ["top", "right", "bottom", "left"], ct = Math.min, $e = Math.max, An = Math.round, kn = Math.floor, pt = (e) => ({
  x: e,
  y: e
}), Kl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, jl = {
  start: "end",
  end: "start"
};
function ko(e, t, n) {
  return $e(e, ct(t, n));
}
function et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tt(e) {
  return e.split("-")[0];
}
function Wt(e) {
  return e.split("-")[1];
}
function Wo(e) {
  return e === "x" ? "y" : "x";
}
function Uo(e) {
  return e === "y" ? "height" : "width";
}
function ft(e) {
  return ["top", "bottom"].includes(tt(e)) ? "y" : "x";
}
function Go(e) {
  return Wo(ft(e));
}
function Hl(e, t, n) {
  n === void 0 && (n = !1);
  const o = Wt(e), a = Go(e), r = Uo(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = In(l)), [l, In(l)];
}
function Wl(e) {
  const t = In(e);
  return [Oo(e), t, Oo(t)];
}
function Oo(e) {
  return e.replace(/start|end/g, (t) => jl[t]);
}
function Ul(e, t, n) {
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
function Gl(e, t, n, o) {
  const a = Wt(e);
  let r = Ul(tt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(Oo)))), r;
}
function In(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Kl[t]);
}
function ql(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Kr(e) {
  return typeof e != "number" ? ql(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mn(e) {
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
function Ha(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = ft(t), l = Go(t), i = Uo(l), u = tt(t), d = r === "y", p = o.x + o.width / 2 - a.width / 2, c = o.y + o.height / 2 - a.height / 2, m = o[i] / 2 - a[i] / 2;
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
  switch (Wt(t)) {
    case "start":
      f[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      f[l] += m * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Xl = async (e, t, n) => {
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
  } = Ha(d, o, u), m = o, f = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: w
    } = i[g], {
      x: k,
      y: B,
      data: $,
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
        ...$
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (d = E.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : E.rects), {
      x: p,
      y: c
    } = Ha(d, m, u)), g = -1);
  }
  return {
    x: p,
    y: c,
    placement: m,
    strategy: a,
    middlewareData: f
  };
};
async function ln(e, t) {
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
  } = et(t, e), v = Kr(f), b = i[m ? c === "floating" ? "reference" : "floating" : c], w = Mn(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: u
  })), k = c === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Mn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: B,
    strategy: u
  }) : k);
  return {
    top: (w.top - E.top + v.top) / $.y,
    bottom: (E.bottom - w.bottom + v.bottom) / $.y,
    left: (w.left - E.left + v.left) / $.x,
    right: (E.right - w.right + v.right) / $.x
  };
}
const Yl = (e) => ({
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
    const c = Kr(p), m = {
      x: n,
      y: o
    }, f = Go(a), v = Uo(f), g = await l.getDimensions(d), b = f === "y", w = b ? "top" : "left", k = b ? "bottom" : "right", B = b ? "clientHeight" : "clientWidth", $ = r.reference[v] + r.reference[f] - m[f] - r.floating[v], E = m[f] - r.reference[f], A = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let S = A ? A[B] : 0;
    (!S || !await (l.isElement == null ? void 0 : l.isElement(A))) && (S = i.floating[B] || r.floating[v]);
    const I = $ / 2 - E / 2, L = S / 2 - g[v] / 2 - 1, O = ct(c[w], L), M = ct(c[k], L), F = O, X = S - g[v] - M, H = S / 2 - g[v] / 2 + I, N = ko(F, H, X), G = !u.arrow && Wt(a) != null && H !== N && r.reference[v] / 2 - (H < F ? O : M) - g[v] / 2 < 0, ee = G ? H < F ? H - F : H - X : 0;
    return {
      [f]: m[f] + ee,
      data: {
        [f]: N,
        centerOffset: H - N - ee,
        ...G && {
          alignmentOffset: ee
        }
      },
      reset: G
    };
  }
}), Zl = function(e) {
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
      const w = tt(a), k = ft(i), B = tt(i) === i, $ = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), E = m || (B || !g ? [In(i)] : Wl(i)), A = v !== "none";
      !m && A && E.push(...Gl(i, g, v, $));
      const S = [i, ...E], I = await ln(t, b), L = [];
      let O = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (p && L.push(I[w]), c) {
        const H = Hl(a, l, $);
        L.push(I[H[0]], I[H[1]]);
      }
      if (O = [...O, {
        placement: a,
        overflows: L
      }], !L.every((H) => H <= 0)) {
        var M, F;
        const H = (((M = r.flip) == null ? void 0 : M.index) || 0) + 1, N = S[H];
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
        let G = (F = O.filter((ee) => ee.overflows[0] <= 0).sort((ee, re) => ee.overflows[1] - re.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!G)
          switch (f) {
            case "bestFit": {
              var X;
              const ee = (X = O.filter((re) => {
                if (A) {
                  const le = ft(re.placement);
                  return le === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  le === "y";
                }
                return !0;
              }).map((re) => [re.placement, re.overflows.filter((le) => le > 0).reduce((le, Oe) => le + Oe, 0)]).sort((re, le) => re[1] - le[1])[0]) == null ? void 0 : X[0];
              ee && (G = ee);
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
function Wa(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ua(e) {
  return Nl.some((t) => e[t] >= 0);
}
const Ql = function(e) {
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
          const r = await ln(t, {
            ...a,
            elementContext: "reference"
          }), l = Wa(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Ua(l)
            }
          };
        }
        case "escaped": {
          const r = await ln(t, {
            ...a,
            altBoundary: !0
          }), l = Wa(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Ua(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Jl(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = tt(n), i = Wt(n), u = ft(n) === "y", d = ["left", "top"].includes(l) ? -1 : 1, p = r && u ? -1 : 1, c = et(t, e);
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
const ei = function(e) {
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
      } = t, u = await Jl(t, e);
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
}, ti = function(e) {
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
      }, p = await ln(t, u), c = ft(tt(a)), m = Wo(c);
      let f = d[m], v = d[c];
      if (r) {
        const b = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", k = f + p[b], B = f - p[w];
        f = ko(k, f, B);
      }
      if (l) {
        const b = c === "y" ? "top" : "left", w = c === "y" ? "bottom" : "right", k = v + p[b], B = v - p[w];
        v = ko(k, v, B);
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
}, ni = function(e) {
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
      }, c = ft(a), m = Wo(c);
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
        const B = m === "y" ? "height" : "width", $ = r.reference[m] - r.floating[B] + b.mainAxis, E = r.reference[m] + r.reference[B] - b.mainAxis;
        f < $ ? f = $ : f > E && (f = E);
      }
      if (d) {
        var w, k;
        const B = m === "y" ? "width" : "height", $ = ["top", "left"].includes(tt(a)), E = r.reference[c] - r.floating[B] + ($ && ((w = l.offset) == null ? void 0 : w[c]) || 0) + ($ ? 0 : b.crossAxis), A = r.reference[c] + r.reference[B] + ($ ? 0 : ((k = l.offset) == null ? void 0 : k[c]) || 0) - ($ ? b.crossAxis : 0);
        v < E ? v = E : v > A && (v = A);
      }
      return {
        [m]: f,
        [c]: v
      };
    }
  };
}, oi = function(e) {
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
      } = et(e, t), p = await ln(t, d), c = tt(a), m = Wt(a), f = ft(a) === "y", {
        width: v,
        height: g
      } = r.floating;
      let b, w;
      c === "top" || c === "bottom" ? (b = c, w = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = c, b = m === "end" ? "top" : "bottom");
      const k = g - p.top - p.bottom, B = v - p.left - p.right, $ = ct(g - p[b], k), E = ct(v - p[w], B), A = !t.middlewareData.shift;
      let S = $, I = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = B), (o = t.middlewareData.shift) != null && o.enabled.y && (S = k), A && !m) {
        const O = $e(p.left, 0), M = $e(p.right, 0), F = $e(p.top, 0), X = $e(p.bottom, 0);
        f ? I = v - 2 * (O !== 0 || M !== 0 ? O + M : $e(p.left, p.right)) : S = g - 2 * (F !== 0 || X !== 0 ? F + X : $e(p.top, p.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: S
      });
      const L = await l.getDimensions(i.floating);
      return v !== L.width || g !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Nn() {
  return typeof window < "u";
}
function Ot(e) {
  return qo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function We(e) {
  var t;
  return (t = (qo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qo(e) {
  return Nn() ? e instanceof Node || e instanceof Te(e).Node : !1;
}
function Fe(e) {
  return Nn() ? e instanceof Element || e instanceof Te(e).Element : !1;
}
function He(e) {
  return Nn() ? e instanceof HTMLElement || e instanceof Te(e).HTMLElement : !1;
}
function Ga(e) {
  return !Nn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
function vn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = Ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(a);
}
function ai(e) {
  return ["table", "td", "th"].includes(Ot(e));
}
function Kn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Xo(e) {
  const t = Yo(), n = Fe(e) ? Ve(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ri(e) {
  let t = mt(e);
  for (; He(t) && !zt(t); ) {
    if (Xo(t))
      return t;
    if (Kn(t))
      return null;
    t = mt(t);
  }
  return null;
}
function Yo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zt(e) {
  return ["html", "body", "#document"].includes(Ot(e));
}
function Ve(e) {
  return Te(e).getComputedStyle(e);
}
function jn(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if (Ot(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ga(e) && e.host || // Fallback.
    We(e)
  );
  return Ga(t) ? t.host : t;
}
function jr(e) {
  const t = mt(e);
  return zt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : He(t) && vn(t) ? t : jr(t);
}
function un(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = jr(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Te(a);
  if (r) {
    const i = So(l);
    return t.concat(l, l.visualViewport || [], vn(a) ? a : [], i && n ? un(i) : []);
  }
  return t.concat(a, un(a, [], n));
}
function So(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hr(e) {
  const t = Ve(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = He(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = An(n) !== r || An(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function Zo(e) {
  return Fe(e) ? e : e.contextElement;
}
function Rt(e) {
  const t = Zo(e);
  if (!He(t))
    return pt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Hr(t);
  let l = (r ? An(n.width) : n.width) / o, i = (r ? An(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const si = /* @__PURE__ */ pt(0);
function Wr(e) {
  const t = Te(e);
  return !Yo() || !t.visualViewport ? si : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function li(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Te(e) ? !1 : t;
}
function Bt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = Zo(e);
  let l = pt(1);
  t && (o ? Fe(o) && (l = Rt(o)) : l = Rt(e));
  const i = li(r, n, o) ? Wr(r) : pt(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, p = a.width / l.x, c = a.height / l.y;
  if (r) {
    const m = Te(r), f = o && Fe(o) ? Te(o) : o;
    let v = m, g = So(v);
    for (; g && o && f !== v; ) {
      const b = Rt(g), w = g.getBoundingClientRect(), k = Ve(g), B = w.left + (g.clientLeft + parseFloat(k.paddingLeft)) * b.x, $ = w.top + (g.clientTop + parseFloat(k.paddingTop)) * b.y;
      u *= b.x, d *= b.y, p *= b.x, c *= b.y, u += B, d += $, v = Te(g), g = So(v);
    }
  }
  return Mn({
    width: p,
    height: c,
    x: u,
    y: d
  });
}
function ii(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = We(o), i = t ? Kn(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = pt(1);
  const p = pt(0), c = He(o);
  if ((c || !c && !r) && ((Ot(o) !== "body" || vn(l)) && (u = jn(o)), He(o))) {
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
function ui(e) {
  return Array.from(e.getClientRects());
}
function Do(e, t) {
  const n = jn(e).scrollLeft;
  return t ? t.left + n : Bt(We(e)).left + n;
}
function di(e) {
  const t = We(e), n = jn(e), o = e.ownerDocument.body, a = $e(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = $e(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Do(e);
  const i = -n.scrollTop;
  return Ve(o).direction === "rtl" && (l += $e(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
function ci(e, t) {
  const n = Te(e), o = We(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = Yo();
    (!d || d && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function pi(e, t) {
  const n = Bt(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = He(e) ? Rt(e) : pt(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function qa(e, t, n) {
  let o;
  if (t === "viewport")
    o = ci(e, n);
  else if (t === "document")
    o = di(We(e));
  else if (Fe(t))
    o = pi(t, n);
  else {
    const a = Wr(e);
    o = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return Mn(o);
}
function Ur(e, t) {
  const n = mt(e);
  return n === t || !Fe(n) || zt(n) ? !1 : Ve(n).position === "fixed" || Ur(n, t);
}
function fi(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = un(e, [], !1).filter((i) => Fe(i) && Ot(i) !== "body"), a = null;
  const r = Ve(e).position === "fixed";
  let l = r ? mt(e) : e;
  for (; Fe(l) && !zt(l); ) {
    const i = Ve(l), u = Xo(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || vn(l) && !u && Ur(e, l)) ? o = o.filter((p) => p !== l) : a = i, l = mt(l);
  }
  return t.set(e, o), o;
}
function mi(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Kn(t) ? [] : fi(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, p) => {
    const c = qa(t, p, a);
    return d.top = $e(c.top, d.top), d.right = ct(c.right, d.right), d.bottom = ct(c.bottom, d.bottom), d.left = $e(c.left, d.left), d;
  }, qa(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function vi(e) {
  const {
    width: t,
    height: n
  } = Hr(e);
  return {
    width: t,
    height: n
  };
}
function gi(e, t, n) {
  const o = He(t), a = We(t), r = n === "fixed", l = Bt(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = pt(0);
  if (o || !o && !r)
    if ((Ot(t) !== "body" || vn(a)) && (i = jn(t)), o) {
      const f = Bt(t, !0, r, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else a && (u.x = Do(a));
  let d = 0, p = 0;
  if (a && !o && !r) {
    const f = a.getBoundingClientRect();
    p = f.top + i.scrollTop, d = f.left + i.scrollLeft - // RTL <body> scrollbar.
    Do(a, f);
  }
  const c = l.left + i.scrollLeft - u.x - d, m = l.top + i.scrollTop - u.y - p;
  return {
    x: c,
    y: m,
    width: l.width,
    height: l.height
  };
}
function vo(e) {
  return Ve(e).position === "static";
}
function Xa(e, t) {
  if (!He(e) || Ve(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return We(e) === n && (n = n.ownerDocument.body), n;
}
function Gr(e, t) {
  const n = Te(e);
  if (Kn(e))
    return n;
  if (!He(e)) {
    let a = mt(e);
    for (; a && !zt(a); ) {
      if (Fe(a) && !vo(a))
        return a;
      a = mt(a);
    }
    return n;
  }
  let o = Xa(e, t);
  for (; o && ai(o) && vo(o); )
    o = Xa(o, t);
  return o && zt(o) && vo(o) && !Xo(o) ? n : o || ri(e) || n;
}
const hi = async function(e) {
  const t = this.getOffsetParent || Gr, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: gi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function yi(e) {
  return Ve(e).direction === "rtl";
}
const bi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ii,
  getDocumentElement: We,
  getClippingRect: mi,
  getOffsetParent: Gr,
  getElementRects: hi,
  getClientRects: ui,
  getDimensions: vi,
  getScale: Rt,
  isElement: Fe,
  isRTL: yi
};
function wi(e, t) {
  let n = null, o;
  const a = We(e);
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
    const f = kn(p), v = kn(a.clientWidth - (d + c)), g = kn(a.clientHeight - (p + m)), b = kn(d), k = {
      rootMargin: -f + "px " + -v + "px " + -g + "px " + -b + "px",
      threshold: $e(0, ct(1, u)) || 1
    };
    let B = !0;
    function $(E) {
      const A = E[0].intersectionRatio;
      if (A !== u) {
        if (!B)
          return l();
        A ? l(!1, A) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      n = new IntersectionObserver($, {
        ...k,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, k);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function xi(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Zo(e), p = a || r ? [...d ? un(d) : [], ...un(t)] : [];
  p.forEach((w) => {
    a && w.addEventListener("scroll", n, {
      passive: !0
    }), r && w.addEventListener("resize", n);
  });
  const c = d && i ? wi(d, n) : null;
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
const _i = ei, Ci = ti, Ya = Zl, Bi = oi, ki = Ql, Oi = Yl, Si = ni, Di = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: bi,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Xl(e, t, {
    ...a,
    platform: r
  });
};
function Ei(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Eo(e) {
  if (Ei(e)) {
    const t = e.$el;
    return qo(t) && Ot(t) === "#comment" ? null : t;
  }
  return e;
}
function Mt(e) {
  return typeof e == "function" ? e() : s(e);
}
function $i(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Eo(Mt(e.element));
      return n == null ? {} : Oi({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function qr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Za(e, t) {
  const n = qr(e);
  return Math.round(t * n) / n;
}
function Ti(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = D(() => {
    var S;
    return (S = Mt(n.open)) != null ? S : !0;
  }), r = D(() => Mt(n.middleware)), l = D(() => {
    var S;
    return (S = Mt(n.placement)) != null ? S : "bottom";
  }), i = D(() => {
    var S;
    return (S = Mt(n.strategy)) != null ? S : "absolute";
  }), u = D(() => {
    var S;
    return (S = Mt(n.transform)) != null ? S : !0;
  }), d = D(() => Eo(e.value)), p = D(() => Eo(t.value)), c = T(0), m = T(0), f = T(i.value), v = T(l.value), g = Pn({}), b = T(!1), w = D(() => {
    const S = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return S;
    const I = Za(p.value, c.value), L = Za(p.value, m.value);
    return u.value ? {
      ...S,
      transform: "translate(" + I + "px, " + L + "px)",
      ...qr(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: I + "px",
      top: L + "px"
    };
  });
  let k;
  function B() {
    if (d.value == null || p.value == null)
      return;
    const S = a.value;
    Di(d.value, p.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      c.value = I.x, m.value = I.y, f.value = I.strategy, v.value = I.placement, g.value = I.middlewareData, b.value = S !== !1;
    });
  }
  function $() {
    typeof k == "function" && (k(), k = void 0);
  }
  function E() {
    if ($(), o === void 0) {
      B();
      return;
    }
    if (d.value != null && p.value != null) {
      k = o(d.value, p.value, B);
      return;
    }
  }
  function A() {
    a.value || (b.value = !1);
  }
  return J([r, l, i, a], B, {
    flush: "sync"
  }), J([d, p], E, {
    flush: "sync"
  }), J(a, A, {
    flush: "sync"
  }), _r() && Cr($), {
    x: At(c),
    y: At(m),
    strategy: At(f),
    placement: At(v),
    middlewareData: At(g),
    isPositioned: At(b),
    floatingStyles: w,
    update: B
  };
}
function te(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = No(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Ko(o, a), a)];
}
function Qo(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Ln(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(e, t), n);
}
function Pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ai = function e(t, n) {
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
const wt = /* @__PURE__ */ Pi(Ai);
function Ft(e) {
  return e == null;
}
function Ii(e, t) {
  var n;
  const o = Pn();
  return we(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), zo(o);
}
function St(e) {
  return _r() ? (Cr(e), !0) : !1;
}
function Mi() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return St(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function Li(e) {
  let t = !1, n;
  const o = Er(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Xr(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Er(!0), n = o.run(() => e(...r))), St(a), n);
}
function Je(e) {
  return typeof e == "function" ? e() : s(e);
}
const Ue = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ri = (e) => typeof e < "u", Fi = (e) => e != null, Vi = Object.prototype.toString, zi = (e) => Vi.call(e) === "[object Object]", Yr = () => {
}, Qa = /* @__PURE__ */ Ni();
function Ni() {
  var e, t;
  return Ue && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ki(e) {
  return vt();
}
function Zr(e, t = 1e4) {
  return hl((n, o) => {
    let a = Je(e), r;
    const l = () => setTimeout(() => {
      a = Je(e), o();
    }, Je(t));
    return St(() => {
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
function ji(e, t) {
  Ki() && zn(e, t);
}
function Jo(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = T(!1);
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
  return o && (a.value = !0, Ue && u()), St(i), {
    isPending: zo(a),
    start: u,
    stop: i
  };
}
function Hi(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = Jo(
    o ?? Yr,
    e,
    t
  ), r = D(() => !a.isPending.value);
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
const Hn = Ue ? window : void 0;
function Nt(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = Hn) : [t, n, o, a] = e, !t)
    return Yr;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((p) => p()), r.length = 0;
  }, i = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), u = J(
    () => [Pe(t), Je(a)],
    ([p, c]) => {
      if (l(), !p)
        return;
      const m = zi(c) ? { ...c } : c;
      r.push(
        ...n.flatMap((f) => o.map((v) => i(p, f, v, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return St(d), d;
}
function Wi(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ea(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Hn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = Wi(t);
  return Nt(a, r, (d) => {
    d.repeat && Je(i) || u(d) && n(d);
  }, l);
}
function ta() {
  const e = T(!1), t = vt();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Ui(e) {
  const t = ta();
  return D(() => (t.value, !!e()));
}
function Gi(e, t, n = {}) {
  const { window: o = Hn, ...a } = n;
  let r;
  const l = Ui(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = D(() => {
    const m = Je(e), f = (Array.isArray(m) ? m : [m]).map(Pe).filter(Fi);
    return new Set(f);
  }), d = J(
    () => u.value,
    (m) => {
      i(), l.value && m.size && (r = new MutationObserver(t), m.forEach((f) => r.observe(f, a)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => r == null ? void 0 : r.takeRecords(), c = () => {
    i(), d();
  };
  return St(c), {
    isSupported: l,
    stop: c,
    takeRecords: p
  };
}
function Qr(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = Hn
  } = t, r = T(!1), l = o ? 1e3 / o : null;
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
  return n && p(), St(c), {
    isActive: zo(r),
    pause: c,
    resume: p
  };
}
function qi(e) {
  return JSON.parse(JSON.stringify(e));
}
function me(e, t, n, o = {}) {
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
  const b = (B) => i ? typeof i == "function" ? i(B) : qi(B) : B, w = () => Ri(e[t]) ? b(e[t]) : c, k = (B) => {
    m ? m(B) && v(g, B) : v(g, B);
  };
  if (u) {
    const B = w(), $ = T(B);
    let E = !1;
    return J(
      () => e[t],
      (A) => {
        E || (E = !0, $.value = b(A), oe(() => E = !1));
      }
    ), J(
      $,
      (A) => {
        !E && (A !== e[t] || p) && k(A);
      },
      { deep: p }
    ), $;
  } else
    return D({
      get() {
        return w();
      },
      set(B) {
        k(B);
      }
    });
}
function Wn(e) {
  return e ? e.flatMap((t) => t.type === xe ? Wn(t.children) : [t]) : [];
}
const Xi = ["INPUT", "TEXTAREA"];
function Jr(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Xi.includes(t.nodeName))
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
  let $ = null;
  return k || w ? $ = es(B, t, {
    goForward: w ? v : u === "ltr" ? c : m,
    loop: i
  }) : g ? $ = B.at(0) || null : b && ($ = B.at(-1) || null), p && ($ == null || $.focus()), $;
}
function es(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? es(
    e,
    i,
    n,
    o
  ) : i : null;
}
function go(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function $o(e, t, n = ".", o) {
  if (!go(t))
    return $o(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : go(l) && go(a[r]) ? a[r] = $o(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function Yi(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => $o(n, o, ""), {})
  );
}
const Zi = Yi(), [Un, n0] = te("ConfigProvider");
let Qi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ji = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Qi[Math.random() * 64 | 0];
  return t;
};
const eu = Xr(() => {
  const e = T(/* @__PURE__ */ new Map()), t = T(), n = D(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = Un({
    scrollBody: T(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Qa && (a == null || a()), t.value = void 0;
  };
  return J(n, (l, i) => {
    var u;
    if (!Ue)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, p = { padding: d, margin: 0 }, c = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Zi({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), Qa && (a = Nt(
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
function gn(e) {
  const t = Ji(6), n = eu();
  n.value.set(t, e ?? !1);
  const o = D({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return ji(() => {
    n.value.delete(t);
  }), o;
}
const tu = "data-radix-vue-collection-item";
function Ut(e, t = tu) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = T([]);
    function r() {
      const l = Pe(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return yl(() => {
      a.value = [];
    }), ie(r), bl(r), J(() => o == null ? void 0 : o.value, r, { immediate: !0 }), Ko(n, a), a;
  }, injectCollection: () => No(n, T([])) };
}
function Dt(e) {
  const t = Un({
    dir: T("ltr")
  });
  return D(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function gt(e) {
  const t = vt(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[ml(Br(a))] = (...r) => e(a, ...r);
  }), o;
}
let ho = 0;
function na() {
  we((e) => {
    if (!Ue)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ja()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ja()
    ), ho++, e(() => {
      ho === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ho--;
    });
  });
}
function Ja() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Gn(e) {
  return D(() => {
    var t;
    return Je(e) ? !!((t = Pe(e)) != null && t.closest("form")) : !0;
  });
}
function Ce(e) {
  const t = vt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = ul(e);
  return D(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Br(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Y(e, t) {
  const n = Ce(e), o = t ? gt(t) : {};
  return D(() => ({
    ...n.value,
    ...o
  }));
}
function R() {
  const e = vt(), t = T(), n = D(() => {
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
function nu(e, t) {
  const n = Zr(!1, 300), o = T(null), a = Mi();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, p = { x: i.clientX, y: i.clientY }, c = ou(p, d.getBoundingClientRect()), m = au(p, c), f = ru(u.getBoundingClientRect()), v = lu([...m, ...f]);
    o.value = v, n.value = !0;
  }
  return we((i) => {
    if (e.value && t.value) {
      const u = (p) => l(p, t.value), d = (p) => l(p, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var p, c;
        (p = e.value) == null || p.removeEventListener("pointerleave", u), (c = t.value) == null || c.removeEventListener("pointerleave", d);
      });
    }
  }), we((i) => {
    var u;
    if (o.value) {
      const d = (p) => {
        var c, m;
        if (!o.value)
          return;
        const f = p.target, v = { x: p.clientX, y: p.clientY }, g = ((c = e.value) == null ? void 0 : c.contains(f)) || ((m = t.value) == null ? void 0 : m.contains(f)), b = !su(v, o.value), w = f.hasAttribute("data-grace-area-trigger");
        g ? r() : (b || w) && (r(), a.trigger());
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
function ou(e, t) {
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
function au(e, t, n = 5) {
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
function ru(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function su(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (a = !a);
  }
  return a;
}
function lu(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), iu(t);
}
function iu(e) {
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
var uu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, It = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), Sn = {}, yo = 0, ts = function(e) {
  return e && (e.host || ts(e.parentNode));
}, du = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ts(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, cu = function(e, t, n, o) {
  var a = du(t, Array.isArray(e) ? e : [e]);
  Sn[n] || (Sn[n] = /* @__PURE__ */ new WeakMap());
  var r = Sn[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  a.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(m) {
      if (i.has(m))
        p(m);
      else
        try {
          var f = m.getAttribute(o), v = f !== null && f !== "false", g = (It.get(m) || 0) + 1, b = (r.get(m) || 0) + 1;
          It.set(m, g), r.set(m, b), l.push(m), g === 1 && v && On.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return p(t), i.clear(), yo++, function() {
    l.forEach(function(c) {
      var m = It.get(c) - 1, f = r.get(c) - 1;
      It.set(c, m), r.set(c, f), m || (On.has(c) || c.removeAttribute(o), On.delete(c)), f || c.removeAttribute(n);
    }), yo--, yo || (It = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), Sn = {});
  };
}, pu = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = uu(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), cu(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function hn(e) {
  let t;
  J(() => Pe(e), (n) => {
    n ? t = pu(n) : t && t();
  }), nt(() => {
    t && t();
  });
}
let fu = 0;
function _e(e, t = "radix") {
  const n = Un({ useId: void 0 });
  return za.useId ? `${t}-${za.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++fu}`;
}
function ns(e) {
  const t = T(), n = D(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = D(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
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
function mu(e, t) {
  const n = T(e);
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
function oa(e) {
  const t = Zr("", 1e3);
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
      }), p = gu(d, t.value, u), c = l.find(
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
function vu(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function gu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = vu(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const aa = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = Wn(n.default()), l = r.findIndex((p) => p.type !== kr);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? P(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = dl(i, u);
      for (const p in u)
        p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = u[p]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), j = x({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => xt(o, t) : o !== "template" ? () => xt(e.as, t, { default: n.default }) : () => xt(aa, t, { default: n.default });
  }
});
function os() {
  const e = T(), t = D(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Pe(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [as, hu] = te("CollapsibleRoot"), yu = /* @__PURE__ */ x({
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
    const o = e, a = me(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = me(o, "disabled");
    return hu({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), R(), (l, i) => (h(), C(s(j), {
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
}), bu = /* @__PURE__ */ x({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    R();
    const n = as();
    return (o, a) => {
      var r, l;
      return h(), C(s(j), {
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
function wu(e, t) {
  const n = T({}), o = T("none"), a = e.value ? "mounted" : "unmounted", { state: r, dispatch: l } = mu(a, {
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
    if (Ue) {
      const v = new CustomEvent(m, { bubbles: !1, cancelable: !1 });
      (f = t.value) == null || f.dispatchEvent(v);
    }
  };
  J(
    e,
    async (m, f) => {
      var v;
      const g = f !== m;
      if (await oe(), g) {
        const b = o.value, w = Dn(t.value);
        m ? (l("MOUNT"), i("enter"), w === "none" && i("after-enter")) : w === "none" || ((v = n.value) == null ? void 0 : v.display) === "none" ? (l("UNMOUNT"), i("leave"), i("after-leave")) : f && b !== w ? (l("ANIMATION_OUT"), i("leave")) : (l("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (m) => {
    const f = Dn(t.value), v = f.includes(
      m.animationName
    ), g = r.value === "mounted" ? "enter" : "leave";
    m.target === t.value && v && (i(`after-${g}`), l("ANIMATION_END")), m.target === t.value && f === "none" && l("ANIMATION_END");
  }, d = (m) => {
    m.target === t.value && (o.value = Dn(t.value));
  }, p = J(
    t,
    (m, f) => {
      m ? (n.value = getComputedStyle(m), m.addEventListener("animationstart", d), m.addEventListener("animationcancel", u), m.addEventListener("animationend", u)) : (l("ANIMATION_END"), f == null || f.removeEventListener("animationstart", d), f == null || f.removeEventListener("animationcancel", u), f == null || f.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), c = J(r, () => {
    const m = Dn(t.value);
    o.value = r.value === "mounted" ? m : "none";
  });
  return nt(() => {
    p(), c();
  }), {
    isPresent: D(
      () => ["mounted", "unmountSuspended"].includes(r.value)
    )
  };
}
function Dn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const ze = x({
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
    const { present: a, forceMount: r } = ve(e), l = T(), { isPresent: i } = wu(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = Wn(u || []);
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
}), xu = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = as();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-collapsible-content"));
    const o = T(), { forwardRef: a, currentElement: r } = R(), l = T(0), i = T(0), u = D(() => n.open.value), d = T(u.value), p = T();
    return J(
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
    ), ie(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (c, m) => (h(), C(s(ze), {
      ref_key: "presentRef",
      ref: o,
      present: c.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var f, v;
        return [
          V(s(j), P(c.$attrs, {
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
function rs({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (Ft(e) && Ft(n) && Ft(t))
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
function _u({ type: e, defaultValue: t, modelValue: n }) {
  return e || rs({ type: e, defaultValue: t, modelValue: n });
}
function Cu({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Bu(e, t) {
  const n = T(_u(e)), o = me(e, "modelValue", t, {
    defaultValue: Cu(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  J(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = rs(e);
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
  const r = D(() => n.value === "single");
  return {
    modelValue: o,
    type: n,
    changeModelValue: a,
    isSingle: r
  };
}
const [qn, ku] = te("AccordionRoot"), Ou = /* @__PURE__ */ x({
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
    const n = e, o = t, { dir: a, disabled: r } = ve(n), l = Dt(a), { modelValue: i, changeModelValue: u, isSingle: d } = Bu(n, o), { forwardRef: p, currentElement: c } = R();
    return ku({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: c,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (m, f) => (h(), C(s(j), {
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
}), [ra, Su] = te("AccordionItem"), Du = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = qn(), a = D(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = D(() => o.disabled.value || n.disabled || o.isSingle.value && a.value && !o.collapsible), l = D(() => r.value ? "" : void 0), i = D(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = R();
    Su({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: D(() => n.value)
    });
    function p(c) {
      Jr(
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
    return (c, m) => (h(), C(s(yu), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Lt(p, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(c.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Eu = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = qn(), o = ra();
    return R(), (a, r) => (h(), C(s(xu), {
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
}), $u = /* @__PURE__ */ x({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = qn(), o = ra();
    return R(), (a, r) => (h(), C(s(j), {
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
}), Tu = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = qn(), o = ra();
    o.triggerId || (o.triggerId = _e(void 0, "radix-vue-accordion-trigger"));
    function a() {
      o.disabled.value || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), C(s(bu), {
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
}), [Ge, Pu] = te("DialogRoot"), sa = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = me(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = T(), r = T(), { modal: l } = ve(n);
    return Pu({
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
}), la = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Ge(), { forwardRef: o, currentElement: a } = R();
    return n.contentId || (n.contentId = _e(void 0, "radix-vue-dialog-content")), ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(j), P(t, {
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
}), Gt = /* @__PURE__ */ x({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ta();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Vn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : fe("", !0);
  }
}), ia = /* @__PURE__ */ x({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gt), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Au = "dismissableLayer.pointerDownOutside", Iu = "dismissableLayer.focusOutside";
function ss(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function Mu(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = T(!1), r = T(() => {
  });
  return we((l) => {
    if (!Ue)
      return;
    const i = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (ss(t.value, p)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let c = function() {
            Qo(
              Au,
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
function Lu(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = T(!1);
  return we((r) => {
    if (!Ue)
      return;
    const l = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || ss(t.value, i.target)) && i.target && !a.value && Qo(
        Iu,
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
const Me = Or({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), qt = /* @__PURE__ */ x({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = R(), l = D(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = D(() => Me.layersRoot), u = D(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = D(() => Me.layersWithOutsidePointerEventsDisabled.size > 0), p = D(() => {
      const v = Array.from(i.value), [g] = [...Me.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), c = Mu(async (v) => {
      const g = [...Me.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !p.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await oe(), v.defaultPrevented || o("dismiss"));
    }, r), m = Lu((v) => {
      [...Me.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, r);
    ea("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let f;
    return we((v) => {
      r.value && (n.disableOutsidePointerEvents && (Me.layersWithOutsidePointerEventsDisabled.size === 0 && (f = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Me.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && Me.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = f);
      }));
    }), we((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), Me.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (h(), C(s(j), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Ht({
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
}), Ru = /* @__PURE__ */ x({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = R();
    return ie(() => {
      Me.branches.add(o.value);
    }), nt(() => {
      Me.branches.delete(o.value);
    }), (a, r) => (h(), C(s(j), P({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bo = "focusScope.autoFocusOnMount", wo = "focusScope.autoFocusOnUnmount", er = { bubbles: !1, cancelable: !0 };
function Tn(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (dt(o, { select: t }), document.activeElement !== n)
      return !0;
}
function Fu(e) {
  const t = ua(e), n = tr(t, e), o = tr(t.reverse(), e);
  return [n, o];
}
function ua(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function tr(e, t) {
  for (const n of e)
    if (!Vu(n, { upTo: t }))
      return n;
}
function Vu(e, { upTo: t }) {
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
function zu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function dt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zu(e) && t && e.select();
  }
}
const Nu = Li(() => T([]));
function Ku() {
  const e = Nu();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = nr(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = nr(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function nr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function ju(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Xn = /* @__PURE__ */ x({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = R(), l = T(null), i = Ku(), u = Or({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    we((p) => {
      if (!Ue)
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
    }), we(async (p) => {
      const c = r.value;
      if (await oe(), !c)
        return;
      i.add(u);
      const m = document.activeElement;
      if (!c.contains(m)) {
        const f = new CustomEvent(bo, er);
        c.addEventListener(bo, (v) => o("mountAutoFocus", v)), c.dispatchEvent(f), f.defaultPrevented || (Tn(ju(ua(c)), {
          select: !0
        }), document.activeElement === m && dt(c));
      }
      p(() => {
        c.removeEventListener(bo, (g) => o("mountAutoFocus", g));
        const f = new CustomEvent(wo, er), v = (g) => {
          o("unmountAutoFocus", g);
        };
        c.addEventListener(wo, v), c.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || dt(m ?? document.body, { select: !0 }), c.removeEventListener(wo, v), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, m = document.activeElement;
      if (c && m) {
        const f = p.currentTarget, [v, g] = Fu(f);
        v && g ? !p.shiftKey && m === g ? (p.preventDefault(), n.loop && dt(v, { select: !0 })) : p.shiftKey && m === v && (p.preventDefault(), n.loop && dt(g, { select: !0 })) : m === f && p.preventDefault();
      }
    }
    return (p, c) => (h(), C(s(j), {
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
}), Hu = "menu.itemSelect", To = ["Enter", " "], Wu = ["ArrowDown", "PageUp", "Home"], ls = ["ArrowUp", "PageDown", "End"], Uu = [...Wu, ...ls], Gu = {
  ltr: [...To, "ArrowRight"],
  rtl: [...To, "ArrowLeft"]
}, qu = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function da(e) {
  return e ? "open" : "closed";
}
function Rn(e) {
  return e === "indeterminate";
}
function ca(e) {
  return Rn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Po(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Xu(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (a = !a);
  }
  return a;
}
function Yu(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Xu(n, t);
}
function dn(e) {
  return e.pointerType === "mouse";
}
const Zu = "DialogTitle", Qu = "DialogContent";
function Ju({
  titleName: e = Zu,
  contentName: t = Qu,
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
const is = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ge(), { forwardRef: r, currentElement: l } = R();
    return a.titleId || (a.titleId = _e(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = _e(void 0, "radix-vue-dialog-description")), ie(() => {
      a.contentElement = l, document.activeElement !== document.body && (a.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Ju({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(Xn), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        V(s(qt), P({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(da)(s(a).open.value)
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
}), ed = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ge(), r = gt(o), { forwardRef: l, currentElement: i } = R();
    return hn(i), (u, d) => (h(), C(is, P({ ...n, ...s(r) }, {
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
}), td = /* @__PURE__ */ x({
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
    R();
    const a = Ge(), r = T(!1), l = T(!1);
    return (i, u) => (h(), C(is, P({ ...n, ...s(o) }, {
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
}), Yn = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ge(), r = gt(o), { forwardRef: l } = R();
    return (i, u) => (h(), C(s(ze), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(ed, P({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(td, P({
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
}), nd = /* @__PURE__ */ x({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ge();
    return gn(!0), R(), (n, o) => (h(), C(s(j), {
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
}), Zn = /* @__PURE__ */ x({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ge(), { forwardRef: n } = R();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(ze), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          V(nd, P(o.$attrs, {
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
    R();
    const n = Ge();
    return (o, a) => (h(), C(s(j), P(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), pa = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Ge();
    return R(), (o, a) => (h(), C(s(j), P(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), fa = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    R();
    const n = Ge();
    return (o, a) => (h(), C(s(j), P(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), od = /* @__PURE__ */ x({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = Y(e, t);
    return R(), (o, a) => (h(), C(s(sa), P(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ad = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(la), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rd = /* @__PURE__ */ x({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gt), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [sd, ld] = te("AlertDialogContent"), id = /* @__PURE__ */ x({
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
    R();
    const a = T();
    return ld({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(Yn), P({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = ke(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = ke(() => {
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
}), ud = /* @__PURE__ */ x({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(Zn), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dd = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = sd(), { forwardRef: o, currentElement: a } = R();
    return ie(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(Et), P(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cd = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(pa), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pd = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(fa), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fd = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(Et), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [us, md] = te("AvatarRoot"), vd = /* @__PURE__ */ x({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return R(), md({
      imageLoadingStatus: T("loading")
    }), (t, n) => (h(), C(s(j), {
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
function gd(e) {
  const t = T("idle"), n = T(!1), o = (a) => () => {
    n.value && (t.value = a);
  };
  return ie(() => {
    n.value = !0, J(e, (a) => {
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
const hd = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a } = ve(n);
    R();
    const r = us(), l = gd(a);
    return J(
      l,
      (i) => {
        o("loadingStatusChange", i), i !== "idle" && (r.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, u) => jt((h(), C(s(j), {
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
      [Vo, s(l) === "loaded"]
    ]);
  }
}), yd = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = us();
    R();
    const o = T(!1);
    let a;
    return J(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), C(s(j), {
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
}), [ds, bd] = te("PopperRoot"), Xt = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = T();
    return bd({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), yn = /* @__PURE__ */ x({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = R(), a = ds();
    return we(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), C(s(j), {
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
function wd(e) {
  return e !== null;
}
function xd(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [c, m] = Ao(r), f = { start: "0%", center: "50%", end: "100%" }[m], v = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + p / 2;
      let b = "", w = "";
      return c === "bottom" ? (b = u ? f : `${v}px`, w = `${-p}px`) : c === "top" ? (b = u ? f : `${v}px`, w = `${l.floating.height + p}px`) : c === "right" ? (b = `${-p}px`, w = u ? f : `${g}px`) : c === "left" && (b = `${l.floating.width + p}px`, w = u ? f : `${g}px`), { data: { x: b, y: w } };
    }
  };
}
function Ao(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const cs = {
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
}, [o0, _d] = te("PopperContent"), Kt = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ $r({
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
    ...cs
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ds(), { forwardRef: r, currentElement: l } = R(), i = T(), u = T(), { width: d, height: p } = ns(u), c = D(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = D(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), f = D(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = D(() => ({
      padding: m.value,
      boundary: f.value.filter(wd),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: f.value.length > 0
    })), g = Ii(() => [
      _i({
        mainAxis: n.sideOffset + p.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ya({
        ...v.value
      }),
      n.avoidCollisions && Ci({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Si() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ya({
        ...v.value
      }),
      Bi({
        ...v.value,
        apply: ({ elements: O, rects: M, availableWidth: F, availableHeight: X }) => {
          const { width: H, height: N } = M.reference, G = O.floating.style;
          G.setProperty(
            "--radix-popper-available-width",
            `${F}px`
          ), G.setProperty(
            "--radix-popper-available-height",
            `${X}px`
          ), G.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), G.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && $i({ element: u.value, padding: n.arrowPadding }),
      xd({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      n.hideWhenDetached && ki({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: w, isPositioned: k, middlewareData: B } = Ti(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...O) => xi(...O, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), $ = D(
      () => Ao(w.value)[0]
    ), E = D(
      () => Ao(w.value)[1]
    );
    wl(() => {
      k.value && o("placed");
    });
    const A = D(
      () => {
        var O;
        return ((O = B.value.arrow) == null ? void 0 : O.centerOffset) !== 0;
      }
    ), S = T("");
    we(() => {
      l.value && (S.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = D(() => {
      var O;
      return ((O = B.value.arrow) == null ? void 0 : O.x) ?? 0;
    }), L = D(() => {
      var O;
      return ((O = B.value.arrow) == null ? void 0 : O.y) ?? 0;
    });
    return _d({
      placedSide: $,
      onArrowChange: (O) => u.value = O,
      arrowX: I,
      arrowY: L,
      shouldHideArrow: A
    }), (O, M) => {
      var F, X, H;
      return h(), K("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Ht({
          ...s(b),
          transform: s(k) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: S.value,
          "--radix-popper-transform-origin": [
            (F = s(B).transformOrigin) == null ? void 0 : F.x,
            (X = s(B).transformOrigin) == null ? void 0 : X.y
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
        V(s(j), P({ ref: s(r) }, O.$attrs, {
          "as-child": n.asChild,
          as: O.as,
          "data-side": $.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(k) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            _(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), bn = /* @__PURE__ */ x({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return R(), (t, n) => (h(), C(s(j), {
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
}), Cd = /* @__PURE__ */ x({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = D(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), K(xe, null, Ct(n.value, (r) => (h(), C(bn, {
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
}), Bd = "data-radix-vue-collection-item", [ma, kd] = te("CollectionProvider");
function va(e = Bd) {
  const t = T(/* @__PURE__ */ new Map()), n = T(), o = kd({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = ps(o), r = D(() => Array.from(o.itemMap.value.values())), l = D(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const ga = x({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = ma(), { primitiveElement: o, currentElement: a } = os();
    return J(a, () => {
      n.collectionRef.value = a.value;
    }), () => xt(aa, { ref: o }, t);
  }
}), ha = x({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = ma(), { primitiveElement: a, currentElement: r } = os();
    return we((l) => {
      if (r.value) {
        const i = cl(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => xt(aa, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function ps(e) {
  const t = e ?? ma();
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
const [Yt, Od] = te("ComboboxRoot"), Sd = /* @__PURE__ */ x({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = ve(n), i = Dt(l), u = me(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = me(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), p = me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), c = me(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function m(N) {
      var G, ee;
      p.value = N, await oe(), N ? (d.value && (Array.isArray(d.value) && a.value ? c.value = (G = B().find((re) => {
        var le, Oe;
        return ((Oe = (le = re.ref) == null ? void 0 : le.dataset) == null ? void 0 : Oe.state) === "checked";
      })) == null ? void 0 : G.value : c.value = d.value), await oe(), (ee = g.value) == null || ee.focus(), X()) : (v.value = !1, n.resetSearchTermOnBlur && I());
    }
    function f(N) {
      if (Array.isArray(d.value) && a.value) {
        const G = d.value.findIndex((re) => wt(re, N)), ee = [...d.value];
        G === -1 ? ee.push(N) : ee.splice(G, 1), d.value = ee;
      } else
        d.value = N, m(!1);
    }
    const v = T(!1), g = T(), b = T(), { forwardRef: w, currentElement: k } = R(), { getItems: B, reactiveItems: $, itemMapSize: E } = va("data-radix-vue-combobox-item"), A = T([]);
    J(() => E.value, () => {
      A.value = B().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const S = D(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(A.value, u.value);
        const N = A.value.filter((G) => typeof G == "string");
        if (N.length)
          return N.filter((G) => {
            var ee;
            return G.toLowerCase().includes((ee = u.value) == null ? void 0 : ee.toLowerCase());
          });
      }
      return A.value;
    });
    function I() {
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const L = D(() => S.value.findIndex((N) => wt(N, c.value))), O = D(() => {
      var N;
      return (N = $.value.find((G) => wt(G.value, c.value))) == null ? void 0 : N.ref;
    }), M = D(() => JSON.stringify(d.value));
    J(M, async () => {
      await oe(), await oe(), I();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), J(() => [S.value.length, u.value.length], async ([N, G], [ee, re]) => {
      await oe(), await oe(), N && (re > G || L.value === -1) && (c.value = S.value[0]);
    });
    const F = Gn(k);
    function X() {
      var N;
      O.value instanceof Element && ((N = O.value) == null || N.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      O.value instanceof Element && O.value.focus && O.value.focus();
    }
    return Od({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: f,
      isUserInputted: v,
      multiple: a,
      disabled: r,
      open: p,
      onOpenChange: m,
      filteredOptions: S,
      contentId: "",
      inputElement: g,
      selectedElement: O,
      onInputElementChange: (N) => g.value = N,
      onInputNavigation: async (N) => {
        const G = L.value;
        G === 0 && N === "up" || G === S.value.length - 1 && N === "down" || (G === -1 && S.value.length || N === "home" ? c.value = S.value[0] : N === "end" ? c.value = S.value[S.value.length - 1] : c.value = S.value[N === "up" ? G - 1 : G + 1], await oe(), X(), H(), oe(() => {
          var ee;
          return (ee = g.value) == null ? void 0 : ee.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async (N) => {
        var G;
        S.value.length && c.value && O.value instanceof Element && (N.preventDefault(), N.stopPropagation(), (G = O.value) == null || G.click());
      },
      selectedValue: c,
      onSelectedValueChange: (N) => c.value = N,
      parentElement: k,
      contentElement: b,
      onContentElementChange: (N) => b.value = N
    }), (N, G) => (h(), C(s(Xt), null, {
      default: y(() => [
        V(s(j), P({
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
            s(F) && n.name ? (h(), C(s(Cd), {
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
}), Dd = /* @__PURE__ */ x({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Yt(), { forwardRef: o, currentElement: a } = R();
    ie(() => {
      const p = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      p && (n.onInputElementChange(p), setTimeout(() => {
        t.autoFocus && (p == null || p.focus());
      }, 1));
    });
    const r = D(() => t.disabled || n.disabled.value || !1), l = T();
    pl(() => {
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
    return (p, c) => (h(), C(s(j), {
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
        Lt(ke(i, ["prevent"]), ["down", "up"]),
        Lt(s(n).onInputEnter, ["enter"]),
        Lt(ke(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [fs, Ed] = te("ComboboxGroup"), $d = /* @__PURE__ */ x({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = R(), a = _e(void 0, "radix-vue-combobox-group"), r = Yt(), l = T(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Gi(o, () => {
      oe(() => {
        i();
      });
    }, { childList: !0 }), J(() => r.searchTerm.value, () => {
      oe(() => {
        i();
      });
    }, { immediate: !0 }), Ed({
      id: a
    }), (u, d) => jt((h(), C(s(j), P(t, {
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
      [Vo, l.value]
    ]);
  }
}), Td = /* @__PURE__ */ x({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    R();
    const n = fs({ id: "" });
    return (o, a) => (h(), C(s(j), P(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [a0, Pd] = te("ComboboxContent"), Ad = /* @__PURE__ */ x({
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
    const n = e, o = t, { position: a } = ve(n), r = Yt();
    gn(n.bodyLock);
    const { forwardRef: l, currentElement: i } = R();
    hn(r.parentElement);
    const u = D(() => n.position === "popper" ? n : {}), d = Ce(u.value);
    function p(m) {
      r.onSelectedValueChange("");
    }
    ie(() => {
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
    return Pd({ position: a }), (m, f) => (h(), C(s(ga), null, {
      default: y(() => [
        m.dismissable ? (h(), C(s(qt), {
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
            (h(), C(Le(s(a) === "popper" ? s(Kt) : s(j)), P({ ...m.$attrs, ...s(d) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (h(), C(Le(s(a) === "popper" ? s(Kt) : s(j)), P({ key: 1 }, { ...m.$attrs, ...u.value }, {
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
}), Id = /* @__PURE__ */ x({
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
    const n = Y(e, t), { forwardRef: o } = R(), a = Yt();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(ze), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        V(Ad, P({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Md = /* @__PURE__ */ x({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    R();
    const n = Yt(), o = D(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), C(s(j), U(P({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          Be("No options")
        ])
      ]),
      _: 3
    }, 16)) : fe("", !0);
  }
});
function Ld(e) {
  const t = Un({
    nonce: T()
  });
  return D(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [r0, Rd] = te("ComboboxItem"), Fd = "combobox.select", Vd = /* @__PURE__ */ x({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = ve(n), r = Yt();
    fs({ id: "", options: T([]) });
    const { forwardRef: l } = R(), i = D(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((w) => wt(w, n.value)) : wt((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = D(() => wt(r.selectedValue.value, n.value)), d = _e(void 0, "radix-vue-combobox-item"), p = _e(void 0, "radix-vue-combobox-option"), c = D(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => wt(g, n.value)) : !0);
    async function m(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function f(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      Qo(Fd, m, b);
    }
    async function v(g) {
      await oe(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Rd({
      isSelected: i
    }), (g, b) => (h(), C(s(ha), { value: g.value }, {
      default: y(() => [
        jt(V(s(j), {
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
              Be(Ee(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Vo, c.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), zd = /* @__PURE__ */ x({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(j), P(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ms = /* @__PURE__ */ x({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(yn), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Nd() {
  const e = T(!1);
  return ie(() => {
    Nt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Nt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Kd = Xr(Nd), [$t, vs] = te(["MenuRoot", "MenuSub"], "MenuContext"), [wn, jd] = te("MenuRoot"), Hd = /* @__PURE__ */ x({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = ve(n), l = Dt(r), i = me(n, "open", o), u = T(), d = Kd();
    return vs({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), jd({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (p, c) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Wd = "rovingFocusGroup.onEntryFocus", Ud = { bubbles: !1, cancelable: !0 };
function Gd(e, t = !1, n) {
  const o = document.activeElement;
  for (const a of e)
    if (a === o || (a.focus({ preventScroll: t }), document.activeElement !== o))
      return;
}
const [s0, qd] = te("RovingFocusGroup"), Xd = /* @__PURE__ */ x({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = ve(o), u = Dt(i), d = me(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), p = T(!1), c = T(!1), m = T(0), { getItems: f } = va();
    function v(b) {
      const w = !c.value;
      if (b.currentTarget && b.target === b.currentTarget && w && !p.value) {
        const k = new CustomEvent(Wd, Ud);
        if (b.currentTarget.dispatchEvent(k), a("entryFocus", k), !k.defaultPrevented) {
          const B = f().map((S) => S.ref).filter((S) => S.dataset.disabled !== ""), $ = B.find((S) => S.getAttribute("data-active") === "true"), E = B.find(
            (S) => S.id === d.value
          ), A = [$, E, ...B].filter(
            Boolean
          );
          Gd(A, o.preventScrollOnEntryFocus);
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
    }), qd({
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
    }), (b, w) => (h(), C(s(ga), null, {
      default: y(() => [
        V(s(j), {
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
}), [ya, Yd] = te("MenuContent"), ba = /* @__PURE__ */ x({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ $r({
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
    ...cs
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = $t(), r = wn(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = ve(n);
    na(), gn(i.value);
    const d = T(""), p = T(0), c = T(0), m = T(null), f = T("right"), v = T(0), g = T(null), { createCollection: b } = Ut(), { forwardRef: w, currentElement: k } = R(), B = b(k);
    J(k, (O) => {
      a.onContentChange(O);
    });
    const { handleTypeaheadSearch: $ } = oa(B);
    nt(() => {
      window.clearTimeout(p.value);
    });
    function E(O) {
      var M, F;
      return f.value === ((M = m.value) == null ? void 0 : M.side) && Yu(O, (F = m.value) == null ? void 0 : F.area);
    }
    async function A(O) {
      var M;
      o("openAutoFocus", O), !O.defaultPrevented && (O.preventDefault(), (M = k.value) == null || M.focus({
        preventScroll: !0
      }));
    }
    function S(O) {
      if (O.defaultPrevented)
        return;
      const M = O.target.closest("[data-radix-menu-content]") === O.currentTarget, F = O.ctrlKey || O.altKey || O.metaKey, X = O.key.length === 1, H = Jr(
        O,
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
      if (O.code === "Space" || (M && (O.key === "Tab" && O.preventDefault(), !F && X && $(O.key)), O.target !== k.value) || !Uu.includes(O.key))
        return;
      O.preventDefault();
      const N = B.value;
      ls.includes(O.key) && N.reverse(), Po(N);
    }
    function I(O) {
      var M, F;
      (F = (M = O == null ? void 0 : O.currentTarget) == null ? void 0 : M.contains) != null && F.call(M, O.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function L(O) {
      var M;
      if (!dn(O))
        return;
      const F = O.target, X = v.value !== O.clientX;
      if ((M = O == null ? void 0 : O.currentTarget) != null && M.contains(F) && X) {
        const H = O.clientX > v.value ? "right" : "left";
        f.value = H, v.value = O.clientX;
      }
    }
    return Yd({
      onItemEnter: (O) => !!E(O),
      onItemLeave: (O) => {
        var M;
        E(O) || ((M = k.value) == null || M.focus(), g.value = null);
      },
      onTriggerLeave: (O) => !!E(O),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (O) => {
        m.value = O;
      }
    }), (O, M) => (h(), C(s(Xn), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: A,
      onUnmountAutoFocus: M[7] || (M[7] = (F) => o("closeAutoFocus", F))
    }, {
      default: y(() => [
        V(s(qt), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: M[2] || (M[2] = (F) => o("escapeKeyDown", F)),
          onPointerDownOutside: M[3] || (M[3] = (F) => o("pointerDownOutside", F)),
          onFocusOutside: M[4] || (M[4] = (F) => o("focusOutside", F)),
          onInteractOutside: M[5] || (M[5] = (F) => o("interactOutside", F)),
          onDismiss: M[6] || (M[6] = (F) => o("dismiss"))
        }, {
          default: y(() => [
            V(s(Xd), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": M[0] || (M[0] = (F) => g.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: M[1] || (M[1] = (F) => {
                o("entryFocus", F), s(r).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: y(() => [
                V(s(Kt), {
                  ref: s(w),
                  role: "menu",
                  as: O.as,
                  "as-child": O.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(da)(s(a).open.value),
                  dir: s(r).dir.value,
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
                  onBlur: I,
                  onPointermove: L
                }, {
                  default: y(() => [
                    _(O.$slots, "default")
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
}), gs = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ya(), { forwardRef: o } = R(), a = T(!1);
    async function r(i) {
      if (!i.defaultPrevented && dn(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await oe(), !i.defaultPrevented && dn(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), C(s(ha), null, {
      default: y(() => [
        V(s(j), P({
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
}), wa = /* @__PURE__ */ x({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = R(), l = wn(), i = ya(), u = T(!1);
    async function d() {
      const p = r.value;
      if (!n.disabled && p) {
        const c = new CustomEvent(Hu, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", c), await oe(), c.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (p, c) => (h(), C(gs, P(n, {
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
        p.disabled || f && m.key === " " || s(To).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Zd, hs] = te(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Qd = /* @__PURE__ */ x({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Zd({
      checked: T(!1)
    });
    return (n, o) => (h(), C(s(ze), {
      present: n.forceMount || s(Rn)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        V(s(j), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(ca)(s(t).checked.value)
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
}), Jd = /* @__PURE__ */ x({
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
    const n = e, o = t, a = me(n, "checked", o);
    return hs({ checked: a }), (r, l) => (h(), C(wa, P({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Rn)(s(a)) ? "mixed" : s(a),
      "data-state": s(ca)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Rn)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), ec = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Y(n, o), r = $t(), { forwardRef: l, currentElement: i } = R();
    return hn(i), (u, d) => (h(), C(ba, P(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (p) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = ke((p) => o("focusOutside", p), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), tc = /* @__PURE__ */ x({
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
    const n = Y(e, t), o = $t();
    return (a, r) => (h(), C(ba, P(s(n), {
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
}), nc = /* @__PURE__ */ x({
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
    const n = Y(e, t), o = $t(), a = wn();
    return (r, l) => (h(), C(s(ze), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(ec, U(P({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(tc, U(P({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ys = /* @__PURE__ */ x({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(j), P({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oc = /* @__PURE__ */ x({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(j), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ac = /* @__PURE__ */ x({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gt), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rc, sc] = te("MenuRadioGroup"), lc = /* @__PURE__ */ x({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = me(n, "modelValue", t);
    return sc({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), C(ys, U(q(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), ic = /* @__PURE__ */ x({
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
    const n = e, o = t, { value: a } = ve(n), r = rc(), l = D(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return hs({ checked: l }), (i, u) => (h(), C(wa, P({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(ca)(l.value),
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
}), uc = /* @__PURE__ */ x({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(j), P(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bs, dc] = te("MenuSub"), cc = /* @__PURE__ */ x({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = me(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = $t(), r = T(), l = T();
    return we((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), vs({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), dc({
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
}), pc = /* @__PURE__ */ x({
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
    const n = Y(e, t), o = $t(), a = wn(), r = bs(), { forwardRef: l, currentElement: i } = R();
    return r.contentId || (r.contentId = _e(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(ze), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        V(ba, P(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = ke((p) => {
            var c;
            s(a).isUsingKeyboardRef.value && ((c = s(i)) == null || c.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = ke(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (p) => {
            p.defaultPrevented || p.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (p) => {
            s(a).onClose(), p.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (p) => {
            var c, m;
            const f = (c = p.currentTarget) == null ? void 0 : c.contains(p.target), v = s(qu)[s(a).dir.value].includes(p.key);
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
}), fc = /* @__PURE__ */ x({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = $t(), o = wn(), a = bs(), r = ya(), l = T(null);
    a.triggerId || (a.triggerId = _e(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    nt(() => {
      i();
    });
    function u(c) {
      !dn(c) || r.onItemEnter(c) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(c) {
      var m, f;
      if (!dn(c))
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
      t.disabled || f && c.key === " " || Gu[o.dir.value].includes(c.key) && (n.onOpenChange(!0), await oe(), (m = n.content.value) == null || m.focus(), c.preventDefault());
    }
    return (c, m) => (h(), C(ms, { "as-child": "" }, {
      default: y(() => [
        V(gs, P(t, {
          id: s(a).triggerId,
          ref: (f) => {
            var v;
            (v = s(a)) == null || v.onTriggerChange(f == null ? void 0 : f.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(da)(s(n).open.value),
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
}), [ws, mc] = te("DropdownMenuRoot"), vc = /* @__PURE__ */ x({
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
    R();
    const a = me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = T(), { modal: l, dir: i } = ve(n), u = Dt(i);
    return mc({
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
    }), (d, p) => (h(), C(s(Hd), {
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
}), gc = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ws(), { forwardRef: o, currentElement: a } = R();
    return ie(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = _e(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(ms), { "as-child": "" }, {
      default: y(() => [
        V(s(j), {
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
          onKeydown: l[1] || (l[1] = Lt(
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
}), hc = /* @__PURE__ */ x({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ac), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yc = /* @__PURE__ */ x({
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
    const n = Y(e, t);
    R();
    const o = ws(), a = T(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = _e(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(nc), P(s(n), {
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
}), bc = /* @__PURE__ */ x({
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
    return R(), (a, r) => (h(), C(s(wa), U(q({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wc = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(ys), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xc = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(uc), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _c = /* @__PURE__ */ x({
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
    return R(), (a, r) => (h(), C(s(Jd), U(q({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xs = /* @__PURE__ */ x({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(Qd), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cc = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(oc), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bc = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = gt(t);
    return R(), (a, r) => (h(), C(s(lc), U(q({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kc = /* @__PURE__ */ x({
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
    const n = Y(e, t);
    return R(), (o, a) => (h(), C(s(ic), U(q(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oc = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = me(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return R(), (a, r) => (h(), C(s(cc), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => _t(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Sc = /* @__PURE__ */ x({
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
    const n = Y(e, t);
    return R(), (o, a) => (h(), C(s(pc), P(s(n), { style: {
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
}), Dc = /* @__PURE__ */ x({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(fc), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ec = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(j), P(t, {
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
}), [Zt, $c] = te("PopoverRoot"), Tc = /* @__PURE__ */ x({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = ve(n), r = me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = T(), i = T(!1);
    return $c({
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
}), Pc = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Zt(), { forwardRef: o, currentElement: a } = R();
    return ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(Le(s(n).hasCustomAnchor.value ? s(j) : s(yn)), { "as-child": "" }, {
      default: y(() => [
        V(s(j), {
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
}), Ac = /* @__PURE__ */ x({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gt), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _s = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Ce(n), { forwardRef: r } = R(), l = Zt();
    return na(), (i, u) => (h(), C(s(Xn), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        V(s(qt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            V(s(Kt), P(s(a), {
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
}), Ic = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Zt(), r = T(!1);
    gn(!0);
    const l = Y(n, o), { forwardRef: i, currentElement: u } = R();
    return hn(u), (d, p) => (h(), C(_s, P(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = ke(
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
      onFocusOutside: p[2] || (p[2] = ke(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Mc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Zt(), r = T(!1), l = T(!1), i = Y(n, o);
    return (u, d) => (h(), C(_s, P(s(i), {
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
}), Lc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Zt(), r = Y(n, o), { forwardRef: l } = R();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(ze), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Ic, P({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Mc, P({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), l0 = /* @__PURE__ */ x({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    R();
    const n = Zt();
    return Sr(() => {
      n.hasCustomAnchor.value = !0;
    }), nt(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), C(s(yn), U(q(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cn = 100, [Rc, Fc] = te("ProgressRoot"), xa = (e) => typeof e == "number";
function Vc(e, t) {
  return Ft(e) || xa(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${cn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function zc(e) {
  return xa(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${cn}\`.`
  ), cn);
}
const Nc = /* @__PURE__ */ x({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: cn },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * cn)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    R();
    const a = me(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = me(n, "max", o, {
      passive: n.max === void 0
    });
    J(
      () => a.value,
      async (i) => {
        const u = Vc(i, n.max);
        u !== i && (await oe(), a.value = u);
      },
      { immediate: !0 }
    ), J(
      () => n.max,
      (i) => {
        const u = zc(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = D(() => Ft(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return Fc({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(j), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": xa(s(a)) ? s(a) : void 0,
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
}), Kc = /* @__PURE__ */ x({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Rc();
    return R(), (o, a) => {
      var r;
      return h(), C(s(j), P(t, {
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
}), jc = ["default-value"], Hc = /* @__PURE__ */ x({
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
    const t = e, { value: n } = ve(t), o = T();
    return (a, r) => (h(), C(s(bn), { "as-child": "" }, {
      default: y(() => [
        jt(ne("select", P({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => _t(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, jc), [
          [vl, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Wc = {
  key: 0,
  value: ""
}, [Tt, Cs] = te("SelectRoot"), [Uc, Gc] = te("SelectRoot"), qc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = me(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = T(), i = T(), u = T({
      x: 0,
      y: 0
    }), d = T(!1), { required: p, disabled: c, dir: m } = ve(n), f = Dt(m);
    Cs({
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
    const v = Gn(l), g = T(/* @__PURE__ */ new Set()), b = D(() => Array.from(g.value).map((w) => {
      var k;
      return (k = w.props) == null ? void 0 : k.value;
    }).join(";"));
    return Gc({
      onNativeOptionAdd: (w) => {
        g.value.add(w);
      },
      onNativeOptionRemove: (w) => {
        g.value.delete(w);
      }
    }), (w, k) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(w.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(v) ? (h(), C(Hc, P({ key: b.value }, w.$attrs, {
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
            s(a) === void 0 ? (h(), K("option", Wc)) : fe("", !0),
            (h(!0), K(xe, null, Ct(Array.from(g.value), (B) => (h(), C(Le(B), P({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : fe("", !0)
      ]),
      _: 3
    }));
  }
}), Xc = [" ", "Enter", "ArrowUp", "ArrowDown"], Yc = [" ", "Enter"], Ze = 10;
function Bs(e) {
  return e === "" || Ft(e);
}
const Zc = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Tt(), o = D(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = R();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-select-content")), ie(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Ut(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = oa(i);
    function c() {
      o.value || (n.onOpenChange(!0), p());
    }
    function m(f) {
      c(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, v) => (h(), C(s(yn), { "as-child": "" }, {
      default: y(() => {
        var g, b, w, k;
        return [
          V(s(j), {
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
            "data-placeholder": s(Bs)((k = s(n).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: v[0] || (v[0] = (B) => {
              var $;
              ($ = B == null ? void 0 : B.currentTarget) == null || $.focus();
            }),
            onPointerdown: v[1] || (v[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const $ = B.target;
              $.hasPointerCapture(B.pointerId) && $.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (m(B), B.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = ke(
              (B) => {
                B.pointerType === "touch" && m(B);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (B) => {
              const $ = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && $ && B.key === " " || (s(d)(B.key), s(Xc).includes(B.key) && (c(), B.preventDefault()));
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
}), Qc = /* @__PURE__ */ x({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gt), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [_a, Jc] = te("SelectItemAlignedPosition"), ep = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Ut(), r = Tt(), l = Pt(), i = a(), u = T(!1), d = T(!0), p = T(), { forwardRef: c, currentElement: m } = R(), { viewport: f, selectedItem: v, selectedItemText: g, focusSelectedItem: b } = l;
    function w() {
      if (r.triggerElement.value && r.valueElement.value && p.value && m.value && f != null && f.value && v != null && v.value && g != null && g.value) {
        const $ = r.triggerElement.value.getBoundingClientRect(), E = m.value.getBoundingClientRect(), A = r.valueElement.value.getBoundingClientRect(), S = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const he = S.left - E.left, ce = A.left - he, Se = $.left - ce, ye = $.width + Se, ue = Math.max(ye, E.width), W = window.innerWidth - Ze, se = Ln(ce, Ze, W - ue);
          p.value.style.minWidth = `${ye}px`, p.value.style.left = `${se}px`;
        } else {
          const he = E.right - S.right, ce = window.innerWidth - A.right - he, Se = window.innerWidth - $.right - ce, ye = $.width + Se, ue = Math.max(ye, E.width), W = window.innerWidth - Ze, se = Ln(
            ce,
            Ze,
            W - ue
          );
          p.value.style.minWidth = `${ye}px`, p.value.style.right = `${se}px`;
        }
        const I = i.value, L = window.innerHeight - Ze * 2, O = f.value.scrollHeight, M = window.getComputedStyle(m.value), F = Number.parseInt(
          M.borderTopWidth,
          10
        ), X = Number.parseInt(M.paddingTop, 10), H = Number.parseInt(
          M.borderBottomWidth,
          10
        ), N = Number.parseInt(
          M.paddingBottom,
          10
        ), G = F + X + O + N + H, ee = Math.min(
          v.value.offsetHeight * 5,
          G
        ), re = window.getComputedStyle(f.value), le = Number.parseInt(re.paddingTop, 10), Oe = Number.parseInt(
          re.paddingBottom,
          10
        ), de = $.top + $.height / 2 - Ze, ot = L - de, Ne = v.value.offsetHeight / 2, Ae = v.value.offsetTop + Ne, Ke = F + X + Ae, ht = G - Ke;
        if (Ke <= de) {
          const he = v.value === I[I.length - 1];
          p.value.style.bottom = "0px";
          const ce = m.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Se = Math.max(
            ot,
            Ne + (he ? Oe : 0) + ce + H
          ), ye = Ke + Se;
          p.value.style.height = `${ye}px`;
        } else {
          const he = v.value === I[0];
          p.value.style.top = "0px";
          const ce = Math.max(
            de,
            F + f.value.offsetTop + (he ? le : 0) + Ne
          ) + ht;
          p.value.style.height = `${ce}px`, f.value.scrollTop = Ke - de + f.value.offsetTop;
        }
        p.value.style.margin = `${Ze}px 0`, p.value.style.minHeight = `${ee}px`, p.value.style.maxHeight = `${L}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = T("");
    ie(async () => {
      await oe(), w(), m.value && (k.value = window.getComputedStyle(m.value).zIndex);
    });
    function B($) {
      $ && d.value === !0 && (w(), b == null || b(), d.value = !1);
    }
    return Jc({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), ($, E) => (h(), K("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: Ht({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      V(s(j), P({
        ref: s(c),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...$.$attrs, ...n }), {
        default: y(() => [
          _($.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), tp = /* @__PURE__ */ x({
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
    return (n, o) => (h(), C(s(Kt), P(s(t), { style: {
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
}), Qt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Pt, np] = te("SelectContent"), op = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Tt();
    na(), gn(n.bodyLock);
    const { createCollection: r } = Ut(), l = T();
    hn(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = oa(i), p = T(), c = T(), m = T(), f = T(!1), v = T(!1);
    function g() {
      c.value && l.value && Po([c.value, l.value]);
    }
    J(f, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: w } = a;
    we((E) => {
      if (!l.value)
        return;
      let A = { x: 0, y: 0 };
      const S = (L) => {
        var O, M;
        A = {
          x: Math.abs(
            Math.round(L.pageX) - (((O = w.value) == null ? void 0 : O.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(L.pageY) - (((M = w.value) == null ? void 0 : M.y) ?? 0)
          )
        };
      }, I = (L) => {
        var O;
        L.pointerType !== "touch" && (A.x <= 10 && A.y <= 10 ? L.preventDefault() : (O = l.value) != null && O.contains(L.target) || b(!1), document.removeEventListener("pointermove", S), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", S), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function k(E) {
      const A = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !A && E.key.length === 1 && d(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let S = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const I = E.target, L = S.indexOf(I);
          S = S.slice(L + 1);
        }
        setTimeout(() => Po(S)), E.preventDefault();
      }
    }
    const B = D(() => n.position === "popper" ? n : {}), $ = Ce(B.value);
    return np({
      content: l,
      viewport: p,
      onViewportChange: (E) => {
        p.value = E;
      },
      itemRefCallback: (E, A, S) => {
        var I, L;
        const O = !v.value && !S;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((L = a.modelValue) == null ? void 0 : L.value) === A || O) && (c.value = E, O && (v.value = !0));
      },
      selectedItem: c,
      selectedItemText: m,
      onItemLeave: () => {
        var E;
        (E = l.value) == null || E.focus();
      },
      itemTextRefCallback: (E, A, S) => {
        var I, L;
        const O = !v.value && !S;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((L = a.modelValue) == null ? void 0 : L.value) === A || O) && (m.value = E);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: f,
      searchRef: u
    }), (E, A) => (h(), C(s(Xn), {
      "as-child": "",
      onMountAutoFocus: A[6] || (A[6] = ke(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: A[7] || (A[7] = (S) => {
        var I;
        o("closeAutoFocus", S), !S.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), S.preventDefault());
      })
    }, {
      default: y(() => [
        V(s(qt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: A[2] || (A[2] = ke(() => {
          }, ["prevent"])),
          onDismiss: A[3] || (A[3] = (S) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: A[4] || (A[4] = (S) => o("escapeKeyDown", S)),
          onPointerDownOutside: A[5] || (A[5] = (S) => o("pointerDownOutside", S))
        }, {
          default: y(() => [
            (h(), C(Le(
              E.position === "popper" ? tp : ep
            ), P({ ...E.$attrs, ...s($) }, {
              id: s(a).contentId,
              ref: (S) => {
                l.value = s(Pe)(S);
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
              onContextmenu: A[0] || (A[0] = ke(() => {
              }, ["prevent"])),
              onPlaced: A[1] || (A[1] = (S) => f.value = !0),
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
}), ap = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Cs(e.context), (t, n) => _(t.$slots, "default");
  }
}), rp = { key: 1 }, sp = /* @__PURE__ */ x({
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
    const n = e, o = Y(n, t), a = Tt(), r = T();
    ie(() => {
      r.value = new DocumentFragment();
    });
    const l = T(), i = D(() => n.forceMount || a.open.value);
    return (u, d) => {
      var p;
      return i.value ? (h(), C(s(ze), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          V(op, U(q({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = l.value) != null && p.present) && r.value ? (h(), K("div", rp, [
        (h(), C(Vn, { to: r.value }, [
          V(ap, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : fe("", !0);
    };
  }
}), lp = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(j), P({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ks, ip] = te("SelectItem"), up = /* @__PURE__ */ x({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = ve(t), o = Tt(), a = Pt(Qt), { forwardRef: r, currentElement: l } = R(), i = D(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = T(!1), d = T(t.textValue ?? ""), p = _e(void 0, "radix-vue-select-item-text");
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
      await oe(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (Yc.includes(g.key) && c(), g.key === " " && g.preventDefault());
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
    }), ip({
      value: t.value,
      disabled: n,
      textId: p,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, b) => (h(), C(s(j), {
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
      onTouchend: b[3] || (b[3] = ke(() => {
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
}), dp = /* @__PURE__ */ x({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ks();
    return (o, a) => s(n).isSelected.value ? (h(), C(s(j), P({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : fe("", !0);
  }
}), [cp, pp] = te("SelectGroup"), fp = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = _e(void 0, "radix-vue-select-group");
    return pp({ id: n }), (o, a) => (h(), C(s(j), P({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), mp = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = cp({ id: "" });
    return (o, a) => (h(), C(s(j), P(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Os = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Tt(), o = Pt(Qt), a = Uc(), r = ks(), { forwardRef: l, currentElement: i } = R(), u = D(() => {
      var d;
      return xt("option", {
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
    }), zn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, p) => (h(), K(xe, null, [
      V(s(j), P({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), C(Vn, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : fe("", !0)
    ], 64));
  }
}), vp = /* @__PURE__ */ x({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = ve(t), o = Ld(n), a = Pt(Qt), r = a.position === "item-aligned" ? _a() : void 0, { forwardRef: l, currentElement: i } = R();
    ie(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = T(0);
    function d(p) {
      const c = p.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: f } = r ?? {};
      if (m != null && m.value && f != null && f.value) {
        const v = Math.abs(u.value - c.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - Ze * 2, b = Number.parseFloat(
            f.value.style.minHeight
          ), w = Number.parseFloat(f.value.style.height), k = Math.max(b, w);
          if (k < g) {
            const B = k + v, $ = Math.min(g, B), E = B - $;
            f.value.style.height = `${$}px`, f.value.style.bottom === "0px" && (c.scrollTop = E > 0 ? E : 0, f.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = c.scrollTop;
    }
    return (p, c) => (h(), K(xe, null, [
      V(s(j), P({
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
      V(s(j), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          Be(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Ss = /* @__PURE__ */ x({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Ut(), a = o(), r = Pt(Qt), l = T(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    we(() => {
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
    return zn(() => i()), (p, c) => {
      var m;
      return h(), C(s(j), P({
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
}), gp = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pt(Qt), n = t.position === "item-aligned" ? _a() : void 0, { forwardRef: o, currentElement: a } = R(), r = T(!1);
    return we((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), J(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Ss, {
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
}), hp = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Pt(Qt), n = t.position === "item-aligned" ? _a() : void 0, { forwardRef: o, currentElement: a } = R(), r = T(!1);
    return we((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          r.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), J(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Ss, {
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
}), yp = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = R(), o = Tt(), a = Dr();
    return Sr(() => {
      var r;
      const l = !!Wn((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), ie(() => {
      o.valueElement = n;
    }), (r, l) => (h(), C(s(j), {
      ref: s(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          s(Bs)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), K(xe, { key: 0 }, [
            Be(Ee(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), bp = /* @__PURE__ */ x({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), C(s(j), {
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
function wp(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function Ds(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return Ln(o, 0, 100);
}
function xp(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function _p(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function Cp(e, t, n) {
  const o = e / 2, a = Ca([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function Bp(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function kp(e, t) {
  if (t > 0) {
    const n = Bp(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Ca(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Op(e) {
  return (String(e).split(".")[1] || "").length;
}
function Sp(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Es = ["PageUp", "PageDown"], $s = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ts = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ps, As] = te(["SliderVertical", "SliderHorizontal"]), Is = /* @__PURE__ */ x({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Qn();
    return (r, l) => (h(), C(s(j), P({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(Es).concat(s($s)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), Dp = /* @__PURE__ */ x({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = ve(n), { forwardRef: u, currentElement: d } = R(), p = T(), c = D(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function m(f) {
      const v = p.value || d.value.getBoundingClientRect(), g = [0, v.width], b = c.value ? [r.value, a.value] : [a.value, r.value], w = Ca(g, b);
      return p.value = v, w(f - v.left);
    }
    return As({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (f, v) => (h(), C(Is, {
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
        const b = c.value ? "from-left" : "from-right", w = s(Ts)[b].includes(g.key);
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
}), Ep = /* @__PURE__ */ x({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = ve(n), { forwardRef: i, currentElement: u } = R(), d = T(), p = D(() => !l.value);
    function c(m) {
      const f = d.value || u.value.getBoundingClientRect(), v = [0, f.height], g = p.value ? [a.value, r.value] : [r.value, a.value], b = Ca(v, g);
      return d.value = f, b(m - f.top);
    }
    return As({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (m, f) => (h(), C(Is, {
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
        const g = p.value ? "from-bottom" : "from-top", b = s(Ts)[g].includes(v.key);
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
}), $p = ["value", "name", "disabled", "step"], [Qn, Tp] = te("SliderRoot"), Pp = /* @__PURE__ */ x({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = ve(n), c = Dt(p), { forwardRef: m, currentElement: f } = R(), v = Gn(f);
    va();
    const g = me(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = T(0), w = T(g.value);
    function k(S) {
      const I = _p(g.value, S);
      E(S, I);
    }
    function B(S) {
      E(S, b.value);
    }
    function $() {
      const S = w.value[b.value];
      g.value[b.value] !== S && o("valueCommit", gl(g.value));
    }
    function E(S, I, { commit: L } = { commit: !1 }) {
      var O;
      const M = Op(l.value), F = Sp(Math.round((S - a.value) / l.value) * l.value + a.value, M), X = Ln(F, a.value, r.value), H = wp(g.value, X, I);
      if (kp(H, i.value * l.value)) {
        b.value = H.indexOf(X);
        const N = String(H) !== String(g.value);
        N && L && o("valueCommit", H), N && ((O = A.value[b.value]) == null || O.focus(), g.value = H);
      }
    }
    const A = T([]);
    return Tp({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: A,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (S, I) => (h(), K(xe, null, [
      V(s(ga), null, {
        default: y(() => [
          (h(), C(Le(s(u) === "horizontal" ? Dp : Ep), P(S.$attrs, {
            ref: s(m),
            "as-child": S.asChild,
            as: S.as,
            min: s(a),
            max: s(r),
            dir: s(c),
            inverted: S.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (w.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (L) => !s(d) && k(L)),
            onSlideMove: I[2] || (I[2] = (L) => !s(d) && B(L)),
            onSlideEnd: I[3] || (I[3] = (L) => !s(d) && $()),
            onHomeKeyDown: I[4] || (I[4] = (L) => !s(d) && E(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (L) => !s(d) && E(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (L, O) => {
              if (!s(d)) {
                const M = s(Es).includes(L.key) || L.shiftKey && s($s).includes(L.key) ? 10 : 1, F = b.value, X = s(g)[F], H = s(l) * M * O;
                E(X + H, F, { commit: !0 });
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
      s(v) ? (h(!0), K(xe, { key: 0 }, Ct(s(g), (L, O) => (h(), K("input", {
        key: O,
        value: L,
        type: "number",
        style: { display: "none" },
        name: S.name ? S.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, $p))), 128)) : fe("", !0)
    ], 64));
  }
}), Ap = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qn(), o = Ps(), { forwardRef: a, currentElement: r } = R(), l = D(() => {
      var f, v;
      return (v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v[t.index];
    }), i = D(() => l.value === void 0 ? 0 : Ds(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = D(() => {
      var f, v;
      return xp(t.index, ((v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v.length) ?? 0);
    }), d = ns(r), p = D(() => d[o.size].value), c = D(() => p.value ? Cp(p.value, i.value, o.direction) : 0), m = ta();
    return ie(() => {
      n.thumbElements.value.push(r.value);
    }), nt(() => {
      const f = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(f, 1);
    }), (f, v) => (h(), C(s(ha), null, {
      default: y(() => [
        V(s(j), P(f.$attrs, {
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
}), Ip = /* @__PURE__ */ x({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = ps(), { forwardRef: o, currentElement: a } = R(), r = D(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(Ap, P({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Mp = /* @__PURE__ */ x({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Qn();
    return R(), (n, o) => (h(), C(s(j), {
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
}), Lp = /* @__PURE__ */ x({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Qn(), n = Ps();
    R();
    const o = D(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => Ds(u, t.min.value, t.max.value)
      );
    }), a = D(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = D(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), C(s(j), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: Ht({
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
function Rp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Rp();
const Fp = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Vp, zp] = te("SwitchRoot"), Np = /* @__PURE__ */ x({
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
    const n = e, o = t, { disabled: a } = ve(n), r = me(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = R(), d = Gn(u), p = D(() => {
      var c;
      return n.id && u.value ? (c = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return zp({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (c, m) => (h(), K(xe, null, [
      V(s(j), P(c.$attrs, {
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
        onKeydown: Lt(ke(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(c.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (h(), K("input", {
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
      }, null, 8, Fp)) : fe("", !0)
    ], 64));
  }
}), Kp = /* @__PURE__ */ x({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Vp();
    return R(), (n, o) => {
      var a;
      return h(), C(s(j), {
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
}), [Jn, jp] = te("ToastProvider"), Hp = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = ve(t), l = T(), i = T(0), u = T(!1), d = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return jp({
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
}), Wp = "toast.swipeStart", Up = "toast.swipeMove", Gp = "toast.swipeCancel", qp = "toast.swipeEnd", Io = "toast.viewportPause", Mo = "toast.viewportResume";
function En(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function or(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Xp(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ms(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Xp(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Ms(n));
    }
  }), t;
}
const Yp = /* @__PURE__ */ x({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Jn(), n = Hi(1e3), o = T(!1);
    return Qr(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), C(s(bn), { key: 0 }, {
      default: y(() => [
        Be(Ee(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : fe("", !0);
  }
}), [Zp, Qp] = te("ToastRoot"), Jp = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = R(), l = Jn(), i = T(null), u = T(null), d = D(() => n.duration || l.duration.value), p = T(0), c = T(d.value), m = T(0), f = T(d.value), v = Qr(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - p.value;
      f.value = Math.max(c.value - k, 0);
    }, { fpsLimit: 60 });
    function g(k) {
      !k || k === Number.POSITIVE_INFINITY || Ue && (window.clearTimeout(m.value), p.value = (/* @__PURE__ */ new Date()).getTime(), m.value = window.setTimeout(b, k));
    }
    function b() {
      var k, B;
      (k = r.value) != null && k.contains(document.activeElement) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const w = D(() => r.value ? Ms(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return we((k) => {
      const B = l.viewport.value;
      if (B) {
        const $ = () => {
          g(c.value), v.resume(), o("resume");
        }, E = () => {
          const A = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - A, window.clearTimeout(m.value), v.pause(), o("pause");
        };
        return B.addEventListener(Io, E), B.addEventListener(Mo, $), () => {
          B.removeEventListener(Io, E), B.removeEventListener(Mo, $);
        };
      }
    }), J(() => [n.open, d.value], () => {
      c.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), ea("Escape", (k) => {
      o("escapeKeyDown", k), k.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), ie(() => {
      l.onToastAdd();
    }), nt(() => {
      l.onToastRemove();
    }), Qp({ onClose: b }), (k, B) => (h(), K(xe, null, [
      w.value ? (h(), C(Yp, {
        key: 0,
        role: "status",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          Be(Ee(w.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : fe("", !0),
      s(l).viewport.value ? (h(), C(Vn, {
        key: 1,
        to: s(l).viewport.value
      }, [
        V(s(j), P({
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
          onPointerdown: B[0] || (B[0] = ke(($) => {
            i.value = { x: $.clientX, y: $.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = ($) => {
            if (!i.value) return;
            const E = $.clientX - i.value.x, A = $.clientY - i.value.y, S = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), L = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, O = I ? L(0, E) : 0, M = I ? 0 : L(0, A), F = $.pointerType === "touch" ? 10 : 2, X = { x: O, y: M }, H = { originalEvent: $, delta: X };
            S ? (u.value = X, s(En)(s(Up), (N) => o("swipeMove", N), H)) : s(or)(X, s(l).swipeDirection.value, F) ? (u.value = X, s(En)(s(Wp), (N) => o("swipeStart", N), H), $.target.setPointerCapture($.pointerId)) : (Math.abs(E) > F || Math.abs(A) > F) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = ($) => {
            const E = u.value, A = $.target;
            if (A.hasPointerCapture($.pointerId) && A.releasePointerCapture($.pointerId), u.value = null, i.value = null, E) {
              const S = $.currentTarget, I = { originalEvent: $, delta: E };
              s(or)(E, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(En)(s(qp), (L) => o("swipeEnd", L), I) : s(En)(s(Gp), (L) => o("swipeCancel", L), I), S == null || S.addEventListener("click", (L) => L.preventDefault(), {
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
}), ef = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a } = R(), r = me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), C(s(ze), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        V(Jp, P({
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
}), Ls = /* @__PURE__ */ x({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (h(), C(s(j), {
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
}), Rs = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Zp(), { forwardRef: o } = R();
    return (a, r) => (h(), C(Ls, { "as-child": "" }, {
      default: y(() => [
        V(s(j), P(t, {
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
}), tf = /* @__PURE__ */ x({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = R();
    return (n, o) => n.altText ? (h(), C(Ls, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        V(Rs, {
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
}), ar = /* @__PURE__ */ x({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Jn();
    return (a, r) => (h(), C(s(bn), {
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
}), nf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = ve(t), { forwardRef: a, currentElement: r } = R(), { createCollection: l } = Ut(), i = l(r), u = Jn(), d = D(() => u.toastCount.value > 0), p = T(), c = T(), m = D(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    ea(n.value, () => {
      r.value.focus();
    }), ie(() => {
      u.onViewportChange(r.value);
    }), we((v) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const E = new CustomEvent(Io);
            g.dispatchEvent(E), u.isClosePausedRef.value = !0;
          }
        }, w = () => {
          if (u.isClosePausedRef.value) {
            const E = new CustomEvent(Mo);
            g.dispatchEvent(E), u.isClosePausedRef.value = !1;
          }
        }, k = (E) => {
          !g.contains(E.relatedTarget) && w();
        }, B = () => {
          g.contains(document.activeElement) || w();
        }, $ = (E) => {
          var A, S, I;
          const L = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !L) {
            const O = document.activeElement, M = E.shiftKey;
            if (E.target === g && M) {
              (A = p.value) == null || A.focus();
              return;
            }
            const F = f({ tabbingDirection: M ? "backwards" : "forwards" }), X = F.findIndex((H) => H === O);
            Tn(F.slice(X + 1)) ? E.preventDefault() : M ? (S = p.value) == null || S.focus() : (I = c.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", k), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", B), g.addEventListener("keydown", $), window.addEventListener("blur", b), window.addEventListener("focus", w), v(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", B), g.removeEventListener("keydown", $), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        });
      }
    });
    function f({ tabbingDirection: v }) {
      const g = i.value.map((b) => {
        const w = [b, ...ua(b)];
        return v === "forwards" ? w : w.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (h(), C(s(Ru), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", m.value) : s(o)(m.value),
      tabindex: "-1",
      style: Ht({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), C(ar, {
          key: 0,
          ref: (b) => {
            p.value = s(Pe)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = f({
              tabbingDirection: "forwards"
            });
            s(Tn)(b);
          })
        }, null, 512)) : fe("", !0),
        V(s(j), P({
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
        d.value ? (h(), C(ar, {
          key: 1,
          ref: (b) => {
            c.value = s(Pe)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = f({
              tabbingDirection: "backwards"
            });
            s(Tn)(b);
          })
        }, null, 512)) : fe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), of = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(j), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), af = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return R(), (n, o) => (h(), C(s(j), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fs = "tooltip.open", [Ba, rf] = te("TooltipProvider"), sf = /* @__PURE__ */ x({
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
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = ve(t);
    R();
    const u = T(!0), d = T(!1), { start: p, stop: c } = Jo(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return rf({
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
    }), (m, f) => _(m.$slots, "default");
  }
}), [eo, lf] = te("TooltipRoot"), uf = /* @__PURE__ */ x({
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
    R();
    const a = Ba(), r = D(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = D(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = D(() => n.disabled ?? a.disabled.value), u = D(() => n.delayDuration ?? a.delayDuration.value), d = D(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), p = me(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    J(p, (B) => {
      a.onClose && (B ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Fs))) : a.onClose());
    });
    const c = T(!1), m = T(), f = D(() => p.value ? c.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: g } = Jo(() => {
      c.value = !0, p.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), c.value = !1, p.value = !0;
    }
    function w() {
      g(), p.value = !1;
    }
    function k() {
      v();
    }
    return lf({
      contentId: "",
      open: p,
      stateAttribute: f,
      trigger: m,
      onTriggerChange(B) {
        m.value = B;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? k() : b();
      },
      onTriggerLeave() {
        r.value ? w() : g();
      },
      onOpen: b,
      onClose: w,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (B, $) => (h(), C(s(Xt), null, {
      default: y(() => [
        _(B.$slots, "default", { open: s(p) })
      ]),
      _: 3
    }));
  }
}), df = /* @__PURE__ */ x({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = eo(), o = Ba();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = R(), l = T(!1), i = T(!1), u = D(() => n.disabled.value ? {} : {
      click: g,
      focus: f,
      pointermove: c,
      pointerleave: m,
      pointerdown: p,
      blur: v
    });
    ie(() => {
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
    function m() {
      n.onTriggerLeave(), i.value = !1;
    }
    function f(b) {
      var w, k;
      l.value || n.ignoreNonKeyboardFocus.value && !((k = (w = b.target).matches) != null && k.call(w, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, w) => (h(), C(s(yn), { "as-child": "" }, {
      default: y(() => [
        V(s(j), P({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, fl(u.value)), {
          default: y(() => [
            _(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Vs = /* @__PURE__ */ x({
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
    const n = e, o = t, a = eo(), { forwardRef: r } = R(), l = Dr(), i = D(() => {
      var p;
      return (p = l.default) == null ? void 0 : p.call(l);
    }), u = D(() => {
      var p;
      if (n.ariaLabel)
        return n.ariaLabel;
      let c = "";
      function m(f) {
        typeof f.children == "string" && f.type !== kr ? c += f.children : Array.isArray(f.children) && f.children.forEach((v) => m(v));
      }
      return (p = i.value) == null || p.forEach((f) => m(f)), c;
    }), d = D(() => {
      const { ariaLabel: p, ...c } = n;
      return c;
    });
    return ie(() => {
      Nt(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(a.trigger.value) && a.onClose();
      }), Nt(window, Fs, a.onClose);
    }), (p, c) => (h(), C(s(qt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: c[0] || (c[0] = (m) => o("escapeKeyDown", m)),
      onPointerDownOutside: c[1] || (c[1] = (m) => {
        var f;
        s(a).disableClosingTrigger.value && (f = s(a).trigger.value) != null && f.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
      }),
      onFocusOutside: c[2] || (c[2] = ke(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (m) => s(a).onClose())
    }, {
      default: y(() => [
        V(s(Kt), P({
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
            _(p.$slots, "default"),
            V(s(bn), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Be(Ee(u.value), 1)
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
}), cf = /* @__PURE__ */ x({
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
    const t = Ce(e), { forwardRef: n, currentElement: o } = R(), { trigger: a, onClose: r } = eo(), l = Ba(), { isPointerInTransit: i, onPointerExit: u } = nu(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, p) => (h(), C(Vs, P({ ref: s(n) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pf = /* @__PURE__ */ x({
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
    const n = e, o = t, a = eo(), r = Y(n, o), { forwardRef: l } = R();
    return (i, u) => (h(), C(s(ze), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), C(Le(s(a).disableHoverableContent.value ? Vs : cf), P({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ff = /* @__PURE__ */ x({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gt), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, mf = {}, vf = { class: "h-full bg-background dark:text-white" };
function gf(e, t) {
  return h(), K("div", vf, [
    _(e.$slots, "default")
  ]);
}
const i0 = /* @__PURE__ */ Jt(mf, [["render", gf]]), hf = {}, yf = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function bf(e, t) {
  return h(), K("header", yf, [
    _(e.$slots, "default")
  ]);
}
const u0 = /* @__PURE__ */ Jt(hf, [["render", bf]]), wf = {}, xf = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function _f(e, t) {
  return h(), K("main", xf, [
    _(e.$slots, "default")
  ]);
}
const d0 = /* @__PURE__ */ Jt(wf, [["render", _f]]), Cf = {};
function Bf(e, t) {
  return _(e.$slots, "default");
}
const c0 = /* @__PURE__ */ Jt(Cf, [["render", Bf]]), kf = {}, Of = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Sf = { class: "gap-y-5 overflow-y-auto" };
function Df(e, t) {
  return h(), K("div", Of, [
    ne("div", Sf, [
      _(e.$slots, "default")
    ])
  ]);
}
const p0 = /* @__PURE__ */ Jt(kf, [["render", Df]]), Ef = {};
function $f(e, t) {
  return _(e.$slots, "default");
}
const f0 = /* @__PURE__ */ Jt(Ef, [["render", $f]]);
function Tf(e, t) {
  return h(), K("svg", {
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
function Pf(e, t) {
  return h(), K("svg", {
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
function rr(e, t) {
  return h(), K("svg", {
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
function Af(e, t) {
  return h(), K("svg", {
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
const If = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, m0 = /* @__PURE__ */ x({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), K("button", If, [
      n[0] || (n[0] = ne("span", { class: "sr-only" }, "Open sidebar", -1)),
      V(s(Tf), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), Mf = 3, Lf = 1e6, Qe = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let xo = 0;
function Rf() {
  return xo = (xo + 1) % Number.MAX_VALUE, xo.toString();
}
const _o = /* @__PURE__ */ new Map();
function sr(e) {
  if (_o.has(e)) return;
  const t = setTimeout(() => {
    _o.delete(e), rn({
      type: Qe.REMOVE_TOAST,
      toastId: e
    });
  }, Lf);
  _o.set(e, t);
}
const Ie = T({
  toasts: []
});
function rn(e) {
  switch (e.type) {
    case Qe.ADD_TOAST:
      Ie.value.toasts = [e.toast, ...Ie.value.toasts].slice(0, Mf);
      break;
    case Qe.UPDATE_TOAST:
      Ie.value.toasts = Ie.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Qe.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? sr(t) : Ie.value.toasts.forEach((n) => {
        sr(n.id);
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
function zs() {
  return {
    toasts: D(() => Ie.value.toasts),
    toast: Ff,
    dismiss: (e) => rn({ type: Qe.DISMISS_TOAST, toastId: e })
  };
}
function Ff(e) {
  const t = Rf(), n = (a) => rn({
    type: Qe.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => rn({ type: Qe.DISMISS_TOAST, toastId: t });
  return rn({
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
const Vf = { class: "flex items-start space-x-3" }, zf = { class: "grid gap-1" }, Nf = { class: "font-bold" }, Kf = /* @__PURE__ */ x({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = zs();
    return (n, o) => (h(), C(s(Am), null, {
      default: y(() => [
        (h(!0), K(xe, null, Ct(s(t), (a) => (h(), C(s(_m), P({
          key: a.id,
          ref_for: !0
        }, a, { class: "mt-1.5" }), {
          default: y(() => [
            ne("div", Vf, [
              a.icon ? (h(), C(Le(a.icon), {
                key: 0,
                class: ae(["h-6 w-6", a.iconClasses])
              }, null, 8, ["class"])) : fe("", !0),
              ne("div", zf, [
                a.title ? (h(), C(s(Pm), { key: 0 }, {
                  default: y(() => [
                    Be(Ee(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : fe("", !0),
                a.description ? (h(), K(xe, { key: 1 }, [
                  xl(a.description) ? (h(), C(s(ur), { key: 0 }, {
                    default: y(() => [
                      (h(), C(Le(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), K(xe, { key: 1 }, Ct(a.description, (r, l) => (h(), K("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), K(xe, { key: 0 }, [
                      Be(Ee(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), K(xe, { key: 1 }, [
                      ne("span", Nf, Ee(l), 1),
                      Be(": " + Ee(r), 1)
                    ], 64)) : (h(), K(xe, { key: 2 }, [
                      Be(Ee(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(ur), { key: 2 }, {
                    default: y(() => [
                      Be(Ee(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : fe("", !0),
                V(s(Tm))
              ])
            ]),
            (h(), C(Le(a.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        V(s(Cm))
      ]),
      _: 1
    }));
  }
});
function Ns(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Ns(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function jf() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Ns(e)) && (o && (o += " "), o += t);
  return o;
}
const ka = "-", Hf = (e) => {
  const t = Uf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(ka);
      return i[0] === "" && i.length !== 1 && i.shift(), Ks(i, t) || Wf(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, Ks = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? Ks(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(ka);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, lr = /^\[(.+)\]$/, Wf = (e) => {
  if (lr.test(e)) {
    const t = lr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Uf = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return qf(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Lo(l, o, r, t);
  }), o;
}, Lo = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : ir(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Gf(a)) {
        Lo(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Lo(l, ir(t, r), n, o);
    });
  });
}, ir = (e, t) => {
  let n = e;
  return t.split(ka).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Gf = (e) => e.isThemeGetter, qf = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, Xf = (e) => {
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
}, js = "!", Yf = (e) => {
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
    const m = u.length === 0 ? i : i.substring(p), f = m.startsWith(js), v = f ? m.substring(1) : m, g = c && c > p ? c - p : void 0;
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
}, Zf = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Qf = (e) => ({
  cache: Xf(e.cacheSize),
  parseClassName: Yf(e),
  ...Hf(e)
}), Jf = /\s+/, em = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(Jf);
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
    const b = Zf(p).join(":"), w = c ? b + js : b, k = w + g;
    if (r.includes(k))
      continue;
    r.push(k);
    const B = a(g, v);
    for (let $ = 0; $ < B.length; ++$) {
      const E = B[$];
      r.push(w + E);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function tm() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hs(t)) && (o && (o += " "), o += n);
  return o;
}
const Hs = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Hs(e[o])) && (n && (n += " "), n += t);
  return n;
};
function nm(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((p, c) => c(p), e());
    return n = Qf(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const p = em(u, n);
    return a(u, p), p;
  }
  return function() {
    return r(tm.apply(null, arguments));
  };
}
const pe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ws = /^\[(?:([a-z-]+):)?(.+)\]$/i, om = /^\d+\/\d+$/, am = /* @__PURE__ */ new Set(["px", "full", "screen"]), rm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, sm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, im = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, um = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ye = (e) => Vt(e) || am.has(e) || om.test(e), it = (e) => en(e, "length", hm), Vt = (e) => !!e && !Number.isNaN(Number(e)), Co = (e) => en(e, "number", Vt), nn = (e) => !!e && Number.isInteger(Number(e)), dm = (e) => e.endsWith("%") && Vt(e.slice(0, -1)), Q = (e) => Ws.test(e), ut = (e) => rm.test(e), cm = /* @__PURE__ */ new Set(["length", "size", "percentage"]), pm = (e) => en(e, cm, Us), fm = (e) => en(e, "position", Us), mm = /* @__PURE__ */ new Set(["image", "url"]), vm = (e) => en(e, mm, bm), gm = (e) => en(e, "", ym), on = () => !0, en = (e, t, n) => {
  const o = Ws.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, hm = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  sm.test(e) && !lm.test(e)
), Us = () => !1, ym = (e) => im.test(e), bm = (e) => um.test(e), wm = () => {
  const e = pe("colors"), t = pe("spacing"), n = pe("blur"), o = pe("brightness"), a = pe("borderColor"), r = pe("borderRadius"), l = pe("borderSpacing"), i = pe("borderWidth"), u = pe("contrast"), d = pe("grayscale"), p = pe("hueRotate"), c = pe("invert"), m = pe("gap"), f = pe("gradientColorStops"), v = pe("gradientColorStopPositions"), g = pe("inset"), b = pe("margin"), w = pe("opacity"), k = pe("padding"), B = pe("saturate"), $ = pe("scale"), E = pe("sepia"), A = pe("skew"), S = pe("space"), I = pe("translate"), L = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", Q, t], F = () => [Q, t], X = () => ["", Ye, it], H = () => ["auto", Vt, Q], N = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], re = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], le = () => ["", "0", Q], Oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [Vt, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [on],
      spacing: [Ye, it],
      blur: ["none", "", ut, Q],
      brightness: de(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ut, Q],
      borderSpacing: F(),
      borderWidth: X(),
      contrast: de(),
      grayscale: le(),
      hueRotate: de(),
      invert: le(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [dm, it],
      inset: M(),
      margin: M(),
      opacity: de(),
      padding: F(),
      saturate: de(),
      scale: de(),
      sepia: le(),
      skew: de(),
      space: F(),
      translate: F()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Q]
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
        "break-after": Oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Oe()
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
        object: [...N(), Q]
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
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        z: ["auto", nn, Q]
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
        flex: ["1", "auto", "initial", "none", Q]
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
        order: ["first", "last", "none", nn, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [on]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", nn, Q]
        }, Q]
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
        "grid-rows": [on]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [nn, Q]
        }, Q]
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
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
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
        justify: ["normal", ...re()]
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
        content: ["normal", ...re(), "baseline"]
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
        "place-content": [...re(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ut]
        }, ut]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Co]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [on]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Vt, Co]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ye, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
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
        decoration: [...G(), "wavy"]
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
        "underline-offset": ["auto", Ye, Q]
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
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
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
        content: ["none", Q]
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
        bg: [...N(), fm]
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
        bg: ["auto", "cover", "contain", pm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vm]
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
        "divide-opacity": [w]
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
        "outline-offset": [Ye, Q]
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
        shadow: ["", "inner", "none", ut, gm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [on]
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
        "drop-shadow": ["", "none", ut, Q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
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
        ease: ["linear", "in", "out", "in-out", Q]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
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
        scale: [$]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [$]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [$]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [nn, Q]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
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
        "scroll-m": F()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": F()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": F()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": F()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": F()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": F()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": F()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": F()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": F()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": F()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": F()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": F()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": F()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": F()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": F()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": F()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": F()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": F()
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
        "will-change": ["auto", "scroll", "contents", "transform", Q]
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
        stroke: [Ye, it, Co]
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
}, xm = /* @__PURE__ */ nm(wm);
function z(...e) {
  return xm(jf(e));
}
const _m = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(ef), P(s(r), {
      class: s(z)(s(Mm)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), Cm = /* @__PURE__ */ x({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(nf), P(n.value, {
      class: s(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), v0 = /* @__PURE__ */ x({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(tf), P(n.value, {
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
function Bm(e, t) {
  return h(), K("svg", {
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
function km(e, t) {
  return h(), K("svg", {
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
function Om(e, t) {
  return h(), K("svg", {
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
function Gs(e, t) {
  return h(), K("svg", {
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
function qs(e, t) {
  return h(), K("svg", {
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
function Sm(e, t) {
  return h(), K("svg", {
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
function Dm(e, t) {
  return h(), K("svg", {
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
function to(e, t) {
  return h(), K("svg", {
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
function Em(e, t) {
  return h(), K("svg", {
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
function $m(e, t) {
  return h(), K("svg", {
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
const Tm = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Rs), P(n.value, {
      class: s(z)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        V(s(to), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Pm = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(of), P(n.value, {
      class: s(z)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ur = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(af), P({
      class: s(z)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Am = /* @__PURE__ */ x({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Hp), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Xs(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Xs(e[t])) && (o && (o += " "), o += n);
  else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function Im() {
  for (var e, t, n = 0, o = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Xs(e)) && (o && (o += " "), o += t);
  return o;
}
const dr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, cr = Im, xn = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return cr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const p = n == null ? void 0 : n[d], c = r == null ? void 0 : r[d];
    if (p === null) return null;
    const m = dr(p) || dr(c);
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
  return cr(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Mm = xn(
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
), { toast: $n } = zs();
function Lm() {
  return {
    info: (e) => {
      $n({
        icon: Af,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      $n({
        icon: Pf,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      $n({
        icon: rr,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      $n({
        icon: rr,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const g0 = /* @__PURE__ */ x({
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
    } = Lm();
    return J(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), J(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), J(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), J(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), C(s(Kf)));
  }
}), Rm = { class: "flex items-center justify-between space-y-2" }, Fm = { class: "flex items-center space-x-2" }, h0 = /* @__PURE__ */ x({
  __name: "Heading",
  props: {
    as: { default: "h2" }
  },
  setup(e) {
    return (t, n) => (h(), K("div", Rm, [
      (h(), C(Le(t.as), { class: "text-3xl font-bold tracking-tight" }, {
        default: y(() => [
          _(t.$slots, "default")
        ]),
        _: 3
      })),
      ne("div", Fm, [
        _(t.$slots, "actions")
      ])
    ]));
  }
}), y0 = /* @__PURE__ */ x({
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
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Ou), U(q(s(a))), {
      default: y(() => [
        (h(!0), K(xe, null, Ct(r.content, (i, u) => (h(), C(s(zm), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            V(s(Nm), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  Be(Ee(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            V(s(Vm), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  Be(Ee(i.content), 1)
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
}), Vm = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Eu), P(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        ne("div", {
          class: ae(s(z)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), zm = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(Du), P(s(o), {
      class: s(z)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nm = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s($u), { class: "flex" }, {
      default: y(() => [
        V(s(Tu), P(n.value, {
          class: s(z)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              V(s(qs), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), b0 = /* @__PURE__ */ x({
  __name: "Tooltip",
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
    return (r, l) => (h(), C(s(jm), null, {
      default: y(() => [
        V(s(uf), U(q(s(a))), {
          default: y(() => [
            V(s(Hm), {
              class: ae(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            V(s(Km), U(q(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  Be(Ee(r.tooltip), 1)
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
}), Km = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(ff), null, {
      default: y(() => [
        V(s(pf), P({ ...s(r), ...l.$attrs }, {
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
}), jm = /* @__PURE__ */ x({
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
    return (n, o) => (h(), C(s(sf), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hm = /* @__PURE__ */ x({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(df), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w0 = /* @__PURE__ */ x({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(od), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), x0 = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ad), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(rd), null, {
      default: y(() => [
        V(s(ud), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(id), P(s(r), {
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
}), C0 = /* @__PURE__ */ x({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), B0 = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(cd), P(n.value, {
      class: s(z)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k0 = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(pd), P(n.value, {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O0 = /* @__PURE__ */ x({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ys = /* @__PURE__ */ x({
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
    return (n, o) => (h(), C(s(j), {
      as: n.as,
      "as-child": n.asChild,
      class: ae(s(z)(s(Oa)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Oa = xn(
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
), S0 = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(fd), P(n.value, {
      class: s(z)(s(Oa)(), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D0 = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(dd), P(n.value, {
      class: s(z)(s(Oa)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E0 = /* @__PURE__ */ x({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(vd), {
      class: ae(s(z)(s(Wm)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $0 = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(hd), P(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), T0 = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(yd), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wm = xn(
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
), P0 = /* @__PURE__ */ x({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)(s(Um)({ variant: n.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Um = xn(
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
var pr;
const Gm = typeof window < "u", qm = (e) => typeof e < "u", Xm = (e) => typeof e == "function";
Gm && ((pr = window == null ? void 0 : window.navigator) != null && pr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ym(e) {
  return e;
}
function Zm(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return Ko(t, r), r;
  }, () => No(t)];
}
function Qm(e) {
  return JSON.parse(JSON.stringify(e));
}
const fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mr = "__vueuse_ssr_handlers__";
fr[mr] = fr[mr] || {};
var vr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(vr || (vr = {}));
var Jm = Object.defineProperty, gr = Object.getOwnPropertySymbols, ev = Object.prototype.hasOwnProperty, tv = Object.prototype.propertyIsEnumerable, hr = (e, t, n) => t in e ? Jm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nv = (e, t) => {
  for (var n in t || (t = {}))
    ev.call(t, n) && hr(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      tv.call(t, n) && hr(e, n, t[n]);
  return e;
};
const ov = {
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
nv({
  linear: Ym
}, ov);
function Zs(e, t, n, o = {}) {
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
  const g = (w) => i ? Xm(i) ? i(w) : Qm(w) : w, b = () => qm(e[t]) ? g(e[t]) : c;
  if (u) {
    const w = b(), k = T(w);
    return J(() => e[t], (B) => k.value = g(B)), J(k, (B) => {
      (B !== e[t] || p) && f(v, B);
    }, { deep: p }), k;
  } else
    return D({
      get() {
        return b();
      },
      set(w) {
        f(v, w);
      }
    });
}
function av(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function yr(e) {
  return av(e) || Array.isArray(e);
}
function rv() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Sa(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !yr(i) || !yr(u) ? i === u : Sa(i, u);
  });
}
function br(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function sv(e, t) {
  if (e.length !== t.length) return !1;
  const n = br(e), o = br(t);
  return n.every((a, r) => {
    const l = o[r];
    return Sa(a, l);
  });
}
function Da(e) {
  return typeof e == "number";
}
function Ro(e) {
  return typeof e == "string";
}
function no(e) {
  return typeof e == "boolean";
}
function wr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ge(e) {
  return Math.abs(e);
}
function Ea(e) {
  return Math.sign(e);
}
function sn(e, t) {
  return ge(e - t);
}
function lv(e, t) {
  if (e === 0 || t === 0 || ge(e) <= ge(t)) return 0;
  const n = sn(ge(e), ge(t));
  return ge(n / e);
}
function pn(e) {
  return fn(e).map(Number);
}
function Re(e) {
  return e[_n(e)];
}
function _n(e) {
  return Math.max(0, e.length - 1);
}
function $a(e, t) {
  return t === _n(e);
}
function xr(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function fn(e) {
  return Object.keys(e);
}
function Qs(e, t) {
  return [e, t].reduce((n, o) => (fn(o).forEach((a) => {
    const r = n[a], l = o[a], i = wr(r) && wr(l);
    n[a] = i ? Qs(r, l) : l;
  }), n), {});
}
function Fo(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function iv(e, t) {
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
function mn() {
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
function uv(e, t, n, o) {
  const a = mn(), r = 1e3 / 60;
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
function dv(e, t) {
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
  const n = ge(e - t);
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
function Js(e, t, n) {
  const {
    constrain: o
  } = kt(0, e), a = e + 1;
  let r = l(t);
  function l(m) {
    return n ? ge((a + m) % a) : o(m);
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
    return Js(e, i(), n);
  }
  const c = {
    get: i,
    set: u,
    add: d,
    clone: p
  };
  return c;
}
function cv(e, t, n, o, a, r, l, i, u, d, p, c, m, f, v, g, b, w, k) {
  const {
    cross: B,
    direction: $
  } = e, E = ["INPUT", "SELECT", "TEXTAREA"], A = {
    passive: !1
  }, S = mn(), I = mn(), L = kt(50, 225).constrain(f.measure(20)), O = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, F = v ? 43 : 25;
  let X = !1, H = 0, N = 0, G = !1, ee = !1, re = !1, le = !1;
  function Oe(W) {
    if (!k) return;
    function se(De) {
      (no(k) || k(W, De)) && ht(De);
    }
    const be = t;
    S.add(be, "dragstart", (De) => De.preventDefault(), A).add(be, "touchmove", () => {
    }, A).add(be, "touchend", () => {
    }).add(be, "touchstart", se).add(be, "mousedown", se).add(be, "touchcancel", ce).add(be, "contextmenu", ce).add(be, "click", Se, !0);
  }
  function de() {
    S.clear(), I.clear();
  }
  function ot() {
    const W = le ? n : t;
    I.add(W, "touchmove", he, A).add(W, "touchend", ce).add(W, "mousemove", he, A).add(W, "mouseup", ce);
  }
  function Ne(W) {
    const se = W.nodeName || "";
    return E.includes(se);
  }
  function Ae() {
    return (v ? M : O)[le ? "mouse" : "touch"];
  }
  function Ke(W, se) {
    const be = c.add(Ea(W) * -1), De = p.byDistance(W, !v).distance;
    return v || ge(W) < L ? De : b && se ? De * 0.5 : p.byIndex(be.get(), 0).distance;
  }
  function ht(W) {
    const se = Fo(W, o);
    le = se, re = v && se && !W.buttons && X, X = sn(a.get(), l.get()) >= 2, !(se && W.button !== 0) && (Ne(W.target) || (G = !0, r.pointerDown(W), d.useFriction(0).useDuration(0), a.set(l), ot(), H = r.readPoint(W), N = r.readPoint(W, B), m.emit("pointerDown")));
  }
  function he(W) {
    if (!Fo(W, o) && W.touches.length >= 2) return ce(W);
    const be = r.readPoint(W), De = r.readPoint(W, B), je = sn(be, H), qe = sn(De, N);
    if (!ee && !le && (!W.cancelable || (ee = je > qe, !ee)))
      return ce(W);
    const at = r.pointerMove(W);
    je > g && (re = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add($(at)), W.preventDefault();
  }
  function ce(W) {
    const be = p.byDistance(0, !1).index !== c.get(), De = r.pointerUp(W) * Ae(), je = Ke($(De), be), qe = lv(De, je), at = F - 10 * qe, rt = w + qe / 50;
    ee = !1, G = !1, I.clear(), d.useDuration(at).useFriction(rt), u.distance(je, !v), le = !1, m.emit("pointerUp");
  }
  function Se(W) {
    re && (W.stopPropagation(), W.preventDefault(), re = !1);
  }
  function ye() {
    return G;
  }
  return {
    init: Oe,
    destroy: de,
    pointerDown: ye
  };
}
function pv(e, t) {
  let o, a;
  function r(c) {
    return c.timeStamp;
  }
  function l(c, m) {
    const v = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Fo(c, t) ? c : c.touches[0])[v];
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
    return f && !v && ge(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function fv() {
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
function mv(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function vv(e, t, n, o, a, r, l) {
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
        const $ = B.target === e, E = o.indexOf(B.target), A = $ ? d : p[E], S = m($ ? e : o[E]);
        if (ge(S - A) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((k) => {
      (no(r) || r(b, k)) && w(k);
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
function gv(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, p = e.get(), c = 0;
  function m(A) {
    const S = A / 1e3, I = u * S, L = o.get() - e.get(), O = !u;
    let M = 0;
    return O ? (l = 0, n.set(o), e.set(o), M = L) : (n.set(e), l += L / I, l *= d, p += l, e.add(l * S), M = p - c), i = Ea(M), c = p, E;
  }
  function f() {
    const A = o.get() - t.get();
    return ge(A) < 1e-3;
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
    return $(r);
  }
  function B(A) {
    return u = A, E;
  }
  function $(A) {
    return d = A, E;
  }
  const E = {
    direction: g,
    duration: v,
    velocity: b,
    seek: m,
    settled: f,
    useBaseFriction: k,
    useBaseDuration: w,
    useFriction: $,
    useDuration: B
  };
  return E;
}
function hv(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = kt(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function p(f) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = ge(e[v] - t.get()), b = n.get() - t.get(), w = i.constrain(g / l);
    n.subtract(b * w), !f && ge(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
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
function yv(e, t, n, o, a) {
  const r = kt(-t + e, 0), l = c(), i = p(), u = m();
  function d(v, g) {
    return sn(v, g) < 1;
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
      } = r, k = r.constrain(v), B = !g, $ = $a(n, g);
      return B ? w : $ || d(b, k) ? b : d(w, k) ? w : k;
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
function bv(e, t, n) {
  const o = t[0], a = n ? o - e : Re(t);
  return {
    limit: kt(a, o)
  };
}
function wv(e, t, n, o) {
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
function xv(e) {
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
function _v(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = c().map(t.measure), d = m(), p = f();
  function c() {
    return i(o).map((g) => Re(g)[l] - g[0][r]).map(ge);
  }
  function m() {
    return o.map((g) => n[r] - g[r]).map((g) => -ge(g));
  }
  function f() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: p
  };
}
function Cv(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = p();
  function p() {
    const m = l(r), f = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : f ? m : m.slice(i, u).map((v, g, b) => {
      const w = !g, k = $a(b, g);
      if (w) {
        const B = Re(b[0]) + 1;
        return xr(B);
      }
      if (k) {
        const B = _n(r) - Re(b)[0] + 1;
        return xr(B, Re(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function Bv(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(v) {
    return v.concat().sort((g, b) => ge(g) - ge(b))[0];
  }
  function d(v) {
    const g = e ? l(v) : i(v), b = t.map((k, B) => ({
      diff: p(k - g, 0),
      index: B
    })).sort((k, B) => ge(k.diff) - ge(B.diff)), {
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
    const w = b.filter((k) => Ea(k) === g);
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
    const $ = t[w] - k, E = v + p($, 0);
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
function kv(e, t, n, o, a, r, l) {
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
function Ov(e, t, n, o, a, r, l, i) {
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
      Da(k) && (a.useDuration(0), o.index(k, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", c, !1), t.forEach((g, b) => {
      r.add(g, "focus", (w) => {
        (no(i) || i(f, w)) && v(b);
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
function an(e) {
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
    return Da(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function el(e, t) {
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
function Sv(e, t, n, o, a, r, l, i, u) {
  const p = pn(a), c = pn(a).reverse(), m = w().concat(k());
  function f(S, I) {
    return S.reduce((L, O) => L - a[O], I);
  }
  function v(S, I) {
    return S.reduce((L, O) => f(L, I) > 0 ? L.concat([O]) : L, []);
  }
  function g(S) {
    return r.map((I, L) => ({
      start: I - o[L] + 0.5 + S,
      end: I + t - 0.5 + S
    }));
  }
  function b(S, I, L) {
    const O = g(I);
    return S.map((M) => {
      const F = L ? 0 : -n, X = L ? n : 0, H = L ? "end" : "start", N = O[M][H];
      return {
        index: M,
        loopPoint: N,
        slideLocation: an(-1),
        translate: el(e, u[M]),
        target: () => i.get() > N ? F : X
      };
    });
  }
  function w() {
    const S = l[0], I = v(c, S);
    return b(I, n, !1);
  }
  function k() {
    const S = t - l[0] - 1, I = v(p, S);
    return b(I, -n, !0);
  }
  function B() {
    return m.every(({
      index: S
    }) => {
      const I = p.filter((L) => L !== S);
      return f(I, t) <= 0.1;
    });
  }
  function $() {
    m.forEach((S) => {
      const {
        target: I,
        translate: L,
        slideLocation: O
      } = S, M = I();
      M !== O.get() && (L.to(M), O.set(M));
    });
  }
  function E() {
    m.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: B,
    clear: E,
    loop: $,
    loopPoints: m
  };
}
function Dv(e, t, n) {
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
      a || (no(n) || n(u, p)) && d(p);
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
function Ev(e, t, n, o) {
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
    return fn(a).reduce((g, b) => {
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
function $v(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, p = v(), c = g(), m = n.map(l), f = b();
  function v() {
    if (!d) return 0;
    const k = n[0];
    return ge(t[i] - k[i]);
  }
  function g() {
    if (!d) return 0;
    const k = r.getComputedStyle(Re(o));
    return parseFloat(k.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map((k, B, $) => {
      const E = !B, A = $a($, B);
      return E ? m[B] + p : A ? m[B] + c : $[B + 1][i] - k[i];
    }).map(ge);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: f,
    startGap: p,
    endGap: c
  };
}
function Tv(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: p,
    direction: c
  } = e, m = Da(n);
  function f(w, k) {
    return pn(w).filter((B) => B % k === 0).map((B) => w.slice(B, B + k));
  }
  function v(w) {
    return w.length ? pn(w).reduce((k, B, $) => {
      const E = Re(k) || 0, A = E === 0, S = B === _n(w), I = a[d] - r[E][d], L = a[d] - r[B][p], O = !o && A ? c(l) : 0, M = !o && S ? c(i) : 0, F = ge(L - M - (I + O));
      return $ && F > t + u && k.push(B), S && k.push(w.length), k;
    }, []).map((k, B, $) => {
      const E = Math.max($[B - 1] || 0);
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
function Pv(e, t, n, o, a, r, l) {
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
    watchSlides: $,
    watchDrag: E,
    watchFocus: A
  } = r, S = 2, I = fv(), L = I.measure(t), O = n.map(I.measure), M = dv(u, d), F = M.measureSize(L), X = mv(F), H = iv(i, F), N = !c && !!k, G = c || !!k, {
    slideSizes: ee,
    slideSizesWithGaps: re,
    startGap: le,
    endGap: Oe
  } = $v(M, L, O, n, G, a), de = Tv(M, F, b, c, L, O, le, Oe, S), {
    snaps: ot,
    snapsAligned: Ne
  } = _v(M, H, L, O, de), Ae = -Re(ot) + Re(re), {
    snapsContained: Ke,
    scrollContainLimit: ht
  } = yv(F, Ae, Ne, k, S), he = N ? Ke : Ne, {
    limit: ce
  } = bv(Ae, he, c), Se = Js(_n(he), p, c), ye = Se.clone(), ue = pn(n), W = ({
    dragHandler: st,
    scrollBody: lo,
    scrollBounds: io,
    options: {
      loop: Cn
    }
  }, uo) => {
    Cn || io.constrain(st.pointerDown()), lo.seek(uo);
  }, se = ({
    scrollBody: st,
    translate: lo,
    location: io,
    offsetLocation: Cn,
    scrollLooper: uo,
    slideLooper: ol,
    dragHandler: al,
    animation: rl,
    eventHandler: Ma,
    scrollBounds: sl,
    options: {
      loop: La
    }
  }, Ra) => {
    const Fa = st.settled(), ll = !sl.shouldConstrain(), Va = La ? Fa : Fa && ll;
    Va && !al.pointerDown() && (rl.stop(), Ma.emit("settle")), Va || Ma.emit("scroll");
    const il = io.get() * Ra + at.get() * (1 - Ra);
    Cn.set(il), La && (uo.loop(st.direction()), ol.loop()), lo.to(Cn.get());
  }, be = uv(o, a, (st) => W(so, st), (st) => se(so, st)), De = 0.68, je = he[Se.get()], qe = an(je), at = an(je), rt = an(je), yt = an(je), tn = gv(qe, rt, at, yt, m, De), ao = Bv(c, he, Ae, ce, yt), ro = kv(be, Se, ye, tn, ao, yt, l), Pa = xv(ce), Aa = mn(), tl = Ev(t, n, l, g), {
    slideRegistry: Ia
  } = Cv(N, k, he, ht, de, ue), nl = Ov(e, n, Ia, ro, tn, Aa, l, A), so = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: L,
    slideRects: O,
    animation: be,
    axis: M,
    dragHandler: cv(M, e, o, a, yt, pv(M, a), qe, be, ro, tn, ao, Se, l, X, f, v, w, De, E),
    eventStore: Aa,
    percentOfView: X,
    index: Se,
    indexPrevious: ye,
    limit: ce,
    location: qe,
    offsetLocation: rt,
    previousLocation: at,
    options: r,
    resizeHandler: vv(t, l, a, n, M, B, I),
    scrollBody: tn,
    scrollBounds: hv(ce, rt, yt, tn, X),
    scrollLooper: wv(Ae, ce, rt, [qe, rt, at, yt]),
    scrollProgress: Pa,
    scrollSnapList: he.map(Pa.get),
    scrollSnaps: he,
    scrollTarget: ao,
    scrollTo: ro,
    slideLooper: Sv(M, F, Ae, ee, re, ot, he, rt, n),
    slideFocus: nl,
    slidesHandler: Dv(t, l, $),
    slidesInView: tl,
    slideIndexes: ue,
    slideRegistry: Ia,
    slidesToScroll: de,
    target: yt,
    translate: el(M, t)
  };
  return so;
}
function Av() {
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
const Iv = {
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
function Mv(e) {
  function t(r, l) {
    return Qs(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = fn(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => fn(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Lv(e) {
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
function Fn(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = Mv(a), l = Lv(r), i = mn(), u = Av(), {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: c
  } = r, {
    on: m,
    off: f,
    emit: v
  } = u, g = M;
  let b = !1, w, k = d(Iv, Fn.globalOptions), B = d(k), $ = [], E, A, S;
  function I() {
    const {
      container: ue,
      slides: W
    } = B;
    A = (Ro(ue) ? e.querySelector(ue) : ue) || e.children[0];
    const be = Ro(W) ? A.querySelectorAll(W) : W;
    S = [].slice.call(be || A.children);
  }
  function L(ue) {
    const W = Pv(e, A, S, o, a, ue, u);
    if (ue.loop && !W.slideLooper.canLoop()) {
      const se = Object.assign({}, ue, {
        loop: !1
      });
      return L(se);
    }
    return W;
  }
  function O(ue, W) {
    b || (k = d(k, ue), B = p(k), $ = W || $, I(), w = L(B), c([k, ...$.map(({
      options: se
    }) => se)]).forEach((se) => i.add(se, "change", M)), B.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(ye), w.eventHandler.init(ye), w.resizeHandler.init(ye), w.slidesHandler.init(ye), w.options.loop && w.slideLooper.loop(), A.offsetParent && S.length && w.dragHandler.init(ye), E = l.init(ye, $)));
  }
  function M(ue, W) {
    const se = de();
    F(), O(d({
      startIndex: se
    }, ue), W), u.emit("reInit");
  }
  function F() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), l.destroy(), i.clear();
  }
  function X() {
    b || (b = !0, i.clear(), F(), u.emit("destroy"), u.clear());
  }
  function H(ue, W, se) {
    !B.active || b || (w.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : B.duration), w.scrollTo.index(ue, se || 0));
  }
  function N(ue) {
    const W = w.index.add(1).get();
    H(W, ue, -1);
  }
  function G(ue) {
    const W = w.index.add(-1).get();
    H(W, ue, 1);
  }
  function ee() {
    return w.index.add(1).get() !== de();
  }
  function re() {
    return w.index.add(-1).get() !== de();
  }
  function le() {
    return w.scrollSnapList;
  }
  function Oe() {
    return w.scrollProgress.get(w.location.get());
  }
  function de() {
    return w.index.get();
  }
  function ot() {
    return w.indexPrevious.get();
  }
  function Ne() {
    return w.slidesInView.get();
  }
  function Ae() {
    return w.slidesInView.get(!1);
  }
  function Ke() {
    return E;
  }
  function ht() {
    return w;
  }
  function he() {
    return e;
  }
  function ce() {
    return A;
  }
  function Se() {
    return S;
  }
  const ye = {
    canScrollNext: ee,
    canScrollPrev: re,
    containerNode: ce,
    internalEngine: ht,
    destroy: X,
    off: f,
    on: m,
    emit: v,
    plugins: Ke,
    previousScrollSnap: ot,
    reInit: g,
    rootNode: he,
    scrollNext: N,
    scrollPrev: G,
    scrollProgress: Oe,
    scrollSnapList: le,
    scrollTo: H,
    selectedScrollSnap: de,
    slideNodes: Se,
    slidesInView: Ne,
    slidesNotInView: Ae
  };
  return O(t, n), setTimeout(() => u.emit("init"), 0), ye;
}
Fn.globalOptions = void 0;
function Ta(e = {}, t = []) {
  const n = _t(e), o = _t(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Pn(), i = Pn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return ie(() => {
    !rv() || !l.value || (Fn.globalOptions = Ta.globalOptions, i.value = Fn(l.value, a, r));
  }), zn(() => {
    i.value && i.value.destroy();
  }), n && J(e, (d) => {
    Sa(a, d) || (a = d, u());
  }), o && J(t, (d) => {
    sv(r, d) || (r = d, u());
  }), [l, i];
}
Ta.globalOptions = void 0;
const [Rv, Fv] = Zm(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Ta(
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
    const u = T(!1), d = T(!1);
    function p(c) {
      u.value = (c == null ? void 0 : c.canScrollNext()) || !1, d.value = (c == null ? void 0 : c.canScrollPrev()) || !1;
    }
    return ie(() => {
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
function oo() {
  const e = Fv();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const A0 = /* @__PURE__ */ x({
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
    } = Rv(o, a);
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
    return (f, v) => (h(), K("div", {
      class: ae(s(z)("relative", o.class)),
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
}), I0 = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = oo();
    return (a, r) => (h(), K("div", {
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
}), M0 = /* @__PURE__ */ x({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = oo();
    return (o, a) => (h(), K("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: ae(
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
}), L0 = /* @__PURE__ */ x({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = oo();
    return (r, l) => (h(), C(s(Ys), {
      disabled: !s(o),
      class: ae(
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
          V(s(Bm), { class: "size-4 text-current" }),
          l[0] || (l[0] = ne("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), R0 = /* @__PURE__ */ x({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = oo();
    return (r, l) => (h(), C(s(Ys), {
      disabled: !s(o),
      class: ae(
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
          V(s(km), { class: "size-4 text-current" }),
          l[0] || (l[0] = ne("span", { class: "sr-only" }, "Next Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Vv = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Sd), P(s(r), {
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
}), zv = /* @__PURE__ */ x({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(sa), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F0 = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Et), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V0 = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(la), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z0 = /* @__PURE__ */ x({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), N0 = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(pa), P(s(o), {
      class: s(z)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), K0 = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(fa), P(s(o), {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nv = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(ia), null, {
      default: y(() => [
        V(s(Zn), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(Yn), P(s(r), {
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
                V(s(to), { class: "size-4" }),
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
}), j0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(ia), null, {
      default: y(() => [
        V(s(Zn), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            V(s(Yn), P({
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
                    V(s(to), { class: "h-4 w-4" }),
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
}), H0 = /* @__PURE__ */ x({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), W0 = /* @__PURE__ */ x({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(zv), U(q(s(a))), {
      default: y(() => [
        V(s(Nv), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            V(Vv, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), U0 = /* @__PURE__ */ x({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Md), P(n.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G0 = /* @__PURE__ */ x({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s($d), P(n.value, {
      class: s(z)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), C(s(Td), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Be(Ee(o.heading), 1)
          ]),
          _: 1
        })) : fe("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kv = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, q0 = /* @__PURE__ */ x({
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
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), K("div", Kv, [
      V(s($m), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      V(s(Dd), P({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), X0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Vd), P(s(r), {
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
}), jv = { role: "presentation" }, Y0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Id), P(s(r), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        ne("div", jv, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z0 = /* @__PURE__ */ x({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(zd), P(n.value, {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q0 = /* @__PURE__ */ x({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("span", {
      class: ae(s(z)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), J0 = /* @__PURE__ */ x({
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
    return (r, l) => (h(), C(s(vc), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eg = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Ce(e);
    return (o, a) => (h(), C(s(gc), P({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(hc), null, {
      default: y(() => [
        V(s(yc), P(s(r), {
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
}), ng = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(wc), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), og = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Bc), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ag = /* @__PURE__ */ x({
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
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(bc), P(s(o), {
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
}), Hv = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, rg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(_c), P(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ne("span", Hv, [
          V(s(xs), null, {
            default: y(() => [
              V(s(Gs), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wv = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, sg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(kc), P(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ne("span", Wv, [
          V(s(xs), null, {
            default: y(() => [
              V(s(Em), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lg = /* @__PURE__ */ x({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("span", {
      class: ae(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ig = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(xc), P(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), ug = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(Cc), P(s(o), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dg = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Oc), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cg = /* @__PURE__ */ x({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(Dc), P(s(o), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        V(s(Sm), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Sc), P(s(r), {
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
}), fg = /* @__PURE__ */ x({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Zs(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => jt((h(), K("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => _t(a) ? a.value = i : null),
      class: ae(
        s(z)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Tr, s(a)]
    ]);
  }
}), mg = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Ec), P(n.value, {
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
}), vg = /* @__PURE__ */ x({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(Tc), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gg = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Pc), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Ac), null, {
      default: y(() => [
        V(s(Lc), P({ ...s(r), ...l.$attrs }, {
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
}), yg = /* @__PURE__ */ x({
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
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Nc), P(n.value, {
      class: s(z)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        V(s(Kc), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Ht(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), bg = /* @__PURE__ */ x({
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
    return (r, l) => (h(), C(s(qc), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wg = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(yp), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xg = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(Zc), P(s(o), {
      class: s(z)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        V(s(bp), { "as-child": "" }, {
          default: y(() => [
            V(s(Om), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _g = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Qc), null, {
      default: y(() => [
        V(s(sp), P({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            V(s(Gv)),
            V(s(vp), {
              class: ae(
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
            V(s(qv))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Cg = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(fp), P({
      class: s(z)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uv = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, Bg = /* @__PURE__ */ x({
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
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(up), P(s(o), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        ne("span", Uv, [
          V(s(dp), null, {
            default: y(() => [
              V(s(Gs), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        V(s(Os), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kg = /* @__PURE__ */ x({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Os), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Og = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mp), {
      class: ae(s(z)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Sg = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(lp), P(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Gv = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(gp), P(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          V(s(Dm))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qv = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Ce(n);
    return (a, r) => (h(), C(s(hp), P(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          V(s(qs))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dg = /* @__PURE__ */ x({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Y(e, t);
    return (r, l) => (h(), C(s(sa), U(q(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eg = /* @__PURE__ */ x({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(la), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $g = /* @__PURE__ */ x({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Et), U(q(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(ia), null, {
      default: y(() => [
        V(s(Zn), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(s(Yn), P({
          class: s(z)(s(Xv)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            V(s(Et), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                V(s(to), { class: "h-4 w-4" })
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
}), Pg = /* @__PURE__ */ x({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ag = /* @__PURE__ */ x({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(pa), P({
      class: s(z)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ig = /* @__PURE__ */ x({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(fa), P({
      class: s(z)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mg = /* @__PURE__ */ x({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Xv = xn(
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
), Lg = /* @__PURE__ */ x({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", {
      class: ae(s(z)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), Rg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Pp), P({
      class: s(z)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        V(s(Mp), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            V(s(Lp), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), K(xe, null, Ct(l.modelValue, (u, d) => (h(), C(s(Ip), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Fg = /* @__PURE__ */ x({
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
    const n = e, o = t, a = D(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Y(a, o);
    return (l, i) => (h(), C(s(Np), P(s(r), {
      class: s(z)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        V(s(Kp), {
          class: ae(
            s(z)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Yv = { class: "relative w-full overflow-auto" }, Vg = /* @__PURE__ */ x({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("div", Yv, [
      ne("table", {
        class: ae(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), zg = /* @__PURE__ */ x({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("tbody", {
      class: ae(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Zv = /* @__PURE__ */ x({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("td", {
      class: ae(
        s(z)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ng = /* @__PURE__ */ x({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("th", {
      class: ae(
        s(z)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Kg = /* @__PURE__ */ x({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("thead", {
      class: ae(s(z)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), jg = /* @__PURE__ */ x({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("tfoot", {
      class: ae(s(z)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Qv = /* @__PURE__ */ x({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("tr", {
      class: ae(
        s(z)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Hg = /* @__PURE__ */ x({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), K("caption", {
      class: ae(s(z)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Jv = { class: "flex items-center justify-center py-10" }, Wg = /* @__PURE__ */ x({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = D(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(Qv, null, {
      default: y(() => [
        V(Zv, P({
          class: s(z)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            ne("div", Jv, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ug = /* @__PURE__ */ x({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Zs(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => jt((h(), K("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => _t(a) ? a.value = i : null),
      class: ae(
        s(z)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Tr, s(a)]
    ]);
  }
});
export {
  y0 as Accordion,
  Vm as AccordionContent,
  zm as AccordionItem,
  Nm as AccordionTrigger,
  w0 as AlertDialog,
  S0 as AlertDialogAction,
  D0 as AlertDialogCancel,
  _0 as AlertDialogContent,
  k0 as AlertDialogDescription,
  O0 as AlertDialogFooter,
  C0 as AlertDialogHeader,
  B0 as AlertDialogTitle,
  x0 as AlertDialogTrigger,
  E0 as Avatar,
  T0 as AvatarFallback,
  $0 as AvatarImage,
  P0 as Badge,
  Ys as Button,
  A0 as Carousel,
  I0 as CarouselContent,
  M0 as CarouselItem,
  R0 as CarouselNext,
  L0 as CarouselPrevious,
  Vv as Command,
  W0 as CommandDialog,
  U0 as CommandEmpty,
  G0 as CommandGroup,
  q0 as CommandInput,
  X0 as CommandItem,
  Y0 as CommandList,
  Z0 as CommandSeparator,
  Q0 as CommandShortcut,
  zv as Dialog,
  F0 as DialogClose,
  Nv as DialogContent,
  K0 as DialogDescription,
  H0 as DialogFooter,
  z0 as DialogHeader,
  j0 as DialogScrollContent,
  N0 as DialogTitle,
  V0 as DialogTrigger,
  J0 as DropdownMenu,
  rg as DropdownMenuCheckboxItem,
  tg as DropdownMenuContent,
  ng as DropdownMenuGroup,
  ag as DropdownMenuItem,
  ug as DropdownMenuLabel,
  hc as DropdownMenuPortal,
  og as DropdownMenuRadioGroup,
  sg as DropdownMenuRadioItem,
  ig as DropdownMenuSeparator,
  lg as DropdownMenuShortcut,
  dg as DropdownMenuSub,
  pg as DropdownMenuSubContent,
  cg as DropdownMenuSubTrigger,
  eg as DropdownMenuTrigger,
  g0 as Flasher,
  u0 as Header,
  h0 as Heading,
  fg as Input,
  mg as Label,
  d0 as Main,
  vg as Popover,
  l0 as PopoverAnchor,
  hg as PopoverContent,
  gg as PopoverTrigger,
  yg as Progress,
  bg as Select,
  _g as SelectContent,
  Cg as SelectGroup,
  Bg as SelectItem,
  kg as SelectItemText,
  Og as SelectLabel,
  qv as SelectScrollDownButton,
  Gv as SelectScrollUpButton,
  Sg as SelectSeparator,
  xg as SelectTrigger,
  wg as SelectValue,
  Dg as Sheet,
  $g as SheetClose,
  Tg as SheetContent,
  Ig as SheetDescription,
  Mg as SheetFooter,
  Pg as SheetHeader,
  Ag as SheetTitle,
  Eg as SheetTrigger,
  Lg as Skeleton,
  Rg as Slider,
  Fg as Switch,
  Vg as Table,
  zg as TableBody,
  Hg as TableCaption,
  Zv as TableCell,
  Wg as TableEmpty,
  jg as TableFooter,
  Ng as TableHead,
  Kg as TableHeader,
  Qv as TableRow,
  Ug as Textarea,
  _m as Toast,
  v0 as ToastAction,
  Tm as ToastClose,
  ur as ToastDescription,
  Am as ToastProvider,
  Pm as ToastTitle,
  Cm as ToastViewport,
  Kf as Toaster,
  b0 as Tooltip,
  Km as TooltipContent,
  jm as TooltipProvider,
  Hm as TooltipTrigger,
  i0 as TwoColumnLayout,
  c0 as TwoColumnLayoutSidebar,
  p0 as TwoColumnLayoutSidebarDesktop,
  f0 as TwoColumnLayoutSidebarMobile,
  m0 as TwoColumnLayoutSidebarTrigger,
  Wm as avatarVariant,
  Um as badgeVariants,
  Oa as buttonVariants,
  t0 as preset,
  Xv as sheetVariants,
  Ff as toast,
  Mm as toastVariants,
  oo as useCarousel,
  Lm as useFlasher,
  zs as useToast
};
