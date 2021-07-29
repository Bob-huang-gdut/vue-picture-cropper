/**
 * name: vue-picture-cropper
 * version: v0.1.11
 * author: chengpeiquan
 */
import {
  defineComponent as t,
  openBlock as e,
  createBlock as i,
  createVNode as n,
} from 'vue'
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function a(
  t,
  e,
  i,
  n
) {
  return new (i || (i = Promise))(function (a, o) {
    function r(t) {
      try {
        s(n.next(t))
      } catch (t) {
        o(t)
      }
    }
    function h(t) {
      try {
        s(n.throw(t))
      } catch (t) {
        o(t)
      }
    }
    function s(t) {
      var e
      t.done
        ? a(t.value)
        : ((e = t.value),
          e instanceof i
            ? e
            : new i(function (t) {
                t(e)
              })).then(r, h)
    }
    s((n = n.apply(t, e || [])).next())
  })
}
function o(t, e) {
  var i,
    n,
    a,
    o,
    r = {
      label: 0,
      sent: function () {
        if (1 & a[0]) throw a[1]
        return a[1]
      },
      trys: [],
      ops: [],
    }
  return (
    (o = { next: h(0), throw: h(1), return: h(2) }),
    'function' == typeof Symbol &&
      (o[Symbol.iterator] = function () {
        return this
      }),
    o
  )
  function h(o) {
    return function (h) {
      return (function (o) {
        if (i) throw new TypeError('Generator is already executing.')
        for (; r; )
          try {
            if (
              ((i = 1),
              n &&
                (a =
                  2 & o[0]
                    ? n.return
                    : o[0]
                    ? n.throw || ((a = n.return) && a.call(n), 0)
                    : n.next) &&
                !(a = a.call(n, o[1])).done)
            )
              return a
            switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
              case 0:
              case 1:
                a = o
                break
              case 4:
                return r.label++, { value: o[1], done: !1 }
              case 5:
                r.label++, (n = o[1]), (o = [0])
                continue
              case 7:
                ;(o = r.ops.pop()), r.trys.pop()
                continue
              default:
                if (
                  !((a = r.trys),
                  (a = a.length > 0 && a[a.length - 1]) ||
                    (6 !== o[0] && 2 !== o[0]))
                ) {
                  r = 0
                  continue
                }
                if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                  r.label = o[1]
                  break
                }
                if (6 === o[0] && r.label < a[1]) {
                  ;(r.label = a[1]), (a = o)
                  break
                }
                if (a && r.label < a[2]) {
                  ;(r.label = a[2]), r.ops.push(o)
                  break
                }
                a[2] && r.ops.pop(), r.trys.pop()
                continue
            }
            o = e.call(t, r)
          } catch (t) {
            ;(o = [6, t]), (n = 0)
          } finally {
            i = a = 0
          }
        if (5 & o[0]) throw o[1]
        return { value: o[0] ? o[1] : void 0, done: !0 }
      })([o, h])
    }
  }
}
'undefined' != typeof globalThis
  ? globalThis
  : 'undefined' != typeof window
  ? window
  : 'undefined' != typeof global
  ? global
  : 'undefined' != typeof self && self
