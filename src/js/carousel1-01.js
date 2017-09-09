import {store} from "./store.js";

// Carousel1_01
// ======================================================/
class Carousel1_01 {
  constructor(opts) {
    this.items = opts.items;
    this.cIndex = opts.defaultIndex;
    this.carouselContent = opts.carouselContent;

    this.btn_prev = opts.btn_prev;
    this.btn_next = opts.btn_next;
    this.pageBtnClass = opts.pageBtnClass;
    this.pageBtnHolder = opts.pageBtnHolder;
  }

  init() {
    this.refresh();
    this.addEvents();
    this.showPageButtons();
  }

  addEvents() {
    document.getElementById(this.btn_prev).addEventListener("click", () => {
      this.prevItem();
    });

    document.getElementById(this.btn_next).addEventListener("click", () => {
      this.nextItem();
    });
  }

  showPageButtons() {
    for (let i = 0; i < this.items.length; i++) {
      const pageButtons = document.createElement("span");
      pageButtons.className = this.pageBtnClass;
      pageButtons.textContent = i;
      pageButtons.addEventListener("click", () => this.customPage(i));
      document.getElementById(this.pageBtnHolder).appendChild(pageButtons);
    } 
  }

  prevItem() {
    let cIndex = this.cIndex; 
    let items = this.items;

    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;
    
    this.cIndex = cIndex;
    this.refresh();
  }

  nextItem() {
    let cIndex = this.cIndex; 
    let items = this.items;

    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first
    
    this.cIndex = cIndex; // main cIndex
    this.refresh();
  }

  customPage(num) {
    this.cIndex = num;
    this.refresh();
  }

  refresh() {
    document.getElementById(this.carouselContent).innerHTML = this.items[this.cIndex].itemName;
  }
}

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
