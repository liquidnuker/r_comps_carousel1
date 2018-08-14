// Carousel1_01
// ======================================================/
export default class Carousel1_01 {
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
    this.showItems(this.cIndex);
    this.addEvents();
    this.showPageButtons();
  }

  getId(el) {
    return document.getElementById(el);
  }

  addEvents() {
    this.getId(this.btn_prev).addEventListener("click", () => {
      this.showItems(this.prevItem());
    });

    this.getId(this.btn_next).addEventListener("click", () => {
      this.showItems(this.nextItem());
    });
  }

  showPageButtons() {
    for (let i = 0; i < this.items.length; i++) {
      const pageButtons = document.createElement("span");
      pageButtons.className = this.pageBtnClass;
      pageButtons.textContent = i;
      pageButtons.addEventListener("click", () => this.customPage(i));
      this.getId(this.pageBtnHolder).appendChild(pageButtons);
    }
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
    this.showItems(this.cIndex);
  }

  showItems(index) {
    this.getId(this.carouselContent).innerHTML = this.items[index].itemName;
  }
}