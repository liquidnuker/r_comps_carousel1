import {store} from "./store.js";

class Carousel1_04 {
  constructor(opts) {
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
  init() {
    this.addEvents();
    this.showItems();
  }

  addEvents() {
    document.getElementById(this.navPrevious).addEventListener("click", () => {
      this.prevItem();
    });

    document.getElementById(this.navNext).addEventListener("click", () => {
      this.nextItem();
    });
  }

  showItems() {
    let items = this.items;

    for (let i = 0; i < items.length; i++) {
      // main items
      const itemHolder = document.createElement("div");
      itemHolder.className = this.itemHolderClass;
      itemHolder.innerHTML = `<div>
      ${items[i].itemName}
      </div>
      <div>
      ${items[i].description}
      </div>`;
      this.itemContainer.push(itemHolder);

      // page buttons
      const pageButtonItems = document.createElement("div");
      pageButtonItems.className = this.pageBtnClass;
      pageButtonItems.addEventListener("click", () => this.customPage(i));
      document.getElementById("carousel1-04_pagination").appendChild(pageButtonItems);
      this.pageButtons.push(pageButtonItems);
    }

    // default
    this.setActiveItems(0);
  }

  setActiveItems(index) {
    let activeItem = index;
    let itemContainer = this.itemContainer;
    let pageButtons = this.pageButtons;
    let activePageButton = this.activePageButton;

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

  prevItem() {
    if (this.cIndex === 0) {
      this.cIndex = this.items.length; // go to last
    }
    this.cIndex = this.cIndex - 1;
    this.setActiveItems(this.cIndex);
  }

  nextItem() {
    this.cIndex = this.cIndex + 1;
    this.cIndex = this.cIndex % this.items.length; // go to first
    this.setActiveItems(this.cIndex);
  }

  customPage(num) {
    this.cIndex = num;
    this.setActiveItems(this.cIndex);
  }

  refresh() {
    document.getElementById(this.mainItemContainer).appendChild(this.itemContainer[this.cIndex]);
  }
}

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