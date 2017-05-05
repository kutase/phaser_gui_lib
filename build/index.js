!function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e,o){"use strict";function r(t){n=t}Object.defineProperty(e,"__esModule",{value:!0}),e.setGame=r;var n=null;e.default=n},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=o(2);o.d(e,"default",function(){return c});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),s=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)},c=function(t){function e(){var t;r(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];var a=n(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i)));return a.isLeaf=!0,a.params={},a}return i(e,t),l(e,[{key:"init",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this)}},{key:"setPosition",value:function(t){var e=this.params,o=this.parent,r=this.width,n=this.height,i=this.globalX,u=this.globalY,a=!1;if(o){if(e.positionX){switch(e.positionX){case"center":t.x=o.globalX+o.width/2-r/2;break;case"left":t.x=o.globalX;break;case"right":t.x=o.globalX+o.width-r}a=!0}if(e.positionY){switch(e.positionY){case"center":t.y=o.globalY+o.height/2-n/2;break;case"top":t.y=o.globalY;break;case"bottom":t.y=o.globalY+o.height-n}a=!0}}a||(t.x=i,t.y=u)}},{key:"style",set:function(t){this.params=a({},this.params,t)},get:function(){return this.params}}]),e}(u.default)},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"default",function(){return i});var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),i=function(){function t(){r(this,t),this.isLeaf=!1,this.isHidden=!1,this._x=0,this._y=0,this._z=0,this.init.apply(this,arguments)}return n(t,[{key:"init",value:function(){this.update()}},{key:"draw",value:function(){}},{key:"update",value:function(){this.draw()}},{key:"moveToGroup",value:function(t){this.group=t}},{key:"clearGroup",value:function(){this.group=null}},{key:"bringToTop",value:function(){if(null==this.group)throw Error("Cannot bring to top without group")}},{key:"hide",value:function(){this.isHidden||(this.isHidden=!0,this.position={x:this.x,y:this.y},this.x=-1e4,this.y=-1e4)}},{key:"show",value:function(){this.isHidden&&(this.isHidden=!1,this.x=this.position.x,this.y=this.position.y)}},{key:"bringToTop",value:function(){}},{key:"x",set:function(t){this._x=t,this.update()},get:function(){return this._x}},{key:"y",set:function(t){this._y=t,this.update()},get:function(){return this._y}},{key:"globalX",get:function(){return this.parent?this.x+this.parent.x:this.x}},{key:"globalY",get:function(){return this.parent?this.y+this.parent.y:this.y}},{key:"z",set:function(t){this._z=t,this.parent&&this.parent.update()},get:function(){return this._z}}]),t}()},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=o(2);o.d(e,"default",function(){return s});var a=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),l=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)},s=function(t){function e(){var t;r(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i)))}return i(e,t),a(e,[{key:"init",value:function(){this.children=[],this.children.delete=function(t){var e=this.indexOf(t);return-1!=e?(this.splice(e,1),t):null},this.children.add=function(t){this.push(t)},l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this)}},{key:"update",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this),this.sort();var t=!0,o=!1,r=void 0;try{for(var n,i=this.children[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){n.value.update()}}catch(t){o=!0,r=t}finally{try{!t&&i.return&&i.return()}finally{if(o)throw r}}}},{key:"add",value:function(t){this.children.add(t),t.moveToGroup(this.group),t.parent=this,t.z=this.z+1,this.update()}},{key:"remove",value:function(t){this.children.delete(t),t.parent=null,t.clearGroup(),this.update()}},{key:"moveToGroup",value:function(t){this.group=t;var e=!0,o=!1,r=void 0;try{for(var n,i=this.children[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){n.value.moveToGroup(this.group)}}catch(t){o=!0,r=t}finally{try{!e&&i.return&&i.return()}finally{if(o)throw r}}}},{key:"clearGroup",value:function(){var t=!0,e=!1,o=void 0;try{for(var r,n=this.children[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){r.value.clearGroup()}}catch(t){e=!0,o=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw o}}this.group=null}},{key:"hide",value:function(){this.isHidden||(this.isHidden=!0,this.position={x:this.x,y:this.y},this.x=-1e4,this.y=-1e4)}},{key:"show",value:function(){this.isHidden&&(this.isHidden=!1,this.x=this.position.x,this.y=this.position.y)}},{key:"sortFunc",value:function(t,e){return t.z>e.z}},{key:"bringToTop",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"bringToTop",this).call(this);var t=!0,o=!1,r=void 0;try{for(var n,i=this.children[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){n.value.bringToTop()}}catch(t){o=!0,r=t}finally{try{!t&&i.return&&i.return()}finally{if(o)throw r}}}},{key:"sort",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sortFunc;this.children.sort(t);var e=!0,o=!1,r=void 0;try{for(var n,i=this.children[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){n.value.bringToTop()}}catch(t){o=!0,r=t}finally{try{!e&&i.return&&i.return()}finally{if(o)throw r}}}},{key:"width",set:function(t){this._width=t,this.update()},get:function(){return this._width}},{key:"height",set:function(t){this._height=t,this.update()},get:function(){return this._height}}]),e}(u.default)},function(t,e,o){"use strict";function r(t){(0,o(0).setGame)(t),n=!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=!1;exports.AbstractGraphic=n?o(2).default:null,exports.AbstractComponent=n?o(3).default:null,exports.AbstractLeaf=n?o(1).default:null,exports.Button=n?o(5).default:null,exports.Container=n?o(6).default:null,exports.Image=n?o(7).default:null,exports.Text=n?o(8).default:null,exports.RootContainer=n?RootContainer:null},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=o(1),a=o(0);o.d(e,"default",function(){return c});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),s=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)},c=function(t){function e(t,o,i,u,a,l){r(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,i,u,a,l));return s.update(),s}return i(e,t),l(e,[{key:"init",value:function(t,e,o,r,n,i){this._x=t,this._y=e,this.onClickList=[],this.setupButton(o,r,n,i)}},{key:"draw",value:function(){this.setPosition(this.button)}},{key:"setupButton",value:function(t,e,o,r){var n=this.x,i=this.y;this.button=a.default.add.button(n,i,t,this.onClick,this,e,o,r)}},{key:"onClick",value:function(){var t=!0,e=!1,o=void 0;try{for(var r,n=this.onClickList[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){var i=r.value;i(),i.once&&(i.once=!1,this.removeOnClick(i))}}catch(t){e=!0,o=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw o}}}},{key:"addOnClick",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(t.once=!0),this.onClickList.push(t)}},{key:"removeOnClick",value:function(t){var e=this.onClickList.indexOf(t);-1!=e&&this.onClickList.splice(e,1)}},{key:"moveToGroup",value:function(t){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveToGroup",this).call(this,t),this.group&&this.group.add(this.button)}},{key:"clearGroup",value:function(){this.group.remove(this.button),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"clearGroup",this).call(this)}},{key:"bringToTop",value:function(){this.group&&this.group.bringToTop(this.button)}}]),e}(u.default)},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=o(3),a=o(0);o.d(e,"default",function(){return c});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),s=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)},c=function(t){function e(t,o){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.default.camera.width,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.default.camera.height;r(this,e);var l=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,i,u));return l.update(),l}return i(e,t),l(e,[{key:"init",value:function(t,o,r,n){this._x=t,this._y=o,this._width=r,this._height=n,this.setupBorder(),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this)}},{key:"setupBorder",value:function(){this.border=a.default.add.graphics(0,0),this.border.fixedToCamera=!0}},{key:"drawBorder",value:function(){var t=this.border,e=this.globalX,o=this.globalY,r=this.width,n=this.height;t.clear(),t.lineStyle(3,16777215,1),t.moveTo(e,o),t.beginFill(16777215,.2),t.drawRect(e,o,r,n),t.endFill()}},{key:"draw",value:function(){this.drawBorder()}},{key:"moveToGroup",value:function(t){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveToGroup",this).call(this,t),this.group&&this.group.add(this.border)}}]),e}(u.default)},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=o(1),a=o(0);o.d(e,"default",function(){return c});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),s=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)},c=function(t){function e(t,o,i){r(this,e);var u=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,i));return u.update(),u}return i(e,t),l(e,[{key:"init",value:function(t,e,o){this._x=t,this._y=e,this.setupImage(o)}},{key:"draw",value:function(){this.setPosition(this.image)}},{key:"setupImage",value:function(t){var e=this.x,o=this.y;this.image=a.default.add.image(e,o,t)}},{key:"moveToGroup",value:function(t){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveToGroup",this).call(this,t),this.group&&this.group.add(this.image)}},{key:"clearGroup",value:function(){this.group.remove(this.image),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"clearGroup",this).call(this)}},{key:"bringToTop",value:function(){this.group&&this.group.bringToTop(this.image)}}]),e}(u.default)},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=o(1),a=o(0);o.d(e,"default",function(){return p});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),s=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)},c=function t(e,o,r,n){var i=Object.getOwnPropertyDescriptor(e,o);if(void 0===i){var u=Object.getPrototypeOf(e);null!==u&&t(u,o,r,n)}else if("value"in i&&i.writable)i.value=r;else{var a=i.set;void 0!==a&&a.call(n,r)}return r},p=function(t){function e(t,o,i){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r(this,e);var a=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,i,u));return a.update(),a}return i(e,t),l(e,[{key:"init",value:function(t,e,o,r){this._x=t,this._y=e,this.params=r,this.setupText(o)}},{key:"draw",value:function(){this.setPosition(this.text)}},{key:"setupText",value:function(t){var e=this.x,o=this.y;this.text=a.default.add.text(e,o,t),this.style=this.params}},{key:"moveToGroup",value:function(t){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveToGroup",this).call(this,t),this.group&&this.group.add(this.text)}},{key:"clearGroup",value:function(){this.group.remove(this.text),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"clearGroup",this).call(this)}},{key:"bringToTop",value:function(){this.group&&this.group.bringToTop(this.text)}},{key:"alpha",set:function(t){this.text.alpha=t}},{key:"style",set:function(t){c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"style",t,this),this.text.setStyle(this.params),this.setPosition(this.text)},get:function(){return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"style",this)}}]),e}(u.default)},function(t,e,o){t.exports=o(4)}]);