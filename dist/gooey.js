var cs = (e) => {
  throw TypeError(e);
};
var Tu = (e, t, n) => t.has(e) || cs("Cannot " + n);
var Hn = (e, t, n) => (Tu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ps = (e, t, n) => t.has(e) ? cs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as xn from "vue";
import { computed as O, ref as E, shallowRef as On, watch as te, getCurrentScope as or, onScopeDispose as ar, shallowReadonly as yn, unref as s, defineComponent as b, createBlock as x, openBlock as h, normalizeProps as Y, guardReactiveProps as J, withCtx as y, renderSlot as _, mergeProps as D, withModifiers as Pe, nextTick as ae, onMounted as se, toRefs as we, createVNode as F, watchEffect as _e, normalizeStyle as _t, createCommentVNode as ye, getCurrentInstance as Ue, toRef as il, camelize as Uo, withKeys as Qe, toHandlers as Iu, resolveDynamicComponent as tt, withDirectives as An, vShow as rr, h as Ge, createTextVNode as Ce, watchSyncEffect as ul, toDisplayString as Ae, isRef as rt, onBeforeMount as dl, onUnmounted as Ke, createElementBlock as z, Fragment as De, renderList as Ht, useSlots as sr, Teleport as so, onBeforeUnmount as Tn, toHandlerKey as cl, inject as lo, provide as io, onBeforeUpdate as Mu, onUpdated as Fu, reactive as Sn, readonly as Go, Comment as lr, cloneVNode as pl, markRaw as fl, createElementVNode as fe, vModelSelect as Ru, toRaw as Lu, mergeDefaults as ir, watchPostEffect as ur, effectScope as Yo, customRef as ml, normalizeClass as ue, isVNode as Vu, toValue as Je, withMemo as Nu, vModelText as vl } from "vue";
function gl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qu = {
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
}, wa = qu, dr = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function zu(e) {
  return e.trim().replace(dr.whitespace, " ");
}
function ju(e) {
  return encodeURIComponent(e).replace(dr.urlHexPairs, Hu);
}
function Ku(e) {
  return Object.keys(wa).forEach(function(t) {
    wa[t].test(e) && (e = e.replace(wa[t], t));
  }), e;
}
function Hu(e) {
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
function Va(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Ku(zu(e)).replace(dr.quotes, "'");
  return "data:image/svg+xml," + ju(t);
}
Va.toSrcset = function(t) {
  return Va(t).replace(/ /g, "%20");
};
var Wu = Va, hl = {}, yl = {};
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
})(yl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(yl);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(hl);
let _a = hl;
var bl = (_a.__esModule ? _a : { default: _a }).default, wl = {}, _l = {};
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
})(_l);
var Uu = {
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
  const t = _l, n = /* @__PURE__ */ o(Uu);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})(wl);