var r,
  h,
  s =
    ((function (t, e) {
      /*!
       * Cropper.js v1.5.12
       * https://fengyuanchen.github.io/cropperjs
       *
       * Copyright 2015-present Chen Fengyuan
       * Released under the MIT license
       *
       * Date: 2021-06-12T08:00:17.411Z
       */
      t.exports = (function () {
        function t(t, e) {
          var i = Object.keys(t)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t)
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              })),
              i.push.apply(i, n)
          }
          return i
        }
        function e(e) {
          for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {}
            i % 2
              ? t(Object(n), !0).forEach(function (t) {
                  r(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  )
                })
          }
          return e
        }
        function i(t) {
          return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                })(t)
        }
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        function a(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n)
          }
        }
        function o(t, e, i) {
          return e && a(t.prototype, e), i && a(t, i), t
        }
        function r(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          )
        }
        function h(t) {
          return s(t) || c(t) || p(t) || d()
        }
        function s(t) {
          if (Array.isArray(t)) return l(t)
        }
        function c(t) {
          if (
            ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t)
        }
        function p(t, e) {
          if (t) {
            if ('string' == typeof t) return l(t, e)
            var i = Object.prototype.toString.call(t).slice(8, -1)
            return (
              'Object' === i && t.constructor && (i = t.constructor.name),
              'Map' === i || 'Set' === i
                ? Array.from(t)
                : 'Arguments' === i ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                ? l(t, e)
                : void 0
            )
          }
        }
        function l(t, e) {
          ;(null == e || e > t.length) && (e = t.length)
          for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
          return n
        }
        function d() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var u = 'undefined' != typeof window && void 0 !== window.document,
          m = u ? window : {},
          g =
            !(!u || !m.document.documentElement) &&
            'ontouchstart' in m.document.documentElement,
          f = !!u && 'PointerEvent' in m,
          v = 'cropper',
          w = 'all',
          b = 'crop',
          x = 'move',
          y = 'zoom',
          M = 'e',
          C = 'w',
          D = 's',
          k = 'n',
          A = 'ne',
          B = 'nw',
          T = 'se',
          O = 'sw',
          E = ''.concat(v, '-crop'),
          z = ''.concat(v, '-disabled'),
          W = ''.concat(v, '-hidden'),
          H = ''.concat(v, '-hide'),
          N = ''.concat(v, '-invisible'),
          L = ''.concat(v, '-modal'),
          R = ''.concat(v, '-move'),
          S = ''.concat(v, 'Action'),
          X = ''.concat(v, 'Preview'),
          Y = 'crop',
          j = 'move',
          I = 'none',
          U = 'crop',
          P = 'cropend',
          q = 'cropmove',
          _ = 'cropstart',
          Q = 'dblclick',
          $ = g ? 'touchstart' : 'mousedown',
          Z = g ? 'touchmove' : 'mousemove',
          F = g ? 'touchend touchcancel' : 'mouseup',
          G = f ? 'pointerdown' : $,
          V = f ? 'pointermove' : Z,
          K = f ? 'pointerup pointercancel' : F,
          J = 'ready',
          tt = 'resize',
          et = 'wheel',
          it = 'zoom',
          nt = 'image/jpeg',
          at = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
          ot = /^data:/,
          rt = /^data:image\/jpeg;base64,/,
          ht = /^img|canvas$/i,
          st = 200,
          ct = 100,
          pt = {
            viewMode: 0,
            dragMode: Y,
            initialAspectRatio: NaN,
            aspectRatio: NaN,
            data: null,
            preview: '',
            responsive: !0,
            restore: !0,
            checkCrossOrigin: !0,
            checkOrientation: !0,
            modal: !0,
            guides: !0,
            center: !0,
            highlight: !0,
            background: !0,
            autoCrop: !0,
            autoCropArea: 0.8,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            wheelZoomRatio: 0.1,
            cropBoxMovable: !0,
            cropBoxResizable: !0,
            toggleDragModeOnDblclick: !0,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: st,
            minContainerHeight: ct,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null,
          },
          lt =
            '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
          dt = Number.isNaN || m.isNaN
        function ut(t) {
          return 'number' == typeof t && !dt(t)
        }
        var mt = function (t) {
          return t > 0 && t < 1 / 0
        }
        function gt(t) {
          return void 0 === t
        }
        function ft(t) {
          return 'object' === i(t) && null !== t
        }
        var vt = Object.prototype.hasOwnProperty
        function wt(t) {
          if (!ft(t)) return !1
          try {
            var e = t.constructor,
              i = e.prototype
            return e && i && vt.call(i, 'isPrototypeOf')
          } catch (t) {
            return !1
          }
        }
        function bt(t) {
          return 'function' == typeof t
        }
        var xt = Array.prototype.slice
        function yt(t) {
          return Array.from ? Array.from(t) : xt.call(t)
        }
        function Mt(t, e) {
          return (
            t &&
              bt(e) &&
              (Array.isArray(t) || ut(t.length)
                ? yt(t).forEach(function (i, n) {
                    e.call(t, i, n, t)
                  })
                : ft(t) &&
                  Object.keys(t).forEach(function (i) {
                    e.call(t, t[i], i, t)
                  })),
            t
          )
        }
        var Ct =
            Object.assign ||
            function (t) {
              for (
                var e = arguments.length,
                  i = new Array(e > 1 ? e - 1 : 0),
                  n = 1;
                n < e;
                n++
              )
                i[n - 1] = arguments[n]
              return (
                ft(t) &&
                  i.length > 0 &&
                  i.forEach(function (e) {
                    ft(e) &&
                      Object.keys(e).forEach(function (i) {
                        t[i] = e[i]
                      })
                  }),
                t
              )
            },
          Dt = /\.\d*(?:0|9){12}\d*$/
        function kt(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e11
          return Dt.test(t) ? Math.round(t * e) / e : t
        }
        var At = /^width|height|left|top|marginLeft|marginTop$/
        function Bt(t, e) {
          var i = t.style
          Mt(e, function (t, e) {
            At.test(e) && ut(t) && (t = ''.concat(t, 'px')), (i[e] = t)
          })
        }
        function Tt(t, e) {
          return t.classList
            ? t.classList.contains(e)
            : t.className.indexOf(e) > -1
        }
        function Ot(t, e) {
          if (e)
            if (ut(t.length))
              Mt(t, function (t) {
                Ot(t, e)
              })
            else if (t.classList) t.classList.add(e)
            else {
              var i = t.className.trim()
              i
                ? i.indexOf(e) < 0 &&
                  (t.className = ''.concat(i, ' ').concat(e))
                : (t.className = e)
            }
        }
        function Et(t, e) {
          e &&
            (ut(t.length)
              ? Mt(t, function (t) {
                  Et(t, e)
                })
              : t.classList
              ? t.classList.remove(e)
              : t.className.indexOf(e) >= 0 &&
                (t.className = t.className.replace(e, '')))
        }
        function zt(t, e, i) {
          e &&
            (ut(t.length)
              ? Mt(t, function (t) {
                  zt(t, e, i)
                })
              : i
              ? Ot(t, e)
              : Et(t, e))
        }
        var Wt = /([a-z\d])([A-Z])/g
        function Ht(t) {
          return t.replace(Wt, '$1-$2').toLowerCase()
        }
        function Nt(t, e) {
          return ft(t[e])
            ? t[e]
            : t.dataset
            ? t.dataset[e]
            : t.getAttribute('data-'.concat(Ht(e)))
        }
        function Lt(t, e, i) {
          ft(i)
            ? (t[e] = i)
            : t.dataset
            ? (t.dataset[e] = i)
            : t.setAttribute('data-'.concat(Ht(e)), i)
        }
        function Rt(t, e) {
          if (ft(t[e]))
            try {
              delete t[e]
            } catch (i) {
              t[e] = void 0
            }
          else if (t.dataset)
            try {
              delete t.dataset[e]
            } catch (i) {
              t.dataset[e] = void 0
            }
          else t.removeAttribute('data-'.concat(Ht(e)))
        }
        var St = /\s\s*/,
          Xt = (function () {
            var t = !1
            if (u) {
              var e = !1,
                i = function () {},
                n = Object.defineProperty({}, 'once', {
                  get: function () {
                    return (t = !0), e
                  },
                  set: function (t) {
                    e = t
                  },
                })
              m.addEventListener('test', i, n),
                m.removeEventListener('test', i, n)
            }
            return t
          })()
        function Yt(t, e, i) {
          var n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = i
          e.trim()
            .split(St)
            .forEach(function (e) {
              if (!Xt) {
                var o = t.listeners
                o &&
                  o[e] &&
                  o[e][i] &&
                  ((a = o[e][i]),
                  delete o[e][i],
                  0 === Object.keys(o[e]).length && delete o[e],
                  0 === Object.keys(o).length && delete t.listeners)
              }
              t.removeEventListener(e, a, n)
            })
        }
        function jt(t, e, i) {
          var n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = i
          e.trim()
            .split(St)
            .forEach(function (e) {
              if (n.once && !Xt) {
                var o = t.listeners,
                  r = void 0 === o ? {} : o
                ;(a = function () {
                  delete r[e][i], t.removeEventListener(e, a, n)
                  for (
                    var o = arguments.length, h = new Array(o), s = 0;
                    s < o;
                    s++
                  )
                    h[s] = arguments[s]
                  i.apply(t, h)
                }),
                  r[e] || (r[e] = {}),
                  r[e][i] && t.removeEventListener(e, r[e][i], n),
                  (r[e][i] = a),
                  (t.listeners = r)
              }
              t.addEventListener(e, a, n)
            })
        }
        function It(t, e, i) {
          var n
          return (
            bt(Event) && bt(CustomEvent)
              ? (n = new CustomEvent(e, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                }))
              : (n = document.createEvent('CustomEvent')).initCustomEvent(
                  e,
                  !0,
                  !0,
                  i
                ),
            t.dispatchEvent(n)
          )
        }
        function Ut(t) {
          var e = t.getBoundingClientRect()
          return {
            left:
              e.left +
              (window.pageXOffset - document.documentElement.clientLeft),
            top:
              e.top + (window.pageYOffset - document.documentElement.clientTop),
          }
        }
        var Pt = m.location,
          qt = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i
        function _t(t) {
          var e = t.match(qt)
          return (
            null !== e &&
            (e[1] !== Pt.protocol || e[2] !== Pt.hostname || e[3] !== Pt.port)
          )
        }
        function Qt(t) {
          var e = 'timestamp='.concat(new Date().getTime())
          return t + (-1 === t.indexOf('?') ? '?' : '&') + e
        }
        function $t(t) {
          var e = t.rotate,
            i = t.scaleX,
            n = t.scaleY,
            a = t.translateX,
            o = t.translateY,
            r = []
          ut(a) && 0 !== a && r.push('translateX('.concat(a, 'px)')),
            ut(o) && 0 !== o && r.push('translateY('.concat(o, 'px)')),
            ut(e) && 0 !== e && r.push('rotate('.concat(e, 'deg)')),
            ut(i) && 1 !== i && r.push('scaleX('.concat(i, ')')),
            ut(n) && 1 !== n && r.push('scaleY('.concat(n, ')'))
          var h = r.length ? r.join(' ') : 'none'
          return { WebkitTransform: h, msTransform: h, transform: h }
        }
        function Zt(t) {
          var i = e({}, t),
            n = 0
          return (
            Mt(t, function (t, e) {
              delete i[e],
                Mt(i, function (e) {
                  var i = Math.abs(t.startX - e.startX),
                    a = Math.abs(t.startY - e.startY),
                    o = Math.abs(t.endX - e.endX),
                    r = Math.abs(t.endY - e.endY),
                    h = Math.sqrt(i * i + a * a),
                    s = (Math.sqrt(o * o + r * r) - h) / h
                  Math.abs(s) > Math.abs(n) && (n = s)
                })
            }),
            n
          )
        }
        function Ft(t, i) {
          var n = t.pageX,
            a = t.pageY,
            o = { endX: n, endY: a }
          return i ? o : e({ startX: n, startY: a }, o)
        }
        function Gt(t) {
          var e = 0,
            i = 0,
            n = 0
          return (
            Mt(t, function (t) {
              var a = t.startX,
                o = t.startY
              ;(e += a), (i += o), (n += 1)
            }),
            { pageX: (e /= n), pageY: (i /= n) }
          )
        }
        function Vt(t) {
          var e = t.aspectRatio,
            i = t.height,
            n = t.width,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'contain',
            o = mt(n),
            r = mt(i)
          if (o && r) {
            var h = i * e
            ;('contain' === a && h > n) || ('cover' === a && h < n)
              ? (i = n / e)
              : (n = i * e)
          } else o ? (i = n / e) : r && (n = i * e)
          return { width: n, height: i }
        }
        function Kt(t) {
          var e = t.width,
            i = t.height,
            n = t.degree
          if (90 == (n = Math.abs(n) % 180)) return { width: i, height: e }
          var a = ((n % 90) * Math.PI) / 180,
            o = Math.sin(a),
            r = Math.cos(a),
            h = e * r + i * o,
            s = e * o + i * r
          return n > 90 ? { width: s, height: h } : { width: h, height: s }
        }
        function Jt(t, e, i, n) {
          var a = e.aspectRatio,
            o = e.naturalWidth,
            r = e.naturalHeight,
            s = e.rotate,
            c = void 0 === s ? 0 : s,
            p = e.scaleX,
            l = void 0 === p ? 1 : p,
            d = e.scaleY,
            u = void 0 === d ? 1 : d,
            m = i.aspectRatio,
            g = i.naturalWidth,
            f = i.naturalHeight,
            v = n.fillColor,
            w = void 0 === v ? 'transparent' : v,
            b = n.imageSmoothingEnabled,
            x = void 0 === b || b,
            y = n.imageSmoothingQuality,
            M = void 0 === y ? 'low' : y,
            C = n.maxWidth,
            D = void 0 === C ? 1 / 0 : C,
            k = n.maxHeight,
            A = void 0 === k ? 1 / 0 : k,
            B = n.minWidth,
            T = void 0 === B ? 0 : B,
            O = n.minHeight,
            E = void 0 === O ? 0 : O,
            z = document.createElement('canvas'),
            W = z.getContext('2d'),
            H = Vt({ aspectRatio: m, width: D, height: A }),
            N = Vt({ aspectRatio: m, width: T, height: E }, 'cover'),
            L = Math.min(H.width, Math.max(N.width, g)),
            R = Math.min(H.height, Math.max(N.height, f)),
            S = Vt({ aspectRatio: a, width: D, height: A }),
            X = Vt({ aspectRatio: a, width: T, height: E }, 'cover'),
            Y = Math.min(S.width, Math.max(X.width, o)),
            j = Math.min(S.height, Math.max(X.height, r)),
            I = [-Y / 2, -j / 2, Y, j]
          return (
            (z.width = kt(L)),
            (z.height = kt(R)),
            (W.fillStyle = w),
            W.fillRect(0, 0, L, R),
            W.save(),
            W.translate(L / 2, R / 2),
            W.rotate((c * Math.PI) / 180),
            W.scale(l, u),
            (W.imageSmoothingEnabled = x),
            (W.imageSmoothingQuality = M),
            W.drawImage.apply(
              W,
              [t].concat(
                h(
                  I.map(function (t) {
                    return Math.floor(kt(t))
                  })
                )
              )
            ),
            W.restore(),
            z
          )
        }
        var te = String.fromCharCode
        function ee(t, e, i) {
          var n = ''
          i += e
          for (var a = e; a < i; a += 1) n += te(t.getUint8(a))
          return n
        }
        var ie = /^data:.*,/
        function ne(t) {
          var e = t.replace(ie, ''),
            i = atob(e),
            n = new ArrayBuffer(i.length),
            a = new Uint8Array(n)
          return (
            Mt(a, function (t, e) {
              a[e] = i.charCodeAt(e)
            }),
            n
          )
        }
        function ae(t, e) {
          for (var i = [], n = 8192, a = new Uint8Array(t); a.length > 0; )
            i.push(te.apply(null, yt(a.subarray(0, n)))), (a = a.subarray(n))
          return 'data:'.concat(e, ';base64,').concat(btoa(i.join('')))
        }
        function oe(t) {
          var e,
            i = new DataView(t)
          try {
            var n, a, o
            if (255 === i.getUint8(0) && 216 === i.getUint8(1))
              for (var r = i.byteLength, h = 2; h + 1 < r; ) {
                if (255 === i.getUint8(h) && 225 === i.getUint8(h + 1)) {
                  a = h
                  break
                }
                h += 1
              }
            if (a) {
              var s = a + 10
              if ('Exif' === ee(i, a + 4, 4)) {
                var c = i.getUint16(s)
                if (
                  ((n = 18761 === c) || 19789 === c) &&
                  42 === i.getUint16(s + 2, n)
                ) {
                  var p = i.getUint32(s + 4, n)
                  p >= 8 && (o = s + p)
                }
              }
            }
            if (o) {
              var l,
                d,
                u = i.getUint16(o, n)
              for (d = 0; d < u; d += 1)
                if (((l = o + 12 * d + 2), 274 === i.getUint16(l, n))) {
                  ;(l += 8), (e = i.getUint16(l, n)), i.setUint16(l, 1, n)
                  break
                }
            }
          } catch (t) {
            e = 1
          }
          return e
        }
        function re(t) {
          var e = 0,
            i = 1,
            n = 1
          switch (t) {
            case 2:
              i = -1
              break
            case 3:
              e = -180
              break
            case 4:
              n = -1
              break
            case 5:
              ;(e = 90), (n = -1)
              break
            case 6:
              e = 90
              break
            case 7:
              ;(e = 90), (i = -1)
              break
            case 8:
              e = -90
          }
          return { rotate: e, scaleX: i, scaleY: n }
        }
        var he = {
            render: function () {
              this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox()
            },
            initContainer: function () {
              var t = this.element,
                e = this.options,
                i = this.container,
                n = this.cropper,
                a = Number(e.minContainerWidth),
                o = Number(e.minContainerHeight)
              Ot(n, W), Et(t, W)
              var r = {
                width: Math.max(i.offsetWidth, a >= 0 ? a : st),
                height: Math.max(i.offsetHeight, o >= 0 ? o : ct),
              }
              ;(this.containerData = r),
                Bt(n, { width: r.width, height: r.height }),
                Ot(t, W),
                Et(n, W)
            },
            initCanvas: function () {
              var t = this.containerData,
                e = this.imageData,
                i = this.options.viewMode,
                n = Math.abs(e.rotate) % 180 == 90,
                a = n ? e.naturalHeight : e.naturalWidth,
                o = n ? e.naturalWidth : e.naturalHeight,
                r = a / o,
                h = t.width,
                s = t.height
              t.height * r > t.width
                ? 3 === i
                  ? (h = t.height * r)
                  : (s = t.width / r)
                : 3 === i
                ? (s = t.width / r)
                : (h = t.height * r)
              var c = {
                aspectRatio: r,
                naturalWidth: a,
                naturalHeight: o,
                width: h,
                height: s,
              }
              ;(this.canvasData = c),
                (this.limited = 1 === i || 2 === i),
                this.limitCanvas(!0, !0),
                (c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth)),
                (c.height = Math.min(
                  Math.max(c.height, c.minHeight),
                  c.maxHeight
                )),
                (c.left = (t.width - c.width) / 2),
                (c.top = (t.height - c.height) / 2),
                (c.oldLeft = c.left),
                (c.oldTop = c.top),
                (this.initialCanvasData = Ct({}, c))
            },
            limitCanvas: function (t, e) {
              var i = this.options,
                n = this.containerData,
                a = this.canvasData,
                o = this.cropBoxData,
                r = i.viewMode,
                h = a.aspectRatio,
                s = this.cropped && o
              if (t) {
                var c = Number(i.minCanvasWidth) || 0,
                  p = Number(i.minCanvasHeight) || 0
                r > 1
                  ? ((c = Math.max(c, n.width)),
                    (p = Math.max(p, n.height)),
                    3 === r && (p * h > c ? (c = p * h) : (p = c / h)))
                  : r > 0 &&
                    (c
                      ? (c = Math.max(c, s ? o.width : 0))
                      : p
                      ? (p = Math.max(p, s ? o.height : 0))
                      : s &&
                        ((c = o.width),
                        (p = o.height) * h > c ? (c = p * h) : (p = c / h)))
                var l = Vt({ aspectRatio: h, width: c, height: p })
                ;(c = l.width),
                  (p = l.height),
                  (a.minWidth = c),
                  (a.minHeight = p),
                  (a.maxWidth = 1 / 0),
                  (a.maxHeight = 1 / 0)
              }
              if (e)
                if (r > (s ? 0 : 1)) {
                  var d = n.width - a.width,
                    u = n.height - a.height
                  ;(a.minLeft = Math.min(0, d)),
                    (a.minTop = Math.min(0, u)),
                    (a.maxLeft = Math.max(0, d)),
                    (a.maxTop = Math.max(0, u)),
                    s &&
                      this.limited &&
                      ((a.minLeft = Math.min(
                        o.left,
                        o.left + (o.width - a.width)
                      )),
                      (a.minTop = Math.min(
                        o.top,
                        o.top + (o.height - a.height)
                      )),
                      (a.maxLeft = o.left),
                      (a.maxTop = o.top),
                      2 === r &&
                        (a.width >= n.width &&
                          ((a.minLeft = Math.min(0, d)),
                          (a.maxLeft = Math.max(0, d))),
                        a.height >= n.height &&
                          ((a.minTop = Math.min(0, u)),
                          (a.maxTop = Math.max(0, u)))))
                } else
                  (a.minLeft = -a.width),
                    (a.minTop = -a.height),
                    (a.maxLeft = n.width),
                    (a.maxTop = n.height)
            },
            renderCanvas: function (t, e) {
              var i = this.canvasData,
                n = this.imageData
              if (e) {
                var a = Kt({
                    width: n.naturalWidth * Math.abs(n.scaleX || 1),
                    height: n.naturalHeight * Math.abs(n.scaleY || 1),
                    degree: n.rotate || 0,
                  }),
                  o = a.width,
                  r = a.height,
                  h = i.width * (o / i.naturalWidth),
                  s = i.height * (r / i.naturalHeight)
                ;(i.left -= (h - i.width) / 2),
                  (i.top -= (s - i.height) / 2),
                  (i.width = h),
                  (i.height = s),
                  (i.aspectRatio = o / r),
                  (i.naturalWidth = o),
                  (i.naturalHeight = r),
                  this.limitCanvas(!0, !1)
              }
              ;(i.width > i.maxWidth || i.width < i.minWidth) &&
                (i.left = i.oldLeft),
                (i.height > i.maxHeight || i.height < i.minHeight) &&
                  (i.top = i.oldTop),
                (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
                (i.height = Math.min(
                  Math.max(i.height, i.minHeight),
                  i.maxHeight
                )),
                this.limitCanvas(!1, !0),
                (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
                (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
                (i.oldLeft = i.left),
                (i.oldTop = i.top),
                Bt(
                  this.canvas,
                  Ct(
                    { width: i.width, height: i.height },
                    $t({ translateX: i.left, translateY: i.top })
                  )
                ),
                this.renderImage(t),
                this.cropped && this.limited && this.limitCropBox(!0, !0)
            },
            renderImage: function (t) {
              var e = this.canvasData,
                i = this.imageData,
                n = i.naturalWidth * (e.width / e.naturalWidth),
                a = i.naturalHeight * (e.height / e.naturalHeight)
              Ct(i, {
                width: n,
                height: a,
                left: (e.width - n) / 2,
                top: (e.height - a) / 2,
              }),
                Bt(
                  this.image,
                  Ct(
                    { width: i.width, height: i.height },
                    $t(Ct({ translateX: i.left, translateY: i.top }, i))
                  )
                ),
                t && this.output()
            },
            initCropBox: function () {
              var t = this.options,
                e = this.canvasData,
                i = t.aspectRatio || t.initialAspectRatio,
                n = Number(t.autoCropArea) || 0.8,
                a = { width: e.width, height: e.height }
              i &&
                (e.height * i > e.width
                  ? (a.height = a.width / i)
                  : (a.width = a.height * i)),
                (this.cropBoxData = a),
                this.limitCropBox(!0, !0),
                (a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth)),
                (a.height = Math.min(
                  Math.max(a.height, a.minHeight),
                  a.maxHeight
                )),
                (a.width = Math.max(a.minWidth, a.width * n)),
                (a.height = Math.max(a.minHeight, a.height * n)),
                (a.left = e.left + (e.width - a.width) / 2),
                (a.top = e.top + (e.height - a.height) / 2),
                (a.oldLeft = a.left),
                (a.oldTop = a.top),
                (this.initialCropBoxData = Ct({}, a))
            },
            limitCropBox: function (t, e) {
              var i = this.options,
                n = this.containerData,
                a = this.canvasData,
                o = this.cropBoxData,
                r = this.limited,
                h = i.aspectRatio
              if (t) {
                var s = Number(i.minCropBoxWidth) || 0,
                  c = Number(i.minCropBoxHeight) || 0,
                  p = r
                    ? Math.min(
                        n.width,
                        a.width,
                        a.width + a.left,
                        n.width - a.left
                      )
                    : n.width,
                  l = r
                    ? Math.min(
                        n.height,
                        a.height,
                        a.height + a.top,
                        n.height - a.top
                      )
                    : n.height
                ;(s = Math.min(s, n.width)),
                  (c = Math.min(c, n.height)),
                  h &&
                    (s && c
                      ? c * h > s
                        ? (c = s / h)
                        : (s = c * h)
                      : s
                      ? (c = s / h)
                      : c && (s = c * h),
                    l * h > p ? (l = p / h) : (p = l * h)),
                  (o.minWidth = Math.min(s, p)),
                  (o.minHeight = Math.min(c, l)),
                  (o.maxWidth = p),
                  (o.maxHeight = l)
              }
              e &&
                (r
                  ? ((o.minLeft = Math.max(0, a.left)),
                    (o.minTop = Math.max(0, a.top)),
                    (o.maxLeft = Math.min(n.width, a.left + a.width) - o.width),
                    (o.maxTop =
                      Math.min(n.height, a.top + a.height) - o.height))
                  : ((o.minLeft = 0),
                    (o.minTop = 0),
                    (o.maxLeft = n.width - o.width),
                    (o.maxTop = n.height - o.height)))
            },
            renderCropBox: function () {
              var t = this.options,
                e = this.containerData,
                i = this.cropBoxData
              ;(i.width > i.maxWidth || i.width < i.minWidth) &&
                (i.left = i.oldLeft),
                (i.height > i.maxHeight || i.height < i.minHeight) &&
                  (i.top = i.oldTop),
                (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
                (i.height = Math.min(
                  Math.max(i.height, i.minHeight),
                  i.maxHeight
                )),
                this.limitCropBox(!1, !0),
                (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
                (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
                (i.oldLeft = i.left),
                (i.oldTop = i.top),
                t.movable &&
                  t.cropBoxMovable &&
                  Lt(
                    this.face,
                    S,
                    i.width >= e.width && i.height >= e.height ? x : w
                  ),
                Bt(
                  this.cropBox,
                  Ct(
                    { width: i.width, height: i.height },
                    $t({ translateX: i.left, translateY: i.top })
                  )
                ),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output()
            },
            output: function () {
              this.preview(), It(this.element, U, this.getData())
            },
          },
          se = {
            initPreview: function () {
              var t = this.element,
                e = this.crossOrigin,
                i = this.options.preview,
                n = e ? this.crossOriginUrl : this.url,
                a = t.alt || 'The image to preview',
                o = document.createElement('img')
              if (
                (e && (o.crossOrigin = e),
                (o.src = n),
                (o.alt = a),
                this.viewBox.appendChild(o),
                (this.viewBoxImage = o),
                i)
              ) {
                var r = i
                'string' == typeof i
                  ? (r = t.ownerDocument.querySelectorAll(i))
                  : i.querySelector && (r = [i]),
                  (this.previews = r),
                  Mt(r, function (t) {
                    var i = document.createElement('img')
                    Lt(t, X, {
                      width: t.offsetWidth,
                      height: t.offsetHeight,
                      html: t.innerHTML,
                    }),
                      e && (i.crossOrigin = e),
                      (i.src = n),
                      (i.alt = a),
                      (i.style.cssText =
                        'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                      (t.innerHTML = ''),
                      t.appendChild(i)
                  })
              }
            },
            resetPreview: function () {
              Mt(this.previews, function (t) {
                var e = Nt(t, X)
                Bt(t, { width: e.width, height: e.height }),
                  (t.innerHTML = e.html),
                  Rt(t, X)
              })
            },
            preview: function () {
              var t = this.imageData,
                e = this.canvasData,
                i = this.cropBoxData,
                n = i.width,
                a = i.height,
                o = t.width,
                r = t.height,
                h = i.left - e.left - t.left,
                s = i.top - e.top - t.top
              this.cropped &&
                !this.disabled &&
                (Bt(
                  this.viewBoxImage,
                  Ct(
                    { width: o, height: r },
                    $t(Ct({ translateX: -h, translateY: -s }, t))
                  )
                ),
                Mt(this.previews, function (e) {
                  var i = Nt(e, X),
                    c = i.width,
                    p = i.height,
                    l = c,
                    d = p,
                    u = 1
                  n && (d = a * (u = c / n)),
                    a && d > p && ((l = n * (u = p / a)), (d = p)),
                    Bt(e, { width: l, height: d }),
                    Bt(
                      e.getElementsByTagName('img')[0],
                      Ct(
                        { width: o * u, height: r * u },
                        $t(Ct({ translateX: -h * u, translateY: -s * u }, t))
                      )
                    )
                }))
            },
          },
          ce = {
            bind: function () {
              var t = this.element,
                e = this.options,
                i = this.cropper
              bt(e.cropstart) && jt(t, _, e.cropstart),
                bt(e.cropmove) && jt(t, q, e.cropmove),
                bt(e.cropend) && jt(t, P, e.cropend),
                bt(e.crop) && jt(t, U, e.crop),
                bt(e.zoom) && jt(t, it, e.zoom),
                jt(i, G, (this.onCropStart = this.cropStart.bind(this))),
                e.zoomable &&
                  e.zoomOnWheel &&
                  jt(i, et, (this.onWheel = this.wheel.bind(this)), {
                    passive: !1,
                    capture: !0,
                  }),
                e.toggleDragModeOnDblclick &&
                  jt(i, Q, (this.onDblclick = this.dblclick.bind(this))),
                jt(
                  t.ownerDocument,
                  V,
                  (this.onCropMove = this.cropMove.bind(this))
                ),
                jt(
                  t.ownerDocument,
                  K,
                  (this.onCropEnd = this.cropEnd.bind(this))
                ),
                e.responsive &&
                  jt(window, tt, (this.onResize = this.resize.bind(this)))
            },
            unbind: function () {
              var t = this.element,
                e = this.options,
                i = this.cropper
              bt(e.cropstart) && Yt(t, _, e.cropstart),
                bt(e.cropmove) && Yt(t, q, e.cropmove),
                bt(e.cropend) && Yt(t, P, e.cropend),
                bt(e.crop) && Yt(t, U, e.crop),
                bt(e.zoom) && Yt(t, it, e.zoom),
                Yt(i, G, this.onCropStart),
                e.zoomable &&
                  e.zoomOnWheel &&
                  Yt(i, et, this.onWheel, { passive: !1, capture: !0 }),
                e.toggleDragModeOnDblclick && Yt(i, Q, this.onDblclick),
                Yt(t.ownerDocument, V, this.onCropMove),
                Yt(t.ownerDocument, K, this.onCropEnd),
                e.responsive && Yt(window, tt, this.onResize)
            },
          },
          pe = {
            resize: function () {
              if (!this.disabled) {
                var t,
                  e,
                  i = this.options,
                  n = this.container,
                  a = this.containerData,
                  o = n.offsetWidth / a.width,
                  r = n.offsetHeight / a.height,
                  h = Math.abs(o - 1) > Math.abs(r - 1) ? o : r
                1 !== h &&
                  (i.restore &&
                    ((t = this.getCanvasData()), (e = this.getCropBoxData())),
                  this.render(),
                  i.restore &&
                    (this.setCanvasData(
                      Mt(t, function (e, i) {
                        t[i] = e * h
                      })
                    ),
                    this.setCropBoxData(
                      Mt(e, function (t, i) {
                        e[i] = t * h
                      })
                    )))
              }
            },
            dblclick: function () {
              this.disabled ||
                this.options.dragMode === I ||
                this.setDragMode(Tt(this.dragBox, E) ? j : Y)
            },
            wheel: function (t) {
              var e = this,
                i = Number(this.options.wheelZoomRatio) || 0.1,
                n = 1
              this.disabled ||
                (t.preventDefault(),
                this.wheeling ||
                  ((this.wheeling = !0),
                  setTimeout(function () {
                    e.wheeling = !1
                  }, 50),
                  t.deltaY
                    ? (n = t.deltaY > 0 ? 1 : -1)
                    : t.wheelDelta
                    ? (n = -t.wheelDelta / 120)
                    : t.detail && (n = t.detail > 0 ? 1 : -1),
                  this.zoom(-n * i, t)))
            },
            cropStart: function (t) {
              var e = t.buttons,
                i = t.button
              if (
                !(
                  this.disabled ||
                  (('mousedown' === t.type ||
                    ('pointerdown' === t.type && 'mouse' === t.pointerType)) &&
                    ((ut(e) && 1 !== e) || (ut(i) && 0 !== i) || t.ctrlKey))
                )
              ) {
                var n,
                  a = this.options,
                  o = this.pointers
                t.changedTouches
                  ? Mt(t.changedTouches, function (t) {
                      o[t.identifier] = Ft(t)
                    })
                  : (o[t.pointerId || 0] = Ft(t)),
                  (n =
                    Object.keys(o).length > 1 && a.zoomable && a.zoomOnTouch
                      ? y
                      : Nt(t.target, S)),
                  at.test(n) &&
                    !1 !==
                      It(this.element, _, { originalEvent: t, action: n }) &&
                    (t.preventDefault(),
                    (this.action = n),
                    (this.cropping = !1),
                    n === b && ((this.cropping = !0), Ot(this.dragBox, L)))
              }
            },
            cropMove: function (t) {
              var e = this.action
              if (!this.disabled && e) {
                var i = this.pointers
                t.preventDefault(),
                  !1 !== It(this.element, q, { originalEvent: t, action: e }) &&
                    (t.changedTouches
                      ? Mt(t.changedTouches, function (t) {
                          Ct(i[t.identifier] || {}, Ft(t, !0))
                        })
                      : Ct(i[t.pointerId || 0] || {}, Ft(t, !0)),
                    this.change(t))
              }
            },
            cropEnd: function (t) {
              if (!this.disabled) {
                var e = this.action,
                  i = this.pointers
                t.changedTouches
                  ? Mt(t.changedTouches, function (t) {
                      delete i[t.identifier]
                    })
                  : delete i[t.pointerId || 0],
                  e &&
                    (t.preventDefault(),
                    Object.keys(i).length || (this.action = ''),
                    this.cropping &&
                      ((this.cropping = !1),
                      zt(this.dragBox, L, this.cropped && this.options.modal)),
                    It(this.element, P, { originalEvent: t, action: e }))
              }
            },
          },
          le = {
            change: function (t) {
              var e,
                i = this.options,
                n = this.canvasData,
                a = this.containerData,
                o = this.cropBoxData,
                r = this.pointers,
                h = this.action,
                s = i.aspectRatio,
                c = o.left,
                p = o.top,
                l = o.width,
                d = o.height,
                u = c + l,
                m = p + d,
                g = 0,
                f = 0,
                v = a.width,
                E = a.height,
                z = !0
              !s && t.shiftKey && (s = l && d ? l / d : 1),
                this.limited &&
                  ((g = o.minLeft),
                  (f = o.minTop),
                  (v = g + Math.min(a.width, n.width, n.left + n.width)),
                  (E = f + Math.min(a.height, n.height, n.top + n.height)))
              var H = r[Object.keys(r)[0]],
                N = { x: H.endX - H.startX, y: H.endY - H.startY },
                L = function (t) {
                  switch (t) {
                    case M:
                      u + N.x > v && (N.x = v - u)
                      break
                    case C:
                      c + N.x < g && (N.x = g - c)
                      break
                    case k:
                      p + N.y < f && (N.y = f - p)
                      break
                    case D:
                      m + N.y > E && (N.y = E - m)
                  }
                }
              switch (h) {
                case w:
                  ;(c += N.x), (p += N.y)
                  break
                case M:
                  if (N.x >= 0 && (u >= v || (s && (p <= f || m >= E)))) {
                    z = !1
                    break
                  }
                  L(M),
                    (l += N.x) < 0 && ((h = C), (c -= l = -l)),
                    s && ((d = l / s), (p += (o.height - d) / 2))
                  break
                case k:
                  if (N.y <= 0 && (p <= f || (s && (c <= g || u >= v)))) {
                    z = !1
                    break
                  }
                  L(k),
                    (d -= N.y),
                    (p += N.y),
                    d < 0 && ((h = D), (p -= d = -d)),
                    s && ((l = d * s), (c += (o.width - l) / 2))
                  break
                case C:
                  if (N.x <= 0 && (c <= g || (s && (p <= f || m >= E)))) {
                    z = !1
                    break
                  }
                  L(C),
                    (l -= N.x),
                    (c += N.x),
                    l < 0 && ((h = M), (c -= l = -l)),
                    s && ((d = l / s), (p += (o.height - d) / 2))
                  break
                case D:
                  if (N.y >= 0 && (m >= E || (s && (c <= g || u >= v)))) {
                    z = !1
                    break
                  }
                  L(D),
                    (d += N.y) < 0 && ((h = k), (p -= d = -d)),
                    s && ((l = d * s), (c += (o.width - l) / 2))
                  break
                case A:
                  if (s) {
                    if (N.y <= 0 && (p <= f || u >= v)) {
                      z = !1
                      break
                    }
                    L(k), (d -= N.y), (p += N.y), (l = d * s)
                  } else
                    L(k),
                      L(M),
                      N.x >= 0
                        ? u < v
                          ? (l += N.x)
                          : N.y <= 0 && p <= f && (z = !1)
                        : (l += N.x),
                      N.y <= 0
                        ? p > f && ((d -= N.y), (p += N.y))
                        : ((d -= N.y), (p += N.y))
                  l < 0 && d < 0
                    ? ((h = O), (p -= d = -d), (c -= l = -l))
                    : l < 0
                    ? ((h = B), (c -= l = -l))
                    : d < 0 && ((h = T), (p -= d = -d))
                  break
                case B:
                  if (s) {
                    if (N.y <= 0 && (p <= f || c <= g)) {
                      z = !1
                      break
                    }
                    L(k),
                      (d -= N.y),
                      (p += N.y),
                      (l = d * s),
                      (c += o.width - l)
                  } else
                    L(k),
                      L(C),
                      N.x <= 0
                        ? c > g
                          ? ((l -= N.x), (c += N.x))
                          : N.y <= 0 && p <= f && (z = !1)
                        : ((l -= N.x), (c += N.x)),
                      N.y <= 0
                        ? p > f && ((d -= N.y), (p += N.y))
                        : ((d -= N.y), (p += N.y))
                  l < 0 && d < 0
                    ? ((h = T), (p -= d = -d), (c -= l = -l))
                    : l < 0
                    ? ((h = A), (c -= l = -l))
                    : d < 0 && ((h = O), (p -= d = -d))
                  break
                case O:
                  if (s) {
                    if (N.x <= 0 && (c <= g || m >= E)) {
                      z = !1
                      break
                    }
                    L(C), (l -= N.x), (c += N.x), (d = l / s)
                  } else
                    L(D),
                      L(C),
                      N.x <= 0
                        ? c > g
                          ? ((l -= N.x), (c += N.x))
                          : N.y >= 0 && m >= E && (z = !1)
                        : ((l -= N.x), (c += N.x)),
                      N.y >= 0 ? m < E && (d += N.y) : (d += N.y)
                  l < 0 && d < 0
                    ? ((h = A), (p -= d = -d), (c -= l = -l))
                    : l < 0
                    ? ((h = T), (c -= l = -l))
                    : d < 0 && ((h = B), (p -= d = -d))
                  break
                case T:
                  if (s) {
                    if (N.x >= 0 && (u >= v || m >= E)) {
                      z = !1
                      break
                    }
                    L(M), (d = (l += N.x) / s)
                  } else
                    L(D),
                      L(M),
                      N.x >= 0
                        ? u < v
                          ? (l += N.x)
                          : N.y >= 0 && m >= E && (z = !1)
                        : (l += N.x),
                      N.y >= 0 ? m < E && (d += N.y) : (d += N.y)
                  l < 0 && d < 0
                    ? ((h = B), (p -= d = -d), (c -= l = -l))
                    : l < 0
                    ? ((h = O), (c -= l = -l))
                    : d < 0 && ((h = A), (p -= d = -d))
                  break
                case x:
                  this.move(N.x, N.y), (z = !1)
                  break
                case y:
                  this.zoom(Zt(r), t), (z = !1)
                  break
                case b:
                  if (!N.x || !N.y) {
                    z = !1
                    break
                  }
                  ;(e = Ut(this.cropper)),
                    (c = H.startX - e.left),
                    (p = H.startY - e.top),
                    (l = o.minWidth),
                    (d = o.minHeight),
                    N.x > 0
                      ? (h = N.y > 0 ? T : A)
                      : N.x < 0 && ((c -= l), (h = N.y > 0 ? O : B)),
                    N.y < 0 && (p -= d),
                    this.cropped ||
                      (Et(this.cropBox, W),
                      (this.cropped = !0),
                      this.limited && this.limitCropBox(!0, !0))
              }
              z &&
                ((o.width = l),
                (o.height = d),
                (o.left = c),
                (o.top = p),
                (this.action = h),
                this.renderCropBox()),
                Mt(r, function (t) {
                  ;(t.startX = t.endX), (t.startY = t.endY)
                })
            },
          },
          de = {
            crop: function () {
              return (
                !this.ready ||
                  this.cropped ||
                  this.disabled ||
                  ((this.cropped = !0),
                  this.limitCropBox(!0, !0),
                  this.options.modal && Ot(this.dragBox, L),
                  Et(this.cropBox, W),
                  this.setCropBoxData(this.initialCropBoxData)),
                this
              )
            },
            reset: function () {
              return (
                this.ready &&
                  !this.disabled &&
                  ((this.imageData = Ct({}, this.initialImageData)),
                  (this.canvasData = Ct({}, this.initialCanvasData)),
                  (this.cropBoxData = Ct({}, this.initialCropBoxData)),
                  this.renderCanvas(),
                  this.cropped && this.renderCropBox()),
                this
              )
            },
            clear: function () {
              return (
                this.cropped &&
                  !this.disabled &&
                  (Ct(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                  }),
                  (this.cropped = !1),
                  this.renderCropBox(),
                  this.limitCanvas(!0, !0),
                  this.renderCanvas(),
                  Et(this.dragBox, L),
                  Ot(this.cropBox, W)),
                this
              )
            },
            replace: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              return (
                !this.disabled &&
                  t &&
                  (this.isImg && (this.element.src = t),
                  e
                    ? ((this.url = t),
                      (this.image.src = t),
                      this.ready &&
                        ((this.viewBoxImage.src = t),
                        Mt(this.previews, function (e) {
                          e.getElementsByTagName('img')[0].src = t
                        })))
                    : (this.isImg && (this.replaced = !0),
                      (this.options.data = null),
                      this.uncreate(),
                      this.load(t))),
                this
              )
            },
            enable: function () {
              return (
                this.ready &&
                  this.disabled &&
                  ((this.disabled = !1), Et(this.cropper, z)),
                this
              )
            },
            disable: function () {
              return (
                this.ready &&
                  !this.disabled &&
                  ((this.disabled = !0), Ot(this.cropper, z)),
                this
              )
            },
            destroy: function () {
              var t = this.element
              return t[v]
                ? ((t[v] = void 0),
                  this.isImg && this.replaced && (t.src = this.originalUrl),
                  this.uncreate(),
                  this)
                : this
            },
            move: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                i = this.canvasData,
                n = i.left,
                a = i.top
              return this.moveTo(
                gt(t) ? t : n + Number(t),
                gt(e) ? e : a + Number(e)
              )
            },
            moveTo: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                i = this.canvasData,
                n = !1
              return (
                (t = Number(t)),
                (e = Number(e)),
                this.ready &&
                  !this.disabled &&
                  this.options.movable &&
                  (ut(t) && ((i.left = t), (n = !0)),
                  ut(e) && ((i.top = e), (n = !0)),
                  n && this.renderCanvas(!0)),
                this
              )
            },
            zoom: function (t, e) {
              var i = this.canvasData
              return (
                (t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t),
                this.zoomTo((i.width * t) / i.naturalWidth, null, e)
              )
            },
            zoomTo: function (t, e, i) {
              var n = this.options,
                a = this.canvasData,
                o = a.width,
                r = a.height,
                h = a.naturalWidth,
                s = a.naturalHeight
              if (
                (t = Number(t)) >= 0 &&
                this.ready &&
                !this.disabled &&
                n.zoomable
              ) {
                var c = h * t,
                  p = s * t
                if (
                  !1 ===
                  It(this.element, it, {
                    ratio: t,
                    oldRatio: o / h,
                    originalEvent: i,
                  })
                )
                  return this
                if (i) {
                  var l = this.pointers,
                    d = Ut(this.cropper),
                    u =
                      l && Object.keys(l).length
                        ? Gt(l)
                        : { pageX: i.pageX, pageY: i.pageY }
                  ;(a.left -= (c - o) * ((u.pageX - d.left - a.left) / o)),
                    (a.top -= (p - r) * ((u.pageY - d.top - a.top) / r))
                } else
                  wt(e) && ut(e.x) && ut(e.y)
                    ? ((a.left -= (c - o) * ((e.x - a.left) / o)),
                      (a.top -= (p - r) * ((e.y - a.top) / r)))
                    : ((a.left -= (c - o) / 2), (a.top -= (p - r) / 2))
                ;(a.width = c), (a.height = p), this.renderCanvas(!0)
              }
              return this
            },
            rotate: function (t) {
              return this.rotateTo((this.imageData.rotate || 0) + Number(t))
            },
            rotateTo: function (t) {
              return (
                ut((t = Number(t))) &&
                  this.ready &&
                  !this.disabled &&
                  this.options.rotatable &&
                  ((this.imageData.rotate = t % 360),
                  this.renderCanvas(!0, !0)),
                this
              )
            },
            scaleX: function (t) {
              var e = this.imageData.scaleY
              return this.scale(t, ut(e) ? e : 1)
            },
            scaleY: function (t) {
              var e = this.imageData.scaleX
              return this.scale(ut(e) ? e : 1, t)
            },
            scale: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                i = this.imageData,
                n = !1
              return (
                (t = Number(t)),
                (e = Number(e)),
                this.ready &&
                  !this.disabled &&
                  this.options.scalable &&
                  (ut(t) && ((i.scaleX = t), (n = !0)),
                  ut(e) && ((i.scaleY = e), (n = !0)),
                  n && this.renderCanvas(!0, !0)),
                this
              )
            },
            getData: function () {
              var t,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                i = this.options,
                n = this.imageData,
                a = this.canvasData,
                o = this.cropBoxData
              if (this.ready && this.cropped) {
                t = {
                  x: o.left - a.left,
                  y: o.top - a.top,
                  width: o.width,
                  height: o.height,
                }
                var r = n.width / n.naturalWidth
                if (
                  (Mt(t, function (e, i) {
                    t[i] = e / r
                  }),
                  e)
                ) {
                  var h = Math.round(t.y + t.height),
                    s = Math.round(t.x + t.width)
                  ;(t.x = Math.round(t.x)),
                    (t.y = Math.round(t.y)),
                    (t.width = s - t.x),
                    (t.height = h - t.y)
                }
              } else t = { x: 0, y: 0, width: 0, height: 0 }
              return (
                i.rotatable && (t.rotate = n.rotate || 0),
                i.scalable &&
                  ((t.scaleX = n.scaleX || 1), (t.scaleY = n.scaleY || 1)),
                t
              )
            },
            setData: function (t) {
              var e = this.options,
                i = this.imageData,
                n = this.canvasData,
                a = {}
              if (this.ready && !this.disabled && wt(t)) {
                var o = !1
                e.rotatable &&
                  ut(t.rotate) &&
                  t.rotate !== i.rotate &&
                  ((i.rotate = t.rotate), (o = !0)),
                  e.scalable &&
                    (ut(t.scaleX) &&
                      t.scaleX !== i.scaleX &&
                      ((i.scaleX = t.scaleX), (o = !0)),
                    ut(t.scaleY) &&
                      t.scaleY !== i.scaleY &&
                      ((i.scaleY = t.scaleY), (o = !0))),
                  o && this.renderCanvas(!0, !0)
                var r = i.width / i.naturalWidth
                ut(t.x) && (a.left = t.x * r + n.left),
                  ut(t.y) && (a.top = t.y * r + n.top),
                  ut(t.width) && (a.width = t.width * r),
                  ut(t.height) && (a.height = t.height * r),
                  this.setCropBoxData(a)
              }
              return this
            },
            getContainerData: function () {
              return this.ready ? Ct({}, this.containerData) : {}
            },
            getImageData: function () {
              return this.sized ? Ct({}, this.imageData) : {}
            },
            getCanvasData: function () {
              var t = this.canvasData,
                e = {}
              return (
                this.ready &&
                  Mt(
                    [
                      'left',
                      'top',
                      'width',
                      'height',
                      'naturalWidth',
                      'naturalHeight',
                    ],
                    function (i) {
                      e[i] = t[i]
                    }
                  ),
                e
              )
            },
            setCanvasData: function (t) {
              var e = this.canvasData,
                i = e.aspectRatio
              return (
                this.ready &&
                  !this.disabled &&
                  wt(t) &&
                  (ut(t.left) && (e.left = t.left),
                  ut(t.top) && (e.top = t.top),
                  ut(t.width)
                    ? ((e.width = t.width), (e.height = t.width / i))
                    : ut(t.height) &&
                      ((e.height = t.height), (e.width = t.height * i)),
                  this.renderCanvas(!0)),
                this
              )
            },
            getCropBoxData: function () {
              var t,
                e = this.cropBoxData
              return (
                this.ready &&
                  this.cropped &&
                  (t = {
                    left: e.left,
                    top: e.top,
                    width: e.width,
                    height: e.height,
                  }),
                t || {}
              )
            },
            setCropBoxData: function (t) {
              var e,
                i,
                n = this.cropBoxData,
                a = this.options.aspectRatio
              return (
                this.ready &&
                  this.cropped &&
                  !this.disabled &&
                  wt(t) &&
                  (ut(t.left) && (n.left = t.left),
                  ut(t.top) && (n.top = t.top),
                  ut(t.width) &&
                    t.width !== n.width &&
                    ((e = !0), (n.width = t.width)),
                  ut(t.height) &&
                    t.height !== n.height &&
                    ((i = !0), (n.height = t.height)),
                  a &&
                    (e
                      ? (n.height = n.width / a)
                      : i && (n.width = n.height * a)),
                  this.renderCropBox()),
                this
              )
            },
            getCroppedCanvas: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              if (!this.ready || !window.HTMLCanvasElement) return null
              var e = this.canvasData,
                i = Jt(this.image, this.imageData, e, t)
              if (!this.cropped) return i
              var n = this.getData(),
                a = n.x,
                o = n.y,
                r = n.width,
                s = n.height,
                c = i.width / Math.floor(e.naturalWidth)
              1 !== c && ((a *= c), (o *= c), (r *= c), (s *= c))
              var p = r / s,
                l = Vt({
                  aspectRatio: p,
                  width: t.maxWidth || 1 / 0,
                  height: t.maxHeight || 1 / 0,
                }),
                d = Vt(
                  {
                    aspectRatio: p,
                    width: t.minWidth || 0,
                    height: t.minHeight || 0,
                  },
                  'cover'
                ),
                u = Vt({
                  aspectRatio: p,
                  width: t.width || (1 !== c ? i.width : r),
                  height: t.height || (1 !== c ? i.height : s),
                }),
                m = u.width,
                g = u.height
              ;(m = Math.min(l.width, Math.max(d.width, m))),
                (g = Math.min(l.height, Math.max(d.height, g)))
              var f = document.createElement('canvas'),
                v = f.getContext('2d')
              ;(f.width = kt(m)),
                (f.height = kt(g)),
                (v.fillStyle = t.fillColor || 'transparent'),
                v.fillRect(0, 0, m, g)
              var w = t.imageSmoothingEnabled,
                b = void 0 === w || w,
                x = t.imageSmoothingQuality
              ;(v.imageSmoothingEnabled = b), x && (v.imageSmoothingQuality = x)
              var y,
                M,
                C,
                D,
                k,
                A,
                B = i.width,
                T = i.height,
                O = a,
                E = o
              O <= -r || O > B
                ? ((O = 0), (y = 0), (C = 0), (k = 0))
                : O <= 0
                ? ((C = -O), (O = 0), (k = y = Math.min(B, r + O)))
                : O <= B && ((C = 0), (k = y = Math.min(r, B - O))),
                y <= 0 || E <= -s || E > T
                  ? ((E = 0), (M = 0), (D = 0), (A = 0))
                  : E <= 0
                  ? ((D = -E), (E = 0), (A = M = Math.min(T, s + E)))
                  : E <= T && ((D = 0), (A = M = Math.min(s, T - E)))
              var z = [O, E, y, M]
              if (k > 0 && A > 0) {
                var W = m / r
                z.push(C * W, D * W, k * W, A * W)
              }
              return (
                v.drawImage.apply(
                  v,
                  [i].concat(
                    h(
                      z.map(function (t) {
                        return Math.floor(kt(t))
                      })
                    )
                  )
                ),
                f
              )
            },
            setAspectRatio: function (t) {
              var e = this.options
              return (
                this.disabled ||
                  gt(t) ||
                  ((e.aspectRatio = Math.max(0, t) || NaN),
                  this.ready &&
                    (this.initCropBox(), this.cropped && this.renderCropBox())),
                this
              )
            },
            setDragMode: function (t) {
              var e = this.options,
                i = this.dragBox,
                n = this.face
              if (this.ready && !this.disabled) {
                var a = t === Y,
                  o = e.movable && t === j
                ;(t = a || o ? t : I),
                  (e.dragMode = t),
                  Lt(i, S, t),
                  zt(i, E, a),
                  zt(i, R, o),
                  e.cropBoxMovable || (Lt(n, S, t), zt(n, E, a), zt(n, R, o))
              }
              return this
            },
          },
          ue = m.Cropper,
          me = (function () {
            function t(e) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              if ((n(this, t), !e || !ht.test(e.tagName)))
                throw new Error(
                  'The first argument is required and must be an <img> or <canvas> element.'
                )
              ;(this.element = e),
                (this.options = Ct({}, pt, wt(i) && i)),
                (this.cropped = !1),
                (this.disabled = !1),
                (this.pointers = {}),
                (this.ready = !1),
                (this.reloading = !1),
                (this.replaced = !1),
                (this.sized = !1),
                (this.sizing = !1),
                this.init()
            }
            return (
              o(
                t,
                [
                  {
                    key: 'init',
                    value: function () {
                      var t,
                        e = this.element,
                        i = e.tagName.toLowerCase()
                      if (!e[v]) {
                        if (((e[v] = this), 'img' === i)) {
                          if (
                            ((this.isImg = !0),
                            (t = e.getAttribute('src') || ''),
                            (this.originalUrl = t),
                            !t)
                          )
                            return
                          t = e.src
                        } else
                          'canvas' === i &&
                            window.HTMLCanvasElement &&
                            (t = e.toDataURL())
                        this.load(t)
                      }
                    },
                  },
                  {
                    key: 'load',
                    value: function (t) {
                      var e = this
                      if (t) {
                        ;(this.url = t), (this.imageData = {})
                        var i = this.element,
                          n = this.options
                        if (
                          (n.rotatable ||
                            n.scalable ||
                            (n.checkOrientation = !1),
                          n.checkOrientation && window.ArrayBuffer)
                        )
                          if (ot.test(t))
                            rt.test(t) ? this.read(ne(t)) : this.clone()
                          else {
                            var a = new XMLHttpRequest(),
                              o = this.clone.bind(this)
                            ;(this.reloading = !0),
                              (this.xhr = a),
                              (a.onabort = o),
                              (a.onerror = o),
                              (a.ontimeout = o),
                              (a.onprogress = function () {
                                a.getResponseHeader('content-type') !== nt &&
                                  a.abort()
                              }),
                              (a.onload = function () {
                                e.read(a.response)
                              }),
                              (a.onloadend = function () {
                                ;(e.reloading = !1), (e.xhr = null)
                              }),
                              n.checkCrossOrigin &&
                                _t(t) &&
                                i.crossOrigin &&
                                (t = Qt(t)),
                              a.open('GET', t, !0),
                              (a.responseType = 'arraybuffer'),
                              (a.withCredentials =
                                'use-credentials' === i.crossOrigin),
                              a.send()
                          }
                        else this.clone()
                      }
                    },
                  },
                  {
                    key: 'read',
                    value: function (t) {
                      var e = this.options,
                        i = this.imageData,
                        n = oe(t),
                        a = 0,
                        o = 1,
                        r = 1
                      if (n > 1) {
                        this.url = ae(t, nt)
                        var h = re(n)
                        ;(a = h.rotate), (o = h.scaleX), (r = h.scaleY)
                      }
                      e.rotatable && (i.rotate = a),
                        e.scalable && ((i.scaleX = o), (i.scaleY = r)),
                        this.clone()
                    },
                  },
                  {
                    key: 'clone',
                    value: function () {
                      var t = this.element,
                        e = this.url,
                        i = t.crossOrigin,
                        n = e
                      this.options.checkCrossOrigin &&
                        _t(e) &&
                        (i || (i = 'anonymous'), (n = Qt(e))),
                        (this.crossOrigin = i),
                        (this.crossOriginUrl = n)
                      var a = document.createElement('img')
                      i && (a.crossOrigin = i),
                        (a.src = n || e),
                        (a.alt = t.alt || 'The image to crop'),
                        (this.image = a),
                        (a.onload = this.start.bind(this)),
                        (a.onerror = this.stop.bind(this)),
                        Ot(a, H),
                        t.parentNode.insertBefore(a, t.nextSibling)
                    },
                  },
                  {
                    key: 'start',
                    value: function () {
                      var t = this,
                        e = this.image
                      ;(e.onload = null), (e.onerror = null), (this.sizing = !0)
                      var i =
                          m.navigator &&
                          /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                            m.navigator.userAgent
                          ),
                        n = function (e, i) {
                          Ct(t.imageData, {
                            naturalWidth: e,
                            naturalHeight: i,
                            aspectRatio: e / i,
                          }),
                            (t.initialImageData = Ct({}, t.imageData)),
                            (t.sizing = !1),
                            (t.sized = !0),
                            t.build()
                        }
                      if (!e.naturalWidth || i) {
                        var a = document.createElement('img'),
                          o = document.body || document.documentElement
                        ;(this.sizingImage = a),
                          (a.onload = function () {
                            n(a.width, a.height), i || o.removeChild(a)
                          }),
                          (a.src = e.src),
                          i ||
                            ((a.style.cssText =
                              'left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;'),
                            o.appendChild(a))
                      } else n(e.naturalWidth, e.naturalHeight)
                    },
                  },
                  {
                    key: 'stop',
                    value: function () {
                      var t = this.image
                      ;(t.onload = null),
                        (t.onerror = null),
                        t.parentNode.removeChild(t),
                        (this.image = null)
                    },
                  },
                  {
                    key: 'build',
                    value: function () {
                      if (this.sized && !this.ready) {
                        var t = this.element,
                          e = this.options,
                          i = this.image,
                          n = t.parentNode,
                          a = document.createElement('div')
                        a.innerHTML = lt
                        var o = a.querySelector('.'.concat(v, '-container')),
                          r = o.querySelector('.'.concat(v, '-canvas')),
                          h = o.querySelector('.'.concat(v, '-drag-box')),
                          s = o.querySelector('.'.concat(v, '-crop-box')),
                          c = s.querySelector('.'.concat(v, '-face'))
                        ;(this.container = n),
                          (this.cropper = o),
                          (this.canvas = r),
                          (this.dragBox = h),
                          (this.cropBox = s),
                          (this.viewBox = o.querySelector(
                            '.'.concat(v, '-view-box')
                          )),
                          (this.face = c),
                          r.appendChild(i),
                          Ot(t, W),
                          n.insertBefore(o, t.nextSibling),
                          this.isImg || Et(i, H),
                          this.initPreview(),
                          this.bind(),
                          (e.initialAspectRatio =
                            Math.max(0, e.initialAspectRatio) || NaN),
                          (e.aspectRatio = Math.max(0, e.aspectRatio) || NaN),
                          (e.viewMode =
                            Math.max(0, Math.min(3, Math.round(e.viewMode))) ||
                            0),
                          Ot(s, W),
                          e.guides ||
                            Ot(
                              s.getElementsByClassName(''.concat(v, '-dashed')),
                              W
                            ),
                          e.center ||
                            Ot(
                              s.getElementsByClassName(''.concat(v, '-center')),
                              W
                            ),
                          e.background && Ot(o, ''.concat(v, '-bg')),
                          e.highlight || Ot(c, N),
                          e.cropBoxMovable && (Ot(c, R), Lt(c, S, w)),
                          e.cropBoxResizable ||
                            (Ot(
                              s.getElementsByClassName(''.concat(v, '-line')),
                              W
                            ),
                            Ot(
                              s.getElementsByClassName(''.concat(v, '-point')),
                              W
                            )),
                          this.render(),
                          (this.ready = !0),
                          this.setDragMode(e.dragMode),
                          e.autoCrop && this.crop(),
                          this.setData(e.data),
                          bt(e.ready) && jt(t, J, e.ready, { once: !0 }),
                          It(t, J)
                      }
                    },
                  },
                  {
                    key: 'unbuild',
                    value: function () {
                      this.ready &&
                        ((this.ready = !1),
                        this.unbind(),
                        this.resetPreview(),
                        this.cropper.parentNode.removeChild(this.cropper),
                        Et(this.element, W))
                    },
                  },
                  {
                    key: 'uncreate',
                    value: function () {
                      this.ready
                        ? (this.unbuild(),
                          (this.ready = !1),
                          (this.cropped = !1))
                        : this.sizing
                        ? ((this.sizingImage.onload = null),
                          (this.sizing = !1),
                          (this.sized = !1))
                        : this.reloading
                        ? ((this.xhr.onabort = null), this.xhr.abort())
                        : this.image && this.stop()
                    },
                  },
                ],
                [
                  {
                    key: 'noConflict',
                    value: function () {
                      return (window.Cropper = ue), t
                    },
                  },
                  {
                    key: 'setDefaults',
                    value: function (t) {
                      Ct(pt, wt(t) && t)
                    },
                  },
                ]
              ),
              t
            )
          })()
        return Ct(me.prototype, he, se, ce, pe, le, de), me
      })()
    })(
      (h = {
        path: r,
        exports: {},
        require: function (t, e) {
          return (function () {
            throw new Error(
              'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
            )
          })(null == e && h.path)
        },
      }),
      h.exports
    ),
    h.exports)
