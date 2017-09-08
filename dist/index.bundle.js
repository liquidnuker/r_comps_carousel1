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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
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



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_carousel1_01_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_carousel1_02_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_carousel1_03_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_carousel1_04_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_carousel1_05_js__ = __webpack_require__(7);








/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);


// 
// ======================================================/
var carousel1_01 = {
  items: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].items,
  cIndex: 0,
  nextItem: function nextItem() {
    var cIndex = this.cIndex; // "this" remover
    var items = this.items;

    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first
    // return items[cIndex];

    this.cIndex = cIndex; // main cIndex
    this.refresh();
  },
  prevItem: function prevItem() {
    var cIndex = this.cIndex; // "this" remover
    var items = this.items;

    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;
    // return items[cIndex];

    this.cIndex = cIndex;
    this.refresh();
  },
  customPage: function customPage(num) {
    this.cIndex = num;
    this.refresh();
  },
  refresh: function refresh() {
    document.getElementById("carousel1-01_content").innerHTML = this.items[this.cIndex].itemName;
  },
  showPageButtons: function showPageButtons() {
    var _this = this;

    var _loop = function _loop(i) {
      var pageButtons = document.createElement("span");
      pageButtons.className = "carousel1-01_pagebuttons";
      pageButtons.textContent = i;
      pageButtons.addEventListener("click", function () {
        return _this.customPage(i);
      });
      document.getElementById("carousel1-01_pagination").appendChild(pageButtons);
    };

    for (var i = 0; i < this.items.length; i++) {
      _loop(i);
    }
  }
};

carousel1_01.refresh();
carousel1_01.showPageButtons();

//
// ======================================================/
(function () {
  var documentReady = function documentReady() {

    document.getElementById("carousel1_01_previous").addEventListener("click", function () {
      carousel1_01.prevItem();
    });

    document.getElementById("carousel1_01_next").addEventListener("click", function () {
      carousel1_01.nextItem();
    });
  };
  if (document.readyState !== "loading") documentReady();else if (document.addEventListener) document.addEventListener("DOMContentLoaded", documentReady);else document.attachEvent("onreadystatechange", function () {
    if (document.readyState === "complete") documentReady();
  });
})();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);


var carousel1_02 = function () {
  var items = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].items;
  var cIndex = 0;

  // for pageButtons
  var pageButtons = [];
  var activePageButton = 0;

  function init() {
    refresh();
    addEvents();
    showPageButtons();
  }

  function addEvents() {
    document.getElementById("carousel1_02_previous").addEventListener("click", function () {
      prevItem();
    });

    document.getElementById("carousel1_02_next").addEventListener("click", function () {
      nextItem();
    });
  }

  function showPageButtons() {
    var _loop = function _loop(i) {
      var pageButtonItems = document.createElement("div");
      pageButtonItems.className = "carousel1_02_pagebuttons";
      // pageButtonItems.textContent = i;
      pageButtonItems.addEventListener("click", function () {
        return customPage(i);
      });
      document.getElementById("carousel1-02_pagination").appendChild(pageButtonItems);
      pageButtons.push(pageButtonItems);
    };

    for (var i = 0; i < items.length; i++) {
      _loop(i);
    }

    // default
    setActivePageButton(0);
  }

  function setActivePageButton(index) {
    var activeItem = index;

    pageButtons[activeItem].className += " carousel1_02_pagebuttons--active";
    pageButtons[activeItem].setAttribute("aria-selected", true);

    if (activePageButton !== activeItem) {
      pageButtons[activePageButton].className = "carousel1_02_pagebuttons";
      pageButtons[activePageButton].setAttribute("aria-selected", false);

      // set current activePageButton
      activePageButton = activeItem;
    }
    refresh();
  }

  function customPage(num) {
    cIndex = num;
    setActivePageButton(num);
  }

  function prevItem() {
    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;

    setActivePageButton(cIndex);
    // return items[cIndex];
  }

  function nextItem() {
    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first

    setActivePageButton(cIndex);
    // return items[cIndex];
  }

  function refresh() {
    document.getElementById("carousel1-02_content").innerHTML = items[cIndex].itemName;
  }

  return {
    init: init
  };
}();

// todo: pass the selector
carousel1_02.init();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);


