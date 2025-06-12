export default `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>waf turnstile</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      .loading {
        width: 150px;
        height: 15px;
        margin: 0 auto;
      }

      .loading span {
        display: inline-block;
        width: 15px;
        height: 100%;
        margin-right: 5px;
        border-radius: 50%;
        background: lightgreen;
        -webkit-animation: load 1.04s ease infinite;
      }

      .loading span:last-child {
        margin-right: 0px;
      }

      @-webkit-keyframes load {
        0% {
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }

      .loading span:nth-child(1) {
        -webkit-animation-delay: 0.13s;
      }

      .loading span:nth-child(2) {
        -webkit-animation-delay: 0.26s;
      }

      .loading span:nth-child(3) {
        -webkit-animation-delay: 0.39s;
      }

      .loading span:nth-child(4) {
        -webkit-animation-delay: 0.52s;
      }

      .loading span:nth-child(5) {
        -webkit-animation-delay: 0.65s;
      }

      body {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 360px;
        min-height: 100vh;
        padding-bottom: 30px;
        margin: 0;
      }

      div,
      span {
        box-sizing: border-box;
      }

      .main {
        text-align: center;
        padding: 20px 10px;
        background-color: #fff;
        border-radius: 15px;
        width: 400px;
      }

      .title {
        margin: 30px 0 20px;
        color: #333;
        font-weight: 600;
        font-size: 20px;
      }

      .info {
        font-size: 13px;
        color: #999;
      }

      .handle {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        min-height: 60px;
        margin: 20px auto;
        padding: 10px;
        /* border: 1px solid #eee; */
      }

      .button {
        width: 100%;
        position: relative;
        font-weight: 600;
        font-size: 15px;
        padding: 8px 30px;
        border: none;
        background-color: #409eff;
        border: 2px solid#409eff;
        color: #fff;
        cursor: pointer;
        -webkit-border-radius: 6px;
        -ms-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        transition: all 0.3s ease;
      }

      .button:hover {
        box-shadow: -1px 2px 15px rgba(0, 0, 0, 0.2);
        top: -1px;
      }
    </style>
  </head>

  <body>
    <div style="text-align: center; position: absolute">
      <div id="loading" class="loading" style="display: block">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="main" id="main" style="display: none">
      <svg
        t="1713323779478"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5098"
        width="50"
        height="50"
      >
        <path
          d="M829.6 960.6h-634c-35.9 0-65.8-23.9-65.8-65.8V434.2c0-35.9 29.9-65.8 65.8-65.8h634c35.9 0 65.8 29.9 65.8 65.8v460.5c6 41.9-23.9 65.9-65.8 65.9z m-634-532.3c-5.9 0-5.9 5.9 0 0l-6 466.5c0 6 0 6 6 6h634c6 0 6 0 6-6V434.2c0-6 0-6-6-6h-634z"
          p-id="5099"
          data-spm-anchor-id="a313x.search_index.0.i1.36733a81JCM4hs"
          class="selected"
          fill="#C6D8EB"
        ></path>
        <path
          d="M590.4 589.8c0-41.9-41.9-77.8-77.8-77.8-41.9 0-71.8 41.9-71.8 77.8 0 29.9 17.9 59.8 47.8 65.8v107.7c0 12 6 17.9 17.9 17.9h23.9c12 0 17.9-6 17.9-17.9V655.5c24.1-5.9 42.1-35.8 42.1-65.7zM763.8 392.4H704v-89.7c0-101.7-83.7-179.4-179.4-179.4-101.7 0-179.4 83.7-179.4 179.4v89.7h-59.8v-89.7c0-131.6 107.7-239.2 239.2-239.2s239.2 107.7 239.2 239.2v89.7z"
          p-id="5100"
          data-spm-anchor-id="a313x.search_index.0.i4.36733a81JCM4hs"
          class="selected"
          fill="#C6D8EB"
        ></path>
      </svg>

      <div class="title">&#x8fd8;&#x9700;&#x8981;&#x4e00;&#x6b65;</div>

      <div class="info">
        &#x60a8;&#x9700;&#x8981;&#x70b9;&#x51fb;&#x540e;&#x624d;&#x80fd;&#x7ee7;&#x7eed;&#x8bbf;&#x95ee;
      </div>

      <div class="handle">
        <button class="button" id="verify" onclick="verify_func()">
          点击继续访问
        </button>
      </div>
    </div>

    <script>
      var CryptoJS =
        CryptoJS ||
        (function (s, l) {
          var e = {},
            n = (e.lib = {}),
            p = function () {},
            b = (n.Base = {
              extend: function (c) {
                p.prototype = this;
                var a = new p();
                c && a.mixIn(c);
                a.hasOwnProperty("init") ||
                  (a.init = function () {
                    a.$super.init.apply(this, arguments);
                  });
                a.init.prototype = a;
                a.$super = this;
                return a;
              },
              create: function () {
                var c = this.extend();
                c.init.apply(c, arguments);
                return c;
              },
              init: function () {},
              mixIn: function (c) {
                for (var a in c) c.hasOwnProperty(a) && (this[a] = c[a]);
                c.hasOwnProperty("toString") && (this.toString = c.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              },
            }),
            d = (n.WordArray = b.extend({
              init: function (c, a) {
                c = this.words = c || [];
                this.sigBytes = a != l ? a : 4 * c.length;
              },
              toString: function (c) {
                return (c || q).stringify(this);
              },
              concat: function (c) {
                var a = this.words,
                  m = c.words,
                  f = this.sigBytes;
                c = c.sigBytes;
                this.clamp();
                if (f % 4)
                  for (var r = 0; r < c; r++)
                    a[(f + r) >>> 2] |=
                      ((m[r >>> 2] >>> (24 - 8 * (r % 4))) & 255) <<
                      (24 - 8 * ((f + r) % 4));
                else if (65535 < m.length)
                  for (r = 0; r < c; r += 4) a[(f + r) >>> 2] = m[r >>> 2];
                else a.push.apply(a, m);
                this.sigBytes += c;
                return this;
              },
              clamp: function () {
                var c = this.words,
                  a = this.sigBytes;
                c[a >>> 2] &= 4294967295 << (32 - 8 * (a % 4));
                c.length = s.ceil(a / 4);
              },
              clone: function () {
                var c = b.clone.call(this);
                c.words = this.words.slice(0);
                return c;
              },
              random: function (c) {
                for (var a = [], m = 0; m < c; m += 4)
                  a.push((4294967296 * s.random()) | 0);
                return new d.init(a, c);
              },
            })),
            t = (e.enc = {}),
            q = (t.Hex = {
              stringify: function (c) {
                var a = c.words;
                c = c.sigBytes;
                for (var m = [], f = 0; f < c; f++) {
                  var r = (a[f >>> 2] >>> (24 - 8 * (f % 4))) & 255;
                  m.push((r >>> 4).toString(16));
                  m.push((r & 15).toString(16));
                }
                return m.join("");
              },
              parse: function (c) {
                for (var a = c.length, m = [], f = 0; f < a; f += 2)
                  m[f >>> 3] |=
                    parseInt(c.substr(f, 2), 16) << (24 - 4 * (f % 8));
                return new d.init(m, a / 2);
              },
            }),
            a = (t.Latin1 = {
              stringify: function (c) {
                var a = c.words;
                c = c.sigBytes;
                for (var m = [], f = 0; f < c; f++)
                  m.push(
                    String.fromCharCode(
                      (a[f >>> 2] >>> (24 - 8 * (f % 4))) & 255
                    )
                  );
                return m.join("");
              },
              parse: function (c) {
                for (var a = c.length, m = [], f = 0; f < a; f++)
                  m[f >>> 2] |= (c.charCodeAt(f) & 255) << (24 - 8 * (f % 4));
                return new d.init(m, a);
              },
            }),
            v = (t.Utf8 = {
              stringify: function (c) {
                try {
                  return decodeURIComponent(escape(a.stringify(c)));
                } catch (u) {
                  throw Error("Malformed UTF-8 data");
                }
              },
              parse: function (c) {
                return a.parse(unescape(encodeURIComponent(c)));
              },
            }),
            u = (n.BufferedBlockAlgorithm = b.extend({
              reset: function () {
                this._data = new d.init();
                this._nDataBytes = 0;
              },
              _append: function (a) {
                "string" == typeof a && (a = v.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes;
              },
              _process: function (a) {
                var u = this._data,
                  m = u.words,
                  f = u.sigBytes,
                  r = this.blockSize,
                  e = f / (4 * r),
                  e = a ? s.ceil(e) : s.max((e | 0) - this._minBufferSize, 0);
                a = e * r;
                f = s.min(4 * a, f);
                if (a) {
                  for (var b = 0; b < a; b += r) this._doProcessBlock(m, b);
                  b = m.splice(0, a);
                  u.sigBytes -= f;
                }
                return new d.init(b, f);
              },
              clone: function () {
                var a = b.clone.call(this);
                a._data = this._data.clone();
                return a;
              },
              _minBufferSize: 0,
            }));
          n.Hasher = u.extend({
            cfg: b.extend(),
            init: function (a) {
              this.cfg = this.cfg.extend(a);
              this.reset();
            },
            reset: function () {
              u.reset.call(this);
              this._doReset();
            },
            update: function (a) {
              this._append(a);
              this._process();
              return this;
            },
            finalize: function (a) {
              a && this._append(a);
              return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (a) {
              return function (u, m) {
                return new a.init(m).finalize(u);
              };
            },
            _createHmacHelper: function (a) {
              return function (u, m) {
                return new w.HMAC.init(a, m).finalize(u);
              };
            },
          });
          var w = (e.algo = {});
          return e;
        })(Math);
      (function () {
        var s = CryptoJS,
          l = s.lib.WordArray;
        s.enc.Base64 = {
          stringify: function (e) {
            var n = e.words,
              l = e.sigBytes,
              b = this._map;
            e.clamp();
            e = [];
            for (var d = 0; d < l; d += 3)
              for (
                var t =
                    (((n[d >>> 2] >>> (24 - 8 * (d % 4))) & 255) << 16) |
                    (((n[(d + 1) >>> 2] >>> (24 - 8 * ((d + 1) % 4))) & 255) <<
                      8) |
                    ((n[(d + 2) >>> 2] >>> (24 - 8 * ((d + 2) % 4))) & 255),
                  q = 0;
                4 > q && d + 0.75 * q < l;
                q++
              )
                e.push(b.charAt((t >>> (6 * (3 - q))) & 63));
            if ((n = b.charAt(64))) for (; e.length % 4; ) e.push(n);
            return e.join("");
          },
          parse: function (e) {
            var n = e.length,
              p = this._map,
              b = p.charAt(64);
            b && ((b = e.indexOf(b)), -1 != b && (n = b));
            for (var b = [], d = 0, t = 0; t < n; t++)
              if (t % 4) {
                var q = p.indexOf(e.charAt(t - 1)) << (2 * (t % 4)),
                  a = p.indexOf(e.charAt(t)) >>> (6 - 2 * (t % 4));
                b[d >>> 2] |= (q | a) << (24 - 8 * (d % 4));
                d++;
              }
            return l.create(b, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        };
      })();
      (function (s) {
        function l(a, b, c, e, m, f, r) {
          a = a + ((b & c) | (~b & e)) + m + r;
          return ((a << f) | (a >>> (32 - f))) + b;
        }
        function e(a, b, c, e, m, f, r) {
          a = a + ((b & e) | (c & ~e)) + m + r;
          return ((a << f) | (a >>> (32 - f))) + b;
        }
        function n(a, b, c, e, m, f, r) {
          a = a + (b ^ c ^ e) + m + r;
          return ((a << f) | (a >>> (32 - f))) + b;
        }
        function p(a, b, c, e, m, f, r) {
          a = a + (c ^ (b | ~e)) + m + r;
          return ((a << f) | (a >>> (32 - f))) + b;
        }
        for (
          var b = CryptoJS,
            d = b.lib,
            t = d.WordArray,
            q = d.Hasher,
            d = b.algo,
            a = [],
            v = 0;
          64 > v;
          v++
        )
          a[v] = (4294967296 * s.abs(s.sin(v + 1))) | 0;
        d = d.MD5 = q.extend({
          _doReset: function () {
            this._hash = new t.init([
              1732584193, 4023233417, 2562383102, 271733878,
            ]);
          },
          _doProcessBlock: function (b, d) {
            for (var c = 0; 16 > c; c++) {
              var q = d + c,
                m = b[q];
              b[q] =
                (((m << 8) | (m >>> 24)) & 16711935) |
                (((m << 24) | (m >>> 8)) & 4278255360);
            }
            var c = this._hash.words,
              q = b[d + 0],
              m = b[d + 1],
              f = b[d + 2],
              r = b[d + 3],
              x = b[d + 4],
              t = b[d + 5],
              s = b[d + 6],
              v = b[d + 7],
              y = b[d + 8],
              z = b[d + 9],
              A = b[d + 10],
              B = b[d + 11],
              C = b[d + 12],
              D = b[d + 13],
              E = b[d + 14],
              F = b[d + 15],
              g = c[0],
              h = c[1],
              j = c[2],
              k = c[3],
              g = l(g, h, j, k, q, 7, a[0]),
              k = l(k, g, h, j, m, 12, a[1]),
              j = l(j, k, g, h, f, 17, a[2]),
              h = l(h, j, k, g, r, 22, a[3]),
              g = l(g, h, j, k, x, 7, a[4]),
              k = l(k, g, h, j, t, 12, a[5]),
              j = l(j, k, g, h, s, 17, a[6]),
              h = l(h, j, k, g, v, 22, a[7]),
              g = l(g, h, j, k, y, 7, a[8]),
              k = l(k, g, h, j, z, 12, a[9]),
              j = l(j, k, g, h, A, 17, a[10]),
              h = l(h, j, k, g, B, 22, a[11]),
              g = l(g, h, j, k, C, 7, a[12]),
              k = l(k, g, h, j, D, 12, a[13]),
              j = l(j, k, g, h, E, 17, a[14]),
              h = l(h, j, k, g, F, 22, a[15]),
              g = e(g, h, j, k, m, 5, a[16]),
              k = e(k, g, h, j, s, 9, a[17]),
              j = e(j, k, g, h, B, 14, a[18]),
              h = e(h, j, k, g, q, 20, a[19]),
              g = e(g, h, j, k, t, 5, a[20]),
              k = e(k, g, h, j, A, 9, a[21]),
              j = e(j, k, g, h, F, 14, a[22]),
              h = e(h, j, k, g, x, 20, a[23]),
              g = e(g, h, j, k, z, 5, a[24]),
              k = e(k, g, h, j, E, 9, a[25]),
              j = e(j, k, g, h, r, 14, a[26]),
              h = e(h, j, k, g, y, 20, a[27]),
              g = e(g, h, j, k, D, 5, a[28]),
              k = e(k, g, h, j, f, 9, a[29]),
              j = e(j, k, g, h, v, 14, a[30]),
              h = e(h, j, k, g, C, 20, a[31]),
              g = n(g, h, j, k, t, 4, a[32]),
              k = n(k, g, h, j, y, 11, a[33]),
              j = n(j, k, g, h, B, 16, a[34]),
              h = n(h, j, k, g, E, 23, a[35]),
              g = n(g, h, j, k, m, 4, a[36]),
              k = n(k, g, h, j, x, 11, a[37]),
              j = n(j, k, g, h, v, 16, a[38]),
              h = n(h, j, k, g, A, 23, a[39]),
              g = n(g, h, j, k, D, 4, a[40]),
              k = n(k, g, h, j, q, 11, a[41]),
              j = n(j, k, g, h, r, 16, a[42]),
              h = n(h, j, k, g, s, 23, a[43]),
              g = n(g, h, j, k, z, 4, a[44]),
              k = n(k, g, h, j, C, 11, a[45]),
              j = n(j, k, g, h, F, 16, a[46]),
              h = n(h, j, k, g, f, 23, a[47]),
              g = p(g, h, j, k, q, 6, a[48]),
              k = p(k, g, h, j, v, 10, a[49]),
              j = p(j, k, g, h, E, 15, a[50]),
              h = p(h, j, k, g, t, 21, a[51]),
              g = p(g, h, j, k, C, 6, a[52]),
              k = p(k, g, h, j, r, 10, a[53]),
              j = p(j, k, g, h, A, 15, a[54]),
              h = p(h, j, k, g, m, 21, a[55]),
              g = p(g, h, j, k, y, 6, a[56]),
              k = p(k, g, h, j, F, 10, a[57]),
              j = p(j, k, g, h, s, 15, a[58]),
              h = p(h, j, k, g, D, 21, a[59]),
              g = p(g, h, j, k, x, 6, a[60]),
              k = p(k, g, h, j, B, 10, a[61]),
              j = p(j, k, g, h, f, 15, a[62]),
              h = p(h, j, k, g, z, 21, a[63]);
            c[0] = (c[0] + g) | 0;
            c[1] = (c[1] + h) | 0;
            c[2] = (c[2] + j) | 0;
            c[3] = (c[3] + k) | 0;
          },
          _doFinalize: function () {
            var a = this._data,
              b = a.words,
              c = 8 * this._nDataBytes,
              d = 8 * a.sigBytes;
            b[d >>> 5] |= 128 << (24 - (d % 32));
            var m = s.floor(c / 4294967296);
            b[(((d + 64) >>> 9) << 4) + 15] =
              (((m << 8) | (m >>> 24)) & 16711935) |
              (((m << 24) | (m >>> 8)) & 4278255360);
            b[(((d + 64) >>> 9) << 4) + 14] =
              (((c << 8) | (c >>> 24)) & 16711935) |
              (((c << 24) | (c >>> 8)) & 4278255360);
            a.sigBytes = 4 * (b.length + 1);
            this._process();
            a = this._hash;
            b = a.words;
            for (c = 0; 4 > c; c++)
              (d = b[c]),
                (b[c] =
                  (((d << 8) | (d >>> 24)) & 16711935) |
                  (((d << 24) | (d >>> 8)) & 4278255360));
            return a;
          },
          clone: function () {
            var a = q.clone.call(this);
            a._hash = this._hash.clone();
            return a;
          },
        });
        b.MD5 = q._createHelper(d);
        b.HmacMD5 = q._createHmacHelper(d);
      })(Math);
      (function () {
        var s = CryptoJS,
          l = s.lib,
          e = l.Base,
          n = l.WordArray,
          l = s.algo,
          p = (l.EvpKDF = e.extend({
            cfg: e.extend({ keySize: 4, hasher: l.MD5, iterations: 1 }),
            init: function (b) {
              this.cfg = this.cfg.extend(b);
            },
            compute: function (b, d) {
              for (
                var e = this.cfg,
                  q = e.hasher.create(),
                  a = n.create(),
                  l = a.words,
                  p = e.keySize,
                  e = e.iterations;
                l.length < p;

              ) {
                s && q.update(s);
                var s = q.update(b).finalize(d);
                q.reset();
                for (var c = 1; c < e; c++) (s = q.finalize(s)), q.reset();
                a.concat(s);
              }
              a.sigBytes = 4 * p;
              return a;
            },
          }));
        s.EvpKDF = function (b, d, e) {
          return p.create(e).compute(b, d);
        };
      })();
      CryptoJS.lib.Cipher ||
        (function (s) {
          var l = CryptoJS,
            e = l.lib,
            n = e.Base,
            p = e.WordArray,
            b = e.BufferedBlockAlgorithm,
            d = l.enc.Base64,
            t = l.algo.EvpKDF,
            q = (e.Cipher = b.extend({
              cfg: n.extend(),
              createEncryptor: function (a, f) {
                return this.create(this._ENC_XFORM_MODE, a, f);
              },
              createDecryptor: function (a, f) {
                return this.create(this._DEC_XFORM_MODE, a, f);
              },
              init: function (a, f, c) {
                this.cfg = this.cfg.extend(c);
                this._xformMode = a;
                this._key = f;
                this.reset();
              },
              reset: function () {
                b.reset.call(this);
                this._doReset();
              },
              process: function (a) {
                this._append(a);
                return this._process();
              },
              finalize: function (a) {
                a && this._append(a);
                return this._doFinalize();
              },
              keySize: 4,
              ivSize: 4,
              _ENC_XFORM_MODE: 1,
              _DEC_XFORM_MODE: 2,
              _createHelper: function (a) {
                return {
                  encrypt: function (f, b, d) {
                    return ("string" == typeof b ? G : c).encrypt(a, f, b, d);
                  },
                  decrypt: function (f, b, d) {
                    return ("string" == typeof b ? G : c).decrypt(a, f, b, d);
                  },
                };
              },
            }));
          e.StreamCipher = q.extend({
            _doFinalize: function () {
              return this._process(!0);
            },
            blockSize: 1,
          });
          var a = (l.mode = {}),
            v = function (a, f, b) {
              var c = this._iv;
              c ? (this._iv = s) : (c = this._prevBlock);
              for (var d = 0; d < b; d++) a[f + d] ^= c[d];
            },
            u = (e.BlockCipherMode = n.extend({
              createEncryptor: function (a, f) {
                return this.Encryptor.create(a, f);
              },
              createDecryptor: function (a, f) {
                return this.Decryptor.create(a, f);
              },
              init: function (a, f) {
                this._cipher = a;
                this._iv = f;
              },
            })).extend();
          u.Encryptor = u.extend({
            processBlock: function (a, f) {
              var b = this._cipher,
                c = b.blockSize;
              v.call(this, a, f, c);
              b.encryptBlock(a, f);
              this._prevBlock = a.slice(f, f + c);
            },
          });
          u.Decryptor = u.extend({
            processBlock: function (a, f) {
              var b = this._cipher,
                c = b.blockSize,
                d = a.slice(f, f + c);
              b.decryptBlock(a, f);
              v.call(this, a, f, c);
              this._prevBlock = d;
            },
          });
          a = a.CBC = u;
          u = (l.pad = {}).Pkcs7 = {
            pad: function (a, f) {
              for (
                var b = 4 * f,
                  b = b - (a.sigBytes % b),
                  c = (b << 24) | (b << 16) | (b << 8) | b,
                  d = [],
                  e = 0;
                e < b;
                e += 4
              )
                d.push(c);
              b = p.create(d, b);
              a.concat(b);
            },
            unpad: function (a) {
              a.sigBytes -= a.words[(a.sigBytes - 1) >>> 2] & 255;
            },
          };
          e.BlockCipher = q.extend({
            cfg: q.cfg.extend({ mode: a, padding: u }),
            reset: function () {
              q.reset.call(this);
              var a = this.cfg,
                b = a.iv,
                a = a.mode;
              if (this._xformMode == this._ENC_XFORM_MODE)
                var c = a.createEncryptor;
              else (c = a.createDecryptor), (this._minBufferSize = 1);
              this._mode = c.call(a, this, b && b.words);
            },
            _doProcessBlock: function (a, b) {
              this._mode.processBlock(a, b);
            },
            _doFinalize: function () {
              var a = this.cfg.padding;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0);
              } else (b = this._process(!0)), a.unpad(b);
              return b;
            },
            blockSize: 4,
          });
          var w = (e.CipherParams = n.extend({
              init: function (a) {
                this.mixIn(a);
              },
              toString: function (a) {
                return (a || this.formatter).stringify(this);
              },
            })),
            a = ((l.format = {}).OpenSSL = {
              stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (
                  a ? p.create([1398893684, 1701076831]).concat(a).concat(b) : b
                ).toString(d);
              },
              parse: function (a) {
                a = d.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                  var c = p.create(b.slice(2, 4));
                  b.splice(0, 4);
                  a.sigBytes -= 16;
                }
                return w.create({ ciphertext: a, salt: c });
              },
            }),
            c = (e.SerializableCipher = n.extend({
              cfg: n.extend({ format: a }),
              encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var e = a.createEncryptor(c, d);
                b = e.finalize(b);
                e = e.cfg;
                return w.create({
                  ciphertext: b,
                  key: c,
                  iv: e.iv,
                  algorithm: a,
                  mode: e.mode,
                  padding: e.padding,
                  blockSize: a.blockSize,
                  formatter: d.format,
                });
              },
              decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this._parse(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext);
              },
              _parse: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a;
              },
            })),
            l = ((l.kdf = {}).OpenSSL = {
              execute: function (a, b, c, d) {
                d || (d = p.random(8));
                a = t.create({ keySize: b + c }).compute(a, d);
                c = p.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return w.create({ key: a, iv: c, salt: d });
              },
            }),
            G = (e.PasswordBasedCipher = c.extend({
              cfg: c.cfg.extend({ kdf: l }),
              encrypt: function (a, b, d, e) {
                e = this.cfg.extend(e);
                d = e.kdf.execute(d, a.keySize, a.ivSize);
                e.iv = d.iv;
                a = c.encrypt.call(this, a, b, d.key, e);
                a.mixIn(d);
                return a;
              },
              decrypt: function (a, b, d, e) {
                e = this.cfg.extend(e);
                b = this._parse(b, e.format);
                d = e.kdf.execute(d, a.keySize, a.ivSize, b.salt);
                e.iv = d.iv;
                return c.decrypt.call(this, a, b, d.key, e);
              },
            }));
        })();
      (function () {
        function s() {
          for (
            var b = this._S, d = this._i, e = this._j, q = 0, a = 0;
            4 > a;
            a++
          ) {
            var d = (d + 1) % 256,
              e = (e + b[d]) % 256,
              l = b[d];
            b[d] = b[e];
            b[e] = l;
            q |= b[(b[d] + b[e]) % 256] << (24 - 8 * a);
          }
          this._i = d;
          this._j = e;
          return q;
        }
        var l = CryptoJS,
          e = l.lib.StreamCipher,
          n = l.algo,
          p = (n.RC4 = e.extend({
            _doReset: function () {
              for (
                var b = this._key,
                  d = b.words,
                  b = b.sigBytes,
                  e = (this._S = []),
                  l = 0;
                256 > l;
                l++
              )
                e[l] = l;
              for (var a = (l = 0); 256 > l; l++) {
                var n = l % b,
                  a =
                    (a + e[l] + ((d[n >>> 2] >>> (24 - 8 * (n % 4))) & 255)) %
                    256,
                  n = e[l];
                e[l] = e[a];
                e[a] = n;
              }
              this._i = this._j = 0;
            },
            _doProcessBlock: function (b, d) {
              b[d] ^= s.call(this);
            },
            keySize: 8,
            ivSize: 0,
          }));
        l.RC4 = e._createHelper(p);
        n = n.RC4Drop = p.extend({
          cfg: p.cfg.extend({ drop: 192 }),
          _doReset: function () {
            p._doReset.call(this);
            for (var b = this.cfg.drop; 0 < b; b--) s.call(this);
          },
        });
        l.RC4Drop = e._createHelper(n);
      })();
    </script>
    <script>
      window.g_vf_mm = [];
      document.addEventListener("mousemove", handleMouseEvent);
      function create_node(node_txt) {
        var newElement = document.createElement("div");
        var textNode = document.createTextNode(node_txt);
        newElement.appendChild(textNode);
        document.body.appendChild(newElement);
      }

      function handleMouseEvent(event) {
        const x = event.clientX;
        const y = event.clientY;
        window.g_vf_mm.push({ t: new Date().getTime(), x: x, y: y });
      }

      function verify_func() {
        if (window.g_vf_f_token) {
          setCookie("ants_waf_m10_token", window.g_vf_f_token, 7);
          location.reload();
        } else {
          alert("验证失败");
        }
      }
    </script>
    <script>
      function swapRow(matrix, vec, row1, row2) {
        [matrix[row1], matrix[row2]] = [matrix[row2], matrix[row1]];
        [vec[row1], vec[row2]] = [vec[row2], vec[row1]];
      }

      function gaussianElimination(A, b) {
        if (
          !Array.isArray(A) ||
          !Array.isArray(b) ||
          A.length !== b.length ||
          A.some((row) => !Array.isArray(row) || row.length !== A.length)
        ) {
          // throw new Error('Input matrices have incorrect dimensions');
          return 0;
        }

        let n = A.length;
        let x = new Array(n).fill(0);
        for (let i = 0; i < n - 1; i++) {
          let maxRow = i;
          for (let k = i + 1; k < n; k++) {
            if (Math.abs(A[k][i]) > Math.abs(A[maxRow][i])) {
              maxRow = k;
            }
          }

          if (A[maxRow][i] === 0) {
            //throw new Error('Zero pivot encountered during Gaussian elimination');
            return 0;
          }

          if (maxRow !== i) {
            swapRow(A, b, i, maxRow);
          }

          for (let j = i + 1; j < n; j++) {
            let factor = A[j][i] / A[i][i];
            for (let k = i; k < n; k++) {
              A[j][k] -= factor * A[i][k];
            }
            b[j] -= factor * b[i];
          }
        }

        for (let i = n - 1; i >= 0; i--) {
          let sum = b[i];
          for (let j = i + 1; j < n; j++) {
            sum -= A[i][j] * x[j];
          }
          x[i] = sum / A[i][i];

          if (A[i][i] === 0) {
            //throw new Error('Zero divisor encountered during back substitution');
            return 0;
          }
        }

        return x;
      }

      function verifySolution(A, b, x) {
        let n = A.length;
        let isVerified = true;
        for (let i = 0; i < n; i++) {
          let sum = 0;
          for (let j = 0; j < n; j++) {
            sum += A[i][j] * x[j];
          }
          if (Math.abs(sum - b[i]) > 1e-10) {
            isVerified = false;
          }
        }

        if (isVerified) {
          //console.log("v success");
        }
        return isVerified;
      }

      function getFonts() {
        window.g_vf_result_map.ff = "";
        var testElement = document.createElement("div");
        testElement.innerHTML = "v";
        document.body.appendChild(testElement);
        var computedStyle = window.getComputedStyle(testElement, null);
        if (computedStyle) {
          var fontFamily = computedStyle.getPropertyValue("font-family");
          if (fontFamily) {
            window.g_vf_result_map.ff = CryptoJS.MD5(fontFamily).toString();
          }
        }

        //console.log("Font Family: " + fontFamily);
        document.body.removeChild(testElement);

        return;
      }

      function browserWH() {
        var screenWidth = screen.width;
        var screenHeight = screen.height;
        var width = window.innerWidth;
        var height = window.innerHeight;
        let r = [screenWidth, screenHeight, width, height].toString();
        window.g_vf_result_map.wh = r;
        return r;
      }

      function hardDCM() {
        let r = [];
        let rr = "";
        if (navigator) {
          let hc_c = navigator.hardwareConcurrency;
          let hc_m = navigator.deviceMemory;
          if (hc_c) {
            r.push(hc_c);
          }
          if (hc_m) {
            r.push(hc_m);
          }
          rr = r.toString();
        }
        window.g_vf_result_map.cm = rr;
        return rr;
      }

      function uaString() {
        window.g_vf_result_map.ua = "";
        if (navigator && navigator.userAgent) {
          window.g_vf_result_map.ua = navigator.userAgent;
        }
      }

      function ndv() {
        window.g_vf_result_map.wd = "";
        if (navigator && navigator.webdriver) {
          window.g_vf_result_map.wd = navigator.webdriver;
        }
      }

      function getAudio() {
        var context = new (window.OfflineAudioContext ||
          window.webkitOfflineAudioContext)(1, 44100, 44100);
        var oscillator = context.createOscillator();
        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(10000, context.currentTime);
        var gainNode = context.createGain();
        gainNode.gain.setValueAtTime(0, context.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, context.currentTime + 0.01);
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        oscillator.start(0);
        oscillator.stop(0.1);
        context
          .startRendering()
          .then(function (buffer) {
            let channelData = buffer.getChannelData(0);
            let cdata = channelData.toString();
            let fingerprint = CryptoJS.MD5(cdata).toString();
            window.g_vf_result_map.au = fingerprint;
          })
          .catch(function (e) {
            console.error(e);
          });
      }

      function getcavnas() {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        ctx.textBaseline = "top";
        ctx.font = "14px 'Arial'";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#f60";
        ctx.fillRect(125, 1, 62, 20);

        var gradient = ctx.createLinearGradient(2, 0, 150, 0);
        gradient.addColorStop(0, "rgba(102, 204, 0, 0.7)");
        gradient.addColorStop(1, "rgba(255, 102, 0, 0.7)");
        ctx.fillStyle = gradient;

        ctx.fillText("v", 2, 15);

        ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
        ctx.fillRect(80, 4, 10, 10);

        const dataURL = canvas.toDataURL();
        console.log(dataURL);
        window.g_vf_result_map.cv = CryptoJS.MD5(dataURL).toString();
      }

      function get_mouse_event() {
        window.g_vf_mm;
        let sum = window.g_vf_mm.length;
        if (sum) {
          console.log(window.g_vf_mm[sum - 1]);
          let useTime = window.g_vf_mm[sum - 1].t - window.g_vf_mm[0].t;
          window.g_vf_result_map.mm = [sum, useTime].toString();
        }
      }
      function run_verify() {
        var f = [
          uaString,
          getFonts,
          browserWH,
          hardDCM,
          ndv,
          getAudio,
          get_mouse_event,
          getcavnas,
        ];
        f.forEach((functionPoint) => {
          functionPoint();
        });
        //console.log(window.g_vf_result_map);
      }

      function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }

      function showClickBtn() {
        window.document
                .getElementById("loading")
                .setAttribute("style", "display: none");
        window.document
                .getElementById("main")
                .setAttribute("style", "display:inline");
      }
    </script>
  </body>
</html>
`