function c(t, e) {
  void 0 === e && (e = {})
  var i = e.insertAt
  if (t && 'undefined' != typeof document) {
    var n = document.head || document.getElementsByTagName('head')[0],
      a = document.createElement('style')
    ;(a.type = 'text/css'),
      'top' === i && n.firstChild
        ? n.insertBefore(a, n.firstChild)
        : n.appendChild(a),
      a.styleSheet
        ? (a.styleSheet.cssText = t)
        : a.appendChild(document.createTextNode(t))
  }
}
c(
  "/*!\n * Cropper.js v1.5.12\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-06-12T08:00:11.623Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n"
)
var p = null,
  l = t({
    name: 'VuePictureCropper',
    props: {
      boxStyle: {
        type: Object,
        required: !1,
        default: function () {
          return {}
        },
      },
      img: String,
      options: {
        type: Object,
        required: !1,
        default: function () {
          return {}
        },
      },
    },
    data: function () {
      return { cropper: null, mimeType: '' }
    },
    watch: {
      img: function (t, e) {
        if (!this.cropper) return this.init(), !1
        try {
          this.cropper.replace(this.img), this.getImgSuffix()
        } catch (t) {
          console.log(t)
        }
      },
    },
    beforeUnmount: function () {
      this.cropper && this.cropper.destroy()
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        return a(this, void 0, void 0, function () {
          var t,
            e = this
          return o(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, this.$nextTick()]
              case 1:
                return (
                  i.sent(),
                  (t = setInterval(function () {
                    var i = document.querySelector('.vue--picture-cropper__img')
                    if (i)
                      try {
                        ;(e.cropper = new s(i, e.options)),
                          clearInterval(t),
                          e.updateInstance(),
                          e.getImgSuffix()
                      } catch (t) {
                        console.log(t)
                      }
                  }, 10)),
                  [2]
                )
            }
          })
        })
      },
      updateInstance: function () {
        ;((p = this.cropper).getDataURL = this.getDataURL),
          (p.getBlob = this.getBlob)
      },
      getImgSuffix: function () {
        var t = this.img.split(',')[0].replace(/data:(.*);base64/, '$1')
        this.mimeType = t
      },
      getDataURL: function (t) {
        void 0 === t && (t = {})
        try {
          return this.cropper.getCroppedCanvas(t).toDataURL(this.mimeType)
        } catch (t) {
          return ''
        }
      },
      getBlob: function (t) {
        var e = p.getDataURL()
        if (!e) return null
        for (
          var i = e.split(','),
            n = i[1].substring(0, i[1].length - 2),
            a = window.atob(n),
            o = a.length,
            r = new Uint8Array(o);
          o--;

        )
          r[o] = a.charCodeAt(o)
        return new Blob([r], { type: this.mimeType })
      },
    },
  })
c(
  '\n.vue--picture-cropper__wrap {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n.vue--picture-cropper__img {\n  display: block;\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n'
),
  (l.render = function (t, a, o, r, h, s) {
    return (
      e(),
      i(
        'div',
        { class: 'vue--picture-cropper__wrap', style: t.boxStyle },
        [
          n(
            'img',
            { class: 'vue--picture-cropper__img', src: t.img },
            null,
            8,
            ['src']
          ),
        ],
        4
      )
    )
  }),
  (l.__file = 'src/vue-picture-cropper.vue')
export default l
export { p as cropper }
//# sourceMappingURL=esm.js.map
