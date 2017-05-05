!function(t) {
    function e(n) {
        if (o[n]) return o[n].exports;
        var r = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }
    var o = {};
    e.m = t, e.c = o, e.i = function(t) {
        return t;
    }, e.d = function(t, o, n) {
        e.o(t, o) || Object.defineProperty(t, o, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, e.n = function(t) {
        var o = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(o, "a", o), o;
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 13);
}([ /*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
function(t, e, o) {
    "use strict";
    function n(t) {
        a = t;
    }
    function r() {
        if (null == a) throw new Error("Game is not defined!");
        return a;
    }
    function i() {
        a = null;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setGame = n, e.getGame = r, e.clearGame = i;
    var a = null;
    e.default = a;
}, /*!*************************!*\
  !*** ./AbstractLeaf.js ***!
  \*************************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = o(/*! ./AbstractGraphic */ 2);
    o.d(e, "default", function() {
        return c;
    });
    var u = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, s = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), l = function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n);
        }
        if ("value" in r) return r.value;
        var a = r.get;
        if (void 0 !== a) return a.call(n);
    }, c = function(t) {
        function e() {
            var t;
            n(this, e);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            var u = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i)));
            return u.isLeaf = !0, u.params = {}, u;
        }
        return i(e, t), s(e, [ {
            key: "init",
            value: function() {
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
            }
        }, {
            key: "setPosition",
            value: function(t) {
                var e = this.params, o = this.parent, n = this.width, r = this.height, i = this.globalX, a = this.globalY, u = !1;
                if (o) {
                    if (e.positionX) {
                        switch (e.positionX) {
                          case "center":
                            t.x = o.globalX + o.width / 2 - n / 2;
                            break;

                          case "left":
                            t.x = o.globalX;
                            break;

                          case "right":
                            t.x = o.globalX + o.width - n;
                        }
                        u = !0;
                    }
                    if (e.positionY) {
                        switch (e.positionY) {
                          case "center":
                            t.y = o.globalY + o.height / 2 - r / 2;
                            break;

                          case "top":
                            t.y = o.globalY;
                            break;

                          case "bottom":
                            t.y = o.globalY + o.height - r;
                        }
                        u = !0;
                    }
                }
                u || (t.x = i, t.y = a);
            }
        }, {
            key: "style",
            set: function(t) {
                this.params = u({}, this.params, t);
            },
            get: function() {
                return this.params;
            }
        } ]), e;
    }(a.default);
}, /*!****************************!*\
  !*** ./AbstractGraphic.js ***!
  \****************************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), o.d(e, "default", function() {
        return i;
    });
    var r = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), i = function() {
        function t() {
            n(this, t), this.isLeaf = !1, this.isHidden = !1, this._x = 0, this._y = 0, this._z = 0, 
            this.init.apply(this, arguments);
        }
        return r(t, [ {
            key: "init",
            value: function() {
                this.update();
            }
        }, {
            key: "draw",
            value: function() {}
        }, {
            key: "update",
            value: function() {
                this.draw();
            }
        }, {
            key: "moveToGroup",
            value: function(t) {
                this.group = t;
            }
        }, {
            key: "clearGroup",
            value: function() {
                this.group = null;
            }
        }, {
            key: "bringToTop",
            value: function() {
                if (null == this.group) throw new Error("Cannot bring to top without group");
            }
        }, {
            key: "hide",
            value: function() {
                this.isHidden || (this.isHidden = !0, this.position = {
                    x: this.x,
                    y: this.y
                }, this.x = -1e4, this.y = -1e4);
            }
        }, {
            key: "show",
            value: function() {
                this.isHidden && (this.isHidden = !1, this.x = this.position.x, this.y = this.position.y);
            }
        }, {
            key: "bringToTop",
            value: function() {}
        }, {
            key: "x",
            set: function(t) {
                this._x = t, this.update();
            },
            get: function() {
                return this._x;
            }
        }, {
            key: "y",
            set: function(t) {
                this._y = t, this.update();
            },
            get: function() {
                return this._y;
            }
        }, {
            key: "globalX",
            get: function() {
                return this.parent ? this.x + this.parent.x : this.x;
            }
        }, {
            key: "globalY",
            get: function() {
                return this.parent ? this.y + this.parent.y : this.y;
            }
        }, {
            key: "z",
            set: function(t) {
                this._z = t, this.parent && this.parent.update();
            },
            get: function() {
                return this._z;
            }
        } ]), t;
    }();
}, /*!******************************!*\
  !*** ./AbstractComponent.js ***!
  \******************************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = o(/*! ./AbstractGraphic */ 2);
    o.d(e, "default", function() {
        return l;
    });
    var u = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), s = function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n);
        }
        if ("value" in r) return r.value;
        var a = r.get;
        if (void 0 !== a) return a.call(n);
    }, l = function(t) {
        function e() {
            var t;
            n(this, e);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            return r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(i)));
        }
        return i(e, t), u(e, [ {
            key: "init",
            value: function() {
                this.children = [], this.children.delete = function(t) {
                    var e = this.indexOf(t);
                    return -1 != e ? (this.splice(e, 1), t) : null;
                }, this.children.add = function(t) {
                    this.push(t);
                }, s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
            }
        }, {
            key: "update",
            value: function() {
                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this), 
                this.sort();
                var t = !0, o = !1, n = void 0;
                try {
                    for (var r, i = this.children[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                        r.value.update();
                    }
                } catch (t) {
                    o = !0, n = t;
                } finally {
                    try {
                        !t && i.return && i.return();
                    } finally {
                        if (o) throw n;
                    }
                }
            }
        }, {
            key: "add",
            value: function(t) {
                this.children.add(t), t.moveToGroup(this.group), t.parent = this, t.z = this.z + 1, 
                this.update();
            }
        }, {
            key: "remove",
            value: function(t) {
                this.children.delete(t), t.parent = null, t.clearGroup(), this.update();
            }
        }, {
            key: "moveToGroup",
            value: function(t) {
                this.group = t;
                var e = !0, o = !1, n = void 0;
                try {
                    for (var r, i = this.children[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                        r.value.moveToGroup(this.group);
                    }
                } catch (t) {
                    o = !0, n = t;
                } finally {
                    try {
                        !e && i.return && i.return();
                    } finally {
                        if (o) throw n;
                    }
                }
            }
        }, {
            key: "clearGroup",
            value: function() {
                var t = !0, e = !1, o = void 0;
                try {
                    for (var n, r = this.children[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
                        n.value.clearGroup();
                    }
                } catch (t) {
                    e = !0, o = t;
                } finally {
                    try {
                        !t && r.return && r.return();
                    } finally {
                        if (e) throw o;
                    }
                }
                this.group = null;
            }
        }, {
            key: "hide",
            value: function() {
                this.isHidden || (this.isHidden = !0, this.position = {
                    x: this.x,
                    y: this.y
                }, this.x = -1e4, this.y = -1e4);
            }
        }, {
            key: "show",
            value: function() {
                this.isHidden && (this.isHidden = !1, this.x = this.position.x, this.y = this.position.y);
            }
        }, {
            key: "sortFunc",
            value: function(t, e) {
                return t.z > e.z;
            }
        }, {
            key: "bringToTop",
            value: function() {
                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "bringToTop", this).call(this);
                var t = !0, o = !1, n = void 0;
                try {
                    for (var r, i = this.children[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                        r.value.bringToTop();
                    }
                } catch (t) {
                    o = !0, n = t;
                } finally {
                    try {
                        !t && i.return && i.return();
                    } finally {
                        if (o) throw n;
                    }
                }
            }
        }, {
            key: "sort",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.sortFunc;
                this.children.sort(t);
                var e = !0, o = !1, n = void 0;
                try {
                    for (var r, i = this.children[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                        r.value.bringToTop();
                    }
                } catch (t) {
                    o = !0, n = t;
                } finally {
                    try {
                        !e && i.return && i.return();
                    } finally {
                        if (o) throw n;
                    }
                }
            }
        }, {
            key: "width",
            set: function(t) {
                this._width = t, this.update();
            },
            get: function() {
                return this._width;
            }
        }, {
            key: "height",
            set: function(t) {
                this._height = t, this.update();
            },
            get: function() {
                return this._height;
            }
        } ]), e;
    }(a.default);
}, /*!**********************!*\
  !*** ./Container.js ***!
  \**********************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = o(/*! ./AbstractComponent */ 3), u = o(/*! ./Game */ 0);
    o.d(e, "default", function() {
        return c;
    });
    var s = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), l = function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n);
        }
        if ("value" in r) return r.value;
        var a = r.get;
        if (void 0 !== a) return a.call(n);
    }, c = function(t) {
        function e(t, o) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : game.camera.width, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : game.camera.height;
            n(this, e);
            var u = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, o, i, a));
            return u.update(), u;
        }
        return i(e, t), s(e, [ {
            key: "init",
            value: function(t, o, n, r) {
                this._x = t, this._y = o, this._width = n, this._height = r, this.setupBorder(), 
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this);
            }
        }, {
            key: "setupBorder",
            value: function() {
                var t = o.i(u.getGame)();
                this.border = t.add.graphics(0, 0), this.border.fixedToCamera = !0;
            }
        }, {
            key: "drawBorder",
            value: function() {
                var t = this.border, e = this.globalX, o = this.globalY, n = this.width, r = this.height;
                t.clear(), t.lineStyle(3, 16777215, 1), t.moveTo(e, o), t.beginFill(16777215, .2), 
                t.drawRect(e, o, n, r), t.endFill();
            }
        }, {
            key: "draw",
            value: function() {
                this.drawBorder();
            }
        }, {
            key: "moveToGroup",
            value: function(t) {
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveToGroup", this).call(this, t), 
                this.group && this.group.add(this.border);
            }
        } ]), e;
    }(a.default);
}, /*!******************!*\
  !*** ./index.js ***!
  \******************/
