/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _store = __webpack_require__(4);

var _carousel = __webpack_require__(5);

var _carousel2 = _interopRequireDefault(_carousel);

var _carousel3 = __webpack_require__(26);

var _carousel4 = _interopRequireDefault(_carousel3);

var _carousel5 = __webpack_require__(27);

var _carousel6 = _interopRequireDefault(_carousel5);

var _carousel7 = __webpack_require__(28);

var _carousel8 = _interopRequireDefault(_carousel7);

var _carousel9 = __webpack_require__(29);

var _carousel10 = _interopRequireDefault(_carousel9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
// ======================================================/
var C1_01 = new _carousel2.default({
  items: _store.store.items,
  defaultIndex: 0,
  carouselContent: "carousel1-01_content",
  btn_prev: "carousel1_01_previous",
  btn_next: "carousel1_01_next",
  pageBtnClass: "carousel1-01_pagebuttons",
  pageBtnHolder: "carousel1-01_pagination"
});
C1_01.init();

// 
// ======================================================/
var C1_02 = new _carousel4.default({
  dataSrc: _store.store.items,
  startIndex: 0,
  carouselContent: "carousel1-02_content",
  btn_prevClass: "carousel1_02_previous",
  btn_nextClass: "carousel1_02_next",
  pageBtnClass: "carousel1_02_pagebuttons",
  pageBtnActiveClass: " carousel1_02_pagebuttons--active",
  pageBtnItemClass: "carousel1_02_pagebuttons",
  pageBtnHolder: "carousel1-02_pagination"
});
C1_02.init();

// 
// ======================================================/
var C1_03 = new _carousel6.default({
  dataSrc: _store.store.items,
  startIndex: 0,
  carouselContent: "carousel1-03_content",
  prevBtn: "carousel1_03_previous",
  nextBtn: "carousel1_03_next",
  pageBtnClass: "carousel1_03_pagebuttons",
  pageBtnActiveClass: " carousel1_03_pagebuttons--active",
  pageBtnItemClass: "carousel1_03_pagebuttons",
  pageBtnHolder: "carousel1-03_pagination"
});
C1_03.init();

// 
// ======================================================/
var C4 = new _carousel8.default({
  dataSrc: _store.store.items,
  mainItemContainer: "carousel1-04_content",
  navPrevious: "carousel1_04_previous",
  navNext: "carousel1_04_next",
  itemHolderClass: "carousel1_04_items",
  item_active: " carousel1_04_items--active",
  item_inActive: "carousel1_04_items",
  pageBtnClass: "carousel1_04_pagebuttons",
  pageBtn_active: " carousel1_04_pagebuttons--active",
  pageBtn_inActive: "carousel1_04_pagebuttons"
});
C4.init();

// 
// ======================================================/
var c5 = new _carousel10.default({
  dataSrc: _carousel9.items,
  mainItemHolder: "carousel1-05_content",
  navPrevious: "carousel1_05_previous",
  navNext: "carousel1_05_next",
  paginator: "carousel1-05_pagination",
  pageBtn_activeClass: " carousel1-05_pagebuttons--active",
  pageBtn_inActiveClass: "carousel1-05_pagebuttons",
  item_activeClass: " carousel1_05_items--active",
  item_inActiveClass: "carousel1_05_items"
});
c5.init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {
  items: [{
    itemName: "item1",
    description: "desc1",
    imgSrc: ""
  }, {
    itemName: "item2",
    description: "desc2",
    imgSrc: ""
  }, {
    itemName: "item3",
    description: "desc3",
    imgSrc: ""
  }]
};

exports.store = store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Carousel1_01
// ======================================================/
var Carousel1_01 = function () {
  function Carousel1_01(opts) {
    (0, _classCallCheck3.default)(this, Carousel1_01);

    this.items = opts.items;
    this.cIndex = opts.defaultIndex;
    this.carouselContent = opts.carouselContent;

    this.btn_prev = opts.btn_prev;
    this.btn_next = opts.btn_next;
    this.pageBtnClass = opts.pageBtnClass;
    this.pageBtnHolder = opts.pageBtnHolder;
  }

  (0, _createClass3.default)(Carousel1_01, [{
    key: "init",
    value: function init() {
      this.showItems(this.cIndex);
      this.addEvents();
      this.showPageButtons();
    }
  }, {
    key: "getId",
    value: function getId(el) {
      return document.getElementById(el);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      this.getId(this.btn_prev).addEventListener("click", function () {
        _this.showItems(_this.prevItem());
      });

      this.getId(this.btn_next).addEventListener("click", function () {
        _this.showItems(_this.nextItem());
      });
    }
  }, {
    key: "showPageButtons",
    value: function showPageButtons() {
      var _this2 = this;

      var _loop = function _loop(i) {
        var pageButtons = document.createElement("span");
        pageButtons.className = _this2.pageBtnClass;
        pageButtons.textContent = i;
        pageButtons.addEventListener("click", function () {
          return _this2.customPage(i);
        });
        _this2.getId(_this2.pageBtnHolder).appendChild(pageButtons);
      };

      for (var i = 0; i < this.items.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      if (this.cIndex === 0) {
        this.cIndex = this.items.length; // go to last
      }
      this.cIndex = this.cIndex - 1;
      return this.cIndex;
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      this.cIndex = this.cIndex + 1;
      this.cIndex = this.cIndex % this.items.length; // go to first
      return this.cIndex;
    }
  }, {
    key: "customPage",
    value: function customPage(num) {
      this.cIndex = num;
      this.showItems(this.cIndex);
    }
  }, {
    key: "showItems",
    value: function showItems(index) {
      this.getId(this.carouselContent).innerHTML = this.items[index].itemName;
    }
  }]);
  return Carousel1_01;
}();

exports.default = Carousel1_01;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(8);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
var $Object = __webpack_require__(13).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(21), 'Object', {defineProperty: __webpack_require__(17).f});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(12)
  , core      = __webpack_require__(13)
  , ctx       = __webpack_require__(14)
  , hide      = __webpack_require__(16)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(17)
  , createDesc = __webpack_require__(25);
module.exports = __webpack_require__(21) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(18)
  , IE8_DOM_DEFINE = __webpack_require__(20)
  , toPrimitive    = __webpack_require__(24)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function(){
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19)
  , document = __webpack_require__(12).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Carousel1-02
// ======================================================/
var Carousel1_02 = function () {
  function Carousel1_02(opts) {
    (0, _classCallCheck3.default)(this, Carousel1_02);

    this.items = opts.dataSrc;
    this.cIndex = opts.startIndex;

    this.carouselContent = opts.carouselContent;
    this.btn_prevClass = opts.btn_prevClass;
    this.btn_nextClass = opts.btn_nextClass;
    this.pageBtnClass = opts.pageBtnClass;
    this.pageBtnActiveClass = opts.pageBtnActiveClass;
    this.pageBtnItemClass = opts.pageBtnItemClass;
    this.pageBtnHolder = opts.pageBtnHolder;

    this.pageButtons = [];
    this.activePageButton = 0;
  }

  (0, _createClass3.default)(Carousel1_02, [{
    key: "init",
    value: function init() {
      this.refresh();
      this.addEvents();
      this.showPagebuttons();
    }
  }, {
    key: "getId",
    value: function getId(el) {
      return document.getElementById(el);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      this.getId(this.btn_prevClass).addEventListener("click", function () {
        _this.setActivePageButton(_this.prevItem());
      });

      this.getId(this.btn_nextClass).addEventListener("click", function () {
        _this.setActivePageButton(_this.nextItem());
      });
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      if (this.cIndex === 0) {
        this.cIndex = this.items.length; // go to last
      }
      this.cIndex = this.cIndex - 1;
      return this.cIndex;
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      this.cIndex = this.cIndex + 1;
      this.cIndex = this.cIndex % this.items.length; // go to first
      return this.cIndex;
    }
  }, {
    key: "customPage",
    value: function customPage(num) {
      this.cIndex = num;
      this.setActivePageButton(num);
    }
  }, {
    key: "showPagebuttons",
    value: function showPagebuttons() {
      var _this2 = this;

      var _loop = function _loop(i) {
        var pageButtonItems = document.createElement("div");
        pageButtonItems.className = _this2.pageBtnItemClass;

        pageButtonItems.addEventListener("click", function () {
          return _this2.customPage(i);
        });
        _this2.getId(_this2.pageBtnHolder).appendChild(pageButtonItems);
        _this2.pageButtons.push(pageButtonItems);
      };

      for (var i = 0; i < this.items.length; i++) {
        _loop(i);
      }
      this.setActivePageButton(this.cIndex);
    }
  }, {
    key: "setActivePageButton",
    value: function setActivePageButton(index) {
      this.pageButtons[index].className += this.pageBtnActiveClass;
      this.pageButtons[index].setAttribute("aria-selected", true);

      if (this.activePageButton !== index) {
        this.pageButtons[this.activePageButton].className = this.pageBtnClass;
        this.pageButtons[this.activePageButton].setAttribute("aria-selected", false);

        // set current activePageButton
        this.activePageButton = index;
      }
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.getId(this.carouselContent).innerHTML = this.items[this.cIndex].itemName;
    }
  }]);
  return Carousel1_02;
}();

exports.default = Carousel1_02;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Carousel1_03 = function () {
  function Carousel1_03(opts) {
    (0, _classCallCheck3.default)(this, Carousel1_03);

    this.items = opts.dataSrc;
    this.cIndex = opts.startIndex;
    this.itemContainer = [];

    // for pageButtons
    this.pageButtons = [];
    this.activePageButton = 0;

    this.carouselContent = opts.carouselContent;
    this.prevBtn = opts.prevBtn;
    this.nextBtn = opts.nextBtn;
    this.pageBtnClass = opts.pageBtnClass;
    this.pageBtnActiveClass = opts.pageBtnActiveClass;
    this.pageBtnItemClass = opts.pageBtnItemClass;
    this.pageBtnHolder = opts.pageBtnHolder;
  }

  (0, _createClass3.default)(Carousel1_03, [{
    key: "init",
    value: function init() {
      this.addEvents();
      this.showItems();
    }
  }, {
    key: "getId",
    value: function getId(el) {
      return document.getElementById(el);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      this.getId(this.prevBtn).addEventListener("click", function () {
        _this.setActivePageButton(_this.prevItem());
      });

      this.getId(this.nextBtn).addEventListener("click", function () {
        _this.setActivePageButton(_this.nextItem());
      });
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      if (this.cIndex === 0) {
        this.cIndex = this.items.length; // go to last
      }
      this.cIndex = this.cIndex - 1;
      return this.cIndex;
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      this.cIndex = this.cIndex + 1;
      this.cIndex = this.cIndex % this.items.length; // go to first
      return this.cIndex;
    }
  }, {
    key: "customPage",
    value: function customPage(num) {
      this.cIndex = num;
      this.setActivePageButton(num);
    }
  }, {
    key: "showItems",
    value: function showItems() {
      var _this2 = this;

      var _loop = function _loop(i) {
        var cItems = "<div>\n        " + _this2.items[i].itemName + " <br>\n        <span class=\"carousel1-03_description\">" + _this2.items[i].description + "</span>\n        </div>";

        _this2.itemContainer.push(cItems);

        // page buttons
        var pageButtonItems = document.createElement("div");
        pageButtonItems.className = _this2.pageBtnItemClass;
        pageButtonItems.addEventListener("click", function () {
          return _this2.customPage(i);
        });
        _this2.getId(_this2.pageBtnHolder).appendChild(pageButtonItems);
        _this2.pageButtons.push(pageButtonItems);
      };

      for (var i = 0; i < this.items.length; i++) {
        _loop(i);
      }

      // default
      this.setActivePageButton(this.cIndex);
    }
  }, {
    key: "setActivePageButton",
    value: function setActivePageButton(index) {
      this.pageButtons[index].className += this.pageBtnActiveClass;
      this.pageButtons[index].setAttribute("aria-selected", true);

      if (this.activePageButton !== index) {
        this.pageButtons[this.activePageButton].className = this.pageBtnClass;
        this.pageButtons[this.activePageButton].setAttribute("aria-selected", false);

        // set current activePageButton
        this.activePageButton = index;
      }
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.getId(this.carouselContent).innerHTML = this.itemContainer[this.cIndex];
    }
  }]);
  return Carousel1_03;
}();

exports.default = Carousel1_03;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Carousel1_04 = function () {
  function Carousel1_04(opts) {
    (0, _classCallCheck3.default)(this, Carousel1_04);

    this.items = opts.dataSrc;
    this.cIndex = 0;
    this.mainItemContainer = opts.mainItemContainer;
    this.itemContainer = [];
    this.itemHolderClass = opts.itemHolderClass;

    this.navPrevious = opts.navPrevious;
    this.navNext = opts.navNext;
    this.item_active = opts.item_active;
    this.item_inActive = opts.item_inActive;

    // for pageButtons
    this.pageBtnClass = opts.pageBtnClass;
    this.pageButtons = [];
    this.activePageButton = 0;
    this.pageBtn_active = opts.pageBtn_active;
    this.pageBtn_inActive = opts.pageBtn_inActive;
  }

  (0, _createClass3.default)(Carousel1_04, [{
    key: "init",
    value: function init() {
      this.addEvents();
      this.showItems();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      document.getElementById(this.navPrevious).addEventListener("click", function () {
        _this.prevItem();
      });

      document.getElementById(this.navNext).addEventListener("click", function () {
        _this.nextItem();
      });
    }
  }, {
    key: "showItems",
    value: function showItems() {
      var _this2 = this;

      var items = this.items;

      var _loop = function _loop(i) {
        // main items
        var itemHolder = document.createElement("div");
        itemHolder.className = _this2.itemHolderClass;
        itemHolder.innerHTML = "<div>\n      " + items[i].itemName + "\n      </div>\n      <div class=\"carousel1-04_description\">\n      " + items[i].description + "\n      </div>";
        _this2.itemContainer.push(itemHolder);

        // page buttons
        var pageButtonItems = document.createElement("div");
        pageButtonItems.className = _this2.pageBtnClass;
        pageButtonItems.addEventListener("click", function () {
          return _this2.customPage(i);
        });
        document.getElementById("carousel1-04_pagination").appendChild(pageButtonItems);
        _this2.pageButtons.push(pageButtonItems);
      };

      for (var i = 0; i < items.length; i++) {
        _loop(i);
      }

      // default
      this.setActiveItems(0);
    }
  }, {
    key: "setActiveItems",
    value: function setActiveItems(index) {
      var activeItem = index;
      var itemContainer = this.itemContainer;
      var pageButtons = this.pageButtons;
      var activePageButton = this.activePageButton;

      itemContainer[activeItem].className += this.item_active;

      pageButtons[activeItem].className += this.pageBtn_active;
      pageButtons[activeItem].setAttribute("aria-selected", true);

      if (activePageButton !== activeItem) {
        itemContainer[activePageButton].className = this.item_inActive;

        pageButtons[activePageButton].className = this.pageBtn_inActive;
        pageButtons[activePageButton].setAttribute("aria-selected", false);

        // set current activePageButton
        this.activePageButton = activeItem;
      }
      this.refresh();
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      if (this.cIndex === 0) {
        this.cIndex = this.items.length; // go to last
      }
      this.cIndex = this.cIndex - 1;
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      this.cIndex = this.cIndex + 1;
      this.cIndex = this.cIndex % this.items.length; // go to first
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "customPage",
    value: function customPage(num) {
      this.cIndex = num;
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      document.getElementById(this.mainItemContainer).appendChild(this.itemContainer[this.cIndex]);
    }
  }]);
  return Carousel1_04;
}();

// let C4 = new Carousel1_04({
//   dataSrc: store.items,
//   mainItemContainer: "carousel1-04_content",
//   navPrevious: "carousel1_04_previous",
//   navNext: "carousel1_04_next",
//   itemHolderClass: "carousel1_04_items",
//   item_active: " carousel1_04_items--active",
//   item_inActive: "carousel1_04_items",
//   pageBtnClass: "carousel1_04_pagebuttons",
//   pageBtn_active: " carousel1_04_pagebuttons--active",
//   pageBtn_inActive: "carousel1_04_pagebuttons"
// });

// C4.init();


exports.default = Carousel1_04;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.items = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Paginate = __webpack_require__(30);

var _Paginate2 = _interopRequireDefault(_Paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// temp item data
var items = exports.items = [];
var num = 0;
for (var i = 0, l = 32; i < l; i++) {
  num += 1;
  items.push(num);
}

var Carousel1_05 = function () {
  function Carousel1_05(opts) {
    (0, _classCallCheck3.default)(this, Carousel1_05);

    this.items = opts.dataSrc;
    this.mainItemHolder = opts.mainItemHolder;
    this.navPrevious = opts.navPrevious;
    this.navNext = opts.navNext;
    this.paginator = opts.paginator;
    this.pageBtn_activeClass = opts.pageBtn_activeClass;
    this.pageBtn_inActiveClass = opts.pageBtn_inActiveClass;
    this.item_activeClass = opts.item_activeClass;
    this.item_inActiveClass = opts.item_inActiveClass;

    this.cIndex = 0;
    this.currentItem = 0;
    this.itemContainer = [];

    this.buttonContainer = [];
    this.currentButton = 0;
  }

  (0, _createClass3.default)(Carousel1_05, [{
    key: "init",
    value: function init() {
      this.pager = new _Paginate2.default(items);
      this.addEvents();
      this.showPageButtons(1);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      document.getElementById(this.navPrevious).addEventListener("click", function () {
        _this.prevItem();
      });

      document.getElementById(this.navNext).addEventListener("click", function () {
        _this.nextItem();
      });
    }
  }, {
    key: "showPageButtons",
    value: function showPageButtons(itemSetNum) {
      var _this2 = this;

      document.getElementById(this.paginator).innerHTML = "";
      var itemSet = this.pager.page(itemSetNum);
      var itemContainer = this.itemContainer;
      var buttonContainer = this.buttonContainer;
      var paginator = this.paginator;
      var cIndex = this.cIndex;

      // main items
      for (var _i = 0, _l = items.length; _i < _l; _i++) {
        var itemHolder = document.createElement("div");
        itemHolder.textContent = items[_i];
        // push for adding className later
        itemContainer.push(itemHolder);
      }

      // pagebuttons
      buttonContainer = [];
      for (var _i2 = 0, _l2 = itemSet.length; _i2 < _l2; _i2++) {
        var itemSetHolder = document.createElement("span");
        itemSetHolder.textContent = itemSet[_i2];
        // push for adding className later
        buttonContainer.push(itemSetHolder);
      }

      // let self = this;
      buttonContainer.forEach(function (i, index) {
        i.className = "carousel1-05_pagebuttons";
        i.addEventListener("click", function () {
          _this2.showPage(i.textContent);
          _this2.setActivePage(index);
        });
        document.getElementById(paginator).appendChild(i);
      });

      this.buttonContainer = buttonContainer;

      // default
      this.setActiveItems(cIndex);
    }
  }, {
    key: "setActivePage",
    value: function setActivePage(index) {
      var activeButton = index;
      var buttonContainer = this.buttonContainer;
      var currentButton = this.currentButton;

      buttonContainer[activeButton].className += this.pageBtn_activeClass;
      if (currentButton !== activeButton) {

        // if buttons < 10
        if (buttonContainer[currentButton] === undefined) {
          this.currentButton = index;
          return;
        }
        // set new currentButton
        buttonContainer[currentButton].className = this.pageBtn_inActiveClass;
        this.currentButton = activeButton;
      }
    }
  }, {
    key: "setActiveItems",
    value: function setActiveItems(index) {
      var activeItem = index;
      var itemContainer = this.itemContainer;
      var currentItem = this.currentItem;

      itemContainer[activeItem].className += this.item_activeClass;

      if (currentItem !== activeItem) {
        itemContainer[currentItem].className = this.item_inActiveClass;

        // set new currentItem
        this.currentItem = activeItem;
      }
      this.refresh();
    }
  }, {
    key: "showPage",
    value: function showPage(num) {
      this.cIndex = num - 1;
      this.setActiveItems(this.cIndex);
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      var pager = this.pager;

      if (pager.currentPage === 1) {
        this.showPageButtons(pager.totalPages);
      } else {
        this.showPageButtons(pager.currentPage - 1);
      }
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      var pager = this.pager;

      if (!pager.hasNext()) {
        this.showPageButtons(1);
      } else {
        this.showPageButtons(pager.currentPage + 1);
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var itemContainer = this.itemContainer;
      var cIndex = this.cIndex;
      document.getElementById(this.mainItemHolder).appendChild(itemContainer[cIndex]);
    }
  }]);
  return Carousel1_05;
}();

// let c5 = new Carousel1_05({
//   dataSrc: items,
//   mainItemHolder: "carousel1-05_content",
//   navPrevious: "carousel1_05_previous",
//   navNext: "carousel1_05_next",
//   paginator: "carousel1-05_pagination",
//   pageBtn_activeClass: " carousel1-05_pagebuttons--active",
//   pageBtn_inActiveClass: "carousel1-05_pagebuttons",
//   item_activeClass: " carousel1_05_items--active",
//   item_inActiveClass: "carousel1_05_items",
// });

// c5.init();

// class Carousel6 extends Carousel1_05 {
//   extraFn() {
//     // console.log(this.pageBtn_activeClass); // carousel1-06_pagebuttons--active
//     this.init(); // ok
//   }
// }

// let c6 = new Carousel6({
//   dataSrc: items,
//   mainItemHolder: "carousel1-06_content",
//   navPrevious: "carousel1_06_previous",
//   navNext: "carousel1_06_next",
//   paginator: "carousel1-06_pagination",
//   pageBtn_activeClass: " carousel1-06_pagebuttons--active",
//   pageBtn_inActiveClass: "carousel1-06_pagebuttons",
//   item_activeClass: " carousel1_06_items--active",
//   item_inActiveClass: "carousel1_06_items",
// });

// c6.extraFn();


exports.default = Carousel1_05;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new `Paginate` form a givin `Array`,
 * optionally with a specific `Number` of items per page.
 *
 * @param {Array} data
 * @param {Number} [perPage=10]
 * @constructor
 * @api public
 */

function Paginate(data, perPage) {

  if (!data) throw new Error('Required Argument Missing');
  if (!(data instanceof Array)) throw new Error('Invalid Argument Type');

  this.data = data;
  this.perPage = perPage || 10;
  this.currentPage = 0;
  this.totalPages = Math.ceil(this.data.length / this.perPage);
}

/**
 * Calculates the offset.
 *
 * @return {Number}
 * @api private
 */

Paginate.prototype.offset = function () {

  return (this.currentPage - 1) * this.perPage;
};

/**
 * Returns the specified `page`.
 *
 * @param {Number} pageNum
 * @return {Array}
 * @api public
 */

Paginate.prototype.page = function (pageNum) {

  if (pageNum < 1) pageNum = 1;
  if (pageNum > this.totalPages) pageNum = this.totalPages;

  this.currentPage = pageNum;

  var start = this.offset(),
      end = start + this.perPage;

  return this.data.slice(start, end);
};

/**
 * Returns the next `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.next = function () {

  return this.page(this.currentPage + 1);
};

/**
 * Returns the previous `page`.
 *
 * @return {Array}
 * @api public
 */

Paginate.prototype.prev = function () {

  return this.page(this.currentPage - 1);
};

/**
 * Checks if there is a next `page`.
 *
 * @return {Boolean}
 * @api public
 */

Paginate.prototype.hasNext = function () {

  return this.currentPage < this.totalPages;
};

/**
 * Expose `Paginate`
 */

if (true) module.exports = Paginate;

/***/ })
/******/ ]);