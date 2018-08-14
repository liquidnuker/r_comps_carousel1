import "./styles/main.scss";
import {store} from "./js/store.js";

import Carousel1_01 from "./js/carousel1-01.js";
import Carousel1_02 from "./js/carousel1-02.js";
import Carousel1_03 from "./js/carousel1-03.js";
import Carousel1_04 from "./js/carousel1-04.js";
import Carousel1_05 from "./js/carousel1-05.js";
import {items} from "./js/carousel1-05.js";

// 
// ======================================================/
let C1_01 = new Carousel1_01({
  items: store.items,
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
let C1_02 = new Carousel1_02({
  dataSrc: store.items,
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
let C1_03 = new Carousel1_03({
  dataSrc: store.items,
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
let C4 = new Carousel1_04({
  dataSrc: store.items,
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
let c5 = new Carousel1_05({
  dataSrc: items,
  mainItemHolder: "carousel1-05_content",
  navPrevious: "carousel1_05_previous",
  navNext: "carousel1_05_next",
  paginator: "carousel1-05_pagination",
  pageBtn_activeClass: " carousel1-05_pagebuttons--active",
  pageBtn_inActiveClass: "carousel1-05_pagebuttons",
  item_activeClass: " carousel1_05_items--active",
  item_inActiveClass: "carousel1_05_items",
});
c5.init();