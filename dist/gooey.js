var lr = (e) => {
  throw TypeError(e);
};
var ei = (e, t, n) => t.has(e) || lr("Cannot " + n);
var Jt = (e, t, n) => (ei(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ir = (e, t, n) => t.has(e) ? lr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as Mn from "vue";
import { computed as S, ref as T, shallowRef as Rn, watch as X, getCurrentScope as ls, onScopeDispose as is, shallowReadonly as Dt, unref as s, defineComponent as x, createBlock as C, openBlock as h, normalizeProps as U, guardReactiveProps as W, withCtx as y, renderSlot as _, toRefs as ce, createVNode as R, mergeProps as D, onMounted as re, watchEffect as be, normalizeStyle as Bt, createCommentVNode as de, getCurrentInstance as Re, toRef as us, camelize as Hn, withKeys as ct, toHandlers as ti, resolveDynamicComponent as Fe, withModifiers as Ce, nextTick as oe, withDirectives as Nt, vShow as ra, h as ke, createTextVNode as Se, watchSyncEffect as ni, toDisplayString as Ae, isRef as xt, onBeforeMount as ds, onUnmounted as Le, createElementBlock as N, Fragment as ye, renderList as pt, useSlots as cs, Teleport as Un, onBeforeUnmount as Wn, inject as fn, provide as mn, toHandlerKey as ps, onBeforeUpdate as oi, onUpdated as ai, reactive as fs, readonly as sa, Comment as la, cloneVNode as ms, markRaw as vs, createElementVNode as ae, vModelSelect as ri, toRaw as si, mergeDefaults as gs, watchPostEffect as li, effectScope as hs, customRef as ii, normalizeClass as te, isVNode as ui, toValue as ys, vModelText as bs } from "vue";
function ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bo, ur;
function di() {
  return ur || (ur = 1, bo = {
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
  }), bo;
}
var wo, dr;
function ci() {
  if (dr) return wo;
  dr = 1;
  var e = di(), t = {
    whitespace: /\s+/g,
    urlHexPairs: /%[\dA-F]{2}/g,
    quotes: /"/g
  };
  function n(i) {
    return i.trim().replace(t.whitespace, " ");
  }
  function o(i) {
    return encodeURIComponent(i).replace(t.urlHexPairs, r);
  }
  function a(i) {
    return Object.keys(e).forEach(function(u) {
      e[u].test(i) && (i = i.replace(e[u], u));
    }), i;
  }
  function r(i) {
    switch (i) {
      // Browsers tolerate these characters, and they're frequent
      case "%20":
        return " ";
      case "%3D":
        return "=";
      case "%3A":
        return ":";
      case "%2F":
        return "/";
      default:
        return i.toLowerCase();
    }
  }
  function l(i) {
    if (typeof i != "string")
      throw new TypeError("Expected a string, but received " + typeof i);
    i.charCodeAt(0) === 65279 && (i = i.slice(1));
    var u = a(n(i)).replace(t.quotes, "'");
    return "data:image/svg+xml," + o(u);
  }
  return l.toSrcset = function(u) {
    return l(u).replace(/ /g, "%20");
  }, wo = l, wo;
}
var xo = {}, _o = {}, cr;
function pi() {
  return cr || (cr = 1, function(e) {
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
  }(_o)), _o;
}
var pr;
function fi() {
  return pr || (pr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const t = /* @__PURE__ */ n(pi());
    function n(a) {
      return a && a.__esModule ? a : {
        default: a
      };
    }
    const o = t.default;
  }(xo)), xo;
}
var Co, fr;
function xs() {
  if (fr) return Co;
  fr = 1;
  let e = fi();
  return Co = (e.__esModule ? e : { default: e }).default, Co;
}
var Bo = {}, $o = {}, mr;
function mi() {
  return mr || (mr = 1, function(e) {
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
  }($o)), $o;
}
var So, vr;
function vi() {
  return vr || (vr = 1, So = {
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
  }), So;
}
var gr;
function gi() {
  return gr || (gr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const t = mi(), n = /* @__PURE__ */ o(vi());
    function o(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }
    const a = (0, t.cloneDeep)(n.default.theme);
  }(Bo)), Bo;
}
var ko, hr;
function hi() {
  if (hr) return ko;
  hr = 1;
  let e = gi();
  return ko = (e.__esModule ? e : { default: e }).default, ko;
}
var Oo = {}, Eo = {}, $n = { exports: {} }, yr;
function yi() {
  if (yr) return $n.exports;
  yr = 1;
  var e = String, t = function() {
    return { isColorSupported: !1, reset: e, bold: e, dim: e, italic: e, underline: e, inverse: e, hidden: e, strikethrough: e, black: e, red: e, green: e, yellow: e, blue: e, magenta: e, cyan: e, white: e, gray: e, bgBlack: e, bgRed: e, bgGreen: e, bgYellow: e, bgBlue: e, bgMagenta: e, bgCyan: e, bgWhite: e, blackBright: e, redBright: e, greenBright: e, yellowBright: e, blueBright: e, magentaBright: e, cyanBright: e, whiteBright: e, bgBlackBright: e, bgRedBright: e, bgGreenBright: e, bgYellowBright: e, bgBlueBright: e, bgMagentaBright: e, bgCyanBright: e, bgWhiteBright: e };
  };
  return $n.exports = t(), $n.exports.createColors = t, $n.exports;
}
var br;
function bi() {
  return br || (br = 1, function(e) {
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
    const n = /* @__PURE__ */ o(/* @__PURE__ */ yi());
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
  }(Eo)), Eo;
}
var wr;
function wi() {
  return wr || (wr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const t = /* @__PURE__ */ n(bi());
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
  }(Oo)), Oo;
}
var Ao, xr;
function xi() {
  if (xr) return Ao;
  xr = 1;
  let e = wi();
  return Ao = (e.__esModule ? e : { default: e }).default, Ao;
}
var To, _r;
function _i() {
  if (_r) return To;
  _r = 1;
  const e = ci(), t = xs(), n = hi(), o = xi(), [a, { lineHeight: r }] = n.fontSize.base, { spacing: l, borderWidth: i, borderRadius: u } = n;
  function d(p, m) {
    return p.replace("<alpha-value>", `var(${m}, 1)`);
  }
  return To = t.withOptions(function(p = { strategy: void 0 }) {
    return function({ addBase: m, addComponents: f, theme: v }) {
      function g($, O) {
        let k = v($);
        return !k || k.includes("var(") ? O : k.replace("<alpha-value>", "1");
      }
      const b = p.strategy === void 0 ? ["base", "class"] : [p.strategy], w = [
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
            "border-color": d(
              v("colors.gray.500", o.gray[500]),
              "--tw-border-opacity"
            ),
            "border-width": i.DEFAULT,
            "border-radius": u.none,
            "padding-top": l[2],
            "padding-right": l[3],
            "padding-bottom": l[2],
            "padding-left": l[3],
            "font-size": a,
            "line-height": r,
            "--tw-shadow": "0 0 #0000",
            "&:focus": {
              outline: "2px solid transparent",
              "outline-offset": "2px",
              "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-ring-offset-width": "0px",
              "--tw-ring-offset-color": "#fff",
              "--tw-ring-color": d(
                v("colors.blue.600", o.blue[600]),
                "--tw-ring-opacity"
              ),
              "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
              "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
              "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
              "border-color": d(
                v("colors.blue.600", o.blue[600]),
                "--tw-border-opacity"
              )
            }
          }
        },
        {
          base: ["input::placeholder", "textarea::placeholder"],
          class: [".form-input::placeholder", ".form-textarea::placeholder"],
          styles: {
            color: d(v("colors.gray.500", o.gray[500]), "--tw-text-opacity"),
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
            "background-image": `url("${e(
              `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${g(
                "colors.gray.500",
                o.gray[500]
              )}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
            )}")`,
            "background-position": `right ${l[2]} center`,
            "background-repeat": "no-repeat",
            "background-size": "1.5em 1.5em",
            "padding-right": l[10],
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
            "padding-right": l[3],
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
            height: l[4],
            width: l[4],
            color: d(v("colors.blue.600", o.blue[600]), "--tw-text-opacity"),
            "background-color": "#fff",
            "border-color": d(
              v("colors.gray.500", o.gray[500]),
              "--tw-border-opacity"
            ),
            "border-width": i.DEFAULT,
            "--tw-shadow": "0 0 #0000"
          }
        },
        {
          base: ["[type='checkbox']"],
          class: [".form-checkbox"],
          styles: {
            "border-radius": u.none
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
            "--tw-ring-color": d(
              v("colors.blue.600", o.blue[600]),
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
            "background-image": `url("${e(
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
            "background-image": `url("${e(
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
            "background-image": `url("${e(
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
      ], B = ($) => w.map((O) => O[$] === null ? null : { [O[$]]: O.styles }).filter(Boolean);
      b.includes("base") && m(B("base")), b.includes("class") && f(B("class"));
    };
  }), To;
}
var Ci = _i();
const Bi = /* @__PURE__ */ ws(Ci);
var Do, Cr;
function $i() {
  if (Cr) return Do;
  Cr = 1;
  const e = xs();
  function t(n) {
    return Object.fromEntries(
      Object.entries(n).filter(([o]) => o !== "DEFAULT")
    );
  }
  return Do = e(
    ({ addUtilities: n, matchUtilities: o, theme: a }) => {
      n({
        "@keyframes enter": a("keyframes.enter"),
        "@keyframes exit": a("keyframes.exit"),
        ".animate-in": {
          animationName: "enter",
          animationDuration: a("animationDuration.DEFAULT"),
          "--tw-enter-opacity": "initial",
          "--tw-enter-scale": "initial",
          "--tw-enter-rotate": "initial",
          "--tw-enter-translate-x": "initial",
          "--tw-enter-translate-y": "initial"
        },
        ".animate-out": {
          animationName: "exit",
          animationDuration: a("animationDuration.DEFAULT"),
          "--tw-exit-opacity": "initial",
          "--tw-exit-scale": "initial",
          "--tw-exit-rotate": "initial",
          "--tw-exit-translate-x": "initial",
          "--tw-exit-translate-y": "initial"
        }
      }), o(
        {
          "fade-in": (r) => ({ "--tw-enter-opacity": r }),
          "fade-out": (r) => ({ "--tw-exit-opacity": r })
        },
        { values: a("animationOpacity") }
      ), o(
        {
          "zoom-in": (r) => ({ "--tw-enter-scale": r }),
          "zoom-out": (r) => ({ "--tw-exit-scale": r })
        },
        { values: a("animationScale") }
      ), o(
        {
          "spin-in": (r) => ({ "--tw-enter-rotate": r }),
          "spin-out": (r) => ({ "--tw-exit-rotate": r })
        },
        { values: a("animationRotate") }
      ), o(
        {
          "slide-in-from-top": (r) => ({
            "--tw-enter-translate-y": `-${r}`
          }),
          "slide-in-from-bottom": (r) => ({
            "--tw-enter-translate-y": r
          }),
          "slide-in-from-left": (r) => ({
            "--tw-enter-translate-x": `-${r}`
          }),
          "slide-in-from-right": (r) => ({
            "--tw-enter-translate-x": r
          }),
          "slide-out-to-top": (r) => ({
            "--tw-exit-translate-y": `-${r}`
          }),
          "slide-out-to-bottom": (r) => ({
            "--tw-exit-translate-y": r
          }),
          "slide-out-to-left": (r) => ({
            "--tw-exit-translate-x": `-${r}`
          }),
          "slide-out-to-right": (r) => ({
            "--tw-exit-translate-x": r
          })
        },
        { values: a("animationTranslate") }
      ), o(
        { duration: (r) => ({ animationDuration: r }) },
        { values: t(a("animationDuration")) }
      ), o(
        { delay: (r) => ({ animationDelay: r }) },
        { values: a("animationDelay") }
      ), o(
        { ease: (r) => ({ animationTimingFunction: r }) },
        { values: t(a("animationTimingFunction")) }
      ), n({
        ".running": { animationPlayState: "running" },
        ".paused": { animationPlayState: "paused" }
      }), o(
        { "fill-mode": (r) => ({ animationFillMode: r }) },
        { values: a("animationFillMode") }
      ), o(
        { direction: (r) => ({ animationDirection: r }) },
        { values: a("animationDirection") }
      ), o(
        { repeat: (r) => ({ animationIterationCount: r }) },
        { values: a("animationRepeat") }
      );
    },
    {
      theme: {
        extend: {
          animationDelay: ({ theme: n }) => ({
            ...n("transitionDelay")
          }),
          animationDuration: ({ theme: n }) => ({
            0: "0ms",
            ...n("transitionDuration")
          }),
          animationTimingFunction: ({ theme: n }) => ({
            ...n("transitionTimingFunction")
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
          animationOpacity: ({ theme: n }) => ({
            DEFAULT: 0,
            ...n("opacity")
          }),
          animationTranslate: ({ theme: n }) => ({
            DEFAULT: "100%",
            ...n("translate")
          }),
          animationScale: ({ theme: n }) => ({
            DEFAULT: 0,
            ...n("scale")
          }),
          animationRotate: ({ theme: n }) => ({
            DEFAULT: "30deg",
            ...n("rotate")
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
  ), Do;
}
var Si = $i();
const ki = /* @__PURE__ */ ws(Si), Lh = {
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
    ki,
    Bi({
      strategy: "class"
    })
  ]
}, Oi = ["top", "right", "bottom", "left"], ft = Math.min, Ie = Math.max, Fn = Math.round, Sn = Math.floor, Ye = (e) => ({
  x: e,
  y: e
}), Ei = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ai = {
  start: "end",
  end: "start"
};
function jo(e, t, n) {
  return Ie(e, ft(t, n));
}
function rt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e) {
  return e.split("-")[0];
}
function jt(e) {
  return e.split("-")[1];
}
function ia(e) {
  return e === "x" ? "y" : "x";
}
function ua(e) {
  return e === "y" ? "height" : "width";
}
function ot(e) {
  return ["top", "bottom"].includes(st(e)) ? "y" : "x";
}
function da(e) {
  return ia(ot(e));
}
function Ti(e, t, n) {
  n === void 0 && (n = !1);
  const o = jt(e), a = da(e), r = ua(a);
  let l = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Vn(l)), [l, Vn(l)];
}
function Di(e) {
  const t = Vn(e);
  return [Ko(e), t, Ko(t)];
}
function Ko(e) {
  return e.replace(/start|end/g, (t) => Ai[t]);
}
function Pi(e, t, n) {
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
function Ii(e, t, n, o) {
  const a = jt(e);
  let r = Pi(st(e), n === "start", o);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(Ko)))), r;
}
function Vn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ei[t]);
}
function Mi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function _s(e) {
  return typeof e != "number" ? Mi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ln(e) {
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
function Br(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = ot(t), l = da(t), i = ua(l), u = st(t), d = r === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, m = o[i] / 2 - a[i] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: c,
        y: o.y - a.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: o.x - a.width,
        y: p
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (jt(t)) {
    case "start":
      f[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      f[l] += m * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Ri = async (e, t, n) => {
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
  } = Br(d, o, u), m = o, f = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: w
    } = i[g], {
      x: B,
      y: $,
      data: O,
      reset: k
    } = await w({
      x: c,
      y: p,
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
    c = B ?? c, p = $ ?? p, f = {
      ...f,
      [b]: {
        ...f[b],
        ...O
      }
    }, k && v <= 50 && (v++, typeof k == "object" && (k.placement && (m = k.placement), k.rects && (d = k.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : k.rects), {
      x: c,
      y: p
    } = Br(d, m, u)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: m,
    strategy: a,
    middlewareData: f
  };
};
async function rn(e, t) {
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
    padding: f = 0
  } = rt(t, e), v = _s(f), b = i[m ? p === "floating" ? "reference" : "floating" : p], w = Ln(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(b))) == null || n ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), B = p === "floating" ? {
    x: o,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, $ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), O = await (r.isElement == null ? void 0 : r.isElement($)) ? await (r.getScale == null ? void 0 : r.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Ln(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: B,
    offsetParent: $,
    strategy: u
  }) : B);
  return {
    top: (w.top - k.top + v.top) / O.y,
    bottom: (k.bottom - w.bottom + v.bottom) / O.y,
    left: (w.left - k.left + v.left) / O.x,
    right: (k.right - w.right + v.right) / O.x
  };
}
const Fi = (e) => ({
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
    } = rt(e, t) || {};
    if (d == null)
      return {};
    const p = _s(c), m = {
      x: n,
      y: o
    }, f = da(a), v = ua(f), g = await l.getDimensions(d), b = f === "y", w = b ? "top" : "left", B = b ? "bottom" : "right", $ = b ? "clientHeight" : "clientWidth", O = r.reference[v] + r.reference[f] - m[f] - r.floating[v], k = m[f] - r.reference[f], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let E = P ? P[$] : 0;
    (!E || !await (l.isElement == null ? void 0 : l.isElement(P))) && (E = i.floating[$] || r.floating[v]);
    const I = O / 2 - k / 2, V = E / 2 - g[v] / 2 - 1, A = ft(p[w], V), L = ft(p[B], V), F = A, G = E - g[v] - L, q = E / 2 - g[v] / 2 + I, Q = jo(F, q, G), se = !u.arrow && jt(a) != null && q !== Q && r.reference[v] / 2 - (q < F ? A : L) - g[v] / 2 < 0, pe = se ? q < F ? q - F : q - G : 0;
    return {
      [f]: m[f] + pe,
      data: {
        [f]: Q,
        centerOffset: q - Q - pe,
        ...se && {
          alignmentOffset: pe
        }
      },
      reset: se
    };
  }
}), Vi = function(e) {
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
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = rt(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const w = st(a), B = ot(i), $ = st(i) === i, O = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), k = m || ($ || !g ? [Vn(i)] : Di(i)), P = v !== "none";
      !m && P && k.push(...Ii(i, g, v, O));
      const E = [i, ...k], I = await rn(t, b), V = [];
      let A = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (c && V.push(I[w]), p) {
        const Q = Ti(a, l, O);
        V.push(I[Q[0]], I[Q[1]]);
      }
      if (A = [...A, {
        placement: a,
        overflows: V
      }], !V.every((Q) => Q <= 0)) {
        var L, F;
        const Q = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, se = E[Q];
        if (se) {
          var G;
          const ie = p === "alignment" ? B !== ot(se) : !1, j = ((G = A[0]) == null ? void 0 : G.overflows[0]) > 0;
          if (!ie || j)
            return {
              data: {
                index: Q,
                overflows: A
              },
              reset: {
                placement: se
              }
            };
        }
        let pe = (F = A.filter((ie) => ie.overflows[0] <= 0).sort((ie, j) => ie.overflows[1] - j.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!pe)
          switch (f) {
            case "bestFit": {
              var q;
              const ie = (q = A.filter((j) => {
                if (P) {
                  const Y = ot(j.placement);
                  return Y === B || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((Y) => Y > 0).reduce((Y, J) => Y + J, 0)]).sort((j, Y) => j[1] - Y[1])[0]) == null ? void 0 : q[0];
              ie && (pe = ie);
              break;
            }
            case "initialPlacement":
              pe = i;
              break;
          }
        if (a !== pe)
          return {
            reset: {
              placement: pe
            }
          };
      }
      return {};
    }
  };
};
function $r(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Sr(e) {
  return Oi.some((t) => e[t] >= 0);
}
const Li = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = rt(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await rn(t, {
            ...a,
            elementContext: "reference"
          }), l = $r(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Sr(l)
            }
          };
        }
        case "escaped": {
          const r = await rn(t, {
            ...a,
            altBoundary: !0
          }), l = $r(r, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Sr(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function zi(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = st(n), i = jt(n), u = ot(n) === "y", d = ["left", "top"].includes(l) ? -1 : 1, c = r && u ? -1 : 1, p = rt(t, e);
  let {
    mainAxis: m,
    crossAxis: f,
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
  return i && typeof v == "number" && (f = i === "end" ? v * -1 : v), u ? {
    x: f * c,
    y: m * d
  } : {
    x: m * d,
    y: f * c
  };
}
const Ni = function(e) {
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
      } = t, u = await zi(t, e);
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
}, ji = function(e) {
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
              y: B
            } = b;
            return {
              x: w,
              y: B
            };
          }
        },
        ...u
      } = rt(e, t), d = {
        x: n,
        y: o
      }, c = await rn(t, u), p = ot(st(a)), m = ia(p);
      let f = d[m], v = d[p];
      if (r) {
        const b = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", B = f + c[b], $ = f - c[w];
        f = jo(B, f, $);
      }
      if (l) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", B = v + c[b], $ = v - c[w];
        v = jo(B, v, $);
      }
      const g = i.fn({
        ...t,
        [m]: f,
        [p]: v
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
}, Ki = function(e) {
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
      } = rt(e, t), c = {
        x: n,
        y: o
      }, p = ot(a), m = ia(p);
      let f = c[m], v = c[p];
      const g = rt(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (u) {
        const $ = m === "y" ? "height" : "width", O = r.reference[m] - r.floating[$] + b.mainAxis, k = r.reference[m] + r.reference[$] - b.mainAxis;
        f < O ? f = O : f > k && (f = k);
      }
      if (d) {
        var w, B;
        const $ = m === "y" ? "width" : "height", O = ["top", "left"].includes(st(a)), k = r.reference[p] - r.floating[$] + (O && ((w = l.offset) == null ? void 0 : w[p]) || 0) + (O ? 0 : b.crossAxis), P = r.reference[p] + r.reference[$] + (O ? 0 : ((B = l.offset) == null ? void 0 : B[p]) || 0) - (O ? b.crossAxis : 0);
        v < k ? v = k : v > P && (v = P);
      }
      return {
        [m]: f,
        [p]: v
      };
    }
  };
}, Hi = function(e) {
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
      } = rt(e, t), c = await rn(t, d), p = st(a), m = jt(a), f = ot(a) === "y", {
        width: v,
        height: g
      } = r.floating;
      let b, w;
      p === "top" || p === "bottom" ? (b = p, w = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = p, b = m === "end" ? "top" : "bottom");
      const B = g - c.top - c.bottom, $ = v - c.left - c.right, O = ft(g - c[b], B), k = ft(v - c[w], $), P = !t.middlewareData.shift;
      let E = O, I = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = $), (o = t.middlewareData.shift) != null && o.enabled.y && (E = B), P && !m) {
        const A = Ie(c.left, 0), L = Ie(c.right, 0), F = Ie(c.top, 0), G = Ie(c.bottom, 0);
        f ? I = v - 2 * (A !== 0 || L !== 0 ? A + L : Ie(c.left, c.right)) : E = g - 2 * (F !== 0 || G !== 0 ? F + G : Ie(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: E
      });
      const V = await l.getDimensions(i.floating);
      return v !== V.width || g !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function qn() {
  return typeof window < "u";
}
function $t(e) {
  return ca(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (ca(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ca(e) {
  return qn() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function Ue(e) {
  return qn() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function Xe(e) {
  return qn() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function kr(e) {
  return !qn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function vn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = We(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(a);
}
function Ui(e) {
  return ["table", "td", "th"].includes($t(e));
}
function Gn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function pa(e) {
  const t = fa(), n = Ue(e) ? We(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Wi(e) {
  let t = mt(e);
  for (; Xe(t) && !Vt(t); ) {
    if (pa(t))
      return t;
    if (Gn(t))
      return null;
    t = mt(t);
  }
  return null;
}
function fa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vt(e) {
  return ["html", "body", "#document"].includes($t(e));
}
function We(e) {
  return Me(e).getComputedStyle(e);
}
function Yn(e) {
  return Ue(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function mt(e) {
  if ($t(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    kr(e) && e.host || // Fallback.
    Ze(e)
  );
  return kr(t) ? t.host : t;
}
function Cs(e) {
  const t = mt(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xe(t) && vn(t) ? t : Cs(t);
}
function sn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Cs(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Me(a);
  if (r) {
    const i = Ho(l);
    return t.concat(l, l.visualViewport || [], vn(a) ? a : [], i && n ? sn(i) : []);
  }
  return t.concat(a, sn(a, [], n));
}
function Ho(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Bs(e) {
  const t = We(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = Xe(e), r = a ? e.offsetWidth : n, l = a ? e.offsetHeight : o, i = Fn(n) !== r || Fn(o) !== l;
  return i && (n = r, o = l), {
    width: n,
    height: o,
    $: i
  };
}
function ma(e) {
  return Ue(e) ? e : e.contextElement;
}
function Mt(e) {
  const t = ma(e);
  if (!Xe(t))
    return Ye(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = Bs(t);
  let l = (r ? Fn(n.width) : n.width) / o, i = (r ? Fn(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const qi = /* @__PURE__ */ Ye(0);
function $s(e) {
  const t = Me(e);
  return !fa() || !t.visualViewport ? qi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Me(e) ? !1 : t;
}
function _t(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = ma(e);
  let l = Ye(1);
  t && (o ? Ue(o) && (l = Mt(o)) : l = Mt(e));
  const i = Gi(r, n, o) ? $s(r) : Ye(0);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (r) {
    const m = Me(r), f = o && Ue(o) ? Me(o) : o;
    let v = m, g = Ho(v);
    for (; g && o && f !== v; ) {
      const b = Mt(g), w = g.getBoundingClientRect(), B = We(g), $ = w.left + (g.clientLeft + parseFloat(B.paddingLeft)) * b.x, O = w.top + (g.clientTop + parseFloat(B.paddingTop)) * b.y;
      u *= b.x, d *= b.y, c *= b.x, p *= b.y, u += $, d += O, v = Me(g), g = Ho(v);
    }
  }
  return Ln({
    width: c,
    height: p,
    x: u,
    y: d
  });
}
function va(e, t) {
  const n = Yn(e).scrollLeft;
  return t ? t.left + n : _t(Ze(e)).left + n;
}
function Ss(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    va(e, o)
  )), r = o.top + t.scrollTop;
  return {
    x: a,
    y: r
  };
}
function Yi(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", l = Ze(o), i = t ? Gn(t.floating) : !1;
  if (o === l || i && r)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ye(1);
  const c = Ye(0), p = Xe(o);
  if ((p || !p && !r) && (($t(o) !== "body" || vn(l)) && (u = Yn(o)), Xe(o))) {
    const f = _t(o);
    d = Mt(o), c.x = f.x + o.clientLeft, c.y = f.y + o.clientTop;
  }
  const m = l && !p && !r ? Ss(l, u, !0) : Ye(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + c.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + c.y + m.y
  };
}
function Xi(e) {
  return Array.from(e.getClientRects());
}
function Zi(e) {
  const t = Ze(e), n = Yn(e), o = e.ownerDocument.body, a = Ie(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = Ie(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + va(e);
  const i = -n.scrollTop;
  return We(o).direction === "rtl" && (l += Ie(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: i
  };
}
function Qi(e, t) {
  const n = Me(e), o = Ze(e), a = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = fa();
    (!d || d && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: i,
    y: u
  };
}
function Ji(e, t) {
  const n = _t(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = Xe(e) ? Mt(e) : Ye(1), l = e.clientWidth * r.x, i = e.clientHeight * r.y, u = a * r.x, d = o * r.y;
  return {
    width: l,
    height: i,
    x: u,
    y: d
  };
}
function Or(e, t, n) {
  let o;
  if (t === "viewport")
    o = Qi(e, n);
  else if (t === "document")
    o = Zi(Ze(e));
  else if (Ue(t))
    o = Ji(t, n);
  else {
    const a = $s(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Ln(o);
}
function ks(e, t) {
  const n = mt(e);
  return n === t || !Ue(n) || Vt(n) ? !1 : We(n).position === "fixed" || ks(n, t);
}
function eu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = sn(e, [], !1).filter((i) => Ue(i) && $t(i) !== "body"), a = null;
  const r = We(e).position === "fixed";
  let l = r ? mt(e) : e;
  for (; Ue(l) && !Vt(l); ) {
    const i = We(l), u = pa(l);
    !u && i.position === "fixed" && (a = null), (r ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || vn(l) && !u && ks(e, l)) ? o = o.filter((c) => c !== l) : a = i, l = mt(l);
  }
  return t.set(e, o), o;
}
function tu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? Gn(t) ? [] : eu(t, this._c) : [].concat(n), o], i = l[0], u = l.reduce((d, c) => {
    const p = Or(t, c, a);
    return d.top = Ie(p.top, d.top), d.right = ft(p.right, d.right), d.bottom = ft(p.bottom, d.bottom), d.left = Ie(p.left, d.left), d;
  }, Or(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function nu(e) {
  const {
    width: t,
    height: n
  } = Bs(e);
  return {
    width: t,
    height: n
  };
}
function ou(e, t, n) {
  const o = Xe(t), a = Ze(t), r = n === "fixed", l = _t(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ye(0);
  function d() {
    u.x = va(a);
  }
  if (o || !o && !r)
    if (($t(t) !== "body" || vn(a)) && (i = Yn(t)), o) {
      const f = _t(t, !0, r, t);
      u.x = f.x + t.clientLeft, u.y = f.y + t.clientTop;
    } else a && d();
  r && !o && a && d();
  const c = a && !o && !r ? Ss(a, i) : Ye(0), p = l.left + i.scrollLeft - u.x - c.x, m = l.top + i.scrollTop - u.y - c.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Po(e) {
  return We(e).position === "static";
}
function Er(e, t) {
  if (!Xe(e) || We(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ze(e) === n && (n = n.ownerDocument.body), n;
}
function Os(e, t) {
  const n = Me(e);
  if (Gn(e))
    return n;
  if (!Xe(e)) {
    let a = mt(e);
    for (; a && !Vt(a); ) {
      if (Ue(a) && !Po(a))
        return a;
      a = mt(a);
    }
    return n;
  }
  let o = Er(e, t);
  for (; o && Ui(o) && Po(o); )
    o = Er(o, t);
  return o && Vt(o) && Po(o) && !pa(o) ? n : o || Wi(e) || n;
}
const au = async function(e) {
  const t = this.getOffsetParent || Os, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: ou(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ru(e) {
  return We(e).direction === "rtl";
}
const su = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Yi,
  getDocumentElement: Ze,
  getClippingRect: tu,
  getOffsetParent: Os,
  getElementRects: au,
  getClientRects: Xi,
  getDimensions: nu,
  getScale: Mt,
  isElement: Ue,
  isRTL: ru
};
function Es(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function lu(e, t) {
  let n = null, o;
  const a = Ze(e);
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
      height: f
    } = d;
    if (i || t(), !m || !f)
      return;
    const v = Sn(p), g = Sn(a.clientWidth - (c + m)), b = Sn(a.clientHeight - (p + f)), w = Sn(c), $ = {
      rootMargin: -v + "px " + -g + "px " + -b + "px " + -w + "px",
      threshold: Ie(0, ft(1, u)) || 1
    };
    let O = !0;
    function k(P) {
      const E = P[0].intersectionRatio;
      if (E !== u) {
        if (!O)
          return l();
        E ? l(!1, E) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Es(d, e.getBoundingClientRect()) && l(), O = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...$,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, $);
    }
    n.observe(e);
  }
  return l(!0), r;
}
function iu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = ma(e), c = a || r ? [...d ? sn(d) : [], ...sn(t)] : [];
  c.forEach((w) => {
    a && w.addEventListener("scroll", n, {
      passive: !0
    }), r && w.addEventListener("resize", n);
  });
  const p = d && i ? lu(d, n) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [B] = w;
    B && B.target === d && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var $;
      ($ = f) == null || $.observe(t);
    })), n();
  }), d && !u && f.observe(d), f.observe(t));
  let v, g = u ? _t(e) : null;
  u && b();
  function b() {
    const w = _t(e);
    g && !Es(g, w) && n(), g = w, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    c.forEach((B) => {
      a && B.removeEventListener("scroll", n), r && B.removeEventListener("resize", n);
    }), p == null || p(), (w = f) == null || w.disconnect(), f = null, u && cancelAnimationFrame(v);
  };
}
const uu = Ni, du = ji, Ar = Vi, cu = Hi, pu = Li, fu = Fi, mu = Ki, vu = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: su,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Ri(e, t, {
    ...a,
    platform: r
  });
};
function gu(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Uo(e) {
  if (gu(e)) {
    const t = e.$el;
    return ca(t) && $t(t) === "#comment" ? null : t;
  }
  return e;
}
function It(e) {
  return typeof e == "function" ? e() : s(e);
}
function hu(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Uo(It(e.element));
      return n == null ? {} : fu({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function As(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tr(e, t) {
  const n = As(e);
  return Math.round(t * n) / n;
}
function yu(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = S(() => {
    var E;
    return (E = It(n.open)) != null ? E : !0;
  }), r = S(() => It(n.middleware)), l = S(() => {
    var E;
    return (E = It(n.placement)) != null ? E : "bottom";
  }), i = S(() => {
    var E;
    return (E = It(n.strategy)) != null ? E : "absolute";
  }), u = S(() => {
    var E;
    return (E = It(n.transform)) != null ? E : !0;
  }), d = S(() => Uo(e.value)), c = S(() => Uo(t.value)), p = T(0), m = T(0), f = T(i.value), v = T(l.value), g = Rn({}), b = T(!1), w = S(() => {
    const E = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return E;
    const I = Tr(c.value, p.value), V = Tr(c.value, m.value);
    return u.value ? {
      ...E,
      transform: "translate(" + I + "px, " + V + "px)",
      ...As(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: I + "px",
      top: V + "px"
    };
  });
  let B;
  function $() {
    if (d.value == null || c.value == null)
      return;
    const E = a.value;
    vu(d.value, c.value, {
      middleware: r.value,
      placement: l.value,
      strategy: i.value
    }).then((I) => {
      p.value = I.x, m.value = I.y, f.value = I.strategy, v.value = I.placement, g.value = I.middlewareData, b.value = E !== !1;
    });
  }
  function O() {
    typeof B == "function" && (B(), B = void 0);
  }
  function k() {
    if (O(), o === void 0) {
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
  return X([r, l, i, a], $, {
    flush: "sync"
  }), X([d, c], k, {
    flush: "sync"
  }), X(a, P, {
    flush: "sync"
  }), ls() && is(O), {
    x: Dt(p),
    y: Dt(m),
    strategy: Dt(f),
    placement: Dt(v),
    middlewareData: Dt(g),
    isPositioned: Dt(b),
    floatingStyles: w,
    update: $
  };
}
function ne(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(a) => {
    const r = fn(o, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (mn(o, a), a)];
}
function ga(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function zn(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
function bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wu = function e(t, n) {
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
const wt = /* @__PURE__ */ bu(wu);
function Rt(e) {
  return e == null;
}
function xu(e, t) {
  var n;
  const o = Rn();
  return be(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), sa(o);
}
function St(e) {
  return ls() ? (is(e), !0) : !1;
}
function _u() {
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
function Cu(e) {
  let t = !1, n;
  const o = hs(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Ts(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, n || (o = hs(!0), n = o.run(() => e(...r))), St(a), n);
}
function at(e) {
  return typeof e == "function" ? e() : s(e);
}
const Qe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Bu = (e) => typeof e < "u", $u = (e) => e != null, Su = Object.prototype.toString, ku = (e) => Su.call(e) === "[object Object]", Ds = () => {
}, Dr = /* @__PURE__ */ Ou();
function Ou() {
  var e, t;
  return Qe && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Eu(e) {
  return Re();
}
function Ps(e, t = 1e4) {
  return ii((n, o) => {
    let a = at(e), r;
    const l = () => setTimeout(() => {
      a = at(e), o();
    }, at(t));
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
function Au(e, t) {
  Eu() && Wn(e, t);
}
function ha(e, t, n = {}) {
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
    }, at(t));
  }
  return o && (a.value = !0, Qe && u()), St(i), {
    isPending: sa(a),
    start: u,
    stop: i
  };
}
function Tu(e = 1e3, t = {}) {
  const {
    controls: n = !1,
    callback: o
  } = t, a = ha(
    o ?? Ds,
    e,
    t
  ), r = S(() => !a.isPending.value);
  return n ? {
    ready: r,
    ...a
  } : r;
}
function Ve(e) {
  var t;
  const n = at(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const gn = Qe ? window : void 0;
function Lt(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = gn) : [t, n, o, a] = e, !t)
    return Ds;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], l = () => {
    r.forEach((c) => c()), r.length = 0;
  }, i = (c, p, m, f) => (c.addEventListener(p, m, f), () => c.removeEventListener(p, m, f)), u = X(
    () => [Ve(t), at(a)],
    ([c, p]) => {
      if (l(), !c)
        return;
      const m = ku(p) ? { ...p } : p;
      r.push(
        ...n.flatMap((f) => o.map((v) => i(c, f, v, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return St(d), d;
}
function Du(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ya(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = gn,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: i = !1
  } = o, u = Du(t);
  return Lt(a, r, (d) => {
    d.repeat && at(i) || u(d) && n(d);
  }, l);
}
function ba() {
  const e = T(!1), t = Re();
  return t && re(() => {
    e.value = !0;
  }, t), e;
}
function Pu(e) {
  const t = ba();
  return S(() => (t.value, !!e()));
}
function Iu(e, t, n = {}) {
  const { window: o = gn, ...a } = n;
  let r;
  const l = Pu(() => o && "MutationObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const m = at(e), f = (Array.isArray(m) ? m : [m]).map(Ve).filter($u);
    return new Set(f);
  }), d = X(
    () => u.value,
    (m) => {
      i(), l.value && m.size && (r = new MutationObserver(t), m.forEach((f) => r.observe(f, a)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), p = () => {
    i(), d();
  };
  return St(p), {
    isSupported: l,
    stop: p,
    takeRecords: c
  };
}
function Is(e, t = {}) {
  const {
    immediate: n = !0,
    fpsLimit: o = void 0,
    window: a = gn
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
  function c() {
    !r.value && a && (r.value = !0, i = 0, u = a.requestAnimationFrame(d));
  }
  function p() {
    r.value = !1, u != null && a && (a.cancelAnimationFrame(u), u = null);
  }
  return n && c(), St(p), {
    isActive: sa(r),
    pause: p,
    resume: c
  };
}
function Mu(e) {
  return JSON.parse(JSON.stringify(e));
}
function ve(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, f = Re(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : Mu($) : $, w = () => Bu(e[t]) ? b(e[t]) : p, B = ($) => {
    m ? m($) && v(g, $) : v(g, $);
  };
  if (u) {
    const $ = w(), O = T($);
    let k = !1;
    return X(
      () => e[t],
      (P) => {
        k || (k = !0, O.value = b(P), oe(() => k = !1));
      }
    ), X(
      O,
      (P) => {
        !k && (P !== e[t] || c) && B(P);
      },
      { deep: c }
    ), O;
  } else
    return S({
      get() {
        return w();
      },
      set($) {
        B($);
      }
    });
}
function Xn(e) {
  return e ? e.flatMap((t) => t.type === ye ? Xn(t.children) : [t]) : [];
}
function Be() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Ru = ["INPUT", "TEXTAREA"];
function Ms(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && Ru.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = o, [p, m, f, v, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = f || v, B = p || m;
  if (!g && !b && (!w && !B || a === "vertical" && B || a === "horizontal" && w))
    return null;
  const $ = n ? Array.from(n.querySelectorAll(r)) : l;
  if (!$.length)
    return null;
  d && e.preventDefault();
  let O = null;
  return B || w ? O = Rs($, t, {
    goForward: w ? v : u === "ltr" ? p : m,
    loop: i
  }) : g ? O = $.at(0) || null : b && (O = $.at(-1) || null), c && (O == null || O.focus()), O;
}
function Rs(e, t, n, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), r = n.goForward ? a + 1 : a - 1;
  if (!n.loop && (r < 0 || r >= e.length))
    return null;
  const l = (r + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Rs(
    e,
    i,
    n,
    o
  ) : i : null;
}
function Io(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Wo(e, t, n = ".", o) {
  if (!Io(t))
    return Wo(e, {}, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : Io(l) && Io(a[r]) ? a[r] = Wo(
      l,
      a[r],
      (n ? `${n}.` : "") + r.toString()
    ) : a[r] = l);
  }
  return a;
}
function Fu(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Wo(n, o, ""), {})
  );
}
const Vu = Fu(), [Zn, zh] = ne("ConfigProvider");
let Lu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", zu = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Lu[Math.random() * 64 | 0];
  return t;
};
const Nu = Ts(() => {
  const e = T(/* @__PURE__ */ new Map()), t = T(), n = S(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), o = Zn({
    scrollBody: T(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Dr && (a == null || a()), t.value = void 0;
  };
  return X(n, (l, i) => {
    var u;
    if (!Qe)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, c = { padding: d, margin: 0 }, p = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? Vu({
      padding: o.scrollBody.value.padding === !0 ? d : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? d : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = typeof p.padding == "number" ? `${p.padding}px` : String(p.padding), document.body.style.marginRight = typeof p.margin == "number" ? `${p.margin}px` : String(p.margin), document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), Dr && (a = Lt(
      document,
      "touchmove",
      (m) => ju(m),
      { passive: !1 }
    )), oe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function hn(e) {
  const t = zu(6), n = Nu();
  n.value.set(t, e ?? !1);
  const o = S({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Au(() => {
    n.value.delete(t);
  }), o;
}
function Fs(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Fs(n);
  }
}
function ju(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Fs(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Ku = "data-radix-vue-collection-item";
function Kt(e, t = Ku) {
  const n = Symbol();
  return { createCollection: (o) => {
    const a = T([]);
    function r() {
      const l = Ve(o);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return oi(() => {
      a.value = [];
    }), re(r), ai(r), X(() => o == null ? void 0 : o.value, r, { immediate: !0 }), mn(n, a), a;
  }, injectCollection: () => fn(n, T([])) };
}
function vt(e) {
  const t = Zn({
    dir: T("ltr")
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function gt(e) {
  const t = Re(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[ps(Hn(a))] = (...r) => e(a, ...r);
  }), o;
}
let Mo = 0;
function wa() {
  be((e) => {
    if (!Qe)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Pr()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Pr()
    ), Mo++, e(() => {
      Mo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Mo--;
    });
  });
}
function Pr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Qn(e) {
  return S(() => {
    var t;
    return at(e) ? !!((t = Ve(e)) != null && t.closest("form")) : !0;
  });
}
function $e(e) {
  const t = Re(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = us(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Hn(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function Z(e, t) {
  const n = $e(e), o = t ? gt(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
function M() {
  const e = Re(), t = T(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Ve(t);
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
function Hu(e, t) {
  const n = Ps(!1, 300), o = T(null), a = _u();
  function r() {
    o.value = null, n.value = !1;
  }
  function l(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Uu(c, d.getBoundingClientRect()), m = Wu(c, p), f = qu(u.getBoundingClientRect()), v = Yu([...m, ...f]);
    o.value = v, n.value = !0;
  }
  return be((i) => {
    if (e.value && t.value) {
      const u = (c) => l(c, t.value), d = (c) => l(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), be((i) => {
    var u;
    if (o.value) {
      const d = (c) => {
        var p, m;
        if (!o.value)
          return;
        const f = c.target, v = { x: c.clientX, y: c.clientY }, g = ((p = e.value) == null ? void 0 : p.contains(f)) || ((m = t.value) == null ? void 0 : m.contains(f)), b = !Gu(v, o.value), w = !!f.closest("[data-grace-area-trigger]");
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
function Uu(e, t) {
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
function Wu(e, t, n = 5) {
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
function qu(e) {
  const { top: t, right: n, bottom: o, left: a } = e;
  return [
    { x: a, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: a, y: o }
  ];
}
function Gu(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Yu(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Xu(t);
}
function Xu(e) {
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
var Zu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pt = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), On = {}, Ro = 0, Vs = function(e) {
  return e && (e.host || Vs(e.parentNode));
}, Qu = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Vs(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ju = function(e, t, n, o) {
  var a = Qu(t, Array.isArray(e) ? e : [e]);
  On[n] || (On[n] = /* @__PURE__ */ new WeakMap());
  var r = On[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  a.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        c(m);
      else
        try {
          var f = m.getAttribute(o), v = f !== null && f !== "false", g = (Pt.get(m) || 0) + 1, b = (r.get(m) || 0) + 1;
          Pt.set(m, g), r.set(m, b), l.push(m), g === 1 && v && kn.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return c(t), i.clear(), Ro++, function() {
    l.forEach(function(p) {
      var m = Pt.get(p) - 1, f = r.get(p) - 1;
      Pt.set(p, m), r.set(p, f), m || (kn.has(p) || p.removeAttribute(o), kn.delete(p)), f || p.removeAttribute(n);
    }), Ro--, Ro || (Pt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), On = {});
  };
}, ed = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = Zu(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), Ju(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function yn(e) {
  let t;
  X(() => Ve(e), (n) => {
    n ? t = ed(n) : t && t();
  }), Le(() => {
    t && t();
  });
}
let td = 0;
function _e(e, t = "radix") {
  const n = Zn({ useId: void 0 });
  return Mn.useId ? `${t}-${Mn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++td}`;
}
function Ls(e) {
  const t = T(), n = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return re(() => {
    const a = Ve(e);
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
function nd(e, t) {
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
const od = "data-item-text";
function xa(e) {
  const t = Ps("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, o) => {
      if (!(e != null && e.value) && !o)
        return;
      t.value = t.value + n;
      const a = (e == null ? void 0 : e.value) ?? o, r = Be(), l = a.map((p) => {
        var m;
        return {
          ref: p,
          textValue: ((m = (p.querySelector(`[${od}]`) ?? p).textContent) == null ? void 0 : m.trim()) ?? ""
        };
      }), i = l.find((p) => p.ref === r), u = l.map((p) => p.textValue), d = rd(u, t.value, i == null ? void 0 : i.textValue), c = l.find((p) => p.textValue === d);
      return c && c.ref.focus(), c == null ? void 0 : c.ref;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function ad(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function rd(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let r = ad(e, Math.max(a, 0));
  o.length === 1 && (r = r.filter((i) => i !== n));
  const l = r.find(
    (i) => i.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const _a = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var o, a;
      if (!n.default)
        return null;
      const r = Xn(n.default()), l = r.findIndex((c) => c.type !== la);
      if (l === -1)
        return r;
      const i = r[l];
      (o = i.props) == null || delete o.ref;
      const u = i.props ? D(t, i.props) : t;
      t.class && (a = i.props) != null && a.class && delete i.props.class;
      const d = ms(i, u);
      for (const c in u)
        c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
      return r.length === 1 ? d : (r[l] = d, r);
    };
  }
}), K = x({
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
    return typeof o == "string" && ["area", "img", "input"].includes(o) ? () => ke(o, t) : o !== "template" ? () => ke(e.as, t, { default: n.default }) : () => ke(_a, t, { default: n.default });
  }
});
function zs() {
  const e = T(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Ve(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Ns, sd] = ne("CollapsibleRoot"), ld = /* @__PURE__ */ x({
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
    const o = e, a = ve(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = ve(o, "disabled");
    return sd({
      contentId: "",
      disabled: r,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), M(), (l, i) => (h(), C(s(K), {
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
}), id = /* @__PURE__ */ x({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const n = Ns();
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
          _(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function ud(e, t) {
  var n;
  const o = T({}), a = T("none"), r = T(e), l = e.value ? "mounted" : "unmounted";
  let i;
  const u = ((n = t.value) == null ? void 0 : n.ownerDocument.defaultView) ?? gn, { state: d, dispatch: c } = nd(l, {
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
    if (Qe) {
      const B = new CustomEvent(b, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(B);
    }
  };
  X(
    e,
    async (b, w) => {
      var B;
      const $ = w !== b;
      if (await oe(), $) {
        const O = a.value, k = En(t.value);
        b ? (c("MOUNT"), p("enter"), k === "none" && p("after-enter")) : k === "none" || ((B = o.value) == null ? void 0 : B.display) === "none" ? (c("UNMOUNT"), p("leave"), p("after-leave")) : w && O !== k ? (c("ANIMATION_OUT"), p("leave")) : (c("UNMOUNT"), p("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const m = (b) => {
    const w = En(t.value), B = w.includes(
      b.animationName
    ), $ = d.value === "mounted" ? "enter" : "leave";
    if (b.target === t.value && B && (p(`after-${$}`), c("ANIMATION_END"), !r.value)) {
      const O = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = u == null ? void 0 : u.setTimeout(() => {
        var k;
        ((k = t.value) == null ? void 0 : k.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = O);
      });
    }
    b.target === t.value && w === "none" && c("ANIMATION_END");
  }, f = (b) => {
    b.target === t.value && (a.value = En(t.value));
  }, v = X(
    t,
    (b, w) => {
      b ? (o.value = getComputedStyle(b), b.addEventListener("animationstart", f), b.addEventListener("animationcancel", m), b.addEventListener("animationend", m)) : (c("ANIMATION_END"), i !== void 0 && (u == null || u.clearTimeout(i)), w == null || w.removeEventListener("animationstart", f), w == null || w.removeEventListener("animationcancel", m), w == null || w.removeEventListener("animationend", m));
    },
    { immediate: !0 }
  ), g = X(d, () => {
    const b = En(t.value);
    a.value = d.value === "mounted" ? b : "none";
  });
  return Le(() => {
    v(), g();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(d.value)
    )
  };
}
function En(e) {
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
    const { present: a, forceMount: r } = ce(e), l = T(), { isPresent: i } = ud(a, l);
    n({ present: i });
    let u = t.default({ present: i });
    u = Xn(u || []);
    const d = Re();
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
    return () => r.value || a.value || i.value ? ke(t.default({ present: i })[0], {
      ref: (c) => {
        const p = Ve(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? l.value = p.firstElementChild : l.value = p), p;
      }
    }) : null;
  }
}), dd = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ns();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-collapsible-content"));
    const o = T(), { forwardRef: a, currentElement: r } = M(), l = T(0), i = T(0), u = S(() => n.open.value), d = T(u.value), c = T();
    return X(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await oe();
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
    ), re(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, m) => (h(), C(s(ze), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || s(n).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var f, v;
        return [
          R(s(K), D(p.$attrs, {
            id: s(n).contentId,
            ref: s(a),
            "as-child": t.asChild,
            as: p.as,
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
function js({ type: e, defaultValue: t, modelValue: n }) {
  const o = n || t;
  if (Rt(e) && Rt(n) && Rt(t))
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
function cd({ type: e, defaultValue: t, modelValue: n }) {
  return e || js({ type: e, defaultValue: t, modelValue: n });
}
function pd({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function fd(e, t) {
  const n = T(cd(e)), o = ve(e, "modelValue", t, {
    defaultValue: pd(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  X(
    () => [e.type, e.modelValue, e.defaultValue],
    () => {
      const l = js(e);
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
  const r = S(() => n.value === "single");
  return {
    modelValue: o,
    type: n,
    changeModelValue: a,
    isSingle: r
  };
}
const [Jn, md] = ne("AccordionRoot"), vd = /* @__PURE__ */ x({
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
    const n = e, o = t, { dir: a, disabled: r } = ce(n), l = vt(a), { modelValue: i, changeModelValue: u, isSingle: d } = fd(n, o), { forwardRef: c, currentElement: p } = M();
    return md({
      disabled: r,
      direction: l,
      orientation: n.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: n.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (m, f) => (h(), C(s(K), {
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
}), [Ca, gd] = ne("AccordionItem"), hd = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e, { expose: t }) {
    const n = e, o = Jn(), a = S(
      () => o.isSingle.value ? n.value === o.modelValue.value : Array.isArray(o.modelValue.value) && o.modelValue.value.includes(n.value)
    ), r = S(() => o.disabled.value || n.disabled), l = S(() => r.value ? "" : void 0), i = S(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: a, dataDisabled: l });
    const { currentRef: u, currentElement: d } = M();
    gd({
      open: a,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: S(() => n.value)
    });
    function c(p) {
      var m;
      const f = p.target;
      if (Array.from(((m = o.parentElement.value) == null ? void 0 : m.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((v) => v === f) === -1)
        return null;
      Ms(
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
    return (p, m) => (h(), C(s(ld), {
      "data-orientation": s(o).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: a.value,
      as: n.as,
      "as-child": n.asChild,
      onKeydown: ct(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        _(p.$slots, "default", { open: a.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), yd = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Jn(), o = Ca();
    return M(), (a, r) => (h(), C(s(dd), {
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
}), bd = /* @__PURE__ */ x({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(e) {
    const t = e, n = Jn(), o = Ca();
    return M(), (a, r) => (h(), C(s(K), {
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
}), wd = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Jn(), o = Ca();
    o.triggerId || (o.triggerId = _e(void 0, "radix-vue-accordion-trigger"));
    function a() {
      const r = n.isSingle.value && o.open.value && !n.collapsible;
      o.disabled.value || r || n.changeModelValue(o.value.value);
    }
    return (r, l) => (h(), C(s(id), {
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
}), [Je, xd] = ne("DialogRoot"), Ba = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = T(), r = T(), { modal: l } = ce(n);
    return xd({
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
}), $a = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Je(), { forwardRef: o, currentElement: a } = M();
    return n.contentId || (n.contentId = _e(void 0, "radix-vue-dialog-content")), re(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(s(K), D(t, {
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
}), Ht = /* @__PURE__ */ x({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ba();
    return (n, o) => s(t) || n.forceMount ? (h(), C(Un, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      _(n.$slots, "default")
    ], 8, ["to", "disabled"])) : de("", !0);
  }
}), Sa = /* @__PURE__ */ x({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ht), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _d = "dismissableLayer.pointerDownOutside", Cd = "dismissableLayer.focusOutside";
function Ks(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function Bd(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = T(!1), r = T(() => {
  });
  return be((l) => {
    if (!Qe)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Ks(t.value, c)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            ga(
              _d,
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
function $d(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = T(!1);
  return be((r) => {
    if (!Qe)
      return;
    const l = async (i) => {
      t != null && t.value && (await oe(), !(!t.value || Ks(t.value, i.target)) && i.target && !a.value && ga(
        Cd,
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
const je = fs({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ut = /* @__PURE__ */ x({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = M(), l = S(
      () => {
        var v;
        return ((v = r.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = S(() => je.layersRoot), u = S(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = S(() => je.layersWithOutsidePointerEventsDisabled.size > 0), c = S(() => {
      const v = Array.from(i.value), [g] = [...je.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return u.value >= b;
    }), p = Bd(async (v) => {
      const g = [...je.branches].some(
        (b) => b == null ? void 0 : b.contains(v.target)
      );
      !c.value || g || (o("pointerDownOutside", v), o("interactOutside", v), await oe(), v.defaultPrevented || o("dismiss"));
    }, r), m = $d((v) => {
      [...je.branches].some(
        (g) => g == null ? void 0 : g.contains(v.target)
      ) || (o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss"));
    }, r);
    ya("Escape", (v) => {
      u.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    });
    let f;
    return be((v) => {
      r.value && (n.disableOutsidePointerEvents && (je.layersWithOutsidePointerEventsDisabled.size === 0 && (f = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), je.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), v(() => {
        n.disableOutsidePointerEvents && je.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = f);
      }));
    }), be((v) => {
      v(() => {
        r.value && (i.value.delete(r.value), je.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (v, g) => (h(), C(s(K), {
      ref: s(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Bt({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: s(m).onFocusCapture,
      onBlurCapture: s(m).onBlurCapture,
      onPointerdownCapture: s(p).onPointerDownCapture
    }, {
      default: y(() => [
        _(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Sd = /* @__PURE__ */ x({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = M();
    return re(() => {
      je.branches.add(o.value);
    }), Le(() => {
      je.branches.delete(o.value);
    }), (a, r) => (h(), C(s(K), D({ ref: s(n) }, t), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fo = "focusScope.autoFocusOnMount", Vo = "focusScope.autoFocusOnUnmount", Ir = { bubbles: !1, cancelable: !0 };
function In(e, { select: t = !1 } = {}) {
  const n = Be();
  for (const o of e)
    if (dt(o, { select: t }), Be() !== n)
      return !0;
}
function kd(e) {
  const t = ka(e), n = Mr(t, e), o = Mr(t.reverse(), e);
  return [n, o];
}
function ka(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Mr(e, t) {
  for (const n of e)
    if (!Od(n, { upTo: t }))
      return n;
}
function Od(e, { upTo: t }) {
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
function Ed(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function dt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Be();
    e.focus({ preventScroll: !0 }), e !== n && Ed(e) && t && e.select();
  }
}
const Ad = Cu(() => T([]));
function Td() {
  const e = Ad();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Rr(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Rr(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Rr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Dd(e) {
  return e.filter((t) => t.tagName !== "A");
}
const eo = /* @__PURE__ */ x({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = M(), l = T(null), i = Td(), u = fs({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    be((c) => {
      if (!Qe)
        return;
      const p = r.value;
      if (!n.trapped)
        return;
      function m(b) {
        if (u.paused || !p)
          return;
        const w = b.target;
        p.contains(w) ? l.value = w : dt(l.value, { select: !0 });
      }
      function f(b) {
        if (u.paused || !p)
          return;
        const w = b.relatedTarget;
        w !== null && (p.contains(w) || dt(l.value, { select: !0 }));
      }
      function v(b) {
        p.contains(l.value) || dt(p);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", f);
      const g = new MutationObserver(v);
      p && g.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", f), g.disconnect();
      });
    }), be(async (c) => {
      const p = r.value;
      if (await oe(), !p)
        return;
      i.add(u);
      const m = Be();
      if (!p.contains(m)) {
        const f = new CustomEvent(Fo, Ir);
        p.addEventListener(Fo, (v) => o("mountAutoFocus", v)), p.dispatchEvent(f), f.defaultPrevented || (In(Dd(ka(p)), {
          select: !0
        }), Be() === m && dt(p));
      }
      c(() => {
        p.removeEventListener(Fo, (g) => o("mountAutoFocus", g));
        const f = new CustomEvent(Vo, Ir), v = (g) => {
          o("unmountAutoFocus", g);
        };
        p.addEventListener(Vo, v), p.dispatchEvent(f), setTimeout(() => {
          f.defaultPrevented || dt(m ?? document.body, { select: !0 }), p.removeEventListener(Vo, v), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = Be();
      if (p && m) {
        const f = c.currentTarget, [v, g] = kd(f);
        v && g ? !c.shiftKey && m === g ? (c.preventDefault(), n.loop && dt(v, { select: !0 })) : c.shiftKey && m === v && (c.preventDefault(), n.loop && dt(g, { select: !0 })) : m === f && c.preventDefault();
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
}), Pd = "menu.itemSelect", qo = ["Enter", " "], Id = ["ArrowDown", "PageUp", "Home"], Hs = ["ArrowUp", "PageDown", "End"], Md = [...Id, ...Hs], Rd = {
  ltr: [...qo, "ArrowRight"],
  rtl: [...qo, "ArrowLeft"]
}, Fd = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Oa(e) {
  return e ? "open" : "closed";
}
function Nn(e) {
  return e === "indeterminate";
}
function Ea(e) {
  return Nn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Go(e) {
  const t = Be();
  for (const n of e)
    if (n === t || (n.focus(), Be() !== t))
      return;
}
function Vd(e, t) {
  const { x: n, y: o } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, c = t[l].y;
    u > o != c > o && n < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Ld(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Vd(n, t);
}
function ln(e) {
  return e.pointerType === "mouse";
}
const zd = "DialogTitle", Nd = "DialogContent";
function jd({
  titleName: e = zd,
  contentName: t = Nd,
  componentLink: n = "dialog.html#title",
  titleId: o,
  descriptionId: a,
  contentElement: r
}) {
  const l = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  re(() => {
    var u;
    document.getElementById(o) || console.warn(l);
    const d = (u = r.value) == null ? void 0 : u.getAttribute("aria-describedby");
    a && d && (document.getElementById(a) || console.warn(i));
  });
}
const Us = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Je(), { forwardRef: r, currentElement: l } = M();
    return a.titleId || (a.titleId = _e(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = _e(void 0, "radix-vue-dialog-description")), re(() => {
      a.contentElement = l, Be() !== document.body && (a.triggerElement.value = Be());
    }), process.env.NODE_ENV !== "production" && jd({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: l
    }), (i, u) => (h(), C(s(eo), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Ut), D({
          id: s(a).contentId,
          ref: s(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": s(a).descriptionId,
          "aria-labelledby": s(a).titleId,
          "data-state": s(Oa)(s(a).open.value)
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
}), Kd = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Je(), r = gt(o), { forwardRef: l, currentElement: i } = M();
    return yn(i), (u, d) => (h(), C(Us, D({ ...n, ...s(r) }, {
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
}), Hd = /* @__PURE__ */ x({
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
    M();
    const a = Je(), r = T(!1), l = T(!1);
    return (i, u) => (h(), C(Us, D({ ...n, ...s(o) }, {
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
}), to = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Je(), r = gt(o), { forwardRef: l } = M();
    return (i, u) => (h(), C(s(ze), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(Kd, D({
          key: 0,
          ref: s(l)
        }, { ...n, ...s(r), ...i.$attrs }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Hd, D({
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
}), Ud = /* @__PURE__ */ x({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Je();
    return hn(!0), M(), (n, o) => (h(), C(s(K), {
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
}), no = /* @__PURE__ */ x({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Je(), { forwardRef: n } = M();
    return (o, a) => {
      var r;
      return (r = s(t)) != null && r.modal.value ? (h(), C(s(ze), {
        key: 0,
        present: o.forceMount || s(t).open.value
      }, {
        default: y(() => [
          R(Ud, D(o.$attrs, {
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
}), kt = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const n = Je();
    return (o, a) => (h(), C(s(K), D(t, {
      type: o.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => s(n).onOpenChange(!1))
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Aa = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Je();
    return M(), (o, a) => (h(), C(s(K), D(t, {
      id: s(n).titleId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ta = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    M();
    const n = Je();
    return (o, a) => (h(), C(s(K), D(t, {
      id: s(n).descriptionId
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Wd = /* @__PURE__ */ x({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = Z(e, t);
    return M(), (o, a) => (h(), C(s(Ba), D(s(n), { modal: !0 }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qd = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s($a), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gd = /* @__PURE__ */ x({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ht), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Yd, Xd] = ne("AlertDialogContent"), Zd = /* @__PURE__ */ x({
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
    M();
    const a = T();
    return Xd({
      onCancelElementChange: (r) => {
        a.value = r;
      }
    }), (r, l) => (h(), C(s(to), D({ ...n, ...s(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = Ce(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = Ce(() => {
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
}), Qd = /* @__PURE__ */ x({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(no), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jd = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Yd(), { forwardRef: o, currentElement: a } = M();
    return re(() => {
      n.onCancelElementChange(a.value);
    }), (r, l) => (h(), C(s(kt), D(t, { ref: s(o) }), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ec = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Aa), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tc = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Ta), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nc = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(kt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ws, oc] = ne("AvatarRoot"), ac = /* @__PURE__ */ x({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), oc({
      imageLoadingStatus: T("loading")
    }), (t, n) => (h(), C(s(K), {
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
function rc(e, t) {
  const n = T("idle"), o = T(!1), a = (r) => () => {
    o.value && (n.value = r);
  };
  return re(() => {
    o.value = !0, X([() => e.value, () => t == null ? void 0 : t.value], ([r, l]) => {
      if (!r)
        n.value = "error";
      else {
        const i = new window.Image();
        n.value = "loading", i.onload = a("loaded"), i.onerror = a("error"), i.src = r, l && (i.referrerPolicy = l);
      }
    }, { immediate: !0 });
  }), Le(() => {
    o.value = !1;
  }), n;
}
const sc = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const n = e, o = t, { src: a, referrerPolicy: r } = ce(n);
    M();
    const l = Ws(), i = rc(a, r);
    return X(
      i,
      (u) => {
        o("loadingStatusChange", u), u !== "idle" && (l.imageLoadingStatus.value = u);
      },
      { immediate: !0 }
    ), (u, d) => Nt((h(), C(s(K), {
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
      [ra, s(i) === "loaded"]
    ]);
  }
}), lc = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Ws();
    M();
    const o = T(!1);
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
        _(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : de("", !0);
  }
}), [qs, ic] = ne("PopperRoot"), Wt = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = T();
    return ic({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => _(n.$slots, "default");
  }
}), bn = /* @__PURE__ */ x({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = M(), a = qs();
    return be(() => {
      a.onAnchorChange(t.element ?? o.value);
    }), (r, l) => (h(), C(s(K), {
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
function uc(e) {
  return e !== null;
}
function dc(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, o, a;
      const { placement: r, rects: l, middlewareData: i } = t, u = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, c = u ? 0 : e.arrowHeight, [p, m] = Yo(r), f = { start: "0%", center: "50%", end: "100%" }[m], v = (((o = i.arrow) == null ? void 0 : o.x) ?? 0) + d / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + c / 2;
      let b = "", w = "";
      return p === "bottom" ? (b = u ? f : `${v}px`, w = `${-c}px`) : p === "top" ? (b = u ? f : `${v}px`, w = `${l.floating.height + c}px`) : p === "right" ? (b = `${-c}px`, w = u ? f : `${g}px`) : p === "left" && (b = `${l.floating.width + c}px`, w = u ? f : `${g}px`), { data: { x: b, y: w } };
    }
  };
}
function Yo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Gs = {
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
}, [Nh, cc] = ne("PopperContent"), zt = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ gs({
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
    ...Gs
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = qs(), { forwardRef: r, currentElement: l } = M(), i = T(), u = T(), { width: d, height: c } = Ls(u), p = S(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), m = S(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), f = S(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = S(() => ({
      padding: m.value,
      boundary: f.value.filter(uc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: f.value.length > 0
    })), g = xu(() => [
      uu({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ar({
        ...v.value
      }),
      n.avoidCollisions && du({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? mu() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ar({
        ...v.value
      }),
      cu({
        ...v.value,
        apply: ({ elements: A, rects: L, availableWidth: F, availableHeight: G }) => {
          const { width: q, height: Q } = L.reference, se = A.floating.style;
          se.setProperty(
            "--radix-popper-available-width",
            `${F}px`
          ), se.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), se.setProperty(
            "--radix-popper-anchor-width",
            `${q}px`
          ), se.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && hu({ element: u.value, padding: n.arrowPadding }),
      dc({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && pu({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: w, isPositioned: B, middlewareData: $ } = yu(
      a.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => iu(...A, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), O = S(
      () => Yo(w.value)[0]
    ), k = S(
      () => Yo(w.value)[1]
    );
    li(() => {
      B.value && o("placed");
    });
    const P = S(
      () => {
        var A;
        return ((A = $.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), E = T("");
    be(() => {
      l.value && (E.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = S(() => {
      var A;
      return ((A = $.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), V = S(() => {
      var A;
      return ((A = $.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return cc({
      placedSide: O,
      onArrowChange: (A) => u.value = A,
      arrowX: I,
      arrowY: V,
      shouldHideArrow: P
    }), (A, L) => {
      var F, G, q;
      return h(), N("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Bt({
          ...s(b),
          transform: s(B) ? s(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: E.value,
          "--radix-popper-transform-origin": [
            (F = s($).transformOrigin) == null ? void 0 : F.x,
            (G = s($).transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = s($).hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        R(s(K), D({ ref: s(r) }, A.$attrs, {
          "as-child": n.asChild,
          as: A.as,
          "data-side": O.value,
          "data-align": k.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: s(B) ? void 0 : "none"
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
}), wn = /* @__PURE__ */ x({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), (t, n) => (h(), C(s(K), {
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
}), pc = /* @__PURE__ */ x({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => (h(!0), N(ye, null, pt(n.value, (r) => (h(), C(wn, {
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
}), fc = "data-radix-vue-collection-item", [Da, mc] = ne("CollectionProvider");
function Pa(e = fc) {
  const t = T(/* @__PURE__ */ new Map()), n = T(), o = mc({
    collectionRef: n,
    itemMap: t,
    attrName: e
  }), { getItems: a } = Ma(o), r = S(() => Array.from(o.itemMap.value.values())), l = S(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const Ia = x({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Da(), { primitiveElement: o, currentElement: a } = zs();
    return X(a, () => {
      n.collectionRef.value = a.value;
    }), () => ke(_a, { ref: o }, t);
  }
}), oo = x({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(e, { slots: t, attrs: n }) {
    const o = Da(), { primitiveElement: a, currentElement: r } = zs();
    return be((l) => {
      if (r.value) {
        const i = vs(r.value);
        o.itemMap.value.set(i, { ref: r.value, value: e.value }), l(() => o.itemMap.value.delete(i));
      }
    }), () => ke(_a, { ...n, [o.attrName]: "", ref: a }, t);
  }
});
function Ma(e) {
  const t = e ?? Da();
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
const [qt, vc] = ne("ComboboxRoot"), gc = /* @__PURE__ */ x({
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
    const n = e, o = t, { multiple: a, disabled: r, dir: l } = ce(n), i = vt(l), u = ve(n, "searchTerm", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: n.searchTerm === void 0
    }), d = ve(n, "modelValue", o, {
      // @ts-expect-error ignore the type error here
      defaultValue: n.defaultValue ?? a.value ? [] : void 0,
      passive: n.modelValue === void 0,
      deep: !0
    }), c = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), p = ve(n, "selectedValue", o, {
      defaultValue: void 0,
      passive: n.selectedValue === void 0
    });
    async function m(j) {
      var Y, J;
      c.value = j, await oe(), j ? (d.value && (Array.isArray(d.value) && a.value ? p.value = (Y = $().find((Te) => {
        var Pe, De;
        return ((De = (Pe = Te.ref) == null ? void 0 : Pe.dataset) == null ? void 0 : De.state) === "checked";
      })) == null ? void 0 : Y.value : p.value = d.value), await oe(), (J = g.value) == null || J.focus(), G()) : (v.value = !1, n.resetSearchTermOnBlur && I("blur"));
    }
    function f(j) {
      if (Array.isArray(d.value) && a.value) {
        const Y = d.value.findIndex((Te) => wt(Te, j)), J = [...d.value];
        Y === -1 ? J.push(j) : J.splice(Y, 1), d.value = J;
      } else
        d.value = j, m(!1);
    }
    const v = T(!1), g = T(), b = T(), { forwardRef: w, currentElement: B } = M(), { getItems: $, reactiveItems: O, itemMapSize: k } = Pa("data-radix-vue-combobox-item"), P = T([]);
    X(() => k.value, () => {
      P.value = $().map((j) => j.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const E = S(() => {
      if (v.value) {
        if (n.filterFunction)
          return n.filterFunction(P.value, u.value);
        const j = P.value.filter((Y) => typeof Y == "string");
        if (j.length)
          return j.filter((Y) => {
            var J;
            return Y.toLowerCase().includes((J = u.value) == null ? void 0 : J.toLowerCase());
          });
      }
      return P.value;
    });
    function I(j) {
      const Y = j === "blur" || j === "select" && n.resetSearchTermOnSelect;
      !a.value && d.value && !Array.isArray(d.value) ? n.displayValue ? u.value = n.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : Y && (u.value = "") : Y && (u.value = "");
    }
    const V = S(() => E.value.findIndex((j) => wt(j, p.value))), A = S(() => {
      var j;
      return (j = O.value.find((Y) => wt(Y.value, p.value))) == null ? void 0 : j.ref;
    }), L = S(() => JSON.stringify(d.value));
    X(L, async () => {
      await oe(), await oe(), I("select");
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !n.searchTerm
    }), X(() => [E.value.length, u.value.length], async ([j, Y], [J, Te]) => {
      await oe(), await oe(), j && (Te > Y || V.value === -1) && (p.value = E.value[0]);
    });
    const F = Qn(B);
    function G() {
      var j;
      A.value instanceof Element && ((j = A.value) == null || j.scrollIntoView({ block: "nearest" }));
    }
    function q() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    const Q = T(!1);
    function se() {
      Q.value = !0;
    }
    function pe() {
      requestAnimationFrame(() => {
        Q.value = !1;
      });
    }
    async function ie(j) {
      var Y;
      E.value.length && p.value && A.value instanceof Element && (j.preventDefault(), j.stopPropagation(), Q.value || (Y = A.value) == null || Y.click());
    }
    return vc({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: f,
      isUserInputted: v,
      multiple: a,
      disabled: r,
      open: c,
      onOpenChange: m,
      filteredOptions: E,
      contentId: "",
      inputElement: g,
      selectedElement: A,
      onInputElementChange: (j) => g.value = j,
      onInputNavigation: async (j) => {
        const Y = V.value;
        Y === 0 && j === "up" || Y === E.value.length - 1 && j === "down" || (Y === -1 && E.value.length || j === "home" ? p.value = E.value[0] : j === "end" ? p.value = E.value[E.value.length - 1] : p.value = E.value[j === "up" ? Y - 1 : Y + 1], await oe(), G(), q(), oe(() => {
          var J;
          return (J = g.value) == null ? void 0 : J.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: ie,
      onCompositionEnd: pe,
      onCompositionStart: se,
      selectedValue: p,
      onSelectedValueChange: (j) => p.value = j,
      parentElement: B,
      contentElement: b,
      onContentElementChange: (j) => b.value = j
    }), (j, Y) => (h(), C(s(Wt), null, {
      default: y(() => [
        R(s(K), D({
          ref: s(w),
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
            s(F) && n.name ? (h(), C(s(pc), {
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
}), hc = /* @__PURE__ */ x({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, n = qt(), { forwardRef: o, currentElement: a } = M();
    re(() => {
      const c = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      c && (n.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const r = S(() => t.disabled || n.disabled.value || !1), l = T();
    ni(() => {
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
        ct(Ce(i, ["prevent"]), ["down", "up"]),
        ct(s(n).onInputEnter, ["enter"]),
        ct(Ce(u, ["prevent"]), ["home", "end"])
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
}), [Ys, yc] = ne("ComboboxGroup"), bc = /* @__PURE__ */ x({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: n, currentElement: o } = M(), a = _e(void 0, "radix-vue-combobox-group"), r = qt(), l = T(!1);
    function i() {
      if (!o.value)
        return;
      const u = o.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Iu(o, () => {
      oe(() => {
        i();
      });
    }, { childList: !0 }), X(() => r.searchTerm.value, () => {
      oe(() => {
        i();
      });
    }, { immediate: !0 }), yc({
      id: a
    }), (u, d) => Nt((h(), C(s(K), D(t, {
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
      [ra, l.value]
    ]);
  }
}), wc = /* @__PURE__ */ x({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    M();
    const n = Ys({ id: "" });
    return (o, a) => (h(), C(s(K), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [jh, xc] = ne("ComboboxContent"), _c = /* @__PURE__ */ x({
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
    const n = e, o = t, { position: a } = ce(n), r = qt();
    hn(n.bodyLock);
    const { forwardRef: l, currentElement: i } = M();
    yn(r.parentElement);
    const u = S(() => n.position === "popper" ? n : {}), d = $e(u.value);
    function c(m) {
      r.onSelectedValueChange("");
    }
    re(() => {
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
    return xc({ position: a }), (m, f) => (h(), C(s(Ia), null, {
      default: y(() => [
        m.dismissable ? (h(), C(s(Ut), {
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
            (h(), C(Fe(s(a) === "popper" ? s(zt) : s(K)), D({ ...m.$attrs, ...s(d) }, {
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
        }, 8, ["disable-outside-pointer-events"])) : (h(), C(Fe(s(a) === "popper" ? s(zt) : s(K)), D({ key: 1 }, { ...m.$attrs, ...u.value }, {
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
}), Cc = /* @__PURE__ */ x({
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
    const n = Z(e, t), { forwardRef: o } = M(), a = qt();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-combobox-content")), (r, l) => (h(), C(s(ze), {
      present: r.forceMount || s(a).open.value
    }, {
      default: y(() => [
        R(_c, D({ ...s(n), ...r.$attrs }, { ref: s(o) }), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Bc = /* @__PURE__ */ x({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    M();
    const n = qt(), o = S(() => n.filteredOptions.value.length === 0);
    return (a, r) => o.value ? (h(), C(s(K), U(D({ key: 0 }, t)), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          Se("No options")
        ])
      ]),
      _: 3
    }, 16)) : de("", !0);
  }
});
function $c(e) {
  const t = Zn({
    nonce: T()
  });
  return S(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
const [Kh, Sc] = ne("ComboboxItem"), kc = "combobox.select", Oc = /* @__PURE__ */ x({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: a } = ce(n), r = qt();
    Ys({ id: "", options: T([]) });
    const { forwardRef: l } = M(), i = S(
      () => {
        var g, b;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (g = r.modelValue.value) == null ? void 0 : g.some((w) => wt(w, n.value)) : wt((b = r.modelValue) == null ? void 0 : b.value, n.value);
      }
    ), u = S(() => wt(r.selectedValue.value, n.value)), d = _e(void 0, "radix-vue-combobox-item"), c = _e(void 0, "radix-vue-combobox-option"), p = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((g) => wt(g, n.value)) : !0);
    async function m(g) {
      o("select", g), !(g != null && g.defaultPrevented) && !a.value && g && r.onValueChange(n.value);
    }
    function f(g) {
      if (!g)
        return;
      const b = { originalEvent: g, value: n.value };
      ga(kc, m, b);
    }
    async function v(g) {
      await oe(), !g.defaultPrevented && r.onSelectedValueChange(n.value);
    }
    if (n.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Sc({
      isSelected: i
    }), (g, b) => (h(), C(s(oo), { value: g.value }, {
      default: y(() => [
        Nt(R(s(K), {
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
          onClick: f,
          onPointermove: v
        }, {
          default: y(() => [
            _(g.$slots, "default", {}, () => [
              Se(Ae(g.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [ra, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Ec = /* @__PURE__ */ x({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), D(t, { "aria-hidden": "true" }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xs = /* @__PURE__ */ x({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(bn), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Ac() {
  const e = T(!1);
  return re(() => {
    Lt("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), Lt(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const Tc = Ts(Ac), [Ot, Zs] = ne(["MenuRoot", "MenuSub"], "MenuContext"), [xn, Dc] = ne("MenuRoot"), Pc = /* @__PURE__ */ x({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a, dir: r } = ce(n), l = vt(r), i = ve(n, "open", o), u = T(), d = Tc();
    return Zs({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Dc({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (c, p) => (h(), C(s(Wt), null, {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ic = "rovingFocusGroup.onEntryFocus", Mc = { bubbles: !1, cancelable: !0 }, Rc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Fc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Vc(e, t, n) {
  const o = Fc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Rc[o];
}
function Qs(e, t = !1) {
  const n = Be();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Be() !== n))
      return;
}
function Lc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [zc, Nc] = ne("RovingFocusGroup"), Js = /* @__PURE__ */ x({
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
    const o = e, a = n, { loop: r, orientation: l, dir: i } = ce(o), u = vt(i), d = ve(o, "currentTabStopId", a, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = T(!1), p = T(!1), m = T(0), { getItems: f } = Pa();
    function v(b) {
      const w = !p.value;
      if (b.currentTarget && b.target === b.currentTarget && w && !c.value) {
        const B = new CustomEvent(Ic, Mc);
        if (b.currentTarget.dispatchEvent(B), a("entryFocus", B), !B.defaultPrevented) {
          const $ = f().map((E) => E.ref).filter((E) => E.dataset.disabled !== ""), O = $.find((E) => E.getAttribute("data-active") === "true"), k = $.find(
            (E) => E.id === d.value
          ), P = [O, k, ...$].filter(
            Boolean
          );
          Qs(P, o.preventScrollOnEntryFocus);
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
      getItems: f
    }), Nc({
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
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (b, w) => (h(), C(s(Ia), null, {
      default: y(() => [
        R(s(K), {
          tabindex: c.value || m.value === 0 ? -1 : 0,
          "data-orientation": s(l),
          as: b.as,
          "as-child": b.asChild,
          dir: s(u),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (B) => p.value = !0),
          onMouseup: g,
          onFocus: v,
          onBlur: w[1] || (w[1] = (B) => c.value = !1)
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
}), jc = /* @__PURE__ */ x({
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
    const t = e, n = zc(), o = S(() => t.tabStopId || _e()), a = S(
      () => n.currentTabStopId.value === o.value
    ), { getItems: r } = Ma();
    re(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Le(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function l(i) {
      if (i.key === "Tab" && i.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Vc(
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
          d = n.loop.value ? Lc(d, c + 1) : d.slice(c + 1);
        }
        oe(() => Qs(d));
      }
    }
    return (i, u) => (h(), C(s(oo), null, {
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
            _(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [Ra, Kc] = ne("MenuContent"), Fa = /* @__PURE__ */ x({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ gs({
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
    ...Gs
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Ot(), r = xn(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = ce(n);
    wa(), hn(i.value);
    const d = T(""), c = T(0), p = T(0), m = T(null), f = T("right"), v = T(0), g = T(null), { createCollection: b } = Kt(), { forwardRef: w, currentElement: B } = M(), $ = b(B);
    X(B, (A) => {
      a.onContentChange(A);
    });
    const { handleTypeaheadSearch: O } = xa($);
    Le(() => {
      window.clearTimeout(c.value);
    });
    function k(A) {
      var L, F;
      return f.value === ((L = m.value) == null ? void 0 : L.side) && Ld(A, (F = m.value) == null ? void 0 : F.area);
    }
    async function P(A) {
      var L;
      o("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (L = B.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function E(A) {
      if (A.defaultPrevented)
        return;
      const L = A.target.closest("[data-radix-menu-content]") === A.currentTarget, F = A.ctrlKey || A.altKey || A.metaKey, G = A.key.length === 1, q = Ms(
        A,
        Be(),
        B.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (q)
        return q == null ? void 0 : q.focus();
      if (A.code === "Space" || (L && (A.key === "Tab" && A.preventDefault(), !F && G && O(A.key)), A.target !== B.value) || !Md.includes(A.key))
        return;
      A.preventDefault();
      const Q = $.value;
      Hs.includes(A.key) && Q.reverse(), Go(Q);
    }
    function I(A) {
      var L, F;
      (F = (L = A == null ? void 0 : A.currentTarget) == null ? void 0 : L.contains) != null && F.call(L, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function V(A) {
      var L;
      if (!ln(A))
        return;
      const F = A.target, G = v.value !== A.clientX;
      if ((L = A == null ? void 0 : A.currentTarget) != null && L.contains(F) && G) {
        const q = A.clientX > v.value ? "right" : "left";
        f.value = q, v.value = A.clientX;
      }
    }
    return Kc({
      onItemEnter: (A) => !!k(A),
      onItemLeave: (A) => {
        var L;
        k(A) || ((L = B.value) == null || L.focus(), g.value = null);
      },
      onTriggerLeave: (A) => !!k(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        m.value = A;
      }
    }), (A, L) => (h(), C(s(eo), {
      "as-child": "",
      trapped: s(l),
      onMountAutoFocus: P,
      onUnmountAutoFocus: L[7] || (L[7] = (F) => o("closeAutoFocus", F))
    }, {
      default: y(() => [
        R(s(Ut), {
          "as-child": "",
          "disable-outside-pointer-events": s(i),
          onEscapeKeyDown: L[2] || (L[2] = (F) => o("escapeKeyDown", F)),
          onPointerDownOutside: L[3] || (L[3] = (F) => o("pointerDownOutside", F)),
          onFocusOutside: L[4] || (L[4] = (F) => o("focusOutside", F)),
          onInteractOutside: L[5] || (L[5] = (F) => o("interactOutside", F)),
          onDismiss: L[6] || (L[6] = (F) => o("dismiss"))
        }, {
          default: y(() => [
            R(s(Js), {
              "current-tab-stop-id": g.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (F) => g.value = F),
              "as-child": "",
              orientation: "vertical",
              dir: s(r).dir.value,
              loop: s(u),
              onEntryFocus: L[1] || (L[1] = (F) => {
                o("entryFocus", F), s(r).isUsingKeyboardRef.value || F.preventDefault();
              })
            }, {
              default: y(() => [
                R(s(zt), {
                  ref: s(w),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": s(Oa)(s(a).open.value),
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
                  onKeydown: E,
                  onBlur: I,
                  onPointermove: V
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
}), el = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ra(), { forwardRef: o } = M(), a = T(!1);
    async function r(i) {
      if (!i.defaultPrevented && ln(i)) {
        if (t.disabled)
          n.onItemLeave(i);
        else if (!n.onItemEnter(i)) {
          const u = i.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(i) {
      await oe(), !i.defaultPrevented && ln(i) && n.onItemLeave(i);
    }
    return (i, u) => (h(), C(s(oo), {
      value: { textValue: i.textValue }
    }, {
      default: y(() => [
        R(s(K), D({
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
    }, 8, ["value"]));
  }
}), Va = /* @__PURE__ */ x({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = M(), l = xn(), i = Ra(), u = T(!1);
    async function d() {
      const c = r.value;
      if (!n.disabled && c) {
        const p = new CustomEvent(Pd, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", p), await oe(), p.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (c, p) => (h(), C(el, D(n, {
      ref: s(a),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (m) => {
        var f;
        await oe(), !m.defaultPrevented && (u.value || (f = m.currentTarget) == null || f.click());
      }),
      onKeydown: p[2] || (p[2] = async (m) => {
        const f = s(i).searchRef.value !== "";
        c.disabled || f && m.key === " " || s(qo).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
      })
    }), {
      default: y(() => [
        _(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Hc, tl] = ne(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Uc = /* @__PURE__ */ x({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Hc({
      checked: T(!1)
    });
    return (n, o) => (h(), C(s(ze), {
      present: n.forceMount || s(Nn)(s(t).checked.value) || s(t).checked.value === !0
    }, {
      default: y(() => [
        R(s(K), {
          as: n.as,
          "as-child": n.asChild,
          "data-state": s(Ea)(s(t).checked.value)
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
}), Wc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = ve(n, "checked", o);
    return tl({ checked: a }), (r, l) => (h(), C(Va, D({ role: "menuitemcheckbox" }, n, {
      "aria-checked": s(Nn)(s(a)) ? "mixed" : s(a),
      "data-state": s(Ea)(s(a)),
      onSelect: l[0] || (l[0] = async (i) => {
        o("select", i), s(Nn)(s(a)) ? a.value = !0 : a.value = !s(a);
      })
    }), {
      default: y(() => [
        _(r.$slots, "default", { checked: s(a) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), qc = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Z(n, o), r = Ot(), { forwardRef: l, currentElement: i } = M();
    return yn(i), (u, d) => (h(), C(Fa, D(s(a), {
      ref: s(l),
      "trap-focus": s(r).open.value,
      "disable-outside-pointer-events": s(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => s(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ce((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        _(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Gc = /* @__PURE__ */ x({
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
    const n = Z(e, t), o = Ot();
    return (a, r) => (h(), C(Fa, D(s(n), {
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
}), Yc = /* @__PURE__ */ x({
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
    const n = Z(e, t), o = Ot(), a = xn();
    return (r, l) => (h(), C(s(ze), {
      present: r.forceMount || s(o).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(qc, U(D({ key: 0 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Gc, U(D({ key: 1 }, { ...r.$attrs, ...s(n) })), {
          default: y(() => [
            _(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), nl = /* @__PURE__ */ x({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), D({ role: "group" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xc = /* @__PURE__ */ x({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zc = /* @__PURE__ */ x({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ht), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Qc, Jc] = ne("MenuRadioGroup"), ep = /* @__PURE__ */ x({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "modelValue", t);
    return Jc({
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, r) => (h(), C(nl, U(W(n)), {
      default: y(() => [
        _(a.$slots, "default", { modelValue: s(o) })
      ]),
      _: 3
    }, 16));
  }
}), tp = /* @__PURE__ */ x({
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
    const n = e, o = t, { value: a } = ce(n), r = Qc(), l = S(
      () => r.modelValue.value === (a == null ? void 0 : a.value)
    );
    return tl({ checked: l }), (i, u) => (h(), C(Va, D({ role: "menuitemradio" }, n, {
      "aria-checked": l.value,
      "data-state": s(Ea)(l.value),
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
}), np = /* @__PURE__ */ x({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), D(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ol, op] = ne("MenuSub"), ap = /* @__PURE__ */ x({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "open", t, {
      defaultValue: !1,
      passive: n.open === void 0
    }), a = Ot(), r = T(), l = T();
    return be((i) => {
      (a == null ? void 0 : a.open.value) === !1 && (o.value = !1), i(() => o.value = !1);
    }), Zs({
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), op({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (i) => {
        r.value = i;
      }
    }), (i, u) => (h(), C(s(Wt), null, {
      default: y(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), rp = /* @__PURE__ */ x({
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
    const n = Z(e, t), o = Ot(), a = xn(), r = ol(), { forwardRef: l, currentElement: i } = M();
    return r.contentId || (r.contentId = _e(void 0, "radix-vue-menu-sub-content")), (u, d) => (h(), C(s(ze), {
      present: u.forceMount || s(o).open.value
    }, {
      default: y(() => [
        R(Fa, D(s(n), {
          id: s(r).contentId,
          ref: s(l),
          "aria-labelledby": s(r).triggerId,
          align: "start",
          side: s(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = Ce((c) => {
            var p;
            s(a).isUsingKeyboardRef.value && ((p = s(i)) == null || p.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = Ce(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (c) => {
            c.defaultPrevented || c.target !== s(r).trigger.value && s(o).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (c) => {
            s(a).onClose(), c.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (c) => {
            var p, m;
            const f = (p = c.currentTarget) == null ? void 0 : p.contains(c.target), v = s(Fd)[s(a).dir.value].includes(c.key);
            f && v && (s(o).onOpenChange(!1), (m = s(r).trigger.value) == null || m.focus(), c.preventDefault());
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
}), sp = /* @__PURE__ */ x({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ot(), o = xn(), a = ol(), r = Ra(), l = T(null);
    a.triggerId || (a.triggerId = _e(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Le(() => {
      i();
    });
    function u(p) {
      !ln(p) || r.onItemEnter(p) || !t.disabled && !n.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        n.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var m, f;
      if (!ln(p))
        return;
      i();
      const v = (m = n.content.value) == null ? void 0 : m.getBoundingClientRect();
      if (v != null && v.width) {
        const g = (f = n.content.value) == null ? void 0 : f.dataset.side, b = g === "right", w = b ? -5 : 5, B = v[b ? "left" : "right"], $ = v[b ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + w, y: p.clientY },
            { x: B, y: v.top },
            { x: $, y: v.top },
            { x: $, y: v.bottom },
            { x: B, y: v.bottom }
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
      const f = r.searchRef.value !== "";
      t.disabled || f && p.key === " " || Rd[o.dir.value].includes(p.key) && (n.onOpenChange(!0), await oe(), (m = n.content.value) == null || m.focus(), p.preventDefault());
    }
    return (p, m) => (h(), C(Xs, { "as-child": "" }, {
      default: y(() => [
        R(el, D(t, {
          id: s(a).triggerId,
          ref: (f) => {
            var v;
            (v = s(a)) == null || v.onTriggerChange(f == null ? void 0 : f.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": s(n).open.value,
          "aria-controls": s(a).contentId,
          "data-state": s(Oa)(s(n).open.value),
          onClick: m[0] || (m[0] = async (f) => {
            t.disabled || f.defaultPrevented || (f.currentTarget.focus(), s(n).open.value || s(n).onOpenChange(!0));
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
}), [al, lp] = ne("DropdownMenuRoot"), ip = /* @__PURE__ */ x({
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
    M();
    const a = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = T(), { modal: l, dir: i } = ce(n), u = vt(i);
    return lp({
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
    }), (d, c) => (h(), C(s(Pc), {
      open: s(a),
      "onUpdate:open": c[0] || (c[0] = (p) => xt(a) ? a.value = p : null),
      dir: s(u),
      modal: s(l)
    }, {
      default: y(() => [
        _(d.$slots, "default", { open: s(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), up = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = al(), { forwardRef: o, currentElement: a } = M();
    return re(() => {
      n.triggerElement = a;
    }), n.triggerId || (n.triggerId = _e(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (h(), C(s(Xs), { "as-child": "" }, {
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
            !r.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = s(n)) == null || u.onOpenToggle(), await oe(), s(n).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = ct(
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
}), dp = /* @__PURE__ */ x({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Zc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ x({
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
    const n = Z(e, t);
    M();
    const o = al(), a = T(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var i;
        (i = o.triggerElement.value) == null || i.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return o.contentId || (o.contentId = _e(void 0, "radix-vue-dropdown-menu-content")), (l, i) => {
      var u;
      return h(), C(s(Yc), D(s(n), {
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
          const p = d.detail.originalEvent, m = p.button === 0 && p.ctrlKey === !0, f = p.button === 2 || m;
          (!s(o).modal.value || f) && (a.value = !0), (c = s(o).triggerElement.value) != null && c.contains(d.target) && d.preventDefault();
        })
      }), {
        default: y(() => [
          _(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), pp = /* @__PURE__ */ x({
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
    return M(), (a, r) => (h(), C(s(Va), U(W({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fp = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(nl), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mp = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(np), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vp = /* @__PURE__ */ x({
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
    return M(), (a, r) => (h(), C(s(Wc), U(W({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rl = /* @__PURE__ */ x({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Uc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gp = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(Xc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hp = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = gt(t);
    return M(), (a, r) => (h(), C(s(ep), U(W({ ...n, ...s(o) })), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yp = /* @__PURE__ */ x({
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
    const n = Z(e, t);
    return M(), (o, a) => (h(), C(s(tp), U(W(s(n))), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bp = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = ve(n, "open", t, {
      passive: n.open === void 0,
      defaultValue: n.defaultOpen ?? !1
    });
    return M(), (a, r) => (h(), C(s(ap), {
      open: s(o),
      "onUpdate:open": r[0] || (r[0] = (l) => xt(o) ? o.value = l : null)
    }, {
      default: y(() => [
        _(a.$slots, "default", { open: s(o) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), wp = /* @__PURE__ */ x({
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
    const n = Z(e, t);
    return M(), (o, a) => (h(), C(s(rp), D(s(n), { style: {
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
}), xp = /* @__PURE__ */ x({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(sp), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _p = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), D(t, {
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
}), [Gt, Cp] = ne("PopoverRoot"), Bp = /* @__PURE__ */ x({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { modal: a } = ce(n), r = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = T(), i = T(!1);
    return Cp({
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
    }), (u, d) => (h(), C(s(Wt), null, {
      default: y(() => [
        _(u.$slots, "default", { open: s(r) })
      ]),
      _: 3
    }));
  }
}), $p = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Gt(), { forwardRef: o, currentElement: a } = M();
    return re(() => {
      n.triggerElement.value = a.value;
    }), (r, l) => (h(), C(Fe(s(n).hasCustomAnchor.value ? s(K) : s(bn)), { "as-child": "" }, {
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
            _(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Sp = /* @__PURE__ */ x({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ht), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sl = /* @__PURE__ */ x({
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
    const n = e, o = t, a = $e(n), { forwardRef: r } = M(), l = Gt();
    return wa(), (i, u) => (h(), C(s(eo), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => o("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => o("closeAutoFocus", d))
    }, {
      default: y(() => [
        R(s(Ut), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => o("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => o("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => o("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => o("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => s(l).onOpenChange(!1))
        }, {
          default: y(() => [
            R(s(zt), D(s(a), {
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
}), kp = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Gt(), r = T(!1);
    hn(!0);
    const l = Z(n, o), { forwardRef: i, currentElement: u } = M();
    return yn(u), (d, c) => (h(), C(sl, D(s(l), {
      ref: s(i),
      "trap-focus": s(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ce(
        (p) => {
          var m;
          o("closeAutoFocus", p), r.value || (m = s(a).triggerElement.value) == null || m.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        o("pointerDownOutside", p);
        const m = p.detail.originalEvent, f = m.button === 0 && m.ctrlKey === !0, v = m.button === 2 || f;
        r.value = v;
      }),
      onFocusOutside: c[2] || (c[2] = Ce(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Op = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Gt(), r = T(!1), l = T(!1), i = Z(n, o);
    return (u, d) => (h(), C(sl, D(s(i), {
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
}), Ep = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Gt(), r = Z(n, o), { forwardRef: l } = M();
    return a.contentId || (a.contentId = _e(void 0, "radix-vue-popover-content")), (i, u) => (h(), C(s(ze), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        s(a).modal.value ? (h(), C(kp, D({ key: 0 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (h(), C(Op, D({ key: 1 }, s(r), { ref: s(l) }), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Hh = /* @__PURE__ */ x({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    M();
    const n = Gt();
    return ds(() => {
      n.hasCustomAnchor.value = !0;
    }), Le(() => {
      n.hasCustomAnchor.value = !1;
    }), (o, a) => (h(), C(s(bn), U(W(t)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), un = 100, [Ap, Tp] = ne("ProgressRoot"), La = (e) => typeof e == "number";
function Dp(e, t) {
  return Rt(e) || La(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${un} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Pp(e) {
  return La(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(
    `Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${un}\`.`
  ), un);
}
const Ip = /* @__PURE__ */ x({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: un },
    getValueLabel: { type: Function, default: (e, t) => `${Math.round(e / t * un)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    M();
    const a = ve(n, "modelValue", o, {
      passive: n.modelValue === void 0
    }), r = ve(n, "max", o, {
      passive: n.max === void 0
    });
    X(
      () => a.value,
      async (i) => {
        const u = Dp(i, n.max);
        u !== i && (await oe(), a.value = u);
      },
      { immediate: !0 }
    ), X(
      () => n.max,
      (i) => {
        const u = Pp(n.max);
        u !== i && (r.value = u);
      },
      { immediate: !0 }
    );
    const l = S(() => Rt(a.value) ? "indeterminate" : a.value === r.value ? "complete" : "loading");
    return Tp({
      modelValue: a,
      max: r,
      progressState: l
    }), (i, u) => (h(), C(s(K), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": s(r),
      "aria-valuemin": 0,
      "aria-valuenow": La(s(a)) ? s(a) : void 0,
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
}), Mp = /* @__PURE__ */ x({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ap();
    return M(), (o, a) => {
      var r;
      return h(), C(s(K), D(t, {
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
}), Rp = ["default-value"], Fp = /* @__PURE__ */ x({
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
    const t = e, { value: n } = ce(t), o = T();
    return (a, r) => (h(), C(s(wn), { "as-child": "" }, {
      default: y(() => [
        Nt(ae("select", D({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => xt(n) ? n.value = l : null),
          "default-value": s(n)
        }), [
          _(a.$slots, "default")
        ], 16, Rp), [
          [ri, s(n)]
        ])
      ]),
      _: 3
    }));
  }
}), Vp = {
  key: 0,
  value: ""
}, [Et, ll] = ne("SelectRoot"), [Lp, zp] = ne("SelectRoot"), Np = /* @__PURE__ */ x({
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
    const n = e, o = t, a = ve(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), r = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = T(), i = T(), u = T({
      x: 0,
      y: 0
    }), d = T(!1), { required: c, disabled: p, dir: m } = ce(n), f = vt(m);
    ll({
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
      dir: f,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const v = Qn(l), g = T(/* @__PURE__ */ new Set()), b = S(() => Array.from(g.value).map((w) => {
      var B;
      return (B = w.props) == null ? void 0 : B.value;
    }).join(";"));
    return zp({
      onNativeOptionAdd: (w) => {
        g.value.add(w);
      },
      onNativeOptionRemove: (w) => {
        g.value.delete(w);
      }
    }), (w, B) => (h(), C(s(Wt), null, {
      default: y(() => [
        _(w.$slots, "default", {
          modelValue: s(a),
          open: s(r)
        }),
        s(v) ? (h(), C(Fp, D({ key: b.value }, w.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: s(c),
          name: w.name,
          autocomplete: w.autocomplete,
          disabled: s(p),
          value: s(a),
          onChange: B[0] || (B[0] = ($) => a.value = $.target.value)
        }), {
          default: y(() => [
            s(a) === void 0 ? (h(), N("option", Vp)) : de("", !0),
            (h(!0), N(ye, null, pt(Array.from(g.value), ($) => (h(), C(Fe($), D({ ref_for: !0 }, $.props, {
              key: $.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : de("", !0)
      ]),
      _: 3
    }));
  }
}), jp = [" ", "Enter", "ArrowUp", "ArrowDown"], Kp = [" ", "Enter"], Ke = 10;
function il(e) {
  return e === "" || Rt(e);
}
const Hp = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Et(), o = S(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = M();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-select-content")), re(() => {
      n.triggerElement = r;
    });
    const { injectCollection: l } = Kt(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = xa(i);
    function p() {
      o.value || (n.onOpenChange(!0), c());
    }
    function m(f) {
      p(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, v) => (h(), C(s(bn), { "as-child": "" }, {
      default: y(() => {
        var g, b, w, B;
        return [
          R(s(K), {
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
            "data-placeholder": s(il)((B = s(n).modelValue) == null ? void 0 : B.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: v[0] || (v[0] = ($) => {
              var O;
              (O = $ == null ? void 0 : $.currentTarget) == null || O.focus();
            }),
            onPointerdown: v[1] || (v[1] = ($) => {
              if ($.pointerType === "touch")
                return $.preventDefault();
              const O = $.target;
              O.hasPointerCapture($.pointerId) && O.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === !1 && (m($), $.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = Ce(
              ($) => {
                $.pointerType === "touch" && m($);
              },
              ["prevent"]
            )),
            onKeydown: v[3] || (v[3] = ($) => {
              const O = s(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && O && $.key === " " || (s(d)($.key), s(jp).includes($.key) && (p(), $.preventDefault()));
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
}), Up = /* @__PURE__ */ x({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ht), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [za, Wp] = ne("SelectItemAlignedPosition"), qp = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { injectCollection: a } = Kt(), r = Et(), l = At(), i = a(), u = T(!1), d = T(!0), c = T(), { forwardRef: p, currentElement: m } = M(), { viewport: f, selectedItem: v, selectedItemText: g, focusSelectedItem: b } = l;
    function w() {
      if (r.triggerElement.value && r.valueElement.value && c.value && m.value && f != null && f.value && v != null && v.value && g != null && g.value) {
        const O = r.triggerElement.value.getBoundingClientRect(), k = m.value.getBoundingClientRect(), P = r.valueElement.value.getBoundingClientRect(), E = g.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const he = E.left - k.left, fe = P.left - he, Oe = O.left - fe, we = O.width + Oe, ue = Math.max(we, k.width), H = window.innerWidth - Ke, le = zn(fe, Ke, Math.max(Ke, H - ue));
          c.value.style.minWidth = `${we}px`, c.value.style.left = `${le}px`;
        } else {
          const he = k.right - E.right, fe = window.innerWidth - P.right - he, Oe = window.innerWidth - O.right - fe, we = O.width + Oe, ue = Math.max(we, k.width), H = window.innerWidth - Ke, le = zn(
            fe,
            Ke,
            Math.max(Ke, H - ue)
          );
          c.value.style.minWidth = `${we}px`, c.value.style.right = `${le}px`;
        }
        const I = i.value, V = window.innerHeight - Ke * 2, A = f.value.scrollHeight, L = window.getComputedStyle(m.value), F = Number.parseInt(
          L.borderTopWidth,
          10
        ), G = Number.parseInt(L.paddingTop, 10), q = Number.parseInt(
          L.borderBottomWidth,
          10
        ), Q = Number.parseInt(
          L.paddingBottom,
          10
        ), se = F + G + A + Q + q, pe = Math.min(
          v.value.offsetHeight * 5,
          se
        ), ie = window.getComputedStyle(f.value), j = Number.parseInt(ie.paddingTop, 10), Y = Number.parseInt(
          ie.paddingBottom,
          10
        ), J = O.top + O.height / 2 - Ke, Te = V - J, Pe = v.value.offsetHeight / 2, De = v.value.offsetTop + Pe, qe = F + G + De, ht = se - qe;
        if (qe <= J) {
          const he = v.value === I[I.length - 1];
          c.value.style.bottom = "0px";
          const fe = m.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Oe = Math.max(
            Te,
            Pe + (he ? Y : 0) + fe + q
          ), we = qe + Oe;
          c.value.style.height = `${we}px`;
        } else {
          const he = v.value === I[0];
          c.value.style.top = "0px";
          const fe = Math.max(
            J,
            F + f.value.offsetTop + (he ? j : 0) + Pe
          ) + ht;
          c.value.style.height = `${fe}px`, f.value.scrollTop = qe - J + f.value.offsetTop;
        }
        c.value.style.margin = `${Ke}px 0`, c.value.style.minHeight = `${pe}px`, c.value.style.maxHeight = `${V}px`, o("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const B = T("");
    re(async () => {
      await oe(), w(), m.value && (B.value = window.getComputedStyle(m.value).zIndex);
    });
    function $(O) {
      O && d.value === !0 && (w(), b == null || b(), d.value = !1);
    }
    return Wp({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: $
    }), (O, k) => (h(), N("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Bt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: B.value
      })
    }, [
      R(s(K), D({
        ref: s(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...O.$attrs, ...n }), {
        default: y(() => [
          _(O.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Gp = /* @__PURE__ */ x({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ke },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $e(e);
    return (n, o) => (h(), C(s(zt), D(s(t), { style: {
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
}), Yt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [At, Yp] = ne("SelectContent"), Xp = /* @__PURE__ */ x({
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
    const n = e, o = t, a = Et();
    wa(), hn(n.bodyLock);
    const { createCollection: r } = Kt(), l = T();
    yn(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = xa(i), c = T(), p = T(), m = T(), f = T(!1), v = T(!1);
    function g() {
      p.value && l.value && Go([p.value, l.value]);
    }
    X(f, () => {
      g();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: w } = a;
    be((k) => {
      if (!l.value)
        return;
      let P = { x: 0, y: 0 };
      const E = (V) => {
        var A, L;
        P = {
          x: Math.abs(
            Math.round(V.pageX) - (((A = w.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((L = w.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, I = (V) => {
        var A;
        V.pointerType !== "touch" && (P.x <= 10 && P.y <= 10 ? V.preventDefault() : (A = l.value) != null && A.contains(V.target) || b(!1), document.removeEventListener("pointermove", E), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", E), document.addEventListener("pointerup", I, {
        capture: !0,
        once: !0
      })), k(() => {
        document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", I, {
          capture: !0
        });
      });
    });
    function B(k) {
      const P = k.ctrlKey || k.altKey || k.metaKey;
      if (k.key === "Tab" && k.preventDefault(), !P && k.key.length === 1 && d(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
        let E = i.value;
        if (["ArrowUp", "End"].includes(k.key) && (E = E.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
          const I = k.target, V = E.indexOf(I);
          E = E.slice(V + 1);
        }
        setTimeout(() => Go(E)), k.preventDefault();
      }
    }
    const $ = S(() => n.position === "popper" ? n : {}), O = $e($.value);
    return Yp({
      content: l,
      viewport: c,
      onViewportChange: (k) => {
        c.value = k;
      },
      itemRefCallback: (k, P, E) => {
        var I, V;
        const A = !v.value && !E;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((V = a.modelValue) == null ? void 0 : V.value) === P || A) && (p.value = k, A && (v.value = !0));
      },
      selectedItem: p,
      selectedItemText: m,
      onItemLeave: () => {
        var k;
        (k = l.value) == null || k.focus();
      },
      itemTextRefCallback: (k, P, E) => {
        var I, V;
        const A = !v.value && !E;
        (((I = a.modelValue) == null ? void 0 : I.value) !== void 0 && ((V = a.modelValue) == null ? void 0 : V.value) === P || A) && (m.value = k);
      },
      focusSelectedItem: g,
      position: n.position,
      isPositioned: f,
      searchRef: u
    }), (k, P) => (h(), C(s(eo), {
      "as-child": "",
      onMountAutoFocus: P[6] || (P[6] = Ce(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: P[7] || (P[7] = (E) => {
        var I;
        o("closeAutoFocus", E), !E.defaultPrevented && ((I = s(a).triggerElement.value) == null || I.focus({ preventScroll: !0 }), E.preventDefault());
      })
    }, {
      default: y(() => [
        R(s(Ut), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: P[2] || (P[2] = Ce(() => {
          }, ["prevent"])),
          onDismiss: P[3] || (P[3] = (E) => s(a).onOpenChange(!1)),
          onEscapeKeyDown: P[4] || (P[4] = (E) => o("escapeKeyDown", E)),
          onPointerDownOutside: P[5] || (P[5] = (E) => o("pointerDownOutside", E))
        }, {
          default: y(() => [
            (h(), C(Fe(
              k.position === "popper" ? Gp : qp
            ), D({ ...k.$attrs, ...s(O) }, {
              id: s(a).contentId,
              ref: (E) => {
                l.value = s(Ve)(E);
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
              onContextmenu: P[0] || (P[0] = Ce(() => {
              }, ["prevent"])),
              onPlaced: P[1] || (P[1] = (E) => f.value = !0),
              onKeydown: B
            }), {
              default: y(() => [
                _(k.$slots, "default")
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
}), Zp = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return ll(e.context), (t, n) => _(t.$slots, "default");
  }
}), Qp = { key: 1 }, Jp = /* @__PURE__ */ x({
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
    const n = e, o = Z(n, t), a = Et(), r = T();
    re(() => {
      r.value = new DocumentFragment();
    });
    const l = T(), i = S(() => n.forceMount || a.open.value);
    return (u, d) => {
      var c;
      return i.value ? (h(), C(s(ze), {
        key: 0,
        ref_key: "presenceRef",
        ref: l,
        present: !0
      }, {
        default: y(() => [
          R(Xp, U(W({ ...s(o), ...u.$attrs })), {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((c = l.value) != null && c.present) && r.value ? (h(), N("div", Qp, [
        (h(), C(Un, { to: r.value }, [
          R(Zp, { context: s(a) }, {
            default: y(() => [
              _(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : de("", !0);
    };
  }
}), ef = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(K), D({ "aria-hidden": "true" }, t), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ul, tf] = ne("SelectItem"), nf = /* @__PURE__ */ x({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: n } = ce(t), o = Et(), a = At(Yt), { forwardRef: r, currentElement: l } = M(), i = S(() => {
      var g;
      return ((g = o.modelValue) == null ? void 0 : g.value) === t.value;
    }), u = T(!1), d = T(t.textValue ?? ""), c = _e(void 0, "radix-vue-select-item-text");
    async function p(g) {
      await oe(), !(g != null && g.defaultPrevented) && (n.value || (o.onValueChange(t.value), o.onOpenChange(!1)));
    }
    async function m(g) {
      var b;
      await oe(), !g.defaultPrevented && (n.value ? (b = a.onItemLeave) == null || b.call(a) : g.currentTarget.focus({ preventScroll: !0 }));
    }
    async function f(g) {
      var b;
      await oe(), !g.defaultPrevented && g.currentTarget === Be() && ((b = a.onItemLeave) == null || b.call(a));
    }
    async function v(g) {
      var b;
      await oe(), !(g.defaultPrevented || ((b = a.searchRef) == null ? void 0 : b.value) !== "" && g.key === " ") && (Kp.includes(g.key) && p(), g.key === " " && g.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return re(() => {
      l.value && a.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), tf({
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
      onTouchend: b[3] || (b[3] = Ce(() => {
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
}), of = /* @__PURE__ */ x({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = ul();
    return (o, a) => s(n).isSelected.value ? (h(), C(s(K), D({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : de("", !0);
  }
}), [af, rf] = ne("SelectGroup"), sf = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = _e(void 0, "radix-vue-select-group");
    return rf({ id: n }), (o, a) => (h(), C(s(K), D({ role: "group" }, t, { "aria-labelledby": s(n) }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), lf = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, n = af({ id: "" });
    return (o, a) => (h(), C(s(K), D(t, {
      id: s(n).id
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), dl = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Et(), o = At(Yt), a = Lp(), r = ul(), { forwardRef: l, currentElement: i } = M(), u = S(() => {
      var d;
      return ke("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        textContent: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return re(() => {
      i.value && (r.onItemTextChange(i.value), o.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), a.onNativeOptionAdd(u.value));
    }), Wn(() => {
      a.onNativeOptionRemove(u.value);
    }), (d, c) => (h(), N(ye, null, [
      R(s(K), D({
        id: s(r).textId,
        ref: s(l)
      }, { ...t, ...d.$attrs }, { "data-item-text": "" }), {
        default: y(() => [
          _(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      s(r).isSelected.value && s(n).valueElement.value && !s(n).valueElementHasChildren.value ? (h(), C(Un, {
        key: 0,
        to: s(n).valueElement.value
      }, [
        _(d.$slots, "default")
      ], 8, ["to"])) : de("", !0)
    ], 64));
  }
}), uf = /* @__PURE__ */ x({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = ce(t), o = $c(n), a = At(Yt), r = a.position === "item-aligned" ? za() : void 0, { forwardRef: l, currentElement: i } = M();
    re(() => {
      a == null || a.onViewportChange(i.value);
    });
    const u = T(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: m, contentWrapper: f } = r ?? {};
      if (m != null && m.value && f != null && f.value) {
        const v = Math.abs(u.value - p.scrollTop);
        if (v > 0) {
          const g = window.innerHeight - Ke * 2, b = Number.parseFloat(
            f.value.style.minHeight
          ), w = Number.parseFloat(f.value.style.height), B = Math.max(b, w);
          if (B < g) {
            const $ = B + v, O = Math.min(g, $), k = $ - O;
            f.value.style.height = `${O}px`, f.value.style.bottom === "0px" && (p.scrollTop = k > 0 ? k : 0, f.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (h(), N(ye, null, [
      R(s(K), D({
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
      R(s(K), {
        as: "style",
        nonce: s(o)
      }, {
        default: y(() => [
          Se(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), cl = /* @__PURE__ */ x({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { injectCollection: o } = Kt(), a = o(), r = At(Yt), l = T(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    be(() => {
      const c = a.value.find(
        (p) => p === Be()
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
    return Wn(() => i()), (c, p) => {
      var m;
      return h(), C(s(K), D({
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
}), df = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = At(Yt), n = t.position === "item-aligned" ? za() : void 0, { forwardRef: o, currentElement: a } = M(), r = T(!1);
    return be((l) => {
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
    }), (l, i) => r.value ? (h(), C(cl, {
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
}), cf = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = At(Yt), n = t.position === "item-aligned" ? za() : void 0, { forwardRef: o, currentElement: a } = M(), r = T(!1);
    return be((l) => {
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
    }), (l, i) => r.value ? (h(), C(cl, {
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
}), pf = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: n } = M(), o = Et(), a = cs();
    return ds(() => {
      var r;
      const l = !!Xn((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      o.onValueElementHasChildrenChange(l);
    }), re(() => {
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
          s(il)((i = s(o).modelValue) == null ? void 0 : i.value) ? (h(), N(ye, { key: 0 }, [
            Se(Ae(r.placeholder), 1)
          ], 64)) : _(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ff = /* @__PURE__ */ x({
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
        _(t.$slots, "default", {}, () => [
          Se("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function mf(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((a, r) => a - r);
}
function pl(e, t, n) {
  const o = 100 / (n - t) * (e - t);
  return zn(o, 0, 100);
}
function vf(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function gf(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map((a) => Math.abs(a - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function hf(e, t, n) {
  const o = e / 2, a = Na([0, 50], [0, o]);
  return (o - a(t) * n) * n;
}
function yf(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function bf(e, t) {
  if (t > 0) {
    const n = yf(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Na(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function wf(e) {
  return (String(e).split(".")[1] || "").length;
}
function xf(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
const fl = ["PageUp", "PageDown"], ml = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], vl = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [gl, hl] = ne(["SliderVertical", "SliderHorizontal"]), yl = /* @__PURE__ */ x({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = ao();
    return (r, l) => (h(), C(s(K), D({ "data-slider-impl": "" }, n, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (o("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (o("endKeyDown", i), i.preventDefault()) : s(fl).concat(s(ml)).includes(i.key) && (o("stepKeyDown", i), i.preventDefault());
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
}), _f = /* @__PURE__ */ x({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, dir: l, inverted: i } = ce(n), { forwardRef: u, currentElement: d } = M(), c = T(), p = S(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function m(f) {
      const v = c.value || d.value.getBoundingClientRect(), g = [0, v.width], b = p.value ? [r.value, a.value] : [a.value, r.value], w = Na(g, b);
      return c.value = v, w(f - v.left);
    }
    return hl({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (f, v) => (h(), C(yl, {
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
        c.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const b = p.value ? "from-left" : "from-right", w = s(vl)[b].includes(g.key);
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
}), Cf = /* @__PURE__ */ x({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(e, { emit: t }) {
    const n = e, o = t, { max: a, min: r, inverted: l } = ce(n), { forwardRef: i, currentElement: u } = M(), d = T(), c = S(() => !l.value);
    function p(m) {
      const f = d.value || u.value.getBoundingClientRect(), v = [0, f.height], g = c.value ? [a.value, r.value] : [r.value, a.value], b = Na(v, g);
      return d.value = f, b(m - f.top);
    }
    return hl({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (m, f) => (h(), C(yl, {
      ref: s(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: f[0] || (f[0] = (v) => {
        const g = p(v.clientY);
        o("slideStart", g);
      }),
      onSlideMove: f[1] || (f[1] = (v) => {
        const g = p(v.clientY);
        o("slideMove", g);
      }),
      onSlideEnd: f[2] || (f[2] = () => {
        d.value = void 0, o("slideEnd");
      }),
      onStepKeyDown: f[3] || (f[3] = (v) => {
        const g = c.value ? "from-bottom" : "from-top", b = s(vl)[g].includes(v.key);
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
}), Bf = ["value", "name", "disabled", "step"], [ao, $f] = ne("SliderRoot"), Sf = /* @__PURE__ */ x({
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
    const n = e, o = t, { min: a, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = ce(n), p = vt(c), { forwardRef: m, currentElement: f } = M(), v = Qn(f);
    Pa();
    const g = ve(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), b = T(0), w = T(g.value);
    function B(E) {
      const I = gf(g.value, E);
      k(E, I);
    }
    function $(E) {
      k(E, b.value);
    }
    function O() {
      const E = w.value[b.value];
      g.value[b.value] !== E && o("valueCommit", si(g.value));
    }
    function k(E, I, { commit: V } = { commit: !1 }) {
      var A;
      const L = wf(l.value), F = xf(Math.round((E - a.value) / l.value) * l.value + a.value, L), G = zn(F, a.value, r.value), q = mf(g.value, G, I);
      if (bf(q, i.value * l.value)) {
        b.value = q.indexOf(G);
        const Q = String(q) !== String(g.value);
        Q && V && o("valueCommit", q), Q && ((A = P.value[b.value]) == null || A.focus(), g.value = q);
      }
    }
    const P = T([]);
    return $f({
      modelValue: g,
      valueIndexToChangeRef: b,
      thumbElements: P,
      orientation: u,
      min: a,
      max: r,
      disabled: d
    }), (E, I) => (h(), N(ye, null, [
      R(s(Ia), null, {
        default: y(() => [
          (h(), C(Fe(s(u) === "horizontal" ? _f : Cf), D(E.$attrs, {
            ref: s(m),
            "as-child": E.asChild,
            as: E.as,
            min: s(a),
            max: s(r),
            dir: s(p),
            inverted: E.inverted,
            "aria-disabled": s(d),
            "data-disabled": s(d) ? "" : void 0,
            onPointerdown: I[0] || (I[0] = () => {
              s(d) || (w.value = s(g));
            }),
            onSlideStart: I[1] || (I[1] = (V) => !s(d) && B(V)),
            onSlideMove: I[2] || (I[2] = (V) => !s(d) && $(V)),
            onSlideEnd: I[3] || (I[3] = (V) => !s(d) && O()),
            onHomeKeyDown: I[4] || (I[4] = (V) => !s(d) && k(s(a), 0, { commit: !0 })),
            onEndKeyDown: I[5] || (I[5] = (V) => !s(d) && k(s(r), s(g).length - 1, { commit: !0 })),
            onStepKeyDown: I[6] || (I[6] = (V, A) => {
              if (!s(d)) {
                const L = s(fl).includes(V.key) || V.shiftKey && s(ml).includes(V.key) ? 10 : 1, F = b.value, G = s(g)[F], q = s(l) * L * A;
                k(G + q, F, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              _(E.$slots, "default", { modelValue: s(g) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      s(v) ? (h(!0), N(ye, { key: 0 }, pt(s(g), (V, A) => (h(), N("input", {
        key: A,
        value: V,
        type: "number",
        style: { display: "none" },
        name: E.name ? E.name + (s(g).length > 1 ? "[]" : "") : void 0,
        disabled: s(d),
        step: s(l)
      }, null, 8, Bf))), 128)) : de("", !0)
    ], 64));
  }
}), kf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = ao(), o = gl(), { forwardRef: a, currentElement: r } = M(), l = S(() => {
      var f, v;
      return (v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v[t.index];
    }), i = S(() => l.value === void 0 ? 0 : pl(l.value, n.min.value ?? 0, n.max.value ?? 100)), u = S(() => {
      var f, v;
      return vf(t.index, ((v = (f = n.modelValue) == null ? void 0 : f.value) == null ? void 0 : v.length) ?? 0);
    }), d = Ls(r), c = S(() => d[o.size].value), p = S(() => c.value ? hf(c.value, i.value, o.direction) : 0), m = ba();
    return re(() => {
      n.thumbElements.value.push(r.value);
    }), Le(() => {
      const f = n.thumbElements.value.findIndex((v) => v === r.value) ?? -1;
      n.thumbElements.value.splice(f, 1);
    }), (f, v) => (h(), C(s(oo), null, {
      default: y(() => [
        R(s(K), D(f.$attrs, {
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
            [s(o).startEdge]: `calc(${i.value}% + ${p.value}px)`,
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
}), Of = /* @__PURE__ */ x({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { getItems: n } = Ma(), { forwardRef: o, currentElement: a } = M(), r = S(() => a.value ? n().findIndex((l) => l.ref === a.value) : -1);
    return (l, i) => (h(), C(kf, D({ ref: s(o) }, t, { index: r.value }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Ef = /* @__PURE__ */ x({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ao();
    return M(), (n, o) => (h(), C(s(K), {
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
}), Af = /* @__PURE__ */ x({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ao(), n = gl();
    M();
    const o = S(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => pl(u, t.min.value, t.max.value)
      );
    }), a = S(() => t.modelValue.value.length > 1 ? Math.min(...o.value) : 0), r = S(() => 100 - Math.max(...o.value));
    return (l, i) => (h(), C(s(K), {
      "data-disabled": s(t).disabled.value ? "" : void 0,
      "data-orientation": s(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: Bt({
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
function Tf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Tf();
const Df = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Pf, If] = ne("SwitchRoot"), Mf = /* @__PURE__ */ x({
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
    const n = e, o = t, { disabled: a } = ce(n), r = ve(n, "checked", o, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    });
    function l() {
      a.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = M(), d = Qn(u), c = S(() => {
      var p;
      return n.id && u.value ? (p = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return If({
      checked: r,
      toggleCheck: l,
      disabled: a
    }), (p, m) => (h(), N(ye, null, [
      R(s(K), D(p.$attrs, {
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
        onKeydown: ct(Ce(l, ["prevent"]), ["enter"])
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
      }, null, 8, Df)) : de("", !0)
    ], 64));
  }
}), Rf = /* @__PURE__ */ x({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Pf();
    return M(), (n, o) => {
      var a;
      return h(), C(s(K), {
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
}), [ja, Ff] = ne("TabsRoot"), Vf = /* @__PURE__ */ x({
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
    const n = e, o = t, { orientation: a, dir: r } = ce(n), l = vt(r);
    M();
    const i = ve(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = T();
    return Ff({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: a,
      dir: l,
      activationMode: n.activationMode,
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
}), Lf = /* @__PURE__ */ x({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { loop: n } = ce(t), { forwardRef: o, currentElement: a } = M(), r = ja();
    return r.tabsList = a, (l, i) => (h(), C(s(Js), {
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
            _(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function bl(e, t) {
  return `${e}-trigger-${t}`;
}
function wl(e, t) {
  return `${e}-content-${t}`;
}
const zf = /* @__PURE__ */ x({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n } = M(), o = ja(), a = S(() => bl(o.baseId, t.value)), r = S(() => wl(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value), i = T(l.value);
    return re(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (h(), C(s(ze), {
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
          style: Bt({
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
}), Nf = /* @__PURE__ */ x({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, { forwardRef: n } = M(), o = ja(), a = S(() => bl(o.baseId, t.value)), r = S(() => wl(o.baseId, t.value)), l = S(() => t.value === o.modelValue.value);
    return (i, u) => (h(), C(s(jc), {
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
          onMousedown: u[0] || (u[0] = Ce((d) => {
            !i.disabled && d.ctrlKey === !1 ? s(o).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = ct((d) => s(o).changeModelValue(i.value), ["enter", "space"])),
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
}), [ro, jf] = ne("ToastProvider"), Kf = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(e) {
    const t = e, { label: n, duration: o, swipeDirection: a, swipeThreshold: r } = ce(t), l = T(), i = T(0), u = T(!1), d = T(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return jf({
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
}), Hf = "toast.swipeStart", Uf = "toast.swipeMove", Wf = "toast.swipeCancel", qf = "toast.swipeEnd", Xo = "toast.viewportPause", Zo = "toast.viewportResume";
function An(e, t, n) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Fr(e, t, n = 0) {
  const o = Math.abs(e.x), a = Math.abs(e.y), r = o > a;
  return t === "left" || t === "right" ? r && o > n : !r && a > n;
}
function Gf(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function xl(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Gf(n)) {
      const o = n.ariaHidden || n.hidden || n.style.display === "none", a = n.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...xl(n));
    }
  }), t;
}
const Yf = /* @__PURE__ */ x({
  __name: "ToastAnnounce",
  setup(e) {
    const t = ro(), n = Tu(1e3), o = T(!1);
    return Is(() => {
      o.value = !0;
    }), (a, r) => s(n) || o.value ? (h(), C(s(wn), { key: 0 }, {
      default: y(() => [
        Se(Ae(s(t).label.value) + " ", 1),
        _(a.$slots, "default")
      ]),
      _: 3
    })) : de("", !0);
  }
}), [Xf, Zf] = ne("ToastRoot"), Qf = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = M(), l = ro(), i = T(null), u = T(null), d = S(
      () => typeof n.duration == "number" ? n.duration : l.duration.value
    ), c = T(0), p = T(d.value), m = T(0), f = T(d.value), v = Is(() => {
      const B = (/* @__PURE__ */ new Date()).getTime() - c.value;
      f.value = Math.max(p.value - B, 0);
    }, { fpsLimit: 60 });
    function g(B) {
      B <= 0 || B === Number.POSITIVE_INFINITY || Qe && (window.clearTimeout(m.value), c.value = (/* @__PURE__ */ new Date()).getTime(), m.value = window.setTimeout(b, B));
    }
    function b() {
      var B, $;
      (B = r.value) != null && B.contains(Be()) && (($ = l.viewport.value) == null || $.focus()), l.isClosePausedRef.value = !1, o("close");
    }
    const w = S(() => r.value ? xl(r.value) : null);
    if (n.type && !["foreground", "background"].includes(n.type)) {
      const B = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(B);
    }
    return be((B) => {
      const $ = l.viewport.value;
      if ($) {
        const O = () => {
          g(p.value), v.resume(), o("resume");
        }, k = () => {
          const P = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - P, window.clearTimeout(m.value), v.pause(), o("pause");
        };
        return $.addEventListener(Xo, k), $.addEventListener(Zo, O), () => {
          $.removeEventListener(Xo, k), $.removeEventListener(Zo, O);
        };
      }
    }), X(() => [n.open, d.value], () => {
      p.value = d.value, n.open && !l.isClosePausedRef.value && g(d.value);
    }, { immediate: !0 }), ya("Escape", (B) => {
      o("escapeKeyDown", B), B.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = !0, b());
    }), re(() => {
      l.onToastAdd();
    }), Le(() => {
      l.onToastRemove();
    }), Zf({ onClose: b }), (B, $) => (h(), N(ye, null, [
      w.value ? (h(), C(Yf, {
        key: 0,
        role: "alert",
        "aria-live": B.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": "true"
      }, {
        default: y(() => [
          Se(Ae(w.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : de("", !0),
      s(l).viewport.value ? (h(), C(Un, {
        key: 1,
        to: s(l).viewport.value
      }, [
        R(s(K), D({
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
          onPointerdown: $[0] || ($[0] = Ce((O) => {
            i.value = { x: O.clientX, y: O.clientY };
          }, ["left"])),
          onPointermove: $[1] || ($[1] = (O) => {
            if (!i.value) return;
            const k = O.clientX - i.value.x, P = O.clientY - i.value.y, E = !!u.value, I = ["left", "right"].includes(s(l).swipeDirection.value), V = ["left", "up"].includes(s(l).swipeDirection.value) ? Math.min : Math.max, A = I ? V(0, k) : 0, L = I ? 0 : V(0, P), F = O.pointerType === "touch" ? 10 : 2, G = { x: A, y: L }, q = { originalEvent: O, delta: G };
            E ? (u.value = G, s(An)(s(Uf), (Q) => o("swipeMove", Q), q)) : s(Fr)(G, s(l).swipeDirection.value, F) ? (u.value = G, s(An)(s(Hf), (Q) => o("swipeStart", Q), q), O.target.setPointerCapture(O.pointerId)) : (Math.abs(k) > F || Math.abs(P) > F) && (i.value = null);
          }),
          onPointerup: $[2] || ($[2] = (O) => {
            const k = u.value, P = O.target;
            if (P.hasPointerCapture(O.pointerId) && P.releasePointerCapture(O.pointerId), u.value = null, i.value = null, k) {
              const E = O.currentTarget, I = { originalEvent: O, delta: k };
              s(Fr)(k, s(l).swipeDirection.value, s(l).swipeThreshold.value) ? s(An)(s(qf), (V) => o("swipeEnd", V), I) : s(An)(s(Wf), (V) => o("swipeCancel", V), I), E == null || E.addEventListener("click", (V) => V.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            _(B.$slots, "default", {
              remaining: f.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : de("", !0)
    ], 64));
  }
}), Jf = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a } = M(), r = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    return (l, i) => (h(), C(s(ze), {
      present: l.forceMount || s(r)
    }, {
      default: y(() => [
        R(Qf, D({
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
}), _l = /* @__PURE__ */ x({
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
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Cl = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Xf(), { forwardRef: o } = M();
    return (a, r) => (h(), C(_l, { "as-child": "" }, {
      default: y(() => [
        R(s(K), D(t, {
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
}), em = /* @__PURE__ */ x({
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
    return (n, o) => n.altText ? (h(), C(_l, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        R(Cl, {
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
}), Vr = /* @__PURE__ */ x({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(e, { emit: t }) {
    const n = t, o = ro();
    return (a, r) => (h(), C(s(wn), {
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
}), tm = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(e) {
    const t = e, { hotkey: n, label: o } = ce(t), { forwardRef: a, currentElement: r } = M(), { createCollection: l } = Kt(), i = l(r), u = ro(), d = S(() => u.toastCount.value > 0), c = T(), p = T(), m = S(() => n.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    ya(n.value, () => {
      r.value.focus();
    }), re(() => {
      u.onViewportChange(r.value);
    }), be((v) => {
      const g = r.value;
      if (d.value && g) {
        const b = () => {
          if (!u.isClosePausedRef.value) {
            const k = new CustomEvent(Xo);
            g.dispatchEvent(k), u.isClosePausedRef.value = !0;
          }
        }, w = () => {
          if (u.isClosePausedRef.value) {
            const k = new CustomEvent(Zo);
            g.dispatchEvent(k), u.isClosePausedRef.value = !1;
          }
        }, B = (k) => {
          !g.contains(k.relatedTarget) && w();
        }, $ = () => {
          g.contains(Be()) || w();
        }, O = (k) => {
          var P, E, I;
          const V = k.altKey || k.ctrlKey || k.metaKey;
          if (k.key === "Tab" && !V) {
            const A = Be(), L = k.shiftKey;
            if (k.target === g && L) {
              (P = c.value) == null || P.focus();
              return;
            }
            const F = f({ tabbingDirection: L ? "backwards" : "forwards" }), G = F.findIndex((q) => q === A);
            In(F.slice(G + 1)) ? k.preventDefault() : L ? (E = c.value) == null || E.focus() : (I = p.value) == null || I.focus();
          }
        };
        g.addEventListener("focusin", b), g.addEventListener("focusout", B), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", $), g.addEventListener("keydown", O), window.addEventListener("blur", b), window.addEventListener("focus", w), v(() => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", B), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", $), g.removeEventListener("keydown", O), window.removeEventListener("blur", b), window.removeEventListener("focus", w);
        });
      }
    });
    function f({ tabbingDirection: v }) {
      const g = i.value.map((b) => {
        const w = [b, ...ka(b)];
        return v === "forwards" ? w : w.reverse();
      });
      return (v === "forwards" ? g.reverse() : g).flat();
    }
    return (v, g) => (h(), C(s(Sd), {
      role: "region",
      "aria-label": typeof s(o) == "string" ? s(o).replace("{hotkey}", m.value) : s(o)(m.value),
      tabindex: "-1",
      style: Bt({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (h(), C(Vr, {
          key: 0,
          ref: (b) => {
            c.value = s(Ve)(b);
          },
          onFocusFromOutsideViewport: g[0] || (g[0] = () => {
            const b = f({
              tabbingDirection: "forwards"
            });
            s(In)(b);
          })
        }, null, 512)) : de("", !0),
        R(s(K), D({
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
        d.value ? (h(), C(Vr, {
          key: 1,
          ref: (b) => {
            p.value = s(Ve)(b);
          },
          onFocusFromOutsideViewport: g[1] || (g[1] = () => {
            const b = f({
              tabbingDirection: "backwards"
            });
            s(In)(b);
          })
        }, null, 512)) : de("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), nm = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (n, o) => (h(), C(s(K), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bl = "tooltip.open", [Ka, am] = ne("TooltipProvider"), rm = /* @__PURE__ */ x({
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
    const t = e, { delayDuration: n, skipDelayDuration: o, disableHoverableContent: a, disableClosingTrigger: r, ignoreNonKeyboardFocus: l, disabled: i } = ce(t);
    M();
    const u = T(!0), d = T(!1), { start: c, stop: p } = ha(() => {
      u.value = !0;
    }, o, { immediate: !1 });
    return am({
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
    }), (m, f) => _(m.$slots, "default");
  }
}), [so, sm] = ne("TooltipRoot"), lm = /* @__PURE__ */ x({
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
    M();
    const a = Ka(), r = S(() => n.disableHoverableContent ?? a.disableHoverableContent.value), l = S(() => n.disableClosingTrigger ?? a.disableClosingTrigger.value), i = S(() => n.disabled ?? a.disabled.value), u = S(() => n.delayDuration ?? a.delayDuration.value), d = S(() => n.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = ve(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    X(c, ($) => {
      a.onClose && ($ ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Bl))) : a.onClose());
    });
    const p = T(!1), m = T(), f = S(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: g } = ha(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function b() {
      g(), p.value = !1, c.value = !0;
    }
    function w() {
      g(), c.value = !1;
    }
    function B() {
      v();
    }
    return sm({
      contentId: "",
      open: c,
      stateAttribute: f,
      trigger: m,
      onTriggerChange($) {
        m.value = $;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? B() : b();
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
    }), ($, O) => (h(), C(s(Wt), null, {
      default: y(() => [
        _($.$slots, "default", { open: s(c) })
      ]),
      _: 3
    }));
  }
}), im = /* @__PURE__ */ x({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = so(), o = Ka();
    n.contentId || (n.contentId = _e(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = M(), l = T(!1), i = T(!1), u = S(() => n.disabled.value ? {} : {
      click: g,
      focus: f,
      pointermove: p,
      pointerleave: m,
      pointerdown: c,
      blur: v
    });
    re(() => {
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
    function m() {
      n.onTriggerLeave(), i.value = !1;
    }
    function f(b) {
      var w, B;
      l.value || n.ignoreNonKeyboardFocus.value && !((B = (w = b.target).matches) != null && B.call(w, ":focus-visible")) || n.onOpen();
    }
    function v() {
      n.onClose();
    }
    function g() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (b, w) => (h(), C(s(bn), { "as-child": "" }, {
      default: y(() => [
        R(s(K), D({
          ref: s(a),
          "aria-describedby": s(n).open.value ? s(n).contentId : void 0,
          "data-state": s(n).stateAttribute.value,
          as: b.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, ti(u.value)), {
          default: y(() => [
            _(b.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), $l = /* @__PURE__ */ x({
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
    const n = e, o = t, a = so(), { forwardRef: r } = M(), l = cs(), i = S(() => {
      var c;
      return (c = l.default) == null ? void 0 : c.call(l);
    }), u = S(() => {
      var c;
      if (n.ariaLabel)
        return n.ariaLabel;
      let p = "";
      function m(f) {
        typeof f.children == "string" && f.type !== la ? p += f.children : Array.isArray(f.children) && f.children.forEach((v) => m(v));
      }
      return (c = i.value) == null || c.forEach((f) => m(f)), p;
    }), d = S(() => {
      const { ariaLabel: c, ...p } = n;
      return p;
    });
    return re(() => {
      Lt(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(a.trigger.value) && a.onClose();
      }), Lt(window, Bl, a.onClose);
    }), (c, p) => (h(), C(s(Ut), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (m) => o("escapeKeyDown", m)),
      onPointerDownOutside: p[1] || (p[1] = (m) => {
        var f;
        s(a).disableClosingTrigger.value && (f = s(a).trigger.value) != null && f.contains(m.target) && m.preventDefault(), o("pointerDownOutside", m);
      }),
      onFocusOutside: p[2] || (p[2] = Ce(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (m) => s(a).onClose())
    }, {
      default: y(() => [
        R(s(zt), D({
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
            R(s(wn), {
              id: s(a).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                Se(Ae(u.value), 1)
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
}), um = /* @__PURE__ */ x({
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
    const t = $e(e), { forwardRef: n, currentElement: o } = M(), { trigger: a, onClose: r } = so(), l = Ka(), { isPointerInTransit: i, onPointerExit: u } = Hu(a, o);
    return l.isPointerInTransitRef = i, u(() => {
      r();
    }), (d, c) => (h(), C($l, D({ ref: s(n) }, s(t)), {
      default: y(() => [
        _(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ x({
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
    const n = e, o = t, a = so(), r = Z(n, o), { forwardRef: l } = M();
    return (i, u) => (h(), C(s(ze), {
      present: i.forceMount || s(a).open.value
    }, {
      default: y(() => [
        (h(), C(Fe(s(a).disableHoverableContent.value ? $l : um), D({ ref: s(l) }, s(r)), {
          default: y(() => [
            _(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), cm = /* @__PURE__ */ x({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Ht), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, pm = {}, fm = { class: "h-full bg-background dark:text-white" };
function mm(e, t) {
  return h(), N("div", fm, [
    _(e.$slots, "default")
  ]);
}
const Uh = /* @__PURE__ */ Xt(pm, [["render", mm]]), vm = {}, gm = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function hm(e, t) {
  return h(), N("header", gm, [
    _(e.$slots, "default")
  ]);
}
const Wh = /* @__PURE__ */ Xt(vm, [["render", hm]]), ym = {}, bm = { class: "px-4 py-10 sm:px-6 lg:px-8 lg:pl-72" };
function wm(e, t) {
  return h(), N("main", bm, [
    _(e.$slots, "default")
  ]);
}
const qh = /* @__PURE__ */ Xt(ym, [["render", wm]]), xm = {};
function _m(e, t) {
  return _(e.$slots, "default");
}
const Gh = /* @__PURE__ */ Xt(xm, [["render", _m]]), Cm = {}, Bm = { class: "hidden px-6 py-10 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, $m = { class: "gap-y-5 overflow-y-auto" };
function Sm(e, t) {
  return h(), N("div", Bm, [
    ae("div", $m, [
      _(e.$slots, "default")
    ])
  ]);
}
const Yh = /* @__PURE__ */ Xt(Cm, [["render", Sm]]), km = {};
function Om(e, t) {
  return _(e.$slots, "default");
}
const Xh = /* @__PURE__ */ Xt(km, [["render", Om]]);
function Em(e, t) {
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
function Am(e, t) {
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
function Lr(e, t) {
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
function Tm(e, t) {
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
const Dm = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, Zh = /* @__PURE__ */ x({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(e) {
    return (t, n) => (h(), N("button", Dm, [
      n[0] || (n[0] = ae("span", { class: "sr-only" }, "Open sidebar", -1)),
      R(s(Em), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), Pm = 3, Im = 1e6, nt = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let Lo = 0;
function Mm() {
  return Lo = (Lo + 1) % Number.MAX_VALUE, Lo.toString();
}
const zo = /* @__PURE__ */ new Map();
function zr(e) {
  if (zo.has(e)) return;
  const t = setTimeout(() => {
    zo.delete(e), on({
      type: nt.REMOVE_TOAST,
      toastId: e
    });
  }, Im);
  zo.set(e, t);
}
const Ne = T({
  toasts: []
});
function on(e) {
  switch (e.type) {
    case nt.ADD_TOAST:
      Ne.value.toasts = [e.toast, ...Ne.value.toasts].slice(0, Pm);
      break;
    case nt.UPDATE_TOAST:
      Ne.value.toasts = Ne.value.toasts.map(
        (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
      );
      break;
    case nt.DISMISS_TOAST: {
      const { toastId: t } = e;
      t ? zr(t) : Ne.value.toasts.forEach((n) => {
        zr(n.id);
      }), Ne.value.toasts = Ne.value.toasts.map(
        (n) => n.id === t || t === void 0 ? {
          ...n,
          open: !1
        } : n
      );
      break;
    }
    case nt.REMOVE_TOAST:
      e.toastId === void 0 ? Ne.value.toasts = [] : Ne.value.toasts = Ne.value.toasts.filter((t) => t.id !== e.toastId);
      break;
  }
}
function Sl() {
  return {
    toasts: S(() => Ne.value.toasts),
    toast: Rm,
    dismiss: (e) => on({ type: nt.DISMISS_TOAST, toastId: e })
  };
}
function Rm(e) {
  const t = e.id ?? Mm(), n = (a) => on({
    type: nt.UPDATE_TOAST,
    toast: { ...a, id: t }
  }), o = () => on({ type: nt.DISMISS_TOAST, toastId: t });
  return on({
    type: nt.ADD_TOAST,
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
const Fm = { class: "flex items-start space-x-3" }, Vm = ["src", "alt"], Lm = { class: "grid gap-1" }, zm = { class: "font-bold" }, Nm = /* @__PURE__ */ x({
  __name: "Toaster",
  emits: ["click"],
  setup(e) {
    const { toasts: t } = Sl();
    return (n, o) => (h(), C(s(Tv), null, {
      default: y(() => [
        (h(!0), N(ye, null, pt(s(t), (a) => (h(), C(s(wv), D({
          key: a.id,
          ref_for: !0
        }, a, {
          class: "mt-1.5",
          onClick: (r) => n.$emit("click", a)
        }), {
          default: y(() => [
            ae("div", Fm, [
              a.icon ? (h(), N(ye, { key: 0 }, [
                typeof a.icon == "string" ? (h(), N("img", {
                  key: 0,
                  src: a.icon,
                  class: te(["size-16 rounded-sm object-cover", a.iconClasses]),
                  alt: a.title
                }, null, 10, Vm)) : (h(), C(Fe(a.icon), {
                  key: 1,
                  class: te(["size-6", a.iconClasses])
                }, null, 8, ["class"]))
              ], 64)) : de("", !0),
              ae("div", Lm, [
                a.title ? (h(), C(s(Av), { key: 0 }, {
                  default: y(() => [
                    Se(Ae(a.title), 1)
                  ]),
                  _: 2
                }, 1024)) : de("", !0),
                a.description ? (h(), N(ye, { key: 1 }, [
                  ui(a.description) ? (h(), C(s(Kr), { key: 0 }, {
                    default: y(() => [
                      (h(), C(Fe(a.description)))
                    ]),
                    _: 2
                  }, 1024)) : typeof a.description == "object" ? (h(!0), N(ye, { key: 1 }, pt(a.description, (r, l) => (h(), N("p", {
                    key: l,
                    class: "text-sm opacity-90"
                  }, [
                    a.objectFormat === "key" ? (h(), N(ye, { key: 0 }, [
                      Se(Ae(l), 1)
                    ], 64)) : a.objectFormat === "both" ? (h(), N(ye, { key: 1 }, [
                      ae("span", zm, Ae(l), 1),
                      Se(": " + Ae(r), 1)
                    ], 64)) : (h(), N(ye, { key: 2 }, [
                      Se(Ae(r), 1)
                    ], 64))
                  ]))), 128)) : (h(), C(s(Kr), { key: 2 }, {
                    default: y(() => [
                      Se(Ae(a.description), 1)
                    ]),
                    _: 2
                  }, 1024))
                ], 64)) : de("", !0),
                R(s(Ev))
              ])
            ]),
            (h(), C(Fe(a.action)))
          ]),
          _: 2
        }, 1040, ["onClick"]))), 128)),
        R(s(xv))
      ]),
      _: 1
    }));
  }
});
function kl(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = kl(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ol() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = kl(e)) && (o && (o += " "), o += t);
  return o;
}
const Ha = "-", jm = (e) => {
  const t = Hm(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const i = l.split(Ha);
      return i[0] === "" && i.length !== 1 && i.shift(), El(i, t) || Km(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const u = n[l] || [];
      return i && o[l] ? [...u, ...o[l]] : u;
    }
  };
}, El = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? El(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(Ha);
  return (l = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : l.classGroupId;
}, Nr = /^\[(.+)\]$/, Km = (e) => {
  if (Nr.test(e)) {
    const t = Nr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Hm = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Wm(Object.entries(e.classGroups), n).forEach(([r, l]) => {
    Qo(l, o, r, t);
  }), o;
}, Qo = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : jr(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Um(a)) {
        Qo(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      Qo(l, jr(t, r), n, o);
    });
  });
}, jr = (e, t) => {
  let n = e;
  return t.split(Ha).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Um = (e) => e.isThemeGetter, Wm = (e, t) => t ? e.map(([n, o]) => {
  const a = o.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, i]) => [t + l, i])) : r);
  return [n, a];
}) : e, qm = (e) => {
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
}, Al = "!", Gm = (e) => {
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
    const m = u.length === 0 ? i : i.substring(c), f = m.startsWith(Al), v = f ? m.substring(1) : m, g = p && p > c ? p - c : void 0;
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
}, Ym = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Xm = (e) => ({
  cache: qm(e.cacheSize),
  parseClassName: Gm(e),
  ...jm(e)
}), Zm = /\s+/, Qm = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, r = [], l = e.trim().split(Zm);
  let i = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      modifiers: c,
      hasImportantModifier: p,
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
    const b = Ym(c).join(":"), w = p ? b + Al : b, B = w + g;
    if (r.includes(B))
      continue;
    r.push(B);
    const $ = a(g, v);
    for (let O = 0; O < $.length; ++O) {
      const k = $[O];
      r.push(w + k);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Jm() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Tl(t)) && (o && (o += " "), o += n);
  return o;
}
const Tl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Tl(e[o])) && (n && (n += " "), n += t);
  return n;
};
function ev(e, ...t) {
  let n, o, a, r = l;
  function l(u) {
    const d = t.reduce((c, p) => p(c), e());
    return n = Xm(d), o = n.cache.get, a = n.cache.set, r = i, i(u);
  }
  function i(u) {
    const d = o(u);
    if (d)
      return d;
    const c = Qm(u, n);
    return a(u, c), c;
  }
  return function() {
    return r(Jm.apply(null, arguments));
  };
}
const me = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Dl = /^\[(?:([a-z-]+):)?(.+)\]$/i, tv = /^\d+\/\d+$/, nv = /* @__PURE__ */ new Set(["px", "full", "screen"]), ov = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, av = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, sv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, tt = (e) => Ft(e) || nv.has(e) || tv.test(e), it = (e) => Zt(e, "length", vv), Ft = (e) => !!e && !Number.isNaN(Number(e)), No = (e) => Zt(e, "number", Ft), en = (e) => !!e && Number.isInteger(Number(e)), iv = (e) => e.endsWith("%") && Ft(e.slice(0, -1)), ee = (e) => Dl.test(e), ut = (e) => ov.test(e), uv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), dv = (e) => Zt(e, uv, Pl), cv = (e) => Zt(e, "position", Pl), pv = /* @__PURE__ */ new Set(["image", "url"]), fv = (e) => Zt(e, pv, hv), mv = (e) => Zt(e, "", gv), tn = () => !0, Zt = (e, t, n) => {
  const o = Dl.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, vv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  av.test(e) && !rv.test(e)
), Pl = () => !1, gv = (e) => sv.test(e), hv = (e) => lv.test(e), yv = () => {
  const e = me("colors"), t = me("spacing"), n = me("blur"), o = me("brightness"), a = me("borderColor"), r = me("borderRadius"), l = me("borderSpacing"), i = me("borderWidth"), u = me("contrast"), d = me("grayscale"), c = me("hueRotate"), p = me("invert"), m = me("gap"), f = me("gradientColorStops"), v = me("gradientColorStopPositions"), g = me("inset"), b = me("margin"), w = me("opacity"), B = me("padding"), $ = me("saturate"), O = me("scale"), k = me("sepia"), P = me("skew"), E = me("space"), I = me("translate"), V = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", ee, t], F = () => [ee, t], G = () => ["", tt, it], q = () => ["auto", Ft, ee], Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], se = () => ["solid", "dashed", "dotted", "double", "none"], pe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", ee], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], J = () => [Ft, ee];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [tn],
      spacing: [tt, it],
      blur: ["none", "", ut, ee],
      brightness: J(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ut, ee],
      borderSpacing: F(),
      borderWidth: G(),
      contrast: J(),
      grayscale: j(),
      hueRotate: J(),
      invert: j(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [iv, it],
      inset: L(),
      margin: L(),
      opacity: J(),
      padding: F(),
      saturate: J(),
      scale: J(),
      sepia: j(),
      skew: J(),
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
        aspect: ["auto", "square", "video", ee]
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
        "break-after": Y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Y()
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
        object: [...Q(), ee]
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
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        z: ["auto", en, ee]
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
        flex: ["1", "auto", "initial", "none", ee]
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
        order: ["first", "last", "none", en, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [tn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", en, ee]
        }, ee]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [tn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [en, ee]
        }, ee]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
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
        "auto-cols": ["auto", "min", "max", "fr", ee]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ee]
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
        "space-x": [E]
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
        "space-y": [E]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ee, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ee, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ee, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ut]
        }, ut]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ee, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ee, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ee, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", No]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ft, No]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", tt, ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ee]
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
        "underline-offset": ["auto", tt, ee]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee]
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
        content: ["none", ee]
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
        bg: [...Q(), cv]
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
        bg: ["auto", "cover", "contain", dv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, fv]
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
        "divide-opacity": [w]
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
        "outline-offset": [tt, ee]
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
        ring: G()
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
        shadow: ["", "inner", "none", ut, mv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [tn]
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
        "mix-blend": [...pe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": pe()
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
        "drop-shadow": ["", "none", ut, ee]
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
        sepia: [k]
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
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [k]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ee]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: J()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: J()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ee]
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
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [en, ee]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ee]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee]
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
        "will-change": ["auto", "scroll", "contents", "transform", ee]
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
        stroke: [tt, it, No]
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
}, bv = /* @__PURE__ */ ev(yv);
function z(...e) {
  return bv(Ol(e));
}
const wv = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Jf), D(s(r), {
      class: s(z)(s(Dv)({ variant: l.variant }), n.class),
      "onUpdate:open": l.onOpenChange
    }), {
      default: y(() => [
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "onUpdate:open"]));
  }
}), xv = /* @__PURE__ */ x({
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
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(tm), D(n.value, {
      class: s(z)(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), Qh = /* @__PURE__ */ x({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(em), D(n.value, {
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
function _v(e, t) {
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
function Cv(e, t) {
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
function Bv(e, t) {
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
function Il(e, t) {
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
function Ml(e, t) {
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
function $v(e, t) {
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
function Sv(e, t) {
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
function lo(e, t) {
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
function kv(e, t) {
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
function Ov(e, t) {
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
const Ev = /* @__PURE__ */ x({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Cl), D(n.value, {
      class: s(z)(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        t.class
      )
    }), {
      default: y(() => [
        R(s(lo), { class: "h-4 w-4" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Av = /* @__PURE__ */ x({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(nm), D(n.value, {
      class: s(z)("text-sm font-semibold [&+div]:text-xs", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kr = /* @__PURE__ */ x({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(om), D({
      class: s(z)("text-sm opacity-90", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tv = /* @__PURE__ */ x({
  __name: "ToastProvider",
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(Kf), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ur = Ol, _n = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return Ur(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: r } = t, l = Object.keys(a).map((d) => {
    const c = n == null ? void 0 : n[d], p = r == null ? void 0 : r[d];
    if (c === null) return null;
    const m = Hr(c) || Hr(p);
    return a[d][m];
  }), i = n && Object.entries(n).reduce((d, c) => {
    let [p, m] = c;
    return m === void 0 || (d[p] = m), d;
  }, {}), u = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, c) => {
    let { class: p, className: m, ...f } = c;
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
      p,
      m
    ] : d;
  }, []);
  return Ur(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Dv = _n(
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
), { toast: Tn } = Sl();
function Pv() {
  return {
    info: (e) => {
      Tn({
        icon: Tm,
        iconClasses: "text-blue-400",
        title: "FYI",
        description: e
      });
    },
    success: (e) => {
      Tn({
        icon: Am,
        iconClasses: "text-green-400",
        title: "Success",
        description: e
      });
    },
    warning: (e) => {
      Tn({
        icon: Lr,
        iconClasses: "text-orange-400",
        title: "Warning",
        description: e
      });
    },
    error: (e, t = "value") => {
      Tn({
        icon: Lr,
        iconClasses: "text-red-400",
        title: "Oh snap! Some errors were encountered.",
        description: e,
        objectFormat: t
      });
    }
  };
}
const Jh = /* @__PURE__ */ x({
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
    } = Pv();
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
    ), (l, i) => (h(), C(s(Nm)));
  }
}), Iv = { class: "flex items-center justify-between space-y-2" }, Mv = { class: "flex items-center space-x-2" }, e0 = /* @__PURE__ */ x({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", Iv, [
      (h(), C(Fe(n.as), {
        class: te(s(z)("text-3xl font-bold tracking-tight", t.class))
      }, {
        default: y(() => [
          _(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      ae("div", Mv, [
        _(n.$slots, "actions")
      ])
    ]));
  }
}), Rv = /* @__PURE__ */ x({
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
    const a = Z(e, t);
    return (r, l) => (h(), C(s(vd), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t0 = /* @__PURE__ */ x({
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
    const a = Z(e, t);
    return (r, l) => (h(), C(Rv, U(W(s(a))), {
      default: y(() => [
        (h(!0), N(ye, null, pt(r.content, (i, u) => (h(), C(s(Vv), {
          key: u,
          value: "item-" + u
        }, {
          default: y(() => [
            R(s(Lv), null, {
              default: y(() => [
                _(r.$slots, u + ".title", { item: i }, () => [
                  Se(Ae(i.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            R(s(Fv), null, {
              default: y(() => [
                _(r.$slots, u + ".content", { item: i }, () => [
                  Se(Ae(i.content), 1)
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
}), Fv = /* @__PURE__ */ x({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(yd), D(n.value, { class: "accordion-content overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: y(() => [
        ae("div", {
          class: te(s(z)("pb-4 pt-0", t.class))
        }, [
          _(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Vv = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(hd), D(s(o), {
      class: s(z)("border-b", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lv = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(bd), { class: "flex" }, {
      default: y(() => [
        R(s(wd), D(n.value, {
          class: s(z)(
            "accordion-trigger flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: y(() => [
            _(o.$slots, "default"),
            _(o.$slots, "icon", {}, () => [
              R(s(Ml), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), n0 = /* @__PURE__ */ x({
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
    const a = Z(e, t);
    return (r, l) => (h(), C(s(jv), null, {
      default: y(() => [
        R(s(zv), U(W(s(a))), {
          default: y(() => [
            R(s(Kv), {
              class: te(r.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: y(() => [
                _(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            R(s(Nv), U(W(r.$attrs)), {
              default: y(() => [
                _(r.$slots, "tooltip", {}, () => [
                  Se(Ae(r.tooltip), 1)
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
}), zv = /* @__PURE__ */ x({
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
    const a = Z(e, t);
    return (r, l) => (h(), C(s(lm), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nv = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(cm), null, {
      default: y(() => [
        R(s(dm), D({ ...s(r), ...l.$attrs }, {
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
}), jv = /* @__PURE__ */ x({
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
    return (n, o) => (h(), C(s(rm), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kv = /* @__PURE__ */ x({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(im), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o0 = /* @__PURE__ */ x({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Wd), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a0 = /* @__PURE__ */ x({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(qd), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), r0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Gd), null, {
      default: y(() => [
        R(s(Qd), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(Zd), D(s(r), {
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
}), s0 = /* @__PURE__ */ x({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), l0 = /* @__PURE__ */ x({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(ec), D(n.value, {
      class: s(z)("text-lg font-semibold", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i0 = /* @__PURE__ */ x({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(tc), D(n.value, {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u0 = /* @__PURE__ */ x({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Rl = /* @__PURE__ */ x({
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
      class: te(s(z)(s(Ua)({ variant: n.variant, size: n.size }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ua = _n(
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
), d0 = /* @__PURE__ */ x({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(nc), D(n.value, {
      class: s(z)(s(Ua)(), t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c0 = /* @__PURE__ */ x({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Jd), D(n.value, {
      class: s(z)(s(Ua)({ variant: "outline" }), "mt-2 sm:mt-0", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p0 = /* @__PURE__ */ x({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(ac), {
      class: te(s(z)(s(Hv)({ size: n.size, shape: n.shape }), t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), f0 = /* @__PURE__ */ x({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(sc), D(t, { class: "h-full w-full object-cover" }), null, 16));
  }
}), m0 = /* @__PURE__ */ x({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(lc), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hv = _n(
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
), v0 = /* @__PURE__ */ x({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)(s(Uv)({ variant: n.variant }), t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Uv = _n(
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
), g0 = /* @__PURE__ */ x({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("rounded-xl border bg-card text-card-foreground shadow", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), h0 = /* @__PURE__ */ x({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), y0 = /* @__PURE__ */ x({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("p", {
      class: te(s(z)("text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), b0 = /* @__PURE__ */ x({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex items-center p-6 pt-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), w0 = /* @__PURE__ */ x({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex flex-col gap-y-1.5 p-6", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), x0 = /* @__PURE__ */ x({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("h3", {
      class: te(s(z)("font-semibold leading-none tracking-tight", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
});
var Wr;
const Wv = typeof window < "u", qv = (e) => typeof e < "u", Gv = (e) => typeof e == "function";
Wv && ((Wr = window == null ? void 0 : window.navigator) != null && Wr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Yv(e) {
  return e;
}
function Xv(e) {
  const t = Symbol("InjectionState");
  return [(...a) => {
    const r = e(...a);
    return mn(t, r), r;
  }, () => fn(t)];
}
function Zv(e) {
  return JSON.parse(JSON.stringify(e));
}
const qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gr = "__vueuse_ssr_handlers__";
qr[Gr] = qr[Gr] || {};
var Yr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yr || (Yr = {}));
var Qv = Object.defineProperty, Xr = Object.getOwnPropertySymbols, Jv = Object.prototype.hasOwnProperty, eg = Object.prototype.propertyIsEnumerable, Zr = (e, t, n) => t in e ? Qv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, tg = (e, t) => {
  for (var n in t || (t = {}))
    Jv.call(t, n) && Zr(e, n, t[n]);
  if (Xr)
    for (var n of Xr(t))
      eg.call(t, n) && Zr(e, n, t[n]);
  return e;
};
const ng = {
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
tg({
  linear: Yv
}, ng);
function Fl(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p
  } = o, m = Re(), f = n || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (r = m == null ? void 0 : m.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let v = d;
  v = d || v || `update:${t.toString()}`;
  const g = (w) => i ? Gv(i) ? i(w) : Zv(w) : w, b = () => qv(e[t]) ? g(e[t]) : p;
  if (u) {
    const w = b(), B = T(w);
    return X(() => e[t], ($) => B.value = g($)), X(B, ($) => {
      ($ !== e[t] || c) && f(v, $);
    }, { deep: c }), B;
  } else
    return S({
      get() {
        return b();
      },
      set(w) {
        f(v, w);
      }
    });
}
function og(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qr(e) {
  return og(e) || Array.isArray(e);
}
function ag() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Wa(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), r = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== r ? !1 : n.every((l) => {
    const i = e[l], u = t[l];
    return typeof i == "function" ? `${i}` == `${u}` : !Qr(i) || !Qr(u) ? i === u : Wa(i, u);
  });
}
function Jr(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function rg(e, t) {
  if (e.length !== t.length) return !1;
  const n = Jr(e), o = Jr(t);
  return n.every((a, r) => {
    const l = o[r];
    return Wa(a, l);
  });
}
function qa(e) {
  return typeof e == "number";
}
function Jo(e) {
  return typeof e == "string";
}
function io(e) {
  return typeof e == "boolean";
}
function es(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ge(e) {
  return Math.abs(e);
}
function Ga(e) {
  return Math.sign(e);
}
function an(e, t) {
  return ge(e - t);
}
function sg(e, t) {
  if (e === 0 || t === 0 || ge(e) <= ge(t)) return 0;
  const n = an(ge(e), ge(t));
  return ge(n / e);
}
function lg(e) {
  return Math.round(e * 100) / 100;
}
function dn(e) {
  return cn(e).map(Number);
}
function He(e) {
  return e[Cn(e)];
}
function Cn(e) {
  return Math.max(0, e.length - 1);
}
function Ya(e, t) {
  return t === Cn(e);
}
function ts(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function cn(e) {
  return Object.keys(e);
}
function Vl(e, t) {
  return [e, t].reduce((n, o) => (cn(o).forEach((a) => {
    const r = n[a], l = o[a], i = es(r) && es(l);
    n[a] = i ? Vl(r, l) : l;
  }), n), {});
}
function ea(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function ig(e, t) {
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
    return Jo(e) ? n[e](u) : e(t, u, d);
  }
  return {
    measure: l
  };
}
function pn() {
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
function ug(e, t, n, o) {
  const a = pn(), r = 1e3 / 60;
  let l = null, i = 0, u = 0;
  function d() {
    a.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function c() {
    f(), a.clear();
  }
  function p(b) {
    if (!u) return;
    l || (l = b, n(), n());
    const w = b - l;
    for (l = b, i += w; i >= r; )
      n(), i -= r;
    const B = i / r;
    o(B), u && (u = t.requestAnimationFrame(p));
  }
  function m() {
    u || (u = t.requestAnimationFrame(p));
  }
  function f() {
    t.cancelAnimationFrame(u), l = null, i = 0, u = 0;
  }
  function v() {
    l = null, i = 0;
  }
  return {
    init: d,
    destroy: c,
    start: m,
    stop: f,
    update: n,
    render: o
  };
}
function dg(e, t) {
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
function Ct(e = 0, t = 0) {
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
function Ll(e, t, n) {
  const {
    constrain: o
  } = Ct(0, e), a = e + 1;
  let r = l(t);
  function l(m) {
    return n ? ge((a + m) % a) : o(m);
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
    return Ll(e, i(), n);
  }
  const p = {
    get: i,
    set: u,
    add: d,
    clone: c
  };
  return p;
}
function cg(e, t, n, o, a, r, l, i, u, d, c, p, m, f, v, g, b, w, B) {
  const {
    cross: $,
    direction: O
  } = e, k = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, E = pn(), I = pn(), V = Ct(50, 225).constrain(f.measure(20)), A = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, F = v ? 43 : 25;
  let G = !1, q = 0, Q = 0, se = !1, pe = !1, ie = !1, j = !1;
  function Y(H) {
    if (!B) return;
    function le(Ee) {
      (io(B) || B(H, Ee)) && ht(Ee);
    }
    const xe = t;
    E.add(xe, "dragstart", (Ee) => Ee.preventDefault(), P).add(xe, "touchmove", () => {
    }, P).add(xe, "touchend", () => {
    }).add(xe, "touchstart", le).add(xe, "mousedown", le).add(xe, "touchcancel", fe).add(xe, "contextmenu", fe).add(xe, "click", Oe, !0);
  }
  function J() {
    E.clear(), I.clear();
  }
  function Te() {
    const H = j ? n : t;
    I.add(H, "touchmove", he, P).add(H, "touchend", fe).add(H, "mousemove", he, P).add(H, "mouseup", fe);
  }
  function Pe(H) {
    const le = H.nodeName || "";
    return k.includes(le);
  }
  function De() {
    return (v ? L : A)[j ? "mouse" : "touch"];
  }
  function qe(H, le) {
    const xe = p.add(Ga(H) * -1), Ee = c.byDistance(H, !v).distance;
    return v || ge(H) < V ? Ee : b && le ? Ee * 0.5 : c.byIndex(xe.get(), 0).distance;
  }
  function ht(H) {
    const le = ea(H, o);
    j = le, ie = v && le && !H.buttons && G, G = an(a.get(), l.get()) >= 2, !(le && H.button !== 0) && (Pe(H.target) || (se = !0, r.pointerDown(H), d.useFriction(0).useDuration(0), a.set(l), Te(), q = r.readPoint(H), Q = r.readPoint(H, $), m.emit("pointerDown")));
  }
  function he(H) {
    if (!ea(H, o) && H.touches.length >= 2) return fe(H);
    const xe = r.readPoint(H), Ee = r.readPoint(H, $), Ge = an(xe, q), et = an(Ee, Q);
    if (!pe && !j && (!H.cancelable || (pe = Ge > et, !pe)))
      return fe(H);
    const yt = r.pointerMove(H);
    Ge > g && (ie = !0), d.useFriction(0.3).useDuration(0.75), i.start(), a.add(O(yt)), H.preventDefault();
  }
  function fe(H) {
    const xe = c.byDistance(0, !1).index !== p.get(), Ee = r.pointerUp(H) * De(), Ge = qe(O(Ee), xe), et = sg(Ee, Ge), yt = F - 10 * et, lt = w + et / 50;
    pe = !1, se = !1, I.clear(), d.useDuration(yt).useFriction(lt), u.distance(Ge, !v), j = !1, m.emit("pointerUp");
  }
  function Oe(H) {
    ie && (H.stopPropagation(), H.preventDefault(), ie = !1);
  }
  function we() {
    return se;
  }
  return {
    init: Y,
    destroy: J,
    pointerDown: we
  };
}
function pg(e, t) {
  let o, a;
  function r(p) {
    return p.timeStamp;
  }
  function l(p, m) {
    const v = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (ea(p, t) ? p : p.touches[0])[v];
  }
  function i(p) {
    return o = p, a = p, l(p);
  }
  function u(p) {
    const m = l(p) - l(a), f = r(p) - r(o) > 170;
    return a = p, f && (o = p), m;
  }
  function d(p) {
    if (!o || !a) return 0;
    const m = l(a) - l(o), f = r(p) - r(o), v = r(p) - r(a) > 170, g = m / f;
    return f && !v && ge(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: i,
    pointerMove: u,
    pointerUp: d,
    readPoint: l
  };
}
function fg() {
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
function mg(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function vg(e, t, n, o, a, r, l) {
  const i = [e].concat(o);
  let u, d, c = [], p = !1;
  function m(b) {
    return a.measureSize(l.measure(b));
  }
  function f(b) {
    if (!r) return;
    d = m(e), c = o.map(m);
    function w(B) {
      for (const $ of B) {
        if (p) return;
        const O = $.target === e, k = o.indexOf($.target), P = O ? d : c[k], E = m(O ? e : o[k]);
        if (ge(E - P) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((B) => {
      (io(r) || r(b, B)) && w(B);
    }), n.requestAnimationFrame(() => {
      i.forEach((B) => u.observe(B));
    });
  }
  function v() {
    p = !0, u && u.disconnect();
  }
  return {
    init: f,
    destroy: v
  };
}
function gg(e, t, n, o, a, r) {
  let l = 0, i = 0, u = a, d = r, c = e.get(), p = 0;
  function m() {
    const P = o.get() - e.get(), E = !u;
    let I = 0;
    return E ? (l = 0, n.set(o), e.set(o), I = P) : (n.set(e), l += P / u, l *= d, c += l, e.add(l), I = c - p), i = Ga(I), p = c, k;
  }
  function f() {
    const P = o.get() - t.get();
    return ge(P) < 1e-3;
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
    return $(a);
  }
  function B() {
    return O(r);
  }
  function $(P) {
    return u = P, k;
  }
  function O(P) {
    return d = P, k;
  }
  const k = {
    direction: g,
    duration: v,
    velocity: b,
    seek: m,
    settled: f,
    useBaseFriction: B,
    useBaseDuration: w,
    useFriction: O,
    useDuration: $
  };
  return k;
}
function hg(e, t, n, o, a) {
  const r = a.measure(10), l = a.measure(50), i = Ct(0.1, 0.99);
  let u = !1;
  function d() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(f) {
    if (!d()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", g = ge(e[v] - t.get()), b = n.get() - t.get(), w = i.constrain(g / l);
    n.subtract(b * w), !f && ge(b) < r && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function p(f) {
    u = !f;
  }
  return {
    shouldConstrain: d,
    constrain: c,
    toggleActive: p
  };
}
function yg(e, t, n, o, a) {
  const r = Ct(-t + e, 0), l = p(), i = c(), u = m();
  function d(v, g) {
    return an(v, g) <= 1;
  }
  function c() {
    const v = l[0], g = He(l), b = l.lastIndexOf(v), w = l.indexOf(g) + 1;
    return Ct(b, w);
  }
  function p() {
    return n.map((v, g) => {
      const {
        min: b,
        max: w
      } = r, B = r.constrain(v), $ = !g, O = Ya(n, g);
      return $ ? w : O || d(b, B) ? b : d(w, B) ? w : B;
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
function bg(e, t, n) {
  const o = t[0], a = n ? o - e : He(t);
  return {
    limit: Ct(a, o)
  };
}
function wg(e, t, n, o) {
  const r = t.min + 0.1, l = t.max + 0.1, {
    reachedMin: i,
    reachedMax: u
  } = Ct(r, l);
  function d(m) {
    return m === 1 ? u(n.get()) : m === -1 ? i(n.get()) : !1;
  }
  function c(m) {
    if (!d(m)) return;
    const f = e * (m * -1);
    o.forEach((v) => v.add(f));
  }
  return {
    loop: c
  };
}
function xg(e) {
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
function _g(e, t, n, o, a) {
  const {
    startEdge: r,
    endEdge: l
  } = e, {
    groupSlides: i
  } = a, u = p().map(t.measure), d = m(), c = f();
  function p() {
    return i(o).map((g) => He(g)[l] - g[0][r]).map(ge);
  }
  function m() {
    return o.map((g) => n[r] - g[r]).map((g) => -ge(g));
  }
  function f() {
    return i(d).map((g) => g[0]).map((g, b) => g + u[b]);
  }
  return {
    snaps: d,
    snapsAligned: c
  };
}
function Cg(e, t, n, o, a, r) {
  const {
    groupSlides: l
  } = a, {
    min: i,
    max: u
  } = o, d = c();
  function c() {
    const m = l(r), f = !e || t === "keepSnaps";
    return n.length === 1 ? [r] : f ? m : m.slice(i, u).map((v, g, b) => {
      const w = !g, B = Ya(b, g);
      if (w) {
        const $ = He(b[0]) + 1;
        return ts($);
      }
      if (B) {
        const $ = Cn(r) - He(b)[0] + 1;
        return ts($, He(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function Bg(e, t, n, o, a) {
  const {
    reachedAny: r,
    removeOffset: l,
    constrain: i
  } = o;
  function u(v) {
    return v.concat().sort((g, b) => ge(g) - ge(b))[0];
  }
  function d(v) {
    const g = e ? l(v) : i(v), b = t.map((B, $) => ({
      diff: c(B - g, 0),
      index: $
    })).sort((B, $) => ge(B.diff) - ge($.diff)), {
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
    const w = b.filter((B) => Ga(B) === g);
    return w.length ? u(w) : He(b) - n;
  }
  function p(v, g) {
    const b = t[v] - a.get(), w = c(b, g);
    return {
      index: v,
      distance: w
    };
  }
  function m(v, g) {
    const b = a.get() + v, {
      index: w,
      distance: B
    } = d(b), $ = !e && r(b);
    if (!g || $) return {
      index: w,
      distance: v
    };
    const O = t[w] - B, k = v + c(O, 0);
    return {
      index: w,
      distance: k
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: c
  };
}
function $g(e, t, n, o, a, r, l) {
  function i(p) {
    const m = p.distance, f = p.index !== t.get();
    r.add(m), m && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), f && (n.set(t.get()), t.set(p.index), l.emit("select"));
  }
  function u(p, m) {
    const f = a.byDistance(p, m);
    i(f);
  }
  function d(p, m) {
    const f = t.clone().set(p), v = a.byIndex(f.get(), m);
    i(v);
  }
  return {
    distance: u,
    index: d
  };
}
function Sg(e, t, n, o, a, r, l, i) {
  const u = {
    passive: !0,
    capture: !0
  };
  let d = 0;
  function c(f) {
    if (!i) return;
    function v(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - d > 10) return;
      l.emit("slideFocusStart"), e.scrollLeft = 0;
      const B = n.findIndex(($) => $.includes(g));
      qa(B) && (a.useDuration(0), o.index(B, 0), l.emit("slideFocus"));
    }
    r.add(document, "keydown", p, !1), t.forEach((g, b) => {
      r.add(g, "focus", (w) => {
        (io(i) || i(f, w)) && v(b);
      }, u);
    });
  }
  function p(f) {
    f.code === "Tab" && (d = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: c
  };
}
function nn(e) {
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
    return qa(u) ? u : u.get();
  }
  return {
    get: n,
    set: o,
    add: a,
    subtract: r
  };
}
function zl(e, t) {
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
    const f = lg(e.direction(m));
    f !== a && (o.transform = n(f), a = f);
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
function kg(e, t, n, o, a, r, l, i, u) {
  const c = dn(a), p = dn(a).reverse(), m = w().concat(B());
  function f(E, I) {
    return E.reduce((V, A) => V - a[A], I);
  }
  function v(E, I) {
    return E.reduce((V, A) => f(V, I) > 0 ? V.concat([A]) : V, []);
  }
  function g(E) {
    return r.map((I, V) => ({
      start: I - o[V] + 0.5 + E,
      end: I + t - 0.5 + E
    }));
  }
  function b(E, I, V) {
    const A = g(I);
    return E.map((L) => {
      const F = V ? 0 : -n, G = V ? n : 0, q = V ? "end" : "start", Q = A[L][q];
      return {
        index: L,
        loopPoint: Q,
        slideLocation: nn(-1),
        translate: zl(e, u[L]),
        target: () => i.get() > Q ? F : G
      };
    });
  }
  function w() {
    const E = l[0], I = v(p, E);
    return b(I, n, !1);
  }
  function B() {
    const E = t - l[0] - 1, I = v(c, E);
    return b(I, -n, !0);
  }
  function $() {
    return m.every(({
      index: E
    }) => {
      const I = c.filter((V) => V !== E);
      return f(I, t) <= 0.1;
    });
  }
  function O() {
    m.forEach((E) => {
      const {
        target: I,
        translate: V,
        slideLocation: A
      } = E, L = I();
      L !== A.get() && (V.to(L), A.set(L));
    });
  }
  function k() {
    m.forEach((E) => E.translate.clear());
  }
  return {
    canLoop: $,
    clear: k,
    loop: O,
    loopPoints: m
  };
}
function Og(e, t, n) {
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
      a || (io(n) || n(u, c)) && d(c);
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
function Eg(e, t, n, o) {
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
    return cn(a).reduce((g, b) => {
      const w = parseInt(b), {
        isIntersecting: B
      } = a[w];
      return (v && B || !v && !B) && g.push(w), g;
    }, []);
  }
  function m(v = !0) {
    if (v && r) return r;
    if (!v && l) return l;
    const g = p(v);
    return v && (r = g), v || (l = g), g;
  }
  return {
    init: d,
    destroy: c,
    get: m
  };
}
function Ag(e, t, n, o, a, r) {
  const {
    measureSize: l,
    startEdge: i,
    endEdge: u
  } = e, d = n[0] && a, c = v(), p = g(), m = n.map(l), f = b();
  function v() {
    if (!d) return 0;
    const B = n[0];
    return ge(t[i] - B[i]);
  }
  function g() {
    if (!d) return 0;
    const B = r.getComputedStyle(He(o));
    return parseFloat(B.getPropertyValue(`margin-${u}`));
  }
  function b() {
    return n.map((B, $, O) => {
      const k = !$, P = Ya(O, $);
      return k ? m[$] + c : P ? m[$] + p : O[$ + 1][i] - B[i];
    }).map(ge);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: f,
    startGap: c,
    endGap: p
  };
}
function Tg(e, t, n, o, a, r, l, i, u) {
  const {
    startEdge: d,
    endEdge: c,
    direction: p
  } = e, m = qa(n);
  function f(w, B) {
    return dn(w).filter(($) => $ % B === 0).map(($) => w.slice($, $ + B));
  }
  function v(w) {
    return w.length ? dn(w).reduce((B, $, O) => {
      const k = He(B) || 0, P = k === 0, E = $ === Cn(w), I = a[d] - r[k][d], V = a[d] - r[$][c], A = !o && P ? p(l) : 0, L = !o && E ? p(i) : 0, F = ge(V - L - (I + A));
      return O && F > t + u && B.push($), E && B.push(w.length), B;
    }, []).map((B, $, O) => {
      const k = Math.max(O[$ - 1] || 0);
      return w.slice(k, B);
    }) : [];
  }
  function g(w) {
    return m ? f(w, n) : v(w);
  }
  return {
    groupSlides: g
  };
}
function Dg(e, t, n, o, a, r, l) {
  const {
    align: i,
    axis: u,
    direction: d,
    startIndex: c,
    loop: p,
    duration: m,
    dragFree: f,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: b,
    skipSnaps: w,
    containScroll: B,
    watchResize: $,
    watchSlides: O,
    watchDrag: k,
    watchFocus: P
  } = r, E = 2, I = fg(), V = I.measure(t), A = n.map(I.measure), L = dg(u, d), F = L.measureSize(V), G = mg(F), q = ig(i, F), Q = !p && !!B, se = p || !!B, {
    slideSizes: pe,
    slideSizesWithGaps: ie,
    startGap: j,
    endGap: Y
  } = Ag(L, V, A, n, se, a), J = Tg(L, F, b, p, V, A, j, Y, E), {
    snaps: Te,
    snapsAligned: Pe
  } = _g(L, q, V, A, J), De = -He(Te) + He(ie), {
    snapsContained: qe,
    scrollContainLimit: ht
  } = yg(F, De, Pe, B, E), he = Q ? qe : Pe, {
    limit: fe
  } = bg(De, he, p), Oe = Ll(Cn(he), c, p), we = Oe.clone(), ue = dn(n), H = ({
    dragHandler: Tt,
    scrollBody: ho,
    scrollBounds: yo,
    options: {
      loop: Bn
    }
  }) => {
    Bn || yo.constrain(Tt.pointerDown()), ho.seek();
  }, le = ({
    scrollBody: Tt,
    translate: ho,
    location: yo,
    offsetLocation: Bn,
    previousLocation: Wl,
    scrollLooper: ql,
    slideLooper: Gl,
    dragHandler: Yl,
    animation: Xl,
    eventHandler: tr,
    scrollBounds: Zl,
    options: {
      loop: nr
    }
  }, or) => {
    const ar = Tt.settled(), Ql = !Zl.shouldConstrain(), rr = nr ? ar : ar && Ql, sr = rr && !Yl.pointerDown();
    sr && Xl.stop();
    const Jl = yo.get() * or + Wl.get() * (1 - or);
    Bn.set(Jl), nr && (ql.loop(Tt.direction()), Gl.loop()), ho.to(Bn.get()), sr && tr.emit("settle"), rr || tr.emit("scroll");
  }, xe = ug(o, a, () => H(go), (Tt) => le(go, Tt)), Ee = 0.68, Ge = he[Oe.get()], et = nn(Ge), yt = nn(Ge), lt = nn(Ge), bt = nn(Ge), Qt = gg(et, lt, yt, bt, m, Ee), mo = Bg(p, he, De, fe, bt), vo = $g(xe, Oe, we, Qt, mo, bt, l), Qa = xg(fe), Ja = pn(), Hl = Eg(t, n, l, g), {
    slideRegistry: er
  } = Cg(Q, B, he, ht, J, ue), Ul = Sg(e, n, er, vo, Qt, Ja, l, P), go = {
    ownerDocument: o,
    ownerWindow: a,
    eventHandler: l,
    containerRect: V,
    slideRects: A,
    animation: xe,
    axis: L,
    dragHandler: cg(L, e, o, a, bt, pg(L, a), et, xe, vo, Qt, mo, Oe, l, G, f, v, w, Ee, k),
    eventStore: Ja,
    percentOfView: G,
    index: Oe,
    indexPrevious: we,
    limit: fe,
    location: et,
    offsetLocation: lt,
    previousLocation: yt,
    options: r,
    resizeHandler: vg(t, l, a, n, L, $, I),
    scrollBody: Qt,
    scrollBounds: hg(fe, lt, bt, Qt, G),
    scrollLooper: wg(De, fe, lt, [et, lt, yt, bt]),
    scrollProgress: Qa,
    scrollSnapList: he.map(Qa.get),
    scrollSnaps: he,
    scrollTarget: mo,
    scrollTo: vo,
    slideLooper: kg(L, F, De, pe, ie, Te, he, lt, n),
    slideFocus: Ul,
    slidesHandler: Og(t, l, O),
    slidesInView: Hl,
    slideIndexes: ue,
    slideRegistry: er,
    slidesToScroll: J,
    target: bt,
    translate: zl(L, t)
  };
  return go;
}
function Pg() {
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
const Ig = {
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
function Mg(e) {
  function t(r, l) {
    return Vl(r, l || {});
  }
  function n(r) {
    const l = r.breakpoints || {}, i = cn(l).filter((u) => e.matchMedia(u).matches).map((u) => l[u]).reduce((u, d) => t(u, d), {});
    return t(r, i);
  }
  function o(r) {
    return r.map((l) => cn(l.breakpoints || {})).reduce((l, i) => l.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Rg(e) {
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
function jn(e, t, n) {
  const o = e.ownerDocument, a = o.defaultView, r = Mg(a), l = Rg(r), i = pn(), u = Pg(), {
    mergeOptions: d,
    optionsAtMedia: c,
    optionsMediaQueries: p
  } = r, {
    on: m,
    off: f,
    emit: v
  } = u, g = L;
  let b = !1, w, B = d(Ig, jn.globalOptions), $ = d(B), O = [], k, P, E;
  function I() {
    const {
      container: ue,
      slides: H
    } = $;
    P = (Jo(ue) ? e.querySelector(ue) : ue) || e.children[0];
    const xe = Jo(H) ? P.querySelectorAll(H) : H;
    E = [].slice.call(xe || P.children);
  }
  function V(ue) {
    const H = Dg(e, P, E, o, a, ue, u);
    if (ue.loop && !H.slideLooper.canLoop()) {
      const le = Object.assign({}, ue, {
        loop: !1
      });
      return V(le);
    }
    return H;
  }
  function A(ue, H) {
    b || (B = d(B, ue), $ = c(B), O = H || O, I(), w = V($), p([B, ...O.map(({
      options: le
    }) => le)]).forEach((le) => i.add(le, "change", L)), $.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(we), w.eventHandler.init(we), w.resizeHandler.init(we), w.slidesHandler.init(we), w.options.loop && w.slideLooper.loop(), P.offsetParent && E.length && w.dragHandler.init(we), k = l.init(we, O)));
  }
  function L(ue, H) {
    const le = J();
    F(), A(d({
      startIndex: le
    }, ue), H), u.emit("reInit");
  }
  function F() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), l.destroy(), i.clear();
  }
  function G() {
    b || (b = !0, i.clear(), F(), u.emit("destroy"), u.clear());
  }
  function q(ue, H, le) {
    !$.active || b || (w.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : $.duration), w.scrollTo.index(ue, le || 0));
  }
  function Q(ue) {
    const H = w.index.add(1).get();
    q(H, ue, -1);
  }
  function se(ue) {
    const H = w.index.add(-1).get();
    q(H, ue, 1);
  }
  function pe() {
    return w.index.add(1).get() !== J();
  }
  function ie() {
    return w.index.add(-1).get() !== J();
  }
  function j() {
    return w.scrollSnapList;
  }
  function Y() {
    return w.scrollProgress.get(w.offsetLocation.get());
  }
  function J() {
    return w.index.get();
  }
  function Te() {
    return w.indexPrevious.get();
  }
  function Pe() {
    return w.slidesInView.get();
  }
  function De() {
    return w.slidesInView.get(!1);
  }
  function qe() {
    return k;
  }
  function ht() {
    return w;
  }
  function he() {
    return e;
  }
  function fe() {
    return P;
  }
  function Oe() {
    return E;
  }
  const we = {
    canScrollNext: pe,
    canScrollPrev: ie,
    containerNode: fe,
    internalEngine: ht,
    destroy: G,
    off: f,
    on: m,
    emit: v,
    plugins: qe,
    previousScrollSnap: Te,
    reInit: g,
    rootNode: he,
    scrollNext: Q,
    scrollPrev: se,
    scrollProgress: Y,
    scrollSnapList: j,
    scrollTo: q,
    selectedScrollSnap: J,
    slideNodes: Oe,
    slidesInView: Pe,
    slidesNotInView: De
  };
  return A(t, n), setTimeout(() => u.emit("init"), 0), we;
}
jn.globalOptions = void 0;
function Xa(e = {}, t = []) {
  const n = xt(e), o = xt(t);
  let a = n ? e.value : e, r = o ? t.value : t;
  const l = Rn(), i = Rn();
  function u() {
    i.value && i.value.reInit(a, r);
  }
  return re(() => {
    !ag() || !l.value || (jn.globalOptions = Xa.globalOptions, i.value = jn(l.value, a, r));
  }), Wn(() => {
    i.value && i.value.destroy();
  }), n && X(e, (d) => {
    Wa(a, d) || (a = d, u());
  }), o && X(t, (d) => {
    rg(r, d) || (r = d, u());
  }), [l, i];
}
Xa.globalOptions = void 0;
const [Fg, Vg] = Xv(
  ({ opts: e, orientation: t, plugins: n }, o) => {
    const [a, r] = Xa(
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
    const u = T(!1), d = T(!1);
    function c(p) {
      u.value = (p == null ? void 0 : p.canScrollNext()) || !1, d.value = (p == null ? void 0 : p.canScrollPrev()) || !1;
    }
    return re(() => {
      var p, m, f;
      r.value && ((p = r.value) == null || p.on("init", c), (m = r.value) == null || m.on("reInit", c), (f = r.value) == null || f.on("select", c), o("init-api", r.value));
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
function uo() {
  const e = Vg();
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const _0 = /* @__PURE__ */ x({
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
    } = Fg(o, a);
    t({
      canScrollNext: r,
      canScrollPrev: l,
      carouselApi: i,
      carouselRef: u,
      orientation: d,
      scrollNext: c,
      scrollPrev: p
    });
    function m(f) {
      const v = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", g = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (f.key === v) {
        f.preventDefault(), p();
        return;
      }
      f.key === g && (f.preventDefault(), c());
    }
    return (f, v) => (h(), N("div", {
      class: te(s(z)("relative", o.class)),
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
        scrollNext: s(c),
        scrollPrev: s(p)
      })
    ], 34));
  }
}), C0 = /* @__PURE__ */ x({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { carouselRef: n, orientation: o } = uo();
    return (a, r) => (h(), N("div", {
      ref_key: "carouselRef",
      ref: n,
      class: "overflow-hidden"
    }, [
      ae("div", D({
        class: s(z)("flex", s(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class)
      }, a.$attrs), [
        _(a.$slots, "default")
      ], 16)
    ], 512));
  }
}), B0 = /* @__PURE__ */ x({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n } = uo();
    return (o, a) => (h(), N("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: te(
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
}), $0 = /* @__PURE__ */ x({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollPrev: o, scrollPrev: a } = uo();
    return (r, l) => (h(), C(s(Rl), {
      disabled: !s(o),
      class: te(
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
          R(s(_v), { class: "size-4 text-current" }),
          l[0] || (l[0] = ae("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), S0 = /* @__PURE__ */ x({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { orientation: n, canScrollNext: o, scrollNext: a } = uo();
    return (r, l) => (h(), C(s(Rl), {
      disabled: !s(o),
      class: te(
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
          R(s(Cv), { class: "size-4 text-current" }),
          l[0] || (l[0] = ae("span", { class: "sr-only" }, "Next Slide", -1))
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
const Lg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dn = {
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
const zg = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: l, ...i }, { slots: u }) => ke(
  "svg",
  {
    ...Dn,
    width: e || Dn.width,
    height: e || Dn.height,
    stroke: o || Dn.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: ["lucide", `lucide-${Lg(r ?? "icon")}`],
    ...i
  },
  [...a.map((d) => ke(...d)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = (e, t) => (n, { slots: o }) => ke(
  zg,
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
const jg = Ng("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
function Za(e) {
  return e ? e.flatMap((t) => t.type === ye ? Za(t.children) : [t]) : [];
}
const ta = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var u, d;
      if (!n.default)
        return null;
      const o = Za(n.default()), a = o.findIndex((c) => c.type !== la);
      if (a === -1)
        return o;
      const r = o[a];
      (u = r.props) == null || delete u.ref;
      const l = r.props ? D(t, r.props) : t;
      t.class && ((d = r.props) != null && d.class) && delete r.props.class;
      const i = ms(r, l);
      for (const c in l)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = l[c]);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), Kg = ["area", "img", "input"], co = x({
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
    return typeof o == "string" && Kg.includes(o) ? () => ke(o, t) : o !== "template" ? () => ke(e.as, t, { default: n.default }) : () => ke(ta, t, { default: n.default });
  }
}), Hg = /* @__PURE__ */ x({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (h(), C(s(co), {
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
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
}), Nl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ug = (e) => typeof e < "u", Wg = ys, qg = Nl ? window : void 0;
function po(e) {
  var t;
  const n = ys(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Gg(e) {
  return JSON.parse(JSON.stringify(e));
}
function Yg(e, t, n, o = {}) {
  var a, r, l;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: m
  } = o, f = Re(), v = n || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((l = (r = f == null ? void 0 : f.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(f == null ? void 0 : f.proxy));
  let g = d;
  g = g || `update:${t.toString()}`;
  const b = ($) => i ? typeof i == "function" ? i($) : Gg($) : $, w = () => Ug(e[t]) ? b(e[t]) : p, B = ($) => {
    m ? m($) && v(g, $) : v(g, $);
  };
  if (u) {
    const $ = w(), O = T($);
    let k = !1;
    return X(
      () => e[t],
      (P) => {
        k || (k = !0, O.value = b(P), oe(() => k = !1));
      }
    ), X(
      O,
      (P) => {
        !k && (P !== e[t] || c) && B(P);
      },
      { deep: c }
    ), O;
  } else
    return S({
      get() {
        return w();
      },
      set($) {
        B($);
      }
    });
}
function fo(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, o = Symbol(n);
  return [(l) => {
    const i = fn(o, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (l) => (mn(o, l), l)];
}
function ns(e) {
  return typeof e == "string" ? `'${e}'` : new Xg().serialize(e);
}
const Xg = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      ir(this, t, /* @__PURE__ */ new Map());
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
      let a = Jt(this, t).get(o);
      return a === void 0 && (Jt(this, t).set(o, `#${Jt(this, t).size}`), a = this.serializeObject(o), Jt(this, t).set(o, a)), a;
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
function na(e, t) {
  return e === t || ns(e) === ns(t);
}
function oa(e) {
  return e == null;
}
function os(e, t) {
  return oa(e) ? !1 : Array.isArray(e) ? e.some((n) => na(n, t)) : na(e, t);
}
const [Zg, k0] = fo("ConfigProvider");
function jl() {
  const e = Re(), t = T(), n = S(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : po(t);
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
let Qg = 0;
function Jg(e, t = "reka") {
  const n = Zg({ useId: void 0 });
  return Mn.useId ? `${t}-${Mn.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Qg}`;
}
function eh(e, t) {
  const n = T(e);
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
function th(e, t) {
  var b;
  const n = T({}), o = T("none"), a = T(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? qg, { state: u, dispatch: d } = eh(r, {
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
    var B;
    if (Nl) {
      const $ = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (B = t.value) == null || B.dispatchEvent($);
    }
  };
  X(
    e,
    async (w, B) => {
      var O;
      const $ = B !== w;
      if (await oe(), $) {
        const k = o.value, P = Pn(t.value);
        w ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((O = n.value) == null ? void 0 : O.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : B && k !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const p = (w) => {
    const B = Pn(t.value), $ = B.includes(
      w.animationName
    ), O = u.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && $ && (c(`after-${O}`), d("ANIMATION_END"), !a.value)) {
      const k = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = k);
      });
    }
    w.target === t.value && B === "none" && d("ANIMATION_END");
  }, m = (w) => {
    w.target === t.value && (o.value = Pn(t.value));
  }, f = X(
    t,
    (w, B) => {
      w ? (n.value = getComputedStyle(w), w.addEventListener("animationstart", m), w.addEventListener("animationcancel", p), w.addEventListener("animationend", p)) : (d("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), B == null || B.removeEventListener("animationstart", m), B == null || B.removeEventListener("animationcancel", p), B == null || B.removeEventListener("animationend", p));
    },
    { immediate: !0 }
  ), v = X(u, () => {
    const w = Pn(t.value);
    o.value = u.value === "mounted" ? w : "none";
  });
  return Le(() => {
    f(), v();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Pn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const nh = x({
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
    const { present: o, forceMount: a } = ce(e), r = T(), { isPresent: l } = th(o, r);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = Za(i || []);
    const u = Re();
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
    return () => a.value || o.value || l.value ? ke(t.default({ present: l.value })[0], {
      ref: (c) => {
        const p = po(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-reka-popper-content-wrapper") ? r.value = p.firstElementChild : r.value = p), p;
      }
    }) : null;
  }
});
function oh(e) {
  const t = Re(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[ps(Hn(a))] = (...r) => e(a, ...r);
  }), o;
}
function as() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function ah(e) {
  const t = Re(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), o = us(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Hn(l)] = r[l];
    }), Object.keys({ ...n, ...a }).reduce((l, i) => (o.value[i] !== void 0 && (l[i] = o.value[i]), l), {});
  });
}
function rh(e, t) {
  const n = ah(e), o = t ? oh(t) : {};
  return S(() => ({
    ...n.value,
    ...o
  }));
}
function aa() {
  const e = T(), t = S(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : po(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function sh(e) {
  return S(() => {
    var t;
    return Wg(e) ? !!((t = po(e)) != null && t.closest("form")) : !0;
  });
}
const rs = "data-reka-collection-item";
function lh(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const c = T(/* @__PURE__ */ new Map());
    a = {
      collectionRef: T(),
      itemMap: c
    }, mn(o, a);
  } else
    a = fn(o);
  const r = (c = !1) => {
    const p = a.collectionRef.value;
    if (!p)
      return [];
    const m = Array.from(p.querySelectorAll(`[${rs}]`)), v = Array.from(a.itemMap.value.values()).sort(
      (g, b) => m.indexOf(g.ref) - m.indexOf(b.ref)
    );
    return c ? v : v.filter((g) => g.ref.dataset.disabled !== "");
  }, l = x({
    name: "CollectionSlot",
    setup(c, { slots: p }) {
      const { primitiveElement: m, currentElement: f } = aa();
      return X(f, () => {
        a.collectionRef.value = f.value;
      }), () => ke(ta, { ref: m }, p);
    }
  }), i = x({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(c, { slots: p, attrs: m }) {
      const { primitiveElement: f, currentElement: v } = aa();
      return be((g) => {
        if (v.value) {
          const b = vs(v.value);
          a.itemMap.value.set(b, { ref: v.value, value: c.value }), g(() => a.itemMap.value.delete(b));
        }
      }), () => ke(ta, { ...m, [rs]: "", ref: f }, p);
    }
  }), u = S(() => Array.from(a.itemMap.value.values())), d = S(() => a.itemMap.value.size);
  return { getItems: r, reactiveItems: u, itemMapSize: d, CollectionSlot: l, CollectionItem: i };
}
const ih = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function uh(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function dh(e, t, n) {
  const o = uh(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return ih[o];
}
function ch(e, t = !1) {
  const n = as();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), as() !== n))
      return;
}
function ph(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
const [fh, O0] = fo("RovingFocusGroup"), ss = /* @__PURE__ */ x({
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
    const t = e, { primitiveElement: n, currentElement: o } = aa(), a = S(() => t.checked ?? t.value);
    return X(a, (r, l) => {
      if (!o.value)
        return;
      const i = o.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && r !== l) {
        const p = new Event("input", { bubbles: !0 }), m = new Event("change", { bubbles: !0 });
        c.call(i, r), i.dispatchEvent(p), i.dispatchEvent(m);
      }
    }), (r, l) => (h(), C(Hg, D({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...r.$attrs }, { as: "input" }), null, 16));
  }
}), mh = /* @__PURE__ */ x({
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
    const t = e, n = S(
      () => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required
    ), o = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, r) => typeof a == "object" ? Object.entries(a).map(([l, i]) => ({ name: `[${t.name}][${r}][${l}]`, value: i })) : { name: `[${t.name}][${r}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, r]) => ({ name: `[${t.name}][${a}]`, value: r })) : []);
    return (a, r) => n.value ? (h(), C(ss, D({ key: a.name }, { ...t, ...a.$attrs }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (h(!0), N(ye, { key: 1 }, pt(o.value, (l) => (h(), C(ss, D({
      key: l.name,
      ref_for: !0
    }, { ...t, ...a.$attrs }, {
      name: l.name,
      value: l.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [vh, E0] = fo("CheckboxGroupRoot");
function Kn(e) {
  return e === "indeterminate";
}
function Kl(e) {
  return Kn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const gh = /* @__PURE__ */ x({
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
    const t = e, n = fh(), o = Jg(), a = S(() => t.tabStopId || o), r = S(
      () => n.currentTabStopId.value === a.value
    ), { getItems: l, CollectionItem: i } = lh();
    re(() => {
      t.focusable && n.onFocusableItemAdd();
    }), Le(() => {
      t.focusable && n.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        n.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget)
        return;
      const c = dh(
        d,
        n.orientation.value,
        n.dir.value
      );
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey)
          return;
        d.preventDefault();
        let p = [...l().map((m) => m.ref).filter((m) => m.dataset.disabled !== "")];
        if (c === "last")
          p.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && p.reverse();
          const m = p.indexOf(
            d.currentTarget
          );
          p = n.loop.value ? ph(p, m + 1) : p.slice(m + 1);
        }
        oe(() => ch(p));
      }
    }
    return (d, c) => (h(), C(s(i), null, {
      default: y(() => [
        R(s(co), {
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
            _(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [hh, yh] = fo("CheckboxRoot"), bh = /* @__PURE__ */ x({
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
    const n = e, o = t, { forwardRef: a, currentElement: r } = jl(), l = vh(null), i = Yg(n, "modelValue", o, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    }), u = S(() => (l == null ? void 0 : l.disabled.value) || n.disabled), d = S(() => oa(l == null ? void 0 : l.modelValue.value) ? i.value === "indeterminate" ? "indeterminate" : i.value : os(l.modelValue.value, n.value));
    function c() {
      if (oa(l == null ? void 0 : l.modelValue.value))
        i.value = Kn(i.value) ? !0 : !i.value;
      else {
        const f = [...l.modelValue.value || []];
        if (os(f, n.value)) {
          const v = f.findIndex((g) => na(g, n.value));
          f.splice(v, 1);
        } else
          f.push(n.value);
        l.modelValue.value = f;
      }
    }
    const p = sh(r), m = S(() => {
      var f;
      return n.id && r.value ? (f = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : f.innerText : void 0;
    });
    return yh({
      disabled: u,
      state: d
    }), (f, v) => {
      var g, b;
      return h(), C(Fe((g = s(l)) != null && g.rovingFocus.value ? s(gh) : s(co)), D(f.$attrs, {
        id: f.id,
        ref: s(a),
        role: "checkbox",
        "as-child": f.asChild,
        as: f.as,
        type: f.as === "button" ? "button" : void 0,
        "aria-checked": s(Kn)(d.value) ? "mixed" : d.value,
        "aria-required": f.required,
        "aria-label": f.$attrs["aria-label"] || m.value,
        "data-state": s(Kl)(d.value),
        "data-disabled": u.value ? "" : void 0,
        disabled: u.value,
        focusable: (b = s(l)) != null && b.rovingFocus.value ? !u.value : void 0,
        onKeydown: ct(Ce(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c
      }), {
        default: y(() => [
          _(f.$slots, "default", {
            modelValue: s(i),
            state: d.value
          }),
          s(p) && f.name && !s(l) ? (h(), C(s(mh), {
            key: 0,
            type: "checkbox",
            checked: !!d.value,
            name: f.name,
            value: f.value,
            disabled: u.value,
            required: f.required
          }, null, 8, ["checked", "name", "value", "disabled", "required"])) : de("", !0)
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-required", "aria-label", "data-state", "data-disabled", "disabled", "focusable", "onKeydown"]);
    };
  }
}), wh = /* @__PURE__ */ x({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t } = jl(), n = hh();
    return (o, a) => (h(), C(s(nh), {
      present: o.forceMount || s(Kn)(s(n).state.value) || s(n).state.value === !0
    }, {
      default: y(() => [
        R(s(co), D({
          ref: s(t),
          "data-state": s(Kl)(s(n).state.value),
          "data-disabled": s(n).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": o.asChild,
          as: o.as
        }, o.$attrs), {
          default: y(() => [
            _(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), A0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = rh(a, o);
    return (l, i) => (h(), C(s(bh), D(s(r), {
      class: s(z)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        n.class
      )
    }), {
      default: y(() => [
        R(s(wh), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: y(() => [
            _(l.$slots, "default", {}, () => [
              R(s(jg), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xh = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(gc), D(s(r), {
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
}), _h = /* @__PURE__ */ x({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Ba), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T0 = /* @__PURE__ */ x({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(kt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D0 = /* @__PURE__ */ x({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($a), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P0 = /* @__PURE__ */ x({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex flex-col gap-y-1.5 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), I0 = /* @__PURE__ */ x({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(Aa), D(s(o), {
      class: s(z)("text-lg font-semibold leading-none tracking-tight", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), M0 = /* @__PURE__ */ x({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(Ta), D(s(o), {
      class: s(z)("text-sm text-muted-foreground", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ch = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Sa), null, {
      default: y(() => [
        R(s(no), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(to), D(s(r), {
          class: s(z)(
            "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            n.class
          )
        }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(kt), {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              onClick: i[0] || (i[0] = (u) => o("close", u))
            }, {
              default: y(() => [
                R(s(lo), { class: "size-4" }),
                i[1] || (i[1] = ae("span", { class: "sr-only" }, "Close", -1))
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
}), R0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Sa), null, {
      default: y(() => [
        R(s(no), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: y(() => [
            R(s(to), D({
              class: s(z)(
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
                R(s(kt), { class: "absolute right-4 top-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: y(() => [
                    R(s(lo), { class: "h-4 w-4" }),
                    i[1] || (i[1] = ae("span", { class: "sr-only" }, "Close", -1))
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
}), F0 = /* @__PURE__ */ x({
  __name: "DialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), V0 = /* @__PURE__ */ x({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(_h), U(W(s(a))), {
      default: y(() => [
        R(s(Ch), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: y(() => [
            R(xh, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), L0 = /* @__PURE__ */ x({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Bc), D(n.value, {
      class: s(z)("py-6 text-center text-sm", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z0 = /* @__PURE__ */ x({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(bc), D(n.value, {
      class: s(z)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        t.class
      )
    }), {
      default: y(() => [
        o.heading ? (h(), C(s(wc), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: y(() => [
            Se(Ae(o.heading), 1)
          ]),
          _: 1
        })) : de("", !0),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bh = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, N0 = /* @__PURE__ */ x({
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
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), N("div", Bh, [
      R(s(Ov), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      R(s(hc), D({ ...s(o), ...a.$attrs }, {
        "auto-focus": "",
        class: s(z)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          t.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), j0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Oc), D(s(r), {
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
}), $h = { role: "presentation" }, K0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Cc), D(s(r), {
      class: s(z)("max-h-[300px] overflow-y-auto overflow-x-hidden", n.class)
    }), {
      default: y(() => [
        ae("div", $h, [
          _(l.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), H0 = /* @__PURE__ */ x({
  __name: "CommandSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Ec), D(n.value, {
      class: s(z)("-mx-1 h-px bg-border", t.class)
    }), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U0 = /* @__PURE__ */ x({
  __name: "CommandShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("span", {
      class: te(s(z)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), W0 = /* @__PURE__ */ x({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(ip), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q0 = /* @__PURE__ */ x({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = $e(e);
    return (o, a) => (h(), C(s(up), D({ class: "outline-none" }, s(n)), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), G0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(dp), null, {
      default: y(() => [
        R(s(cp), D(s(r), {
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
}), Y0 = /* @__PURE__ */ x({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(fp), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X0 = /* @__PURE__ */ x({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(hp), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Z0 = /* @__PURE__ */ x({
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
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(pp), D(s(o), {
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
}), Sh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Q0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(vp), D(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ae("span", Sh, [
          R(s(rl), null, {
            default: y(() => [
              R(s(Il), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kh = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, J0 = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(yp), D(s(r), {
      class: s(z)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        n.class
      )
    }), {
      default: y(() => [
        ae("span", kh, [
          R(s(rl), null, {
            default: y(() => [
              R(s(kv), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        _(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ey = /* @__PURE__ */ x({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("span", {
      class: te(s(z)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), ty = /* @__PURE__ */ x({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(mp), D(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), ny = /* @__PURE__ */ x({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(gp), D(s(o), {
      class: s(z)("px-2 py-1.5 text-sm font-semibold", a.inset && "pl-8", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oy = /* @__PURE__ */ x({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(bp), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ay = /* @__PURE__ */ x({
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
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(xp), D(s(o), {
      class: s(z)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s($v), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ry = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(wp), D(s(r), {
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
}), sy = /* @__PURE__ */ x({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Fl(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => Nt((h(), N("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => xt(a) ? a.value = i : null),
      class: te(
        s(z)(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [bs, s(a)]
    ]);
  }
}), ly = /* @__PURE__ */ x({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(_p), D(n.value, {
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
}), iy = /* @__PURE__ */ x({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Bp), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uy = /* @__PURE__ */ x({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($p), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dy = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Sp), null, {
      default: y(() => [
        R(s(Ep), D({ ...s(r), ...l.$attrs }, {
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
}), cy = /* @__PURE__ */ x({
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
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Ip), D(n.value, {
      class: s(z)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t.class)
    }), {
      default: y(() => [
        R(s(Mp), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Bt(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), py = /* @__PURE__ */ x({
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
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Np), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fy = /* @__PURE__ */ x({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(pf), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), my = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(Hp), D(s(o), {
      class: s(z)(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start",
        t.class
      )
    }), {
      default: y(() => [
        _(a.$slots, "default"),
        R(s(ff), { "as-child": "" }, {
          default: y(() => [
            R(s(Bv), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vy = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Up), null, {
      default: y(() => [
        R(s(Jp), D({ ...s(r), ...l.$attrs }, {
          class: s(z)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: y(() => [
            R(s(Eh)),
            R(s(uf), {
              class: te(
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
            R(s(Ah))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), gy = /* @__PURE__ */ x({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(sf), D({
      class: s(z)("p-1 w-full", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Oh = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, hy = /* @__PURE__ */ x({
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
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(nf), D(s(o), {
      class: s(z)(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: y(() => [
        ae("span", Oh, [
          R(s(of), null, {
            default: y(() => [
              R(s(Il), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        R(s(dl), null, {
          default: y(() => [
            _(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yy = /* @__PURE__ */ x({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(dl), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), by = /* @__PURE__ */ x({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(lf), {
      class: te(s(z)("px-2 py-1.5 text-sm font-semibold", t.class))
    }, {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wy = /* @__PURE__ */ x({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(ef), D(n.value, {
      class: s(z)("-mx-1 my-1 h-px bg-muted", t.class)
    }), null, 16, ["class"]));
  }
}), Eh = /* @__PURE__ */ x({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(df), D(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(Sv))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ah = /* @__PURE__ */ x({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(cf), D(s(o), {
      class: s(z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: y(() => [
        _(a.$slots, "default", {}, () => [
          R(s(Ml))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xy = /* @__PURE__ */ x({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Ba), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _y = /* @__PURE__ */ x({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s($a), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cy = /* @__PURE__ */ x({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), C(s(kt), U(W(t)), {
      default: y(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), By = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, side: i, ...u } = n;
      return u;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Sa), null, {
      default: y(() => [
        R(s(no), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        R(s(to), D({
          class: s(z)(s(Th)({ side: l.side }), n.class)
        }, { ...s(r), ...l.$attrs }), {
          default: y(() => [
            _(l.$slots, "default"),
            R(s(kt), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: y(() => [
                R(s(lo), { class: "h-4 w-4" })
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
}), $y = /* @__PURE__ */ x({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex flex-col gap-y-2 text-center sm:text-left", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Sy = /* @__PURE__ */ x({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Aa), D({
      class: s(z)("text-lg font-semibold text-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ky = /* @__PURE__ */ x({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Ta), D({
      class: s(z)("text-sm text-muted-foreground", t.class)
    }, n.value), {
      default: y(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Oy = /* @__PURE__ */ x({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Th = _n(
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
), Ey = /* @__PURE__ */ x({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", {
      class: te(s(z)("animate-pulse rounded-md bg-primary/10", t.class))
    }, null, 2));
  }
}), Ay = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Sf), D({
      class: s(z)("relative flex w-full touch-none select-none items-center", n.class)
    }, s(r)), {
      default: y(() => [
        R(s(Ef), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, {
          default: y(() => [
            R(s(Af), { class: "absolute h-full bg-primary" })
          ]),
          _: 1
        }),
        (h(!0), N(ye, null, pt(l.modelValue, (u, d) => (h(), C(s(Of), {
          key: d,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ty = /* @__PURE__ */ x({
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
    const n = e, o = t, a = S(() => {
      const { class: l, ...i } = n;
      return i;
    }), r = Z(a, o);
    return (l, i) => (h(), C(s(Mf), D(s(r), {
      class: s(z)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        n.class
      )
    }), {
      default: y(() => [
        R(s(Rf), {
          class: te(
            s(z)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, null, 8, ["class"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Dh = { class: "relative w-full overflow-auto" }, Dy = /* @__PURE__ */ x({
  __name: "Table",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("div", Dh, [
      ae("table", {
        class: te(s(z)("w-full caption-bottom text-sm", t.class))
      }, [
        _(n.$slots, "default")
      ], 2)
    ]));
  }
}), Py = /* @__PURE__ */ x({
  __name: "TableBody",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("tbody", {
      class: te(s(z)("[&_tr:last-child]:border-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ph = /* @__PURE__ */ x({
  __name: "TableCell",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("td", {
      class: te(
        s(z)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Iy = /* @__PURE__ */ x({
  __name: "TableHead",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("th", {
      class: te(
        s(z)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          t.class
        )
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), My = /* @__PURE__ */ x({
  __name: "TableHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("thead", {
      class: te(s(z)("[&_tr]:border-b", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ry = /* @__PURE__ */ x({
  __name: "TableFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("tfoot", {
      class: te(s(z)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Ih = /* @__PURE__ */ x({
  __name: "TableRow",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("tr", {
      class: te(
        s(z)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t.class)
      )
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Fy = /* @__PURE__ */ x({
  __name: "TableCaption",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (h(), N("caption", {
      class: te(s(z)("mt-4 text-sm text-muted-foreground", t.class))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Mh = { class: "flex items-center justify-center py-10" }, Vy = /* @__PURE__ */ x({
  __name: "TableEmpty",
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(Ih, null, {
      default: y(() => [
        R(Ph, D({
          class: s(z)("p-4 whitespace-nowrap align-middle text-sm text-foreground", t.class)
        }, n.value), {
          default: y(() => [
            ae("div", Mh, [
              _(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ly = /* @__PURE__ */ x({
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
    const a = Z(e, t);
    return (r, l) => (h(), C(s(Vf), U(W(s(a))), {
      default: y(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zy = /* @__PURE__ */ x({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(zf), D({
      class: s(z)(
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
}), Ny = /* @__PURE__ */ x({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: o, ...a } = t;
      return a;
    });
    return (o, a) => (h(), C(s(Lf), D(n.value, {
      class: s(z)(
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
}), Rh = { class: "truncate" }, jy = /* @__PURE__ */ x({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = S(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = $e(n);
    return (a, r) => (h(), C(s(Nf), D(s(o), {
      class: s(z)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        t.class
      )
    }), {
      default: y(() => [
        ae("span", Rh, [
          _(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ky = /* @__PURE__ */ x({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = Fl(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, l) => Nt((h(), N("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (i) => xt(a) ? a.value = i : null),
      class: te(
        s(z)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          n.class
        )
      )
    }, null, 2)), [
      [bs, s(a)]
    ]);
  }
});
export {
  t0 as Accord,
  Rv as Accordion,
  Fv as AccordionContent,
  Vv as AccordionItem,
  Lv as AccordionTrigger,
  o0 as AlertDialog,
  d0 as AlertDialogAction,
  c0 as AlertDialogCancel,
  r0 as AlertDialogContent,
  i0 as AlertDialogDescription,
  u0 as AlertDialogFooter,
  s0 as AlertDialogHeader,
  l0 as AlertDialogTitle,
  a0 as AlertDialogTrigger,
  p0 as Avatar,
  m0 as AvatarFallback,
  f0 as AvatarImage,
  v0 as Badge,
  Rl as Button,
  g0 as Card,
  h0 as CardContent,
  y0 as CardDescription,
  b0 as CardFooter,
  w0 as CardHeader,
  x0 as CardTitle,
  _0 as Carousel,
  C0 as CarouselContent,
  B0 as CarouselItem,
  S0 as CarouselNext,
  $0 as CarouselPrevious,
  A0 as Checkbox,
  xh as Command,
  V0 as CommandDialog,
  L0 as CommandEmpty,
  z0 as CommandGroup,
  N0 as CommandInput,
  j0 as CommandItem,
  K0 as CommandList,
  H0 as CommandSeparator,
  U0 as CommandShortcut,
  _h as Dialog,
  T0 as DialogClose,
  Ch as DialogContent,
  M0 as DialogDescription,
  F0 as DialogFooter,
  P0 as DialogHeader,
  R0 as DialogScrollContent,
  I0 as DialogTitle,
  D0 as DialogTrigger,
  W0 as DropdownMenu,
  Q0 as DropdownMenuCheckboxItem,
  G0 as DropdownMenuContent,
  Y0 as DropdownMenuGroup,
  Z0 as DropdownMenuItem,
  ny as DropdownMenuLabel,
  dp as DropdownMenuPortal,
  X0 as DropdownMenuRadioGroup,
  J0 as DropdownMenuRadioItem,
  ty as DropdownMenuSeparator,
  ey as DropdownMenuShortcut,
  oy as DropdownMenuSub,
  ry as DropdownMenuSubContent,
  ay as DropdownMenuSubTrigger,
  q0 as DropdownMenuTrigger,
  Jh as Flasher,
  Wh as Header,
  e0 as Heading,
  sy as Input,
  ly as Label,
  qh as Main,
  iy as Popover,
  Hh as PopoverAnchor,
  dy as PopoverContent,
  uy as PopoverTrigger,
  cy as Progress,
  py as Select,
  vy as SelectContent,
  gy as SelectGroup,
  hy as SelectItem,
  yy as SelectItemText,
  by as SelectLabel,
  Ah as SelectScrollDownButton,
  Eh as SelectScrollUpButton,
  wy as SelectSeparator,
  my as SelectTrigger,
  fy as SelectValue,
  xy as Sheet,
  Cy as SheetClose,
  By as SheetContent,
  ky as SheetDescription,
  Oy as SheetFooter,
  $y as SheetHeader,
  Sy as SheetTitle,
  _y as SheetTrigger,
  Ey as Skeleton,
  Ay as Slider,
  Ty as Switch,
  Dy as Table,
  Py as TableBody,
  Fy as TableCaption,
  Ph as TableCell,
  Vy as TableEmpty,
  Ry as TableFooter,
  Iy as TableHead,
  My as TableHeader,
  Ih as TableRow,
  Ly as Tabs,
  zy as TabsContent,
  Ny as TabsList,
  jy as TabsTrigger,
  Ky as Textarea,
  n0 as Tip,
  wv as Toast,
  Qh as ToastAction,
  Ev as ToastClose,
  Kr as ToastDescription,
  Tv as ToastProvider,
  Av as ToastTitle,
  xv as ToastViewport,
  Nm as Toaster,
  zv as Tooltip,
  Nv as TooltipContent,
  jv as TooltipProvider,
  Kv as TooltipTrigger,
  Uh as TwoColumnLayout,
  Gh as TwoColumnLayoutSidebar,
  Yh as TwoColumnLayoutSidebarDesktop,
  Xh as TwoColumnLayoutSidebarMobile,
  Zh as TwoColumnLayoutSidebarTrigger,
  Hv as avatarVariant,
  Uv as badgeVariants,
  Ua as buttonVariants,
  Lh as preset,
  Th as sheetVariants,
  Rm as toast,
  Dv as toastVariants,
  uo as useCarousel,
  Pv as useFlasher,
  Sl as useToast
};
