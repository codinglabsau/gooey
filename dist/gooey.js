import { clsx as Bt } from "clsx";
import { twMerge as wt } from "tailwind-merge";
import { inject as Z, provide as me, ref as z, onMounted as H, onUnmounted as ge, computed as T, defineComponent as i, openBlock as r, createBlock as p, unref as e, normalizeProps as w, guardReactiveProps as $, withCtx as c, renderSlot as d, normalizeClass as h, mergeProps as m, createVNode as g, createElementBlock as b, createTextVNode as M, toDisplayString as k, createElementVNode as A, createCommentVNode as V, Fragment as I, resolveDynamicComponent as _e, watch as q, renderList as L, createApp as pe, nextTick as $t, reactive as Ct, toValue as St, withDirectives as Ve, isRef as Re, vModelText as Le, normalizeStyle as be, useModel as At, mergeModels as Ot } from "vue";
import { useMediaQuery as ee, useSwipe as Pt, reactiveOmit as _, useVModel as te, useEventListener as Ge, defaultDocument as Ee, createInjectionState as jt, useCurrentElement as kt } from "@vueuse/core";
import { useForwardPropsEmits as v, AlertDialogRoot as Dt, Primitive as G, AlertDialogAction as Mt, AlertDialogCancel as Tt, AlertDialogPortal as It, AlertDialogOverlay as zt, AlertDialogContent as Ft, AlertDialogDescription as Vt, AlertDialogTitle as Rt, AlertDialogTrigger as Lt, createContext as ae, TooltipProvider as ye, TooltipRoot as Gt, TooltipPortal as Et, TooltipContent as Ht, TooltipArrow as Nt, TooltipTrigger as Kt, AccordionRoot as Ut, AccordionContent as qt, useForwardProps as x, AccordionItem as Wt, AccordionHeader as Xt, AccordionTrigger as Yt, AspectRatio as Jt, AvatarRoot as Qt, AvatarFallback as Zt, AvatarImage as ea, Separator as He, CalendarRoot as ta, CalendarCell as aa, CalendarCellTrigger as sa, CalendarGrid as oa, CalendarGridBody as na, CalendarGridHead as ra, CalendarGridRow as la, CalendarHeadCell as ia, CalendarHeader as ca, CalendarHeading as da, CalendarNext as ua, CalendarPrev as pa, CheckboxRoot as fa, CheckboxIndicator as ma, CollapsibleRoot as ga, CollapsibleContent as _a, CollapsibleTrigger as ba, ComboboxRoot as ya, ComboboxAnchor as ha, ComboboxEmpty as va, ComboboxGroup as xa, ComboboxLabel as Ba, ComboboxInput as wa, ComboboxItem as $a, ComboboxPortal as Ca, ComboboxContent as Sa, ComboboxViewport as Aa, ComboboxSeparator as Oa, useFilter as Pa, ListboxRoot as ja, DialogRoot as Ne, DialogClose as W, DialogPortal as he, DialogOverlay as ve, DialogContent as xe, DialogDescription as Ke, DialogTitle as Ue, DialogTrigger as qe, useId as Be, ListboxGroup as ka, ListboxGroupLabel as Da, ListboxFilter as Ma, ListboxItem as Ta, ListboxContent as Ia, ContextMenuRoot as za, ContextMenuCheckboxItem as Fa, ContextMenuItemIndicator as We, ContextMenuPortal as Va, ContextMenuContent as Ra, ContextMenuGroup as La, ContextMenuItem as Ga, ContextMenuLabel as Ea, ContextMenuRadioGroup as Ha, ContextMenuRadioItem as Na, ContextMenuSeparator as Ka, ContextMenuSub as Ua, ContextMenuSubContent as qa, ContextMenuSubTrigger as Wa, ContextMenuTrigger as Xa, DropdownMenuRoot as Ya, DropdownMenuCheckboxItem as Ja, DropdownMenuItemIndicator as Xe, DropdownMenuPortal as Qa, DropdownMenuContent as Za, DropdownMenuGroup as es, DropdownMenuItem as ts, DropdownMenuLabel as as, DropdownMenuRadioGroup as ss, DropdownMenuRadioItem as os, DropdownMenuSeparator as ns, DropdownMenuSub as rs, DropdownMenuSubContent as ls, DropdownMenuSubTrigger as is, DropdownMenuTrigger as cs, Label as ds, Slot as us, HoverCardRoot as ps, HoverCardPortal as fs, HoverCardContent as ms, HoverCardTrigger as gs, MenubarRoot as _s, MenubarCheckboxItem as bs, MenubarItemIndicator as Ye, MenubarPortal as Je, MenubarContent as ys, MenubarGroup as hs, MenubarItem as vs, MenubarLabel as xs, MenubarMenu as Bs, MenubarRadioGroup as ws, MenubarRadioItem as $s, MenubarSeparator as Cs, MenubarSub as Ss, MenubarSubContent as As, MenubarSubTrigger as Os, MenubarTrigger as Ps, NavigationMenuViewport as js, NavigationMenuRoot as ks, NavigationMenuContent as Ds, NavigationMenuIndicator as Ms, NavigationMenuItem as Ts, NavigationMenuLink as Is, NavigationMenuList as zs, NavigationMenuTrigger as Fs, NumberFieldRoot as Vs, NumberFieldDecrement as Rs, NumberFieldIncrement as Ls, NumberFieldInput as Gs, PaginationRoot as Es, PaginationList as Hs, PaginationEllipsis as Ns, PaginationFirst as Ks, PaginationListItem as Us, PaginationLast as qs, PaginationNext as Ws, PaginationPrev as Xs, PinInputRoot as Ys, PinInputInput as Js, PopoverRoot as Qs, PopoverPortal as Zs, PopoverContent as eo, PopoverTrigger as to, ProgressRoot as ao, ProgressIndicator as so, RadioGroupRoot as oo, RadioGroupItem as no, RadioGroupIndicator as ro, RangeCalendarRoot as lo, RangeCalendarCell as io, RangeCalendarCellTrigger as co, RangeCalendarGrid as uo, RangeCalendarGridBody as po, RangeCalendarGridHead as fo, RangeCalendarGridRow as mo, RangeCalendarHeadCell as go, RangeCalendarHeader as _o, RangeCalendarHeading as bo, RangeCalendarNext as yo, RangeCalendarPrev as ho, SplitterResizeHandle as vo, SplitterGroup as xo, ScrollAreaScrollbar as Bo, ScrollAreaThumb as wo, ScrollAreaRoot as $o, ScrollAreaViewport as Co, ScrollAreaCorner as So, SelectRoot as Ao, SelectPortal as Oo, SelectContent as Po, SelectViewport as jo, SelectGroup as ko, SelectItem as Do, SelectItemIndicator as Mo, SelectItemText as Qe, SelectLabel as To, SelectScrollDownButton as Io, SelectScrollUpButton as zo, SelectSeparator as Fo, SelectTrigger as Vo, SelectIcon as Ro, SelectValue as Lo, SliderRoot as Go, SliderTrack as Eo, SliderRange as Ho, SliderThumb as No, StepperRoot as Ko, StepperDescription as Uo, StepperIndicator as qo, StepperItem as Wo, StepperSeparator as Xo, StepperTitle as Yo, StepperTrigger as Jo, SwitchRoot as Qo, SwitchThumb as Zo, TabsRoot as en, TabsContent as tn, TabsList as an, TabsTrigger as sn, TagsInputRoot as on, TagsInputInput as nn, TagsInputItem as rn, TagsInputItemDelete as ln, TagsInputItemText as cn, Toggle as dn, ToggleGroupRoot as un, ToggleGroupItem as pn } from "reka-ui";
import { ComboboxCancel as nm, ComboboxItemIndicator as rm, ComboboxTrigger as lm, DropdownMenuPortal as im, PopoverAnchor as cm, SplitterPanel as dm } from "reka-ui";
import { cva as R } from "class-variance-authority";
import { Menu as fn, PanelLeft as Ze, XIcon as et, Loader2Icon as we, OctagonXIcon as tt, TriangleAlertIcon as at, InfoIcon as st, CircleCheckIcon as ot, ChevronDown as se, MoreHorizontal as nt, ChevronRight as N, ChevronLeft as rt, ArrowLeft as mn, ArrowRight as gn, Check as K, X as oe, Search as _n, Circle as $e, MinusIcon as bn, Minus as lt, Plus as yn, ChevronLeftIcon as it, ChevronRightIcon as ct, GripVertical as hn, ChevronUp as vn } from "lucide-vue-next";
import { toast as U, Toaster as dt } from "vue-sonner";
import xn from "embla-carousel-vue";
import { omit as ut, BulletLegend as Bn } from "@unovis/ts";
import { VisTooltip as pt, VisCrosshair as wn, VisBulletLegend as $n } from "@unovis/vue";
import { DrawerRoot as Cn, DrawerClose as Sn, DrawerOverlay as An, DrawerPortal as On, DrawerContent as Pn, DrawerDescription as jn, DrawerTitle as kn, DrawerTrigger as Dn } from "vaul-vue";
import { FieldContextKey as Mn, ErrorMessage as Tn } from "vee-validate";
import { Form as pm, Field as fm, FieldArray as mm } from "vee-validate";
import { OTPInput as In, useVueOTPContext as zn } from "vue-input-otp";
function Fn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var de, Pe;
function Vn() {
  if (Pe) return de;
  Pe = 1;
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
  return de = a, de;
}
var ue, je;
function Rn() {
  if (je) return ue;
  je = 1;
  const t = Vn();
  function a(s) {
    return Object.fromEntries(
      Object.entries(s).filter(([o]) => o !== "DEFAULT")
    );
  }
  return ue = t(
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
  ), ue;
}
var Ln = Rn();
const Gn = /* @__PURE__ */ Fn(Ln), Wi = {
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
  plugins: [Gn]
};
function u(...t) {
  return wt(Bt(t));
}
function Xi(t, a) {
  a.value = typeof t == "function" ? t(a.value) : t;
}
function Yi(t, a) {
  const s = typeof t == "string" && !a ? `${t}Context` : a, o = Symbol(s);
  return [(f) => {
    const y = Z(o, f);
    if (y || y === null) return y;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(t) ? `one of the following components: ${t.join(", ")}` : `\`${t}\``}`
    );
  }, (f) => (me(o, f), f)];
}
function Ji() {
  const t = ee("(max-width: 768px)"), a = ee("(min-width: 769px) and (max-width: 1024px)"), s = z(!1);
  H(() => {
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
function Qi(t, a = {}) {
  const { threshold: s = 50, enabled: o = !0, onSwipeLeft: n, onSwipeRight: l } = a, { direction: f, lengthX: y } = Pt(t, {
    passive: !0,
    onSwipeEnd() {
      o && Math.abs(y.value) >= s && (f.value === "left" && n ? n() : f.value === "right" && l && l());
    }
  });
  return {
    direction: f,
    lengthX: y
  };
}
function Zi() {
  const t = z(!0);
  let a = 0, s = !1;
  const o = () => {
    s || (window.requestAnimationFrame(() => {
      const n = window.scrollY, l = n - a;
      l > 10 && n > 100 ? t.value = !1 : l < -10 && (t.value = !0), a = n, s = !1;
    }), s = !0);
  };
  return H(() => {
    window.addEventListener("scroll", o, { passive: !0 });
  }), ge(() => {
    window.removeEventListener("scroll", o);
  }), {
    isVisible: t
  };
}
const En = /* @__PURE__ */ i({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Dt), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X = /* @__PURE__ */ i({
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
    return (s, o) => (r(), p(e(G), {
      "data-slot": "button",
      as: t.as,
      "as-child": t.asChild,
      class: h(e(u)(e(F)({ variant: t.variant, size: t.size }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), F = R(
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
), Hn = /* @__PURE__ */ i({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Mt), m(e(s), {
      class: e(u)(e(F)(), a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nn = /* @__PURE__ */ i({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Tt), m(e(s), {
      class: e(u)(e(F)({ variant: "outline" }), "mt-2 sm:mt-0", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kn = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(It), null, {
      default: c(() => [
        g(e(zt), { class: "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" }),
        g(e(Ft), m(e(l), {
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
}), Un = /* @__PURE__ */ i({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Vt), m(e(s), {
      class: e(u)("text-sm text-muted-foreground", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qn = /* @__PURE__ */ i({
  __name: "AlertDialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Wn = /* @__PURE__ */ i({
  __name: "AlertDialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("flex flex-col gap-y-2 text-center sm:text-left", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Xn = /* @__PURE__ */ i({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Rt), m(e(s), {
      class: e(u)("text-lg font-semibold", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ec = /* @__PURE__ */ i({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Lt), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tc = /* @__PURE__ */ i({
  __name: "ConfirmDialog",
  setup(t) {
    const { isOpen: a, close: s, cancelButton: o, actionButton: n, title: l, description: f, variant: y } = Qn();
    return (B, S) => (r(), p(e(En), { open: e(a) }, {
      default: c(() => [
        g(e(Kn), {
          onEscapeKeyDown: e(s),
          onPointerDownOutside: e(s)
        }, {
          default: c(() => [
            g(e(Wn), null, {
              default: c(() => [
                g(e(Xn), null, {
                  default: c(() => [
                    M(k(e(l)), 1)
                  ]),
                  _: 1
                }),
                g(e(Un), null, {
                  default: c(() => [
                    M(k(e(f)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            g(e(qn), null, {
              default: c(() => [
                g(e(Nn), {
                  onClick: e(o).handler
                }, {
                  default: c(() => [
                    M(k(e(o).label ?? "Cancel"), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                g(e(Hn), {
                  variant: e(y),
                  onClick: e(n).handler
                }, {
                  default: c(() => [
                    M(k(e(n).label ?? "Confirm"), 1)
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
}), Ce = z(!1), ft = z(""), mt = z(""), gt = z(null), _t = z({
  label: void 0,
  handler: () => {
  }
}), bt = z({
  label: void 0,
  handler: () => {
  }
}), Yn = (t) => {
  ft.value = t.title, mt.value = t.description, gt.value = t.variant, _t.value = ke(t.cancelAction), bt.value = ke(t.action), Jn();
}, ke = (t) => typeof t == "string" ? {
  label: t,
  handler: Q
} : typeof t == "function" ? {
  label: void 0,
  handler: t
} : typeof t == "object" && t !== void 0 ? {
  label: t.label ?? void 0,
  handler: t.handler ?? Q
} : {
  label: void 0,
  handler: Q
}, Q = () => {
  Ce.value = !1;
}, Jn = () => {
  Ce.value = !0;
};
function Qn() {
  return {
    confirmDialog: (t) => Yn(t),
    title: ft,
    description: mt,
    variant: gt,
    isOpen: Ce,
    close: Q,
    cancelButton: _t,
    actionButton: bt
  };
}
const E = (t, a) => {
  const s = t.__vccOpts || t;
  for (const [o, n] of a)
    s[o] = n;
  return s;
}, Zn = {}, er = { class: "h-full bg-background dark:text-white" };
function tr(t, a) {
  return r(), b("div", er, [
    d(t.$slots, "default")
  ]);
}
const ac = /* @__PURE__ */ E(Zn, [["render", tr]]), ar = {}, sr = { class: "sticky top-0 z-50 flex h-16 shrink-0 items-center gap-x-4 bg-background/60 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8" };
function or(t, a) {
  return r(), b("header", sr, [
    d(t.$slots, "default")
  ]);
}
const sc = /* @__PURE__ */ E(ar, [["render", or]]), nr = {}, rr = { class: "px-4 py-6 sm:px-6 lg:px-8 lg:pl-72" };
function lr(t, a) {
  return r(), b("main", rr, [
    d(t.$slots, "default")
  ]);
}
const oc = /* @__PURE__ */ E(nr, [["render", lr]]), ir = {};
function cr(t, a) {
  return d(t.$slots, "default");
}
const nc = /* @__PURE__ */ E(ir, [["render", cr]]), dr = {}, ur = { class: "hidden px-6 py-6 lg:fixed lg:inset-y-0 lg:top-16 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, pr = { class: "gap-y-5 overflow-y-auto" };
function fr(t, a) {
  return r(), b("div", ur, [
    A("div", pr, [
      d(t.$slots, "default")
    ])
  ]);
}
const rc = /* @__PURE__ */ E(dr, [["render", fr]]), mr = {};
function gr(t, a) {
  return d(t.$slots, "default");
}
const lc = /* @__PURE__ */ E(mr, [["render", gr]]), _r = {
  type: "button",
  class: "-m-2.5 p-2.5 lg:hidden"
}, ic = /* @__PURE__ */ i({
  __name: "TwoColumnLayoutSidebarTrigger",
  setup(t) {
    return (a, s) => (r(), b("button", _r, [
      s[0] || (s[0] = A("span", { class: "sr-only" }, "Open sidebar", -1)),
      g(e(fn), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      })
    ]));
  }
}), De = "sidebar_state", br = 3600 * 24 * 7, yr = "18rem", hr = "3rem", cc = "18rem", vr = "b", [Y, xr] = ae("CollapsibleTwoColumnLayout"), Br = ["data-state", "data-collapsible"], dc = /* @__PURE__ */ i({
  __name: "CollapsibleTwoColumnLayout",
  props: {
    defaultOpen: { type: Boolean, default: !Ee?.cookie.includes(`${De}=false`) },
    open: { type: Boolean, default: void 0 },
    collapsible: { default: "icon" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = ee("(max-width: 1023px)"), l = z(!1), f = te(s, "open", o, {
      defaultValue: s.defaultOpen ?? !0,
      passive: s.open === void 0
    });
    function y(C) {
      f.value = C, s.collapsible !== "none" && (document.cookie = `${De}=${f.value}; path=/; max-age=${br}`);
    }
    function B(C) {
      l.value = C;
    }
    function S() {
      return n.value ? B(!l.value) : y(!f.value);
    }
    s.collapsible !== "none" && Ge("keydown", (C) => {
      C.key === vr && (C.metaKey || C.ctrlKey) && (C.preventDefault(), S());
    });
    const O = T(() => f.value ? "expanded" : "collapsed");
    return xr({
      state: O,
      open: f,
      setOpen: y,
      isMobile: n,
      openMobile: l,
      setOpenMobile: B,
      toggleSidebar: S,
      collapsible: s.collapsible
    }), (C, P) => (r(), p(e(ye), { "delay-duration": 0 }, {
      default: c(() => [
        A("div", m({
          style: {
            "--collapsible-sidebar-width": e(yr),
            "--collapsible-sidebar-width-icon": e(hr)
          },
          class: e(u)("group/collapsible-layout h-full bg-background dark:text-white", s.class),
          "data-state": O.value,
          "data-collapsible": t.collapsible
        }, C.$attrs), [
          d(C.$slots, "default")
        ], 16, Br)
      ]),
      _: 3
    }));
  }
}), wr = ["data-state", "data-collapsible"], $r = { class: "flex-1 overflow-y-auto" }, uc = /* @__PURE__ */ i({
  __name: "CollapsibleSidebarDesktop",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = Y(), l = T(() => n === "icon" && s.value === "collapsed");
    return (f, y) => e(o) ? V("", !0) : (r(), b("div", {
      key: 0,
      class: h(
        e(u)(
          "fixed inset-y-0 top-16 z-50 flex flex-col px-6 py-6 transition-[width] duration-200 ease-linear",
          l.value ? "w-[var(--collapsible-sidebar-width-icon)] px-2" : "w-[var(--collapsible-sidebar-width)]",
          a.class
        )
      ),
      "data-state": e(s),
      "data-collapsible": e(n)
    }, [
      A("div", $r, [
        d(f.$slots, "default")
      ])
    ], 10, wr));
  }
}), Cr = ["data-state"], pc = /* @__PURE__ */ i({
  __name: "CollapsibleMain",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = Y(), l = T(() => n === "icon" && s.value === "collapsed");
    return (f, y) => (r(), b("main", {
      class: h(
        e(u)(
          "px-4 py-6 transition-[padding-left] duration-200 ease-linear sm:px-6 lg:px-8",
          !e(o) && (l.value ? "lg:pl-[var(--collapsible-sidebar-width-icon)]" : "lg:pl-[var(--collapsible-sidebar-width)]"),
          a.class
        )
      ),
      "data-state": e(s)
    }, [
      d(f.$slots, "default")
    ], 10, Cr));
  }
}), fc = /* @__PURE__ */ i({
  __name: "CollapsibleSidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { toggleSidebar: s, collapsible: o } = Y();
    return (n, l) => e(o) !== "none" ? (r(), p(e(X), {
      key: 0,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: h(e(u)("h-7 w-7", a.class)),
      onClick: e(s)
    }, {
      default: c(() => [
        g(e(Ze), { class: "h-5 w-5" }),
        l[0] || (l[0] = A("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"])) : V("", !0);
  }
}), mc = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(Sr), null, {
      default: c(() => [
        g(e(Se), w($(e(n))), {
          default: c(() => [
            g(e(Oe), {
              class: h(t.indicator ? "underline decoration-dotted underline-offset-4" : "")
            }, {
              default: c(() => [
                d(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            g(e(Ae), w($(l.$attrs)), {
              default: c(() => [
                d(l.$slots, "tooltip", {}, () => [
                  M(k(t.tooltip), 1)
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
}), Se = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(Gt), m({ "data-slot": "tooltip" }, e(n)), {
      default: c((y) => [
        d(l.$slots, "default", w($(y)))
      ]),
      _: 3
    }, 16));
  }
}), Ae = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Et), null, {
      default: c(() => [
        g(e(Ht), m({ "data-slot": "tooltip-content" }, { ...e(l), ...f.$attrs }, {
          class: e(u)(
            "z-50 w-fit animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default"),
            g(e(Nt), { class: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Sr = /* @__PURE__ */ i({
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
    return (s, o) => (r(), p(e(ye), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oe = /* @__PURE__ */ i({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Kt), m({ "data-slot": "tooltip-trigger" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ar = ["data-active", "data-collapsed"], Or = ["data-active", "data-collapsed"], gc = /* @__PURE__ */ i({
  __name: "CollapsibleMenuButton",
  props: {
    tooltip: {},
    active: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = Y(), l = T(() => n === "icon" && s.value === "collapsed"), f = T(() => a.tooltip && l.value && !o.value);
    return (y, B) => f.value ? (r(), p(e(Se), { key: 0 }, {
      default: c(() => [
        g(e(Oe), { "as-child": "" }, {
          default: c(() => [
            A("button", {
              type: "button",
              class: h(
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
              d(y.$slots, "default")
            ], 10, Ar)
          ]),
          _: 3
        }),
        g(e(Ae), {
          side: "right",
          align: "center"
        }, {
          default: c(() => [
            typeof t.tooltip == "string" ? (r(), b(I, { key: 0 }, [
              M(k(t.tooltip), 1)
            ], 64)) : (r(), p(_e(t.tooltip), { key: 1 }))
          ]),
          _: 1
        })
      ]),
      _: 3
    })) : (r(), b("button", {
      key: 1,
      type: "button",
      class: h(
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
      d(y.$slots, "default")
    ], 10, Or));
  }
}), Pr = {
  key: 0,
  class: "mb-2 block px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
}, _c = /* @__PURE__ */ i({
  __name: "CollapsibleMenuGroup",
  props: {
    label: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { state: s, isMobile: o, collapsible: n } = Y(), l = T(
      () => n === "icon" && s.value === "collapsed" && !o.value
    );
    return (f, y) => (r(), b("div", {
      class: h(e(u)("space-y-1", a.class))
    }, [
      t.label && !l.value ? (r(), b("span", Pr, k(t.label), 1)) : V("", !0),
      d(f.$slots, "default")
    ], 2));
  }
});
function jr(t, a) {
  return Object.entries(t).map(([s, o]) => a === "key" ? s : a === "both" ? `${s}: ${o}` : o).join(`
`);
}
function kr() {
  return {
    info: (t, a) => {
      U.info("FYI", {
        description: t,
        ...a
      });
    },
    success: (t, a) => {
      U.success("Success", {
        description: t,
        ...a
      });
    },
    warning: (t, a) => {
      U.warning("Warning", {
        description: t,
        ...a
      });
    },
    error: (t, a = "value", s) => {
      U.error("Oh snap! Some errors were encountered.", {
        description: jr(t, a),
        ...s
      });
    },
    flash: (t, a) => {
      U(t, a);
    }
  };
}
const bc = /* @__PURE__ */ i({
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
    } = kr();
    return q(
      () => a.info,
      (f) => {
        f && s(a.info);
      },
      {
        immediate: !0
      }
    ), q(
      () => a.success,
      (f) => {
        f && o(a.success);
      },
      { immediate: !0 }
    ), q(
      () => a.warning,
      (f) => {
        f && n(a.warning);
      },
      { immediate: !0 }
    ), q(
      () => a.errors,
      () => {
        a.errors !== void 0 && Object.keys(a.errors).length > 0 && l(a.errors, a.objectFormat);
      }
    ), (f, y) => (r(), p(e(dt), {
      class: h(e(u)("toaster group", a.class)),
      "toast-options": {
        classes: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          success: "group-[.toaster]:border-success",
          error: "group-[.toaster]:border-destructive",
          warning: "group-[.toaster]:border-warning",
          info: "group-[.toaster]:border-primary",
          description: "group-[.toast]:text-muted-foreground group-[.toast]:whitespace-pre-line",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }
    }, {
      "success-icon": c(() => [
        g(e(ot), { class: "size-4 text-success" })
      ]),
      "info-icon": c(() => [
        g(e(st), { class: "size-4 text-primary" })
      ]),
      "warning-icon": c(() => [
        g(e(at), { class: "size-4 text-warning" })
      ]),
      "error-icon": c(() => [
        g(e(tt), { class: "size-4 text-destructive" })
      ]),
      "loading-icon": c(() => [
        A("div", null, [
          g(e(we), { class: "size-4 animate-spin" })
        ])
      ]),
      "close-icon": c(() => [
        g(e(et), { class: "size-4" })
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Dr = { class: "flex items-center justify-between space-y-2" }, Mr = { class: "flex items-center space-x-2" }, yc = /* @__PURE__ */ i({
  __name: "Heading",
  props: {
    as: { default: "h2" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", Dr, [
      (r(), p(_e(t.as), {
        class: h(e(u)("text-3xl font-bold tracking-tight", a.class))
      }, {
        default: c(() => [
          d(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      A("div", Mr, [
        d(s.$slots, "actions")
      ])
    ]));
  }
}), Tr = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(Ut), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hc = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(Tr, w($(e(n))), {
      default: c(() => [
        (r(!0), b(I, null, L(t.content, (y, B) => (r(), p(e(zr), {
          key: B,
          value: "item-" + B
        }, {
          default: c(() => [
            g(e(Fr), null, {
              default: c(() => [
                d(l.$slots, B + ".title", { item: y }, () => [
                  M(k(y.title), 1)
                ])
              ]),
              _: 2
            }, 1024),
            g(e(Ir), null, {
              default: c(() => [
                d(l.$slots, B + ".content", { item: y }, () => [
                  M(k(y.content), 1)
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
}), Ir = /* @__PURE__ */ i({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(qt), m(e(s), { class: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }), {
      default: c(() => [
        A("div", {
          class: h(e(u)("pt-0 pb-4", a.class))
        }, [
          d(o.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), zr = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Wt), m(e(o), {
      class: e(u)("border-b", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fr = /* @__PURE__ */ i({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Xt), { class: "flex" }, {
      default: c(() => [
        g(e(Yt), m(e(s), {
          class: e(u)(
            "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
            a.class
          )
        }), {
          default: c(() => [
            d(o.$slots, "default"),
            d(o.$slots, "icon", {}, () => [
              g(e(se), { class: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), vc = /* @__PURE__ */ i({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)(e(Vr)({ variant: t.variant }), a.class)),
      role: "alert"
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), xc = /* @__PURE__ */ i({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("text-sm [&_p]:leading-relaxed", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Bc = /* @__PURE__ */ i({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("h5", {
      class: h(e(u)("mb-1 leading-none font-medium tracking-tight", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Vr = R(
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
), wc = /* @__PURE__ */ i({
  __name: "AspectRatio",
  props: {
    ratio: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Jt), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $c = /* @__PURE__ */ i({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Qt), {
      class: h(e(u)(e(Rr)({ size: t.size, shape: t.shape }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Cc = /* @__PURE__ */ i({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Zt), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sc = /* @__PURE__ */ i({
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
    return (s, o) => (r(), p(e(ea), m(a, { class: "h-full w-full object-cover" }), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rr = R(
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
), Ac = /* @__PURE__ */ i({
  __name: "Badge",
  props: {
    variant: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)(e(Lr)({ variant: t.variant }), a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Lr = R(
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
), Oc = /* @__PURE__ */ i({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("nav", {
      "aria-label": "breadcrumb",
      class: h(a.class)
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Pc = /* @__PURE__ */ i({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: h(e(u)("flex h-9 w-9 items-center justify-center", a.class))
    }, [
      d(s.$slots, "default", {}, () => [
        g(e(nt), { class: "h-4 w-4" })
      ]),
      o[0] || (o[0] = A("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), jc = /* @__PURE__ */ i({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("li", {
      class: h(e(u)("inline-flex items-center gap-1.5", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), kc = /* @__PURE__ */ i({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(G), {
      as: t.as,
      "as-child": t.asChild,
      class: h(e(u)("transition-colors hover:text-foreground", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Dc = /* @__PURE__ */ i({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("ol", {
      class: h(
        e(u)(
          "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Mc = /* @__PURE__ */ i({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: h(e(u)("font-normal text-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Tc = /* @__PURE__ */ i({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: h(e(u)("[&>svg]:size-3.5", a.class))
    }, [
      d(s.$slots, "default", {}, () => [
        g(e(N))
      ])
    ], 2));
  }
}), Gr = ["data-orientation"], Ic = /* @__PURE__ */ i({
  __name: "ButtonGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    orientation: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": a.orientation,
      class: h(e(u)(e(Er)({ orientation: a.orientation }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, Gr));
  }
}), ne = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(He), m({ "data-slot": "separator" }, e(s), {
      class: e(u)(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        a.class
      )
    }), null, 16, ["class"]));
  }
}), zc = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(ne), m({ "data-slot": "button-group-separator" }, e(s), {
      orientation: a.orientation,
      class: e(u)("relative !m-0 self-stretch bg-input data-[orientation=vertical]:h-auto", a.class)
    }), null, 16, ["orientation", "class"]));
  }
}), Fc = /* @__PURE__ */ i({
  __name: "ButtonGroupText",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    orientation: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(G), {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": a.orientation,
      as: t.as,
      "as-child": t.asChild,
      class: h(
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
}), Er = R(
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
), Hr = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Vc = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(ta), m({
      class: e(u)("p-3", s.class)
    }, e(l)), {
      default: c(({ grid: B, weekDays: S }) => [
        g(e(Yr), null, {
          default: c(() => [
            g(e(Zr)),
            g(e(Jr)),
            g(e(Qr))
          ]),
          _: 1
        }),
        A("div", Hr, [
          (r(!0), b(I, null, L(B, (O) => (r(), p(e(Ur), {
            key: O.value.toString()
          }, {
            default: c(() => [
              g(e(Wr), null, {
                default: c(() => [
                  g(e(Me), null, {
                    default: c(() => [
                      (r(!0), b(I, null, L(S, (C) => (r(), p(e(Xr), { key: C }, {
                        default: c(() => [
                          M(k(C), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              g(e(qr), null, {
                default: c(() => [
                  (r(!0), b(I, null, L(O.rows, (C, P) => (r(), p(e(Me), {
                    key: `weekDate-${P}`,
                    class: "mt-2 w-full"
                  }, {
                    default: c(() => [
                      (r(!0), b(I, null, L(C, (j) => (r(), p(e(Nr), {
                        key: j.toString(),
                        date: j
                      }, {
                        default: c(() => [
                          g(e(Kr), {
                            day: j,
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
}), Nr = /* @__PURE__ */ i({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(aa), m({
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
}), Kr = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(sa), m({
      class: e(u)(
        e(F)({ variant: "ghost" }),
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
}), Ur = /* @__PURE__ */ i({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(oa), m({
      class: e(u)("w-full border-collapse space-y-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qr = /* @__PURE__ */ i({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(na), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wr = /* @__PURE__ */ i({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ra), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Me = /* @__PURE__ */ i({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(la), m({
      class: e(u)("flex", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xr = /* @__PURE__ */ i({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ia), m({
      class: e(u)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yr = /* @__PURE__ */ i({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ca), m({
      class: e(u)("relative flex w-full items-center justify-between pt-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jr = /* @__PURE__ */ i({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(da), m({
      class: e(u)("text-sm font-medium", a.class)
    }, e(o)), {
      default: c(({ headingValue: f }) => [
        d(n.$slots, "default", { headingValue: f }, () => [
          M(k(f), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qr = /* @__PURE__ */ i({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ua), m({
      class: e(u)(
        e(F)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(N), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zr = /* @__PURE__ */ i({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(pa), m({
      class: e(u)(
        e(F)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(rt), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), el = /* @__PURE__ */ i({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("rounded-xl border bg-card text-card-foreground shadow", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), tl = /* @__PURE__ */ i({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("p-6 pt-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Rc = /* @__PURE__ */ i({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("p", {
      class: h(e(u)("text-sm text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Lc = /* @__PURE__ */ i({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("flex items-center p-6 pt-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), al = /* @__PURE__ */ i({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("flex flex-col gap-y-1.5 p-6", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), sl = /* @__PURE__ */ i({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("h3", {
      class: h(e(u)("leading-none font-semibold tracking-tight", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), [ol, nl] = jt(
  ({ opts: t, orientation: a, plugins: s }, o) => {
    const [n, l] = xn(
      {
        ...t,
        axis: a === "horizontal" ? "x" : "y"
      },
      s
    );
    function f() {
      l.value?.scrollPrev();
    }
    function y() {
      l.value?.scrollNext();
    }
    const B = z(!1), S = z(!1);
    function O(C) {
      B.value = C?.canScrollNext() || !1, S.value = C?.canScrollPrev() || !1;
    }
    return H(() => {
      l.value && (l.value?.on("init", O), l.value?.on("reInit", O), l.value?.on("select", O), o("init-api", l.value));
    }), {
      carouselRef: n,
      carouselApi: l,
      canScrollPrev: S,
      canScrollNext: B,
      scrollPrev: f,
      scrollNext: y,
      orientation: a
    };
  }
);
function re() {
  const t = nl();
  if (!t) throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const Gc = /* @__PURE__ */ i({
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
      carouselApi: y,
      carouselRef: B,
      orientation: S,
      scrollNext: O,
      scrollPrev: C
    } = ol(o, n);
    a({
      canScrollNext: l,
      canScrollPrev: f,
      carouselApi: y,
      carouselRef: B,
      orientation: S,
      scrollNext: O,
      scrollPrev: C
    });
    function P(j) {
      const D = o.orientation === "vertical" ? "ArrowUp" : "ArrowLeft", J = o.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (j.key === D) {
        j.preventDefault(), C();
        return;
      }
      j.key === J && (j.preventDefault(), O());
    }
    return (j, D) => (r(), b("div", {
      class: h(e(u)("relative", o.class)),
      role: "region",
      "aria-roledescription": "carousel",
      tabindex: "0",
      onKeydown: P
    }, [
      d(j.$slots, "default", {
        canScrollNext: e(l),
        canScrollPrev: e(f),
        carouselApi: e(y),
        carouselRef: e(B),
        orientation: e(S),
        scrollNext: e(O),
        scrollPrev: e(C)
      })
    ], 34));
  }
}), Ec = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "CarouselContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { carouselRef: s, orientation: o } = re();
    return (n, l) => (r(), b("div", {
      ref_key: "carouselRef",
      ref: s,
      class: "overflow-hidden"
    }, [
      A("div", m({
        class: e(u)("flex", e(o) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", a.class)
      }, n.$attrs), [
        d(n.$slots, "default")
      ], 16)
    ], 512));
  }
}), Hc = /* @__PURE__ */ i({
  __name: "CarouselItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { orientation: s } = re();
    return (o, n) => (r(), b("div", {
      role: "group",
      "aria-roledescription": "slide",
      class: h(
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
}), Nc = /* @__PURE__ */ i({
  __name: "CarouselPrevious",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { orientation: s, canScrollPrev: o, scrollPrev: n } = re();
    return (l, f) => (r(), p(e(X), {
      disabled: !e(o),
      class: h(
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
          g(e(mn), { class: "size-4 text-current" }),
          f[0] || (f[0] = A("span", { class: "sr-only" }, "Previous Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Kc = /* @__PURE__ */ i({
  __name: "CarouselNext",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { orientation: s, canScrollNext: o, scrollNext: n } = re();
    return (l, f) => (r(), p(e(X), {
      disabled: !e(o),
      class: h(
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
          g(e(gn), { class: "size-4 text-current" }),
          f[0] || (f[0] = A("span", { class: "sr-only" }, "Next Slide", -1))
        ])
      ]),
      _: 3
    }, 8, ["disabled", "class", "onClick"]));
  }
}), Uc = /* @__PURE__ */ i({
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
        const f = document.createElement("div"), y = Object.entries(ut(l, [a.index])).map(([S, O]) => ({ ...a.items.find((P) => P.name === S), value: O })), B = a.customTooltip ?? fe;
        return pe(B, { title: l[a.index].toString(), data: y }).mount(
          f
        ), s.set(l, f.innerHTML), f.innerHTML;
      }
    }
    function n(l, f) {
      return a.colors[f] ?? "transparent";
    }
    return (l, f) => (r(), b(I, null, [
      g(e(pt), {
        "horizontal-shift": 20,
        "vertical-shift": 20
      }),
      g(e(wn), {
        template: o,
        color: n
      })
    ], 64));
  }
}), qc = /* @__PURE__ */ i({
  __name: "ChartLegend",
  props: {
    items: { default: () => [] }
  },
  emits: ["legendItemClick", "update:items"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = z();
    function l() {
      const y = `.${Bn.selectors.item}`;
      $t(() => {
        const B = n.value?.querySelectorAll(y), S = F({ variant: "ghost", size: "xs" }).split(" ");
        B?.forEach((O) => O.classList.add(...S, "!inline-flex", "!mr-2"));
      });
    }
    H(() => {
      l();
    });
    function f(y, B) {
      o("legendItemClick", y, B);
      const S = s.items[B], O = S ? !S.inactive : !0;
      s.items.some((P) => P.inactive) && O ? o(
        "update:items",
        s.items.map((P) => ({ ...P, inactive: !1 }))
      ) : o(
        "update:items",
        s.items.map(
          (P) => P.name === y.name ? { ...y, inactive: !1 } : { ...P, inactive: !0 }
        )
      ), l();
    }
    return (y, B) => (r(), b("div", {
      ref_key: "elRef",
      ref: n,
      class: "w-max",
      style: {
        "--vis-legend-bullet-size": "16px"
      }
    }, [
      g(e($n), {
        items: t.items,
        "on-legend-item-click": f
      }, null, 8, ["items"])
    ], 512));
  }
}), Wc = /* @__PURE__ */ i({
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
      const y = a.valueFormatter ?? ((B) => `${B}`);
      if (a.index in n) {
        if (s.has(n))
          return s.get(n);
        {
          const B = document.createElement("div"), S = Object.entries(ut(n, [a.index])).map(([C, P]) => ({ ...a.items?.find((D) => D.name === C), value: y(P) })), O = a.customTooltip ?? fe;
          return pe(O, { title: n[a.index], data: S }).mount(B), s.set(n, B.innerHTML), B.innerHTML;
        }
      } else {
        const B = n.data;
        if (s.has(B))
          return s.get(B);
        {
          const S = f[l];
          if (!S) return "";
          const O = getComputedStyle(S), C = [
            { name: B.name, value: y(B[a.index]), color: O.fill }
          ], P = document.createElement("div"), j = a.customTooltip ?? fe;
          return pe(j, { title: n[a.index], data: C }).mount(P), s.set(n, P.innerHTML), P.innerHTML;
        }
      }
    }
    return (n, l) => (r(), p(e(pt), {
      "horizontal-shift": 20,
      "vertical-shift": 20,
      triggers: {
        [t.selector]: o
      }
    }, null, 8, ["triggers"]));
  }
}), rl = { class: "flex items-center" }, ll = { class: "mr-2 h-2.5 w-2.5" }, il = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 30 30"
}, cl = ["stroke", "fill"], dl = { class: "ml-4 font-semibold" }, fe = /* @__PURE__ */ i({
  __name: "ChartTooltip",
  props: {
    title: {},
    data: {}
  },
  setup(t) {
    return (a, s) => (r(), p(e(el), { class: "text-sm" }, {
      default: c(() => [
        t.title ? (r(), p(e(al), {
          key: 0,
          class: "border-b p-3"
        }, {
          default: c(() => [
            g(e(sl), null, {
              default: c(() => [
                M(k(t.title), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : V("", !0),
        g(e(tl), { class: "flex min-w-[180px] flex-col gap-1 p-3" }, {
          default: c(() => [
            (r(!0), b(I, null, L(t.data, (o, n) => (r(), b("div", {
              key: n,
              class: "flex justify-between"
            }, [
              A("div", rl, [
                A("span", ll, [
                  (r(), b("svg", il, [
                    A("path", {
                      d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                      stroke: o.color,
                      fill: o.color,
                      "stroke-width": "1"
                    }, null, 8, cl)
                  ]))
                ]),
                A("span", null, k(o.name), 1)
              ]),
              A("span", dl, k(o.value), 1)
            ]))), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
function Xc(t = 3) {
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
const Yc = /* @__PURE__ */ i({
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
      const { class: f, ...y } = s;
      return y;
    }), l = v(n, o);
    return (f, y) => (r(), p(e(fa), m(e(l), {
      class: e(u)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        s.class
      )
    }), {
      default: c(() => [
        g(e(ma), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: c(() => [
            d(f.$slots, "default", {}, () => [
              g(e(K), { class: "h-4 w-4" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jc = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(ga), w($(e(n))), {
      default: c(({ open: y }) => [
        d(l.$slots, "default", { open: y })
      ]),
      _: 3
    }, 16));
  }
}), Qc = /* @__PURE__ */ i({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(_a), m(a, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zc = /* @__PURE__ */ i({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ba), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ed = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(ya), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), td = /* @__PURE__ */ i({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ha), m(e(o), {
      class: e(u)("w-[200px]", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ad = /* @__PURE__ */ i({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(va), m(e(s), {
      class: e(u)("py-6 text-center text-sm", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sd = /* @__PURE__ */ i({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    heading: {}
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(xa), m(e(s), {
      class: e(u)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        a.class
      )
    }), {
      default: c(() => [
        t.heading ? (r(), p(e(Ba), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: c(() => [
            M(k(t.heading), 1)
          ]),
          _: 1
        })) : V("", !0),
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), od = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(wa), m(e(l), {
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
}), nd = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e($a), m(e(l), {
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
}), rd = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Ca), null, {
      default: c(() => [
        g(e(Sa), m(e(l), {
          class: e(u)(
            "z-50 w-[200px] rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            s.class
          )
        }), {
          default: c(() => [
            g(e(Aa), null, {
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
}), ld = /* @__PURE__ */ i({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Oa), m(e(s), {
      class: e(u)("-mx-1 h-px bg-border", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ul = /* @__PURE__ */ i({
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
    const s = t, o = a, n = _(s, "class"), l = v(n, o), f = z(/* @__PURE__ */ new Map()), y = z(/* @__PURE__ */ new Map()), { contains: B } = Pa({ sensitivity: "base" }), S = Ct({
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
      if (!S.search) {
        S.filtered.count = f.value.size;
        return;
      }
      S.filtered.groups = /* @__PURE__ */ new Set();
      let C = 0;
      for (const [P, j] of f.value) {
        const D = B(j, S.search);
        S.filtered.items.set(P, D ? 1 : 0), D && C++;
      }
      for (const [P, j] of y.value)
        for (const D of j)
          if (S.filtered.items.get(D) > 0) {
            S.filtered.groups.add(P);
            break;
          }
      S.filtered.count = C;
    }
    return q(
      () => S.search,
      () => {
        O();
      }
    ), _l({
      allItems: f,
      allGroups: y,
      filterState: S
    }), (C, P) => (r(), p(e(ja), m(e(l), {
      class: e(u)(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        s.class
      )
    }), {
      default: c(() => [
        d(C.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pl = /* @__PURE__ */ i({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Ne), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), id = /* @__PURE__ */ i({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(W), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fl = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(he), null, {
      default: c(() => [
        g(e(ve), { class: "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" }),
        g(e(xe), m(e(l), {
          class: e(u)(
            "fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            s.class
          )
        }), {
          default: c(() => [
            d(f.$slots, "default"),
            g(e(W), { class: "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
              default: c(() => [
                g(e(oe), { class: "h-4 w-4" }),
                y[0] || (y[0] = A("span", { class: "sr-only" }, "Close", -1))
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
}), cd = /* @__PURE__ */ i({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ke), m(e(o), {
      class: e(u)("text-sm text-muted-foreground", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dd = /* @__PURE__ */ i({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ud = /* @__PURE__ */ i({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(e(u)("flex flex-col gap-y-1.5 text-center sm:text-left", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), pd = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(he), null, {
      default: c(() => [
        g(e(ve), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" }, {
          default: c(() => [
            g(e(xe), m({
              class: e(u)(
                "relative z-50 my-8 grid w-full max-w-lg gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                s.class
              )
            }, e(l), {
              onPointerDownOutside: y[0] || (y[0] = (B) => {
                const S = B.detail.originalEvent, O = S.target;
                (S.offsetX > O.clientWidth || S.offsetY > O.clientHeight) && B.preventDefault();
              })
            }), {
              default: c(() => [
                d(f.$slots, "default"),
                g(e(W), { class: "absolute top-4 right-4 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                  default: c(() => [
                    g(e(oe), { class: "h-4 w-4" }),
                    y[1] || (y[1] = A("span", { class: "sr-only" }, "Close", -1))
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
}), fd = /* @__PURE__ */ i({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ue), m(e(o), {
      class: e(u)("text-lg leading-none font-semibold tracking-tight", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), md = /* @__PURE__ */ i({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(qe), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gd = /* @__PURE__ */ i({
  __name: "CommandDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(pl), w($(e(n))), {
      default: c(() => [
        g(e(fl), { class: "overflow-hidden p-0 shadow-lg" }, {
          default: c(() => [
            g(ul, { class: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, {
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
}), _d = /* @__PURE__ */ i({
  __name: "CommandEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), { filterState: o } = le(), n = T(() => !!o.search && o.filtered.count === 0);
    return (l, f) => n.value ? (r(), p(e(G), m({ key: 0 }, e(s), {
      class: e(u)("py-6 text-center text-sm", a.class)
    }), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"])) : V("", !0);
  }
}), bd = /* @__PURE__ */ i({
  __name: "CommandGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    heading: {}
  },
  setup(t) {
    const a = t, s = _(a, "class"), { allGroups: o, filterState: n } = le(), l = Be(), f = T(() => n.search ? n.filtered.groups.has(l) : !0);
    return yl({ id: l }), H(() => {
      o.value.has(l) || o.value.set(l, /* @__PURE__ */ new Set());
    }), ge(() => {
      o.value.delete(l);
    }), (y, B) => (r(), p(e(ka), m(e(s), {
      id: e(l),
      class: e(u)(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        a.class
      ),
      hidden: f.value ? void 0 : !0
    }), {
      default: c(() => [
        t.heading ? (r(), p(e(Da), {
          key: 0,
          class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
        }, {
          default: c(() => [
            M(k(t.heading), 1)
          ]),
          _: 1
        })) : V("", !0),
        d(y.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "class", "hidden"]));
  }
}), ml = {
  class: "flex items-center border-b px-3",
  "cmdk-input-wrapper": ""
}, yd = /* @__PURE__ */ i({
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
    const a = t, s = _(a, "class"), o = x(s), { filterState: n } = le();
    return (l, f) => (r(), b("div", ml, [
      g(e(_n), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      g(e(Ma), m({ ...e(o), ...l.$attrs }, {
        modelValue: e(n).search,
        "onUpdate:modelValue": f[0] || (f[0] = (y) => e(n).search = y),
        "auto-focus": "",
        class: e(u)(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          a.class
        )
      }), null, 16, ["modelValue", "class"])
    ]));
  }
}), hd = /* @__PURE__ */ i({
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
    const s = t, o = a, n = _(s, "class"), l = v(n, o), f = Be(), { filterState: y, allItems: B, allGroups: S } = le(), O = bl(), C = T(() => {
      if (y.search) {
        const D = y.filtered.items.get(f);
        return D === void 0 ? !0 : D > 0;
      } else
        return !0;
    }), P = z(), j = kt(P);
    return H(() => {
      if (!(j.value instanceof HTMLElement)) return;
      B.value.set(f, j.value.textContent ?? s?.value.toString());
      const D = O?.id;
      D && (S.value.has(D) ? S.value.get(D)?.add(f) : S.value.set(D, /* @__PURE__ */ new Set([f])));
    }), ge(() => {
      B.value.delete(f);
    }), (D, J) => C.value ? (r(), p(e(Ta), m({ key: 0 }, e(l), {
      id: e(f),
      ref_key: "itemRef",
      ref: P,
      class: e(u)(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0",
        s.class
      ),
      onSelect: J[0] || (J[0] = () => {
        e(y).search = "";
      })
    }), {
      default: c(() => [
        d(D.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "class"])) : V("", !0);
  }
}), gl = { role: "presentation" }, vd = /* @__PURE__ */ i({
  __name: "CommandList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ia), m(e(o), {
      class: e(u)("max-h-[300px] overflow-x-hidden overflow-y-auto", a.class)
    }), {
      default: c(() => [
        A("div", gl, [
          d(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xd = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(He), m(e(s), {
      class: e(u)("-mx-1 h-px bg-border", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bd = /* @__PURE__ */ i({
  __name: "CommandShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("span", {
      class: h(e(u)("ml-auto text-xs tracking-widest text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), [le, _l] = ae("Command"), [bl, yl] = ae("CommandGroup"), wd = /* @__PURE__ */ i({
  __name: "ContextMenu",
  props: {
    pressOpenDelay: {},
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(za), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, $d = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Fa), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        A("span", hl, [
          g(e(We), null, {
            default: c(() => [
              g(e(K), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cd = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Va), null, {
      default: c(() => [
        g(e(Ra), m(e(l), {
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
}), Sd = /* @__PURE__ */ i({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(La), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ad = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Ga), m(e(l), {
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
}), Od = /* @__PURE__ */ i({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ea), m(e(s), {
      class: e(u)("px-2 py-1.5 text-sm font-semibold text-foreground", t.inset && "pl-8", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pd = /* @__PURE__ */ i({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Ha), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, jd = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Na), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        A("span", vl, [
          g(e(We), null, {
            default: c(() => [
              g(e($e), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kd = /* @__PURE__ */ i({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ka), m(e(s), {
      class: e(u)("-mx-1 my-1 h-px bg-border", a.class)
    }), null, 16, ["class"]));
  }
}), Dd = /* @__PURE__ */ i({
  __name: "ContextMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("span", {
      class: h(e(u)("ml-auto text-xs tracking-widest text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Md = /* @__PURE__ */ i({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Ua), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Td = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(qa), m(e(l), {
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
}), Id = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Wa), m(e(o), {
      class: e(u)(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t.inset && "pl-8",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(N), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zd = /* @__PURE__ */ i({
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), p(e(Xa), w($(e(s))), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fd = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(Cn), m({ "data-slot": "drawer" }, e(n)), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vd = /* @__PURE__ */ i({
  __name: "DrawerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Sn), m({ "data-slot": "drawer-close" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xl = /* @__PURE__ */ i({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(An), m({ "data-slot": "drawer-overlay" }, e(s), {
      class: e(u)(
        "fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        a.class
      )
    }), null, 16, ["class"]));
  }
}), Rd = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(On), null, {
      default: c(() => [
        g(xl),
        g(e(Pn), m({ "data-slot": "drawer-content" }, e(n), {
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
            f[0] || (f[0] = A("div", { class: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            d(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ld = /* @__PURE__ */ i({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(jn), m({ "data-slot": "drawer-description" }, e(s), {
      class: e(u)("text-sm text-muted-foreground", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gd = /* @__PURE__ */ i({
  __name: "DrawerFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "drawer-footer",
      class: h(e(u)("mt-auto flex flex-col gap-2 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ed = /* @__PURE__ */ i({
  __name: "DrawerHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "drawer-header",
      class: h(e(u)("flex flex-col gap-1.5 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Hd = /* @__PURE__ */ i({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(kn), m({ "data-slot": "drawer-title" }, e(s), {
      class: e(u)("font-semibold text-foreground", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nd = /* @__PURE__ */ i({
  __name: "DrawerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Dn), m({ "data-slot": "drawer-trigger" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kd = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(Ya), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Ud = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Ja), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        A("span", Bl, [
          g(e(Xe), null, {
            default: c(() => [
              g(e(K), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qd = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Qa), null, {
      default: c(() => [
        g(e(Za), m(e(l), {
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
}), Wd = /* @__PURE__ */ i({
  __name: "DropdownMenuGroup",
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
}), Xd = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(ts), m(e(o), {
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
}), Yd = /* @__PURE__ */ i({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(as), m(e(o), {
      class: e(u)("px-2 py-1.5 text-sm font-semibold", t.inset && "pl-8", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jd = /* @__PURE__ */ i({
  __name: "DropdownMenuRadioGroup",
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
}), wl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Qd = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(os), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        A("span", wl, [
          g(e(Xe), null, {
            default: c(() => [
              g(e($e), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zd = /* @__PURE__ */ i({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(ns), m(e(s), {
      class: e(u)("-mx-1 my-1 h-px bg-muted", a.class)
    }), null, 16, ["class"]));
  }
}), eu = /* @__PURE__ */ i({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("span", {
      class: h(e(u)("ml-auto text-xs tracking-widest opacity-60", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), tu = /* @__PURE__ */ i({
  __name: "DropdownMenuSub",
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
}), au = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(ls), m(e(l), {
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
}), su = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(is), m(e(o), {
      class: e(u)(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent data-[state=open]:bg-accent",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(N), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ou = /* @__PURE__ */ i({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), p(e(cs), m({ class: "outline-none" }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nu = /* @__PURE__ */ i({
  __name: "Empty",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "empty",
      class: h(
        e(u)(
          "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ru = /* @__PURE__ */ i({
  __name: "EmptyContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "empty-content",
      class: h(
        e(u)(
          "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), lu = /* @__PURE__ */ i({
  __name: "EmptyDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("p", {
      "data-slot": "empty-description",
      class: h(
        e(u)(
          "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), iu = /* @__PURE__ */ i({
  __name: "EmptyHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "empty-header",
      class: h(e(u)("flex max-w-sm flex-col items-center gap-2 text-center", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), $l = ["data-variant"], cu = /* @__PURE__ */ i({
  __name: "EmptyMedia",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "empty-icon",
      "data-variant": t.variant,
      class: h(e(u)(e(Cl)({ variant: t.variant }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, $l));
  }
}), du = /* @__PURE__ */ i({
  __name: "EmptyTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "empty-title",
      class: h(e(u)("text-lg font-medium tracking-tight", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Cl = R(
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
), Sl = ["data-orientation"], uu = /* @__PURE__ */ i({
  __name: "Field",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    orientation: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      role: "group",
      "data-slot": "field",
      "data-orientation": t.orientation,
      class: h(e(u)(e(kl)({ orientation: t.orientation }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, Sl));
  }
}), pu = /* @__PURE__ */ i({
  __name: "FieldContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "field-content",
      class: h(e(u)("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), fu = /* @__PURE__ */ i({
  __name: "FieldDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("p", {
      "data-slot": "field-description",
      class: h(
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
}), Al = {
  key: 2,
  class: "ml-4 flex list-disc flex-col gap-1"
}, mu = /* @__PURE__ */ i({
  __name: "FieldError",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    errors: {}
  },
  setup(t) {
    const a = t, s = T(() => !a.errors || a.errors.length === 0 ? null : a.errors.length === 1 && a.errors[0]?.message ? a.errors[0].message : a.errors.some((o) => o?.message) ? a.errors : null);
    return (o, n) => o.$slots.default || s.value ? (r(), b("div", {
      key: 0,
      role: "alert",
      "data-slot": "field-error",
      class: h(e(u)("text-sm font-normal text-destructive", a.class))
    }, [
      o.$slots.default ? d(o.$slots, "default", { key: 0 }) : typeof s.value == "string" ? (r(), b(I, { key: 1 }, [
        M(k(s.value), 1)
      ], 64)) : Array.isArray(s.value) ? (r(), b("ul", Al, [
        (r(!0), b(I, null, L(s.value, (l, f) => (r(), b("li", { key: f }, k(l?.message), 1))), 128))
      ])) : V("", !0)
    ], 2)) : V("", !0);
  }
}), gu = /* @__PURE__ */ i({
  __name: "FieldGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "field-group",
      class: h(
        e(u)(
          "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), yt = /* @__PURE__ */ i({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(ds), m(e(s), {
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
}), _u = /* @__PURE__ */ i({
  __name: "FieldLabel",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(yt), {
      "data-slot": "field-label",
      class: h(
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
}), Ol = ["data-variant"], bu = /* @__PURE__ */ i({
  __name: "FieldLegend",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("legend", {
      "data-slot": "field-legend",
      "data-variant": t.variant,
      class: h(
        e(u)(
          "mb-3 font-medium",
          "data-[variant=legend]:text-base",
          "data-[variant=label]:text-sm",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 10, Ol));
  }
}), Pl = ["data-content"], jl = {
  key: 0,
  class: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
  "data-slot": "field-separator-content"
}, yu = /* @__PURE__ */ i({
  __name: "FieldSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "field-separator",
      "data-content": !!s.$slots.default,
      class: h(
        e(u)("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", a.class)
      )
    }, [
      g(e(ne), { class: "absolute inset-0 top-1/2" }),
      s.$slots.default ? (r(), b("span", jl, [
        d(s.$slots, "default")
      ])) : V("", !0)
    ], 10, Pl));
  }
}), hu = /* @__PURE__ */ i({
  __name: "FieldSet",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("fieldset", {
      "data-slot": "field-set",
      class: h(
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
}), vu = /* @__PURE__ */ i({
  __name: "FieldTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "field-label",
      class: h(
        e(u)(
          "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), kl = R(
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
), ht = /* @__PURE__ */ Symbol();
function ie() {
  const t = Z(Mn), a = Z(ht);
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
const xu = /* @__PURE__ */ i({
  __name: "FormControl",
  setup(t) {
    const { error: a, formItemId: s, formDescriptionId: o, formMessageId: n } = ie();
    return (l, f) => (r(), p(e(us), {
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
}), Dl = ["id"], Bu = /* @__PURE__ */ i({
  __name: "FormDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { formDescriptionId: s } = ie();
    return (o, n) => (r(), b("p", {
      id: e(s),
      class: h(e(u)("text-sm text-muted-foreground", a.class))
    }, [
      d(o.$slots, "default")
    ], 10, Dl));
  }
}), wu = /* @__PURE__ */ i({
  __name: "FormItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = Be();
    return me(ht, s), (o, n) => (r(), b("div", {
      class: h(e(u)("space-y-2", a.class))
    }, [
      d(o.$slots, "default")
    ], 2));
  }
}), $u = /* @__PURE__ */ i({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { error: s, formItemId: o } = ie();
    return (n, l) => (r(), p(e(yt), {
      class: h(e(u)(e(s) && "text-destructive", a.class)),
      for: e(o)
    }, {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "for"]));
  }
}), Cu = /* @__PURE__ */ i({
  __name: "FormMessage",
  setup(t) {
    const { name: a, formMessageId: s } = ie();
    return (o, n) => (r(), p(e(Tn), {
      id: e(s),
      as: "p",
      name: St(e(a)),
      class: "text-[0.8rem] font-medium text-destructive"
    }, null, 8, ["id", "name"]));
  }
}), Su = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(ps), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Au = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(fs), null, {
      default: c(() => [
        g(e(ms), m(e(o), {
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
}), Ou = /* @__PURE__ */ i({
  __name: "HoverCardTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(gs), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vt = /* @__PURE__ */ i({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, n = te(s, "modelValue", a, {
      passive: !0,
      defaultValue: s.defaultValue
    });
    return (l, f) => Ve((r(), b("input", {
      "onUpdate:modelValue": f[0] || (f[0] = (y) => Re(n) ? n.value = y : null),
      "data-slot": "input",
      class: h(
        e(u)(
          "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          s.class
        )
      )
    }, null, 2)), [
      [Le, e(n)]
    ]);
  }
}), Pu = /* @__PURE__ */ i({
  __name: "InputGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "input-group",
      role: "group",
      class: h(
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
}), Ml = ["data-align"], ju = /* @__PURE__ */ i({
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
    return (o, n) => (r(), b("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": a.align,
      class: h(e(u)(e(Il)({ align: a.align }), a.class)),
      onClick: s
    }, [
      d(o.$slots, "default")
    ], 10, Ml));
  }
}), ku = /* @__PURE__ */ i({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(X), {
      "data-size": a.size,
      variant: a.variant,
      class: h(e(u)(e(zl)({ size: a.size }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), Du = /* @__PURE__ */ i({
  __name: "InputGroupInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(vt), {
      "data-slot": "input-group-control",
      class: h(
        e(u)(
          "flex-1 rounded-none border-0 bg-transparent ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent",
          a.class
        )
      )
    }, null, 8, ["class"]));
  }
}), Mu = /* @__PURE__ */ i({
  __name: "InputGroupText",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("span", {
      class: h(
        e(u)(
          "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Tl = /* @__PURE__ */ i({
  __name: "Textarea",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const s = t, n = te(s, "modelValue", a, {
      passive: !0,
      defaultValue: s.defaultValue
    });
    return (l, f) => Ve((r(), b("textarea", {
      "onUpdate:modelValue": f[0] || (f[0] = (y) => Re(n) ? n.value = y : null),
      class: h(
        e(u)(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          s.class
        )
      )
    }, null, 2)), [
      [Le, e(n)]
    ]);
  }
}), Tu = /* @__PURE__ */ i({
  __name: "InputGroupTextarea",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Tl), {
      "data-slot": "input-group-control",
      class: h(
        e(u)(
          "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent",
          a.class
        )
      )
    }, null, 8, ["class"]));
  }
}), Il = R(
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
), zl = R("flex items-center gap-2 text-sm shadow-none", {
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
}), Iu = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(In), m(e(l), {
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
}), zu = /* @__PURE__ */ i({
  __name: "InputOTPGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), b("div", m({ "data-slot": "input-otp-group" }, e(o), {
      class: e(u)("flex items-center", a.class)
    }), [
      d(n.$slots, "default")
    ], 16));
  }
}), Fu = /* @__PURE__ */ i({
  __name: "InputOTPSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), b("div", m({
      "data-slot": "input-otp-separator",
      role: "separator"
    }, e(s)), [
      d(o.$slots, "default", {}, () => [
        g(e(bn))
      ])
    ], 16));
  }
}), Fl = ["data-active"], Vl = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Vu = /* @__PURE__ */ i({
  __name: "InputOTPSlot",
  props: {
    index: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s), n = zn(), l = T(() => n?.value.slots[a.index]);
    return (f, y) => (r(), b("div", m(e(o), {
      "data-slot": "input-otp-slot",
      "data-active": l.value?.isActive,
      class: e(u)(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        a.class
      )
    }), [
      M(k(l.value?.char) + " ", 1),
      l.value?.hasFakeCaret ? (r(), b("div", Vl, [...y[0] || (y[0] = [
        A("div", { class: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }, null, -1)
      ])])) : V("", !0)
    ], 16, Fl));
  }
}), Ru = /* @__PURE__ */ i({
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
    return (s, o) => (r(), p(e(G), {
      "data-slot": "item",
      as: t.as,
      "as-child": t.asChild,
      class: h(e(u)(e(Ll)({ variant: t.variant, size: t.size }), a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Lu = /* @__PURE__ */ i({
  __name: "ItemActions",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "item-actions",
      class: h(e(u)("flex items-center gap-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Gu = /* @__PURE__ */ i({
  __name: "ItemContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "item-content",
      class: h(e(u)("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Eu = /* @__PURE__ */ i({
  __name: "ItemDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("p", {
      "data-slot": "item-description",
      class: h(
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
}), Hu = /* @__PURE__ */ i({
  __name: "ItemFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "item-footer",
      class: h(e(u)("flex basis-full items-center justify-between gap-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Nu = /* @__PURE__ */ i({
  __name: "ItemGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      role: "list",
      "data-slot": "item-group",
      class: h(e(u)("group/item-group flex flex-col", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ku = /* @__PURE__ */ i({
  __name: "ItemHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "item-header",
      class: h(e(u)("flex basis-full items-center justify-between gap-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Rl = ["data-variant"], Uu = /* @__PURE__ */ i({
  __name: "ItemMedia",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "item-media",
      "data-variant": a.variant,
      class: h(e(u)(e(Gl)({ variant: t.variant }), a.class))
    }, [
      d(s.$slots, "default")
    ], 10, Rl));
  }
}), qu = /* @__PURE__ */ i({
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
    return (s, o) => (r(), p(e(ne), {
      "data-slot": "item-separator",
      orientation: "horizontal",
      class: h(e(u)("my-0", a.class))
    }, null, 8, ["class"]));
  }
}), Wu = /* @__PURE__ */ i({
  __name: "ItemTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "item-title",
      class: h(e(u)("flex w-fit items-center gap-2 text-sm leading-snug font-medium", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ll = R(
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
), Gl = R(
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
), Xu = /* @__PURE__ */ i({
  __name: "Kbd",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("kbd", {
      class: h(
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
}), Yu = /* @__PURE__ */ i({
  __name: "KbdGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("kbd", {
      "data-slot": "kbd-group",
      class: h(e(u)("inline-flex items-center gap-1", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ju = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(_s), m(e(l), {
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
}), El = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, Qu = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(bs), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        A("span", El, [
          g(e(Ye), null, {
            default: c(() => [
              g(e(K), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zu = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Je), null, {
      default: c(() => [
        g(e(ys), m(e(o), {
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
}), ep = /* @__PURE__ */ i({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(hs), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(vs), m(e(l), {
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
}), ap = /* @__PURE__ */ i({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(xs), {
      class: h(e(u)("px-2 py-1.5 text-sm font-semibold", t.inset && "pl-8", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sp = /* @__PURE__ */ i({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Bs), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), op = /* @__PURE__ */ i({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(ws), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hl = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, np = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e($s), m(e(l), {
      class: e(u)(
        "relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        s.class
      )
    }), {
      default: c(() => [
        A("span", Hl, [
          g(e(Ye), null, {
            default: c(() => [
              g(e($e), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rp = /* @__PURE__ */ i({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Cs), m({
      class: e(u)("-mx-1 my-1 h-px bg-muted", a.class)
    }, e(o)), null, 16, ["class"]));
  }
}), lp = /* @__PURE__ */ i({
  __name: "MenubarShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("span", {
      class: h(e(u)("ml-auto text-xs tracking-widest text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ip = /* @__PURE__ */ i({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Ss), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Je), null, {
      default: c(() => [
        g(e(As), m(e(l), {
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
}), dp = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Os), m(e(o), {
      class: e(u)(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t.inset && "pl-8",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(N), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), up = /* @__PURE__ */ i({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ps), m(e(o), {
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
}), Nl = { class: "absolute top-full left-0 flex justify-center" }, Kl = /* @__PURE__ */ i({
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
    return (n, l) => (r(), b("div", Nl, [
      g(e(js), m(e(o), {
        class: e(u)(
          "origin-top-center relative left-[var(--reka-navigation-menu-viewport-left)] mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[--reka-navigation-menu-viewport-width]",
          a.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), pp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(ks), m(e(l), {
      class: e(u)("relative z-10 flex max-w-max flex-1 items-center justify-center", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default"),
        g(Kl)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Ds), m(e(l), {
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
}), mp = /* @__PURE__ */ i({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ms), m(e(o), {
      class: e(u)(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        a.class
      )
    }), {
      default: c(() => [...l[0] || (l[0] = [
        A("div", { class: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), gp = /* @__PURE__ */ i({
  __name: "NavigationMenuItem",
  props: {
    value: {},
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
}), _p = /* @__PURE__ */ i({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Is), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bp = /* @__PURE__ */ i({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(zs), m(e(o), {
      class: e(u)("group flex flex-1 list-none items-center justify-center gap-x-1", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yp = /* @__PURE__ */ i({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Fs), m(e(o), {
      class: e(u)(e(Ul)(), "group", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(se), {
          class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ul = R(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), hp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Vs), m(e(l), {
      class: e(u)("grid gap-1.5", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), vp = /* @__PURE__ */ i({
  __name: "NumberFieldContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      class: h(
        e(u)(
          "relative [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5 [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), xp = /* @__PURE__ */ i({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Rs), m({ "data-slot": "decrement" }, e(o), {
      class: e(u)(
        "absolute top-1/2 left-0 -translate-y-1/2 p-3 disabled:cursor-not-allowed disabled:opacity-20",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(lt), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bp = /* @__PURE__ */ i({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Ls), m({ "data-slot": "increment" }, e(o), {
      class: e(u)(
        "absolute top-1/2 right-0 -translate-y-1/2 p-3 disabled:cursor-not-allowed disabled:opacity-20",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(yn), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wp = /* @__PURE__ */ i({
  __name: "NumberFieldInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Gs), {
      "data-slot": "input",
      class: h(
        e(u)(
          "flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-center text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          a.class
        )
      )
    }, null, 8, ["class"]));
  }
}), $p = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Es), m({ "data-slot": "pagination" }, e(l), {
      class: e(u)("mx-auto flex w-full justify-center", s.class)
    }), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cp = /* @__PURE__ */ i({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Hs), m({ "data-slot": "pagination-content" }, e(s), {
      class: e(u)("flex flex-row items-center gap-1", a.class)
    }), {
      default: c((l) => [
        d(o.$slots, "default", w($(l)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sp = /* @__PURE__ */ i({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ns), m({ "data-slot": "pagination-ellipsis" }, e(s), {
      class: e(u)("flex size-9 items-center justify-center", a.class)
    }), {
      default: c(() => [
        d(o.$slots, "default", {}, () => [
          g(e(nt), { class: "size-4" }),
          n[0] || (n[0] = A("span", { class: "sr-only" }, "More pages", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ap = /* @__PURE__ */ i({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(Ks), m({
      "data-slot": "pagination-first",
      class: e(u)(e(F)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(it)),
          l[0] || (l[0] = A("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Op = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(Us), m({ "data-slot": "pagination-item" }, e(s), {
      class: e(u)(
        e(F)({
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
}), Pp = /* @__PURE__ */ i({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(qs), m({
      "data-slot": "pagination-last",
      class: e(u)(e(F)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          l[0] || (l[0] = A("span", { class: "hidden sm:block" }, "Last", -1)),
          g(e(ct))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jp = /* @__PURE__ */ i({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(Ws), m({
      "data-slot": "pagination-next",
      class: e(u)(e(F)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          l[0] || (l[0] = A("span", { class: "hidden sm:block" }, "Next", -1)),
          g(e(ct))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kp = /* @__PURE__ */ i({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class", "size"), o = x(s);
    return (n, l) => (r(), p(e(Xs), m({
      "data-slot": "pagination-previous",
      class: e(u)(e(F)({ variant: "ghost", size: t.size }), "gap-1 px-2.5 sm:pr-2.5", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(it)),
          l[0] || (l[0] = A("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Dp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Ys), m(e(l), {
      class: e(u)("flex items-center gap-2", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mp = /* @__PURE__ */ i({
  __name: "PinInputGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(G), m(e(o), {
      class: e(u)("flex items-center", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tp = /* @__PURE__ */ i({
  __name: "PinInputSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const s = x(t);
    return (o, n) => (r(), p(e(G), w($(e(s))), {
      default: c(() => [
        d(o.$slots, "default", {}, () => [
          g(e(lt), { class: "w-2" })
        ])
      ]),
      _: 3
    }, 16));
  }
}), Ip = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Js), m(e(o), {
      class: e(u)(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-center text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus:relative focus:z-10 focus:ring-2 focus:ring-ring focus:outline-none",
        a.class
      )
    }), null, 16, ["class"]));
  }
}), zp = /* @__PURE__ */ i({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Qs), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Zs), null, {
      default: c(() => [
        g(e(eo), m({ ...e(l), ...f.$attrs }, {
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
}), Vp = /* @__PURE__ */ i({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(to), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(ao), m(e(s), {
      class: e(u)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", a.class)
    }), {
      default: c(() => [
        g(e(so), {
          class: "h-full w-full flex-1 bg-primary transition-all",
          style: be(`transform: translateX(-${100 - (a.modelValue ?? 0)}%);`)
        }, null, 8, ["style"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Lp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(oo), m({
      class: e(u)("grid gap-2", s.class)
    }, e(l)), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gp = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(no), m(e(o), {
      class: e(u)(
        "peer aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: c(() => [
        g(e(ro), { class: "flex items-center justify-center" }, {
          default: c(() => [
            g(e(K), { class: "h-3.5 w-3.5 text-primary" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ql = { class: "mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, Ep = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(lo), m({
      class: e(u)("p-3", s.class)
    }, e(l)), {
      default: c(({ grid: B, weekDays: S }) => [
        g(e(ei), null, {
          default: c(() => [
            g(e(si)),
            g(e(ti)),
            g(e(ai))
          ]),
          _: 1
        }),
        A("div", ql, [
          (r(!0), b(I, null, L(B, (O) => (r(), p(e(Yl), {
            key: O.value.toString()
          }, {
            default: c(() => [
              g(e(Ql), null, {
                default: c(() => [
                  g(e(Te), null, {
                    default: c(() => [
                      (r(!0), b(I, null, L(S, (C) => (r(), p(e(Zl), { key: C }, {
                        default: c(() => [
                          M(k(C), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              g(e(Jl), null, {
                default: c(() => [
                  (r(!0), b(I, null, L(O.rows, (C, P) => (r(), p(e(Te), {
                    key: `weekDate-${P}`,
                    class: "mt-2 w-full"
                  }, {
                    default: c(() => [
                      (r(!0), b(I, null, L(C, (j) => (r(), p(e(Wl), {
                        key: j.toString(),
                        date: j
                      }, {
                        default: c(() => [
                          g(e(Xl), {
                            day: j,
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
}), Wl = /* @__PURE__ */ i({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(io), m({
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
}), Xl = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(co), m({
      class: e(u)(
        e(F)({ variant: "ghost" }),
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
}), Yl = /* @__PURE__ */ i({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(uo), m({
      class: e(u)("w-full border-collapse space-y-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jl = /* @__PURE__ */ i({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(po), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ql = /* @__PURE__ */ i({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(fo), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Te = /* @__PURE__ */ i({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(mo), m({
      class: e(u)("flex", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zl = /* @__PURE__ */ i({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(go), m({
      class: e(u)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ei = /* @__PURE__ */ i({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(_o), m({
      class: e(u)("relative flex w-full items-center justify-between pt-1", a.class)
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ti = /* @__PURE__ */ i({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(bo), m({
      class: e(u)("text-sm font-medium", a.class)
    }, e(o)), {
      default: c(({ headingValue: f }) => [
        d(n.$slots, "default", { headingValue: f }, () => [
          M(k(f), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ai = /* @__PURE__ */ i({
  __name: "RangeCalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(yo), m({
      class: e(u)(
        e(F)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(N), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), si = /* @__PURE__ */ i({
  __name: "RangeCalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ho), m({
      class: e(u)(
        e(F)({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        a.class
      )
    }, e(o)), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(rt), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oi = {
  key: 0,
  class: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"
}, Hp = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(vo), m(e(l), {
      class: e(u)(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        s.class
      )
    }), {
      default: c(() => [
        s.withHandle ? (r(), b("div", oi, [
          g(e(hn), { class: "h-2.5 w-2.5" })
        ])) : V("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Np = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(xo), m(e(l), {
      class: e(u)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", s.class)
    }), {
      default: c(() => [
        d(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ni = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(Bo), m(e(s), {
      class: e(u)(
        "flex touch-none transition-colors select-none",
        t.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
        t.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
        a.class
      )
    }), {
      default: c(() => [
        g(e(wo), { class: "relative flex-1 rounded-full bg-border" })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Kp = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e($o), m(e(s), {
      class: e(u)("relative overflow-hidden", a.class)
    }), {
      default: c(() => [
        g(e(Co), { class: "h-full w-full rounded-[inherit]" }, {
          default: c(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        }),
        g(ni),
        g(e(So))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ri = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(Ao), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), li = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Oo), null, {
      default: c(() => [
        g(e(Po), m({ ...e(l), ...f.$attrs }, {
          class: e(u)(
            "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            t.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            s.class
          )
        }), {
          default: c(() => [
            g(e(ui)),
            g(e(jo), {
              class: h(
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
            g(e(di))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Up = /* @__PURE__ */ i({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(ko), m({
      class: e(u)("w-full p-1", a.class)
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ii = { class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, ci = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Do), m(e(o), {
      class: e(u)(
        "relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        a.class
      )
    }), {
      default: c(() => [
        A("span", ii, [
          g(e(Mo), null, {
            default: c(() => [
              g(e(K), { class: "h-4 w-4" })
            ]),
            _: 1
          })
        ]),
        g(e(Qe), null, {
          default: c(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qp = /* @__PURE__ */ i({
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Qe), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wp = /* @__PURE__ */ i({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(To), {
      class: h(e(u)("px-2 py-1.5 text-sm font-semibold", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), di = /* @__PURE__ */ i({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Io), m(e(o), {
      class: e(u)("flex cursor-default items-center justify-center py-1", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(se))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ui = /* @__PURE__ */ i({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(zo), m(e(o), {
      class: e(u)("flex cursor-default items-center justify-center py-1", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(vn))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xp = /* @__PURE__ */ i({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Fo), m(e(s), {
      class: e(u)("-mx-1 my-1 h-px bg-muted", a.class)
    }), null, 16, ["class"]));
  }
}), pi = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Vo), m(e(o), {
      class: e(u)(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-start text-sm whitespace-nowrap shadow-sm ring-offset-background focus:ring-1 focus:ring-ring focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:truncate",
        a.class
      )
    }), {
      default: c(() => [
        d(n.$slots, "default"),
        g(e(Ro), { "as-child": "" }, {
          default: c(() => [
            g(e(se), { class: "h-4 w-4 shrink-0 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fi = /* @__PURE__ */ i({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(Lo), w($(a)), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yp = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "SimpleSelect",
  props: /* @__PURE__ */ Ot({
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
    const a = t, s = At(t, "modelValue");
    return (o, n) => (r(), p(e(ri), {
      modelValue: s.value,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => s.value = l),
      disabled: t.disabled
    }, {
      default: c(() => [
        g(e(pi), m(o.$attrs, {
          class: e(u)("w-full", a.class)
        }), {
          default: c(() => [
            g(e(fi), { placeholder: t.placeholder }, null, 8, ["placeholder"])
          ]),
          _: 1
        }, 16, ["class"]),
        g(e(li), null, {
          default: c(() => [
            (r(!0), b(I, null, L(t.options, (l) => (r(), p(e(ci), {
              key: l.value,
              value: l.value,
              disabled: l.disabled
            }, {
              default: c(() => [
                M(k(l.label), 1)
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
}), mi = /* @__PURE__ */ i({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const n = v(t, a);
    return (l, f) => (r(), p(e(Ne), m({ "data-slot": "sheet" }, e(n)), {
      default: c((y) => [
        d(l.$slots, "default", w($(y)))
      ]),
      _: 3
    }, 16));
  }
}), Jp = /* @__PURE__ */ i({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(W), m({ "data-slot": "sheet-close" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gi = /* @__PURE__ */ i({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(ve), m({
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
}), _i = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(he), null, {
      default: c(() => [
        g(gi),
        g(e(xe), m({
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
            g(e(W), { class: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: c(() => [
                g(e(oe), { class: "size-4" }),
                y[0] || (y[0] = A("span", { class: "sr-only" }, "Close", -1))
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
}), Qp = /* @__PURE__ */ i({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ke), m({
      "data-slot": "sheet-description",
      class: e(u)("text-sm text-muted-foreground", a.class)
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zp = /* @__PURE__ */ i({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "sheet-footer",
      class: h(e(u)("mt-auto flex flex-col gap-2 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ef = /* @__PURE__ */ i({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "sheet-header",
      class: h(e(u)("flex flex-col gap-1.5 p-4", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), tf = /* @__PURE__ */ i({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(Ue), m({
      "data-slot": "sheet-title",
      class: e(u)("font-semibold text-foreground", a.class)
    }, e(s)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), af = /* @__PURE__ */ i({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(qe), m({ "data-slot": "sheet-trigger" }, a), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ie = "sidebar_state", bi = 3600 * 24 * 7, yi = "16rem", hi = "18rem", vi = "3rem", xi = "b", [ce, Bi] = ae("Sidebar"), wi = { class: "flex h-full w-full flex-col" }, $i = ["data-state", "data-collapsible", "data-variant", "data-side"], Ci = {
  "data-sidebar": "sidebar",
  class: "flex h-full w-full flex-col bg-sidebar text-sidebar-foreground group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
}, sf = /* @__PURE__ */ i({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { isMobile: s, state: o, openMobile: n, setOpenMobile: l } = ce();
    return (f, y) => t.collapsible === "none" ? (r(), b("div", m({
      key: 0,
      class: e(u)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", a.class)
    }, f.$attrs), [
      d(f.$slots, "default")
    ], 16)) : e(s) ? (r(), p(e(mi), m({
      key: 1,
      open: e(n)
    }, f.$attrs, { "onUpdate:open": e(l) }), {
      default: c(() => [
        g(e(_i), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: t.side,
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: be({
            "--sidebar-width": e(hi)
          })
        }, {
          default: c(() => [
            A("div", wi, [
              d(f.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (r(), b("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": e(o),
      "data-collapsible": e(o) === "collapsed" ? t.collapsible : "",
      "data-variant": t.variant,
      "data-side": t.side
    }, [
      A("div", {
        class: h(
          e(u)(
            "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            t.variant === "floating" || t.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        )
      }, null, 2),
      A("div", m({
        class: e(u)(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          t.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          t.variant === "floating" || t.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+_2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          a.class
        )
      }, f.$attrs), [
        A("div", Ci, [
          d(f.$slots, "default")
        ])
      ], 16)
    ], 8, $i));
  }
}), of = /* @__PURE__ */ i({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-sidebar": "content",
      class: h(
        e(u)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), nf = /* @__PURE__ */ i({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-sidebar": "footer",
      class: h(e(u)("flex flex-col gap-2 p-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), rf = /* @__PURE__ */ i({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-sidebar": "group",
      class: h(e(u)("relative flex w-full min-w-0 flex-col p-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), lf = /* @__PURE__ */ i({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(G), {
      "data-sidebar": "group-action",
      as: t.as,
      "as-child": t.asChild,
      class: h(
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
}), cf = /* @__PURE__ */ i({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-sidebar": "group-content",
      class: h(e(u)("w-full text-sm", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), df = /* @__PURE__ */ i({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(G), {
      "data-sidebar": "group-label",
      as: t.as,
      "as-child": t.asChild,
      class: h(
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
}), uf = /* @__PURE__ */ i({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-sidebar": "header",
      class: h(e(u)("flex flex-col gap-2 p-2", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), pf = /* @__PURE__ */ i({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(vt), {
      "data-sidebar": "input",
      class: h(
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
}), ff = /* @__PURE__ */ i({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("main", {
      class: h(
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
}), mf = /* @__PURE__ */ i({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("ul", {
      "data-sidebar": "menu",
      class: h(e(u)("flex w-full min-w-0 flex-col gap-1", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), gf = /* @__PURE__ */ i({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(G), {
      "data-sidebar": "menu-action",
      class: h(
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
}), _f = /* @__PURE__ */ i({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-sidebar": "menu-badge",
      class: h(
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
}), ze = /* @__PURE__ */ i({
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
    return (s, o) => (r(), p(e(G), m({
      "data-sidebar": "menu-button",
      "data-size": t.size,
      "data-active": t.isActive,
      class: e(u)(e(Oi)({ variant: t.variant, size: t.size }), a.class),
      as: t.as,
      "as-child": t.asChild
    }, s.$attrs), {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), bf = /* @__PURE__ */ i({
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
    const a = t, { isMobile: s, state: o } = ce(), n = _(a, "tooltip");
    return (l, f) => t.tooltip ? (r(), p(e(Se), { key: 1 }, {
      default: c(() => [
        g(e(Oe), { "as-child": "" }, {
          default: c(() => [
            g(ze, w($({ ...e(n), ...l.$attrs })), {
              default: c(() => [
                d(l.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        g(e(Ae), {
          side: "right",
          align: "center",
          hidden: e(o) !== "collapsed" || e(s)
        }, {
          default: c(() => [
            typeof t.tooltip == "string" ? (r(), b(I, { key: 0 }, [
              M(k(t.tooltip), 1)
            ], 64)) : (r(), p(_e(t.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (r(), p(ze, w(m({ key: 0 }, { ...e(n), ...l.$attrs })), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yf = /* @__PURE__ */ i({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("li", {
      "data-sidebar": "menu-item",
      class: h(e(u)("group/menu-item relative", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Fe = /* @__PURE__ */ i({
  __name: "Skeleton",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", {
      "data-slot": "skeleton",
      class: h(e(u)("animate-pulse rounded-md bg-primary/10", a.class))
    }, null, 2));
  }
}), hf = /* @__PURE__ */ i({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = T(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (o, n) => (r(), b("div", {
      "data-sidebar": "menu-skeleton",
      class: h(e(u)("flex h-8 items-center gap-2 rounded-md px-2", a.class))
    }, [
      t.showIcon ? (r(), p(e(Fe), {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : V("", !0),
      g(e(Fe), {
        class: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: be({ "--skeleton-width": s.value })
      }, null, 8, ["style"])
    ], 2));
  }
}), vf = /* @__PURE__ */ i({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("ul", {
      "data-sidebar": "menu-badge",
      class: h(
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
}), xf = /* @__PURE__ */ i({
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
    return (s, o) => (r(), p(e(G), {
      "data-sidebar": "menu-sub-button",
      as: t.as,
      "as-child": t.asChild,
      "data-size": t.size,
      "data-active": t.isActive,
      class: h(
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
}), Si = {};
function Ai(t, a) {
  return r(), b("li", null, [
    d(t.$slots, "default")
  ]);
}
const Bf = /* @__PURE__ */ E(Si, [["render", Ai]]), wf = /* @__PURE__ */ i({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !Ee?.cookie.includes(`${Ie}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(t, { emit: a }) {
    const s = t, o = a, n = ee("(max-width: 768px)"), l = z(!1), f = te(s, "open", o, {
      defaultValue: s.defaultOpen ?? !1,
      passive: s.open === void 0
    });
    function y(C) {
      f.value = C, document.cookie = `${Ie}=${f.value}; path=/; max-age=${bi}`;
    }
    function B(C) {
      l.value = C;
    }
    function S() {
      return n.value ? B(!l.value) : y(!f.value);
    }
    Ge("keydown", (C) => {
      C.key === xi && (C.metaKey || C.ctrlKey) && (C.preventDefault(), S());
    });
    const O = T(() => f.value ? "expanded" : "collapsed");
    return Bi({
      state: O,
      open: f,
      setOpen: y,
      isMobile: n,
      openMobile: l,
      setOpenMobile: B,
      toggleSidebar: S
    }), (C, P) => (r(), p(e(ye), { "delay-duration": 0 }, {
      default: c(() => [
        A("div", m({
          style: {
            "--sidebar-width": e(yi),
            "--sidebar-width-icon": e(vi)
          },
          class: e(u)(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
            s.class
          )
        }, C.$attrs), [
          d(C.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), $f = /* @__PURE__ */ i({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { toggleSidebar: s } = ce();
    return (o, n) => (r(), b("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: h(
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
}), Cf = /* @__PURE__ */ i({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(ne), {
      "data-sidebar": "separator",
      class: h(e(u)("mx-2 w-auto bg-sidebar-border", a.class))
    }, {
      default: c(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Sf = /* @__PURE__ */ i({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, { toggleSidebar: s } = ce();
    return (o, n) => (r(), p(e(X), {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: h(e(u)("h-7 w-7", a.class)),
      onClick: e(s)
    }, {
      default: c(() => [
        g(e(Ze)),
        n[0] || (n[0] = A("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Oi = R(
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
), Af = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Go), m({
      class: e(u)(
        "relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:flex-col",
        s.class
      )
    }, e(l)), {
      default: c(() => [
        g(e(Eo), { class: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20 data-[orientation=vertical]:w-1.5" }, {
          default: c(() => [
            g(e(Ho), { class: "absolute h-full bg-primary data-[orientation=vertical]:w-full" })
          ]),
          _: 1
        }),
        (r(!0), b(I, null, L(t.modelValue, (B, S) => (r(), p(e(No), {
          key: S,
          class: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        }))), 128))
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Of = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(dt), m({
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
        g(e(ot), { class: "size-4" })
      ]),
      "info-icon": c(() => [
        g(e(st), { class: "size-4" })
      ]),
      "warning-icon": c(() => [
        g(e(at), { class: "size-4" })
      ]),
      "error-icon": c(() => [
        g(e(tt), { class: "size-4" })
      ]),
      "loading-icon": c(() => [
        A("div", null, [
          g(e(we), { class: "size-4 animate-spin" })
        ])
      ]),
      "close-icon": c(() => [
        g(e(et), { class: "size-4" })
      ]),
      _: 1
    }, 16));
  }
}), Pf = /* @__PURE__ */ i({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), p(e(we), {
      role: "status",
      "aria-label": "Loading",
      class: h(e(u)("size-4 animate-spin", a.class))
    }, null, 8, ["class"]));
  }
}), jf = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Ko), m({
      class: e(u)("flex gap-2", s.class)
    }, e(l)), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kf = /* @__PURE__ */ i({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Uo), m(e(o), {
      class: e(u)("text-xs text-muted-foreground", a.class)
    }), {
      default: c((f) => [
        d(n.$slots, "default", w($(f)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Df = /* @__PURE__ */ i({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(qo), m(e(o), {
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
}), Mf = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Wo), m(e(o), {
      class: e(u)("group flex items-center gap-2 data-[disabled]:pointer-events-none", a.class)
    }), {
      default: c((f) => [
        d(n.$slots, "default", w($(f)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tf = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(Xo), m(e(o), {
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
}), If = /* @__PURE__ */ i({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Yo), m(e(o), {
      class: e(u)("text-md font-semibold whitespace-nowrap", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zf = /* @__PURE__ */ i({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(Jo), m(e(o), {
      class: e(u)("flex flex-col items-center gap-1 rounded-md p-1 text-center", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ff = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(Qo), m(e(l), {
      class: e(u)(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        s.class
      )
    }), {
      default: c(() => [
        g(e(Zo), {
          class: h(
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
}), Pi = { class: "relative w-full overflow-auto" }, Vf = /* @__PURE__ */ i({
  __name: "Table",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("div", Pi, [
      A("table", {
        class: h(e(u)("w-full caption-bottom text-sm", a.class))
      }, [
        d(s.$slots, "default")
      ], 2)
    ]));
  }
}), Rf = /* @__PURE__ */ i({
  __name: "TableBody",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("tbody", {
      class: h(e(u)("[&_tr:last-child]:border-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ji = /* @__PURE__ */ i({
  __name: "TableCell",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("td", {
      class: h(
        e(u)(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Lf = /* @__PURE__ */ i({
  __name: "TableHead",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("th", {
      class: h(
        e(u)(
          "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
          a.class
        )
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Gf = /* @__PURE__ */ i({
  __name: "TableHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("thead", {
      class: h(e(u)("[&_tr]:border-b", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Ef = /* @__PURE__ */ i({
  __name: "TableFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("tfoot", {
      class: h(e(u)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), ki = /* @__PURE__ */ i({
  __name: "TableRow",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("tr", {
      class: h(
        e(u)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", a.class)
      )
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Hf = /* @__PURE__ */ i({
  __name: "TableCaption",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t;
    return (s, o) => (r(), b("caption", {
      class: h(e(u)("mt-4 text-sm text-muted-foreground", a.class))
    }, [
      d(s.$slots, "default")
    ], 2));
  }
}), Di = { class: "flex items-center justify-center py-10" }, Nf = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(ki, null, {
      default: c(() => [
        g(ji, m({
          class: e(u)("p-4 align-middle text-sm whitespace-nowrap text-foreground", a.class)
        }, s.value), {
          default: c(() => [
            A("div", Di, [
              d(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Kf = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(en), w($(e(n))), {
      default: c(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uf = /* @__PURE__ */ i({
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
    return (o, n) => (r(), p(e(tn), m({
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
}), qf = /* @__PURE__ */ i({
  __name: "TabsList",
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class");
    return (o, n) => (r(), p(e(an), m(e(s), {
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
}), Mi = { class: "truncate" }, Wf = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(sn), m(e(o), {
      class: e(u)(
        "inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        a.class
      )
    }), {
      default: c(() => [
        A("span", Mi, [
          d(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xf = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(on), m(e(l), {
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
}), Yf = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(nn), m(e(o), {
      class: e(u)("min-h-5 flex-1 bg-transparent px-1 text-sm focus:outline-none", a.class)
    }), null, 16, ["class"]));
  }
}), Jf = /* @__PURE__ */ i({
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
    return (n, l) => (r(), p(e(rn), m(e(o), {
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
}), Qf = /* @__PURE__ */ i({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(ln), m(e(o), {
      class: e(u)("mr-1 flex rounded bg-transparent", a.class)
    }), {
      default: c(() => [
        d(n.$slots, "default", {}, () => [
          g(e(oe), { class: "h-4 w-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zf = /* @__PURE__ */ i({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(t) {
    const a = t, s = _(a, "class"), o = x(s);
    return (n, l) => (r(), p(e(cn), m(e(o), {
      class: e(u)("rounded bg-transparent px-2 py-0.5 text-sm", a.class)
    }), null, 16, ["class"]));
  }
}), em = /* @__PURE__ */ i({
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
    return (f, y) => (r(), p(e(dn), m(e(l), {
      class: e(u)(e(xt)({ variant: t.variant, size: t.size }), s.class)
    }), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xt = R(
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
), tm = /* @__PURE__ */ i({
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
    me("toggleGroup", {
      variant: s.variant,
      size: s.size
    });
    const n = _(s, "class"), l = v(n, o);
    return (f, y) => (r(), p(e(un), m(e(l), {
      class: e(u)("flex items-center justify-center gap-1", s.class)
    }), {
      default: c((B) => [
        d(f.$slots, "default", w($(B)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), am = /* @__PURE__ */ i({
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
    return (l, f) => (r(), p(e(pn), m(e(n), {
      class: e(u)(
        e(xt)({
          variant: e(s)?.variant || t.variant,
          size: e(s)?.size || t.size
        }),
        a.class
      )
    }), {
      default: c((y) => [
        d(l.$slots, "default", w($(y)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  hc as Accord,
  Tr as Accordion,
  Ir as AccordionContent,
  zr as AccordionItem,
  Fr as AccordionTrigger,
  vc as Alert,
  xc as AlertDescription,
  En as AlertDialog,
  Hn as AlertDialogAction,
  Nn as AlertDialogCancel,
  Kn as AlertDialogContent,
  Un as AlertDialogDescription,
  qn as AlertDialogFooter,
  Wn as AlertDialogHeader,
  Xn as AlertDialogTitle,
  ec as AlertDialogTrigger,
  Bc as AlertTitle,
  wc as AspectRatio,
  $c as Avatar,
  Cc as AvatarFallback,
  Sc as AvatarImage,
  Ac as Badge,
  Oc as Breadcrumb,
  Pc as BreadcrumbEllipsis,
  jc as BreadcrumbItem,
  kc as BreadcrumbLink,
  Dc as BreadcrumbList,
  Mc as BreadcrumbPage,
  Tc as BreadcrumbSeparator,
  X as Button,
  Ic as ButtonGroup,
  zc as ButtonGroupSeparator,
  Fc as ButtonGroupText,
  yr as COLLAPSIBLE_SIDEBAR_WIDTH,
  hr as COLLAPSIBLE_SIDEBAR_WIDTH_ICON,
  cc as COLLAPSIBLE_SIDEBAR_WIDTH_MOBILE,
  Vc as Calendar,
  Nr as CalendarCell,
  Kr as CalendarCellTrigger,
  Ur as CalendarGrid,
  qr as CalendarGridBody,
  Wr as CalendarGridHead,
  Me as CalendarGridRow,
  Xr as CalendarHeadCell,
  Yr as CalendarHeader,
  Jr as CalendarHeading,
  Qr as CalendarNextButton,
  Zr as CalendarPrevButton,
  el as Card,
  tl as CardContent,
  Rc as CardDescription,
  Lc as CardFooter,
  al as CardHeader,
  sl as CardTitle,
  Gc as Carousel,
  Ec as CarouselContent,
  Hc as CarouselItem,
  Kc as CarouselNext,
  Nc as CarouselPrevious,
  Uc as ChartCrosshair,
  qc as ChartLegend,
  Wc as ChartSingleTooltip,
  fe as ChartTooltip,
  Yc as Checkbox,
  Jc as Collapsible,
  Qc as CollapsibleContent,
  pc as CollapsibleMain,
  gc as CollapsibleMenuButton,
  _c as CollapsibleMenuGroup,
  uc as CollapsibleSidebarDesktop,
  fc as CollapsibleSidebarTrigger,
  Zc as CollapsibleTrigger,
  dc as CollapsibleTwoColumnLayout,
  ed as Combobox,
  td as ComboboxAnchor,
  nm as ComboboxCancel,
  ad as ComboboxEmpty,
  sd as ComboboxGroup,
  od as ComboboxInput,
  nd as ComboboxItem,
  rm as ComboboxItemIndicator,
  rd as ComboboxList,
  ld as ComboboxSeparator,
  lm as ComboboxTrigger,
  ul as Command,
  gd as CommandDialog,
  _d as CommandEmpty,
  bd as CommandGroup,
  yd as CommandInput,
  hd as CommandItem,
  vd as CommandList,
  xd as CommandSeparator,
  Bd as CommandShortcut,
  tc as ConfirmDialog,
  wd as ContextMenu,
  $d as ContextMenuCheckboxItem,
  Cd as ContextMenuContent,
  Sd as ContextMenuGroup,
  Ad as ContextMenuItem,
  Od as ContextMenuLabel,
  Pd as ContextMenuRadioGroup,
  jd as ContextMenuRadioItem,
  kd as ContextMenuSeparator,
  Dd as ContextMenuShortcut,
  Md as ContextMenuSub,
  Td as ContextMenuSubContent,
  Id as ContextMenuSubTrigger,
  zd as ContextMenuTrigger,
  pl as Dialog,
  id as DialogClose,
  fl as DialogContent,
  cd as DialogDescription,
  dd as DialogFooter,
  ud as DialogHeader,
  pd as DialogScrollContent,
  fd as DialogTitle,
  md as DialogTrigger,
  Fd as Drawer,
  Vd as DrawerClose,
  Rd as DrawerContent,
  Ld as DrawerDescription,
  Gd as DrawerFooter,
  Ed as DrawerHeader,
  xl as DrawerOverlay,
  Hd as DrawerTitle,
  Nd as DrawerTrigger,
  Kd as DropdownMenu,
  Ud as DropdownMenuCheckboxItem,
  qd as DropdownMenuContent,
  Wd as DropdownMenuGroup,
  Xd as DropdownMenuItem,
  Yd as DropdownMenuLabel,
  im as DropdownMenuPortal,
  Jd as DropdownMenuRadioGroup,
  Qd as DropdownMenuRadioItem,
  Zd as DropdownMenuSeparator,
  eu as DropdownMenuShortcut,
  tu as DropdownMenuSub,
  au as DropdownMenuSubContent,
  su as DropdownMenuSubTrigger,
  ou as DropdownMenuTrigger,
  nu as Empty,
  ru as EmptyContent,
  lu as EmptyDescription,
  iu as EmptyHeader,
  cu as EmptyMedia,
  du as EmptyTitle,
  ht as FORM_ITEM_INJECTION_KEY,
  uu as Field,
  pu as FieldContent,
  fu as FieldDescription,
  mu as FieldError,
  gu as FieldGroup,
  _u as FieldLabel,
  bu as FieldLegend,
  yu as FieldSeparator,
  hu as FieldSet,
  vu as FieldTitle,
  bc as Flasher,
  pm as Form,
  xu as FormControl,
  Bu as FormDescription,
  fm as FormField,
  mm as FormFieldArray,
  wu as FormItem,
  $u as FormLabel,
  Cu as FormMessage,
  sc as Header,
  yc as Heading,
  Su as HoverCard,
  Au as HoverCardContent,
  Ou as HoverCardTrigger,
  vt as Input,
  Pu as InputGroup,
  ju as InputGroupAddon,
  ku as InputGroupButton,
  Du as InputGroupInput,
  Mu as InputGroupText,
  Tu as InputGroupTextarea,
  Iu as InputOTP,
  zu as InputOTPGroup,
  Fu as InputOTPSeparator,
  Vu as InputOTPSlot,
  Ru as Item,
  Lu as ItemActions,
  Gu as ItemContent,
  Eu as ItemDescription,
  Hu as ItemFooter,
  Nu as ItemGroup,
  Ku as ItemHeader,
  Uu as ItemMedia,
  qu as ItemSeparator,
  Wu as ItemTitle,
  Xu as Kbd,
  Yu as KbdGroup,
  yt as Label,
  oc as Main,
  Ju as Menubar,
  Qu as MenubarCheckboxItem,
  Zu as MenubarContent,
  ep as MenubarGroup,
  tp as MenubarItem,
  ap as MenubarLabel,
  sp as MenubarMenu,
  op as MenubarRadioGroup,
  np as MenubarRadioItem,
  rp as MenubarSeparator,
  lp as MenubarShortcut,
  ip as MenubarSub,
  cp as MenubarSubContent,
  dp as MenubarSubTrigger,
  up as MenubarTrigger,
  pp as NavigationMenu,
  fp as NavigationMenuContent,
  mp as NavigationMenuIndicator,
  gp as NavigationMenuItem,
  _p as NavigationMenuLink,
  bp as NavigationMenuList,
  yp as NavigationMenuTrigger,
  Kl as NavigationMenuViewport,
  hp as NumberField,
  vp as NumberFieldContent,
  xp as NumberFieldDecrement,
  Bp as NumberFieldIncrement,
  wp as NumberFieldInput,
  $p as Pagination,
  Cp as PaginationContent,
  Sp as PaginationEllipsis,
  Ap as PaginationFirst,
  Op as PaginationItem,
  Pp as PaginationLast,
  jp as PaginationNext,
  kp as PaginationPrevious,
  Dp as PinInput,
  Mp as PinInputGroup,
  Tp as PinInputSeparator,
  Ip as PinInputSlot,
  zp as Popover,
  cm as PopoverAnchor,
  Fp as PopoverContent,
  Vp as PopoverTrigger,
  Rp as Progress,
  Lp as RadioGroup,
  Gp as RadioGroupItem,
  Ep as RangeCalendar,
  Wl as RangeCalendarCell,
  Xl as RangeCalendarCellTrigger,
  Yl as RangeCalendarGrid,
  Jl as RangeCalendarGridBody,
  Ql as RangeCalendarGridHead,
  Te as RangeCalendarGridRow,
  Zl as RangeCalendarHeadCell,
  ei as RangeCalendarHeader,
  ti as RangeCalendarHeading,
  ai as RangeCalendarNextButton,
  si as RangeCalendarPrevButton,
  Hp as ResizableHandle,
  dm as ResizablePanel,
  Np as ResizablePanelGroup,
  Kp as ScrollArea,
  ni as ScrollBar,
  ri as Select,
  li as SelectContent,
  Up as SelectGroup,
  ci as SelectItem,
  qp as SelectItemText,
  Wp as SelectLabel,
  di as SelectScrollDownButton,
  ui as SelectScrollUpButton,
  Xp as SelectSeparator,
  pi as SelectTrigger,
  fi as SelectValue,
  ne as Separator,
  mi as Sheet,
  Jp as SheetClose,
  _i as SheetContent,
  Qp as SheetDescription,
  Zp as SheetFooter,
  ef as SheetHeader,
  gi as SheetOverlay,
  tf as SheetTitle,
  af as SheetTrigger,
  sf as Sidebar,
  of as SidebarContent,
  nf as SidebarFooter,
  rf as SidebarGroup,
  lf as SidebarGroupAction,
  cf as SidebarGroupContent,
  df as SidebarGroupLabel,
  uf as SidebarHeader,
  pf as SidebarInput,
  ff as SidebarInset,
  mf as SidebarMenu,
  gf as SidebarMenuAction,
  _f as SidebarMenuBadge,
  bf as SidebarMenuButton,
  yf as SidebarMenuItem,
  hf as SidebarMenuSkeleton,
  vf as SidebarMenuSub,
  xf as SidebarMenuSubButton,
  Bf as SidebarMenuSubItem,
  wf as SidebarProvider,
  $f as SidebarRail,
  Cf as SidebarSeparator,
  Sf as SidebarTrigger,
  Yp as SimpleSelect,
  Fe as Skeleton,
  Af as Slider,
  Pf as Spinner,
  jf as Stepper,
  kf as StepperDescription,
  Df as StepperIndicator,
  Mf as StepperItem,
  Tf as StepperSeparator,
  If as StepperTitle,
  zf as StepperTrigger,
  Ff as Switch,
  Vf as Table,
  Rf as TableBody,
  Hf as TableCaption,
  ji as TableCell,
  Nf as TableEmpty,
  Ef as TableFooter,
  Lf as TableHead,
  Gf as TableHeader,
  ki as TableRow,
  Kf as Tabs,
  Uf as TabsContent,
  qf as TabsList,
  Wf as TabsTrigger,
  Xf as TagsInput,
  Yf as TagsInputInput,
  Jf as TagsInputItem,
  Qf as TagsInputItemDelete,
  Zf as TagsInputItemText,
  Tl as Textarea,
  mc as Tip,
  Of as Toaster,
  em as Toggle,
  tm as ToggleGroup,
  am as ToggleGroupItem,
  Se as Tooltip,
  Ae as TooltipContent,
  Sr as TooltipProvider,
  Oe as TooltipTrigger,
  ac as TwoColumnLayout,
  nc as TwoColumnLayoutSidebar,
  rc as TwoColumnLayoutSidebarDesktop,
  lc as TwoColumnLayoutSidebarMobile,
  ic as TwoColumnLayoutSidebarTrigger,
  Vr as alertVariants,
  Rr as avatarVariant,
  Lr as badgeVariants,
  Er as buttonGroupVariants,
  F as buttonVariants,
  u as cn,
  Yi as createContext,
  Xc as defaultColors,
  Cl as emptyMediaVariants,
  kl as fieldVariants,
  Il as inputGroupAddonVariants,
  zl as inputGroupButtonVariants,
  Gl as itemMediaVariants,
  Ll as itemVariants,
  Ul as navigationMenuTriggerStyle,
  Wi as preset,
  _l as provideCommandContext,
  yl as provideCommandGroupContext,
  Oi as sidebarMenuButtonVariants,
  xt as toggleVariants,
  re as useCarousel,
  Y as useCollapsibleSidebar,
  le as useCommand,
  bl as useCommandGroup,
  Qn as useConfirmDialog,
  kr as useFlasher,
  Zi as useMobileBottomNav,
  Ji as useMobileNavigation,
  ce as useSidebar,
  Qi as useSwipeNavigation,
  Xi as valueUpdater
};
