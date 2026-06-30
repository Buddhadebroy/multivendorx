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

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

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
/*!******************************************!*\
  !*** ./src/blocks/store-review/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* global StoreInfo */





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('multivendorx/store-review', {
  attributes: {
    reviewsToShow: {
      type: 'number',
      default: 3
    },
    showImages: {
      type: 'boolean',
      default: true
    },
    showAdminReply: {
      type: 'boolean',
      default: true
    },
    sortOrder: {
      type: 'string',
      default: 'DESC'
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      reviewsToShow,
      showImages,
      showAdminReply,
      sortOrder
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Review Settings'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of Reviews to Show'),
            value: reviewsToShow,
            onChange: value => setAttributes({
              reviewsToShow: value
            }),
            min: 1,
            max: 10
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sort Order'),
            value: sortOrder,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Newest First', 'multivendorx'),
              value: 'DESC'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Oldest First', 'multivendorx'),
              value: 'ASC'
            }],
            onChange: value => setAttributes({
              sortOrder: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Images'),
            checked: showImages,
            onChange: () => setAttributes({
              showImages: !showImages
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Admin Replies'),
            checked: showAdminReply,
            onChange: () => setAttributes({
              showAdminReply: !showAdminReply
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          className: "wc-block-review-list wc-block-components-review-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            className: "wc-block-review-list-item__item wc-block-components-review-list-item__item wc-block-components-review-list-item__item--has-image",
            "aria-hidden": "false",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "wc-block-review-list-item__info wc-block-components-review-list-item__info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "wc-block-review-list-item__image wc-block-components-review-list-item__image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  "aria-hidden": "true",
                  alt: "",
                  src: "https://secure.gravatar.com/avatar/be3221a6fac131657111728b4d912a877ec158b123d5db3afef3bd8a59784ece?s=96&d=mm&r=g"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "wc-block-review-list-item__meta wc-block-components-review-list-item__meta",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  id: "review-1",
                  "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('new product Rated 4 out of 5', 'multivendorx'),
                  className: "wc-block-review-list-item__rating wc-block-components-review-list-item__rating",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    "aria-hidden": "true",
                    className: "wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars wc-block-review-list-item__rating__stars--4",
                    role: "img",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      style: {
                        width: '80%'
                      },
                      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rated', 'multivendorx'), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                        className: "rating",
                        children: "4"
                      }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('out of 5', 'multivendorx')]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "wc-block-review-list-item__product wc-block-components-review-list-item__product",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                    href: "http://localhost:8889/product/new-product/",
                    "aria-labelledby": "review-1",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('new product', 'multivendorx')
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "wc-block-review-list-item__author wc-block-components-review-list-item__author",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('admin', 'multivendorx')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("time", {
                  className: "wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",
                  dateTime: "2026-03-05T13:47:31",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('March 5, 2026', 'multivendorx')
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "wc-block-review-list-item__text wc-block-components-review-list-item__text",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('dd', 'multivendorx')
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            className: "wc-block-review-list-item__item wc-block-components-review-list-item__item wc-block-components-review-list-item__item--has-image",
            "aria-hidden": "false",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "wc-block-review-list-item__info wc-block-components-review-list-item__info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "wc-block-review-list-item__image wc-block-components-review-list-item__image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  "aria-hidden": "true",
                  alt: "",
                  src: "https://secure.gravatar.com/avatar/be3221a6fac131657111728b4d912a877ec158b123d5db3afef3bd8a59784ece?s=96&d=mm&r=g"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "wc-block-review-list-item__meta wc-block-components-review-list-item__meta",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  id: "review-2",
                  "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hat Rated 4 out of 5', 'multivendorx'),
                  className: "wc-block-review-list-item__rating wc-block-components-review-list-item__rating",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    "aria-hidden": "true",
                    className: "wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars wc-block-review-list-item__rating__stars--4",
                    role: "img",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      style: {
                        width: '80%'
                      },
                      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rated', 'multivendorx'), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                        className: "rating",
                        children: "4"
                      }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('out of 5', 'multivendorx')]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "wc-block-review-list-item__product wc-block-components-review-list-item__product",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                    href: "http://localhost:8889/product/hat/",
                    "aria-labelledby": "review-2",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hat', 'multivendorx')
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "wc-block-review-list-item__author wc-block-components-review-list-item__author",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('admin', 'multivendorx')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("time", {
                  className: "wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",
                  dateTime: "2026-03-02T13:52:43",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('March 2, 2026', 'multivendorx')
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "wc-block-review-list-item__text wc-block-components-review-list-item__text",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('dgdggdd', 'multivendorx')
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            className: "wc-block-review-list-item__item wc-block-components-review-list-item__item wc-block-components-review-list-item__item--has-image",
            "aria-hidden": "false",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "wc-block-review-list-item__info wc-block-components-review-list-item__info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "wc-block-review-list-item__image wc-block-components-review-list-item__image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  "aria-hidden": "true",
                  alt: "",
                  src: "https://secure.gravatar.com/avatar/1b8d7f9e3a2c4d5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0?s=96&d=mm&r=g"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "wc-block-review-list-item__meta wc-block-components-review-list-item__meta",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  id: "review-3",
                  "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-shirt Rated 5 out of 5', 'multivendorx'),
                  className: "wc-block-review-list-item__rating wc-block-components-review-list-item__rating",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    "aria-hidden": "true",
                    className: "wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars wc-block-review-list-item__rating__stars--5",
                    role: "img",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      style: {
                        width: '100%'
                      },
                      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rated', 'multivendorx'), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                        className: "rating",
                        children: "5"
                      }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('out of 5', 'multivendorx')]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "wc-block-review-list-item__product wc-block-components-review-list-item__product",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                    "aria-labelledby": "review-3",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('T-shirt', 'multivendorx')
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "wc-block-review-list-item__author wc-block-components-review-list-item__author",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('johndoe', 'multivendorx')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("time", {
                  className: "wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",
                  dateTime: "2026-03-10T09:15:22",
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('March 10, 2026', 'multivendorx')
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "wc-block-review-list-item__text wc-block-components-review-list-item__text",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Great quality t-shirt, fits perfectly and the material is super comfortable! Highly recommended.', 'multivendorx')
                  })
                })
              })
            })]
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      reviewsToShow,
      showImages,
      showAdminReply,
      sortOrder
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...blockProps,
      className: "multivendorx-review-list",
      "data-reviews-to-show": reviewsToShow,
      "data-show-images": showImages,
      "data-show-admin-reply": showAdminReply,
      "data-sort-order": sortOrder
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map