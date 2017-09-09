import {store} from "./store.js";

class Carousel1_03 {
  constructor(opts) {
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

  init() {
    this.addEvents();
    this.showItems();
  }

  addEvents() {
    document.getElementById(this.prevBtn).addEventListener("click", () => {
      this.prevItem();
    });

    document.getElementById(this.nextBtn).addEventListener("click", () => {
      this.nextItem();
    });
  }

  prevItem() {
    let cIndex = this.cIndex;
    let items = this.items;

    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    this.cIndex = cIndex - 1;
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

  showItems() {
    let items = this.items;
    let itemContainer = this.itemContainer;
    let pageButtons = this.pageButtons;

    for (let i = 0; i < items.length; i++) {
      const cItems = `<div>
        ${items[i].itemName} <br>
        <span class="carousel1-03_description">${items[i].description}</span>
        </div>`;

      itemContainer.push(cItems);

      // page buttons
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
    document.getElementById(this.carouselContent).innerHTML = this.itemContainer[this.cIndex];
  }
}

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