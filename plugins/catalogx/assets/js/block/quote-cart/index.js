/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/quote-cart/index.js"
/*!****************************************!*\
  !*** ./src/blocks/quote-cart/index.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuoteListTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuoteListTable */ "./src/blocks/quote-cart/QuoteListTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const EditBlock = () => {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ...blockProps,
    id: "request-quote-list",
    children: (0,_QuoteListTable__WEBPACK_IMPORTED_MODULE_2__["default"])()
  });
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('catalogx/quote-cart', {
  apiVersion: 2,
  title: 'Quote Cart',
  icon: 'cart',
  category: 'catalogx',
  supports: {
    html: false
  },
  edit: EditBlock,
  save() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      id: "request-quote-list"
    });
  }
});

/***/ },

/***/ "./src/blocks/quote-cart/QuoteListTable.tsx"
/*!**************************************************!*\
  !*** ./src/blocks/quote-cart/QuoteListTable.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/lib/axios.js");
/* harmony import */ var _QuoteThankYou__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuoteThankYou */ "./src/blocks/quote-cart/QuoteThankYou.tsx");
/* harmony import */ var _services_commonFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/commonFunction */ "./src/services/commonFunction.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const QuoteList = () => {
    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [responseStatus, setResponseStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [showThankYou, setShowThankYou] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [productQuantity, setProductQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        name: window.quoteCart?.name || '',
        email: window.quoteCart?.email || '',
        phone: '',
        message: ''
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const params = new URLSearchParams(location.search);
        setShowThankYou(params.get('order_id'));
        setStatus(params.get('status') || '');
        fetchTableData({
            paged: 1,
            per_page: 10
        });
    }, []);
    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleQuantityChange = (e, row) => {
        const value = Number(e.target.value);
        setProductQuantity(prev => ({
            ...prev,
            [row.id]: {
                quantity: value,
                key: row.key
            }
        }));
    };
    /**
     * Fetch Quote Cart Data.
     */
    const fetchTableData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(query => {
        setIsLoading(true);
        (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
            method: 'get',
            url: `${quoteCart.apiUrl}/${quoteCart.restUrl}/quote-cart`,
            headers: {
                'X-WP-Nonce': quoteCart.nonce
            },
            data: {
                page: query.paged || 1,
                row: query.per_page || 10,
                filter_status: query.categoryFilter === 'all' ? '' : query.categoryFilter,
                search_value: query.searchValue || '',
                start_date: query.filter?.created_at?.startDate ? (0,_services_commonFunction__WEBPACK_IMPORTED_MODULE_4__.formatLocalDate)(query.filter.created_at.startDate) : '',
                end_date: query.filter?.created_at?.endDate ? (0,_services_commonFunction__WEBPACK_IMPORTED_MODULE_4__.formatLocalDate)(query.filter.created_at.endDate) : '',
                order_by: query.orderby || '',
                order: query.order || ''
            }
        }).then(response => {
            const items = response.data.response || [];
            const ids = items.filter(item => item?.id != null).map(item => Number(item.id));
            setRows(response.data.response || []);
            setIsLoading(false);
        }).catch(error => {
            console.error('Failed to fetch quote cart:', error);
            setRows([]);
            setIsLoading(false);
        });
    }, []);
    const handleRemoveItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (row) => {
        try {
            await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
                method: 'delete',
                url: `${quoteCart.apiUrl}/${quoteCart.restUrl}/quote-cart/${row.id}`,
                headers: {
                    'X-WP-Nonce': quoteCart.nonce
                },
                data: {
                    productId: row.id,
                    key: row.key
                }
            });
            fetchTableData({});
        }
        catch (error) {
            console.error('Failed to remove item:', error);
        }
    }, [fetchTableData]);
    /**
     * Update Quote Cart.
     */
    const handleUpdateCart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        try {
            /**
             * Only send modified products.
             */
            const updatedProducts = Object.entries(productQuantity).map(([id, value]) => ({
                id,
                key: value.key,
                quantity: Number(value.quantity ?? 1)
            }));
            /**
             * Nothing changed.
             */
            if (!updatedProducts.length) {
                return;
            }
            setIsLoading(true);
            /**
             * Update cart.
             */
            await (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
                method: 'put',
                url: `${quoteCart.apiUrl}/${quoteCart.restUrl}/quote-cart/${updatedProducts?.[0]?.id}`,
                headers: {
                    'X-WP-Nonce': quoteCart.nonce
                },
                data: {
                    products: updatedProducts
                }
            });
            fetchTableData({});
            /**
             * Clear local quantity cache.
             */
            setProductQuantity({});
            setIsLoading(false);
        }
        catch (error) {
            console.error('Failed to update quote cart:', error);
            setIsLoading(false);
        }
    }, [productQuantity]);
    /**
     * Send Quote Request.
     */
    const handleSendQuote = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        setIsLoading(true);
        const sendBtn = document.getElementById('send-quote');
        if (sendBtn) {
            sendBtn.style.display = 'none';
        }
        (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
            method: 'post',
            url: `${quoteCart.apiUrl}/${quoteCart.restUrl}/quotes`,
            headers: {
                'X-WP-Nonce': quoteCart.nonce
            },
            data: {
                formData
            }
        }).then(response => {
            setIsLoading(false);
            if (response.status === 200) {
                setResponseStatus('success');
                setShowThankYou(response.data.order_id);
            }
            else {
                setResponseStatus('error');
                if (sendBtn) {
                    sendBtn.style.display = 'block';
                }
            }
        }).catch(error => {
            console.error('Failed to send quote request:', error);
            setIsLoading(false);
            setResponseStatus('error');
            if (sendBtn) {
                sendBtn.style.display = 'block';
            }
        });
    }, [formData]);
    const TableSkeleton = () => /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
        className: "shop_table shop_table_responsive my_account_orders catalogx-skeleton-table",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                className: "skeleton skeleton-text",
                                style: {
                                    width: '100%'
                                }
                            })
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                className: "skeleton skeleton-text",
                                style: {
                                    width: '100%'
                                }
                            })
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                className: "skeleton skeleton-text",
                                style: {
                                    width: '100%'
                                }
                            })
                        })]
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
                children: [...Array(5)].map((_, index) => /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                    className: "woocommerce-orders-table__row",
                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                            className: "woocommerce-orders-table__cell",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                className: "skeleton skeleton-text",
                                style: {
                                    width: '100%',
                                    height: '2.5rem'
                                }
                            })
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                            className: "woocommerce-orders-table__cell",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                className: "skeleton skeleton-text",
                                style: {
                                    width: '100%',
                                    height: '2.5rem'
                                }
                            })
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                            className: "woocommerce-orders-table__cell",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                className: "skeleton skeleton-text",
                                style: {
                                    width: '100%',
                                    height: '2.5rem'
                                }
                            })
                        })]
                }, index))
            })]
    });
    if (showThankYou || status) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QuoteThankYou__WEBPACK_IMPORTED_MODULE_3__["default"], {
            orderId: showThankYou,
            status: status
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "quote-list-container woocommerce",
        children: isLoading && rows.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TableSkeleton, {}) : rows.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "woocommerce-notices-wrapper",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
                className: "woocommerce-error",
                role: "alert",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No products found', 'catalogx-pro')
                })
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    type: "button",
                    className: "update-cart-btn button wp-block-button__link update-cart-button",
                    onClick: handleUpdateCart,
                    disabled: isLoading,
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update Cart', 'catalogx')
                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
                    className: "catalogx-table shop_table shop_table_responsive my_account_orders",
                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                                        className: "woocommerce-orders-table__header",
                                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product', 'catalogx')
                                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                                        className: "woocommerce-orders-table__header",
                                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quantity', 'catalogx')
                                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
                                        className: "woocommerce-orders-table__header",
                                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtotal', 'catalogx')
                                    })]
                            })
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
                            children: rows.map((row, index) => /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
                                    className: "woocommerce-orders-table__row",
                                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("th", {
                                            className: "product-cell woocommerce-orders-table__cell",
                                            "data-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Username', 'catalogx'),
                                            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: row.image || ''
                                                    }
                                                }), row.name, /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                                                    width: "1rem",
                                                    height: "1rem",
                                                    onClick: () => handleRemoveItem(row),
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                                                        d: "M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z",
                                                        fill: "#e71313"
                                                    })
                                                })]
                                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                                            className: "woocommerce-orders-table__cell",
                                            "data-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Username', 'catalogx'),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                                                type: "number",
                                                className: "basic-input",
                                                min: "1",
                                                value: productQuantity[row.id]?.quantity ?? row.quantity ?? 1,
                                                onChange: e => handleQuantityChange(e, row)
                                            })
                                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                                            className: "woocommerce-orders-table__cell",
                                            "data-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Username', 'catalogx'),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: String(row.total)
                                                }
                                            })
                                        })]
                                }, index)
                            }))
                        })]
                }), rows.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                    children: [responseStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                            className: "woocommerce-notices-wrapper",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
                                className: responseStatus === 'error' ? 'woocommerce-error' : 'woocommerce-message',
                                role: "alert",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                                    children: responseStatus === 'error' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Something went wrong! Please try again.', 'catalogx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quote request sent successfully!', 'catalogx')
                                })
                            })
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
                            children: [" ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Request a Quote', 'catalogx'), " "]
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
                            className: "woocommerce-form woocommerce-form-login login",
                            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                                    className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
                                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                                            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name:', 'catalogx'), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                                                    className: "required",
                                                    children: "*"
                                                })]
                                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            value: formData.name,
                                            className: "woocommerce-Input input-text",
                                            onChange: handleInputChange,
                                            required: true
                                        })]
                                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                                    className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
                                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                                            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email:', 'catalogx'), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                                                    className: "required",
                                                    children: "*"
                                                })]
                                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                                            type: "email",
                                            name: "email",
                                            value: formData.email,
                                            className: "woocommerce-Input input-text",
                                            onChange: handleInputChange,
                                            required: true
                                        })]
                                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                                    className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
                                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                                            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Phone:', 'catalogx')
                                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                                            type: "tel",
                                            name: "phone",
                                            className: "woocommerce-Input input-text",
                                            value: formData.phone,
                                            onChange: handleInputChange
                                        })]
                                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                                    className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
                                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                                            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Message:', 'catalogx')
                                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                                            name: "message",
                                            rows: 4,
                                            value: formData.message,
                                            onChange: handleInputChange,
                                            className: "woocommerce-Input input-text"
                                        })]
                                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                                    className: "form-row",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                                        type: "button",
                                        id: "send-quote",
                                        className: "woocommerce-button button wp-element-button wp-block-button__link",
                                        onClick: handleSendQuote,
                                        disabled: !formData.name || !formData.email,
                                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Send Quote', 'catalogx')
                                    })
                                })]
                        })]
                })]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteList);


