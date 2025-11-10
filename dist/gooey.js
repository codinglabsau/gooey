var ms = (e) => {
  throw TypeError(e);
};
var Vu = (e, t, n) => t.has(e) || ms("Cannot " + n);
var Un = (e, t, n) => (Vu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vs = (e, t, n) => t.has(e) ? ms("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as xn from "vue";
import { computed as B, ref as E, shallowRef as Bn, watch as te, getCurrentScope as sr, onScopeDispose as lr, shallowReadonly as yn, unref as s, defineComponent as b, createBlock as x, openBlock as h, normalizeProps as Z, guardReactiveProps as ee, withCtx as y, renderSlot as _, mergeProps as D, withModifiers as De, nextTick as re, onMounted as ie, toRefs as we, createVNode as R, watchEffect as xe, normalizeStyle as it, createCommentVNode as de, getCurrentInstance as Ue, toRef as ir, camelize as Uo, withKeys as Je, toHandlers as zu, resolveDynamicComponent as Ze, withDirectives as Dn, vShow as ur, h as Ge, createTextVNode as _e, watchSyncEffect as ml, toDisplayString as Se, isRef as rt, onBeforeMount as vl, onUnmounted as Ne, createElementBlock as q, Fragment as ke, renderList as st, useSlots as Go, Teleport as io, onBeforeUnmount as Tn, toHandlerKey as gl, inject as In, provide as Mn, onBeforeUpdate as qu, onUpdated as Nu, reactive as Sn, readonly as Yo, Comment as dr, cloneVNode as hl, markRaw as yl, createElementVNode as ne, vModelSelect as ju, toRaw as Hu, mergeDefaults as cr, watchPostEffect as pr, effectScope as Xo, customRef as bl, normalizeClass as se, isVNode as Ku, toValue as et, withMemo as Wu, createSlots as gs, vModelText as wl } from "vue";
function _l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Uu = {
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
}, _a = Uu, fr = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g
};
function Gu(e) {
  return e.trim().replace(fr.whitespace, " ");
}
function Yu(e) {
  return encodeURIComponent(e).replace(fr.urlHexPairs, Zu);
}
function Xu(e) {
  return Object.keys(_a).forEach(function(t) {
    _a[t].test(e) && (e = e.replace(_a[t], t));
  }), e;
}
function Zu(e) {
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
function qa(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Xu(Gu(e)).replace(fr.quotes, "'");
  return "data:image/svg+xml," + Yu(t);
}
qa.toSrcset = function(t) {
  return qa(t).replace(/ /g, "%20");
};
var Qu = qa, xl = {}, Cl = {};
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
})(Cl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const t = /* @__PURE__ */ n(Cl);
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  const o = t.default;
})(xl);
let xa = xl;
var kl = (xa.__esModule ? xa : { default: xa }).default, $l = {}, Bl = {};
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
})(Bl);
var Ju = {
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
  const t = Bl, n = /* @__PURE__ */ o(Ju);
  function o(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  const a = (0, t.cloneDeep)(n.default.theme);
})($l);
let Ca = $l;
var ed = (Ca.__esModule ? Ca : { default: Ca }).default, Sl = {}, Ol = {}, mr = { exports: {} }, fe = String, El = function() {
  return { isColorSupported: !1, reset: fe, bold: fe, dim: fe, italic: fe, underline: fe, inverse: fe, hidden: fe, strikethrough: fe, black: fe, red: fe, green: fe, yellow: fe, blue: fe, magenta: fe, cyan: fe, white: fe, gray: fe, bgBlack: fe, bgRed: fe, bgGreen: fe, bgYellow: fe, bgBlue: fe, bgMagenta: fe, bgCyan: fe, bgWhite: fe, blackBright: fe, redBright: fe, greenBright: fe, yellowBright: fe, blueBright: fe, magentaBright: fe, cyanBright: fe, whiteBright: fe, bgBlackBright: fe, bgRedBright: fe, bgGreenBright: fe, bgYellowBright: fe, bgBlueBright: fe, bgMagentaBright: fe, bgCyanBright: fe, bgWhiteBright: fe };
};
mr.exports = El();
mr.exports.createColors = El;
var td = mr.exports;
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
  const n = /* @__PURE__ */ o(td);
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
})(Ol);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const t = /* @__PURE__ */ n(Ol);
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
})(Sl);
let ka = Sl;
var nd = (ka.__esModule ? ka : { default: ka }).default;
const xo = Qu, od = kl, Pl = ed, zt = nd, [ad, { lineHeight: rd }] = Pl.fontSize.base, { spacing: At, borderWidth: hs, borderRadius: ys } = Pl;
function en(e, t) {
  return e.replace("<alpha-value>", `var(${t}, 1)`);
}
const sd = od.withOptions(function(e = { strategy: void 0 }) {
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
            o("colors.gray.500", zt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": hs.DEFAULT,
          "border-radius": ys.none,
          "padding-top": At[2],
          "padding-right": At[3],
          "padding-bottom": At[2],
          "padding-left": At[3],
          "font-size": ad,
          "line-height": rd,
          "--tw-shadow": "0 0 #0000",
          "&:focus": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": "0px",
            "--tw-ring-offset-color": "#fff",
            "--tw-ring-color": en(
              o("colors.blue.600", zt.blue[600]),
              "--tw-ring-opacity"
            ),
            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
            "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
            "border-color": en(
              o("colors.blue.600", zt.blue[600]),
              "--tw-border-opacity"
            )
          }
        }
      },
      {
        base: ["input::placeholder", "textarea::placeholder"],
        class: [".form-input::placeholder", ".form-textarea::placeholder"],
        styles: {
          color: en(o("colors.gray.500", zt.gray[500]), "--tw-text-opacity"),
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
              zt.gray[500]
            )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
          )}")`,
          "background-position": `right ${At[2]} center`,
          "background-repeat": "no-repeat",
          "background-size": "1.5em 1.5em",
          "padding-right": At[10],
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
          "padding-right": At[3],
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
          height: At[4],
          width: At[4],
          color: en(o("colors.blue.600", zt.blue[600]), "--tw-text-opacity"),
          "background-color": "#fff",
          "border-color": en(
            o("colors.gray.500", zt.gray[500]),
            "--tw-border-opacity"
          ),
          "border-width": hs.DEFAULT,
          "--tw-shadow": "0 0 #0000"
        }
      },
      {
        base: ["[type='checkbox']"],
        class: [".form-checkbox"],
        styles: {
          "border-radius": ys.none
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
            o("colors.blue.600", zt.blue[600]),
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
var ld = sd;
const id = /* @__PURE__ */ _l(ld), ud = kl;
function bs(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([t]) => t !== "DEFAULT")
  );
}
var dd = ud(
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
      { values: bs(n("animationDuration")) }
    ), t(
      { delay: (o) => ({ animationDelay: o }) },
      { values: n("animationDelay") }
    ), t(
      { ease: (o) => ({ animationTimingFunction: o }) },
      { values: bs(n("animationTimingFunction")) }
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
const cd = /* @__PURE__ */ _l(dd), g_ = {
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))"
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))"
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
    cd,
    id({
      strategy: "class"
    })
  ]
}, pd = ["top", "right", "bottom", "left"], Wt = Math.min, tt = Math.max, Vo = Math.round, Co = Math.floor, _t = (e) => ({
  x: e,
  y: e
}), fd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, md = {
  start: "end",
  end: "start"
};
function Na(e, t, n) {
  return tt(e, Wt(t, n));
}
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rt(e) {
  return e.split("-")[0];
}
function Fn(e) {
  return e.split("-")[1];
}
function vr(e) {
  return e === "x" ? "y" : "x";
}
function gr(e) {
  return e === "y" ? "height" : "width";
}
const vd = /* @__PURE__ */ new Set(["top", "bottom"]);
function wt(e) {
  return vd.has(Rt(e)) ? "y" : "x";
}
function hr(e) {
  return vr(wt(e));
}
function gd(e, t, n) {
  n === void 0 && (n = !1);
  const o = Fn(e), a = hr(e), r = gr(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = zo(l)), [l, zo(l)];
}
function hd(e) {
  const t = zo(e);
  return [ja(e), t, ja(t)];
}
function ja(e) {
  return e.replace(/start|end/g, (t) => md[t]);
}
const ws = ["left", "right"], _s = ["right", "left"], yd = ["top", "bottom"], bd = ["bottom", "top"];
function wd(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? _s : ws : t ? ws : _s;
    case "left":
    case "right":
      return t ? yd : bd;
    default:
      return [];
  }
}
function _d(e, t, n, o) {
  const a = Fn(e);
  let r = wd(Rt(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(ja)))), r;
}
function zo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => fd[t]);
}
function xd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Al(e) {
  return typeof e != "number" ? xd(e) : {
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
function xs(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = wt(t), l = hr(t), i = gr(l), u = Rt(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, m = o[i] / 2 - a[i] / 2;
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
  switch (Fn(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Cd = async (e, t, n) => {
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
  } = xs(d, o, u), m = o, v = {}, f = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: w,
      fn: C
    } = i[g], {
      x: k,
      y: $,
      data: A,
      reset: O
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
    c = k ?? c, p = $ ?? p, v = {
      ...v,
      [w]: {
        ...v[w],
        ...A
      }
    }, O && f <= 50 && (f++, typeof O == "object" && (O.placement && (m = O.placement), O.rects && (d = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : O.rects), {
      x: c,
      y: p
    } = xs(d, m, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: m,
    strategy: a,
    middlewareData: v
  };
};
async function to(e, t) {
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
  } = Ft(t, e), f = Al(v), w = i[m ? p === "floating" ? "reference" : "floating" : p], C = qo(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), k = p === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), A = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = qo(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: k,
    offsetParent: $,
    strategy: u
  }) : k);
  return {
    top: (C.top - O.top + f.top) / A.y,
    bottom: (O.bottom - C.bottom + f.bottom) / A.y,
    left: (C.left - O.left + f.left) / A.x,
    right: (O.right - C.right + f.right) / A.x
  };
}
const kd = (e) => ({
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
    } = Ft(e, t) || {};
    if (d == null)
      return {};
    const p = Al(c), m = {
      x: n,
      y: o
    }, v = hr(a), f = gr(v), g = await l.getDimensions(d), w = v === "y", C = w ? "top" : "left", k = w ? "bottom" : "right", $ = w ? "clientHeight" : "clientWidth", A = r.reference[f] + r.reference[v] - m[v] - r.floating[f], O = m[v] - r.reference[v], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let S = P ? P[$] : 0;
    (!S || !await (l.isElement == null ? void 0 : l.isElement(P))) && (S = i.floating[$] || r.floating[f]);
    const I = A / 2 - O / 2, F = S / 2 - g[f] / 2 - 1, T = Wt(p[C], F), L = Wt(p[k], F), M = T, W = S - g[f] - L, j = S / 2 - g[f] / 2 + I, G = Na(M, j, W), K = !u.arrow && Fn(a) != null && j !== G && r.reference[f] / 2 - (j < M ? T : L) - g[f] / 2 < 0, Q = K ? j < M ? j - M : j - W : 0;
    return {
      [v]: m[v] + Q,
      data: {
        [v]: G,
        centerOffset: j - G - Q,
        ...K && {
          alignmentOffset: Q
        }
      },
      reset: K
    };
  }
}), $d = function(e) {
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
      } = Ft(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const C = Rt(a), k = wt(i), $ = Rt(i) === i, A = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), O = m || ($ || !g ? [zo(i)] : hd(i)), P = f !== "none";
      !m && P && O.push(..._d(i, g, f, A));
      const S = [i, ...O], I = await to(t, w), F = [];
      let T = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && F.push(I[C]), p) {
        const j = gd(a, l, A);
        F.push(I[j[0]], I[j[1]]);
      }
      if (T = [...T, {
        placement: a,
        overflows: F
      }], !F.every((j) => j <= 0)) {
        var L, M;
        const j = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, G = S[j];
        if (G && (!(p === "alignment" ? k !== wt(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((Y) => wt(Y.placement) === k ? Y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: T
            },
            reset: {
              placement: G
            }
          };
        let K = (M = T.filter((Q) => Q.overflows[0] <= 0).sort((Q, Y) => Q.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!K)
          switch (v) {
            case "bestFit": {
              var W;
              const Q = (W = T.filter((Y) => {
                if (P) {
                  const N = wt(Y.placement);
                  return N === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((N) => N > 0).reduce((N, ue) => N + ue, 0)]).sort((Y, N) => Y[1] - N[1])[0]) == null ? void 0 : W[0];
              Q && (K = Q);
              break;
            }
            case "initialPlacement":
              K = i;
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
function Cs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ks(e) {
  return pd.some((t) => e[t] >= 0);
}
const Bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Ft(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await to(t, {
            ...a,
            elementContext: "reference"
          }), l = Cs(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: ks(l)
            }
          };
        }
        case "escaped": {
          const r = await to(t, {
            ...a,
            altBoundary: !0
          }), l = Cs(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: ks(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Dl = /* @__PURE__ */ new Set(["left", "top"]);
async function Sd(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Rt(n), i = Fn(n), u = wt(n) === "y", d = Dl.has(l) ? -1 : 1, c = r && u ? -1 : 1, p = Ft(t, e);
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
const Od = function(e) {
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
      } = t, u = await Sd(t, e);
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
}, Ed = function(e) {
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
              y: k
            } = w;
            return {
              x: C,
              y: k
            };
          }
        },
        ...u
      } = Ft(e, t), d = {
        x: n,
        y: o
      }, c = await to(t, u), p = wt(Rt(a)), m = vr(p);
      let v = d[m], f = d[p];
      if (r) {
        const w = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", k = v + c[w], $ = v - c[C];
        v = Na(k, v, $);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", k = f + c[w], $ = f - c[C];
        f = Na(k, f, $);
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
}, Pd = function(e) {
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
      } = Ft(e, t), c = {
        x: n,
        y: o
      }, p = wt(a), m = vr(p);
      let v = c[m], f = c[p];
      const g = Ft(i, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const $ = m === "y" ? "height" : "width", A = r.reference[m] - r.floating[$] + w.mainAxis, O = r.reference[m] + r.reference[$] - w.mainAxis;
        v < A ? v = A : v > O && (v = O);
      }
      if (d) {
        var C, k;
        const $ = m === "y" ? "width" : "height", A = Dl.has(Rt(a)), O = r.reference[p] - r.floating[$] + (A && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (A ? 0 : w.crossAxis), P = r.reference[p] + r.reference[$] + (A ? 0 : ((k = l.offset) == null ? void 0 : k[p]) || 0) - (A ? w.crossAxis : 0);
        f < O ? f = O : f > P && (f = P);
      }
      return {
        [m]: v,
        [p]: f
      };
    }
  };
}, Ad = function(e) {
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
      } = Ft(e, t), c = await to(t, d), p = Rt(a), m = Fn(a), v = wt(a) === "y", {
        width: f,
        height: g
      } = r.floating;
      let w, C;
      p === "top" || p === "bottom" ? (w = p, C = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = p, w = m === "end" ? "top" : "bottom");
      const k = g - c.top - c.bottom, $ = f - c.left - c.right, A = Wt(g - c[w], k), O = Wt(f - c[C], $), P = !t.middlewareData.shift;
      let S = A, I = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = $), (o = t.middlewareData.shift) != null && o.enabled.y && (S = k), P && !m) {
        const T = tt(c.left, 0), L = tt(c.right, 0), M = tt(c.top, 0), W = tt(c.bottom, 0);
        v ? I = f - 2 * (T !== 0 || L !== 0 ? T + L : tt(c.left, c.right)) : S = g - 2 * (M !== 0 || W !== 0 ? M + W : tt(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: S
      });
      const F = await l.getDimensions(i.floating);
      return f !== F.width || g !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zo() {
  return typeof window < "u";
}
function an(e) {
  return yr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ct(e) {
  var t;
  return (t = (yr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yr(e) {
  return Zo() ? e instanceof Node || e instanceof nt(e).Node : !1;
}
function ht(e) {
  return Zo() ? e instanceof Element || e instanceof nt(e).Element : !1;
}
function xt(e) {
  return Zo() ? e instanceof HTMLElement || e instanceof nt(e).HTMLElement : !1;
}
function $s(e) {
  return !Zo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
const Dd = /* @__PURE__ */ new Set(["inline", "contents"]);
function uo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Dd.has(a);
}
const Td = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Id(e) {
  return Td.has(an(e));
}
const Md = [":popover-open", ":modal"];
function Qo(e) {
  return Md.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Fd = ["transform", "translate", "scale", "rotate", "perspective"], Rd = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ld = ["paint", "layout", "strict", "content"];
function br(e) {
  const t = wr(), n = ht(e) ? yt(e) : e;
  return Fd.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Rd.some((o) => (n.willChange || "").includes(o)) || Ld.some((o) => (n.contain || "").includes(o));
}
function Vd(e) {
  let t = Ut(e);
  for (; xt(t) && !On(t); ) {
    if (br(t))
      return t;
    if (Qo(t))
      return null;
    t = Ut(t);
  }
  return null;
}
function wr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const zd = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function On(e) {
  return zd.has(an(e));
}
function yt(e) {
  return nt(e).getComputedStyle(e);
}
function Jo(e) {
  return ht(e) ? {
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
    $s(e) && e.host || // Fallback.
    Ct(e)
  );
  return $s(t) ? t.host : t;
}
function Tl(e) {
  const t = Ut(e);
  return On(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xt(t) && uo(t) ? t : Tl(t);
}
function no(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Tl(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = nt(a);
  if (r) {
    const i = Ha(l);
    return t.concat(l, l.visualViewport || [], uo(a) ? a : [], i && n ? no(i) : []);
  }
  return t.concat(a, no(a, [], n));
}
function Ha(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Il(e) {
  const t = yt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = xt(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Vo(n) !== r || Vo(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function _r(e) {
  return ht(e) ? e : e.contextElement;
}
function Cn(e) {
  const t = _r(e);
  if (!xt(t))
    return _t(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Il(t);
  let l = (r ? Vo(n.width) : n.width) / o, i = (r ? Vo(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const qd = /* @__PURE__ */ _t(0);
function Ml(e) {
  const t = nt(e);
  return !wr() || !t.visualViewport ? qd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Nd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== nt(e) ? !1 : t;
}
function nn(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = _r(e);
  let l = _t(1);
  t && (o ? ht(o) && (l = Cn(o)) : l = Cn(e));
  const i = Nd(r, n, o) ? Ml(r) : _t(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const m = nt(r), v = o && ht(o) ? nt(o) : o;
    let f = m, g = Ha(f);
    for (; g && o && v !== f; ) {
      const w = Cn(g), C = g.getBoundingClientRect(), k = yt(g), $ = C.left + (g.clientLeft + parseFloat(k.paddingLeft)) * w.x, A = C.top + (g.clientTop + parseFloat(k.paddingTop)) * w.y;
      u *= w.x, d *= w.y, c *= w.x, p *= w.y, u += $, d += A, f = nt(g), g = Ha(f);
    }
  }
  return qo({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function ea(e, t) {
  const n = Jo(e).scrollLeft;
  return t ? t.left + n : nn(Ct(e)).left + n;
}
function Fl(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - ea(e, n), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function jd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = Ct(o), i = t ? Qo(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = _t(1);
  const c = _t(0), p = xt(o);
  if ((p || !p && !r) && ((an(o) !== "body" || uo(l)) && (u = Jo(o)), xt(o))) {
    const v = nn(o);
    d = Cn(o), c.x = v.x + o.clientLeft, c.y = v.y + o.clientTop;
  }
  const m = l && !p && !r ? Fl(l, u) : _t(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + m.y
  };
}
function Hd(e) {
  return Array.from(e.getClientRects());
}
function Kd(e) {
  const t = Ct(e), n = Jo(e), o = e.ownerDocument.body, a = tt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = tt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + ea(e);
  const i = -n.scrollTop;
  return yt(o).direction === "rtl" && (l += tt(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
const Bs = 25;
function Wd(e, t) {
  const n = nt(e), o = Ct(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const c = wr();
    (!c || c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  const d = ea(o);
  if (d <= 0) {
    const c = o.ownerDocument, p = c.body, m = getComputedStyle(p), v = c.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, f = Math.abs(o.clientWidth - p.clientWidth - v);
    f <= Bs && (r -= f);
  } else d <= Bs && (r += d);
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
const Ud = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Gd(e, t) {
  const n = nn(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = xt(e) ? Cn(e) : _t(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function Ss(e, t, n) {
  let o;
  if (t === "viewport")
    o = Wd(e, n);
  else if (t === "document")
    o = Kd(Ct(e));
  else if (ht(t))
    o = Gd(t, n);
  else {
    const a = Ml(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return qo(o);
}
function Rl(e, t) {
  const n = Ut(e);
  return n === t || !ht(n) || On(n) ? !1 : yt(n).position === "fixed" || Rl(n, t);
}
function Yd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = no(e, [], !1).filter((i) => ht(i) && an(i) !== "body"), a = null;
  const r = yt(e).position === "fixed";
  let l = r ? Ut(e) : e;
  for (; ht(l) && !On(l); ) {
    const i = yt(l), u = br(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && Ud.has(a.position) || uo(l) && !u && Rl(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = Ut(l);
  }
  return t.set(e, o), o;
}
function Xd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Qo(t) ? [] : Yd(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = Ss(t, c, a);
    return d.top = tt(p.top, d.top), d.right = Wt(p.right, d.right), d.bottom = Wt(p.bottom, d.bottom), d.left = tt(p.left, d.left), d;
  }, Ss(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Zd(e) {
  const {
    width: t,
    height: n
  } = Il(e);
  return {
    width: t,
    height: n
  };
}
function Qd(e, t, n) {
  const o = xt(t), a = Ct(t), r = n === "fixed", l = nn(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = _t(0);
  function d() {
    u.x = ea(a);
  }
  if (o || !o && !r)
    if ((an(t) !== "body" || uo(a)) && (i = Jo(t)), o) {
      const v = nn(t, !0, r, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? Fl(a, i) : _t(0), p = l.left + i.scrollLeft - u.x - c.x, m = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function $a(e) {
  return yt(e).position === "static";
}
function Os(e, t) {
  if (!xt(e) || yt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ct(e) === n && (n = n.ownerDocument.body), n;
}
function Ll(e, t) {
  const n = nt(e);
  if (Qo(e))
    return n;
  if (!xt(e)) {
    let a = Ut(e);
    for (; a && !On(a); ) {
      if (ht(a) && !$a(a))
        return a;
      a = Ut(a);
    }
    return n;
  }
  let o = Os(e, t);
  for (; o && Id(o) && $a(o); )
    o = Os(o, t);
  return o && On(o) && $a(o) && !br(o) ? n : o || Vd(e) || n;
}
const Jd = async function(e) {
  const t = this.getOffsetParent || Ll, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Qd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ec(e) {
  return yt(e).direction === "rtl";
}
const tc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jd,
  getDocumentElement: Ct,
  getClippingRect: Xd,
  getOffsetParent: Ll,
  getElementRects: Jd,
  getClientRects: Hd,
  getDimensions: Zd,
  getScale: Cn,
  isElement: ht,
  isRTL: ec
};
function Vl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function nc(e, t) {
  let n = null, o;
  const a = Ct(e);
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
    const f = Co(p), g = Co(a.clientWidth - (c + m)), w = Co(a.clientHeight - (p + v)), C = Co(c), $ = {
      rootMargin: -f + "px " + -g + "px " + -w + "px " + -C + "px",
      threshold: tt(0, Wt(1, u)) || 1
    };
    let A = !0;
    function O(P) {
      const S = P[0].intersectionRatio;
      if (S !== u) {
        if (!A)
          return l();
        S ? l(!1, S) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Vl(d, e.getBoundingClientRect()) && l(), A = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...$,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, $);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function zl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = _r(e), c = a || r ? [...d ? no(d) : [], ...no(t)] : [];
  c.forEach((C) => {
    a && C.addEventListener("scroll", n, {
      passive: !0
    }), r && C.addEventListener("resize", n);
  });
  const p = d && i ? nc(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((C) => {
    let [k] = C;
    k && k.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var $;
      ($ = v) == null || $.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let f, g = u ? nn(e) : null;
  u && w();
  function w() {
    const C = nn(e);
    g && !Vl(g, C) && n(), g = C, f = requestAnimationFrame(w);
  }
  return n(), () => {
    var C;
    c.forEach((k) => {
      a && k.removeEventListener("scroll", n), r && k.removeEventListener("resize", n);
    }), p == null || p(), (C = v) == null || C.disconnect(), v = null, u && cancelAnimationFrame(f);
  };
}
const ql = Od, Nl = Ed, No = $d, jl = Ad, Hl = Bd, oc = kd, Kl = Pd, ac = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: tc,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Cd(e, t, {
    ...a,
    platform: r
  });
};
function rc(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ka(e) {
  if (rc(e)) {
    const t = e.$el;
    return yr(t) && an(t) === "#comment" ? null : t;
  }
  return e;
}
function _n(e) {
  return typeof e == "function" ? e() : s(e);
}
function Wl(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ka(_n(e.element));
      return n == null ? {} : oc({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ul(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Es(e, t) {
  const n = Ul(e);
  return Math.round(t * n) / n;
}
function Gl(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = B(() => {
    var S;
    return (S = _n(n.open)) != null ? S : !0;
  }), r = B(() => _n(n.middleware)), l = B(() => {
    var S;
    return (S = _n(n.placement)) != null ? S : "bottom";
  }), i = B(() => {
    var S;
    return (S = _n(n.strategy)) != null ? S : "absolute";
  }), u = B(() => {
    var S;
    return (S = _n(n.transform)) != null ? S : !0;
  }), d = B(() => Ka(e.value)), c = B(() => Ka(t.value)), p = E(0), m = E(0), v = E(i.value), f = E(l.value), g = Bn({}), w = E(!1), C = B(() => {
    const S = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return S;
    const I = Es(c.value, p.value), F = Es(c.value, m.value);
    return u.value ? {
      ...S,
      transform: "translate(" + I + "px, " + F + "px)",
      ...Ul(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: I + "px",
      top: F + "px"
    };
  });
  let k;
  function $() {
    if (d.value == null || c.value == null)
      return;
    const S = a.value;
    ac(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      p.value = I.x, m.value = I.y, v.value = I.strategy, f.value = I.placement, g.value = I.middlewareData, w.value = S !== !1;
    });
  }
  function A() {
    typeof k == "function" && (k(), k = void 0);
  }
  function O() {
    if (A(), o === void 0) {
      $();
      return;
    }
    if (d.value != null && c.value != null) {
      k = o(d.value, c.value, $);
      return;
    }
  }
  function P() {
    a.value || (w.value = !1);
  }
  return te([r, l, i, a], $, {
    flush: "sync"
  }), te([d, c], O, {
    flush: "sync"
  }), te(a, P, {
    flush: "sync"
  }), sr() && lr(A), {
    x: yn(p),
    y: yn(m),
    strategy: yn(v),
    placement: yn(f),
    middlewareData: yn(g),
    isPositioned: yn(w),
    floatingStyles: C,
    update: $
  };
}
function ye(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = In(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Mn(o, a), a)];
}
function xr(e, t, n) {
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
function sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lc = function e(t, n) {
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
const tn = /* @__PURE__ */ sc(lc);
function kn(e) {
  return e == null;
}
function ic(e, t) {
  var n;
  const o = Bn();
  return xe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Yo(o);
}
function rn(e) {
  return sr() ? (lr(e), !0) : !1;
}
function uc() {
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
function dc(e) {
  let t = !1, n;
  const o = Xo(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Yl(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = Xo(!0), n = o.run(() => e(...r))), rn(a), n);
}
function Mt(e) {
  return typeof e == "function" ? e() : s(e);
}
const kt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cc = (e) => typeof e < "u", pc = (e) => e != null, fc = Object.prototype.toString, mc = (e) => fc.call(e) === "[object Object]", Xl = () => {
}, Ps = /* @__PURE__ */ vc();
function vc() {
  var e, t;
  return kt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function gc(e) {
  return Ue();
}
function Zl(e, t = 1e4) {
  return bl((n, o) => {
    let a = Mt(e), r;
    const l = () => setTimeout(() => {
      a = Mt(e), o();
    }, Mt(t));
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
function hc(e, t) {
  gc() && Tn(e, t);
}
function Cr(e, t, n = {}) {
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
    }, Mt(t));
  }
  return o && (a.value = !0, kt && u()), rn(i), {
    isPending: Yo(a),
    start: u,
    stop: i
  };
}
function yc(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = Cr(
    o ?? Xl,
    e,
    t
  ), r = B(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function lt(e) {
  var t;
  const n = Mt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const co = kt ? window : void 0;
function En(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = co) : [t, n, o, a] = e, !t)
    return Xl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, m, v) => (c.addEventListener(p, m, v), () => c.removeEventListener(p, m, v)), u = te(
    () => [lt(t), Mt(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const m = mc(p) ? { ...p } : p;
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
function bc(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function kr(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = co,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = bc(t);
  return En(a, r, (d) => {
    d.repeat && Mt(i) || u(d) && n(d);
  }, l);
}
function $r() {
  const e = E(!1), t = Ue();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function wc(e) {
  const t = $r();
  return B(() => (t.value, !!e()));
}
function _c(e, t, n = {}) {
  const { window: o = co, ...a } = n;
  let r;
  const l = wc(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = B(() => {
    const m = Mt(e), v = (Array.isArray(m) ? m : [m]).map(lt).filter(pc);
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
function Ql(e, t = {}) {
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
    isActive: Yo(r),
    pause: p,
    resume: c
  };
}
function xc(e) {
  return JSON.parse(JSON.stringify(e));
}
function Pe(e, t, n, o = {}) {
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
  const w = ($) => i ? typeof i == "function" ? i($) : xc($) : $, C = () => cc(e[t]) ? w(e[t]) : p, k = ($) => {
    m ? m($) && f(g, $) : f(g, $);
  };
  if (u) {
    const $ = C(), A = E($);
    let O = !1;
    return te(
      () => e[t],
      (P) => {
        O || (O = !0, A.value = w(P), re(() => O = !1));
      }
    ), te(
      A,
      (P) => {
        !O && (P !== e[t] || c) && k(P);
      },
      { deep: c }
    ), A;
  } else
    return B({
      get() {
        return C();
      },
      set($) {
        k($);
      }
    });
}
function ta(e) {
  return e ? e.flatMap((t) => t.type === ke ? ta(t.children) : [t]) : [];
}
function qe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Cc = ["INPUT", "TEXTAREA"];
function Jl(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Cc.includes(t.nodeName))
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
  ], C = v || f, k = p || m;
  if (!g && !w && (!C && !k || a === "vertical" && k || a === "horizontal" && C))
    return null;
  const $ = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!$.length)
    return null;
  d && e.preventDefault();
  let A = null;
  return k || C ? A = ei($, t, {
    goForward: C ? f : u === "ltr" ? p : m,
    loop: i
  }) : g ? A = $.at(0) || null : w && (A = $.at(-1) || null), c && (A == null || A.focus()), A;
}
function ei(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? ei(
    e,
    i,
    n,
    o
  ) : i : null;
}
function Ba(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Wa(e, t, n = ".", o) {
  if (!Ba(t))
    return Wa(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Ba(l) && Ba(a[r]) ? a[r] = Wa(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function kc(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Wa(n, o, ""), {})
  );
}
const $c = kc(), [na] = ye("ConfigProvider");
let Bc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Sc = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Bc[Math.random() * 64 | 0];
  return t;
};
const Oc = Yl(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = B(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = na({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ps && (a == null || a()), t.value = void 0;
  };
  return te(n, (l, i) => {
    var u;
    if (!kt)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? $c({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), Ps && (a = En(
      document,
      "touchmove",
      (m) => Ec(m),
      { passive: !1 }
    )), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function po(e) {
  const t = Sc(6), n = Oc();
  n.value.set(t, e ?? !1);
  const o = B({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return hc(() => {
    n.value.delete(t);
  }), o;
}
function ti(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : ti(n);
  }
}
function Ec(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && ti(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Pc = "data-radix-vue-collection-item";
function Rn(e, t = Pc) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = E([]);
    function r() {
      const l = lt(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return qu(() => {
      a.value = [];
    }), ie(r), Nu(r), te(() => o == null ? void 0 : o.value, r, { immediate: !0 }), Mn(n, a), a;
  }, injectCollection: () => In(n, E([])) };
}
function Yt(e) {
  const t = na({
    dir: E("ltr")
  });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Xt(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[gl(Uo(a))] = (...r) => e(a, ...r);
  }), o;
}
let Sa = 0;
function Br() {
  xe((e) => {
    if (!kt)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? As()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? As()
    ), Sa++, e(() => {
      Sa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Sa--;
    });
  });
}
function As() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function oa(e) {
  return B(() => {
    var t;
    return Mt(e) ? !!((t = lt(e)) != null && t.closest("form")) : !0;
  });
}
function je(e) {
  const t = Ue(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = ir(e);
  return B(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Uo(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function ce(e, t) {
  const n = je(e), o = t ? Xt(t) : {};
  return B(() => ({
    ...n.value,
    ...o
  }));
}
function z() {
  const e = Ue(), t = E(), n = B(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : lt(t);
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
function Ac(e, t) {
  const n = Zl(!1, 300), o = E(null), a = uc();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Dc(c, d.getBoundingClientRect()), m = Tc(c, p), v = Ic(u.getBoundingClientRect()), f = Fc([...m, ...v]);
    o.value = f, n.value = !0;
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
    if (o.value) {
      const d = (c) => {
        var p, m;
        if (!o.value)
          return;
        const v = c.target, f = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(v)) || ((m = t.value) == null ? void 0 : m.contains(v)), w = !Mc(f, o.value), C = !!v.closest("[data-grace-area-trigger]");
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
function Dc(e, t) {
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
function Tc(e, t, n = 5) {
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
function Ic(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Mc(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Fc(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Rc(t);
}
function Rc(e) {
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
var Lc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, bn = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), $o = {}, Oa = 0, ni = function(e) {
  return e && (e.host || ni(e.parentNode));
}, Vc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ni(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, zc = function(e, t, n, o) {
  var a = Vc(t, Array.isArray(e) ? e : [e]);
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
          bn.set(m, g), r.set(m, w), l.push(m), g === 1 && f && ko.set(m, !0), w === 1 && m.setAttribute(n, "true"), f || m.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return c(t), i.clear(), Oa++, function() {
    l.forEach(function(p) {
      var m = bn.get(p) - 1, v = r.get(p) - 1;
      bn.set(p, m), r.set(p, v), m || (ko.has(p) || p.removeAttribute(o), ko.delete(p)), v || p.removeAttribute(n);
    }), Oa--, Oa || (bn = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), $o = {});
  };
}, qc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Lc(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), zc(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function fo(e) {
  let t;
  te(() => lt(e), (n) => {
    n ? t = qc(n) : t && t();
  }), Ne(() => {
    t && t();
  });
}
let Nc = 0;
function Le(e, t = "radix") {
  const n = na({ useId: void 0 });
  return xn.useId ? `${t}-${xn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Nc}`;
}
function oi(e) {
  const t = E(), n = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
    const a = lt(e);
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
function jc(e, t) {
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
const Hc = "data-item-text";
function Sr(e) {
  const t = Zl("", 1e3);
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
          textValue: ((m = (p.querySelector(`[${Hc}]`) ?? p).textContent) == null ? void 0 : m.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = Wc(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Kc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Wc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = Kc(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const Or = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = ta(n.default()), l = r.findIndex((c) => c.type !== dr);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? D(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = hl(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), U = b({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => Ge(o, t) : o !== "template" ? () => Ge(e.as, t, { default: n.default }) : () => Ge(Or, t, { default: n.default });
  }
});
function ai() {
  const e = E(), t = B(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : lt(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [ri, Uc] = ye("CollapsibleRoot"), Gc = /* @__PURE__ */ b({
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
    const o = e, a = Pe(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = Pe(o, "disabled");
    return Uc({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), z(), (l, i) => (h(), x(s(U), {
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
}), Yc = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    z();
    const n = ri();
    return (o, a) => {
      var r, l;
      return h(), x(s(U), {
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
function Xc(e, t) {
  var n;
  const o = E({}), a = E("none"), r = E(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? co, { state: d, dispatch: c } = jc(l, {
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
    if (kt) {
      const k = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (C = t.value) == null || C.dispatchEvent(k);
    }
  };
  te(
    e,
    async (w, C) => {
      var k;
      const $ = C !== w;
      if (await re(), $) {
        const A = a.value, O = Bo(t.value);
        w ? (c("MOUNT"), p("enter"), O === "none" && p("after-enter")) : O === "none" || ((k = o.value) == null ? void 0 : k.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : C && A !== O ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const m = (w) => {
    const C = Bo(t.value), k = C.includes(
      w.animationName
    ), $ = d.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && k && (p(`after-${$}`), c("ANIMATION_END"), !r.value)) {
      const A = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var O;
        ((O = t.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = A);
      });
    }
    w.target === t.value && C === "none" && c("ANIMATION_END");
  }, v = (w) => {
    w.target === t.value && (a.value = Bo(t.value));
  }, f = te(
    t,
    (w, C) => {
      w ? (o.value = getComputedStyle(w), w.addEventListener("animationstart", v), w.addEventListener("animationcancel", m), w.addEventListener("animationend", m)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), C == null || C.removeEventListener("animationstart", v), C == null || C.removeEventListener("animationcancel", m), C == null || C.removeEventListener("animationend", m));
    },
    { immediate: !0 }
  ), g = te(d, () => {
    const w = Bo(t.value);
    a.value = d.value === "mounted" ? w : "none";
  });
  return Ne(() => {
    f(), g();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function Bo(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const ut = b({
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
    const { present: a, forceMount: r } = we(e), l = E(), { isPresent: i } = Xc(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = ta(u || []);
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
        const p = lt(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), Zc = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ri();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-collapsible-content"));
    const o = E(), { forwardRef: a, currentElement: r } = z(), l = E(0), i = E(0), u = B(() => n.open.value), d = E(u.value), c = E();
    return te(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
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
        const m = p.getBoundingClientRect();
        i.value = m.height, l.value = m.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), ie(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, m) => (h(), x(s(ut), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, f;
        return [
          R(s(U), D(p.$attrs, {
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
                (g = o.value) != null && g.present ? _(p.$slots, "default", { key: 0 }) : de("", !0)
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
function si({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (kn(e) && kn(n) && kn(t))
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
function Qc({ type: e, defaultValue: t, modelValue: n }) {
  return e || si({ type: e, defaultValue: t, modelValue: n });
}
function Jc({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function ep(e, t) {
  const n = E(Qc(e)), o = Pe(e, "modelValue", t, {
    defaultValue: Jc(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  te(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = si(e);
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
const [aa, tp] = ye("AccordionRoot"), np = /* @__PURE__ */ b({
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
    const n = e, o = t, { dir: a, disabled: r } = we(n), l = Yt(a), { modelValue: i, changeModelValue: u, isSingle: d } = ep(n, o), { forwardRef: c, currentElement: p } = z();
    return tp({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (m, v) => (h(), x(s(U), {
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
}), [Er, op] = ye("AccordionItem"), ap = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = aa(), a = B(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = B(() => o.disabled.value || n.disabled), l = B(() => r.value ? "" : void 0), i = B(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = z();
    op({
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
      var m;
      const v = p.target;
      if (Array.from(((m = o.parentElement.value) == null ? void 0 : m.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((f) => f === v) === -1)
        return null;
      Jl(
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
    return (p, m) => (h(), x(s(Gc), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: Je(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), rp = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = aa(), o = Er();
    return z(), (a, r) => (h(), x(s(Zc), {
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
}), sp = /* @__PURE__ */ b({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = aa(), o = Er();
    return z(), (a, r) => (h(), x(s(U), {
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
}), lp = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = aa(), o = Er();
    o.triggerId || (o.triggerId = Le(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), x(s(Yc), {
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
}), [$t, ip] = ye("DialogRoot"), Pr = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = E(), r = E(), { modal: l } = we(n);
    return ip({
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
}), Ar = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $t(), { forwardRef: o, currentElement: a } = z();
    return n.contentId || (n.contentId = Le(void 0, "radix-vue-dialog-content")), ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(U), D(t, {
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
}), Ln = /* @__PURE__ */ b({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = $r();
    return (n, o) => s(t) || n.forceMount ? (h(), x(io, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : de("", !0);
  }
}), Dr = /* @__PURE__ */ b({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = "dismissableLayer.pointerDownOutside", dp = "dismissableLayer.focusOutside";
function li(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function cp(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return xe((l) => {
    if (!kt)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (li(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            xr(
              up,
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
function pp(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return xe((r) => {
    if (!kt)
      return;
    const l = async (i) => {
      t != null && t.value && (await re(), !(!t.value || li(t.value, i.target)) && i.target && !a.value && xr(
        dp,
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
const ft = Sn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Vn = /* @__PURE__ */ b({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = z(), l = B(
      () => {
        var f;
        return ((f = r.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => ft.layersRoot), u = B(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = B(() => ft.layersWithOutsidePointerEventsDisabled.size > 0), c = B(() => {
      const f = Array.from(i.value), [g] = [...ft.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(g);
      return u.value >= w;
    }), p = cp(async (f) => {
      const g = [...ft.branches].some(
        (w) => w == null ? void 0 : w.contains(f.target)
      );
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await re(), f.defaultPrevented || o("dismiss"));
    }, r), m = pp((f) => {
      [...ft.branches].some(
        (g) => g == null ? void 0 : g.contains(f.target)
      ) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    kr("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let v;
    return xe((f) => {
      r.value && (n.disableOutsidePointerEvents && (ft.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), ft.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && ft.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), xe((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), ft.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(U), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: it({
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
}), fp = /* @__PURE__ */ b({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = z();
    return ie(() => {
      ft.branches.add(o.value);
    }), Ne(() => {
      ft.branches.delete(o.value);
    }), (a, r) => (h(), x(s(U), D({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ea = "focusScope.autoFocusOnMount", Pa = "focusScope.autoFocusOnUnmount", Ds = { bubbles: !1, cancelable: !0 };
function Fo(e, { select: t = !1 } = {}) {
  const n = qe();
  for (const o of e)
    if (Ht(o, { select: t }), qe() !== n)
      return !0;
}
function mp(e) {
  const t = Tr(e), n = Ts(t, e), o = Ts(t.reverse(), e);
  return [n, o];
}
function Tr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ts(e, t) {
  for (const n of e)
    if (!vp(n, { upTo: t }))
      return n;
}
function vp(e, { upTo: t }) {
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
function gp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ht(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = qe();
    e.focus({ preventScroll: !0 }), e !== n && gp(e) && t && e.select();
  }
}
const hp = dc(() => E([]));
function yp() {
  const e = hp();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Is(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Is(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Is(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function bp(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ra = /* @__PURE__ */ b({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = z(), l = E(null), i = yp(), u = Sn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
      if (!kt)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function m(w) {
        if (u.paused || !p)
          return;
        const C = w.target;
        p.contains(C) ? l.value = C : Ht(l.value, { select: !0 });
      }
      function v(w) {
        if (u.paused || !p)
          return;
        const C = w.relatedTarget;
        C !== null && (p.contains(C) || Ht(l.value, { select: !0 }));
      }
      function f(w) {
        p.contains(l.value) || Ht(p);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const g = new MutationObserver(f);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), g.disconnect();
      });
    }), xe(async (c) => {
      const p = r.value;
      if (await re(), !p)
        return;
      i.add(u);
      const m = qe();
      if (!p.contains(m)) {
        const v = new CustomEvent(Ea, Ds);
        p.addEventListener(Ea, (f) => o("mountAutoFocus", f)), p.dispatchEvent(v), v.defaultPrevented || (Fo(bp(Tr(p)), {
          select: !0
        }), qe() === m && Ht(p));
      }
      c(() => {
        p.removeEventListener(Ea, (g) => o("mountAutoFocus", g));
        const v = new CustomEvent(Pa, Ds), f = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(Pa, f), p.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Ht(m ?? document.body, { select: !0 }), p.removeEventListener(Pa, f), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = qe();
      if (p && m) {
        const v = c.currentTarget, [f, g] = mp(v);
        f && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && Ht(f, { select: !0 })) : c.shiftKey && m === f && (c.preventDefault(), n.loop && Ht(g, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(U), {
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
}), wp = "menu.itemSelect", Ua = ["Enter", " "], _p = ["ArrowDown", "PageUp", "Home"], ii = ["ArrowUp", "PageDown", "End"], xp = [..._p, ...ii], Cp = {
  ltr: [...Ua, "ArrowRight"],
  rtl: [...Ua, "ArrowLeft"]
}, kp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Ir(e) {
  return e ? "open" : "closed";
}
function Ho(e) {
  return e === "indeterminate";
}
function Mr(e) {
  return Ho(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ga(e) {
  const t = qe();
  for (const n of e)
    if (n === t || (n.focus(), qe() !== t))
      return;
}
function $p(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Bp(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return $p(n, t);
}
function oo(e) {
  return e.pointerType === "mouse";
}
const Sp = "DialogTitle", Op = "DialogContent";
function Ep({
  titleName: e = Sp,
  contentName: t = Op,
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
const ui = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $t(), { forwardRef: r, currentElement: l } = z();
    return a.titleId || (a.titleId = Le(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = Le(void 0, "radix-vue-dialog-description")), ie(() => {
      a.contentElement = l, qe() !== document.body && (a.triggerElement.value = qe());
    }), process.env.NODE_ENV !== "production" && Ep({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(ra), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Vn), D({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(Ir)(s(a).open.value)
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
}), Pp = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $t(), r = Xt(o), { forwardRef: l, currentElement: i } = z();
    return fo(i), (u, d) => (h(), x(ui, D({ ...n, ...s(r) }, {
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
}), Ap = /* @__PURE__ */ b({
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
    z();
    const a = $t(), r = E(!1), l = E(!1);
    return (i, u) => (h(), x(ui, D({ ...n, ...s(o) }, {
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
}), sa = /* @__PURE__ */ b({
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
    const n = e, o = t, a = $t(), r = Xt(o), { forwardRef: l } = z();
    return (i, u) => (h(), x(s(ut), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Pp, D({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(Ap, D({
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
}), Dp = /* @__PURE__ */ b({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $t();
    return po(!0), z(), (n, o) => (h(), x(s(U), {
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
}), la = /* @__PURE__ */ b({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $t(), { forwardRef: n } = z();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(ut), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          R(Dp, D(o.$attrs, {
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
      }, 8, ["present"])) : de("", !0);
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
    z();
    const n = $t();
    return (o, a) => (h(), x(s(U), D(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Fr = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = $t();
    return z(), (o, a) => (h(), x(s(U), D(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Rr = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    z();
    const n = $t();
    return (o, a) => (h(), x(s(U), D(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Tp = /* @__PURE__ */ b({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = ce(e, t);
    return z(), (o, a) => (h(), x(s(Pr), D(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ip = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(Ar), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mp = /* @__PURE__ */ b({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fp, Rp] = ye("AlertDialogContent"), Lp = /* @__PURE__ */ b({
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
    z();
    const a = E();
    return Rp({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), x(s(sa), D({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = De(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = De(() => {
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
}), Vp = /* @__PURE__ */ b({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(la), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zp = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Fp(), { forwardRef: o, currentElement: a } = z();
    return ie(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), x(s(sn), D(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qp = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(Fr), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Np = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(Rr), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jp = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(sn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [di, Hp] = ye("AvatarRoot"), Kp = /* @__PURE__ */ b({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return z(), Hp({
      imageLoadingStatus: E("loading")
    }), (t, n) => (h(), x(s(U), {
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
function Wp(e, t) {
  const n = E("idle"), o = E(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return ie(() => {
    o.value = !0, te([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), Ne(() => {
    o.value = !1;
  }), n;
}
const Up = /* @__PURE__ */ b({
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
    z();
    const l = di(), i = Wp(a, r);
    return te(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => Dn((h(), x(s(U), {
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
      [ur, s(i) === "loaded"]
    ]);
  }
}), Gp = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = di();
    z();
    const o = E(!1);
    let a;
    return te(n.imageLoadingStatus, (r) => {
      r === "loading" && (o.value = !1, t.delayMs ? a = setTimeout(() => {
        o.value = !0, clearTimeout(a);
      }, t.delayMs) : o.value = !0);
    }, { immediate: !0 }), (r, l) => o.value && s(n).imageLoadingStatus.value !== "loaded" ? (h(), x(s(U), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : de("", !0);
  }
}), [ci, Yp] = ye("PopperRoot"), zn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Yp({
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
    const t = e, { forwardRef: n, currentElement: o } = z(), a = ci();
    return xe(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), x(s(U), {
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
function Xp(e) {
  return e !== null;
}
function Zp(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, m] = Ya(r), v = { start: "0%", center: "50%", end: "100%" }[m], f = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let w = "", C = "";
      return p === "bottom" ? (w = u ? v : `${f}px`, C = `${-c}px`) : p === "top" ? (w = u ? v : `${f}px`, C = `${l.floating.height + c}px`) : p === "right" ? (w = `${-c}px`, C = u ? v : `${g}px`) : p === "left" && (w = `${l.floating.width + c}px`, C = u ? v : `${g}px`), { data: { x: w, y: C } };
    }
  };
}
function Ya(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const pi = {
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
}, [h_, Qp] = ye("PopperContent"), Pn = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ cr({
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
    ...pi
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ci(), { forwardRef: r, currentElement: l } = z(), i = E(), u = E(), { width: d, height: c } = oi(u), p = B(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = B(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), v = B(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = B(() => ({
      padding: m.value,
      boundary: v.value.filter(Xp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), g = ic(() => [
      ql({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && No({
        ...f.value
      }),
      n.avoidCollisions && Nl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Kl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && No({
        ...f.value
      }),
      jl({
        ...f.value,
        apply: ({ elements: T, rects: L, availableWidth: M, availableHeight: W }) => {
          const { width: j, height: G } = L.reference, K = T.floating.style;
          K.setProperty(
            "--radix-popper-available-width",
            `${M}px`
          ), K.setProperty(
            "--radix-popper-available-height",
            `${W}px`
          ), K.setProperty(
            "--radix-popper-anchor-width",
            `${j}px`
          ), K.setProperty(
            "--radix-popper-anchor-height",
            `${G}px`
          );
        }
      }),
      u.value && Wl({ element: u.value, padding: n.arrowPadding }),
      Zp({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Hl({ strategy: "referenceHidden", ...f.value })
    ]), { floatingStyles: w, placement: C, isPositioned: k, middlewareData: $ } = Gl(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...T) => zl(...T, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), A = B(
      () => Ya(C.value)[0]
    ), O = B(
      () => Ya(C.value)[1]
    );
    pr(() => {
      k.value && o("placed");
    });
    const P = B(
      () => {
        var T;
        return ((T = $.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), S = E("");
    xe(() => {
      l.value && (S.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = B(() => {
      var T;
      return ((T = $.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), F = B(() => {
      var T;
      return ((T = $.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Qp({
      placedSide: A,
      onArrowChange: (T) => u.value = T,
      arrowX: I,
      arrowY: F,
      shouldHideArrow: P
    }), (T, L) => {
      var M, W, j;
      return h(), q("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: it({
          ...s(w),
          transform: s(k) ? s(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: S.value,
          "--radix-popper-transform-origin": [
            (M = s($).transformOrigin) == null ? void 0 : M.x,
            (W = s($).transformOrigin) == null ? void 0 : W.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = s($).hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        R(s(U), D({ ref: s(r) }, T.$attrs, {
          "as-child": n.asChild,
          as: T.as,
          "data-side": A.value,
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
}), vo = /* @__PURE__ */ b({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return z(), (t, n) => (h(), x(s(U), {
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
}), Jp = /* @__PURE__ */ b({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), q(ke, null, st(n.value, (r) => (h(), x(vo, {
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
}), ef = "data-radix-vue-collection-item", [Lr, tf] = ye("CollectionProvider");
function Vr(e = ef) {
  const t = E(/* @__PURE__ */ new Map()), n = E(), o = tf({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = qr(o), r = B(() => Array.from(o.itemMap.value.values())), l = B(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const zr = b({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Lr(), { primitiveElement: o, currentElement: a } = ai();
    return te(a, () => {
      n.collectionRef.value = a.value;
    }), () => Ge(Or, { ref: o }, t);
  }
}), ia = b({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = Lr(), { primitiveElement: a, currentElement: r } = ai();
    return xe((l) => {
      if (r.value) {
        const i = yl(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => Ge(Or, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function qr(e) {
  const t = e ?? Lr();
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
const [qn, nf] = ye("ComboboxRoot"), of = /* @__PURE__ */ b({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = we(n), i = Yt(l), u = Pe(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = Pe(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = Pe(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function m(N) {
      var ue, le;
      c.value = N, await re(), N ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (ue = $().find((Ae) => {
        var Me, Ve;
        return ((Ve = (Me = Ae.ref) == null ? void 0 : Me.dataset) == null ? void 0 : Ve.state) === "checked";
      })) == null ? void 0 : ue.value : p.value = d.value), await re(), (le = g.value) == null || le.focus(), W()) : (f.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function v(N) {
      if (Array.isArray(d.value) && a.value) {
        const ue = d.value.findIndex((Ae) => tn(Ae, N)), le = [...d.value];
        ue === -1 ? le.push(N) : le.splice(ue, 1), d.value = le;
      } else
        d.value = N, m(!1);
    }
    const f = E(!1), g = E(), w = E(), { forwardRef: C, currentElement: k } = z(), { getItems: $, reactiveItems: A, itemMapSize: O } = Vr("data-radix-vue-combobox-item"), P = E([]);
    te(() => O.value, () => {
      P.value = $().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const S = B(() => {
      if (f.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const N = P.value.filter((ue) => typeof ue == "string");
        if (N.length)
          return N.filter((ue) => {
            var le;
            return ue.toLowerCase().includes((le = u.value) == null ? void 0 : le.toLowerCase());
          });
      }
      return P.value;
    });
    function I(N) {
      const ue = N === "blur" || N === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : ue && (u.value = "") : ue && (u.value = "");
    }
    const F = B(() => S.value.findIndex((N) => tn(N, p.value))), T = B(() => {
      var N;
      return (N = A.value.find((ue) => tn(ue.value, p.value))) == null ? void 0 : N.ref;
    }), L = B(() => JSON.stringify(d.value));
    te(L, async () => {
      await re(), await re(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), te(() => [S.value.length, u.value.length], async ([N, ue], [le, Ae]) => {
      await re(), await re(), N && (Ae > ue || F.value === -1) && (p.value = S.value[0]);
    });
    const M = oa(k);
    function W() {
      var N;
      T.value instanceof Element && ((N = T.value) == null || N.scrollIntoView({ block: "nearest" }));
    }
    function j() {
      T.value instanceof Element && T.value.focus && T.value.focus();
    }
    const G = E(!1);
    function K() {
      G.value = !0;
    }
    function Q() {
      requestAnimationFrame(() => {
        G.value = !1;
      });
    }
    async function Y(N) {
      var ue;
      S.value.length && p.value && T.value instanceof Element && (N.preventDefault(), N.stopPropagation(), G.value || (ue = T.value) == null || ue.click());
    }
    return nf({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: f,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: m,
      filteredOptions: S,
      contentId: "",
      inputElement: g,
      selectedElement: T,
      onInputElementChange: (N) => g.value = N,
      onInputNavigation: async (N) => {
        const ue = F.value;
        ue === 0 && N === "up" || ue === S.value.length - 1 && N === "down" || (ue === -1 && S.value.length || N === "home" ? p.value = S.value[0] : N === "end" ? p.value = S.value[S.value.length - 1] : p.value = S.value[N === "up" ? ue - 1 : ue + 1], await re(), W(), j(), re(() => {
          var le;
          return (le = g.value) == null ? void 0 : le.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: Y,
      onCompositionEnd: Q,
      onCompositionStart: K,
      selectedValue: p,
      onSelectedValueChange: (N) => p.value = N,
      parentElement: k,
      contentElement: w,
      onContentElementChange: (N) => w.value = N
    }), (N, ue) => (h(), x(s(zn), null, {
      default: y(() => [
        R(s(U), D({
          ref: s(C),
          style: {
            pointerEvents: s(c) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: s(i)
        }, N.$attrs), {
          default: y(() => [
            _(N.$slots, "default", {
              open: s(c),
              modelValue: s(d)
            }),
            s(M) && n.name ? (h(), x(s(Jp), {
              key: 0,
              name: n.name,
              value: s(d)
            }, null, 8, ["name", "value"])) : de("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), af = /* @__PURE__ */ b({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = qn(), { forwardRef: o, currentElement: a } = z();
    ie(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = B(() => t.disabled || n.disabled.value || !1), l = E();
    ml(() => {
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
    return (c, p) => (h(), x(s(U), {
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
        Je(De(i, ["prevent"]), ["down", "up"]),
        Je(s(n).onInputEnter, ["enter"]),
        Je(De(u, ["prevent"]), ["home", "end"])
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
}), [fi, rf] = ye("ComboboxGroup"), sf = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = z(), a = Le(void 0, "radix-vue-combobox-group"), r = qn(), l = E(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return _c(o, () => {
      re(() => {
        i();
      });
    }, { childList: !0 }), te(() => r.searchTerm.value, () => {
      re(() => {
        i();
      });
    }, { immediate: !0 }), rf({
      id: a
    }), (u, d) => Dn((h(), x(s(U), D(t, {
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
      [ur, l.value]
    ]);
  }
}), lf = /* @__PURE__ */ b({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    z();
    const n = fi({ id: "" });
    return (o, a) => (h(), x(s(U), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [y_, uf] = ye("ComboboxContent"), df = /* @__PURE__ */ b({
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
    const n = e, o = t, { position: a } = we(n), r = qn();
    po(n.bodyLock);
    const { forwardRef: l, currentElement: i } = z();
    fo(r.parentElement);
    const u = B(() => n.position === "popper" ? n : {}), d = je(u.value);
    function c(m) {
      r.onSelectedValueChange("");
    }
    ie(() => {
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
    return uf({ position: a }), (m, v) => (h(), x(s(zr), null, {
      default: y(() => [
        m.dismissable ? (h(), x(s(Vn), {
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
            (h(), x(Ze(s(a) === "popper" ? s(Pn) : s(U)), D({ ...m.$attrs, ...s(d) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (h(), x(Ze(s(a) === "popper" ? s(Pn) : s(U)), D({ key: 1 }, { ...m.$attrs, ...u.value }, {
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
}), cf = /* @__PURE__ */ b({
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
    const n = ce(e, t), { forwardRef: o } = z(), a = qn();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-combobox-content")), (r, l) => (h(), x(s(ut), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        R(df, D({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), pf = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const n = qn(), o = B(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), x(s(U), Z(D({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          _e("No options")
        ])
      ]),
      _: 3
    }, 16)) : de("", !0);
  }
});
function ff(e) {
  const t = na({
    nonce: E()
  });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [b_, mf] = ye("ComboboxItem"), vf = "combobox.select", gf = /* @__PURE__ */ b({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = we(n), r = qn();
    fi({ id: "", options: E([]) });
    const { forwardRef: l } = z(), i = B(
      () => {
        var g, w;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((C) => tn(C, n.value)) : tn((w = r.modelValue) == null ? void 0 : w.value, n.value);
      }
    ), u = B(() => tn(r.selectedValue.value, n.value)), d = Le(void 0, "radix-vue-combobox-item"), c = Le(void 0, "radix-vue-combobox-option"), p = B(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => tn(g, n.value)) : !0);
    async function m(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function v(g) {
      if (!g)
        return;
      const w = { originalEvent: g, value: n.value };
      xr(vf, m, w);
    }
    async function f(g) {
      await re(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return mf({
      isSelected: i
    }), (g, w) => (h(), x(s(ia), { value: g.value }, {
      default: y(() => [
        Dn(R(s(U), {
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
              _e(Se(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [ur, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), hf = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(U), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mi = /* @__PURE__ */ b({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(mo), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function yf() {
  const e = E(!1);
  return ie(() => {
    En("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), En(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const bf = Yl(yf), [ln, vi] = ye(["MenuRoot", "MenuSub"], "MenuContext"), [go, wf] = ye("MenuRoot"), _f = /* @__PURE__ */ b({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = we(n), l = Yt(r), i = Pe(n, "open", o), u = E(), d = bf();
    return vi({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), wf({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), x(s(zn), null, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), xf = "rovingFocusGroup.onEntryFocus", Cf = { bubbles: !1, cancelable: !0 }, kf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $f(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Bf(e, t, n) {
  const o = $f(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return kf[o];
}
function gi(e, t = !1) {
  const n = qe();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), qe() !== n))
      return;
}
function Sf(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [Of, Ef] = ye("RovingFocusGroup"), hi = /* @__PURE__ */ b({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = we(o), u = Yt(i), d = Pe(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), p = E(!1), m = E(0), { getItems: v } = Vr();
    function f(w) {
      const C = !p.value;
      if (w.currentTarget && w.target === w.currentTarget && C && !c.value) {
        const k = new CustomEvent(xf, Cf);
        if (w.currentTarget.dispatchEvent(k), a("entryFocus", k), !k.defaultPrevented) {
          const $ = v().map((S) => S.ref).filter((S) => S.dataset.disabled !== ""), A = $.find((S) => S.getAttribute("data-active") === "true"), O = $.find(
            (S) => S.id === d.value
          ), P = [A, O, ...$].filter(
            Boolean
          );
          gi(P, o.preventScrollOnEntryFocus);
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
    }), Ef({
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
    }), (w, C) => (h(), x(s(zr), null, {
      default: y(() => [
        R(s(U), {
          tabindex: c.value || m.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: w.as,
          "as-child": w.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = (k) => p.value = !0),
          onMouseup: g,
          onFocus: f,
          onBlur: C[1] || (C[1] = (k) => c.value = !1)
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
}), Pf = /* @__PURE__ */ b({
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
    const t = e, n = Of(), o = B(() => t.tabStopId || Le()), a = B(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = qr();
    ie(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ne(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Bf(
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
          d = n.loop.value ? Sf(d, c + 1) : d.slice(c + 1);
        }
        re(() => gi(d));
      }
    }
    return (i, u) => (h(), x(s(ia), null, {
      default: y(() => [
        R(s(U), {
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
}), [Nr, Af] = ye("MenuContent"), jr = /* @__PURE__ */ b({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ cr({
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
    ...pi
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ln(), r = go(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = we(n);
    Br(), po(i.value);
    const d = E(""), c = E(0), p = E(0), m = E(null), v = E("right"), f = E(0), g = E(null), { createCollection: w } = Rn(), { forwardRef: C, currentElement: k } = z(), $ = w(k);
    te(k, (T) => {
      a.onContentChange(T);
    });
    const { handleTypeaheadSearch: A } = Sr($);
    Ne(() => {
      window.clearTimeout(c.value);
    });
    function O(T) {
      var L, M;
      return v.value === ((L = m.value) == null ? void 0 : L.side) && Bp(T, (M = m.value) == null ? void 0 : M.area);
    }
    async function P(T) {
      var L;
      o("openAutoFocus", T), !T.defaultPrevented && (T.preventDefault(), (L = k.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function S(T) {
      if (T.defaultPrevented)
        return;
      const L = T.target.closest("[data-radix-menu-content]") === T.currentTarget, M = T.ctrlKey || T.altKey || T.metaKey, W = T.key.length === 1, j = Jl(
        T,
        qe(),
        k.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (j)
        return j == null ? void 0 : j.focus();
      if (T.code === "Space" || (L && (T.key === "Tab" && T.preventDefault(), !M && W && A(T.key)), T.target !== k.value) || !xp.includes(T.key))
        return;
      T.preventDefault();
      const G = $.value;
      ii.includes(T.key) && G.reverse(), Ga(G);
    }
    function I(T) {
      var L, M;
      (M = (L = T == null ? void 0 : T.currentTarget) == null ? void 0 : L.contains) != null && M.call(L, T.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function F(T) {
      var L;
      if (!oo(T))
        return;
      const M = T.target, W = f.value !== T.clientX;
      if ((L = T == null ? void 0 : T.currentTarget) != null && L.contains(M) && W) {
        const j = T.clientX > f.value ? "right" : "left";
        v.value = j, f.value = T.clientX;
      }
    }
    return Af({
      onItemEnter: (T) => !!O(T),
      onItemLeave: (T) => {
        var L;
        O(T) || ((L = k.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (T) => !!O(T),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (T) => {
        m.value = T;
      }
    }), (T, L) => (h(), x(s(ra), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: L[7] || (L[7] = (M) => o("closeAutoFocus", M))
    }, {
      default: y(() => [
        R(s(Vn), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (M) => o("escapeKeyDown", M)),
          onPointerDownOutside: L[3] || (L[3] = (M) => o("pointerDownOutside", M)),
          onFocusOutside: L[4] || (L[4] = (M) => o("focusOutside", M)),
          onInteractOutside: L[5] || (L[5] = (M) => o("interactOutside", M)),
          onDismiss: L[6] || (L[6] = (M) => o("dismiss"))
        }, {
          default: y(() => [
            R(s(hi), {
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
                R(s(Pn), {
                  ref: s(C),
                  role: "menu",
                  as: T.as,
                  "as-child": T.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Ir)(s(a).open.value),
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
}), yi = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Nr(), { forwardRef: o } = z(), a = E(!1);
    async function r(i) {
      if (!i.defaultPrevented && oo(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await re(), !i.defaultPrevented && oo(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), x(s(ia), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        R(s(U), D({
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
}), Hr = /* @__PURE__ */ b({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = z(), l = go(), i = Nr(), u = E(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(wp, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await re(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), x(yi, D(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (m) => {
        var v;
        await re(), !m.defaultPrevented && (u.value || (v = m.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (m) => {
        const v = s(i).searchRef.value !== "";
        c.disabled || v && m.key === " " || s(Ua).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Df, bi] = ye(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Tf = /* @__PURE__ */ b({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Df({
      checked: E(!1)
    });
    return (n, o) => (h(), x(s(ut), {
      present: n.forceMount || s(Ho)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        R(s(U), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(Mr)(s(t).checked.value)
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
}), If = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Pe(n, "checked", o);
    return bi({ checked: a }), (r, l) => (h(), x(Hr, D({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Ho)(s(a)) ? "mixed" : s(a),
      "data-state": s(Mr)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Ho)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Mf = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ce(n, o), r = ln(), { forwardRef: l, currentElement: i } = z();
    return fo(i), (u, d) => (h(), x(jr, D(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = De((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Ff = /* @__PURE__ */ b({
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
    const n = ce(e, t), o = ln();
    return (a, r) => (h(), x(jr, D(s(n), {
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
}), Rf = /* @__PURE__ */ b({
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
    const n = ce(e, t), o = ln(), a = go();
    return (r, l) => (h(), x(s(ut), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(Mf, Z(D({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(Ff, Z(D({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), wi = /* @__PURE__ */ b({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(U), D({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lf = /* @__PURE__ */ b({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(U), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vf = /* @__PURE__ */ b({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [zf, qf] = ye("MenuRadioGroup"), Nf = /* @__PURE__ */ b({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "modelValue", t);
    return qf({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), x(wi, Z(ee(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), jf = /* @__PURE__ */ b({
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
    const n = e, o = t, { value: a } = we(n), r = zf(), l = B(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return bi({ checked: l }), (i, u) => (h(), x(Hr, D({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(Mr)(l.value),
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
}), Hf = /* @__PURE__ */ b({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(U), D(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [_i, Kf] = ye("MenuSub"), Wf = /* @__PURE__ */ b({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = ln(), r = E(), l = E();
    return xe((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), vi({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), Kf({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), x(s(zn), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Uf = /* @__PURE__ */ b({
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
    const n = ce(e, t), o = ln(), a = go(), r = _i(), { forwardRef: l, currentElement: i } = z();
    return r.contentId || (r.contentId = Le(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), x(s(ut), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        R(jr, D(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = De((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = De(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, m;
            const v = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), f = s(kp)[s(a).dir.value].includes(c.key);
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
}), Gf = /* @__PURE__ */ b({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ln(), o = go(), a = _i(), r = Nr(), l = E(null);
    a.triggerId || (a.triggerId = Le(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Ne(() => {
      i();
    });
    function u(p) {
      !oo(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var m, v;
      if (!oo(p))
        return;
      i();
      const f = (m = n.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (f != null && f.width) {
        const g = (v = n.content.value) == null ? void 0 : v.dataset.side, w = g === "right", C = w ? -5 : 5, k = f[w ? "left" : "right"], $ = f[w ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + C, y: p.clientY },
            { x: k, y: f.top },
            { x: $, y: f.top },
            { x: $, y: f.bottom },
            { x: k, y: f.bottom }
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
      t.disabled || v && p.key === " " || Cp[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await re(), (m = n.content.value) == null || m.focus(), p.preventDefault());
    }
    return (p, m) => (h(), x(mi, { "as-child": "" }, {
      default: y(() => [
        R(yi, D(t, {
          id: s(a).triggerId,
          ref: (v) => {
            var f;
            (f = s(a)) == null || f.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(Ir)(s(n).open.value),
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
}), [xi, Yf] = ye("DropdownMenuRoot"), Xf = /* @__PURE__ */ b({
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
    z();
    const a = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), { modal: l, dir: i } = we(n), u = Yt(i);
    return Yf({
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
    }), (d, c) => (h(), x(s(_f), {
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
}), Zf = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = xi(), { forwardRef: o, currentElement: a } = z();
    return ie(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = Le(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), x(s(mi), { "as-child": "" }, {
      default: y(() => [
        R(s(U), {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await re(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = Je(
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
}), Qf = /* @__PURE__ */ b({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Vf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jf = /* @__PURE__ */ b({
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
    const n = ce(e, t);
    z();
    const o = xi(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = Le(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), x(s(Rf), D(s(n), {
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
}), em = /* @__PURE__ */ b({
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
    return z(), (a, r) => (h(), x(s(Hr), Z(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(wi), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(Hf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ b({
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
    return z(), (a, r) => (h(), x(s(If), Z(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ci = /* @__PURE__ */ b({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(Tf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(Lf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rm = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = Xt(t);
    return z(), (a, r) => (h(), x(s(Nf), Z(ee({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sm = /* @__PURE__ */ b({
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
    const n = ce(e, t);
    return z(), (o, a) => (h(), x(s(jf), Z(ee(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Pe(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return z(), (a, r) => (h(), x(s(Wf), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => rt(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), im = /* @__PURE__ */ b({
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
    const n = ce(e, t);
    return z(), (o, a) => (h(), x(s(Uf), D(s(n), { style: {
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
}), um = /* @__PURE__ */ b({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(Gf), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(U), D(t, {
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
}), [Nn, cm] = ye("PopoverRoot"), pm = /* @__PURE__ */ b({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = we(n), r = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(!1);
    return cm({
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
    }), (u, d) => (h(), x(s(zn), null, {
      default: y(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), fm = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Nn(), { forwardRef: o, currentElement: a } = z();
    return ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(Ze(s(n).hasCustomAnchor.value ? s(U) : s(mo)), { "as-child": "" }, {
      default: y(() => [
        R(s(U), {
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
}), mm = /* @__PURE__ */ b({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ki = /* @__PURE__ */ b({
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
    const n = e, o = t, a = je(n), { forwardRef: r } = z(), l = Nn();
    return Br(), (i, u) => (h(), x(s(ra), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Vn), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            R(s(Pn), D(s(a), {
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
}), vm = /* @__PURE__ */ b({
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
    const l = ce(n, o), { forwardRef: i, currentElement: u } = z();
    return fo(u), (d, c) => (h(), x(ki, D(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = De(
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
      onFocusOutside: c[2] || (c[2] = De(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), gm = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = E(!1), l = E(!1), i = ce(n, o);
    return (u, d) => (h(), x(ki, D(s(i), {
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
}), hm = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Nn(), r = ce(n, o), { forwardRef: l } = z();
    return a.contentId || (a.contentId = Le(void 0, "radix-vue-popover-content")), (i, u) => (h(), x(s(ut), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), x(vm, D({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), x(gm, D({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), w_ = /* @__PURE__ */ b({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    z();
    const n = Nn();
    return vl(() => {
      n.hasCustomAnchor.value = !0;
    }), Ne(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), x(s(mo), Z(ee(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ao = 100, [ym, bm] = ye("ProgressRoot"), Kr = (e) => typeof e == "number";
function wm(e, t) {
  return kn(e) || Kr(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ao} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function _m(e) {
  return Kr(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ao}\`.`
  ), ao);
}
const xm = /* @__PURE__ */ b({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: ao },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * ao)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    z();
    const a = Pe(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = Pe(n, "max", o, {
      passive: n.max === void 0
    });
    te(
      () => a.value,
      async (i) => {
        const u = wm(i, n.max);
        u !== i && (await re(), a.value = u);
      },
      { immediate: !0 }
    ), te(
      () => n.max,
      (i) => {
        const u = _m(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = B(() => kn(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return bm({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), x(s(U), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": Kr(s(a)) ? s(a) : void 0,
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
}), Cm = /* @__PURE__ */ b({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ym();
    return z(), (o, a) => {
      var r;
      return h(), x(s(U), D(t, {
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
}), km = ["default-value"], $m = /* @__PURE__ */ b({
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
        Dn(ne("select", D({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => rt(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, km), [
          [ju, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Bm = {
  key: 0,
  value: ""
}, [un, $i] = ye("SelectRoot"), [Sm, Om] = ye("SelectRoot"), Em = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Pe(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = E(), i = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: c, disabled: p, dir: m } = we(n), v = Yt(m);
    $i({
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
    const f = oa(l), g = E(/* @__PURE__ */ new Set()), w = B(() => Array.from(g.value).map((C) => {
      var k;
      return (k = C.props) == null ? void 0 : k.value;
    }).join(";"));
    return Om({
      onNativeOptionAdd: (C) => {
        g.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        g.value.delete(C);
      }
    }), (C, k) => (h(), x(s(zn), null, {
      default: y(() => [
        _(C.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(f) ? (h(), x($m, D({ key: w.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: k[0] || (k[0] = ($) => a.value = $.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), q("option", Bm)) : de("", !0),
            (h(!0), q(ke, null, st(Array.from(g.value), ($) => (h(), x(Ze($), D({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : de("", !0)
      ]),
      _: 3
    }));
  }
}), Pm = [" ", "Enter", "ArrowUp", "ArrowDown"], Am = [" ", "Enter"], mt = 10;
function Bi(e) {
  return e === "" || kn(e);
}
const Dm = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = un(), o = B(() => {
      var v;
      return ((v = n.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = z();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-select-content")), ie(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Rn(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Sr(i);
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
        var g, w, C, k;
        return [
          R(s(U), {
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
            "data-placeholder": s(Bi)((k = s(n).modelValue) == null ? void 0 : k.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: f[0] || (f[0] = ($) => {
              var A;
              (A = $ == null ? void 0 : $.currentTarget) == null || A.focus();
            }),
            onPointerdown: f[1] || (f[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const A = $.target;
              A.hasPointerCapture($.pointerId) && A.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (m($), $.preventDefault());
            }),
            onPointerup: f[2] || (f[2] = De(
              ($) => {
                $.pointerType === "touch" && m($);
              },
              ["prevent"]
            )),
            onKeydown: f[3] || (f[3] = ($) => {
              const A = s(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && A && $.key === " " || (s(d)($.key), s(Pm).includes($.key) && (p(), $.preventDefault()));
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
}), Tm = /* @__PURE__ */ b({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Wr, Im] = ye("SelectItemAlignedPosition"), Mm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Rn(), r = un(), l = dn(), i = a(), u = E(!1), d = E(!0), c = E(), { forwardRef: p, currentElement: m } = z(), { viewport: v, selectedItem: f, selectedItemText: g, focusSelectedItem: w } = l;
    function C() {
      if (r.triggerElement.value && r.valueElement.value && c.value && m.value && v != null && v.value && f != null && f.value && g != null && g.value) {
        const A = r.triggerElement.value.getBoundingClientRect(), O = m.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), S = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const H = S.left - O.left, X = P.left - H, ae = A.left - X, pe = A.width + ae, ve = Math.max(pe, O.width), J = window.innerWidth - mt, he = jo(X, mt, Math.max(mt, J - ve));
          c.value.style.minWidth = `${pe}px`, c.value.style.left = `${he}px`;
        } else {
          const H = O.right - S.right, X = window.innerWidth - P.right - H, ae = window.innerWidth - A.right - X, pe = A.width + ae, ve = Math.max(pe, O.width), J = window.innerWidth - mt, he = jo(
            X,
            mt,
            Math.max(mt, J - ve)
          );
          c.value.style.minWidth = `${pe}px`, c.value.style.right = `${he}px`;
        }
        const I = i.value, F = window.innerHeight - mt * 2, T = v.value.scrollHeight, L = window.getComputedStyle(m.value), M = Number.parseInt(
          L.borderTopWidth,
          10
        ), W = Number.parseInt(L.paddingTop, 10), j = Number.parseInt(
          L.borderBottomWidth,
          10
        ), G = Number.parseInt(
          L.paddingBottom,
          10
        ), K = M + W + T + G + j, Q = Math.min(
          f.value.offsetHeight * 5,
          K
        ), Y = window.getComputedStyle(v.value), N = Number.parseInt(Y.paddingTop, 10), ue = Number.parseInt(
          Y.paddingBottom,
          10
        ), le = A.top + A.height / 2 - mt, Ae = F - le, Me = f.value.offsetHeight / 2, Ve = f.value.offsetTop + Me, Xe = M + W + Ve, ot = K - Xe;
        if (Xe <= le) {
          const H = f.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const X = m.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, ae = Math.max(
            Ae,
            Me + (H ? ue : 0) + X + j
          ), pe = Xe + ae;
          c.value.style.height = `${pe}px`;
        } else {
          const H = f.value === I[0];
          c.value.style.top = "0px";
          const X = Math.max(
            le,
            M + v.value.offsetTop + (H ? N : 0) + Me
          ) + ot;
          c.value.style.height = `${X}px`, v.value.scrollTop = Xe - le + v.value.offsetTop;
        }
        c.value.style.margin = `${mt}px 0`, c.value.style.minHeight = `${Q}px`, c.value.style.maxHeight = `${F}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const k = E("");
    ie(async () => {
      await re(), C(), m.value && (k.value = window.getComputedStyle(m.value).zIndex);
    });
    function $(A) {
      A && d.value === !0 && (C(), w == null || w(), d.value = !1);
    }
    return Im({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: $
    }), (A, O) => (h(), q("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: it({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: k.value
      })
    }, [
      R(s(U), D({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...A.$attrs, ...n }), {
        default: y(() => [
          _(A.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Fm = /* @__PURE__ */ b({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: mt },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = je(e);
    return (n, o) => (h(), x(s(Pn), D(s(t), { style: {
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
}), jn = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [dn, Rm] = ye("SelectContent"), Lm = /* @__PURE__ */ b({
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
    Br(), po(n.bodyLock);
    const { createCollection: r } = Rn(), l = E();
    fo(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = Sr(i), c = E(), p = E(), m = E(), v = E(!1), f = E(!1);
    function g() {
      p.value && l.value && Ga([p.value, l.value]);
    }
    te(v, () => {
      g();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: C } = a;
    xe((O) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const S = (F) => {
        var T, L;
        P = {
          x: Math.abs(
            Math.round(F.pageX) - (((T = C.value) == null ? void 0 : T.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(F.pageY) - (((L = C.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (F) => {
        var T;
        F.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? F.preventDefault() : (T = l.value) != null && T.contains(F.target) || w(!1), document.removeEventListener("pointermove", S), C.value = null);
      };
      C.value !== null && (document.addEventListener("pointermove", S), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), O(() => {
        document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function k(O) {
      const P = O.ctrlKey || O.altKey || O.metaKey;
      if (O.key === "Tab" && O.preventDefault(), !P && O.key.length === 1 && d(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
        let S = i.value;
        if (["ArrowUp", "End"].includes(O.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
          const I = O.target, F = S.indexOf(I);
          S = S.slice(F + 1);
        }
        setTimeout(() => Ga(S)), O.preventDefault();
      }
    }
    const $ = B(() => n.position === "popper" ? n : {}), A = je($.value);
    return Rm({
      content: l,
      viewport: c,
      onViewportChange: (O) => {
        c.value = O;
      },
      itemRefCallback: (O, P, S) => {
        var I, F;
        const T = !f.value && !S;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || T) && (p.value = O, T && (f.value = !0));
      },
      selectedItem: p,
      selectedItemText: m,
      onItemLeave: () => {
        var O;
        (O = l.value) == null || O.focus();
      },
      itemTextRefCallback: (O, P, S) => {
        var I, F;
        const T = !f.value && !S;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((F = a.modelValue) == null ? void 0 : F.value) === P || T) && (m.value = O);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: v,
      searchRef: u
    }), (O, P) => (h(), x(s(ra), {
      "as-child": "",
      onMountAutoFocus: P[6] || (P[6] = De(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: P[7] || (P[7] = (S) => {
        var I;
        o("closeAutoFocus", S), !S.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), S.preventDefault());
      })
    }, {
      default: y(() => [
        R(s(Vn), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = De(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (S) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (S) => o("escapeKeyDown", S)),
          onPointerDownOutside: P[5] || (P[5] = (S) => o("pointerDownOutside", S))
        }, {
          default: y(() => [
            (h(), x(Ze(
              O.position === "popper" ? Fm : Mm
            ), D({ ...O.$attrs, ...s(A) }, {
              id: s(a).contentId,
              ref: (S) => {
                l.value = s(lt)(S);
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
              onContextmenu: P[0] || (P[0] = De(() => {
              }, ["prevent"])),
              onPlaced: P[1] || (P[1] = (S) => v.value = !0),
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
}), Vm = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return $i(e.context), (t, n) => _(t.$slots, "default");
  }
}), zm = { key: 1 }, qm = /* @__PURE__ */ b({
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
    const n = e, o = ce(n, t), a = un(), r = E();
    ie(() => {
      r.value = new DocumentFragment();
    });
    const l = E(), i = B(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), x(s(ut), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          R(Lm, Z(ee({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), q("div", zm, [
        (h(), x(io, { to: r.value }, [
          R(Vm, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : de("", !0);
    };
  }
}), Nm = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(U), D({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Si, jm] = ye("SelectItem"), Hm = /* @__PURE__ */ b({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = we(t), o = un(), a = dn(jn), { forwardRef: r, currentElement: l } = z(), i = B(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), c = Le(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await re(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function m(g) {
      var w;
      await re(), !g.defaultPrevented && (n.value ? (w = a.onItemLeave) == null || w.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(g) {
      var w;
      await re(), !g.defaultPrevented && g.currentTarget === qe() && ((w = a.onItemLeave) == null || w.call(a));
    }
    async function f(g) {
      var w;
      await re(), !(g.defaultPrevented || ((w = a.searchRef) == null ? void 0 : w.value) !== "" && g.key === " ") && (Am.includes(g.key) && p(), g.key === " " && g.preventDefault());
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
    }), jm({
      value: t.value,
      disabled: n,
      textId: c,
      isSelected: i,
      onItemTextChange: (g) => {
        d.value = ((d.value || (g == null ? void 0 : g.textContent)) ?? "").trim();
      }
    }), (g, w) => (h(), x(s(U), {
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
      onTouchend: w[3] || (w[3] = De(() => {
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
}), Km = /* @__PURE__ */ b({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Si();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(U), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : de("", !0);
  }
}), [Wm, Um] = ye("SelectGroup"), Gm = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Le(void 0, "radix-vue-select-group");
    return Um({ id: n }), (o, a) => (h(), x(s(U), D({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Ym = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = Wm({ id: "" });
    return (o, a) => (h(), x(s(U), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Oi = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = un(), o = dn(jn), a = Sm(), r = Si(), { forwardRef: l, currentElement: i } = z(), u = B(() => {
      var d;
      return Ge("option", {
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
    }), Tn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), q(ke, null, [
      R(s(U), D({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), x(io, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : de("", !0)
    ], 64));
  }
}), Xm = /* @__PURE__ */ b({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = we(t), o = ff(n), a = dn(jn), r = a.position === "item-aligned" ? Wr() : void 0, { forwardRef: l, currentElement: i } = z();
    ie(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = E(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: v } = r ?? {};
      if (m != null && m.value && v != null && v.value) {
        const f = Math.abs(u.value - p.scrollTop);
        if (f > 0) {
          const g = window.innerHeight - mt * 2, w = Number.parseFloat(
            v.value.style.minHeight
          ), C = Number.parseFloat(v.value.style.height), k = Math.max(w, C);
          if (k < g) {
            const $ = k + f, A = Math.min(g, $), O = $ - A;
            v.value.style.height = `${A}px`, v.value.style.bottom === "0px" && (p.scrollTop = O > 0 ? O : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), q(ke, null, [
      R(s(U), D({
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
      R(s(U), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          _e(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Ei = /* @__PURE__ */ b({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Rn(), a = o(), r = dn(jn), l = E(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    xe(() => {
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
      return h(), x(s(U), D({
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
}), Zm = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = dn(jn), n = t.position === "item-aligned" ? Wr() : void 0, { forwardRef: o, currentElement: a } = z(), r = E(!1);
    return xe((l) => {
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
    }), (l, i) => r.value ? (h(), x(Ei, {
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
    }, 512)) : de("", !0);
  }
}), Qm = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = dn(jn), n = t.position === "item-aligned" ? Wr() : void 0, { forwardRef: o, currentElement: a } = z(), r = E(!1);
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
    }), te(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (l, i) => r.value ? (h(), x(Ei, {
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
    }, 512)) : de("", !0);
  }
}), Jm = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = z(), o = un(), a = Go();
    return vl(() => {
      var r;
      const l = !!ta((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), ie(() => {
      o.valueElement = n;
    }), (r, l) => (h(), x(s(U), {
      ref: s(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          s(Bi)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), q(ke, { key: 0 }, [
            _e(Se(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ev = /* @__PURE__ */ b({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), x(s(U), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        _(t.$slots, "default", {}, () => [
          _e("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function tv(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function Pi(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return jo(o, 0, 100);
}
function nv(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function ov(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function av(e, t, n) {
  const o = e / 2, a = Ur([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function rv(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function sv(e, t) {
  if (t > 0) {
    const n = rv(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Ur(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function lv(e) {
  return (String(e).split(".")[1] || "").length;
}
function iv(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const Ai = ["PageUp", "PageDown"], Di = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ti = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [Ii, Mi] = ye(["SliderVertical", "SliderHorizontal"]), Fi = /* @__PURE__ */ b({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ua();
    return (r, l) => (h(), x(s(U), D({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(Ai).concat(s(Di)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), uv = /* @__PURE__ */ b({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = we(n), { forwardRef: u, currentElement: d } = z(), c = E(), p = B(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function m(v) {
      const f = c.value || d.value.getBoundingClientRect(), g = [0, f.width], w = p.value ? [r.value, a.value] : [a.value, r.value], C = Ur(g, w);
      return c.value = f, C(v - f.left);
    }
    return Mi({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v, f) => (h(), x(Fi, {
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
        const w = p.value ? "from-left" : "from-right", C = s(Ti)[w].includes(g.key);
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
}), dv = /* @__PURE__ */ b({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = we(n), { forwardRef: i, currentElement: u } = z(), d = E(), c = B(() => !l.value);
    function p(m) {
      const v = d.value || u.value.getBoundingClientRect(), f = [0, v.height], g = c.value ? [a.value, r.value] : [r.value, a.value], w = Ur(f, g);
      return d.value = v, w(m - v.top);
    }
    return Mi({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (m, v) => (h(), x(Fi, {
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
        const g = c.value ? "from-bottom" : "from-top", w = s(Ti)[g].includes(f.key);
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
}), cv = ["value", "name", "disabled", "step"], [ua, pv] = ye("SliderRoot"), fv = /* @__PURE__ */ b({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = we(n), p = Yt(c), { forwardRef: m, currentElement: v } = z(), f = oa(v);
    Vr();
    const g = Pe(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), w = E(0), C = E(g.value);
    function k(S) {
      const I = ov(g.value, S);
      O(S, I);
    }
    function $(S) {
      O(S, w.value);
    }
    function A() {
      const S = C.value[w.value];
      g.value[w.value] !== S && o("valueCommit", Hu(g.value));
    }
    function O(S, I, { commit: F } = { commit: !1 }) {
      var T;
      const L = lv(l.value), M = iv(Math.round((S - a.value) / l.value) * l.value + a.value, L), W = jo(M, a.value, r.value), j = tv(g.value, W, I);
      if (sv(j, i.value * l.value)) {
        w.value = j.indexOf(W);
        const G = String(j) !== String(g.value);
        G && F && o("valueCommit", j), G && ((T = P.value[w.value]) == null || T.focus(), g.value = j);
      }
    }
    const P = E([]);
    return pv({
      modelValue: g,
      valueIndexToChangeRef: w,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (S, I) => (h(), q(ke, null, [
      R(s(zr), null, {
        default: y(() => [
          (h(), x(Ze(s(u) === "horizontal" ? uv : dv), D(S.$attrs, {
            ref: s(m),
            "as-child": S.asChild,
            as: S.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: S.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (C.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (F) => !s(d) && k(F)),
            onSlideMove: I[2] || (I[2] = (F) => !s(d) && $(F)),
            onSlideEnd: I[3] || (I[3] = (F) => !s(d) && A()),
            onHomeKeyDown: I[4] || (I[4] = (F) => !s(d) && O(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (F) => !s(d) && O(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (F, T) => {
              if (!s(d)) {
                const L = s(Ai).includes(F.key) || F.shiftKey && s(Di).includes(F.key) ? 10 : 1, M = w.value, W = s(g)[M], j = s(l) * L * T;
                O(W + j, M, { commit: !0 });
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
      s(f) ? (h(!0), q(ke, { key: 0 }, st(s(g), (F, T) => (h(), q("input", {
        key: T,
        value: F,
        type: "number",
        style: { display: "none" },
        name: S.name ? S.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, cv))), 128)) : de("", !0)
    ], 64));
  }
}), mv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ua(), o = Ii(), { forwardRef: a, currentElement: r } = z(), l = B(() => {
      var v, f;
      return (f = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : f[t.index];
    }), i = B(() => l.value === void 0 ? 0 : Pi(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = B(() => {
      var v, f;
      return nv(t.index, ((f = (v = n.modelValue) == null ? void 0 : v.value) == null ? void 0 : f.length) ?? 0);
    }), d = oi(r), c = B(() => d[o.size].value), p = B(() => c.value ? av(c.value, i.value, o.direction) : 0), m = $r();
    return ie(() => {
      n.thumbElements.value.push(r.value);
    }), Ne(() => {
      const v = n.thumbElements.value.findIndex((f) => f === r.value) ?? -1;
      n.thumbElements.value.splice(v, 1);
    }), (v, f) => (h(), x(s(ia), null, {
      default: y(() => [
        R(s(U), D(v.$attrs, {
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
}), vv = /* @__PURE__ */ b({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = qr(), { forwardRef: o, currentElement: a } = z(), r = B(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), x(mv, D({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), gv = /* @__PURE__ */ b({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ua();
    return z(), (n, o) => (h(), x(s(U), {
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
}), hv = /* @__PURE__ */ b({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ua(), n = Ii();
    z();
    const o = B(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => Pi(u, t.min.value, t.max.value)
      );
    }), a = B(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = B(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), x(s(U), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: it({
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
function yv() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
yv();
const bv = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [wv, _v] = ye("SwitchRoot"), xv = /* @__PURE__ */ b({
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
    const n = e, o = t, { disabled: a } = we(n), r = Pe(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = z(), d = oa(u), c = B(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return _v({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, m) => (h(), q(ke, null, [
      R(s(U), D(p.$attrs, {
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
        onKeydown: Je(De(l, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          _(p.$slots, "default", { checked: s(r) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      s(d) ? (h(), q("input", {
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
      }, null, 8, bv)) : de("", !0)
    ], 64));
  }
}), Cv = /* @__PURE__ */ b({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = wv();
    return z(), (n, o) => {
      var a;
      return h(), x(s(U), {
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
}), [Gr, kv] = ye("TabsRoot"), $v = /* @__PURE__ */ b({
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
    z();
    const i = Pe(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = E();
    return kv({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
      baseId: Le(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (h(), x(s(U), {
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
}), Bv = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = we(t), { forwardRef: o, currentElement: a } = z(), r = Gr();
    return r.tabsList = a, (l, i) => (h(), x(s(hi), {
      "as-child": "",
      orientation: s(r).orientation.value,
      dir: s(r).dir.value,
      loop: s(n)
    }, {
      default: y(() => [
        R(s(U), {
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
function Ri(e, t) {
  return `${e}-trigger-${t}`;
}
function Li(e, t) {
  return `${e}-content-${t}`;
}
const Sv = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = z(), o = Gr(), a = B(() => Ri(o.baseId, t.value)), r = B(() => Li(o.baseId, t.value)), l = B(() => t.value === o.modelValue.value), i = E(l.value);
    return ie(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), x(s(ut), {
      present: l.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        R(s(U), {
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
          style: it({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || l.value ? _(u.$slots, "default", { key: 0 }) : de("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ov = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = z(), o = Gr(), a = B(() => Ri(o.baseId, t.value)), r = B(() => Li(o.baseId, t.value)), l = B(() => t.value === o.modelValue.value);
    return (i, u) => (h(), x(s(Pf), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: y(() => [
        R(s(U), {
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
          onMousedown: u[0] || (u[0] = De((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = Je((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
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
}), [da, Ev] = ye("ToastProvider"), Pv = /* @__PURE__ */ b({
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
    return Ev({
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
}), Av = "toast.swipeStart", Dv = "toast.swipeMove", Tv = "toast.swipeCancel", Iv = "toast.swipeEnd", Xa = "toast.viewportPause", Za = "toast.viewportResume";
function So(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Ms(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Mv(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Vi(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Mv(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Vi(n));
    }
  }), t;
}
const Fv = /* @__PURE__ */ b({
  __name: "ToastAnnounce",
  setup(e) {
    const t = da(), n = yc(1e3), o = E(!1);
    return Ql(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), x(s(vo), { key: 0 }, {
      default: y(() => [
        _e(Se(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : de("", !0);
  }
}), [Rv, Lv] = ye("ToastRoot"), Vv = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = z(), l = da(), i = E(null), u = E(null), d = B(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = E(0), p = E(d.value), m = E(0), v = E(d.value), f = Ql(() => {
      const k = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(p.value - k, 0);
    }, { fpsLimit: 60 });
    function g(k) {
      k <= 0 || k === Number.POSITIVE_INFINITY || kt && (window.clearTimeout(m.value), c.value = (/* @__PURE__ */ new Date()).getTime(), m.value = window.setTimeout(w, k));
    }
    function w() {
      var k, $;
      (k = r.value) != null && k.contains(qe()) && (($ = l.viewport.value) == null || $.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const C = B(() => r.value ? Vi(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const k = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(k);
    }
    return xe((k) => {
      const $ = l.viewport.value;
      if ($) {
        const A = () => {
          g(p.value), f.resume(), o("resume");
        }, O = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - P, window.clearTimeout(m.value), f.pause(), o("pause");
        };
        return $.addEventListener(Xa, O), $.addEventListener(Za, A), () => {
          $.removeEventListener(Xa, O), $.removeEventListener(Za, A);
        };
      }
    }), te(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), kr("Escape", (k) => {
      o("escapeKeyDown", k), k.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, w());
    }), ie(() => {
      l.onToastAdd();
    }), Ne(() => {
      l.onToastRemove();
    }), Lv({ onClose: w }), (k, $) => (h(), q(ke, null, [
      C.value ? (h(), x(Fv, {
        key: 0,
        role: "alert",
        "aria-live": k.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          _e(Se(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : de("", !0),
      s(l).viewport.value ? (h(), x(io, {
        key: 1,
        to: s(l).viewport.value
      }, [
        R(s(U), D({
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
          onPointerdown: $[0] || ($[0] = De((A) => {
            i.value = { x: A.clientX, y: A.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (A) => {
            if (!i.value) return;
            const O = A.clientX - i.value.x, P = A.clientY - i.value.y, S = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), F = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, T = I ? F(0, O) : 0, L = I ? 0 : F(0, P), M = A.pointerType === "touch" ? 10 : 2, W = { x: T, y: L }, j = { originalEvent: A, delta: W };
            S ? (u.value = W, s(So)(s(Dv), (G) => o("swipeMove", G), j)) : s(Ms)(W, s(l).swipeDirection.value, M) ? (u.value = W, s(So)(s(Av), (G) => o("swipeStart", G), j), A.target.setPointerCapture(A.pointerId)) : (Math.abs(O) > M || Math.abs(P) > M) && (i.value = null);
          }),
          onPointerup: $[2] || ($[2] = (A) => {
            const O = u.value, P = A.target;
            if (P.hasPointerCapture(A.pointerId) && P.releasePointerCapture(A.pointerId), u.value = null, i.value = null, O) {
              const S = A.currentTarget, I = { originalEvent: A, delta: O };
              s(Ms)(O, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(So)(s(Iv), (F) => o("swipeEnd", F), I) : s(So)(s(Tv), (F) => o("swipeCancel", F), I), S == null || S.addEventListener("click", (F) => F.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(k.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : de("", !0)
    ], 64));
  }
}), zv = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a } = z(), r = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), x(s(ut), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        R(Vv, D({
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
}), zi = /* @__PURE__ */ b({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    return (t, n) => (h(), x(s(U), {
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
}), qi = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Rv(), { forwardRef: o } = z();
    return (a, r) => (h(), x(zi, { "as-child": "" }, {
      default: y(() => [
        R(s(U), D(t, {
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
}), qv = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    if (!e.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: t } = z();
    return (n, o) => n.altText ? (h(), x(zi, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        R(qi, {
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
    }, 8, ["alt-text"])) : de("", !0);
  }
}), Fs = /* @__PURE__ */ b({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = da();
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
}), Nv = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = we(t), { forwardRef: a, currentElement: r } = z(), { createCollection: l } = Rn(), i = l(r), u = da(), d = B(() => u.toastCount.value > 0), c = E(), p = E(), m = B(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    kr(n.value, () => {
      r.value.focus();
    }), ie(() => {
      u.onViewportChange(r.value);
    }), xe((f) => {
      const g = r.value;
      if (d.value && g) {
        const w = () => {
          if (!u.isClosePausedRef.value) {
            const O = new CustomEvent(Xa);
            g.dispatchEvent(O), u.isClosePausedRef.value = !0;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const O = new CustomEvent(Za);
            g.dispatchEvent(O), u.isClosePausedRef.value = !1;
          }
        }, k = (O) => {
          !g.contains(O.relatedTarget) && C();
        }, $ = () => {
          g.contains(qe()) || C();
        }, A = (O) => {
          var P, S, I;
          const F = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !F) {
            const T = qe(), L = O.shiftKey;
            if (O.target === g && L) {
              (P = c.value) == null || P.focus();
              return;
            }
            const M = v({ tabbingDirection: L ? "backwards" : "forwards" }), W = M.findIndex((j) => j === T);
            Fo(M.slice(W + 1)) ? O.preventDefault() : L ? (S = c.value) == null || S.focus() : (I = p.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", w), g.addEventListener("focusout", k), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", $), g.addEventListener("keydown", A), window.addEventListener("blur", w), window.addEventListener("focus", C), f(() => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", $), g.removeEventListener("keydown", A), window.removeEventListener("blur", w), window.removeEventListener("focus", C);
        });
      }
    });
    function v({ tabbingDirection: f }) {
      const g = i.value.map((w) => {
        const C = [w, ...Tr(w)];
        return f === "forwards" ? C : C.reverse();
      });
      return (f === "forwards" ? g.reverse() : g).flat();
    }
    return (f, g) => (h(), x(s(fp), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", m.value) : s(o)(m.value),
      tabindex: "-1",
      style: it({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), x(Fs, {
          key: 0,
          ref: (w) => {
            c.value = s(lt)(w);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const w = v({
              tabbingDirection: "forwards"
            });
            s(Fo)(w);
          })
        }, null, 512)) : de("", !0),
        R(s(U), D({
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
        d.value ? (h(), x(Fs, {
          key: 1,
          ref: (w) => {
            p.value = s(lt)(w);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const w = v({
              tabbingDirection: "backwards"
            });
            s(Fo)(w);
          })
        }, null, 512)) : de("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), jv = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(U), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hv = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return z(), (n, o) => (h(), x(s(U), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ni = "tooltip.open", [Yr, Kv] = ye("TooltipProvider"), Wv = /* @__PURE__ */ b({
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
    z();
    const u = E(!0), d = E(!1), { start: c, stop: p } = Cr(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return Kv({
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
}), [ca, Uv] = ye("TooltipRoot"), Gv = /* @__PURE__ */ b({
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
    z();
    const a = Yr(), r = B(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = B(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = B(() => n.disabled ?? a.disabled.value), u = B(() => n.delayDuration ?? a.delayDuration.value), d = B(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = Pe(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    te(c, ($) => {
      a.onClose && ($ ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Ni))) : a.onClose());
    });
    const p = E(!1), m = E(), v = B(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: f, stop: g } = Cr(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function w() {
      g(), p.value = !1, c.value = !0;
    }
    function C() {
      g(), c.value = !1;
    }
    function k() {
      f();
    }
    return Uv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: m,
      onTriggerChange($) {
        m.value = $;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? k() : w();
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
    }), ($, A) => (h(), x(s(zn), null, {
      default: y(() => [
        _($.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), Yv = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ca(), o = Yr();
    n.contentId || (n.contentId = Le(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = z(), l = E(!1), i = E(!1), u = B(() => n.disabled.value ? {} : {
      click: g,
      focus: v,
      pointermove: p,
      pointerleave: m,
      pointerdown: c,
      blur: f
    });
    ie(() => {
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
      var C, k;
      l.value || n.ignoreNonKeyboardFocus.value && !((k = (C = w.target).matches) != null && k.call(C, ":focus-visible")) || n.onOpen();
    }
    function f() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (w, C) => (h(), x(s(mo), { "as-child": "" }, {
      default: y(() => [
        R(s(U), D({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: w.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, zu(u.value)), {
          default: y(() => [
            _(w.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), ji = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ca(), { forwardRef: r } = z(), l = Go(), i = B(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = B(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function m(v) {
        typeof v.children == "string" && v.type !== dr ? p += v.children : Array.isArray(v.children) && v.children.forEach((f) => m(f));
      }
      return (c = i.value) == null || c.forEach((v) => m(v)), p;
    }), d = B(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return ie(() => {
      En(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), En(window, Ni, a.onClose);
    }), (c, p) => (h(), x(s(Vn), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (m) => o("escapeKeyDown", m)),
      onPointerDownOutside: p[1] || (p[1] = (m) => {
        var v;
        s(a).disableClosingTrigger.value && (v = s(a).trigger.value) != null && v.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
      }),
      onFocusOutside: p[2] || (p[2] = De(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (m) => s(a).onClose())
    }, {
      default: y(() => [
        R(s(Pn), D({
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
            R(s(vo), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                _e(Se(u.value), 1)
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
}), Xv = /* @__PURE__ */ b({
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
    const t = je(e), { forwardRef: n, currentElement: o } = z(), { trigger: a, onClose: r } = ca(), l = Yr(), { isPointerInTransit: i, onPointerExit: u } = Ac(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), x(ji, D({ ref: s(n) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ b({
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
    const n = e, o = t, a = ca(), r = ce(n, o), { forwardRef: l } = z();
    return (i, u) => (h(), x(s(ut), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), x(Ze(s(a).disableHoverableContent.value ? ji : Xv), D({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Qv = /* @__PURE__ */ b({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ln), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Hi(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Hi(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ki() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Hi(e)) && (o && (o += " "), o += t);
  return o;
}
const Xr = "-", Jv = (e) => {
  const t = tg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Xr);
      return i[0] === "" && i.length !== 1 && i.shift(), Wi(i, t) || eg(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, Wi = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? Wi(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Xr);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, Rs = /^\[(.+)\]$/, eg = (e) => {
  if (Rs.test(e)) {
    const t = Rs.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tg = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return og(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Qa(l, o, r, t);
  }), o;
}, Qa = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : Ls(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (ng(a)) {
        Qa(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Qa(l, Ls(t, r), n, o);
    });
  });
}, Ls = (e, t) => {
  let n = e;
  return t.split(Xr).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, ng = (e) => e.isThemeGetter, og = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, ag = (e) => {
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
}, Ui = "!", rg = (e) => {
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
    const m = u.length === 0 ? i : i.substring(c), v = m.startsWith(Ui), f = v ? m.substring(1) : m, g = p && p > c ? p - c : void 0;
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
}, sg = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, lg = (e) => ({
  cache: ag(e.cacheSize),
  parseClassName: rg(e),
  ...Jv(e)
}), ig = /\s+/, ug = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(ig);
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
    const w = sg(c).join(":"), C = p ? w + Ui : w, k = C + g;
    if (r.includes(k))
      continue;
    r.push(k);
    const $ = a(g, f);
    for (let A = 0; A < $.length; ++A) {
      const O = $[A];
      r.push(C + O);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function dg() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Gi(t)) && (o && (o += " "), o += n);
  return o;
}
const Gi = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Gi(e[o])) && (n && (n += " "), n += t);
  return n;
};
function cg(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = lg(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = ug(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(dg.apply(null, arguments));
  };
}
const Ee = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Yi = /^\[(?:([a-z-]+):)?(.+)\]$/i, pg = /^\d+\/\d+$/, fg = /* @__PURE__ */ new Set(["px", "full", "screen"]), mg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Dt = (e) => $n(e) || fg.has(e) || pg.test(e), qt = (e) => Hn(e, "length", Bg), $n = (e) => !!e && !Number.isNaN(Number(e)), Aa = (e) => Hn(e, "number", $n), Gn = (e) => !!e && Number.isInteger(Number(e)), bg = (e) => e.endsWith("%") && $n(e.slice(0, -1)), me = (e) => Yi.test(e), Nt = (e) => mg.test(e), wg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), _g = (e) => Hn(e, wg, Xi), xg = (e) => Hn(e, "position", Xi), Cg = /* @__PURE__ */ new Set(["image", "url"]), kg = (e) => Hn(e, Cg, Og), $g = (e) => Hn(e, "", Sg), Yn = () => !0, Hn = (e, t, n) => {
  const o = Yi.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, Bg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vg.test(e) && !gg.test(e)
), Xi = () => !1, Sg = (e) => hg.test(e), Og = (e) => yg.test(e), Eg = () => {
  const e = Ee("colors"), t = Ee("spacing"), n = Ee("blur"), o = Ee("brightness"), a = Ee("borderColor"), r = Ee("borderRadius"), l = Ee("borderSpacing"), i = Ee("borderWidth"), u = Ee("contrast"), d = Ee("grayscale"), c = Ee("hueRotate"), p = Ee("invert"), m = Ee("gap"), v = Ee("gradientColorStops"), f = Ee("gradientColorStopPositions"), g = Ee("inset"), w = Ee("margin"), C = Ee("opacity"), k = Ee("padding"), $ = Ee("saturate"), A = Ee("scale"), O = Ee("sepia"), P = Ee("skew"), S = Ee("space"), I = Ee("translate"), F = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", me, t], M = () => [me, t], W = () => ["", Dt, qt], j = () => ["auto", $n, me], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", me], ue = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], le = () => [$n, me];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Yn],
      spacing: [Dt, qt],
      blur: ["none", "", Nt, me],
      brightness: le(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nt, me],
      borderSpacing: M(),
      borderWidth: W(),
      contrast: le(),
      grayscale: N(),
      hueRotate: le(),
      invert: N(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bg, qt],
      inset: L(),
      margin: L(),
      opacity: le(),
      padding: M(),
      saturate: le(),
      scale: le(),
      sepia: N(),
      skew: le(),
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
        aspect: ["auto", "square", "video", me]
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
        columns: [Nt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ue()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ue()
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
        object: [...G(), me]
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
        z: ["auto", Gn, me]
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
        flex: ["1", "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Gn, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Yn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Gn, me]
        }, me]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Yn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Gn, me]
        }, me]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
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
        "auto-cols": ["auto", "min", "max", "fr", me]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", me]
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
        justify: ["normal", ...Y()]
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
        content: ["normal", ...Y(), "baseline"]
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
        "place-content": [...Y(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", me, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [me, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [me, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Nt]
        }, Nt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [me, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [me, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [me, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Nt, qt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Aa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $n, Aa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dt, me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", me]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", me]
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
        decoration: ["auto", "from-font", Dt, qt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Dt, me]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me]
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
        content: ["none", me]
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
        bg: [...G(), xg]
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
        bg: ["auto", "cover", "contain", _g]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kg]
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
        border: [...K(), "hidden"]
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
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Dt, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Dt, qt]
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
        ring: W()
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
        "ring-offset": [Dt, qt]
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
        shadow: ["", "inner", "none", Nt, $g]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Yn]
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
        "mix-blend": [...Q(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
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
        "drop-shadow": ["", "none", Nt, me]
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
        "backdrop-saturate": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", me]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: le()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: le()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", me]
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
        rotate: [Gn, me]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", me]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me]
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
        "will-change": ["auto", "scroll", "contents", "transform", me]
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
        stroke: [Dt, qt, Aa]
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
}, Pg = /* @__PURE__ */ cg(Eg);
function V(...e) {
  return Pg(Ki(e));
}
function __(e, t) {
  t.value = typeof e == "function" ? e(t.value) : e;
}
function x_(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = In(o, l);
    if (i || i === null) return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`
    );
  }, (l) => (Mn(o, l), l)];
}
const Ag = /* @__PURE__ */ b({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Tp), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), C_ = /* @__PURE__ */ b({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ip), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dg = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Mp), null, {
      default: y(() => [
        R(s(Vp), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(Lp), D(s(r), {
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
}), Tg = /* @__PURE__ */ b({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ig = /* @__PURE__ */ b({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(qp), D(n.value, {
      class: s(V)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mg = /* @__PURE__ */ b({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Np), D(n.value, {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fg = /* @__PURE__ */ b({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Vs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, zs = Ki, ho = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return zs(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const m = Vs(c) || Vs(p);
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
  return zs(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Zi = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(U), {
      as: e.as,
      "as-child": e.asChild,
      class: se(s(V)(s(Zt)({ variant: e.variant, size: e.size }), t.class))
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
), Rg = /* @__PURE__ */ b({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(jp), D(n.value, {
      class: s(V)(s(Zt)({ variant: e.variant }), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lg = /* @__PURE__ */ b({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(zp), D(n.value, {
      class: s(V)(s(Zt)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), k_ = /* @__PURE__ */ b({
  __name: "ConfirmDialog",
  setup(e) {
    const { isOpen: t, close: n, cancelButton: o, actionButton: a, title: r, description: l, variant: i } = qg();
    return (u, d) => (h(), x(s(Ag), { open: s(t) }, {
      default: y(() => [
        R(s(Dg), {
          onClose: s(n),
          onEscapeKeyDown: s(n),
          onPointerDownOutside: s(n)
        }, {
          default: y(() => [
            R(s(Tg), null, {
              default: y(() => [
                R(s(Ig), null, {
                  default: y(() => [
                    _e(Se(s(r)), 1)
                  ]),
                  _: 1
                }),
                R(s(Mg), null, {
                  default: y(() => [
                    _e(Se(s(l)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            R(s(Fg), null, {
              default: y(() => [
                R(s(Lg), {
                  onClick: s(o).handler
                }, {
                  default: y(() => [
                    _e(Se(s(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                R(s(Rg), {
                  variant: s(i),
                  onClick: s(a).handler
                }, {
                  default: y(() => [
                    _e(Se(s(a).label ?? "Confirm"), 1)
                  ]),
                  _: 1
                }, 8, ["variant", "onClick"])
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
}), Zr = E(!1), Qi = E(""), Ji = E(""), eu = E(null), tu = E({
  label: void 0,
  handler: () => {
  }
}), nu = E({
  label: void 0,
  handler: () => {
  }
}), Vg = (e) => {
  Qi.value = e.title, Ji.value = e.description, eu.value = e.variant, tu.value = qs(e.cancelAction), nu.value = qs(e.action), zg();
}, qs = (e) => typeof e == "string" ? {
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
  Zr.value = !1;
}, zg = () => {
  Zr.value = !0;
};
function qg() {
  return {
    confirmDialog: (e) => Vg(e),
    title: Qi,
    description: Ji,
    variant: eu,
    isOpen: Zr,
    close: Ro,
    cancelButton: tu,
    actionButton: nu
  };
}
const Kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, Ng = {}, jg = { class: "h-full bg-background dark:text-white" };
function Hg(e, t) {
  return h(), q("div", jg, [
    _(e.$slots, "default")
  ]);
}
const $_ = /* @__PURE__ */ Kn(Ng, [["render", Hg]]), Kg = {}, Wg = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Ug(e, t) {
  return h(), q("header", Wg, [
    _(e.$slots, "default")
  ]);
}
const B_ = /* @__PURE__ */ Kn(Kg, [["render", Ug]]), Gg = {}, Yg = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function Xg(e, t) {
  return h(), q("main", Yg, [
    _(e.$slots, "default")
  ]);
}
const S_ = /* @__PURE__ */ Kn(Gg, [["render", Xg]]), Zg = {};
function Qg(e, t) {
  return _(e.$slots, "default");
}
const O_ = /* @__PURE__ */ Kn(Zg, [["render", Qg]]), Jg = {}, eh = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, th = { class: "gap-y-5 overflow-y-auto" };
function nh(e, t) {
  return h(), q("div", eh, [
    ne("div", th, [
      _(e.$slots, "default")
    ])
  ]);
}
const E_ = /* @__PURE__ */ Kn(Jg, [["render", nh]]), oh = {};
function ah(e, t) {
  return _(e.$slots, "default");
}
const P_ = /* @__PURE__ */ Kn(oh, [["render", ah]]);
function rh(e, t) {
  return h(), q("svg", {
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
function sh(e, t) {
  return h(), q("svg", {
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
function Ns(e, t) {
  return h(), q("svg", {
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
function lh(e, t) {
  return h(), q("svg", {
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
const ih = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, A_ = /* @__PURE__ */ b({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), q("button", ih, [
      n[0] || (n[0] = ne("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(s(rh), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), uh = 3, dh = 1e6, It = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Da = 0;
function ch() {
  return Da = (Da + 1) % Number.MAX_VALUE, Da.toString();
}
const Ta = /* @__PURE__ */ new Map();
function js(e) {
  if (Ta.has(e)) return;
  const t = setTimeout(() => {
    Ta.delete(e), Qn({
      type: It.REMOVE_TOAST,
      toastId: e
    });
  }, dh);
  Ta.set(e, t);
}
const pt = E({
  toasts: []
});
function Qn(e) {
  switch (e.type) {
    case It.ADD_TOAST:
      pt.value.toasts = [e.toast, ...pt.value.toasts].slice(0, uh);
      break;
    case It.UPDATE_TOAST:
      pt.value.toasts = pt.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case It.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? js(t) : pt.value.toasts.forEach((n) => {
        js(n.id);
      }), pt.value.toasts = pt.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case It.REMOVE_TOAST:
      e.toastId === void 0 ? pt.value.toasts = [] : pt.value.toasts = pt.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function ou() {
  return {
    toasts: B(() => pt.value.toasts),
    toast: ph,
    dismiss: (e) => Qn({ type: It.DISMISS_TOAST, toastId: e })
  };
}
function ph(e) {
  const t = ch(), n = (a) => Qn({
    type: It.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => Qn({ type: It.DISMISS_TOAST, toastId: t });
  return Qn({
    type: It.ADD_TOAST,
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
const fh = { class: "flex items-start space-x-3" }, mh = ["src", "alt"], vh = { class: "grid gap-1" }, gh = { class: "font-bold" }, hh = /* @__PURE__ */ b({
  __name: "Toaster",
  props: {
    position: {}
  },
  emits: ["click"],
  setup(e) {
    const { toasts: t } = ou();
    return (n, o) => (h(), x(s(Eh), null, {
      default: y(() => [
        (h(!0), q(ke, null, st(s(t), (a) => (h(), x(s(yh), D({
          key: a.id
        }, { ref_for: !0 }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            ne("div", fh, [
              a.icon ? (h(), q(ke, { key: 0 }, [
                typeof a.icon == "string" ? (h(), q("img", {
                  key: 0,
                  src: a.icon,
                  class: se(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, mh)) : (h(), x(Ze(a.icon), {
                  key: 1,
                  class: se(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : de("", !0),
              ne("div", vh, [
                a.title ? (h(), x(s(Oh), { key: 0 }, {
                  default: y(() => [
                    _e(Se(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : de("", !0),
                a.description ? (h(), q(ke, { key: 1 }, [
                  Ku(a.description) ? (h(), x(s(Hs), { key: 0 }, {
                    default: y(() => [
                      (h(), x(Ze(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), q(ke, { key: 1 }, st(a.description, (r, l) => (h(), q("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), q(ke, { key: 0 }, [
                      _e(Se(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), q(ke, { key: 1 }, [
                      ne("span", gh, Se(l), 1),
                      _e(": " + Se(r), 1)
                    ], 64)) : (h(), q(ke, { key: 2 }, [
                      _e(Se(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), x(s(Hs), { key: 2 }, {
                    default: y(() => [
                      _e(Se(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : de("", !0),
                R(s(Sh))
              ])
            ]),
            (h(), x(Ze(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        R(s(bh), { position: e.position }, null, 8, ["position"])
      ]),
      _: 1
    }));
  }
}), yh = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(zv), D(s(r), {
      class: s(V)(s(Ph)({ variant: e.variant }), n.class),
      "onUpdate:open": e.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), bh = /* @__PURE__ */ b({
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
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = B(() => {
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
    return (a, r) => (h(), x(s(Nv), D(n.value, {
      class: s(V)(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        "fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]",
        o.value,
        t.class
      )
    }), null, 16, ["class"]));
  }
}), D_ = /* @__PURE__ */ b({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(qv), D(n.value, {
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
function wh(e, t) {
  return h(), q("svg", {
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
function _h(e, t) {
  return h(), q("svg", {
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
function xh(e, t) {
  return h(), q("svg", {
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
function au(e, t) {
  return h(), q("svg", {
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
function ru(e, t) {
  return h(), q("svg", {
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
function Ch(e, t) {
  return h(), q("svg", {
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
function kh(e, t) {
  return h(), q("svg", {
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
function pa(e, t) {
  return h(), q("svg", {
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
function $h(e, t) {
  return h(), q("svg", {
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
function Bh(e, t) {
  return h(), q("svg", {
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
const Sh = /* @__PURE__ */ b({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(qi), D(n.value, {
      class: s(V)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        R(s(pa), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Oh = /* @__PURE__ */ b({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(jv), D(n.value, {
      class: s(V)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hs = /* @__PURE__ */ b({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Hv), D({
      class: s(V)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eh = /* @__PURE__ */ b({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Pv), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ph = ho(
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
), { toast: Oo } = ou();
function Ah() {
  return {
    info: (e) => {
      Oo({
        icon: lh,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Oo({
        icon: sh,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Oo({
        icon: Ns,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Oo({
        icon: Ns,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const T_ = /* @__PURE__ */ b({
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
    } = Ah();
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
    ), (l, i) => (h(), x(s(hh)));
  }
}), Dh = { class: "flex items-center justify-between space-y-2" }, Th = { class: "flex items-center space-x-2" }, I_ = /* @__PURE__ */ b({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", Dh, [
      (h(), x(Ze(e.as), {
        class: se(s(V)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      ne("div", Th, [
        _(n.$slots, "actions")
      ])
    ]));
  }
}), Ih = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(np), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M_ = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(Ih, Z(ee(s(a))), {
      default: y(() => [
        (h(!0), q(ke, null, st(e.content, (i, u) => (h(), x(s(Fh), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            R(s(Rh), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  _e(Se(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            R(s(Mh), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  _e(Se(i.content), 1)
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
}), Mh = /* @__PURE__ */ b({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(rp), D(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        ne("div", {
          class: se(s(V)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Fh = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(ap), D(s(o), {
      class: s(V)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rh = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(sp), { class: "flex" }, {
      default: y(() => [
        R(s(lp), D(n.value, {
          class: s(V)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              R(s(ru), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), F_ = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(zh), null, {
      default: y(() => [
        R(s(Lh), Z(ee(s(a))), {
          default: y(() => [
            R(s(qh), {
              class: se(e.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(s(Vh), Z(ee(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  _e(Se(e.tooltip), 1)
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
}), Lh = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Gv), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vh = /* @__PURE__ */ b({
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
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Qv), null, {
      default: y(() => [
        R(s(Zv), D({ ...s(r), ...l.$attrs }, {
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
}), zh = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(Wv), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qh = /* @__PURE__ */ b({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Yv), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R_ = /* @__PURE__ */ b({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Kp), {
      class: se(s(V)(s(Nh)({ size: e.size, shape: e.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), L_ = /* @__PURE__ */ b({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Up), D(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), V_ = /* @__PURE__ */ b({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Gp), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nh = ho(
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
), z_ = /* @__PURE__ */ b({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)(s(jh)({ variant: e.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), jh = ho(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        success: "border-transparent bg-success text-success-foreground shadow hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground shadow hover:bg-warning/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), q_ = /* @__PURE__ */ b({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), N_ = /* @__PURE__ */ b({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), j_ = /* @__PURE__ */ b({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("p", {
      class: se(s(V)("text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), H_ = /* @__PURE__ */ b({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex items-center p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), K_ = /* @__PURE__ */ b({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), W_ = /* @__PURE__ */ b({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("h3", {
      class: se(s(V)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
var Ks;
const Hh = typeof window < "u", Kh = (e) => typeof e < "u", Wh = (e) => typeof e == "function";
Hh && ((Ks = window == null ? void 0 : window.navigator) != null && Ks.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Uh(e) {
  return e;
}
function Gh(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return Mn(t, r), r;
  }, () => In(t)];
}
function Yh(e) {
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
function Xh(e) {
  return Yh(B(e));
}
function Ke(e, ...t) {
  const n = t.flat();
  return Xh(() => Object.fromEntries(Object.entries(we(e)).filter((o) => !n.includes(o[0]))));
}
function Zh(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Us = "__vueuse_ssr_handlers__";
Ws[Us] = Ws[Us] || {};
var Gs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Gs || (Gs = {}));
var Qh = Object.defineProperty, Ys = Object.getOwnPropertySymbols, Jh = Object.prototype.hasOwnProperty, ey = Object.prototype.propertyIsEnumerable, Xs = (e, t, n) => t in e ? Qh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ty = (e, t) => {
  for (var n in t || (t = {}))
    Jh.call(t, n) && Xs(e, n, t[n]);
  if (Ys)
    for (var n of Ys(t))
      ey.call(t, n) && Xs(e, n, t[n]);
  return e;
};
const ny = {
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
ty({
  linear: Uh
}, ny);
function su(e, t, n, o = {}) {
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
  const g = (C) => i ? Wh(i) ? i(C) : Zh(C) : C, w = () => Kh(e[t]) ? g(e[t]) : p;
  if (u) {
    const C = w(), k = E(C);
    return te(() => e[t], ($) => k.value = g($)), te(k, ($) => {
      ($ !== e[t] || c) && v(f, $);
    }, { deep: c }), k;
  } else
    return B({
      get() {
        return w();
      },
      set(C) {
        v(f, C);
      }
    });
}
function oy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Zs(e) {
  return oy(e) || Array.isArray(e);
}
function ay() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Qr(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Zs(i) || !Zs(u) ? i === u : Qr(i, u);
  });
}
function Qs(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function ry(e, t) {
  if (e.length !== t.length) return !1;
  const n = Qs(e), o = Qs(t);
  return n.every((a, r) => {
    const l = o[r];
    return Qr(a, l);
  });
}
function Jr(e) {
  return typeof e == "number";
}
function Ja(e) {
  return typeof e == "string";
}
function fa(e) {
  return typeof e == "boolean";
}
function Js(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ie(e) {
  return Math.abs(e);
}
function es(e) {
  return Math.sign(e);
}
function Jn(e, t) {
  return Ie(e - t);
}
function sy(e, t) {
  if (e === 0 || t === 0 || Ie(e) <= Ie(t)) return 0;
  const n = Jn(Ie(e), Ie(t));
  return Ie(n / e);
}
function ly(e) {
  return Math.round(e * 100) / 100;
}
function ro(e) {
  return so(e).map(Number);
}
function vt(e) {
  return e[yo(e)];
}
function yo(e) {
  return Math.max(0, e.length - 1);
}
function ts(e, t) {
  return t === yo(e);
}
function el(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function so(e) {
  return Object.keys(e);
}
function lu(e, t) {
  return [e, t].reduce((n, o) => (so(o).forEach((a) => {
    const r = n[a], l = o[a], i = Js(r) && Js(l);
    n[a] = i ? lu(r, l) : l;
  }), n), {});
}
function er(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function iy(e, t) {
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
    return Ja(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function lo() {
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
function uy(e, t, n, o) {
  const a = lo(), r = 1e3 / 60;
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
    const k = i / r;
    o(k), u && (u = t.requestAnimationFrame(p));
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
function dy(e, t) {
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
function iu(e, t, n) {
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
    return iu(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function cy(e, t, n, o, a, r, l, i, u, d, c, p, m, v, f, g, w, C, k) {
  const {
    cross: $,
    direction: A
  } = e, O = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, S = lo(), I = lo(), F = on(50, 225).constrain(v.measure(20)), T = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, M = f ? 43 : 25;
  let W = !1, j = 0, G = 0, K = !1, Q = !1, Y = !1, N = !1;
  function ue(J) {
    if (!k) return;
    function he(We) {
      (fa(k) || k(J, We)) && ot(We);
    }
    const Be = t;
    S.add(Be, "dragstart", (We) => We.preventDefault(), P).add(Be, "touchmove", () => {
    }, P).add(Be, "touchend", () => {
    }).add(Be, "touchstart", he).add(Be, "mousedown", he).add(Be, "touchcancel", X).add(Be, "contextmenu", X).add(Be, "click", ae, !0);
  }
  function le() {
    S.clear(), I.clear();
  }
  function Ae() {
    const J = N ? n : t;
    I.add(J, "touchmove", H, P).add(J, "touchend", X).add(J, "mousemove", H, P).add(J, "mouseup", X);
  }
  function Me(J) {
    const he = J.nodeName || "";
    return O.includes(he);
  }
  function Ve() {
    return (f ? L : T)[N ? "mouse" : "touch"];
  }
  function Xe(J, he) {
    const Be = p.add(es(J) * -1), We = c.byDistance(J, !f).distance;
    return f || Ie(J) < F ? We : w && he ? We * 0.5 : c.byIndex(Be.get(), 0).distance;
  }
  function ot(J) {
    const he = er(J, o);
    N = he, Y = f && he && !J.buttons && W, W = Jn(a.get(), l.get()) >= 2, !(he && J.button !== 0) && (Me(J.target) || (K = !0, r.pointerDown(J), d.useFriction(0).useDuration(0), a.set(l), Ae(), j = r.readPoint(J), G = r.readPoint(J, $), m.emit("pointerDown")));
  }
  function H(J) {
    if (!er(J, o) && J.touches.length >= 2) return X(J);
    const Be = r.readPoint(J), We = r.readPoint(J, $), at = Jn(Be, j), dt = Jn(We, G);
    if (!Q && !N && (!J.cancelable || (Q = at > dt, !Q)))
      return X(J);
    const oe = r.pointerMove(J);
    at > g && (Y = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(A(oe)), J.preventDefault();
  }
  function X(J) {
    const Be = c.byDistance(0, !1).index !== p.get(), We = r.pointerUp(J) * Ve(), at = Xe(A(We), Be), dt = sy(We, at), oe = M - 10 * dt, $e = C + dt / 50;
    Q = !1, K = !1, I.clear(), d.useDuration(oe).useFriction($e), u.distance(at, !f), N = !1, m.emit("pointerUp");
  }
  function ae(J) {
    Y && (J.stopPropagation(), J.preventDefault(), Y = !1);
  }
  function pe() {
    return K;
  }
  return {
    init: ue,
    destroy: le,
    pointerDown: pe
  };
}
function py(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, m) {
    const f = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (er(p, t) ? p : p.touches[0])[f];
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
function fy() {
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
function my(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function vy(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function m(w) {
    return a.measureSize(l.measure(w));
  }
  function v(w) {
    if (!r) return;
    d = m(e), c = o.map(m);
    function C(k) {
      for (const $ of k) {
        if (p) return;
        const A = $.target === e, O = o.indexOf($.target), P = A ? d : c[O], S = m(A ? e : o[O]);
        if (Ie(S - P) >= 0.5) {
          w.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((k) => {
      (fa(r) || r(w, k)) && C(k);
    }), n.requestAnimationFrame(() => {
      i.forEach((k) => u.observe(k));
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
function gy(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function m() {
    const P = o.get() - e.get(), S = !u;
    let I = 0;
    return S ? (l = 0, n.set(o), e.set(o), I = P) : (n.set(e), l += P / u, l *= d, c += l, e.add(l), I = c - p), i = es(I), p = c, O;
  }
  function v() {
    const P = o.get() - t.get();
    return Ie(P) < 1e-3;
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
    return $(a);
  }
  function k() {
    return A(r);
  }
  function $(P) {
    return u = P, O;
  }
  function A(P) {
    return d = P, O;
  }
  const O = {
    direction: g,
    duration: f,
    velocity: w,
    seek: m,
    settled: v,
    useBaseFriction: k,
    useBaseDuration: C,
    useFriction: A,
    useDuration: $
  };
  return O;
}
function hy(e, t, n, o, a) {
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
function yy(e, t, n, o, a) {
  const r = on(-t + e, 0), l = p(), i = c(), u = m();
  function d(f, g) {
    return Jn(f, g) <= 1;
  }
  function c() {
    const f = l[0], g = vt(l), w = l.lastIndexOf(f), C = l.indexOf(g) + 1;
    return on(w, C);
  }
  function p() {
    return n.map((f, g) => {
      const {
        min: w,
        max: C
      } = r, k = r.constrain(f), $ = !g, A = ts(n, g);
      return $ ? C : A || d(w, k) ? w : d(C, k) ? C : k;
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
function by(e, t, n) {
  const o = t[0], a = n ? o - e : vt(t);
  return {
    limit: on(a, o)
  };
}
function wy(e, t, n, o) {
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
function _y(e) {
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
function xy(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = m(), c = v();
  function p() {
    return i(o).map((g) => vt(g)[l] - g[0][r]).map(Ie);
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
function Cy(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const m = l(r), v = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : v ? m : m.slice(i, u).map((f, g, w) => {
      const C = !g, k = ts(w, g);
      if (C) {
        const $ = vt(w[0]) + 1;
        return el($);
      }
      if (k) {
        const $ = yo(r) - vt(w)[0] + 1;
        return el($, vt(w)[0]);
      }
      return f;
    });
  }
  return {
    slideRegistry: d
  };
}
function ky(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(f) {
    return f.concat().sort((g, w) => Ie(g) - Ie(w))[0];
  }
  function d(f) {
    const g = e ? l(f) : i(f), w = t.map((k, $) => ({
      diff: c(k - g, 0),
      index: $
    })).sort((k, $) => Ie(k.diff) - Ie($.diff)), {
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
    const C = w.filter((k) => es(k) === g);
    return C.length ? u(C) : vt(w) - n;
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
      distance: k
    } = d(w), $ = !e && r(w);
    if (!g || $) return {
      index: C,
      distance: f
    };
    const A = t[C] - k, O = f + c(A, 0);
    return {
      index: C,
      distance: O
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: c
  };
}
function $y(e, t, n, o, a, r, l) {
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
function By(e, t, n, o, a, r, l, i) {
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
      const k = n.findIndex(($) => $.includes(g));
      Jr(k) && (a.useDuration(0), o.index(k, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, w) => {
      r.add(g, "focus", (C) => {
        (fa(i) || i(v, C)) && f(w);
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
function Zn(e) {
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
    return Jr(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function uu(e, t) {
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
    const v = ly(e.direction(m));
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
function Sy(e, t, n, o, a, r, l, i, u) {
  const c = ro(a), p = ro(a).reverse(), m = C().concat(k());
  function v(S, I) {
    return S.reduce((F, T) => F - a[T], I);
  }
  function f(S, I) {
    return S.reduce((F, T) => v(F, I) > 0 ? F.concat([T]) : F, []);
  }
  function g(S) {
    return r.map((I, F) => ({
      start: I - o[F] + 0.5 + S,
      end: I + t - 0.5 + S
    }));
  }
  function w(S, I, F) {
    const T = g(I);
    return S.map((L) => {
      const M = F ? 0 : -n, W = F ? n : 0, j = F ? "end" : "start", G = T[L][j];
      return {
        index: L,
        loopPoint: G,
        slideLocation: Zn(-1),
        translate: uu(e, u[L]),
        target: () => i.get() > G ? M : W
      };
    });
  }
  function C() {
    const S = l[0], I = f(p, S);
    return w(I, n, !1);
  }
  function k() {
    const S = t - l[0] - 1, I = f(c, S);
    return w(I, -n, !0);
  }
  function $() {
    return m.every(({
      index: S
    }) => {
      const I = c.filter((F) => F !== S);
      return v(I, t) <= 0.1;
    });
  }
  function A() {
    m.forEach((S) => {
      const {
        target: I,
        translate: F,
        slideLocation: T
      } = S, L = I();
      L !== T.get() && (F.to(L), T.set(L));
    });
  }
  function O() {
    m.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: $,
    clear: O,
    loop: A,
    loopPoints: m
  };
}
function Oy(e, t, n) {
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
      a || (fa(n) || n(u, c)) && d(c);
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
function Ey(e, t, n, o) {
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
    return so(a).reduce((g, w) => {
      const C = parseInt(w), {
        isIntersecting: k
      } = a[C];
      return (f && k || !f && !k) && g.push(C), g;
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
function Py(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = f(), p = g(), m = n.map(l), v = w();
  function f() {
    if (!d) return 0;
    const k = n[0];
    return Ie(t[i] - k[i]);
  }
  function g() {
    if (!d) return 0;
    const k = r.getComputedStyle(vt(o));
    return parseFloat(k.getPropertyValue(`margin-${u}`));
  }
  function w() {
    return n.map((k, $, A) => {
      const O = !$, P = ts(A, $);
      return O ? m[$] + c : P ? m[$] + p : A[$ + 1][i] - k[i];
    }).map(Ie);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: v,
    startGap: c,
    endGap: p
  };
}
function Ay(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, m = Jr(n);
  function v(C, k) {
    return ro(C).filter(($) => $ % k === 0).map(($) => C.slice($, $ + k));
  }
  function f(C) {
    return C.length ? ro(C).reduce((k, $, A) => {
      const O = vt(k) || 0, P = O === 0, S = $ === yo(C), I = a[d] - r[O][d], F = a[d] - r[$][c], T = !o && P ? p(l) : 0, L = !o && S ? p(i) : 0, M = Ie(F - L - (I + T));
      return A && M > t + u && k.push($), S && k.push(C.length), k;
    }, []).map((k, $, A) => {
      const O = Math.max(A[$ - 1] || 0);
      return C.slice(O, k);
    }) : [];
  }
  function g(C) {
    return m ? v(C, n) : f(C);
  }
  return {
    groupSlides: g
  };
}
function Dy(e, t, n, o, a, r, l) {
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
    containScroll: k,
    watchResize: $,
    watchSlides: A,
    watchDrag: O,
    watchFocus: P
  } = r, S = 2, I = fy(), F = I.measure(t), T = n.map(I.measure), L = dy(u, d), M = L.measureSize(F), W = my(M), j = iy(i, M), G = !p && !!k, K = p || !!k, {
    slideSizes: Q,
    slideSizesWithGaps: Y,
    startGap: N,
    endGap: ue
  } = Py(L, F, T, n, K, a), le = Ay(L, M, w, p, F, T, N, ue, S), {
    snaps: Ae,
    snapsAligned: Me
  } = xy(L, j, F, T, le), Ve = -vt(Ae) + vt(Y), {
    snapsContained: Xe,
    scrollContainLimit: ot
  } = yy(M, Ve, Me, k, S), H = G ? Xe : Me, {
    limit: X
  } = by(Ve, H, p), ae = iu(yo(H), c, p), pe = ae.clone(), ve = ro(n), J = ({
    dragHandler: Et,
    scrollBody: ct,
    scrollBounds: vn,
    options: {
      loop: gn
    }
  }) => {
    gn || vn.constrain(Et.pointerDown()), ct.seek();
  }, he = ({
    scrollBody: Et,
    translate: ct,
    location: vn,
    offsetLocation: gn,
    previousLocation: Pt,
    scrollLooper: hn,
    slideLooper: _o,
    dragHandler: Iu,
    animation: Mu,
    eventHandler: is,
    scrollBounds: Fu,
    options: {
      loop: us
    }
  }, ds) => {
    const cs = Et.settled(), Ru = !Fu.shouldConstrain(), ps = us ? cs : cs && Ru, fs = ps && !Iu.pointerDown();
    fs && Mu.stop();
    const Lu = vn.get() * ds + Pt.get() * (1 - ds);
    gn.set(Lu), us && (hn.loop(Et.direction()), _o.loop()), ct.to(gn.get()), fs && is.emit("settle"), ps || is.emit("scroll");
  }, Be = uy(o, a, () => J(Jt), (Et) => he(Jt, Et)), We = 0.68, at = H[ae.get()], dt = Zn(at), oe = Zn(at), $e = Zn(at), Oe = Zn(at), Ce = gy(dt, $e, oe, Oe, m, We), Fe = ky(p, H, Ve, X, Oe), ze = $y(Be, ae, pe, Ce, Fe, Oe, l), Qe = _y(X), Ot = lo(), mn = Ey(t, n, l, g), {
    slideRegistry: Qt
  } = Cy(G, k, H, ot, le, ve), wo = By(e, n, Qt, ze, Ce, Ot, l, P), Jt = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: F,
    slideRects: T,
    animation: Be,
    axis: L,
    dragHandler: cy(L, e, o, a, Oe, py(L, a), dt, Be, ze, Ce, Fe, ae, l, W, v, f, C, We, O),
    eventStore: Ot,
    percentOfView: W,
    index: ae,
    indexPrevious: pe,
    limit: X,
    location: dt,
    offsetLocation: $e,
    previousLocation: oe,
    options: r,
    resizeHandler: vy(t, l, a, n, L, $, I),
    scrollBody: Ce,
    scrollBounds: hy(X, $e, Oe, Ce, W),
    scrollLooper: wy(Ve, X, $e, [dt, $e, oe, Oe]),
    scrollProgress: Qe,
    scrollSnapList: H.map(Qe.get),
    scrollSnaps: H,
    scrollTarget: Fe,
    scrollTo: ze,
    slideLooper: Sy(L, M, Ve, Q, Y, Ae, H, $e, n),
    slideFocus: wo,
    slidesHandler: Oy(t, l, A),
    slidesInView: mn,
    slideIndexes: ve,
    slideRegistry: Qt,
    slidesToScroll: le,
    target: Oe,
    translate: uu(L, t)
  };
  return Jt;
}
function Ty() {
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
const Iy = {
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
function My(e) {
  function t(r, l) {
    return lu(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = so(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => so(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Fy(e) {
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
function Ko(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = My(a), l = Fy(r), i = lo(), u = Ty(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: m,
    off: v,
    emit: f
  } = u, g = L;
  let w = !1, C, k = d(Iy, Ko.globalOptions), $ = d(k), A = [], O, P, S;
  function I() {
    const {
      container: ve,
      slides: J
    } = $;
    P = (Ja(ve) ? e.querySelector(ve) : ve) || e.children[0];
    const Be = Ja(J) ? P.querySelectorAll(J) : J;
    S = [].slice.call(Be || P.children);
  }
  function F(ve) {
    const J = Dy(e, P, S, o, a, ve, u);
    if (ve.loop && !J.slideLooper.canLoop()) {
      const he = Object.assign({}, ve, {
        loop: !1
      });
      return F(he);
    }
    return J;
  }
  function T(ve, J) {
    w || (k = d(k, ve), $ = c(k), A = J || A, I(), C = F($), p([k, ...A.map(({
      options: he
    }) => he)]).forEach((he) => i.add(he, "change", L)), $.active && (C.translate.to(C.location.get()), C.animation.init(), C.slidesInView.init(), C.slideFocus.init(pe), C.eventHandler.init(pe), C.resizeHandler.init(pe), C.slidesHandler.init(pe), C.options.loop && C.slideLooper.loop(), P.offsetParent && S.length && C.dragHandler.init(pe), O = l.init(pe, A)));
  }
  function L(ve, J) {
    const he = le();
    M(), T(d({
      startIndex: he
    }, ve), J), u.emit("reInit");
  }
  function M() {
    C.dragHandler.destroy(), C.eventStore.clear(), C.translate.clear(), C.slideLooper.clear(), C.resizeHandler.destroy(), C.slidesHandler.destroy(), C.slidesInView.destroy(), C.animation.destroy(), l.destroy(), i.clear();
  }
  function W() {
    w || (w = !0, i.clear(), M(), u.emit("destroy"), u.clear());
  }
  function j(ve, J, he) {
    !$.active || w || (C.scrollBody.useBaseFriction().useDuration(J === !0 ? 0 : $.duration), C.scrollTo.index(ve, he || 0));
  }
  function G(ve) {
    const J = C.index.add(1).get();
    j(J, ve, -1);
  }
  function K(ve) {
    const J = C.index.add(-1).get();
    j(J, ve, 1);
  }
  function Q() {
    return C.index.add(1).get() !== le();
  }
  function Y() {
    return C.index.add(-1).get() !== le();
  }
  function N() {
    return C.scrollSnapList;
  }
  function ue() {
    return C.scrollProgress.get(C.offsetLocation.get());
  }
  function le() {
    return C.index.get();
  }
  function Ae() {
    return C.indexPrevious.get();
  }
  function Me() {
    return C.slidesInView.get();
  }
  function Ve() {
    return C.slidesInView.get(!1);
  }
  function Xe() {
    return O;
  }
  function ot() {
    return C;
  }
  function H() {
    return e;
  }
  function X() {
    return P;
  }
  function ae() {
    return S;
  }
  const pe = {
    canScrollNext: Q,
    canScrollPrev: Y,
    containerNode: X,
    internalEngine: ot,
    destroy: W,
    off: v,
    on: m,
    emit: f,
    plugins: Xe,
    previousScrollSnap: Ae,
    reInit: g,
    rootNode: H,
    scrollNext: G,
    scrollPrev: K,
    scrollProgress: ue,
    scrollSnapList: N,
    scrollTo: j,
    selectedScrollSnap: le,
    slideNodes: ae,
    slidesInView: Me,
    slidesNotInView: Ve
  };
  return T(t, n), setTimeout(() => u.emit("init"), 0), pe;
}
Ko.globalOptions = void 0;
function ns(e = {}, t = []) {
  const n = rt(e), o = rt(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Bn(), i = Bn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return ie(() => {
    !ay() || !l.value || (Ko.globalOptions = ns.globalOptions, i.value = Ko(l.value, a, r));
  }), Tn(() => {
    i.value && i.value.destroy();
  }), n && te(e, (d) => {
    Qr(a, d) || (a = d, u());
  }), o && te(t, (d) => {
    ry(r, d) || (r = d, u());
  }), [l, i];
}
ns.globalOptions = void 0;
const [Ry, Ly] = Gh(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = ns(
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
    return ie(() => {
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
function ma() {
  const e = Ly();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const U_ = /* @__PURE__ */ b({
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
    } = Ry(o, a);
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
    return (v, f) => (h(), q("div", {
      class: se(s(V)("relative", o.class)),
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
}), G_ = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = ma();
    return (a, r) => (h(), q("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      ne("div", D({
        class: s(V)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), Y_ = /* @__PURE__ */ b({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = ma();
    return (o, a) => (h(), q("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: se(
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
}), X_ = /* @__PURE__ */ b({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = ma();
    return (r, l) => (h(), x(s(Zi), {
      disabled: !s(o),
      class: se(
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
          R(s(wh), { class: "size-4 text-current" }),
          l[0] || (l[0] = ne("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Z_ = /* @__PURE__ */ b({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = ma();
    return (r, l) => (h(), x(s(Zi), {
      disabled: !s(o),
      class: se(
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
          R(s(_h), { class: "size-4 text-current" }),
          l[0] || (l[0] = ne("span", { class: "sr-only" }, "Next Slide", -1))
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
const Vy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Eo = {
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
const zy = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => Ge(
  "svg",
  {
    ...Eo,
    width: e || Eo.width,
    height: e || Eo.height,
    stroke: o || Eo.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Vy(r ?? "icon")}`],
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
const va = (e, t) => (n, { slots: o }) => Ge(
  zy,
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
const qy = va("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = va("ChevronLeftIcon", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = va("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = va("EllipsisIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
function tl(e) {
  return typeof e == "string" ? `'${e}'` : new jy().serialize(e);
}
const jy = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      vs(this, t, /* @__PURE__ */ new Map());
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
      let a = Un(this, t).get(o);
      return a === void 0 && (Un(this, t).set(o, `#${Un(this, t).size}`), a = this.serializeObject(o), Un(this, t).set(o, a)), a;
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
function An(e, t) {
  return e === t || tl(e) === tl(t);
}
function Hy(e, t, n) {
  const o = e.findIndex((i) => An(i, t)), a = e.findIndex((i) => An(i, n));
  if (o === -1 || a === -1) return [];
  const [r, l] = [o, a].sort((i, u) => i - u);
  return e.slice(r, l + 1);
}
function Ye(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = In(o, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (Mn(o, l), l)];
}
function gt() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function os(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function tr(e) {
  return e == null;
}
function nl(e, t) {
  return tr(e) ? !1 : Array.isArray(e) ? e.some((n) => An(n, t)) : An(e, t);
}
function as(e) {
  return e ? e.flatMap((t) => t.type === ke ? as(t.children) : [t]) : [];
}
const [ga] = Ye("ConfigProvider");
function Ky(e, t) {
  var n;
  const o = Bn();
  return xe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Yo(o);
}
function ha(e) {
  return sr() ? (lr(e), !0) : !1;
}
function Lo() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const l = () => t(r);
      return ha(l), {
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
function Wy(e) {
  let t = !1, n;
  const o = Xo(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Uy(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = Xo(!0), n = o.run(() => e(...r))), ha(a), n);
}
const cn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gy = (e) => typeof e < "u", Yy = Object.prototype.toString, Xy = (e) => Yy.call(e) === "[object Object]", ol = /* @__PURE__ */ Zy();
function Zy() {
  var e, t;
  return cn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Qy(e) {
  return Ue();
}
function Ia(e) {
  return Array.isArray(e) ? e : [e];
}
function pu(e, t = 1e4) {
  return bl((n, o) => {
    let a = et(e), r;
    const l = () => setTimeout(() => {
      a = et(e), o();
    }, et(t));
    return ha(() => {
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
const Jy = et;
function e0(e, t) {
  Qy() && Tn(e, t);
}
function t0(e, t, n) {
  return te(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const rs = cn ? window : void 0;
function pn(e) {
  var t;
  const n = et(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function ss(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, u, d, c) => (i.addEventListener(u, d, c), () => i.removeEventListener(u, d, c)), a = B(() => {
    const i = Ia(et(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), r = t0(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((d) => pn(d))) != null ? u : [rs].filter((d) => d != null),
        Ia(et(a.value ? e[1] : e[0])),
        Ia(s(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        et(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, d, c]) => {
      if (n(), !(i != null && i.length) || !(u != null && u.length) || !(d != null && d.length))
        return;
      const p = Xy(c) ? { ...c } : c;
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
  return ha(n), l;
}
function n0() {
  const e = Bn(!1), t = Ue();
  return t && ie(() => {
    e.value = !0;
  }, t), e;
}
function o0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function a0(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = rs,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = o0(t);
  return ss(a, r, (c) => {
    c.repeat && et(i) || u(c) && n(c);
  }, l);
}
function r0(e) {
  return JSON.parse(JSON.stringify(e));
}
function Lt(e, t, n, o = {}) {
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
  const w = ($) => i ? typeof i == "function" ? i($) : r0($) : $, C = () => Gy(e[t]) ? w(e[t]) : p, k = ($) => {
    m ? m($) && f(g, $) : f(g, $);
  };
  if (u) {
    const $ = C(), A = E($);
    let O = !1;
    return te(
      () => e[t],
      (P) => {
        O || (O = !0, A.value = w(P), re(() => O = !1));
      }
    ), te(
      A,
      (P) => {
        !O && (P !== e[t] || c) && k(P);
      },
      { deep: c }
    ), A;
  } else
    return B({
      get() {
        return C();
      },
      set($) {
        k($);
      }
    });
}
function Ma(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function nr(e, t, n = ".", o) {
  if (!Ma(t))
    return nr(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (o && o(a, r, l, n) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Ma(l) && Ma(a[r]) ? a[r] = nr(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = l));
  }
  return a;
}
function s0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => nr(n, o, "", e), {})
  );
}
const l0 = s0(), i0 = Uy(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = B(() => {
    for (const l of e.value.values()) if (l) return !0;
    return !1;
  }), o = ga({ scrollBody: E(!0) });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", ol && (a == null || a()), t.value = void 0;
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
    }, c = (p = o.scrollBody) != null && p.value ? typeof o.scrollBody.value == "object" ? l0({
      padding: o.scrollBody.value.padding === !0 ? u : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? u : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), ol && (a = ss(document, "touchmove", (m) => u0(m), { passive: !1 })), re(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function fu(e) {
  const t = Math.random().toString(36).substring(2, 7), n = i0();
  n.value.set(t, e ?? !1);
  const o = B({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return e0(() => {
    n.value.delete(t);
  }), o;
}
function mu(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : mu(n);
  }
}
function u0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && mu(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function vu(e) {
  const t = ga({ dir: E("ltr") });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ya(e) {
  const t = Ue(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((a) => {
    o[gl(Uo(a))] = (...r) => e(a, ...r);
  }), o;
}
function d0(e) {
  const t = B(() => s(e)), n = B(() => new Intl.Collator("en", {
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
function gu(e) {
  return B(() => {
    var t;
    return Jy(e) ? !!((t = pn(e)) != null && t.closest("form")) : !0;
  });
}
function be() {
  const e = Ue(), t = E(), n = B(() => {
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
  }, {}), o = ir(e);
  return B(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Uo(l)] = r[l];
    }), Object.keys({
      ...n,
      ...a
    }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Bt(e, t) {
  const n = fn(e), o = t ? ya(t) : {};
  return B(() => ({
    ...n.value,
    ...o
  }));
}
var c0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wn = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Ao = {}, Fa = 0, hu = function(e) {
  return e && (e.host || hu(e.parentNode));
}, p0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = hu(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, f0 = function(e, t, n, o) {
  var a = p0(t, Array.isArray(e) ? e : [e]);
  Ao[n] || (Ao[n] = /* @__PURE__ */ new WeakMap());
  var r = Ao[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
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
          wn.set(m, g), r.set(m, w), l.push(m), g === 1 && f && Po.set(m, !0), w === 1 && m.setAttribute(n, "true"), f || m.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return c(t), i.clear(), Fa++, function() {
    l.forEach(function(p) {
      var m = wn.get(p) - 1, v = r.get(p) - 1;
      wn.set(p, m), r.set(p, v), m || (Po.has(p) || p.removeAttribute(o), Po.delete(p)), v || p.removeAttribute(n);
    }), Fa--, Fa || (wn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Ao = {});
  };
}, m0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = c0(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), f0(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function yu(e) {
  let t;
  te(() => pn(e), (n) => {
    n ? t = m0(n) : t && t();
  }), Ne(() => {
    t && t();
  });
}
let v0 = 0;
function bt(e, t = "reka") {
  var o;
  if ("useId" in xn) return `${t}-${(o = xn.useId) == null ? void 0 : o.call(xn)}`;
  const n = ga({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++v0}`;
}
function g0() {
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
function h0(e) {
  const t = E(), n = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = B(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ie(() => {
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
function y0(e, t) {
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
function b0(e) {
  const t = pu("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const l = gt(), i = r.map((m) => {
          var v, f;
          return {
            ...m,
            textValue: ((v = m.value) == null ? void 0 : v.textValue) ?? ((f = m.ref.textContent) == null ? void 0 : f.trim()) ?? ""
          };
        }), u = i.find((m) => m.ref === l), d = i.map((m) => m.textValue), c = _0(d, t.value, u == null ? void 0 : u.textValue), p = i.find((m) => m.textValue === c);
        return p && p.ref.focus(), p == null ? void 0 : p.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function w0(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function _0(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let l = w0(e, Math.max(r, 0));
  a.length === 1 && (l = l.filter((d) => d !== n));
  const u = l.find((d) => d.toLowerCase().startsWith(a.toLowerCase()));
  return u !== n ? u : void 0;
}
function x0(e, t) {
  var w;
  const n = E({}), o = E("none"), a = E(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((w = t.value) == null ? void 0 : w.ownerDocument.defaultView) ?? rs, { state: u, dispatch: d } = y0(r, {
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
    var k;
    if (cn) {
      const $ = new CustomEvent(C, {
        bubbles: !1,
        cancelable: !1
      });
      (k = t.value) == null || k.dispatchEvent($);
    }
  };
  te(e, async (C, k) => {
    var A;
    const $ = k !== C;
    if (await re(), $) {
      const O = o.value, P = Do(t.value);
      C ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((A = n.value) == null ? void 0 : A.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : k && O !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const p = (C) => {
    const k = Do(t.value), $ = k.includes(CSS.escape(C.animationName)), A = u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && $ && (c(`after-${A}`), d("ANIMATION_END"), !a.value)) {
      const O = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = O);
      });
    }
    C.target === t.value && k === "none" && d("ANIMATION_END");
  }, m = (C) => {
    C.target === t.value && (o.value = Do(t.value));
  }, v = te(t, (C, k) => {
    C ? (n.value = getComputedStyle(C), C.addEventListener("animationstart", m), C.addEventListener("animationcancel", p), C.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), k == null || k.removeEventListener("animationstart", m), k == null || k.removeEventListener("animationcancel", p), k == null || k.removeEventListener("animationend", p));
  }, { immediate: !0 }), f = te(u, () => {
    const C = Do(t.value);
    o.value = u.value === "mounted" ? C : "none";
  });
  return Ne(() => {
    v(), f();
  }), { isPresent: B(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Do(e) {
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
    const { present: o, forceMount: a } = we(e), r = E(), { isPresent: l } = x0(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = as(i || []);
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
const or = b({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u;
      if (!n.default) return null;
      const o = as(n.default()), a = o.findIndex((d) => d.type !== dr);
      if (a === -1) return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? D(t, r.props) : t, i = hl({
        ...r,
        props: {}
      }, l);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), C0 = [
  "area",
  "img",
  "input"
], ge = b({
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
    return typeof o == "string" && C0.includes(o) ? () => Ge(o, t) : o !== "template" ? () => Ge(e.as, t, { default: n.default }) : () => Ge(or, t, { default: n.default });
  }
});
function Gt() {
  const e = E(), t = B(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : pn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [bu, k0] = Ye("CollapsibleRoot");
var $0 = /* @__PURE__ */ b({
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
    const o = e, r = Lt(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), { disabled: l, unmountOnHide: i } = we(o);
    return k0({
      contentId: "",
      disabled: l,
      open: r,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (r.value = !r.value);
      }
    }), t({ open: r }), be(), (u, d) => (h(), x(s(ge), {
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
}), B0 = $0, S0 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = bu();
    a.contentId || (a.contentId = bt(void 0, "reka-collapsible-content"));
    const r = E(), { forwardRef: l, currentElement: i } = be(), u = E(0), d = E(0), c = B(() => a.open.value), p = E(c.value), m = E();
    te(() => {
      var f;
      return [c.value, (f = r.value) == null ? void 0 : f.present];
    }, async () => {
      await re();
      const f = i.value;
      if (!f) return;
      m.value = m.value || {
        transitionDuration: f.style.transitionDuration,
        animationName: f.style.animationName
      }, f.style.transitionDuration = "0s", f.style.animationName = "none";
      const g = f.getBoundingClientRect();
      d.value = g.height, u.value = g.width, p.value || (f.style.transitionDuration = m.value.transitionDuration, f.style.animationName = m.value.animationName);
    }, { immediate: !0 });
    const v = B(() => p.value && a.open.value);
    return ie(() => {
      requestAnimationFrame(() => {
        p.value = !1;
      });
    }), ss(i, "beforematch", (f) => {
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
        return [R(s(ge), D(f.$attrs, {
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
          default: y(() => [!s(a).unmountOnHide.value || w ? _(f.$slots, "default", { key: 0 }) : de("v-if", !0)]),
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
}), O0 = S0, E0 = /* @__PURE__ */ b({
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
    const n = bu();
    return (o, a) => {
      var r, l;
      return h(), x(s(ge), {
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
}), P0 = E0;
const [St, A0] = Ye("DialogRoot");
var D0 = /* @__PURE__ */ b({
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
    const n = e, a = Lt(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = E(), l = E(), { modal: i } = we(n);
    return A0({
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
}), T0 = D0, I0 = /* @__PURE__ */ b({
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
    const n = St();
    return (o, a) => (h(), x(s(ge), D(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), M0 = I0;
const F0 = "dismissableLayer.pointerDownOutside", R0 = "dismissableLayer.focusOutside";
function wu(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || a.indexOf(o) < a.indexOf(n)));
}
function L0(e, t, n = !0) {
  var l;
  const o = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return xe((i) => {
    if (!cn || !et(n)) return;
    const u = async (c) => {
      const p = c.target;
      if (!(!(t != null && t.value) || !p)) {
        if (wu(t.value, p)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let v = function() {
            os(F0, e, m);
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
    et(n) && (a.value = !0);
  } };
}
function V0(e, t, n = !0) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return xe((l) => {
    if (!cn || !et(n)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await re(), await re();
      const d = u.target;
      !t.value || !d || wu(t.value, d) || u.target && !a.value && os(R0, e, { originalEvent: u });
    };
    o.addEventListener("focusin", i), l(() => o.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      et(n) && (a.value = !0);
    },
    onBlurCapture: () => {
      et(n) && (a.value = !1);
    }
  };
}
const Tt = Sn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var z0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = be(), l = B(() => {
      var f;
      return ((f = r.value) == null ? void 0 : f.ownerDocument) ?? globalThis.document;
    }), i = B(() => Tt.layersRoot), u = B(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = B(() => Tt.layersWithOutsidePointerEventsDisabled.size > 0), c = B(() => {
      const f = Array.from(i.value), [g] = [...Tt.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(g);
      return u.value >= w;
    }), p = L0(async (f) => {
      const g = [...Tt.branches].some((w) => w == null ? void 0 : w.contains(f.target));
      !c.value || g || (o("pointerDownOutside", f), o("interactOutside", f), await re(), f.defaultPrevented || o("dismiss"));
    }, r), m = V0((f) => {
      [...Tt.branches].some((w) => w == null ? void 0 : w.contains(f.target)) || (o("focusOutside", f), o("interactOutside", f), f.defaultPrevented || o("dismiss"));
    }, r);
    a0("Escape", (f) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", f), f.defaultPrevented || o("dismiss"));
    });
    let v;
    return xe((f) => {
      r.value && (n.disableOutsidePointerEvents && (Tt.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Tt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), f(() => {
        n.disableOutsidePointerEvents && Tt.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), xe((f) => {
      f(() => {
        r.value && (i.value.delete(r.value), Tt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (f, g) => (h(), x(s(ge), {
      ref: s(a),
      "as-child": f.asChild,
      as: f.as,
      "data-dismissable-layer": "",
      style: it({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
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
}), _u = z0;
const q0 = Wy(() => E([]));
function N0() {
  const e = q0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = al(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = al(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function al(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function j0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ra = "focusScope.autoFocusOnMount", La = "focusScope.autoFocusOnUnmount", rl = {
  bubbles: !1,
  cancelable: !0
};
function H0(e, { select: t = !1 } = {}) {
  const n = gt();
  for (const o of e)
    if (Kt(o, { select: t }), gt() !== n) return !0;
}
function K0(e) {
  const t = xu(e), n = sl(t, e), o = sl(t.reverse(), e);
  return [n, o];
}
function xu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function sl(e, t) {
  for (const n of e) if (!W0(n, { upTo: t })) return n;
}
function W0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function U0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = gt();
    e.focus({ preventScroll: !0 }), e !== n && U0(e) && t && e.select();
  }
}
var G0 = /* @__PURE__ */ b({
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
    const n = e, o = t, { currentRef: a, currentElement: r } = be(), l = E(null), i = N0(), u = Sn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    xe((c) => {
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
    }), xe(async (c) => {
      const p = r.value;
      if (await re(), !p) return;
      i.add(u);
      const m = gt();
      if (!p.contains(m)) {
        const f = new CustomEvent(Ra, rl);
        p.addEventListener(Ra, (g) => o("mountAutoFocus", g)), p.dispatchEvent(f), f.defaultPrevented || (H0(j0(xu(p)), { select: !0 }), gt() === m && Kt(p));
      }
      c(() => {
        p.removeEventListener(Ra, (w) => o("mountAutoFocus", w));
        const f = new CustomEvent(La, rl), g = (w) => {
          o("unmountAutoFocus", w);
        };
        p.addEventListener(La, g), p.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || Kt(m ?? document.body, { select: !0 }), p.removeEventListener(La, g), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused) return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = gt();
      if (p && m) {
        const v = c.currentTarget, [f, g] = K0(v);
        f && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && Kt(f, { select: !0 })) : c.shiftKey && m === f && (c.preventDefault(), n.loop && Kt(g, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, p) => (h(), x(s(ge), {
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
}), Y0 = G0;
function X0(e) {
  return e ? "open" : "closed";
}
const Z0 = "DialogTitle", Q0 = "DialogContent";
function J0({ titleName: e = Z0, contentName: t = Q0, componentLink: n = "dialog.html#title", titleId: o, descriptionId: a, contentElement: r }) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ie(() => {
    var c;
    document.getElementById(o) || console.warn(l);
    const d = (c = r.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
var eb = /* @__PURE__ */ b({
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
    const n = e, o = t, a = St(), { forwardRef: r, currentElement: l } = be();
    return a.titleId || (a.titleId = bt(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = bt(void 0, "reka-dialog-description")), ie(() => {
      a.contentElement = l, gt() !== document.body && (a.triggerElement.value = gt());
    }), process.env.NODE_ENV !== "production" && J0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), x(s(Y0), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [R(s(_u), D({
        id: s(a).contentId,
        ref: s(r),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": s(a).descriptionId,
        "aria-labelledby": s(a).titleId,
        "data-state": s(X0)(s(a).open.value)
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
}), Cu = eb, tb = /* @__PURE__ */ b({
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
    const n = e, o = t, a = St(), r = ya(o), { forwardRef: l, currentElement: i } = be();
    return yu(i), (u, d) => (h(), x(Cu, D({
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
}), nb = tb, ob = /* @__PURE__ */ b({
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
    const n = e, a = ya(t);
    be();
    const r = St(), l = E(!1), i = E(!1);
    return (u, d) => (h(), x(Cu, D({
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
}), ab = ob, rb = /* @__PURE__ */ b({
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
    const n = e, o = t, a = St(), r = ya(o), { forwardRef: l } = be();
    return (i, u) => (h(), x(s(bo), { present: i.forceMount || s(a).open.value }, {
      default: y(() => [s(a).modal.value ? (h(), x(nb, D({
        key: 0,
        ref: s(l)
      }, {
        ...n,
        ...s(r),
        ...i.$attrs
      }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)) : (h(), x(ab, D({
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
}), sb = rb, lb = /* @__PURE__ */ b({
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
    const n = St();
    return (o, a) => (h(), x(s(ge), D(t, { id: s(n).descriptionId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), ib = lb, ub = /* @__PURE__ */ b({
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
    const t = St();
    return fu(!0), be(), (n, o) => (h(), x(s(ge), {
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
}), db = ub, cb = /* @__PURE__ */ b({
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
    const t = St(), { forwardRef: n } = be();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), x(s(bo), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [R(db, D(o.$attrs, {
          ref: s(n),
          as: o.as,
          "as-child": o.asChild
        }), {
          default: y(() => [_(o.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : de("v-if", !0);
    };
  }
}), pb = cb, fb = /* @__PURE__ */ b({
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
    const t = n0();
    return (n, o) => s(t) || n.forceMount ? (h(), x(io, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [_(n.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : de("v-if", !0);
  }
}), ku = fb, mb = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(ku), Z(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), vb = mb, gb = /* @__PURE__ */ b({
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
    const t = e, n = St();
    return be(), (o, a) => (h(), x(s(ge), D(t, { id: s(n).titleId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), hb = gb, yb = /* @__PURE__ */ b({
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
    const t = e, n = St(), { forwardRef: o, currentElement: a } = be();
    return n.contentId || (n.contentId = bt(void 0, "reka-dialog-content")), ie(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), x(s(ge), D(t, {
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
}), bb = yb;
const ll = "data-reka-collection-item";
function ba(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    a = {
      collectionRef: E(),
      itemMap: c
    }, Mn(o, a);
  } else a = In(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p) return [];
    const m = Array.from(p.querySelectorAll(`[${ll}]`)), f = Array.from(a.itemMap.value.values()).sort((g, w) => m.indexOf(g.ref) - m.indexOf(w.ref));
    return c ? f : f.filter((g) => g.ref.dataset.disabled !== "");
  }, l = b({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: m, currentElement: v } = Gt();
      return te(v, () => {
        a.collectionRef.value = v.value;
      }), () => Ge(or, { ref: m }, p);
    }
  }), i = b({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: p, attrs: m }) {
      const { primitiveElement: v, currentElement: f } = Gt();
      return xe((g) => {
        if (f.value) {
          const w = yl(f.value);
          a.itemMap.value.set(w, {
            ref: f.value,
            value: c.value
          }), g(() => a.itemMap.value.delete(w));
        }
      }), () => Ge(or, {
        ...m,
        [ll]: "",
        ref: v
      }, p);
    }
  }), u = B(() => Array.from(a.itemMap.value.values())), d = B(() => a.itemMap.value.size);
  return {
    getItems: r,
    reactiveItems: u,
    itemMapSize: d,
    CollectionSlot: l,
    CollectionItem: i
  };
}
const wb = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _b(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $u(e, t, n) {
  const o = _b(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return wb[o];
}
function xb(e, t = !1) {
  const n = gt();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), gt() !== n)) return;
}
function Cb(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [kb] = Ye("RovingFocusGroup");
var $b = /* @__PURE__ */ b({
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
    const t = e, n = kb(), o = bt(), a = B(() => t.tabStopId || o), r = B(() => n.currentTabStopId.value === a.value), { getItems: l, CollectionItem: i } = ba();
    ie(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Ne(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = $u(d, n.orientation.value, n.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let p = [...l().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (c === "last") p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const m = p.indexOf(d.currentTarget);
          p = n.loop.value ? Cb(p, m + 1) : p.slice(m + 1);
        }
        re(() => xb(p));
      }
    }
    return (d, c) => (h(), x(s(i), null, {
      default: y(() => [R(s(ge), {
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
}), Bb = $b, Sb = /* @__PURE__ */ b({
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
    return (t, n) => (h(), x(s(ge), {
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
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
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
}), Ob = Sb, Eb = /* @__PURE__ */ b({
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
    const t = e, { primitiveElement: n, currentElement: o } = Gt(), a = B(() => t.checked ?? t.value);
    return te(a, (r, l) => {
      if (!o.value) return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), m = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(m);
      }
    }), (r, l) => (h(), x(Ob, D({
      ref_key: "primitiveElement",
      ref: n
    }, {
      ...t,
      ...r.$attrs
    }, { as: "input" }), null, 16));
  }
}), il = Eb, Pb = /* @__PURE__ */ b({
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
    const t = e, n = B(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
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
    return (a, r) => (h(), q(ke, null, [de(" We render single input if it's required "), n.value ? (h(), x(il, D({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), q(ke, { key: 1 }, st(o.value, (l) => (h(), x(il, D({ key: l.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Bu = Pb;
const [Ab] = Ye("CheckboxGroupRoot");
function Wo(e) {
  return e === "indeterminate";
}
function Su(e) {
  return Wo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [Db, Tb] = Ye("CheckboxRoot");
var Ib = /* @__PURE__ */ b({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = be(), l = Ab(null), i = Lt(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = B(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = B(() => tr(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : nl(l.modelValue.value, n.value));
    function c() {
      if (tr(l == null ? void 0 : l.modelValue.value))
        i.value = Wo(i.value) ? !0 : !i.value;
      else {
        const v = [...l.modelValue.value || []];
        if (nl(v, n.value)) {
          const f = v.findIndex((g) => An(g, n.value));
          v.splice(f, 1);
        } else v.push(n.value);
        l.modelValue.value = v;
      }
    }
    const p = gu(r), m = B(() => {
      var v;
      return n.id && r.value ? (v = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : v.innerText : void 0;
    });
    return Tb({
      disabled: u,
      state: d
    }), (v, f) => {
      var g, w;
      return h(), x(Ze((g = s(l)) != null && g.rovingFocus.value ? s(Bb) : s(ge)), D(v.$attrs, {
        id: v.id,
        ref: s(a),
        role: "checkbox",
        "as-child": v.asChild,
        as: v.as,
        type: v.as === "button" ? "button" : void 0,
        "aria-checked": s(Wo)(d.value) ? "mixed" : d.value,
        "aria-required": v.required,
        "aria-label": v.$attrs["aria-label"] || m.value,
        "data-state": s(Su)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (w = s(l)) != null && w.rovingFocus.value ? !u.value : void 0,
        onKeydown: Je(De(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [_(v.$slots, "default", {
          modelValue: s(i),
          state: d.value
        }), s(p) && v.name && !s(l) ? (h(), x(s(Bu), {
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
        ])) : de("v-if", !0)]),
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
}), Mb = Ib, Fb = /* @__PURE__ */ b({
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
    const { forwardRef: t } = be(), n = Db();
    return (o, a) => (h(), x(s(bo), { present: o.forceMount || s(Wo)(s(n).state.value) || s(n).state.value === !0 }, {
      default: y(() => [R(s(ge), D({
        ref: s(t),
        "data-state": s(Su)(s(n).state.value),
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
}), Rb = Fb;
const [Ou, Lb] = Ye("PopperRoot");
var Vb = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Lb({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), zb = Vb, qb = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: o } = be(), a = Ou();
    return pr(() => {
      a.onAnchorChange(t.reference ?? o.value);
    }), (r, l) => (h(), x(s(ge), {
      ref: s(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: y(() => [_(r.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Nb = qb;
function jb(e) {
  return e !== null;
}
function Hb(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var w, C, k;
      const { placement: n, rects: o, middlewareData: a } = t, l = ((w = a.arrow) == null ? void 0 : w.centerOffset) !== 0, i = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, c] = ar(n), p = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], m = (((C = a.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, v = (((k = a.arrow) == null ? void 0 : k.y) ?? 0) + u / 2;
      let f = "", g = "";
      return d === "bottom" ? (f = l ? p : `${m}px`, g = `${-u}px`) : d === "top" ? (f = l ? p : `${m}px`, g = `${o.floating.height + u}px`) : d === "right" ? (f = `${-u}px`, g = l ? p : `${v}px`) : d === "left" && (f = `${o.floating.width + u}px`, g = l ? p : `${v}px`), { data: {
        x: f,
        y: g
      } };
    }
  };
}
function ar(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Kb = {
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
}, [Q_, Wb] = Ye("PopperContent");
var Ub = /* @__PURE__ */ b({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ cr({
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
  }, { ...Kb }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Ou(), { forwardRef: r, currentElement: l } = be(), i = E(), u = E(), { width: d, height: c } = h0(u), p = B(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), m = B(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), v = B(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), f = B(() => ({
      padding: m.value,
      boundary: v.value.filter(jb),
      altBoundary: v.value.length > 0
    })), g = B(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), w = Ky(() => [
      ql({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && No({
        ...f.value,
        ...g.value
      }),
      n.avoidCollisions && Nl({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Kl() : void 0,
        ...f.value
      }),
      !n.prioritizePosition && n.avoidCollisions && No({
        ...f.value,
        ...g.value
      }),
      jl({
        ...f.value,
        apply: ({ elements: M, rects: W, availableWidth: j, availableHeight: G }) => {
          const { width: K, height: Q } = W.reference, Y = M.floating.style;
          Y.setProperty("--reka-popper-available-width", `${j}px`), Y.setProperty("--reka-popper-available-height", `${G}px`), Y.setProperty("--reka-popper-anchor-width", `${K}px`), Y.setProperty("--reka-popper-anchor-height", `${Q}px`);
        }
      }),
      u.value && Wl({
        element: u.value,
        padding: n.arrowPadding
      }),
      Hb({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Hl({
        strategy: "referenceHidden",
        ...f.value
      })
    ]), C = B(() => n.reference ?? a.anchor.value), { floatingStyles: k, placement: $, isPositioned: A, middlewareData: O } = Gl(C, i, {
      strategy: n.positionStrategy,
      placement: p,
      whileElementsMounted: (...M) => zl(...M, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: w
    }), P = B(() => ar($.value)[0]), S = B(() => ar($.value)[1]);
    pr(() => {
      A.value && o("placed");
    });
    const I = B(() => {
      var M;
      return ((M = O.value.arrow) == null ? void 0 : M.centerOffset) !== 0;
    }), F = E("");
    xe(() => {
      l.value && (F.value = window.getComputedStyle(l.value).zIndex);
    });
    const T = B(() => {
      var M;
      return ((M = O.value.arrow) == null ? void 0 : M.x) ?? 0;
    }), L = B(() => {
      var M;
      return ((M = O.value.arrow) == null ? void 0 : M.y) ?? 0;
    });
    return Wb({
      placedSide: P,
      onArrowChange: (M) => u.value = M,
      arrowX: T,
      arrowY: L,
      shouldHideArrow: I
    }), (M, W) => {
      var j, G, K;
      return h(), q("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: it({
          ...s(k),
          transform: s(A) ? s(k).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: F.value,
          "--reka-popper-transform-origin": [(j = s(O).transformOrigin) == null ? void 0 : j.x, (G = s(O).transformOrigin) == null ? void 0 : G.y].join(" "),
          ...((K = s(O).hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [R(s(ge), D({ ref: s(r) }, M.$attrs, {
        "as-child": n.asChild,
        as: M.as,
        "data-side": P.value,
        "data-align": S.value,
        style: { animation: s(A) ? void 0 : "none" }
      }), {
        default: y(() => [_(M.$slots, "default")]),
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
}), Gb = Ub, Yb = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(Nb), {
      "as-child": "",
      reference: n.reference
    }, {
      default: y(() => [R(s(ge), D({
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
}), Xb = Yb;
function Zb(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => eo(o, t, n)) : eo(e, t, n);
}
function eo(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : An(e, t);
}
const [wa, Qb] = Ye("ListboxRoot");
var Jb = /* @__PURE__ */ b({
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
    const o = e, a = n, { multiple: r, highlightOnHover: l, orientation: i, disabled: u, selectionBehavior: d, dir: c } = we(o), { getItems: p } = ba({ isProvider: !0 }), { handleTypeaheadSearch: m } = b0(), { primitiveElement: v, currentElement: f } = Gt(), g = g0(), w = vu(c), C = gu(f), k = E(), $ = E(!1), A = E(!0), O = Lt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (r.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    });
    function P(H) {
      if ($.value = !0, o.multiple) {
        const X = Array.isArray(O.value) ? [...O.value] : [], ae = X.findIndex((pe) => eo(pe, H, o.by));
        o.selectionBehavior === "toggle" ? (ae === -1 ? X.push(H) : X.splice(ae, 1), O.value = X) : (O.value = [H], k.value = H);
      } else o.selectionBehavior === "toggle" && eo(O.value, H, o.by) ? O.value = void 0 : O.value = H;
      setTimeout(() => {
        $.value = !1;
      }, 1);
    }
    const S = E(null), I = E(null), F = E(!1), T = E(!1), L = Lo(), M = Lo(), W = Lo();
    function j() {
      return p().map((H) => H.ref).filter((H) => H.dataset.disabled !== "");
    }
    function G(H, X = !0) {
      if (!H) return;
      S.value = H, A.value && S.value.focus(), X && S.value.scrollIntoView({ block: "nearest" });
      const ae = p().find((pe) => pe.ref === H);
      a("highlight", ae);
    }
    function K(H) {
      if (F.value) W.trigger(H);
      else {
        const X = p().find((ae) => eo(ae.value, H, o.by));
        X && (S.value = X.ref, G(X.ref));
      }
    }
    function Q(H) {
      S.value && S.value.isConnected && (H.preventDefault(), H.stopPropagation(), T.value || S.value.click());
    }
    function Y(H) {
      if (A.value) {
        if ($.value = !0, F.value) M.trigger(H);
        else {
          const X = H.altKey || H.ctrlKey || H.metaKey;
          if (X && H.key === "a" && r.value) {
            const ae = p(), pe = ae.map((ve) => ve.value);
            O.value = [...pe], H.preventDefault(), G(ae[ae.length - 1].ref);
          } else if (!X) {
            const ae = m(H.key, p());
            ae && G(ae);
          }
        }
        setTimeout(() => {
          $.value = !1;
        }, 1);
      }
    }
    function N() {
      T.value = !0;
    }
    function ue() {
      re(() => {
        T.value = !1;
      });
    }
    function le() {
      re(() => {
        const H = new KeyboardEvent("keydown", { key: "PageUp" });
        Ve(H);
      });
    }
    function Ae(H) {
      const X = S.value;
      X != null && X.isConnected && (I.value = X), S.value = null, a("leave", H);
    }
    function Me(H) {
      var ae, pe;
      const X = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if ((ae = H.currentTarget) == null || ae.dispatchEvent(X), a("entryFocus", X), !X.defaultPrevented)
        if (I.value) G(I.value);
        else {
          const ve = (pe = j()) == null ? void 0 : pe[0];
          G(ve);
        }
    }
    function Ve(H) {
      const X = $u(H, i.value, w.value);
      if (!X) return;
      let ae = j();
      if (S.value) {
        if (X === "last") ae.reverse();
        else if (X === "prev" || X === "next") {
          X === "prev" && ae.reverse();
          const pe = ae.indexOf(S.value);
          ae = ae.slice(pe + 1);
        }
        Xe(H, ae[0]);
      }
      if (ae.length) {
        const pe = !S.value && X === "prev" ? ae.length - 1 : 0;
        G(ae[pe]);
      }
      if (F.value) return M.trigger(H);
    }
    function Xe(H, X) {
      var pe;
      if (!(F.value || o.selectionBehavior !== "replace" || !r.value || !Array.isArray(O.value) || (H.altKey || H.ctrlKey || H.metaKey) && !H.shiftKey) && H.shiftKey) {
        const ve = p().filter((Be) => Be.ref.dataset.disabled !== "");
        let J = (pe = ve.find((Be) => Be.ref === X)) == null ? void 0 : pe.value;
        if (H.key === g.END ? J = ve[ve.length - 1].value : H.key === g.HOME && (J = ve[0].value), !J || !k.value) return;
        const he = Hy(ve.map((Be) => Be.value), k.value, J);
        O.value = he;
      }
    }
    async function ot(H) {
      if (await re(), F.value) L.trigger(H);
      else {
        const X = j(), ae = X.find((pe) => pe.dataset.state === "checked");
        ae ? G(ae) : X.length && G(X[0]);
      }
    }
    return te(O, () => {
      $.value || re(() => {
        ot();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: S,
      highlightItem: K,
      highlightFirstItem: le,
      highlightSelected: ot,
      getItems: p
    }), Qb({
      modelValue: O,
      onValueChange: P,
      multiple: r,
      orientation: i,
      dir: w,
      disabled: u,
      highlightOnHover: l,
      highlightedElement: S,
      isVirtual: F,
      virtualFocusHook: L,
      virtualKeydownHook: M,
      virtualHighlightHook: W,
      by: o.by,
      firstValue: k,
      selectionBehavior: d,
      focusable: A,
      onLeave: Ae,
      onEnter: Me,
      changeHighlight: G,
      onKeydownEnter: Q,
      onKeydownNavigation: Ve,
      onKeydownTypeAhead: Y,
      onCompositionStart: N,
      onCompositionEnd: ue,
      highlightFirstItem: le
    }), (H, X) => (h(), x(s(ge), {
      ref_key: "primitiveElement",
      ref: v,
      as: H.as,
      "as-child": H.asChild,
      dir: s(w),
      "data-disabled": s(u) ? "" : void 0,
      onPointerleave: Ae,
      onFocusout: X[0] || (X[0] = async (ae) => {
        const pe = ae.relatedTarget || ae.target;
        await re(), S.value && s(f) && !s(f).contains(pe) && Ae(ae);
      })
    }, {
      default: y(() => [_(H.$slots, "default", { modelValue: s(O) }), s(C) && H.name ? (h(), x(s(Bu), {
        key: 0,
        name: H.name,
        value: s(O),
        disabled: s(u),
        required: H.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : de("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), ew = Jb, tw = /* @__PURE__ */ b({
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
    const { CollectionSlot: t } = ba(), n = wa(), o = pu(!1, 10);
    return (a, r) => (h(), x(s(t), null, {
      default: y(() => [R(s(ge), {
        role: "listbox",
        as: a.as,
        "as-child": a.asChild,
        tabindex: s(n).focusable.value ? s(n).highlightedElement.value ? "-1" : "0" : void 0,
        "aria-orientation": s(n).orientation.value,
        "aria-multiselectable": !!s(n).multiple.value,
        "data-orientation": s(n).orientation.value,
        onMousedown: r[0] || (r[0] = De((l) => o.value = !0, ["left"])),
        onFocus: r[1] || (r[1] = (l) => {
          s(o) || s(n).onEnter(l);
        }),
        onKeydown: [
          r[2] || (r[2] = Je((l) => {
            s(n).orientation.value === "vertical" && (l.key === "ArrowLeft" || l.key === "ArrowRight") || s(n).orientation.value === "horizontal" && (l.key === "ArrowUp" || l.key === "ArrowDown") || (l.preventDefault(), s(n).focusable.value && s(n).onKeydownNavigation(l));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          Je(s(n).onKeydownEnter, ["enter"]),
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
}), nw = tw, ow = /* @__PURE__ */ b({
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
    const n = e, a = Lt(n, "modelValue", t, {
      defaultValue: "",
      passive: n.modelValue === void 0
    }), r = wa(), { primitiveElement: l, currentElement: i } = Gt(), u = B(() => n.disabled || r.disabled.value || !1), d = E();
    return ml(() => {
      var c;
      return d.value = (c = r.highlightedElement.value) == null ? void 0 : c.id;
    }), ie(() => {
      r.focusable.value = !1, setTimeout(() => {
        var c;
        n.autoFocus && ((c = i.value) == null || c.focus());
      }, 1);
    }), Ne(() => {
      r.focusable.value = !0;
    }), (c, p) => (h(), x(s(ge), {
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
      onKeydown: [Je(De(s(r).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), Je(s(r).onKeydownEnter, ["enter"])],
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
}), aw = ow;
const [J_, rw] = Ye("ListboxGroup");
var sw = /* @__PURE__ */ b({
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
    const t = e, n = bt(void 0, "reka-listbox-group");
    return rw({ id: n }), (o, a) => (h(), x(s(ge), D({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), lw = sw;
const iw = "listbox.select", [uw, dw] = Ye("ListboxItem");
var cw = /* @__PURE__ */ b({
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
    const n = e, o = t, a = bt(void 0, "reka-listbox-item"), { CollectionItem: r } = ba(), { forwardRef: l, currentElement: i } = be(), u = wa(), d = B(() => i.value === u.highlightedElement.value), c = B(() => Zb(u.modelValue.value, n.value, u.by)), p = B(() => u.disabled.value || n.disabled);
    async function m(f) {
      o("select", f), !(f != null && f.defaultPrevented) && !p.value && f && (u.onValueChange(n.value), u.changeHighlight(i.value));
    }
    function v(f) {
      const g = {
        originalEvent: f,
        value: n.value
      };
      os(iw, m, g);
    }
    return dw({ isSelected: c }), (f, g) => (h(), x(s(r), { value: f.value }, {
      default: y(() => [Wu([d.value, c.value], () => R(s(ge), D({ id: s(a) }, f.$attrs, {
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
        onKeydown: Je(De(v, ["prevent"]), ["space"]),
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
}), pw = cw, fw = /* @__PURE__ */ b({
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
    const n = uw();
    return (o, a) => s(n).isSelected.value ? (h(), x(s(ge), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16)) : de("v-if", !0);
  }
}), mw = fw;
const [Vt, vw] = Ye("ComboboxRoot");
var gw = /* @__PURE__ */ b({
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
    var j, G, K;
    const o = e, a = n, { primitiveElement: r, currentElement: l } = Gt(), { multiple: i, disabled: u, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: p, openOnClick: m, dir: v } = we(o), f = vu(v), g = Lt(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (i.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    }), w = Lt(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    async function C(Q) {
      var Y, N;
      w.value = Q, L.value = "", Q ? (await re(), (Y = r.value) == null || Y.highlightSelected(), $.value = !0) : $.value = !1, (N = O.value) == null || N.focus(), setTimeout(() => {
        !Q && o.resetSearchTermOnBlur && k.trigger();
      }, 1);
    }
    const k = Lo(), $ = E(!1), A = E(!1), O = E(), P = E(), S = B(() => {
      var Q;
      return ((Q = r.value) == null ? void 0 : Q.highlightedElement) ?? void 0;
    }), I = E(/* @__PURE__ */ new Map()), F = E(/* @__PURE__ */ new Map()), { contains: T } = d0({ sensitivity: "base" }), L = E(""), M = B((Q) => {
      if (!L.value || o.ignoreFilter || A.value) return {
        count: I.value.size,
        items: (Q == null ? void 0 : Q.items) ?? /* @__PURE__ */ new Map(),
        groups: (Q == null ? void 0 : Q.groups) ?? new Set(F.value.keys())
      };
      let Y = 0;
      const N = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set();
      for (const [le, Ae] of I.value) {
        const Me = T(Ae, L.value);
        N.set(le, Me ? 1 : 0), Me && Y++;
      }
      for (const [le, Ae] of F.value) for (const Me of Ae) if (N.get(Me) > 0) {
        ue.add(le);
        break;
      }
      return {
        count: Y,
        items: N,
        groups: ue
      };
    }), W = Ue();
    return ie(() => {
      var Q, Y, N;
      W != null && W.exposed && (W.exposed.highlightItem = (Q = r.value) == null ? void 0 : Q.highlightItem, W.exposed.highlightFirstItem = (Y = r.value) == null ? void 0 : Y.highlightFirstItem, W.exposed.highlightSelected = (N = r.value) == null ? void 0 : N.highlightSelected);
    }), t({
      filtered: M,
      highlightedElement: S,
      highlightItem: (j = r.value) == null ? void 0 : j.highlightItem,
      highlightFirstItem: (G = r.value) == null ? void 0 : G.highlightFirstItem,
      highlightSelected: (K = r.value) == null ? void 0 : K.highlightSelected
    }), vw({
      modelValue: g,
      multiple: i,
      disabled: u,
      open: w,
      onOpenChange: C,
      contentId: "",
      isUserInputted: $,
      isVirtual: A,
      inputElement: O,
      highlightedElement: S,
      onInputElementChange: (Q) => O.value = Q,
      triggerElement: P,
      onTriggerElementChange: (Q) => P.value = Q,
      parentElement: l,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: k.on,
      allItems: I,
      allGroups: F,
      filterSearch: L,
      filterState: M,
      ignoreFilter: d,
      openOnFocus: p,
      openOnClick: m
    }), (Q, Y) => (h(), x(s(zb), null, {
      default: y(() => [R(s(ew), D({
        ref_key: "primitiveElement",
        ref: r
      }, Q.$attrs, {
        modelValue: s(g),
        "onUpdate:modelValue": Y[0] || (Y[0] = (N) => rt(g) ? g.value = N : null),
        style: { pointerEvents: s(w) ? "auto" : void 0 },
        as: Q.as,
        "as-child": Q.asChild,
        dir: s(f),
        multiple: s(i),
        name: Q.name,
        required: Q.required,
        disabled: s(u),
        "highlight-on-hover": !0,
        by: o.by,
        onHighlight: Y[1] || (Y[1] = (N) => a("highlight", N))
      }), {
        default: y(() => [_(Q.$slots, "default", {
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
}), hw = gw;
const [ex, yw] = Ye("ComboboxContent");
var bw = /* @__PURE__ */ b({
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
    const n = e, o = t, { position: a } = we(n), r = Vt(), { forwardRef: l, currentElement: i } = be();
    fu(n.bodyLock), yu(r.parentElement);
    const u = B(() => n.position === "popper" ? n : {}), d = fn(u.value), c = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    yw({ position: a });
    const p = E(!1);
    return ie(() => {
      r.inputElement.value && (p.value = i.value.contains(r.inputElement.value), p.value && r.inputElement.value.focus());
    }), Ne(() => {
      var m;
      p.value && ((m = r.triggerElement.value) == null || m.focus());
    }), (m, v) => (h(), x(s(nw), { "as-child": "" }, {
      default: y(() => [R(s(_u), {
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
        default: y(() => [(h(), x(Ze(s(a) === "popper" ? s(Gb) : s(ge)), D({
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
}), ww = bw, _w = /* @__PURE__ */ b({
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
    const n = Vt();
    function o() {
      n.filterSearch.value = "", n.inputElement.value && (n.inputElement.value.value = "", n.inputElement.value.focus());
    }
    return (a, r) => (h(), x(s(ge), D({ type: a.as === "button" ? "button" : void 0 }, t, {
      tabindex: "-1",
      onClick: o
    }), {
      default: y(() => [_(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), tx = _w, xw = /* @__PURE__ */ b({
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
    const a = Bt(e, t), { forwardRef: r } = be(), l = Vt();
    return l.contentId || (l.contentId = bt(void 0, "reka-combobox-content")), (i, u) => (h(), x(s(bo), { present: i.forceMount || s(l).open.value }, {
      default: y(() => [R(ww, D({
        ...s(a),
        ...i.$attrs
      }, { ref: s(r) }), {
        default: y(() => [_(i.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), Cw = xw, kw = /* @__PURE__ */ b({
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
    const t = e, n = Vt(), o = B(() => n.ignoreFilter.value ? n.allItems.value.size === 0 : n.filterState.value.count === 0);
    return (a, r) => o.value ? (h(), x(s(ge), Z(D({ key: 0 }, t)), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[0] || (r[0] = _e("No options"))])]),
      _: 3
    }, 16)) : de("v-if", !0);
  }
}), $w = kw;
const [Eu, Bw] = Ye("ComboboxGroup");
var Sw = /* @__PURE__ */ b({
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
    const t = e, n = bt(void 0, "reka-combobox-group"), o = Vt(), a = B(() => o.ignoreFilter.value ? !0 : o.filterSearch.value ? o.filterState.value.groups.has(n) : !0), r = Bw({
      id: n,
      labelId: ""
    });
    return ie(() => {
      o.allGroups.value.has(n) || o.allGroups.value.set(n, /* @__PURE__ */ new Set());
    }), Ne(() => {
      o.allGroups.value.delete(n);
    }), (l, i) => (h(), x(s(lw), D({
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
}), Ow = Sw, Ew = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Vt(), r = wa(), { primitiveElement: l, currentElement: i } = Gt(), u = Lt(n, "modelValue", o, { passive: n.modelValue === void 0 });
    ie(() => {
      i.value && a.onInputElementChange(i.value);
    });
    function d(f) {
      a.open.value || a.onOpenChange(!0);
    }
    function c(f) {
      const g = f.target;
      a.open.value ? a.filterSearch.value = g.value : (a.onOpenChange(!0), re(() => {
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
      n.displayValue ? u.value = n.displayValue(f) : !a.multiple.value && f && !Array.isArray(f) && typeof f != "object" ? u.value = f.toString() : u.value = "", re(() => {
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
      !a.isVirtual.value && !a.highlightedElement.value && r.highlightFirstItem();
    }), (f, g) => (h(), x(s(aw), {
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
      onKeydown: Je(De(d, ["prevent"]), ["down", "up"]),
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
}), Pw = Ew, Aw = /* @__PURE__ */ b({
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
    const n = e, o = t, a = bt(void 0, "reka-combobox-item"), r = Vt(), l = Eu(null), { primitiveElement: i, currentElement: u } = Gt();
    if (n.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = B(() => {
      if (r.isVirtual.value || r.ignoreFilter.value || !r.filterSearch.value) return !0;
      {
        const c = r.filterState.value.items.get(a);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return ie(() => {
      var p;
      r.allItems.value.set(a, n.textValue || u.value.textContent || u.value.innerText);
      const c = l == null ? void 0 : l.id;
      c && (r.allGroups.value.has(c) ? (p = r.allGroups.value.get(c)) == null || p.add(a) : r.allGroups.value.set(c, /* @__PURE__ */ new Set([a])));
    }), Ne(() => {
      r.allItems.value.delete(a);
    }), (c, p) => d.value ? (h(), x(s(pw), D({ key: 0 }, n, {
      id: s(a),
      ref_key: "primitiveElement",
      ref: i,
      disabled: s(r).disabled.value || c.disabled,
      onSelect: p[0] || (p[0] = (m) => {
        o("select", m), !m.defaultPrevented && !s(r).multiple.value && !c.disabled && !s(r).disabled.value && (m.preventDefault(), s(r).onOpenChange(!1), s(r).modelValue.value = n.value);
      })
    }), {
      default: y(() => [_(c.$slots, "default", {}, () => [_e(Se(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : de("v-if", !0);
  }
}), Dw = Aw, Tw = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(mw), Z(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), nx = Tw, Iw = /* @__PURE__ */ b({
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
    const n = Eu({
      id: "",
      labelId: ""
    });
    return n.labelId || (n.labelId = bt(void 0, "reka-combobox-group-label")), (o, a) => (h(), x(s(ge), D(t, { id: s(n).labelId }), {
      default: y(() => [_(o.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Mw = Iw, Fw = /* @__PURE__ */ b({
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
    return (n, o) => (h(), x(s(ku), Z(ee(t)), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Rw = Fw, Lw = /* @__PURE__ */ b({
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
    return be(), (n, o) => (h(), x(s(ge), D(t, { "aria-hidden": "true" }), {
      default: y(() => [_(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Vw = Lw, zw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n, currentElement: o } = be(), a = Vt(), r = B(() => t.disabled || a.disabled.value || !1);
    return ie(() => {
      o.value && a.onTriggerElementChange(o.value);
    }), (l, i) => (h(), x(s(ge), D(t, {
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
}), ox = zw;
function qw(e) {
  const t = ga({ nonce: E() });
  return B(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
var Nw = /* @__PURE__ */ b({
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
    const t = e, { forwardRef: n } = be(), { nonce: o } = we(t), a = qw(o), r = Vt();
    return (l, i) => (h(), q(ke, null, [R(s(ge), D({
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
    }, 16, ["style"]), R(s(ge), {
      as: "style",
      nonce: s(a)
    }, {
      default: y(() => i[0] || (i[0] = [_e(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), jw = Nw, Hw = /* @__PURE__ */ b({
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
    return be(), (n, o) => (h(), x(s(ge), D(t, { "data-type": "ellipsis" }), {
      default: y(() => [_(n.$slots, "default", {}, () => [o[0] || (o[0] = _e("…"))])]),
      _: 3
    }, 16));
  }
}), Kw = Hw;
const [Wn, Ww] = Ye("PaginationRoot");
var Uw = /* @__PURE__ */ b({
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
    const i = Lt(n, "page", o, {
      defaultValue: n.defaultPage,
      passive: n.page === void 0
    }), u = B(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
    return Ww({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: a,
      disabled: r,
      showEdges: l
    }), (d, c) => (h(), x(s(ge), {
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
}), Gw = Uw, Yw = /* @__PURE__ */ b({
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
    const t = e, n = Wn();
    be();
    const o = B(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ge), D(t, {
      "aria-label": "First Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("First page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Xw = Yw, Zw = /* @__PURE__ */ b({
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
    const t = e, n = Wn();
    be();
    const o = B(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ge), D(t, {
      "aria-label": "Last Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).pageCount.value))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("Last page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Qw = Zw;
function jt(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (o, a) => a + e);
}
function Jw(e) {
  return e.map((t) => typeof t == "number" ? {
    type: "page",
    value: t
  } : { type: "ellipsis" });
}
const To = "ellipsis";
function e1(e, t, n, o) {
  const r = t, l = Math.max(e - n, 1), i = Math.min(e + n, r);
  if (o) {
    const d = Math.min(2 * n + 5, t) - 2, c = l > 3 && Math.abs(r - d - 1 + 1) > 2 && Math.abs(l - 1) > 2, p = i < r - 2 && Math.abs(r - d) > 2 && Math.abs(r - i) > 2;
    if (!c && p)
      return [
        ...jt(1, d),
        To,
        r
      ];
    if (c && !p) {
      const v = jt(r - d + 1, r);
      return [
        1,
        To,
        ...v
      ];
    }
    if (c && p) {
      const v = jt(l, i);
      return [
        1,
        To,
        ...v,
        To,
        r
      ];
    }
    return jt(1, r);
  } else {
    const u = n * 2 + 1;
    return t < u ? jt(1, r) : e <= n + 1 ? jt(1, u) : t - e <= n ? jt(t - u + 1, r) : jt(l, i);
  }
}
var t1 = /* @__PURE__ */ b({
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
    const n = Wn(), o = B(() => Jw(e1(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
    return (a, r) => (h(), x(s(ge), Z(ee(t)), {
      default: y(() => [_(a.$slots, "default", { items: o.value })]),
      _: 3
    }, 16));
  }
}), n1 = t1, o1 = /* @__PURE__ */ b({
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
    const n = Wn(), o = B(() => n.page.value === t.value), a = B(() => n.disabled.value);
    return (r, l) => (h(), x(s(ge), D(t, {
      "data-type": "page",
      "aria-label": `Page ${r.value}`,
      "aria-current": o.value ? "page" : void 0,
      "data-selected": o.value ? "true" : void 0,
      disabled: a.value,
      type: r.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (i) => !a.value && s(n).onPageChange(r.value))
    }), {
      default: y(() => [_(r.$slots, "default", {}, () => [_e(Se(r.value), 1)])]),
      _: 3
    }, 16, [
      "aria-label",
      "aria-current",
      "data-selected",
      "disabled",
      "type"
    ]));
  }
}), a1 = o1, r1 = /* @__PURE__ */ b({
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
    const n = Wn(), o = B(() => n.page.value === n.pageCount.value || n.disabled.value);
    return (a, r) => (h(), x(s(ge), D(t, {
      "aria-label": "Next Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value + 1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("Next page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), s1 = r1, l1 = /* @__PURE__ */ b({
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
    const n = Wn(), o = B(() => n.page.value === 1 || n.disabled.value);
    return (a, r) => (h(), x(s(ge), D(t, {
      "aria-label": "Previous Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: o.value,
      onClick: r[0] || (r[0] = (l) => !o.value && s(n).onPageChange(s(n).page.value - 1))
    }), {
      default: y(() => [_(a.$slots, "default", {}, () => [r[1] || (r[1] = _e("Prev page"))])]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), i1 = l1;
const ax = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Bt(a, o);
    return (l, i) => (h(), x(s(Mb), D(s(r), {
      class: s(V)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        R(s(Rb), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            _(l.$slots, "default", {}, () => [
              R(s(qy), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rx = /* @__PURE__ */ b({
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
    const a = Bt(e, t);
    return (r, l) => (h(), x(s(B0), Z(ee(s(a))), {
      default: y(({ open: i }) => [
        _(r.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), sx = /* @__PURE__ */ b({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(O0), D(t, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lx = /* @__PURE__ */ b({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(P0), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ix = /* @__PURE__ */ b({
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
    const a = Bt(e, t);
    return (r, l) => (h(), x(s(hw), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ux = /* @__PURE__ */ b({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class"), o = fn(n);
    return (a, r) => (h(), x(s(Xb), D(s(o), {
      class: s(V)("w-[200px]", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dx = /* @__PURE__ */ b({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s($w), D(s(n), {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cx = /* @__PURE__ */ b({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s(Ow), D(s(n), {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (h(), x(s(Mw), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            _e(Se(e.heading), 1)
          ]),
          _: 1
        })) : de("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), px = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ke(n, "class"), r = Bt(a, o);
    return (l, i) => (h(), x(s(Pw), D(s(r), {
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
}), fx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ke(n, "class"), r = Bt(a, o);
    return (l, i) => (h(), x(s(Dw), D(s(r), {
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
}), mx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ke(n, "class"), r = Bt(a, o);
    return (l, i) => (h(), x(s(Rw), null, {
      default: y(() => [
        R(s(Cw), D(s(r), {
          class: s(V)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: y(() => [
            R(s(jw), null, {
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
}), vx = /* @__PURE__ */ b({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s(Vw), D(s(n), {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u1 = /* @__PURE__ */ b({
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
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(of), D(s(r), {
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
}), d1 = /* @__PURE__ */ b({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Pr), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gx = /* @__PURE__ */ b({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(sn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hx = /* @__PURE__ */ b({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ar), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yx = /* @__PURE__ */ b({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), bx = /* @__PURE__ */ b({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(Fr), D(s(o), {
      class: s(V)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wx = /* @__PURE__ */ b({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(Rr), D(s(o), {
      class: s(V)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c1 = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Dr), null, {
      default: y(() => [
        R(s(la), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(sa), D(s(r), {
          class: s(V)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(sn), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                R(s(pa), { class: "size-4" }),
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
}), _x = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Dr), null, {
      default: y(() => [
        R(s(la), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            R(s(sa), D({
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
                R(s(sn), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    R(s(pa), { class: "h-4 w-4" }),
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
}), xx = /* @__PURE__ */ b({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Cx = /* @__PURE__ */ b({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(d1), Z(ee(s(a))), {
      default: y(() => [
        R(s(c1), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            R(u1, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), kx = /* @__PURE__ */ b({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(pf), D(n.value, {
      class: s(V)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $x = /* @__PURE__ */ b({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(sf), D(n.value, {
      class: s(V)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        e.heading ? (h(), x(s(lf), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            _e(Se(e.heading), 1)
          ]),
          _: 1
        })) : de("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p1 = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, Bx = /* @__PURE__ */ b({
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
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), q("div", p1, [
      R(s(Bh), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(s(af), D({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(V)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Sx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(gf), D(s(r), {
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
}), f1 = { role: "presentation" }, Ox = /* @__PURE__ */ b({
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
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(cf), D(s(r), {
      class: s(V)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        ne("div", f1, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ex = /* @__PURE__ */ b({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(hf), D(n.value, {
      class: s(V)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Px = /* @__PURE__ */ b({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("span", {
      class: se(s(V)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
function Va(e = {}) {
  const t = {};
  return e.columns && e.columns.forEach((n) => {
    t[n] = !0;
  }), {
    filters: {},
    sort: {
      column: null,
      direction: null
    },
    search: "",
    page: 1,
    perPage: e.defaultPerPage || 15,
    cursor: null,
    sticky: [],
    columns: t,
    ...e.initialState
  };
}
function m1(e = {}) {
  const t = E(Va(e));
  Va(e);
  function n(P, S) {
    t.value.filters[P] = {
      enabled: !0,
      value: S
    };
  }
  function o(P) {
    t.value.filters[P] && (t.value.filters[P].enabled = !1, t.value.filters[P].value = null);
  }
  function a() {
    Object.keys(t.value.filters).forEach((P) => {
      t.value.filters[P].enabled = !1, t.value.filters[P].value = null;
    });
  }
  function r(P, S) {
    t.value.sort = {
      column: P,
      direction: S
    };
  }
  function l(P) {
    t.value.sort.column !== P ? r(P, "asc") : t.value.sort.direction === "asc" ? r(P, "desc") : r(null, null);
  }
  function i(P) {
    t.value.search = P;
  }
  function u(P) {
    t.value.page = P;
  }
  function d(P) {
    t.value.perPage = P;
  }
  function c(P) {
    t.value.cursor = P;
  }
  function p(P) {
    if (!e.columns) return;
    const S = e.columns.indexOf(P);
    if (S === -1) return;
    const I = e.columns.slice(0, S + 1);
    t.value.sticky = I;
  }
  function m(P) {
    const S = t.value.sticky.indexOf(P);
    S !== -1 && (t.value.sticky = t.value.sticky.slice(0, S));
  }
  function v(P) {
    P in t.value.columns && (t.value.columns[P] = !t.value.columns[P]);
  }
  function f(P) {
    t.value.columns[P] = !0;
  }
  function g(P) {
    t.value.columns[P] = !1;
  }
  function w(P) {
    t.value = {
      ...t.value,
      ...P
    };
  }
  function C() {
    const P = new URLSearchParams(), S = e.urlPrefix || "";
    return Object.entries(t.value.filters).forEach(([I, F]) => {
      F.enabled && F.value != null && P.append(`${S}filter[${I}]`, String(F.value));
    }), t.value.sort.column && t.value.sort.direction && (P.append(`${S}sort`, t.value.sort.column), P.append(`${S}direction`, t.value.sort.direction)), t.value.search && P.append(`${S}search`, t.value.search), t.value.page !== 1 && P.append(`${S}page`, String(t.value.page)), t.value.perPage !== (e.defaultPerPage || 15) && P.append(`${S}perPage`, String(t.value.perPage)), t.value.cursor && P.append(`${S}cursor`, t.value.cursor), t.value.sticky.forEach((I) => {
      P.append(`${S}sticky[]`, I);
    }), Object.entries(t.value.columns).forEach(([I, F]) => {
      F || P.append(`${S}columns[${I}]`, "false");
    }), P.toString();
  }
  function k() {
    return { ...t.value };
  }
  function $(P) {
    const S = new URLSearchParams(P), I = e.urlPrefix || "", F = {};
    S.forEach((Q, Y) => {
      const N = Y.match(new RegExp(`^${I}filter\\[(.+)\\]$`));
      N && (F[N[1]] = {
        enabled: !0,
        value: Q
      });
    }), Object.keys(F).length > 0 && (t.value.filters = { ...t.value.filters, ...F });
    const T = S.get(`${I}sort`), L = S.get(`${I}direction`);
    T && (t.value.sort = { column: T, direction: L || "asc" });
    const M = S.get(`${I}search`);
    M && (t.value.search = M);
    const W = S.get(`${I}page`);
    W && (t.value.page = parseInt(W, 10));
    const j = S.get(`${I}perPage`);
    j && (t.value.perPage = parseInt(j, 10));
    const G = S.get(`${I}cursor`);
    G && (t.value.cursor = G);
    const K = [];
    S.forEach((Q, Y) => {
      Y === `${I}sticky[]` && K.push(Q);
    }), K.length > 0 && (t.value.sticky = K), S.forEach((Q, Y) => {
      const N = Y.match(new RegExp(`^${I}columns\\[(.+)\\]$`));
      N && (t.value.columns[N[1]] = Q !== "false");
    });
  }
  function A(P) {
    w(P);
  }
  function O() {
    t.value = Va(e);
  }
  return e.syncWithUrl && typeof window < "u" && (te(
    t,
    () => {
      const P = C(), S = P ? `${window.location.pathname}?${P}` : window.location.pathname;
      window.history.replaceState({}, "", S);
    },
    { deep: !0 }
  ), window.location.search && $(window.location.search.substring(1))), {
    state: t,
    addFilter: n,
    removeFilter: o,
    clearFilters: a,
    setSort: r,
    toggleSort: l,
    setSearch: i,
    setPage: u,
    setPerPage: d,
    setCursor: c,
    makeSticky: p,
    undoSticky: m,
    toggleColumn: v,
    showColumn: f,
    hideColumn: g,
    setState: w,
    toQueryString: C,
    toObject: k,
    fromQueryString: $,
    fromObject: A,
    reset: O
  };
}
function v1(e) {
  const { tableData: t, onSelectionChange: n } = e, o = E(/* @__PURE__ */ new Set()), a = B(() => !t.value || t.value.length === 0 ? !1 : t.value.every((c, p) => o.value.has(p))), r = B(() => !t.value || t.value.length === 0 ? !1 : o.value.size > 0 && !a.value);
  return {
    selectedRows: o,
    allSelected: a,
    someSelected: r,
    toggleRow: (c) => {
      o.value.has(c) ? o.value.delete(c) : o.value.add(c), n == null || n(o.value);
    },
    toggleAll: () => {
      a.value ? o.value.clear() : t.value.forEach((c, p) => {
        o.value.add(p);
      }), n == null || n(o.value);
    },
    clearSelection: () => {
      o.value.clear(), n == null || n(o.value);
    },
    getSelectedRowData: () => Array.from(o.value).map((c) => t.value[c]).filter(Boolean)
  };
}
function g1(e) {
  const { actions: t } = e, n = B(() => t.value.some((d) => d.bulk === !0)), o = B(() => t.value.length > 0), a = B(() => t.value.filter((d) => !d.bulk)), r = B(() => t.value.filter((d) => d.bulk === !0));
  return {
    showSelectionColumn: n,
    showActionsColumn: o,
    rowActions: a,
    bulkActions: r,
    getVisibleActions: (d) => a.value.filter((c) => c.visible ? c.visible(d) : !0),
    handleActionClick: (d, c) => {
      d.handler([c]);
    },
    handleBulkActionClick: (d, c) => {
      d.handler(c);
    }
  };
}
function rr(e) {
  let t = null;
  return (...n) => {
    t && cancelAnimationFrame(t), t = requestAnimationFrame(() => {
      e(...n);
    });
  };
}
function h1() {
  return new Promise((e) => {
    if (!(window != null && window.requestAnimationFrame))
      return e(60);
    const t = [];
    let n;
    function o(a) {
      if (t.unshift(a), t.length > 10) {
        const r = t.pop(), l = Math.floor(1e3 * 10 / (a - r));
        cancelAnimationFrame(n), e(Math.min(Math.max(l, 30), 240));
        return;
      }
      n = window.requestAnimationFrame(o);
    }
    n = window.requestAnimationFrame(o), setTimeout(() => {
      cancelAnimationFrame(n), e(60);
    }, 1e3);
  });
}
function y1(e) {
  const t = rr(() => {
    const a = e();
    if (!a)
      return;
    a.scrollLeft ? a.dataset.scrollX = "true" : delete a.dataset.scrollX;
  }), n = rr(() => {
    const a = e();
    if (!a)
      return;
    let r = 0;
    const i = a.querySelectorAll("th")[0];
    i && !i.getAttribute("data-column") && (r += i.getBoundingClientRect().width), a.querySelectorAll("th[data-column]").forEach((u) => {
      const d = u.getAttribute("data-column");
      d && (a.style.setProperty(`--column-${d}-offset`, `${r}px`), r += u.getBoundingClientRect().width);
    });
  });
  let o = null;
  return {
    add: () => {
      const a = e();
      a && (o = new MutationObserver(() => {
        n(), t();
      }), a.addEventListener("scroll", t, { passive: !0 }), o.observe(a, { childList: !0, subtree: !0 }), window.addEventListener("resize", n, { passive: !0 }), n(), t());
    },
    remove: () => {
      const a = e();
      window.removeEventListener("resize", n), o == null || o.disconnect(), a == null || a.removeEventListener("scroll", t);
    }
  };
}
function b1(e, t) {
  let n = null, o = Math.ceil(1e3 / 60);
  h1().then((i) => o = Math.ceil(1e3 / i));
  const a = rr((i, u) => {
    i.style.setProperty("--header-offset", `${u}px`);
  });
  function r() {
    const i = e(), u = t();
    if (!i || !u)
      return;
    i.dataset.isScrollingY = "true", n && clearTimeout(n);
    const d = i.getBoundingClientRect(), c = u.offsetHeight;
    let p = !1;
    d.top + c / 2 < 0 && d.bottom > c && (p = Math.min(-d.top, d.bottom - c - d.top) - c), a(i, p || 0), n = window.setTimeout(() => {
      const v = p ? p + c : 0;
      a(i, v), v ? i.dataset.scrollY = "true" : delete i.dataset.scrollY, delete i.dataset.isScrollingY;
    }, o);
  }
  let l = null;
  return {
    add: () => {
      const i = e();
      l = (i == null ? void 0 : i.closest("[scroll-region]")) || window, l.addEventListener("scroll", r, {
        passive: !0
      }), window.addEventListener("resize", r, { passive: !0 }), r();
    },
    remove: () => {
      window.removeEventListener("resize", r), l && l.removeEventListener("scroll", r), n && clearTimeout(n);
    }
  };
}
const w1 = ["data-column"], _1 = /* @__PURE__ */ b({
  __name: "DatatableHeaderCell",
  props: {
    column: {},
    sticky: { type: Boolean, default: !1 },
    isLastSticky: { type: Boolean, default: !1 },
    stickyOffsetVar: {}
  },
  setup(e) {
    const t = e, n = [
      "relative",
      "after:content-['']",
      "after:h-full",
      "after:w-px",
      "after:bg-gray-100",
      "after:shadow-[1px_0px_3px_0px_rgba(27,27,27,0.14)]",
      "after:absolute",
      "after:top-0",
      "after:right-0",
      "after:dark:bg-zinc-700"
    ].join(" "), o = B(() => V(
      "h-10 px-2 text-left align-middle font-medium text-gray-500 dark:text-zinc-400",
      "group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50",
      t.column.headerCellClasses,
      {
        // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
        "md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90": t.sticky
      },
      // Visual separator for last sticky column
      t.isLastSticky ? n : ""
    )), a = B(() => t.sticky && t.stickyOffsetVar ? { left: `var(${t.stickyOffsetVar}, 0px)` } : {});
    return (r, l) => (h(), q("th", {
      class: se(o.value),
      style: it(a.value),
      "data-column": e.column.key
    }, [
      ne("div", {
        class: se(e.column.headerContentClasses)
      }, Se(e.column.label), 3)
    ], 14, w1));
  }
}), x1 = ["data-column"], C1 = ["src", "alt"], k1 = /* @__PURE__ */ b({
  __name: "DatatableCell",
  props: {
    column: {},
    row: {},
    sticky: { type: Boolean, default: !1 },
    isLastSticky: { type: Boolean, default: !1 },
    stickyOffsetVar: {}
  },
  setup(e) {
    const t = e, n = Go(), o = [
      "relative",
      "after:content-['']",
      "after:h-full",
      "after:w-px",
      "after:bg-gray-100",
      "after:shadow-[1px_0px_3px_0px_rgba(27,27,27,0.14)]",
      "after:absolute",
      "after:top-0",
      "after:right-0",
      "after:dark:bg-zinc-700"
    ].join(" "), a = B(() => V(
      "p-2 align-middle",
      t.column.cellClasses,
      {
        // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
        "md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90": t.sticky
      },
      // Visual separator for last sticky column
      t.isLastSticky ? o : ""
    )), r = B(() => t.sticky && t.stickyOffsetVar ? { left: `var(${t.stickyOffsetVar}, 0px)` } : {}), l = B(() => !!t.column.image), i = B(() => t.row[t.column.key] || null), u = B(() => typeof t.column.image == "string" ? t.column.image : "size-6"), d = B(() => !!n[`row-${t.column.key}`]);
    return (c, p) => (h(), q("td", {
      class: se(a.value),
      style: it(r.value),
      "data-column": e.column.key
    }, [
      l.value && !d.value ? (h(), q(ke, { key: 0 }, [
        i.value ? (h(), q("img", {
          key: 0,
          src: i.value,
          alt: e.column.label,
          loading: "lazy",
          class: se(u.value)
        }, null, 10, C1)) : de("", !0)
      ], 64)) : (h(), q("div", {
        key: 1,
        class: se(e.column.cellContentClasses)
      }, [
        d.value ? _(c.$slots, `row-${e.column.key}`, {
          key: 0,
          row: e.row,
          column: e.column,
          value: e.row[e.column.key]
        }) : (h(), q(ke, { key: 1 }, [
          _e(Se(e.row[e.column.key]), 1)
        ], 64))
      ], 2))
    ], 14, x1));
  }
}), $1 = { class: "flex items-center justify-center" }, B1 = ["checked", "indeterminate"], S1 = "size-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800", ul = /* @__PURE__ */ b({
  __name: "DatatableSelectionCell",
  props: {
    isHeader: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    sticky: { type: Boolean, default: !0 }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const r = "w-12 px-2 align-middle", l = "group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50", i = n.sticky ? "md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90" : "", u = !n.isHeader && n.sticky ? "md:z-10" : "";
      return [r, l, i, u].filter(Boolean).join(" ");
    });
    return (r, l) => (h(), x(Ze(e.isHeader ? "th" : "td"), {
      class: se(a.value),
      style: { left: "0" }
    }, {
      default: y(() => [
        ne("div", $1, [
          ne("input", {
            type: "checkbox",
            checked: e.checked,
            indeterminate: e.indeterminate,
            class: se(S1),
            onChange: l[0] || (l[0] = (i) => o("change"))
          }, null, 40, B1)
        ])
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), O1 = {
  key: 0,
  class: "font-medium text-gray-500 dark:text-zinc-400"
}, E1 = {
  key: 1,
  class: "flex items-center justify-center gap-1"
}, P1 = {
  key: 1,
  class: "group/actions relative"
}, A1 = { class: "absolute right-0 z-50 mt-1 hidden min-w-[120px] rounded-md border border-gray-200 bg-white py-1 shadow-lg group-hover/actions:block dark:border-zinc-700 dark:bg-zinc-800" }, D1 = ["onClick"], dl = /* @__PURE__ */ b({
  __name: "DatatableActionsCell",
  props: {
    isHeader: { type: Boolean, default: !1 },
    visibleActions: { default: () => [] },
    row: {},
    rowIndex: {},
    sticky: { type: Boolean, default: !0 }
  },
  emits: ["action-click"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = B(() => {
      const l = "w-24 px-2 align-middle", i = (n.isHeader, "text-center"), u = "group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50", d = n.sticky ? "md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90" : "", c = !n.isHeader && n.sticky ? "md:z-10" : "";
      return [l, i, u, d, c].filter(Boolean).join(" ");
    }), r = (l) => {
      n.row && o("action-click", l, n.row);
    };
    return (l, i) => (h(), x(Ze(e.isHeader ? "th" : "td"), {
      class: se(a.value),
      style: { right: "0" }
    }, {
      default: y(() => [
        e.isHeader ? (h(), q("div", O1, "Actions")) : (h(), q("div", E1, [
          _(l.$slots, "actions", {
            row: e.row,
            rowIndex: e.rowIndex,
            visibleActions: e.visibleActions
          }),
          l.$slots.actions ? de("", !0) : (h(), q(ke, { key: 0 }, [
            e.visibleActions.length === 1 ? (h(), q("button", {
              key: 0,
              type: "button",
              class: "rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
              onClick: i[0] || (i[0] = (u) => r(e.visibleActions[0]))
            }, Se(e.visibleActions[0].label), 1)) : e.visibleActions.length > 1 ? (h(), q("div", P1, [
              i[1] || (i[1] = ne("button", {
                type: "button",
                class: "flex size-8 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-zinc-800",
                "aria-label": "Actions"
              }, [
                ne("svg", {
                  class: "size-4 text-gray-700 dark:text-zinc-300",
                  fill: "currentColor",
                  viewBox: "0 0 16 16"
                }, [
                  ne("circle", {
                    cx: "2",
                    cy: "8",
                    r: "1.5"
                  }),
                  ne("circle", {
                    cx: "8",
                    cy: "8",
                    r: "1.5"
                  }),
                  ne("circle", {
                    cx: "14",
                    cy: "8",
                    r: "1.5"
                  })
                ])
              ], -1)),
              ne("div", A1, [
                (h(!0), q(ke, null, st(e.visibleActions, (u) => (h(), q("button", {
                  key: u.label,
                  type: "button",
                  class: "block w-full px-4 py-2 text-left text-xs text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-700",
                  onClick: (d) => r(u)
                }, Se(u.label), 9, D1))), 128))
              ])
            ])) : de("", !0)
          ], 64))
        ]))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), T1 = { class: "group border-b border-gray-200 dark:border-zinc-700" }, I1 = { key: 1 }, M1 = ["colspan"], F1 = { class: "flex items-center justify-center py-10" }, Ax = /* @__PURE__ */ b({
  __name: "Datatable",
  props: {
    columns: {},
    data: {},
    datatableState: {},
    stickyColumns: { default: () => [] },
    actions: { default: () => [] },
    tableClasses: { default: "bg-white" }
  },
  emits: ["state-change", "selection-change"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = m1({
      columns: n.columns.map((k) => k.key)
    }), r = B(() => n.datatableState || a);
    te(
      () => n.stickyColumns,
      (k) => {
        !n.datatableState && k && (r.value.state.value.sticky = k);
      },
      { immediate: !0 }
    ), te(
      () => r.value.state.value,
      (k) => {
        o("state-change", k);
      },
      { deep: !0 }
    );
    const l = (k) => k && typeof k == "object" && "data" in k && Array.isArray(k.data), i = B(() => Array.isArray(n.data) ? n.data : l(n.data) ? n.data.data : []), u = B(() => !i.value || i.value.length === 0), d = v1({
      tableData: i,
      onSelectionChange: (k) => {
        o("selection-change", k);
      }
    }), c = g1({
      actions: ir(n, "actions")
    }), p = E(null), m = E(null), v = y1(() => p.value), f = b1(
      () => p.value,
      () => m.value
    );
    ie(() => {
      v.add(), f.add();
    }), Ne(() => {
      v.remove(), f.remove();
    });
    const g = (k) => n.stickyColumns.includes(k), w = (k) => {
      const $ = n.stickyColumns[n.stickyColumns.length - 1];
      return k === $;
    }, C = (k) => `--column-${k}-offset`;
    return (k, $) => (h(), q("div", {
      ref_key: "tableContainerRef",
      ref: p,
      class: "group/table max-h-full max-w-full overflow-auto rounded-md bg-white dark:bg-zinc-900"
    }, [
      ne("table", {
        class: se(s(V)("relative w-full caption-bottom text-sm border-collapse", e.tableClasses))
      }, [
        u.value ? de("", !0) : (h(), q("thead", {
          key: 0,
          ref_key: "theadRef",
          ref: m,
          class: "sticky top-0 z-20 bg-white dark:bg-zinc-900"
        }, [
          ne("tr", T1, [
            s(c).showSelectionColumn.value ? (h(), x(ul, {
              key: 0,
              "is-header": "",
              checked: s(d).allSelected.value,
              indeterminate: s(d).someSelected.value,
              onChange: s(d).toggleAll
            }, null, 8, ["checked", "indeterminate", "onChange"])) : de("", !0),
            (h(!0), q(ke, null, st(e.columns, (A) => (h(), x(_1, {
              key: A.key,
              column: A,
              sticky: g(A.key),
              "is-last-sticky": w(A.key),
              "sticky-offset-var": C(A.key)
            }, null, 8, ["column", "sticky", "is-last-sticky", "sticky-offset-var"]))), 128)),
            s(c).showActionsColumn.value ? (h(), x(dl, {
              key: 1,
              "is-header": ""
            })) : de("", !0)
          ])
        ], 512)),
        ne("tbody", null, [
          u.value ? (h(), q("tr", I1, [
            ne("td", {
              colspan: e.columns.length + (s(c).showSelectionColumn.value ? 1 : 0) + (s(c).showActionsColumn.value ? 1 : 0),
              class: "whitespace-nowrap p-4 align-middle text-sm text-foreground"
            }, [
              ne("div", F1, [
                _(k.$slots, "empty", {}, () => [
                  $[0] || ($[0] = _e("No Records.", -1))
                ])
              ])
            ], 8, M1)
          ])) : (h(!0), q(ke, { key: 0 }, st(i.value, (A, O) => (h(), q("tr", {
            key: O,
            class: "border-b border-gray-200 hover:bg-gray-100/50 dark:border-zinc-700 dark:hover:bg-zinc-900/50"
          }, [
            s(c).showSelectionColumn.value ? (h(), x(ul, {
              key: 0,
              checked: s(d).selectedRows.value.has(O),
              onChange: (P) => s(d).toggleRow(O)
            }, null, 8, ["checked", "onChange"])) : de("", !0),
            (h(!0), q(ke, null, st(e.columns, (P) => (h(), x(k1, {
              key: P.key,
              column: P,
              row: A,
              sticky: g(P.key),
              "is-last-sticky": w(P.key),
              "sticky-offset-var": C(P.key)
            }, gs({ _: 2 }, [
              k.$slots[`row-${P.key}`] ? {
                name: `row-${P.key}`,
                fn: y((S) => [
                  _(k.$slots, `row-${P.key}`, D({ ref_for: !0 }, S))
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["column", "row", "sticky", "is-last-sticky", "sticky-offset-var"]))), 128)),
            s(c).showActionsColumn.value ? (h(), x(dl, {
              key: 1,
              row: A,
              "row-index": O,
              "visible-actions": s(c).getVisibleActions(A),
              onActionClick: s(c).handleActionClick
            }, gs({ _: 2 }, [
              k.$slots["row-actions"] ? {
                name: "actions",
                fn: y((P) => [
                  _(k.$slots, "row-actions", D({ ref_for: !0 }, P))
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["row", "row-index", "visible-actions", "onActionClick"])) : de("", !0)
          ]))), 128))
        ])
      ], 2)
    ], 512));
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
const R1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const L1 = (e) => typeof e < "u";
function V1(e) {
  return JSON.parse(JSON.stringify(e));
}
function cl(e, t, n, o = {}) {
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
  const w = ($) => i ? typeof i == "function" ? i($) : V1($) : $, C = () => L1(e[t]) ? w(e[t]) : p, k = ($) => {
    m ? m($) && f(g, $) : f(g, $);
  };
  if (u) {
    const $ = C(), A = E($);
    let O = !1;
    return te(
      () => e[t],
      (P) => {
        O || (O = !0, A.value = w(P), re(() => O = !1));
      }
    ), te(
      A,
      (P) => {
        !O && (P !== e[t] || c) && k(P);
      },
      { deep: c }
    ), A;
  } else
    return B({
      get() {
        return C();
      },
      set($) {
        k($);
      }
    });
}
const [ls, z1] = Ye("DrawerRoot"), Pu = /* @__PURE__ */ new WeakMap();
function He(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const o = {};
  Object.entries(t).forEach(([a, r]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, r);
      return;
    }
    o[a] = e.style[a], e.style[a] = r;
  }), !n && Pu.set(e, o);
}
function q1(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = Pu.get(e);
  n && Object.entries(n).forEach(([o, a]) => {
    e.style[o] = a;
  });
}
function Io(e, t) {
  const n = window.getComputedStyle(e), o = n.transform || n.webkitTransform || n.mozTransform;
  let a = o.match(/^matrix3d\((.+)\)$/);
  return a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 13 : 12]) : (a = o.match(/^matrix\((.+)\)$/), a ? Number.parseFloat(a[1].split(", ")[Re(t) ? 5 : 4]) : null);
}
function N1(e) {
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
function za(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function j1(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Te = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Au = 0.4, H1 = 0.25, K1 = 100, Du = 8, Mo = 16, Tu = 26, pl = "vaul-dragging";
function W1({
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
  ie(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), Tn(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const d = B(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), c = B(
    () => t.value && t.value.length > 0 && ((a == null ? void 0 : a.value) || (a == null ? void 0 : a.value) === 0) && !Number.isNaN(a == null ? void 0 : a.value) && t.value[(a == null ? void 0 : a.value) ?? -1] === e.value || !t.value
  ), p = B(
    () => {
      var k;
      return ((k = t.value) == null ? void 0 : k.findIndex(($) => $ === e.value)) ?? null;
    }
  ), m = B(
    () => {
      var k;
      return ((k = t.value) == null ? void 0 : k.map(($) => {
        const A = typeof $ == "string";
        let O = 0;
        if (A && (O = Number.parseInt($, 10)), Re(l.value)) {
          const S = A ? O : i.value ? $ * i.value.innerHeight : 0;
          return i.value ? l.value === "bottom" ? i.value.innerHeight - S : -i.value.innerHeight + S : S;
        }
        const P = A ? O : i.value ? $ * i.value.innerWidth : 0;
        return i.value ? l.value === "right" ? i.value.innerWidth - P : -i.value.innerWidth + P : P;
      })) ?? [];
    }
  ), v = B(
    () => {
      var k;
      return p.value !== null ? (k = m.value) == null ? void 0 : k[p.value] : null;
    }
  ), f = (k) => {
    var $, A, O, P;
    const S = (($ = m.value) == null ? void 0 : $.findIndex((I) => I === k)) ?? null;
    re(() => {
      var I;
      r(S, m.value), He((I = n.value) == null ? void 0 : I.$el, {
        transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
        transform: Re(l.value) ? `translate3d(0, ${k}px, 0)` : `translate3d(${k}px, 0, 0)`
      });
    }), m.value && S !== m.value.length - 1 && S !== (a == null ? void 0 : a.value) ? He((A = o.value) == null ? void 0 : A.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "0"
    }) : He((O = o.value) == null ? void 0 : O.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), e.value = S !== null ? ((P = t.value) == null ? void 0 : P[S]) ?? null : null;
  };
  te(
    [e, m, t],
    () => {
      var k;
      if (e.value) {
        const $ = ((k = t.value) == null ? void 0 : k.findIndex((A) => A === e.value)) ?? -1;
        m.value && $ !== -1 && typeof m.value[$] == "number" && f(m.value[$]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function g({
    draggedDistance: k,
    closeDrawer: $,
    velocity: A,
    dismissible: O
  }) {
    var P, S, I;
    if (a.value === void 0)
      return;
    const F = l.value === "bottom" || l.value === "right" ? (v.value ?? 0) - k : (v.value ?? 0) + k, T = p.value === a.value - 1, L = p.value === 0, M = k > 0;
    if (T && He((P = o.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), A > 2 && !M) {
      O ? $() : f(m.value[0]);
      return;
    }
    if (A > 2 && M && m && t.value) {
      f(m.value[t.value.length - 1]);
      return;
    }
    const W = (S = m.value) == null ? void 0 : S.reduce((G, K) => typeof G != "number" || typeof K != "number" ? G : Math.abs(K - F) < Math.abs(G - F) ? K : G), j = Re(l.value) ? window.innerHeight : window.innerWidth;
    if (A > Au && Math.abs(k) < j * 0.4) {
      const G = M ? 1 : -1;
      if (G > 0 && d) {
        f(m.value[(((I = t.value) == null ? void 0 : I.length) ?? 0) - 1]);
        return;
      }
      if (L && G < 0 && O && $(), p.value === null)
        return;
      f(m.value[p.value + G]);
      return;
    }
    f(W);
  }
  function w({ draggedDistance: k }) {
    var $;
    if (v.value === null)
      return;
    const A = l.value === "bottom" || l.value === "right" ? v.value - k : v.value + k;
    (l.value === "bottom" || l.value === "right") && A < m.value[m.value.length - 1] || (l.value === "top" || l.value === "left") && A > m.value[m.value.length - 1] || He(($ = n.value) == null ? void 0 : $.$el, {
      transform: Re(l.value) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
    });
  }
  function C(k, $) {
    if (!t.value || typeof p.value != "number" || !m.value || a.value === void 0)
      return null;
    const A = p.value === a.value - 1;
    if (p.value >= a.value && $)
      return 0;
    if (A && !$)
      return 1;
    if (!c.value && !A)
      return null;
    const O = A ? p.value + 1 : p.value - 1, P = A ? m.value[O] - m.value[O - 1] : m.value[O + 1] - m.value[O], S = k / Math.abs(P);
    return A ? 1 - S : S;
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
function fl() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Xn = null;
function U1(e) {
  const { isOpen: t, modal: n, nested: o, hasBeenOpened: a, preventScrollRestoration: r, noBodyStyles: l } = e, i = E(typeof window < "u" ? window.location.href : ""), u = E(0);
  function d() {
    if (fl() && Xn === null && t.value && !l.value) {
      Xn = {
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
    if (fl() && Xn !== null && !l.value) {
      const p = -Number.parseInt(document.body.style.top, 10), m = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Xn), window.requestAnimationFrame(() => {
        if (r.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(m, p);
      }), Xn = null;
    }
  }
  return ie(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), Ne(() => {
      window.removeEventListener("scroll", p);
    });
  }), te([t, a, i], () => {
    o.value || !a.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || d(), n.value || setTimeout(() => {
      c();
    }, 500)) : c());
  }), { restorePositionSetting: c };
}
function G1(e, t) {
  return e && e.value ? e : t;
}
function Y1(e) {
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
    preventScrollRestoration: k
  } = e, $ = E(r.value ?? !1), A = E(!1), O = E(!1), P = E(!1), S = E(null), I = E(null), F = E(null), T = E(null), L = E(null), M = E(!1), W = E(null), j = E(0), G = E(!1);
  E(0);
  const K = E(null);
  E(0);
  const Q = B(() => {
    var oe;
    return ((oe = K.value) == null ? void 0 : oe.$el.getBoundingClientRect().height) || 0;
  }), Y = G1(
    e.snapPoints,
    E(void 0)
  ), N = B(() => {
    var oe;
    return Y && (((oe = Y.value) == null ? void 0 : oe.length) ?? 0) > 0;
  }), ue = E(null), {
    activeSnapPointIndex: le,
    onRelease: Ae,
    snapPointsOffset: Me,
    onDrag: Ve,
    shouldFade: Xe,
    getPercentageDragged: ot
  } = W1({
    snapPoints: Y,
    activeSnapPoint: v,
    drawerRef: K,
    fadeFromIndex: f,
    overlayRef: S,
    onSnapPointChange: H,
    direction: g
  });
  function H(oe, $e) {
    Y.value && oe === $e.length - 1 && (I.value = /* @__PURE__ */ new Date());
  }
  U1({
    isOpen: $,
    modal: u,
    nested: i,
    hasBeenOpened: A,
    noBodyStyles: w,
    preventScrollRestoration: k
  });
  function X() {
    return (window.innerWidth - Tu) / window.innerWidth;
  }
  function ae(oe, $e) {
    var Oe;
    if (!oe)
      return !1;
    let Ce = oe;
    const Fe = (Oe = window.getSelection()) == null ? void 0 : Oe.toString(), ze = K.value ? Io(K.value.$el, g.value) : null, Qe = /* @__PURE__ */ new Date();
    if (Ce.hasAttribute("data-vaul-no-drag") || Ce.closest("[data-vaul-no-drag]"))
      return !1;
    if (g.value === "right" || g.value === "left")
      return !0;
    if (I.value && Qe.getTime() - I.value.getTime() < 500)
      return !1;
    if (ze !== null && (g.value === "bottom" ? ze > 0 : ze < 0))
      return !0;
    if (Fe && Fe.length > 0)
      return !1;
    if (L.value && Qe.getTime() - L.value.getTime() < p.value && ze === 0 || $e)
      return L.value = Qe, !1;
    for (; Ce; ) {
      if (Ce.scrollHeight > Ce.clientHeight) {
        if (Ce.scrollTop !== 0)
          return L.value = /* @__PURE__ */ new Date(), !1;
        if (Ce.getAttribute("role") === "dialog")
          return !0;
      }
      Ce = Ce.parentNode;
    }
    return !0;
  }
  function pe(oe) {
    !l.value && !Y.value || K.value && !K.value.$el.contains(oe.target) || (O.value = !0, F.value = /* @__PURE__ */ new Date(), oe.target.setPointerCapture(oe.pointerId), j.value = Re(g.value) ? oe.clientY : oe.clientX);
  }
  function ve(oe) {
    var $e, Oe, Ce, Fe, ze, Qe;
    if (K.value && O.value) {
      const Ot = g.value === "bottom" || g.value === "right" ? 1 : -1, mn = (j.value - (Re(g.value) ? oe.clientY : oe.clientX)) * Ot, Qt = mn > 0, wo = Y.value && !l.value && !Qt;
      if (wo && le.value === 0)
        return;
      const Jt = Math.abs(mn), Et = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let ct = Jt / Q.value;
      const vn = ot(Jt, Qt);
      if (vn !== null && (ct = vn), wo && ct >= 1 || !M.value && !ae(oe.target, Qt))
        return;
      if (($e = K == null ? void 0 : K.value) == null || $e.$el.classList.add(pl), M.value = !0, He((Oe = K.value) == null ? void 0 : Oe.$el, {
        transition: "none"
      }), He((Ce = S.value) == null ? void 0 : Ce.$el, {
        transition: "none"
      }), Y.value && Ve({ draggedDistance: mn }), Qt && !Y.value) {
        const Pt = N1(mn), hn = Math.min(Pt * -1, 0) * Ot;
        He((Fe = K.value) == null ? void 0 : Fe.$el, {
          transform: Re(g.value) ? `translate3d(0, ${hn}px, 0)` : `translate3d(${hn}px, 0, 0)`
        });
        return;
      }
      const gn = 1 - ct;
      if ((Xe.value || f.value && le.value === f.value - 1) && (t(ct), He(
        (ze = S.value) == null ? void 0 : ze.$el,
        {
          opacity: `${gn}`,
          transition: "none"
        },
        !0
      )), Et && S.value && d.value) {
        const Pt = Math.min(X() + ct * (1 - X()), 1), hn = 8 - ct * 8, _o = Math.max(0, 14 - ct * 14);
        He(
          Et,
          {
            borderRadius: `${hn}px`,
            transform: Re(g.value) ? `scale(${Pt}) translate3d(0, ${_o}px, 0)` : `scale(${Pt}) translate3d(${_o}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!Y.value) {
        const Pt = Jt * Ot;
        He((Qe = K.value) == null ? void 0 : Qe.$el, {
          transform: Re(g.value) ? `translate3d(0, ${Pt}px, 0)` : `translate3d(${Pt}px, 0, 0)`
        });
      }
    }
  }
  function J() {
    var oe;
    if (!K.value)
      return;
    const $e = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), Oe = Io(K.value.$el, g.value);
    He(K.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`
    }), He((oe = S.value) == null ? void 0 : oe.$el, {
      transition: `opacity ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      opacity: "1"
    }), d.value && Oe && Oe > 0 && $.value && He(
      $e,
      {
        borderRadius: `${Du}px`,
        overflow: "hidden",
        ...Re(g.value) ? {
          transform: `scale(${X()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${X()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Te.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
      },
      !0
    );
  }
  function he(oe) {
    K.value && (o(), oe || ($.value = !1), window.setTimeout(() => {
      Y.value && (v.value = Y.value[0]);
    }, Te.DURATION * 1e3));
  }
  xe(() => {
    if (!$.value && d.value && R1) {
      const oe = setTimeout(() => {
        q1(document.body);
      }, 200);
      return () => clearTimeout(oe);
    }
  }), te(r, () => {
    $.value = r.value, r.value || he();
  });
  function Be(oe) {
    if (!O.value || !K.value)
      return;
    K.value.$el.classList.remove(pl), M.value = !1, O.value = !1, T.value = /* @__PURE__ */ new Date();
    const $e = Io(K.value.$el, g.value);
    if (!ae(oe.target, !1) || !$e || Number.isNaN($e) || F.value === null)
      return;
    const Oe = T.value.getTime() - F.value.getTime(), Ce = j.value - (Re(g.value) ? oe.clientY : oe.clientX), Fe = Math.abs(Ce) / Oe;
    if (Fe > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), Y.value) {
      const Qe = g.value === "bottom" || g.value === "right" ? 1 : -1;
      Ae({
        draggedDistance: Ce * Qe,
        closeDrawer: he,
        velocity: Fe,
        dismissible: l.value
      }), n(!0);
      return;
    }
    if (g.value === "bottom" || g.value === "right" ? Ce > 0 : Ce < 0) {
      J(), n(!0);
      return;
    }
    if (Fe > Au) {
      he(), n(!1);
      return;
    }
    const ze = Math.min(
      K.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if ($e >= ze * m.value) {
      he(), n(!1);
      return;
    }
    n(!0), J();
  }
  te($, (oe) => {
    oe && (I.value = /* @__PURE__ */ new Date()), a(oe);
  }, { immediate: !0 });
  function We(oe) {
    var $e, Oe;
    const Ce = oe ? (window.innerWidth - Mo) / window.innerWidth : 1, Fe = oe ? -16 : 0;
    W.value && window.clearTimeout(W.value), He(($e = K.value) == null ? void 0 : $e.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: `scale(${Ce}) translate3d(0, ${Fe}px, 0)`
    }), !oe && (Oe = K.value) != null && Oe.$el && (W.value = window.setTimeout(() => {
      var ze, Qe;
      const Ot = Io((ze = K.value) == null ? void 0 : ze.$el, g.value);
      He((Qe = K.value) == null ? void 0 : Qe.$el, {
        transition: "none",
        transform: Re(g.value) ? `translate3d(0, ${Ot}px, 0)` : `translate3d(${Ot}px, 0, 0)`
      });
    }, 500));
  }
  function at(oe) {
    var $e;
    if (oe < 0)
      return;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, Ce = (Oe - Mo) / Oe, Fe = Ce + oe * (1 - Ce), ze = -16 + oe * Mo;
    He(($e = K.value) == null ? void 0 : $e.$el, {
      transform: Re(g.value) ? `scale(${Fe}) translate3d(0, ${ze}px, 0)` : `scale(${Fe}) translate3d(${ze}px, 0, 0)`,
      transition: "none"
    });
  }
  function dt(oe) {
    var $e;
    const Oe = Re(g.value) ? window.innerHeight : window.innerWidth, Ce = oe ? (Oe - Mo) / Oe : 1, Fe = oe ? -16 : 0;
    oe && He(($e = K.value) == null ? void 0 : $e.$el, {
      transition: `transform ${Te.DURATION}s cubic-bezier(${Te.EASE.join(",")})`,
      transform: Re(g.value) ? `scale(${Ce}) translate3d(0, ${Fe}px, 0)` : `scale(${Ce}) translate3d(${Fe}px, 0, 0)`
    });
  }
  return {
    open: r,
    isOpen: $,
    modal: u,
    keyboardIsOpen: G,
    hasBeenOpened: A,
    drawerRef: K,
    drawerHeightRef: Q,
    overlayRef: S,
    handleRef: ue,
    isDragging: O,
    dragStartTime: F,
    isAllowedToDrag: M,
    snapPoints: Y,
    activeSnapPoint: v,
    hasSnapPoints: N,
    pointerStart: j,
    dismissible: l,
    snapPointsOffset: Me,
    direction: g,
    shouldFade: Xe,
    fadeFromIndex: f,
    shouldScaleBackground: d,
    setBackgroundColorOnScale: c,
    onPress: pe,
    onDrag: ve,
    onRelease: Be,
    closeDrawer: he,
    onNestedDrag: at,
    onNestedRelease: dt,
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
const X1 = /* @__PURE__ */ b({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: H1 },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: K1 },
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
    Go();
    const r = B(() => o.fadeFromIndex ?? (o.snapPoints && o.snapPoints.length - 1)), l = cl(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), i = cl(o, "activeSnapPoint", a, {
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
    }, { closeDrawer: d, hasBeenOpened: c, modal: p, isOpen: m } = z1(
      Y1({
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
    }), (f, g) => (h(), x(s(T0), {
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
}), Z1 = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: o, shouldFade: a } = ls();
    return (r, l) => (h(), x(s(pb), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(o) && s(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(o) && s(a) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Q1 = () => () => {
};
function J1() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: o, noBodyStyles: a } = ls(), r = E(null), l = E(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Tu) / window.innerWidth;
  }
  xe((u) => {
    if (t.value && n.value) {
      r.value && clearTimeout(r.value);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d)
        return;
      j1(
        o.value && !a.value ? za(document.body, { background: "black" }) : Q1,
        za(d, {
          transformOrigin: Re(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Te.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Te.EASE.join(",")})`
        })
      );
      const c = za(d, {
        borderRadius: `${Du}px`,
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
const e_ = /* @__PURE__ */ b({
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
    } = ls();
    J1();
    const w = E(!1), C = B(() => o.value && o.value.length > 0 ? `${o.value[0]}px` : "0");
    function k(O) {
      if (!d.value || O.defaultPrevented) {
        O.preventDefault();
        return;
      }
      m.value && (m.value = !1), p.value ? c(!1) : O.preventDefault();
    }
    function $(O) {
      g.value || l(O);
    }
    function A(O) {
      g.value || i(O);
    }
    return xe(() => {
      a.value && window.requestAnimationFrame(() => {
        w.value = !0;
      });
    }), (O, P) => (h(), x(s(sb), {
      ref_key: "drawerRef",
      ref: r,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(f),
      "data-vaul-delayed-snap-points": w.value ? "true" : "false",
      "data-vaul-snap-points": s(n) && s(a) ? "true" : "false",
      style: it({ "--snap-point-height": C.value }),
      onPointerdown: $,
      onPointermove: A,
      onPointerup: s(u),
      onPointerDownOutside: k,
      onOpenAutoFocus: P[0] || (P[0] = De(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (S) => {
        s(p) || S.preventDefault();
      })
    }, {
      default: y(() => [
        _(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Dx = /* @__PURE__ */ b({
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
    const a = Bt(e, t);
    return (r, l) => (h(), x(s(X1), D({ "data-slot": "drawer" }, s(a)), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tx = /* @__PURE__ */ b({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(M0), D({ "data-slot": "drawer-close" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t_ = /* @__PURE__ */ b({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s(Z1), D({ "data-slot": "drawer-overlay" }, s(n), {
      class: s(V)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Ix = /* @__PURE__ */ b({
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
    const n = e, a = Bt(n, t);
    return (r, l) => (h(), x(s(vb), null, {
      default: y(() => [
        R(t_),
        R(s(e_), D({ "data-slot": "drawer-content" }, s(a), {
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
            l[0] || (l[0] = ne("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Mx = /* @__PURE__ */ b({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s(ib), D({ "data-slot": "drawer-description" }, s(n), {
      class: s(V)("text-muted-foreground text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fx = /* @__PURE__ */ b({
  __name: "DrawerFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      "data-slot": "drawer-footer",
      class: se(s(V)("mt-auto flex flex-col gap-2 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Rx = /* @__PURE__ */ b({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      "data-slot": "drawer-header",
      class: se(s(V)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Lx = /* @__PURE__ */ b({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s(hb), D({ "data-slot": "drawer-title" }, s(n), {
      class: s(V)("text-foreground font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vx = /* @__PURE__ */ b({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(bb), D({ "data-slot": "drawer-trigger" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zx = /* @__PURE__ */ b({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Xf), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qx = /* @__PURE__ */ b({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = je(e);
    return (o, a) => (h(), x(s(Zf), D({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nx = /* @__PURE__ */ b({
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
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Qf), null, {
      default: y(() => [
        R(s(Jf), D(s(r), {
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
}), jx = /* @__PURE__ */ b({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(tm), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hx = /* @__PURE__ */ b({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(rm), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kx = /* @__PURE__ */ b({
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
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(em), D(s(o), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Wx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(om), D(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ne("span", n_, [
          R(s(Ci), null, {
            default: y(() => [
              R(s(au), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o_ = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Ux = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(sm), D(s(r), {
      class: s(V)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ne("span", o_, [
          R(s(Ci), null, {
            default: y(() => [
              R(s($h), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gx = /* @__PURE__ */ b({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("span", {
      class: se(s(V)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Yx = /* @__PURE__ */ b({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(nm), D(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Xx = /* @__PURE__ */ b({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(am), D(s(o), {
      class: s(V)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zx = /* @__PURE__ */ b({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(lm), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qx = /* @__PURE__ */ b({
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
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(um), D(s(o), {
      class: s(V)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s(Ch), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jx = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(im), D(s(r), {
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
}), eC = /* @__PURE__ */ b({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = su(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => Dn((h(), q("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => rt(a) ? a.value = i : null),
      class: se(
        s(V)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [wl, s(a)]
    ]);
  }
}), tC = /* @__PURE__ */ b({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(dm), D(n.value, {
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
}), nC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = Ke(n, "class"), r = Bt(a, o);
    return (l, i) => (h(), x(s(Gw), D({ "data-slot": "pagination" }, s(r), {
      class: s(V)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: y((u) => [
        _(l.$slots, "default", Z(ee(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oC = /* @__PURE__ */ b({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s(n1), D({ "data-slot": "pagination-content" }, s(n), {
      class: s(V)("flex flex-row items-center gap-1", t.class)
    }), {
      default: y((r) => [
        _(o.$slots, "default", Z(ee(r)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aC = /* @__PURE__ */ b({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class");
    return (o, a) => (h(), x(s(Kw), D({ "data-slot": "pagination-ellipsis" }, s(n), {
      class: s(V)("flex size-9 items-center justify-center", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default", {}, () => [
          R(s(Ny), { class: "size-4" }),
          a[0] || (a[0] = ne("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rC = /* @__PURE__ */ b({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(Xw), D({
      "data-slot": "pagination-first",
      class: s(V)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(du)),
          r[0] || (r[0] = ne("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sC = /* @__PURE__ */ b({
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
    const t = e, n = Ke(t, "class", "size", "isActive");
    return (o, a) => (h(), x(s(a1), D({ "data-slot": "pagination-item" }, s(n), {
      class: s(V)(
        s(Zt)({
          variant: e.isActive ? "outline" : "ghost",
          size: e.size
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
}), lC = /* @__PURE__ */ b({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(Qw), D({
      "data-slot": "pagination-last",
      class: s(V)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          r[0] || (r[0] = ne("span", { class: "hidden sm:block" }, "Last", -1)),
          R(s(cu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iC = /* @__PURE__ */ b({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(s1), D({
      "data-slot": "pagination-next",
      class: s(V)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          r[0] || (r[0] = ne("span", { class: "hidden sm:block" }, "Next", -1)),
          R(s(cu))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uC = /* @__PURE__ */ b({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = Ke(t, "class", "size"), o = fn(n);
    return (a, r) => (h(), x(s(i1), D({
      "data-slot": "pagination-previous",
      class: s(V)(s(Zt)({ variant: "ghost", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(o)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(du)),
          r[0] || (r[0] = ne("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dC = /* @__PURE__ */ b({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(pm), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cC = /* @__PURE__ */ b({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(fm), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pC = /* @__PURE__ */ b({
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
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(mm), null, {
      default: y(() => [
        R(s(hm), D({ ...s(r), ...l.$attrs }, {
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
}), fC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(s(xm), D(n.value, {
      class: s(V)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        R(s(Cm), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: it(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), mC = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Em), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vC = /* @__PURE__ */ b({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Jm), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gC = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(Dm), D(s(o), {
      class: s(V)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s(ev), { "as-child": "" }, {
          default: y(() => [
            R(s(xh), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hC = /* @__PURE__ */ b({
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
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Tm), null, {
      default: y(() => [
        R(s(qm), D({ ...s(r), ...l.$attrs }, {
          class: s(V)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            R(s(r_)),
            R(s(Xm), {
              class: se(
                s(V)(
                  "p-1",
                  e.position === "popper" && "h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"
                )
              )
            }, {
              default: y(() => [
                _(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(s(s_))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), yC = /* @__PURE__ */ b({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Gm), D({
      class: s(V)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a_ = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, bC = /* @__PURE__ */ b({
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
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(Hm), D(s(o), {
      class: s(V)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        ne("span", a_, [
          R(s(Km), null, {
            default: y(() => [
              R(s(au), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(s(Oi), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wC = /* @__PURE__ */ b({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Oi), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _C = /* @__PURE__ */ b({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ym), {
      class: se(s(V)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xC = /* @__PURE__ */ b({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Nm), D(n.value, {
      class: s(V)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), r_ = /* @__PURE__ */ b({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(Zm), D(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(kh))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s_ = /* @__PURE__ */ b({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(Qm), D(s(o), {
      class: s(V)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(ru))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), CC = /* @__PURE__ */ b({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = ce(e, t);
    return (r, l) => (h(), x(s(Pr), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kC = /* @__PURE__ */ b({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(Ar), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $C = /* @__PURE__ */ b({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), x(s(sn), Z(ee(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), BC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(Dr), null, {
      default: y(() => [
        R(s(la), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(sa), D({
          class: s(V)(s(l_)({ side: e.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(sn), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                R(s(pa), { class: "h-4 w-4" })
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
}), SC = /* @__PURE__ */ b({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), OC = /* @__PURE__ */ b({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Fr), D({
      class: s(V)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EC = /* @__PURE__ */ b({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Rr), D({
      class: s(V)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), PC = /* @__PURE__ */ b({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), l_ = ho(
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
), AC = /* @__PURE__ */ b({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", {
      class: se(s(V)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), DC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(fv), D({
      class: s(V)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        R(s(gv), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            R(s(hv), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), q(ke, null, st(e.modelValue, (u, d) => (h(), x(s(vv), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), TC = /* @__PURE__ */ b({
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
    const n = e, o = t, a = B(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = ce(a, o);
    return (l, i) => (h(), x(s(xv), D(s(r), {
      class: s(V)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        R(s(Cv), {
          class: se(
            s(V)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), i_ = { class: "relative w-full overflow-auto" }, IC = /* @__PURE__ */ b({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("div", i_, [
      ne("table", {
        class: se(s(V)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), MC = /* @__PURE__ */ b({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("tbody", {
      class: se(s(V)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), u_ = /* @__PURE__ */ b({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("td", {
      class: se(
        s(V)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), FC = /* @__PURE__ */ b({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("th", {
      class: se(
        s(V)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), RC = /* @__PURE__ */ b({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("thead", {
      class: se(s(V)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), LC = /* @__PURE__ */ b({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("tfoot", {
      class: se(s(V)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), d_ = /* @__PURE__ */ b({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("tr", {
      class: se(
        s(V)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), VC = /* @__PURE__ */ b({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), q("caption", {
      class: se(s(V)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), c_ = { class: "flex items-center justify-center py-10" }, zC = /* @__PURE__ */ b({
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
    return (o, a) => (h(), x(d_, null, {
      default: y(() => [
        R(u_, D({
          class: s(V)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            ne("div", c_, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), qC = /* @__PURE__ */ b({
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
    const a = ce(e, t);
    return (r, l) => (h(), x(s($v), Z(ee(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), NC = /* @__PURE__ */ b({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Sv), D({
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
}), jC = /* @__PURE__ */ b({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), x(s(Bv), D(n.value, {
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
}), p_ = { class: "truncate" }, HC = /* @__PURE__ */ b({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = B(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = je(n);
    return (a, r) => (h(), x(s(Ov), D(s(o), {
      class: s(V)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        ne("span", p_, [
          _(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f_ = ["placeholder"], KC = /* @__PURE__ */ b({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {},
    charLimit: {},
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = su(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    }), r = B(() => a.value ? a.value.toString().length : 0);
    return (l, i) => (h(), q(ke, null, [
      Dn(ne("textarea", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => rt(a) ? a.value = u : null),
        placeholder: e.placeholder,
        class: se(
          s(V)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n.class
          )
        )
      }, null, 10, f_), [
        [wl, s(a)]
      ]),
      e.charLimit ? (h(), q("p", {
        key: 0,
        class: se(["mt-1 flex w-full justify-end text-sm text-gray-500", { "text-red-500": r.value > e.charLimit }])
      }, Se(r.value) + " / " + Se(e.charLimit), 3)) : de("", !0)
    ], 64));
  }
});
export {
  M_ as Accord,
  Ih as Accordion,
  Mh as AccordionContent,
  Fh as AccordionItem,
  Rh as AccordionTrigger,
  Ag as AlertDialog,
  Rg as AlertDialogAction,
  Lg as AlertDialogCancel,
  Dg as AlertDialogContent,
  Mg as AlertDialogDescription,
  Fg as AlertDialogFooter,
  Tg as AlertDialogHeader,
  Ig as AlertDialogTitle,
  C_ as AlertDialogTrigger,
  R_ as Avatar,
  V_ as AvatarFallback,
  L_ as AvatarImage,
  z_ as Badge,
  Zi as Button,
  q_ as Card,
  N_ as CardContent,
  j_ as CardDescription,
  H_ as CardFooter,
  K_ as CardHeader,
  W_ as CardTitle,
  U_ as Carousel,
  G_ as CarouselContent,
  Y_ as CarouselItem,
  Z_ as CarouselNext,
  X_ as CarouselPrevious,
  ax as Checkbox,
  rx as Collapsible,
  sx as CollapsibleContent,
  lx as CollapsibleTrigger,
  ix as Combobox,
  ux as ComboboxAnchor,
  tx as ComboboxCancel,
  dx as ComboboxEmpty,
  cx as ComboboxGroup,
  px as ComboboxInput,
  fx as ComboboxItem,
  nx as ComboboxItemIndicator,
  mx as ComboboxList,
  vx as ComboboxSeparator,
  ox as ComboboxTrigger,
  u1 as Command,
  Cx as CommandDialog,
  kx as CommandEmpty,
  $x as CommandGroup,
  Bx as CommandInput,
  Sx as CommandItem,
  Ox as CommandList,
  Ex as CommandSeparator,
  Px as CommandShortcut,
  k_ as ConfirmDialog,
  Ax as Datatable,
  dl as DatatableActionsCell,
  k1 as DatatableCell,
  _1 as DatatableHeaderCell,
  ul as DatatableSelectionCell,
  d1 as Dialog,
  gx as DialogClose,
  c1 as DialogContent,
  wx as DialogDescription,
  xx as DialogFooter,
  yx as DialogHeader,
  _x as DialogScrollContent,
  bx as DialogTitle,
  hx as DialogTrigger,
  Dx as Drawer,
  Tx as DrawerClose,
  Ix as DrawerContent,
  Mx as DrawerDescription,
  Fx as DrawerFooter,
  Rx as DrawerHeader,
  t_ as DrawerOverlay,
  Lx as DrawerTitle,
  Vx as DrawerTrigger,
  zx as DropdownMenu,
  Wx as DropdownMenuCheckboxItem,
  Nx as DropdownMenuContent,
  jx as DropdownMenuGroup,
  Kx as DropdownMenuItem,
  Xx as DropdownMenuLabel,
  Qf as DropdownMenuPortal,
  Hx as DropdownMenuRadioGroup,
  Ux as DropdownMenuRadioItem,
  Yx as DropdownMenuSeparator,
  Gx as DropdownMenuShortcut,
  Zx as DropdownMenuSub,
  Jx as DropdownMenuSubContent,
  Qx as DropdownMenuSubTrigger,
  qx as DropdownMenuTrigger,
  T_ as Flasher,
  B_ as Header,
  I_ as Heading,
  eC as Input,
  tC as Label,
  S_ as Main,
  nC as Pagination,
  oC as PaginationContent,
  aC as PaginationEllipsis,
  rC as PaginationFirst,
  sC as PaginationItem,
  lC as PaginationLast,
  iC as PaginationNext,
  uC as PaginationPrevious,
  dC as Popover,
  w_ as PopoverAnchor,
  pC as PopoverContent,
  cC as PopoverTrigger,
  fC as Progress,
  mC as Select,
  hC as SelectContent,
  yC as SelectGroup,
  bC as SelectItem,
  wC as SelectItemText,
  _C as SelectLabel,
  s_ as SelectScrollDownButton,
  r_ as SelectScrollUpButton,
  xC as SelectSeparator,
  gC as SelectTrigger,
  vC as SelectValue,
  CC as Sheet,
  $C as SheetClose,
  BC as SheetContent,
  EC as SheetDescription,
  PC as SheetFooter,
  SC as SheetHeader,
  OC as SheetTitle,
  kC as SheetTrigger,
  AC as Skeleton,
  DC as Slider,
  TC as Switch,
  IC as Table,
  MC as TableBody,
  VC as TableCaption,
  u_ as TableCell,
  zC as TableEmpty,
  LC as TableFooter,
  FC as TableHead,
  RC as TableHeader,
  d_ as TableRow,
  qC as Tabs,
  NC as TabsContent,
  jC as TabsList,
  HC as TabsTrigger,
  KC as Textarea,
  F_ as Tip,
  yh as Toast,
  D_ as ToastAction,
  Sh as ToastClose,
  Hs as ToastDescription,
  Eh as ToastProvider,
  Oh as ToastTitle,
  bh as ToastViewport,
  hh as Toaster,
  Lh as Tooltip,
  Vh as TooltipContent,
  zh as TooltipProvider,
  qh as TooltipTrigger,
  $_ as TwoColumnLayout,
  O_ as TwoColumnLayoutSidebar,
  E_ as TwoColumnLayoutSidebarDesktop,
  P_ as TwoColumnLayoutSidebarMobile,
  A_ as TwoColumnLayoutSidebarTrigger,
  Nh as avatarVariant,
  jh as badgeVariants,
  Zt as buttonVariants,
  V as cn,
  x_ as createContext,
  g_ as preset,
  l_ as sheetVariants,
  ph as toast,
  Ph as toastVariants,
  ma as useCarousel,
  qg as useConfirmDialog,
  g1 as useDatatableActions,
  v1 as useDatatableSelection,
  m1 as useDatatableState,
  Ah as useFlasher,
  y1 as useStickyColumns,
  b1 as useStickyHeader,
  ou as useToast,
  __ as valueUpdater
};
