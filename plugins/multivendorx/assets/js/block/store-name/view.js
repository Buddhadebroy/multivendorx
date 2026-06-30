/******/ (() => { // webpackBootstrap
/*!***************************************!*\
  !*** ./src/blocks/store-name/view.js ***!
  \***************************************/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.multivendorx-store-name').forEach(el => {
    el.textContent = StoreInfo.storeDetails.storeName;
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map