/***/ },

/***/ "./src/blocks/quote-cart/QuoteThankYou.tsx"
/*!*************************************************!*\
  !*** ./src/blocks/quote-cart/QuoteThankYou.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const QuoteThankYou = ({ orderId, status }) => {
    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const handleRejectQuote = e => {
        e.preventDefault();
        (0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
            method: 'post',
            url: `${quoteCart.apiUrl}/catalogx/v1/quotes`,
            headers: {
                'X-WP-Nonce': quoteCart.nonce
            },
            data: {
                orderId: orderId,
                status,
                reason
            }
        }).then(response => {
            setSuccessMessage(response.data?.message ?? '');
        });
    };
    if (successMessage) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "woocommerce-notices-wrapper",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
                className: "woocommerce-message",
                role: "alert",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                    children: successMessage
                })
            })
        });
    }
    if (orderId && status) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "reject-quote-from-mail woocommerce",
            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                    children: `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You are about to reject the quote', 'catalogx')} ${orderId}`
                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
                    className: "woocommerce-form woocommerce-form-login login",
                    onSubmit: handleRejectQuote,
                    children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                            className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
                            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please feel free to enter here your reason or provide us your feedback:', 'catalogx')
                                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
                                    name: "message",
                                    rows: 4,
                                    value: reason,
                                    onChange: e => setReason(e.target.value),
                                    className: "woocommerce-Input input-text"
                                })]
                        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                            className: "form-row",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                                type: "submit",
                                className: "woocommerce-button button wp-element-button wp-block-button__link",
                                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reject the quote', 'catalogx')
                            })
                        })]
                })]
        });
    }
    if (orderId) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "quote-thank-you-section",
            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                    width: "3rem",
                    height: "3rem",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                        fill: "green",
                        fillRule: "evenodd",
                        d: "M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                    })
                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
                    children: [" ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Thank you for your quote request', 'catalogx'), " ", !quoteCart.khali_dabba && orderId, "."]
                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Our team is reviewing your details and will get back to you shortly with a personalized quote. We appreciate your patience and look forward to serving you!', 'catalogx')
                }), quoteCart.khali_dabba && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                    className: "button wp-block-button__link update-cart-button",
                    href: quoteCart.quote_my_account_url,
                    children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View Quote ', 'catalogx'), ' ', orderId]
                })]
        });
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteThankYou);


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
    const base = appLocalizer.admin_url.replace(/\/$/, '');
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block/quote-cart/index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcatalogx"] = globalThis["webpackChunkcatalogx"] || [];
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/quote-cart/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map