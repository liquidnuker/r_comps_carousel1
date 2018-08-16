export default class Carousel1_03 {
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

  getId(el) {
    return document.getElementById(el);
  }

  addEvents() {
    this.getId(this.prevBtn).addEventListener("click", () => {
      this.setActivePageButton(this.prevItem());
    });

    this.getId(this.nextBtn).addEventListener("click", () => {
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

  showItems() {
    for (let i = 0; i < this.items.length; i++) {
      let cItems = `<div>
        ${this.items[i].itemName} <br>
        <span class="carousel1-03_description">${this.items[i].description}</span>
        </div>`;

      this.itemContainer.push(cItems);

      // page buttons
      let pageButtonItems = document.createElement("div");
      pageButtonItems.className = this.pageBtnItemClass;
      pageButtonItems.addEventListener("click", () => this.customPage(i));
      this.getId(this.pageBtnHolder).appendChild(pageButtonItems);
      this.pageButtons.push(pageButtonItems);
    }

    // default
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
    this.getId(this.carouselContent).innerHTML = this.itemContainer[this.cIndex];
  }
}