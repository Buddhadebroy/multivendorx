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
  !*** ./src/blocks/store-banner/index.js ***!
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





// Luxe Display Template

const LuxeDisplay = [['multivendorx/store-social-icons', {
  align: 'right'
}], ['multivendorx/store-logo', {}], ['multivendorx/store-name', {}], ['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    alignItems: 'center',
    orientation: 'horizontal'
  },
  style: {
    spacing: {
      blockGap: '1.25rem'
    }
  }
}, [['multivendorx/store-email', {}], ['multivendorx/store-phone', {}], ['multivendorx/store-address', {}]]], ['multivendorx/store-description', {}], ['core/spacer', {
  height: '1.25rem'
}], ['multivendorx/follow-store', {
  align: 'right'
}]];

// Signature View Template 
const SignatureView = [
// main container
['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    orientation: 'vertical'
  },
  style: {
    spacing: {
      blockGap: '1.25rem'
    }
  }
}, [['multivendorx/store-logo', {}], ['multivendorx/store-name', {}], ['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    alignItems: 'center',
    orientation: 'horizontal'
  },
  style: {
    spacing: {
      blockGap: '1.25rem'
    }
  }
}, [['multivendorx/store-email', {}], ['multivendorx/store-phone', {}], ['multivendorx/store-address', {}]]], ['multivendorx/store-description', {
  align: 'center'
}], ['multivendorx/follow-store', {
  align: 'right'
}]]]];

// Dynamic Showcase Template 
const DynamicShowcase = [
// main container
['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    alignItems: 'center',
    orientation: 'horizontal'
  },
  style: {
    spacing: {
      blockGap: '1.25rem'
    }
  }
}, [
// left information
['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    alignItems: 'center',
    orientation: 'horizontal'
  },
  style: {
    spacing: {
      blockGap: '1.25rem'
    }
  }
}, [
// logo
['multivendorx/store-logo', {}],
// store details
['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    alignItems: 'center',
    orientation: 'vertical'
  },
  style: {
    spacing: {
      blockGap: '0'
    }
  }
}, [['multivendorx/store-name', {}], ['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    alignItems: 'center',
    orientation: 'horizontal'
  },
  style: {
    spacing: {
      blockGap: '1.25rem'
    }
  }
}, [['multivendorx/store-email', {}], ['multivendorx/store-phone', {}], ['multivendorx/store-address', {}]]], ['multivendorx/store-description', {}]]]]],
// right information
['core/group', {
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    alignItems: 'center',
    orientation: 'horizontal'
  },
  style: {
    spacing: {
      blockGap: '1.25rem'
    }
  }
}, [['multivendorx/follow-store', {
  align: 'right'
}]]]]]];

// Empty template for reset
const EMPTY_TEMPLATE = [];