function(t, e, o) {
    t.exports = {
        AbstractGraphic: o(/*! ./AbstractGraphic */ 2).default,
        AbstractComponent: o(/*! ./AbstractComponent */ 3).default,
        AbstractLeaf: o(/*! ./AbstractLeaf */ 1).default,
        Button: o(/*! ./Button */ 6).default,
        Container: o(/*! ./Container */ 4).default,
        Image: o(/*! ./Image */ 7).default,
        Input: o(/*! ./Input */ 8).default,
        Text: o(/*! ./Text */ 10).default,
        RootContainer: o(/*! ./RootContainer */ 9).default,
        Game: o(/*! ./Game */ 0)
    };
}, /*!*******************!*\
  !*** ./Button.js ***!
  \*******************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = o(/*! ./AbstractLeaf */ 1), u = o(/*! ./Game */ 0);
    o.d(e, "default", function() {
        return c;
    });
    var s = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), l = function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n);
        }
        if ("value" in r) return r.value;
        var a = r.get;
        if (void 0 !== a) return a.call(n);
    }, c = function(t) {
        function e(t, o, i, a, u, s) {
            n(this, e);
            var l = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, o, i, a, u, s));
            return l.update(), l;
        }
        return i(e, t), s(e, [ {
            key: "init",
            value: function(t, e, o, n, r, i) {
                this._x = t, this._y = e, this.onClickList = [], this.setupButton(o, n, r, i);
            }
        }, {
            key: "draw",
            value: function() {
                this.setPosition(this.button);
            }
        }, {
            key: "setupButton",
            value: function(t, e, n, r) {
                var i = this.x, a = this.y, s = o.i(u.getGame)();
                this.button = s.add.button(i, a, t, this.onClick, this, e, n, r);
            }
        }, {
            key: "onClick",
            value: function() {
                var t = !0, e = !1, o = void 0;
                try {
                    for (var n, r = this.onClickList[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
                        var i = n.value;
                        i(), i.once && (i.once = !1, this.removeOnClick(i));
                    }
                } catch (t) {
                    e = !0, o = t;
                } finally {
                    try {
                        !t && r.return && r.return();
                    } finally {
                        if (e) throw o;
                    }
                }
            }
        }, {
            key: "addOnClick",
            value: function(t) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (t.once = !0), 
                this.onClickList.push(t);
            }
        }, {
            key: "removeOnClick",
            value: function(t) {
                var e = this.onClickList.indexOf(t);
                -1 != e && this.onClickList.splice(e, 1);
            }
        }, {
            key: "moveToGroup",
            value: function(t) {
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveToGroup", this).call(this, t), 
                this.group && this.group.add(this.button);
            }
        }, {
            key: "clearGroup",
            value: function() {
                this.group.remove(this.button), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "clearGroup", this).call(this);
            }
        }, {
            key: "bringToTop",
            value: function() {
                this.group && this.group.bringToTop(this.button);
            }
        } ]), e;
    }(a.default);
}, /*!******************!*\
  !*** ./Image.js ***!
  \******************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = o(/*! ./AbstractLeaf */ 1), u = o(/*! ./Game */ 0);
    o.d(e, "default", function() {
        return c;
    });
    var s = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), l = function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n);
        }
        if ("value" in r) return r.value;
        var a = r.get;
        if (void 0 !== a) return a.call(n);
    }, c = function(t) {
        function e(t, o, i) {
            n(this, e);
            var a = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, o, i));
            return a.update(), a;
        }
        return i(e, t), s(e, [ {
            key: "init",
            value: function(t, e, o) {
                this._x = t, this._y = e, this.setupImage(o);
            }
        }, {
            key: "draw",
            value: function() {
                this.setPosition(this.image);
            }
        }, {
            key: "setupImage",
            value: function(t) {
                var e = this.x, n = this.y, r = o.i(u.getGame)();
                this.image = r.add.image(e, n, t);
            }
        }, {
            key: "moveToGroup",
            value: function(t) {
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveToGroup", this).call(this, t), 
                this.group && this.group.add(this.image);
            }
        }, {
            key: "clearGroup",
            value: function() {
                this.group.remove(this.image), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "clearGroup", this).call(this);
            }
        }, {
            key: "bringToTop",
            value: function() {
                this.group && this.group.bringToTop(this.image);
            }
        } ]), e;
    }(a.default);
}, /*!******************!*\
  !*** ./Input.js ***!
  \******************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = o(/*! ./AbstractLeaf */ 1), u = o(/*! ./Game */ 0), s = o(/*! canvasinput */ 11), l = o.n(s), c = o(/*! ./utils/other */ 12);
    o.d(e, "default", function() {
        return _;
    });
    var d = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        }
        return t;
    }, h = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), f = function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n);
        }
        if ("value" in r) return r.value;
        var a = r.get;
        if (void 0 !== a) return a.call(n);
    }, p = function t(e, o, n, r) {
        var i = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === i) {
            var a = Object.getPrototypeOf(e);
            null !== a && t(a, o, n, r);
        } else if ("value" in i && i.writable) i.value = n; else {
            var u = i.set;
            void 0 !== u && u.call(r, n);
        }
        return n;
    }, _ = function(t) {
        function e(t, o, i, a) {
            var u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            n(this, e);
            var s = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, o, i, a, u));
            return s.update(), s;
        }
        return i(e, t), h(e, [ {
            key: "init",
            value: function(t, e, o, n, r) {
                this._x = t, this._y = e, this.width = o, this.height = n, this.params = r, this.setupInput(t, e, o, n);
            }
        }, {
            key: "setupInput",
            value: function(t, e, n, r) {
                var i = this, a = o.i(u.getGame)(), s = a.add.bitmapData(n, r);
                this.inputSprite = a.add.sprite(t, e, s), this.canvasInput = new l.a(d({
                    canvas: s.canvas,
                    width: n - 15,
                    height: r - 15
                }, this.style)), this.inputSprite.inputEnabled = !0, this.inputSprite.input.useHandCursor = !0, 
                this.inputSprite.events.onInputUp.add(function() {
                    return i.canvasInput.focus();
                }), this.inputSprite.events.onInputOut.add(function() {
                    a.input.onDown.addOnce(function() {
                        return i.canvasInput.blur();
                    });
                });
            }
        }, {
            key: "draw",
            value: function() {
                this.setPosition(this.inputSprite);
            }
        }, {
            key: "style",
            set: function(t) {
                p(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "style", t, this);
                var n = !0, r = !1, i = void 0;
                try {
                    for (var a, u = Object.keys(this.style)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                        var s = a.value;
                        o.i(c.a)(this.canvasInput[s]) && this.canvasInput[s](this.style[s]), "placeHolder" == s && this.canvasInput.value("");
                    }
                } catch (t) {
                    r = !0, i = t;
                } finally {
                    try {
                        !n && u.return && u.return();
                    } finally {
                        if (r) throw i;
                    }
                }
            },
            get: function() {
                return f(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "style", this);
            }
        } ]), e;
    }(a.default);
}, /*!**************************!*\
  !*** ./RootContainer.js ***!
  \**************************/