var carousel1_03 = function () {
  var items = __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].items;
  var cIndex = 0;

  var itemContainer = [];

  // for pageButtons
  var pageButtons = [];
  var activePageButton = 0;

  function init() {
    refresh();
    addEvents();
    showItems();
  }

  function addEvents() {
    document.getElementById("carousel1_03_previous").addEventListener("click", function () {
      prevItem();
    });

    document.getElementById("carousel1_03_next").addEventListener("click", function () {
      nextItem();
    });
  }

  function showItems() {
    var _loop = function _loop(i) {
      var cItems = "<div>\n        " + items[i].itemName + " <br>\n        <span class=\"carousel1-03_description\">" + items[i].description + "</span>\n        </div>";

      itemContainer.push(cItems);

      // page buttons
      var pageButtonItems = document.createElement("div");
      pageButtonItems.className = "carousel1_03_pagebuttons";
      pageButtonItems.addEventListener("click", function () {
        return customPage(i);
      });
      document.getElementById("carousel1-03_pagination").appendChild(pageButtonItems);
      pageButtons.push(pageButtonItems);
    };

    for (var i = 0; i < items.length; i++) {
      _loop(i);
    }

    // default
    setActivePageButton(0);
  }

  function setActivePageButton(index) {
    var activeItem = index;

    pageButtons[activeItem].className += " carousel1_03_pagebuttons--active";
    pageButtons[activeItem].setAttribute("aria-selected", true);

    if (activePageButton !== activeItem) {
      pageButtons[activePageButton].className = "carousel1_03_pagebuttons";
      pageButtons[activePageButton].setAttribute("aria-selected", false);

      // set current activePageButton
      activePageButton = activeItem;
    }
    refresh();
  }

  function customPage(num) {
    cIndex = num;
    setActivePageButton(num);
  }

  function prevItem() {
    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;

    setActivePageButton(cIndex);
    // return items[cIndex];
  }

  function nextItem() {
    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first

    setActivePageButton(cIndex);
    // return items[cIndex];
  }

  function refresh() {
    document.getElementById("carousel1-03_content").innerHTML = itemContainer[cIndex];
  }

  return {
    init: init
  };
}();

// todo: pass the selector
carousel1_03.init();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



// const carousel1_04 = (function () {
//   let items = store.items;
//   let cIndex = 0;
//   let itemContainer = [];

//   // for pageButtons
//   let pageButtons = [];
//   let activePageButton = 0;

//   function init() {
//     addEvents();
//     showItems();
//   }

//   function addEvents() {
//     document.getElementById("carousel1_04_previous").addEventListener("click", () => {
//       prevItem();
//     });

//     document.getElementById("carousel1_04_next").addEventListener("click", () => {
//       nextItem();
//     });
//   }

//   function showItems() {
//     for (let i = 0; i < items.length; i++) {
//       // main items
//       const itemHolder = document.createElement("div");
//       itemHolder.className = "carousel1_04_items";
//       itemHolder.innerHTML = `<div>
//       ${items[i].itemName}
//       </div>
//       <div>
//       ${items[i].description}
//       </div>`;
//       itemContainer.push(itemHolder);

//       // page buttons
//       const pageButtonItems = document.createElement("div");
//       pageButtonItems.className = "carousel1_04_pagebuttons";
//       pageButtonItems.addEventListener("click", () => customPage(i));
//       document.getElementById("carousel1-04_pagination").appendChild(pageButtonItems);
//       pageButtons.push(pageButtonItems);
//     }

//     // default
//     setActiveItems(0);
//   }

//   function setActiveItems(index) {
//     let activeItem = index;

//     // main items
//     itemContainer[activeItem].className += " carousel1_04_items--active";

//     pageButtons[activeItem].className += " carousel1_04_pagebuttons--active";
//     pageButtons[activeItem].setAttribute("aria-selected", true);

//     if (activePageButton !== activeItem) {
//       // main items
//       itemContainer[activePageButton].className = "carousel1_04_items";

//       pageButtons[activePageButton].className = "carousel1_04_pagebuttons";
//       pageButtons[activePageButton].setAttribute("aria-selected", false);

//       // set current activePageButton
//       activePageButton = activeItem;
//     }
//     refresh();
//   }

//   function customPage(num) {
//     cIndex = num;
//     setActiveItems(num);
//   }

//   function prevItem() {
//     if (cIndex === 0) {
//       cIndex = items.length; // go to last
//     }
//     cIndex = cIndex - 1;
//     setActiveItems(cIndex);
//     // return items[cIndex];
//   }

//   function nextItem() {
//     cIndex = cIndex + 1;
//     cIndex = cIndex % items.length; // go to first
//     setActiveItems(cIndex);
//     // return items[cIndex];
//   }

//   function refresh() {
//     document.getElementById("carousel1-04_content").appendChild(itemContainer[cIndex]);
//   }

//   return {
//     init: init
//   };
// })();

// carousel1_04.init();

