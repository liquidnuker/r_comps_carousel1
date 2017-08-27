import Paginate from "./vendor/Paginate.js";

// const carousel1_05 = (function () {

//   // temp item data
//   let items = [];
//   let num = 0;
//   for (let i = 0, l = 32; i < l; i++) {
//     num += 1;
//     items.push(num);
//   }

//   let pager = new Paginate(items);

//   let cIndex = 0;
//   let currentItem = 0;
//   let itemContainer = [];

//   let buttonContainer;
//   let currentButton = 0;

//   function init() {
//     addEvents();
//     showPageButtons(1);
//   }

//   function addEvents() {
//     document.getElementById("carousel1_05_previous").addEventListener("click", () => {
//       prevItem();
//     });

//     document.getElementById("carousel1_05_next").addEventListener("click", () => {
//       nextItem();
//     });
//   }

//   function showPageButtons(itemSetNum) {
//     document.getElementById("carousel1-05_pagination").innerHTML = "";
//     let itemSet = pager.page(itemSetNum);

//     // main items
//     for (let i = 0, l = items.length; i < l; i++) {
//       let itemHolder = document.createElement("div");
//       itemHolder.textContent = items[i];
//       // push for adding className later
//       itemContainer.push(itemHolder);
//     }

//     // pagebuttons
//     buttonContainer = [];
//     for (let i = 0, l = itemSet.length; i < l; i++) {
//       let itemSetHolder = document.createElement("span");
//       itemSetHolder.textContent = itemSet[i];
//       // push for adding className later
//       buttonContainer.push(itemSetHolder);
//     }

//     buttonContainer.forEach(function (i, index) {
//       i.className = "carousel1-05_pagebuttons";
//       i.addEventListener("click", function () {
//         showPage(i.textContent);
//         setActivePage(index);
//       });
//       document.getElementById("carousel1-05_pagination").appendChild(i);

//     });

//     // default
//     setActiveItems(cIndex);
//   }

//   function setActivePage(index) {
//     let activeButton = index;

//     buttonContainer[activeButton].className += " carousel1-05_pagebuttons--active";
//     if (currentButton !== activeButton) {

//       // if buttons < 10
//       if (buttonContainer[currentButton] === undefined) {
//         currentButton = index;
//         return;
//       }
//       // set new currentButton
//       buttonContainer[currentButton].className = "carousel1-05_pagebuttons";
//       currentButton = activeButton;
//     }
//   }

//   function setActiveItems(index) {
//     let activeItem = index;
//     itemContainer[activeItem].className += " carousel1_05_items--active";

//     if (currentItem !== activeItem) {
//       itemContainer[currentItem].className = "carousel1_05_items";

//       // set new currentItem
//       currentItem = activeItem;
//     }
//     refresh();
//   }

//   function showPage(num) {
//     cIndex = num - 1;
//     setActiveItems(cIndex);
//   }

//   function prevItem() {
//     if (pager.currentPage === 1) {
//       showPageButtons(pager.totalPages);
//     } else {
//       showPageButtons(pager.currentPage - 1);
//     }
//   }

//   function nextItem() {
//     if (!pager.hasNext()) {
//       showPageButtons(1);
//     } else {
//       showPageButtons(pager.currentPage + 1);
//     }
//   }

//   function refresh() {
//     document.getElementById("carousel1-05_content").appendChild(itemContainer[cIndex]);
//   }

//   return {
//     init: init
//   };
// })();

// // todo: pass the selector
// carousel1_05.init();

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

  // prototypes
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

    let self = this;
    buttonContainer.forEach((i, index) => {
      i.className = "carousel1-05_pagebuttons";
      i.addEventListener("click", function () {
        self.showPage(i.textContent);
        self.setActivePage(index);
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

let zz = new Carousel1_05({
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

zz.init();