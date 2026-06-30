/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/blocks/store-tabs/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Edit = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "is-style-minimal  alignwide wp-block-woocommerce-product-details",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "components-disabled multivendorx-store-products-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
        className: "wc-tabs tabs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          className: "description_tab active",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            children: [" ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Products', 'multivendorx'), " "]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          className: "description_tab",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            children: [" ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reviews', 'multivendorx'), " "]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          className: "description_tab",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            children: [" ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Policy', 'multivendorx'), " "]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "wc-block-product-template is-flex-container columns-3",
        role: "list",
        children: [{
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Classic T-Shirt', 'multivendorx'),
          price: '₹499',
          type: 'simple',
          hasSale: true
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Denim Jacket', 'multivendorx'),
          price: '₹1,299',
          type: 'simple',
          hasSale: false
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Running Shoes', 'multivendorx'),
          price: '₹1,999',
          regularPrice: '₹2,499',
          type: 'variable',
          hasSale: true
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cotton Hoodie', 'multivendorx'),
          price: '₹899',
          type: 'simple',
          hasSale: true
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sports Cap', 'multivendorx'),
          price: '₹399',
          type: 'simple',
          hasSale: false
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Yoga Mat', 'multivendorx'),
          price: '₹799',
          regularPrice: '₹999',
          type: 'variable',
          hasSale: true
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gym Bag', 'multivendorx'),
          price: '₹1,499',
          type: 'simple',
          hasSale: false
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Water Bottle', 'multivendorx'),
          price: '₹249',
          type: 'simple',
          hasSale: true
        }, {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Training Gloves', 'multivendorx'),
          price: '₹599',
          regularPrice: '₹799',
          type: 'variable',
          hasSale: true
        }].map((product, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
          className: "wc-block-product",
          role: "listitem",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "wc-block-components-product-image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: "/wp-content/uploads/woocommerce-placeholder.webp",
                alt: product.name,
                className: "wp-block-woocommerce-product-image"
              })
            }), product.hasSale && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "wc-block-components-product-sale-badge wc-block-components-product-sale-badge--align-right",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                "aria-hidden": "true",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale', 'multivendorx')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "screen-reader-text",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product on sale', 'multivendorx')
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "wp-block-post-title has-text-align-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "#",
              children: product.name
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "wc-block-components-product-price price wc-block-components-product-price--align-center",
            children: product.type === 'variable' && product.regularPrice ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "wc-block-components-product-price__value",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "screen-reader-text",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous price:', 'multivendorx')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("del", {
                className: "wc-block-components-product-price__regular",
                children: product.regularPrice
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "screen-reader-text",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Discounted price:', 'multivendorx')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ins", {
                className: "wc-block-components-product-price__value is-discounted",
                children: product.price
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "wc-block-components-product-price__value",
              children: product.price
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "wp-block-button wc-block-components-product-button align-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "#",
              className: "wp-block-button__link wp-element-button add_to_cart_button",
              children: product.type === 'variable' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select options', 'multivendorx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add to cart', 'multivendorx')
            })
          })]
        }, index))
      })]
    })
  });
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('multivendorx/store-tabs', {
  apiVersion: 3,
  edit: Edit,
  save() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: "multivendorx-store-tabs"
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map