function(t, e, o) {
    "use strict";
    function n() {
        var t = o.i(i.getGame)(), e = new r.default(0, 0);
        return e.moveToGroup(t.GUIGroup), t.rootContainer = e, e;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = o(/*! ./Container */ 4), i = o(/*! ./Game */ 0);
    e.default = n;
}, /*!*****************!*\
  !*** ./Text.js ***!
  \*****************/
function(t, e, o) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = o(/*! ./AbstractLeaf */ 1), u = o(/*! ./Game */ 0);
    o.d(e, "default", function() {
        return d;
    });
    var s = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), l = function t(e, o, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n);
        }
        if ("value" in r) return r.value;
        var a = r.get;
        if (void 0 !== a) return a.call(n);
    }, c = function t(e, o, n, r) {
        var i = Object.getOwnPropertyDescriptor(e, o);
        if (void 0 === i) {
            var a = Object.getPrototypeOf(e);
            null !== a && t(a, o, n, r);
        } else if ("value" in i && i.writable) i.value = n; else {
            var u = i.set;
            void 0 !== u && u.call(r, n);
        }
        return n;
    }, d = function(t) {
        function e(t, o, i) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n(this, e);
            var u = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, o, i, a));
            return u.update(), u;
        }
        return i(e, t), s(e, [ {
            key: "init",
            value: function(t, e, o, n) {
                this._x = t, this._y = e, this.params = n, this.setupText(o);
            }
        }, {
            key: "draw",
            value: function() {
                this.setPosition(this.text);
            }
        }, {
            key: "setupText",
            value: function(t) {
                var e = this.x, n = this.y, r = o.i(u.getGame)();
                this.text = r.add.text(e, n, t), this.style = this.params;
            }
        }, {
            key: "moveToGroup",
            value: function(t) {
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveToGroup", this).call(this, t), 
                this.group && this.group.add(this.text);
            }
        }, {
            key: "clearGroup",
            value: function() {
                this.group.remove(this.text), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "clearGroup", this).call(this);
            }
        }, {
            key: "bringToTop",
            value: function() {
                this.group && this.group.bringToTop(this.text);
            }
        }, {
            key: "alpha",
            set: function(t) {
                this.text.alpha = t;
            }
        }, {
            key: "style",
            set: function(t) {
                c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "style", t, this), 
                this.text.setStyle(this.params), this.setPosition(this.text);
            },
            get: function() {
                return l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "style", this);
            }
        } ]), e;
    }(a.default);
}, /*!**************************************!*\
  !*** ./~/canvasinput/CanvasInput.js ***!
  \**************************************/
