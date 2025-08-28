var Gr = (e) => {
  throw TypeError(e);
};
var Qi = (e, t, n) => t.has(e) || Gr("Cannot " + n);
var Pn = (e, t, n) => (Qi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Yr = (e, t, n) => t.has(e) ? Gr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as pn from "vue";
import { computed as O, ref as E, shallowRef as Nn, watch as Y, getCurrentScope as Va, onScopeDispose as Na, shallowReadonly as ln, unref as s, defineComponent as w, createBlock as C, openBlock as h, normalizeProps as U, guardReactiveProps as G, withCtx as y, renderSlot as x, toRefs as fe, createVNode as M, mergeProps as k, onMounted as le, watchEffect as he, normalizeStyle as kt, createCommentVNode as ce, getCurrentInstance as He, toRef as Ws, camelize as Ao, withKeys as Ft, toHandlers as Ji, resolveDynamicComponent as Je, withModifiers as Ae, nextTick as te, withDirectives as wn, vShow as za, h as Ke, createTextVNode as Te, watchSyncEffect as eu, toDisplayString as Se, isRef as pt, onBeforeMount as Us, onUnmounted as Ue, createElementBlock as z, Fragment as $e, renderList as Lt, useSlots as ja, Teleport as Yn, onBeforeUnmount as _n, inject as Xn, provide as Zn, toHandlerKey as Gs, onBeforeUpdate as tu, onUpdated as nu, reactive as gn, readonly as Ka, Comment as Ha, cloneVNode as Ys, markRaw as Xs, createElementVNode as de, vModelSelect as ou, toRaw as au, mergeDefaults as Zs, watchPostEffect as ru, effectScope as Po, customRef as su, normalizeClass as ne, isVNode as lu, toValue as lt, vModelText as Qs } from "vue";
function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var iu = {
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
}, ta = iu, qa = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function uu(e) {
  return e.trim().replace(qa.whitespace, " ");
}
function du(e) {
  return encodeURIComponent(e).replace(qa.urlHexPairs, pu);
}
function cu(e) {
  return Object.keys(ta).forEach(function(t) {
    ta[t].test(e) && (e = e.replace(ta[t], t));
  }), e;
}
function pu(e) {
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
function wa(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = cu(uu(e)).replace(qa.quotes, "'");
  return "data:image/svg+xml," + du(t);
}
wa.toSrcset = function(t) {
  return wa(t).replace(/ /g, "%20");
};
var fu = wa, el = {}, tl = {};
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
})(tl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(tl);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(el);
let na = el;
var nl = (na.__esModule ? na : { default: na }).default, ol = {}, al = {};
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
})(al);
var mu = {
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
  const t = al, n = /* @__PURE__ */ o(mu);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(ol);
let oa = ol;
var vu = (oa.__esModule ? oa : { default: oa }).default, rl = {}, sl = {}, Wa = { exports: {} }, re = String, ll = function() {
  return { isColorSupported: !1, reset: re, bold: re, dim: re, italic: re, underline: re, inverse: re, hidden: re, strikethrough: re, black: re, red: re, green: re, yellow: re, blue: re, magenta: re, cyan: re, white: re, gray: re, bgBlack: re, bgRed: re, bgGreen: re, bgYellow: re, bgBlue: re, bgMagenta: re, bgCyan: re, bgWhite: re, blackBright: re, redBright: re, greenBright: re, yellowBright: re, blueBright: re, magentaBright: re, cyanBright: re, whiteBright: re, bgBlackBright: re, bgRedBright: re, bgGreenBright: re, bgYellowBright: re, bgBlueBright: re, bgMagentaBright: re, bgCyanBright: re, bgWhiteBright: re };
};
Wa.exports = ll();
Wa.exports.createColors = ll;
var gu = Wa.exports;
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
  const n = /* @__PURE__ */ o(gu);
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
})(sl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(sl);
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
})(rl);
let aa = rl;
var hu = (aa.__esModule ? aa : { default: aa }).default;
const uo = fu, yu = nl, il = vu, At = hu, [bu, { lineHeight: wu }] = il.fontSize.base, { spacing: $t, borderWidth: Xr, borderRadius: Zr } = il;
function qt(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const _u = yu.withOptions(function(e = { strategy: void 0 }) {
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
          "border-color": qt(
            o("colors.gray.500", At.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Xr.DEFAULT,
          "border-radius": Zr.none,
          "padding-top": $t[2],
          "padding-right": $t[3],
          "padding-bottom": $t[2],
          "padding-left": $t[3],
          "font-size": bu,
          "line-height": wu,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": qt(
              o("colors.blue.600", At.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": qt(
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
          color: qt(o("colors.gray.500", At.gray[500]), "--tw-text-opacity"),
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
          "background-position": `right ${$t[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": $t[10],
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
          "padding-right": $t[3],
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
          height: $t[4],
          width: $t[4],
          color: qt(o("colors.blue.600", At.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": qt(
            o("colors.gray.500", At.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Xr.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Zr.none
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
          "--tw-ring-color": qt(
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
var xu = _u;
const Cu = /* @__PURE__ */ Js(xu), $u = nl;
function Qr(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Bu = $u(
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
      { values: Qr(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: Qr(n("animationTimingFunction")) }
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
const Ou = /* @__PURE__ */ Js(Bu), qb = {
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
    Ou,
    Cu({
      strategy: "class"
    })
  ]
}, Du = ["top", "right", "bottom", "left"], Vt = Math.min, Xe = Math.max, Bo = Math.round, co = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), Eu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Su = {
  start: "end",
  end: "start"
};
function _a(e, t, n) {
  return Xe(e, Vt(t, n));
}
function St(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tt(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function Ua(e) {
  return e === "x" ? "y" : "x";
}
function Ga(e) {
  return e === "y" ? "height" : "width";
}
const Tu = /* @__PURE__ */ new Set(["top", "bottom"]);
function ct(e) {
  return Tu.has(Tt(e)) ? "y" : "x";
}
function Ya(e) {
  return Ua(ct(e));
}
function ku(e, t, n) {
  n === void 0 && (n = !1);
  const o = xn(e), a = Ya(e), r = Ga(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Oo(l)), [l, Oo(l)];
}
function Au(e) {
  const t = Oo(e);
  return [xa(e), t, xa(t)];
}
function xa(e) {
  return e.replace(/start|end/g, (t) => Su[t]);
}
const Jr = ["left", "right"], es = ["right", "left"], Pu = ["top", "bottom"], Iu = ["bottom", "top"];
function Mu(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? es : Jr : t ? Jr : es;
    case "left":
    case "right":
      return t ? Pu : Iu;
    default:
      return [];
  }
}
function Ru(e, t, n, o) {
  const a = xn(e);
  let r = Mu(Tt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(xa)))), r;
}
function Oo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Eu[t]);
}
function Fu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ul(e) {
  return typeof e != "number" ? Fu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Do(e) {
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
function ts(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = ct(t), l = Ya(t), i = Ga(l), u = Tt(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, f = o[i] / 2 - a[i] / 2;
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
const Lu = async (e, t, n) => {
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
  } = ts(d, o, u), f = o, v = {}, m = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: _
    } = i[g], {
      x: B,
      y: $,
      data: S,
      reset: D
    } = await _({
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
    c = B ?? c, p = $ ?? p, v = {
      ...v,
      [b]: {
        ...v[b],
        ...S
      }
    }, D && m <= 50 && (m++, typeof D == "object" && (D.placement && (f = D.placement), D.rects && (d = D.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : D.rects), {
      x: c,
      y: p
    } = ts(d, f, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: f,
    strategy: a,
    middlewareData: v
  };
};
async function zn(e, t) {
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
  } = St(t, e), m = ul(v), b = i[f ? p === "floating" ? "reference" : "floating" : p], _ = Do(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), B = p === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), S = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = Do(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: B,
    offsetParent: $,
    strategy: u
  }) : B);
  return {
    top: (_.top - D.top + m.top) / S.y,
    bottom: (D.bottom - _.bottom + m.bottom) / S.y,
    left: (_.left - D.left + m.left) / S.x,
    right: (D.right - _.right + m.right) / S.x
  };
}
const Vu = (e) => ({
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
    } = St(e, t) || {};
    if (d == null)
      return {};
    const p = ul(c), f = {
      x: n,
      y: o
    }, v = Ya(a), m = Ga(v), g = await l.getDimensions(d), b = v === "y", _ = b ? "top" : "left", B = b ? "bottom" : "right", $ = b ? "clientHeight" : "clientWidth", S = r.reference[m] + r.reference[v] - f[v] - r.floating[m], D = f[v] - r.reference[v], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let T = P ? P[$] : 0;
    (!T || !await (l.isElement == null ? void 0 : l.isElement(P))) && (T = i.floating[$] || r.floating[m]);
    const I = S / 2 - D / 2, F = T / 2 - g[m] / 2 - 1, A = Vt(p[_], F), L = Vt(p[B], F), R = A, X = T - g[m] - L, H = T / 2 - g[m] / 2 + I, Q = _a(R, H, X), q = !u.arrow && xn(a) != null && H !== Q && r.reference[m] / 2 - (H < R ? A : L) - g[m] / 2 < 0, me = q ? H < R ? H - R : H - X : 0;
    return {
      [v]: f[v] + me,
      data: {
        [v]: Q,
        centerOffset: H - Q - me,
        ...q && {
          alignmentOffset: me
        }
      },
      reset: q
    };
  }
}), Nu = function(e) {
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
        ...b
      } = St(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Tt(a), B = ct(i), $ = Tt(i) === i, S = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), D = f || ($ || !g ? [Oo(i)] : Au(i)), P = m !== "none";
      !f && P && D.push(...Ru(i, g, m, S));
      const T = [i, ...D], I = await zn(t, b), F = [];
      let A = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && F.push(I[_]), p) {
        const H = ku(a, l, S);
        F.push(I[H[0]], I[H[1]]);
      }
      if (A = [...A, {
        placement: a,
        overflows: F
      }], !F.every((H) => H <= 0)) {
        var L, R;
        const H = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, Q = T[H];
        if (Q && (!(p === "alignment" ? B !== ct(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((ee) => ct(ee.placement) === B ? ee.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: A
            },
            reset: {
              placement: Q
            }
          };
        let q = (R = A.filter((me) => me.overflows[0] <= 0).sort((me, ee) => me.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!q)
          switch (v) {
            case "bestFit": {
              var X;
              const me = (X = A.filter((ee) => {
                if (P) {
                  const j = ct(ee.placement);
                  return j === B || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((ee) => [ee.placement, ee.overflows.filter((j) => j > 0).reduce((j, ae) => j + ae, 0)]).sort((ee, j) => ee[1] - j[1])[0]) == null ? void 0 : X[0];
              me && (q = me);
              break;
            }
            case "initialPlacement":
              q = i;
              break;
          }
        if (a !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function ns(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function os(e) {
  return Du.some((t) => e[t] >= 0);
}
const zu = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = St(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await zn(t, {
            ...a,
            elementContext: "reference"
          }), l = ns(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: os(l)
            }
          };
        }
        case "escaped": {
          const r = await zn(t, {
            ...a,
            altBoundary: !0
          }), l = ns(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: os(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, dl = /* @__PURE__ */ new Set(["left", "top"]);
async function ju(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Tt(n), i = xn(n), u = ct(n) === "y", d = dl.has(l) ? -1 : 1, c = r && u ? -1 : 1, p = St(t, e);
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
const Ku = function(e) {
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
      } = t, u = await ju(t, e);
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
}, Hu = function(e) {
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
              y: B
            } = b;
            return {
              x: _,
              y: B
            };
          }
        },
        ...u
      } = St(e, t), d = {
        x: n,
        y: o
      }, c = await zn(t, u), p = ct(Tt(a)), f = Ua(p);
      let v = d[f], m = d[p];
      if (r) {
        const b = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", B = v + c[b], $ = v - c[_];
        v = _a(B, v, $);
      }
      if (l) {
        const b = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", B = m + c[b], $ = m - c[_];
        m = _a(B, m, $);
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
}, qu = function(e) {
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
      } = St(e, t), c = {
        x: n,
        y: o
      }, p = ct(a), f = Ua(p);
      let v = c[f], m = c[p];
      const g = St(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const $ = f === "y" ? "height" : "width", S = r.reference[f] - r.floating[$] + b.mainAxis, D = r.reference[f] + r.reference[$] - b.mainAxis;
        v < S ? v = S : v > D && (v = D);
      }
      if (d) {
        var _, B;
        const $ = f === "y" ? "width" : "height", S = dl.has(Tt(a)), D = r.reference[p] - r.floating[$] + (S && ((_ = l.offset) == null ? void 0 : _[p]) || 0) + (S ? 0 : b.crossAxis), P = r.reference[p] + r.reference[$] + (S ? 0 : ((B = l.offset) == null ? void 0 : B[p]) || 0) - (S ? b.crossAxis : 0);
        m < D ? m = D : m > P && (m = P);
      }
      return {
        [f]: v,
        [p]: m
      };
    }
  };
}, Wu = function(e) {
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
      } = St(e, t), c = await zn(t, d), p = Tt(a), f = xn(a), v = ct(a) === "y", {
        width: m,
        height: g
      } = r.floating;
      let b, _;
      p === "top" || p === "bottom" ? (b = p, _ = f === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (_ = p, b = f === "end" ? "top" : "bottom");
      const B = g - c.top - c.bottom, $ = m - c.left - c.right, S = Vt(g - c[b], B), D = Vt(m - c[_], $), P = !t.middlewareData.shift;
      let T = S, I = D;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = $), (o = t.middlewareData.shift) != null && o.enabled.y && (T = B), P && !f) {
        const A = Xe(c.left, 0), L = Xe(c.right, 0), R = Xe(c.top, 0), X = Xe(c.bottom, 0);
        v ? I = m - 2 * (A !== 0 || L !== 0 ? A + L : Xe(c.left, c.right)) : T = g - 2 * (R !== 0 || X !== 0 ? R + X : Xe(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: T
      });
      const F = await l.getDimensions(i.floating);
      return m !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Io() {
  return typeof window < "u";
}
function Yt(e) {
  return Xa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gt(e) {
  var t;
  return (t = (Xa(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xa(e) {
  return Io() ? e instanceof Node || e instanceof Ze(e).Node : !1;
}
function ut(e) {
  return Io() ? e instanceof Element || e instanceof Ze(e).Element : !1;
}
function vt(e) {
  return Io() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1;
}
function as(e) {
  return !Io() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
const Uu = /* @__PURE__ */ new Set(["inline", "contents"]);
function Qn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Uu.has(a);
}
const Gu = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Yu(e) {
  return Gu.has(Yt(e));
}
const Xu = [":popover-open", ":modal"];
function Mo(e) {
  return Xu.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Zu = ["transform", "translate", "scale", "rotate", "perspective"], Qu = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ju = ["paint", "layout", "strict", "content"];
function Za(e) {
  const t = Qa(), n = ut(e) ? dt(e) : e;
  return Zu.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Qu.some((o) => (n.willChange || "").includes(o)) || Ju.some((o) => (n.contain || "").includes(o));
}
function ed(e) {
  let t = Nt(e);
  for (; vt(t) && !hn(t); ) {
    if (Za(t))
      return t;
    if (Mo(t))
      return null;
    t = Nt(t);
  }
  return null;
}
function Qa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const td = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function hn(e) {
  return td.has(Yt(e));
}
function dt(e) {
  return Ze(e).getComputedStyle(e);
}
function Ro(e) {
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
    as(e) && e.host || // Fallback.
    gt(e)
  );
  return as(t) ? t.host : t;
}
function cl(e) {
  const t = Nt(e);
  return hn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && Qn(t) ? t : cl(t);
}
function jn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = cl(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Ze(a);
  if (r) {
    const i = Ca(l);
    return t.concat(l, l.visualViewport || [], Qn(a) ? a : [], i && n ? jn(i) : []);
  }
  return t.concat(a, jn(a, [], n));
}
function Ca(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pl(e) {
  const t = dt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = vt(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Bo(n) !== r || Bo(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function Ja(e) {
  return ut(e) ? e : e.contextElement;
}
function fn(e) {
  const t = Ja(e);
  if (!vt(t))
    return ft(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = pl(t);
  let l = (r ? Bo(n.width) : n.width) / o, i = (r ? Bo(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const nd = /* @__PURE__ */ ft(0);
function fl(e) {
  const t = Ze(e);
  return !Qa() || !t.visualViewport ? nd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function od(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ze(e) ? !1 : t;
}
function Ut(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = Ja(e);
  let l = ft(1);
  t && (o ? ut(o) && (l = fn(o)) : l = fn(e));
  const i = od(r, n, o) ? fl(r) : ft(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const f = Ze(r), v = o && ut(o) ? Ze(o) : o;
    let m = f, g = Ca(m);
    for (; g && o && v !== m; ) {
      const b = fn(g), _ = g.getBoundingClientRect(), B = dt(g), $ = _.left + (g.clientLeft + parseFloat(B.paddingLeft)) * b.x, S = _.top + (g.clientTop + parseFloat(B.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, p *= b.y, u += $, d += S, m = Ze(g), g = Ca(m);
    }
  }
  return Do({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function Fo(e, t) {
  const n = Ro(e).scrollLeft;
  return t ? t.left + n : Ut(gt(e)).left + n;
}
function ml(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Fo(e, n), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function ad(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = gt(o), i = t ? Mo(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ft(1);
  const c = ft(0), p = vt(o);
  if ((p || !p && !r) && ((Yt(o) !== "body" || Qn(l)) && (u = Ro(o)), vt(o))) {
    const v = Ut(o);
    d = fn(o), c.x = v.x + o.clientLeft, c.y = v.y + o.clientTop;
  }
  const f = l && !p && !r ? ml(l, u) : ft(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + f.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + f.y
  };
}
function rd(e) {
  return Array.from(e.getClientRects());
}
function sd(e) {
  const t = gt(e), n = Ro(e), o = e.ownerDocument.body, a = Xe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = Xe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Fo(e);
  const i = -n.scrollTop;
  return dt(o).direction === "rtl" && (l += Xe(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
const rs = 25;
function ld(e, t) {
  const n = Ze(e), o = gt(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const c = Qa();
    (!c || c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  const d = Fo(o);
  if (d <= 0) {
    const c = o.ownerDocument, p = c.body, f = getComputedStyle(p), v = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(o.clientWidth - p.clientWidth - v);
    m <= rs && (r -= m);
  } else d <= rs && (r += d);
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const id = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ud(e, t) {
  const n = Ut(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = vt(e) ? fn(e) : ft(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function ss(e, t, n) {
  let o;
  if (t === "viewport")
    o = ld(e, n);
  else if (t === "document")
    o = sd(gt(e));
  else if (ut(t))
    o = ud(t, n);
  else {
    const a = fl(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Do(o);
}
function vl(e, t) {
  const n = Nt(e);
  return n === t || !ut(n) || hn(n) ? !1 : dt(n).position === "fixed" || vl(n, t);
}
function dd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = jn(e, [], !1).filter((i) => ut(i) && Yt(i) !== "body"), a = null;
  const r = dt(e).position === "fixed";
  let l = r ? Nt(e) : e;
  for (; ut(l) && !hn(l); ) {
    const i = dt(l), u = Za(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && id.has(a.position) || Qn(l) && !u && vl(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = Nt(l);
  }
  return t.set(e, o), o;
}
function cd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Mo(t) ? [] : dd(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = ss(t, c, a);
    return d.top = Xe(p.top, d.top), d.right = Vt(p.right, d.right), d.bottom = Vt(p.bottom, d.bottom), d.left = Xe(p.left, d.left), d;
  }, ss(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function pd(e) {
  const {
    width: t,
    height: n
  } = pl(e);
  return {
    width: t,
    height: n
  };
}
function fd(e, t, n) {
  const o = vt(t), a = gt(t), r = n === "fixed", l = Ut(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ft(0);
  function d() {
    u.x = Fo(a);
  }
  if (o || !o && !r)
    if ((Yt(t) !== "body" || Qn(a)) && (i = Ro(t)), o) {
      const v = Ut(t, !0, r, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? ml(a, i) : ft(0), p = l.left + i.scrollLeft - u.x - c.x, f = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: f,
    width: l.width,
    height: l.height
  };
}
function ra(e) {
  return dt(e).position === "static";
}
function ls(e, t) {
  if (!vt(e) || dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return gt(e) === n && (n = n.ownerDocument.body), n;
}
function gl(e, t) {
  const n = Ze(e);
  if (Mo(e))
    return n;
  if (!vt(e)) {
    let a = Nt(e);
    for (; a && !hn(a); ) {
      if (ut(a) && !ra(a))
        return a;
      a = Nt(a);
    }
    return n;
  }
  let o = ls(e, t);
  for (; o && Yu(o) && ra(o); )
    o = ls(o, t);
  return o && hn(o) && ra(o) && !Za(o) ? n : o || ed(e) || n;
}
const md = async function(e) {
  const t = this.getOffsetParent || gl, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: fd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function vd(e) {
  return dt(e).direction === "rtl";
}
const gd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ad,
  getDocumentElement: gt,
  getClippingRect: cd,
  getOffsetParent: gl,
  getElementRects: md,
  getClientRects: rd,
  getDimensions: pd,
  getScale: fn,
  isElement: ut,
  isRTL: vd
};
function hl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function hd(e, t) {
  let n = null, o;
  const a = gt(e);
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
    const m = co(p), g = co(a.clientWidth - (c + f)), b = co(a.clientHeight - (p + v)), _ = co(c), $ = {
      rootMargin: -m + "px " + -g + "px " + -b + "px " + -_ + "px",
      threshold: Xe(0, Vt(1, u)) || 1
    };
    let S = !0;
    function D(P) {
      const T = P[0].intersectionRatio;
      if (T !== u) {
        if (!S)
          return l();
        T ? l(!1, T) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !hl(d, e.getBoundingClientRect()) && l(), S = !1;
    }
    try {
      n = new IntersectionObserver(D, {
        ...$,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(D, $);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function yd(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Ja(e), c = a || r ? [...d ? jn(d) : [], ...jn(t)] : [];
  c.forEach((_) => {
    a && _.addEventListener("scroll", n, {
      passive: !0
    }), r && _.addEventListener("resize", n);
  });
  const p = d && i ? hd(d, n) : null;
  let f = -1, v = null;
  l && (v = new ResizeObserver((_) => {
    let [B] = _;
    B && B.target === d && v && (v.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var $;
      ($ = v) == null || $.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let m, g = u ? Ut(e) : null;
  u && b();
  function b() {
    const _ = Ut(e);
    g && !hl(g, _) && n(), g = _, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var _;
    c.forEach((B) => {
      a && B.removeEventListener("scroll", n), r && B.removeEventListener("resize", n);
    }), p == null || p(), (_ = v) == null || _.disconnect(), v = null, u && cancelAnimationFrame(m);
  };
}
const bd = Ku, wd = Hu, is = Nu, _d = Wu, xd = zu, Cd = Vu, $d = qu, Bd = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: gd,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Lu(e, t, {
    ...a,
    platform: r
  });
};
function Od(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function $a(e) {
  if (Od(e)) {
    const t = e.$el;
    return Xa(t) && Yt(t) === "#comment" ? null : t;
  }
  return e;
}
function cn(e) {
  return typeof e == "function" ? e() : s(e);
}
function Dd(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = $a(cn(e.element));
      return n == null ? {} : Cd({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function yl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function us(e, t) {
  const n = yl(e);
  return Math.round(t * n) / n;
}
function Ed(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = O(() => {
    var T;
    return (T = cn(n.open)) != null ? T : !0;
  }), r = O(() => cn(n.middleware)), l = O(() => {
    var T;
    return (T = cn(n.placement)) != null ? T : "bottom";
  }), i = O(() => {
    var T;
    return (T = cn(n.strategy)) != null ? T : "absolute";
  }), u = O(() => {
    var T;
    return (T = cn(n.transform)) != null ? T : !0;
  }), d = O(() => $a(e.value)), c = O(() => $a(t.value)), p = E(0), f = E(0), v = E(i.value), m = E(l.value), g = Nn({}), b = E(!1), _ = O(() => {
    const T = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return T;
    const I = us(c.value, p.value), F = us(c.value, f.value);
    return u.value ? {
      ...T,
      transform: "translate(" + I + "px, " + F + "px)",
      ...yl(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: I + "px",
      top: F + "px"
    };
  });
  let B;
  function $() {
    if (d.value == null || c.value == null)
      return;
    const T = a.value;
    Bd(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      p.value = I.x, f.value = I.y, v.value = I.strategy, m.value = I.placement, g.value = I.middlewareData, b.value = T !== !1;
    });
  }
  function S() {
    typeof B == "function" && (B(), B = void 0);
  }
  function D() {
    if (S(), o === void 0) {
      $();
      return;
    }
    if (d.value != null && c.value != null) {
      B = o(d.value, c.value, $);
      return;
    }
  }
  function P() {
    a.value || (b.value = !1);
  }
  return Y([r, l, i, a], $, {
    flush: "sync"
  }), Y([d, c], D, {
    flush: "sync"
  }), Y(a, P, {
    flush: "sync"
  }), Va() && Na(S), {
    x: ln(p),
    y: ln(f),
    strategy: ln(v),
    placement: ln(m),
    middlewareData: ln(g),
    isPositioned: ln(b),
    floatingStyles: _,
    update: $
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
function er(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Eo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function Sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Td = function e(t, n) {
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
const Wt = /* @__PURE__ */ Sd(Td);
function mn(e) {
  return e == null;
}
function kd(e, t) {
  var n;
  const o = Nn();
  return he(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Ka(o);
}
function Xt(e) {
  return Va() ? (Na(e), !0) : !1;
}
function Ad() {
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
function Pd(e) {
  let t = !1, n;
  const o = Po(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function bl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Po(!0), n = o.run(() => e(...r))), Xt(a), n);
}
function Et(e) {
  return typeof e == "function" ? e() : s(e);
}
const ht = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Id = (e) => typeof e < "u", Md = (e) => e != null, Rd = Object.prototype.toString, Fd = (e) => Rd.call(e) === "[object Object]", wl = () => {
}, ds = /* @__PURE__ */ Ld();
function Ld() {
  var e, t;
  return ht && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Vd(e) {
  return He();
}
function _l(e, t = 1e4) {
  return su((n, o) => {
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
function Nd(e, t) {
  Vd() && _n(e, t);
}
function tr(e, t, n = {}) {
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
    isPending: Ka(a),
    start: u,
    stop: i
  };
}
function zd(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = tr(
    o ?? wl,
    e,
    t
  ), r = O(() => !a.isPending.value);
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
    return wl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, f, v) => (c.addEventListener(p, f, v), () => c.removeEventListener(p, f, v)), u = Y(
    () => [et(t), Et(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const f = Fd(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((v) => o.map((m) => i(c, v, m, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Xt(d), d;
}
function jd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function nr(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Jn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = jd(t);
  return yn(a, r, (d) => {
    d.repeat && Et(i) || u(d) && n(d);
  }, l);
}
function or() {
  const e = E(!1), t = He();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function Kd(e) {
  const t = or();
  return O(() => (t.value, !!e()));
}
function Hd(e, t, n = {}) {
  const { window: o = Jn, ...a } = n;
  let r;
  const l = Kd(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = O(() => {
    const f = Et(e), v = (Array.isArray(f) ? f : [f]).map(et).filter(Md);
    return new Set(v);
  }), d = Y(
    () => u.value,
    (f) => {
      i(), l.value && f.size && (r = new MutationObserver(t), f.forEach((v) => r.observe(v, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return Xt(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function xl(e, t = {}) {
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
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && c(), Xt(p), {
    isActive: Ka(r),
    pause: p,
    resume: c
  };
}
function qd(e) {
  return JSON.parse(JSON.stringify(e));
}
function _e(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, v = He(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : qd($) : $, _ = () => Id(e[t]) ? b(e[t]) : p, B = ($) => {
    f ? f($) && m(g, $) : m(g, $);
  };
  if (u) {
    const $ = _(), S = E($);
    let D = !1;
    return Y(
      () => e[t],
      (P) => {
        D || (D = !0, S.value = b(P), te(() => D = !1));
      }
    ), Y(
      S,
      (P) => {
        !D && (P !== e[t] || c) && B(P);
      },
      { deep: c }
    ), S;
  } else
    return O({
      get() {
        return _();
      },
      set($) {
        B($);
      }
    });
}
function Lo(e) {
  return e ? e.flatMap((t) => t.type === $e ? Lo(t.children) : [t]) : [];
}
function Me() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Wd = ["INPUT", "TEXTAREA"];
function Cl(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Wd.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, f, v, m, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], _ = v || m, B = p || f;
  if (!g && !b && (!_ && !B || a === "vertical" && B || a === "horizontal" && _))
    return null;
  const $ = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!$.length)
    return null;
  d && e.preventDefault();
  let S = null;
  return B || _ ? S = $l($, t, {
    goForward: _ ? m : u === "ltr" ? p : f,
    loop: i
  }) : g ? S = $.at(0) || null : b && (S = $.at(-1) || null), c && (S == null || S.focus()), S;
}
function $l(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? $l(
    e,
    i,
    n,
    o
  ) : i : null;
}
function sa(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ba(e, t, n = ".", o) {
  if (!sa(t))
    return Ba(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : sa(l) && sa(a[r]) ? a[r] = Ba(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function Ud(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Ba(n, o, ""), {})
  );
}
const Gd = Ud(), [Vo, Wb] = ie("ConfigProvider");
let Yd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Xd = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Yd[Math.random() * 64 | 0];
  return t;
};
const Zd = bl(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = O(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = Vo({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", ds && (a == null || a()), t.value = void 0;
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
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Gd({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), ds && (a = yn(
      document,
      "touchmove",
      (f) => Qd(f),
      { passive: !1 }
    )), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function eo(e) {
  const t = Xd(6), n = Zd();
  n.value.set(t, e ?? !1);
  const o = O({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Nd(() => {
    n.value.delete(t);
  }), o;
}
function Bl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Bl(n);
  }
}
function Qd(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Bl(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Jd = "data-radix-vue-collection-item";
function Cn(e, t = Jd) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = et(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return tu(() => {
      a.value = [];
    }), le(r), nu(r), Y(() => o == null ? void 0 : o.value, r, { immediate: !0 }), Zn(n, a), a;
  }, injectCollection: () => Xn(n, E([])) };
}
function zt(e) {
  const t = Vo({
    dir: E("ltr")
  });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function jt(e) {
  const t = He(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[Gs(Ao(a))] = (...r) => e(a, ...r);
  }), o;
}
let la = 0;
function ar() {
  he((e) => {
    if (!ht)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? cs()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? cs()
    ), la++, e(() => {
      la === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), la--;
    });
  });
}
function cs() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function No(e) {
  return O(() => {
    var t;
    return Et(e) ? !!((t = et(e)) != null && t.closest("form")) : !0;
  });
}
function Re(e) {
  const t = He(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = Ws(e);
  return O(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Ao(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function J(e, t) {
  const n = Re(e), o = t ? jt(t) : {};
  return O(() => ({
    ...n.value,
    ...o
  }));
}
function V() {
  const e = He(), t = E(), n = O(() => {
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
function ec(e, t) {
  const n = _l(!1, 300), o = E(null), a = Ad();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = tc(c, d.getBoundingClientRect()), f = nc(c, p), v = oc(u.getBoundingClientRect()), m = rc([...f, ...v]);
    o.value = m, n.value = !0;
  }
  return he((i) => {
    if (e.value && t.value) {
      const u = (c) => l(c, t.value), d = (c) => l(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), he((i) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var p, f;
        if (!o.value)
          return;
        const v = c.target, m = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(v)) || ((f = t.value) == null ? void 0 : f.contains(v)), b = !ac(m, o.value), _ = !!v.closest("[data-grace-area-trigger]");
        g ? r() : (b || _) && (r(), a.trigger());
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
function tc(e, t) {
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
function nc(e, t, n = 5) {
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
function oc(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function ac(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function rc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), sc(t);
}
function sc(e) {
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
var lc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, un = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), fo = {}, ia = 0, Ol = function(e) {
  return e && (e.host || Ol(e.parentNode));
}, ic = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ol(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, uc = function(e, t, n, o) {
  var a = ic(t, Array.isArray(e) ? e : [e]);
  fo[n] || (fo[n] = /* @__PURE__ */ new WeakMap());
  var r = fo[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var v = f.getAttribute(o), m = v !== null && v !== "false", g = (un.get(f) || 0) + 1, b = (r.get(f) || 0) + 1;
          un.set(f, g), r.set(f, b), l.push(f), g === 1 && m && po.set(f, !0), b === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", f, _);
        }
    });
  };
  return c(t), i.clear(), ia++, function() {
    l.forEach(function(p) {
      var f = un.get(p) - 1, v = r.get(p) - 1;
      un.set(p, f), r.set(p, v), f || (po.has(p) || p.removeAttribute(o), po.delete(p)), v || p.removeAttribute(n);
    }), ia--, ia || (un = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), fo = {});
  };
}, dc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = lc(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), uc(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function to(e) {
  let t;
  Y(() => et(e), (n) => {
    n ? t = dc(n) : t && t();
  }), Ue(() => {
    t && t();
  });
}
let cc = 0;
function Pe(e, t = "radix") {
  const n = Vo({ useId: void 0 });
  return pn.useId ? `${t}-${pn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++cc}`;
}
function Dl(e) {
  const t = E(), n = O(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = O(() => {
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
function pc(e, t) {
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
const fc = "data-item-text";
function rr(e) {
  const t = _l("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = Me(), l = a.map((p) => {
        var f;
        return {
          ref: p,
          textValue: ((f = (p.querySelector(`[${fc}]`) ?? p).textContent) == null ? void 0 : f.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = vc(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function mc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function vc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = mc(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const sr = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = Lo(n.default()), l = r.findIndex((c) => c.type !== Ha);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? k(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = Ys(i, u);
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
  setup(e, { attrs: t, slots: n }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ke(o, t) : o !== "template" ? () => Ke(e.as, t, { default: n.default }) : () => Ke(sr, t, { default: n.default });
  }
});
function El() {
  const e = E(), t = O(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : et(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Sl, gc] = ie("CollapsibleRoot"), hc = /* @__PURE__ */ w({
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
    return gc({
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
}), yc = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    V();
    const n = Sl();
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
function bc(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? Jn, { state: d, dispatch: c } = pc(l, {
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
    var _;
    if (ht) {
      const B = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (_ = t.value) == null || _.dispatchEvent(B);
    }
  };
  Y(
    e,
    async (b, _) => {
      var B;
      const $ = _ !== b;
      if (await te(), $) {
        const S = a.value, D = mo(t.value);
        b ? (c("MOUNT"), p("enter"), D === "none" && p("after-enter")) : D === "none" || ((B = o.value) == null ? void 0 : B.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : _ && S !== D ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (b) => {
    const _ = mo(t.value), B = _.includes(
      b.animationName
    ), $ = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && B && (p(`after-${$}`), c("ANIMATION_END"), !r.value)) {
      const S = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var D;
        ((D = t.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = S);
      });
    }
    b.target === t.value && _ === "none" && c("ANIMATION_END");
  }, v = (b) => {
    b.target === t.value && (a.value = mo(t.value));
  }, m = Y(
    t,
    (b, _) => {
      b ? (o.value = getComputedStyle(b), b.addEventListener("animationstart", v), b.addEventListener("animationcancel", f), b.addEventListener("animationend", f)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), _ == null || _.removeEventListener("animationstart", v), _ == null || _.removeEventListener("animationcancel", f), _ == null || _.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), g = Y(d, () => {
    const b = mo(t.value);
    a.value = d.value === "mounted" ? b : "none";
  });
  return Ue(() => {
    m(), g();
  }), {
    isPresent: O(
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
    const { present: a, forceMount: r } = fe(e), l = E(), { isPresent: i } = bc(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = Lo(u || []);
    const d = He();
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
    return () => r.value || a.value || i.value ? Ke(t.default({ present: i })[0], {
      ref: (c) => {
        const p = et(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), wc = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Sl();
    n.contentId || (n.contentId = Pe(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = V(), l = E(0), i = E(0), u = O(() => n.open.value), d = E(u.value), c = E();
    return Y(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await te();
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
    }), (p, f) => (h(), C(s(tt), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, m;
        return [
          M(s(K), k(p.$attrs, {
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
                (g = o.value) != null && g.present ? x(p.$slots, "default", { key: 0 }) : ce("", !0)
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
function Tl({ type: e, defaultValue: t, modelValue: n }) {
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
function _c({ type: e, defaultValue: t, modelValue: n }) {
  return e || Tl({ type: e, defaultValue: t, modelValue: n });
}
function xc({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Cc(e, t) {
  const n = E(_c(e)), o = _e(e, "modelValue", t, {
    defaultValue: xc(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  Y(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = Tl(e);
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
  const r = O(() => n.value === "single");
  return {
    modelValue: o,
    type: n,
    changeModelValue: a,
    isSingle: r
  };
}
const [zo, $c] = ie("AccordionRoot"), Bc = /* @__PURE__ */ w({
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
    const n = e, o = t, { dir: a, disabled: r } = fe(n), l = zt(a), { modelValue: i, changeModelValue: u, isSingle: d } = Cc(n, o), { forwardRef: c, currentElement: p } = V();
    return $c({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v) => (h(), C(s(K), {
      ref: s(c),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: y(() => [
        x(f.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [lr, Oc] = ie("AccordionItem"), Dc = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = zo(), a = O(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = O(() => o.disabled.value || n.disabled), l = O(() => r.value ? "" : void 0), i = O(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = V();
    Oc({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: O(() => n.value)
    });
    function c(p) {
      var f;
      const v = p.target;
      if (Array.from(((f = o.parentElement.value) == null ? void 0 : f.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((m) => m === v) === -1)
        return null;
      Cl(
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
    return (p, f) => (h(), C(s(hc), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Ft(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        x(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Ec = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = zo(), o = lr();
    return V(), (a, r) => (h(), C(s(wc), {
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
}), Sc = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = zo(), o = lr();
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
}), Tc = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = zo(), o = lr();
    o.triggerId || (o.triggerId = Pe(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), C(s(yc), {
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
}), [yt, kc] = ie("DialogRoot"), ir = /* @__PURE__ */ w({
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
    }), a = E(), r = E(), { modal: l } = fe(n);
    return kc({
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
}), ur = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = yt(), { forwardRef: o, currentElement: a } = V();
    return n.contentId || (n.contentId = Pe(void 0, "radix-vue-dialog-content")), le(() => {
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
}), $n = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = or();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Yn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ce("", !0);
  }
}), dr = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($n), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ac = "dismissableLayer.pointerDownOutside", Pc = "dismissableLayer.focusOutside";
function kl(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function Ic(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return he((l) => {
    if (!ht)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (kl(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            er(
              Ac,
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
function Mc(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return he((r) => {
    if (!ht)
      return;
    const l = async (i) => {
      t != null && t.value && (await te(), !(!t.value || kl(t.value, i.target)) && i.target && !a.value && er(
        Pc,
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
}), Bn = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = V(), l = O(
      () => {
        var m;
        return ((m = r.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), i = O(() => rt.layersRoot), u = O(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = O(() => rt.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const m = Array.from(i.value), [g] = [...rt.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(g);
      return u.value >= b;
    }), p = Ic(async (m) => {
      const g = [...rt.branches].some(
        (b) => b == null ? void 0 : b.contains(m.target)
      );
      !c.value || g || (o("pointerDownOutside", m), o("interactOutside", m), await te(), m.defaultPrevented || o("dismiss"));
    }, r), f = Mc((m) => {
      [...rt.branches].some(
        (g) => g == null ? void 0 : g.contains(m.target)
      ) || (o("focusOutside", m), o("interactOutside", m), m.defaultPrevented || o("dismiss"));
    }, r);
    nr("Escape", (m) => {
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
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Rc = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = V();
    return le(() => {
      rt.branches.add(o.value);
    }), Ue(() => {
      rt.branches.delete(o.value);
    }), (a, r) => (h(), C(s(K), k({ ref: s(n) }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ua = "focusScope.autoFocusOnMount", da = "focusScope.autoFocusOnUnmount", ps = { bubbles: !1, cancelable: !0 };
function Co(e, { select: t = !1 } = {}) {
  const n = Me();
  for (const o of e)
    if (Mt(o, { select: t }), Me() !== n)
      return !0;
}
function Fc(e) {
  const t = cr(e), n = fs(t, e), o = fs(t.reverse(), e);
  return [n, o];
}
function cr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function fs(e, t) {
  for (const n of e)
    if (!Lc(n, { upTo: t }))
      return n;
}
function Lc(e, { upTo: t }) {
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
function Vc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Mt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Me();
    e.focus({ preventScroll: !0 }), e !== n && Vc(e) && t && e.select();
  }
}
const Nc = Pd(() => E([]));
function zc() {
  const e = Nc();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = ms(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = ms(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function ms(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function jc(e) {
  return e.filter((t) => t.tagName !== "A");
}
const jo = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = V(), l = E(null), i = zc(), u = gn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    he((c) => {
      if (!ht)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function f(b) {
        if (u.paused || !p)
          return;
        const _ = b.target;
        p.contains(_) ? l.value = _ : Mt(l.value, { select: !0 });
      }
      function v(b) {
        if (u.paused || !p)
          return;
        const _ = b.relatedTarget;
        _ !== null && (p.contains(_) || Mt(l.value, { select: !0 }));
      }
      function m(b) {
        p.contains(l.value) || Mt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const g = new MutationObserver(m);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), he(async (c) => {
      const p = r.value;
      if (await te(), !p)
        return;
      i.add(u);
      const f = Me();
      if (!p.contains(f)) {
        const v = new CustomEvent(ua, ps);
        p.addEventListener(ua, (m) => o("mountAutoFocus", m)), p.dispatchEvent(v), v.defaultPrevented || (Co(jc(cr(p)), {
          select: !0
        }), Me() === f && Mt(p));
      }
      c(() => {
        p.removeEventListener(ua, (g) => o("mountAutoFocus", g));
        const v = new CustomEvent(da, ps), m = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(da, m), p.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Mt(f ?? document.body, { select: !0 }), p.removeEventListener(da, m), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = Me();
      if (p && f) {
        const v = c.currentTarget, [m, g] = Fc(v);
        m && g ? !c.shiftKey && f === g ? (c.preventDefault(), n.loop && Mt(m, { select: !0 })) : c.shiftKey && f === m && (c.preventDefault(), n.loop && Mt(g, { select: !0 })) : f === v && c.preventDefault();
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
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Kc = "menu.itemSelect", Oa = ["Enter", " "], Hc = ["ArrowDown", "PageUp", "Home"], Al = ["ArrowUp", "PageDown", "End"], qc = [...Hc, ...Al], Wc = {
  ltr: [...Oa, "ArrowRight"],
  rtl: [...Oa, "ArrowLeft"]
}, Uc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function pr(e) {
  return e ? "open" : "closed";
}
function So(e) {
  return e === "indeterminate";
}
function fr(e) {
  return So(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Da(e) {
  const t = Me();
  for (const n of e)
    if (n === t || (n.focus(), Me() !== t))
      return;
}
function Gc(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Yc(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Gc(n, t);
}
function Kn(e) {
  return e.pointerType === "mouse";
}
const Xc = "DialogTitle", Zc = "DialogContent";
function Qc({
  titleName: e = Xc,
  contentName: t = Zc,
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
const Pl = /* @__PURE__ */ w({
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
    return a.titleId || (a.titleId = Pe(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = Pe(void 0, "radix-vue-dialog-description")), le(() => {
      a.contentElement = l, Me() !== document.body && (a.triggerElement.value = Me());
    }), process.env.NODE_ENV !== "production" && Qc({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(jo), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        M(s(Bn), k({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(pr)(s(a).open.value)
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
}), Jc = /* @__PURE__ */ w({
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
    const n = e, o = t, a = yt(), r = jt(o), { forwardRef: l, currentElement: i } = V();
    return to(i), (u, d) => (h(), C(Pl, k({ ...n, ...s(r) }, {
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
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), ep = /* @__PURE__ */ w({
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
    const n = e, o = jt(t);
    V();
    const a = yt(), r = E(!1), l = E(!1);
    return (i, u) => (h(), C(Pl, k({ ...n, ...s(o) }, {
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
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ko = /* @__PURE__ */ w({
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
    const n = e, o = t, a = yt(), r = jt(o), { forwardRef: l } = V();
    return (i, u) => (h(), C(s(tt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Jc, k({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(ep, k({
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
}), tp = /* @__PURE__ */ w({
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
}), Ho = /* @__PURE__ */ w({
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
          M(tp, k(o.$attrs, {
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
      }, 8, ["present"])) : ce("", !0);
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
}), mr = /* @__PURE__ */ w({
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
}), vr = /* @__PURE__ */ w({
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
}), np = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = J(e, t);
    return V(), (o, a) => (h(), C(s(ir), k(s(n), { modal: !0 }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), op = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(ur), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ap = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($n), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rp, sp] = ie("AlertDialogContent"), lp = /* @__PURE__ */ w({
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
    const n = e, o = jt(t);
    V();
    const a = E();
    return sp({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(Ko), k({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Ae(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Ae(() => {
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
}), ip = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Ho), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = rp(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(Zt), k(t, { ref: s(o) }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(mr), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(vr), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pp = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Zt), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Il, fp] = ie("AvatarRoot"), mp = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return V(), fp({
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
function vp(e, t) {
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
  }), Ue(() => {
    o.value = !1;
  }), n;
}
const gp = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a, referrerPolicy: r } = fe(n);
    V();
    const l = Il(), i = vp(a, r);
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
      [za, s(i) === "loaded"]
    ]);
  }
}), hp = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Il();
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
    }, 8, ["as-child", "as"])) : ce("", !0);
  }
}), [Ml, yp] = ie("PopperRoot"), On = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return yp({
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
    const t = e, { forwardRef: n, currentElement: o } = V(), a = Ml();
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
function bp(e) {
  return e !== null;
}
function wp(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, f] = Ea(r), v = { start: "0%", center: "50%", end: "100%" }[f], m = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let b = "", _ = "";
      return p === "bottom" ? (b = u ? v : `${m}px`, _ = `${-c}px`) : p === "top" ? (b = u ? v : `${m}px`, _ = `${l.floating.height + c}px`) : p === "right" ? (b = `${-c}px`, _ = u ? v : `${g}px`) : p === "left" && (b = `${l.floating.width + c}px`, _ = u ? v : `${g}px`), { data: { x: b, y: _ } };
    }
  };
}
function Ea(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Rl = {
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
}, [Ub, _p] = ie("PopperContent"), bn = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Zs({
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
    ...Rl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Ml(), { forwardRef: r, currentElement: l } = V(), i = E(), u = E(), { width: d, height: c } = Dl(u), p = O(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), v = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = O(() => ({
      padding: f.value,
      boundary: v.value.filter(bp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), g = kd(() => [
      bd({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && is({
        ...m.value
      }),
      n.avoidCollisions && wd({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? $d() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && is({
        ...m.value
      }),
      _d({
        ...m.value,
        apply: ({ elements: A, rects: L, availableWidth: R, availableHeight: X }) => {
          const { width: H, height: Q } = L.reference, q = A.floating.style;
          q.setProperty(
            "--radix-popper-available-width",
            `${R}px`
          ), q.setProperty(
            "--radix-popper-available-height",
            `${X}px`
          ), q.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), q.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && Dd({ element: u.value, padding: n.arrowPadding }),
      wp({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && xd({ strategy: "referenceHidden", ...m.value })
    ]), { floatingStyles: b, placement: _, isPositioned: B, middlewareData: $ } = Ed(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => yd(...A, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), S = O(
      () => Ea(_.value)[0]
    ), D = O(
      () => Ea(_.value)[1]
    );
    ru(() => {
      B.value && o("placed");
    });
    const P = O(
      () => {
        var A;
        return ((A = $.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), T = E("");
    he(() => {
      l.value && (T.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = O(() => {
      var A;
      return ((A = $.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), F = O(() => {
      var A;
      return ((A = $.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return _p({
      placedSide: S,
      onArrowChange: (A) => u.value = A,
      arrowX: I,
      arrowY: F,
      shouldHideArrow: P
    }), (A, L) => {
      var R, X, H;
      return h(), z("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: kt({
          ...s(b),
          transform: s(B) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T.value,
          "--radix-popper-transform-origin": [
            (R = s($).transformOrigin) == null ? void 0 : R.x,
            (X = s($).transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((H = s($).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        M(s(K), k({ ref: s(r) }, A.$attrs, {
          "as-child": n.asChild,
          as: A.as,
          "data-side": S.value,
          "data-align": D.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(B) ? void 0 : "none"
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
}), xp = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = O(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), z($e, null, Lt(n.value, (r) => (h(), C(oo, {
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
}), Cp = "data-radix-vue-collection-item", [gr, $p] = ie("CollectionProvider");
function hr(e = Cp) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = $p({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = br(o), r = O(() => Array.from(o.itemMap.value.values())), l = O(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const yr = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = gr(), { primitiveElement: o, currentElement: a } = El();
    return Y(a, () => {
      n.collectionRef.value = a.value;
    }), () => Ke(sr, { ref: o }, t);
  }
}), qo = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = gr(), { primitiveElement: a, currentElement: r } = El();
    return he((l) => {
      if (r.value) {
        const i = Xs(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => Ke(sr, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function br(e) {
  const t = e ?? gr();
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
const [Dn, Bp] = ie("ComboboxRoot"), Op = /* @__PURE__ */ w({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = fe(n), i = zt(l), u = _e(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = _e(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = _e(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function f(j) {
      var ae, oe;
      c.value = j, await te(), j ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (ae = $().find((ze) => {
        var qe, je;
        return ((je = (qe = ze.ref) == null ? void 0 : qe.dataset) == null ? void 0 : je.state) === "checked";
      })) == null ? void 0 : ae.value : p.value = d.value), await te(), (oe = g.value) == null || oe.focus(), X()) : (m.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function v(j) {
      if (Array.isArray(d.value) && a.value) {
        const ae = d.value.findIndex((ze) => Wt(ze, j)), oe = [...d.value];
        ae === -1 ? oe.push(j) : oe.splice(ae, 1), d.value = oe;
      } else
        d.value = j, f(!1);
    }
    const m = E(!1), g = E(), b = E(), { forwardRef: _, currentElement: B } = V(), { getItems: $, reactiveItems: S, itemMapSize: D } = hr("data-radix-vue-combobox-item"), P = E([]);
    Y(() => D.value, () => {
      P.value = $().map((j) => j.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const T = O(() => {
      if (m.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const j = P.value.filter((ae) => typeof ae == "string");
        if (j.length)
          return j.filter((ae) => {
            var oe;
            return ae.toLowerCase().includes((oe = u.value) == null ? void 0 : oe.toLowerCase());
          });
      }
      return P.value;
    });
    function I(j) {
      const ae = j === "blur" || j === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ae && (u.value = "") : ae && (u.value = "");
    }
    const F = O(() => T.value.findIndex((j) => Wt(j, p.value))), A = O(() => {
      var j;
      return (j = S.value.find((ae) => Wt(ae.value, p.value))) == null ? void 0 : j.ref;
    }), L = O(() => JSON.stringify(d.value));
    Y(L, async () => {
      await te(), await te(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), Y(() => [T.value.length, u.value.length], async ([j, ae], [oe, ze]) => {
      await te(), await te(), j && (ze > ae || F.value === -1) && (p.value = T.value[0]);
    });
    const R = No(B);
    function X() {
      var j;
      A.value instanceof Element && ((j = A.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function H() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const Q = E(!1);
    function q() {
      Q.value = !0;
    }
    function me() {
      requestAnimationFrame(() => {
        Q.value = !1;
      });
    }
    async function ee(j) {
      var ae;
      T.value.length && p.value && A.value instanceof Element && (j.preventDefault(), j.stopPropagation(), Q.value || (ae = A.value) == null || ae.click());
    }
    return Bp({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: m,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: f,
      filteredOptions: T,
      contentId: "",
      inputElement: g,
      selectedElement: A,
      onInputElementChange: (j) => g.value = j,
      onInputNavigation: async (j) => {
        const ae = F.value;
        ae === 0 && j === "up" || ae === T.value.length - 1 && j === "down" || (ae === -1 && T.value.length || j === "home" ? p.value = T.value[0] : j === "end" ? p.value = T.value[T.value.length - 1] : p.value = T.value[j === "up" ? ae - 1 : ae + 1], await te(), X(), H(), te(() => {
          var oe;
          return (oe = g.value) == null ? void 0 : oe.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ee,
      onCompositionEnd: me,
      onCompositionStart: q,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: B,
      contentElement: b,
      onContentElementChange: (j) => b.value = j
    }), (j, ae) => (h(), C(s(On), null, {
      default: y(() => [
        M(s(K), k({
          ref: s(_),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: j.as,
          "as-child": j.asChild,
          dir: s(i)
        }, j.$attrs), {
          default: y(() => [
            x(j.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(R) && n.name ? (h(), C(s(xp), {
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
}), Dp = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Dn(), { forwardRef: o, currentElement: a } = V();
    le(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = O(() => t.disabled || n.disabled.value || !1), l = E();
    eu(() => {
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
    return (c, p) => (h(), C(s(K), {
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
        Ft(Ae(i, ["prevent"]), ["down", "up"]),
        Ft(s(n).onInputEnter, ["enter"]),
        Ft(Ae(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(n).onCompositionStart,
      onCompositionend: s(n).onCompositionEnd
    }, {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [Fl, Ep] = ie("ComboboxGroup"), Sp = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = V(), a = Pe(void 0, "radix-vue-combobox-group"), r = Dn(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Hd(o, () => {
      te(() => {
        i();
      });
    }, { childList: !0 }), Y(() => r.searchTerm.value, () => {
      te(() => {
        i();
      });
    }, { immediate: !0 }), Ep({
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
      [za, l.value]
    ]);
  }
}), Tp = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    V();
    const n = Fl({ id: "" });
    return (o, a) => (h(), C(s(K), k(t, {
      id: s(n).id
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Gb, kp] = ie("ComboboxContent"), Ap = /* @__PURE__ */ w({
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
    const n = e, o = t, { position: a } = fe(n), r = Dn();
    eo(n.bodyLock);
    const { forwardRef: l, currentElement: i } = V();
    to(r.parentElement);
    const u = O(() => n.position === "popper" ? n : {}), d = Re(u.value);
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
    return kp({ position: a }), (f, v) => (h(), C(s(yr), null, {
      default: y(() => [
        f.dismissable ? (h(), C(s(Bn), {
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
                ...s(a) === "popper" ? p : {}
              },
              onPointerleave: c
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
            ...s(a) === "popper" ? p : {}
          },
          onPointerleave: c
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
}), Pp = /* @__PURE__ */ w({
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
    const n = J(e, t), { forwardRef: o } = V(), a = Dn();
    return a.contentId || (a.contentId = Pe(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(tt), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        M(Ap, k({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ip = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    V();
    const n = Dn(), o = O(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), C(s(K), U(k({ key: 0 }, t)), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          Te("No options")
        ])
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
});
function Mp(e) {
  const t = Vo({
    nonce: E()
  });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [Yb, Rp] = ie("ComboboxItem"), Fp = "combobox.select", Lp = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = fe(n), r = Dn();
    Fl({ id: "", options: E([]) });
    const { forwardRef: l } = V(), i = O(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((_) => Wt(_, n.value)) : Wt((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = O(() => Wt(r.selectedValue.value, n.value)), d = Pe(void 0, "radix-vue-combobox-item"), c = Pe(void 0, "radix-vue-combobox-option"), p = O(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => Wt(g, n.value)) : !0);
    async function f(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function v(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      er(Fp, f, b);
    }
    async function m(g) {
      await te(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Rp({
      isSelected: i
    }), (g, b) => (h(), C(s(qo), { value: g.value }, {
      default: y(() => [
        wn(M(s(K), {
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
            x(g.$slots, "default", {}, () => [
              Te(Se(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [za, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Vp = /* @__PURE__ */ w({
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
}), Ll = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(no), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Np() {
  const e = E(!1);
  return le(() => {
    yn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), yn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const zp = bl(Np), [Qt, Vl] = ie(["MenuRoot", "MenuSub"], "MenuContext"), [ao, jp] = ie("MenuRoot"), Kp = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = fe(n), l = zt(r), i = _e(n, "open", o), u = E(), d = zp();
    return Vl({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), jp({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), C(s(On), null, {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Hp = "rovingFocusGroup.onEntryFocus", qp = { bubbles: !1, cancelable: !0 }, Wp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Up(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Gp(e, t, n) {
  const o = Up(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Wp[o];
}
function Nl(e, t = !1) {
  const n = Me();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Me() !== n))
      return;
}
function Yp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Xp, Zp] = ie("RovingFocusGroup"), zl = /* @__PURE__ */ w({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = fe(o), u = zt(i), d = _e(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), f = E(0), { getItems: v } = hr();
    function m(b) {
      const _ = !p.value;
      if (b.currentTarget && b.target === b.currentTarget && _ && !c.value) {
        const B = new CustomEvent(Hp, qp);
        if (b.currentTarget.dispatchEvent(B), a("entryFocus", B), !B.defaultPrevented) {
          const $ = v().map((T) => T.ref).filter((T) => T.dataset.disabled !== ""), S = $.find((T) => T.getAttribute("data-active") === "true"), D = $.find(
            (T) => T.id === d.value
          ), P = [S, D, ...$].filter(
            Boolean
          );
          Nl(P, o.preventScrollOnEntryFocus);
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
    }), Zp({
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
    }), (b, _) => (h(), C(s(yr), null, {
      default: y(() => [
        M(s(K), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: _[0] || (_[0] = (B) => p.value = !0),
          onMouseup: g,
          onFocus: m,
          onBlur: _[1] || (_[1] = (B) => c.value = !1)
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
}), Qp = /* @__PURE__ */ w({
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
    const t = e, n = Xp(), o = O(() => t.tabStopId || Pe()), a = O(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = br();
    le(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ue(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Gp(
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
          d = n.loop.value ? Yp(d, c + 1) : d.slice(c + 1);
        }
        te(() => Nl(d));
      }
    }
    return (i, u) => (h(), C(s(qo), null, {
      default: y(() => [
        M(s(K), {
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
}), [wr, Jp] = ie("MenuContent"), _r = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Zs({
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
    ...Rl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Qt(), r = ao(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = fe(n);
    ar(), eo(i.value);
    const d = E(""), c = E(0), p = E(0), f = E(null), v = E("right"), m = E(0), g = E(null), { createCollection: b } = Cn(), { forwardRef: _, currentElement: B } = V(), $ = b(B);
    Y(B, (A) => {
      a.onContentChange(A);
    });
    const { handleTypeaheadSearch: S } = rr($);
    Ue(() => {
      window.clearTimeout(c.value);
    });
    function D(A) {
      var L, R;
      return v.value === ((L = f.value) == null ? void 0 : L.side) && Yc(A, (R = f.value) == null ? void 0 : R.area);
    }
    async function P(A) {
      var L;
      o("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (L = B.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function T(A) {
      if (A.defaultPrevented)
        return;
      const L = A.target.closest("[data-radix-menu-content]") === A.currentTarget, R = A.ctrlKey || A.altKey || A.metaKey, X = A.key.length === 1, H = Cl(
        A,
        Me(),
        B.value,
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
      if (A.code === "Space" || (L && (A.key === "Tab" && A.preventDefault(), !R && X && S(A.key)), A.target !== B.value) || !qc.includes(A.key))
        return;
      A.preventDefault();
      const Q = $.value;
      Al.includes(A.key) && Q.reverse(), Da(Q);
    }
    function I(A) {
      var L, R;
      (R = (L = A == null ? void 0 : A.currentTarget) == null ? void 0 : L.contains) != null && R.call(L, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(A) {
      var L;
      if (!Kn(A))
        return;
      const R = A.target, X = m.value !== A.clientX;
      if ((L = A == null ? void 0 : A.currentTarget) != null && L.contains(R) && X) {
        const H = A.clientX > m.value ? "right" : "left";
        v.value = H, m.value = A.clientX;
      }
    }
    return Jp({
      onItemEnter: (A) => !!D(A),
      onItemLeave: (A) => {
        var L;
        D(A) || ((L = B.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (A) => !!D(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        f.value = A;
      }
    }), (A, L) => (h(), C(s(jo), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: L[7] || (L[7] = (R) => o("closeAutoFocus", R))
    }, {
      default: y(() => [
        M(s(Bn), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (R) => o("escapeKeyDown", R)),
          onPointerDownOutside: L[3] || (L[3] = (R) => o("pointerDownOutside", R)),
          onFocusOutside: L[4] || (L[4] = (R) => o("focusOutside", R)),
          onInteractOutside: L[5] || (L[5] = (R) => o("interactOutside", R)),
          onDismiss: L[6] || (L[6] = (R) => o("dismiss"))
        }, {
          default: y(() => [
            M(s(zl), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (R) => g.value = R),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: L[1] || (L[1] = (R) => {
                o("entryFocus", R), s(r).isUsingKeyboardRef.value || R.preventDefault();
              })
            }, {
              default: y(() => [
                M(s(bn), {
                  ref: s(_),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(pr)(s(a).open.value),
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
                  onPointermove: F
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
}), jl = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = wr(), { forwardRef: o } = V(), a = E(!1);
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
    return (i, u) => (h(), C(s(qo), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        M(s(K), k({
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
}), xr = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = V(), l = ao(), i = wr(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(Kc, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await te(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), C(jl, k(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var v;
        await te(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const v = s(i).searchRef.value !== "";
        c.disabled || v && f.key === " " || s(Oa).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ef, Kl] = ie(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), tf = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ef({
      checked: E(!1)
    });
    return (n, o) => (h(), C(s(tt), {
      present: n.forceMount || s(So)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        M(s(K), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(fr)(s(t).checked.value)
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
}), nf = /* @__PURE__ */ w({
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
    return Kl({ checked: a }), (r, l) => (h(), C(xr, k({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(So)(s(a)) ? "mixed" : s(a),
      "data-state": s(fr)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(So)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        x(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), of = /* @__PURE__ */ w({
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
    return to(i), (u, d) => (h(), C(_r, k(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ae((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), af = /* @__PURE__ */ w({
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
    return (a, r) => (h(), C(_r, k(s(n), {
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
}), rf = /* @__PURE__ */ w({
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
        s(a).modal.value ? (h(), C(of, U(k({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(af, U(k({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hl = /* @__PURE__ */ w({
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
}), sf = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lf = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($n), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [uf, df] = ie("MenuRadioGroup"), cf = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = _e(n, "modelValue", t);
    return df({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), C(Hl, U(G(n)), {
      default: y(() => [
        x(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), pf = /* @__PURE__ */ w({
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
    const n = e, o = t, { value: a } = fe(n), r = uf(), l = O(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return Kl({ checked: l }), (i, u) => (h(), C(xr, k({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(fr)(l.value),
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
}), ff = /* @__PURE__ */ w({
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
}), [ql, mf] = ie("MenuSub"), vf = /* @__PURE__ */ w({
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
    }), Vl({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), mf({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), C(s(On), null, {
      default: y(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), gf = /* @__PURE__ */ w({
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
    const n = J(e, t), o = Qt(), a = ao(), r = ql(), { forwardRef: l, currentElement: i } = V();
    return r.contentId || (r.contentId = Pe(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(tt), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        M(_r, k(s(n), {
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
            var p, f;
            const v = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), m = s(Uc)[s(a).dir.value].includes(c.key);
            v && m && (s(o).onOpenChange(!1), (f = s(r).trigger.value) == null || f.focus(), c.preventDefault());
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
}), hf = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qt(), o = ao(), a = ql(), r = wr(), l = E(null);
    a.triggerId || (a.triggerId = Pe(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ue(() => {
      i();
    });
    function u(p) {
      !Kn(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var f, v;
      if (!Kn(p))
        return;
      i();
      const m = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (m != null && m.width) {
        const g = (v = n.content.value) == null ? void 0 : v.dataset.side, b = g === "right", _ = b ? -5 : 5, B = m[b ? "left" : "right"], $ = m[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + _, y: p.clientY },
            { x: B, y: m.top },
            { x: $, y: m.top },
            { x: $, y: m.bottom },
            { x: B, y: m.bottom }
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
      t.disabled || v && p.key === " " || Wc[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await te(), (f = n.content.value) == null || f.focus(), p.preventDefault());
    }
    return (p, f) => (h(), C(Ll, { "as-child": "" }, {
      default: y(() => [
        M(jl, k(t, {
          id: s(a).triggerId,
          ref: (v) => {
            var m;
            (m = s(a)) == null || m.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(pr)(s(n).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: y(() => [
            x(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Wl, yf] = ie("DropdownMenuRoot"), bf = /* @__PURE__ */ w({
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
    }), r = E(), { modal: l, dir: i } = fe(n), u = zt(i);
    return yf({
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
    }), (d, c) => (h(), C(s(Kp), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => pt(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        x(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), wf = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Wl(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = Pe(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(Ll), { "as-child": "" }, {
      default: y(() => [
        M(s(K), {
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
          onKeydown: l[1] || (l[1] = Ft(
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
}), _f = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(lf), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xf = /* @__PURE__ */ w({
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
    const o = Wl(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = Pe(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(rf), k(s(n), {
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
          x(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Cf = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = jt(t);
    return V(), (a, r) => (h(), C(s(xr), U(G({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $f = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Hl), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bf = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(ff), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Of = /* @__PURE__ */ w({
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
    const n = e, o = jt(t);
    return V(), (a, r) => (h(), C(s(nf), U(G({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ul = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(tf), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Df = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(sf), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ef = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = jt(t);
    return V(), (a, r) => (h(), C(s(cf), U(G({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sf = /* @__PURE__ */ w({
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
    return V(), (o, a) => (h(), C(s(pf), U(G(s(n))), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tf = /* @__PURE__ */ w({
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
    return V(), (a, r) => (h(), C(s(vf), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => pt(o) ? o.value = l : null)
    }, {
      default: y(() => [
        x(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), kf = /* @__PURE__ */ w({
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
    return V(), (o, a) => (h(), C(s(gf), k(s(n), { style: {
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
}), Af = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(hf), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pf = /* @__PURE__ */ w({
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
}), [En, If] = ie("PopoverRoot"), Mf = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = fe(n), r = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return If({
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
    }), (u, d) => (h(), C(s(On), null, {
      default: y(() => [
        x(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), Rf = /* @__PURE__ */ w({
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
        M(s(K), {
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
}), Ff = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($n), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gl = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Re(n), { forwardRef: r } = V(), l = En();
    return ar(), (i, u) => (h(), C(s(jo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        M(s(Bn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            M(s(bn), k(s(a), {
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
}), Lf = /* @__PURE__ */ w({
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
    return to(u), (d, c) => (h(), C(Gl, k(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ae(
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
      onFocusOutside: c[2] || (c[2] = Ae(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Vf = /* @__PURE__ */ w({
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
    return (u, d) => (h(), C(Gl, k(s(i), {
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
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nf = /* @__PURE__ */ w({
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
    return a.contentId || (a.contentId = Pe(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(tt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Lf, k({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Vf, k({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Xb = /* @__PURE__ */ w({
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
    return Us(() => {
      n.hasCustomAnchor.value = !0;
    }), Ue(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), C(s(no), U(G(t)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hn = 100, [zf, jf] = ie("ProgressRoot"), Cr = (e) => typeof e == "number";
function Kf(e, t) {
  return mn(e) || Cr(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Hn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Hf(e) {
  return Cr(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Hn}\`.`
  ), Hn);
}
const qf = /* @__PURE__ */ w({
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
        const u = Kf(i, n.max);
        u !== i && (await te(), a.value = u);
      },
      { immediate: !0 }
    ), Y(
      () => n.max,
      (i) => {
        const u = Hf(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = O(() => mn(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return jf({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(K), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": Cr(s(a)) ? s(a) : void 0,
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
}), Wf = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = zf();
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
}), Uf = ["default-value"], Gf = /* @__PURE__ */ w({
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
    const t = e, { value: n } = fe(t), o = E();
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
        ], 16, Uf), [
          [ou, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Yf = {
  key: 0,
  value: ""
}, [Jt, Yl] = ie("SelectRoot"), [Xf, Zf] = ie("SelectRoot"), Qf = /* @__PURE__ */ w({
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
    }), d = E(!1), { required: c, disabled: p, dir: f } = fe(n), v = zt(f);
    Yl({
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
      required: c,
      onOpenChange: (_) => {
        r.value = _;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const m = No(l), g = E(/* @__PURE__ */ new Set()), b = O(() => Array.from(g.value).map((_) => {
      var B;
      return (B = _.props) == null ? void 0 : B.value;
    }).join(";"));
    return Zf({
      onNativeOptionAdd: (_) => {
        g.value.add(_);
      },
      onNativeOptionRemove: (_) => {
        g.value.delete(_);
      }
    }), (_, B) => (h(), C(s(On), null, {
      default: y(() => [
        x(_.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(m) ? (h(), C(Gf, k({ key: b.value }, _.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: _.name,
          autocomplete: _.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: B[0] || (B[0] = ($) => a.value = $.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), z("option", Yf)) : ce("", !0),
            (h(!0), z($e, null, Lt(Array.from(g.value), ($) => (h(), C(Je($), k({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ce("", !0)
      ]),
      _: 3
    }));
  }
}), Jf = [" ", "Enter", "ArrowUp", "ArrowDown"], em = [" ", "Enter"], st = 10;
function Xl(e) {
  return e === "" || mn(e);
}
const tm = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Jt(), o = O(() => {
      var v;
      return ((v = n.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = V();
    n.contentId || (n.contentId = Pe(void 0, "radix-vue-select-content")), le(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Cn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = rr(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function f(v) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, m) => (h(), C(s(no), { "as-child": "" }, {
      default: y(() => {
        var g, b, _, B;
        return [
          M(s(K), {
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
            "data-placeholder": s(Xl)((B = s(n).modelValue) == null ? void 0 : B.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: m[0] || (m[0] = ($) => {
              var S;
              (S = $ == null ? void 0 : $.currentTarget) == null || S.focus();
            }),
            onPointerdown: m[1] || (m[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const S = $.target;
              S.hasPointerCapture($.pointerId) && S.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (f($), $.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = Ae(
              ($) => {
                $.pointerType === "touch" && f($);
              },
              ["prevent"]
            )),
            onKeydown: m[3] || (m[3] = ($) => {
              const S = s(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && S && $.key === " " || (s(d)($.key), s(Jf).includes($.key) && (p(), $.preventDefault()));
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
}), nm = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($n), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$r, om] = ie("SelectItemAlignedPosition"), am = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Cn(), r = Jt(), l = en(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: f } = V(), { viewport: v, selectedItem: m, selectedItemText: g, focusSelectedItem: b } = l;
    function _() {
      if (r.triggerElement.value && r.valueElement.value && c.value && f.value && v != null && v.value && m != null && m.value && g != null && g.value) {
        const S = r.triggerElement.value.getBoundingClientRect(), D = f.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), T = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const xe = T.left - D.left, ve = P.left - xe, Fe = S.left - ve, Oe = S.width + Fe, ye = Math.max(Oe, D.width), W = window.innerWidth - st, ue = Eo(ve, st, Math.max(st, W - ye));
          c.value.style.minWidth = `${Oe}px`, c.value.style.left = `${ue}px`;
        } else {
          const xe = D.right - T.right, ve = window.innerWidth - P.right - xe, Fe = window.innerWidth - S.right - ve, Oe = S.width + Fe, ye = Math.max(Oe, D.width), W = window.innerWidth - st, ue = Eo(
            ve,
            st,
            Math.max(st, W - ye)
          );
          c.value.style.minWidth = `${Oe}px`, c.value.style.right = `${ue}px`;
        }
        const I = i.value, F = window.innerHeight - st * 2, A = v.value.scrollHeight, L = window.getComputedStyle(f.value), R = Number.parseInt(
          L.borderTopWidth,
          10
        ), X = Number.parseInt(L.paddingTop, 10), H = Number.parseInt(
          L.borderBottomWidth,
          10
        ), Q = Number.parseInt(
          L.paddingBottom,
          10
        ), q = R + X + A + Q + H, me = Math.min(
          m.value.offsetHeight * 5,
          q
        ), ee = window.getComputedStyle(v.value), j = Number.parseInt(ee.paddingTop, 10), ae = Number.parseInt(
          ee.paddingBottom,
          10
        ), oe = S.top + S.height / 2 - st, ze = F - oe, qe = m.value.offsetHeight / 2, je = m.value.offsetTop + qe, Ye = R + X + je, wt = q - Ye;
        if (Ye <= oe) {
          const xe = m.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const ve = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, Fe = Math.max(
            ze,
            qe + (xe ? ae : 0) + ve + H
          ), Oe = Ye + Fe;
          c.value.style.height = `${Oe}px`;
        } else {
          const xe = m.value === I[0];
          c.value.style.top = "0px";
          const ve = Math.max(
            oe,
            R + v.value.offsetTop + (xe ? j : 0) + qe
          ) + wt;
          c.value.style.height = `${ve}px`, v.value.scrollTop = Ye - oe + v.value.offsetTop;
        }
        c.value.style.margin = `${st}px 0`, c.value.style.minHeight = `${me}px`, c.value.style.maxHeight = `${F}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const B = E("");
    le(async () => {
      await te(), _(), f.value && (B.value = window.getComputedStyle(f.value).zIndex);
    });
    function $(S) {
      S && d.value === !0 && (_(), b == null || b(), d.value = !1);
    }
    return om({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: $
    }), (S, D) => (h(), z("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: kt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: B.value
      })
    }, [
      M(s(K), k({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...S.$attrs, ...n }), {
        default: y(() => [
          x(S.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), rm = /* @__PURE__ */ w({
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
    const t = Re(e);
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
}), Sn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [en, sm] = ie("SelectContent"), lm = /* @__PURE__ */ w({
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
    ar(), eo(n.bodyLock);
    const { createCollection: r } = Cn(), l = E();
    to(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = rr(i), c = E(), p = E(), f = E(), v = E(!1), m = E(!1);
    function g() {
      p.value && l.value && Da([p.value, l.value]);
    }
    Y(v, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: _ } = a;
    he((D) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const T = (F) => {
        var A, L;
        P = {
          x: Math.abs(
            Math.round(F.pageX) - (((A = _.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((L = _.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (F) => {
        var A;
        F.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? F.preventDefault() : (A = l.value) != null && A.contains(F.target) || b(!1), document.removeEventListener("pointermove", T), _.value = null);
      };
      _.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), D(() => {
        document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function B(D) {
      const P = D.ctrlKey || D.altKey || D.metaKey;
      if (D.key === "Tab" && D.preventDefault(), !P && D.key.length === 1 && d(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
        let T = i.value;
        if (["ArrowUp", "End"].includes(D.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
          const I = D.target, F = T.indexOf(I);
          T = T.slice(F + 1);
        }
        setTimeout(() => Da(T)), D.preventDefault();
      }
    }
    const $ = O(() => n.position === "popper" ? n : {}), S = Re($.value);
    return sm({
      content: l,
      viewport: c,
      onViewportChange: (D) => {
        c.value = D;
      },
      itemRefCallback: (D, P, T) => {
        var I, F;
        const A = !m.value && !T;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || A) && (p.value = D, A && (m.value = !0));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var D;
        (D = l.value) == null || D.focus();
      },
      itemTextRefCallback: (D, P, T) => {
        var I, F;
        const A = !m.value && !T;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || A) && (f.value = D);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: v,
      searchRef: u
    }), (D, P) => (h(), C(s(jo), {
      "as-child": "",
      onMountAutoFocus: P[6] || (P[6] = Ae(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: P[7] || (P[7] = (T) => {
        var I;
        o("closeAutoFocus", T), !T.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), T.preventDefault());
      })
    }, {
      default: y(() => [
        M(s(Bn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = Ae(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (T) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (T) => o("escapeKeyDown", T)),
          onPointerDownOutside: P[5] || (P[5] = (T) => o("pointerDownOutside", T))
        }, {
          default: y(() => [
            (h(), C(Je(
              D.position === "popper" ? rm : am
            ), k({ ...D.$attrs, ...s(S) }, {
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
              onContextmenu: P[0] || (P[0] = Ae(() => {
              }, ["prevent"])),
              onPlaced: P[1] || (P[1] = (T) => v.value = !0),
              onKeydown: B
            }), {
              default: y(() => [
                x(D.$slots, "default")
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
}), im = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Yl(e.context), (t, n) => x(t.$slots, "default");
  }
}), um = { key: 1 }, dm = /* @__PURE__ */ w({
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
    const l = E(), i = O(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), C(s(tt), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          M(lm, U(G({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), z("div", um, [
        (h(), C(Yn, { to: r.value }, [
          M(im, { context: s(a) }, {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ce("", !0);
    };
  }
}), cm = /* @__PURE__ */ w({
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
}), [Zl, pm] = ie("SelectItem"), fm = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = fe(t), o = Jt(), a = en(Sn), { forwardRef: r, currentElement: l } = V(), i = O(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = Pe(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await te(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function f(g) {
      var b;
      await te(), !g.defaultPrevented && (n.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(g) {
      var b;
      await te(), !g.defaultPrevented && g.currentTarget === Me() && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function m(g) {
      var b;
      await te(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (em.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), pm({
      value: t.value,
      disabled: n,
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
      "aria-disabled": s(n) || void 0,
      "data-disabled": s(n) ? "" : void 0,
      tabindex: s(n) ? void 0 : -1,
      as: g.as,
      "as-child": g.asChild,
      onFocus: b[0] || (b[0] = (_) => u.value = !0),
      onBlur: b[1] || (b[1] = (_) => u.value = !1),
      onPointerup: p,
      onPointerdown: b[2] || (b[2] = (_) => {
        _.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = Ae(() => {
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
}), mm = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Zl();
    return (o, a) => s(n).isSelected.value ? (h(), C(s(K), k({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : ce("", !0);
  }
}), [vm, gm] = ie("SelectGroup"), hm = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Pe(void 0, "radix-vue-select-group");
    return gm({ id: n }), (o, a) => (h(), C(s(K), k({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), ym = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = vm({ id: "" });
    return (o, a) => (h(), C(s(K), k(t, {
      id: s(n).id
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ql = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Jt(), o = en(Sn), a = Xf(), r = Zl(), { forwardRef: l, currentElement: i } = V(), u = O(() => {
      var d;
      return Ke("option", {
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
    }), (d, c) => (h(), z($e, null, [
      M(s(K), k({
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
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), bm = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = fe(t), o = Mp(n), a = en(Sn), r = a.position === "item-aligned" ? $r() : void 0, { forwardRef: l, currentElement: i } = V();
    le(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: v } = r ?? {};
      if (f != null && f.value && v != null && v.value) {
        const m = Math.abs(u.value - p.scrollTop);
        if (m > 0) {
          const g = window.innerHeight - st * 2, b = Number.parseFloat(
            v.value.style.minHeight
          ), _ = Number.parseFloat(v.value.style.height), B = Math.max(b, _);
          if (B < g) {
            const $ = B + m, S = Math.min(g, $), D = $ - S;
            v.value.style.height = `${S}px`, v.value.style.bottom === "0px" && (p.scrollTop = D > 0 ? D : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), z($e, null, [
      M(s(K), k({
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
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      M(s(K), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          Te(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Jl = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Cn(), a = o(), r = en(Sn), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    he(() => {
      const c = a.value.find(
        (p) => p === Me()
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
    return _n(() => i()), (c, p) => {
      var f;
      return h(), C(s(K), k({
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
          x(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), wm = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = en(Sn), n = t.position === "item-aligned" ? $r() : void 0, { forwardRef: o, currentElement: a } = V(), r = E(!1);
    return he((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), Y(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Jl, {
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
    }, 512)) : ce("", !0);
  }
}), _m = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = en(Sn), n = t.position === "item-aligned" ? $r() : void 0, { forwardRef: o, currentElement: a } = V(), r = E(!1);
    return he((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), Y(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Jl, {
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
    }, 512)) : ce("", !0);
  }
}), xm = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = V(), o = Jt(), a = ja();
    return Us(() => {
      var r;
      const l = !!Lo((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
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
          s(Xl)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), z($e, { key: 0 }, [
            Te(Se(r.placeholder), 1)
          ], 64)) : x(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Cm = /* @__PURE__ */ w({
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
          Te("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function $m(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function ei(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return Eo(o, 0, 100);
}
function Bm(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Om(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function Dm(e, t, n) {
  const o = e / 2, a = Br([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function Em(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Sm(e, t) {
  if (t > 0) {
    const n = Em(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Br(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Tm(e) {
  return (String(e).split(".")[1] || "").length;
}
function km(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const ti = ["PageUp", "PageDown"], ni = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], oi = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [ai, ri] = ie(["SliderVertical", "SliderHorizontal"]), si = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Wo();
    return (r, l) => (h(), C(s(K), k({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(ti).concat(s(ni)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), Am = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = fe(n), { forwardRef: u, currentElement: d } = V(), c = E(), p = O(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function f(v) {
      const m = c.value || d.value.getBoundingClientRect(), g = [0, m.width], b = p.value ? [r.value, a.value] : [a.value, r.value], _ = Br(g, b);
      return c.value = m, _(v - m.left);
    }
    return ri({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v, m) => (h(), C(si, {
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
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (g) => {
        const b = p.value ? "from-left" : "from-right", _ = s(oi)[b].includes(g.key);
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
}), Pm = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = fe(n), { forwardRef: i, currentElement: u } = V(), d = E(), c = O(() => !l.value);
    function p(f) {
      const v = d.value || u.value.getBoundingClientRect(), m = [0, v.height], g = c.value ? [a.value, r.value] : [r.value, a.value], b = Br(m, g);
      return d.value = v, b(f - v.top);
    }
    return ri({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, v) => (h(), C(si, {
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
        const g = c.value ? "from-bottom" : "from-top", b = s(oi)[g].includes(m.key);
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
}), Im = ["value", "name", "disabled", "step"], [Wo, Mm] = ie("SliderRoot"), Rm = /* @__PURE__ */ w({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = fe(n), p = zt(c), { forwardRef: f, currentElement: v } = V(), m = No(v);
    hr();
    const g = _e(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = E(0), _ = E(g.value);
    function B(T) {
      const I = Om(g.value, T);
      D(T, I);
    }
    function $(T) {
      D(T, b.value);
    }
    function S() {
      const T = _.value[b.value];
      g.value[b.value] !== T && o("valueCommit", au(g.value));
    }
    function D(T, I, { commit: F } = { commit: !1 }) {
      var A;
      const L = Tm(l.value), R = km(Math.round((T - a.value) / l.value) * l.value + a.value, L), X = Eo(R, a.value, r.value), H = $m(g.value, X, I);
      if (Sm(H, i.value * l.value)) {
        b.value = H.indexOf(X);
        const Q = String(H) !== String(g.value);
        Q && F && o("valueCommit", H), Q && ((A = P.value[b.value]) == null || A.focus(), g.value = H);
      }
    }
    const P = E([]);
    return Mm({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (T, I) => (h(), z($e, null, [
      M(s(yr), null, {
        default: y(() => [
          (h(), C(Je(s(u) === "horizontal" ? Am : Pm), k(T.$attrs, {
            ref: s(f),
            "as-child": T.asChild,
            as: T.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: T.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (_.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (F) => !s(d) && B(F)),
            onSlideMove: I[2] || (I[2] = (F) => !s(d) && $(F)),
            onSlideEnd: I[3] || (I[3] = (F) => !s(d) && S()),
            onHomeKeyDown: I[4] || (I[4] = (F) => !s(d) && D(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (F) => !s(d) && D(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (F, A) => {
              if (!s(d)) {
                const L = s(ti).includes(F.key) || F.shiftKey && s(ni).includes(F.key) ? 10 : 1, R = b.value, X = s(g)[R], H = s(l) * L * A;
                D(X + H, R, { commit: !0 });
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
      s(m) ? (h(!0), z($e, { key: 0 }, Lt(s(g), (F, A) => (h(), z("input", {
        key: A,
        value: F,
        type: "number",
        style: { display: "none" },
        name: T.name ? T.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, Im))), 128)) : ce("", !0)
    ], 64));
  }
}), Fm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Wo(), o = ai(), { forwardRef: a, currentElement: r } = V(), l = O(() => {
      var v, m;
      return (m = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : m[t.index];
    }), i = O(() => l.value === void 0 ? 0 : ei(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = O(() => {
      var v, m;
      return Bm(t.index, ((m = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : m.length) ?? 0);
    }), d = Dl(r), c = O(() => d[o.size].value), p = O(() => c.value ? Dm(c.value, i.value, o.direction) : 0), f = or();
    return le(() => {
      n.thumbElements.value.push(r.value);
    }), Ue(() => {
      const v = n.thumbElements.value.findIndex((m) => m === r.value) ?? -1;
      n.thumbElements.value.splice(v, 1);
    }), (v, m) => (h(), C(s(qo), null, {
      default: y(() => [
        M(s(K), k(v.$attrs, {
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
            x(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Lm = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = br(), { forwardRef: o, currentElement: a } = V(), r = O(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(Fm, k({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Vm = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Wo();
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
}), Nm = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Wo(), n = ai();
    V();
    const o = O(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => ei(u, t.min.value, t.max.value)
      );
    }), a = O(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = O(() => 100 - Math.max(...o.value));
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
function zm() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
zm();
const jm = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Km, Hm] = ie("SwitchRoot"), qm = /* @__PURE__ */ w({
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
    const n = e, o = t, { disabled: a } = fe(n), r = _e(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = V(), d = No(u), c = O(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return Hm({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, f) => (h(), z($e, null, [
      M(s(K), k(p.$attrs, {
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
        onKeydown: Ft(Ae(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          x(p.$slots, "default", { checked: s(r) })
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
      }, null, 8, jm)) : ce("", !0)
    ], 64));
  }
}), Wm = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Km();
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
}), [Or, Um] = ie("TabsRoot"), Gm = /* @__PURE__ */ w({
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
    const n = e, o = t, { orientation: a, dir: r } = fe(n), l = zt(r);
    V();
    const i = _e(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return Um({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: Pe(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (h(), C(s(K), {
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
}), Ym = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = fe(t), { forwardRef: o, currentElement: a } = V(), r = Or();
    return r.tabsList = a, (l, i) => (h(), C(s(zl), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        M(s(K), {
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
function li(e, t) {
  return `${e}-trigger-${t}`;
}
function ii(e, t) {
  return `${e}-content-${t}`;
}
const Xm = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), o = Or(), a = O(() => li(o.baseId, t.value)), r = O(() => ii(o.baseId, t.value)), l = O(() => t.value === o.modelValue.value), i = E(l.value);
    return le(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), C(s(tt), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        M(s(K), {
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
          style: kt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? x(u.$slots, "default", { key: 0 }) : ce("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Zm = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), o = Or(), a = O(() => li(o.baseId, t.value)), r = O(() => ii(o.baseId, t.value)), l = O(() => t.value === o.modelValue.value);
    return (i, u) => (h(), C(s(Qp), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        M(s(K), {
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
          onKeydown: u[1] || (u[1] = Ft((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
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
}), [Uo, Qm] = ie("ToastProvider"), Jm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = fe(t), l = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Qm({
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
    }), (c, p) => x(c.$slots, "default");
  }
}), ev = "toast.swipeStart", tv = "toast.swipeMove", nv = "toast.swipeCancel", ov = "toast.swipeEnd", Sa = "toast.viewportPause", Ta = "toast.viewportResume";
function vo(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function vs(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function av(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ui(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), av(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ui(n));
    }
  }), t;
}
const rv = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Uo(), n = zd(1e3), o = E(!1);
    return xl(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), C(s(oo), { key: 0 }, {
      default: y(() => [
        Te(Se(s(t).label.value) + " ", 1),
        x(a.$slots, "default")
      ]),
      _: 3
    })) : ce("", !0);
  }
}), [sv, lv] = ie("ToastRoot"), iv = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = V(), l = Uo(), i = E(null), u = E(null), d = O(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = E(0), p = E(d.value), f = E(0), v = E(d.value), m = xl(() => {
      const B = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(p.value - B, 0);
    }, { fpsLimit: 60 });
    function g(B) {
      B <= 0 || B === Number.POSITIVE_INFINITY || ht && (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(b, B));
    }
    function b() {
      var B, $;
      (B = r.value) != null && B.contains(Me()) && (($ = l.viewport.value) == null || $.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const _ = O(() => r.value ? ui(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const B = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(B);
    }
    return he((B) => {
      const $ = l.viewport.value;
      if ($) {
        const S = () => {
          g(p.value), m.resume(), o("resume");
        }, D = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - P, window.clearTimeout(f.value), m.pause(), o("pause");
        };
        return $.addEventListener(Sa, D), $.addEventListener(Ta, S), () => {
          $.removeEventListener(Sa, D), $.removeEventListener(Ta, S);
        };
      }
    }), Y(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), nr("Escape", (B) => {
      o("escapeKeyDown", B), B.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), le(() => {
      l.onToastAdd();
    }), Ue(() => {
      l.onToastRemove();
    }), lv({ onClose: b }), (B, $) => (h(), z($e, null, [
      _.value ? (h(), C(rv, {
        key: 0,
        role: "alert",
        "aria-live": B.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Te(Se(_.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ce("", !0),
      s(l).viewport.value ? (h(), C(Yn, {
        key: 1,
        to: s(l).viewport.value
      }, [
        M(s(K), k({
          ref: s(a),
          role: "alert",
          "aria-live": "off",
          "aria-atomic": "true",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, B.$attrs, {
          as: B.as,
          "as-child": B.asChild,
          "data-state": B.open ? "open" : "closed",
          "data-swipe-direction": s(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: $[0] || ($[0] = Ae((S) => {
            i.value = { x: S.clientX, y: S.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (S) => {
            if (!i.value) return;
            const D = S.clientX - i.value.x, P = S.clientY - i.value.y, T = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), F = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = I ? F(0, D) : 0, L = I ? 0 : F(0, P), R = S.pointerType === "touch" ? 10 : 2, X = { x: A, y: L }, H = { originalEvent: S, delta: X };
            T ? (u.value = X, s(vo)(s(tv), (Q) => o("swipeMove", Q), H)) : s(vs)(X, s(l).swipeDirection.value, R) ? (u.value = X, s(vo)(s(ev), (Q) => o("swipeStart", Q), H), S.target.setPointerCapture(S.pointerId)) : (Math.abs(D) > R || Math.abs(P) > R) && (i.value = null);
          }),
          onPointerup: $[2] || ($[2] = (S) => {
            const D = u.value, P = S.target;
            if (P.hasPointerCapture(S.pointerId) && P.releasePointerCapture(S.pointerId), u.value = null, i.value = null, D) {
              const T = S.currentTarget, I = { originalEvent: S, delta: D };
              s(vs)(D, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(vo)(s(ov), (F) => o("swipeEnd", F), I) : s(vo)(s(nv), (F) => o("swipeCancel", F), I), T == null || T.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            x(B.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ce("", !0)
    ], 64));
  }
}), uv = /* @__PURE__ */ w({
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
        M(iv, k({
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
}), di = /* @__PURE__ */ w({
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
}), ci = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = sv(), { forwardRef: o } = V();
    return (a, r) => (h(), C(di, { "as-child": "" }, {
      default: y(() => [
        M(s(K), k(t, {
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
}), dv = /* @__PURE__ */ w({
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
    return (n, o) => n.altText ? (h(), C(di, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        M(ci, {
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
    }, 8, ["alt-text"])) : ce("", !0);
  }
}), gs = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Uo();
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
}), cv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = fe(t), { forwardRef: a, currentElement: r } = V(), { createCollection: l } = Cn(), i = l(r), u = Uo(), d = O(() => u.toastCount.value > 0), c = E(), p = E(), f = O(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    nr(n.value, () => {
      r.value.focus();
    }), le(() => {
      u.onViewportChange(r.value);
    }), he((m) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const D = new CustomEvent(Sa);
            g.dispatchEvent(D), u.isClosePausedRef.value = !0;
          }
        }, _ = () => {
          if (u.isClosePausedRef.value) {
            const D = new CustomEvent(Ta);
            g.dispatchEvent(D), u.isClosePausedRef.value = !1;
          }
        }, B = (D) => {
          !g.contains(D.relatedTarget) && _();
        }, $ = () => {
          g.contains(Me()) || _();
        }, S = (D) => {
          var P, T, I;
          const F = D.altKey || D.ctrlKey || D.metaKey;
          if (D.key === "Tab" && !F) {
            const A = Me(), L = D.shiftKey;
            if (D.target === g && L) {
              (P = c.value) == null || P.focus();
              return;
            }
            const R = v({ tabbingDirection: L ? "backwards" : "forwards" }), X = R.findIndex((H) => H === A);
            Co(R.slice(X + 1)) ? D.preventDefault() : L ? (T = c.value) == null || T.focus() : (I = p.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", B), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", $), g.addEventListener("keydown", S), window.addEventListener("blur", b), window.addEventListener("focus", _), m(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", B), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", $), g.removeEventListener("keydown", S), window.removeEventListener("blur", b), window.removeEventListener("focus", _);
        });
      }
    });
    function v({ tabbingDirection: m }) {
      const g = i.value.map((b) => {
        const _ = [b, ...cr(b)];
        return m === "forwards" ? _ : _.reverse();
      });
      return (m === "forwards" ? g.reverse() : g).flat();
    }
    return (m, g) => (h(), C(s(Rc), {
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
        d.value ? (h(), C(gs, {
          key: 0,
          ref: (b) => {
            c.value = s(et)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = v({
              tabbingDirection: "forwards"
            });
            s(Co)(b);
          })
        }, null, 512)) : ce("", !0),
        M(s(K), k({
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
        d.value ? (h(), C(gs, {
          key: 1,
          ref: (b) => {
            p.value = s(et)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = v({
              tabbingDirection: "backwards"
            });
            s(Co)(b);
          })
        }, null, 512)) : ce("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), pv = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fv = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pi = "tooltip.open", [Dr, mv] = ie("TooltipProvider"), vv = /* @__PURE__ */ w({
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
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = fe(t);
    V();
    const u = E(!0), d = E(!1), { start: c, stop: p } = tr(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return mv({
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
    }), (f, v) => x(f.$slots, "default");
  }
}), [Go, gv] = ie("TooltipRoot"), hv = /* @__PURE__ */ w({
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
    const a = Dr(), r = O(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = O(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = O(() => n.disabled ?? a.disabled.value), u = O(() => n.delayDuration ?? a.delayDuration.value), d = O(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    Y(c, ($) => {
      a.onClose && ($ ? (a.onOpen(), document.dispatchEvent(new CustomEvent(pi))) : a.onClose());
    });
    const p = E(!1), f = E(), v = O(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: g } = tr(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), p.value = !1, c.value = !0;
    }
    function _() {
      g(), c.value = !1;
    }
    function B() {
      m();
    }
    return gv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: f,
      onTriggerChange($) {
        f.value = $;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? B() : b();
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
    }), ($, S) => (h(), C(s(On), null, {
      default: y(() => [
        x($.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), yv = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Go(), o = Dr();
    n.contentId || (n.contentId = Pe(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = V(), l = E(!1), i = E(!1), u = O(() => n.disabled.value ? {} : {
      click: g,
      focus: v,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
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
    function c() {
      l.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function p(b) {
      b.pointerType !== "touch" && !i.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function f() {
      n.onTriggerLeave(), i.value = !1;
    }
    function v(b) {
      var _, B;
      l.value || n.ignoreNonKeyboardFocus.value && !((B = (_ = b.target).matches) != null && B.call(_, ":focus-visible")) || n.onOpen();
    }
    function m() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, _) => (h(), C(s(no), { "as-child": "" }, {
      default: y(() => [
        M(s(K), k({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Ji(u.value)), {
          default: y(() => [
            x(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), fi = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Go(), { forwardRef: r } = V(), l = ja(), i = O(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = O(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function f(v) {
        typeof v.children == "string" && v.type !== Ha ? p += v.children : Array.isArray(v.children) && v.children.forEach((m) => f(m));
      }
      return (c = i.value) == null || c.forEach((v) => f(v)), p;
    }), d = O(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return le(() => {
      yn(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), yn(window, pi, a.onClose);
    }), (c, p) => (h(), C(s(Bn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (f) => o("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var v;
        s(a).disableClosingTrigger.value && (v = s(a).trigger.value) != null && v.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = Ae(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => s(a).onClose())
    }, {
      default: y(() => [
        M(s(bn), k({
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
            x(c.$slots, "default"),
            M(s(oo), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Te(Se(u.value), 1)
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
}), bv = /* @__PURE__ */ w({
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
    const t = Re(e), { forwardRef: n, currentElement: o } = V(), { trigger: a, onClose: r } = Go(), l = Dr(), { isPointerInTransit: i, onPointerExit: u } = ec(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), C(fi, k({ ref: s(n) }, s(t)), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wv = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Go(), r = J(n, o), { forwardRef: l } = V();
    return (i, u) => (h(), C(s(tt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), C(Je(s(a).disableHoverableContent.value ? fi : bv), k({ ref: s(l) }, s(r)), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _v = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($n), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function mi(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = mi(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function vi() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = mi(e)) && (o && (o += " "), o += t);
  return o;
}
const Er = "-", xv = (e) => {
  const t = $v(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Er);
      return i[0] === "" && i.length !== 1 && i.shift(), gi(i, t) || Cv(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, gi = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? gi(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Er);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, hs = /^\[(.+)\]$/, Cv = (e) => {
  if (hs.test(e)) {
    const t = hs.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, $v = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ov(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    ka(l, o, r, t);
  }), o;
}, ka = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : ys(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Bv(a)) {
        ka(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      ka(l, ys(t, r), n, o);
    });
  });
}, ys = (e, t) => {
  let n = e;
  return t.split(Er).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Bv = (e) => e.isThemeGetter, Ov = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, Dv = (e) => {
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
}, hi = "!", Ev = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let b = 0; b < i.length; b++) {
      let _ = i[b];
      if (d === 0) {
        if (_ === a && (o || i.slice(b, b + r) === t)) {
          u.push(i.slice(c, b)), c = b + r;
          continue;
        }
        if (_ === "/") {
          p = b;
          continue;
        }
      }
      _ === "[" ? d++ : _ === "]" && d--;
    }
    const f = u.length === 0 ? i : i.substring(c), v = f.startsWith(hi), m = v ? f.substring(1) : f, g = p && p > c ? p - c : void 0;
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
}, Sv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Tv = (e) => ({
  cache: Dv(e.cacheSize),
  parseClassName: Ev(e),
  ...xv(e)
}), kv = /\s+/, Av = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(kv);
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
    const b = Sv(c).join(":"), _ = p ? b + hi : b, B = _ + g;
    if (r.includes(B))
      continue;
    r.push(B);
    const $ = a(g, m);
    for (let S = 0; S < $.length; ++S) {
      const D = $[S];
      r.push(_ + D);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Pv() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = yi(t)) && (o && (o += " "), o += n);
  return o;
}
const yi = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = yi(e[o])) && (n && (n += " "), n += t);
  return n;
};
function Iv(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = Tv(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = Av(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(Pv.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, bi = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mv = /^\d+\/\d+$/, Rv = /* @__PURE__ */ new Set(["px", "full", "screen"]), Fv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Lv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Nv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Bt = (e) => vn(e) || Rv.has(e) || Mv.test(e), Pt = (e) => Tn(e, "length", Yv), vn = (e) => !!e && !Number.isNaN(Number(e)), ca = (e) => Tn(e, "number", vn), In = (e) => !!e && Number.isInteger(Number(e)), jv = (e) => e.endsWith("%") && vn(e.slice(0, -1)), se = (e) => bi.test(e), It = (e) => Fv.test(e), Kv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Hv = (e) => Tn(e, Kv, wi), qv = (e) => Tn(e, "position", wi), Wv = /* @__PURE__ */ new Set(["image", "url"]), Uv = (e) => Tn(e, Wv, Zv), Gv = (e) => Tn(e, "", Xv), Mn = () => !0, Tn = (e, t, n) => {
  const o = bi.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Yv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Lv.test(e) && !Vv.test(e)
), wi = () => !1, Xv = (e) => Nv.test(e), Zv = (e) => zv.test(e), Qv = () => {
  const e = we("colors"), t = we("spacing"), n = we("blur"), o = we("brightness"), a = we("borderColor"), r = we("borderRadius"), l = we("borderSpacing"), i = we("borderWidth"), u = we("contrast"), d = we("grayscale"), c = we("hueRotate"), p = we("invert"), f = we("gap"), v = we("gradientColorStops"), m = we("gradientColorStopPositions"), g = we("inset"), b = we("margin"), _ = we("opacity"), B = we("padding"), $ = we("saturate"), S = we("scale"), D = we("sepia"), P = we("skew"), T = we("space"), I = we("translate"), F = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", se, t], R = () => [se, t], X = () => ["", Bt, Pt], H = () => ["auto", vn, se], Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", se], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], oe = () => [vn, se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mn],
      spacing: [Bt, Pt],
      blur: ["none", "", It, se],
      brightness: oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", It, se],
      borderSpacing: R(),
      borderWidth: X(),
      contrast: oe(),
      grayscale: j(),
      hueRotate: oe(),
      invert: j(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [jv, Pt],
      inset: L(),
      margin: L(),
      opacity: oe(),
      padding: R(),
      saturate: oe(),
      scale: oe(),
      sepia: j(),
      skew: oe(),
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
        p: [B]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [B]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [B]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [B]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [B]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [B]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [B]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [B]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [B]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ca]
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
        "line-clamp": ["none", vn, ca]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Bt, se]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Bt, Pt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Bt, se]
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
        bg: [...Q(), qv]
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
        bg: ["auto", "cover", "contain", Hv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Uv]
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
        border: [...q(), "hidden"]
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
        divide: q()
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
        outline: ["", ...q()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Bt, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Bt, Pt]
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
        "ring-offset": [Bt, Pt]
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
        shadow: ["", "inner", "none", It, Gv]
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
        "mix-blend": [...me(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": me()
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
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
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
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
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
        duration: oe()
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
        delay: oe()
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
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
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
        stroke: [Bt, Pt, ca]
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
}, Jv = /* @__PURE__ */ Iv(Qv);
function N(...e) {
  return Jv(vi(e));
}
function Zb(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
const kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, eg = {}, tg = { class: "h-full bg-background dark:text-white" };
function ng(e, t) {
  return h(), z("div", tg, [
    x(e.$slots, "default")
  ]);
}
const Qb = /* @__PURE__ */ kn(eg, [["render", ng]]), og = {}, ag = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function rg(e, t) {
  return h(), z("header", ag, [
    x(e.$slots, "default")
  ]);
}
const Jb = /* @__PURE__ */ kn(og, [["render", rg]]), sg = {}, lg = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function ig(e, t) {
  return h(), z("main", lg, [
    x(e.$slots, "default")
  ]);
}
const ew = /* @__PURE__ */ kn(sg, [["render", ig]]), ug = {};
function dg(e, t) {
  return x(e.$slots, "default");
}
const tw = /* @__PURE__ */ kn(ug, [["render", dg]]), cg = {}, pg = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, fg = { class: "gap-y-5 overflow-y-auto" };
function mg(e, t) {
  return h(), z("div", pg, [
    de("div", fg, [
      x(e.$slots, "default")
    ])
  ]);
}
const nw = /* @__PURE__ */ kn(cg, [["render", mg]]), vg = {};
function gg(e, t) {
  return x(e.$slots, "default");
}
const ow = /* @__PURE__ */ kn(vg, [["render", gg]]);
function hg(e, t) {
  return h(), z("svg", {
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
function yg(e, t) {
  return h(), z("svg", {
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
function bs(e, t) {
  return h(), z("svg", {
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
function bg(e, t) {
  return h(), z("svg", {
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
const wg = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, aw = /* @__PURE__ */ w({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), z("button", wg, [
      n[0] || (n[0] = de("span", { class: "sr-only" }, "Open sidebar", -1)),
      M(s(hg), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), _g = 3, xg = 1e6, Dt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let pa = 0;
function Cg() {
  return pa = (pa + 1) % Number.MAX_VALUE, pa.toString();
}
const fa = /* @__PURE__ */ new Map();
function ws(e) {
  if (fa.has(e)) return;
  const t = setTimeout(() => {
    fa.delete(e), Ln({
      type: Dt.REMOVE_TOAST,
      toastId: e
    });
  }, xg);
  fa.set(e, t);
}
const at = E({
  toasts: []
});
function Ln(e) {
  switch (e.type) {
    case Dt.ADD_TOAST:
      at.value.toasts = [e.toast, ...at.value.toasts].slice(0, _g);
      break;
    case Dt.UPDATE_TOAST:
      at.value.toasts = at.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Dt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? ws(t) : at.value.toasts.forEach((n) => {
        ws(n.id);
      }), at.value.toasts = at.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Dt.REMOVE_TOAST:
      e.toastId === void 0 ? at.value.toasts = [] : at.value.toasts = at.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function _i() {
  return {
    toasts: O(() => at.value.toasts),
    toast: $g,
    dismiss: (e) => Ln({ type: Dt.DISMISS_TOAST, toastId: e })
  };
}
function $g(e) {
  const t = Cg(), n = (a) => Ln({
    type: Dt.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => Ln({ type: Dt.DISMISS_TOAST, toastId: t });
  return Ln({
    type: Dt.ADD_TOAST,
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
const Bg = { class: "flex items-start space-x-3" }, Og = ["src", "alt"], Dg = { class: "grid gap-1" }, Eg = { class: "font-bold" }, Sg = /* @__PURE__ */ w({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = _i();
    return (n, o) => (h(), C(s(zg), null, {
      default: y(() => [
        (h(!0), z($e, null, Lt(s(t), (a) => (h(), C(s(Tg), k({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            de("div", Bg, [
              a.icon ? (h(), z($e, { key: 0 }, [
                typeof a.icon == "string" ? (h(), z("img", {
                  key: 0,
                  src: a.icon,
                  class: ne(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, Og)) : (h(), C(Je(a.icon), {
                  key: 1,
                  class: ne(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : ce("", !0),
              de("div", Dg, [
                a.title ? (h(), C(s(Ng), { key: 0 }, {
                  default: y(() => [
                    Te(Se(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ce("", !0),
                a.description ? (h(), z($e, { key: 1 }, [
                  lu(a.description) ? (h(), C(s(_s), { key: 0 }, {
                    default: y(() => [
                      (h(), C(Je(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), z($e, { key: 1 }, Lt(a.description, (r, l) => (h(), z("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), z($e, { key: 0 }, [
                      Te(Se(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), z($e, { key: 1 }, [
                      de("span", Eg, Se(l), 1),
                      Te(": " + Se(r), 1)
                    ], 64)) : (h(), z($e, { key: 2 }, [
                      Te(Se(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(_s), { key: 2 }, {
                    default: y(() => [
                      Te(Se(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ce("", !0),
                M(s(Vg))
              ])
            ]),
            (h(), C(Je(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        M(s(kg), { position: n.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), Tg = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(uv), k(s(r), {
      class: s(N)(s(jg)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), kg = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = O(() => {
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
    return (a, r) => (h(), C(s(cv), k(n.value, {
      class: s(N)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        o.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), rw = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(dv), k(n.value, {
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
function Ag(e, t) {
  return h(), z("svg", {
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
function Pg(e, t) {
  return h(), z("svg", {
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
function Ig(e, t) {
  return h(), z("svg", {
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
function xi(e, t) {
  return h(), z("svg", {
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
function Ci(e, t) {
  return h(), z("svg", {
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
function Mg(e, t) {
  return h(), z("svg", {
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
function Rg(e, t) {
  return h(), z("svg", {
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
function Yo(e, t) {
  return h(), z("svg", {
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
function Fg(e, t) {
  return h(), z("svg", {
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
function Lg(e, t) {
  return h(), z("svg", {
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
const Vg = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(ci), k(n.value, {
      class: s(N)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        M(s(Yo), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ng = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(pv), k(n.value, {
      class: s(N)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _s = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(fv), k({
      class: s(N)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zg = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Jm), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Cs = vi, ro = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Cs(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const f = xs(c) || xs(p);
    return a[d][f];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, f] = c;
    return f === void 0 || (d[p] = f), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: p, className: f, ...v } = c;
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
      p,
      f
    ] : d;
  }, []);
  return Cs(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, jg = ro(
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
), { toast: go } = _i();
function Kg() {
  return {
    info: (e) => {
      go({
        icon: bg,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      go({
        icon: yg,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      go({
        icon: bs,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      go({
        icon: bs,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const sw = /* @__PURE__ */ w({
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
    } = Kg();
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
    ), (l, i) => (h(), C(s(Sg)));
  }
}), Hg = { class: "flex items-center justify-between space-y-2" }, qg = { class: "flex items-center space-x-2" }, lw = /* @__PURE__ */ w({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", Hg, [
      (h(), C(Je(n.as), {
        class: ne(s(N)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      de("div", qg, [
        x(n.$slots, "actions")
      ])
    ]));
  }
}), Wg = /* @__PURE__ */ w({
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
    const a = J(e, t);
    return (r, l) => (h(), C(s(Bc), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iw = /* @__PURE__ */ w({
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
    return (r, l) => (h(), C(Wg, U(G(s(a))), {
      default: y(() => [
        (h(!0), z($e, null, Lt(r.content, (i, u) => (h(), C(s(Gg), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            M(s(Yg), null, {
              default: y(() => [
                x(r.$slots, u + ".title", { item: i }, () => [
                  Te(Se(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            M(s(Ug), null, {
              default: y(() => [
                x(r.$slots, u + ".content", { item: i }, () => [
                  Te(Se(i.content), 1)
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
}), Ug = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Ec), k(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        de("div", {
          class: ne(s(N)("pb-4 pt-0", t.class))
        }, [
          x(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Gg = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(Dc), k(s(o), {
      class: s(N)("border-b", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yg = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Sc), { class: "flex" }, {
      default: y(() => [
        M(s(Tc), k(n.value, {
          class: s(N)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            x(o.$slots, "default"),
            x(o.$slots, "icon", {}, () => [
              M(s(Ci), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), uw = /* @__PURE__ */ w({
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
    return (r, l) => (h(), C(s(Qg), null, {
      default: y(() => [
        M(s(Xg), U(G(s(a))), {
          default: y(() => [
            M(s(Jg), {
              class: ne(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            M(s(Zg), U(G(r.$attrs)), {
              default: y(() => [
                x(r.$slots, "tooltip", {}, () => [
                  Te(Se(r.tooltip), 1)
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
}), Xg = /* @__PURE__ */ w({
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
    return (r, l) => (h(), C(s(hv), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zg = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(_v), null, {
      default: y(() => [
        M(s(wv), k({ ...s(r), ...l.$attrs }, {
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
}), Qg = /* @__PURE__ */ w({
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
    return (n, o) => (h(), C(s(vv), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jg = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(yv), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ w({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(np), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dw = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(op), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), th = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(ap), null, {
      default: y(() => [
        M(s(ip), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        M(s(lp), k(s(r), {
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
}), nh = /* @__PURE__ */ w({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), oh = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(dp), k(n.value, {
      class: s(N)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ah = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(cp), k(n.value, {
      class: s(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rh = /* @__PURE__ */ w({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), $i = /* @__PURE__ */ w({
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
      class: ne(s(N)(s(Sr)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Sr = ro(
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
), sh = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(pp), k(n.value, {
      class: s(N)(s(Sr)(), t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lh = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(up), k(n.value, {
      class: s(N)(s(Sr)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cw = /* @__PURE__ */ w({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(mp), {
      class: ne(s(N)(s(ih)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pw = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(gp), k(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), fw = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(hp), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ih = ro(
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
), mw = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)(s(uh)({ variant: n.variant }), t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), uh = ro(
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
), vw = /* @__PURE__ */ w({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), gw = /* @__PURE__ */ w({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), hw = /* @__PURE__ */ w({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("p", {
      class: ne(s(N)("text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), yw = /* @__PURE__ */ w({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex items-center p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), bw = /* @__PURE__ */ w({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ww = /* @__PURE__ */ w({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("h3", {
      class: ne(s(N)("font-semibold leading-none tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
});
var $s;
const dh = typeof window < "u", ch = (e) => typeof e < "u", ph = (e) => typeof e == "function";
dh && (($s = window == null ? void 0 : window.navigator) != null && $s.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function fh(e) {
  return e;
}
function mh(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return Zn(t, r), r;
  }, () => Xn(t)];
}
function vh(e) {
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
function gh(e) {
  return vh(O(e));
}
function Tr(e, ...t) {
  const n = t.flat();
  return gh(() => Object.fromEntries(Object.entries(fe(e)).filter((o) => !n.includes(o[0]))));
}
function hh(e) {
  return JSON.parse(JSON.stringify(e));
}
const Bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Os = "__vueuse_ssr_handlers__";
Bs[Os] = Bs[Os] || {};
var Ds;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ds || (Ds = {}));
var yh = Object.defineProperty, Es = Object.getOwnPropertySymbols, bh = Object.prototype.hasOwnProperty, wh = Object.prototype.propertyIsEnumerable, Ss = (e, t, n) => t in e ? yh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _h = (e, t) => {
  for (var n in t || (t = {}))
    bh.call(t, n) && Ss(e, n, t[n]);
  if (Es)
    for (var n of Es(t))
      wh.call(t, n) && Ss(e, n, t[n]);
  return e;
};
const xh = {
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
_h({
  linear: fh
}, xh);
function Bi(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, f = He(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let m = d;
  m = d || m || `update:${t.toString()}`;
  const g = (_) => i ? ph(i) ? i(_) : hh(_) : _, b = () => ch(e[t]) ? g(e[t]) : p;
  if (u) {
    const _ = b(), B = E(_);
    return Y(() => e[t], ($) => B.value = g($)), Y(B, ($) => {
      ($ !== e[t] || c) && v(m, $);
    }, { deep: c }), B;
  } else
    return O({
      get() {
        return b();
      },
      set(_) {
        v(m, _);
      }
    });
}
function Ch(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ts(e) {
  return Ch(e) || Array.isArray(e);
}
function $h() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function kr(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Ts(i) || !Ts(u) ? i === u : kr(i, u);
  });
}
function ks(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Bh(e, t) {
  if (e.length !== t.length) return !1;
  const n = ks(e), o = ks(t);
  return n.every((a, r) => {
    const l = o[r];
    return kr(a, l);
  });
}
function Ar(e) {
  return typeof e == "number";
}
function Aa(e) {
  return typeof e == "string";
}
function Xo(e) {
  return typeof e == "boolean";
}
function As(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Be(e) {
  return Math.abs(e);
}
function Pr(e) {
  return Math.sign(e);
}
function Vn(e, t) {
  return Be(e - t);
}
function Oh(e, t) {
  if (e === 0 || t === 0 || Be(e) <= Be(t)) return 0;
  const n = Vn(Be(e), Be(t));
  return Be(n / e);
}
function Dh(e) {
  return Math.round(e * 100) / 100;
}
function qn(e) {
  return Wn(e).map(Number);
}
function it(e) {
  return e[so(e)];
}
function so(e) {
  return Math.max(0, e.length - 1);
}
function Ir(e, t) {
  return t === so(e);
}
function Ps(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function Wn(e) {
  return Object.keys(e);
}
function Oi(e, t) {
  return [e, t].reduce((n, o) => (Wn(o).forEach((a) => {
    const r = n[a], l = o[a], i = As(r) && As(l);
    n[a] = i ? Oi(r, l) : l;
  }), n), {});
}
function Pa(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Eh(e, t) {
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
    return Aa(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function Un() {
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
function Sh(e, t, n, o) {
  const a = Un(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function c() {
    v(), a.clear();
  }
  function p(b) {
    if (!u) return;
    l || (l = b, n(), n());
    const _ = b - l;
    for (l = b, i += _; i >= r; )
      n(), i -= r;
    const B = i / r;
    o(B), u && (u = t.requestAnimationFrame(p));
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
function Th(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = c(), u = p();
  function d(m) {
    const {
      height: g,
      width: b
    } = m;
    return o ? g : b;
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
function Gt(e = 0, t = 0) {
  const n = Be(e - t);
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
function Di(e, t, n) {
  const {
    constrain: o
  } = Gt(0, e), a = e + 1;
  let r = l(t);
  function l(f) {
    return n ? Be((a + f) % a) : o(f);
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
    return Di(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function kh(e, t, n, o, a, r, l, i, u, d, c, p, f, v, m, g, b, _, B) {
  const {
    cross: $,
    direction: S
  } = e, D = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, T = Un(), I = Un(), F = Gt(50, 225).constrain(v.measure(20)), A = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, R = m ? 43 : 25;
  let X = !1, H = 0, Q = 0, q = !1, me = !1, ee = !1, j = !1;
  function ae(W) {
    if (!B) return;
    function ue(Ve) {
      (Xo(B) || B(W, Ve)) && wt(Ve);
    }
    const De = t;
    T.add(De, "dragstart", (Ve) => Ve.preventDefault(), P).add(De, "touchmove", () => {
    }, P).add(De, "touchend", () => {
    }).add(De, "touchstart", ue).add(De, "mousedown", ue).add(De, "touchcancel", ve).add(De, "contextmenu", ve).add(De, "click", Fe, !0);
  }
  function oe() {
    T.clear(), I.clear();
  }
  function ze() {
    const W = j ? n : t;
    I.add(W, "touchmove", xe, P).add(W, "touchend", ve).add(W, "mousemove", xe, P).add(W, "mouseup", ve);
  }
  function qe(W) {
    const ue = W.nodeName || "";
    return D.includes(ue);
  }
  function je() {
    return (m ? L : A)[j ? "mouse" : "touch"];
  }
  function Ye(W, ue) {
    const De = p.add(Pr(W) * -1), Ve = c.byDistance(W, !m).distance;
    return m || Be(W) < F ? Ve : b && ue ? Ve * 0.5 : c.byIndex(De.get(), 0).distance;
  }
  function wt(W) {
    const ue = Pa(W, o);
    j = ue, ee = m && ue && !W.buttons && X, X = Vn(a.get(), l.get()) >= 2, !(ue && W.button !== 0) && (qe(W.target) || (q = !0, r.pointerDown(W), d.useFriction(0).useDuration(0), a.set(l), ze(), H = r.readPoint(W), Q = r.readPoint(W, $), f.emit("pointerDown")));
  }
  function xe(W) {
    if (!Pa(W, o) && W.touches.length >= 2) return ve(W);
    const De = r.readPoint(W), Ve = r.readPoint(W, $), Qe = Vn(De, H), nt = Vn(Ve, Q);
    if (!me && !j && (!W.cancelable || (me = Qe > nt, !me)))
      return ve(W);
    const Z = r.pointerMove(W);
    Qe > g && (ee = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(S(Z)), W.preventDefault();
  }
  function ve(W) {
    const De = c.byDistance(0, !1).index !== p.get(), Ve = r.pointerUp(W) * je(), Qe = Ye(S(Ve), De), nt = Oh(Ve, Qe), Z = R - 10 * nt, ge = _ + nt / 50;
    me = !1, q = !1, I.clear(), d.useDuration(Z).useFriction(ge), u.distance(Qe, !m), j = !1, f.emit("pointerUp");
  }
  function Fe(W) {
    ee && (W.stopPropagation(), W.preventDefault(), ee = !1);
  }
  function Oe() {
    return q;
  }
  return {
    init: ae,
    destroy: oe,
    pointerDown: Oe
  };
}
function Ah(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, f) {
    const m = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (Pa(p, t) ? p : p.touches[0])[m];
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
    return v && !m && Be(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function Ph() {
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
function Ih(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function Mh(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function f(b) {
    return a.measureSize(l.measure(b));
  }
  function v(b) {
    if (!r) return;
    d = f(e), c = o.map(f);
    function _(B) {
      for (const $ of B) {
        if (p) return;
        const S = $.target === e, D = o.indexOf($.target), P = S ? d : c[D], T = f(S ? e : o[D]);
        if (Be(T - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((B) => {
      (Xo(r) || r(b, B)) && _(B);
    }), n.requestAnimationFrame(() => {
      i.forEach((B) => u.observe(B));
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
function Rh(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function f() {
    const P = o.get() - e.get(), T = !u;
    let I = 0;
    return T ? (l = 0, n.set(o), e.set(o), I = P) : (n.set(e), l += P / u, l *= d, c += l, e.add(l), I = c - p), i = Pr(I), p = c, D;
  }
  function v() {
    const P = o.get() - t.get();
    return Be(P) < 1e-3;
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
    return $(a);
  }
  function B() {
    return S(r);
  }
  function $(P) {
    return u = P, D;
  }
  function S(P) {
    return d = P, D;
  }
  const D = {
    direction: g,
    duration: m,
    velocity: b,
    seek: f,
    settled: v,
    useBaseFriction: B,
    useBaseDuration: _,
    useFriction: S,
    useDuration: $
  };
  return D;
}
function Fh(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = Gt(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(v) {
    if (!d()) return;
    const m = e.reachedMin(t.get()) ? "min" : "max", g = Be(e[m] - t.get()), b = n.get() - t.get(), _ = i.constrain(g / l);
    n.subtract(b * _), !v && Be(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
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
function Lh(e, t, n, o, a) {
  const r = Gt(-t + e, 0), l = p(), i = c(), u = f();
  function d(m, g) {
    return Vn(m, g) <= 1;
  }
  function c() {
    const m = l[0], g = it(l), b = l.lastIndexOf(m), _ = l.indexOf(g) + 1;
    return Gt(b, _);
  }
  function p() {
    return n.map((m, g) => {
      const {
        min: b,
        max: _
      } = r, B = r.constrain(m), $ = !g, S = Ir(n, g);
      return $ ? _ : S || d(b, B) ? b : d(_, B) ? _ : B;
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
function Vh(e, t, n) {
  const o = t[0], a = n ? o - e : it(t);
  return {
    limit: Gt(a, o)
  };
}
function Nh(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = Gt(r, l);
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
function zh(e) {
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
function jh(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = f(), c = v();
  function p() {
    return i(o).map((g) => it(g)[l] - g[0][r]).map(Be);
  }
  function f() {
    return o.map((g) => n[r] - g[r]).map((g) => -Be(g));
  }
  function v() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function Kh(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const f = l(r), v = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : v ? f : f.slice(i, u).map((m, g, b) => {
      const _ = !g, B = Ir(b, g);
      if (_) {
        const $ = it(b[0]) + 1;
        return Ps($);
      }
      if (B) {
        const $ = so(r) - it(b)[0] + 1;
        return Ps($, it(b)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: d
  };
}
function Hh(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(m) {
    return m.concat().sort((g, b) => Be(g) - Be(b))[0];
  }
  function d(m) {
    const g = e ? l(m) : i(m), b = t.map((B, $) => ({
      diff: c(B - g, 0),
      index: $
    })).sort((B, $) => Be(B.diff) - Be($.diff)), {
      index: _
    } = b[0];
    return {
      index: _,
      distance: g
    };
  }
  function c(m, g) {
    const b = [m, m + n, m - n];
    if (!e) return m;
    if (!g) return u(b);
    const _ = b.filter((B) => Pr(B) === g);
    return _.length ? u(_) : it(b) - n;
  }
  function p(m, g) {
    const b = t[m] - a.get(), _ = c(b, g);
    return {
      index: m,
      distance: _
    };
  }
  function f(m, g) {
    const b = a.get() + m, {
      index: _,
      distance: B
    } = d(b), $ = !e && r(b);
    if (!g || $) return {
      index: _,
      distance: m
    };
    const S = t[_] - B, D = m + c(S, 0);
    return {
      index: _,
      distance: D
    };
  }
  return {
    byDistance: f,
    byIndex: p,
    shortcut: c
  };
}
function qh(e, t, n, o, a, r, l) {
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
function Wh(e, t, n, o, a, r, l, i) {
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
      const B = n.findIndex(($) => $.includes(g));
      Ar(B) && (a.useDuration(0), o.index(B, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, b) => {
      r.add(g, "focus", (_) => {
        (Xo(i) || i(v, _)) && m(b);
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
function Fn(e) {
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
    return Ar(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function Ei(e, t) {
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
    const v = Dh(e.direction(f));
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
function Uh(e, t, n, o, a, r, l, i, u) {
  const c = qn(a), p = qn(a).reverse(), f = _().concat(B());
  function v(T, I) {
    return T.reduce((F, A) => F - a[A], I);
  }
  function m(T, I) {
    return T.reduce((F, A) => v(F, I) > 0 ? F.concat([A]) : F, []);
  }
  function g(T) {
    return r.map((I, F) => ({
      start: I - o[F] + 0.5 + T,
      end: I + t - 0.5 + T
    }));
  }
  function b(T, I, F) {
    const A = g(I);
    return T.map((L) => {
      const R = F ? 0 : -n, X = F ? n : 0, H = F ? "end" : "start", Q = A[L][H];
      return {
        index: L,
        loopPoint: Q,
        slideLocation: Fn(-1),
        translate: Ei(e, u[L]),
        target: () => i.get() > Q ? R : X
      };
    });
  }
  function _() {
    const T = l[0], I = m(p, T);
    return b(I, n, !1);
  }
  function B() {
    const T = t - l[0] - 1, I = m(c, T);
    return b(I, -n, !0);
  }
  function $() {
    return f.every(({
      index: T
    }) => {
      const I = c.filter((F) => F !== T);
      return v(I, t) <= 0.1;
    });
  }
  function S() {
    f.forEach((T) => {
      const {
        target: I,
        translate: F,
        slideLocation: A
      } = T, L = I();
      L !== A.get() && (F.to(L), A.set(L));
    });
  }
  function D() {
    f.forEach((T) => T.translate.clear());
  }
  return {
    canLoop: $,
    clear: D,
    loop: S,
    loopPoints: f
  };
}
function Gh(e, t, n) {
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
      a || (Xo(n) || n(u, c)) && d(c);
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
function Yh(e, t, n, o) {
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
  function c() {
    i && i.disconnect(), u = !0;
  }
  function p(m) {
    return Wn(a).reduce((g, b) => {
      const _ = parseInt(b), {
        isIntersecting: B
      } = a[_];
      return (m && B || !m && !B) && g.push(_), g;
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
function Xh(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = m(), p = g(), f = n.map(l), v = b();
  function m() {
    if (!d) return 0;
    const B = n[0];
    return Be(t[i] - B[i]);
  }
  function g() {
    if (!d) return 0;
    const B = r.getComputedStyle(it(o));
    return parseFloat(B.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map((B, $, S) => {
      const D = !$, P = Ir(S, $);
      return D ? f[$] + c : P ? f[$] + p : S[$ + 1][i] - B[i];
    }).map(Be);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: v,
    startGap: c,
    endGap: p
  };
}
function Zh(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, f = Ar(n);
  function v(_, B) {
    return qn(_).filter(($) => $ % B === 0).map(($) => _.slice($, $ + B));
  }
  function m(_) {
    return _.length ? qn(_).reduce((B, $, S) => {
      const D = it(B) || 0, P = D === 0, T = $ === so(_), I = a[d] - r[D][d], F = a[d] - r[$][c], A = !o && P ? p(l) : 0, L = !o && T ? p(i) : 0, R = Be(F - L - (I + A));
      return S && R > t + u && B.push($), T && B.push(_.length), B;
    }, []).map((B, $, S) => {
      const D = Math.max(S[$ - 1] || 0);
      return _.slice(D, B);
    }) : [];
  }
  function g(_) {
    return f ? v(_, n) : m(_);
  }
  return {
    groupSlides: g
  };
}
function Qh(e, t, n, o, a, r, l) {
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
    slidesToScroll: b,
    skipSnaps: _,
    containScroll: B,
    watchResize: $,
    watchSlides: S,
    watchDrag: D,
    watchFocus: P
  } = r, T = 2, I = Ph(), F = I.measure(t), A = n.map(I.measure), L = Th(u, d), R = L.measureSize(F), X = Ih(R), H = Eh(i, R), Q = !p && !!B, q = p || !!B, {
    slideSizes: me,
    slideSizesWithGaps: ee,
    startGap: j,
    endGap: ae
  } = Xh(L, F, A, n, q, a), oe = Zh(L, R, b, p, F, A, j, ae, T), {
    snaps: ze,
    snapsAligned: qe
  } = jh(L, H, F, A, oe), je = -it(ze) + it(ee), {
    snapsContained: Ye,
    scrollContainLimit: wt
  } = Lh(R, je, qe, B, T), xe = Q ? Ye : qe, {
    limit: ve
  } = Vh(je, xe, p), Fe = Di(so(xe), c, p), Oe = Fe.clone(), ye = qn(n), W = ({
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
    dragHandler: Ui,
    animation: Gi,
    eventHandler: jr,
    scrollBounds: Yi,
    options: {
      loop: Kr
    }
  }, Hr) => {
    const qr = xt.settled(), Xi = !Yi.shouldConstrain(), Wr = Kr ? qr : qr && Xi, Ur = Wr && !Ui.pointerDown();
    Ur && Gi.stop();
    const Zi = an.get() * Hr + Ct.get() * (1 - Hr);
    rn.set(Zi), Kr && (sn.loop(xt.direction()), io.loop()), ot.to(rn.get()), Ur && jr.emit("settle"), Wr || jr.emit("scroll");
  }, De = Sh(o, a, () => W(Ht), (xt) => ue(Ht, xt)), Ve = 0.68, Qe = xe[Fe.get()], nt = Fn(Qe), Z = Fn(Qe), ge = Fn(Qe), be = Fn(Qe), pe = Rh(nt, ge, Z, be, f, Ve), Ee = Hh(p, xe, je, ve, be), Ie = qh(De, Fe, Oe, pe, Ee, be, l), We = zh(ve), _t = Un(), on = Yh(t, n, l, g), {
    slideRegistry: Kt
  } = Kh(Q, B, xe, wt, oe, ye), lo = Wh(e, n, Kt, Ie, pe, _t, l, P), Ht = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: F,
    slideRects: A,
    animation: De,
    axis: L,
    dragHandler: kh(L, e, o, a, be, Ah(L, a), nt, De, Ie, pe, Ee, Fe, l, X, v, m, _, Ve, D),
    eventStore: _t,
    percentOfView: X,
    index: Fe,
    indexPrevious: Oe,
    limit: ve,
    location: nt,
    offsetLocation: ge,
    previousLocation: Z,
    options: r,
    resizeHandler: Mh(t, l, a, n, L, $, I),
    scrollBody: pe,
    scrollBounds: Fh(ve, ge, be, pe, X),
    scrollLooper: Nh(je, ve, ge, [nt, ge, Z, be]),
    scrollProgress: We,
    scrollSnapList: xe.map(We.get),
    scrollSnaps: xe,
    scrollTarget: Ee,
    scrollTo: Ie,
    slideLooper: Uh(L, R, je, me, ee, ze, xe, ge, n),
    slideFocus: lo,
    slidesHandler: Gh(t, l, S),
    slidesInView: on,
    slideIndexes: ye,
    slideRegistry: Kt,
    slidesToScroll: oe,
    target: be,
    translate: Ei(L, t)
  };
  return Ht;
}
function Jh() {
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
const e0 = {
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
function t0(e) {
  function t(r, l) {
    return Oi(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = Wn(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => Wn(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function n0(e) {
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
function To(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = t0(a), l = n0(r), i = Un(), u = Jh(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: f,
    off: v,
    emit: m
  } = u, g = L;
  let b = !1, _, B = d(e0, To.globalOptions), $ = d(B), S = [], D, P, T;
  function I() {
    const {
      container: ye,
      slides: W
    } = $;
    P = (Aa(ye) ? e.querySelector(ye) : ye) || e.children[0];
    const De = Aa(W) ? P.querySelectorAll(W) : W;
    T = [].slice.call(De || P.children);
  }
  function F(ye) {
    const W = Qh(e, P, T, o, a, ye, u);
    if (ye.loop && !W.slideLooper.canLoop()) {
      const ue = Object.assign({}, ye, {
        loop: !1
      });
      return F(ue);
    }
    return W;
  }
  function A(ye, W) {
    b || (B = d(B, ye), $ = c(B), S = W || S, I(), _ = F($), p([B, ...S.map(({
      options: ue
    }) => ue)]).forEach((ue) => i.add(ue, "change", L)), $.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(Oe), _.eventHandler.init(Oe), _.resizeHandler.init(Oe), _.slidesHandler.init(Oe), _.options.loop && _.slideLooper.loop(), P.offsetParent && T.length && _.dragHandler.init(Oe), D = l.init(Oe, S)));
  }
  function L(ye, W) {
    const ue = oe();
    R(), A(d({
      startIndex: ue
    }, ye), W), u.emit("reInit");
  }
  function R() {
    _.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), l.destroy(), i.clear();
  }
  function X() {
    b || (b = !0, i.clear(), R(), u.emit("destroy"), u.clear());
  }
  function H(ye, W, ue) {
    !$.active || b || (_.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : $.duration), _.scrollTo.index(ye, ue || 0));
  }
  function Q(ye) {
    const W = _.index.add(1).get();
    H(W, ye, -1);
  }
  function q(ye) {
    const W = _.index.add(-1).get();
    H(W, ye, 1);
  }
  function me() {
    return _.index.add(1).get() !== oe();
  }
  function ee() {
    return _.index.add(-1).get() !== oe();
  }
  function j() {
    return _.scrollSnapList;
  }
  function ae() {
    return _.scrollProgress.get(_.offsetLocation.get());
  }
  function oe() {
    return _.index.get();
  }
  function ze() {
    return _.indexPrevious.get();
  }
  function qe() {
    return _.slidesInView.get();
  }
  function je() {
    return _.slidesInView.get(!1);
  }
  function Ye() {
    return D;
  }
  function wt() {
    return _;
  }
  function xe() {
    return e;
  }
  function ve() {
    return P;
  }
  function Fe() {
    return T;
  }
  const Oe = {
    canScrollNext: me,
    canScrollPrev: ee,
    containerNode: ve,
    internalEngine: wt,
    destroy: X,
    off: v,
    on: f,
    emit: m,
    plugins: Ye,
    previousScrollSnap: ze,
    reInit: g,
    rootNode: xe,
    scrollNext: Q,
    scrollPrev: q,
    scrollProgress: ae,
    scrollSnapList: j,
    scrollTo: H,
    selectedScrollSnap: oe,
    slideNodes: Fe,
    slidesInView: qe,
    slidesNotInView: je
  };
  return A(t, n), setTimeout(() => u.emit("init"), 0), Oe;
}
To.globalOptions = void 0;
function Mr(e = {}, t = []) {
  const n = pt(e), o = pt(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Nn(), i = Nn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return le(() => {
    !$h() || !l.value || (To.globalOptions = Mr.globalOptions, i.value = To(l.value, a, r));
  }), _n(() => {
    i.value && i.value.destroy();
  }), n && Y(e, (d) => {
    kr(a, d) || (a = d, u());
  }), o && Y(t, (d) => {
    Bh(r, d) || (r = d, u());
  }), [l, i];
}
Mr.globalOptions = void 0;
const [o0, a0] = mh(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Mr(
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
    return le(() => {
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
function Zo() {
  const e = a0();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const _w = /* @__PURE__ */ w({
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
    } = o0(o, a);
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
    return (v, m) => (h(), z("div", {
      class: ne(s(N)("relative", o.class)),
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
        scrollNext: s(c),
        scrollPrev: s(p)
      })
    ], 34));
  }
}), xw = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = Zo();
    return (a, r) => (h(), z("div", {
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
}), Cw = /* @__PURE__ */ w({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = Zo();
    return (o, a) => (h(), z("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: ne(
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
}), $w = /* @__PURE__ */ w({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = Zo();
    return (r, l) => (h(), C(s($i), {
      disabled: !s(o),
      class: ne(
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
          M(s(Ag), { class: "size-4 text-current" }),
          l[0] || (l[0] = de("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Bw = /* @__PURE__ */ w({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = Zo();
    return (r, l) => (h(), C(s($i), {
      disabled: !s(o),
      class: ne(
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
          M(s(Pg), { class: "size-4 text-current" }),
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
const r0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
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
const s0 = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => Ke(
  "svg",
  {
    ...ho,
    width: e || ho.width,
    height: e || ho.height,
    stroke: o || ho.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${r0(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => Ke(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = (e, t) => (n, { slots: o }) => Ke(
  s0,
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
const i0 = l0("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
function Is(e) {
  return typeof e == "string" ? `'${e}'` : new u0().serialize(e);
}
const u0 = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      Yr(this, t, /* @__PURE__ */ new Map());
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
function Ia(e, t) {
  return e === t || Is(e) === Is(t);
}
function tn(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = Xn(o, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (Zn(o, l), l)];
}
function mt() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Si(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Ma(e) {
  return e == null;
}
function Ms(e, t) {
  return Ma(e) ? !1 : Array.isArray(e) ? e.some((n) => Ia(n, t)) : Ia(e, t);
}
function Rr(e) {
  return e ? e.flatMap((t) => t.type === $e ? Rr(t.children) : [t]) : [];
}
const [Ti, Ow] = tn("ConfigProvider");
function ki(e) {
  return Va() ? (Na(e), !0) : !1;
}
function d0(e) {
  let t = !1, n;
  const o = Po(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function c0(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = Po(!0), n = o.run(() => e(...r))), ki(a), n);
}
const nn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const p0 = (e) => typeof e < "u", f0 = Object.prototype.toString, m0 = (e) => f0.call(e) === "[object Object]", Rs = /* @__PURE__ */ v0();
function v0() {
  var e, t;
  return nn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function g0(e) {
  return He();
}
function ma(e) {
  return Array.isArray(e) ? e : [e];
}
const h0 = lt;
function y0(e, t) {
  g0() && _n(e, t);
}
function b0(e, t, n) {
  return Y(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Fr = nn ? window : void 0;
function An(e) {
  var t;
  const n = lt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Lr(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = O(() => {
    const i = ma(lt(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = b0(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => An(d))) != null ? u : [Fr].filter((d) => d != null),
        ma(lt(a.value ? e[1] : e[0])),
        ma(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        lt(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = m0(c) ? { ...c } : c;
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
  return ki(n), l;
}
function w0() {
  const e = Nn(!1), t = He();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function _0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function x0(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Fr,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = _0(t);
  return Lr(a, r, (c) => {
    c.repeat && lt(i) || u(c) && n(c);
  }, l);
}
function C0(e) {
  return JSON.parse(JSON.stringify(e));
}
function Vr(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, v = He(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : C0($) : $, _ = () => p0(e[t]) ? b(e[t]) : p, B = ($) => {
    f ? f($) && m(g, $) : m(g, $);
  };
  if (u) {
    const $ = _(), S = E($);
    let D = !1;
    return Y(
      () => e[t],
      (P) => {
        D || (D = !0, S.value = b(P), te(() => D = !1));
      }
    ), Y(
      S,
      (P) => {
        !D && (P !== e[t] || c) && B(P);
      },
      { deep: c }
    ), S;
  } else
    return O({
      get() {
        return _();
      },
      set($) {
        B($);
      }
    });
}
function va(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ra(e, t, n = ".", o) {
  if (!va(t))
    return Ra(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : va(l) && va(a[r]) ? a[r] = Ra(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function $0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Ra(n, o, "", e), {})
  );
}
const B0 = $0(), O0 = c0(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = O(() => {
    for (const l of e.value.values()) if (l) return !0;
    return !1;
  }), o = Ti({ scrollBody: E(!0) });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Rs && (a == null || a()), t.value = void 0;
  };
  return Y(n, (l, i) => {
    var p;
    if (!nn) return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, c = (p = o.scrollBody) != null && p.value ? typeof o.scrollBody.value == "object" ? B0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Rs && (a = Lr(document, "touchmove", (f) => E0(f), { passive: !1 })), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function D0(e) {
  const t = Math.random().toString(36).substring(2, 7), n = O0();
  n.value.set(t, e);
  const o = O({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return y0(() => {
    n.value.delete(t);
  }), o;
}
function Ai(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ai(n);
  }
}
function E0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ai(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function Qo(e) {
  const t = He(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((a) => {
    o[Gs(Ao(a))] = (...r) => e(a, ...r);
  }), o;
}
function S0(e) {
  return O(() => {
    var t;
    return h0(e) ? !!((t = An(e)) != null && t.closest("form")) : !0;
  });
}
function Ne() {
  const e = He(), t = E(), n = O(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : An(t);
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
function T0(e) {
  const t = He(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = Ws(e);
  return O(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Ao(l)] = r[l];
    }), Object.keys({
      ...n,
      ...a
    }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Jo(e, t) {
  const n = T0(e), o = t ? Qo(t) : {};
  return O(() => ({
    ...n.value,
    ...o
  }));
}
var k0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dn = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), bo = {}, ga = 0, Pi = function(e) {
  return e && (e.host || Pi(e.parentNode));
}, A0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Pi(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, P0 = function(e, t, n, o) {
  var a = A0(t, Array.isArray(e) ? e : [e]);
  bo[n] || (bo[n] = /* @__PURE__ */ new WeakMap());
  var r = bo[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var v = f.getAttribute(o), m = v !== null && v !== "false", g = (dn.get(f) || 0) + 1, b = (r.get(f) || 0) + 1;
          dn.set(f, g), r.set(f, b), l.push(f), g === 1 && m && yo.set(f, !0), b === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", f, _);
        }
    });
  };
  return c(t), i.clear(), ga++, function() {
    l.forEach(function(p) {
      var f = dn.get(p) - 1, v = r.get(p) - 1;
      dn.set(p, f), r.set(p, v), f || (yo.has(p) || p.removeAttribute(o), yo.delete(p)), v || p.removeAttribute(n);
    }), ga--, ga || (dn = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), bo = {});
  };
}, I0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = k0(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), P0(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function M0(e) {
  let t;
  Y(() => An(e), (n) => {
    n ? t = I0(n) : t && t();
  }), Ue(() => {
    t && t();
  });
}
let R0 = 0;
function Gn(e, t = "reka") {
  var o;
  if ("useId" in pn) return `${t}-${(o = pn.useId) == null ? void 0 : o.call(pn)}`;
  const n = Ti({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++R0}`;
}
function F0(e, t) {
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
function L0(e, t) {
  var b;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Fr, { state: u, dispatch: d } = F0(r, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (_) => {
    var B;
    if (nn) {
      const $ = new CustomEvent(_, {
        bubbles: !1,
        cancelable: !1
      });
      (B = t.value) == null || B.dispatchEvent($);
    }
  };
  Y(e, async (_, B) => {
    var S;
    const $ = B !== _;
    if (await te(), $) {
      const D = o.value, P = wo(t.value);
      _ ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((S = n.value) == null ? void 0 : S.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : B && D !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const p = (_) => {
    const B = wo(t.value), $ = B.includes(_.animationName), S = u.value === "mounted" ? "enter" : "leave";
    if (_.target === t.value && $ && (c(`after-${S}`), d("ANIMATION_END"), !a.value)) {
      const D = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = D);
      });
    }
    _.target === t.value && B === "none" && d("ANIMATION_END");
  }, f = (_) => {
    _.target === t.value && (o.value = wo(t.value));
  }, v = Y(t, (_, B) => {
    _ ? (n.value = getComputedStyle(_), _.addEventListener("animationstart", f), _.addEventListener("animationcancel", p), _.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), B == null || B.removeEventListener("animationstart", f), B == null || B.removeEventListener("animationcancel", p), B == null || B.removeEventListener("animationend", p));
  }, { immediate: !0 }), m = Y(u, () => {
    const _ = wo(t.value);
    o.value = u.value === "mounted" ? _ : "none";
  });
  return Ue(() => {
    v(), m();
  }), { isPresent: O(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function wo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var ea = w({
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
    const { present: o, forceMount: a } = fe(e), r = E(), { isPresent: l } = L0(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = Rr(i || []);
    const u = He();
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
    return () => a.value || o.value || l.value ? Ke(t.default({ present: l.value })[0], { ref: (c) => {
      const p = An(c);
      return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
    } }) : null;
  }
});
const Fa = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const o = Rr(n.default()), a = o.findIndex((d) => d.type !== Ha);
      if (a === -1) return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? k(t, r.props) : t, i = Ys({
        ...r,
        props: {}
      }, l);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), V0 = [
  "area",
  "img",
  "input"
], Ge = w({
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
    return typeof o == "string" && V0.includes(o) ? () => Ke(o, t) : o !== "template" ? () => Ke(e.as, t, { default: n.default }) : () => Ke(Fa, t, { default: n.default });
  }
});
function La() {
  const e = E(), t = O(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : An(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Ii, N0] = tn("CollapsibleRoot");
var z0 = /* @__PURE__ */ w({
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
    const o = e, r = Vr(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), { disabled: l, unmountOnHide: i } = fe(o);
    return N0({
      contentId: "",
      disabled: l,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (r.value = !r.value);
      }
    }), t({ open: r }), Ne(), (u, d) => (h(), C(s(Ge), {
      as: u.as,
      "as-child": o.asChild,
      "data-state": s(r) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: y(() => [x(u.$slots, "default", { open: s(r) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), j0 = z0, K0 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = Ii();
    a.contentId || (a.contentId = Gn(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: l, currentElement: i } = Ne(), u = E(0), d = E(0), c = O(() => a.open.value), p = E(c.value), f = E();
    Y(() => {
      var m;
      return [c.value, (m = r.value) == null ? void 0 : m.present];
    }, async () => {
      await te();
      const m = i.value;
      if (!m) return;
      f.value = f.value || {
        transitionDuration: m.style.transitionDuration,
        animationName: m.style.animationName
      }, m.style.transitionDuration = "0s", m.style.animationName = "none";
      const g = m.getBoundingClientRect();
      d.value = g.height, u.value = g.width, p.value || (m.style.transitionDuration = f.value.transitionDuration, m.style.animationName = f.value.animationName);
    }, { immediate: !0 });
    const v = O(() => p.value && a.open.value);
    return le(() => {
      requestAnimationFrame(() => {
        p.value = !1;
      });
    }), Lr(i, "beforematch", (m) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), o("contentFound");
      });
    }), (m, g) => (h(), C(s(ea), {
      ref_key: "presentRef",
      ref: r,
      present: m.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: y(({ present: b }) => {
        var _;
        return [M(s(Ge), k(m.$attrs, {
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
          default: y(() => [!s(a).unmountOnHide.value || b ? x(m.$slots, "default", { key: 0 }) : ce("v-if", !0)]),
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
}), H0 = K0, q0 = /* @__PURE__ */ w({
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
    Ne();
    const n = Ii();
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
        default: y(() => [x(o.$slots, "default")]),
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
}), W0 = q0;
const [bt, U0] = tn("DialogRoot");
var G0 = /* @__PURE__ */ w({
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
    const n = e, a = Vr(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = fe(n);
    return U0({
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
}), Y0 = G0, X0 = /* @__PURE__ */ w({
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
    Ne();
    const n = bt();
    return (o, a) => (h(), C(s(Ge), k(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [x(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), Z0 = X0;
const Q0 = "dismissableLayer.pointerDownOutside", J0 = "dismissableLayer.focusOutside";
function Mi(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function ey(e, t, n = !0) {
  var l;
  const o = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return he((i) => {
    if (!nn || !lt(n)) return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(t != null && t.value) || !p)) {
        if (Mi(t.value, p)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let v = function() {
            Si(Q0, e, f);
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
    lt(n) && (a.value = !0);
  } };
}
function ty(e, t, n = !0) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return he((l) => {
    if (!nn || !lt(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await te(), await te();
      const d = u.target;
      !t.value || !d || Mi(t.value, d) || u.target && !a.value && Si(J0, e, { originalEvent: u });
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
const Ot = gn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var ny = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ne(), l = O(() => {
      var m;
      return ((m = r.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
    }), i = O(() => Ot.layersRoot), u = O(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = O(() => Ot.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const m = Array.from(i.value), [g] = [...Ot.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(g);
      return u.value >= b;
    }), p = ey(async (m) => {
      const g = [...Ot.branches].some((b) => b == null ? void 0 : b.contains(m.target));
      !c.value || g || (o("pointerDownOutside", m), o("interactOutside", m), await te(), m.defaultPrevented || o("dismiss"));
    }, r), f = ty((m) => {
      [...Ot.branches].some((b) => b == null ? void 0 : b.contains(m.target)) || (o("focusOutside", m), o("interactOutside", m), m.defaultPrevented || o("dismiss"));
    }, r);
    x0("Escape", (m) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", m), m.defaultPrevented || o("dismiss"));
    });
    let v;
    return he((m) => {
      r.value && (n.disableOutsidePointerEvents && (Ot.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ot.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), m(() => {
        n.disableOutsidePointerEvents && Ot.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), he((m) => {
      m(() => {
        r.value && (i.value.delete(r.value), Ot.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (m, g) => (h(), C(s(Ge), {
      ref: s(a),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: kt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [x(m.$slots, "default")]),
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
}), oy = ny;
const ay = d0(() => E([]));
function ry() {
  const e = ay();
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
function sy(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ha = "focusScope.autoFocusOnMount", ya = "focusScope.autoFocusOnUnmount", Ls = {
  bubbles: !1,
  cancelable: !0
};
function ly(e, { select: t = !1 } = {}) {
  const n = mt();
  for (const o of e)
    if (Rt(o, { select: t }), mt() !== n) return !0;
}
function iy(e) {
  const t = Ri(e), n = Vs(t, e), o = Vs(t.reverse(), e);
  return [n, o];
}
function Ri(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Vs(e, t) {
  for (const n of e) if (!uy(n, { upTo: t })) return n;
}
function uy(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dy(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = mt();
    e.focus({ preventScroll: !0 }), e !== n && dy(e) && t && e.select();
  }
}
var cy = /* @__PURE__ */ w({
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
    const n = e, o = t, { currentRef: a, currentElement: r } = Ne(), l = E(null), i = ry(), u = gn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    he((c) => {
      if (!nn) return;
      const p = r.value;
      if (!n.trapped) return;
      function f(b) {
        if (u.paused || !p) return;
        const _ = b.target;
        p.contains(_) ? l.value = _ : Rt(l.value, { select: !0 });
      }
      function v(b) {
        if (u.paused || !p) return;
        const _ = b.relatedTarget;
        _ !== null && (p.contains(_) || Rt(l.value, { select: !0 }));
      }
      function m(b) {
        p.contains(l.value) || Rt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const g = new MutationObserver(m);
      p && g.observe(p, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), he(async (c) => {
      const p = r.value;
      if (await te(), !p) return;
      i.add(u);
      const f = mt();
      if (!p.contains(f)) {
        const m = new CustomEvent(ha, Ls);
        p.addEventListener(ha, (g) => o("mountAutoFocus", g)), p.dispatchEvent(m), m.defaultPrevented || (ly(sy(Ri(p)), { select: !0 }), mt() === f && Rt(p));
      }
      c(() => {
        p.removeEventListener(ha, (b) => o("mountAutoFocus", b));
        const m = new CustomEvent(ya, Ls), g = (b) => {
          o("unmountAutoFocus", b);
        };
        p.addEventListener(ya, g), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Rt(f ?? document.body, { select: !0 }), p.removeEventListener(ya, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused) return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = mt();
      if (p && f) {
        const v = c.currentTarget, [m, g] = iy(v);
        m && g ? !c.shiftKey && f === g ? (c.preventDefault(), n.loop && Rt(m, { select: !0 })) : c.shiftKey && f === m && (c.preventDefault(), n.loop && Rt(g, { select: !0 })) : f === v && c.preventDefault();
      }
    }
    return (c, p) => (h(), C(s(Ge), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [x(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), py = cy;
function fy(e) {
  return e ? "open" : "closed";
}
const my = "DialogTitle", vy = "DialogContent";
function gy({ titleName: e = my, contentName: t = vy, componentLink: n = "dialog.html#title", titleId: o, descriptionId: a, contentElement: r }) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  le(() => {
    var c;
    document.getElementById(o) || console.warn(l);
    const d = (c = r.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
var hy = /* @__PURE__ */ w({
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
    const n = e, o = t, a = bt(), { forwardRef: r, currentElement: l } = Ne();
    return a.titleId || (a.titleId = Gn(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = Gn(void 0, "reka-dialog-description")), le(() => {
      a.contentElement = l, mt() !== document.body && (a.triggerElement.value = mt());
    }), process.env.NODE_ENV !== "production" && gy({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(py), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [M(s(oy), k({
        id: s(a).contentId,
        ref: s(r),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": s(a).descriptionId,
        "aria-labelledby": s(a).titleId,
        "data-state": s(fy)(s(a).open.value)
      }, i.$attrs, {
        onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
        onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
        onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
        onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
      }), {
        default: y(() => [x(i.$slots, "default")]),
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
}), Fi = hy, yy = /* @__PURE__ */ w({
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
    const n = e, o = t, a = bt(), r = Qo(o), { forwardRef: l, currentElement: i } = Ne();
    return M0(i), (u, d) => (h(), C(Fi, k({
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
      default: y(() => [x(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), by = yy, wy = /* @__PURE__ */ w({
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
    const n = e, a = Qo(t);
    Ne();
    const r = bt(), l = E(!1), i = E(!1);
    return (u, d) => (h(), C(Fi, k({
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
      default: y(() => [x(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), _y = wy, xy = /* @__PURE__ */ w({
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
    const n = e, o = t, a = bt(), r = Qo(o), { forwardRef: l } = Ne();
    return (i, u) => (h(), C(s(ea), { present: i.forceMount || s(a).open.value }, {
      default: y(() => [s(a).modal.value ? (h(), C(by, k({
        key: 0,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [x(i.$slots, "default")]),
        _: 3
      }, 16)) : (h(), C(_y, k({
        key: 1,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [x(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), Cy = xy, $y = /* @__PURE__ */ w({
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
    Ne();
    const n = bt();
    return (o, a) => (h(), C(s(Ge), k(t, { id: s(n).descriptionId }), {
      default: y(() => [x(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), By = $y, Oy = /* @__PURE__ */ w({
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
    const t = bt();
    return D0(!0), Ne(), (n, o) => (h(), C(s(Ge), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [x(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), Dy = Oy, Ey = /* @__PURE__ */ w({
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
    const t = bt(), { forwardRef: n } = Ne();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(ea), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [M(Dy, k(o.$attrs, {
          ref: s(n),
          as: o.as,
          "as-child": o.asChild
        }), {
          default: y(() => [x(o.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : ce("v-if", !0);
    };
  }
}), Sy = Ey, Ty = /* @__PURE__ */ w({
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
    const t = w0();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Yn, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [x(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : ce("v-if", !0);
  }
}), ky = Ty, Ay = /* @__PURE__ */ w({
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
    return (n, o) => (h(), C(s(ky), U(G(t)), {
      default: y(() => [x(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Py = Ay, Iy = /* @__PURE__ */ w({
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
    const t = e, n = bt();
    return Ne(), (o, a) => (h(), C(s(Ge), k(t, { id: s(n).titleId }), {
      default: y(() => [x(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), My = Iy, Ry = /* @__PURE__ */ w({
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
    const t = e, n = bt(), { forwardRef: o, currentElement: a } = Ne();
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
      default: y(() => [x(r.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), Fy = Ry;
const Ns = "data-reka-collection-item";
function Ly(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: c
    }, Zn(o, a);
  } else a = Xn(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p) return [];
    const f = Array.from(p.querySelectorAll(`[${Ns}]`)), m = Array.from(a.itemMap.value.values()).sort((g, b) => f.indexOf(g.ref) - f.indexOf(b.ref));
    return c ? m : m.filter((g) => g.ref.dataset.disabled !== "");
  }, l = w({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: f, currentElement: v } = La();
      return Y(v, () => {
        a.collectionRef.value = v.value;
      }), () => Ke(Fa, { ref: f }, p);
    }
  }), i = w({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: p, attrs: f }) {
      const { primitiveElement: v, currentElement: m } = La();
      return he((g) => {
        if (m.value) {
          const b = Xs(m.value);
          a.itemMap.value.set(b, {
            ref: m.value,
            value: c.value
          }), g(() => a.itemMap.value.delete(b));
        }
      }), () => Ke(Fa, {
        ...f,
        [Ns]: "",
        ref: v
      }, p);
    }
  }), u = O(() => Array.from(a.itemMap.value.values())), d = O(() => a.itemMap.value.size);
  return {
    getItems: r,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: l,
    CollectionItem: i
  };
}
const Vy = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ny(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function zy(e, t, n) {
  const o = Ny(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Vy[o];
}
function jy(e, t = !1) {
  const n = mt();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), mt() !== n)) return;
}
function Ky(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Hy, Dw] = tn("RovingFocusGroup");
var qy = /* @__PURE__ */ w({
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
    const t = e, n = Hy(), o = Gn(), a = O(() => t.tabStopId || o), r = O(() => n.currentTabStopId.value === a.value), { getItems: l, CollectionItem: i } = Ly();
    le(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ue(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = zy(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let p = [...l().map((f) => f.ref).filter((f) => f.dataset.disabled !== "")];
        if (c === "last") p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const f = p.indexOf(d.currentTarget);
          p = n.loop.value ? Ky(p, f + 1) : p.slice(f + 1);
        }
        te(() => jy(p));
      }
    }
    return (d, c) => (h(), C(s(i), null, {
      default: y(() => [M(s(Ge), {
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
        default: y(() => [x(d.$slots, "default")]),
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
}), Wy = qy, Uy = /* @__PURE__ */ w({
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
    return (t, n) => (h(), C(s(Ge), {
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
      default: y(() => [x(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Gy = Uy, Yy = /* @__PURE__ */ w({
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
    const t = e, { primitiveElement: n, currentElement: o } = La(), a = O(() => t.checked ?? t.value);
    return Y(a, (r, l) => {
      if (!o.value) return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(f);
      }
    }), (r, l) => (h(), C(Gy, k({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), zs = Yy, Xy = /* @__PURE__ */ w({
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
    const t = e, n = O(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = O(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
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
    return (a, r) => (h(), z($e, null, [ce(" We render single input if it's required "), n.value ? (h(), C(zs, k({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), z($e, { key: 1 }, Lt(o.value, (l) => (h(), C(zs, k({ key: l.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Zy = Xy;
const [Qy, Ew] = tn("CheckboxGroupRoot");
function ko(e) {
  return e === "indeterminate";
}
function Li(e) {
  return ko(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [Jy, eb] = tn("CheckboxRoot");
var tb = /* @__PURE__ */ w({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ne(), l = Qy(null), i = Vr(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = O(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = O(() => Ma(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : Ms(l.modelValue.value, n.value));
    function c() {
      if (Ma(l == null ? void 0 : l.modelValue.value))
        i.value = ko(i.value) ? !0 : !i.value;
      else {
        const v = [...l.modelValue.value || []];
        if (Ms(v, n.value)) {
          const m = v.findIndex((g) => Ia(g, n.value));
          v.splice(m, 1);
        } else v.push(n.value);
        l.modelValue.value = v;
      }
    }
    const p = S0(r), f = O(() => {
      var v;
      return n.id && r.value ? (v = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : v.innerText : void 0;
    });
    return eb({
      disabled: u,
      state: d
    }), (v, m) => {
      var g, b;
      return h(), C(Je((g = s(l)) != null && g.rovingFocus.value ? s(Wy) : s(Ge)), k(v.$attrs, {
        id: v.id,
        ref: s(a),
        role: "checkbox",
        "as-child": v.asChild,
        as: v.as,
        type: v.as === "button" ? "button" : void 0,
        "aria-checked": s(ko)(d.value) ? "mixed" : d.value,
        "aria-required": v.required,
        "aria-label": v.$attrs["aria-label"] || f.value,
        "data-state": s(Li)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (b = s(l)) != null && b.rovingFocus.value ? !u.value : void 0,
        onKeydown: Ft(Ae(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [x(v.$slots, "default", {
          modelValue: s(i),
          state: d.value
        }), s(p) && v.name && !s(l) ? (h(), C(s(Zy), {
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
}), nb = tb, ob = /* @__PURE__ */ w({
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
    const { forwardRef: t } = Ne(), n = Jy();
    return (o, a) => (h(), C(s(ea), { present: o.forceMount || s(ko)(s(n).state.value) || s(n).state.value === !0 }, {
      default: y(() => [M(s(Ge), k({
        ref: s(t),
        "data-state": s(Li)(s(n).state.value),
        "data-disabled": s(n).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": o.asChild,
        as: o.as
      }, o.$attrs), {
        default: y(() => [x(o.$slots, "default")]),
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
}), ab = ob;
const Sw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Jo(a, o);
    return (l, i) => (h(), C(s(nb), k(s(r), {
      class: s(N)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        M(s(ab), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            x(l.$slots, "default", {}, () => [
              M(s(i0), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tw = /* @__PURE__ */ w({
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
    const a = Jo(e, t);
    return (r, l) => (h(), C(s(j0), U(G(s(a))), {
      default: y(({ open: i }) => [
        x(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), kw = /* @__PURE__ */ w({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(H0), k(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Aw = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(W0), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rb = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Op), k(s(r), {
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
}), sb = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(ir), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pw = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Zt), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Iw = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ur), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mw = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Rw = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(mr), k(s(o), {
      class: s(N)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fw = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(vr), k(s(o), {
      class: s(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lb = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(dr), null, {
      default: y(() => [
        M(s(Ho), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        M(s(Ko), k(s(r), {
          class: s(N)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            x(l.$slots, "default"),
            M(s(Zt), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                M(s(Yo), { class: "size-4" }),
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
}), Lw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(dr), null, {
      default: y(() => [
        M(s(Ho), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            M(s(Ko), k({
              class: s(N)(
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
                x(l.$slots, "default"),
                M(s(Zt), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    M(s(Yo), { class: "h-4 w-4" }),
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
}), Vw = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Nw = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(sb), U(G(s(a))), {
      default: y(() => [
        M(s(lb), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            M(rb, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), zw = /* @__PURE__ */ w({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Ip), k(n.value, {
      class: s(N)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jw = /* @__PURE__ */ w({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Sp), k(n.value, {
      class: s(N)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), C(s(Tp), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Te(Se(o.heading), 1)
          ]),
          _: 1
        })) : ce("", !0),
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ib = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Kw = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), z("div", ib, [
      M(s(Lg), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      M(s(Dp), k({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(N)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Hw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Lp), k(s(r), {
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
}), ub = { role: "presentation" }, qw = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Pp), k(s(r), {
      class: s(N)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        de("div", ub, [
          x(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ww = /* @__PURE__ */ w({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Vp), k(n.value, {
      class: s(N)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uw = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
      class: ne(s(N)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Gw = /* @__PURE__ */ w({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: o, actionButton: a, title: r, description: l } = pb();
    return (i, u) => (h(), C(s(eh), { open: s(t) }, {
      default: y(() => [
        M(s(th), {
          onClose: s(n),
          onEscapeKeyDown: s(n),
          onPointerDownOutside: s(n)
        }, {
          default: y(() => [
            M(s(nh), null, {
              default: y(() => [
                M(s(oh), null, {
                  default: y(() => [
                    Te(Se(s(r)), 1)
                  ]),
                  _: 1
                }),
                M(s(ah), null, {
                  default: y(() => [
                    Te(Se(s(l)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            M(s(rh), null, {
              default: y(() => [
                M(s(lh), {
                  onClick: s(o).handler
                }, {
                  default: y(() => [
                    Te(Se(s(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                M(s(sh), {
                  onClick: s(a).handler
                }, {
                  default: y(() => [
                    Te(Se(s(a).label ?? "Confirm"), 1)
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
}), Nr = E(!1), Vi = E(""), Ni = E(""), zi = E({
  label: void 0,
  handler: () => {
  }
}), ji = E({
  label: void 0,
  handler: () => {
  }
}), db = (e) => {
  Vi.value = e.title, Ni.value = e.description, zi.value = js(e.cancelAction), ji.value = js(e.action), cb();
}, js = (e) => typeof e == "string" ? {
  label: e,
  handler: $o
} : typeof e == "function" ? {
  label: void 0,
  handler: e
} : typeof e == "object" && e !== void 0 ? {
  label: e.label ?? void 0,
  handler: e.handler ?? $o
} : {
  label: void 0,
  handler: $o
}, $o = () => {
  Nr.value = !1;
}, cb = () => {
  Nr.value = !0;
};
function pb() {
  return {
    confirmDialog: (e) => db(e),
    title: Vi,
    description: Ni,
    isOpen: Nr,
    close: $o,
    cancelButton: zi,
    actionButton: ji
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
const fb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const mb = (e) => typeof e < "u";
function vb(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ks(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, v = He(), m = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : vb($) : $, _ = () => mb(e[t]) ? b(e[t]) : p, B = ($) => {
    f ? f($) && m(g, $) : m(g, $);
  };
  if (u) {
    const $ = _(), S = E($);
    let D = !1;
    return Y(
      () => e[t],
      (P) => {
        D || (D = !0, S.value = b(P), te(() => D = !1));
      }
    ), Y(
      S,
      (P) => {
        !D && (P !== e[t] || c) && B(P);
      },
      { deep: c }
    ), S;
  } else
    return O({
      get() {
        return _();
      },
      set($) {
        B($);
      }
    });
}
const [zr, gb] = tn("DrawerRoot"), Ki = /* @__PURE__ */ new WeakMap();
function Le(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([a, r]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, r);
      return;
    }
    o[a] = e.style[a], e.style[a] = r;
  }), !n && Ki.set(e, o);
}
function hb(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = Ki.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function _o(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[ke(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[ke(t) ? 5 : 4]) : null);
}
function yb(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function ke(e) {
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
function ba(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function bb(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ce = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Hi = 0.4, wb = 0.25, _b = 100, qi = 8, xo = 16, Wi = 26, Hs = "vaul-dragging";
function xb({
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
  const d = O(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = O(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), p = O(
    () => {
      var B;
      return ((B = t.value) == null ? void 0 : B.findIndex(($) => $ === e.value)) ?? null;
    }
  ), f = O(
    () => {
      var B;
      return ((B = t.value) == null ? void 0 : B.map(($) => {
        const S = typeof $ == "string";
        let D = 0;
        if (S && (D = Number.parseInt($, 10)), ke(l.value)) {
          const T = S ? D : i.value ? $ * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - T : -i.value.innerHeight + T : T;
        }
        const P = S ? D : i.value ? $ * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - P : -i.value.innerWidth + P : P;
      })) ?? [];
    }
  ), v = O(
    () => {
      var B;
      return p.value !== null ? (B = f.value) == null ? void 0 : B[p.value] : null;
    }
  ), m = (B) => {
    var $, S, D, P;
    const T = (($ = f.value) == null ? void 0 : $.findIndex((I) => I === B)) ?? null;
    te(() => {
      var I;
      r(T, f.value), Le((I = n.value) == null ? void 0 : I.$el, {
        transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
        transform: ke(l.value) ? `translate3d(0, ${B}px, 0)` : `translate3d(${B}px, 0, 0)`
      });
    }), f.value && T !== f.value.length - 1 && T !== (a == null ? void 0 : a.value) ? Le((S = o.value) == null ? void 0 : S.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "0"
    }) : Le((D = o.value) == null ? void 0 : D.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), e.value = T !== null ? ((P = t.value) == null ? void 0 : P[T]) ?? null : null;
  };
  Y(
    [e, f, t],
    () => {
      var B;
      if (e.value) {
        const $ = ((B = t.value) == null ? void 0 : B.findIndex((S) => S === e.value)) ?? -1;
        f.value && $ !== -1 && typeof f.value[$] == "number" && m(f.value[$]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: B,
    closeDrawer: $,
    velocity: S,
    dismissible: D
  }) {
    var P, T, I;
    if (a.value === void 0)
      return;
    const F = l.value === "bottom" || l.value === "right" ? (v.value ?? 0) - B : (v.value ?? 0) + B, A = p.value === a.value - 1, L = p.value === 0, R = B > 0;
    if (A && Le((P = o.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), S > 2 && !R) {
      D ? $() : m(f.value[0]);
      return;
    }
    if (S > 2 && R && f && t.value) {
      m(f.value[t.value.length - 1]);
      return;
    }
    const X = (T = f.value) == null ? void 0 : T.reduce((Q, q) => typeof Q != "number" || typeof q != "number" ? Q : Math.abs(q - F) < Math.abs(Q - F) ? q : Q), H = ke(l.value) ? window.innerHeight : window.innerWidth;
    if (S > Hi && Math.abs(B) < H * 0.4) {
      const Q = R ? 1 : -1;
      if (Q > 0 && d) {
        m(f.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (L && Q < 0 && D && $(), p.value === null)
        return;
      m(f.value[p.value + Q]);
      return;
    }
    m(X);
  }
  function b({ draggedDistance: B }) {
    var $;
    if (v.value === null)
      return;
    const S = l.value === "bottom" || l.value === "right" ? v.value - B : v.value + B;
    (l.value === "bottom" || l.value === "right") && S < f.value[f.value.length - 1] || (l.value === "top" || l.value === "left") && S > f.value[f.value.length - 1] || Le(($ = n.value) == null ? void 0 : $.$el, {
      transform: ke(l.value) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
    });
  }
  function _(B, $) {
    if (!t.value || typeof p.value != "number" || !f.value || a.value === void 0)
      return null;
    const S = p.value === a.value - 1;
    if (p.value >= a.value && $)
      return 0;
    if (S && !$)
      return 1;
    if (!c.value && !S)
      return null;
    const D = S ? p.value + 1 : p.value - 1, P = S ? f.value[D] - f.value[D - 1] : f.value[D + 1] - f.value[D], T = B / Math.abs(P);
    return S ? 1 - T : T;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: c,
    getPercentageDragged: _,
    activeSnapPointIndex: p,
    onRelease: g,
    onDrag: b,
    snapPointsOffset: f
  };
}
function qs() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Rn = null;
function Cb(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (qs() && Rn === null && t.value && !l.value) {
      Rn = {
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
    if (qs() && Rn !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Rn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, p);
      }), Rn = null;
    }
  }
  return le(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ue(() => {
      window.removeEventListener("scroll", p);
    });
  }), Y([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function $b(e, t) {
  return e && e.value ? e : t;
}
function Bb(e) {
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
    noBodyStyles: b,
    handleOnly: _,
    preventScrollRestoration: B
  } = e, $ = E(r.value ?? !1), S = E(!1), D = E(!1), P = E(!1), T = E(null), I = E(null), F = E(null), A = E(null), L = E(null), R = E(!1), X = E(null), H = E(0), Q = E(!1);
  E(0);
  const q = E(null);
  E(0);
  const me = O(() => {
    var Z;
    return ((Z = q.value) == null ? void 0 : Z.$el.getBoundingClientRect().height) || 0;
  }), ee = $b(
    e.snapPoints,
    E(void 0)
  ), j = O(() => {
    var Z;
    return ee && (((Z = ee.value) == null ? void 0 : Z.length) ?? 0) > 0;
  }), ae = E(null), {
    activeSnapPointIndex: oe,
    onRelease: ze,
    snapPointsOffset: qe,
    onDrag: je,
    shouldFade: Ye,
    getPercentageDragged: wt
  } = xb({
    snapPoints: ee,
    activeSnapPoint: v,
    drawerRef: q,
    fadeFromIndex: m,
    overlayRef: T,
    onSnapPointChange: xe,
    direction: g
  });
  function xe(Z, ge) {
    ee.value && Z === ge.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  Cb({
    isOpen: $,
    modal: u,
    nested: i,
    hasBeenOpened: S,
    noBodyStyles: b,
    preventScrollRestoration: B
  });
  function ve() {
    return (window.innerWidth - Wi) / window.innerWidth;
  }
  function Fe(Z, ge) {
    var be;
    if (!Z)
      return !1;
    let pe = Z;
    const Ee = (be = window.getSelection()) == null ? void 0 : be.toString(), Ie = q.value ? _o(q.value.$el, g.value) : null, We = /* @__PURE__ */ new Date();
    if (pe.hasAttribute("data-vaul-no-drag") || pe.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (I.value && We.getTime() - I.value.getTime() < 500)
      return !1;
    if (Ie !== null && (g.value === "bottom" ? Ie > 0 : Ie < 0))
      return !0;
    if (Ee && Ee.length > 0)
      return !1;
    if (L.value && We.getTime() - L.value.getTime() < p.value && Ie === 0 || ge)
      return L.value = We, !1;
    for (; pe; ) {
      if (pe.scrollHeight > pe.clientHeight) {
        if (pe.scrollTop !== 0)
          return L.value = /* @__PURE__ */ new Date(), !1;
        if (pe.getAttribute("role") === "dialog")
          return !0;
      }
      pe = pe.parentNode;
    }
    return !0;
  }
  function Oe(Z) {
    !l.value && !ee.value || q.value && !q.value.$el.contains(Z.target) || (D.value = !0, F.value = /* @__PURE__ */ new Date(), Z.target.setPointerCapture(Z.pointerId), H.value = ke(g.value) ? Z.clientY : Z.clientX);
  }
  function ye(Z) {
    var ge, be, pe, Ee, Ie, We;
    if (q.value && D.value) {
      const _t = g.value === "bottom" || g.value === "right" ? 1 : -1, on = (H.value - (ke(g.value) ? Z.clientY : Z.clientX)) * _t, Kt = on > 0, lo = ee.value && !l.value && !Kt;
      if (lo && oe.value === 0)
        return;
      const Ht = Math.abs(on), xt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ot = Ht / me.value;
      const an = wt(Ht, Kt);
      if (an !== null && (ot = an), lo && ot >= 1 || !R.value && !Fe(Z.target, Kt))
        return;
      if ((ge = q == null ? void 0 : q.value) == null || ge.$el.classList.add(Hs), R.value = !0, Le((be = q.value) == null ? void 0 : be.$el, {
        transition: "none"
      }), Le((pe = T.value) == null ? void 0 : pe.$el, {
        transition: "none"
      }), ee.value && je({ draggedDistance: on }), Kt && !ee.value) {
        const Ct = yb(on), sn = Math.min(Ct * -1, 0) * _t;
        Le((Ee = q.value) == null ? void 0 : Ee.$el, {
          transform: ke(g.value) ? `translate3d(0, ${sn}px, 0)` : `translate3d(${sn}px, 0, 0)`
        });
        return;
      }
      const rn = 1 - ot;
      if ((Ye.value || m.value && oe.value === m.value - 1) && (t(ot), Le(
        (Ie = T.value) == null ? void 0 : Ie.$el,
        {
          opacity: `${rn}`,
          transition: "none"
        },
        !0
      )), xt && T.value && d.value) {
        const Ct = Math.min(ve() + ot * (1 - ve()), 1), sn = 8 - ot * 8, io = Math.max(0, 14 - ot * 14);
        Le(
          xt,
          {
            borderRadius: `${sn}px`,
            transform: ke(g.value) ? `scale(${Ct}) translate3d(0, ${io}px, 0)` : `scale(${Ct}) translate3d(${io}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!ee.value) {
        const Ct = Ht * _t;
        Le((We = q.value) == null ? void 0 : We.$el, {
          transform: ke(g.value) ? `translate3d(0, ${Ct}px, 0)` : `translate3d(${Ct}px, 0, 0)`
        });
      }
    }
  }
  function W() {
    var Z;
    if (!q.value)
      return;
    const ge = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), be = _o(q.value.$el, g.value);
    Le(q.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), Le((Z = T.value) == null ? void 0 : Z.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), d.value && be && be > 0 && $.value && Le(
      ge,
      {
        borderRadius: `${qi}px`,
        overflow: "hidden",
        ...ke(g.value) ? {
          transform: `scale(${ve()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${ve()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
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
    q.value && (o(), Z || ($.value = !1), window.setTimeout(() => {
      ee.value && (v.value = ee.value[0]);
    }, Ce.DURATION * 1e3));
  }
  he(() => {
    if (!$.value && d.value && fb) {
      const Z = setTimeout(() => {
        hb(document.body);
      }, 200);
      return () => clearTimeout(Z);
    }
  }), Y(r, () => {
    $.value = r.value, r.value || ue();
  });
  function De(Z) {
    if (!D.value || !q.value)
      return;
    q.value.$el.classList.remove(Hs), R.value = !1, D.value = !1, A.value = /* @__PURE__ */ new Date();
    const ge = _o(q.value.$el, g.value);
    if (!Fe(Z.target, !1) || !ge || Number.isNaN(ge) || F.value === null)
      return;
    const be = A.value.getTime() - F.value.getTime(), pe = H.value - (ke(g.value) ? Z.clientY : Z.clientX), Ee = Math.abs(pe) / be;
    if (Ee > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), ee.value) {
      const We = g.value === "bottom" || g.value === "right" ? 1 : -1;
      ze({
        draggedDistance: pe * We,
        closeDrawer: ue,
        velocity: Ee,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? pe > 0 : pe < 0) {
      W(), n(!0);
      return;
    }
    if (Ee > Hi) {
      ue(), n(!1);
      return;
    }
    const Ie = Math.min(
      q.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (ge >= Ie * f.value) {
      ue(), n(!1);
      return;
    }
    n(!0), W();
  }
  Y($, (Z) => {
    Z && (I.value = /* @__PURE__ */ new Date()), a(Z);
  }, { immediate: !0 });
  function Ve(Z) {
    var ge, be;
    const pe = Z ? (window.innerWidth - xo) / window.innerWidth : 1, Ee = Z ? -16 : 0;
    X.value && window.clearTimeout(X.value), Le((ge = q.value) == null ? void 0 : ge.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: `scale(${pe}) translate3d(0, ${Ee}px, 0)`
    }), !Z && (be = q.value) != null && be.$el && (X.value = window.setTimeout(() => {
      var Ie, We;
      const _t = _o((Ie = q.value) == null ? void 0 : Ie.$el, g.value);
      Le((We = q.value) == null ? void 0 : We.$el, {
        transition: "none",
        transform: ke(g.value) ? `translate3d(0, ${_t}px, 0)` : `translate3d(${_t}px, 0, 0)`
      });
    }, 500));
  }
  function Qe(Z) {
    var ge;
    if (Z < 0)
      return;
    const be = ke(g.value) ? window.innerHeight : window.innerWidth, pe = (be - xo) / be, Ee = pe + Z * (1 - pe), Ie = -16 + Z * xo;
    Le((ge = q.value) == null ? void 0 : ge.$el, {
      transform: ke(g.value) ? `scale(${Ee}) translate3d(0, ${Ie}px, 0)` : `scale(${Ee}) translate3d(${Ie}px, 0, 0)`,
      transition: "none"
    });
  }
  function nt(Z) {
    var ge;
    const be = ke(g.value) ? window.innerHeight : window.innerWidth, pe = Z ? (be - xo) / be : 1, Ee = Z ? -16 : 0;
    Z && Le((ge = q.value) == null ? void 0 : ge.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: ke(g.value) ? `scale(${pe}) translate3d(0, ${Ee}px, 0)` : `scale(${pe}) translate3d(${Ee}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: $,
    modal: u,
    keyboardIsOpen: Q,
    hasBeenOpened: S,
    drawerRef: q,
    drawerHeightRef: me,
    overlayRef: T,
    handleRef: ae,
    isDragging: D,
    dragStartTime: F,
    isAllowedToDrag: R,
    snapPoints: ee,
    activeSnapPoint: v,
    hasSnapPoints: j,
    pointerStart: H,
    dismissible: l,
    snapPointsOffset: qe,
    direction: g,
    shouldFade: Ye,
    fadeFromIndex: m,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: Oe,
    onDrag: ye,
    onRelease: De,
    closeDrawer: ue,
    onNestedDrag: Qe,
    onNestedRelease: nt,
    onNestedOpenChange: Ve,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: a,
    nested: i,
    handleOnly: _,
    noBodyStyles: b
  };
}
const Ob = /* @__PURE__ */ w({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: wb },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: _b },
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
    ja();
    const r = O(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = Ks(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = Ks(o, "activeSnapPoint", a, {
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
    }, { closeDrawer: d, hasBeenOpened: c, modal: p, isOpen: f } = gb(
      Bb({
        ...u,
        ...fe(o),
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
    }), (m, g) => (h(), C(s(Y0), {
      open: s(f),
      modal: s(p),
      "onUpdate:open": v
    }, {
      default: y(() => [
        x(m.$slots, "default", { open: s(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Db = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = zr();
    return (r, l) => (h(), C(s(Sy), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Eb = () => () => {
};
function Sb() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = zr(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Wi) / window.innerWidth;
  }
  he((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      bb(
        o.value && !a.value ? ba(document.body, { background: "black" }) : Eb,
        ba(d, {
          transformOrigin: ke(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Ce.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
        })
      );
      const c = ba(d, {
        borderRadius: `${qi}px`,
        overflow: "hidden",
        ...ke(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        c(), r.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, Ce.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Tb = /* @__PURE__ */ w({
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
    } = zr();
    Sb();
    const b = E(!1), _ = O(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function B(D) {
      if (!d.value || D.defaultPrevented) {
        D.preventDefault();
        return;
      }
      f.value && (f.value = !1), p.value ? c(!1) : D.preventDefault();
    }
    function $(D) {
      g.value || l(D);
    }
    function S(D) {
      g.value || i(D);
    }
    return he(() => {
      a.value && window.requestAnimationFrame(() => {
        b.value = !0;
      });
    }), (D, P) => (h(), C(s(Cy), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(m),
      "data-vaul-delayed-snap-points": b.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: kt({ "--snap-point-height": _.value }),
      onPointerdown: $,
      onPointermove: S,
      onPointerup: s(u),
      onPointerDownOutside: B,
      onOpenAutoFocus: P[0] || (P[0] = Ae(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (T) => {
        s(p) || T.preventDefault();
      })
    }, {
      default: y(() => [
        x(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Yw = /* @__PURE__ */ w({
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
    const a = Jo(e, t);
    return (r, l) => (h(), C(s(Ob), k({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xw = /* @__PURE__ */ w({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Z0), k({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kb = /* @__PURE__ */ w({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Tr(t, "class");
    return (o, a) => (h(), C(s(Db), k({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(N)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Zw = /* @__PURE__ */ w({
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
    const n = e, a = Jo(n, t);
    return (r, l) => (h(), C(s(Py), null, {
      default: y(() => [
        M(kb),
        M(s(Tb), k({ "data-slot": "drawer-content" }, s(a), {
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
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Qw = /* @__PURE__ */ w({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Tr(t, "class");
    return (o, a) => (h(), C(s(By), k({ "data-slot": "drawer-description" }, s(n), {
      class: s(N)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jw = /* @__PURE__ */ w({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-footer",
      class: ne(s(N)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), e1 = /* @__PURE__ */ w({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-header",
      class: ne(s(N)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), t1 = /* @__PURE__ */ w({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Tr(t, "class");
    return (o, a) => (h(), C(s(My), k({ "data-slot": "drawer-title" }, s(n), {
      class: s(N)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n1 = /* @__PURE__ */ w({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Fy), k({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o1 = /* @__PURE__ */ w({
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
    return (r, l) => (h(), C(s(bf), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a1 = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Re(e);
    return (o, a) => (h(), C(s(wf), k({ class: "outline-none" }, s(n)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), r1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(_f), null, {
      default: y(() => [
        M(s(xf), k(s(r), {
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
}), s1 = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($f), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l1 = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(Ef), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), i1 = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(Cf), k(s(o), {
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
}), Ab = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, u1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Of), k(s(r), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", Ab, [
          M(s(Ul), null, {
            default: y(() => [
              M(s(xi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pb = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, d1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Sf), k(s(r), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", Pb, [
          M(s(Ul), null, {
            default: y(() => [
              M(s(Fg), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c1 = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
      class: ne(s(N)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), p1 = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Bf), k(n.value, {
      class: s(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), f1 = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(Df), k(s(o), {
      class: s(N)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m1 = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(Tf), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v1 = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(Af), k(s(o), {
      class: s(N)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default"),
        M(s(Mg), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(kf), k(s(r), {
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
}), h1 = /* @__PURE__ */ w({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Bi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => wn((h(), z("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => pt(a) ? a.value = i : null),
      class: ne(
        s(N)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Qs, s(a)]
    ]);
  }
}), y1 = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Pf), k(n.value, {
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
}), b1 = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(Mf), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w1 = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Rf), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Ff), null, {
      default: y(() => [
        M(s(Nf), k({ ...s(r), ...l.$attrs }, {
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
}), x1 = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(qf), k(n.value, {
      class: s(N)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        M(s(Wf), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: kt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), C1 = /* @__PURE__ */ w({
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
    return (r, l) => (h(), C(s(Qf), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $1 = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(xm), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B1 = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(tm), k(s(o), {
      class: s(N)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default"),
        M(s(Cm), { "as-child": "" }, {
          default: y(() => [
            M(s(Ig), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), O1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(nm), null, {
      default: y(() => [
        M(s(dm), k({ ...s(r), ...l.$attrs }, {
          class: s(N)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            M(s(Mb)),
            M(s(bm), {
              class: ne(
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
            M(s(Rb))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), D1 = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(hm), k({
      class: s(N)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ib = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, E1 = /* @__PURE__ */ w({
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
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(fm), k(s(o), {
      class: s(N)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        de("span", Ib, [
          M(s(mm), null, {
            default: y(() => [
              M(s(xi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        M(s(Ql), null, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S1 = /* @__PURE__ */ w({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ql), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T1 = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ym), {
      class: ne(s(N)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), k1 = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(cm), k(n.value, {
      class: s(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Mb = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(wm), k(s(o), {
      class: s(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          M(s(Rg))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rb = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(_m), k(s(o), {
      class: s(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          M(s(Ci))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A1 = /* @__PURE__ */ w({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = J(e, t);
    return (r, l) => (h(), C(s(ir), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P1 = /* @__PURE__ */ w({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ur), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I1 = /* @__PURE__ */ w({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Zt), U(G(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(dr), null, {
      default: y(() => [
        M(s(Ho), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        M(s(Ko), k({
          class: s(N)(s(Fb)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            x(l.$slots, "default"),
            M(s(Zt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                M(s(Yo), { class: "h-4 w-4" })
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
}), R1 = /* @__PURE__ */ w({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), F1 = /* @__PURE__ */ w({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(mr), k({
      class: s(N)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), L1 = /* @__PURE__ */ w({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(vr), k({
      class: s(N)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), V1 = /* @__PURE__ */ w({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Fb = ro(
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
), N1 = /* @__PURE__ */ w({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ne(s(N)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), z1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(Rm), k({
      class: s(N)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        M(s(Vm), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            M(s(Nm), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), z($e, null, Lt(l.modelValue, (u, d) => (h(), C(s(Lm), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), j1 = /* @__PURE__ */ w({
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
    const n = e, o = t, a = O(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = J(a, o);
    return (l, i) => (h(), C(s(qm), k(s(r), {
      class: s(N)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        M(s(Wm), {
          class: ne(
            s(N)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Lb = { class: "relative w-full overflow-auto" }, K1 = /* @__PURE__ */ w({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", Lb, [
      de("table", {
        class: ne(s(N)("w-full caption-bottom text-sm", t.class))
      }, [
        x(n.$slots, "default")
      ], 2)
    ]));
  }
}), H1 = /* @__PURE__ */ w({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tbody", {
      class: ne(s(N)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Vb = /* @__PURE__ */ w({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("td", {
      class: ne(
        s(N)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), q1 = /* @__PURE__ */ w({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("th", {
      class: ne(
        s(N)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), W1 = /* @__PURE__ */ w({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("thead", {
      class: ne(s(N)("[&_tr]:border-b", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), U1 = /* @__PURE__ */ w({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tfoot", {
      class: ne(s(N)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Nb = /* @__PURE__ */ w({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tr", {
      class: ne(
        s(N)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), G1 = /* @__PURE__ */ w({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("caption", {
      class: ne(s(N)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), zb = { class: "flex items-center justify-center py-10" }, Y1 = /* @__PURE__ */ w({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(Nb, null, {
      default: y(() => [
        M(Vb, k({
          class: s(N)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            de("div", zb, [
              x(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), X1 = /* @__PURE__ */ w({
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
    const a = J(e, t);
    return (r, l) => (h(), C(s(Gm), U(G(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z1 = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Xm), k({
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
}), Q1 = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Ym), k(n.value, {
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
}), jb = { class: "truncate" }, J1 = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = O(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = Re(n);
    return (a, r) => (h(), C(s(Zm), k(s(o), {
      class: s(N)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        de("span", jb, [
          x(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e_ = /* @__PURE__ */ w({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {},
    charLimit: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Bi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), r = O(() => a.value ? a.value.toString().length : 0);
    return (l, i) => (h(), z($e, null, [
      wn(de("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => pt(a) ? a.value = u : null),
        class: ne(
          s(N)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 2), [
        [Qs, s(a)]
      ]),
      l.charLimit ? (h(), z("p", {
        key: 0,
        class: ne(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": r.value > l.charLimit }])
      }, Se(r.value) + " / " + Se(l.charLimit), 3)) : ce("", !0)
    ], 64));
  }
});
export {
  iw as Accord,
  Wg as Accordion,
  Ug as AccordionContent,
  Gg as AccordionItem,
  Yg as AccordionTrigger,
  eh as AlertDialog,
  sh as AlertDialogAction,
  lh as AlertDialogCancel,
  th as AlertDialogContent,
  ah as AlertDialogDescription,
  rh as AlertDialogFooter,
  nh as AlertDialogHeader,
  oh as AlertDialogTitle,
  dw as AlertDialogTrigger,
  cw as Avatar,
  fw as AvatarFallback,
  pw as AvatarImage,
  mw as Badge,
  $i as Button,
  vw as Card,
  gw as CardContent,
  hw as CardDescription,
  yw as CardFooter,
  bw as CardHeader,
  ww as CardTitle,
  _w as Carousel,
  xw as CarouselContent,
  Cw as CarouselItem,
  Bw as CarouselNext,
  $w as CarouselPrevious,
  Sw as Checkbox,
  Tw as Collapsible,
  kw as CollapsibleContent,
  Aw as CollapsibleTrigger,
  rb as Command,
  Nw as CommandDialog,
  zw as CommandEmpty,
  jw as CommandGroup,
  Kw as CommandInput,
  Hw as CommandItem,
  qw as CommandList,
  Ww as CommandSeparator,
  Uw as CommandShortcut,
  Gw as ConfirmDialog,
  sb as Dialog,
  Pw as DialogClose,
  lb as DialogContent,
  Fw as DialogDescription,
  Vw as DialogFooter,
  Mw as DialogHeader,
  Lw as DialogScrollContent,
  Rw as DialogTitle,
  Iw as DialogTrigger,
  Yw as Drawer,
  Xw as DrawerClose,
  Zw as DrawerContent,
  Qw as DrawerDescription,
  Jw as DrawerFooter,
  e1 as DrawerHeader,
  kb as DrawerOverlay,
  t1 as DrawerTitle,
  n1 as DrawerTrigger,
  o1 as DropdownMenu,
  u1 as DropdownMenuCheckboxItem,
  r1 as DropdownMenuContent,
  s1 as DropdownMenuGroup,
  i1 as DropdownMenuItem,
  f1 as DropdownMenuLabel,
  _f as DropdownMenuPortal,
  l1 as DropdownMenuRadioGroup,
  d1 as DropdownMenuRadioItem,
  p1 as DropdownMenuSeparator,
  c1 as DropdownMenuShortcut,
  m1 as DropdownMenuSub,
  g1 as DropdownMenuSubContent,
  v1 as DropdownMenuSubTrigger,
  a1 as DropdownMenuTrigger,
  sw as Flasher,
  Jb as Header,
  lw as Heading,
  h1 as Input,
  y1 as Label,
  ew as Main,
  b1 as Popover,
  Xb as PopoverAnchor,
  _1 as PopoverContent,
  w1 as PopoverTrigger,
  x1 as Progress,
  C1 as Select,
  O1 as SelectContent,
  D1 as SelectGroup,
  E1 as SelectItem,
  S1 as SelectItemText,
  T1 as SelectLabel,
  Rb as SelectScrollDownButton,
  Mb as SelectScrollUpButton,
  k1 as SelectSeparator,
  B1 as SelectTrigger,
  $1 as SelectValue,
  A1 as Sheet,
  I1 as SheetClose,
  M1 as SheetContent,
  L1 as SheetDescription,
  V1 as SheetFooter,
  R1 as SheetHeader,
  F1 as SheetTitle,
  P1 as SheetTrigger,
  N1 as Skeleton,
  z1 as Slider,
  j1 as Switch,
  K1 as Table,
  H1 as TableBody,
  G1 as TableCaption,
  Vb as TableCell,
  Y1 as TableEmpty,
  U1 as TableFooter,
  q1 as TableHead,
  W1 as TableHeader,
  Nb as TableRow,
  X1 as Tabs,
  Z1 as TabsContent,
  Q1 as TabsList,
  J1 as TabsTrigger,
  e_ as Textarea,
  uw as Tip,
  Tg as Toast,
  rw as ToastAction,
  Vg as ToastClose,
  _s as ToastDescription,
  zg as ToastProvider,
  Ng as ToastTitle,
  kg as ToastViewport,
  Sg as Toaster,
  Xg as Tooltip,
  Zg as TooltipContent,
  Qg as TooltipProvider,
  Jg as TooltipTrigger,
  Qb as TwoColumnLayout,
  tw as TwoColumnLayoutSidebar,
  nw as TwoColumnLayoutSidebarDesktop,
  ow as TwoColumnLayoutSidebarMobile,
  aw as TwoColumnLayoutSidebarTrigger,
  ih as avatarVariant,
  uh as badgeVariants,
  Sr as buttonVariants,
  N as cn,
  qb as preset,
  Fb as sheetVariants,
  $g as toast,
  jg as toastVariants,
  Zo as useCarousel,
  pb as useConfirmDialog,
  Kg as useFlasher,
  _i as useToast,
  Zb as valueUpdater
};