let xa = wl;
var Gu = (xa.__esModule ? xa : { default: xa }).default, xl = {}, Cl = {}, cr = { exports: {} }, ce = String, Bl = function() {
  return { isColorSupported: !1, reset: ce, bold: ce, dim: ce, italic: ce, underline: ce, inverse: ce, hidden: ce, strikethrough: ce, black: ce, red: ce, green: ce, yellow: ce, blue: ce, magenta: ce, cyan: ce, white: ce, gray: ce, bgBlack: ce, bgRed: ce, bgGreen: ce, bgYellow: ce, bgBlue: ce, bgMagenta: ce, bgCyan: ce, bgWhite: ce, blackBright: ce, redBright: ce, greenBright: ce, yellowBright: ce, blueBright: ce, magentaBright: ce, cyanBright: ce, whiteBright: ce, bgBlackBright: ce, bgRedBright: ce, bgGreenBright: ce, bgYellowBright: ce, bgBlueBright: ce, bgMagentaBright: ce, bgCyanBright: ce, bgWhiteBright: ce };
};
cr.exports = Bl();
cr.exports.createColors = Bl;
var Yu = cr.exports;
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
  const n = /* @__PURE__ */ o(Yu);
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
})(Cl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Cl);
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
})(xl);
let Ca = xl;
var Xu = (Ca.__esModule ? Ca : { default: Ca }).default;
const xo = Wu, Zu = bl, $l = Gu, Vt = Xu, [Qu, { lineHeight: Ju }] = $l.fontSize.base, { spacing: kt, borderWidth: fs, borderRadius: ms } = $l;
function en(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const ed = Zu.withOptions(function(e = { strategy: void 0 }) {
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
          "border-color": en(
            o("colors.gray.500", Vt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": fs.DEFAULT,
          "border-radius": ms.none,
          "padding-top": kt[2],
          "padding-right": kt[3],
          "padding-bottom": kt[2],
          "padding-left": kt[3],
          "font-size": Qu,
          "line-height": Ju,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": en(
              o("colors.blue.600", Vt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": en(
              o("colors.blue.600", Vt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: en(o("colors.gray.500", Vt.gray[500]), "--tw-text-opacity"),
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
          "background-image": `url("${xo(
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${a(
              "colors.gray.500",
              Vt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${kt[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": kt[10],
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
          "padding-right": kt[3],
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
          height: kt[4],
          width: kt[4],
          color: en(o("colors.blue.600", Vt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": en(
            o("colors.gray.500", Vt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": fs.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": ms.none
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
          "--tw-ring-color": en(
            o("colors.blue.600", Vt.blue[600]),
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
          "background-image": `url("${xo(
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
          "background-image": `url("${xo(
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
          "background-image": `url("${xo(
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
var td = ed;
const nd = /* @__PURE__ */ gl(td), od = bl;
function vs(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var ad = od(
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
      { values: vs(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: vs(n("animationTimingFunction")) }
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
const rd = /* @__PURE__ */ gl(ad), N_ = {
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
    rd,
    nd({
      strategy: "class"
    })
  ]
}, sd = ["top", "right", "bottom", "left"], Wt = Math.min, et = Math.max, Vo = Math.round, Co = Math.floor, bt = (e) => ({
  x: e,
  y: e
}), ld = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, id = {
  start: "end",
  end: "start"
};
function Na(e, t, n) {
  return et(e, Wt(t, n));
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ft(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function pr(e) {
  return e === "x" ? "y" : "x";
}
function fr(e) {
  return e === "y" ? "height" : "width";
}
const ud = /* @__PURE__ */ new Set(["top", "bottom"]);
function yt(e) {
  return ud.has(Ft(e)) ? "y" : "x";
}
function mr(e) {
  return pr(yt(e));
}
function dd(e, t, n) {
  n === void 0 && (n = !1);
  const o = In(e), a = mr(e), r = fr(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = No(l)), [l, No(l)];
}
function cd(e) {
  const t = No(e);
  return [qa(e), t, qa(t)];
}
function qa(e) {
  return e.replace(/start|end/g, (t) => id[t]);
}
const gs = ["left", "right"], hs = ["right", "left"], pd = ["top", "bottom"], fd = ["bottom", "top"];
function md(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? hs : gs : t ? gs : hs;
    case "left":
    case "right":
      return t ? pd : fd;
    default:
      return [];
  }
}
function vd(e, t, n, o) {
  const a = In(e);
  let r = md(Ft(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(qa)))), r;
}
function No(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ld[t]);
}
function gd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ol(e) {
  return typeof e != "number" ? gd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qo(e) {
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
function ys(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = yt(t), l = mr(t), i = fr(l), u = Ft(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, m = o[i] / 2 - a[i] / 2;
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
  switch (In(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const hd = async (e, t, n) => {
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
  } = ys(d, o, u), m = o, v = {}, f = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: w,
      fn: C
    } = i[g], {
      x: $,
      y: B,
      data: k,
      reset: S
    } = await C({
      x: c,
      y: p,
      initialPlacement: o,
      placement: m,
      strategy: a,
      middlewareData: v,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = $ ?? c, p = B ?? p, v = {
      ...v,
      [w]: {
        ...v[w],
        ...k
      }
    }, S && f <= 50 && (f++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (d = S.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : S.rects), {
      x: c,
      y: p
    } = ys(d, m, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: m,
    strategy: a,
    middlewareData: v
  };
};
async function Jn(e, t) {
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
    altBoundary: m = !1,
    padding: v = 0
  } = Mt(t, e), f = Ol(v), w = i[m ? p === "floating" ? "reference" : "floating" : p], C = qo(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), $ = p === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), k = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = qo(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: $,
    offsetParent: B,
    strategy: u
  }) : $);
  return {
    top: (C.top - S.top + f.top) / k.y,
    bottom: (S.bottom - C.bottom + f.bottom) / k.y,
    left: (C.left - S.left + f.left) / k.x,
    right: (S.right - C.right + f.right) / k.x
  };
}
const yd = (e) => ({
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
    } = Mt(e, t) || {};
    if (d == null)
      return {};
    const p = Ol(c), m = {
      x: n,
      y: o
    }, v = mr(a), f = fr(v), g = await l.getDimensions(d), w = v === "y", C = w ? "top" : "left", $ = w ? "bottom" : "right", B = w ? "clientHeight" : "clientWidth", k = r.reference[f] + r.reference[v] - m[v] - r.floating[f], S = m[v] - r.reference[v], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let P = T ? T[B] : 0;
    (!P || !await (l.isElement == null ? void 0 : l.isElement(T))) && (P = i.floating[B] || r.floating[f]);
    const M = k / 2 - S / 2, R = P / 2 - g[f] / 2 - 1, A = Wt(p[C], R), L = Wt(p[$], R), I = A, U = P - g[f] - L, K = P / 2 - g[f] / 2 + M, X = Na(I, K, U), H = !u.arrow && In(a) != null && K !== X && r.reference[f] / 2 - (K < I ? A : L) - g[f] / 2 < 0, ee = H ? K < I ? K - I : K - U : 0;
    return {
      [v]: m[v] + ee,
      data: {
        [v]: X,
        centerOffset: K - X - ee,
        ...H && {
          alignmentOffset: ee
        }
      },
      reset: H
    };
  }
}), bd = function(e) {
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
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: g = !0,
        ...w
      } = Mt(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const C = Ft(a), $ = yt(i), B = Ft(i) === i, k = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), S = m || (B || !g ? [No(i)] : cd(i)), T = f !== "none";
      !m && T && S.push(...vd(i, g, f, k));
      const P = [i, ...S], M = await Jn(t, w), R = [];
      let A = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && R.push(M[C]), p) {
        const K = dd(a, l, k);
        R.push(M[K[0]], M[K[1]]);
      }
      if (A = [...A, {
        placement: a,
        overflows: R
      }], !R.every((K) => K <= 0)) {
        var L, I;
        const K = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, X = P[K];
        if (X && (!(p === "alignment" ? $ !== yt(X) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((Q) => yt(Q.placement) === $ ? Q.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: A
            },
            reset: {
              placement: X
            }
          };
        let H = (I = A.filter((ee) => ee.overflows[0] <= 0).sort((ee, Q) => ee.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!H)
          switch (v) {
            case "bestFit": {
              var U;
              const ee = (U = A.filter((Q) => {
                if (T) {
                  const q = yt(Q.placement);
                  return q === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((Q) => [Q.placement, Q.overflows.filter((q) => q > 0).reduce((q, le) => q + le, 0)]).sort((Q, q) => Q[1] - q[1])[0]) == null ? void 0 : U[0];
              ee && (H = ee);
              break;
            }
            case "initialPlacement":
              H = i;
              break;
          }
        if (a !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function bs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ws(e) {
  return sd.some((t) => e[t] >= 0);
}
const wd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Mt(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await Jn(t, {
            ...a,
            elementContext: "reference"
          }), l = bs(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: ws(l)
            }
          };
        }
        case "escaped": {
          const r = await Jn(t, {
            ...a,
            altBoundary: !0
          }), l = bs(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: ws(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Sl = /* @__PURE__ */ new Set(["left", "top"]);
async function _d(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Ft(n), i = In(n), u = yt(n) === "y", d = Sl.has(l) ? -1 : 1, c = r && u ? -1 : 1, p = Mt(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: f
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof f == "number" && (v = i === "end" ? f * -1 : f), u ? {
    x: v * c,
    y: m * d
  } : {
    x: m * d,
    y: v * c
  };
}
const xd = function(e) {
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
      } = t, u = await _d(t, e);
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
}, Cd = function(e) {
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
          fn: (w) => {
            let {
              x: C,
              y: $
            } = w;
            return {
              x: C,
              y: $
            };
          }
        },
        ...u
      } = Mt(e, t), d = {
        x: n,
        y: o
      }, c = await Jn(t, u), p = yt(Ft(a)), m = pr(p);
      let v = d[m], f = d[p];
      if (r) {
        const w = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", $ = v + c[w], B = v - c[C];
        v = Na($, v, B);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", $ = f + c[w], B = f - c[C];
        f = Na($, f, B);
      }
      const g = i.fn({
        ...t,
        [m]: v,
        [p]: f
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [m]: r,
            [p]: l
          }
        }
      };
    }
  };
}, Bd = function(e) {
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
      } = Mt(e, t), c = {
        x: n,
        y: o
      }, p = yt(a), m = pr(p);
      let v = c[m], f = c[p];
      const g = Mt(i, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const B = m === "y" ? "height" : "width", k = r.reference[m] - r.floating[B] + w.mainAxis, S = r.reference[m] + r.reference[B] - w.mainAxis;
        v < k ? v = k : v > S && (v = S);
      }
      if (d) {
        var C, $;
        const B = m === "y" ? "width" : "height", k = Sl.has(Ft(a)), S = r.reference[p] - r.floating[B] + (k && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (k ? 0 : w.crossAxis), T = r.reference[p] + r.reference[B] + (k ? 0 : (($ = l.offset) == null ? void 0 : $[p]) || 0) - (k ? w.crossAxis : 0);
        f < S ? f = S : f > T && (f = T);
      }
      return {
        [m]: v,
        [p]: f
      };
    }
  };
}, $d = function(e) {
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
      } = Mt(e, t), c = await Jn(t, d), p = Ft(a), m = In(a), v = yt(a) === "y", {
        width: f,
        height: g
      } = r.floating;
      let w, C;
      p === "top" || p === "bottom" ? (w = p, C = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, w = m === "end" ? "top" : "bottom");
      const $ = g - c.top - c.bottom, B = f - c.left - c.right, k = Wt(g - c[w], $), S = Wt(f - c[C], B), T = !t.middlewareData.shift;
      let P = k, M = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = B), (o = t.middlewareData.shift) != null && o.enabled.y && (P = $), T && !m) {
        const A = et(c.left, 0), L = et(c.right, 0), I = et(c.top, 0), U = et(c.bottom, 0);
        v ? M = f - 2 * (A !== 0 || L !== 0 ? A + L : et(c.left, c.right)) : P = g - 2 * (I !== 0 || U !== 0 ? I + U : et(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: M,
        availableHeight: P
      });
      const R = await l.getDimensions(i.floating);
      return f !== R.width || g !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Xo() {
  return typeof window < "u";
}
function an(e) {
  return vr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xt(e) {
  var t;
  return (t = (vr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vr(e) {
  return Xo() ? e instanceof Node || e instanceof nt(e).Node : !1;
}
function vt(e) {
  return Xo() ? e instanceof Element || e instanceof nt(e).Element : !1;
}
function wt(e) {
  return Xo() ? e instanceof HTMLElement || e instanceof nt(e).HTMLElement : !1;
}
function _s(e) {
  return !Xo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
const Od = /* @__PURE__ */ new Set(["inline", "contents"]);
function uo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Od.has(a);
}
const Sd = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ed(e) {
  return Sd.has(an(e));
}
const Pd = [":popover-open", ":modal"];
function Zo(e) {
  return Pd.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const kd = ["transform", "translate", "scale", "rotate", "perspective"], Dd = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ad = ["paint", "layout", "strict", "content"];
function gr(e) {
  const t = hr(), n = vt(e) ? gt(e) : e;
  return kd.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Dd.some((o) => (n.willChange || "").includes(o)) || Ad.some((o) => (n.contain || "").includes(o));
}
function Td(e) {
  let t = Ut(e);
  for (; wt(t) && !En(t); ) {
    if (gr(t))
      return t;
    if (Zo(t))
      return null;
    t = Ut(t);
  }
  return null;
}
function hr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Id = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function En(e) {
  return Id.has(an(e));
}
function gt(e) {
  return nt(e).getComputedStyle(e);
}
function Qo(e) {
  return vt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ut(e) {
  if (an(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _s(e) && e.host || // Fallback.
    xt(e)
  );
  return _s(t) ? t.host : t;
}
function El(e) {
  const t = Ut(e);
  return En(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wt(t) && uo(t) ? t : El(t);
}
function eo(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = El(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = nt(a);
  if (r) {
    const i = za(l);
    return t.concat(l, l.visualViewport || [], uo(a) ? a : [], i && n ? eo(i) : []);
  }
  return t.concat(a, eo(a, [], n));
}
function za(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Pl(e) {
  const t = gt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = wt(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Vo(n) !== r || Vo(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function yr(e) {
  return vt(e) ? e : e.contextElement;
}
function Cn(e) {
  const t = yr(e);
  if (!wt(t))
    return bt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Pl(t);
  let l = (r ? Vo(n.width) : n.width) / o, i = (r ? Vo(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Md = /* @__PURE__ */ bt(0);
function kl(e) {
  const t = nt(e);
  return !hr() || !t.visualViewport ? Md : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== nt(e) ? !1 : t;
}
function nn(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = yr(e);
  let l = bt(1);
  t && (o ? vt(o) && (l = Cn(o)) : l = Cn(e));
  const i = Fd(r, n, o) ? kl(r) : bt(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const m = nt(r), v = o && vt(o) ? nt(o) : o;
    let f = m, g = za(f);
    for (; g && o && v !== f; ) {
      const w = Cn(g), C = g.getBoundingClientRect(), $ = gt(g), B = C.left + (g.clientLeft + parseFloat($.paddingLeft)) * w.x, k = C.top + (g.clientTop + parseFloat($.paddingTop)) * w.y;
      u *= w.x, d *= w.y, c *= w.x, p *= w.y, u += B, d += k, f = nt(g), g = za(f);
    }
  }
  return qo({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function Jo(e, t) {
  const n = Qo(e).scrollLeft;
  return t ? t.left + n : nn(xt(e)).left + n;
}
function Dl(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Jo(e, n), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Rd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = xt(o), i = t ? Zo(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = bt(1);
  const c = bt(0), p = wt(o);
  if ((p || !p && !r) && ((an(o) !== "body" || uo(l)) && (u = Qo(o)), wt(o))) {
    const v = nn(o);
    d = Cn(o), c.x = v.x + o.clientLeft, c.y = v.y + o.clientTop;
  }
  const m = l && !p && !r ? Dl(l, u) : bt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + m.y
  };
}
function Ld(e) {
  return Array.from(e.getClientRects());
}
function Vd(e) {
  const t = xt(e), n = Qo(e), o = e.ownerDocument.body, a = et(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = et(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Jo(e);
  const i = -n.scrollTop;
  return gt(o).direction === "rtl" && (l += et(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
const xs = 25;
function Nd(e, t) {
  const n = nt(e), o = xt(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const c = hr();
    (!c || c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  const d = Jo(o);
  if (d <= 0) {
    const c = o.ownerDocument, p = c.body, m = getComputedStyle(p), v = c.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, f = Math.abs(o.clientWidth - p.clientWidth - v);
    f <= xs && (r -= f);
  } else d <= xs && (r += d);
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const qd = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function zd(e, t) {
  const n = nn(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = wt(e) ? Cn(e) : bt(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function Cs(e, t, n) {
  let o;
  if (t === "viewport")
    o = Nd(e, n);
  else if (t === "document")
    o = Vd(xt(e));
  else if (vt(t))
    o = zd(t, n);
  else {
    const a = kl(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return qo(o);
}
function Al(e, t) {
  const n = Ut(e);
  return n === t || !vt(n) || En(n) ? !1 : gt(n).position === "fixed" || Al(n, t);
}
function jd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = eo(e, [], !1).filter((i) => vt(i) && an(i) !== "body"), a = null;
  const r = gt(e).position === "fixed";
  let l = r ? Ut(e) : e;
  for (; vt(l) && !En(l); ) {
    const i = gt(l), u = gr(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && qd.has(a.position) || uo(l) && !u && Al(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = Ut(l);
  }
  return t.set(e, o), o;
}
function Kd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Zo(t) ? [] : jd(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = Cs(t, c, a);
    return d.top = et(p.top, d.top), d.right = Wt(p.right, d.right), d.bottom = Wt(p.bottom, d.bottom), d.left = et(p.left, d.left), d;
  }, Cs(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Hd(e) {
  const {
    width: t,
    height: n
  } = Pl(e);
  return {
    width: t,
    height: n
  };
}
function Wd(e, t, n) {
  const o = wt(t), a = xt(t), r = n === "fixed", l = nn(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = bt(0);
  function d() {
    u.x = Jo(a);
  }
  if (o || !o && !r)
    if ((an(t) !== "body" || uo(a)) && (i = Qo(t)), o) {
      const v = nn(t, !0, r, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? Dl(a, i) : bt(0), p = l.left + i.scrollLeft - u.x - c.x, m = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Ba(e) {
  return gt(e).position === "static";
}
function Bs(e, t) {
  if (!wt(e) || gt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return xt(e) === n && (n = n.ownerDocument.body), n;
}
function Tl(e, t) {
  const n = nt(e);
  if (Zo(e))
    return n;
  if (!wt(e)) {
    let a = Ut(e);
    for (; a && !En(a); ) {
      if (vt(a) && !Ba(a))
        return a;
      a = Ut(a);
    }
    return n;
  }
  let o = Bs(e, t);
  for (; o && Ed(o) && Ba(o); )
    o = Bs(o, t);
  return o && En(o) && Ba(o) && !gr(o) ? n : o || Td(e) || n;
}
const Ud = async function(e) {
  const t = this.getOffsetParent || Tl, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Wd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Gd(e) {
  return gt(e).direction === "rtl";
}
const Yd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rd,
  getDocumentElement: xt,
  getClippingRect: Kd,
  getOffsetParent: Tl,
  getElementRects: Ud,
  getClientRects: Ld,
  getDimensions: Hd,
  getScale: Cn,
  isElement: vt,
  isRTL: Gd
};
function Il(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Xd(e, t) {
  let n = null, o;
  const a = xt(e);
  function r() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), r();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: p,
      width: m,
      height: v
    } = d;
    if (i || t(), !m || !v)
      return;
    const f = Co(p), g = Co(a.clientWidth - (c + m)), w = Co(a.clientHeight - (p + v)), C = Co(c), B = {
      rootMargin: -f + "px " + -g + "px " + -w + "px " + -C + "px",
      threshold: et(0, Wt(1, u)) || 1
    };
    let k = !0;
    function S(T) {
      const P = T[0].intersectionRatio;
      if (P !== u) {
        if (!k)
          return l();
        P ? l(!1, P) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Il(d, e.getBoundingClientRect()) && l(), k = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...B,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, B);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function Ml(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = yr(e), c = a || r ? [...d ? eo(d) : [], ...eo(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", n, {
      passive: !0
    }), r && C.addEventListener("resize", n);
  });
  const p = d && i ? Xd(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((C) => {
    let [$] = C;
    $ && $.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var B;
      (B = v) == null || B.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let f, g = u ? nn(e) : null;
  u && w();
  function w() {
    const C = nn(e);
    g && !Il(g, C) && n(), g = C, f = requestAnimationFrame(w);
  }
  return n(), () => {
    var C;
    c.forEach(($) => {
      a && $.removeEventListener("scroll", n), r && $.removeEventListener("resize", n);
    }), p == null || p(), (C = v) == null || C.disconnect(), v = null, u && cancelAnimationFrame(f);
  };
}
const Fl = xd, Rl = Cd, zo = bd, Ll = $d, Vl = wd, Zd = yd, Nl = Bd, Qd = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: Yd,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return hd(e, t, {
    ...a,
    platform: r
  });
};
function Jd(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function ja(e) {
  if (Jd(e)) {
    const t = e.$el;
    return vr(t) && an(t) === "#comment" ? null : t;
  }
  return e;
}
function _n(e) {
  return typeof e == "function" ? e() : s(e);
}
function ql(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = ja(_n(e.element));
      return n == null ? {} : Zd({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function zl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $s(e, t) {
  const n = zl(e);
  return Math.round(t * n) / n;
}
function jl(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = O(() => {
    var P;
    return (P = _n(n.open)) != null ? P : !0;
  }), r = O(() => _n(n.middleware)), l = O(() => {
    var P;
    return (P = _n(n.placement)) != null ? P : "bottom";
  }), i = O(() => {
    var P;
    return (P = _n(n.strategy)) != null ? P : "absolute";
  }), u = O(() => {
    var P;
    return (P = _n(n.transform)) != null ? P : !0;
  }), d = O(() => ja(e.value)), c = O(() => ja(t.value)), p = E(0), m = E(0), v = E(i.value), f = E(l.value), g = On({}), w = E(!1), C = O(() => {
    const P = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return P;
    const M = $s(c.value, p.value), R = $s(c.value, m.value);
    return u.value ? {
      ...P,
      transform: "translate(" + M + "px, " + R + "px)",
      ...zl(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: M + "px",
      top: R + "px"
    };
  });
  let $;
  function B() {
    if (d.value == null || c.value == null)
      return;
    const P = a.value;
    Qd(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((M) => {
      p.value = M.x, m.value = M.y, v.value = M.strategy, f.value = M.placement, g.value = M.middlewareData, w.value = P !== !1;
    });
  }
  function k() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function S() {
    if (k(), o === void 0) {
      B();
      return;
    }
    if (d.value != null && c.value != null) {
      $ = o(d.value, c.value, B);
      return;
    }
  }
  function T() {
    a.value || (w.value = !1);
  }
  return te([r, l, i, a], B, {
    flush: "sync"
  }), te([d, c], S, {
    flush: "sync"
  }), te(a, T, {
    flush: "sync"
  }), or() && ar(k), {
    x: yn(p),
    y: yn(m),
    strategy: yn(v),
    placement: yn(f),
    middlewareData: yn(g),
    isPositioned: yn(w),
    floatingStyles: C,
    update: B
  };
}
function he(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = lo(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (io(o, a), a)];
}
function br(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function jo(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function ec(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tc = function e(t, n) {
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
const tn = /* @__PURE__ */ ec(tc);
function Bn(e) {
  return e == null;
}
function nc(e, t) {
  var n;
  const o = On();
  return _e(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Go(o);
}
function rn(e) {
  return or() ? (ar(e), !0) : !1;
}
function oc() {
  const e = /* @__PURE__ */ new Set(), t = (n) => {
    e.delete(n);
  };
  return {
    on: (n) => {
      e.add(n);
      const o = () => t(n);
      return rn(o), {
        off: o
      };
    },
    off: t,
    trigger: (...n) => Promise.all(Array.from(e).map((o) => o(...n)))
  };
}
function ac(e) {
  let t = !1, n;
  const o = Yo(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Kl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Yo(!0), n = o.run(() => e(...r))), rn(a), n);
}
function It(e) {
  return typeof e == "function" ? e() : s(e);
}
const Ct = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const rc = (e) => typeof e < "u", sc = (e) => e != null, lc = Object.prototype.toString, ic = (e) => lc.call(e) === "[object Object]", Hl = () => {
}, Os = /* @__PURE__ */ uc();
function uc() {
  var e, t;
  return Ct && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function dc(e) {
  return Ue();
}
function Wl(e, t = 1e4) {
  return ml((n, o) => {
    let a = It(e), r;
    const l = () => setTimeout(() => {
      a = It(e), o();
    }, It(t));
    return rn(() => {
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
function cc(e, t) {
  dc() && Tn(e, t);
}
function wr(e, t, n = {}) {
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
    }, It(t));
  }
  return o && (a.value = !0, Ct && u()), rn(i), {
    isPending: Go(a),
    start: u,
    stop: i
  };
}
function pc(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = wr(
    o ?? Hl,
    e,
    t
  ), r = O(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function st(e) {
  var t;
  const n = It(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const co = Ct ? window : void 0;
function Pn(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = co) : [t, n, o, a] = e, !t)
    return Hl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, m, v) => (c.addEventListener(p, m, v), () => c.removeEventListener(p, m, v)), u = te(
    () => [st(t), It(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const m = ic(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((v) => o.map((f) => i(c, v, f, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return rn(d), d;
}
function fc(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function _r(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = co,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = fc(t);
  return Pn(a, r, (d) => {
    d.repeat && It(i) || u(d) && n(d);
  }, l);
}
function xr() {
  const e = E(!1), t = Ue();
  return t && se(() => {
    e.value = !0;
  }, t), e;
}
function mc(e) {
  const t = xr();
  return O(() => (t.value, !!e()));
}
function vc(e, t, n = {}) {
  const { window: o = co, ...a } = n;
  let r;
  const l = mc(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = O(() => {
    const m = It(e), v = (Array.isArray(m) ? m : [m]).map(st).filter(sc);
    return new Set(v);
  }), d = te(
    () => u.value,
    (m) => {
      i(), l.value && m.size && (r = new MutationObserver(t), m.forEach((v) => r.observe(v, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return rn(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function Ul(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = co
  } = t, r = E(!1), l = o ? 1e3 / o : null;
  let i = 0, u = null;
  function d(m) {
    if (!r.value || !a)
      return;
    i || (i = m);
    const v = m - i;
    if (l && v < l) {
      u = a.requestAnimationFrame(d);
      return;
    }
    i = m, e({ delta: v, timestamp: m }), u = a.requestAnimationFrame(d);
  }
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && c(), rn(p), {
    isActive: Go(r),
    pause: p,
    resume: c
  };
}
function gc(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ee(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, v = Ue(), f = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const w = (B) => i ? typeof i == "function" ? i(B) : gc(B) : B, C = () => rc(e[t]) ? w(e[t]) : p, $ = (B) => {
    m ? m(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), k = E(B);
    let S = !1;
    return te(
      () => e[t],
      (T) => {
        S || (S = !0, k.value = w(T), ae(() => S = !1));
      }
    ), te(
      k,
      (T) => {
        !S && (T !== e[t] || c) && $(T);
      },
      { deep: c }
    ), k;
  } else
    return O({
      get() {
        return C();
      },
      set(B) {
        $(B);
      }
    });
}
function ea(e) {
  return e ? e.flatMap((t) => t.type === De ? ea(t.children) : [t]) : [];
}
function qe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const hc = ["INPUT", "TEXTAREA"];
function Gl(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && hc.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, m, v, f, g, w] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], C = v || f, $ = p || m;
  if (!g && !w && (!C && !$ || a === "vertical" && $ || a === "horizontal" && C))
    return null;
  const B = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let k = null;
  return $ || C ? k = Yl(B, t, {
    goForward: C ? f : u === "ltr" ? p : m,
    loop: i
  }) : g ? k = B.at(0) || null : w && (k = B.at(-1) || null), c && (k == null || k.focus()), k;
}
function Yl(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Yl(
    e,
    i,
    n,
    o
  ) : i : null;
}
function $a(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ka(e, t, n = ".", o) {
  if (!$a(t))
    return Ka(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : $a(l) && $a(a[r]) ? a[r] = Ka(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function yc(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Ka(n, o, ""), {})
  );
}
const bc = yc(), [ta] = he("ConfigProvider");
let wc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", _c = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += wc[Math.random() * 64 | 0];
  return t;
};
const xc = Kl(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = O(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = ta({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Os && (a == null || a()), t.value = void 0;
  };
  return te(n, (l, i) => {
    var u;
    if (!Ct)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? bc({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), Os && (a = Pn(
      document,
      "touchmove",
      (m) => Cc(m),
      { passive: !1 }
    )), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function po(e) {
  const t = _c(6), n = xc();
  n.value.set(t, e ?? !1);
  const o = O({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return cc(() => {
    n.value.delete(t);
  }), o;
}
function Xl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Xl(n);
  }
}
function Cc(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Xl(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Bc = "data-radix-vue-collection-item";
function Mn(e, t = Bc) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = st(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Mu(() => {
      a.value = [];
    }), se(r), Fu(r), te(() => o == null ? void 0 : o.value, r, { immediate: !0 }), io(n, a), a;
  }, injectCollection: () => lo(n, E([])) };
}
function Yt(e) {
  const t = ta({
    dir: E("ltr")
  });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Xt(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[cl(Uo(a))] = (...r) => e(a, ...r);
  }), o;
}
let Oa = 0;
function Cr() {
  _e((e) => {
    if (!Ct)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ss()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ss()
    ), Oa++, e(() => {
      Oa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Oa--;
    });
  });
}
function Ss() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function na(e) {
  return O(() => {
    var t;
    return It(e) ? !!((t = st(e)) != null && t.closest("form")) : !0;
  });
}
function ze(e) {
  const t = Ue(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = il(e);
  return O(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Uo(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function ie(e, t) {
  const n = ze(e), o = t ? Xt(t) : {};
  return O(() => ({
    ...n.value,
    ...o
  }));
}
function N() {
  const e = Ue(), t = E(), n = O(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : st(t);
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
function $c(e, t) {
  const n = Wl(!1, 300), o = E(null), a = oc();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Oc(c, d.getBoundingClientRect()), m = Sc(c, p), v = Ec(u.getBoundingClientRect()), f = kc([...m, ...v]);
    o.value = f, n.value = !0;
  }
  return _e((i) => {
    if (e.value && t.value) {
      const u = (c) => l(c, t.value), d = (c) => l(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), _e((i) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var p, m;
        if (!o.value)
          return;
        const v = c.target, f = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(v)) || ((m = t.value) == null ? void 0 : m.contains(v)), w = !Pc(f, o.value), C = !!v.closest("[data-grace-area-trigger]");
        g ? r() : (w || C) && (r(), a.trigger());
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
function Oc(e, t) {
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
function Sc(e, t, n = 5) {
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
function Ec(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Pc(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function kc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Dc(t);
}
function Dc(e) {
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
var Ac = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, bn = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), $o = {}, Sa = 0, Zl = function(e) {
  return e && (e.host || Zl(e.parentNode));
}, Tc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Zl(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ic = function(e, t, n, o) {
  var a = Tc(t, Array.isArray(e) ? e : [e]);
  $o[n] || ($o[n] = /* @__PURE__ */ new WeakMap());
  var r = $o[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        c(m);
      else
        try {
          var v = m.getAttribute(o), f = v !== null && v !== "false", g = (bn.get(m) || 0) + 1, w = (r.get(m) || 0) + 1;
          bn.set(m, g), r.set(m, w), l.push(m), g === 1 && f && Bo.set(m, !0), w === 1 && m.setAttribute(n, "true"), f || m.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return c(t), i.clear(), Sa++, function() {
    l.forEach(function(p) {
      var m = bn.get(p) - 1, v = r.get(p) - 1;
      bn.set(p, m), r.set(p, v), m || (Bo.has(p) || p.removeAttribute(o), Bo.delete(p)), v || p.removeAttribute(n);
    }), Sa--, Sa || (bn = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), $o = {});
  };
}, Mc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Ac(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), Ic(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function fo(e) {
  let t;
  te(() => st(e), (n) => {
    n ? t = Mc(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let Fc = 0;
function Le(e, t = "radix") {
  const n = ta({ useId: void 0 });
  return xn.useId ? `${t}-${xn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Fc}`;
}
function Ql(e) {
  const t = E(), n = O(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = O(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return se(() => {
    const a = st(e);
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
function Rc(e, t) {
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
const Lc = "data-item-text";
function Br(e) {
  const t = Wl("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = qe(), l = a.map((p) => {
        var m;
        return {
          ref: p,
          textValue: ((m = (p.querySelector(`[${Lc}]`) ?? p).textContent) == null ? void 0 : m.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Nc(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Vc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Nc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = Vc(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const $r = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = ea(n.default()), l = r.findIndex((c) => c.type !== lr);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? D(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = pl(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), W = b({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ge(o, t) : o !== "template" ? () => Ge(e.as, t, { default: n.default }) : () => Ge($r, t, { default: n.default });
  }
});
function Jl() {
  const e = E(), t = O(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : st(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [ei, qc] = he("CollapsibleRoot"), zc = /* @__PURE__ */ b({
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
    const o = e, a = Ee(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = Ee(o, "disabled");
    return qc({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), N(), (l, i) => (h(), x(s(W), {
      as: l.as,
      "as-child": o.asChild,
      "data-state": s(a) ? "open" : "closed",
      "data-disabled": s(r) ? "" : void 0
    }, {
      default: y(() => [
        _(l.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), jc = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const n = ei();
    return (o, a) => {
      var r, l;
      return h(), x(s(W), {
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
function Kc(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? co, { state: d, dispatch: c } = Rc(l, {
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
  }), p = (w) => {
    var C;
    if (Ct) {
      const $ = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent($);
    }
  };
  te(
    e,
    async (w, C) => {
      var $;
      const B = C !== w;
      if (await ae(), B) {
        const k = a.value, S = Oo(t.value);
        w ? (c("MOUNT"), p("enter"), S === "none" && p("after-enter")) : S === "none" || (($ = o.value) == null ? void 0 : $.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && k !== S ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const m = (w) => {
    const C = Oo(t.value), $ = C.includes(
      w.animationName
    ), B = d.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && $ && (p(`after-${B}`), c("ANIMATION_END"), !r.value)) {
      const k = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var S;
        ((S = t.value) == null ? void 0 : S.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = k);
      });
    }
    w.target === t.value && C === "none" && c("ANIMATION_END");
  }, v = (w) => {
    w.target === t.value && (a.value = Oo(t.value));
  }, f = te(
    t,
    (w, C) => {
      w ? (o.value = getComputedStyle(w), w.addEventListener("animationstart", v), w.addEventListener("animationcancel", m), w.addEventListener("animationend", m)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), C == null || C.removeEventListener("animationstart", v), C == null || C.removeEventListener("animationcancel", m), C == null || C.removeEventListener("animationend", m));
    },
    { immediate: !0 }
  ), g = te(d, () => {
    const w = Oo(t.value);
    a.value = d.value === "mounted" ? w : "none";
  });
  return Ke(() => {
    f(), g();
  }), {
    isPresent: O(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Oo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const lt = b({
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
    const { present: a, forceMount: r } = we(e), l = E(), { isPresent: i } = Kc(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = ea(u || []);
    const d = Ue();
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
    return () => r.value || a.value || i.value ? Ge(t.default({ present: i })[0], {
      ref: (c) => {
        const p = st(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), Hc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ei();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = N(), l = E(0), i = E(0), u = O(() => n.open.value), d = E(u.value), c = E();
    return te(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await ae();
        const p = r.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const m = p.getBoundingClientRect();
        i.value = m.height, l.value = m.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), se(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, m) => (h(), x(s(lt), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, f;
        return [
          F(s(W), D(p.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
            "data-state": s(n).open.value ? "open" : "closed",
            "data-disabled": (v = s(n).disabled) != null && v.value ? "" : void 0,
            hidden: !((f = o.value) != null && f.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: y(() => {
              var g;
              return [
                (g = o.value) != null && g.present ? _(p.$slots, "default", { key: 0 }) : ye("", !0)
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
function ti({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (Bn(e) && Bn(n) && Bn(t))
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
function Wc({ type: e, defaultValue: t, modelValue: n }) {
  return e || ti({ type: e, defaultValue: t, modelValue: n });
}
function Uc({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Gc(e, t) {
  const n = E(Wc(e)), o = Ee(e, "modelValue", t, {
    defaultValue: Uc(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = ti(e);
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
const [oa, Yc] = he("AccordionRoot"), Xc = /* @__PURE__ */ b({
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
    const n = e, o = t, { dir: a, disabled: r } = we(n), l = Yt(a), { modelValue: i, changeModelValue: u, isSingle: d } = Gc(n, o), { forwardRef: c, currentElement: p } = N();
    return Yc({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (m, v) => (h(), x(s(W), {
      ref: s(c),
      "as-child": m.asChild,
      as: m.as
    }, {
      default: y(() => [
        _(m.$slots, "default", { modelValue: s(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Or, Zc] = he("AccordionItem"), Qc = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = oa(), a = O(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = O(() => o.disabled.value || n.disabled), l = O(() => r.value ? "" : void 0), i = O(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = N();
    Zc({
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
      var m;
      const v = p.target;
      if (Array.from(((m = o.parentElement.value) == null ? void 0 : m.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((f) => f === v) === -1)
        return null;
      Gl(
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
    return (p, m) => (h(), x(s(zc), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Qe(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Jc = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = oa(), o = Or();
    return N(), (a, r) => (h(), x(s(Hc), {
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
        _(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), ep = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = oa(), o = Or();
    return N(), (a, r) => (h(), x(s(W), {
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
}), tp = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = oa(), o = Or();
    o.triggerId || (o.triggerId = Le(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), x(s(jc), {
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
}), [Bt, np] = he("DialogRoot"), Sr = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = E(), r = E(), { modal: l } = we(n);
    return np({
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
}), Er = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Bt(), { forwardRef: o, currentElement: a } = N();
    return n.contentId || (n.contentId = Le(void 0, "radix-vue-dialog-content")), se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(W), D(t, {
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
}), Fn = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = xr();
    return (n, o) => s(t) || n.forceMount ? (h(), x(so, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : ye("", !0);
  }
}), Pr = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Fn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), op = "dismissableLayer.pointerDownOutside", ap = "dismissableLayer.focusOutside";
function ni(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function rp(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return _e((l) => {
    if (!Ct)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (ni(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            br(
              op,
              e,
              m
            );
          };
          const m = { originalEvent: d };
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
function sp(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return _e((r) => {
    if (!Ct)
      return;
    const l = async (i) => {
      t != null && t.value && (await ae(), !(!t.value || ni(t.value, i.target)) && i.target && !a.value && br(
        ap,
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
const ct = Sn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Rn = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = O(
      () => {
        var f;
        return ((f = r.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
      }
    ), i = O(() => ct.layersRoot), u = O(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = O(() => ct.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const f = Array.from(i.value), [g] = [...ct.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(g);
      return u.value >= w;
    }), p = rp(async (f) => {
      const g = [...ct.branches].some(
        (w) => w == null ? void 0 : w.contains(f.target)
      );
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await ae(), f.defaultPrevented || o("dismiss"));
    }, r), m = sp((f) => {
      [...ct.branches].some(
        (g) => g == null ? void 0 : g.contains(f.target)
      ) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    _r("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let v;
    return _e((f) => {
      r.value && (n.disableOutsidePointerEvents && (ct.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), ct.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && ct.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), _e((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), ct.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(W), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: _t({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(m).onFocusCapture,
      onBlurCapture: s(m).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        _(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), lp = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N();
    return se(() => {
      ct.branches.add(o.value);
    }), Ke(() => {
      ct.branches.delete(o.value);
    }), (a, r) => (h(), x(s(W), D({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ea = "focusScope.autoFocusOnMount", Pa = "focusScope.autoFocusOnUnmount", Es = { bubbles: !1, cancelable: !0 };
function Fo(e, { select: t = !1 } = {}) {
  const n = qe();
  for (const o of e)
    if (jt(o, { select: t }), qe() !== n)
      return !0;
}
function ip(e) {
  const t = kr(e), n = Ps(t, e), o = Ps(t.reverse(), e);
  return [n, o];
}
function kr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ps(e, t) {
  for (const n of e)
    if (!up(n, { upTo: t }))
      return n;
}
function up(e, { upTo: t }) {
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
function dp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function jt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = qe();
    e.focus({ preventScroll: !0 }), e !== n && dp(e) && t && e.select();
  }
}
const cp = ac(() => E([]));
function pp() {
  const e = cp();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = ks(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = ks(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function ks(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function fp(e) {
  return e.filter((t) => t.tagName !== "A");
}
const aa = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = N(), l = E(null), i = pp(), u = Sn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    _e((c) => {
      if (!Ct)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function m(w) {
        if (u.paused || !p)
          return;
        const C = w.target;
        p.contains(C) ? l.value = C : jt(l.value, { select: !0 });
      }
      function v(w) {
        if (u.paused || !p)
          return;
        const C = w.relatedTarget;
        C !== null && (p.contains(C) || jt(l.value, { select: !0 }));
      }
      function f(w) {
        p.contains(l.value) || jt(p);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const g = new MutationObserver(f);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), _e(async (c) => {
      const p = r.value;
      if (await ae(), !p)
        return;
      i.add(u);
      const m = qe();
      if (!p.contains(m)) {
        const v = new CustomEvent(Ea, Es);
        p.addEventListener(Ea, (f) => o("mountAutoFocus", f)), p.dispatchEvent(v), v.defaultPrevented || (Fo(fp(kr(p)), {
          select: !0
        }), qe() === m && jt(p));
      }
      c(() => {
        p.removeEventListener(Ea, (g) => o("mountAutoFocus", g));
        const v = new CustomEvent(Pa, Es), f = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(Pa, f), p.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || jt(m ?? document.body, { select: !0 }), p.removeEventListener(Pa, f), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = qe();
      if (p && m) {
        const v = c.currentTarget, [f, g] = ip(v);
        f && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && jt(f, { select: !0 })) : c.shiftKey && m === f && (c.preventDefault(), n.loop && jt(g, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(W), {
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
}), mp = "menu.itemSelect", Ha = ["Enter", " "], vp = ["ArrowDown", "PageUp", "Home"], oi = ["ArrowUp", "PageDown", "End"], gp = [...vp, ...oi], hp = {
  ltr: [...Ha, "ArrowRight"],
  rtl: [...Ha, "ArrowLeft"]
}, yp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Dr(e) {
  return e ? "open" : "closed";
}
function Ko(e) {
  return e === "indeterminate";
}
function Ar(e) {
  return Ko(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Wa(e) {
  const t = qe();
  for (const n of e)
    if (n === t || (n.focus(), qe() !== t))
      return;
}
function bp(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function wp(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return bp(n, t);
}
function to(e) {
  return e.pointerType === "mouse";
}
const _p = "DialogTitle", xp = "DialogContent";
function Cp({
  titleName: e = _p,
  contentName: t = xp,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  se(() => {
    var u;
    document.getElementById(o) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const ai = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Bt(), { forwardRef: r, currentElement: l } = N();
    return a.titleId || (a.titleId = Le(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = Le(void 0, "radix-vue-dialog-description")), se(() => {
      a.contentElement = l, qe() !== document.body && (a.triggerElement.value = qe());
    }), process.env.NODE_ENV !== "production" && Cp({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(aa), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s(Rn), D({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(Dr)(s(a).open.value)
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
}), Bp = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Bt(), r = Xt(o), { forwardRef: l, currentElement: i } = N();
    return fo(i), (u, d) => (h(), x(ai, D({ ...n, ...s(r) }, {
      ref: s(l),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = s(a).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || m) && c.preventDefault();
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
}), $p = /* @__PURE__ */ b({
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
    const n = e, o = Xt(t);
    N();
    const a = Bt(), r = E(!1), l = E(!1);
    return (i, u) => (h(), x(ai, D({ ...n, ...s(o) }, {
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
}), ra = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Bt(), r = Xt(o), { forwardRef: l } = N();
    return (i, u) => (h(), x(s(lt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Bp, D({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x($p, D({
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
}), Op = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Bt();
    return po(!0), N(), (n, o) => (h(), x(s(W), {
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
}), sa = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Bt(), { forwardRef: n } = N();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(lt), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          F(Op, D(o.$attrs, {
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
      }, 8, ["present"])) : ye("", !0);
    };
  }
}), sn = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    N();
    const n = Bt();
    return (o, a) => (h(), x(s(W), D(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Tr = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Bt();
    return N(), (o, a) => (h(), x(s(W), D(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ir = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    N();
    const n = Bt();
    return (o, a) => (h(), x(s(W), D(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Sp = /* @__PURE__ */ b({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = ie(e, t);
    return N(), (o, a) => (h(), x(s(Sr), D(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ep = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Er), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pp = /* @__PURE__ */ b({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Fn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kp, Dp] = he("AlertDialogContent"), Ap = /* @__PURE__ */ b({
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
    const n = e, o = Xt(t);
    N();
    const a = E();
    return Dp({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), x(s(ra), D({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Pe(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Pe(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        ae(() => {
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
}), Tp = /* @__PURE__ */ b({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(sa), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ip = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = kp(), { forwardRef: o, currentElement: a } = N();
    return se(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), x(s(sn), D(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mp = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Tr), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Ir), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(sn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ri, Lp] = he("AvatarRoot"), Vp = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), Lp({
      imageLoadingStatus: E("loading")
    }), (t, n) => (h(), x(s(W), {
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
function Np(e, t) {
  const n = E("idle"), o = E(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return se(() => {
    o.value = !0, te([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), Ke(() => {
    o.value = !1;
  }), n;
}
const qp = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a, referrerPolicy: r } = we(n);
    N();
    const l = ri(), i = Np(a, r);
    return te(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => An((h(), x(s(W), {
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
      [rr, s(i) === "loaded"]
    ]);
  }
}), zp = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ri();
    N();
    const o = E(!1);
    let a;
    return te(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), x(s(W), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : ye("", !0);
  }
}), [si, jp] = he("PopperRoot"), Ln = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return jp({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), mo = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = N(), a = si();
    return _e(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), x(s(W), {
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
function Kp(e) {
  return e !== null;
}
function Hp(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, m] = Ua(r), v = { start: "0%", center: "50%", end: "100%" }[m], f = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let w = "", C = "";
      return p === "bottom" ? (w = u ? v : `${f}px`, C = `${-c}px`) : p === "top" ? (w = u ? v : `${f}px`, C = `${l.floating.height + c}px`) : p === "right" ? (w = `${-c}px`, C = u ? v : `${g}px`) : p === "left" && (w = `${l.floating.width + c}px`, C = u ? v : `${g}px`), { data: { x: w, y: C } };
    }
  };
}
function Ua(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const li = {
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
}, [q_, Wp] = he("PopperContent"), kn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ ir({
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
    ...li
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = si(), { forwardRef: r, currentElement: l } = N(), i = E(), u = E(), { width: d, height: c } = Ql(u), p = O(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), v = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = O(() => ({
      padding: m.value,
      boundary: v.value.filter(Kp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), g = nc(() => [
      Fl({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && zo({
        ...f.value
      }),
      n.avoidCollisions && Rl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Nl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && zo({
        ...f.value
      }),
      Ll({
        ...f.value,
        apply: ({ elements: A, rects: L, availableWidth: I, availableHeight: U }) => {
          const { width: K, height: X } = L.reference, H = A.floating.style;
          H.setProperty(
            "--radix-popper-available-width",
            `${I}px`
          ), H.setProperty(
            "--radix-popper-available-height",
            `${U}px`
          ), H.setProperty(
            "--radix-popper-anchor-width",
            `${K}px`
          ), H.setProperty(
            "--radix-popper-anchor-height",
            `${X}px`
          );
        }
      }),
      u.value && ql({ element: u.value, padding: n.arrowPadding }),
      Hp({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Vl({ strategy: "referenceHidden", ...f.value })
    ]), { floatingStyles: w, placement: C, isPositioned: $, middlewareData: B } = jl(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => Ml(...A, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), k = O(
      () => Ua(C.value)[0]
    ), S = O(
      () => Ua(C.value)[1]
    );
    ur(() => {
      $.value && o("placed");
    });
    const T = O(
      () => {
        var A;
        return ((A = B.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), P = E("");
    _e(() => {
      l.value && (P.value = window.getComputedStyle(l.value).zIndex);
    });
    const M = O(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), R = O(() => {
      var A;
      return ((A = B.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return Wp({
      placedSide: k,
      onArrowChange: (A) => u.value = A,
      arrowX: M,
      arrowY: R,
      shouldHideArrow: T
    }), (A, L) => {
      var I, U, K;
      return h(), z("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: _t({
          ...s(w),
          transform: s($) ? s(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: P.value,
          "--radix-popper-transform-origin": [
            (I = s(B).transformOrigin) == null ? void 0 : I.x,
            (U = s(B).transformOrigin) == null ? void 0 : U.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((K = s(B).hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        F(s(W), D({ ref: s(r) }, A.$attrs, {
          "as-child": n.asChild,
          as: A.as,
          "data-side": k.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s($) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            _(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), vo = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return N(), (t, n) => (h(), x(s(W), {
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
}), Up = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = O(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), z(De, null, Ht(n.value, (r) => (h(), x(vo, {
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
}), Gp = "data-radix-vue-collection-item", [Mr, Yp] = he("CollectionProvider");
function Fr(e = Gp) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = Yp({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = Lr(o), r = O(() => Array.from(o.itemMap.value.values())), l = O(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const Rr = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Mr(), { primitiveElement: o, currentElement: a } = Jl();
    return te(a, () => {
      n.collectionRef.value = a.value;
    }), () => Ge($r, { ref: o }, t);
  }
}), la = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = Mr(), { primitiveElement: a, currentElement: r } = Jl();
    return _e((l) => {
      if (r.value) {
        const i = fl(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => Ge($r, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function Lr(e) {
  const t = e ?? Mr();
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
const [Vn, Xp] = he("ComboboxRoot"), Zp = /* @__PURE__ */ b({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = we(n), i = Yt(l), u = Ee(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = Ee(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = Ee(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function m(q) {
      var le, re;
      c.value = q, await ae(), q ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (le = B().find((ke) => {
        var Me, Ve;
        return ((Ve = (Me = ke.ref) == null ? void 0 : Me.dataset) == null ? void 0 : Ve.state) === "checked";
      })) == null ? void 0 : le.value : p.value = d.value), await ae(), (re = g.value) == null || re.focus(), U()) : (f.value = !1, n.resetSearchTermOnBlur && M("blur"));
    }
    function v(q) {
      if (Array.isArray(d.value) && a.value) {
        const le = d.value.findIndex((ke) => tn(ke, q)), re = [...d.value];
        le === -1 ? re.push(q) : re.splice(le, 1), d.value = re;
      } else
        d.value = q, m(!1);
    }
    const f = E(!1), g = E(), w = E(), { forwardRef: C, currentElement: $ } = N(), { getItems: B, reactiveItems: k, itemMapSize: S } = Fr("data-radix-vue-combobox-item"), T = E([]);
    te(() => S.value, () => {
      T.value = B().map((q) => q.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const P = O(() => {
      if (f.value) {
        if (n.filterFunction)
          return n.filterFunction(T.value, u.value);
        const q = T.value.filter((le) => typeof le == "string");
        if (q.length)
          return q.filter((le) => {
            var re;
            return le.toLowerCase().includes((re = u.value) == null ? void 0 : re.toLowerCase());
          });
      }
      return T.value;
    });
    function M(q) {
      const le = q === "blur" || q === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : le && (u.value = "") : le && (u.value = "");
    }
    const R = O(() => P.value.findIndex((q) => tn(q, p.value))), A = O(() => {
      var q;
      return (q = k.value.find((le) => tn(le.value, p.value))) == null ? void 0 : q.ref;
    }), L = O(() => JSON.stringify(d.value));
    te(L, async () => {
      await ae(), await ae(), M("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [P.value.length, u.value.length], async ([q, le], [re, ke]) => {
      await ae(), await ae(), q && (ke > le || R.value === -1) && (p.value = P.value[0]);
    });
    const I = na($);
    function U() {
      var q;
      A.value instanceof Element && ((q = A.value) == null || q.scrollIntoView({ block: "nearest" }));
    }
    function K() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const X = E(!1);
    function H() {
      X.value = !0;
    }
    function ee() {
      requestAnimationFrame(() => {
        X.value = !1;
      });
    }
    async function Q(q) {
      var le;
      P.value.length && p.value && A.value instanceof Element && (q.preventDefault(), q.stopPropagation(), X.value || (le = A.value) == null || le.click());
    }
    return Xp({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: f,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: m,
      filteredOptions: P,
      contentId: "",
      inputElement: g,
      selectedElement: A,
      onInputElementChange: (q) => g.value = q,
      onInputNavigation: async (q) => {
        const le = R.value;
        le === 0 && q === "up" || le === P.value.length - 1 && q === "down" || (le === -1 && P.value.length || q === "home" ? p.value = P.value[0] : q === "end" ? p.value = P.value[P.value.length - 1] : p.value = P.value[q === "up" ? le - 1 : le + 1], await ae(), U(), K(), ae(() => {
          var re;
          return (re = g.value) == null ? void 0 : re.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: Q,
      onCompositionEnd: ee,
      onCompositionStart: H,
      selectedValue: p,
      onSelectedValueChange: (q) => p.value = q,
      parentElement: $,
      contentElement: w,
      onContentElementChange: (q) => w.value = q
    }), (q, le) => (h(), x(s(Ln), null, {
      default: y(() => [
        F(s(W), D({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: q.as,
          "as-child": q.asChild,
          dir: s(i)
        }, q.$attrs), {
          default: y(() => [
            _(q.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(I) && n.name ? (h(), x(s(Up), {
              key: 0,
              name: n.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : ye("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Qp = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = Vn(), { forwardRef: o, currentElement: a } = N();
    se(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = O(() => t.disabled || n.disabled.value || !1), l = E();
    ul(() => {
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
    return (c, p) => (h(), x(s(W), {
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
        Qe(Pe(i, ["prevent"]), ["down", "up"]),
        Qe(s(n).onInputEnter, ["enter"]),
        Qe(Pe(u, ["prevent"]), ["home", "end"])
      ],
      onCompositionstart: s(n).onCompositionStart,
      onCompositionend: s(n).onCompositionEnd
    }, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
  }
}), [ii, Jp] = he("ComboboxGroup"), ef = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = N(), a = Le(void 0, "radix-vue-combobox-group"), r = Vn(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return vc(o, () => {
      ae(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      ae(() => {
        i();
      });
    }, { immediate: !0 }), Jp({
      id: a
    }), (u, d) => An((h(), x(s(W), D(t, {
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
      [rr, l.value]
    ]);
  }
}), tf = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    N();
    const n = ii({ id: "" });
    return (o, a) => (h(), x(s(W), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [z_, nf] = he("ComboboxContent"), of = /* @__PURE__ */ b({
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
    const n = e, o = t, { position: a } = we(n), r = Vn();
    po(n.bodyLock);
    const { forwardRef: l, currentElement: i } = N();
    fo(r.parentElement);
    const u = O(() => n.position === "popper" ? n : {}), d = ze(u.value);
    function c(m) {
      r.onSelectedValueChange("");
    }
    se(() => {
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
    return nf({ position: a }), (m, v) => (h(), x(s(Rr), null, {
      default: y(() => [
        m.dismissable ? (h(), x(s(Rn), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": m.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (f) => s(r).onOpenChange(!1)),
          onFocusOutside: v[1] || (v[1] = (f) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("focusOutside", f);
          }),
          onInteractOutside: v[2] || (v[2] = (f) => o("interactOutside", f)),
          onEscapeKeyDown: v[3] || (v[3] = (f) => o("escapeKeyDown", f)),
          onPointerDownOutside: v[4] || (v[4] = (f) => {
            var g;
            (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
          })
        }, {
          default: y(() => [
            (h(), x(tt(s(a) === "popper" ? s(kn) : s(W)), D({ ...m.$attrs, ...s(d) }, {
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
                _(m.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (h(), x(tt(s(a) === "popper" ? s(kn) : s(W)), D({ key: 1 }, { ...m.$attrs, ...u.value }, {
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
            _(m.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), af = /* @__PURE__ */ b({
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
    const n = ie(e, t), { forwardRef: o } = N(), a = Vn();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-combobox-content")), (r, l) => (h(), x(s(lt), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        F(of, D({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rf = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const n = Vn(), o = O(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), x(s(W), Y(D({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          Ce("No options")
        ])
      ]),
      _: 3
    }, 16)) : ye("", !0);
  }
});
function sf(e) {
  const t = ta({
    nonce: E()
  });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [j_, lf] = he("ComboboxItem"), uf = "combobox.select", df = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = we(n), r = Vn();
    ii({ id: "", options: E([]) });
    const { forwardRef: l } = N(), i = O(
      () => {
        var g, w;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((C) => tn(C, n.value)) : tn((w = r.modelValue) == null ? void 0 : w.value, n.value);
      }
    ), u = O(() => tn(r.selectedValue.value, n.value)), d = Le(void 0, "radix-vue-combobox-item"), c = Le(void 0, "radix-vue-combobox-option"), p = O(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => tn(g, n.value)) : !0);
    async function m(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function v(g) {
      if (!g)
        return;
      const w = { originalEvent: g, value: n.value };
      br(uf, m, w);
    }
    async function f(g) {
      await ae(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return lf({
      isSelected: i
    }), (g, w) => (h(), x(s(la), { value: g.value }, {
      default: y(() => [
        An(F(s(W), {
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
          onPointermove: f
        }, {
          default: y(() => [
            _(g.$slots, "default", {}, () => [
              Ce(Ae(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [rr, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), cf = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ui = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(mo), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function pf() {
  const e = E(!1);
  return se(() => {
    Pn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Pn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const ff = Kl(pf), [ln, di] = he(["MenuRoot", "MenuSub"], "MenuContext"), [go, mf] = he("MenuRoot"), vf = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = we(n), l = Yt(r), i = Ee(n, "open", o), u = E(), d = ff();
    return di({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), mf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), x(s(Ln), null, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), gf = "rovingFocusGroup.onEntryFocus", hf = { bubbles: !1, cancelable: !0 }, yf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function bf(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function wf(e, t, n) {
  const o = bf(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return yf[o];
}
function ci(e, t = !1) {
  const n = qe();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), qe() !== n))
      return;
}
function _f(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [xf, Cf] = he("RovingFocusGroup"), pi = /* @__PURE__ */ b({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = we(o), u = Yt(i), d = Ee(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), m = E(0), { getItems: v } = Fr();
    function f(w) {
      const C = !p.value;
      if (w.currentTarget && w.target === w.currentTarget && C && !c.value) {
        const $ = new CustomEvent(gf, hf);
        if (w.currentTarget.dispatchEvent($), a("entryFocus", $), !$.defaultPrevented) {
          const B = v().map((P) => P.ref).filter((P) => P.dataset.disabled !== ""), k = B.find((P) => P.getAttribute("data-active") === "true"), S = B.find(
            (P) => P.id === d.value
          ), T = [k, S, ...B].filter(
            Boolean
          );
          ci(T, o.preventScrollOnEntryFocus);
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
    }), Cf({
      loop: r,
      dir: u,
      orientation: l,
      currentTabStopId: d,
      onItemFocus: (w) => {
        d.value = w;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (w, C) => (h(), x(s(Rr), null, {
      default: y(() => [
        F(s(W), {
          tabindex: c.value || m.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: w.as,
          "as-child": w.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = ($) => p.value = !0),
          onMouseup: g,
          onFocus: f,
          onBlur: C[1] || (C[1] = ($) => c.value = !1)
        }, {
          default: y(() => [
            _(w.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Bf = /* @__PURE__ */ b({
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
    const t = e, n = xf(), o = O(() => t.tabStopId || Le()), a = O(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = Lr();
    se(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ke(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = wf(
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
          d = n.loop.value ? _f(d, c + 1) : d.slice(c + 1);
        }
        ae(() => ci(d));
      }
    }
    return (i, u) => (h(), x(s(la), null, {
      default: y(() => [
        F(s(W), {
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
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Vr, $f] = he("MenuContent"), Nr = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ ir({
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
    ...li
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ln(), r = go(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = we(n);
    Cr(), po(i.value);
    const d = E(""), c = E(0), p = E(0), m = E(null), v = E("right"), f = E(0), g = E(null), { createCollection: w } = Mn(), { forwardRef: C, currentElement: $ } = N(), B = w($);
    te($, (A) => {
      a.onContentChange(A);
    });
    const { handleTypeaheadSearch: k } = Br(B);
    Ke(() => {
      window.clearTimeout(c.value);
    });
    function S(A) {
      var L, I;
      return v.value === ((L = m.value) == null ? void 0 : L.side) && wp(A, (I = m.value) == null ? void 0 : I.area);
    }
    async function T(A) {
      var L;
      o("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (L = $.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function P(A) {
      if (A.defaultPrevented)
        return;
      const L = A.target.closest("[data-radix-menu-content]") === A.currentTarget, I = A.ctrlKey || A.altKey || A.metaKey, U = A.key.length === 1, K = Gl(
        A,
        qe(),
        $.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (K)
        return K == null ? void 0 : K.focus();
      if (A.code === "Space" || (L && (A.key === "Tab" && A.preventDefault(), !I && U && k(A.key)), A.target !== $.value) || !gp.includes(A.key))
        return;
      A.preventDefault();
      const X = B.value;
      oi.includes(A.key) && X.reverse(), Wa(X);
    }
    function M(A) {
      var L, I;
      (I = (L = A == null ? void 0 : A.currentTarget) == null ? void 0 : L.contains) != null && I.call(L, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function R(A) {
      var L;
      if (!to(A))
        return;
      const I = A.target, U = f.value !== A.clientX;
      if ((L = A == null ? void 0 : A.currentTarget) != null && L.contains(I) && U) {
        const K = A.clientX > f.value ? "right" : "left";
        v.value = K, f.value = A.clientX;
      }
    }
    return $f({
      onItemEnter: (A) => !!S(A),
      onItemLeave: (A) => {
        var L;
        S(A) || ((L = $.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (A) => !!S(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        m.value = A;
      }
    }), (A, L) => (h(), x(s(aa), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: T,
      onUnmountAutoFocus: L[7] || (L[7] = (I) => o("closeAutoFocus", I))
    }, {
      default: y(() => [
        F(s(Rn), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (I) => o("escapeKeyDown", I)),
          onPointerDownOutside: L[3] || (L[3] = (I) => o("pointerDownOutside", I)),
          onFocusOutside: L[4] || (L[4] = (I) => o("focusOutside", I)),
          onInteractOutside: L[5] || (L[5] = (I) => o("interactOutside", I)),
          onDismiss: L[6] || (L[6] = (I) => o("dismiss"))
        }, {
          default: y(() => [
            F(s(pi), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (I) => g.value = I),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: L[1] || (L[1] = (I) => {
                o("entryFocus", I), s(r).isUsingKeyboardRef.value || I.preventDefault();
              })
            }, {
              default: y(() => [
                F(s(kn), {
                  ref: s(C),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Dr)(s(a).open.value),
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
                  onKeydown: P,
                  onBlur: M,
                  onPointermove: R
                }, {
                  default: y(() => [
                    _(A.$slots, "default")
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
}), fi = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Vr(), { forwardRef: o } = N(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && to(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await ae(), !i.defaultPrevented && to(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), x(s(la), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        F(s(W), D({
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
            await ae(), !(d.defaultPrevented || i.disabled) && (a.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await ae(), !d.defaultPrevented && (a.value = !1);
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
}), qr = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = go(), i = Vr(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(mp, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await ae(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), x(fi, D(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (m) => {
        var v;
        await ae(), !m.defaultPrevented && (u.value || (v = m.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (m) => {
        const v = s(i).searchRef.value !== "";
        c.disabled || v && m.key === " " || s(Ha).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Of, mi] = he(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Sf = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Of({
      checked: E(!1)
    });
    return (n, o) => (h(), x(s(lt), {
      present: n.forceMount || s(Ko)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        F(s(W), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(Ar)(s(t).checked.value)
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
}), Ef = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ee(n, "checked", o);
    return mi({ checked: a }), (r, l) => (h(), x(qr, D({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Ko)(s(a)) ? "mixed" : s(a),
      "data-state": s(Ar)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Ko)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Pf = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ie(n, o), r = ln(), { forwardRef: l, currentElement: i } = N();
    return fo(i), (u, d) => (h(), x(Nr, D(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Pe((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), kf = /* @__PURE__ */ b({
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
    const n = ie(e, t), o = ln();
    return (a, r) => (h(), x(Nr, D(s(n), {
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
}), Df = /* @__PURE__ */ b({
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
    const n = ie(e, t), o = ln(), a = go();
    return (r, l) => (h(), x(s(lt), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Pf, Y(D({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(kf, Y(D({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), vi = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), D({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Af = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tf = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Fn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [If, Mf] = he("MenuRadioGroup"), Ff = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "modelValue", t);
    return Mf({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), x(vi, Y(J(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), Rf = /* @__PURE__ */ b({
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
    const n = e, o = t, { value: a } = we(n), r = If(), l = O(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return mi({ checked: l }), (i, u) => (h(), x(qr, D({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(Ar)(l.value),
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
}), Lf = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), D(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [gi, Vf] = he("MenuSub"), Nf = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = ln(), r = E(), l = E();
    return _e((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), di({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Vf({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), x(s(Ln), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), qf = /* @__PURE__ */ b({
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
    const n = ie(e, t), o = ln(), a = go(), r = gi(), { forwardRef: l, currentElement: i } = N();
    return r.contentId || (r.contentId = Le(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), x(s(lt), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        F(Nr, D(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Pe((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Pe(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, m;
            const v = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), f = s(yp)[s(a).dir.value].includes(c.key);
            v && f && (s(o).onOpenChange(!1), (m = s(r).trigger.value) == null || m.focus(), c.preventDefault());
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
}), zf = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ln(), o = go(), a = gi(), r = Vr(), l = E(null);
    a.triggerId || (a.triggerId = Le(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ke(() => {
      i();
    });
    function u(p) {
      !to(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var m, v;
      if (!to(p))
        return;
      i();
      const f = (m = n.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (f != null && f.width) {
        const g = (v = n.content.value) == null ? void 0 : v.dataset.side, w = g === "right", C = w ? -5 : 5, $ = f[w ? "left" : "right"], B = f[w ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: $, y: f.top },
            { x: B, y: f.top },
            { x: B, y: f.bottom },
            { x: $, y: f.bottom }
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
      var m;
      const v = r.searchRef.value !== "";
      t.disabled || v && p.key === " " || hp[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await ae(), (m = n.content.value) == null || m.focus(), p.preventDefault());
    }
    return (p, m) => (h(), x(ui, { "as-child": "" }, {
      default: y(() => [
        F(fi, D(t, {
          id: s(a).triggerId,
          ref: (v) => {
            var f;
            (f = s(a)) == null || f.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(Dr)(s(n).open.value),
          onClick: m[0] || (m[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
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
}), [hi, jf] = he("DropdownMenuRoot"), Kf = /* @__PURE__ */ b({
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
    N();
    const a = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), { modal: l, dir: i } = we(n), u = Yt(i);
    return jf({
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
    }), (d, c) => (h(), x(s(vf), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => rt(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Hf = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = hi(), { forwardRef: o, currentElement: a } = N();
    return se(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = Le(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), x(s(ui), { "as-child": "" }, {
      default: y(() => [
        F(s(W), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await ae(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Qe(
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
}), Wf = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Tf), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uf = /* @__PURE__ */ b({
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
    const n = ie(e, t);
    N();
    const o = hi(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = Le(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), x(s(Df), D(s(n), {
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
          const p = d.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || m;
          (!s(o).modal.value || v) && (a.value = !0), (c = s(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Gf = /* @__PURE__ */ b({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Xt(t);
    return N(), (a, r) => (h(), x(s(qr), Y(J({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yf = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(vi), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xf = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Lf), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zf = /* @__PURE__ */ b({
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
    const n = e, o = Xt(t);
    return N(), (a, r) => (h(), x(s(Ef), Y(J({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yi = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Sf), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qf = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(Af), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jf = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Xt(t);
    return N(), (a, r) => (h(), x(s(Ff), Y(J({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), em = /* @__PURE__ */ b({
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
    const n = ie(e, t);
    return N(), (o, a) => (h(), x(s(Rf), Y(J(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Ee(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return N(), (a, r) => (h(), x(s(Nf), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => rt(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), nm = /* @__PURE__ */ b({
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
    const n = ie(e, t);
    return N(), (o, a) => (h(), x(s(qf), D(s(n), { style: {
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
}), om = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(zf), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), D(t, {
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
}), [Nn, rm] = he("PopoverRoot"), sm = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = we(n), r = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return rm({
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
    }), (u, d) => (h(), x(s(Ln), null, {
      default: y(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), lm = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Nn(), { forwardRef: o, currentElement: a } = N();
    return se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(tt(s(n).hasCustomAnchor.value ? s(W) : s(mo)), { "as-child": "" }, {
      default: y(() => [
        F(s(W), {
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
}), im = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Fn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bi = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ze(n), { forwardRef: r } = N(), l = Nn();
    return Cr(), (i, u) => (h(), x(s(aa), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        F(s(Rn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            F(s(kn), D(s(a), {
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
}), um = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = E(!1);
    po(!0);
    const l = ie(n, o), { forwardRef: i, currentElement: u } = N();
    return fo(u), (d, c) => (h(), x(bi, D(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Pe(
        (p) => {
          var m;
          o("closeAutoFocus", p), r.value || (m = s(a).triggerElement.value) == null || m.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        o("pointerDownOutside", p);
        const m = p.detail.originalEvent, v = m.button === 0 && m.ctrlKey === !0, f = m.button === 2 || v;
        r.value = f;
      }),
      onFocusOutside: c[2] || (c[2] = Pe(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), dm = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = E(!1), l = E(!1), i = ie(n, o);
    return (u, d) => (h(), x(bi, D(s(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        o("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = s(a).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p;
        o("interactOutside", c), c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const m = c.target;
        (p = s(a).triggerElement.value) != null && p.contains(m) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && l.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = ie(n, o), { forwardRef: l } = N();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-popover-content")), (i, u) => (h(), x(s(lt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(um, D({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(dm, D({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), K_ = /* @__PURE__ */ b({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    N();
    const n = Nn();
    return dl(() => {
      n.hasCustomAnchor.value = !0;
    }), Ke(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), x(s(mo), Y(J(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), no = 100, [pm, fm] = he("ProgressRoot"), zr = (e) => typeof e == "number";
function mm(e, t) {
  return Bn(e) || zr(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${no} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function vm(e) {
  return zr(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${no}\`.`
  ), no);
}
const gm = /* @__PURE__ */ b({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: no },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * no)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    N();
    const a = Ee(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = Ee(n, "max", o, {
      passive: n.max === void 0
    });
    te(
      () => a.value,
      async (i) => {
        const u = mm(i, n.max);
        u !== i && (await ae(), a.value = u);
      },
      { immediate: !0 }
    ), te(
      () => n.max,
      (i) => {
        const u = vm(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = O(() => Bn(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return fm({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), x(s(W), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": zr(s(a)) ? s(a) : void 0,
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
}), hm = /* @__PURE__ */ b({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = pm();
    return N(), (o, a) => {
      var r;
      return h(), x(s(W), D(t, {
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
}), ym = ["default-value"], bm = /* @__PURE__ */ b({
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
    const t = e, { value: n } = we(t), o = E();
    return (a, r) => (h(), x(s(vo), { "as-child": "" }, {
      default: y(() => [
        An(fe("select", D({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => rt(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, ym), [
          [Ru, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), wm = {
  key: 0,
  value: ""
}, [un, wi] = he("SelectRoot"), [_m, xm] = he("SelectRoot"), Cm = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ee(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: p, dir: m } = we(n), v = Yt(m);
    wi({
      triggerElement: l,
      onTriggerChange: (C) => {
        l.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (C) => {
        d.value = C;
      },
      contentId: "",
      modelValue: a,
      onValueChange: (C) => {
        a.value = C;
      },
      open: r,
      required: c,
      onOpenChange: (C) => {
        r.value = C;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const f = na(l), g = E(/* @__PURE__ */ new Set()), w = O(() => Array.from(g.value).map((C) => {
      var $;
      return ($ = C.props) == null ? void 0 : $.value;
    }).join(";"));
    return xm({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, $) => (h(), x(s(Ln), null, {
      default: y(() => [
        _(C.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(f) ? (h(), x(bm, D({ key: w.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: $[0] || ($[0] = (B) => a.value = B.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), z("option", wm)) : ye("", !0),
            (h(!0), z(De, null, Ht(Array.from(g.value), (B) => (h(), x(tt(B), D({ ref_for: !0 }, B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : ye("", !0)
      ]),
      _: 3
    }));
  }
}), Bm = [" ", "Enter", "ArrowUp", "ArrowDown"], $m = [" ", "Enter"], pt = 10;
function _i(e) {
  return e === "" || Bn(e);
}
const Om = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = un(), o = O(() => {
      var v;
      return ((v = n.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = N();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-select-content")), se(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Mn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Br(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function m(v) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, f) => (h(), x(s(mo), { "as-child": "" }, {
      default: y(() => {
        var g, w, C, $;
        return [
          F(s(W), {
            ref: s(a),
            role: "combobox",
            type: v.as === "button" ? "button" : void 0,
            "aria-controls": s(n).contentId,
            "aria-expanded": s(n).open.value || !1,
            "aria-required": (g = s(n).required) == null ? void 0 : g.value,
            "aria-autocomplete": "none",
            disabled: o.value,
            dir: (w = s(n)) == null ? void 0 : w.dir.value,
            "data-state": (C = s(n)) != null && C.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": s(_i)(($ = s(n).modelValue) == null ? void 0 : $.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: f[0] || (f[0] = (B) => {
              var k;
              (k = B == null ? void 0 : B.currentTarget) == null || k.focus();
            }),
            onPointerdown: f[1] || (f[1] = (B) => {
              if (B.pointerType === "touch")
                return B.preventDefault();
              const k = B.target;
              k.hasPointerCapture(B.pointerId) && k.releasePointerCapture(B.pointerId), B.button === 0 && B.ctrlKey === !1 && (m(B), B.preventDefault());
            }),
            onPointerup: f[2] || (f[2] = Pe(
              (B) => {
                B.pointerType === "touch" && m(B);
              },
              ["prevent"]
            )),
            onKeydown: f[3] || (f[3] = (B) => {
              const k = s(u) !== "";
              !(B.ctrlKey || B.altKey || B.metaKey) && B.key.length === 1 && k && B.key === " " || (s(d)(B.key), s(Bm).includes(B.key) && (p(), B.preventDefault()));
            })
          }, {
            default: y(() => [
              _(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Sm = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Fn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [jr, Em] = he("SelectItemAlignedPosition"), Pm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Mn(), r = un(), l = dn(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: m } = N(), { viewport: v, selectedItem: f, selectedItemText: g, focusSelectedItem: w } = l;
    function C() {
      if (r.triggerElement.value && r.valueElement.value && c.value && m.value && v != null && v.value && f != null && f.value && g != null && g.value) {
        const k = r.triggerElement.value.getBoundingClientRect(), S = m.value.getBoundingClientRect(), T = r.valueElement.value.getBoundingClientRect(), P = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const j = P.left - S.left, G = T.left - j, oe = k.left - G, de = k.width + oe, me = Math.max(de, S.width), Z = window.innerWidth - pt, ge = jo(G, pt, Math.max(pt, Z - me));
          c.value.style.minWidth = `${de}px`, c.value.style.left = `${ge}px`;
        } else {
          const j = S.right - P.right, G = window.innerWidth - T.right - j, oe = window.innerWidth - k.right - G, de = k.width + oe, me = Math.max(de, S.width), Z = window.innerWidth - pt, ge = jo(
            G,
            pt,
            Math.max(pt, Z - me)
          );
          c.value.style.minWidth = `${de}px`, c.value.style.right = `${ge}px`;
        }
        const M = i.value, R = window.innerHeight - pt * 2, A = v.value.scrollHeight, L = window.getComputedStyle(m.value), I = Number.parseInt(
          L.borderTopWidth,
          10
        ), U = Number.parseInt(L.paddingTop, 10), K = Number.parseInt(
          L.borderBottomWidth,
          10
        ), X = Number.parseInt(
          L.paddingBottom,
          10
        ), H = I + U + A + X + K, ee = Math.min(
          f.value.offsetHeight * 5,
          H
        ), Q = window.getComputedStyle(v.value), q = Number.parseInt(Q.paddingTop, 10), le = Number.parseInt(
          Q.paddingBottom,
          10
        ), re = k.top + k.height / 2 - pt, ke = R - re, Me = f.value.offsetHeight / 2, Ve = f.value.offsetTop + Me, Xe = I + U + Ve, ot = H - Xe;
        if (Xe <= re) {
          const j = f.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const G = m.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, oe = Math.max(
            ke,
            Me + (j ? le : 0) + G + K
          ), de = Xe + oe;
          c.value.style.height = `${de}px`;
        } else {
          const j = f.value === M[0];
          c.value.style.top = "0px";
          const G = Math.max(
            re,
            I + v.value.offsetTop + (j ? q : 0) + Me
          ) + ot;
          c.value.style.height = `${G}px`, v.value.scrollTop = Xe - re + v.value.offsetTop;
        }
        c.value.style.margin = `${pt}px 0`, c.value.style.minHeight = `${ee}px`, c.value.style.maxHeight = `${R}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const $ = E("");
    se(async () => {
      await ae(), C(), m.value && ($.value = window.getComputedStyle(m.value).zIndex);
    });
    function B(k) {
      k && d.value === !0 && (C(), w == null || w(), d.value = !1);
    }
    return Em({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (k, S) => (h(), z("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: _t({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      F(s(W), D({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...k.$attrs, ...n }), {
        default: y(() => [
          _(k.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), km = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: pt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = ze(e);
    return (n, o) => (h(), x(s(kn), D(s(t), { style: {
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
}), qn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [dn, Dm] = he("SelectContent"), Am = /* @__PURE__ */ b({
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
    const n = e, o = t, a = un();
    Cr(), po(n.bodyLock);
    const { createCollection: r } = Mn(), l = E();
    fo(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = Br(i), c = E(), p = E(), m = E(), v = E(!1), f = E(!1);
    function g() {
      p.value && l.value && Wa([p.value, l.value]);
    }
    te(v, () => {
      g();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: C } = a;
    _e((S) => {
      if (!l.value)
        return;
      let T = { x: 0, y: 0 };
      const P = (R) => {
        var A, L;
        T = {
          x: Math.abs(
            Math.round(R.pageX) - (((A = C.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((L = C.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, M = (R) => {
        var A;
        R.pointerType !== "touch" && (T.x <= 10 && T.y <= 10 ? R.preventDefault() : (A = l.value) != null && A.contains(R.target) || w(!1), document.removeEventListener("pointermove", P), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", P), document.addEventListener("pointerup", M, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", P), document.removeEventListener("pointerup", M, {
          capture: !0
        });
      });
    });
    function $(S) {
      const T = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !T && S.key.length === 1 && d(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
        let P = i.value;
        if (["ArrowUp", "End"].includes(S.key) && (P = P.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const M = S.target, R = P.indexOf(M);
          P = P.slice(R + 1);
        }
        setTimeout(() => Wa(P)), S.preventDefault();
      }
    }
    const B = O(() => n.position === "popper" ? n : {}), k = ze(B.value);
    return Dm({
      content: l,
      viewport: c,
      onViewportChange: (S) => {
        c.value = S;
      },
      itemRefCallback: (S, T, P) => {
        var M, R;
        const A = !f.value && !P;
        (((M = a.modelValue) == null ? void 0 : M.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === T || A) && (p.value = S, A && (f.value = !0));
      },
      selectedItem: p,
      selectedItemText: m,
      onItemLeave: () => {
        var S;
        (S = l.value) == null || S.focus();
      },
      itemTextRefCallback: (S, T, P) => {
        var M, R;
        const A = !f.value && !P;
        (((M = a.modelValue) == null ? void 0 : M.value) !== void 0 && ((R = a.modelValue) == null ? void 0 : R.value) === T || A) && (m.value = S);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: v,
      searchRef: u
    }), (S, T) => (h(), x(s(aa), {
      "as-child": "",
      onMountAutoFocus: T[6] || (T[6] = Pe(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: T[7] || (T[7] = (P) => {
        var M;
        o("closeAutoFocus", P), !P.defaultPrevented && ((M = s(a).triggerElement.value) == null || M.focus({ preventScroll: !0 }), P.preventDefault());
      })
    }, {
      default: y(() => [
        F(s(Rn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: T[2] || (T[2] = Pe(() => {
          }, ["prevent"])),
          onDismiss: T[3] || (T[3] = (P) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: T[4] || (T[4] = (P) => o("escapeKeyDown", P)),
          onPointerDownOutside: T[5] || (T[5] = (P) => o("pointerDownOutside", P))
        }, {
          default: y(() => [
            (h(), x(tt(
              S.position === "popper" ? km : Pm
            ), D({ ...S.$attrs, ...s(k) }, {
              id: s(a).contentId,
              ref: (P) => {
                l.value = s(st)(P);
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
              onContextmenu: T[0] || (T[0] = Pe(() => {
              }, ["prevent"])),
              onPlaced: T[1] || (T[1] = (P) => v.value = !0),
              onKeydown: $
            }), {
              default: y(() => [
                _(S.$slots, "default")
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
}), Tm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return wi(e.context), (t, n) => _(t.$slots, "default");
  }
}), Im = { key: 1 }, Mm = /* @__PURE__ */ b({
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
    const n = e, o = ie(n, t), a = un(), r = E();
    se(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = O(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), x(s(lt), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          F(Am, Y(J({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), z("div", Im, [
        (h(), x(so, { to: r.value }, [
          F(Tm, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : ye("", !0);
    };
  }
}), Fm = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(W), D({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [xi, Rm] = he("SelectItem"), Lm = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = we(t), o = un(), a = dn(qn), { forwardRef: r, currentElement: l } = N(), i = O(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = Le(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await ae(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function m(g) {
      var w;
      await ae(), !g.defaultPrevented && (n.value ? (w = a.onItemLeave) == null || w.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(g) {
      var w;
      await ae(), !g.defaultPrevented && g.currentTarget === qe() && ((w = a.onItemLeave) == null || w.call(a));
    }
    async function f(g) {
      var w;
      await ae(), !(g.defaultPrevented || ((w = a.searchRef) == null ? void 0 : w.value) !== "" && g.key === " ") && ($m.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), Rm({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, w) => (h(), x(s(W), {
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
      onFocus: w[0] || (w[0] = (C) => u.value = !0),
      onBlur: w[1] || (w[1] = (C) => u.value = !1),
      onPointerup: p,
      onPointerdown: w[2] || (w[2] = (C) => {
        C.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: w[3] || (w[3] = Pe(() => {
      }, ["prevent", "stop"])),
      onPointermove: m,
      onPointerleave: v,
      onKeydown: f
    }, {
      default: y(() => [
        _(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Vm = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = xi();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(W), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : ye("", !0);
  }
}), [Nm, qm] = he("SelectGroup"), zm = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Le(void 0, "radix-vue-select-group");
    return qm({ id: n }), (o, a) => (h(), x(s(W), D({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), jm = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Nm({ id: "" });
    return (o, a) => (h(), x(s(W), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ci = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = un(), o = dn(qn), a = _m(), r = xi(), { forwardRef: l, currentElement: i } = N(), u = O(() => {
      var d;
      return Ge("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return se(() => {
      i.value && (r.onItemTextChange(i.value), o.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), a.onNativeOptionAdd(u.value));
    }), Tn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), z(De, null, [
      F(s(W), D({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), x(so, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : ye("", !0)
    ], 64));
  }
}), Km = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = we(t), o = sf(n), a = dn(qn), r = a.position === "item-aligned" ? jr() : void 0, { forwardRef: l, currentElement: i } = N();
    se(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: v } = r ?? {};
      if (m != null && m.value && v != null && v.value) {
        const f = Math.abs(u.value - p.scrollTop);
        if (f > 0) {
          const g = window.innerHeight - pt * 2, w = Number.parseFloat(
            v.value.style.minHeight
          ), C = Number.parseFloat(v.value.style.height), $ = Math.max(w, C);
          if ($ < g) {
            const B = $ + f, k = Math.min(g, B), S = B - k;
            v.value.style.height = `${k}px`, v.value.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), z(De, null, [
      F(s(W), D({
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
      F(s(W), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          Ce(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Bi = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Mn(), a = o(), r = dn(qn), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    _e(() => {
      const c = a.value.find(
        (p) => p === qe()
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
    return Tn(() => i()), (c, p) => {
      var m;
      return h(), x(s(W), D({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (m = c.$parent) == null ? void 0 : m.$props, {
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
}), Hm = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = dn(qn), n = t.position === "item-aligned" ? jr() : void 0, { forwardRef: o, currentElement: a } = N(), r = E(!1);
    return _e((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), te(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), x(Bi, {
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
    }, 512)) : ye("", !0);
  }
}), Wm = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = dn(qn), n = t.position === "item-aligned" ? jr() : void 0, { forwardRef: o, currentElement: a } = N(), r = E(!1);
    return _e((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          r.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), te(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), x(Bi, {
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
    }, 512)) : ye("", !0);
  }
}), Um = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = N(), o = un(), a = sr();
    return dl(() => {
      var r;
      const l = !!ea((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), se(() => {
      o.valueElement = n;
    }), (r, l) => (h(), x(s(W), {
      ref: s(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          s(_i)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), z(De, { key: 0 }, [
            Ce(Ae(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Gm = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), x(s(W), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        _(t.$slots, "default", {}, () => [
          Ce("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Ym(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function $i(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return jo(o, 0, 100);
}
function Xm(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Zm(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function Qm(e, t, n) {
  const o = e / 2, a = Kr([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function Jm(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function ev(e, t) {
  if (t > 0) {
    const n = Jm(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Kr(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function tv(e) {
  return (String(e).split(".")[1] || "").length;
}
function nv(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Oi = ["PageUp", "PageDown"], Si = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ei = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Pi, ki] = he(["SliderVertical", "SliderHorizontal"]), Di = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ia();
    return (r, l) => (h(), x(s(W), D({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(Oi).concat(s(Si)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), ov = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = we(n), { forwardRef: u, currentElement: d } = N(), c = E(), p = O(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function m(v) {
      const f = c.value || d.value.getBoundingClientRect(), g = [0, f.width], w = p.value ? [r.value, a.value] : [a.value, r.value], C = Kr(g, w);
      return c.value = f, C(v - f.left);
    }
    return ki({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v, f) => (h(), x(Di, {
      ref: s(u),
      dir: s(l),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: f[0] || (f[0] = (g) => {
        const w = m(g.clientX);
        o("slideStart", w);
      }),
      onSlideMove: f[1] || (f[1] = (g) => {
        const w = m(g.clientX);
        o("slideMove", w);
      }),
      onSlideEnd: f[2] || (f[2] = () => {
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: f[3] || (f[3] = (g) => {
        const w = p.value ? "from-left" : "from-right", C = s(Ei)[w].includes(g.key);
        o("stepKeyDown", g, C ? -1 : 1);
      }),
      onEndKeyDown: f[4] || (f[4] = (g) => o("endKeyDown", g)),
      onHomeKeyDown: f[5] || (f[5] = (g) => o("homeKeyDown", g))
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), av = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = we(n), { forwardRef: i, currentElement: u } = N(), d = E(), c = O(() => !l.value);
    function p(m) {
      const v = d.value || u.value.getBoundingClientRect(), f = [0, v.height], g = c.value ? [a.value, r.value] : [r.value, a.value], w = Kr(f, g);
      return d.value = v, w(m - v.top);
    }
    return ki({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (m, v) => (h(), x(Di, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v[0] || (v[0] = (f) => {
        const g = p(f.clientY);
        o("slideStart", g);
      }),
      onSlideMove: v[1] || (v[1] = (f) => {
        const g = p(f.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (f) => {
        const g = c.value ? "from-bottom" : "from-top", w = s(Ei)[g].includes(f.key);
        o("stepKeyDown", f, w ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (f) => o("endKeyDown", f)),
      onHomeKeyDown: v[5] || (v[5] = (f) => o("homeKeyDown", f))
    }, {
      default: y(() => [
        _(m.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), rv = ["value", "name", "disabled", "step"], [ia, sv] = he("SliderRoot"), lv = /* @__PURE__ */ b({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = we(n), p = Yt(c), { forwardRef: m, currentElement: v } = N(), f = na(v);
    Fr();
    const g = Ee(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), w = E(0), C = E(g.value);
    function $(P) {
      const M = Zm(g.value, P);
      S(P, M);
    }
    function B(P) {
      S(P, w.value);
    }
    function k() {
      const P = C.value[w.value];
      g.value[w.value] !== P && o("valueCommit", Lu(g.value));
    }
    function S(P, M, { commit: R } = { commit: !1 }) {
      var A;
      const L = tv(l.value), I = nv(Math.round((P - a.value) / l.value) * l.value + a.value, L), U = jo(I, a.value, r.value), K = Ym(g.value, U, M);
      if (ev(K, i.value * l.value)) {
        w.value = K.indexOf(U);
        const X = String(K) !== String(g.value);
        X && R && o("valueCommit", K), X && ((A = T.value[w.value]) == null || A.focus(), g.value = K);
      }
    }
    const T = E([]);
    return sv({
      modelValue: g,
      valueIndexToChangeRef: w,
      thumbElements: T,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (P, M) => (h(), z(De, null, [
      F(s(Rr), null, {
        default: y(() => [
          (h(), x(tt(s(u) === "horizontal" ? ov : av), D(P.$attrs, {
            ref: s(m),
            "as-child": P.asChild,
            as: P.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: P.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: M[0] || (M[0] = () => {
              s(d) || (C.value = s(g));
            }),
            onSlideStart: M[1] || (M[1] = (R) => !s(d) && $(R)),
            onSlideMove: M[2] || (M[2] = (R) => !s(d) && B(R)),
            onSlideEnd: M[3] || (M[3] = (R) => !s(d) && k()),
            onHomeKeyDown: M[4] || (M[4] = (R) => !s(d) && S(s(a), 0, { commit: !0 })),
            onEndKeyDown: M[5] || (M[5] = (R) => !s(d) && S(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: M[6] || (M[6] = (R, A) => {
              if (!s(d)) {
                const L = s(Oi).includes(R.key) || R.shiftKey && s(Si).includes(R.key) ? 10 : 1, I = w.value, U = s(g)[I], K = s(l) * L * A;
                S(U + K, I, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              _(P.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(f) ? (h(!0), z(De, { key: 0 }, Ht(s(g), (R, A) => (h(), z("input", {
        key: A,
        value: R,
        type: "number",
        style: { display: "none" },
        name: P.name ? P.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, rv))), 128)) : ye("", !0)
    ], 64));
  }
}), iv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ia(), o = Pi(), { forwardRef: a, currentElement: r } = N(), l = O(() => {
      var v, f;
      return (f = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : f[t.index];
    }), i = O(() => l.value === void 0 ? 0 : $i(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = O(() => {
      var v, f;
      return Xm(t.index, ((f = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : f.length) ?? 0);
    }), d = Ql(r), c = O(() => d[o.size].value), p = O(() => c.value ? Qm(c.value, i.value, o.direction) : 0), m = xr();
    return se(() => {
      n.thumbElements.value.push(r.value);
    }), Ke(() => {
      const v = n.thumbElements.value.findIndex((f) => f === r.value) ?? -1;
      n.thumbElements.value.splice(v, 1);
    }), (v, f) => (h(), x(s(la), null, {
      default: y(() => [
        F(s(W), D(v.$attrs, {
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
            display: !s(m) && l.value === void 0 ? "none" : void 0
          },
          onFocus: f[0] || (f[0] = () => {
            s(n).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: y(() => [
            _(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), uv = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = Lr(), { forwardRef: o, currentElement: a } = N(), r = O(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), x(iv, D({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), dv = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ia();
    return N(), (n, o) => (h(), x(s(W), {
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
}), cv = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ia(), n = Pi();
    N();
    const o = O(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => $i(u, t.min.value, t.max.value)
      );
    }), a = O(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = O(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), x(s(W), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: _t({
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
function pv() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
pv();
const fv = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [mv, vv] = he("SwitchRoot"), gv = /* @__PURE__ */ b({
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
    const n = e, o = t, { disabled: a } = we(n), r = Ee(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = N(), d = na(u), c = O(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return vv({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, m) => (h(), z(De, null, [
      F(s(W), D(p.$attrs, {
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
        onKeydown: Qe(Pe(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(p.$slots, "default", { checked: s(r) })
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
      }, null, 8, fv)) : ye("", !0)
    ], 64));
  }
}), hv = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = mv();
    return N(), (n, o) => {
      var a;
      return h(), x(s(W), {
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
}), [Hr, yv] = he("TabsRoot"), bv = /* @__PURE__ */ b({
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
    const n = e, o = t, { orientation: a, dir: r } = we(n), l = Yt(r);
    N();
    const i = Ee(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return yv({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: Le(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (h(), x(s(W), {
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
}), wv = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = we(t), { forwardRef: o, currentElement: a } = N(), r = Hr();
    return r.tabsList = a, (l, i) => (h(), x(s(pi), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        F(s(W), {
          ref: s(o),
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
function Ai(e, t) {
  return `${e}-trigger-${t}`;
}
function Ti(e, t) {
  return `${e}-content-${t}`;
}
const _v = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = N(), o = Hr(), a = O(() => Ai(o.baseId, t.value)), r = O(() => Ti(o.baseId, t.value)), l = O(() => t.value === o.modelValue.value), i = E(l.value);
    return se(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), x(s(lt), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        F(s(W), {
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
          style: _t({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? _(u.$slots, "default", { key: 0 }) : ye("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), xv = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = N(), o = Hr(), a = O(() => Ai(o.baseId, t.value)), r = O(() => Ti(o.baseId, t.value)), l = O(() => t.value === o.modelValue.value);
    return (i, u) => (h(), x(s(Bf), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        F(s(W), {
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
          onMousedown: u[0] || (u[0] = Pe((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Qe((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = s(o).activationMode !== "manual";
            !l.value && !i.disabled && d && s(o).changeModelValue(i.value);
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
}), [ua, Cv] = he("ToastProvider"), Bv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = we(t), l = E(), i = E(0), u = E(!1), d = E(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Cv({
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
    }), (c, p) => _(c.$slots, "default");
  }
}), $v = "toast.swipeStart", Ov = "toast.swipeMove", Sv = "toast.swipeCancel", Ev = "toast.swipeEnd", Ga = "toast.viewportPause", Ya = "toast.viewportResume";
function So(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Ds(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Pv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ii(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Pv(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Ii(n));
    }
  }), t;
}
const kv = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = ua(), n = pc(1e3), o = E(!1);
    return Ul(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), x(s(vo), { key: 0 }, {
      default: y(() => [
        Ce(Ae(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : ye("", !0);
  }
}), [Dv, Av] = he("ToastRoot"), Tv = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = N(), l = ua(), i = E(null), u = E(null), d = O(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = E(0), p = E(d.value), m = E(0), v = E(d.value), f = Ul(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(p.value - $, 0);
    }, { fpsLimit: 60 });
    function g($) {
      $ <= 0 || $ === Number.POSITIVE_INFINITY || Ct && (window.clearTimeout(m.value), c.value = (/* @__PURE__ */ new Date()).getTime(), m.value = window.setTimeout(w, $));
    }
    function w() {
      var $, B;
      ($ = r.value) != null && $.contains(qe()) && ((B = l.viewport.value) == null || B.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const C = O(() => r.value ? Ii(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return _e(($) => {
      const B = l.viewport.value;
      if (B) {
        const k = () => {
          g(p.value), f.resume(), o("resume");
        }, S = () => {
          const T = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - T, window.clearTimeout(m.value), f.pause(), o("pause");
        };
        return B.addEventListener(Ga, S), B.addEventListener(Ya, k), () => {
          B.removeEventListener(Ga, S), B.removeEventListener(Ya, k);
        };
      }
    }), te(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), _r("Escape", ($) => {
      o("escapeKeyDown", $), $.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, w());
    }), se(() => {
      l.onToastAdd();
    }), Ke(() => {
      l.onToastRemove();
    }), Av({ onClose: w }), ($, B) => (h(), z(De, null, [
      C.value ? (h(), x(kv, {
        key: 0,
        role: "alert",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Ce(Ae(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : ye("", !0),
      s(l).viewport.value ? (h(), x(so, {
        key: 1,
        to: s(l).viewport.value
      }, [
        F(s(W), D({
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
          onPointerdown: B[0] || (B[0] = Pe((k) => {
            i.value = { x: k.clientX, y: k.clientY };
          }, ["left"])),
          onPointermove: B[1] || (B[1] = (k) => {
            if (!i.value) return;
            const S = k.clientX - i.value.x, T = k.clientY - i.value.y, P = !!u.value, M = ["left", "right"].includes(s(l).swipeDirection.value), R = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = M ? R(0, S) : 0, L = M ? 0 : R(0, T), I = k.pointerType === "touch" ? 10 : 2, U = { x: A, y: L }, K = { originalEvent: k, delta: U };
            P ? (u.value = U, s(So)(s(Ov), (X) => o("swipeMove", X), K)) : s(Ds)(U, s(l).swipeDirection.value, I) ? (u.value = U, s(So)(s($v), (X) => o("swipeStart", X), K), k.target.setPointerCapture(k.pointerId)) : (Math.abs(S) > I || Math.abs(T) > I) && (i.value = null);
          }),
          onPointerup: B[2] || (B[2] = (k) => {
            const S = u.value, T = k.target;
            if (T.hasPointerCapture(k.pointerId) && T.releasePointerCapture(k.pointerId), u.value = null, i.value = null, S) {
              const P = k.currentTarget, M = { originalEvent: k, delta: S };
              s(Ds)(S, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(So)(s(Ev), (R) => o("swipeEnd", R), M) : s(So)(s(Sv), (R) => o("swipeCancel", R), M), P == null || P.addEventListener("click", (R) => R.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _($.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : ye("", !0)
    ], 64));
  }
}), Iv = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a } = N(), r = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), x(s(lt), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        F(Tv, D({
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
}), Mi = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (h(), x(s(W), {
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
}), Fi = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Dv(), { forwardRef: o } = N();
    return (a, r) => (h(), x(Mi, { "as-child": "" }, {
      default: y(() => [
        F(s(W), D(t, {
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
}), Mv = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = N();
    return (n, o) => n.altText ? (h(), x(Mi, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        F(Fi, {
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
    }, 8, ["alt-text"])) : ye("", !0);
  }
}), As = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = ua();
    return (a, r) => (h(), x(s(vo), {
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
}), Fv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = we(t), { forwardRef: a, currentElement: r } = N(), { createCollection: l } = Mn(), i = l(r), u = ua(), d = O(() => u.toastCount.value > 0), c = E(), p = E(), m = O(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    _r(n.value, () => {
      r.value.focus();
    }), se(() => {
      u.onViewportChange(r.value);
    }), _e((f) => {
      const g = r.value;
      if (d.value && g) {
        const w = () => {
          if (!u.isClosePausedRef.value) {
            const S = new CustomEvent(Ga);
            g.dispatchEvent(S), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const S = new CustomEvent(Ya);
            g.dispatchEvent(S), u.isClosePausedRef.value = !1;
          }
        }, $ = (S) => {
          !g.contains(S.relatedTarget) && C();
        }, B = () => {
          g.contains(qe()) || C();
        }, k = (S) => {
          var T, P, M;
          const R = S.altKey || S.ctrlKey || S.metaKey;
          if (S.key === "Tab" && !R) {
            const A = qe(), L = S.shiftKey;
            if (S.target === g && L) {
              (T = c.value) == null || T.focus();
              return;
            }
            const I = v({ tabbingDirection: L ? "backwards" : "forwards" }), U = I.findIndex((K) => K === A);
            Fo(I.slice(U + 1)) ? S.preventDefault() : L ? (P = c.value) == null || P.focus() : (M = p.value) == null || M.focus();
          }
        };
        g.addEventListener("focusin", w), g.addEventListener("focusout", $), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", B), g.addEventListener("keydown", k), window.addEventListener("blur", w), window.addEventListener("focus", C), f(() => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", $), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", B), g.removeEventListener("keydown", k), window.removeEventListener("blur", w), window.removeEventListener("focus", C);
        });
      }
    });
    function v({ tabbingDirection: f }) {
      const g = i.value.map((w) => {
        const C = [w, ...kr(w)];
        return f === "forwards" ? C : C.reverse();
      });
      return (f === "forwards" ? g.reverse() : g).flat();
    }
    return (f, g) => (h(), x(s(lp), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", m.value) : s(o)(m.value),
      tabindex: "-1",
      style: _t({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), x(As, {
          key: 0,
          ref: (w) => {
            c.value = s(st)(w);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const w = v({
              tabbingDirection: "forwards"
            });
            s(Fo)(w);
          })
        }, null, 512)) : ye("", !0),
        F(s(W), D({
          ref: s(a),
          tabindex: "-1",
          as: f.as,
          "as-child": f.asChild
        }, f.$attrs), {
          default: y(() => [
            _(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (h(), x(As, {
          key: 1,
          ref: (w) => {
            p.value = s(st)(w);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const w = v({
              tabbingDirection: "backwards"
            });
            s(Fo)(w);
          })
        }, null, 512)) : ye("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Rv = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lv = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return N(), (n, o) => (h(), x(s(W), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ri = "tooltip.open", [Wr, Vv] = he("TooltipProvider"), Nv = /* @__PURE__ */ b({
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
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = we(t);
    N();
    const u = E(!0), d = E(!1), { start: c, stop: p } = wr(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Vv({
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
    }), (m, v) => _(m.$slots, "default");
  }
}), [da, qv] = he("TooltipRoot"), zv = /* @__PURE__ */ b({
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
    N();
    const a = Wr(), r = O(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = O(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = O(() => n.disabled ?? a.disabled.value), u = O(() => n.delayDuration ?? a.delayDuration.value), d = O(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = Ee(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(c, (B) => {
      a.onClose && (B ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Ri))) : a.onClose());
    });
    const p = E(!1), m = E(), v = O(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: f, stop: g } = wr(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function w() {
      g(), p.value = !1, c.value = !0;
    }
    function C() {
      g(), c.value = !1;
    }
    function $() {
      f();
    }
    return qv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: m,
      onTriggerChange(B) {
        m.value = B;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? $() : w();
      },
      onTriggerLeave() {
        r.value ? C() : g();
      },
      onOpen: w,
      onClose: C,
      disableHoverableContent: r,
      disableClosingTrigger: l,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (B, k) => (h(), x(s(Ln), null, {
      default: y(() => [
        _(B.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), jv = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = da(), o = Wr();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = N(), l = E(!1), i = E(!1), u = O(() => n.disabled.value ? {} : {
      click: g,
      focus: v,
      pointermove: p,
      pointerleave: m,
      pointerdown: c,
      blur: f
    });
    se(() => {
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
    function p(w) {
      w.pointerType !== "touch" && !i.value && !o.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function m() {
      n.onTriggerLeave(), i.value = !1;
    }
    function v(w) {
      var C, $;
      l.value || n.ignoreNonKeyboardFocus.value && !(($ = (C = w.target).matches) != null && $.call(C, ":focus-visible")) || n.onOpen();
    }
    function f() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (w, C) => (h(), x(s(mo), { "as-child": "" }, {
      default: y(() => [
        F(s(W), D({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: w.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Iu(u.value)), {
          default: y(() => [
            _(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Li = /* @__PURE__ */ b({
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
    const n = e, o = t, a = da(), { forwardRef: r } = N(), l = sr(), i = O(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = O(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function m(v) {
        typeof v.children == "string" && v.type !== lr ? p += v.children : Array.isArray(v.children) && v.children.forEach((f) => m(f));
      }
      return (c = i.value) == null || c.forEach((v) => m(v)), p;
    }), d = O(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return se(() => {
      Pn(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), Pn(window, Ri, a.onClose);
    }), (c, p) => (h(), x(s(Rn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (m) => o("escapeKeyDown", m)),
      onPointerDownOutside: p[1] || (p[1] = (m) => {
        var v;
        s(a).disableClosingTrigger.value && (v = s(a).trigger.value) != null && v.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
      }),
      onFocusOutside: p[2] || (p[2] = Pe(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (m) => s(a).onClose())
    }, {
      default: y(() => [
        F(s(kn), D({
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
            F(s(vo), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Ce(Ae(u.value), 1)
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
}), Kv = /* @__PURE__ */ b({
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
    const t = ze(e), { forwardRef: n, currentElement: o } = N(), { trigger: a, onClose: r } = da(), l = Wr(), { isPointerInTransit: i, onPointerExit: u } = $c(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), x(Li, D({ ref: s(n) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = da(), r = ie(n, o), { forwardRef: l } = N();
    return (i, u) => (h(), x(s(lt), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), x(tt(s(a).disableHoverableContent.value ? Li : Kv), D({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Wv = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Fn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Vi(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Vi(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ni() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Vi(e)) && (o && (o += " "), o += t);
  return o;
}
const Ur = "-", Uv = (e) => {
  const t = Yv(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Ur);
      return i[0] === "" && i.length !== 1 && i.shift(), qi(i, t) || Gv(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, qi = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? qi(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Ur);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, Ts = /^\[(.+)\]$/, Gv = (e) => {
  if (Ts.test(e)) {
    const t = Ts.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Yv = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Zv(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Xa(l, o, r, t);
  }), o;
}, Xa = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : Is(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Xv(a)) {
        Xa(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Xa(l, Is(t, r), n, o);
    });
  });
}, Is = (e, t) => {
  let n = e;
  return t.split(Ur).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Xv = (e) => e.isThemeGetter, Zv = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, Qv = (e) => {
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
}, zi = "!", Jv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, a = t[0], r = t.length, l = (i) => {
    const u = [];
    let d = 0, c = 0, p;
    for (let w = 0; w < i.length; w++) {
      let C = i[w];
      if (d === 0) {
        if (C === a && (o || i.slice(w, w + r) === t)) {
          u.push(i.slice(c, w)), c = w + r;
          continue;
        }
        if (C === "/") {
          p = w;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" && d--;
    }
    const m = u.length === 0 ? i : i.substring(c), v = m.startsWith(zi), f = v ? m.substring(1) : m, g = p && p > c ? p - c : void 0;
    return {
      modifiers: u,
      hasImportantModifier: v,
      baseClassName: f,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: l
  }) : l;
}, eg = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, tg = (e) => ({
  cache: Qv(e.cacheSize),
  parseClassName: Jv(e),
  ...Uv(e)
}), ng = /\s+/, og = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(ng);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    } = n(d);
    let f = !!v, g = o(f ? m.substring(0, v) : m);
    if (!g) {
      if (!f) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = o(m), !g) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      f = !1;
    }
    const w = eg(c).join(":"), C = p ? w + zi : w, $ = C + g;
    if (r.includes($))
      continue;
    r.push($);
    const B = a(g, f);
    for (let k = 0; k < B.length; ++k) {
      const S = B[k];
      r.push(C + S);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function ag() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ji(t)) && (o && (o += " "), o += n);
  return o;
}
const ji = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ji(e[o])) && (n && (n += " "), n += t);
  return n;
};
function rg(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = tg(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = og(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(ag.apply(null, arguments));
  };
}
const Se = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ki = /^\[(?:([a-z-]+):)?(.+)\]$/i, sg = /^\d+\/\d+$/, lg = /* @__PURE__ */ new Set(["px", "full", "screen"]), ig = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ug = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, cg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Dt = (e) => $n(e) || lg.has(e) || sg.test(e), Nt = (e) => zn(e, "length", wg), $n = (e) => !!e && !Number.isNaN(Number(e)), ka = (e) => zn(e, "number", $n), Wn = (e) => !!e && Number.isInteger(Number(e)), fg = (e) => e.endsWith("%") && $n(e.slice(0, -1)), pe = (e) => Ki.test(e), qt = (e) => ig.test(e), mg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vg = (e) => zn(e, mg, Hi), gg = (e) => zn(e, "position", Hi), hg = /* @__PURE__ */ new Set(["image", "url"]), yg = (e) => zn(e, hg, xg), bg = (e) => zn(e, "", _g), Un = () => !0, zn = (e, t, n) => {
  const o = Ki.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, wg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ug.test(e) && !dg.test(e)
), Hi = () => !1, _g = (e) => cg.test(e), xg = (e) => pg.test(e), Cg = () => {
  const e = Se("colors"), t = Se("spacing"), n = Se("blur"), o = Se("brightness"), a = Se("borderColor"), r = Se("borderRadius"), l = Se("borderSpacing"), i = Se("borderWidth"), u = Se("contrast"), d = Se("grayscale"), c = Se("hueRotate"), p = Se("invert"), m = Se("gap"), v = Se("gradientColorStops"), f = Se("gradientColorStopPositions"), g = Se("inset"), w = Se("margin"), C = Se("opacity"), $ = Se("padding"), B = Se("saturate"), k = Se("scale"), S = Se("sepia"), T = Se("skew"), P = Se("space"), M = Se("translate"), R = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", pe, t], I = () => [pe, t], U = () => ["", Dt, Nt], K = () => ["auto", $n, pe], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", pe], le = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], re = () => [$n, pe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Un],
      spacing: [Dt, Nt],
      blur: ["none", "", qt, pe],
      brightness: re(),
      borderColor: [e],
      borderRadius: ["none", "", "full", qt, pe],
      borderSpacing: I(),
      borderWidth: U(),
      contrast: re(),
      grayscale: q(),
      hueRotate: re(),
      invert: q(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [fg, Nt],
      inset: L(),
      margin: L(),
      opacity: re(),
      padding: I(),
      saturate: re(),
      scale: re(),
      sepia: q(),
      skew: re(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", pe]
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
        columns: [qt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": le()
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
        object: [...X(), pe]
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
        z: ["auto", Wn, pe]
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
        flex: ["1", "auto", "initial", "none", pe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Wn, pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Un]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Wn, pe]
        }, pe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Un]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Wn, pe]
        }, pe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", pe]
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
        justify: ["normal", ...Q()]
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
        content: ["normal", ...Q(), "baseline"]
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
        "place-content": [...Q(), "baseline"]
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
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
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
        "space-y": [P]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", pe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [pe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [pe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [qt]
        }, qt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [pe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [pe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", qt, Nt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ka]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Un]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $n, ka]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dt, pe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", pe]
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Dt, Nt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Dt, pe]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
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
        content: ["none", pe]
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
        bg: [...X(), gg]
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
        bg: ["auto", "cover", "contain", vg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, yg]
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
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden"]
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
        divide: H()
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
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Dt, pe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Dt, Nt]
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
        ring: U()
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
        "ring-offset": [Dt, Nt]
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
        shadow: ["", "inner", "none", qt, bg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Un]
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
        "drop-shadow": ["", "none", qt, pe]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: re()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", pe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: re()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", pe]
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
        scale: [k]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [k]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [k]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Wn, pe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", pe]
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
        stroke: [Dt, Nt, ka]
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
}, Bg = /* @__PURE__ */ rg(Cg);
function V(...e) {
  return Bg(Ni(e));
}
function H_(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
const $g = /* @__PURE__ */ b({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Sp), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W_ = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ep), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Og = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Pp), null, {
      default: y(() => [
        F(s(Tp), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(Ap), D(s(r), {
          class: s(V)(
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
}), Sg = /* @__PURE__ */ b({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Eg = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Mp), D(n.value, {
      class: s(V)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pg = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Fp), D(n.value, {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kg = /* @__PURE__ */ b({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ms = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Fs = Ni, ho = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Fs(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const m = Ms(c) || Ms(p);
    return a[d][m];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, m] = c;
    return m === void 0 || (d[p] = m), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: p, className: m, ...v } = c;
    return Object.entries(v).every((f) => {
      let [g, w] = f;
      return Array.isArray(w) ? w.includes({
        ...r,
        ...i
      }[g]) : {
        ...r,
        ...i
      }[g] === w;
    }) ? [
      ...d,
      p,
      m
    ] : d;
  }, []);
  return Fs(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Wi = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(W), {
      as: n.as,
      "as-child": n.asChild,
      class: ue(s(V)(s(Zt)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Zt = ho(
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
), Dg = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Rp), D(n.value, {
      class: s(V)(s(Zt)(), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ag = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Ip), D(n.value, {
      class: s(V)(s(Zt)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U_ = /* @__PURE__ */ b({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: o, actionButton: a, title: r, description: l } = Mg();
    return (i, u) => (h(), x(s($g), { open: s(t) }, {
      default: y(() => [
        F(s(Og), {
          onClose: s(n),
          onEscapeKeyDown: s(n),
          onPointerDownOutside: s(n)
        }, {
          default: y(() => [
            F(s(Sg), null, {
              default: y(() => [
                F(s(Eg), null, {
                  default: y(() => [
                    Ce(Ae(s(r)), 1)
                  ]),
                  _: 1
                }),
                F(s(Pg), null, {
                  default: y(() => [
                    Ce(Ae(s(l)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            F(s(kg), null, {
              default: y(() => [
                F(s(Ag), {
                  onClick: s(o).handler
                }, {
                  default: y(() => [
                    Ce(Ae(s(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                F(s(Dg), {
                  onClick: s(a).handler
                }, {
                  default: y(() => [
                    Ce(Ae(s(a).label ?? "Confirm"), 1)
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
}), Gr = E(!1), Ui = E(""), Gi = E(""), Yi = E({
  label: void 0,
  handler: () => {
  }
}), Xi = E({
  label: void 0,
  handler: () => {
  }
}), Tg = (e) => {
  Ui.value = e.title, Gi.value = e.description, Yi.value = Rs(e.cancelAction), Xi.value = Rs(e.action), Ig();
}, Rs = (e) => typeof e == "string" ? {
  label: e,
  handler: Ro
} : typeof e == "function" ? {
  label: void 0,
  handler: e
} : typeof e == "object" && e !== void 0 ? {
  label: e.label ?? void 0,
  handler: e.handler ?? Ro
} : {
  label: void 0,
  handler: Ro
}, Ro = () => {
  Gr.value = !1;
}, Ig = () => {
  Gr.value = !0;
};
function Mg() {
  return {
    confirmDialog: (e) => Tg(e),
    title: Ui,
    description: Gi,
    isOpen: Gr,
    close: Ro,
    cancelButton: Yi,
    actionButton: Xi
  };
}
const jn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, Fg = {}, Rg = { class: "h-full bg-background dark:text-white" };
function Lg(e, t) {
  return h(), z("div", Rg, [
    _(e.$slots, "default")
  ]);
}
const G_ = /* @__PURE__ */ jn(Fg, [["render", Lg]]), Vg = {}, Ng = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function qg(e, t) {
  return h(), z("header", Ng, [
    _(e.$slots, "default")
  ]);
}
const Y_ = /* @__PURE__ */ jn(Vg, [["render", qg]]), zg = {}, jg = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Kg(e, t) {
  return h(), z("main", jg, [
    _(e.$slots, "default")
  ]);
}
const X_ = /* @__PURE__ */ jn(zg, [["render", Kg]]), Hg = {};
function Wg(e, t) {
  return _(e.$slots, "default");
}
const Z_ = /* @__PURE__ */ jn(Hg, [["render", Wg]]), Ug = {}, Gg = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Yg = { class: "gap-y-5 overflow-y-auto" };
function Xg(e, t) {
  return h(), z("div", Gg, [
    fe("div", Yg, [
      _(e.$slots, "default")
    ])
  ]);
}
const Q_ = /* @__PURE__ */ jn(Ug, [["render", Xg]]), Zg = {};
function Qg(e, t) {
  return _(e.$slots, "default");
}
const J_ = /* @__PURE__ */ jn(Zg, [["render", Qg]]);
function Jg(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    fe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function eh(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    fe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function Ls(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    fe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function th(e, t) {
  return h(), z("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    fe("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
const nh = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, e1 = /* @__PURE__ */ b({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), z("button", nh, [
      n[0] || (n[0] = fe("span", { class: "sr-only" }, "Open sidebar", -1)),
      F(s(Jg), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), oh = 3, ah = 1e6, Tt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Da = 0;
function rh() {
  return Da = (Da + 1) % Number.MAX_VALUE, Da.toString();
}
const Aa = /* @__PURE__ */ new Map();
function Vs(e) {
  if (Aa.has(e)) return;
  const t = setTimeout(() => {
    Aa.delete(e), Xn({
      type: Tt.REMOVE_TOAST,
      toastId: e
    });
  }, ah);
  Aa.set(e, t);
}
const dt = E({
  toasts: []
});
function Xn(e) {
  switch (e.type) {
    case Tt.ADD_TOAST:
      dt.value.toasts = [e.toast, ...dt.value.toasts].slice(0, oh);
      break;
    case Tt.UPDATE_TOAST:
      dt.value.toasts = dt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case Tt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? Vs(t) : dt.value.toasts.forEach((n) => {
        Vs(n.id);
      }), dt.value.toasts = dt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case Tt.REMOVE_TOAST:
      e.toastId === void 0 ? dt.value.toasts = [] : dt.value.toasts = dt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Zi() {
  return {
    toasts: O(() => dt.value.toasts),
    toast: sh,
    dismiss: (e) => Xn({ type: Tt.DISMISS_TOAST, toastId: e })
  };
}
function sh(e) {
  const t = rh(), n = (a) => Xn({
    type: Tt.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => Xn({ type: Tt.DISMISS_TOAST, toastId: t });
  return Xn({
    type: Tt.ADD_TOAST,
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
const lh = { class: "flex items-start space-x-3" }, ih = ["src", "alt"], uh = { class: "grid gap-1" }, dh = { class: "font-bold" }, ch = /* @__PURE__ */ b({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = Zi();
    return (n, o) => (h(), x(s(Ch), null, {
      default: y(() => [
        (h(!0), z(De, null, Ht(s(t), (a) => (h(), x(s(ph), D({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            fe("div", lh, [
              a.icon ? (h(), z(De, { key: 0 }, [
                typeof a.icon == "string" ? (h(), z("img", {
                  key: 0,
                  src: a.icon,
                  class: ue(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, ih)) : (h(), x(tt(a.icon), {
                  key: 1,
                  class: ue(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : ye("", !0),
              fe("div", uh, [
                a.title ? (h(), x(s(xh), { key: 0 }, {
                  default: y(() => [
                    Ce(Ae(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : ye("", !0),
                a.description ? (h(), z(De, { key: 1 }, [
                  Vu(a.description) ? (h(), x(s(Ns), { key: 0 }, {
                    default: y(() => [
                      (h(), x(tt(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), z(De, { key: 1 }, Ht(a.description, (r, l) => (h(), z("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), z(De, { key: 0 }, [
                      Ce(Ae(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), z(De, { key: 1 }, [
                      fe("span", dh, Ae(l), 1),
                      Ce(": " + Ae(r), 1)
                    ], 64)) : (h(), z(De, { key: 2 }, [
                      Ce(Ae(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), x(s(Ns), { key: 2 }, {
                    default: y(() => [
                      Ce(Ae(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : ye("", !0),
                F(s(_h))
              ])
            ]),
            (h(), x(tt(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        F(s(fh), { position: n.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), ph = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Iv), D(s(r), {
      class: s(V)(s(Bh)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), fh = /* @__PURE__ */ b({
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
    return (a, r) => (h(), x(s(Fv), D(n.value, {
      class: s(V)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        o.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), t1 = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Mv), D(n.value, {
      class: s(V)(
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
function mh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function vh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
      fill: "currentColor"
    })
  ]);
}
function gh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor"
    })
  ]);
}
function Qi(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
function Ji(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor"
    })
  ]);
}
function hh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: "currentColor"
    })
  ]);
}
function yh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: "currentColor"
    })
  ]);
}
function ca(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor"
    })
  ]);
}
function bh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: "currentColor"
    })
  ]);
}
function wh(e, t) {
  return h(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    fe("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
      fill: "currentColor"
    })
  ]);
}
const _h = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Fi), D(n.value, {
      class: s(V)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        F(s(ca), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), xh = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Rv), D(n.value, {
      class: s(V)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ns = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Lv), D({
      class: s(V)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ch = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Bv), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bh = ho(
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
), { toast: Eo } = Zi();
function $h() {
  return {
    info: (e) => {
      Eo({
        icon: th,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Eo({
        icon: eh,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Eo({
        icon: Ls,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Eo({
        icon: Ls,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const n1 = /* @__PURE__ */ b({
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
    } = $h();
    return te(
      () => t.info,
      (l) => {
        l && n(t.info);
      },
      {
        immediate: !0
      }
    ), te(
      () => t.success,
      (l) => {
        l && o(t.success);
      },
      { immediate: !0 }
    ), te(
      () => t.warning,
      (l) => {
        l && a(t.warning);
      },
      { immediate: !0 }
    ), te(
      () => t.errors,
      () => {
        t.errors !== void 0 && Object.keys(t.errors).length > 0 && r(t.errors, t.objectFormat);
      }
    ), (l, i) => (h(), x(s(ch)));
  }
}), Oh = { class: "flex items-center justify-between space-y-2" }, Sh = { class: "flex items-center space-x-2" }, o1 = /* @__PURE__ */ b({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", Oh, [
      (h(), x(tt(n.as), {
        class: ue(s(V)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      fe("div", Sh, [
        _(n.$slots, "actions")
      ])
    ]));
  }
}), Eh = /* @__PURE__ */ b({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Xc), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a1 = /* @__PURE__ */ b({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(Eh, Y(J(s(a))), {
      default: y(() => [
        (h(!0), z(De, null, Ht(r.content, (i, u) => (h(), x(s(kh), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            F(s(Dh), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  Ce(Ae(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            F(s(Ph), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  Ce(Ae(i.content), 1)
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
}), Ph = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Jc), D(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        fe("div", {
          class: ue(s(V)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), kh = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Qc), D(s(o), {
      class: s(V)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dh = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(ep), { class: "flex" }, {
      default: y(() => [
        F(s(tp), D(n.value, {
          class: s(V)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              F(s(Ji), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), r1 = /* @__PURE__ */ b({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Ih), null, {
      default: y(() => [
        F(s(Ah), Y(J(s(a))), {
          default: y(() => [
            F(s(Mh), {
              class: ue(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            F(s(Th), Y(J(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  Ce(Ae(r.tooltip), 1)
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
}), Ah = /* @__PURE__ */ b({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(zv), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Th = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Wv), null, {
      default: y(() => [
        F(s(Hv), D({ ...s(r), ...l.$attrs }, {
          class: s(V)(
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
}), Ih = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(Nv), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mh = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(jv), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s1 = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Vp), {
      class: ue(s(V)(s(Fh)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), l1 = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(qp), D(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), i1 = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(zp), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fh = ho(
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
), u1 = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)(s(Rh)({ variant: n.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Rh = ho(
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
), d1 = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), c1 = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), p1 = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("p", {
      class: ue(s(V)("text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), f1 = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex items-center p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), m1 = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), v1 = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("h3", {
      class: ue(s(V)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
var qs;
const Lh = typeof window < "u", Vh = (e) => typeof e < "u", Nh = (e) => typeof e == "function";
Lh && ((qs = window == null ? void 0 : window.navigator) != null && qs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function qh(e) {
  return e;
}
function zh(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return io(t, r), r;
  }, () => lo(t)];
}
function jh(e) {
  if (!rt(e))
    return Sn(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return s(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return rt(e.value[o]) && !rt(a) ? e.value[o].value = a : e.value[o] = a, !0;
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
  return Sn(t);
}
function Kh(e) {
  return jh(O(e));
}
function He(e, ...t) {
  const n = t.flat();
  return Kh(() => Object.fromEntries(Object.entries(we(e)).filter((o) => !n.includes(o[0]))));
}
function Hh(e) {
  return JSON.parse(JSON.stringify(e));
}
const zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, js = "__vueuse_ssr_handlers__";
zs[js] = zs[js] || {};
var Ks;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ks || (Ks = {}));
var Wh = Object.defineProperty, Hs = Object.getOwnPropertySymbols, Uh = Object.prototype.hasOwnProperty, Gh = Object.prototype.propertyIsEnumerable, Ws = (e, t, n) => t in e ? Wh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Yh = (e, t) => {
  for (var n in t || (t = {}))
    Uh.call(t, n) && Ws(e, n, t[n]);
  if (Hs)
    for (var n of Hs(t))
      Gh.call(t, n) && Ws(e, n, t[n]);
  return e;
};
const Xh = {
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
Yh({
  linear: qh
}, Xh);
function eu(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, m = Ue(), v = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let f = d;
  f = d || f || `update:${t.toString()}`;
  const g = (C) => i ? Nh(i) ? i(C) : Hh(C) : C, w = () => Vh(e[t]) ? g(e[t]) : p;
  if (u) {
    const C = w(), $ = E(C);
    return te(() => e[t], (B) => $.value = g(B)), te($, (B) => {
      (B !== e[t] || c) && v(f, B);
    }, { deep: c }), $;
  } else
    return O({
      get() {
        return w();
      },
      set(C) {
        v(f, C);
      }
    });
}
function Zh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Us(e) {
  return Zh(e) || Array.isArray(e);
}
function Qh() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Yr(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Us(i) || !Us(u) ? i === u : Yr(i, u);
  });
}
function Gs(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Jh(e, t) {
  if (e.length !== t.length) return !1;
  const n = Gs(e), o = Gs(t);
  return n.every((a, r) => {
    const l = o[r];
    return Yr(a, l);
  });
}
function Xr(e) {
  return typeof e == "number";
}
function Za(e) {
  return typeof e == "string";
}
function pa(e) {
  return typeof e == "boolean";
}
function Ys(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ie(e) {
  return Math.abs(e);
}
function Zr(e) {
  return Math.sign(e);
}
function Zn(e, t) {
  return Ie(e - t);
}
function ey(e, t) {
  if (e === 0 || t === 0 || Ie(e) <= Ie(t)) return 0;
  const n = Zn(Ie(e), Ie(t));
  return Ie(n / e);
}
function ty(e) {
  return Math.round(e * 100) / 100;
}
function oo(e) {
  return ao(e).map(Number);
}
function ft(e) {
  return e[yo(e)];
}
function yo(e) {
  return Math.max(0, e.length - 1);
}
function Qr(e, t) {
  return t === yo(e);
}
function Xs(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function ao(e) {
  return Object.keys(e);
}
function tu(e, t) {
  return [e, t].reduce((n, o) => (ao(o).forEach((a) => {
    const r = n[a], l = o[a], i = Ys(r) && Ys(l);
    n[a] = i ? tu(r, l) : l;
  }), n), {});
}
function Qa(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function ny(e, t) {
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
    return Za(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function ro() {
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
function oy(e, t, n, o) {
  const a = ro(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && f();
    });
  }
  function c() {
    v(), a.clear();
  }
  function p(w) {
    if (!u) return;
    l || (l = w, n(), n());
    const C = w - l;
    for (l = w, i += C; i >= r; )
      n(), i -= r;
    const $ = i / r;
    o($), u && (u = t.requestAnimationFrame(p));
  }
  function m() {
    u || (u = t.requestAnimationFrame(p));
  }
  function v() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function f() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: m,
    stop: v,
    update: n,
    render: o
  };
}
function ay(e, t) {
  const n = t === "rtl", o = e === "y", a = o ? "y" : "x", r = o ? "x" : "y", l = !o && n ? -1 : 1, i = c(), u = p();
  function d(f) {
    const {
      height: g,
      width: w
    } = f;
    return o ? g : w;
  }
  function c() {
    return o ? "top" : n ? "right" : "left";
  }
  function p() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function m(f) {
    return f * l;
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
function on(e = 0, t = 0) {
  const n = Ie(e - t);
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
function nu(e, t, n) {
  const {
    constrain: o
  } = on(0, e), a = e + 1;
  let r = l(t);
  function l(m) {
    return n ? Ie((a + m) % a) : o(m);
  }
  function i() {
    return r;
  }
  function u(m) {
    return r = l(m), p;
  }
  function d(m) {
    return c().set(i() + m);
  }
  function c() {
    return nu(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function ry(e, t, n, o, a, r, l, i, u, d, c, p, m, v, f, g, w, C, $) {
  const {
    cross: B,
    direction: k
  } = e, S = ["INPUT", "SELECT", "TEXTAREA"], T = {
    passive: !1
  }, P = ro(), M = ro(), R = on(50, 225).constrain(v.measure(20)), A = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, I = f ? 43 : 25;
  let U = !1, K = 0, X = 0, H = !1, ee = !1, Q = !1, q = !1;
  function le(Z) {
    if (!$) return;
    function ge(We) {
      (pa($) || $(Z, We)) && ot(We);
    }
    const $e = t;
    P.add($e, "dragstart", (We) => We.preventDefault(), T).add($e, "touchmove", () => {
    }, T).add($e, "touchend", () => {
    }).add($e, "touchstart", ge).add($e, "mousedown", ge).add($e, "touchcancel", G).add($e, "contextmenu", G).add($e, "click", oe, !0);
  }
  function re() {
    P.clear(), M.clear();
  }
  function ke() {
    const Z = q ? n : t;
    M.add(Z, "touchmove", j, T).add(Z, "touchend", G).add(Z, "mousemove", j, T).add(Z, "mouseup", G);
  }
  function Me(Z) {
    const ge = Z.nodeName || "";
    return S.includes(ge);
  }
  function Ve() {
    return (f ? L : A)[q ? "mouse" : "touch"];
  }
  function Xe(Z, ge) {
    const $e = p.add(Zr(Z) * -1), We = c.byDistance(Z, !f).distance;
    return f || Ie(Z) < R ? We : w && ge ? We * 0.5 : c.byIndex($e.get(), 0).distance;
  }
  function ot(Z) {
    const ge = Qa(Z, o);
    q = ge, Q = f && ge && !Z.buttons && U, U = Zn(a.get(), l.get()) >= 2, !(ge && Z.button !== 0) && (Me(Z.target) || (H = !0, r.pointerDown(Z), d.useFriction(0).useDuration(0), a.set(l), ke(), K = r.readPoint(Z), X = r.readPoint(Z, B), m.emit("pointerDown")));
  }
  function j(Z) {
    if (!Qa(Z, o) && Z.touches.length >= 2) return G(Z);
    const $e = r.readPoint(Z), We = r.readPoint(Z, B), at = Zn($e, K), it = Zn(We, X);
    if (!ee && !q && (!Z.cancelable || (ee = at > it, !ee)))
      return G(Z);
    const ne = r.pointerMove(Z);
    at > g && (Q = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(k(ne)), Z.preventDefault();
  }
  function G(Z) {
    const $e = c.byDistance(0, !1).index !== p.get(), We = r.pointerUp(Z) * Ve(), at = Xe(k(We), $e), it = ey(We, at), ne = I - 10 * it, Be = C + it / 50;
    ee = !1, H = !1, M.clear(), d.useDuration(ne).useFriction(Be), u.distance(at, !f), q = !1, m.emit("pointerUp");
  }
  function oe(Z) {
    Q && (Z.stopPropagation(), Z.preventDefault(), Q = !1);
  }
  function de() {
    return H;
  }
  return {
    init: le,
    destroy: re,
    pointerDown: de
  };
}
function sy(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, m) {
    const f = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Qa(p, t) ? p : p.touches[0])[f];
  }
  function i(p) {
    return o = p, a = p, l(p);
  }
  function u(p) {
    const m = l(p) - l(a), v = r(p) - r(o) > 170;
    return a = p, v && (o = p), m;
  }
  function d(p) {
    if (!o || !a) return 0;
    const m = l(a) - l(o), v = r(p) - r(o), f = r(p) - r(a) > 170, g = m / v;
    return v && !f && Ie(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function ly() {
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
function iy(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function uy(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function m(w) {
    return a.measureSize(l.measure(w));
  }
  function v(w) {
    if (!r) return;
    d = m(e), c = o.map(m);
    function C($) {
      for (const B of $) {
        if (p) return;
        const k = B.target === e, S = o.indexOf(B.target), T = k ? d : c[S], P = m(k ? e : o[S]);
        if (Ie(P - T) >= 0.5) {
          w.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver(($) => {
      (pa(r) || r(w, $)) && C($);
    }), n.requestAnimationFrame(() => {
      i.forEach(($) => u.observe($));
    });
  }
  function f() {
    p = !0, u && u.disconnect();
  }
  return {
    init: v,
    destroy: f
  };
}
function dy(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function m() {
    const T = o.get() - e.get(), P = !u;
    let M = 0;
    return P ? (l = 0, n.set(o), e.set(o), M = T) : (n.set(e), l += T / u, l *= d, c += l, e.add(l), M = c - p), i = Zr(M), p = c, S;
  }
  function v() {
    const T = o.get() - t.get();
    return Ie(T) < 1e-3;
  }
  function f() {
    return u;
  }
  function g() {
    return i;
  }
  function w() {
    return l;
  }
  function C() {
    return B(a);
  }
  function $() {
    return k(r);
  }
  function B(T) {
    return u = T, S;
  }
  function k(T) {
    return d = T, S;
  }
  const S = {
    direction: g,
    duration: f,
    velocity: w,
    seek: m,
    settled: v,
    useBaseFriction: $,
    useBaseDuration: C,
    useFriction: k,
    useDuration: B
  };
  return S;
}
function cy(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = on(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(v) {
    if (!d()) return;
    const f = e.reachedMin(t.get()) ? "min" : "max", g = Ie(e[f] - t.get()), w = n.get() - t.get(), C = i.constrain(g / l);
    n.subtract(w * C), !v && Ie(w) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
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
function py(e, t, n, o, a) {
  const r = on(-t + e, 0), l = p(), i = c(), u = m();
  function d(f, g) {
    return Zn(f, g) <= 1;
  }
  function c() {
    const f = l[0], g = ft(l), w = l.lastIndexOf(f), C = l.indexOf(g) + 1;
    return on(w, C);
  }
  function p() {
    return n.map((f, g) => {
      const {
        min: w,
        max: C
      } = r, $ = r.constrain(f), B = !g, k = Qr(n, g);
      return B ? C : k || d(w, $) ? w : d(C, $) ? C : $;
    }).map((f) => parseFloat(f.toFixed(3)));
  }
  function m() {
    if (t <= e + a) return [r.max];
    if (o === "keepSnaps") return l;
    const {
      min: f,
      max: g
    } = i;
    return l.slice(f, g);
  }
  return {
    snapsContained: u,
    scrollContainLimit: i
  };
}
function fy(e, t, n) {
  const o = t[0], a = n ? o - e : ft(t);
  return {
    limit: on(a, o)
  };
}
function my(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = on(r, l);
  function d(m) {
    return m === 1 ? u(n.get()) : m === -1 ? i(n.get()) : !1;
  }
  function c(m) {
    if (!d(m)) return;
    const v = e * (m * -1);
    o.forEach((f) => f.add(v));
  }
  return {
    loop: c
  };
}
function vy(e) {
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
function gy(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = m(), c = v();
  function p() {
    return i(o).map((g) => ft(g)[l] - g[0][r]).map(Ie);
  }
  function m() {
    return o.map((g) => n[r] - g[r]).map((g) => -Ie(g));
  }
  function v() {
    return i(d).map((g) => g[0]).map((g, w) => g + u[w]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function hy(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const m = l(r), v = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : v ? m : m.slice(i, u).map((f, g, w) => {
      const C = !g, $ = Qr(w, g);
      if (C) {
        const B = ft(w[0]) + 1;
        return Xs(B);
      }
      if ($) {
        const B = yo(r) - ft(w)[0] + 1;
        return Xs(B, ft(w)[0]);
      }
      return f;
    });
  }
  return {
    slideRegistry: d
  };
}
function yy(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(f) {
    return f.concat().sort((g, w) => Ie(g) - Ie(w))[0];
  }
  function d(f) {
    const g = e ? l(f) : i(f), w = t.map(($, B) => ({
      diff: c($ - g, 0),
      index: B
    })).sort(($, B) => Ie($.diff) - Ie(B.diff)), {
      index: C
    } = w[0];
    return {
      index: C,
      distance: g
    };
  }
  function c(f, g) {
    const w = [f, f + n, f - n];
    if (!e) return f;
    if (!g) return u(w);
    const C = w.filter(($) => Zr($) === g);
    return C.length ? u(C) : ft(w) - n;
  }
  function p(f, g) {
    const w = t[f] - a.get(), C = c(w, g);
    return {
      index: f,
      distance: C
    };
  }
  function m(f, g) {
    const w = a.get() + f, {
      index: C,
      distance: $
    } = d(w), B = !e && r(w);
    if (!g || B) return {
      index: C,
      distance: f
    };
    const k = t[C] - $, S = f + c(k, 0);
    return {
      index: C,
      distance: S
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: c
  };
}
function by(e, t, n, o, a, r, l) {
  function i(p) {
    const m = p.distance, v = p.index !== t.get();
    r.add(m), m && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), v && (n.set(t.get()), t.set(p.index), l.emit("select"));
  }
  function u(p, m) {
    const v = a.byDistance(p, m);
    i(v);
  }
  function d(p, m) {
    const v = t.clone().set(p), f = a.byIndex(v.get(), m);
    i(f);
  }
  return {
    distance: u,
    index: d
  };
}
function wy(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(v) {
    if (!i) return;
    function f(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const $ = n.findIndex((B) => B.includes(g));
      Xr($) && (a.useDuration(0), o.index($, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, w) => {
      r.add(g, "focus", (C) => {
        (pa(i) || i(v, C)) && f(w);
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
function Yn(e) {
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
    return Xr(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function ou(e, t) {
  const n = e.scroll === "x" ? l : i, o = t.style;
  let a = null, r = !1;
  function l(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function i(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function u(m) {
    if (r) return;
    const v = ty(e.direction(m));
    v !== a && (o.transform = n(v), a = v);
  }
  function d(m) {
    r = !m;
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
function _y(e, t, n, o, a, r, l, i, u) {
  const c = oo(a), p = oo(a).reverse(), m = C().concat($());
  function v(P, M) {
    return P.reduce((R, A) => R - a[A], M);
  }
  function f(P, M) {
    return P.reduce((R, A) => v(R, M) > 0 ? R.concat([A]) : R, []);
  }
  function g(P) {
    return r.map((M, R) => ({
      start: M - o[R] + 0.5 + P,
      end: M + t - 0.5 + P
    }));
  }
  function w(P, M, R) {
    const A = g(M);
    return P.map((L) => {
      const I = R ? 0 : -n, U = R ? n : 0, K = R ? "end" : "start", X = A[L][K];
      return {
        index: L,
        loopPoint: X,
        slideLocation: Yn(-1),
        translate: ou(e, u[L]),
        target: () => i.get() > X ? I : U
      };
    });
  }
  function C() {
    const P = l[0], M = f(p, P);
    return w(M, n, !1);
  }
  function $() {
    const P = t - l[0] - 1, M = f(c, P);
    return w(M, -n, !0);
  }
  function B() {
    return m.every(({
      index: P
    }) => {
      const M = c.filter((R) => R !== P);
      return v(M, t) <= 0.1;
    });
  }
  function k() {
    m.forEach((P) => {
      const {
        target: M,
        translate: R,
        slideLocation: A
      } = P, L = M();
      L !== A.get() && (R.to(L), A.set(L));
    });
  }
  function S() {
    m.forEach((P) => P.translate.clear());
  }
  return {
    canLoop: B,
    clear: S,
    loop: k,
    loopPoints: m
  };
}
function xy(e, t, n) {
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
      a || (pa(n) || n(u, c)) && d(c);
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
function Cy(e, t, n, o) {
  const a = {};
  let r = null, l = null, i, u = !1;
  function d() {
    i = new IntersectionObserver((f) => {
      u || (f.forEach((g) => {
        const w = t.indexOf(g.target);
        a[w] = g;
      }), r = null, l = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((f) => i.observe(f));
  }
  function c() {
    i && i.disconnect(), u = !0;
  }
  function p(f) {
    return ao(a).reduce((g, w) => {
      const C = parseInt(w), {
        isIntersecting: $
      } = a[C];
      return (f && $ || !f && !$) && g.push(C), g;
    }, []);
  }
  function m(f = !0) {
    if (f && r) return r;
    if (!f && l) return l;
    const g = p(f);
    return f && (r = g), f || (l = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: m
  };
}
function By(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = f(), p = g(), m = n.map(l), v = w();
  function f() {
    if (!d) return 0;
    const $ = n[0];
    return Ie(t[i] - $[i]);
  }
  function g() {
    if (!d) return 0;
    const $ = r.getComputedStyle(ft(o));
    return parseFloat($.getPropertyValue(`margin-${u}`));
  }
  function w() {
    return n.map(($, B, k) => {
      const S = !B, T = Qr(k, B);
      return S ? m[B] + c : T ? m[B] + p : k[B + 1][i] - $[i];
    }).map(Ie);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: v,
    startGap: c,
    endGap: p
  };
}
function $y(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, m = Xr(n);
  function v(C, $) {
    return oo(C).filter((B) => B % $ === 0).map((B) => C.slice(B, B + $));
  }
  function f(C) {
    return C.length ? oo(C).reduce(($, B, k) => {
      const S = ft($) || 0, T = S === 0, P = B === yo(C), M = a[d] - r[S][d], R = a[d] - r[B][c], A = !o && T ? p(l) : 0, L = !o && P ? p(i) : 0, I = Ie(R - L - (M + A));
      return k && I > t + u && $.push(B), P && $.push(C.length), $;
    }, []).map(($, B, k) => {
      const S = Math.max(k[B - 1] || 0);
      return C.slice(S, $);
    }) : [];
  }
  function g(C) {
    return m ? v(C, n) : f(C);
  }
  return {
    groupSlides: g
  };
}
function Oy(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: p,
    duration: m,
    dragFree: v,
    dragThreshold: f,
    inViewThreshold: g,
    slidesToScroll: w,
    skipSnaps: C,
    containScroll: $,
    watchResize: B,
    watchSlides: k,
    watchDrag: S,
    watchFocus: T
  } = r, P = 2, M = ly(), R = M.measure(t), A = n.map(M.measure), L = ay(u, d), I = L.measureSize(R), U = iy(I), K = ny(i, I), X = !p && !!$, H = p || !!$, {
    slideSizes: ee,
    slideSizesWithGaps: Q,
    startGap: q,
    endGap: le
  } = By(L, R, A, n, H, a), re = $y(L, I, w, p, R, A, q, le, P), {
    snaps: ke,
    snapsAligned: Me
  } = gy(L, K, R, A, re), Ve = -ft(ke) + ft(Q), {
    snapsContained: Xe,
    scrollContainLimit: ot
  } = py(I, Ve, Me, $, P), j = X ? Xe : Me, {
    limit: G
  } = fy(Ve, j, p), oe = nu(yo(j), c, p), de = oe.clone(), me = oo(n), Z = ({
    dragHandler: Et,
    scrollBody: ut,
    scrollBounds: vn,
    options: {
      loop: gn
    }
  }) => {
    gn || vn.constrain(Et.pointerDown()), ut.seek();
  }, ge = ({
    scrollBody: Et,
    translate: ut,
    location: vn,
    offsetLocation: gn,
    previousLocation: Pt,
    scrollLooper: hn,
    slideLooper: _o,
    dragHandler: Eu,
    animation: Pu,
    eventHandler: rs,
    scrollBounds: ku,
    options: {
      loop: ss
    }
  }, ls) => {
    const is = Et.settled(), Du = !ku.shouldConstrain(), us = ss ? is : is && Du, ds = us && !Eu.pointerDown();
    ds && Pu.stop();
    const Au = vn.get() * ls + Pt.get() * (1 - ls);
    gn.set(Au), ss && (hn.loop(Et.direction()), _o.loop()), ut.to(gn.get()), ds && rs.emit("settle"), us || rs.emit("scroll");
  }, $e = oy(o, a, () => Z(Jt), (Et) => ge(Jt, Et)), We = 0.68, at = j[oe.get()], it = Yn(at), ne = Yn(at), Be = Yn(at), Oe = Yn(at), xe = dy(it, Be, ne, Oe, m, We), Fe = yy(p, j, Ve, G, Oe), Ne = by($e, oe, de, xe, Fe, Oe, l), Ze = vy(G), St = ro(), mn = Cy(t, n, l, g), {
    slideRegistry: Qt
  } = hy(X, $, j, ot, re, me), wo = wy(e, n, Qt, Ne, xe, St, l, T), Jt = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: R,
    slideRects: A,
    animation: $e,
    axis: L,
    dragHandler: ry(L, e, o, a, Oe, sy(L, a), it, $e, Ne, xe, Fe, oe, l, U, v, f, C, We, S),
    eventStore: St,
    percentOfView: U,
    index: oe,
    indexPrevious: de,
    limit: G,
    location: it,
    offsetLocation: Be,
    previousLocation: ne,
    options: r,
    resizeHandler: uy(t, l, a, n, L, B, M),
    scrollBody: xe,
    scrollBounds: cy(G, Be, Oe, xe, U),
    scrollLooper: my(Ve, G, Be, [it, Be, ne, Oe]),
    scrollProgress: Ze,
    scrollSnapList: j.map(Ze.get),
    scrollSnaps: j,
    scrollTarget: Fe,
    scrollTo: Ne,
    slideLooper: _y(L, I, Ve, ee, Q, ke, j, Be, n),
    slideFocus: wo,
    slidesHandler: xy(t, l, k),
    slidesInView: mn,
    slideIndexes: me,
    slideRegistry: Qt,
    slidesToScroll: re,
    target: Oe,
    translate: ou(L, t)
  };
  return Jt;
}
function Sy() {
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
const Ey = {
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
function Py(e) {
  function t(r, l) {
    return tu(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = ao(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => ao(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function ky(e) {
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
function Ho(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = Py(a), l = ky(r), i = ro(), u = Sy(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: m,
    off: v,
    emit: f
  } = u, g = L;
  let w = !1, C, $ = d(Ey, Ho.globalOptions), B = d($), k = [], S, T, P;
  function M() {
    const {
      container: me,
      slides: Z
    } = B;
    T = (Za(me) ? e.querySelector(me) : me) || e.children[0];
    const $e = Za(Z) ? T.querySelectorAll(Z) : Z;
    P = [].slice.call($e || T.children);
  }
  function R(me) {
    const Z = Oy(e, T, P, o, a, me, u);
    if (me.loop && !Z.slideLooper.canLoop()) {
      const ge = Object.assign({}, me, {
        loop: !1
      });
      return R(ge);
    }
    return Z;
  }
  function A(me, Z) {
    w || ($ = d($, me), B = c($), k = Z || k, M(), C = R(B), p([$, ...k.map(({
      options: ge
    }) => ge)]).forEach((ge) => i.add(ge, "change", L)), B.active && (C.translate.to(C.location.get()), C.animation.init(), C.slidesInView.init(), C.slideFocus.init(de), C.eventHandler.init(de), C.resizeHandler.init(de), C.slidesHandler.init(de), C.options.loop && C.slideLooper.loop(), T.offsetParent && P.length && C.dragHandler.init(de), S = l.init(de, k)));
  }
  function L(me, Z) {
    const ge = re();
    I(), A(d({
      startIndex: ge
    }, me), Z), u.emit("reInit");
  }
  function I() {
    C.dragHandler.destroy(), C.eventStore.clear(), C.translate.clear(), C.slideLooper.clear(), C.resizeHandler.destroy(), C.slidesHandler.destroy(), C.slidesInView.destroy(), C.animation.destroy(), l.destroy(), i.clear();
  }
  function U() {
    w || (w = !0, i.clear(), I(), u.emit("destroy"), u.clear());
  }
  function K(me, Z, ge) {
    !B.active || w || (C.scrollBody.useBaseFriction().useDuration(Z === !0 ? 0 : B.duration), C.scrollTo.index(me, ge || 0));
  }
  function X(me) {
    const Z = C.index.add(1).get();
    K(Z, me, -1);
  }
  function H(me) {
    const Z = C.index.add(-1).get();
    K(Z, me, 1);
  }
  function ee() {
    return C.index.add(1).get() !== re();
  }
  function Q() {
    return C.index.add(-1).get() !== re();
  }
  function q() {
    return C.scrollSnapList;
  }
  function le() {
    return C.scrollProgress.get(C.offsetLocation.get());
  }
  function re() {
    return C.index.get();
  }
  function ke() {
    return C.indexPrevious.get();
  }
  function Me() {
    return C.slidesInView.get();
  }
  function Ve() {
    return C.slidesInView.get(!1);
  }
  function Xe() {
    return S;
  }
  function ot() {
    return C;
  }
  function j() {
    return e;
  }
  function G() {
    return T;
  }
  function oe() {
    return P;
  }
  const de = {
    canScrollNext: ee,
    canScrollPrev: Q,
    containerNode: G,
    internalEngine: ot,
    destroy: U,
    off: v,
    on: m,
    emit: f,
    plugins: Xe,
    previousScrollSnap: ke,
    reInit: g,
    rootNode: j,
    scrollNext: X,
    scrollPrev: H,
    scrollProgress: le,
    scrollSnapList: q,
    scrollTo: K,
    selectedScrollSnap: re,
    slideNodes: oe,
    slidesInView: Me,
    slidesNotInView: Ve
  };
  return A(t, n), setTimeout(() => u.emit("init"), 0), de;
}
Ho.globalOptions = void 0;
function Jr(e = {}, t = []) {
  const n = rt(e), o = rt(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = On(), i = On();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return se(() => {
    !Qh() || !l.value || (Ho.globalOptions = Jr.globalOptions, i.value = Ho(l.value, a, r));
  }), Tn(() => {
    i.value && i.value.destroy();
  }), n && te(e, (d) => {
    Yr(a, d) || (a = d, u());
  }), o && te(t, (d) => {
    Jh(r, d) || (r = d, u());
  }), [l, i];
}
Jr.globalOptions = void 0;
const [Dy, Ay] = zh(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Jr(
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
    return se(() => {
      var p, m, v;
      r.value && ((p = r.value) == null || p.on("init", c), (m = r.value) == null || m.on("reInit", c), (v = r.value) == null || v.on("select", c), o("init-api", r.value));
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
function fa() {
  const e = Ay();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const g1 = /* @__PURE__ */ b({
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
    } = Dy(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    });
    function m(v) {
      const f = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (v.key === f) {
        v.preventDefault(), p();
        return;
      }
      v.key === g && (v.preventDefault(), c());
    }
    return (v, f) => (h(), z("div", {
      class: ue(s(V)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: m
    }, [
      _(v.$slots, "default", {
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
}), h1 = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = fa();
    return (a, r) => (h(), z("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      fe("div", D({
        class: s(V)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), y1 = /* @__PURE__ */ b({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = fa();
    return (o, a) => (h(), z("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: ue(
        s(V)(
          "min-w-0 shrink-0 grow-0 basis-full",
          s(n) === "horizontal" ? "pl-4" : "pt-4",
          t.class
        )
      )
    }, [
      _(o.$slots, "default")
    ], 2));
  }
}), b1 = /* @__PURE__ */ b({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = fa();
    return (r, l) => (h(), x(s(Wi), {
      disabled: !s(o),
      class: ue(
        s(V)(
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
          F(s(mh), { class: "size-4 text-current" }),
          l[0] || (l[0] = fe("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), w1 = /* @__PURE__ */ b({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = fa();
    return (r, l) => (h(), x(s(Wi), {
      disabled: !s(o),
      class: ue(
        s(V)(
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
          F(s(vh), { class: "size-4 text-current" }),
          l[0] || (l[0] = fe("span", { class: "sr-only" }, "Next Slide", -1))
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
const Ty = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Po = {
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
const Iy = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => Ge(
  "svg",
  {
    ...Po,
    width: e || Po.width,
    height: e || Po.height,
    stroke: o || Po.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Ty(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => Ge(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = (e, t) => (n, { slots: o }) => Ge(
  Iy,
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
const My = ma("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const au = ma("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ru = ma("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = ma("EllipsisIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
function Zs(e) {
  return typeof e == "string" ? `'${e}'` : new Ry().serialize(e);
}
const Ry = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      ps(this, t, /* @__PURE__ */ new Map());
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
      let a = Hn(this, t).get(o);
      return a === void 0 && (Hn(this, t).set(o, `#${Hn(this, t).size}`), a = this.serializeObject(o), Hn(this, t).set(o, a)), a;
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
function Dn(e, t) {
  return e === t || Zs(e) === Zs(t);
}
function Ly(e, t, n) {
  const o = e.findIndex((i) => Dn(i, t)), a = e.findIndex((i) => Dn(i, n));
  if (o === -1 || a === -1) return [];
  const [r, l] = [o, a].sort((i, u) => i - u);
  return e.slice(r, l + 1);
}
function Ye(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = lo(o, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (io(o, l), l)];
}
function mt() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function es(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Ja(e) {
  return e == null;
}
function Qs(e, t) {
  return Ja(e) ? !1 : Array.isArray(e) ? e.some((n) => Dn(n, t)) : Dn(e, t);
}
function ts(e) {
  return e ? e.flatMap((t) => t.type === De ? ts(t.children) : [t]) : [];
}
const [va] = Ye("ConfigProvider");
function Vy(e, t) {
  var n;
  const o = On();
  return _e(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Go(o);
}
function ga(e) {
  return or() ? (ar(e), !0) : !1;
}
function Lo() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const l = () => t(r);
      return ga(l), {
        off: l
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((l) => l(...r))),
    clear: () => {
      e.clear();
    }
  };
}
function Ny(e) {
  let t = !1, n;
  const o = Yo(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function qy(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = Yo(!0), n = o.run(() => e(...r))), ga(a), n);
}
const cn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const zy = (e) => typeof e < "u", jy = Object.prototype.toString, Ky = (e) => jy.call(e) === "[object Object]", Js = /* @__PURE__ */ Hy();
function Hy() {
  var e, t;
  return cn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Wy(e) {
  return Ue();
}
function Ta(e) {
  return Array.isArray(e) ? e : [e];
}
function su(e, t = 1e4) {
  return ml((n, o) => {
    let a = Je(e), r;
    const l = () => setTimeout(() => {
      a = Je(e), o();
    }, Je(t));
    return ga(() => {
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
const Uy = Je;
function Gy(e, t) {
  Wy() && Tn(e, t);
}
function Yy(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const ns = cn ? window : void 0;
function pn(e) {
  var t;
  const n = Je(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function os(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = O(() => {
    const i = Ta(Je(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = Yy(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => pn(d))) != null ? u : [ns].filter((d) => d != null),
        Ta(Je(a.value ? e[1] : e[0])),
        Ta(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Je(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = Ky(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (m) => u.flatMap(
            (v) => d.map((f) => o(m, v, f, p))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), n();
  };
  return ga(n), l;
}
function Xy() {
  const e = On(!1), t = Ue();
  return t && se(() => {
    e.value = !0;
  }, t), e;
}
function Zy(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Qy(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = ns,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = Zy(t);
  return os(a, r, (c) => {
    c.repeat && Je(i) || u(c) && n(c);
  }, l);
}
function Jy(e) {
  return JSON.parse(JSON.stringify(e));
}
function Rt(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, v = Ue(), f = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const w = (B) => i ? typeof i == "function" ? i(B) : Jy(B) : B, C = () => zy(e[t]) ? w(e[t]) : p, $ = (B) => {
    m ? m(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), k = E(B);
    let S = !1;
    return te(
      () => e[t],
      (T) => {
        S || (S = !0, k.value = w(T), ae(() => S = !1));
      }
    ), te(
      k,
      (T) => {
        !S && (T !== e[t] || c) && $(T);
      },
      { deep: c }
    ), k;
  } else
    return O({
      get() {
        return C();
      },
      set(B) {
        $(B);
      }
    });
}
function Ia(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function er(e, t, n = ".", o) {
  if (!Ia(t))
    return er(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Ia(l) && Ia(a[r]) ? a[r] = er(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function e0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => er(n, o, "", e), {})
  );
}
const t0 = e0(), n0 = qy(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = O(() => {
    for (const l of e.value.values()) if (l) return !0;
    return !1;
  }), o = va({ scrollBody: E(!0) });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Js && (a == null || a()), t.value = void 0;
  };
  return te(n, (l, i) => {
    var p;
    if (!cn) return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: u,
      margin: 0
    }, c = (p = o.scrollBody) != null && p.value ? typeof o.scrollBody.value == "object" ? t0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Js && (a = os(document, "touchmove", (m) => o0(m), { passive: !1 })), ae(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function lu(e) {
  const t = Math.random().toString(36).substring(2, 7), n = n0();
  n.value.set(t, e ?? !1);
  const o = O({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Gy(() => {
    n.value.delete(t);
  }), o;
}
function iu(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : iu(n);
  }
}
function o0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && iu(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function uu(e) {
  const t = va({ dir: E("ltr") });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ha(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((a) => {
    o[cl(Uo(a))] = (...r) => e(a, ...r);
  }), o;
}
function a0(e) {
  const t = O(() => s(e)), n = O(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(l.slice(0, i.length), i) === 0),
    endsWith: (l, i) => i.length === 0 ? !0 : (l = l.normalize("NFC"), i = i.normalize("NFC"), n.value.compare(l.slice(-i.length), i) === 0),
    contains: (l, i) => {
      if (i.length === 0) return !0;
      l = l.normalize("NFC"), i = i.normalize("NFC");
      let u = 0;
      const d = i.length;
      for (; u + d <= l.length; u++) {
        const c = l.slice(u, u + d);
        if (n.value.compare(i, c) === 0) return !0;
      }
      return !1;
    }
  };
}
function du(e) {
  return O(() => {
    var t;
    return Uy(e) ? !!((t = pn(e)) != null && t.closest("form")) : !0;
  });
}
function be() {
  const e = Ue(), t = E(), n = O(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : pn(t);
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
function fn(e) {
  const t = Ue(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = il(e);
  return O(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Uo(l)] = r[l];
    }), Object.keys({
      ...n,
      ...a
    }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function $t(e, t) {
  const n = fn(e), o = t ? ha(t) : {};
  return O(() => ({
    ...n.value,
    ...o
  }));
}
var r0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wn = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Do = {}, Ma = 0, cu = function(e) {
  return e && (e.host || cu(e.parentNode));
}, s0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = cu(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, l0 = function(e, t, n, o) {
  var a = s0(t, Array.isArray(e) ? e : [e]);
  Do[n] || (Do[n] = /* @__PURE__ */ new WeakMap());
  var r = Do[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        c(m);
      else
        try {
          var v = m.getAttribute(o), f = v !== null && v !== "false", g = (wn.get(m) || 0) + 1, w = (r.get(m) || 0) + 1;
          wn.set(m, g), r.set(m, w), l.push(m), g === 1 && f && ko.set(m, !0), w === 1 && m.setAttribute(n, "true"), f || m.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return c(t), i.clear(), Ma++, function() {
    l.forEach(function(p) {
      var m = wn.get(p) - 1, v = r.get(p) - 1;
      wn.set(p, m), r.set(p, v), m || (ko.has(p) || p.removeAttribute(o), ko.delete(p)), v || p.removeAttribute(n);
    }), Ma--, Ma || (wn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Do = {});
  };
}, i0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = r0(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), l0(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function pu(e) {
  let t;
  te(() => pn(e), (n) => {
    n ? t = i0(n) : t && t();
  }), Ke(() => {
    t && t();
  });
}
let u0 = 0;
function ht(e, t = "reka") {
  var o;
  if ("useId" in xn) return `${t}-${(o = xn.useId) == null ? void 0 : o.call(xn)}`;
  const n = va({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++u0}`;
}
function d0() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function c0(e) {
  const t = E(), n = O(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = O(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return se(() => {
    const a = pn(e);
    if (a) {
      t.value = {
        width: a.offsetWidth,
        height: a.offsetHeight
      };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length) return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = a.offsetWidth, d = a.offsetHeight;
        t.value = {
          width: u,
          height: d
        };
      });
      return r.observe(a, { box: "border-box" }), () => r.unobserve(a);
    } else t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function p0(e, t) {
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
function f0(e) {
  const t = su("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const l = mt(), i = r.map((m) => {
          var v, f;
          return {
            ...m,
            textValue: ((v = m.value) == null ? void 0 : v.textValue) ?? ((f = m.ref.textContent) == null ? void 0 : f.trim()) ?? ""
          };
        }), u = i.find((m) => m.ref === l), d = i.map((m) => m.textValue), c = v0(d, t.value, u == null ? void 0 : u.textValue), p = i.find((m) => m.textValue === c);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function m0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function v0(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let l = m0(e, Math.max(r, 0));
  a.length === 1 && (l = l.filter((d) => d !== n));
  const u = l.find((d) => d.toLowerCase().startsWith(a.toLowerCase()));
  return u !== n ? u : void 0;
}
function g0(e, t) {
  var w;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((w = t.value) == null ? void 0 : w.ownerDocument.defaultView) ?? ns, { state: u, dispatch: d } = p0(r, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (C) => {
    var $;
    if (cn) {
      const B = new CustomEvent(C, {
        bubbles: !1,
        cancelable: !1
      });
      ($ = t.value) == null || $.dispatchEvent(B);
    }
  };
  te(e, async (C, $) => {
    var k;
    const B = $ !== C;
    if (await ae(), B) {
      const S = o.value, T = Ao(t.value);
      C ? (d("MOUNT"), c("enter"), T === "none" && c("after-enter")) : T === "none" || T === "undefined" || ((k = n.value) == null ? void 0 : k.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : $ && S !== T ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const p = (C) => {
    const $ = Ao(t.value), B = $.includes(C.animationName), k = u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && B && (c(`after-${k}`), d("ANIMATION_END"), !a.value)) {
      const S = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var T;
        ((T = t.value) == null ? void 0 : T.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = S);
      });
    }
    C.target === t.value && $ === "none" && d("ANIMATION_END");
  }, m = (C) => {
    C.target === t.value && (o.value = Ao(t.value));
  }, v = te(t, (C, $) => {
    C ? (n.value = getComputedStyle(C), C.addEventListener("animationstart", m), C.addEventListener("animationcancel", p), C.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), $ == null || $.removeEventListener("animationstart", m), $ == null || $.removeEventListener("animationcancel", p), $ == null || $.removeEventListener("animationend", p));
  }, { immediate: !0 }), f = te(u, () => {
    const C = Ao(t.value);
    o.value = u.value === "mounted" ? C : "none";
  });
  return Ke(() => {
    v(), f();
  }), { isPresent: O(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Ao(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var bo = b({
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
    const { present: o, forceMount: a } = we(e), r = E(), { isPresent: l } = g0(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = ts(i || []);
    const u = Ue();
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
    return () => a.value || o.value || l.value ? Ge(t.default({ present: l.value })[0], { ref: (c) => {
      const p = pn(c);
      return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
    } }) : null;
  }
});
const tr = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const o = ts(n.default()), a = o.findIndex((d) => d.type !== lr);
      if (a === -1) return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? D(t, r.props) : t, i = pl({
        ...r,
        props: {}
      }, l);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), h0 = [
  "area",
  "img",
  "input"
], ve = b({
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
    return typeof o == "string" && h0.includes(o) ? () => Ge(o, t) : o !== "template" ? () => Ge(e.as, t, { default: n.default }) : () => Ge(tr, t, { default: n.default });
  }
});
function Gt() {
  const e = E(), t = O(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : pn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [fu, y0] = Ye("CollapsibleRoot");
var b0 = /* @__PURE__ */ b({
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
    const o = e, r = Rt(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), { disabled: l, unmountOnHide: i } = we(o);
    return y0({
      contentId: "",
      disabled: l,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (r.value = !r.value);
      }
    }), t({ open: r }), be(), (u, d) => (h(), x(s(ve), {
      as: u.as,
      "as-child": o.asChild,
      "data-state": s(r) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: y(() => [_(u.$slots, "default", { open: s(r) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), w0 = b0, _0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = fu();
    a.contentId || (a.contentId = ht(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: l, currentElement: i } = be(), u = E(0), d = E(0), c = O(() => a.open.value), p = E(c.value), m = E();
    te(() => {
      var f;
      return [c.value, (f = r.value) == null ? void 0 : f.present];
    }, async () => {
      await ae();
      const f = i.value;
      if (!f) return;
      m.value = m.value || {
        transitionDuration: f.style.transitionDuration,
        animationName: f.style.animationName
      }, f.style.transitionDuration = "0s", f.style.animationName = "none";
      const g = f.getBoundingClientRect();
      d.value = g.height, u.value = g.width, p.value || (f.style.transitionDuration = m.value.transitionDuration, f.style.animationName = m.value.animationName);
    }, { immediate: !0 });
    const v = O(() => p.value && a.open.value);
    return se(() => {
      requestAnimationFrame(() => {
        p.value = !1;
      });
    }), os(i, "beforematch", (f) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), o("contentFound");
      });
    }), (f, g) => (h(), x(s(bo), {
      ref_key: "presentRef",
      ref: r,
      present: f.forceMount || s(a).open.value,
      "force-mount": !0
    }, {
      default: y(({ present: w }) => {
        var C;
        return [F(s(ve), D(f.$attrs, {
          id: s(a).contentId,
          ref: s(l),
          "as-child": n.asChild,
          as: f.as,
          hidden: w ? void 0 : s(a).unmountOnHide.value ? "" : "until-found",
          "data-state": v.value ? void 0 : s(a).open.value ? "open" : "closed",
          "data-disabled": (C = s(a).disabled) != null && C.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${d.value}px`,
            "--reka-collapsible-content-width": `${u.value}px`
          }
        }), {
          default: y(() => [!s(a).unmountOnHide.value || w ? _(f.$slots, "default", { key: 0 }) : ye("v-if", !0)]),
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
}), x0 = _0, C0 = /* @__PURE__ */ b({
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
    be();
    const n = fu();
    return (o, a) => {
      var r, l;
      return h(), x(s(ve), {
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
        default: y(() => [_(o.$slots, "default")]),
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
}), B0 = C0;
const [Ot, $0] = Ye("DialogRoot");
var O0 = /* @__PURE__ */ b({
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
    const n = e, a = Rt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = we(n);
    return $0({
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
    }), (u, d) => _(u.$slots, "default", {
      open: s(a),
      close: () => a.value = !1
    });
  }
}), S0 = O0, E0 = /* @__PURE__ */ b({
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
    be();
    const n = Ot();
    return (o, a) => (h(), x(s(ve), D(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), P0 = E0;
const k0 = "dismissableLayer.pointerDownOutside", D0 = "dismissableLayer.focusOutside";
function mu(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function A0(e, t, n = !0) {
  var l;
  const o = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return _e((i) => {
    if (!cn || !Je(n)) return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(t != null && t.value) || !p)) {
        if (mu(t.value, p)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let v = function() {
            es(k0, e, m);
          };
          const m = { originalEvent: c };
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
    Je(n) && (a.value = !0);
  } };
}
function T0(e, t, n = !0) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return _e((l) => {
    if (!cn || !Je(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await ae(), await ae();
      const d = u.target;
      !t.value || !d || mu(t.value, d) || u.target && !a.value && es(D0, e, { originalEvent: u });
    };
    o.addEventListener("focusin", i), l(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Je(n) && (a.value = !0);
    },
    onBlurCapture: () => {
      Je(n) && (a.value = !1);
    }
  };
}
const At = Sn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var I0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = be(), l = O(() => {
      var f;
      return ((f = r.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
    }), i = O(() => At.layersRoot), u = O(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = O(() => At.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const f = Array.from(i.value), [g] = [...At.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(g);
      return u.value >= w;
    }), p = A0(async (f) => {
      const g = [...At.branches].some((w) => w == null ? void 0 : w.contains(f.target));
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await ae(), f.defaultPrevented || o("dismiss"));
    }, r), m = T0((f) => {
      [...At.branches].some((w) => w == null ? void 0 : w.contains(f.target)) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    Qy("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let v;
    return _e((f) => {
      r.value && (n.disableOutsidePointerEvents && (At.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), At.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && At.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), _e((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), At.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(ve), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: _t({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: s(m).onFocusCapture,
      onBlurCapture: s(m).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [_(f.$slots, "default")]),
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
}), vu = I0;
const M0 = Ny(() => E([]));
function F0() {
  const e = M0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = el(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = el(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function el(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function R0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Fa = "focusScope.autoFocusOnMount", Ra = "focusScope.autoFocusOnUnmount", tl = {
  bubbles: !1,
  cancelable: !0
};
function L0(e, { select: t = !1 } = {}) {
  const n = mt();
  for (const o of e)
    if (Kt(o, { select: t }), mt() !== n) return !0;
}
function V0(e) {
  const t = gu(e), n = nl(t, e), o = nl(t.reverse(), e);
  return [n, o];
}
function gu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function nl(e, t) {
  for (const n of e) if (!N0(n, { upTo: t })) return n;
}
function N0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function q0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = mt();
    e.focus({ preventScroll: !0 }), e !== n && q0(e) && t && e.select();
  }
}
var z0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { currentRef: a, currentElement: r } = be(), l = E(null), i = F0(), u = Sn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    _e((c) => {
      if (!cn) return;
      const p = r.value;
      if (!n.trapped) return;
      function m(w) {
        if (u.paused || !p) return;
        const C = w.target;
        p.contains(C) ? l.value = C : Kt(l.value, { select: !0 });
      }
      function v(w) {
        if (u.paused || !p) return;
        const C = w.relatedTarget;
        C !== null && (p.contains(C) || Kt(l.value, { select: !0 }));
      }
      function f(w) {
        p.contains(l.value) || Kt(p);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const g = new MutationObserver(f);
      p && g.observe(p, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), _e(async (c) => {
      const p = r.value;
      if (await ae(), !p) return;
      i.add(u);
      const m = mt();
      if (!p.contains(m)) {
        const f = new CustomEvent(Fa, tl);
        p.addEventListener(Fa, (g) => o("mountAutoFocus", g)), p.dispatchEvent(f), f.defaultPrevented || (L0(R0(gu(p)), { select: !0 }), mt() === m && Kt(p));
      }
      c(() => {
        p.removeEventListener(Fa, (w) => o("mountAutoFocus", w));
        const f = new CustomEvent(Ra, tl), g = (w) => {
          o("unmountAutoFocus", w);
        };
        p.addEventListener(Ra, g), p.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || Kt(m ?? document.body, { select: !0 }), p.removeEventListener(Ra, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused) return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = mt();
      if (p && m) {
        const v = c.currentTarget, [f, g] = V0(v);
        f && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && Kt(f, { select: !0 })) : c.shiftKey && m === f && (c.preventDefault(), n.loop && Kt(g, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(ve), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [_(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), j0 = z0;
function K0(e) {
  return e ? "open" : "closed";
}
const H0 = "DialogTitle", W0 = "DialogContent";
function U0({ titleName: e = H0, contentName: t = W0, componentLink: n = "dialog.html#title", titleId: o, descriptionId: a, contentElement: r }) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  se(() => {
    var c;
    document.getElementById(o) || console.warn(l);
    const d = (c = r.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
var G0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ot(), { forwardRef: r, currentElement: l } = be();
    return a.titleId || (a.titleId = ht(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = ht(void 0, "reka-dialog-description")), se(() => {
      a.contentElement = l, mt() !== document.body && (a.triggerElement.value = mt());
    }), process.env.NODE_ENV !== "production" && U0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(j0), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [F(s(vu), D({
        id: s(a).contentId,
        ref: s(r),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": s(a).descriptionId,
        "aria-labelledby": s(a).titleId,
        "data-state": s(K0)(s(a).open.value)
      }, i.$attrs, {
        onDismiss: u[0] || (u[0] = (d) => s(a).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (d) => o("escapeKeyDown", d)),
        onFocusOutside: u[2] || (u[2] = (d) => o("focusOutside", d)),
        onInteractOutside: u[3] || (u[3] = (d) => o("interactOutside", d)),
        onPointerDownOutside: u[4] || (u[4] = (d) => o("pointerDownOutside", d))
      }), {
        default: y(() => [_(i.$slots, "default")]),
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
}), hu = G0, Y0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ot(), r = ha(o), { forwardRef: l, currentElement: i } = be();
    return pu(i), (u, d) => (h(), x(hu, D({
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
        const p = c.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || m) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), X0 = Y0, Z0 = /* @__PURE__ */ b({
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
    const n = e, a = ha(t);
    be();
    const r = Ot(), l = E(!1), i = E(!1);
    return (u, d) => (h(), x(hu, D({
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
      default: y(() => [_(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Q0 = Z0, J0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ot(), r = ha(o), { forwardRef: l } = be();
    return (i, u) => (h(), x(s(bo), { present: i.forceMount || s(a).open.value }, {
      default: y(() => [s(a).modal.value ? (h(), x(X0, D({
        key: 0,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)) : (h(), x(Q0, D({
        key: 1,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), eb = J0, tb = /* @__PURE__ */ b({
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
    be();
    const n = Ot();
    return (o, a) => (h(), x(s(ve), D(t, { id: s(n).descriptionId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), nb = tb, ob = /* @__PURE__ */ b({
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
    const t = Ot();
    return lu(!0), be(), (n, o) => (h(), x(s(ve), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": s(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), ab = ob, rb = /* @__PURE__ */ b({
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
    const t = Ot(), { forwardRef: n } = be();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(bo), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [F(ab, D(o.$attrs, {
          ref: s(n),
          as: o.as,
          "as-child": o.asChild
        }), {
          default: y(() => [_(o.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : ye("v-if", !0);
    };
  }
}), sb = rb, lb = /* @__PURE__ */ b({
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
    const t = Xy();
    return (n, o) => s(t) || n.forceMount ? (h(), x(so, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [_(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : ye("v-if", !0);
  }
}), yu = lb, ib = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(yu), Y(J(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ub = ib, db = /* @__PURE__ */ b({
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
    const t = e, n = Ot();
    return be(), (o, a) => (h(), x(s(ve), D(t, { id: s(n).titleId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), cb = db, pb = /* @__PURE__ */ b({
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
    const t = e, n = Ot(), { forwardRef: o, currentElement: a } = be();
    return n.contentId || (n.contentId = ht(void 0, "reka-dialog-content")), se(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(ve), D(t, {
      ref: s(o),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": s(n).open.value || !1,
      "aria-controls": s(n).open.value ? s(n).contentId : void 0,
      "data-state": s(n).open.value ? "open" : "closed",
      onClick: s(n).onOpenToggle
    }), {
      default: y(() => [_(r.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), fb = pb;
const ol = "data-reka-collection-item";
function ya(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: c
    }, io(o, a);
  } else a = lo(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p) return [];
    const m = Array.from(p.querySelectorAll(`[${ol}]`)), f = Array.from(a.itemMap.value.values()).sort((g, w) => m.indexOf(g.ref) - m.indexOf(w.ref));
    return c ? f : f.filter((g) => g.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: m, currentElement: v } = Gt();
      return te(v, () => {
        a.collectionRef.value = v.value;
      }), () => Ge(tr, { ref: m }, p);
    }
  }), i = b({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: p, attrs: m }) {
      const { primitiveElement: v, currentElement: f } = Gt();
      return _e((g) => {
        if (f.value) {
          const w = fl(f.value);
          a.itemMap.value.set(w, {
            ref: f.value,
            value: c.value
          }), g(() => a.itemMap.value.delete(w));
        }
      }), () => Ge(tr, {
        ...m,
        [ol]: "",
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
const mb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function vb(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function bu(e, t, n) {
  const o = vb(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return mb[o];
}
function gb(e, t = !1) {
  const n = mt();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), mt() !== n)) return;
}
function hb(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [yb] = Ye("RovingFocusGroup");
var bb = /* @__PURE__ */ b({
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
    const t = e, n = yb(), o = ht(), a = O(() => t.tabStopId || o), r = O(() => n.currentTabStopId.value === a.value), { getItems: l, CollectionItem: i } = ya();
    se(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ke(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = bu(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let p = [...l().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (c === "last") p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const m = p.indexOf(d.currentTarget);
          p = n.loop.value ? hb(p, m + 1) : p.slice(m + 1);
        }
        ae(() => gb(p));
      }
    }
    return (d, c) => (h(), x(s(i), null, {
      default: y(() => [F(s(ve), {
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
        default: y(() => [_(d.$slots, "default")]),
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
}), wb = bb, _b = /* @__PURE__ */ b({
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
    return (t, n) => (h(), x(s(ve), {
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
      default: y(() => [_(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), xb = _b, Cb = /* @__PURE__ */ b({
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
    const t = e, { primitiveElement: n, currentElement: o } = Gt(), a = O(() => t.checked ?? t.value);
    return te(a, (r, l) => {
      if (!o.value) return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), m = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(m);
      }
    }), (r, l) => (h(), x(xb, D({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), al = Cb, Bb = /* @__PURE__ */ b({
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
    return (a, r) => (h(), z(De, null, [ye(" We render single input if it's required "), n.value ? (h(), x(al, D({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), z(De, { key: 1 }, Ht(o.value, (l) => (h(), x(al, D({ key: l.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), wu = Bb;
const [$b] = Ye("CheckboxGroupRoot");
function Wo(e) {
  return e === "indeterminate";
}
function _u(e) {
  return Wo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [Ob, Sb] = Ye("CheckboxRoot");
var Eb = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = be(), l = $b(null), i = Rt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = O(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = O(() => Ja(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : Qs(l.modelValue.value, n.value));
    function c() {
      if (Ja(l == null ? void 0 : l.modelValue.value))
        i.value = Wo(i.value) ? !0 : !i.value;
      else {
        const v = [...l.modelValue.value || []];
        if (Qs(v, n.value)) {
          const f = v.findIndex((g) => Dn(g, n.value));
          v.splice(f, 1);
        } else v.push(n.value);
        l.modelValue.value = v;
      }
    }
    const p = du(r), m = O(() => {
      var v;
      return n.id && r.value ? (v = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : v.innerText : void 0;
    });
    return Sb({
      disabled: u,
      state: d
    }), (v, f) => {
      var g, w;
      return h(), x(tt((g = s(l)) != null && g.rovingFocus.value ? s(wb) : s(ve)), D(v.$attrs, {
        id: v.id,
        ref: s(a),
        role: "checkbox",
        "as-child": v.asChild,
        as: v.as,
        type: v.as === "button" ? "button" : void 0,
        "aria-checked": s(Wo)(d.value) ? "mixed" : d.value,
        "aria-required": v.required,
        "aria-label": v.$attrs["aria-label"] || m.value,
        "data-state": s(_u)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (w = s(l)) != null && w.rovingFocus.value ? !u.value : void 0,
        onKeydown: Qe(Pe(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [_(v.$slots, "default", {
          modelValue: s(i),
          state: d.value
        }), s(p) && v.name && !s(l) ? (h(), x(s(wu), {
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
        ])) : ye("v-if", !0)]),
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
}), Pb = Eb, kb = /* @__PURE__ */ b({
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
    const { forwardRef: t } = be(), n = Ob();
    return (o, a) => (h(), x(s(bo), { present: o.forceMount || s(Wo)(s(n).state.value) || s(n).state.value === !0 }, {
      default: y(() => [F(s(ve), D({
        ref: s(t),
        "data-state": s(_u)(s(n).state.value),
        "data-disabled": s(n).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": o.asChild,
        as: o.as
      }, o.$attrs), {
        default: y(() => [_(o.$slots, "default")]),
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
}), Db = kb;
const [xu, Ab] = Ye("PopperRoot");
var Tb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Ab({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), Ib = Tb, Mb = /* @__PURE__ */ b({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
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
    const t = e, { forwardRef: n, currentElement: o } = be(), a = xu();
    return ur(() => {
      a.onAnchorChange(t.reference ?? o.value);
    }), (r, l) => (h(), x(s(ve), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [_(r.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Fb = Mb;
function Rb(e) {
  return e !== null;
}
function Lb(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var w, C, $;
      const { placement: n, rects: o, middlewareData: a } = t, l = ((w = a.arrow) == null ? void 0 : w.centerOffset) !== 0, i = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, c] = nr(n), p = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], m = (((C = a.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, v = ((($ = a.arrow) == null ? void 0 : $.y) ?? 0) + u / 2;
      let f = "", g = "";
      return d === "bottom" ? (f = l ? p : `${m}px`, g = `${-u}px`) : d === "top" ? (f = l ? p : `${m}px`, g = `${o.floating.height + u}px`) : d === "right" ? (f = `${-u}px`, g = l ? p : `${v}px`) : d === "left" && (f = `${o.floating.width + u}px`, g = l ? p : `${v}px`), { data: {
        x: f,
        y: g
      } };
    }
  };
}
function nr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Vb = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [_1, Nb] = Ye("PopperContent");
var qb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ ir({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
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
  }, { ...Vb }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = xu(), { forwardRef: r, currentElement: l } = be(), i = E(), u = E(), { width: d, height: c } = c0(u), p = O(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), m = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), v = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = O(() => ({
      padding: m.value,
      boundary: v.value.filter(Rb),
      altBoundary: v.value.length > 0
    })), g = O(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), w = Vy(() => [
      Fl({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && zo({
        ...f.value,
        ...g.value
      }),
      n.avoidCollisions && Rl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Nl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && zo({
        ...f.value,
        ...g.value
      }),
      Ll({
        ...f.value,
        apply: ({ elements: I, rects: U, availableWidth: K, availableHeight: X }) => {
          const { width: H, height: ee } = U.reference, Q = I.floating.style;
          Q.setProperty("--reka-popper-available-width", `${K}px`), Q.setProperty("--reka-popper-available-height", `${X}px`), Q.setProperty("--reka-popper-anchor-width", `${H}px`), Q.setProperty("--reka-popper-anchor-height", `${ee}px`);
        }
      }),
      u.value && ql({
        element: u.value,
        padding: n.arrowPadding
      }),
      Lb({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Vl({
        strategy: "referenceHidden",
        ...f.value
      })
    ]), C = O(() => n.reference ?? a.anchor.value), { floatingStyles: $, placement: B, isPositioned: k, middlewareData: S } = jl(C, i, {
      strategy: n.positionStrategy,
      placement: p,
      whileElementsMounted: (...I) => Ml(...I, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: w
    }), T = O(() => nr(B.value)[0]), P = O(() => nr(B.value)[1]);
    ur(() => {
      k.value && o("placed");
    });
    const M = O(() => {
      var I;
      return ((I = S.value.arrow) == null ? void 0 : I.centerOffset) !== 0;
    }), R = E("");
    _e(() => {
      l.value && (R.value = window.getComputedStyle(l.value).zIndex);
    });
    const A = O(() => {
      var I;
      return ((I = S.value.arrow) == null ? void 0 : I.x) ?? 0;
    }), L = O(() => {
      var I;
      return ((I = S.value.arrow) == null ? void 0 : I.y) ?? 0;
    });
    return Nb({
      placedSide: T,
      onArrowChange: (I) => u.value = I,
      arrowX: A,
      arrowY: L,
      shouldHideArrow: M
    }), (I, U) => {
      var K, X, H;
      return h(), z("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: _t({
          ...s($),
          transform: s(k) ? s($).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: R.value,
          "--reka-popper-transform-origin": [(K = s(S).transformOrigin) == null ? void 0 : K.x, (X = s(S).transformOrigin) == null ? void 0 : X.y].join(" "),
          ...((H = s(S).hide) == null ? void 0 : H.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [F(s(ve), D({ ref: s(r) }, I.$attrs, {
        "as-child": n.asChild,
        as: I.as,
        "data-side": T.value,
        "data-align": P.value,
        style: { animation: s(k) ? void 0 : "none" }
      }), {
        default: y(() => [_(I.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
}), zb = qb, jb = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {
      type: null,
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
    const { forwardRef: t } = be();
    return (n, o) => (h(), x(s(Fb), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [F(s(ve), D({
        ref: s(t),
        "as-child": n.asChild,
        as: n.as
      }, n.$attrs), {
        default: y(() => [_(n.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), Kb = jb;
function Hb(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => Qn(o, t, n)) : Qn(e, t, n);
}
function Qn(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Dn(e, t);
}
const [ba, Wb] = Ye("ListboxRoot");
var Ub = /* @__PURE__ */ b({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    selectionBehavior: {
      type: String,
      required: !1,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
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
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(e, { expose: t, emit: n }) {
    const o = e, a = n, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: c } = we(o), { getItems: p } = ya({ isProvider: !0 }), { handleTypeaheadSearch: m } = f0(), { primitiveElement: v, currentElement: f } = Gt(), g = d0(), w = uu(c), C = du(f), $ = E(), B = E(!1), k = E(!0), S = Rt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (r.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    });
    function T(j) {
      if (B.value = !0, o.multiple) {
        const G = Array.isArray(S.value) ? [...S.value] : [], oe = G.findIndex((de) => Qn(de, j, o.by));
        o.selectionBehavior === "toggle" ? (oe === -1 ? G.push(j) : G.splice(oe, 1), S.value = G) : (S.value = [j], $.value = j);
      } else o.selectionBehavior === "toggle" && Qn(S.value, j, o.by) ? S.value = void 0 : S.value = j;
      setTimeout(() => {
        B.value = !1;
      }, 1);
    }
    const P = E(null), M = E(null), R = E(!1), A = E(!1), L = Lo(), I = Lo(), U = Lo();
    function K() {
      return p().map((j) => j.ref).filter((j) => j.dataset.disabled !== "");
    }
    function X(j, G = !0) {
      if (!j) return;
      P.value = j, k.value && P.value.focus(), G && P.value.scrollIntoView({ block: "nearest" });
      const oe = p().find((de) => de.ref === j);
      a("highlight", oe);
    }
    function H(j) {
      if (R.value) U.trigger(j);
      else {
        const G = p().find((oe) => Qn(oe.value, j, o.by));
        G && (P.value = G.ref, X(G.ref));
      }
    }
    function ee(j) {
      P.value && P.value.isConnected && (j.preventDefault(), j.stopPropagation(), A.value || P.value.click());
    }
    function Q(j) {
      if (k.value) {
        if (B.value = !0, R.value) I.trigger(j);
        else {
          const G = j.altKey || j.ctrlKey || j.metaKey;
          if (G && j.key === "a" && r.value) {
            const oe = p(), de = oe.map((me) => me.value);
            S.value = [...de], j.preventDefault(), X(oe[oe.length - 1].ref);
          } else if (!G) {
            const oe = m(j.key, p());
            oe && X(oe);
          }
        }
        setTimeout(() => {
          B.value = !1;
        }, 1);
      }
    }
    function q() {
      A.value = !0;
    }
    function le() {
      ae(() => {
        A.value = !1;
      });
    }
    function re() {
      ae(() => {
        const j = new KeyboardEvent("keydown", { key: "PageUp" });
        Ve(j);
      });
    }
    function ke(j) {
      const G = P.value;
      G != null && G.isConnected && (M.value = G), P.value = null, a("leave", j);
    }
    function Me(j) {
      var oe, de;
      const G = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((oe = j.currentTarget) == null || oe.dispatchEvent(G), a("entryFocus", G), !G.defaultPrevented)
        if (M.value) X(M.value);
        else {
          const me = (de = K()) == null ? void 0 : de[0];
          X(me);
        }
    }
    function Ve(j) {
      const G = bu(j, i.value, w.value);
      if (!G) return;
      let oe = K();
      if (P.value) {
        if (G === "last") oe.reverse();
        else if (G === "prev" || G === "next") {
          G === "prev" && oe.reverse();
          const de = oe.indexOf(P.value);
          oe = oe.slice(de + 1);
        }
        Xe(j, oe[0]);
      }
      if (oe.length) {
        const de = !P.value && G === "prev" ? oe.length - 1 : 0;
        X(oe[de]);
      }
      if (R.value) return I.trigger(j);
    }
    function Xe(j, G) {
      var de;
      if (!(R.value || o.selectionBehavior !== "replace" || !r.value || !Array.isArray(S.value) || (j.altKey || j.ctrlKey || j.metaKey) && !j.shiftKey) && j.shiftKey) {
        const me = p().filter(($e) => $e.ref.dataset.disabled !== "");
        let Z = (de = me.find(($e) => $e.ref === G)) == null ? void 0 : de.value;
        if (j.key === g.END ? Z = me[me.length - 1].value : j.key === g.HOME && (Z = me[0].value), !Z || !$.value) return;
        const ge = Ly(me.map(($e) => $e.value), $.value, Z);
        S.value = ge;
      }
    }
    async function ot(j) {
      if (await ae(), R.value) L.trigger(j);
      else {
        const G = K(), oe = G.find((de) => de.dataset.state === "checked");
        oe ? X(oe) : G.length && X(G[0]);
      }
    }
    return te(S, () => {
      B.value || ae(() => {
        ot();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: P,
      highlightItem: H,
      highlightFirstItem: re,
      highlightSelected: ot,
      getItems: p
    }), Wb({
      modelValue: S,
      onValueChange: T,
      multiple: r,
      orientation: i,
      dir: w,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: P,
      isVirtual: R,
      virtualFocusHook: L,
      virtualKeydownHook: I,
      virtualHighlightHook: U,
      by: o.by,
      firstValue: $,
      selectionBehavior: d,
      focusable: k,
      onLeave: ke,
      onEnter: Me,
      changeHighlight: X,
      onKeydownEnter: ee,
      onKeydownNavigation: Ve,
      onKeydownTypeAhead: Q,
      onCompositionStart: q,
      onCompositionEnd: le,
      highlightFirstItem: re
    }), (j, G) => (h(), x(s(ve), {
      ref_key: "primitiveElement",
      ref: v,
      as: j.as,
      "as-child": j.asChild,
      dir: s(w),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: ke,
      onFocusout: G[0] || (G[0] = async (oe) => {
        const de = oe.relatedTarget || oe.target;
        await ae(), P.value && s(f) && !s(f).contains(de) && ke(oe);
      })
    }, {
      default: y(() => [_(j.$slots, "default", { modelValue: s(S) }), s(C) && j.name ? (h(), x(s(wu), {
        key: 0,
        name: j.name,
        value: s(S),
        disabled: s(u),
        required: j.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : ye("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), Gb = Ub, Yb = /* @__PURE__ */ b({
  __name: "ListboxContent",
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
    const { CollectionSlot: t } = ya(), n = ba(), o = su(!1, 10);
    return (a, r) => (h(), x(s(t), null, {
      default: y(() => [F(s(ve), {
        role: "listbox",
        as: a.as,
        "as-child": a.asChild,
        tabindex: s(n).focusable.value ? s(n).highlightedElement.value ? "-1" : "0" : void 0,
        "aria-orientation": s(n).orientation.value,
        "aria-multiselectable": !!s(n).multiple.value,
        "data-orientation": s(n).orientation.value,
        onMousedown: r[0] || (r[0] = Pe((l) => o.value = !0, ["left"])),
        onFocus: r[1] || (r[1] = (l) => {
          s(o) || s(n).onEnter(l);
        }),
        onKeydown: [
          r[2] || (r[2] = Qe(Pe((l) => {
            s(n).focusable.value && s(n).onKeydownNavigation(l);
          }, ["prevent"]), [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          Qe(s(n).onKeydownEnter, ["enter"]),
          s(n).onKeydownTypeAhead
        ]
      }, {
        default: y(() => [_(a.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "tabindex",
        "aria-orientation",
        "aria-multiselectable",
        "data-orientation",
        "onKeydown"
      ])]),
      _: 3
    }));
  }
}), Xb = Yb, Zb = /* @__PURE__ */ b({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
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
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Rt(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = ba(), { primitiveElement: l, currentElement: i } = Gt(), u = O(() => n.disabled || r.disabled.value || !1), d = E();
    return ul(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), se(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ke(() => {
      r.focusable.value = !0;
    }), (c, p) => (h(), x(s(ve), {
      ref_key: "primitiveElement",
      ref: l,
      as: c.as,
      "as-child": c.asChild,
      value: s(a),
      disabled: u.value ? "" : void 0,
      "data-disabled": u.value ? "" : void 0,
      "aria-disabled": u.value ?? void 0,
      "aria-activedescendant": d.value,
      type: "text",
      onKeydown: [Qe(Pe(s(r).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), Qe(s(r).onKeydownEnter, ["enter"])],
      onInput: p[0] || (p[0] = (m) => {
        a.value = m.target.value, s(r).highlightFirstItem();
      }),
      onCompositionstart: s(r).onCompositionStart,
      onCompositionend: s(r).onCompositionEnd
    }, {
      default: y(() => [_(c.$slots, "default", { modelValue: s(a) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "value",
      "disabled",
      "data-disabled",
      "aria-disabled",
      "aria-activedescendant",
      "onKeydown",
      "onCompositionstart",
      "onCompositionend"
    ]));
  }
}), Qb = Zb;
const [x1, Jb] = Ye("ListboxGroup");
var ew = /* @__PURE__ */ b({
  __name: "ListboxGroup",
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
    const t = e, n = ht(void 0, "reka-listbox-group");
    return Jb({ id: n }), (o, a) => (h(), x(s(ve), D({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), tw = ew;
const nw = "listbox.select", [ow, aw] = Ye("ListboxItem");
var rw = /* @__PURE__ */ b({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
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
      default: "div"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ht(void 0, "reka-listbox-item"), { CollectionItem: r } = ya(), { forwardRef: l, currentElement: i } = be(), u = ba(), d = O(() => i.value === u.highlightedElement.value), c = O(() => Hb(u.modelValue.value, n.value, u.by)), p = O(() => u.disabled.value || n.disabled);
    async function m(f) {
      o("select", f), !(f != null && f.defaultPrevented) && !p.value && f && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function v(f) {
      const g = {
        originalEvent: f,
        value: n.value
      };
      es(nw, m, g);
    }
    return aw({ isSelected: c }), (f, g) => (h(), x(s(r), { value: f.value }, {
      default: y(() => [Nu([d.value, c.value], () => F(s(ve), D({ id: s(a) }, f.$attrs, {
        ref: s(l),
        role: "option",
        tabindex: s(u).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: f.as,
        "as-child": f.asChild,
        disabled: p.value ? "" : void 0,
        "data-disabled": p.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: v,
        onKeydown: Qe(Pe(v, ["prevent"]), ["space"]),
        onPointermove: g[0] || (g[0] = (w) => {
          s(u).highlightedElement.value !== s(i) && (s(u).highlightOnHover.value ? s(u).changeHighlight(s(i), !1) : s(u).focusable.value || s(u).changeHighlight(s(i), !1));
        })
      }), {
        default: y(() => [_(f.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "tabindex",
        "aria-selected",
        "as",
        "as-child",
        "disabled",
        "data-disabled",
        "data-highlighted",
        "data-state",
        "onKeydown"
      ]), g, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), sw = rw, lw = /* @__PURE__ */ b({
  __name: "ListboxItemIndicator",
  props: {
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
    const t = e;
    be();
    const n = ow();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(ve), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16)) : ye("v-if", !0);
  }
}), iw = lw;
const [Lt, uw] = Ye("ComboboxRoot");
var dw = /* @__PURE__ */ b({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: !1,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    openOnClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    ignoreFilter: {
      type: Boolean,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
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
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(e, { expose: t, emit: n }) {
    var K, X, H;
    const o = e, a = n, { primitiveElement: r, currentElement: l } = Gt(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: p, openOnClick: m, dir: v } = we(o), f = uu(v), g = Rt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (i.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    }), w = Rt(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    async function C(ee) {
      var Q, q;
      w.value = ee, L.value = "", ee ? (await ae(), (Q = r.value) == null || Q.highlightSelected(), B.value = !0) : B.value = !1, (q = S.value) == null || q.focus(), setTimeout(() => {
        !ee && o.resetSearchTermOnBlur && $.trigger();
      }, 1);
    }
    const $ = Lo(), B = E(!1), k = E(!1), S = E(), T = E(), P = O(() => {
      var ee;
      return ((ee = r.value) == null ? void 0 : ee.highlightedElement) ?? void 0;
    }), M = E(/* @__PURE__ */ new Map()), R = E(/* @__PURE__ */ new Map()), { contains: A } = a0({ sensitivity: "base" }), L = E(""), I = O((ee) => {
      if (!L.value || o.ignoreFilter || k.value) return {
        count: M.value.size,
        items: (ee == null ? void 0 : ee.items) ?? /* @__PURE__ */ new Map(),
        groups: (ee == null ? void 0 : ee.groups) ?? new Set(R.value.keys())
      };
      let Q = 0;
      const q = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Set();
      for (const [re, ke] of M.value) {
        const Me = A(ke, L.value);
        q.set(re, Me ? 1 : 0), Me && Q++;
      }
      for (const [re, ke] of R.value) for (const Me of ke) if (q.get(Me) > 0) {
        le.add(re);
        break;
      }
      return {
        count: Q,
        items: q,
        groups: le
      };
    }), U = Ue();
    return se(() => {
      var ee, Q, q;
      U != null && U.exposed && (U.exposed.highlightItem = (ee = r.value) == null ? void 0 : ee.highlightItem, U.exposed.highlightFirstItem = (Q = r.value) == null ? void 0 : Q.highlightFirstItem, U.exposed.highlightSelected = (q = r.value) == null ? void 0 : q.highlightSelected);
    }), t({
      filtered: I,
      highlightedElement: P,
      highlightItem: (K = r.value) == null ? void 0 : K.highlightItem,
      highlightFirstItem: (X = r.value) == null ? void 0 : X.highlightFirstItem,
      highlightSelected: (H = r.value) == null ? void 0 : H.highlightSelected
    }), uw({
      modelValue: g,
      multiple: i,
      disabled: u,
      open: w,
      onOpenChange: C,
      contentId: "",
      isUserInputted: B,
      isVirtual: k,
      inputElement: S,
      highlightedElement: P,
      onInputElementChange: (ee) => S.value = ee,
      triggerElement: T,
      onTriggerElementChange: (ee) => T.value = ee,
      parentElement: l,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: $.on,
      allItems: M,
      allGroups: R,
      filterSearch: L,
      filterState: I,
      ignoreFilter: d,
      openOnFocus: p,
      openOnClick: m
    }), (ee, Q) => (h(), x(s(Ib), null, {
      default: y(() => [F(s(Gb), D({
        ref_key: "primitiveElement",
        ref: r
      }, ee.$attrs, {
        modelValue: s(g),
        "onUpdate:modelValue": Q[0] || (Q[0] = (q) => rt(g) ? g.value = q : null),
        style: { pointerEvents: s(w) ? "auto" : void 0 },
        as: ee.as,
        "as-child": ee.asChild,
        dir: s(f),
        multiple: s(i),
        name: ee.name,
        required: ee.required,
        disabled: s(u),
        "highlight-on-hover": !0,
        by: o.by,
        onHighlight: Q[1] || (Q[1] = (q) => a("highlight", q))
      }), {
        default: y(() => [_(ee.$slots, "default", {
          open: s(w),
          modelValue: s(g)
        })]),
        _: 3
      }, 16, [
        "modelValue",
        "style",
        "as",
        "as-child",
        "dir",
        "multiple",
        "name",
        "required",
        "disabled",
        "by"
      ])]),
      _: 3
    }));
  }
}), cw = dw;
const [C1, pw] = Ye("ComboboxContent");
var fw = /* @__PURE__ */ b({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "inline"
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, { position: a } = we(n), r = Lt(), { forwardRef: l, currentElement: i } = be();
    lu(n.bodyLock), pu(r.parentElement);
    const u = O(() => n.position === "popper" ? n : {}), d = fn(u.value), c = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    pw({ position: a });
    const p = E(!1);
    return se(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), Ke(() => {
      var m;
      p.value && ((m = r.triggerElement.value) == null || m.focus());
    }), (m, v) => (h(), x(s(Xb), { "as-child": "" }, {
      default: y(() => [F(s(vu), {
        "as-child": "",
        "disable-outside-pointer-events": m.disableOutsidePointerEvents,
        onDismiss: v[0] || (v[0] = (f) => s(r).onOpenChange(!1)),
        onFocusOutside: v[1] || (v[1] = (f) => {
          var g;
          (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("focusOutside", f);
        }),
        onInteractOutside: v[2] || (v[2] = (f) => o("interactOutside", f)),
        onEscapeKeyDown: v[3] || (v[3] = (f) => o("escapeKeyDown", f)),
        onPointerDownOutside: v[4] || (v[4] = (f) => {
          var g;
          (g = s(r).parentElement.value) != null && g.contains(f.target) && f.preventDefault(), o("pointerDownOutside", f);
        })
      }, {
        default: y(() => [(h(), x(tt(s(a) === "popper" ? s(zb) : s(ve)), D({
          ...m.$attrs,
          ...s(d)
        }, {
          id: s(r).contentId,
          ref: s(l),
          "data-state": s(r).open.value ? "open" : "closed",
          style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...s(a) === "popper" ? c : {}
          }
        }), {
          default: y(() => [_(m.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "data-state",
          "style"
        ]))]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }));
  }
}), mw = fw, vw = /* @__PURE__ */ b({
  __name: "ComboboxCancel",
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
    be();
    const n = Lt();
    function o() {
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus());
    }
    return (a, r) => (h(), x(s(ve), D({ type: a.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: o
    }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), B1 = vw, gw = /* @__PURE__ */ b({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const a = $t(e, t), { forwardRef: r } = be(), l = Lt();
    return l.contentId || (l.contentId = ht(void 0, "reka-combobox-content")), (i, u) => (h(), x(s(bo), { present: i.forceMount || s(l).open.value }, {
      default: y(() => [F(mw, D({
        ...s(a),
        ...i.$attrs
      }, { ref: s(r) }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), hw = gw, yw = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
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
    const t = e, n = Lt(), o = O(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (a, r) => o.value ? (h(), x(s(ve), Y(D({ key: 0 }, t)), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[0] || (r[0] = Ce("No options"))])]),
      _: 3
    }, 16)) : ye("v-if", !0);
  }
}), bw = yw;
const [Cu, ww] = Ye("ComboboxGroup");
var _w = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
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
    const t = e, n = ht(void 0, "reka-combobox-group"), o = Lt(), a = O(() => o.ignoreFilter.value ? !0 : o.filterSearch.value ? o.filterState.value.groups.has(n) : !0), r = ww({
      id: n,
      labelId: ""
    });
    return se(() => {
      o.allGroups.value.has(n) || o.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ke(() => {
      o.allGroups.value.delete(n);
    }), (l, i) => (h(), x(s(tw), D({
      id: s(n),
      "aria-labelledby": s(r).labelId
    }, t, { hidden: a.value ? void 0 : !0 }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), xw = _w, Cw = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
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
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Lt(), r = ba(), { primitiveElement: l, currentElement: i } = Gt(), u = Rt(n, "modelValue", o, { passive: n.modelValue === void 0 });
    se(() => {
      i.value && a.onInputElementChange(i.value);
    });
    function d(f) {
      a.open.value || a.onOpenChange(!0);
    }
    function c(f) {
      const g = f.target;
      a.open.value ? a.filterSearch.value = g.value : (a.onOpenChange(!0), ae(() => {
        g.value && (a.filterSearch.value = g.value, r.highlightFirstItem());
      }));
    }
    function p() {
      a.openOnFocus.value && !a.open.value && a.onOpenChange(!0);
    }
    function m() {
      a.openOnClick.value && !a.open.value && a.onOpenChange(!0);
    }
    function v() {
      const f = a.modelValue.value;
      n.displayValue ? u.value = n.displayValue(f) : !a.multiple.value && f && !Array.isArray(f) && typeof f != "object" ? u.value = f.toString() : u.value = "", ae(() => {
        u.value = u.value;
      });
    }
    return a.onResetSearchTerm(() => {
      v();
    }), te(a.modelValue, async () => {
      !a.isUserInputted.value && a.resetSearchTermOnSelect.value && v();
    }, {
      immediate: !0,
      deep: !0
    }), te(a.filterState, () => {
      a.isVirtual.value || r.highlightFirstItem();
    }), (f, g) => (h(), x(s(Qb), {
      ref_key: "primitiveElement",
      ref: l,
      modelValue: s(u),
      "onUpdate:modelValue": g[0] || (g[0] = (w) => rt(u) ? u.value = w : null),
      as: f.as,
      "as-child": f.asChild,
      "auto-focus": f.autoFocus,
      disabled: f.disabled,
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: m,
      onInput: c,
      onKeydown: Qe(Pe(d, ["prevent"]), ["down", "up"]),
      onFocus: p
    }, {
      default: y(() => [_(f.$slots, "default")]),
      _: 3
    }, 8, [
      "modelValue",
      "as",
      "as-child",
      "auto-focus",
      "disabled",
      "aria-expanded",
      "aria-controls",
      "onKeydown"
    ]));
  }
}), Bw = Cw, $w = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !0
    },
    disabled: {
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
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ht(void 0, "reka-combobox-item"), r = Lt(), l = Cu(null), { primitiveElement: i, currentElement: u } = Gt();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = O(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value) return !0;
      {
        const c = r.filterState.value.items.get(a);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return se(() => {
      var p;
      r.allItems.value.set(a, n.textValue || u.value.textContent || u.value.innerText);
      const c = l == null ? void 0 : l.id;
      c && (r.allGroups.value.has(c) ? (p = r.allGroups.value.get(c)) == null || p.add(a) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([a])));
    }), Ke(() => {
      r.allItems.value.delete(a);
    }), (c, p) => d.value ? (h(), x(s(sw), D({ key: 0 }, n, {
      id: s(a),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || c.disabled,
      onSelect: p[0] || (p[0] = (m) => {
        o("select", m), !m.defaultPrevented && !s(r).multiple.value && !c.disabled && !s(r).disabled.value && (m.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = n.value);
      })
    }), {
      default: y(() => [_(c.$slots, "default", {}, () => [Ce(Ae(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : ye("v-if", !0);
  }
}), Ow = $w, Sw = /* @__PURE__ */ b({
  __name: "ComboboxItemIndicator",
  props: {
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
    const t = e;
    return (n, o) => (h(), x(s(iw), Y(J(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), $1 = Sw, Ew = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {
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
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    be();
    const n = Cu({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = ht(void 0, "reka-combobox-group-label")), (o, a) => (h(), x(s(ve), D(t, { id: s(n).labelId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Pw = Ew, kw = /* @__PURE__ */ b({
  __name: "ComboboxPortal",
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
    return (n, o) => (h(), x(s(yu), Y(J(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Dw = kw, Aw = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
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
    const t = e;
    return be(), (n, o) => (h(), x(s(ve), D(t, { "aria-hidden": "true" }), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Tw = Aw, Iw = /* @__PURE__ */ b({
  __name: "ComboboxTrigger",
  props: {
    disabled: {
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
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = be(), a = Lt(), r = O(() => t.disabled || a.disabled.value || !1);
    return se(() => {
      o.value && a.onTriggerElementChange(o.value);
    }), (l, i) => (h(), x(s(ve), D(t, {
      ref: s(n),
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": s(a).open.value,
      "aria-controls": s(a).contentId,
      "data-state": s(a).open.value ? "open" : "closed",
      disabled: r.value,
      "data-disabled": r.value ? "" : void 0,
      "aria-disabled": r.value ?? void 0,
      onClick: i[0] || (i[0] = (u) => s(a).onOpenChange(!s(a).open.value))
    }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "disabled",
      "data-disabled",
      "aria-disabled"
    ]));
  }
}), O1 = Iw;
function Mw(e) {
  const t = va({ nonce: E() });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var Fw = /* @__PURE__ */ b({
  __name: "ComboboxViewport",
  props: {
    nonce: {
      type: String,
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
    const t = e, { forwardRef: n } = be(), { nonce: o } = we(t), a = Mw(o), r = Lt();
    return (l, i) => (h(), z(De, null, [F(s(ve), D({
      ...l.$attrs,
      ...t
    }, {
      ref: s(n),
      "data-reka-combobox-viewport": "",
      role: "presentation",
      style: {
        position: "relative",
        flex: s(r).isVirtual.value ? void 0 : 1,
        overflow: "auto"
      }
    }), {
      default: y(() => [_(l.$slots, "default")]),
      _: 3
    }, 16, ["style"]), F(s(ve), {
      as: "style",
      nonce: s(a)
    }, {
      default: y(() => i[0] || (i[0] = [Ce(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), Rw = Fw, Lw = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
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
    const t = e;
    return be(), (n, o) => (h(), x(s(ve), D(t, { "data-type": "ellipsis" }), {
      default: y(() => [_(n.$slots, "default", {}, () => [o[0] || (o[0] = Ce("…"))])]),
      _: 3
    }, 16));
  }
}), Vw = Lw;
const [Kn, Nw] = Ye("PaginationRoot");
var qw = /* @__PURE__ */ b({
  __name: "PaginationRoot",
  props: {
    page: {
      type: Number,
      required: !1
    },
    defaultPage: {
      type: Number,
      required: !1,
      default: 1
    },
    itemsPerPage: {
      type: Number,
      required: !0
    },
    total: {
      type: Number,
      required: !1,
      default: 0
    },
    siblingCount: {
      type: Number,
      required: !1,
      default: 2
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    showEdges: {
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
      required: !1,
      default: "nav"
    }
  },
  emits: ["update:page"],
  setup(e, { emit: t }) {
    const n = e, o = t, { siblingCount: a, disabled: r, showEdges: l } = we(n);
    be();
    const i = Rt(n, "page", o, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = O(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
    return Nw({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: a,
      disabled: r,
      showEdges: l
    }), (d, c) => (h(), x(s(ve), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: y(() => [_(d.$slots, "default", {
        page: s(i),
        pageCount: u.value
      })]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), zw = qw, jw = /* @__PURE__ */ b({
  __name: "PaginationFirst",
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
    const t = e, n = Kn();
    be();
    const o = O(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ve), D(t, {
      "aria-label": "First Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("First page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Kw = jw, Hw = /* @__PURE__ */ b({
  __name: "PaginationLast",
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
    const t = e, n = Kn();
    be();
    const o = O(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ve), D(t, {
      "aria-label": "Last Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).pageCount.value))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("Last page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Ww = Hw;
function zt(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (o, a) => a + e);
}
function Uw(e) {
  return e.map((t) => typeof t == "number" ? {
    type: "page",
    value: t
  } : { type: "ellipsis" });
}
const To = "ellipsis";
function Gw(e, t, n, o) {
  const r = t, l = Math.max(e - n, 1), i = Math.min(e + n, r);
  if (o) {
    const d = Math.min(2 * n + 5, t) - 2, c = l > 3 && Math.abs(r - d - 1 + 1) > 2 && Math.abs(l - 1) > 2, p = i < r - 2 && Math.abs(r - d) > 2 && Math.abs(r - i) > 2;
    if (!c && p)
      return [
        ...zt(1, d),
        To,
        r
      ];
    if (c && !p) {
      const v = zt(r - d + 1, r);
      return [
        1,
        To,
        ...v
      ];
    }
    if (c && p) {
      const v = zt(l, i);
      return [
        1,
        To,
        ...v,
        To,
        r
      ];
    }
    return zt(1, r);
  } else {
    const u = n * 2 + 1;
    return t < u ? zt(1, r) : e <= n + 1 ? zt(1, u) : t - e <= n ? zt(t - u + 1, r) : zt(l, i);
  }
}
var Yw = /* @__PURE__ */ b({
  __name: "PaginationList",
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
    const t = e;
    be();
    const n = Kn(), o = O(() => Uw(Gw(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
    return (a, r) => (h(), x(s(ve), Y(J(t)), {
      default: y(() => [_(a.$slots, "default", { items: o.value })]),
      _: 3
    }, 16));
  }
}), Xw = Yw, Zw = /* @__PURE__ */ b({
  __name: "PaginationListItem",
  props: {
    value: {
      type: Number,
      required: !0
    },
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
    be();
    const n = Kn(), o = O(() => n.page.value === t.value), a = O(() => n.disabled.value);
    return (r, l) => (h(), x(s(ve), D(t, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": o.value ? "page" : void 0,
      "data-selected": o.value ? "true" : void 0,
      disabled: a.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !a.value && s(n).onPageChange(r.value))
    }), {
      default: y(() => [_(r.$slots, "default", {}, () => [Ce(Ae(r.value), 1)])]),
      _: 3
    }, 16, [
      "aria-label",
      "aria-current",
      "data-selected",
      "disabled",
      "type"
    ]));
  }
}), Qw = Zw, Jw = /* @__PURE__ */ b({
  __name: "PaginationNext",
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
    be();
    const n = Kn(), o = O(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ve), D(t, {
      "aria-label": "Next Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value + 1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("Next page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), e_ = Jw, t_ = /* @__PURE__ */ b({
  __name: "PaginationPrev",
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
    be();
    const n = Kn(), o = O(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ve), D(t, {
      "aria-label": "Previous Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value - 1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = Ce("Prev page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), n_ = t_;
const S1 = /* @__PURE__ */ b({
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
    }), r = $t(a, o);
    return (l, i) => (h(), x(s(Pb), D(s(r), {
      class: s(V)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        F(s(Db), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            _(l.$slots, "default", {}, () => [
              F(s(My), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E1 = /* @__PURE__ */ b({
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
    const a = $t(e, t);
    return (r, l) => (h(), x(s(w0), Y(J(s(a))), {
      default: y(({ open: i }) => [
        _(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), P1 = /* @__PURE__ */ b({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(x0), D(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k1 = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(B0), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D1 = /* @__PURE__ */ b({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(e, { emit: t }) {
    const a = $t(e, t);
    return (r, l) => (h(), x(s(cw), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), A1 = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class"), o = fn(n);
    return (a, r) => (h(), x(s(Kb), D(s(o), {
      class: s(V)("w-[200px]", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), T1 = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(bw), D(s(n), {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I1 = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(xw), D(s(n), {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), x(s(Pw), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Ce(Ae(o.heading), 1)
          ]),
          _: 1
        })) : ye("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M1 = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = He(n, "class"), r = $t(a, o);
    return (l, i) => (h(), x(s(Bw), D(s(r), {
      class: s(V)(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F1 = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = He(n, "class"), r = $t(a, o);
    return (l, i) => (h(), x(s(Ow), D(s(r), {
      class: s(V)(
        "relative flex cursor-default gap-2 select-none justify-between items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        n.class
      )
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R1 = /* @__PURE__ */ b({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = He(n, "class"), r = $t(a, o);
    return (l, i) => (h(), x(s(Dw), null, {
      default: y(() => [
        F(s(hw), D(s(r), {
          class: s(V)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            F(s(Rw), null, {
              default: y(() => [
                _(l.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), L1 = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(Tw), D(s(n), {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o_ = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Zp), D(s(r), {
      class: s(V)(
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
}), a_ = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Sr), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), V1 = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(sn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N1 = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Er), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q1 = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), z1 = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Tr), D(s(o), {
      class: s(V)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), j1 = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Ir), D(s(o), {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r_ = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Pr), null, {
      default: y(() => [
        F(s(sa), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(ra), D(s(r), {
          class: s(V)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            F(s(sn), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                F(s(ca), { class: "size-4" }),
                i[1] || (i[1] = fe("span", { class: "sr-only" }, "Close", -1))
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
}), K1 = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Pr), null, {
      default: y(() => [
        F(s(sa), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            F(s(ra), D({
              class: s(V)(
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
                _(l.$slots, "default"),
                F(s(sn), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    F(s(ca), { class: "h-4 w-4" }),
                    i[1] || (i[1] = fe("span", { class: "sr-only" }, "Close", -1))
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
}), H1 = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), W1 = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(a_), Y(J(s(a))), {
      default: y(() => [
        F(s(r_), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            F(o_, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), U1 = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(rf), D(n.value, {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G1 = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(ef), D(n.value, {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), x(s(tf), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Ce(Ae(o.heading), 1)
          ]),
          _: 1
        })) : ye("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s_ = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Y1 = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), z("div", s_, [
      F(s(wh), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      F(s(Qp), D({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(V)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), X1 = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(df), D(s(r), {
      class: s(V)(
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
}), l_ = { role: "presentation" }, Z1 = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(af), D(s(r), {
      class: s(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        fe("div", l_, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Q1 = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(cf), D(n.value, {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), J1 = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
      class: ue(s(V)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
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
const i_ = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const u_ = (e) => typeof e < "u";
function d_(e) {
  return JSON.parse(JSON.stringify(e));
}
function rl(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, v = Ue(), f = n || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const w = (B) => i ? typeof i == "function" ? i(B) : d_(B) : B, C = () => u_(e[t]) ? w(e[t]) : p, $ = (B) => {
    m ? m(B) && f(g, B) : f(g, B);
  };
  if (u) {
    const B = C(), k = E(B);
    let S = !1;
    return te(
      () => e[t],
      (T) => {
        S || (S = !0, k.value = w(T), ae(() => S = !1));
      }
    ), te(
      k,
      (T) => {
        !S && (T !== e[t] || c) && $(T);
      },
      { deep: c }
    ), k;
  } else
    return O({
      get() {
        return C();
      },
      set(B) {
        $(B);
      }
    });
}
const [as, c_] = Ye("DrawerRoot"), Bu = /* @__PURE__ */ new WeakMap();
function je(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([a, r]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, r);
      return;
    }
    o[a] = e.style[a], e.style[a] = r;
  }), !n && Bu.set(e, o);
}
function p_(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = Bu.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function Io(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 5 : 4]) : null);
}
function f_(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Re(e) {
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
function La(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function m_(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Te = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, $u = 0.4, v_ = 0.25, g_ = 100, Ou = 8, Mo = 16, Su = 26, sl = "vaul-dragging";
function h_({
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
  se(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), Tn(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = O(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = O(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), p = O(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.findIndex((B) => B === e.value)) ?? null;
    }
  ), m = O(
    () => {
      var $;
      return (($ = t.value) == null ? void 0 : $.map((B) => {
        const k = typeof B == "string";
        let S = 0;
        if (k && (S = Number.parseInt(B, 10)), Re(l.value)) {
          const P = k ? S : i.value ? B * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - P : -i.value.innerHeight + P : P;
        }
        const T = k ? S : i.value ? B * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - T : -i.value.innerWidth + T : T;
      })) ?? [];
    }
  ), v = O(
    () => {
      var $;
      return p.value !== null ? ($ = m.value) == null ? void 0 : $[p.value] : null;
    }
  ), f = ($) => {
    var B, k, S, T;
    const P = ((B = m.value) == null ? void 0 : B.findIndex((M) => M === $)) ?? null;
    ae(() => {
      var M;
      r(P, m.value), je((M = n.value) == null ? void 0 : M.$el, {
        transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
        transform: Re(l.value) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)`
      });
    }), m.value && P !== m.value.length - 1 && P !== (a == null ? void 0 : a.value) ? je((k = o.value) == null ? void 0 : k.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "0"
    }) : je((S = o.value) == null ? void 0 : S.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), e.value = P !== null ? ((T = t.value) == null ? void 0 : T[P]) ?? null : null;
  };
  te(
    [e, m, t],
    () => {
      var $;
      if (e.value) {
        const B = (($ = t.value) == null ? void 0 : $.findIndex((k) => k === e.value)) ?? -1;
        m.value && B !== -1 && typeof m.value[B] == "number" && f(m.value[B]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: $,
    closeDrawer: B,
    velocity: k,
    dismissible: S
  }) {
    var T, P, M;
    if (a.value === void 0)
      return;
    const R = l.value === "bottom" || l.value === "right" ? (v.value ?? 0) - $ : (v.value ?? 0) + $, A = p.value === a.value - 1, L = p.value === 0, I = $ > 0;
    if (A && je((T = o.value) == null ? void 0 : T.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), k > 2 && !I) {
      S ? B() : f(m.value[0]);
      return;
    }
    if (k > 2 && I && m && t.value) {
      f(m.value[t.value.length - 1]);
      return;
    }
    const U = (P = m.value) == null ? void 0 : P.reduce((X, H) => typeof X != "number" || typeof H != "number" ? X : Math.abs(H - R) < Math.abs(X - R) ? H : X), K = Re(l.value) ? window.innerHeight : window.innerWidth;
    if (k > $u && Math.abs($) < K * 0.4) {
      const X = I ? 1 : -1;
      if (X > 0 && d) {
        f(m.value[(((M = t.value) == null ? void 0 : M.length) ?? 0) - 1]);
        return;
      }
      if (L && X < 0 && S && B(), p.value === null)
        return;
      f(m.value[p.value + X]);
      return;
    }
    f(U);
  }
  function w({ draggedDistance: $ }) {
    var B;
    if (v.value === null)
      return;
    const k = l.value === "bottom" || l.value === "right" ? v.value - $ : v.value + $;
    (l.value === "bottom" || l.value === "right") && k < m.value[m.value.length - 1] || (l.value === "top" || l.value === "left") && k > m.value[m.value.length - 1] || je((B = n.value) == null ? void 0 : B.$el, {
      transform: Re(l.value) ? `translate3d(0, ${k}px, 0)` : `translate3d(${k}px, 0, 0)`
    });
  }
  function C($, B) {
    if (!t.value || typeof p.value != "number" || !m.value || a.value === void 0)
      return null;
    const k = p.value === a.value - 1;
    if (p.value >= a.value && B)
      return 0;
    if (k && !B)
      return 1;
    if (!c.value && !k)
      return null;
    const S = k ? p.value + 1 : p.value - 1, T = k ? m.value[S] - m.value[S - 1] : m.value[S + 1] - m.value[S], P = $ / Math.abs(T);
    return k ? 1 - P : P;
  }
  return {
    isLastSnapPoint: d,
    shouldFade: c,
    getPercentageDragged: C,
    activeSnapPointIndex: p,
    onRelease: g,
    onDrag: w,
    snapPointsOffset: m
  };
}
function ll() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Gn = null;
function y_(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (ll() && Gn === null && t.value && !l.value) {
      Gn = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: p, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const v = m - window.innerHeight;
          v && u.value >= m && (document.body.style.top = `-${u.value + v}px`);
        });
      }, 300);
    }
  }
  function c() {
    if (ll() && Gn !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), m = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Gn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(m, p);
      }), Gn = null;
    }
  }
  return se(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ke(() => {
      window.removeEventListener("scroll", p);
    });
  }), te([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function b_(e, t) {
  return e && e.value ? e : t;
}
function w_(e) {
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
    closeThreshold: m,
    activeSnapPoint: v,
    fadeFromIndex: f,
    direction: g,
    noBodyStyles: w,
    handleOnly: C,
    preventScrollRestoration: $
  } = e, B = E(r.value ?? !1), k = E(!1), S = E(!1), T = E(!1), P = E(null), M = E(null), R = E(null), A = E(null), L = E(null), I = E(!1), U = E(null), K = E(0), X = E(!1);
  E(0);
  const H = E(null);
  E(0);
  const ee = O(() => {
    var ne;
    return ((ne = H.value) == null ? void 0 : ne.$el.getBoundingClientRect().height) || 0;
  }), Q = b_(
    e.snapPoints,
    E(void 0)
  ), q = O(() => {
    var ne;
    return Q && (((ne = Q.value) == null ? void 0 : ne.length) ?? 0) > 0;
  }), le = E(null), {
    activeSnapPointIndex: re,
    onRelease: ke,
    snapPointsOffset: Me,
    onDrag: Ve,
    shouldFade: Xe,
    getPercentageDragged: ot
  } = h_({
    snapPoints: Q,
    activeSnapPoint: v,
    drawerRef: H,
    fadeFromIndex: f,
    overlayRef: P,
    onSnapPointChange: j,
    direction: g
  });
  function j(ne, Be) {
    Q.value && ne === Be.length - 1 && (M.value = /* @__PURE__ */ new Date());
  }
  y_({
    isOpen: B,
    modal: u,
    nested: i,
    hasBeenOpened: k,
    noBodyStyles: w,
    preventScrollRestoration: $
  });
  function G() {
    return (window.innerWidth - Su) / window.innerWidth;
  }
  function oe(ne, Be) {
    var Oe;
    if (!ne)
      return !1;
    let xe = ne;
    const Fe = (Oe = window.getSelection()) == null ? void 0 : Oe.toString(), Ne = H.value ? Io(H.value.$el, g.value) : null, Ze = /* @__PURE__ */ new Date();
    if (xe.hasAttribute("data-vaul-no-drag") || xe.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (M.value && Ze.getTime() - M.value.getTime() < 500)
      return !1;
    if (Ne !== null && (g.value === "bottom" ? Ne > 0 : Ne < 0))
      return !0;
    if (Fe && Fe.length > 0)
      return !1;
    if (L.value && Ze.getTime() - L.value.getTime() < p.value && Ne === 0 || Be)
      return L.value = Ze, !1;
    for (; xe; ) {
      if (xe.scrollHeight > xe.clientHeight) {
        if (xe.scrollTop !== 0)
          return L.value = /* @__PURE__ */ new Date(), !1;
        if (xe.getAttribute("role") === "dialog")
          return !0;
      }
      xe = xe.parentNode;
    }
    return !0;
  }
  function de(ne) {
    !l.value && !Q.value || H.value && !H.value.$el.contains(ne.target) || (S.value = !0, R.value = /* @__PURE__ */ new Date(), ne.target.setPointerCapture(ne.pointerId), K.value = Re(g.value) ? ne.clientY : ne.clientX);
  }
  function me(ne) {
    var Be, Oe, xe, Fe, Ne, Ze;
    if (H.value && S.value) {
      const St = g.value === "bottom" || g.value === "right" ? 1 : -1, mn = (K.value - (Re(g.value) ? ne.clientY : ne.clientX)) * St, Qt = mn > 0, wo = Q.value && !l.value && !Qt;
      if (wo && re.value === 0)
        return;
      const Jt = Math.abs(mn), Et = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ut = Jt / ee.value;
      const vn = ot(Jt, Qt);
      if (vn !== null && (ut = vn), wo && ut >= 1 || !I.value && !oe(ne.target, Qt))
        return;
      if ((Be = H == null ? void 0 : H.value) == null || Be.$el.classList.add(sl), I.value = !0, je((Oe = H.value) == null ? void 0 : Oe.$el, {
        transition: "none"
      }), je((xe = P.value) == null ? void 0 : xe.$el, {
        transition: "none"
      }), Q.value && Ve({ draggedDistance: mn }), Qt && !Q.value) {
        const Pt = f_(mn), hn = Math.min(Pt * -1, 0) * St;
        je((Fe = H.value) == null ? void 0 : Fe.$el, {
          transform: Re(g.value) ? `translate3d(0, ${hn}px, 0)` : `translate3d(${hn}px, 0, 0)`
        });
        return;
      }
      const gn = 1 - ut;
      if ((Xe.value || f.value && re.value === f.value - 1) && (t(ut), je(
        (Ne = P.value) == null ? void 0 : Ne.$el,
        {
          opacity: `${gn}`,
          transition: "none"
        },
        !0
      )), Et && P.value && d.value) {
        const Pt = Math.min(G() + ut * (1 - G()), 1), hn = 8 - ut * 8, _o = Math.max(0, 14 - ut * 14);
        je(
          Et,
          {
            borderRadius: `${hn}px`,
            transform: Re(g.value) ? `scale(${Pt}) translate3d(0, ${_o}px, 0)` : `scale(${Pt}) translate3d(${_o}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!Q.value) {
        const Pt = Jt * St;
        je((Ze = H.value) == null ? void 0 : Ze.$el, {
          transform: Re(g.value) ? `translate3d(0, ${Pt}px, 0)` : `translate3d(${Pt}px, 0, 0)`
        });
      }
    }
  }
  function Z() {
    var ne;
    if (!H.value)
      return;
    const Be = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), Oe = Io(H.value.$el, g.value);
    je(H.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), je((ne = P.value) == null ? void 0 : ne.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), d.value && Oe && Oe > 0 && B.value && je(
      Be,
      {
        borderRadius: `${Ou}px`,
        overflow: "hidden",
        ...Re(g.value) ? {
          transform: `scale(${G()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${G()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Te.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
      },
      !0
    );
  }
  function ge(ne) {
    H.value && (o(), ne || (B.value = !1), window.setTimeout(() => {
      Q.value && (v.value = Q.value[0]);
    }, Te.DURATION * 1e3));
  }
  _e(() => {
    if (!B.value && d.value && i_) {
      const ne = setTimeout(() => {
        p_(document.body);
      }, 200);
      return () => clearTimeout(ne);
    }
  }), te(r, () => {
    B.value = r.value, r.value || ge();
  });
  function $e(ne) {
    if (!S.value || !H.value)
      return;
    H.value.$el.classList.remove(sl), I.value = !1, S.value = !1, A.value = /* @__PURE__ */ new Date();
    const Be = Io(H.value.$el, g.value);
    if (!oe(ne.target, !1) || !Be || Number.isNaN(Be) || R.value === null)
      return;
    const Oe = A.value.getTime() - R.value.getTime(), xe = K.value - (Re(g.value) ? ne.clientY : ne.clientX), Fe = Math.abs(xe) / Oe;
    if (Fe > 0.05 && (T.value = !0, window.setTimeout(() => {
      T.value = !1;
    }, 200)), Q.value) {
      const Ze = g.value === "bottom" || g.value === "right" ? 1 : -1;
      ke({
        draggedDistance: xe * Ze,
        closeDrawer: ge,
        velocity: Fe,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? xe > 0 : xe < 0) {
      Z(), n(!0);
      return;
    }
    if (Fe > $u) {
      ge(), n(!1);
      return;
    }
    const Ne = Math.min(
      H.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (Be >= Ne * m.value) {
      ge(), n(!1);
      return;
    }
    n(!0), Z();
  }
  te(B, (ne) => {
    ne && (M.value = /* @__PURE__ */ new Date()), a(ne);
  }, { immediate: !0 });
  function We(ne) {
    var Be, Oe;
    const xe = ne ? (window.innerWidth - Mo) / window.innerWidth : 1, Fe = ne ? -16 : 0;
    U.value && window.clearTimeout(U.value), je((Be = H.value) == null ? void 0 : Be.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: `scale(${xe}) translate3d(0, ${Fe}px, 0)`
    }), !ne && (Oe = H.value) != null && Oe.$el && (U.value = window.setTimeout(() => {
      var Ne, Ze;
      const St = Io((Ne = H.value) == null ? void 0 : Ne.$el, g.value);
      je((Ze = H.value) == null ? void 0 : Ze.$el, {
        transition: "none",
        transform: Re(g.value) ? `translate3d(0, ${St}px, 0)` : `translate3d(${St}px, 0, 0)`
      });
    }, 500));
  }
  function at(ne) {
    var Be;
    if (ne < 0)
      return;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, xe = (Oe - Mo) / Oe, Fe = xe + ne * (1 - xe), Ne = -16 + ne * Mo;
    je((Be = H.value) == null ? void 0 : Be.$el, {
      transform: Re(g.value) ? `scale(${Fe}) translate3d(0, ${Ne}px, 0)` : `scale(${Fe}) translate3d(${Ne}px, 0, 0)`,
      transition: "none"
    });
  }
  function it(ne) {
    var Be;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, xe = ne ? (Oe - Mo) / Oe : 1, Fe = ne ? -16 : 0;
    ne && je((Be = H.value) == null ? void 0 : Be.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: Re(g.value) ? `scale(${xe}) translate3d(0, ${Fe}px, 0)` : `scale(${xe}) translate3d(${Fe}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: B,
    modal: u,
    keyboardIsOpen: X,
    hasBeenOpened: k,
    drawerRef: H,
    drawerHeightRef: ee,
    overlayRef: P,
    handleRef: le,
    isDragging: S,
    dragStartTime: R,
    isAllowedToDrag: I,
    snapPoints: Q,
    activeSnapPoint: v,
    hasSnapPoints: q,
    pointerStart: K,
    dismissible: l,
    snapPointsOffset: Me,
    direction: g,
    shouldFade: Xe,
    fadeFromIndex: f,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: de,
    onDrag: me,
    onRelease: $e,
    closeDrawer: ge,
    onNestedDrag: at,
    onNestedRelease: it,
    onNestedOpenChange: We,
    emitClose: o,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: a,
    nested: i,
    handleOnly: C,
    noBodyStyles: w
  };
}
const __ = /* @__PURE__ */ b({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: v_ },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: g_ },
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
    sr();
    const r = O(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = rl(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = rl(o, "activeSnapPoint", a, {
      passive: o.activeSnapPoint === void 0
    }), u = {
      emitDrag: (f) => a("drag", f),
      emitRelease: (f) => a("release", f),
      emitClose: () => a("close"),
      emitOpenChange: (f) => {
        a("update:open", f), setTimeout(() => {
          a("animationEnd", f);
        }, Te.DURATION * 1e3);
      }
    }, { closeDrawer: d, hasBeenOpened: c, modal: p, isOpen: m } = c_(
      w_({
        ...u,
        ...we(o),
        activeSnapPoint: i,
        fadeFromIndex: r,
        open: l
      })
    );
    function v(f) {
      if (l.value !== void 0) {
        u.emitOpenChange(f);
        return;
      }
      m.value = f, f ? c.value = !0 : d();
    }
    return t({
      open: m
    }), (f, g) => (h(), x(s(S0), {
      open: s(m),
      modal: s(p),
      "onUpdate:open": v
    }, {
      default: y(() => [
        _(f.$slots, "default", { open: s(m) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), x_ = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = as();
    return (r, l) => (h(), x(s(sb), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), C_ = () => () => {
};
function B_() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = as(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Su) / window.innerWidth;
  }
  _e((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      m_(
        o.value && !a.value ? La(document.body, { background: "black" }) : C_,
        La(d, {
          transformOrigin: Re(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Te.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
        })
      );
      const c = La(d, {
        borderRadius: `${Ou}px`,
        overflow: "hidden",
        ...Re(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        c(), r.value = window.setTimeout(() => {
          l.value ? document.body.style.background = l.value : document.body.style.removeProperty("background");
        }, Te.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const $_ = /* @__PURE__ */ b({
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
      keyboardIsOpen: m,
      closeDrawer: v,
      direction: f,
      handleOnly: g
    } = as();
    B_();
    const w = E(!1), C = O(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function $(S) {
      if (!d.value || S.defaultPrevented) {
        S.preventDefault();
        return;
      }
      m.value && (m.value = !1), p.value ? c(!1) : S.preventDefault();
    }
    function B(S) {
      g.value || l(S);
    }
    function k(S) {
      g.value || i(S);
    }
    return _e(() => {
      a.value && window.requestAnimationFrame(() => {
        w.value = !0;
      });
    }), (S, T) => (h(), x(s(eb), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(f),
      "data-vaul-delayed-snap-points": w.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: _t({ "--snap-point-height": C.value }),
      onPointerdown: B,
      onPointermove: k,
      onPointerup: s(u),
      onPointerDownOutside: $,
      onOpenAutoFocus: T[0] || (T[0] = Pe(() => {
      }, ["prevent"])),
      onEscapeKeyDown: T[1] || (T[1] = (P) => {
        s(p) || P.preventDefault();
      })
    }, {
      default: y(() => [
        _(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), ex = /* @__PURE__ */ b({
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
    const a = $t(e, t);
    return (r, l) => (h(), x(s(__), D({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tx = /* @__PURE__ */ b({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(P0), D({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O_ = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(x_), D({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(V)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), nx = /* @__PURE__ */ b({
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
    const n = e, a = $t(n, t);
    return (r, l) => (h(), x(s(ub), null, {
      default: y(() => [
        F(O_),
        F(s($_), D({ "data-slot": "drawer-content" }, s(a), {
          class: s(V)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: y(() => [
            l[0] || (l[0] = fe("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ox = /* @__PURE__ */ b({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(nb), D({ "data-slot": "drawer-description" }, s(n), {
      class: s(V)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ax = /* @__PURE__ */ b({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-footer",
      class: ue(s(V)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), rx = /* @__PURE__ */ b({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      "data-slot": "drawer-header",
      class: ue(s(V)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), sx = /* @__PURE__ */ b({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(cb), D({ "data-slot": "drawer-title" }, s(n), {
      class: s(V)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lx = /* @__PURE__ */ b({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(fb), D({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ix = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Kf), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ux = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = ze(e);
    return (o, a) => (h(), x(s(Hf), D({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dx = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Wf), null, {
      default: y(() => [
        F(s(Uf), D(s(r), {
          class: s(V)(
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
}), cx = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Yf), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), px = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Jf), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fx = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Gf), D(s(o), {
      class: s(V)(
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
}), S_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, mx = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Zf), D(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        fe("span", S_, [
          F(s(yi), null, {
            default: y(() => [
              F(s(Qi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, vx = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(em), D(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        fe("span", E_, [
          F(s(yi), null, {
            default: y(() => [
              F(s(bh), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gx = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("span", {
      class: ue(s(V)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), hx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Xf), D(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), yx = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Qf), D(s(o), {
      class: s(V)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bx = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(tm), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wx = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(om), D(s(o), {
      class: s(V)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        F(s(hh), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _x = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(nm), D(s(r), {
      class: s(V)(
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
}), xx = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = eu(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => An((h(), z("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => rt(a) ? a.value = i : null),
      class: ue(
        s(V)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [vl, s(a)]
    ]);
  }
}), Cx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(am), D(n.value, {
      class: s(V)(
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
}), Bx = /* @__PURE__ */ b({
  __name: "Pagination",
  props: {
    page: {},
    defaultPage: {},
    itemsPerPage: {},
    total: {},
    siblingCount: {},
    disabled: { type: Boolean },
    showEdges: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:page"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = He(n, "class"), r = $t(a, o);
    return (l, i) => (h(), x(s(zw), D({ "data-slot": "pagination" }, s(r), {
      class: s(V)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: y((u) => [
        _(l.$slots, "default", Y(J(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $x = /* @__PURE__ */ b({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(Xw), D({ "data-slot": "pagination-content" }, s(n), {
      class: s(V)("flex flex-row items-center gap-1", t.class)
    }), {
      default: y((r) => [
        _(o.$slots, "default", Y(J(r)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ox = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class");
    return (o, a) => (h(), x(s(Vw), D({ "data-slot": "pagination-ellipsis" }, s(n), {
      class: s(V)("flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          F(s(Fy), { class: "size-4" }),
          a[0] || (a[0] = fe("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sx = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(Kw), D({
      "data-slot": "pagination-first",
      class: s(V)(s(Zt)({ variant: "ghost", size: a.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          F(s(au)),
          r[0] || (r[0] = fe("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ex = /* @__PURE__ */ b({
  __name: "PaginationItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    size: { default: "icon" },
    class: {},
    isActive: { type: Boolean }
  },
  setup(e) {
    const t = e, n = He(t, "class", "size", "isActive");
    return (o, a) => (h(), x(s(Qw), D({ "data-slot": "pagination-item" }, s(n), {
      class: s(V)(
        s(Zt)({
          variant: o.isActive ? "outline" : "ghost",
          size: o.size
        }),
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Px = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(Ww), D({
      "data-slot": "pagination-last",
      class: s(V)(s(Zt)({ variant: "ghost", size: a.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          r[0] || (r[0] = fe("span", { class: "hidden sm:block" }, "Last", -1)),
          F(s(ru))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kx = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(e_), D({
      "data-slot": "pagination-next",
      class: s(V)(s(Zt)({ variant: "ghost", size: a.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          r[0] || (r[0] = fe("span", { class: "hidden sm:block" }, "Next", -1)),
          F(s(ru))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dx = /* @__PURE__ */ b({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = He(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(n_), D({
      "data-slot": "pagination-previous",
      class: s(V)(s(Zt)({ variant: "ghost", size: a.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          F(s(au)),
          r[0] || (r[0] = fe("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ax = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(sm), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tx = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(lm), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ix = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(im), null, {
      default: y(() => [
        F(s(cm), D({ ...s(r), ...l.$attrs }, {
          class: s(V)(
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
}), Mx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(gm), D(n.value, {
      class: s(V)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        F(s(hm), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: _t(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Fx = /* @__PURE__ */ b({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Cm), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rx = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Um), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lx = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Om), D(s(o), {
      class: s(V)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        F(s(Gm), { "as-child": "" }, {
          default: y(() => [
            F(s(gh), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vx = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Sm), null, {
      default: y(() => [
        F(s(Mm), D({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            F(s(k_)),
            F(s(Km), {
              class: ue(
                s(V)(
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
            F(s(D_))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Nx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(zm), D({
      class: s(V)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), P_ = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, qx = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Lm), D(s(o), {
      class: s(V)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        fe("span", P_, [
          F(s(Vm), null, {
            default: y(() => [
              F(s(Qi), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        F(s(Ci), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zx = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ci), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jx = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(jm), {
      class: ue(s(V)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Kx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Fm), D(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), k_ = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Hm), D(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          F(s(yh))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), D_ = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(Wm), D(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          F(s(Ji))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hx = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ie(e, t);
    return (r, l) => (h(), x(s(Sr), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wx = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Er), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ux = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(sn), Y(J(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gx = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(Pr), null, {
      default: y(() => [
        F(s(sa), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        F(s(ra), D({
          class: s(V)(s(A_)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            F(s(sn), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                F(s(ca), { class: "h-4 w-4" })
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
}), Yx = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Xx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Tr), D({
      class: s(V)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zx = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(Ir), D({
      class: s(V)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qx = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), A_ = ho(
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
), Jx = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", {
      class: ue(s(V)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), eC = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(lv), D({
      class: s(V)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        F(s(dv), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            F(s(cv), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), z(De, null, Ht(l.modelValue, (u, d) => (h(), x(s(uv), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), tC = /* @__PURE__ */ b({
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
    }), r = ie(a, o);
    return (l, i) => (h(), x(s(gv), D(s(r), {
      class: s(V)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        F(s(hv), {
          class: ue(
            s(V)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), T_ = { class: "relative w-full overflow-auto" }, nC = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("div", T_, [
      fe("table", {
        class: ue(s(V)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), oC = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tbody", {
      class: ue(s(V)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), I_ = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("td", {
      class: ue(
        s(V)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), aC = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("th", {
      class: ue(
        s(V)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), rC = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("thead", {
      class: ue(s(V)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tfoot", {
      class: ue(s(V)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), M_ = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("tr", {
      class: ue(
        s(V)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), z("caption", {
      class: ue(s(V)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), F_ = { class: "flex items-center justify-center py-10" }, iC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(M_, null, {
      default: y(() => [
        F(I_, D({
          class: s(V)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            fe("div", F_, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), uC = /* @__PURE__ */ b({
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
    const a = ie(e, t);
    return (r, l) => (h(), x(s(bv), Y(J(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(_v), D({
      class: s(V)(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        t.class
      )
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(wv), D(n.value, {
      class: s(V)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), R_ = { class: "truncate" }, pC = /* @__PURE__ */ b({
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
    }), o = ze(n);
    return (a, r) => (h(), x(s(xv), D(s(o), {
      class: s(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        fe("span", R_, [
          _(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fC = /* @__PURE__ */ b({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {},
    charLimit: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = eu(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), r = O(() => a.value ? a.value.toString().length : 0);
    return (l, i) => (h(), z(De, null, [
      An(fe("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => rt(a) ? a.value = u : null),
        class: ue(
          s(V)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 2), [
        [vl, s(a)]
      ]),
      l.charLimit ? (h(), z("p", {
        key: 0,
        class: ue(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": r.value > l.charLimit }])
      }, Ae(r.value) + " / " + Ae(l.charLimit), 3)) : ye("", !0)
    ], 64));
  }
});
export {
  a1 as Accord,
  Eh as Accordion,
  Ph as AccordionContent,
  kh as AccordionItem,
  Dh as AccordionTrigger,
  $g as AlertDialog,
  Dg as AlertDialogAction,
  Ag as AlertDialogCancel,
  Og as AlertDialogContent,
  Pg as AlertDialogDescription,
  kg as AlertDialogFooter,
  Sg as AlertDialogHeader,
  Eg as AlertDialogTitle,
  W_ as AlertDialogTrigger,
  s1 as Avatar,
  i1 as AvatarFallback,
  l1 as AvatarImage,
  u1 as Badge,
  Wi as Button,
  d1 as Card,
  c1 as CardContent,
  p1 as CardDescription,
  f1 as CardFooter,
  m1 as CardHeader,
  v1 as CardTitle,
  g1 as Carousel,
  h1 as CarouselContent,
  y1 as CarouselItem,
  w1 as CarouselNext,
  b1 as CarouselPrevious,
  S1 as Checkbox,
  E1 as Collapsible,
  P1 as CollapsibleContent,
  k1 as CollapsibleTrigger,
  D1 as Combobox,
  A1 as ComboboxAnchor,
  B1 as ComboboxCancel,
  T1 as ComboboxEmpty,
  I1 as ComboboxGroup,
  M1 as ComboboxInput,
  F1 as ComboboxItem,
  $1 as ComboboxItemIndicator,
  R1 as ComboboxList,
  L1 as ComboboxSeparator,
  O1 as ComboboxTrigger,
  o_ as Command,
  W1 as CommandDialog,
  U1 as CommandEmpty,
  G1 as CommandGroup,
  Y1 as CommandInput,
  X1 as CommandItem,
  Z1 as CommandList,
  Q1 as CommandSeparator,
  J1 as CommandShortcut,
  U_ as ConfirmDialog,
  a_ as Dialog,
  V1 as DialogClose,
  r_ as DialogContent,
  j1 as DialogDescription,
  H1 as DialogFooter,
  q1 as DialogHeader,
  K1 as DialogScrollContent,
  z1 as DialogTitle,
  N1 as DialogTrigger,
  ex as Drawer,
  tx as DrawerClose,
  nx as DrawerContent,
  ox as DrawerDescription,
  ax as DrawerFooter,
  rx as DrawerHeader,
  O_ as DrawerOverlay,
  sx as DrawerTitle,
  lx as DrawerTrigger,
  ix as DropdownMenu,
  mx as DropdownMenuCheckboxItem,
  dx as DropdownMenuContent,
  cx as DropdownMenuGroup,
  fx as DropdownMenuItem,
  yx as DropdownMenuLabel,
  Wf as DropdownMenuPortal,
  px as DropdownMenuRadioGroup,
  vx as DropdownMenuRadioItem,
  hx as DropdownMenuSeparator,
  gx as DropdownMenuShortcut,
  bx as DropdownMenuSub,
  _x as DropdownMenuSubContent,
  wx as DropdownMenuSubTrigger,
  ux as DropdownMenuTrigger,
  n1 as Flasher,
  Y_ as Header,
  o1 as Heading,
  xx as Input,
  Cx as Label,
  X_ as Main,
  Bx as Pagination,
  $x as PaginationContent,
  Ox as PaginationEllipsis,
  Sx as PaginationFirst,
  Ex as PaginationItem,
  Px as PaginationLast,
  kx as PaginationNext,
  Dx as PaginationPrevious,
  Ax as Popover,
  K_ as PopoverAnchor,
  Ix as PopoverContent,
  Tx as PopoverTrigger,
  Mx as Progress,
  Fx as Select,
  Vx as SelectContent,
  Nx as SelectGroup,
  qx as SelectItem,
  zx as SelectItemText,
  jx as SelectLabel,
  D_ as SelectScrollDownButton,
  k_ as SelectScrollUpButton,
  Kx as SelectSeparator,
  Lx as SelectTrigger,
  Rx as SelectValue,
  Hx as Sheet,
  Ux as SheetClose,
  Gx as SheetContent,
  Zx as SheetDescription,
  Qx as SheetFooter,
  Yx as SheetHeader,
  Xx as SheetTitle,
  Wx as SheetTrigger,
  Jx as Skeleton,
  eC as Slider,
  tC as Switch,
  nC as Table,
  oC as TableBody,
  lC as TableCaption,
  I_ as TableCell,
  iC as TableEmpty,
  sC as TableFooter,
  aC as TableHead,
  rC as TableHeader,
  M_ as TableRow,
  uC as Tabs,
  dC as TabsContent,
  cC as TabsList,
  pC as TabsTrigger,
  fC as Textarea,
  r1 as Tip,
  ph as Toast,
  t1 as ToastAction,
  _h as ToastClose,
  Ns as ToastDescription,
  Ch as ToastProvider,
  xh as ToastTitle,
  fh as ToastViewport,
  ch as Toaster,
  Ah as Tooltip,
  Th as TooltipContent,
  Ih as TooltipProvider,
  Mh as TooltipTrigger,
  G_ as TwoColumnLayout,
  Z_ as TwoColumnLayoutSidebar,
  Q_ as TwoColumnLayoutSidebarDesktop,
  J_ as TwoColumnLayoutSidebarMobile,
  e1 as TwoColumnLayoutSidebarTrigger,
  Fh as avatarVariant,
  Rh as badgeVariants,
  Zt as buttonVariants,
  V as cn,
  N_ as preset,
  A_ as sheetVariants,
  sh as toast,
  Bh as toastVariants,
  fa as useCarousel,
  Mg as useConfirmDialog,
  $h as useFlasher,
  Zi as useToast,
  H_ as valueUpdater
};