function(t, e, o) {
    /*!
 *  CanvasInput v1.2.6
 *  http://goldfirestudios.com/blog/108/CanvasInput-HTML5-Canvas-Text-Input
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
    !function() {
        var o = [];
        (window.CanvasInput = function(t) {
            var e = this;
            t = t || {}, e._canvas = t.canvas || null, e._ctx = e._canvas ? e._canvas.getContext("2d") : null, 
            e._x = t.x || 0, e._y = t.y || 0, e._extraX = t.extraX || 0, e._extraY = t.extraY || 0, 
            e._fontSize = t.fontSize || 14, e._fontFamily = t.fontFamily || "Arial", e._fontColor = t.fontColor || "#000", 
            e._placeHolderColor = t.placeHolderColor || "#bfbebd", e._fontWeight = t.fontWeight || "normal", 
            e._fontStyle = t.fontStyle || "normal", e._fontShadowColor = t.fontShadowColor || "", 
            e._fontShadowBlur = t.fontShadowBlur || 0, e._fontShadowOffsetX = t.fontShadowOffsetX || 0, 
            e._fontShadowOffsetY = t.fontShadowOffsetY || 0, e._readonly = t.readonly || !1, 
            e._maxlength = t.maxlength || null, e._width = t.width || 150, e._height = t.height || e._fontSize, 
            e._padding = t.padding >= 0 ? t.padding : 5, e._borderWidth = t.borderWidth >= 0 ? t.borderWidth : 1, 
            e._borderColor = t.borderColor || "#959595", e._borderRadius = t.borderRadius >= 0 ? t.borderRadius : 3, 
            e._backgroundImage = t.backgroundImage || "", e._boxShadow = t.boxShadow || "1px 1px 0px rgba(255, 255, 255, 1)", 
            e._innerShadow = t.innerShadow || "0px 0px 4px rgba(0, 0, 0, 0.4)", e._selectionColor = t.selectionColor || "rgba(179, 212, 253, 0.8)", 
            e._placeHolder = t.placeHolder || "", e._value = (t.value || e._placeHolder) + "", 
            e._onsubmit = t.onsubmit || function() {}, e._onkeydown = t.onkeydown || function() {}, 
            e._onkeyup = t.onkeyup || function() {}, e._onfocus = t.onfocus || function() {}, 
            e._onblur = t.onblur || function() {}, e._cursor = !1, e._cursorPos = 0, e._hasFocus = !1, 
            e._selection = [ 0, 0 ], e._wasOver = !1, e.boxShadow(e._boxShadow, !0), e._calcWH(), 
            e._renderCanvas = document.createElement("canvas"), e._renderCanvas.setAttribute("width", e.outerW), 
            e._renderCanvas.setAttribute("height", e.outerH), e._renderCtx = e._renderCanvas.getContext("2d"), 
            e._shadowCanvas = document.createElement("canvas"), e._shadowCanvas.setAttribute("width", e._width + 2 * e._padding), 
            e._shadowCanvas.setAttribute("height", e._height + 2 * e._padding), e._shadowCtx = e._shadowCanvas.getContext("2d"), 
            void 0 !== t.backgroundGradient ? (e._backgroundColor = e._renderCtx.createLinearGradient(0, 0, 0, e.outerH), 
            e._backgroundColor.addColorStop(0, t.backgroundGradient[0]), e._backgroundColor.addColorStop(1, t.backgroundGradient[1])) : e._backgroundColor = t.backgroundColor || "#fff", 
            e._canvas && (e._canvas.addEventListener("mousemove", function(t) {
                t = t || window.event, e.mousemove(t, e);
            }, !1), e._canvas.addEventListener("mousedown", function(t) {
                t = t || window.event, e.mousedown(t, e);
            }, !1), e._canvas.addEventListener("mouseup", function(t) {
                t = t || window.event, e.mouseup(t, e);
            }, !1));
            var n = function(t) {
                t = t || window.event, e._hasFocus && !e._mouseDown && e.blur();
            };
            window.addEventListener("mouseup", n, !0), window.addEventListener("touchend", n, !0), 
            e._hiddenInput = document.createElement("input"), e._hiddenInput.type = "text", 
            e._hiddenInput.style.position = "absolute", e._hiddenInput.style.opacity = 0, e._hiddenInput.style.pointerEvents = "none", 
            e._hiddenInput.style.zIndex = 0, e._updateHiddenInput(), e._maxlength && (e._hiddenInput.maxLength = e._maxlength), 
            document.body.appendChild(e._hiddenInput), e._hiddenInput.value = e._value, e._hiddenInput.addEventListener("keydown", function(t) {
                t = t || window.event, e._hasFocus && (window.focus(), e._hiddenInput.focus(), e.keydown(t, e));
            }), e._hiddenInput.addEventListener("keyup", function(t) {
                t = t || window.event, e._value = e._hiddenInput.value, e._cursorPos = e._hiddenInput.selectionStart, 
                e._selection = [ e._hiddenInput.selectionStart, e._hiddenInput.selectionEnd ], e.render(), 
                e._hasFocus && e._onkeyup(t, e);
            }), o.push(e), e._inputsIndex = o.length - 1, e.render();
        }).prototype = {
            canvas: function(t) {
                var e = this;
                return void 0 !== t ? (e._canvas = t, e._ctx = e._canvas.getContext("2d"), e.render()) : e._canvas;
            },
            x: function(t) {
                var e = this;
                return void 0 !== t ? (e._x = t, e._updateHiddenInput(), e.render()) : e._x;
            },
            y: function(t) {
                var e = this;
                return void 0 !== t ? (e._y = t, e._updateHiddenInput(), e.render()) : e._y;
            },
            extraX: function(t) {
                var e = this;
                return void 0 !== t ? (e._extraX = t, e._updateHiddenInput(), e.render()) : e._extraX;
            },
            extraY: function(t) {
                var e = this;
                return void 0 !== t ? (e._extraY = t, e._updateHiddenInput(), e.render()) : e._extraY;
            },
            fontSize: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontSize = t, e.render()) : e._fontSize;
            },
            fontFamily: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontFamily = t, e.render()) : e._fontFamily;
            },
            fontColor: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontColor = t, e.render()) : e._fontColor;
            },
            placeHolderColor: function(t) {
                var e = this;
                return void 0 !== t ? (e._placeHolderColor = t, e.render()) : e._placeHolderColor;
            },
            fontWeight: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontWeight = t, e.render()) : e._fontWeight;
            },
            fontStyle: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontStyle = t, e.render()) : e._fontStyle;
            },
            fontShadowColor: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontShadowColor = t, e.render()) : e._fontShadowColor;
            },
            fontShadowBlur: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontShadowBlur = t, e.render()) : e._fontShadowBlur;
            },
            fontShadowOffsetX: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontShadowOffsetX = t, e.render()) : e._fontShadowOffsetX;
            },
            fontShadowOffsetY: function(t) {
                var e = this;
                return void 0 !== t ? (e._fontShadowOffsetY = t, e.render()) : e._fontShadowOffsetY;
            },
            width: function(t) {
                var e = this;
                return void 0 !== t ? (e._width = t, e._calcWH(), e._updateCanvasWH(), e._updateHiddenInput(), 
                e.render()) : e._width;
            },
            height: function(t) {
                var e = this;
                return void 0 !== t ? (e._height = t, e._calcWH(), e._updateCanvasWH(), e._updateHiddenInput(), 
                e.render()) : e._height;
            },
            padding: function(t) {
                var e = this;
                return void 0 !== t ? (e._padding = t, e._calcWH(), e._updateCanvasWH(), e.render()) : e._padding;
            },
            borderWidth: function(t) {
                var e = this;
                return void 0 !== t ? (e._borderWidth = t, e._calcWH(), e._updateCanvasWH(), e.render()) : e._borderWidth;
            },
            borderColor: function(t) {
                var e = this;
                return void 0 !== t ? (e._borderColor = t, e.render()) : e._borderColor;
            },
            borderRadius: function(t) {
                var e = this;
                return void 0 !== t ? (e._borderRadius = t, e.render()) : e._borderRadius;
            },
            backgroundColor: function(t) {
                var e = this;
                return void 0 !== t ? (e._backgroundColor = t, e.render()) : e._backgroundColor;
            },
            backgroundGradient: function(t) {
                var e = this;
                return void 0 !== t ? (e._backgroundColor = e._renderCtx.createLinearGradient(0, 0, 0, e.outerH), 
                e._backgroundColor.addColorStop(0, t[0]), e._backgroundColor.addColorStop(1, t[1]), 
                e.render()) : e._backgroundColor;
            },
            boxShadow: function(t, e) {
                var o = this;
                if (void 0 === t) return o._boxShadow;
                var n = t.split("px ");
                return o._boxShadow = {
                    x: "none" === o._boxShadow ? 0 : parseInt(n[0], 10),
                    y: "none" === o._boxShadow ? 0 : parseInt(n[1], 10),
                    blur: "none" === o._boxShadow ? 0 : parseInt(n[2], 10),
                    color: "none" === o._boxShadow ? "" : n[3]
                }, o._boxShadow.x < 0 ? (o.shadowL = Math.abs(o._boxShadow.x) + o._boxShadow.blur, 
                o.shadowR = o._boxShadow.blur + o._boxShadow.x) : (o.shadowL = Math.abs(o._boxShadow.blur - o._boxShadow.x), 
                o.shadowR = o._boxShadow.blur + o._boxShadow.x), o._boxShadow.y < 0 ? (o.shadowT = Math.abs(o._boxShadow.y) + o._boxShadow.blur, 
                o.shadowB = o._boxShadow.blur + o._boxShadow.y) : (o.shadowT = Math.abs(o._boxShadow.blur - o._boxShadow.y), 
                o.shadowB = o._boxShadow.blur + o._boxShadow.y), o.shadowW = o.shadowL + o.shadowR, 
                o.shadowH = o.shadowT + o.shadowB, o._calcWH(), e ? void 0 : (o._updateCanvasWH(), 
                o.render());
            },
            innerShadow: function(t) {
                var e = this;
                return void 0 !== t ? (e._innerShadow = t, e.render()) : e._innerShadow;
            },
            selectionColor: function(t) {
                var e = this;
                return void 0 !== t ? (e._selectionColor = t, e.render()) : e._selectionColor;
            },
            placeHolder: function(t) {
                var e = this;
                return void 0 !== t ? (e._placeHolder = t, e.render()) : e._placeHolder;
            },
            value: function(t) {
                var e = this;
                return void 0 !== t ? (e._value = t + "", e._hiddenInput.value = t + "", e._cursorPos = e._clipText().length, 
                e.render(), e) : e._value === e._placeHolder ? "" : e._value;
            },
            onsubmit: function(t) {
                var e = this;
                if (void 0 !== t) return e._onsubmit = t, e;
                e._onsubmit();
            },
            onkeydown: function(t) {
                var e = this;
                if (void 0 !== t) return e._onkeydown = t, e;
                e._onkeydown();
            },
            onkeyup: function(t) {
                var e = this;
                if (void 0 !== t) return e._onkeyup = t, e;
                e._onkeyup();
            },
            focus: function(t) {
                var e = this;
                if (!e._hasFocus) {
                    e._onfocus(e);
                    for (var n = 0; n < o.length; n++) o[n]._hasFocus && o[n].blur();
                }
                e._selectionUpdated ? delete e._selectionUpdated : e._selection = [ 0, 0 ], e._hasFocus = !0, 
                e._readonly ? e._hiddenInput.readOnly = !0 : (e._hiddenInput.readOnly = !1, e._cursorPos = "number" == typeof t ? t : e._clipText().length, 
                e._placeHolder === e._value && (e._value = "", e._hiddenInput.value = ""), e._cursor = !0, 
                e._cursorInterval && clearInterval(e._cursorInterval), e._cursorInterval = setInterval(function() {
                    e._cursor = !e._cursor, e.render();
                }, 500));
                var r = e._selection[0] > 0 || e._selection[1] > 0;
                return e._hiddenInput.focus(), e._hiddenInput.selectionStart = r ? e._selection[0] : e._cursorPos, 
                e._hiddenInput.selectionEnd = r ? e._selection[1] : e._cursorPos, e.render();
            },
            blur: function(t) {
                var e = t || this;
                return e._onblur(e), e._cursorInterval && clearInterval(e._cursorInterval), e._hasFocus = !1, 
                e._cursor = !1, e._selection = [ 0, 0 ], e._hiddenInput.blur(), "" === e._value && (e._value = e._placeHolder), 
                e.render();
            },
            keydown: function(t, e) {
                var n = t.which;
                if (t.shiftKey, !e._readonly && e._hasFocus) {
                    if (e._onkeydown(t, e), 65 === n && (t.ctrlKey || t.metaKey)) return e.selectText(), 
                    t.preventDefault(), e.render();
                    if (17 === n || t.metaKey || t.ctrlKey) return e;
                    if (13 === n) t.preventDefault(), e._onsubmit(t, e); else if (9 === n && (t.preventDefault(), 
                    o.length > 1)) {
                        var r = o[e._inputsIndex + 1] ? e._inputsIndex + 1 : 0;
                        e.blur(), setTimeout(function() {
                            o[r].focus();
                        }, 10);
                    }
                    return e._value = e._hiddenInput.value, e._cursorPos = e._hiddenInput.selectionStart, 
                    e._selection = [ 0, 0 ], e.render();
                }
            },
            click: function(t, e) {
                var o = e._mousePos(t), n = o.x, r = o.y;
                return e._endSelection ? (delete e._endSelection, void delete e._selectionUpdated) : e._canvas && e._overInput(n, r) || !e._canvas ? e._mouseDown ? (e._mouseDown = !1, 
                e.click(t, e), e.focus(e._clickPos(n, r))) : void 0 : e.blur();
            },
            mousemove: function(t, e) {
                var o = e._mousePos(t), n = o.x, r = o.y, i = e._overInput(n, r);
                if (i && e._canvas ? (e._canvas.style.cursor = "text", e._wasOver = !0) : e._wasOver && e._canvas && (e._canvas.style.cursor = "default", 
                e._wasOver = !1), e._hasFocus && e._selectionStart >= 0) {
                    var a = e._clickPos(n, r), u = Math.min(e._selectionStart, a), s = Math.max(e._selectionStart, a);
                    if (!i) return e._selectionUpdated = !0, e._endSelection = !0, delete e._selectionStart, 
                    void e.render();
                    e._selection[0] === u && e._selection[1] === s || (e._selection = [ u, s ], e.render());
                }
            },
            mousedown: function(t, e) {
                var o = e._mousePos(t), n = o.x, r = o.y, i = e._overInput(n, r);
                e._mouseDown = i, e._hasFocus && i && (e._selectionStart = e._clickPos(n, r));
            },
            mouseup: function(t, e) {
                var o = e._mousePos(t), n = o.x, r = o.y, i = e._clickPos(n, r) !== e._selectionStart;
                e._hasFocus && e._selectionStart >= 0 && e._overInput(n, r) && i ? (e._selectionUpdated = !0, 
                delete e._selectionStart, e.render()) : delete e._selectionStart, e.click(t, e);
            },
            selectText: function(t) {
                var e = this, t = t || [ 0, e._value.length ];
                return setTimeout(function() {
                    e._selection = [ t[0], t[1] ], e._hiddenInput.selectionStart = t[0], e._hiddenInput.selectionEnd = t[1], 
                    e.render();
                }, 1), e;
            },
            renderCanvas: function() {
                return this._renderCanvas;
            },
            render: function() {
                var t = this, e = t._renderCtx, o = t.outerW, n = t.outerH, r = t._borderRadius, i = t._borderWidth, a = t.shadowW, u = t.shadowH;
                e && (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.shadowOffsetX = t._boxShadow.x, 
                e.shadowOffsetY = t._boxShadow.y, e.shadowBlur = t._boxShadow.blur, e.shadowColor = t._boxShadow.color, 
                t._borderWidth > 0 && (e.fillStyle = t._borderColor, t._roundedRect(e, t.shadowL, t.shadowT, o - a, n - u, r), 
                e.fill(), e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.shadowBlur = 0), t._drawTextBox(function() {
                    e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.shadowBlur = 0;
                    var s = t._clipText(), l = t._padding + t._borderWidth + t.shadowT;
                    if (t._selection[1] > 0) {
                        var c = t._textWidth(s.substring(0, t._selection[0])), d = t._textWidth(s.substring(t._selection[0], t._selection[1]));
                        e.fillStyle = t._selectionColor, e.fillRect(l + c, l, d, t._height);
                    }
                    if (t._cursor) {
                        var h = t._textWidth(s.substring(0, t._cursorPos));
                        e.fillStyle = t._fontColor, e.fillRect(l + h, l, 1, t._height);
                    }
                    var f = t._padding + t._borderWidth + t.shadowL, p = Math.round(l + t._height / 2);
                    s = "" === s && t._placeHolder ? t._placeHolder : s, e.fillStyle = "" !== t._value && t._value !== t._placeHolder ? t._fontColor : t._placeHolderColor, 
                    e.font = t._fontStyle + " " + t._fontWeight + " " + t._fontSize + "px " + t._fontFamily, 
                    e.shadowColor = t._fontShadowColor, e.shadowBlur = t._fontShadowBlur, e.shadowOffsetX = t._fontShadowOffsetX, 
                    e.shadowOffsetY = t._fontShadowOffsetY, e.textAlign = "left", e.textBaseline = "middle", 
                    e.fillText(s, f, p);
                    var _ = t._innerShadow.split("px "), v = "none" === t._innerShadow ? 0 : parseInt(_[0], 10), y = "none" === t._innerShadow ? 0 : parseInt(_[1], 10), b = "none" === t._innerShadow ? 0 : parseInt(_[2], 10), w = "none" === t._innerShadow ? "" : _[3];
                    if (b > 0) {
                        var g = t._shadowCtx, x = g.canvas.width, O = g.canvas.height;
                        g.clearRect(0, 0, x, O), g.shadowBlur = b, g.shadowColor = w, g.shadowOffsetX = 0, 
                        g.shadowOffsetY = y, g.fillRect(-1 * o, -100, 3 * o, 100), g.shadowOffsetX = v, 
                        g.shadowOffsetY = 0, g.fillRect(x, -1 * n, 100, 3 * n), g.shadowOffsetX = 0, g.shadowOffsetY = y, 
                        g.fillRect(-1 * o, O, 3 * o, 100), g.shadowOffsetX = v, g.shadowOffsetY = 0, g.fillRect(-100, -1 * n, 100, 3 * n), 
                        t._roundedRect(e, i + t.shadowL, i + t.shadowT, o - 2 * i - a, n - 2 * i - u, r), 
                        e.clip(), e.drawImage(t._shadowCanvas, 0, 0, x, O, i + t.shadowL, i + t.shadowT, x, O);
                    }
                    return t._ctx && (t._ctx.clearRect(t._x, t._y, e.canvas.width, e.canvas.height), 
                    t._ctx.drawImage(t._renderCanvas, t._x, t._y)), t;
                }));
            },
            destroy: function() {
                var t = this, e = o.indexOf(t);
                -1 != e && o.splice(e, 1), t._hasFocus && t.blur(), document.body.removeChild(t._hiddenInput), 
                t._renderCanvas = null, t._shadowCanvas = null, t._renderCtx = null;
            },
            _drawTextBox: function(t) {
                var e = this, o = e._renderCtx, n = e.outerW, r = e.outerH, i = e._borderRadius, a = e._borderWidth, u = e.shadowW, s = e.shadowH;
                if ("" === e._backgroundImage) o.fillStyle = e._backgroundColor, e._roundedRect(o, a + e.shadowL, a + e.shadowT, n - 2 * a - u, r - 2 * a - s, i), 
                o.fill(), t(); else {
                    var l = new Image();
                    l.src = e._backgroundImage, l.onload = function() {
                        o.drawImage(l, 0, 0, l.width, l.height, a + e.shadowL, a + e.shadowT, n, r), t();
                    };
                }
            },
            _clearSelection: function() {
                var t = this;
                if (t._selection[1] > 0) {
                    var e = t._selection[0], o = t._selection[1];
                    return t._value = t._value.substr(0, e) + t._value.substr(o), t._cursorPos = e, 
                    t._cursorPos = t._cursorPos < 0 ? 0 : t._cursorPos, t._selection = [ 0, 0 ], !0;
                }
                return !1;
            },
            _clipText: function(t) {
                var e = this;
                t = void 0 === t ? e._value : t;
                var o = e._textWidth(t), n = o / (e._width - e._padding);
                return (n > 1 ? t.substr(-1 * Math.floor(t.length / n)) : t) + "";
            },
            _textWidth: function(t) {
                var e = this, o = e._renderCtx;
                return o.font = e._fontStyle + " " + e._fontWeight + " " + e._fontSize + "px " + e._fontFamily, 
                o.textAlign = "left", o.measureText(t).width;
            },
            _calcWH: function() {
                var t = this;
                t.outerW = t._width + 2 * t._padding + 2 * t._borderWidth + t.shadowW, t.outerH = t._height + 2 * t._padding + 2 * t._borderWidth + t.shadowH;
            },
            _updateCanvasWH: function() {
                var t = this, e = t._renderCanvas.width, o = t._renderCanvas.height;
                t._renderCanvas.setAttribute("width", t.outerW), t._renderCanvas.setAttribute("height", t.outerH), 
                t._shadowCanvas.setAttribute("width", t._width + 2 * t._padding), t._shadowCanvas.setAttribute("height", t._height + 2 * t._padding), 
                t._ctx && t._ctx.clearRect(t._x, t._y, e, o);
            },
            _updateHiddenInput: function() {
                var t = this;
                t._hiddenInput.style.left = t._x + t._extraX + (t._canvas ? t._canvas.offsetLeft : 0) + "px", 
                t._hiddenInput.style.top = t._y + t._extraY + (t._canvas ? t._canvas.offsetTop : 0) + "px", 
                t._hiddenInput.style.width = t._width + 2 * t._padding + "px", t._hiddenInput.style.height = t._height + 2 * t._padding + "px";
            },
            _roundedRect: function(t, e, o, n, r, i) {
                n < 2 * i && (i = n / 2), r < 2 * i && (i = r / 2), t.beginPath(), t.moveTo(e + i, o), 
                t.lineTo(e + n - i, o), t.quadraticCurveTo(e + n, o, e + n, o + i), t.lineTo(e + n, o + r - i), 
                t.quadraticCurveTo(e + n, o + r, e + n - i, o + r), t.lineTo(e + i, o + r), t.quadraticCurveTo(e, o + r, e, o + r - i), 
                t.lineTo(e, o + i), t.quadraticCurveTo(e, o, e + i, o), t.closePath();
            },
            _overInput: function(t, e) {
                var o = this, n = t >= o._x + o._extraX, r = t <= o._x + o._extraX + o._width + 2 * o._padding, i = e >= o._y + o._extraY, a = e <= o._y + o._extraY + o._height + 2 * o._padding;
                return n && r && i && a;
            },
            _clickPos: function(t, e) {
                var o = this, n = o._value;
                o._value === o._placeHolder && (n = "");
                var r = o._clipText(n), i = 0, a = r.length;
                if (t - (o._x + o._extraX) < o._textWidth(r)) for (var u = 0; u < r.length; u++) if ((i += o._textWidth(r[u])) >= t - (o._x + o._extraX)) {
                    a = u;
                    break;
                }
                return a;
            },
            _mousePos: function(t) {
                var e = t.target, o = t.pageX, n = t.pageY;
                t.touches && t.touches.length ? (e = t.touches[0].target, o = t.touches[0].pageX, 
                n = t.touches[0].pageY) : t.changedTouches && t.changedTouches.length && (e = t.changedTouches[0].target, 
                o = t.changedTouches[0].pageX, n = t.changedTouches[0].pageY);
                var r = document.defaultView.getComputedStyle(e, void 0), i = parseInt(r.paddingLeft, 10) || 0, a = parseInt(r.paddingLeft, 10) || 0, u = parseInt(r.borderLeftWidth, 10) || 0, s = parseInt(r.borderLeftWidth, 10) || 0, l = document.body.parentNode.offsetTop || 0, c = document.body.parentNode.offsetLeft || 0, d = 0, h = 0;
                if (void 0 !== e.offsetParent) do {
                    d += e.offsetLeft, h += e.offsetTop;
                } while (e = e.offsetParent);
                return d += i + u + c, h += a + s + l, {
                    x: o - d,
                    y: n - h
                };
            }
        }, void 0 !== t && t.exports && (e = t.exports = window.CanvasInput), e.CanvasInput = window.CanvasInput;
    }();
}, /*!************************!*\
  !*** ./utils/other.js ***!
  \************************/
function(t, e, o) {
    "use strict";
    function n(t) {
        return !!(t && t.constructor && t.call && t.apply);
    }
    e.a = n;
}, /*!*********************!*\
  !*** multi ./index ***!
  \*********************/
function(t, e, o) {
    t.exports = o(/*! ./index */ 5);
} ]);