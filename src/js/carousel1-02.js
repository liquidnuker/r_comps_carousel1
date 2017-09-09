import {store} from "./store.js";

// Carousel1-02
// ======================================================/
class Carousel1_02 {
  constructor(opts) {
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

  init() {
    this.refresh();
    this.addEvents();
    this.showPagebuttons();
  }

  addEvents() {
    document.getElementById(this.btn_prevClass).addEventListener("click", () => {
      this.prevItem();
    });

    document.getElementById(this.btn_nextClass).addEventListener("click", () => {
      this.nextItem();
    });
  }

  prevItem() {
    let cIndex = this.cIndex;
    let items = this.items;

    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;

    this.cIndex = cIndex;
    this.setActivePageButton(this.cIndex);
  }

  nextItem() {
    let cIndex = this.cIndex;
    let items = this.items;

    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first

    this.cIndex = cIndex;
    this.setActivePageButton(this.cIndex);
  }

  customPage(num) {
    this.cIndex = num;
    this.setActivePageButton(num);
  }

  showPagebuttons() {
    let items = this.items;
    let pageButtons = this.pageButtons;

    for (let i = 0; i < items.length; i++) {
      const pageButtonItems = document.createElement("div");
      pageButtonItems.className = this.pageBtnItemClass;
      pageButtonItems.addEventListener("click", () => this.customPage(i));
      document.getElementById(this.pageBtnHolder).appendChild(pageButtonItems);
      pageButtons.push(pageButtonItems);
    }

    // default
    this.setActivePageButton(this.cIndex);
  }

  setActivePageButton(index) {
    let activeItem = index;
    let pageButtons = this.pageButtons;
    let activePageButton = this.activePageButton;

    pageButtons[activeItem].className += this.pageBtnActiveClass;
    pageButtons[activeItem].setAttribute("aria-selected", true);

    if (activePageButton !== activeItem) {
      pageButtons[activePageButton].className = this.pageBtnClass;
      pageButtons[activePageButton].setAttribute("aria-selected", false);

      // set current activePageButton
      this.activePageButton = activeItem;
    }
    this.refresh();
  }

  refresh() {
    document.getElementById(this.carouselContent).innerHTML = this.items[this.cIndex].itemName;
  }
}

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