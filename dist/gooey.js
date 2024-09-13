import { computed as B, ref as D, shallowRef as no, watch as Z, getCurrentScope as oo, onScopeDispose as ro, shallowReadonly as He, unref as l, getCurrentInstance as je, toRef as wr, camelize as ao, defineComponent as _, Comment as xr, mergeProps as $, cloneVNode as _r, h as Xe, toRefs as Oe, renderSlot as O, onMounted as me, openBlock as y, createBlock as x, withCtx as b, normalizeProps as j, guardReactiveProps as G, reactive as io, createVNode as V, createCommentVNode as ne, watchEffect as oe, markRaw as Cr, isRef as so, nextTick as ie, withKeys as kr, normalizeStyle as rn, effectScope as lo, Fragment as Me, toHandlerKey as Er, onUnmounted as et, Teleport as co, withModifiers as Ct, createElementBlock as X, createTextVNode as ze, toDisplayString as $e, inject as uo, provide as po, readonly as an, onBeforeUpdate as Or, onUpdated as Tr, mergeDefaults as fo, onBeforeUnmount as Ar, watchPostEffect as Dr, customRef as Pr, renderList as Pn, createElementVNode as ce, resolveDynamicComponent as Mt, normalizeClass as Dt, isVNode as Br } from "vue";
function mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sr = {
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
}, $t = Sr, sn = {
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
var Fr = Ht, go = {}, vo = {};
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
})(vo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(vo);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const o = t.default;
})(go);
let Rt = go;
var ho = (Rt.__esModule ? Rt : { default: Rt }).default, yo = {}, bo = {};
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
})(bo);
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
  const t = bo, n = /* @__PURE__ */ o(Lr);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const r = (0, t.cloneDeep)(n.default.theme);
})(yo);
let It = yo;
var zr = (It.__esModule ? It : { default: It }).default, wo = {}, xo = {}, ln = { exports: {} }, F = String, _o = function() {
  return { isColorSupported: !1, reset: F, bold: F, dim: F, italic: F, underline: F, inverse: F, hidden: F, strikethrough: F, black: F, red: F, green: F, yellow: F, blue: F, magenta: F, cyan: F, white: F, gray: F, bgBlack: F, bgRed: F, bgGreen: F, bgYellow: F, bgBlue: F, bgMagenta: F, bgCyan: F, bgWhite: F, blackBright: F, redBright: F, greenBright: F, yellowBright: F, blueBright: F, magentaBright: F, cyanBright: F, whiteBright: F, bgBlackBright: F, bgRedBright: F, bgGreenBright: F, bgYellowBright: F, bgBlueBright: F, bgMagentaBright: F, bgCyanBright: F, bgWhiteBright: F };
};
ln.exports = _o();
ln.exports.createColors = _o;
var Nr = ln.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(c, d) {
    for (var u in d) Object.defineProperty(c, u, {
      enumerable: !0,
      get: d[u]
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
  function o(c) {
    return c && c.__esModule ? c : {
      default: c
    };
  }
  let r = /* @__PURE__ */ new Set();
  function a(c, d, u) {
    typeof process < "u" && process.env.JEST_WORKER_ID || u && r.has(u) || (u && r.add(u), console.warn(""), d.forEach((p) => console.warn(c, "-", p)));
  }
  function i(c) {
    return n.default.dim(c);
  }
  const s = {
    info(c, d) {
      a(n.default.bold(n.default.cyan("info")), ...Array.isArray(c) ? [
        c
      ] : [
        d,
        c
      ]);
    },
    warn(c, d) {
      a(n.default.bold(n.default.yellow("warn")), ...Array.isArray(c) ? [
        c
      ] : [
        d,
        c
      ]);
    },
    risk(c, d) {
      a(n.default.bold(n.default.magenta("risk")), ...Array.isArray(c) ? [
        c
      ] : [
        d,
        c
      ]);
    }
  };
})(xo);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = /* @__PURE__ */ n(xo);
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
})(wo);
let Ft = wo;
var Vr = (Ft.__esModule ? Ft : { default: Ft }).default;
const gt = Fr, Wr = ho, Co = zr, De = Vr, [jr, { lineHeight: Ur }] = Co.fontSize.base, { spacing: we, borderWidth: Bn, borderRadius: Sn } = Co;
function Le(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Gr = Wr.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: n, theme: o }) {
    function r(c, d) {
      let u = o(c);
      return !u || u.includes("var(") ? d : u.replace("<alpha-value>", "1");
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
          "border-color": Le(
            o("colors.gray.500", De.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Bn.DEFAULT,
          "border-radius": Sn.none,
          "padding-top": we[2],
          "padding-right": we[3],
          "padding-bottom": we[2],
          "padding-left": we[3],
          "font-size": jr,
          "line-height": Ur,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": Le(
              o("colors.blue.600", De.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": Le(
              o("colors.blue.600", De.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: Le(o("colors.gray.500", De.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${gt(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${r(
              "colors.gray.500",
              De.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${we[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": we[10],
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
          "padding-right": we[3],
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
          height: we[4],
          width: we[4],
          color: Le(o("colors.blue.600", De.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": Le(
            o("colors.gray.500", De.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": Bn.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": Sn.none
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
          "--tw-ring-color": Le(
            o("colors.blue.600", De.blue[600]),
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
          "background-image": `url("${gt(
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
          "background-image": `url("${gt(
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
          "background-image": `url("${gt(
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
    ], s = (c) => i.map((d) => d[c] === null ? null : { [d[c]]: d.styles }).filter(Boolean);
    a.includes("base") && t(s("base")), a.includes("class") && n(s("class"));
  };
});
var Kr = Gr;
const Hr = /* @__PURE__ */ mo(Kr), qr = ho;
function Mn(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Yr = qr(
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
const Xr = /* @__PURE__ */ mo(Yr), _c = {
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
    Xr,
    Hr({
      strategy: "class"
    })
  ]
}, Zr = ["top", "right", "bottom", "left"], ge = Math.min, ae = Math.max, kt = Math.round, vt = Math.floor, Re = (e) => ({
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
function Ce(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ke(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function cn(e) {
  return e === "x" ? "y" : "x";
}
function dn(e) {
  return e === "y" ? "height" : "width";
}
function Ie(e) {
  return ["top", "bottom"].includes(ke(e)) ? "y" : "x";
}
function un(e) {
  return cn(Ie(e));
}
function ea(e, t, n) {
  n === void 0 && (n = !1);
  const o = tt(e), r = un(e), a = dn(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Et(i)), [i, Et(i)];
}
function ta(e) {
  const t = Et(e);
  return [Yt(e), t, Yt(t)];
}
function Yt(e) {
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
  let a = na(ke(e), n === "start", o);
  return r && (a = a.map((i) => i + "-" + r), t && (a = a.concat(a.map(Yt)))), a;
}
function Et(e) {
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
function ko(e) {
  return typeof e != "number" ? ra(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ot(e) {
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
  const a = Ie(t), i = un(t), s = dn(i), c = ke(t), d = a === "y", u = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, f = o[s] / 2 - r[s] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: u,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: u,
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
        x: o.x - r.width,
        y: p
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
      m[i] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      m[i] += f * (n && d ? -1 : 1);
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
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: u,
    y: p
  } = $n(d, o, c), f = o, m = {}, g = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: h,
      fn: w
    } = s[v], {
      x: C,
      y: E,
      data: T,
      reset: A
    } = await w({
      x: u,
      y: p,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = C ?? u, p = E ?? p, m = {
      ...m,
      [h]: {
        ...m[h],
        ...T
      }
    }, A && g <= 50 && (g++, typeof A == "object" && (A.placement && (f = A.placement), A.rects && (d = A.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : A.rects), {
      x: u,
      y: p
    } = $n(d, f, c)), v = -1);
  }
  return {
    x: u,
    y: p,
    placement: f,
    strategy: r,
    middlewareData: m
  };
};
async function st(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = Ce(t, e), g = ko(m), h = s[f ? p === "floating" ? "reference" : "floating" : p], w = Ot(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(h))) == null || n ? h : h.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: c
  })), C = p === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), T = await (a.isElement == null ? void 0 : a.isElement(E)) ? await (a.getScale == null ? void 0 : a.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = Ot(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: E,
    strategy: c
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
      middlewareData: c
    } = t, {
      element: d,
      padding: u = 0
    } = Ce(e, t) || {};
    if (d == null)
      return {};
    const p = ko(u), f = {
      x: n,
      y: o
    }, m = un(r), g = dn(m), v = await i.getDimensions(d), h = m === "y", w = h ? "top" : "left", C = h ? "bottom" : "right", E = h ? "clientHeight" : "clientWidth", T = a.reference[g] + a.reference[m] - f[m] - a.floating[g], A = f[m] - a.reference[m], M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let R = M ? M[E] : 0;
    (!R || !await (i.isElement == null ? void 0 : i.isElement(M))) && (R = s.floating[E] || a.floating[g]);
    const W = T / 2 - A / 2, N = R / 2 - v[g] / 2 - 1, k = ge(p[w], N), S = ge(p[C], N), P = k, K = R - v[g] - S, z = R / 2 - v[g] / 2 + W, J = qt(P, z, K), Y = !c.arrow && tt(r) != null && z !== J && a.reference[g] / 2 - (z < P ? k : S) - v[g] / 2 < 0, re = Y ? z < P ? z - P : z - K : 0;
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
        platform: c,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...h
      } = Ce(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = ke(r), C = Ie(s), E = ke(s) === s, T = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), A = f || (E || !v ? [Et(s)] : ta(s)), M = g !== "none";
      !f && M && A.push(...oa(s, v, g, T));
      const R = [s, ...A], W = await st(t, h), N = [];
      let k = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (u && N.push(W[w]), p) {
        const z = ea(r, i, T);
        N.push(W[z[0]], W[z[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: N
      }], !N.every((z) => z <= 0)) {
        var S, P;
        const z = (((S = a.flip) == null ? void 0 : S.index) || 0) + 1, J = R[z];
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
        let Y = (P = k.filter((re) => re.overflows[0] <= 0).sort((re, le) => re.overflows[1] - le.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!Y)
          switch (m) {
            case "bestFit": {
              var K;
              const re = (K = k.filter((le) => {
                if (M) {
                  const te = Ie(le.placement);
                  return te === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  te === "y";
                }
                return !0;
              }).map((le) => [le.placement, le.overflows.filter((te) => te > 0).reduce((te, mt) => te + mt, 0)]).sort((le, te) => le[1] - te[1])[0]) == null ? void 0 : K[0];
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
      } = Ce(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await st(t, {
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
          const a = await st(t, {
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
async function ca(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = ke(n), s = tt(n), c = Ie(n) === "y", d = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, p = Ce(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: g
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return s && typeof g == "number" && (m = s === "end" ? g * -1 : g), c ? {
    x: m * u,
    y: f * d
  } : {
    x: f * d,
    y: m * u
  };
}
const da = function(e) {
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
      } = t, c = await ca(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + c.x,
        y: a + c.y,
        data: {
          ...c,
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
        ...c
      } = Ce(e, t), d = {
        x: n,
        y: o
      }, u = await st(t, c), p = Ie(ke(r)), f = cn(p);
      let m = d[f], g = d[p];
      if (a) {
        const h = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", C = m + u[h], E = m - u[w];
        m = qt(C, m, E);
      }
      if (i) {
        const h = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", C = g + u[h], E = g - u[w];
        g = qt(C, g, E);
      }
      const v = s.fn({
        ...t,
        [f]: m,
        [p]: g
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
        mainAxis: c = !0,
        crossAxis: d = !0
      } = Ce(e, t), u = {
        x: n,
        y: o
      }, p = Ie(r), f = cn(p);
      let m = u[f], g = u[p];
      const v = Ce(s, t), h = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const E = f === "y" ? "height" : "width", T = a.reference[f] - a.floating[E] + h.mainAxis, A = a.reference[f] + a.reference[E] - h.mainAxis;
        m < T ? m = T : m > A && (m = A);
      }
      if (d) {
        var w, C;
        const E = f === "y" ? "width" : "height", T = ["top", "left"].includes(ke(r)), A = a.reference[p] - a.floating[E] + (T && ((w = i.offset) == null ? void 0 : w[p]) || 0) + (T ? 0 : h.crossAxis), M = a.reference[p] + a.reference[E] + (T ? 0 : ((C = i.offset) == null ? void 0 : C[p]) || 0) - (T ? h.crossAxis : 0);
        g < A ? g = A : g > M && (g = M);
      }
      return {
        [f]: m,
        [p]: g
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
      } = Ce(e, t), c = await st(t, s), d = ke(n), u = tt(n), p = Ie(n) === "y", {
        width: f,
        height: m
      } = o.floating;
      let g, v;
      d === "top" || d === "bottom" ? (g = d, v = u === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, g = u === "end" ? "top" : "bottom");
      const h = m - c.top - c.bottom, w = f - c.left - c.right, C = ge(m - c[g], h), E = ge(f - c[v], w), T = !t.middlewareData.shift;
      let A = C, M = E;
      if (p ? M = u || T ? ge(E, w) : w : A = u || T ? ge(C, h) : h, T && !u) {
        const W = ae(c.left, 0), N = ae(c.right, 0), k = ae(c.top, 0), S = ae(c.bottom, 0);
        p ? M = f - 2 * (W !== 0 || N !== 0 ? W + N : ae(c.left, c.right)) : A = m - 2 * (k !== 0 || S !== 0 ? k + S : ae(c.top, c.bottom));
      }
      await i({
        ...t,
        availableWidth: M,
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
function Te(e) {
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
function dt(e) {
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
function Pt(e) {
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
  let t = Fe(e);
  for (; ve(t) && !Qe(t); ) {
    if (fn(t))
      return t;
    if (Pt(t))
      return null;
    t = Fe(t);
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
function Bt(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Fe(e) {
  if (Ue(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fn(e) && e.host || // Fallback.
    Te(e)
  );
  return Fn(t) ? t.host : t;
}
function Eo(e) {
  const t = Fe(e);
  return Qe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && dt(t) ? t : Eo(t);
}
function lt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Eo(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = se(r);
  if (a) {
    const s = Xt(i);
    return t.concat(i, i.visualViewport || [], dt(r) ? r : [], s && n ? lt(s) : []);
  }
  return t.concat(r, lt(r, [], n));
}
function Xt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Oo(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ve(e), a = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, s = kt(n) !== a || kt(o) !== i;
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
    return Re(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = Oo(t);
  let i = (a ? kt(n.width) : n.width) / o, s = (a ? kt(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const va = /* @__PURE__ */ Re(0);
function To(e) {
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
  let i = Re(1);
  t && (o ? pe(o) && (i = Ze(o)) : i = Ze(e));
  const s = ha(a, n, o) ? To(a) : Re(0);
  let c = (r.left + s.x) / i.x, d = (r.top + s.y) / i.y, u = r.width / i.x, p = r.height / i.y;
  if (a) {
    const f = se(a), m = o && pe(o) ? se(o) : o;
    let g = f, v = Xt(g);
    for (; v && o && m !== g; ) {
      const h = Ze(v), w = v.getBoundingClientRect(), C = fe(v), E = w.left + (v.clientLeft + parseFloat(C.paddingLeft)) * h.x, T = w.top + (v.clientTop + parseFloat(C.paddingTop)) * h.y;
      c *= h.x, d *= h.y, u *= h.x, p *= h.y, c += E, d += T, g = se(v), v = Xt(g);
    }
  }
  return Ot({
    width: u,
    height: p,
    x: c,
    y: d
  });
}
function ya(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", i = Te(o), s = t ? Pt(t.floating) : !1;
  if (o === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Re(1);
  const u = Re(0), p = ve(o);
  if ((p || !p && !a) && ((Ue(o) !== "body" || dt(i)) && (c = Bt(o)), ve(o))) {
    const f = Ve(o);
    d = Ze(o), u.x = f.x + o.clientLeft, u.y = f.y + o.clientTop;
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + u.x,
    y: n.y * d.y - c.scrollTop * d.y + u.y
  };
}
function ba(e) {
  return Array.from(e.getClientRects());
}
function Ao(e) {
  return Ve(Te(e)).left + Bt(e).scrollLeft;
}
function wa(e) {
  const t = Te(e), n = Bt(e), o = e.ownerDocument.body, r = ae(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = ae(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Ao(e);
  const s = -n.scrollTop;
  return fe(o).direction === "rtl" && (i += ae(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: i,
    y: s
  };
}
function xa(e, t) {
  const n = se(e), o = Te(e), r = n.visualViewport;
  let a = o.clientWidth, i = o.clientHeight, s = 0, c = 0;
  if (r) {
    a = r.width, i = r.height;
    const d = mn();
    (!d || d && t === "fixed") && (s = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function _a(e, t) {
  const n = Ve(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = ve(e) ? Ze(e) : Re(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = r * a.x, d = o * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: d
  };
}
function Ln(e, t, n) {
  let o;
  if (t === "viewport")
    o = xa(e, n);
  else if (t === "document")
    o = wa(Te(e));
  else if (pe(t))
    o = _a(t, n);
  else {
    const r = To(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return Ot(o);
}
function Do(e, t) {
  const n = Fe(e);
  return n === t || !pe(n) || Qe(n) ? !1 : fe(n).position === "fixed" || Do(n, t);
}
function Ca(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = lt(e, [], !1).filter((s) => pe(s) && Ue(s) !== "body"), r = null;
  const a = fe(e).position === "fixed";
  let i = a ? Fe(e) : e;
  for (; pe(i) && !Qe(i); ) {
    const s = fe(i), c = fn(i);
    !c && s.position === "fixed" && (r = null), (a ? !c && !r : !c && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || dt(i) && !c && Do(e, i)) ? o = o.filter((u) => u !== i) : r = s, i = Fe(i);
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
  const i = [...n === "clippingAncestors" ? Pt(t) ? [] : Ca(t, this._c) : [].concat(n), o], s = i[0], c = i.reduce((d, u) => {
    const p = Ln(t, u, r);
    return d.top = ae(p.top, d.top), d.right = ge(p.right, d.right), d.bottom = ge(p.bottom, d.bottom), d.left = ae(p.left, d.left), d;
  }, Ln(t, s, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ea(e) {
  const {
    width: t,
    height: n
  } = Oo(e);
  return {
    width: t,
    height: n
  };
}
function Oa(e, t, n) {
  const o = ve(t), r = Te(t), a = n === "fixed", i = Ve(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Re(0);
  if (o || !o && !a)
    if ((Ue(t) !== "body" || dt(r)) && (s = Bt(t)), o) {
      const p = Ve(t, !0, a, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else r && (c.x = Ao(r));
  const d = i.left + s.scrollLeft - c.x, u = i.top + s.scrollTop - c.y;
  return {
    x: d,
    y: u,
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
function Po(e, t) {
  const n = se(e);
  if (Pt(e))
    return n;
  if (!ve(e)) {
    let r = Fe(e);
    for (; r && !Qe(r); ) {
      if (pe(r) && !Lt(r))
        return r;
      r = Fe(r);
    }
    return n;
  }
  let o = zn(e, t);
  for (; o && ma(o) && Lt(o); )
    o = zn(o, t);
  return o && Qe(o) && Lt(o) && !fn(o) ? n : o || ga(e) || n;
}
const Ta = async function(e) {
  const t = this.getOffsetParent || Po, n = this.getDimensions, o = await n(e.floating);
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
  convertOffsetParentRelativeRectToViewportRelativeRect: ya,
  getDocumentElement: Te,
  getClippingRect: ka,
  getOffsetParent: Po,
  getElementRects: Ta,
  getClientRects: ba,
  getDimensions: Ea,
  getScale: Ze,
  isElement: pe,
  isRTL: Aa
};
function Pa(e, t) {
  let n = null, o;
  const r = Te(e);
  function a() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const {
      left: d,
      top: u,
      width: p,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !p || !f)
      return;
    const m = vt(u), g = vt(r.clientWidth - (d + p)), v = vt(r.clientHeight - (u + f)), h = vt(d), C = {
      rootMargin: -m + "px " + -g + "px " + -v + "px " + -h + "px",
      threshold: ae(0, ge(1, c)) || 1
    };
    let E = !0;
    function T(A) {
      const M = A[0].intersectionRatio;
      if (M !== c) {
        if (!E)
          return i();
        M ? i(!1, M) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E = !1;
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
function Ba(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, d = gn(e), u = r || a ? [...d ? lt(d) : [], ...lt(t)] : [];
  u.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const p = d && s ? Pa(d, n) : null;
  let f = -1, m = null;
  i && (m = new ResizeObserver((w) => {
    let [C] = w;
    C && C.target === d && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var E;
      (E = m) == null || E.observe(t);
    })), n();
  }), d && !c && m.observe(d), m.observe(t));
  let g, v = c ? Ve(e) : null;
  c && h();
  function h() {
    const w = Ve(e);
    v && (w.x !== v.x || w.y !== v.y || w.width !== v.width || w.height !== v.height) && n(), v = w, g = requestAnimationFrame(h);
  }
  return n(), () => {
    var w;
    u.forEach((C) => {
      r && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (w = m) == null || w.disconnect(), m = null, c && cancelAnimationFrame(g);
  };
}
const Sa = da, Ma = ua, Nn = sa, $a = fa, Ra = la, Ia = ia, Fa = pa, La = (e, t, n) => {
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
function Ye(e) {
  return typeof e == "function" ? e() : l(e);
}
function Na(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Zt(Ye(e.element));
      return n == null ? {} : Ia({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Bo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vn(e, t) {
  const n = Bo(e);
  return Math.round(t * n) / n;
}
function Va(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = B(() => {
    var R;
    return (R = Ye(n.open)) != null ? R : !0;
  }), a = B(() => Ye(n.middleware)), i = B(() => {
    var R;
    return (R = Ye(n.placement)) != null ? R : "bottom";
  }), s = B(() => {
    var R;
    return (R = Ye(n.strategy)) != null ? R : "absolute";
  }), c = B(() => {
    var R;
    return (R = Ye(n.transform)) != null ? R : !0;
  }), d = B(() => Zt(e.value)), u = B(() => Zt(t.value)), p = D(0), f = D(0), m = D(s.value), g = D(i.value), v = no({}), h = D(!1), w = B(() => {
    const R = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return R;
    const W = Vn(u.value, p.value), N = Vn(u.value, f.value);
    return c.value ? {
      ...R,
      transform: "translate(" + W + "px, " + N + "px)",
      ...Bo(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: W + "px",
      top: N + "px"
    };
  });
  let C;
  function E() {
    d.value == null || u.value == null || La(d.value, u.value, {
      middleware: a.value,
      placement: i.value,
      strategy: s.value
    }).then((R) => {
      p.value = R.x, f.value = R.y, m.value = R.strategy, g.value = R.placement, v.value = R.middlewareData, h.value = !0;
    });
  }
  function T() {
    typeof C == "function" && (C(), C = void 0);
  }
  function A() {
    if (T(), o === void 0) {
      E();
      return;
    }
    if (d.value != null && u.value != null) {
      C = o(d.value, u.value, E);
      return;
    }
  }
  function M() {
    r.value || (h.value = !1);
  }
  return Z([a, i, s], E, {
    flush: "sync"
  }), Z([d, u], A, {
    flush: "sync"
  }), Z(r, M, {
    flush: "sync"
  }), oo() && ro(T), {
    x: He(p),
    y: He(f),
    strategy: He(m),
    placement: He(g),
    middlewareData: He(v),
    isPositioned: He(h),
    floatingStyles: w,
    update: E
  };
}
function ee(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(r) => {
    const a = uo(o, r);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (r) => (po(o, r), r)];
}
function So(e, t, n) {
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
function ut(e) {
  return oo() ? (ro(e), !0) : !1;
}
function ja(e) {
  let t = !1, n;
  const o = lo(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function Mo(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...a) => (t += 1, n || (o = lo(!0), n = o.run(() => e(...a))), ut(r), n);
}
function Ne(e) {
  return typeof e == "function" ? e() : l(e);
}
const he = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ua = (e) => typeof e < "u", Ga = Object.prototype.toString, Ka = (e) => Ga.call(e) === "[object Object]", $o = () => {
}, Wn = /* @__PURE__ */ Ha();
function Ha() {
  var e, t;
  return he && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function qa(e) {
  return je();
}
function Ya(e, t = 1e4) {
  return Pr((n, o) => {
    let r = Ne(e), a;
    const i = () => setTimeout(() => {
      r = Ne(e), o();
    }, Ne(t));
    return ut(() => {
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
function Xa(e, t) {
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
  function c(...d) {
    i(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...d);
    }, Ne(t));
  }
  return o && (r.value = !0, he && c()), ut(s), {
    isPending: an(r),
    start: c,
    stop: s
  };
}
function Ja(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, r = Za(
    o ?? $o,
    e,
    t
  ), a = B(() => !r.isPending.value);
  return n ? {
    ready: a,
    ...r
  } : a;
}
function Ee(e) {
  var t;
  const n = Ne(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const vn = he ? window : void 0;
function Tt(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = vn) : [t, n, o, r] = e, !t)
    return $o;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], i = () => {
    a.forEach((u) => u()), a.length = 0;
  }, s = (u, p, f, m) => (u.addEventListener(p, f, m), () => u.removeEventListener(p, f, m)), c = Z(
    () => [Ee(t), Ne(r)],
    ([u, p]) => {
      if (i(), !u)
        return;
      const f = Ka(p) ? { ...p } : p;
      a.push(
        ...n.flatMap((m) => o.map((g) => s(u, m, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    c(), i();
  };
  return ut(d), d;
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
  } = o, c = Qa(t);
  return Tt(r, a, (d) => {
    d.repeat && Ne(s) || c(d) && n(d);
  }, i);
}
function ei() {
  const e = D(!1), t = je();
  return t && me(() => {
    e.value = !0;
  }, t), e;
}
function Ro(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: r = vn
  } = t, a = D(!1), i = o ? 1e3 / o : null;
  let s = 0, c = null;
  function d(f) {
    if (!a.value || !r)
      return;
    s || (s = f);
    const m = f - s;
    if (i && m < i) {
      c = r.requestAnimationFrame(d);
      return;
    }
    s = f, e({ delta: m, timestamp: f }), c = r.requestAnimationFrame(d);
  }
  function u() {
    !a.value && r && (a.value = !0, s = 0, c = r.requestAnimationFrame(d));
  }
  function p() {
    a.value = !1, c != null && r && (r.cancelAnimationFrame(c), c = null);
  }
  return n && u(), ut(p), {
    isActive: an(a),
    pause: p,
    resume: u
  };
}
function ti(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ae(e, t, n, o = {}) {
  var r, a, i;
  const {
    clone: s = !1,
    passive: c = !1,
    eventName: d,
    deep: u = !1,
    defaultValue: p,
    shouldEmit: f
  } = o, m = je(), g = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((i = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
  let v = d;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const h = (E) => s ? typeof s == "function" ? s(E) : ti(E) : E, w = () => Ua(e[t]) ? h(e[t]) : p, C = (E) => {
    f ? f(E) && g(v, E) : g(v, E);
  };
  if (c) {
    const E = w(), T = D(E);
    let A = !1;
    return Z(
      () => e[t],
      (M) => {
        A || (A = !0, T.value = h(M), ie(() => A = !1));
      }
    ), Z(
      T,
      (M) => {
        !A && (M !== e[t] || u) && C(M);
      },
      { deep: u }
    ), T;
  } else
    return B({
      get() {
        return w();
      },
      set(E) {
        C(E);
      }
    });
}
function yn(e) {
  return e ? e.flatMap((t) => t.type === Me ? yn(t.children) : [t]) : [];
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
    dir: c = "ltr",
    preventScroll: d = !0,
    focus: u = !1
  } = o, [p, f, m, g, v, h] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = m || g, C = p || f;
  if (!v && !h && (!w && !C || r === "vertical" && C || r === "horizontal" && w))
    return null;
  const E = n ? Array.from(n.querySelectorAll(a)) : i;
  if (!E.length)
    return null;
  d && e.preventDefault();
  let T = null;
  return C || w ? T = Io(E, t, {
    goForward: w ? g : c === "ltr" ? p : f,
    loop: s
  }) : v ? T = E.at(0) || null : h && (T = E.at(-1) || null), u && (T == null || T.focus()), T;
}
function Io(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const r = e.indexOf(t), a = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const i = (a + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? Io(
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
const ai = ri(), [bn, Cc] = ee("ConfigProvider");
let ii = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", si = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += ii[Math.random() * 64 | 0];
  return t;
};
const li = Mo(() => {
  const e = D(/* @__PURE__ */ new Map()), t = D(), n = B(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), o = bn({
    scrollBody: D(!0)
  });
  let r = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Wn && (r == null || r()), t.value = void 0;
  };
  return Z(n, (i, s) => {
    var c;
    if (!he)
      return;
    if (!i) {
      s && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, u = { padding: d, margin: 0 }, p = (c = o.scrollBody) != null && c.value ? typeof o.scrollBody.value == "object" ? ai({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, u) : u : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), Wn && (r = Tt(
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
function Fo(e) {
  const t = si(6), n = li();
  n.value.set(t, e ?? !1);
  const o = B({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return Xa(() => {
    n.value.delete(t);
  }), o;
}
const ci = "data-radix-vue-collection-item";
function Lo(e, t = ci) {
  const n = Symbol();
  return { createCollection: (o) => {
    const r = D([]);
    function a() {
      const i = Ee(o);
      return i ? r.value = Array.from(
        i.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return Or(() => {
      r.value = [];
    }), me(a), Tr(a), Z(() => o == null ? void 0 : o.value, a, { immediate: !0 }), po(n, r), r;
  }, injectCollection: () => uo(n, D([])) };
}
function wn(e) {
  const t = bn({
    dir: D("ltr")
  });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Ge(e) {
  const t = je(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[Er(ao(r))] = (...a) => e(r, ...a);
  }), o;
}
let Nt = 0;
function di() {
  oe((e) => {
    if (!he)
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
function pt(e) {
  const t = je(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
    const i = (t == null ? void 0 : t.type.props[a]).default;
    return i !== void 0 && (r[a] = i), r;
  }, {}), o = wr(e);
  return B(() => {
    const r = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((i) => {
      r[ao(i)] = a[i];
    }), Object.keys({ ...n, ...r }).reduce((i, s) => (o.value[s] !== void 0 && (i[s] = o.value[s]), i), {});
  });
}
function Q(e, t) {
  const n = pt(e), o = t ? Ge(t) : {};
  return B(() => ({
    ...n.value,
    ...o
  }));
}
function I() {
  const e = je(), t = D(), n = B(() => {
    var i, s;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : Ee(t);
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
var ui = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qe = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), yt = {}, Vt = 0, zo = function(e) {
  return e && (e.host || zo(e.parentNode));
}, pi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = zo(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, fi = function(e, t, n, o) {
  var r = pi(t, Array.isArray(e) ? e : [e]);
  yt[n] || (yt[n] = /* @__PURE__ */ new WeakMap());
  var a = yt[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(r), d = function(p) {
    !p || s.has(p) || (s.add(p), d(p.parentNode));
  };
  r.forEach(d);
  var u = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (s.has(f))
        u(f);
      else
        try {
          var m = f.getAttribute(o), g = m !== null && m !== "false", v = (qe.get(f) || 0) + 1, h = (a.get(f) || 0) + 1;
          qe.set(f, v), a.set(f, h), i.push(f), v === 1 && g && ht.set(f, !0), h === 1 && f.setAttribute(n, "true"), g || f.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return u(t), s.clear(), Vt++, function() {
    i.forEach(function(p) {
      var f = qe.get(p) - 1, m = a.get(p) - 1;
      qe.set(p, f), a.set(p, m), f || (ht.has(p) || p.removeAttribute(o), ht.delete(p)), m || p.removeAttribute(n);
    }), Vt--, Vt || (qe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), yt = {});
  };
}, mi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = ui(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), fi(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function No(e) {
  let t;
  Z(() => Ee(e), (n) => {
    n ? t = mi(n) : t && t();
  }), et(() => {
    t && t();
  });
}
let gi = 0;
function We(e, t = "radix") {
  const { useId: n } = bn({ useId: void 0 });
  return n && typeof n == "function" ? `${t}-${n()}` : `${t}-${++gi}`;
}
function vi(e) {
  const t = D(), n = B(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), o = B(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return me(() => {
    const r = Ee(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const a = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const s = i[0];
        let c, d;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, p = Array.isArray(u) ? u[0] : u;
          c = p.inlineSize, d = p.blockSize;
        } else
          c = r.offsetWidth, d = r.offsetHeight;
        t.value = { width: c, height: d };
      });
      return a.observe(r, { box: "border-box" }), () => a.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function hi(e, t) {
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
  const t = Ya("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      var r, a;
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const i = (e == null ? void 0 : e.value) ?? o, s = document.activeElement, c = ((a = (r = i.find((f) => f === s)) == null ? void 0 : r.textContent) == null ? void 0 : a.trim()) ?? "", d = i.map((f) => {
        var m;
        return ((m = f.textContent) == null ? void 0 : m.trim()) ?? "";
      }), u = wi(d, t.value, c), p = i.find(
        (f) => {
          var m;
          return ((m = f.textContent) == null ? void 0 : m.trim()) === u;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function bi(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function wi(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((s) => s === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let a = bi(e, Math.max(r, 0));
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
      const a = yn(n.default()), i = a.findIndex((u) => u.type !== xr);
      if (i === -1)
        return a;
      const s = a[i];
      (o = s.props) == null || delete o.ref;
      const c = s.props ? $(t, s.props) : t;
      t.class && (r = s.props) != null && r.class && delete s.props.class;
      const d = _r(s, c);
      for (const u in c)
        u.startsWith("on") && (d.props || (d.props = {}), d.props[u] = c[u]);
      return a.length === 1 ? d : (a[i] = d, a);
    };
  }
}), H = _({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Xe(o, t) : o !== "template" ? () => Xe(e.as, t, { default: n.default }) : () => Xe(xn, t, { default: n.default });
  }
});
function Vo() {
  const e = D(), t = B(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Ee(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function xi(e, t) {
  const n = D({}), o = D("none"), r = e.value ? "mounted" : "unmounted", { state: a, dispatch: i } = hi(r, {
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
    if (he) {
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
        const h = o.value, w = bt(t.value);
        f ? (i("MOUNT"), s("enter"), w === "none" && s("after-enter")) : w === "none" || ((g = n.value) == null ? void 0 : g.display) === "none" ? (i("UNMOUNT"), s("leave"), s("after-leave")) : m && h !== w ? (i("ANIMATION_OUT"), s("leave")) : (i("UNMOUNT"), s("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const c = (f) => {
    const m = bt(t.value), g = m.includes(
      f.animationName
    ), v = a.value === "mounted" ? "enter" : "leave";
    f.target === t.value && g && (s(`after-${v}`), i("ANIMATION_END")), f.target === t.value && m === "none" && i("ANIMATION_END");
  }, d = (f) => {
    f.target === t.value && (o.value = bt(t.value));
  }, u = Z(
    t,
    (f, m) => {
      f ? (n.value = getComputedStyle(f), f.addEventListener("animationstart", d), f.addEventListener("animationcancel", c), f.addEventListener("animationend", c)) : (i("ANIMATION_END"), m == null || m.removeEventListener("animationstart", d), m == null || m.removeEventListener("animationcancel", c), m == null || m.removeEventListener("animationend", c));
    },
    { immediate: !0 }
  ), p = Z(a, () => {
    const f = bt(t.value);
    o.value = a.value === "mounted" ? f : "none";
  });
  return et(() => {
    u(), p();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(a.value)
    )
  };
}
function bt(e) {
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
    const { present: r, forceMount: a } = Oe(e), i = D(), { isPresent: s } = xi(r, i);
    n({ present: s });
    let c = t.default({ present: s });
    c = yn(c || []);
    const d = je();
    if (c && (c == null ? void 0 : c.length) > 1) {
      const u = (o = d == null ? void 0 : d.parent) != null && o.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
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
    return () => a.value || r.value || s.value ? Xe(t.default({ present: s })[0], {
      ref: (u) => {
        const p = Ee(u);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? i.value = p.firstElementChild : i.value = p), p;
      }
    }) : null;
  }
}), [ye, _i] = ee("DialogRoot"), Ci = /* @__PURE__ */ _({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ae(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = D(), a = D(), { modal: i } = Oe(n);
    return _i({
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
    }), (s, c) => O(s.$slots, "default", { open: l(o) });
  }
}), ki = /* @__PURE__ */ _({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ye(), { forwardRef: o, currentElement: r } = I();
    return n.contentId || (n.contentId = We(void 0, "radix-vue-dialog-content")), me(() => {
      n.triggerElement.value = r.value;
    }), (a, i) => (y(), x(l(H), $(t, {
      ref: l(o),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": l(n).open.value || !1,
      "aria-controls": l(n).open.value ? l(n).contentId : void 0,
      "data-state": l(n).open.value ? "open" : "closed",
      onClick: l(n).onOpenToggle
    }), {
      default: b(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Wo = /* @__PURE__ */ _({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ei();
    return (n, o) => l(t) || n.forceMount ? (y(), x(co, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      O(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ne("", !0);
  }
}), Ei = /* @__PURE__ */ _({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(Wo), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oi = "dismissableLayer.pointerDownOutside", Ti = "dismissableLayer.focusOutside";
function jo(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function Ai(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = D(!1), a = D(() => {
  });
  return oe((i) => {
    if (!he)
      return;
    const s = async (d) => {
      const u = d.target;
      if (t != null && t.value) {
        if (jo(t.value, u)) {
          r.value = !1;
          return;
        }
        if (d.target && !r.value) {
          let p = function() {
            So(
              Oi,
              e,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (o.removeEventListener("click", a.value), a.value = p, o.addEventListener("click", a.value, {
            once: !0
          })) : p();
        } else
          o.removeEventListener("click", a.value);
        r.value = !1;
      }
    }, c = window.setTimeout(() => {
      o.addEventListener("pointerdown", s);
    }, 0);
    i(() => {
      window.clearTimeout(c), o.removeEventListener("pointerdown", s), o.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Di(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = D(!1);
  return oe((a) => {
    if (!he)
      return;
    const i = async (s) => {
      t != null && t.value && (await ie(), !(!t.value || jo(t.value, s.target)) && s.target && !r.value && So(
        Ti,
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
}), Uo = /* @__PURE__ */ _({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = I(), i = B(
      () => {
        var g;
        return ((g = a.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), s = B(() => ue.layersRoot), c = B(() => a.value ? Array.from(s.value).indexOf(a.value) : -1), d = B(() => ue.layersWithOutsidePointerEventsDisabled.size > 0), u = B(() => {
      const g = Array.from(s.value), [v] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1), h = g.indexOf(v);
      return c.value >= h;
    }), p = Ai(async (g) => {
      const v = [...ue.branches].some(
        (h) => h.contains(g.target)
      );
      !u.value || v || (o("pointerDownOutside", g), o("interactOutside", g), await ie(), g.defaultPrevented || o("dismiss"));
    }, a), f = Di((g) => {
      [...ue.branches].some(
        (v) => v.contains(g.target)
      ) || (o("focusOutside", g), o("interactOutside", g), g.defaultPrevented || o("dismiss"));
    }, a);
    hn("Escape", (g) => {
      c.value === s.value.size - 1 && (o("escapeKeyDown", g), g.defaultPrevented || o("dismiss"));
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
    }), (g, v) => (y(), x(l(H), {
      ref: l(r),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: rn({
        pointerEvents: d.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: l(f).onFocusCapture,
      onBlurCapture: l(f).onBlurCapture,
      onPointerdownCapture: l(p).onPointerDownCapture
    }, {
      default: b(() => [
        O(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Pi = /* @__PURE__ */ _({
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
    }), (r, a) => (y(), x(l(H), $({ ref: l(n) }, t), {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wt = "focusScope.autoFocusOnMount", jt = "focusScope.autoFocusOnUnmount", Un = { bubbles: !1, cancelable: !0 };
function _t(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Se(o, { select: t }), document.activeElement !== n)
      return !0;
}
function Bi(e) {
  const t = _n(e), n = Gn(t, e), o = Gn(t.reverse(), e);
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
function Gn(e, t) {
  for (const n of e)
    if (!Si(n, { upTo: t }))
      return n;
}
function Si(e, { upTo: t }) {
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
function Mi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Se(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Mi(e) && t && e.select();
  }
}
const $i = ja(() => D([]));
function Ri() {
  const e = $i();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Kn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Kn(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Kn(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Ii(e) {
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
    const n = e, o = t, { currentRef: r, currentElement: a } = I(), i = D(null), s = Ri(), c = io({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    oe((u) => {
      if (!he)
        return;
      const p = a.value;
      if (!n.trapped)
        return;
      function f(h) {
        if (c.paused || !p)
          return;
        const w = h.target;
        p.contains(w) ? i.value = w : Se(i.value, { select: !0 });
      }
      function m(h) {
        if (c.paused || !p)
          return;
        const w = h.relatedTarget;
        w !== null && (p.contains(w) || Se(i.value, { select: !0 }));
      }
      function g(h) {
        p.contains(i.value) || Se(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const v = new MutationObserver(g);
      p && v.observe(p, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), v.disconnect();
      });
    }), oe(async (u) => {
      const p = a.value;
      if (await ie(), !p)
        return;
      s.add(c);
      const f = document.activeElement;
      if (!p.contains(f)) {
        const m = new CustomEvent(Wt, Un);
        p.addEventListener(Wt, (g) => o("mountAutoFocus", g)), p.dispatchEvent(m), m.defaultPrevented || (_t(Ii(_n(p)), {
          select: !0
        }), document.activeElement === f && Se(p));
      }
      u(() => {
        p.removeEventListener(Wt, (v) => o("mountAutoFocus", v));
        const m = new CustomEvent(jt, Un), g = (v) => {
          o("unmountAutoFocus", v);
        };
        p.addEventListener(jt, g), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Se(f ?? document.body, { select: !0 }), p.removeEventListener(jt, g), s.remove(c);
        }, 0);
      });
    });
    function d(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const p = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, f = document.activeElement;
      if (p && f) {
        const m = u.currentTarget, [g, v] = Bi(m);
        g && v ? !u.shiftKey && f === v ? (u.preventDefault(), n.loop && Se(g, { select: !0 })) : u.shiftKey && f === g && (u.preventDefault(), n.loop && Se(v, { select: !0 })) : f === m && u.preventDefault();
      }
    }
    return (u, p) => (y(), x(l(H), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: d
    }, {
      default: b(() => [
        O(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Fi = "menu.itemSelect", Qt = ["Enter", " "], Li = ["ArrowDown", "PageUp", "Home"], Ko = ["ArrowUp", "PageDown", "End"], zi = [...Li, ...Ko], Ni = {
  ltr: [...Qt, "ArrowRight"],
  rtl: [...Qt, "ArrowLeft"]
}, Vi = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Cn(e) {
  return e ? "open" : "closed";
}
function At(e) {
  return e === "indeterminate";
}
function kn(e) {
  return At(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Wi(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function ji(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, c = t[a].y, d = t[i].x, u = t[i].y;
    c > o != u > o && n < (d - s) * (o - c) / (u - c) + s && (r = !r);
  }
  return r;
}
function Ui(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ji(n, t);
}
function ct(e) {
  return e.pointerType === "mouse";
}
const Gi = "DialogTitle", Ki = "DialogContent";
function Hi({
  titleName: e = Gi,
  contentName: t = Ki,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: r,
  contentElement: a
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  me(() => {
    var c;
    document.getElementById(o) || console.warn(i);
    const d = (c = a.value) == null ? void 0 : c.getAttribute("aria-describedby");
    r && !d && (document.getElementById(r) || console.warn(s));
  });
}
const Ho = /* @__PURE__ */ _({
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
    const n = e, o = t, r = ye(), { forwardRef: a, currentElement: i } = I();
    return r.titleId || (r.titleId = We(void 0, "radix-vue-dialog-title")), r.descriptionId || (r.descriptionId = We(void 0, "radix-vue-dialog-description")), me(() => {
      r.contentElement = i, document.activeElement !== document.body && (r.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Hi({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: r.titleId,
      descriptionId: r.descriptionId,
      contentElement: r.contentElement
    }), (s, c) => (y(), x(l(Go), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: c[6] || (c[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: b(() => [
        V(l(Uo), $({
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
          onDismiss: c[0] || (c[0] = (d) => l(r).onOpenChange(!1)),
          onEscapeKeyDown: c[1] || (c[1] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: c[2] || (c[2] = (d) => o("focusOutside", d)),
          onInteractOutside: c[3] || (c[3] = (d) => o("interactOutside", d)),
          onPointerDownOutside: c[4] || (c[4] = (d) => o("pointerDownOutside", d))
        }), {
          default: b(() => [
            O(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), qi = /* @__PURE__ */ _({
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
    const n = e, o = t, r = ye(), a = Ge(o), { forwardRef: i, currentElement: s } = I();
    return No(s), (c, d) => (y(), x(Ho, $({ ...n, ...l(a) }, {
      ref: l(i),
      "trap-focus": l(r).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (u) => {
        var p;
        u.defaultPrevented || (u.preventDefault(), (p = l(r).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (u) => {
        const p = u.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || f) && u.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: b(() => [
        O(c.$slots, "default")
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
    const n = e, o = Ge(t);
    I();
    const r = ye(), a = D(!1), i = D(!1);
    return (s, c) => (y(), x(Ho, $({ ...n, ...l(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (d) => {
        var u;
        d.defaultPrevented || (a.value || (u = l(r).triggerElement.value) == null || u.focus(), d.preventDefault()), a.value = !1, i.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = (d) => {
        var u;
        d.defaultPrevented || (a.value = !0, d.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = d.target;
        (u = l(r).triggerElement.value) != null && u.contains(p) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && i.value && d.preventDefault();
      })
    }), {
      default: b(() => [
        O(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xi = /* @__PURE__ */ _({
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
    const n = e, o = t, r = ye(), a = Ge(o), { forwardRef: i } = I();
    return (s, c) => (y(), x(l(nt), {
      present: s.forceMount || l(r).open.value
    }, {
      default: b(() => [
        l(r).modal.value ? (y(), x(qi, $({
          key: 0,
          ref: l(i)
        }, { ...n, ...l(a), ...s.$attrs }), {
          default: b(() => [
            O(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), x(Yi, $({
          key: 1,
          ref: l(i)
        }, { ...n, ...l(a), ...s.$attrs }), {
          default: b(() => [
            O(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Zi = /* @__PURE__ */ _({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ye();
    return Fo(!0), I(), (n, o) => (y(), x(l(H), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": l(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Ji = /* @__PURE__ */ _({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ye(), { forwardRef: n } = I();
    return (o, r) => {
      var a;
      return (a = l(t)) != null && a.modal.value ? (y(), x(l(nt), {
        key: 0,
        present: o.forceMount || l(t).open.value
      }, {
        default: b(() => [
          V(Zi, $(o.$attrs, {
            ref: l(n),
            as: o.as,
            "as-child": o.asChild
          }), {
            default: b(() => [
              O(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : ne("", !0);
    };
  }
}), qo = /* @__PURE__ */ _({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    I();
    const n = ye();
    return (o, r) => (y(), x(l(H), $(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (a) => l(n).onOpenChange(!1))
    }), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Qi = /* @__PURE__ */ _({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = ye();
    return I(), (o, r) => (y(), x(l(H), $(t, {
      id: l(n).titleId
    }), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), es = /* @__PURE__ */ _({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    I();
    const n = ye();
    return (o, r) => (y(), x(l(H), $(t, {
      id: l(n).descriptionId
    }), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Yo, ts] = ee("PopperRoot"), Xo = /* @__PURE__ */ _({
  __name: "PopperRoot",
  setup(e) {
    const t = D();
    return ts({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => O(n.$slots, "default");
  }
}), ns = /* @__PURE__ */ _({
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
    }), (a, i) => (y(), x(l(H), {
      ref: l(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: b(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function os(e) {
  return e !== null;
}
function rs(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, r;
      const { placement: a, rects: i, middlewareData: s } = t, c = ((n = s.arrow) == null ? void 0 : n.centerOffset) !== 0, d = c ? 0 : e.arrowWidth, u = c ? 0 : e.arrowHeight, [p, f] = en(a), m = { start: "0%", center: "50%", end: "100%" }[f], g = (((o = s.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, v = (((r = s.arrow) == null ? void 0 : r.y) ?? 0) + u / 2;
      let h = "", w = "";
      return p === "bottom" ? (h = c ? m : `${g}px`, w = `${-u}px`) : p === "top" ? (h = c ? m : `${g}px`, w = `${i.floating.height + u}px`) : p === "right" ? (h = `${-u}px`, w = c ? m : `${v}px`) : p === "left" && (h = `${i.floating.width + u}px`, w = c ? m : `${v}px`), { data: { x: h, y: w } };
    }
  };
}
function en(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Zo = {
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
}, [kc, as] = ee("PopperContent"), is = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ fo({
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
    ...Zo
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Yo(), { forwardRef: a, currentElement: i } = I(), s = D(), c = D(), { width: d, height: u } = vi(c), p = B(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = B(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = B(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), g = B(() => ({
      padding: f.value,
      boundary: m.value.filter(os),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), v = Wa(() => [
      Sa({
        mainAxis: n.sideOffset + u.value,
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
        apply: ({ elements: k, rects: S, availableWidth: P, availableHeight: K }) => {
          const { width: z, height: J } = S.reference, Y = k.floating.style;
          Y.setProperty(
            "--radix-popper-available-width",
            `${P}px`
          ), Y.setProperty(
            "--radix-popper-available-height",
            `${K}px`
          ), Y.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), Y.setProperty(
            "--radix-popper-anchor-height",
            `${J}px`
          );
        }
      }),
      c.value && Na({ element: c.value, padding: n.arrowPadding }),
      rs({
        arrowWidth: d.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && Ra({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: h, placement: w, isPositioned: C, middlewareData: E } = Va(
      r.anchor,
      s,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...k) => Ba(...k, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), T = B(
      () => en(w.value)[0]
    ), A = B(
      () => en(w.value)[1]
    );
    Dr(() => {
      C.value && o("placed");
    });
    const M = B(
      () => {
        var k;
        return ((k = E.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), R = D("");
    oe(() => {
      i.value && (R.value = window.getComputedStyle(i.value).zIndex);
    });
    const W = B(() => {
      var k;
      return ((k = E.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), N = B(() => {
      var k;
      return ((k = E.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return as({
      placedSide: T,
      onArrowChange: (k) => c.value = k,
      arrowX: W,
      arrowY: N,
      shouldHideArrow: M
    }), (k, S) => {
      var P, K, z;
      return y(), X("div", {
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
            (P = l(E).transformOrigin) == null ? void 0 : P.x,
            (K = l(E).transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = l(E).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        V(l(H), $({ ref: l(a) }, k.$attrs, {
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
          default: b(() => [
            O(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Jo = /* @__PURE__ */ _({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return I(), (t, n) => (y(), x(l(H), {
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
      default: b(() => [
        O(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ss = "data-radix-vue-collection-item", [En, ls] = ee("CollectionProvider");
function cs(e = ss) {
  const t = D(/* @__PURE__ */ new Map()), n = D(), o = ls({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: r } = ps(o), a = B(() => Array.from(o.itemMap.value.values())), i = B(() => o.itemMap.value.size);
  return { getItems: r, reactiveItems: a, itemMapSize: i };
}
const ds = _({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = En(), { primitiveElement: o, currentElement: r } = Vo();
    return Z(r, () => {
      n.collectionRef.value = r.value;
    }), () => Xe(xn, { ref: o }, t);
  }
}), us = _({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = En(), { primitiveElement: r, currentElement: a } = Vo();
    return oe((i) => {
      if (a.value) {
        const s = Cr(a.value);
        o.itemMap.value.set(s, { ref: a.value, value: e.value }), i(() => o.itemMap.value.delete(s));
      }
    }), () => Xe(xn, { ...n, [o.attrName]: "", ref: r }, t);
  }
});
function ps(e) {
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
const Qo = /* @__PURE__ */ _({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(ns), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function fs() {
  const e = D(!1);
  return me(() => {
    Tt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Tt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const ms = Mo(fs), [Ke, er] = ee(["MenuRoot", "MenuSub"], "MenuContext"), [ft, gs] = ee("MenuRoot"), vs = /* @__PURE__ */ _({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: r, dir: a } = Oe(n), i = wn(a), s = Ae(n, "open", o), c = D(), d = ms();
    return er({
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), gs({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: i,
      modal: r
    }), (u, p) => (y(), x(l(Xo), null, {
      default: b(() => [
        O(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), hs = "rovingFocusGroup.onEntryFocus", ys = { bubbles: !1, cancelable: !0 };
function bs(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n))
      return;
}
const [Ec, ws] = ee("RovingFocusGroup"), xs = /* @__PURE__ */ _({
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
    const o = e, r = n, { loop: a, orientation: i, dir: s } = Oe(o), c = wn(s), d = Ae(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), u = D(!1), p = D(!1), f = D(0), { getItems: m } = cs();
    function g(v) {
      const h = !p.value;
      if (v.currentTarget && v.target === v.currentTarget && h && !u.value) {
        const w = new CustomEvent(hs, ys);
        if (v.currentTarget.dispatchEvent(w), r("entryFocus", w), !w.defaultPrevented) {
          const C = m().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), E = C.find((M) => M.getAttribute("data-active") === "true"), T = C.find(
            (M) => M.id === d.value
          ), A = [E, T, ...C].filter(
            Boolean
          );
          bs(A, o.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    return t({
      getItems: m
    }), ws({
      loop: a,
      dir: c,
      orientation: i,
      currentTabStopId: d,
      onItemFocus: (v) => {
        d.value = v;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (v, h) => (y(), x(l(ds), null, {
      default: b(() => [
        V(l(H), {
          tabindex: u.value || f.value === 0 ? -1 : 0,
          "data-orientation": l(i),
          as: v.as,
          "as-child": v.asChild,
          dir: l(c),
          style: { outline: "none" },
          onMousedown: h[0] || (h[0] = (w) => p.value = !0),
          onFocus: g,
          onBlur: h[1] || (h[1] = (w) => u.value = !1)
        }, {
          default: b(() => [
            O(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [On, _s] = ee("MenuContent"), Tn = /* @__PURE__ */ _({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ fo({
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
    ...Zo
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ke(), a = ft(), { trapFocus: i, disableOutsidePointerEvents: s, loop: c } = Oe(n);
    di(), Fo(s.value);
    const d = D(""), u = D(0), p = D(0), f = D(null), m = D("right"), g = D(0), v = D(null), { createCollection: h } = Lo(), { forwardRef: w, currentElement: C } = I(), E = h(C);
    Z(C, (k) => {
      r.onContentChange(k);
    });
    const { handleTypeaheadSearch: T } = yi(E);
    et(() => {
      window.clearTimeout(u.value);
    });
    function A(k) {
      var S, P;
      return m.value === ((S = f.value) == null ? void 0 : S.side) && Ui(k, (P = f.value) == null ? void 0 : P.area);
    }
    async function M(k) {
      var S;
      o("openAutoFocus", k), !k.defaultPrevented && (k.preventDefault(), (S = C.value) == null || S.focus({
        preventScroll: !0
      }));
    }
    function R(k) {
      if (k.defaultPrevented)
        return;
      const S = k.target.closest("[data-radix-menu-content]") === k.currentTarget, P = k.ctrlKey || k.altKey || k.metaKey, K = k.key.length === 1, z = oi(
        k,
        document.activeElement,
        C.value,
        {
          loop: c.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (z)
        return z == null ? void 0 : z.focus();
      if (k.code === "Space" || (S && (k.key === "Tab" && k.preventDefault(), !P && K && T(k.key)), k.target !== C.value) || !zi.includes(k.key))
        return;
      k.preventDefault();
      const J = E.value;
      Ko.includes(k.key) && J.reverse(), Wi(J);
    }
    function W(k) {
      var S, P;
      (P = (S = k == null ? void 0 : k.currentTarget) == null ? void 0 : S.contains) != null && P.call(S, k.target) || (window.clearTimeout(u.value), d.value = "");
    }
    function N(k) {
      var S;
      if (!ct(k))
        return;
      const P = k.target, K = g.value !== k.clientX;
      if ((S = k == null ? void 0 : k.currentTarget) != null && S.contains(P) && K) {
        const z = k.clientX > g.value ? "right" : "left";
        m.value = z, g.value = k.clientX;
      }
    }
    return _s({
      onItemEnter: (k) => !!A(k),
      onItemLeave: (k) => {
        var S;
        A(k) || ((S = C.value) == null || S.focus(), v.value = null);
      },
      onTriggerLeave: (k) => !!A(k),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (k) => {
        f.value = k;
      }
    }), (k, S) => (y(), x(l(Go), {
      "as-child": "",
      trapped: l(i),
      onMountAutoFocus: M,
      onUnmountAutoFocus: S[7] || (S[7] = (P) => o("closeAutoFocus", P))
    }, {
      default: b(() => [
        V(l(Uo), {
          "as-child": "",
          "disable-outside-pointer-events": l(s),
          onEscapeKeyDown: S[2] || (S[2] = (P) => o("escapeKeyDown", P)),
          onPointerDownOutside: S[3] || (S[3] = (P) => o("pointerDownOutside", P)),
          onFocusOutside: S[4] || (S[4] = (P) => o("focusOutside", P)),
          onInteractOutside: S[5] || (S[5] = (P) => o("interactOutside", P)),
          onDismiss: S[6] || (S[6] = (P) => o("dismiss"))
        }, {
          default: b(() => [
            V(l(xs), {
              "current-tab-stop-id": v.value,
              "onUpdate:currentTabStopId": S[0] || (S[0] = (P) => v.value = P),
              "as-child": "",
              orientation: "vertical",
              dir: l(a).dir.value,
              loop: l(c),
              onEntryFocus: S[1] || (S[1] = (P) => {
                o("entryFocus", P), l(a).isUsingKeyboardRef.value || P.preventDefault();
              })
            }, {
              default: b(() => [
                V(l(is), {
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
                  default: b(() => [
                    O(k.$slots, "default")
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
}), tr = /* @__PURE__ */ _({
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
          const c = s.currentTarget;
          c == null || c.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(s) {
      await ie(), !s.defaultPrevented && ct(s) && n.onItemLeave(s);
    }
    return (s, c) => (y(), x(l(us), null, {
      default: b(() => [
        V(l(H), $({
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
          onFocus: c[0] || (c[0] = async (d) => {
            await ie(), !(d.defaultPrevented || s.disabled) && (r.value = !0);
          }),
          onBlur: c[1] || (c[1] = async (d) => {
            await ie(), !d.defaultPrevented && (r.value = !1);
          })
        }), {
          default: b(() => [
            O(s.$slots, "default")
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
    const n = e, o = t, { forwardRef: r, currentElement: a } = I(), i = ft(), s = On(), c = D(!1);
    async function d() {
      const u = a.value;
      if (!n.disabled && u) {
        const p = new CustomEvent(Fi, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await ie(), p.defaultPrevented ? c.value = !1 : i.onClose();
      }
    }
    return (u, p) => (y(), x(tr, $(n, {
      ref: l(r),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        c.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var m;
        await ie(), !f.defaultPrevented && (c.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const m = l(s).searchRef.value !== "";
        u.disabled || m && f.key === " " || l(Qt).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: b(() => [
        O(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Cs, nr] = ee(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), ks = /* @__PURE__ */ _({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Cs({
      checked: D(!1)
    });
    return (n, o) => (y(), x(l(nt), {
      present: n.forceMount || l(At)(l(t).checked.value) || l(t).checked.value === !0
    }, {
      default: b(() => [
        V(l(H), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": l(kn)(l(t).checked.value)
        }, {
          default: b(() => [
            O(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Es = /* @__PURE__ */ _({
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
    const n = e, o = t, r = Ae(n, "checked", o);
    return nr({ checked: r }), (a, i) => (y(), x(An, $({ role: "menuitemcheckbox" }, n, {
      "aria-checked": l(At)(l(r)) ? "mixed" : l(r),
      "data-state": l(kn)(l(r)),
      onSelect: i[0] || (i[0] = async (s) => {
        o("select", s), l(At)(l(r)) ? r.value = !0 : r.value = !l(r);
      })
    }), {
      default: b(() => [
        O(a.$slots, "default", { checked: l(r) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Os = /* @__PURE__ */ _({
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
    const n = e, o = t, r = Q(n, o), a = Ke(), { forwardRef: i, currentElement: s } = I();
    return No(s), (c, d) => (y(), x(Tn, $(l(r), {
      ref: l(i),
      "trap-focus": l(a).open.value,
      "disable-outside-pointer-events": l(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (u) => l(a).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ct((u) => o("focusOutside", u), ["prevent"]))
    }), {
      default: b(() => [
        O(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Ts = /* @__PURE__ */ _({
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
    const n = Q(e, t), o = Ke();
    return (r, a) => (y(), x(Tn, $(l(n), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (i) => l(o).onOpenChange(!1))
    }), {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), As = /* @__PURE__ */ _({
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
    const n = Q(e, t), o = Ke(), r = ft();
    return (a, i) => (y(), x(l(nt), {
      present: a.forceMount || l(o).open.value
    }, {
      default: b(() => [
        l(r).modal.value ? (y(), x(Os, j($({ key: 0 }, { ...a.$attrs, ...l(n) })), {
          default: b(() => [
            O(a.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), x(Ts, j($({ key: 1 }, { ...a.$attrs, ...l(n) })), {
          default: b(() => [
            O(a.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), or = /* @__PURE__ */ _({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(H), $({ role: "group" }, t), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ds = /* @__PURE__ */ _({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(H), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ps = /* @__PURE__ */ _({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(Wo), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Bs, Ss] = ee("MenuRadioGroup"), Ms = /* @__PURE__ */ _({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ae(n, "modelValue", t);
    return Ss({
      modelValue: o,
      onValueChange: (r) => {
        o.value = r;
      }
    }), (r, a) => (y(), x(or, j(G(n)), {
      default: b(() => [
        O(r.$slots, "default", { modelValue: l(o) })
      ]),
      _: 3
    }, 16));
  }
}), $s = /* @__PURE__ */ _({
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
    const n = e, o = t, { value: r } = Oe(n), a = Bs(), i = B(
      () => a.modelValue.value === (r == null ? void 0 : r.value)
    );
    return nr({ checked: i }), (s, c) => (y(), x(An, $({ role: "menuitemradio" }, n, {
      "aria-checked": i.value,
      "data-state": l(kn)(i.value),
      onSelect: c[0] || (c[0] = async (d) => {
        o("select", d), l(a).onValueChange(l(r));
      })
    }), {
      default: b(() => [
        O(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Rs = /* @__PURE__ */ _({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(H), $(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [rr, Is] = ee("MenuSub"), Fs = /* @__PURE__ */ _({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ae(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), r = Ke(), a = D(), i = D();
    return oe((s) => {
      (r == null ? void 0 : r.open.value) === !1 && (o.value = !1), s(() => o.value = !1);
    }), er({
      open: o,
      onOpenChange: (s) => {
        o.value = s;
      },
      content: i,
      onContentChange: (s) => {
        i.value = s;
      }
    }), Is({
      triggerId: "",
      contentId: "",
      trigger: a,
      onTriggerChange: (s) => {
        a.value = s;
      }
    }), (s, c) => (y(), x(l(Xo), null, {
      default: b(() => [
        O(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ls = /* @__PURE__ */ _({
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
    const n = Q(e, t), o = Ke(), r = ft(), a = rr(), { forwardRef: i, currentElement: s } = I();
    return a.contentId || (a.contentId = We(void 0, "radix-vue-menu-sub-content")), (c, d) => (y(), x(l(nt), {
      present: c.forceMount || l(o).open.value
    }, {
      default: b(() => [
        V(Tn, $(l(n), {
          id: l(a).contentId,
          ref: l(i),
          "aria-labelledby": l(a).triggerId,
          align: "start",
          side: l(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Ct((u) => {
            var p;
            l(r).isUsingKeyboardRef.value && ((p = l(s)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Ct(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (u) => {
            u.defaultPrevented || u.target !== l(a).trigger.value && l(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (u) => {
            l(r).onClose(), u.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (u) => {
            var p, f;
            const m = (p = u.currentTarget) == null ? void 0 : p.contains(u.target), g = l(Vi)[l(r).dir.value].includes(u.key);
            m && g && (l(o).onOpenChange(!1), (f = l(a).trigger.value) == null || f.focus(), u.preventDefault());
          })
        }), {
          default: b(() => [
            O(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zs = /* @__PURE__ */ _({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ke(), o = ft(), r = rr(), a = On(), i = D(null);
    r.triggerId || (r.triggerId = We(void 0, "radix-vue-menu-sub-trigger"));
    function s() {
      i.value && window.clearTimeout(i.value), i.value = null;
    }
    et(() => {
      s();
    });
    function c(p) {
      !ct(p) || a.onItemEnter(p) || !t.disabled && !n.open.value && !i.value && (a.onPointerGraceIntentChange(null), i.value = window.setTimeout(() => {
        n.onOpenChange(!0), s();
      }, 100));
    }
    async function d(p) {
      var f, m;
      if (!ct(p))
        return;
      s();
      const g = (f = n.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (g != null && g.width) {
        const v = (m = n.content.value) == null ? void 0 : m.dataset.side, h = v === "right", w = h ? -5 : 5, C = g[h ? "left" : "right"], E = g[h ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + w, y: p.clientY },
            { x: C, y: g.top },
            { x: E, y: g.top },
            { x: E, y: g.bottom },
            { x: C, y: g.bottom }
          ],
          side: v
        }), window.clearTimeout(a.pointerGraceTimerRef.value), a.pointerGraceTimerRef.value = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(p))
          return;
        a.onPointerGraceIntentChange(null);
      }
    }
    async function u(p) {
      var f;
      const m = a.searchRef.value !== "";
      t.disabled || m && p.key === " " || Ni[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await ie(), (f = n.content.value) == null || f.focus(), p.preventDefault());
    }
    return (p, f) => (y(), x(Qo, { "as-child": "" }, {
      default: b(() => [
        V(tr, $(t, {
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
          onPointermove: c,
          onPointerleave: d,
          onKeydown: u
        }), {
          default: b(() => [
            O(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [ar, Ns] = ee("DropdownMenuRoot"), Vs = /* @__PURE__ */ _({
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
    const r = Ae(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = D(), { modal: i, dir: s } = Oe(n), c = wn(s);
    return Ns({
      open: r,
      onOpenChange: (d) => {
        r.value = d;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: a,
      contentId: "",
      modal: i,
      dir: c
    }), (d, u) => (y(), x(l(vs), {
      open: l(r),
      "onUpdate:open": u[0] || (u[0] = (p) => so(r) ? r.value = p : null),
      dir: l(c),
      modal: l(i)
    }, {
      default: b(() => [
        O(d.$slots, "default", { open: l(r) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Ws = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ar(), { forwardRef: o, currentElement: r } = I();
    return me(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = We(void 0, "radix-vue-dropdown-menu-trigger")), (a, i) => (y(), x(l(Qo), { "as-child": "" }, {
      default: b(() => [
        V(l(H), {
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
            var c;
            !a.disabled && s.button === 0 && s.ctrlKey === !1 && ((c = l(n)) == null || c.onOpenToggle(), await ie(), l(n).open.value && s.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = kr(
            (s) => {
              a.disabled || (["Enter", " "].includes(s.key) && l(n).onOpenToggle(), s.key === "ArrowDown" && l(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: b(() => [
            O(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), js = /* @__PURE__ */ _({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(Ps), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Us = /* @__PURE__ */ _({
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
    const o = ar(), r = D(!1);
    function a(i) {
      i.defaultPrevented || (r.value || setTimeout(() => {
        var s;
        (s = o.triggerElement.value) == null || s.focus();
      }, 0), r.value = !1, i.preventDefault());
    }
    return o.contentId || (o.contentId = We(void 0, "radix-vue-dropdown-menu-content")), (i, s) => {
      var c;
      return y(), x(l(As), $(l(n), {
        id: l(o).contentId,
        "aria-labelledby": (c = l(o)) == null ? void 0 : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: a,
        onInteractOutside: s[0] || (s[0] = (d) => {
          var u;
          if (d.defaultPrevented) return;
          const p = d.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || f;
          (!l(o).modal.value || m) && (r.value = !0), (u = l(o).triggerElement.value) != null && u.contains(d.target) && d.preventDefault();
        })
      }), {
        default: b(() => [
          O(i.$slots, "default")
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
    const n = e, o = Ge(t);
    return I(), (r, a) => (y(), x(l(An), j(G({ ...n, ...l(o) })), {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ks = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), x(l(or), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hs = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), x(l(Rs), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qs = /* @__PURE__ */ _({
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
    const n = e, o = Ge(t);
    return I(), (r, a) => (y(), x(l(Es), j(G({ ...n, ...l(o) })), {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ir = /* @__PURE__ */ _({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), x(l(ks), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
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
    return I(), (n, o) => (y(), x(l(Ds), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xs = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ge(t);
    return I(), (r, a) => (y(), x(l(Ms), j(G({ ...n, ...l(o) })), {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zs = /* @__PURE__ */ _({
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
    return I(), (o, r) => (y(), x(l($s), j(G(l(n))), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ae(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return I(), (r, a) => (y(), x(l(Fs), {
      open: l(o),
      "onUpdate:open": a[0] || (a[0] = (i) => so(o) ? o.value = i : null)
    }, {
      default: b(() => [
        O(r.$slots, "default", { open: l(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Qs = /* @__PURE__ */ _({
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
    return I(), (o, r) => (y(), x(l(Ls), $(l(n), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), el = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), x(l(zs), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function tl() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
tl();
const [St, nl] = ee("ToastProvider"), ol = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: r, swipeThreshold: a } = Oe(t), i = D(), s = D(0), c = D(!1), d = D(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const u = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(u);
    }
    return nl({
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: a,
      toastCount: s,
      viewport: i,
      onViewportChange(u) {
        i.value = u;
      },
      onToastAdd() {
        s.value++;
      },
      onToastRemove() {
        s.value--;
      },
      isFocusedToastEscapeKeyDownRef: c,
      isClosePausedRef: d
    }), (u, p) => O(u.$slots, "default");
  }
}), rl = "toast.swipeStart", al = "toast.swipeMove", il = "toast.swipeCancel", sl = "toast.swipeEnd", tn = "toast.viewportPause", nn = "toast.viewportResume";
function wt(e, t, n) {
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
function ll(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function sr(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), ll(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", r = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (r) {
          const a = n.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...sr(n));
    }
  }), t;
}
const cl = /* @__PURE__ */ _({
  __name: "ToastAnnounce",
  setup(e) {
    const t = St(), n = Ja(1e3), o = D(!1);
    return Ro(() => {
      o.value = !0;
    }), (r, a) => l(n) || o.value ? (y(), x(l(Jo), { key: 0 }, {
      default: b(() => [
        ze($e(l(t).label.value) + " ", 1),
        O(r.$slots, "default")
      ]),
      _: 3
    })) : ne("", !0);
  }
}), [dl, ul] = ee("ToastRoot"), pl = /* @__PURE__ */ _({
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
    const n = e, o = t, { forwardRef: r, currentElement: a } = I(), i = St(), s = D(null), c = D(null), d = B(() => n.duration || i.duration.value), u = D(0), p = D(d.value), f = D(0), m = D(d.value), g = Ro(() => {
      const C = (/* @__PURE__ */ new Date()).getTime() - u.value;
      m.value = Math.max(p.value - C, 0);
    }, { fpsLimit: 60 });
    function v(C) {
      !C || C === Number.POSITIVE_INFINITY || he && (window.clearTimeout(f.value), u.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(h, C));
    }
    function h() {
      var C, E;
      (C = a.value) != null && C.contains(document.activeElement) && ((E = i.viewport.value) == null || E.focus()), i.isClosePausedRef.value = !1, o("close");
    }
    const w = B(() => a.value ? sr(a.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const C = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(C);
    }
    return oe((C) => {
      const E = i.viewport.value;
      if (E) {
        const T = () => {
          v(p.value), g.resume(), o("resume");
        }, A = () => {
          const M = (/* @__PURE__ */ new Date()).getTime() - u.value;
          p.value = p.value - M, window.clearTimeout(f.value), g.pause(), o("pause");
        };
        return E.addEventListener(tn, A), E.addEventListener(nn, T), () => {
          E.removeEventListener(tn, A), E.removeEventListener(nn, T);
        };
      }
    }), Z(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !i.isClosePausedRef.value && v(d.value);
    }, { immediate: !0 }), hn("Escape", (C) => {
      o("escapeKeyDown", C), C.defaultPrevented || (i.isFocusedToastEscapeKeyDownRef.value = !0, h());
    }), me(() => {
      i.onToastAdd();
    }), et(() => {
      i.onToastRemove();
    }), ul({ onClose: h }), (C, E) => (y(), X(Me, null, [
      w.value ? (y(), x(cl, {
        key: 0,
        role: "status",
        "aria-live": C.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: b(() => [
          ze($e(w.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ne("", !0),
      l(i).viewport.value ? (y(), x(co, {
        key: 1,
        to: l(i).viewport.value
      }, [
        V(l(H), $({
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
          onPointerdown: E[0] || (E[0] = Ct((T) => {
            s.value = { x: T.clientX, y: T.clientY };
          }, ["left"])),
          onPointermove: E[1] || (E[1] = (T) => {
            if (!s.value) return;
            const A = T.clientX - s.value.x, M = T.clientY - s.value.y, R = !!c.value, W = ["left", "right"].includes(l(i).swipeDirection.value), N = ["left", "up"].includes(l(i).swipeDirection.value) ? Math.min : Math.max, k = W ? N(0, A) : 0, S = W ? 0 : N(0, M), P = T.pointerType === "touch" ? 10 : 2, K = { x: k, y: S }, z = { originalEvent: T, delta: K };
            R ? (c.value = K, l(wt)(l(al), (J) => o("swipeMove", J), z)) : l(Hn)(K, l(i).swipeDirection.value, P) ? (c.value = K, l(wt)(l(rl), (J) => o("swipeStart", J), z), T.target.setPointerCapture(T.pointerId)) : (Math.abs(A) > P || Math.abs(M) > P) && (s.value = null);
          }),
          onPointerup: E[2] || (E[2] = (T) => {
            const A = c.value, M = T.target;
            if (M.hasPointerCapture(T.pointerId) && M.releasePointerCapture(T.pointerId), c.value = null, s.value = null, A) {
              const R = T.currentTarget, W = { originalEvent: T, delta: A };
              l(Hn)(A, l(i).swipeDirection.value, l(i).swipeThreshold.value) ? l(wt)(l(sl), (N) => o("swipeEnd", N), W) : l(wt)(l(il), (N) => o("swipeCancel", N), W), R == null || R.addEventListener("click", (N) => N.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: b(() => [
            O(C.$slots, "default", {
              remaining: m.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ne("", !0)
    ], 64));
  }
}), fl = /* @__PURE__ */ _({
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
    const n = e, o = t, { forwardRef: r } = I(), a = Ae(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (i, s) => (y(), x(l(nt), {
      present: i.forceMount || l(a)
    }, {
      default: b(() => [
        V(pl, $({
          ref: l(r),
          open: l(a),
          type: i.type,
          as: i.as,
          "as-child": i.asChild,
          duration: i.duration
        }, i.$attrs, {
          onClose: s[0] || (s[0] = (c) => a.value = !1),
          onPause: s[1] || (s[1] = (c) => o("pause")),
          onResume: s[2] || (s[2] = (c) => o("resume")),
          onEscapeKeyDown: s[3] || (s[3] = (c) => o("escapeKeyDown", c)),
          onSwipeStart: s[4] || (s[4] = (c) => {
            o("swipeStart", c), c.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: s[5] || (s[5] = (c) => {
            const { x: d, y: u } = c.detail.delta, p = c.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${u}px`);
          }),
          onSwipeCancel: s[6] || (s[6] = (c) => {
            const d = c.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: s[7] || (s[7] = (c) => {
            const { x: d, y: u } = c.detail.delta, p = c.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${u}px`), a.value = !1;
          })
        }), {
          default: b(({ remaining: c, duration: d }) => [
            O(i.$slots, "default", {
              remaining: c,
              duration: d,
              open: l(a)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), lr = /* @__PURE__ */ _({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (y(), x(l(H), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: b(() => [
        O(t.$slots, "default")
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
    const t = e, n = dl(), { forwardRef: o } = I();
    return (r, a) => (y(), x(lr, { "as-child": "" }, {
      default: b(() => [
        V(l(H), $(t, {
          ref: l(o),
          type: r.as === "button" ? "button" : void 0,
          onClick: a[0] || (a[0] = (i) => l(n).onClose())
        }), {
          default: b(() => [
            O(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), ml = /* @__PURE__ */ _({
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
    return (n, o) => n.altText ? (y(), x(lr, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: b(() => [
        V(cr, {
          ref: l(t),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: b(() => [
            O(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : ne("", !0);
  }
}), qn = /* @__PURE__ */ _({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = St();
    return (r, a) => (y(), x(l(Jo), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: a[0] || (a[0] = (i) => {
        var s;
        const c = i.relatedTarget;
        !((s = l(o).viewport.value) != null && s.contains(c)) && n("focusFromOutsideViewport");
      })
    }, {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), gl = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = Oe(t), { forwardRef: r, currentElement: a } = I(), { createCollection: i } = Lo(), s = i(a), c = St(), d = B(() => c.toastCount.value > 0), u = D(), p = D(), f = B(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    hn(n.value, () => {
      a.value.focus();
    }), me(() => {
      c.onViewportChange(a.value);
    }), oe((g) => {
      const v = a.value;
      if (d.value && v) {
        const h = () => {
          if (!c.isClosePausedRef.value) {
            const A = new CustomEvent(tn);
            v.dispatchEvent(A), c.isClosePausedRef.value = !0;
          }
        }, w = () => {
          if (c.isClosePausedRef.value) {
            const A = new CustomEvent(nn);
            v.dispatchEvent(A), c.isClosePausedRef.value = !1;
          }
        }, C = (A) => {
          !v.contains(A.relatedTarget) && w();
        }, E = () => {
          v.contains(document.activeElement) || w();
        }, T = (A) => {
          var M, R, W;
          const N = A.altKey || A.ctrlKey || A.metaKey;
          if (A.key === "Tab" && !N) {
            const k = document.activeElement, S = A.shiftKey;
            if (A.target === v && S) {
              (M = u.value) == null || M.focus();
              return;
            }
            const P = m({ tabbingDirection: S ? "backwards" : "forwards" }), K = P.findIndex((z) => z === k);
            _t(P.slice(K + 1)) ? A.preventDefault() : S ? (R = u.value) == null || R.focus() : (W = p.value) == null || W.focus();
          }
        };
        v.addEventListener("focusin", h), v.addEventListener("focusout", C), v.addEventListener("pointermove", h), v.addEventListener("pointerleave", E), v.addEventListener("keydown", T), window.addEventListener("blur", h), window.addEventListener("focus", w), g(() => {
          v.removeEventListener("focusin", h), v.removeEventListener("focusout", C), v.removeEventListener("pointermove", h), v.removeEventListener("pointerleave", E), v.removeEventListener("keydown", T), window.removeEventListener("blur", h), window.removeEventListener("focus", w);
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
    return (g, v) => (y(), x(l(Pi), {
      role: "region",
      "aria-label": typeof l(o) == "string" ? l(o).replace("{hotkey}", f.value) : l(o)(f.value),
      tabindex: "-1",
      style: rn({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: b(() => [
        d.value ? (y(), x(qn, {
          key: 0,
          ref: (h) => {
            u.value = l(Ee)(h);
          },
          onFocusFromOutsideViewport: v[0] || (v[0] = () => {
            const h = m({
              tabbingDirection: "forwards"
            });
            l(_t)(h);
          })
        }, null, 512)) : ne("", !0),
        V(l(H), $({
          ref: l(r),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: b(() => [
            O(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (y(), x(qn, {
          key: 1,
          ref: (h) => {
            p.value = l(Ee)(h);
          },
          onFocusFromOutsideViewport: v[1] || (v[1] = () => {
            const h = m({
              tabbingDirection: "backwards"
            });
            l(_t)(h);
          })
        }, null, 512)) : ne("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), vl = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), x(l(H), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hl = /* @__PURE__ */ _({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return I(), (n, o) => (y(), x(l(H), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yl = 3, bl = 1e6, _e = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Ut = 0;
function wl() {
  return Ut = (Ut + 1) % Number.MAX_VALUE, Ut.toString();
}
const Gt = /* @__PURE__ */ new Map();
function Yn(e) {
  if (Gt.has(e)) return;
  const t = setTimeout(() => {
    Gt.delete(e), it({
      type: _e.REMOVE_TOAST,
      toastId: e
    });
  }, bl);
  Gt.set(e, t);
}
const de = D({
  toasts: []
});
function it(e) {
  switch (e.type) {
    case _e.ADD_TOAST:
      de.value.toasts = [e.toast, ...de.value.toasts].slice(0, yl);
      break;
    case _e.UPDATE_TOAST:
      de.value.toasts = de.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case _e.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Yn(t) : de.value.toasts.forEach((n) => {
        Yn(n.id);
      }), de.value.toasts = de.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case _e.REMOVE_TOAST:
      e.toastId === void 0 ? de.value.toasts = [] : de.value.toasts = de.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function dr() {
  return {
    toasts: B(() => de.value.toasts),
    toast: xl,
    dismiss: (e) => it({ type: _e.DISMISS_TOAST, toastId: e })
  };
}
function xl(e) {
  const t = wl(), n = (r) => it({
    type: _e.UPDATE_TOAST,
    toast: { ...r, id: t }
  }), o = () => it({ type: _e.DISMISS_TOAST, toastId: t });
  return it({
    type: _e.ADD_TOAST,
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
const _l = { class: "flex items-start space-x-3" }, Cl = { class: "grid gap-1" }, kl = { class: "font-bold" }, El = /* @__PURE__ */ _({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = dr();
    return (n, o) => (y(), x(l(pc), null, {
      default: b(() => [
        (y(!0), X(Me, null, Pn(l(t), (r) => (y(), x(l(ac), $({
          key: r.id,
          ref_for: !0
        }, r), {
          default: b(() => [
            ce("div", _l, [
              r.icon ? (y(), x(Mt(r.icon), {
                key: 0,
                class: Dt(["h-6 w-6", r.iconClasses])
              }, null, 8, ["class"])) : ne("", !0),
              ce("div", Cl, [
                r.title ? (y(), x(l(uc), { key: 0 }, {
                  default: b(() => [
                    ze($e(r.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ne("", !0),
                r.description ? (y(), X(Me, { key: 1 }, [
                  Br(r.description) ? (y(), x(l(Jn), { key: 0 }, {
                    default: b(() => [
                      (y(), x(Mt(r.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof r.description == "object" ? (y(!0), X(Me, { key: 1 }, Pn(r.description, (a, i) => (y(), X("p", {
                    key: i,
                    class: "text-sm opacity-90"
                  }, [
                    r.errorFormat === "value" ? (y(), X(Me, { key: 0 }, [
                      ze($e(a), 1)
                    ], 64)) : ne("", !0),
                    r.errorFormat === "key" ? (y(), X(Me, { key: 1 }, [
                      ze($e(i), 1)
                    ], 64)) : ne("", !0),
                    r.errorFormat === "both" ? (y(), X(Me, { key: 2 }, [
                      ce("span", kl, $e(i), 1),
                      ze(": " + $e(a), 1)
                    ], 64)) : ne("", !0)
                  ]))), 128)) : (y(), x(l(Jn), { key: 2 }, {
                    default: b(() => [
                      ze($e(r.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ne("", !0),
                V(l(dc))
              ])
            ]),
            (y(), x(Mt(r.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        V(l(ic))
      ]),
      _: 1
    }));
  }
});
function ur(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = ur(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ol() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = ur(e)) && (o && (o += " "), o += t);
  return o;
}
const Dn = "-", Tl = (e) => {
  const t = Dl(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Dn);
      return s[0] === "" && s.length !== 1 && s.shift(), pr(s, t) || Al(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = n[i] || [];
      return s && o[i] ? [...c, ...o[i]] : c;
    }
  };
}, pr = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? pr(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const a = e.join(Dn);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, Xn = /^\[(.+)\]$/, Al = (e) => {
  if (Xn.test(e)) {
    const t = Xn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Dl = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bl(Object.entries(e.classGroups), n).forEach(([a, i]) => {
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
      if (Pl(r)) {
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
}, Pl = (e) => e.isThemeGetter, Bl = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [n, r];
}) : e, Sl = (e) => {
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
}, fr = "!", Ml = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], a = t.length, i = (s) => {
    const c = [];
    let d = 0, u = 0, p;
    for (let h = 0; h < s.length; h++) {
      let w = s[h];
      if (d === 0) {
        if (w === r && (o || s.slice(h, h + a) === t)) {
          c.push(s.slice(u, h)), u = h + a;
          continue;
        }
        if (w === "/") {
          p = h;
          continue;
        }
      }
      w === "[" ? d++ : w === "]" && d--;
    }
    const f = c.length === 0 ? s : s.substring(u), m = f.startsWith(fr), g = m ? f.substring(1) : f, v = p && p > u ? p - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: m,
      baseClassName: g,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, $l = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Rl = (e) => ({
  cache: Sl(e.cacheSize),
  parseClassName: Ml(e),
  ...Tl(e)
}), Il = /\s+/, Fl = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, a = [], i = e.trim().split(Il);
  let s = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const d = i[c], {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(d);
    let g = !!m, v = o(g ? f.substring(0, m) : f);
    if (!v) {
      if (!g) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = o(f), !v) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      g = !1;
    }
    const h = $l(u).join(":"), w = p ? h + fr : h, C = w + v;
    if (a.includes(C))
      continue;
    a.push(C);
    const E = r(v, g);
    for (let T = 0; T < E.length; ++T) {
      const A = E[T];
      a.push(w + A);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Ll() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = mr(t)) && (o && (o += " "), o += n);
  return o;
}
const mr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = mr(e[o])) && (n && (n += " "), n += t);
  return n;
};
function zl(e, ...t) {
  let n, o, r, a = i;
  function i(c) {
    const d = t.reduce((u, p) => p(u), e());
    return n = Rl(d), o = n.cache.get, r = n.cache.set, a = s, s(c);
  }
  function s(c) {
    const d = o(c);
    if (d)
      return d;
    const u = Fl(c, n);
    return r(c, u), u;
  }
  return function() {
    return a(Ll.apply(null, arguments));
  };
}
const U = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, gr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Nl = /^\d+\/\d+$/, Vl = /* @__PURE__ */ new Set(["px", "full", "screen"]), Wl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ul = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xe = (e) => Je(e) || Vl.has(e) || Nl.test(e), Pe = (e) => ot(e, "length", ec), Je = (e) => !!e && !Number.isNaN(Number(e)), Kt = (e) => ot(e, "number", Je), rt = (e) => !!e && Number.isInteger(Number(e)), Hl = (e) => e.endsWith("%") && Je(e.slice(0, -1)), L = (e) => gr.test(e), Be = (e) => Wl.test(e), ql = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Yl = (e) => ot(e, ql, vr), Xl = (e) => ot(e, "position", vr), Zl = /* @__PURE__ */ new Set(["image", "url"]), Jl = (e) => ot(e, Zl, nc), Ql = (e) => ot(e, "", tc), at = () => !0, ot = (e, t, n) => {
  const o = gr.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, ec = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jl.test(e) && !Ul.test(e)
), vr = () => !1, tc = (e) => Gl.test(e), nc = (e) => Kl.test(e), oc = () => {
  const e = U("colors"), t = U("spacing"), n = U("blur"), o = U("brightness"), r = U("borderColor"), a = U("borderRadius"), i = U("borderSpacing"), s = U("borderWidth"), c = U("contrast"), d = U("grayscale"), u = U("hueRotate"), p = U("invert"), f = U("gap"), m = U("gradientColorStops"), g = U("gradientColorStopPositions"), v = U("inset"), h = U("margin"), w = U("opacity"), C = U("padding"), E = U("saturate"), T = U("scale"), A = U("sepia"), M = U("skew"), R = U("space"), W = U("translate"), N = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", L, t], P = () => [L, t], K = () => ["", xe, Pe], z = () => ["auto", Je, L], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], te = () => ["", "0", L], mt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], be = () => [Je, L];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [at],
      spacing: [xe, Pe],
      blur: ["none", "", Be, L],
      brightness: be(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Be, L],
      borderSpacing: P(),
      borderWidth: K(),
      contrast: be(),
      grayscale: te(),
      hueRotate: be(),
      invert: te(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Hl, Pe],
      inset: S(),
      margin: S(),
      opacity: be(),
      padding: P(),
      saturate: be(),
      scale: be(),
      sepia: te(),
      skew: be(),
      space: P(),
      translate: P()
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
        columns: [Be]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": mt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": mt()
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
        basis: S()
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
          screen: [Be]
        }, Be]
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
        text: ["base", Be, Pe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Kt]
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
        "line-clamp": ["none", Je, Kt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xe, L]
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
        decoration: ["auto", "from-font", xe, Pe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xe, L]
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
        indent: P()
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
        bg: [...J(), Xl]
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
        bg: ["auto", "cover", "contain", Yl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Jl]
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
        "outline-offset": [xe, L]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xe, Pe]
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
        ring: K()
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
        "ring-offset": [xe, Pe]
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
        shadow: ["", "inner", "none", Be, Ql]
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Be, L]
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
        "hue-rotate": [u]
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
        saturate: [E]
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
        "backdrop-contrast": [c]
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
        "backdrop-hue-rotate": [u]
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
        "backdrop-saturate": [E]
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
        duration: be()
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
        delay: be()
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
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        stroke: [xe, Pe, Kt]
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
}, rc = /* @__PURE__ */ zl(oc);
function q(...e) {
  return rc(Ol(e));
}
const ac = /* @__PURE__ */ _({
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
    const n = e, o = t, r = B(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (y(), x(l(fl), $(l(a), {
      class: l(q)(l(mc)({ variant: i.variant }), n.class),
      "onUpdate:open": i.onOpenChange
    }), {
      default: b(() => [
        O(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), ic = /* @__PURE__ */ _({
  __name: "ToastViewport",
  props: {
    hotkey: {},
    label: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(gl), $(n.value, {
      class: l(q)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Oc = /* @__PURE__ */ _({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(ml), $(n.value, {
      class: l(q)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function sc(e, t) {
  return y(), X("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function lc(e, t) {
  return y(), X("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function hr(e, t) {
  return y(), X("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function cc(e, t) {
  return y(), X("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    ce("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
const dc = /* @__PURE__ */ _({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(cr), $(n.value, {
      class: l(q)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: b(() => [
        V(l(hr), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), uc = /* @__PURE__ */ _({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(vl), $(n.value, {
      class: l(q)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: b(() => [
        O(o.$slots, "default")
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
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(hl), $({
      class: l(q)("text-sm opacity-90", t.class)
    }, n.value), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pc = /* @__PURE__ */ _({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(ol), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
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
function fc() {
  for (var e, t, n = 0, o = ""; n < arguments.length; ) (e = arguments[n++]) && (t = yr(e)) && (o && (o += " "), o += t);
  return o;
}
const Qn = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, eo = fc, br = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return eo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: a } = t, i = Object.keys(r).map((d) => {
    const u = n == null ? void 0 : n[d], p = a == null ? void 0 : a[d];
    if (u === null) return null;
    const f = Qn(u) || Qn(p);
    return r[d][f];
  }), s = n && Object.entries(n).reduce((d, u) => {
    let [p, f] = u;
    return f === void 0 || (d[p] = f), d;
  }, {}), c = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, u) => {
    let { class: p, className: f, ...m } = u;
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
      ...d,
      p,
      f
    ] : d;
  }, []);
  return eo(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, mc = br(
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
function gc(e, t) {
  return y(), X("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ce("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function to(e, t) {
  return y(), X("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ce("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function vc(e, t) {
  return y(), X("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    ce("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const { toast: xt } = dr();
function hc() {
  return {
    info: (e) => {
      xt({
        icon: vc,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      xt({
        icon: gc,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      xt({
        icon: to,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      xt({
        icon: to,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        errorFormat: t
      });
    }
  };
}
const Tc = /* @__PURE__ */ _({
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
    } = hc();
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
    ), (i, s) => (y(), x(l(El)));
  }
}), Ac = /* @__PURE__ */ _({
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
    return (a, i) => (y(), x(l(Vs), j(G(l(r))), {
      default: b(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dc = /* @__PURE__ */ _({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = pt(e);
    return (o, r) => (y(), x(l(Ws), $({ class: "outline-none" }, l(n)), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pc = /* @__PURE__ */ _({
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
    const n = e, o = t, r = B(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (y(), x(l(js), null, {
      default: b(() => [
        V(l(Us), $(l(a), {
          class: l(q)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: b(() => [
            O(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Bc = /* @__PURE__ */ _({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(Ks), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sc = /* @__PURE__ */ _({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = Q(e, t);
    return (a, i) => (y(), x(l(Xs), j(G(l(r))), {
      default: b(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mc = /* @__PURE__ */ _({
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
    const t = e, n = B(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = pt(n);
    return (r, a) => (y(), x(l(Gs), $(l(o), {
      class: l(q)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        r.inset && "pl-8",
        t.class
      )
    }), {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yc = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, $c = /* @__PURE__ */ _({
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
    const n = e, o = t, r = B(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (y(), x(l(qs), $(l(a), {
      class: l(q)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: b(() => [
        ce("span", yc, [
          V(l(ir), null, {
            default: b(() => [
              V(l(sc), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        O(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bc = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Rc = /* @__PURE__ */ _({
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
    const n = e, o = t, r = B(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (y(), x(l(Zs), $(l(a), {
      class: l(q)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: b(() => [
        ce("span", bc, [
          V(l(ir), null, {
            default: b(() => [
              V(l(cc), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        O(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ic = /* @__PURE__ */ _({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), X("span", {
      class: Dt(l(q)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      O(n.$slots, "default")
    ], 2));
  }
}), Fc = /* @__PURE__ */ _({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(Hs), $(n.value, {
      class: l(q)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Lc = /* @__PURE__ */ _({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = pt(n);
    return (r, a) => (y(), x(l(Ys), $(l(o), {
      class: l(q)("px-2 py-1.5 text-sm font-semibold", r.inset && "pl-8", t.class)
    }), {
      default: b(() => [
        O(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zc = /* @__PURE__ */ _({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Q(e, t);
    return (a, i) => (y(), x(l(Js), j(G(l(r))), {
      default: b(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nc = /* @__PURE__ */ _({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = pt(n);
    return (r, a) => (y(), x(l(el), $(l(o), {
      class: l(q)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: b(() => [
        O(r.$slots, "default"),
        V(l(lc), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vc = /* @__PURE__ */ _({
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
    const n = e, o = t, r = B(() => {
      const { class: i, ...s } = n;
      return s;
    }), a = Q(r, o);
    return (i, s) => (y(), x(l(Qs), $(l(a), {
      class: l(q)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n.class
      )
    }), {
      default: b(() => [
        O(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wc = /* @__PURE__ */ _({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Q(e, t);
    return (a, i) => (y(), x(l(Ci), j(G(l(r))), {
      default: b(() => [
        O(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jc = /* @__PURE__ */ _({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(ki), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uc = /* @__PURE__ */ _({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), x(l(qo), j(G(t)), {
      default: b(() => [
        O(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gc = /* @__PURE__ */ _({
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
    const n = e, o = t, r = B(() => {
      const { class: i, side: s, ...c } = n;
      return c;
    }), a = Q(r, o);
    return (i, s) => (y(), x(l(Ei), null, {
      default: b(() => [
        V(l(Ji), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        V(l(Xi), $({
          class: l(q)(l(wc)({ side: i.side }), n.class)
        }, { ...l(a), ...i.$attrs }), {
          default: b(() => [
            O(i.$slots, "default"),
            V(l(qo), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: b(() => [
                V(l(hr), { class: "h-4 w-4" })
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
}), Kc = /* @__PURE__ */ _({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), X("div", {
      class: Dt(l(q)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      O(n.$slots, "default")
    ], 2));
  }
}), Hc = /* @__PURE__ */ _({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(Qi), $({
      class: l(q)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qc = /* @__PURE__ */ _({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (y(), x(l(es), $({
      class: l(q)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: b(() => [
        O(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yc = /* @__PURE__ */ _({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (y(), X("div", {
      class: Dt(l(q)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      O(n.$slots, "default")
    ], 2));
  }
}), wc = br(
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
);
export {
  Ac as DropdownMenu,
  $c as DropdownMenuCheckboxItem,
  Pc as DropdownMenuContent,
  Bc as DropdownMenuGroup,
  Mc as DropdownMenuItem,
  Lc as DropdownMenuLabel,
  js as DropdownMenuPortal,
  Sc as DropdownMenuRadioGroup,
  Rc as DropdownMenuRadioItem,
  Fc as DropdownMenuSeparator,
  Ic as DropdownMenuShortcut,
  zc as DropdownMenuSub,
  Vc as DropdownMenuSubContent,
  Nc as DropdownMenuSubTrigger,
  Dc as DropdownMenuTrigger,
  Tc as Notification,
  Wc as Sheet,
  Uc as SheetClose,
  Gc as SheetContent,
  qc as SheetDescription,
  Yc as SheetFooter,
  Kc as SheetHeader,
  Hc as SheetTitle,
  jc as SheetTrigger,
  ac as Toast,
  Oc as ToastAction,
  dc as ToastClose,
  Jn as ToastDescription,
  pc as ToastProvider,
  uc as ToastTitle,
  ic as ToastViewport,
  El as Toaster,
  _c as preset,
  wc as sheetVariants,
  xl as toast,
  mc as toastVariants,
  hc as useNotification,
  dr as useToast
};
