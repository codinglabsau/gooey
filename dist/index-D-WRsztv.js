var Dn = Object.create, $t = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Se = Object.getOwnPropertyNames, In = Object.getPrototypeOf, kn = Object.prototype.hasOwnProperty, bn = (e, t) => function() {
  return e && (t = (0, e[Se(e)[0]])(e = 0)), t;
}, Rn = (e, t) => function() {
  return t || (0, e[Se(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, wn = (e, t, n, u) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Se(t))
      !kn.call(e, r) && r !== n && $t(e, r, { get: () => t[r], enumerable: !(u = Sn(t, r)) || u.enumerable });
  return e;
}, Pn = (e, t, n) => (n = e != null ? Dn(In(e)) : {}, wn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  $t(n, "default", { value: e, enumerable: !0 }),
  e
)), ee = bn({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Vn = Rn({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    ee(), t.exports = u;
    function n(o) {
      return o instanceof Buffer ? Buffer.from(o) : new o.constructor(o.buffer.slice(), o.byteOffset, o.length);
    }
    function u(o) {
      if (o = o || {}, o.circles) return r(o);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (d) => new Date(d)), i.set(Map, (d, m) => new Map(h(Array.from(d), m))), i.set(Set, (d, m) => new Set(h(Array.from(d), m))), o.constructorHandlers)
        for (const d of o.constructorHandlers)
          i.set(d[0], d[1]);
      let a = null;
      return o.proto ? A : p;
      function h(d, m) {
        const c = Object.keys(d), _ = new Array(c.length);
        for (let g = 0; g < c.length; g++) {
          const f = c[g], E = d[f];
          typeof E != "object" || E === null ? _[f] = E : E.constructor !== Object && (a = i.get(E.constructor)) ? _[f] = a(E, m) : ArrayBuffer.isView(E) ? _[f] = n(E) : _[f] = m(E);
        }
        return _;
      }
      function p(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return h(d, p);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, p);
        const m = {};
        for (const c in d) {
          if (Object.hasOwnProperty.call(d, c) === !1) continue;
          const _ = d[c];
          typeof _ != "object" || _ === null ? m[c] = _ : _.constructor !== Object && (a = i.get(_.constructor)) ? m[c] = a(_, p) : ArrayBuffer.isView(_) ? m[c] = n(_) : m[c] = p(_);
        }
        return m;
      }
      function A(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return h(d, A);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, A);
        const m = {};
        for (const c in d) {
          const _ = d[c];
          typeof _ != "object" || _ === null ? m[c] = _ : _.constructor !== Object && (a = i.get(_.constructor)) ? m[c] = a(_, A) : ArrayBuffer.isView(_) ? m[c] = n(_) : m[c] = A(_);
        }
        return m;
      }
    }
    function r(o) {
      const i = [], a = [], h = /* @__PURE__ */ new Map();
      if (h.set(Date, (c) => new Date(c)), h.set(Map, (c, _) => new Map(A(Array.from(c), _))), h.set(Set, (c, _) => new Set(A(Array.from(c), _))), o.constructorHandlers)
        for (const c of o.constructorHandlers)
          h.set(c[0], c[1]);
      let p = null;
      return o.proto ? m : d;
      function A(c, _) {
        const g = Object.keys(c), f = new Array(g.length);
        for (let E = 0; E < g.length; E++) {
          const C = g[E], y = c[C];
          if (typeof y != "object" || y === null)
            f[C] = y;
          else if (y.constructor !== Object && (p = h.get(y.constructor)))
            f[C] = p(y, _);
          else if (ArrayBuffer.isView(y))
            f[C] = n(y);
          else {
            const k = i.indexOf(y);
            k !== -1 ? f[C] = a[k] : f[C] = _(y);
          }
        }
        return f;
      }
      function d(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return A(c, d);
        if (c.constructor !== Object && (p = h.get(c.constructor)))
          return p(c, d);
        const _ = {};
        i.push(c), a.push(_);
        for (const g in c) {
          if (Object.hasOwnProperty.call(c, g) === !1) continue;
          const f = c[g];
          if (typeof f != "object" || f === null)
            _[g] = f;
          else if (f.constructor !== Object && (p = h.get(f.constructor)))
            _[g] = p(f, d);
          else if (ArrayBuffer.isView(f))
            _[g] = n(f);
          else {
            const E = i.indexOf(f);
            E !== -1 ? _[g] = a[E] : _[g] = d(f);
          }
        }
        return i.pop(), a.pop(), _;
      }
      function m(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return A(c, m);
        if (c.constructor !== Object && (p = h.get(c.constructor)))
          return p(c, m);
        const _ = {};
        i.push(c), a.push(_);
        for (const g in c) {
          const f = c[g];
          if (typeof f != "object" || f === null)
            _[g] = f;
          else if (f.constructor !== Object && (p = h.get(f.constructor)))
            _[g] = p(f, m);
          else if (ArrayBuffer.isView(f))
            _[g] = n(f);
          else {
            const E = i.indexOf(f);
            E !== -1 ? _[g] = a[E] : _[g] = m(f);
          }
        }
        return i.pop(), a.pop(), _;
      }
    }
  }
});
ee();
ee();
ee();
var jt = typeof navigator < "u", l = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof l.chrome < "u" && l.chrome.devtools;
jt && (l.self, l.top);
var Ke;
typeof navigator < "u" && ((Ke = navigator.userAgent) == null || Ke.toLowerCase().includes("electron"));
ee();
var xn = Pn(Vn()), Nn = /(?:^|[-_/])(\w)/g;
function Fn(e, t) {
  return t ? t.toUpperCase() : "";
}
function Bn(e) {
  return e && `${e}`.replace(Nn, Fn);
}
function Un(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const u = n.lastIndexOf("/"), r = n.substring(u + 1);
  {
    const o = r.lastIndexOf(t);
    return r.substring(0, o);
  }
}
var He = (0, xn.default)({ circles: !0 });
const Ln = {
  trailing: !0
};
function M(e, t = 25, n = {}) {
  if (n = { ...Ln, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let u, r, o = [], i, a;
  const h = (p, A) => (i = Mn(e, p, A), i.finally(() => {
    if (i = null, n.trailing && a && !r) {
      const d = h(p, a);
      return a = null, d;
    }
  }), i);
  return function(...p) {
    return i ? (n.trailing && (a = p), i) : new Promise((A) => {
      const d = !r && n.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const m = n.leading ? u : h(this, p);
        for (const c of o)
          c(m);
        o = [];
      }, t), d ? (u = h(this, p), A(u)) : o.push(A);
    });
  };
}
async function Mn(e, t, n) {
  return await e.apply(t, n);
}
function ge(e, t = {}, n) {
  for (const u in e) {
    const r = e[u], o = n ? `${n}:${u}` : u;
    typeof r == "object" && r !== null ? ge(r, t, o) : typeof r == "function" && (t[o] = r);
  }
  return t;
}
const Kn = { run: (e) => e() }, Hn = () => Kn, Gt = typeof console.createTask < "u" ? console.createTask : Hn;
function zn(e, t) {
  const n = t.shift(), u = Gt(n);
  return e.reduce(
    (r, o) => r.then(() => u.run(() => o(...t))),
    Promise.resolve()
  );
}
function $n(e, t) {
  const n = t.shift(), u = Gt(n);
  return Promise.all(e.map((r) => u.run(() => r(...t))));
}
function Ee(e, t) {
  for (const n of [...e])
    n(t);
}
class jn {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, u = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const r = t;
    let o;
    for (; this._deprecatedHooks[t]; )
      o = this._deprecatedHooks[t], t = o.to;
    if (o && !u.allowDeprecated) {
      let i = o.message;
      i || (i = `${r} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0);
    };
  }
  hookOnce(t, n) {
    let u, r = (...o) => (typeof u == "function" && u(), u = void 0, r = void 0, n(...o));
    return u = this.hook(t, r), u;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const u = this._hooks[t].indexOf(n);
      u !== -1 && this._hooks[t].splice(u, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const u = this._hooks[t] || [];
    delete this._hooks[t];
    for (const r of u)
      this.hook(t, r);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = ge(t), u = Object.keys(n).map(
      (r) => this.hook(r, n[r])
    );
    return () => {
      for (const r of u.splice(0, u.length))
        r();
    };
  }
  removeHooks(t) {
    const n = ge(t);
    for (const u in n)
      this.removeHook(u, n[u]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(zn, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith($n, t, ...n);
  }
  callHookWith(t, n, ...u) {
    const r = this._before || this._after ? { name: n, args: u, context: {} } : void 0;
    this._before && Ee(this._before, r);
    const o = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      u
    );
    return o instanceof Promise ? o.finally(() => {
      this._after && r && Ee(this._after, r);
    }) : (this._after && r && Ee(this._after, r), o);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    };
  }
}
function qt() {
  return new jn();
}
var Gn = Object.create, Yt = Object.defineProperty, qn = Object.getOwnPropertyDescriptor, Ie = Object.getOwnPropertyNames, Yn = Object.getPrototypeOf, Wn = Object.prototype.hasOwnProperty, Zn = (e, t) => function() {
  return e && (t = (0, e[Ie(e)[0]])(e = 0)), t;
}, Wt = (e, t) => function() {
  return t || (0, e[Ie(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Xn = (e, t, n, u) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of Ie(t))
      !Wn.call(e, r) && r !== n && Yt(e, r, { get: () => t[r], enumerable: !(u = qn(t, r)) || u.enumerable });
  return e;
}, Jn = (e, t, n) => (n = e != null ? Gn(Yn(e)) : {}, Xn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Yt(n, "default", { value: e, enumerable: !0 }),
  e
)), s = Zn({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Qn = Wt({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    s(), function(n) {
      var u = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, r = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], o = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, i = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, a = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, h = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), p = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), A = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(f, E) {
        var C = "-", y = "", k = "", ce = !0, w = {}, Be, te, j, _e, fe, Ue, G, B, Le, P, v, ne, b, U, V = "";
        if (typeof f != "string")
          return "";
        if (typeof E == "string" && (C = E), G = a.en, B = i.en, typeof E == "object") {
          Be = E.maintainCase || !1, w = E.custom && typeof E.custom == "object" ? E.custom : w, j = +E.truncate > 1 && E.truncate || !1, _e = E.uric || !1, fe = E.uricNoSlash || !1, Ue = E.mark || !1, ce = !(E.symbols === !1 || E.lang === !1), C = E.separator || C, _e && (V += h), fe && (V += p), Ue && (V += A), G = E.lang && a[E.lang] && ce ? a[E.lang] : ce ? a.en : {}, B = E.lang && i[E.lang] ? i[E.lang] : E.lang === !1 || E.lang === !0 ? {} : i.en, E.titleCase && typeof E.titleCase.length == "number" && Array.prototype.toString.call(E.titleCase) ? (E.titleCase.forEach(function(I) {
            w[I + ""] = I + "";
          }), te = !0) : te = !!E.titleCase, E.custom && typeof E.custom.length == "number" && Array.prototype.toString.call(E.custom) && E.custom.forEach(function(I) {
            w[I + ""] = I + "";
          }), Object.keys(w).forEach(function(I) {
            var q;
            I.length > 1 ? q = new RegExp("\\b" + c(I) + "\\b", "gi") : q = new RegExp(c(I), "gi"), f = f.replace(q, w[I]);
          });
          for (v in w)
            V += v;
        }
        for (V += C, V = c(V), f = f.replace(/(^\s+|\s+$)/g, ""), b = !1, U = !1, P = 0, ne = f.length; P < ne; P++)
          v = f[P], _(v, w) ? b = !1 : B[v] ? (v = b && B[v].match(/[A-Za-z0-9]/) ? " " + B[v] : B[v], b = !1) : v in u ? (P + 1 < ne && r.indexOf(f[P + 1]) >= 0 ? (k += v, v = "") : U === !0 ? (v = o[k] + u[v], k = "") : v = b && u[v].match(/[A-Za-z0-9]/) ? " " + u[v] : u[v], b = !1, U = !1) : v in o ? (k += v, v = "", P === ne - 1 && (v = o[k]), U = !0) : /* process symbol chars */ G[v] && !(_e && h.indexOf(v) !== -1) && !(fe && p.indexOf(v) !== -1) ? (v = b || y.substr(-1).match(/[A-Za-z0-9]/) ? C + G[v] : G[v], v += f[P + 1] !== void 0 && f[P + 1].match(/[A-Za-z0-9]/) ? C : "", b = !0) : (U === !0 ? (v = o[k] + v, k = "", U = !1) : b && (/[A-Za-z0-9]/.test(v) || y.substr(-1).match(/A-Za-z0-9]/)) && (v = " " + v), b = !1), y += v.replace(new RegExp("[^\\w\\s" + V + "_-]", "g"), C);
        return te && (y = y.replace(/(\w)(\S*)/g, function(I, q, Me) {
          var de = q.toUpperCase() + (Me !== null ? Me : "");
          return Object.keys(w).indexOf(de.toLowerCase()) < 0 ? de : de.toLowerCase();
        })), y = y.replace(/\s+/g, C).replace(new RegExp("\\" + C + "+", "g"), C).replace(new RegExp("(^\\" + C + "+|\\" + C + "+$)", "g"), ""), j && y.length > j && (Le = y.charAt(j) === C, y = y.slice(0, j), Le || (y = y.slice(0, y.lastIndexOf(C)))), !Be && !te && (y = y.toLowerCase()), y;
      }, m = function(f) {
        return function(C) {
          return d(C, f);
        };
      }, c = function(f) {
        return f.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, _ = function(g, f) {
        for (var E in f)
          if (f[E] === g)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = d, t.exports.createSlug = m;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return d;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = d, n.createSlug = m;
        } catch {
        }
    }(e);
  }
}), eu = Wt({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    s(), t.exports = Qn();
  }
});
s();
s();
s();
s();
s();
s();
s();
s();
function tu(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function nu(e) {
  const t = e.__file;
  if (t)
    return Bn(Un(t, ".vue"));
}
function ze(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function ke(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Zt(e) {
  var t, n;
  const u = (t = e.subTree) == null ? void 0 : t.type, r = ke(e);
  return r ? ((n = r == null ? void 0 : r.types) == null ? void 0 : n.Fragment) === u : !1;
}
function se(e) {
  var t, n, u;
  const r = tu((e == null ? void 0 : e.type) || {});
  if (r)
    return r;
  if ((e == null ? void 0 : e.root) === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === (e == null ? void 0 : e.type))
      return ze(e, i);
  for (const i in (u = e.appContext) == null ? void 0 : u.components)
    if (e.appContext.components[i] === (e == null ? void 0 : e.type))
      return ze(e, i);
  const o = nu((e == null ? void 0 : e.type) || {});
  return o || "Anonymous Component";
}
function uu(e) {
  var t, n, u;
  const r = (u = (n = (t = e == null ? void 0 : e.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? u : 0, o = e === (e == null ? void 0 : e.root) ? "root" : e.uid;
  return `${r}:${o}`;
}
function me(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function ru() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
var ue;
function ou(e) {
  return ue || (ue = document.createRange()), ue.selectNode(e), ue.getBoundingClientRect();
}
function iu(e) {
  const t = ru();
  if (!e.children)
    return t;
  for (let n = 0, u = e.children.length; n < u; n++) {
    const r = e.children[n];
    let o;
    if (r.component)
      o = F(r.component);
    else if (r.el) {
      const i = r.el;
      i.nodeType === 1 || i.getBoundingClientRect ? o = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (o = ou(i));
    }
    o && su(t, o);
  }
  return t;
}
function su(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var $e = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function F(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? $e : Zt(e) ? iu(e.subTree) : (t == null ? void 0 : t.nodeType) === 1 ? t == null ? void 0 : t.getBoundingClientRect() : e.subTree.component ? F(e.subTree.component) : $e;
}
s();
function be(e) {
  return Zt(e) ? au(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function au(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...be(n.component)) : n != null && n.el && t.push(n.el);
  }), t;
}
var Xt = "__vue-devtools-component-inspector__", Jt = "__vue-devtools-component-inspector__card__", Qt = "__vue-devtools-component-inspector__name__", en = "__vue-devtools-component-inspector__indicator__", tn = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, lu = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, cu = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function z() {
  return document.getElementById(Xt);
}
function _u() {
  return document.getElementById(Jt);
}
function fu() {
  return document.getElementById(en);
}
function du() {
  return document.getElementById(Qt);
}
function Re(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function we(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Xt, Object.assign(n.style, {
    ...tn,
    ...Re(e.bounds),
    ...e.style
  });
  const u = document.createElement("span");
  u.id = Jt, Object.assign(u.style, {
    ...lu,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = Qt, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const o = document.createElement("i");
  return o.id = en, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(o.style, cu), u.appendChild(r), u.appendChild(o), n.appendChild(u), document.body.appendChild(n), n;
}
function Pe(e) {
  const t = z(), n = _u(), u = du(), r = fu();
  t && (Object.assign(t.style, {
    ...tn,
    ...Re(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), u.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function Eu(e) {
  const t = F(e);
  if (!t.width && !t.height)
    return;
  const n = se(e);
  z() ? Pe({ bounds: t, name: n }) : we({ bounds: t, name: n });
}
function nn() {
  const e = z();
  e && (e.style.display = "none");
}
var ve = null;
function Ae(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (ve = n, n.vnode.el)) {
      const r = F(n), o = se(n);
      z() ? Pe({ bounds: r, name: o }) : we({ bounds: r, name: o });
    }
  }
}
function pu(e, t) {
  if (e.preventDefault(), e.stopPropagation(), ve) {
    const n = uu(ve);
    t(n);
  }
}
var ie = null;
function hu() {
  nn(), window.removeEventListener("mouseover", Ae), window.removeEventListener("click", ie, !0), ie = null;
}
function gu() {
  return window.addEventListener("mouseover", Ae), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), pu(n, (u) => {
        window.removeEventListener("click", t, !0), ie = null, window.removeEventListener("mouseover", Ae);
        const r = z();
        r && (r.style.display = "none"), e(JSON.stringify({ id: u }));
      });
    }
    ie = t, window.addEventListener("click", t, !0);
  });
}
function mu(e) {
  const t = me(D.value, e.id);
  if (t) {
    const [n] = be(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const u = F(t), r = document.createElement("div"), o = {
        ...Re(u),
        position: "absolute"
      };
      Object.assign(r.style, o), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const u = F(t);
      if (u.width || u.height) {
        const r = se(t), o = z();
        o ? Pe({ ...e, name: r, bounds: u }) : we({ ...e, name: r, bounds: u }), setTimeout(() => {
          o && (o.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
s();
var je, Ge;
(Ge = (je = l).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (je.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function vu(e) {
  let t = 0;
  const n = setInterval(() => {
    l.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function Au() {
  const e = l.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function yu() {
  return new Promise((e) => {
    function t() {
      Au(), e(l.__VUE_INSPECTOR__);
    }
    l.__VUE_INSPECTOR__ ? t() : vu(() => {
      t();
    });
  });
}
s();
s();
function Ou(e) {
  return !!(e && e.__v_isReadonly);
}
function un(e) {
  return Ou(e) ? un(e.__v_raw) : !!(e && e.__v_isReactive);
}
function pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Y(e) {
  const t = e && e.__v_raw;
  return t ? Y(t) : e;
}
var Cu = class {
  constructor() {
    this.refEditor = new Tu();
  }
  set(e, t, n, u) {
    const r = Array.isArray(t) ? t : t.split(".");
    for (; r.length > 1; ) {
      const a = r.shift();
      e instanceof Map ? e = e.get(a) : e instanceof Set ? e = Array.from(e.values())[a] : e = e[a], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const o = r[0], i = this.refEditor.get(e)[o];
    u ? u(e, o, n) : this.refEditor.isRef(i) ? this.refEditor.set(i, n) : e[o] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let u = 0; u < n.length; u++)
      if (e instanceof Map ? e = e.get(n[u]) : e = e[n[u]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, n = !1) {
    if (typeof e > "u")
      return !1;
    const u = Array.isArray(t) ? t.slice() : t.split("."), r = n ? 2 : 1;
    for (; e && u.length > r; ) {
      const o = u.shift();
      e = e[o], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, u[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, u) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Y(t) instanceof Map ? t.delete(n) : Y(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const r = t[e.newKey || n];
        this.refEditor.isRef(r) ? this.refEditor.set(r, u) : Y(t) instanceof Map ? t.set(e.newKey || n, u) : Y(t) instanceof Set ? t.add(u) : t[e.newKey || n] = u;
      }
    };
  }
}, Tu = class {
  set(e, t) {
    if (pe(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((r) => e.add(r));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const r = new Set(e.keys());
        n.forEach((o) => {
          e.set(o, Reflect.get(t, o)), r.delete(o);
        }), r.forEach((o) => e.delete(o));
        return;
      }
      const u = new Set(Object.keys(e));
      n.forEach((r) => {
        Reflect.set(e, r, Reflect.get(t, r)), u.delete(r);
      }), u.forEach((r) => Reflect.deleteProperty(e, r));
    }
  }
  get(e) {
    return pe(e) ? e.value : e;
  }
  isRef(e) {
    return pe(e) || un(e);
  }
};
s();
s();
s();
var Du = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Su() {
  if (typeof window > "u" || !jt || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = typeof localStorage.getItem < "u" ? localStorage.getItem(Du) : null;
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
s();
s();
s();
var qe, Ye;
(Ye = (qe = l).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (qe.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var Iu = new Proxy(l.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function ku(e, t) {
  T.timelineLayersState[t.id] = !1, Iu.push({
    ...e,
    descriptorId: t.id,
    appRecord: ke(t.app)
  });
}
var We, Ze;
(Ze = (We = l).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (We.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Ve = new Proxy(l.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), rn = M(() => {
  $.hooks.callHook("sendInspectorToClient", on());
});
function bu(e, t) {
  var n, u;
  Ve.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (u = e.stateFilterPlaceholder) != null ? u : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: ke(t.app)
  }), rn();
}
function on() {
  return Ve.filter((e) => e.descriptor.app === D.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const n = e.descriptor, u = e.options;
    return {
      id: u.id,
      label: u.label,
      logo: n.logo,
      icon: `custom-ic-baseline-${(t = u == null ? void 0 : u.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: n.packageName,
      homepage: n.homepage,
      pluginId: n.id
    };
  });
}
function re(e, t) {
  return Ve.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function Ru() {
  const e = qt();
  e.hook("addInspector", ({ inspector: u, plugin: r }) => {
    bu(u, r.descriptor);
  });
  const t = M(async ({ inspectorId: u, plugin: r }) => {
    var o;
    if (!u || !((o = r == null ? void 0 : r.descriptor) != null && o.app) || T.highPerfModeEnabled)
      return;
    const i = re(u, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: u,
      filter: (i == null ? void 0 : i.treeFilter) || "",
      rootNodes: []
    };
    await new Promise((h) => {
      e.callHookWith(
        async (p) => {
          await Promise.all(p.map((A) => A(a))), h();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (h) => {
        await Promise.all(h.map((p) => p({
          inspectorId: u,
          rootNodes: a.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = M(async ({ inspectorId: u, plugin: r }) => {
    var o;
    if (!u || !((o = r == null ? void 0 : r.descriptor) != null && o.app) || T.highPerfModeEnabled)
      return;
    const i = re(u, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: u,
      nodeId: (i == null ? void 0 : i.selectedNodeId) || "",
      state: null
    }, h = {
      currentTab: `custom-inspector:${u}`
    };
    a.nodeId && await new Promise((p) => {
      e.callHookWith(
        async (A) => {
          await Promise.all(A.map((d) => d(a, h))), p();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (p) => {
        await Promise.all(p.map((A) => A({
          inspectorId: u,
          nodeId: a.nodeId,
          state: a.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: u, nodeId: r, plugin: o }) => {
    const i = re(u, o.descriptor.app);
    i && (i.selectedNodeId = r);
  }), e.hook("timelineLayerAdded", ({ options: u, plugin: r }) => {
    ku(u, r.descriptor);
  }), e.hook("timelineEventAdded", ({ options: u, plugin: r }) => {
    var o;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    T.highPerfModeEnabled || !((o = T.timelineLayersState) != null && o[r.descriptor.id]) && !i.includes(u.layerId) || e.callHookWith(
      async (a) => {
        await Promise.all(a.map((h) => h(u)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: u }) => {
    const r = u.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!r)
      return null;
    const o = r.id.toString();
    return [...r.instanceMap].filter(([a]) => a.split(":")[0] === o).map(([, a]) => a);
  }), e.hook("getComponentBounds", async ({ instance: u }) => F(u)), e.hook("getComponentName", ({ instance: u }) => se(u)), e.hook("componentHighlight", ({ uid: u }) => {
    const r = D.value.instanceMap.get(u);
    r && Eu(r);
  }), e.hook("componentUnhighlight", () => {
    nn();
  }), e;
}
var Xe, Je;
(Je = (Xe = l).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Xe.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Qe, et;
(et = (Qe = l).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Qe.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var tt, nt;
(nt = (tt = l).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (tt.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var ut, rt;
(rt = (ut = l).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (ut.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var ot, it;
(it = (ot = l).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (ot.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var N = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function wu() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: Su()
  };
}
var st, at;
(at = (st = l)[N]) != null || (st[N] = wu());
var Pu = M((e) => {
  $.hooks.callHook("devtoolsStateUpdated", { state: e });
});
M((e, t) => {
  $.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var ae = new Proxy(l.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? l.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : l.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), D = new Proxy(l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function sn() {
  Pu({
    ...l[N],
    appRecords: ae.value,
    activeAppRecordId: D.id,
    tabs: l.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Vu(e) {
  l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, sn();
}
function xu(e) {
  l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, sn();
}
var T = new Proxy(l[N], {
  get(e, t) {
    return t === "appRecords" ? ae : t === "activeAppRecordId" ? D.id : t === "tabs" ? l.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : l[N][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...l[N] }, e[t] = n, l[N][t] = n, !0;
  }
});
function Nu(e = {}) {
  var t, n, u;
  const { file: r, host: o, baseUrl: i = window.location.origin, line: a = 0, column: h = 0 } = e;
  if (r) {
    if (o === "chrome-extension") {
      const p = r.replace(/\\/g, "\\\\"), A = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${A}__open-in-editor?file=${encodeURI(r)}`).then((d) => {
        if (!d.ok) {
          const m = `Opening component ${p} failed`;
          console.log(`%c${m}`, "color:red");
        }
      });
    } else if (T.vitePluginDetected) {
      const p = (u = l.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? u : i;
      l.__VUE_INSPECTOR__.openInEditor(p, r, a, h);
    }
  }
}
s();
s();
s();
s();
s();
var lt, ct;
(ct = (lt = l).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (lt.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var xe = new Proxy(l.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function ye(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Ne(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Fu(e) {
  var t, n, u;
  const r = (n = (t = xe.find((o) => {
    var i;
    return o[0].id === e && !!((i = o[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (u = r == null ? void 0 : r.settings) != null ? u : null;
}
function an(e, t) {
  var n, u, r;
  const o = Ne(e);
  if (o) {
    const i = localStorage.getItem(o);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (u = (n = xe.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? u : null;
    return ye((r = i == null ? void 0 : i.settings) != null ? r : {});
  }
  return ye(t);
}
function Bu(e, t) {
  const n = Ne(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(ye(t)));
}
function Uu(e, t, n) {
  const u = Ne(e), r = localStorage.getItem(u), o = JSON.parse(r || "{}"), i = {
    ...o,
    [t]: n
  };
  localStorage.setItem(u, JSON.stringify(i)), $.hooks.callHookWith(
    (a) => {
      a.forEach((h) => h({
        pluginId: e,
        key: t,
        oldValue: o[t],
        newValue: n,
        settings: i
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
var _t, ft, S = (ft = (_t = l).__VUE_DEVTOOLS_HOOK) != null ? ft : _t.__VUE_DEVTOOLS_HOOK = qt(), Lu = {
  vueAppInit(e) {
    S.hook("app:init", e);
  },
  vueAppUnmount(e) {
    S.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    S.hook("app:connected", e);
  },
  componentAdded(e) {
    return S.hook("component:added", e);
  },
  componentEmit(e) {
    return S.hook("component:emit", e);
  },
  componentUpdated(e) {
    return S.hook("component:updated", e);
  },
  componentRemoved(e) {
    return S.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    S.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return S.hook("perf:start", e);
  },
  perfEnd(e) {
    return S.hook("perf:end", e);
  }
}, ln = {
  on: Lu,
  setupDevToolsPlugin(e, t) {
    return S.callHook("devtools-plugin:setup", e, t);
  }
}, Mu = class {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (e) => {
        this.hooks.hook("visitComponentTree", e);
      },
      inspectComponent: (e) => {
        this.hooks.hook("inspectComponent", e);
      },
      editComponentState: (e) => {
        this.hooks.hook("editComponentState", e);
      },
      // custom inspector
      getInspectorTree: (e) => {
        this.hooks.hook("getInspectorTree", e);
      },
      getInspectorState: (e) => {
        this.hooks.hook("getInspectorState", e);
      },
      editInspectorState: (e) => {
        this.hooks.hook("editInspectorState", e);
      },
      // timeline
      inspectTimelineEvent: (e) => {
        this.hooks.hook("inspectTimelineEvent", e);
      },
      timelineCleared: (e) => {
        this.hooks.hook("timelineCleared", e);
      },
      // settings
      setPluginSettings: (e) => {
        this.hooks.hook("setPluginSettings", e);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(e) {
    var t;
    if (T.highPerfModeEnabled)
      return;
    const n = on().find((u) => u.packageName === this.plugin.descriptor.packageName);
    if (n != null && n.id) {
      if (e) {
        const u = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        S.callHook("component:updated", ...u);
      } else
        S.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Bu(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    T.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    T.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return T.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    T.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return an(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(e) {
    return this.hooks.callHook("getComponentInstances", { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook("getComponentBounds", { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook("getComponentName", { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, Ku = Mu;
s();
s();
s();
s();
var Hu = "__vue_devtool_undefined__", zu = "__vue_devtool_infinity__", $u = "__vue_devtool_negative_infinity__", ju = "__vue_devtool_nan__";
s();
s();
var Gu = {
  [Hu]: "undefined",
  [ju]: "NaN",
  [zu]: "Infinity",
  [$u]: "-Infinity"
};
Object.entries(Gu).reduce((e, [t, n]) => (e[n] = t, e), {});
s();
s();
s();
s();
s();
var dt, Et;
(Et = (dt = l).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (dt.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function br(e, t) {
  return ln.setupDevToolsPlugin(e, t);
}
function qu(e, t) {
  const [n, u] = e;
  if (n.app !== t)
    return;
  const r = new Ku({
    plugin: {
      setupFn: u,
      descriptor: n
    },
    ctx: $
  });
  n.packageName === "vuex" && r.on.editInspectorState((o) => {
    r.sendInspectorState(o.inspectorId);
  }), u(r);
}
function cn(e, t) {
  l.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || T.highPerfModeEnabled && !(t != null && t.inspectingComponent) || (l.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), xe.forEach((n) => {
    qu(n, e);
  }));
}
s();
s();
var Z = "__VUE_DEVTOOLS_ROUTER__", K = "__VUE_DEVTOOLS_ROUTER_INFO__", pt, ht;
(ht = (pt = l)[K]) != null || (pt[K] = {
  currentRoute: null,
  routes: []
});
var gt, mt;
(mt = (gt = l)[Z]) != null || (gt[Z] = {});
new Proxy(l[K], {
  get(e, t) {
    return l[K][t];
  }
});
new Proxy(l[Z], {
  get(e, t) {
    if (t === "value")
      return l[Z];
  }
});
function Yu(e) {
  const t = /* @__PURE__ */ new Map();
  return ((e == null ? void 0 : e.getRoutes()) || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Fe(e) {
  return e.map((t) => {
    let { path: n, name: u, children: r, meta: o } = t;
    return r != null && r.length && (r = Fe(r)), {
      path: n,
      name: u,
      children: r,
      meta: o
    };
  });
}
function Wu(e) {
  if (e) {
    const { fullPath: t, hash: n, href: u, path: r, name: o, matched: i, params: a, query: h } = e;
    return {
      fullPath: t,
      hash: n,
      href: u,
      path: r,
      name: o,
      params: a,
      query: h,
      matched: Fe(i)
    };
  }
  return e;
}
function Zu(e, t) {
  function n() {
    var u;
    const r = (u = e.app) == null ? void 0 : u.config.globalProperties.$router, o = Wu(r == null ? void 0 : r.currentRoute.value), i = Fe(Yu(r)), a = console.warn;
    console.warn = () => {
    }, l[K] = {
      currentRoute: o ? He(o) : {},
      routes: He(i)
    }, l[Z] = r, console.warn = a;
  }
  n(), ln.on.componentUpdated(M(() => {
    var u;
    ((u = t.value) == null ? void 0 : u.app) === e.app && (n(), !T.highPerfModeEnabled && $.hooks.callHook("routerInfoUpdated", { state: l[K] }));
  }, 200));
}
function Xu(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: D.value.app,
        rootNodes: []
      };
      return await new Promise((u) => {
        e.callHookWith(
          async (r) => {
            await Promise.all(r.map((o) => o(n))), u();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), n.rootNodes;
    },
    // get inspector state
    async getInspectorState(t) {
      const n = {
        ...t,
        app: D.value.app,
        state: null
      }, u = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((r) => {
        e.callHookWith(
          async (o) => {
            await Promise.all(o.map((i) => i(n, u))), r();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new Cu(), u = {
        ...t,
        app: D.value.app,
        set: (r, o = t.path, i = t.state.value, a) => {
          n.set(r, o, i, a || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (r) => {
          r.forEach((o) => o(u));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = re(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return gu();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return hu();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = me(D.value, t);
      if (n)
        return typeof (n == null ? void 0 : n.type) != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return mu({ id: t });
    },
    // open in editor
    openInEditor: Nu,
    // get vue inspector
    getVueInspector: yu,
    // toggle app
    toggleApp(t, n) {
      const u = ae.value.find((r) => r.id === t);
      u && (xu(t), Vu(u), Zu(u, D), rn(), cn(u.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = me(D.value, t);
      if (n) {
        const [u] = be(n);
        u && (l.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = u);
      }
    },
    updatePluginSettings(t, n, u) {
      Uu(t, n, u);
    },
    getPluginSettings(t) {
      return {
        options: Fu(t),
        values: an(t)
      };
    }
  };
}
s();
var vt, At;
(At = (vt = l).__VUE_DEVTOOLS_ENV__) != null || (vt.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var yt = Ru(), Ot, Ct;
(Ct = (Ot = l).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Ot.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: yt,
  get state() {
    return {
      ...T,
      activeAppRecordId: D.id,
      activeAppRecord: D.value,
      appRecords: ae.value
    };
  },
  api: Xu(yt)
});
var $ = l.__VUE_DEVTOOLS_KIT_CONTEXT__;
s();
Jn(eu());
var Tt, Dt;
(Dt = (Tt = l).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Tt.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
s();
s();
function Ju(e) {
  T.highPerfModeEnabled = e ?? !T.highPerfModeEnabled, !e && D.value && cn(D.value.app);
}
s();
s();
s();
function Qu(e) {
  T.devtoolsClientDetected = {
    ...T.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(T.devtoolsClientDetected).some(Boolean);
  Ju(!t);
}
var St, It;
(It = (St = l).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (St.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = Qu);
s();
s();
s();
s();
s();
s();
s();
var er = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, _n = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new er();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, tr = class extends _n {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
s();
s();
function nr(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function ur(e, t) {
  const n = nr(e);
  if ("find" in n)
    return n.find(t);
  const u = n;
  for (let r = 0; r < u.length; r++) {
    const o = u[r];
    if (t(o))
      return o;
  }
}
function H(e, t) {
  Object.entries(e).forEach(([n, u]) => t(u, n));
}
function oe(e, t) {
  return e.indexOf(t) !== -1;
}
function kt(e, t) {
  for (let n = 0; n < e.length; n++) {
    const u = e[n];
    if (t(u))
      return u;
  }
}
var rr = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return ur(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
s();
s();
var or = (e) => Object.prototype.toString.call(e).slice(8, -1), fn = (e) => typeof e > "u", ir = (e) => e === null, X = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Oe = (e) => X(e) && Object.keys(e).length === 0, x = (e) => Array.isArray(e), sr = (e) => typeof e == "string", ar = (e) => typeof e == "number" && !isNaN(e), lr = (e) => typeof e == "boolean", cr = (e) => e instanceof RegExp, J = (e) => e instanceof Map, Q = (e) => e instanceof Set, dn = (e) => or(e) === "Symbol", _r = (e) => e instanceof Date && !isNaN(e.valueOf()), fr = (e) => e instanceof Error, bt = (e) => typeof e == "number" && isNaN(e), dr = (e) => lr(e) || ir(e) || fn(e) || ar(e) || sr(e) || dn(e), Er = (e) => typeof e == "bigint", pr = (e) => e === 1 / 0 || e === -1 / 0, hr = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), gr = (e) => e instanceof URL;
s();
var En = (e) => e.replace(/\./g, "\\."), he = (e) => e.map(String).map(En).join("."), W = (e) => {
  const t = [];
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let o = e.charAt(r);
    if (o === "\\" && e.charAt(r + 1) === ".") {
      n += ".", r++;
      continue;
    }
    if (o === ".") {
      t.push(n), n = "";
      continue;
    }
    n += o;
  }
  const u = n;
  return t.push(u), t;
};
s();
function R(e, t, n, u) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: u
  };
}
var pn = [
  R(fn, "undefined", () => null, () => {
  }),
  R(Er, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  R(_r, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  R(fr, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((u) => {
      n[u] = e[u];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((u) => {
      n[u] = e[u];
    }), n;
  }),
  R(cr, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  R(
    Q,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  R(J, "map", (e) => [...e.entries()], (e) => new Map(e)),
  R((e) => bt(e) || pr(e), "number", (e) => bt(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  R((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  R(gr, "URL", (e) => e.toString(), (e) => new URL(e))
];
function le(e, t, n, u) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: u
  };
}
var hn = le((e, t) => dn(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const u = n.symbolRegistry.getValue(t[1]);
  if (!u)
    throw new Error("Trying to deserialize unknown symbol");
  return u;
}), mr = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), gn = le(hr, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = mr[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function mn(e, t) {
  return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var vn = le(mn, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const u = {};
  return n.forEach((r) => {
    u[r] = e[r];
  }), u;
}, (e, t, n) => {
  const u = n.classRegistry.getValue(t[1]);
  if (!u)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(u.prototype), e);
}), An = le((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const u = n.customTransformerRegistry.findByName(t[1]);
  if (!u)
    throw new Error("Trying to deserialize unknown custom value");
  return u.deserialize(e);
}), vr = [vn, hn, An, gn], Rt = (e, t) => {
  const n = kt(vr, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const u = kt(pn, (r) => r.isApplicable(e, t));
  if (u)
    return {
      value: u.transform(e, t),
      type: u.annotation
    };
}, yn = {};
pn.forEach((e) => {
  yn[e.annotation] = e;
});
var Ar = (e, t, n) => {
  if (x(t))
    switch (t[0]) {
      case "symbol":
        return hn.untransform(e, t, n);
      case "class":
        return vn.untransform(e, t, n);
      case "custom":
        return An.untransform(e, t, n);
      case "typed-array":
        return gn.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const u = yn[t];
    if (!u)
      throw new Error("Unknown transformation: " + t);
    return u.untransform(e, n);
  }
};
s();
var L = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function On(e) {
  if (oe(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (oe(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (oe(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var yr = (e, t) => {
  On(t);
  for (let n = 0; n < t.length; n++) {
    const u = t[n];
    if (Q(e))
      e = L(e, +u);
    else if (J(e)) {
      const r = +u, o = +t[++n] == 0 ? "key" : "value", i = L(e, r);
      switch (o) {
        case "key":
          e = i;
          break;
        case "value":
          e = e.get(i);
          break;
      }
    } else
      e = e[u];
  }
  return e;
}, Ce = (e, t, n) => {
  if (On(t), t.length === 0)
    return n(e);
  let u = e;
  for (let o = 0; o < t.length - 1; o++) {
    const i = t[o];
    if (x(u)) {
      const a = +i;
      u = u[a];
    } else if (X(u))
      u = u[i];
    else if (Q(u)) {
      const a = +i;
      u = L(u, a);
    } else if (J(u)) {
      if (o === t.length - 2)
        break;
      const h = +i, p = +t[++o] == 0 ? "key" : "value", A = L(u, h);
      switch (p) {
        case "key":
          u = A;
          break;
        case "value":
          u = u.get(A);
          break;
      }
    }
  }
  const r = t[t.length - 1];
  if (x(u) ? u[+r] = n(u[+r]) : X(u) && (u[r] = n(u[r])), Q(u)) {
    const o = L(u, +r), i = n(o);
    o !== i && (u.delete(o), u.add(i));
  }
  if (J(u)) {
    const o = +t[t.length - 2], i = L(u, o);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const h = n(i);
        u.set(h, u.get(i)), h !== i && u.delete(i);
        break;
      }
      case "value": {
        u.set(i, n(u.get(i)));
        break;
      }
    }
  }
  return e;
};
function Te(e, t, n = []) {
  if (!e)
    return;
  if (!x(e)) {
    H(e, (o, i) => Te(o, t, [...n, ...W(i)]));
    return;
  }
  const [u, r] = e;
  r && H(r, (o, i) => {
    Te(o, t, [...n, ...W(i)]);
  }), t(u, n);
}
function Or(e, t, n) {
  return Te(t, (u, r) => {
    e = Ce(e, r, (o) => Ar(o, u, n));
  }), e;
}
function Cr(e, t) {
  function n(u, r) {
    const o = yr(e, W(r));
    u.map(W).forEach((i) => {
      e = Ce(e, i, () => o);
    });
  }
  if (x(t)) {
    const [u, r] = t;
    u.forEach((o) => {
      e = Ce(e, W(o), () => e);
    }), r && H(r, n);
  } else
    H(t, n);
  return e;
}
var Tr = (e, t) => X(e) || x(e) || J(e) || Q(e) || mn(e, t);
function Dr(e, t, n) {
  const u = n.get(e);
  u ? u.push(t) : n.set(e, [t]);
}
function Sr(e, t) {
  const n = {};
  let u;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((a) => a.map(String)).sort((a, h) => a.length - h.length));
    const [o, ...i] = r;
    o.length === 0 ? u = i.map(he) : n[he(o)] = i.map(he);
  }), u ? Oe(n) ? [u] : [u, n] : Oe(n) ? void 0 : n;
}
var Cn = (e, t, n, u, r = [], o = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const h = dr(e);
  if (!h) {
    Dr(e, r, t);
    const _ = i.get(e);
    if (_)
      return u ? {
        transformedValue: null
      } : _;
  }
  if (!Tr(e, n)) {
    const _ = Rt(e, n), g = _ ? {
      transformedValue: _.value,
      annotations: [_.type]
    } : {
      transformedValue: e
    };
    return h || i.set(e, g), g;
  }
  if (oe(o, e))
    return {
      transformedValue: null
    };
  const p = Rt(e, n), A = (a = p == null ? void 0 : p.value) != null ? a : e, d = x(A) ? [] : {}, m = {};
  H(A, (_, g) => {
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);
    const f = Cn(_, t, n, u, [...r, g], [...o, e], i);
    d[g] = f.transformedValue, x(f.annotations) ? m[g] = f.annotations : X(f.annotations) && H(f.annotations, (E, C) => {
      m[En(g) + "." + C] = E;
    });
  });
  const c = Oe(m) ? {
    transformedValue: d,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: d,
    annotations: p ? [p.type, m] : m
  };
  return h || i.set(e, c), c;
};
s();
s();
function Tn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function wt(e) {
  return Tn(e) === "Array";
}
function Ir(e) {
  if (Tn(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function kr(e, t, n, u, r) {
  const o = {}.propertyIsEnumerable.call(u, t) ? "enumerable" : "nonenumerable";
  o === "enumerable" && (e[t] = n), r && o === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function De(e, t = {}) {
  if (wt(e))
    return e.map((r) => De(r, t));
  if (!Ir(e))
    return e;
  const n = Object.getOwnPropertyNames(e), u = Object.getOwnPropertySymbols(e);
  return [...n, ...u].reduce((r, o) => {
    if (wt(t.props) && !t.props.includes(o))
      return r;
    const i = e[o], a = De(i, t);
    return kr(r, o, a, e, t.nonenumerable), r;
  }, {});
}
var O = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new tr(), this.symbolRegistry = new _n((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new rr(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = Cn(e, t, this, this.dedupe), u = {
      json: n.transformedValue
    };
    n.annotations && (u.meta = {
      ...u.meta,
      values: n.annotations
    });
    const r = Sr(t, this.dedupe);
    return r && (u.meta = {
      ...u.meta,
      referentialEqualities: r
    }), u;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let u = De(t);
    return n != null && n.values && (u = Or(u, n.values, this)), n != null && n.referentialEqualities && (u = Cr(u, n.referentialEqualities)), u;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
O.defaultInstance = new O();
O.serialize = O.defaultInstance.serialize.bind(O.defaultInstance);
O.deserialize = O.defaultInstance.deserialize.bind(O.defaultInstance);
O.stringify = O.defaultInstance.stringify.bind(O.defaultInstance);
O.parse = O.defaultInstance.parse.bind(O.defaultInstance);
O.registerClass = O.defaultInstance.registerClass.bind(O.defaultInstance);
O.registerSymbol = O.defaultInstance.registerSymbol.bind(O.defaultInstance);
O.registerCustom = O.defaultInstance.registerCustom.bind(O.defaultInstance);
O.allowErrorProps = O.defaultInstance.allowErrorProps.bind(O.defaultInstance);
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
var Pt, Vt;
(Vt = (Pt = l).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (Pt.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var xt, Nt;
(Nt = (xt = l).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (xt.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var Ft, Bt;
(Bt = (Ft = l).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (Ft.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var Ut, Lt;
(Lt = (Ut = l).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (Ut.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Mt, Kt;
(Kt = (Mt = l).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Mt.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Ht, zt;
(zt = (Ht = l).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Ht.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
s();
s();
s();
s();
s();
s();
s();
export {
  br as setupDevToolsPlugin,
  br as setupDevtoolsPlugin
};
