export default class Carousel1_04 {
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

  init() {
    this.addEvents();
    this.showItems();
  }

  getId(el) {
    return document.getElementById(el);
  }

  addEvents() {
    this.getId(this.navPrevious).addEventListener("click", () => {
      this.setActiveItems(this.prevItem());
    });

    this.getId(this.navNext).addEventListener("click", () => {
      this.setActiveItems(this.nextItem());
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
      <div class="carousel1-04_description">
      ${items[i].description}
      </div>`;
      this.itemContainer.push(itemHolder);

      // page buttons
      const pageButtonItems = document.createElement("div");
      pageButtonItems.className = this.pageBtnClass;
      pageButtonItems.addEventListener("click", () => this.customPage(i));
      this.getId("carousel1-04_pagination").appendChild(pageButtonItems);
      this.pageButtons.push(pageButtonItems);
    }

    // default
    this.setActiveItems(0);
  }

  setActiveItems(index) {
    this.itemContainer[index].className += this.item_active;

    this.pageButtons[index].className += this.pageBtn_active;
    this.pageButtons[index].setAttribute("aria-selected", true);

    if (this.activePageButton !== index) {
      this.itemContainer[this.activePageButton].className = this.item_inActive;

      this.pageButtons[this.activePageButton].className = this.pageBtn_inActive;
      this.pageButtons[this.activePageButton].setAttribute("aria-selected", false);

      // set current activePageButton
      this.activePageButton = index;
    }
    this.refresh();
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
    this.setActiveItems(this.cIndex);
  }

  refresh() {
    this.getId(this.mainItemContainer).appendChild(this.itemContainer[this.cIndex]);
  }
}