var Hr = (e) => {
  throw TypeError(e);
};
var Ni = (e, t, n) => t.has(e) || Hr("Cannot " + n);
var An = (e, t, n) => (Ni(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Wr = (e, t, n) => t.has(e) ? Hr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as xo from "vue";
import { computed as B, ref as E, shallowRef as Vn, watch as X, getCurrentScope as Ma, onScopeDispose as Fa, shallowReadonly as rn, unref as s, defineComponent as _, createBlock as C, openBlock as h, normalizeProps as G, guardReactiveProps as q, withCtx as y, renderSlot as x, toRefs as ve, createVNode as R, mergeProps as A, onMounted as le, watchEffect as me, normalizeStyle as Tt, createCommentVNode as he, getCurrentInstance as je, toRef as Ls, camelize as ko, withKeys as Ft, toHandlers as zi, resolveDynamicComponent as Qe, withModifiers as Te, nextTick as ne, withDirectives as yn, vShow as Ra, h as ze, createTextVNode as Le, watchSyncEffect as ji, toDisplayString as He, isRef as dt, onBeforeMount as Vs, onUnmounted as Ue, createElementBlock as z, Fragment as Ee, renderList as Rt, useSlots as La, Teleport as Gn, onBeforeUnmount as bn, inject as qn, provide as Yn, toHandlerKey as Ns, onBeforeUpdate as Ki, onUpdated as Hi, reactive as mn, readonly as Va, Comment as Na, cloneVNode as zs, markRaw as js, createElementVNode as de, vModelSelect as Wi, toRaw as Ui, mergeDefaults as Ks, watchPostEffect as Gi, effectScope as Ao, customRef as qi, normalizeClass as oe, isVNode as Yi, toValue as dn, vModelText as Hs } from "vue";
function Ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xi = {
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
}, Zo = Xi, za = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Zi(e) {
  return e.trim().replace(za.whitespace, " ");
}
function Qi(e) {
  return encodeURIComponent(e).replace(za.urlHexPairs, eu);
}
function Ji(e) {
  return Object.keys(Zo).forEach(function(t) {
    Zo[t].test(e) && (e = e.replace(Zo[t], t));
  }), e;
}
function eu(e) {
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
function ga(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Ji(Zi(e)).replace(za.quotes, "'");
  return "data:image/svg+xml," + Qi(t);
}
ga.toSrcset = function(t) {
  return ga(t).replace(/ /g, "%20");
};
var tu = ga, Us = {}, Gs = {};
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
})(Gs);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Gs);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(Us);
let Qo = Us;
var qs = (Qo.__esModule ? Qo : { default: Qo }).default, Ys = {}, Xs = {};
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
})(Xs);
var nu = {
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
  const t = Xs, n = /* @__PURE__ */ o(nu);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(Ys);
let Jo = Ys;
var ou = (Jo.__esModule ? Jo : { default: Jo }).default, Zs = {}, Qs = {}, ja = { exports: {} }, re = String, Js = function() {
  return { isColorSupported: !1, reset: re, bold: re, dim: re, italic: re, underline: re, inverse: re, hidden: re, strikethrough: re, black: re, red: re, green: re, yellow: re, blue: re, magenta: re, cyan: re, white: re, gray: re, bgBlack: re, bgRed: re, bgGreen: re, bgYellow: re, bgBlue: re, bgMagenta: re, bgCyan: re, bgWhite: re, blackBright: re, redBright: re, greenBright: re, yellowBright: re, blueBright: re, magentaBright: re, cyanBright: re, whiteBright: re, bgBlackBright: re, bgRedBright: re, bgGreenBright: re, bgYellowBright: re, bgBlueBright: re, bgMagentaBright: re, bgCyanBright: re, bgWhiteBright: re };
};
ja.exports = Js();
ja.exports.createColors = Js;
var au = ja.exports;
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
  const n = /* @__PURE__ */ o(au);
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
})(Qs);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Qs);
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
})(Zs);
let ea = Zs;
var ru = (ea.__esModule ? ea : { default: ea }).default;
const lo = tu, su = qs, el = ou, kt = ru, [lu, { lineHeight: iu }] = el.fontSize.base, { spacing: xt, borderWidth: Ur, borderRadius: Gr } = el;
function Ht(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const uu = su.withOptions(function(e = { strategy: void 0 }) {
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
          "border-color": Ht(
            o("colors.gray.500", kt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Ur.DEFAULT,
          "border-radius": Gr.none,
          "padding-top": xt[2],
          "padding-right": xt[3],
          "padding-bottom": xt[2],
          "padding-left": xt[3],
          "font-size": lu,
          "line-height": iu,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": Ht(
              o("colors.blue.600", kt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": Ht(
              o("colors.blue.600", kt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: Ht(o("colors.gray.500", kt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${lo(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              kt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${xt[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": xt[10],
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
          "padding-right": xt[3],
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
          height: xt[4],
          width: xt[4],
          color: Ht(o("colors.blue.600", kt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": Ht(
            o("colors.gray.500", kt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Ur.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Gr.none
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
          "--tw-ring-color": Ht(
            o("colors.blue.600", kt.blue[600]),
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
          "background-image": `url("${lo(
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
          "background-image": `url("${lo(
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
          "background-image": `url("${lo(
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
var du = uu;
const cu = /* @__PURE__ */ Ws(du), pu = qs;
function qr(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var fu = pu(
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
      { values: qr(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: qr(n("animationTimingFunction")) }
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
const mu = /* @__PURE__ */ Ws(fu), Ry = {
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
    mu,
    cu({
      strategy: "class"
    })
  ]
}, vu = ["top", "right", "bottom", "left"], Lt = Math.min, Ye = Math.max, Co = Math.round, io = Math.floor, ct = (e) => ({
  x: e,
  y: e
}), gu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, hu = {
  start: "end",
  end: "start"
};
function ha(e, t, n) {
  return Ye(e, Lt(t, n));
}
function Et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dt(e) {
  return e.split("-")[0];
}
function wn(e) {
  return e.split("-")[1];
}
function Ka(e) {
  return e === "x" ? "y" : "x";
}
function Ha(e) {
  return e === "y" ? "height" : "width";
}
function St(e) {
  return ["top", "bottom"].includes(Dt(e)) ? "y" : "x";
}
function Wa(e) {
  return Ka(St(e));
}
function yu(e, t, n) {
  n === void 0 && (n = !1);
  const o = wn(e), a = Wa(e), r = Ha(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Oo(l)), [l, Oo(l)];
}
function bu(e) {
  const t = Oo(e);
  return [ya(e), t, ya(t)];
}
function ya(e) {
  return e.replace(/start|end/g, (t) => hu[t]);
}
function wu(e, t, n) {
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
function _u(e, t, n, o) {
  const a = wn(e);
  let r = wu(Dt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(ya)))), r;
}
function Oo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gu[t]);
}
function xu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function tl(e) {
  return typeof e != "number" ? xu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $o(e) {
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
function Yr(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = St(t), l = Wa(t), i = Ha(l), u = Dt(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, f = o[i] / 2 - a[i] / 2;
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
  switch (wn(t)) {
    case "start":
      m[l] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      m[l] += f * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const Cu = async (e, t, n) => {
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
  } = Yr(d, o, u), f = o, m = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: w
    } = i[g], {
      x: $,
      y: O,
      data: D,
      reset: S
    } = await w({
      x: c,
      y: p,
      initialPlacement: o,
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
    c = $ ?? c, p = O ?? p, m = {
      ...m,
      [b]: {
        ...m[b],
        ...D
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (d = S.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : S.rects), {
      x: c,
      y: p
    } = Yr(d, f, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: f,
    strategy: a,
    middlewareData: m
  };
};
async function Nn(e, t) {
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
    padding: m = 0
  } = Et(t, e), v = tl(m), b = i[f ? p === "floating" ? "reference" : "floating" : p], w = $o(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), $ = p === "floating" ? {
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
  }, S = $o(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: $,
    offsetParent: O,
    strategy: u
  }) : $);
  return {
    top: (w.top - S.top + v.top) / D.y,
    bottom: (S.bottom - w.bottom + v.bottom) / D.y,
    left: (w.left - S.left + v.left) / D.x,
    right: (S.right - w.right + v.right) / D.x
  };
}
const Ou = (e) => ({
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
    } = Et(e, t) || {};
    if (d == null)
      return {};
    const p = tl(c), f = {
      x: n,
      y: o
    }, m = Wa(a), v = Ha(m), g = await l.getDimensions(d), b = m === "y", w = b ? "top" : "left", $ = b ? "bottom" : "right", O = b ? "clientHeight" : "clientWidth", D = r.reference[v] + r.reference[m] - f[m] - r.floating[v], S = f[m] - r.reference[m], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let T = P ? P[O] : 0;
    (!T || !await (l.isElement == null ? void 0 : l.isElement(P))) && (T = i.floating[O] || r.floating[v]);
    const I = D / 2 - S / 2, F = T / 2 - g[v] / 2 - 1, k = Lt(p[w], F), L = Lt(p[$], F), M = k, Y = T - g[v] - L, W = T / 2 - g[v] / 2 + I, Z = ha(M, W, Y), U = !u.arrow && wn(a) != null && W !== Z && r.reference[v] / 2 - (W < M ? k : L) - g[v] / 2 < 0, ye = U ? W < M ? W - M : W - Y : 0;
    return {
      [m]: f[m] + ye,
      data: {
        [m]: Z,
        centerOffset: W - Z - ye,
        ...U && {
          alignmentOffset: ye
        }
      },
      reset: U
    };
  }
}), $u = function(e) {
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
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = Et(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const w = Dt(a), $ = St(i), O = Dt(i) === i, D = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), S = f || (O || !g ? [Oo(i)] : bu(i)), P = v !== "none";
      !f && P && S.push(..._u(i, g, v, D));
      const T = [i, ...S], I = await Nn(t, b), F = [];
      let k = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && F.push(I[w]), p) {
        const Z = yu(a, l, D);
        F.push(I[Z[0]], I[Z[1]]);
      }
      if (k = [...k, {
        placement: a,
        overflows: F
      }], !F.every((Z) => Z <= 0)) {
        var L, M;
        const Z = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, U = T[Z];
        if (U) {
          var Y;
          const ae = p === "alignment" ? $ !== St(U) : !1, j = ((Y = k[0]) == null ? void 0 : Y.overflows[0]) > 0;
          if (!ae || j)
            return {
              data: {
                index: Z,
                overflows: k
              },
              reset: {
                placement: U
              }
            };
        }
        let ye = (M = k.filter((ae) => ae.overflows[0] <= 0).sort((ae, j) => ae.overflows[1] - j.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!ye)
          switch (m) {
            case "bestFit": {
              var W;
              const ae = (W = k.filter((j) => {
                if (P) {
                  const J = St(j.placement);
                  return J === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((J) => J > 0).reduce((J, te) => J + te, 0)]).sort((j, J) => j[1] - J[1])[0]) == null ? void 0 : W[0];
              ae && (ye = ae);
              break;
            }
            case "initialPlacement":
              ye = i;
              break;
          }
        if (a !== ye)
          return {
            reset: {
              placement: ye
            }
          };
      }
      return {};
    }
  };
};
function Xr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zr(e) {
  return vu.some((t) => e[t] >= 0);
}
const Su = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Et(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await Nn(t, {
            ...a,
            elementContext: "reference"
          }), l = Xr(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Zr(l)
            }
          };
        }
        case "escaped": {
          const r = await Nn(t, {
            ...a,
            altBoundary: !0
          }), l = Xr(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Zr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Bu(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Dt(n), i = wn(n), u = St(n) === "y", d = ["left", "top"].includes(l) ? -1 : 1, c = r && u ? -1 : 1, p = Et(t, e);
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
const Eu = function(e) {
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
      } = t, u = await Bu(t, e);
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
}, Du = function(e) {
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
              y: $
            } = b;
            return {
              x: w,
              y: $
            };
          }
        },
        ...u
      } = Et(e, t), d = {
        x: n,
        y: o
      }, c = await Nn(t, u), p = St(Dt(a)), f = Ka(p);
      let m = d[f], v = d[p];
      if (r) {
        const b = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", $ = m + c[b], O = m - c[w];
        m = ha($, m, O);
      }
      if (l) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", $ = v + c[b], O = v - c[w];
        v = ha($, v, O);
      }
      const g = i.fn({
        ...t,
        [f]: m,
        [p]: v
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
}, Tu = function(e) {
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
      } = Et(e, t), c = {
        x: n,
        y: o
      }, p = St(a), f = Ka(p);
      let m = c[f], v = c[p];
      const g = Et(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const O = f === "y" ? "height" : "width", D = r.reference[f] - r.floating[O] + b.mainAxis, S = r.reference[f] + r.reference[O] - b.mainAxis;
        m < D ? m = D : m > S && (m = S);
      }
      if (d) {
        var w, $;
        const O = f === "y" ? "width" : "height", D = ["top", "left"].includes(Dt(a)), S = r.reference[p] - r.floating[O] + (D && ((w = l.offset) == null ? void 0 : w[p]) || 0) + (D ? 0 : b.crossAxis), P = r.reference[p] + r.reference[O] + (D ? 0 : (($ = l.offset) == null ? void 0 : $[p]) || 0) - (D ? b.crossAxis : 0);
        v < S ? v = S : v > P && (v = P);
      }
      return {
        [f]: m,
        [p]: v
      };
    }
  };
}, ku = function(e) {
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
      } = Et(e, t), c = await Nn(t, d), p = Dt(a), f = wn(a), m = St(a) === "y", {
        width: v,
        height: g
      } = r.floating;
      let b, w;
      p === "top" || p === "bottom" ? (b = p, w = f === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = p, b = f === "end" ? "top" : "bottom");
      const $ = g - c.top - c.bottom, O = v - c.left - c.right, D = Lt(g - c[b], $), S = Lt(v - c[w], O), P = !t.middlewareData.shift;
      let T = D, I = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = O), (o = t.middlewareData.shift) != null && o.enabled.y && (T = $), P && !f) {
        const k = Ye(c.left, 0), L = Ye(c.right, 0), M = Ye(c.top, 0), Y = Ye(c.bottom, 0);
        m ? I = v - 2 * (k !== 0 || L !== 0 ? k + L : Ye(c.left, c.right)) : T = g - 2 * (M !== 0 || Y !== 0 ? M + Y : Ye(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: T
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
function Po() {
  return typeof window < "u";
}
function qt(e) {
  return Ua(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (Ua(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ua(e) {
  return Po() ? e instanceof Node || e instanceof Xe(e).Node : !1;
}
function lt(e) {
  return Po() ? e instanceof Element || e instanceof Xe(e).Element : !1;
}
function ft(e) {
  return Po() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1;
}
function Qr(e) {
  return !Po() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot;
}
function Xn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = it(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(a);
}
function Au(e) {
  return ["table", "td", "th"].includes(qt(e));
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
function Ga(e) {
  const t = qa(), n = lt(e) ? it(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Pu(e) {
  let t = Vt(e);
  for (; ft(t) && !vn(t); ) {
    if (Ga(t))
      return t;
    if (Io(t))
      return null;
    t = Vt(t);
  }
  return null;
}
function qa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vn(e) {
  return ["html", "body", "#document"].includes(qt(e));
}
function it(e) {
  return Xe(e).getComputedStyle(e);
}
function Mo(e) {
  return lt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Vt(e) {
  if (qt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qr(e) && e.host || // Fallback.
    mt(e)
  );
  return Qr(t) ? t.host : t;
}
function nl(e) {
  const t = Vt(e);
  return vn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ft(t) && Xn(t) ? t : nl(t);
}
function zn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = nl(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Xe(a);
  if (r) {
    const i = ba(l);
    return t.concat(l, l.visualViewport || [], Xn(a) ? a : [], i && n ? zn(i) : []);
  }
  return t.concat(a, zn(a, [], n));
}
function ba(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ol(e) {
  const t = it(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = ft(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Co(n) !== r || Co(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function Ya(e) {
  return lt(e) ? e : e.contextElement;
}
function cn(e) {
  const t = Ya(e);
  if (!ft(t))
    return ct(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = ol(t);
  let l = (r ? Co(n.width) : n.width) / o, i = (r ? Co(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Iu = /* @__PURE__ */ ct(0);
function al(e) {
  const t = Xe(e);
  return !qa() || !t.visualViewport ? Iu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Xe(e) ? !1 : t;
}
function Ut(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = Ya(e);
  let l = ct(1);
  t && (o ? lt(o) && (l = cn(o)) : l = cn(e));
  const i = Mu(r, n, o) ? al(r) : ct(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const f = Xe(r), m = o && lt(o) ? Xe(o) : o;
    let v = f, g = ba(v);
    for (; g && o && m !== v; ) {
      const b = cn(g), w = g.getBoundingClientRect(), $ = it(g), O = w.left + (g.clientLeft + parseFloat($.paddingLeft)) * b.x, D = w.top + (g.clientTop + parseFloat($.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, p *= b.y, u += O, d += D, v = Xe(g), g = ba(v);
    }
  }
  return $o({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function Xa(e, t) {
  const n = Mo(e).scrollLeft;
  return t ? t.left + n : Ut(mt(e)).left + n;
}
function rl(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Xa(e, o)
  )), r = o.top + t.scrollTop;
  return {
    x: a,
    y: r
  };
}
function Fu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = mt(o), i = t ? Io(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ct(1);
  const c = ct(0), p = ft(o);
  if ((p || !p && !r) && ((qt(o) !== "body" || Xn(l)) && (u = Mo(o)), ft(o))) {
    const m = Ut(o);
    d = cn(o), c.x = m.x + o.clientLeft, c.y = m.y + o.clientTop;
  }
  const f = l && !p && !r ? rl(l, u, !0) : ct(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + f.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + f.y
  };
}
function Ru(e) {
  return Array.from(e.getClientRects());
}
function Lu(e) {
  const t = mt(e), n = Mo(e), o = e.ownerDocument.body, a = Ye(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = Ye(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Xa(e);
  const i = -n.scrollTop;
  return it(o).direction === "rtl" && (l += Ye(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
function Vu(e, t) {
  const n = Xe(e), o = mt(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = qa();
    (!d || d && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function Nu(e, t) {
  const n = Ut(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = ft(e) ? cn(e) : ct(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function Jr(e, t, n) {
  let o;
  if (t === "viewport")
    o = Vu(e, n);
  else if (t === "document")
    o = Lu(mt(e));
  else if (lt(t))
    o = Nu(t, n);
  else {
    const a = al(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return $o(o);
}
function sl(e, t) {
  const n = Vt(e);
  return n === t || !lt(n) || vn(n) ? !1 : it(n).position === "fixed" || sl(n, t);
}
function zu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = zn(e, [], !1).filter((i) => lt(i) && qt(i) !== "body"), a = null;
  const r = it(e).position === "fixed";
  let l = r ? Vt(e) : e;
  for (; lt(l) && !vn(l); ) {
    const i = it(l), u = Ga(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Xn(l) && !u && sl(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = Vt(l);
  }
  return t.set(e, o), o;
}
function ju(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Io(t) ? [] : zu(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = Jr(t, c, a);
    return d.top = Ye(p.top, d.top), d.right = Lt(p.right, d.right), d.bottom = Lt(p.bottom, d.bottom), d.left = Ye(p.left, d.left), d;
  }, Jr(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Ku(e) {
  const {
    width: t,
    height: n
  } = ol(e);
  return {
    width: t,
    height: n
  };
}
function Hu(e, t, n) {
  const o = ft(t), a = mt(t), r = n === "fixed", l = Ut(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ct(0);
  function d() {
    u.x = Xa(a);
  }
  if (o || !o && !r)
    if ((qt(t) !== "body" || Xn(a)) && (i = Mo(t)), o) {
      const m = Ut(t, !0, r, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? rl(a, i) : ct(0), p = l.left + i.scrollLeft - u.x - c.x, f = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: f,
    width: l.width,
    height: l.height
  };
}
function ta(e) {
  return it(e).position === "static";
}
function es(e, t) {
  if (!ft(e) || it(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mt(e) === n && (n = n.ownerDocument.body), n;
}
function ll(e, t) {
  const n = Xe(e);
  if (Io(e))
    return n;
  if (!ft(e)) {
    let a = Vt(e);
    for (; a && !vn(a); ) {
      if (lt(a) && !ta(a))
        return a;
      a = Vt(a);
    }
    return n;
  }
  let o = es(e, t);
  for (; o && Au(o) && ta(o); )
    o = es(o, t);
  return o && vn(o) && ta(o) && !Ga(o) ? n : o || Pu(e) || n;
}
const Wu = async function(e) {
  const t = this.getOffsetParent || ll, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Hu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Uu(e) {
  return it(e).direction === "rtl";
}
const Gu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fu,
  getDocumentElement: mt,
  getClippingRect: ju,
  getOffsetParent: ll,
  getElementRects: Wu,
  getClientRects: Ru,
  getDimensions: Ku,
  getScale: cn,
  isElement: lt,
  isRTL: Uu
};
function il(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qu(e, t) {
  let n = null, o;
  const a = mt(e);
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
      height: m
    } = d;
    if (i || t(), !f || !m)
      return;
    const v = io(p), g = io(a.clientWidth - (c + f)), b = io(a.clientHeight - (p + m)), w = io(c), O = {
      rootMargin: -v + "px " + -g + "px " + -b + "px " + -w + "px",
      threshold: Ye(0, Lt(1, u)) || 1
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
      T === 1 && !il(d, e.getBoundingClientRect()) && l(), D = !1;
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
function Yu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Ya(e), c = a || r ? [...d ? zn(d) : [], ...zn(t)] : [];
  c.forEach((w) => {
    a && w.addEventListener("scroll", n, {
      passive: !0
    }), r && w.addEventListener("resize", n);
  });
  const p = d && i ? qu(d, n) : null;
  let f = -1, m = null;
  l && (m = new ResizeObserver((w) => {
    let [$] = w;
    $ && $.target === d && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var O;
      (O = m) == null || O.observe(t);
    })), n();
  }), d && !u && m.observe(d), m.observe(t));
  let v, g = u ? Ut(e) : null;
  u && b();
  function b() {
    const w = Ut(e);
    g && !il(g, w) && n(), g = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    c.forEach(($) => {
      a && $.removeEventListener("scroll", n), r && $.removeEventListener("resize", n);
    }), p == null || p(), (w = m) == null || w.disconnect(), m = null, u && cancelAnimationFrame(v);
  };
}
const Xu = Eu, Zu = Du, ts = $u, Qu = ku, Ju = Su, ed = Ou, td = Tu, nd = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: Gu,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Cu(e, t, {
    ...a,
    platform: r
  });
};
function od(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function wa(e) {
  if (od(e)) {
    const t = e.$el;
    return Ua(t) && qt(t) === "#comment" ? null : t;
  }
  return e;
}
function un(e) {
  return typeof e == "function" ? e() : s(e);
}
function ad(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = wa(un(e.element));
      return n == null ? {} : ed({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function ul(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ns(e, t) {
  const n = ul(e);
  return Math.round(t * n) / n;
}
function rd(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = B(() => {
    var T;
    return (T = un(n.open)) != null ? T : !0;
  }), r = B(() => un(n.middleware)), l = B(() => {
    var T;
    return (T = un(n.placement)) != null ? T : "bottom";
  }), i = B(() => {
    var T;
    return (T = un(n.strategy)) != null ? T : "absolute";
  }), u = B(() => {
    var T;
    return (T = un(n.transform)) != null ? T : !0;
  }), d = B(() => wa(e.value)), c = B(() => wa(t.value)), p = E(0), f = E(0), m = E(i.value), v = E(l.value), g = Vn({}), b = E(!1), w = B(() => {
    const T = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return T;
    const I = ns(c.value, p.value), F = ns(c.value, f.value);
    return u.value ? {
      ...T,
      transform: "translate(" + I + "px, " + F + "px)",
      ...ul(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: I + "px",
      top: F + "px"
    };
  });
  let $;
  function O() {
    if (d.value == null || c.value == null)
      return;
    const T = a.value;
    nd(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      p.value = I.x, f.value = I.y, m.value = I.strategy, v.value = I.placement, g.value = I.middlewareData, b.value = T !== !1;
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
    if (d.value != null && c.value != null) {
      $ = o(d.value, c.value, O);
      return;
    }
  }
  function P() {
    a.value || (b.value = !1);
  }
  return X([r, l, i, a], O, {
    flush: "sync"
  }), X([d, c], S, {
    flush: "sync"
  }), X(a, P, {
    flush: "sync"
  }), Ma() && Fa(D), {
    x: rn(p),
    y: rn(f),
    strategy: rn(m),
    placement: rn(v),
    middlewareData: rn(g),
    isPositioned: rn(b),
    floatingStyles: w,
    update: O
  };
}
function ie(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = qn(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Yn(o, a), a)];
}
function Za(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function So(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ld = function e(t, n) {
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
const Wt = /* @__PURE__ */ sd(ld);
function pn(e) {
  return e == null;
}
function id(e, t) {
  var n;
  const o = Vn();
  return me(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Va(o);
}
function Yt(e) {
  return Ma() ? (Fa(e), !0) : !1;
}
function ud() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return Yt(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function dd(e) {
  let t = !1, n;
  const o = Ao(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function dl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Ao(!0), n = o.run(() => e(...r))), Yt(a), n);
}
function Bt(e) {
  return typeof e == "function" ? e() : s(e);
}
const vt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cd = (e) => typeof e < "u", pd = (e) => e != null, fd = Object.prototype.toString, md = (e) => fd.call(e) === "[object Object]", cl = () => {
}, os = /* @__PURE__ */ vd();
function vd() {
  var e, t;
  return vt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function gd(e) {
  return je();
}
function pl(e, t = 1e4) {
  return qi((n, o) => {
    let a = Bt(e), r;
    const l = () => setTimeout(() => {
      a = Bt(e), o();
    }, Bt(t));
    return Yt(() => {
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
function hd(e, t) {
  gd() && bn(e, t);
}
function Qa(e, t, n = {}) {
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
    }, Bt(t));
  }
  return o && (a.value = !0, vt && u()), Yt(i), {
    isPending: Va(a),
    start: u,
    stop: i
  };
}
function yd(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = Qa(
    o ?? cl,
    e,
    t
  ), r = B(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function Je(e) {
  var t;
  const n = Bt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Zn = vt ? window : void 0;
function gn(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = Zn) : [t, n, o, a] = e, !t)
    return cl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), u = X(
    () => [Je(t), Bt(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const f = md(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((m) => o.map((v) => i(c, m, v, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Yt(d), d;
}
function bd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Ja(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Zn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = bd(t);
  return gn(a, r, (d) => {
    d.repeat && Bt(i) || u(d) && n(d);
  }, l);
}
function er() {
  const e = E(!1), t = je();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function wd(e) {
  const t = er();
  return B(() => (t.value, !!e()));
}
function _d(e, t, n = {}) {
  const { window: o = Zn, ...a } = n;
  let r;
  const l = wd(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = B(() => {
    const f = Bt(e), m = (Array.isArray(f) ? f : [f]).map(Je).filter(pd);
    return new Set(m);
  }), d = X(
    () => u.value,
    (f) => {
      i(), l.value && f.size && (r = new MutationObserver(t), f.forEach((m) => r.observe(m, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return Yt(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function fl(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = Zn
  } = t, r = E(!1), l = o ? 1e3 / o : null;
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
  return n && c(), Yt(p), {
    isActive: Va(r),
    pause: p,
    resume: c
  };
}
function xd(e) {
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
  } = o, m = je(), v = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (O) => i ? typeof i == "function" ? i(O) : xd(O) : O, w = () => cd(e[t]) ? b(e[t]) : p, $ = (O) => {
    f ? f(O) && v(g, O) : v(g, O);
  };
  if (u) {
    const O = w(), D = E(O);
    let S = !1;
    return X(
      () => e[t],
      (P) => {
        S || (S = !0, D.value = b(P), ne(() => S = !1));
      }
    ), X(
      D,
      (P) => {
        !S && (P !== e[t] || c) && $(P);
      },
      { deep: c }
    ), D;
  } else
    return B({
      get() {
        return w();
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
const Cd = ["INPUT", "TEXTAREA"];
function ml(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Cd.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, f, m, v, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = m || v, $ = p || f;
  if (!g && !b && (!w && !$ || a === "vertical" && $ || a === "horizontal" && w))
    return null;
  const O = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!O.length)
    return null;
  d && e.preventDefault();
  let D = null;
  return $ || w ? D = vl(O, t, {
    goForward: w ? v : u === "ltr" ? p : f,
    loop: i
  }) : g ? D = O.at(0) || null : b && (D = O.at(-1) || null), c && (D == null || D.focus()), D;
}
function vl(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? vl(
    e,
    i,
    n,
    o
  ) : i : null;
}
function na(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function _a(e, t, n = ".", o) {
  if (!na(t))
    return _a(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : na(l) && na(a[r]) ? a[r] = _a(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function Od(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => _a(n, o, ""), {})
  );
}
const $d = Od(), [Ro, Ly] = ie("ConfigProvider");
let Sd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Bd = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Sd[Math.random() * 64 | 0];
  return t;
};
const Ed = dl(() => {
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
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", os && (a == null || a()), t.value = void 0;
  };
  return X(n, (l, i) => {
    var u;
    if (!vt)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? $d({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), os && (a = gn(
      document,
      "touchmove",
      (f) => Dd(f),
      { passive: !1 }
    )), ne(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Qn(e) {
  const t = Bd(6), n = Ed();
  n.value.set(t, e ?? !1);
  const o = B({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return hd(() => {
    n.value.delete(t);
  }), o;
}
function gl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : gl(n);
  }
}
function Dd(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && gl(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Td = "data-radix-vue-collection-item";
function _n(e, t = Td) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = Je(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Ki(() => {
      a.value = [];
    }), le(r), Hi(r), X(() => o == null ? void 0 : o.value, r, { immediate: !0 }), Yn(n, a), a;
  }, injectCollection: () => qn(n, E([])) };
}
function Nt(e) {
  const t = Ro({
    dir: E("ltr")
  });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function zt(e) {
  const t = je(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[Ns(ko(a))] = (...r) => e(a, ...r);
  }), o;
}
let oa = 0;
function tr() {
  me((e) => {
    if (!vt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? as()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? as()
    ), oa++, e(() => {
      oa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), oa--;
    });
  });
}
function as() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Lo(e) {
  return B(() => {
    var t;
    return Bt(e) ? !!((t = Je(e)) != null && t.closest("form")) : !0;
  });
}
function Ie(e) {
  const t = je(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = Ls(e);
  return B(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[ko(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function ee(e, t) {
  const n = Ie(e), o = t ? zt(t) : {};
  return B(() => ({
    ...n.value,
    ...o
  }));
}
function V() {
  const e = je(), t = E(), n = B(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Je(t);
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
function kd(e, t) {
  const n = pl(!1, 300), o = E(null), a = ud();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Ad(c, d.getBoundingClientRect()), f = Pd(c, p), m = Id(u.getBoundingClientRect()), v = Fd([...f, ...m]);
    o.value = v, n.value = !0;
  }
  return me((i) => {
    if (e.value && t.value) {
      const u = (c) => l(c, t.value), d = (c) => l(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), me((i) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var p, f;
        if (!o.value)
          return;
        const m = c.target, v = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(m)) || ((f = t.value) == null ? void 0 : f.contains(m)), b = !Md(v, o.value), w = !!m.closest("[data-grace-area-trigger]");
        g ? r() : (b || w) && (r(), a.trigger());
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
function Ad(e, t) {
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
function Pd(e, t, n = 5) {
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
function Id(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Md(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Fd(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Rd(t);
}
function Rd(e) {
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
var Ld = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, sn = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), co = {}, aa = 0, hl = function(e) {
  return e && (e.host || hl(e.parentNode));
}, Vd = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = hl(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Nd = function(e, t, n, o) {
  var a = Vd(t, Array.isArray(e) ? e : [e]);
  co[n] || (co[n] = /* @__PURE__ */ new WeakMap());
  var r = co[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(o), v = m !== null && m !== "false", g = (sn.get(f) || 0) + 1, b = (r.get(f) || 0) + 1;
          sn.set(f, g), r.set(f, b), l.push(f), g === 1 && v && uo.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return c(t), i.clear(), aa++, function() {
    l.forEach(function(p) {
      var f = sn.get(p) - 1, m = r.get(p) - 1;
      sn.set(p, f), r.set(p, m), f || (uo.has(p) || p.removeAttribute(o), uo.delete(p)), m || p.removeAttribute(n);
    }), aa--, aa || (sn = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap(), co = {});
  };
}, zd = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Ld(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), Nd(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function Jn(e) {
  let t;
  X(() => Je(e), (n) => {
    n ? t = zd(n) : t && t();
  }), Ue(() => {
    t && t();
  });
}
let jd = 0;
function ke(e, t = "radix") {
  const n = Ro({ useId: void 0 });
  return xo.useId ? `${t}-${xo.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++jd}`;
}
function yl(e) {
  const t = E(), n = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return le(() => {
    const a = Je(e);
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
function Kd(e, t) {
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
const Hd = "data-item-text";
function nr(e) {
  const t = pl("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = Pe(), l = a.map((p) => {
        var f;
        return {
          ref: p,
          textValue: ((f = (p.querySelector(`[${Hd}]`) ?? p).textContent) == null ? void 0 : f.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Ud(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Wd(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Ud(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = Wd(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const or = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = Fo(n.default()), l = r.findIndex((c) => c.type !== Na);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? A(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = zs(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), K = _({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => ze(o, t) : o !== "template" ? () => ze(e.as, t, { default: n.default }) : () => ze(or, t, { default: n.default });
  }
});
function bl() {
  const e = E(), t = B(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Je(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [wl, Gd] = ie("CollapsibleRoot"), qd = /* @__PURE__ */ _({
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
}), Yd = /* @__PURE__ */ _({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    V();
    const n = wl();
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
function Xd(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? Zn, { state: d, dispatch: c } = Kd(l, {
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
    var w;
    if (vt) {
      const $ = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent($);
    }
  };
  X(
    e,
    async (b, w) => {
      var $;
      const O = w !== b;
      if (await ne(), O) {
        const D = a.value, S = po(t.value);
        b ? (c("MOUNT"), p("enter"), S === "none" && p("after-enter")) : S === "none" || (($ = o.value) == null ? void 0 : $.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : w && D !== S ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const f = (b) => {
    const w = po(t.value), $ = w.includes(
      b.animationName
    ), O = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && $ && (p(`after-${O}`), c("ANIMATION_END"), !r.value)) {
      const D = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var S;
        ((S = t.value) == null ? void 0 : S.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = D);
      });
    }
    b.target === t.value && w === "none" && c("ANIMATION_END");
  }, m = (b) => {
    b.target === t.value && (a.value = po(t.value));
  }, v = X(
    t,
    (b, w) => {
      b ? (o.value = getComputedStyle(b), b.addEventListener("animationstart", m), b.addEventListener("animationcancel", f), b.addEventListener("animationend", f)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), w == null || w.removeEventListener("animationstart", m), w == null || w.removeEventListener("animationcancel", f), w == null || w.removeEventListener("animationend", f));
    },
    { immediate: !0 }
  ), g = X(d, () => {
    const b = po(t.value);
    a.value = d.value === "mounted" ? b : "none";
  });
  return Ue(() => {
    v(), g();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function po(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const et = _({
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
    const { present: a, forceMount: r } = ve(e), l = E(), { isPresent: i } = Xd(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = Fo(u || []);
    const d = je();
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
    return () => r.value || a.value || i.value ? ze(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Je(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), Zd = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = wl();
    n.contentId || (n.contentId = ke(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = V(), l = E(0), i = E(0), u = B(() => n.open.value), d = E(u.value), c = E();
    return X(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await ne();
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
    }), (p, f) => (h(), C(s(et), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var m, v;
        return [
          R(s(K), A(p.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
            "data-state": s(n).open.value ? "open" : "closed",
            "data-disabled": (m = s(n).disabled) != null && m.value ? "" : void 0,
            hidden: !((v = o.value) != null && v.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: y(() => {
              var g;
              return [
                (g = o.value) != null && g.present ? x(p.$slots, "default", { key: 0 }) : he("", !0)
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
function _l({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (pn(e) && pn(n) && pn(t))
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
function Qd({ type: e, defaultValue: t, modelValue: n }) {
  return e || _l({ type: e, defaultValue: t, modelValue: n });
}
function Jd({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function ec(e, t) {
  const n = E(Qd(e)), o = _e(e, "modelValue", t, {
    defaultValue: Jd(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  X(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = _l(e);
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
const [Vo, tc] = ie("AccordionRoot"), nc = /* @__PURE__ */ _({
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
    const n = e, o = t, { dir: a, disabled: r } = ve(n), l = Nt(a), { modelValue: i, changeModelValue: u, isSingle: d } = ec(n, o), { forwardRef: c, currentElement: p } = V();
    return tc({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, m) => (h(), C(s(K), {
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
}), [ar, oc] = ie("AccordionItem"), ac = /* @__PURE__ */ _({
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
    oc({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: B(() => n.value)
    });
    function c(p) {
      var f;
      const m = p.target;
      if (Array.from(((f = o.parentElement.value) == null ? void 0 : f.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === m) === -1)
        return null;
      ml(
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
    return (p, f) => (h(), C(s(qd), {
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
}), rc = /* @__PURE__ */ _({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Vo(), o = ar();
    return V(), (a, r) => (h(), C(s(Zd), {
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
}), sc = /* @__PURE__ */ _({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = Vo(), o = ar();
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
}), lc = /* @__PURE__ */ _({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Vo(), o = ar();
    o.triggerId || (o.triggerId = ke(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), C(s(Yd), {
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
}), [gt, ic] = ie("DialogRoot"), rr = /* @__PURE__ */ _({
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
    }), a = E(), r = E(), { modal: l } = ve(n);
    return ic({
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
}), sr = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = gt(), { forwardRef: o, currentElement: a } = V();
    return n.contentId || (n.contentId = ke(void 0, "radix-vue-dialog-content")), le(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(K), A(t, {
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
}), xn = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = er();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Gn, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled"])) : he("", !0);
  }
}), lr = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(xn), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uc = "dismissableLayer.pointerDownOutside", dc = "dismissableLayer.focusOutside";
function xl(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function cc(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return me((l) => {
    if (!vt)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (xl(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            Za(
              uc,
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
function pc(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return me((r) => {
    if (!vt)
      return;
    const l = async (i) => {
      t != null && t.value && (await ne(), !(!t.value || xl(t.value, i.target)) && i.target && !a.value && Za(
        dc,
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
const at = mn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Cn = /* @__PURE__ */ _({
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
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => at.layersRoot), u = B(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = B(() => at.layersWithOutsidePointerEventsDisabled.size > 0), c = B(() => {
      const v = Array.from(i.value), [g] = [...at.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), p = cc(async (v) => {
      const g = [...at.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await ne(), v.defaultPrevented || o("dismiss"));
    }, r), f = pc((v) => {
      [...at.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, r);
    Ja("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let m;
    return me((v) => {
      r.value && (n.disableOutsidePointerEvents && (at.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), at.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && at.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), me((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), at.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (h(), C(s(K), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Tt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), fc = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = V();
    return le(() => {
      at.branches.add(o.value);
    }), Ue(() => {
      at.branches.delete(o.value);
    }), (a, r) => (h(), C(s(K), A({ ref: s(n) }, t), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ra = "focusScope.autoFocusOnMount", sa = "focusScope.autoFocusOnUnmount", rs = { bubbles: !1, cancelable: !0 };
function _o(e, { select: t = !1 } = {}) {
  const n = Pe();
  for (const o of e)
    if (It(o, { select: t }), Pe() !== n)
      return !0;
}
function mc(e) {
  const t = ir(e), n = ss(t, e), o = ss(t.reverse(), e);
  return [n, o];
}
function ir(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ss(e, t) {
  for (const n of e)
    if (!vc(n, { upTo: t }))
      return n;
}
function vc(e, { upTo: t }) {
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
function gc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function It(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Pe();
    e.focus({ preventScroll: !0 }), e !== n && gc(e) && t && e.select();
  }
}
const hc = dd(() => E([]));
function yc() {
  const e = hc();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = ls(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = ls(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function ls(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function bc(e) {
  return e.filter((t) => t.tagName !== "A");
}
const No = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = V(), l = E(null), i = yc(), u = mn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    me((c) => {
      if (!vt)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function f(b) {
        if (u.paused || !p)
          return;
        const w = b.target;
        p.contains(w) ? l.value = w : It(l.value, { select: !0 });
      }
      function m(b) {
        if (u.paused || !p)
          return;
        const w = b.relatedTarget;
        w !== null && (p.contains(w) || It(l.value, { select: !0 }));
      }
      function v(b) {
        p.contains(l.value) || It(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), me(async (c) => {
      const p = r.value;
      if (await ne(), !p)
        return;
      i.add(u);
      const f = Pe();
      if (!p.contains(f)) {
        const m = new CustomEvent(ra, rs);
        p.addEventListener(ra, (v) => o("mountAutoFocus", v)), p.dispatchEvent(m), m.defaultPrevented || (_o(bc(ir(p)), {
          select: !0
        }), Pe() === f && It(p));
      }
      c(() => {
        p.removeEventListener(ra, (g) => o("mountAutoFocus", g));
        const m = new CustomEvent(sa, rs), v = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(sa, v), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || It(f ?? document.body, { select: !0 }), p.removeEventListener(sa, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = Pe();
      if (p && f) {
        const m = c.currentTarget, [v, g] = mc(m);
        v && g ? !c.shiftKey && f === g ? (c.preventDefault(), n.loop && It(v, { select: !0 })) : c.shiftKey && f === v && (c.preventDefault(), n.loop && It(g, { select: !0 })) : f === m && c.preventDefault();
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
}), wc = "menu.itemSelect", xa = ["Enter", " "], _c = ["ArrowDown", "PageUp", "Home"], Cl = ["ArrowUp", "PageDown", "End"], xc = [..._c, ...Cl], Cc = {
  ltr: [...xa, "ArrowRight"],
  rtl: [...xa, "ArrowLeft"]
}, Oc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function ur(e) {
  return e ? "open" : "closed";
}
function Bo(e) {
  return e === "indeterminate";
}
function dr(e) {
  return Bo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ca(e) {
  const t = Pe();
  for (const n of e)
    if (n === t || (n.focus(), Pe() !== t))
      return;
}
function $c(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Sc(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return $c(n, t);
}
function jn(e) {
  return e.pointerType === "mouse";
}
const Bc = "DialogTitle", Ec = "DialogContent";
function Dc({
  titleName: e = Bc,
  contentName: t = Ec,
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
const Ol = /* @__PURE__ */ _({
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
    const n = e, o = t, a = gt(), { forwardRef: r, currentElement: l } = V();
    return a.titleId || (a.titleId = ke(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = ke(void 0, "radix-vue-dialog-description")), le(() => {
      a.contentElement = l, Pe() !== document.body && (a.triggerElement.value = Pe());
    }), process.env.NODE_ENV !== "production" && Dc({
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
        R(s(Cn), A({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(ur)(s(a).open.value)
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
}), Tc = /* @__PURE__ */ _({
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
    const n = e, o = t, a = gt(), r = zt(o), { forwardRef: l, currentElement: i } = V();
    return Jn(i), (u, d) => (h(), C(Ol, A({ ...n, ...s(r) }, {
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
}), kc = /* @__PURE__ */ _({
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
    const a = gt(), r = E(!1), l = E(!1);
    return (i, u) => (h(), C(Ol, A({ ...n, ...s(o) }, {
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
}), zo = /* @__PURE__ */ _({
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
    const n = e, o = t, a = gt(), r = zt(o), { forwardRef: l } = V();
    return (i, u) => (h(), C(s(et), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Tc, A({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(kc, A({
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
}), Ac = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt();
    return Qn(!0), V(), (n, o) => (h(), C(s(K), {
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
}), jo = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = gt(), { forwardRef: n } = V();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(et), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          R(Ac, A(o.$attrs, {
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
      }, 8, ["present"])) : he("", !0);
    };
  }
}), Xt = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    V();
    const n = gt();
    return (o, a) => (h(), C(s(K), A(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), cr = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = gt();
    return V(), (o, a) => (h(), C(s(K), A(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), pr = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    V();
    const n = gt();
    return (o, a) => (h(), C(s(K), A(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Pc = /* @__PURE__ */ _({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = ee(e, t);
    return V(), (o, a) => (h(), C(s(rr), A(s(n), { modal: !0 }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ic = /* @__PURE__ */ _({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(sr), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mc = /* @__PURE__ */ _({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(xn), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fc, Rc] = ie("AlertDialogContent"), Lc = /* @__PURE__ */ _({
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
    return Rc({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(zo), A({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Te(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Te(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        ne(() => {
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
}), Vc = /* @__PURE__ */ _({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(jo), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nc = /* @__PURE__ */ _({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Fc(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(Xt), A(t, { ref: s(o) }), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zc = /* @__PURE__ */ _({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(cr), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jc = /* @__PURE__ */ _({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(pr), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kc = /* @__PURE__ */ _({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Xt), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$l, Hc] = ie("AvatarRoot"), Wc = /* @__PURE__ */ _({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return V(), Hc({
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
function Uc(e, t) {
  const n = E("idle"), o = E(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return le(() => {
    o.value = !0, X([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
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
const Gc = /* @__PURE__ */ _({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a, referrerPolicy: r } = ve(n);
    V();
    const l = $l(), i = Uc(a, r);
    return X(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => yn((h(), C(s(K), {
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
      [Ra, s(i) === "loaded"]
    ]);
  }
}), qc = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = $l();
    V();
    const o = E(!1);
    let a;
    return X(n.imageLoadingStatus, (r) => {
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
    }, 8, ["as-child", "as"])) : he("", !0);
  }
}), [Sl, Yc] = ie("PopperRoot"), On = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Yc({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => x(n.$slots, "default");
  }
}), eo = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = V(), a = Sl();
    return me(() => {
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
function Xc(e) {
  return e !== null;
}
function Zc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, f] = Oa(r), m = { start: "0%", center: "50%", end: "100%" }[f], v = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let b = "", w = "";
      return p === "bottom" ? (b = u ? m : `${v}px`, w = `${-c}px`) : p === "top" ? (b = u ? m : `${v}px`, w = `${l.floating.height + c}px`) : p === "right" ? (b = `${-c}px`, w = u ? m : `${g}px`) : p === "left" && (b = `${l.floating.width + c}px`, w = u ? m : `${g}px`), { data: { x: b, y: w } };
    }
  };
}
function Oa(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Bl = {
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
}, [Vy, Qc] = ie("PopperContent"), hn = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ks({
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
    ...Bl
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Sl(), { forwardRef: r, currentElement: l } = V(), i = E(), u = E(), { width: d, height: c } = yl(u), p = B(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = B(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = B(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = B(() => ({
      padding: f.value,
      boundary: m.value.filter(Xc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = id(() => [
      Xu({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && ts({
        ...v.value
      }),
      n.avoidCollisions && Zu({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? td() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && ts({
        ...v.value
      }),
      Qu({
        ...v.value,
        apply: ({ elements: k, rects: L, availableWidth: M, availableHeight: Y }) => {
          const { width: W, height: Z } = L.reference, U = k.floating.style;
          U.setProperty(
            "--radix-popper-available-width",
            `${M}px`
          ), U.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), U.setProperty(
            "--radix-popper-anchor-width",
            `${W}px`
          ), U.setProperty(
            "--radix-popper-anchor-height",
            `${Z}px`
          );
        }
      }),
      u.value && ad({ element: u.value, padding: n.arrowPadding }),
      Zc({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Ju({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: w, isPositioned: $, middlewareData: O } = rd(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...k) => Yu(...k, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), D = B(
      () => Oa(w.value)[0]
    ), S = B(
      () => Oa(w.value)[1]
    );
    Gi(() => {
      $.value && o("placed");
    });
    const P = B(
      () => {
        var k;
        return ((k = O.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), T = E("");
    me(() => {
      l.value && (T.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = B(() => {
      var k;
      return ((k = O.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), F = B(() => {
      var k;
      return ((k = O.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return Qc({
      placedSide: D,
      onArrowChange: (k) => u.value = k,
      arrowX: I,
      arrowY: F,
      shouldHideArrow: P
    }), (k, L) => {
      var M, Y, W;
      return h(), z("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Tt({
          ...s(b),
          transform: s($) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T.value,
          "--radix-popper-transform-origin": [
            (M = s(O).transformOrigin) == null ? void 0 : M.x,
            (Y = s(O).transformOrigin) == null ? void 0 : Y.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((W = s(O).hide) == null ? void 0 : W.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        R(s(K), A({ ref: s(r) }, k.$attrs, {
          "as-child": n.asChild,
          as: k.as,
          "data-side": D.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s($) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            x(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), to = /* @__PURE__ */ _({
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
}), Jc = /* @__PURE__ */ _({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), z(Ee, null, Rt(n.value, (r) => (h(), C(to, {
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
}), ep = "data-radix-vue-collection-item", [fr, tp] = ie("CollectionProvider");
function mr(e = ep) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = tp({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = gr(o), r = B(() => Array.from(o.itemMap.value.values())), l = B(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const vr = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = fr(), { primitiveElement: o, currentElement: a } = bl();
    return X(a, () => {
      n.collectionRef.value = a.value;
    }), () => ze(or, { ref: o }, t);
  }
}), Ko = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = fr(), { primitiveElement: a, currentElement: r } = bl();
    return me((l) => {
      if (r.value) {
        const i = js(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => ze(or, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function gr(e) {
  const t = e ?? fr();
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
const [$n, np] = ie("ComboboxRoot"), op = /* @__PURE__ */ _({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = ve(n), i = Nt(l), u = _e(n, "searchTerm", o, {
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
      var J, te;
      c.value = j, await ne(), j ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (J = O().find((Ve) => {
        var Ke, Ne;
        return ((Ne = (Ke = Ve.ref) == null ? void 0 : Ke.dataset) == null ? void 0 : Ne.state) === "checked";
      })) == null ? void 0 : J.value : p.value = d.value), await ne(), (te = g.value) == null || te.focus(), Y()) : (v.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function m(j) {
      if (Array.isArray(d.value) && a.value) {
        const J = d.value.findIndex((Ve) => Wt(Ve, j)), te = [...d.value];
        J === -1 ? te.push(j) : te.splice(J, 1), d.value = te;
      } else
        d.value = j, f(!1);
    }
    const v = E(!1), g = E(), b = E(), { forwardRef: w, currentElement: $ } = V(), { getItems: O, reactiveItems: D, itemMapSize: S } = mr("data-radix-vue-combobox-item"), P = E([]);
    X(() => S.value, () => {
      P.value = O().map((j) => j.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const T = B(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const j = P.value.filter((J) => typeof J == "string");
        if (j.length)
          return j.filter((J) => {
            var te;
            return J.toLowerCase().includes((te = u.value) == null ? void 0 : te.toLowerCase());
          });
      }
      return P.value;
    });
    function I(j) {
      const J = j === "blur" || j === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : J && (u.value = "") : J && (u.value = "");
    }
    const F = B(() => T.value.findIndex((j) => Wt(j, p.value))), k = B(() => {
      var j;
      return (j = D.value.find((J) => Wt(J.value, p.value))) == null ? void 0 : j.ref;
    }), L = B(() => JSON.stringify(d.value));
    X(L, async () => {
      await ne(), await ne(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), X(() => [T.value.length, u.value.length], async ([j, J], [te, Ve]) => {
      await ne(), await ne(), j && (Ve > J || F.value === -1) && (p.value = T.value[0]);
    });
    const M = Lo($);
    function Y() {
      var j;
      k.value instanceof Element && ((j = k.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function W() {
      k.value instanceof Element && k.value.focus && k.value.focus();
    }
    const Z = E(!1);
    function U() {
      Z.value = !0;
    }
    function ye() {
      requestAnimationFrame(() => {
        Z.value = !1;
      });
    }
    async function ae(j) {
      var J;
      T.value.length && p.value && k.value instanceof Element && (j.preventDefault(), j.stopPropagation(), Z.value || (J = k.value) == null || J.click());
    }
    return np({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: v,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: f,
      filteredOptions: T,
      contentId: "",
      inputElement: g,
      selectedElement: k,
      onInputElementChange: (j) => g.value = j,
      onInputNavigation: async (j) => {
        const J = F.value;
        J === 0 && j === "up" || J === T.value.length - 1 && j === "down" || (J === -1 && T.value.length || j === "home" ? p.value = T.value[0] : j === "end" ? p.value = T.value[T.value.length - 1] : p.value = T.value[j === "up" ? J - 1 : J + 1], await ne(), Y(), W(), ne(() => {
          var te;
          return (te = g.value) == null ? void 0 : te.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ae,
      onCompositionEnd: ye,
      onCompositionStart: U,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: $,
      contentElement: b,
      onContentElementChange: (j) => b.value = j
    }), (j, J) => (h(), C(s(On), null, {
      default: y(() => [
        R(s(K), A({
          ref: s(w),
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
            s(M) && n.name ? (h(), C(s(Jc), {
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
}), ap = /* @__PURE__ */ _({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = $n(), { forwardRef: o, currentElement: a } = V();
    le(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = B(() => t.disabled || n.disabled.value || !1), l = E();
    ji(() => {
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
        Ft(Te(i, ["prevent"]), ["down", "up"]),
        Ft(s(n).onInputEnter, ["enter"]),
        Ft(Te(u, ["prevent"]), ["home", "end"])
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
}), [El, rp] = ie("ComboboxGroup"), sp = /* @__PURE__ */ _({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = V(), a = ke(void 0, "radix-vue-combobox-group"), r = $n(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return _d(o, () => {
      ne(() => {
        i();
      });
    }, { childList: !0 }), X(() => r.searchTerm.value, () => {
      ne(() => {
        i();
      });
    }, { immediate: !0 }), rp({
      id: a
    }), (u, d) => yn((h(), C(s(K), A(t, {
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
      [Ra, l.value]
    ]);
  }
}), lp = /* @__PURE__ */ _({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    V();
    const n = El({ id: "" });
    return (o, a) => (h(), C(s(K), A(t, {
      id: s(n).id
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Ny, ip] = ie("ComboboxContent"), up = /* @__PURE__ */ _({
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
    const n = e, o = t, { position: a } = ve(n), r = $n();
    Qn(n.bodyLock);
    const { forwardRef: l, currentElement: i } = V();
    Jn(r.parentElement);
    const u = B(() => n.position === "popper" ? n : {}), d = Ie(u.value);
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
    return ip({ position: a }), (f, m) => (h(), C(s(vr), null, {
      default: y(() => [
        f.dismissable ? (h(), C(s(Cn), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (v) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (v) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), o("focusOutside", v);
          }),
          onInteractOutside: m[2] || (m[2] = (v) => o("interactOutside", v)),
          onEscapeKeyDown: m[3] || (m[3] = (v) => o("escapeKeyDown", v)),
          onPointerDownOutside: m[4] || (m[4] = (v) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(v.target) && v.preventDefault(), o("pointerDownOutside", v);
          })
        }, {
          default: y(() => [
            (h(), C(Qe(s(a) === "popper" ? s(hn) : s(K)), A({ ...f.$attrs, ...s(d) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (h(), C(Qe(s(a) === "popper" ? s(hn) : s(K)), A({ key: 1 }, { ...f.$attrs, ...u.value }, {
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
}), dp = /* @__PURE__ */ _({
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
    const n = ee(e, t), { forwardRef: o } = V(), a = $n();
    return a.contentId || (a.contentId = ke(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(et), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        R(up, A({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), cp = /* @__PURE__ */ _({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    V();
    const n = $n(), o = B(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), C(s(K), G(A({ key: 0 }, t)), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          Le("No options")
        ])
      ]),
      _: 3
    }, 16)) : he("", !0);
  }
});
function pp(e) {
  const t = Ro({
    nonce: E()
  });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [zy, fp] = ie("ComboboxItem"), mp = "combobox.select", vp = /* @__PURE__ */ _({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = ve(n), r = $n();
    El({ id: "", options: E([]) });
    const { forwardRef: l } = V(), i = B(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((w) => Wt(w, n.value)) : Wt((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = B(() => Wt(r.selectedValue.value, n.value)), d = ke(void 0, "radix-vue-combobox-item"), c = ke(void 0, "radix-vue-combobox-option"), p = B(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => Wt(g, n.value)) : !0);
    async function f(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function m(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      Za(mp, f, b);
    }
    async function v(g) {
      await ne(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return fp({
      isSelected: i
    }), (g, b) => (h(), C(s(Ko), { value: g.value }, {
      default: y(() => [
        yn(R(s(K), {
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
            x(g.$slots, "default", {}, () => [
              Le(He(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Ra, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), gp = /* @__PURE__ */ _({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), A(t, { "aria-hidden": "true" }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dl = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(eo), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function hp() {
  const e = E(!1);
  return le(() => {
    gn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), gn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const yp = dl(hp), [Zt, Tl] = ie(["MenuRoot", "MenuSub"], "MenuContext"), [no, bp] = ie("MenuRoot"), wp = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = ve(n), l = Nt(r), i = _e(n, "open", o), u = E(), d = yp();
    return Tl({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), bp({
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
}), _p = "rovingFocusGroup.onEntryFocus", xp = { bubbles: !1, cancelable: !0 }, Cp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Op(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $p(e, t, n) {
  const o = Op(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Cp[o];
}
function kl(e, t = !1) {
  const n = Pe();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Pe() !== n))
      return;
}
function Sp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Bp, Ep] = ie("RovingFocusGroup"), Al = /* @__PURE__ */ _({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = ve(o), u = Nt(i), d = _e(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), f = E(0), { getItems: m } = mr();
    function v(b) {
      const w = !p.value;
      if (b.currentTarget && b.target === b.currentTarget && w && !c.value) {
        const $ = new CustomEvent(_p, xp);
        if (b.currentTarget.dispatchEvent($), a("entryFocus", $), !$.defaultPrevented) {
          const O = m().map((T) => T.ref).filter((T) => T.dataset.disabled !== ""), D = O.find((T) => T.getAttribute("data-active") === "true"), S = O.find(
            (T) => T.id === d.value
          ), P = [D, S, ...O].filter(
            Boolean
          );
          kl(P, o.preventScrollOnEntryFocus);
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
    }), Ep({
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
    }), (b, w) => (h(), C(s(vr), null, {
      default: y(() => [
        R(s(K), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = ($) => p.value = !0),
          onMouseup: g,
          onFocus: v,
          onBlur: w[1] || (w[1] = ($) => c.value = !1)
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
}), Dp = /* @__PURE__ */ _({
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
    const t = e, n = Bp(), o = B(() => t.tabStopId || ke()), a = B(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = gr();
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
      const u = $p(
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
          d = n.loop.value ? Sp(d, c + 1) : d.slice(c + 1);
        }
        ne(() => kl(d));
      }
    }
    return (i, u) => (h(), C(s(Ko), null, {
      default: y(() => [
        R(s(K), {
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
}), [hr, Tp] = ie("MenuContent"), yr = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ks({
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
    ...Bl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Zt(), r = no(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = ve(n);
    tr(), Qn(i.value);
    const d = E(""), c = E(0), p = E(0), f = E(null), m = E("right"), v = E(0), g = E(null), { createCollection: b } = _n(), { forwardRef: w, currentElement: $ } = V(), O = b($);
    X($, (k) => {
      a.onContentChange(k);
    });
    const { handleTypeaheadSearch: D } = nr(O);
    Ue(() => {
      window.clearTimeout(c.value);
    });
    function S(k) {
      var L, M;
      return m.value === ((L = f.value) == null ? void 0 : L.side) && Sc(k, (M = f.value) == null ? void 0 : M.area);
    }
    async function P(k) {
      var L;
      o("openAutoFocus", k), !k.defaultPrevented && (k.preventDefault(), (L = $.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function T(k) {
      if (k.defaultPrevented)
        return;
      const L = k.target.closest("[data-radix-menu-content]") === k.currentTarget, M = k.ctrlKey || k.altKey || k.metaKey, Y = k.key.length === 1, W = ml(
        k,
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
      if (W)
        return W == null ? void 0 : W.focus();
      if (k.code === "Space" || (L && (k.key === "Tab" && k.preventDefault(), !M && Y && D(k.key)), k.target !== $.value) || !xc.includes(k.key))
        return;
      k.preventDefault();
      const Z = O.value;
      Cl.includes(k.key) && Z.reverse(), Ca(Z);
    }
    function I(k) {
      var L, M;
      (M = (L = k == null ? void 0 : k.currentTarget) == null ? void 0 : L.contains) != null && M.call(L, k.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(k) {
      var L;
      if (!jn(k))
        return;
      const M = k.target, Y = v.value !== k.clientX;
      if ((L = k == null ? void 0 : k.currentTarget) != null && L.contains(M) && Y) {
        const W = k.clientX > v.value ? "right" : "left";
        m.value = W, v.value = k.clientX;
      }
    }
    return Tp({
      onItemEnter: (k) => !!S(k),
      onItemLeave: (k) => {
        var L;
        S(k) || ((L = $.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (k) => !!S(k),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (k) => {
        f.value = k;
      }
    }), (k, L) => (h(), C(s(No), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: L[7] || (L[7] = (M) => o("closeAutoFocus", M))
    }, {
      default: y(() => [
        R(s(Cn), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (M) => o("escapeKeyDown", M)),
          onPointerDownOutside: L[3] || (L[3] = (M) => o("pointerDownOutside", M)),
          onFocusOutside: L[4] || (L[4] = (M) => o("focusOutside", M)),
          onInteractOutside: L[5] || (L[5] = (M) => o("interactOutside", M)),
          onDismiss: L[6] || (L[6] = (M) => o("dismiss"))
        }, {
          default: y(() => [
            R(s(Al), {
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
                R(s(hn), {
                  ref: s(w),
                  role: "menu",
                  as: k.as,
                  "as-child": k.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(ur)(s(a).open.value),
                  dir: s(r).dir.value,
                  side: k.side,
                  "side-offset": k.sideOffset,
                  align: k.align,
                  "align-offset": k.alignOffset,
                  "avoid-collisions": k.avoidCollisions,
                  "collision-boundary": k.collisionBoundary,
                  "collision-padding": k.collisionPadding,
                  "arrow-padding": k.arrowPadding,
                  "prioritize-position": k.prioritizePosition,
                  sticky: k.sticky,
                  "hide-when-detached": k.hideWhenDetached,
                  onKeydown: T,
                  onBlur: I,
                  onPointermove: F
                }, {
                  default: y(() => [
                    x(k.$slots, "default")
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
}), Pl = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = hr(), { forwardRef: o } = V(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && jn(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ne(), !i.defaultPrevented && jn(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), C(s(Ko), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        R(s(K), A({
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
            await ne(), !(d.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await ne(), !d.defaultPrevented && (a.value = !1);
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
}), br = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = V(), l = no(), i = hr(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(wc, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await ne(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), C(Pl, A(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var m;
        await ne(), !f.defaultPrevented && (u.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const m = s(i).searchRef.value !== "";
        c.disabled || m && f.key === " " || s(xa).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kp, Il] = ie(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Ap = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = kp({
      checked: E(!1)
    });
    return (n, o) => (h(), C(s(et), {
      present: n.forceMount || s(Bo)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        R(s(K), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(dr)(s(t).checked.value)
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
}), Pp = /* @__PURE__ */ _({
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
    return Il({ checked: a }), (r, l) => (h(), C(br, A({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Bo)(s(a)) ? "mixed" : s(a),
      "data-state": s(dr)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Bo)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        x(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Ip = /* @__PURE__ */ _({
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
    const n = e, o = t, a = ee(n, o), r = Zt(), { forwardRef: l, currentElement: i } = V();
    return Jn(i), (u, d) => (h(), C(yr, A(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Te((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Mp = /* @__PURE__ */ _({
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
    const n = ee(e, t), o = Zt();
    return (a, r) => (h(), C(yr, A(s(n), {
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
}), Fp = /* @__PURE__ */ _({
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
    const n = ee(e, t), o = Zt(), a = no();
    return (r, l) => (h(), C(s(et), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Ip, G(A({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Mp, G(A({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ml = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), A({ role: "group" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(xn), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Vp, Np] = ie("MenuRadioGroup"), zp = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = _e(n, "modelValue", t);
    return Np({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), C(Ml, G(q(n)), {
      default: y(() => [
        x(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), jp = /* @__PURE__ */ _({
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
    const n = e, o = t, { value: a } = ve(n), r = Vp(), l = B(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return Il({ checked: l }), (i, u) => (h(), C(br, A({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(dr)(l.value),
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
}), Kp = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), A(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fl, Hp] = ie("MenuSub"), Wp = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = _e(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = Zt(), r = E(), l = E();
    return me((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), Tl({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Hp({
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
}), Up = /* @__PURE__ */ _({
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
    const n = ee(e, t), o = Zt(), a = no(), r = Fl(), { forwardRef: l, currentElement: i } = V();
    return r.contentId || (r.contentId = ke(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(et), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        R(yr, A(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Te((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Te(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, f;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), v = s(Oc)[s(a).dir.value].includes(c.key);
            m && v && (s(o).onOpenChange(!1), (f = s(r).trigger.value) == null || f.focus(), c.preventDefault());
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
}), Gp = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Zt(), o = no(), a = Fl(), r = hr(), l = E(null);
    a.triggerId || (a.triggerId = ke(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ue(() => {
      i();
    });
    function u(p) {
      !jn(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var f, m;
      if (!jn(p))
        return;
      i();
      const v = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (m = n.content.value) == null ? void 0 : m.dataset.side, b = g === "right", w = b ? -5 : 5, $ = v[b ? "left" : "right"], O = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + w, y: p.clientY },
            { x: $, y: v.top },
            { x: O, y: v.top },
            { x: O, y: v.bottom },
            { x: $, y: v.bottom }
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
      t.disabled || m && p.key === " " || Cc[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await ne(), (f = n.content.value) == null || f.focus(), p.preventDefault());
    }
    return (p, f) => (h(), C(Dl, { "as-child": "" }, {
      default: y(() => [
        R(Pl, A(t, {
          id: s(a).triggerId,
          ref: (m) => {
            var v;
            (v = s(a)) == null || v.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(ur)(s(n).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
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
}), [Rl, qp] = ie("DropdownMenuRoot"), Yp = /* @__PURE__ */ _({
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
    }), r = E(), { modal: l, dir: i } = ve(n), u = Nt(i);
    return qp({
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
    }), (d, c) => (h(), C(s(wp), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => dt(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        x(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Xp = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Rl(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = ke(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(Dl), { "as-child": "" }, {
      default: y(() => [
        R(s(K), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await ne(), s(n).open.value && i.preventDefault());
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
}), Zp = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Lp), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qp = /* @__PURE__ */ _({
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
    const n = ee(e, t);
    V();
    const o = Rl(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = ke(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(Fp), A(s(n), {
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
          const p = d.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || f;
          (!s(o).modal.value || m) && (a.value = !0), (c = s(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          x(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Jp = /* @__PURE__ */ _({
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
    return V(), (a, r) => (h(), C(s(br), G(q({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ef = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Ml), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tf = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Kp), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nf = /* @__PURE__ */ _({
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
    return V(), (a, r) => (h(), C(s(Pp), G(q({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ll = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Ap), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Rp), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), af = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = zt(t);
    return V(), (a, r) => (h(), C(s(zp), G(q({ ...n, ...s(o) })), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rf = /* @__PURE__ */ _({
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
    const n = ee(e, t);
    return V(), (o, a) => (h(), C(s(jp), G(q(s(n))), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sf = /* @__PURE__ */ _({
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
    return V(), (a, r) => (h(), C(s(Wp), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => dt(o) ? o.value = l : null)
    }, {
      default: y(() => [
        x(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), lf = /* @__PURE__ */ _({
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
    const n = ee(e, t);
    return V(), (o, a) => (h(), C(s(Up), A(s(n), { style: {
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
}), uf = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(Gp), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ _({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), A(t, {
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
}), [Sn, cf] = ie("PopoverRoot"), pf = /* @__PURE__ */ _({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = ve(n), r = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return cf({
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
}), ff = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Sn(), { forwardRef: o, currentElement: a } = V();
    return le(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(Qe(s(n).hasCustomAnchor.value ? s(K) : s(eo)), { "as-child": "" }, {
      default: y(() => [
        R(s(K), {
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
}), mf = /* @__PURE__ */ _({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(xn), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vl = /* @__PURE__ */ _({
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
    const n = e, o = t, a = Ie(n), { forwardRef: r } = V(), l = Sn();
    return tr(), (i, u) => (h(), C(s(No), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Cn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            R(s(hn), A(s(a), {
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
}), vf = /* @__PURE__ */ _({
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
    const n = e, o = t, a = Sn(), r = E(!1);
    Qn(!0);
    const l = ee(n, o), { forwardRef: i, currentElement: u } = V();
    return Jn(u), (d, c) => (h(), C(Vl, A(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Te(
        (p) => {
          var f;
          o("closeAutoFocus", p), r.value || (f = s(a).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        o("pointerDownOutside", p);
        const f = p.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, v = f.button === 2 || m;
        r.value = v;
      }),
      onFocusOutside: c[2] || (c[2] = Te(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), gf = /* @__PURE__ */ _({
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
    const n = e, o = t, a = Sn(), r = E(!1), l = E(!1), i = ee(n, o);
    return (u, d) => (h(), C(Vl, A(s(i), {
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
}), hf = /* @__PURE__ */ _({
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
    const n = e, o = t, a = Sn(), r = ee(n, o), { forwardRef: l } = V();
    return a.contentId || (a.contentId = ke(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(et), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(vf, A({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(gf, A({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), jy = /* @__PURE__ */ _({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    V();
    const n = Sn();
    return Vs(() => {
      n.hasCustomAnchor.value = !0;
    }), Ue(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), C(s(eo), G(q(t)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kn = 100, [yf, bf] = ie("ProgressRoot"), wr = (e) => typeof e == "number";
function wf(e, t) {
  return pn(e) || wr(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Kn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function _f(e) {
  return wr(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Kn}\`.`
  ), Kn);
}
const xf = /* @__PURE__ */ _({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: Kn },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * Kn)}%` },
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
    X(
      () => a.value,
      async (i) => {
        const u = wf(i, n.max);
        u !== i && (await ne(), a.value = u);
      },
      { immediate: !0 }
    ), X(
      () => n.max,
      (i) => {
        const u = _f(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = B(() => pn(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return bf({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(K), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": wr(s(a)) ? s(a) : void 0,
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
}), Cf = /* @__PURE__ */ _({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = yf();
    return V(), (o, a) => {
      var r;
      return h(), C(s(K), A(t, {
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
}), Of = ["default-value"], $f = /* @__PURE__ */ _({
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
    const t = e, { value: n } = ve(t), o = E();
    return (a, r) => (h(), C(s(to), { "as-child": "" }, {
      default: y(() => [
        yn(de("select", A({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => dt(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          x(a.$slots, "default")
        ], 16, Of), [
          [Wi, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Sf = {
  key: 0,
  value: ""
}, [Qt, Nl] = ie("SelectRoot"), [Bf, Ef] = ie("SelectRoot"), Df = /* @__PURE__ */ _({
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
    }), d = E(!1), { required: c, disabled: p, dir: f } = ve(n), m = Nt(f);
    Nl({
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
      required: c,
      onOpenChange: (w) => {
        r.value = w;
      },
      dir: m,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const v = Lo(l), g = E(/* @__PURE__ */ new Set()), b = B(() => Array.from(g.value).map((w) => {
      var $;
      return ($ = w.props) == null ? void 0 : $.value;
    }).join(";"));
    return Ef({
      onNativeOptionAdd: (w) => {
        g.value.add(w);
      },
      onNativeOptionRemove: (w) => {
        g.value.delete(w);
      }
    }), (w, $) => (h(), C(s(On), null, {
      default: y(() => [
        x(w.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(v) ? (h(), C($f, A({ key: b.value }, w.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: w.name,
          autocomplete: w.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: $[0] || ($[0] = (O) => a.value = O.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), z("option", Sf)) : he("", !0),
            (h(!0), z(Ee, null, Rt(Array.from(g.value), (O) => (h(), C(Qe(O), A({ ref_for: !0 }, O.props, {
              key: O.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : he("", !0)
      ]),
      _: 3
    }));
  }
}), Tf = [" ", "Enter", "ArrowUp", "ArrowDown"], kf = [" ", "Enter"], rt = 10;
function zl(e) {
  return e === "" || pn(e);
}
const Af = /* @__PURE__ */ _({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Qt(), o = B(() => {
      var m;
      return ((m = n.disabled) == null ? void 0 : m.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = V();
    n.contentId || (n.contentId = ke(void 0, "radix-vue-select-content")), le(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = _n(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = nr(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function f(m) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      };
    }
    return (m, v) => (h(), C(s(eo), { "as-child": "" }, {
      default: y(() => {
        var g, b, w, $;
        return [
          R(s(K), {
            ref: s(a),
            role: "combobox",
            type: m.as === "button" ? "button" : void 0,
            "aria-controls": s(n).contentId,
            "aria-expanded": s(n).open.value || !1,
            "aria-required": (g = s(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (b = s(n)) == null ? void 0 : b.dir.value,
            "data-state": (w = s(n)) != null && w.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": s(zl)(($ = s(n).modelValue) == null ? void 0 : $.value) ? "" : void 0,
            "as-child": m.asChild,
            as: m.as,
            onClick: v[0] || (v[0] = (O) => {
              var D;
              (D = O == null ? void 0 : O.currentTarget) == null || D.focus();
            }),
            onPointerdown: v[1] || (v[1] = (O) => {
              if (O.pointerType === "touch")
                return O.preventDefault();
              const D = O.target;
              D.hasPointerCapture(O.pointerId) && D.releasePointerCapture(O.pointerId), O.button === 0 && O.ctrlKey === !1 && (f(O), O.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Te(
              (O) => {
                O.pointerType === "touch" && f(O);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = (O) => {
              const D = s(u) !== "";
              !(O.ctrlKey || O.altKey || O.metaKey) && O.key.length === 1 && D && O.key === " " || (s(d)(O.key), s(Tf).includes(O.key) && (p(), O.preventDefault()));
            })
          }, {
            default: y(() => [
              x(m.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Pf = /* @__PURE__ */ _({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(xn), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [_r, If] = ie("SelectItemAlignedPosition"), Mf = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = _n(), r = Qt(), l = Jt(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: f } = V(), { viewport: m, selectedItem: v, selectedItemText: g, focusSelectedItem: b } = l;
    function w() {
      if (r.triggerElement.value && r.valueElement.value && c.value && f.value && m != null && m.value && v != null && v.value && g != null && g.value) {
        const D = r.triggerElement.value.getBoundingClientRect(), S = f.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), T = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const xe = T.left - S.left, pe = P.left - xe, Me = D.left - pe, $e = D.width + Me, ge = Math.max($e, S.width), H = window.innerWidth - rt, ue = So(pe, rt, Math.max(rt, H - ge));
          c.value.style.minWidth = `${$e}px`, c.value.style.left = `${ue}px`;
        } else {
          const xe = S.right - T.right, pe = window.innerWidth - P.right - xe, Me = window.innerWidth - D.right - pe, $e = D.width + Me, ge = Math.max($e, S.width), H = window.innerWidth - rt, ue = So(
            pe,
            rt,
            Math.max(rt, H - ge)
          );
          c.value.style.minWidth = `${$e}px`, c.value.style.right = `${ue}px`;
        }
        const I = i.value, F = window.innerHeight - rt * 2, k = m.value.scrollHeight, L = window.getComputedStyle(f.value), M = Number.parseInt(
          L.borderTopWidth,
          10
        ), Y = Number.parseInt(L.paddingTop, 10), W = Number.parseInt(
          L.borderBottomWidth,
          10
        ), Z = Number.parseInt(
          L.paddingBottom,
          10
        ), U = M + Y + k + Z + W, ye = Math.min(
          v.value.offsetHeight * 5,
          U
        ), ae = window.getComputedStyle(m.value), j = Number.parseInt(ae.paddingTop, 10), J = Number.parseInt(
          ae.paddingBottom,
          10
        ), te = D.top + D.height / 2 - rt, Ve = F - te, Ke = v.value.offsetHeight / 2, Ne = v.value.offsetTop + Ke, qe = M + Y + Ne, yt = U - qe;
        if (qe <= te) {
          const xe = v.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const pe = f.value.clientHeight - m.value.offsetTop - m.value.offsetHeight, Me = Math.max(
            Ve,
            Ke + (xe ? J : 0) + pe + W
          ), $e = qe + Me;
          c.value.style.height = `${$e}px`;
        } else {
          const xe = v.value === I[0];
          c.value.style.top = "0px";
          const pe = Math.max(
            te,
            M + m.value.offsetTop + (xe ? j : 0) + Ke
          ) + yt;
          c.value.style.height = `${pe}px`, m.value.scrollTop = qe - te + m.value.offsetTop;
        }
        c.value.style.margin = `${rt}px 0`, c.value.style.minHeight = `${ye}px`, c.value.style.maxHeight = `${F}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const $ = E("");
    le(async () => {
      await ne(), w(), f.value && ($.value = window.getComputedStyle(f.value).zIndex);
    });
    function O(D) {
      D && d.value === !0 && (w(), b == null || b(), d.value = !1);
    }
    return If({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: O
    }), (D, S) => (h(), z("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Tt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      R(s(K), A({
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
          x(D.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Ff = /* @__PURE__ */ _({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: rt },
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
    return (n, o) => (h(), C(s(hn), A(s(t), { style: {
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
}), Bn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Jt, Rf] = ie("SelectContent"), Lf = /* @__PURE__ */ _({
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
    const n = e, o = t, a = Qt();
    tr(), Qn(n.bodyLock);
    const { createCollection: r } = _n(), l = E();
    Jn(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = nr(i), c = E(), p = E(), f = E(), m = E(!1), v = E(!1);
    function g() {
      p.value && l.value && Ca([p.value, l.value]);
    }
    X(m, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: w } = a;
    me((S) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const T = (F) => {
        var k, L;
        P = {
          x: Math.abs(
            Math.round(F.pageX) - (((k = w.value) == null ? void 0 : k.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((L = w.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (F) => {
        var k;
        F.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? F.preventDefault() : (k = l.value) != null && k.contains(F.target) || b(!1), document.removeEventListener("pointermove", T), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", I, {
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
          const I = S.target, F = T.indexOf(I);
          T = T.slice(F + 1);
        }
        setTimeout(() => Ca(T)), S.preventDefault();
      }
    }
    const O = B(() => n.position === "popper" ? n : {}), D = Ie(O.value);
    return Rf({
      content: l,
      viewport: c,
      onViewportChange: (S) => {
        c.value = S;
      },
      itemRefCallback: (S, P, T) => {
        var I, F;
        const k = !v.value && !T;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || k) && (p.value = S, k && (v.value = !0));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var S;
        (S = l.value) == null || S.focus();
      },
      itemTextRefCallback: (S, P, T) => {
        var I, F;
        const k = !v.value && !T;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || k) && (f.value = S);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: m,
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
        R(s(Cn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = Te(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (T) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (T) => o("escapeKeyDown", T)),
          onPointerDownOutside: P[5] || (P[5] = (T) => o("pointerDownOutside", T))
        }, {
          default: y(() => [
            (h(), C(Qe(
              S.position === "popper" ? Ff : Mf
            ), A({ ...S.$attrs, ...s(D) }, {
              id: s(a).contentId,
              ref: (T) => {
                l.value = s(Je)(T);
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
              onPlaced: P[1] || (P[1] = (T) => m.value = !0),
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
}), Vf = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Nl(e.context), (t, n) => x(t.$slots, "default");
  }
}), Nf = { key: 1 }, zf = /* @__PURE__ */ _({
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
    const n = e, o = ee(n, t), a = Qt(), r = E();
    le(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = B(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), C(s(et), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          R(Lf, G(q({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), z("div", Nf, [
        (h(), C(Gn, { to: r.value }, [
          R(Vf, { context: s(a) }, {
            default: y(() => [
              x(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : he("", !0);
    };
  }
}), jf = /* @__PURE__ */ _({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), A({ "aria-hidden": "true" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [jl, Kf] = ie("SelectItem"), Hf = /* @__PURE__ */ _({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = ve(t), o = Qt(), a = Jt(Bn), { forwardRef: r, currentElement: l } = V(), i = B(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = ke(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await ne(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function f(g) {
      var b;
      await ne(), !g.defaultPrevented && (n.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function m(g) {
      var b;
      await ne(), !g.defaultPrevented && g.currentTarget === Pe() && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function v(g) {
      var b;
      await ne(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (kf.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), Kf({
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
      onFocus: b[0] || (b[0] = (w) => u.value = !0),
      onBlur: b[1] || (b[1] = (w) => u.value = !1),
      onPointerup: p,
      onPointerdown: b[2] || (b[2] = (w) => {
        w.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: b[3] || (b[3] = Te(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: m,
      onKeydown: v
    }, {
      default: y(() => [
        x(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Wf = /* @__PURE__ */ _({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = jl();
    return (o, a) => s(n).isSelected.value ? (h(), C(s(K), A({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : he("", !0);
  }
}), [Uf, Gf] = ie("SelectGroup"), qf = /* @__PURE__ */ _({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ke(void 0, "radix-vue-select-group");
    return Gf({ id: n }), (o, a) => (h(), C(s(K), A({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Yf = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Uf({ id: "" });
    return (o, a) => (h(), C(s(K), A(t, {
      id: s(n).id
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Kl = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Qt(), o = Jt(Bn), a = Bf(), r = jl(), { forwardRef: l, currentElement: i } = V(), u = B(() => {
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
    }), bn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), z(Ee, null, [
      R(s(K), A({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          x(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), C(Gn, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        x(d.$slots, "default")
      ], 8, ["to"])) : he("", !0)
    ], 64));
  }
}), Xf = /* @__PURE__ */ _({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = ve(t), o = pp(n), a = Jt(Bn), r = a.position === "item-aligned" ? _r() : void 0, { forwardRef: l, currentElement: i } = V();
    le(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: m } = r ?? {};
      if (f != null && f.value && m != null && m.value) {
        const v = Math.abs(u.value - p.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - rt * 2, b = Number.parseFloat(
            m.value.style.minHeight
          ), w = Number.parseFloat(m.value.style.height), $ = Math.max(b, w);
          if ($ < g) {
            const O = $ + v, D = Math.min(g, O), S = O - D;
            m.value.style.height = `${D}px`, m.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), z(Ee, null, [
      R(s(K), A({
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
      R(s(K), {
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
}), Hl = /* @__PURE__ */ _({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = _n(), a = o(), r = Jt(Bn), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    me(() => {
      const c = a.value.find(
        (p) => p === Pe()
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
    return bn(() => i()), (c, p) => {
      var f;
      return h(), C(s(K), A({
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
}), Zf = /* @__PURE__ */ _({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Jt(Bn), n = t.position === "item-aligned" ? _r() : void 0, { forwardRef: o, currentElement: a } = V(), r = E(!1);
    return me((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), X(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Hl, {
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
    }, 512)) : he("", !0);
  }
}), Qf = /* @__PURE__ */ _({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Jt(Bn), n = t.position === "item-aligned" ? _r() : void 0, { forwardRef: o, currentElement: a } = V(), r = E(!1);
    return me((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), X(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), C(Hl, {
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
    }, 512)) : he("", !0);
  }
}), Jf = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = V(), o = Qt(), a = La();
    return Vs(() => {
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
          s(zl)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), z(Ee, { key: 0 }, [
            Le(He(r.placeholder), 1)
          ], 64)) : x(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), em = /* @__PURE__ */ _({
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
function tm(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function Wl(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return So(o, 0, 100);
}
function nm(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function om(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function am(e, t, n) {
  const o = e / 2, a = xr([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function rm(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function sm(e, t) {
  if (t > 0) {
    const n = rm(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function xr(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function lm(e) {
  return (String(e).split(".")[1] || "").length;
}
function im(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Ul = ["PageUp", "PageDown"], Gl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ql = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Yl, Xl] = ie(["SliderVertical", "SliderHorizontal"]), Zl = /* @__PURE__ */ _({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Ho();
    return (r, l) => (h(), C(s(K), A({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(Ul).concat(s(Gl)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), um = /* @__PURE__ */ _({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = ve(n), { forwardRef: u, currentElement: d } = V(), c = E(), p = B(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function f(m) {
      const v = c.value || d.value.getBoundingClientRect(), g = [0, v.width], b = p.value ? [r.value, a.value] : [a.value, r.value], w = xr(g, b);
      return c.value = v, w(m - v.left);
    }
    return Xl({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (m, v) => (h(), C(Zl, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: v[0] || (v[0] = (g) => {
        const b = f(g.clientX);
        o("slideStart", b);
      }),
      onSlideMove: v[1] || (v[1] = (g) => {
        const b = f(g.clientX);
        o("slideMove", b);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const b = p.value ? "from-left" : "from-right", w = s(ql)[b].includes(g.key);
        o("stepKeyDown", g, w ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (g) => o("endKeyDown", g)),
      onHomeKeyDown: v[5] || (v[5] = (g) => o("homeKeyDown", g))
    }, {
      default: y(() => [
        x(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), dm = /* @__PURE__ */ _({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = ve(n), { forwardRef: i, currentElement: u } = V(), d = E(), c = B(() => !l.value);
    function p(f) {
      const m = d.value || u.value.getBoundingClientRect(), v = [0, m.height], g = c.value ? [a.value, r.value] : [r.value, a.value], b = xr(v, g);
      return d.value = m, b(f - m.top);
    }
    return Xl({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, m) => (h(), C(Zl, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: m[0] || (m[0] = (v) => {
        const g = p(v.clientY);
        o("slideStart", g);
      }),
      onSlideMove: m[1] || (m[1] = (v) => {
        const g = p(v.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: m[2] || (m[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: m[3] || (m[3] = (v) => {
        const g = c.value ? "from-bottom" : "from-top", b = s(ql)[g].includes(v.key);
        o("stepKeyDown", v, b ? -1 : 1);
      }),
      onEndKeyDown: m[4] || (m[4] = (v) => o("endKeyDown", v)),
      onHomeKeyDown: m[5] || (m[5] = (v) => o("homeKeyDown", v))
    }, {
      default: y(() => [
        x(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), cm = ["value", "name", "disabled", "step"], [Ho, pm] = ie("SliderRoot"), fm = /* @__PURE__ */ _({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = ve(n), p = Nt(c), { forwardRef: f, currentElement: m } = V(), v = Lo(m);
    mr();
    const g = _e(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = E(0), w = E(g.value);
    function $(T) {
      const I = om(g.value, T);
      S(T, I);
    }
    function O(T) {
      S(T, b.value);
    }
    function D() {
      const T = w.value[b.value];
      g.value[b.value] !== T && o("valueCommit", Ui(g.value));
    }
    function S(T, I, { commit: F } = { commit: !1 }) {
      var k;
      const L = lm(l.value), M = im(Math.round((T - a.value) / l.value) * l.value + a.value, L), Y = So(M, a.value, r.value), W = tm(g.value, Y, I);
      if (sm(W, i.value * l.value)) {
        b.value = W.indexOf(Y);
        const Z = String(W) !== String(g.value);
        Z && F && o("valueCommit", W), Z && ((k = P.value[b.value]) == null || k.focus(), g.value = W);
      }
    }
    const P = E([]);
    return pm({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (T, I) => (h(), z(Ee, null, [
      R(s(vr), null, {
        default: y(() => [
          (h(), C(Qe(s(u) === "horizontal" ? um : dm), A(T.$attrs, {
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
              s(d) || (w.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (F) => !s(d) && $(F)),
            onSlideMove: I[2] || (I[2] = (F) => !s(d) && O(F)),
            onSlideEnd: I[3] || (I[3] = (F) => !s(d) && D()),
            onHomeKeyDown: I[4] || (I[4] = (F) => !s(d) && S(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (F) => !s(d) && S(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (F, k) => {
              if (!s(d)) {
                const L = s(Ul).includes(F.key) || F.shiftKey && s(Gl).includes(F.key) ? 10 : 1, M = b.value, Y = s(g)[M], W = s(l) * L * k;
                S(Y + W, M, { commit: !0 });
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
      s(v) ? (h(!0), z(Ee, { key: 0 }, Rt(s(g), (F, k) => (h(), z("input", {
        key: k,
        value: F,
        type: "number",
        style: { display: "none" },
        name: T.name ? T.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, cm))), 128)) : he("", !0)
    ], 64));
  }
}), mm = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ho(), o = Yl(), { forwardRef: a, currentElement: r } = V(), l = B(() => {
      var m, v;
      return (v = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : v[t.index];
    }), i = B(() => l.value === void 0 ? 0 : Wl(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = B(() => {
      var m, v;
      return nm(t.index, ((v = (m = n.modelValue) == null ? void 0 : m.value) == null ? void 0 : v.length) ?? 0);
    }), d = yl(r), c = B(() => d[o.size].value), p = B(() => c.value ? am(c.value, i.value, o.direction) : 0), f = er();
    return le(() => {
      n.thumbElements.value.push(r.value);
    }), Ue(() => {
      const m = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(m, 1);
    }), (m, v) => (h(), C(s(Ko), null, {
      default: y(() => [
        R(s(K), A(m.$attrs, {
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
            display: !s(f) && l.value === void 0 ? "none" : void 0
          },
          onFocus: v[0] || (v[0] = () => {
            s(n).valueIndexToChangeRef.value = m.index;
          })
        }), {
          default: y(() => [
            x(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), vm = /* @__PURE__ */ _({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = gr(), { forwardRef: o, currentElement: a } = V(), r = B(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(mm, A({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), gm = /* @__PURE__ */ _({
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
}), hm = /* @__PURE__ */ _({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ho(), n = Yl();
    V();
    const o = B(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => Wl(u, t.min.value, t.max.value)
      );
    }), a = B(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = B(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), C(s(K), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: Tt({
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
function ym() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ym();
const bm = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [wm, _m] = ie("SwitchRoot"), xm = /* @__PURE__ */ _({
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
    const n = e, o = t, { disabled: a } = ve(n), r = _e(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = V(), d = Lo(u), c = B(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return _m({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, f) => (h(), z(Ee, null, [
      R(s(K), A(p.$attrs, {
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
        onKeydown: Ft(Te(l, ["prevent"]), ["enter"])
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
      }, null, 8, bm)) : he("", !0)
    ], 64));
  }
}), Cm = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = wm();
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
}), [Cr, Om] = ie("TabsRoot"), $m = /* @__PURE__ */ _({
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
    const n = e, o = t, { orientation: a, dir: r } = ve(n), l = Nt(r);
    V();
    const i = _e(n, "modelValue", o, {
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
      baseId: ke(void 0, "radix-vue-tabs"),
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
}), Sm = /* @__PURE__ */ _({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = ve(t), { forwardRef: o, currentElement: a } = V(), r = Cr();
    return r.tabsList = a, (l, i) => (h(), C(s(Al), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        R(s(K), {
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
function Ql(e, t) {
  return `${e}-trigger-${t}`;
}
function Jl(e, t) {
  return `${e}-content-${t}`;
}
const Bm = /* @__PURE__ */ _({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), o = Cr(), a = B(() => Ql(o.baseId, t.value)), r = B(() => Jl(o.baseId, t.value)), l = B(() => t.value === o.modelValue.value), i = E(l.value);
    return le(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), C(s(et), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        R(s(K), {
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
          style: Tt({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? x(u.$slots, "default", { key: 0 }) : he("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Em = /* @__PURE__ */ _({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = V(), o = Cr(), a = B(() => Ql(o.baseId, t.value)), r = B(() => Jl(o.baseId, t.value)), l = B(() => t.value === o.modelValue.value);
    return (i, u) => (h(), C(s(Dp), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        R(s(K), {
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
}), [Wo, Dm] = ie("ToastProvider"), Tm = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = ve(t), l = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Dm({
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
}), km = "toast.swipeStart", Am = "toast.swipeMove", Pm = "toast.swipeCancel", Im = "toast.swipeEnd", $a = "toast.viewportPause", Sa = "toast.viewportResume";
function fo(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function is(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Mm(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ei(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Mm(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ei(n));
    }
  }), t;
}
const Fm = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Wo(), n = yd(1e3), o = E(!1);
    return fl(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), C(s(to), { key: 0 }, {
      default: y(() => [
        Le(He(s(t).label.value) + " ", 1),
        x(a.$slots, "default")
      ]),
      _: 3
    })) : he("", !0);
  }
}), [Rm, Lm] = ie("ToastRoot"), Vm = /* @__PURE__ */ _({
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
    ), c = E(0), p = E(d.value), f = E(0), m = E(d.value), v = fl(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - $, 0);
    }, { fpsLimit: 60 });
    function g($) {
      $ <= 0 || $ === Number.POSITIVE_INFINITY || vt && (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(b, $));
    }
    function b() {
      var $, O;
      ($ = r.value) != null && $.contains(Pe()) && ((O = l.viewport.value) == null || O.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const w = B(() => r.value ? ei(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return me(($) => {
      const O = l.viewport.value;
      if (O) {
        const D = () => {
          g(p.value), v.resume(), o("resume");
        }, S = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - P, window.clearTimeout(f.value), v.pause(), o("pause");
        };
        return O.addEventListener($a, S), O.addEventListener(Sa, D), () => {
          O.removeEventListener($a, S), O.removeEventListener(Sa, D);
        };
      }
    }), X(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), Ja("Escape", ($) => {
      o("escapeKeyDown", $), $.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), le(() => {
      l.onToastAdd();
    }), Ue(() => {
      l.onToastRemove();
    }), Lm({ onClose: b }), ($, O) => (h(), z(Ee, null, [
      w.value ? (h(), C(Fm, {
        key: 0,
        role: "alert",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Le(He(w.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : he("", !0),
      s(l).viewport.value ? (h(), C(Gn, {
        key: 1,
        to: s(l).viewport.value
      }, [
        R(s(K), A({
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
            const S = D.clientX - i.value.x, P = D.clientY - i.value.y, T = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), F = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, k = I ? F(0, S) : 0, L = I ? 0 : F(0, P), M = D.pointerType === "touch" ? 10 : 2, Y = { x: k, y: L }, W = { originalEvent: D, delta: Y };
            T ? (u.value = Y, s(fo)(s(Am), (Z) => o("swipeMove", Z), W)) : s(is)(Y, s(l).swipeDirection.value, M) ? (u.value = Y, s(fo)(s(km), (Z) => o("swipeStart", Z), W), D.target.setPointerCapture(D.pointerId)) : (Math.abs(S) > M || Math.abs(P) > M) && (i.value = null);
          }),
          onPointerup: O[2] || (O[2] = (D) => {
            const S = u.value, P = D.target;
            if (P.hasPointerCapture(D.pointerId) && P.releasePointerCapture(D.pointerId), u.value = null, i.value = null, S) {
              const T = D.currentTarget, I = { originalEvent: D, delta: S };
              s(is)(S, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(fo)(s(Im), (F) => o("swipeEnd", F), I) : s(fo)(s(Pm), (F) => o("swipeCancel", F), I), T == null || T.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            x($.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : he("", !0)
    ], 64));
  }
}), Nm = /* @__PURE__ */ _({
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
    return (l, i) => (h(), C(s(et), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        R(Vm, A({
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
}), ti = /* @__PURE__ */ _({
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
}), ni = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Rm(), { forwardRef: o } = V();
    return (a, r) => (h(), C(ti, { "as-child": "" }, {
      default: y(() => [
        R(s(K), A(t, {
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
}), zm = /* @__PURE__ */ _({
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
    return (n, o) => n.altText ? (h(), C(ti, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        R(ni, {
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
    }, 8, ["alt-text"])) : he("", !0);
  }
}), us = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Wo();
    return (a, r) => (h(), C(s(to), {
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
}), jm = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = ve(t), { forwardRef: a, currentElement: r } = V(), { createCollection: l } = _n(), i = l(r), u = Wo(), d = B(() => u.toastCount.value > 0), c = E(), p = E(), f = B(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Ja(n.value, () => {
      r.value.focus();
    }), le(() => {
      u.onViewportChange(r.value);
    }), me((v) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const S = new CustomEvent($a);
            g.dispatchEvent(S), u.isClosePausedRef.value = !0;
          }
        }, w = () => {
          if (u.isClosePausedRef.value) {
            const S = new CustomEvent(Sa);
            g.dispatchEvent(S), u.isClosePausedRef.value = !1;
          }
        }, $ = (S) => {
          !g.contains(S.relatedTarget) && w();
        }, O = () => {
          g.contains(Pe()) || w();
        }, D = (S) => {
          var P, T, I;
          const F = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !F) {
            const k = Pe(), L = S.shiftKey;
            if (S.target === g && L) {
              (P = c.value) == null || P.focus();
              return;
            }
            const M = m({ tabbingDirection: L ? "backwards" : "forwards" }), Y = M.findIndex((W) => W === k);
            _o(M.slice(Y + 1)) ? S.preventDefault() : L ? (T = c.value) == null || T.focus() : (I = p.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", $), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", O), g.addEventListener("keydown", D), window.addEventListener("blur", b), window.addEventListener("focus", w), v(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", $), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", O), g.removeEventListener("keydown", D), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        });
      }
    });
    function m({ tabbingDirection: v }) {
      const g = i.value.map((b) => {
        const w = [b, ...ir(b)];
        return v === "forwards" ? w : w.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (h(), C(s(fc), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", f.value) : s(o)(f.value),
      tabindex: "-1",
      style: Tt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), C(us, {
          key: 0,
          ref: (b) => {
            c.value = s(Je)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = m({
              tabbingDirection: "forwards"
            });
            s(_o)(b);
          })
        }, null, 512)) : he("", !0),
        R(s(K), A({
          ref: s(a),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: y(() => [
            x(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (h(), C(us, {
          key: 1,
          ref: (b) => {
            p.value = s(Je)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = m({
              tabbingDirection: "backwards"
            });
            s(_o)(b);
          })
        }, null, 512)) : he("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Km = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hm = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return V(), (n, o) => (h(), C(s(K), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oi = "tooltip.open", [Or, Wm] = ie("TooltipProvider"), Um = /* @__PURE__ */ _({
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
    V();
    const u = E(!0), d = E(!1), { start: c, stop: p } = Qa(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Wm({
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
    }), (f, m) => x(f.$slots, "default");
  }
}), [Uo, Gm] = ie("TooltipRoot"), qm = /* @__PURE__ */ _({
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
    const a = Or(), r = B(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = B(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = B(() => n.disabled ?? a.disabled.value), u = B(() => n.delayDuration ?? a.delayDuration.value), d = B(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = _e(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    X(c, (O) => {
      a.onClose && (O ? (a.onOpen(), document.dispatchEvent(new CustomEvent(oi))) : a.onClose());
    });
    const p = E(!1), f = E(), m = B(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: g } = Qa(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), p.value = !1, c.value = !0;
    }
    function w() {
      g(), c.value = !1;
    }
    function $() {
      v();
    }
    return Gm({
      contentId: "",
      open: c,
      stateAttribute: m,
      trigger: f,
      onTriggerChange(O) {
        f.value = O;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? $() : b();
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
    }), (O, D) => (h(), C(s(On), null, {
      default: y(() => [
        x(O.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), Ym = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Uo(), o = Or();
    n.contentId || (n.contentId = ke(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = V(), l = E(!1), i = E(!1), u = B(() => n.disabled.value ? {} : {
      click: g,
      focus: m,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
      blur: v
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
    function m(b) {
      var w, $;
      l.value || n.ignoreNonKeyboardFocus.value && !(($ = (w = b.target).matches) != null && $.call(w, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, w) => (h(), C(s(eo), { "as-child": "" }, {
      default: y(() => [
        R(s(K), A({
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
}), ai = /* @__PURE__ */ _({
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
    const n = e, o = t, a = Uo(), { forwardRef: r } = V(), l = La(), i = B(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = B(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function f(m) {
        typeof m.children == "string" && m.type !== Na ? p += m.children : Array.isArray(m.children) && m.children.forEach((v) => f(v));
      }
      return (c = i.value) == null || c.forEach((m) => f(m)), p;
    }), d = B(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return le(() => {
      gn(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), gn(window, oi, a.onClose);
    }), (c, p) => (h(), C(s(Cn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (f) => o("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var m;
        s(a).disableClosingTrigger.value && (m = s(a).trigger.value) != null && m.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = Te(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => s(a).onClose())
    }, {
      default: y(() => [
        R(s(hn), A({
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
            R(s(to), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Le(He(u.value), 1)
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
}), Xm = /* @__PURE__ */ _({
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
    const t = Ie(e), { forwardRef: n, currentElement: o } = V(), { trigger: a, onClose: r } = Uo(), l = Or(), { isPointerInTransit: i, onPointerExit: u } = kd(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), C(ai, A({ ref: s(n) }, s(t)), {
      default: y(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zm = /* @__PURE__ */ _({
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
    const n = e, o = t, a = Uo(), r = ee(n, o), { forwardRef: l } = V();
    return (i, u) => (h(), C(s(et), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), C(Qe(s(a).disableHoverableContent.value ? ai : Xm), A({ ref: s(l) }, s(r)), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Qm = /* @__PURE__ */ _({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(xn), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ri(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = ri(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function si() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = ri(e)) && (o && (o += " "), o += t);
  return o;
}
const $r = "-", Jm = (e) => {
  const t = tv(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split($r);
      return i[0] === "" && i.length !== 1 && i.shift(), li(i, t) || ev(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, li = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? li(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join($r);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, ds = /^\[(.+)\]$/, ev = (e) => {
  if (ds.test(e)) {
    const t = ds.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tv = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ov(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Ba(l, o, r, t);
  }), o;
}, Ba = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : cs(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (nv(a)) {
        Ba(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Ba(l, cs(t, r), n, o);
    });
  });
}, cs = (e, t) => {
  let n = e;
  return t.split($r).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, nv = (e) => e.isThemeGetter, ov = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, av = (e) => {
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
}, ii = "!", rv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let b = 0; b < i.length; b++) {
      let w = i[b];
      if (d === 0) {
        if (w === a && (o || i.slice(b, b + r) === t)) {
          u.push(i.slice(c, b)), c = b + r;
          continue;
        }
        if (w === "/") {
          p = b;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const f = u.length === 0 ? i : i.substring(c), m = f.startsWith(ii), v = m ? f.substring(1) : f, g = p && p > c ? p - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, sv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, lv = (e) => ({
  cache: av(e.cacheSize),
  parseClassName: rv(e),
  ...Jm(e)
}), iv = /\s+/, uv = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(iv);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(d);
    let v = !!m, g = o(v ? f.substring(0, m) : f);
    if (!g) {
      if (!v) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(f), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const b = sv(c).join(":"), w = p ? b + ii : b, $ = w + g;
    if (r.includes($))
      continue;
    r.push($);
    const O = a(g, v);
    for (let D = 0; D < O.length; ++D) {
      const S = O[D];
      r.push(w + S);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function dv() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ui(t)) && (o && (o += " "), o += n);
  return o;
}
const ui = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ui(e[o])) && (n && (n += " "), n += t);
  return n;
};
function cv(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = lv(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = uv(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(dv.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, di = /^\[(?:([a-z-]+):)?(.+)\]$/i, pv = /^\d+\/\d+$/, fv = /* @__PURE__ */ new Set(["px", "full", "screen"]), mv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ct = (e) => fn(e) || fv.has(e) || pv.test(e), At = (e) => En(e, "length", Sv), fn = (e) => !!e && !Number.isNaN(Number(e)), la = (e) => En(e, "number", fn), Pn = (e) => !!e && Number.isInteger(Number(e)), bv = (e) => e.endsWith("%") && fn(e.slice(0, -1)), se = (e) => di.test(e), Pt = (e) => mv.test(e), wv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), _v = (e) => En(e, wv, ci), xv = (e) => En(e, "position", ci), Cv = /* @__PURE__ */ new Set(["image", "url"]), Ov = (e) => En(e, Cv, Ev), $v = (e) => En(e, "", Bv), In = () => !0, En = (e, t, n) => {
  const o = di.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Sv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vv.test(e) && !gv.test(e)
), ci = () => !1, Bv = (e) => hv.test(e), Ev = (e) => yv.test(e), Dv = () => {
  const e = we("colors"), t = we("spacing"), n = we("blur"), o = we("brightness"), a = we("borderColor"), r = we("borderRadius"), l = we("borderSpacing"), i = we("borderWidth"), u = we("contrast"), d = we("grayscale"), c = we("hueRotate"), p = we("invert"), f = we("gap"), m = we("gradientColorStops"), v = we("gradientColorStopPositions"), g = we("inset"), b = we("margin"), w = we("opacity"), $ = we("padding"), O = we("saturate"), D = we("scale"), S = we("sepia"), P = we("skew"), T = we("space"), I = we("translate"), F = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", se, t], M = () => [se, t], Y = () => ["", Ct, At], W = () => ["auto", fn, se], Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], ye = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", se], J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], te = () => [fn, se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [In],
      spacing: [Ct, At],
      blur: ["none", "", Pt, se],
      brightness: te(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pt, se],
      borderSpacing: M(),
      borderWidth: Y(),
      contrast: te(),
      grayscale: j(),
      hueRotate: te(),
      invert: j(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bv, At],
      inset: L(),
      margin: L(),
      opacity: te(),
      padding: M(),
      saturate: te(),
      scale: te(),
      sepia: j(),
      skew: te(),
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
        columns: [Pt]
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
        object: [...Z(), se]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
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
        z: ["auto", Pn, se]
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
        order: ["first", "last", "none", Pn, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [In]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Pn, se]
        }, se]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [In]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Pn, se]
        }, se]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
          screen: [Pt]
        }, Pt]
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
        text: ["base", Pt, At]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", la]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [In]
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
        "line-clamp": ["none", fn, la]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ct, se]
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
        decoration: ["auto", "from-font", Ct, At]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ct, se]
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
        bg: [...Z(), xv]
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
        bg: ["auto", "cover", "contain", _v]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ov]
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
        "outline-offset": [Ct, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ct, At]
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
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ct, At]
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
        shadow: ["", "inner", "none", Pt, $v]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [In]
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
        "mix-blend": [...ye(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ye()
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
        "drop-shadow": ["", "none", Pt, se]
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
        "backdrop-opacity": [w]
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
        duration: te()
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
        delay: te()
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
        rotate: [Pn, se]
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
        stroke: [Ct, At, la]
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
}, Tv = /* @__PURE__ */ cv(Dv);
function N(...e) {
  return Tv(si(e));
}
function Ky(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
const Dn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, kv = {}, Av = { class: "h-full bg-background dark:text-white" };
function Pv(e, t) {
  return h(), z("div", Av, [
    x(e.$slots, "default")
  ]);
}
const Hy = /* @__PURE__ */ Dn(kv, [["render", Pv]]), Iv = {}, Mv = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Fv(e, t) {
  return h(), z("header", Mv, [
    x(e.$slots, "default")
  ]);
}
const Wy = /* @__PURE__ */ Dn(Iv, [["render", Fv]]), Rv = {}, Lv = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Vv(e, t) {
  return h(), z("main", Lv, [
    x(e.$slots, "default")
  ]);
}
const Uy = /* @__PURE__ */ Dn(Rv, [["render", Vv]]), Nv = {};
function zv(e, t) {
  return x(e.$slots, "default");
}
const Gy = /* @__PURE__ */ Dn(Nv, [["render", zv]]), jv = {}, Kv = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Hv = { class: "gap-y-5 overflow-y-auto" };
function Wv(e, t) {
  return h(), z("div", Kv, [
    de("div", Hv, [
      x(e.$slots, "default")
    ])
  ]);
}
const qy = /* @__PURE__ */ Dn(jv, [["render", Wv]]), Uv = {};
function Gv(e, t) {
  return x(e.$slots, "default");
}
const Yy = /* @__PURE__ */ Dn(Uv, [["render", Gv]]);
function qv(e, t) {
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
function Yv(e, t) {
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
function ps(e, t) {
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
function Xv(e, t) {
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
const Zv = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, Xy = /* @__PURE__ */ _({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), z("button", Zv, [
      n[0] || (n[0] = de("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(s(qv), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), Qv = 3, Jv = 1e6, $t = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let ia = 0;
function eg() {
  return ia = (ia + 1) % Number.MAX_VALUE, ia.toString();
}
const ua = /* @__PURE__ */ new Map();
function fs(e) {
  if (ua.has(e)) return;
  const t = setTimeout(() => {
    ua.delete(e), Rn({
      type: $t.REMOVE_TOAST,
      toastId: e
    });
  }, Jv);
  ua.set(e, t);
}
const ot = E({
  toasts: []
});
function Rn(e) {
  switch (e.type) {
    case $t.ADD_TOAST:
      ot.value.toasts = [e.toast, ...ot.value.toasts].slice(0, Qv);
      break;
    case $t.UPDATE_TOAST:
      ot.value.toasts = ot.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case $t.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? fs(t) : ot.value.toasts.forEach((n) => {
        fs(n.id);
      }), ot.value.toasts = ot.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case $t.REMOVE_TOAST:
      e.toastId === void 0 ? ot.value.toasts = [] : ot.value.toasts = ot.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function pi() {
  return {
    toasts: B(() => ot.value.toasts),
    toast: tg,
    dismiss: (e) => Rn({ type: $t.DISMISS_TOAST, toastId: e })
  };
}
function tg(e) {
  const t = eg(), n = (a) => Rn({
    type: $t.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => Rn({ type: $t.DISMISS_TOAST, toastId: t });
  return Rn({
    type: $t.ADD_TOAST,
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
const ng = { class: "flex items-start space-x-3" }, og = ["src", "alt"], ag = { class: "grid gap-1" }, rg = { class: "font-bold" }, sg = /* @__PURE__ */ _({
  __name: "Toaster",
  emits: ["click"],
  setup(e) {
    const { toasts: t } = pi();
    return (n, o) => (h(), C(s(yg), null, {
      default: y(() => [
        (h(!0), z(Ee, null, Rt(s(t), (a) => (h(), C(s(lg), A({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            de("div", ng, [
              a.icon ? (h(), z(Ee, { key: 0 }, [
                typeof a.icon == "string" ? (h(), z("img", {
                  key: 0,
                  src: a.icon,
                  class: oe(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, og)) : (h(), C(Qe(a.icon), {
                  key: 1,
                  class: oe(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : he("", !0),
              de("div", ag, [
                a.title ? (h(), C(s(hg), { key: 0 }, {
                  default: y(() => [
                    Le(He(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : he("", !0),
                a.description ? (h(), z(Ee, { key: 1 }, [
                  Yi(a.description) ? (h(), C(s(ms), { key: 0 }, {
                    default: y(() => [
                      (h(), C(Qe(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), z(Ee, { key: 1 }, Rt(a.description, (r, l) => (h(), z("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), z(Ee, { key: 0 }, [
                      Le(He(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), z(Ee, { key: 1 }, [
                      de("span", rg, He(l), 1),
                      Le(": " + He(r), 1)
                    ], 64)) : (h(), z(Ee, { key: 2 }, [
                      Le(He(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(ms), { key: 2 }, {
                    default: y(() => [
                      Le(He(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : he("", !0),
                R(s(gg))
              ])
            ]),
            (h(), C(Qe(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        R(s(ig))
      ]),
      _: 1
    }));
  }
}), lg = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(Nm), A(s(r), {
      class: s(N)(s(bg)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), ig = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(jm), A(n.value, {
      class: s(N)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed bottom-0 right-0 top-auto flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Zy = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(zm), A(n.value, {
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
function ug(e, t) {
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
function dg(e, t) {
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
function cg(e, t) {
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
function fi(e, t) {
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
function mi(e, t) {
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
function pg(e, t) {
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
function fg(e, t) {
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
function Go(e, t) {
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
function mg(e, t) {
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
function vg(e, t) {
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
const gg = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(ni), A(n.value, {
      class: s(N)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        R(s(Go), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), hg = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(Km), A(n.value, {
      class: s(N)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ms = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(Hm), A({
      class: s(N)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yg = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Tm), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, gs = si, oo = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return gs(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const f = vs(c) || vs(p);
    return a[d][f];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, f] = c;
    return f === void 0 || (d[p] = f), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
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
  return gs(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, bg = oo(
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
), { toast: mo } = pi();
function wg() {
  return {
    info: (e) => {
      mo({
        icon: Xv,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      mo({
        icon: Yv,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      mo({
        icon: ps,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      mo({
        icon: ps,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const Qy = /* @__PURE__ */ _({
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
    } = wg();
    return X(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), X(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), X(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), X(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), C(s(sg)));
  }
}), _g = { class: "flex items-center justify-between space-y-2" }, xg = { class: "flex items-center space-x-2" }, Jy = /* @__PURE__ */ _({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", _g, [
      (h(), C(Qe(n.as), {
        class: oe(s(N)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          x(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      de("div", xg, [
        x(n.$slots, "actions")
      ])
    ]));
  }
}), Cg = /* @__PURE__ */ _({
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
    const a = ee(e, t);
    return (r, l) => (h(), C(s(nc), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eb = /* @__PURE__ */ _({
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
    const a = ee(e, t);
    return (r, l) => (h(), C(Cg, G(q(s(a))), {
      default: y(() => [
        (h(!0), z(Ee, null, Rt(r.content, (i, u) => (h(), C(s($g), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            R(s(Sg), null, {
              default: y(() => [
                x(r.$slots, u + ".title", { item: i }, () => [
                  Le(He(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            R(s(Og), null, {
              default: y(() => [
                x(r.$slots, u + ".content", { item: i }, () => [
                  Le(He(i.content), 1)
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
}), Og = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(rc), A(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
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
}), $g = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(ac), A(s(o), {
      class: s(N)("border-b", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sg = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(sc), { class: "flex" }, {
      default: y(() => [
        R(s(lc), A(n.value, {
          class: s(N)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            x(o.$slots, "default"),
            x(o.$slots, "icon", {}, () => [
              R(s(mi), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), tb = /* @__PURE__ */ _({
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
    const a = ee(e, t);
    return (r, l) => (h(), C(s(Dg), null, {
      default: y(() => [
        R(s(Bg), G(q(s(a))), {
          default: y(() => [
            R(s(Tg), {
              class: oe(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                x(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(s(Eg), G(q(r.$attrs)), {
              default: y(() => [
                x(r.$slots, "tooltip", {}, () => [
                  Le(He(r.tooltip), 1)
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
}), Bg = /* @__PURE__ */ _({
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
    const a = ee(e, t);
    return (r, l) => (h(), C(s(qm), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eg = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(Qm), null, {
      default: y(() => [
        R(s(Zm), A({ ...s(r), ...l.$attrs }, {
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
}), Dg = /* @__PURE__ */ _({
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
    return (n, o) => (h(), C(s(Um), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tg = /* @__PURE__ */ _({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ym), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nb = /* @__PURE__ */ _({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(Pc), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ob = /* @__PURE__ */ _({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ic), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ab = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(Mc), null, {
      default: y(() => [
        R(s(Vc), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(Lc), A(s(r), {
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
}), rb = /* @__PURE__ */ _({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), sb = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(zc), A(n.value, {
      class: s(N)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lb = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(jc), A(n.value, {
      class: s(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ib = /* @__PURE__ */ _({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), vi = /* @__PURE__ */ _({
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
      class: oe(s(N)(s(Sr)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Sr = oo(
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
), ub = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(Kc), A(n.value, {
      class: s(N)(s(Sr)(), t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), db = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(Nc), A(n.value, {
      class: s(N)(s(Sr)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cb = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Wc), {
      class: oe(s(N)(s(kg)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pb = /* @__PURE__ */ _({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Gc), A(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), fb = /* @__PURE__ */ _({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qc), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kg = oo(
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
), mb = /* @__PURE__ */ _({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)(s(Ag)({ variant: n.variant }), t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Ag = oo(
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
), vb = /* @__PURE__ */ _({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), gb = /* @__PURE__ */ _({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), hb = /* @__PURE__ */ _({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("p", {
      class: oe(s(N)("text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), yb = /* @__PURE__ */ _({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex items-center p-6 pt-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), bb = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), wb = /* @__PURE__ */ _({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("h3", {
      class: oe(s(N)("font-semibold leading-none tracking-tight", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
});
var hs;
const Pg = typeof window < "u", Ig = (e) => typeof e < "u", Mg = (e) => typeof e == "function";
Pg && ((hs = window == null ? void 0 : window.navigator) != null && hs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Fg(e) {
  return e;
}
function Rg(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return Yn(t, r), r;
  }, () => qn(t)];
}
function Lg(e) {
  if (!dt(e))
    return mn(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return s(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return dt(e.value[o]) && !dt(a) ? e.value[o].value = a : e.value[o] = a, !0;
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
  return mn(t);
}
function Vg(e) {
  return Lg(B(e));
}
function Br(e, ...t) {
  const n = t.flat();
  return Vg(() => Object.fromEntries(Object.entries(ve(e)).filter((o) => !n.includes(o[0]))));
}
function Ng(e) {
  return JSON.parse(JSON.stringify(e));
}
const ys = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bs = "__vueuse_ssr_handlers__";
ys[bs] = ys[bs] || {};
var ws;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ws || (ws = {}));
var zg = Object.defineProperty, _s = Object.getOwnPropertySymbols, jg = Object.prototype.hasOwnProperty, Kg = Object.prototype.propertyIsEnumerable, xs = (e, t, n) => t in e ? zg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Hg = (e, t) => {
  for (var n in t || (t = {}))
    jg.call(t, n) && xs(e, n, t[n]);
  if (_s)
    for (var n of _s(t))
      Kg.call(t, n) && xs(e, n, t[n]);
  return e;
};
const Wg = {
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
Hg({
  linear: Fg
}, Wg);
function gi(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, f = je(), m = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let v = d;
  v = d || v || `update:${t.toString()}`;
  const g = (w) => i ? Mg(i) ? i(w) : Ng(w) : w, b = () => Ig(e[t]) ? g(e[t]) : p;
  if (u) {
    const w = b(), $ = E(w);
    return X(() => e[t], (O) => $.value = g(O)), X($, (O) => {
      (O !== e[t] || c) && m(v, O);
    }, { deep: c }), $;
  } else
    return B({
      get() {
        return b();
      },
      set(w) {
        m(v, w);
      }
    });
}
function Ug(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Cs(e) {
  return Ug(e) || Array.isArray(e);
}
function Gg() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Er(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Cs(i) || !Cs(u) ? i === u : Er(i, u);
  });
}
function Os(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function qg(e, t) {
  if (e.length !== t.length) return !1;
  const n = Os(e), o = Os(t);
  return n.every((a, r) => {
    const l = o[r];
    return Er(a, l);
  });
}
function Dr(e) {
  return typeof e == "number";
}
function Ea(e) {
  return typeof e == "string";
}
function qo(e) {
  return typeof e == "boolean";
}
function $s(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Oe(e) {
  return Math.abs(e);
}
function Tr(e) {
  return Math.sign(e);
}
function Ln(e, t) {
  return Oe(e - t);
}
function Yg(e, t) {
  if (e === 0 || t === 0 || Oe(e) <= Oe(t)) return 0;
  const n = Ln(Oe(e), Oe(t));
  return Oe(n / e);
}
function Xg(e) {
  return Math.round(e * 100) / 100;
}
function Hn(e) {
  return Wn(e).map(Number);
}
function st(e) {
  return e[ao(e)];
}
function ao(e) {
  return Math.max(0, e.length - 1);
}
function kr(e, t) {
  return t === ao(e);
}
function Ss(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function Wn(e) {
  return Object.keys(e);
}
function hi(e, t) {
  return [e, t].reduce((n, o) => (Wn(o).forEach((a) => {
    const r = n[a], l = o[a], i = $s(r) && $s(l);
    n[a] = i ? hi(r, l) : l;
  }), n), {});
}
function Da(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Zg(e, t) {
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
    return Ea(e) ? n[e](u) : e(t, u, d);
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
function Qg(e, t, n, o) {
  const a = Un(), r = 1e3 / 60;
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
    l || (l = b, n(), n());
    const w = b - l;
    for (l = b, i += w; i >= r; )
      n(), i -= r;
    const $ = i / r;
    o($), u && (u = t.requestAnimationFrame(p));
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
    update: n,
    render: o
  };
}
function Jg(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = c(), u = p();
  function d(v) {
    const {
      height: g,
      width: b
    } = v;
    return o ? g : b;
  }
  function c() {
    return o ? "top" : n ? "right" : "left";
  }
  function p() {
    return o ? "bottom" : n ? "left" : "right";
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
function yi(e, t, n) {
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
    return r = l(f), p;
  }
  function d(f) {
    return c().set(i() + f);
  }
  function c() {
    return yi(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function eh(e, t, n, o, a, r, l, i, u, d, c, p, f, m, v, g, b, w, $) {
  const {
    cross: O,
    direction: D
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, T = Un(), I = Un(), F = Gt(50, 225).constrain(m.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, M = v ? 43 : 25;
  let Y = !1, W = 0, Z = 0, U = !1, ye = !1, ae = !1, j = !1;
  function J(H) {
    if (!$) return;
    function ue(Re) {
      (qo($) || $(H, Re)) && yt(Re);
    }
    const Se = t;
    T.add(Se, "dragstart", (Re) => Re.preventDefault(), P).add(Se, "touchmove", () => {
    }, P).add(Se, "touchend", () => {
    }).add(Se, "touchstart", ue).add(Se, "mousedown", ue).add(Se, "touchcancel", pe).add(Se, "contextmenu", pe).add(Se, "click", Me, !0);
  }
  function te() {
    T.clear(), I.clear();
  }
  function Ve() {
    const H = j ? n : t;
    I.add(H, "touchmove", xe, P).add(H, "touchend", pe).add(H, "mousemove", xe, P).add(H, "mouseup", pe);
  }
  function Ke(H) {
    const ue = H.nodeName || "";
    return S.includes(ue);
  }
  function Ne() {
    return (v ? L : k)[j ? "mouse" : "touch"];
  }
  function qe(H, ue) {
    const Se = p.add(Tr(H) * -1), Re = c.byDistance(H, !v).distance;
    return v || Oe(H) < F ? Re : b && ue ? Re * 0.5 : c.byIndex(Se.get(), 0).distance;
  }
  function yt(H) {
    const ue = Da(H, o);
    j = ue, ae = v && ue && !H.buttons && Y, Y = Ln(a.get(), l.get()) >= 2, !(ue && H.button !== 0) && (Ke(H.target) || (U = !0, r.pointerDown(H), d.useFriction(0).useDuration(0), a.set(l), Ve(), W = r.readPoint(H), Z = r.readPoint(H, O), f.emit("pointerDown")));
  }
  function xe(H) {
    if (!Da(H, o) && H.touches.length >= 2) return pe(H);
    const Se = r.readPoint(H), Re = r.readPoint(H, O), Ze = Ln(Se, W), tt = Ln(Re, Z);
    if (!ye && !j && (!H.cancelable || (ye = Ze > tt, !ye)))
      return pe(H);
    const Q = r.pointerMove(H);
    Ze > g && (ae = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(D(Q)), H.preventDefault();
  }
  function pe(H) {
    const Se = c.byDistance(0, !1).index !== p.get(), Re = r.pointerUp(H) * Ne(), Ze = qe(D(Re), Se), tt = Yg(Re, Ze), Q = M - 10 * tt, fe = w + tt / 50;
    ye = !1, U = !1, I.clear(), d.useDuration(Q).useFriction(fe), u.distance(Ze, !v), j = !1, f.emit("pointerUp");
  }
  function Me(H) {
    ae && (H.stopPropagation(), H.preventDefault(), ae = !1);
  }
  function $e() {
    return U;
  }
  return {
    init: J,
    destroy: te,
    pointerDown: $e
  };
}
function th(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, f) {
    const v = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (Da(p, t) ? p : p.touches[0])[v];
  }
  function i(p) {
    return o = p, a = p, l(p);
  }
  function u(p) {
    const f = l(p) - l(a), m = r(p) - r(o) > 170;
    return a = p, m && (o = p), f;
  }
  function d(p) {
    if (!o || !a) return 0;
    const f = l(a) - l(o), m = r(p) - r(o), v = r(p) - r(a) > 170, g = f / m;
    return m && !v && Oe(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function nh() {
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
function oh(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function ah(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function f(b) {
    return a.measureSize(l.measure(b));
  }
  function m(b) {
    if (!r) return;
    d = f(e), c = o.map(f);
    function w($) {
      for (const O of $) {
        if (p) return;
        const D = O.target === e, S = o.indexOf(O.target), P = D ? d : c[S], T = f(D ? e : o[S]);
        if (Oe(T - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver(($) => {
      (qo(r) || r(b, $)) && w($);
    }), n.requestAnimationFrame(() => {
      i.forEach(($) => u.observe($));
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
function rh(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function f() {
    const P = o.get() - e.get(), T = !u;
    let I = 0;
    return T ? (l = 0, n.set(o), e.set(o), I = P) : (n.set(e), l += P / u, l *= d, c += l, e.add(l), I = c - p), i = Tr(I), p = c, S;
  }
  function m() {
    const P = o.get() - t.get();
    return Oe(P) < 1e-3;
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
    duration: v,
    velocity: b,
    seek: f,
    settled: m,
    useBaseFriction: $,
    useBaseDuration: w,
    useFriction: D,
    useDuration: O
  };
  return S;
}
function sh(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = Gt(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(m) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = Oe(e[v] - t.get()), b = n.get() - t.get(), w = i.constrain(g / l);
    n.subtract(b * w), !m && Oe(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
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
function lh(e, t, n, o, a) {
  const r = Gt(-t + e, 0), l = p(), i = c(), u = f();
  function d(v, g) {
    return Ln(v, g) <= 1;
  }
  function c() {
    const v = l[0], g = st(l), b = l.lastIndexOf(v), w = l.indexOf(g) + 1;
    return Gt(b, w);
  }
  function p() {
    return n.map((v, g) => {
      const {
        min: b,
        max: w
      } = r, $ = r.constrain(v), O = !g, D = kr(n, g);
      return O ? w : D || d(b, $) ? b : d(w, $) ? w : $;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function f() {
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
function ih(e, t, n) {
  const o = t[0], a = n ? o - e : st(t);
  return {
    limit: Gt(a, o)
  };
}
function uh(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = Gt(r, l);
  function d(f) {
    return f === 1 ? u(n.get()) : f === -1 ? i(n.get()) : !1;
  }
  function c(f) {
    if (!d(f)) return;
    const m = e * (f * -1);
    o.forEach((v) => v.add(m));
  }
  return {
    loop: c
  };
}
function dh(e) {
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
function ch(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = f(), c = m();
  function p() {
    return i(o).map((g) => st(g)[l] - g[0][r]).map(Oe);
  }
  function f() {
    return o.map((g) => n[r] - g[r]).map((g) => -Oe(g));
  }
  function m() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function ph(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const f = l(r), m = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : m ? f : f.slice(i, u).map((v, g, b) => {
      const w = !g, $ = kr(b, g);
      if (w) {
        const O = st(b[0]) + 1;
        return Ss(O);
      }
      if ($) {
        const O = ao(r) - st(b)[0] + 1;
        return Ss(O, st(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function fh(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(v) {
    return v.concat().sort((g, b) => Oe(g) - Oe(b))[0];
  }
  function d(v) {
    const g = e ? l(v) : i(v), b = t.map(($, O) => ({
      diff: c($ - g, 0),
      index: O
    })).sort(($, O) => Oe($.diff) - Oe(O.diff)), {
      index: w
    } = b[0];
    return {
      index: w,
      distance: g
    };
  }
  function c(v, g) {
    const b = [v, v + n, v - n];
    if (!e) return v;
    if (!g) return u(b);
    const w = b.filter(($) => Tr($) === g);
    return w.length ? u(w) : st(b) - n;
  }
  function p(v, g) {
    const b = t[v] - a.get(), w = c(b, g);
    return {
      index: v,
      distance: w
    };
  }
  function f(v, g) {
    const b = a.get() + v, {
      index: w,
      distance: $
    } = d(b), O = !e && r(b);
    if (!g || O) return {
      index: w,
      distance: v
    };
    const D = t[w] - $, S = v + c(D, 0);
    return {
      index: w,
      distance: S
    };
  }
  return {
    byDistance: f,
    byIndex: p,
    shortcut: c
  };
}
function mh(e, t, n, o, a, r, l) {
  function i(p) {
    const f = p.distance, m = p.index !== t.get();
    r.add(f), f && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (n.set(t.get()), t.set(p.index), l.emit("select"));
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
function vh(e, t, n, o, a, r, l, i) {
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
      const $ = n.findIndex((O) => O.includes(g));
      Dr($) && (a.useDuration(0), o.index($, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, b) => {
      r.add(g, "focus", (w) => {
        (qo(i) || i(m, w)) && v(b);
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
    return Dr(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function bi(e, t) {
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
    const m = Xg(e.direction(f));
    m !== a && (o.transform = n(m), a = m);
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
function gh(e, t, n, o, a, r, l, i, u) {
  const c = Hn(a), p = Hn(a).reverse(), f = w().concat($());
  function m(T, I) {
    return T.reduce((F, k) => F - a[k], I);
  }
  function v(T, I) {
    return T.reduce((F, k) => m(F, I) > 0 ? F.concat([k]) : F, []);
  }
  function g(T) {
    return r.map((I, F) => ({
      start: I - o[F] + 0.5 + T,
      end: I + t - 0.5 + T
    }));
  }
  function b(T, I, F) {
    const k = g(I);
    return T.map((L) => {
      const M = F ? 0 : -n, Y = F ? n : 0, W = F ? "end" : "start", Z = k[L][W];
      return {
        index: L,
        loopPoint: Z,
        slideLocation: Fn(-1),
        translate: bi(e, u[L]),
        target: () => i.get() > Z ? M : Y
      };
    });
  }
  function w() {
    const T = l[0], I = v(p, T);
    return b(I, n, !1);
  }
  function $() {
    const T = t - l[0] - 1, I = v(c, T);
    return b(I, -n, !0);
  }
  function O() {
    return f.every(({
      index: T
    }) => {
      const I = c.filter((F) => F !== T);
      return m(I, t) <= 0.1;
    });
  }
  function D() {
    f.forEach((T) => {
      const {
        target: I,
        translate: F,
        slideLocation: k
      } = T, L = I();
      L !== k.get() && (F.to(L), k.set(L));
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
function hh(e, t, n) {
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
      a || (qo(n) || n(u, c)) && d(c);
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
function yh(e, t, n, o) {
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
  function c() {
    i && i.disconnect(), u = !0;
  }
  function p(v) {
    return Wn(a).reduce((g, b) => {
      const w = parseInt(b), {
        isIntersecting: $
      } = a[w];
      return (v && $ || !v && !$) && g.push(w), g;
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
function bh(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = v(), p = g(), f = n.map(l), m = b();
  function v() {
    if (!d) return 0;
    const $ = n[0];
    return Oe(t[i] - $[i]);
  }
  function g() {
    if (!d) return 0;
    const $ = r.getComputedStyle(st(o));
    return parseFloat($.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map(($, O, D) => {
      const S = !O, P = kr(D, O);
      return S ? f[O] + c : P ? f[O] + p : D[O + 1][i] - $[i];
    }).map(Oe);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: m,
    startGap: c,
    endGap: p
  };
}
function wh(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, f = Dr(n);
  function m(w, $) {
    return Hn(w).filter((O) => O % $ === 0).map((O) => w.slice(O, O + $));
  }
  function v(w) {
    return w.length ? Hn(w).reduce(($, O, D) => {
      const S = st($) || 0, P = S === 0, T = O === ao(w), I = a[d] - r[S][d], F = a[d] - r[O][c], k = !o && P ? p(l) : 0, L = !o && T ? p(i) : 0, M = Oe(F - L - (I + k));
      return D && M > t + u && $.push(O), T && $.push(w.length), $;
    }, []).map(($, O, D) => {
      const S = Math.max(D[O - 1] || 0);
      return w.slice(S, $);
    }) : [];
  }
  function g(w) {
    return f ? m(w, n) : v(w);
  }
  return {
    groupSlides: g
  };
}
function _h(e, t, n, o, a, r, l) {
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
    skipSnaps: w,
    containScroll: $,
    watchResize: O,
    watchSlides: D,
    watchDrag: S,
    watchFocus: P
  } = r, T = 2, I = nh(), F = I.measure(t), k = n.map(I.measure), L = Jg(u, d), M = L.measureSize(F), Y = oh(M), W = Zg(i, M), Z = !p && !!$, U = p || !!$, {
    slideSizes: ye,
    slideSizesWithGaps: ae,
    startGap: j,
    endGap: J
  } = bh(L, F, k, n, U, a), te = wh(L, M, b, p, F, k, j, J, T), {
    snaps: Ve,
    snapsAligned: Ke
  } = ch(L, W, F, k, te), Ne = -st(Ve) + st(ae), {
    snapsContained: qe,
    scrollContainLimit: yt
  } = lh(M, Ne, Ke, $, T), xe = Z ? qe : Ke, {
    limit: pe
  } = ih(Ne, xe, p), Me = yi(ao(xe), c, p), $e = Me.clone(), ge = Hn(n), H = ({
    dragHandler: wt,
    scrollBody: nt,
    scrollBounds: nn,
    options: {
      loop: on
    }
  }) => {
    on || nn.constrain(wt.pointerDown()), nt.seek();
  }, ue = ({
    scrollBody: wt,
    translate: nt,
    location: nn,
    offsetLocation: on,
    previousLocation: _t,
    scrollLooper: an,
    slideLooper: so,
    dragHandler: Mi,
    animation: Fi,
    eventHandler: Lr,
    scrollBounds: Ri,
    options: {
      loop: Vr
    }
  }, Nr) => {
    const zr = wt.settled(), Li = !Ri.shouldConstrain(), jr = Vr ? zr : zr && Li, Kr = jr && !Mi.pointerDown();
    Kr && Fi.stop();
    const Vi = nn.get() * Nr + _t.get() * (1 - Nr);
    on.set(Vi), Vr && (an.loop(wt.direction()), so.loop()), nt.to(on.get()), Kr && Lr.emit("settle"), jr || Lr.emit("scroll");
  }, Se = Qg(o, a, () => H(Kt), (wt) => ue(Kt, wt)), Re = 0.68, Ze = xe[Me.get()], tt = Fn(Ze), Q = Fn(Ze), fe = Fn(Ze), be = Fn(Ze), ce = rh(tt, fe, Q, be, f, Re), Be = fh(p, xe, Ne, pe, be), Ae = mh(Se, Me, $e, ce, Be, be, l), We = dh(pe), bt = Un(), tn = yh(t, n, l, g), {
    slideRegistry: jt
  } = ph(Z, $, xe, yt, te, ge), ro = vh(e, n, jt, Ae, ce, bt, l, P), Kt = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: F,
    slideRects: k,
    animation: Se,
    axis: L,
    dragHandler: eh(L, e, o, a, be, th(L, a), tt, Se, Ae, ce, Be, Me, l, Y, m, v, w, Re, S),
    eventStore: bt,
    percentOfView: Y,
    index: Me,
    indexPrevious: $e,
    limit: pe,
    location: tt,
    offsetLocation: fe,
    previousLocation: Q,
    options: r,
    resizeHandler: ah(t, l, a, n, L, O, I),
    scrollBody: ce,
    scrollBounds: sh(pe, fe, be, ce, Y),
    scrollLooper: uh(Ne, pe, fe, [tt, fe, Q, be]),
    scrollProgress: We,
    scrollSnapList: xe.map(We.get),
    scrollSnaps: xe,
    scrollTarget: Be,
    scrollTo: Ae,
    slideLooper: gh(L, M, Ne, ye, ae, Ve, xe, fe, n),
    slideFocus: ro,
    slidesHandler: hh(t, l, D),
    slidesInView: tn,
    slideIndexes: ge,
    slideRegistry: jt,
    slidesToScroll: te,
    target: be,
    translate: bi(L, t)
  };
  return Kt;
}
function xh() {
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
const Ch = {
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
function Oh(e) {
  function t(r, l) {
    return hi(r, l || {});
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
function $h(e) {
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
function Eo(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = Oh(a), l = $h(r), i = Un(), u = xh(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: f,
    off: m,
    emit: v
  } = u, g = L;
  let b = !1, w, $ = d(Ch, Eo.globalOptions), O = d($), D = [], S, P, T;
  function I() {
    const {
      container: ge,
      slides: H
    } = O;
    P = (Ea(ge) ? e.querySelector(ge) : ge) || e.children[0];
    const Se = Ea(H) ? P.querySelectorAll(H) : H;
    T = [].slice.call(Se || P.children);
  }
  function F(ge) {
    const H = _h(e, P, T, o, a, ge, u);
    if (ge.loop && !H.slideLooper.canLoop()) {
      const ue = Object.assign({}, ge, {
        loop: !1
      });
      return F(ue);
    }
    return H;
  }
  function k(ge, H) {
    b || ($ = d($, ge), O = c($), D = H || D, I(), w = F(O), p([$, ...D.map(({
      options: ue
    }) => ue)]).forEach((ue) => i.add(ue, "change", L)), O.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init($e), w.eventHandler.init($e), w.resizeHandler.init($e), w.slidesHandler.init($e), w.options.loop && w.slideLooper.loop(), P.offsetParent && T.length && w.dragHandler.init($e), S = l.init($e, D)));
  }
  function L(ge, H) {
    const ue = te();
    M(), k(d({
      startIndex: ue
    }, ge), H), u.emit("reInit");
  }
  function M() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), l.destroy(), i.clear();
  }
  function Y() {
    b || (b = !0, i.clear(), M(), u.emit("destroy"), u.clear());
  }
  function W(ge, H, ue) {
    !O.active || b || (w.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : O.duration), w.scrollTo.index(ge, ue || 0));
  }
  function Z(ge) {
    const H = w.index.add(1).get();
    W(H, ge, -1);
  }
  function U(ge) {
    const H = w.index.add(-1).get();
    W(H, ge, 1);
  }
  function ye() {
    return w.index.add(1).get() !== te();
  }
  function ae() {
    return w.index.add(-1).get() !== te();
  }
  function j() {
    return w.scrollSnapList;
  }
  function J() {
    return w.scrollProgress.get(w.offsetLocation.get());
  }
  function te() {
    return w.index.get();
  }
  function Ve() {
    return w.indexPrevious.get();
  }
  function Ke() {
    return w.slidesInView.get();
  }
  function Ne() {
    return w.slidesInView.get(!1);
  }
  function qe() {
    return S;
  }
  function yt() {
    return w;
  }
  function xe() {
    return e;
  }
  function pe() {
    return P;
  }
  function Me() {
    return T;
  }
  const $e = {
    canScrollNext: ye,
    canScrollPrev: ae,
    containerNode: pe,
    internalEngine: yt,
    destroy: Y,
    off: m,
    on: f,
    emit: v,
    plugins: qe,
    previousScrollSnap: Ve,
    reInit: g,
    rootNode: xe,
    scrollNext: Z,
    scrollPrev: U,
    scrollProgress: J,
    scrollSnapList: j,
    scrollTo: W,
    selectedScrollSnap: te,
    slideNodes: Me,
    slidesInView: Ke,
    slidesNotInView: Ne
  };
  return k(t, n), setTimeout(() => u.emit("init"), 0), $e;
}
Eo.globalOptions = void 0;
function Ar(e = {}, t = []) {
  const n = dt(e), o = dt(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Vn(), i = Vn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return le(() => {
    !Gg() || !l.value || (Eo.globalOptions = Ar.globalOptions, i.value = Eo(l.value, a, r));
  }), bn(() => {
    i.value && i.value.destroy();
  }), n && X(e, (d) => {
    Er(a, d) || (a = d, u());
  }), o && X(t, (d) => {
    qg(r, d) || (r = d, u());
  }), [l, i];
}
Ar.globalOptions = void 0;
const [Sh, Bh] = Rg(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Ar(
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
      var p, f, m;
      r.value && ((p = r.value) == null || p.on("init", c), (f = r.value) == null || f.on("reInit", c), (m = r.value) == null || m.on("select", c), o("init-api", r.value));
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
  const e = Bh();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const _b = /* @__PURE__ */ _({
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
    } = Sh(o, a);
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
      const v = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (m.key === v) {
        m.preventDefault(), p();
        return;
      }
      m.key === g && (m.preventDefault(), c());
    }
    return (m, v) => (h(), z("div", {
      class: oe(s(N)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: f
    }, [
      x(m.$slots, "default", {
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
}), xb = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = Yo();
    return (a, r) => (h(), z("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      de("div", A({
        class: s(N)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        x(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), Cb = /* @__PURE__ */ _({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = Yo();
    return (o, a) => (h(), z("div", {
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
}), Ob = /* @__PURE__ */ _({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = Yo();
    return (r, l) => (h(), C(s(vi), {
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
          R(s(ug), { class: "size-4 text-current" }),
          l[0] || (l[0] = de("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), $b = /* @__PURE__ */ _({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = Yo();
    return (r, l) => (h(), C(s(vi), {
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
          R(s(dg), { class: "size-4 text-current" }),
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
const Eh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vo = {
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
const Dh = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => ze(
  "svg",
  {
    ...vo,
    width: e || vo.width,
    height: e || vo.height,
    stroke: o || vo.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Eh(r ?? "icon")}`],
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
const Th = (e, t) => (n, { slots: o }) => ze(
  Dh,
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
const kh = Th("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
function Pr(e) {
  return e ? e.flatMap((t) => t.type === Ee ? Pr(t.children) : [t]) : [];
}
const Ta = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u, d;
      if (!n.default)
        return null;
      const o = Pr(n.default()), a = o.findIndex((c) => c.type !== Na);
      if (a === -1)
        return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? A(t, r.props) : t;
      t.class && ((d = r.props) != null && d.class) && delete r.props.class;
      const i = zs(r, l);
      for (const c in l)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = l[c]);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), Ah = ["area", "img", "input"], ut = _({
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
    return typeof o == "string" && Ah.includes(o) ? () => ze(o, t) : o !== "template" ? () => ze(e.as, t, { default: n.default }) : () => ze(Ta, t, { default: n.default });
  }
}), Ph = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), C(s(ut), {
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
function wi(e) {
  return Ma() ? (Fa(e), !0) : !1;
}
function Ih(e) {
  let t = !1, n;
  const o = Ao(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Mh(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = Ao(!0), n = o.run(() => e(...r))), wi(a), n);
}
const en = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Fh = (e) => typeof e < "u", Rh = Object.prototype.toString, Lh = (e) => Rh.call(e) === "[object Object]", Bs = /* @__PURE__ */ Vh();
function Vh() {
  var e, t;
  return en && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Nh(e) {
  return je();
}
function da(e) {
  return Array.isArray(e) ? e : [e];
}
const zh = dn;
function jh(e, t) {
  Nh() && bn(e, t);
}
function Kh(e, t, n) {
  return X(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ir = en ? window : void 0;
function Tn(e) {
  var t;
  const n = dn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function _i(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = B(() => {
    const i = da(dn(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Kh(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => Tn(d))) != null ? u : [Ir].filter((d) => d != null),
        da(dn(a.value ? e[1] : e[0])),
        da(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        dn(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = Lh(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (f) => u.flatMap(
            (m) => d.map((v) => o(f, m, v, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), n();
  };
  return wi(n), l;
}
function Hh() {
  const e = Vn(!1), t = je();
  return t && le(() => {
    e.value = !0;
  }, t), e;
}
function Wh(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Uh(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Ir,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = Wh(t);
  return _i(a, r, (c) => {
    c.repeat && dn(i) || u(c) && n(c);
  }, l);
}
function Gh(e) {
  return JSON.parse(JSON.stringify(e));
}
function xi(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, m = je(), v = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (O) => i ? typeof i == "function" ? i(O) : Gh(O) : O, w = () => Fh(e[t]) ? b(e[t]) : p, $ = (O) => {
    f ? f(O) && v(g, O) : v(g, O);
  };
  if (u) {
    const O = w(), D = E(O);
    let S = !1;
    return X(
      () => e[t],
      (P) => {
        S || (S = !0, D.value = b(P), ne(() => S = !1));
      }
    ), X(
      D,
      (P) => {
        !S && (P !== e[t] || c) && $(P);
      },
      { deep: c }
    ), D;
  } else
    return B({
      get() {
        return w();
      },
      set(O) {
        $(O);
      }
    });
}
function kn(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = qn(o, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (l) => (Yn(o, l), l)];
}
function Es(e) {
  return typeof e == "string" ? `'${e}'` : new qh().serialize(e);
}
const qh = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      Wr(this, t, /* @__PURE__ */ new Map());
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
      let a = An(this, t).get(o);
      return a === void 0 && (An(this, t).set(o, `#${An(this, t).size}`), a = this.serializeObject(o), An(this, t).set(o, a)), a;
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
function ka(e, t) {
  return e === t || Es(e) === Es(t);
}
function Aa(e) {
  return e == null;
}
function Ds(e, t) {
  return Aa(e) ? !1 : Array.isArray(e) ? e.some((n) => ka(n, t)) : ka(e, t);
}
const [Ci, Sb] = kn("ConfigProvider");
function Ge() {
  const e = je(), t = E(), n = B(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Tn(t);
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
let Yh = 0;
function Do(e, t = "reka") {
  const n = Ci({ useId: void 0 });
  return xo.useId ? `${t}-${xo.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Yh}`;
}
function Xh(e, t) {
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
function Zh(e, t) {
  var b;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Ir, { state: u, dispatch: d } = Xh(r, {
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
  }), c = (w) => {
    var $;
    if (en) {
      const O = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      ($ = t.value) == null || $.dispatchEvent(O);
    }
  };
  X(
    e,
    async (w, $) => {
      var D;
      const O = $ !== w;
      if (await ne(), O) {
        const S = o.value, P = go(t.value);
        w ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((D = n.value) == null ? void 0 : D.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : $ && S !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (w) => {
    const $ = go(t.value), O = $.includes(
      w.animationName
    ), D = u.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && O && (c(`after-${D}`), d("ANIMATION_END"), !a.value)) {
      const S = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = S);
      });
    }
    w.target === t.value && $ === "none" && d("ANIMATION_END");
  }, f = (w) => {
    w.target === t.value && (o.value = go(t.value));
  }, m = X(
    t,
    (w, $) => {
      w ? (n.value = getComputedStyle(w), w.addEventListener("animationstart", f), w.addEventListener("animationcancel", p), w.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), $ == null || $.removeEventListener("animationstart", f), $ == null || $.removeEventListener("animationcancel", p), $ == null || $.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), v = X(u, () => {
    const w = go(t.value);
    o.value = u.value === "mounted" ? w : "none";
  });
  return Ue(() => {
    m(), v();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function go(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Mr = _({
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
    const { present: o, forceMount: a } = ve(e), r = E(), { isPresent: l } = Zh(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = Pr(i || []);
    const u = je();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
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
    return () => a.value || o.value || l.value ? ze(t.default({ present: l.value })[0], {
      ref: (c) => {
        const p = Tn(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
}), [ht, Qh] = kn("DialogRoot"), Jh = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, a = xi(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = ve(n);
    return Qh({
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
    }), (u, d) => x(u.$slots, "default", { open: s(a) });
  }
}), e0 = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    Ge();
    const n = ht();
    return (o, a) => (h(), C(s(ut), A(t, {
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
function Xo(e) {
  const t = je(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[Ns(ko(a))] = (...r) => e(a, ...r);
  }), o;
}
function Oi(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
const t0 = "dismissableLayer.pointerDownOutside", n0 = "dismissableLayer.focusOutside";
function $i(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function o0(e, t) {
  var r;
  const n = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = E(!1), a = E(() => {
  });
  return me((l) => {
    if (!en)
      return;
    const i = async (d) => {
      const c = d.target;
      if (!(!(t != null && t.value) || !c)) {
        if ($i(t.value, c)) {
          o.value = !1;
          return;
        }
        if (d.target && !o.value) {
          let p = function() {
            Oi(
              t0,
              e,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (n.removeEventListener("click", a.value), a.value = p, n.addEventListener("click", a.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", a.value);
        o.value = !1;
      }
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", i), n.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function a0(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = E(!1);
  return me((r) => {
    if (!en)
      return;
    const l = async (i) => {
      if (!(t != null && t.value))
        return;
      await ne(), await ne();
      const u = i.target;
      !t.value || !u || $i(t.value, u) || i.target && !o.value && Oi(
        n0,
        e,
        { originalEvent: i }
      );
    };
    n.addEventListener("focusin", l), r(() => n.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const Ot = mn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), r0 = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ge(), l = B(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => Ot.layersRoot), u = B(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = B(() => Ot.layersWithOutsidePointerEventsDisabled.size > 0), c = B(() => {
      const v = Array.from(i.value), [g] = [...Ot.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), p = o0(async (v) => {
      const g = [...Ot.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await ne(), v.defaultPrevented || o("dismiss"));
    }, r), f = a0((v) => {
      [...Ot.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, r);
    Uh("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let m;
    return me((v) => {
      r.value && (n.disableOutsidePointerEvents && (Ot.layersWithOutsidePointerEventsDisabled.size === 0 && (m = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ot.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && Ot.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = m);
      }));
    }), me((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), Ot.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (h(), C(s(ut), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Tt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        x(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function pt() {
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
    var c;
    document.getElementById(o) || console.warn(l);
    const d = (c = r.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const d0 = Ih(() => E([]));
function c0() {
  const e = d0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Ts(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Ts(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Ts(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function p0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ca = "focusScope.autoFocusOnMount", pa = "focusScope.autoFocusOnUnmount", ks = { bubbles: !1, cancelable: !0 };
function f0(e, { select: t = !1 } = {}) {
  const n = pt();
  for (const o of e)
    if (Mt(o, { select: t }), pt() !== n)
      return !0;
}
function m0(e) {
  const t = Si(e), n = As(t, e), o = As(t.reverse(), e);
  return [n, o];
}
function Si(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function As(e, t) {
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
function Mt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = pt();
    e.focus({ preventScroll: !0 }), e !== n && g0(e) && t && e.select();
  }
}
const h0 = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = Ge(), l = E(null), i = c0(), u = mn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    me((c) => {
      if (!en)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function f(b) {
        if (u.paused || !p)
          return;
        const w = b.target;
        p.contains(w) ? l.value = w : Mt(l.value, { select: !0 });
      }
      function m(b) {
        if (u.paused || !p)
          return;
        const w = b.relatedTarget;
        w !== null && (p.contains(w) || Mt(l.value, { select: !0 }));
      }
      function v(b) {
        p.contains(l.value) || Mt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const g = new MutationObserver(v);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), g.disconnect();
      });
    }), me(async (c) => {
      const p = r.value;
      if (await ne(), !p)
        return;
      i.add(u);
      const f = pt();
      if (!p.contains(f)) {
        const v = new CustomEvent(ca, ks);
        p.addEventListener(ca, (g) => o("mountAutoFocus", g)), p.dispatchEvent(v), v.defaultPrevented || (f0(p0(Si(p)), {
          select: !0
        }), pt() === f && Mt(p));
      }
      c(() => {
        p.removeEventListener(ca, (b) => o("mountAutoFocus", b));
        const v = new CustomEvent(pa, ks), g = (b) => {
          o("unmountAutoFocus", b);
        };
        p.addEventListener(pa, g), p.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Mt(f ?? document.body, { select: !0 }), p.removeEventListener(pa, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = pt();
      if (p && f) {
        const m = c.currentTarget, [v, g] = m0(m);
        v && g ? !c.shiftKey && f === g ? (c.preventDefault(), n.loop && Mt(v, { select: !0 })) : c.shiftKey && f === v && (c.preventDefault(), n.loop && Mt(g, { select: !0 })) : f === m && c.preventDefault();
      }
    }
    return (c, p) => (h(), C(s(ut), {
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
}), Bi = /* @__PURE__ */ _({
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
    const n = e, o = t, a = ht(), { forwardRef: r, currentElement: l } = Ge();
    return a.titleId || (a.titleId = Do(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = Do(void 0, "reka-dialog-description")), le(() => {
      a.contentElement = l, pt() !== document.body && (a.triggerElement.value = pt());
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
        R(s(r0), A({
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
var y0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ln = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), yo = {}, fa = 0, Ei = function(e) {
  return e && (e.host || Ei(e.parentNode));
}, b0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ei(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, w0 = function(e, t, n, o) {
  var a = b0(t, Array.isArray(e) ? e : [e]);
  yo[n] || (yo[n] = /* @__PURE__ */ new WeakMap());
  var r = yo[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(o), v = m !== null && m !== "false", g = (ln.get(f) || 0) + 1, b = (r.get(f) || 0) + 1;
          ln.set(f, g), r.set(f, b), l.push(f), g === 1 && v && ho.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return c(t), i.clear(), fa++, function() {
    l.forEach(function(p) {
      var f = ln.get(p) - 1, m = r.get(p) - 1;
      ln.set(p, f), r.set(p, m), f || (ho.has(p) || p.removeAttribute(o), ho.delete(p)), m || p.removeAttribute(n);
    }), fa--, fa || (ln = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), yo = {});
  };
}, _0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = y0(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), w0(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function x0(e) {
  let t;
  X(() => Tn(e), (n) => {
    n ? t = _0(n) : t && t();
  }), Ue(() => {
    t && t();
  });
}
const C0 = /* @__PURE__ */ _({
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
    const n = e, o = t, a = ht(), r = Xo(o), { forwardRef: l, currentElement: i } = Ge();
    return x0(i), (u, d) => (h(), C(Bi, A({ ...n, ...s(r) }, {
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
}), O0 = /* @__PURE__ */ _({
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
    const n = e, a = Xo(t);
    Ge();
    const r = ht(), l = E(!1), i = E(!1);
    return (u, d) => (h(), C(Bi, A({ ...n, ...s(a) }, {
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
      default: y(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $0 = /* @__PURE__ */ _({
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
    const n = e, o = t, a = ht(), r = Xo(o), { forwardRef: l } = Ge();
    return (i, u) => (h(), C(s(Mr), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(C0, A({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(O0, A({
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
}), S0 = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    Ge();
    const n = ht();
    return (o, a) => (h(), C(s(ut), A(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function ma(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Pa(e, t, n = ".", o) {
  if (!ma(t))
    return Pa(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : ma(l) && ma(a[r]) ? a[r] = Pa(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function B0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Pa(n, o, "", e), {})
  );
}
const E0 = B0(), D0 = Mh(() => {
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
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Bs && (a == null || a()), t.value = void 0;
  };
  return X(n, (l, i) => {
    var p;
    if (!en)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (p = o.scrollBody) != null && p.value ? typeof o.scrollBody.value == "object" ? E0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Bs && (a = _i(
      document,
      "touchmove",
      (f) => k0(f),
      { passive: !1 }
    )), ne(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function T0(e) {
  const t = Math.random().toString(36).substring(2, 7), n = D0();
  n.value.set(t, e);
  const o = B({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return jh(() => {
    n.value.delete(t);
  }), o;
}
function Di(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Di(n);
  }
}
function k0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Di(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const A0 = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ht();
    return T0(!0), Ge(), (n, o) => (h(), C(s(ut), {
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
}), P0 = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ht(), { forwardRef: n } = Ge();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(Mr), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          R(A0, A(o.$attrs, {
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
      }, 8, ["present"])) : he("", !0);
    };
  }
}), I0 = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Hh();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Gn, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      x(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : he("", !0);
  }
});
function M0(e) {
  const t = je(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = Ls(e);
  return B(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[ko(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Fr(e, t) {
  const n = M0(e), o = t ? Xo(t) : {};
  return B(() => ({
    ...n.value,
    ...o
  }));
}
const F0 = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = ht();
    return Ge(), (o, a) => (h(), C(s(ut), A(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), R0 = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ht(), { forwardRef: o, currentElement: a } = Ge();
    return n.contentId || (n.contentId = Do(void 0, "reka-dialog-content")), le(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(ut), A(t, {
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
function Ia() {
  const e = E(), t = B(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Tn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function L0(e) {
  return B(() => {
    var t;
    return zh(e) ? !!((t = Tn(e)) != null && t.closest("form")) : !0;
  });
}
const Ps = "data-reka-collection-item";
function V0(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: c
    }, Yn(o, a);
  } else
    a = qn(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p)
      return [];
    const f = Array.from(p.querySelectorAll(`[${Ps}]`)), v = Array.from(a.itemMap.value.values()).sort(
      (g, b) => f.indexOf(g.ref) - f.indexOf(b.ref)
    );
    return c ? v : v.filter((g) => g.ref.dataset.disabled !== "");
  }, l = _({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: f, currentElement: m } = Ia();
      return X(m, () => {
        a.collectionRef.value = m.value;
      }), () => ze(Ta, { ref: f }, p);
    }
  }), i = _({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(c, { slots: p, attrs: f }) {
      const { primitiveElement: m, currentElement: v } = Ia();
      return me((g) => {
        if (v.value) {
          const b = js(v.value);
          a.itemMap.value.set(b, { ref: v.value, value: c.value }), g(() => a.itemMap.value.delete(b));
        }
      }), () => ze(Ta, { ...f, [Ps]: "", ref: m }, p);
    }
  }), u = B(() => Array.from(a.itemMap.value.values())), d = B(() => a.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: l, CollectionItem: i };
}
const N0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function z0(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function j0(e, t, n) {
  const o = z0(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return N0[o];
}
function K0(e, t = !1) {
  const n = pt();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), pt() !== n))
      return;
}
function H0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [W0, Bb] = kn("RovingFocusGroup"), Is = /* @__PURE__ */ _({
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
    const t = e, { primitiveElement: n, currentElement: o } = Ia(), a = B(() => t.checked ?? t.value);
    return X(a, (r, l) => {
      if (!o.value)
        return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(f);
      }
    }), (r, l) => (h(), C(Ph, A({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), U0 = /* @__PURE__ */ _({
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
    return (a, r) => n.value ? (h(), C(Is, A({ key: a.name }, { ...t, ...a.$attrs }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), z(Ee, { key: 1 }, Rt(o.value, (l) => (h(), C(Is, A({
      key: l.name,
      ref_for: !0
    }, { ...t, ...a.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [G0, Eb] = kn("CheckboxGroupRoot");
function To(e) {
  return e === "indeterminate";
}
function Ti(e) {
  return To(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const q0 = /* @__PURE__ */ _({
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
    const t = e, n = W0(), o = Do(), a = B(() => t.tabStopId || o), r = B(
      () => n.currentTabStopId.value === a.value
    ), { getItems: l, CollectionItem: i } = V0();
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
      if (d.target !== d.currentTarget)
        return;
      const c = j0(
        d,
        n.orientation.value,
        n.dir.value
      );
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey)
          return;
        d.preventDefault();
        let p = [...l().map((f) => f.ref).filter((f) => f.dataset.disabled !== "")];
        if (c === "last")
          p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const f = p.indexOf(
            d.currentTarget
          );
          p = n.loop.value ? H0(p, f + 1) : p.slice(f + 1);
        }
        ne(() => K0(p));
      }
    }
    return (d, c) => (h(), C(s(i), null, {
      default: y(() => [
        R(s(ut), {
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
          default: y(() => [
            x(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Y0, X0] = kn("CheckboxRoot"), Z0 = /* @__PURE__ */ _({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = Ge(), l = G0(null), i = xi(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = B(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = B(() => Aa(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : Ds(l.modelValue.value, n.value));
    function c() {
      if (Aa(l == null ? void 0 : l.modelValue.value))
        i.value = To(i.value) ? !0 : !i.value;
      else {
        const m = [...l.modelValue.value || []];
        if (Ds(m, n.value)) {
          const v = m.findIndex((g) => ka(g, n.value));
          m.splice(v, 1);
        } else
          m.push(n.value);
        l.modelValue.value = m;
      }
    }
    const p = L0(r), f = B(() => {
      var m;
      return n.id && r.value ? (m = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : m.innerText : void 0;
    });
    return X0({
      disabled: u,
      state: d
    }), (m, v) => {
      var g, b;
      return h(), C(Qe((g = s(l)) != null && g.rovingFocus.value ? s(q0) : s(ut)), A(m.$attrs, {
        id: m.id,
        ref: s(a),
        role: "checkbox",
        "as-child": m.asChild,
        as: m.as,
        type: m.as === "button" ? "button" : void 0,
        "aria-checked": s(To)(d.value) ? "mixed" : d.value,
        "aria-required": m.required,
        "aria-label": m.$attrs["aria-label"] || f.value,
        "data-state": s(Ti)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (b = s(l)) != null && b.rovingFocus.value ? !u.value : void 0,
        onKeydown: Ft(Te(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [
          x(m.$slots, "default", {
            modelValue: s(i),
            state: d.value
          }),
          s(p) && m.name && !s(l) ? (h(), C(s(U0), {
            key: 0,
            type: "checkbox",
            checked: !!d.value,
            name: m.name,
            value: m.value,
            disabled: u.value,
            required: m.required
          }, null, 8, ["checked", "name", "value", "disabled", "required"])) : he("", !0)
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "focusable", "onKeydown"]);
    };
  }
}), Q0 = /* @__PURE__ */ _({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = Ge(), n = Y0();
    return (o, a) => (h(), C(s(Mr), {
      present: o.forceMount || s(To)(s(n).state.value) || s(n).state.value === !0
    }, {
      default: y(() => [
        R(s(ut), A({
          ref: s(t),
          "data-state": s(Ti)(s(n).state.value),
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
}), J0 = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(I0), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Db = /* @__PURE__ */ _({
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
    }), r = Fr(a, o);
    return (l, i) => (h(), C(s(Z0), A(s(r), {
      class: s(N)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        R(s(Q0), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            x(l.$slots, "default", {}, () => [
              R(s(kh), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ey = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(op), A(s(r), {
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
}), ty = /* @__PURE__ */ _({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(rr), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tb = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Xt), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kb = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(sr), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ab = /* @__PURE__ */ _({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Pb = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(cr), A(s(o), {
      class: s(N)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ib = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(pr), A(s(o), {
      class: s(N)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ny = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(lr), null, {
      default: y(() => [
        R(s(jo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(zo), A(s(r), {
          class: s(N)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            x(l.$slots, "default"),
            R(s(Xt), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                R(s(Go), { class: "size-4" }),
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
}), Mb = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(lr), null, {
      default: y(() => [
        R(s(jo), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            R(s(zo), A({
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
                R(s(Xt), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    R(s(Go), { class: "h-4 w-4" }),
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
}), Fb = /* @__PURE__ */ _({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Rb = /* @__PURE__ */ _({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(ty), G(q(s(a))), {
      default: y(() => [
        R(s(ny), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            R(ey, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), Lb = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(cp), A(n.value, {
      class: s(N)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vb = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(sp), A(n.value, {
      class: s(N)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), C(s(lp), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Le(He(o.heading), 1)
          ]),
          _: 1
        })) : he("", !0),
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oy = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Nb = /* @__PURE__ */ _({
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
    return (a, r) => (h(), z("div", oy, [
      R(s(vg), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(s(ap), A({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(N)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), zb = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(vp), A(s(r), {
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
}), ay = { role: "presentation" }, jb = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(dp), A(s(r), {
      class: s(N)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        de("div", ay, [
          x(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kb = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(gp), A(n.value, {
      class: s(N)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hb = /* @__PURE__ */ _({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
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
const ry = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sy = (e) => typeof e < "u";
function ly(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ms(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, m = je(), v = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (O) => i ? typeof i == "function" ? i(O) : ly(O) : O, w = () => sy(e[t]) ? b(e[t]) : p, $ = (O) => {
    f ? f(O) && v(g, O) : v(g, O);
  };
  if (u) {
    const O = w(), D = E(O);
    let S = !1;
    return X(
      () => e[t],
      (P) => {
        S || (S = !0, D.value = b(P), ne(() => S = !1));
      }
    ), X(
      D,
      (P) => {
        !S && (P !== e[t] || c) && $(P);
      },
      { deep: c }
    ), D;
  } else
    return B({
      get() {
        return w();
      },
      set(O) {
        $(O);
      }
    });
}
const [Rr, iy] = kn("DrawerRoot"), ki = /* @__PURE__ */ new WeakMap();
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
  }), !n && ki.set(e, o);
}
function uy(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = ki.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function bo(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[De(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[De(t) ? 5 : 4]) : null);
}
function dy(e) {
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
function va(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function cy(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Ce = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Ai = 0.4, py = 0.25, fy = 100, Pi = 8, wo = 16, Ii = 26, Fs = "vaul-dragging";
function my({
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
  }), bn(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = B(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = B(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), p = B(
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
  ), m = B(
    () => {
      var $;
      return p.value !== null ? ($ = f.value) == null ? void 0 : $[p.value] : null;
    }
  ), v = ($) => {
    var O, D, S, P;
    const T = ((O = f.value) == null ? void 0 : O.findIndex((I) => I === $)) ?? null;
    ne(() => {
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
  X(
    [e, f, t],
    () => {
      var $;
      if (e.value) {
        const O = (($ = t.value) == null ? void 0 : $.findIndex((D) => D === e.value)) ?? -1;
        f.value && O !== -1 && typeof f.value[O] == "number" && v(f.value[O]);
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
    const F = l.value === "bottom" || l.value === "right" ? (m.value ?? 0) - $ : (m.value ?? 0) + $, k = p.value === a.value - 1, L = p.value === 0, M = $ > 0;
    if (k && Fe((P = o.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), D > 2 && !M) {
      S ? O() : v(f.value[0]);
      return;
    }
    if (D > 2 && M && f && t.value) {
      v(f.value[t.value.length - 1]);
      return;
    }
    const Y = (T = f.value) == null ? void 0 : T.reduce((Z, U) => typeof Z != "number" || typeof U != "number" ? Z : Math.abs(U - F) < Math.abs(Z - F) ? U : Z), W = De(l.value) ? window.innerHeight : window.innerWidth;
    if (D > Ai && Math.abs($) < W * 0.4) {
      const Z = M ? 1 : -1;
      if (Z > 0 && d) {
        v(f.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (L && Z < 0 && S && O(), p.value === null)
        return;
      v(f.value[p.value + Z]);
      return;
    }
    v(Y);
  }
  function b({ draggedDistance: $ }) {
    var O;
    if (m.value === null)
      return;
    const D = l.value === "bottom" || l.value === "right" ? m.value - $ : m.value + $;
    (l.value === "bottom" || l.value === "right") && D < f.value[f.value.length - 1] || (l.value === "top" || l.value === "left") && D > f.value[f.value.length - 1] || Fe((O = n.value) == null ? void 0 : O.$el, {
      transform: De(l.value) ? `translate3d(0, ${D}px, 0)` : `translate3d(${D}px, 0, 0)`
    });
  }
  function w($, O) {
    if (!t.value || typeof p.value != "number" || !f.value || a.value === void 0)
      return null;
    const D = p.value === a.value - 1;
    if (p.value >= a.value && O)
      return 0;
    if (D && !O)
      return 1;
    if (!c.value && !D)
      return null;
    const S = D ? p.value + 1 : p.value - 1, P = D ? f.value[S] - f.value[S - 1] : f.value[S + 1] - f.value[S], T = $ / Math.abs(P);
    return D ? 1 - T : T;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: c,
    getPercentageDragged: w,
    activeSnapPointIndex: p,
    onRelease: g,
    onDrag: b,
    snapPointsOffset: f
  };
}
function Rs() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Mn = null;
function vy(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (Rs() && Mn === null && t.value && !l.value) {
      Mn = {
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
          const m = f - window.innerHeight;
          m && u.value >= f && (document.body.style.top = `-${u.value + m}px`);
        });
      }, 300);
    }
  }
  function c() {
    if (Rs() && Mn !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Mn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, p);
      }), Mn = null;
    }
  }
  return le(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ue(() => {
      window.removeEventListener("scroll", p);
    });
  }), X([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function gy(e, t) {
  return e && e.value ? e : t;
}
function hy(e) {
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
    activeSnapPoint: m,
    fadeFromIndex: v,
    direction: g,
    noBodyStyles: b,
    handleOnly: w,
    preventScrollRestoration: $
  } = e, O = E(r.value ?? !1), D = E(!1), S = E(!1), P = E(!1), T = E(null), I = E(null), F = E(null), k = E(null), L = E(null), M = E(!1), Y = E(null), W = E(0), Z = E(!1);
  E(0);
  const U = E(null);
  E(0);
  const ye = B(() => {
    var Q;
    return ((Q = U.value) == null ? void 0 : Q.$el.getBoundingClientRect().height) || 0;
  }), ae = gy(
    e.snapPoints,
    E(void 0)
  ), j = B(() => {
    var Q;
    return ae && (((Q = ae.value) == null ? void 0 : Q.length) ?? 0) > 0;
  }), J = E(null), {
    activeSnapPointIndex: te,
    onRelease: Ve,
    snapPointsOffset: Ke,
    onDrag: Ne,
    shouldFade: qe,
    getPercentageDragged: yt
  } = my({
    snapPoints: ae,
    activeSnapPoint: m,
    drawerRef: U,
    fadeFromIndex: v,
    overlayRef: T,
    onSnapPointChange: xe,
    direction: g
  });
  function xe(Q, fe) {
    ae.value && Q === fe.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  vy({
    isOpen: O,
    modal: u,
    nested: i,
    hasBeenOpened: D,
    noBodyStyles: b,
    preventScrollRestoration: $
  });
  function pe() {
    return (window.innerWidth - Ii) / window.innerWidth;
  }
  function Me(Q, fe) {
    var be;
    if (!Q)
      return !1;
    let ce = Q;
    const Be = (be = window.getSelection()) == null ? void 0 : be.toString(), Ae = U.value ? bo(U.value.$el, g.value) : null, We = /* @__PURE__ */ new Date();
    if (ce.hasAttribute("data-vaul-no-drag") || ce.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (I.value && We.getTime() - I.value.getTime() < 500)
      return !1;
    if (Ae !== null && (g.value === "bottom" ? Ae > 0 : Ae < 0))
      return !0;
    if (Be && Be.length > 0)
      return !1;
    if (L.value && We.getTime() - L.value.getTime() < p.value && Ae === 0 || fe)
      return L.value = We, !1;
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
  function $e(Q) {
    !l.value && !ae.value || U.value && !U.value.$el.contains(Q.target) || (S.value = !0, F.value = /* @__PURE__ */ new Date(), Q.target.setPointerCapture(Q.pointerId), W.value = De(g.value) ? Q.clientY : Q.clientX);
  }
  function ge(Q) {
    var fe, be, ce, Be, Ae, We;
    if (U.value && S.value) {
      const bt = g.value === "bottom" || g.value === "right" ? 1 : -1, tn = (W.value - (De(g.value) ? Q.clientY : Q.clientX)) * bt, jt = tn > 0, ro = ae.value && !l.value && !jt;
      if (ro && te.value === 0)
        return;
      const Kt = Math.abs(tn), wt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let nt = Kt / ye.value;
      const nn = yt(Kt, jt);
      if (nn !== null && (nt = nn), ro && nt >= 1 || !M.value && !Me(Q.target, jt))
        return;
      if ((fe = U == null ? void 0 : U.value) == null || fe.$el.classList.add(Fs), M.value = !0, Fe((be = U.value) == null ? void 0 : be.$el, {
        transition: "none"
      }), Fe((ce = T.value) == null ? void 0 : ce.$el, {
        transition: "none"
      }), ae.value && Ne({ draggedDistance: tn }), jt && !ae.value) {
        const _t = dy(tn), an = Math.min(_t * -1, 0) * bt;
        Fe((Be = U.value) == null ? void 0 : Be.$el, {
          transform: De(g.value) ? `translate3d(0, ${an}px, 0)` : `translate3d(${an}px, 0, 0)`
        });
        return;
      }
      const on = 1 - nt;
      if ((qe.value || v.value && te.value === v.value - 1) && (t(nt), Fe(
        (Ae = T.value) == null ? void 0 : Ae.$el,
        {
          opacity: `${on}`,
          transition: "none"
        },
        !0
      )), wt && T.value && d.value) {
        const _t = Math.min(pe() + nt * (1 - pe()), 1), an = 8 - nt * 8, so = Math.max(0, 14 - nt * 14);
        Fe(
          wt,
          {
            borderRadius: `${an}px`,
            transform: De(g.value) ? `scale(${_t}) translate3d(0, ${so}px, 0)` : `scale(${_t}) translate3d(${so}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!ae.value) {
        const _t = Kt * bt;
        Fe((We = U.value) == null ? void 0 : We.$el, {
          transform: De(g.value) ? `translate3d(0, ${_t}px, 0)` : `translate3d(${_t}px, 0, 0)`
        });
      }
    }
  }
  function H() {
    var Q;
    if (!U.value)
      return;
    const fe = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), be = bo(U.value.$el, g.value);
    Fe(U.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), Fe((Q = T.value) == null ? void 0 : Q.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), d.value && be && be > 0 && O.value && Fe(
      fe,
      {
        borderRadius: `${Pi}px`,
        overflow: "hidden",
        ...De(g.value) ? {
          transform: `scale(${pe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${pe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ce.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
      },
      !0
    );
  }
  function ue(Q) {
    U.value && (o(), Q || (O.value = !1), window.setTimeout(() => {
      ae.value && (m.value = ae.value[0]);
    }, Ce.DURATION * 1e3));
  }
  me(() => {
    if (!O.value && d.value && ry) {
      const Q = setTimeout(() => {
        uy(document.body);
      }, 200);
      return () => clearTimeout(Q);
    }
  }), X(r, () => {
    O.value = r.value, r.value || ue();
  });
  function Se(Q) {
    if (!S.value || !U.value)
      return;
    U.value.$el.classList.remove(Fs), M.value = !1, S.value = !1, k.value = /* @__PURE__ */ new Date();
    const fe = bo(U.value.$el, g.value);
    if (!Me(Q.target, !1) || !fe || Number.isNaN(fe) || F.value === null)
      return;
    const be = k.value.getTime() - F.value.getTime(), ce = W.value - (De(g.value) ? Q.clientY : Q.clientX), Be = Math.abs(ce) / be;
    if (Be > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), ae.value) {
      const We = g.value === "bottom" || g.value === "right" ? 1 : -1;
      Ve({
        draggedDistance: ce * We,
        closeDrawer: ue,
        velocity: Be,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? ce > 0 : ce < 0) {
      H(), n(!0);
      return;
    }
    if (Be > Ai) {
      ue(), n(!1);
      return;
    }
    const Ae = Math.min(
      U.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (fe >= Ae * f.value) {
      ue(), n(!1);
      return;
    }
    n(!0), H();
  }
  X(O, (Q) => {
    Q && (I.value = /* @__PURE__ */ new Date()), a(Q);
  }, { immediate: !0 });
  function Re(Q) {
    var fe, be;
    const ce = Q ? (window.innerWidth - wo) / window.innerWidth : 1, Be = Q ? -16 : 0;
    Y.value && window.clearTimeout(Y.value), Fe((fe = U.value) == null ? void 0 : fe.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: `scale(${ce}) translate3d(0, ${Be}px, 0)`
    }), !Q && (be = U.value) != null && be.$el && (Y.value = window.setTimeout(() => {
      var Ae, We;
      const bt = bo((Ae = U.value) == null ? void 0 : Ae.$el, g.value);
      Fe((We = U.value) == null ? void 0 : We.$el, {
        transition: "none",
        transform: De(g.value) ? `translate3d(0, ${bt}px, 0)` : `translate3d(${bt}px, 0, 0)`
      });
    }, 500));
  }
  function Ze(Q) {
    var fe;
    if (Q < 0)
      return;
    const be = De(g.value) ? window.innerHeight : window.innerWidth, ce = (be - wo) / be, Be = ce + Q * (1 - ce), Ae = -16 + Q * wo;
    Fe((fe = U.value) == null ? void 0 : fe.$el, {
      transform: De(g.value) ? `scale(${Be}) translate3d(0, ${Ae}px, 0)` : `scale(${Be}) translate3d(${Ae}px, 0, 0)`,
      transition: "none"
    });
  }
  function tt(Q) {
    var fe;
    const be = De(g.value) ? window.innerHeight : window.innerWidth, ce = Q ? (be - wo) / be : 1, Be = Q ? -16 : 0;
    Q && Fe((fe = U.value) == null ? void 0 : fe.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: De(g.value) ? `scale(${ce}) translate3d(0, ${Be}px, 0)` : `scale(${ce}) translate3d(${Be}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: O,
    modal: u,
    keyboardIsOpen: Z,
    hasBeenOpened: D,
    drawerRef: U,
    drawerHeightRef: ye,
    overlayRef: T,
    handleRef: J,
    isDragging: S,
    dragStartTime: F,
    isAllowedToDrag: M,
    snapPoints: ae,
    activeSnapPoint: m,
    hasSnapPoints: j,
    pointerStart: W,
    dismissible: l,
    snapPointsOffset: Ke,
    direction: g,
    shouldFade: qe,
    fadeFromIndex: v,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: $e,
    onDrag: ge,
    onRelease: Se,
    closeDrawer: ue,
    onNestedDrag: Ze,
    onNestedRelease: tt,
    onNestedOpenChange: Re,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: a,
    nested: i,
    handleOnly: w,
    noBodyStyles: b
  };
}
const yy = /* @__PURE__ */ _({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: py },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: fy },
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
    La();
    const r = B(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = Ms(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = Ms(o, "activeSnapPoint", a, {
      passive: o.activeSnapPoint === void 0
    }), u = {
      emitDrag: (v) => a("drag", v),
      emitRelease: (v) => a("release", v),
      emitClose: () => a("close"),
      emitOpenChange: (v) => {
        a("update:open", v), setTimeout(() => {
          a("animationEnd", v);
        }, Ce.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: c, modal: p, isOpen: f } = iy(
      hy({
        ...u,
        ...ve(o),
        activeSnapPoint: i,
        fadeFromIndex: r,
        open: l
      })
    );
    function m(v) {
      if (l.value !== void 0) {
        u.emitOpenChange(v);
        return;
      }
      f.value = v, v ? c.value = !0 : d();
    }
    return t({
      open: f
    }), (v, g) => (h(), C(s(Jh), {
      open: s(f),
      modal: s(p),
      "onUpdate:open": m
    }, {
      default: y(() => [
        x(v.$slots, "default", { open: s(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), by = /* @__PURE__ */ _({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = Rr();
    return (r, l) => (h(), C(s(P0), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), wy = () => () => {
};
function _y() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = Rr(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Ii) / window.innerWidth;
  }
  me((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      cy(
        o.value && !a.value ? va(document.body, { background: "black" }) : wy,
        va(d, {
          transformOrigin: De(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Ce.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
        })
      );
      const c = va(d, {
        borderRadius: `${Pi}px`,
        overflow: "hidden",
        ...De(e.value) ? {
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
const xy = /* @__PURE__ */ _({
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
      closeDrawer: m,
      direction: v,
      handleOnly: g
    } = Rr();
    _y();
    const b = E(!1), w = B(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function $(S) {
      if (!d.value || S.defaultPrevented) {
        S.preventDefault();
        return;
      }
      f.value && (f.value = !1), p.value ? c(!1) : S.preventDefault();
    }
    function O(S) {
      g.value || l(S);
    }
    function D(S) {
      g.value || i(S);
    }
    return me(() => {
      a.value && window.requestAnimationFrame(() => {
        b.value = !0;
      });
    }), (S, P) => (h(), C(s($0), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(v),
      "data-vaul-delayed-snap-points": b.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: Tt({ "--snap-point-height": w.value }),
      onPointerdown: O,
      onPointermove: D,
      onPointerup: s(u),
      onPointerDownOutside: $,
      onOpenAutoFocus: P[0] || (P[0] = Te(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (T) => {
        s(p) || T.preventDefault();
      })
    }, {
      default: y(() => [
        x(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Wb = /* @__PURE__ */ _({
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
    const a = Fr(e, t);
    return (r, l) => (h(), C(s(yy), A({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ub = /* @__PURE__ */ _({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(e0), A({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cy = /* @__PURE__ */ _({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = Br(t, "class");
    return (o, a) => (h(), C(s(by), A({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(N)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Gb = /* @__PURE__ */ _({
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
    const n = e, a = Fr(n, t);
    return (r, l) => (h(), C(s(J0), null, {
      default: y(() => [
        R(Cy),
        R(s(xy), A({ "data-slot": "drawer-content" }, s(a), {
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
}), qb = /* @__PURE__ */ _({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = Br(t, "class");
    return (o, a) => (h(), C(s(S0), A({ "data-slot": "drawer-description" }, s(n), {
      class: s(N)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yb = /* @__PURE__ */ _({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-footer",
      class: oe(s(N)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Xb = /* @__PURE__ */ _({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-header",
      class: oe(s(N)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Zb = /* @__PURE__ */ _({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e, n = Br(t, "class");
    return (o, a) => (h(), C(s(F0), A({ "data-slot": "drawer-title" }, s(n), {
      class: s(N)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qb = /* @__PURE__ */ _({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(R0), A({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jb = /* @__PURE__ */ _({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(Yp), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ew = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const n = Ie(e);
    return (o, a) => (h(), C(s(Xp), A({ class: "outline-none" }, s(n)), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(Zp), null, {
      default: y(() => [
        R(s(Qp), A(s(r), {
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
}), nw = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ef), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ow = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(af), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), aw = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(Jp), A(s(o), {
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
}), Oy = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, rw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(nf), A(s(r), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", Oy, [
          R(s(Ll), null, {
            default: y(() => [
              R(s(fi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $y = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, sw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(rf), A(s(r), {
      class: s(N)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", $y, [
          R(s(Ll), null, {
            default: y(() => [
              R(s(mg), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lw = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
      class: oe(s(N)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), iw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(tf), A(n.value, {
      class: s(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), uw = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(of), A(s(o), {
      class: s(N)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dw = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(sf), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cw = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(uf), A(s(o), {
      class: s(N)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default"),
        R(s(pg), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(lf), A(s(r), {
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
}), fw = /* @__PURE__ */ _({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = gi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => yn((h(), z("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => dt(a) ? a.value = i : null),
      class: oe(
        s(N)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Hs, s(a)]
    ]);
  }
}), mw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(df), A(n.value, {
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
}), vw = /* @__PURE__ */ _({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(pf), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gw = /* @__PURE__ */ _({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ff), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(mf), null, {
      default: y(() => [
        R(s(hf), A({ ...s(r), ...l.$attrs }, {
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
}), yw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(xf), A(n.value, {
      class: s(N)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        R(s(Cf), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Tt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), bw = /* @__PURE__ */ _({
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
    const a = ee(e, t);
    return (r, l) => (h(), C(s(Df), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ww = /* @__PURE__ */ _({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Jf), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _w = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(Af), A(s(o), {
      class: s(N)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        x(a.$slots, "default"),
        R(s(em), { "as-child": "" }, {
          default: y(() => [
            R(s(cg), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(Pf), null, {
      default: y(() => [
        R(s(zf), A({ ...s(r), ...l.$attrs }, {
          class: s(N)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            R(s(By)),
            R(s(Xf), {
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
            R(s(Ey))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Cw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(qf), A({
      class: s(N)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sy = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, Ow = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(Hf), A(s(o), {
      class: s(N)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        de("span", Sy, [
          R(s(Wf), null, {
            default: y(() => [
              R(s(fi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(s(Kl), null, {
          default: y(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $w = /* @__PURE__ */ _({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Kl), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sw = /* @__PURE__ */ _({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Yf), {
      class: oe(s(N)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(jf), A(n.value, {
      class: s(N)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), By = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(Zf), A(s(o), {
      class: s(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          R(s(fg))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ey = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(Qf), A(s(o), {
      class: s(N)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        x(a.$slots, "default", {}, () => [
          R(s(mi))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ew = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ee(e, t);
    return (r, l) => (h(), C(s(rr), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dw = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(sr), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tw = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Xt), G(q(t)), {
      default: y(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(lr), null, {
      default: y(() => [
        R(s(jo), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(zo), A({
          class: s(N)(s(Dy)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            x(l.$slots, "default"),
            R(s(Xt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                R(s(Go), { class: "h-4 w-4" })
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
}), Aw = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Pw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(cr), A({
      class: s(N)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Iw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(pr), A({
      class: s(N)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mw = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Dy = oo(
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
), Fw = /* @__PURE__ */ _({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: oe(s(N)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), Rw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(fm), A({
      class: s(N)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        R(s(gm), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            R(s(hm), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), z(Ee, null, Rt(l.modelValue, (u, d) => (h(), C(s(vm), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Lw = /* @__PURE__ */ _({
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
    }), r = ee(a, o);
    return (l, i) => (h(), C(s(xm), A(s(r), {
      class: s(N)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        R(s(Cm), {
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
}), Ty = { class: "relative w-full overflow-auto" }, Vw = /* @__PURE__ */ _({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", Ty, [
      de("table", {
        class: oe(s(N)("w-full caption-bottom text-sm", t.class))
      }, [
        x(n.$slots, "default")
      ], 2)
    ]));
  }
}), Nw = /* @__PURE__ */ _({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tbody", {
      class: oe(s(N)("[&_tr:last-child]:border-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), ky = /* @__PURE__ */ _({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("td", {
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
}), zw = /* @__PURE__ */ _({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("th", {
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
}), jw = /* @__PURE__ */ _({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("thead", {
      class: oe(s(N)("[&_tr]:border-b", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Kw = /* @__PURE__ */ _({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tfoot", {
      class: oe(s(N)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Ay = /* @__PURE__ */ _({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tr", {
      class: oe(
        s(N)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Hw = /* @__PURE__ */ _({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("caption", {
      class: oe(s(N)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      x(n.$slots, "default")
    ], 2));
  }
}), Py = { class: "flex items-center justify-center py-10" }, Ww = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(Ay, null, {
      default: y(() => [
        R(ky, A({
          class: s(N)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            de("div", Py, [
              x(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Uw = /* @__PURE__ */ _({
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
    const a = ee(e, t);
    return (r, l) => (h(), C(s($m), G(q(s(a))), {
      default: y(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(Bm), A({
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
}), qw = /* @__PURE__ */ _({
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
    return (o, a) => (h(), C(s(Sm), A(n.value, {
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
}), Iy = { class: "truncate" }, Yw = /* @__PURE__ */ _({
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
    return (a, r) => (h(), C(s(Em), A(s(o), {
      class: s(N)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        de("span", Iy, [
          x(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xw = /* @__PURE__ */ _({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = gi(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => yn((h(), z("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => dt(a) ? a.value = i : null),
      class: oe(
        s(N)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [Hs, s(a)]
    ]);
  }
});
export {
  eb as Accord,
  Cg as Accordion,
  Og as AccordionContent,
  $g as AccordionItem,
  Sg as AccordionTrigger,
  nb as AlertDialog,
  ub as AlertDialogAction,
  db as AlertDialogCancel,
  ab as AlertDialogContent,
  lb as AlertDialogDescription,
  ib as AlertDialogFooter,
  rb as AlertDialogHeader,
  sb as AlertDialogTitle,
  ob as AlertDialogTrigger,
  cb as Avatar,
  fb as AvatarFallback,
  pb as AvatarImage,
  mb as Badge,
  vi as Button,
  vb as Card,
  gb as CardContent,
  hb as CardDescription,
  yb as CardFooter,
  bb as CardHeader,
  wb as CardTitle,
  _b as Carousel,
  xb as CarouselContent,
  Cb as CarouselItem,
  $b as CarouselNext,
  Ob as CarouselPrevious,
  Db as Checkbox,
  ey as Command,
  Rb as CommandDialog,
  Lb as CommandEmpty,
  Vb as CommandGroup,
  Nb as CommandInput,
  zb as CommandItem,
  jb as CommandList,
  Kb as CommandSeparator,
  Hb as CommandShortcut,
  ty as Dialog,
  Tb as DialogClose,
  ny as DialogContent,
  Ib as DialogDescription,
  Fb as DialogFooter,
  Ab as DialogHeader,
  Mb as DialogScrollContent,
  Pb as DialogTitle,
  kb as DialogTrigger,
  Wb as Drawer,
  Ub as DrawerClose,
  Gb as DrawerContent,
  qb as DrawerDescription,
  Yb as DrawerFooter,
  Xb as DrawerHeader,
  Cy as DrawerOverlay,
  Zb as DrawerTitle,
  Qb as DrawerTrigger,
  Jb as DropdownMenu,
  rw as DropdownMenuCheckboxItem,
  tw as DropdownMenuContent,
  nw as DropdownMenuGroup,
  aw as DropdownMenuItem,
  uw as DropdownMenuLabel,
  Zp as DropdownMenuPortal,
  ow as DropdownMenuRadioGroup,
  sw as DropdownMenuRadioItem,
  iw as DropdownMenuSeparator,
  lw as DropdownMenuShortcut,
  dw as DropdownMenuSub,
  pw as DropdownMenuSubContent,
  cw as DropdownMenuSubTrigger,
  ew as DropdownMenuTrigger,
  Qy as Flasher,
  Wy as Header,
  Jy as Heading,
  fw as Input,
  mw as Label,
  Uy as Main,
  vw as Popover,
  jy as PopoverAnchor,
  hw as PopoverContent,
  gw as PopoverTrigger,
  yw as Progress,
  bw as Select,
  xw as SelectContent,
  Cw as SelectGroup,
  Ow as SelectItem,
  $w as SelectItemText,
  Sw as SelectLabel,
  Ey as SelectScrollDownButton,
  By as SelectScrollUpButton,
  Bw as SelectSeparator,
  _w as SelectTrigger,
  ww as SelectValue,
  Ew as Sheet,
  Tw as SheetClose,
  kw as SheetContent,
  Iw as SheetDescription,
  Mw as SheetFooter,
  Aw as SheetHeader,
  Pw as SheetTitle,
  Dw as SheetTrigger,
  Fw as Skeleton,
  Rw as Slider,
  Lw as Switch,
  Vw as Table,
  Nw as TableBody,
  Hw as TableCaption,
  ky as TableCell,
  Ww as TableEmpty,
  Kw as TableFooter,
  zw as TableHead,
  jw as TableHeader,
  Ay as TableRow,
  Uw as Tabs,
  Gw as TabsContent,
  qw as TabsList,
  Yw as TabsTrigger,
  Xw as Textarea,
  tb as Tip,
  lg as Toast,
  Zy as ToastAction,
  gg as ToastClose,
  ms as ToastDescription,
  yg as ToastProvider,
  hg as ToastTitle,
  ig as ToastViewport,
  sg as Toaster,
  Bg as Tooltip,
  Eg as TooltipContent,
  Dg as TooltipProvider,
  Tg as TooltipTrigger,
  Hy as TwoColumnLayout,
  Gy as TwoColumnLayoutSidebar,
  qy as TwoColumnLayoutSidebarDesktop,
  Yy as TwoColumnLayoutSidebarMobile,
  Xy as TwoColumnLayoutSidebarTrigger,
  kg as avatarVariant,
  Ag as badgeVariants,
  Sr as buttonVariants,
  N as cn,
  Ry as preset,
  Dy as sheetVariants,
  tg as toast,
  bg as toastVariants,
  Yo as useCarousel,
  wg as useFlasher,
  pi as useToast,
  Ky as valueUpdater
};
