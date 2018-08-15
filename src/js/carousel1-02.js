// Carousel1-02
// ======================================================/
export default class Carousel1_02 {
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

  getId(el) {
    return document.getElementById(el);
  }

  addEvents() {
    this.getId(this.btn_prevClass).addEventListener("click", () => {
      this.setActivePageButton(this.prevItem());
    });

    this.getId(this.btn_nextClass).addEventListener("click", () => {
      this.setActivePageButton(this.nextItem());
    });
  }

  prevItem() {
    if (this.cIndex === 0) {
      this.cIndex = this.items.length; // go to last
    }
    this.cIndex = this.cIndex - 1;
    return this.cIndex;
  }

  nextItem() {
    this.cIndex = this.cIndex + 1;
    this.cIndex = this.cIndex % this.items.length; // go to first
    return this.cIndex;
  }

  customPage(num) {
    this.cIndex = num;
    this.setActivePageButton(num);
  }

  showPagebuttons() {
    for (let i = 0; i < this.items.length; i++) {
      const pageButtonItems = document.createElement("div");
      pageButtonItems.className = this.pageBtnItemClass;

      pageButtonItems.addEventListener("click", () => this.customPage(i));
      this.getId(this.pageBtnHolder).appendChild(pageButtonItems);
      this.pageButtons.push(pageButtonItems);
    }
    this.setActivePageButton(this.cIndex);
  }

  setActivePageButton(index) {
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

  refresh() {
    this.getId(this.carouselContent).innerHTML = this.items[this.cIndex].itemName;
  }
}