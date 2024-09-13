import { computed as S, ref as D, shallowRef as no, watch as Z, getCurrentScope as oo, onScopeDispose as ro, shallowReadonly as He, unref as l, getCurrentInstance as je, toRef as xr, camelize as ao, defineComponent as _, Comment as _r, mergeProps as M, cloneVNode as Cr, h as Ye, toRefs as be, renderSlot as E, onMounted as me, openBlock as b, createBlock as x, withCtx as y, normalizeProps as j, guardReactiveProps as G, reactive as io, createVNode as V, createCommentVNode as te, watchEffect as oe, markRaw as kr, isRef as so, nextTick as ie, withKeys as lo, createElementBlock as X, Fragment as Ee, withModifiers as st, normalizeStyle as rn, effectScope as co, toHandlerKey as Er, onUnmounted as et, Teleport as uo, createTextVNode as Ne, toDisplayString as $e, inject as po, provide as fo, readonly as an, onBeforeUpdate as Or, onUpdated as Tr, mergeDefaults as mo, onBeforeUnmount as Ar, watchPostEffect as Dr, customRef as Br, renderList as Bn, createElementVNode as de, resolveDynamicComponent as Mt, normalizeClass as ut, isVNode as Sr } from "vue";
function go(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pr = {
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
}, $t = Pr, sn = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Mr(e) {
  return e.trim().replace(sn.whitespace, " ");
}
function $r(e) {
  return encodeURIComponent(e).replace(sn.urlHexPairs, Ir);
}
function Rr(e) {
  return Object.keys($t).forEach(function(t) {
    $t[t].test(e) && (e = e.replace($t[t], t));
  }), e;
}
function Ir(e) {
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
function Ht(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Rr(Mr(e)).replace(sn.quotes, "'");
  return "data:image/svg+xml," + $r(t);
}
Ht.toSrcset = function(t) {
  return Ht(t).replace(/ /g, "%20");
};
var Fr = Ht, vo = {}, ho = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  function t(o, r) {
    return {
      handler: o,
      config: r
    };
  }
  t.withOptions = function(o, r = () => ({})) {
    const a = function(i) {
      return {
        __options: i,
        handler: o(i),
        config: r(i)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = o, a.__configFunction = r, a;
  };
  const n = t;
})(ho);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(ho);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const o = t.default;
})(vo);
let Rt = vo;
var bo = (Rt.__esModule ? Rt : { default: Rt }).default, yo = {}, wo = {};
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
    return Array.isArray(n) ? n.map((o) => t(o)) : typeof n == "object" && n !== null ? Object.fromEntries(Object.entries(n).map(([o, r]) => [
      o,
      t(r)
    ])) : n;
  }
})(wo);
var Lr = {
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
  const t = wo, n = /* @__PURE__ */ o(Lr);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const r = (0, t.cloneDeep)(n.default.theme);
})(yo);
let It = yo;
var zr = (It.__esModule ? It : { default: It }).default, xo = {}, _o = {}, ln = { exports: {} }, F = String, Co = function() {
  return { isColorSupported: !1, reset: F, bold: F, dim: F, italic: F, underline: F, inverse: F, hidden: F, strikethrough: F, black: F, red: F, green: F, yellow: F, blue: F, magenta: F, cyan: F, white: F, gray: F, bgBlack: F, bgRed: F, bgGreen: F, bgYellow: F, bgBlue: F, bgMagenta: F, bgCyan: F, bgWhite: F, blackBright: F, redBright: F, greenBright: F, yellowBright: F, blueBright: F, magentaBright: F, cyanBright: F, whiteBright: F, bgBlackBright: F, bgRedBright: F, bgGreenBright: F, bgYellowBright: F, bgBlueBright: F, bgMagentaBright: F, bgCyanBright: F, bgWhiteBright: F };
};
ln.exports = Co();
ln.exports.createColors = Co;
var Nr = ln.exports;
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
      return i;
    },
    default: function() {
      return s;
    }
  });
  const n = /* @__PURE__ */ o(Nr);
  function o(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let r = /* @__PURE__ */ new Set();
  function a(d, c, p) {
    typeof process < "u" && process.env.JEST_WORKER_ID || p && r.has(p) || (p && r.add(p), console.warn(""), c.forEach((u) => console.warn(d, "-", u)));
  }
  function i(d) {
    return n.default.dim(d);
  }
  const s = {
    info(d, c) {
      a(n.default.bold(n.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        c,
        d
      ]);
    },
    warn(d, c) {
      a(n.default.bold(n.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        c,
        d
      ]);
    },
    risk(d, c) {
      a(n.default.bold(n.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        c,
        d
      ]);
    }
  };
})(_o);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ n(_o);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  function o({ version: a, from: i, to: s }) {
    t.default.warn(`${i}-color-renamed`, [
      `As of Tailwind CSS ${a}, \`${i}\` has been renamed to \`${s}\`.`,
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
})(xo);
let Ft = xo;
var Vr = (Ft.__esModule ? Ft : { default: Ft }).default;
const ht = Fr, Wr = bo, ko = zr, Be = Vr, [jr, { lineHeight: Ur }] = ko.fontSize.base, { spacing: Ce, borderWidth: Sn, borderRadius: Pn } = ko;
function ze(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Kr = Wr.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: n, theme: o }) {
    function r(d, c) {
      let p = o(d);
      return !p || p.includes("var(") ? c : p.replace("<alpha-value>", "1");
    }
    const a = e.strategy === void 0 ? ["base", "class"] : [e.strategy], i = [
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
          "border-color": ze(
            o("colors.gray.500", Be.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Sn.DEFAULT,
          "border-radius": Pn.none,
          "padding-top": Ce[2],
          "padding-right": Ce[3],
          "padding-bottom": Ce[2],
          "padding-left": Ce[3],
          "font-size": jr,
          "line-height": Ur,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": ze(
              o("colors.blue.600", Be.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": ze(
              o("colors.blue.600", Be.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: ze(o("colors.gray.500", Be.gray[500]), "--tw-text-opacity"),
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
              Be.gray[500]
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
          color: ze(o("colors.blue.600", Be.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": ze(
            o("colors.gray.500", Be.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Sn.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Pn.none
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
          "--tw-ring-color": ze(
            o("colors.blue.600", Be.blue[600]),
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
    ], s = (d) => i.map((c) => c[d] === null ? null : { [c[d]]: c.styles }).filter(Boolean);
    a.includes("base") && t(s("base")), a.includes("class") && n(s("class"));
  };
});
var Gr = Kr;
const Hr = /* @__PURE__ */ go(Gr), qr = bo;
function Mn(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Xr = qr(
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
      { values: Mn(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: Mn(n("animationTimingFunction")) }
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
const Yr = /* @__PURE__ */ go(Xr), Ad = {
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
    Yr,
    Hr({
      strategy: "class"
    })
  ]
}, Zr = ["top", "right", "bottom", "left"], ge = Math.min, ae = Math.max, Et = Math.round, bt = Math.floor, Ie = (e) => ({
  x: e,
  y: e
}), Jr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Qr = {
  start: "end",
  end: "start"
};
function qt(e, t, n) {
  return ae(e, ge(t, n));
}
function Te(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ae(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function dn(e) {
  return e === "x" ? "y" : "x";
}
function cn(e) {
  return e === "y" ? "height" : "width";
}
function Fe(e) {
  return ["top", "bottom"].includes(Ae(e)) ? "y" : "x";
}
function un(e) {
  return dn(Fe(e));
}
function ea(e, t, n) {
  n === void 0 && (n = !1);
  const o = tt(e), r = un(e), a = cn(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Ot(i)), [i, Ot(i)];
}
function ta(e) {
  const t = Ot(e);
  return [Xt(e), t, Xt(t)];
}
function Xt(e) {
  return e.replace(/start|end/g, (t) => Qr[t]);
}
function na(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function oa(e, t, n, o) {
  const r = tt(e);
  let a = na(Ae(e), n === "start", o);
  return r && (a = a.map((i) => i + "-" + r), t && (a = a.concat(a.map(Xt)))), a;
}
function Ot(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Jr[t]);
}
function ra(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Eo(e) {
  return typeof e != "number" ? ra(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tt(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function $n(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = Fe(t), i = un(t), s = cn(i), d = Ae(t), c = a === "y", p = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, f = o[s] / 2 - r[s] / 2;
  let m;
  switch (d) {
    case "top":
      m = {
        x: p,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (tt(t)) {
    case "start":
      m[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const aa = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: p,
    y: u
  } = $n(c, o, d), f = o, m = {}, g = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: h,
      fn: w
    } = s[v], {
      x: C,
      y: O,
      data: T,
      reset: A
    } = await w({
      x: p,
      y: u,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = C ?? p, u = O ?? u, m = {
      ...m,
      [h]: {
        ...m[h],
        ...T
      }
    }, A && g <= 50 && (g++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (c = A.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : A.rects), {
      x: p,
      y: u
    } = $n(c, f, d)), v = -1);
  }
  return {
    x: p,
    y: u,
    placement: f,
    strategy: r,
    middlewareData: m
  };
};
async function lt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: i,
    elements: s,
    strategy: d
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = Te(t, e), g = Eo(m), h = s[f ? u === "floating" ? "reference" : "floating" : u], w = Tt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(h))) == null || n ? h : h.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: p,
    strategy: d
  })), C = u === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), T = await (a.isElement == null ? void 0 : a.isElement(O)) ? await (a.getScale == null ? void 0 : a.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = Tt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: O,
    strategy: d
  }) : C);
  return {
    top: (w.top - A.top + g.top) / T.y,
    bottom: (A.bottom - w.bottom + g.bottom) / T.y,
    left: (w.left - A.left + g.left) / T.x,
    right: (A.right - w.right + g.right) / T.x
  };
}
const ia = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: d
    } = t, {
      element: c,
      padding: p = 0
    } = Te(e, t) || {};
    if (c == null)
      return {};
    const u = Eo(p), f = {
      x: n,
      y: o
    }, m = un(r), g = cn(m), v = await i.getDimensions(c), h = m === "y", w = h ? "top" : "left", C = h ? "bottom" : "right", O = h ? "clientHeight" : "clientWidth", T = a.reference[g] + a.reference[m] - f[m] - a.floating[g], A = f[m] - a.reference[m], $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let R = $ ? $[O] : 0;
    (!R || !await (i.isElement == null ? void 0 : i.isElement($))) && (R = s.floating[O] || a.floating[g]);
    const W = T / 2 - A / 2, N = R / 2 - v[g] / 2 - 1, k = ge(u[w], N), P = ge(u[C], N), B = k, H = R - v[g] - P, z = R / 2 - v[g] / 2 + W, J = qt(B, z, H), Y = !d.arrow && tt(r) != null && z !== J && a.reference[g] / 2 - (z < B ? k : P) - v[g] / 2 < 0, re = Y ? z < B ? z - B : z - H : 0;
    return {
      [m]: f[m] + re,
      data: {
        [m]: J,
        centerOffset: z - J - re,
        ...Y && {
          alignmentOffset: re
        }
      },
      reset: Y
    };
  }
}), sa = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: d,
        elements: c
      } = t, {
        mainAxis: p = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...h
      } = Te(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ae(r), C = Fe(s), O = Ae(s) === s, T = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), A = f || (O || !v ? [Ot(s)] : ta(s)), $ = g !== "none";
      !f && $ && A.push(...oa(s, v, g, T));
      const R = [s, ...A], W = await lt(t, h), N = [];
      let k = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (p && N.push(W[w]), u) {
        const z = ea(r, i, T);
        N.push(W[z[0]], W[z[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: N
      }], !N.every((z) => z <= 0)) {
        var P, B;
        const z = (((P = a.flip) == null ? void 0 : P.index) || 0) + 1, J = R[z];
        if (J)
          return {
            data: {
              index: z,
              overflows: k
            },
            reset: {
              placement: J
            }
          };
        let Y = (B = k.filter((re) => re.overflows[0] <= 0).sort((re, le) => re.overflows[1] - le.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!Y)
          switch (m) {
            case "bestFit": {
              var H;
              const re = (H = k.filter((le) => {
                if ($) {
                  const ne = Fe(le.placement);
                  return ne === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ne === "y";
                }
                return !0;
              }).map((le) => [le.placement, le.overflows.filter((ne) => ne > 0).reduce((ne, vt) => ne + vt, 0)]).sort((le, ne) => le[1] - ne[1])[0]) == null ? void 0 : H[0];
              re && (Y = re);
              break;
            }
            case "initialPlacement":
              Y = s;
              break;
          }
        if (r !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
function Rn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function In(e) {
  return Zr.some((t) => e[t] >= 0);
}
const la = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = Te(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await lt(t, {
            ...r,
            elementContext: "reference"
          }), i = Rn(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: In(i)
            }
          };
        }
        case "escaped": {
          const a = await lt(t, {
            ...r,
            altBoundary: !0
          }), i = Rn(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: In(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function da(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = Ae(n), s = tt(n), d = Fe(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, p = a && d ? -1 : 1, u = Te(t, e);
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
  return s && typeof g == "number" && (m = s === "end" ? g * -1 : g), d ? {
    x: m * p,
    y: f * c
  } : {
    x: f * c,
    y: m * p
  };
}
const ca = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: a,
        placement: i,
        middlewareData: s
      } = t, d = await da(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + d.x,
        y: a + d.y,
        data: {
          ...d,
          placement: i
        }
      };
    }
  };
}, ua = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (h) => {
            let {
              x: w,
              y: C
            } = h;
            return {
              x: w,
              y: C
            };
          }
        },
        ...d
      } = Te(e, t), c = {
        x: n,
        y: o
      }, p = await lt(t, d), u = Fe(Ae(r)), f = dn(u);
      let m = c[f], g = c[u];
      if (a) {
        const h = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", C = m + p[h], O = m - p[w];
        m = qt(C, m, O);
      }
      if (i) {
        const h = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", C = g + p[h], O = g - p[w];
        g = qt(C, g, O);
      }
      const v = s.fn({
        ...t,
        [f]: m,
        [u]: g
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o
        }
      };
    }
  };
}, pa = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: d = !0,
        crossAxis: c = !0
      } = Te(e, t), p = {
        x: n,
        y: o
      }, u = Fe(r), f = dn(u);
      let m = p[f], g = p[u];
      const v = Te(s, t), h = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (d) {
        const O = f === "y" ? "height" : "width", T = a.reference[f] - a.floating[O] + h.mainAxis, A = a.reference[f] + a.reference[O] - h.mainAxis;
        m < T ? m = T : m > A && (m = A);
      }
      if (c) {
        var w, C;
        const O = f === "y" ? "width" : "height", T = ["top", "left"].includes(Ae(r)), A = a.reference[u] - a.floating[O] + (T && ((w = i.offset) == null ? void 0 : w[u]) || 0) + (T ? 0 : h.crossAxis), $ = a.reference[u] + a.reference[O] + (T ? 0 : ((C = i.offset) == null ? void 0 : C[u]) || 0) - (T ? h.crossAxis : 0);
        g < A ? g = A : g > $ && (g = $);
      }
      return {
        [f]: m,
        [u]: g
      };
    }
  };
}, fa = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: a
      } = t, {
        apply: i = () => {
        },
        ...s
      } = Te(e, t), d = await lt(t, s), c = Ae(n), p = tt(n), u = Fe(n) === "y", {
        width: f,
        height: m
      } = o.floating;
      let g, v;
      c === "top" || c === "bottom" ? (g = c, v = p === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = c, g = p === "end" ? "top" : "bottom");
      const h = m - d.top - d.bottom, w = f - d.left - d.right, C = ge(m - d[g], h), O = ge(f - d[v], w), T = !t.middlewareData.shift;
      let A = C, $ = O;
      if (u ? $ = p || T ? ge(O, w) : w : A = p || T ? ge(C, h) : h, T && !p) {
        const W = ae(d.left, 0), N = ae(d.right, 0), k = ae(d.top, 0), P = ae(d.bottom, 0);
        u ? $ = f - 2 * (W !== 0 || N !== 0 ? W + N : ae(d.left, d.right)) : A = m - 2 * (k !== 0 || P !== 0 ? k + P : ae(d.top, d.bottom));
      }
      await i({
        ...t,
        availableWidth: $,
        availableHeight: A
      });
      const R = await r.getDimensions(a.floating);
      return f !== R.width || m !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ue(e) {
  return pn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function De(e) {
  var t;
  return (t = (pn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pn(e) {
  return e instanceof Node || e instanceof se(e).Node;
}
function pe(e) {
  return e instanceof Element || e instanceof se(e).Element;
}
function ve(e) {
  return e instanceof HTMLElement || e instanceof se(e).HTMLElement;
}
function Fn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function pt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function ma(e) {
  return ["table", "td", "th"].includes(Ue(e));
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
function fn(e) {
  const t = mn(), n = pe(e) ? fe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ga(e) {
  let t = Le(e);
  for (; ve(t) && !Qe(t); ) {
    if (fn(t))
      return t;
    if (Bt(t))
      return null;
    t = Le(t);
  }
  return null;
}
function mn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Qe(e) {
  return ["html", "body", "#document"].includes(Ue(e));
}
function fe(e) {
  return se(e).getComputedStyle(e);
}
function St(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Le(e) {
  if (Ue(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fn(e) && e.host || // Fallback.
    De(e)
  );
  return Fn(t) ? t.host : t;
}
function Oo(e) {
  const t = Le(e);
  return Qe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && pt(t) ? t : Oo(t);
}
function dt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Oo(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = se(r);
  if (a) {
    const s = Yt(i);
    return t.concat(i, i.visualViewport || [], pt(r) ? r : [], s && n ? dt(s) : []);
  }
  return t.concat(r, dt(r, [], n));
}
function Yt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function To(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ve(e), a = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, s = Et(n) !== a || Et(o) !== i;
  return s && (n = a, o = i), {
    width: n,
    height: o,
    $: s
  };
}
function gn(e) {
  return pe(e) ? e : e.contextElement;
}
function Ze(e) {
  const t = gn(e);
  if (!ve(t))
    return Ie(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = To(t);
  let i = (a ? Et(n.width) : n.width) / o, s = (a ? Et(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const va = /* @__PURE__ */ Ie(0);
function Ao(e) {
  const t = se(e);
  return !mn() || !t.visualViewport ? va : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ha(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== se(e) ? !1 : t;
}
function Ve(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = gn(e);
  let i = Ie(1);
  t && (o ? pe(o) && (i = Ze(o)) : i = Ze(e));
  const s = ha(a, n, o) ? Ao(a) : Ie(0);
  let d = (r.left + s.x) / i.x, c = (r.top + s.y) / i.y, p = r.width / i.x, u = r.height / i.y;
  if (a) {
    const f = se(a), m = o && pe(o) ? se(o) : o;
    let g = f, v = Yt(g);
    for (; v && o && m !== g; ) {
      const h = Ze(v), w = v.getBoundingClientRect(), C = fe(v), O = w.left + (v.clientLeft + parseFloat(C.paddingLeft)) * h.x, T = w.top + (v.clientTop + parseFloat(C.paddingTop)) * h.y;
      d *= h.x, c *= h.y, p *= h.x, u *= h.y, d += O, c += T, g = se(v), v = Yt(g);
    }
  }
  return Tt({
    width: p,
    height: u,
    x: d,
    y: c
  });
}
function ba(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", i = De(o), s = t ? Bt(t.floating) : !1;
  if (o === i || s && a)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ie(1);
  const p = Ie(0), u = ve(o);
  if ((u || !u && !a) && ((Ue(o) !== "body" || pt(i)) && (d = St(o)), ve(o))) {
    const f = Ve(o);
    c = Ze(o), p.x = f.x + o.clientLeft, p.y = f.y + o.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - d.scrollLeft * c.x + p.x,
    y: n.y * c.y - d.scrollTop * c.y + p.y
  };
}
function ya(e) {
  return Array.from(e.getClientRects());
}
function Do(e) {
  return Ve(De(e)).left + St(e).scrollLeft;
}
function wa(e) {
  const t = De(e), n = St(e), o = e.ownerDocument.body, r = ae(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = ae(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Do(e);
  const s = -n.scrollTop;
  return fe(o).direction === "rtl" && (i += ae(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: i,
    y: s
  };
}
function xa(e, t) {
  const n = se(e), o = De(e), r = n.visualViewport;
  let a = o.clientWidth, i = o.clientHeight, s = 0, d = 0;
  if (r) {
    a = r.width, i = r.height;
    const c = mn();
    (!c || c && t === "fixed") && (s = r.offsetLeft, d = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: d
  };
}
function _a(e, t) {
  const n = Ve(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = ve(e) ? Ze(e) : Ie(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, d = r * a.x, c = o * a.y;
  return {
    width: i,
    height: s,
    x: d,
    y: c
  };
}
function Ln(e, t, n) {
  let o;
  if (t === "viewport")
    o = xa(e, n);
  else if (t === "document")
    o = wa(De(e));
  else if (pe(t))
    o = _a(t, n);
  else {
    const r = Ao(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return Tt(o);
}
function Bo(e, t) {
  const n = Le(e);
  return n === t || !pe(n) || Qe(n) ? !1 : fe(n).position === "fixed" || Bo(n, t);
}
function Ca(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = dt(e, [], !1).filter((s) => pe(s) && Ue(s) !== "body"), r = null;
  const a = fe(e).position === "fixed";
  let i = a ? Le(e) : e;
  for (; pe(i) && !Qe(i); ) {
    const s = fe(i), d = fn(i);
    !d && s.position === "fixed" && (r = null), (a ? !d && !r : !d && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || pt(i) && !d && Bo(e, i)) ? o = o.filter((p) => p !== i) : r = s, i = Le(i);
  }
  return t.set(e, o), o;
}
function ka(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Bt(t) ? [] : Ca(t, this._c) : [].concat(n), o], s = i[0], d = i.reduce((c, p) => {
    const u = Ln(t, p, r);
    return c.top = ae(u.top, c.top), c.right = ge(u.right, c.right), c.bottom = ge(u.bottom, c.bottom), c.left = ae(u.left, c.left), c;
  }, Ln(t, s, r));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function Ea(e) {
  const {
    width: t,
    height: n
  } = To(e);
  return {
    width: t,
    height: n
  };
}
function Oa(e, t, n) {
  const o = ve(t), r = De(t), a = n === "fixed", i = Ve(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ie(0);
  if (o || !o && !a)
    if ((Ue(t) !== "body" || pt(r)) && (s = St(t)), o) {
      const u = Ve(t, !0, a, t);
      d.x = u.x + t.clientLeft, d.y = u.y + t.clientTop;
    } else r && (d.x = Do(r));
  const c = i.left + s.scrollLeft - d.x, p = i.top + s.scrollTop - d.y;
  return {
    x: c,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Lt(e) {
  return fe(e).position === "static";
}
function zn(e, t) {
  return !ve(e) || fe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function So(e, t) {
  const n = se(e);
  if (Bt(e))
    return n;
  if (!ve(e)) {
    let r = Le(e);
    for (; r && !Qe(r); ) {
      if (pe(r) && !Lt(r))
        return r;
      r = Le(r);
    }
    return n;
  }
  let o = zn(e, t);
  for (; o && ma(o) && Lt(o); )
    o = zn(o, t);
  return o && Qe(o) && Lt(o) && !fn(o) ? n : o || ga(e) || n;
}
const Ta = async function(e) {
  const t = this.getOffsetParent || So, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Oa(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Aa(e) {
  return fe(e).direction === "rtl";
}
const Da = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ba,
  getDocumentElement: De,
  getClippingRect: ka,
  getOffsetParent: So,
  getElementRects: Ta,
  getClientRects: ya,
  getDimensions: Ea,
  getScale: Ze,
  isElement: pe,
  isRTL: Aa
};
function Ba(e, t) {
  let n = null, o;
  const r = De(e);
  function a() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, d) {
    s === void 0 && (s = !1), d === void 0 && (d = 1), a();
    const {
      left: c,
      top: p,
      width: u,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !u || !f)
      return;
    const m = bt(p), g = bt(r.clientWidth - (c + u)), v = bt(r.clientHeight - (p + f)), h = bt(c), C = {
      rootMargin: -m + "px " + -g + "px " + -v + "px " + -h + "px",
      threshold: ae(0, ge(1, d)) || 1
    };
    let O = !0;
    function T(A) {
      const $ = A[0].intersectionRatio;
      if ($ !== d) {
        if (!O)
          return i();
        $ ? i(!1, $) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      O = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...C,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, C);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function Sa(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = o, c = gn(e), p = r || a ? [...c ? dt(c) : [], ...dt(t)] : [];
  p.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const u = c && s ? Ba(c, n) : null;
  let f = -1, m = null;
  i && (m = new ResizeObserver((w) => {
    let [C] = w;
    C && C.target === c && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var O;
      (O = m) == null || O.observe(t);
    })), n();
  }), c && !d && m.observe(c), m.observe(t));
  let g, v = d ? Ve(e) : null;
  d && h();
  function h() {
    const w = Ve(e);
    v && (w.x !== v.x || w.y !== v.y || w.width !== v.width || w.height !== v.height) && n(), v = w, g = requestAnimationFrame(h);
  }
  return n(), () => {
    var w;
    p.forEach((C) => {
      r && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), u == null || u(), (w = m) == null || w.disconnect(), m = null, d && cancelAnimationFrame(g);
  };
}
const Pa = ca, Ma = ua, Nn = sa, $a = fa, Ra = la, Ia = ia, Fa = pa, La = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Da,
    ...n
  }, a = {
    ...r.platform,
    _c: o
  };
  return aa(e, t, {
    ...r,
    platform: a
  });
};
function za(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Zt(e) {
  if (za(e)) {
    const t = e.$el;
    return pn(t) && Ue(t) === "#comment" ? null : t;
  }
  return e;
}
function Xe(e) {
  return typeof e == "function" ? e() : l(e);
}
function Na(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Zt(Xe(e.element));
      return n == null ? {} : Ia({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Po(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vn(e, t) {
  const n = Po(e);
  return Math.round(t * n) / n;
}
function Va(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = S(() => {
    var R;
    return (R = Xe(n.open)) != null ? R : !0;
  }), a = S(() => Xe(n.middleware)), i = S(() => {
    var R;
    return (R = Xe(n.placement)) != null ? R : "bottom";
  }), s = S(() => {
    var R;
    return (R = Xe(n.strategy)) != null ? R : "absolute";
  }), d = S(() => {
    var R;
    return (R = Xe(n.transform)) != null ? R : !0;
  }), c = S(() => Zt(e.value)), p = S(() => Zt(t.value)), u = D(0), f = D(0), m = D(s.value), g = D(i.value), v = no({}), h = D(!1), w = S(() => {
    const R = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return R;
    const W = Vn(p.value, u.value), N = Vn(p.value, f.value);
    return d.value ? {
      ...R,
      transform: "translate(" + W + "px, " + N + "px)",
      ...Po(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: W + "px",
      top: N + "px"
    };
  });
  let C;
  function O() {
    c.value == null || p.value == null || La(c.value, p.value, {
      middleware: a.value,
      placement: i.value,
      strategy: s.value
    }).then((R) => {
      u.value = R.x, f.value = R.y, m.value = R.strategy, g.value = R.placement, v.value = R.middlewareData, h.value = !0;
    });
  }
  function T() {
    typeof C == "function" && (C(), C = void 0);
  }
  function A() {
    if (T(), o === void 0) {
      O();
      return;
    }
    if (c.value != null && p.value != null) {
      C = o(c.value, p.value, O);
      return;
    }
  }
  function $() {
    r.value || (h.value = !1);
  }
  return Z([a, i, s], O, {
    flush: "sync"
  }), Z([c, p], A, {
    flush: "sync"
  }), Z(r, $, {
    flush: "sync"
  }), oo() && ro(T), {
    x: He(u),
    y: He(f),
    strategy: He(m),
    placement: He(g),
    middlewareData: He(v),
    isPositioned: He(h),
    floatingStyles: w,
    update: O
  };
}
function ee(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const a = po(o, r);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (fo(o, r), r)];
}
function Mo(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function Wa(e, t) {
  var n;
  const o = no();
  return oe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), an(o);
}
function ft(e) {
  return oo() ? (ro(e), !0) : !1;
}
function ja(e) {
  let t = !1, n;
  const o = co(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function $o(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...a) => (t += 1, n || (o = co(!0), n = o.run(() => e(...a))), ft(r), n);
}
function Re(e) {
  return typeof e == "function" ? e() : l(e);
}
const ye = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ua = (e) => typeof e < "u", Ka = Object.prototype.toString, Ga = (e) => Ka.call(e) === "[object Object]", Ro = () => {
}, Wn = /* @__PURE__ */ Ha();
function Ha() {
  var e, t;
  return ye && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function qa(e) {
  return je();
}
function Xa(e, t = 1e4) {
  return Br((n, o) => {
    let r = Re(e), a;
    const i = () => setTimeout(() => {
      r = Re(e), o();
    }, Re(t));
    return ft(() => {
      clearTimeout(a);
    }), {
      get() {
        return n(), r;
      },
      set(s) {
        r = s, o(), clearTimeout(a), a = i();
      }
    };
  });
}
function Ya(e, t) {
  qa() && Ar(e, t);
}
function Za(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = D(!1);
  let a = null;
  function i() {
    a && (clearTimeout(a), a = null);
  }
  function s() {
    r.value = !1, i();
  }
  function d(...c) {
    i(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...c);
    }, Re(t));
  }
  return o && (r.value = !0, ye && d()), ft(s), {
    isPending: an(r),
    start: d,
    stop: s
  };
}
function Ja(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, r = Za(
    o ?? Ro,
    e,
    t
  ), a = S(() => !r.isPending.value);
  return n ? {
    ready: a,
    ...r
  } : a;
}
function he(e) {
  var t;
  const n = Re(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const vn = ye ? window : void 0;
function At(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = vn) : [t, n, o, r] = e, !t)
    return Ro;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], i = () => {
    a.forEach((p) => p()), a.length = 0;
  }, s = (p, u, f, m) => (p.addEventListener(u, f, m), () => p.removeEventListener(u, f, m)), d = Z(
    () => [he(t), Re(r)],
    ([p, u]) => {
      if (i(), !p)
        return;
      const f = Ga(u) ? { ...u } : u;
      a.push(
        ...n.flatMap((m) => o.map((g) => s(p, m, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    d(), i();
  };
  return ft(c), c;
}
function Qa(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function hn(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = vn,
    eventName: a = "keydown",
    passive: i = !1,
    dedupe: s = !1
  } = o, d = Qa(t);
  return At(r, a, (c) => {
    c.repeat && Re(s) || d(c) && n(c);
  }, i);
}
function ei() {
  const e = D(!1), t = je();
  return t && me(() => {
    e.value = !0;
  }, t), e;
}
function Io(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: r = vn
  } = t, a = D(!1), i = o ? 1e3 / o : null;
  let s = 0, d = null;
  function c(f) {
    if (!a.value || !r)
      return;
    s || (s = f);
    const m = f - s;
    if (i && m < i) {
      d = r.requestAnimationFrame(c);
      return;
    }
    s = f, e({ delta: m, timestamp: f }), d = r.requestAnimationFrame(c);
  }
  function p() {
    !a.value && r && (a.value = !0, s = 0, d = r.requestAnimationFrame(c));
  }
  function u() {
    a.value = !1, d != null && r && (r.cancelAnimationFrame(d), d = null);
  }
  return n && p(), ft(u), {
    isActive: an(a),
    pause: u,
    resume: p
  };
}
function ti(e) {
  return JSON.parse(JSON.stringify(e));
}
function we(e, t, n, o = {}) {
  var r, a, i;
  const {
    clone: s = !1,
    passive: d = !1,
    eventName: c,
    deep: p = !1,
    defaultValue: u,
    shouldEmit: f
  } = o, m = je(), g = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((i = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
  let v = c;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const h = (O) => s ? typeof s == "function" ? s(O) : ti(O) : O, w = () => Ua(e[t]) ? h(e[t]) : u, C = (O) => {
    f ? f(O) && g(v, O) : g(v, O);
  };
  if (d) {
    const O = w(), T = D(O);
    let A = !1;
    return Z(
      () => e[t],
      ($) => {
        A || (A = !0, T.value = h($), ie(() => A = !1));
      }
    ), Z(
      T,
      ($) => {
        !A && ($ !== e[t] || p) && C($);
      },
      { deep: p }
    ), T;
  } else
    return S({
      get() {
        return w();
      },
      set(O) {
        C(O);
      }
    });
}
function bn(e) {
  return e ? e.flatMap((t) => t.type === Ee ? bn(t.children) : [t]) : [];
}
const ni = ["INPUT", "TEXTAREA"];
function oi(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && ni.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: r = "both",
    attributeName: a = "[data-radix-vue-collection-item]",
    itemsArray: i = [],
    loop: s = !0,
    dir: d = "ltr",
    preventScroll: c = !0,
    focus: p = !1
  } = o, [u, f, m, g, v, h] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = m || g, C = u || f;
  if (!v && !h && (!w && !C || r === "vertical" && C || r === "horizontal" && w))
    return null;
  const O = n ? Array.from(n.querySelectorAll(a)) : i;
  if (!O.length)
    return null;
  c && e.preventDefault();
  let T = null;
  return C || w ? T = Fo(O, t, {
    goForward: w ? g : d === "ltr" ? u : f,
    loop: s
  }) : v ? T = O.at(0) || null : h && (T = O.at(-1) || null), p && (T == null || T.focus()), T;
}
function Fo(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const r = e.indexOf(t), a = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const i = (a + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? Fo(
    e,
    s,
    n,
    o
  ) : s : null;
}
function zt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Jt(e, t, n = ".", o) {
  if (!zt(t))
    return Jt(e, {}, n);
  const r = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const i = e[a];
    i != null && (Array.isArray(i) && Array.isArray(r[a]) ? r[a] = [...i, ...r[a]] : zt(i) && zt(r[a]) ? r[a] = Jt(
      i,
      r[a],
      (n ? `${n}.` : "") + a.toString()
    ) : r[a] = i);
  }
  return r;
}
function ri(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Jt(n, o, ""), {})
  );
}
const ai = ri(), [yn, Dd] = ee("ConfigProvider");
let ii = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", si = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += ii[Math.random() * 64 | 0];
  return t;
};
const li = $o(() => {
  const e = D(/* @__PURE__ */ new Map()), t = D(), n = S(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), o = yn({
    scrollBody: D(!0)
  });
  let r = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Wn && (r == null || r()), t.value = void 0;
  };
  return Z(n, (i, s) => {
    var d;
    if (!ye)
      return;
    if (!i) {
      s && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, p = { padding: c, margin: 0 }, u = (d = o.scrollBody) != null && d.value ? typeof o.scrollBody.value == "object" ? ai({
      padding: o.scrollBody.value.padding === !0 ? c : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? c : o.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = `${u.padding}px`, document.body.style.marginRight = `${u.margin}px`, document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Wn && (r = At(
      document,
      "touchmove",
      (f) => {
        var m;
        f.target === document.documentElement && (f.touches.length > 1 || (m = f.preventDefault) == null || m.call(f));
      },
      { passive: !1 }
    )), ie(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Lo(e) {
  const t = si(6), n = li();
  n.value.set(t, e ?? !1);
  const o = S({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return Ya(() => {
    n.value.delete(t);
  }), o;
}
const di = "data-radix-vue-collection-item";
function zo(e, t = di) {
  const n = Symbol();
  return { createCollection: (o) => {
    const r = D([]);
    function a() {
      const i = he(o);
      return i ? r.value = Array.from(
        i.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return Or(() => {
      r.value = [];
    }), me(a), Tr(a), Z(() => o == null ? void 0 : o.value, a, { immediate: !0 }), fo(n, r), r;
  }, injectCollection: () => po(n, D([])) };
}
function wn(e) {
  const t = yn({
    dir: D("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Ke(e) {
  const t = je(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[Er(ao(r))] = (...a) => e(r, ...a);
  }), o;
}
let Nt = 0;
function ci() {
  oe((e) => {
    if (!ye)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? jn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? jn()
    ), Nt++, e(() => {
      Nt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Nt--;
    });
  });
}
function jn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function ui(e) {
  return S(() => {
    var t;
    return Re(e) ? !!((t = he(e)) != null && t.closest("form")) : !0;
  });
}
function mt(e) {
  const t = je(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
    const i = (t == null ? void 0 : t.type.props[a]).default;
    return i !== void 0 && (r[a] = i), r;
  }, {}), o = xr(e);
  return S(() => {
    const r = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((i) => {
      r[ao(i)] = a[i];
    }), Object.keys({ ...n, ...r }).reduce((i, s) => (o.value[s] !== void 0 && (i[s] = o.value[s]), i), {});
  });
}
function Q(e, t) {
  const n = mt(e), o = t ? Ke(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
function I() {
  const e = je(), t = D(), n = S(() => {
    var i, s;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : he(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const i in e.props)
    Object.defineProperty(r, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i]
    });
  if (Object.keys(o).length > 0)
    for (const i in o)
      Object.defineProperty(r, i, {
        enumerable: !0,
        configurable: !0,
        get: () => o[i]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function a(i) {
    t.value = i, !(i instanceof Element || !i) && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i.$el
    }), e.exposed = r);
  }
  return { forwardRef: a, currentRef: t, currentElement: n };
}
var pi = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qe = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), wt = {}, Vt = 0, No = function(e) {
  return e && (e.host || No(e.parentNode));
}, fi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = No(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, mi = function(e, t, n, o) {
  var r = fi(t, Array.isArray(e) ? e : [e]);
  wt[n] || (wt[n] = /* @__PURE__ */ new WeakMap());
  var a = wt[n], i = [], s = /* @__PURE__ */ new Set(), d = new Set(r), c = function(u) {
    !u || s.has(u) || (s.add(u), c(u.parentNode));
  };
  r.forEach(c);
  var p = function(u) {
    !u || d.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (s.has(f))
        p(f);
      else
        try {
          var m = f.getAttribute(o), g = m !== null && m !== "false", v = (qe.get(f) || 0) + 1, h = (a.get(f) || 0) + 1;
          qe.set(f, v), a.set(f, h), i.push(f), v === 1 && g && yt.set(f, !0), h === 1 && f.setAttribute(n, "true"), g || f.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return p(t), s.clear(), Vt++, function() {
    i.forEach(function(u) {
      var f = qe.get(u) - 1, m = a.get(u) - 1;
      qe.set(u, f), a.set(u, m), f || (yt.has(u) || u.removeAttribute(o), yt.delete(u)), m || u.removeAttribute(n);
    }), Vt--, Vt || (qe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), wt = {});
  };
}, gi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = pi(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), mi(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function Vo(e) {
  let t;
  Z(() => he(e), (n) => {
    n ? t = gi(n) : t && t();
  }), et(() => {
    t && t();
  });
}
let vi = 0;
function We(e, t = "radix") {
  const { useId: n } = yn({ useId: void 0 });
  return n && typeof n == "function" ? `${t}-${n()}` : `${t}-${++vi}`;
}
function hi(e) {
  const t = D(), n = S(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), o = S(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return me(() => {
    const r = he(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const a = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const s = i[0];
        let d, c;
        if ("borderBoxSize" in s) {
          const p = s.borderBoxSize, u = Array.isArray(p) ? p[0] : p;
          d = u.inlineSize, c = u.blockSize;
        } else
          d = r.offsetWidth, c = r.offsetHeight;
        t.value = { width: d, height: c };
      });
      return a.observe(r, { box: "border-box" }), () => a.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function bi(e, t) {
  const n = D(e);
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
function yi(e) {
  const t = Xa("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      var r, a;
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const i = (e == null ? void 0 : e.value) ?? o, s = document.activeElement, d = ((a = (r = i.find((f) => f === s)) == null ? void 0 : r.textContent) == null ? void 0 : a.trim()) ?? "", c = i.map((f) => {
        var m;
        return ((m = f.textContent) == null ? void 0 : m.trim()) ?? "";
      }), p = xi(c, t.value, d), u = i.find(
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
function wi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function xi(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((s) => s === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let a = wi(e, Math.max(r, 0));
  o.length === 1 && (a = a.filter((s) => s !== n));
  const i = a.find(
    (s) => s.toLowerCase().startsWith(o.toLowerCase())
  );
  return i !== n ? i : void 0;
}
const xn = _({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, r;
      if (!n.default)
        return null;
      const a = bn(n.default()), i = a.findIndex((p) => p.type !== _r);
      if (i === -1)
        return a;
      const s = a[i];
      (o = s.props) == null || delete o.ref;
      const d = s.props ? M(t, s.props) : t;
      t.class && (r = s.props) != null && r.class && delete s.props.class;
      const c = Cr(s, d);
      for (const p in d)
        p.startsWith("on") && (c.props || (c.props = {}), c.props[p] = d[p]);
      return a.length === 1 ? c : (a[i] = c, a);
    };
  }
}), U = _({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ye(o, t) : o !== "template" ? () => Ye(e.as, t, { default: n.default }) : () => Ye(xn, t, { default: n.default });
  }
});
function Wo() {
  const e = D(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : he(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function _i(e, t) {
  const n = D({}), o = D("none"), r = e.value ? "mounted" : "unmounted", { state: a, dispatch: i } = bi(r, {
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
  }), s = (f) => {
    var m;
    if (ye) {
      const g = new CustomEvent(f, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(g);
    }
  };
  Z(
    e,
    async (f, m) => {
      var g;
      const v = m !== f;
      if (await ie(), v) {
        const h = o.value, w = xt(t.value);
        f ? (i("MOUNT"), s("enter"), w === "none" && s("after-enter")) : w === "none" || ((g = n.value) == null ? void 0 : g.display) === "none" ? (i("UNMOUNT"), s("leave"), s("after-leave")) : m && h !== w ? (i("ANIMATION_OUT"), s("leave")) : (i("UNMOUNT"), s("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (f) => {
    const m = xt(t.value), g = m.includes(
      f.animationName
    ), v = a.value === "mounted" ? "enter" : "leave";
    f.target === t.value && g && (s(`after-${v}`), i("ANIMATION_END")), f.target === t.value && m === "none" && i("ANIMATION_END");
  }, c = (f) => {
    f.target === t.value && (o.value = xt(t.value));
  }, p = Z(
    t,
    (f, m) => {
      f ? (n.value = getComputedStyle(f), f.addEventListener("animationstart", c), f.addEventListener("animationcancel", d), f.addEventListener("animationend", d)) : (i("ANIMATION_END"), m == null || m.removeEventListener("animationstart", c), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), u = Z(a, () => {
    const f = xt(t.value);
    o.value = a.value === "mounted" ? f : "none";
  });
  return et(() => {
    p(), u();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(a.value)
    )
  };
}
function xt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const nt = _({
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
    const { present: r, forceMount: a } = be(e), i = D(), { isPresent: s } = _i(r, i);
    n({ present: s });
    let d = t.default({ present: s });
    d = bn(d || []);
    const c = je();
    if (d && (d == null ? void 0 : d.length) > 1) {
      const p = (o = c == null ? void 0 : c.parent) != null && o.type.name ? `<${c.parent.type.name} />` : "component";
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
    return () => a.value || r.value || s.value ? Ye(t.default({ present: s })[0], {
      ref: (p) => {
        const u = he(p);
        return typeof (u == null ? void 0 : u.hasAttribute) > "u" || (u != null && u.hasAttribute("data-radix-popper-content-wrapper") ? i.value = u.firstElementChild : i.value = u), u;
      }
    }) : null;
  }
}), [xe, Ci] = ee("DialogRoot"), ki = /* @__PURE__ */ _({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = we(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = D(), a = D(), { modal: i } = be(n);
    return Ci({
      open: o,
      modal: i,
      openModal: () => {
        o.value = !0;
      },
      onOpenChange: (s) => {
        o.value = s;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: r,
      contentElement: a
    }), (s, d) => E(s.$slots, "default", { open: l(o) });
  }
}), Ei = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = xe(), { forwardRef: o, currentElement: r } = I();
    return n.contentId || (n.contentId = We(void 0, "radix-vue-dialog-content")), me(() => {
      n.triggerElement.value = r.value;
    }), (a, i) => (b(), x(l(U), M(t, {
      ref: l(o),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: y(() => [
        E(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), jo = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ei();
    return (n, o) => l(t) || n.forceMount ? (b(), x(uo, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      E(n.$slots, "default")
    ], 8, ["to", "disabled"])) : te("", !0);
  }
}), Oi = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(jo), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ti = "dismissableLayer.pointerDownOutside", Ai = "dismissableLayer.focusOutside";
function Uo(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function Di(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = D(!1), a = D(() => {
  });
  return oe((i) => {
    if (!ye)
      return;
    const s = async (c) => {
      const p = c.target;
      if (t != null && t.value) {
        if (Uo(t.value, p)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let u = function() {
            Mo(
              Ti,
              e,
              f
            );
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (o.removeEventListener("click", a.value), a.value = u, o.addEventListener("click", a.value, {
            once: !0
          })) : u();
        } else
          o.removeEventListener("click", a.value);
        r.value = !1;
      }
    }, d = window.setTimeout(() => {
      o.addEventListener("pointerdown", s);
    }, 0);
    i(() => {
      window.clearTimeout(d), o.removeEventListener("pointerdown", s), o.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Bi(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = D(!1);
  return oe((a) => {
    if (!ye)
      return;
    const i = async (s) => {
      t != null && t.value && (await ie(), !(!t.value || Uo(t.value, s.target)) && s.target && !r.value && Mo(
        Ai,
        e,
        { originalEvent: s }
      ));
    };
    o.addEventListener("focusin", i), a(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const ue = io({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ko = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = I(), i = S(
      () => {
        var g;
        return ((g = a.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), s = S(() => ue.layersRoot), d = S(() => a.value ? Array.from(s.value).indexOf(a.value) : -1), c = S(() => ue.layersWithOutsidePointerEventsDisabled.size > 0), p = S(() => {
      const g = Array.from(s.value), [v] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1), h = g.indexOf(v);
      return d.value >= h;
    }), u = Di(async (g) => {
      const v = [...ue.branches].some(
        (h) => h.contains(g.target)
      );
      !p.value || v || (o("pointerDownOutside", g), o("interactOutside", g), await ie(), g.defaultPrevented || o("dismiss"));
    }, a), f = Bi((g) => {
      [...ue.branches].some(
        (v) => v.contains(g.target)
      ) || (o("focusOutside", g), o("interactOutside", g), g.defaultPrevented || o("dismiss"));
    }, a);
    hn("Escape", (g) => {
      d.value === s.value.size - 1 && (o("escapeKeyDown", g), g.defaultPrevented || o("dismiss"));
    });
    let m;
    return oe((g) => {
      a.value && (n.disableOutsidePointerEvents && (ue.layersWithOutsidePointerEventsDisabled.size === 0 && (m = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), ue.layersWithOutsidePointerEventsDisabled.add(a.value)), s.value.add(a.value), g(() => {
        n.disableOutsidePointerEvents && ue.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = m);
      }));
    }), oe((g) => {
      g(() => {
        a.value && (s.value.delete(a.value), ue.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (g, v) => (b(), x(l(U), {
      ref: l(r),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: rn({
        pointerEvents: c.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(f).onFocusCapture,
      onBlurCapture: l(f).onBlurCapture,
      onPointerdownCapture: l(u).onPointerDownCapture
    }, {
      default: y(() => [
        E(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Si = /* @__PURE__ */ _({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = I();
    return me(() => {
      ue.branches.add(o.value);
    }), et(() => {
      ue.branches.delete(o.value);
    }), (r, a) => (b(), x(l(U), M({ ref: l(n) }, t), {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wt = "focusScope.autoFocusOnMount", jt = "focusScope.autoFocusOnUnmount", Un = { bubbles: !1, cancelable: !0 };
function kt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Me(o, { select: t }), document.activeElement !== n)
      return !0;
}
function Pi(e) {
  const t = _n(e), n = Kn(t, e), o = Kn(t.reverse(), e);
  return [n, o];
}
function _n(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Kn(e, t) {
  for (const n of e)
    if (!Mi(n, { upTo: t }))
      return n;
}
function Mi(e, { upTo: t }) {
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
function $i(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && $i(e) && t && e.select();
  }
}
const Ri = ja(() => D([]));
function Ii() {
  const e = Ri();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Gn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Gn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Gn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Fi(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Go = /* @__PURE__ */ _({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: a } = I(), i = D(null), s = Ii(), d = io({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    oe((p) => {
      if (!ye)
        return;
      const u = a.value;
      if (!n.trapped)
        return;
      function f(h) {
        if (d.paused || !u)
          return;
        const w = h.target;
        u.contains(w) ? i.value = w : Me(i.value, { select: !0 });
      }
      function m(h) {
        if (d.paused || !u)
          return;
        const w = h.relatedTarget;
        w !== null && (u.contains(w) || Me(i.value, { select: !0 }));
      }
      function g(h) {
        u.contains(i.value) || Me(u);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const v = new MutationObserver(g);
      u && v.observe(u, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), v.disconnect();
      });
    }), oe(async (p) => {
      const u = a.value;
      if (await ie(), !u)
        return;
      s.add(d);
      const f = document.activeElement;
      if (!u.contains(f)) {
        const m = new CustomEvent(Wt, Un);
        u.addEventListener(Wt, (g) => o("mountAutoFocus", g)), u.dispatchEvent(m), m.defaultPrevented || (kt(Fi(_n(u)), {
          select: !0
        }), document.activeElement === f && Me(u));
      }
      p(() => {
        u.removeEventListener(Wt, (v) => o("mountAutoFocus", v));
        const m = new CustomEvent(jt, Un), g = (v) => {
          o("unmountAutoFocus", v);
        };
        u.addEventListener(jt, g), u.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Me(f ?? document.body, { select: !0 }), u.removeEventListener(jt, g), s.remove(d);
        }, 0);
      });
    });
    function c(p) {
      if (!n.loop && !n.trapped || d.paused)
        return;
      const u = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (u && f) {
        const m = p.currentTarget, [g, v] = Pi(m);
        g && v ? !p.shiftKey && f === v ? (p.preventDefault(), n.loop && Me(g, { select: !0 })) : p.shiftKey && f === g && (p.preventDefault(), n.loop && Me(v, { select: !0 })) : f === m && p.preventDefault();
      }
    }
    return (p, u) => (b(), x(l(U), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: c
    }, {
      default: y(() => [
        E(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Li = "menu.itemSelect", Qt = ["Enter", " "], zi = ["ArrowDown", "PageUp", "Home"], Ho = ["ArrowUp", "PageDown", "End"], Ni = [...zi, ...Ho], Vi = {
  ltr: [...Qt, "ArrowRight"],
  rtl: [...Qt, "ArrowLeft"]
}, Wi = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Cn(e) {
  return e ? "open" : "closed";
}
function Dt(e) {
  return e === "indeterminate";
}
function kn(e) {
  return Dt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ji(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Ui(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, d = t[a].y, c = t[i].x, p = t[i].y;
    d > o != p > o && n < (c - s) * (o - d) / (p - d) + s && (r = !r);
  }
  return r;
}
function Ki(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ui(n, t);
}
function ct(e) {
  return e.pointerType === "mouse";
}
const Gi = "DialogTitle", Hi = "DialogContent";
function qi({
  titleName: e = Gi,
  contentName: t = Hi,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: r,
  contentElement: a
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  me(() => {
    var d;
    document.getElementById(o) || console.warn(i);
    const c = (d = a.value) == null ? void 0 : d.getAttribute("aria-describedby");
    r && !c && (document.getElementById(r) || console.warn(s));
  });
}
const qo = /* @__PURE__ */ _({
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
    const n = e, o = t, r = xe(), { forwardRef: a, currentElement: i } = I();
    return r.titleId || (r.titleId = We(void 0, "radix-vue-dialog-title")), r.descriptionId || (r.descriptionId = We(void 0, "radix-vue-dialog-description")), me(() => {
      r.contentElement = i, document.activeElement !== document.body && (r.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && qi({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: r.contentElement
    }), (s, d) => (b(), x(l(Go), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (c) => o("openAutoFocus", c)),
      onUnmountAutoFocus: d[6] || (d[6] = (c) => o("closeAutoFocus", c))
    }, {
      default: y(() => [
        V(l(Ko), M({
          id: l(r).contentId,
          ref: l(a),
          as: s.as,
          "as-child": s.asChild,
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": l(r).descriptionId,
          "aria-labelledby": l(r).titleId,
          "data-state": l(Cn)(l(r).open.value)
        }, s.$attrs, {
          onDismiss: d[0] || (d[0] = (c) => l(r).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (c) => o("escapeKeyDown", c)),
          onFocusOutside: d[2] || (d[2] = (c) => o("focusOutside", c)),
          onInteractOutside: d[3] || (d[3] = (c) => o("interactOutside", c)),
          onPointerDownOutside: d[4] || (d[4] = (c) => o("pointerDownOutside", c))
        }), {
          default: y(() => [
            E(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Xi = /* @__PURE__ */ _({
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
    const n = e, o = t, r = xe(), a = Ke(o), { forwardRef: i, currentElement: s } = I();
    return Vo(s), (d, c) => (b(), x(qo, M({ ...n, ...l(a) }, {
      ref: l(i),
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
        E(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Yi = /* @__PURE__ */ _({
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
    const n = e, o = Ke(t);
    I();
    const r = xe(), a = D(!1), i = D(!1);
    return (s, d) => (b(), x(qo, M({ ...n, ...l(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (a.value || (p = l(r).triggerElement.value) == null || p.focus(), c.preventDefault()), a.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var p;
        c.defaultPrevented || (a.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const u = c.target;
        (p = l(r).triggerElement.value) != null && p.contains(u) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        E(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zi = /* @__PURE__ */ _({
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
    const n = e, o = t, r = xe(), a = Ke(o), { forwardRef: i } = I();
    return (s, d) => (b(), x(l(nt), {
      present: s.forceMount || l(r).open.value
    }, {
      default: y(() => [
        l(r).modal.value ? (b(), x(Xi, M({
          key: 0,
          ref: l(i)
        }, { ...n, ...l(a), ...s.$attrs }), {
          default: y(() => [
            E(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(Yi, M({
          key: 1,
          ref: l(i)
        }, { ...n, ...l(a), ...s.$attrs }), {
          default: y(() => [
            E(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ji = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = xe();
    return Lo(!0), I(), (n, o) => (b(), x(l(U), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Qi = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = xe(), { forwardRef: n } = I();
    return (o, r) => {
      var a;
      return (a = l(t)) != null && a.modal.value ? (b(), x(l(nt), {
        key: 0,
        present: o.forceMount || l(t).open.value
      }, {
        default: y(() => [
          V(Ji, M(o.$attrs, {
            ref: l(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: y(() => [
              E(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : te("", !0);
    };
  }
}), Xo = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    I();
    const n = xe();
    return (o, r) => (b(), x(l(U), M(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (a) => l(n).onOpenChange(!1))
    }), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), es = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = xe();
    return I(), (o, r) => (b(), x(l(U), M(t, {
      id: l(n).titleId
    }), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ts = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    I();
    const n = xe();
    return (o, r) => (b(), x(l(U), M(t, {
      id: l(n).descriptionId
    }), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Yo, ns] = ee("PopperRoot"), Zo = /* @__PURE__ */ _({
  __name: "PopperRoot",
  setup(e) {
    const t = D();
    return ns({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => E(n.$slots, "default");
  }
}), os = /* @__PURE__ */ _({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = I(), r = Yo();
    return oe(() => {
      r.onAnchorChange(t.element ?? o.value);
    }), (a, i) => (b(), x(l(U), {
      ref: l(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: y(() => [
        E(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function rs(e) {
  return e !== null;
}
function as(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, r;
      const { placement: a, rects: i, middlewareData: s } = t, d = ((n = s.arrow) == null ? void 0 : n.centerOffset) !== 0, c = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [u, f] = en(a), m = { start: "0%", center: "50%", end: "100%" }[f], g = (((o = s.arrow) == null ? void 0 : o.x) ?? 0) + c / 2, v = (((r = s.arrow) == null ? void 0 : r.y) ?? 0) + p / 2;
      let h = "", w = "";
      return u === "bottom" ? (h = d ? m : `${g}px`, w = `${-p}px`) : u === "top" ? (h = d ? m : `${g}px`, w = `${i.floating.height + p}px`) : u === "right" ? (h = `${-p}px`, w = d ? m : `${v}px`) : u === "left" && (h = `${i.floating.width + p}px`, w = d ? m : `${v}px`), { data: { x: h, y: w } };
    }
  };
}
function en(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Jo = {
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
}, [Bd, is] = ee("PopperContent"), ss = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ mo({
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
    ...Jo
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Yo(), { forwardRef: a, currentElement: i } = I(), s = D(), d = D(), { width: c, height: p } = hi(d), u = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), g = S(() => ({
      padding: f.value,
      boundary: m.value.filter(rs),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), v = Wa(() => [
      Pa({
        mainAxis: n.sideOffset + p.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Nn({
        ...g.value
      }),
      n.avoidCollisions && Ma({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Fa() : void 0,
        ...g.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Nn({
        ...g.value
      }),
      $a({
        ...g.value,
        apply: ({ elements: k, rects: P, availableWidth: B, availableHeight: H }) => {
          const { width: z, height: J } = P.reference, Y = k.floating.style;
          Y.setProperty(
            "--radix-popper-available-width",
            `${B}px`
          ), Y.setProperty(
            "--radix-popper-available-height",
            `${H}px`
          ), Y.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), Y.setProperty(
            "--radix-popper-anchor-height",
            `${J}px`
          );
        }
      }),
      d.value && Na({ element: d.value, padding: n.arrowPadding }),
      as({
        arrowWidth: c.value,
        arrowHeight: p.value
      }),
      n.hideWhenDetached && Ra({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: h, placement: w, isPositioned: C, middlewareData: O } = Va(
      r.anchor,
      s,
      {
        strategy: "fixed",
        placement: u,
        whileElementsMounted: (...k) => Sa(...k, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), T = S(
      () => en(w.value)[0]
    ), A = S(
      () => en(w.value)[1]
    );
    Dr(() => {
      C.value && o("placed");
    });
    const $ = S(
      () => {
        var k;
        return ((k = O.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), R = D("");
    oe(() => {
      i.value && (R.value = window.getComputedStyle(i.value).zIndex);
    });
    const W = S(() => {
      var k;
      return ((k = O.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), N = S(() => {
      var k;
      return ((k = O.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return is({
      placedSide: T,
      onArrowChange: (k) => d.value = k,
      arrowX: W,
      arrowY: N,
      shouldHideArrow: $
    }), (k, P) => {
      var B, H, z;
      return b(), X("div", {
        ref_key: "floatingRef",
        ref: s,
        "data-radix-popper-content-wrapper": "",
        style: rn({
          ...l(h),
          transform: l(C) ? l(h).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: R.value,
          "--radix-popper-transform-origin": [
            (B = l(O).transformOrigin) == null ? void 0 : B.x,
            (H = l(O).transformOrigin) == null ? void 0 : H.y
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
        V(l(U), M({ ref: l(a) }, k.$attrs, {
          "as-child": n.asChild,
          as: k.as,
          "data-side": T.value,
          "data-align": A.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: l(C) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            E(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Qo = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return I(), (t, n) => (b(), x(l(U), {
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
        E(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ls = "data-radix-vue-collection-item", [En, ds] = ee("CollectionProvider");
function cs(e = ls) {
  const t = D(/* @__PURE__ */ new Map()), n = D(), o = ds({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = fs(o), a = S(() => Array.from(o.itemMap.value.values())), i = S(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: a, itemMapSize: i };
}
const us = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = En(), { primitiveElement: o, currentElement: r } = Wo();
    return Z(r, () => {
      n.collectionRef.value = r.value;
    }), () => Ye(xn, { ref: o }, t);
  }
}), ps = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = En(), { primitiveElement: r, currentElement: a } = Wo();
    return oe((i) => {
      if (a.value) {
        const s = kr(a.value);
        o.itemMap.value.set(s, { ref: a.value, value: e.value }), i(() => o.itemMap.value.delete(s));
      }
    }), () => Ye(xn, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function fs(e) {
  const t = e ?? En();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const o = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (r, a) => o.indexOf(r.ref) - o.indexOf(a.ref)
    );
  } };
}
const er = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(os), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ms() {
  const e = D(!1);
  return me(() => {
    At("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), At(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const gs = $o(ms), [Ge, tr] = ee(["MenuRoot", "MenuSub"], "MenuContext"), [gt, vs] = ee("MenuRoot"), hs = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r, dir: a } = be(n), i = wn(a), s = we(n, "open", o), d = D(), c = gs();
    return tr({
      open: s,
      onOpenChange: (p) => {
        s.value = p;
      },
      content: d,
      onContentChange: (p) => {
        d.value = p;
      }
    }), vs({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: c,
      dir: i,
      modal: r
    }), (p, u) => (b(), x(l(Zo), null, {
      default: y(() => [
        E(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), bs = "rovingFocusGroup.onEntryFocus", ys = { bubbles: !1, cancelable: !0 };
function ws(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [Sd, xs] = ee("RovingFocusGroup"), _s = /* @__PURE__ */ _({
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
    const o = e, r = n, { loop: a, orientation: i, dir: s } = be(o), d = wn(s), c = we(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), p = D(!1), u = D(!1), f = D(0), { getItems: m } = cs();
    function g(v) {
      const h = !u.value;
      if (v.currentTarget && v.target === v.currentTarget && h && !p.value) {
        const w = new CustomEvent(bs, ys);
        if (v.currentTarget.dispatchEvent(w), r("entryFocus", w), !w.defaultPrevented) {
          const C = m().map(($) => $.ref).filter(($) => $.dataset.disabled !== ""), O = C.find(($) => $.getAttribute("data-active") === "true"), T = C.find(
            ($) => $.id === c.value
          ), A = [O, T, ...C].filter(
            Boolean
          );
          ws(A, o.preventScrollOnEntryFocus);
        }
      }
      u.value = !1;
    }
    return t({
      getItems: m
    }), xs({
      loop: a,
      dir: d,
      orientation: i,
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
    }), (v, h) => (b(), x(l(us), null, {
      default: y(() => [
        V(l(U), {
          tabindex: p.value || f.value === 0 ? -1 : 0,
          "data-orientation": l(i),
          as: v.as,
          "as-child": v.asChild,
          dir: l(d),
          style: { outline: "none" },
          onMousedown: h[0] || (h[0] = (w) => u.value = !0),
          onFocus: g,
          onBlur: h[1] || (h[1] = (w) => p.value = !1)
        }, {
          default: y(() => [
            E(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [On, Cs] = ee("MenuContent"), Tn = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ mo({
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
    ...Jo
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ge(), a = gt(), { trapFocus: i, disableOutsidePointerEvents: s, loop: d } = be(n);
    ci(), Lo(s.value);
    const c = D(""), p = D(0), u = D(0), f = D(null), m = D("right"), g = D(0), v = D(null), { createCollection: h } = zo(), { forwardRef: w, currentElement: C } = I(), O = h(C);
    Z(C, (k) => {
      r.onContentChange(k);
    });
    const { handleTypeaheadSearch: T } = yi(O);
    et(() => {
      window.clearTimeout(p.value);
    });
    function A(k) {
      var P, B;
      return m.value === ((P = f.value) == null ? void 0 : P.side) && Ki(k, (B = f.value) == null ? void 0 : B.area);
    }
    async function $(k) {
      var P;
      o("openAutoFocus", k), !k.defaultPrevented && (k.preventDefault(), (P = C.value) == null || P.focus({
        preventScroll: !0
      }));
    }
    function R(k) {
      if (k.defaultPrevented)
        return;
      const P = k.target.closest("[data-radix-menu-content]") === k.currentTarget, B = k.ctrlKey || k.altKey || k.metaKey, H = k.key.length === 1, z = oi(
        k,
        document.activeElement,
        C.value,
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
      if (k.code === "Space" || (P && (k.key === "Tab" && k.preventDefault(), !B && H && T(k.key)), k.target !== C.value) || !Ni.includes(k.key))
        return;
      k.preventDefault();
      const J = O.value;
      Ho.includes(k.key) && J.reverse(), ji(J);
    }
    function W(k) {
      var P, B;
      (B = (P = k == null ? void 0 : k.currentTarget) == null ? void 0 : P.contains) != null && B.call(P, k.target) || (window.clearTimeout(p.value), c.value = "");
    }
    function N(k) {
      var P;
      if (!ct(k))
        return;
      const B = k.target, H = g.value !== k.clientX;
      if ((P = k == null ? void 0 : k.currentTarget) != null && P.contains(B) && H) {
        const z = k.clientX > g.value ? "right" : "left";
        m.value = z, g.value = k.clientX;
      }
    }
    return Cs({
      onItemEnter: (k) => !!A(k),
      onItemLeave: (k) => {
        var P;
        A(k) || ((P = C.value) == null || P.focus(), v.value = null);
      },
      onTriggerLeave: (k) => !!A(k),
      searchRef: c,
      pointerGraceTimerRef: u,
      onPointerGraceIntentChange: (k) => {
        f.value = k;
      }
    }), (k, P) => (b(), x(l(Go), {
      "as-child": "",
      trapped: l(i),
      onMountAutoFocus: $,
      onUnmountAutoFocus: P[7] || (P[7] = (B) => o("closeAutoFocus", B))
    }, {
      default: y(() => [
        V(l(Ko), {
          "as-child": "",
          "disable-outside-pointer-events": l(s),
          onEscapeKeyDown: P[2] || (P[2] = (B) => o("escapeKeyDown", B)),
          onPointerDownOutside: P[3] || (P[3] = (B) => o("pointerDownOutside", B)),
          onFocusOutside: P[4] || (P[4] = (B) => o("focusOutside", B)),
          onInteractOutside: P[5] || (P[5] = (B) => o("interactOutside", B)),
          onDismiss: P[6] || (P[6] = (B) => o("dismiss"))
        }, {
          default: y(() => [
            V(l(_s), {
              "current-tab-stop-id": v.value,
              "onUpdate:currentTabStopId": P[0] || (P[0] = (B) => v.value = B),
              "as-child": "",
              orientation: "vertical",
              dir: l(a).dir.value,
              loop: l(d),
              onEntryFocus: P[1] || (P[1] = (B) => {
                o("entryFocus", B), l(a).isUsingKeyboardRef.value || B.preventDefault();
              })
            }, {
              default: y(() => [
                V(l(ss), {
                  ref: l(w),
                  role: "menu",
                  as: k.as,
                  "as-child": k.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": l(Cn)(l(r).open.value),
                  dir: l(a).dir.value,
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
                  onKeydown: R,
                  onBlur: W,
                  onPointermove: N
                }, {
                  default: y(() => [
                    E(k.$slots, "default")
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
}), nr = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = On(), { forwardRef: o } = I(), r = D(!1);
    async function a(s) {
      if (!s.defaultPrevented && ct(s)) {
        if (t.disabled)
          n.onItemLeave(s);
        else if (!n.onItemEnter(s)) {
          const d = s.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(s) {
      await ie(), !s.defaultPrevented && ct(s) && n.onItemLeave(s);
    }
    return (s, d) => (b(), x(l(ps), null, {
      default: y(() => [
        V(l(U), M({
          ref: l(o),
          role: "menuitem",
          tabindex: "-1"
        }, s.$attrs, {
          as: s.as,
          "as-child": s.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": s.disabled || void 0,
          "data-disabled": s.disabled ? "" : void 0,
          "data-highlighted": r.value ? "" : void 0,
          onPointermove: a,
          onPointerleave: i,
          onFocus: d[0] || (d[0] = async (c) => {
            await ie(), !(c.defaultPrevented || s.disabled) && (r.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (c) => {
            await ie(), !c.defaultPrevented && (r.value = !1);
          })
        }), {
          default: y(() => [
            E(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), An = /* @__PURE__ */ _({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = I(), i = gt(), s = On(), d = D(!1);
    async function c() {
      const p = a.value;
      if (!n.disabled && p) {
        const u = new CustomEvent(Li, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", u), await ie(), u.defaultPrevented ? d.value = !1 : i.onClose();
      }
    }
    return (p, u) => (b(), x(nr, M(n, {
      ref: l(r),
      onClick: c,
      onPointerdown: u[0] || (u[0] = () => {
        d.value = !0;
      }),
      onPointerup: u[1] || (u[1] = async (f) => {
        var m;
        await ie(), !f.defaultPrevented && (d.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: u[2] || (u[2] = async (f) => {
        const m = l(s).searchRef.value !== "";
        p.disabled || m && f.key === " " || l(Qt).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        E(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ks, or] = ee(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Es = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ks({
      checked: D(!1)
    });
    return (n, o) => (b(), x(l(nt), {
      present: n.forceMount || l(Dt)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: y(() => [
        V(l(U), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(kn)(l(t).checked.value)
        }, {
          default: y(() => [
            E(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Os = /* @__PURE__ */ _({
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
    const n = e, o = t, r = we(n, "checked", o);
    return or({ checked: r }), (a, i) => (b(), x(An, M({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(Dt)(l(r)) ? "mixed" : l(r),
      "data-state": l(kn)(l(r)),
      onSelect: i[0] || (i[0] = async (s) => {
        o("select", s), l(Dt)(l(r)) ? r.value = !0 : r.value = !l(r);
      })
    }), {
      default: y(() => [
        E(a.$slots, "default", { checked: l(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Ts = /* @__PURE__ */ _({
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
    const n = e, o = t, r = Q(n, o), a = Ge(), { forwardRef: i, currentElement: s } = I();
    return Vo(s), (d, c) => (b(), x(Tn, M(l(r), {
      ref: l(i),
      "trap-focus": l(a).open.value,
      "disable-outside-pointer-events": l(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: c[0] || (c[0] = (p) => l(a).onOpenChange(!1)),
      onFocusOutside: c[1] || (c[1] = st((p) => o("focusOutside", p), ["prevent"]))
    }), {
      default: y(() => [
        E(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), As = /* @__PURE__ */ _({
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
    const n = Q(e, t), o = Ge();
    return (r, a) => (b(), x(Tn, M(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (i) => l(o).onOpenChange(!1))
    }), {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ds = /* @__PURE__ */ _({
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
    const n = Q(e, t), o = Ge(), r = gt();
    return (a, i) => (b(), x(l(nt), {
      present: a.forceMount || l(o).open.value
    }, {
      default: y(() => [
        l(r).modal.value ? (b(), x(Ts, j(M({ key: 0 }, { ...a.$attrs, ...l(n) })), {
          default: y(() => [
            E(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), x(As, j(M({ key: 1 }, { ...a.$attrs, ...l(n) })), {
          default: y(() => [
            E(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rr = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(U), M({ role: "group" }, t), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bs = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(U), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ss = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(jo), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ps, Ms] = ee("MenuRadioGroup"), $s = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = we(n, "modelValue", t);
    return Ms({
      modelValue: o,
      onValueChange: (r) => {
        o.value = r;
      }
    }), (r, a) => (b(), x(rr, j(G(n)), {
      default: y(() => [
        E(r.$slots, "default", { modelValue: l(o) })
      ]),
      _: 3
    }, 16));
  }
}), Rs = /* @__PURE__ */ _({
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
    const n = e, o = t, { value: r } = be(n), a = Ps(), i = S(
      () => a.modelValue.value === (r == null ? void 0 : r.value)
    );
    return or({ checked: i }), (s, d) => (b(), x(An, M({ role: "menuitemradio" }, n, {
      "aria-checked": i.value,
      "data-state": l(kn)(i.value),
      onSelect: d[0] || (d[0] = async (c) => {
        o("select", c), l(a).onValueChange(l(r));
      })
    }), {
      default: y(() => [
        E(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Is = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(U), M(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ar, Fs] = ee("MenuSub"), Ls = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = we(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), r = Ge(), a = D(), i = D();
    return oe((s) => {
      (r == null ? void 0 : r.open.value) === !1 && (o.value = !1), s(() => o.value = !1);
    }), tr({
      open: o,
      onOpenChange: (s) => {
        o.value = s;
      },
      content: i,
      onContentChange: (s) => {
        i.value = s;
      }
    }), Fs({
      triggerId: "",
      contentId: "",
      trigger: a,
      onTriggerChange: (s) => {
        a.value = s;
      }
    }), (s, d) => (b(), x(l(Zo), null, {
      default: y(() => [
        E(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), zs = /* @__PURE__ */ _({
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
    const n = Q(e, t), o = Ge(), r = gt(), a = ar(), { forwardRef: i, currentElement: s } = I();
    return a.contentId || (a.contentId = We(void 0, "radix-vue-menu-sub-content")), (d, c) => (b(), x(l(nt), {
      present: d.forceMount || l(o).open.value
    }, {
      default: y(() => [
        V(Tn, M(l(n), {
          id: l(a).contentId,
          ref: l(i),
          "aria-labelledby": l(a).triggerId,
          align: "start",
          side: l(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: c[0] || (c[0] = st((p) => {
            var u;
            l(r).isUsingKeyboardRef.value && ((u = l(s)) == null || u.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = st(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (p) => {
            p.defaultPrevented || p.target !== l(a).trigger.value && l(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (p) => {
            l(r).onClose(), p.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (p) => {
            var u, f;
            const m = (u = p.currentTarget) == null ? void 0 : u.contains(p.target), g = l(Wi)[l(r).dir.value].includes(p.key);
            m && g && (l(o).onOpenChange(!1), (f = l(a).trigger.value) == null || f.focus(), p.preventDefault());
          })
        }), {
          default: y(() => [
            E(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ns = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ge(), o = gt(), r = ar(), a = On(), i = D(null);
    r.triggerId || (r.triggerId = We(void 0, "radix-vue-menu-sub-trigger"));
    function s() {
      i.value && window.clearTimeout(i.value), i.value = null;
    }
    et(() => {
      s();
    });
    function d(u) {
      !ct(u) || a.onItemEnter(u) || !t.disabled && !n.open.value && !i.value && (a.onPointerGraceIntentChange(null), i.value = window.setTimeout(() => {
        n.onOpenChange(!0), s();
      }, 100));
    }
    async function c(u) {
      var f, m;
      if (!ct(u))
        return;
      s();
      const g = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (g != null && g.width) {
        const v = (m = n.content.value) == null ? void 0 : m.dataset.side, h = v === "right", w = h ? -5 : 5, C = g[h ? "left" : "right"], O = g[h ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: u.clientX + w, y: u.clientY },
            { x: C, y: g.top },
            { x: O, y: g.top },
            { x: O, y: g.bottom },
            { x: C, y: g.bottom }
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
      t.disabled || m && u.key === " " || Vi[o.dir.value].includes(u.key) && (n.onOpenChange(!0), await ie(), (f = n.content.value) == null || f.focus(), u.preventDefault());
    }
    return (u, f) => (b(), x(er, { "as-child": "" }, {
      default: y(() => [
        V(nr, M(t, {
          id: l(r).triggerId,
          ref: (m) => {
            var g;
            (g = l(r)) == null || g.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(r).contentId,
          "data-state": l(Cn)(l(n).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), l(n).open.value || l(n).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: c,
          onKeydown: p
        }), {
          default: y(() => [
            E(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [ir, Vs] = ee("DropdownMenuRoot"), Ws = /* @__PURE__ */ _({
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
    I();
    const r = we(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = D(), { modal: i, dir: s } = be(n), d = wn(s);
    return Vs({
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
      modal: i,
      dir: d
    }), (c, p) => (b(), x(l(hs), {
      open: l(r),
      "onUpdate:open": p[0] || (p[0] = (u) => so(r) ? r.value = u : null),
      dir: l(d),
      modal: l(i)
    }, {
      default: y(() => [
        E(c.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), js = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ir(), { forwardRef: o, currentElement: r } = I();
    return me(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = We(void 0, "radix-vue-dropdown-menu-trigger")), (a, i) => (b(), x(l(er), { "as-child": "" }, {
      default: y(() => [
        V(l(U), {
          id: l(n).triggerId,
          ref: l(o),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": l(n).open.value,
          "aria-controls": l(n).open.value ? l(n).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": l(n).open.value ? "open" : "closed",
          onClick: i[0] || (i[0] = async (s) => {
            var d;
            !a.disabled && s.button === 0 && s.ctrlKey === !1 && ((d = l(n)) == null || d.onOpenToggle(), await ie(), l(n).open.value && s.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = lo(
            (s) => {
              a.disabled || (["Enter", " "].includes(s.key) && l(n).onOpenToggle(), s.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            E(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Us = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(Ss), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ks = /* @__PURE__ */ _({
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
    I();
    const o = ir(), r = D(!1);
    function a(i) {
      i.defaultPrevented || (r.value || setTimeout(() => {
        var s;
        (s = o.triggerElement.value) == null || s.focus();
      }, 0), r.value = !1, i.preventDefault());
    }
    return o.contentId || (o.contentId = We(void 0, "radix-vue-dropdown-menu-content")), (i, s) => {
      var d;
      return b(), x(l(Ds), M(l(n), {
        id: l(o).contentId,
        "aria-labelledby": (d = l(o)) == null ? void 0 : d.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: a,
        onInteractOutside: s[0] || (s[0] = (c) => {
          var p;
          if (c.defaultPrevented) return;
          const u = c.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0, m = u.button === 2 || f;
          (!l(o).modal.value || m) && (r.value = !0), (p = l(o).triggerElement.value) != null && p.contains(c.target) && c.preventDefault();
        })
      }), {
        default: y(() => [
          E(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Gs = /* @__PURE__ */ _({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Ke(t);
    return I(), (r, a) => (b(), x(l(An), j(G({ ...n, ...l(o) })), {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hs = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (b(), x(l(rr), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qs = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (b(), x(l(Is), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xs = /* @__PURE__ */ _({
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
    const n = e, o = Ke(t);
    return I(), (r, a) => (b(), x(l(Os), j(G({ ...n, ...l(o) })), {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sr = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (b(), x(l(Es), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ys = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (b(), x(l(Bs), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zs = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ke(t);
    return I(), (r, a) => (b(), x(l($s), j(G({ ...n, ...l(o) })), {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ _({
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
    return I(), (o, r) => (b(), x(l(Rs), j(G(l(n))), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qs = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = we(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return I(), (r, a) => (b(), x(l(Ls), {
      open: l(o),
      "onUpdate:open": a[0] || (a[0] = (i) => so(o) ? o.value = i : null)
    }, {
      default: y(() => [
        E(r.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), el = /* @__PURE__ */ _({
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
    return I(), (o, r) => (b(), x(l(zs), M(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tl = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (b(), x(l(Ns), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function nl() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
nl();
const ol = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [rl, al] = ee("SwitchRoot"), il = /* @__PURE__ */ _({
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
    const n = e, o = t, { disabled: r } = be(n), a = we(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function i() {
      r.value || (a.value = !a.value);
    }
    const { forwardRef: s, currentElement: d } = I(), c = ui(d), p = S(() => {
      var u;
      return n.id && d.value ? (u = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return al({
      checked: a,
      toggleCheck: i,
      disabled: r
    }), (u, f) => (b(), X(Ee, null, [
      V(l(U), M(u.$attrs, {
        id: u.id,
        ref: l(s),
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
        onClick: i,
        onKeydown: lo(st(i, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          E(u.$slots, "default", { checked: l(a) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      l(c) ? (b(), X("input", {
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
      }, null, 8, ol)) : te("", !0)
    ], 64));
  }
}), sl = /* @__PURE__ */ _({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = rl();
    return I(), (n, o) => {
      var r;
      return b(), x(l(U), {
        "data-state": (r = l(t).checked) != null && r.value ? "checked" : "unchecked",
        "data-disabled": l(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: y(() => [
          E(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Pt, ll] = ee("ToastProvider"), dl = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: r, swipeThreshold: a } = be(t), i = D(), s = D(0), d = D(!1), c = D(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return ll({
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: a,
      toastCount: s,
      viewport: i,
      onViewportChange(p) {
        i.value = p;
      },
      onToastAdd() {
        s.value++;
      },
      onToastRemove() {
        s.value--;
      },
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: c
    }), (p, u) => E(p.$slots, "default");
  }
}), cl = "toast.swipeStart", ul = "toast.swipeMove", pl = "toast.swipeCancel", fl = "toast.swipeEnd", tn = "toast.viewportPause", nn = "toast.viewportResume";
function _t(e, t, n) {
  const o = n.originalEvent.currentTarget, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function Hn(e, t, n = 0) {
  const o = Math.abs(e.x), r = Math.abs(e.y), a = o > r;
  return t === "left" || t === "right" ? a && o > n : !a && r > n;
}
function ml(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function lr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), ml(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", r = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (r) {
          const a = n.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...lr(n));
    }
  }), t;
}
const gl = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Pt(), n = Ja(1e3), o = D(!1);
    return Io(() => {
      o.value = !0;
    }), (r, a) => l(n) || o.value ? (b(), x(l(Qo), { key: 0 }, {
      default: y(() => [
        Ne($e(l(t).label.value) + " ", 1),
        E(r.$slots, "default")
      ]),
      _: 3
    })) : te("", !0);
  }
}), [vl, hl] = ee("ToastRoot"), bl = /* @__PURE__ */ _({
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
    const n = e, o = t, { forwardRef: r, currentElement: a } = I(), i = Pt(), s = D(null), d = D(null), c = S(() => n.duration || i.duration.value), p = D(0), u = D(c.value), f = D(0), m = D(c.value), g = Io(() => {
      const C = (/* @__PURE__ */ new Date()).getTime() - p.value;
      m.value = Math.max(u.value - C, 0);
    }, { fpsLimit: 60 });
    function v(C) {
      !C || C === Number.POSITIVE_INFINITY || ye && (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(h, C));
    }
    function h() {
      var C, O;
      (C = a.value) != null && C.contains(document.activeElement) && ((O = i.viewport.value) == null || O.focus()), i.isClosePausedRef.value = !1, o("close");
    }
    const w = S(() => a.value ? lr(a.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const C = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(C);
    }
    return oe((C) => {
      const O = i.viewport.value;
      if (O) {
        const T = () => {
          v(u.value), g.resume(), o("resume");
        }, A = () => {
          const $ = (/* @__PURE__ */ new Date()).getTime() - p.value;
          u.value = u.value - $, window.clearTimeout(f.value), g.pause(), o("pause");
        };
        return O.addEventListener(tn, A), O.addEventListener(nn, T), () => {
          O.removeEventListener(tn, A), O.removeEventListener(nn, T);
        };
      }
    }), Z(() => [n.open, c.value], () => {
      u.value = c.value, n.open && !i.isClosePausedRef.value && v(c.value);
    }, { immediate: !0 }), hn("Escape", (C) => {
      o("escapeKeyDown", C), C.defaultPrevented || (i.isFocusedToastEscapeKeyDownRef.value = !0, h());
    }), me(() => {
      i.onToastAdd();
    }), et(() => {
      i.onToastRemove();
    }), hl({ onClose: h }), (C, O) => (b(), X(Ee, null, [
      w.value ? (b(), x(gl, {
        key: 0,
        role: "status",
        "aria-live": C.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          Ne($e(w.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : te("", !0),
      l(i).viewport.value ? (b(), x(uo, {
        key: 1,
        to: l(i).viewport.value
      }, [
        V(l(U), M({
          ref: l(r),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, C.$attrs, {
          as: C.as,
          "as-child": C.asChild,
          "data-state": C.open ? "open" : "closed",
          "data-swipe-direction": l(i).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: O[0] || (O[0] = st((T) => {
            s.value = { x: T.clientX, y: T.clientY };
          }, ["left"])),
          onPointermove: O[1] || (O[1] = (T) => {
            if (!s.value) return;
            const A = T.clientX - s.value.x, $ = T.clientY - s.value.y, R = !!d.value, W = ["left", "right"].includes(l(i).swipeDirection.value), N = ["left", "up"].includes(l(i).swipeDirection.value) ? Math.min : Math.max, k = W ? N(0, A) : 0, P = W ? 0 : N(0, $), B = T.pointerType === "touch" ? 10 : 2, H = { x: k, y: P }, z = { originalEvent: T, delta: H };
            R ? (d.value = H, l(_t)(l(ul), (J) => o("swipeMove", J), z)) : l(Hn)(H, l(i).swipeDirection.value, B) ? (d.value = H, l(_t)(l(cl), (J) => o("swipeStart", J), z), T.target.setPointerCapture(T.pointerId)) : (Math.abs(A) > B || Math.abs($) > B) && (s.value = null);
          }),
          onPointerup: O[2] || (O[2] = (T) => {
            const A = d.value, $ = T.target;
            if ($.hasPointerCapture(T.pointerId) && $.releasePointerCapture(T.pointerId), d.value = null, s.value = null, A) {
              const R = T.currentTarget, W = { originalEvent: T, delta: A };
              l(Hn)(A, l(i).swipeDirection.value, l(i).swipeThreshold.value) ? l(_t)(l(fl), (N) => o("swipeEnd", N), W) : l(_t)(l(pl), (N) => o("swipeCancel", N), W), R == null || R.addEventListener("click", (N) => N.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            E(C.$slots, "default", {
              remaining: m.value,
              duration: c.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : te("", !0)
    ], 64));
  }
}), yl = /* @__PURE__ */ _({
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
    const n = e, o = t, { forwardRef: r } = I(), a = we(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (i, s) => (b(), x(l(nt), {
      present: i.forceMount || l(a)
    }, {
      default: y(() => [
        V(bl, M({
          ref: l(r),
          open: l(a),
          type: i.type,
          as: i.as,
          "as-child": i.asChild,
          duration: i.duration
        }, i.$attrs, {
          onClose: s[0] || (s[0] = (d) => a.value = !1),
          onPause: s[1] || (s[1] = (d) => o("pause")),
          onResume: s[2] || (s[2] = (d) => o("resume")),
          onEscapeKeyDown: s[3] || (s[3] = (d) => o("escapeKeyDown", d)),
          onSwipeStart: s[4] || (s[4] = (d) => {
            o("swipeStart", d), d.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: s[5] || (s[5] = (d) => {
            const { x: c, y: p } = d.detail.delta, u = d.currentTarget;
            u.setAttribute("data-swipe", "move"), u.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: s[6] || (s[6] = (d) => {
            const c = d.currentTarget;
            c.setAttribute("data-swipe", "cancel"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.removeProperty("--radix-toast-swipe-end-x"), c.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: s[7] || (s[7] = (d) => {
            const { x: c, y: p } = d.detail.delta, u = d.currentTarget;
            u.setAttribute("data-swipe", "end"), u.style.removeProperty("--radix-toast-swipe-move-x"), u.style.removeProperty("--radix-toast-swipe-move-y"), u.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), a.value = !1;
          })
        }), {
          default: y(({ remaining: d, duration: c }) => [
            E(i.$slots, "default", {
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
}), dr = /* @__PURE__ */ _({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (b(), x(l(U), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: y(() => [
        E(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), cr = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = vl(), { forwardRef: o } = I();
    return (r, a) => (b(), x(dr, { "as-child": "" }, {
      default: y(() => [
        V(l(U), M(t, {
          ref: l(o),
          type: r.as === "button" ? "button" : void 0,
          onClick: a[0] || (a[0] = (i) => l(n).onClose())
        }), {
          default: y(() => [
            E(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), wl = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = I();
    return (n, o) => n.altText ? (b(), x(dr, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        V(cr, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            E(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : te("", !0);
  }
}), qn = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = Pt();
    return (r, a) => (b(), x(l(Qo), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: a[0] || (a[0] = (i) => {
        var s;
        const d = i.relatedTarget;
        !((s = l(o).viewport.value) != null && s.contains(d)) && n("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), xl = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = be(t), { forwardRef: r, currentElement: a } = I(), { createCollection: i } = zo(), s = i(a), d = Pt(), c = S(() => d.toastCount.value > 0), p = D(), u = D(), f = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    hn(n.value, () => {
      a.value.focus();
    }), me(() => {
      d.onViewportChange(a.value);
    }), oe((g) => {
      const v = a.value;
      if (c.value && v) {
        const h = () => {
          if (!d.isClosePausedRef.value) {
            const A = new CustomEvent(tn);
            v.dispatchEvent(A), d.isClosePausedRef.value = !0;
          }
        }, w = () => {
          if (d.isClosePausedRef.value) {
            const A = new CustomEvent(nn);
            v.dispatchEvent(A), d.isClosePausedRef.value = !1;
          }
        }, C = (A) => {
          !v.contains(A.relatedTarget) && w();
        }, O = () => {
          v.contains(document.activeElement) || w();
        }, T = (A) => {
          var $, R, W;
          const N = A.altKey || A.ctrlKey || A.metaKey;
          if (A.key === "Tab" && !N) {
            const k = document.activeElement, P = A.shiftKey;
            if (A.target === v && P) {
              ($ = p.value) == null || $.focus();
              return;
            }
            const B = m({ tabbingDirection: P ? "backwards" : "forwards" }), H = B.findIndex((z) => z === k);
            kt(B.slice(H + 1)) ? A.preventDefault() : P ? (R = p.value) == null || R.focus() : (W = u.value) == null || W.focus();
          }
        };
        v.addEventListener("focusin", h), v.addEventListener("focusout", C), v.addEventListener("pointermove", h), v.addEventListener("pointerleave", O), v.addEventListener("keydown", T), window.addEventListener("blur", h), window.addEventListener("focus", w), g(() => {
          v.removeEventListener("focusin", h), v.removeEventListener("focusout", C), v.removeEventListener("pointermove", h), v.removeEventListener("pointerleave", O), v.removeEventListener("keydown", T), window.removeEventListener("blur", h), window.removeEventListener("focus", w);
        });
      }
    });
    function m({ tabbingDirection: g }) {
      const v = s.value.map((h) => {
        const w = [h, ..._n(h)];
        return g === "forwards" ? w : w.reverse();
      });
      return (g === "forwards" ? v.reverse() : v).flat();
    }
    return (g, v) => (b(), x(l(Si), {
      role: "region",
      "aria-label": typeof l(o) == "string" ? l(o).replace("{hotkey}", f.value) : l(o)(f.value),
      tabindex: "-1",
      style: rn({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: c.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        c.value ? (b(), x(qn, {
          key: 0,
          ref: (h) => {
            p.value = l(he)(h);
          },
          onFocusFromOutsideViewport: v[0] || (v[0] = () => {
            const h = m({
              tabbingDirection: "forwards"
            });
            l(kt)(h);
          })
        }, null, 512)) : te("", !0),
        V(l(U), M({
          ref: l(r),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: y(() => [
            E(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        c.value ? (b(), x(qn, {
          key: 1,
          ref: (h) => {
            u.value = l(he)(h);
          },
          onFocusFromOutsideViewport: v[1] || (v[1] = () => {
            const h = m({
              tabbingDirection: "backwards"
            });
            l(kt)(h);
          })
        }, null, 512)) : te("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), _l = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (b(), x(l(U), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cl = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (b(), x(l(U), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kl = 3, El = 1e6, Oe = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Ut = 0;
function Ol() {
  return Ut = (Ut + 1) % Number.MAX_VALUE, Ut.toString();
}
const Kt = /* @__PURE__ */ new Map();
function Xn(e) {
  if (Kt.has(e)) return;
  const t = setTimeout(() => {
    Kt.delete(e), it({
      type: Oe.REMOVE_TOAST,
      toastId: e
    });
  }, El);
  Kt.set(e, t);
}
const ce = D({
  toasts: []
});
function it(e) {
  switch (e.type) {
    case Oe.ADD_TOAST:
      ce.value.toasts = [e.toast, ...ce.value.toasts].slice(0, kl);
      break;
    case Oe.UPDATE_TOAST:
      ce.value.toasts = ce.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Oe.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Xn(t) : ce.value.toasts.forEach((n) => {
        Xn(n.id);
      }), ce.value.toasts = ce.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Oe.REMOVE_TOAST:
      e.toastId === void 0 ? ce.value.toasts = [] : ce.value.toasts = ce.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function ur() {
  return {
    toasts: S(() => ce.value.toasts),
    toast: Tl,
    dismiss: (e) => it({ type: Oe.DISMISS_TOAST, toastId: e })
  };
}
function Tl(e) {
  const t = Ol(), n = (r) => it({
    type: Oe.UPDATE_TOAST,
    toast: { ...r, id: t }
  }), o = () => it({ type: Oe.DISMISS_TOAST, toastId: t });
  return it({
    type: Oe.ADD_TOAST,
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (r) => {
        r || o();
      }
    }
  }), {
    id: t,
    dismiss: o,
    update: n
  };
}
const Al = { class: "flex items-start space-x-3" }, Dl = { class: "grid gap-1" }, Bl = { class: "font-bold" }, Sl = /* @__PURE__ */ _({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = ur();
    return (n, o) => (b(), x(l(bd), null, {
      default: y(() => [
        (b(!0), X(Ee, null, Bn(l(t), (r) => (b(), x(l(ud), M({
          key: r.id,
          ref_for: !0
        }, r), {
          default: y(() => [
            de("div", Al, [
              r.icon ? (b(), x(Mt(r.icon), {
                key: 0,
                class: ut(["h-6 w-6", r.iconClasses])
              }, null, 8, ["class"])) : te("", !0),
              de("div", Dl, [
                r.title ? (b(), x(l(hd), { key: 0 }, {
                  default: y(() => [
                    Ne($e(r.title), 1)
                  ]),
                  _: 2
                }, 1024)) : te("", !0),
                r.description ? (b(), X(Ee, { key: 1 }, [
                  Sr(r.description) ? (b(), x(l(Jn), { key: 0 }, {
                    default: y(() => [
                      (b(), x(Mt(r.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof r.description == "object" ? (b(!0), X(Ee, { key: 1 }, Bn(r.description, (a, i) => (b(), X("p", {
                    key: i,
                    class: "text-sm opacity-90"
                  }, [
                    r.errorFormat === "value" ? (b(), X(Ee, { key: 0 }, [
                      Ne($e(a), 1)
                    ], 64)) : te("", !0),
                    r.errorFormat === "key" ? (b(), X(Ee, { key: 1 }, [
                      Ne($e(i), 1)
                    ], 64)) : te("", !0),
                    r.errorFormat === "both" ? (b(), X(Ee, { key: 2 }, [
                      de("span", Bl, $e(i), 1),
                      Ne(": " + $e(a), 1)
                    ], 64)) : te("", !0)
                  ]))), 128)) : (b(), x(l(Jn), { key: 2 }, {
                    default: y(() => [
                      Ne($e(r.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : te("", !0),
                V(l(vd))
              ])
            ]),
            (b(), x(Mt(r.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        V(l(pd))
      ]),
      _: 1
    }));
  }
});
function pr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = pr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Pl() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = pr(e)) && (o && (o += " "), o += t);
  return o;
}
const Dn = "-", Ml = (e) => {
  const t = Rl(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Dn);
      return s[0] === "" && s.length !== 1 && s.shift(), fr(s, t) || $l(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const d = n[i] || [];
      return s && o[i] ? [...d, ...o[i]] : d;
    }
  };
}, fr = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? fr(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const a = e.join(Dn);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Yn = /^\[(.+)\]$/, $l = (e) => {
  if (Yn.test(e)) {
    const t = Yn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Rl = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Fl(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    on(i, o, a, t);
  }), o;
}, on = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const a = r === "" ? t : Zn(t, r);
      a.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Il(r)) {
        on(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([a, i]) => {
      on(i, Zn(t, a), n, o);
    });
  });
}, Zn = (e, t) => {
  let n = e;
  return t.split(Dn).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Il = (e) => e.isThemeGetter, Fl = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [n, r];
}) : e, Ll = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = o.get(a)) !== void 0)
        return r(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : r(a, i);
    }
  };
}, mr = "!", zl = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], a = t.length, i = (s) => {
    const d = [];
    let c = 0, p = 0, u;
    for (let h = 0; h < s.length; h++) {
      let w = s[h];
      if (c === 0) {
        if (w === r && (o || s.slice(h, h + a) === t)) {
          d.push(s.slice(p, h)), p = h + a;
          continue;
        }
        if (w === "/") {
          u = h;
          continue;
        }
      }
      w === "[" ? c++ : w === "]" && c--;
    }
    const f = d.length === 0 ? s : s.substring(p), m = f.startsWith(mr), g = m ? f.substring(1) : f, v = u && u > p ? u - p : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: g,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, Nl = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Vl = (e) => ({
  cache: Ll(e.cacheSize),
  parseClassName: zl(e),
  ...Ml(e)
}), Wl = /\s+/, jl = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, a = [], i = e.trim().split(Wl);
  let s = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const c = i[d], {
      modifiers: p,
      hasImportantModifier: u,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(c);
    let g = !!m, v = o(g ? f.substring(0, m) : f);
    if (!v) {
      if (!g) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = o(f), !v) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      g = !1;
    }
    const h = Nl(p).join(":"), w = u ? h + mr : h, C = w + v;
    if (a.includes(C))
      continue;
    a.push(C);
    const O = r(v, g);
    for (let T = 0; T < O.length; ++T) {
      const A = O[T];
      a.push(w + A);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Ul() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = gr(t)) && (o && (o += " "), o += n);
  return o;
}
const gr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = gr(e[o])) && (n && (n += " "), n += t);
  return n;
};
function Kl(e, ...t) {
  let n, o, r, a = i;
  function i(d) {
    const c = t.reduce((p, u) => u(p), e());
    return n = Vl(c), o = n.cache.get, r = n.cache.set, a = s, s(d);
  }
  function s(d) {
    const c = o(d);
    if (c)
      return c;
    const p = jl(d, n);
    return r(d, p), p;
  }
  return function() {
    return a(Ul.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, vr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Gl = /^\d+\/\d+$/, Hl = /* @__PURE__ */ new Set(["px", "full", "screen"]), ql = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Zl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (e) => Je(e) || Hl.has(e) || Gl.test(e), Se = (e) => ot(e, "length", id), Je = (e) => !!e && !Number.isNaN(Number(e)), Gt = (e) => ot(e, "number", Je), rt = (e) => !!e && Number.isInteger(Number(e)), Ql = (e) => e.endsWith("%") && Je(e.slice(0, -1)), L = (e) => vr.test(e), Pe = (e) => ql.test(e), ed = /* @__PURE__ */ new Set(["length", "size", "percentage"]), td = (e) => ot(e, ed, hr), nd = (e) => ot(e, "position", hr), od = /* @__PURE__ */ new Set(["image", "url"]), rd = (e) => ot(e, od, ld), ad = (e) => ot(e, "", sd), at = () => !0, ot = (e, t, n) => {
  const o = vr.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, id = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xl.test(e) && !Yl.test(e)
), hr = () => !1, sd = (e) => Zl.test(e), ld = (e) => Jl.test(e), dd = () => {
  const e = K("colors"), t = K("spacing"), n = K("blur"), o = K("brightness"), r = K("borderColor"), a = K("borderRadius"), i = K("borderSpacing"), s = K("borderWidth"), d = K("contrast"), c = K("grayscale"), p = K("hueRotate"), u = K("invert"), f = K("gap"), m = K("gradientColorStops"), g = K("gradientColorStopPositions"), v = K("inset"), h = K("margin"), w = K("opacity"), C = K("padding"), O = K("saturate"), T = K("scale"), A = K("sepia"), $ = K("skew"), R = K("space"), W = K("translate"), N = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", L, t], B = () => [L, t], H = () => ["", ke, Se], z = () => ["auto", Je, L], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ne = () => ["", "0", L], vt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _e = () => [Je, L];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [at],
      spacing: [ke, Se],
      blur: ["none", "", Pe, L],
      brightness: _e(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pe, L],
      borderSpacing: B(),
      borderWidth: H(),
      contrast: _e(),
      grayscale: ne(),
      hueRotate: _e(),
      invert: ne(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ql, Se],
      inset: P(),
      margin: P(),
      opacity: _e(),
      padding: B(),
      saturate: _e(),
      scale: _e(),
      sepia: ne(),
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
        columns: [Pe]
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
        object: [...J(), L]
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
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        z: ["auto", rt, L]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: P()
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
        grow: ne()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ne()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", rt, L]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [at]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", rt, L]
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
        "grid-rows": [at]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [rt, L]
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
        justify: ["normal", ...le()]
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
        content: ["normal", ...le(), "baseline"]
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
        "place-content": [...le(), "baseline"]
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
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
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
        "space-y": [R]
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
          screen: [Pe]
        }, Pe]
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
        text: ["base", Pe, Se]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [at]
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
        "line-clamp": ["none", Je, Gt]
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
        decoration: [...Y(), "wavy"]
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
        bg: [...J(), nd]
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
        bg: ["auto", "cover", "contain", td]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, rd]
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
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
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
        border: [...Y(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
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
        "divide-y": [s]
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
        divide: Y()
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
        outline: ["", ...Y()]
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
        ring: H()
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
        shadow: ["", "inner", "none", Pe, ad]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [at]
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
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Pe, L]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [rt, L]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [W]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [W]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [$]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [$]
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
        stroke: [ke, Se, Gt]
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
}, cd = /* @__PURE__ */ Kl(dd);
function q(...e) {
  return cd(Pl(e));
}
const ud = /* @__PURE__ */ _({
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
    const n = e, o = t, r = S(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (b(), x(l(yl), M(l(a), {
      class: l(q)(l(wd)({ variant: i.variant }), n.class),
      "onUpdate:open": i.onOpenChange
    }), {
      default: y(() => [
        E(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), pd = /* @__PURE__ */ _({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(xl), M(n.value, {
      class: l(q)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Pd = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(wl), M(n.value, {
      class: l(q)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function fd(e, t) {
  return b(), X("svg", {
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
function md(e, t) {
  return b(), X("svg", {
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
function br(e, t) {
  return b(), X("svg", {
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
function gd(e, t) {
  return b(), X("svg", {
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
const vd = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(cr), M(n.value, {
      class: l(q)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        V(l(br), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), hd = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(_l), M(n.value, {
      class: l(q)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jn = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(Cl), M({
      class: l(q)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bd = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(dl), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function yr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = yr(e[t])) && (o && (o += " "), o += n);
  else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function yd() {
  for (var e, t, n = 0, o = ""; n < arguments.length; ) (e = arguments[n++]) && (t = yr(e)) && (o && (o += " "), o += t);
  return o;
}
const Qn = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, eo = yd, wr = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return eo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: a } = t, i = Object.keys(r).map((c) => {
    const p = n == null ? void 0 : n[c], u = a == null ? void 0 : a[c];
    if (p === null) return null;
    const f = Qn(p) || Qn(u);
    return r[c][f];
  }), s = n && Object.entries(n).reduce((c, p) => {
    let [u, f] = p;
    return f === void 0 || (c[u] = f), c;
  }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, p) => {
    let { class: u, className: f, ...m } = p;
    return Object.entries(m).every((g) => {
      let [v, h] = g;
      return Array.isArray(h) ? h.includes({
        ...a,
        ...s
      }[v]) : {
        ...a,
        ...s
      }[v] === h;
    }) ? [
      ...c,
      u,
      f
    ] : c;
  }, []);
  return eo(e, i, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, wd = wr(
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
function xd(e, t) {
  return b(), X("svg", {
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
function to(e, t) {
  return b(), X("svg", {
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
function _d(e, t) {
  return b(), X("svg", {
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
const { toast: Ct } = ur();
function Cd() {
  return {
    info: (e) => {
      Ct({
        icon: _d,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Ct({
        icon: xd,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Ct({
        icon: to,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Ct({
        icon: to,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        errorFormat: t
      });
    }
  };
}
const Md = /* @__PURE__ */ _({
  __name: "Notification",
  props: {
    info: {},
    success: {},
    warning: {},
    errors: {},
    errorFormat: { default: "value" }
  },
  setup(e) {
    const t = e, {
      info: n,
      success: o,
      warning: r,
      error: a
    } = Cd();
    return Z(
      () => t.info,
      (i) => {
        i && n(t.info);
      },
      {
        immediate: !0
      }
    ), Z(
      () => t.success,
      (i) => {
        i && o(t.success);
      },
      { immediate: !0 }
    ), Z(
      () => t.warning,
      (i) => {
        i && r(t.warning);
      },
      { immediate: !0 }
    ), Z(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && a(t.errors, t.errorFormat);
      }
    ), (i, s) => (b(), x(l(Sl)));
  }
}), $d = /* @__PURE__ */ _({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Q(e, t);
    return (a, i) => (b(), x(l(Ws), j(G(l(r))), {
      default: y(() => [
        E(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rd = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = mt(e);
    return (o, r) => (b(), x(l(js), M({ class: "outline-none" }, l(n)), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Id = /* @__PURE__ */ _({
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
    const n = e, o = t, r = S(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (b(), x(l(Us), null, {
      default: y(() => [
        V(l(Ks), M(l(a), {
          class: l(q)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            E(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Fd = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(Hs), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ld = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = Q(e, t);
    return (a, i) => (b(), x(l(Zs), j(G(l(r))), {
      default: y(() => [
        E(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zd = /* @__PURE__ */ _({
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
      const { class: r, ...a } = t;
      return a;
    }), o = mt(n);
    return (r, a) => (b(), x(l(Gs), M(l(o), {
      class: l(q)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        r.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kd = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Nd = /* @__PURE__ */ _({
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
    const n = e, o = t, r = S(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (b(), x(l(Xs), M(l(a), {
      class: l(q)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", kd, [
          V(l(sr), null, {
            default: y(() => [
              V(l(fd), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        E(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ed = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Vd = /* @__PURE__ */ _({
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
    const n = e, o = t, r = S(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (b(), x(l(Js), M(l(a), {
      class: l(q)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        de("span", Ed, [
          V(l(sr), null, {
            default: y(() => [
              V(l(gd), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        E(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wd = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), X("span", {
      class: ut(l(q)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      E(n.$slots, "default")
    ], 2));
  }
}), jd = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(qs), M(n.value, {
      class: l(q)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Ud = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = mt(n);
    return (r, a) => (b(), x(l(Ys), M(l(o), {
      class: l(q)("px-2 py-1.5 text-sm font-semibold", r.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        E(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kd = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Q(e, t);
    return (a, i) => (b(), x(l(Qs), j(G(l(r))), {
      default: y(() => [
        E(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gd = /* @__PURE__ */ _({
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
      const { class: r, ...a } = t;
      return a;
    }), o = mt(n);
    return (r, a) => (b(), x(l(tl), M(l(o), {
      class: l(q)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        E(r.$slots, "default"),
        V(l(md), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hd = /* @__PURE__ */ _({
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
    const n = e, o = t, r = S(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (b(), x(l(el), M(l(a), {
      class: l(q)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: y(() => [
        E(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qd = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Q(e, t);
    return (a, i) => (b(), x(l(ki), j(G(l(r))), {
      default: y(() => [
        E(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xd = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(Ei), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yd = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), x(l(Xo), j(G(t)), {
      default: y(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zd = /* @__PURE__ */ _({
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
    const n = e, o = t, r = S(() => {
      const { class: i, side: s, ...d } = n;
      return d;
    }), a = Q(r, o);
    return (i, s) => (b(), x(l(Oi), null, {
      default: y(() => [
        V(l(Qi), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(l(Zi), M({
          class: l(q)(l(Od)({ side: i.side }), n.class)
        }, { ...l(a), ...i.$attrs }), {
          default: y(() => [
            E(i.$slots, "default"),
            V(l(Xo), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                V(l(br), { class: "h-4 w-4" })
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
}), Jd = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), X("div", {
      class: ut(l(q)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      E(n.$slots, "default")
    ], 2));
  }
}), Qd = /* @__PURE__ */ _({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(es), M({
      class: l(q)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ec = /* @__PURE__ */ _({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (b(), x(l(ts), M({
      class: l(q)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        E(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tc = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (b(), X("div", {
      class: ut(l(q)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      E(n.$slots, "default")
    ], 2));
  }
}), Od = wr(
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
), nc = /* @__PURE__ */ _({
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
    const n = e, o = t, r = S(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (b(), x(l(il), M(l(a), {
      class: l(q)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        V(l(sl), {
          class: ut(
            l(q)(
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
  $d as DropdownMenu,
  Nd as DropdownMenuCheckboxItem,
  Id as DropdownMenuContent,
  Fd as DropdownMenuGroup,
  zd as DropdownMenuItem,
  Ud as DropdownMenuLabel,
  Us as DropdownMenuPortal,
  Ld as DropdownMenuRadioGroup,
  Vd as DropdownMenuRadioItem,
  jd as DropdownMenuSeparator,
  Wd as DropdownMenuShortcut,
  Kd as DropdownMenuSub,
  Hd as DropdownMenuSubContent,
  Gd as DropdownMenuSubTrigger,
  Rd as DropdownMenuTrigger,
  Md as Notification,
  qd as Sheet,
  Yd as SheetClose,
  Zd as SheetContent,
  ec as SheetDescription,
  tc as SheetFooter,
  Jd as SheetHeader,
  Qd as SheetTitle,
  Xd as SheetTrigger,
  nc as Switch,
  ud as Toast,
  Pd as ToastAction,
  vd as ToastClose,
  Jn as ToastDescription,
  bd as ToastProvider,
  hd as ToastTitle,
  pd as ToastViewport,
  Sl as Toaster,
  Ad as preset,
  Od as sheetVariants,
  Tl as toast,
  wd as toastVariants,
  Cd as useNotification,
  ur as useToast
};
