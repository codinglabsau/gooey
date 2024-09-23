import { computed as P, ref as T, shallowRef as sn, watch as J, getCurrentScope as ln, onScopeDispose as dn, shallowReadonly as Xe, unref as l, getCurrentInstance as Ge, toRef as Dr, camelize as cn, defineComponent as w, Comment as Tr, mergeProps as S, cloneVNode as Br, h as Je, toRefs as ye, renderSlot as _, onMounted as ce, openBlock as h, createBlock as x, withCtx as y, normalizeProps as N, guardReactiveProps as j, reactive as un, createVNode as V, createCommentVNode as le, withModifiers as We, nextTick as oe, watchEffect as ne, markRaw as Pr, isRef as pn, withKeys as fn, createElementBlock as X, Fragment as Ee, normalizeStyle as so, effectScope as mn, toHandlerKey as Sr, onUnmounted as ot, Teleport as gn, createTextVNode as je, toDisplayString as Re, inject as vn, provide as hn, readonly as io, onBeforeUpdate as $r, onUpdated as Mr, mergeDefaults as yn, onBeforeUnmount as Rr, watchPostEffect as Fr, customRef as Ir, renderList as Mo, createElementVNode as de, resolveDynamicComponent as Rt, normalizeClass as Te, isVNode as Lr } from "vue";
function bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zr = {
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
}, Ft = zr, lo = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Nr(e) {
  return e.trim().replace(lo.whitespace, " ");
}
function Vr(e) {
  return encodeURIComponent(e).replace(lo.urlHexPairs, Wr);
}
function jr(e) {
  return Object.keys(Ft).forEach(function(t) {
    Ft[t].test(e) && (e = e.replace(Ft[t], t));
  }), e;
}
function Wr(e) {
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
function Xt(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = jr(Nr(e)).replace(lo.quotes, "'");
  return "data:image/svg+xml," + Vr(t);
}
Xt.toSrcset = function(t) {
  return Xt(t).replace(/ /g, "%20");
};
var Ur = Xt, wn = {}, xn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  function t(n, r) {
    return {
      handler: n,
      config: r
    };
  }
  t.withOptions = function(n, r = () => ({})) {
    const a = function(s) {
      return {
        __options: s,
        handler: n(s),
        config: r(s)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = n, a.__configFunction = r, a;
  };
  const o = t;
})(xn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ o(xn);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const n = t.default;
})(wn);
let It = wn;
var _n = (It.__esModule ? It : { default: It }).default, Cn = {}, kn = {};
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
    return Array.isArray(o) ? o.map((n) => t(n)) : typeof o == "object" && o !== null ? Object.fromEntries(Object.entries(o).map(([n, r]) => [
      n,
      t(r)
    ])) : o;
  }
})(kn);
var Kr = {
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
      return r;
    }
  });
  const t = kn, o = /* @__PURE__ */ n(Kr);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const r = (0, t.cloneDeep)(o.default.theme);
})(Cn);
let Lt = Cn;
var Gr = (Lt.__esModule ? Lt : { default: Lt }).default, En = {}, On = {}, co = { exports: {} }, I = String, An = function() {
  return { isColorSupported: !1, reset: I, bold: I, dim: I, italic: I, underline: I, inverse: I, hidden: I, strikethrough: I, black: I, red: I, green: I, yellow: I, blue: I, magenta: I, cyan: I, white: I, gray: I, bgBlack: I, bgRed: I, bgGreen: I, bgYellow: I, bgBlue: I, bgMagenta: I, bgCyan: I, bgWhite: I, blackBright: I, redBright: I, greenBright: I, yellowBright: I, blueBright: I, magentaBright: I, cyanBright: I, whiteBright: I, bgBlackBright: I, bgRedBright: I, bgGreenBright: I, bgYellowBright: I, bgBlueBright: I, bgMagentaBright: I, bgCyanBright: I, bgWhiteBright: I };
};
co.exports = An();
co.exports.createColors = An;
var Hr = co.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(d, c) {
    for (var p in c) Object.defineProperty(d, p, {
      enumerable: !0,
      get: c[p]
    });
  }
  t(e, {
    dim: function() {
      return s;
    },
    default: function() {
      return i;
    }
  });
  const o = /* @__PURE__ */ n(Hr);
  function n(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let r = /* @__PURE__ */ new Set();
  function a(d, c, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && r.has(p) || (p && r.add(p), console.warn(""), c.forEach((u) => console.warn(d, "-", u)));
  }
  function s(d) {
    return o.default.dim(d);
  }
  const i = {
    info(d, c) {
      a(o.default.bold(o.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        c,
        d
      ]);
    },
    warn(d, c) {
      a(o.default.bold(o.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        c,
        d
      ]);
    },
    risk(d, c) {
      a(o.default.bold(o.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        c,
        d
      ]);
    }
  };
})(On);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ o(On);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function n({ version: a, from: s, to: i }) {
    t.default.warn(`${s}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${s}\` has been renamed to \`${i}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const r = {
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
})(En);
let zt = En;
var qr = (zt.__esModule ? zt : { default: zt }).default;
const ht = Ur, Xr = _n, Dn = Gr, Pe = qr, [Yr, { lineHeight: Zr }] = Dn.fontSize.base, { spacing: Ce, borderWidth: Ro, borderRadius: Fo } = Dn;
function Ve(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Jr = Xr.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: o, theme: n }) {
    function r(d, c) {
      let p = n(d);
      return !p || p.includes("var(") ? c : p.replace("<alpha-value>", "1");
    }
    const a = e.strategy === void 0 ? ["base", "class"] : [e.strategy], s = [
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
          "border-color": Ve(
            n("colors.gray.500", Pe.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Ro.DEFAULT,
          "border-radius": Fo.none,
          "padding-top": Ce[2],
          "padding-right": Ce[3],
          "padding-bottom": Ce[2],
          "padding-left": Ce[3],
          "font-size": Yr,
          "line-height": Zr,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": Ve(
              n("colors.blue.600", Pe.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": Ve(
              n("colors.blue.600", Pe.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: Ve(n("colors.gray.500", Pe.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${ht(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${r(
              "colors.gray.500",
              Pe.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Ce[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Ce[10],
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
          "padding-right": Ce[3],
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
          height: Ce[4],
          width: Ce[4],
          color: Ve(n("colors.blue.600", Pe.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": Ve(
            n("colors.gray.500", Pe.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Ro.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Fo.none
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
          "--tw-ring-color": Ve(
            n("colors.blue.600", Pe.blue[600]),
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
          "background-image": `url("${ht(
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
          "background-image": `url("${ht(
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
          "background-image": `url("${ht(
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
    ], i = (d) => s.map((c) => c[d] === null ? null : { [c[d]]: c.styles }).filter(Boolean);
    a.includes("base") && t(i("base")), a.includes("class") && o(i("class"));
  };
});
var Qr = Jr;
const ea = /* @__PURE__ */ bn(Qr), ta = _n;
function Io(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var oa = ta(
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
      { values: Io(o("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: o("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: Io(o("animationTimingFunction")) }
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
const na = /* @__PURE__ */ bn(oa), Vd = {
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
    na,
    ea({
      strategy: "class"
    })
  ]
}, ra = ["top", "right", "bottom", "left"], ge = Math.min, ae = Math.max, Et = Math.round, yt = Math.floor, Ie = (e) => ({
  x: e,
  y: e
}), aa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sa = {
  start: "end",
  end: "start"
};
function Yt(e, t, o) {
  return ae(e, ge(t, o));
}
function Ae(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function De(e) {
  return e.split("-")[0];
}
function nt(e) {
  return e.split("-")[1];
}
function uo(e) {
  return e === "x" ? "y" : "x";
}
function po(e) {
  return e === "y" ? "height" : "width";
}
function Le(e) {
  return ["top", "bottom"].includes(De(e)) ? "y" : "x";
}
function fo(e) {
  return uo(Le(e));
}
function ia(e, t, o) {
  o === void 0 && (o = !1);
  const n = nt(e), r = fo(e), a = po(r);
  let s = r === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ot(s)), [s, Ot(s)];
}
function la(e) {
  const t = Ot(e);
  return [Zt(e), t, Zt(t)];
}
function Zt(e) {
  return e.replace(/start|end/g, (t) => sa[t]);
}
function da(e, t, o) {
  const n = ["left", "right"], r = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? r : n : t ? n : r;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function ca(e, t, o, n) {
  const r = nt(e);
  let a = da(De(e), o === "start", n);
  return r && (a = a.map((s) => s + "-" + r), t && (a = a.concat(a.map(Zt)))), a;
}
function Ot(e) {
  return e.replace(/left|right|bottom|top/g, (t) => aa[t]);
}
function ua(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Tn(e) {
  return typeof e != "number" ? ua(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function At(e) {
  const {
    x: t,
    y: o,
    width: n,
    height: r
  } = e;
  return {
    width: n,
    height: r,
    top: o,
    left: t,
    right: t + n,
    bottom: o + r,
    x: t,
    y: o
  };
}
function Lo(e, t, o) {
  let {
    reference: n,
    floating: r
  } = e;
  const a = Le(t), s = fo(t), i = po(s), d = De(t), c = a === "y", p = n.x + n.width / 2 - r.width / 2, u = n.y + n.height / 2 - r.height / 2, f = n[i] / 2 - r[i] / 2;
  let m;
  switch (d) {
    case "top":
      m = {
        x: p,
        y: n.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: p,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: n.x - r.width,
        y: u
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (nt(t)) {
    case "start":
      m[s] -= f * (o && c ? -1 : 1);
      break;
    case "end":
      m[s] += f * (o && c ? -1 : 1);
      break;
  }
  return m;
}
const pa = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: s
  } = o, i = a.filter(Boolean), d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: p,
    y: u
  } = Lo(c, n, d), f = n, m = {}, g = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: b,
      fn: C
    } = i[v], {
      x: k,
      y: O,
      data: A,
      reset: D
    } = await C({
      x: p,
      y: u,
      initialPlacement: n,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = k ?? p, u = O ?? u, m = {
      ...m,
      [b]: {
        ...m[b],
        ...A
      }
    }, D && g <= 50 && (g++, typeof D == "object" && (D.placement && (f = D.placement), D.rects && (c = D.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : D.rects), {
      x: p,
      y: u
    } = Lo(c, f, d)), v = -1);
  }
  return {
    x: p,
    y: u,
    placement: f,
    strategy: r,
    middlewareData: m
  };
};
async function dt(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: r,
    platform: a,
    rects: s,
    elements: i,
    strategy: d
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = Ae(t, e), g = Tn(m), b = i[f ? u === "floating" ? "reference" : "floating" : u], C = At(await a.getClippingRect({
    element: (o = await (a.isElement == null ? void 0 : a.isElement(b))) == null || o ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: p,
    strategy: d
  })), k = u === "floating" ? {
    x: n,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), A = await (a.isElement == null ? void 0 : a.isElement(O)) ? await (a.getScale == null ? void 0 : a.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = At(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: O,
    strategy: d
  }) : k);
  return {
    top: (C.top - D.top + g.top) / A.y,
    bottom: (D.bottom - C.bottom + g.bottom) / A.y,
    left: (C.left - D.left + g.left) / A.x,
    right: (D.right - C.right + g.right) / A.x
  };
}
const fa = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: r,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: d
    } = t, {
      element: c,
      padding: p = 0
    } = Ae(e, t) || {};
    if (c == null)
      return {};
    const u = Tn(p), f = {
      x: o,
      y: n
    }, m = fo(r), g = po(m), v = await s.getDimensions(c), b = m === "y", C = b ? "top" : "left", k = b ? "bottom" : "right", O = b ? "clientHeight" : "clientWidth", A = a.reference[g] + a.reference[m] - f[m] - a.floating[g], D = f[m] - a.reference[m], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let F = R ? R[O] : 0;
    (!F || !await (s.isElement == null ? void 0 : s.isElement(R))) && (F = i.floating[O] || a.floating[g]);
    const K = A / 2 - D / 2, W = F / 2 - v[g] / 2 - 1, E = ge(u[C], W), $ = ge(u[k], W), B = E, q = F - v[g] - $, z = F / 2 - v[g] / 2 + K, Q = Yt(B, z, q), Z = !d.arrow && nt(r) != null && z !== Q && a.reference[g] / 2 - (z < B ? E : $) - v[g] / 2 < 0, re = Z ? z < B ? z - B : z - q : 0;
    return {
      [m]: f[m] + re,
      data: {
        [m]: Q,
        centerOffset: z - Q - re,
        ...Z && {
          alignmentOffset: re
        }
      },
      reset: Z
    };
  }
}), ma = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: r,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: d,
        elements: c
      } = t, {
        mainAxis: p = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...b
      } = Ae(e, t);
      if ((o = a.arrow) != null && o.alignmentOffset)
        return {};
      const C = De(r), k = Le(i), O = De(i) === i, A = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), D = f || (O || !v ? [Ot(i)] : la(i)), R = g !== "none";
      !f && R && D.push(...ca(i, v, g, A));
      const F = [i, ...D], K = await dt(t, b), W = [];
      let E = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (p && W.push(K[C]), u) {
        const z = ia(r, s, A);
        W.push(K[z[0]], K[z[1]]);
      }
      if (E = [...E, {
        placement: r,
        overflows: W
      }], !W.every((z) => z <= 0)) {
        var $, B;
        const z = ((($ = a.flip) == null ? void 0 : $.index) || 0) + 1, Q = F[z];
        if (Q)
          return {
            data: {
              index: z,
              overflows: E
            },
            reset: {
              placement: Q
            }
          };
        let Z = (B = E.filter((re) => re.overflows[0] <= 0).sort((re, ie) => re.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!Z)
          switch (m) {
            case "bestFit": {
              var q;
              const re = (q = E.filter((ie) => {
                if (R) {
                  const te = Le(ie.placement);
                  return te === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  te === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((te) => te > 0).reduce((te, vt) => te + vt, 0)]).sort((ie, te) => ie[1] - te[1])[0]) == null ? void 0 : q[0];
              re && (Z = re);
              break;
            }
            case "initialPlacement":
              Z = i;
              break;
          }
        if (r !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
function zo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function No(e) {
  return ra.some((t) => e[t] >= 0);
}
const ga = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: n = "referenceHidden",
        ...r
      } = Ae(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await dt(t, {
            ...r,
            elementContext: "reference"
          }), s = zo(a, o.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: No(s)
            }
          };
        }
        case "escaped": {
          const a = await dt(t, {
            ...r,
            altBoundary: !0
          }), s = zo(a, o.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: No(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function va(e, t) {
  const {
    placement: o,
    platform: n,
    elements: r
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), s = De(o), i = nt(o), d = Le(o) === "y", c = ["left", "top"].includes(s) ? -1 : 1, p = a && d ? -1 : 1, u = Ae(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: g
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return i && typeof g == "number" && (m = i === "end" ? g * -1 : g), d ? {
    x: m * p,
    y: f * c
  } : {
    x: f * c,
    y: m * p
  };
}
const ha = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: r,
        y: a,
        placement: s,
        middlewareData: i
      } = t, d = await va(t, e);
      return s === ((o = i.offset) == null ? void 0 : o.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: r + d.x,
        y: a + d.y,
        data: {
          ...d,
          placement: s
        }
      };
    }
  };
}, ya = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: n,
        placement: r
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: C,
              y: k
            } = b;
            return {
              x: C,
              y: k
            };
          }
        },
        ...d
      } = Ae(e, t), c = {
        x: o,
        y: n
      }, p = await dt(t, d), u = Le(De(r)), f = uo(u);
      let m = c[f], g = c[u];
      if (a) {
        const b = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", k = m + p[b], O = m - p[C];
        m = Yt(k, m, O);
      }
      if (s) {
        const b = u === "y" ? "top" : "left", C = u === "y" ? "bottom" : "right", k = g + p[b], O = g - p[C];
        g = Yt(k, g, O);
      }
      const v = i.fn({
        ...t,
        [f]: m,
        [u]: g
      });
      return {
        ...v,
        data: {
          x: v.x - o,
          y: v.y - n
        }
      };
    }
  };
}, ba = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: n,
        placement: r,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: d = !0,
        crossAxis: c = !0
      } = Ae(e, t), p = {
        x: o,
        y: n
      }, u = Le(r), f = uo(u);
      let m = p[f], g = p[u];
      const v = Ae(i, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (d) {
        const O = f === "y" ? "height" : "width", A = a.reference[f] - a.floating[O] + b.mainAxis, D = a.reference[f] + a.reference[O] - b.mainAxis;
        m < A ? m = A : m > D && (m = D);
      }
      if (c) {
        var C, k;
        const O = f === "y" ? "width" : "height", A = ["top", "left"].includes(De(r)), D = a.reference[u] - a.floating[O] + (A && ((C = s.offset) == null ? void 0 : C[u]) || 0) + (A ? 0 : b.crossAxis), R = a.reference[u] + a.reference[O] + (A ? 0 : ((k = s.offset) == null ? void 0 : k[u]) || 0) - (A ? b.crossAxis : 0);
        g < D ? g = D : g > R && (g = R);
      }
      return {
        [f]: m,
        [u]: g
      };
    }
  };
}, wa = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: o,
        rects: n,
        platform: r,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = Ae(e, t), d = await dt(t, i), c = De(o), p = nt(o), u = Le(o) === "y", {
        width: f,
        height: m
      } = n.floating;
      let g, v;
      c === "top" || c === "bottom" ? (g = c, v = p === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = c, g = p === "end" ? "top" : "bottom");
      const b = m - d.top - d.bottom, C = f - d.left - d.right, k = ge(m - d[g], b), O = ge(f - d[v], C), A = !t.middlewareData.shift;
      let D = k, R = O;
      if (u ? R = p || A ? ge(O, C) : C : D = p || A ? ge(k, b) : b, A && !p) {
        const K = ae(d.left, 0), W = ae(d.right, 0), E = ae(d.top, 0), $ = ae(d.bottom, 0);
        u ? R = f - 2 * (K !== 0 || W !== 0 ? K + W : ae(d.left, d.right)) : D = m - 2 * (E !== 0 || $ !== 0 ? E + $ : ae(d.top, d.bottom));
      }
      await s({
        ...t,
        availableWidth: R,
        availableHeight: D
      });
      const F = await r.getDimensions(a.floating);
      return f !== F.width || m !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function He(e) {
  return mo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Be(e) {
  var t;
  return (t = (mo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mo(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function fe(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function ve(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function Vo(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function pt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: r
  } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(r);
}
function xa(e) {
  return ["table", "td", "th"].includes(He(e));
}
function Bt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function go(e) {
  const t = vo(), o = fe(e) ? me(e) : e;
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function _a(e) {
  let t = ze(e);
  for (; ve(t) && !tt(t); ) {
    if (go(t))
      return t;
    if (Bt(t))
      return null;
    t = ze(t);
  }
  return null;
}
function vo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tt(e) {
  return ["html", "body", "#document"].includes(He(e));
}
function me(e) {
  return se(e).getComputedStyle(e);
}
function Pt(e) {
  return fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ze(e) {
  if (He(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Vo(e) && e.host || // Fallback.
    Be(e)
  );
  return Vo(t) ? t.host : t;
}
function Bn(e) {
  const t = ze(e);
  return tt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && pt(t) ? t : Bn(t);
}
function ct(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const r = Bn(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = se(r);
  if (a) {
    const i = Jt(s);
    return t.concat(s, s.visualViewport || [], pt(r) ? r : [], i && o ? ct(i) : []);
  }
  return t.concat(r, ct(r, [], o));
}
function Jt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Pn(e) {
  const t = me(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const r = ve(e), a = r ? e.offsetWidth : o, s = r ? e.offsetHeight : n, i = Et(o) !== a || Et(n) !== s;
  return i && (o = a, n = s), {
    width: o,
    height: n,
    $: i
  };
}
function ho(e) {
  return fe(e) ? e : e.contextElement;
}
function Qe(e) {
  const t = ho(e);
  if (!ve(t))
    return Ie(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: r,
    $: a
  } = Pn(t);
  let s = (a ? Et(o.width) : o.width) / n, i = (a ? Et(o.height) : o.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Ca = /* @__PURE__ */ Ie(0);
function Sn(e) {
  const t = se(e);
  return !vo() || !t.visualViewport ? Ca : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ka(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== se(e) ? !1 : t;
}
function Ue(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const r = e.getBoundingClientRect(), a = ho(e);
  let s = Ie(1);
  t && (n ? fe(n) && (s = Qe(n)) : s = Qe(e));
  const i = ka(a, o, n) ? Sn(a) : Ie(0);
  let d = (r.left + i.x) / s.x, c = (r.top + i.y) / s.y, p = r.width / s.x, u = r.height / s.y;
  if (a) {
    const f = se(a), m = n && fe(n) ? se(n) : n;
    let g = f, v = Jt(g);
    for (; v && n && m !== g; ) {
      const b = Qe(v), C = v.getBoundingClientRect(), k = me(v), O = C.left + (v.clientLeft + parseFloat(k.paddingLeft)) * b.x, A = C.top + (v.clientTop + parseFloat(k.paddingTop)) * b.y;
      d *= b.x, c *= b.y, p *= b.x, u *= b.y, d += O, c += A, g = se(v), v = Jt(g);
    }
  }
  return At({
    width: p,
    height: u,
    x: d,
    y: c
  });
}
function Ea(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: r
  } = e;
  const a = r === "fixed", s = Be(n), i = t ? Bt(t.floating) : !1;
  if (n === s || i && a)
    return o;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ie(1);
  const p = Ie(0), u = ve(n);
  if ((u || !u && !a) && ((He(n) !== "body" || pt(s)) && (d = Pt(n)), ve(n))) {
    const f = Ue(n);
    c = Qe(n), p.x = f.x + n.clientLeft, p.y = f.y + n.clientTop;
  }
  return {
    width: o.width * c.x,
    height: o.height * c.y,
    x: o.x * c.x - d.scrollLeft * c.x + p.x,
    y: o.y * c.y - d.scrollTop * c.y + p.y
  };
}
function Oa(e) {
  return Array.from(e.getClientRects());
}
function $n(e) {
  return Ue(Be(e)).left + Pt(e).scrollLeft;
}
function Aa(e) {
  const t = Be(e), o = Pt(e), n = e.ownerDocument.body, r = ae(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = ae(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -o.scrollLeft + $n(e);
  const i = -o.scrollTop;
  return me(n).direction === "rtl" && (s += ae(t.clientWidth, n.clientWidth) - r), {
    width: r,
    height: a,
    x: s,
    y: i
  };
}
function Da(e, t) {
  const o = se(e), n = Be(e), r = o.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, i = 0, d = 0;
  if (r) {
    a = r.width, s = r.height;
    const c = vo();
    (!c || c && t === "fixed") && (i = r.offsetLeft, d = r.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: d
  };
}
function Ta(e, t) {
  const o = Ue(e, !0, t === "fixed"), n = o.top + e.clientTop, r = o.left + e.clientLeft, a = ve(e) ? Qe(e) : Ie(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, d = r * a.x, c = n * a.y;
  return {
    width: s,
    height: i,
    x: d,
    y: c
  };
}
function jo(e, t, o) {
  let n;
  if (t === "viewport")
    n = Da(e, o);
  else if (t === "document")
    n = Aa(Be(e));
  else if (fe(t))
    n = Ta(t, o);
  else {
    const r = Sn(e);
    n = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return At(n);
}
function Mn(e, t) {
  const o = ze(e);
  return o === t || !fe(o) || tt(o) ? !1 : me(o).position === "fixed" || Mn(o, t);
}
function Ba(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = ct(e, [], !1).filter((i) => fe(i) && He(i) !== "body"), r = null;
  const a = me(e).position === "fixed";
  let s = a ? ze(e) : e;
  for (; fe(s) && !tt(s); ) {
    const i = me(s), d = go(s);
    !d && i.position === "fixed" && (r = null), (a ? !d && !r : !d && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || pt(s) && !d && Mn(e, s)) ? n = n.filter((p) => p !== s) : r = i, s = ze(s);
  }
  return t.set(e, n), n;
}
function Pa(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: r
  } = e;
  const s = [...o === "clippingAncestors" ? Bt(t) ? [] : Ba(t, this._c) : [].concat(o), n], i = s[0], d = s.reduce((c, p) => {
    const u = jo(t, p, r);
    return c.top = ae(u.top, c.top), c.right = ge(u.right, c.right), c.bottom = ge(u.bottom, c.bottom), c.left = ae(u.left, c.left), c;
  }, jo(t, i, r));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Sa(e) {
  const {
    width: t,
    height: o
  } = Pn(e);
  return {
    width: t,
    height: o
  };
}
function $a(e, t, o) {
  const n = ve(t), r = Be(t), a = o === "fixed", s = Ue(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ie(0);
  if (n || !n && !a)
    if ((He(t) !== "body" || pt(r)) && (i = Pt(t)), n) {
      const u = Ue(t, !0, a, t);
      d.x = u.x + t.clientLeft, d.y = u.y + t.clientTop;
    } else r && (d.x = $n(r));
  const c = s.left + i.scrollLeft - d.x, p = s.top + i.scrollTop - d.y;
  return {
    x: c,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Nt(e) {
  return me(e).position === "static";
}
function Wo(e, t) {
  return !ve(e) || me(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Rn(e, t) {
  const o = se(e);
  if (Bt(e))
    return o;
  if (!ve(e)) {
    let r = ze(e);
    for (; r && !tt(r); ) {
      if (fe(r) && !Nt(r))
        return r;
      r = ze(r);
    }
    return o;
  }
  let n = Wo(e, t);
  for (; n && xa(n) && Nt(n); )
    n = Wo(n, t);
  return n && tt(n) && Nt(n) && !go(n) ? o : n || _a(e) || o;
}
const Ma = async function(e) {
  const t = this.getOffsetParent || Rn, o = this.getDimensions, n = await o(e.floating);
  return {
    reference: $a(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Ra(e) {
  return me(e).direction === "rtl";
}
const Fa = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ea,
  getDocumentElement: Be,
  getClippingRect: Pa,
  getOffsetParent: Rn,
  getElementRects: Ma,
  getClientRects: Oa,
  getDimensions: Sa,
  getScale: Qe,
  isElement: fe,
  isRTL: Ra
};
function Ia(e, t) {
  let o = null, n;
  const r = Be(e);
  function a() {
    var i;
    clearTimeout(n), (i = o) == null || i.disconnect(), o = null;
  }
  function s(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), a();
    const {
      left: c,
      top: p,
      width: u,
      height: f
    } = e.getBoundingClientRect();
    if (i || t(), !u || !f)
      return;
    const m = yt(p), g = yt(r.clientWidth - (c + u)), v = yt(r.clientHeight - (p + f)), b = yt(c), k = {
      rootMargin: -m + "px " + -g + "px " + -v + "px " + -b + "px",
      threshold: ae(0, ge(1, d)) || 1
    };
    let O = !0;
    function A(D) {
      const R = D[0].intersectionRatio;
      if (R !== d) {
        if (!O)
          return s();
        R ? s(!1, R) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O = !1;
    }
    try {
      o = new IntersectionObserver(A, {
        ...k,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(A, k);
    }
    o.observe(e);
  }
  return s(!0), a;
}
function La(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, c = ho(e), p = r || a ? [...c ? ct(c) : [], ...ct(t)] : [];
  p.forEach((C) => {
    r && C.addEventListener("scroll", o, {
      passive: !0
    }), a && C.addEventListener("resize", o);
  });
  const u = c && i ? Ia(c, o) : null;
  let f = -1, m = null;
  s && (m = new ResizeObserver((C) => {
    let [k] = C;
    k && k.target === c && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var O;
      (O = m) == null || O.observe(t);
    })), o();
  }), c && !d && m.observe(c), m.observe(t));
  let g, v = d ? Ue(e) : null;
  d && b();
  function b() {
    const C = Ue(e);
    v && (C.x !== v.x || C.y !== v.y || C.width !== v.width || C.height !== v.height) && o(), v = C, g = requestAnimationFrame(b);
  }
  return o(), () => {
    var C;
    p.forEach((k) => {
      r && k.removeEventListener("scroll", o), a && k.removeEventListener("resize", o);
    }), u == null || u(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(g);
  };
}
const za = ha, Na = ya, Uo = ma, Va = wa, ja = ga, Wa = fa, Ua = ba, Ka = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), r = {
    platform: Fa,
    ...o
  }, a = {
    ...r.platform,
    _c: n
  };
  return pa(e, t, {
    ...r,
    platform: a
  });
};
function Ga(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Qt(e) {
  if (Ga(e)) {
    const t = e.$el;
    return mo(t) && He(t) === "#comment" ? null : t;
  }
  return e;
}
function Ze(e) {
  return typeof e == "function" ? e() : l(e);
}
function Ha(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = Qt(Ze(e.element));
      return o == null ? {} : Wa({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Fn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ko(e, t) {
  const o = Fn(e);
  return Math.round(t * o) / o;
}
function qa(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, r = P(() => {
    var F;
    return (F = Ze(o.open)) != null ? F : !0;
  }), a = P(() => Ze(o.middleware)), s = P(() => {
    var F;
    return (F = Ze(o.placement)) != null ? F : "bottom";
  }), i = P(() => {
    var F;
    return (F = Ze(o.strategy)) != null ? F : "absolute";
  }), d = P(() => {
    var F;
    return (F = Ze(o.transform)) != null ? F : !0;
  }), c = P(() => Qt(e.value)), p = P(() => Qt(t.value)), u = T(0), f = T(0), m = T(i.value), g = T(s.value), v = sn({}), b = T(!1), C = P(() => {
    const F = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return F;
    const K = Ko(p.value, u.value), W = Ko(p.value, f.value);
    return d.value ? {
      ...F,
      transform: "translate(" + K + "px, " + W + "px)",
      ...Fn(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: K + "px",
      top: W + "px"
    };
  });
  let k;
  function O() {
    c.value == null || p.value == null || Ka(c.value, p.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((F) => {
      u.value = F.x, f.value = F.y, m.value = F.strategy, g.value = F.placement, v.value = F.middlewareData, b.value = !0;
    });
  }
  function A() {
    typeof k == "function" && (k(), k = void 0);
  }
  function D() {
    if (A(), n === void 0) {
      O();
      return;
    }
    if (c.value != null && p.value != null) {
      k = n(c.value, p.value, O);
      return;
    }
  }
  function R() {
    r.value || (b.value = !1);
  }
  return J([a, s, i], O, {
    flush: "sync"
  }), J([c, p], D, {
    flush: "sync"
  }), J(r, R, {
    flush: "sync"
  }), ln() && dn(A), {
    x: Xe(u),
    y: Xe(f),
    strategy: Xe(m),
    placement: Xe(g),
    middlewareData: Xe(v),
    isPositioned: Xe(b),
    floatingStyles: C,
    update: O
  };
}
function ee(e, t) {
  const o = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(o);
  return [(r) => {
    const a = vn(n, r);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (hn(n, r), r)];
}
function In(e, t, o) {
  const n = o.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(r);
}
function Xa(e, t) {
  var o;
  const n = sn();
  return ne(() => {
    n.value = e();
  }, {
    ...t,
    flush: (o = void 0) != null ? o : "sync"
  }), io(n);
}
function ft(e) {
  return ln() ? (dn(e), !0) : !1;
}
function Ya(e) {
  let t = !1, o;
  const n = mn(!0);
  return (...r) => (t || (o = n.run(() => e(...r)), t = !0), o);
}
function Ln(e) {
  let t = 0, o, n;
  const r = () => {
    t -= 1, n && t <= 0 && (n.stop(), o = void 0, n = void 0);
  };
  return (...a) => (t += 1, o || (n = mn(!0), o = n.run(() => e(...a))), ft(r), o);
}
function Fe(e) {
  return typeof e == "function" ? e() : l(e);
}
const be = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Za = (e) => typeof e < "u", Ja = Object.prototype.toString, Qa = (e) => Ja.call(e) === "[object Object]", zn = () => {
}, Go = /* @__PURE__ */ es();
function es() {
  var e, t;
  return be && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function ts(e) {
  return Ge();
}
function os(e, t = 1e4) {
  return Ir((o, n) => {
    let r = Fe(e), a;
    const s = () => setTimeout(() => {
      r = Fe(e), n();
    }, Fe(t));
    return ft(() => {
      clearTimeout(a);
    }), {
      get() {
        return o(), r;
      },
      set(i) {
        r = i, n(), clearTimeout(a), a = s();
      }
    };
  });
}
function ns(e, t) {
  ts() && Rr(e, t);
}
function rs(e, t, o = {}) {
  const {
    immediate: n = !0
  } = o, r = T(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = !1, s();
  }
  function d(...c) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...c);
    }, Fe(t));
  }
  return n && (r.value = !0, be && d()), ft(i), {
    isPending: io(r),
    start: d,
    stop: i
  };
}
function as(e = 1e3, t = {}) {
  const {
    controls: o = !1,
    callback: n
  } = t, r = rs(
    n ?? zn,
    e,
    t
  ), a = P(() => !r.isPending.value);
  return o ? {
    ready: a,
    ...r
  } : a;
}
function he(e) {
  var t;
  const o = Fe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const yo = be ? window : void 0;
function Dt(...e) {
  let t, o, n, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, r] = e, t = yo) : [t, o, n, r] = e, !t)
    return zn;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const a = [], s = () => {
    a.forEach((p) => p()), a.length = 0;
  }, i = (p, u, f, m) => (p.addEventListener(u, f, m), () => p.removeEventListener(u, f, m)), d = J(
    () => [he(t), Fe(r)],
    ([p, u]) => {
      if (s(), !p)
        return;
      const f = Qa(u) ? { ...u } : u;
      a.push(
        ...o.flatMap((m) => n.map((g) => i(p, m, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), s();
  };
  return ft(c), c;
}
function ss(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function bo(...e) {
  let t, o, n = {};
  e.length === 3 ? (t = e[0], o = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], n = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: r = yo,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = n, d = ss(t);
  return Dt(r, a, (c) => {
    c.repeat && Fe(i) || d(c) && o(c);
  }, s);
}
function is() {
  const e = T(!1), t = Ge();
  return t && ce(() => {
    e.value = !0;
  }, t), e;
}
function Nn(e, t = {}) {
  const {
    immediate: o = !0,
    fpsLimit: n = void 0,
    window: r = yo
  } = t, a = T(!1), s = n ? 1e3 / n : null;
  let i = 0, d = null;
  function c(f) {
    if (!a.value || !r)
      return;
    i || (i = f);
    const m = f - i;
    if (s && m < s) {
      d = r.requestAnimationFrame(c);
      return;
    }
    i = f, e({ delta: m, timestamp: f }), d = r.requestAnimationFrame(c);
  }
  function p() {
    !a.value && r && (a.value = !0, i = 0, d = r.requestAnimationFrame(c));
  }
  function u() {
    a.value = !1, d != null && r && (r.cancelAnimationFrame(d), d = null);
  }
  return o && p(), ft(u), {
    isActive: io(a),
    pause: u,
    resume: p
  };
}
function ls(e) {
  return JSON.parse(JSON.stringify(e));
}
function we(e, t, o, n = {}) {
  var r, a, s;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: c,
    deep: p = !1,
    defaultValue: u,
    shouldEmit: f
  } = n, m = Ge(), g = o || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((s = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let v = c;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const b = (O) => i ? typeof i == "function" ? i(O) : ls(O) : O, C = () => Za(e[t]) ? b(e[t]) : u, k = (O) => {
    f ? f(O) && g(v, O) : g(v, O);
  };
  if (d) {
    const O = C(), A = T(O);
    let D = !1;
    return J(
      () => e[t],
      (R) => {
        D || (D = !0, A.value = b(R), oe(() => D = !1));
      }
    ), J(
      A,
      (R) => {
        !D && (R !== e[t] || p) && k(R);
      },
      { deep: p }
    ), A;
  } else
    return P({
      get() {
        return C();
      },
      set(O) {
        k(O);
      }
    });
}
function wo(e) {
  return e ? e.flatMap((t) => t.type === Ee ? wo(t.children) : [t]) : [];
}
const ds = ["INPUT", "TEXTAREA"];
function cs(e, t, o, n = {}) {
  if (!t || n.enableIgnoredElement && ds.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: r = "both",
    attributeName: a = "[data-radix-vue-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: d = "ltr",
    preventScroll: c = !0,
    focus: p = !1
  } = n, [u, f, m, g, v, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || g, k = u || f;
  if (!v && !b && (!C && !k || r === "vertical" && k || r === "horizontal" && C))
    return null;
  const O = o ? Array.from(o.querySelectorAll(a)) : s;
  if (!O.length)
    return null;
  c && e.preventDefault();
  let A = null;
  return k || C ? A = Vn(O, t, {
    goForward: C ? g : d === "ltr" ? u : f,
    loop: i
  }) : v ? A = O.at(0) || null : b && (A = O.at(-1) || null), p && (A == null || A.focus()), A;
}
function Vn(e, t, o, n = e.length) {
  if (--n === 0)
    return null;
  const r = e.indexOf(t), a = o.goForward ? r + 1 : r - 1;
  if (!o.loop && (a < 0 || a >= e.length))
    return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Vn(
    e,
    i,
    o,
    n
  ) : i : null;
}
function Vt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function eo(e, t, o = ".", n) {
  if (!Vt(t))
    return eo(e, {}, o);
  const r = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (Array.isArray(s) && Array.isArray(r[a]) ? r[a] = [...s, ...r[a]] : Vt(s) && Vt(r[a]) ? r[a] = eo(
      s,
      r[a],
      (o ? `${o}.` : "") + a.toString()
    ) : r[a] = s);
  }
  return r;
}
function us(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((o, n) => eo(o, n, ""), {})
  );
}
const ps = us(), [xo, jd] = ee("ConfigProvider");
let fs = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", ms = (e = 21) => {
  let t = "", o = e;
  for (; o--; )
    t += fs[Math.random() * 64 | 0];
  return t;
};
const gs = Ln(() => {
  const e = T(/* @__PURE__ */ new Map()), t = T(), o = P(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), n = xo({
    scrollBody: T(!0)
  });
  let r = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Go && (r == null || r()), t.value = void 0;
  };
  return J(o, (s, i) => {
    var d;
    if (!be)
      return;
    if (!s) {
      i && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, p = { padding: c, margin: 0 }, u = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? ps({
      padding: n.scrollBody.value.padding === !0 ? c : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? c : n.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${u.padding}px`, document.body.style.marginRight = `${u.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Go && (r = Dt(
      document,
      "touchmove",
      (f) => {
        var m;
        f.target === document.documentElement && (f.touches.length > 1 || (m = f.preventDefault) == null || m.call(f));
      },
      { passive: !1 }
    )), oe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function jn(e) {
  const t = ms(6), o = gs();
  o.value.set(t, e ?? !1);
  const n = P({
    get: () => o.value.get(t) ?? !1,
    set: (r) => o.value.set(t, r)
  });
  return ns(() => {
    o.value.delete(t);
  }), n;
}
const vs = "data-radix-vue-collection-item";
function Wn(e, t = vs) {
  const o = Symbol();
  return { createCollection: (n) => {
    const r = T([]);
    function a() {
      const s = he(n);
      return s ? r.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return $r(() => {
      r.value = [];
    }), ce(a), Mr(a), J(() => n == null ? void 0 : n.value, a, { immediate: !0 }), hn(o, r), r;
  }, injectCollection: () => vn(o, T([])) };
}
function _o(e) {
  const t = xo({
    dir: T("ltr")
  });
  return P(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function Ne(e) {
  const t = Ge(), o = t == null ? void 0 : t.type.emits, n = {};
  return o != null && o.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), o == null || o.forEach((r) => {
    n[Sr(cn(r))] = (...a) => e(r, ...a);
  }), n;
}
let jt = 0;
function hs() {
  ne((e) => {
    if (!be)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ho()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ho()
    ), jt++, e(() => {
      jt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), jt--;
    });
  });
}
function Ho() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function ys(e) {
  return P(() => {
    var t;
    return Fe(e) ? !!((t = he(e)) != null && t.closest("form")) : !0;
  });
}
function mt(e) {
  const t = Ge(), o = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (r[a] = s), r;
  }, {}), n = Dr(e);
  return P(() => {
    const r = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      r[cn(s)] = a[s];
    }), Object.keys({ ...o, ...r }).reduce((s, i) => (n.value[i] !== void 0 && (s[i] = n.value[i]), s), {});
  });
}
function Y(e, t) {
  const o = mt(e), n = t ? Ne(t) : {};
  return P(() => ({
    ...o.value,
    ...n
  }));
}
function M() {
  const e = Ge(), t = T(), o = P(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : he(t);
  }), n = Object.assign({}, e.exposed), r = {};
  for (const s in e.props)
    Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(n).length > 0)
    for (const s in n)
      Object.defineProperty(r, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function a(s) {
    t.value = s, !(s instanceof Element || !s) && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s.$el
    }), e.exposed = r);
  }
  return { forwardRef: a, currentRef: t, currentElement: o };
}
var bs = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ye = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), wt = {}, Wt = 0, Un = function(e) {
  return e && (e.host || Un(e.parentNode));
}, ws = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var n = Un(o);
    return n && e.contains(n) ? n : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, xs = function(e, t, o, n) {
  var r = ws(t, Array.isArray(e) ? e : [e]);
  wt[o] || (wt[o] = /* @__PURE__ */ new WeakMap());
  var a = wt[o], s = [], i = /* @__PURE__ */ new Set(), d = new Set(r), c = function(u) {
    !u || i.has(u) || (i.add(u), c(u.parentNode));
  };
  r.forEach(c);
  var p = function(u) {
    !u || d.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (i.has(f))
        p(f);
      else
        try {
          var m = f.getAttribute(n), g = m !== null && m !== "false", v = (Ye.get(f) || 0) + 1, b = (a.get(f) || 0) + 1;
          Ye.set(f, v), a.set(f, b), s.push(f), v === 1 && g && bt.set(f, !0), b === 1 && f.setAttribute(o, "true"), g || f.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return p(t), i.clear(), Wt++, function() {
    s.forEach(function(u) {
      var f = Ye.get(u) - 1, m = a.get(u) - 1;
      Ye.set(u, f), a.set(u, m), f || (bt.has(u) || u.removeAttribute(n), bt.delete(u)), m || u.removeAttribute(o);
    }), Wt--, Wt || (Ye = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), wt = {});
  };
}, _s = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), r = bs(e);
  return r ? (n.push.apply(n, Array.from(r.querySelectorAll("[aria-live]"))), xs(n, r, o, "aria-hidden")) : function() {
    return null;
  };
};
function Kn(e) {
  let t;
  J(() => he(e), (o) => {
    o ? t = _s(o) : t && t();
  }), ot(() => {
    t && t();
  });
}
let Cs = 0;
function Ke(e, t = "radix") {
  const { useId: o } = xo({ useId: void 0 });
  return o && typeof o == "function" ? `${t}-${o()}` : `${t}-${++Cs}`;
}
function ks(e) {
  const t = T(), o = P(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), n = P(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return ce(() => {
    const r = he(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const a = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let d, c;
        if ("borderBoxSize" in i) {
          const p = i.borderBoxSize, u = Array.isArray(p) ? p[0] : p;
          d = u.inlineSize, c = u.blockSize;
        } else
          d = r.offsetWidth, c = r.offsetHeight;
        t.value = { width: d, height: c };
      });
      return a.observe(r, { box: "border-box" }), () => a.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: o,
    height: n
  };
}
function Es(e, t) {
  const o = T(e);
  function n(r) {
    return t[o.value][r] ?? o.value;
  }
  return {
    state: o,
    dispatch: (r) => {
      o.value = n(r);
    }
  };
}
function Os(e) {
  const t = os("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, n) => {
      var r, a;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + o;
      const s = (e == null ? void 0 : e.value) ?? n, i = document.activeElement, d = ((a = (r = s.find((f) => f === i)) == null ? void 0 : r.textContent) == null ? void 0 : a.trim()) ?? "", c = s.map((f) => {
        var m;
        return ((m = f.textContent) == null ? void 0 : m.trim()) ?? "";
      }), p = Ds(c, t.value, d), u = s.find(
        (f) => {
          var m;
          return ((m = f.textContent) == null ? void 0 : m.trim()) === p;
        }
      );
      return u && u.focus(), u;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function As(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
function Ds(e, t, o) {
  const n = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, r = o ? e.indexOf(o) : -1;
  let a = As(e, Math.max(r, 0));
  n.length === 1 && (a = a.filter((i) => i !== o));
  const s = a.find(
    (i) => i.toLowerCase().startsWith(n.toLowerCase())
  );
  return s !== o ? s : void 0;
}
const Co = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      var n, r;
      if (!o.default)
        return null;
      const a = wo(o.default()), s = a.findIndex((p) => p.type !== Tr);
      if (s === -1)
        return a;
      const i = a[s];
      (n = i.props) == null || delete n.ref;
      const d = i.props ? S(t, i.props) : t;
      t.class && (r = i.props) != null && r.class && delete i.props.class;
      const c = Br(i, d);
      for (const p in d)
        p.startsWith("on") && (c.props || (c.props = {}), c.props[p] = d[p]);
      return a.length === 1 ? c : (a[s] = c, a);
    };
  }
}), G = w({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => Je(n, t) : n !== "template" ? () => Je(e.as, t, { default: o.default }) : () => Je(Co, t, { default: o.default });
  }
});
function Gn() {
  const e = T(), t = P(() => {
    var o, n;
    return ["#text", "#comment"].includes((o = e.value) == null ? void 0 : o.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : he(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function Ts(e, t) {
  const o = T({}), n = T("none"), r = e.value ? "mounted" : "unmounted", { state: a, dispatch: s } = Es(r, {
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
  }), i = (f) => {
    var m;
    if (be) {
      const g = new CustomEvent(f, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(g);
    }
  };
  J(
    e,
    async (f, m) => {
      var g;
      const v = m !== f;
      if (await oe(), v) {
        const b = n.value, C = xt(t.value);
        f ? (s("MOUNT"), i("enter"), C === "none" && i("after-enter")) : C === "none" || ((g = o.value) == null ? void 0 : g.display) === "none" ? (s("UNMOUNT"), i("leave"), i("after-leave")) : m && b !== C ? (s("ANIMATION_OUT"), i("leave")) : (s("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (f) => {
    const m = xt(t.value), g = m.includes(
      f.animationName
    ), v = a.value === "mounted" ? "enter" : "leave";
    f.target === t.value && g && (i(`after-${v}`), s("ANIMATION_END")), f.target === t.value && m === "none" && s("ANIMATION_END");
  }, c = (f) => {
    f.target === t.value && (n.value = xt(t.value));
  }, p = J(
    t,
    (f, m) => {
      f ? (o.value = getComputedStyle(f), f.addEventListener("animationstart", c), f.addEventListener("animationcancel", d), f.addEventListener("animationend", d)) : (s("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), u = J(a, () => {
    const f = xt(t.value);
    n.value = a.value === "mounted" ? f : "none";
  });
  return ot(() => {
    p(), u();
  }), {
    isPresent: P(
      () => ["mounted", "unmountSuspended"].includes(a.value)
    )
  };
}
function xt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const rt = w({
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
    const { present: r, forceMount: a } = ye(e), s = T(), { isPresent: i } = Ts(r, s);
    o({ present: i });
    let d = t.default({ present: i });
    d = wo(d || []);
    const c = Ge();
    if (d && (d == null ? void 0 : d.length) > 1) {
      const p = (n = c == null ? void 0 : c.parent) != null && n.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((u) => `  - ${u}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => a.value || r.value || i.value ? Je(t.default({ present: i })[0], {
      ref: (p) => {
        const u = he(p);
        return typeof (u == null ? void 0 : u.hasAttribute) > "u" || (u != null && u.hasAttribute("data-radix-popper-content-wrapper") ? s.value = u.firstElementChild : s.value = u), u;
      }
    }) : null;
  }
}), [xe, Bs] = ee("DialogRoot"), Hn = /* @__PURE__ */ w({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = we(o, "open", t, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = T(), a = T(), { modal: s } = ye(o);
    return Bs({
      open: n,
      modal: s,
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
      triggerElement: r,
      contentElement: a
    }), (i, d) => _(i.$slots, "default", { open: l(n) });
  }
}), qn = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = xe(), { forwardRef: n, currentElement: r } = M();
    return o.contentId || (o.contentId = Ke(void 0, "radix-vue-dialog-content")), ce(() => {
      o.triggerElement.value = r.value;
    }), (a, s) => (h(), x(l(G), S(t, {
      ref: l(n),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(o).open.value || !1,
      "aria-controls": l(o).open.value ? l(o).contentId : void 0,
      "data-state": l(o).open.value ? "open" : "closed",
      onClick: l(o).onOpenToggle
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), ko = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = is();
    return (o, n) => l(t) || o.forceMount ? (h(), x(gn, {
      key: 0,
      to: o.to,
      disabled: o.disabled
    }, [
      _(o.$slots, "default")
    ], 8, ["to", "disabled"])) : le("", !0);
  }
}), Ps = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(ko), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ss = "dismissableLayer.pointerDownOutside", $s = "dismissableLayer.focusOutside";
function Xn(e, t) {
  const o = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(o && n === o || r.indexOf(n) < r.indexOf(o));
}
function Ms(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = T(!1), a = T(() => {
  });
  return ne((s) => {
    if (!be)
      return;
    const i = async (c) => {
      const p = c.target;
      if (t != null && t.value) {
        if (Xn(t.value, p)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let u = function() {
            In(
              Ss,
              e,
              f
            );
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", a.value), a.value = u, n.addEventListener("click", a.value, {
            once: !0
          })) : u();
        } else
          n.removeEventListener("click", a.value);
        r.value = !1;
      }
    }, d = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(d), n.removeEventListener("pointerdown", i), n.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Rs(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = T(!1);
  return ne((a) => {
    if (!be)
      return;
    const s = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || Xn(t.value, i.target)) && i.target && !r.value && In(
        $s,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", s), a(() => n.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const pe = un({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yn = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: r, currentElement: a } = M(), s = P(
      () => {
        var g;
        return ((g = a.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), i = P(() => pe.layersRoot), d = P(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), c = P(() => pe.layersWithOutsidePointerEventsDisabled.size > 0), p = P(() => {
      const g = Array.from(i.value), [v] = [...pe.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(v);
      return d.value >= b;
    }), u = Ms(async (g) => {
      const v = [...pe.branches].some(
        (b) => b.contains(g.target)
      );
      !p.value || v || (n("pointerDownOutside", g), n("interactOutside", g), await oe(), g.defaultPrevented || n("dismiss"));
    }, a), f = Rs((g) => {
      [...pe.branches].some(
        (v) => v.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, a);
    bo("Escape", (g) => {
      d.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let m;
    return ne((g) => {
      a.value && (o.disableOutsidePointerEvents && (pe.layersWithOutsidePointerEventsDisabled.size === 0 && (m = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), pe.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), g(() => {
        o.disableOutsidePointerEvents && pe.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = m);
      }));
    }), ne((g) => {
      g(() => {
        a.value && (i.value.delete(a.value), pe.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (g, v) => (h(), x(l(G), {
      ref: l(r),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: so({
        pointerEvents: c.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(f).onFocusCapture,
      onBlurCapture: l(f).onBlurCapture,
      onPointerdownCapture: l(u).onPointerDownCapture
    }, {
      default: y(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Fs = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = M();
    return ce(() => {
      pe.branches.add(n.value);
    }), ot(() => {
      pe.branches.delete(n.value);
    }), (r, a) => (h(), x(l(G), S({ ref: l(o) }, t), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ut = "focusScope.autoFocusOnMount", Kt = "focusScope.autoFocusOnUnmount", qo = { bubbles: !1, cancelable: !0 };
function kt(e, { select: t = !1 } = {}) {
  const o = document.activeElement;
  for (const n of e)
    if (Me(n, { select: t }), document.activeElement !== o)
      return !0;
}
function Is(e) {
  const t = Eo(e), o = Xo(t, e), n = Xo(t.reverse(), e);
  return [o, n];
}
function Eo(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const r = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || r ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function Xo(e, t) {
  for (const o of e)
    if (!Ls(o, { upTo: t }))
      return o;
}
function Ls(e, { upTo: t }) {
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
function zs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && zs(e) && t && e.select();
  }
}
const Ns = Ya(() => T([]));
function Vs() {
  const e = Ns();
  return {
    add(t) {
      const o = e.value[0];
      t !== o && (o == null || o.pause()), e.value = Yo(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var o;
      e.value = Yo(e.value, t), (o = e.value[0]) == null || o.resume();
    }
  };
}
function Yo(e, t) {
  const o = [...e], n = o.indexOf(t);
  return n !== -1 && o.splice(n, 1), o;
}
function js(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Zn = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, { currentRef: r, currentElement: a } = M(), s = T(null), i = Vs(), d = un({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ne((p) => {
      if (!be)
        return;
      const u = a.value;
      if (!o.trapped)
        return;
      function f(b) {
        if (d.paused || !u)
          return;
        const C = b.target;
        u.contains(C) ? s.value = C : Me(s.value, { select: !0 });
      }
      function m(b) {
        if (d.paused || !u)
          return;
        const C = b.relatedTarget;
        C !== null && (u.contains(C) || Me(s.value, { select: !0 }));
      }
      function g(b) {
        u.contains(s.value) || Me(u);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const v = new MutationObserver(g);
      u && v.observe(u, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), v.disconnect();
      });
    }), ne(async (p) => {
      const u = a.value;
      if (await oe(), !u)
        return;
      i.add(d);
      const f = document.activeElement;
      if (!u.contains(f)) {
        const m = new CustomEvent(Ut, qo);
        u.addEventListener(Ut, (g) => n("mountAutoFocus", g)), u.dispatchEvent(m), m.defaultPrevented || (kt(js(Eo(u)), {
          select: !0
        }), document.activeElement === f && Me(u));
      }
      p(() => {
        u.removeEventListener(Ut, (v) => n("mountAutoFocus", v));
        const m = new CustomEvent(Kt, qo), g = (v) => {
          n("unmountAutoFocus", v);
        };
        u.addEventListener(Kt, g), u.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Me(f ?? document.body, { select: !0 }), u.removeEventListener(Kt, g), i.remove(d);
        }, 0);
      });
    });
    function c(p) {
      if (!o.loop && !o.trapped || d.paused)
        return;
      const u = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (u && f) {
        const m = p.currentTarget, [g, v] = Is(m);
        g && v ? !p.shiftKey && f === v ? (p.preventDefault(), o.loop && Me(g, { select: !0 })) : p.shiftKey && f === g && (p.preventDefault(), o.loop && Me(v, { select: !0 })) : f === m && p.preventDefault();
      }
    }
    return (p, u) => (h(), x(l(G), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: c
    }, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Ws = "menu.itemSelect", to = ["Enter", " "], Us = ["ArrowDown", "PageUp", "Home"], Jn = ["ArrowUp", "PageDown", "End"], Ks = [...Us, ...Jn], Gs = {
  ltr: [...to, "ArrowRight"],
  rtl: [...to, "ArrowLeft"]
}, Hs = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Oo(e) {
  return e ? "open" : "closed";
}
function Tt(e) {
  return e === "indeterminate";
}
function Ao(e) {
  return Tt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function qs(e) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus(), document.activeElement !== t))
      return;
}
function Xs(e, t) {
  const { x: o, y: n } = e;
  let r = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, d = t[a].y, c = t[s].x, p = t[s].y;
    d > n != p > n && o < (c - i) * (n - d) / (p - d) + i && (r = !r);
  }
  return r;
}
function Ys(e, t) {
  if (!t)
    return !1;
  const o = { x: e.clientX, y: e.clientY };
  return Xs(o, t);
}
function ut(e) {
  return e.pointerType === "mouse";
}
const Zs = "DialogTitle", Js = "DialogContent";
function Qs({
  titleName: e = Zs,
  contentName: t = Js,
  componentLink: o = "dialog.html#title",
  titleId: n,
  descriptionId: r,
  contentElement: a
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${o}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ce(() => {
    var d;
    document.getElementById(n) || console.warn(s);
    const c = (d = a.value) == null ? void 0 : d.getAttribute("aria-describedby");
    r && !c && (document.getElementById(r) || console.warn(i));
  });
}
const Qn = /* @__PURE__ */ w({
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
    const o = e, n = t, r = xe(), { forwardRef: a, currentElement: s } = M();
    return r.titleId || (r.titleId = Ke(void 0, "radix-vue-dialog-title")), r.descriptionId || (r.descriptionId = Ke(void 0, "radix-vue-dialog-description")), ce(() => {
      r.contentElement = s, document.activeElement !== document.body && (r.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Qs({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: r.contentElement
    }), (i, d) => (h(), x(l(Zn), {
      "as-child": "",
      loop: "",
      trapped: o.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => n("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => n("closeAutoFocus", c))
    }, {
      default: y(() => [
        V(l(Yn), S({
          id: l(r).contentId,
          ref: l(a),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(r).descriptionId,
          "aria-labelledby": l(r).titleId,
          "data-state": l(Oo)(l(r).open.value)
        }, i.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => l(r).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => n("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => n("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => n("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => n("pointerDownOutside", c))
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
}), ei = /* @__PURE__ */ w({
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
    const o = e, n = t, r = xe(), a = Ne(n), { forwardRef: s, currentElement: i } = M();
    return Kn(i), (d, c) => (h(), x(Qn, S({ ...o, ...l(a) }, {
      ref: l(s),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: c[0] || (c[0] = (p) => {
        var u;
        p.defaultPrevented || (p.preventDefault(), (u = l(r).triggerElement.value) == null || u.focus());
      }),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        const u = p.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0;
        (u.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: c[2] || (c[2] = (p) => {
        p.preventDefault();
      })
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), ti = /* @__PURE__ */ w({
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
    const o = e, n = Ne(t);
    M();
    const r = xe(), a = T(!1), s = T(!1);
    return (i, d) => (h(), x(Qn, S({ ...o, ...l(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (a.value || (p = l(r).triggerElement.value) == null || p.focus(), c.preventDefault()), a.value = !1, s.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var p;
        c.defaultPrevented || (a.value = !0, c.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const u = c.target;
        (p = l(r).triggerElement.value) != null && p.contains(u) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), er = /* @__PURE__ */ w({
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
    const o = e, n = t, r = xe(), a = Ne(n), { forwardRef: s } = M();
    return (i, d) => (h(), x(l(rt), {
      present: i.forceMount || l(r).open.value
    }, {
      default: y(() => [
        l(r).modal.value ? (h(), x(ei, S({
          key: 0,
          ref: l(s)
        }, { ...o, ...l(a), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(ti, S({
          key: 1,
          ref: l(s)
        }, { ...o, ...l(a), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), oi = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = xe();
    return jn(!0), M(), (o, n) => (h(), x(l(G), {
      as: o.as,
      "as-child": o.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), tr = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = xe(), { forwardRef: o } = M();
    return (n, r) => {
      var a;
      return (a = l(t)) != null && a.modal.value ? (h(), x(l(rt), {
        key: 0,
        present: n.forceMount || l(t).open.value
      }, {
        default: y(() => [
          V(oi, S(n.$attrs, {
            ref: l(o),
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
      }, 8, ["present"])) : le("", !0);
    };
  }
}), St = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const o = xe();
    return (n, r) => (h(), x(l(G), S(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (a) => l(o).onOpenChange(!1))
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), or = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, o = xe();
    return M(), (n, r) => (h(), x(l(G), S(t, {
      id: l(o).titleId
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), nr = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    M();
    const o = xe();
    return (n, r) => (h(), x(l(G), S(t, {
      id: l(o).descriptionId
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ni = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Y(e, t);
    return M(), (n, r) => (h(), x(l(Hn), S(l(o), { modal: !0 }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ri = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(qn), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ai = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(ko), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [si, ii] = ee("AlertDialogContent"), li = /* @__PURE__ */ w({
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
    const o = e, n = Ne(t);
    M();
    const r = T();
    return ii({
      onCancelElementChange: (a) => {
        r.value = a;
      }
    }), (a, s) => (h(), x(l(er), S({ ...o, ...l(n) }, {
      role: "alertdialog",
      onPointerDownOutside: s[0] || (s[0] = We(() => {
      }, ["prevent"])),
      onInteractOutside: s[1] || (s[1] = We(() => {
      }, ["prevent"])),
      onOpenAutoFocus: s[2] || (s[2] = () => {
        oe(() => {
          var i;
          (i = r.value) == null || i.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), di = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(tr), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ci = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = si(), { forwardRef: n, currentElement: r } = M();
    return ce(() => {
      o.onCancelElementChange(r.value);
    }), (a, s) => (h(), x(l(St), S(t, { ref: l(n) }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ui = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(or), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pi = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(nr), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fi = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(St), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rr, mi] = ee("PopperRoot"), ar = /* @__PURE__ */ w({
  __name: "PopperRoot",
  setup(e) {
    const t = T();
    return mi({
      anchor: t,
      onAnchorChange: (o) => t.value = o
    }), (o, n) => _(o.$slots, "default");
  }
}), gi = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = M(), r = rr();
    return ne(() => {
      r.onAnchorChange(t.element ?? n.value);
    }), (a, s) => (h(), x(l(G), {
      ref: l(o),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function vi(e) {
  return e !== null;
}
function hi(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var o, n, r;
      const { placement: a, rects: s, middlewareData: i } = t, d = ((o = i.arrow) == null ? void 0 : o.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [u, f] = oo(a), m = { start: "0%", center: "50%", end: "100%" }[f], g = (((n = i.arrow) == null ? void 0 : n.x) ?? 0) + c / 2, v = (((r = i.arrow) == null ? void 0 : r.y) ?? 0) + p / 2;
      let b = "", C = "";
      return u === "bottom" ? (b = d ? m : `${g}px`, C = `${-p}px`) : u === "top" ? (b = d ? m : `${g}px`, C = `${s.floating.height + p}px`) : u === "right" ? (b = `${-p}px`, C = d ? m : `${v}px`) : u === "left" && (b = `${s.floating.width + p}px`, C = d ? m : `${v}px`), { data: { x: b, y: C } };
    }
  };
}
function oo(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
const sr = {
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
}, [Wd, yi] = ee("PopperContent"), bi = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ yn({
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
    ...sr
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, r = rr(), { forwardRef: a, currentElement: s } = M(), i = T(), d = T(), { width: c, height: p } = ks(d), u = P(
      () => o.side + (o.align !== "center" ? `-${o.align}` : "")
    ), f = P(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), m = P(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), g = P(() => ({
      padding: f.value,
      boundary: m.value.filter(vi),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), v = Xa(() => [
      za({
        mainAxis: o.sideOffset + p.value,
        alignmentAxis: o.alignOffset
      }),
      o.prioritizePosition && o.avoidCollisions && Uo({
        ...g.value
      }),
      o.avoidCollisions && Na({
        mainAxis: !0,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? Ua() : void 0,
        ...g.value
      }),
      !o.prioritizePosition && o.avoidCollisions && Uo({
        ...g.value
      }),
      Va({
        ...g.value,
        apply: ({ elements: E, rects: $, availableWidth: B, availableHeight: q }) => {
          const { width: z, height: Q } = $.reference, Z = E.floating.style;
          Z.setProperty(
            "--radix-popper-available-width",
            `${B}px`
          ), Z.setProperty(
            "--radix-popper-available-height",
            `${q}px`
          ), Z.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), Z.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      d.value && Ha({ element: d.value, padding: o.arrowPadding }),
      hi({
        arrowWidth: c.value,
        arrowHeight: p.value
      }),
      o.hideWhenDetached && ja({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: b, placement: C, isPositioned: k, middlewareData: O } = qa(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: u,
        whileElementsMounted: (...E) => La(...E, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), A = P(
      () => oo(C.value)[0]
    ), D = P(
      () => oo(C.value)[1]
    );
    Fr(() => {
      k.value && n("placed");
    });
    const R = P(
      () => {
        var E;
        return ((E = O.value.arrow) == null ? void 0 : E.centerOffset) !== 0;
      }
    ), F = T("");
    ne(() => {
      s.value && (F.value = window.getComputedStyle(s.value).zIndex);
    });
    const K = P(() => {
      var E;
      return ((E = O.value.arrow) == null ? void 0 : E.x) ?? 0;
    }), W = P(() => {
      var E;
      return ((E = O.value.arrow) == null ? void 0 : E.y) ?? 0;
    });
    return yi({
      placedSide: A,
      onArrowChange: (E) => d.value = E,
      arrowX: K,
      arrowY: W,
      shouldHideArrow: R
    }), (E, $) => {
      var B, q, z;
      return h(), X("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: so({
          ...l(b),
          transform: l(k) ? l(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: F.value,
          "--radix-popper-transform-origin": [
            (B = l(O).transformOrigin) == null ? void 0 : B.x,
            (q = l(O).transformOrigin) == null ? void 0 : q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = l(O).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        V(l(G), S({ ref: l(a) }, E.$attrs, {
          "as-child": o.asChild,
          as: E.as,
          "data-side": A.value,
          "data-align": D.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(k) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            _(E.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), ir = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), (t, o) => (h(), x(l(G), {
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
}), wi = "data-radix-vue-collection-item", [Do, xi] = ee("CollectionProvider");
function _i(e = wi) {
  const t = T(/* @__PURE__ */ new Map()), o = T(), n = xi({
    collectionRef: o,
    itemMap: t,
    attrName: e
  }), { getItems: r } = Ei(n), a = P(() => Array.from(n.itemMap.value.values())), s = P(() => n.itemMap.value.size);
  return { getItems: r, reactiveItems: a, itemMapSize: s };
}
const Ci = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const o = Do(), { primitiveElement: n, currentElement: r } = Gn();
    return J(r, () => {
      o.collectionRef.value = r.value;
    }), () => Je(Co, { ref: n }, t);
  }
}), ki = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: o }) {
    const n = Do(), { primitiveElement: r, currentElement: a } = Gn();
    return ne((s) => {
      if (a.value) {
        const i = Pr(a.value);
        n.itemMap.value.set(i, { ref: a.value, value: e.value }), s(() => n.itemMap.value.delete(i));
      }
    }), () => Je(Co, { ...o, [n.attrName]: "", ref: r }, t);
  }
});
function Ei(e) {
  const t = e ?? Do();
  return { getItems: () => {
    const o = t.collectionRef.value;
    if (!o)
      return [];
    const n = Array.from(o.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, a) => n.indexOf(r.ref) - n.indexOf(a.ref)
    );
  } };
}
const lr = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(gi), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Oi() {
  const e = T(!1);
  return ce(() => {
    Dt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Dt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Ai = Ln(Oi), [qe, dr] = ee(["MenuRoot", "MenuSub"], "MenuContext"), [gt, Di] = ee("MenuRoot"), Ti = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: r, dir: a } = ye(o), s = _o(a), i = we(o, "open", n), d = T(), c = Ai();
    return dr({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: d,
      onContentChange: (p) => {
        d.value = p;
      }
    }), Di({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: s,
      modal: r
    }), (p, u) => (h(), x(l(ar), null, {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Bi = "rovingFocusGroup.onEntryFocus", Pi = { bubbles: !1, cancelable: !0 };
function Si(e, t = !1) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus({ preventScroll: t }), document.activeElement !== o))
      return;
}
const [Ud, $i] = ee("RovingFocusGroup"), Mi = /* @__PURE__ */ w({
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
    const n = e, r = o, { loop: a, orientation: s, dir: i } = ye(n), d = _o(i), c = we(n, "currentTabStopId", r, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), p = T(!1), u = T(!1), f = T(0), { getItems: m } = _i();
    function g(v) {
      const b = !u.value;
      if (v.currentTarget && v.target === v.currentTarget && b && !p.value) {
        const C = new CustomEvent(Bi, Pi);
        if (v.currentTarget.dispatchEvent(C), r("entryFocus", C), !C.defaultPrevented) {
          const k = m().map((R) => R.ref).filter((R) => R.dataset.disabled !== ""), O = k.find((R) => R.getAttribute("data-active") === "true"), A = k.find(
            (R) => R.id === c.value
          ), D = [O, A, ...k].filter(
            Boolean
          );
          Si(D, n.preventScrollOnEntryFocus);
        }
      }
      u.value = !1;
    }
    return t({
      getItems: m
    }), $i({
      loop: a,
      dir: d,
      orientation: s,
      currentTabStopId: c,
      onItemFocus: (v) => {
        c.value = v;
      },
      onItemShiftTab: () => {
        p.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (v, b) => (h(), x(l(Ci), null, {
      default: y(() => [
        V(l(G), {
          tabindex: p.value || f.value === 0 ? -1 : 0,
          "data-orientation": l(s),
          as: v.as,
          "as-child": v.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: b[0] || (b[0] = (C) => u.value = !0),
          onFocus: g,
          onBlur: b[1] || (b[1] = (C) => p.value = !1)
        }, {
          default: y(() => [
            _(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [To, Ri] = ee("MenuContent"), Bo = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ yn({
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
    ...sr
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, r = qe(), a = gt(), { trapFocus: s, disableOutsidePointerEvents: i, loop: d } = ye(o);
    hs(), jn(i.value);
    const c = T(""), p = T(0), u = T(0), f = T(null), m = T("right"), g = T(0), v = T(null), { createCollection: b } = Wn(), { forwardRef: C, currentElement: k } = M(), O = b(k);
    J(k, (E) => {
      r.onContentChange(E);
    });
    const { handleTypeaheadSearch: A } = Os(O);
    ot(() => {
      window.clearTimeout(p.value);
    });
    function D(E) {
      var $, B;
      return m.value === (($ = f.value) == null ? void 0 : $.side) && Ys(E, (B = f.value) == null ? void 0 : B.area);
    }
    async function R(E) {
      var $;
      n("openAutoFocus", E), !E.defaultPrevented && (E.preventDefault(), ($ = k.value) == null || $.focus({
        preventScroll: !0
      }));
    }
    function F(E) {
      if (E.defaultPrevented)
        return;
      const $ = E.target.closest("[data-radix-menu-content]") === E.currentTarget, B = E.ctrlKey || E.altKey || E.metaKey, q = E.key.length === 1, z = cs(
        E,
        document.activeElement,
        k.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (z)
        return z == null ? void 0 : z.focus();
      if (E.code === "Space" || ($ && (E.key === "Tab" && E.preventDefault(), !B && q && A(E.key)), E.target !== k.value) || !Ks.includes(E.key))
        return;
      E.preventDefault();
      const Q = O.value;
      Jn.includes(E.key) && Q.reverse(), qs(Q);
    }
    function K(E) {
      var $, B;
      (B = ($ = E == null ? void 0 : E.currentTarget) == null ? void 0 : $.contains) != null && B.call($, E.target) || (window.clearTimeout(p.value), c.value = "");
    }
    function W(E) {
      var $;
      if (!ut(E))
        return;
      const B = E.target, q = g.value !== E.clientX;
      if (($ = E == null ? void 0 : E.currentTarget) != null && $.contains(B) && q) {
        const z = E.clientX > g.value ? "right" : "left";
        m.value = z, g.value = E.clientX;
      }
    }
    return Ri({
      onItemEnter: (E) => !!D(E),
      onItemLeave: (E) => {
        var $;
        D(E) || (($ = k.value) == null || $.focus(), v.value = null);
      },
      onTriggerLeave: (E) => !!D(E),
      searchRef: c,
      pointerGraceTimerRef: u,
      onPointerGraceIntentChange: (E) => {
        f.value = E;
      }
    }), (E, $) => (h(), x(l(Zn), {
      "as-child": "",
      trapped: l(s),
      onMountAutoFocus: R,
      onUnmountAutoFocus: $[7] || ($[7] = (B) => n("closeAutoFocus", B))
    }, {
      default: y(() => [
        V(l(Yn), {
          "as-child": "",
          "disable-outside-pointer-events": l(i),
          onEscapeKeyDown: $[2] || ($[2] = (B) => n("escapeKeyDown", B)),
          onPointerDownOutside: $[3] || ($[3] = (B) => n("pointerDownOutside", B)),
          onFocusOutside: $[4] || ($[4] = (B) => n("focusOutside", B)),
          onInteractOutside: $[5] || ($[5] = (B) => n("interactOutside", B)),
          onDismiss: $[6] || ($[6] = (B) => n("dismiss"))
        }, {
          default: y(() => [
            V(l(Mi), {
              "current-tab-stop-id": v.value,
              "onUpdate:currentTabStopId": $[0] || ($[0] = (B) => v.value = B),
              "as-child": "",
              orientation: "vertical",
              dir: l(a).dir.value,
              loop: l(d),
              onEntryFocus: $[1] || ($[1] = (B) => {
                n("entryFocus", B), l(a).isUsingKeyboardRef.value || B.preventDefault();
              })
            }, {
              default: y(() => [
                V(l(bi), {
                  ref: l(C),
                  role: "menu",
                  as: E.as,
                  "as-child": E.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(Oo)(l(r).open.value),
                  dir: l(a).dir.value,
                  side: E.side,
                  "side-offset": E.sideOffset,
                  align: E.align,
                  "align-offset": E.alignOffset,
                  "avoid-collisions": E.avoidCollisions,
                  "collision-boundary": E.collisionBoundary,
                  "collision-padding": E.collisionPadding,
                  "arrow-padding": E.arrowPadding,
                  "prioritize-position": E.prioritizePosition,
                  sticky: E.sticky,
                  "hide-when-detached": E.hideWhenDetached,
                  onKeydown: F,
                  onBlur: K,
                  onPointermove: W
                }, {
                  default: y(() => [
                    _(E.$slots, "default")
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
}), cr = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = To(), { forwardRef: n } = M(), r = T(!1);
    async function a(i) {
      if (!i.defaultPrevented && ut(i)) {
        if (t.disabled)
          o.onItemLeave(i);
        else if (!o.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function s(i) {
      await oe(), !i.defaultPrevented && ut(i) && o.onItemLeave(i);
    }
    return (i, d) => (h(), x(l(ki), null, {
      default: y(() => [
        V(l(G), S({
          ref: l(n),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": r.value ? "" : void 0,
          onPointermove: a,
          onPointerleave: s,
          onFocus: d[0] || (d[0] = async (c) => {
            await oe(), !(c.defaultPrevented || i.disabled) && (r.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (c) => {
            await oe(), !c.defaultPrevented && (r.value = !1);
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
}), Po = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: r, currentElement: a } = M(), s = gt(), i = To(), d = T(!1);
    async function c() {
      const p = a.value;
      if (!o.disabled && p) {
        const u = new CustomEvent(Ws, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", u), await oe(), u.defaultPrevented ? d.value = !1 : s.onClose();
      }
    }
    return (p, u) => (h(), x(cr, S(o, {
      ref: l(r),
      onClick: c,
      onPointerdown: u[0] || (u[0] = () => {
        d.value = !0;
      }),
      onPointerup: u[1] || (u[1] = async (f) => {
        var m;
        await oe(), !f.defaultPrevented && (d.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: u[2] || (u[2] = async (f) => {
        const m = l(i).searchRef.value !== "";
        p.disabled || m && f.key === " " || l(to).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fi, ur] = ee(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Ii = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Fi({
      checked: T(!1)
    });
    return (o, n) => (h(), x(l(rt), {
      present: o.forceMount || l(Tt)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: y(() => [
        V(l(G), {
          as: o.as,
          "as-child": o.asChild,
          "data-state": l(Ao)(l(t).checked.value)
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
}), Li = /* @__PURE__ */ w({
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
    const o = e, n = t, r = we(o, "checked", n);
    return ur({ checked: r }), (a, s) => (h(), x(Po, S({ role: "menuitemcheckbox" }, o, {
      "aria-checked": l(Tt)(l(r)) ? "mixed" : l(r),
      "data-state": l(Ao)(l(r)),
      onSelect: s[0] || (s[0] = async (i) => {
        n("select", i), l(Tt)(l(r)) ? r.value = !0 : r.value = !l(r);
      })
    }), {
      default: y(() => [
        _(a.$slots, "default", { checked: l(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), zi = /* @__PURE__ */ w({
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
    const o = e, n = t, r = Y(o, n), a = qe(), { forwardRef: s, currentElement: i } = M();
    return Kn(i), (d, c) => (h(), x(Bo, S(l(r), {
      ref: l(s),
      "trap-focus": l(a).open.value,
      "disable-outside-pointer-events": l(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (p) => l(a).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = We((p) => n("focusOutside", p), ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Ni = /* @__PURE__ */ w({
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
    const o = Y(e, t), n = qe();
    return (r, a) => (h(), x(Bo, S(l(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (s) => l(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vi = /* @__PURE__ */ w({
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
    const o = Y(e, t), n = qe(), r = gt();
    return (a, s) => (h(), x(l(rt), {
      present: a.forceMount || l(n).open.value
    }, {
      default: y(() => [
        l(r).modal.value ? (h(), x(zi, N(S({ key: 0 }, { ...a.$attrs, ...l(o) })), {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(Ni, N(S({ key: 1 }, { ...a.$attrs, ...l(o) })), {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), pr = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(G), S({ role: "group" }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ji = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(G), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wi = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(ko), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ui, Ki] = ee("MenuRadioGroup"), Gi = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = we(o, "modelValue", t);
    return Ki({
      modelValue: n,
      onValueChange: (r) => {
        n.value = r;
      }
    }), (r, a) => (h(), x(pr, N(j(o)), {
      default: y(() => [
        _(r.$slots, "default", { modelValue: l(n) })
      ]),
      _: 3
    }, 16));
  }
}), Hi = /* @__PURE__ */ w({
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
    const o = e, n = t, { value: r } = ye(o), a = Ui(), s = P(
      () => a.modelValue.value === (r == null ? void 0 : r.value)
    );
    return ur({ checked: s }), (i, d) => (h(), x(Po, S({ role: "menuitemradio" }, o, {
      "aria-checked": s.value,
      "data-state": l(Ao)(s.value),
      onSelect: d[0] || (d[0] = async (c) => {
        n("select", c), l(a).onValueChange(l(r));
      })
    }), {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), qi = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(G), S(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [fr, Xi] = ee("MenuSub"), Yi = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = we(o, "open", t, {
      defaultValue: !1,
      passive: o.open === void 0
    }), r = qe(), a = T(), s = T();
    return ne((i) => {
      (r == null ? void 0 : r.open.value) === !1 && (n.value = !1), i(() => n.value = !1);
    }), dr({
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: s,
      onContentChange: (i) => {
        s.value = i;
      }
    }), Xi({
      triggerId: "",
      contentId: "",
      trigger: a,
      onTriggerChange: (i) => {
        a.value = i;
      }
    }), (i, d) => (h(), x(l(ar), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Zi = /* @__PURE__ */ w({
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
    const o = Y(e, t), n = qe(), r = gt(), a = fr(), { forwardRef: s, currentElement: i } = M();
    return a.contentId || (a.contentId = Ke(void 0, "radix-vue-menu-sub-content")), (d, c) => (h(), x(l(rt), {
      present: d.forceMount || l(n).open.value
    }, {
      default: y(() => [
        V(Bo, S(l(o), {
          id: l(a).contentId,
          ref: l(s),
          "aria-labelledby": l(a).triggerId,
          align: "start",
          side: l(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = We((p) => {
            var u;
            l(r).isUsingKeyboardRef.value && ((u = l(i)) == null || u.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = We(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (p) => {
            p.defaultPrevented || p.target !== l(a).trigger.value && l(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (p) => {
            l(r).onClose(), p.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (p) => {
            var u, f;
            const m = (u = p.currentTarget) == null ? void 0 : u.contains(p.target), g = l(Hs)[l(r).dir.value].includes(p.key);
            m && g && (l(n).onOpenChange(!1), (f = l(a).trigger.value) == null || f.focus(), p.preventDefault());
          })
        }), {
          default: y(() => [
            _(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ji = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = qe(), n = gt(), r = fr(), a = To(), s = T(null);
    r.triggerId || (r.triggerId = Ke(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      s.value && window.clearTimeout(s.value), s.value = null;
    }
    ot(() => {
      i();
    });
    function d(u) {
      !ut(u) || a.onItemEnter(u) || !t.disabled && !o.open.value && !s.value && (a.onPointerGraceIntentChange(null), s.value = window.setTimeout(() => {
        o.onOpenChange(!0), i();
      }, 100));
    }
    async function c(u) {
      var f, m;
      if (!ut(u))
        return;
      i();
      const g = (f = o.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (g != null && g.width) {
        const v = (m = o.content.value) == null ? void 0 : m.dataset.side, b = v === "right", C = b ? -5 : 5, k = g[b ? "left" : "right"], O = g[b ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: u.clientX + C, y: u.clientY },
            { x: k, y: g.top },
            { x: O, y: g.top },
            { x: O, y: g.bottom },
            { x: k, y: g.bottom }
          ],
          side: v
        }), window.clearTimeout(a.pointerGraceTimerRef.value), a.pointerGraceTimerRef.value = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(u))
          return;
        a.onPointerGraceIntentChange(null);
      }
    }
    async function p(u) {
      var f;
      const m = a.searchRef.value !== "";
      t.disabled || m && u.key === " " || Gs[n.dir.value].includes(u.key) && (o.onOpenChange(!0), await oe(), (f = o.content.value) == null || f.focus(), u.preventDefault());
    }
    return (u, f) => (h(), x(lr, { "as-child": "" }, {
      default: y(() => [
        V(cr, S(t, {
          id: l(r).triggerId,
          ref: (m) => {
            var g;
            (g = l(r)) == null || g.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(o).open.value,
          "aria-controls": l(r).contentId,
          "data-state": l(Oo)(l(o).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(o).open.value || l(o).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: p
        }), {
          default: y(() => [
            _(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [mr, Qi] = ee("DropdownMenuRoot"), el = /* @__PURE__ */ w({
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
    const r = we(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), a = T(), { modal: s, dir: i } = ye(o), d = _o(i);
    return Qi({
      open: r,
      onOpenChange: (c) => {
        r.value = c;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: a,
      contentId: "",
      modal: s,
      dir: d
    }), (c, p) => (h(), x(l(Ti), {
      open: l(r),
      "onUpdate:open": p[0] || (p[0] = (u) => pn(r) ? r.value = u : null),
      dir: l(d),
      modal: l(s)
    }, {
      default: y(() => [
        _(c.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), tl = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = mr(), { forwardRef: n, currentElement: r } = M();
    return ce(() => {
      o.triggerElement = r;
    }), o.triggerId || (o.triggerId = Ke(void 0, "radix-vue-dropdown-menu-trigger")), (a, s) => (h(), x(l(lr), { "as-child": "" }, {
      default: y(() => [
        V(l(G), {
          id: l(o).triggerId,
          ref: l(n),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(o).open.value,
          "aria-controls": l(o).open.value ? l(o).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": l(o).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var d;
            !a.disabled && i.button === 0 && i.ctrlKey === !1 && ((d = l(o)) == null || d.onOpenToggle(), await oe(), l(o).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = fn(
            (i) => {
              a.disabled || (["Enter", " "].includes(i.key) && l(o).onOpenToggle(), i.key === "ArrowDown" && l(o).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), ol = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(Wi), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nl = /* @__PURE__ */ w({
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
    const n = mr(), r = T(!1);
    function a(s) {
      s.defaultPrevented || (r.value || setTimeout(() => {
        var i;
        (i = n.triggerElement.value) == null || i.focus();
      }, 0), r.value = !1, s.preventDefault());
    }
    return n.contentId || (n.contentId = Ke(void 0, "radix-vue-dropdown-menu-content")), (s, i) => {
      var d;
      return h(), x(l(Vi), S(l(o), {
        id: l(n).contentId,
        "aria-labelledby": (d = l(n)) == null ? void 0 : d.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: a,
        onInteractOutside: i[0] || (i[0] = (c) => {
          var p;
          if (c.defaultPrevented) return;
          const u = c.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0, m = u.button === 2 || f;
          (!l(n).modal.value || m) && (r.value = !0), (p = l(n).triggerElement.value) != null && p.contains(c.target) && c.preventDefault();
        })
      }), {
        default: y(() => [
          _(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), rl = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = Ne(t);
    return M(), (r, a) => (h(), x(l(Po), N(j({ ...o, ...l(n) })), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), al = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(pr), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sl = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(qi), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), il = /* @__PURE__ */ w({
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
    const o = e, n = Ne(t);
    return M(), (r, a) => (h(), x(l(Li), N(j({ ...o, ...l(n) })), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gr = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(Ii), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ll = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(ji), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dl = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = Ne(t);
    return M(), (r, a) => (h(), x(l(Gi), N(j({ ...o, ...l(n) })), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cl = /* @__PURE__ */ w({
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
    return M(), (n, r) => (h(), x(l(Hi), N(j(l(o))), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ul = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = we(o, "open", t, {
      passive: o.open === void 0,
      defaultValue: o.defaultOpen ?? !1
    });
    return M(), (r, a) => (h(), x(l(Yi), {
      open: l(n),
      "onUpdate:open": a[0] || (a[0] = (s) => pn(n) ? n.value = s : null)
    }, {
      default: y(() => [
        _(r.$slots, "default", { open: l(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), pl = /* @__PURE__ */ w({
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
    return M(), (n, r) => (h(), x(l(Zi), S(l(o), { style: {
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
}), fl = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(Ji), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ml() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ml();
const gl = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [vl, hl] = ee("SwitchRoot"), yl = /* @__PURE__ */ w({
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
    const o = e, n = t, { disabled: r } = ye(o), a = we(o, "checked", n, {
      defaultValue: o.defaultChecked,
      passive: o.checked === void 0
    });
    function s() {
      r.value || (a.value = !a.value);
    }
    const { forwardRef: i, currentElement: d } = M(), c = ys(d), p = P(() => {
      var u;
      return o.id && d.value ? (u = document.querySelector(`[for="${o.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return hl({
      checked: a,
      toggleCheck: s,
      disabled: r
    }), (u, f) => (h(), X(Ee, null, [
      V(l(G), S(u.$attrs, {
        id: u.id,
        ref: l(i),
        role: "switch",
        type: u.as === "button" ? "button" : void 0,
        value: u.value,
        "aria-label": u.$attrs["aria-label"] || p.value,
        "aria-checked": l(a),
        "aria-required": u.required,
        "data-state": l(a) ? "checked" : "unchecked",
        "data-disabled": l(r) ? "" : void 0,
        "as-child": u.asChild,
        as: u.as,
        disabled: l(r),
        onClick: s,
        onKeydown: fn(We(s, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(u.$slots, "default", { checked: l(a) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (h(), X("input", {
        key: 0,
        type: "checkbox",
        name: u.name,
        tabindex: "-1",
        "aria-hidden": "true",
        disabled: l(r),
        required: u.required,
        value: u.value,
        checked: !!l(a),
        "data-state": l(a) ? "checked" : "unchecked",
        "data-disabled": l(r) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, gl)) : le("", !0)
    ], 64));
  }
}), bl = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = vl();
    return M(), (o, n) => {
      var r;
      return h(), x(l(G), {
        "data-state": (r = l(t).checked) != null && r.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
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
}), [$t, wl] = ee("ToastProvider"), xl = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: o, duration: n, swipeDirection: r, swipeThreshold: a } = ye(t), s = T(), i = T(0), d = T(!1), c = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return wl({
      label: o,
      duration: n,
      swipeDirection: r,
      swipeThreshold: a,
      toastCount: i,
      viewport: s,
      onViewportChange(p) {
        s.value = p;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: c
    }), (p, u) => _(p.$slots, "default");
  }
}), _l = "toast.swipeStart", Cl = "toast.swipeMove", kl = "toast.swipeCancel", El = "toast.swipeEnd", no = "toast.viewportPause", ro = "toast.viewportResume";
function _t(e, t, o) {
  const n = o.originalEvent.currentTarget, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(r);
}
function Zo(e, t, o = 0) {
  const n = Math.abs(e.x), r = Math.abs(e.y), a = n > r;
  return t === "left" || t === "right" ? a && n > o : !a && r > o;
}
function Ol(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function vr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), Ol(o)) {
      const n = o.ariaHidden || o.hidden || o.style.display === "none", r = o.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (r) {
          const a = o.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...vr(o));
    }
  }), t;
}
const Al = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = $t(), o = as(1e3), n = T(!1);
    return Nn(() => {
      n.value = !0;
    }), (r, a) => l(o) || n.value ? (h(), x(l(ir), { key: 0 }, {
      default: y(() => [
        je(Re(l(t).label.value) + " ", 1),
        _(r.$slots, "default")
      ]),
      _: 3
    })) : le("", !0);
  }
}), [Dl, Tl] = ee("ToastRoot"), Bl = /* @__PURE__ */ w({
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
    const o = e, n = t, { forwardRef: r, currentElement: a } = M(), s = $t(), i = T(null), d = T(null), c = P(() => o.duration || s.duration.value), p = T(0), u = T(c.value), f = T(0), m = T(c.value), g = Nn(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - p.value;
      m.value = Math.max(u.value - k, 0);
    }, { fpsLimit: 60 });
    function v(k) {
      !k || k === Number.POSITIVE_INFINITY || be && (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(b, k));
    }
    function b() {
      var k, O;
      (k = a.value) != null && k.contains(document.activeElement) && ((O = s.viewport.value) == null || O.focus()), s.isClosePausedRef.value = !1, n("close");
    }
    const C = P(() => a.value ? vr(a.value) : null);
    if (o.type && !["foreground", "background"].includes(o.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return ne((k) => {
      const O = s.viewport.value;
      if (O) {
        const A = () => {
          v(u.value), g.resume(), n("resume");
        }, D = () => {
          const R = (/* @__PURE__ */ new Date()).getTime() - p.value;
          u.value = u.value - R, window.clearTimeout(f.value), g.pause(), n("pause");
        };
        return O.addEventListener(no, D), O.addEventListener(ro, A), () => {
          O.removeEventListener(no, D), O.removeEventListener(ro, A);
        };
      }
    }), J(() => [o.open, c.value], () => {
      u.value = c.value, o.open && !s.isClosePausedRef.value && v(c.value);
    }, { immediate: !0 }), bo("Escape", (k) => {
      n("escapeKeyDown", k), k.defaultPrevented || (s.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), ce(() => {
      s.onToastAdd();
    }), ot(() => {
      s.onToastRemove();
    }), Tl({ onClose: b }), (k, O) => (h(), X(Ee, null, [
      C.value ? (h(), x(Al, {
        key: 0,
        role: "status",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          je(Re(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : le("", !0),
      l(s).viewport.value ? (h(), x(gn, {
        key: 1,
        to: l(s).viewport.value
      }, [
        V(l(G), S({
          ref: l(r),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, k.$attrs, {
          as: k.as,
          "as-child": k.asChild,
          "data-state": k.open ? "open" : "closed",
          "data-swipe-direction": l(s).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: O[0] || (O[0] = We((A) => {
            i.value = { x: A.clientX, y: A.clientY };
          }, ["left"])),
          onPointermove: O[1] || (O[1] = (A) => {
            if (!i.value) return;
            const D = A.clientX - i.value.x, R = A.clientY - i.value.y, F = !!d.value, K = ["left", "right"].includes(l(s).swipeDirection.value), W = ["left", "up"].includes(l(s).swipeDirection.value) ? Math.min : Math.max, E = K ? W(0, D) : 0, $ = K ? 0 : W(0, R), B = A.pointerType === "touch" ? 10 : 2, q = { x: E, y: $ }, z = { originalEvent: A, delta: q };
            F ? (d.value = q, l(_t)(l(Cl), (Q) => n("swipeMove", Q), z)) : l(Zo)(q, l(s).swipeDirection.value, B) ? (d.value = q, l(_t)(l(_l), (Q) => n("swipeStart", Q), z), A.target.setPointerCapture(A.pointerId)) : (Math.abs(D) > B || Math.abs(R) > B) && (i.value = null);
          }),
          onPointerup: O[2] || (O[2] = (A) => {
            const D = d.value, R = A.target;
            if (R.hasPointerCapture(A.pointerId) && R.releasePointerCapture(A.pointerId), d.value = null, i.value = null, D) {
              const F = A.currentTarget, K = { originalEvent: A, delta: D };
              l(Zo)(D, l(s).swipeDirection.value, l(s).swipeThreshold.value) ? l(_t)(l(El), (W) => n("swipeEnd", W), K) : l(_t)(l(kl), (W) => n("swipeCancel", W), K), F == null || F.addEventListener("click", (W) => W.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(k.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : le("", !0)
    ], 64));
  }
}), Pl = /* @__PURE__ */ w({
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
    const o = e, n = t, { forwardRef: r } = M(), a = we(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    return (s, i) => (h(), x(l(rt), {
      present: s.forceMount || l(a)
    }, {
      default: y(() => [
        V(Bl, S({
          ref: l(r),
          open: l(a),
          type: s.type,
          as: s.as,
          "as-child": s.asChild,
          duration: s.duration
        }, s.$attrs, {
          onClose: i[0] || (i[0] = (d) => a.value = !1),
          onPause: i[1] || (i[1] = (d) => n("pause")),
          onResume: i[2] || (i[2] = (d) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (d) => n("escapeKeyDown", d)),
          onSwipeStart: i[4] || (i[4] = (d) => {
            n("swipeStart", d), d.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (d) => {
            const { x: c, y: p } = d.detail.delta, u = d.currentTarget;
            u.setAttribute("data-swipe", "move"), u.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (d) => {
            const c = d.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (d) => {
            const { x: c, y: p } = d.detail.delta, u = d.currentTarget;
            u.setAttribute("data-swipe", "end"), u.style.removeProperty("--radix-toast-swipe-move-x"), u.style.removeProperty("--radix-toast-swipe-move-y"), u.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), a.value = !1;
          })
        }), {
          default: y(({ remaining: d, duration: c }) => [
            _(s.$slots, "default", {
              remaining: d,
              duration: c,
              open: l(a)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), hr = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, o) => (h(), x(l(G), {
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
}), yr = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Dl(), { forwardRef: n } = M();
    return (r, a) => (h(), x(hr, { "as-child": "" }, {
      default: y(() => [
        V(l(G), S(t, {
          ref: l(n),
          type: r.as === "button" ? "button" : void 0,
          onClick: a[0] || (a[0] = (s) => l(o).onClose())
        }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Sl = /* @__PURE__ */ w({
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
    return (o, n) => o.altText ? (h(), x(hr, {
      key: 0,
      "alt-text": o.altText,
      "as-child": ""
    }, {
      default: y(() => [
        V(yr, {
          ref: l(t),
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
    }, 8, ["alt-text"])) : le("", !0);
  }
}), Jo = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const o = t, n = $t();
    return (r, a) => (h(), x(l(ir), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: a[0] || (a[0] = (s) => {
        var i;
        const d = s.relatedTarget;
        !((i = l(n).viewport.value) != null && i.contains(d)) && o("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), $l = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: o, label: n } = ye(t), { forwardRef: r, currentElement: a } = M(), { createCollection: s } = Wn(), i = s(a), d = $t(), c = P(() => d.toastCount.value > 0), p = T(), u = T(), f = P(() => o.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    bo(o.value, () => {
      a.value.focus();
    }), ce(() => {
      d.onViewportChange(a.value);
    }), ne((g) => {
      const v = a.value;
      if (c.value && v) {
        const b = () => {
          if (!d.isClosePausedRef.value) {
            const D = new CustomEvent(no);
            v.dispatchEvent(D), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const D = new CustomEvent(ro);
            v.dispatchEvent(D), d.isClosePausedRef.value = !1;
          }
        }, k = (D) => {
          !v.contains(D.relatedTarget) && C();
        }, O = () => {
          v.contains(document.activeElement) || C();
        }, A = (D) => {
          var R, F, K;
          const W = D.altKey || D.ctrlKey || D.metaKey;
          if (D.key === "Tab" && !W) {
            const E = document.activeElement, $ = D.shiftKey;
            if (D.target === v && $) {
              (R = p.value) == null || R.focus();
              return;
            }
            const B = m({ tabbingDirection: $ ? "backwards" : "forwards" }), q = B.findIndex((z) => z === E);
            kt(B.slice(q + 1)) ? D.preventDefault() : $ ? (F = p.value) == null || F.focus() : (K = u.value) == null || K.focus();
          }
        };
        v.addEventListener("focusin", b), v.addEventListener("focusout", k), v.addEventListener("pointermove", b), v.addEventListener("pointerleave", O), v.addEventListener("keydown", A), window.addEventListener("blur", b), window.addEventListener("focus", C), g(() => {
          v.removeEventListener("focusin", b), v.removeEventListener("focusout", k), v.removeEventListener("pointermove", b), v.removeEventListener("pointerleave", O), v.removeEventListener("keydown", A), window.removeEventListener("blur", b), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: g }) {
      const v = i.value.map((b) => {
        const C = [b, ...Eo(b)];
        return g === "forwards" ? C : C.reverse();
      });
      return (g === "forwards" ? v.reverse() : v).flat();
    }
    return (g, v) => (h(), x(l(Fs), {
      role: "region",
      "aria-label": typeof l(n) == "string" ? l(n).replace("{hotkey}", f.value) : l(n)(f.value),
      tabindex: "-1",
      style: so({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        c.value ? (h(), x(Jo, {
          key: 0,
          ref: (b) => {
            p.value = l(he)(b);
          },
          onFocusFromOutsideViewport: v[0] || (v[0] = () => {
            const b = m({
              tabbingDirection: "forwards"
            });
            l(kt)(b);
          })
        }, null, 512)) : le("", !0),
        V(l(G), S({
          ref: l(r),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: y(() => [
            _(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (h(), x(Jo, {
          key: 1,
          ref: (b) => {
            u.value = l(he)(b);
          },
          onFocusFromOutsideViewport: v[1] || (v[1] = () => {
            const b = m({
              tabbingDirection: "backwards"
            });
            l(kt)(b);
          })
        }, null, 512)) : le("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Ml = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(G), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rl = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (h(), x(l(G), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fl = 3, Il = 1e6, Oe = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Gt = 0;
function Ll() {
  return Gt = (Gt + 1) % Number.MAX_VALUE, Gt.toString();
}
const Ht = /* @__PURE__ */ new Map();
function Qo(e) {
  if (Ht.has(e)) return;
  const t = setTimeout(() => {
    Ht.delete(e), lt({
      type: Oe.REMOVE_TOAST,
      toastId: e
    });
  }, Il);
  Ht.set(e, t);
}
const ue = T({
  toasts: []
});
function lt(e) {
  switch (e.type) {
    case Oe.ADD_TOAST:
      ue.value.toasts = [e.toast, ...ue.value.toasts].slice(0, Fl);
      break;
    case Oe.UPDATE_TOAST:
      ue.value.toasts = ue.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Oe.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Qo(t) : ue.value.toasts.forEach((o) => {
        Qo(o.id);
      }), ue.value.toasts = ue.value.toasts.map(
        (o) => o.id === t || t === void 0 ? {
          ...o,
          open: !1
        } : o
      );
      break;
    }
    case Oe.REMOVE_TOAST:
      e.toastId === void 0 ? ue.value.toasts = [] : ue.value.toasts = ue.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function br() {
  return {
    toasts: P(() => ue.value.toasts),
    toast: zl,
    dismiss: (e) => lt({ type: Oe.DISMISS_TOAST, toastId: e })
  };
}
function zl(e) {
  const t = Ll(), o = (r) => lt({
    type: Oe.UPDATE_TOAST,
    toast: { ...r, id: t }
  }), n = () => lt({ type: Oe.DISMISS_TOAST, toastId: t });
  return lt({
    type: Oe.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (r) => {
        r || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: o
  };
}
const Nl = { class: "flex items-start space-x-3" }, Vl = { class: "grid gap-1" }, jl = { class: "font-bold" }, Wl = /* @__PURE__ */ w({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = br();
    return (o, n) => (h(), x(l(Bd), null, {
      default: y(() => [
        (h(!0), X(Ee, null, Mo(l(t), (r) => (h(), x(l(Cd), S({
          key: r.id,
          ref_for: !0
        }, r), {
          default: y(() => [
            de("div", Nl, [
              r.icon ? (h(), x(Rt(r.icon), {
                key: 0,
                class: Te(["h-6 w-6", r.iconClasses])
              }, null, 8, ["class"])) : le("", !0),
              de("div", Vl, [
                r.title ? (h(), x(l(Td), { key: 0 }, {
                  default: y(() => [
                    je(Re(r.title), 1)
                  ]),
                  _: 2
                }, 1024)) : le("", !0),
                r.description ? (h(), X(Ee, { key: 1 }, [
                  Lr(r.description) ? (h(), x(l(on), { key: 0 }, {
                    default: y(() => [
                      (h(), x(Rt(r.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof r.description == "object" ? (h(!0), X(Ee, { key: 1 }, Mo(r.description, (a, s) => (h(), X("p", {
                    key: s,
                    class: "text-sm opacity-90"
                  }, [
                    r.objectFormat === "key" ? (h(), X(Ee, { key: 0 }, [
                      je(Re(s), 1)
                    ], 64)) : r.objectFormat === "both" ? (h(), X(Ee, { key: 1 }, [
                      de("span", jl, Re(s), 1),
                      je(": " + Re(a), 1)
                    ], 64)) : (h(), X(Ee, { key: 2 }, [
                      je(Re(a), 1)
                    ], 64))
                  ]))), 128)) : (h(), x(l(on), { key: 2 }, {
                    default: y(() => [
                      je(Re(r.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : le("", !0),
                V(l(Dd))
              ])
            ]),
            (h(), x(Rt(r.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        V(l(kd))
      ]),
      _: 1
    }));
  }
});
function wr(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (o = wr(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function Ul() {
  for (var e, t, o = 0, n = "", r = arguments.length; o < r; o++) (e = arguments[o]) && (t = wr(e)) && (n && (n += " "), n += t);
  return n;
}
const So = "-", Kl = (e) => {
  const t = Hl(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(So);
      return i[0] === "" && i.length !== 1 && i.shift(), xr(i, t) || Gl(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const d = o[s] || [];
      return i && n[s] ? [...d, ...n[s]] : d;
    }
  };
}, xr = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], n = t.nextPart.get(o), r = n ? xr(e.slice(1), n) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const a = e.join(So);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, en = /^\[(.+)\]$/, Gl = (e) => {
  if (en.test(e)) {
    const t = en.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Hl = (e) => {
  const {
    theme: t,
    prefix: o
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Xl(Object.entries(e.classGroups), o).forEach(([a, s]) => {
    ao(s, n, a, t);
  }), n;
}, ao = (e, t, o, n) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const a = r === "" ? t : tn(t, r);
      a.classGroupId = o;
      return;
    }
    if (typeof r == "function") {
      if (ql(r)) {
        ao(r(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: o
      });
      return;
    }
    Object.entries(r).forEach(([a, s]) => {
      ao(s, tn(t, a), o, n);
    });
  });
}, tn = (e, t) => {
  let o = e;
  return t.split(So).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, ql = (e) => e.isThemeGetter, Xl = (e, t) => t ? e.map(([o, n]) => {
  const r = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [o, r];
}) : e, Yl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const r = (a, s) => {
    o.set(a, s), t++, t > e && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = o.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return r(a, s), s;
    },
    set(a, s) {
      o.has(a) ? o.set(a, s) : r(a, s);
    }
  };
}, _r = "!", Zl = (e) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = e, n = t.length === 1, r = t[0], a = t.length, s = (i) => {
    const d = [];
    let c = 0, p = 0, u;
    for (let b = 0; b < i.length; b++) {
      let C = i[b];
      if (c === 0) {
        if (C === r && (n || i.slice(b, b + a) === t)) {
          d.push(i.slice(p, b)), p = b + a;
          continue;
        }
        if (C === "/") {
          u = b;
          continue;
        }
      }
      C === "[" ? c++ : C === "]" && c--;
    }
    const f = d.length === 0 ? i : i.substring(p), m = f.startsWith(_r), g = m ? f.substring(1) : f, v = u && u > p ? u - p : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: g,
      maybePostfixModifierPosition: v
    };
  };
  return o ? (i) => o({
    className: i,
    parseClassName: s
  }) : s;
}, Jl = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let o = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, Ql = (e) => ({
  cache: Yl(e.cacheSize),
  parseClassName: Zl(e),
  ...Kl(e)
}), ed = /\s+/, td = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  } = t, a = [], s = e.trim().split(ed);
  let i = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const c = s[d], {
      modifiers: p,
      hasImportantModifier: u,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = o(c);
    let g = !!m, v = n(g ? f.substring(0, m) : f);
    if (!v) {
      if (!g) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (v = n(f), !v) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      g = !1;
    }
    const b = Jl(p).join(":"), C = u ? b + _r : b, k = C + v;
    if (a.includes(k))
      continue;
    a.push(k);
    const O = r(v, g);
    for (let A = 0; A < O.length; ++A) {
      const D = O[A];
      a.push(C + D);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function od() {
  let e = 0, t, o, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Cr(t)) && (n && (n += " "), n += o);
  return n;
}
const Cr = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Cr(e[n])) && (o && (o += " "), o += t);
  return o;
};
function nd(e, ...t) {
  let o, n, r, a = s;
  function s(d) {
    const c = t.reduce((p, u) => u(p), e());
    return o = Ql(c), n = o.cache.get, r = o.cache.set, a = i, i(d);
  }
  function i(d) {
    const c = n(d);
    if (c)
      return c;
    const p = td(d, o);
    return r(d, p), p;
  }
  return function() {
    return a(od.apply(null, arguments));
  };
}
const H = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, kr = /^\[(?:([a-z-]+):)?(.+)\]$/i, rd = /^\d+\/\d+$/, ad = /* @__PURE__ */ new Set(["px", "full", "screen"]), sd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, id = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ld = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (e) => et(e) || ad.has(e) || rd.test(e), Se = (e) => at(e, "length", yd), et = (e) => !!e && !Number.isNaN(Number(e)), qt = (e) => at(e, "number", et), st = (e) => !!e && Number.isInteger(Number(e)), ud = (e) => e.endsWith("%") && et(e.slice(0, -1)), L = (e) => kr.test(e), $e = (e) => sd.test(e), pd = /* @__PURE__ */ new Set(["length", "size", "percentage"]), fd = (e) => at(e, pd, Er), md = (e) => at(e, "position", Er), gd = /* @__PURE__ */ new Set(["image", "url"]), vd = (e) => at(e, gd, wd), hd = (e) => at(e, "", bd), it = () => !0, at = (e, t, o) => {
  const n = kr.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, yd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  id.test(e) && !ld.test(e)
), Er = () => !1, bd = (e) => dd.test(e), wd = (e) => cd.test(e), xd = () => {
  const e = H("colors"), t = H("spacing"), o = H("blur"), n = H("brightness"), r = H("borderColor"), a = H("borderRadius"), s = H("borderSpacing"), i = H("borderWidth"), d = H("contrast"), c = H("grayscale"), p = H("hueRotate"), u = H("invert"), f = H("gap"), m = H("gradientColorStops"), g = H("gradientColorStopPositions"), v = H("inset"), b = H("margin"), C = H("opacity"), k = H("padding"), O = H("saturate"), A = H("scale"), D = H("sepia"), R = H("skew"), F = H("space"), K = H("translate"), W = () => ["auto", "contain", "none"], E = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", L, t], B = () => [L, t], q = () => ["", ke, Se], z = () => ["auto", et, L], Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Z = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], te = () => ["", "0", L], vt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _e = () => [et, L];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [it],
      spacing: [ke, Se],
      blur: ["none", "", $e, L],
      brightness: _e(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $e, L],
      borderSpacing: B(),
      borderWidth: q(),
      contrast: _e(),
      grayscale: te(),
      hueRotate: _e(),
      invert: te(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ud, Se],
      inset: $(),
      margin: $(),
      opacity: _e(),
      padding: B(),
      saturate: _e(),
      scale: _e(),
      sepia: te(),
      skew: _e(),
      space: B(),
      translate: B()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", L]
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
        columns: [$e]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": vt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": vt()
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
        object: [...Q(), L]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", st, L]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: $()
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
        flex: ["1", "auto", "initial", "none", L]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: te()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: te()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", st, L]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [it]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", st, L]
        }, L]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [it]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [st, L]
        }, L]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", L]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", L]
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
        "space-x": [F]
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
        "space-y": [F]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [L, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [L, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [$e]
        }, $e]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [L, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", $e, Se]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [it]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", et, qt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ke, L]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", L]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", L]
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
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ke, Se]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ke, L]
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
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
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
        content: ["none", L]
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
        bg: [...Q(), md]
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
        bg: ["auto", "cover", "contain", fd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vd]
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
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
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
        border: [...Z(), "hidden"]
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
        divide: Z()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Z()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ke, L]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ke, Se]
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ke, Se]
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
        shadow: ["", "inner", "none", $e, hd]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [it]
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
        "mix-blend": [...re(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        "drop-shadow": ["", "none", $e, L]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
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
        invert: [u]
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
        "backdrop-grayscale": [c]
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
        "backdrop-invert": [u]
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
        "backdrop-saturate": [O]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: _e()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", L]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: _e()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", L]
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
        rotate: [st, L]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [K]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [K]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
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
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
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
        "will-change": ["auto", "scroll", "contents", "transform", L]
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
        stroke: [ke, Se, qt]
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
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, _d = /* @__PURE__ */ nd(xd);
function U(...e) {
  return _d(Ul(e));
}
const Cd = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, ...i } = o;
      return i;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(Pl), S(l(a), {
      class: l(U)(l(Sd)({ variant: s.variant }), o.class),
      "onUpdate:open": s.onOpenChange
    }), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), kd = /* @__PURE__ */ w({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l($l), S(o.value, {
      class: l(U)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Kd = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(Sl), S(o.value, {
      class: l(U)(
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
function Ed(e, t) {
  return h(), X("svg", {
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
function Od(e, t) {
  return h(), X("svg", {
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
function Or(e, t) {
  return h(), X("svg", {
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
function Ad(e, t) {
  return h(), X("svg", {
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
const Dd = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(yr), S(o.value, {
      class: l(U)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        V(l(Or), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Td = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(Ml), S(o.value, {
      class: l(U)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), on = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(Rl), S({
      class: l(U)("text-sm opacity-90", t.class)
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bd = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(xl), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ar(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (o = Ar(e[t])) && (n && (n += " "), n += o);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Pd() {
  for (var e, t, o = 0, n = ""; o < arguments.length; ) (e = arguments[o++]) && (t = Ar(e)) && (n && (n += " "), n += t);
  return n;
}
const nn = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, rn = Pd, Mt = (e, t) => (o) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return rn(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: r, defaultVariants: a } = t, s = Object.keys(r).map((c) => {
    const p = o == null ? void 0 : o[c], u = a == null ? void 0 : a[c];
    if (p === null) return null;
    const f = nn(p) || nn(u);
    return r[c][f];
  }), i = o && Object.entries(o).reduce((c, p) => {
    let [u, f] = p;
    return f === void 0 || (c[u] = f), c;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, p) => {
    let { class: u, className: f, ...m } = p;
    return Object.entries(m).every((g) => {
      let [v, b] = g;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === b;
    }) ? [
      ...c,
      u,
      f
    ] : c;
  }, []);
  return rn(e, s, d, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, Sd = Mt(
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
);
function $d(e, t) {
  return h(), X("svg", {
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
function an(e, t) {
  return h(), X("svg", {
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
function Md(e, t) {
  return h(), X("svg", {
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
const { toast: Ct } = br();
function Rd() {
  return {
    info: (e) => {
      Ct({
        icon: Md,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Ct({
        icon: $d,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Ct({
        icon: an,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Ct({
        icon: an,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const Gd = /* @__PURE__ */ w({
  __name: "Notification",
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
      warning: r,
      error: a
    } = Rd();
    return J(
      () => t.info,
      (s) => {
        s && o(t.info);
      },
      {
        immediate: !0
      }
    ), J(
      () => t.success,
      (s) => {
        s && n(t.success);
      },
      { immediate: !0 }
    ), J(
      () => t.warning,
      (s) => {
        s && r(t.warning);
      },
      { immediate: !0 }
    ), J(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && a(t.errors, t.objectFormat);
      }
    ), (s, i) => (h(), x(l(Wl)));
  }
}), Hd = /* @__PURE__ */ w({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (a, s) => (h(), x(l(ni), N(j(l(r))), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qd = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(ri), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xd = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, ...i } = o;
      return i;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(ai), null, {
      default: y(() => [
        V(l(di), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(l(li), S(l(a), {
          class: l(U)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
          )
        }), {
          default: y(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Yd = /* @__PURE__ */ w({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), X("div", {
      class: Te(l(U)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), Zd = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(ui), S(o.value, {
      class: l(U)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jd = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(pi), S(o.value, {
      class: l(U)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qd = /* @__PURE__ */ w({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), X("div", {
      class: Te(l(U)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), ec = /* @__PURE__ */ w({
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
    return (o, n) => (h(), x(l(G), {
      as: o.as,
      "as-child": o.asChild,
      class: Te(l(U)(l($o)({ variant: o.variant, size: o.size }), t.class))
    }, {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), $o = Mt(
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
), tc = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(fi), S(o.value, {
      class: l(U)(l($o)(), t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oc = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(ci), S(o.value, {
      class: l(U)(l($o)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nc = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), X("div", {
      class: Te(l(U)(l(Fd)({ variant: o.variant }), t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), Fd = Mt(
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
), rc = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (a, s) => (h(), x(l(el), N(j(l(r))), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ac = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = mt(e);
    return (n, r) => (h(), x(l(tl), S({ class: "outline-none" }, l(o)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sc = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, ...i } = o;
      return i;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(ol), null, {
      default: y(() => [
        V(l(nl), S(l(a), {
          class: l(U)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
          )
        }), {
          default: y(() => [
            _(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ic = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(al), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lc = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (a, s) => (h(), x(l(dl), N(j(l(r))), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dc = /* @__PURE__ */ w({
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
    const t = e, o = P(() => {
      const { class: r, ...a } = t;
      return a;
    }), n = mt(o);
    return (r, a) => (h(), x(l(rl), S(l(n), {
      class: l(U)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        r.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Id = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, cc = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, ...i } = o;
      return i;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(il), S(l(a), {
      class: l(U)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        de("span", Id, [
          V(l(gr), null, {
            default: y(() => [
              V(l(Ed), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ld = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, uc = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, ...i } = o;
      return i;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(cl), S(l(a), {
      class: l(U)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: y(() => [
        de("span", Ld, [
          V(l(gr), null, {
            default: y(() => [
              V(l(Ad), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pc = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), X("span", {
      class: Te(l(U)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), fc = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(sl), S(o.value, {
      class: l(U)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), mc = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: r, ...a } = t;
      return a;
    }), n = mt(o);
    return (r, a) => (h(), x(l(ll), S(l(n), {
      class: l(U)("px-2 py-1.5 text-sm font-semibold", r.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gc = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (a, s) => (h(), x(l(ul), N(j(l(r))), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vc = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: r, ...a } = t;
      return a;
    }), n = mt(o);
    return (r, a) => (h(), x(l(fl), S(l(n), {
      class: l(U)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(r.$slots, "default"),
        V(l(Od), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hc = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, ...i } = o;
      return i;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(pl), S(l(a), {
      class: l(U)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        o.class
      )
    }), {
      default: y(() => [
        _(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yc = /* @__PURE__ */ w({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Y(e, t);
    return (a, s) => (h(), x(l(Hn), N(j(l(r))), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bc = /* @__PURE__ */ w({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(qn), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wc = /* @__PURE__ */ w({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), x(l(St), N(j(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xc = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, side: i, ...d } = o;
      return d;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(Ps), null, {
      default: y(() => [
        V(l(tr), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(l(er), S({
          class: l(U)(l(zd)({ side: s.side }), o.class)
        }, { ...l(a), ...s.$attrs }), {
          default: y(() => [
            _(s.$slots, "default"),
            V(l(St), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                V(l(Or), { class: "h-4 w-4" })
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
}), _c = /* @__PURE__ */ w({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), X("div", {
      class: Te(l(U)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), Cc = /* @__PURE__ */ w({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(or), S({
      class: l(U)("text-lg font-semibold text-foreground", t.class)
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kc = /* @__PURE__ */ w({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = P(() => {
      const { class: n, ...r } = t;
      return r;
    });
    return (n, r) => (h(), x(l(nr), S({
      class: l(U)("text-sm text-muted-foreground", t.class)
    }, o.value), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ec = /* @__PURE__ */ w({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (h(), X("div", {
      class: Te(l(U)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), zd = Mt(
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
), Oc = /* @__PURE__ */ w({
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
    const o = e, n = t, r = P(() => {
      const { class: s, ...i } = o;
      return i;
    }), a = Y(r, n);
    return (s, i) => (h(), x(l(yl), S(l(a), {
      class: l(U)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        o.class
      )
    }), {
      default: y(() => [
        V(l(bl), {
          class: Te(
            l(U)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
});
export {
  Hd as AlertDialog,
  tc as AlertDialogAction,
  oc as AlertDialogCancel,
  Xd as AlertDialogContent,
  Jd as AlertDialogDescription,
  Qd as AlertDialogFooter,
  Yd as AlertDialogHeader,
  Zd as AlertDialogTitle,
  qd as AlertDialogTrigger,
  nc as Badge,
  ec as Button,
  rc as DropdownMenu,
  cc as DropdownMenuCheckboxItem,
  sc as DropdownMenuContent,
  ic as DropdownMenuGroup,
  dc as DropdownMenuItem,
  mc as DropdownMenuLabel,
  ol as DropdownMenuPortal,
  lc as DropdownMenuRadioGroup,
  uc as DropdownMenuRadioItem,
  fc as DropdownMenuSeparator,
  pc as DropdownMenuShortcut,
  gc as DropdownMenuSub,
  hc as DropdownMenuSubContent,
  vc as DropdownMenuSubTrigger,
  ac as DropdownMenuTrigger,
  Gd as Notification,
  yc as Sheet,
  wc as SheetClose,
  xc as SheetContent,
  kc as SheetDescription,
  Ec as SheetFooter,
  _c as SheetHeader,
  Cc as SheetTitle,
  bc as SheetTrigger,
  Oc as Switch,
  Cd as Toast,
  Kd as ToastAction,
  Dd as ToastClose,
  on as ToastDescription,
  Bd as ToastProvider,
  Td as ToastTitle,
  kd as ToastViewport,
  Wl as Toaster,
  Fd as badgeVariants,
  $o as buttonVariants,
  Vd as preset,
  zd as sheetVariants,
  zl as toast,
  Sd as toastVariants,
  Rd as useNotification,
  br as useToast
};
