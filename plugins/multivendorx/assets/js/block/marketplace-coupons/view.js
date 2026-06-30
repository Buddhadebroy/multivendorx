/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/marketplace-coupons/StoreCouponList.jsx"
/*!************************************************************!*\
  !*** ./src/blocks/marketplace-coupons/StoreCouponList.jsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/lib/axios.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_commonFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/commonFunction */ "./src/services/commonFunction.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* global couponList */





const previewCoupons = [{
  id: 1,
  code: 'SAVE10',
  amount: '10',
  discount_type: 'percent',
  date_expires: '2026-12-31'
}, {
  id: 2,
  code: 'WELCOME20',
  amount: '20',
  discount_type: 'percent',
  date_expires: '2026-10-01'
}, {
  id: 3,
  code: 'FLAT50',
  amount: '50',
  discount_type: 'fixed_cart',
  date_expires: null
}];
const StoreCouponList = ({
  perPage = 5,
  orderBy = 'date',
  order = 'DESC',
  storeId,
  isPreview = false
}) => {
  const [coupons, setCoupons] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [copiedCode, setCopiedCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const isWidget = !!couponList?.storeDetails?.storeId;

  // Reset page when filters change
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPage(1);
  }, [perPage, orderBy, order]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (copiedCode) {
      const timer = setTimeout(() => setCopiedCode(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedCode]);
  const copyToClipboard = code => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
    });
  };
  const fetchCoupons = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const params = {
      per_page: perPage,
      page,
      orderby: orderBy,
      order: order?.toLowerCase() === 'asc' ? 'asc' : 'desc',
      meta_key: 'multivendorx_store_id'
    };
    if (storeId) {
      params.value = storeId;
    }
    if (couponList?.storeDetails?.storeId) {
      params.value = couponList.storeDetails.storeId;
    }
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${couponList.apiUrl}/wc/v3/coupons`, {
      headers: {
        'X-WP-Nonce': couponList.nonce
      },
      params
    }).then(response => {
      setCoupons(response.data || []);
    }).catch(() => {
      setCoupons([]);
    });
  }, [page, perPage, orderBy, order]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isPreview) {
      setCoupons(previewCoupons);
      return;
    }
    fetchCoupons();
  }, [fetchCoupons, isPreview]);

  //If no coupons → render nothing
  if (!coupons.length) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Coupons', 'multivendorx')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: `store-coupon-list ${!isWidget ? 'shortcode' : ''}`,
      children: coupons.map(coupon => {
        const discountLabel = coupon.discount_type === 'percent' ? `${coupon.amount}%` : `${coupon.amount}`;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "coupon-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            children: [discountLabel, ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('off on all orders', 'multivendorx')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
            children: [coupon.code, copiedCode === coupon.code ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20px",
                height: "20px",
                viewBox: "0 0 24 24",
                fill: "none",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
                  id: "Interface",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    id: "Vector",
                    d: "M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969",
                    stroke: "#000000",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                })
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              role: "button",
              onClick: () => copyToClipboard(coupon.code),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20px",
                height: "20px",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z",
                  fill: "#0F0F0F"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z",
                  fill: "#0F0F0F"
                })]
              })
            })]
          }), coupon?.date_expires && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("strong", {
              children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Expires', 'multivendorx'), ":"]
            }), ' ', (0,_services_commonFunction__WEBPACK_IMPORTED_MODULE_3__.formatDate)(coupon.date_expires)]
          })]
        }, coupon.id);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreCouponList);

/***/ },

/***/ "./src/blocks/marketplace-coupons/view.js"
/*!************************************************!*\
  !*** ./src/blocks/marketplace-coupons/view.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StoreCouponList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreCouponList */ "./src/blocks/marketplace-coupons/StoreCouponList.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



window.addEventListener('load', () => {
  const element = document.getElementById('marketplace-coupons');
  if (element) {
    const attributes = JSON.parse(element.getAttribute('data-attributes') || '{}');
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(element);
    root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_StoreCouponList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ...attributes
    }));
  }
});

/***/ },

/***/ "./src/services/commonFunction.ts"
/*!****************************************!*\
  !*** ./src/services/commonFunction.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashNavigate: () => (/* binding */ dashNavigate),
/* harmony export */   downloadCSV: () => (/* binding */ downloadCSV),
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatLocalDate: () => (/* binding */ formatLocalDate),
/* harmony export */   formatTimeAgo: () => (/* binding */ formatTimeAgo),
/* harmony export */   getSession: () => (/* binding */ getSession),
/* harmony export */   getUrl: () => (/* binding */ getUrl),
/* harmony export */   htmlToText: () => (/* binding */ htmlToText),
/* harmony export */   printContent: () => (/* binding */ printContent),
/* harmony export */   setSession: () => (/* binding */ setSession),
/* harmony export */   toWcIsoDate: () => (/* binding */ toWcIsoDate),
/* harmony export */   truncateText: () => (/* binding */ truncateText)
/* harmony export */ });
/* global appLocalizer */
const truncateText = (text, wordCount) => {
    if (!text) {
        return '';
    }
    // Strip HTML tags if present
    const plainText = text.replace(/<[^>]+>/g, '');
    // Split into words
    const words = plainText.split(/\s+/);
    if (words.length <= wordCount) {
        return plainText;
    }
    return words.slice(0, wordCount).join(' ') + '...';
};
function formatCurrency(amount) {
    if (amount === null || amount === undefined || amount === '') {
        return '-';
    }
    const num = parseFloat(String(amount));
    if (isNaN(num)) {
        return '-';
    }
    const { currency_symbol = '', price_decimals = 2, decimal_separator = '.', thousand_separator = ',', currency_position = 'left' } = appLocalizer || {};
    const isNegative = num < 0;
    const absNum = Math.abs(num);
    // Format number with decimals and separators
    const parts = absNum.toFixed(price_decimals).split('.');
    const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousand_separator);
    const decimalPart = parts[1] ? decimal_separator + parts[1] : '';
    const formattedNumber = intPart + decimalPart;
    // Apply currency symbol based on four possible positions using if/else
    let formatted;
    if (currency_position === 'left') {
        formatted = `${currency_symbol}${formattedNumber}`;
    }
    else if (currency_position === 'right') {
        formatted = `${formattedNumber}${currency_symbol}`;
    }
    else if (currency_position === 'left_space') {
        formatted = `${currency_symbol} ${formattedNumber}`;
    }
    else if (currency_position === 'right_space') {
        formatted = `${formattedNumber} ${currency_symbol}`;
    }
    else {
        formatted = `${currency_symbol}${formattedNumber}`;
    }
    // Add negative sign for negative numbers
    if (isNegative) {
        formatted = `-${formatted}`;
    }
    return formatted;
}
function formatTimeAgo(dateString) {
    // Force UTC
    const date = new Date(dateString + 'Z');
    const diff = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diff < 60) {
        return 'Just now';
    }
    if (diff < 3600) {
        return `${Math.floor(diff / 60)} min ago`;
    }
    if (diff < 86400) {
        return `${Math.floor(diff / 3600)} hour ago`;
    }
    return `${Math.floor(diff / 86400)} day ago`;
}
// This function only removes time from the date-time object and return the formatted date.
const formatLocalDate = date => date ? date.toISOString().split('T')[0] : '';
function printContent(divId) {
    const source = document.getElementById(divId);
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        return;
    }
    const cloned = source.cloneNode(true);
    printWindow.document.write(cloned.innerHTML);
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}
const formatDate = date => {
    if (!date) {
        return '-';
    }
    const d = new Date(date);
    if (isNaN(d.getTime())) {
        return '-';
    }
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(d);
};
const toWcIsoDate = (date, type) => {
    const d = new Date(date);
    if (type === 'start') {
        d.setHours(0, 0, 0, 0);
    }
    else {
        d.setHours(23, 59, 59, 999);
    }
    return d.toISOString();
};
const downloadCSV = (headers, rows, filename = 'export.csv') => {
    if (!rows || rows.length === 0) {
        return;
    }
    // Only include headers with csv: true
    const csvColumns = Object.entries(headers).filter(([_, h]) => h.csvDisplay !== false).map(([key, h]) => ({
        key,
        label: h.label
    }));
    // Header row
    const csvRows = [csvColumns.map(c => `"${c.label}"`).join(',')];
    // Data rows
    rows.forEach(row => {
        const rowData = csvColumns.map(col => {
            const value = row[col.key];
            return `"${value != null ? value : ''}"`;
        }).join(',');
        csvRows.push(rowData);
    });
    // Trigger download
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
};
/**
 * Builds a navigable path string.
 *
 * Pretty permalinks  → relative path used with react-router navigate()
 *                      e.g.  "/products/edit/123"
 *
 * Plain permalinks   → also a relative path for MemoryRouter navigate(),
 *                      AND separately updates window.history so the browser
 *                      URL bar reflects the correct query-param URL.
 */
const buildPath = segments => `/${segments.filter(Boolean).join('/')}`;
const sanitize = value => value.replace(/[^a-zA-Z0-9_-]/g, '');
const updatePlainPermalinkUrl = segments => {
    const [segment = '', element = '', context_id = ''] = segments;
    const params = new URLSearchParams({
        page_id: appLocalizer.dashboard_page_id,
        segment: sanitize(segment),
        ...(element ? {
            element: sanitize(element)
        } : {}),
        ...(context_id ? {
            context_id: sanitize(context_id)
        } : {})
    });
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
};
/**
 * Navigate within the dashboard.
 * Handles both permalink modes transparently.
 *
 * @param segments  e.g. ['products'], ['products', 'edit'], ['products', 'edit', '123']
 */
const dashNavigate = (navigate, segments) => {
    const ALLOWED_SEGMENTS = ['products', 'orders', 'dashboard'];
    if (!ALLOWED_SEGMENTS.includes(segments[0])) {
        return;
    }
    const path = buildPath(segments);
    if (!appLocalizer.permalink_structure) {
        updatePlainPermalinkUrl(segments);
    }
    navigate(path);
};
// Set a value in session storage
function setSession(key, value) {
    sessionStorage.setItem(key, value.toString());
}
// Get a value from session storage, default is 0
function getSession(key, defaultValue = 0) {
    const value = sessionStorage.getItem(key);
    if (value === null) {
        return defaultValue;
    } // return 0 if key not found
    return isNaN(Number(value)) ? value : Number(value); // parse number if possible
}
const getUrl = (id, type = 'product', mode = 'edit', slug) => {
    if (!id && !slug) {
        return '#';
    }
    const base = appLocalizer.site_url.replace(/\/$/, '');
    if (mode === 'edit') {
        switch (type) {
            case 'product':
            case 'order':
            case 'coupon':
                return `${base}/wp-admin/post.php?post=${id}&action=edit`;
            case 'store':
                return `${base}/wp-admin/admin.php?page=multivendorx#&tab=stores&edit/${id}`;
            case 'user':
                return `${base}/wp-admin/user-edit.php?user_id=${id}`;
            default:
                return '#';
        }
    }
    if (mode === 'view') {
        switch (type) {
            case 'product':
                return `${base}/?post_type=product&p=${id}`;
            case 'store':
                return slug ? `${appLocalizer.store_page_url}${slug}` : '#';
            default:
                return '#';
        }
    }
    return '#';
};
const htmlToText = input => {
    if (typeof input !== 'string')
        return '';
    return input.replace(/<\/?[^>]+(>|$)/g, '');
};


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

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
/******/ 			id: moduleId,
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		var document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block/marketplace-coupons/view": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmultivendorx"] = globalThis["webpackChunkmultivendorx"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/marketplace-coupons/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map