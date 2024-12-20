(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [745],
  {
    11431: function (t, e, n) {
      var r;
      /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */ !(function (
        o
      ) {
        "use strict";
        var i,
          a = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          u = !0,
          c = "[DecimalError] ",
          l = c + "Invalid argument: ",
          s = c + "Exponent out of range: ",
          f = Math.floor,
          p = Math.pow,
          d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          h = f(1286742750677284.5),
          y = {};
        function v(t, e) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), u ? E(e, p) : e;
          if (
            ((l = t.d),
            (s = e.d),
            (a = t.e),
            (o = e.e),
            (l = l.slice()),
            (i = a - o))
          ) {
            for (
              i < 0
                ? ((r = l), (i = -i), (c = s.length))
                : ((r = s), (o = a), (c = l.length)),
                i > (c = (a = Math.ceil(p / 7)) > c ? a + 1 : c + 1) &&
                  ((i = c), (r.length = 1)),
                r.reverse();
              i--;

            )
              r.push(0);
            r.reverse();
          }
          for (
            (c = l.length) - (i = s.length) < 0 &&
              ((i = c), (r = s), (s = l), (l = r)),
              n = 0;
            i;

          )
            (n = ((l[--i] = l[i] + s[i] + n) / 1e7) | 0), (l[i] %= 1e7);
          for (n && (l.unshift(n), ++o), c = l.length; 0 == l[--c]; ) l.pop();
          return (e.d = l), (e.e = o), u ? E(e, p) : e;
        }
        function m(t, e, n) {
          if (t !== ~~t || t < e || t > n) throw Error(l + t);
        }
        function g(t) {
          var e,
            n,
            r,
            o = t.length - 1,
            i = "",
            a = t[0];
          if (o > 0) {
            for (i += a, e = 1; e < o; e++)
              (n = 7 - (r = t[e] + "").length) && (i += j(n)), (i += r);
            (n = 7 - (r = (a = t[e]) + "").length) && (i += j(n));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return i + a;
        }
        (y.absoluteValue = y.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (y.comparedTo = y.cmp =
            function (t) {
              var e, n, r, o;
              if (((t = new this.constructor(t)), this.s !== t.s))
                return this.s || -t.s;
              if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
              for (
                e = 0, n = (r = this.d.length) < (o = t.d.length) ? r : o;
                e < n;
                ++e
              )
                if (this.d[e] !== t.d[e])
                  return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
              return r === o ? 0 : (r > o) ^ (this.s < 0) ? 1 : -1;
            }),
          (y.decimalPlaces = y.dp =
            function () {
              var t = this.d.length - 1,
                e = (t - this.e) * 7;
              if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
              return e < 0 ? 0 : e;
            }),
          (y.dividedBy = y.div =
            function (t) {
              return b(this, new this.constructor(t));
            }),
          (y.dividedToIntegerBy = y.idiv =
            function (t) {
              var e = this.constructor;
              return E(b(this, new e(t), 0, 1), e.precision);
            }),
          (y.equals = y.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (y.exponent = function () {
            return O(this);
          }),
          (y.greaterThan = y.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (y.greaterThanOrEqualTo = y.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (y.isInteger = y.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (y.isNegative = y.isneg =
            function () {
              return this.s < 0;
            }),
          (y.isPositive = y.ispos =
            function () {
              return this.s > 0;
            }),
          (y.isZero = function () {
            return 0 === this.s;
          }),
          (y.lessThan = y.lt =
            function (t) {
              return 0 > this.cmp(t);
            }),
          (y.lessThanOrEqualTo = y.lte =
            function (t) {
              return 1 > this.cmp(t);
            }),
          (y.logarithm = y.log =
            function (t) {
              var e,
                n = this.constructor,
                r = n.precision,
                o = r + 5;
              if (void 0 === t) t = new n(10);
              else if ((t = new n(t)).s < 1 || t.eq(i)) throw Error(c + "NaN");
              if (this.s < 1) throw Error(c + (this.s ? "NaN" : "-Infinity"));
              return this.eq(i)
                ? new n(0)
                : ((u = !1),
                  (e = b(S(this, o), S(t, o), o)),
                  (u = !0),
                  E(e, r));
            }),
          (y.minus = y.sub =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? P(this, t) : v(this, ((t.s = -t.s), t))
              );
            }),
          (y.modulo = y.mod =
            function (t) {
              var e,
                n = this.constructor,
                r = n.precision;
              if (!(t = new n(t)).s) throw Error(c + "NaN");
              return this.s
                ? ((u = !1),
                  (e = b(this, t, 0, 1).times(t)),
                  (u = !0),
                  this.minus(e))
                : E(new n(this), r);
            }),
          (y.naturalExponential = y.exp =
            function () {
              return x(this);
            }),
          (y.naturalLogarithm = y.ln =
            function () {
              return S(this);
            }),
          (y.negated = y.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (y.plus = y.add =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? v(this, t) : P(this, ((t.s = -t.s), t))
              );
            }),
          (y.precision = y.sd =
            function (t) {
              var e, n, r;
              if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
                throw Error(l + t);
              if (
                ((e = O(this) + 1),
                (n = 7 * (r = this.d.length - 1) + 1),
                (r = this.d[r]))
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = this.d[0]; r >= 10; r /= 10) n++;
              }
              return t && e > n ? e : n;
            }),
          (y.squareRoot = y.sqrt =
            function () {
              var t,
                e,
                n,
                r,
                o,
                i,
                a,
                l = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new l(0);
                throw Error(c + "NaN");
              }
              for (
                t = O(this),
                  u = !1,
                  0 == (o = Math.sqrt(+this)) || o == 1 / 0
                    ? (((e = g(this.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = f((t + 1) / 2) - (t < 0 || t % 2)),
                      (r = new l(
                        (e =
                          o == 1 / 0
                            ? "5e" + t
                            : (e = o.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1
                              ) + t)
                      )))
                    : (r = new l(o.toString())),
                  o = a = (n = l.precision) + 3;
                ;

              )
                if (
                  ((r = (i = r).plus(b(this, i, a + 2)).times(0.5)),
                  g(i.d).slice(0, a) === (e = g(r.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), o == a && "4999" == e)) {
                    if ((E(i, n + 1, 0), i.times(i).eq(this))) {
                      r = i;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (u = !0), E(r, n);
            }),
          (y.times = y.mul =
            function (t) {
              var e,
                n,
                r,
                o,
                i,
                a,
                c,
                l,
                s,
                f = this.constructor,
                p = this.d,
                d = (t = new f(t)).d;
              if (!this.s || !t.s) return new f(0);
              for (
                t.s *= this.s,
                  n = this.e + t.e,
                  (l = p.length) < (s = d.length) &&
                    ((i = p), (p = d), (d = i), (a = l), (l = s), (s = a)),
                  i = [],
                  r = a = l + s;
                r--;

              )
                i.push(0);
              for (r = s; --r >= 0; ) {
                for (e = 0, o = l + r; o > r; )
                  (c = i[o] + d[r] * p[o - r - 1] + e),
                    (i[o--] = c % 1e7 | 0),
                    (e = (c / 1e7) | 0);
                i[o] = (i[o] + e) % 1e7 | 0;
              }
              for (; !i[--a]; ) i.pop();
              return (
                e ? ++n : i.shift(),
                (t.d = i),
                (t.e = n),
                u ? E(t, f.precision) : t
              );
            }),
          (y.toDecimalPlaces = y.todp =
            function (t, e) {
              var n = this,
                r = n.constructor;
              return ((n = new r(n)), void 0 === t)
                ? n
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = r.rounding) : m(e, 0, 8),
                  E(n, t + O(n) + 1, e));
            }),
          (y.toExponential = function (t, e) {
            var n,
              r = this,
              o = r.constructor;
            return (
              void 0 === t
                ? (n = A(r, !0))
                : (m(t, 0, 1e9),
                  void 0 === e ? (e = o.rounding) : m(e, 0, 8),
                  (n = A((r = E(new o(r), t + 1, e)), !0, t + 1))),
              n
            );
          }),
          (y.toFixed = function (t, e) {
            var n,
              r,
              o = this.constructor;
            return void 0 === t
              ? A(this)
              : (m(t, 0, 1e9),
                void 0 === e ? (e = o.rounding) : m(e, 0, 8),
                (n = A(
                  (r = E(new o(this), t + O(this) + 1, e)).abs(),
                  !1,
                  t + O(r) + 1
                )),
                this.isneg() && !this.isZero() ? "-" + n : n);
          }),
          (y.toInteger = y.toint =
            function () {
              var t = this.constructor;
              return E(new t(this), O(this) + 1, t.rounding);
            }),
          (y.toNumber = function () {
            return +this;
          }),
          (y.toPower = y.pow =
            function (t) {
              var e,
                n,
                r,
                o,
                a,
                l,
                s = this,
                p = s.constructor,
                d = +(t = new p(t));
              if (!t.s) return new p(i);
              if (!(s = new p(s)).s) {
                if (t.s < 1) throw Error(c + "Infinity");
                return s;
              }
              if (s.eq(i)) return s;
              if (((r = p.precision), t.eq(i))) return E(s, r);
              if (((l = (e = t.e) >= (n = t.d.length - 1)), (a = s.s), l)) {
                if ((n = d < 0 ? -d : d) <= 9007199254740991) {
                  for (
                    o = new p(i), e = Math.ceil(r / 7 + 4), u = !1;
                    n % 2 && k((o = o.times(s)).d, e), 0 !== (n = f(n / 2));

                  )
                    k((s = s.times(s)).d, e);
                  return (u = !0), t.s < 0 ? new p(i).div(o) : E(o, r);
                }
              } else if (a < 0) throw Error(c + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1),
                (s.s = 1),
                (u = !1),
                (o = t.times(S(s, r + 12))),
                (u = !0),
                ((o = x(o)).s = a),
                o
              );
            }),
          (y.toPrecision = function (t, e) {
            var n,
              r,
              o = this,
              i = o.constructor;
            return (
              void 0 === t
                ? ((n = O(o)), (r = A(o, n <= i.toExpNeg || n >= i.toExpPos)))
                : (m(t, 1, 1e9),
                  void 0 === e ? (e = i.rounding) : m(e, 0, 8),
                  (n = O((o = E(new i(o), t, e)))),
                  (r = A(o, t <= n || n <= i.toExpNeg, t))),
              r
            );
          }),
          (y.toSignificantDigits = y.tosd =
            function (t, e) {
              var n = this.constructor;
              return (
                void 0 === t
                  ? ((t = n.precision), (e = n.rounding))
                  : (m(t, 1, 1e9),
                    void 0 === e ? (e = n.rounding) : m(e, 0, 8)),
                E(new n(this), t, e)
              );
            }),
          (y.toString =
            y.valueOf =
            y.val =
            y.toJSON =
              function () {
                var t = O(this),
                  e = this.constructor;
                return A(this, t <= e.toExpNeg || t >= e.toExpPos);
              });
        var b = (function () {
          function t(t, e) {
            var n,
              r = 0,
              o = t.length;
            for (t = t.slice(); o--; )
              (n = t[o] * e + r), (t[o] = n % 1e7 | 0), (r = (n / 1e7) | 0);
            return r && t.unshift(r), t;
          }
          function e(t, e, n, r) {
            var o, i;
            if (n != r) i = n > r ? 1 : -1;
            else
              for (o = i = 0; o < n; o++)
                if (t[o] != e[o]) {
                  i = t[o] > e[o] ? 1 : -1;
                  break;
                }
            return i;
          }
          function n(t, e, n) {
            for (var r = 0; n--; )
              (t[n] -= r),
                (r = t[n] < e[n] ? 1 : 0),
                (t[n] = 1e7 * r + t[n] - e[n]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (r, o, i, a) {
            var u,
              l,
              s,
              f,
              p,
              d,
              h,
              y,
              v,
              m,
              g,
              b,
              x,
              w,
              j,
              S,
              _,
              P,
              A = r.constructor,
              k = r.s == o.s ? 1 : -1,
              M = r.d,
              T = o.d;
            if (!r.s) return new A(r);
            if (!o.s) throw Error(c + "Division by zero");
            for (
              s = 0,
                l = r.e - o.e,
                _ = T.length,
                j = M.length,
                y = (h = new A(k)).d = [];
              T[s] == (M[s] || 0);

            )
              ++s;
            if (
              (T[s] > (M[s] || 0) && --l,
              (b =
                null == i ? (i = A.precision) : a ? i + (O(r) - O(o)) + 1 : i) <
                0)
            )
              return new A(0);
            if (((b = (b / 7 + 2) | 0), (s = 0), 1 == _))
              for (f = 0, T = T[0], b++; (s < j || f) && b--; s++)
                (x = 1e7 * f + (M[s] || 0)),
                  (y[s] = (x / T) | 0),
                  (f = x % T | 0);
            else {
              for (
                (f = (1e7 / (T[0] + 1)) | 0) > 1 &&
                  ((T = t(T, f)),
                  (M = t(M, f)),
                  (_ = T.length),
                  (j = M.length)),
                  w = _,
                  m = (v = M.slice(0, _)).length;
                m < _;

              )
                v[m++] = 0;
              (P = T.slice()).unshift(0), (S = T[0]), T[1] >= 1e7 / 2 && ++S;
              do
                (f = 0),
                  (u = e(T, v, _, m)) < 0
                    ? ((g = v[0]),
                      _ != m && (g = 1e7 * g + (v[1] || 0)),
                      (f = (g / S) | 0) > 1
                        ? (f >= 1e7 && (f = 1e7 - 1),
                          (d = (p = t(T, f)).length),
                          (m = v.length),
                          1 == (u = e(p, v, d, m)) &&
                            (f--, n(p, _ < d ? P : T, d)))
                        : (0 == f && (u = f = 1), (p = T.slice())),
                      (d = p.length) < m && p.unshift(0),
                      n(v, p, m),
                      -1 == u &&
                        ((m = v.length),
                        (u = e(T, v, _, m)) < 1 &&
                          (f++, n(v, _ < m ? P : T, m))),
                      (m = v.length))
                    : 0 === u && (f++, (v = [0])),
                  (y[s++] = f),
                  u && v[0] ? (v[m++] = M[w] || 0) : ((v = [M[w]]), (m = 1));
              while ((w++ < j || void 0 !== v[0]) && b--);
            }
            return y[0] || y.shift(), (h.e = l), E(h, a ? i + O(h) + 1 : i);
          };
        })();
        function x(t, e) {
          var n,
            r,
            o,
            a,
            c,
            l = 0,
            f = 0,
            d = t.constructor,
            h = d.precision;
          if (O(t) > 16) throw Error(s + O(t));
          if (!t.s) return new d(i);
          for (
            null == e ? ((u = !1), (c = h)) : (c = e), a = new d(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (f += 5);
          for (
            c += ((Math.log(p(2, f)) / Math.LN10) * 2 + 5) | 0,
              n = r = o = new d(i),
              d.precision = c;
            ;

          ) {
            if (
              ((r = E(r.times(t), c)),
              (n = n.times(++l)),
              g((a = o.plus(b(r, n, c))).d).slice(0, c) === g(o.d).slice(0, c))
            ) {
              for (; f--; ) o = E(o.times(o), c);
              return (d.precision = h), null == e ? ((u = !0), E(o, h)) : o;
            }
            o = a;
          }
        }
        function O(t) {
          for (var e = 7 * t.e, n = t.d[0]; n >= 10; n /= 10) e++;
          return e;
        }
        function w(t, e, n) {
          if (e > t.LN10.sd())
            throw (
              ((u = !0),
              n && (t.precision = n),
              Error(c + "LN10 precision limit exceeded"))
            );
          return E(new t(t.LN10), e);
        }
        function j(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function S(t, e) {
          var n,
            r,
            o,
            a,
            l,
            s,
            f,
            p,
            d,
            h = 1,
            y = t,
            v = y.d,
            m = y.constructor,
            x = m.precision;
          if (y.s < 1) throw Error(c + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(i)) return new m(0);
          if ((null == e ? ((u = !1), (p = x)) : (p = e), y.eq(10)))
            return null == e && (u = !0), w(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (r = (n = g(v)).charAt(0)),
            !(15e14 > Math.abs((a = O(y)))))
          )
            return (
              (f = w(m, p + 2, x).times(a + "")),
              (y = S(new m(r + "." + n.slice(1)), p - 10).plus(f)),
              (m.precision = x),
              null == e ? ((u = !0), E(y, x)) : y
            );
          for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
            (r = (n = g((y = y.times(t)).d)).charAt(0)), h++;
          for (
            a = O(y),
              r > 1
                ? ((y = new m("0." + n)), a++)
                : (y = new m(r + "." + n.slice(1))),
              s = l = y = b(y.minus(i), y.plus(i), p),
              d = E(y.times(y), p),
              o = 3;
            ;

          ) {
            if (
              ((l = E(l.times(d), p)),
              g((f = s.plus(b(l, new m(o), p))).d).slice(0, p) ===
                g(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(w(m, p + 2, x).times(a + ""))),
                (s = b(s, new m(h), p)),
                (m.precision = x),
                null == e ? ((u = !0), E(s, x)) : s
              );
            (s = f), (o += 2);
          }
        }
        function _(t, e) {
          var n, r, o;
          for (
            (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (r = e.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +e.slice(r + 1)),
                  (e = e.substring(0, r)))
                : n < 0 && (n = e.length),
              r = 0;
            48 === e.charCodeAt(r);

          )
            ++r;
          for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
          if ((e = e.slice(r, o))) {
            if (
              ((o -= r),
              (n = n - r - 1),
              (t.e = f(n / 7)),
              (t.d = []),
              (r = (n + 1) % 7),
              n < 0 && (r += 7),
              r < o)
            ) {
              for (r && t.d.push(+e.slice(0, r)), o -= 7; r < o; )
                t.d.push(+e.slice(r, (r += 7)));
              r = 7 - (e = e.slice(r)).length;
            } else r -= o;
            for (; r--; ) e += "0";
            if ((t.d.push(+e), u && (t.e > h || t.e < -h))) throw Error(s + n);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function E(t, e, n) {
          var r,
            o,
            i,
            a,
            c,
            l,
            d,
            y,
            v = t.d;
          for (a = 1, i = v[0]; i >= 10; i /= 10) a++;
          if ((r = e - a) < 0) (r += 7), (o = e), (d = v[(y = 0)]);
          else {
            if ((y = Math.ceil((r + 1) / 7)) >= (i = v.length)) return t;
            for (a = 1, d = i = v[y]; i >= 10; i /= 10) a++;
            (r %= 7), (o = r - 7 + a);
          }
          if (
            (void 0 !== n &&
              ((c = (d / (i = p(10, a - o - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== v[y + 1] || d % i),
              (l =
                n < 4
                  ? (c || l) && (0 == n || n == (t.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (5 == c &&
                      (4 == n ||
                        l ||
                        (6 == n &&
                          (r > 0 ? (o > 0 ? d / p(10, a - o) : 0) : v[y - 1]) %
                            10 &
                            1) ||
                        n == (t.s < 0 ? 8 : 7))))),
            e < 1 || !v[0])
          )
            return (
              l
                ? ((i = O(t)),
                  (v.length = 1),
                  (e = e - i - 1),
                  (v[0] = p(10, (7 - (e % 7)) % 7)),
                  (t.e = f(-e / 7) || 0))
                : ((v.length = 1), (v[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == r
              ? ((v.length = y), (i = 1), y--)
              : ((v.length = y + 1),
                (i = p(10, 7 - r)),
                (v[y] = o > 0 ? ((d / p(10, a - o)) % p(10, o) | 0) * i : 0)),
            l)
          )
            for (;;) {
              if (0 == y) {
                1e7 == (v[0] += i) && ((v[0] = 1), ++t.e);
                break;
              }
              if (((v[y] += i), 1e7 != v[y])) break;
              (v[y--] = 0), (i = 1);
            }
          for (r = v.length; 0 === v[--r]; ) v.pop();
          if (u && (t.e > h || t.e < -h)) throw Error(s + O(t));
          return t;
        }
        function P(t, e) {
          var n,
            r,
            o,
            i,
            a,
            c,
            l,
            s,
            f,
            p,
            d = t.constructor,
            h = d.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new d(t)), u ? E(e, h) : e;
          if (
            ((l = t.d),
            (p = e.d),
            (r = e.e),
            (s = t.e),
            (l = l.slice()),
            (a = s - r))
          ) {
            for (
              (f = a < 0)
                ? ((n = l), (a = -a), (c = p.length))
                : ((n = p), (r = s), (c = l.length)),
                a > (o = Math.max(Math.ceil(h / 7), c) + 2) &&
                  ((a = o), (n.length = 1)),
                n.reverse(),
                o = a;
              o--;

            )
              n.push(0);
            n.reverse();
          } else {
            for (
              (f = (o = l.length) < (c = p.length)) && (c = o), o = 0;
              o < c;
              o++
            )
              if (l[o] != p[o]) {
                f = l[o] < p[o];
                break;
              }
            a = 0;
          }
          for (
            f && ((n = l), (l = p), (p = n), (e.s = -e.s)),
              c = l.length,
              o = p.length - c;
            o > 0;
            --o
          )
            l[c++] = 0;
          for (o = p.length; o > a; ) {
            if (l[--o] < p[o]) {
              for (i = o; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
              --l[i], (l[o] += 1e7);
            }
            l[o] -= p[o];
          }
          for (; 0 === l[--c]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --r;
          return l[0] ? ((e.d = l), (e.e = r), u ? E(e, h) : e) : new d(0);
        }
        function A(t, e, n) {
          var r,
            o = O(t),
            i = g(t.d),
            a = i.length;
          return (
            e
              ? (n && (r = n - a) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + j(r))
                  : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                (i = i + (o < 0 ? "e" : "e+") + o))
              : o < 0
              ? ((i = "0." + j(-o - 1) + i),
                n && (r = n - a) > 0 && (i += j(r)))
              : o >= a
              ? ((i += j(o + 1 - a)),
                n && (r = n - o - 1) > 0 && (i = i + "." + j(r)))
              : ((r = o + 1) < a && (i = i.slice(0, r) + "." + i.slice(r)),
                n &&
                  (r = n - a) > 0 &&
                  (o + 1 === a && (i += "."), (i += j(r)))),
            t.s < 0 ? "-" + i : i
          );
        }
        function k(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function M(t) {
          if (!t || "object" != typeof t) throw Error(c + "Object expected");
          var e,
            n,
            r,
            o = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (e = 0; e < o.length; e += 3)
            if (void 0 !== (r = t[(n = o[e])])) {
              if (f(r) === r && r >= o[e + 1] && r <= o[e + 2]) this[n] = r;
              else throw Error(l + n + ": " + r);
            }
          if (void 0 !== (r = t[(n = "LN10")])) {
            if (r == Math.LN10) this[n] = new this(r);
            else throw Error(l + n + ": " + r);
          }
          return this;
        }
        ((a = (function t(e) {
          var n, r, o;
          function i(t) {
            if (!(this instanceof i)) return new i(t);
            if (((this.constructor = i), t instanceof i)) {
              (this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t);
              return;
            }
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(l + t);
              if (t > 0) this.s = 1;
              else if (t < 0) (t = -t), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (t === ~~t && t < 1e7) {
                (this.e = 0), (this.d = [t]);
                return;
              }
              return _(this, t.toString());
            }
            if ("string" != typeof t) throw Error(l + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              d.test(t))
            )
              _(this, t);
            else throw Error(l + t);
          }
          if (
            ((i.prototype = y),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = t),
            (i.config = i.set = M),
            void 0 === e && (e = {}),
            e)
          )
            for (
              n = 0,
                o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              n < o.length;

            )
              e.hasOwnProperty((r = o[n++])) || (e[r] = this[r]);
          return i.config(e), i;
        })(a)).default = a.Decimal =
          a),
          (i = new a(1)),
          void 0 !==
            (r = function () {
              return a;
            }.call(e, n, e, t)) && (t.exports = r);
      })(0);
    },
    37836: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function i(t, e, r, i, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var u = new o(r, i || t, a),
          c = n ? n + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], u])
              : t._events[c].push(u)
            : ((t._events[c] = u), t._eventsCount++),
          t
        );
      }
      function a(t, e) {
        0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function u() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (u.prototype.eventNames = function () {
          var t,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (t = this._events))
            e.call(t, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (u.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (u.prototype.emit = function (t, e, r, o, i, a) {
          var u = n ? n + t : t;
          if (!this._events[u]) return !1;
          var c,
            l,
            s = this._events[u],
            f = arguments.length;
          if (s.fn) {
            switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
              case 1:
                return s.fn.call(s.context), !0;
              case 2:
                return s.fn.call(s.context, e), !0;
              case 3:
                return s.fn.call(s.context, e, r), !0;
              case 4:
                return s.fn.call(s.context, e, r, o), !0;
              case 5:
                return s.fn.call(s.context, e, r, o, i), !0;
              case 6:
                return s.fn.call(s.context, e, r, o, i, a), !0;
            }
            for (l = 1, c = Array(f - 1); l < f; l++) c[l - 1] = arguments[l];
            s.fn.apply(s.context, c);
          } else {
            var p,
              d = s.length;
            for (l = 0; l < d; l++)
              switch (
                (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
              ) {
                case 1:
                  s[l].fn.call(s[l].context);
                  break;
                case 2:
                  s[l].fn.call(s[l].context, e);
                  break;
                case 3:
                  s[l].fn.call(s[l].context, e, r);
                  break;
                case 4:
                  s[l].fn.call(s[l].context, e, r, o);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = Array(f - 1); p < f; p++)
                      c[p - 1] = arguments[p];
                  s[l].fn.apply(s[l].context, c);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, n) {
          return i(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return i(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, r, o) {
          var i = n ? n + t : t;
          if (!this._events[i]) return this;
          if (!e) return a(this, i), this;
          var u = this._events[i];
          if (u.fn)
            u.fn !== e ||
              (o && !u.once) ||
              (r && u.context !== r) ||
              a(this, i);
          else {
            for (var c = 0, l = [], s = u.length; c < s; c++)
              (u[c].fn !== e ||
                (o && !u[c].once) ||
                (r && u[c].context !== r)) &&
                l.push(u[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && a(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = n),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    74417: function (t, e, n) {
      var r = n(19044)(n(2381), "DataView");
      t.exports = r;
    },
    70266: function (t, e, n) {
      var r = n(89829),
        o = n(60734),
        i = n(35283),
        a = n(97283),
        u = n(54778);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    57115: function (t, e, n) {
      var r = n(89172),
        o = n(13314),
        i = n(73917),
        a = n(49367),
        u = n(97126);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    77970: function (t, e, n) {
      var r = n(19044)(n(2381), "Map");
      t.exports = r;
    },
    8705: function (t, e, n) {
      var r = n(59752),
        o = n(20170),
        i = n(41069),
        a = n(28690),
        u = n(27323);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    57780: function (t, e, n) {
      var r = n(19044)(n(2381), "Promise");
      t.exports = r;
    },
    71936: function (t, e, n) {
      var r = n(19044)(n(2381), "Set");
      t.exports = r;
    },
    89544: function (t, e, n) {
      var r = n(8705),
        o = n(75912),
        i = n(74765);
      function a(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
      }
      (a.prototype.add = a.prototype.push = o),
        (a.prototype.has = i),
        (t.exports = a);
    },
    45989: function (t, e, n) {
      var r = n(57115),
        o = n(24683),
        i = n(34813),
        a = n(35115),
        u = n(28199),
        c = n(58644);
      function l(t) {
        var e = (this.__data__ = new r(t));
        this.size = e.size;
      }
      (l.prototype.clear = o),
        (l.prototype.delete = i),
        (l.prototype.get = a),
        (l.prototype.has = u),
        (l.prototype.set = c),
        (t.exports = l);
    },
    13414: function (t, e, n) {
      var r = n(2381).Symbol;
      t.exports = r;
    },
    88960: function (t, e, n) {
      var r = n(2381).Uint8Array;
      t.exports = r;
    },
    93485: function (t, e, n) {
      var r = n(19044)(n(2381), "WeakMap");
      t.exports = r;
    },
    98266: function (t) {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    90516: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      };
    },
    19206: function (t) {
      t.exports = function (t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
          ++n < r;

        ) {
          var a = t[n];
          e(a, n, t) && (i[o++] = a);
        }
        return i;
      };
    },
    43276: function (t, e, n) {
      var r = n(48911);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1;
      };
    },
    10079: function (t) {
      t.exports = function (t, e, n) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
          if (n(e, t[r])) return !0;
        return !1;
      };
    },
    16347: function (t, e, n) {
      var r = n(61747),
        o = n(6727),
        i = n(60443),
        a = n(46551),
        u = n(41056),
        c = n(78470),
        l = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var n = i(t),
          s = !n && o(t),
          f = !n && !s && a(t),
          p = !n && !s && !f && c(t),
          d = n || s || f || p,
          h = d ? r(t.length, String) : [],
          y = h.length;
        for (var v in t)
          (e || l.call(t, v)) &&
            !(
              d &&
              ("length" == v ||
                (f && ("offset" == v || "parent" == v)) ||
                (p &&
                  ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                u(v, y))
            ) &&
            h.push(v);
        return h;
      };
    },
    68165: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; )
          o[n] = e(t[n], n, t);
        return o;
      };
    },
    80506: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
        return t;
      };
    },
    17232: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      };
    },
    38211: function (t) {
      t.exports = function (t) {
        return t.split("");
      };
    },
    22162: function (t, e, n) {
      var r = n(27087);
      t.exports = function (t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
        return -1;
      };
    },
    85330: function (t, e, n) {
      var r = n(98187);
      t.exports = function (t, e, n) {
        "__proto__" == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    30419: function (t, e, n) {
      var r = n(97385),
        o = n(23045)(r);
      t.exports = o;
    },
    20334: function (t, e, n) {
      var r = n(30419);
      t.exports = function (t, e) {
        var n = !0;
        return (
          r(t, function (t, r, o) {
            return (n = !!e(t, r, o));
          }),
          n
        );
      };
    },
    77613: function (t, e, n) {
      var r = n(41108);
      t.exports = function (t, e, n) {
        for (var o = -1, i = t.length; ++o < i; ) {
          var a = t[o],
            u = e(a);
          if (null != u && (void 0 === c ? u == u && !r(u) : n(u, c)))
            var c = u,
              l = a;
        }
        return l;
      };
    },
    21933: function (t) {
      t.exports = function (t, e, n, r) {
        for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    55648: function (t, e, n) {
      var r = n(80506),
        o = n(60883);
      t.exports = function t(e, n, i, a, u) {
        var c = -1,
          l = e.length;
        for (i || (i = o), u || (u = []); ++c < l; ) {
          var s = e[c];
          n > 0 && i(s)
            ? n > 1
              ? t(s, n - 1, i, a, u)
              : r(u, s)
            : a || (u[u.length] = s);
        }
        return u;
      };
    },
    60404: function (t, e, n) {
      var r = n(72994)();
      t.exports = r;
    },
    97385: function (t, e, n) {
      var r = n(60404),
        o = n(63815);
      t.exports = function (t, e) {
        return t && r(t, e, o);
      };
    },
    29013: function (t, e, n) {
      var r = n(57442),
        o = n(83863);
      t.exports = function (t, e) {
        e = r(e, t);
        for (var n = 0, i = e.length; null != t && n < i; ) t = t[o(e[n++])];
        return n && n == i ? t : void 0;
      };
    },
    83066: function (t, e, n) {
      var r = n(80506),
        o = n(60443);
      t.exports = function (t, e, n) {
        var i = e(t);
        return o(t) ? i : r(i, n(t));
      };
    },
    12731: function (t, e, n) {
      var r = n(13414),
        o = n(37363),
        i = n(68391),
        a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(t)
          ? o(t)
          : i(t);
      };
    },
    23985: function (t) {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    80444: function (t) {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    48911: function (t, e, n) {
      var r = n(21933),
        o = n(74680),
        i = n(13708);
      t.exports = function (t, e, n) {
        return e == e ? i(t, e, n) : r(t, o, n);
      };
    },
    35194: function (t, e, n) {
      var r = n(12731),
        o = n(50561);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == r(t);
      };
    },
    43277: function (t, e, n) {
      var r = n(36529),
        o = n(50561);
      t.exports = function t(e, n, i, a, u) {
        return (
          e === n ||
          (null != e && null != n && (o(e) || o(n))
            ? r(e, n, i, a, t, u)
            : e != e && n != n)
        );
      };
    },
    36529: function (t, e, n) {
      var r = n(45989),
        o = n(48648),
        i = n(88264),
        a = n(44024),
        u = n(14995),
        c = n(60443),
        l = n(46551),
        s = n(78470),
        f = "[object Arguments]",
        p = "[object Array]",
        d = "[object Object]",
        h = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, y, v, m) {
        var g = c(t),
          b = c(e),
          x = g ? p : u(t),
          O = b ? p : u(e);
        (x = x == f ? d : x), (O = O == f ? d : O);
        var w = x == d,
          j = O == d,
          S = x == O;
        if (S && l(t)) {
          if (!l(e)) return !1;
          (g = !0), (w = !1);
        }
        if (S && !w)
          return (
            m || (m = new r()),
            g || s(t) ? o(t, e, n, y, v, m) : i(t, e, x, n, y, v, m)
          );
        if (!(1 & n)) {
          var _ = w && h.call(t, "__wrapped__"),
            E = j && h.call(e, "__wrapped__");
          if (_ || E) {
            var P = _ ? t.value() : t,
              A = E ? e.value() : e;
            return m || (m = new r()), v(P, A, n, y, m);
          }
        }
        return !!S && (m || (m = new r()), a(t, e, n, y, v, m));
      };
    },
    29912: function (t, e, n) {
      var r = n(45989),
        o = n(43277);
      t.exports = function (t, e, n, i) {
        var a = n.length,
          u = a,
          c = !i;
        if (null == t) return !u;
        for (t = Object(t); a--; ) {
          var l = n[a];
          if (c && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
        }
        for (; ++a < u; ) {
          var s = (l = n[a])[0],
            f = t[s],
            p = l[1];
          if (c && l[2]) {
            if (void 0 === f && !(s in t)) return !1;
          } else {
            var d = new r();
            if (i) var h = i(f, p, s, t, e, d);
            if (!(void 0 === h ? o(p, f, 3, i, d) : h)) return !1;
          }
        }
        return !0;
      };
    },
    74680: function (t) {
      t.exports = function (t) {
        return t != t;
      };
    },
    12072: function (t, e, n) {
      var r = n(14380),
        o = n(56711),
        i = n(63117),
        a = n(70559),
        u = /^\[object .+?Constructor\]$/,
        c = Object.prototype,
        l = Function.prototype.toString,
        s = c.hasOwnProperty,
        f = RegExp(
          "^" +
            l
              .call(s)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!i(t) || o(t)) && (r(t) ? f : u).test(a(t));
      };
    },
    13272: function (t, e, n) {
      var r = n(12731),
        o = n(44664),
        i = n(50561),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return i(t) && o(t.length) && !!a[r(t)];
        });
    },
    37942: function (t, e, n) {
      var r = n(41736),
        o = n(35937),
        i = n(15502),
        a = n(60443),
        u = n(82794);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? i
          : "object" == typeof t
          ? a(t)
            ? o(t[0], t[1])
            : r(t)
          : u(t);
      };
    },
    84238: function (t, e, n) {
      var r = n(30761),
        o = n(93022),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return o(t);
        var e = [];
        for (var n in Object(t))
          i.call(t, n) && "constructor" != n && e.push(n);
        return e;
      };
    },
    49182: function (t) {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    28519: function (t, e, n) {
      var r = n(30419),
        o = n(17806);
      t.exports = function (t, e) {
        var n = -1,
          i = o(t) ? Array(t.length) : [];
        return (
          r(t, function (t, r, o) {
            i[++n] = e(t, r, o);
          }),
          i
        );
      };
    },
    41736: function (t, e, n) {
      var r = n(29912),
        o = n(36678),
        i = n(91378);
      t.exports = function (t) {
        var e = o(t);
        return 1 == e.length && e[0][2]
          ? i(e[0][0], e[0][1])
          : function (n) {
              return n === t || r(n, t, e);
            };
      };
    },
    35937: function (t, e, n) {
      var r = n(43277),
        o = n(97019),
        i = n(59628),
        a = n(59757),
        u = n(64309),
        c = n(91378),
        l = n(83863);
      t.exports = function (t, e) {
        return a(t) && u(e)
          ? c(l(t), e)
          : function (n) {
              var a = o(n, t);
              return void 0 === a && a === e ? i(n, t) : r(e, a, 3);
            };
      };
    },
    66738: function (t, e, n) {
      var r = n(68165),
        o = n(29013),
        i = n(37942),
        a = n(28519),
        u = n(642),
        c = n(66127),
        l = n(8869),
        s = n(15502),
        f = n(60443);
      t.exports = function (t, e, n) {
        e = e.length
          ? r(e, function (t) {
              return f(t)
                ? function (e) {
                    return o(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        return (
          (e = r(e, c(i))),
          u(
            a(t, function (t, n, o) {
              return {
                criteria: r(e, function (e) {
                  return e(t);
                }),
                index: ++p,
                value: t,
              };
            }),
            function (t, e) {
              return l(t, e, n);
            }
          )
        );
      };
    },
    31358: function (t) {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    65903: function (t, e, n) {
      var r = n(29013);
      t.exports = function (t) {
        return function (e) {
          return r(e, t);
        };
      };
    },
    44901: function (t) {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function (t, r, o, i) {
        for (var a = -1, u = n(e((r - t) / (o || 1)), 0), c = Array(u); u--; )
          (c[i ? u : ++a] = t), (t += o);
        return c;
      };
    },
    48674: function (t, e, n) {
      var r = n(15502),
        o = n(95694),
        i = n(45845);
      t.exports = function (t, e) {
        return i(o(t, e, r), t + "");
      };
    },
    95922: function (t, e, n) {
      var r = n(24008),
        o = n(98187),
        i = n(15502),
        a = o
          ? function (t, e) {
              return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0,
              });
            }
          : i;
      t.exports = a;
    },
    15076: function (t) {
      t.exports = function (t, e, n) {
        var r = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = t[r + e];
        return i;
      };
    },
    73802: function (t, e, n) {
      var r = n(30419);
      t.exports = function (t, e) {
        var n;
        return (
          r(t, function (t, r, o) {
            return !(n = e(t, r, o));
          }),
          !!n
        );
      };
    },
    642: function (t) {
      t.exports = function (t, e) {
        var n = t.length;
        for (t.sort(e); n--; ) t[n] = t[n].value;
        return t;
      };
    },
    61747: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      };
    },
    13963: function (t, e, n) {
      var r = n(13414),
        o = n(68165),
        i = n(60443),
        a = n(41108),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        l = c ? c.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (a(e)) return l ? l.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n;
      };
    },
    19334: function (t, e, n) {
      var r = n(25788),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t;
      };
    },
    66127: function (t) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    32874: function (t, e, n) {
      var r = n(89544),
        o = n(43276),
        i = n(10079),
        a = n(74701),
        u = n(66272),
        c = n(94778);
      t.exports = function (t, e, n) {
        var l = -1,
          s = o,
          f = t.length,
          p = !0,
          d = [],
          h = d;
        if (n) (p = !1), (s = i);
        else if (f >= 200) {
          var y = e ? null : u(t);
          if (y) return c(y);
          (p = !1), (s = a), (h = new r());
        } else h = e ? [] : d;
        t: for (; ++l < f; ) {
          var v = t[l],
            m = e ? e(v) : v;
          if (((v = n || 0 !== v ? v : 0), p && m == m)) {
            for (var g = h.length; g--; ) if (h[g] === m) continue t;
            e && h.push(m), d.push(v);
          } else s(h, m, n) || (h !== d && h.push(m), d.push(v));
        }
        return d;
      };
    },
    74701: function (t) {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    57442: function (t, e, n) {
      var r = n(60443),
        o = n(59757),
        i = n(57048),
        a = n(61250);
      t.exports = function (t, e) {
        return r(t) ? t : o(t, e) ? [t] : i(a(t));
      };
    },
    9814: function (t, e, n) {
      var r = n(15076);
      t.exports = function (t, e, n) {
        var o = t.length;
        return (n = void 0 === n ? o : n), !e && n >= o ? t : r(t, e, n);
      };
    },
    43425: function (t, e, n) {
      var r = n(41108);
      t.exports = function (t, e) {
        if (t !== e) {
          var n = void 0 !== t,
            o = null === t,
            i = t == t,
            a = r(t),
            u = void 0 !== e,
            c = null === e,
            l = e == e,
            s = r(e);
          if (
            (!c && !s && !a && t > e) ||
            (a && u && l && !c && !s) ||
            (o && u && l) ||
            (!n && l) ||
            !i
          )
            return 1;
          if (
            (!o && !a && !s && t < e) ||
            (s && n && i && !o && !a) ||
            (c && n && i) ||
            (!u && i) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    8869: function (t, e, n) {
      var r = n(43425);
      t.exports = function (t, e, n) {
        for (
          var o = -1,
            i = t.criteria,
            a = e.criteria,
            u = i.length,
            c = n.length;
          ++o < u;

        ) {
          var l = r(i[o], a[o]);
          if (l) {
            if (o >= c) return l;
            return l * ("desc" == n[o] ? -1 : 1);
          }
        }
        return t.index - e.index;
      };
    },
    45704: function (t, e, n) {
      var r = n(2381)["__core-js_shared__"];
      t.exports = r;
    },
    23045: function (t, e, n) {
      var r = n(17806);
      t.exports = function (t, e) {
        return function (n, o) {
          if (null == n) return n;
          if (!r(n)) return t(n, o);
          for (
            var i = n.length, a = e ? i : -1, u = Object(n);
            (e ? a-- : ++a < i) && !1 !== o(u[a], a, u);

          );
          return n;
        };
      };
    },
    72994: function (t) {
      t.exports = function (t) {
        return function (e, n, r) {
          for (var o = -1, i = Object(e), a = r(e), u = a.length; u--; ) {
            var c = a[t ? u : ++o];
            if (!1 === n(i[c], c, i)) break;
          }
          return e;
        };
      };
    },
    58191: function (t, e, n) {
      var r = n(9814),
        o = n(51865),
        i = n(75631),
        a = n(61250);
      t.exports = function (t) {
        return function (e) {
          var n = o((e = a(e))) ? i(e) : void 0,
            u = n ? n[0] : e.charAt(0),
            c = n ? r(n, 1).join("") : e.slice(1);
          return u[t]() + c;
        };
      };
    },
    43310: function (t, e, n) {
      var r = n(37942),
        o = n(17806),
        i = n(63815);
      t.exports = function (t) {
        return function (e, n, a) {
          var u = Object(e);
          if (!o(e)) {
            var c = r(n, 3);
            (e = i(e)),
              (n = function (t) {
                return c(u[t], t, u);
              });
          }
          var l = t(e, n, a);
          return l > -1 ? u[c ? e[l] : l] : void 0;
        };
      };
    },
    39105: function (t, e, n) {
      var r = n(44901),
        o = n(60679),
        i = n(42126);
      t.exports = function (t) {
        return function (e, n, a) {
          return (
            a && "number" != typeof a && o(e, n, a) && (n = a = void 0),
            (e = i(e)),
            void 0 === n ? ((n = e), (e = 0)) : (n = i(n)),
            (a = void 0 === a ? (e < n ? 1 : -1) : i(a)),
            r(e, n, a, t)
          );
        };
      };
    },
    66272: function (t, e, n) {
      var r = n(71936),
        o = n(47710),
        i = n(94778),
        a =
          r && 1 / i(new r([, -0]))[1] == 1 / 0
            ? function (t) {
                return new r(t);
              }
            : o;
      t.exports = a;
    },
    98187: function (t, e, n) {
      var r = n(19044),
        o = (function () {
          try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = o;
    },
    48648: function (t, e, n) {
      var r = n(89544),
        o = n(17232),
        i = n(74701);
      t.exports = function (t, e, n, a, u, c) {
        var l = 1 & n,
          s = t.length,
          f = e.length;
        if (s != f && !(l && f > s)) return !1;
        var p = c.get(t),
          d = c.get(e);
        if (p && d) return p == e && d == t;
        var h = -1,
          y = !0,
          v = 2 & n ? new r() : void 0;
        for (c.set(t, e), c.set(e, t); ++h < s; ) {
          var m = t[h],
            g = e[h];
          if (a) var b = l ? a(g, m, h, e, t, c) : a(m, g, h, t, e, c);
          if (void 0 !== b) {
            if (b) continue;
            y = !1;
            break;
          }
          if (v) {
            if (
              !o(e, function (t, e) {
                if (!i(v, e) && (m === t || u(m, t, n, a, c))) return v.push(e);
              })
            ) {
              y = !1;
              break;
            }
          } else if (!(m === g || u(m, g, n, a, c))) {
            y = !1;
            break;
          }
        }
        return c.delete(t), c.delete(e), y;
      };
    },
    88264: function (t, e, n) {
      var r = n(13414),
        o = n(88960),
        i = n(27087),
        a = n(48648),
        u = n(14774),
        c = n(94778),
        l = r ? r.prototype : void 0,
        s = l ? l.valueOf : void 0;
      t.exports = function (t, e, n, r, l, f, p) {
        switch (n) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              break;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            if (t.byteLength != e.byteLength || !f(new o(t), new o(e))) break;
            return !0;
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+t, +e);
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var d = u;
          case "[object Set]":
            var h = 1 & r;
            if ((d || (d = c), t.size != e.size && !h)) break;
            var y = p.get(t);
            if (y) return y == e;
            (r |= 2), p.set(t, e);
            var v = a(d(t), d(e), r, l, f, p);
            return p.delete(t), v;
          case "[object Symbol]":
            if (s) return s.call(t) == s.call(e);
        }
        return !1;
      };
    },
    44024: function (t, e, n) {
      var r = n(32807),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, i, a, u) {
        var c = 1 & n,
          l = r(t),
          s = l.length;
        if (s != r(e).length && !c) return !1;
        for (var f = s; f--; ) {
          var p = l[f];
          if (!(c ? p in e : o.call(e, p))) return !1;
        }
        var d = u.get(t),
          h = u.get(e);
        if (d && h) return d == e && h == t;
        var y = !0;
        u.set(t, e), u.set(e, t);
        for (var v = c; ++f < s; ) {
          var m = t[(p = l[f])],
            g = e[p];
          if (i) var b = c ? i(g, m, p, e, t, u) : i(m, g, p, t, e, u);
          if (!(void 0 === b ? m === g || a(m, g, n, i, u) : b)) {
            y = !1;
            break;
          }
          v || (v = "constructor" == p);
        }
        if (y && !v) {
          var x = t.constructor,
            O = e.constructor;
          x != O &&
            "constructor" in t &&
            "constructor" in e &&
            !(
              "function" == typeof x &&
              x instanceof x &&
              "function" == typeof O &&
              O instanceof O
            ) &&
            (y = !1);
        }
        return u.delete(t), u.delete(e), y;
      };
    },
    93330: function (t, e, n) {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = r;
    },
    32807: function (t, e, n) {
      var r = n(83066),
        o = n(75720),
        i = n(63815);
      t.exports = function (t) {
        return r(t, i, o);
      };
    },
    58035: function (t, e, n) {
      var r = n(36919);
      t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
      };
    },
    36678: function (t, e, n) {
      var r = n(64309),
        o = n(63815);
      t.exports = function (t) {
        for (var e = o(t), n = e.length; n--; ) {
          var i = e[n],
            a = t[i];
          e[n] = [i, a, r(a)];
        }
        return e;
      };
    },
    19044: function (t, e, n) {
      var r = n(12072),
        o = n(93039);
      t.exports = function (t, e) {
        var n = o(t, e);
        return r(n) ? n : void 0;
      };
    },
    98118: function (t, e, n) {
      var r = n(23794)(Object.getPrototypeOf, Object);
      t.exports = r;
    },
    37363: function (t, e, n) {
      var r = n(13414),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        u = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = i.call(t, u),
          n = t[u];
        try {
          t[u] = void 0;
          var r = !0;
        } catch (t) {}
        var o = a.call(t);
        return r && (e ? (t[u] = n) : delete t[u]), o;
      };
    },
    75720: function (t, e, n) {
      var r = n(19206),
        o = n(61810),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a
          ? function (t) {
              return null == t
                ? []
                : r(a((t = Object(t))), function (e) {
                    return i.call(t, e);
                  });
            }
          : o;
      t.exports = u;
    },
    14995: function (t, e, n) {
      var r = n(74417),
        o = n(77970),
        i = n(57780),
        a = n(71936),
        u = n(93485),
        c = n(12731),
        l = n(70559),
        s = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        d = "[object WeakMap]",
        h = "[object DataView]",
        y = l(r),
        v = l(o),
        m = l(i),
        g = l(a),
        b = l(u),
        x = c;
      ((r && x(new r(new ArrayBuffer(1))) != h) ||
        (o && x(new o()) != s) ||
        (i && x(i.resolve()) != f) ||
        (a && x(new a()) != p) ||
        (u && x(new u()) != d)) &&
        (x = function (t) {
          var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? l(n) : "";
          if (r)
            switch (r) {
              case y:
                return h;
              case v:
                return s;
              case m:
                return f;
              case g:
                return p;
              case b:
                return d;
            }
          return e;
        }),
        (t.exports = x);
    },
    93039: function (t) {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    48101: function (t, e, n) {
      var r = n(57442),
        o = n(6727),
        i = n(60443),
        a = n(41056),
        u = n(44664),
        c = n(83863);
      t.exports = function (t, e, n) {
        e = r(e, t);
        for (var l = -1, s = e.length, f = !1; ++l < s; ) {
          var p = c(e[l]);
          if (!(f = null != t && n(t, p))) break;
          t = t[p];
        }
        return f || ++l != s
          ? f
          : !!(s = null == t ? 0 : t.length) &&
              u(s) &&
              a(p, s) &&
              (i(t) || o(t));
      };
    },
    51865: function (t) {
      var e = RegExp(
        "[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    89829: function (t, e, n) {
      var r = n(91850);
      t.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    60734: function (t) {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    35283: function (t, e, n) {
      var r = n(91850),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (r) {
          var n = e[t];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return o.call(e, t) ? e[t] : void 0;
      };
    },
    97283: function (t, e, n) {
      var r = n(91850),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : o.call(e, t);
      };
    },
    54778: function (t, e, n) {
      var r = n(91850);
      t.exports = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    60883: function (t, e, n) {
      var r = n(13414),
        o = n(6727),
        i = n(60443),
        a = r ? r.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || o(t) || !!(a && t && t[a]);
      };
    },
    41056: function (t) {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, n) {
        var r = typeof t;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == r || ("symbol" != r && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < n
        );
      };
    },
    60679: function (t, e, n) {
      var r = n(27087),
        o = n(17806),
        i = n(41056),
        a = n(63117);
      t.exports = function (t, e, n) {
        if (!a(n)) return !1;
        var u = typeof e;
        return (
          ("number" == u
            ? !!(o(n) && i(e, n.length))
            : "string" == u && e in n) && r(n[e], t)
        );
      };
    },
    59757: function (t, e, n) {
      var r = n(60443),
        o = n(41108),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return (
          !!(
            "number" == n ||
            "symbol" == n ||
            "boolean" == n ||
            null == t ||
            o(t)
          ) ||
          a.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    36919: function (t) {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    56711: function (t, e, n) {
      var r,
        o = n(45704),
        i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    30761: function (t) {
      var e = Object.prototype;
      t.exports = function (t) {
        var n = t && t.constructor;
        return t === (("function" == typeof n && n.prototype) || e);
      };
    },
    64309: function (t, e, n) {
      var r = n(63117);
      t.exports = function (t) {
        return t == t && !r(t);
      };
    },
    89172: function (t) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    13314: function (t, e, n) {
      var r = n(22162),
        o = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, !0)
        );
      };
    },
    73917: function (t, e, n) {
      var r = n(22162);
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    49367: function (t, e, n) {
      var r = n(22162);
      t.exports = function (t) {
        return r(this.__data__, t) > -1;
      };
    },
    97126: function (t, e, n) {
      var r = n(22162);
      t.exports = function (t, e) {
        var n = this.__data__,
          o = r(n, t);
        return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this;
      };
    },
    59752: function (t, e, n) {
      var r = n(70266),
        o = n(57115),
        i = n(77970);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || o)(),
            string: new r(),
          });
      };
    },
    20170: function (t, e, n) {
      var r = n(58035);
      t.exports = function (t) {
        var e = r(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    41069: function (t, e, n) {
      var r = n(58035);
      t.exports = function (t) {
        return r(this, t).get(t);
      };
    },
    28690: function (t, e, n) {
      var r = n(58035);
      t.exports = function (t) {
        return r(this, t).has(t);
      };
    },
    27323: function (t, e, n) {
      var r = n(58035);
      t.exports = function (t, e) {
        var n = r(this, t),
          o = n.size;
        return n.set(t, e), (this.size += n.size == o ? 0 : 1), this;
      };
    },
    14774: function (t) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      };
    },
    91378: function (t) {
      t.exports = function (t, e) {
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      };
    },
    95325: function (t, e, n) {
      var r = n(89830);
      t.exports = function (t) {
        var e = r(t, function (t) {
            return 500 === n.size && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    91850: function (t, e, n) {
      var r = n(19044)(Object, "create");
      t.exports = r;
    },
    93022: function (t, e, n) {
      var r = n(23794)(Object.keys, Object);
      t.exports = r;
    },
    28079: function (t, e, n) {
      t = n.nmd(t);
      var r = n(93330),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o && r.process,
        u = (function () {
          try {
            var t = i && i.require && i.require("util").types;
            if (t) return t;
            return a && a.binding && a.binding("util");
          } catch (t) {}
        })();
      t.exports = u;
    },
    68391: function (t) {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    23794: function (t) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    95694: function (t, e, n) {
      var r = n(98266),
        o = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = o(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u);
              ++a < u;

            )
              c[a] = i[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = i[a];
            return (l[e] = n(c)), r(t, this, l);
          }
        );
      };
    },
    2381: function (t, e, n) {
      var r = n(93330),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      t.exports = i;
    },
    75912: function (t) {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    74765: function (t) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    94778: function (t) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = t;
          }),
          n
        );
      };
    },
    45845: function (t, e, n) {
      var r = n(95922),
        o = n(68530)(r);
      t.exports = o;
    },
    68530: function (t) {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          r = 0;
        return function () {
          var o = e(),
            i = 16 - (o - r);
          if (((r = o), i > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    24683: function (t, e, n) {
      var r = n(57115);
      t.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    34813: function (t) {
      t.exports = function (t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      };
    },
    35115: function (t) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    28199: function (t) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    58644: function (t, e, n) {
      var r = n(57115),
        o = n(77970),
        i = n(8705);
      t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
          var a = n.__data__;
          if (!o || a.length < 199)
            return a.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new i(a);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    },
    13708: function (t) {
      t.exports = function (t, e, n) {
        for (var r = n - 1, o = t.length; ++r < o; ) if (t[r] === e) return r;
        return -1;
      };
    },
    75631: function (t, e, n) {
      var r = n(38211),
        o = n(51865),
        i = n(11748);
      t.exports = function (t) {
        return o(t) ? i(t) : r(t);
      };
    },
    57048: function (t, e, n) {
      var r = n(95325),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = r(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(o, function (t, n, r, o) {
              e.push(r ? o.replace(i, "$1") : n || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    83863: function (t, e, n) {
      var r = n(41108),
        o = 1 / 0;
      t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -o ? "-0" : e;
      };
    },
    70559: function (t) {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    25788: function (t) {
      var e = /\s/;
      t.exports = function (t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)); );
        return n;
      };
    },
    11748: function (t) {
      var e = "\ud800-\udfff",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        r = "\ud83c[\udffb-\udfff]",
        o = "[^" + e + "]",
        i = "(?:\ud83c[\udde6-\uddff]){2}",
        a = "[\ud800-\udbff][\udc00-\udfff]",
        u = "(?:" + n + "|" + r + ")?",
        c = "[\\ufe0e\\ufe0f]?",
        l = "(?:\\u200d(?:" + [o, i, a].join("|") + ")" + c + u + ")*",
        s = RegExp(
          r +
            "(?=" +
            r +
            ")|(?:" +
            [o + n + "?", n, i, a, "[" + e + "]"].join("|") +
            ")" +
            (c + u + l),
          "g"
        );
      t.exports = function (t) {
        return t.match(s) || [];
      };
    },
    24008: function (t) {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    22170: function (t, e, n) {
      var r = n(63117),
        o = n(49423),
        i = n(49666),
        a = Math.max,
        u = Math.min;
      t.exports = function (t, e, n) {
        var c,
          l,
          s,
          f,
          p,
          d,
          h = 0,
          y = !1,
          v = !1,
          m = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function g(e) {
          var n = c,
            r = l;
          return (c = l = void 0), (h = e), (f = t.apply(r, n));
        }
        function b(t) {
          var n = t - d,
            r = t - h;
          return void 0 === d || n >= e || n < 0 || (v && r >= s);
        }
        function x() {
          var t,
            n,
            r,
            i = o();
          if (b(i)) return O(i);
          p = setTimeout(
            x,
            ((t = i - d), (n = i - h), (r = e - t), v ? u(r, s - n) : r)
          );
        }
        function O(t) {
          return ((p = void 0), m && c) ? g(t) : ((c = l = void 0), f);
        }
        function w() {
          var t,
            n = o(),
            r = b(n);
          if (((c = arguments), (l = this), (d = n), r)) {
            if (void 0 === p)
              return (h = t = d), (p = setTimeout(x, e)), y ? g(t) : f;
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), g(d);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = i(e) || 0),
          r(n) &&
            ((y = !!n.leading),
            (s = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : s),
            (m = "trailing" in n ? !!n.trailing : m)),
          (w.cancel = function () {
            void 0 !== p && clearTimeout(p), (h = 0), (c = d = l = p = void 0);
          }),
          (w.flush = function () {
            return void 0 === p ? f : O(o());
          }),
          w
        );
      };
    },
    27087: function (t) {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    55118: function (t, e, n) {
      var r = n(90516),
        o = n(20334),
        i = n(37942),
        a = n(60443),
        u = n(60679);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : o;
        return n && u(t, e, n) && (e = void 0), c(t, i(e, 3));
      };
    },
    80203: function (t, e, n) {
      var r = n(43310)(n(11030));
      t.exports = r;
    },
    11030: function (t, e, n) {
      var r = n(21933),
        o = n(37942),
        i = n(38979),
        a = Math.max;
      t.exports = function (t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : i(n);
        return c < 0 && (c = a(u + c, 0)), r(t, o(e, 3), c);
      };
    },
    73720: function (t, e, n) {
      var r = n(55648),
        o = n(7851);
      t.exports = function (t, e) {
        return r(o(t, e), 1);
      };
    },
    97019: function (t, e, n) {
      var r = n(29013);
      t.exports = function (t, e, n) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? n : o;
      };
    },
    59628: function (t, e, n) {
      var r = n(80444),
        o = n(48101);
      t.exports = function (t, e) {
        return null != t && o(t, e, r);
      };
    },
    15502: function (t) {
      t.exports = function (t) {
        return t;
      };
    },
    6727: function (t, e, n) {
      var r = n(35194),
        o = n(50561),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        c = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (t) {
              return o(t) && a.call(t, "callee") && !u.call(t, "callee");
            };
      t.exports = c;
    },
    60443: function (t) {
      var e = Array.isArray;
      t.exports = e;
    },
    17806: function (t, e, n) {
      var r = n(14380),
        o = n(44664);
      t.exports = function (t) {
        return null != t && o(t.length) && !r(t);
      };
    },
    64337: function (t, e, n) {
      var r = n(12731),
        o = n(50561);
      t.exports = function (t) {
        return !0 === t || !1 === t || (o(t) && "[object Boolean]" == r(t));
      };
    },
    46551: function (t, e, n) {
      t = n.nmd(t);
      var r = n(2381),
        o = n(35423),
        i = e && !e.nodeType && e,
        a = i && t && !t.nodeType && t,
        u = a && a.exports === i ? r.Buffer : void 0,
        c = u ? u.isBuffer : void 0;
      t.exports = c || o;
    },
    12916: function (t, e, n) {
      var r = n(43277);
      t.exports = function (t, e) {
        return r(t, e);
      };
    },
    14380: function (t, e, n) {
      var r = n(12731),
        o = n(63117);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var e = r(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    44664: function (t) {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    50299: function (t, e, n) {
      var r = n(60555);
      t.exports = function (t) {
        return r(t) && t != +t;
      };
    },
    49972: function (t) {
      t.exports = function (t) {
        return null == t;
      };
    },
    60555: function (t, e, n) {
      var r = n(12731),
        o = n(50561);
      t.exports = function (t) {
        return "number" == typeof t || (o(t) && "[object Number]" == r(t));
      };
    },
    63117: function (t) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    50561: function (t) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    32999: function (t, e, n) {
      var r = n(12731),
        o = n(98118),
        i = n(50561),
        a = Object.prototype,
        u = Function.prototype.toString,
        c = a.hasOwnProperty,
        l = u.call(Object);
      t.exports = function (t) {
        if (!i(t) || "[object Object]" != r(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var n = c.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && u.call(n) == l;
      };
    },
    71519: function (t, e, n) {
      var r = n(12731),
        o = n(60443),
        i = n(50561);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!o(t) && i(t) && "[object String]" == r(t))
        );
      };
    },
    41108: function (t, e, n) {
      var r = n(12731),
        o = n(50561);
      t.exports = function (t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
      };
    },
    78470: function (t, e, n) {
      var r = n(13272),
        o = n(66127),
        i = n(28079),
        a = i && i.isTypedArray,
        u = a ? o(a) : r;
      t.exports = u;
    },
    63815: function (t, e, n) {
      var r = n(16347),
        o = n(84238),
        i = n(17806);
      t.exports = function (t) {
        return i(t) ? r(t) : o(t);
      };
    },
    96579: function (t) {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    7851: function (t, e, n) {
      var r = n(68165),
        o = n(37942),
        i = n(28519),
        a = n(60443);
      t.exports = function (t, e) {
        return (a(t) ? r : i)(t, o(e, 3));
      };
    },
    47759: function (t, e, n) {
      var r = n(85330),
        o = n(97385),
        i = n(37942);
      t.exports = function (t, e) {
        var n = {};
        return (
          (e = i(e, 3)),
          o(t, function (t, o, i) {
            r(n, o, e(t, o, i));
          }),
          n
        );
      };
    },
    47766: function (t, e, n) {
      var r = n(77613),
        o = n(23985),
        i = n(15502);
      t.exports = function (t) {
        return t && t.length ? r(t, i, o) : void 0;
      };
    },
    13725: function (t, e, n) {
      var r = n(77613),
        o = n(23985),
        i = n(37942);
      t.exports = function (t, e) {
        return t && t.length ? r(t, i(e, 2), o) : void 0;
      };
    },
    89830: function (t, e, n) {
      var r = n(8705);
      function o(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            o = e ? e.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(o)) return i.get(o);
          var a = t.apply(this, r);
          return (n.cache = i.set(o, a) || i), a;
        };
        return (n.cache = new (o.Cache || r)()), n;
      }
      (o.Cache = r), (t.exports = o);
    },
    89770: function (t, e, n) {
      var r = n(77613),
        o = n(49182),
        i = n(15502);
      t.exports = function (t) {
        return t && t.length ? r(t, i, o) : void 0;
      };
    },
    15013: function (t, e, n) {
      var r = n(77613),
        o = n(37942),
        i = n(49182);
      t.exports = function (t, e) {
        return t && t.length ? r(t, o(e, 2), i) : void 0;
      };
    },
    47710: function (t) {
      t.exports = function () {};
    },
    49423: function (t, e, n) {
      var r = n(2381);
      t.exports = function () {
        return r.Date.now();
      };
    },
    82794: function (t, e, n) {
      var r = n(31358),
        o = n(65903),
        i = n(59757),
        a = n(83863);
      t.exports = function (t) {
        return i(t) ? r(a(t)) : o(t);
      };
    },
    37105: function (t, e, n) {
      var r = n(39105)();
      t.exports = r;
    },
    13632: function (t, e, n) {
      var r = n(17232),
        o = n(37942),
        i = n(73802),
        a = n(60443),
        u = n(60679);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : i;
        return n && u(t, e, n) && (e = void 0), c(t, o(e, 3));
      };
    },
    60229: function (t, e, n) {
      var r = n(55648),
        o = n(66738),
        i = n(48674),
        a = n(60679),
        u = i(function (t, e) {
          if (null == t) return [];
          var n = e.length;
          return (
            n > 1 && a(t, e[0], e[1])
              ? (e = [])
              : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            o(t, r(e, 1), [])
          );
        });
      t.exports = u;
    },
    61810: function (t) {
      t.exports = function () {
        return [];
      };
    },
    35423: function (t) {
      t.exports = function () {
        return !1;
      };
    },
    48527: function (t, e, n) {
      var r = n(22170),
        o = n(63117);
      t.exports = function (t, e, n) {
        var i = !0,
          a = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        return (
          o(n) &&
            ((i = "leading" in n ? !!n.leading : i),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(t, e, { leading: i, maxWait: e, trailing: a })
        );
      };
    },
    42126: function (t, e, n) {
      var r = n(49666),
        o = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = r(t)) === o || t === -o
            ? (t < 0 ? -1 : 1) * 17976931348623157e292
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    38979: function (t, e, n) {
      var r = n(42126);
      t.exports = function (t) {
        var e = r(t),
          n = e % 1;
        return e == e ? (n ? e - n : e) : 0;
      };
    },
    49666: function (t, e, n) {
      var r = n(19334),
        o = n(63117),
        i = n(41108),
        a = 0 / 0,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (i(t)) return a;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = c.test(t);
        return n || l.test(t) ? s(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t;
      };
    },
    61250: function (t, e, n) {
      var r = n(13963);
      t.exports = function (t) {
        return null == t ? "" : r(t);
      };
    },
    90374: function (t, e, n) {
      var r = n(37942),
        o = n(32874);
      t.exports = function (t, e) {
        return t && t.length ? o(t, r(e, 2)) : [];
      };
    },
    62637: function (t, e, n) {
      var r = n(58191)("toUpperCase");
      t.exports = r;
    },
    844: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(18157);
      let r = function (t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    25944: function (t, e, n) {
      "use strict";
      function r(t, e, n, r) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(18157),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    38173: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(99920),
        o = n(41452),
        i = n(57437),
        a = o._(n(2265)),
        u = r._(n(54887)),
        c = r._(n(28321)),
        l = n(80497),
        s = n(7103),
        f = n(93938);
      n(72301);
      let p = n(60291),
        d = r._(n(21241)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function y(t, e, n, r, o, i, a) {
        let u = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== u &&
          ((t["data-loaded-src"] = u),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && o(!0), null == n ? void 0 : n.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let r = !1,
                    o = !1;
                  n.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), e.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(t);
              }
            }));
      }
      function v(t) {
        return a.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let m = (0, a.forwardRef)((t, e) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: u,
          width: c,
          decoding: l,
          className: s,
          style: f,
          fetchPriority: p,
          placeholder: d,
          loading: h,
          unoptimized: m,
          fill: g,
          onLoadRef: b,
          onLoadingCompleteRef: x,
          setBlurComplete: O,
          setShowAltText: w,
          sizesInput: j,
          onLoad: S,
          onError: _,
          ...E
        } = t;
        return (0, i.jsx)("img", {
          ...E,
          ...v(p),
          loading: h,
          width: c,
          height: u,
          decoding: l,
          "data-nimg": g ? "fill" : "1",
          className: s,
          style: f,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, a.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (_ && (t.src = t.src), t.complete && y(t, d, b, x, O, m, j));
            },
            [n, d, b, x, O, _, m, j, e]
          ),
          onLoad: (t) => {
            y(t.currentTarget, d, b, x, O, m, j);
          },
          onError: (t) => {
            w(!0), "empty" !== d && O(!0), _ && _(t);
          },
        });
      });
      function g(t) {
        let { isAppRouter: e, imgAttributes: n } = t,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return e && u.default.preload
          ? (u.default.preload(n.src, r), null)
          : (0, i.jsx)(c.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let b = (0, a.forwardRef)((t, e) => {
        let n = (0, a.useContext)(p.RouterContext),
          r = (0, a.useContext)(f.ImageConfigContext),
          o = (0, a.useMemo)(() => {
            let t = h || r || s.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              n = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: n };
          }, [r]),
          { onLoad: u, onLoadingComplete: c } = t,
          y = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
          y.current = u;
        }, [u]);
        let v = (0, a.useRef)(c);
        (0, a.useEffect)(() => {
          v.current = c;
        }, [c]);
        let [b, x] = (0, a.useState)(!1),
          [O, w] = (0, a.useState)(!1),
          { props: j, meta: S } = (0, l.getImgProps)(t, {
            defaultLoader: d.default,
            imgConf: o,
            blurComplete: b,
            showAltText: O,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m, {
              ...j,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: y,
              onLoadingCompleteRef: v,
              setBlurComplete: x,
              setShowAltText: w,
              sizesInput: t.sizes,
              ref: e,
            }),
            S.priority
              ? (0, i.jsx)(g, { isAppRouter: !n, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    231: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let r = n(99920),
        o = n(57437),
        i = r._(n(2265)),
        a = n(98016),
        u = n(18029),
        c = n(41142),
        l = n(43461),
        s = n(844),
        f = n(60291),
        p = n(44467),
        d = n(53106),
        h = n(25944),
        y = n(4897),
        v = n(51507),
        m = new Set();
      function g(t, e, n, r, o, i) {
        if ("undefined" != typeof window && (i || (0, u.isLocalURL)(e))) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              e +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (m.has(o)) return;
            m.add(o);
          }
          (async () => (i ? t.prefetch(e, o) : t.prefetch(e, n, r)))().catch(
            (t) => {}
          );
        }
      }
      function b(t) {
        return "string" == typeof t ? t : (0, c.formatUrl)(t);
      }
      let x = i.default.forwardRef(function (t, e) {
        let n, r;
        let {
          href: c,
          as: m,
          children: x,
          prefetch: O = null,
          passHref: w,
          replace: j,
          shallow: S,
          scroll: _,
          locale: E,
          onClick: P,
          onMouseEnter: A,
          onTouchStart: k,
          legacyBehavior: M = !1,
          ...T
        } = t;
        (n = x),
          M &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, o.jsx)("a", { children: n }));
        let C = i.default.useContext(f.RouterContext),
          I = i.default.useContext(p.AppRouterContext),
          N = null != C ? C : I,
          D = !C,
          R = !1 !== O,
          L = null === O ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: B, as: U } = i.default.useMemo(() => {
            if (!C) {
              let t = b(c);
              return { href: t, as: m ? b(m) : t };
            }
            let [t, e] = (0, a.resolveHref)(C, c, !0);
            return { href: t, as: m ? (0, a.resolveHref)(C, m) : e || t };
          }, [C, c, m]),
          z = i.default.useRef(B),
          F = i.default.useRef(U);
        M && (r = i.default.Children.only(n));
        let $ = M ? r && "object" == typeof r && r.ref : e,
          [W, q, Z] = (0, d.useIntersection)({ rootMargin: "200px" }),
          V = i.default.useCallback(
            (t) => {
              (F.current !== U || z.current !== B) &&
                (Z(), (F.current = U), (z.current = B)),
                W(t),
                $ &&
                  ("function" == typeof $
                    ? $(t)
                    : "object" == typeof $ && ($.current = t));
            },
            [U, $, B, Z, W]
          );
        i.default.useEffect(() => {
          N && q && R && g(N, B, U, { locale: E }, { kind: L }, D);
        }, [U, B, q, E, R, null == C ? void 0 : C.locale, N, D, L]);
        let Y = {
          ref: V,
          onClick(t) {
            M || "function" != typeof P || P(t),
              M &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              N &&
                !t.defaultPrevented &&
                (function (t, e, n, r, o, a, c, l, s) {
                  let { nodeName: f } = t.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!s && !(0, u.isLocalURL)(n)))
                  )
                    return;
                  t.preventDefault();
                  let p = () => {
                    let t = null == c || c;
                    "beforePopState" in e
                      ? e[o ? "replace" : "push"](n, r, {
                          shallow: a,
                          locale: l,
                          scroll: t,
                        })
                      : e[o ? "replace" : "push"](r || n, { scroll: t });
                  };
                  s ? i.default.startTransition(p) : p();
                })(t, N, B, U, j, S, _, E, D);
          },
          onMouseEnter(t) {
            M || "function" != typeof A || A(t),
              M &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(t),
              N &&
                (R || !D) &&
                g(
                  N,
                  B,
                  U,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  D
                );
          },
          onTouchStart: function (t) {
            M || "function" != typeof k || k(t),
              M &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(t),
              N &&
                (R || !D) &&
                g(
                  N,
                  B,
                  U,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  D
                );
          },
        };
        if ((0, l.isAbsoluteUrl)(U)) Y.href = U;
        else if (!M || w || ("a" === r.type && !("href" in r.props))) {
          let t = void 0 !== E ? E : null == C ? void 0 : C.locale,
            e =
              (null == C ? void 0 : C.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                U,
                t,
                null == C ? void 0 : C.locales,
                null == C ? void 0 : C.domainLocales
              );
          Y.href =
            e ||
            (0, y.addBasePath)(
              (0, s.addLocale)(U, t, null == C ? void 0 : C.defaultLocale)
            );
        }
        return M
          ? i.default.cloneElement(r, Y)
          : (0, o.jsx)("a", { ...T, ...Y, children: n });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    49189: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    98016: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let r = n(18323),
        o = n(41142),
        i = n(45519),
        a = n(43461),
        u = n(18157),
        c = n(18029),
        l = n(59195),
        s = n(80020);
      function f(t, e, n) {
        let f;
        let p = "string" == typeof e ? e : (0, o.formatWithValidation)(e),
          d = p.match(/^[a-zA-Z]{1,}:\/\//),
          h = d ? p.slice(d[0].length) : p;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              p +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, a.normalizeRepeatedSlashes)(h);
          p = (d ? d[0] : "") + e;
        }
        if (!(0, c.isLocalURL)(p)) return n ? [p] : p;
        try {
          f = new URL(p.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          f = new URL("/", "http://n");
        }
        try {
          let t = new URL(p, f);
          t.pathname = (0, u.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, l.isDynamicRoute)(t.pathname) && t.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(t.searchParams),
              { result: a, params: u } = (0, s.interpolateAs)(
                t.pathname,
                t.pathname,
                n
              );
            a &&
              (e = (0, o.formatWithValidation)({
                pathname: a,
                hash: t.hash,
                query: (0, i.omit)(n, u),
              }));
          }
          let a =
            t.origin === f.origin ? t.href.slice(t.origin.length) : t.href;
          return n ? [a, e || a] : a;
        } catch (t) {
          return n ? [p] : p;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    53106: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = n(2265),
        o = n(49189),
        i = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      function c(t) {
        let { rootRef: e, rootMargin: n, disabled: c } = t,
          l = c || !i,
          [s, f] = (0, r.useState)(!1),
          p = (0, r.useRef)(null),
          d = (0, r.useCallback)((t) => {
            p.current = t;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (i) {
              if (l || s) return;
              let t = p.current;
              if (t && t.tagName)
                return (function (t, e, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: i,
                  } = (function (t) {
                    let e;
                    let n = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      r = u.find(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                    if (r && (e = a.get(r))) return e;
                    let o = new Map();
                    return (
                      (e = {
                        id: n,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = o.get(t.target),
                              n = t.isIntersecting || t.intersectionRatio > 0;
                            e && n && e(n);
                          });
                        }, t),
                        elements: o,
                      }),
                      u.push(n),
                      a.set(n, e),
                      e
                    );
                  })(n);
                  return (
                    i.set(t, e),
                    o.observe(t),
                    function () {
                      if ((i.delete(t), o.unobserve(t), 0 === i.size)) {
                        o.disconnect(), a.delete(r);
                        let t = u.findIndex(
                          (t) => t.root === r.root && t.margin === r.margin
                        );
                        t > -1 && u.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && f(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: n,
                });
            } else if (!s) {
              let t = (0, o.requestIdleCallback)(() => f(!0));
              return () => (0, o.cancelIdleCallback)(t);
            }
          }, [l, n, e, s, p.current]),
          [
            d,
            s,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    82901: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(99920)._(n(2265)).default.createContext({});
    },
    40687: function (t, e) {
      "use strict";
      function n(t) {
        let {
          ampFirst: e = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === t ? {} : t;
        return e || (n && r);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    81943: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function o(t) {
        return n.test(t) ? t.replace(r, "\\$&") : t;
      }
    },
    80497: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }),
        n(72301);
      let r = n(51564),
        o = n(7103);
      function i(t) {
        return void 0 !== t.default;
      }
      function a(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function u(t, e) {
        var n;
        let u,
          c,
          l,
          {
            src: s,
            sizes: f,
            unoptimized: p = !1,
            priority: d = !1,
            loading: h,
            className: y,
            quality: v,
            width: m,
            height: g,
            fill: b = !1,
            style: x,
            overrideSrc: O,
            onLoad: w,
            onLoadingComplete: j,
            placeholder: S = "empty",
            blurDataURL: _,
            fetchPriority: E,
            layout: P,
            objectFit: A,
            objectPosition: k,
            lazyBoundary: M,
            lazyRoot: T,
            ...C
          } = t,
          { imgConf: I, showAltText: N, blurComplete: D, defaultLoader: R } = e,
          L = I || o.imageConfigDefault;
        if ("allSizes" in L) u = L;
        else {
          let t = [...L.deviceSizes, ...L.imageSizes].sort((t, e) => t - e),
            e = L.deviceSizes.sort((t, e) => t - e);
          u = { ...L, allSizes: t, deviceSizes: e };
        }
        if (void 0 === R)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let B = C.loader || R;
        delete C.loader, delete C.srcSet;
        let U = "__next_img_default" in B;
        if (U) {
          if ("custom" === u.loader)
            throw Error(
              'Image with src "' +
                s +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = B;
          B = (e) => {
            let { config: n, ...r } = e;
            return t(r);
          };
        }
        if (P) {
          "fill" === P && (b = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          t && (x = { ...x, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[P];
          e && !f && (f = e);
        }
        let z = "",
          F = a(m),
          $ = a(g);
        if ("object" == typeof (n = s) && (i(n) || void 0 !== n.src)) {
          let t = i(s) ? s.default : s;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((c = t.blurWidth),
            (l = t.blurHeight),
            (_ = _ || t.blurDataURL),
            (z = t.src),
            !b)
          ) {
            if (F || $) {
              if (F && !$) {
                let e = F / t.width;
                $ = Math.round(t.height * e);
              } else if (!F && $) {
                let e = $ / t.height;
                F = Math.round(t.width * e);
              }
            } else (F = t.width), ($ = t.height);
          }
        }
        let W = !d && ("lazy" === h || void 0 === h);
        (!(s = "string" == typeof s ? s : z) ||
          s.startsWith("data:") ||
          s.startsWith("blob:")) &&
          ((p = !0), (W = !1)),
          u.unoptimized && (p = !0),
          U && s.endsWith(".svg") && !u.dangerouslyAllowSVG && (p = !0),
          d && (E = "high");
        let q = a(v),
          Z = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: A,
                  objectPosition: k,
                }
              : {},
            N ? {} : { color: "transparent" },
            x
          ),
          V =
            D || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: $,
                  blurWidth: c,
                  blurHeight: l,
                  blurDataURL: _ || "",
                  objectFit: Z.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          Y = V
            ? {
                backgroundSize: Z.objectFit || "cover",
                backgroundPosition: Z.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          H = (function (t) {
            let {
              config: e,
              src: n,
              unoptimized: r,
              width: o,
              quality: i,
              sizes: a,
              loader: u,
            } = t;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: c, kind: l } = (function (t, e, n) {
                let { deviceSizes: r, allSizes: o } = t;
                if (n) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let r; (r = t.exec(n)); r) e.push(parseInt(r[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: o.filter((e) => e >= r[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => o.find((e) => e >= t) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, o, a),
              s = c.length - 1;
            return {
              sizes: a || "w" !== l ? a : "100vw",
              srcSet: c
                .map(
                  (t, r) =>
                    u({ config: e, src: n, quality: i, width: t }) +
                    " " +
                    ("w" === l ? t : r + 1) +
                    l
                )
                .join(", "),
              src: u({ config: e, src: n, quality: i, width: c[s] }),
            };
          })({
            config: u,
            src: s,
            unoptimized: p,
            width: F,
            quality: q,
            sizes: f,
            loader: B,
          });
        return {
          props: {
            ...C,
            loading: W ? "lazy" : h,
            fetchPriority: E,
            width: F,
            height: $,
            decoding: "async",
            className: y,
            style: { ...Z, ...Y },
            sizes: H.sizes,
            srcSet: H.srcSet,
            src: O || H.src,
          },
          meta: { unoptimized: p, priority: d, placeholder: S, fill: b },
        };
      }
    },
    28321: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          default: function () {
            return y;
          },
          defaultHead: function () {
            return f;
          },
        });
      let r = n(99920),
        o = n(41452),
        i = n(57437),
        a = o._(n(2265)),
        u = r._(n(65960)),
        c = n(82901),
        l = n(36590),
        s = n(40687);
      function f(t) {
        void 0 === t && (t = !1);
        let e = [(0, i.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function p(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === a.default.Fragment
          ? t.concat(
              a.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      n(72301);
      let d = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(t, e) {
        let { inAmpMode: n } = e;
        return t
          .reduce(p, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let i = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let e = o.key.slice(o.key.indexOf("$") + 1);
                  t.has(e) ? (i = !1) : t.add(e);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    e.has(o.type) ? (i = !1) : e.add(o.type);
                    break;
                  case "meta":
                    for (let t = 0, e = d.length; t < e; t++) {
                      let e = d[t];
                      if (o.props.hasOwnProperty(e)) {
                        if ("charSet" === e) n.has(e) ? (i = !1) : n.add(e);
                        else {
                          let t = o.props[e],
                            n = r[e] || new Set();
                          ("name" !== e || !a) && n.has(t)
                            ? (i = !1)
                            : (n.add(t), (r[e] = n));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let r = t.key || e;
            if (
              !n &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                a.default.cloneElement(t, e)
              );
            }
            return a.default.cloneElement(t, { key: r });
          });
      }
      let y = function (t) {
        let { children: e } = t,
          n = (0, a.useContext)(c.AmpStateContext),
          r = (0, a.useContext)(l.HeadManagerContext);
        return (0, i.jsx)(u.default, {
          reduceComponentsToState: h,
          headManager: r,
          inAmpMode: (0, s.isInAmpMode)(n),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    51564: function (t, e) {
      "use strict";
      function n(t) {
        let {
            widthInt: e,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: i,
            objectFit: a,
          } = t,
          u = r ? 40 * r : e,
          c = o ? 40 * o : n,
          l = u && c ? "viewBox='0 0 " + u + " " + c + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          l +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (l
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    93938: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(99920)._(n(2265)),
        o = n(7103),
        i = r.default.createContext(o.imageConfigDefault);
    },
    7103: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    21241: function (t, e) {
      "use strict";
      function n(t) {
        let { config: e, src: n, width: r, quality: o } = t;
        return n;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    10912: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(55592);
      function o(t) {
        let { reason: e, children: n } = t;
        if ("undefined" == typeof window) throw new r.BailoutToCSRError(e);
        return n;
      }
    },
    61481: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(57437),
        o = n(58512);
      function i(t) {
        let { moduleIds: e } = t;
        if ("undefined" != typeof window) return null;
        let n = (0, o.getExpectedRequestStore)("next/dynamic css"),
          i = [];
        if (n.reactLoadableManifest && e) {
          let t = n.reactLoadableManifest;
          for (let n of e) {
            if (!t[n]) continue;
            let e = t[n].files.filter((t) => t.endsWith(".css"));
            i.push(...e);
          }
        }
        return 0 === i.length
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: i.map((t) =>
                (0, r.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(t),
                    as: "style",
                  },
                  t
                )
              ),
            });
      }
    },
    60291: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(99920)._(n(2265)).default.createContext(null);
    },
    41142: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return u;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let r = n(41452)._(n(18323)),
        o = /https?|ftp|gopher|file/;
      function i(t) {
        let { auth: e, hostname: n } = t,
          i = t.protocol || "",
          a = t.pathname || "",
          u = t.hash || "",
          c = t.query || "",
          l = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (l = e + t.host)
            : n &&
              ((l = e + (~n.indexOf(":") ? "[" + n + "]" : n)),
              t.port && (l += ":" + t.port)),
          c &&
            "object" == typeof c &&
            (c = String(r.urlQueryToSearchParams(c)));
        let s = t.search || (c && "?" + c) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          t.slashes || ((!i || o.test(i)) && !1 !== l)
            ? ((l = "//" + (l || "")), a && "/" !== a[0] && (a = "/" + a))
            : l || (l = ""),
          u && "#" !== u[0] && (u = "#" + u),
          s && "?" !== s[0] && (s = "?" + s),
          "" +
            i +
            l +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (s = s.replace("#", "%23")) +
            u
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function u(t) {
        return i(t);
      }
    },
    59195: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let r = n(49089),
        o = n(28083);
    },
    80020: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(41533),
        o = n(63169);
      function i(t, e, n) {
        let i = "",
          a = (0, o.getRouteRegex)(t),
          u = a.groups,
          c = (e !== t ? (0, r.getRouteMatcher)(a)(e) : "") || n;
        i = t;
        let l = Object.keys(u);
        return (
          l.every((t) => {
            let e = c[t] || "",
              { repeat: n, optional: r } = u[t],
              o = "[" + (n ? "..." : "") + t + "]";
            return (
              r && (o = (e ? "" : "/") + "[" + o + "]"),
              n && !Array.isArray(e) && (e = [e]),
              (r || t in c) &&
                (i =
                  i.replace(
                    o,
                    n
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (i = ""),
          { params: l, result: i }
        );
      }
    },
    28083: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(82269),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(t) {
        return (
          (0, r.isInterceptionRouteAppPath)(t) &&
            (t = (0, r.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          o.test(t)
        );
      }
    },
    18029: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(43461),
        o = n(49404);
      function i(t) {
        if (!(0, r.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, r.getLocationOrigin)(),
            n = new URL(t, e);
          return n.origin === e && (0, o.hasBasePath)(n.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    45519: function (t, e) {
      "use strict";
      function n(t, e) {
        let n = {};
        return (
          Object.keys(t).forEach((r) => {
            e.includes(r) || (n[r] = t[r]);
          }),
          n
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    18323: function (t, e) {
      "use strict";
      function n(t) {
        let e = {};
        return (
          t.forEach((t, n) => {
            void 0 === e[n]
              ? (e[n] = t)
              : Array.isArray(e[n])
              ? e[n].push(t)
              : (e[n] = [e[n], t]);
          }),
          e
        );
      }
      function r(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function o(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [n, o] = t;
            Array.isArray(o)
              ? o.forEach((t) => e.append(n, r(t)))
              : e.set(n, r(o));
          }),
          e
        );
      }
      function i(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, n) => t.append(n, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    41533: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(43461);
      function o(t) {
        let { re: e, groups: n } = t;
        return (t) => {
          let o = e.exec(t);
          if (!o) return !1;
          let i = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            a = {};
          return (
            Object.keys(n).forEach((t) => {
              let e = n[t],
                r = o[e.pos];
              void 0 !== r &&
                (a[t] = ~r.indexOf("/")
                  ? r.split("/").map((t) => i(t))
                  : e.repeat
                  ? [i(r)]
                  : i(r));
            }),
            a
          );
        };
      }
    },
    63169: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getNamedMiddlewareRegex: function () {
            return p;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getRouteRegex: function () {
            return c;
          },
        });
      let r = n(82269),
        o = n(81943),
        i = n(67741);
      function a(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let n = t.startsWith("...");
        return n && (t = t.slice(3)), { key: t, repeat: n, optional: e };
      }
      function u(t) {
        let e = (0, i.removeTrailingSlash)(t).slice(1).split("/"),
          n = {},
          u = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = r.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                i = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && i) {
                let { key: t, optional: r, repeat: c } = a(i[1]);
                return (
                  (n[t] = { pos: u++, repeat: c, optional: r }),
                  "/" + (0, o.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!i) return "/" + (0, o.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: r } = a(i[1]);
                return (
                  (n[t] = { pos: u++, repeat: e, optional: r }),
                  e ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function c(t) {
        let { parameterizedRoute: e, groups: n } = u(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: n };
      }
      function l(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: i,
            keyPrefix: u,
          } = t,
          { key: c, optional: l, repeat: s } = a(r),
          f = c.replace(/\W/g, "");
        u && (f = "" + u + f);
        let p = !1;
        (0 === f.length || f.length > 30) && (p = !0),
          isNaN(parseInt(f.slice(0, 1))) || (p = !0),
          p && (f = n()),
          u ? (i[f] = "" + u + c) : (i[f] = c);
        let d = e ? (0, o.escapeStringRegexp)(e) : "";
        return s
          ? l
            ? "(?:/" + d + "(?<" + f + ">.+?))?"
            : "/" + d + "(?<" + f + ">.+?)"
          : "/" + d + "(?<" + f + ">[^/]+?)";
      }
      function s(t, e) {
        let n;
        let a = (0, i.removeTrailingSlash)(t).slice(1).split("/"),
          u =
            ((n = 0),
            () => {
              let t = "",
                e = ++n;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          c = {};
        return {
          namedParameterizedRoute: a
            .map((t) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                i = t.match(/\[((?:\[.*\])|.+)\]/);
              if (n && i) {
                let [n] = t.split(i[0]);
                return l({
                  getSafeRouteKey: u,
                  interceptionMarker: n,
                  segment: i[1],
                  routeKeys: c,
                  keyPrefix: e ? "nxtI" : void 0,
                });
              }
              return i
                ? l({
                    getSafeRouteKey: u,
                    segment: i[1],
                    routeKeys: c,
                    keyPrefix: e ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: c,
        };
      }
      function f(t, e) {
        let n = s(t, e);
        return {
          ...c(t),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function p(t, e) {
        let { parameterizedRoute: n } = u(t),
          { catchAll: r = !0 } = e;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = s(t, !1);
        return { namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    49089: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let n = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(t, e, r) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let o = t[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let n = o.slice(1, -1),
              a = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (a = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function i(t, n) {
              if (null !== t && t !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    n +
                    "')."
                );
              e.forEach((t) => {
                if (t === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(n);
            }
            if (r) {
              if (a) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                i(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                i(this.restSlugName, n), (this.restSlugName = n), (o = "[...]");
              }
            } else {
              if (a)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              i(this.slugName, n), (this.slugName = n), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new n()),
            this.children.get(o)._insert(t.slice(1), e, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(t) {
        let e = new n();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    65960: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : r.useLayoutEffect,
        a = o ? () => {} : r.useEffect;
      function u(t) {
        let { headManager: e, reduceComponentsToState: n } = t;
        function u() {
          if (e && e.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(n(o, t));
          }
        }
        if (o) {
          var c;
          null == e || null == (c = e.mountedInstances) || c.add(t.children),
            u();
        }
        return (
          i(() => {
            var n;
            return (
              null == e ||
                null == (n = e.mountedInstances) ||
                n.add(t.children),
              () => {
                var n;
                null == e ||
                  null == (n = e.mountedInstances) ||
                  n.delete(t.children);
              }
            );
          }),
          i(
            () => (
              e && (e._pendingUpdate = u),
              () => {
                e && (e._pendingUpdate = u);
              }
            )
          ),
          a(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    43461: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return m;
          },
          NormalizeError: function () {
            return y;
          },
          PageNotFoundError: function () {
            return v;
          },
          SP: function () {
            return p;
          },
          ST: function () {
            return d;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return c;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return u;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return l;
          },
          loadGetInitialProps: function () {
            return f;
          },
          normalizeRepeatedSlashes: function () {
            return s;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(t) {
        let e,
          n = !1;
        return function () {
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return n || ((n = !0), (e = t(...o))), e;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (t) => o.test(t);
      function a() {
        let { protocol: t, hostname: e, port: n } = window.location;
        return t + "//" + e + (n ? ":" + n : "");
      }
      function u() {
        let { href: t } = window.location,
          e = a();
        return t.substring(e.length);
      }
      function c(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function l(t) {
        return t.finished || t.headersSent;
      }
      function s(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function f(t, e) {
        let n = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await f(e.Component, e.ctx) }
            : {};
        let r = await t.getInitialProps(e);
        if (n && l(n)) return r;
        if (!r)
          throw Error(
            '"' +
              c(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let p = "undefined" != typeof performance,
        d =
          p &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class h extends Error {}
      class y extends Error {}
      class v extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class m extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class g extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    99949: function (t, e, n) {
      "use strict";
      var r = n(88877);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (t.exports = function () {
          function t(t, e, n, o, i, a) {
            if (a !== r) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    41448: function (t, e, n) {
      t.exports = n(99949)();
    },
    88877: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    74332: function (t, e) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        u = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        s = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        d = n ? Symbol.for("react.suspense") : 60113,
        h =
          (n && Symbol.for("react.suspense_list"),
          n ? Symbol.for("react.memo") : 60115),
        y = n ? Symbol.for("react.lazy") : 60116;
      n && Symbol.for("react.block"),
        n && Symbol.for("react.fundamental"),
        n && Symbol.for("react.responder"),
        n && Symbol.for("react.scope"),
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === r;
        }),
        (e.isFragment = function (t) {
          return (
            (function (t) {
              if ("object" == typeof t && null !== t) {
                var e = t.$$typeof;
                switch (e) {
                  case r:
                    switch ((t = t.type)) {
                      case s:
                      case f:
                      case i:
                      case u:
                      case a:
                      case d:
                        return t;
                      default:
                        switch ((t = t && t.$$typeof)) {
                          case l:
                          case p:
                          case y:
                          case h:
                          case c:
                            return t;
                          default:
                            return e;
                        }
                    }
                  case o:
                    return e;
                }
              }
            })(t) === i
          );
        });
    },
    12659: function (t, e, n) {
      "use strict";
      t.exports = n(74332);
    },
    79005: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZP: function () {
          return tJ;
        },
      });
      var r = n(2265),
        o = n(41448),
        i = n.n(o),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (n, r, o) {
          return t(n, r, o) && e(n, r, o);
        };
      }
      function s(t) {
        return function (e, n, r) {
          if (!e || !n || "object" != typeof e || "object" != typeof n)
            return t(e, n, r);
          var o = r.cache,
            i = o.get(e),
            a = o.get(n);
          if (i && a) return i === n && a === e;
          o.set(e, n), o.set(n, e);
          var u = t(e, n, r);
          return o.delete(e), o.delete(n), u;
        };
      }
      function f(t) {
        return a(t).concat(u(t));
      }
      var p =
        Object.hasOwn ||
        function (t, e) {
          return c.call(t, e);
        };
      function d(t, e) {
        return t || e ? t === e : t === e || (t != t && e != e);
      }
      var h = "_owner",
        y = Object.getOwnPropertyDescriptor,
        v = Object.keys;
      function m(t, e, n) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        return !0;
      }
      function g(t, e) {
        return d(t.getTime(), e.getTime());
      }
      function b(t, e, n) {
        if (t.size !== e.size) return !1;
        for (
          var r, o, i = {}, a = t.entries(), u = 0;
          (r = a.next()) && !r.done;

        ) {
          for (
            var c = e.entries(), l = !1, s = 0;
            (o = c.next()) && !o.done;

          ) {
            var f = r.value,
              p = f[0],
              d = f[1],
              h = o.value,
              y = h[0],
              v = h[1];
            !l &&
              !i[s] &&
              (l =
                n.equals(p, y, u, s, t, e, n) &&
                n.equals(d, v, p, y, t, e, n)) &&
              (i[s] = !0),
              s++;
          }
          if (!l) return !1;
          u++;
        }
        return !0;
      }
      function x(t, e, n) {
        var r,
          o = v(t),
          i = o.length;
        if (v(e).length !== i) return !1;
        for (; i-- > 0; )
          if (
            ((r = o[i]) === h &&
              (t.$$typeof || e.$$typeof) &&
              t.$$typeof !== e.$$typeof) ||
            !p(e, r) ||
            !n.equals(t[r], e[r], r, r, t, e, n)
          )
            return !1;
        return !0;
      }
      function O(t, e, n) {
        var r,
          o,
          i,
          a = f(t),
          u = a.length;
        if (f(e).length !== u) return !1;
        for (; u-- > 0; )
          if (
            ((r = a[u]) === h &&
              (t.$$typeof || e.$$typeof) &&
              t.$$typeof !== e.$$typeof) ||
            !p(e, r) ||
            !n.equals(t[r], e[r], r, r, t, e, n) ||
            ((o = y(t, r)),
            (i = y(e, r)),
            (o || i) &&
              (!o ||
                !i ||
                o.configurable !== i.configurable ||
                o.enumerable !== i.enumerable ||
                o.writable !== i.writable))
          )
            return !1;
        return !0;
      }
      function w(t, e) {
        return d(t.valueOf(), e.valueOf());
      }
      function j(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, n) {
        if (t.size !== e.size) return !1;
        for (var r, o, i = {}, a = t.values(); (r = a.next()) && !r.done; ) {
          for (var u = e.values(), c = !1, l = 0; (o = u.next()) && !o.done; )
            !c &&
              !i[l] &&
              (c = n.equals(r.value, o.value, r.value, o.value, t, e, n)) &&
              (i[l] = !0),
              l++;
          if (!c) return !1;
        }
        return !0;
      }
      function _(t, e) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var E = Array.isArray,
        P =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        A = Object.assign,
        k = Object.prototype.toString.call.bind(Object.prototype.toString),
        M = T();
      function T(t) {
        void 0 === t && (t = {});
        var e,
          n,
          r,
          o,
          i,
          a,
          u,
          c,
          f,
          p = t.circular,
          d = t.createInternalComparator,
          h = t.createState,
          y = t.strict,
          v =
            ((n = (e = (function (t) {
              var e = t.circular,
                n = t.createCustomConfig,
                r = t.strict,
                o = {
                  areArraysEqual: r ? O : m,
                  areDatesEqual: g,
                  areMapsEqual: r ? l(b, O) : b,
                  areObjectsEqual: r ? O : x,
                  arePrimitiveWrappersEqual: w,
                  areRegExpsEqual: j,
                  areSetsEqual: r ? l(S, O) : S,
                  areTypedArraysEqual: r ? O : _,
                };
              if ((n && (o = A({}, o, n(o))), e)) {
                var i = s(o.areArraysEqual),
                  a = s(o.areMapsEqual),
                  u = s(o.areObjectsEqual),
                  c = s(o.areSetsEqual);
                o = A({}, o, {
                  areArraysEqual: i,
                  areMapsEqual: a,
                  areObjectsEqual: u,
                  areSetsEqual: c,
                });
              }
              return o;
            })(t)).areArraysEqual),
            (r = e.areDatesEqual),
            (o = e.areMapsEqual),
            (i = e.areObjectsEqual),
            (a = e.arePrimitiveWrappersEqual),
            (u = e.areRegExpsEqual),
            (c = e.areSetsEqual),
            (f = e.areTypedArraysEqual),
            function (t, e, l) {
              if (t === e) return !0;
              if (
                null == t ||
                null == e ||
                "object" != typeof t ||
                "object" != typeof e
              )
                return t != t && e != e;
              var s = t.constructor;
              if (s !== e.constructor) return !1;
              if (s === Object) return i(t, e, l);
              if (E(t)) return n(t, e, l);
              if (null != P && P(t)) return f(t, e, l);
              if (s === Date) return r(t, e, l);
              if (s === RegExp) return u(t, e, l);
              if (s === Map) return o(t, e, l);
              if (s === Set) return c(t, e, l);
              var p = k(t);
              return "[object Date]" === p
                ? r(t, e, l)
                : "[object RegExp]" === p
                ? u(t, e, l)
                : "[object Map]" === p
                ? o(t, e, l)
                : "[object Set]" === p
                ? c(t, e, l)
                : "[object Object]" === p
                ? "function" != typeof t.then &&
                  "function" != typeof e.then &&
                  i(t, e, l)
                : "[object Arguments]" === p
                ? i(t, e, l)
                : ("[object Boolean]" === p ||
                    "[object Number]" === p ||
                    "[object String]" === p) &&
                  a(t, e, l);
            }),
          M = d
            ? d(v)
            : function (t, e, n, r, o, i, a) {
                return v(t, e, a);
              };
        return (function (t) {
          var e = t.circular,
            n = t.comparator,
            r = t.createState,
            o = t.equals,
            i = t.strict;
          if (r)
            return function (t, a) {
              var u = r(),
                c = u.cache;
              return n(t, a, {
                cache: void 0 === c ? (e ? new WeakMap() : void 0) : c,
                equals: o,
                meta: u.meta,
                strict: i,
              });
            };
          if (e)
            return function (t, e) {
              return n(t, e, {
                cache: new WeakMap(),
                equals: o,
                meta: void 0,
                strict: i,
              });
            };
          var a = { cache: void 0, equals: o, meta: void 0, strict: i };
          return function (t, e) {
            return n(t, e, a);
          };
        })({
          circular: void 0 !== p && p,
          comparator: v,
          createState: h,
          equals: M,
          strict: void 0 !== y && y,
        });
      }
      function C(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = -1;
        requestAnimationFrame(function r(o) {
          if ((n < 0 && (n = o), o - n > e)) t(o), (n = -1);
          else {
            var i;
            (i = r),
              "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame(i);
          }
        });
      }
      function I(t) {
        return (I =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function N(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function D(t) {
        return (D =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function R(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? R(Object(n), !0).forEach(function (e) {
                B(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function B(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" !== D(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" !== D(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === D(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      T({ strict: !0 }),
        T({ circular: !0 }),
        T({ circular: !0, strict: !0 }),
        T({
          createInternalComparator: function () {
            return d;
          },
        }),
        T({
          strict: !0,
          createInternalComparator: function () {
            return d;
          },
        }),
        T({
          circular: !0,
          createInternalComparator: function () {
            return d;
          },
        }),
        T({
          circular: !0,
          createInternalComparator: function () {
            return d;
          },
          strict: !0,
        });
      var U = function (t) {
          return t;
        },
        z = function (t, e) {
          return Object.keys(e).reduce(function (n, r) {
            return L(L({}, n), {}, B({}, r, t(r, e[r])));
          }, {});
        },
        F = function (t, e, n) {
          return t
            .map(function (t) {
              return ""
                .concat(
                  t.replace(/([A-Z])/g, function (t) {
                    return "-".concat(t.toLowerCase());
                  }),
                  " "
                )
                .concat(e, "ms ")
                .concat(n);
            })
            .join(",");
        },
        $ = function (t, e, n, r, o, i, a, u) {};
      function W(t, e) {
        if (t) {
          if ("string" == typeof t) return q(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return q(t, e);
        }
      }
      function q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Z = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        V = function (t, e) {
          return t
            .map(function (t, n) {
              return t * Math.pow(e, n);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        Y = function (t, e) {
          return function (n) {
            return V(Z(t, e), n);
          };
        },
        H = function () {
          for (var t, e, n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          var i = r[0],
            a = r[1],
            u = r[2],
            c = r[3];
          if (1 === r.length)
            switch (r[0]) {
              case "linear":
                (i = 0), (a = 0), (u = 1), (c = 1);
                break;
              case "ease":
                (i = 0.25), (a = 0.1), (u = 0.25), (c = 1);
                break;
              case "ease-in":
                (i = 0.42), (a = 0), (u = 1), (c = 1);
                break;
              case "ease-out":
                (i = 0.42), (a = 0), (u = 0.58), (c = 1);
                break;
              case "ease-in-out":
                (i = 0), (a = 0), (u = 0.58), (c = 1);
                break;
              default:
                var l = r[0].split("(");
                if (
                  "cubic-bezier" === l[0] &&
                  4 === l[1].split(")")[0].split(",").length
                ) {
                  var s,
                    f =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(
                        (s = l[1]
                          .split(")")[0]
                          .split(",")
                          .map(function (t) {
                            return parseFloat(t);
                          }))
                      ) ||
                      (function (t, e) {
                        var n =
                          null == t
                            ? null
                            : ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != n) {
                          var r,
                            o,
                            i,
                            a,
                            u = [],
                            c = !0,
                            l = !1;
                          try {
                            for (
                              i = (n = n.call(t)).next;
                              !(c = (r = i.call(n)).done) &&
                              (u.push(r.value), 4 !== u.length);
                              c = !0
                            );
                          } catch (t) {
                            (l = !0), (o = t);
                          } finally {
                            try {
                              if (
                                !c &&
                                null != n.return &&
                                ((a = n.return()), Object(a) !== a)
                              )
                                return;
                            } finally {
                              if (l) throw o;
                            }
                          }
                          return u;
                        }
                      })(s, 4) ||
                      W(s, 4) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                  (i = f[0]), (a = f[1]), (u = f[2]), (c = f[3]);
                } else
                  $(
                    !1,
                    "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                    r
                  );
            }
          $(
            [i, u, a, c].every(function (t) {
              return "number" == typeof t && t >= 0 && t <= 1;
            }),
            "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
            r
          );
          var p = Y(i, u),
            d = Y(a, c),
            h =
              ((t = i),
              (e = u),
              function (n) {
                var r;
                return V(
                  [].concat(
                    (function (t) {
                      if (Array.isArray(t)) return q(t);
                    })(
                      (r = Z(t, e)
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1))
                    ) ||
                      (function (t) {
                        if (
                          ("undefined" != typeof Symbol &&
                            null != t[Symbol.iterator]) ||
                          null != t["@@iterator"]
                        )
                          return Array.from(t);
                      })(r) ||
                      W(r) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    [0]
                  ),
                  n
                );
              }),
            y = function (t) {
              for (var e = t > 1 ? 1 : t, n = e, r = 0; r < 8; ++r) {
                var o,
                  i = p(n) - e,
                  a = h(n);
                if (1e-4 > Math.abs(i - e) || a < 1e-4) break;
                n = (o = n - i / a) > 1 ? 1 : o < 0 ? 0 : o;
              }
              return d(n);
            };
          return (y.isStepper = !1), y;
        },
        X = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.stiff,
            n = void 0 === e ? 100 : e,
            r = t.damping,
            o = void 0 === r ? 8 : r,
            i = t.dt,
            a = void 0 === i ? 17 : i,
            u = function (t, e, r) {
              var i = r + ((-(t - e) * n - r * o) * a) / 1e3,
                u = (r * a) / 1e3 + t;
              return 1e-4 > Math.abs(u - e) && 1e-4 > Math.abs(i)
                ? [e, 0]
                : [u, i];
            };
          return (u.isStepper = !0), (u.dt = a), u;
        },
        G = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0];
          if ("string" == typeof r)
            switch (r) {
              case "ease":
              case "ease-in-out":
              case "ease-out":
              case "ease-in":
              case "linear":
                return H(r);
              case "spring":
                return X();
              default:
                if ("cubic-bezier" === r.split("(")[0]) return H(r);
                $(
                  !1,
                  "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                  e
                );
            }
          return "function" == typeof r
            ? r
            : ($(
                !1,
                "[configEasing]: first argument type should be function or string, instead received %s",
                e
              ),
              null);
        };
      function K(t) {
        return (K =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function J(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return tr(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          tn(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Q(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Q(Object(n), !0).forEach(function (e) {
                te(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function te(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" !== K(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" !== K(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" === K(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tn(t, e) {
        if (t) {
          if ("string" == typeof t) return tr(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return tr(t, e);
        }
      }
      function tr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var to = function (t, e, n) {
          return t + (e - t) * n;
        },
        ti = function (t) {
          return t.from !== t.to;
        },
        ta = function t(e, n, r) {
          var o = z(function (t, n) {
            if (ti(n)) {
              var r,
                o =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((r = e(n.from, n.to, n.velocity))) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var r,
                        o,
                        i,
                        a,
                        u = [],
                        c = !0,
                        l = !1;
                      try {
                        for (
                          i = (n = n.call(t)).next;
                          !(c = (r = i.call(n)).done) &&
                          (u.push(r.value), 2 !== u.length);
                          c = !0
                        );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != n.return &&
                            ((a = n.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return u;
                    }
                  })(r, 2) ||
                  tn(r, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                i = o[0],
                a = o[1];
              return tt(tt({}, n), {}, { from: i, velocity: a });
            }
            return n;
          }, n);
          return r < 1
            ? z(function (t, e) {
                return ti(e)
                  ? tt(
                      tt({}, e),
                      {},
                      {
                        velocity: to(e.velocity, o[t].velocity, r),
                        from: to(e.from, o[t].from, r),
                      }
                    )
                  : e;
              }, n)
            : t(e, o, r - 1);
        },
        tu = function (t, e, n, r, o) {
          var i,
            a,
            u = [Object.keys(t), Object.keys(e)].reduce(function (t, e) {
              return t.filter(function (t) {
                return e.includes(t);
              });
            }),
            c = u.reduce(function (n, r) {
              return tt(tt({}, n), {}, te({}, r, [t[r], e[r]]));
            }, {}),
            l = u.reduce(function (n, r) {
              return tt(
                tt({}, n),
                {},
                te({}, r, { from: t[r], velocity: 0, to: e[r] })
              );
            }, {}),
            s = -1,
            f = function () {
              return null;
            };
          return (
            (f = n.isStepper
              ? function (r) {
                  i || (i = r);
                  var a = (r - i) / n.dt;
                  (l = ta(n, l, a)),
                    o(
                      tt(
                        tt(tt({}, t), e),
                        z(function (t, e) {
                          return e.from;
                        }, l)
                      )
                    ),
                    (i = r),
                    Object.values(l).filter(ti).length &&
                      (s = requestAnimationFrame(f));
                }
              : function (i) {
                  a || (a = i);
                  var u = (i - a) / r,
                    l = z(function (t, e) {
                      return to.apply(void 0, J(e).concat([n(u)]));
                    }, c);
                  if ((o(tt(tt(tt({}, t), e), l)), u < 1))
                    s = requestAnimationFrame(f);
                  else {
                    var p = z(function (t, e) {
                      return to.apply(void 0, J(e).concat([n(1)]));
                    }, c);
                    o(tt(tt(tt({}, t), e), p));
                  }
                }),
            function () {
              return (
                requestAnimationFrame(f),
                function () {
                  cancelAnimationFrame(s);
                }
              );
            }
          );
        };
      function tc(t) {
        return (tc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var tl = [
        "children",
        "begin",
        "duration",
        "attributeName",
        "easing",
        "isActive",
        "steps",
        "from",
        "to",
        "canBegin",
        "onAnimationEnd",
        "shouldReAnimate",
        "onAnimationReStart",
      ];
      function ts(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return tf(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return tf(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return tf(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function tf(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function tp(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function td(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tp(Object(n), !0).forEach(function (e) {
                th(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tp(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function th(t, e, n) {
        return (
          (e = ty(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ty(t) {
        var e = (function (t, e) {
          if ("object" !== tc(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== tc(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === tc(e) ? e : String(e);
      }
      function tv(t, e) {
        return (tv = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tm(t, e) {
        if (e && ("object" === tc(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw TypeError(
            "Derived constructors may only return object or undefined"
          );
        return tg(t);
      }
      function tg(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function tb(t) {
        return (tb = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var tx = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && tv(t, e);
        })(i, t);
        var e,
          n,
          o =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = tb(i);
              return (
                (t = e
                  ? Reflect.construct(n, arguments, tb(this).constructor)
                  : n.apply(this, arguments)),
                tm(this, t)
              );
            });
        function i(t, e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, i);
          var n,
            r = (n = o.call(this, t, e)).props,
            a = r.isActive,
            u = r.attributeName,
            c = r.from,
            l = r.to,
            s = r.steps,
            f = r.children,
            p = r.duration;
          if (
            ((n.handleStyleChange = n.handleStyleChange.bind(tg(n))),
            (n.changeStyle = n.changeStyle.bind(tg(n))),
            !a || p <= 0)
          )
            return (
              (n.state = { style: {} }),
              "function" == typeof f && (n.state = { style: l }),
              tm(n)
            );
          if (s && s.length) n.state = { style: s[0].style };
          else if (c) {
            if ("function" == typeof f) return (n.state = { style: c }), tm(n);
            n.state = { style: u ? th({}, u, c) : c };
          } else n.state = { style: {} };
          return n;
        }
        return (
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  n = t.canBegin;
                (this.mounted = !0), e && n && this.runAnimation(this.props);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  n = e.isActive,
                  r = e.canBegin,
                  o = e.attributeName,
                  i = e.shouldReAnimate,
                  a = e.to,
                  u = e.from,
                  c = this.state.style;
                if (r) {
                  if (!n) {
                    var l = { style: o ? th({}, o, a) : a };
                    this.state &&
                      c &&
                      ((o && c[o] !== a) || (!o && c !== a)) &&
                      this.setState(l);
                    return;
                  }
                  if (!M(t.to, a) || !t.canBegin || !t.isActive) {
                    var s = !t.canBegin || !t.isActive;
                    this.manager && this.manager.stop(),
                      this.stopJSAnimation && this.stopJSAnimation();
                    var f = s || i ? u : t.to;
                    if (this.state && c) {
                      var p = { style: o ? th({}, o, f) : f };
                      ((o && c[o] !== f) || (!o && c !== f)) &&
                        this.setState(p);
                    }
                    this.runAnimation(
                      td(td({}, this.props), {}, { from: f, begin: 0 })
                    );
                  }
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var t = this.props.onAnimationEnd;
                this.unSubscribe && this.unSubscribe(),
                  this.manager && (this.manager.stop(), (this.manager = null)),
                  this.stopJSAnimation && this.stopJSAnimation(),
                  t && t();
              },
            },
            {
              key: "handleStyleChange",
              value: function (t) {
                this.changeStyle(t);
              },
            },
            {
              key: "changeStyle",
              value: function (t) {
                this.mounted && this.setState({ style: t });
              },
            },
            {
              key: "runJSAnimation",
              value: function (t) {
                var e = this,
                  n = t.from,
                  r = t.to,
                  o = t.duration,
                  i = t.easing,
                  a = t.begin,
                  u = t.onAnimationEnd,
                  c = t.onAnimationStart,
                  l = tu(n, r, G(i), o, this.changeStyle);
                this.manager.start([
                  c,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  o,
                  u,
                ]);
              },
            },
            {
              key: "runStepAnimation",
              value: function (t) {
                var e = this,
                  n = t.steps,
                  r = t.begin,
                  o = t.onAnimationStart,
                  i = n[0],
                  a = i.style,
                  u = i.duration;
                return this.manager.start(
                  [o].concat(
                    ts(
                      n.reduce(
                        function (t, r, o) {
                          if (0 === o) return t;
                          var i = r.duration,
                            a = r.easing,
                            u = void 0 === a ? "ease" : a,
                            c = r.style,
                            l = r.properties,
                            s = r.onAnimationEnd,
                            f = o > 0 ? n[o - 1] : r,
                            p = l || Object.keys(c);
                          if ("function" == typeof u || "spring" === u)
                            return [].concat(ts(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: i,
                                easing: u,
                              }),
                              i,
                            ]);
                          var d = F(p, i, u),
                            h = td(
                              td(td({}, f.style), c),
                              {},
                              { transition: d }
                            );
                          return [].concat(ts(t), [h, i, s]).filter(U);
                        },
                        [a, Math.max(void 0 === u ? 0 : u, r)]
                      )
                    ),
                    [t.onAnimationEnd]
                  )
                );
              },
            },
            {
              key: "runAnimation",
              value: function (t) {
                if (!this.manager) {
                  var e, n, r;
                  this.manager =
                    ((e = function () {
                      return null;
                    }),
                    (n = !1),
                    (r = function t(r) {
                      if (!n) {
                        if (Array.isArray(r)) {
                          if (!r.length) return;
                          var o =
                              (function (t) {
                                if (Array.isArray(t)) return t;
                              })(r) ||
                              (function (t) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != t[Symbol.iterator]) ||
                                  null != t["@@iterator"]
                                )
                                  return Array.from(t);
                              })(r) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t) return N(t, void 0);
                                  var n = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === n &&
                                      t.constructor &&
                                      (n = t.constructor.name),
                                    "Map" === n || "Set" === n)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n
                                    )
                                  )
                                    return N(t, void 0);
                                }
                              })(r) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })(),
                            i = o[0],
                            a = o.slice(1);
                          if ("number" == typeof i) {
                            C(t.bind(null, a), i);
                            return;
                          }
                          t(i), C(t.bind(null, a));
                          return;
                        }
                        "object" === I(r) && e(r),
                          "function" == typeof r && r();
                      }
                    }),
                    {
                      stop: function () {
                        n = !0;
                      },
                      start: function (t) {
                        (n = !1), r(t);
                      },
                      subscribe: function (t) {
                        return (
                          (e = t),
                          function () {
                            e = function () {
                              return null;
                            };
                          }
                        );
                      },
                    });
                }
                var o = t.begin,
                  i = t.duration,
                  a = t.attributeName,
                  u = t.to,
                  c = t.easing,
                  l = t.onAnimationStart,
                  s = t.onAnimationEnd,
                  f = t.steps,
                  p = t.children,
                  d = this.manager;
                if (
                  ((this.unSubscribe = d.subscribe(this.handleStyleChange)),
                  "function" == typeof c ||
                    "function" == typeof p ||
                    "spring" === c)
                ) {
                  this.runJSAnimation(t);
                  return;
                }
                if (f.length > 1) {
                  this.runStepAnimation(t);
                  return;
                }
                var h = a ? th({}, a, u) : u,
                  y = F(Object.keys(h), i, c);
                d.start([l, o, td(td({}, h), {}, { transition: y }), i, s]);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.children,
                  n = (t.begin, t.duration),
                  o = (t.attributeName, t.easing, t.isActive),
                  i =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(t);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                          return o;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            !(e.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                n
                              ) &&
                              (o[n] = t[n]);
                      }
                      return o;
                    })(t, tl)),
                  a = r.Children.count(e),
                  u = this.state.style;
                if ("function" == typeof e) return e(u);
                if (!o || 0 === a || n <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    n = e.style,
                    o = e.className;
                  return (0, r.cloneElement)(
                    t,
                    td(
                      td({}, i),
                      {},
                      {
                        style: td(td({}, void 0 === n ? {} : n), u),
                        className: o,
                      }
                    )
                  );
                };
                return 1 === a
                  ? c(r.Children.only(e))
                  : r.createElement(
                      "div",
                      null,
                      r.Children.map(e, function (t) {
                        return c(t);
                      })
                    );
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, ty(r.key), r);
            }
          })(i.prototype, n),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(r.PureComponent);
      function tO(t, e) {
        if (null == t) return {};
        var n = {};
        for (var r in t)
          if ({}.hasOwnProperty.call(t, r)) {
            if (e.includes(r)) continue;
            n[r] = t[r];
          }
        return n;
      }
      function tw() {
        return (tw = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(null, arguments);
      }
      function tj(t, e) {
        return (tj = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tS(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          tj(t, e);
      }
      (tx.displayName = "Animate"),
        (tx.defaultProps = {
          begin: 0,
          duration: 1e3,
          from: "",
          to: "",
          attributeName: "",
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          steps: [],
          onAnimationEnd: function () {},
          onAnimationStart: function () {},
        }),
        (tx.propTypes = {
          from: i().oneOfType([i().object, i().string]),
          to: i().oneOfType([i().object, i().string]),
          attributeName: i().string,
          duration: i().number,
          begin: i().number,
          easing: i().oneOfType([i().string, i().func]),
          steps: i().arrayOf(
            i().shape({
              duration: i().number.isRequired,
              style: i().object.isRequired,
              easing: i().oneOfType([
                i().oneOf([
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                  "linear",
                ]),
                i().func,
              ]),
              properties: i().arrayOf("string"),
              onAnimationEnd: i().func,
            })
          ),
          children: i().oneOfType([i().node, i().func]),
          isActive: i().bool,
          canBegin: i().bool,
          onAnimationEnd: i().func,
          shouldReAnimate: i().bool,
          onAnimationStart: i().func,
          onAnimationReStart: i().func,
        });
      var t_ = r.createContext(null);
      function tE(t, e) {
        var n = Object.create(null);
        return (
          t &&
            r.Children.map(t, function (t) {
              return t;
            }).forEach(function (t) {
              n[t.key] = e && (0, r.isValidElement)(t) ? e(t) : t;
            }),
          n
        );
      }
      function tP(t, e, n) {
        return null != n[e] ? n[e] : t.props[e];
      }
      var tA =
          Object.values ||
          function (t) {
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          },
        tk = (function (t) {
          function e(e, n) {
            var r,
              o = (r = t.call(this, e, n) || this).handleExited.bind(
                (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(r)
              );
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: o,
                firstRender: !0,
              }),
              r
            );
          }
          tS(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (e.getDerivedStateFromProps = function (t, e) {
              var n,
                o,
                i = e.children,
                a = e.handleExited;
              return {
                children: e.firstRender
                  ? tE(t.children, function (e) {
                      return (0,
                      r.cloneElement)(e, { onExited: a.bind(null, e), in: !0, appear: tP(e, "appear", t), enter: tP(e, "enter", t), exit: tP(e, "exit", t) });
                    })
                  : (Object.keys(
                      (o = (function (t, e) {
                        function n(n) {
                          return n in e ? e[n] : t[n];
                        }
                        (t = t || {}), (e = e || {});
                        var r,
                          o = Object.create(null),
                          i = [];
                        for (var a in t)
                          a in e
                            ? i.length && ((o[a] = i), (i = []))
                            : i.push(a);
                        var u = {};
                        for (var c in e) {
                          if (o[c])
                            for (r = 0; r < o[c].length; r++) {
                              var l = o[c][r];
                              u[o[c][r]] = n(l);
                            }
                          u[c] = n(c);
                        }
                        for (r = 0; r < i.length; r++) u[i[r]] = n(i[r]);
                        return u;
                      })(i, (n = tE(t.children))))
                    ).forEach(function (e) {
                      var u = o[e];
                      if ((0, r.isValidElement)(u)) {
                        var c = e in i,
                          l = e in n,
                          s = i[e],
                          f = (0, r.isValidElement)(s) && !s.props.in;
                        l && (!c || f)
                          ? (o[e] = (0, r.cloneElement)(u, {
                              onExited: a.bind(null, u),
                              in: !0,
                              exit: tP(u, "exit", t),
                              enter: tP(u, "enter", t),
                            }))
                          : l || !c || f
                          ? l &&
                            c &&
                            (0, r.isValidElement)(s) &&
                            (o[e] = (0, r.cloneElement)(u, {
                              onExited: a.bind(null, u),
                              in: s.props.in,
                              exit: tP(u, "exit", t),
                              enter: tP(u, "enter", t),
                            }))
                          : (o[e] = (0, r.cloneElement)(u, { in: !1 }));
                      }
                    }),
                    o),
                firstRender: !1,
              };
            }),
            (n.handleExited = function (t, e) {
              var n = tE(this.props.children);
              t.key in n ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function (e) {
                    var n = tw({}, e.children);
                    return delete n[t.key], { children: n };
                  }));
            }),
            (n.render = function () {
              var t = this.props,
                e = t.component,
                n = t.childFactory,
                o = tO(t, ["component", "childFactory"]),
                i = this.state.contextValue,
                a = tA(this.state.children).map(n);
              return (delete o.appear,
              delete o.enter,
              delete o.exit,
              null === e)
                ? r.createElement(t_.Provider, { value: i }, a)
                : r.createElement(
                    t_.Provider,
                    { value: i },
                    r.createElement(e, o, a)
                  );
            }),
            e
          );
        })(r.Component);
      (tk.propTypes = {}),
        (tk.defaultProps = {
          component: "div",
          childFactory: function (t) {
            return t;
          },
        });
      var tM = n(54887),
        tT = { disabled: !1 },
        tC = "unmounted",
        tI = "exited",
        tN = "entering",
        tD = "entered",
        tR = "exiting",
        tL = (function (t) {
          function e(e, n) {
            r = t.call(this, e, n) || this;
            var r,
              o,
              i = n && !n.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? i
                  ? ((o = tI), (r.appearStatus = tN))
                  : (o = tD)
                : (o = e.unmountOnExit || e.mountOnEnter ? tC : tI),
              (r.state = { status: o }),
              (r.nextCallback = null),
              r
            );
          }
          tS(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              return t.in && e.status === tC ? { status: tI } : null;
            });
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (t) {
              var e = null;
              if (t !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== tN && n !== tD && (e = tN)
                  : (n === tN || n === tD) && (e = tR);
              }
              this.updateStatus(!1, e);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var t,
                e,
                n,
                r = this.props.timeout;
              return (
                (t = e = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((t = r.exit),
                  (e = r.enter),
                  (n = void 0 !== r.appear ? r.appear : e)),
                { exit: t, enter: e, appear: n }
              );
            }),
            (n.updateStatus = function (t, e) {
              if ((void 0 === t && (t = !1), null !== e)) {
                if ((this.cancelNextCallback(), e === tN)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : tM.findDOMNode(this);
                    n && n.scrollTop;
                  }
                  this.performEnter(t);
                } else this.performExit();
              } else
                this.props.unmountOnExit &&
                  this.state.status === tI &&
                  this.setState({ status: tC });
            }),
            (n.performEnter = function (t) {
              var e = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : t,
                o = this.props.nodeRef ? [r] : [tM.findDOMNode(this), r],
                i = o[0],
                a = o[1],
                u = this.getTimeouts(),
                c = r ? u.appear : u.enter;
              if ((!t && !n) || tT.disabled) {
                this.safeSetState({ status: tD }, function () {
                  e.props.onEntered(i);
                });
                return;
              }
              this.props.onEnter(i, a),
                this.safeSetState({ status: tN }, function () {
                  e.props.onEntering(i, a),
                    e.onTransitionEnd(c, function () {
                      e.safeSetState({ status: tD }, function () {
                        e.props.onEntered(i, a);
                      });
                    });
                });
            }),
            (n.performExit = function () {
              var t = this,
                e = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : tM.findDOMNode(this);
              if (!e || tT.disabled) {
                this.safeSetState({ status: tI }, function () {
                  t.props.onExited(r);
                });
                return;
              }
              this.props.onExit(r),
                this.safeSetState({ status: tR }, function () {
                  t.props.onExiting(r),
                    t.onTransitionEnd(n.exit, function () {
                      t.safeSetState({ status: tI }, function () {
                        t.props.onExited(r);
                      });
                    });
                });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (t, e) {
              (e = this.setNextCallback(e)), this.setState(t, e);
            }),
            (n.setNextCallback = function (t) {
              var e = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (e.nextCallback = null), t(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (t, e) {
              this.setNextCallback(e);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : tM.findDOMNode(this),
                r = null == t && !this.props.addEndListener;
              if (!n || r) {
                setTimeout(this.nextCallback, 0);
                return;
              }
              if (this.props.addEndListener) {
                var o = this.props.nodeRef
                    ? [this.nextCallback]
                    : [n, this.nextCallback],
                  i = o[0],
                  a = o[1];
                this.props.addEndListener(i, a);
              }
              null != t && setTimeout(this.nextCallback, t);
            }),
            (n.render = function () {
              var t = this.state.status;
              if (t === tC) return null;
              var e = this.props,
                n = e.children,
                o =
                  (e.in,
                  e.mountOnEnter,
                  e.unmountOnExit,
                  e.appear,
                  e.enter,
                  e.exit,
                  e.timeout,
                  e.addEndListener,
                  e.onEnter,
                  e.onEntering,
                  e.onEntered,
                  e.onExit,
                  e.onExiting,
                  e.onExited,
                  e.nodeRef,
                  tO(e, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return r.createElement(
                t_.Provider,
                { value: null },
                "function" == typeof n
                  ? n(t, o)
                  : r.cloneElement(r.Children.only(n), o)
              );
            }),
            e
          );
        })(r.Component);
      function tB() {}
      (tL.contextType = t_),
        (tL.propTypes = {}),
        (tL.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: tB,
          onEntering: tB,
          onEntered: tB,
          onExit: tB,
          onExiting: tB,
          onExited: tB,
        }),
        (tL.UNMOUNTED = tC),
        (tL.EXITED = tI),
        (tL.ENTERING = tN),
        (tL.ENTERED = tD),
        (tL.EXITING = tR);
      var tU = ["children", "appearOptions", "enterOptions", "leaveOptions"];
      function tz(t) {
        return (tz =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tF() {
        return (tF = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function t$(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tW(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t$(Object(n), !0).forEach(function (e) {
                tY(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : t$(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function tq(t, e) {
        return (tq = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function tZ(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function tV(t) {
        return (tV = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function tY(t, e, n) {
        return (
          (e = tH(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tH(t) {
        var e = (function (t, e) {
          if ("object" !== tz(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== tz(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === tz(e) ? e : String(e);
      }
      var tX = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.steps,
            n = t.duration;
          return e && e.length
            ? e.reduce(function (t, e) {
                return (
                  t +
                  (Number.isFinite(e.duration) && e.duration > 0
                    ? e.duration
                    : 0)
                );
              }, 0)
            : Number.isFinite(n)
            ? n
            : 0;
        },
        tG = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && tq(t, e);
          })(i, t);
          var e,
            n,
            o =
              ((e = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  n = tV(i);
                return (
                  (t = e
                    ? Reflect.construct(n, arguments, tV(this).constructor)
                    : n.apply(this, arguments)),
                  (function (t, e) {
                    if (e && ("object" === tz(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return tZ(t);
                  })(this, t)
                );
              });
          function i() {
            var t;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, i),
              tY(tZ((t = o.call(this))), "handleEnter", function (e, n) {
                var r = t.props,
                  o = r.appearOptions,
                  i = r.enterOptions;
                t.handleStyleActive(n ? o : i);
              }),
              tY(tZ(t), "handleExit", function () {
                var e = t.props.leaveOptions;
                t.handleStyleActive(e);
              }),
              (t.state = { isActive: !1 }),
              t
            );
          }
          return (
            (n = [
              {
                key: "handleStyleActive",
                value: function (t) {
                  if (t) {
                    var e = t.onAnimationEnd
                      ? function () {
                          t.onAnimationEnd();
                        }
                      : null;
                    this.setState(
                      tW(tW({}, t), {}, { onAnimationEnd: e, isActive: !0 })
                    );
                  }
                },
              },
              {
                key: "parseTimeout",
                value: function () {
                  var t = this.props,
                    e = t.appearOptions,
                    n = t.enterOptions,
                    r = t.leaveOptions;
                  return tX(e) + tX(n) + tX(r);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.children,
                    o =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      (function (t, e) {
                        if (null == t) return {};
                        var n,
                          r,
                          o = (function (t, e) {
                            if (null == t) return {};
                            var n,
                              r,
                              o = {},
                              i = Object.keys(t);
                            for (r = 0; r < i.length; r++)
                              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o;
                          })(t, e);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]),
                              !(e.indexOf(n) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  n
                                ) &&
                                (o[n] = t[n]);
                        }
                        return o;
                      })(e, tU));
                  return r.createElement(
                    tL,
                    tF({}, o, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout(),
                    }),
                    function () {
                      return r.createElement(tx, t.state, r.Children.only(n));
                    }
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, tH(r.key), r);
              }
            })(i.prototype, n),
            Object.defineProperty(i, "prototype", { writable: !1 }),
            i
          );
        })(r.Component);
      function tK(t) {
        var e = t.component,
          n = t.children,
          o = t.appear,
          i = t.enter,
          a = t.leave;
        return r.createElement(
          tk,
          { component: e },
          r.Children.map(n, function (t, e) {
            return r.createElement(
              tG,
              {
                appearOptions: o,
                enterOptions: i,
                leaveOptions: a,
                key: "child-".concat(e),
              },
              t
            );
          })
        );
      }
      (tG.propTypes = {
        appearOptions: i().object,
        enterOptions: i().object,
        leaveOptions: i().object,
        children: i().element,
      }),
        (tK.propTypes = {
          appear: i().object,
          enter: i().object,
          leave: i().object,
          children: i().oneOfType([i().array, i().element]),
          component: i().any,
        }),
        (tK.defaultProps = { component: "span" });
      var tJ = tx;
    },
    72069: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return nT;
        },
      });
      var r,
        o,
        i,
        a,
        u,
        c,
        l,
        s,
        f,
        p,
        d,
        h,
        y,
        v,
        m = n(2265),
        g = n(49972),
        b = n.n(g),
        x = n(14380),
        O = n.n(x),
        w = n(37105),
        j = n.n(w),
        S = n(97019),
        _ = n.n(S),
        E = n(60229),
        P = n.n(E),
        A = n(48527),
        k = n.n(A),
        M = n(44839),
        T = n(59811),
        C = n(26599),
        I = n(64256),
        N = n(85475),
        D = n(20153),
        R = n(91488),
        L = n(92705);
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var U = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.r,
            o = t.className,
            i = (0, M.Z)("recharts-dot", o);
          return e === +e && n === +n && r === +r
            ? m.createElement(
                "circle",
                B({}, (0, L.L6)(t, !1), (0, R.Ym)(t), {
                  className: i,
                  cx: e,
                  cy: n,
                  r: r,
                })
              )
            : null;
        },
        z = n(90554),
        F = n(47298),
        $ = n(11078),
        W = n(4964),
        q = n(6779);
      function Z(t) {
        return (Z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function V(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(Object(n), !0).forEach(function (e) {
                H(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function H(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" != Z(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != Z(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == Z(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var X = ["Webkit", "Moz", "O", "ms"],
        G = function (t, e) {
          if (!t) return null;
          var n = t.replace(/(\w)/, function (t) {
              return t.toUpperCase();
            }),
            r = X.reduce(function (t, r) {
              return Y(Y({}, t), {}, H({}, r + n, e));
            }, {});
          return (r[t] = e), r;
        };
      function K(t) {
        return (K =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function J() {
        return (J = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function Q(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Q(Object(n), !0).forEach(function (e) {
                ta(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function te(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, tu(r.key), r);
        }
      }
      function tn() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (tn = function () {
          return !!t;
        })();
      }
      function tr(t) {
        return (tr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function to(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ti(t, e) {
        return (ti = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function ta(t, e, n) {
        return (
          (e = tu(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tu(t) {
        var e = (function (t, e) {
          if ("object" != K(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != K(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == K(e) ? e : String(e);
      }
      var tc = function (t) {
          var e = t.data,
            n = t.startIndex,
            r = t.endIndex,
            o = t.x,
            i = t.width,
            a = t.travellerWidth;
          if (!e || !e.length) return {};
          var u = e.length,
            c = (0, F.x)()
              .domain(j()(0, u))
              .range([o, o + i - a]),
            l = c.domain().map(function (t) {
              return c(t);
            });
          return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            isTravellerFocused: !1,
            startX: c(n),
            endX: c(r),
            scale: c,
            scaleValues: l,
          };
        },
        tl = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        ts = (function (t) {
          var e, n;
          function r(t) {
            var e, n, o;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, r),
              (n = r),
              (o = [t]),
              (n = tr(n)),
              (e = (function (t, e) {
                if (e && ("object" === K(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return to(t);
              })(
                this,
                tn()
                  ? Reflect.construct(n, o || [], tr(this).constructor)
                  : n.apply(this, o)
              )),
              ta(to(e), "handleDrag", function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }),
              ta(to(e), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              ta(to(e), "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      n = t.endIndex,
                      r = t.onDragEnd,
                      o = t.startIndex;
                    null == r || r({ endIndex: n, startIndex: o });
                  }
                ),
                  e.detachDragEndListener();
              }),
              ta(to(e), "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut
                  ));
              }),
              ta(to(e), "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              ta(to(e), "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              ta(to(e), "handleSlideDragStart", function (t) {
                var n = tl(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: n.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(to(e), "startX"),
                endX: e.handleTravellerDragStart.bind(to(e), "endX"),
              }),
              (e.state = {}),
              e
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && ti(t, e);
            })(r, t),
            (e = [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.leaveTimer &&
                    (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                    this.detachDragEndListener();
                },
              },
              {
                key: "getIndex",
                value: function (t) {
                  var e = t.startX,
                    n = t.endX,
                    o = this.state.scaleValues,
                    i = this.props,
                    a = i.gap,
                    u = i.data.length - 1,
                    c = r.getIndexInRange(o, Math.min(e, n)),
                    l = r.getIndexInRange(o, Math.max(e, n));
                  return {
                    startIndex: c - (c % a),
                    endIndex: l === u ? u : l - (l % a),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    n = e.data,
                    r = e.tickFormatter,
                    o = e.dataKey,
                    i = (0, W.F$)(n[t], o, t);
                  return O()(r) ? r(i, t) : i;
                },
              },
              {
                key: "attachDragEndListener",
                value: function () {
                  window.addEventListener("mouseup", this.handleDragEnd, !0),
                    window.addEventListener("touchend", this.handleDragEnd, !0),
                    window.addEventListener("mousemove", this.handleDrag, !0);
                },
              },
              {
                key: "detachDragEndListener",
                value: function () {
                  window.removeEventListener("mouseup", this.handleDragEnd, !0),
                    window.removeEventListener(
                      "touchend",
                      this.handleDragEnd,
                      !0
                    ),
                    window.removeEventListener(
                      "mousemove",
                      this.handleDrag,
                      !0
                    );
                },
              },
              {
                key: "handleSlideDrag",
                value: function (t) {
                  var e = this.state,
                    n = e.slideMoveStartX,
                    r = e.startX,
                    o = e.endX,
                    i = this.props,
                    a = i.x,
                    u = i.width,
                    c = i.travellerWidth,
                    l = i.startIndex,
                    s = i.endIndex,
                    f = i.onChange,
                    p = t.pageX - n;
                  p > 0
                    ? (p = Math.min(p, a + u - c - o, a + u - c - r))
                    : p < 0 && (p = Math.max(p, a - r, a - o));
                  var d = this.getIndex({ startX: r + p, endX: o + p });
                  (d.startIndex !== l || d.endIndex !== s) && f && f(d),
                    this.setState({
                      startX: r + p,
                      endX: o + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var n = tl(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: n.pageX,
                  }),
                    this.attachDragEndListener();
                },
              },
              {
                key: "handleTravellerMove",
                value: function (t) {
                  var e = this.state,
                    n = e.brushMoveStartX,
                    r = e.movingTravellerId,
                    o = e.endX,
                    i = e.startX,
                    a = this.state[r],
                    u = this.props,
                    c = u.x,
                    l = u.width,
                    s = u.travellerWidth,
                    f = u.onChange,
                    p = u.gap,
                    d = u.data,
                    h = { startX: this.state.startX, endX: this.state.endX },
                    y = t.pageX - n;
                  y > 0
                    ? (y = Math.min(y, c + l - s - a))
                    : y < 0 && (y = Math.max(y, c - a)),
                    (h[r] = a + y);
                  var v = this.getIndex(h),
                    m = v.startIndex,
                    g = v.endIndex,
                    b = function () {
                      var t = d.length - 1;
                      return (
                        ("startX" === r && (o > i ? m % p == 0 : g % p == 0)) ||
                        (o < i && g === t) ||
                        ("endX" === r && (o > i ? g % p == 0 : m % p == 0)) ||
                        (o > i && g === t)
                      );
                    };
                  this.setState(
                    ta(ta({}, r, a + y), "brushMoveStartX", t.pageX),
                    function () {
                      f && b() && f(v);
                    }
                  );
                },
              },
              {
                key: "handleTravellerMoveKeyboard",
                value: function (t, e) {
                  var n = this,
                    r = this.state,
                    o = r.scaleValues,
                    i = r.startX,
                    a = r.endX,
                    u = this.state[e],
                    c = o.indexOf(u);
                  if (-1 !== c) {
                    var l = c + t;
                    if (-1 !== l && !(l >= o.length)) {
                      var s = o[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= i) ||
                        this.setState(ta({}, e, s), function () {
                          n.props.onChange(
                            n.getIndex({
                              startX: n.state.startX,
                              endX: n.state.endX,
                            })
                          );
                        });
                    }
                  }
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    r = t.width,
                    o = t.height,
                    i = t.fill,
                    a = t.stroke;
                  return m.createElement("rect", {
                    stroke: a,
                    fill: i,
                    x: e,
                    y: n,
                    width: r,
                    height: o,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    r = t.width,
                    o = t.height,
                    i = t.data,
                    a = t.children,
                    u = t.padding,
                    c = m.Children.only(a);
                  return c
                    ? m.cloneElement(c, {
                        x: e,
                        y: n,
                        width: r,
                        height: o,
                        margin: u,
                        compact: !0,
                        data: i,
                      })
                    : null;
                },
              },
              {
                key: "renderTravellerLayer",
                value: function (t, e) {
                  var n,
                    o,
                    i = this,
                    a = this.props,
                    u = a.y,
                    c = a.travellerWidth,
                    l = a.height,
                    s = a.traveller,
                    f = a.ariaLabel,
                    p = a.data,
                    d = a.startIndex,
                    h = a.endIndex,
                    y = Math.max(t, this.props.x),
                    v = tt(
                      tt({}, (0, L.L6)(this.props, !1)),
                      {},
                      { x: y, y: u, width: c, height: l }
                    ),
                    g =
                      f ||
                      "Min value: "
                        .concat(
                          null === (n = p[d]) || void 0 === n ? void 0 : n.name,
                          ", Max value: "
                        )
                        .concat(
                          null === (o = p[h]) || void 0 === o ? void 0 : o.name
                        );
                  return m.createElement(
                    I.m,
                    {
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": g,
                      "aria-valuenow": t,
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[e],
                      onTouchStart: this.travellerDragStartHandlers[e],
                      onKeyDown: function (t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          i.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            e
                          ));
                      },
                      onFocus: function () {
                        i.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        i.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: "col-resize" },
                    },
                    r.renderTraveller(s, v)
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var n = this.props,
                    r = n.y,
                    o = n.height,
                    i = n.stroke,
                    a = n.travellerWidth;
                  return m.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: "move" },
                    stroke: "none",
                    fill: i,
                    fillOpacity: 0.2,
                    x: Math.min(t, e) + a,
                    y: r,
                    width: Math.max(Math.abs(e - t) - a, 0),
                    height: o,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    n = t.endIndex,
                    r = t.y,
                    o = t.height,
                    i = t.travellerWidth,
                    a = t.stroke,
                    u = this.state,
                    c = u.startX,
                    l = u.endX,
                    s = { pointerEvents: "none", fill: a };
                  return m.createElement(
                    I.m,
                    { className: "recharts-brush-texts" },
                    m.createElement(
                      $.x,
                      J(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(c, l) - 5,
                          y: r + o / 2,
                        },
                        s
                      ),
                      this.getTextOfTick(e)
                    ),
                    m.createElement(
                      $.x,
                      J(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(c, l) + i + 5,
                          y: r + o / 2,
                        },
                        s
                      ),
                      this.getTextOfTick(n)
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    n = t.className,
                    r = t.children,
                    o = t.x,
                    i = t.y,
                    a = t.width,
                    u = t.height,
                    c = t.alwaysShowText,
                    l = this.state,
                    s = l.startX,
                    f = l.endX,
                    p = l.isTextActive,
                    d = l.isSlideMoving,
                    h = l.isTravellerMoving,
                    y = l.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, q.hj)(o) ||
                    !(0, q.hj)(i) ||
                    !(0, q.hj)(a) ||
                    !(0, q.hj)(u) ||
                    a <= 0 ||
                    u <= 0
                  )
                    return null;
                  var v = (0, M.Z)("recharts-brush", n),
                    g = 1 === m.Children.count(r),
                    b = G("userSelect", "none");
                  return m.createElement(
                    I.m,
                    {
                      className: v,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: b,
                    },
                    this.renderBackground(),
                    g && this.renderPanorama(),
                    this.renderSlide(s, f),
                    this.renderTravellerLayer(s, "startX"),
                    this.renderTravellerLayer(f, "endX"),
                    (p || d || h || y || c) && this.renderText()
                  );
                },
              },
            ]),
            (n = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    r = t.width,
                    o = t.height,
                    i = t.stroke,
                    a = Math.floor(n + o / 2) - 1;
                  return m.createElement(
                    m.Fragment,
                    null,
                    m.createElement("rect", {
                      x: e,
                      y: n,
                      width: r,
                      height: o,
                      fill: i,
                      stroke: "none",
                    }),
                    m.createElement("line", {
                      x1: e + 1,
                      y1: a,
                      x2: e + r - 1,
                      y2: a,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    m.createElement("line", {
                      x1: e + 1,
                      y1: a + 2,
                      x2: e + r - 1,
                      y2: a + 2,
                      fill: "none",
                      stroke: "#fff",
                    })
                  );
                },
              },
              {
                key: "renderTraveller",
                value: function (t, e) {
                  return m.isValidElement(t)
                    ? m.cloneElement(t, e)
                    : O()(t)
                    ? t(e)
                    : r.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var n = t.data,
                    r = t.width,
                    o = t.x,
                    i = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (n !== e.prevData || a !== e.prevUpdateId)
                    return tt(
                      {
                        prevData: n,
                        prevTravellerWidth: i,
                        prevUpdateId: a,
                        prevX: o,
                        prevWidth: r,
                      },
                      n && n.length
                        ? tc({
                            data: n,
                            width: r,
                            x: o,
                            travellerWidth: i,
                            startIndex: u,
                            endIndex: c,
                          })
                        : { scale: null, scaleValues: null }
                    );
                  if (
                    e.scale &&
                    (r !== e.prevWidth ||
                      o !== e.prevX ||
                      i !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([o, o + r - i]);
                    var l = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: n,
                      prevTravellerWidth: i,
                      prevUpdateId: a,
                      prevX: o,
                      prevWidth: r,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: l,
                    };
                  }
                  return null;
                },
              },
              {
                key: "getIndexInRange",
                value: function (t, e) {
                  for (var n = t.length, r = 0, o = n - 1; o - r > 1; ) {
                    var i = Math.floor((r + o) / 2);
                    t[i] > e ? (o = i) : (r = i);
                  }
                  return e >= t[o] ? o : r;
                },
              },
            ]),
            e && te(r.prototype, e),
            n && te(r, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(m.PureComponent);
      ta(ts, "displayName", "Brush"),
        ta(ts, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var tf = n(87097),
        tp = n(12171),
        td = n(96581),
        th = function (t, e) {
          var n = t.alwaysShow,
            r = t.ifOverflow;
          return n && (r = "extendDomain"), r === e;
        },
        ty = n(47759),
        tv = n.n(ty),
        tm = n(55118),
        tg = n.n(tm);
      function tb(t) {
        return (tb =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tx(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, tS(r.key), r);
        }
      }
      function tO(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tw(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tO(Object(n), !0).forEach(function (e) {
                tj(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tO(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function tj(t, e, n) {
        return (
          (e = tS(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function tS(t) {
        var e = (function (t, e) {
          if ("object" != tb(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != tb(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tb(e) ? e : String(e);
      }
      var t_ = function (t, e) {
          var n = t.x,
            r = t.y,
            o = e.x,
            i = e.y;
          return {
            x: Math.min(n, o),
            y: Math.min(r, i),
            width: Math.abs(o - n),
            height: Math.abs(i - r),
          };
        },
        tE = (function () {
          var t, e;
          function n(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              (this.scale = t);
          }
          return (
            (t = [
              {
                key: "domain",
                get: function () {
                  return this.scale.domain;
                },
              },
              {
                key: "range",
                get: function () {
                  return this.scale.range;
                },
              },
              {
                key: "rangeMin",
                get: function () {
                  return this.range()[0];
                },
              },
              {
                key: "rangeMax",
                get: function () {
                  return this.range()[1];
                },
              },
              {
                key: "bandwidth",
                get: function () {
                  return this.scale.bandwidth;
                },
              },
              {
                key: "apply",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e.bandAware,
                    r = e.position;
                  if (void 0 !== t) {
                    if (r)
                      switch (r) {
                        case "start":
                        default:
                          return this.scale(t);
                        case "middle":
                          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + o;
                        case "end":
                          var i = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + i;
                      }
                    if (n) {
                      var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(t) + a;
                    }
                    return this.scale(t);
                  }
                },
              },
              {
                key: "isInRange",
                value: function (t) {
                  var e = this.range(),
                    n = e[0],
                    r = e[e.length - 1];
                  return n <= r ? t >= n && t <= r : t >= r && t <= n;
                },
              },
            ]),
            (e = [
              {
                key: "create",
                value: function (t) {
                  return new n(t);
                },
              },
            ]),
            t && tx(n.prototype, t),
            e && tx(n, e),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })();
      tj(tE, "EPS", 1e-4);
      var tP = function (t) {
          var e = Object.keys(t).reduce(function (e, n) {
            return tw(tw({}, e), {}, tj({}, n, tE.create(t[n])));
          }, {});
          return tw(
            tw({}, e),
            {},
            {
              apply: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = n.bandAware,
                  o = n.position;
                return tv()(t, function (t, n) {
                  return e[n].apply(t, { bandAware: r, position: o });
                });
              },
              isInRange: function (t) {
                return tg()(t, function (t, n) {
                  return e[n].isInRange(t);
                });
              },
            }
          );
        },
        tA = n(83565);
      function tk(t) {
        return (tk =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tM() {
        return (tM = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function tT(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tC(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tT(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != tk(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != tk(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == tk(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tT(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var tI = function (t) {
        var e = t.x,
          n = t.y,
          r = t.xAxis,
          o = t.yAxis,
          i = tP({ x: r.scale, y: o.scale }),
          a = i.apply({ x: e, y: n }, { bandAware: !0 });
        return th(t, "discard") && !i.isInRange(a) ? null : a;
      };
      function tN(t) {
        var e = t.x,
          n = t.y,
          r = t.r,
          o = t.alwaysShow,
          i = t.clipPathId,
          a = (0, q.P2)(e),
          u = (0, q.P2)(n);
        if (
          ((0, tA.Z)(
            void 0 === o,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
          ),
          !a || !u)
        )
          return null;
        var c = tI(t);
        if (!c) return null;
        var l = c.x,
          s = c.y,
          f = t.shape,
          p = t.className,
          d = tC(
            tC(
              { clipPath: th(t, "hidden") ? "url(#".concat(i, ")") : void 0 },
              (0, L.L6)(t, !0)
            ),
            {},
            { cx: l, cy: s }
          );
        return m.createElement(
          I.m,
          { className: (0, M.Z)("recharts-reference-dot", p) },
          tN.renderDot(f, d),
          td._.renderCallByParent(t, {
            x: l - r,
            y: s - r,
            width: 2 * r,
            height: 2 * r,
          })
        );
      }
      (tN.displayName = "ReferenceDot"),
        (tN.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#fff",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
        }),
        (tN.renderDot = function (t, e) {
          return m.isValidElement(t)
            ? m.cloneElement(t, e)
            : O()(t)
            ? t(e)
            : m.createElement(
                U,
                tM({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                })
              );
        });
      var tD = n(13632),
        tR = n.n(tD);
      n(80203);
      var tL = n(89830),
        tB = n.n(tL)()(
          function (t) {
            return { x: t.left, y: t.top, width: t.width, height: t.height };
          },
          function (t) {
            return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join(
              ""
            );
          }
        ),
        tU = (0, m.createContext)(void 0),
        tz = (0, m.createContext)(void 0),
        tF = (0, m.createContext)(void 0),
        t$ = (0, m.createContext)({}),
        tW = (0, m.createContext)(void 0),
        tq = (0, m.createContext)(0),
        tZ = (0, m.createContext)(0),
        tV = function (t) {
          var e = t.state,
            n = e.xAxisMap,
            r = e.yAxisMap,
            o = e.offset,
            i = t.clipPathId,
            a = t.children,
            u = t.width,
            c = t.height,
            l = tB(o);
          return m.createElement(
            tU.Provider,
            { value: n },
            m.createElement(
              tz.Provider,
              { value: r },
              m.createElement(
                t$.Provider,
                { value: o },
                m.createElement(
                  tF.Provider,
                  { value: l },
                  m.createElement(
                    tW.Provider,
                    { value: i },
                    m.createElement(
                      tq.Provider,
                      { value: c },
                      m.createElement(tZ.Provider, { value: u }, a)
                    )
                  )
                )
              )
            )
          );
        },
        tY = function (t) {
          var e = (0, m.useContext)(tU);
          null != e || (0, T.Z)(!1);
          var n = e[t];
          return null != n || (0, T.Z)(!1), n;
        },
        tH = function (t) {
          var e = (0, m.useContext)(tz);
          null != e || (0, T.Z)(!1);
          var n = e[t];
          return null != n || (0, T.Z)(!1), n;
        };
      function tX(t) {
        return (tX =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tG(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tK(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tG(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != tX(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != tX(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == tX(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : tG(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function tJ(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function tQ() {
        return (tQ = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var t0 = function (t, e, n, r, o, i, a, u, c) {
        var l = o.x,
          s = o.y,
          f = o.width,
          p = o.height;
        if (n) {
          var d = c.y,
            h = t.y.apply(d, { position: i });
          if (th(c, "discard") && !t.y.isInRange(h)) return null;
          var y = [
            { x: l + f, y: h },
            { x: l, y: h },
          ];
          return "left" === u ? y.reverse() : y;
        }
        if (e) {
          var v = c.x,
            m = t.x.apply(v, { position: i });
          if (th(c, "discard") && !t.x.isInRange(m)) return null;
          var g = [
            { x: m, y: s + p },
            { x: m, y: s },
          ];
          return "top" === a ? g.reverse() : g;
        }
        if (r) {
          var b = c.segment.map(function (e) {
            return t.apply(e, { position: i });
          });
          return th(c, "discard") &&
            tR()(b, function (e) {
              return !t.isInRange(e);
            })
            ? null
            : b;
        }
        return null;
      };
      function t1(t) {
        var e,
          n,
          r,
          o = t.x,
          i = t.y,
          a = t.segment,
          u = t.xAxisId,
          c = t.yAxisId,
          l = t.shape,
          s = t.className,
          f = t.alwaysShow,
          p = (0, m.useContext)(tW),
          d = tY(u),
          h = tH(c),
          y = (0, m.useContext)(tF);
        if (!p || !y) return null;
        (0, tA.Z)(
          void 0 === f,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var v = t0(
          tP({ x: d.scale, y: h.scale }),
          (0, q.P2)(o),
          (0, q.P2)(i),
          a && 2 === a.length,
          y,
          t.position,
          d.orientation,
          h.orientation,
          t
        );
        if (!v) return null;
        var g =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(v) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i,
                  a,
                  u = [],
                  c = !0,
                  l = !1;
                try {
                  for (
                    i = (n = n.call(t)).next;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), 2 !== u.length);
                    c = !0
                  );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !c &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return u;
              }
            })(v, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return tJ(t, 2);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return tJ(t, 2);
              }
            })(v, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          b = g[0],
          x = b.x,
          w = b.y,
          j = g[1],
          S = j.x,
          _ = j.y,
          E = tK(
            tK(
              { clipPath: th(t, "hidden") ? "url(#".concat(p, ")") : void 0 },
              (0, L.L6)(t, !0)
            ),
            {},
            { x1: x, y1: w, x2: S, y2: _ }
          );
        return m.createElement(
          I.m,
          { className: (0, M.Z)("recharts-reference-line", s) },
          ((e = l),
          (n = E),
          m.isValidElement(e)
            ? m.cloneElement(e, n)
            : O()(e)
            ? e(n)
            : m.createElement(
                "line",
                tQ({}, n, { className: "recharts-reference-line-line" })
              )),
          td._.renderCallByParent(
            t,
            t_(
              { x: (r = { x1: x, y1: w, x2: S, y2: _ }).x1, y: r.y1 },
              { x: r.x2, y: r.y2 }
            )
          )
        );
      }
      function t2(t) {
        return (t2 =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function t3() {
        return (t3 = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function t4(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function t6(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t4(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != t2(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != t2(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == t2(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : t4(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      (t1.displayName = "ReferenceLine"),
        (t1.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          fill: "none",
          stroke: "#ccc",
          fillOpacity: 1,
          strokeWidth: 1,
          position: "middle",
        });
      var t5 = function (t, e, n, r, o) {
        var i = o.x1,
          a = o.x2,
          u = o.y1,
          c = o.y2,
          l = o.xAxis,
          s = o.yAxis;
        if (!l || !s) return null;
        var f = tP({ x: l.scale, y: s.scale }),
          p = {
            x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
            y: n ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
          },
          d = {
            x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
            y: r ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
          };
        return !th(o, "discard") || (f.isInRange(p) && f.isInRange(d))
          ? t_(p, d)
          : null;
      };
      function t7(t) {
        var e = t.x1,
          n = t.x2,
          r = t.y1,
          o = t.y2,
          i = t.className,
          a = t.alwaysShow,
          u = t.clipPathId;
        (0, tA.Z)(
          void 0 === a,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
        );
        var c = (0, q.P2)(e),
          l = (0, q.P2)(n),
          s = (0, q.P2)(r),
          f = (0, q.P2)(o),
          p = t.shape;
        if (!c && !l && !s && !f && !p) return null;
        var d = t5(c, l, s, f, t);
        if (!d && !p) return null;
        var h = th(t, "hidden") ? "url(#".concat(u, ")") : void 0;
        return m.createElement(
          I.m,
          { className: (0, M.Z)("recharts-reference-area", i) },
          t7.renderRect(p, t6(t6({ clipPath: h }, (0, L.L6)(t, !0)), d)),
          td._.renderCallByParent(t, d)
        );
      }
      function t8(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t9(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return t9(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return t9(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function t9(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      (t7.displayName = "ReferenceArea"),
        (t7.defaultProps = {
          isFront: !1,
          ifOverflow: "discard",
          xAxisId: 0,
          yAxisId: 0,
          r: 10,
          fill: "#ccc",
          fillOpacity: 0.5,
          stroke: "none",
          strokeWidth: 1,
        }),
        (t7.renderRect = function (t, e) {
          return m.isValidElement(t)
            ? m.cloneElement(t, e)
            : O()(t)
            ? t(e)
            : m.createElement(
                z.A,
                t3({}, e, { className: "recharts-reference-area-rect" })
              );
        });
      var et = function (t, e, n, r, o) {
          var i = (0, L.NN)(t, t1),
            a = (0, L.NN)(t, tN),
            u = [].concat(t8(i), t8(a)),
            c = (0, L.NN)(t, t7),
            l = "".concat(r, "Id"),
            s = r[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === n &&
                  th(e.props, "extendDomain") &&
                  (0, q.hj)(e.props[s])
                ) {
                  var r = e.props[s];
                  return [Math.min(t[0], r), Math.max(t[1], r)];
                }
                return t;
              }, f)),
            c.length)
          ) {
            var p = "".concat(s, "1"),
              d = "".concat(s, "2");
            f = c.reduce(function (t, e) {
              if (
                e.props[l] === n &&
                th(e.props, "extendDomain") &&
                (0, q.hj)(e.props[p]) &&
                (0, q.hj)(e.props[d])
              ) {
                var r = e.props[p],
                  o = e.props[d];
                return [Math.min(t[0], r, o), Math.max(t[1], r, o)];
              }
              return t;
            }, f);
          }
          return (
            o &&
              o.length &&
              (f = o.reduce(function (t, e) {
                return (0, q.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        ee = n(48500),
        en = n(62857),
        er = n(37836),
        eo = new (n.n(er)())(),
        ei = "recharts.syncMouseEvents";
      function ea(t) {
        return (ea =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function eu(t, e, n) {
        return (
          (e = ec(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ec(t) {
        var e = (function (t, e) {
          if ("object" != ea(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != ea(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ea(e) ? e : String(e);
      }
      var el = (function () {
          var t;
          function e() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              eu(this, "activeIndex", 0),
              eu(this, "coordinateList", []),
              eu(this, "layout", "horizontal");
          }
          return (
            (t = [
              {
                key: "setDetails",
                value: function (t) {
                  var e,
                    n = t.coordinateList,
                    r = void 0 === n ? null : n,
                    o = t.container,
                    i = void 0 === o ? null : o,
                    a = t.layout,
                    u = void 0 === a ? null : a,
                    c = t.offset,
                    l = void 0 === c ? null : c,
                    s = t.mouseHandlerCallback,
                    f = void 0 === s ? null : s;
                  (this.coordinateList =
                    null !== (e = null != r ? r : this.coordinateList) &&
                    void 0 !== e
                      ? e
                      : []),
                    (this.container = null != i ? i : this.container),
                    (this.layout = null != u ? u : this.layout),
                    (this.offset = null != l ? l : this.offset),
                    (this.mouseHandlerCallback =
                      null != f ? f : this.mouseHandlerCallback),
                    (this.activeIndex = Math.min(
                      Math.max(this.activeIndex, 0),
                      this.coordinateList.length - 1
                    ));
                },
              },
              {
                key: "focus",
                value: function () {
                  this.spoofMouse();
                },
              },
              {
                key: "keyboardEvent",
                value: function (t) {
                  if (0 !== this.coordinateList.length)
                    switch (t.key) {
                      case "ArrowRight":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.min(
                          this.activeIndex + 1,
                          this.coordinateList.length - 1
                        )),
                          this.spoofMouse();
                        break;
                      case "ArrowLeft":
                        if ("horizontal" !== this.layout) return;
                        (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                          this.spoofMouse();
                    }
                },
              },
              {
                key: "setIndex",
                value: function (t) {
                  this.activeIndex = t;
                },
              },
              {
                key: "spoofMouse",
                value: function () {
                  if (
                    "horizontal" === this.layout &&
                    0 !== this.coordinateList.length
                  ) {
                    var t,
                      e,
                      n = this.container.getBoundingClientRect(),
                      r = n.x,
                      o = n.y,
                      i = n.height,
                      a = this.coordinateList[this.activeIndex].coordinate,
                      u =
                        (null === (t = window) || void 0 === t
                          ? void 0
                          : t.scrollX) || 0,
                      c =
                        (null === (e = window) || void 0 === e
                          ? void 0
                          : e.scrollY) || 0,
                      l = o + this.offset.top + i / 2 + c;
                    this.mouseHandlerCallback({ pageX: r + a + u, pageY: l });
                  }
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, ec(r.key), r);
              }
            })(e.prototype, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(),
        es = n(32641),
        ef = n(7362);
      function ep(t) {
        return (ep =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var ed = ["x", "y", "top", "left", "width", "height", "className"];
      function eh() {
        return (eh = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function ey(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var ev = function (t) {
        var e = t.x,
          n = void 0 === e ? 0 : e,
          r = t.y,
          o = void 0 === r ? 0 : r,
          i = t.top,
          a = void 0 === i ? 0 : i,
          u = t.left,
          c = void 0 === u ? 0 : u,
          l = t.width,
          s = void 0 === l ? 0 : l,
          f = t.height,
          p = void 0 === f ? 0 : f,
          d = t.className,
          h = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? ey(Object(n), !0).forEach(function (e) {
                    var r, o;
                    (r = e),
                      (o = n[e]),
                      (r = (function (t) {
                        var e = (function (t, e) {
                          if ("object" != ep(t) || !t) return t;
                          var n = t[Symbol.toPrimitive];
                          if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != ep(r)) return r;
                            throw TypeError(
                              "@@toPrimitive must return a primitive value."
                            );
                          }
                          return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" == ep(e) ? e : String(e);
                      })(r)) in t
                        ? Object.defineProperty(t, r, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[r] = o);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : ey(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            { x: n, y: o, top: a, left: c, width: s, height: p },
            (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    !(e.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]);
              }
              return o;
            })(t, ed)
          );
        return (0, q.hj)(n) &&
          (0, q.hj)(o) &&
          (0, q.hj)(s) &&
          (0, q.hj)(p) &&
          (0, q.hj)(a) &&
          (0, q.hj)(c)
          ? m.createElement(
              "path",
              eh({}, (0, L.L6)(h, !0), {
                className: (0, M.Z)("recharts-cross", d),
                d: "M"
                  .concat(n, ",")
                  .concat(a, "v")
                  .concat(p, "M")
                  .concat(c, ",")
                  .concat(o, "h")
                  .concat(s),
              })
            )
          : null;
      };
      function em(t) {
        var e = t.cx,
          n = t.cy,
          r = t.radius,
          o = t.startAngle,
          i = t.endAngle;
        return {
          points: [(0, ee.op)(e, n, r, o), (0, ee.op)(e, n, r, i)],
          cx: e,
          cy: n,
          radius: r,
          startAngle: o,
          endAngle: i,
        };
      }
      var eg = n(79130);
      function eb(t) {
        return (eb =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ex(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eO(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ex(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != eb(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != eb(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == eb(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ex(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function ew(t) {
        var e,
          n,
          r = t.element,
          o = t.tooltipEventType,
          i = t.isActive,
          a = t.activeCoordinate,
          u = t.activePayload,
          c = t.offset,
          l = t.activeTooltipIndex,
          s = t.tooltipAxisBandSize,
          f = t.layout,
          p = t.chartName;
        if (
          !r ||
          !r.props.cursor ||
          !i ||
          !a ||
          ("ScatterChart" !== p && "axis" !== o)
        )
          return null;
        var d = ef.H;
        if ("ScatterChart" === p) (n = a), (d = ev);
        else if ("BarChart" === p)
          (e = s / 2),
            (n = {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === f ? a.x - e : c.left + 0.5,
              y: "horizontal" === f ? c.top + 0.5 : a.y - e,
              width: "horizontal" === f ? s : c.width - 1,
              height: "horizontal" === f ? c.height - 1 : s,
            }),
            (d = z.A);
        else if ("radial" === f) {
          var h = em(a),
            y = h.cx,
            v = h.cy,
            g = h.radius;
          (n = {
            cx: y,
            cy: v,
            startAngle: h.startAngle,
            endAngle: h.endAngle,
            innerRadius: g,
            outerRadius: g,
          }),
            (d = eg.L);
        } else
          (n = {
            points: (function (t, e, n) {
              var r, o, i, a;
              if ("horizontal" === t)
                (i = r = e.x), (o = n.top), (a = n.top + n.height);
              else if ("vertical" === t)
                (a = o = e.y), (r = n.left), (i = n.left + n.width);
              else if (null != e.cx && null != e.cy) {
                if ("centric" !== t) return em(e);
                var u = e.cx,
                  c = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.angle,
                  p = (0, ee.op)(u, c, l, f),
                  d = (0, ee.op)(u, c, s, f);
                (r = p.x), (o = p.y), (i = d.x), (a = d.y);
              }
              return [
                { x: r, y: o },
                { x: i, y: a },
              ];
            })(f, a, c),
          }),
            (d = ef.H);
        var b = eO(
          eO(
            eO(eO({ stroke: "#ccc", pointerEvents: "none" }, c), n),
            (0, L.L6)(r.props.cursor, !1)
          ),
          {},
          {
            payload: u,
            payloadIndex: l,
            className: (0, M.Z)(
              "recharts-tooltip-cursor",
              r.props.cursor.className
            ),
          }
        );
        return (0, m.isValidElement)(r.props.cursor)
          ? (0, m.cloneElement)(r.props.cursor, b)
          : (0, m.createElement)(d, b);
      }
      var ej = ["item"],
        eS = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function e_(t) {
        return (e_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function eE() {
        return (eE = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function eP(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          eN(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function eA(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]);
        }
        return o;
      }
      function ek() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (ek = function () {
          return !!t;
        })();
      }
      function eM(t) {
        return (eM = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function eT(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function eC(t, e) {
        return (eC = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function eI(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return eD(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          eN(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function eN(t, e) {
        if (t) {
          if ("string" == typeof t) return eD(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return eD(t, e);
        }
      }
      function eD(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function eR(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eL(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? eR(Object(n), !0).forEach(function (e) {
                eB(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : eR(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function eB(t, e, n) {
        return (
          (e = eU(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function eU(t) {
        var e = (function (t, e) {
          if ("object" != e_(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != e_(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == e_(e) ? e : String(e);
      }
      var ez = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        eF = { width: "100%", height: "100%" },
        e$ = { x: 0, y: 0 };
      function eW(t) {
        return t;
      }
      var eq = function (t, e, n, r) {
          var o = e.find(function (t) {
            return t && t.index === n;
          });
          if (o) {
            if ("horizontal" === t) return { x: o.coordinate, y: r.y };
            if ("vertical" === t) return { x: r.x, y: o.coordinate };
            if ("centric" === t) {
              var i = o.coordinate,
                a = r.radius;
              return eL(
                eL(eL({}, r), (0, ee.op)(r.cx, r.cy, a, i)),
                {},
                { angle: i, radius: a }
              );
            }
            var u = o.coordinate,
              c = r.angle;
            return eL(
              eL(eL({}, r), (0, ee.op)(r.cx, r.cy, u, c)),
              {},
              { angle: c, radius: u }
            );
          }
          return e$;
        },
        eZ = function (t, e) {
          var n = e.graphicalItems,
            r = e.dataStartIndex,
            o = e.dataEndIndex,
            i = (null != n ? n : []).reduce(function (t, e) {
              var n = e.props.data;
              return n && n.length ? [].concat(eI(t), eI(n)) : t;
            }, []);
          return i.length > 0
            ? i
            : t && t.length && (0, q.hj)(r) && (0, q.hj)(o)
            ? t.slice(r, o + 1)
            : [];
        };
      function eV(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var eY = function (t, e, n, r) {
          var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = eZ(e, t);
          return n < 0 || !o || !o.length || n >= a.length
            ? null
            : o.reduce(function (o, u) {
                var c,
                  l,
                  s = null !== (c = u.props.data) && void 0 !== c ? c : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  i.dataKey && !i.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, q.Ap)(f, i.dataKey, r);
                } else l = (s && s[n]) || a[n];
                return l ? [].concat(eI(o), [(0, W.Qo)(u, l)]) : o;
              }, []);
        },
        eH = function (t, e, n, r) {
          var o = r || { x: t.chartX, y: t.chartY },
            i =
              "horizontal" === n
                ? o.x
                : "vertical" === n
                ? o.y
                : "centric" === n
                ? o.angle
                : o.radius,
            a = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            c = t.tooltipTicks,
            l = (0, W.VO)(i, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = eY(t, e, l, s),
              p = eq(n, a, l, o);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        eX = function (t, e) {
          var n = e.axes,
            r = e.graphicalItems,
            o = e.axisType,
            i = e.axisIdKey,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            l = t.layout,
            s = t.children,
            f = t.stackOffset,
            p = (0, W.NA)(l, o);
          return n.reduce(function (e, n) {
            var d = n.props,
              h = d.type,
              y = d.dataKey,
              v = d.allowDataOverflow,
              m = d.allowDuplicatedCategory,
              g = d.scale,
              x = d.ticks,
              O = d.includeHidden,
              w = n.props[i];
            if (e[w]) return e;
            var S = eZ(t.data, {
                graphicalItems: r.filter(function (t) {
                  return t.props[i] === w;
                }),
                dataStartIndex: u,
                dataEndIndex: c,
              }),
              _ = S.length;
            (function (t, e, n) {
              if ("number" === n && !0 === e && Array.isArray(t)) {
                var r = null == t ? void 0 : t[0],
                  o = null == t ? void 0 : t[1];
                if (r && o && (0, q.hj)(r) && (0, q.hj)(o)) return !0;
              }
              return !1;
            })(n.props.domain, v, h) &&
              ((A = (0, W.LG)(n.props.domain, null, v)),
              p &&
                ("number" === h || "auto" !== g) &&
                (M = (0, W.gF)(S, y, "category")));
            var E = eV(h);
            if (!A || 0 === A.length) {
              var P,
                A,
                k,
                M,
                T,
                C = null !== (T = n.props.domain) && void 0 !== T ? T : E;
              if (y) {
                if (((A = (0, W.gF)(S, y, h)), "category" === h && p)) {
                  var I = (0, q.bv)(A);
                  m && I
                    ? ((k = A), (A = j()(0, _)))
                    : m ||
                      (A = (0, W.ko)(C, A, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(eI(t), [e]);
                      }, []));
                } else if ("category" === h)
                  A = m
                    ? A.filter(function (t) {
                        return "" !== t && !b()(t);
                      })
                    : (0, W.ko)(C, A, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || b()(e)
                          ? t
                          : [].concat(eI(t), [e]);
                      }, []);
                else if ("number" === h) {
                  var N = (0, W.ZI)(
                    S,
                    r.filter(function (t) {
                      return t.props[i] === w && (O || !t.props.hide);
                    }),
                    y,
                    o,
                    l
                  );
                  N && (A = N);
                }
                p &&
                  ("number" === h || "auto" !== g) &&
                  (M = (0, W.gF)(S, y, "category"));
              } else
                A = p
                  ? j()(0, _)
                  : a && a[w] && a[w].hasStack && "number" === h
                  ? "expand" === f
                    ? [0, 1]
                    : (0, W.EB)(a[w].stackGroups, u, c)
                  : (0, W.s6)(
                      S,
                      r.filter(function (t) {
                        return t.props[i] === w && (O || !t.props.hide);
                      }),
                      h,
                      l,
                      !0
                    );
              "number" === h
                ? ((A = et(s, A, w, o, x)), C && (A = (0, W.LG)(C, A, v)))
                : "category" === h &&
                  C &&
                  A.every(function (t) {
                    return C.indexOf(t) >= 0;
                  }) &&
                  (A = C);
            }
            return eL(
              eL({}, e),
              {},
              eB(
                {},
                w,
                eL(
                  eL({}, n.props),
                  {},
                  {
                    axisType: o,
                    domain: A,
                    categoricalDomain: M,
                    duplicateDomain: k,
                    originalDomain:
                      null !== (P = n.props.domain) && void 0 !== P ? P : E,
                    isCategorical: p,
                    layout: l,
                  }
                )
              )
            );
          }, {});
        },
        eG = function (t, e) {
          var n = e.graphicalItems,
            r = e.Axis,
            o = e.axisType,
            i = e.axisIdKey,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            l = t.layout,
            s = t.children,
            f = eZ(t.data, {
              graphicalItems: n,
              dataStartIndex: u,
              dataEndIndex: c,
            }),
            p = f.length,
            d = (0, W.NA)(l, o),
            h = -1;
          return n.reduce(function (t, e) {
            var y,
              v = e.props[i],
              m = eV("number");
            return t[v]
              ? t
              : (h++,
                (y = d
                  ? j()(0, p)
                  : a && a[v] && a[v].hasStack
                  ? et(s, (y = (0, W.EB)(a[v].stackGroups, u, c)), v, o)
                  : et(
                      s,
                      (y = (0, W.LG)(
                        m,
                        (0, W.s6)(
                          f,
                          n.filter(function (t) {
                            return t.props[i] === v && !t.props.hide;
                          }),
                          "number",
                          l
                        ),
                        r.defaultProps.allowDataOverflow
                      )),
                      v,
                      o
                    )),
                eL(
                  eL({}, t),
                  {},
                  eB(
                    {},
                    v,
                    eL(
                      eL({ axisType: o }, r.defaultProps),
                      {},
                      {
                        hide: !0,
                        orientation: _()(
                          ez,
                          "".concat(o, ".").concat(h % 2),
                          null
                        ),
                        domain: y,
                        originalDomain: m,
                        isCategorical: d,
                        layout: l,
                      }
                    )
                  )
                ));
          }, {});
        },
        eK = function (t, e) {
          var n = e.axisType,
            r = void 0 === n ? "xAxis" : n,
            o = e.AxisComp,
            i = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            l = t.children,
            s = "".concat(r, "Id"),
            f = (0, L.NN)(l, o),
            p = {};
          return (
            f && f.length
              ? (p = eX(t, {
                  axes: f,
                  graphicalItems: i,
                  axisType: r,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : i &&
                i.length &&
                (p = eG(t, {
                  Axis: o,
                  graphicalItems: i,
                  axisType: r,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                })),
            p
          );
        },
        eJ = function (t) {
          var e = (0, q.Kt)(t),
            n = (0, W.uY)(e, !1, !0);
          return {
            tooltipTicks: n,
            orderedTooltipTicks: P()(n, function (t) {
              return t.coordinate;
            }),
            tooltipAxis: e,
            tooltipAxisBandSize: (0, W.zT)(e, n),
          };
        },
        eQ = function (t) {
          var e = t.children,
            n = t.defaultShowTooltip,
            r = (0, L.sP)(e, ts),
            o = 0,
            i = 0;
          return (
            t.data && 0 !== t.data.length && (i = t.data.length - 1),
            r &&
              r.props &&
              (r.props.startIndex >= 0 && (o = r.props.startIndex),
              r.props.endIndex >= 0 && (i = r.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: o,
              dataEndIndex: i,
              activeTooltipIndex: -1,
              isTooltipActive: !!n,
            }
          );
        },
        e0 = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : "centric" === t
            ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
            : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        e1 = function (t, e) {
          var n = t.props,
            r = t.graphicalItems,
            o = t.xAxisMap,
            i = void 0 === o ? {} : o,
            a = t.yAxisMap,
            u = void 0 === a ? {} : a,
            c = n.width,
            l = n.height,
            s = n.children,
            f = n.margin || {},
            p = (0, L.sP)(s, ts),
            d = (0, L.sP)(s, D.D),
            h = Object.keys(u).reduce(
              function (t, e) {
                var n = u[e],
                  r = n.orientation;
                return n.mirror || n.hide
                  ? t
                  : eL(eL({}, t), {}, eB({}, r, t[r] + n.width));
              },
              { left: f.left || 0, right: f.right || 0 }
            ),
            y = Object.keys(i).reduce(
              function (t, e) {
                var n = i[e],
                  r = n.orientation;
                return n.mirror || n.hide
                  ? t
                  : eL(
                      eL({}, t),
                      {},
                      eB({}, r, _()(t, "".concat(r)) + n.height)
                    );
              },
              { top: f.top || 0, bottom: f.bottom || 0 }
            ),
            v = eL(eL({}, y), h),
            m = v.bottom;
          p && (v.bottom += p.props.height || ts.defaultProps.height),
            d && e && (v = (0, W.By)(v, r, n, e));
          var g = c - v.left - v.right,
            b = l - v.top - v.bottom;
          return eL(
            eL({ brushBottom: m }, v),
            {},
            { width: Math.max(g, 0), height: Math.max(b, 0) }
          );
        },
        e2 = ["points", "className", "baseLinePoints", "connectNulls"];
      function e3() {
        return (e3 = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function e4(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return e6(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return e6(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return e6(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function e6(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var e5 = function (t) {
          return t && t.x === +t.x && t.y === +t.y;
        },
        e7 = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [[]];
          return (
            t.forEach(function (t) {
              e5(t)
                ? e[e.length - 1].push(t)
                : e[e.length - 1].length > 0 && e.push([]);
            }),
            e5(t[0]) && e[e.length - 1].push(t[0]),
            e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
            e
          );
        },
        e8 = function (t, e) {
          var n = e7(t);
          e &&
            (n = [
              n.reduce(function (t, e) {
                return [].concat(e4(t), e4(e));
              }, []),
            ]);
          var r = n
            .map(function (t) {
              return t.reduce(function (t, e, n) {
                return ""
                  .concat(t)
                  .concat(0 === n ? "M" : "L")
                  .concat(e.x, ",")
                  .concat(e.y);
              }, "");
            })
            .join("");
          return 1 === n.length ? "".concat(r, "Z") : r;
        },
        e9 = function (t, e, n) {
          var r = e8(t, n);
          return ""
            .concat("Z" === r.slice(-1) ? r.slice(0, -1) : r, "L")
            .concat(e8(e.reverse(), n).slice(1));
        },
        nt = function (t) {
          var e = t.points,
            n = t.className,
            r = t.baseLinePoints,
            o = t.connectNulls,
            i = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    !(e.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]);
              }
              return o;
            })(t, e2);
          if (!e || !e.length) return null;
          var a = (0, M.Z)("recharts-polygon", n);
          if (r && r.length) {
            var u = i.stroke && "none" !== i.stroke,
              c = e9(e, r, o);
            return m.createElement(
              "g",
              { className: a },
              m.createElement(
                "path",
                e3({}, (0, L.L6)(i, !0), {
                  fill: "Z" === c.slice(-1) ? i.fill : "none",
                  stroke: "none",
                  d: c,
                })
              ),
              u
                ? m.createElement(
                    "path",
                    e3({}, (0, L.L6)(i, !0), { fill: "none", d: e8(e, o) })
                  )
                : null,
              u
                ? m.createElement(
                    "path",
                    e3({}, (0, L.L6)(i, !0), { fill: "none", d: e8(r, o) })
                  )
                : null
            );
          }
          var l = e8(e, o);
          return m.createElement(
            "path",
            e3({}, (0, L.L6)(i, !0), {
              fill: "Z" === l.slice(-1) ? i.fill : "none",
              className: a,
              d: l,
            })
          );
        };
      function ne(t) {
        return (ne =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function nn() {
        return (nn = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function nr(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function no(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nr(Object(n), !0).forEach(function (e) {
                nl(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : nr(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function ni(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ns(r.key), r);
        }
      }
      function na() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (na = function () {
          return !!t;
        })();
      }
      function nu(t) {
        return (nu = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function nc(t, e) {
        return (nc = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function nl(t, e, n) {
        return (
          (e = ns(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ns(t) {
        var e = (function (t, e) {
          if ("object" != ne(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != ne(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ne(e) ? e : String(e);
      }
      var nf = Math.PI / 180,
        np = (function (t) {
          var e, n;
          function r() {
            var t, e;
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, r),
              (t = r),
              (e = arguments),
              (t = nu(t)),
              (function (t, e) {
                if (e && ("object" === ne(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(t);
              })(
                this,
                na()
                  ? Reflect.construct(t, e || [], nu(this).constructor)
                  : t.apply(this, e)
              )
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && nc(t, e);
            })(r, t),
            (e = [
              {
                key: "getTickLineCoord",
                value: function (t) {
                  var e = this.props,
                    n = e.cx,
                    r = e.cy,
                    o = e.radius,
                    i = e.orientation,
                    a = e.tickSize,
                    u = (0, ee.op)(n, r, o, t.coordinate),
                    c = (0, ee.op)(
                      n,
                      r,
                      o + ("inner" === i ? -1 : 1) * (a || 8),
                      t.coordinate
                    );
                  return { x1: u.x, y1: u.y, x2: c.x, y2: c.y };
                },
              },
              {
                key: "getTickTextAnchor",
                value: function (t) {
                  var e = this.props.orientation,
                    n = Math.cos(-t.coordinate * nf);
                  return n > 1e-5
                    ? "outer" === e
                      ? "start"
                      : "end"
                    : n < -0.00001
                    ? "outer" === e
                      ? "end"
                      : "start"
                    : "middle";
                },
              },
              {
                key: "renderAxisLine",
                value: function () {
                  var t = this.props,
                    e = t.cx,
                    n = t.cy,
                    r = t.radius,
                    o = t.axisLine,
                    i = t.axisLineType,
                    a = no(
                      no({}, (0, L.L6)(this.props, !1)),
                      {},
                      { fill: "none" },
                      (0, L.L6)(o, !1)
                    );
                  if ("circle" === i)
                    return m.createElement(
                      U,
                      nn({ className: "recharts-polar-angle-axis-line" }, a, {
                        cx: e,
                        cy: n,
                        r: r,
                      })
                    );
                  var u = this.props.ticks.map(function (t) {
                    return (0, ee.op)(e, n, r, t.coordinate);
                  });
                  return m.createElement(
                    nt,
                    nn({ className: "recharts-polar-angle-axis-line" }, a, {
                      points: u,
                    })
                  );
                },
              },
              {
                key: "renderTicks",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.ticks,
                    o = e.tick,
                    i = e.tickLine,
                    a = e.tickFormatter,
                    u = e.stroke,
                    c = (0, L.L6)(this.props, !1),
                    l = (0, L.L6)(o, !1),
                    s = no(no({}, c), {}, { fill: "none" }, (0, L.L6)(i, !1)),
                    f = n.map(function (e, n) {
                      var f = t.getTickLineCoord(e),
                        p = no(
                          no(
                            no({ textAnchor: t.getTickTextAnchor(e) }, c),
                            {},
                            { stroke: "none", fill: u },
                            l
                          ),
                          {},
                          { index: n, payload: e, x: f.x2, y: f.y2 }
                        );
                      return m.createElement(
                        I.m,
                        nn(
                          {
                            className: (0, M.Z)(
                              "recharts-polar-angle-axis-tick",
                              (0, ee.$S)(o)
                            ),
                            key: "tick-".concat(e.coordinate),
                          },
                          (0, R.bw)(t.props, e, n)
                        ),
                        i &&
                          m.createElement(
                            "line",
                            nn(
                              {
                                className:
                                  "recharts-polar-angle-axis-tick-line",
                              },
                              s,
                              f
                            )
                          ),
                        o && r.renderTickItem(o, p, a ? a(e.value, n) : e.value)
                      );
                    });
                  return m.createElement(
                    I.m,
                    { className: "recharts-polar-angle-axis-ticks" },
                    f
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.ticks,
                    n = t.radius,
                    r = t.axisLine;
                  return !(n <= 0) && e && e.length
                    ? m.createElement(
                        I.m,
                        {
                          className: (0, M.Z)(
                            "recharts-polar-angle-axis",
                            this.props.className
                          ),
                        },
                        r && this.renderAxisLine(),
                        this.renderTicks()
                      )
                    : null;
                },
              },
            ]),
            (n = [
              {
                key: "renderTickItem",
                value: function (t, e, n) {
                  return m.isValidElement(t)
                    ? m.cloneElement(t, e)
                    : O()(t)
                    ? t(e)
                    : m.createElement(
                        $.x,
                        nn({}, e, {
                          className: "recharts-polar-angle-axis-tick-value",
                        }),
                        n
                      );
                },
              },
            ]),
            e && ni(r.prototype, e),
            n && ni(r, n),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
        })(m.PureComponent);
      nl(np, "displayName", "PolarAngleAxis"),
        nl(np, "axisType", "angleAxis"),
        nl(np, "defaultProps", {
          type: "category",
          angleAxisId: 0,
          scale: "auto",
          cx: 0,
          cy: 0,
          orientation: "outer",
          axisLine: !0,
          tickLine: !0,
          tickSize: 8,
          tick: !0,
          hide: !1,
          allowDuplicatedCategory: !0,
        });
      var nd = n(13725),
        nh = n.n(nd),
        ny = n(15013),
        nv = n.n(ny),
        nm = ["cx", "cy", "angle", "ticks", "axisLine"],
        ng = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
      function nb(t) {
        return (nb =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function nx() {
        return (nx = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function nO(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function nw(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nO(Object(n), !0).forEach(function (e) {
                nA(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : nO(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function nj(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]);
        }
        return o;
      }
      function nS(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, nk(r.key), r);
        }
      }
      function n_() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (n_ = function () {
          return !!t;
        })();
      }
      function nE(t) {
        return (nE = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function nP(t, e) {
        return (nP = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function nA(t, e, n) {
        return (
          (e = nk(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function nk(t) {
        var e = (function (t, e) {
          if ("object" != nb(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != nb(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == nb(e) ? e : String(e);
      }
      var nM = (function (t) {
        var e, n;
        function r() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, r),
            (t = r),
            (e = arguments),
            (t = nE(t)),
            (function (t, e) {
              if (e && ("object" === nb(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              n_()
                ? Reflect.construct(t, e || [], nE(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && nP(t, e);
          })(r, t),
          (e = [
            {
              key: "getTickValueCoord",
              value: function (t) {
                var e = t.coordinate,
                  n = this.props,
                  r = n.angle,
                  o = n.cx,
                  i = n.cy;
                return (0, ee.op)(o, i, e, r);
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t;
                switch (this.props.orientation) {
                  case "left":
                    t = "end";
                    break;
                  case "right":
                    t = "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getViewBox",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  n = t.cy,
                  r = t.angle,
                  o = t.ticks,
                  i = nh()(o, function (t) {
                    return t.coordinate || 0;
                  });
                return {
                  cx: e,
                  cy: n,
                  startAngle: r,
                  endAngle: r,
                  innerRadius:
                    nv()(o, function (t) {
                      return t.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: i.coordinate || 0,
                };
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  n = t.cy,
                  r = t.angle,
                  o = t.ticks,
                  i = t.axisLine,
                  a = nj(t, nm),
                  u = o.reduce(
                    function (t, e) {
                      return [
                        Math.min(t[0], e.coordinate),
                        Math.max(t[1], e.coordinate),
                      ];
                    },
                    [1 / 0, -1 / 0]
                  ),
                  c = (0, ee.op)(e, n, u[0], r),
                  l = (0, ee.op)(e, n, u[1], r),
                  s = nw(
                    nw(
                      nw({}, (0, L.L6)(a, !1)),
                      {},
                      { fill: "none" },
                      (0, L.L6)(i, !1)
                    ),
                    {},
                    { x1: c.x, y1: c.y, x2: l.x, y2: l.y }
                  );
                return m.createElement(
                  "line",
                  nx({ className: "recharts-polar-radius-axis-line" }, s)
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.ticks,
                  o = e.tick,
                  i = e.angle,
                  a = e.tickFormatter,
                  u = e.stroke,
                  c = nj(e, ng),
                  l = this.getTickTextAnchor(),
                  s = (0, L.L6)(c, !1),
                  f = (0, L.L6)(o, !1),
                  p = n.map(function (e, n) {
                    var c = t.getTickValueCoord(e),
                      p = nw(
                        nw(
                          nw(
                            nw(
                              {
                                textAnchor: l,
                                transform: "rotate("
                                  .concat(90 - i, ", ")
                                  .concat(c.x, ", ")
                                  .concat(c.y, ")"),
                              },
                              s
                            ),
                            {},
                            { stroke: "none", fill: u },
                            f
                          ),
                          {},
                          { index: n },
                          c
                        ),
                        {},
                        { payload: e }
                      );
                    return m.createElement(
                      I.m,
                      nx(
                        {
                          className: (0, M.Z)(
                            "recharts-polar-radius-axis-tick",
                            (0, ee.$S)(o)
                          ),
                          key: "tick-".concat(e.coordinate),
                        },
                        (0, R.bw)(t.props, e, n)
                      ),
                      r.renderTickItem(o, p, a ? a(e.value, n) : e.value)
                    );
                  });
                return m.createElement(
                  I.m,
                  { className: "recharts-polar-radius-axis-ticks" },
                  p
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  n = t.axisLine,
                  r = t.tick;
                return e && e.length
                  ? m.createElement(
                      I.m,
                      {
                        className: (0, M.Z)(
                          "recharts-polar-radius-axis",
                          this.props.className
                        ),
                      },
                      n && this.renderAxisLine(),
                      r && this.renderTicks(),
                      td._.renderCallByParent(this.props, this.getViewBox())
                    )
                  : null;
              },
            },
          ]),
          (n = [
            {
              key: "renderTickItem",
              value: function (t, e, n) {
                return m.isValidElement(t)
                  ? m.cloneElement(t, e)
                  : O()(t)
                  ? t(e)
                  : m.createElement(
                      $.x,
                      nx({}, e, {
                        className: "recharts-polar-radius-axis-tick-value",
                      }),
                      n
                    );
              },
            },
          ]),
          e && nS(r.prototype, e),
          n && nS(r, n),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(m.PureComponent);
      nA(nM, "displayName", "PolarRadiusAxis"),
        nA(nM, "axisType", "radiusAxis"),
        nA(nM, "defaultProps", {
          type: "number",
          radiusAxisId: 0,
          cx: 0,
          cy: 0,
          angle: 0,
          orientation: "right",
          stroke: "#ccc",
          axisLine: !0,
          tick: !0,
          tickCount: 5,
          allowDataOverflow: !1,
          scale: "auto",
          allowDuplicatedCategory: !0,
        });
      var nT =
        ((i = (r = {
          chartName: "PieChart",
          GraphicalChild: n(89810).b,
          validateTooltipEventTypes: ["item"],
          defaultTooltipEventType: "item",
          legendContent: "children",
          axisComponents: [
            { axisType: "angleAxis", AxisComp: np },
            { axisType: "radiusAxis", AxisComp: nM },
          ],
          formatAxisMap: ee.t9,
          defaultProps: {
            layout: "centric",
            startAngle: 0,
            endAngle: 360,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%",
          },
        }).chartName),
        (a = r.GraphicalChild),
        (c = void 0 === (u = r.defaultTooltipEventType) ? "axis" : u),
        (s = void 0 === (l = r.validateTooltipEventTypes) ? ["axis"] : l),
        (f = r.axisComponents),
        (p = r.legendContent),
        (d = r.formatAxisMap),
        (h = r.defaultProps),
        (y = function (t, e) {
          var n = e.graphicalItems,
            r = e.stackGroups,
            o = e.offset,
            i = e.updateId,
            a = e.dataStartIndex,
            u = e.dataEndIndex,
            c = t.barSize,
            l = t.layout,
            s = t.barGap,
            p = t.barCategoryGap,
            d = t.maxBarSize,
            h = e0(l),
            y = h.numericAxisName,
            v = h.cateAxisName,
            m =
              !!n &&
              !!n.length &&
              n.some(function (t) {
                var e = (0, L.Gf)(t && t.type);
                return e && e.indexOf("Bar") >= 0;
              }),
            g = [];
          return (
            n.forEach(function (n, h) {
              var x = eZ(t.data, {
                  graphicalItems: [n],
                  dataStartIndex: a,
                  dataEndIndex: u,
                }),
                O = n.props,
                w = O.dataKey,
                j = O.maxBarSize,
                S = n.props["".concat(y, "Id")],
                _ = n.props["".concat(v, "Id")],
                E = f.reduce(function (t, r) {
                  var o = e["".concat(r.axisType, "Map")],
                    i = n.props["".concat(r.axisType, "Id")];
                  (o && o[i]) || "zAxis" === r.axisType || (0, T.Z)(!1);
                  var a = o[i];
                  return eL(
                    eL({}, t),
                    {},
                    eB(
                      eB({}, r.axisType, a),
                      "".concat(r.axisType, "Ticks"),
                      (0, W.uY)(a)
                    )
                  );
                }, {}),
                P = E[v],
                A = E["".concat(v, "Ticks")],
                k =
                  r && r[S] && r[S].hasStack && (0, W.O3)(n, r[S].stackGroups),
                M = (0, L.Gf)(n.type).indexOf("Bar") >= 0,
                C = (0, W.zT)(P, A),
                I = [],
                N =
                  m &&
                  (0, W.pt)({
                    barSize: c,
                    stackGroups: r,
                    totalSize:
                      "xAxis" === v
                        ? E[v].width
                        : "yAxis" === v
                        ? E[v].height
                        : void 0,
                  });
              if (M) {
                var D,
                  R,
                  B = b()(j) ? d : j,
                  U =
                    null !==
                      (D =
                        null !== (R = (0, W.zT)(P, A, !0)) && void 0 !== R
                          ? R
                          : B) && void 0 !== D
                      ? D
                      : 0;
                (I = (0, W.qz)({
                  barGap: s,
                  barCategoryGap: p,
                  bandSize: U !== C ? U : C,
                  sizeList: N[_],
                  maxBarSize: B,
                })),
                  U !== C &&
                    (I = I.map(function (t) {
                      return eL(
                        eL({}, t),
                        {},
                        {
                          position: eL(
                            eL({}, t.position),
                            {},
                            { offset: t.position.offset - U / 2 }
                          ),
                        }
                      );
                    }));
              }
              var z = n && n.type && n.type.getComposedData;
              z &&
                g.push({
                  props: eL(
                    eL(
                      {},
                      z(
                        eL(
                          eL({}, E),
                          {},
                          {
                            displayedData: x,
                            props: t,
                            dataKey: w,
                            item: n,
                            bandSize: C,
                            barPosition: I,
                            offset: o,
                            stackedData: k,
                            layout: l,
                            dataStartIndex: a,
                            dataEndIndex: u,
                          }
                        )
                      )
                    ),
                    {},
                    eB(
                      eB(
                        eB({ key: n.key || "item-".concat(h) }, y, E[y]),
                        v,
                        E[v]
                      ),
                      "animationId",
                      i
                    )
                  ),
                  childIndex: (0, L.$R)(n, t.children),
                  item: n,
                });
            }),
            g
          );
        }),
        (v = function (t, e) {
          var n = t.props,
            r = t.dataStartIndex,
            o = t.dataEndIndex,
            u = t.updateId;
          if (!(0, L.TT)({ props: n })) return null;
          var c = n.children,
            l = n.layout,
            s = n.stackOffset,
            p = n.data,
            h = n.reverseStackOrder,
            v = e0(l),
            m = v.numericAxisName,
            g = v.cateAxisName,
            b = (0, L.NN)(c, a),
            x = (0, W.wh)(p, b, "".concat(m, "Id"), "".concat(g, "Id"), s, h),
            O = f.reduce(function (t, e) {
              var i = "".concat(e.axisType, "Map");
              return eL(
                eL({}, t),
                {},
                eB(
                  {},
                  i,
                  eK(
                    n,
                    eL(
                      eL({}, e),
                      {},
                      {
                        graphicalItems: b,
                        stackGroups: e.axisType === m && x,
                        dataStartIndex: r,
                        dataEndIndex: o,
                      }
                    )
                  )
                )
              );
            }, {}),
            w = e1(
              eL(eL({}, O), {}, { props: n, graphicalItems: b }),
              null == e ? void 0 : e.legendBBox
            );
          Object.keys(O).forEach(function (t) {
            O[t] = d(n, O[t], w, t.replace("Map", ""), i);
          });
          var j = eJ(O["".concat(g, "Map")]),
            S = y(
              n,
              eL(
                eL({}, O),
                {},
                {
                  dataStartIndex: r,
                  dataEndIndex: o,
                  updateId: u,
                  graphicalItems: b,
                  stackGroups: x,
                  offset: w,
                }
              )
            );
          return eL(
            eL(
              {
                formattedGraphicalItems: S,
                graphicalItems: b,
                offset: w,
                stackGroups: x,
              },
              j
            ),
            O
          );
        }),
        (o = (function (t) {
          var e;
          function n(t) {
            var e, r, o, a, u;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, n),
              (a = n),
              (u = [t]),
              (a = eM(a)),
              (o = (function (t, e) {
                if (e && ("object" === e_(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return eT(t);
              })(
                this,
                ek()
                  ? Reflect.construct(a, u || [], eM(this).constructor)
                  : a.apply(this, u)
              )),
              eB(eT(o), "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
              eB(eT(o), "accessibilityManager", new el()),
              eB(eT(o), "handleLegendBBoxUpdate", function (t) {
                if (t) {
                  var e = o.state,
                    n = e.dataStartIndex,
                    r = e.dataEndIndex,
                    i = e.updateId;
                  o.setState(
                    eL(
                      { legendBBox: t },
                      v(
                        {
                          props: o.props,
                          dataStartIndex: n,
                          dataEndIndex: r,
                          updateId: i,
                        },
                        eL(eL({}, o.state), {}, { legendBBox: t })
                      )
                    )
                  );
                }
              }),
              eB(eT(o), "handleReceiveSyncEvent", function (t, e, n) {
                o.props.syncId === t &&
                  (n !== o.eventEmitterSymbol ||
                    "function" == typeof o.props.syncMethod) &&
                  o.applySyncEvent(e);
              }),
              eB(eT(o), "handleBrushChange", function (t) {
                var e = t.startIndex,
                  n = t.endIndex;
                if (
                  e !== o.state.dataStartIndex ||
                  n !== o.state.dataEndIndex
                ) {
                  var r = o.state.updateId;
                  o.setState(function () {
                    return eL(
                      { dataStartIndex: e, dataEndIndex: n },
                      v(
                        {
                          props: o.props,
                          dataStartIndex: e,
                          dataEndIndex: n,
                          updateId: r,
                        },
                        o.state
                      )
                    );
                  }),
                    o.triggerSyncEvent({ dataStartIndex: e, dataEndIndex: n });
                }
              }),
              eB(eT(o), "handleMouseEnter", function (t) {
                var e = o.getMouseInfo(t);
                if (e) {
                  var n = eL(eL({}, e), {}, { isTooltipActive: !0 });
                  o.setState(n), o.triggerSyncEvent(n);
                  var r = o.props.onMouseEnter;
                  O()(r) && r(n, t);
                }
              }),
              eB(eT(o), "triggeredAfterMouseMove", function (t) {
                var e = o.getMouseInfo(t),
                  n = e
                    ? eL(eL({}, e), {}, { isTooltipActive: !0 })
                    : { isTooltipActive: !1 };
                o.setState(n), o.triggerSyncEvent(n);
                var r = o.props.onMouseMove;
                O()(r) && r(n, t);
              }),
              eB(eT(o), "handleItemMouseEnter", function (t) {
                o.setState(function () {
                  return {
                    isTooltipActive: !0,
                    activeItem: t,
                    activePayload: t.tooltipPayload,
                    activeCoordinate: t.tooltipPosition || { x: t.cx, y: t.cy },
                  };
                });
              }),
              eB(eT(o), "handleItemMouseLeave", function () {
                o.setState(function () {
                  return { isTooltipActive: !1 };
                });
              }),
              eB(eT(o), "handleMouseMove", function (t) {
                t.persist(), o.throttleTriggeredAfterMouseMove(t);
              }),
              eB(eT(o), "handleMouseLeave", function (t) {
                o.throttleTriggeredAfterMouseMove.cancel();
                var e = { isTooltipActive: !1 };
                o.setState(e), o.triggerSyncEvent(e);
                var n = o.props.onMouseLeave;
                O()(n) && n(e, t);
              }),
              eB(eT(o), "handleOuterEvent", function (t) {
                var e,
                  n = (0, L.Bh)(t),
                  r = _()(o.props, "".concat(n));
                n &&
                  O()(r) &&
                  r(
                    null !==
                      (e = /.*touch.*/i.test(n)
                        ? o.getMouseInfo(t.changedTouches[0])
                        : o.getMouseInfo(t)) && void 0 !== e
                      ? e
                      : {},
                    t
                  );
              }),
              eB(eT(o), "handleClick", function (t) {
                var e = o.getMouseInfo(t);
                if (e) {
                  var n = eL(eL({}, e), {}, { isTooltipActive: !0 });
                  o.setState(n), o.triggerSyncEvent(n);
                  var r = o.props.onClick;
                  O()(r) && r(n, t);
                }
              }),
              eB(eT(o), "handleMouseDown", function (t) {
                var e = o.props.onMouseDown;
                O()(e) && e(o.getMouseInfo(t), t);
              }),
              eB(eT(o), "handleMouseUp", function (t) {
                var e = o.props.onMouseUp;
                O()(e) && e(o.getMouseInfo(t), t);
              }),
              eB(eT(o), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  o.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
              }),
              eB(eT(o), "handleTouchStart", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  o.handleMouseDown(t.changedTouches[0]);
              }),
              eB(eT(o), "handleTouchEnd", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  o.handleMouseUp(t.changedTouches[0]);
              }),
              eB(eT(o), "triggerSyncEvent", function (t) {
                void 0 !== o.props.syncId &&
                  eo.emit(ei, o.props.syncId, t, o.eventEmitterSymbol);
              }),
              eB(eT(o), "applySyncEvent", function (t) {
                var e = o.props,
                  n = e.layout,
                  r = e.syncMethod,
                  i = o.state.updateId,
                  a = t.dataStartIndex,
                  u = t.dataEndIndex;
                if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex)
                  o.setState(
                    eL(
                      { dataStartIndex: a, dataEndIndex: u },
                      v(
                        {
                          props: o.props,
                          dataStartIndex: a,
                          dataEndIndex: u,
                          updateId: i,
                        },
                        o.state
                      )
                    )
                  );
                else if (void 0 !== t.activeTooltipIndex) {
                  var c = t.chartX,
                    l = t.chartY,
                    s = t.activeTooltipIndex,
                    f = o.state,
                    p = f.offset,
                    d = f.tooltipTicks;
                  if (!p) return;
                  if ("function" == typeof r) s = r(d, t);
                  else if ("value" === r) {
                    s = -1;
                    for (var h = 0; h < d.length; h++)
                      if (d[h].value === t.activeLabel) {
                        s = h;
                        break;
                      }
                  }
                  var y = eL(eL({}, p), {}, { x: p.left, y: p.top }),
                    m = Math.min(c, y.x + y.width),
                    g = Math.min(l, y.y + y.height),
                    b = d[s] && d[s].value,
                    x = eY(o.state, o.props.data, s),
                    O = d[s]
                      ? {
                          x: "horizontal" === n ? d[s].coordinate : m,
                          y: "horizontal" === n ? g : d[s].coordinate,
                        }
                      : e$;
                  o.setState(
                    eL(
                      eL({}, t),
                      {},
                      {
                        activeLabel: b,
                        activeCoordinate: O,
                        activePayload: x,
                        activeTooltipIndex: s,
                      }
                    )
                  );
                } else o.setState(t);
              }),
              eB(eT(o), "renderCursor", function (t) {
                var e,
                  n = o.state,
                  r = n.isTooltipActive,
                  a = n.activeCoordinate,
                  u = n.activePayload,
                  c = n.offset,
                  l = n.activeTooltipIndex,
                  s = n.tooltipAxisBandSize,
                  f = o.getTooltipEventType(),
                  p = null !== (e = t.props.active) && void 0 !== e ? e : r,
                  d = o.props.layout,
                  h = t.key || "_recharts-cursor";
                return m.createElement(ew, {
                  key: h,
                  activeCoordinate: a,
                  activePayload: u,
                  activeTooltipIndex: l,
                  chartName: i,
                  element: t,
                  isActive: p,
                  layout: d,
                  offset: c,
                  tooltipAxisBandSize: s,
                  tooltipEventType: f,
                });
              }),
              eB(eT(o), "renderPolarAxis", function (t, e, n) {
                var r = _()(t, "type.axisType"),
                  i = _()(o.state, "".concat(r, "Map")),
                  a = i && i[t.props["".concat(r, "Id")]];
                return (0,
                m.cloneElement)(t, eL(eL({}, a), {}, { className: (0, M.Z)(r, a.className), key: t.key || "".concat(e, "-").concat(n), ticks: (0, W.uY)(a, !0) }));
              }),
              eB(eT(o), "renderPolarGrid", function (t) {
                var e = t.props,
                  n = e.radialLines,
                  r = e.polarAngles,
                  i = e.polarRadius,
                  a = o.state,
                  u = a.radiusAxisMap,
                  c = a.angleAxisMap,
                  l = (0, q.Kt)(u),
                  s = (0, q.Kt)(c),
                  f = s.cx,
                  p = s.cy,
                  d = s.innerRadius,
                  h = s.outerRadius;
                return (0, m.cloneElement)(t, {
                  polarAngles: Array.isArray(r)
                    ? r
                    : (0, W.uY)(s, !0).map(function (t) {
                        return t.coordinate;
                      }),
                  polarRadius: Array.isArray(i)
                    ? i
                    : (0, W.uY)(l, !0).map(function (t) {
                        return t.coordinate;
                      }),
                  cx: f,
                  cy: p,
                  innerRadius: d,
                  outerRadius: h,
                  key: t.key || "polar-grid",
                  radialLines: n,
                });
              }),
              eB(eT(o), "renderLegend", function () {
                var t = o.state.formattedGraphicalItems,
                  e = o.props,
                  n = e.children,
                  r = e.width,
                  i = e.height,
                  a = o.props.margin || {},
                  u = r - (a.left || 0) - (a.right || 0),
                  c = (0, tp.z)({
                    children: n,
                    formattedGraphicalItems: t,
                    legendWidth: u,
                    legendContent: p,
                  });
                if (!c) return null;
                var l = c.item,
                  s = eA(c, ej);
                return (0,
                m.cloneElement)(l, eL(eL({}, s), {}, { chartWidth: r, chartHeight: i, margin: a, onBBoxUpdate: o.handleLegendBBoxUpdate }));
              }),
              eB(eT(o), "renderTooltip", function () {
                var t,
                  e = o.props,
                  n = e.children,
                  r = e.accessibilityLayer,
                  i = (0, L.sP)(n, N.u);
                if (!i) return null;
                var a = o.state,
                  u = a.isTooltipActive,
                  c = a.activeCoordinate,
                  l = a.activePayload,
                  s = a.activeLabel,
                  f = a.offset,
                  p = null !== (t = i.props.active) && void 0 !== t ? t : u;
                return (0,
                m.cloneElement)(i, { viewBox: eL(eL({}, f), {}, { x: f.left, y: f.top }), active: p, label: s, payload: p ? l : [], coordinate: c, accessibilityLayer: r });
              }),
              eB(eT(o), "renderBrush", function (t) {
                var e = o.props,
                  n = e.margin,
                  r = e.data,
                  i = o.state,
                  a = i.offset,
                  u = i.dataStartIndex,
                  c = i.dataEndIndex,
                  l = i.updateId;
                return (0,
                m.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: (0, W.DO)(o.handleBrushChange, t.props.onChange), data: r, x: (0, q.hj)(t.props.x) ? t.props.x : a.left, y: (0, q.hj)(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (n.bottom || 0), width: (0, q.hj)(t.props.width) ? t.props.width : a.width, startIndex: u, endIndex: c, updateId: "brush-".concat(l) });
              }),
              eB(eT(o), "renderReferenceElement", function (t, e, n) {
                if (!t) return null;
                var r = eT(o).clipPathId,
                  i = o.state,
                  a = i.xAxisMap,
                  u = i.yAxisMap,
                  c = i.offset,
                  l = t.props,
                  s = l.xAxisId,
                  f = l.yAxisId;
                return (0,
                m.cloneElement)(t, { key: t.key || "".concat(e, "-").concat(n), xAxis: a[s], yAxis: u[f], viewBox: { x: c.left, y: c.top, width: c.width, height: c.height }, clipPathId: r });
              }),
              eB(eT(o), "renderActivePoints", function (t) {
                var e = t.item,
                  r = t.activePoint,
                  o = t.basePoint,
                  i = t.childIndex,
                  a = t.isRange,
                  u = [],
                  c = e.props.key,
                  l = e.item.props,
                  s = l.activeDot,
                  f = eL(
                    eL(
                      {
                        index: i,
                        dataKey: l.dataKey,
                        cx: r.x,
                        cy: r.y,
                        r: 4,
                        fill: (0, W.fk)(e.item),
                        strokeWidth: 2,
                        stroke: "#fff",
                        payload: r.payload,
                        value: r.value,
                        key: "".concat(c, "-activePoint-").concat(i),
                      },
                      (0, L.L6)(s, !1)
                    ),
                    (0, R.Ym)(s)
                  );
                return (
                  u.push(n.renderActiveDot(s, f)),
                  o
                    ? u.push(
                        n.renderActiveDot(
                          s,
                          eL(
                            eL({}, f),
                            {},
                            {
                              cx: o.x,
                              cy: o.y,
                              key: "".concat(c, "-basePoint-").concat(i),
                            }
                          )
                        )
                      )
                    : a && u.push(null),
                  u
                );
              }),
              eB(eT(o), "renderGraphicChild", function (t, e, n) {
                var r = o.filterFormatItem(t, e, n);
                if (!r) return null;
                var i = o.getTooltipEventType(),
                  a = o.state,
                  u = a.isTooltipActive,
                  c = a.tooltipAxis,
                  l = a.activeTooltipIndex,
                  s = a.activeLabel,
                  f = o.props.children,
                  p = (0, L.sP)(f, N.u),
                  d = r.props,
                  h = d.points,
                  y = d.isRange,
                  v = d.baseLine,
                  g = r.item.props,
                  x = g.activeDot,
                  O = g.hide,
                  w = g.activeBar,
                  j = g.activeShape,
                  S = {};
                "axis" !== i && p && "click" === p.props.trigger
                  ? (S = {
                      onClick: (0, W.DO)(
                        o.handleItemMouseEnter,
                        t.props.onClick
                      ),
                    })
                  : "axis" !== i &&
                    (S = {
                      onMouseLeave: (0, W.DO)(
                        o.handleItemMouseLeave,
                        t.props.onMouseLeave
                      ),
                      onMouseEnter: (0, W.DO)(
                        o.handleItemMouseEnter,
                        t.props.onMouseEnter
                      ),
                    });
                var _ = (0, m.cloneElement)(t, eL(eL({}, r.props), S));
                if (!O && u && p && (x || w || j)) {
                  if (l >= 0) {
                    if (c.dataKey && !c.allowDuplicatedCategory) {
                      var E =
                        "function" == typeof c.dataKey
                          ? function (t) {
                              return "function" == typeof c.dataKey
                                ? c.dataKey(t.payload)
                                : null;
                            }
                          : "payload.".concat(c.dataKey.toString());
                      (A = (0, q.Ap)(h, E, s)),
                        (k = y && v && (0, q.Ap)(v, E, s));
                    } else
                      (A = null == h ? void 0 : h[l]), (k = y && v && v[l]);
                    if (j || w) {
                      var P =
                        void 0 !== t.props.activeIndex
                          ? t.props.activeIndex
                          : l;
                      return [
                        (0, m.cloneElement)(
                          t,
                          eL(eL(eL({}, r.props), S), {}, { activeIndex: P })
                        ),
                        null,
                        null,
                      ];
                    }
                    if (!b()(A))
                      return [_].concat(
                        eI(
                          o.renderActivePoints({
                            item: r,
                            activePoint: A,
                            basePoint: k,
                            childIndex: l,
                            isRange: y,
                          })
                        )
                      );
                  } else {
                    var A,
                      k,
                      M,
                      T = (
                        null !==
                          (M = o.getItemByXY(o.state.activeCoordinate)) &&
                        void 0 !== M
                          ? M
                          : { graphicalItem: _ }
                      ).graphicalItem,
                      C = T.item,
                      I = void 0 === C ? t : C,
                      D = T.childIndex,
                      R = eL(eL(eL({}, r.props), S), {}, { activeIndex: D });
                    return [(0, m.cloneElement)(I, R), null, null];
                  }
                }
                return y ? [_, null, null] : [_, null];
              }),
              eB(eT(o), "renderCustomized", function (t, e, n) {
                return (0,
                m.cloneElement)(t, eL(eL({ key: "recharts-customized-".concat(n) }, o.props), o.state));
              }),
              eB(eT(o), "renderMap", {
                CartesianGrid: { handler: eW, once: !0 },
                ReferenceArea: { handler: o.renderReferenceElement },
                ReferenceLine: { handler: eW },
                ReferenceDot: { handler: o.renderReferenceElement },
                XAxis: { handler: eW },
                YAxis: { handler: eW },
                Brush: { handler: o.renderBrush, once: !0 },
                Bar: { handler: o.renderGraphicChild },
                Line: { handler: o.renderGraphicChild },
                Area: { handler: o.renderGraphicChild },
                Radar: { handler: o.renderGraphicChild },
                RadialBar: { handler: o.renderGraphicChild },
                Scatter: { handler: o.renderGraphicChild },
                Pie: { handler: o.renderGraphicChild },
                Funnel: { handler: o.renderGraphicChild },
                Tooltip: { handler: o.renderCursor, once: !0 },
                PolarGrid: { handler: o.renderPolarGrid, once: !0 },
                PolarAngleAxis: { handler: o.renderPolarAxis },
                PolarRadiusAxis: { handler: o.renderPolarAxis },
                Customized: { handler: o.renderCustomized },
              }),
              (o.clipPathId = "".concat(
                null !== (e = t.id) && void 0 !== e ? e : (0, q.EL)("recharts"),
                "-clip"
              )),
              (o.throttleTriggeredAfterMouseMove = k()(
                o.triggeredAfterMouseMove,
                null !== (r = t.throttleDelay) && void 0 !== r ? r : 1e3 / 60
              )),
              (o.state = {}),
              o
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && eC(t, e);
            })(n, t),
            (e = [
              {
                key: "componentDidMount",
                value: function () {
                  var t, e;
                  this.addListener(),
                    this.accessibilityManager.setDetails({
                      container: this.container,
                      offset: {
                        left:
                          null !== (t = this.props.margin.left) && void 0 !== t
                            ? t
                            : 0,
                        top:
                          null !== (e = this.props.margin.top) && void 0 !== e
                            ? e
                            : 0,
                      },
                      coordinateList: this.state.tooltipTicks,
                      mouseHandlerCallback: this.triggeredAfterMouseMove,
                      layout: this.props.layout,
                    }),
                    this.displayDefaultTooltip();
                },
              },
              {
                key: "displayDefaultTooltip",
                value: function () {
                  var t = this.props,
                    e = t.children,
                    n = t.data,
                    r = t.height,
                    o = t.layout,
                    i = (0, L.sP)(e, N.u);
                  if (i) {
                    var a = i.props.defaultIndex;
                    if (
                      "number" == typeof a &&
                      !(a < 0) &&
                      !(a > this.state.tooltipTicks.length)
                    ) {
                      var u =
                          this.state.tooltipTicks[a] &&
                          this.state.tooltipTicks[a].value,
                        c = eY(this.state, n, a, u),
                        l = this.state.tooltipTicks[a].coordinate,
                        s = (this.state.offset.top + r) / 2,
                        f =
                          "horizontal" === o ? { x: l, y: s } : { y: l, x: s },
                        p = this.state.formattedGraphicalItems.find(function (
                          t
                        ) {
                          return "Scatter" === t.item.type.name;
                        });
                      p &&
                        ((f = eL(eL({}, f), p.props.points[a].tooltipPosition)),
                        (c = p.props.points[a].tooltipPayload));
                      var d = {
                        activeTooltipIndex: a,
                        isTooltipActive: !0,
                        activeLabel: u,
                        activePayload: c,
                        activeCoordinate: f,
                      };
                      this.setState(d),
                        this.renderCursor(i),
                        this.accessibilityManager.setIndex(a);
                    }
                  }
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (t, e) {
                  if (!this.props.accessibilityLayer) return null;
                  if (
                    (this.state.tooltipTicks !== e.tooltipTicks &&
                      this.accessibilityManager.setDetails({
                        coordinateList: this.state.tooltipTicks,
                      }),
                    this.props.layout !== t.layout &&
                      this.accessibilityManager.setDetails({
                        layout: this.props.layout,
                      }),
                    this.props.margin !== t.margin)
                  ) {
                    var n, r;
                    this.accessibilityManager.setDetails({
                      offset: {
                        left:
                          null !== (n = this.props.margin.left) && void 0 !== n
                            ? n
                            : 0,
                        top:
                          null !== (r = this.props.margin.top) && void 0 !== r
                            ? r
                            : 0,
                      },
                    });
                  }
                  return null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  (0, L.rL)(
                    [(0, L.sP)(t.children, N.u)],
                    [(0, L.sP)(this.props.children, N.u)]
                  ) || this.displayDefaultTooltip();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.removeListener(),
                    this.throttleTriggeredAfterMouseMove.cancel();
                },
              },
              {
                key: "getTooltipEventType",
                value: function () {
                  var t = (0, L.sP)(this.props.children, N.u);
                  if (t && "boolean" == typeof t.props.shared) {
                    var e = t.props.shared ? "axis" : "item";
                    return s.indexOf(e) >= 0 ? e : c;
                  }
                  return c;
                },
              },
              {
                key: "getMouseInfo",
                value: function (t) {
                  if (!this.container) return null;
                  var e = this.container,
                    n = e.getBoundingClientRect(),
                    r = (0, tf.os)(n),
                    o = {
                      chartX: Math.round(t.pageX - r.left),
                      chartY: Math.round(t.pageY - r.top),
                    },
                    i = n.width / e.offsetWidth || 1,
                    a = this.inRange(o.chartX, o.chartY, i);
                  if (!a) return null;
                  var u = this.state,
                    c = u.xAxisMap,
                    l = u.yAxisMap;
                  if ("axis" !== this.getTooltipEventType() && c && l) {
                    var s = (0, q.Kt)(c).scale,
                      f = (0, q.Kt)(l).scale,
                      p = s && s.invert ? s.invert(o.chartX) : null,
                      d = f && f.invert ? f.invert(o.chartY) : null;
                    return eL(eL({}, o), {}, { xValue: p, yValue: d });
                  }
                  var h = eH(this.state, this.props.data, this.props.layout, a);
                  return h ? eL(eL({}, o), h) : null;
                },
              },
              {
                key: "inRange",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 1,
                    r = this.props.layout,
                    o = t / n,
                    i = e / n;
                  if ("horizontal" === r || "vertical" === r) {
                    var a = this.state.offset;
                    return o >= a.left &&
                      o <= a.left + a.width &&
                      i >= a.top &&
                      i <= a.top + a.height
                      ? { x: o, y: i }
                      : null;
                  }
                  var u = this.state,
                    c = u.angleAxisMap,
                    l = u.radiusAxisMap;
                  if (c && l) {
                    var s = (0, q.Kt)(c);
                    return (0, ee.z3)({ x: o, y: i }, s);
                  }
                  return null;
                },
              },
              {
                key: "parseEventsOfWrapper",
                value: function () {
                  var t = this.props.children,
                    e = this.getTooltipEventType(),
                    n = (0, L.sP)(t, N.u),
                    r = {};
                  return (
                    n &&
                      "axis" === e &&
                      (r =
                        "click" === n.props.trigger
                          ? { onClick: this.handleClick }
                          : {
                              onMouseEnter: this.handleMouseEnter,
                              onMouseMove: this.handleMouseMove,
                              onMouseLeave: this.handleMouseLeave,
                              onTouchMove: this.handleTouchMove,
                              onTouchStart: this.handleTouchStart,
                              onTouchEnd: this.handleTouchEnd,
                            }),
                    eL(eL({}, (0, R.Ym)(this.props, this.handleOuterEvent)), r)
                  );
                },
              },
              {
                key: "addListener",
                value: function () {
                  eo.on(ei, this.handleReceiveSyncEvent);
                },
              },
              {
                key: "removeListener",
                value: function () {
                  eo.removeListener(ei, this.handleReceiveSyncEvent);
                },
              },
              {
                key: "filterFormatItem",
                value: function (t, e, n) {
                  for (
                    var r = this.state.formattedGraphicalItems,
                      o = 0,
                      i = r.length;
                    o < i;
                    o++
                  ) {
                    var a = r[o];
                    if (
                      a.item === t ||
                      a.props.key === t.key ||
                      (e === (0, L.Gf)(a.item.type) && n === a.childIndex)
                    )
                      return a;
                  }
                  return null;
                },
              },
              {
                key: "renderClipPath",
                value: function () {
                  var t = this.clipPathId,
                    e = this.state.offset,
                    n = e.left,
                    r = e.top,
                    o = e.height,
                    i = e.width;
                  return m.createElement(
                    "defs",
                    null,
                    m.createElement(
                      "clipPath",
                      { id: t },
                      m.createElement("rect", {
                        x: n,
                        y: r,
                        height: o,
                        width: i,
                      })
                    )
                  );
                },
              },
              {
                key: "getXScales",
                value: function () {
                  var t = this.state.xAxisMap;
                  return t
                    ? Object.entries(t).reduce(function (t, e) {
                        var n = eP(e, 2),
                          r = n[0],
                          o = n[1];
                        return eL(eL({}, t), {}, eB({}, r, o.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: "getYScales",
                value: function () {
                  var t = this.state.yAxisMap;
                  return t
                    ? Object.entries(t).reduce(function (t, e) {
                        var n = eP(e, 2),
                          r = n[0],
                          o = n[1];
                        return eL(eL({}, t), {}, eB({}, r, o.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: "getXScaleByAxisId",
                value: function (t) {
                  var e;
                  return null === (e = this.state.xAxisMap) ||
                    void 0 === e ||
                    null === (e = e[t]) ||
                    void 0 === e
                    ? void 0
                    : e.scale;
                },
              },
              {
                key: "getYScaleByAxisId",
                value: function (t) {
                  var e;
                  return null === (e = this.state.yAxisMap) ||
                    void 0 === e ||
                    null === (e = e[t]) ||
                    void 0 === e
                    ? void 0
                    : e.scale;
                },
              },
              {
                key: "getItemByXY",
                value: function (t) {
                  var e = this.state,
                    n = e.formattedGraphicalItems,
                    r = e.activeItem;
                  if (n && n.length)
                    for (var o = 0, i = n.length; o < i; o++) {
                      var a = n[o],
                        u = a.props,
                        c = a.item,
                        l = (0, L.Gf)(c.type);
                      if ("Bar" === l) {
                        var s = (u.data || []).find(function (e) {
                          return (0, z.X)(t, e);
                        });
                        if (s) return { graphicalItem: a, payload: s };
                      } else if ("RadialBar" === l) {
                        var f = (u.data || []).find(function (e) {
                          return (0, ee.z3)(t, e);
                        });
                        if (f) return { graphicalItem: a, payload: f };
                      } else if (
                        (0, es.lT)(a, r) ||
                        (0, es.V$)(a, r) ||
                        (0, es.w7)(a, r)
                      ) {
                        var p = (0, es.a3)({
                            graphicalItem: a,
                            activeTooltipItem: r,
                            itemData: c.props.data,
                          }),
                          d =
                            void 0 === c.props.activeIndex
                              ? p
                              : c.props.activeIndex;
                        return {
                          graphicalItem: eL(eL({}, a), {}, { childIndex: d }),
                          payload: (0, es.w7)(a, r)
                            ? c.props.data[p]
                            : a.props.data[p],
                        };
                      }
                    }
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e,
                    n = this;
                  if (!(0, L.TT)(this)) return null;
                  var r = this.props,
                    o = r.children,
                    i = r.className,
                    a = r.width,
                    u = r.height,
                    c = r.style,
                    l = r.compact,
                    s = r.title,
                    f = r.desc,
                    p = eA(r, eS),
                    d = (0, L.L6)(p, !1);
                  if (l)
                    return m.createElement(
                      tV,
                      {
                        state: this.state,
                        width: this.props.width,
                        height: this.props.height,
                        clipPathId: this.clipPathId,
                      },
                      m.createElement(
                        C.T,
                        eE({}, d, { width: a, height: u, title: s, desc: f }),
                        this.renderClipPath(),
                        (0, L.eu)(o, this.renderMap)
                      )
                    );
                  this.props.accessibilityLayer &&
                    ((d.tabIndex =
                      null !== (t = this.props.tabIndex) && void 0 !== t
                        ? t
                        : 0),
                    (d.role =
                      null !== (e = this.props.role) && void 0 !== e
                        ? e
                        : "application"),
                    (d.onKeyDown = function (t) {
                      n.accessibilityManager.keyboardEvent(t);
                    }),
                    (d.onFocus = function () {
                      n.accessibilityManager.focus();
                    }));
                  var h = this.parseEventsOfWrapper();
                  return m.createElement(
                    tV,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    m.createElement(
                      "div",
                      eE(
                        {
                          className: (0, M.Z)("recharts-wrapper", i),
                          style: eL(
                            {
                              position: "relative",
                              cursor: "default",
                              width: a,
                              height: u,
                            },
                            c
                          ),
                        },
                        h,
                        {
                          ref: function (t) {
                            n.container = t;
                          },
                        }
                      ),
                      m.createElement(
                        C.T,
                        eE({}, d, {
                          width: a,
                          height: u,
                          title: s,
                          desc: f,
                          style: eF,
                        }),
                        this.renderClipPath(),
                        (0, L.eu)(o, this.renderMap)
                      ),
                      this.renderLegend(),
                      this.renderTooltip()
                    )
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, eU(r.key), r);
              }
            })(n.prototype, e),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })(m.Component)),
        eB(o, "displayName", i),
        eB(
          o,
          "defaultProps",
          eL(
            {
              layout: "horizontal",
              stackOffset: "none",
              barCategoryGap: "10%",
              barGap: 4,
              margin: { top: 5, right: 5, bottom: 5, left: 5 },
              reverseStackOrder: !1,
              syncMethod: "index",
            },
            h
          )
        ),
        eB(o, "getDerivedStateFromProps", function (t, e) {
          var n = t.dataKey,
            r = t.data,
            o = t.children,
            i = t.width,
            a = t.height,
            u = t.layout,
            c = t.stackOffset,
            l = t.margin,
            s = e.dataStartIndex,
            f = e.dataEndIndex;
          if (void 0 === e.updateId) {
            var p = eQ(t);
            return eL(
              eL(
                eL({}, p),
                {},
                { updateId: 0 },
                v(eL(eL({ props: t }, p), {}, { updateId: 0 }), e)
              ),
              {},
              {
                prevDataKey: n,
                prevData: r,
                prevWidth: i,
                prevHeight: a,
                prevLayout: u,
                prevStackOffset: c,
                prevMargin: l,
                prevChildren: o,
              }
            );
          }
          if (
            n !== e.prevDataKey ||
            r !== e.prevData ||
            i !== e.prevWidth ||
            a !== e.prevHeight ||
            u !== e.prevLayout ||
            c !== e.prevStackOffset ||
            !(0, en.w)(l, e.prevMargin)
          ) {
            var d = eQ(t),
              h = {
                chartX: e.chartX,
                chartY: e.chartY,
                isTooltipActive: e.isTooltipActive,
              },
              y = eL(eL({}, eH(e, r, u)), {}, { updateId: e.updateId + 1 }),
              m = eL(eL(eL({}, d), h), y);
            return eL(
              eL(eL({}, m), v(eL({ props: t }, m), e)),
              {},
              {
                prevDataKey: n,
                prevData: r,
                prevWidth: i,
                prevHeight: a,
                prevLayout: u,
                prevStackOffset: c,
                prevMargin: l,
                prevChildren: o,
              }
            );
          }
          if (!(0, L.rL)(o, e.prevChildren)) {
            var g,
              x,
              O,
              w,
              j = (0, L.sP)(o, ts),
              S =
                j &&
                null !==
                  (g =
                    null === (x = j.props) || void 0 === x
                      ? void 0
                      : x.startIndex) &&
                void 0 !== g
                  ? g
                  : s,
              _ =
                j &&
                null !==
                  (O =
                    null === (w = j.props) || void 0 === w
                      ? void 0
                      : w.endIndex) &&
                void 0 !== O
                  ? O
                  : f,
              E = b()(r) || S !== s || _ !== f ? e.updateId + 1 : e.updateId;
            return eL(
              eL(
                { updateId: E },
                v(
                  eL(
                    eL({ props: t }, e),
                    {},
                    { updateId: E, dataStartIndex: S, dataEndIndex: _ }
                  ),
                  e
                )
              ),
              {},
              { prevChildren: o, dataStartIndex: S, dataEndIndex: _ }
            );
          }
          return null;
        }),
        eB(o, "renderActiveDot", function (t, e) {
          var n;
          return (
            (n = (0, m.isValidElement)(t)
              ? (0, m.cloneElement)(t, e)
              : O()(t)
              ? t(e)
              : m.createElement(U, e)),
            m.createElement(
              I.m,
              { className: "recharts-active-dot", key: e.key },
              n
            )
          );
        }),
        o);
    },
    68295: function (t, e, n) {
      "use strict";
      n.d(e, {
        b: function () {
          return r;
        },
      });
      var r = function (t) {
        return null;
      };
      r.displayName = "Cell";
    },
    96581: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return _;
        },
      });
      var r = n(2265),
        o = n(49972),
        i = n.n(o),
        a = n(14380),
        u = n.n(a),
        c = n(63117),
        l = n.n(c),
        s = n(44839),
        f = n(11078),
        p = n(92705),
        d = n(6779),
        h = n(48500);
      function y(t) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var v = ["offset"];
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function g(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != y(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != y(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == y(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var O = function (t) {
          var e = t.value,
            n = t.formatter,
            r = i()(t.children) ? e : t.children;
          return u()(n) ? n(r) : r;
        },
        w = function (t, e, n) {
          var o,
            a,
            u = t.position,
            c = t.viewBox,
            l = t.offset,
            f = t.className,
            p = c.cx,
            y = c.cy,
            v = c.innerRadius,
            m = c.outerRadius,
            g = c.startAngle,
            b = c.endAngle,
            O = c.clockWise,
            w = (v + m) / 2,
            j = (0, d.uY)(b - g) * Math.min(Math.abs(b - g), 360),
            S = j >= 0 ? 1 : -1;
          "insideStart" === u
            ? ((o = g + S * l), (a = O))
            : "insideEnd" === u
            ? ((o = b - S * l), (a = !O))
            : "end" === u && ((o = b + S * l), (a = O)),
            (a = j <= 0 ? a : !a);
          var _ = (0, h.op)(p, y, w, o),
            E = (0, h.op)(p, y, w, o + (a ? 1 : -1) * 359),
            P = "M"
              .concat(_.x, ",")
              .concat(_.y, "\n    A")
              .concat(w, ",")
              .concat(w, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(E.x, ",")
              .concat(E.y),
            A = i()(t.id) ? (0, d.EL)("recharts-radial-line-") : t.id;
          return r.createElement(
            "text",
            x({}, n, {
              dominantBaseline: "central",
              className: (0, s.Z)("recharts-radial-bar-label", f),
            }),
            r.createElement(
              "defs",
              null,
              r.createElement("path", { id: A, d: P })
            ),
            r.createElement("textPath", { xlinkHref: "#".concat(A) }, e)
          );
        },
        j = function (t) {
          var e = t.viewBox,
            n = t.offset,
            r = t.position,
            o = e.cx,
            i = e.cy,
            a = e.innerRadius,
            u = e.outerRadius,
            c = (e.startAngle + e.endAngle) / 2;
          if ("outside" === r) {
            var l = (0, h.op)(o, i, u + n, c),
              s = l.x;
            return {
              x: s,
              y: l.y,
              textAnchor: s >= o ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === r)
            return {
              x: o,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === r)
            return {
              x: o,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === r)
            return { x: o, y: i, textAnchor: "middle", verticalAnchor: "end" };
          var f = (0, h.op)(o, i, (a + u) / 2, c);
          return {
            x: f.x,
            y: f.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        S = function (t) {
          var e = t.viewBox,
            n = t.parentViewBox,
            r = t.offset,
            o = t.position,
            i = e.x,
            a = e.y,
            u = e.width,
            c = e.height,
            s = c >= 0 ? 1 : -1,
            f = s * r,
            p = s > 0 ? "end" : "start",
            h = s > 0 ? "start" : "end",
            y = u >= 0 ? 1 : -1,
            v = y * r,
            m = y > 0 ? "end" : "start",
            g = y > 0 ? "start" : "end";
          if ("top" === o)
            return b(
              b(
                {},
                {
                  x: i + u / 2,
                  y: a - s * r,
                  textAnchor: "middle",
                  verticalAnchor: p,
                }
              ),
              n ? { height: Math.max(a - n.y, 0), width: u } : {}
            );
          if ("bottom" === o)
            return b(
              b(
                {},
                {
                  x: i + u / 2,
                  y: a + c + f,
                  textAnchor: "middle",
                  verticalAnchor: h,
                }
              ),
              n
                ? { height: Math.max(n.y + n.height - (a + c), 0), width: u }
                : {}
            );
          if ("left" === o) {
            var x = {
              x: i - v,
              y: a + c / 2,
              textAnchor: m,
              verticalAnchor: "middle",
            };
            return b(
              b({}, x),
              n ? { width: Math.max(x.x - n.x, 0), height: c } : {}
            );
          }
          if ("right" === o) {
            var O = {
              x: i + u + v,
              y: a + c / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            };
            return b(
              b({}, O),
              n ? { width: Math.max(n.x + n.width - O.x, 0), height: c } : {}
            );
          }
          var w = n ? { width: u, height: c } : {};
          return "insideLeft" === o
            ? b(
                {
                  x: i + v,
                  y: a + c / 2,
                  textAnchor: g,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideRight" === o
            ? b(
                {
                  x: i + u - v,
                  y: a + c / 2,
                  textAnchor: m,
                  verticalAnchor: "middle",
                },
                w
              )
            : "insideTop" === o
            ? b(
                {
                  x: i + u / 2,
                  y: a + f,
                  textAnchor: "middle",
                  verticalAnchor: h,
                },
                w
              )
            : "insideBottom" === o
            ? b(
                {
                  x: i + u / 2,
                  y: a + c - f,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                w
              )
            : "insideTopLeft" === o
            ? b({ x: i + v, y: a + f, textAnchor: g, verticalAnchor: h }, w)
            : "insideTopRight" === o
            ? b({ x: i + u - v, y: a + f, textAnchor: m, verticalAnchor: h }, w)
            : "insideBottomLeft" === o
            ? b({ x: i + v, y: a + c - f, textAnchor: g, verticalAnchor: p }, w)
            : "insideBottomRight" === o
            ? b(
                {
                  x: i + u - v,
                  y: a + c - f,
                  textAnchor: m,
                  verticalAnchor: p,
                },
                w
              )
            : l()(o) &&
              ((0, d.hj)(o.x) || (0, d.hU)(o.x)) &&
              ((0, d.hj)(o.y) || (0, d.hU)(o.y))
            ? b(
                {
                  x: i + (0, d.h1)(o.x, u),
                  y: a + (0, d.h1)(o.y, c),
                  textAnchor: "end",
                  verticalAnchor: "end",
                },
                w
              )
            : b(
                {
                  x: i + u / 2,
                  y: a + c / 2,
                  textAnchor: "middle",
                  verticalAnchor: "middle",
                },
                w
              );
        };
      function _(t) {
        var e,
          n = t.offset,
          o = b(
            { offset: void 0 === n ? 5 : n },
            (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    !(e.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, n) &&
                      (o[n] = t[n]);
              }
              return o;
            })(t, v)
          ),
          a = o.viewBox,
          c = o.position,
          l = o.value,
          h = o.children,
          y = o.content,
          m = o.className,
          g = o.textBreakAll;
        if (!a || (i()(l) && i()(h) && !(0, r.isValidElement)(y) && !u()(y)))
          return null;
        if ((0, r.isValidElement)(y)) return (0, r.cloneElement)(y, o);
        if (u()(y)) {
          if (((e = (0, r.createElement)(y, o)), (0, r.isValidElement)(e)))
            return e;
        } else e = O(o);
        var _ = "cx" in a && (0, d.hj)(a.cx),
          E = (0, p.L6)(o, !0);
        if (_ && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return w(o, e, E);
        var P = _ ? j(o) : S(o);
        return r.createElement(
          f.x,
          x(
            { className: (0, s.Z)("recharts-label", void 0 === m ? "" : m) },
            E,
            P,
            { breakAll: g }
          ),
          e
        );
      }
      _.displayName = "Label";
      var E = function (t) {
        var e = t.cx,
          n = t.cy,
          r = t.angle,
          o = t.startAngle,
          i = t.endAngle,
          a = t.r,
          u = t.radius,
          c = t.innerRadius,
          l = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          h = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          g = t.labelViewBox;
        if (g) return g;
        if ((0, d.hj)(y) && (0, d.hj)(v)) {
          if ((0, d.hj)(s) && (0, d.hj)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, d.hj)(p) && (0, d.hj)(h))
            return { x: p, y: h, width: y, height: v };
        }
        return (0, d.hj)(s) && (0, d.hj)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, d.hj)(e) && (0, d.hj)(n)
          ? {
              cx: e,
              cy: n,
              startAngle: o || r || 0,
              endAngle: i || r || 0,
              innerRadius: c || 0,
              outerRadius: l || u || a || 0,
              clockWise: m,
            }
          : t.viewBox
          ? t.viewBox
          : {};
      };
      (_.parseViewBox = E),
        (_.renderCallByParent = function (t, e) {
          var n,
            o,
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && i && !t.label)) return null;
          var a = t.children,
            c = E(t),
            s = (0, p.NN)(a, _).map(function (t, n) {
              return (0,
              r.cloneElement)(t, { viewBox: e || c, key: "label-".concat(n) });
            });
          return i
            ? [
                ((n = t.label),
                (o = e || c),
                n
                  ? !0 === n
                    ? r.createElement(_, { key: "label-implicit", viewBox: o })
                    : (0, d.P2)(n)
                    ? r.createElement(_, {
                        key: "label-implicit",
                        viewBox: o,
                        value: n,
                      })
                    : (0, r.isValidElement)(n)
                    ? n.type === _
                      ? (0, r.cloneElement)(n, {
                          key: "label-implicit",
                          viewBox: o,
                        })
                      : r.createElement(_, {
                          key: "label-implicit",
                          content: n,
                          viewBox: o,
                        })
                    : u()(n)
                    ? r.createElement(_, {
                        key: "label-implicit",
                        content: n,
                        viewBox: o,
                      })
                    : l()(n)
                    ? r.createElement(
                        _,
                        x({ viewBox: o }, n, { key: "label-implicit" })
                      )
                    : null
                  : null),
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return m(t);
                })(s) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(s) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return m(t, void 0);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return m(t, void 0);
                    }
                  })(s) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )
            : s;
        });
    },
    20153: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return N;
        },
      });
      var r = n(2265),
        o = n(14380),
        i = n.n(o),
        a = n(44839),
        u = n(83565),
        c = n(26599),
        l = n(45022),
        s = n(91488);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (h = function () {
          return !!t;
        })();
      }
      function y(t) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function v(t, e) {
        return (v = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function m(t, e, n) {
        return (
          (e = g(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function g(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != f(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : String(e);
      }
      var b = (function (t) {
        var e;
        function n() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (t = n),
            (e = arguments),
            (t = y(t)),
            (function (t, e) {
              if (e && ("object" === f(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              h()
                ? Reflect.construct(t, e || [], y(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && v(t, e);
          })(n, t),
          (e = [
            {
              key: "renderIcon",
              value: function (t) {
                var e = this.props.inactiveColor,
                  n = 32 / 6,
                  o = 32 / 3,
                  i = t.inactive ? e : t.color;
                if ("plainline" === t.type)
                  return r.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: i,
                    strokeDasharray: t.payload.strokeDasharray,
                    x1: 0,
                    y1: 16,
                    x2: 32,
                    y2: 16,
                    className: "recharts-legend-icon",
                  });
                if ("line" === t.type)
                  return r.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: i,
                    d: "M0,"
                      .concat(16, "h")
                      .concat(o, "\n            A")
                      .concat(n, ",")
                      .concat(n, ",0,1,1,")
                      .concat(2 * o, ",")
                      .concat(16, "\n            H")
                      .concat(32, "M")
                      .concat(2 * o, ",")
                      .concat(16, "\n            A")
                      .concat(n, ",")
                      .concat(n, ",0,1,1,")
                      .concat(o, ",")
                      .concat(16),
                    className: "recharts-legend-icon",
                  });
                if ("rect" === t.type)
                  return r.createElement("path", {
                    stroke: "none",
                    fill: i,
                    d: "M0,"
                      .concat(4, "h")
                      .concat(32, "v")
                      .concat(24, "h")
                      .concat(-32, "z"),
                    className: "recharts-legend-icon",
                  });
                if (r.isValidElement(t.legendIcon)) {
                  var a = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? d(Object(n), !0).forEach(function (e) {
                            m(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : d(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({}, t);
                  return delete a.legendIcon, r.cloneElement(t.legendIcon, a);
                }
                return r.createElement(l.v, {
                  fill: i,
                  cx: 16,
                  cy: 16,
                  size: 32,
                  sizeType: "diameter",
                  type: t.type,
                });
              },
            },
            {
              key: "renderItems",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.payload,
                  o = e.iconSize,
                  l = e.layout,
                  f = e.formatter,
                  d = e.inactiveColor,
                  h = { x: 0, y: 0, width: 32, height: 32 },
                  y = {
                    display: "horizontal" === l ? "inline-block" : "block",
                    marginRight: 10,
                  },
                  v = {
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: 4,
                  };
                return n.map(function (e, n) {
                  var l = e.formatter || f,
                    g = (0, a.Z)(
                      m(
                        m(
                          { "recharts-legend-item": !0 },
                          "legend-item-".concat(n),
                          !0
                        ),
                        "inactive",
                        e.inactive
                      )
                    );
                  if ("none" === e.type) return null;
                  var b = i()(e.value) ? null : e.value;
                  (0,
                  u.Z)(!i()(e.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                  var x = e.inactive ? d : e.color;
                  return r.createElement(
                    "li",
                    p(
                      { className: g, style: y, key: "legend-item-".concat(n) },
                      (0, s.bw)(t.props, e, n)
                    ),
                    r.createElement(
                      c.T,
                      { width: o, height: o, viewBox: h, style: v },
                      t.renderIcon(e)
                    ),
                    r.createElement(
                      "span",
                      {
                        className: "recharts-legend-item-text",
                        style: { color: x },
                      },
                      l ? l(b, e, n) : b
                    )
                  );
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.payload,
                  n = t.layout,
                  o = t.align;
                return e && e.length
                  ? r.createElement(
                      "ul",
                      {
                        className: "recharts-default-legend",
                        style: {
                          padding: 0,
                          margin: 0,
                          textAlign: "horizontal" === n ? o : "left",
                        },
                      },
                      this.renderItems()
                    )
                  : null;
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, g(r.key), r);
            }
          })(n.prototype, e),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(r.PureComponent);
      m(b, "displayName", "Legend"),
        m(b, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var x = n(6779),
        O = n(34630);
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var j = ["ref"];
      function S(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(n), !0).forEach(function (e) {
                T(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function E(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, C(r.key), r);
        }
      }
      function P() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (P = function () {
          return !!t;
        })();
      }
      function A(t) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function k(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function M(t, e) {
        return (M = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function T(t, e, n) {
        return (
          (e = C(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function C(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != w(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : String(e);
      }
      function I(t) {
        return t.value;
      }
      var N = (function (t) {
        var e, n;
        function o() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, o);
          for (
            var t, e, n, r = arguments.length, i = Array(r), a = 0;
            a < r;
            a++
          )
            i[a] = arguments[a];
          return (
            (e = o),
            (n = [].concat(i)),
            (e = A(e)),
            (t = (function (t, e) {
              if (e && ("object" === w(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return k(t);
            })(
              this,
              P()
                ? Reflect.construct(e, n || [], A(this).constructor)
                : e.apply(this, n)
            )),
            T(k(t), "lastBoundingBox", { width: -1, height: -1 }),
            t
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && M(t, e);
          })(o, t),
          (e = [
            {
              key: "componentDidMount",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.updateBBox();
              },
            },
            {
              key: "getBBox",
              value: function () {
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var t = this.wrapperNode.getBoundingClientRect();
                  return (
                    (t.height = this.wrapperNode.offsetHeight),
                    (t.width = this.wrapperNode.offsetWidth),
                    t
                  );
                }
                return null;
              },
            },
            {
              key: "updateBBox",
              value: function () {
                var t = this.props.onBBoxUpdate,
                  e = this.getBBox();
                e
                  ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e))
                  : (-1 !== this.lastBoundingBox.width ||
                      -1 !== this.lastBoundingBox.height) &&
                    ((this.lastBoundingBox.width = -1),
                    (this.lastBoundingBox.height = -1),
                    t && t(null));
              },
            },
            {
              key: "getBBoxSnapshot",
              value: function () {
                return this.lastBoundingBox.width >= 0 &&
                  this.lastBoundingBox.height >= 0
                  ? _({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  n,
                  r = this.props,
                  o = r.layout,
                  i = r.align,
                  a = r.verticalAlign,
                  u = r.margin,
                  c = r.chartWidth,
                  l = r.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === i && "vertical" === o
                        ? {
                            left: ((c || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === i
                        ? { right: (u && u.right) || 0 }
                        : { left: (u && u.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (n =
                      "middle" === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                        ? { bottom: (u && u.bottom) || 0 }
                        : { top: (u && u.top) || 0 }),
                  _(_({}, e), n)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.content,
                  o = e.width,
                  i = e.height,
                  a = e.wrapperStyle,
                  u = e.payloadUniqBy,
                  c = e.payload,
                  l = _(
                    _(
                      {
                        position: "absolute",
                        width: o || "auto",
                        height: i || "auto",
                      },
                      this.getDefaultPosition(a)
                    ),
                    a
                  );
                return r.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: l,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (r.isValidElement(t)) return r.cloneElement(t, e);
                    if ("function" == typeof t) return r.createElement(t, e);
                    e.ref;
                    var n = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(t);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                          return o;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            !(e.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                n
                              ) &&
                              (o[n] = t[n]);
                      }
                      return o;
                    })(e, j);
                    return r.createElement(b, n);
                  })(
                    n,
                    _(_({}, this.props), {}, { payload: (0, O.z)(c, u, I) })
                  )
                );
              },
            },
          ]),
          (n = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var n = t.props.layout;
                return "vertical" === n && (0, x.hj)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === n
                  ? { width: t.props.width || e }
                  : null;
              },
            },
          ]),
          e && E(o.prototype, e),
          n && E(o, n),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o
        );
      })(r.PureComponent);
      T(N, "displayName", "Legend"),
        T(N, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    35231: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return y;
        },
      });
      var r = n(44839),
        o = n(2265),
        i = n(48527),
        a = n.n(i),
        u = n(12659),
        c = n(6779),
        l = n(83565),
        s = n(92705);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != f(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != f(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == f(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var y = (0, o.forwardRef)(function (t, e) {
        var n,
          i = t.aspect,
          f = t.initialDimension,
          p = void 0 === f ? { width: -1, height: -1 } : f,
          y = t.width,
          v = void 0 === y ? "100%" : y,
          m = t.height,
          g = void 0 === m ? "100%" : m,
          b = t.minWidth,
          x = void 0 === b ? 0 : b,
          O = t.minHeight,
          w = t.maxHeight,
          j = t.children,
          S = t.debounce,
          _ = void 0 === S ? 0 : S,
          E = t.id,
          P = t.className,
          A = t.onResize,
          k = t.style,
          M = (0, o.useRef)(null),
          T = (0, o.useRef)();
        (T.current = A),
          (0, o.useImperativeHandle)(e, function () {
            return Object.defineProperty(M.current, "current", {
              get: function () {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported."
                  ),
                  M.current
                );
              },
              configurable: !0,
            });
          });
        var C =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(
              (n = (0, o.useState)({
                containerWidth: p.width,
                containerHeight: p.height,
              }))
            ) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i,
                  a,
                  u = [],
                  c = !0,
                  l = !1;
                try {
                  for (
                    i = (n = n.call(t)).next;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), 2 !== u.length);
                    c = !0
                  );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !c &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return u;
              }
            })(n, 2) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return h(t, 2);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(t);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return h(t, 2);
              }
            })(n, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          I = C[0],
          N = C[1],
          D = (0, o.useCallback)(function (t, e) {
            N(function (n) {
              var r = Math.round(t),
                o = Math.round(e);
              return n.containerWidth === r && n.containerHeight === o
                ? n
                : { containerWidth: r, containerHeight: o };
            });
          }, []);
        (0, o.useEffect)(
          function () {
            var t = function (t) {
              var e,
                n = t[0].contentRect,
                r = n.width,
                o = n.height;
              D(r, o),
                null === (e = T.current) || void 0 === e || e.call(T, r, o);
            };
            _ > 0 && (t = a()(t, _, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              n = M.current.getBoundingClientRect();
            return (
              D(n.width, n.height),
              e.observe(M.current),
              function () {
                e.disconnect();
              }
            );
          },
          [D, _]
        );
        var R = (0, o.useMemo)(
          function () {
            var t = I.containerWidth,
              e = I.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, l.Z)(
              (0, c.hU)(v) || (0, c.hU)(g),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              v,
              g
            ),
              (0, l.Z)(
                !i || i > 0,
                "The aspect(%s) must be greater than zero.",
                i
              );
            var n = (0, c.hU)(v) ? t : v,
              r = (0, c.hU)(g) ? e : g;
            i &&
              i > 0 &&
              (n ? (r = n / i) : r && (n = r * i), w && r > w && (r = w)),
              (0, l.Z)(
                n > 0 || r > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                n,
                r,
                v,
                g,
                x,
                O,
                i
              );
            var a =
              !Array.isArray(j) &&
              (0, u.isElement)(j) &&
              (0, s.Gf)(j.type).endsWith("Chart");
            return o.Children.map(j, function (t) {
              return (0, u.isElement)(t)
                ? (0, o.cloneElement)(
                    t,
                    d(
                      { width: n, height: r },
                      a
                        ? {
                            style: d(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: r,
                                maxWidth: n,
                              },
                              t.props.style
                            ),
                          }
                        : {}
                    )
                  )
                : t;
            });
          },
          [i, j, g, w, O, x, I, v]
        );
        return o.createElement(
          "div",
          {
            id: E ? "".concat(E) : void 0,
            className: (0, r.Z)("recharts-responsive-container", P),
            style: d(
              d({}, void 0 === k ? {} : k),
              {},
              { width: v, height: g, minWidth: x, minHeight: O, maxHeight: w }
            ),
            ref: M,
          },
          R
        );
      });
    },
    11078: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return L;
        },
      });
      var r = n(2265),
        o = n(49972),
        i = n.n(o),
        a = n(44839),
        u = n(6779),
        c = n(47513),
        l = n(92705),
        s = n(87097);
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return d(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return d(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              t,
              (function (t) {
                var e = (function (t, e) {
                  if ("object" != f(t) || !t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(t, e || "default");
                    if ("object" != f(r)) return r;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == f(e) ? e : String(e);
              })(r.key),
              r
            );
        }
      }
      var y = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        g = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        b = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        x = Object.keys(b),
        O = (function () {
          var t, e;
          function n(t, e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
              (this.num = t),
              (this.unit = e),
              (this.num = t),
              (this.unit = e),
              Number.isNaN(t) && (this.unit = ""),
              "" === e || m.test(e) || ((this.num = NaN), (this.unit = "")),
              x.includes(e) && ((this.num = t * b[e]), (this.unit = "px"));
          }
          return (
            (t = [
              {
                key: "add",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num + t.num, this.unit);
                },
              },
              {
                key: "subtract",
                value: function (t) {
                  return this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num - t.num, this.unit);
                },
              },
              {
                key: "multiply",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num * t.num, this.unit || t.unit);
                },
              },
              {
                key: "divide",
                value: function (t) {
                  return "" !== this.unit &&
                    "" !== t.unit &&
                    this.unit !== t.unit
                    ? new n(NaN, "")
                    : new n(this.num / t.num, this.unit || t.unit);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "".concat(this.num).concat(this.unit);
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.num);
                },
              },
            ]),
            (e = [
              {
                key: "parse",
                value: function (t) {
                  var e,
                    r = p(null !== (e = g.exec(t)) && void 0 !== e ? e : [], 3),
                    o = r[1],
                    i = r[2];
                  return new n(parseFloat(o), null != i ? i : "");
                },
              },
            ]),
            t && h(n.prototype, t),
            e && h(n, e),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })();
      function w(t) {
        if (t.includes("NaN")) return "NaN";
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var n,
            r = p(null !== (n = y.exec(e)) && void 0 !== n ? n : [], 4),
            o = r[1],
            i = r[2],
            a = r[3],
            u = O.parse(null != o ? o : ""),
            c = O.parse(null != a ? a : ""),
            l = "*" === i ? u.multiply(c) : u.divide(c);
          if (l.isNaN()) return "NaN";
          e = e.replace(y, l.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null !== (s = v.exec(e)) && void 0 !== s ? s : [], 4),
            d = f[1],
            h = f[2],
            m = f[3],
            g = O.parse(null != d ? d : ""),
            b = O.parse(null != m ? m : ""),
            x = "+" === h ? g.add(b) : g.subtract(b);
          if (x.isNaN()) return "NaN";
          e = e.replace(v, x.toString());
        }
        return e;
      }
      var j = /\(([^()]*)\)/;
      function S(t) {
        var e = (function (t) {
          try {
            var e;
            return (
              (e = t.replace(/\s+/g, "")),
              (e = (function (t) {
                for (var e = t; e.includes("("); ) {
                  var n = p(j.exec(e), 2)[1];
                  e = e.replace(j, w(n));
                }
                return e;
              })(e)),
              (e = w(e))
            );
          } catch (t) {
            return "NaN";
          }
        })(t.slice(5, -1));
        return "NaN" === e ? "" : e;
      }
      var _ = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        E = ["dx", "dy", "angle", "className", "breakAll"];
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function A(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]);
        }
        return o;
      }
      function k(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return M(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return M(t, e);
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function M(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var T = /[ \f\n\r\t\v\u2028\u2029]+/,
        C = function (t) {
          var e = t.children,
            n = t.breakAll,
            r = t.style;
          try {
            var o = [];
            i()(e) || (o = n ? e.toString().split("") : e.toString().split(T));
            var a = o.map(function (t) {
                return { word: t, width: (0, s.xE)(t, r).width };
              }),
              u = n ? 0 : (0, s.xE)("\xa0", r).width;
            return { wordsWithComputedWidth: a, spaceWidth: u };
          } catch (t) {
            return null;
          }
        },
        I = function (t, e, n, r, o) {
          var i,
            a = t.maxLines,
            c = t.children,
            l = t.style,
            s = t.breakAll,
            f = (0, u.hj)(a),
            p = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return t.reduce(function (t, e) {
                var i = e.word,
                  a = e.width,
                  u = t[t.length - 1];
                return (
                  u && (null == r || o || u.width + a + n < Number(r))
                    ? (u.words.push(i), (u.width += a + n))
                    : t.push({ words: [i], width: a }),
                  t
                );
              }, []);
            },
            d = p(e);
          if (!f) return d;
          for (
            var h = function (t) {
                var e = p(
                  C({ breakAll: s, style: l, children: c.slice(0, t) + "…" })
                    .wordsWithComputedWidth
                );
                return [
                  e.length > a ||
                    e.reduce(function (t, e) {
                      return t.width > e.width ? t : e;
                    }).width > Number(r),
                  e,
                ];
              },
              y = 0,
              v = c.length - 1,
              m = 0;
            y <= v && m <= c.length - 1;

          ) {
            var g = Math.floor((y + v) / 2),
              b = k(h(g - 1), 2),
              x = b[0],
              O = b[1],
              w = k(h(g), 1)[0];
            if ((x || w || (y = g + 1), x && w && (v = g - 1), !x && w)) {
              i = O;
              break;
            }
            m++;
          }
          return i || d;
        },
        N = function (t) {
          return [{ words: i()(t) ? [] : t.toString().split(T) }];
        },
        D = function (t) {
          var e = t.width,
            n = t.scaleToFit,
            r = t.children,
            o = t.style,
            i = t.breakAll,
            a = t.maxLines;
          if ((e || n) && !c.x.isSsr) {
            var u = C({ breakAll: i, children: r, style: o });
            return u
              ? I(
                  { breakAll: i, children: r, maxLines: a, style: o },
                  u.wordsWithComputedWidth,
                  u.spaceWidth,
                  e,
                  n
                )
              : N(r);
          }
          return N(r);
        },
        R = "#808080",
        L = function (t) {
          var e,
            n = t.x,
            o = void 0 === n ? 0 : n,
            i = t.y,
            c = void 0 === i ? 0 : i,
            s = t.lineHeight,
            f = void 0 === s ? "1em" : s,
            p = t.capHeight,
            d = void 0 === p ? "0.71em" : p,
            h = t.scaleToFit,
            y = void 0 !== h && h,
            v = t.textAnchor,
            m = t.verticalAnchor,
            g = t.fill,
            b = void 0 === g ? R : g,
            x = A(t, _),
            O = (0, r.useMemo)(
              function () {
                return D({
                  breakAll: x.breakAll,
                  children: x.children,
                  maxLines: x.maxLines,
                  scaleToFit: y,
                  style: x.style,
                  width: x.width,
                });
              },
              [x.breakAll, x.children, x.maxLines, y, x.style, x.width]
            ),
            w = x.dx,
            j = x.dy,
            k = x.angle,
            M = x.className,
            T = x.breakAll,
            C = A(x, E);
          if (!(0, u.P2)(o) || !(0, u.P2)(c)) return null;
          var I = o + ((0, u.hj)(w) ? w : 0),
            N = c + ((0, u.hj)(j) ? j : 0);
          switch (void 0 === m ? "end" : m) {
            case "start":
              e = S("calc(".concat(d, ")"));
              break;
            case "middle":
              e = S(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(f, " + (")
                  .concat(d, " / 2))")
              );
              break;
            default:
              e = S("calc(".concat(O.length - 1, " * -").concat(f, ")"));
          }
          var L = [];
          if (y) {
            var B = O[0].width,
              U = x.width;
            L.push("scale(".concat(((0, u.hj)(U) ? U / B : 1) / B, ")"));
          }
          return (
            k &&
              L.push("rotate(".concat(k, ", ").concat(I, ", ").concat(N, ")")),
            L.length && (C.transform = L.join(" ")),
            r.createElement(
              "text",
              P({}, (0, l.L6)(C, !0), {
                x: I,
                y: N,
                className: (0, a.Z)("recharts-text", M),
                textAnchor: void 0 === v ? "start" : v,
                fill: b.includes("url") ? R : b,
              }),
              O.map(function (t, n) {
                var o = t.words.join(T ? "" : " ");
                return r.createElement(
                  "tspan",
                  { x: I, dy: 0 === n ? e : f, key: o },
                  o
                );
              })
            )
          );
        };
    },
    85475: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return W;
        },
      });
      var r = n(2265),
        o = n(60229),
        i = n.n(o),
        a = n(49972),
        u = n.n(a),
        c = n(44839),
        l = n(6779);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != s(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != s(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == s(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function y(t) {
        return Array.isArray(t) && (0, l.P2)(t[0]) && (0, l.P2)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var v = function (t) {
        var e = t.separator,
          n = void 0 === e ? " : " : e,
          o = t.contentStyle,
          a = t.itemStyle,
          s = void 0 === a ? {} : a,
          d = t.labelStyle,
          v = t.payload,
          m = t.formatter,
          g = t.itemSorter,
          b = t.wrapperClassName,
          x = t.labelClassName,
          O = t.label,
          w = t.labelFormatter,
          j = t.accessibilityLayer,
          S = h(
            {
              margin: 0,
              padding: 10,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              whiteSpace: "nowrap",
            },
            void 0 === o ? {} : o
          ),
          _ = h({ margin: 0 }, void 0 === d ? {} : d),
          E = !u()(O),
          P = E ? O : "",
          A = (0, c.Z)("recharts-default-tooltip", b),
          k = (0, c.Z)("recharts-tooltip-label", x);
        return (
          E && w && null != v && (P = w(O, v)),
          r.createElement(
            "div",
            f(
              { className: A, style: S },
              void 0 !== j && j
                ? { role: "status", "aria-live": "assertive" }
                : {}
            ),
            r.createElement(
              "p",
              { className: k, style: _ },
              r.isValidElement(P) ? P : "".concat(P)
            ),
            (function () {
              if (v && v.length) {
                var t = (g ? i()(v, g) : v).map(function (t, e) {
                  if ("none" === t.type) return null;
                  var o = h(
                      {
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: t.color || "#000",
                      },
                      s
                    ),
                    i = t.formatter || m || y,
                    a = t.value,
                    u = t.name,
                    c = a,
                    f = u;
                  if (i && null != c && null != f) {
                    var d = i(a, u, t, e, v);
                    if (Array.isArray(d)) {
                      var g =
                        (function (t) {
                          if (Array.isArray(t)) return t;
                        })(d) ||
                        (function (t, e) {
                          var n =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != n) {
                            var r,
                              o,
                              i,
                              a,
                              u = [],
                              c = !0,
                              l = !1;
                            try {
                              for (
                                i = (n = n.call(t)).next;
                                !(c = (r = i.call(n)).done) &&
                                (u.push(r.value), 2 !== u.length);
                                c = !0
                              );
                            } catch (t) {
                              (l = !0), (o = t);
                            } finally {
                              try {
                                if (
                                  !c &&
                                  null != n.return &&
                                  ((a = n.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (l) throw o;
                              }
                            }
                            return u;
                          }
                        })(d, 2) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return p(t, 2);
                            var n = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            if (
                              ("Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n)
                            )
                              return Array.from(t);
                            if (
                              "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                              return p(t, 2);
                          }
                        })(d, 2) ||
                        (function () {
                          throw TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })();
                      (c = g[0]), (f = g[1]);
                    } else c = d;
                  }
                  return r.createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(e),
                      style: o,
                    },
                    (0, l.P2)(f)
                      ? r.createElement(
                          "span",
                          { className: "recharts-tooltip-item-name" },
                          f
                        )
                      : null,
                    (0, l.P2)(f)
                      ? r.createElement(
                          "span",
                          { className: "recharts-tooltip-item-separator" },
                          n
                        )
                      : null,
                    r.createElement(
                      "span",
                      { className: "recharts-tooltip-item-value" },
                      c
                    ),
                    r.createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      t.unit || ""
                    )
                  );
                });
                return r.createElement(
                  "ul",
                  {
                    className: "recharts-tooltip-item-list",
                    style: { padding: 0, margin: 0 },
                  },
                  t
                );
              }
              return null;
            })()
          )
        );
      };
      function m(t) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function g(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" != m(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != m(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == m(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var b = "recharts-tooltip-wrapper",
        x = { visibility: "hidden" };
      function O(t) {
        var e = t.allowEscapeViewBox,
          n = t.coordinate,
          r = t.key,
          o = t.offsetTopLeft,
          i = t.position,
          a = t.reverseDirection,
          u = t.tooltipDimension,
          c = t.viewBox,
          s = t.viewBoxDimension;
        if (i && (0, l.hj)(i[r])) return i[r];
        var f = n[r] - u - o,
          p = n[r] + o;
        return e[r]
          ? a[r]
            ? f
            : p
          : a[r]
          ? f < c[r]
            ? Math.max(p, c[r])
            : Math.max(f, c[r])
          : p + u > c[r] + s
          ? Math.max(f, c[r])
          : Math.max(p, c[r]);
      }
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function j(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(n), !0).forEach(function (e) {
                k(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function _() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (_ = function () {
          return !!t;
        })();
      }
      function E(t) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function P(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function A(t, e) {
        return (A = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function k(t, e, n) {
        return (
          (e = M(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function M(t) {
        var e = (function (t, e) {
          if ("object" != w(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != w(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == w(e) ? e : String(e);
      }
      var T = (function (t) {
          var e;
          function n() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n);
            for (
              var t, e, r, o = arguments.length, i = Array(o), a = 0;
              a < o;
              a++
            )
              i[a] = arguments[a];
            return (
              (e = n),
              (r = [].concat(i)),
              (e = E(e)),
              (t = (function (t, e) {
                if (e && ("object" === w(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return P(t);
              })(
                this,
                _()
                  ? Reflect.construct(e, r || [], E(this).constructor)
                  : e.apply(this, r)
              )),
              k(P(t), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
                lastBoundingBox: { width: -1, height: -1 },
              }),
              k(P(t), "handleKeyDown", function (e) {
                if ("Escape" === e.key) {
                  var n, r, o, i;
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !==
                          (n =
                            null === (r = t.props.coordinate) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0,
                      y:
                        null !==
                          (o =
                            null === (i = t.props.coordinate) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== o
                          ? o
                          : 0,
                    },
                  });
                }
              }),
              t
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && A(t, e);
            })(n, t),
            (e = [
              {
                key: "updateBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.state.lastBoundingBox.height) >
                        1) &&
                      this.setState({
                        lastBoundingBox: { width: t.width, height: t.height },
                      });
                  } else
                    (-1 !== this.state.lastBoundingBox.width ||
                      -1 !== this.state.lastBoundingBox.height) &&
                      this.setState({
                        lastBoundingBox: { width: -1, height: -1 },
                      });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("keydown", this.handleKeyDown),
                    this.updateBBox();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.handleKeyDown);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t, e;
                  this.props.active && this.updateBBox(),
                    this.state.dismissed &&
                      ((null === (t = this.props.coordinate) || void 0 === t
                        ? void 0
                        : t.x) !== this.state.dismissedAtCoordinate.x ||
                        (null === (e = this.props.coordinate) || void 0 === e
                          ? void 0
                          : e.y) !== this.state.dismissedAtCoordinate.y) &&
                      (this.state.dismissed = !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e,
                    n,
                    o,
                    i,
                    a,
                    u,
                    s,
                    f,
                    p,
                    d,
                    h,
                    y,
                    v,
                    m,
                    w,
                    j,
                    _,
                    E,
                    P = this,
                    A = this.props,
                    k = A.active,
                    M = A.allowEscapeViewBox,
                    T = A.animationDuration,
                    C = A.animationEasing,
                    I = A.children,
                    N = A.coordinate,
                    D = A.hasPayload,
                    R = A.isAnimationActive,
                    L = A.offset,
                    B = A.position,
                    U = A.reverseDirection,
                    z = A.useTranslate3d,
                    F = A.viewBox,
                    $ = A.wrapperStyle,
                    W =
                      ((h = (t = {
                        allowEscapeViewBox: M,
                        coordinate: N,
                        offsetTopLeft: L,
                        position: B,
                        reverseDirection: U,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: z,
                        viewBox: F,
                      }).allowEscapeViewBox),
                      (y = t.coordinate),
                      (v = t.offsetTopLeft),
                      (m = t.position),
                      (w = t.reverseDirection),
                      (j = t.tooltipBox),
                      (_ = t.useTranslate3d),
                      (E = t.viewBox),
                      j.height > 0 && j.width > 0 && y
                        ? ((n = (e = {
                            translateX: (p = O({
                              allowEscapeViewBox: h,
                              coordinate: y,
                              key: "x",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: j.width,
                              viewBox: E,
                              viewBoxDimension: E.width,
                            })),
                            translateY: (d = O({
                              allowEscapeViewBox: h,
                              coordinate: y,
                              key: "y",
                              offsetTopLeft: v,
                              position: m,
                              reverseDirection: w,
                              tooltipDimension: j.height,
                              viewBox: E,
                              viewBoxDimension: E.height,
                            })),
                            useTranslate3d: _,
                          }).translateX),
                          (o = e.translateY),
                          (f = {
                            transform: e.useTranslate3d
                              ? "translate3d("
                                  .concat(n, "px, ")
                                  .concat(o, "px, 0)")
                              : "translate(".concat(n, "px, ").concat(o, "px)"),
                          }))
                        : (f = x),
                      {
                        cssProperties: f,
                        cssClasses:
                          ((a = (i = {
                            translateX: p,
                            translateY: d,
                            coordinate: y,
                          }).coordinate),
                          (u = i.translateX),
                          (s = i.translateY),
                          (0, c.Z)(
                            b,
                            g(
                              g(
                                g(
                                  g(
                                    {},
                                    "".concat(b, "-right"),
                                    (0, l.hj)(u) &&
                                      a &&
                                      (0, l.hj)(a.x) &&
                                      u >= a.x
                                  ),
                                  "".concat(b, "-left"),
                                  (0, l.hj)(u) && a && (0, l.hj)(a.x) && u < a.x
                                ),
                                "".concat(b, "-bottom"),
                                (0, l.hj)(s) && a && (0, l.hj)(a.y) && s >= a.y
                              ),
                              "".concat(b, "-top"),
                              (0, l.hj)(s) && a && (0, l.hj)(a.y) && s < a.y
                            )
                          )),
                      }),
                    q = W.cssClasses,
                    Z = W.cssProperties,
                    V = S(
                      S(
                        {
                          transition:
                            R && k
                              ? "transform ".concat(T, "ms ").concat(C)
                              : void 0,
                        },
                        Z
                      ),
                      {},
                      {
                        pointerEvents: "none",
                        visibility:
                          !this.state.dismissed && k && D
                            ? "visible"
                            : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      $
                    );
                  return r.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      className: q,
                      style: V,
                      ref: function (t) {
                        P.wrapperNode = t;
                      },
                    },
                    I
                  );
                },
              },
            ]),
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, M(r.key), r);
              }
            })(n.prototype, e),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        })(r.PureComponent),
        C = n(47513),
        I = n(34630);
      function N(t) {
        return (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function D(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? D(Object(n), !0).forEach(function (e) {
                z(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function L() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (L = function () {
          return !!t;
        })();
      }
      function B(t) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function U(t, e) {
        return (U = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function z(t, e, n) {
        return (
          (e = F(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function F(t) {
        var e = (function (t, e) {
          if ("object" != N(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != N(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == N(e) ? e : String(e);
      }
      function $(t) {
        return t.dataKey;
      }
      var W = (function (t) {
        var e;
        function n() {
          var t, e;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (t = n),
            (e = arguments),
            (t = B(t)),
            (function (t, e) {
              if (e && ("object" === N(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t);
            })(
              this,
              L()
                ? Reflect.construct(t, e || [], B(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && U(t, e);
          })(n, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t,
                  e = this,
                  n = this.props,
                  o = n.active,
                  i = n.allowEscapeViewBox,
                  a = n.animationDuration,
                  u = n.animationEasing,
                  c = n.content,
                  l = n.coordinate,
                  s = n.filterNull,
                  f = n.isAnimationActive,
                  p = n.offset,
                  d = n.payload,
                  h = n.payloadUniqBy,
                  y = n.position,
                  m = n.reverseDirection,
                  g = n.useTranslate3d,
                  b = n.viewBox,
                  x = n.wrapperStyle,
                  O = null != d ? d : [];
                s &&
                  O.length &&
                  (O = (0, I.z)(
                    d.filter(function (t) {
                      return (
                        null != t.value &&
                        (!0 !== t.hide || e.props.includeHidden)
                      );
                    }),
                    h,
                    $
                  ));
                var w = O.length > 0;
                return r.createElement(
                  T,
                  {
                    allowEscapeViewBox: i,
                    animationDuration: a,
                    animationEasing: u,
                    isAnimationActive: f,
                    active: o,
                    coordinate: l,
                    hasPayload: w,
                    offset: p,
                    position: y,
                    reverseDirection: m,
                    useTranslate3d: g,
                    viewBox: b,
                    wrapperStyle: x,
                  },
                  ((t = R(R({}, this.props), {}, { payload: O })),
                  r.isValidElement(c)
                    ? r.cloneElement(c, t)
                    : "function" == typeof c
                    ? r.createElement(c, t)
                    : r.createElement(v, t))
                );
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, F(r.key), r);
            }
          })(n.prototype, e),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(r.PureComponent);
      z(W, "displayName", "Tooltip"),
        z(W, "defaultProps", {
          accessibilityLayer: !1,
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !C.x.isSsr,
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: " : ",
          trigger: "hover",
          useTranslate3d: !1,
          viewBox: { x: 0, y: 0, height: 0, width: 0 },
          wrapperStyle: {},
        });
    },
    64256: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return c;
        },
      });
      var r = n(2265),
        o = n(44839),
        i = n(92705),
        a = ["children", "className"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      var c = r.forwardRef(function (t, e) {
        var n = t.children,
          c = t.className,
          l = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (o[n] = t[n]);
            }
            return o;
          })(t, a),
          s = (0, o.Z)("recharts-layer", c);
        return r.createElement(
          "g",
          u({ className: s }, (0, i.L6)(l, !0), { ref: e }),
          n
        );
      });
    },
    26599: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return c;
        },
      });
      var r = n(2265),
        o = n(44839),
        i = n(92705),
        a = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function c(t) {
        var e = t.children,
          n = t.width,
          c = t.height,
          l = t.viewBox,
          s = t.className,
          f = t.style,
          p = t.title,
          d = t.desc,
          h = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (o[n] = t[n]);
            }
            return o;
          })(t, a),
          y = l || { width: n, height: c, x: 0, y: 0 },
          v = (0, o.Z)("recharts-surface", s);
        return r.createElement(
          "svg",
          u({}, (0, i.L6)(h, !0, "svg"), {
            className: v,
            width: n,
            height: c,
            style: f,
            viewBox: ""
              .concat(y.x, " ")
              .concat(y.y, " ")
              .concat(y.width, " ")
              .concat(y.height),
          }),
          r.createElement("title", null, p),
          r.createElement("desc", null, d),
          e
        );
      }
    },
    89810: function (t, e, n) {
      "use strict";
      n.d(e, {
        b: function () {
          return J;
        },
      });
      var r = n(2265),
        o = n(79005),
        i = n(97019),
        a = n.n(i),
        u = n(12916),
        c = n.n(u),
        l = n(49972),
        s = n.n(l),
        f = n(14380),
        p = n.n(f),
        d = n(44839),
        h = n(64256),
        y = n(7362),
        v = n(11078),
        m = n(96581),
        g = n(63117),
        b = n.n(g),
        x = n(96579),
        O = n.n(x),
        w = n(92705),
        j = n(4964);
      function S(t) {
        return (S =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var _ = ["valueAccessor"],
        E = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != S(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != S(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == S(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function T(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]);
        }
        return o;
      }
      var C = function (t) {
        return Array.isArray(t.value) ? O()(t.value) : t.value;
      };
      function I(t) {
        var e = t.valueAccessor,
          n = void 0 === e ? C : e,
          o = T(t, _),
          i = o.data,
          a = o.dataKey,
          u = o.clockWise,
          c = o.id,
          l = o.textBreakAll,
          f = T(o, E);
        return i && i.length
          ? r.createElement(
              h.m,
              { className: "recharts-label-list" },
              i.map(function (t, e) {
                var o = s()(a) ? n(t, e) : (0, j.F$)(t && t.payload, a),
                  i = s()(c) ? {} : { id: "".concat(c, "-").concat(e) };
                return r.createElement(
                  m._,
                  A({}, (0, w.L6)(t, !0), f, i, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: l,
                    viewBox: m._.parseViewBox(
                      s()(u) ? t : M(M({}, t), {}, { clockWise: u })
                    ),
                    key: "label-".concat(e),
                    index: e,
                  })
                );
              })
            )
          : null;
      }
      (I.displayName = "LabelList"),
        (I.renderCallByParent = function (t, e) {
          var n,
            o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!t || (!t.children && o && !t.label)) return null;
          var i = t.children,
            a = (0, w.NN)(i, I).map(function (t, n) {
              return (0,
              r.cloneElement)(t, { data: e, key: "labelList-".concat(n) });
            });
          return o
            ? [
                (n = t.label)
                  ? !0 === n
                    ? r.createElement(I, { key: "labelList-implicit", data: e })
                    : r.isValidElement(n) || p()(n)
                    ? r.createElement(I, {
                        key: "labelList-implicit",
                        data: e,
                        content: n,
                      })
                    : b()(n)
                    ? r.createElement(
                        I,
                        A({ data: e }, n, { key: "labelList-implicit" })
                      )
                    : null
                  : null,
              ].concat(
                (function (t) {
                  if (Array.isArray(t)) return P(t);
                })(a) ||
                  (function (t) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != t[Symbol.iterator]) ||
                      null != t["@@iterator"]
                    )
                      return Array.from(t);
                  })(a) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return P(t, void 0);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return P(t, void 0);
                    }
                  })(a) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
              )
            : a;
        });
      var N = n(68295),
        D = n(47513),
        R = n(48500),
        L = n(6779),
        B = n(83565),
        U = n(91488),
        z = n(32641);
      function F(t) {
        return (F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function $() {
        return ($ = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function W(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? W(Object(n), !0).forEach(function (e) {
                G(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Z(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, K(r.key), r);
        }
      }
      function V() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (t) {}
        return (V = function () {
          return !!t;
        })();
      }
      function Y(t) {
        return (Y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function H(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function X(t, e) {
        return (X = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function G(t, e, n) {
        return (
          (e = K(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function K(t) {
        var e = (function (t, e) {
          if ("object" != F(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != F(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == F(e) ? e : String(e);
      }
      var J = (function (t) {
        var e, n;
        function i(t) {
          var e, n, r;
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, i),
            (n = i),
            (r = [t]),
            (n = Y(n)),
            (e = (function (t, e) {
              if (e && ("object" === F(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return H(t);
            })(
              this,
              V()
                ? Reflect.construct(n, r || [], Y(this).constructor)
                : n.apply(this, r)
            )),
            G(H(e), "pieRef", null),
            G(H(e), "sectorRefs", []),
            G(H(e), "id", (0, L.EL)("recharts-pie-")),
            G(H(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), p()(t) && t();
            }),
            G(H(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), p()(t) && t();
            }),
            (e.state = {
              isAnimationFinished: !t.isAnimationActive,
              prevIsAnimationActive: t.isAnimationActive,
              prevAnimationId: t.animationId,
              sectorToFocus: 0,
            }),
            e
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && X(t, e);
          })(i, t),
          (e = [
            {
              key: "isActiveIndex",
              value: function (t) {
                var e = this.props.activeIndex;
                return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
              },
            },
            {
              key: "hasActiveIndex",
              value: function () {
                var t = this.props.activeIndex;
                return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
              },
            },
            {
              key: "renderLabels",
              value: function (t) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var e = this.props,
                  n = e.label,
                  o = e.labelLine,
                  a = e.dataKey,
                  u = e.valueKey,
                  c = (0, w.L6)(this.props, !1),
                  l = (0, w.L6)(n, !1),
                  f = (0, w.L6)(o, !1),
                  p = (n && n.offsetRadius) || 20,
                  d = t.map(function (t, e) {
                    var d = (t.startAngle + t.endAngle) / 2,
                      y = (0, R.op)(t.cx, t.cy, t.outerRadius + p, d),
                      v = q(
                        q(q(q({}, c), t), {}, { stroke: "none" }, l),
                        {},
                        { index: e, textAnchor: i.getTextAnchor(y.x, t.cx) },
                        y
                      ),
                      m = q(
                        q(
                          q(q({}, c), t),
                          {},
                          { fill: "none", stroke: t.fill },
                          f
                        ),
                        {},
                        {
                          index: e,
                          points: [(0, R.op)(t.cx, t.cy, t.outerRadius, d), y],
                          key: "line",
                        }
                      ),
                      g = a;
                    return (
                      s()(a) && s()(u) ? (g = "value") : s()(a) && (g = u),
                      r.createElement(
                        h.m,
                        {
                          key: "label-"
                            .concat(t.startAngle, "-")
                            .concat(t.endAngle, "-")
                            .concat(t.midAngle, "-")
                            .concat(e),
                        },
                        o && i.renderLabelLineItem(o, m),
                        i.renderLabelItem(n, v, (0, j.F$)(t, g))
                      )
                    );
                  });
                return r.createElement(
                  h.m,
                  { className: "recharts-pie-labels" },
                  d
                );
              },
            },
            {
              key: "renderSectorsStatically",
              value: function (t) {
                var e = this,
                  n = this.props,
                  o = n.activeShape,
                  i = n.blendStroke,
                  a = n.inactiveShape;
                return t.map(function (n, u) {
                  if (
                    (null == n ? void 0 : n.startAngle) === 0 &&
                    (null == n ? void 0 : n.endAngle) === 0 &&
                    1 !== t.length
                  )
                    return null;
                  var c = e.isActiveIndex(u),
                    l = a && e.hasActiveIndex() ? a : null,
                    s = q(
                      q({}, n),
                      {},
                      { stroke: i ? n.fill : n.stroke, tabIndex: -1 }
                    );
                  return r.createElement(
                    h.m,
                    $(
                      {
                        ref: function (t) {
                          t &&
                            !e.sectorRefs.includes(t) &&
                            e.sectorRefs.push(t);
                        },
                        tabIndex: -1,
                        className: "recharts-pie-sector",
                      },
                      (0, U.bw)(e.props, n, u),
                      {
                        key: "sector-"
                          .concat(null == n ? void 0 : n.startAngle, "-")
                          .concat(null == n ? void 0 : n.endAngle, "-")
                          .concat(n.midAngle, "-")
                          .concat(u),
                      }
                    ),
                    r.createElement(
                      z.bn,
                      $(
                        { option: c ? o : l, isActive: c, shapeType: "sector" },
                        s
                      )
                    )
                  );
                });
              },
            },
            {
              key: "renderSectorsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.sectors,
                  i = e.isAnimationActive,
                  u = e.animationBegin,
                  c = e.animationDuration,
                  l = e.animationEasing,
                  s = e.animationId,
                  f = this.state,
                  p = f.prevSectors,
                  d = f.prevIsAnimationActive;
                return r.createElement(
                  o.ZP,
                  {
                    begin: u,
                    duration: c,
                    isActive: i,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(s, "-").concat(d),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd,
                  },
                  function (e) {
                    var o = e.t,
                      i = [],
                      u = (n && n[0]).startAngle;
                    return (
                      n.forEach(function (t, e) {
                        var n = p && p[e],
                          r = e > 0 ? a()(t, "paddingAngle", 0) : 0;
                        if (n) {
                          var c = (0, L.k4)(
                              n.endAngle - n.startAngle,
                              t.endAngle - t.startAngle
                            ),
                            l = q(
                              q({}, t),
                              {},
                              { startAngle: u + r, endAngle: u + c(o) + r }
                            );
                          i.push(l), (u = l.endAngle);
                        } else {
                          var s = t.endAngle,
                            f = t.startAngle,
                            d = (0, L.k4)(0, s - f)(o),
                            h = q(
                              q({}, t),
                              {},
                              { startAngle: u + r, endAngle: u + d + r }
                            );
                          i.push(h), (u = h.endAngle);
                        }
                      }),
                      r.createElement(h.m, null, t.renderSectorsStatically(i))
                    );
                  }
                );
              },
            },
            {
              key: "attachKeyboardHandlers",
              value: function (t) {
                var e = this;
                t.onkeydown = function (t) {
                  if (!t.altKey)
                    switch (t.key) {
                      case "ArrowLeft":
                        var n = ++e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[n].focus(),
                          e.setState({ sectorToFocus: n });
                        break;
                      case "ArrowRight":
                        var r =
                          --e.state.sectorToFocus < 0
                            ? e.sectorRefs.length - 1
                            : e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[r].focus(),
                          e.setState({ sectorToFocus: r });
                        break;
                      case "Escape":
                        e.sectorRefs[e.state.sectorToFocus].blur(),
                          e.setState({ sectorToFocus: 0 });
                    }
                };
              },
            },
            {
              key: "renderSectors",
              value: function () {
                var t = this.props,
                  e = t.sectors,
                  n = t.isAnimationActive,
                  r = this.state.prevSectors;
                return n && e && e.length && (!r || !c()(r, e))
                  ? this.renderSectorsWithAnimation()
                  : this.renderSectorsStatically(e);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.pieRef && this.attachKeyboardHandlers(this.pieRef);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.hide,
                  o = e.sectors,
                  i = e.className,
                  a = e.label,
                  u = e.cx,
                  c = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.isAnimationActive,
                  p = this.state.isAnimationFinished;
                if (
                  n ||
                  !o ||
                  !o.length ||
                  !(0, L.hj)(u) ||
                  !(0, L.hj)(c) ||
                  !(0, L.hj)(l) ||
                  !(0, L.hj)(s)
                )
                  return null;
                var y = (0, d.Z)("recharts-pie", i);
                return r.createElement(
                  h.m,
                  {
                    tabIndex: this.props.rootTabIndex,
                    className: y,
                    ref: function (e) {
                      t.pieRef = e;
                    },
                  },
                  this.renderSectors(),
                  a && this.renderLabels(o),
                  m._.renderCallByParent(this.props, null, !1),
                  (!f || p) && I.renderCallByParent(this.props, o, !1)
                );
              },
            },
          ]),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return e.prevIsAnimationActive !== t.isAnimationActive
                  ? {
                      prevIsAnimationActive: t.isAnimationActive,
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: [],
                      isAnimationFinished: !0,
                    }
                  : t.isAnimationActive && t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: e.curSectors,
                      isAnimationFinished: !0,
                    }
                  : t.sectors !== e.curSectors
                  ? { curSectors: t.sectors, isAnimationFinished: !0 }
                  : null;
              },
            },
            {
              key: "getTextAnchor",
              value: function (t, e) {
                return t > e ? "start" : t < e ? "end" : "middle";
              },
            },
            {
              key: "renderLabelLineItem",
              value: function (t, e) {
                if (r.isValidElement(t)) return r.cloneElement(t, e);
                if (p()(t)) return t(e);
                var n = (0, d.Z)(
                  "recharts-pie-label-line",
                  "boolean" != typeof t ? t.className : ""
                );
                return r.createElement(
                  y.H,
                  $({}, e, { type: "linear", className: n })
                );
              },
            },
            {
              key: "renderLabelItem",
              value: function (t, e, n) {
                if (r.isValidElement(t)) return r.cloneElement(t, e);
                var o = n;
                if (p()(t) && ((o = t(e)), r.isValidElement(o))) return o;
                var i = (0, d.Z)(
                  "recharts-pie-label-text",
                  "boolean" == typeof t || p()(t) ? "" : t.className
                );
                return r.createElement(
                  v.x,
                  $({}, e, { alignmentBaseline: "middle", className: i }),
                  o
                );
              },
            },
          ]),
          e && Z(i.prototype, e),
          n && Z(i, n),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(r.PureComponent);
      G(J, "displayName", "Pie"),
        G(J, "defaultProps", {
          stroke: "#fff",
          fill: "#808080",
          legendType: "rect",
          cx: "50%",
          cy: "50%",
          startAngle: 0,
          endAngle: 360,
          innerRadius: 0,
          outerRadius: "80%",
          paddingAngle: 0,
          labelLine: !0,
          hide: !1,
          minAngle: 0,
          isAnimationActive: !D.x.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: "ease",
          nameKey: "name",
          blendStroke: !1,
          rootTabIndex: 0,
        }),
        G(J, "parseDeltaAngle", function (t, e) {
          return (0, L.uY)(e - t) * Math.min(Math.abs(e - t), 360);
        }),
        G(J, "getRealPieData", function (t) {
          var e = t.props,
            n = e.data,
            r = e.children,
            o = (0, w.L6)(t.props, !1),
            i = (0, w.NN)(r, N.b);
          return n && n.length
            ? n.map(function (t, e) {
                return q(q(q({ payload: t }, o), t), i && i[e] && i[e].props);
              })
            : i && i.length
            ? i.map(function (t) {
                return q(q({}, o), t.props);
              })
            : [];
        }),
        G(J, "parseCoordinateOfPie", function (t, e) {
          var n = e.top,
            r = e.left,
            o = e.width,
            i = e.height,
            a = (0, R.$4)(o, i);
          return {
            cx: r + (0, L.h1)(t.props.cx, o, o / 2),
            cy: n + (0, L.h1)(t.props.cy, i, i / 2),
            innerRadius: (0, L.h1)(t.props.innerRadius, a, 0),
            outerRadius: (0, L.h1)(t.props.outerRadius, a, 0.8 * a),
            maxRadius: t.props.maxRadius || Math.sqrt(o * o + i * i) / 2,
          };
        }),
        G(J, "getComposedData", function (t) {
          var e,
            n,
            r = t.item,
            o = t.offset,
            i = J.getRealPieData(r);
          if (!i || !i.length) return null;
          var a = r.props,
            u = a.cornerRadius,
            c = a.startAngle,
            l = a.endAngle,
            f = a.paddingAngle,
            p = a.dataKey,
            d = a.nameKey,
            h = a.valueKey,
            y = a.tooltipType,
            v = Math.abs(r.props.minAngle),
            m = J.parseCoordinateOfPie(r, o),
            g = J.parseDeltaAngle(c, l),
            b = Math.abs(g),
            x = p;
          s()(p) && s()(h)
            ? ((0, B.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (x = "value"))
            : s()(p) &&
              ((0, B.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
              ),
              (x = h));
          var O = i.filter(function (t) {
              return 0 !== (0, j.F$)(t, x, 0);
            }).length,
            w = b - O * v - (b >= 360 ? O : O - 1) * f,
            S = i.reduce(function (t, e) {
              var n = (0, j.F$)(e, x, 0);
              return t + ((0, L.hj)(n) ? n : 0);
            }, 0);
          return (
            S > 0 &&
              (e = i.map(function (t, e) {
                var r,
                  o = (0, j.F$)(t, x, 0),
                  i = (0, j.F$)(t, d, e),
                  a = ((0, L.hj)(o) ? o : 0) / S,
                  l =
                    (r = e
                      ? n.endAngle + (0, L.uY)(g) * f * (0 !== o ? 1 : 0)
                      : c) +
                    (0, L.uY)(g) * ((0 !== o ? v : 0) + a * w),
                  s = (r + l) / 2,
                  p = (m.innerRadius + m.outerRadius) / 2,
                  h = [{ name: i, value: o, payload: t, dataKey: x, type: y }],
                  b = (0, R.op)(m.cx, m.cy, p, s);
                return (n = q(
                  q(
                    q(
                      {
                        percent: a,
                        cornerRadius: u,
                        name: i,
                        tooltipPayload: h,
                        midAngle: s,
                        middleRadius: p,
                        tooltipPosition: b,
                      },
                      t
                    ),
                    m
                  ),
                  {},
                  {
                    value: (0, j.F$)(t, x),
                    startAngle: r,
                    endAngle: l,
                    payload: t,
                    paddingAngle: (0, L.uY)(g) * f,
                  }
                ));
              })),
            q(q({}, m), {}, { sectors: e, data: i })
          );
        });
    },
    7362: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return Y;
        },
      });
      var r = n(2265);
      function o() {}
      function i(t, e, n) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + n) / 6
        );
      }
      function a(t) {
        this._context = t;
      }
      function u(t) {
        this._context = t;
      }
      function c(t) {
        this._context = t;
      }
      (a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              i(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              i(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (u.prototype = {
          areaStart: o,
          areaEnd: o,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6
                  );
                break;
              default:
                i(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (c.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var n = (this._x0 + 4 * this._x1 + t) / 6,
                  r = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(n, r)
                  : this._context.moveTo(n, r);
                break;
              case 3:
                this._point = 4;
              default:
                i(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        });
      class l {
        constructor(t, e) {
          (this._context = t), (this._x = e);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function p(t) {
        return new f(t);
      }
      function d(t, e, n) {
        var r = t._x1 - t._x0,
          o = e - t._x1,
          i = (t._y1 - t._y0) / (r || (o < 0 && -0)),
          a = (n - t._y1) / (o || (r < 0 && -0));
        return (
          ((i < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
            Math.min(
              Math.abs(i),
              Math.abs(a),
              0.5 * Math.abs((i * o + a * r) / (r + o))
            ) || 0
        );
      }
      function h(t, e) {
        var n = t._x1 - t._x0;
        return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
      }
      function y(t, e, n) {
        var r = t._x0,
          o = t._y0,
          i = t._x1,
          a = t._y1,
          u = (i - r) / 3;
        t._context.bezierCurveTo(r + u, o + u * e, i - u, a - u * n, i, a);
      }
      function v(t) {
        this._context = t;
      }
      function m(t) {
        this._context = new g(t);
      }
      function g(t) {
        this._context = t;
      }
      function b(t) {
        this._context = t;
      }
      function x(t) {
        var e,
          n,
          r = t.length - 1,
          o = Array(r),
          i = Array(r),
          a = Array(r);
        for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)
          (o[e] = 1), (i[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1;
          e < r;
          ++e
        )
          (n = o[e] / i[e - 1]), (i[e] -= n), (a[e] -= n * a[e - 1]);
        for (o[r - 1] = a[r - 1] / i[r - 1], e = r - 2; e >= 0; --e)
          o[e] = (a[e] - o[e + 1]) / i[e];
        for (e = 0, i[r - 1] = (t[r] + o[r - 1]) / 2; e < r - 1; ++e)
          i[e] = 2 * t[e + 1] - o[e + 1];
        return [o, i];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (s.prototype = {
        areaStart: o,
        areaEnd: o,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, e) {
          (t = +t),
            (e = +e),
            this._point
              ? this._context.lineTo(t, e)
              : ((this._point = 1), this._context.moveTo(t, e));
        },
      }),
        (f.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, e);
            }
          },
        }),
        (v.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                y(this, this._t0, h(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var n = NaN;
            if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), y(this, h(this, (n = d(this, t, e))), n);
                  break;
                default:
                  y(this, this._t0, (n = d(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = n);
            }
          },
        }),
        ((m.prototype = Object.create(v.prototype)).point = function (t, e) {
          v.prototype.point.call(this, e, t);
        }),
        (g.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, n, r, o, i) {
            this._context.bezierCurveTo(e, t, r, n, i, o);
          },
        }),
        (b.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              e = this._y,
              n = t.length;
            if (n) {
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === n)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var r = x(t), o = x(e), i = 0, a = 1; a < n; ++i, ++a)
                  this._context.bezierCurveTo(
                    r[0][i],
                    o[0][i],
                    r[1][i],
                    o[1][i],
                    t[a],
                    e[a]
                  );
            }
            (this._line || (0 !== this._line && 1 === n)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (O.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var n = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(n, this._y), this._context.lineTo(n, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var w = n(16028),
        j = n(66622),
        S = n(63760);
      function _(t) {
        return t[0];
      }
      function E(t) {
        return t[1];
      }
      function P(t, e) {
        var n = (0, j.Z)(!0),
          r = null,
          o = p,
          i = null,
          a = (0, S.d)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, w.Z)(u)).length,
            p = !1;
          for (null == r && (i = o((s = a()))), c = 0; c <= f; ++c)
            !(c < f && n((l = u[c]), c, u)) === p &&
              ((p = !p) ? i.lineStart() : i.lineEnd()),
              p && i.point(+t(l, c, u), +e(l, c, u));
          if (s) return (i = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? _ : (0, j.Z)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? E : (0, j.Z)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : (0, j.Z)(!!t)), u)
              : n;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((o = t), null != r && (i = o(r)), u) : o;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (r = i = null) : (i = o((r = t))), u)
              : r;
          }),
          u
        );
      }
      function A(t, e, n) {
        var r = null,
          o = (0, j.Z)(!0),
          i = null,
          a = p,
          u = null,
          c = (0, S.d)(l);
        function l(l) {
          var s,
            f,
            p,
            d,
            h,
            y = (l = (0, w.Z)(l)).length,
            v = !1,
            m = Array(y),
            g = Array(y);
          for (null == i && (u = a((h = c()))), s = 0; s <= y; ++s) {
            if (!(s < y && o((d = l[s]), s, l)) === v) {
              if ((v = !v)) (f = s), u.areaStart(), u.lineStart();
              else {
                for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p)
                  u.point(m[p], g[p]);
                u.lineEnd(), u.areaEnd();
              }
            }
            v &&
              ((m[s] = +t(d, s, l)),
              (g[s] = +e(d, s, l)),
              u.point(r ? +r(d, s, l) : m[s], n ? +n(d, s, l) : g[s]));
          }
          if (h) return (u = null), h + "" || null;
        }
        function s() {
          return P().defined(o).curve(a).context(i);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? _ : (0, j.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, j.Z)(0)
              : (0, j.Z)(+e)),
          (n = "function" == typeof n ? n : void 0 === n ? E : (0, j.Z)(+n)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), (r = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, j.Z)(+t)),
                l)
              : r;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), (n = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, j.Z)(+t)),
                l)
              : n;
          }),
          (l.lineX0 = l.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (l.lineY1 = function () {
            return s().x(t).y(n);
          }),
          (l.lineX1 = function () {
            return s().x(r).y(e);
          }),
          (l.defined = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : (0, j.Z)(!!t)), l)
              : o;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != i && (u = a(i)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (i = u = null) : (u = a((i = t))), l)
              : i;
          }),
          l
        );
      }
      var k = n(62637),
        M = n.n(k),
        T = n(14380),
        C = n.n(T),
        I = n(44839),
        N = n(91488),
        D = n(92705),
        R = n(6779);
      function L(t) {
        return (L =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function U(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != L(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != L(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == L(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var F = {
          curveBasisClosed: function (t) {
            return new u(t);
          },
          curveBasisOpen: function (t) {
            return new c(t);
          },
          curveBasis: function (t) {
            return new a(t);
          },
          curveBumpX: function (t) {
            return new l(t, !0);
          },
          curveBumpY: function (t) {
            return new l(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: p,
          curveMonotoneX: function (t) {
            return new v(t);
          },
          curveMonotoneY: function (t) {
            return new m(t);
          },
          curveNatural: function (t) {
            return new b(t);
          },
          curveStep: function (t) {
            return new O(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new O(t, 1);
          },
          curveStepBefore: function (t) {
            return new O(t, 0);
          },
        },
        $ = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        W = function (t) {
          return t.x;
        },
        q = function (t) {
          return t.y;
        },
        Z = function (t, e) {
          if (C()(t)) return t;
          var n = "curve".concat(M()(t));
          return ("curveMonotone" === n || "curveBump" === n) && e
            ? F["".concat(n).concat("vertical" === e ? "Y" : "X")]
            : F[n] || p;
        },
        V = function (t) {
          var e,
            n = t.type,
            r = t.points,
            o = void 0 === r ? [] : r,
            i = t.baseLine,
            a = t.layout,
            u = t.connectNulls,
            c = void 0 !== u && u,
            l = Z(void 0 === n ? "linear" : n, a),
            s = c
              ? o.filter(function (t) {
                  return $(t);
                })
              : o;
          if (Array.isArray(i)) {
            var f = c
                ? i.filter(function (t) {
                    return $(t);
                  })
                : i,
              p = s.map(function (t, e) {
                return z(z({}, t), {}, { base: f[e] });
              });
            return (
              (e =
                "vertical" === a
                  ? A()
                      .y(q)
                      .x1(W)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : A()
                      .x(W)
                      .y1(q)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined($)
                .curve(l),
              e(p)
            );
          }
          return (
            (e =
              "vertical" === a && (0, R.hj)(i)
                ? A().y(q).x1(W).x0(i)
                : (0, R.hj)(i)
                ? A().x(W).y1(q).y0(i)
                : P().x(W).y(q))
              .defined($)
              .curve(l),
            e(s)
          );
        },
        Y = function (t) {
          var e = t.className,
            n = t.points,
            o = t.path,
            i = t.pathRef;
          if ((!n || !n.length) && !o) return null;
          var a = n && n.length ? V(t) : o;
          return r.createElement(
            "path",
            B({}, (0, D.L6)(t, !1), (0, N.Ym)(t), {
              className: (0, I.Z)("recharts-curve", e),
              d: a,
              ref: i,
            })
          );
        };
    },
    90554: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return y;
        },
        X: function () {
          return d;
        },
      });
      var r = n(2265),
        o = n(44839),
        i = n(79005),
        a = n(92705);
      function u(t) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != u(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != u(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == u(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = function (t, e, n, r, o) {
          var i,
            a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
            u = r >= 0 ? 1 : -1,
            c = n >= 0 ? 1 : -1,
            l = (r >= 0 && n >= 0) || (r < 0 && n < 0) ? 1 : 0;
          if (a > 0 && o instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = o[f] > a ? a : o[f];
            (i = "M".concat(t, ",").concat(e + u * s[0])),
              s[0] > 0 &&
                (i += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(l, ",")
                  .concat(t + c * s[0], ",")
                  .concat(e)),
              (i += "L ".concat(t + n - c * s[1], ",").concat(e)),
              s[1] > 0 &&
                (i += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n, ",")
                  .concat(e + u * s[1])),
              (i += "L ".concat(t + n, ",").concat(e + r - u * s[2])),
              s[2] > 0 &&
                (i += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n - c * s[2], ",")
                  .concat(e + r)),
              (i += "L ".concat(t + c * s[3], ",").concat(e + r)),
              s[3] > 0 &&
                (i += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + r - u * s[3])),
              (i += "Z");
          } else if (a > 0 && o === +o && o > 0) {
            var p = Math.min(a, o);
            i = "M "
              .concat(t, ",")
              .concat(e + u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + c * p, ",")
              .concat(e, "\n            L ")
              .concat(t + n - c * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n, ",")
              .concat(e + u * p, "\n            L ")
              .concat(t + n, ",")
              .concat(e + r - u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n - c * p, ",")
              .concat(e + r, "\n            L ")
              .concat(t + c * p, ",")
              .concat(e + r, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t, ",")
              .concat(e + r - u * p, " Z");
          } else
            i = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(n, " v ")
              .concat(r, " h ")
              .concat(-n, " Z");
          return i;
        },
        d = function (t, e) {
          if (!t || !e) return !1;
          var n = t.x,
            r = t.y,
            o = e.x,
            i = e.y,
            a = e.width,
            u = e.height;
          return (
            !!(Math.abs(a) > 0 && Math.abs(u) > 0) &&
            n >= Math.min(o, o + a) &&
            n <= Math.max(o, o + a) &&
            r >= Math.min(i, i + u) &&
            r <= Math.max(i, i + u)
          );
        },
        h = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        y = function (t) {
          var e,
            n = f(f({}, h), t),
            u = (0, r.useRef)(),
            s =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, r.useState)(-1))) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      i = (n = n.call(t)).next;
                      !(c = (r = i.call(n)).done) &&
                      (u.push(r.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return u;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return l(t, 2);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === n &&
                      t.constructor &&
                      (n = t.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return l(t, 2);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            d = s[0],
            y = s[1];
          (0, r.useEffect)(function () {
            if (u.current && u.current.getTotalLength)
              try {
                var t = u.current.getTotalLength();
                t && y(t);
              } catch (t) {}
          }, []);
          var v = n.x,
            m = n.y,
            g = n.width,
            b = n.height,
            x = n.radius,
            O = n.className,
            w = n.animationEasing,
            j = n.animationDuration,
            S = n.animationBegin,
            _ = n.isAnimationActive,
            E = n.isUpdateAnimationActive;
          if (
            v !== +v ||
            m !== +m ||
            g !== +g ||
            b !== +b ||
            0 === g ||
            0 === b
          )
            return null;
          var P = (0, o.Z)("recharts-rectangle", O);
          return E
            ? r.createElement(
                i.ZP,
                {
                  canBegin: d > 0,
                  from: { width: g, height: b, x: v, y: m },
                  to: { width: g, height: b, x: v, y: m },
                  duration: j,
                  animationEasing: w,
                  isActive: E,
                },
                function (t) {
                  var e = t.width,
                    o = t.height,
                    l = t.x,
                    s = t.y;
                  return r.createElement(
                    i.ZP,
                    {
                      canBegin: d > 0,
                      from: "0px ".concat(-1 === d ? 1 : d, "px"),
                      to: "".concat(d, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: S,
                      duration: j,
                      isActive: _,
                      easing: w,
                    },
                    r.createElement(
                      "path",
                      c({}, (0, a.L6)(n, !0), {
                        className: P,
                        d: p(l, s, e, o, x),
                        ref: u,
                      })
                    )
                  );
                }
              )
            : r.createElement(
                "path",
                c({}, (0, a.L6)(n, !0), { className: P, d: p(v, m, g, b, x) })
              );
        };
    },
    79130: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return v;
        },
      });
      var r = n(2265),
        o = n(44839),
        i = n(92705),
        a = n(48500),
        u = n(6779);
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != c(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != c(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == c(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.radius,
            o = t.angle,
            i = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            s = c * (u ? 1 : -1) + r,
            f = Math.asin(c / s) / a.Wk,
            p = l ? o : o + i * f;
          return {
            center: (0, a.op)(e, n, s, p),
            circleTangency: (0, a.op)(e, n, r, p),
            lineTangency: (0, a.op)(
              e,
              n,
              s * Math.cos(f * a.Wk),
              l ? o - i * f : o
            ),
            theta: f,
          };
        },
        d = function (t) {
          var e,
            n = t.cx,
            r = t.cy,
            o = t.innerRadius,
            i = t.outerRadius,
            c = t.startAngle,
            l =
              ((e = t.endAngle),
              (0, u.uY)(e - c) * Math.min(Math.abs(e - c), 359.999)),
            s = c + l,
            f = (0, a.op)(n, r, i, c),
            p = (0, a.op)(n, r, i, s),
            d = "M "
              .concat(f.x, ",")
              .concat(f.y, "\n    A ")
              .concat(i, ",")
              .concat(i, ",0,\n    ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(c > s), ",\n    ")
              .concat(p.x, ",")
              .concat(p.y, "\n  ");
          if (o > 0) {
            var h = (0, a.op)(n, r, o, c),
              y = (0, a.op)(n, r, o, s);
            d += "L "
              .concat(y.x, ",")
              .concat(y.y, "\n            A ")
              .concat(o, ",")
              .concat(o, ",0,\n            ")
              .concat(+(Math.abs(l) > 180), ",")
              .concat(+(c <= s), ",\n            ")
              .concat(h.x, ",")
              .concat(h.y, " Z");
          } else d += "L ".concat(n, ",").concat(r, " Z");
          return d;
        },
        h = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.innerRadius,
            o = t.outerRadius,
            i = t.cornerRadius,
            a = t.forceCornerRadius,
            c = t.cornerIsExternal,
            l = t.startAngle,
            s = t.endAngle,
            f = (0, u.uY)(s - l),
            h = p({
              cx: e,
              cy: n,
              radius: o,
              angle: l,
              sign: f,
              cornerRadius: i,
              cornerIsExternal: c,
            }),
            y = h.circleTangency,
            v = h.lineTangency,
            m = h.theta,
            g = p({
              cx: e,
              cy: n,
              radius: o,
              angle: s,
              sign: -f,
              cornerRadius: i,
              cornerIsExternal: c,
            }),
            b = g.circleTangency,
            x = g.lineTangency,
            O = g.theta,
            w = c ? Math.abs(l - s) : Math.abs(l - s) - m - O;
          if (w < 0)
            return a
              ? "M "
                  .concat(v.x, ",")
                  .concat(v.y, "\n        a")
                  .concat(i, ",")
                  .concat(i, ",0,0,1,")
                  .concat(2 * i, ",0\n        a")
                  .concat(i, ",")
                  .concat(i, ",0,0,1,")
                  .concat(-(2 * i), ",0\n      ")
              : d({
                  cx: e,
                  cy: n,
                  innerRadius: r,
                  outerRadius: o,
                  startAngle: l,
                  endAngle: s,
                });
          var j = "M "
            .concat(v.x, ",")
            .concat(v.y, "\n    A")
            .concat(i, ",")
            .concat(i, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(y.x, ",")
            .concat(y.y, "\n    A")
            .concat(o, ",")
            .concat(o, ",0,")
            .concat(+(w > 180), ",")
            .concat(+(f < 0), ",")
            .concat(b.x, ",")
            .concat(b.y, "\n    A")
            .concat(i, ",")
            .concat(i, ",0,0,")
            .concat(+(f < 0), ",")
            .concat(x.x, ",")
            .concat(x.y, "\n  ");
          if (r > 0) {
            var S = p({
                cx: e,
                cy: n,
                radius: r,
                angle: l,
                sign: f,
                isExternal: !0,
                cornerRadius: i,
                cornerIsExternal: c,
              }),
              _ = S.circleTangency,
              E = S.lineTangency,
              P = S.theta,
              A = p({
                cx: e,
                cy: n,
                radius: r,
                angle: s,
                sign: -f,
                isExternal: !0,
                cornerRadius: i,
                cornerIsExternal: c,
              }),
              k = A.circleTangency,
              M = A.lineTangency,
              T = A.theta,
              C = c ? Math.abs(l - s) : Math.abs(l - s) - P - T;
            if (C < 0 && 0 === i)
              return "".concat(j, "L").concat(e, ",").concat(n, "Z");
            j += "L"
              .concat(M.x, ",")
              .concat(M.y, "\n      A")
              .concat(i, ",")
              .concat(i, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(k.x, ",")
              .concat(k.y, "\n      A")
              .concat(r, ",")
              .concat(r, ",0,")
              .concat(+(C > 180), ",")
              .concat(+(f > 0), ",")
              .concat(_.x, ",")
              .concat(_.y, "\n      A")
              .concat(i, ",")
              .concat(i, ",0,0,")
              .concat(+(f < 0), ",")
              .concat(E.x, ",")
              .concat(E.y, "Z");
          } else j += "L".concat(e, ",").concat(n, "Z");
          return j;
        },
        y = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1,
        },
        v = function (t) {
          var e,
            n = f(f({}, y), t),
            a = n.cx,
            c = n.cy,
            s = n.innerRadius,
            p = n.outerRadius,
            v = n.cornerRadius,
            m = n.forceCornerRadius,
            g = n.cornerIsExternal,
            b = n.startAngle,
            x = n.endAngle,
            O = n.className;
          if (p < s || b === x) return null;
          var w = (0, o.Z)("recharts-sector", O),
            j = p - s,
            S = (0, u.h1)(v, j, 0, !0);
          return (
            (e =
              S > 0 && 360 > Math.abs(b - x)
                ? h({
                    cx: a,
                    cy: c,
                    innerRadius: s,
                    outerRadius: p,
                    cornerRadius: Math.min(S, j / 2),
                    forceCornerRadius: m,
                    cornerIsExternal: g,
                    startAngle: b,
                    endAngle: x,
                  })
                : d({
                    cx: a,
                    cy: c,
                    innerRadius: s,
                    outerRadius: p,
                    startAngle: b,
                    endAngle: x,
                  })),
            r.createElement(
              "path",
              l({}, (0, i.L6)(n, !0), { className: w, d: e, role: "img" })
            )
          );
        };
    },
    45022: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return I;
        },
      });
      var r = n(2265),
        o = n(62637),
        i = n.n(o);
      let a = Math.cos,
        u = Math.sin,
        c = Math.sqrt,
        l = Math.PI,
        s = 2 * l;
      var f = {
        draw(t, e) {
          let n = c(e / l);
          t.moveTo(n, 0), t.arc(0, 0, n, 0, s);
        },
      };
      let p = c(1 / 3),
        d = 2 * p,
        h = u(l / 10) / u((7 * l) / 10),
        y = u(s / 10) * h,
        v = -a(s / 10) * h,
        m = c(3),
        g = c(3) / 2,
        b = 1 / c(12),
        x = (b / 2 + 1) * 3;
      var O = n(66622),
        w = n(63760);
      c(3), c(3);
      var j = n(44839),
        S = n(92705);
      function _(t) {
        return (_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var E = ["type", "size", "sizeType"];
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function A(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != _(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != _(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == _(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var M = {
          symbolCircle: f,
          symbolCross: {
            draw(t, e) {
              let n = c(e / 5) / 2;
              t.moveTo(-3 * n, -n),
                t.lineTo(-n, -n),
                t.lineTo(-n, -3 * n),
                t.lineTo(n, -3 * n),
                t.lineTo(n, -n),
                t.lineTo(3 * n, -n),
                t.lineTo(3 * n, n),
                t.lineTo(n, n),
                t.lineTo(n, 3 * n),
                t.lineTo(-n, 3 * n),
                t.lineTo(-n, n),
                t.lineTo(-3 * n, n),
                t.closePath();
            },
          },
          symbolDiamond: {
            draw(t, e) {
              let n = c(e / d),
                r = n * p;
              t.moveTo(0, -n),
                t.lineTo(r, 0),
                t.lineTo(0, n),
                t.lineTo(-r, 0),
                t.closePath();
            },
          },
          symbolSquare: {
            draw(t, e) {
              let n = c(e),
                r = -n / 2;
              t.rect(r, r, n, n);
            },
          },
          symbolStar: {
            draw(t, e) {
              let n = c(0.8908130915292852 * e),
                r = y * n,
                o = v * n;
              t.moveTo(0, -n), t.lineTo(r, o);
              for (let e = 1; e < 5; ++e) {
                let i = (s * e) / 5,
                  c = a(i),
                  l = u(i);
                t.lineTo(l * n, -c * n), t.lineTo(c * r - l * o, l * r + c * o);
              }
              t.closePath();
            },
          },
          symbolTriangle: {
            draw(t, e) {
              let n = -c(e / (3 * m));
              t.moveTo(0, 2 * n),
                t.lineTo(-m * n, -n),
                t.lineTo(m * n, -n),
                t.closePath();
            },
          },
          symbolWye: {
            draw(t, e) {
              let n = c(e / x),
                r = n / 2,
                o = n * b,
                i = n * b + n,
                a = -r;
              t.moveTo(r, o),
                t.lineTo(r, i),
                t.lineTo(a, i),
                t.lineTo(-0.5 * r - g * o, g * r + -0.5 * o),
                t.lineTo(-0.5 * r - g * i, g * r + -0.5 * i),
                t.lineTo(-0.5 * a - g * i, g * a + -0.5 * i),
                t.lineTo(-0.5 * r + g * o, -0.5 * o - g * r),
                t.lineTo(-0.5 * r + g * i, -0.5 * i - g * r),
                t.lineTo(-0.5 * a + g * i, -0.5 * i - g * a),
                t.closePath();
            },
          },
        },
        T = Math.PI / 180,
        C = function (t, e, n) {
          if ("area" === e) return t;
          switch (n) {
            case "cross":
              return (5 * t * t) / 9;
            case "diamond":
              return (0.5 * t * t) / Math.sqrt(3);
            case "square":
              return t * t;
            case "star":
              var r = 18 * T;
              return (
                1.25 *
                t *
                t *
                (Math.tan(r) - Math.tan(2 * r) * Math.pow(Math.tan(r), 2))
              );
            case "triangle":
              return (Math.sqrt(3) * t * t) / 4;
            case "wye":
              return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
            default:
              return (Math.PI * t * t) / 4;
          }
        },
        I = function (t) {
          var e,
            n = t.type,
            o = void 0 === n ? "circle" : n,
            a = t.size,
            u = void 0 === a ? 64 : a,
            c = t.sizeType,
            l = void 0 === c ? "area" : c,
            s = k(
              k(
                {},
                (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = (function (t, e) {
                      if (null == t) return {};
                      var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                      for (r = 0; r < i.length; r++)
                        (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                      return o;
                    })(t, e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++)
                      (n = i[r]),
                        !(e.indexOf(n) >= 0) &&
                          Object.prototype.propertyIsEnumerable.call(t, n) &&
                          (o[n] = t[n]);
                  }
                  return o;
                })(t, E)
              ),
              {},
              { type: o, size: u, sizeType: l }
            ),
            p = s.className,
            d = s.cx,
            h = s.cy,
            y = (0, S.L6)(s, !0);
          return d === +d && h === +h && u === +u
            ? r.createElement(
                "path",
                P({}, y, {
                  className: (0, j.Z)("recharts-symbols", p),
                  transform: "translate(".concat(d, ", ").concat(h, ")"),
                  d:
                    ((e = M["symbol".concat(i()(o))] || f),
                    (function (t, e) {
                      let n = null,
                        r = (0, w.d)(o);
                      function o() {
                        let o;
                        if (
                          (n || (n = o = r()),
                          t
                            .apply(this, arguments)
                            .draw(n, +e.apply(this, arguments)),
                          o)
                        )
                          return (n = null), o + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, O.Z)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, O.Z)(void 0 === e ? 64 : +e)),
                        (o.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, O.Z)(e)),
                              o)
                            : t;
                        }),
                        (o.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, O.Z)(+t)),
                              o)
                            : e;
                        }),
                        (o.context = function (t) {
                          return arguments.length
                            ? ((n = null == t ? null : t), o)
                            : n;
                        }),
                        o
                      );
                    })()
                      .type(e)
                      .size(C(u, l, o))()),
                })
              )
            : null;
        };
      I.registerSymbol = function (t, e) {
        M["symbol".concat(i()(t))] = e;
      };
    },
    32641: function (t, e, n) {
      "use strict";
      n.d(e, {
        bn: function () {
          return C;
        },
        a3: function () {
          return U;
        },
        lT: function () {
          return I;
        },
        V$: function () {
          return N;
        },
        w7: function () {
          return D;
        },
      });
      var r = n(2265),
        o = n(14380),
        i = n.n(o),
        a = n(32999),
        u = n.n(a),
        c = n(64337),
        l = n.n(c),
        s = n(12916),
        f = n.n(s),
        p = n(90554),
        d = n(44839),
        h = n(79005),
        y = n(92705);
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function b(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != v(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != v(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == v(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var O = function (t, e, n, r, o) {
          var i = n - r;
          return (
            "M ".concat(t, ",").concat(e) +
            "L ".concat(t + n, ",").concat(e) +
            "L ".concat(t + n - i / 2, ",").concat(e + o) +
            "L ".concat(t + n - i / 2 - r, ",").concat(e + o) +
            "L ".concat(t, ",").concat(e, " Z")
          );
        },
        w = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        j = function (t) {
          var e,
            n = x(x({}, w), t),
            o = (0, r.useRef)(),
            i =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((e = (0, r.useState)(-1))) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      i = (n = n.call(t)).next;
                      !(c = (r = i.call(n)).done) &&
                      (u.push(r.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return u;
                }
              })(e, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return g(t, 2);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === n &&
                      t.constructor &&
                      (n = t.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return g(t, 2);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            a = i[0],
            u = i[1];
          (0, r.useEffect)(function () {
            if (o.current && o.current.getTotalLength)
              try {
                var t = o.current.getTotalLength();
                t && u(t);
              } catch (t) {}
          }, []);
          var c = n.x,
            l = n.y,
            s = n.upperWidth,
            f = n.lowerWidth,
            p = n.height,
            v = n.className,
            b = n.animationEasing,
            j = n.animationDuration,
            S = n.animationBegin,
            _ = n.isUpdateAnimationActive;
          if (
            c !== +c ||
            l !== +l ||
            s !== +s ||
            f !== +f ||
            p !== +p ||
            (0 === s && 0 === f) ||
            0 === p
          )
            return null;
          var E = (0, d.Z)("recharts-trapezoid", v);
          return _
            ? r.createElement(
                h.ZP,
                {
                  canBegin: a > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: p, x: c, y: l },
                  to: { upperWidth: s, lowerWidth: f, height: p, x: c, y: l },
                  duration: j,
                  animationEasing: b,
                  isActive: _,
                },
                function (t) {
                  var e = t.upperWidth,
                    i = t.lowerWidth,
                    u = t.height,
                    c = t.x,
                    l = t.y;
                  return r.createElement(
                    h.ZP,
                    {
                      canBegin: a > 0,
                      from: "0px ".concat(-1 === a ? 1 : a, "px"),
                      to: "".concat(a, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: S,
                      duration: j,
                      easing: b,
                    },
                    r.createElement(
                      "path",
                      m({}, (0, y.L6)(n, !0), {
                        className: E,
                        d: O(c, l, e, i, u),
                        ref: o,
                      })
                    )
                  );
                }
              )
            : r.createElement(
                "g",
                null,
                r.createElement(
                  "path",
                  m({}, (0, y.L6)(n, !0), { className: E, d: O(c, l, s, f, p) })
                )
              );
        },
        S = n(79130),
        _ = n(64256),
        E = n(45022),
        P = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function A(t) {
        return (A =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != A(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != A(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == A(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function T(t) {
        var e = t.shapeType,
          n = t.elementProps;
        switch (e) {
          case "rectangle":
            return r.createElement(p.A, n);
          case "trapezoid":
            return r.createElement(j, n);
          case "sector":
            return r.createElement(S.L, n);
          case "symbols":
            if ("symbols" === e) return r.createElement(E.v, n);
            break;
          default:
            return null;
        }
      }
      function C(t) {
        var e,
          n = t.option,
          o = t.shapeType,
          a = t.propTransformer,
          c = t.activeClassName,
          s = t.isActive,
          f = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (o[n] = t[n]);
            }
            return o;
          })(t, P);
        if ((0, r.isValidElement)(n))
          e = (0, r.cloneElement)(
            n,
            M(M({}, f), (0, r.isValidElement)(n) ? n.props : n)
          );
        else if (i()(n)) e = n(f);
        else if (u()(n) && !l()(n)) {
          var p = (
            void 0 === a
              ? function (t, e) {
                  return M(M({}, e), t);
                }
              : a
          )(n, f);
          e = r.createElement(T, { shapeType: o, elementProps: p });
        } else e = r.createElement(T, { shapeType: o, elementProps: f });
        return s
          ? r.createElement(
              _.m,
              { className: void 0 === c ? "recharts-active-shape" : c },
              e
            )
          : e;
      }
      function I(t, e) {
        return null != e && "trapezoids" in t.props;
      }
      function N(t, e) {
        return null != e && "sectors" in t.props;
      }
      function D(t, e) {
        return null != e && "points" in t.props;
      }
      function R(t, e) {
        var n,
          r,
          o =
            t.x ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.x) || t.x === e.x,
          i =
            t.y ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.y) || t.y === e.y;
        return o && i;
      }
      function L(t, e) {
        var n = t.endAngle === e.endAngle,
          r = t.startAngle === e.startAngle;
        return n && r;
      }
      function B(t, e) {
        var n = t.x === e.x,
          r = t.y === e.y,
          o = t.z === e.z;
        return n && r && o;
      }
      function U(t) {
        var e,
          n,
          r,
          o = t.activeTooltipItem,
          i = t.graphicalItem,
          a = t.itemData,
          u =
            (I(i, o)
              ? (e = "trapezoids")
              : N(i, o)
              ? (e = "sectors")
              : D(i, o) && (e = "points"),
            e),
          c = I(i, o)
            ? null === (n = o.tooltipPayload) ||
              void 0 === n ||
              null === (n = n[0]) ||
              void 0 === n ||
              null === (n = n.payload) ||
              void 0 === n
              ? void 0
              : n.payload
            : N(i, o)
            ? null === (r = o.tooltipPayload) ||
              void 0 === r ||
              null === (r = r[0]) ||
              void 0 === r ||
              null === (r = r.payload) ||
              void 0 === r
              ? void 0
              : r.payload
            : D(i, o)
            ? o.payload
            : {},
          l = a.filter(function (t, e) {
            var n = f()(c, t),
              r = i.props[u].filter(function (t) {
                var e;
                return (I(i, o)
                  ? (e = R)
                  : N(i, o)
                  ? (e = L)
                  : D(i, o) && (e = B),
                e)(t, o);
              }),
              a = i.props[u].indexOf(r[r.length - 1]);
            return n && e === a;
          });
        return a.indexOf(l[l.length - 1]);
      }
    },
    4964: function (t, e, n) {
      "use strict";
      n.d(e, {
        By: function () {
          return ot;
        },
        VO: function () {
          return r5;
        },
        zF: function () {
          return ol;
        },
        DO: function () {
          return ou;
        },
        zT: function () {
          return ob;
        },
        qz: function () {
          return r9;
        },
        pt: function () {
          return r8;
        },
        gF: function () {
          return r6;
        },
        s6: function () {
          return or;
        },
        EB: function () {
          return oy;
        },
        fk: function () {
          return r7;
        },
        wh: function () {
          return op;
        },
        O3: function () {
          return oh;
        },
        uY: function () {
          return oi;
        },
        g$: function () {
          return od;
        },
        Qo: function () {
          return oO;
        },
        F$: function () {
          return r4;
        },
        NA: function () {
          return oo;
        },
        ko: function () {
          return ox;
        },
        ZI: function () {
          return on;
        },
        Hq: function () {
          return oc;
        },
        LG: function () {
          return og;
        },
      });
      var r,
        o,
        i,
        a,
        u,
        c,
        l,
        s = {};
      n.r(s),
        n.d(s, {
          scaleBand: function () {
            return f.Z;
          },
          scaleDiverging: function () {
            return function t() {
              var e = tD(nJ()(tv));
              return (
                (e.copy = function () {
                  return nX(e, t());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleDivergingLog: function () {
            return function t() {
              var e = tq(nJ()).domain([0.1, 1, 10]);
              return (
                (e.copy = function () {
                  return nX(e, t()).base(e.base());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleDivergingPow: function () {
            return nQ;
          },
          scaleDivergingSqrt: function () {
            return n0;
          },
          scaleDivergingSymlog: function () {
            return function t() {
              var e = tY(nJ());
              return (
                (e.copy = function () {
                  return nX(e, t()).constant(e.constant());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleIdentity: function () {
            return function t(e) {
              var n;
              function r(t) {
                return null == t || isNaN((t = +t)) ? n : t;
              }
              return (
                (r.invert = r),
                (r.domain = r.range =
                  function (t) {
                    return arguments.length
                      ? ((e = Array.from(t, th)), r)
                      : e.slice();
                  }),
                (r.unknown = function (t) {
                  return arguments.length ? ((n = t), r) : n;
                }),
                (r.copy = function () {
                  return t(e).unknown(n);
                }),
                (e = arguments.length ? Array.from(e, th) : [0, 1]),
                tD(r)
              );
            };
          },
          scaleImplicit: function () {
            return tH.O;
          },
          scaleLinear: function () {
            return tR;
          },
          scaleLog: function () {
            return function t() {
              let e = tq(tO()).domain([1, 10]);
              return (
                (e.copy = () => tx(e, t()).base(e.base())),
                tj.o.apply(e, arguments),
                e
              );
            };
          },
          scaleOrdinal: function () {
            return tH.Z;
          },
          scalePoint: function () {
            return f.x;
          },
          scalePow: function () {
            return tQ;
          },
          scaleQuantile: function () {
            return function t() {
              var e,
                n = [],
                r = [],
                o = [];
              function i() {
                var t = 0,
                  e = Math.max(1, r.length);
                for (o = Array(e - 1); ++t < e; )
                  o[t - 1] = (function (t, e, n = j) {
                    if (!(!(r = t.length) || isNaN((e = +e)))) {
                      if (e <= 0 || r < 2) return +n(t[0], 0, t);
                      if (e >= 1) return +n(t[r - 1], r - 1, t);
                      var r,
                        o = (r - 1) * e,
                        i = Math.floor(o),
                        a = +n(t[i], i, t);
                      return a + (+n(t[i + 1], i + 1, t) - a) * (o - i);
                    }
                  })(n, t / e);
                return a;
              }
              function a(t) {
                return null == t || isNaN((t = +t)) ? e : r[_(o, t)];
              }
              return (
                (a.invertExtent = function (t) {
                  var e = r.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : [
                        e > 0 ? o[e - 1] : n[0],
                        e < o.length ? o[e] : n[n.length - 1],
                      ];
                }),
                (a.domain = function (t) {
                  if (!arguments.length) return n.slice();
                  for (let e of ((n = []), t))
                    null == e || isNaN((e = +e)) || n.push(e);
                  return n.sort(b), i();
                }),
                (a.range = function (t) {
                  return arguments.length
                    ? ((r = Array.from(t)), i())
                    : r.slice();
                }),
                (a.unknown = function (t) {
                  return arguments.length ? ((e = t), a) : e;
                }),
                (a.quantiles = function () {
                  return o.slice();
                }),
                (a.copy = function () {
                  return t().domain(n).range(r).unknown(e);
                }),
                tj.o.apply(a, arguments)
              );
            };
          },
          scaleQuantize: function () {
            return function t() {
              var e,
                n = 0,
                r = 1,
                o = 1,
                i = [0.5],
                a = [0, 1];
              function u(t) {
                return null != t && t <= t ? a[_(i, t, 0, o)] : e;
              }
              function c() {
                var t = -1;
                for (i = Array(o); ++t < o; )
                  i[t] = ((t + 1) * r - (t - o) * n) / (o + 1);
                return u;
              }
              return (
                (u.domain = function (t) {
                  return arguments.length
                    ? (([n, r] = t), (n = +n), (r = +r), c())
                    : [n, r];
                }),
                (u.range = function (t) {
                  return arguments.length
                    ? ((o = (a = Array.from(t)).length - 1), c())
                    : a.slice();
                }),
                (u.invertExtent = function (t) {
                  var e = a.indexOf(t);
                  return e < 0
                    ? [NaN, NaN]
                    : e < 1
                    ? [n, i[0]]
                    : e >= o
                    ? [i[o - 1], r]
                    : [i[e - 1], i[e]];
                }),
                (u.unknown = function (t) {
                  return arguments.length && (e = t), u;
                }),
                (u.thresholds = function () {
                  return i.slice();
                }),
                (u.copy = function () {
                  return t().domain([n, r]).range(a).unknown(e);
                }),
                tj.o.apply(tD(u), arguments)
              );
            };
          },
          scaleRadial: function () {
            return function t() {
              var e,
                n = tw(),
                r = [0, 1],
                o = !1;
              function i(t) {
                var r,
                  i = Math.sign((r = n(t))) * Math.sqrt(Math.abs(r));
                return isNaN(i) ? e : o ? Math.round(i) : i;
              }
              return (
                (i.invert = function (t) {
                  return n.invert(t1(t));
                }),
                (i.domain = function (t) {
                  return arguments.length ? (n.domain(t), i) : n.domain();
                }),
                (i.range = function (t) {
                  return arguments.length
                    ? (n.range((r = Array.from(t, th)).map(t1)), i)
                    : r.slice();
                }),
                (i.rangeRound = function (t) {
                  return i.range(t).round(!0);
                }),
                (i.round = function (t) {
                  return arguments.length ? ((o = !!t), i) : o;
                }),
                (i.clamp = function (t) {
                  return arguments.length ? (n.clamp(t), i) : n.clamp();
                }),
                (i.unknown = function (t) {
                  return arguments.length ? ((e = t), i) : e;
                }),
                (i.copy = function () {
                  return t(n.domain(), r).round(o).clamp(n.clamp()).unknown(e);
                }),
                tj.o.apply(i, arguments),
                tD(i)
              );
            };
          },
          scaleSequential: function () {
            return function t() {
              var e = tD(nH()(tv));
              return (
                (e.copy = function () {
                  return nX(e, t());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleSequentialLog: function () {
            return function t() {
              var e = tq(nH()).domain([1, 10]);
              return (
                (e.copy = function () {
                  return nX(e, t()).base(e.base());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleSequentialPow: function () {
            return nG;
          },
          scaleSequentialQuantile: function () {
            return function t() {
              var e = [],
                n = tv;
              function r(t) {
                if (null != t && !isNaN((t = +t)))
                  return n((_(e, t, 1) - 1) / (e.length - 1));
              }
              return (
                (r.domain = function (t) {
                  if (!arguments.length) return e.slice();
                  for (let n of ((e = []), t))
                    null == n || isNaN((n = +n)) || e.push(n);
                  return e.sort(b), r;
                }),
                (r.interpolator = function (t) {
                  return arguments.length ? ((n = t), r) : n;
                }),
                (r.range = function () {
                  return e.map((t, r) => n(r / (e.length - 1)));
                }),
                (r.quantiles = function (t) {
                  return Array.from({ length: t + 1 }, (n, r) =>
                    (function (t, e, n) {
                      if (
                        !(
                          !(r = (t = Float64Array.from(
                            (function* (t, e) {
                              if (void 0 === e)
                                for (let e of t)
                                  null != e && (e = +e) >= e && (yield e);
                              else {
                                let n = -1;
                                for (let r of t)
                                  null != (r = e(r, ++n, t)) &&
                                    (r = +r) >= r &&
                                    (yield r);
                              }
                            })(t, void 0)
                          )).length) || isNaN((e = +e))
                        )
                      ) {
                        if (e <= 0 || r < 2) return t3(t);
                        if (e >= 1) return t2(t);
                        var r,
                          o = (r - 1) * e,
                          i = Math.floor(o),
                          a = t2(
                            (function t(e, n, r = 0, o = 1 / 0, i) {
                              if (
                                ((n = Math.floor(n)),
                                (r = Math.floor(Math.max(0, r))),
                                (o = Math.floor(Math.min(e.length - 1, o))),
                                !(r <= n && n <= o))
                              )
                                return e;
                              for (
                                i =
                                  void 0 === i
                                    ? t4
                                    : (function (t = b) {
                                        if (t === b) return t4;
                                        if ("function" != typeof t)
                                          throw TypeError(
                                            "compare is not a function"
                                          );
                                        return (e, n) => {
                                          let r = t(e, n);
                                          return r || 0 === r
                                            ? r
                                            : (0 === t(n, n)) - (0 === t(e, e));
                                        };
                                      })(i);
                                o > r;

                              ) {
                                if (o - r > 600) {
                                  let a = o - r + 1,
                                    u = n - r + 1,
                                    c = Math.log(a),
                                    l = 0.5 * Math.exp((2 * c) / 3),
                                    s =
                                      0.5 *
                                      Math.sqrt((c * l * (a - l)) / a) *
                                      (u - a / 2 < 0 ? -1 : 1),
                                    f = Math.max(
                                      r,
                                      Math.floor(n - (u * l) / a + s)
                                    ),
                                    p = Math.min(
                                      o,
                                      Math.floor(n + ((a - u) * l) / a + s)
                                    );
                                  t(e, n, f, p, i);
                                }
                                let a = e[n],
                                  u = r,
                                  c = o;
                                for (
                                  t6(e, r, n), i(e[o], a) > 0 && t6(e, r, o);
                                  u < c;

                                ) {
                                  for (t6(e, u, c), ++u, --c; 0 > i(e[u], a); )
                                    ++u;
                                  for (; i(e[c], a) > 0; ) --c;
                                }
                                0 === i(e[r], a) ? t6(e, r, c) : t6(e, ++c, o),
                                  c <= n && (r = c + 1),
                                  n <= c && (o = c - 1);
                              }
                              return e;
                            })(t, i).subarray(0, i + 1)
                          );
                        return a + (t3(t.subarray(i + 1)) - a) * (o - i);
                      }
                    })(e, r / t)
                  );
                }),
                (r.copy = function () {
                  return t(n).domain(e);
                }),
                tj.O.apply(r, arguments)
              );
            };
          },
          scaleSequentialSqrt: function () {
            return nK;
          },
          scaleSequentialSymlog: function () {
            return function t() {
              var e = tY(nH());
              return (
                (e.copy = function () {
                  return nX(e, t()).constant(e.constant());
                }),
                tj.O.apply(e, arguments)
              );
            };
          },
          scaleSqrt: function () {
            return t0;
          },
          scaleSymlog: function () {
            return function t() {
              var e = tY(tO());
              return (
                (e.copy = function () {
                  return tx(e, t()).constant(e.constant());
                }),
                tj.o.apply(e, arguments)
              );
            };
          },
          scaleThreshold: function () {
            return function t() {
              var e,
                n = [0.5],
                r = [0, 1],
                o = 1;
              function i(t) {
                return null != t && t <= t ? r[_(n, t, 0, o)] : e;
              }
              return (
                (i.domain = function (t) {
                  return arguments.length
                    ? ((o = Math.min((n = Array.from(t)).length, r.length - 1)),
                      i)
                    : n.slice();
                }),
                (i.range = function (t) {
                  return arguments.length
                    ? ((r = Array.from(t)),
                      (o = Math.min(n.length, r.length - 1)),
                      i)
                    : r.slice();
                }),
                (i.invertExtent = function (t) {
                  var e = r.indexOf(t);
                  return [n[e - 1], n[e]];
                }),
                (i.unknown = function (t) {
                  return arguments.length ? ((e = t), i) : e;
                }),
                (i.copy = function () {
                  return t().domain(n).range(r).unknown(e);
                }),
                tj.o.apply(i, arguments)
              );
            };
          },
          scaleTime: function () {
            return nV;
          },
          scaleUtc: function () {
            return nY;
          },
          tickFormat: function () {
            return tN;
          },
        });
      var f = n(47298);
      let p = Math.sqrt(50),
        d = Math.sqrt(10),
        h = Math.sqrt(2);
      function y(t, e, n) {
        let r, o, i;
        let a = (e - t) / Math.max(0, n),
          u = Math.floor(Math.log10(a)),
          c = a / Math.pow(10, u),
          l = c >= p ? 10 : c >= d ? 5 : c >= h ? 2 : 1;
        return (u < 0
          ? ((r = Math.round(t * (i = Math.pow(10, -u) / l))),
            (o = Math.round(e * i)),
            r / i < t && ++r,
            o / i > e && --o,
            (i = -i))
          : ((r = Math.round(t / (i = Math.pow(10, u) * l))),
            (o = Math.round(e / i)),
            r * i < t && ++r,
            o * i > e && --o),
        o < r && 0.5 <= n && n < 2)
          ? y(t, e, 2 * n)
          : [r, o, i];
      }
      function v(t, e, n) {
        if (((e = +e), (t = +t), !((n = +n) > 0))) return [];
        if (t === e) return [t];
        let r = e < t,
          [o, i, a] = r ? y(e, t, n) : y(t, e, n);
        if (!(i >= o)) return [];
        let u = i - o + 1,
          c = Array(u);
        if (r) {
          if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((i - t) / a);
          else for (let t = 0; t < u; ++t) c[t] = (i - t) * a;
        } else if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((o + t) / a);
        else for (let t = 0; t < u; ++t) c[t] = (o + t) * a;
        return c;
      }
      function m(t, e, n) {
        return y((t = +t), (e = +e), (n = +n))[2];
      }
      function g(t, e, n) {
        (e = +e), (t = +t), (n = +n);
        let r = e < t,
          o = r ? m(e, t, n) : m(t, e, n);
        return (r ? -1 : 1) * (o < 0 ? -(1 / o) : o);
      }
      function b(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function x(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function O(t) {
        let e, n, r;
        function o(t, r, o = 0, i = t.length) {
          if (o < i) {
            if (0 !== e(r, r)) return i;
            do {
              let e = (o + i) >>> 1;
              0 > n(t[e], r) ? (o = e + 1) : (i = e);
            } while (o < i);
          }
          return o;
        }
        return (
          2 !== t.length
            ? ((e = b), (n = (e, n) => b(t(e), n)), (r = (e, n) => t(e) - n))
            : ((e = t === b || t === x ? t : w), (n = t), (r = t)),
          {
            left: o,
            center: function (t, e, n = 0, i = t.length) {
              let a = o(t, e, n, i - 1);
              return a > n && r(t[a - 1], e) > -r(t[a], e) ? a - 1 : a;
            },
            right: function (t, r, o = 0, i = t.length) {
              if (o < i) {
                if (0 !== e(r, r)) return i;
                do {
                  let e = (o + i) >>> 1;
                  0 >= n(t[e], r) ? (o = e + 1) : (i = e);
                } while (o < i);
              }
              return o;
            },
          }
        );
      }
      function w() {
        return 0;
      }
      function j(t) {
        return null === t ? NaN : +t;
      }
      let S = O(b),
        _ = S.right;
      function E(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function P(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function A() {}
      S.left, O(j).center;
      var k = "\\s*([+-]?\\d+)\\s*",
        M = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        T = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        C = /^#([0-9a-f]{3,8})$/,
        I = RegExp(`^rgb\\(${k},${k},${k}\\)$`),
        N = RegExp(`^rgb\\(${T},${T},${T}\\)$`),
        D = RegExp(`^rgba\\(${k},${k},${k},${M}\\)$`),
        R = RegExp(`^rgba\\(${T},${T},${T},${M}\\)$`),
        L = RegExp(`^hsl\\(${M},${T},${T}\\)$`),
        B = RegExp(`^hsla\\(${M},${T},${T},${M}\\)$`),
        U = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function z() {
        return this.rgb().formatHex();
      }
      function F() {
        return this.rgb().formatRgb();
      }
      function $(t) {
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = C.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? W(e)
                : 3 === n
                ? new V(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === n
                ? q(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === n
                ? q(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = I.exec(t))
            ? new V(e[1], e[2], e[3], 1)
            : (e = N.exec(t))
            ? new V(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = D.exec(t))
            ? q(e[1], e[2], e[3], e[4])
            : (e = R.exec(t))
            ? q(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = L.exec(t))
            ? J(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = B.exec(t))
            ? J(e[1], e[2] / 100, e[3] / 100, e[4])
            : U.hasOwnProperty(t)
            ? W(U[t])
            : "transparent" === t
            ? new V(NaN, NaN, NaN, 0)
            : null
        );
      }
      function W(t) {
        return new V((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function q(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new V(t, e, n, r);
      }
      function Z(t, e, n, r) {
        var o;
        return 1 == arguments.length
          ? ((o = t) instanceof A || (o = $(o)), o)
            ? new V((o = o.rgb()).r, o.g, o.b, o.opacity)
            : new V()
          : new V(t, e, n, null == r ? 1 : r);
      }
      function V(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function Y() {
        return `#${K(this.r)}${K(this.g)}${K(this.b)}`;
      }
      function H() {
        let t = X(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${G(this.r)}, ${G(this.g)}, ${G(
          this.b
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function X(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function G(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function K(t) {
        return ((t = G(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function J(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new tt(t, e, n, r)
        );
      }
      function Q(t) {
        if (t instanceof tt) return new tt(t.h, t.s, t.l, t.opacity);
        if ((t instanceof A || (t = $(t)), !t)) return new tt();
        if (t instanceof tt) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          o = Math.min(e, n, r),
          i = Math.max(e, n, r),
          a = NaN,
          u = i - o,
          c = (i + o) / 2;
        return (
          u
            ? ((a =
                e === i
                  ? (n - r) / u + (n < r) * 6
                  : n === i
                  ? (r - e) / u + 2
                  : (e - n) / u + 4),
              (u /= c < 0.5 ? i + o : 2 - i - o),
              (a *= 60))
            : (u = c > 0 && c < 1 ? 0 : a),
          new tt(a, u, c, t.opacity)
        );
      }
      function tt(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function te(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function tn(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function tr(t, e, n) {
        return (
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e) * 255
        );
      }
      function to(t, e, n, r, o) {
        var i = t * t,
          a = i * t;
        return (
          ((1 - 3 * t + 3 * i - a) * e +
            (4 - 6 * i + 3 * a) * n +
            (1 + 3 * t + 3 * i - 3 * a) * r +
            a * o) /
          6
        );
      }
      E(A, $, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: z,
        formatHex: z,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return Q(this).formatHsl();
        },
        formatRgb: F,
        toString: F,
      }),
        E(
          V,
          Z,
          P(A, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new V(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new V(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new V(G(this.r), G(this.g), G(this.b), X(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: Y,
            formatHex: Y,
            formatHex8: function () {
              return `#${K(this.r)}${K(this.g)}${K(this.b)}${K(
                (isNaN(this.opacity) ? 1 : this.opacity) * 255
              )}`;
            },
            formatRgb: H,
            toString: H,
          })
        ),
        E(
          tt,
          function (t, e, n, r) {
            return 1 == arguments.length
              ? Q(t)
              : new tt(t, e, n, null == r ? 1 : r);
          },
          P(A, {
            brighter(t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new tt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new tt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                o = 2 * n - r;
              return new V(
                tr(t >= 240 ? t - 240 : t + 120, o, r),
                tr(t, o, r),
                tr(t < 120 ? t + 240 : t - 120, o, r),
                this.opacity
              );
            },
            clamp() {
              return new tt(
                te(this.h),
                tn(this.s),
                tn(this.l),
                X(this.opacity)
              );
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let t = X(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${te(this.h)}, ${
                100 * tn(this.s)
              }%, ${100 * tn(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          })
        );
      var ti = (t) => () => t;
      function ta(t, e) {
        var n = e - t;
        return n
          ? function (e) {
              return t + e * n;
            }
          : ti(isNaN(t) ? e : t);
      }
      var tu = (function t(e) {
        var n,
          r =
            1 == (n = +(n = e))
              ? ta
              : function (t, e) {
                  var r, o, i;
                  return e - t
                    ? ((r = t),
                      (o = e),
                      (r = Math.pow(r, (i = n))),
                      (o = Math.pow(o, i) - r),
                      (i = 1 / i),
                      function (t) {
                        return Math.pow(r + t * o, i);
                      })
                    : ti(isNaN(t) ? e : t);
                };
        function o(t, e) {
          var n = r((t = Z(t)).r, (e = Z(e)).r),
            o = r(t.g, e.g),
            i = r(t.b, e.b),
            a = ta(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = n(e)),
              (t.g = o(e)),
              (t.b = i(e)),
              (t.opacity = a(e)),
              t + ""
            );
          };
        }
        return (o.gamma = t), o;
      })(1);
      function tc(t) {
        return function (e) {
          var n,
            r,
            o = e.length,
            i = Array(o),
            a = Array(o),
            u = Array(o);
          for (n = 0; n < o; ++n)
            (r = Z(e[n])),
              (i[n] = r.r || 0),
              (a[n] = r.g || 0),
              (u[n] = r.b || 0);
          return (
            (i = t(i)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function (t) {
              return (r.r = i(t)), (r.g = a(t)), (r.b = u(t)), r + "";
            }
          );
        };
      }
      function tl(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      tc(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            o = t[r],
            i = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * o - i,
            u = r < e - 1 ? t[r + 2] : 2 * i - o;
          return to((n - r / e) * e, a, o, i, u);
        };
      }),
        tc(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              o = t[(r + e - 1) % e],
              i = t[r % e],
              a = t[(r + 1) % e],
              u = t[(r + 2) % e];
            return to((n - r / e) * e, o, i, a, u);
          };
        });
      var ts = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        tf = RegExp(ts.source, "g");
      function tp(t, e) {
        var n,
          r,
          o = typeof e;
        return null == e || "boolean" === o
          ? ti(e)
          : ("number" === o
              ? tl
              : "string" === o
              ? (r = $(e))
                ? ((e = r), tu)
                : function (t, e) {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      u = (ts.lastIndex = tf.lastIndex = 0),
                      c = -1,
                      l = [],
                      s = [];
                    for (
                      t += "", e += "";
                      (o = ts.exec(t)) && (i = tf.exec(e));

                    )
                      (a = i.index) > u &&
                        ((a = e.slice(u, a)),
                        l[c] ? (l[c] += a) : (l[++c] = a)),
                        (o = o[0]) === (i = i[0])
                          ? l[c]
                            ? (l[c] += i)
                            : (l[++c] = i)
                          : ((l[++c] = null), s.push({ i: c, x: tl(o, i) })),
                        (u = tf.lastIndex);
                    return (
                      u < e.length &&
                        ((a = e.slice(u)), l[c] ? (l[c] += a) : (l[++c] = a)),
                      l.length < 2
                        ? s[0]
                          ? ((n = s[0].x),
                            function (t) {
                              return n(t) + "";
                            })
                          : ((r = e),
                            function () {
                              return r;
                            })
                        : ((e = s.length),
                          function (t) {
                            for (var n, r = 0; r < e; ++r)
                              l[(n = s[r]).i] = n.x(t);
                            return l.join("");
                          })
                    );
                  }
              : e instanceof $
              ? tu
              : e instanceof Date
              ? function (t, e) {
                  var n = new Date();
                  return (
                    (t = +t),
                    (e = +e),
                    function (r) {
                      return n.setTime(t * (1 - r) + e * r), n;
                    }
                  );
                }
              : !ArrayBuffer.isView((n = e)) || n instanceof DataView
              ? Array.isArray(e)
                ? function (t, e) {
                    var n,
                      r = e ? e.length : 0,
                      o = t ? Math.min(r, t.length) : 0,
                      i = Array(o),
                      a = Array(r);
                    for (n = 0; n < o; ++n) i[n] = tp(t[n], e[n]);
                    for (; n < r; ++n) a[n] = e[n];
                    return function (t) {
                      for (n = 0; n < o; ++n) a[n] = i[n](t);
                      return a;
                    };
                  }
                : ("function" != typeof e.valueOf &&
                    "function" != typeof e.toString) ||
                  isNaN(e)
                ? function (t, e) {
                    var n,
                      r = {},
                      o = {};
                    for (n in ((null === t || "object" != typeof t) && (t = {}),
                    (null === e || "object" != typeof e) && (e = {}),
                    e))
                      n in t ? (r[n] = tp(t[n], e[n])) : (o[n] = e[n]);
                    return function (t) {
                      for (n in r) o[n] = r[n](t);
                      return o;
                    };
                  }
                : tl
              : function (t, e) {
                  e || (e = []);
                  var n,
                    r = t ? Math.min(e.length, t.length) : 0,
                    o = e.slice();
                  return function (i) {
                    for (n = 0; n < r; ++n) o[n] = t[n] * (1 - i) + e[n] * i;
                    return o;
                  };
                })(t, e);
      }
      function td(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return Math.round(t * (1 - n) + e * n);
          }
        );
      }
      function th(t) {
        return +t;
      }
      var ty = [0, 1];
      function tv(t) {
        return t;
      }
      function tm(t, e) {
        var n;
        return (e -= t = +t)
          ? function (n) {
              return (n - t) / e;
            }
          : ((n = isNaN(e) ? NaN : 0.5),
            function () {
              return n;
            });
      }
      function tg(t, e, n) {
        var r = t[0],
          o = t[1],
          i = e[0],
          a = e[1];
        return (
          o < r
            ? ((r = tm(o, r)), (i = n(a, i)))
            : ((r = tm(r, o)), (i = n(i, a))),
          function (t) {
            return i(r(t));
          }
        );
      }
      function tb(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          o = Array(r),
          i = Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (o[a] = tm(t[a], t[a + 1])), (i[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = _(t, e, 1, r) - 1;
          return i[n](o[n](e));
        };
      }
      function tx(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function tO() {
        var t,
          e,
          n,
          r,
          o,
          i,
          a = ty,
          u = ty,
          c = tp,
          l = tv;
        function s() {
          var t,
            e,
            n,
            c = Math.min(a.length, u.length);
          return (
            l !== tv &&
              ((t = a[0]),
              (e = a[c - 1]),
              t > e && ((n = t), (t = e), (e = n)),
              (l = function (n) {
                return Math.max(t, Math.min(e, n));
              })),
            (r = c > 2 ? tb : tg),
            (o = i = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? n
            : (o || (o = r(a.map(t), u, c)))(t(l(e)));
        }
        return (
          (f.invert = function (n) {
            return l(e((i || (i = r(u, a.map(t), tl)))(n)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, th)), s())
              : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Array.from(t)), (c = td), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || tv), s()) : l !== tv;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((c = t), s()) : c;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((n = t), f) : n;
          }),
          function (n, r) {
            return (t = n), (e = r), s();
          }
        );
      }
      function tw() {
        return tO()(tv, tv);
      }
      var tj = n(48330),
        tS =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function t_(t) {
        var e;
        if (!(e = tS.exec(t))) throw Error("invalid format: " + t);
        return new tE({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function tE(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function tP(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      function tA(t) {
        return (t = tP(Math.abs(t))) ? t[1] : NaN;
      }
      function tk(t, e) {
        var n = tP(t, e);
        if (!n) return t + "";
        var r = n[0],
          o = n[1];
        return o < 0
          ? "0." + Array(-o).join("0") + r
          : r.length > o + 1
          ? r.slice(0, o + 1) + "." + r.slice(o + 1)
          : r + Array(o - r.length + 2).join("0");
      }
      (t_.prototype = tE.prototype),
        (tE.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      var tM = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => tk(100 * t, e),
        r: tk,
        s: function (t, e) {
          var n = tP(t, e);
          if (!n) return t + "";
          var o = n[0],
            i = n[1],
            a = i - (r = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            u = o.length;
          return a === u
            ? o
            : a > u
            ? o + Array(a - u + 1).join("0")
            : a > 0
            ? o.slice(0, a) + "." + o.slice(a)
            : "0." + Array(1 - a).join("0") + tP(t, Math.max(0, e + a - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function tT(t) {
        return t;
      }
      var tC = Array.prototype.map,
        tI = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function tN(t, e, n, r) {
        var o,
          u,
          c = g(t, e, n);
        switch ((r = t_(null == r ? ",f" : r)).type) {
          case "s":
            var l = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != r.precision ||
                isNaN(
                  (u = Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(tA(l) / 3))) -
                      tA(Math.abs(c))
                  ))
                ) ||
                (r.precision = u),
              a(r, l)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN(
                (u =
                  Math.max(
                    0,
                    tA(
                      Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                        (o = Math.abs((o = c)))
                    ) - tA(o)
                  ) + 1)
              ) ||
              (r.precision = u - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN((u = Math.max(0, -tA(Math.abs(c))))) ||
              (r.precision = u - ("%" === r.type) * 2);
        }
        return i(r);
      }
      function tD(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return v(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return tN(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              o,
              i = e(),
              a = 0,
              u = i.length - 1,
              c = i[a],
              l = i[u],
              s = 10;
            for (
              l < c && ((o = c), (c = l), (l = o), (o = a), (a = u), (u = o));
              s-- > 0;

            ) {
              if ((o = m(c, l, n)) === r) return (i[a] = c), (i[u] = l), e(i);
              if (o > 0)
                (c = Math.floor(c / o) * o), (l = Math.ceil(l / o) * o);
              else if (o < 0)
                (c = Math.ceil(c * o) / o), (l = Math.floor(l * o) / o);
              else break;
              r = o;
            }
            return t;
          }),
          t
        );
      }
      function tR() {
        var t = tw();
        return (
          (t.copy = function () {
            return tx(t, tR());
          }),
          tj.o.apply(t, arguments),
          tD(t)
        );
      }
      function tL(t, e) {
        t = t.slice();
        var n,
          r = 0,
          o = t.length - 1,
          i = t[r],
          a = t[o];
        return (
          a < i && ((n = r), (r = o), (o = n), (n = i), (i = a), (a = n)),
          (t[r] = e.floor(i)),
          (t[o] = e.ceil(a)),
          t
        );
      }
      function tB(t) {
        return Math.log(t);
      }
      function tU(t) {
        return Math.exp(t);
      }
      function tz(t) {
        return -Math.log(-t);
      }
      function tF(t) {
        return -Math.exp(-t);
      }
      function t$(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function tW(t) {
        return (e, n) => -t(-e, n);
      }
      function tq(t) {
        let e, n;
        let r = t(tB, tU),
          o = r.domain,
          a = 10;
        function u() {
          var i, u;
          return (
            (e =
              (i = a) === Math.E
                ? Math.log
                : (10 === i && Math.log10) ||
                  (2 === i && Math.log2) ||
                  ((i = Math.log(i)), (t) => Math.log(t) / i)),
            (n =
              10 === (u = a)
                ? t$
                : u === Math.E
                ? Math.exp
                : (t) => Math.pow(u, t)),
            o()[0] < 0 ? ((e = tW(e)), (n = tW(n)), t(tz, tF)) : t(tB, tU),
            r
          );
        }
        return (
          (r.base = function (t) {
            return arguments.length ? ((a = +t), u()) : a;
          }),
          (r.domain = function (t) {
            return arguments.length ? (o(t), u()) : o();
          }),
          (r.ticks = (t) => {
            let r, i;
            let u = o(),
              c = u[0],
              l = u[u.length - 1],
              s = l < c;
            s && ([c, l] = [l, c]);
            let f = e(c),
              p = e(l),
              d = null == t ? 10 : +t,
              h = [];
            if (!(a % 1) && p - f < d) {
              if (((f = Math.floor(f)), (p = Math.ceil(p)), c > 0)) {
                for (; f <= p; ++f)
                  for (r = 1; r < a; ++r)
                    if (!((i = f < 0 ? r / n(-f) : r * n(f)) < c)) {
                      if (i > l) break;
                      h.push(i);
                    }
              } else
                for (; f <= p; ++f)
                  for (r = a - 1; r >= 1; --r)
                    if (!((i = f > 0 ? r / n(-f) : r * n(f)) < c)) {
                      if (i > l) break;
                      h.push(i);
                    }
              2 * h.length < d && (h = v(c, l, d));
            } else h = v(f, p, Math.min(p - f, d)).map(n);
            return s ? h.reverse() : h;
          }),
          (r.tickFormat = (t, o) => {
            if (
              (null == t && (t = 10),
              null == o && (o = 10 === a ? "s" : ","),
              "function" != typeof o &&
                (a % 1 || null != (o = t_(o)).precision || (o.trim = !0),
                (o = i(o))),
              t === 1 / 0)
            )
              return o;
            let u = Math.max(1, (a * t) / r.ticks().length);
            return (t) => {
              let r = t / n(Math.round(e(t)));
              return r * a < a - 0.5 && (r *= a), r <= u ? o(t) : "";
            };
          }),
          (r.nice = () =>
            o(
              tL(o(), {
                floor: (t) => n(Math.floor(e(t))),
                ceil: (t) => n(Math.ceil(e(t))),
              })
            )),
          r
        );
      }
      function tZ(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function tV(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function tY(t) {
        var e = 1,
          n = t(tZ(1), tV(e));
        return (
          (n.constant = function (n) {
            return arguments.length ? t(tZ((e = +n)), tV(e)) : e;
          }),
          tD(n)
        );
      }
      (i = (o = (function (t) {
        var e,
          n,
          o,
          i =
            void 0 === t.grouping || void 0 === t.thousands
              ? tT
              : ((e = tC.call(t.grouping, Number)),
                (n = t.thousands + ""),
                function (t, r) {
                  for (
                    var o = t.length, i = [], a = 0, u = e[0], c = 0;
                    o > 0 &&
                    u > 0 &&
                    (c + u + 1 > r && (u = Math.max(1, r - c)),
                    i.push(t.substring((o -= u), o + u)),
                    !((c += u + 1) > r));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return i.reverse().join(n);
                }),
          a = void 0 === t.currency ? "" : t.currency[0] + "",
          u = void 0 === t.currency ? "" : t.currency[1] + "",
          c = void 0 === t.decimal ? "." : t.decimal + "",
          l =
            void 0 === t.numerals
              ? tT
              : ((o = tC.call(t.numerals, String)),
                function (t) {
                  return t.replace(/[0-9]/g, function (t) {
                    return o[+t];
                  });
                }),
          s = void 0 === t.percent ? "%" : t.percent + "",
          f = void 0 === t.minus ? "−" : t.minus + "",
          p = void 0 === t.nan ? "NaN" : t.nan + "";
        function d(t) {
          var e = (t = t_(t)).fill,
            n = t.align,
            o = t.sign,
            d = t.symbol,
            h = t.zero,
            y = t.width,
            v = t.comma,
            m = t.precision,
            g = t.trim,
            b = t.type;
          "n" === b
            ? ((v = !0), (b = "g"))
            : tM[b] || (void 0 === m && (m = 12), (g = !0), (b = "g")),
            (h || ("0" === e && "=" === n)) && ((h = !0), (e = "0"), (n = "="));
          var x =
              "$" === d
                ? a
                : "#" === d && /[boxX]/.test(b)
                ? "0" + b.toLowerCase()
                : "",
            O = "$" === d ? u : /[%p]/.test(b) ? s : "",
            w = tM[b],
            j = /[defgprs%]/.test(b);
          function S(t) {
            var a,
              u,
              s,
              d = x,
              S = O;
            if ("c" === b) (S = w(t) + S), (t = "");
            else {
              var _ = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? p : w(Math.abs(t), m)),
                g &&
                  (t = (function (t) {
                    e: for (var e, n = t.length, r = 1, o = -1; r < n; ++r)
                      switch (t[r]) {
                        case ".":
                          o = e = r;
                          break;
                        case "0":
                          0 === o && (o = r), (e = r);
                          break;
                        default:
                          if (!+t[r]) break e;
                          o > 0 && (o = 0);
                      }
                    return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                  })(t)),
                _ && 0 == +t && "+" !== o && (_ = !1),
                (d =
                  (_ ? ("(" === o ? o : f) : "-" === o || "(" === o ? "" : o) +
                  d),
                (S =
                  ("s" === b ? tI[8 + r / 3] : "") +
                  S +
                  (_ && "(" === o ? ")" : "")),
                j)
              ) {
                for (a = -1, u = t.length; ++a < u; )
                  if (48 > (s = t.charCodeAt(a)) || s > 57) {
                    (S = (46 === s ? c + t.slice(a + 1) : t.slice(a)) + S),
                      (t = t.slice(0, a));
                    break;
                  }
              }
            }
            v && !h && (t = i(t, 1 / 0));
            var E = d.length + t.length + S.length,
              P = E < y ? Array(y - E + 1).join(e) : "";
            switch (
              (v &&
                h &&
                ((t = i(P + t, P.length ? y - S.length : 1 / 0)), (P = "")),
              n)
            ) {
              case "<":
                t = d + t + S + P;
                break;
              case "=":
                t = d + P + t + S;
                break;
              case "^":
                t = P.slice(0, (E = P.length >> 1)) + d + t + S + P.slice(E);
                break;
              default:
                t = P + d + t + S;
            }
            return l(t);
          }
          return (
            (m =
              void 0 === m
                ? 6
                : /[gprs]/.test(b)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
            (S.toString = function () {
              return t + "";
            }),
            S
          );
        }
        return {
          format: d,
          formatPrefix: function (t, e) {
            var n = d((((t = t_(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(tA(e) / 3))),
              o = Math.pow(10, -r),
              i = tI[8 + r / 3];
            return function (t) {
              return n(o * t) + i;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (a = o.formatPrefix);
      var tH = n(95814);
      function tX(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function tG(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function tK(t) {
        return t < 0 ? -t * t : t * t;
      }
      function tJ(t) {
        var e = t(tv, tv),
          n = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 == (n = +e)
                ? t(tv, tv)
                : 0.5 === n
                ? t(tG, tK)
                : t(tX(n), tX(1 / n))
              : n;
          }),
          tD(e)
        );
      }
      function tQ() {
        var t = tJ(tO());
        return (
          (t.copy = function () {
            return tx(t, tQ()).exponent(t.exponent());
          }),
          tj.o.apply(t, arguments),
          t
        );
      }
      function t0() {
        return tQ.apply(null, arguments).exponent(0.5);
      }
      function t1(t) {
        return Math.sign(t) * t * t;
      }
      function t2(t, e) {
        let n;
        if (void 0 === e)
          for (let e of t)
            null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let o of t)
            null != (o = e(o, ++r, t)) &&
              (n < o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      function t3(t, e) {
        let n;
        if (void 0 === e)
          for (let e of t)
            null != e && (n > e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let o of t)
            null != (o = e(o, ++r, t)) &&
              (n > o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      function t4(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function t6(t, e, n) {
        let r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      let t5 = new Date(),
        t7 = new Date();
      function t8(t, e, n, r) {
        function o(e) {
          return t((e = 0 == arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (o.floor = (e) => (t((e = new Date(+e))), e)),
          (o.ceil = (n) => (t((n = new Date(n - 1))), e(n, 1), t(n), n)),
          (o.round = (t) => {
            let e = o(t),
              n = o.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (o.offset = (t, n) => (
            e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t
          )),
          (o.range = (n, r, i) => {
            let a;
            let u = [];
            if (
              ((n = o.ceil(n)),
              (i = null == i ? 1 : Math.floor(i)),
              !(n < r) || !(i > 0))
            )
              return u;
            do u.push((a = new Date(+n))), e(n, i), t(n);
            while (a < n && n < r);
            return u;
          }),
          (o.filter = (n) =>
            t8(
              (e) => {
                if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
              },
              (t, r) => {
                if (t >= t) {
                  if (r < 0) for (; ++r <= 0; ) for (; e(t, -1), !n(t); );
                  else for (; --r >= 0; ) for (; e(t, 1), !n(t); );
                }
              }
            )),
          n &&
            ((o.count = (e, r) => (
              t5.setTime(+e),
              t7.setTime(+r),
              t(t5),
              t(t7),
              Math.floor(n(t5, t7))
            )),
            (o.every = (t) =>
              isFinite((t = Math.floor(t))) && t > 0
                ? t > 1
                  ? o.filter(
                      r ? (e) => r(e) % t == 0 : (e) => o.count(0, e) % t == 0
                    )
                  : o
                : null)),
          o
        );
      }
      let t9 = t8(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t
      );
      (t9.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t > 1
            ? t8(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, n) => {
                  e.setTime(+e + n * t);
                },
                (e, n) => (n - e) / t
              )
            : t9
          : null),
        t9.range;
      let et = t8(
        (t) => {
          t.setTime(t - t.getMilliseconds());
        },
        (t, e) => {
          t.setTime(+t + 1e3 * e);
        },
        (t, e) => (e - t) / 1e3,
        (t) => t.getUTCSeconds()
      );
      et.range;
      let ee = t8(
        (t) => {
          t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getMinutes()
      );
      ee.range;
      let en = t8(
        (t) => {
          t.setUTCSeconds(0, 0);
        },
        (t, e) => {
          t.setTime(+t + 6e4 * e);
        },
        (t, e) => (e - t) / 6e4,
        (t) => t.getUTCMinutes()
      );
      en.range;
      let er = t8(
        (t) => {
          t.setTime(
            t -
              t.getMilliseconds() -
              1e3 * t.getSeconds() -
              6e4 * t.getMinutes()
          );
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getHours()
      );
      er.range;
      let eo = t8(
        (t) => {
          t.setUTCMinutes(0, 0, 0);
        },
        (t, e) => {
          t.setTime(+t + 36e5 * e);
        },
        (t, e) => (e - t) / 36e5,
        (t) => t.getUTCHours()
      );
      eo.range;
      let ei = t8(
        (t) => t.setHours(0, 0, 0, 0),
        (t, e) => t.setDate(t.getDate() + e),
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
          864e5,
        (t) => t.getDate() - 1
      );
      ei.range;
      let ea = t8(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => t.getUTCDate() - 1
      );
      ea.range;
      let eu = t8(
        (t) => {
          t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e);
        },
        (t, e) => (e - t) / 864e5,
        (t) => Math.floor(t / 864e5)
      );
      function ec(t) {
        return t8(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
            6048e5
        );
      }
      eu.range;
      let el = ec(0),
        es = ec(1),
        ef = ec(2),
        ep = ec(3),
        ed = ec(4),
        eh = ec(5),
        ey = ec(6);
      function ev(t) {
        return t8(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / 6048e5
        );
      }
      el.range, es.range, ef.range, ep.range, ed.range, eh.range, ey.range;
      let em = ev(0),
        eg = ev(1),
        eb = ev(2),
        ex = ev(3),
        eO = ev(4),
        ew = ev(5),
        ej = ev(6);
      em.range, eg.range, eb.range, ex.range, eO.range, ew.range, ej.range;
      let eS = t8(
        (t) => {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setMonth(t.getMonth() + e);
        },
        (t, e) =>
          e.getMonth() -
          t.getMonth() +
          (e.getFullYear() - t.getFullYear()) * 12,
        (t) => t.getMonth()
      );
      eS.range;
      let e_ = t8(
        (t) => {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCMonth(t.getUTCMonth() + e);
        },
        (t, e) =>
          e.getUTCMonth() -
          t.getUTCMonth() +
          (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
        (t) => t.getUTCMonth()
      );
      e_.range;
      let eE = t8(
        (t) => {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setFullYear(t.getFullYear() + e);
        },
        (t, e) => e.getFullYear() - t.getFullYear(),
        (t) => t.getFullYear()
      );
      (eE.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t8(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setFullYear(e.getFullYear() + n * t);
              }
            )
          : null),
        eE.range;
      let eP = t8(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      function eA(t, e, n, r, o, i) {
        let a = [
          [et, 1, 1e3],
          [et, 5, 5e3],
          [et, 15, 15e3],
          [et, 30, 3e4],
          [i, 1, 6e4],
          [i, 5, 3e5],
          [i, 15, 9e5],
          [i, 30, 18e5],
          [o, 1, 36e5],
          [o, 3, 108e5],
          [o, 6, 216e5],
          [o, 12, 432e5],
          [r, 1, 864e5],
          [r, 2, 1728e5],
          [n, 1, 6048e5],
          [e, 1, 2592e6],
          [e, 3, 7776e6],
          [t, 1, 31536e6],
        ];
        function u(e, n, r) {
          let o = Math.abs(n - e) / r,
            i = O(([, , t]) => t).right(a, o);
          if (i === a.length) return t.every(g(e / 31536e6, n / 31536e6, r));
          if (0 === i) return t9.every(Math.max(g(e, n, r), 1));
          let [u, c] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
          return u.every(c);
        }
        return [
          function (t, e, n) {
            let r = e < t;
            r && ([t, e] = [e, t]);
            let o = n && "function" == typeof n.range ? n : u(t, e, n),
              i = o ? o.range(t, +e + 1) : [];
            return r ? i.reverse() : i;
          },
          u,
        ];
      }
      (eP.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? t8(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setUTCFullYear(e.getUTCFullYear() + n * t);
              }
            )
          : null),
        eP.range;
      let [ek, eM] = eA(eP, e_, em, eu, eo, en),
        [eT, eC] = eA(eE, eS, el, ei, er, ee);
      function eI(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function eN(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function eD(t, e, n) {
        return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      var eR = { "-": "", _: " ", 0: "0" },
        eL = /^\s*\d+/,
        eB = /^%/,
        eU = /[\\^$*+?|[\]().{}]/g;
      function ez(t, e, n) {
        var r = t < 0 ? "-" : "",
          o = (r ? -t : t) + "",
          i = o.length;
        return r + (i < n ? Array(n - i + 1).join(e) + o : o);
      }
      function eF(t) {
        return t.replace(eU, "\\$&");
      }
      function e$(t) {
        return RegExp("^(?:" + t.map(eF).join("|") + ")", "i");
      }
      function eW(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function eq(t, e, n) {
        var r = eL.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function eZ(t, e, n) {
        var r = eL.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function eV(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function eY(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function eH(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function eX(t, e, n) {
        var r = eL.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function eG(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function eK(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function eJ(t, e, n) {
        var r = eL.exec(e.slice(n, n + 1));
        return r ? ((t.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function eQ(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function e0(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function e1(t, e, n) {
        var r = eL.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function e2(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function e3(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function e4(t, e, n) {
        var r = eL.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function e6(t, e, n) {
        var r = eL.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function e5(t, e, n) {
        var r = eL.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function e7(t, e, n) {
        var r = eB.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function e8(t, e, n) {
        var r = eL.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function e9(t, e, n) {
        var r = eL.exec(e.slice(n));
        return r ? ((t.s = +r[0]), n + r[0].length) : -1;
      }
      function nt(t, e) {
        return ez(t.getDate(), e, 2);
      }
      function ne(t, e) {
        return ez(t.getHours(), e, 2);
      }
      function nn(t, e) {
        return ez(t.getHours() % 12 || 12, e, 2);
      }
      function nr(t, e) {
        return ez(1 + ei.count(eE(t), t), e, 3);
      }
      function no(t, e) {
        return ez(t.getMilliseconds(), e, 3);
      }
      function ni(t, e) {
        return no(t, e) + "000";
      }
      function na(t, e) {
        return ez(t.getMonth() + 1, e, 2);
      }
      function nu(t, e) {
        return ez(t.getMinutes(), e, 2);
      }
      function nc(t, e) {
        return ez(t.getSeconds(), e, 2);
      }
      function nl(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function ns(t, e) {
        return ez(el.count(eE(t) - 1, t), e, 2);
      }
      function nf(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? ed(t) : ed.ceil(t);
      }
      function np(t, e) {
        return (
          (t = nf(t)), ez(ed.count(eE(t), t) + (4 === eE(t).getDay()), e, 2)
        );
      }
      function nd(t) {
        return t.getDay();
      }
      function nh(t, e) {
        return ez(es.count(eE(t) - 1, t), e, 2);
      }
      function ny(t, e) {
        return ez(t.getFullYear() % 100, e, 2);
      }
      function nv(t, e) {
        return ez((t = nf(t)).getFullYear() % 100, e, 2);
      }
      function nm(t, e) {
        return ez(t.getFullYear() % 1e4, e, 4);
      }
      function ng(t, e) {
        var n = t.getDay();
        return ez(
          (t = n >= 4 || 0 === n ? ed(t) : ed.ceil(t)).getFullYear() % 1e4,
          e,
          4
        );
      }
      function nb(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          ez((e / 60) | 0, "0", 2) +
          ez(e % 60, "0", 2)
        );
      }
      function nx(t, e) {
        return ez(t.getUTCDate(), e, 2);
      }
      function nO(t, e) {
        return ez(t.getUTCHours(), e, 2);
      }
      function nw(t, e) {
        return ez(t.getUTCHours() % 12 || 12, e, 2);
      }
      function nj(t, e) {
        return ez(1 + ea.count(eP(t), t), e, 3);
      }
      function nS(t, e) {
        return ez(t.getUTCMilliseconds(), e, 3);
      }
      function n_(t, e) {
        return nS(t, e) + "000";
      }
      function nE(t, e) {
        return ez(t.getUTCMonth() + 1, e, 2);
      }
      function nP(t, e) {
        return ez(t.getUTCMinutes(), e, 2);
      }
      function nA(t, e) {
        return ez(t.getUTCSeconds(), e, 2);
      }
      function nk(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function nM(t, e) {
        return ez(em.count(eP(t) - 1, t), e, 2);
      }
      function nT(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? eO(t) : eO.ceil(t);
      }
      function nC(t, e) {
        return (
          (t = nT(t)), ez(eO.count(eP(t), t) + (4 === eP(t).getUTCDay()), e, 2)
        );
      }
      function nI(t) {
        return t.getUTCDay();
      }
      function nN(t, e) {
        return ez(eg.count(eP(t) - 1, t), e, 2);
      }
      function nD(t, e) {
        return ez(t.getUTCFullYear() % 100, e, 2);
      }
      function nR(t, e) {
        return ez((t = nT(t)).getUTCFullYear() % 100, e, 2);
      }
      function nL(t, e) {
        return ez(t.getUTCFullYear() % 1e4, e, 4);
      }
      function nB(t, e) {
        var n = t.getUTCDay();
        return ez(
          (t = n >= 4 || 0 === n ? eO(t) : eO.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4
        );
      }
      function nU() {
        return "+0000";
      }
      function nz() {
        return "%";
      }
      function nF(t) {
        return +t;
      }
      function n$(t) {
        return Math.floor(+t / 1e3);
      }
      function nW(t) {
        return new Date(t);
      }
      function nq(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function nZ(t, e, n, r, o, i, a, u, c, l) {
        var s = tw(),
          f = s.invert,
          p = s.domain,
          d = l(".%L"),
          h = l(":%S"),
          y = l("%I:%M"),
          v = l("%I %p"),
          m = l("%a %d"),
          g = l("%b %d"),
          b = l("%B"),
          x = l("%Y");
        function O(t) {
          return (
            c(t) < t
              ? d
              : u(t) < t
              ? h
              : a(t) < t
              ? y
              : i(t) < t
              ? v
              : r(t) < t
              ? o(t) < t
                ? m
                : g
              : n(t) < t
              ? b
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, nq)) : p().map(nW);
          }),
          (s.ticks = function (e) {
            var n = p();
            return t(n[0], n[n.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? O : l(e);
          }),
          (s.nice = function (t) {
            var n = p();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(n[0], n[n.length - 1], null == t ? 10 : t)),
              t ? p(tL(n, t)) : s
            );
          }),
          (s.copy = function () {
            return tx(s, nZ(t, e, n, r, o, i, a, u, c, l));
          }),
          s
        );
      }
      function nV() {
        return tj.o.apply(
          nZ(eT, eC, eE, eS, el, ei, er, ee, et, c).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function nY() {
        return tj.o.apply(
          nZ(ek, eM, eP, e_, em, ea, eo, en, et, l).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function nH() {
        var t,
          e,
          n,
          r,
          o,
          i = 0,
          a = 1,
          u = tv,
          c = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? o
            : u(
                0 === n
                  ? 0.5
                  : ((e = (r(e) - t) * n), c ? Math.max(0, Math.min(1, e)) : e)
              );
        }
        function s(t) {
          return function (e) {
            var n, r;
            return arguments.length
              ? (([n, r] = e), (u = t(n, r)), l)
              : [u(0), u(1)];
          };
        }
        return (
          (l.domain = function (o) {
            return arguments.length
              ? (([i, a] = o),
                (t = r((i = +i))),
                (e = r((a = +a))),
                (n = t === e ? 0 : 1 / (e - t)),
                l)
              : [i, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = !!t), l) : c;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((u = t), l) : u;
          }),
          (l.range = s(tp)),
          (l.rangeRound = s(td)),
          (l.unknown = function (t) {
            return arguments.length ? ((o = t), l) : o;
          }),
          function (o) {
            return (
              (r = o),
              (t = o(i)),
              (e = o(a)),
              (n = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function nX(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function nG() {
        var t = tJ(nH());
        return (
          (t.copy = function () {
            return nX(t, nG()).exponent(t.exponent());
          }),
          tj.O.apply(t, arguments)
        );
      }
      function nK() {
        return nG.apply(null, arguments).exponent(0.5);
      }
      function nJ() {
        var t,
          e,
          n,
          r,
          o,
          i,
          a,
          u = 0,
          c = 0.5,
          l = 1,
          s = 1,
          f = tv,
          p = !1;
        function d(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +i(t)) - e) * (s * t < s * e ? r : o)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function h(t) {
          return function (e) {
            var n, r, o;
            return arguments.length
              ? (([n, r, o] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = tp));
                  for (
                    var n = 0,
                      r = e.length - 1,
                      o = e[0],
                      i = Array(r < 0 ? 0 : r);
                    n < r;

                  )
                    i[n] = t(o, (o = e[++n]));
                  return function (t) {
                    var e = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
                    return i[e](t - e);
                  };
                })(t, [n, r, o])),
                d)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (d.domain = function (a) {
            return arguments.length
              ? (([u, c, l] = a),
                (t = i((u = +u))),
                (e = i((c = +c))),
                (n = i((l = +l))),
                (r = t === e ? 0 : 0.5 / (e - t)),
                (o = e === n ? 0 : 0.5 / (n - e)),
                (s = e < t ? -1 : 1),
                d)
              : [u, c, l];
          }),
          (d.clamp = function (t) {
            return arguments.length ? ((p = !!t), d) : p;
          }),
          (d.interpolator = function (t) {
            return arguments.length ? ((f = t), d) : f;
          }),
          (d.range = h(tp)),
          (d.rangeRound = h(td)),
          (d.unknown = function (t) {
            return arguments.length ? ((a = t), d) : a;
          }),
          function (a) {
            return (
              (i = a),
              (t = a(u)),
              (e = a(c)),
              (n = a(l)),
              (r = t === e ? 0 : 0.5 / (e - t)),
              (o = e === n ? 0 : 0.5 / (n - e)),
              (s = e < t ? -1 : 1),
              d
            );
          }
        );
      }
      function nQ() {
        var t = tJ(nJ());
        return (
          (t.copy = function () {
            return nX(t, nQ()).exponent(t.exponent());
          }),
          tj.O.apply(t, arguments)
        );
      }
      function n0() {
        return nQ.apply(null, arguments).exponent(0.5);
      }
      function n1(t, e) {
        if ((o = t.length) > 1)
          for (var n, r, o, i = 1, a = t[e[0]], u = a.length; i < o; ++i)
            for (r = a, a = t[e[i]], n = 0; n < u; ++n)
              a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      }
      (c = (u = (function (t) {
        var e = t.dateTime,
          n = t.date,
          r = t.time,
          o = t.periods,
          i = t.days,
          a = t.shortDays,
          u = t.months,
          c = t.shortMonths,
          l = e$(o),
          s = eW(o),
          f = e$(i),
          p = eW(i),
          d = e$(a),
          h = eW(a),
          y = e$(u),
          v = eW(u),
          m = e$(c),
          g = eW(c),
          b = {
            a: function (t) {
              return a[t.getDay()];
            },
            A: function (t) {
              return i[t.getDay()];
            },
            b: function (t) {
              return c[t.getMonth()];
            },
            B: function (t) {
              return u[t.getMonth()];
            },
            c: null,
            d: nt,
            e: nt,
            f: ni,
            g: nv,
            G: ng,
            H: ne,
            I: nn,
            j: nr,
            L: no,
            m: na,
            M: nu,
            p: function (t) {
              return o[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: nF,
            s: n$,
            S: nc,
            u: nl,
            U: ns,
            V: np,
            w: nd,
            W: nh,
            x: null,
            X: null,
            y: ny,
            Y: nm,
            Z: nb,
            "%": nz,
          },
          x = {
            a: function (t) {
              return a[t.getUTCDay()];
            },
            A: function (t) {
              return i[t.getUTCDay()];
            },
            b: function (t) {
              return c[t.getUTCMonth()];
            },
            B: function (t) {
              return u[t.getUTCMonth()];
            },
            c: null,
            d: nx,
            e: nx,
            f: n_,
            g: nR,
            G: nB,
            H: nO,
            I: nw,
            j: nj,
            L: nS,
            m: nE,
            M: nP,
            p: function (t) {
              return o[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: nF,
            s: n$,
            S: nA,
            u: nk,
            U: nM,
            V: nC,
            w: nI,
            W: nN,
            x: null,
            X: null,
            y: nD,
            Y: nL,
            Z: nU,
            "%": nz,
          },
          O = {
            a: function (t, e, n) {
              var r = d.exec(e.slice(n));
              return r
                ? ((t.w = h.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            A: function (t, e, n) {
              var r = f.exec(e.slice(n));
              return r
                ? ((t.w = p.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            b: function (t, e, n) {
              var r = m.exec(e.slice(n));
              return r
                ? ((t.m = g.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            B: function (t, e, n) {
              var r = y.exec(e.slice(n));
              return r
                ? ((t.m = v.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            c: function (t, n, r) {
              return S(t, e, n, r);
            },
            d: e0,
            e: e0,
            f: e5,
            g: eG,
            G: eX,
            H: e2,
            I: e2,
            j: e1,
            L: e6,
            m: eQ,
            M: e3,
            p: function (t, e, n) {
              var r = l.exec(e.slice(n));
              return r
                ? ((t.p = s.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            q: eJ,
            Q: e8,
            s: e9,
            S: e4,
            u: eZ,
            U: eV,
            V: eY,
            w: eq,
            W: eH,
            x: function (t, e, r) {
              return S(t, n, e, r);
            },
            X: function (t, e, n) {
              return S(t, r, e, n);
            },
            y: eG,
            Y: eX,
            Z: eK,
            "%": e7,
          };
        function w(t, e) {
          return function (n) {
            var r,
              o,
              i,
              a = [],
              u = -1,
              c = 0,
              l = t.length;
            for (n instanceof Date || (n = new Date(+n)); ++u < l; )
              37 === t.charCodeAt(u) &&
                (a.push(t.slice(c, u)),
                null != (o = eR[(r = t.charAt(++u))])
                  ? (r = t.charAt(++u))
                  : (o = "e" === r ? " " : "0"),
                (i = e[r]) && (r = i(n, o)),
                a.push(r),
                (c = u + 1));
            return a.push(t.slice(c, u)), a.join("");
          };
        }
        function j(t, e) {
          return function (n) {
            var r,
              o,
              i = eD(1900, void 0, 1);
            if (S(i, t, (n += ""), 0) != n.length) return null;
            if ("Q" in i) return new Date(i.Q);
            if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
            if (
              (!e || "Z" in i || (i.Z = 0),
              "p" in i && (i.H = (i.H % 12) + 12 * i.p),
              void 0 === i.m && (i.m = "q" in i ? i.q : 0),
              "V" in i)
            ) {
              if (i.V < 1 || i.V > 53) return null;
              "w" in i || (i.w = 1),
                "Z" in i
                  ? ((r =
                      (o = (r = eN(eD(i.y, 0, 1))).getUTCDay()) > 4 || 0 === o
                        ? eg.ceil(r)
                        : eg(r)),
                    (r = ea.offset(r, (i.V - 1) * 7)),
                    (i.y = r.getUTCFullYear()),
                    (i.m = r.getUTCMonth()),
                    (i.d = r.getUTCDate() + ((i.w + 6) % 7)))
                  : ((r =
                      (o = (r = eI(eD(i.y, 0, 1))).getDay()) > 4 || 0 === o
                        ? es.ceil(r)
                        : es(r)),
                    (r = ei.offset(r, (i.V - 1) * 7)),
                    (i.y = r.getFullYear()),
                    (i.m = r.getMonth()),
                    (i.d = r.getDate() + ((i.w + 6) % 7)));
            } else
              ("W" in i || "U" in i) &&
                ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                (o =
                  "Z" in i
                    ? eN(eD(i.y, 0, 1)).getUTCDay()
                    : eI(eD(i.y, 0, 1)).getDay()),
                (i.m = 0),
                (i.d =
                  "W" in i
                    ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                    : i.w + 7 * i.U - ((o + 6) % 7)));
            return "Z" in i
              ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), eN(i))
              : eI(i);
          };
        }
        function S(t, e, n, r) {
          for (var o, i, a = 0, u = e.length, c = n.length; a < u; ) {
            if (r >= c) return -1;
            if (37 === (o = e.charCodeAt(a++))) {
              if (
                !(i = O[(o = e.charAt(a++)) in eR ? e.charAt(a++) : o]) ||
                (r = i(t, n, r)) < 0
              )
                return -1;
            } else if (o != n.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (b.x = w(n, b)),
          (b.X = w(r, b)),
          (b.c = w(e, b)),
          (x.x = w(n, x)),
          (x.X = w(r, x)),
          (x.c = w(e, x)),
          {
            format: function (t) {
              var e = w((t += ""), b);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            parse: function (t) {
              var e = j((t += ""), !1);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcFormat: function (t) {
              var e = w((t += ""), x);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
            utcParse: function (t) {
              var e = j((t += ""), !0);
              return (
                (e.toString = function () {
                  return t;
                }),
                e
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })).format),
        u.parse,
        (l = u.utcFormat),
        u.utcParse;
      var n2 = n(16028),
        n3 = n(66622);
      function n4(t) {
        for (var e = t.length, n = Array(e); --e >= 0; ) n[e] = e;
        return n;
      }
      function n6(t, e) {
        return t[e];
      }
      function n5(t) {
        let e = [];
        return (e.key = t), e;
      }
      var n7 = n(47766),
        n8 = n.n(n7),
        n9 = n(89770),
        rt = n.n(n9),
        re = n(49972),
        rn = n.n(re),
        rr = n(14380),
        ro = n.n(rr),
        ri = n(71519),
        ra = n.n(ri),
        ru = n(97019),
        rc = n.n(ru),
        rl = n(73720),
        rs = n.n(rl),
        rf = n(50299),
        rp = n.n(rf),
        rd = n(62637),
        rh = n.n(rd),
        ry = n(12916),
        rv = n.n(ry),
        rm = n(60229),
        rg = n.n(rm),
        rb = n(11431),
        rx = n.n(rb);
      function rO(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var rw = function (t) {
          return t;
        },
        rj = {},
        rS = function (t) {
          return t === rj;
        },
        r_ = function (t) {
          return function e() {
            return 0 == arguments.length ||
              (1 == arguments.length &&
                rS(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        rE = function (t) {
          return (function t(e, n) {
            return 1 === e
              ? n
              : r_(function () {
                  for (
                    var r = arguments.length, o = Array(r), i = 0;
                    i < r;
                    i++
                  )
                    o[i] = arguments[i];
                  var a = o.filter(function (t) {
                    return t !== rj;
                  }).length;
                  return a >= e
                    ? n.apply(void 0, o)
                    : t(
                        e - a,
                        r_(function () {
                          for (
                            var t = arguments.length, e = Array(t), r = 0;
                            r < t;
                            r++
                          )
                            e[r] = arguments[r];
                          var i = o.map(function (t) {
                            return rS(t) ? e.shift() : t;
                          });
                          return n.apply(
                            void 0,
                            (
                              (function (t) {
                                if (Array.isArray(t)) return rO(t);
                              })(i) ||
                              (function (t) {
                                if (
                                  "undefined" != typeof Symbol &&
                                  Symbol.iterator in Object(t)
                                )
                                  return Array.from(t);
                              })(i) ||
                              (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t)
                                    return rO(t, void 0);
                                  var n = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === n &&
                                      t.constructor &&
                                      (n = t.constructor.name),
                                    "Map" === n || "Set" === n)
                                  )
                                    return Array.from(t);
                                  if (
                                    "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n
                                    )
                                  )
                                    return rO(t, void 0);
                                }
                              })(i) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              })()
                            ).concat(e)
                          );
                        })
                      );
                });
          })(t.length, t);
        },
        rP = function (t, e) {
          for (var n = [], r = t; r < e; ++r) n[r - t] = r;
          return n;
        },
        rA = rE(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        rk = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if (!e.length) return rw;
          var r = e.reverse(),
            o = r[0],
            i = r.slice(1);
          return function () {
            return i.reduce(function (t, e) {
              return e(t);
            }, o.apply(void 0, arguments));
          };
        },
        rM = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        rT = function (t) {
          var e = null,
            n = null;
          return function () {
            for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return e &&
              o.every(function (t, n) {
                return t === e[n];
              })
              ? n
              : ((e = o), (n = t.apply(void 0, o)));
          };
        },
        rC =
          (rE(function (t, e, n) {
            var r = +t;
            return r + n * (+e - r);
          }),
          rE(function (t, e, n) {
            var r = e - +t;
            return (n - t) / (r = r || 1 / 0);
          }),
          rE(function (t, e, n) {
            var r = e - +t;
            return Math.max(0, Math.min(1, (n - t) / (r = r || 1 / 0)));
          }),
          {
            rangeStep: function (t, e, n) {
              for (var r = new (rx())(t), o = 0, i = []; r.lt(e) && o < 1e5; )
                i.push(r.toNumber()), (r = r.add(n)), o++;
              return i;
            },
            getDigitCount: function (t) {
              return 0 === t
                ? 1
                : Math.floor(new (rx())(t).abs().log(10).toNumber()) + 1;
            },
          });
      function rI(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return rR(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          rD(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function rN(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, u = t[Symbol.iterator]();
                  !(r = (a = u.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (o = !0), (i = t);
              } finally {
                try {
                  r || null == u.return || u.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            }
          })(t, e) ||
          rD(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function rD(t, e) {
        if (t) {
          if ("string" == typeof t) return rR(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return rR(t, e);
        }
      }
      function rR(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function rL(t) {
        var e = rN(t, 2),
          n = e[0],
          r = e[1],
          o = n,
          i = r;
        return n > r && ((o = r), (i = n)), [o, i];
      }
      function rB(t, e, n) {
        if (t.lte(0)) return new (rx())(0);
        var r = rC.getDigitCount(t.toNumber()),
          o = new (rx())(10).pow(r),
          i = t.div(o),
          a = 1 !== r ? 0.05 : 0.1,
          u = new (rx())(Math.ceil(i.div(a).toNumber())).add(n).mul(a).mul(o);
        return e ? u : new (rx())(Math.ceil(u));
      }
      function rU(t, e, n) {
        var r = 1,
          o = new (rx())(t);
        if (!o.isint() && n) {
          var i = Math.abs(t);
          i < 1
            ? ((r = new (rx())(10).pow(rC.getDigitCount(t) - 1)),
              (o = new (rx())(Math.floor(o.div(r).toNumber())).mul(r)))
            : i > 1 && (o = new (rx())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (rx())(Math.floor((e - 1) / 2)))
            : n || (o = new (rx())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return rk(
          rA(function (t) {
            return o.add(new (rx())(t - a).mul(r)).toNumber();
          }),
          rP
        )(0, e);
      }
      var rz = rT(function (t) {
        var e = rN(t, 2),
          n = e[0],
          r = e[1],
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = Math.max(o, 2),
          u = rN(rL([n, r]), 2),
          c = u[0],
          l = u[1];
        if (c === -1 / 0 || l === 1 / 0) {
          var s =
            l === 1 / 0
              ? [c].concat(
                  rI(
                    rP(0, o - 1).map(function () {
                      return 1 / 0;
                    })
                  )
                )
              : [].concat(
                  rI(
                    rP(0, o - 1).map(function () {
                      return -1 / 0;
                    })
                  ),
                  [l]
                );
          return n > r ? rM(s) : s;
        }
        if (c === l) return rU(c, o, i);
        var f = (function t(e, n, r, o) {
            var i,
              a =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0;
            if (!Number.isFinite((n - e) / (r - 1)))
              return {
                step: new (rx())(0),
                tickMin: new (rx())(0),
                tickMax: new (rx())(0),
              };
            var u = rB(new (rx())(n).sub(e).div(r - 1), o, a),
              c = Math.ceil(
                (i =
                  e <= 0 && n >= 0
                    ? new (rx())(0)
                    : (i = new (rx())(e).add(n).div(2)).sub(
                        new (rx())(i).mod(u)
                      ))
                  .sub(e)
                  .div(u)
                  .toNumber()
              ),
              l = Math.ceil(new (rx())(n).sub(i).div(u).toNumber()),
              s = c + l + 1;
            return s > r
              ? t(e, n, r, o, a + 1)
              : (s < r &&
                  ((l = n > 0 ? l + (r - s) : l),
                  (c = n > 0 ? c : c + (r - s))),
                {
                  step: u,
                  tickMin: i.sub(new (rx())(c).mul(u)),
                  tickMax: i.add(new (rx())(l).mul(u)),
                });
          })(c, l, a, i),
          p = f.step,
          d = f.tickMin,
          h = f.tickMax,
          y = rC.rangeStep(d, h.add(new (rx())(0.1).mul(p)), p);
        return n > r ? rM(y) : y;
      });
      rT(function (t) {
        var e = rN(t, 2),
          n = e[0],
          r = e[1],
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = Math.max(o, 2),
          u = rN(rL([n, r]), 2),
          c = u[0],
          l = u[1];
        if (c === -1 / 0 || l === 1 / 0) return [n, r];
        if (c === l) return rU(c, o, i);
        var s = rB(new (rx())(l).sub(c).div(a - 1), i, 0),
          f = rk(
            rA(function (t) {
              return new (rx())(c).add(new (rx())(t).mul(s)).toNumber();
            }),
            rP
          )(0, a).filter(function (t) {
            return t >= c && t <= l;
          });
        return n > r ? rM(f) : f;
      });
      var rF = rT(function (t, e) {
          var n = rN(t, 2),
            r = n[0],
            o = n[1],
            i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a = rN(rL([r, o]), 2),
            u = a[0],
            c = a[1];
          if (u === -1 / 0 || c === 1 / 0) return [r, o];
          if (u === c) return [u];
          var l = rB(new (rx())(c).sub(u).div(Math.max(e, 2) - 1), i, 0),
            s = [].concat(
              rI(
                rC.rangeStep(
                  new (rx())(u),
                  new (rx())(c).sub(new (rx())(0.99).mul(l)),
                  l
                )
              ),
              [c]
            );
          return r > o ? rM(s) : s;
        }),
        r$ = n(2265),
        rW = n(59811),
        rq = n(64256),
        rZ = n(92705),
        rV = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
      function rY() {
        return (rY = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function rH(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function rX(t) {
        var e = t.offset,
          n = t.layout,
          r = t.width,
          o = t.dataKey,
          i = t.data,
          a = t.dataPointFormatter,
          u = t.xAxis,
          c = t.yAxis,
          l = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]),
                  !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (o[n] = t[n]);
            }
            return o;
          })(t, rV),
          s = (0, rZ.L6)(l, !1);
        "x" === t.direction && "number" !== u.type && (0, rW.Z)(!1);
        var f = i.map(function (t) {
          var i,
            l,
            f = a(t, o),
            p = f.x,
            d = f.y,
            h = f.value,
            y = f.errorVal;
          if (!y) return null;
          var v = [];
          if (Array.isArray(y)) {
            var m =
              (function (t) {
                if (Array.isArray(t)) return t;
              })(y) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    for (
                      i = (n = n.call(t)).next;
                      !(c = (r = i.call(n)).done) &&
                      (u.push(r.value), 2 !== u.length);
                      c = !0
                    );
                  } catch (t) {
                    (l = !0), (o = t);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return u;
                }
              })(y, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return rH(t, 2);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  if (
                    ("Object" === n &&
                      t.constructor &&
                      (n = t.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return rH(t, 2);
                }
              })(y, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })();
            (i = m[0]), (l = m[1]);
          } else i = l = y;
          if ("vertical" === n) {
            var g = u.scale,
              b = d + e,
              x = b + r,
              O = b - r,
              w = g(h - i),
              j = g(h + l);
            v.push({ x1: j, y1: x, x2: j, y2: O }),
              v.push({ x1: w, y1: b, x2: j, y2: b }),
              v.push({ x1: w, y1: x, x2: w, y2: O });
          } else if ("horizontal" === n) {
            var S = c.scale,
              _ = p + e,
              E = _ - r,
              P = _ + r,
              A = S(h - i),
              k = S(h + l);
            v.push({ x1: E, y1: k, x2: P, y2: k }),
              v.push({ x1: _, y1: A, x2: _, y2: k }),
              v.push({ x1: E, y1: A, x2: P, y2: A });
          }
          return r$.createElement(
            rq.m,
            rY(
              {
                className: "recharts-errorBar",
                key: "bar-".concat(
                  v.map(function (t) {
                    return ""
                      .concat(t.x1, "-")
                      .concat(t.x2, "-")
                      .concat(t.y1, "-")
                      .concat(t.y2);
                  })
                ),
              },
              s
            ),
            v.map(function (t) {
              return r$.createElement(
                "line",
                rY({}, t, {
                  key: "line-"
                    .concat(t.x1, "-")
                    .concat(t.x2, "-")
                    .concat(t.y1, "-")
                    .concat(t.y2),
                })
              );
            })
          );
        });
        return r$.createElement(rq.m, { className: "recharts-errorBars" }, f);
      }
      (rX.defaultProps = {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal",
      }),
        (rX.displayName = "ErrorBar");
      var rG = n(6779),
        rK = n(12171);
      function rJ(t) {
        return (rJ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function rQ(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function r0(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rQ(Object(n), !0).forEach(function (e) {
                r1(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : rQ(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function r1(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" != rJ(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != rJ(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == rJ(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function r2(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r3(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return r3(t, void 0);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return r3(t, void 0);
            }
          })(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function r3(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function r4(t, e, n) {
        return rn()(t) || rn()(e)
          ? n
          : (0, rG.P2)(e)
          ? rc()(t, e, n)
          : ro()(e)
          ? e(t)
          : n;
      }
      function r6(t, e, n, r) {
        var o = rs()(t, function (t) {
          return r4(t, e);
        });
        if ("number" === n) {
          var i = o.filter(function (t) {
            return (0, rG.hj)(t) || parseFloat(t);
          });
          return i.length ? [rt()(i), n8()(i)] : [1 / 0, -1 / 0];
        }
        return (
          r
            ? o.filter(function (t) {
                return !rn()(t);
              })
            : o
        ).map(function (t) {
          return (0, rG.P2)(t) || t instanceof Date ? t : "";
        });
      }
      var r5 = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = -1,
            a =
              null !== (e = null == n ? void 0 : n.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            o &&
            "angleAxis" === o.axisType &&
            1e-6 >= Math.abs(Math.abs(o.range[1] - o.range[0]) - 360)
          )
            for (var u = o.range, c = 0; c < a; c++) {
              var l = c > 0 ? r[c - 1].coordinate : r[a - 1].coordinate,
                s = r[c].coordinate,
                f = c >= a - 1 ? r[0].coordinate : r[c + 1].coordinate,
                p = void 0;
              if ((0, rG.uY)(s - l) !== (0, rG.uY)(f - s)) {
                var d = [];
                if ((0, rG.uY)(f - s) === (0, rG.uY)(u[1] - u[0])) {
                  p = f;
                  var h = s + u[1] - u[0];
                  (d[0] = Math.min(h, (h + l) / 2)),
                    (d[1] = Math.max(h, (h + l) / 2));
                } else {
                  p = l;
                  var y = f + u[1] - u[0];
                  (d[0] = Math.min(s, (y + s) / 2)),
                    (d[1] = Math.max(s, (y + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= d[0] && t <= d[1])) {
                  i = r[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  g = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (g + s) / 2) {
                  i = r[c].index;
                  break;
                }
              }
            }
          else
            for (var b = 0; b < a; b++)
              if (
                (0 === b && t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b > 0 &&
                  b < a - 1 &&
                  t > (n[b].coordinate + n[b - 1].coordinate) / 2 &&
                  t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b === a - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2)
              ) {
                i = n[b].index;
                break;
              }
          return i;
        },
        r7 = function (t) {
          var e,
            n = t.type.displayName,
            r = t.props,
            o = r.stroke,
            i = r.fill;
          switch (n) {
            case "Line":
              e = o;
              break;
            case "Area":
            case "Radar":
              e = o && "none" !== o ? o : i;
              break;
            default:
              e = i;
          }
          return e;
        },
        r8 = function (t) {
          var e = t.barSize,
            n = t.totalSize,
            r = t.stackGroups,
            o = void 0 === r ? {} : r;
          if (!o) return {};
          for (var i = {}, a = Object.keys(o), u = 0, c = a.length; u < c; u++)
            for (
              var l = o[a[u]].stackGroups,
                s = Object.keys(l),
                f = 0,
                p = s.length;
              f < p;
              f++
            ) {
              var d = l[s[f]],
                h = d.items,
                y = d.cateAxisId,
                v = h.filter(function (t) {
                  return (0, rZ.Gf)(t.type).indexOf("Bar") >= 0;
                });
              if (v && v.length) {
                var m = v[0].props.barSize,
                  g = v[0].props[y];
                i[g] || (i[g] = []);
                var b = rn()(m) ? e : m;
                i[g].push({
                  item: v[0],
                  stackList: v.slice(1),
                  barSize: rn()(b) ? void 0 : (0, rG.h1)(b, n, 0),
                });
              }
            }
          return i;
        },
        r9 = function (t) {
          var e,
            n = t.barGap,
            r = t.barCategoryGap,
            o = t.bandSize,
            i = t.sizeList,
            a = void 0 === i ? [] : i,
            u = t.maxBarSize,
            c = a.length;
          if (c < 1) return null;
          var l = (0, rG.h1)(n, o, 0, !0),
            s = [];
          if (a[0].barSize === +a[0].barSize) {
            var f = !1,
              p = o / c,
              d = a.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (d += (c - 1) * l) >= o && ((d -= (c - 1) * l), (l = 0)),
              d >= o && p > 0 && ((f = !0), (p *= 0.9), (d = c * p));
            var h = { offset: (((o - d) / 2) >> 0) - l, size: 0 };
            e = a.reduce(function (t, e) {
              var n = {
                  item: e.item,
                  position: {
                    offset: h.offset + h.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                r = [].concat(r2(t), [n]);
              return (
                (h = r[r.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: h });
                  }),
                r
              );
            }, s);
          } else {
            var y = (0, rG.h1)(r, o, 0, !0);
            o - 2 * y - (c - 1) * l <= 0 && (l = 0);
            var v = (o - 2 * y - (c - 1) * l) / c;
            v > 1 && (v >>= 0);
            var m = u === +u ? Math.min(v, u) : v;
            e = a.reduce(function (t, e, n) {
              var r = [].concat(r2(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + l) * n + (v - m) / 2, size: m },
                },
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: r[r.length - 1].position });
                  }),
                r
              );
            }, s);
          }
          return e;
        },
        ot = function (t, e, n, r) {
          var o = n.children,
            i = n.width,
            a = n.margin,
            u = i - (a.left || 0) - (a.right || 0),
            c = (0, rK.z)({ children: o, legendWidth: u });
          if (c) {
            var l = r || {},
              s = l.width,
              f = l.height,
              p = c.align,
              d = c.verticalAlign,
              h = c.layout;
            if (
              ("vertical" === h || ("horizontal" === h && "middle" === d)) &&
              "center" !== p &&
              (0, rG.hj)(t[p])
            )
              return r0(r0({}, t), {}, r1({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === h || ("vertical" === h && "center" === p)) &&
              "middle" !== d &&
              (0, rG.hj)(t[d])
            )
              return r0(r0({}, t), {}, r1({}, d, t[d] + (f || 0)));
          }
          return t;
        },
        oe = function (t, e, n, r, o) {
          var i = e.props.children,
            a = (0, rZ.NN)(i, rX).filter(function (t) {
              var e;
              return (
                (e = t.props.direction),
                !!rn()(o) ||
                  ("horizontal" === r
                    ? "yAxis" === o
                    : "vertical" === r || "x" === e
                    ? "xAxis" === o
                    : "y" !== e || "yAxis" === o)
              );
            });
          if (a && a.length) {
            var u = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var r = r4(e, n);
                if (rn()(r)) return t;
                var o = Array.isArray(r) ? [rt()(r), n8()(r)] : [r, r],
                  i = u.reduce(
                    function (t, n) {
                      var r = r4(e, n, 0),
                        i = o[0] - Math.abs(Array.isArray(r) ? r[0] : r),
                        a = o[1] + Math.abs(Array.isArray(r) ? r[1] : r);
                      return [Math.min(i, t[0]), Math.max(a, t[1])];
                    },
                    [1 / 0, -1 / 0]
                  );
                return [Math.min(i[0], t[0]), Math.max(i[1], t[1])];
              },
              [1 / 0, -1 / 0]
            );
          }
          return null;
        },
        on = function (t, e, n, r, o) {
          var i = e
            .map(function (e) {
              return oe(t, e, n, o, r);
            })
            .filter(function (t) {
              return !rn()(t);
            });
          return i && i.length
            ? i.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0]
              )
            : null;
        },
        or = function (t, e, n, r, o) {
          var i = e.map(function (e) {
            var i = e.props.dataKey;
            return ("number" === n && i && oe(t, e, i, r)) || r6(t, i, n, o);
          });
          if ("number" === n)
            return i.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0]
            );
          var a = {};
          return i.reduce(function (t, e) {
            for (var n = 0, r = e.length; n < r; n++)
              a[e[n]] || ((a[e[n]] = !0), t.push(e[n]));
            return t;
          }, []);
        },
        oo = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        oi = function (t, e, n) {
          if (!t) return null;
          var r = t.scale,
            o = t.duplicateDomain,
            i = t.type,
            a = t.range,
            u = "scaleBand" === t.realScaleType ? r.bandwidth() / 2 : 2,
            c =
              (e || n) && "category" === i && r.bandwidth
                ? r.bandwidth() / u
                : 0;
          return ((c =
            "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
              ? 2 * (0, rG.uY)(a[0] - a[1]) * c
              : c),
          e && (t.ticks || t.niceTicks))
            ? (t.ticks || t.niceTicks)
                .map(function (t) {
                  return {
                    coordinate: r(o ? o.indexOf(t) : t) + c,
                    value: t,
                    offset: c,
                  };
                })
                .filter(function (t) {
                  return !rp()(t.coordinate);
                })
            : t.isCategorical && t.categoricalDomain
            ? t.categoricalDomain.map(function (t, e) {
                return { coordinate: r(t) + c, value: t, index: e, offset: c };
              })
            : r.ticks && !n
            ? r.ticks(t.tickCount).map(function (t) {
                return { coordinate: r(t) + c, value: t, offset: c };
              })
            : r.domain().map(function (t, e) {
                return {
                  coordinate: r(t) + c,
                  value: o ? o[t] : t,
                  index: e,
                  offset: c,
                };
              });
        },
        oa = new WeakMap(),
        ou = function (t, e) {
          if ("function" != typeof e) return t;
          oa.has(t) || oa.set(t, new WeakMap());
          var n = oa.get(t);
          if (n.has(e)) return n.get(e);
          var r = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return n.set(e, r), r;
        },
        oc = function (t, e, n) {
          var r = t.scale,
            o = t.type,
            i = t.layout,
            a = t.axisType;
          if ("auto" === r)
            return "radial" === i && "radiusAxis" === a
              ? { scale: f.Z(), realScaleType: "band" }
              : "radial" === i && "angleAxis" === a
              ? { scale: tR(), realScaleType: "linear" }
              : "category" === o &&
                e &&
                (e.indexOf("LineChart") >= 0 ||
                  e.indexOf("AreaChart") >= 0 ||
                  (e.indexOf("ComposedChart") >= 0 && !n))
              ? { scale: f.x(), realScaleType: "point" }
              : "category" === o
              ? { scale: f.Z(), realScaleType: "band" }
              : { scale: tR(), realScaleType: "linear" };
          if (ra()(r)) {
            var u = "scale".concat(rh()(r));
            return {
              scale: (s[u] || f.x)(),
              realScaleType: s[u] ? u : "point",
            };
          }
          return ro()(r)
            ? { scale: r }
            : { scale: f.x(), realScaleType: "point" };
        },
        ol = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var n = e.length,
              r = t.range(),
              o = Math.min(r[0], r[1]) - 1e-4,
              i = Math.max(r[0], r[1]) + 1e-4,
              a = t(e[0]),
              u = t(e[n - 1]);
            (a < o || a > i || u < o || u > i) && t.domain([e[0], e[n - 1]]);
          }
        },
        os = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var o = 0, i = 0, a = 0; a < e; ++a) {
                  var u = rp()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                  u >= 0
                    ? ((t[a][n][0] = o), (t[a][n][1] = o + u), (o = t[a][n][1]))
                    : ((t[a][n][0] = i),
                      (t[a][n][1] = i + u),
                      (i = t[a][n][1]));
                }
          },
          expand: function (t, e) {
            if ((r = t.length) > 0) {
              for (var n, r, o, i = 0, a = t[0].length; i < a; ++i) {
                for (o = n = 0; n < r; ++n) o += t[n][i][1] || 0;
                if (o) for (n = 0; n < r; ++n) t[n][i][1] /= o;
              }
              n1(t, e);
            }
          },
          none: n1,
          silhouette: function (t, e) {
            if ((n = t.length) > 0) {
              for (var n, r = 0, o = t[e[0]], i = o.length; r < i; ++r) {
                for (var a = 0, u = 0; a < n; ++a) u += t[a][r][1] || 0;
                o[r][1] += o[r][0] = -u / 2;
              }
              n1(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((o = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
              for (var n, r, o, i = 0, a = 1; a < r; ++a) {
                for (var u = 0, c = 0, l = 0; u < o; ++u) {
                  for (
                    var s = t[e[u]],
                      f = s[a][1] || 0,
                      p = (f - (s[a - 1][1] || 0)) / 2,
                      d = 0;
                    d < u;
                    ++d
                  ) {
                    var h = t[e[d]];
                    p += (h[a][1] || 0) - (h[a - 1][1] || 0);
                  }
                  (c += f), (l += p * f);
                }
                (n[a - 1][1] += n[a - 1][0] = i), c && (i -= l / c);
              }
              (n[a - 1][1] += n[a - 1][0] = i), n1(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var o = 0, i = 0; i < e; ++i) {
                  var a = rp()(t[i][n][1]) ? t[i][n][0] : t[i][n][1];
                  a >= 0
                    ? ((t[i][n][0] = o), (t[i][n][1] = o + a), (o = t[i][n][1]))
                    : ((t[i][n][0] = 0), (t[i][n][1] = 0));
                }
          },
        },
        of = function (t, e, n) {
          var r = e.map(function (t) {
              return t.props.dataKey;
            }),
            o = os[n];
          return (function () {
            var t = (0, n3.Z)([]),
              e = n4,
              n = n1,
              r = n6;
            function o(o) {
              var i,
                a,
                u = Array.from(t.apply(this, arguments), n5),
                c = u.length,
                l = -1;
              for (let t of o)
                for (i = 0, ++l; i < c; ++i)
                  (u[i][l] = [0, +r(t, u[i].key, l, o)]).data = t;
              for (i = 0, a = (0, n2.Z)(e(u)); i < c; ++i) u[a[i]].index = i;
              return n(u, a), u;
            }
            return (
              (o.keys = function (e) {
                return arguments.length
                  ? ((t =
                      "function" == typeof e ? e : (0, n3.Z)(Array.from(e))),
                    o)
                  : t;
              }),
              (o.value = function (t) {
                return arguments.length
                  ? ((r = "function" == typeof t ? t : (0, n3.Z)(+t)), o)
                  : r;
              }),
              (o.order = function (t) {
                return arguments.length
                  ? ((e =
                      null == t
                        ? n4
                        : "function" == typeof t
                        ? t
                        : (0, n3.Z)(Array.from(t))),
                    o)
                  : e;
              }),
              (o.offset = function (t) {
                return arguments.length ? ((n = null == t ? n1 : t), o) : n;
              }),
              o
            );
          })()
            .keys(r)
            .value(function (t, e) {
              return +r4(t, e, 0);
            })
            .order(n4)
            .offset(o)(t);
        },
        op = function (t, e, n, r, o, i) {
          if (!t) return null;
          var a = (i ? e.reverse() : e).reduce(function (t, e) {
            var o = e.props,
              i = o.stackId;
            if (o.hide) return t;
            var a = e.props[n],
              u = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, rG.P2)(i)) {
              var c = u.stackGroups[i] || {
                numericAxisId: n,
                cateAxisId: r,
                items: [],
              };
              c.items.push(e), (u.hasStack = !0), (u.stackGroups[i] = c);
            } else u.stackGroups[(0, rG.EL)("_stackId_")] = { numericAxisId: n, cateAxisId: r, items: [e] };
            return r0(r0({}, t), {}, r1({}, a, u));
          }, {});
          return Object.keys(a).reduce(function (e, i) {
            var u = a[i];
            return (
              u.hasStack &&
                (u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                  e,
                  i
                ) {
                  var a = u.stackGroups[i];
                  return r0(
                    r0({}, e),
                    {},
                    r1({}, i, {
                      numericAxisId: n,
                      cateAxisId: r,
                      items: a.items,
                      stackedData: of(t, a.items, o),
                    })
                  );
                },
                {})),
              r0(r0({}, e), {}, r1({}, i, u))
            );
          }, {});
        },
        od = function (t, e) {
          var n = e.realScaleType,
            r = e.type,
            o = e.tickCount,
            i = e.originalDomain,
            a = e.allowDecimals,
            u = n || e.scale;
          if ("auto" !== u && "linear" !== u) return null;
          if (
            o &&
            "number" === r &&
            i &&
            ("auto" === i[0] || "auto" === i[1])
          ) {
            var c = t.domain();
            if (!c.length) return null;
            var l = rz(c, o, a);
            return t.domain([rt()(l), n8()(l)]), { niceTicks: l };
          }
          return o && "number" === r
            ? { niceTicks: rF(t.domain(), o, a) }
            : null;
        },
        oh = function (t, e) {
          var n = t.props.stackId;
          if ((0, rG.P2)(n)) {
            var r = e[n];
            if (r) {
              var o = r.items.indexOf(t);
              return o >= 0 ? r.stackedData[o] : null;
            }
          }
          return null;
        },
        oy = function (t, e, n) {
          return Object.keys(t)
            .reduce(
              function (r, o) {
                var i = t[o].stackedData.reduce(
                  function (t, r) {
                    var o = r.slice(e, n + 1).reduce(
                      function (t, e) {
                        return [
                          rt()(e.concat([t[0]]).filter(rG.hj)),
                          n8()(e.concat([t[1]]).filter(rG.hj)),
                        ];
                      },
                      [1 / 0, -1 / 0]
                    );
                    return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                  },
                  [1 / 0, -1 / 0]
                );
                return [Math.min(i[0], r[0]), Math.max(i[1], r[1])];
              },
              [1 / 0, -1 / 0]
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        ov = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        om = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        og = function (t, e, n) {
          if (ro()(t)) return t(e, n);
          if (!Array.isArray(t)) return e;
          var r = [];
          if ((0, rG.hj)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
          else if (ov.test(t[0])) {
            var o = +ov.exec(t[0])[1];
            r[0] = e[0] - o;
          } else ro()(t[0]) ? (r[0] = t[0](e[0])) : (r[0] = e[0]);
          if ((0, rG.hj)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
          else if (om.test(t[1])) {
            var i = +om.exec(t[1])[1];
            r[1] = e[1] + i;
          } else ro()(t[1]) ? (r[1] = t[1](e[1])) : (r[1] = e[1]);
          return r;
        },
        ob = function (t, e, n) {
          if (t && t.scale && t.scale.bandwidth) {
            var r = t.scale.bandwidth();
            if (!n || r > 0) return r;
          }
          if (t && e && e.length >= 2) {
            for (
              var o = rg()(e, function (t) {
                  return t.coordinate;
                }),
                i = 1 / 0,
                a = 1,
                u = o.length;
              a < u;
              a++
            ) {
              var c = o[a],
                l = o[a - 1];
              i = Math.min((c.coordinate || 0) - (l.coordinate || 0), i);
            }
            return i === 1 / 0 ? 0 : i;
          }
          return n ? void 0 : 0;
        },
        ox = function (t, e, n) {
          return !t || !t.length || rv()(t, rc()(n, "type.defaultProps.domain"))
            ? e
            : t;
        },
        oO = function (t, e) {
          var n = t.props,
            r = n.dataKey,
            o = n.name,
            i = n.unit,
            a = n.formatter,
            u = n.tooltipType,
            c = n.chartType,
            l = n.hide;
          return r0(
            r0({}, (0, rZ.L6)(t, !1)),
            {},
            {
              dataKey: r,
              unit: i,
              formatter: a,
              name: o || r,
              color: r7(t),
              value: r4(e, r),
              type: u,
              payload: e,
              chartType: c,
              hide: l,
            }
          );
        };
    },
    87097: function (t, e, n) {
      "use strict";
      n.d(e, {
        os: function () {
          return f;
        },
        xE: function () {
          return s;
        },
      });
      var r = n(47513);
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != o(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != o(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == o(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var u = { widthCache: {}, cacheCount: 0 },
        c = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        l = "recharts_measurement_span",
        s = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (null == t || r.x.isSsr) return { width: 0, height: 0 };
          var o =
              (Object.keys((e = a({}, n))).forEach(function (t) {
                e[t] || delete e[t];
              }),
              e),
            i = JSON.stringify({ text: t, copyStyle: o });
          if (u.widthCache[i]) return u.widthCache[i];
          try {
            var s = document.getElementById(l);
            s ||
              ((s = document.createElement("span")).setAttribute("id", l),
              s.setAttribute("aria-hidden", "true"),
              document.body.appendChild(s));
            var f = a(a({}, c), o);
            Object.assign(s.style, f), (s.textContent = "".concat(t));
            var p = s.getBoundingClientRect(),
              d = { width: p.width, height: p.height };
            return (
              (u.widthCache[i] = d),
              ++u.cacheCount > 2e3 && ((u.cacheCount = 0), (u.widthCache = {})),
              d
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        },
        f = function (t) {
          return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft,
          };
        };
    },
    6779: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ap: function () {
          return O;
        },
        EL: function () {
          return v;
        },
        Kt: function () {
          return g;
        },
        P2: function () {
          return h;
        },
        bv: function () {
          return b;
        },
        h1: function () {
          return m;
        },
        hU: function () {
          return p;
        },
        hj: function () {
          return d;
        },
        k4: function () {
          return x;
        },
        uY: function () {
          return f;
        },
      });
      var r = n(71519),
        o = n.n(r),
        i = n(50299),
        a = n.n(i),
        u = n(97019),
        c = n.n(u),
        l = n(60555),
        s = n.n(l),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return o()(t) && t.indexOf("%") === t.length - 1;
        },
        d = function (t) {
          return s()(t) && !a()(t);
        },
        h = function (t) {
          return d(t) || o()(t);
        },
        y = 0,
        v = function (t) {
          var e = ++y;
          return "".concat(t || "").concat(e);
        },
        m = function (t, e) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!d(t) && !o()(t)) return r;
          if (p(t)) {
            var u = t.indexOf("%");
            n = (e * parseFloat(t.slice(0, u))) / 100;
          } else n = +t;
          return a()(n) && (n = r), i && n > e && (n = e), n;
        },
        g = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        b = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, n = {}, r = 0; r < e; r++) {
            if (n[t[r]]) return !0;
            n[t[r]] = !0;
          }
          return !1;
        },
        x = function (t, e) {
          return d(t) && d(e)
            ? function (n) {
                return t + n * (e - t);
              }
            : function () {
                return e;
              };
        };
      function O(t, e, n) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : c()(t, e)) === n;
            })
          : null;
      }
    },
    47513: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return r;
        },
      });
      var r = {
        isSsr: !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return r[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) r[t] = e;
          else {
            var n = Object.keys(t);
            n &&
              n.length &&
              n.forEach(function (e) {
                r[e] = t[e];
              });
          }
        },
      };
    },
    83565: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var r = function (t, e) {
        for (
          var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
      };
    },
    48500: function (t, e, n) {
      "use strict";
      n.d(e, {
        $4: function () {
          return m;
        },
        $S: function () {
          return j;
        },
        Wk: function () {
          return y;
        },
        op: function () {
          return v;
        },
        t9: function () {
          return g;
        },
        z3: function () {
          return w;
        },
      });
      var r = n(49972),
        o = n.n(r),
        i = n(2265),
        a = n(14380),
        u = n.n(a),
        c = n(6779),
        l = n(4964);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function d(t, e, n) {
        var r;
        return (
          ((r = (function (t, e) {
            if ("object" != s(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != s(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == s(r) ? r : String(r)) in t)
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var y = Math.PI / 180,
        v = function (t, e, n, r) {
          return { x: t + Math.cos(-y * r) * n, y: e + Math.sin(-y * r) * n };
        },
        m = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0 };
          return (
            Math.min(
              Math.abs(t - (n.left || 0) - (n.right || 0)),
              Math.abs(e - (n.top || 0) - (n.bottom || 0))
            ) / 2
          );
        },
        g = function (t, e, n, r, i) {
          var a = t.width,
            u = t.height,
            s = t.startAngle,
            f = t.endAngle,
            y = (0, c.h1)(t.cx, a, a / 2),
            v = (0, c.h1)(t.cy, u, u / 2),
            g = m(a, u, n),
            b = (0, c.h1)(t.innerRadius, g, 0),
            x = (0, c.h1)(t.outerRadius, g, 0.8 * g);
          return Object.keys(e).reduce(function (t, n) {
            var a,
              u = e[n],
              c = u.domain,
              m = u.reversed;
            if (o()(u.range))
              "angleAxis" === r
                ? (a = [s, f])
                : "radiusAxis" === r && (a = [b, x]),
                m && (a = [a[1], a[0]]);
            else {
              var g,
                O =
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((g = a = u.range)) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var r,
                        o,
                        i,
                        a,
                        u = [],
                        c = !0,
                        l = !1;
                      try {
                        for (
                          i = (n = n.call(t)).next;
                          !(c = (r = i.call(n)).done) &&
                          (u.push(r.value), 2 !== u.length);
                          c = !0
                        );
                      } catch (t) {
                        (l = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != n.return &&
                            ((a = n.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (l) throw o;
                        }
                      }
                      return u;
                    }
                  })(g, 2) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return h(t, 2);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if (
                        ("Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(t);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return h(t, 2);
                    }
                  })(g, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })();
              (s = O[0]), (f = O[1]);
            }
            var w = (0, l.Hq)(u, i),
              j = w.realScaleType,
              S = w.scale;
            S.domain(c).range(a), (0, l.zF)(S);
            var _ = (0, l.g$)(S, p(p({}, u), {}, { realScaleType: j })),
              E = p(
                p(p({}, u), _),
                {},
                {
                  range: a,
                  radius: x,
                  realScaleType: j,
                  scale: S,
                  cx: y,
                  cy: v,
                  innerRadius: b,
                  outerRadius: x,
                  startAngle: s,
                  endAngle: f,
                }
              );
            return p(p({}, t), {}, d({}, n, E));
          }, {});
        },
        b = function (t, e) {
          var n = t.x,
            r = t.y;
          return Math.sqrt(Math.pow(n - e.x, 2) + Math.pow(r - e.y, 2));
        },
        x = function (t, e) {
          var n = t.x,
            r = t.y,
            o = e.cx,
            i = e.cy,
            a = b({ x: n, y: r }, { x: o, y: i });
          if (a <= 0) return { radius: a };
          var u = Math.acos((n - o) / a);
          return (
            r > i && (u = 2 * Math.PI - u),
            { radius: a, angle: (180 * u) / Math.PI, angleInRadian: u }
          );
        },
        O = function (t) {
          var e = t.startAngle,
            n = t.endAngle,
            r = Math.min(Math.floor(e / 360), Math.floor(n / 360));
          return { startAngle: e - 360 * r, endAngle: n - 360 * r };
        },
        w = function (t, e) {
          var n,
            r = x({ x: t.x, y: t.y }, e),
            o = r.radius,
            i = r.angle,
            a = e.innerRadius,
            u = e.outerRadius;
          if (o < a || o > u) return !1;
          if (0 === o) return !0;
          var c = O(e),
            l = c.startAngle,
            s = c.endAngle,
            f = i;
          if (l <= s) {
            for (; f > s; ) f -= 360;
            for (; f < l; ) f += 360;
            n = f >= l && f <= s;
          } else {
            for (; f > l; ) f -= 360;
            for (; f < s; ) f += 360;
            n = f >= s && f <= l;
          }
          return n
            ? p(
                p({}, e),
                {},
                {
                  radius: o,
                  angle:
                    f +
                    360 *
                      Math.min(
                        Math.floor(e.startAngle / 360),
                        Math.floor(e.endAngle / 360)
                      ),
                }
              )
            : null;
        },
        j = function (t) {
          return (0, i.isValidElement)(t) || u()(t) || "boolean" == typeof t
            ? ""
            : t.className;
        };
    },
    92705: function (t, e, n) {
      "use strict";
      n.d(e, {
        $R: function () {
          return R;
        },
        Bh: function () {
          return D;
        },
        Gf: function () {
          return w;
        },
        L6: function () {
          return T;
        },
        NN: function () {
          return E;
        },
        TT: function () {
          return A;
        },
        eu: function () {
          return N;
        },
        rL: function () {
          return C;
        },
        sP: function () {
          return P;
        },
      });
      var r = n(97019),
        o = n.n(r),
        i = n(49972),
        a = n.n(i),
        u = n(71519),
        c = n.n(u),
        l = n(14380),
        s = n.n(l),
        f = n(63117),
        p = n.n(f),
        d = n(2265),
        h = n(12659),
        y = n(6779),
        v = n(62857),
        m = n(91488),
        g = ["children"],
        b = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]);
        }
        return o;
      }
      var O = {
          click: "onClick",
          mousedown: "onMouseDown",
          mouseup: "onMouseUp",
          mouseover: "onMouseOver",
          mousemove: "onMouseMove",
          mouseout: "onMouseOut",
          mouseenter: "onMouseEnter",
          mouseleave: "onMouseLeave",
          touchcancel: "onTouchCancel",
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchstart: "onTouchStart",
        },
        w = function (t) {
          return "string" == typeof t
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "";
        },
        j = null,
        S = null,
        _ = function t(e) {
          if (e === j && Array.isArray(S)) return S;
          var n = [];
          return (
            d.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, h.isFragment)(e)
                  ? (n = n.concat(t(e.props.children)))
                  : n.push(e));
            }),
            (S = n),
            (j = e),
            n
          );
        };
      function E(t, e) {
        var n = [],
          r = [];
        return (
          (r = Array.isArray(e)
            ? e.map(function (t) {
                return w(t);
              })
            : [w(e)]),
          _(t).forEach(function (t) {
            var e = o()(t, "type.displayName") || o()(t, "type.name");
            -1 !== r.indexOf(e) && n.push(t);
          }),
          n
        );
      }
      function P(t, e) {
        var n = E(t, e);
        return n && n[0];
      }
      var A = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            n = e.width,
            r = e.height;
          return !!(0, y.hj)(n) && !(n <= 0) && !!(0, y.hj)(r) && !(r <= 0);
        },
        k = [
          "a",
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animate",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "circle",
          "clipPath",
          "color-profile",
          "cursor",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColormatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "font",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-url",
          "foreignObject",
          "g",
          "glyph",
          "glyphRef",
          "hkern",
          "image",
          "line",
          "lineGradient",
          "marker",
          "mask",
          "metadata",
          "missing-glyph",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "script",
          "set",
          "stop",
          "style",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "title",
          "tref",
          "tspan",
          "use",
          "view",
          "vkern",
        ],
        M = function (t, e, n, r) {
          var o,
            i =
              null !==
                (o = null === m.ry || void 0 === m.ry ? void 0 : m.ry[r]) &&
              void 0 !== o
                ? o
                : [];
          return (
            (!s()(t) && ((r && i.includes(e)) || m.Yh.includes(e))) ||
            (n && m.nv.includes(e))
          );
        },
        T = function (t, e, n) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (((0, d.isValidElement)(t) && (r = t.props), !p()(r))) return null;
          var o = {};
          return (
            Object.keys(r).forEach(function (t) {
              var i;
              M(null === (i = r) || void 0 === i ? void 0 : i[t], t, e, n) &&
                (o[t] = r[t]);
            }),
            o
          );
        },
        C = function t(e, n) {
          if (e === n) return !0;
          var r = d.Children.count(e);
          if (r !== d.Children.count(n)) return !1;
          if (0 === r) return !0;
          if (1 === r)
            return I(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
          for (var o = 0; o < r; o++) {
            var i = e[o],
              a = n[o];
            if (Array.isArray(i) || Array.isArray(a)) {
              if (!t(i, a)) return !1;
            } else if (!I(i, a)) return !1;
          }
          return !0;
        },
        I = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var n = t.props || {},
              r = n.children,
              o = x(n, g),
              i = e.props || {},
              u = i.children,
              c = x(i, b);
            if (r && u) return (0, v.w)(o, c) && C(r, u);
            if (!r && !u) return (0, v.w)(o, c);
          }
          return !1;
        },
        N = function (t, e) {
          var n = [],
            r = {};
          return (
            _(t).forEach(function (t, o) {
              if (t && t.type && c()(t.type) && k.indexOf(t.type) >= 0)
                n.push(t);
              else if (t) {
                var i = w(t.type),
                  a = e[i] || {},
                  u = a.handler,
                  l = a.once;
                if (u && (!l || !r[i])) {
                  var s = u(t, i, o);
                  n.push(s), (r[i] = !0);
                }
              }
            }),
            n
          );
        },
        D = function (t) {
          var e = t && t.type;
          return e && O[e] ? O[e] : null;
        },
        R = function (t, e) {
          return _(e).indexOf(t);
        };
    },
    62857: function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (var n in t)
          if (
            {}.hasOwnProperty.call(t, n) &&
            (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n])
          )
            return !1;
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
            return !1;
        return !0;
      }
      n.d(e, {
        w: function () {
          return r;
        },
      });
    },
    12171: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return l;
        },
      });
      var r = n(20153),
        o = n(4964),
        i = n(92705);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                var r, o;
                (r = e),
                  (o = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != a(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != a(r)) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == a(e) ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var l = function (t) {
        var e,
          n = t.children,
          a = t.formattedGraphicalItems,
          u = t.legendWidth,
          l = t.legendContent,
          s = (0, i.sP)(n, r.D);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : "children" === l
                ? (a || []).reduce(function (t, e) {
                    var n = e.item,
                      r = e.props,
                      o = r.sectors || r.data || [];
                    return t.concat(
                      o.map(function (t) {
                        return {
                          type: s.props.iconType || n.props.legendType,
                          value: t.name,
                          color: t.fill,
                          payload: t,
                        };
                      })
                    );
                  }, [])
                : (a || []).map(function (t) {
                    var e = t.item,
                      n = e.props,
                      r = n.dataKey,
                      i = n.name,
                      a = n.legendType;
                    return {
                      inactive: n.hide,
                      dataKey: r,
                      type: s.props.iconType || a || "square",
                      color: (0, o.fk)(e),
                      value: i || r,
                      payload: e.props,
                    };
                  })),
            c(
              c(c({}, s.props), r.D.getWithHeight(s, u)),
              {},
              { payload: e, item: s }
            ))
          : null;
      };
    },
    34630: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return u;
        },
      });
      var r = n(90374),
        o = n.n(r),
        i = n(14380),
        a = n.n(i);
      function u(t, e, n) {
        return !0 === e ? o()(t, n) : a()(e) ? o()(t, e) : t;
      }
    },
    91488: function (t, e, n) {
      "use strict";
      n.d(e, {
        Yh: function () {
          return u;
        },
        Ym: function () {
          return f;
        },
        bw: function () {
          return p;
        },
        nv: function () {
          return s;
        },
        ry: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(63117),
        i = n.n(o);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var u = [
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-modal",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
          "className",
          "color",
          "height",
          "id",
          "lang",
          "max",
          "media",
          "method",
          "min",
          "name",
          "style",
          "target",
          "width",
          "role",
          "tabIndex",
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baselineShift",
          "baseProfile",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "horizAdvX",
          "horizOriginX",
          "href",
          "ideographic",
          "imageRendering",
          "in2",
          "in",
          "intercept",
          "k1",
          "k2",
          "k3",
          "k4",
          "k",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "vHanging",
          "vIdeographic",
          "viewTarget",
          "visibility",
          "vMathematical",
          "widths",
          "wordSpacing",
          "writingMode",
          "x1",
          "x2",
          "x",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlns",
          "xmlnsXlink",
          "xmlSpace",
          "y1",
          "y2",
          "y",
          "yChannelSelector",
          "z",
          "zoomAndPan",
          "ref",
          "key",
          "angle",
        ],
        c = ["points", "pathLength"],
        l = { svg: ["viewBox", "children"], polygon: c, polyline: c },
        s = [
          "dangerouslySetInnerHTML",
          "onCopy",
          "onCopyCapture",
          "onCut",
          "onCutCapture",
          "onPaste",
          "onPasteCapture",
          "onCompositionEnd",
          "onCompositionEndCapture",
          "onCompositionStart",
          "onCompositionStartCapture",
          "onCompositionUpdate",
          "onCompositionUpdateCapture",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onChangeCapture",
          "onBeforeInput",
          "onBeforeInputCapture",
          "onInput",
          "onInputCapture",
          "onReset",
          "onResetCapture",
          "onSubmit",
          "onSubmitCapture",
          "onInvalid",
          "onInvalidCapture",
          "onLoad",
          "onLoadCapture",
          "onError",
          "onErrorCapture",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyPressCapture",
          "onKeyUp",
          "onKeyUpCapture",
          "onAbort",
          "onAbortCapture",
          "onCanPlay",
          "onCanPlayCapture",
          "onCanPlayThrough",
          "onCanPlayThroughCapture",
          "onDurationChange",
          "onDurationChangeCapture",
          "onEmptied",
          "onEmptiedCapture",
          "onEncrypted",
          "onEncryptedCapture",
          "onEnded",
          "onEndedCapture",
          "onLoadedData",
          "onLoadedDataCapture",
          "onLoadedMetadata",
          "onLoadedMetadataCapture",
          "onLoadStart",
          "onLoadStartCapture",
          "onPause",
          "onPauseCapture",
          "onPlay",
          "onPlayCapture",
          "onPlaying",
          "onPlayingCapture",
          "onProgress",
          "onProgressCapture",
          "onRateChange",
          "onRateChangeCapture",
          "onSeeked",
          "onSeekedCapture",
          "onSeeking",
          "onSeekingCapture",
          "onStalled",
          "onStalledCapture",
          "onSuspend",
          "onSuspendCapture",
          "onTimeUpdate",
          "onTimeUpdateCapture",
          "onVolumeChange",
          "onVolumeChangeCapture",
          "onWaiting",
          "onWaitingCapture",
          "onAuxClick",
          "onAuxClickCapture",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onContextMenuCapture",
          "onDoubleClick",
          "onDoubleClickCapture",
          "onDrag",
          "onDragCapture",
          "onDragEnd",
          "onDragEndCapture",
          "onDragEnter",
          "onDragEnterCapture",
          "onDragExit",
          "onDragExitCapture",
          "onDragLeave",
          "onDragLeaveCapture",
          "onDragOver",
          "onDragOverCapture",
          "onDragStart",
          "onDragStartCapture",
          "onDrop",
          "onDropCapture",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseMoveCapture",
          "onMouseOut",
          "onMouseOutCapture",
          "onMouseOver",
          "onMouseOverCapture",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onSelectCapture",
          "onTouchCancel",
          "onTouchCancelCapture",
          "onTouchEnd",
          "onTouchEndCapture",
          "onTouchMove",
          "onTouchMoveCapture",
          "onTouchStart",
          "onTouchStartCapture",
          "onPointerDown",
          "onPointerDownCapture",
          "onPointerMove",
          "onPointerMoveCapture",
          "onPointerUp",
          "onPointerUpCapture",
          "onPointerCancel",
          "onPointerCancelCapture",
          "onPointerEnter",
          "onPointerEnterCapture",
          "onPointerLeave",
          "onPointerLeaveCapture",
          "onPointerOver",
          "onPointerOverCapture",
          "onPointerOut",
          "onPointerOutCapture",
          "onGotPointerCapture",
          "onGotPointerCaptureCapture",
          "onLostPointerCapture",
          "onLostPointerCaptureCapture",
          "onScroll",
          "onScrollCapture",
          "onWheel",
          "onWheelCapture",
          "onAnimationStart",
          "onAnimationStartCapture",
          "onAnimationEnd",
          "onAnimationEndCapture",
          "onAnimationIteration",
          "onAnimationIterationCapture",
          "onTransitionEnd",
          "onTransitionEndCapture",
        ],
        f = function (t, e) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, r.isValidElement)(t) && (n = t.props), !i()(n))) return null;
          var o = {};
          return (
            Object.keys(n).forEach(function (t) {
              s.includes(t) &&
                (o[t] =
                  e ||
                  function (e) {
                    return n[t](n, e);
                  });
            }),
            o
          );
        },
        p = function (t, e, n) {
          if (!i()(t) || "object" !== a(t)) return null;
          var r = null;
          return (
            Object.keys(t).forEach(function (o) {
              var i = t[o];
              s.includes(o) &&
                "function" == typeof i &&
                (r || (r = {}),
                (r[o] = function (t) {
                  return i(e, n, t), null;
                }));
            }),
            r
          );
        };
    },
    34492: function (t, e, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(2265),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        i = r.useState,
        a = r.useEffect,
        u = r.useLayoutEffect,
        c = r.useDebugValue;
      function l(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var n = e();
          return !o(t, n);
        } catch (t) {
          return !0;
        }
      }
      var s =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var n = e(),
                r = i({ inst: { value: n, getSnapshot: e } }),
                o = r[0].inst,
                s = r[1];
              return (
                u(
                  function () {
                    (o.value = n), (o.getSnapshot = e), l(o) && s({ inst: o });
                  },
                  [t, n, e]
                ),
                a(
                  function () {
                    return (
                      l(o) && s({ inst: o }),
                      t(function () {
                        l(o) && s({ inst: o });
                      })
                    );
                  },
                  [t]
                ),
                c(n),
                n
              );
            };
      e.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s;
    },
    10554: function (t, e, n) {
      "use strict";
      t.exports = n(34492);
    },
    68916: function () {},
    18624: function (t) {
      t.exports = { verified: "icons_verified__1eJnA" };
    },
    91819: function (t) {
      t.exports = { root: "quoted-tweet-body_root__szSfI" };
    },
    30236: function (t) {
      t.exports = {
        root: "quoted-tweet-container_root__92393",
        article: "quoted-tweet-container_article__FoJQN",
      };
    },
    22820: function (t) {
      t.exports = {
        header: "quoted-tweet-header_header___qrcQ",
        avatar: "quoted-tweet-header_avatar__lGzrW",
        avatarSquare: "quoted-tweet-header_avatarSquare__l_eYT",
        author: "quoted-tweet-header_author__k48VI",
        authorText: "quoted-tweet-header_authorText__FULly",
        username: "quoted-tweet-header_username__YLPXR",
      };
    },
    44046: function (t) {
      t.exports = {
        skeleton: "skeleton_skeleton__gUMqh",
        loading: "skeleton_loading__XZoZ6",
      };
    },
    99030: function (t) {
      t.exports = {
        actions: "tweet-actions_actions__UDw7H",
        like: "tweet-actions_like__H1xYv",
        reply: "tweet-actions_reply__S4rFc",
        copy: "tweet-actions_copy__Tbdg_",
        likeIconWrapper: "tweet-actions_likeIconWrapper__JQkhp",
        likeCount: "tweet-actions_likeCount__MyxBd",
        replyIconWrapper: "tweet-actions_replyIconWrapper__NVdGa",
        copyIconWrapper: "tweet-actions_copyIconWrapper__toM2y",
        likeIcon: "tweet-actions_likeIcon__fhDng",
        replyIcon: "tweet-actions_replyIcon__MI2tG",
        copyIcon: "tweet-actions_copyIcon__SEaWw",
        replyText: "tweet-actions_replyText__doQct",
        copyText: "tweet-actions_copyText__fEqBx",
      };
    },
    84476: function (t) {
      t.exports = { root: "tweet-body_root__ChzUj" };
    },
    72786: function (t) {
      t.exports = {
        root: "tweet-container_root__0rJLq",
        article: "tweet-container_article__0ERPK",
      };
    },
    40823: function (t) {
      t.exports = {
        header: "tweet-header_header__CXzdi",
        avatar: "tweet-header_avatar__0Wi9G",
        avatarOverflow: "tweet-header_avatarOverflow__E2gxj",
        avatarSquare: "tweet-header_avatarSquare__uIUBO",
        avatarShadow: "tweet-header_avatarShadow__CB9Zo",
        author: "tweet-header_author___jWoR",
        authorLink: "tweet-header_authorLink__qj5Sm",
        authorVerified: "tweet-header_authorVerified__OFYo2",
        authorLinkText: "tweet-header_authorLinkText__y6HdU",
        authorMeta: "tweet-header_authorMeta__gIC3U",
        authorFollow: "tweet-header_authorFollow__w_j4h",
        username: "tweet-header_username__UebZb",
        follow: "tweet-header_follow__Fi7bf",
        separator: "tweet-header_separator__d4pqe",
        brand: "tweet-header_brand__0FLQl",
        twitterIcon: "tweet-header_twitterIcon__m0Rzu",
      };
    },
    51042: function (t) {
      t.exports = { root: "tweet-in-reply-to_root__o784R" };
    },
    85393: function (t) {
      t.exports = { root: "tweet-info-created-at_root__KaxZi" };
    },
    32249: function (t) {
      t.exports = {
        info: "tweet-info_info__ll_kH",
        infoLink: "tweet-info_infoLink__xdgYO",
        infoIcon: "tweet-info_infoIcon__S8lzA",
      };
    },
    94877: function (t) {
      t.exports = { root: "tweet-link_root__4EzRS" };
    },
    2290: function (t) {
      t.exports = {
        anchor: "tweet-media-video_anchor__EMqq1",
        videoButton: "tweet-media-video_videoButton__P9iF2",
        videoButtonIcon: "tweet-media-video_videoButtonIcon__7gRo1",
        watchOnTwitter: "tweet-media-video_watchOnTwitter__2ucCU",
        viewReplies: "tweet-media-video_viewReplies__dp8G_",
      };
    },
    60713: function (t) {
      t.exports = {
        root: "tweet-media_root__k6gQ2",
        rounded: "tweet-media_rounded__LgwFx",
        mediaWrapper: "tweet-media_mediaWrapper__6rfqr",
        grid2Columns: "tweet-media_grid2Columns__tO2Ea",
        grid3: "tweet-media_grid3__XbH4s",
        grid2x2: "tweet-media_grid2x2__Wiunq",
        mediaContainer: "tweet-media_mediaContainer__rjXGp",
        mediaLink: "tweet-media_mediaLink__vFkZL",
        skeleton: "tweet-media_skeleton__qZmSS",
        image: "tweet-media_image__yoPJg",
      };
    },
    87406: function (t) {
      t.exports = { root: "tweet-not-found_root__KQedq" };
    },
    84507: function (t) {
      t.exports = {
        replies: "tweet-replies_replies__PUxl8",
        link: "tweet-replies_link__roxYQ",
        text: "tweet-replies_text__o0Naf",
      };
    },
    44717: function (t) {
      t.exports = { root: "tweet-skeleton_root__1sn43" };
    },
    52983: function (t) {
      t.exports = {
        verifiedOld: "verified-badge_verifiedOld__zcaba",
        verifiedBlue: "verified-badge_verifiedBlue__s3_Vu",
        verifiedGovernment: "verified-badge_verifiedGovernment__qRJxq",
      };
    },
    44839: function (t, e, n) {
      "use strict";
      e.Z = function () {
        for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++)
          (t = arguments[n]) &&
            (e = (function t(e) {
              var n,
                r,
                o = "";
              if ("string" == typeof e || "number" == typeof e) o += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var i = e.length;
                  for (n = 0; n < i; n++)
                    e[n] && (r = t(e[n])) && (o && (o += " "), (o += r));
                } else for (r in e) e[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(t)) &&
            (r && (r += " "), (r += e));
        return r;
      };
    },
    47298: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
        x: function () {
          return a;
        },
      });
      var r = n(48330),
        o = n(95814);
      function i() {
        var t,
          e,
          n = (0, o.Z)().unknown(void 0),
          a = n.domain,
          u = n.range,
          c = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          d = 0.5;
        function h() {
          var n = a().length,
            r = l < c,
            o = r ? l : c,
            i = r ? c : l;
          (t = (i - o) / Math.max(1, n - f + 2 * p)),
            s && (t = Math.floor(t)),
            (o += (i - o - t * (n - f)) * d),
            (e = t * (1 - f)),
            s && ((o = Math.round(o)), (e = Math.round(e)));
          var h = (function (t, e, n) {
            (t = +t),
              (e = +e),
              (n =
                (o = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : o < 3
                  ? 1
                  : +n);
            for (
              var r = -1,
                o = 0 | Math.max(0, Math.ceil((e - t) / n)),
                i = Array(o);
              ++r < o;

            )
              i[r] = t + r * n;
            return i;
          })(n).map(function (e) {
            return o + t * e;
          });
          return u(r ? h.reverse() : h);
        }
        return (
          delete n.unknown,
          (n.domain = function (t) {
            return arguments.length ? (a(t), h()) : a();
          }),
          (n.range = function (t) {
            return arguments.length
              ? (([c, l] = t), (c = +c), (l = +l), h())
              : [c, l];
          }),
          (n.rangeRound = function (t) {
            return ([c, l] = t), (c = +c), (l = +l), (s = !0), h();
          }),
          (n.bandwidth = function () {
            return e;
          }),
          (n.step = function () {
            return t;
          }),
          (n.round = function (t) {
            return arguments.length ? ((s = !!t), h()) : s;
          }),
          (n.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), h()) : f;
          }),
          (n.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), h()) : f;
          }),
          (n.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), h()) : p;
          }),
          (n.align = function (t) {
            return arguments.length
              ? ((d = Math.max(0, Math.min(1, t))), h())
              : d;
          }),
          (n.copy = function () {
            return i(a(), [c, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(d);
          }),
          r.o.apply(h(), arguments)
        );
      }
      function a() {
        return (function t(e) {
          var n = e.copy;
          return (
            (e.padding = e.paddingOuter),
            delete e.paddingInner,
            delete e.paddingOuter,
            (e.copy = function () {
              return t(n());
            }),
            e
          );
        })(i.apply(null, arguments).paddingInner(1));
      }
    },
    48330: function (t, e, n) {
      "use strict";
      function r(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function o(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      n.d(e, {
        O: function () {
          return o;
        },
        o: function () {
          return r;
        },
      });
    },
    95814: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return function t() {
            var e = new r(),
              n = [],
              o = [],
              i = u;
            function c(t) {
              let r = e.get(t);
              if (void 0 === r) {
                if (i !== u) return i;
                e.set(t, (r = n.push(t) - 1));
              }
              return o[r % o.length];
            }
            return (
              (c.domain = function (t) {
                if (!arguments.length) return n.slice();
                for (let o of ((n = []), (e = new r()), t))
                  e.has(o) || e.set(o, n.push(o) - 1);
                return c;
              }),
              (c.range = function (t) {
                return arguments.length ? ((o = Array.from(t)), c) : o.slice();
              }),
              (c.unknown = function (t) {
                return arguments.length ? ((i = t), c) : i;
              }),
              (c.copy = function () {
                return t(n, o).unknown(i);
              }),
              a.o.apply(c, arguments),
              c
            );
          };
        },
        O: function () {
          return u;
        },
      });
      class r extends Map {
        constructor(t, e = i) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (let [e, n] of t) this.set(e, n);
        }
        get(t) {
          return super.get(o(this, t));
        }
        has(t) {
          return super.has(o(this, t));
        }
        set(t, e) {
          return super.set(
            (function ({ _intern: t, _key: e }, n) {
              let r = e(n);
              return t.has(r) ? t.get(r) : (t.set(r, n), n);
            })(this, t),
            e
          );
        }
        delete(t) {
          return super.delete(
            (function ({ _intern: t, _key: e }, n) {
              let r = e(n);
              return t.has(r) && ((n = t.get(r)), t.delete(r)), n;
            })(this, t)
          );
        }
      }
      function o({ _intern: t, _key: e }, n) {
        let r = e(n);
        return t.has(r) ? t.get(r) : n;
      }
      function i(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var a = n(48330);
      let u = Symbol("implicit");
    },
    16028: function (t, e, n) {
      "use strict";
      function r(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      }),
        Array.prototype.slice;
    },
    66622: function (t, e, n) {
      "use strict";
      function r(t) {
        return function () {
          return t;
        };
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    63760: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return c;
        },
      });
      let r = Math.PI,
        o = 2 * r,
        i = o - 1e-6;
      function a(t) {
        this._ += t[0];
        for (let e = 1, n = t.length; e < n; ++e) this._ += arguments[e] + t[e];
      }
      class u {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? a
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                    if (e > 15) return a;
                    let n = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, r = t.length; e < r; ++e)
                        this._ += Math.round(arguments[e] * n) / n + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, n, r) {
          this._append`Q${+t},${+e},${(this._x1 = +n)},${(this._y1 = +r)}`;
        }
        bezierCurveTo(t, e, n, r, o, i) {
          this._append`C${+t},${+e},${+n},${+r},${(this._x1 = +o)},${(this._y1 =
            +i)}`;
        }
        arcTo(t, e, n, o, i) {
          if (((t = +t), (e = +e), (n = +n), (o = +o), (i = +i) < 0))
            throw Error(`negative radius: ${i}`);
          let a = this._x1,
            u = this._y1,
            c = n - t,
            l = o - e,
            s = a - t,
            f = u - e,
            p = s * s + f * f;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (p > 1e-6) {
            if (Math.abs(f * c - l * s) > 1e-6 && i) {
              let d = n - a,
                h = o - u,
                y = c * c + l * l,
                v = Math.sqrt(y),
                m = Math.sqrt(p),
                g =
                  i *
                  Math.tan(
                    (r - Math.acos((y + p - (d * d + h * h)) / (2 * v * m))) / 2
                  ),
                b = g / m,
                x = g / v;
              Math.abs(b - 1) > 1e-6 &&
                this._append`L${t + b * s},${e + b * f}`,
                this._append`A${i},${i},0,0,${+(f * d > s * h)},${(this._x1 =
                  t + x * c)},${(this._y1 = e + x * l)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
          }
        }
        arc(t, e, n, a, u, c) {
          if (((t = +t), (e = +e), (c = !!c), (n = +n) < 0))
            throw Error(`negative radius: ${n}`);
          let l = n * Math.cos(a),
            s = n * Math.sin(a),
            f = t + l,
            p = e + s,
            d = 1 ^ c,
            h = c ? a - u : u - a;
          null === this._x1
            ? this._append`M${f},${p}`
            : (Math.abs(this._x1 - f) > 1e-6 ||
                Math.abs(this._y1 - p) > 1e-6) &&
              this._append`L${f},${p}`,
            n &&
              (h < 0 && (h = (h % o) + o),
              h > i
                ? this._append`A${n},${n},0,1,${d},${t - l},${
                    e - s
                  }A${n},${n},0,1,${d},${(this._x1 = f)},${(this._y1 = p)}`
                : h > 1e-6 &&
                  this._append`A${n},${n},0,${+(h >= r)},${d},${(this._x1 =
                    t + n * Math.cos(u))},${(this._y1 = e + n * Math.sin(u))}`);
        }
        rect(t, e, n, r) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}h${(n = +n)}v${+r}h${-n}Z`;
        }
        toString() {
          return this._;
        }
      }
      function c(t) {
        let e = 3;
        return (
          (t.digits = function (n) {
            if (!arguments.length) return e;
            if (null == n) e = null;
            else {
              let t = Math.floor(n);
              if (!(t >= 0)) throw RangeError(`invalid digits: ${n}`);
              e = t;
            }
            return t;
          }),
          () => new u(e)
        );
      }
      u.prototype;
    },
    46166: function (t, e, n) {
      "use strict";
      let r;
      n.r(e),
        n.d(e, {
          useMounted: function () {
            return ti;
          },
          useTweet: function () {
            return to;
          },
        });
      var o = n(2265),
        i = n(10554);
      let a = () => {},
        u = a(),
        c = Object,
        l = (t) => t === u,
        s = (t) => "function" == typeof t,
        f = (t, e) => ({ ...t, ...e }),
        p = (t) => s(t.then),
        d = new WeakMap(),
        h = 0,
        y = (t) => {
          let e, n;
          let r = typeof t,
            o = t && t.constructor,
            i = o == Date;
          if (c(t) !== t || i || o == RegExp)
            e = i
              ? t.toJSON()
              : "symbol" == r
              ? t.toString()
              : "string" == r
              ? JSON.stringify(t)
              : "" + t;
          else {
            if ((e = d.get(t))) return e;
            if (((e = ++h + "~"), d.set(t, e), o == Array)) {
              for (n = 0, e = "@"; n < t.length; n++) e += y(t[n]) + ",";
              d.set(t, e);
            }
            if (o == c) {
              e = "#";
              let r = c.keys(t).sort();
              for (; !l((n = r.pop())); )
                l(t[n]) || (e += n + ":" + y(t[n]) + ",");
              d.set(t, e);
            }
          }
          return e;
        },
        v = new WeakMap(),
        m = {},
        g = {},
        b = "undefined",
        x = typeof window != b,
        O = typeof document != b,
        w = () => x && typeof window.requestAnimationFrame != b,
        j = (t, e) => {
          let n = v.get(t);
          return [
            () => (!l(e) && t.get(e)) || m,
            (r) => {
              if (!l(e)) {
                let o = t.get(e);
                e in g || (g[e] = o), n[5](e, f(o, r), o || m);
              }
            },
            n[6],
            () => (!l(e) && e in g ? g[e] : (!l(e) && t.get(e)) || m),
          ];
        },
        S = !0,
        [_, E] =
          x && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [a, a],
        P = {
          initFocus: (t) => (
            O && document.addEventListener("visibilitychange", t),
            _("focus", t),
            () => {
              O && document.removeEventListener("visibilitychange", t),
                E("focus", t);
            }
          ),
          initReconnect: (t) => {
            let e = () => {
                (S = !0), t();
              },
              n = () => {
                S = !1;
              };
            return (
              _("online", e),
              _("offline", n),
              () => {
                E("online", e), E("offline", n);
              }
            );
          },
        },
        A = !o.useId,
        k = !x || "Deno" in window,
        M = (t) => (w() ? window.requestAnimationFrame(t) : setTimeout(t, 1)),
        T = k ? o.useEffect : o.useLayoutEffect,
        C = "undefined" != typeof navigator && navigator.connection,
        I =
          !k &&
          C &&
          (["slow-2g", "2g"].includes(C.effectiveType) || C.saveData),
        N = (t) => {
          if (s(t))
            try {
              t = t();
            } catch (e) {
              t = "";
            }
          let e = t;
          return [
            (t =
              "string" == typeof t
                ? t
                : (Array.isArray(t) ? t.length : t)
                ? y(t)
                : ""),
            e,
          ];
        },
        D = 0,
        R = () => ++D;
      var L = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function B(...t) {
        let [e, n, r, o] = t,
          i = f(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof o ? { revalidate: o } : o || {}
          ),
          a = i.populateCache,
          c = i.rollbackOnError,
          d = i.optimisticData,
          h = (t) => ("function" == typeof c ? c(t) : !1 !== c),
          y = i.throwOnError;
        if (s(n)) {
          let t = [];
          for (let r of e.keys())
            !/^\$(inf|sub)\$/.test(r) && n(e.get(r)._k) && t.push(r);
          return Promise.all(t.map(m));
        }
        return m(n);
        async function m(n) {
          let o;
          let [c] = N(n);
          if (!c) return;
          let [f, m] = j(e, c),
            [g, b, x, O] = v.get(e),
            w = () => {
              let t = g[c];
              return (s(i.revalidate)
                ? i.revalidate(f().data, n)
                : !1 !== i.revalidate) && (delete x[c], delete O[c], t && t[0])
                ? t[0](2).then(() => f().data)
                : f().data;
            };
          if (t.length < 3) return w();
          let S = r,
            _ = R();
          b[c] = [_, 0];
          let E = !l(d),
            P = f(),
            A = P.data,
            k = P._c,
            M = l(k) ? A : k;
          if ((E && m({ data: (d = s(d) ? d(M, A) : d), _c: M }), s(S)))
            try {
              S = S(M);
            } catch (t) {
              o = t;
            }
          if (S && p(S)) {
            if (
              ((S = await S.catch((t) => {
                o = t;
              })),
              _ !== b[c][0])
            ) {
              if (o) throw o;
              return S;
            }
            o && E && h(o) && ((a = !0), m({ data: M, _c: u }));
          }
          if (
            (a &&
              !o &&
              (s(a)
                ? m({ data: a(S, M), error: u, _c: u })
                : m({ data: S, error: u, _c: u })),
            (b[c][1] = R()),
            Promise.resolve(w()).then(() => {
              m({ _c: u });
            }),
            o)
          ) {
            if (y) throw o;
            return;
          }
          return S;
        }
      }
      let U = (t, e) => {
          for (let n in t) t[n][0] && t[n][0](e);
        },
        z = (t, e) => {
          if (!v.has(t)) {
            let n = f(P, e),
              r = {},
              o = B.bind(u, t),
              i = a,
              c = {},
              l = (t, e) => {
                let n = c[t] || [];
                return (c[t] = n), n.push(e), () => n.splice(n.indexOf(e), 1);
              },
              s = (e, n, r) => {
                t.set(e, n);
                let o = c[e];
                if (o) for (let t of o) t(n, r);
              },
              p = () => {
                if (!v.has(t) && (v.set(t, [r, {}, {}, {}, o, s, l]), !k)) {
                  let e = n.initFocus(setTimeout.bind(u, U.bind(u, r, 0))),
                    o = n.initReconnect(setTimeout.bind(u, U.bind(u, r, 1)));
                  i = () => {
                    e && e(), o && o(), v.delete(t);
                  };
                }
              };
            return p(), [t, o, p, i];
          }
          return [t, v.get(t)[4]];
        },
        [F, $] = z(new Map()),
        W = f(
          {
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: (t, e, n, r, o) => {
              let i = n.errorRetryCount,
                a = o.retryCount,
                u =
                  ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
                  n.errorRetryInterval;
              (l(i) || !(a > i)) && setTimeout(r, u, o);
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: I ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: I ? 5e3 : 3e3,
            compare: (t, e) => y(t) == y(e),
            isPaused: () => !1,
            cache: F,
            mutate: $,
            fallback: {},
          },
          {
            isOnline: () => S,
            isVisible: () => {
              let t = O && document.visibilityState;
              return l(t) || "hidden" !== t;
            },
          }
        ),
        q = (t, e) => {
          let n = f(t, e);
          if (e) {
            let { use: r, fallback: o } = t,
              { use: i, fallback: a } = e;
            r && i && (n.use = r.concat(i)), o && a && (n.fallback = f(o, a));
          }
          return n;
        },
        Z = (0, o.createContext)({}),
        V = x && window.__SWR_DEVTOOLS_USE__,
        Y = V ? window.__SWR_DEVTOOLS_USE__ : [],
        H = (t) =>
          s(t[1])
            ? [t[0], t[1], t[2] || {}]
            : [t[0], null, (null === t[1] ? t[2] : t[1]) || {}],
        X = () => f(W, (0, o.useContext)(Z)),
        G = Y.concat((t) => (e, n, r) => {
          let o =
            n &&
            ((...t) => {
              let [r] = N(e),
                [, , , o] = v.get(F);
              if (r.startsWith("$inf$")) return n(...t);
              let i = o[r];
              return l(i) ? n(...t) : (delete o[r], i);
            });
          return t(e, o, r);
        }),
        K = (t, e, n) => {
          let r = e[t] || (e[t] = []);
          return (
            r.push(n),
            () => {
              let t = r.indexOf(n);
              t >= 0 && ((r[t] = r[r.length - 1]), r.pop());
            }
          );
        };
      V && (window.__SWR_DEVTOOLS_REACT__ = o);
      let J =
          o.use ||
          ((t) => {
            if ("pending" === t.status) throw t;
            if ("fulfilled" === t.status) return t.value;
            if ("rejected" === t.status) throw t.reason;
            throw (
              ((t.status = "pending"),
              t.then(
                (e) => {
                  (t.status = "fulfilled"), (t.value = e);
                },
                (e) => {
                  (t.status = "rejected"), (t.reason = e);
                }
              ),
              t)
            );
          }),
        Q = { dedupe: !0 };
      c.defineProperty(
        (t) => {
          let { value: e } = t,
            n = (0, o.useContext)(Z),
            r = s(e),
            i = (0, o.useMemo)(() => (r ? e(n) : e), [r, n, e]),
            a = (0, o.useMemo)(() => (r ? i : q(n, i)), [r, n, i]),
            c = i && i.provider,
            l = (0, o.useRef)(u);
          c && !l.current && (l.current = z(c(a.cache || F), i));
          let p = l.current;
          return (
            p && ((a.cache = p[0]), (a.mutate = p[1])),
            T(() => {
              if (p) return p[2] && p[2](), p[3];
            }, []),
            (0, o.createElement)(Z.Provider, f(t, { value: a }))
          );
        },
        "defaultValue",
        { value: W }
      );
      let tt =
        ((r = (t, e, n) => {
          let {
              cache: r,
              compare: a,
              suspense: c,
              fallbackData: p,
              revalidateOnMount: d,
              revalidateIfStale: h,
              refreshInterval: y,
              refreshWhenHidden: m,
              refreshWhenOffline: g,
              keepPreviousData: b,
            } = n,
            [x, O, w, S] = v.get(r),
            [_, E] = N(t),
            P = (0, o.useRef)(!1),
            C = (0, o.useRef)(!1),
            I = (0, o.useRef)(_),
            D = (0, o.useRef)(e),
            U = (0, o.useRef)(n),
            z = () => U.current,
            F = () => z().isVisible() && z().isOnline(),
            [$, W, q, Z] = j(r, _),
            V = (0, o.useRef)({}).current,
            Y = l(p) ? n.fallback[_] : p,
            H = (t, e) => {
              for (let n in V)
                if ("data" === n) {
                  if (!a(t[n], e[n]) && (!l(t[n]) || !a(ta, e[n]))) return !1;
                } else if (e[n] !== t[n]) return !1;
              return !0;
            },
            X = (0, o.useMemo)(() => {
              let t =
                  !!_ &&
                  !!e &&
                  (l(d) ? !z().isPaused() && !c && (!!l(h) || h) : d),
                n = (e) => {
                  let n = f(e);
                  return (delete n._k, t)
                    ? { isValidating: !0, isLoading: !0, ...n }
                    : n;
                },
                r = $(),
                o = Z(),
                i = n(r),
                a = r === o ? i : n(o),
                u = i;
              return [
                () => {
                  let t = n($());
                  return H(t, u)
                    ? ((u.data = t.data),
                      (u.isLoading = t.isLoading),
                      (u.isValidating = t.isValidating),
                      (u.error = t.error),
                      u)
                    : ((u = t), t);
                },
                () => a,
              ];
            }, [r, _]),
            G = (0, i.useSyncExternalStore)(
              (0, o.useCallback)(
                (t) =>
                  q(_, (e, n) => {
                    H(n, e) || t();
                  }),
                [r, _]
              ),
              X[0],
              X[1]
            ),
            tt = !P.current,
            te = x[_] && x[_].length > 0,
            tn = G.data,
            tr = l(tn) ? Y : tn,
            to = G.error,
            ti = (0, o.useRef)(tr),
            ta = b ? (l(tn) ? ti.current : tn) : tr,
            tu =
              (!te || !!l(to)) &&
              (tt && !l(d)
                ? d
                : !z().isPaused() && (c ? !l(tr) && h : l(tr) || h)),
            tc = !!(_ && e && tt && tu),
            tl = l(G.isValidating) ? tc : G.isValidating,
            ts = l(G.isLoading) ? tc : G.isLoading,
            tf = (0, o.useCallback)(
              async (t) => {
                let e, r;
                let o = D.current;
                if (!_ || !o || C.current || z().isPaused()) return !1;
                let i = !0,
                  c = t || {},
                  f = !w[_] || !c.dedupe,
                  p = () =>
                    A
                      ? !C.current && _ === I.current && P.current
                      : _ === I.current,
                  d = { isValidating: !1, isLoading: !1 },
                  h = () => {
                    W(d);
                  },
                  y = () => {
                    let t = w[_];
                    t && t[1] === r && delete w[_];
                  },
                  v = { isValidating: !0 };
                l($().data) && (v.isLoading = !0);
                try {
                  if (
                    (f &&
                      (W(v),
                      n.loadingTimeout &&
                        l($().data) &&
                        setTimeout(() => {
                          i && p() && z().onLoadingSlow(_, n);
                        }, n.loadingTimeout),
                      (w[_] = [o(E), R()])),
                    ([e, r] = w[_]),
                    (e = await e),
                    f && setTimeout(y, n.dedupingInterval),
                    !w[_] || w[_][1] !== r)
                  )
                    return f && p() && z().onDiscarded(_), !1;
                  d.error = u;
                  let t = O[_];
                  if (!l(t) && (r <= t[0] || r <= t[1] || 0 === t[1]))
                    return h(), f && p() && z().onDiscarded(_), !1;
                  let c = $().data;
                  (d.data = a(c, e) ? c : e),
                    f && p() && z().onSuccess(e, _, n);
                } catch (n) {
                  y();
                  let t = z(),
                    { shouldRetryOnError: e } = t;
                  !t.isPaused() &&
                    ((d.error = n),
                    f &&
                      p() &&
                      (t.onError(n, _, t),
                      (!0 === e || (s(e) && e(n))) &&
                        (!z().revalidateOnFocus ||
                          !z().revalidateOnReconnect ||
                          F()) &&
                        t.onErrorRetry(
                          n,
                          _,
                          t,
                          (t) => {
                            let e = x[_];
                            e && e[0] && e[0](L.ERROR_REVALIDATE_EVENT, t);
                          },
                          { retryCount: (c.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (i = !1), h(), !0;
              },
              [_, r]
            ),
            tp = (0, o.useCallback)((...t) => B(r, I.current, ...t), []);
          if (
            (T(() => {
              (D.current = e), (U.current = n), l(tn) || (ti.current = tn);
            }),
            T(() => {
              if (!_) return;
              let t = tf.bind(u, Q),
                e = 0,
                n = K(_, x, (n, r = {}) => {
                  if (n == L.FOCUS_EVENT) {
                    let n = Date.now();
                    z().revalidateOnFocus &&
                      n > e &&
                      F() &&
                      ((e = n + z().focusThrottleInterval), t());
                  } else if (n == L.RECONNECT_EVENT)
                    z().revalidateOnReconnect && F() && t();
                  else if (n == L.MUTATE_EVENT) return tf();
                  else if (n == L.ERROR_REVALIDATE_EVENT) return tf(r);
                });
              return (
                (C.current = !1),
                (I.current = _),
                (P.current = !0),
                W({ _k: E }),
                tu && (l(tr) || k ? t() : M(t)),
                () => {
                  (C.current = !0), n();
                }
              );
            }, [_]),
            T(() => {
              let t;
              function e() {
                let e = s(y) ? y($().data) : y;
                e && -1 !== t && (t = setTimeout(n, e));
              }
              function n() {
                !$().error && (m || z().isVisible()) && (g || z().isOnline())
                  ? tf(Q).then(e)
                  : e();
              }
              return (
                e(),
                () => {
                  t && (clearTimeout(t), (t = -1));
                }
              );
            }, [y, m, g, _]),
            (0, o.useDebugValue)(ta),
            c && l(tr) && _)
          ) {
            if (!A && k)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            (D.current = e), (U.current = n), (C.current = !1);
            let t = S[_];
            if ((l(t) || J(tp(t)), l(to))) {
              let t = tf(Q);
              l(ta) || ((t.status = "fulfilled"), (t.value = !0)), J(t);
            } else throw to;
          }
          return {
            mutate: tp,
            get data() {
              return (V.data = !0), ta;
            },
            get error() {
              return (V.error = !0), to;
            },
            get isValidating() {
              return (V.isValidating = !0), tl;
            },
            get isLoading() {
              return (V.isLoading = !0), ts;
            },
          };
        }),
        function (...t) {
          let e = X(),
            [n, o, i] = H(t),
            a = q(e, i),
            u = r,
            { use: c } = a,
            l = (c || []).concat(G);
          for (let t = l.length; t--; ) u = l[t](u);
          return u(n, o || a.fetcher || null, a);
        });
      class te extends Error {
        constructor({ message: t, status: e, data: n }) {
          super(t),
            (this.name = "TwitterApiError"),
            (this.status = e),
            (this.data = n);
        }
      }
      let tn = tt.default || tt;
      async function tr(t) {
        let [e, n] = t,
          r = await fetch(e, n),
          o = await r.json();
        if (r.ok) return o.data || null;
        throw new te({
          message: 'Failed to fetch tweet at "'
            .concat(e, '" with "')
            .concat(r.status, '".'),
          data: o,
          status: r.status,
        });
      }
      let to = (t, e, n) => {
          let {
            isLoading: r,
            data: o,
            error: i,
          } = tn(
            () =>
              e || t
                ? [
                    e ||
                      (t &&
                        ""
                          .concat(
                            "https://react-tweet.vercel.app",
                            "/api/tweet/"
                          )
                          .concat(t)),
                    n,
                  ]
                : null,
            tr,
            {
              revalidateIfStale: !1,
              revalidateOnFocus: !1,
              shouldRetryOnError: !1,
            }
          );
          return {
            isLoading: !!(r || (void 0 === o && !i)),
            data: o,
            error: i,
          };
        },
        ti = () => {
          let [t, e] = (0, o.useState)(!1);
          return (0, o.useEffect)(() => e(!0), []), t;
        };
    },
    10060: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          QuotedTweetContainer: function () {
            return i;
          },
        });
      var r = n(57437),
        o = n(30236);
      let i = (t) => {
        let { tweet: e, children: n } = t;
        return (0, r.jsx)("div", {
          className: o.root,
          onClick: (t) => {
            t.preventDefault(), window.open(e.url, "_blank");
          },
          children: (0, r.jsx)("article", {
            className: o.article,
            children: n,
          }),
        });
      };
    },
    26611: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          TweetActionsCopy: function () {
            return a;
          },
        });
      var r = n(57437),
        o = n(2265),
        i = n(99030);
      let a = (t) => {
        let { tweet: e } = t,
          [n, a] = (0, o.useState)(!1),
          [u, c] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            if (n) {
              let t = setTimeout(() => {
                a(!1), c(!0);
              }, 6e3);
              return () => clearTimeout(t);
            }
          }, [n]),
          (0, r.jsxs)("button", {
            type: "button",
            className: i.copy,
            "aria-label": "Copy link",
            onClick: () => {
              navigator.clipboard.writeText(e.url), a(!0);
            },
            children: [
              (0, r.jsx)("div", {
                className: i.copyIconWrapper,
                children: n
                  ? (0, r.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      className: i.copyIcon,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("g", {
                        children: (0, r.jsx)("path", {
                          d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z",
                        }),
                      }),
                    })
                  : (0, r.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      className: i.copyIcon,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("g", {
                        children: (0, r.jsx)("path", {
                          d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z",
                        }),
                      }),
                    }),
              }),
              (0, r.jsx)("span", {
                className: i.copyText,
                children: n
                  ? "Copied!"
                  : u
                  ? "Copy link to Tweet"
                  : "Copy link",
              }),
            ],
          })
        );
      };
    },
    81293: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          TweetMediaVideo: function () {
            return f;
          },
        });
      var r = n(57437),
        o = n(2265),
        i = n(44839);
      let a = (t, e) => {
          let n = new URL(t.media_url_https),
            r = n.pathname.split(".").pop();
          return r
            ? ((n.pathname = n.pathname.replace(`.${r}`, "")),
              n.searchParams.set("format", r),
              n.searchParams.set("name", e),
              n.toString())
            : t.media_url_https;
        },
        u = (t) => {
          let { variants: e } = t.video_info;
          return e
            .filter((t) => "video/mp4" === t.content_type)
            .sort((t, e) => {
              var n, r;
              return (
                (null != (n = e.bitrate) ? n : 0) -
                (null != (r = t.bitrate) ? r : 0)
              );
            });
        },
        c = (t) => {
          let e = u(t);
          return e.length > 1 ? e[1] : e[0];
        };
      var l = n(60713),
        s = n(2290);
      let f = (t) => {
        let { tweet: e, media: n } = t,
          [u, f] = (0, o.useState)(!0),
          [p, d] = (0, o.useState)(!1),
          [h, y] = (0, o.useState)(!1),
          v = c(n),
          m = 0;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("video", {
              className: l.image,
              poster: a(n, "small"),
              controls: !u,
              muted: !0,
              preload: "none",
              tabIndex: u ? -1 : 0,
              onPlay: () => {
                m && window.clearTimeout(m), p || d(!0), h && y(!1);
              },
              onPause: () => {
                m && window.clearTimeout(m),
                  (m = window.setTimeout(() => {
                    p && d(!1), (m = 0);
                  }, 100));
              },
              onEnded: () => {
                y(!0);
              },
              children: (0, r.jsx)("source", {
                src: v.url,
                type: v.content_type,
              }),
            }),
            u &&
              (0, r.jsx)("button", {
                type: "button",
                className: s.videoButton,
                "aria-label": "View video on X",
                onClick: (t) => {
                  let e = t.currentTarget.previousSibling;
                  t.preventDefault(), f(!1), d(!0), e.play(), e.focus();
                },
                children: (0, r.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  className: s.videoButtonIcon,
                  "aria-hidden": "true",
                  children: (0, r.jsx)("g", {
                    children: (0, r.jsx)("path", { d: "M21 12L4 2v20l17-10z" }),
                  }),
                }),
              }),
            !p &&
              !h &&
              (0, r.jsx)("div", {
                className: s.watchOnTwitter,
                children: (0, r.jsx)("a", {
                  href: e.url,
                  className: s.anchor,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: u ? "Watch on X" : "Continue watching on X",
                }),
              }),
            h &&
              (0, r.jsx)("a", {
                href: e.url,
                className: (0, i.Z)(s.anchor, s.viewReplies),
                target: "_blank",
                rel: "noopener noreferrer",
                children: "View replies",
              }),
          ],
        });
      };
    },
    59811: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (!t) throw Error("Invariant failed");
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
  },
]);
