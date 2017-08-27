import {store} from "./store.js";

const carousel1_04 = (function () {
  let items = store.items;
  let cIndex = 0;
  let itemContainer = [];

  // for pageButtons
  let pageButtons = [];
  let activePageButton = 0;

  function init() {
    addEvents();
    showItems();
  }

  function addEvents() {
    document.getElementById("carousel1_04_previous").addEventListener("click", () => {
      prevItem();
    });

    document.getElementById("carousel1_04_next").addEventListener("click", () => {
      nextItem();
    });
  }

  function showItems() {
    for (let i = 0; i < items.length; i++) {
      // main items
      const itemHolder = document.createElement("div");
      itemHolder.className = "carousel1_04_items";
      itemHolder.innerHTML = `<div>
      ${items[i].itemName}
      </div>
      <div>
      ${items[i].description}
      </div>`;
      itemContainer.push(itemHolder);

      // page buttons
      const pageButtonItems = document.createElement("div");
      pageButtonItems.className = "carousel1_04_pagebuttons";
      pageButtonItems.addEventListener("click", () => customPage(i));
      document.getElementById("carousel1-04_pagination").appendChild(pageButtonItems);
      pageButtons.push(pageButtonItems);
    }

    // default
    setActiveItems(0);
  }

  function setActiveItems(index) {
    let activeItem = index;

    // main items
    itemContainer[activeItem].className += " carousel1_04_items--active";

    pageButtons[activeItem].className += " carousel1_04_pagebuttons--active";
    pageButtons[activeItem].setAttribute("aria-selected", true);

    if (activePageButton !== activeItem) {
      // main items
      itemContainer[activePageButton].className = "carousel1_04_items";

      pageButtons[activePageButton].className = "carousel1_04_pagebuttons";
      pageButtons[activePageButton].setAttribute("aria-selected", false);

      // set current activePageButton
      activePageButton = activeItem;
    }
    refresh();
  }

  function customPage(num) {
    cIndex = num;
    setActiveItems(num);
  }

  function prevItem() {
    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;
    setActiveItems(cIndex);
    // return items[cIndex];
  }

  function nextItem() {
    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first
    setActiveItems(cIndex);
    // return items[cIndex];
  }

  function refresh() {
    document.getElementById("carousel1-04_content").appendChild(itemContainer[cIndex]);
  }

  return {
    init: init
  };
})();

// todo: pass the selector
carousel1_04.init();