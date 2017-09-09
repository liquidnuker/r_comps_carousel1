import Paginate from "./vendor/Paginate.js";

// temp item data
let items = [];
let num = 0;
for (let i = 0, l = 32; i < l; i++) {
  num += 1;
  items.push(num);
}

class Carousel1_05 {
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

  addEvents() {
    document.getElementById(this.navPrevious).addEventListener("click", () => {
      this.prevItem();
    });

    document.getElementById(this.navNext).addEventListener("click", () => {
      this.nextItem();
    });
  }

  showPageButtons(itemSetNum) {
    document.getElementById(this.paginator).innerHTML = "";
    let itemSet = this.pager.page(itemSetNum);
    let itemContainer = this.itemContainer;
    let buttonContainer = this.buttonContainer;
    let paginator = this.paginator;
    let cIndex = this.cIndex;

    // main items
    for (let i = 0, l = items.length; i < l; i++) {
      let itemHolder = document.createElement("div");
      itemHolder.textContent = items[i];
      // push for adding className later
      itemContainer.push(itemHolder);
    }

    // pagebuttons
    buttonContainer = [];
    for (let i = 0, l = itemSet.length; i < l; i++) {
      let itemSetHolder = document.createElement("span");
      itemSetHolder.textContent = itemSet[i];
      // push for adding className later
      buttonContainer.push(itemSetHolder);
    }

    // let self = this;
    buttonContainer.forEach((i, index) => {
      i.className = "carousel1-05_pagebuttons";
      i.addEventListener("click", () => {
        this.showPage(i.textContent);
        this.setActivePage(index);
      });
      document.getElementById(paginator).appendChild(i);
    });

    this.buttonContainer = buttonContainer;

    // default
    this.setActiveItems(cIndex);
  }

  setActivePage(index) {
    let activeButton = index;
    let buttonContainer = this.buttonContainer;
    let currentButton = this.currentButton;

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

  setActiveItems(index) {
    let activeItem = index;
    let itemContainer = this.itemContainer;
    let currentItem = this.currentItem;

    itemContainer[activeItem].className += this.item_activeClass;

    if (currentItem !== activeItem) {
      itemContainer[currentItem].className = this.item_inActiveClass;

      // set new currentItem
      this.currentItem = activeItem;
    }
    this.refresh();
  }

  showPage(num) {
    this.cIndex = num - 1;
    this.setActiveItems(this.cIndex);
  }

  prevItem() {
    let pager = this.pager;

    if (pager.currentPage === 1) {
      this.showPageButtons(pager.totalPages);
    } else {
      this.showPageButtons(pager.currentPage - 1);
    }
  }

  nextItem() {
    let pager = this.pager;

    if (!pager.hasNext()) {
      this.showPageButtons(1);
    } else {
      this.showPageButtons(pager.currentPage + 1);
    }
  }

  refresh() {
    let itemContainer = this.itemContainer;
    let cIndex = this.cIndex;
    document.getElementById(this.mainItemHolder).appendChild(itemContainer[cIndex]);
  }
}

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

class Carousel6 extends Carousel1_05 {
  extraFn() {
    // console.log(this.pageBtn_activeClass); // carousel1-06_pagebuttons--active
    this.init(); // ok
  }
}

let c6 = new Carousel6({
  dataSrc: items,
  mainItemHolder: "carousel1-06_content",
  navPrevious: "carousel1_06_previous",
  navNext: "carousel1_06_next",
  paginator: "carousel1-06_pagination",
  pageBtn_activeClass: " carousel1-06_pagebuttons--active",
  pageBtn_inActiveClass: "carousel1-06_pagebuttons",
  item_activeClass: " carousel1_06_items--active",
  item_inActiveClass: "carousel1_06_items",
});

// c6.extraFn();
