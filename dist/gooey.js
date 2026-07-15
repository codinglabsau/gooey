import { clsx as Mt } from "clsx";
import { twMerge as It } from "tailwind-merge";
import { inject as Z, provide as $e, ref as F, onMounted as N, onUnmounted as Ce, computed as T, defineComponent as i, openBlock as r, createBlock as p, unref as e, normalizeProps as w, guardReactiveProps as $, withCtx as c, renderSlot as d, normalizeClass as b, mergeProps as m, createVNode as g, createElementBlock as y, createTextVNode as k, toDisplayString as j, withDirectives as We, isRef as Ye, vModelText as Xe, useModel as J, mergeModels as Q, resolveDynamicComponent as G, createElementVNode as C, Fragment as I, renderList as R, createCommentVNode as V, watch as Y, createApp as Be, nextTick as zt, reactive as Ft, toValue as Vt, normalizeStyle as Se } from "vue";
import { useMediaQuery as oe, useSwipe as Rt, reactiveOmit as _, useVModel as ne, useEventListener as Ze, defaultDocument as Je, createInjectionState as Lt, useCurrentElement as Et } from "@vueuse/core";
import { useForwardPropsEmits as v, AlertDialogRoot as Gt, Primitive as E, AlertDialogAction as Ht, AlertDialogCancel as Nt, AlertDialogPortal as Kt, AlertDialogOverlay as Ut, AlertDialogContent as qt, AlertDialogDescription as Wt, AlertDialogTitle as Yt, AlertDialogTrigger as Xt, createContext as re, TooltipProvider as Ae, TooltipRoot as Zt, TooltipPortal as Jt, TooltipContent as Qt, TooltipArrow as ea, TooltipTrigger as ta, AccordionRoot as aa, AccordionContent as sa, useForwardProps as x, AccordionItem as oa, AccordionHeader as na, AccordionTrigger as ra, NumberFieldRoot as la, NumberFieldDecrement as ia, NumberFieldIncrement as ca, NumberFieldInput as da, AspectRatio as ua, AvatarRoot as pa, AvatarFallback as fa, AvatarImage as ma, Separator as Qe, CalendarRoot as ga, CalendarCell as _a, CalendarCellTrigger as ya, CalendarGrid as ba, CalendarGridBody as ha, CalendarGridHead as va, CalendarGridRow as xa, CalendarHeadCell as Ba, CalendarHeader as wa, CalendarHeading as $a, CalendarNext as Ca, CalendarPrev as Sa, CheckboxRoot as Aa, CheckboxIndicator as Oa, CollapsibleRoot as Pa, CollapsibleContent as ja, CollapsibleTrigger as ka, ComboboxRoot as Da, ComboboxAnchor as Ta, ComboboxEmpty as Ma, ComboboxGroup as Ia, ComboboxLabel as za, ComboboxInput as Fa, ComboboxItem as Va, ComboboxPortal as Ra, ComboboxContent as La, ComboboxViewport as Ea, ComboboxSeparator as Ga, useFilter as Ha, ListboxRoot as Na, DialogRoot as et, DialogClose as ee, DialogPortal as Oe, DialogOverlay as Pe, DialogContent as je, DialogDescription as tt, DialogTitle as at, DialogTrigger as st, useId as ke, ListboxGroup as Ka, ListboxGroupLabel as Ua, ListboxFilter as qa, ListboxItem as Wa, ListboxContent as Ya, ContextMenuRoot as Xa, ContextMenuCheckboxItem as Za, ContextMenuItemIndicator as ot, ContextMenuPortal as Ja, ContextMenuContent as Qa, ContextMenuGroup as es, ContextMenuItem as ts, ContextMenuLabel as as, ContextMenuRadioGroup as ss, ContextMenuRadioItem as os, ContextMenuSeparator as ns, ContextMenuSub as rs, ContextMenuSubContent as ls, ContextMenuSubTrigger as is, ContextMenuTrigger as cs, PopoverRoot as ds, PopoverPortal as us, PopoverContent as ps, PopoverTrigger as fs, DropdownMenuRoot as ms, DropdownMenuCheckboxItem as gs, DropdownMenuItemIndicator as nt, DropdownMenuPortal as _s, DropdownMenuContent as ys, DropdownMenuGroup as bs, DropdownMenuItem as hs, DropdownMenuLabel as vs, DropdownMenuRadioGroup as xs, DropdownMenuRadioItem as Bs, DropdownMenuSeparator as ws, DropdownMenuSub as $s, DropdownMenuSubContent as Cs, DropdownMenuSubTrigger as Ss, DropdownMenuTrigger as As, Label as Os, Slot as Ps, HoverCardRoot as js, HoverCardPortal as ks, HoverCardContent as Ds, HoverCardTrigger as Ts, MenubarRoot as Ms, MenubarCheckboxItem as Is, MenubarItemIndicator as rt, MenubarPortal as lt, MenubarContent as zs, MenubarGroup as Fs, MenubarItem as Vs, MenubarLabel as Rs, MenubarMenu as Ls, MenubarRadioGroup as Es, MenubarRadioItem as Gs, MenubarSeparator as Hs, MenubarSub as Ns, MenubarSubContent as Ks, MenubarSubTrigger as Us, MenubarTrigger as qs, NavigationMenuViewport as Ws, NavigationMenuRoot as Ys, NavigationMenuContent as Xs, NavigationMenuIndicator as Zs, NavigationMenuItem as Js, NavigationMenuLink as Qs, NavigationMenuList as eo, NavigationMenuTrigger as to, PaginationRoot as ao, PaginationList as so, PaginationEllipsis as oo, PaginationFirst as no, PaginationListItem as ro, PaginationLast as lo, PaginationNext as io, PaginationPrev as co, PinInputRoot as uo, PinInputInput as po, ProgressRoot as fo, ProgressIndicator as mo, RadioGroupRoot as go, RadioGroupItem as _o, RadioGroupIndicator as yo, RangeCalendarRoot as bo, RangeCalendarCell as ho, RangeCalendarCellTrigger as vo, RangeCalendarGrid as xo, RangeCalendarGridBody as Bo, RangeCalendarGridHead as wo, RangeCalendarGridRow as $o, RangeCalendarHeadCell as Co, RangeCalendarHeader as So, RangeCalendarHeading as Ao, RangeCalendarNext as Oo, RangeCalendarPrev as Po, SplitterResizeHandle as jo, SplitterGroup as ko, ScrollAreaScrollbar as Do, ScrollAreaThumb as To, ScrollAreaRoot as Mo, ScrollAreaViewport as Io, ScrollAreaCorner as zo, SelectRoot as Fo, SelectPortal as Vo, SelectContent as Ro, SelectViewport as Lo, SelectGroup as Eo, SelectItem as Go, SelectItemIndicator as Ho, SelectItemText as it, SelectLabel as No, SelectScrollDownButton as Ko, SelectScrollUpButton as Uo, SelectSeparator as qo, SelectTrigger as Wo, SelectIcon as Yo, SelectValue as Xo, SliderRoot as Zo, SliderTrack as Jo, SliderRange as Qo, SliderThumb as en, StepperRoot as tn, StepperDescription as an, StepperIndicator as sn, StepperItem as on, StepperSeparator as nn, StepperTitle as rn, StepperTrigger as ln, SwitchRoot as cn, SwitchThumb as dn, TabsRoot as un, TabsContent as pn, TabsList as fn, TabsTrigger as mn, TagsInputRoot as gn, TagsInputInput as _n, TagsInputItem as yn, TagsInputItemDelete as bn, TagsInputItemText as hn, Toggle as vn, ToggleGroupRoot as xn, ToggleGroupItem as Bn } from "reka-ui";
import { ComboboxCancel as Im, ComboboxItemIndicator as zm, ComboboxTrigger as Fm, DropdownMenuPortal as Vm, PopoverAnchor as Rm, SplitterPanel as Lm } from "reka-ui";
import { cva as L } from "class-variance-authority";
import { ChevronLeftIcon as le, MoreHorizontalIcon as wn, ChevronRightIcon as ie, Menu as $n, PanelLeft as ct, XIcon as dt, Loader2Icon as De, OctagonXIcon as ut, TriangleAlertIcon as pt, InfoIcon as ft, CircleCheckIcon as mt, ChevronDown as ce, Minus as gt, Plus as Cn, MoreHorizontal as _t, ChevronRight as K, ChevronLeft as yt, ArrowLeft as Sn, ArrowRight as An, Check as U, X as de, Search as On, Circle as Te, CalendarIcon as Pn, MinusIcon as jn, GripVertical as kn, ChevronUp as Dn } from "lucide-vue-next";
import { toast as W, Toaster as bt } from "vue-sonner";
import Tn from "embla-carousel-vue";
import { omit as ht, BulletLegend as Mn } from "@unovis/ts";
import { VisTooltip as vt, VisCrosshair as In, VisBulletLegend as zn } from "@unovis/vue";
import { DrawerRoot as Fn, DrawerClose as Vn, DrawerOverlay as Rn, DrawerPortal as Ln, DrawerContent as En, DrawerDescription as Gn, DrawerTitle as Hn, DrawerTrigger as Nn } from "vaul-vue";
import { FieldContextKey as Kn, ErrorMessage as Un } from "vee-validate";
import { Form as Gm, Field as Hm, FieldArray as Nm } from "vee-validate";
import { OTPInput as qn, useVueOTPContext as Wn } from "vue-input-otp";
function Yn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _e, Re;
function Xn() {
  if (Re) return _e;
  Re = 1;
  function t(s, o) {
    return { handler: s, config: o };
  }
  t.withOptions = function(s, o = () => ({})) {
    function n(l) {
      return { handler: s(l), config: o(l) };
    }
    return n.__isOptionsFunction = !0, n;
  };
  var a = t;
  return _e = a, _e;
}
var ye, Le;
function Zn() {
  if (Le) return ye;
  Le = 1;
  const t = Xn();
  function a(s) {
    return Object.fromEntries(
      Object.entries(s).filter(([o]) => o !== "DEFAULT")
    );
  }
  return ye = t(
    ({ addUtilities: s, matchUtilities: o, theme: n }) => {
      s({
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
      }), o(
        {
          "fade-in": (l) => ({ "--tw-enter-opacity": l }),
          "fade-out": (l) => ({ "--tw-exit-opacity": l })
        },
        { values: n("animationOpacity") }
      ), o(
        {
          "zoom-in": (l) => ({ "--tw-enter-scale": l }),
          "zoom-out": (l) => ({ "--tw-exit-scale": l })
        },
        { values: n("animationScale") }
      ), o(
        {
          "spin-in": (l) => ({ "--tw-enter-rotate": l }),
          "spin-out": (l) => ({ "--tw-exit-rotate": l })
        },
        { values: n("animationRotate") }
      ), o(
        {
          "slide-in-from-top": (l) => ({
            "--tw-enter-translate-y": `-${l}`
          }),
          "slide-in-from-bottom": (l) => ({
            "--tw-enter-translate-y": l
          }),
          "slide-in-from-left": (l) => ({
            "--tw-enter-translate-x": `-${l}`
          }),
          "slide-in-from-right": (l) => ({
            "--tw-enter-translate-x": l
          }),
          "slide-out-to-top": (l) => ({
            "--tw-exit-translate-y": `-${l}`
          }),
          "slide-out-to-bottom": (l) => ({
            "--tw-exit-translate-y": l
          }),
          "slide-out-to-left": (l) => ({
            "--tw-exit-translate-x": `-${l}`
          }),
          "slide-out-to-right": (l) => ({
            "--tw-exit-translate-x": l
          })
        },
        { values: n("animationTranslate") }
      ), o(
        { duration: (l) => ({ animationDuration: l }) },
        { values: a(n("animationDuration")) }
      ), o(
        { delay: (l) => ({ animationDelay: l }) },
        { values: n("animationDelay") }
      ), o(
        { ease: (l) => ({ animationTimingFunction: l }) },
        { values: a(n("animationTimingFunction")) }
      ), s({
        ".running": { animationPlayState: "running" },
        ".paused": { animationPlayState: "paused" }
      }), o(
        { "fill-mode": (l) => ({ animationFillMode: l }) },
        { values: n("animationFillMode") }
      ), o(
        { direction: (l) => ({ animationDirection: l }) },
        { values: n("animationDirection") }
      ), o(
        { repeat: (l) => ({ animationIterationCount: l }) },
        { values: n("animationRepeat") }
      );
    },
    {
      theme: {
        extend: {
          animationDelay: ({ theme: s }) => ({
            ...s("transitionDelay")
          }),
          animationDuration: ({ theme: s }) => ({
            0: "0ms",
            ...s("transitionDuration")
          }),
          animationTimingFunction: ({ theme: s }) => ({
            ...s("transitionTimingFunction")
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
          animationOpacity: ({ theme: s }) => ({
            DEFAULT: 0,
            ...s("opacity")
          }),
          animationTranslate: ({ theme: s }) => ({
            DEFAULT: "100%",
            ...s("translate")
          }),
          animationScale: ({ theme: s }) => ({
            DEFAULT: 0,
            ...s("scale")
          }),
          animationRotate: ({ theme: s }) => ({
            DEFAULT: "30deg",
            ...s("rotate")
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
  ), ye;
}
var Jn = Zn();
const Qn = /* @__PURE__ */ Yn(Jn), Cc = {
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
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" }
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" }
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
  plugins: [Qn]
}, xt = /* @__PURE__ */ Symbol("gooey-link"), Sc = {
  install(t, a = {}) {
    t.provide(xt, a.link ?? "a");
  }
};
function u(...t) {
  return It(Mt(t));
}
function Ac(t, a) {
  a.value = typeof t == "function" ? t(a.value) : t;
}
function Oc(t, a) {
  const s = typeof t == "string" && !a ? `${t}Context` : a, o = Symbol(s);
  return [(f) => {
    const h = Z(o, f);
    if (h || h === null) return h;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(", ")}` : `\`${t}\``}`
    );
  }, (f) => ($e(o, f), f)];
}
function Pc() {
  const t = oe("(max-width: 768px)"), a = oe("(min-width: 769px) and (max-width: 1024px)"), s = F(!1);
  N(() => {
    s.value = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });
  const o = T(() => t.value || a.value);
  return {
    isMobile: t,
    isTablet: a,
    isTouchDevice: s,
    isSmallScreen: o
  };
}
function jc(t, a = {}) {
  const { threshold: s = 50, enabled: o = !0, onSwipeLeft: n, onSwipeRight: l } = a, { direction: f, lengthX: h } = Rt(t, {
    passive: !0,
    onSwipeEnd() {
      o && Math.abs(h.value) >= s && (f.value === "left" && n ? n() : f.value === "right" && l && l());
    }
  });
  return {
    direction: f,
    lengthX: h
  };
}
function kc() {
  const t = F(!0);
  let a = 0, s = !1;
  const o = () => {
    s || (window.requestAnimationFrame(() => {
      const n = window.scrollY, l = n - a;
      l > 10 && n > 100 ? t.value = !1 : l < -10 && (t.value = !0), a = n, s = !1;
    }), s = !0);
  };
  return N(() => {
    window.addEventListener("scroll", o, { passive: !0 });
  }), Ce(() => {
    window.removeEventListener("scroll", o);
  }), {
    isVisible: t
  };
}
const er = /* @__PURE__ */ i({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Gt), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), q = /* @__PURE__ */ i({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      "data-slot": "button",
      as: t.as,
      "as-child": t.asChild,
      class: b(e(u)(e(M)({ variant: t.variant, size: t.size }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), M = L(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), tr = /* @__PURE__ */ i({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t, s = _(a, "class", "variant");
    return (o, n) => (r(), p(e(Ht), m(e(s), {
      class: e(u)(e(M)({ variant: a.variant }), a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ar = /* @__PURE__ */ i({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Nt), m(e(s), {
      class: e(u)(e(M)({ variant: "outline" }), "mt-2 sm:mt-0", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sr = /* @__PURE__ */ i({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Kt), null, {
      default: c(() => [
        g(e(Ut), { class: "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" }),
        g(e(qt), m(e(l), {
          class: e(u)(
            "fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), or = /* @__PURE__ */ i({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Wt), m(e(s), {
      class: e(u)("text-sm text-muted-foreground", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nr = /* @__PURE__ */ i({
  __name: "AlertDialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), rr = /* @__PURE__ */ i({
  __name: "AlertDialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("flex flex-col gap-y-2 text-center sm:text-left", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), lr = /* @__PURE__ */ i({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Yt), m(e(s), {
      class: e(u)("text-lg font-semibold", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dc = /* @__PURE__ */ i({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Xt), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tc = /* @__PURE__ */ i({
  __name: "ConfirmDialog",
  setup(t) {
    const { isOpen: a, close: s, cancelButton: o, actionButton: n, title: l, description: f, variant: h } = dr();
    return (B, A) => (r(), p(e(er), { open: e(a) }, {
      default: c(() => [
        g(e(sr), {
          onEscapeKeyDown: e(s),
          onPointerDownOutside: e(s)
        }, {
          default: c(() => [
            g(e(rr), null, {
              default: c(() => [
                g(e(lr), null, {
                  default: c(() => [
                    k(j(e(l)), 1)
                  ]),
                  _: 1
                }),
                g(e(or), null, {
                  default: c(() => [
                    k(j(e(f)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            g(e(nr), null, {
              default: c(() => [
                g(e(ar), {
                  onClick: e(o).handler
                }, {
                  default: c(() => [
                    k(j(e(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                g(e(tr), {
                  variant: e(h),
                  onClick: e(n).handler
                }, {
                  default: c(() => [
                    k(j(e(n).label ?? "Confirm"), 1)
                  ]),
                  _: 1
                }, 8, ["variant", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["onEscapeKeyDown", "onPointerDownOutside"])
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), Me = F(!1), Bt = F(""), wt = F(""), $t = F(null), Ct = F({
  label: void 0,
  handler: () => {
  }
}), St = F({
  label: void 0,
  handler: () => {
  }
}), ir = (t) => {
  Bt.value = t.title, wt.value = t.description, $t.value = t.variant, Ct.value = Ee(t.cancelAction), St.value = Ee(t.action), cr();
}, Ee = (t) => typeof t == "string" ? {
  label: t,
  handler: se
} : typeof t == "function" ? {
  label: void 0,
  handler: t
} : typeof t == "object" && t !== void 0 ? {
  label: t.label ?? void 0,
  handler: t.handler ?? se
} : {
  label: void 0,
  handler: se
}, se = () => {
  Me.value = !1;
}, cr = () => {
  Me.value = !0;
};
function dr() {
  return {
    confirmDialog: (t) => ir(t),
    title: Bt,
    description: wt,
    variant: $t,
    isOpen: Me,
    close: se,
    cancelButton: Ct,
    actionButton: St
  };
}
const Ie = /* @__PURE__ */ i({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, n = ne(s, "modelValue", a, {
      passive: !0,
      defaultValue: s.defaultValue
    });
    return (l, f) => We((r(), y("input", {
      "onUpdate:modelValue": f[0] || (f[0] = (h) => Ye(n) ? n.value = h : null),
      "data-slot": "input",
      class: b(
        e(u)(
          "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          s.class
        )
      )
    }, null, 2)), [
      [Xe, e(n)]
    ]);
  }
}), Mc = /* @__PURE__ */ i({
  __name: "Email",
  props: /* @__PURE__ */ Q({
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const a = J(t, "modelValue");
    return (s, o) => (r(), p(e(Ie), {
      modelValue: a.value,
      "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
      type: "email",
      inputmode: "email",
      autocomplete: "email",
      spellcheck: "false",
      placeholder: t.placeholder,
      disabled: t.disabled,
      readonly: t.readonly,
      class: b(s.$props.class)
    }, null, 8, ["modelValue", "placeholder", "disabled", "readonly", "class"]));
  }
}), X = /* @__PURE__ */ i({
  __name: "GooeyLink",
  props: {
    href: {}
  },
  setup(t) {
    const a = Z(xt, "a");
    return (s, o) => (r(), p(G(e(a)), m({ href: t.href }, s.$attrs), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["href"]));
  }
}), ur = {
  role: "navigation",
  "aria-label": "Pagination",
  class: "flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2"
}, pr = { class: "text-sm text-muted-foreground" }, fr = { class: "font-medium" }, mr = { class: "font-medium" }, gr = { class: "font-medium" }, _r = { class: "flex items-center gap-1" }, yr = /* @__PURE__ */ i({
  __name: "LengthAwarePaginator",
  props: {
    paginator: {}
  },
  setup(t) {
    return (a, s) => (r(), y("nav", ur, [
      C("p", pr, [
        s[0] || (s[0] = k(" Showing ", -1)),
        C("span", fr, j((t.paginator.from ?? 0).toLocaleString()), 1),
        s[1] || (s[1] = k(" to ", -1)),
        C("span", mr, j((t.paginator.to ?? 0).toLocaleString()), 1),
        s[2] || (s[2] = k(" of ", -1)),
        C("span", gr, j(t.paginator.total.toLocaleString()), 1),
        s[3] || (s[3] = k(" results ", -1))
      ]),
      C("div", _r, [
        (r(), p(G(t.paginator.prev_page_url ? X : "span"), {
          href: t.paginator.prev_page_url ?? void 0,
          class: b(
            e(u)(
              e(M)({ variant: "ghost", size: "icon-sm" }),
              !t.paginator.prev_page_url && "pointer-events-none opacity-50"
            )
          ),
          "aria-label": "Previous page"
        }, {
          default: c(() => [
            g(e(le), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "class"])),
        (r(!0), y(I, null, R(t.paginator.links, (o, n) => (r(), y(I, { key: n }, [
          n !== 0 && n !== t.paginator.links.length - 1 ? (r(), y(I, { key: 0 }, [
            o.label === "..." ? (r(), y("span", {
              key: 0,
              class: b(
                e(u)(e(M)({ variant: "ghost", size: "icon-sm" }), "pointer-events-none")
              )
            }, [
              g(e(wn), { class: "size-4" })
            ], 2)) : (r(), p(G(o.url ? X : "span"), {
              key: 1,
              href: o.url ?? void 0,
              class: b(
                e(u)(
                  e(M)({ variant: o.active ? "outline" : "ghost", size: "icon-sm" }),
                  !o.url && "pointer-events-none opacity-50"
                )
              ),
              "aria-current": o.active ? "page" : void 0
            }, {
              default: c(() => [
                k(j(o.label), 1)
              ]),
              _: 2
            }, 1032, ["href", "class", "aria-current"]))
          ], 64)) : V("", !0)
        ], 64))), 128)),
        (r(), p(G(t.paginator.next_page_url ? X : "span"), {
          href: t.paginator.next_page_url ?? void 0,
          class: b(
            e(u)(
              e(M)({ variant: "ghost", size: "icon-sm" }),
              !t.paginator.next_page_url && "pointer-events-none opacity-50"
            )
          ),
          "aria-label": "Next page"
        }, {
          default: c(() => [
            g(e(ie), { class: "size-4" })
          ]),
          _: 1
        }, 8, ["href", "class"]))
      ])
    ]));
  }
}), br = {
  role: "navigation",
  "aria-label": "Pagination",
  class: "flex w-full items-center justify-between"
}, hr = /* @__PURE__ */ i({
  __name: "CursorPaginator",
  props: {
    paginator: {}
  },
  setup(t) {
    return (a, s) => (r(), y("nav", br, [
      (r(), p(G(t.paginator.prev_page_url ? X : "span"), {
        href: t.paginator.prev_page_url ?? void 0,
        class: b(
          e(u)(
            e(M)({ variant: "outline", size: "sm" }),
            !t.paginator.prev_page_url && "pointer-events-none opacity-50"
          )
        )
      }, {
        default: c(() => [
          g(e(le), { class: "size-4" }),
          s[0] || (s[0] = k(" Previous ", -1))
        ]),
        _: 1
      }, 8, ["href", "class"])),
      (r(), p(G(t.paginator.next_page_url ? X : "span"), {
        href: t.paginator.next_page_url ?? void 0,
        class: b(
          e(u)(
            e(M)({ variant: "outline", size: "sm" }),
            !t.paginator.next_page_url && "pointer-events-none opacity-50"
          )
        )
      }, {
        default: c(() => [
          s[1] || (s[1] = k(" Next ", -1)),
          g(e(ie), { class: "size-4" })
        ]),
        _: 1
      }, 8, ["href", "class"]))
    ]));
  }
}), Ic = /* @__PURE__ */ i({
  __name: "LaravelPaginator",
  props: {
    paginator: {}
  },
  setup(t) {
    const a = t, s = T(() => !("last_page" in a.paginator));
    return (o, n) => s.value ? (r(), p(hr, {
      key: 1,
      paginator: t.paginator
    }, null, 8, ["paginator"])) : (r(), p(yr, {
      key: 0,
      paginator: t.paginator
    }, null, 8, ["paginator"]));
  }
}), H = (t, a) => {
  const s = t.__vccOpts || t;
  for (const [o, n] of a)
    s[o] = n;
  return s;
}, vr = {}, xr = { class: "h-full bg-background dark:text-white" };
function Br(t, a) {
  return r(), y("div", xr, [
    d(t.$slots, "default")
  ]);
}
const zc = /* @__PURE__ */ H(vr, [["render", Br]]), wr = {}, $r = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function Cr(t, a) {
  return r(), y("header", $r, [
    d(t.$slots, "default")
  ]);
}
const Fc = /* @__PURE__ */ H(wr, [["render", Cr]]), Sr = {}, Ar = { class: "px-4 py-6 sm:px-6 lg:px-8 lg:pl-72" };
function Or(t, a) {
  return r(), y("main", Ar, [
    d(t.$slots, "default")
  ]);
}
const Vc = /* @__PURE__ */ H(Sr, [["render", Or]]), Pr = {};
function jr(t, a) {
  return d(t.$slots, "default");
}
const Rc = /* @__PURE__ */ H(Pr, [["render", jr]]), kr = {}, Dr = { class: "hidden px-6 py-6 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, Tr = { class: "gap-y-5 overflow-y-auto" };
function Mr(t, a) {
  return r(), y("div", Dr, [
    C("div", Tr, [
      d(t.$slots, "default")
    ])
  ]);
}
const Lc = /* @__PURE__ */ H(kr, [["render", Mr]]), Ir = {};
function zr(t, a) {
  return d(t.$slots, "default");
}
const Ec = /* @__PURE__ */ H(Ir, [["render", zr]]), Fr = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, Gc = /* @__PURE__ */ i({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(t) {
    return (a, s) => (r(), y("button", Fr, [
      s[0] || (s[0] = C("span", { class: "sr-only" }, "Open sidebar", -1)),
      g(e($n), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), Ge = "sidebar_state", Vr = 3600 * 24 * 7, Rr = "18rem", Lr = "3rem", Hc = "18rem", Er = "b", [te, Gr] = re("CollapsibleTwoColumnLayout"), Hr = ["data-state", "data-collapsible"], Nc = /* @__PURE__ */ i({
  __name: "CollapsibleTwoColumnLayout",
  props: {
    defaultOpen: { type: Boolean, default: !Je?.cookie.includes(`${Ge}=false`) },
    open: { type: Boolean, default: void 0 },
    collapsible: { default: "icon" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = oe("(max-width: 1023px)"), l = F(!1), f = ne(s, "open", o, {
      defaultValue: s.defaultOpen ?? !0,
      passive: s.open === void 0
    });
    function h(S) {
      f.value = S, s.collapsible !== "none" && (document.cookie = `${Ge}=${f.value}; path=/; max-age=${Vr}`);
    }
    function B(S) {
      l.value = S;
    }
    function A() {
      return n.value ? B(!l.value) : h(!f.value);
    }
    s.collapsible !== "none" && Ze("keydown", (S) => {
      S.key === Er && (S.metaKey || S.ctrlKey) && (S.preventDefault(), A());
    });
    const O = T(() => f.value ? "expanded" : "collapsed");
    return Gr({
      state: O,
      open: f,
      setOpen: h,
      isMobile: n,
      openMobile: l,
      setOpenMobile: B,
      toggleSidebar: A,
      collapsible: s.collapsible
    }), (S, P) => (r(), p(e(Ae), { "delay-duration": 0 }, {
      default: c(() => [
        C("div", m({
          style: {
            "--collapsible-sidebar-width": e(Rr),
            "--collapsible-sidebar-width-icon": e(Lr)
          },
          class: e(u)("group/collapsible-layout h-full bg-background dark:text-white", s.class),
          "data-state": O.value,
          "data-collapsible": t.collapsible
        }, S.$attrs), [
          d(S.$slots, "default")
        ], 16, Hr)
      ]),
      _: 3
    }));
  }
}), Nr = ["data-state", "data-collapsible"], Kr = { class: "flex-1 overflow-y-auto" }, Kc = /* @__PURE__ */ i({
  __name: "CollapsibleSidebarDesktop",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = te(), l = T(() => n === "icon" && s.value === "collapsed");
    return (f, h) => e(o) ? V("", !0) : (r(), y("div", {
      key: 0,
      class: b(
        e(u)(
          "fixed inset-y-0 top-16 z-50 flex flex-col px-6 py-6 transition-[width] duration-200 ease-linear",
          l.value ? "w-[var(--collapsible-sidebar-width-icon)] px-2" : "w-[var(--collapsible-sidebar-width)]",
          a.class
        )
      ),
      "data-state": e(s),
      "data-collapsible": e(n)
    }, [
      C("div", Kr, [
        d(f.$slots, "default")
      ])
    ], 10, Nr));
  }
}), Ur = ["data-state"], Uc = /* @__PURE__ */ i({
  __name: "CollapsibleMain",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = te(), l = T(() => n === "icon" && s.value === "collapsed");
    return (f, h) => (r(), y("main", {
      class: b(
        e(u)(
          "px-4 py-6 transition-[padding-left] duration-200 ease-linear sm:px-6 lg:px-8",
          !e(o) && (l.value ? "lg:pl-[var(--collapsible-sidebar-width-icon)]" : "lg:pl-[var(--collapsible-sidebar-width)]"),
          a.class
        )
      ),
      "data-state": e(s)
    }, [
      d(f.$slots, "default")
    ], 10, Ur));
  }
}), qc = /* @__PURE__ */ i({
  __name: "CollapsibleSidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { toggleSidebar: s, collapsible: o } = te();
    return (n, l) => e(o) !== "none" ? (r(), p(e(q), {
      key: 0,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: b(e(u)("h-7 w-7", a.class)),
      onClick: e(s)
    }, {
      default: c(() => [
        g(e(ct), { class: "h-5 w-5" }),
        l[0] || (l[0] = C("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"])) : V("", !0);
  }
}), Wc = /* @__PURE__ */ i({
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
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(qr), null, {
      default: c(() => [
        g(e(ze), w($(e(n))), {
          default: c(() => [
            g(e(Ve), {
              class: b(t.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: c(() => [
                d(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            g(e(Fe), w($(l.$attrs)), {
              default: c(() => [
                d(l.$slots, "tooltip", {}, () => [
                  k(j(t.tooltip), 1)
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
}), ze = /* @__PURE__ */ i({
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
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Zt), m({ "data-slot": "tooltip" }, e(n)), {
      default: c((h) => [
        d(l.$slots, "default", w($(h)))
      ]),
      _: 3
    }, 16));
  }
}), Fe = /* @__PURE__ */ i({
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
    positionStrategy: {},
    updatePositionStrategy: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Jt), null, {
      default: c(() => [
        g(e(Qt), m({ "data-slot": "tooltip-content" }, { ...e(l), ...f.$attrs }, {
          class: e(u)(
            "z-50 w-fit animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default"),
            g(e(ea), { class: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), qr = /* @__PURE__ */ i({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 0 },
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean },
    content: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Ae), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ve = /* @__PURE__ */ i({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ta), m({ "data-slot": "tooltip-trigger" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wr = ["data-active", "data-collapsed"], Yr = ["data-active", "data-collapsed"], Yc = /* @__PURE__ */ i({
  __name: "CollapsibleMenuButton",
  props: {
    tooltip: {},
    active: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = te(), l = T(() => n === "icon" && s.value === "collapsed"), f = T(() => a.tooltip && l.value && !o.value);
    return (h, B) => f.value ? (r(), p(e(ze), { key: 0 }, {
      default: c(() => [
        g(e(Ve), { "as-child": "" }, {
          default: c(() => [
            C("button", {
              type: "button",
              class: b(
                e(u)(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  t.active && "bg-accent text-accent-foreground",
                  l.value && "justify-center px-2",
                  a.class
                )
              ),
              "data-active": t.active,
              "data-collapsed": l.value
            }, [
              d(h.$slots, "default")
            ], 10, Wr)
          ]),
          _: 3
        }),
        g(e(Fe), {
          side: "right",
          align: "center"
        }, {
          default: c(() => [
            typeof t.tooltip == "string" ? (r(), y(I, { key: 0 }, [
              k(j(t.tooltip), 1)
            ], 64)) : (r(), p(G(t.tooltip), { key: 1 }))
          ]),
          _: 1
        })
      ]),
      _: 3
    })) : (r(), y("button", {
      key: 1,
      type: "button",
      class: b(
        e(u)(
          "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          t.active && "bg-accent text-accent-foreground",
          l.value && "justify-center px-2",
          a.class
        )
      ),
      "data-active": t.active,
      "data-collapsed": l.value
    }, [
      d(h.$slots, "default")
    ], 10, Yr));
  }
}), Xr = {
  key: 0,
  class: "mb-2 block px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
}, Xc = /* @__PURE__ */ i({
  __name: "CollapsibleMenuGroup",
  props: {
    label: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = te(), l = T(
      () => n === "icon" && s.value === "collapsed" && !o.value
    );
    return (f, h) => (r(), y("div", {
      class: b(e(u)("space-y-1", a.class))
    }, [
      t.label && !l.value ? (r(), y("span", Xr, j(t.label), 1)) : V("", !0),
      d(f.$slots, "default")
    ], 2));
  }
});
function Zr(t, a) {
  return Object.entries(t).map(([s, o]) => a === "key" ? s : a === "both" ? `${s}: ${o}` : o).join(`
`);
}
function Jr() {
  return {
    info: (t, a) => {
      W.info("FYI", {
        description: t,
        ...a
      });
    },
    success: (t, a) => {
      W.success("Success", {
        description: t,
        ...a
      });
    },
    warning: (t, a) => {
      W.warning("Warning", {
        description: t,
        ...a
      });
    },
    error: (t, a = "value", s) => {
      W.error("Oh snap! Some errors were encountered.", {
        description: Zr(t, a),
        ...s
      });
    },
    flash: (t, a) => {
      W(t, a);
    }
  };
}
const Zc = /* @__PURE__ */ i({
  __name: "Flasher",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    info: {},
    success: {},
    warning: {},
    errors: {},
    objectFormat: { default: "value" }
  },
  setup(t) {
    const a = t, {
      info: s,
      success: o,
      warning: n,
      error: l
    } = Jr();
    return Y(
      () => a.info,
      (f) => {
        f && s(a.info);
      },
      {
        immediate: !0
      }
    ), Y(
      () => a.success,
      (f) => {
        f && o(a.success);
      },
      { immediate: !0 }
    ), Y(
      () => a.warning,
      (f) => {
        f && n(a.warning);
      },
      { immediate: !0 }
    ), Y(
      () => a.errors,
      () => {
        a.errors !== void 0 && Object.keys(a.errors).length > 0 && l(a.errors, a.objectFormat);
      }
    ), (f, h) => (r(), p(e(bt), {
      class: b(e(u)("toaster group", a.class)),
      "toast-options": {
        classes: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground group-[.toast]:whitespace-pre-line",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }
    }, {
      "success-icon": c(() => [
        g(e(mt), { class: "size-4 text-success" })
      ]),
      "info-icon": c(() => [
        g(e(ft), { class: "size-4 text-primary" })
      ]),
      "warning-icon": c(() => [
        g(e(pt), { class: "size-4 text-warning" })
      ]),
      "error-icon": c(() => [
        g(e(ut), { class: "size-4 text-destructive" })
      ]),
      "loading-icon": c(() => [
        C("div", null, [
          g(e(De), { class: "size-4 animate-spin" })
        ])
      ]),
      "close-icon": c(() => [
        g(e(dt), { class: "size-4" })
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Qr = { class: "flex items-center justify-between space-y-2" }, el = { class: "flex items-center space-x-2" }, Jc = /* @__PURE__ */ i({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", Qr, [
      (r(), p(G(t.as), {
        class: b(e(u)("text-3xl font-bold tracking-tight", a.class))
      }, {
        default: c(() => [
          d(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      C("div", el, [
        d(s.$slots, "actions")
      ])
    ]));
  }
}), tl = /* @__PURE__ */ i({
  __name: "Accordion",
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(aa), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qc = /* @__PURE__ */ i({
  __name: "Accord",
  props: {
    content: {},
    collapsible: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: { default: "single" },
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(tl, w($(e(n))), {
      default: c(() => [
        (r(!0), y(I, null, R(t.content, (h, B) => (r(), p(e(sl), {
          key: B,
          value: "item-" + B
        }, {
          default: c(() => [
            g(e(ol), null, {
              default: c(() => [
                d(l.$slots, B + ".title", { item: h }, () => [
                  k(j(h.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            g(e(al), null, {
              default: c(() => [
                d(l.$slots, B + ".content", { item: h }, () => [
                  k(j(h.content), 1)
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
}), al = /* @__PURE__ */ i({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(sa), m(e(s), { class: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: c(() => [
        C("div", {
          class: b(e(u)("pt-0 pb-4", a.class))
        }, [
          d(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), sl = /* @__PURE__ */ i({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(oa), m(e(o), {
      class: e(u)("border-b", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ol = /* @__PURE__ */ i({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(na), { class: "flex" }, {
      default: c(() => [
        g(e(ra), m(e(s), {
          class: e(u)(
            "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            a.class
          )
        }), {
          default: c(() => [
            d(o.$slots, "default"),
            d(o.$slots, "icon", {}, () => [
              g(e(ce), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), At = /* @__PURE__ */ i({
  __name: "NumberField",
  props: {
    defaultValue: {},
    modelValue: {},
    min: {},
    max: {},
    step: {},
    stepSnapping: { type: Boolean },
    focusOnChange: { type: Boolean },
    formatOptions: {},
    locale: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    disableWheelChange: { type: Boolean },
    invertWheelChange: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(la), m(e(l), {
      class: e(u)("grid gap-1.5", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ot = /* @__PURE__ */ i({
  __name: "NumberFieldContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(
        e(u)(
          "relative [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5 [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ed = /* @__PURE__ */ i({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ia), m({ "data-slot": "decrement" }, e(o), {
      class: e(u)(
        "absolute top-1/2 left-0 -translate-y-1/2 p-3 disabled:cursor-not-allowed disabled:opacity-20",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(gt), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), td = /* @__PURE__ */ i({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ca), m({ "data-slot": "increment" }, e(o), {
      class: e(u)(
        "absolute top-1/2 right-0 -translate-y-1/2 p-3 disabled:cursor-not-allowed disabled:opacity-20",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(Cn), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pt = /* @__PURE__ */ i({
  __name: "NumberFieldInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(da), {
      "data-slot": "input",
      class: b(
        e(u)(
          "flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-center text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          a.class
        )
      )
    }, null, 8, ["class"]));
  }
}), ad = /* @__PURE__ */ i({
  __name: "Number",
  props: /* @__PURE__ */ Q({
    min: {},
    max: {},
    step: { default: 1 },
    integer: { type: Boolean },
    disabled: { type: Boolean },
    locale: {},
    formatOptions: {},
    placeholder: {},
    class: { type: [Boolean, null, String, Object, Array] }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const a = t, s = J(t, "modelValue"), o = T(() => a.integer ? { ...a.formatOptions ?? {}, maximumFractionDigits: 0 } : a.formatOptions);
    return (n, l) => (r(), p(e(At), {
      modelValue: s.value,
      "onUpdate:modelValue": l[0] || (l[0] = (f) => s.value = f),
      min: t.min,
      max: t.max,
      step: t.step,
      disabled: t.disabled,
      locale: t.locale,
      "format-options": o.value,
      class: b(n.$props.class)
    }, {
      default: c(() => [
        g(e(Ot), null, {
          default: c(() => [
            g(e(Pt), { placeholder: t.placeholder }, null, 8, ["placeholder"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "min", "max", "step", "disabled", "locale", "format-options", "class"]));
  }
}), sd = /* @__PURE__ */ i({
  __name: "Price",
  props: /* @__PURE__ */ Q({
    currency: { default: "AUD" },
    locale: { default: "en-AU" },
    min: { default: 0 },
    max: {},
    step: { default: 0.01 },
    disabled: { type: Boolean },
    placeholder: {},
    class: { type: [Boolean, null, String, Object, Array] }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const a = t, s = J(t, "modelValue"), o = T(() => ({
      style: "currency",
      currency: a.currency,
      currencyDisplay: "symbol"
    }));
    return (n, l) => (r(), p(e(At), {
      modelValue: s.value,
      "onUpdate:modelValue": l[0] || (l[0] = (f) => s.value = f),
      min: t.min,
      max: t.max,
      step: t.step,
      disabled: t.disabled,
      locale: t.locale,
      "format-options": o.value,
      class: b(n.$props.class)
    }, {
      default: c(() => [
        g(e(Ot), null, {
          default: c(() => [
            g(e(Pt), { placeholder: t.placeholder }, null, 8, ["placeholder"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "min", "max", "step", "disabled", "locale", "format-options", "class"]));
  }
}), od = /* @__PURE__ */ i({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)(e(nl)({ variant: t.variant }), a.class)),
      role: "alert"
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), nd = /* @__PURE__ */ i({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("text-sm [&_p]:leading-relaxed", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), rd = /* @__PURE__ */ i({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("h5", {
      class: b(e(u)("mb-1 leading-none font-medium tracking-tight", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), nl = L(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ld = /* @__PURE__ */ i({
  __name: "AspectRatio",
  props: {
    ratio: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ua), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), id = /* @__PURE__ */ i({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(pa), {
      class: b(e(u)(e(rl)({ size: t.size, shape: t.shape }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cd = /* @__PURE__ */ i({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(fa), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dd = /* @__PURE__ */ i({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ma), m(a, { class: "h-full w-full object-cover" }), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rl = L(
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
), ud = /* @__PURE__ */ i({
  __name: "Badge",
  props: {
    variant: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)(e(ll)({ variant: t.variant }), a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ll = L(
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
), pd = /* @__PURE__ */ i({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("nav", {
      "aria-label": "breadcrumb",
      class: b(a.class)
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), fd = /* @__PURE__ */ i({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: b(e(u)("flex h-9 w-9 items-center justify-center", a.class))
    }, [
      d(s.$slots, "default", {}, () => [
        g(e(_t), { class: "h-4 w-4" })
      ]),
      o[0] || (o[0] = C("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), md = /* @__PURE__ */ i({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("li", {
      class: b(e(u)("inline-flex items-center gap-1.5", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), gd = /* @__PURE__ */ i({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      as: t.as,
      "as-child": t.asChild,
      class: b(e(u)("transition-colors hover:text-foreground", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), _d = /* @__PURE__ */ i({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("ol", {
      class: b(
        e(u)(
          "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), yd = /* @__PURE__ */ i({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: b(e(u)("font-normal text-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), bd = /* @__PURE__ */ i({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: b(e(u)("[&>svg]:size-3.5", a.class))
    }, [
      d(s.$slots, "default", {}, () => [
        g(e(K))
      ])
    ], 2));
  }
}), il = ["data-orientation"], hd = /* @__PURE__ */ i({
  __name: "ButtonGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    orientation: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": a.orientation,
      class: b(e(u)(e(cl)({ orientation: a.orientation }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, il));
  }
}), ue = /* @__PURE__ */ i({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Qe), m({ "data-slot": "separator" }, e(s), {
      class: e(u)(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        a.class
      )
    }), null, 16, ["class"]));
  }
}), vd = /* @__PURE__ */ i({
  __name: "ButtonGroupSeparator",
  props: {
    orientation: { default: "vertical" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(ue), m({ "data-slot": "button-group-separator" }, e(s), {
      orientation: a.orientation,
      class: e(u)("relative !m-0 self-stretch bg-input data-[orientation=vertical]:h-auto", a.class)
    }), null, 16, ["orientation", "class"]));
  }
}), xd = /* @__PURE__ */ i({
  __name: "ButtonGroupText",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    orientation: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": a.orientation,
      as: t.as,
      "as-child": t.asChild,
      class: b(
        e(u)(
          "flex items-center gap-2 rounded-md border bg-muted px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          a.class
        )
      )
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-orientation", "as", "as-child", "class"]));
  }
}), cl = L(
  "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*:focus-visible]:relative [&>*:focus-visible]:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
), dl = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, ul = /* @__PURE__ */ i({
  __name: "Calendar",
  props: {
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: {},
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    modelValue: {},
    multiple: { type: Boolean },
    disableDaysOutsideCurrentView: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(ga), m({
      class: e(u)("p-3", s.class)
    }, e(l)), {
      default: c(({ grid: B, weekDays: A }) => [
        g(e(bl), null, {
          default: c(() => [
            g(e(xl)),
            g(e(hl)),
            g(e(vl))
          ]),
          _: 1
        }),
        C("div", dl, [
          (r(!0), y(I, null, R(B, (O) => (r(), p(e(ml), {
            key: O.value.toString()
          }, {
            default: c(() => [
              g(e(_l), null, {
                default: c(() => [
                  g(e(He), null, {
                    default: c(() => [
                      (r(!0), y(I, null, R(A, (S) => (r(), p(e(yl), { key: S }, {
                        default: c(() => [
                          k(j(S), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              g(e(gl), null, {
                default: c(() => [
                  (r(!0), y(I, null, R(O.rows, (S, P) => (r(), p(e(He), {
                    key: `weekDate-${P}`,
                    class: "mt-2 w-full"
                  }, {
                    default: c(() => [
                      (r(!0), y(I, null, R(S, (D) => (r(), p(e(pl), {
                        key: D.toString(),
                        date: D
                      }, {
                        default: c(() => [
                          g(e(fl), {
                            day: D,
                            month: O.value
                          }, null, 8, ["day", "month"])
                        ]),
                        _: 2
                      }, 1032, ["date"]))), 128))
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), pl = /* @__PURE__ */ i({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(_a), m({
      class: e(u)(
        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:bg-accent/50",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fl = /* @__PURE__ */ i({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ya), m({
      class: e(u)(
        e(M)({ variant: "ghost" }),
        "h-8 w-8 p-0 font-normal",
        "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
        // Selected
        "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground",
        // Disabled
        "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
        // Unavailable
        "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through",
        // Outside months
        "data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ml = /* @__PURE__ */ i({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ba), m({
      class: e(u)("w-full border-collapse space-y-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gl = /* @__PURE__ */ i({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ha), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _l = /* @__PURE__ */ i({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(va), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), He = /* @__PURE__ */ i({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(xa), m({
      class: e(u)("flex", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yl = /* @__PURE__ */ i({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ba), m({
      class: e(u)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bl = /* @__PURE__ */ i({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(wa), m({
      class: e(u)("relative flex w-full items-center justify-between pt-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hl = /* @__PURE__ */ i({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e($a), m({
      class: e(u)("text-sm font-medium", a.class)
    }, e(o)), {
      default: c(({ headingValue: f }) => [
        d(n.$slots, "default", { headingValue: f }, () => [
          k(j(f), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vl = /* @__PURE__ */ i({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ca), m({
      class: e(u)(
        e(M)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(K), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xl = /* @__PURE__ */ i({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Sa), m({
      class: e(u)(
        e(M)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(yt), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bl = /* @__PURE__ */ i({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("rounded-xl border bg-card text-card-foreground shadow", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), wl = /* @__PURE__ */ i({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("p-6 pt-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Bd = /* @__PURE__ */ i({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("p", {
      class: b(e(u)("text-sm text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), wd = /* @__PURE__ */ i({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("flex items-center p-6 pt-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), $l = /* @__PURE__ */ i({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("flex flex-col gap-y-1.5 p-6", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Cl = /* @__PURE__ */ i({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("h3", {
      class: b(e(u)("leading-none font-semibold tracking-tight", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), [Sl, Al] = Lt(
  ({ opts: t, orientation: a, plugins: s }, o) => {
    const [n, l] = Tn(
      {
        ...t,
        axis: a === "horizontal" ? "x" : "y"
      },
      s
    );
    function f() {
      l.value?.scrollPrev();
    }
    function h() {
      l.value?.scrollNext();
    }
    const B = F(!1), A = F(!1);
    function O(S) {
      B.value = S?.canScrollNext() || !1, A.value = S?.canScrollPrev() || !1;
    }
    return N(() => {
      l.value && (l.value?.on("init", O), l.value?.on("reInit", O), l.value?.on("select", O), o("init-api", l.value));
    }), {
      carouselRef: n,
      carouselApi: l,
      canScrollPrev: A,
      canScrollNext: B,
      scrollPrev: f,
      scrollNext: h,
      orientation: a
    };
  }
);
function pe() {
  const t = Al();
  if (!t) throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const $d = /* @__PURE__ */ i({
  __name: "Carousel",
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["init-api"],
  setup(t, { expose: a, emit: s }) {
    const o = t, n = s, {
      canScrollNext: l,
      canScrollPrev: f,
      carouselApi: h,
      carouselRef: B,
      orientation: A,
      scrollNext: O,
      scrollPrev: S
    } = Sl(o, n);
    a({
      canScrollNext: l,
      canScrollPrev: f,
      carouselApi: h,
      carouselRef: B,
      orientation: A,
      scrollNext: O,
      scrollPrev: S
    });
    function P(D) {
      const z = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", ae = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (D.key === z) {
        D.preventDefault(), S();
        return;
      }
      D.key === ae && (D.preventDefault(), O());
    }
    return (D, z) => (r(), y("div", {
      class: b(e(u)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: P
    }, [
      d(D.$slots, "default", {
        canScrollNext: e(l),
        canScrollPrev: e(f),
        carouselApi: e(h),
        carouselRef: e(B),
        orientation: e(A),
        scrollNext: e(O),
        scrollPrev: e(S)
      })
    ], 34));
  }
}), Cd = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { carouselRef: s, orientation: o } = pe();
    return (n, l) => (r(), y("div", {
      ref_key: "carouselRef",
      ref: s,
      class: "overflow-hidden"
    }, [
      C("div", m({
        class: e(u)("flex", e(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", a.class)
      }, n.$attrs), [
        d(n.$slots, "default")
      ], 16)
    ], 512));
  }
}), Sd = /* @__PURE__ */ i({
  __name: "CarouselItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { orientation: s } = pe();
    return (o, n) => (r(), y("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: b(
        e(u)(
          "min-w-0 shrink-0 grow-0 basis-full",
          e(s) === "horizontal" ? "pl-4" : "pt-4",
          a.class
        )
      )
    }, [
      d(o.$slots, "default")
    ], 2));
  }
}), Ad = /* @__PURE__ */ i({
  __name: "CarouselPrevious",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { orientation: s, canScrollPrev: o, scrollPrev: n } = pe();
    return (l, f) => (r(), p(e(q), {
      disabled: !e(o),
      class: b(
        e(u)(
          "absolute size-8 touch-manipulation rounded-full p-0",
          e(s) === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          a.class
        )
      ),
      variant: "outline",
      onClick: e(n)
    }, {
      default: c(() => [
        d(l.$slots, "default", {}, () => [
          g(e(Sn), { class: "size-4 text-current" }),
          f[0] || (f[0] = C("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Od = /* @__PURE__ */ i({
  __name: "CarouselNext",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { orientation: s, canScrollNext: o, scrollNext: n } = pe();
    return (l, f) => (r(), p(e(q), {
      disabled: !e(o),
      class: b(
        e(u)(
          "absolute size-8 touch-manipulation rounded-full p-0",
          e(s) === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          a.class
        )
      ),
      variant: "outline",
      onClick: e(n)
    }, {
      default: c(() => [
        d(l.$slots, "default", {}, () => [
          g(e(An), { class: "size-4 text-current" }),
          f[0] || (f[0] = C("span", { class: "sr-only" }, "Next Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Pd = /* @__PURE__ */ i({
  __name: "ChartCrosshair",
  props: {
    colors: { default: () => [] },
    index: {},
    items: {},
    customTooltip: {}
  },
  setup(t) {
    const a = t, s = /* @__PURE__ */ new WeakMap();
    function o(l) {
      if (s.has(l))
        return s.get(l);
      {
        const f = document.createElement("div"), h = Object.entries(ht(l, [a.index])).map(([A, O]) => ({ ...a.items.find((P) => P.name === A), value: O })), B = a.customTooltip ?? we;
        return Be(B, { title: l[a.index].toString(), data: h }).mount(
          f
        ), s.set(l, f.innerHTML), f.innerHTML;
      }
    }
    function n(l, f) {
      return a.colors[f] ?? "transparent";
    }
    return (l, f) => (r(), y(I, null, [
      g(e(vt), {
        "horizontal-shift": 20,
        "vertical-shift": 20
      }),
      g(e(In), {
        template: o,
        color: n
      })
    ], 64));
  }
}), jd = /* @__PURE__ */ i({
  __name: "ChartLegend",
  props: {
    items: { default: () => [] }
  },
  emits: ["legendItemClick", "update:items"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = F();
    function l() {
      const h = `.${Mn.selectors.item}`;
      zt(() => {
        const B = n.value?.querySelectorAll(h), A = M({ variant: "ghost", size: "xs" }).split(" ");
        B?.forEach((O) => O.classList.add(...A, "!inline-flex", "!mr-2"));
      });
    }
    N(() => {
      l();
    });
    function f(h, B) {
      o("legendItemClick", h, B);
      const A = s.items[B], O = A ? !A.inactive : !0;
      s.items.some((P) => P.inactive) && O ? o(
        "update:items",
        s.items.map((P) => ({ ...P, inactive: !1 }))
      ) : o(
        "update:items",
        s.items.map(
          (P) => P.name === h.name ? { ...h, inactive: !1 } : { ...P, inactive: !0 }
        )
      ), l();
    }
    return (h, B) => (r(), y("div", {
      ref_key: "elRef",
      ref: n,
      class: "w-max",
      style: {
        "--vis-legend-bullet-size": "16px"
      }
    }, [
      g(e(zn), {
        items: t.items,
        "on-legend-item-click": f
      }, null, 8, ["items"])
    ], 512));
  }
}), kd = /* @__PURE__ */ i({
  __name: "ChartSingleTooltip",
  props: {
    selector: {},
    index: {},
    items: {},
    valueFormatter: { type: Function },
    customTooltip: {}
  },
  setup(t) {
    const a = t, s = /* @__PURE__ */ new WeakMap();
    function o(n, l, f) {
      const h = a.valueFormatter ?? ((B) => `${B}`);
      if (a.index in n) {
        if (s.has(n))
          return s.get(n);
        {
          const B = document.createElement("div"), A = Object.entries(ht(n, [a.index])).map(([S, P]) => ({ ...a.items?.find((z) => z.name === S), value: h(P) })), O = a.customTooltip ?? we;
          return Be(O, { title: n[a.index], data: A }).mount(B), s.set(n, B.innerHTML), B.innerHTML;
        }
      } else {
        const B = n.data;
        if (s.has(B))
          return s.get(B);
        {
          const A = f[l];
          if (!A) return "";
          const O = getComputedStyle(A), S = [
            { name: B.name, value: h(B[a.index]), color: O.fill }
          ], P = document.createElement("div"), D = a.customTooltip ?? we;
          return Be(D, { title: n[a.index], data: S }).mount(P), s.set(n, P.innerHTML), P.innerHTML;
        }
      }
    }
    return (n, l) => (r(), p(e(vt), {
      "horizontal-shift": 20,
      "vertical-shift": 20,
      triggers: {
        [t.selector]: o
      }
    }, null, 8, ["triggers"]));
  }
}), Ol = { class: "flex items-center" }, Pl = { class: "mr-2 h-2.5 w-2.5" }, jl = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 30 30"
}, kl = ["stroke", "fill"], Dl = { class: "ml-4 font-semibold" }, we = /* @__PURE__ */ i({
  __name: "ChartTooltip",
  props: {
    title: {},
    data: {}
  },
  setup(t) {
    return (a, s) => (r(), p(e(Bl), { class: "text-sm" }, {
      default: c(() => [
        t.title ? (r(), p(e($l), {
          key: 0,
          class: "border-b p-3"
        }, {
          default: c(() => [
            g(e(Cl), null, {
              default: c(() => [
                k(j(t.title), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : V("", !0),
        g(e(wl), { class: "flex min-w-[180px] flex-col gap-1 p-3" }, {
          default: c(() => [
            (r(!0), y(I, null, R(t.data, (o, n) => (r(), y("div", {
              key: n,
              class: "flex justify-between"
            }, [
              C("div", Ol, [
                C("span", Pl, [
                  (r(), y("svg", jl, [
                    C("path", {
                      d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                      stroke: o.color,
                      fill: o.color,
                      "stroke-width": "1"
                    }, null, 8, kl)
                  ]))
                ]),
                C("span", null, j(o.name), 1)
              ]),
              C("span", Dl, j(o.value), 1)
            ]))), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
function Dd(t = 3) {
  const a = Math.floor(t / 2), s = t % 2, o = a + s, n = a;
  return [
    ...Array.from(new Array(o).keys()).map(
      (l) => `hsl(var(--vis-primary-color) / ${1 - 1 / o * l})`
    ),
    ...Array.from(new Array(n).keys()).map(
      (l) => `hsl(var(--vis-secondary-color) / ${1 - 1 / n * l})`
    )
  ];
}
const Td = /* @__PURE__ */ i({
  __name: "Checkbox",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    value: {},
    id: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = T(() => {
      const { class: f, ...h } = s;
      return h;
    }), l = v(n, o);
    return (f, h) => (r(), p(e(Aa), m(e(l), {
      class: e(u)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        s.class
      )
    }), {
      default: c(() => [
        g(e(Oa), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: c(() => [
            d(f.$slots, "default", {}, () => [
              g(e(U), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Md = /* @__PURE__ */ i({
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
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Pa), w($(e(n))), {
      default: c(({ open: h }) => [
        d(l.$slots, "default", { open: h })
      ]),
      _: 3
    }, 16));
  }
}), Id = /* @__PURE__ */ i({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ja), m(a, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zd = /* @__PURE__ */ i({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ka), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fd = /* @__PURE__ */ i({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    resetModelValueOnClear: { type: Boolean },
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
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Da), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vd = /* @__PURE__ */ i({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ta), m(e(o), {
      class: e(u)("w-[200px]", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rd = /* @__PURE__ */ i({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ma), m(e(s), {
      class: e(u)("py-6 text-center text-sm", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ld = /* @__PURE__ */ i({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    heading: {}
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ia), m(e(s), {
      class: e(u)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        a.class
      )
    }), {
      default: c(() => [
        t.heading ? (r(), p(e(za), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: c(() => [
            k(j(t.heading), 1)
          ]),
          _: 1
        })) : V("", !0),
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ed = /* @__PURE__ */ i({
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Fa), m(e(l), {
      class: e(u)(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gd = /* @__PURE__ */ i({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Va), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hd = /* @__PURE__ */ i({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    hideWhenEmpty: { type: Boolean },
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
    hideShiftedArrow: { type: Boolean },
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
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Ra), null, {
      default: c(() => [
        g(e(La), m(e(l), {
          class: e(u)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            s.class
          )
        }), {
          default: c(() => [
            g(e(Ea), null, {
              default: c(() => [
                d(f.$slots, "default")
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
}), Nd = /* @__PURE__ */ i({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ga), m(e(s), {
      class: e(u)("-mx-1 h-px bg-border", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tl = /* @__PURE__ */ i({
  __name: "Command",
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: {},
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: {},
    highlightOnHover: { type: Boolean },
    by: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o), f = F(/* @__PURE__ */ new Map()), h = F(/* @__PURE__ */ new Map()), { contains: B } = Ha({ sensitivity: "base" }), A = Ft({
      search: "",
      filtered: {
        /** The count of all visible items. */
        count: 0,
        /** Map from visible item id to its search score. */
        items: /* @__PURE__ */ new Map(),
        /** Set of groups with at least one visible item. */
        groups: /* @__PURE__ */ new Set()
      }
    });
    function O() {
      if (!A.search) {
        A.filtered.count = f.value.size;
        return;
      }
      A.filtered.groups = /* @__PURE__ */ new Set();
      let S = 0;
      for (const [P, D] of f.value) {
        const z = B(D, A.search);
        A.filtered.items.set(P, z ? 1 : 0), z && S++;
      }
      for (const [P, D] of h.value)
        for (const z of D)
          if (A.filtered.items.get(z) > 0) {
            A.filtered.groups.add(P);
            break;
          }
      A.filtered.count = S;
    }
    return Y(
      () => A.search,
      () => {
        O();
      }
    ), Vl({
      allItems: f,
      allGroups: h,
      filterState: A
    }), (S, P) => (r(), p(e(Na), m(e(l), {
      class: e(u)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        s.class
      )
    }), {
      default: c(() => [
        d(S.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ml = /* @__PURE__ */ i({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(et), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kd = /* @__PURE__ */ i({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ee), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Il = /* @__PURE__ */ i({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Oe), null, {
      default: c(() => [
        g(e(Pe), { class: "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" }),
        g(e(je), m(e(l), {
          class: e(u)(
            "fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default"),
            g(e(ee), { class: "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
              default: c(() => [
                g(e(de), { class: "h-4 w-4" }),
                h[0] || (h[0] = C("span", { class: "sr-only" }, "Close", -1))
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
}), Ud = /* @__PURE__ */ i({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(tt), m(e(o), {
      class: e(u)("text-sm text-muted-foreground", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qd = /* @__PURE__ */ i({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Wd = /* @__PURE__ */ i({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      class: b(e(u)("flex flex-col gap-y-1.5 text-center sm:text-left", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Yd = /* @__PURE__ */ i({
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Oe), null, {
      default: c(() => [
        g(e(Pe), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" }, {
          default: c(() => [
            g(e(je), m({
              class: e(u)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                s.class
              )
            }, e(l), {
              onPointerDownOutside: h[0] || (h[0] = (B) => {
                const A = B.detail.originalEvent, O = A.target;
                (A.offsetX > O.clientWidth || A.offsetY > O.clientHeight) && B.preventDefault();
              })
            }), {
              default: c(() => [
                d(f.$slots, "default"),
                g(e(ee), { class: "absolute top-4 right-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: c(() => [
                    g(e(de), { class: "h-4 w-4" }),
                    h[1] || (h[1] = C("span", { class: "sr-only" }, "Close", -1))
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
}), Xd = /* @__PURE__ */ i({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(at), m(e(o), {
      class: e(u)("text-lg leading-none font-semibold tracking-tight", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zd = /* @__PURE__ */ i({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(st), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jd = /* @__PURE__ */ i({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Ml), w($(e(n))), {
      default: c(() => [
        g(e(Il), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: c(() => [
            g(Tl, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
              default: c(() => [
                d(l.$slots, "default")
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
}), Qd = /* @__PURE__ */ i({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), { filterState: o } = fe(), n = T(() => !!o.search && o.filtered.count === 0);
    return (l, f) => n.value ? (r(), p(e(E), m({ key: 0 }, e(s), {
      class: e(u)("py-6 text-center text-sm", a.class)
    }), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"])) : V("", !0);
  }
}), eu = /* @__PURE__ */ i({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    heading: {}
  },
  setup(t) {
    const a = t, s = _(a, "class"), { allGroups: o, filterState: n } = fe(), l = ke(), f = T(() => n.search ? n.filtered.groups.has(l) : !0);
    return Ll({ id: l }), N(() => {
      o.value.has(l) || o.value.set(l, /* @__PURE__ */ new Set());
    }), Ce(() => {
      o.value.delete(l);
    }), (h, B) => (r(), p(e(Ka), m(e(s), {
      id: e(l),
      class: e(u)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        a.class
      ),
      hidden: f.value ? void 0 : !0
    }), {
      default: c(() => [
        t.heading ? (r(), p(e(Ua), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: c(() => [
            k(j(t.heading), 1)
          ]),
          _: 1
        })) : V("", !0),
        d(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "class", "hidden"]));
  }
}), zl = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, tu = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "CommandInput",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s), { filterState: n } = fe();
    return (l, f) => (r(), y("div", zl, [
      g(e(On), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      g(e(qa), m({ ...e(o), ...l.$attrs }, {
        modelValue: e(n).search,
        "onUpdate:modelValue": f[0] || (f[0] = (h) => e(n).search = h),
        "auto-focus": "",
        class: e(u)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          a.class
        )
      }), null, 16, ["modelValue", "class"])
    ]));
  }
}), au = /* @__PURE__ */ i({
  __name: "CommandItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o), f = ke(), { filterState: h, allItems: B, allGroups: A } = fe(), O = Rl(), S = T(() => {
      if (h.search) {
        const z = h.filtered.items.get(f);
        return z === void 0 ? !0 : z > 0;
      } else
        return !0;
    }), P = F(), D = Et(P);
    return N(() => {
      if (!(D.value instanceof HTMLElement)) return;
      B.value.set(f, D.value.textContent ?? s?.value.toString());
      const z = O?.id;
      z && (A.value.has(z) ? A.value.get(z)?.add(f) : A.value.set(z, /* @__PURE__ */ new Set([f])));
    }), Ce(() => {
      B.value.delete(f);
    }), (z, ae) => S.value ? (r(), p(e(Wa), m({ key: 0 }, e(l), {
      id: e(f),
      ref_key: "itemRef",
      ref: P,
      class: e(u)(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0",
        s.class
      ),
      onSelect: ae[0] || (ae[0] = () => {
        e(h).search = "";
      })
    }), {
      default: c(() => [
        d(z.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "class"])) : V("", !0);
  }
}), Fl = { role: "presentation" }, su = /* @__PURE__ */ i({
  __name: "CommandList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ya), m(e(o), {
      class: e(u)("max-h-[300px] overflow-x-hidden overflow-y-auto", a.class)
    }), {
      default: c(() => [
        C("div", Fl, [
          d(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ou = /* @__PURE__ */ i({
  __name: "CommandSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Qe), m(e(s), {
      class: e(u)("-mx-1 h-px bg-border", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nu = /* @__PURE__ */ i({
  __name: "CommandShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("span", {
      class: b(e(u)("ml-auto text-xs tracking-widest text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), [fe, Vl] = re("Command"), [Rl, Ll] = re("CommandGroup"), ru = /* @__PURE__ */ i({
  __name: "ContextMenu",
  props: {
    pressOpenDelay: {},
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Xa), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), El = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, lu = /* @__PURE__ */ i({
  __name: "ContextMenuCheckboxItem",
  props: {
    modelValue: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select", "update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Za), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        C("span", El, [
          g(e(ot), null, {
            default: c(() => [
              g(e(U), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iu = /* @__PURE__ */ i({
  __name: "ContextMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideFlip: { type: Boolean },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Ja), null, {
      default: c(() => [
        g(e(Qa), m(e(l), {
          class: e(u)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), cu = /* @__PURE__ */ i({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(es), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), du = /* @__PURE__ */ i({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(ts), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.inset && "pl-8",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uu = /* @__PURE__ */ i({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(as), m(e(s), {
      class: e(u)("px-2 py-1.5 text-sm font-semibold text-foreground", t.inset && "pl-8", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pu = /* @__PURE__ */ i({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(ss), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, fu = /* @__PURE__ */ i({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(os), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        C("span", Gl, [
          g(e(ot), null, {
            default: c(() => [
              g(e(Te), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mu = /* @__PURE__ */ i({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(ns), m(e(s), {
      class: e(u)("-mx-1 my-1 h-px bg-border", a.class)
    }), null, 16, ["class"]));
  }
}), gu = /* @__PURE__ */ i({
  __name: "ContextMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("span", {
      class: b(e(u)("ml-auto text-xs tracking-widest text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), _u = /* @__PURE__ */ i({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(rs), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yu = /* @__PURE__ */ i({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    sideFlip: { type: Boolean },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(ls), m(e(l), {
      class: e(u)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bu = /* @__PURE__ */ i({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(is), m(e(o), {
      class: e(u)(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t.inset && "pl-8",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(K), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hu = /* @__PURE__ */ i({
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), p(e(cs), w($(e(s))), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
let be = null;
function Hl() {
  return be == null && (be = new Intl.DateTimeFormat().resolvedOptions().timeZone), be;
}
let he = /* @__PURE__ */ new Map();
class Nl {
  constructor(a, s = {}) {
    this.formatter = jt(a, s), this.options = s;
  }
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(a) {
    return this.formatter.format(a);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(a) {
    return this.formatter.formatToParts(a);
  }
  /** Formats a date range as a string. */
  formatRange(a, s) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(a, s);
    if (s < a) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(a)} – ${this.formatter.format(s)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(a, s) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(a, s);
    if (s < a) throw new RangeError("End date must be >= start date");
    let o = this.formatter.formatToParts(a), n = this.formatter.formatToParts(s);
    return [
      ...o.map((l) => ({
        ...l,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...n.map((l) => ({
        ...l,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let a = this.formatter.resolvedOptions();
    return ql() && (this.resolvedHourCycle || (this.resolvedHourCycle = Wl(a.locale, this.options)), a.hourCycle = this.resolvedHourCycle, a.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), a.calendar === "ethiopic-amete-alem" && (a.calendar = "ethioaa"), a;
  }
}
const Kl = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function jt(t, a = {}) {
  if (typeof a.hour12 == "boolean" && Ul()) {
    a = {
      ...a
    };
    let n = Kl[String(a.hour12)][t.split("-")[0]], l = a.hour12 ? "h12" : "h23";
    a.hourCycle = n ?? l, delete a.hour12;
  }
  let s = t + (a ? Object.entries(a).sort((n, l) => n[0] < l[0] ? -1 : 1).join() : "");
  if (he.has(s)) return he.get(s);
  let o = new Intl.DateTimeFormat(t, a);
  return he.set(s, o), o;
}
let ve = null;
function Ul() {
  return ve == null && (ve = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), ve;
}
let xe = null;
function ql() {
  return xe == null && (xe = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), xe;
}
function Wl(t, a) {
  if (!a.timeStyle && !a.hour) return;
  t = t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), t += (t.includes("-u-") ? "" : "-u") + "-nu-latn";
  let s = jt(t, {
    ...a,
    timeZone: void 0
    // use local timezone
  }), o = parseInt(s.formatToParts(new Date(2020, 2, 3, 0)).find((l) => l.type === "hour").value, 10), n = parseInt(s.formatToParts(new Date(2020, 2, 3, 23)).find((l) => l.type === "hour").value, 10);
  if (o === 0 && n === 23) return "h23";
  if (o === 24 && n === 23) return "h24";
  if (o === 0 && n === 11) return "h11";
  if (o === 12 && n === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
const Yl = /* @__PURE__ */ i({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(ds), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xl = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
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
    hideShiftedArrow: { type: Boolean },
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
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(us), null, {
      default: c(() => [
        g(e(ps), m({ ...e(l), ...f.$attrs }, {
          class: e(u)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Zl = /* @__PURE__ */ i({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(fs), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vu = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "DatePicker",
  props: /* @__PURE__ */ Q({
    placeholder: { default: "Pick a date" },
    disabled: { type: Boolean },
    locale: { default: "en-AU" },
    class: { type: [Boolean, null, String, Object, Array] }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const a = t, s = J(t, "modelValue"), o = T(() => new Nl(a.locale, { dateStyle: "long" })), n = T(
      () => s.value ? o.value.format(s.value.toDate(Hl())) : a.placeholder
    );
    return (l, f) => (r(), p(e(Yl), null, {
      default: c(() => [
        g(e(Zl), { "as-child": "" }, {
          default: c(() => [
            g(e(q), m(l.$attrs, {
              variant: "outline",
              disabled: t.disabled,
              class: e(u)(
                "w-[280px] justify-start text-left font-normal",
                !s.value && "text-muted-foreground",
                a.class
              )
            }), {
              default: c(() => [
                g(e(Pn), { class: "mr-2 h-4 w-4" }),
                k(" " + j(n.value), 1)
              ]),
              _: 1
            }, 16, ["disabled", "class"])
          ]),
          _: 1
        }),
        g(e(Xl), { class: "w-auto p-0" }, {
          default: c(() => [
            g(e(ul), {
              modelValue: s.value,
              "onUpdate:modelValue": f[0] || (f[0] = (h) => s.value = h),
              "initial-focus": ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), xu = /* @__PURE__ */ i({
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
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Fn), m({ "data-slot": "drawer" }, e(n)), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bu = /* @__PURE__ */ i({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Vn), m({ "data-slot": "drawer-close" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jl = /* @__PURE__ */ i({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Rn), m({ "data-slot": "drawer-overlay" }, e(s), {
      class: e(u)(
        "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        a.class
      )
    }), null, 16, ["class"]));
  }
}), wu = /* @__PURE__ */ i({
  __name: "DrawerContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, n = v(s, a);
    return (l, f) => (r(), p(e(Ln), null, {
      default: c(() => [
        g(Jl),
        g(e(En), m({ "data-slot": "drawer-content" }, e(n), {
          class: e(u)(
            "group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            s.class
          )
        }), {
          default: c(() => [
            f[0] || (f[0] = C("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            d(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), $u = /* @__PURE__ */ i({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Gn), m({ "data-slot": "drawer-description" }, e(s), {
      class: e(u)("text-sm text-muted-foreground", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cu = /* @__PURE__ */ i({
  __name: "DrawerFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "drawer-footer",
      class: b(e(u)("mt-auto flex flex-col gap-2 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Su = /* @__PURE__ */ i({
  __name: "DrawerHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "drawer-header",
      class: b(e(u)("flex flex-col gap-1.5 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Au = /* @__PURE__ */ i({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Hn), m({ "data-slot": "drawer-title" }, e(s), {
      class: e(u)("font-semibold text-foreground", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ou = /* @__PURE__ */ i({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Nn), m({ "data-slot": "drawer-trigger" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pu = /* @__PURE__ */ i({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(ms), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ql = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, ju = /* @__PURE__ */ i({
  __name: "DropdownMenuCheckboxItem",
  props: {
    modelValue: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select", "update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(gs), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        C("span", Ql, [
          g(e(nt), null, {
            default: c(() => [
              g(e(U), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ku = /* @__PURE__ */ i({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(_s), null, {
      default: c(() => [
        g(e(ys), m(e(l), {
          class: e(u)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Du = /* @__PURE__ */ i({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(bs), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tu = /* @__PURE__ */ i({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(hs), m(e(o), {
      class: e(u)(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
        t.inset && "pl-8",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mu = /* @__PURE__ */ i({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(vs), m(e(o), {
      class: e(u)("px-2 py-1.5 text-sm font-semibold", t.inset && "pl-8", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Iu = /* @__PURE__ */ i({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(xs), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ei = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, zu = /* @__PURE__ */ i({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Bs), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        C("span", ei, [
          g(e(nt), null, {
            default: c(() => [
              g(e(Te), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fu = /* @__PURE__ */ i({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(ws), m(e(s), {
      class: e(u)("-mx-1 my-1 h-px bg-muted", a.class)
    }), null, 16, ["class"]));
  }
}), Vu = /* @__PURE__ */ i({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("span", {
      class: b(e(u)("ml-auto text-xs tracking-widest opacity-60", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ru = /* @__PURE__ */ i({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e($s), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lu = /* @__PURE__ */ i({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    sideFlip: { type: Boolean },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Cs), m(e(l), {
      class: e(u)(
        "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eu = /* @__PURE__ */ i({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ss), m(e(o), {
      class: e(u)(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent data-[state=open]:bg-accent",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(K), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gu = /* @__PURE__ */ i({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), p(e(As), m({ class: "outline-none" }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hu = /* @__PURE__ */ i({
  __name: "Empty",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "empty",
      class: b(
        e(u)(
          "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Nu = /* @__PURE__ */ i({
  __name: "EmptyContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "empty-content",
      class: b(
        e(u)(
          "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ku = /* @__PURE__ */ i({
  __name: "EmptyDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("p", {
      "data-slot": "empty-description",
      class: b(
        e(u)(
          "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Uu = /* @__PURE__ */ i({
  __name: "EmptyHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "empty-header",
      class: b(e(u)("flex max-w-sm flex-col items-center gap-2 text-center", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ti = ["data-variant"], qu = /* @__PURE__ */ i({
  __name: "EmptyMedia",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "empty-icon",
      "data-variant": t.variant,
      class: b(e(u)(e(ai)({ variant: t.variant }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, ti));
  }
}), Wu = /* @__PURE__ */ i({
  __name: "EmptyTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "empty-title",
      class: b(e(u)("text-lg font-medium tracking-tight", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ai = L(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), si = ["data-orientation"], Yu = /* @__PURE__ */ i({
  __name: "Field",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    orientation: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      role: "group",
      "data-slot": "field",
      "data-orientation": t.orientation,
      class: b(e(u)(e(ii)({ orientation: t.orientation }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, si));
  }
}), Xu = /* @__PURE__ */ i({
  __name: "FieldContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "field-content",
      class: b(e(u)("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Zu = /* @__PURE__ */ i({
  __name: "FieldDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("p", {
      "data-slot": "field-description",
      class: b(
        e(u)(
          "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
          "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
          "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), oi = {
  key: 2,
  class: "ml-4 flex list-disc flex-col gap-1"
}, Ju = /* @__PURE__ */ i({
  __name: "FieldError",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    errors: {}
  },
  setup(t) {
    const a = t, s = T(() => !a.errors || a.errors.length === 0 ? null : a.errors.length === 1 && a.errors[0]?.message ? a.errors[0].message : a.errors.some((o) => o?.message) ? a.errors : null);
    return (o, n) => o.$slots.default || s.value ? (r(), y("div", {
      key: 0,
      role: "alert",
      "data-slot": "field-error",
      class: b(e(u)("text-sm font-normal text-destructive", a.class))
    }, [
      o.$slots.default ? d(o.$slots, "default", { key: 0 }) : typeof s.value == "string" ? (r(), y(I, { key: 1 }, [
        k(j(s.value), 1)
      ], 64)) : Array.isArray(s.value) ? (r(), y("ul", oi, [
        (r(!0), y(I, null, R(s.value, (l, f) => (r(), y("li", { key: f }, j(l?.message), 1))), 128))
      ])) : V("", !0)
    ], 2)) : V("", !0);
  }
}), Qu = /* @__PURE__ */ i({
  __name: "FieldGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "field-group",
      class: b(
        e(u)(
          "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), kt = /* @__PURE__ */ i({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Os), m(e(s), {
      class: e(u)(
        "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        a.class
      )
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ep = /* @__PURE__ */ i({
  __name: "FieldLabel",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(kt), {
      "data-slot": "field-label",
      class: b(
        e(u)(
          "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
          "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&_>[data-slot=field]]:p-3",
          "has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 dark:has-[[data-state=checked]]:bg-primary/10",
          a.class
        )
      )
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ni = ["data-variant"], tp = /* @__PURE__ */ i({
  __name: "FieldLegend",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("legend", {
      "data-slot": "field-legend",
      "data-variant": t.variant,
      class: b(
        e(u)(
          "mb-3 font-medium",
          "data-[variant=legend]:text-base",
          "data-[variant=label]:text-sm",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 10, ni));
  }
}), ri = ["data-content"], li = {
  key: 0,
  class: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
  "data-slot": "field-separator-content"
}, ap = /* @__PURE__ */ i({
  __name: "FieldSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "field-separator",
      "data-content": !!s.$slots.default,
      class: b(
        e(u)("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", a.class)
      )
    }, [
      g(e(ue), { class: "absolute inset-0 top-1/2" }),
      s.$slots.default ? (r(), y("span", li, [
        d(s.$slots, "default")
      ])) : V("", !0)
    ], 10, ri));
  }
}), sp = /* @__PURE__ */ i({
  __name: "FieldSet",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("fieldset", {
      "data-slot": "field-set",
      class: b(
        e(u)(
          "flex flex-col gap-6",
          "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), op = /* @__PURE__ */ i({
  __name: "FieldTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "field-label",
      class: b(
        e(u)(
          "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ii = L(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start"
        ],
        responsive: [
          "@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
), Dt = /* @__PURE__ */ Symbol();
function me() {
  const t = Z(Kn), a = Z(Dt);
  if (!t) throw new Error("useFormField should be used within <FormField>");
  const { name: s, errorMessage: o, meta: n } = t, l = a, f = {
    valid: T(() => n.valid),
    isDirty: T(() => n.dirty),
    isTouched: T(() => n.touched),
    error: o
  };
  return {
    id: l,
    name: s,
    formItemId: `${l}-form-item`,
    formDescriptionId: `${l}-form-item-description`,
    formMessageId: `${l}-form-item-message`,
    ...f
  };
}
const np = /* @__PURE__ */ i({
  __name: "FormControl",
  setup(t) {
    const { error: a, formItemId: s, formDescriptionId: o, formMessageId: n } = me();
    return (l, f) => (r(), p(e(Ps), {
      id: e(s),
      "aria-describedby": e(a) ? `${e(o)} ${e(n)}` : `${e(o)}`,
      "aria-invalid": !!e(a)
    }, {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), ci = ["id"], rp = /* @__PURE__ */ i({
  __name: "FormDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { formDescriptionId: s } = me();
    return (o, n) => (r(), y("p", {
      id: e(s),
      class: b(e(u)("text-sm text-muted-foreground", a.class))
    }, [
      d(o.$slots, "default")
    ], 10, ci));
  }
}), lp = /* @__PURE__ */ i({
  __name: "FormItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = ke();
    return $e(Dt, s), (o, n) => (r(), y("div", {
      class: b(e(u)("space-y-2", a.class))
    }, [
      d(o.$slots, "default")
    ], 2));
  }
}), ip = /* @__PURE__ */ i({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { error: s, formItemId: o } = me();
    return (n, l) => (r(), p(e(kt), {
      class: b(e(u)(e(s) && "text-destructive", a.class)),
      for: e(o)
    }, {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "for"]));
  }
}), cp = /* @__PURE__ */ i({
  __name: "FormMessage",
  setup(t) {
    const { name: a, formMessageId: s } = me();
    return (o, n) => (r(), p(e(Un), {
      id: e(s),
      as: "p",
      name: Vt(e(a)),
      class: "text-[0.8rem] font-medium text-destructive"
    }, null, 8, ["id", "name"]));
  }
}), dp = /* @__PURE__ */ i({
  __name: "HoverCard",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    openDelay: {},
    closeDelay: {}
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(js), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), up = /* @__PURE__ */ i({
  __name: "HoverCardContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ks), null, {
      default: c(() => [
        g(e(Ds), m(e(o), {
          class: e(u)(
            "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            a.class
          )
        }), {
          default: c(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), pp = /* @__PURE__ */ i({
  __name: "HoverCardTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Ts), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fp = /* @__PURE__ */ i({
  __name: "InputGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "input-group",
      role: "group",
      class: b(
        e(u)(
          "group/input-group relative flex w-full items-center rounded-md border border-input outline-none dark:bg-input/30",
          "h-9 min-w-0 has-[>textarea]:h-auto",
          // Variants based on alignment.
          "has-[>[data-align=inline-start]]:[&>input]:pl-2",
          "has-[>[data-align=inline-end]]:[&>input]:pr-2",
          "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
          "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
          // Focus state.
          "has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-ring",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), di = ["data-align"], mp = /* @__PURE__ */ i({
  __name: "InputGroupAddon",
  props: {
    align: { default: "inline-start" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    function s(o) {
      const n = o.currentTarget, l = o.target;
      l && l.closest("button") || n && n?.parentElement && n.parentElement?.querySelector("input")?.focus();
    }
    return (o, n) => (r(), y("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": a.align,
      class: b(e(u)(e(pi)({ align: a.align }), a.class)),
      onClick: s
    }, [
      d(o.$slots, "default")
    ], 10, di));
  }
}), gp = /* @__PURE__ */ i({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(q), {
      "data-size": a.size,
      variant: a.variant,
      class: b(e(u)(e(fi)({ size: a.size }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), _p = /* @__PURE__ */ i({
  __name: "InputGroupInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Ie), {
      "data-slot": "input-group-control",
      class: b(
        e(u)(
          "flex-1 rounded-none border-0 bg-transparent ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent",
          a.class
        )
      )
    }, null, 8, ["class"]));
  }
}), yp = /* @__PURE__ */ i({
  __name: "InputGroupText",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("span", {
      class: b(
        e(u)(
          "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ui = /* @__PURE__ */ i({
  __name: "Textarea",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, n = ne(s, "modelValue", a, {
      passive: !0,
      defaultValue: s.defaultValue
    });
    return (l, f) => We((r(), y("textarea", {
      "onUpdate:modelValue": f[0] || (f[0] = (h) => Ye(n) ? n.value = h : null),
      class: b(
        e(u)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          s.class
        )
      )
    }, null, 2)), [
      [Xe, e(n)]
    ]);
  }
}), bp = /* @__PURE__ */ i({
  __name: "InputGroupTextarea",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ui), {
      "data-slot": "input-group-control",
      class: b(
        e(u)(
          "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent",
          a.class
        )
      )
    }, null, 8, ["class"]));
  }
}), pi = L(
  "flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
), fi = L("flex items-center gap-2 text-sm shadow-none", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
}), hp = /* @__PURE__ */ i({
  __name: "InputOTP",
  props: {
    maxlength: {},
    textAlign: {},
    inputmode: {},
    containerClass: {},
    pushPasswordManagerStrategy: {},
    noScriptCssFallback: {},
    defaultValue: {},
    pasteTransformer: { type: Function },
    accept: {},
    alt: {},
    autocomplete: {},
    autofocus: { type: Boolean },
    capture: { type: [Boolean, String] },
    checked: { type: [Boolean, Array, Set] },
    crossorigin: {},
    disabled: { type: Boolean },
    enterKeyHint: {},
    form: {},
    formaction: {},
    formenctype: {},
    formmethod: {},
    formnovalidate: { type: Boolean },
    formtarget: {},
    height: {},
    indeterminate: { type: Boolean },
    list: {},
    max: {},
    min: {},
    minlength: {},
    multiple: { type: Boolean },
    name: {},
    pattern: {},
    placeholder: {},
    readonly: { type: Boolean },
    required: { type: Boolean },
    size: {},
    src: {},
    step: {},
    type: {},
    value: {},
    width: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["complete", "change", "select", "input", "focus", "blur", "mouseover", "mouseleave", "paste"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(qn), m(e(l), {
      "container-class": e(u)("flex items-center gap-2 has-disabled:opacity-50", s.class),
      "data-slot": "input-otp",
      class: "disabled:cursor-not-allowed"
    }), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["container-class"]));
  }
}), vp = /* @__PURE__ */ i({
  __name: "InputOTPGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), y("div", m({ "data-slot": "input-otp-group" }, e(o), {
      class: e(u)("flex items-center", a.class)
    }), [
      d(n.$slots, "default")
    ], 16));
  }
}), xp = /* @__PURE__ */ i({
  __name: "InputOTPSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), y("div", m({
      "data-slot": "input-otp-separator",
      role: "separator"
    }, e(s)), [
      d(o.$slots, "default", {}, () => [
        g(e(jn))
      ])
    ], 16));
  }
}), mi = ["data-active"], gi = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Bp = /* @__PURE__ */ i({
  __name: "InputOTPSlot",
  props: {
    index: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s), n = Wn(), l = T(() => n?.value.slots[a.index]);
    return (f, h) => (r(), y("div", m(e(o), {
      "data-slot": "input-otp-slot",
      "data-active": l.value?.isActive,
      class: e(u)(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        a.class
      )
    }), [
      k(j(l.value?.char) + " ", 1),
      l.value?.hasFakeCaret ? (r(), y("div", gi, [...h[0] || (h[0] = [
        C("div", { class: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }, null, -1)
      ])])) : V("", !0)
    ], 16, mi));
  }
}), wp = /* @__PURE__ */ i({
  __name: "Item",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {},
    size: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      "data-slot": "item",
      as: t.as,
      "as-child": t.asChild,
      class: b(e(u)(e(yi)({ variant: t.variant, size: t.size }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), $p = /* @__PURE__ */ i({
  __name: "ItemActions",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "item-actions",
      class: b(e(u)("flex items-center gap-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Cp = /* @__PURE__ */ i({
  __name: "ItemContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "item-content",
      class: b(e(u)("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Sp = /* @__PURE__ */ i({
  __name: "ItemDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("p", {
      "data-slot": "item-description",
      class: b(
        e(u)(
          "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
          "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ap = /* @__PURE__ */ i({
  __name: "ItemFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "item-footer",
      class: b(e(u)("flex basis-full items-center justify-between gap-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Op = /* @__PURE__ */ i({
  __name: "ItemGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      role: "list",
      "data-slot": "item-group",
      class: b(e(u)("group/item-group flex flex-col", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Pp = /* @__PURE__ */ i({
  __name: "ItemHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "item-header",
      class: b(e(u)("flex basis-full items-center justify-between gap-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), _i = ["data-variant"], jp = /* @__PURE__ */ i({
  __name: "ItemMedia",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "item-media",
      "data-variant": a.variant,
      class: b(e(u)(e(bi)({ variant: t.variant }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, _i));
  }
}), kp = /* @__PURE__ */ i({
  __name: "ItemSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ue), {
      "data-slot": "item-separator",
      orientation: "horizontal",
      class: b(e(u)("my-0", a.class))
    }, null, 8, ["class"]));
  }
}), Dp = /* @__PURE__ */ i({
  __name: "ItemTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "item-title",
      class: b(e(u)("flex w-fit items-center gap-2 text-sm leading-snug font-medium", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), yi = L(
  "group/item [a]:hover:bg-accent/50 [a]:transition-colors flex flex-wrap items-center rounded-md border border-transparent text-sm outline-none transition-colors duration-100 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "gap-4 p-4 ",
        sm: "gap-2.5 px-4 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), bi = L(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 rounded-sm border bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Tp = /* @__PURE__ */ i({
  __name: "Kbd",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("kbd", {
      class: b(
        e(u)(
          "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none",
          "[&_svg:not([class*='size-'])]:size-3",
          "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Mp = /* @__PURE__ */ i({
  __name: "KbdGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("kbd", {
      "data-slot": "kbd-group",
      class: b(e(u)("inline-flex items-center gap-1", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ip = /* @__PURE__ */ i({
  __name: "Menubar",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Ms), m(e(l), {
      class: e(u)(
        "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hi = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, zp = /* @__PURE__ */ i({
  __name: "MenubarCheckboxItem",
  props: {
    modelValue: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select", "update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Is), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        C("span", hi, [
          g(e(rt), null, {
            default: c(() => [
              g(e(U), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fp = /* @__PURE__ */ i({
  __name: "MenubarContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 8 },
    sideFlip: { type: Boolean },
    align: { default: "start" },
    alignOffset: { default: -4 },
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(lt), null, {
      default: c(() => [
        g(e(zs), m(e(o), {
          class: e(u)(
            "z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            a.class
          )
        }), {
          default: c(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Vp = /* @__PURE__ */ i({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Fs), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ i({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Vs), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.inset && "pl-8",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lp = /* @__PURE__ */ i({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Rs), {
      class: b(e(u)("px-2 py-1.5 text-sm font-semibold", t.inset && "pl-8", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ep = /* @__PURE__ */ i({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Ls), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gp = /* @__PURE__ */ i({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Es), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vi = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Hp = /* @__PURE__ */ i({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Gs), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        C("span", vi, [
          g(e(rt), null, {
            default: c(() => [
              g(e(Te), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Np = /* @__PURE__ */ i({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Hs), m({
      class: e(u)("-mx-1 my-1 h-px bg-muted", a.class)
    }, e(o)), null, 16, ["class"]));
  }
}), Kp = /* @__PURE__ */ i({
  __name: "MenubarShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("span", {
      class: b(e(u)("ml-auto text-xs tracking-widest text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Up = /* @__PURE__ */ i({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Ns), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qp = /* @__PURE__ */ i({
  __name: "MenubarSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    sideFlip: { type: Boolean },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(lt), null, {
      default: c(() => [
        g(e(Ks), m(e(l), {
          class: e(u)(
            "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Wp = /* @__PURE__ */ i({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Us), m(e(o), {
      class: e(u)(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t.inset && "pl-8",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(K), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yp = /* @__PURE__ */ i({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(qs), m(e(o), {
      class: e(u)(
        "flex cursor-default items-center rounded-sm px-3 py-1 text-sm font-medium outline-none select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xi = { class: "absolute top-full left-0 flex justify-center" }, Bi = /* @__PURE__ */ i({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), y("div", xi, [
      g(e(Ws), m(e(o), {
        class: e(u)(
          "origin-top-center relative left-[var(--reka-navigation-menu-viewport-left)] mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[--reka-navigation-menu-viewport-width]",
          a.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), Xp = /* @__PURE__ */ i({
  __name: "NavigationMenu",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Ys), m(e(l), {
      class: e(u)("relative z-10 flex max-w-max flex-1 items-center justify-center", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default"),
        g(Bi)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zp = /* @__PURE__ */ i({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Xs), m(e(l), {
      class: e(u)(
        "top-0 left-0 w-full data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out md:absolute md:w-auto",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jp = /* @__PURE__ */ i({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Zs), m(e(o), {
      class: e(u)(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        a.class
      )
    }), {
      default: c(() => [...l[0] || (l[0] = [
        C("div", { class: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), Qp = /* @__PURE__ */ i({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Js), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ef = /* @__PURE__ */ i({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Qs), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tf = /* @__PURE__ */ i({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(eo), m(e(o), {
      class: e(u)("group flex flex-1 list-none items-center justify-center gap-x-1", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), af = /* @__PURE__ */ i({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(to), m(e(o), {
      class: e(u)(e(wi)(), "group", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(ce), {
          class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wi = L(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), sf = /* @__PURE__ */ i({
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
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:page"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(ao), m({ "data-slot": "pagination" }, e(l), {
      class: e(u)("mx-auto flex w-full justify-center", s.class)
    }), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), of = /* @__PURE__ */ i({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(so), m({ "data-slot": "pagination-content" }, e(s), {
      class: e(u)("flex flex-row items-center gap-1", a.class)
    }), {
      default: c((l) => [
        d(o.$slots, "default", w($(l)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nf = /* @__PURE__ */ i({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(oo), m({ "data-slot": "pagination-ellipsis" }, e(s), {
      class: e(u)("flex size-9 items-center justify-center", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default", {}, () => [
          g(e(_t), { class: "size-4" }),
          n[0] || (n[0] = C("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rf = /* @__PURE__ */ i({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(no), m({
      "data-slot": "pagination-first",
      class: e(u)(e(M)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(le)),
          l[0] || (l[0] = C("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lf = /* @__PURE__ */ i({
  __name: "PaginationItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    size: { default: "icon" },
    class: { type: [Boolean, null, String, Object, Array] },
    isActive: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size", "isActive");
    return (o, n) => (r(), p(e(ro), m({ "data-slot": "pagination-item" }, e(s), {
      class: e(u)(
        e(M)({
          variant: t.isActive ? "outline" : "ghost",
          size: t.size
        }),
        a.class
      )
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cf = /* @__PURE__ */ i({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(lo), m({
      "data-slot": "pagination-last",
      class: e(u)(e(M)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          l[0] || (l[0] = C("span", { class: "hidden sm:block" }, "Last", -1)),
          g(e(ie))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), df = /* @__PURE__ */ i({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(io), m({
      "data-slot": "pagination-next",
      class: e(u)(e(M)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          l[0] || (l[0] = C("span", { class: "hidden sm:block" }, "Next", -1)),
          g(e(ie))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uf = /* @__PURE__ */ i({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(co), m({
      "data-slot": "pagination-previous",
      class: e(u)(e(M)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(le)),
          l[0] || (l[0] = C("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pf = /* @__PURE__ */ i({
  __name: "PinInput",
  props: {
    modelValue: { default: () => [] },
    defaultValue: {},
    placeholder: {},
    mask: { type: Boolean },
    otp: { type: Boolean },
    type: {},
    dir: {},
    disabled: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "complete"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(uo), m(e(l), {
      class: e(u)("flex items-center gap-2", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ff = /* @__PURE__ */ i({
  __name: "PinInputGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(E), m(e(o), {
      class: e(u)("flex items-center", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mf = /* @__PURE__ */ i({
  __name: "PinInputSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), p(e(E), w($(e(s))), {
      default: c(() => [
        d(o.$slots, "default", {}, () => [
          g(e(gt), { class: "w-2" })
        ])
      ]),
      _: 3
    }, 16));
  }
}), gf = /* @__PURE__ */ i({
  __name: "PinInputSlot",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(po), m(e(o), {
      class: e(u)(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-center text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus:relative focus:z-10 focus:ring-2 focus:ring-ring focus:outline-none",
        a.class
      )
    }), null, 16, ["class"]));
  }
}), _f = /* @__PURE__ */ i({
  __name: "Progress",
  props: {
    modelValue: { default: 0 },
    max: {},
    getValueLabel: {},
    getValueText: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(fo), m(e(s), {
      class: e(u)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", a.class)
    }), {
      default: c(() => [
        g(e(mo), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: Se(`transform: translateX(-${100 - (a.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), yf = /* @__PURE__ */ i({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(go), m({
      class: e(u)("grid gap-2", s.class)
    }, e(l)), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bf = /* @__PURE__ */ i({
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(_o), m(e(o), {
      class: e(u)(
        "peer aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: c(() => [
        g(e(yo), { class: "flex items-center justify-center" }, {
          default: c(() => [
            g(e(U), { class: "h-3.5 w-3.5 text-primary" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), $i = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, hf = /* @__PURE__ */ i({
  __name: "RangeCalendar",
  props: {
    defaultPlaceholder: {},
    defaultValue: {},
    modelValue: {},
    placeholder: {},
    allowNonContiguousRanges: { type: Boolean },
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    maximumDays: {},
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    isDateHighlightable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    disableDaysOutsideCurrentView: { type: Boolean },
    fixedDate: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "update:validModelValue", "update:placeholder", "update:startValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(bo), m({
      class: e(u)("p-3", s.class)
    }, e(l)), {
      default: c(({ grid: B, weekDays: A }) => [
        g(e(ki), null, {
          default: c(() => [
            g(e(Mi)),
            g(e(Di)),
            g(e(Ti))
          ]),
          _: 1
        }),
        C("div", $i, [
          (r(!0), y(I, null, R(B, (O) => (r(), p(e(Ai), {
            key: O.value.toString()
          }, {
            default: c(() => [
              g(e(Pi), null, {
                default: c(() => [
                  g(e(Ne), null, {
                    default: c(() => [
                      (r(!0), y(I, null, R(A, (S) => (r(), p(e(ji), { key: S }, {
                        default: c(() => [
                          k(j(S), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              g(e(Oi), null, {
                default: c(() => [
                  (r(!0), y(I, null, R(O.rows, (S, P) => (r(), p(e(Ne), {
                    key: `weekDate-${P}`,
                    class: "mt-2 w-full"
                  }, {
                    default: c(() => [
                      (r(!0), y(I, null, R(S, (D) => (r(), p(e(Ci), {
                        key: D.toString(),
                        date: D
                      }, {
                        default: c(() => [
                          g(e(Si), {
                            day: D,
                            month: O.value
                          }, null, 8, ["day", "month"])
                        ]),
                        _: 2
                      }, 1032, ["date"]))), 128))
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ci = /* @__PURE__ */ i({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ho), m({
      class: e(u)(
        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-outside-view])]:bg-accent/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Si = /* @__PURE__ */ i({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(vo), m({
      class: e(u)(
        e(M)({ variant: "ghost" }),
        "h-8 w-8 p-0 font-normal data-[selected]:opacity-100",
        "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
        // Selection Start
        "data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground",
        // Selection End
        "data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground",
        // Outside months
        "data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30",
        // Disabled
        "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
        // Unavailable
        "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ai = /* @__PURE__ */ i({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(xo), m({
      class: e(u)("w-full border-collapse space-y-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Oi = /* @__PURE__ */ i({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Bo), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pi = /* @__PURE__ */ i({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(wo), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ne = /* @__PURE__ */ i({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e($o), m({
      class: e(u)("flex", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ji = /* @__PURE__ */ i({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Co), m({
      class: e(u)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ki = /* @__PURE__ */ i({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(So), m({
      class: e(u)("relative flex w-full items-center justify-between pt-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Di = /* @__PURE__ */ i({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ao), m({
      class: e(u)("text-sm font-medium", a.class)
    }, e(o)), {
      default: c(({ headingValue: f }) => [
        d(n.$slots, "default", { headingValue: f }, () => [
          k(j(f), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ti = /* @__PURE__ */ i({
  __name: "RangeCalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Oo), m({
      class: e(u)(
        e(M)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(K), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mi = /* @__PURE__ */ i({
  __name: "RangeCalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Po), m({
      class: e(u)(
        e(M)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(yt), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ii = {
  key: 0,
  class: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"
}, vf = /* @__PURE__ */ i({
  __name: "ResizableHandle",
  props: {
    id: {},
    hitAreaMargins: {},
    tabindex: {},
    disabled: { type: Boolean },
    nonce: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    withHandle: { type: Boolean }
  },
  emits: ["dragging"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(jo), m(e(l), {
      class: e(u)(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        s.class
      )
    }), {
      default: c(() => [
        s.withHandle ? (r(), y("div", Ii, [
          g(e(kn), { class: "h-2.5 w-2.5" })
        ])) : V("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), xf = /* @__PURE__ */ i({
  __name: "ResizablePanelGroup",
  props: {
    id: {},
    autoSaveId: {},
    direction: {},
    keyboardResizeBy: {},
    storage: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["layout"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(ko), m(e(l), {
      class: e(u)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zi = /* @__PURE__ */ i({
  __name: "ScrollBar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Do), m(e(s), {
      class: e(u)(
        "flex touch-none transition-colors select-none",
        t.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
        t.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
        a.class
      )
    }), {
      default: c(() => [
        g(e(To), { class: "relative flex-1 rounded-full bg-border" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Bf = /* @__PURE__ */ i({
  __name: "ScrollArea",
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Mo), m(e(s), {
      class: e(u)("relative overflow-hidden", a.class)
    }), {
      default: c(() => [
        g(e(Io), { class: "h-full w-full rounded-[inherit]" }, {
          default: c(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        }),
        g(zi),
        g(e(zo))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fi = /* @__PURE__ */ i({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Fo), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vi = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
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
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Vo), null, {
      default: c(() => [
        g(e(Ro), m({ ...e(l), ...f.$attrs }, {
          class: e(u)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            t.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            s.class
          )
        }), {
          default: c(() => [
            g(e(Gi)),
            g(e(Lo), {
              class: b(
                e(u)(
                  "p-1",
                  t.position === "popper" && "h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]"
                )
              )
            }, {
              default: c(() => [
                d(f.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            g(e(Ei))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), wf = /* @__PURE__ */ i({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Eo), m({
      class: e(u)("w-full p-1", a.class)
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ri = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, Li = /* @__PURE__ */ i({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Go), m(e(o), {
      class: e(u)(
        "relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: c(() => [
        C("span", Ri, [
          g(e(Ho), null, {
            default: c(() => [
              g(e(U), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        g(e(it), null, {
          default: c(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $f = /* @__PURE__ */ i({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(it), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cf = /* @__PURE__ */ i({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(No), {
      class: b(e(u)("px-2 py-1.5 text-sm font-semibold", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ei = /* @__PURE__ */ i({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ko), m(e(o), {
      class: e(u)("flex cursor-default items-center justify-center py-1", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(ce))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gi = /* @__PURE__ */ i({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Uo), m(e(o), {
      class: e(u)("flex cursor-default items-center justify-center py-1", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(Dn))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sf = /* @__PURE__ */ i({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(qo), m(e(s), {
      class: e(u)("-mx-1 my-1 h-px bg-muted", a.class)
    }), null, 16, ["class"]));
  }
}), Hi = /* @__PURE__ */ i({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Wo), m(e(o), {
      class: e(u)(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-start text-sm whitespace-nowrap shadow-sm ring-offset-background focus:ring-1 focus:ring-ring focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:truncate",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(Yo), { "as-child": "" }, {
          default: c(() => [
            g(e(ce), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ni = /* @__PURE__ */ i({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Xo), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Af = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "SimpleSelect",
  props: /* @__PURE__ */ Q({
    options: {},
    placeholder: { default: "Select an option" },
    disabled: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const a = t, s = J(t, "modelValue");
    return (o, n) => (r(), p(e(Fi), {
      modelValue: s.value,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => s.value = l),
      disabled: t.disabled
    }, {
      default: c(() => [
        g(e(Hi), m(o.$attrs, {
          class: e(u)("w-full", a.class)
        }), {
          default: c(() => [
            g(e(Ni), { placeholder: t.placeholder }, null, 8, ["placeholder"])
          ]),
          _: 1
        }, 16, ["class"]),
        g(e(Vi), null, {
          default: c(() => [
            (r(!0), y(I, null, R(t.options, (l) => (r(), p(e(Li), {
              key: l.value,
              value: l.value,
              disabled: l.disabled
            }, {
              default: c(() => [
                k(j(l.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "disabled"]))), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "disabled"]));
  }
}), Ki = /* @__PURE__ */ i({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(et), m({ "data-slot": "sheet" }, e(n)), {
      default: c((h) => [
        d(l.$slots, "default", w($(h)))
      ]),
      _: 3
    }, 16));
  }
}), Of = /* @__PURE__ */ i({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ee), m({ "data-slot": "sheet-close" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ui = /* @__PURE__ */ i({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Pe), m({
      "data-slot": "sheet-overlay",
      class: e(u)(
        "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        a.class
      )
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qi = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    side: { default: "right" },
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class", "side"), l = v(n, o);
    return (f, h) => (r(), p(e(Oe), null, {
      default: c(() => [
        g(Ui),
        g(e(je), m({
          "data-slot": "sheet-content",
          class: e(u)(
            "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
            t.side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
            t.side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            t.side === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            t.side === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            s.class
          )
        }, { ...f.$attrs, ...e(l) }), {
          default: c(() => [
            d(f.$slots, "default"),
            g(e(ee), { class: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: c(() => [
                g(e(de), { class: "size-4" }),
                h[0] || (h[0] = C("span", { class: "sr-only" }, "Close", -1))
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
}), Pf = /* @__PURE__ */ i({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(tt), m({
      "data-slot": "sheet-description",
      class: e(u)("text-sm text-muted-foreground", a.class)
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jf = /* @__PURE__ */ i({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "sheet-footer",
      class: b(e(u)("mt-auto flex flex-col gap-2 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), kf = /* @__PURE__ */ i({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "sheet-header",
      class: b(e(u)("flex flex-col gap-1.5 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Df = /* @__PURE__ */ i({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(at), m({
      "data-slot": "sheet-title",
      class: e(u)("font-semibold text-foreground", a.class)
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tf = /* @__PURE__ */ i({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(st), m({ "data-slot": "sheet-trigger" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ke = "sidebar_state", Wi = 3600 * 24 * 7, Yi = "16rem", Xi = "18rem", Zi = "3rem", Ji = "b", [ge, Qi] = re("Sidebar"), ec = { class: "flex h-full w-full flex-col" }, tc = ["data-state", "data-collapsible", "data-variant", "data-side"], ac = {
  "data-sidebar": "sidebar",
  class: "flex h-full w-full flex-col bg-sidebar text-sidebar-foreground group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
}, Mf = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { isMobile: s, state: o, openMobile: n, setOpenMobile: l } = ge();
    return (f, h) => t.collapsible === "none" ? (r(), y("div", m({
      key: 0,
      class: e(u)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", a.class)
    }, f.$attrs), [
      d(f.$slots, "default")
    ], 16)) : e(s) ? (r(), p(e(Ki), m({
      key: 1,
      open: e(n)
    }, f.$attrs, { "onUpdate:open": e(l) }), {
      default: c(() => [
        g(e(qi), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: t.side,
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: Se({
            "--sidebar-width": e(Xi)
          })
        }, {
          default: c(() => [
            C("div", ec, [
              d(f.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (r(), y("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": e(o),
      "data-collapsible": e(o) === "collapsed" ? t.collapsible : "",
      "data-variant": t.variant,
      "data-side": t.side
    }, [
      C("div", {
        class: b(
          e(u)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            t.variant === "floating" || t.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      C("div", m({
        class: e(u)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          t.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          t.variant === "floating" || t.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+_2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          a.class
        )
      }, f.$attrs), [
        C("div", ac, [
          d(f.$slots, "default")
        ])
      ], 16)
    ], 8, tc));
  }
}), If = /* @__PURE__ */ i({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-sidebar": "content",
      class: b(
        e(u)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), zf = /* @__PURE__ */ i({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-sidebar": "footer",
      class: b(e(u)("flex flex-col gap-2 p-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ff = /* @__PURE__ */ i({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-sidebar": "group",
      class: b(e(u)("relative flex w-full min-w-0 flex-col p-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Vf = /* @__PURE__ */ i({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      "data-sidebar": "group-action",
      as: t.as,
      "as-child": t.asChild,
      class: b(
        e(u)(
          "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring transition-transform outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          a.class
        )
      )
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Rf = /* @__PURE__ */ i({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-sidebar": "group-content",
      class: b(e(u)("w-full text-sm", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Lf = /* @__PURE__ */ i({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      "data-sidebar": "group-label",
      as: t.as,
      "as-child": t.asChild,
      class: b(
        e(u)(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          a.class
        )
      )
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ef = /* @__PURE__ */ i({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-sidebar": "header",
      class: b(e(u)("flex flex-col gap-2 p-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Gf = /* @__PURE__ */ i({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Ie), {
      "data-sidebar": "input",
      class: b(
        e(u)(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          a.class
        )
      )
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Hf = /* @__PURE__ */ i({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("main", {
      class: b(
        e(u)(
          "relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Nf = /* @__PURE__ */ i({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("ul", {
      "data-sidebar": "menu",
      class: b(e(u)("flex w-full min-w-0 flex-col gap-1", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Kf = /* @__PURE__ */ i({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      "data-sidebar": "menu-action",
      class: b(
        e(u)(
          "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring transition-transform outline-none peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 after:md:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          t.showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
          a.class
        )
      ),
      as: t.as,
      "as-child": t.asChild
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), Uf = /* @__PURE__ */ i({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-sidebar": "menu-badge",
      class: b(
        e(u)(
          "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ue = /* @__PURE__ */ i({
  __name: "SidebarMenuButtonChild",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), m({
      "data-sidebar": "menu-button",
      "data-size": t.size,
      "data-active": t.isActive,
      class: e(u)(e(nc)({ variant: t.variant, size: t.size }), a.class),
      as: t.as,
      "as-child": t.asChild
    }, s.$attrs), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), qf = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(t) {
    const a = t, { isMobile: s, state: o } = ge(), n = _(a, "tooltip");
    return (l, f) => t.tooltip ? (r(), p(e(ze), { key: 1 }, {
      default: c(() => [
        g(e(Ve), { "as-child": "" }, {
          default: c(() => [
            g(Ue, w($({ ...e(n), ...l.$attrs })), {
              default: c(() => [
                d(l.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        g(e(Fe), {
          side: "right",
          align: "center",
          hidden: e(o) !== "collapsed" || e(s)
        }, {
          default: c(() => [
            typeof t.tooltip == "string" ? (r(), y(I, { key: 0 }, [
              k(j(t.tooltip), 1)
            ], 64)) : (r(), p(G(t.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (r(), p(Ue, w(m({ key: 0 }, { ...e(n), ...l.$attrs })), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wf = /* @__PURE__ */ i({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("li", {
      "data-sidebar": "menu-item",
      class: b(e(u)("group/menu-item relative", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), qe = /* @__PURE__ */ i({
  __name: "Skeleton",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", {
      "data-slot": "skeleton",
      class: b(e(u)("animate-pulse rounded-md bg-primary/10", a.class))
    }, null, 2));
  }
}), Yf = /* @__PURE__ */ i({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = T(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (o, n) => (r(), y("div", {
      "data-sidebar": "menu-skeleton",
      class: b(e(u)("flex h-8 items-center gap-2 rounded-md px-2", a.class))
    }, [
      t.showIcon ? (r(), p(e(qe), {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : V("", !0),
      g(e(qe), {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: Se({ "--skeleton-width": s.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), Xf = /* @__PURE__ */ i({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("ul", {
      "data-sidebar": "menu-badge",
      class: b(
        e(u)(
          "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Zf = /* @__PURE__ */ i({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(E), {
      "data-sidebar": "menu-sub-button",
      as: t.as,
      "as-child": t.asChild,
      "data-size": t.size,
      "data-active": t.isActive,
      class: b(
        e(u)(
          "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          t.size === "sm" && "text-xs",
          t.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          a.class
        )
      )
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), sc = {};
function oc(t, a) {
  return r(), y("li", null, [
    d(t.$slots, "default")
  ]);
}
const Jf = /* @__PURE__ */ H(sc, [["render", oc]]), Qf = /* @__PURE__ */ i({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Je?.cookie.includes(`${Ke}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = oe("(max-width: 768px)"), l = F(!1), f = ne(s, "open", o, {
      defaultValue: s.defaultOpen ?? !1,
      passive: s.open === void 0
    });
    function h(S) {
      f.value = S, document.cookie = `${Ke}=${f.value}; path=/; max-age=${Wi}`;
    }
    function B(S) {
      l.value = S;
    }
    function A() {
      return n.value ? B(!l.value) : h(!f.value);
    }
    Ze("keydown", (S) => {
      S.key === Ji && (S.metaKey || S.ctrlKey) && (S.preventDefault(), A());
    });
    const O = T(() => f.value ? "expanded" : "collapsed");
    return Qi({
      state: O,
      open: f,
      setOpen: h,
      isMobile: n,
      openMobile: l,
      setOpenMobile: B,
      toggleSidebar: A
    }), (S, P) => (r(), p(e(Ae), { "delay-duration": 0 }, {
      default: c(() => [
        C("div", m({
          style: {
            "--sidebar-width": e(Yi),
            "--sidebar-width-icon": e(Zi)
          },
          class: e(u)(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
            s.class
          )
        }, S.$attrs), [
          d(S.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), em = /* @__PURE__ */ i({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { toggleSidebar: s } = ge();
    return (o, n) => (r(), y("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: b(
        e(u)(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          a.class
        )
      ),
      onClick: n[0] || (n[0] = //@ts-ignore
      (...l) => e(s) && e(s)(...l))
    }, [
      d(o.$slots, "default")
    ], 2));
  }
}), tm = /* @__PURE__ */ i({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ue), {
      "data-sidebar": "separator",
      class: b(e(u)("mx-2 w-auto bg-sidebar-border", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), am = /* @__PURE__ */ i({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { toggleSidebar: s } = ge();
    return (o, n) => (r(), p(e(q), {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: b(e(u)("h-7 w-7", a.class)),
      onClick: e(s)
    }, {
      default: c(() => [
        g(e(ct)),
        n[0] || (n[0] = C("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), nc = L(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), sm = /* @__PURE__ */ i({
  __name: "Slider",
  props: {
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
    thumbAlignment: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(Zo), m({
      class: e(u)(
        "relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:flex-col",
        s.class
      )
    }, e(l)), {
      default: c(() => [
        g(e(Jo), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20 data-[orientation=vertical]:w-1.5" }, {
          default: c(() => [
            g(e(Qo), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (r(!0), y(I, null, R(t.modelValue, (B, A) => (r(), p(e(en), {
          key: A,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), om = /* @__PURE__ */ i({
  __name: "Sonner",
  props: {
    id: {},
    invert: { type: Boolean },
    theme: {},
    position: {},
    closeButtonPosition: {},
    hotkey: {},
    richColors: { type: Boolean },
    expand: { type: Boolean },
    duration: {},
    gap: {},
    visibleToasts: {},
    closeButton: { type: Boolean },
    toastOptions: {},
    class: {},
    style: {},
    offset: {},
    mobileOffset: {},
    dir: {},
    swipeDirections: {},
    icons: {},
    containerAriaLabel: {}
  },
  setup(t) {
    const s = _(t, "toastOptions");
    return (o, n) => (r(), p(e(bt), m({
      class: "toaster group",
      "toast-options": {
        classes: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }
    }, e(s)), {
      "success-icon": c(() => [
        g(e(mt), { class: "size-4" })
      ]),
      "info-icon": c(() => [
        g(e(ft), { class: "size-4" })
      ]),
      "warning-icon": c(() => [
        g(e(pt), { class: "size-4" })
      ]),
      "error-icon": c(() => [
        g(e(ut), { class: "size-4" })
      ]),
      "loading-icon": c(() => [
        C("div", null, [
          g(e(De), { class: "size-4 animate-spin" })
        ])
      ]),
      "close-icon": c(() => [
        g(e(dt), { class: "size-4" })
      ]),
      _: 1
    }, 16));
  }
}), nm = /* @__PURE__ */ i({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(De), {
      role: "status",
      "aria-label": "Loading",
      class: b(e(u)("size-4 animate-spin", a.class))
    }, null, 8, ["class"]));
  }
}), rm = /* @__PURE__ */ i({
  __name: "Stepper",
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    modelValue: {},
    linear: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(tn), m({
      class: e(u)("flex gap-2", s.class)
    }, e(l)), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lm = /* @__PURE__ */ i({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(an), m(e(o), {
      class: e(u)("text-xs text-muted-foreground", a.class)
    }), {
      default: c((f) => [
        d(n.$slots, "default", w($(f)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), im = /* @__PURE__ */ i({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(sn), m(e(o), {
      class: e(u)(
        "inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/50",
        // Disabled
        "group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50",
        // Active
        "group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground",
        // Completed
        "group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground",
        a.class
      )
    }), {
      default: c((f) => [
        d(n.$slots, "default", w($(f)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cm = /* @__PURE__ */ i({
  __name: "StepperItem",
  props: {
    step: {},
    disabled: { type: Boolean },
    completed: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(on), m(e(o), {
      class: e(u)("group flex items-center gap-2 data-[disabled]:pointer-events-none", a.class)
    }), {
      default: c((f) => [
        d(n.$slots, "default", w($(f)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dm = /* @__PURE__ */ i({
  __name: "StepperSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(nn), m(e(o), {
      class: e(u)(
        "bg-muted",
        // Disabled
        "group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50",
        // Completed
        "group-data-[state=completed]:bg-accent-foreground",
        a.class
      )
    }), null, 16, ["class"]));
  }
}), um = /* @__PURE__ */ i({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(rn), m(e(o), {
      class: e(u)("text-md font-semibold whitespace-nowrap", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pm = /* @__PURE__ */ i({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ln), m(e(o), {
      class: e(u)("flex flex-col items-center gap-1 rounded-md p-1 text-center", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fm = /* @__PURE__ */ i({
  __name: "Switch",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    id: {},
    value: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(cn), m(e(l), {
      class: e(u)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        s.class
      )
    }), {
      default: c(() => [
        g(e(dn), {
          class: b(
            e(u)(
              "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )
          )
        }, {
          default: c(() => [
            d(f.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rc = { class: "relative w-full overflow-auto" }, mm = /* @__PURE__ */ i({
  __name: "Table",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("div", rc, [
      C("table", {
        class: b(e(u)("w-full caption-bottom text-sm", a.class))
      }, [
        d(s.$slots, "default")
      ], 2)
    ]));
  }
}), gm = /* @__PURE__ */ i({
  __name: "TableBody",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("tbody", {
      class: b(e(u)("[&_tr:last-child]:border-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), lc = /* @__PURE__ */ i({
  __name: "TableCell",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("td", {
      class: b(
        e(u)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), _m = /* @__PURE__ */ i({
  __name: "TableHead",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("th", {
      class: b(
        e(u)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ym = /* @__PURE__ */ i({
  __name: "TableHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("thead", {
      class: b(e(u)("[&_tr]:border-b", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), bm = /* @__PURE__ */ i({
  __name: "TableFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("tfoot", {
      class: b(e(u)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ic = /* @__PURE__ */ i({
  __name: "TableRow",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("tr", {
      class: b(
        e(u)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", a.class)
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), hm = /* @__PURE__ */ i({
  __name: "TableCaption",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), y("caption", {
      class: b(e(u)("mt-4 text-sm text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), cc = { class: "flex items-center justify-center py-10" }, vm = /* @__PURE__ */ i({
  __name: "TableEmpty",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    colspan: { default: 1 }
  },
  setup(t) {
    const a = t, s = T(() => {
      const { class: o, ...n } = a;
      return n;
    });
    return (o, n) => (r(), p(ic, null, {
      default: c(() => [
        g(lc, m({
          class: e(u)("p-4 align-middle text-sm whitespace-nowrap text-foreground", a.class)
        }, s.value), {
          default: c(() => [
            C("div", cc, [
              d(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), xm = /* @__PURE__ */ i({
  __name: "Tabs",
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(un), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bm = /* @__PURE__ */ i({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(pn), m({
      class: e(u)(
        "mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        a.class
      )
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wm = /* @__PURE__ */ i({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(fn), m(e(s), {
      class: e(u)(
        "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        a.class
      )
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dc = { class: "truncate" }, $m = /* @__PURE__ */ i({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(mn), m(e(o), {
      class: e(u)(
        "inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        a.class
      )
    }), {
      default: c(() => [
        C("span", dc, [
          d(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cm = /* @__PURE__ */ i({
  __name: "TagsInput",
  props: {
    modelValue: {},
    defaultValue: {},
    addOnPaste: { type: Boolean },
    addOnTab: { type: Boolean },
    addOnBlur: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: {},
    dir: {},
    max: {},
    id: {},
    convertValue: { type: Function },
    displayValue: { type: Function },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "invalid", "addTag", "removeTag"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(gn), m(e(l), {
      class: e(u)(
        "flex flex-wrap items-center gap-2 rounded-md border border-input bg-background px-3 py-1.5 text-sm",
        s.class
      )
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sm = /* @__PURE__ */ i({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(_n), m(e(o), {
      class: e(u)("min-h-5 flex-1 bg-transparent px-1 text-sm focus:outline-none", a.class)
    }), null, 16, ["class"]));
  }
}), Am = /* @__PURE__ */ i({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(yn), m(e(o), {
      class: e(u)(
        "flex h-5 items-center rounded-md bg-secondary ring-offset-background data-[state=active]:ring-2 data-[state=active]:ring-ring data-[state=active]:ring-offset-2",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Om = /* @__PURE__ */ i({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(bn), m(e(o), {
      class: e(u)("mr-1 flex rounded bg-transparent", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(de), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pm = /* @__PURE__ */ i({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(hn), m(e(o), {
      class: e(u)("rounded bg-transparent px-2 py-0.5 text-sm", a.class)
    }), null, 16, ["class"]));
  }
}), jm = /* @__PURE__ */ i({
  __name: "Toggle",
  props: {
    defaultValue: { type: Boolean },
    modelValue: { type: [Boolean, null] },
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] },
    variant: { default: "default" },
    size: { default: "default" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = _(s, "class", "size", "variant"), l = v(n, o);
    return (f, h) => (r(), p(e(vn), m(e(l), {
      class: e(u)(e(Tt)({ variant: t.variant, size: t.size }), s.class)
    }), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tt = L(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), km = /* @__PURE__ */ i({
  __name: "ToggleGroup",
  props: {
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    type: {},
    modelValue: {},
    defaultValue: {},
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, o = a;
    $e("toggleGroup", {
      variant: s.variant,
      size: s.size
    });
    const n = _(s, "class"), l = v(n, o);
    return (f, h) => (r(), p(e(xn), m(e(l), {
      class: e(u)("flex items-center justify-center gap-1", s.class)
    }), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dm = /* @__PURE__ */ i({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {},
    size: {}
  },
  setup(t) {
    const a = t, s = Z("toggleGroup"), o = _(a, "class", "size", "variant"), n = x(o);
    return (l, f) => (r(), p(e(Bn), m(e(n), {
      class: e(u)(
        e(Tt)({
          variant: e(s)?.variant || t.variant,
          size: e(s)?.size || t.size
        }),
        a.class
      )
    }), {
      default: c((h) => [
        d(l.$slots, "default", w($(h)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  Qc as Accord,
  tl as Accordion,
  al as AccordionContent,
  sl as AccordionItem,
  ol as AccordionTrigger,
  od as Alert,
  nd as AlertDescription,
  er as AlertDialog,
  tr as AlertDialogAction,
  ar as AlertDialogCancel,
  sr as AlertDialogContent,
  or as AlertDialogDescription,
  nr as AlertDialogFooter,
  rr as AlertDialogHeader,
  lr as AlertDialogTitle,
  Dc as AlertDialogTrigger,
  rd as AlertTitle,
  ld as AspectRatio,
  id as Avatar,
  cd as AvatarFallback,
  dd as AvatarImage,
  ud as Badge,
  pd as Breadcrumb,
  fd as BreadcrumbEllipsis,
  md as BreadcrumbItem,
  gd as BreadcrumbLink,
  _d as BreadcrumbList,
  yd as BreadcrumbPage,
  bd as BreadcrumbSeparator,
  q as Button,
  hd as ButtonGroup,
  vd as ButtonGroupSeparator,
  xd as ButtonGroupText,
  Rr as COLLAPSIBLE_SIDEBAR_WIDTH,
  Lr as COLLAPSIBLE_SIDEBAR_WIDTH_ICON,
  Hc as COLLAPSIBLE_SIDEBAR_WIDTH_MOBILE,
  ul as Calendar,
  pl as CalendarCell,
  fl as CalendarCellTrigger,
  ml as CalendarGrid,
  gl as CalendarGridBody,
  _l as CalendarGridHead,
  He as CalendarGridRow,
  yl as CalendarHeadCell,
  bl as CalendarHeader,
  hl as CalendarHeading,
  vl as CalendarNextButton,
  xl as CalendarPrevButton,
  Bl as Card,
  wl as CardContent,
  Bd as CardDescription,
  wd as CardFooter,
  $l as CardHeader,
  Cl as CardTitle,
  $d as Carousel,
  Cd as CarouselContent,
  Sd as CarouselItem,
  Od as CarouselNext,
  Ad as CarouselPrevious,
  Pd as ChartCrosshair,
  jd as ChartLegend,
  kd as ChartSingleTooltip,
  we as ChartTooltip,
  Td as Checkbox,
  Md as Collapsible,
  Id as CollapsibleContent,
  Uc as CollapsibleMain,
  Yc as CollapsibleMenuButton,
  Xc as CollapsibleMenuGroup,
  Kc as CollapsibleSidebarDesktop,
  qc as CollapsibleSidebarTrigger,
  zd as CollapsibleTrigger,
  Nc as CollapsibleTwoColumnLayout,
  Fd as Combobox,
  Vd as ComboboxAnchor,
  Im as ComboboxCancel,
  Rd as ComboboxEmpty,
  Ld as ComboboxGroup,
  Ed as ComboboxInput,
  Gd as ComboboxItem,
  zm as ComboboxItemIndicator,
  Hd as ComboboxList,
  Nd as ComboboxSeparator,
  Fm as ComboboxTrigger,
  Tl as Command,
  Jd as CommandDialog,
  Qd as CommandEmpty,
  eu as CommandGroup,
  tu as CommandInput,
  au as CommandItem,
  su as CommandList,
  ou as CommandSeparator,
  nu as CommandShortcut,
  Tc as ConfirmDialog,
  ru as ContextMenu,
  lu as ContextMenuCheckboxItem,
  iu as ContextMenuContent,
  cu as ContextMenuGroup,
  du as ContextMenuItem,
  uu as ContextMenuLabel,
  pu as ContextMenuRadioGroup,
  fu as ContextMenuRadioItem,
  mu as ContextMenuSeparator,
  gu as ContextMenuShortcut,
  _u as ContextMenuSub,
  yu as ContextMenuSubContent,
  bu as ContextMenuSubTrigger,
  hu as ContextMenuTrigger,
  vu as DatePicker,
  Ml as Dialog,
  Kd as DialogClose,
  Il as DialogContent,
  Ud as DialogDescription,
  qd as DialogFooter,
  Wd as DialogHeader,
  Yd as DialogScrollContent,
  Xd as DialogTitle,
  Zd as DialogTrigger,
  xu as Drawer,
  Bu as DrawerClose,
  wu as DrawerContent,
  $u as DrawerDescription,
  Cu as DrawerFooter,
  Su as DrawerHeader,
  Jl as DrawerOverlay,
  Au as DrawerTitle,
  Ou as DrawerTrigger,
  Pu as DropdownMenu,
  ju as DropdownMenuCheckboxItem,
  ku as DropdownMenuContent,
  Du as DropdownMenuGroup,
  Tu as DropdownMenuItem,
  Mu as DropdownMenuLabel,
  Vm as DropdownMenuPortal,
  Iu as DropdownMenuRadioGroup,
  zu as DropdownMenuRadioItem,
  Fu as DropdownMenuSeparator,
  Vu as DropdownMenuShortcut,
  Ru as DropdownMenuSub,
  Lu as DropdownMenuSubContent,
  Eu as DropdownMenuSubTrigger,
  Gu as DropdownMenuTrigger,
  Mc as Email,
  Hu as Empty,
  Nu as EmptyContent,
  Ku as EmptyDescription,
  Uu as EmptyHeader,
  qu as EmptyMedia,
  Wu as EmptyTitle,
  Dt as FORM_ITEM_INJECTION_KEY,
  Yu as Field,
  Xu as FieldContent,
  Zu as FieldDescription,
  Ju as FieldError,
  Qu as FieldGroup,
  ep as FieldLabel,
  tp as FieldLegend,
  ap as FieldSeparator,
  sp as FieldSet,
  op as FieldTitle,
  Zc as Flasher,
  Gm as Form,
  np as FormControl,
  rp as FormDescription,
  Hm as FormField,
  Nm as FormFieldArray,
  lp as FormItem,
  ip as FormLabel,
  cp as FormMessage,
  Fc as Header,
  Jc as Heading,
  dp as HoverCard,
  up as HoverCardContent,
  pp as HoverCardTrigger,
  Ie as Input,
  fp as InputGroup,
  mp as InputGroupAddon,
  gp as InputGroupButton,
  _p as InputGroupInput,
  yp as InputGroupText,
  bp as InputGroupTextarea,
  hp as InputOTP,
  vp as InputOTPGroup,
  xp as InputOTPSeparator,
  Bp as InputOTPSlot,
  wp as Item,
  $p as ItemActions,
  Cp as ItemContent,
  Sp as ItemDescription,
  Ap as ItemFooter,
  Op as ItemGroup,
  Pp as ItemHeader,
  jp as ItemMedia,
  kp as ItemSeparator,
  Dp as ItemTitle,
  Tp as Kbd,
  Mp as KbdGroup,
  kt as Label,
  Ic as LaravelPaginator,
  Vc as Main,
  Ip as Menubar,
  zp as MenubarCheckboxItem,
  Fp as MenubarContent,
  Vp as MenubarGroup,
  Rp as MenubarItem,
  Lp as MenubarLabel,
  Ep as MenubarMenu,
  Gp as MenubarRadioGroup,
  Hp as MenubarRadioItem,
  Np as MenubarSeparator,
  Kp as MenubarShortcut,
  Up as MenubarSub,
  qp as MenubarSubContent,
  Wp as MenubarSubTrigger,
  Yp as MenubarTrigger,
  Xp as NavigationMenu,
  Zp as NavigationMenuContent,
  Jp as NavigationMenuIndicator,
  Qp as NavigationMenuItem,
  ef as NavigationMenuLink,
  tf as NavigationMenuList,
  af as NavigationMenuTrigger,
  Bi as NavigationMenuViewport,
  ad as Number,
  At as NumberField,
  Ot as NumberFieldContent,
  ed as NumberFieldDecrement,
  td as NumberFieldIncrement,
  Pt as NumberFieldInput,
  sf as Pagination,
  of as PaginationContent,
  nf as PaginationEllipsis,
  rf as PaginationFirst,
  lf as PaginationItem,
  cf as PaginationLast,
  df as PaginationNext,
  uf as PaginationPrevious,
  pf as PinInput,
  ff as PinInputGroup,
  mf as PinInputSeparator,
  gf as PinInputSlot,
  Yl as Popover,
  Rm as PopoverAnchor,
  Xl as PopoverContent,
  Zl as PopoverTrigger,
  sd as Price,
  _f as Progress,
  yf as RadioGroup,
  bf as RadioGroupItem,
  hf as RangeCalendar,
  Ci as RangeCalendarCell,
  Si as RangeCalendarCellTrigger,
  Ai as RangeCalendarGrid,
  Oi as RangeCalendarGridBody,
  Pi as RangeCalendarGridHead,
  Ne as RangeCalendarGridRow,
  ji as RangeCalendarHeadCell,
  ki as RangeCalendarHeader,
  Di as RangeCalendarHeading,
  Ti as RangeCalendarNextButton,
  Mi as RangeCalendarPrevButton,
  vf as ResizableHandle,
  Lm as ResizablePanel,
  xf as ResizablePanelGroup,
  Bf as ScrollArea,
  zi as ScrollBar,
  Fi as Select,
  Vi as SelectContent,
  wf as SelectGroup,
  Li as SelectItem,
  $f as SelectItemText,
  Cf as SelectLabel,
  Ei as SelectScrollDownButton,
  Gi as SelectScrollUpButton,
  Sf as SelectSeparator,
  Hi as SelectTrigger,
  Ni as SelectValue,
  ue as Separator,
  Ki as Sheet,
  Of as SheetClose,
  qi as SheetContent,
  Pf as SheetDescription,
  jf as SheetFooter,
  kf as SheetHeader,
  Ui as SheetOverlay,
  Df as SheetTitle,
  Tf as SheetTrigger,
  Mf as Sidebar,
  If as SidebarContent,
  zf as SidebarFooter,
  Ff as SidebarGroup,
  Vf as SidebarGroupAction,
  Rf as SidebarGroupContent,
  Lf as SidebarGroupLabel,
  Ef as SidebarHeader,
  Gf as SidebarInput,
  Hf as SidebarInset,
  Nf as SidebarMenu,
  Kf as SidebarMenuAction,
  Uf as SidebarMenuBadge,
  qf as SidebarMenuButton,
  Wf as SidebarMenuItem,
  Yf as SidebarMenuSkeleton,
  Xf as SidebarMenuSub,
  Zf as SidebarMenuSubButton,
  Jf as SidebarMenuSubItem,
  Qf as SidebarProvider,
  em as SidebarRail,
  tm as SidebarSeparator,
  am as SidebarTrigger,
  Af as SimpleSelect,
  qe as Skeleton,
  sm as Slider,
  nm as Spinner,
  rm as Stepper,
  lm as StepperDescription,
  im as StepperIndicator,
  cm as StepperItem,
  dm as StepperSeparator,
  um as StepperTitle,
  pm as StepperTrigger,
  fm as Switch,
  mm as Table,
  gm as TableBody,
  hm as TableCaption,
  lc as TableCell,
  vm as TableEmpty,
  bm as TableFooter,
  _m as TableHead,
  ym as TableHeader,
  ic as TableRow,
  xm as Tabs,
  Bm as TabsContent,
  wm as TabsList,
  $m as TabsTrigger,
  Cm as TagsInput,
  Sm as TagsInputInput,
  Am as TagsInputItem,
  Om as TagsInputItemDelete,
  Pm as TagsInputItemText,
  ui as Textarea,
  Wc as Tip,
  om as Toaster,
  jm as Toggle,
  km as ToggleGroup,
  Dm as ToggleGroupItem,
  ze as Tooltip,
  Fe as TooltipContent,
  qr as TooltipProvider,
  Ve as TooltipTrigger,
  zc as TwoColumnLayout,
  Rc as TwoColumnLayoutSidebar,
  Lc as TwoColumnLayoutSidebarDesktop,
  Ec as TwoColumnLayoutSidebarMobile,
  Gc as TwoColumnLayoutSidebarTrigger,
  nl as alertVariants,
  rl as avatarVariant,
  ll as badgeVariants,
  cl as buttonGroupVariants,
  M as buttonVariants,
  u as cn,
  Oc as createContext,
  Dd as defaultColors,
  ai as emptyMediaVariants,
  ii as fieldVariants,
  Sc as gooey,
  pi as inputGroupAddonVariants,
  fi as inputGroupButtonVariants,
  bi as itemMediaVariants,
  yi as itemVariants,
  wi as navigationMenuTriggerStyle,
  Cc as preset,
  Vl as provideCommandContext,
  Ll as provideCommandGroupContext,
  nc as sidebarMenuButtonVariants,
  Tt as toggleVariants,
  pe as useCarousel,
  te as useCollapsibleSidebar,
  fe as useCommand,
  Rl as useCommandGroup,
  dr as useConfirmDialog,
  Jr as useFlasher,
  kc as useMobileBottomNav,
  Pc as useMobileNavigation,
  ge as useSidebar,
  jc as useSwipeNavigation,
  Ac as valueUpdater
};
