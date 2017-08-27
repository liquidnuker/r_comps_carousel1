import Paginate from "./vendor/Paginate.js";

const carousel1_05 = (function () {

  // temp item data
  let items = [];
  let num = 0;
  for (let i = 0, l = 32; i < l; i++) {
    num += 1;
    items.push(num);
  }

  let pager = new Paginate(items);

  let cIndex = 0;
  let currentItem = 0;
  let itemContainer = [];

  let buttonContainer;
  let currentButton = 0;

  function init() {
    addEvents();
    showPageButtons(1);
  }

  function addEvents() {
    document.getElementById("carousel1_05_previous").addEventListener("click", () => {
      prevItem();
    });

    document.getElementById("carousel1_05_next").addEventListener("click", () => {
      nextItem();
    });
  }

  function showPageButtons(itemSetNum) {
    document.getElementById("carousel1-05_pagination").innerHTML = "";
    let itemSet = pager.page(itemSetNum);

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

    buttonContainer.forEach(function (i, index) {
      i.className = "carousel1-05_pagebuttons";
      i.addEventListener("click", function () {
        showPage(i.textContent);
        test(index);
      });
      document.getElementById("carousel1-05_pagination").appendChild(i);

    });

    // default
    setActiveItems(cIndex);
  }

  function test(index) {
    let activeButton = index;

    buttonContainer[activeButton].className += " carousel1-05_pagebuttons--active";
    if (currentButton !== activeButton) {

      // if buttons < 10
      if (buttonContainer[currentButton] === undefined) {
        currentButton = index;
        return;
      }
      // set new currentButton
      buttonContainer[currentButton].className = "carousel1-05_pagebuttons";
      currentButton = activeButton;
    }
  }

  function setActiveItems(index) {
    let activeItem = index;
    itemContainer[activeItem].className += " carousel1_05_items--active";

    if (currentItem !== activeItem) {
      itemContainer[currentItem].className = "carousel1_05_items";

      // set new currentItem
      currentItem = activeItem;
    }
    refresh();
  }

  function showPage(num) {
    cIndex = num - 1;
    setActiveItems(cIndex);
  }

  function prevItem() {
    if (pager.currentPage === 1) {
      showPageButtons(pager.totalPages);
    } else {
      showPageButtons(pager.currentPage - 1);
    }
  }

  function nextItem() {
    if (!pager.hasNext()) {
      showPageButtons(1);
    } else {
      showPageButtons(pager.currentPage + 1);
    }
  }

  function refresh() {
    document.getElementById("carousel1-05_content").appendChild(itemContainer[cIndex]);
  }

  return {
    init: init
  };
})();

// todo: pass the selector
carousel1_05.init();