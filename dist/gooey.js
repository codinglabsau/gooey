import { computed as D, ref as E, shallowRef as Rn, watch as Z, getCurrentScope as Ln, onScopeDispose as zn, shallowReadonly as tt, unref as s, getCurrentInstance as Ue, toRef as Za, camelize as Vn, defineComponent as w, Comment as Qa, mergeProps as A, cloneVNode as Ja, h as at, toRefs as de, renderSlot as x, onMounted as ie, openBlock as v, createBlock as b, withCtx as g, normalizeProps as V, guardReactiveProps as j, reactive as Nn, createVNode as L, createCommentVNode as re, withModifiers as he, nextTick as te, withDirectives as Lt, vShow as Oo, watchEffect as ue, markRaw as er, watchSyncEffect as tr, withKeys as gt, createTextVNode as Ce, toDisplayString as xe, isRef as ko, resolveDynamicComponent as rt, onBeforeMount as or, onUnmounted as Ke, createElementBlock as Y, Fragment as _e, normalizeStyle as Bo, effectScope as jn, toHandlerKey as nr, Teleport as Wn, renderList as po, inject as Un, provide as Kn, readonly as Do, onBeforeUpdate as ar, onUpdated as rr, mergeDefaults as Hn, watchPostEffect as sr, onBeforeUnmount as ir, customRef as lr, createElementVNode as se, normalizeClass as ce, isVNode as dr, vModelText as ur } from "vue";
function Gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cr = {
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
}, Qt = cr, Eo = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function pr(e) {
  return e.trim().replace(Eo.whitespace, " ");
}
function fr(e) {
  return encodeURIComponent(e).replace(Eo.urlHexPairs, vr);
}
function mr(e) {
  return Object.keys(Qt).forEach(function(t) {
    Qt[t].test(e) && (e = e.replace(Qt[t], t));
  }), e;
}
function vr(e) {
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
function fo(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = mr(pr(e)).replace(Eo.quotes, "'");
  return "data:image/svg+xml," + fr(t);
}
fo.toSrcset = function(t) {
  return fo(t).replace(/ /g, "%20");
};
var gr = fo, qn = {}, Yn = {};
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
    const r = function(i) {
      return {
        __options: i,
        handler: n(i),
        config: a(i)
      };
    };
    return r.__isOptionsFunction = !0, r.__pluginFunction = n, r.__configFunction = a, r;
  };
  const o = t;
})(Yn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const t = /* @__PURE__ */ o(Yn);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const n = t.default;
})(qn);
let Jt = qn;
var Xn = (Jt.__esModule ? Jt : { default: Jt }).default, Zn = {}, Qn = {};
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
})(Qn);
var hr = {
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
  const t = Qn, o = /* @__PURE__ */ n(hr);
  function n(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(o.default.theme);
})(Zn);
let eo = Zn;
var yr = (eo.__esModule ? eo : { default: eo }).default, Jn = {}, ea = {}, Ao = { exports: {} }, W = String, ta = function() {
  return { isColorSupported: !1, reset: W, bold: W, dim: W, italic: W, underline: W, inverse: W, hidden: W, strikethrough: W, black: W, red: W, green: W, yellow: W, blue: W, magenta: W, cyan: W, white: W, gray: W, bgBlack: W, bgRed: W, bgGreen: W, bgYellow: W, bgBlue: W, bgMagenta: W, bgCyan: W, bgWhite: W, blackBright: W, redBright: W, greenBright: W, yellowBright: W, blueBright: W, magentaBright: W, cyanBright: W, whiteBright: W, bgBlackBright: W, bgRedBright: W, bgGreenBright: W, bgYellowBright: W, bgBlueBright: W, bgMagentaBright: W, bgCyanBright: W, bgWhiteBright: W };
};
Ao.exports = ta();
Ao.exports.createColors = ta;
var br = Ao.exports;
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
      return i;
    },
    default: function() {
      return l;
    }
  });
  const o = /* @__PURE__ */ n(br);
  function n(d) {
    return d && d.__esModule ? d : {
      default: d
    };
  }
  let a = /* @__PURE__ */ new Set();
  function r(d, u, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && a.has(c) || (c && a.add(c), console.warn(""), u.forEach((p) => console.warn(d, "-", p)));
  }
  function i(d) {
    return o.default.dim(d);
  }
  const l = {
    info(d, u) {
      r(o.default.bold(o.default.cyan("info")), ...Array.isArray(d) ? [
        d
      ] : [
        u,
        d
      ]);
    },
    warn(d, u) {
      r(o.default.bold(o.default.yellow("warn")), ...Array.isArray(d) ? [
        d
      ] : [
        u,
        d
      ]);
    },
    risk(d, u) {
      r(o.default.bold(o.default.magenta("risk")), ...Array.isArray(d) ? [
        d
      ] : [
        u,
        d
      ]);
    }
  };
})(ea);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ o(ea);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  function n({ version: r, from: i, to: l }) {
    t.default.warn(`${i}-color-renamed`, [
      `As of Tailwind CSS ${r}, \`${i}\` has been renamed to \`${l}\`.`,
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
})(Jn);
let to = Jn;
var wr = (to.__esModule ? to : { default: to }).default;
const Ot = gr, xr = Xn, oa = yr, Re = wr, [_r, { lineHeight: Cr }] = oa.fontSize.base, { spacing: Pe, borderWidth: rn, borderRadius: sn } = oa;
function Ye(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const Or = xr.withOptions(function(e = { strategy: void 0 }) {
  return function({ addBase: t, addComponents: o, theme: n }) {
    function a(d, u) {
      let c = n(d);
      return !c || c.includes("var(") ? u : c.replace("<alpha-value>", "1");
    }
    const r = e.strategy === void 0 ? ["base", "class"] : [e.strategy], i = [
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
          "border-color": Ye(
            n("colors.gray.500", Re.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": rn.DEFAULT,
          "border-radius": sn.none,
          "padding-top": Pe[2],
          "padding-right": Pe[3],
          "padding-bottom": Pe[2],
          "padding-left": Pe[3],
          "font-size": _r,
          "line-height": Cr,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": Ye(
              n("colors.blue.600", Re.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": Ye(
              n("colors.blue.600", Re.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: Ye(n("colors.gray.500", Re.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${Ot(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              Re.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${Pe[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": Pe[10],
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
          "padding-right": Pe[3],
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
          height: Pe[4],
          width: Pe[4],
          color: Ye(n("colors.blue.600", Re.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": Ye(
            n("colors.gray.500", Re.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": rn.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": sn.none
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
          "--tw-ring-color": Ye(
            n("colors.blue.600", Re.blue[600]),
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
          "background-image": `url("${Ot(
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
          "background-image": `url("${Ot(
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
          "background-image": `url("${Ot(
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
    ], l = (d) => i.map((u) => u[d] === null ? null : { [u[d]]: u.styles }).filter(Boolean);
    r.includes("base") && t(l("base")), r.includes("class") && o(l("class"));
  };
});
var kr = Or;
const Br = /* @__PURE__ */ Gn(kr), Dr = Xn;
function ln(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var Er = Dr(
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
      { values: ln(o("animationDuration")) }
    ), t(
      { delay: (n) => ({ animationDelay: n }) },
      { values: o("animationDelay") }
    ), t(
      { ease: (n) => ({ animationTimingFunction: n }) },
      { values: ln(o("animationTimingFunction")) }
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
const Ar = /* @__PURE__ */ Gn(Er), tc = {
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
    Ar,
    Br({
      strategy: "class"
    })
  ]
}, Pr = ["top", "right", "bottom", "left"], Oe = Math.min, pe = Math.max, $t = Math.round, kt = Math.floor, Ne = (e) => ({
  x: e,
  y: e
}), Tr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $r = {
  start: "end",
  end: "start"
};
function mo(e, t, o) {
  return pe(e, Oe(t, o));
}
function Me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ie(e) {
  return e.split("-")[0];
}
function dt(e) {
  return e.split("-")[1];
}
function Po(e) {
  return e === "x" ? "y" : "x";
}
function To(e) {
  return e === "y" ? "height" : "width";
}
function je(e) {
  return ["top", "bottom"].includes(Ie(e)) ? "y" : "x";
}
function $o(e) {
  return Po(je(e));
}
function Sr(e, t, o) {
  o === void 0 && (o = !1);
  const n = dt(e), a = $o(e), r = To(a);
  let i = a === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (i = St(i)), [i, St(i)];
}
function Mr(e) {
  const t = St(e);
  return [vo(e), t, vo(t)];
}
function vo(e) {
  return e.replace(/start|end/g, (t) => $r[t]);
}
function Ir(e, t, o) {
  const n = ["left", "right"], a = ["right", "left"], r = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? r : i;
    default:
      return [];
  }
}
function Fr(e, t, o, n) {
  const a = dt(e);
  let r = Ir(Ie(e), o === "start", n);
  return a && (r = r.map((i) => i + "-" + a), t && (r = r.concat(r.map(vo)))), r;
}
function St(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Tr[t]);
}
function Rr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function na(e) {
  return typeof e != "number" ? Rr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mt(e) {
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
function dn(e, t, o) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = je(t), i = $o(t), l = To(i), d = Ie(t), u = r === "y", c = n.x + n.width / 2 - a.width / 2, p = n.y + n.height / 2 - a.height / 2, f = n[l] / 2 - a[l] / 2;
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
  switch (dt(t)) {
    case "start":
      m[i] -= f * (o && u ? -1 : 1);
      break;
    case "end":
      m[i] += f * (o && u ? -1 : 1);
      break;
  }
  return m;
}
const Lr = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: i
  } = o, l = r.filter(Boolean), d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: p
  } = dn(u, n, d), f = n, m = {}, h = 0;
  for (let y = 0; y < l.length; y++) {
    const {
      name: _,
      fn: C
    } = l[y], {
      x: O,
      y: B,
      data: P,
      reset: T
    } = await C({
      x: c,
      y: p,
      initialPlacement: n,
      placement: f,
      strategy: a,
      middlewareData: m,
      rects: u,
      platform: i,
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
    }, T && h <= 50 && (h++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (u = T.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : T.rects), {
      x: c,
      y: p
    } = dn(u, f, d)), y = -1);
  }
  return {
    x: c,
    y: p,
    placement: f,
    strategy: a,
    middlewareData: m
  };
};
async function yt(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: i,
    elements: l,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = Me(t, e), h = na(m), _ = l[f ? p === "floating" ? "reference" : "floating" : p], C = Mt(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(_))) == null || o ? _ : _.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: d
  })), O = p === "floating" ? {
    x: n,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), P = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Mt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: O,
    offsetParent: B,
    strategy: d
  }) : O);
  return {
    top: (C.top - T.top + h.top) / P.y,
    bottom: (T.bottom - C.bottom + h.bottom) / P.y,
    left: (C.left - T.left + h.left) / P.x,
    right: (T.right - C.right + h.right) / P.x
  };
}
const zr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: a,
      rects: r,
      platform: i,
      elements: l,
      middlewareData: d
    } = t, {
      element: u,
      padding: c = 0
    } = Me(e, t) || {};
    if (u == null)
      return {};
    const p = na(c), f = {
      x: o,
      y: n
    }, m = $o(a), h = To(m), y = await i.getDimensions(u), _ = m === "y", C = _ ? "top" : "left", O = _ ? "bottom" : "right", B = _ ? "clientHeight" : "clientWidth", P = r.reference[h] + r.reference[m] - f[m] - r.floating[h], T = f[m] - r.reference[m], R = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let M = R ? R[B] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(R))) && (M = l.floating[B] || r.floating[h]);
    const X = P / 2 - T / 2, G = M / 2 - y[h] / 2 - 1, k = Oe(p[C], G), I = Oe(p[O], G), $ = k, Q = M - y[h] - I, H = M / 2 - y[h] / 2 + X, F = mo($, H, Q), K = !d.arrow && dt(a) != null && H !== F && r.reference[h] / 2 - (H < $ ? k : I) - y[h] / 2 < 0, J = K ? H < $ ? H - $ : H - Q : 0;
    return {
      [m]: f[m] + J,
      data: {
        [m]: F,
        centerOffset: H - F - J,
        ...K && {
          alignmentOffset: J
        }
      },
      reset: K
    };
  }
}), Vr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: a,
        middlewareData: r,
        rects: i,
        initialPlacement: l,
        platform: d,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: y = !0,
        ..._
      } = Me(e, t);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const C = Ie(a), O = je(l), B = Ie(l) === l, P = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), T = f || (B || !y ? [St(l)] : Mr(l)), R = h !== "none";
      !f && R && T.push(...Fr(l, y, h, P));
      const M = [l, ...T], X = await yt(t, _), G = [];
      let k = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (c && G.push(X[C]), p) {
        const H = Sr(a, i, P);
        G.push(X[H[0]], X[H[1]]);
      }
      if (k = [...k, {
        placement: a,
        overflows: G
      }], !G.every((H) => H <= 0)) {
        var I, $;
        const H = (((I = r.flip) == null ? void 0 : I.index) || 0) + 1, F = M[H];
        if (F)
          return {
            data: {
              index: H,
              overflows: k
            },
            reset: {
              placement: F
            }
          };
        let K = ($ = k.filter((J) => J.overflows[0] <= 0).sort((J, ne) => J.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!K)
          switch (m) {
            case "bestFit": {
              var Q;
              const J = (Q = k.filter((ne) => {
                if (R) {
                  const ae = je(ne.placement);
                  return ae === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ae === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((ae) => ae > 0).reduce((ae, qe) => ae + qe, 0)]).sort((ne, ae) => ne[1] - ae[1])[0]) == null ? void 0 : Q[0];
              J && (K = J);
              break;
            }
            case "initialPlacement":
              K = l;
              break;
          }
        if (a !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
function un(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function cn(e) {
  return Pr.some((t) => e[t] >= 0);
}
const Nr = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: n = "referenceHidden",
        ...a
      } = Me(e, t);
      switch (n) {
        case "referenceHidden": {
          const r = await yt(t, {
            ...a,
            elementContext: "reference"
          }), i = un(r, o.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: cn(i)
            }
          };
        }
        case "escaped": {
          const r = await yt(t, {
            ...a,
            altBoundary: !0
          }), i = un(r, o.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: cn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function jr(e, t) {
  const {
    placement: o,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), i = Ie(o), l = dt(o), d = je(o) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = r && d ? -1 : 1, p = Me(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: h
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
  return l && typeof h == "number" && (m = l === "end" ? h * -1 : h), d ? {
    x: m * c,
    y: f * u
  } : {
    x: f * u,
    y: m * c
  };
}
const Wr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: a,
        y: r,
        placement: i,
        middlewareData: l
      } = t, d = await jr(t, e);
      return i === ((o = l.offset) == null ? void 0 : o.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: a + d.x,
        y: r + d.y,
        data: {
          ...d,
          placement: i
        }
      };
    }
  };
}, Ur = function(e) {
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
        crossAxis: i = !1,
        limiter: l = {
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
      } = Me(e, t), u = {
        x: o,
        y: n
      }, c = await yt(t, d), p = je(Ie(a)), f = Po(p);
      let m = u[f], h = u[p];
      if (r) {
        const _ = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", O = m + c[_], B = m - c[C];
        m = mo(O, m, B);
      }
      if (i) {
        const _ = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", O = h + c[_], B = h - c[C];
        h = mo(O, h, B);
      }
      const y = l.fn({
        ...t,
        [f]: m,
        [p]: h
      });
      return {
        ...y,
        data: {
          x: y.x - o,
          y: y.y - n
        }
      };
    }
  };
}, Kr = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: n,
        placement: a,
        rects: r,
        middlewareData: i
      } = t, {
        offset: l = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = Me(e, t), c = {
        x: o,
        y: n
      }, p = je(a), f = Po(p);
      let m = c[f], h = c[p];
      const y = Me(l, t), _ = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (d) {
        const B = f === "y" ? "height" : "width", P = r.reference[f] - r.floating[B] + _.mainAxis, T = r.reference[f] + r.reference[B] - _.mainAxis;
        m < P ? m = P : m > T && (m = T);
      }
      if (u) {
        var C, O;
        const B = f === "y" ? "width" : "height", P = ["top", "left"].includes(Ie(a)), T = r.reference[p] - r.floating[B] + (P && ((C = i.offset) == null ? void 0 : C[p]) || 0) + (P ? 0 : _.crossAxis), R = r.reference[p] + r.reference[B] + (P ? 0 : ((O = i.offset) == null ? void 0 : O[p]) || 0) - (P ? _.crossAxis : 0);
        h < T ? h = T : h > R && (h = R);
      }
      return {
        [f]: m,
        [p]: h
      };
    }
  };
}, Hr = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: o,
        rects: n,
        platform: a,
        elements: r
      } = t, {
        apply: i = () => {
        },
        ...l
      } = Me(e, t), d = await yt(t, l), u = Ie(o), c = dt(o), p = je(o) === "y", {
        width: f,
        height: m
      } = n.floating;
      let h, y;
      u === "top" || u === "bottom" ? (h = u, y = c === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (y = u, h = c === "end" ? "top" : "bottom");
      const _ = m - d.top - d.bottom, C = f - d.left - d.right, O = Oe(m - d[h], _), B = Oe(f - d[y], C), P = !t.middlewareData.shift;
      let T = O, R = B;
      if (p ? R = c || P ? Oe(B, C) : C : T = c || P ? Oe(O, _) : _, P && !c) {
        const X = pe(d.left, 0), G = pe(d.right, 0), k = pe(d.top, 0), I = pe(d.bottom, 0);
        p ? R = f - 2 * (X !== 0 || G !== 0 ? X + G : pe(d.left, d.right)) : T = m - 2 * (k !== 0 || I !== 0 ? k + I : pe(d.top, d.bottom));
      }
      await i({
        ...t,
        availableWidth: R,
        availableHeight: T
      });
      const M = await a.getDimensions(r.floating);
      return f !== M.width || m !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Qe(e) {
  return So(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Fe(e) {
  var t;
  return (t = (So(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function So(e) {
  return e instanceof Node || e instanceof fe(e).Node;
}
function ye(e) {
  return e instanceof Element || e instanceof fe(e).Element;
}
function ke(e) {
  return e instanceof HTMLElement || e instanceof fe(e).HTMLElement;
}
function pn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof fe(e).ShadowRoot;
}
function xt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: a
  } = be(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(a);
}
function Gr(e) {
  return ["table", "td", "th"].includes(Qe(e));
}
function zt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Mo(e) {
  const t = Io(), o = ye(e) ? be(e) : e;
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function qr(e) {
  let t = We(e);
  for (; ke(t) && !lt(t); ) {
    if (Mo(t))
      return t;
    if (zt(t))
      return null;
    t = We(t);
  }
  return null;
}
function Io() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function lt(e) {
  return ["html", "body", "#document"].includes(Qe(e));
}
function be(e) {
  return fe(e).getComputedStyle(e);
}
function Vt(e) {
  return ye(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function We(e) {
  if (Qe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pn(e) && e.host || // Fallback.
    Fe(e)
  );
  return pn(t) ? t.host : t;
}
function aa(e) {
  const t = We(e);
  return lt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ke(t) && xt(t) ? t : aa(t);
}
function bt(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const a = aa(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), i = fe(a);
  if (r) {
    const l = go(i);
    return t.concat(i, i.visualViewport || [], xt(a) ? a : [], l && o ? bt(l) : []);
  }
  return t.concat(a, bt(a, [], o));
}
function go(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ra(e) {
  const t = be(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = ke(e), r = a ? e.offsetWidth : o, i = a ? e.offsetHeight : n, l = $t(o) !== r || $t(n) !== i;
  return l && (o = r, n = i), {
    width: o,
    height: n,
    $: l
  };
}
function Fo(e) {
  return ye(e) ? e : e.contextElement;
}
function st(e) {
  const t = Fo(e);
  if (!ke(t))
    return Ne(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: r
  } = ra(t);
  let i = (r ? $t(o.width) : o.width) / n, l = (r ? $t(o.height) : o.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
const Yr = /* @__PURE__ */ Ne(0);
function sa(e) {
  const t = fe(e);
  return !Io() || !t.visualViewport ? Yr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Xr(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== fe(e) ? !1 : t;
}
function Ze(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const a = e.getBoundingClientRect(), r = Fo(e);
  let i = Ne(1);
  t && (n ? ye(n) && (i = st(n)) : i = st(e));
  const l = Xr(r, o, n) ? sa(r) : Ne(0);
  let d = (a.left + l.x) / i.x, u = (a.top + l.y) / i.y, c = a.width / i.x, p = a.height / i.y;
  if (r) {
    const f = fe(r), m = n && ye(n) ? fe(n) : n;
    let h = f, y = go(h);
    for (; y && n && m !== h; ) {
      const _ = st(y), C = y.getBoundingClientRect(), O = be(y), B = C.left + (y.clientLeft + parseFloat(O.paddingLeft)) * _.x, P = C.top + (y.clientTop + parseFloat(O.paddingTop)) * _.y;
      d *= _.x, u *= _.y, c *= _.x, p *= _.y, d += B, u += P, h = fe(y), y = go(h);
    }
  }
  return Mt({
    width: c,
    height: p,
    x: d,
    y: u
  });
}
function Zr(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: a
  } = e;
  const r = a === "fixed", i = Fe(n), l = t ? zt(t.floating) : !1;
  if (n === i || l && r)
    return o;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ne(1);
  const c = Ne(0), p = ke(n);
  if ((p || !p && !r) && ((Qe(n) !== "body" || xt(i)) && (d = Vt(n)), ke(n))) {
    const f = Ze(n);
    u = st(n), c.x = f.x + n.clientLeft, c.y = f.y + n.clientTop;
  }
  return {
    width: o.width * u.x,
    height: o.height * u.y,
    x: o.x * u.x - d.scrollLeft * u.x + c.x,
    y: o.y * u.y - d.scrollTop * u.y + c.y
  };
}
function Qr(e) {
  return Array.from(e.getClientRects());
}
function ia(e) {
  return Ze(Fe(e)).left + Vt(e).scrollLeft;
}
function Jr(e) {
  const t = Fe(e), o = Vt(e), n = e.ownerDocument.body, a = pe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = pe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -o.scrollLeft + ia(e);
  const l = -o.scrollTop;
  return be(n).direction === "rtl" && (i += pe(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: r,
    x: i,
    y: l
  };
}
function es(e, t) {
  const o = fe(e), n = Fe(e), a = o.visualViewport;
  let r = n.clientWidth, i = n.clientHeight, l = 0, d = 0;
  if (a) {
    r = a.width, i = a.height;
    const u = Io();
    (!u || u && t === "fixed") && (l = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: r,
    height: i,
    x: l,
    y: d
  };
}
function ts(e, t) {
  const o = Ze(e, !0, t === "fixed"), n = o.top + e.clientTop, a = o.left + e.clientLeft, r = ke(e) ? st(e) : Ne(1), i = e.clientWidth * r.x, l = e.clientHeight * r.y, d = a * r.x, u = n * r.y;
  return {
    width: i,
    height: l,
    x: d,
    y: u
  };
}
function fn(e, t, o) {
  let n;
  if (t === "viewport")
    n = es(e, o);
  else if (t === "document")
    n = Jr(Fe(e));
  else if (ye(t))
    n = ts(t, o);
  else {
    const a = sa(e);
    n = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return Mt(n);
}
function la(e, t) {
  const o = We(e);
  return o === t || !ye(o) || lt(o) ? !1 : be(o).position === "fixed" || la(o, t);
}
function os(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = bt(e, [], !1).filter((l) => ye(l) && Qe(l) !== "body"), a = null;
  const r = be(e).position === "fixed";
  let i = r ? We(e) : e;
  for (; ye(i) && !lt(i); ) {
    const l = be(i), d = Mo(i);
    !d && l.position === "fixed" && (a = null), (r ? !d && !a : !d && l.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || xt(i) && !d && la(e, i)) ? n = n.filter((c) => c !== i) : a = l, i = We(i);
  }
  return t.set(e, n), n;
}
function ns(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: a
  } = e;
  const i = [...o === "clippingAncestors" ? zt(t) ? [] : os(t, this._c) : [].concat(o), n], l = i[0], d = i.reduce((u, c) => {
    const p = fn(t, c, a);
    return u.top = pe(p.top, u.top), u.right = Oe(p.right, u.right), u.bottom = Oe(p.bottom, u.bottom), u.left = pe(p.left, u.left), u;
  }, fn(t, l, a));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function as(e) {
  const {
    width: t,
    height: o
  } = ra(e);
  return {
    width: t,
    height: o
  };
}
function rs(e, t, o) {
  const n = ke(t), a = Fe(t), r = o === "fixed", i = Ze(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ne(0);
  if (n || !n && !r)
    if ((Qe(t) !== "body" || xt(a)) && (l = Vt(t)), n) {
      const p = Ze(t, !0, r, t);
      d.x = p.x + t.clientLeft, d.y = p.y + t.clientTop;
    } else a && (d.x = ia(a));
  const u = i.left + l.scrollLeft - d.x, c = i.top + l.scrollTop - d.y;
  return {
    x: u,
    y: c,
    width: i.width,
    height: i.height
  };
}
function oo(e) {
  return be(e).position === "static";
}
function mn(e, t) {
  return !ke(e) || be(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function da(e, t) {
  const o = fe(e);
  if (zt(e))
    return o;
  if (!ke(e)) {
    let a = We(e);
    for (; a && !lt(a); ) {
      if (ye(a) && !oo(a))
        return a;
      a = We(a);
    }
    return o;
  }
  let n = mn(e, t);
  for (; n && Gr(n) && oo(n); )
    n = mn(n, t);
  return n && lt(n) && oo(n) && !Mo(n) ? o : n || qr(e) || o;
}
const ss = async function(e) {
  const t = this.getOffsetParent || da, o = this.getDimensions, n = await o(e.floating);
  return {
    reference: rs(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function is(e) {
  return be(e).direction === "rtl";
}
const ls = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zr,
  getDocumentElement: Fe,
  getClippingRect: ns,
  getOffsetParent: da,
  getElementRects: ss,
  getClientRects: Qr,
  getDimensions: as,
  getScale: st,
  isElement: ye,
  isRTL: is
};
function ds(e, t) {
  let o = null, n;
  const a = Fe(e);
  function r() {
    var l;
    clearTimeout(n), (l = o) == null || l.disconnect(), o = null;
  }
  function i(l, d) {
    l === void 0 && (l = !1), d === void 0 && (d = 1), r();
    const {
      left: u,
      top: c,
      width: p,
      height: f
    } = e.getBoundingClientRect();
    if (l || t(), !p || !f)
      return;
    const m = kt(c), h = kt(a.clientWidth - (u + p)), y = kt(a.clientHeight - (c + f)), _ = kt(u), O = {
      rootMargin: -m + "px " + -h + "px " + -y + "px " + -_ + "px",
      threshold: pe(0, Oe(1, d)) || 1
    };
    let B = !0;
    function P(T) {
      const R = T[0].intersectionRatio;
      if (R !== d) {
        if (!B)
          return i();
        R ? i(!1, R) : n = setTimeout(() => {
          i(!1, 1e-7);
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
  return i(!0), r;
}
function us(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = Fo(e), c = a || r ? [...u ? bt(u) : [], ...bt(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", o, {
      passive: !0
    }), r && C.addEventListener("resize", o);
  });
  const p = u && l ? ds(u, o) : null;
  let f = -1, m = null;
  i && (m = new ResizeObserver((C) => {
    let [O] = C;
    O && O.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var B;
      (B = m) == null || B.observe(t);
    })), o();
  }), u && !d && m.observe(u), m.observe(t));
  let h, y = d ? Ze(e) : null;
  d && _();
  function _() {
    const C = Ze(e);
    y && (C.x !== y.x || C.y !== y.y || C.width !== y.width || C.height !== y.height) && o(), y = C, h = requestAnimationFrame(_);
  }
  return o(), () => {
    var C;
    c.forEach((O) => {
      a && O.removeEventListener("scroll", o), r && O.removeEventListener("resize", o);
    }), p == null || p(), (C = m) == null || C.disconnect(), m = null, d && cancelAnimationFrame(h);
  };
}
const cs = Wr, ps = Ur, vn = Vr, fs = Hr, ms = Nr, vs = zr, gs = Kr, hs = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: ls,
    ...o
  }, r = {
    ...a.platform,
    _c: n
  };
  return Lr(e, t, {
    ...a,
    platform: r
  });
};
function ys(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function ho(e) {
  if (ys(e)) {
    const t = e.$el;
    return So(t) && Qe(t) === "#comment" ? null : t;
  }
  return e;
}
function nt(e) {
  return typeof e == "function" ? e() : s(e);
}
function bs(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = ho(nt(e.element));
      return o == null ? {} : vs({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function ua(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gn(e, t) {
  const o = ua(e);
  return Math.round(t * o) / o;
}
function ws(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, a = D(() => {
    var M;
    return (M = nt(o.open)) != null ? M : !0;
  }), r = D(() => nt(o.middleware)), i = D(() => {
    var M;
    return (M = nt(o.placement)) != null ? M : "bottom";
  }), l = D(() => {
    var M;
    return (M = nt(o.strategy)) != null ? M : "absolute";
  }), d = D(() => {
    var M;
    return (M = nt(o.transform)) != null ? M : !0;
  }), u = D(() => ho(e.value)), c = D(() => ho(t.value)), p = E(0), f = E(0), m = E(l.value), h = E(i.value), y = Rn({}), _ = E(!1), C = D(() => {
    const M = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const X = gn(c.value, p.value), G = gn(c.value, f.value);
    return d.value ? {
      ...M,
      transform: "translate(" + X + "px, " + G + "px)",
      ...ua(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: X + "px",
      top: G + "px"
    };
  });
  let O;
  function B() {
    u.value == null || c.value == null || hs(u.value, c.value, {
      middleware: r.value,
      placement: i.value,
      strategy: l.value
    }).then((M) => {
      p.value = M.x, f.value = M.y, m.value = M.strategy, h.value = M.placement, y.value = M.middlewareData, _.value = !0;
    });
  }
  function P() {
    typeof O == "function" && (O(), O = void 0);
  }
  function T() {
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
  return Z([r, i, l], B, {
    flush: "sync"
  }), Z([u, c], T, {
    flush: "sync"
  }), Z(a, R, {
    flush: "sync"
  }), Ln() && zn(P), {
    x: tt(p),
    y: tt(f),
    strategy: tt(m),
    placement: tt(h),
    middlewareData: tt(y),
    isPositioned: tt(_),
    floatingStyles: C,
    update: B
  };
}
function oe(e, t) {
  const o = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(o);
  return [(a) => {
    const r = Un(n, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Kn(n, a), a)];
}
function Ro(e, t, o) {
  const n = o.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function xs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _s = function e(t, o) {
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
      var i = r[a];
      if (!e(t[i], o[i])) return !1;
    }
    return !0;
  }
  return t !== t && o !== o;
};
const Xe = /* @__PURE__ */ xs(_s);
function Cs(e, t) {
  var o;
  const n = Rn();
  return ue(() => {
    n.value = e();
  }, {
    ...t,
    flush: (o = void 0) != null ? o : "sync"
  }), Do(n);
}
function ut(e) {
  return Ln() ? (zn(e), !0) : !1;
}
function Os(e) {
  let t = !1, o;
  const n = jn(!0);
  return (...a) => (t || (o = n.run(() => e(...a)), t = !0), o);
}
function ca(e) {
  let t = 0, o, n;
  const a = () => {
    t -= 1, n && t <= 0 && (n.stop(), o = void 0, n = void 0);
  };
  return (...r) => (t += 1, o || (n = jn(!0), o = n.run(() => e(...r))), ut(a), o);
}
function Se(e) {
  return typeof e == "function" ? e() : s(e);
}
const Be = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ks = (e) => typeof e < "u", Bs = (e) => e != null, Ds = Object.prototype.toString, Es = (e) => Ds.call(e) === "[object Object]", pa = () => {
}, hn = /* @__PURE__ */ As();
function As() {
  var e, t;
  return Be && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Ps(e) {
  return Ue();
}
function Ts(e, t = 1e4) {
  return lr((o, n) => {
    let a = Se(e), r;
    const i = () => setTimeout(() => {
      a = Se(e), n();
    }, Se(t));
    return ut(() => {
      clearTimeout(r);
    }), {
      get() {
        return o(), a;
      },
      set(l) {
        a = l, n(), clearTimeout(r), r = i();
      }
    };
  });
}
function $s(e, t) {
  Ps() && ir(e, t);
}
function Ss(e, t, o = {}) {
  const {
    immediate: n = !0
  } = o, a = E(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), r = null);
  }
  function l() {
    a.value = !1, i();
  }
  function d(...u) {
    i(), a.value = !0, r = setTimeout(() => {
      a.value = !1, r = null, e(...u);
    }, Se(t));
  }
  return n && (a.value = !0, Be && d()), ut(l), {
    isPending: Do(a),
    start: d,
    stop: l
  };
}
function Ms(e = 1e3, t = {}) {
  const {
    controls: o = !1,
    callback: n
  } = t, a = Ss(
    n ?? pa,
    e,
    t
  ), r = D(() => !a.isPending.value);
  return o ? {
    ready: r,
    ...a
  } : r;
}
function we(e) {
  var t;
  const o = Se(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const Nt = Be ? window : void 0;
function It(...e) {
  let t, o, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, a] = e, t = Nt) : [t, o, n, a] = e, !t)
    return pa;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const r = [], i = () => {
    r.forEach((c) => c()), r.length = 0;
  }, l = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), d = Z(
    () => [we(t), Se(a)],
    ([c, p]) => {
      if (i(), !c)
        return;
      const f = Es(p) ? { ...p } : p;
      r.push(
        ...o.flatMap((m) => n.map((h) => l(c, m, h, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    d(), i();
  };
  return ut(u), u;
}
function Is(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Lo(...e) {
  let t, o, n = {};
  e.length === 3 ? (t = e[0], o = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], n = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: a = Nt,
    eventName: r = "keydown",
    passive: i = !1,
    dedupe: l = !1
  } = n, d = Is(t);
  return It(a, r, (u) => {
    u.repeat && Se(l) || d(u) && o(u);
  }, i);
}
function fa() {
  const e = E(!1), t = Ue();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function Fs(e) {
  const t = fa();
  return D(() => (t.value, !!e()));
}
function Rs(e, t, o = {}) {
  const { window: n = Nt, ...a } = o;
  let r;
  const i = Fs(() => n && "MutationObserver" in n), l = () => {
    r && (r.disconnect(), r = void 0);
  }, d = D(() => {
    const f = Se(e), m = (Array.isArray(f) ? f : [f]).map(we).filter(Bs);
    return new Set(m);
  }), u = Z(
    () => d.value,
    (f) => {
      l(), i.value && f.size && (r = new MutationObserver(t), f.forEach((m) => r.observe(m, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    l(), u();
  };
  return ut(p), {
    isSupported: i,
    stop: p,
    takeRecords: c
  };
}
function ma(e, t = {}) {
  const {
    immediate: o = !0,
    fpsLimit: n = void 0,
    window: a = Nt
  } = t, r = E(!1), i = n ? 1e3 / n : null;
  let l = 0, d = null;
  function u(f) {
    if (!r.value || !a)
      return;
    l || (l = f);
    const m = f - l;
    if (i && m < i) {
      d = a.requestAnimationFrame(u);
      return;
    }
    l = f, e({ delta: m, timestamp: f }), d = a.requestAnimationFrame(u);
  }
  function c() {
    !r.value && a && (r.value = !0, l = 0, d = a.requestAnimationFrame(u));
  }
  function p() {
    r.value = !1, d != null && a && (a.cancelAnimationFrame(d), d = null);
  }
  return o && c(), ut(p), {
    isActive: Do(r),
    pause: p,
    resume: c
  };
}
function Ls(e) {
  return JSON.parse(JSON.stringify(e));
}
function le(e, t, o, n = {}) {
  var a, r, i;
  const {
    clone: l = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = n, m = Ue(), h = o || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((i = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
  let y = u;
  t || (t = "modelValue"), y = y || `update:${t.toString()}`;
  const _ = (B) => l ? typeof l == "function" ? l(B) : Ls(B) : B, C = () => ks(e[t]) ? _(e[t]) : p, O = (B) => {
    f ? f(B) && h(y, B) : h(y, B);
  };
  if (d) {
    const B = C(), P = E(B);
    let T = !1;
    return Z(
      () => e[t],
      (R) => {
        T || (T = !0, P.value = _(R), te(() => T = !1));
      }
    ), Z(
      P,
      (R) => {
        !T && (R !== e[t] || c) && O(R);
      },
      { deep: c }
    ), P;
  } else
    return D({
      get() {
        return C();
      },
      set(B) {
        O(B);
      }
    });
}
function zo(e) {
  return e ? e.flatMap((t) => t.type === _e ? zo(t.children) : [t]) : [];
}
const zs = ["INPUT", "TEXTAREA"];
function Vs(e, t, o, n = {}) {
  if (!t || n.enableIgnoredElement && zs.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: i = [],
    loop: l = !0,
    dir: d = "ltr",
    preventScroll: u = !0,
    focus: c = !1
  } = n, [p, f, m, h, y, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = m || h, O = p || f;
  if (!y && !_ && (!C && !O || a === "vertical" && O || a === "horizontal" && C))
    return null;
  const B = o ? Array.from(o.querySelectorAll(r)) : i;
  if (!B.length)
    return null;
  u && e.preventDefault();
  let P = null;
  return O || C ? P = va(B, t, {
    goForward: C ? h : d === "ltr" ? p : f,
    loop: l
  }) : y ? P = B.at(0) || null : _ && (P = B.at(-1) || null), c && (P == null || P.focus()), P;
}
function va(e, t, o, n = e.length) {
  if (--n === 0)
    return null;
  const a = e.indexOf(t), r = o.goForward ? a + 1 : a - 1;
  if (!o.loop && (r < 0 || r >= e.length))
    return null;
  const i = (r + e.length) % e.length, l = e[i];
  return l ? l.hasAttribute("disabled") && l.getAttribute("disabled") !== "false" ? va(
    e,
    l,
    o,
    n
  ) : l : null;
}
function no(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function yo(e, t, o = ".", n) {
  if (!no(t))
    return yo(e, {}, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const i = e[r];
    i != null && (Array.isArray(i) && Array.isArray(a[r]) ? a[r] = [...i, ...a[r]] : no(i) && no(a[r]) ? a[r] = yo(
      i,
      a[r],
      (o ? `${o}.` : "") + r.toString()
    ) : a[r] = i);
  }
  return a;
}
function Ns(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((o, n) => yo(o, n, ""), {})
  );
}
const js = Ns(), [Vo, oc] = oe("ConfigProvider");
let Ws = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Us = (e = 21) => {
  let t = "", o = e;
  for (; o--; )
    t += Ws[Math.random() * 64 | 0];
  return t;
};
const Ks = ca(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), o = D(() => {
    for (const i of e.value.values())
      if (i)
        return !0;
    return !1;
  }), n = Vo({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", hn && (a == null || a()), t.value = void 0;
  };
  return Z(o, (i, l) => {
    var d;
    if (!Be)
      return;
    if (!i) {
      l && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, c = { padding: u, margin: 0 }, p = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? js({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), hn && (a = It(
      document,
      "touchmove",
      (f) => {
        var m;
        f.target === document.documentElement && (f.touches.length > 1 || (m = f.preventDefault) == null || m.call(f));
      },
      { passive: !1 }
    )), te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function jt(e) {
  const t = Us(6), o = Ks();
  o.value.set(t, e ?? !1);
  const n = D({
    get: () => o.value.get(t) ?? !1,
    set: (a) => o.value.set(t, a)
  });
  return $s(() => {
    o.value.delete(t);
  }), n;
}
const Hs = "data-radix-vue-collection-item";
function ga(e, t = Hs) {
  const o = Symbol();
  return { createCollection: (n) => {
    const a = E([]);
    function r() {
      const i = we(n);
      return i ? a.value = Array.from(
        i.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return ar(() => {
      a.value = [];
    }), ie(r), rr(r), Z(() => n == null ? void 0 : n.value, r, { immediate: !0 }), Kn(o, a), a;
  }, injectCollection: () => Un(o, E([])) };
}
function Wt(e) {
  const t = Vo({
    dir: E("ltr")
  });
  return D(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function He(e) {
  const t = Ue(), o = t == null ? void 0 : t.type.emits, n = {};
  return o != null && o.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), o == null || o.forEach((a) => {
    n[nr(Vn(a))] = (...r) => e(a, ...r);
  }), n;
}
let ao = 0;
function ha() {
  ue((e) => {
    if (!Be)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? yn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? yn()
    ), ao++, e(() => {
      ao === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), ao--;
    });
  });
}
function yn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function ya(e) {
  return D(() => {
    var t;
    return Se(e) ? !!((t = we(e)) != null && t.closest("form")) : !0;
  });
}
function De(e) {
  const t = Ue(), o = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const i = (t == null ? void 0 : t.type.props[r]).default;
    return i !== void 0 && (a[r] = i), a;
  }, {}), n = Za(e);
  return D(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((i) => {
      a[Vn(i)] = r[i];
    }), Object.keys({ ...o, ...a }).reduce((i, l) => (n.value[l] !== void 0 && (i[l] = n.value[l]), i), {});
  });
}
function q(e, t) {
  const o = De(e), n = t ? He(t) : {};
  return D(() => ({
    ...o.value,
    ...n
  }));
}
function S() {
  const e = Ue(), t = E(), o = D(() => {
    var i, l;
    return ["#text", "#comment"].includes((i = t.value) == null ? void 0 : i.$el.nodeName) ? (l = t.value) == null ? void 0 : l.$el.nextElementSibling : we(t);
  }), n = Object.assign({}, e.exposed), a = {};
  for (const i in e.props)
    Object.defineProperty(a, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i]
    });
  if (Object.keys(n).length > 0)
    for (const i in n)
      Object.defineProperty(a, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i]
      });
  Object.defineProperty(a, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = a;
  function r(i) {
    t.value = i, !(i instanceof Element || !i) && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i.$el
    }), e.exposed = a);
  }
  return { forwardRef: r, currentRef: t, currentElement: o };
}
var Gs = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ot = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Dt = {}, ro = 0, ba = function(e) {
  return e && (e.host || ba(e.parentNode));
}, qs = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var n = ba(o);
    return n && e.contains(n) ? n : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Ys = function(e, t, o, n) {
  var a = qs(t, Array.isArray(e) ? e : [e]);
  Dt[o] || (Dt[o] = /* @__PURE__ */ new WeakMap());
  var r = Dt[o], i = [], l = /* @__PURE__ */ new Set(), d = new Set(a), u = function(p) {
    !p || l.has(p) || (l.add(p), u(p.parentNode));
  };
  a.forEach(u);
  var c = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (l.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(n), h = m !== null && m !== "false", y = (ot.get(f) || 0) + 1, _ = (r.get(f) || 0) + 1;
          ot.set(f, y), r.set(f, _), i.push(f), y === 1 && h && Bt.set(f, !0), _ === 1 && f.setAttribute(o, "true"), h || f.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return c(t), l.clear(), ro++, function() {
    i.forEach(function(p) {
      var f = ot.get(p) - 1, m = r.get(p) - 1;
      ot.set(p, f), r.set(p, m), f || (Bt.has(p) || p.removeAttribute(n), Bt.delete(p)), m || p.removeAttribute(o);
    }), ro--, ro || (ot = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Dt = {});
  };
}, Xs = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = Gs(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), Ys(n, a, o, "aria-hidden")) : function() {
    return null;
  };
};
function Ut(e) {
  let t;
  Z(() => we(e), (o) => {
    o ? t = Xs(o) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let Zs = 0;
function me(e, t = "radix") {
  const { useId: o } = Vo({ useId: void 0 });
  return o && typeof o == "function" ? `${t}-${o()}` : `${t}-${++Zs}`;
}
function Qs(e) {
  const t = E(), o = D(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = D(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
    const a = we(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const l = i[0];
        let d, u;
        if ("borderBoxSize" in l) {
          const c = l.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          d = p.inlineSize, u = p.blockSize;
        } else
          d = a.offsetWidth, u = a.offsetHeight;
        t.value = { width: d, height: u };
      });
      return r.observe(a, { box: "border-box" }), () => r.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: o,
    height: n
  };
}
function Js(e, t) {
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
function ei(e) {
  const t = Ts("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, n) => {
      var a, r;
      if (!(e != null && e.value) && !n)
        return;
      t.value = t.value + o;
      const i = (e == null ? void 0 : e.value) ?? n, l = document.activeElement, d = ((r = (a = i.find((f) => f === l)) == null ? void 0 : a.textContent) == null ? void 0 : r.trim()) ?? "", u = i.map((f) => {
        var m;
        return ((m = f.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = oi(u, t.value, d), p = i.find(
        (f) => {
          var m;
          return ((m = f.textContent) == null ? void 0 : m.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function ti(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
function oi(e, t, o) {
  const n = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = o ? e.indexOf(o) : -1;
  let r = ti(e, Math.max(a, 0));
  n.length === 1 && (r = r.filter((l) => l !== o));
  const i = r.find(
    (l) => l.toLowerCase().startsWith(n.toLowerCase())
  );
  return i !== o ? i : void 0;
}
const No = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      var n, a;
      if (!o.default)
        return null;
      const r = zo(o.default()), i = r.findIndex((c) => c.type !== Qa);
      if (i === -1)
        return r;
      const l = r[i];
      (n = l.props) == null || delete n.ref;
      const d = l.props ? A(t, l.props) : t;
      t.class && (a = l.props) != null && a.class && delete l.props.class;
      const u = Ja(l, d);
      for (const c in d)
        c.startsWith("on") && (u.props || (u.props = {}), u.props[c] = d[c]);
      return r.length === 1 ? u : (r[i] = u, r);
    };
  }
}), N = w({
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
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => at(n, t) : n !== "template" ? () => at(e.as, t, { default: o.default }) : () => at(No, t, { default: o.default });
  }
});
function wa() {
  const e = E(), t = D(() => {
    var o, n;
    return ["#text", "#comment"].includes((o = e.value) == null ? void 0 : o.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : we(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function ni(e, t) {
  const o = E({}), n = E("none"), a = e.value ? "mounted" : "unmounted", { state: r, dispatch: i } = Js(a, {
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
  }), l = (f) => {
    var m;
    if (Be) {
      const h = new CustomEvent(f, { bubbles: !1, cancelable: !1 });
      (m = t.value) == null || m.dispatchEvent(h);
    }
  };
  Z(
    e,
    async (f, m) => {
      var h;
      const y = m !== f;
      if (await te(), y) {
        const _ = n.value, C = Et(t.value);
        f ? (i("MOUNT"), l("enter"), C === "none" && l("after-enter")) : C === "none" || ((h = o.value) == null ? void 0 : h.display) === "none" ? (i("UNMOUNT"), l("leave"), l("after-leave")) : m && _ !== C ? (i("ANIMATION_OUT"), l("leave")) : (i("UNMOUNT"), l("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (f) => {
    const m = Et(t.value), h = m.includes(
      f.animationName
    ), y = r.value === "mounted" ? "enter" : "leave";
    f.target === t.value && h && (l(`after-${y}`), i("ANIMATION_END")), f.target === t.value && m === "none" && i("ANIMATION_END");
  }, u = (f) => {
    f.target === t.value && (n.value = Et(t.value));
  }, c = Z(
    t,
    (f, m) => {
      f ? (o.value = getComputedStyle(f), f.addEventListener("animationstart", u), f.addEventListener("animationcancel", d), f.addEventListener("animationend", d)) : (i("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", d), m == null || m.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = Z(r, () => {
    const f = Et(t.value);
    n.value = r.value === "mounted" ? f : "none";
  });
  return Ke(() => {
    c(), p();
  }), {
    isPresent: D(
      () => ["mounted", "unmountSuspended"].includes(r.value)
    )
  };
}
function Et(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ge = w({
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
    const { present: a, forceMount: r } = de(e), i = E(), { isPresent: l } = ni(a, i);
    o({ present: l });
    let d = t.default({ present: l });
    d = zo(d || []);
    const u = Ue();
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
    return () => r.value || a.value || l.value ? at(t.default({ present: l })[0], {
      ref: (c) => {
        const p = we(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? i.value = p.firstElementChild : i.value = p), p;
      }
    }) : null;
  }
}), [Ee, ai] = oe("DialogRoot"), jo = /* @__PURE__ */ w({
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
    }), a = E(), r = E(), { modal: i } = de(o);
    return ai({
      open: n,
      modal: i,
      openModal: () => {
        n.value = !0;
      },
      onOpenChange: (l) => {
        n.value = l;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: a,
      contentElement: r
    }), (l, d) => x(l.$slots, "default", { open: s(n) });
  }
}), Wo = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Ee(), { forwardRef: n, currentElement: a } = S();
    return o.contentId || (o.contentId = me(void 0, "radix-vue-dialog-content")), ie(() => {
      o.triggerElement.value = a.value;
    }), (r, i) => (v(), b(s(N), A(t, {
      ref: s(n),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(o).open.value || !1,
      "aria-controls": s(o).open.value ? s(o).contentId : void 0,
      "data-state": s(o).open.value ? "open" : "closed",
      onClick: s(o).onOpenToggle
    }), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Kt = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = fa();
    return (o, n) => s(t) || o.forceMount ? (v(), b(Wn, {
      key: 0,
      to: o.to,
      disabled: o.disabled
    }, [
      x(o.$slots, "default")
    ], 8, ["to", "disabled"])) : re("", !0);
  }
}), Uo = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Kt), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ri = "dismissableLayer.pointerDownOutside", si = "dismissableLayer.focusOutside";
function xa(e, t) {
  const o = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(o && n === o || a.indexOf(n) < a.indexOf(o));
}
function ii(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return ue((i) => {
    if (!Be)
      return;
    const l = async (u) => {
      const c = u.target;
      if (t != null && t.value) {
        if (xa(t.value, c)) {
          a.value = !1;
          return;
        }
        if (u.target && !a.value) {
          let p = function() {
            Ro(
              ri,
              e,
              f
            );
          };
          const f = { originalEvent: u };
          u.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = p, n.addEventListener("click", r.value, {
            once: !0
          })) : p();
        } else
          n.removeEventListener("click", r.value);
        a.value = !1;
      }
    }, d = window.setTimeout(() => {
      n.addEventListener("pointerdown", l);
    }, 0);
    i(() => {
      window.clearTimeout(d), n.removeEventListener("pointerdown", l), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => a.value = !0
  };
}
function li(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return ue((r) => {
    if (!Be)
      return;
    const i = async (l) => {
      t != null && t.value && (await te(), !(!t.value || xa(t.value, l.target)) && l.target && !a.value && Ro(
        si,
        e,
        { originalEvent: l }
      ));
    };
    n.addEventListener("focusin", i), r(() => n.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => a.value = !0,
    onBlurCapture: () => a.value = !1
  };
}
const ge = Nn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ht = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: r } = S(), i = D(
      () => {
        var h;
        return ((h = r.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), l = D(() => ge.layersRoot), d = D(() => r.value ? Array.from(l.value).indexOf(r.value) : -1), u = D(() => ge.layersWithOutsidePointerEventsDisabled.size > 0), c = D(() => {
      const h = Array.from(l.value), [y] = [...ge.layersWithOutsidePointerEventsDisabled].slice(-1), _ = h.indexOf(y);
      return d.value >= _;
    }), p = ii(async (h) => {
      const y = [...ge.branches].some(
        (_) => _.contains(h.target)
      );
      !c.value || y || (n("pointerDownOutside", h), n("interactOutside", h), await te(), h.defaultPrevented || n("dismiss"));
    }, r), f = li((h) => {
      [...ge.branches].some(
        (y) => y.contains(h.target)
      ) || (n("focusOutside", h), n("interactOutside", h), h.defaultPrevented || n("dismiss"));
    }, r);
    Lo("Escape", (h) => {
      d.value === l.value.size - 1 && (n("escapeKeyDown", h), h.defaultPrevented || n("dismiss"));
    });
    let m;
    return ue((h) => {
      r.value && (o.disableOutsidePointerEvents && (ge.layersWithOutsidePointerEventsDisabled.size === 0 && (m = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), ge.layersWithOutsidePointerEventsDisabled.add(r.value)), l.value.add(r.value), h(() => {
        o.disableOutsidePointerEvents && ge.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = m);
      }));
    }), ue((h) => {
      h(() => {
        r.value && (l.value.delete(r.value), ge.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (h, y) => (v(), b(s(N), {
      ref: s(a),
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: Bo({
        pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(f).onFocusCapture,
      onBlurCapture: s(f).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: g(() => [
        x(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), di = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = S();
    return ie(() => {
      ge.branches.add(n.value);
    }), Ke(() => {
      ge.branches.delete(n.value);
    }), (a, r) => (v(), b(s(N), A({ ref: s(o) }, t), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), so = "focusScope.autoFocusOnMount", io = "focusScope.autoFocusOnUnmount", bn = { bubbles: !1, cancelable: !0 };
function Tt(e, { select: t = !1 } = {}) {
  const o = document.activeElement;
  for (const n of e)
    if (Ve(n, { select: t }), document.activeElement !== o)
      return !0;
}
function ui(e) {
  const t = Ko(e), o = wn(t, e), n = wn(t.reverse(), e);
  return [o, n];
}
function Ko(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function wn(e, t) {
  for (const o of e)
    if (!ci(o, { upTo: t }))
      return o;
}
function ci(e, { upTo: t }) {
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
function pi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && pi(e) && t && e.select();
  }
}
const fi = Os(() => E([]));
function mi() {
  const e = fi();
  return {
    add(t) {
      const o = e.value[0];
      t !== o && (o == null || o.pause()), e.value = xn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var o;
      e.value = xn(e.value, t), (o = e.value[0]) == null || o.resume();
    }
  };
}
function xn(e, t) {
  const o = [...e], n = o.indexOf(t);
  return n !== -1 && o.splice(n, 1), o;
}
function vi(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ho = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, { currentRef: a, currentElement: r } = S(), i = E(null), l = mi(), d = Nn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ue((c) => {
      if (!Be)
        return;
      const p = r.value;
      if (!o.trapped)
        return;
      function f(_) {
        if (d.paused || !p)
          return;
        const C = _.target;
        p.contains(C) ? i.value = C : Ve(i.value, { select: !0 });
      }
      function m(_) {
        if (d.paused || !p)
          return;
        const C = _.relatedTarget;
        C !== null && (p.contains(C) || Ve(i.value, { select: !0 }));
      }
      function h(_) {
        p.contains(i.value) || Ve(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const y = new MutationObserver(h);
      p && y.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), y.disconnect();
      });
    }), ue(async (c) => {
      const p = r.value;
      if (await te(), !p)
        return;
      l.add(d);
      const f = document.activeElement;
      if (!p.contains(f)) {
        const m = new CustomEvent(so, bn);
        p.addEventListener(so, (h) => n("mountAutoFocus", h)), p.dispatchEvent(m), m.defaultPrevented || (Tt(vi(Ko(p)), {
          select: !0
        }), document.activeElement === f && Ve(p));
      }
      c(() => {
        p.removeEventListener(so, (y) => n("mountAutoFocus", y));
        const m = new CustomEvent(io, bn), h = (y) => {
          n("unmountAutoFocus", y);
        };
        p.addEventListener(io, h), p.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ve(f ?? document.body, { select: !0 }), p.removeEventListener(io, h), l.remove(d);
        }, 0);
      });
    });
    function u(c) {
      if (!o.loop && !o.trapped || d.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = document.activeElement;
      if (p && f) {
        const m = c.currentTarget, [h, y] = ui(m);
        h && y ? !c.shiftKey && f === y ? (c.preventDefault(), o.loop && Ve(h, { select: !0 })) : c.shiftKey && f === h && (c.preventDefault(), o.loop && Ve(y, { select: !0 })) : f === m && c.preventDefault();
      }
    }
    return (c, p) => (v(), b(s(N), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: u
    }, {
      default: g(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), gi = "menu.itemSelect", bo = ["Enter", " "], hi = ["ArrowDown", "PageUp", "Home"], _a = ["ArrowUp", "PageDown", "End"], yi = [...hi, ..._a], bi = {
  ltr: [...bo, "ArrowRight"],
  rtl: [...bo, "ArrowLeft"]
}, wi = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Go(e) {
  return e ? "open" : "closed";
}
function Ft(e) {
  return e === "indeterminate";
}
function qo(e) {
  return Ft(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function xi(e) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus(), document.activeElement !== t))
      return;
}
function _i(e, t) {
  const { x: o, y: n } = e;
  let a = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const l = t[r].x, d = t[r].y, u = t[i].x, c = t[i].y;
    d > n != c > n && o < (u - l) * (n - d) / (c - d) + l && (a = !a);
  }
  return a;
}
function Ci(e, t) {
  if (!t)
    return !1;
  const o = { x: e.clientX, y: e.clientY };
  return _i(o, t);
}
function wt(e) {
  return e.pointerType === "mouse";
}
const Oi = "DialogTitle", ki = "DialogContent";
function Bi({
  titleName: e = Oi,
  contentName: t = ki,
  componentLink: o = "dialog.html#title",
  titleId: n,
  descriptionId: a,
  contentElement: r
}) {
  const i = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${o}`, l = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ie(() => {
    var d;
    document.getElementById(n) || console.warn(i);
    const u = (d = r.value) == null ? void 0 : d.getAttribute("aria-describedby");
    a && !u && (document.getElementById(a) || console.warn(l));
  });
}
const Ca = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Ee(), { forwardRef: r, currentElement: i } = S();
    return a.titleId || (a.titleId = me(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = me(void 0, "radix-vue-dialog-description")), ie(() => {
      a.contentElement = i, document.activeElement !== document.body && (a.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && Bi({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: a.contentElement
    }), (l, d) => (v(), b(s(Ho), {
      "as-child": "",
      loop: "",
      trapped: o.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: g(() => [
        L(s(Ht), A({
          id: s(a).contentId,
          ref: s(r),
          as: l.as,
          "as-child": l.asChild,
          "disable-outside-pointer-events": l.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(Go)(s(a).open.value)
        }, l.$attrs, {
          onDismiss: d[0] || (d[0] = (u) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: d[1] || (d[1] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[2] || (d[2] = (u) => n("focusOutside", u)),
          onInteractOutside: d[3] || (d[3] = (u) => n("interactOutside", u)),
          onPointerDownOutside: d[4] || (d[4] = (u) => n("pointerDownOutside", u))
        }), {
          default: g(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Di = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Ee(), r = He(n), { forwardRef: i, currentElement: l } = S();
    return Ut(l), (d, u) => (v(), b(Ca, A({ ...o, ...s(r) }, {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(a).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: u[1] || (u[1] = (c) => {
        const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || f) && c.preventDefault();
      }),
      onFocusOutside: u[2] || (u[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: g(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ei = /* @__PURE__ */ w({
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
    const o = e, n = He(t);
    S();
    const a = Ee(), r = E(!1), i = E(!1);
    return (l, d) => (v(), b(Ca, A({ ...o, ...s(n) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (u) => {
        var c;
        u.defaultPrevented || (r.value || (c = s(a).triggerElement.value) == null || c.focus(), u.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (u) => {
        var c;
        u.defaultPrevented || (r.value = !0, u.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = u.target;
        (c = s(a).triggerElement.value) != null && c.contains(p) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && i.value && u.preventDefault();
      })
    }), {
      default: g(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gt = /* @__PURE__ */ w({
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
    const o = e, n = t, a = Ee(), r = He(n), { forwardRef: i } = S();
    return (l, d) => (v(), b(s(Ge), {
      present: l.forceMount || s(a).open.value
    }, {
      default: g(() => [
        s(a).modal.value ? (v(), b(Di, A({
          key: 0,
          ref: s(i)
        }, { ...o, ...s(r), ...l.$attrs }), {
          default: g(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), b(Ei, A({
          key: 1,
          ref: s(i)
        }, { ...o, ...s(r), ...l.$attrs }), {
          default: g(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ai = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ee();
    return jt(!0), S(), (o, n) => (v(), b(s(N), {
      as: o.as,
      "as-child": o.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), qt = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ee(), { forwardRef: o } = S();
    return (n, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (v(), b(s(Ge), {
        key: 0,
        present: n.forceMount || s(t).open.value
      }, {
        default: g(() => [
          L(Ai, A(n.$attrs, {
            ref: s(o),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: g(() => [
              x(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : re("", !0);
    };
  }
}), Je = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    S();
    const o = Ee();
    return (n, a) => (v(), b(s(N), A(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(o).onOpenChange(!1))
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Yo = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, o = Ee();
    return S(), (n, a) => (v(), b(s(N), A(t, {
      id: s(o).titleId
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Xo = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    S();
    const o = Ee();
    return (n, a) => (v(), b(s(N), A(t, {
      id: s(o).descriptionId
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Pi = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = q(e, t);
    return S(), (n, a) => (v(), b(s(jo), A(s(o), { modal: !0 }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ti = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Wo), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $i = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Kt), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Si, Mi] = oe("AlertDialogContent"), Ii = /* @__PURE__ */ w({
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
    const o = e, n = He(t);
    S();
    const a = E();
    return Mi({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, i) => (v(), b(s(Gt), A({ ...o, ...s(n) }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = he(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = he(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        te(() => {
          var l;
          (l = a.value) == null || l.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fi = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(qt), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ri = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Si(), { forwardRef: n, currentElement: a } = S();
    return ie(() => {
      o.onCancelElementChange(a.value);
    }), (r, i) => (v(), b(s(Je), A(t, { ref: s(n) }), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Li = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Yo), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zi = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Xo), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vi = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Je), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Oa, Ni] = oe("AvatarRoot"), ji = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return S(), Ni({
      imageLoadingStatus: E("loading")
    }), (t, o) => (v(), b(s(N), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: g(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Wi(e) {
  const t = E("idle"), o = E(!1), n = (a) => () => {
    o.value && (t.value = a);
  };
  return ie(() => {
    o.value = !0, Z(e, (a) => {
      if (!a)
        t.value = "error";
      else {
        const r = new window.Image();
        t.value = "loading", r.onload = n("loaded"), r.onerror = n("error"), r.src = a;
      }
    }, { immediate: !0 });
  }), Ke(() => {
    o.value = !1;
  }), t;
}
const Ui = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const o = e, n = t, { src: a } = de(o);
    S();
    const r = Oa(), i = Wi(a);
    return Z(
      i,
      (l) => {
        n("loadingStatusChange", l), l !== "idle" && (r.imageLoadingStatus.value = l);
      },
      { immediate: !0 }
    ), (l, d) => Lt((v(), b(s(N), {
      role: "img",
      "as-child": l.asChild,
      as: l.as,
      src: s(a)
    }, {
      default: g(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [Oo, s(i) === "loaded"]
    ]);
  }
}), Ki = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = Oa();
    S();
    const n = E(!1);
    let a;
    return Z(o.imageLoadingStatus, (r) => {
      r === "loading" && (n.value = !1, t.delayMs ? a = setTimeout(() => {
        n.value = !0, clearTimeout(a);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (r, i) => n.value && s(o).imageLoadingStatus.value !== "loaded" ? (v(), b(s(N), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : re("", !0);
  }
}), [ka, Hi] = oe("PopperRoot"), Yt = /* @__PURE__ */ w({
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Hi({
      anchor: t,
      onAnchorChange: (o) => t.value = o
    }), (o, n) => x(o.$slots, "default");
  }
}), Zo = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = S(), a = ka();
    return ue(() => {
      a.onAnchorChange(t.element ?? n.value);
    }), (r, i) => (v(), b(s(N), {
      ref: s(o),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Gi(e) {
  return e !== null;
}
function qi(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var o, n, a;
      const { placement: r, rects: i, middlewareData: l } = t, d = ((o = l.arrow) == null ? void 0 : o.centerOffset) !== 0, u = d ? 0 : e.arrowWidth, c = d ? 0 : e.arrowHeight, [p, f] = wo(r), m = { start: "0%", center: "50%", end: "100%" }[f], h = (((n = l.arrow) == null ? void 0 : n.x) ?? 0) + u / 2, y = (((a = l.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let _ = "", C = "";
      return p === "bottom" ? (_ = d ? m : `${h}px`, C = `${-c}px`) : p === "top" ? (_ = d ? m : `${h}px`, C = `${i.floating.height + c}px`) : p === "right" ? (_ = `${-c}px`, C = d ? m : `${y}px`) : p === "left" && (_ = `${i.floating.width + c}px`, C = d ? m : `${y}px`), { data: { x: _, y: C } };
    }
  };
}
function wo(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
const Ba = {
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
}, [nc, Yi] = oe("PopperContent"), Rt = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Hn({
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
    ...Ba
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = ka(), { forwardRef: r, currentElement: i } = S(), l = E(), d = E(), { width: u, height: c } = Qs(d), p = D(
      () => o.side + (o.align !== "center" ? `-${o.align}` : "")
    ), f = D(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), m = D(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), h = D(() => ({
      padding: f.value,
      boundary: m.value.filter(Gi),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = Cs(() => [
      cs({
        mainAxis: o.sideOffset + c.value,
        alignmentAxis: o.alignOffset
      }),
      o.prioritizePosition && o.avoidCollisions && vn({
        ...h.value
      }),
      o.avoidCollisions && ps({
        mainAxis: !0,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? gs() : void 0,
        ...h.value
      }),
      !o.prioritizePosition && o.avoidCollisions && vn({
        ...h.value
      }),
      fs({
        ...h.value,
        apply: ({ elements: k, rects: I, availableWidth: $, availableHeight: Q }) => {
          const { width: H, height: F } = I.reference, K = k.floating.style;
          K.setProperty(
            "--radix-popper-available-width",
            `${$}px`
          ), K.setProperty(
            "--radix-popper-available-height",
            `${Q}px`
          ), K.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), K.setProperty(
            "--radix-popper-anchor-height",
            `${F}px`
          );
        }
      }),
      d.value && bs({ element: d.value, padding: o.arrowPadding }),
      qi({
        arrowWidth: u.value,
        arrowHeight: c.value
      }),
      o.hideWhenDetached && ms({ strategy: "referenceHidden", ...h.value })
    ]), { floatingStyles: _, placement: C, isPositioned: O, middlewareData: B } = ws(
      a.anchor,
      l,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...k) => us(...k, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), P = D(
      () => wo(C.value)[0]
    ), T = D(
      () => wo(C.value)[1]
    );
    sr(() => {
      O.value && n("placed");
    });
    const R = D(
      () => {
        var k;
        return ((k = B.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), M = E("");
    ue(() => {
      i.value && (M.value = window.getComputedStyle(i.value).zIndex);
    });
    const X = D(() => {
      var k;
      return ((k = B.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), G = D(() => {
      var k;
      return ((k = B.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return Yi({
      placedSide: P,
      onArrowChange: (k) => d.value = k,
      arrowX: X,
      arrowY: G,
      shouldHideArrow: R
    }), (k, I) => {
      var $, Q, H;
      return v(), Y("div", {
        ref_key: "floatingRef",
        ref: l,
        "data-radix-popper-content-wrapper": "",
        style: Bo({
          ...s(_),
          transform: s(O) ? s(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: M.value,
          "--radix-popper-transform-origin": [
            ($ = s(B).transformOrigin) == null ? void 0 : $.x,
            (Q = s(B).transformOrigin) == null ? void 0 : Q.y
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
        L(s(N), A({ ref: s(r) }, k.$attrs, {
          "as-child": o.asChild,
          as: k.as,
          "data-side": P.value,
          "data-align": T.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(O) ? void 0 : "none"
          }
        }), {
          default: g(() => [
            x(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Qo = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return S(), (t, o) => (v(), b(s(N), {
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
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Xi = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = D(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, a) => typeof n == "object" ? Object.entries(n).map(([r, i]) => ({ name: `[${a}][${t.name}][${r}]`, value: i })) : { name: `[${t.name}][${a}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, a]) => ({ name: `[${t.name}][${n}]`, value: a })) : []);
    return (n, a) => (v(!0), Y(_e, null, po(o.value, (r) => (v(), b(Qo, {
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
}), Zi = "data-radix-vue-collection-item", [Jo, Qi] = oe("CollectionProvider");
function Da(e = Zi) {
  const t = E(/* @__PURE__ */ new Map()), o = E(), n = Qi({
    collectionRef: o,
    itemMap: t,
    attrName: e
  }), { getItems: a } = Ji(n), r = D(() => Array.from(n.itemMap.value.values())), i = D(() => n.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: i };
}
const Ea = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const o = Jo(), { primitiveElement: n, currentElement: a } = wa();
    return Z(a, () => {
      o.collectionRef.value = a.value;
    }), () => at(No, { ref: n }, t);
  }
}), Aa = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: o }) {
    const n = Jo(), { primitiveElement: a, currentElement: r } = wa();
    return ue((i) => {
      if (r.value) {
        const l = er(r.value);
        n.itemMap.value.set(l, { ref: r.value, value: e.value }), i(() => n.itemMap.value.delete(l));
      }
    }), () => at(No, { ...o, [n.attrName]: "", ref: a }, t);
  }
});
function Ji(e) {
  const t = e ?? Jo();
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
const [ct, el] = oe("ComboboxRoot"), tl = /* @__PURE__ */ w({
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
    const o = e, n = t, { multiple: a, disabled: r, dir: i } = de(o), l = Wt(i), d = le(o, "searchTerm", n, {
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
    async function f(F) {
      var K, J;
      c.value = F, await te(), F ? (u.value && (Array.isArray(u.value) && a.value ? p.value = (K = B().find((ne) => {
        var ae, qe;
        return ((qe = (ae = ne.ref) == null ? void 0 : ae.dataset) == null ? void 0 : qe.state) === "checked";
      })) == null ? void 0 : K.value : p.value = u.value), (J = y.value) == null || J.focus(), Q()) : (h.value = !1, o.resetSearchTermOnBlur && X());
    }
    function m(F) {
      if (Array.isArray(u.value) && a.value) {
        const K = u.value.findIndex((ne) => Xe(ne, F)), J = [...u.value];
        K === -1 ? J.push(F) : J.splice(K, 1), u.value = J;
      } else
        u.value = F, f(!1);
    }
    const h = E(!1), y = E(), _ = E(), { forwardRef: C, currentElement: O } = S(), { getItems: B, reactiveItems: P, itemMapSize: T } = Da("data-radix-vue-combobox-item"), R = E([]);
    Z(() => T.value, () => {
      R.value = B().map((F) => F.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const M = D(() => {
      if (h.value) {
        if (o.filterFunction)
          return o.filterFunction(R.value, d.value);
        const F = R.value.filter((K) => typeof K == "string");
        if (F.length)
          return F.filter((K) => {
            var J;
            return K.toLowerCase().includes((J = d.value) == null ? void 0 : J.toLowerCase());
          });
      }
      return R.value;
    });
    function X() {
      !a.value && u.value && !Array.isArray(u.value) ? o.displayValue ? d.value = o.displayValue(u.value) : typeof u.value != "object" ? d.value = u.value.toString() : d.value = "" : d.value = "";
    }
    const G = D(() => M.value.findIndex((F) => Xe(F, p.value))), k = D(() => {
      var F;
      return (F = P.value.find((K) => Xe(K.value, p.value))) == null ? void 0 : F.ref;
    }), I = D(() => JSON.stringify(u.value));
    Z(I, async () => {
      await te(), await te(), X();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !o.searchTerm
    }), Z(() => [M.value.length, d.value.length], async ([F, K], [J, ne]) => {
      await te(), await te(), F && (ne > K || G.value === -1) && (p.value = M.value[0]);
    });
    const $ = ya(O);
    function Q() {
      k.value instanceof Element && k.value.scrollIntoView({ block: "nearest" });
    }
    function H() {
      k.value instanceof Element && k.value.focus && k.value.focus();
    }
    return el({
      searchTerm: d,
      modelValue: u,
      // @ts-expect-error ignoring
      onValueChange: m,
      isUserInputted: h,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: f,
      filteredOptions: M,
      contentId: "",
      inputElement: y,
      selectedElement: k,
      onInputElementChange: (F) => y.value = F,
      onInputNavigation: async (F) => {
        const K = G.value;
        K === 0 && F === "up" || K === M.value.length - 1 && F === "down" || (K === -1 && M.value.length || F === "home" ? p.value = M.value[0] : F === "end" ? p.value = M.value[M.value.length - 1] : p.value = M.value[F === "up" ? K - 1 : K + 1], Q(), H(), te(() => {
          var J;
          return (J = y.value) == null ? void 0 : J.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async () => {
        var F;
        M.value.length && p.value && k.value instanceof Element && ((F = k.value) == null || F.click());
      },
      selectedValue: p,
      onSelectedValueChange: (F) => p.value = F,
      parentElement: O,
      contentElement: _,
      onContentElementChange: (F) => _.value = F
    }), (F, K) => (v(), b(s(Yt), null, {
      default: g(() => [
        L(s(N), A({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: F.as,
          "as-child": F.asChild,
          dir: s(l)
        }, F.$attrs), {
          default: g(() => [
            x(F.$slots, "default", {
              open: s(c),
              modelValue: s(u)
            }),
            s($) && o.name ? (v(), b(s(Xi), {
              key: 0,
              name: o.name,
              value: s(u)
            }, null, 8, ["name", "value"])) : re("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), ol = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, o = ct(), { forwardRef: n, currentElement: a } = S();
    ie(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (o.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = D(() => t.disabled || o.disabled.value || !1), i = E();
    tr(() => {
      var c;
      return i.value = (c = o.selectedElement.value) == null ? void 0 : c.id;
    });
    function l(c) {
      o.open.value ? o.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : o.onOpenChange(!0);
    }
    function d(c) {
      o.open.value && o.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function u(c) {
      var p;
      o.searchTerm.value = (p = c.target) == null ? void 0 : p.value, o.open.value || o.onOpenChange(!0), o.isUserInputted.value = !0;
    }
    return (c, p) => (v(), b(s(N), {
      ref: s(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: r.value,
      value: s(o).searchTerm.value,
      "aria-expanded": s(o).open.value,
      "aria-controls": s(o).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-activedescendant": i.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        gt(he(l, ["prevent"]), ["down", "up"]),
        gt(s(o).onInputEnter, ["enter"]),
        gt(he(d, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: g(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), [Pa, nl] = oe("ComboboxGroup"), al = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: o, currentElement: n } = S(), a = me(void 0, "radix-vue-combobox-group"), r = ct(), i = E(!1);
    function l() {
      if (!n.value)
        return;
      const d = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      i.value = !!d.length;
    }
    return Rs(n, () => {
      te(() => {
        l();
      });
    }, { childList: !0 }), Z(() => r.searchTerm.value, () => {
      te(() => {
        l();
      });
    }, { immediate: !0 }), nl({
      id: a
    }), (d, u) => Lt((v(), b(s(N), A(t, {
      ref_key: "currentRef",
      ref: o,
      role: "group",
      "aria-labelledby": s(a)
    }), {
      default: g(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Oo, i.value]
    ]);
  }
}), rl = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    S();
    const o = Pa({ id: "" });
    return (n, a) => (v(), b(s(N), A(t, {
      id: s(o).id
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [ac, sl] = oe("ComboboxContent"), il = /* @__PURE__ */ w({
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
    const o = e, n = t, { position: a } = de(o), r = ct();
    jt(o.bodyLock);
    const { forwardRef: i, currentElement: l } = S();
    Ut(r.parentElement);
    const d = D(() => o.position === "popper" ? o : {}), u = De(d.value);
    function c(f) {
      r.onSelectedValueChange("");
    }
    ie(() => {
      r.onContentElementChange(l.value);
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
    return sl({ position: a }), (f, m) => (v(), b(s(Ea), null, {
      default: g(() => [
        f.dismissable ? (v(), b(s(Ht), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: m[0] || (m[0] = (h) => s(r).onOpenChange(!1)),
          onFocusOutside: m[1] || (m[1] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("focusOutside", h);
          }),
          onInteractOutside: m[2] || (m[2] = (h) => n("interactOutside", h)),
          onEscapeKeyDown: m[3] || (m[3] = (h) => n("escapeKeyDown", h)),
          onPointerDownOutside: m[4] || (m[4] = (h) => {
            var y;
            (y = s(r).parentElement.value) != null && y.contains(h.target) && h.preventDefault(), n("pointerDownOutside", h);
          })
        }, {
          default: g(() => [
            (v(), b(rt(s(a) === "popper" ? s(Rt) : s(N)), A({ ...f.$attrs, ...s(u) }, {
              id: s(r).contentId,
              ref: s(i),
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
              default: g(() => [
                x(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (v(), b(rt(s(a) === "popper" ? s(Rt) : s(N)), A({ key: 1 }, { ...f.$attrs, ...d.value }, {
          id: s(r).contentId,
          ref: s(i),
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
          default: g(() => [
            x(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), ll = /* @__PURE__ */ w({
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
    const o = q(e, t), { forwardRef: n } = S(), a = ct();
    return a.contentId || (a.contentId = me(void 0, "radix-vue-combobox-content")), (r, i) => (v(), b(s(Ge), {
      present: r.forceMount || s(a).open.value
    }, {
      default: g(() => [
        L(il, A({ ...s(o), ...r.$attrs }, { ref: s(n) }), {
          default: g(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), dl = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    S();
    const o = ct(), n = D(() => o.filteredOptions.value.length === 0);
    return (a, r) => n.value ? (v(), b(s(N), V(A({ key: 0 }, t)), {
      default: g(() => [
        x(a.$slots, "default", {}, () => [
          Ce("No options")
        ])
      ]),
      _: 3
    }, 16)) : re("", !0);
  }
}), [rc, ul] = oe("ComboboxItem"), cl = "combobox.select", pl = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { disabled: a } = de(o), r = ct();
    Pa({ id: "", options: E([]) });
    const { forwardRef: i } = S(), l = D(
      () => {
        var y, _;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (y = r.modelValue.value) == null ? void 0 : y.some((C) => Xe(C, o.value)) : Xe((_ = r.modelValue) == null ? void 0 : _.value, o.value);
      }
    ), d = D(() => Xe(r.selectedValue.value, o.value)), u = me(void 0, "radix-vue-combobox-item"), c = me(void 0, "radix-vue-combobox-option"), p = D(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((y) => Xe(y, o.value)) : !0);
    async function f(y) {
      n("select", y), !(y != null && y.defaultPrevented) && !a.value && y && r.onValueChange(o.value);
    }
    function m(y) {
      if (!y)
        return;
      const _ = { originalEvent: y, value: o.value };
      Ro(cl, f, _);
    }
    async function h(y) {
      await te(), !y.defaultPrevented && r.onSelectedValueChange(o.value);
    }
    if (o.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ul({
      isSelected: l
    }), (y, _) => (v(), b(s(Aa), { value: y.value }, {
      default: g(() => [
        Lt(L(s(N), {
          id: s(c),
          ref: s(i),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": s(u),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": l.value,
          "data-state": l.value ? "checked" : "unchecked",
          "aria-disabled": s(a) || void 0,
          "data-disabled": s(a) ? "" : void 0,
          as: y.as,
          "as-child": y.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: m,
          onPointermove: h
        }, {
          default: g(() => [
            x(y.$slots, "default", {}, () => [
              Ce(xe(y.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Oo, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), fl = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(N), A(t, { "aria-hidden": "true" }), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ta = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Zo), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ml() {
  const e = E(!1);
  return ie(() => {
    It("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), It(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const vl = ca(ml), [et, $a] = oe(["MenuRoot", "MenuSub"], "MenuContext"), [_t, gl] = oe("MenuRoot"), hl = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a, dir: r } = de(o), i = Wt(r), l = le(o, "open", n), d = E(), u = vl();
    return $a({
      open: l,
      onOpenChange: (c) => {
        l.value = c;
      },
      content: d,
      onContentChange: (c) => {
        d.value = c;
      }
    }), gl({
      onClose: () => {
        l.value = !1;
      },
      isUsingKeyboardRef: u,
      dir: i,
      modal: a
    }), (c, p) => (v(), b(s(Yt), null, {
      default: g(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), yl = "rovingFocusGroup.onEntryFocus", bl = { bubbles: !1, cancelable: !0 };
function wl(e, t = !1) {
  const o = document.activeElement;
  for (const n of e)
    if (n === o || (n.focus({ preventScroll: t }), document.activeElement !== o))
      return;
}
const [sc, xl] = oe("RovingFocusGroup"), _l = /* @__PURE__ */ w({
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
    const n = e, a = o, { loop: r, orientation: i, dir: l } = de(n), d = Wt(l), u = le(n, "currentTabStopId", a, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), f = E(0), { getItems: m } = Da();
    function h(y) {
      const _ = !p.value;
      if (y.currentTarget && y.target === y.currentTarget && _ && !c.value) {
        const C = new CustomEvent(yl, bl);
        if (y.currentTarget.dispatchEvent(C), a("entryFocus", C), !C.defaultPrevented) {
          const O = m().map((R) => R.ref).filter((R) => R.dataset.disabled !== ""), B = O.find((R) => R.getAttribute("data-active") === "true"), P = O.find(
            (R) => R.id === u.value
          ), T = [B, P, ...O].filter(
            Boolean
          );
          wl(T, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    return t({
      getItems: m
    }), xl({
      loop: r,
      dir: d,
      orientation: i,
      currentTabStopId: u,
      onItemFocus: (y) => {
        u.value = y;
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
    }), (y, _) => (v(), b(s(Ea), null, {
      default: g(() => [
        L(s(N), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": s(i),
          as: y.as,
          "as-child": y.asChild,
          dir: s(d),
          style: { outline: "none" },
          onMousedown: _[0] || (_[0] = (C) => p.value = !0),
          onFocus: h,
          onBlur: _[1] || (_[1] = (C) => c.value = !1)
        }, {
          default: g(() => [
            x(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [en, Cl] = oe("MenuContent"), tn = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Hn({
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
    ...Ba
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = et(), r = _t(), { trapFocus: i, disableOutsidePointerEvents: l, loop: d } = de(o);
    ha(), jt(l.value);
    const u = E(""), c = E(0), p = E(0), f = E(null), m = E("right"), h = E(0), y = E(null), { createCollection: _ } = ga(), { forwardRef: C, currentElement: O } = S(), B = _(O);
    Z(O, (k) => {
      a.onContentChange(k);
    });
    const { handleTypeaheadSearch: P } = ei(B);
    Ke(() => {
      window.clearTimeout(c.value);
    });
    function T(k) {
      var I, $;
      return m.value === ((I = f.value) == null ? void 0 : I.side) && Ci(k, ($ = f.value) == null ? void 0 : $.area);
    }
    async function R(k) {
      var I;
      n("openAutoFocus", k), !k.defaultPrevented && (k.preventDefault(), (I = O.value) == null || I.focus({
        preventScroll: !0
      }));
    }
    function M(k) {
      if (k.defaultPrevented)
        return;
      const I = k.target.closest("[data-radix-menu-content]") === k.currentTarget, $ = k.ctrlKey || k.altKey || k.metaKey, Q = k.key.length === 1, H = Vs(
        k,
        document.activeElement,
        O.value,
        {
          loop: d.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (H)
        return H == null ? void 0 : H.focus();
      if (k.code === "Space" || (I && (k.key === "Tab" && k.preventDefault(), !$ && Q && P(k.key)), k.target !== O.value) || !yi.includes(k.key))
        return;
      k.preventDefault();
      const F = B.value;
      _a.includes(k.key) && F.reverse(), xi(F);
    }
    function X(k) {
      var I, $;
      ($ = (I = k == null ? void 0 : k.currentTarget) == null ? void 0 : I.contains) != null && $.call(I, k.target) || (window.clearTimeout(c.value), u.value = "");
    }
    function G(k) {
      var I;
      if (!wt(k))
        return;
      const $ = k.target, Q = h.value !== k.clientX;
      if ((I = k == null ? void 0 : k.currentTarget) != null && I.contains($) && Q) {
        const H = k.clientX > h.value ? "right" : "left";
        m.value = H, h.value = k.clientX;
      }
    }
    return Cl({
      onItemEnter: (k) => !!T(k),
      onItemLeave: (k) => {
        var I;
        T(k) || ((I = O.value) == null || I.focus(), y.value = null);
      },
      onTriggerLeave: (k) => !!T(k),
      searchRef: u,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (k) => {
        f.value = k;
      }
    }), (k, I) => (v(), b(s(Ho), {
      "as-child": "",
      trapped: s(i),
      onMountAutoFocus: R,
      onUnmountAutoFocus: I[7] || (I[7] = ($) => n("closeAutoFocus", $))
    }, {
      default: g(() => [
        L(s(Ht), {
          "as-child": "",
          "disable-outside-pointer-events": s(l),
          onEscapeKeyDown: I[2] || (I[2] = ($) => n("escapeKeyDown", $)),
          onPointerDownOutside: I[3] || (I[3] = ($) => n("pointerDownOutside", $)),
          onFocusOutside: I[4] || (I[4] = ($) => n("focusOutside", $)),
          onInteractOutside: I[5] || (I[5] = ($) => n("interactOutside", $)),
          onDismiss: I[6] || (I[6] = ($) => n("dismiss"))
        }, {
          default: g(() => [
            L(s(_l), {
              "current-tab-stop-id": y.value,
              "onUpdate:currentTabStopId": I[0] || (I[0] = ($) => y.value = $),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(d),
              onEntryFocus: I[1] || (I[1] = ($) => {
                n("entryFocus", $), s(r).isUsingKeyboardRef.value || $.preventDefault();
              })
            }, {
              default: g(() => [
                L(s(Rt), {
                  ref: s(C),
                  role: "menu",
                  as: k.as,
                  "as-child": k.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Go)(s(a).open.value),
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
                  onKeydown: M,
                  onBlur: X,
                  onPointermove: G
                }, {
                  default: g(() => [
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
}), Sa = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = en(), { forwardRef: n } = S(), a = E(!1);
    async function r(l) {
      if (!l.defaultPrevented && wt(l)) {
        if (t.disabled)
          o.onItemLeave(l);
        else if (!o.onItemEnter(l)) {
          const d = l.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(l) {
      await te(), !l.defaultPrevented && wt(l) && o.onItemLeave(l);
    }
    return (l, d) => (v(), b(s(Aa), null, {
      default: g(() => [
        L(s(N), A({
          ref: s(n),
          role: "menuitem",
          tabindex: "-1"
        }, l.$attrs, {
          as: l.as,
          "as-child": l.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": l.disabled || void 0,
          "data-disabled": l.disabled ? "" : void 0,
          "data-highlighted": a.value ? "" : void 0,
          onPointermove: r,
          onPointerleave: i,
          onFocus: d[0] || (d[0] = async (u) => {
            await te(), !(u.defaultPrevented || l.disabled) && (a.value = !0);
          }),
          onBlur: d[1] || (d[1] = async (u) => {
            await te(), !u.defaultPrevented && (a.value = !1);
          })
        }), {
          default: g(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), on = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: r } = S(), i = _t(), l = en(), d = E(!1);
    async function u() {
      const c = r.value;
      if (!o.disabled && c) {
        const p = new CustomEvent(gi, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await te(), p.defaultPrevented ? d.value = !1 : i.onClose();
      }
    }
    return (c, p) => (v(), b(Sa, A(o, {
      ref: s(a),
      onClick: u,
      onPointerdown: p[0] || (p[0] = () => {
        d.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var m;
        await te(), !f.defaultPrevented && (d.value || (m = f.currentTarget) == null || m.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const m = s(l).searchRef.value !== "";
        c.disabled || m && f.key === " " || s(bo).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: g(() => [
        x(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ol, Ma] = oe(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), kl = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ol({
      checked: E(!1)
    });
    return (o, n) => (v(), b(s(Ge), {
      present: o.forceMount || s(Ft)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: g(() => [
        L(s(N), {
          as: o.as,
          "as-child": o.asChild,
          "data-state": s(qo)(s(t).checked.value)
        }, {
          default: g(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bl = /* @__PURE__ */ w({
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
    return Ma({ checked: a }), (r, i) => (v(), b(on, A({ role: "menuitemcheckbox" }, o, {
      "aria-checked": s(Ft)(s(a)) ? "mixed" : s(a),
      "data-state": s(qo)(s(a)),
      onSelect: i[0] || (i[0] = async (l) => {
        n("select", l), s(Ft)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: g(() => [
        x(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Dl = /* @__PURE__ */ w({
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
    const o = e, n = t, a = q(o, n), r = et(), { forwardRef: i, currentElement: l } = S();
    return Ut(l), (d, u) => (v(), b(tn, A(s(a), {
      ref: s(i),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: u[0] || (u[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: u[1] || (u[1] = he((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: g(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), El = /* @__PURE__ */ w({
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
    const o = q(e, t), n = et();
    return (a, r) => (v(), b(tn, A(s(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (i) => s(n).onOpenChange(!1))
    }), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Al = /* @__PURE__ */ w({
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
    const o = q(e, t), n = et(), a = _t();
    return (r, i) => (v(), b(s(Ge), {
      present: r.forceMount || s(n).open.value
    }, {
      default: g(() => [
        s(a).modal.value ? (v(), b(Dl, V(A({ key: 0 }, { ...r.$attrs, ...s(o) })), {
          default: g(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), b(El, V(A({ key: 1 }, { ...r.$attrs, ...s(o) })), {
          default: g(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ia = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(N), A({ role: "group" }, t), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pl = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(N), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tl = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Kt), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$l, Sl] = oe("MenuRadioGroup"), Ml = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "modelValue", t);
    return Sl({
      modelValue: n,
      onValueChange: (a) => {
        n.value = a;
      }
    }), (a, r) => (v(), b(Ia, V(j(o)), {
      default: g(() => [
        x(a.$slots, "default", { modelValue: s(n) })
      ]),
      _: 3
    }, 16));
  }
}), Il = /* @__PURE__ */ w({
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
    const o = e, n = t, { value: a } = de(o), r = $l(), i = D(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return Ma({ checked: i }), (l, d) => (v(), b(on, A({ role: "menuitemradio" }, o, {
      "aria-checked": i.value,
      "data-state": s(qo)(i.value),
      onSelect: d[0] || (d[0] = async (u) => {
        n("select", u), s(r).onValueChange(s(a));
      })
    }), {
      default: g(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Fl = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(N), A(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fa, Rl] = oe("MenuSub"), Ll = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "open", t, {
      defaultValue: !1,
      passive: o.open === void 0
    }), a = et(), r = E(), i = E();
    return ue((l) => {
      (a == null ? void 0 : a.open.value) === !1 && (n.value = !1), l(() => n.value = !1);
    }), $a({
      open: n,
      onOpenChange: (l) => {
        n.value = l;
      },
      content: i,
      onContentChange: (l) => {
        i.value = l;
      }
    }), Rl({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (l) => {
        r.value = l;
      }
    }), (l, d) => (v(), b(s(Yt), null, {
      default: g(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), zl = /* @__PURE__ */ w({
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
    const o = q(e, t), n = et(), a = _t(), r = Fa(), { forwardRef: i, currentElement: l } = S();
    return r.contentId || (r.contentId = me(void 0, "radix-vue-menu-sub-content")), (d, u) => (v(), b(s(Ge), {
      present: d.forceMount || s(n).open.value
    }, {
      default: g(() => [
        L(tn, A(s(o), {
          id: s(r).contentId,
          ref: s(i),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: u[0] || (u[0] = he((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(l)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: u[1] || (u[1] = he(() => {
          }, ["prevent"])),
          onFocusOutside: u[2] || (u[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: u[3] || (u[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: u[4] || (u[4] = (c) => {
            var p, f;
            const m = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), h = s(wi)[s(a).dir.value].includes(c.key);
            m && h && (s(n).onOpenChange(!1), (f = s(r).trigger.value) == null || f.focus(), c.preventDefault());
          })
        }), {
          default: g(() => [
            x(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Vl = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = et(), n = _t(), a = Fa(), r = en(), i = E(null);
    a.triggerId || (a.triggerId = me(void 0, "radix-vue-menu-sub-trigger"));
    function l() {
      i.value && window.clearTimeout(i.value), i.value = null;
    }
    Ke(() => {
      l();
    });
    function d(p) {
      !wt(p) || r.onItemEnter(p) || !t.disabled && !o.open.value && !i.value && (r.onPointerGraceIntentChange(null), i.value = window.setTimeout(() => {
        o.onOpenChange(!0), l();
      }, 100));
    }
    async function u(p) {
      var f, m;
      if (!wt(p))
        return;
      l();
      const h = (f = o.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (h != null && h.width) {
        const y = (m = o.content.value) == null ? void 0 : m.dataset.side, _ = y === "right", C = _ ? -5 : 5, O = h[_ ? "left" : "right"], B = h[_ ? "right" : "left"];
        r.onPointerGraceIntentChange({
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
      t.disabled || m && p.key === " " || bi[n.dir.value].includes(p.key) && (o.onOpenChange(!0), await te(), (f = o.content.value) == null || f.focus(), p.preventDefault());
    }
    return (p, f) => (v(), b(Ta, { "as-child": "" }, {
      default: g(() => [
        L(Sa, A(t, {
          id: s(a).triggerId,
          ref: (m) => {
            var h;
            (h = s(a)) == null || h.onTriggerChange(m == null ? void 0 : m.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(o).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(Go)(s(o).open.value),
          onClick: f[0] || (f[0] = async (m) => {
            t.disabled || m.defaultPrevented || (m.currentTarget.focus(), s(o).open.value || s(o).onOpenChange(!0));
          }),
          onPointermove: d,
          onPointerleave: u,
          onKeydown: c
        }), {
          default: g(() => [
            x(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Ra, Nl] = oe("DropdownMenuRoot"), jl = /* @__PURE__ */ w({
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
    S();
    const a = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = E(), { modal: i, dir: l } = de(o), d = Wt(l);
    return Nl({
      open: a,
      onOpenChange: (u) => {
        a.value = u;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerId: "",
      triggerElement: r,
      contentId: "",
      modal: i,
      dir: d
    }), (u, c) => (v(), b(s(hl), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => ko(a) ? a.value = p : null),
      dir: s(d),
      modal: s(i)
    }, {
      default: g(() => [
        x(u.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Wl = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Ra(), { forwardRef: n, currentElement: a } = S();
    return ie(() => {
      o.triggerElement = a;
    }), o.triggerId || (o.triggerId = me(void 0, "radix-vue-dropdown-menu-trigger")), (r, i) => (v(), b(s(Ta), { "as-child": "" }, {
      default: g(() => [
        L(s(N), {
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
          onClick: i[0] || (i[0] = async (l) => {
            var d;
            !r.disabled && l.button === 0 && l.ctrlKey === !1 && ((d = s(o)) == null || d.onOpenToggle(), await te(), s(o).open.value && l.preventDefault());
          }),
          onKeydown: i[1] || (i[1] = gt(
            (l) => {
              r.disabled || (["Enter", " "].includes(l.key) && s(o).onOpenToggle(), l.key === "ArrowDown" && s(o).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: g(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Ul = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Tl), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kl = /* @__PURE__ */ w({
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
    const o = q(e, t);
    S();
    const n = Ra(), a = E(!1);
    function r(i) {
      i.defaultPrevented || (a.value || setTimeout(() => {
        var l;
        (l = n.triggerElement.value) == null || l.focus();
      }, 0), a.value = !1, i.preventDefault());
    }
    return n.contentId || (n.contentId = me(void 0, "radix-vue-dropdown-menu-content")), (i, l) => {
      var d;
      return v(), b(s(Al), A(s(o), {
        id: s(n).contentId,
        "aria-labelledby": (d = s(n)) == null ? void 0 : d.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: r,
        onInteractOutside: l[0] || (l[0] = (u) => {
          var c;
          if (u.defaultPrevented) return;
          const p = u.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0, m = p.button === 2 || f;
          (!s(n).modal.value || m) && (a.value = !0), (c = s(n).triggerElement.value) != null && c.contains(u.target) && u.preventDefault();
        })
      }), {
        default: g(() => [
          x(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Hl = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = He(t);
    return S(), (a, r) => (v(), b(s(on), V(j({ ...o, ...s(n) })), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gl = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Ia), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ql = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Fl), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yl = /* @__PURE__ */ w({
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
    const o = e, n = He(t);
    return S(), (a, r) => (v(), b(s(Bl), V(j({ ...o, ...s(n) })), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), La = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(kl), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xl = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Pl), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zl = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = He(t);
    return S(), (a, r) => (v(), b(s(Ml), V(j({ ...o, ...s(n) })), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ql = /* @__PURE__ */ w({
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
    const o = q(e, t);
    return S(), (n, a) => (v(), b(s(Il), V(j(s(o))), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jl = /* @__PURE__ */ w({
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
    return S(), (a, r) => (v(), b(s(Ll), {
      open: s(n),
      "onUpdate:open": r[0] || (r[0] = (i) => ko(n) ? n.value = i : null)
    }, {
      default: g(() => [
        x(a.$slots, "default", { open: s(n) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), ed = /* @__PURE__ */ w({
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
    const o = q(e, t);
    return S(), (n, a) => (v(), b(s(zl), A(s(o), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), td = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(Vl), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), od = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(N), A(t, {
      onMousedown: n[0] || (n[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [pt, nd] = oe("PopoverRoot"), ad = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a } = de(o), r = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = E(), l = E(!1);
    return nd({
      contentId: "",
      modal: a,
      open: r,
      onOpenChange: (d) => {
        r.value = d;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: i,
      hasCustomAnchor: l
    }), (d, u) => (v(), b(s(Yt), null, {
      default: g(() => [
        x(d.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), rd = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = pt(), { forwardRef: n, currentElement: a } = S();
    return ie(() => {
      o.triggerElement.value = a.value;
    }), (r, i) => (v(), b(rt(s(o).hasCustomAnchor.value ? s(N) : s(Zo)), { "as-child": "" }, {
      default: g(() => [
        L(s(N), {
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
          default: g(() => [
            x(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), sd = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Kt), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), za = /* @__PURE__ */ w({
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
    const o = e, n = t, a = De(o), { forwardRef: r } = S(), i = pt();
    return ha(), (l, d) => (v(), b(s(Ho), {
      "as-child": "",
      loop: "",
      trapped: l.trapFocus,
      onMountAutoFocus: d[5] || (d[5] = (u) => n("openAutoFocus", u)),
      onUnmountAutoFocus: d[6] || (d[6] = (u) => n("closeAutoFocus", u))
    }, {
      default: g(() => [
        L(s(Ht), {
          "as-child": "",
          "disable-outside-pointer-events": l.disableOutsidePointerEvents,
          onPointerDownOutside: d[0] || (d[0] = (u) => n("pointerDownOutside", u)),
          onInteractOutside: d[1] || (d[1] = (u) => n("interactOutside", u)),
          onEscapeKeyDown: d[2] || (d[2] = (u) => n("escapeKeyDown", u)),
          onFocusOutside: d[3] || (d[3] = (u) => n("focusOutside", u)),
          onDismiss: d[4] || (d[4] = (u) => s(i).onOpenChange(!1))
        }, {
          default: g(() => [
            L(s(Rt), A(s(a), {
              id: s(i).contentId,
              ref: s(r),
              "data-state": s(i).open.value ? "open" : "closed",
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
                x(l.$slots, "default")
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
}), id = /* @__PURE__ */ w({
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
    const o = e, n = t, a = pt(), r = E(!1);
    jt(!0);
    const i = q(o, n), { forwardRef: l, currentElement: d } = S();
    return Ut(d), (u, c) => (v(), b(za, A(s(i), {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = he(
        (p) => {
          var f;
          n("closeAutoFocus", p), r.value || (f = s(a).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const f = p.detail.originalEvent, m = f.button === 0 && f.ctrlKey === !0, h = f.button === 2 || m;
        r.value = h;
      }),
      onFocusOutside: c[2] || (c[2] = he(() => {
      }, ["prevent"]))
    }), {
      default: g(() => [
        x(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), ld = /* @__PURE__ */ w({
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
    const o = e, n = t, a = pt(), r = E(!1), i = E(!1), l = q(o, n);
    return (d, u) => (v(), b(za, A(s(l), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: u[0] || (u[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(a).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = async (c) => {
        var p;
        n("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        (p = s(a).triggerElement.value) != null && p.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: g(() => [
        x(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dd = /* @__PURE__ */ w({
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
    const o = e, n = t, a = pt(), r = q(o, n), { forwardRef: i } = S();
    return a.contentId || (a.contentId = me(void 0, "radix-vue-popover-content")), (l, d) => (v(), b(s(Ge), {
      present: l.forceMount || s(a).open.value
    }, {
      default: g(() => [
        s(a).modal.value ? (v(), b(id, A({ key: 0 }, s(r), { ref: s(i) }), {
          default: g(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (v(), b(ld, A({ key: 1 }, s(r), { ref: s(i) }), {
          default: g(() => [
            x(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ic = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    S();
    const o = pt();
    return or(() => {
      o.hasCustomAnchor.value = !0;
    }), Ke(() => {
      o.hasCustomAnchor.value = !1;
    }), (n, a) => (v(), b(s(Zo), V(j(t)), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ud() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
ud();
const cd = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [pd, fd] = oe("SwitchRoot"), md = /* @__PURE__ */ w({
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
    const o = e, n = t, { disabled: a } = de(o), r = le(o, "checked", n, {
      defaultValue: o.defaultChecked,
      passive: o.checked === void 0
    });
    function i() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: l, currentElement: d } = S(), u = ya(d), c = D(() => {
      var p;
      return o.id && d.value ? (p = document.querySelector(`[for="${o.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return fd({
      checked: r,
      toggleCheck: i,
      disabled: a
    }), (p, f) => (v(), Y(_e, null, [
      L(s(N), A(p.$attrs, {
        id: p.id,
        ref: s(l),
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
        onClick: i,
        onKeydown: gt(he(i, ["prevent"]), ["enter"])
      }), {
        default: g(() => [
          x(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(u) ? (v(), Y("input", {
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
      }, null, 8, cd)) : re("", !0)
    ], 64));
  }
}), vd = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = pd();
    return S(), (o, n) => {
      var a;
      return v(), b(s(N), {
        "data-state": (a = s(t).checked) != null && a.value ? "checked" : "unchecked",
        "data-disabled": s(t).disabled.value ? "" : void 0,
        "as-child": o.asChild,
        as: o.as
      }, {
        default: g(() => [
          x(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Xt, gd] = oe("ToastProvider"), hd = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: o, duration: n, swipeDirection: a, swipeThreshold: r } = de(t), i = E(), l = E(0), d = E(!1), u = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return gd({
      label: o,
      duration: n,
      swipeDirection: a,
      swipeThreshold: r,
      toastCount: l,
      viewport: i,
      onViewportChange(c) {
        i.value = c;
      },
      onToastAdd() {
        l.value++;
      },
      onToastRemove() {
        l.value--;
      },
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: u
    }), (c, p) => x(c.$slots, "default");
  }
}), yd = "toast.swipeStart", bd = "toast.swipeMove", wd = "toast.swipeCancel", xd = "toast.swipeEnd", xo = "toast.viewportPause", _o = "toast.viewportResume";
function At(e, t, o) {
  const n = o.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function _n(e, t, o = 0) {
  const n = Math.abs(e.x), a = Math.abs(e.y), r = n > a;
  return t === "left" || t === "right" ? r && n > o : !r && a > o;
}
function _d(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Va(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), _d(o)) {
      const n = o.ariaHidden || o.hidden || o.style.display === "none", a = o.dataset.radixToastAnnounceExclude === "";
      if (!n)
        if (a) {
          const r = o.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Va(o));
    }
  }), t;
}
const Cd = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(e) {
    const t = Xt(), o = Ms(1e3), n = E(!1);
    return ma(() => {
      n.value = !0;
    }), (a, r) => s(o) || n.value ? (v(), b(s(Qo), { key: 0 }, {
      default: g(() => [
        Ce(xe(s(t).label.value) + " ", 1),
        x(a.$slots, "default")
      ]),
      _: 3
    })) : re("", !0);
  }
}), [Od, kd] = oe("ToastRoot"), Bd = /* @__PURE__ */ w({
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
    const o = e, n = t, { forwardRef: a, currentElement: r } = S(), i = Xt(), l = E(null), d = E(null), u = D(() => o.duration || i.duration.value), c = E(0), p = E(u.value), f = E(0), m = E(u.value), h = ma(() => {
      const O = (/* @__PURE__ */ new Date()).getTime() - c.value;
      m.value = Math.max(p.value - O, 0);
    }, { fpsLimit: 60 });
    function y(O) {
      !O || O === Number.POSITIVE_INFINITY || Be && (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(_, O));
    }
    function _() {
      var O, B;
      (O = r.value) != null && O.contains(document.activeElement) && ((B = i.viewport.value) == null || B.focus()), i.isClosePausedRef.value = !1, n("close");
    }
    const C = D(() => r.value ? Va(r.value) : null);
    if (o.type && !["foreground", "background"].includes(o.type)) {
      const O = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(O);
    }
    return ue((O) => {
      const B = i.viewport.value;
      if (B) {
        const P = () => {
          y(p.value), h.resume(), n("resume");
        }, T = () => {
          const R = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - R, window.clearTimeout(f.value), h.pause(), n("pause");
        };
        return B.addEventListener(xo, T), B.addEventListener(_o, P), () => {
          B.removeEventListener(xo, T), B.removeEventListener(_o, P);
        };
      }
    }), Z(() => [o.open, u.value], () => {
      p.value = u.value, o.open && !i.isClosePausedRef.value && y(u.value);
    }, { immediate: !0 }), Lo("Escape", (O) => {
      n("escapeKeyDown", O), O.defaultPrevented || (i.isFocusedToastEscapeKeyDownRef.value = !0, _());
    }), ie(() => {
      i.onToastAdd();
    }), Ke(() => {
      i.onToastRemove();
    }), kd({ onClose: _ }), (O, B) => (v(), Y(_e, null, [
      C.value ? (v(), b(Cd, {
        key: 0,
        role: "status",
        "aria-live": O.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: g(() => [
          Ce(xe(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : re("", !0),
      s(i).viewport.value ? (v(), b(Wn, {
        key: 1,
        to: s(i).viewport.value
      }, [
        L(s(N), A({
          ref: s(a),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, O.$attrs, {
          as: O.as,
          "as-child": O.asChild,
          "data-state": O.open ? "open" : "closed",
          "data-swipe-direction": s(i).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: B[0] || (B[0] = he((P) => {
            l.value = { x: P.clientX, y: P.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (P) => {
            if (!l.value) return;
            const T = P.clientX - l.value.x, R = P.clientY - l.value.y, M = !!d.value, X = ["left", "right"].includes(s(i).swipeDirection.value), G = ["left", "up"].includes(s(i).swipeDirection.value) ? Math.min : Math.max, k = X ? G(0, T) : 0, I = X ? 0 : G(0, R), $ = P.pointerType === "touch" ? 10 : 2, Q = { x: k, y: I }, H = { originalEvent: P, delta: Q };
            M ? (d.value = Q, s(At)(s(bd), (F) => n("swipeMove", F), H)) : s(_n)(Q, s(i).swipeDirection.value, $) ? (d.value = Q, s(At)(s(yd), (F) => n("swipeStart", F), H), P.target.setPointerCapture(P.pointerId)) : (Math.abs(T) > $ || Math.abs(R) > $) && (l.value = null);
          }),
          onPointerup: B[2] || (B[2] = (P) => {
            const T = d.value, R = P.target;
            if (R.hasPointerCapture(P.pointerId) && R.releasePointerCapture(P.pointerId), d.value = null, l.value = null, T) {
              const M = P.currentTarget, X = { originalEvent: P, delta: T };
              s(_n)(T, s(i).swipeDirection.value, s(i).swipeThreshold.value) ? s(At)(s(xd), (G) => n("swipeEnd", G), X) : s(At)(s(wd), (G) => n("swipeCancel", G), X), M == null || M.addEventListener("click", (G) => G.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: g(() => [
            x(O.$slots, "default", {
              remaining: m.value,
              duration: u.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : re("", !0)
    ], 64));
  }
}), Dd = /* @__PURE__ */ w({
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
    const o = e, n = t, { forwardRef: a } = S(), r = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    return (i, l) => (v(), b(s(Ge), {
      present: i.forceMount || s(r)
    }, {
      default: g(() => [
        L(Bd, A({
          ref: s(a),
          open: s(r),
          type: i.type,
          as: i.as,
          "as-child": i.asChild,
          duration: i.duration
        }, i.$attrs, {
          onClose: l[0] || (l[0] = (d) => r.value = !1),
          onPause: l[1] || (l[1] = (d) => n("pause")),
          onResume: l[2] || (l[2] = (d) => n("resume")),
          onEscapeKeyDown: l[3] || (l[3] = (d) => n("escapeKeyDown", d)),
          onSwipeStart: l[4] || (l[4] = (d) => {
            n("swipeStart", d), d.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: l[5] || (l[5] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: l[6] || (l[6] = (d) => {
            const u = d.currentTarget;
            u.setAttribute("data-swipe", "cancel"), u.style.removeProperty("--radix-toast-swipe-move-x"), u.style.removeProperty("--radix-toast-swipe-move-y"), u.style.removeProperty("--radix-toast-swipe-end-x"), u.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: l[7] || (l[7] = (d) => {
            const { x: u, y: c } = d.detail.delta, p = d.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), r.value = !1;
          })
        }), {
          default: g(({ remaining: d, duration: u }) => [
            x(i.$slots, "default", {
              remaining: d,
              duration: u,
              open: s(r)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Na = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, o) => (v(), b(s(N), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: g(() => [
        x(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), ja = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = Od(), { forwardRef: n } = S();
    return (a, r) => (v(), b(Na, { "as-child": "" }, {
      default: g(() => [
        L(s(N), A(t, {
          ref: s(n),
          type: a.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (i) => s(o).onClose())
        }), {
          default: g(() => [
            x(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Ed = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = S();
    return (o, n) => o.altText ? (v(), b(Na, {
      key: 0,
      "alt-text": o.altText,
      "as-child": ""
    }, {
      default: g(() => [
        L(ja, {
          ref: s(t),
          as: o.as,
          "as-child": o.asChild
        }, {
          default: g(() => [
            x(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : re("", !0);
  }
}), Cn = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const o = t, n = Xt();
    return (a, r) => (v(), b(s(Qo), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: r[0] || (r[0] = (i) => {
        var l;
        const d = i.relatedTarget;
        !((l = s(n).viewport.value) != null && l.contains(d)) && o("focusFromOutsideViewport");
      })
    }, {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ad = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: o, label: n } = de(t), { forwardRef: a, currentElement: r } = S(), { createCollection: i } = ga(), l = i(r), d = Xt(), u = D(() => d.toastCount.value > 0), c = E(), p = E(), f = D(() => o.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    Lo(o.value, () => {
      r.value.focus();
    }), ie(() => {
      d.onViewportChange(r.value);
    }), ue((h) => {
      const y = r.value;
      if (u.value && y) {
        const _ = () => {
          if (!d.isClosePausedRef.value) {
            const T = new CustomEvent(xo);
            y.dispatchEvent(T), d.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (d.isClosePausedRef.value) {
            const T = new CustomEvent(_o);
            y.dispatchEvent(T), d.isClosePausedRef.value = !1;
          }
        }, O = (T) => {
          !y.contains(T.relatedTarget) && C();
        }, B = () => {
          y.contains(document.activeElement) || C();
        }, P = (T) => {
          var R, M, X;
          const G = T.altKey || T.ctrlKey || T.metaKey;
          if (T.key === "Tab" && !G) {
            const k = document.activeElement, I = T.shiftKey;
            if (T.target === y && I) {
              (R = c.value) == null || R.focus();
              return;
            }
            const $ = m({ tabbingDirection: I ? "backwards" : "forwards" }), Q = $.findIndex((H) => H === k);
            Tt($.slice(Q + 1)) ? T.preventDefault() : I ? (M = c.value) == null || M.focus() : (X = p.value) == null || X.focus();
          }
        };
        y.addEventListener("focusin", _), y.addEventListener("focusout", O), y.addEventListener("pointermove", _), y.addEventListener("pointerleave", B), y.addEventListener("keydown", P), window.addEventListener("blur", _), window.addEventListener("focus", C), h(() => {
          y.removeEventListener("focusin", _), y.removeEventListener("focusout", O), y.removeEventListener("pointermove", _), y.removeEventListener("pointerleave", B), y.removeEventListener("keydown", P), window.removeEventListener("blur", _), window.removeEventListener("focus", C);
        });
      }
    });
    function m({ tabbingDirection: h }) {
      const y = l.value.map((_) => {
        const C = [_, ...Ko(_)];
        return h === "forwards" ? C : C.reverse();
      });
      return (h === "forwards" ? y.reverse() : y).flat();
    }
    return (h, y) => (v(), b(s(di), {
      role: "region",
      "aria-label": typeof s(n) == "string" ? s(n).replace("{hotkey}", f.value) : s(n)(f.value),
      tabindex: "-1",
      style: Bo({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: u.value ? void 0 : "none"
      })
    }, {
      default: g(() => [
        u.value ? (v(), b(Cn, {
          key: 0,
          ref: (_) => {
            c.value = s(we)(_);
          },
          onFocusFromOutsideViewport: y[0] || (y[0] = () => {
            const _ = m({
              tabbingDirection: "forwards"
            });
            s(Tt)(_);
          })
        }, null, 512)) : re("", !0),
        L(s(N), A({
          ref: s(a),
          tabindex: "-1",
          as: h.as,
          "as-child": h.asChild
        }, h.$attrs), {
          default: g(() => [
            x(h.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        u.value ? (v(), b(Cn, {
          key: 1,
          ref: (_) => {
            p.value = s(we)(_);
          },
          onFocusFromOutsideViewport: y[1] || (y[1] = () => {
            const _ = m({
              tabbingDirection: "backwards"
            });
            s(Tt)(_);
          })
        }, null, 512)) : re("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Pd = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(N), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Td = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return S(), (o, n) => (v(), b(s(N), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $d = 3, Sd = 1e6, $e = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let lo = 0;
function Md() {
  return lo = (lo + 1) % Number.MAX_VALUE, lo.toString();
}
const uo = /* @__PURE__ */ new Map();
function On(e) {
  if (uo.has(e)) return;
  const t = setTimeout(() => {
    uo.delete(e), ht({
      type: $e.REMOVE_TOAST,
      toastId: e
    });
  }, Sd);
  uo.set(e, t);
}
const ve = E({
  toasts: []
});
function ht(e) {
  switch (e.type) {
    case $e.ADD_TOAST:
      ve.value.toasts = [e.toast, ...ve.value.toasts].slice(0, $d);
      break;
    case $e.UPDATE_TOAST:
      ve.value.toasts = ve.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case $e.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? On(t) : ve.value.toasts.forEach((o) => {
        On(o.id);
      }), ve.value.toasts = ve.value.toasts.map(
        (o) => o.id === t || t === void 0 ? {
          ...o,
          open: !1
        } : o
      );
      break;
    }
    case $e.REMOVE_TOAST:
      e.toastId === void 0 ? ve.value.toasts = [] : ve.value.toasts = ve.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Wa() {
  return {
    toasts: D(() => ve.value.toasts),
    toast: Id,
    dismiss: (e) => ht({ type: $e.DISMISS_TOAST, toastId: e })
  };
}
function Id(e) {
  const t = Md(), o = (a) => ht({
    type: $e.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), n = () => ht({ type: $e.DISMISS_TOAST, toastId: t });
  return ht({
    type: $e.ADD_TOAST,
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
const Fd = { class: "flex items-start space-x-3" }, Rd = { class: "grid gap-1" }, Ld = { class: "font-bold" }, zd = /* @__PURE__ */ w({
  __name: "Toaster",
  setup(e) {
    const { toasts: t } = Wa();
    return (o, n) => (v(), b(s(Du), null, {
      default: g(() => [
        (v(!0), Y(_e, null, po(s(t), (a) => (v(), b(s(bu), A({
          key: a.id,
          ref_for: !0
        }, a), {
          default: g(() => [
            se("div", Fd, [
              a.icon ? (v(), b(rt(a.icon), {
                key: 0,
                class: ce(["h-6 w-6", a.iconClasses])
              }, null, 8, ["class"])) : re("", !0),
              se("div", Rd, [
                a.title ? (v(), b(s(Bu), { key: 0 }, {
                  default: g(() => [
                    Ce(xe(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : re("", !0),
                a.description ? (v(), Y(_e, { key: 1 }, [
                  dr(a.description) ? (v(), b(s(Dn), { key: 0 }, {
                    default: g(() => [
                      (v(), b(rt(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (v(!0), Y(_e, { key: 1 }, po(a.description, (r, i) => (v(), Y("p", {
                    key: i,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (v(), Y(_e, { key: 0 }, [
                      Ce(xe(i), 1)
                    ], 64)) : a.objectFormat === "both" ? (v(), Y(_e, { key: 1 }, [
                      se("span", Ld, xe(i), 1),
                      Ce(": " + xe(r), 1)
                    ], 64)) : (v(), Y(_e, { key: 2 }, [
                      Ce(xe(r), 1)
                    ], 64))
                  ]))), 128)) : (v(), b(s(Dn), { key: 2 }, {
                    default: g(() => [
                      Ce(xe(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : re("", !0),
                L(s(ku))
              ])
            ]),
            (v(), b(rt(a.action)))
          ]),
          _: 2
        }, 1040))), 128)),
        L(s(wu))
      ]),
      _: 1
    }));
  }
});
function Ua(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (o = Ua(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function Vd() {
  for (var e, t, o = 0, n = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (t = Ua(e)) && (n && (n += " "), n += t);
  return n;
}
const nn = "-", Nd = (e) => {
  const t = Wd(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split(nn);
      return l[0] === "" && l.length !== 1 && l.shift(), Ka(l, t) || jd(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const d = o[i] || [];
      return l && n[i] ? [...d, ...n[i]] : d;
    }
  };
}, Ka = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], n = t.nextPart.get(o), a = n ? Ka(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(nn);
  return (i = t.validators.find(({
    validator: l
  }) => l(r))) == null ? void 0 : i.classGroupId;
}, kn = /^\[(.+)\]$/, jd = (e) => {
  if (kn.test(e)) {
    const t = kn.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Wd = (e) => {
  const {
    theme: t,
    prefix: o
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Kd(Object.entries(e.classGroups), o).forEach(([r, i]) => {
    Co(i, n, r, t);
  }), n;
}, Co = (e, t, o, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : Bn(t, a);
      r.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (Ud(a)) {
        Co(a(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([r, i]) => {
      Co(i, Bn(t, r), o, n);
    });
  });
}, Bn = (e, t) => {
  let o = e;
  return t.split(nn).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, Ud = (e) => e.isThemeGetter, Kd = (e, t) => t ? e.map(([o, n]) => {
  const a = n.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([i, l]) => [t + i, l])) : r);
  return [o, a];
}) : e, Hd = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (r, i) => {
    o.set(r, i), t++, t > e && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let i = o.get(r);
      if (i !== void 0)
        return i;
      if ((i = n.get(r)) !== void 0)
        return a(r, i), i;
    },
    set(r, i) {
      o.has(r) ? o.set(r, i) : a(r, i);
    }
  };
}, Ha = "!", Gd = (e) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = e, n = t.length === 1, a = t[0], r = t.length, i = (l) => {
    const d = [];
    let u = 0, c = 0, p;
    for (let _ = 0; _ < l.length; _++) {
      let C = l[_];
      if (u === 0) {
        if (C === a && (n || l.slice(_, _ + r) === t)) {
          d.push(l.slice(c, _)), c = _ + r;
          continue;
        }
        if (C === "/") {
          p = _;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const f = d.length === 0 ? l : l.substring(c), m = f.startsWith(Ha), h = m ? f.substring(1) : f, y = p && p > c ? p - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: y
    };
  };
  return o ? (l) => o({
    className: l,
    parseClassName: i
  }) : i;
}, qd = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let o = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, Yd = (e) => ({
  cache: Hd(e.cacheSize),
  parseClassName: Gd(e),
  ...Nd(e)
}), Xd = /\s+/, Zd = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, r = [], i = e.trim().split(Xd);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const u = i[d], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = o(u);
    let h = !!m, y = n(h ? f.substring(0, m) : f);
    if (!y) {
      if (!h) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = n(f), !y) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      h = !1;
    }
    const _ = qd(c).join(":"), C = p ? _ + Ha : _, O = C + y;
    if (r.includes(O))
      continue;
    r.push(O);
    const B = a(y, h);
    for (let P = 0; P < B.length; ++P) {
      const T = B[P];
      r.push(C + T);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Qd() {
  let e = 0, t, o, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Ga(t)) && (n && (n += " "), n += o);
  return n;
}
const Ga = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ga(e[n])) && (o && (o += " "), o += t);
  return o;
};
function Jd(e, ...t) {
  let o, n, a, r = i;
  function i(d) {
    const u = t.reduce((c, p) => p(c), e());
    return o = Yd(u), n = o.cache.get, a = o.cache.set, r = l, l(d);
  }
  function l(d) {
    const u = n(d);
    if (u)
      return u;
    const c = Zd(d, o);
    return a(d, c), c;
  }
  return function() {
    return r(Qd.apply(null, arguments));
  };
}
const ee = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, qa = /^\[(?:([a-z-]+):)?(.+)\]$/i, eu = /^\d+\/\d+$/, tu = /* @__PURE__ */ new Set(["px", "full", "screen"]), ou = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, au = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ru = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, su = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Te = (e) => it(e) || tu.has(e) || eu.test(e), Le = (e) => ft(e, "length", mu), it = (e) => !!e && !Number.isNaN(Number(e)), co = (e) => ft(e, "number", it), mt = (e) => !!e && Number.isInteger(Number(e)), iu = (e) => e.endsWith("%") && it(e.slice(0, -1)), U = (e) => qa.test(e), ze = (e) => ou.test(e), lu = /* @__PURE__ */ new Set(["length", "size", "percentage"]), du = (e) => ft(e, lu, Ya), uu = (e) => ft(e, "position", Ya), cu = /* @__PURE__ */ new Set(["image", "url"]), pu = (e) => ft(e, cu, gu), fu = (e) => ft(e, "", vu), vt = () => !0, ft = (e, t, o) => {
  const n = qa.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, mu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  nu.test(e) && !au.test(e)
), Ya = () => !1, vu = (e) => ru.test(e), gu = (e) => su.test(e), hu = () => {
  const e = ee("colors"), t = ee("spacing"), o = ee("blur"), n = ee("brightness"), a = ee("borderColor"), r = ee("borderRadius"), i = ee("borderSpacing"), l = ee("borderWidth"), d = ee("contrast"), u = ee("grayscale"), c = ee("hueRotate"), p = ee("invert"), f = ee("gap"), m = ee("gradientColorStops"), h = ee("gradientColorStopPositions"), y = ee("inset"), _ = ee("margin"), C = ee("opacity"), O = ee("padding"), B = ee("saturate"), P = ee("scale"), T = ee("sepia"), R = ee("skew"), M = ee("space"), X = ee("translate"), G = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", U, t], $ = () => [U, t], Q = () => ["", Te, Le], H = () => ["auto", it, U], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ae = () => ["", "0", U], qe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [it, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [vt],
      spacing: [Te, Le],
      blur: ["none", "", ze, U],
      brightness: Ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ze, U],
      borderSpacing: $(),
      borderWidth: Q(),
      contrast: Ae(),
      grayscale: ae(),
      hueRotate: Ae(),
      invert: ae(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [iu, Le],
      inset: I(),
      margin: I(),
      opacity: Ae(),
      padding: $(),
      saturate: Ae(),
      scale: Ae(),
      sepia: ae(),
      skew: Ae(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
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
        columns: [ze]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": qe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": qe()
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
        object: [...F(), U]
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
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
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
        z: ["auto", mt, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: I()
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
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ae()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ae()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", mt, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [vt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", mt, U]
        }, U]
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
        "grid-rows": [vt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [mt, U]
        }, U]
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
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
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
        justify: ["normal", ...ne()]
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
        content: ["normal", ...ne(), "baseline"]
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
        "place-content": [...ne(), "baseline"]
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
        "space-x": [M]
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
        "space-y": [M]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [U, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [U, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ze]
        }, ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [U, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ze, Le]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", co]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [vt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", it, co]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Te, U]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Te, Le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Te, U]
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
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
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
        content: ["none", U]
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
        bg: [...F(), uu]
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
        bg: ["auto", "cover", "contain", du]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pu]
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
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
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
        border: [...K(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        divide: K()
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
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Te, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Te, Le]
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
        ring: Q()
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
        "ring-offset": [Te, Le]
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
        shadow: ["", "inner", "none", ze, fu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [vt]
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
        "drop-shadow": ["", "none", ze, U]
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
        sepia: [T]
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
        "backdrop-sepia": [T]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ae()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ae()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
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
        rotate: [mt, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [X]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [X]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
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
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
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
        "will-change": ["auto", "scroll", "contents", "transform", U]
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
        stroke: [Te, Le, co]
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
}, yu = /* @__PURE__ */ Jd(hu);
function z(...e) {
  return yu(Vd(e));
}
const bu = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(Dd), A(s(r), {
      class: s(z)(s(Au)({ variant: i.variant }), o.class),
      "onUpdate:open": i.onOpenChange
    }), {
      default: g(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), wu = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Ad), A(o.value, {
      class: s(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), lc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Ed), A(o.value, {
      class: s(z)(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        t.class
      )
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function xu(e, t) {
  return v(), Y("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    se("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function _u(e, t) {
  return v(), Y("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    se("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function Zt(e, t) {
  return v(), Y("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    se("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function Cu(e, t) {
  return v(), Y("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    se("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function Ou(e, t) {
  return v(), Y("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    se("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const ku = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(ja), A(o.value, {
      class: s(z)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: g(() => [
        L(s(Zt), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Bu = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Pd), A(o.value, {
      class: s(z)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dn = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Td), A({
      class: s(z)("text-sm opacity-90", t.class)
    }, o.value), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Du = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(hd), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Xa(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (o = Xa(e[t])) && (n && (n += " "), n += o);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Eu() {
  for (var e, t, o = 0, n = ""; o < arguments.length; ) (e = arguments[o++]) && (t = Xa(e)) && (n && (n += " "), n += t);
  return n;
}
const En = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, An = Eu, Ct = (e, t) => (o) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return An(e, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: a, defaultVariants: r } = t, i = Object.keys(a).map((u) => {
    const c = o == null ? void 0 : o[u], p = r == null ? void 0 : r[u];
    if (c === null) return null;
    const f = En(c) || En(p);
    return a[u][f];
  }), l = o && Object.entries(o).reduce((u, c) => {
    let [p, f] = c;
    return f === void 0 || (u[p] = f), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
    let { class: p, className: f, ...m } = c;
    return Object.entries(m).every((h) => {
      let [y, _] = h;
      return Array.isArray(_) ? _.includes({
        ...r,
        ...l
      }[y]) : {
        ...r,
        ...l
      }[y] === _;
    }) ? [
      ...u,
      p,
      f
    ] : u;
  }, []);
  return An(e, i, d, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, Au = Ct(
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
function Pu(e, t) {
  return v(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    se("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Pn(e, t) {
  return v(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    se("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Tu(e, t) {
  return v(), Y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    se("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const { toast: Pt } = Wa();
function $u() {
  return {
    info: (e) => {
      Pt({
        icon: Tu,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Pt({
        icon: Pu,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Pt({
        icon: Pn,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Pt({
        icon: Pn,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const dc = /* @__PURE__ */ w({
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
      warning: a,
      error: r
    } = $u();
    return Z(
      () => t.info,
      (i) => {
        i && o(t.info);
      },
      {
        immediate: !0
      }
    ), Z(
      () => t.success,
      (i) => {
        i && n(t.success);
      },
      { immediate: !0 }
    ), Z(
      () => t.warning,
      (i) => {
        i && a(t.warning);
      },
      { immediate: !0 }
    ), Z(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (i, l) => (v(), b(s(zd)));
  }
}), uc = /* @__PURE__ */ w({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(Pi), V(j(s(a))), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cc = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Ti), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pc = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s($i), null, {
      default: g(() => [
        L(s(Fi), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        L(s(Ii), A(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
          )
        }), {
          default: g(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), fc = /* @__PURE__ */ w({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("div", {
      class: ce(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), mc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Li), A(o.value, {
      class: s(z)("text-lg font-semibold", t.class)
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(zi), A(o.value, {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gc = /* @__PURE__ */ w({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("div", {
      class: ce(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), hc = /* @__PURE__ */ w({
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
    return (o, n) => (v(), b(s(N), {
      as: o.as,
      "as-child": o.asChild,
      class: ce(s(z)(s(an)({ variant: o.variant, size: o.size }), t.class))
    }, {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), an = Ct(
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
), yc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Vi), A(o.value, {
      class: s(z)(s(an)(), t.class)
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Ri), A(o.value, {
      class: s(z)(s(an)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wc = /* @__PURE__ */ w({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(ji), {
      class: ce(s(z)(s(Su)({ size: o.size, shape: o.shape }), t.class))
    }, {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xc = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Ui), A(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), _c = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Ki), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Su = Ct(
  "inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",
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
), Cc = /* @__PURE__ */ w({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("div", {
      class: ce(s(z)(s(Mu)({ variant: o.variant }), t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), Mu = Ct(
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
), Iu = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(tl), A(s(r), {
      class: s(z)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", o.class)
    }), {
      default: g(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fu = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(jo), V(j(s(a))), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oc = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Je), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kc = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Wo), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bc = /* @__PURE__ */ w({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("div", {
      class: ce(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), Dc = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = De(o);
    return (a, r) => (v(), b(s(Yo), A(s(n), {
      class: s(z)(
        "text-lg font-semibold leading-none tracking-tight",
        t.class
      )
    }), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ec = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = De(o);
    return (a, r) => (v(), b(s(Xo), A(s(n), {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ru = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(Uo), null, {
      default: g(() => [
        L(s(qt), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        L(s(Gt), A(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            o.class
          )
        }), {
          default: g(() => [
            x(i.$slots, "default"),
            L(s(Je), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
              default: g(() => [
                L(s(Zt), { class: "w-4 h-4" }),
                l[0] || (l[0] = se("span", { class: "sr-only" }, "Close", -1))
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
}), Ac = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(Uo), null, {
      default: g(() => [
        L(s(qt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: g(() => [
            L(s(Gt), A({
              class: s(z)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                o.class
              )
            }, s(r), {
              onPointerDownOutside: l[0] || (l[0] = (d) => {
                const u = d.detail.originalEvent, c = u.target;
                (u.offsetX > c.clientWidth || u.offsetY > c.clientHeight) && d.preventDefault();
              })
            }), {
              default: g(() => [
                x(i.$slots, "default"),
                L(s(Je), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: g(() => [
                    L(s(Zt), { class: "w-4 h-4" }),
                    l[1] || (l[1] = se("span", { class: "sr-only" }, "Close", -1))
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
}), Pc = /* @__PURE__ */ w({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("div", {
      class: ce(
        s(z)(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",
          t.class
        )
      )
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), Tc = /* @__PURE__ */ w({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(Fu), V(j(s(a))), {
      default: g(() => [
        L(s(Ru), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: g(() => [
            L(Iu, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: g(() => [
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
}), $c = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(dl), A(o.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(al), A(o.value, {
      class: s(z)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", t.class)
    }), {
      default: g(() => [
        n.heading ? (v(), b(s(rl), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: g(() => [
            Ce(xe(n.heading), 1)
          ]),
          _: 1
        })) : re("", !0),
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lu = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Mc = /* @__PURE__ */ w({
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
      const { class: a, ...r } = t;
      return r;
    }), n = De(o);
    return (a, r) => (v(), Y("div", Lu, [
      L(s(Ou), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      L(s(ol), A({ ...s(n), ...a.$attrs }, {
        "auto-focus": "",
        class: s(z)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", t.class)
      }), null, 16, ["class"])
    ]));
  }
}), Ic = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(pl), A(s(r), {
      class: s(z)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", o.class)
    }), {
      default: g(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zu = { role: "presentation" }, Fc = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(ll), A(s(r), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", o.class)
    }), {
      default: g(() => [
        se("div", zu, [
          x(i.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(fl), A(o.value, {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lc = /* @__PURE__ */ w({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("span", {
      class: ce(s(z)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), zc = /* @__PURE__ */ w({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(jl), V(j(s(a))), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vc = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = De(e);
    return (n, a) => (v(), b(s(Wl), A({ class: "outline-none" }, s(o)), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nc = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(Ul), null, {
      default: g(() => [
        L(s(Kl), A(s(r), {
          class: s(z)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
          )
        }), {
          default: g(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), jc = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Gl), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wc = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(Zl), V(j(s(a))), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uc = /* @__PURE__ */ w({
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
      const { class: a, ...r } = t;
      return r;
    }), n = De(o);
    return (a, r) => (v(), b(s(Hl), A(s(n), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.inset && "pl-8",
        t.class
      )
    }), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vu = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Kc = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(Yl), A(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: g(() => [
        se("span", Vu, [
          L(s(La), null, {
            default: g(() => [
              L(s(xu), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nu = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Hc = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(Ql), A(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        o.class
      )
    }), {
      default: g(() => [
        se("span", Nu, [
          L(s(La), null, {
            default: g(() => [
              L(s(Cu), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gc = /* @__PURE__ */ w({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("span", {
      class: ce(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), qc = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(ql), A(o.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Yc = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, o = D(() => {
      const { class: a, ...r } = t;
      return r;
    }), n = De(o);
    return (a, r) => (v(), b(s(Xl), A(s(n), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: g(() => [
        x(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xc = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(Jl), V(j(s(a))), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zc = /* @__PURE__ */ w({
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
      const { class: a, ...r } = t;
      return r;
    }), n = De(o);
    return (a, r) => (v(), b(s(td), A(s(n), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: g(() => [
        x(a.$slots, "default"),
        L(s(_u), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qc = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(ed), A(s(r), {
      class: s(z)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        o.class
      )
    }), {
      default: g(() => [
        x(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var Tn;
const ju = typeof window < "u", Wu = (e) => typeof e < "u", Uu = (e) => typeof e == "function";
ju && ((Tn = window == null ? void 0 : window.navigator) != null && Tn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ku(e) {
  return e;
}
function Hu(e) {
  return JSON.parse(JSON.stringify(e));
}
const $n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sn = "__vueuse_ssr_handlers__";
$n[Sn] = $n[Sn] || {};
var Mn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Mn || (Mn = {}));
var Gu = Object.defineProperty, In = Object.getOwnPropertySymbols, qu = Object.prototype.hasOwnProperty, Yu = Object.prototype.propertyIsEnumerable, Fn = (e, t, o) => t in e ? Gu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Xu = (e, t) => {
  for (var o in t || (t = {}))
    qu.call(t, o) && Fn(e, o, t[o]);
  if (In)
    for (var o of In(t))
      Yu.call(t, o) && Fn(e, o, t[o]);
  return e;
};
const Zu = {
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
Xu({
  linear: Ku
}, Zu);
function Qu(e, t, o, n = {}) {
  var a, r, i;
  const {
    clone: l = !1,
    passive: d = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: p
  } = n, f = Ue(), m = o || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((i = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : i.bind(f == null ? void 0 : f.proxy));
  let h = u;
  h = u || h || `update:${t.toString()}`;
  const y = (C) => l ? Uu(l) ? l(C) : Hu(C) : C, _ = () => Wu(e[t]) ? y(e[t]) : p;
  if (d) {
    const C = _(), O = E(C);
    return Z(() => e[t], (B) => O.value = y(B)), Z(O, (B) => {
      (B !== e[t] || c) && m(h, B);
    }, { deep: c }), O;
  } else
    return D({
      get() {
        return _();
      },
      set(C) {
        m(h, C);
      }
    });
}
const Jc = /* @__PURE__ */ w({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = Qu(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (r, i) => Lt((v(), Y("input", {
      "onUpdate:modelValue": i[0] || (i[0] = (l) => ko(a) ? a.value = l : null),
      class: ce(s(z)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", o.class))
    }, null, 2)), [
      [ur, s(a)]
    ]);
  }
}), ep = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(od), A(o.value, {
      class: s(z)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        t.class
      )
    }), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tp = /* @__PURE__ */ w({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(ad), V(j(s(a))), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), op = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(rd), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), np = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(sd), null, {
      default: g(() => [
        L(s(dd), A({ ...s(r), ...i.$attrs }, {
          class: s(z)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
          )
        }), {
          default: g(() => [
            x(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ap = /* @__PURE__ */ w({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = q(e, t);
    return (r, i) => (v(), b(s(jo), V(j(s(a))), {
      default: g(() => [
        x(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rp = /* @__PURE__ */ w({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Wo), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sp = /* @__PURE__ */ w({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), b(s(Je), V(j(t)), {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ip = /* @__PURE__ */ w({
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
      const { class: i, side: l, ...d } = o;
      return d;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(Uo), null, {
      default: g(() => [
        L(s(qt), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        L(s(Gt), A({
          class: s(z)(s(Ju)({ side: i.side }), o.class)
        }, { ...s(r), ...i.$attrs }), {
          default: g(() => [
            x(i.$slots, "default"),
            L(s(Je), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: g(() => [
                L(s(Zt), { class: "h-4 w-4" })
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
}), lp = /* @__PURE__ */ w({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("div", {
      class: ce(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), dp = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Yo), A({
      class: s(z)("text-lg font-semibold text-foreground", t.class)
    }, o.value), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), up = /* @__PURE__ */ w({
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
    return (n, a) => (v(), b(s(Xo), A({
      class: s(z)("text-sm text-muted-foreground", t.class)
    }, o.value), {
      default: g(() => [
        x(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cp = /* @__PURE__ */ w({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (v(), Y("div", {
      class: ce(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      x(o.$slots, "default")
    ], 2));
  }
}), Ju = Ct(
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
), pp = /* @__PURE__ */ w({
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
      const { class: i, ...l } = o;
      return l;
    }), r = q(a, n);
    return (i, l) => (v(), b(s(md), A(s(r), {
      class: s(z)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        o.class
      )
    }), {
      default: g(() => [
        L(s(vd), {
          class: ce(
            s(z)(
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
  uc as AlertDialog,
  yc as AlertDialogAction,
  bc as AlertDialogCancel,
  pc as AlertDialogContent,
  vc as AlertDialogDescription,
  gc as AlertDialogFooter,
  fc as AlertDialogHeader,
  mc as AlertDialogTitle,
  cc as AlertDialogTrigger,
  wc as Avatar,
  _c as AvatarFallback,
  xc as AvatarImage,
  Cc as Badge,
  hc as Button,
  Iu as Command,
  Tc as CommandDialog,
  $c as CommandEmpty,
  Sc as CommandGroup,
  Mc as CommandInput,
  Ic as CommandItem,
  Fc as CommandList,
  Rc as CommandSeparator,
  Lc as CommandShortcut,
  Fu as Dialog,
  Oc as DialogClose,
  Ru as DialogContent,
  Ec as DialogDescription,
  Pc as DialogFooter,
  Bc as DialogHeader,
  Ac as DialogScrollContent,
  Dc as DialogTitle,
  kc as DialogTrigger,
  zc as DropdownMenu,
  Kc as DropdownMenuCheckboxItem,
  Nc as DropdownMenuContent,
  jc as DropdownMenuGroup,
  Uc as DropdownMenuItem,
  Yc as DropdownMenuLabel,
  Ul as DropdownMenuPortal,
  Wc as DropdownMenuRadioGroup,
  Hc as DropdownMenuRadioItem,
  qc as DropdownMenuSeparator,
  Gc as DropdownMenuShortcut,
  Xc as DropdownMenuSub,
  Qc as DropdownMenuSubContent,
  Zc as DropdownMenuSubTrigger,
  Vc as DropdownMenuTrigger,
  Jc as Input,
  ep as Label,
  dc as Notification,
  tp as Popover,
  ic as PopoverAnchor,
  np as PopoverContent,
  op as PopoverTrigger,
  ap as Sheet,
  sp as SheetClose,
  ip as SheetContent,
  up as SheetDescription,
  cp as SheetFooter,
  lp as SheetHeader,
  dp as SheetTitle,
  rp as SheetTrigger,
  pp as Switch,
  bu as Toast,
  lc as ToastAction,
  ku as ToastClose,
  Dn as ToastDescription,
  Du as ToastProvider,
  Bu as ToastTitle,
  wu as ToastViewport,
  zd as Toaster,
  Su as avatarVariant,
  Mu as badgeVariants,
  an as buttonVariants,
  tc as preset,
  Ju as sheetVariants,
  Id as toast,
  Au as toastVariants,
  $u as useNotification,
  Wa as useToast
};
