import Paginate from "./vendor/Paginate.js";

// temp item data
export const items = [];
let num = 0;
for (let i = 0, l = 32; i < l; i++) {
  // num += 1;
  items.push(num += 1);
}

export default class Carousel1_05 {
  constructor(opts) {
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

  init() {
    this.pager = new Paginate(items);
    this.addEvents();
    this.showPageButtons(1);
  }

  getId(el) {
    return document.getElementById(el);
  }

  addEvents() {
    this.getId(this.navPrevious).addEventListener("click", () => {
      this.showPageButtons(this.prevItem());
    });

    this.getId(this.navNext).addEventListener("click", () => {
      this.showPageButtons(this.nextItem());
    });
  }

  showPageButtons(num) {
    this.getId(this.paginator).innerHTML = "";
    let itemSet = this.pager.page(num);
        
    // main items
    for (let i = 0, l = items.length; i < l; i++) {
      let itemHolder = document.createElement("div");
      itemHolder.textContent = items[i];
      // push for adding className later
      this.itemContainer.push(itemHolder);
    }

    // pagebuttons
    this.buttonContainer = [];
    for (let i = 0, l = itemSet.length; i < l; i++) {
      let itemSetHolder = document.createElement("span");
      itemSetHolder.textContent = itemSet[i];
      // push for adding className later
      this.buttonContainer.push(itemSetHolder);
    }

    this.buttonContainer.forEach((i, index) => {
      i.className = "carousel1-05_pagebuttons";
      i.addEventListener("click", () => {
        this.showPage(i.textContent);
        this.setActivePage(index);
      });
      this.getId(this.paginator).appendChild(i);
    });

    // default
    this.setActiveItems(this.cIndex);
  }

  setActivePage(index) {
    this.buttonContainer[index].className += this.pageBtn_activeClass;
    if (this.currentButton !== index) {

      // if buttons < 10
      if (this.buttonContainer[this.currentButton] === undefined) {
        this.currentButton = index;
        return;
      }
      // set new currentButton
      this.buttonContainer[this.currentButton].className = this.pageBtn_inActiveClass;
      this.currentButton = index;
    }
  }

  setActiveItems(index) {
    this.itemContainer[index].className += this.item_activeClass;

    if (this.currentItem !== index) {
      this.itemContainer[this.currentItem].className = this.item_inActiveClass;

      // set new currentItem
      this.currentItem = index;
    }
    this.refresh();
  }

  showPage(num) {
    this.cIndex = num - 1;
    this.setActiveItems(this.cIndex);
  }

  prevItem() {
    if (this.pager.currentPage === 1) {
      return this.pager.totalPages;
    } else {
      return this.pager.currentPage - 1;
    }
  }

  nextItem() {
    if (!this.pager.hasNext()) {
      return 1;
    } else {
      return this.pager.currentPage + 1;
    }
  }

  refresh() {
    this.getId(this.mainItemHolder).appendChild(this.itemContainer[this.cIndex]);
  }
}