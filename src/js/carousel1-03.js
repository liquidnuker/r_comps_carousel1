import {store} from "./store.js";

const carousel1_03 = (function () {
  let items = store.items;
  let cIndex = 0;

  let itemContainer = [];

  // for pageButtons
  let pageButtons = [];
  let activePageButton = 0;

  function init() {
    refresh();
    addEvents();
    showItems();
  }

  function addEvents() {
    document.getElementById("carousel1_03_previous").addEventListener("click", () => {
      prevItem();
    });

    document.getElementById("carousel1_03_next").addEventListener("click", () => {
      nextItem();
    });
  }

  function showItems() {
    for (let i = 0; i < items.length; i++) {
      const cItems = `<div>
        ${items[i].itemName} <br>
        <span class="carousel1-03_description">${items[i].description}</span>
        </div>`;
      
      itemContainer.push(cItems);
      
      // page buttons
      const pageButtonItems = document.createElement("div");
      pageButtonItems.className = "carousel1_03_pagebuttons";
      pageButtonItems.addEventListener("click", () => customPage(i));
      document.getElementById("carousel1-03_pagination").appendChild(pageButtonItems);
      pageButtons.push(pageButtonItems);
      }

    // default
    setActivePageButton(0);
  }

  function setActivePageButton(index) {
    let activeItem = index;

    pageButtons[activeItem].className += " carousel1_03_pagebuttons--active";
    pageButtons[activeItem].setAttribute("aria-selected", true);

    if (activePageButton !== activeItem) {
      pageButtons[activePageButton].className = "carousel1_03_pagebuttons";
      pageButtons[activePageButton].setAttribute("aria-selected", false);

      // set current activePageButton
      activePageButton = activeItem;
    }
    refresh();
  }

  function customPage(num) {
    cIndex = num;
    setActivePageButton(num);
  }

  function prevItem() {
    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;

    setActivePageButton(cIndex);
    // return items[cIndex];
  }

  function nextItem() {
    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first

    setActivePageButton(cIndex);
    // return items[cIndex];
  }

  function refresh() {
    document.getElementById("carousel1-03_content").innerHTML = itemContainer[cIndex];
  }

  return {
    init: init
  };
})();

// todo: pass the selector
carousel1_03.init();