var Carousel1_04 = function () {
  function Carousel1_04(opts) {
    _classCallCheck(this, Carousel1_04);

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

  // prototypes


  _createClass(Carousel1_04, [{
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
        itemHolder.innerHTML = "<div>\n      " + items[i].itemName + "\n      </div>\n      <div>\n      " + items[i].description + "\n      </div>";
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

var C4 = new Carousel1_04({
  dataSrc: __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* store */].items,
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

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_Paginate_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_Paginate_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_Paginate_js__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



// const carousel1_05 = (function () {

//   // temp item data
//   let items = [];
//   let num = 0;
//   for (let i = 0, l = 32; i < l; i++) {
//     num += 1;
//     items.push(num);
//   }

//   let pager = new Paginate(items);

//   let cIndex = 0;
//   let currentItem = 0;
//   let itemContainer = [];

//   let buttonContainer;
//   let currentButton = 0;

//   function init() {
//     addEvents();
//     showPageButtons(1);
//   }

//   function addEvents() {
//     document.getElementById("carousel1_05_previous").addEventListener("click", () => {
//       prevItem();
//     });

//     document.getElementById("carousel1_05_next").addEventListener("click", () => {
//       nextItem();
//     });
//   }

//   function showPageButtons(itemSetNum) {
//     document.getElementById("carousel1-05_pagination").innerHTML = "";
//     let itemSet = pager.page(itemSetNum);

//     // main items
//     for (let i = 0, l = items.length; i < l; i++) {
//       let itemHolder = document.createElement("div");
//       itemHolder.textContent = items[i];
//       // push for adding className later
//       itemContainer.push(itemHolder);
//     }

//     // pagebuttons
//     buttonContainer = [];
//     for (let i = 0, l = itemSet.length; i < l; i++) {
//       let itemSetHolder = document.createElement("span");
//       itemSetHolder.textContent = itemSet[i];
//       // push for adding className later
//       buttonContainer.push(itemSetHolder);
//     }

//     buttonContainer.forEach(function (i, index) {
//       i.className = "carousel1-05_pagebuttons";
//       i.addEventListener("click", function () {
//         showPage(i.textContent);
//         setActivePage(index);
//       });
//       document.getElementById("carousel1-05_pagination").appendChild(i);

//     });

//     // default
//     setActiveItems(cIndex);
//   }

//   function setActivePage(index) {
//     let activeButton = index;

//     buttonContainer[activeButton].className += " carousel1-05_pagebuttons--active";
//     if (currentButton !== activeButton) {

//       // if buttons < 10
//       if (buttonContainer[currentButton] === undefined) {
//         currentButton = index;
//         return;
//       }
//       // set new currentButton
//       buttonContainer[currentButton].className = "carousel1-05_pagebuttons";
//       currentButton = activeButton;
//     }
//   }

//   function setActiveItems(index) {
//     let activeItem = index;
//     itemContainer[activeItem].className += " carousel1_05_items--active";

//     if (currentItem !== activeItem) {
//       itemContainer[currentItem].className = "carousel1_05_items";

//       // set new currentItem
//       currentItem = activeItem;
//     }
//     refresh();
//   }

//   function showPage(num) {
//     cIndex = num - 1;
//     setActiveItems(cIndex);
//   }

//   function prevItem() {
//     if (pager.currentPage === 1) {
//       showPageButtons(pager.totalPages);
//     } else {
//       showPageButtons(pager.currentPage - 1);
//     }
//   }

//   function nextItem() {
//     if (!pager.hasNext()) {
//       showPageButtons(1);
//     } else {
//       showPageButtons(pager.currentPage + 1);
//     }
//   }

//   function refresh() {
//     document.getElementById("carousel1-05_content").appendChild(itemContainer[cIndex]);
//   }

//   return {
//     init: init
//   };
// })();

// carousel1_05.init();

// temp item data
var items = [];
var num = 0;
for (var i = 0, l = 32; i < l; i++) {
  num += 1;
  items.push(num);
}

var Carousel1_05 = function () {
  function Carousel1_05(opts) {
    _classCallCheck(this, Carousel1_05);

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

  // prototypes


  _createClass(Carousel1_05, [{
    key: "init",
    value: function init() {
      this.pager = new __WEBPACK_IMPORTED_MODULE_0__vendor_Paginate_js___default.a(items);
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

      var self = this;
      buttonContainer.forEach(function (i, index) {
        i.className = "carousel1-05_pagebuttons";
        i.addEventListener("click", function () {
          self.showPage(i.textContent);
          self.setActivePage(index);
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

var c5 = new Carousel1_05({
  dataSrc: items,
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

// let c6 = new Carousel1_05({
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

// c6.init = function() {
//   console.log(this.pageBtn_activeClass); // carousel1-06_pagebuttons--active
// };

// c6.init();

var Carousel6 = function (_Carousel1_) {
  _inherits(Carousel6, _Carousel1_);

  function Carousel6() {
    _classCallCheck(this, Carousel6);

    return _possibleConstructorReturn(this, (Carousel6.__proto__ || Object.getPrototypeOf(Carousel6)).apply(this, arguments));
  }

  _createClass(Carousel6, [{
    key: "extraFn",
    value: function extraFn() {
      // console.log(this.pageBtn_activeClass); // carousel1-06_pagebuttons--active
      this.init(); // ok
    }
  }]);

  return Carousel6;
}(Carousel1_05);

var c6 = new Carousel6({
  dataSrc: items,
  mainItemHolder: "carousel1-06_content",
  navPrevious: "carousel1_06_previous",
  navNext: "carousel1_06_next",
  paginator: "carousel1-06_pagination",
  pageBtn_activeClass: " carousel1-06_pagebuttons--active",
  pageBtn_inActiveClass: "carousel1-06_pagebuttons",
  item_activeClass: " carousel1_06_items--active",
  item_inActiveClass: "carousel1_06_items"
});

c6.extraFn();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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