// Map templates
const TEMPLATES = {
  'luxe-display': LuxeDisplay,
  'signature-view': SignatureView,
  'dynamic-showcase': DynamicShowcase,
  'empty': EMPTY_TEMPLATE
};
const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/buttons', 'core/button', 'core/columns', 'core/column', 'core/row', 'core/image', 'core/spacer', 'multivendorx/store-name', 'multivendorx/store-email', 'multivendorx/store-phone', 'multivendorx/store-address', 'multivendorx/store-social-icons', 'multivendorx/follow-store', 'multivendorx/store-logo'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('multivendorx/store-banner', {
  attributes: {
    height: {
      type: 'string',
      default: 'auto'
    },
    minHeight: {
      type: 'string',
      default: '18.75rem'
    },
    overlayColor: {
      type: 'string',
      default: '#000000'
    },
    overlayOpacity: {
      type: 'number',
      default: 30
    },
    contentColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    },
    backgroundPosition: {
      type: 'string',
      default: 'center'
    },
    contentPosition: {
      type: 'string',
      default: 'center center'
    },
    template: {
      type: 'string',
      default: 'luxe-display'
    },
    bannerUrl: {
      type: 'string',
      default: ''
    }
  },
  edit: ({
    attributes,
    setAttributes,
    clientId
  }) => {
    const {
      height,
      minHeight,
      overlayColor,
      overlayOpacity,
      contentColor,
      backgroundPosition,
      contentPosition,
      template,
      bannerUrl
    } = attributes;
    const currentBannerUrl = bannerUrl;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: `multivendorx-store-banner template-${template}`,
      style: {
        height: height,
        minHeight: minHeight,
        backgroundImage: `url(${currentBannerUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        padding: '2rem'
      }
    });
    const [justifyContent, alignItems] = contentPosition.split(' ');

    // Overlay style
    const overlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: overlayColor,
      opacity: overlayOpacity / 100
    };
    const contentContainerStyle = {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justifyContent || 'center',
      alignItems: alignItems || 'center',
      padding: '2.5rem 0',
      color: contentColor
    };

    // Get current template
    const currentTemplate = TEMPLATES[template] || LuxeDisplay;
    const isOverlayTemplate = template === 'luxe-display';

    // Function to handle template change
    const handleTemplateChange = newTemplate => {
      setAttributes({
        template: newTemplate
      });

      // Replace inner blocks with the new template
      const newTemplateBlocks = TEMPLATES[newTemplate] || LuxeDisplay;
      if (wp.data.select('core/block-editor')) {
        wp.data.dispatch('core/block-editor').replaceInnerBlocks(clientId, JSON.parse(JSON.stringify(newTemplateBlocks)));
      }
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Banner Settings', 'multivendorx'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Template', 'multivendorx'),
            value: template,
            onChange: handleTemplateChange,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Luxe Display', 'multivendorx'),
              value: 'luxe-display'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Signature View', 'multivendorx'),
              value: 'signature-view'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dynamic Showcase', 'multivendorx'),
              value: 'dynamic-showcase'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'multivendorx'),
              value: 'empty'
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height', 'multivendorx'),
            value: height,
            onChange: value => setAttributes({
              height: value
            }),
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small (18.75rem)', 'multivendorx'),
              value: '18.75rem'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Medium (25rem)', 'multivendorx'),
              value: '25rem'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large (31.25rem)', 'multivendorx'),
              value: '31.25rem'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Extra Large (37.5rem)', 'multivendorx'),
              value: '37.5rem'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'multivendorx'),
              value: 'auto'
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Min Height', 'multivendorx'),
            value: minHeight,
            onChange: value => setAttributes({
              minHeight: value
            }),
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small (12.5rem)', 'multivendorx'),
              value: '12.5rem'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Medium (18.75rem)', 'multivendorx'),
              value: '18.75rem'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large (25rem)', 'multivendorx'),
              value: '25rem'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Extra Large (31.25rem)', 'multivendorx'),
              value: '31.25rem'
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Position', 'multivendorx'),
            value: backgroundPosition,
            onChange: value => setAttributes({
              backgroundPosition: value
            }),
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'multivendorx'),
              value: 'center'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'multivendorx'),
              value: 'top'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'multivendorx'),
              value: 'bottom'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'multivendorx'),
              value: 'left'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'multivendorx'),
              value: 'right'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Left', 'multivendorx'),
              value: 'top left'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Right', 'multivendorx'),
              value: 'top right'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Left', 'multivendorx'),
              value: 'bottom left'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Right', 'multivendorx'),
              value: 'bottom right'
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Position', 'multivendorx'),
            value: contentPosition,
            onChange: value => setAttributes({
              contentPosition: value
            }),
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center Center', 'multivendorx'),
              value: 'center center'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center Left', 'multivendorx'),
              value: 'center flex-start'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center Right', 'multivendorx'),
              value: 'center flex-end'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Center', 'multivendorx'),
              value: 'flex-start center'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Left', 'multivendorx'),
              value: 'flex-start flex-start'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Right', 'multivendorx'),
              value: 'flex-start flex-end'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Center', 'multivendorx'),
              value: 'flex-end center'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Left', 'multivendorx'),
              value: 'flex-end flex-start'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Right', 'multivendorx'),
              value: 'flex-end flex-end'
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              marginTop: '1.25em'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Text Color', 'multivendorx')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
              value: contentColor,
              onChange: color => setAttributes({
                contentColor: color
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              marginTop: '1.25em'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overlay Color', 'multivendorx')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
              value: overlayColor,
              onChange: color => setAttributes({
                overlayColor: color
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overlay Opacity (%)', 'multivendorx'),
            value: overlayOpacity,
            onChange: value => setAttributes({
              overlayOpacity: value
            }),
            min: 0,
            max: 100,
            step: 5
          })]
        })
      }), isOverlayTemplate ?
      /*#__PURE__*/
      // ✅ TEMPLATE 1 → content over banner
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        ...blockProps,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: overlayStyle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: contentContainerStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
            template: currentTemplate,
            templateLock: "all",
            allowedBlocks: ALLOWED_BLOCKS
          })
        })]
      }) :
      /*#__PURE__*/
      // ✅ TEMPLATE 2 & 3 → banner first, content below
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        ...blockProps,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: contentContainerStyle,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "banner-image",
            style: {
              height: height,
              minHeight: '25rem',
              width: '100%',
              marginBottom: '1rem',
              backgroundImage: `url(${currentBannerUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: backgroundPosition,
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              style: overlayStyle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
            template: currentTemplate,
            templateLock: "all",
            allowedBlocks: ALLOWED_BLOCKS
          })]
        })
      })]
    });
  },
  save: ({
    attributes
  }) => {
    const {
      height,
      minHeight,
      overlayColor,
      overlayOpacity,
      contentColor,
      backgroundPosition,
      contentPosition,
      template,
      bannerUrl
    } = attributes;
    const currentBannerUrl = bannerUrl;
    const [justifyContent, alignItems] = contentPosition.split(' ');
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: `multivendorx-store-banner template-${template}`,
      style: {
        height: height,
        minHeight: minHeight,
        backgroundImage: `url(${currentBannerUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        padding: '2rem'
      }
    });
    const overlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: overlayColor,
      opacity: overlayOpacity / 100
    };
    const contentContainerStyle = {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justifyContent || 'center',
      alignItems: alignItems || 'center',
      color: contentColor
    };
    const isOverlayTemplate = template === 'luxe-display';
    return isOverlayTemplate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: overlayStyle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: contentContainerStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, {})
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: contentContainerStyle,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "banner-image",
          style: {
            height: height,
            minHeight: '25rem',
            width: '100%',
            marginBottom: '1rem',
            backgroundImage: `url(${currentBannerUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: backgroundPosition,
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: overlayStyle
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, {})]
      })
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map