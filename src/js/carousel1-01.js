import {store} from "./store.js";

// 
// ======================================================/
const carousel1_01 = {
  items: store.items,
  cIndex: 0,
  nextItem: function () {
    let cIndex = this.cIndex; // "this" remover
    let items = this.items;

    cIndex = cIndex + 1;
    cIndex = cIndex % items.length; // go to first
    // return items[cIndex];

    this.cIndex = cIndex; // main cIndex
    this.refresh();
  },
  prevItem: function () {
    let cIndex = this.cIndex; // "this" remover
    let items = this.items;

    if (cIndex === 0) {
      cIndex = items.length; // go to last
    }
    cIndex = cIndex - 1;
    // return items[cIndex];

    this.cIndex = cIndex;
    this.refresh();
  },
  customPage: function (num) {
    this.cIndex = num;
    this.refresh();
  },
  refresh: function () {
    document.getElementById("carousel1-01_content").innerHTML = this.items[this.cIndex].itemName;
  },
  showPageButtons: function () {
    for (let i = 0; i < this.items.length; i++) {
      const pageButtons = document.createElement("span");
      pageButtons.className = "carousel1-01_pagebuttons";
      pageButtons.textContent = i;
      pageButtons.addEventListener("click", () => this.customPage(i));
      document.getElementById("carousel1-01_pagination").appendChild(pageButtons);
    }
  }
};

carousel1_01.refresh();
carousel1_01.showPageButtons();

//
// ======================================================/
(function () {
  const documentReady = () => {

    document.getElementById("carousel1_01_previous").addEventListener("click", () => {
      carousel1_01.prevItem();
    });

    document.getElementById("carousel1_01_next").addEventListener("click", () => {
      carousel1_01.nextItem();
    });

  };
  if (document.readyState !== "loading") documentReady();
  else if (document.addEventListener) document.addEventListener("DOMContentLoaded", documentReady);
  else document.attachEvent("onreadystatechange", () => {
    if (document.readyState === "complete") documentReady();
  });
})();