/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../packages/js/zyra/build/index.js"
/*!*********************************************!*\
  !*** ../../packages/js/zyra/build/index.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AdminHeader: () => AdminHeader_default,
  Analytics: () => Analytics_default,
  BasicInput: () => BasicInput_default,
  BasicInputUI: () => BasicInputUI,
  BlockBuilder: () => BlockBuilder_default,
  BlockBuilderUI: () => BlockBuilderUI,
  ButtonInput: () => ButtonInput_default,
  ButtonInputUI: () => ButtonInputUI,
  CalendarInput: () => CalendarInput_default,
  CalendarInputUI: () => CalendarInputUI,
  Card: () => Card_default,
  ChoiceToggle: () => ChoiceToggle_default,
  ChoiceToggleUI: () => ChoiceToggleUI,
  ColorSettingInput: () => ColorSettingInput_default,
  ColorSettingInputUI: () => ColorSettingInputUI,
  Column: () => Column_default,
  ComponentStatusView: () => ComponentStatusView_default,
  Container: () => Container_default,
  CopyToClipboard: () => CopyToClipboard_default,
  CopyToClipboardUI: () => CopyToClipboardUI,
  CountryCodes: () => CountryCodes,
  DynamicRowSetting: () => DynamicRowSetting_default,
  EmailsInputUI: () => EmailsInputUI,
  EventCalendar: () => EventCalendar_default,
  EventCalendarUI: () => EventCalendarUI,
  ExpandablePanel: () => ExpandablePanel_default,
  ExpandablePanelUI: () => ExpandablePanelUI,
  FileInput: () => FileInput_default,
  FileInputUI: () => FileInputUI,
  FormGroup: () => FormGroup_default,
  FormGroupWrapper: () => FormGroupWrapper_default,
  FormViewer: () => FormViewer_default,
  GuidedTourProvider: () => GuidedTourProvider_default,
  HeaderSearch: () => HeaderSearch_default,
  InfoItem: () => InfoItem_default,
  ItemList: () => ItemList_default,
  ItemListUI: () => ItemListUI,
  Log: () => Log_default,
  MapProviderUI: () => MapProviderUI,
  Modules: () => Modules_default,
  MultiCheckBox: () => MultiCheckbox_default,
  MultiCheckBoxUI: () => MultiCheckBoxUI,
  MultiInputTable: () => MultiInputTable_default,
  MultiInputTableUI: () => MultiInputTableUI,
  NavigatorHeader: () => NavigatorHeader,
  NestedComponent: () => NestedComponent_default,
  NestedComponentUI: () => NestedComponentUI,
  Notice: () => Notice,
  NoticeManager: () => NoticeManager,
  NoticeReceiver: () => NoticeReceiver,
  Popup: () => Popup_default,
  PopupUI: () => PopupUI,
  PrePostText: () => PrePostText_default,
  PrePostTextUI: () => PrePostTextUI,
  RandomInputKeyGeneratorUI: () => RandomInputKeyGeneratorUI,
  RenderComponent: () => RenderComponent_default,
  Section: () => Section_default,
  SectionUI: () => SectionUI,
  SelectInput: () => SelectInput_default,
  SelectInputUI: () => SelectInputUI,
  SequentialTaskExecutor: () => SequentialTaskExecutor_default,
  SequentialTaskExecutorUI: () => SequentialTaskExecutorUI,
  SettingMetaBox: () => SettingMetaBox_default,
  SettingProvider: () => SettingProvider,
  SettingsNavigator: () => SettingsNavigator_default,
  ShortCodeTable: () => ShortCodeTable_default,
  ShortCodeTableUI: () => ShortCodeTableUI,
  Skeleton: () => Skeleton_default,
  TableCard: () => TableCard_default,
  Tabs: () => Tabs_default,
  TabsUI: () => TabsUI,
  TextArea: () => TextArea_default,
  TextAreaUI: () => TextAreaUI,
  Tooltip: () => Tooltip_default,
  filterSettingByIds: () => filterSettingByIds,
  getApiLink: () => getApiLink,
  getApiResponse: () => getApiResponse,
  getAvailableSettings: () => getAvailableSettings,
  getDefaultSettings: () => getDefaultSettings,
  getSettingById: () => getSettingById,
  getSettingsByPriority: () => getSettingsByPriority,
  htmlToBlocks: () => htmlToBlocks,
  initializeModules: () => initializeModules,
  isActiveSetting: () => isActiveSetting,
  renderBlocksToHTML: () => renderBlocksToHTML,
  sendApiResponse: () => sendApiResponse,
  useModules: () => useModules,
  useOutsideClick: () => useOutsideClick,
  useSetting: () => useSetting
});
module.exports = __toCommonJS(index_exports);

// src/components/RenderComponent.tsx
var import_react32 = __toESM(__webpack_require__(/*! react */ "react"));

// src/utils/apiService.ts
var import_axios = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));
var getApiResponse = async (url, headers2 = {}) => {
  try {
    const result = await import_axios.default.get(url, headers2);
    return result.data;
  } catch (error) {
    console.error(`\u274C Error fetching data from ${url}`, error);
    return null;
  }
};
var sendApiResponse = async (appLocalizer, url, data, headers2 = {}) => {
  try {
    const config = {
      headers: {
        "X-WP-Nonce": appLocalizer.nonce,
        ...headers2.headers
      },
      ...headers2
    };
    const result = await import_axios.default.post(url, data, config);
    return result.data;
  } catch (error) {
    console.error(`\u274C Error sending data to ${url}`, error);
    return null;
  }
};
var getApiLink = (appLocalizer, endpoint, namespace, rootUrl) => {
  return `${rootUrl || appLocalizer.apiUrl}/${namespace || appLocalizer.restUrl}/${endpoint}`;
};

// src/contexts/ModuleContext.tsx
var import_zustand = __webpack_require__(/*! zustand */ "../../../node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.15_immer@11.1.4_react@18.3.1_use-sync-external-store@1.6.0_react@18.3.1_/node_modules/zustand/index.js");
var import_axios8 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));

// src/components/fieldUtils.ts
var import_react31 = __webpack_require__(/*! react */ "react");

// src/components/AddressField.tsx
var import_react5 = __webpack_require__(/*! react */ "react");
var import_react_sortablejs = __webpack_require__(/*! react-sortablejs */ "../../../node_modules/.pnpm/react-sortablejs@6.1.4_@types+sortablejs@1.15.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_sortablejs@1.15.7/node_modules/react-sortablejs/dist/index.js");

// src/components/SelectInput.tsx
var import_react3 = __toESM(__webpack_require__(/*! react */ "react"));
var import_react_select = __toESM(__webpack_require__(/*! react-select */ "../../../node_modules/.pnpm/react-select@5.10.2_@types+react@19.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-select/dist/react-select.esm.js"));
var import_creatable = __toESM(__webpack_require__(/*! react-select/creatable */ "../../../node_modules/.pnpm/react-select@5.10.2_@types+react@19.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-select/creatable/dist/react-select-creatable.esm.js"));

// src/components/ButtonInput.tsx
var import_react = __webpack_require__(/*! react */ "react");
var import_axios2 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));
var import_jsx_runtime = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var mapBlockStyleToCustomStyle = style => ({
  button_background_color: style.backgroundColor,
  button_text_color: style.color,
  button_border_color: style.borderColor,
  button_border_radious: style.borderRadius,
  button_font_size: style.fontSize,
  button_font_width: Number(style.fontWeight),
  button_border_size: style.borderWidth,
  // Map all padding sides
  button_padding_top: style.paddingTop,
  button_padding_right: style.paddingRight,
  button_padding_bottom: style.paddingBottom,
  button_padding_left: style.paddingLeft,
  // Map all margin sides
  button_margin_top: style.marginTop,
  button_margin_right: style.marginRight,
  button_margin_bottom: style.marginBottom,
  button_margin_left: style.marginLeft
});
var SingleButton = ({
  btn,
  index
}) => {
  const [hovered, setHovered] = (0, import_react.useState)(false);
  const styleFromBlock = btn.style ? mapBlockStyleToCustomStyle(btn.style) : {};
  const customStyle = {
    ...styleFromBlock,
    ...(btn.customStyle || {})
  };
  const padding = `${customStyle.button_padding_top}rem ${customStyle.button_padding_right}rem ${customStyle.button_padding_bottom}rem ${customStyle.button_padding_left}rem`;
  const margin = `${customStyle.button_margin_top}rem ${customStyle.button_margin_right}rem ${customStyle.button_margin_bottom}rem ${customStyle.button_margin_left}rem`;
  const buttonStyle = {
    border: hovered ? `${customStyle.button_border_size}rem solid ${customStyle.button_border_color_onhover}` : `${customStyle.button_border_size}rem solid ${customStyle.button_border_color}`,
    backgroundColor: hovered ? customStyle.button_background_color_onhover : customStyle.button_background_color,
    color: hovered ? customStyle.button_text_color_onhover : customStyle.button_text_color,
    borderRadius: `${customStyle.button_border_radious}rem`,
    fontSize: `${customStyle.button_font_size}rem`,
    fontWeight: customStyle.button_font_width,
    margin,
    padding
  };
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
    className: `admin-btn btn-${btn.color || "purple-bg"}`,
    onClick: btn.onClick,
    disabled: btn.disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: buttonStyle,
    children: btn.children || /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [btn.icon && /* @__PURE__ */(0, import_jsx_runtime.jsx)("i", {
        className: `adminfont-${btn.icon}`
      }), customStyle.button_text || btn.text]
    })
  }, index);
};
var ButtonInputUI = ({
  buttons,
  wrapperClass = "",
  position = ""
}) => {
  const buttonsArray = Array.isArray(buttons) ? buttons : [buttons];
  const wrapperClasses = `buttons-wrapper${wrapperClass ? ` ${wrapperClass}` : ""}`;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
    className: wrapperClasses,
    "data-position": position,
    children: buttonsArray.map((btn, index) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(SingleButton, {
      btn,
      index
    }, index))
  });
};
var ButtonInput = {
  render: ({
    field,
    onChange,
    canAccess
  }) => {
    const [apiMessage, setApiMessage] = (0, import_react.useState)("");
    const handleClick = () => {
      if (!canAccess) {
        return;
      }
      if (field.action === "open_modal") {
        window.dispatchEvent(new CustomEvent("multivendorx:action", {
          detail: {
            type: "open_modal",
            key: field.key
          }
        }));
        return;
      }
      if (field.redirect_url) {
        window.open(field.redirect_url, "_self");
        return;
      }
      if (field.apilink) {
        (0, import_axios2.default)({
          url: getApiLink(ZyraVariable, String(field.apilink)),
          method: field.method ?? "GET",
          headers: {
            "X-WP-Nonce": ZyraVariable.nonce
          },
          ...(field.method === "GET" && {
            params: {
              key: field.key
            }
          }),
          ...(field.method === "POST" && {
            data: {
              key: field.key,
              action: field.action || []
            }
          })
        }).then(res => {
          if (res.data.message) {
            const msg = res?.data?.message;
            setApiMessage(msg);
          }
        });
        return;
      }
      onChange(true);
    };
    const baseConfig = {
      color: field.color || "purple-bg",
      style: field.style,
      customStyle: field.customStyle
    };
    const resolvedButtons = Array.isArray(field.options) && field.options.length > 0 ? field.options.map(btn => ({
      ...baseConfig,
      text: btn.label,
      onClick: btn.onClick,
      disabled: btn.disabled,
      icon: btn.icon
    })) : [{
      ...baseConfig,
      text: field.text || field.placeholder || field.name || "Click",
      disabled: field.disabled,
      onClick: field.onClick || handleClick,
      icon: field.icon
    }];
    return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(ButtonInputUI, {
        wrapperClass: field.wrapperClass || "",
        buttons: resolvedButtons,
        position: field.position || "left"
      }), apiMessage && /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
        className: "api-message",
        children: apiMessage
      })]
    });
  },
  validate: (field, value) => {
    const error = field.required && !value ? `${field.label} is required` : null;
    return error;
  }
};
var ButtonInput_default = ButtonInput;

// src/components/Popup.tsx
var import_react2 = __webpack_require__(/*! react */ "react");

// src/components/UI/Tooltip.tsx
var import_jsx_runtime2 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var Tooltip = ({
  text,
  children,
  position = "top",
  withOutArrow = false,
  className = ""
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime2.jsxs)("div", {
    className: `tooltip-wrapper ${position} ${withOutArrow ? "with-out-arrow" : ""} ${className}`,
    children: [children, /* @__PURE__ */(0, import_jsx_runtime2.jsx)("span", {
      className: "tooltip-name",
      children: text
    })]
  });
};
var Tooltip_default = Tooltip;

// src/components/Popup.tsx
var import_jsx_runtime3 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var PopupUI = (0, import_react2.forwardRef)(({
  position = "slide-right-to-left",
  open: controlledOpen,
  toggleIcon,
  tooltipName = "Menu",
  tooltipPosition = "bottom",
  width = 14,
  height = "fit-content",
  className = "",
  showBackdrop = true,
  onOpen,
  onClose,
  children,
  header,
  footer
}, ref) => {
  const [internalOpen, setInternalOpen] = (0, import_react2.useState)(false);
  const wrapperRef = (0, import_react2.useRef)(null);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : internalOpen;
  const handleOpen = () => {
    if (!isControlled) {
      setInternalOpen(true);
    }
    onOpen?.();
  };
  const handleClose = () => {
    if (!isControlled) {
      setInternalOpen(false);
    }
    onClose?.();
  };
  const handleToggle = e => {
    e.stopPropagation();
    if (open) {
      handleClose();
    } else {
      handleOpen();
    }
  };
  useOutsideClick(wrapperRef, () => {
    if (open) {
      handleClose();
    }
  });
  const styles = {
    minWidth: typeof width === "number" ? `${width}rem` : width,
    height: typeof height === "number" ? `${height}rem` : height
  };
  return /* @__PURE__ */(0, import_jsx_runtime3.jsxs)("div", {
    className: `popup ${className} ${open ? "popup-open" : ""}`,
    children: [toggleIcon && /* @__PURE__ */(0, import_jsx_runtime3.jsx)(Tooltip_default, {
      text: tooltipName,
      position: tooltipPosition,
      className: open ? "hidden" : "",
      children: /* @__PURE__ */(0, import_jsx_runtime3.jsx)("i", {
        onClick: handleToggle,
        className: `popup-icon adminfont-${toggleIcon}`
      })
    }), showBackdrop && open && /* @__PURE__ */(0, import_jsx_runtime3.jsx)("div", {
      className: "popup-backdrop",
      onClick: handleClose
    }), open && /* @__PURE__ */(0, import_jsx_runtime3.jsxs)("div", {
      className: `popup-content`,
      style: styles,
      "data-position": position,
      onClick: e => e.stopPropagation(),
      ref,
      children: [header && /* @__PURE__ */(0, import_jsx_runtime3.jsxs)("div", {
        className: "popup-header",
        children: [/* @__PURE__ */(0, import_jsx_runtime3.jsxs)("div", {
          className: "popup-title",
          children: [header.icon && /* @__PURE__ */(0, import_jsx_runtime3.jsx)("i", {
            className: `adminfont-${header.icon}`
          }), header.title]
        }), header.description && /* @__PURE__ */(0, import_jsx_runtime3.jsx)("div", {
          className: "desc",
          children: header.description
        })]
      }), position != "menu-dropdown" && /* @__PURE__ */(0, import_jsx_runtime3.jsx)("i", {
        onClick: handleClose,
        className: "close-icon adminfont-close"
      }), /* @__PURE__ */(0, import_jsx_runtime3.jsx)("div", {
        className: "popup-body",
        children
      }), footer && /* @__PURE__ */(0, import_jsx_runtime3.jsx)("div", {
        className: "popup-footer",
        children: footer
      })]
    })]
  });
});
var Popup = {
  render: ({
    field
  }) => /* @__PURE__ */(0, import_jsx_runtime3.jsx)(PopupUI, {
    position: field.position,
    toggleIcon: field.toggleIcon,
    tooltipName: field.tooltipName,
    width: field.width,
    height: field.height,
    className: field.className,
    showBackdrop: field.showBackdrop,
    open: field.open,
    onClose: field.onClose,
    onOpen: field.onOpen,
    header: field.header,
    footer: field.footer,
    children: field.children
  })
};
var Popup_default = Popup;

// src/components/SelectInput.tsx
var import_jsx_runtime4 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var FIELD_TYPE_CONFIG = {
  select: {
    type: "single-select",
    isMulti: false,
    isCreatable: false,
    Component: import_react_select.default
  },
  dropdown: {
    type: "single-select",
    isMulti: false,
    isCreatable: false,
    Component: import_react_select.default
  },
  "single-select": {
    type: "single-select",
    isMulti: false,
    isCreatable: false,
    Component: import_react_select.default
  },
  "multi-select": {
    type: "multi-select",
    isMulti: true,
    isCreatable: false,
    Component: import_react_select.default
  },
  "single-creatable": {
    type: "creatable",
    isMulti: false,
    isCreatable: true,
    Component: import_creatable.default
  },
  "creatable-multi": {
    type: "creatable-multi",
    isMulti: true,
    isCreatable: true,
    Component: import_creatable.default
  }
};
var DEFAULT_CONFIG = {
  type: "single-select",
  isMulti: false,
  isCreatable: false,
  Component: import_react_select.default
};
var resolveValue = (value, options, isMulti) => {
  const map = new Map(options.map(o => [o.value, o]));
  const toOption = v => map.get(v) ?? {
    value: v,
    label: v
  };
  const raw = Array.isArray(value) ? value : value != null && value !== "" ? [value] : [];
  const resolved = raw.map(toOption);
  return isMulti ? resolved : resolved[0] ?? null;
};
var extractValue = (raw, isMulti) => isMulti ? raw.map(o => o.value) : raw?.value ?? "";
var coerceToString = v => {
  if (Array.isArray(v)) {
    if (v.length && typeof v[0] === "object" && "value" in v[0]) {
      return v.map(o => String(o.value));
    }
    return v.map(String);
  }
  if (v != null && v !== "") {
    return String(v);
  }
  return void 0;
};
var buildStyles = (isMulti, background, color) => ({
  control: (base, state) => ({
    ...base,
    borderColor: "var(--border-color)",
    boxShadow: state.isFocused ? "var(--box-shadow-theme)" : "none",
    backgroundColor: background || "var(--background-white)",
    color: color || "var(--text-color)",
    minHeight: "2.213rem",
    ...(isMulti ? {} : {
      height: "2.213rem",
      maxHeight: "2.213rem"
    }),
    paddingTop: 0,
    paddingBottom: 0,
    width: "100%",
    margin: 0,
    "&:active": {
      color: "var(--color-primary)"
    },
    ":hover": {
      borderColor: "var(--border-color)"
    }
  }),
  valueContainer: base => ({
    ...base,
    margin: 0,
    paddingTop: isMulti ? "0.125rem" : 0,
    paddingBottom: isMulti ? "0.125rem" : 0,
    backgroundColor: "transparent",
    flexWrap: isMulti ? "wrap" : "nowrap"
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "0.95rem",
    backgroundColor: state.isSelected ? "var(--background-primary)" : state.isFocused ? "var(--background-color)" : "var(--background-white)",
    color: state.isSelected ? "var(--text-color)" : "var(--themeColor)",
    cursor: "pointer"
  }),
  menu: base => ({
    ...base,
    borderRadius: 4,
    marginTop: 0
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: "var(--background-primary)",
    margin: "0.125rem"
  }),
  multiValueLabel: base => ({
    ...base,
    color: "var(--color-primary)",
    padding: "0 0.25rem"
  }),
  multiValueRemove: base => ({
    ...base,
    color: "var(--color-primary)",
    ":hover": {
      backgroundColor: "var(--color-primary)",
      color: "var(--background-white)"
    }
  })
});
var CustomMenuList = props => {
  const {
    menuContent,
    keepMenuOpenOnMenuContentClick
  } = props.selectProps;
  return /* @__PURE__ */(0, import_jsx_runtime4.jsxs)(import_react_select.components.MenuList, {
    ...props,
    children: [props.children, menuContent && /* @__PURE__ */(0, import_jsx_runtime4.jsx)("div", {
      className: "select-menu-content",
      onMouseDown: e => {
        if (keepMenuOpenOnMenuContentClick) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      children: menuContent
    })]
  });
};
var CustomNoOptionsMessage = props => /* @__PURE__ */(0, import_jsx_runtime4.jsx)(import_react_select.components.NoOptionsMessage, {
  ...props,
  children: /* @__PURE__ */(0, import_jsx_runtime4.jsx)("span", {
    className: "no-options",
    children: props.selectProps.noOptionsText ?? "No options available"
  })
});
var CustomValueContainer = props => {
  const {
    children,
    getValue,
    selectProps: {
      maxVisibleItems,
      onOverflowClick,
      __isExpanded,
      __setIsExpanded
    }
  } = props;
  if (!maxVisibleItems) {
    return /* @__PURE__ */(0, import_jsx_runtime4.jsx)(import_react_select.components.ValueContainer, {
      ...props,
      children
    });
  }
  const total = getValue().length;
  const limit = __isExpanded ? total : maxVisibleItems;
  const overflow = Math.max(0, total - limit);
  const childArray = import_react3.default.Children.toArray(children);
  const input = childArray[childArray.length - 1];
  const visibleChips = childArray.slice(0, -1).slice(0, limit);
  const handleOverflowClick = e => {
    e.stopPropagation();
    if (onOverflowClick) {
      onOverflowClick();
    } else {
      __setIsExpanded?.(!__isExpanded);
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime4.jsxs)(import_react_select.components.ValueContainer, {
    ...props,
    children: [visibleChips, overflow > 0 && /* @__PURE__ */(0, import_jsx_runtime4.jsxs)("span", {
      className: "admin-badge blue overflow-badge",
      onClick: handleOverflowClick,
      role: "button",
      tabIndex: 0,
      title: `${overflow} more selected`,
      children: ["+", overflow]
    }), input]
  });
};
var CUSTOM_COMPONENTS = {
  MenuList: CustomMenuList,
  NoOptionsMessage: CustomNoOptionsMessage,
  ValueContainer: CustomValueContainer
};
var SelectInputUI = ({
  type,
  options,
  value,
  onChange,
  maxVisibleItems,
  onOverflowClick,
  isClearable = false,
  name,
  placeholder,
  inputClass,
  wrapperClass,
  size,
  menuContent,
  keepMenuOpenOnMenuContentClick,
  noOptionsText,
  selectDeselect,
  selectDeselectLabel = "Select / Deselect All",
  onSelectDeselectAll,
  formatCreateLabel = v => `Add "${v}"`,
  disabled = false,
  enableOverflowPopup = false,
  popupTitle,
  popupWidth,
  background,
  color
}) => {
  const [isExpanded, setIsExpanded] = import_react3.default.useState(false);
  const [popupOpen, setPopupOpen] = import_react3.default.useState(false);
  const {
    isMulti,
    Component
  } = FIELD_TYPE_CONFIG[type] ?? DEFAULT_CONFIG;
  const CastComponent = Component;
  const optionsData = options.map((opt, index) => ({
    value: opt.value,
    label: opt.label ?? opt.value,
    index
  }));
  const handleOverflowClick = () => {
    if (enableOverflowPopup) {
      setPopupOpen(true);
    } else {
      onOverflowClick?.();
    }
  };
  const sharedprops = {
    name,
    placeholder,
    className: `${inputClass ?? ""} select-wrapper`,
    classNamePrefix: "select-prefix",
    value: resolveValue(value, optionsData, isMulti),
    options: optionsData,
    isMulti,
    isDisabled: disabled,
    isClearable,
    onChange: raw => onChange(extractValue(raw ?? (isMulti ? [] : null), isMulti)),
    components: CUSTOM_COMPONENTS,
    formatCreateLabel,
    onOverflowClick: handleOverflowClick,
    __isExpanded: isExpanded,
    __setIsExpanded: setIsExpanded,
    menuContent,
    keepMenuOpenOnMenuContentClick,
    noOptionsText,
    menuPortalTarget: document.body,
    menuPosition: "fixed",
    styles: {
      ...buildStyles(isMulti, background, color),
      menuPortal: base => ({
        ...base,
        zIndex: 9999
      })
    }
  };
  const formattedSize = typeof size === "number" ? `${size}rem` : size;
  return /* @__PURE__ */(0, import_jsx_runtime4.jsxs)("div", {
    className: `form-select-field ${wrapperClass ?? ""}`,
    style: {
      width: formattedSize ?? ""
    },
    children: [selectDeselect && /* @__PURE__ */(0, import_jsx_runtime4.jsx)(ButtonInputUI, {
      position: "left",
      buttons: [{
        text: selectDeselectLabel,
        color: "purple",
        onClick: e => {
          e.preventDefault();
          onSelectDeselectAll?.(e);
        }
      }]
    }), /* @__PURE__ */(0, import_jsx_runtime4.jsx)(CastComponent, {
      ...sharedprops,
      maxVisibleItems
    }), enableOverflowPopup && /* @__PURE__ */(0, import_jsx_runtime4.jsx)(PopupUI, {
      position: "lightbox",
      open: popupOpen,
      onClose: () => setPopupOpen(false),
      showBackdrop: true,
      width: popupWidth ?? 28,
      header: {
        title: popupTitle ?? name ?? "Selected Items",
        showCloseButton: true
      },
      children: /* @__PURE__ */(0, import_jsx_runtime4.jsx)(CastComponent, {
        ...sharedprops
      })
    })]
  });
};
var SelectInput = {
  render: ({
    field,
    value,
    onChange,
    canAccess,
    settings
  }) => {
    const {
      type
    } = FIELD_TYPE_CONFIG[field.type] ?? DEFAULT_CONFIG;
    let resolvedOptions = field.options || [];
    const formattedOptions = Array.isArray(resolvedOptions) ? resolvedOptions.map(opt => ({
      value: String(opt.value),
      label: opt.label ?? String(opt.value)
    })) : Object.entries(resolvedOptions || {}).map(([value2, label]) => ({
      value: String(value2),
      label: String(label)
    }));
    return /* @__PURE__ */(0, import_jsx_runtime4.jsx)(SelectInputUI, {
      type,
      name: field.key,
      inputClass: field.className,
      wrapperClass: field.wrapperClass,
      size: field.size,
      placeholder: field.placeholder,
      maxVisibleItems: field.maxVisibleItems,
      isClearable: field.isClearable,
      selectDeselect: field.selectDeselect,
      selectDeselectLabel: "Select / Deselect All",
      options: formattedOptions,
      value: coerceToString(value),
      onChange: val => {
        if (!canAccess) {
          return;
        }
        if (JSON.stringify(val) === JSON.stringify(value)) {
          return;
        }
        onChange(val);
      },
      menuContent: field.menuContent,
      keepMenuOpenOnMenuContentClick: field.keepMenuOpenOnMenuContentClick,
      noOptionsText: field.noOptionsText,
      formatCreateLabel: field.formatCreateLabel,
      disabled: !canAccess,
      enableOverflowPopup: field.enableOverflowPopup,
      popupTitle: field.popupTitle,
      popupWidth: field.popupWidth
    });
  },
  validate: (field, value) => {
    if (field.required && (!value || Array.isArray(value) && value.length === 0)) {
      return `${field.label} is required`;
    }
    return null;
  }
};
var SelectInput_default = SelectInput;

// src/components/BasicInput.tsx
var import_react4 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime5 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var BasicInputUI = (0, import_react4.forwardRef)(({
  id,
  type = "text",
  name = "basic-input",
  placeholder,
  value,
  required = false,
  inputClass,
  inputLabel,
  wrapperClass,
  disabled = false,
  readOnly = false,
  size,
  minNumber,
  maxNumber,
  onChange,
  onClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  onKeyDown,
  rangeUnit,
  preText,
  postText,
  multiple
}, ref) => {
  const formattedSize = typeof size === "number" ? `${size}rem` : size;
  return /* @__PURE__ */(0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime5.jsxs)("div", {
      className: `setting-form-input input-wrapper ${wrapperClass || ""} `,
      style: {
        width: formattedSize || ""
      },
      children: [preText && /* @__PURE__ */(0, import_jsx_runtime5.jsx)("span", {
        className: "pre",
        dangerouslySetInnerHTML: {
          __html: preText
        }
      }), /* @__PURE__ */(0, import_jsx_runtime5.jsx)("input", {
        ref,
        id,
        className: `basic-input ${inputClass ?? ""}`,
        type,
        name,
        placeholder,
        min: type === "number" || type === "range" ? minNumber : void 0,
        max: type === "number" || type === "range" ? maxNumber : void 0,
        value,
        onChange: e => onChange(e.target.value),
        onClick,
        onMouseOver,
        onMouseOut,
        onFocus,
        onBlur,
        onKeyDown,
        disabled,
        readOnly,
        required,
        multiple,
        autoComplete: "off"
      }), type === "color" && /* @__PURE__ */(0, import_jsx_runtime5.jsxs)("label", {
        htmlFor: "",
        className: "color-value",
        children: [inputLabel && /* @__PURE__ */(0, import_jsx_runtime5.jsxs)("span", {
          className: "title",
          children: [" ", inputLabel, " "]
        }), value ?? ""]
      }), postText && /* @__PURE__ */(0, import_jsx_runtime5.jsx)("span", {
        className: "parameter",
        dangerouslySetInnerHTML: {
          __html: postText
        }
      })]
    }), type === "range" && /* @__PURE__ */(0, import_jsx_runtime5.jsxs)("output", {
      className: "settings-metabox-description",
      children: [value ?? "", rangeUnit]
    })]
  });
});
var BasicInput = {
  render: ({
    field,
    value,
    onChange,
    canAccess
  }) => /* @__PURE__ */(0, import_jsx_runtime5.jsx)(BasicInputUI, {
    wrapperClass: field.wrapperClass,
    inputClass: field.class,
    id: field.id,
    name: field.name,
    type: field.type,
    placeholder: field.placeholder,
    inputLabel: field.inputLabel,
    rangeUnit: field.rangeUnit,
    minNumber: field.minNumber ?? 0,
    maxNumber: field.maxNumber ?? 50,
    preText: field.preText,
    postText: field.postText,
    value,
    size: field.size,
    multiple: field.multiple,
    readOnly: field.readOnly,
    onChange: val => {
      if (!canAccess) {
        return;
      }
      onChange(val);
    }
  }),
  validate: (field, value) => {
    if (field.required && !value?.[field.key]) {
      return `${field.label} is required`;
    }
    return null;
  }
};
var BasicInput_default = BasicInput;

// src/components/AddressField.tsx
var import_jsx_runtime6 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var DEFAULT_ADDRESS_FIELDS = [{
  id: 1,
  key: "address_1",
  label: "Address Line 1",
  type: "text",
  placeholder: "Address Line 1",
  required: true
}, {
  id: 2,
  key: "address_2",
  label: "Address Line 2",
  type: "text",
  placeholder: "Address Line 2",
  required: false
}, {
  id: 3,
  key: "city",
  label: "City",
  type: "text",
  placeholder: "City",
  required: true
}, {
  id: 4,
  key: "country",
  label: "Country",
  type: "select",
  options: ["India", "USA", "UK", "Canada"],
  required: false
}, {
  id: 5,
  key: "state",
  label: "State",
  type: "select",
  options: ["Karnataka", "Maharashtra", "Delhi", "Tamil Nadu"],
  required: false
}, {
  id: 6,
  key: "postcode",
  label: "Postal Code",
  type: "text",
  placeholder: "Postal Code",
  required: true
}];
var AddressFieldUI = ({
  formField,
  opendInput,
  setOpendInput
}) => {
  const [subFields, setSubFields] = (0, import_react5.useState)(formField.fields?.length ? formField.fields : formField.context === "form" ? DEFAULT_ADDRESS_FIELDS : []);
  (0, import_react5.useEffect)(() => {
    if (formField.fields?.length) {
      setSubFields(formField.fields);
    } else if (!formField.fields?.length && formField.context === "form") {
      setSubFields(DEFAULT_ADDRESS_FIELDS);
    } else {
      setSubFields([]);
    }
  }, [formField.fields, formField.context]);
  const updateParent = updated => {
    setSubFields(updated);
  };
  const FieldRenderers = {
    text: field => /* @__PURE__ */(0, import_jsx_runtime6.jsxs)("div", {
      className: "address-field-item",
      children: [/* @__PURE__ */(0, import_jsx_runtime6.jsx)("label", {
        className: "field-label",
        children: field.label
      }), /* @__PURE__ */(0, import_jsx_runtime6.jsx)(BasicInputUI, {
        placeholder: field.placeholder
      })]
    }),
    select: field => {
      return /* @__PURE__ */(0, import_jsx_runtime6.jsxs)("div", {
        className: "address-field-item",
        children: [/* @__PURE__ */(0, import_jsx_runtime6.jsx)("label", {
          className: "field-label",
          children: field.label
        }), /* @__PURE__ */(0, import_jsx_runtime6.jsx)(SelectInputUI, {
          type: "single-select",
          options: field.options?.map(opt => ({
            value: opt,
            label: opt
          })) || []
        })]
      });
    }
  };
  if (!subFields.length) {
    return null;
  }
  return (
    // <div className="address-field-wrapper">
    //     <h4 className="address-section-title">{ formField.label }</h4>
    /* @__PURE__ */
    (0, import_jsx_runtime6.jsx)(import_react_sortablejs.ReactSortable, {
      list: subFields,
      setList: updateParent,
      handle: ".drag-handle",
      animation: 150,
      group: {
        name: `address-${formField.id}`,
        pull: false,
        put: false
      },
      className: "address-fields",
      children: subFields.map(field => /* @__PURE__ */(0, import_jsx_runtime6.jsxs)("div", {
        className: `form-field ${opendInput?.id === field.id ? "active" : ""}`,
        onClick: e => {
          e.stopPropagation();
          setOpendInput({
            ...field,
            readonly: formField.readonly,
            parentId: formField.id
          });
        },
        children: [/* @__PURE__ */(0, import_jsx_runtime6.jsx)("div", {
          className: "meta-menu",
          children: /* @__PURE__ */(0, import_jsx_runtime6.jsx)("span", {
            className: "admin-badge blue drag-handle",
            children: /* @__PURE__ */(0, import_jsx_runtime6.jsx)("i", {
              className: "admin-font adminfont-drag"
            })
          })
        }), FieldRenderers[field.type]?.(field)]
      }, field.id))
    })
  );
};
var AddressField = {
  render: ({
    field
  }) => {
    const [openedInput, setOpenedInput] = (0, import_react5.useState)(null);
    return /* @__PURE__ */(0, import_jsx_runtime6.jsx)(AddressFieldUI, {
      formField: field,
      opendInput: openedInput,
      setOpendInput: setOpenedInput
    });
  }
};
var AddressField_default = AddressField;

// src/components/CalendarInput.tsx
var import_react6 = __webpack_require__(/*! react */ "react");
var import_react_multi_date_picker = __toESM(__webpack_require__(/*! react-multi-date-picker */ "../../../node_modules/.pnpm/react-multi-date-picker@4.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-multi-date-picker/build/index.js"));
var import_date_panel = __toESM(__webpack_require__(/*! react-multi-date-picker/plugins/date_panel */ "../../../node_modules/.pnpm/react-multi-date-picker@4.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-multi-date-picker/plugins/date_panel.js"));
var import_jsx_runtime7 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var convertToDateObjectRange = (range, format = "MMMM DD YYYY") => {
  if (!range) {
    return null;
  }
  if (range.selectedDates && range.selectedDates.length > 0) {
    return range.selectedDates.map(date => new import_react_multi_date_picker.DateObject({
      date,
      format
    }));
  }
  return [new import_react_multi_date_picker.DateObject({
    date: range.startDate,
    format
  }), new import_react_multi_date_picker.DateObject({
    date: range.endDate,
    format
  })];
};
var calculateMaxDate = maxFutureMonths => {
  if (maxFutureMonths !== void 0) {
    const date = /* @__PURE__ */new Date();
    date.setMonth(date.getMonth() + maxFutureMonths);
    return date;
  }
  return /* @__PURE__ */new Date();
};
var Presets = ({
  setValue,
  pickerRef,
  format,
  onClose
}) => {
  const now = /* @__PURE__ */new Date();
  const startOfWeek = date => {
    const newdate = new Date(date);
    const day = newdate.getDay();
    newdate.setDate(newdate.getDate() - day + (day === 0 ? -6 : 1));
    return newdate;
  };
  const endOfWeek = date => {
    const newdate = startOfWeek(date);
    newdate.setDate(newdate.getDate() + 6);
    return newdate;
  };
  const startOfMonth = date => new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const apply = dates => {
    const result = dates.map(date => new import_react_multi_date_picker.DateObject({
      date,
      format
    }));
    setValue(result.length === 1 ? result[0] : result);
    pickerRef.current?.closeCalendar();
    onClose?.();
    closeDropdown?.();
  };
  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  const lastWeekStart = new Date(startOfWeek(now).getFullYear(), startOfWeek(now).getMonth(), startOfWeek(now).getDate() - 7);
  const lastWeekEnd = endOfWeek(lastWeekStart);
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonthEnd = endOfMonth(lastMonthStart);
  const startOfQuarter = date => {
    const month = date.getMonth();
    const quarterStartMonth = Math.floor(month / 3) * 3;
    return new Date(date.getFullYear(), quarterStartMonth, 1);
  };
  const startOfYear = date => {
    return new Date(date.getFullYear(), 0, 1);
  };
  const weekToDateStart = startOfWeek(now);
  const monthToDateStart = startOfMonth(now);
  const quarterToDateStart = startOfQuarter(now);
  const yearToDateStart = startOfYear(now);
  return /* @__PURE__ */(0, import_jsx_runtime7.jsxs)("div", {
    className: "range-picker-wrapper",
    children: [/* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([now]),
      children: "Today"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([yesterday]),
      children: "Yesterday"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([startOfWeek(now), endOfWeek(now)]),
      children: "This Week"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([lastWeekStart, lastWeekEnd]),
      children: "Last Week"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([startOfMonth(now), endOfMonth(now)]),
      children: "This Month"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([lastMonthStart, lastMonthEnd]),
      children: "Last Month"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([weekToDateStart, now]),
      children: "Week to date"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([monthToDateStart, now]),
      children: "Month to date"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([quarterToDateStart, now]),
      children: "Quarter to date"
    }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      onClick: () => apply([yearToDateStart, now]),
      children: "Year to date"
    })]
  });
};
var CalendarWithTabs = ({
  commonProps,
  showInput,
  inputClass,
  format,
  getDisplayValue,
  presetsProps
}) => {
  const [activeTab, setActiveTab] = (0, import_react6.useState)(0);
  const [showCalendar, setShowCalendar] = (0, import_react6.useState)(false);
  const localPickerRef = (0, import_react6.useRef)(null);
  const containerRef = (0, import_react6.useRef)(null);
  const dropdownRef = (0, import_react6.useRef)(null);
  const [openUpward, setOpenUpward] = (0, import_react6.useState)(false);
  const adjustPosition = () => {
    if (!containerRef.current || !dropdownRef.current) {
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const dropdownHeight = dropdownRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
      setOpenUpward(true);
    } else {
      setOpenUpward(false);
    }
  };
  (0, import_react6.useEffect)(() => {
    if (!showCalendar) {
      return;
    }
    const handlePosition = () => {
      requestAnimationFrame(adjustPosition);
    };
    const handleClickOutside = e => {
      if (!containerRef.current) {
        return;
      }
      if (!containerRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    handlePosition();
    window.addEventListener("scroll", handlePosition, true);
    window.addEventListener("resize", handlePosition);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handlePosition, true);
      window.removeEventListener("resize", handlePosition);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);
  const enhancedProps = {
    ...commonProps,
    onChange: val => {
      commonProps.onChange(val);
      if (Array.isArray(val) && val.length === 2 || val instanceof import_react_multi_date_picker.DateObject) {
        setShowCalendar(false);
      }
    }
  };
  const tabs = [{
    label: "Presets",
    content: /* @__PURE__ */(0, import_jsx_runtime7.jsx)(Presets, {
      ...presetsProps,
      closeDropdown: () => setShowCalendar(false)
    })
  }, {
    label: "Custom",
    content: /* @__PURE__ */(0, import_jsx_runtime7.jsx)(import_react_multi_date_picker.Calendar, {
      className: `${!showInput ? "calendar-wrapper" : "input-calendar"}`,
      ...commonProps,
      ...enhancedProps,
      ref: localPickerRef
    })
  }];
  if (showInput) {
    return /* @__PURE__ */(0, import_jsx_runtime7.jsxs)("div", {
      className: "settings-calender",
      ref: containerRef,
      children: [/* @__PURE__ */(0, import_jsx_runtime7.jsx)("input", {
        className: `basic-input calender-input ${inputClass || ""}`,
        onFocus: () => {
          setShowCalendar(true);
        },
        readOnly: true,
        name: "calendar-input",
        value: getDisplayValue ? getDisplayValue() : "",
        placeholder: format
      }), showCalendar && /* @__PURE__ */(0, import_jsx_runtime7.jsxs)("div", {
        ref: dropdownRef,
        className: `calendar-tabs-container ${openUpward ? "open-upward" : "open-downward"}`,
        children: [/* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
          className: "tabs-wrapper",
          children: /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
            className: "tabs-item",
            children: tabs.map((tab, index) => /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
              className: `tab ${index === activeTab ? "active-tab" : ""}`,
              onClick: () => setActiveTab(index),
              children: tab.label
            }, index))
          })
        }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
          className: "calendar-tab-content",
          children: tabs[activeTab].content
        })]
      })]
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
    className: "settings-calender",
    ref: containerRef,
    children: /* @__PURE__ */(0, import_jsx_runtime7.jsxs)("div", {
      className: "calendar-tabs-container",
      children: [/* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
        className: "tabs-wrapper",
        children: /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
          className: "tabs-item",
          children: tabs.map((tab, index) => /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
            className: `tab ${index === activeTab ? "active-tab" : ""}`,
            onClick: () => setActiveTab(index),
            children: tab.label
          }, index))
        })
      }), /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
        className: "calendar-tab-content",
        children: tabs[activeTab].content
      })]
    })
  });
};
var CalendarInputUI = ({
  inputClass,
  format = "MMMM DD YYYY",
  value,
  onChange,
  multiple = false,
  showInput = true,
  numberOfMonths = 1,
  fullYear,
  maxFutureMonths,
  showCompare = false,
  calendar = false,
  minDate,
  disabledDates = []
}) => {
  const pickerRef = (0, import_react6.useRef)(null);
  const maxDate = calculateMaxDate(maxFutureMonths);
  const [internalValue, setInternalValue] = (0, import_react6.useState)(convertToDateObjectRange(value, format));
  (0, import_react6.useEffect)(() => {
    setInternalValue(convertToDateObjectRange(value, format));
  }, [value, format]);
  const handleChange = val => {
    setInternalValue(val);
    if (multiple) {
      if (val) {
        const selectedDates = Array.isArray(val) ? val.map(dateObj => dateObj.toDate()) : [val.toDate()];
        onChange?.({
          selectedDates
        });
      }
    } else {
      if (Array.isArray(val) && val.length === 2) {
        const [start, end] = val;
        onChange?.({
          startDate: start.toDate(),
          endDate: end.toDate()
        });
        pickerRef.current?.closeCalendar?.();
      } else if (val instanceof import_react_multi_date_picker.DateObject) {
        const date = val.toDate();
        onChange?.({
          startDate: date,
          endDate: date
        });
        pickerRef.current?.closeCalendar?.();
      }
    }
  };
  const disabledDateMap = new Map(disabledDates.map(item => {
    const date = new Date(item.date);
    date.setHours(0, 0, 0, 0);
    return [date.toDateString(), item.description];
  }));
  const plugins = [];
  if (multiple) {
    plugins.push(/* @__PURE__ */(0, import_jsx_runtime7.jsx)(import_date_panel.default, {}, "date-panel"));
  }
  const commonProps = {
    ref: pickerRef,
    value: internalValue,
    format,
    range: !multiple && !calendar,
    numberOfMonths,
    sort: true,
    onChange: handleChange,
    maxDate,
    minDate,
    multiple,
    plugins,
    fullYear,
    mapDays: ({
      date
    }) => {
      const currentDate = date.toDate();
      currentDate.setHours(0, 0, 0, 0);
      const description = disabledDateMap.get(currentDate.toDateString());
      if (description) {
        return {
          disabled: true,
          title: description,
          className: "disabled-date"
        };
      }
      return {};
    }
  };
  const getPrevYearDate = date => {
    const d = new Date(date);
    d.setFullYear(d.getFullYear() - 1);
    return d;
  };
  const formatDate = date => {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };
  const getDisplayValue = () => {
    if (!value?.startDate) {
      return "";
    }
    const start = value.startDate;
    const end = value.endDate || value.startDate;
    const isSameDay = start === end;
    const currentText = isSameDay ? formatDate(start) : `${formatDate(start)} ~ ${formatDate(end)}`;
    if (!showCompare) {
      return currentText;
    }
    const prevStart = getPrevYearDate(start);
    const prevEnd = getPrevYearDate(end);
    const prevText = isSameDay ? formatDate(prevStart) : `${formatDate(prevStart)} ~ ${formatDate(prevEnd)}`;
    return `${currentText}  vs ${prevText}`;
  };
  if (calendar) {
    return /* @__PURE__ */(0, import_jsx_runtime7.jsx)("div", {
      className: "settings-calender",
      children: showInput ? /* @__PURE__ */(0, import_jsx_runtime7.jsx)(import_react_multi_date_picker.default, {
        ...commonProps,
        className: inputClass,
        placeholder: format,
        render: (value2, openCalendar) => /* @__PURE__ */(0, import_jsx_runtime7.jsx)("input", {
          className: "calender-input",
          onFocus: openCalendar,
          readOnly: true,
          name: "calendar-input",
          value: getDisplayValue()
        })
      }) : /* @__PURE__ */(0, import_jsx_runtime7.jsx)(import_react_multi_date_picker.Calendar, {
        className: `calendar-wrapper ${!showInput ? "calendar" : ""}`,
        ...commonProps
      })
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime7.jsx)(CalendarWithTabs, {
    commonProps,
    showInput,
    inputClass,
    format,
    getDisplayValue,
    presetsProps: {
      setValue: handleChange,
      pickerRef,
      format,
      onClose: () => pickerRef.current?.closeCalendar()
    }
  });
};
var CalendarInput = {
  render: ({
    field,
    value,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime7.jsx)(CalendarInputUI, {
    inputClass: field.inputClass,
    format: field.format,
    calendar: field.calendar ?? false,
    multiple: field.multiple ?? field.multiple ?? false,
    showInput: field.showInput,
    numberOfMonths: field.numberOfMonths,
    fullYear: field.fullYear,
    value,
    onChange,
    maxFutureMonths: field.maxFutureMonths,
    showCompare: field.showCompare
  })
};
var CalendarInput_default = CalendarInput;

// src/components/ColorSettingInput.tsx
var import_react8 = __webpack_require__(/*! react */ "react");

// src/components/ChoiceToggle.tsx
var import_react7 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime8 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
function formatModuleLabel(moduleKey) {
  return moduleKey.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
var ChoiceToggleUI = ({
  options,
  wrapperClass,
  value,
  key,
  onChange,
  iconEnable = false,
  custom,
  width,
  multiSelect = false,
  modules,
  onBlocked
}) => {
  const reactId = (0, import_react7.useId)();
  const uniqueName = key ? `${key}_${reactId}` : reactId;
  const block = option => {
    if (option.proSetting && !ZyraVariable.khali_dabba) {
      onBlocked?.("pro");
      return true;
    }
    if (option.moduleEnabled && !modules.includes(option.moduleEnabled)) {
      onBlocked?.("module", option.moduleEnabled);
      return true;
    }
    if (option.requiredPlugin && !(ZyraVariable.active_plugins || []).includes(option.requiredPlugin)) {
      onBlocked?.("plugin", option);
      return true;
    }
    return false;
  };
  const handleChange = (selectedOptionValue, option) => {
    if (block(option)) {
      return;
    }
    if (multiSelect) {
      const current = Array.isArray(value) ? value : [];
      let newValues;
      if (current.includes(selectedOptionValue)) {
        newValues = current.filter(compareValue => compareValue !== selectedOptionValue);
      } else {
        newValues = [...current, selectedOptionValue];
      }
      onChange(newValues);
    } else {
      onChange(selectedOptionValue);
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, {
    children: /* @__PURE__ */(0, import_jsx_runtime8.jsx)("div", {
      className: `choice-toggle-container ${wrapperClass ? wrapperClass : ""}`,
      children: /* @__PURE__ */(0, import_jsx_runtime8.jsx)("div", {
        className: `choice-toggle-wrapper ${custom ? "custom" : ""}`,
        children: options.map(option => {
          const isChecked = multiSelect ? Array.isArray(value) && value.includes(option.value) : value === option.value;
          const isProOption = !!option.proSetting;
          const uniqueId = `${uniqueName}_${option.key}`;
          return /* @__PURE__ */(0, import_jsx_runtime8.jsxs)("div", {
            role: "button",
            tabIndex: 0,
            className: "toggle-option",
            style: custom && width ? {
              width
            } : {},
            children: [/* @__PURE__ */(0, import_jsx_runtime8.jsx)("input", {
              className: "choice-toggle-form-input",
              type: multiSelect ? "checkbox" : "radio",
              id: uniqueId,
              name: uniqueName,
              value: option.value,
              checked: isChecked,
              readOnly: true,
              onClick: () => handleChange(option.value, option)
            }), /* @__PURE__ */(0, import_jsx_runtime8.jsxs)("label", {
              htmlFor: uniqueId,
              children: [/* @__PURE__ */(0, import_jsx_runtime8.jsx)("span", {
                children: iconEnable ? /* @__PURE__ */(0, import_jsx_runtime8.jsx)("i", {
                  className: option.value
                }) : option.img ? /* @__PURE__ */(0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, {
                  children: [/* @__PURE__ */(0, import_jsx_runtime8.jsx)("img", {
                    src: option.img
                  }), option.label]
                }) : option.icon ? /* @__PURE__ */(0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, {
                  children: [/* @__PURE__ */(0, import_jsx_runtime8.jsx)("i", {
                    className: `adminfont-${option.icon} `
                  }), option.label]
                }) : option.label
              }), option.desc && /* @__PURE__ */(0, import_jsx_runtime8.jsx)("div", {
                className: "des",
                children: option.desc
              }), option.customHtml && /* @__PURE__ */(0, import_jsx_runtime8.jsx)("div", {
                className: "choice-toggle-custom-wrapper",
                dangerouslySetInnerHTML: {
                  __html: option.customHtml
                }
              })]
            }), !option.proSetting && option.moduleEnabled && !modules.includes(option.moduleEnabled) && /* @__PURE__ */(0, import_jsx_runtime8.jsxs)("span", {
              className: "admin-pro-tag module",
              children: [/* @__PURE__ */(0, import_jsx_runtime8.jsx)("i", {
                className: `adminfont-${option.moduleEnabled}`
              }), formatModuleLabel(option.moduleEnabled), /* @__PURE__ */(0, import_jsx_runtime8.jsx)("i", {
                className: "adminfont-lock"
              })]
            }), isProOption && !ZyraVariable.khali_dabba && /* @__PURE__ */(0, import_jsx_runtime8.jsxs)("span", {
              className: "admin-pro-tag",
              children: [/* @__PURE__ */(0, import_jsx_runtime8.jsx)("i", {
                className: "adminfont-pro-tag"
              }), "Pro"]
            })]
          }, option.key);
        })
      })
    })
  });
};
var ChoiceToggle = {
  render: ({
    field,
    value,
    onChange,
    canAccess,
    modules,
    onBlocked
  }) => /* @__PURE__ */(0, import_jsx_runtime8.jsx)(ChoiceToggleUI, {
    wrapperClass: field.wrapperClass,
    iconEnable: field.iconEnable,
    custom: field.custom,
    width: field.width,
    multiSelect: field.multiSelect,
    canAccess,
    modules,
    onBlocked,
    options: Array.isArray(field.options) ? field.options.map(opt => ({
      ...opt,
      value: String(opt.value)
      // this can be an icon class
    })) : [],
    value: field.multiSelect ? Array.isArray(value) ? value : value ? [String(value)] : [] : String(value ?? field.defaultValue ?? ""),
    onChange: val => {
      if (!canAccess) {
        return;
      }
      onChange(val);
    }
  }, field.key),
  validate: (field, value) => {
    if (field.required && !value?.[field.key]) {
      return `${field.label} is required`;
    }
    return null;
  }
};
var ChoiceToggle_default = ChoiceToggle;

// src/components/ColorSettingInput.tsx
var import_renderer = __webpack_require__(/*! @react-pdf/renderer */ "../../../node_modules/.pnpm/@react-pdf+renderer@4.5.1_react@18.3.1/node_modules/@react-pdf/renderer/lib/react-pdf.browser.js");
var import_jsx_runtime9 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var ColorSettingInputUI = props => {
  const {
    filedKey,
    templateSelector = false,
    predefinedOptions = [],
    images = [],
    templates = [],
    value,
    onChange,
    showPdfButton
  } = props;
  const initialPalette = value?.selectedPalette || (predefinedOptions[0]?.value ?? "");
  const initialColors = value?.colors || {};
  const [templateKey, setTemplateKey] = (0, import_react8.useState)(value?.templateKey || templates?.[0]?.key);
  const activeTemplate = (0, import_react8.useMemo)(() => templates?.find(t => t.key === templateKey), [templates, templateKey]);
  const ActivePdf = activeTemplate?.pdf;
  const emitChange = payload => {
    onChange?.({
      target: {
        name: filedKey,
        value: payload
      }
    });
  };
  const changeTemplate = key => {
    setTemplateKey(key);
    emitChange({
      templateKey: key,
      colors: customColors
    });
  };
  const emitTemplateChange = (colors, key) => {
    emitChange({
      templateKey: key || templateKey,
      colors
    });
  };
  const initialMode = initialPalette === "templates" ? "templates" : initialPalette === "custom" ? "custom" : "predefined";
  const [mode, setMode] = (0, import_react8.useState)(initialMode);
  const [selectedPalette, setSelectedPalette] = (0, import_react8.useState)(initialPalette);
  const [selectedColors, setSelectedColors] = (0, import_react8.useState)(initialColors);
  const [customColors, setCustomColors] = (0, import_react8.useState)({
    colorPrimary: "#FF5959",
    colorSecondary: "#FADD3A",
    colorAccent: "#49BEB6",
    colorSupport: "#075F63",
    ...initialColors
  });
  const [selectedImage, setSelectedImage] = (0, import_react8.useState)(images?.[0]?.img || null);
  (0, import_react8.useEffect)(() => {
    if (selectedPalette !== "custom") {
      const selectedOption = predefinedOptions.find(opt => opt.value === selectedPalette);
      setSelectedColors(selectedOption?.colors || {});
    }
  }, [selectedPalette, predefinedOptions]);
  (0, import_react8.useEffect)(() => {
    const selectedPaletteValue = value?.selectedPalette;
    if (!selectedPaletteValue) {
      return;
    }
    const matchedImage = images.find(img => img.value === selectedPaletteValue);
    if (matchedImage?.img) {
      setSelectedImage(matchedImage.img);
    }
  }, [value?.selectedPalette, images]);
  const handlePaletteChange = e => {
    const value2 = e.target.value;
    setSelectedPalette(value2);
    if (value2 === "custom") {
      setMode("custom");
    } else {
      setMode("predefined");
    }
    const option = predefinedOptions.find(opt => opt.value === value2);
    const colors = value2 === "custom" ? customColors : option?.colors || {};
    setSelectedColors(colors);
    emitChange({
      selectedPalette: value2,
      colors
    });
  };
  const handleCustomChange = (field, value2) => {
    const updated = {
      ...customColors,
      [field]: value2
    };
    setCustomColors(updated);
    setSelectedColors(updated);
    setSelectedPalette("custom");
    setMode("custom");
    emitChange({
      selectedPalette: "custom",
      colors: updated
    });
  };
  return /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
    className: "color-settings-wrapper",
    children: [(templates?.length ?? 0) > 1 && !templateSelector && /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
      className: props.wrapperClass,
      children: /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
        className: "form-group-setting-wrapper",
        children: [/* @__PURE__ */(0, import_jsx_runtime9.jsx)("label", {
          children: "Select Template"
        }), /* @__PURE__ */(0, import_jsx_runtime9.jsx)(SelectInputUI, {
          name: "dashboard_template",
          options: templates.map(tpl => ({
            label: tpl.label,
            value: tpl.key
          })),
          value: templateKey,
          onChange: newValue => {
            if (!newValue || Array.isArray(newValue)) {
              return;
            }
            changeTemplate(newValue.value);
          }
        })]
      })
    }), /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
      className: "color-setting",
      children: [predefinedOptions.length > 0 && /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
        className: "color-palette-wrapper",
        children: [/* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
          className: "form-group-setting-wrapper",
          children: [/* @__PURE__ */(0, import_jsx_runtime9.jsx)("label", {
            children: "Color Palette"
          }), /* @__PURE__ */(0, import_jsx_runtime9.jsx)(ChoiceToggleUI, {
            options: [{
              key: "predefined",
              value: "predefined",
              label: "Pre-defined"
            }, {
              key: "custom",
              value: "custom",
              label: "Custom"
            }],
            value: mode,
            onChange: val => {
              const selectedVal = Array.isArray(val) ? val[0] : val;
              if (selectedVal === "predefined") {
                setMode("predefined");
                const value2 = predefinedOptions[0]?.value ?? "";
                setSelectedPalette(value2);
                const option = predefinedOptions.find(opt => opt.value === value2);
                const colors = option?.colors || {};
                setSelectedColors(colors);
                emitChange({
                  selectedPalette: value2,
                  colors
                });
              }
              if (selectedVal === "templates") {
                setMode("templates");
                setSelectedPalette("templates");
                setSelectedColors(customColors);
                emitTemplateChange(customColors, templateKey);
              }
              if (selectedVal === "custom") {
                setMode("custom");
                setSelectedPalette("custom");
                setSelectedColors(customColors);
                emitChange({
                  selectedPalette: "custom",
                  colors: customColors
                });
              }
            }
          })]
        }), /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
          className: "color-palette",
          children: [mode === "predefined" && /* @__PURE__ */(0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, {
            children: predefinedOptions.map(option => {
              const checked = selectedPalette === option.value;
              return /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
                className: "palette",
                children: [/* @__PURE__ */(0, import_jsx_runtime9.jsx)("input", {
                  className: props.inputClass,
                  id: `${props.idPrefix}-${option.key}`,
                  type: "radio",
                  name: "vendor_color_scheme_picker",
                  checked,
                  value: option.value,
                  onChange: handlePaletteChange
                }), /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("label", {
                  htmlFor: `${props.idPrefix}-${option.key}`,
                  children: [option.colors && /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
                    className: "color",
                    children: Object.values(option.colors).map((c, i) => /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
                      style: {
                        backgroundColor: c
                      }
                    }, i))
                  }), option.image && /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
                    className: "color",
                    children: /* @__PURE__ */(0, import_jsx_runtime9.jsx)("img", {
                      src: option.image,
                      alt: ""
                    })
                  }), /* @__PURE__ */(0, import_jsx_runtime9.jsx)("span", {
                    children: option.label
                  })]
                })]
              }, option.key);
            })
          }), mode === "custom" && /* @__PURE__ */(0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, {
            children: Object.entries(customColors).map(([key, val]) => /* @__PURE__ */(0, import_jsx_runtime9.jsx)(BasicInputUI, {
              type: "color",
              value: val,
              inputLabel: key.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase()),
              onChange: newVal => handleCustomChange(key, newVal)
            }))
          })]
        })]
      }), templateSelector && /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
        className: "template-list image-list",
        children: templates.map(template => /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
          className: `image-thumbnail template-thumbnail ${templateKey === template.key ? "active" : ""}`,
          onClick: () => {
            setTemplateKey(template.key);
            setMode("templates");
            setSelectedPalette("templates");
            emitChange({
              templateKey: template.key,
              colors: customColors
            });
          },
          children: /* @__PURE__ */(0, import_jsx_runtime9.jsx)("label", {
            children: template.label
          })
        }, template.key))
      }), activeTemplate && /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
        className: "preview-wrapper",
        children: /* @__PURE__ */(0, import_jsx_runtime9.jsx)(activeTemplate.component, {
          colors: {
            colorPrimary: selectedColors.colorPrimary ?? customColors.colorPrimary,
            colorSecondary: selectedColors.colorSecondary ?? customColors.colorSecondary,
            colorAccent: selectedColors.colorAccent ?? customColors.colorAccent,
            colorSupport: selectedColors.colorSupport ?? customColors.colorSupport
          },
          isPreview: true
        })
      })]
    }), images.length > 0 && /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
      className: "color-setting",
      children: [/* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
        className: "image-list",
        children: images && images.map(imgOption => /* @__PURE__ */(0, import_jsx_runtime9.jsxs)("div", {
          className: `image-thumbnail ${selectedPalette === imgOption.value ? "active" : ""}`,
          onClick: () => {
            const value2 = imgOption.value || "";
            setSelectedPalette(value2);
            setSelectedImage(imgOption.img || null);
            setMode("predefined");
            const option = predefinedOptions.find(opt => opt.value === value2);
            const colors = option?.colors || {};
            emitChange({
              selectedPalette: value2,
              colors
            });
          },
          children: [/* @__PURE__ */(0, import_jsx_runtime9.jsx)("img", {
            src: imgOption.img,
            alt: imgOption.label
          }), /* @__PURE__ */(0, import_jsx_runtime9.jsx)("label", {
            children: imgOption.label
          })]
        }, imgOption.key))
      }), /* @__PURE__ */(0, import_jsx_runtime9.jsx)("div", {
        className: "image-preview",
        children: selectedImage && /* @__PURE__ */(0, import_jsx_runtime9.jsx)("img", {
          src: selectedImage,
          alt: "Selected Template"
        })
      })]
    }), showPdfButton && ActivePdf && /* @__PURE__ */(0, import_jsx_runtime9.jsx)(import_renderer.PDFDownloadLink, {
      document: /* @__PURE__ */(0, import_jsx_runtime9.jsx)(ActivePdf, {
        colors: selectedColors
      }),
      fileName: `invoice-${templateKey}.pdf`,
      children: ({
        loading
      }) => loading ? "Generating PDF\u2026" : "Download PDF"
    })]
  });
};
var ColorSettingInput = {
  render: ({
    field,
    value,
    onChange,
    canAccess
  }) => /* @__PURE__ */(0, import_jsx_runtime9.jsx)(ColorSettingInputUI, {
    filedKey: field.key,
    wrapperClass: "form-group-color-setting",
    inputClass: "setting-form-input",
    predefinedOptions: field.predefinedOptions ?? [],
    images: field.images ?? [],
    value,
    templates: field.templates,
    onChange: e => {
      if (!canAccess) {
        return;
      }
      onChange(e.target.value);
    },
    templateSelector: field.templateSelector ?? false,
    idPrefix: "color-setting",
    showPdfButton: field.showPdfButton ?? false
  }),
  validate: () => {
    return null;
  }
};
var ColorSettingInput_default = ColorSettingInput;

// src/components/CanvasEditor/blockStyle.ts
var formatSpacing = (type, style) => {
  const top = style[`${type}Top`] ?? 0;
  const right = style[`${type}Right`] ?? 0;
  const bottom = style[`${type}Bottom`] ?? 0;
  const left = style[`${type}Left`] ?? 0;
  return `${top}rem ${right}rem ${bottom}rem ${left}rem`;
};
var generateColorStyles = style => {
  if (!style) {
    return {};
  }
  return {
    backgroundColor: style.backgroundColor,
    color: style.color
  };
};
var generateSpacingStyles = style => {
  if (!style) {
    return {};
  }
  return {
    padding: formatSpacing("padding", style),
    margin: formatSpacing("margin", style)
  };
};
var generateBorderStyles = style => {
  if (!style) {
    return {};
  }
  return {
    borderWidth: style.borderWidth !== void 0 ? `${style.borderWidth}rem` : void 0,
    borderColor: style.borderColor,
    borderStyle: style.borderStyle,
    borderRadius: style.borderRadius !== void 0 ? `${style.borderRadius}rem` : void 0
  };
};
var generateTextStyles = style => {
  if (!style) {
    return {};
  }
  return {
    textAlign: style.textAlign,
    fontSize: style.fontSize !== void 0 ? `${style.fontSize}rem` : void 0,
    fontFamily: style.fontFamily,
    lineHeight: style.lineHeight,
    fontWeight: style.fontWeight,
    textDecoration: style.textDecoration
  };
};
var generateDimensionStyles = style => {
  if (!style) {
    return {};
  }
  return {
    width: style.width,
    height: style.height
  };
};
var generateColumnStyles = style => {
  if (!style) {
    return {};
  }
  return {
    justifyContent: style.justifyContent
  };
};
var generateBlockStyles = (style, options = {}) => {
  if (!style) {
    return {};
  }
  const {
    includeText = true,
    includeDimensions = true
  } = options;
  return {
    ...generateColorStyles(style),
    ...generateSpacingStyles(style),
    ...generateBorderStyles(style),
    ...(includeText ? generateTextStyles(style) : {}),
    ...(includeDimensions ? generateDimensionStyles(style) : {}),
    ...generateColumnStyles(style)
  };
};

// src/components/Content.tsx
var import_jsx_runtime10 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var TextContentView = ({
  field,
  onChange,
  editable = true
}) => {
  if (!field) {
    return null;
  }
  const styles = generateBlockStyles(field.style, {
    includeText: true
  });
  const enhancedStyles = {
    ...styles,
    textAlign: field.style?.textAlign || "left",
    display: "block",
    width: "100%"
  };
  const handleBlur = e => {
    if (field.type === "heading" || field.type === "title") {
      onChange({
        text: e.currentTarget.textContent || ""
      });
    } else {
      onChange({
        html: e.currentTarget.innerHTML
      });
    }
  };
  if (field.type === "heading" || field.type === "title") {
    const Tag = `h${field.level || 2}`;
    return /* @__PURE__ */(0, import_jsx_runtime10.jsx)(Tag, {
      className: "email-heading",
      style: enhancedStyles,
      contentEditable: editable,
      suppressContentEditableWarning: true,
      onBlur: handleBlur,
      children: field.text || "Heading Text"
    });
  }
  if (field.context === "form") {
    return /* @__PURE__ */(0, import_jsx_runtime10.jsxs)("label", {
      className: "terms-checkbox",
      children: [/* @__PURE__ */(0, import_jsx_runtime10.jsx)("input", {
        type: "checkbox",
        checked: field.checked || false
      }), /* @__PURE__ */(0, import_jsx_runtime10.jsx)("div", {
        className: "email-text",
        style: enhancedStyles,
        contentEditable: editable,
        suppressContentEditableWarning: true,
        onBlur: e => {
          onChange({
            html: e.currentTarget.innerHTML
          });
        },
        dangerouslySetInnerHTML: {
          __html: field.html || 'I agree to the <a href="#">Terms & Conditions</a>'
        }
      })]
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime10.jsx)("div", {
    className: "email-text",
    style: enhancedStyles,
    contentEditable: editable,
    suppressContentEditableWarning: true,
    onBlur: handleBlur,
    dangerouslySetInnerHTML: {
      __html: field.html || "This is a demo text"
    }
  });
};
var TextContentUI = ({
  field,
  onChange
}) => {
  if (!field) {
    return null;
  }
  const handleChange = updates => {
    onChange(updates);
  };
  return /* @__PURE__ */(0, import_jsx_runtime10.jsx)(TextContentView, {
    field,
    onChange: handleChange,
    editable: true
  });
};
var Content = {
  render: TextContentUI
};
var Content_default = Content;

// src/components/EndpointEditor.tsx
var import_react9 = __webpack_require__(/*! react */ "react");
var import_axios3 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));
var import_react_drag_listview = __toESM(__webpack_require__(/*! react-drag-listview */ "../../../node_modules/.pnpm/react-drag-listview@2.0.0/node_modules/react-drag-listview/es/index.js"));

// src/components/UI/Skeleton.tsx
var import_jsx_runtime11 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var Skeleton = ({
  variant = "text",
  width = "100%",
  height = 1,
  className = ""
}) => {
  const formatValue = value => {
    if (typeof value === "number") {
      return `${value}rem`;
    }
    return value;
  };
  const styles = {
    width: formatValue(width),
    height: formatValue(height)
  };
  return /* @__PURE__ */(0, import_jsx_runtime11.jsx)("span", {
    className: `skeleton skeleton-${variant} ${className}`,
    style: styles
  });
};
var Skeleton_default = Skeleton;

// src/components/EndpointEditor.tsx
var import_jsx_runtime12 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var EndpointEditorUI = ({
  apilink,
  onChange
}) => {
  const [endpoints, setEndpoints] = (0, import_react9.useState)([]);
  const [editKey, setEditKey] = (0, import_react9.useState)(null);
  const [editName, setEditName] = (0, import_react9.useState)("");
  const [editSlug, setEditSlug] = (0, import_react9.useState)("");
  const [isLoading, setIsLoading] = (0, import_react9.useState)(true);
  const editRef = (0, import_react9.useRef)(null);
  useOutsideClick(editRef, () => setEditKey(null));
  (0, import_react9.useEffect)(() => {
    setIsLoading(true);
    (0, import_axios3.default)({
      url: getApiLink(ZyraVariable, apilink),
      method: "GET",
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      },
      params: {
        menuOnly: true
      }
    }).then(res => {
      const typedData = res.data;
      const formatted = Object.entries(typedData).map(([k, v]) => [k, {
        ...v,
        visible: v.visible !== false
      }]);
      setEndpoints(formatted);
      setIsLoading(false);
    });
  }, [apilink]);
  const autoSave = updated => {
    setEndpoints(updated);
    onChange(Object.fromEntries(updated));
  };
  const updateEndpoint = (key, updater) => {
    const updated = endpoints.map(([k, item]) => k === key ? [k, updater(item)] : [k, item]);
    autoSave(updated);
  };
  const updateSubmenu = (key, index, updater) => {
    updateEndpoint(key, item => {
      const submenu = [...item.submenu];
      submenu[index] = updater(submenu[index]);
      return {
        ...item,
        submenu
      };
    });
  };
  const generateUniqueSlug = (value, currentKey) => {
    const base = value.toLowerCase().replace(/[^a-z0-9-]/g, "").trim();
    if (!base) {
      return "";
    }
    const existing = endpoints.filter(([k]) => k !== currentKey).map(([, item]) => item.slug);
    let slug = base;
    let counter = 1;
    while (existing.includes(slug)) {
      slug = `${base}${counter++}`;
    }
    return slug;
  };
  const onDragEnd = (from, to) => {
    const updated = [...endpoints];
    const moved = updated.splice(from, 1)[0];
    updated.splice(to, 0, moved);
    autoSave(updated);
  };
  const onSubmenuDragEnd = (key, from, to) => {
    updateEndpoint(key, item => {
      const submenu = [...item.submenu];
      const moved = submenu.splice(from, 1)[0];
      submenu.splice(to, 0, moved);
      return {
        ...item,
        submenu
      };
    });
  };
  const startEdit = (key, endpoint) => {
    setEditKey(key);
    setEditName(endpoint.name);
    setEditSlug(endpoint.slug);
  };
  const toggleVisibility = key => {
    updateEndpoint(key, item => ({
      ...item,
      visible: item.visible === false
    }));
  };
  const renderRow = ([key, endpoint], index) => {
    const isDashboard = key === "dashboard";
    return /* @__PURE__ */(0, import_jsx_runtime12.jsxs)("div", {
      "data-index": index,
      className: "menu-item",
      children: [editKey === key ? /* @__PURE__ */(0, import_jsx_runtime12.jsx)("div", {
        className: "edit-menu",
        ref: editRef,
        children: /* @__PURE__ */(0, import_jsx_runtime12.jsxs)("div", {
          className: "name-wrapper",
          children: [/* @__PURE__ */(0, import_jsx_runtime12.jsx)(BasicInputUI, {
            type: "text",
            value: editName,
            onChange: val => {
              const name = val;
              setEditName(name);
              updateEndpoint(key, item => ({
                ...item,
                name
              }));
            }
          }), !isDashboard && /* @__PURE__ */(0, import_jsx_runtime12.jsx)(BasicInputUI, {
            type: "text",
            value: editSlug,
            onChange: val => {
              const slug = generateUniqueSlug(val, key);
              setEditSlug(slug);
              if (!slug) {
                return;
              }
              updateEndpoint(key, item => ({
                ...item,
                slug
              }));
            }
          })]
        })
      }) : /* @__PURE__ */(0, import_jsx_runtime12.jsxs)("div", {
        className: "main-menu",
        style: {
          opacity: endpoint.visible === false ? 0.5 : 1
        },
        children: [/* @__PURE__ */(0, import_jsx_runtime12.jsxs)("div", {
          className: "name-wrapper",
          children: [!isDashboard && /* @__PURE__ */(0, import_jsx_runtime12.jsx)("i", {
            className: "adminfont-drag"
          }), /* @__PURE__ */(0, import_jsx_runtime12.jsx)("i", {
            className: `adminfont-${endpoint.icon}`
          }), /* @__PURE__ */(0, import_jsx_runtime12.jsxs)("div", {
            className: "name",
            children: [endpoint.name, !isDashboard && /* @__PURE__ */(0, import_jsx_runtime12.jsx)("code", {
              children: endpoint.slug
            })]
          })]
        }), !isDashboard && /* @__PURE__ */(0, import_jsx_runtime12.jsxs)("div", {
          className: "edit-icon",
          children: [endpoint.visible !== false && /* @__PURE__ */(0, import_jsx_runtime12.jsx)("i", {
            className: "adminfont-edit",
            onClick: () => startEdit(key, endpoint)
          }), /* @__PURE__ */(0, import_jsx_runtime12.jsx)("i", {
            className: `adminfont-eye${endpoint.visible === false ? "-blocked" : ""}`,
            onClick: () => toggleVisibility(key)
          })]
        })]
      }), endpoint.submenu?.length > 0 && /* @__PURE__ */(0, import_jsx_runtime12.jsx)(import_react_drag_listview.default, {
        nodeSelector: ".sub-menu",
        onDragEnd: (from, to) => onSubmenuDragEnd(key, from, to),
        children: /* @__PURE__ */(0, import_jsx_runtime12.jsx)("ul", {
          children: endpoint.submenu.map((sub, i) => {
            const subKey = `${key}-sub-${i}`;
            return /* @__PURE__ */(0, import_jsx_runtime12.jsx)("li", {
              className: "sub-menu",
              style: {
                opacity: endpoint.visible === false ? 0.5 : 1
              },
              children: editKey === subKey ? /* @__PURE__ */(0, import_jsx_runtime12.jsx)(BasicInputUI, {
                ref: editRef,
                type: "text",
                value: editName,
                onChange: val => {
                  const name = val;
                  setEditName(name);
                  updateSubmenu(key, i, s => ({
                    ...s,
                    name
                  }));
                }
              }) : /* @__PURE__ */(0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
                children: [/* @__PURE__ */(0, import_jsx_runtime12.jsx)("i", {
                  className: "adminfont-drag"
                }), sub.name, /* @__PURE__ */(0, import_jsx_runtime12.jsx)("i", {
                  className: "adminfont-edit",
                  onClick: () => {
                    setEditKey(subKey);
                    setEditName(sub.name);
                  }
                })]
              })
            }, i);
          })
        })
      })]
    }, key);
  };
  if (isLoading) {
    return /* @__PURE__ */(0, import_jsx_runtime12.jsx)("div", {
      className: "endpoints-wrapper",
      children: [...Array(10).keys()].map(i => /* @__PURE__ */(0, import_jsx_runtime12.jsx)("div", {
        className: "endpoint drag-row",
        children: /* @__PURE__ */(0, import_jsx_runtime12.jsx)("div", {
          className: "menu-item",
          children: /* @__PURE__ */(0, import_jsx_runtime12.jsx)(Skeleton_default, {
            height: 2.813
          })
        })
      }, i))
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime12.jsx)("div", {
    className: "endpoints-wrapper",
    children: /* @__PURE__ */(0, import_jsx_runtime12.jsx)(import_react_drag_listview.default, {
      nodeSelector: ".drag-row",
      handleSelector: ".drag-handle",
      onDragEnd,
      children: endpoints.map(([key, endpoint], index) => /* @__PURE__ */(0, import_jsx_runtime12.jsx)("div", {
        className: "endpoint drag-row",
        children: key === "dashboard" ? renderRow([key, endpoint], index) : /* @__PURE__ */(0, import_jsx_runtime12.jsx)("div", {
          className: "drag-handle menu-wrapper",
          children: renderRow([key, endpoint], index)
        })
      }, key))
    })
  });
};
var EndpointEditor = {
  render: ({
    field,
    onChange,
    canAccess
  }) => /* @__PURE__ */(0, import_jsx_runtime12.jsx)(EndpointEditorUI, {
    name: field.key,
    apilink: String(field.apiLink),
    onChange: val => {
      if (!canAccess) {
        return;
      }
      onChange(val);
    }
  }),
  validate: () => null
};
var EndpointEditor_default = EndpointEditor;

// src/components/EventCalendar.tsx
var import_react10 = __webpack_require__(/*! react */ "react");
var import_react_multi_date_picker2 = __webpack_require__(/*! react-multi-date-picker */ "../../../node_modules/.pnpm/react-multi-date-picker@4.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-multi-date-picker/build/index.js");
var import_jsx_runtime13 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var toDateKey = date => `${date.year}-${String(date.month.number).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;
var EventCalendarUI = ({
  wrapperClass = "",
  format = "MMMM DD YYYY",
  value = {},
  onChange,
  onMonthChange,
  onEventClick,
  NumberOfMonth = 1,
  fullYear
}) => {
  const [selectedDate, setSelectedDate] = (0, import_react10.useState)(null);
  const events = value;
  const updateEvents = updated => {
    onChange?.(updated);
  };
  const handlePanelChange = data => {
    if (!selectedDate) {
      return;
    }
    const key = toDateKey(selectedDate);
    const updatedEvents = Object.entries(data).map(([id, values]) => ({
      id,
      title: values.title,
      description: values.description || ""
    }));
    updateEvents({
      ...events,
      [key]: updatedEvents
    });
  };
  const selectedDateEvents = selectedDate ? events[toDateKey(selectedDate)] || [] : [];
  const getPanelMethods = () => {
    if (!selectedDate) {
      return [];
    }
    return selectedDateEvents.map(event => ({
      id: event.id,
      label: event.title,
      desc: event.description || "",
      connected: true,
      isCustom: true,
      disableBtn: false,
      hideDeleteBtn: false,
      countBtn: false,
      openForm: false
    }));
  };
  const getPanelValues = () => {
    if (!selectedDate) {
      return {};
    }
    return selectedDateEvents.reduce((acc, event) => ({
      ...acc,
      [event.id]: {
        title: event.title,
        description: event.description || "",
        enable: true
      }
    }), {});
  };
  return /* @__PURE__ */(0, import_jsx_runtime13.jsx)("div", {
    className: `settings-event-calendar ${wrapperClass}`,
    children: /* @__PURE__ */(0, import_jsx_runtime13.jsx)(import_react_multi_date_picker2.Calendar, {
      format,
      numberOfMonths: NumberOfMonth,
      fullYear,
      onMonthChange,
      mapDays: ({
        date
      }) => {
        const dayEvents = events[toDateKey(date)] || [];
        return {
          children: /* @__PURE__ */(0, import_jsx_runtime13.jsxs)("div", {
            className: "sd",
            children: [/* @__PURE__ */(0, import_jsx_runtime13.jsx)("span", {
              className: "date",
              children: date.day
            }), /* @__PURE__ */(0, import_jsx_runtime13.jsx)("div", {
              className: "events-container",
              children: dayEvents.map(event => /* @__PURE__ */(0, import_jsx_runtime13.jsx)("div", {
                className: "event",
                title: event.title,
                onClick: e => {
                  if (onEventClick) {
                    onEventClick(event, date);
                  }
                },
                children: /* @__PURE__ */(0, import_jsx_runtime13.jsx)("div", {
                  className: "name",
                  children: event.title.length > 20 ? `${event.title.substring(0, 20)}...` : event.title
                })
              }, event.id))
            })]
          })
        };
      }
    })
  });
};
var EventCalendar = {
  render: ({
    field,
    value,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime13.jsx)(EventCalendarUI, {
    ...field,
    value,
    onChange
  })
};
var EventCalendar_default = EventCalendar;

// src/components/ExpandablePanel.tsx
var import_react13 = __webpack_require__(/*! react */ "react");
var import_axios4 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));

// src/components/Notice.tsx
var import_react11 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime14 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var STORAGE_KEY = "zyra_app_notices_v1";
var noticeQueue = [];
var subscribers = /* @__PURE__ */new Set();
var getStored = () => {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return [];
    }
    const now = Date.now();
    const parsed = JSON.parse(data);
    return parsed.filter(n => typeof n.expiresAt === "number" && n.expiresAt > now);
  } catch {
    return [];
  }
};
var persist = () => {
  const now = Date.now();
  const persistable = noticeQueue.filter(n => typeof n.expiresAt === "number" && n.expiresAt > now);
  if (persistable.length === 0) {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
  }
};
var broadcast = () => {
  persist();
  subscribers.forEach(cb => cb([...noticeQueue]));
};
if (typeof window !== "undefined") {
  noticeQueue = getStored();
}
var NoticeManager = {
  subscribe(cb) {
    subscribers.add(cb);
    cb([...noticeQueue]);
    return () => subscribers.delete(cb);
  },
  add(notice, validity) {
    const uniqueKey = notice.uniqueKey || Date.now().toString();
    if (noticeQueue.some(n => n.uniqueKey === uniqueKey)) {
      return;
    }
    let finalValidity;
    if (validity !== void 0) {
      finalValidity = validity;
    } else {
      finalValidity = notice.position === "float" ? 2e3 : "lifetime";
    }
    const expiresAt = finalValidity === "lifetime" ? void 0 : Date.now() + finalValidity;
    noticeQueue.push({
      ...notice,
      uniqueKey,
      expiresAt
    });
    if (expiresAt && typeof finalValidity === "number") {
      setTimeout(() => {
        NoticeManager.remove(uniqueKey);
      }, finalValidity);
    }
    broadcast();
  },
  remove(uniqueKey) {
    noticeQueue = noticeQueue.filter(n => n.uniqueKey !== uniqueKey);
    broadcast();
  },
  clearSession() {
    noticeQueue = noticeQueue.filter(n => n.expiresAt);
    broadcast();
  }
};
var handleCloseBanner = uniqueKey => {
  localStorage.setItem("banner_dismissed", "true");
  NoticeManager.remove(uniqueKey);
};
var renderNoticeContent = (item, onClose) => /* @__PURE__ */(0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, {
  children: [/* @__PURE__ */(0, import_jsx_runtime14.jsx)("i", {
    className: `admin-font adminfont-${item.type}`
  }), /* @__PURE__ */(0, import_jsx_runtime14.jsxs)("div", {
    className: "notice-details",
    style: {
      "--total-items": Array.isArray(item.message) ? item.message.length : 1,
      "--step-time": "4s",
      "--banner-duration": `${(Array.isArray(item.message) ? item.message.length : 1) * 4}s`
    },
    children: [item.title && /* @__PURE__ */(0, import_jsx_runtime14.jsx)("div", {
      className: "notice-text",
      children: item.title
    }), Array.isArray(item.message) ? /* @__PURE__ */(0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, {
      children: [item.message.map((msg, i) => /* @__PURE__ */(0, import_jsx_runtime14.jsxs)("div", {
        className: "notice-desc",
        style: {
          animationDelay: `${i * 4}s`
        },
        children: [/* @__PURE__ */(0, import_jsx_runtime14.jsx)("span", {
          dangerouslySetInnerHTML: {
            __html: msg
          }
        }), item.actionLabel && /* @__PURE__ */(0, import_jsx_runtime14.jsx)("div", {
          className: "banner-btn",
          onClick: item.onAction,
          children: item.actionLabel
        })]
      }, i)), onClose && /* @__PURE__ */(0, import_jsx_runtime14.jsx)("i", {
        className: "close-icon adminfont-close",
        onClick: () => handleCloseBanner(item.uniqueKey)
      })]
    }) : item.message && /* @__PURE__ */(0, import_jsx_runtime14.jsx)("div", {
      className: "notice-desc",
      dangerouslySetInnerHTML: {
        __html: item.message
      }
    })]
  })]
});
var Notice = ({
  uniqueKey,
  title,
  message,
  type = "success",
  displayPosition = "notice",
  actionLabel,
  onAction,
  validity
}) => {
  const [isVisible, setIsVisible] = (0, import_react11.useState)(true);
  (0, import_react11.useEffect)(() => {
    if (displayPosition === "inline" || displayPosition === "inline-notice") {
      return;
    }
    NoticeManager.add({
      uniqueKey,
      title,
      message,
      type,
      position: displayPosition,
      actionLabel,
      onAction
    }, validity);
    setIsVisible(false);
  }, []);
  const isInline = ["inline", "inline-notice"].includes(displayPosition);
  if (!isInline || !isVisible || !title && !message) {
    return null;
  }
  const item = {
    uniqueKey: uniqueKey || "inline",
    title,
    message,
    type,
    position: "notice",
    actionLabel,
    onAction
  };
  return /* @__PURE__ */(0, import_jsx_runtime14.jsx)("div", {
    className: `ui-notice type-${type} display-${displayPosition}`,
    children: renderNoticeContent(item, () => setIsVisible(false))
  });
};
var NoticeReceiver = ({
  position
}) => {
  const [items, setItems] = (0, import_react11.useState)([]);
  (0, import_react11.useEffect)(() => {
    return NoticeManager.subscribe(notices => {
      setItems(notices.filter(n => n.position === position));
    });
  }, [position]);
  if (!items.length) {
    return null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime14.jsx)("div", {
    className: `receiver receiver-${position}`,
    children: items.map(item => /* @__PURE__ */(0, import_jsx_runtime14.jsx)("div", {
      className: `ui-notice type-${item.type} display-${item.position}`,
      children: renderNoticeContent(item, () => NoticeManager.remove(item.uniqueKey))
    }, item.uniqueKey))
  });
};
var NoticeField = {
  render: ({
    field
  }) => {
    const item = {
      uniqueKey: field.uniqueKey || field.key,
      title: field.title,
      message: field.message,
      type: field.noticeType || "info",
      position: "notice",
      actionLabel: field.actionLabel,
      onAction: field.onAction
    };
    return /* @__PURE__ */(0, import_jsx_runtime14.jsx)("div", {
      className: `ui-notice type-${item.type} display-${item.position}`,
      children: renderNoticeContent(item)
    });
  }
};
var Notice_default = NoticeField;

// src/components/UI/FormGroup.tsx
var import_jsx_runtime15 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var FormGroup = ({
  label,
  desc = "",
  icon,
  iconRight,
  htmlFor = "",
  children,
  className = "",
  labelDes,
  cols = 12,
  row = false,
  notice,
  noticeType = "error"
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime15.jsxs)("div", {
    className: `form-group ${row ? "row" : ""} ${className}`,
    "data-cols": cols,
    children: [label && /* @__PURE__ */(0, import_jsx_runtime15.jsxs)("label", {
      className: "settings-form-label",
      htmlFor,
      children: [/* @__PURE__ */(0, import_jsx_runtime15.jsxs)("div", {
        className: "title",
        children: [icon && /* @__PURE__ */(0, import_jsx_runtime15.jsx)("i", {
          className: `adminfont-${icon} ${icon} form-icon`
        }), label, iconRight && /* @__PURE__ */(0, import_jsx_runtime15.jsx)("i", {
          className: `adminfont-${iconRight} form-icon`
        })]
      }), labelDes && /* @__PURE__ */(0, import_jsx_runtime15.jsx)("div", {
        className: "settings-metabox-description",
        children: labelDes
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime15.jsxs)("div", {
      className: "settings-input-content",
      children: [children, notice && /* @__PURE__ */(0, import_jsx_runtime15.jsx)(Notice, {
        type: noticeType,
        message: notice,
        displayPosition: "inline"
      }), desc && /* @__PURE__ */(0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, {
        children: typeof desc === "string" ? /* @__PURE__ */(0, import_jsx_runtime15.jsx)("div", {
          className: "settings-metabox-description",
          dangerouslySetInnerHTML: {
            __html: desc
          }
        }) :
        // Render React nodes directly
        /* @__PURE__ */
        (0, import_jsx_runtime15.jsxs)("div", {
          className: "settings-metabox-description",
          children: [" ", desc, " "]
        })
      })]
    })]
  });
};
var FormGroup_default = FormGroup;

// src/components/UI/FormGroupWrapper.tsx
var import_jsx_runtime16 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var FormGroupWrapper = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime16.jsx)("div", {
    className: `form-group-wrapper ${className}`,
    children
  });
};
var FormGroupWrapper_default = FormGroupWrapper;

// src/components/ItemList.tsx
var import_react12 = __toESM(__webpack_require__(/*! react */ "react"));
var import_jsx_runtime17 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var ItemListUI = ({
  items,
  background,
  border,
  className,
  onItemClick,
  loading = false,
  skeletonCount = 5
}) => {
  const [isExpanded, setIsExpanded] = import_react12.default.useState(className === "price-list");
  if (loading) {
    return /* @__PURE__ */(0, import_jsx_runtime17.jsx)("div", {
      className: `item-list ${className || "default"}`,
      children: Array.from({
        length: skeletonCount
      }).map((_, index) => /* @__PURE__ */(0, import_jsx_runtime17.jsxs)("div", {
        className: "item",
        children: [/* @__PURE__ */(0, import_jsx_runtime17.jsx)(Skeleton_default, {
          variant: "circular",
          width: 2,
          height: 2
        }), /* @__PURE__ */(0, import_jsx_runtime17.jsxs)("div", {
          className: "details",
          children: [/* @__PURE__ */(0, import_jsx_runtime17.jsx)(Skeleton_default, {
            width: "60%",
            height: 0.75
          }), /* @__PURE__ */(0, import_jsx_runtime17.jsx)(Skeleton_default, {
            width: "40%",
            height: 0.625
          })]
        })]
      }, index))
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime17.jsxs)("div", {
    className: `item-list ${className || "default"} ${isExpanded ? "expanded" : ""}`,
    children: [items && items.map(item => {
      const handleClick = e => {
        e.stopPropagation();
        if (item.action) {
          item.action(item, e);
        }
        if (onItemClick) {
          onItemClick(item);
        }
      };
      return /* @__PURE__ */(0, import_jsx_runtime17.jsx)(import_react12.default.Fragment, {
        children: item.link ? /* @__PURE__ */(0, import_jsx_runtime17.jsxs)("a", {
          href: item.link,
          target: item.targetBlank ? "_blank" : "_self",
          className: `item ${background ? "background" : ""} ${border ? "border" : ""} ${item.className || ""}`,
          onClick: handleClick,
          children: [item.icon && /* @__PURE__ */(0, import_jsx_runtime17.jsx)("i", {
            className: `item-icon adminfont-${item.icon}`
          }), item.title]
        }) : /* @__PURE__ */(0, import_jsx_runtime17.jsxs)("div", {
          className: `item ${background ? "background" : ""} ${border ? "border" : ""} ${item.className || ""}`,
          onClick: () => {
            item.action?.(item);
            if (onItemClick) {
              onItemClick(item);
            }
          },
          children: [item.icon && /* @__PURE__ */(0, import_jsx_runtime17.jsx)("i", {
            className: `item-icon adminfont-${item.icon}`
          }), item.img && /* @__PURE__ */(0, import_jsx_runtime17.jsx)("img", {
            src: item.img,
            alt: item.title || "item image"
          }), /* @__PURE__ */(0, import_jsx_runtime17.jsxs)("div", {
            className: "details",
            children: [/* @__PURE__ */(0, import_jsx_runtime17.jsx)("div", {
              className: "item-title",
              dangerouslySetInnerHTML: {
                __html: item.title
              }
            }), item.value && /* @__PURE__ */(0, import_jsx_runtime17.jsx)("div", {
              className: "value",
              children: item.value
            }), item.desc && /* @__PURE__ */(0, import_jsx_runtime17.jsx)("div", {
              className: "desc",
              children: item.desc
            })]
          }), className === "notification" && /* @__PURE__ */(0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, {
            children: [/* @__PURE__ */(0, import_jsx_runtime17.jsx)("i", {
              className: "check-icon adminfont-check green-color",
              onClick: e => {
                e.stopPropagation();
                item.onApprove?.(item);
              }
            }), /* @__PURE__ */(0, import_jsx_runtime17.jsx)("i", {
              className: "check-icon adminfont-cross red-color",
              onClick: e => {
                e.stopPropagation();
                item.onReject?.(item);
              }
            })]
          }), item.tags && /* @__PURE__ */(0, import_jsx_runtime17.jsx)("div", {
            className: "tags",
            children: typeof item.tags === "string" ? /* @__PURE__ */(0, import_jsx_runtime17.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: item.tags
              }
            }) : item.tags
          })]
        })
      }, item.id);
    }), className === "price-list" && /* @__PURE__ */(0, import_jsx_runtime17.jsx)("div", {
      className: "more-btn-wrapper",
      children: /* @__PURE__ */(0, import_jsx_runtime17.jsx)("span", {
        className: "more-btn",
        onClick: e => {
          e.stopPropagation();
          setIsExpanded(prev => !prev);
        },
        children: isExpanded ? /* @__PURE__ */(0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, {
          children: ["More ", /* @__PURE__ */(0, import_jsx_runtime17.jsx)("i", {
            className: "adminfont-arrow-down"
          })]
        }) : /* @__PURE__ */(0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, {
          children: ["Less ", /* @__PURE__ */(0, import_jsx_runtime17.jsx)("i", {
            className: "adminfont-arrow-up"
          })]
        })
      })
    })]
  });
};
var ItemList = {
  render: ({
    field,
    value,
    onChange,
    canAccess
  }) => {
    const items = Array.isArray(value) ? value : field.items || [];
    return /* @__PURE__ */(0, import_jsx_runtime17.jsx)(ItemListUI, {
      items,
      className: field.className,
      background: field.background,
      border: field.border,
      loading: field.loading,
      onItemClick: item => {
        if (!canAccess) {
          return;
        }
        if (item.action) {
          item.action(item);
        }
        onChange?.(item);
      }
    });
  }
};
var ItemList_default = ItemList;

// src/components/ExpandablePanel.tsx
var import_jsx_runtime18 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var PanelContext = (0, import_react13.createContext)(null);
var PanelItemContext = (0, import_react13.createContext)(null);
var usePanel = () => {
  const context = (0, import_react13.useContext)(PanelContext);
  if (!context) {
    throw new Error("usePanel must be used within PanelProvider");
  }
  return context;
};
var usePanelItem = () => {
  const context = (0, import_react13.useContext)(PanelItemContext);
  if (!context) {
    throw new Error("usePanelItem must be used within PanelItemProvider");
  }
  return context;
};
var panelReducer = (state, action) => {
  switch (action.type) {
    case "SET_METHODS":
      return {
        ...state,
        methods: action.methods
      };
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.id
      };
    case "SET_WIZARD_INDEX":
      return {
        ...state,
        wizardIndex: action.index
      };
    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.progress
      };
    case "SET_OPEN_DROPDOWN":
      return {
        ...state,
        openDropdown: action.id
      };
    case "SET_ICON_DROPDOWN":
      return {
        ...state,
        iconDropdown: action.id
      };
    case "START_EDIT":
      return {
        ...state,
        editId: action.id,
        editField: action.field,
        editTitle: action.title || "",
        editDesc: action.desc || ""
      };
    case "UPDATE_EDIT_TITLE":
      return {
        ...state,
        editTitle: action.title
      };
    case "UPDATE_EDIT_DESC":
      return {
        ...state,
        editDesc: action.desc
      };
    case "COMMIT_EDIT":
    case "CANCEL_EDIT":
      return {
        ...state,
        editId: null,
        editField: null,
        editTitle: "",
        editDesc: ""
      };
    case "ADD_METHOD":
      return {
        ...state,
        methods: [...state.methods, action.method],
        activeTab: action.method.id
      };
    case "DELETE_METHOD":
      return {
        ...state,
        methods: state.methods.filter(m => m.id !== action.id),
        activeTab: state.activeTab === action.id ? null : state.activeTab
      };
    default:
      return state;
  }
};
var isCountableField = f => f.type !== "button" && f.type !== "notice";
var isFilled = val => {
  if (val === null || val === void 0) {
    return false;
  }
  if (typeof val === "string") {
    return val.trim() !== "";
  }
  if (Array.isArray(val)) {
    return val.length > 0;
  }
  return true;
};
var mergeTemplateFields = (method, tplFields) => {
  if (!tplFields.length) {
    return method;
  }
  const existing = new Set((method.formFields ?? []).map(f => f.key));
  return {
    ...method,
    formFields: [...(method.formFields ?? []), ...tplFields.filter(f => !existing.has(f.key))]
  };
};
var formatPrice = methodValue => {
  const {
    price,
    unit
  } = methodValue;
  if (price === null || price === void 0 || price === "") {
    return null;
  }
  return {
    price: typeof price === "number" ? `$${price.toFixed(2)}` : `$${price}`,
    unit: unit ? String(unit) : ""
  };
};
var canEditField = (method, field, tpl) => {
  if (!method.isCustom) {
    return false;
  }
  return !tpl?.editableFields || tpl.editableFields[field] !== false;
};
var PanelHeader = () => {
  const {
    state,
    dispatch,
    addNewTemplate,
    titleRef,
    descRef,
    iconPicker,
    handleChange,
    commitEdit,
    isWizardMode,
    editTitleShow
  } = usePanel();
  const {
    method,
    methodValue,
    isOpen,
    isOn,
    hasFields,
    icon,
    title,
    desc,
    showMandatoryBadge
  } = usePanelItem();
  const editing = state.editId === method.id;
  const editField = state.editField;
  const editTitle = state.editTitle;
  const editDesc = state.editDesc;
  const iconDropdown = state.iconDropdown;
  const showToggleIcon = method.disableBtn && !method.isCustom || isWizardMode && method.isWizardMode || addNewTemplate?.showMandatoryCheckbox === true;
  const shouldShowToggleButton = () => {
    if (addNewTemplate?.showMandatoryCheckbox === true) {
      return true;
    }
    if (isWizardMode && method.isWizardMode) {
      return hasFields;
    }
    return hasFields && isOn;
  };
  return /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
    className: "expandable-header",
    children: [showToggleIcon && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
      className: "toggle-icon",
      children: shouldShowToggleButton() && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
        className: `adminfont-${isOpen ? "keyboard-arrow-down" : "pagination-right-arrow"}`,
        onClick: () => dispatch({
          type: "SET_ACTIVE_TAB",
          id: isOpen ? null : method.id
        })
      })
    }), /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
      className: `header-details ${showToggleIcon ? "toggle" : ""}`,
      onClick: () => {
        const target = window.event?.target;
        if (target?.closest(".editable-title, .editable-description, .inline-edit-icon, .mandatory-checkbox-field")) {
          return;
        }
        dispatch({
          type: "SET_ACTIVE_TAB",
          id: isOpen ? null : method.id
        });
      },
      children: /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
        className: "details-wrapper",
        children: [icon && /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
          className: "expandable-header-icon",
          ref: iconDropdown === method.id ? iconPicker : null,
          onClick: e => {
            if (!method.iconEnable) {
              return;
            }
            dispatch({
              type: "SET_ICON_DROPDOWN",
              id: iconDropdown === method.id ? null : method.id
            });
          },
          children: [/* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
            className: `adminfont-${icon} icon`
          }), method.iconEnable && iconDropdown !== method.id && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
            className: "adminfont-edit edit-icon"
          }), method.iconEnable && iconDropdown === method.id && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
            className: "icon-options-list",
            onClick: e => e.stopPropagation(),
            children: (method.iconOptions ?? addNewTemplate?.iconOptions ?? []).map(cls => /* @__PURE__ */(0, import_jsx_runtime18.jsx)("button", {
              type: "button",
              className: `icon-option ${icon === cls ? "selected" : ""}`,
              onClick: () => {
                handleChange(method.id, "icon", cls);
                dispatch({
                  type: "SET_ICON_DROPDOWN",
                  id: null
                });
              },
              title: cls,
              children: /* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
                className: `adminfont-${cls}`
              })
            }, cls))
          })]
        }), /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
          className: "expandable-header-info",
          children: [/* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
            className: "title-wrapper",
            children: [editing && editField === "title" && canEditField(method, "title", addNewTemplate) ? /* @__PURE__ */(0, import_jsx_runtime18.jsx)(BasicInputUI, {
              ref: titleRef,
              value: editTitle,
              onChange: value => dispatch({
                type: "UPDATE_EDIT_TITLE",
                title: value
              }),
              onKeyDown: e => e.key === "Enter" && commitEdit(),
              onClick: e => e.stopPropagation()
            }) : /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("span", {
              className: `title ${canEditField(method, "title", addNewTemplate) ? "editable-title" : ""}`,
              onClick: e => {
                if (canEditField(method, "title", addNewTemplate)) {
                  dispatch({
                    type: "START_EDIT",
                    id: method.id,
                    field: "title",
                    title: methodValue.title || method.label || ""
                  });
                }
              },
              title: canEditField(method, "title", addNewTemplate) ? "Click to edit" : void 0,
              children: [title, canEditField(method, "title", addNewTemplate) && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
                className: "adminfont-edit inline-edit-icon"
              })]
            }), method.disableBtn && !method.isCustom && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
              className: "panel-badges",
              children: /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
                className: `admin-badge ${isOn ? "green" : "red"}`,
                children: isOn ? "Active" : "Inactive"
              })
            }), (method.mandatory || showMandatoryBadge) && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
              className: "admin-badge red",
              children: "Mandatory"
            })]
          }), /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
            className: "panel-description",
            children: [editTitleShow && /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("b", {
              children: [" ", title, ": "]
            }), editing && editField === "description" && canEditField(method, "description", addNewTemplate) ? /* @__PURE__ */(0, import_jsx_runtime18.jsx)("textarea", {
              ref: descRef,
              className: "description-edit",
              value: editDesc,
              onChange: e => dispatch({
                type: "UPDATE_EDIT_DESC",
                desc: e.target.value
              }),
              onKeyDown: e => e.key === "Enter" && e.ctrlKey && commitEdit(),
              onClick: e => e.stopPropagation(),
              rows: 3
            }) : /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
              className: canEditField(method, "description", addNewTemplate) ? "editable-description" : void 0,
              onClick: e => {
                if (canEditField(method, "description", addNewTemplate)) {
                  dispatch({
                    type: "START_EDIT",
                    id: method.id,
                    field: "description",
                    desc: methodValue.description || method.desc || ""
                  });
                }
              },
              title: canEditField(method, "description", addNewTemplate) ? "Click to edit" : void 0,
              children: [/* @__PURE__ */(0, import_jsx_runtime18.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: desc
                }
              }), canEditField(method, "description", addNewTemplate) && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
                className: "adminfont-edit inline-edit-icon"
              })]
            })]
          })]
        })]
      })
    }), /* @__PURE__ */(0, import_jsx_runtime18.jsx)(PanelControls, {})]
  });
};
var PanelControls = () => {
  const {
    state,
    dispatch,
    handleChange,
    handleDelete,
    canDelete
  } = usePanel();
  const {
    method,
    isOn,
    isOpen,
    hasFields,
    price,
    cntFlds,
    idx
  } = usePanelItem();
  return /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
    className: "right-section",
    children: [price && /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("span", {
      className: "price-field",
      children: [price.price, price.unit && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("span", {
        className: "desc",
        children: price.unit
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("ul", {
      className: "settings-btn",
      children: [method.isCustom && !method.hideDeleteBtn && canDelete() && /* @__PURE__ */(0, import_jsx_runtime18.jsx)(ButtonInputUI, {
        buttons: [{
          icon: "delete",
          text: "Delete",
          color: "red",
          onClick: () => handleDelete(method.id)
        }]
      }), method.disableBtn && !method.isCustom && (isOn ? hasFields && /* @__PURE__ */(0, import_jsx_runtime18.jsx)(ButtonInputUI, {
        buttons: [{
          icon: "setting",
          text: "Settings",
          color: "purple",
          onClick: () => dispatch({
            type: "SET_ACTIVE_TAB",
            id: isOpen ? null : method.id
          })
        }]
      }) : /* @__PURE__ */(0, import_jsx_runtime18.jsx)("li", {
        onClick: () => handleChange(method.id, "enable", true),
        children: /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("span", {
          className: "admin-btn btn-purple-bg",
          children: [/* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
            className: "adminfont-eye"
          }), " Enable"]
        })
      })), method.isCustom && method.disableBtn && (isOn ? /* @__PURE__ */(0, import_jsx_runtime18.jsx)(ButtonInputUI, {
        buttons: [{
          icon: "eye-blocked",
          text: "Hide",
          color: "purple",
          onClick: () => handleChange(method.id, "enable", false)
        }]
      }) : /* @__PURE__ */(0, import_jsx_runtime18.jsx)("li", {
        onClick: () => handleChange(method.id, "enable", true),
        children: /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("span", {
          className: "admin-btn btn-purple-bg",
          children: [/* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
            className: "adminfont-eye"
          }), " Show"]
        })
      })), !method.disableBtn && method.countBtn && cntFlds.length > 0 && (() => {
        const completed = (state.progress[idx] || 0) === cntFlds.length;
        return /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
          className: `admin-badge ${completed ? "green" : "red"}`,
          children: [/* @__PURE__ */(0, import_jsx_runtime18.jsx)("i", {
            className: `adminfont-${completed ? "check" : "error"}`
          }), completed ? "Complete" : `${state.progress[idx] || 0} of ${cntFlds.length} done`]
        });
      })()]
    }), !method.isCustom && isOn && /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
      className: "icon-wrapper",
      children: /* @__PURE__ */(0, import_jsx_runtime18.jsx)(PopupUI, {
        position: "menu-dropdown",
        toggleIcon: "more-vertical",
        tooltipName: "Settings",
        children: /* @__PURE__ */(0, import_jsx_runtime18.jsx)(ItemListUI, {
          items: [...(method.disableBtn && hasFields ? [{
            id: "settings",
            title: "Settings",
            icon: "setting",
            action: (item, e) => {
              e?.stopPropagation();
              dispatch({
                type: "SET_ACTIVE_TAB",
                id: isOpen ? null : method.id
              });
              dispatch({
                type: "SET_OPEN_DROPDOWN",
                id: null
              });
            }
          }] : []), {
            id: "disable",
            title: "Disable",
            icon: "eye-blocked",
            className: "delete",
            action: (item, e) => {
              e?.stopPropagation();
              handleChange(method.id, "enable", false);
              dispatch({
                type: "SET_OPEN_DROPDOWN",
                id: null
              });
            }
          }]
        })
      })
    })]
  });
};
var PanelBody = () => {
  const {
    isWizardMode,
    renderField,
    shouldRender,
    handleChange,
    addNewTemplate
  } = usePanel();
  const {
    method,
    isOpen,
    isOn
  } = usePanelItem();
  const showMandatoryCheckboxGlobal = addNewTemplate?.showMandatoryCheckbox === true;
  const hasFields = Boolean(method.formFields?.length) || showMandatoryCheckboxGlobal;
  const showMandatoryCheckbox = addNewTemplate?.showMandatoryCheckbox === true;
  if (!hasFields && !showMandatoryCheckbox) {
    return null;
  }
  if (!(isOpen && (isOn || method.isCustom || method.openForm || showMandatoryCheckboxGlobal))) {
    return null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime18.jsx)("div", {
    className: `${method.wrapperClass ?? ""} expandable-panel open`.trim(),
    children: /* @__PURE__ */(0, import_jsx_runtime18.jsxs)(FormGroupWrapper_default, {
      children: [showMandatoryCheckbox && /* @__PURE__ */(0, import_jsx_runtime18.jsx)(FormGroup_default, {
        row: true,
        label: "Mandatory",
        desc: "Mark this item as mandatory",
        children: /* @__PURE__ */(0, import_jsx_runtime18.jsx)("input", {
          type: "checkbox",
          checked: method.mandatory || false,
          onChange: e => {
            const isChecked = e.target.checked;
            handleChange(method.id, "mandatory", isChecked);
          },
          onClick: e => e.stopPropagation()
        })
      }), method.formFields?.map(field => {
        if (isWizardMode && field.key === "wizardButtons") {
          return null;
        }
        const shouldShowField = Array.isArray(field.dependent) ? field.dependent.every(dep => shouldRender(dep, method.id)) : field.dependent ? shouldRender(field.dependent, method.id) : true;
        if (!shouldShowField) {
          return null;
        }
        return /* @__PURE__ */(0, import_jsx_runtime18.jsxs)(FormGroup_default, {
          row: true,
          label: field.type !== "notice" ? field.label : void 0,
          desc: field.desc,
          labelDes: field.settingDescription,
          htmlFor: field.name,
          children: [field.beforeElement && renderField(method.id, field.beforeElement), renderField(method.id, field)]
        }, field.key);
      })]
    })
  });
};
var PanelItem = ({
  method,
  idx
}) => {
  const {
    state,
    value,
    addNewTemplate
  } = usePanel();
  const itemRef = (0, import_react13.useRef)(null);
  const methodValue = value[method.id] ?? {};
  const showMandatoryCheckboxGlobal = addNewTemplate?.showMandatoryCheckbox === true;
  const isOn = method.isCustom ? methodValue.enable !== false : Boolean(methodValue.enable);
  const isOpen = state.activeTab === method.id;
  const hasFields = Boolean(method.formFields?.length) || showMandatoryCheckboxGlobal;
  const icon = methodValue.icon || method.icon;
  const price = formatPrice(methodValue);
  const title = methodValue.title || method.label;
  const desc = methodValue.description || method.desc;
  const cntFlds = method.formFields?.filter(isCountableField) ?? [];
  const hasMandatoryFields = method.formFields?.some(field => field.mandatory === true) ?? false;
  const showMandatoryBadge = method.mandatory || hasMandatoryFields;
  (0, import_react13.useEffect)(() => {
    if (isOpen && itemRef.current) {
      const top = itemRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 20,
        behavior: "smooth"
      });
    }
  }, [isOpen]);
  const itemContextValue = {
    method,
    methodValue,
    idx,
    isOn,
    isOpen,
    hasFields,
    icon,
    title,
    desc,
    price,
    cntFlds,
    showMandatoryBadge
  };
  return /* @__PURE__ */(0, import_jsx_runtime18.jsx)(PanelItemContext.Provider, {
    value: itemContextValue,
    children: /* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
      ref: itemRef,
      className: ["expandable-item", method.disableBtn && !isOn ? "disable" : "", method.openForm ? "open" : ""].filter(Boolean).join(" "),
      children: [/* @__PURE__ */(0, import_jsx_runtime18.jsx)(PanelHeader, {}), /* @__PURE__ */(0, import_jsx_runtime18.jsx)(PanelBody, {})]
    })
  });
};
var ExpandablePanelUI = ({
  methods: initialMethods,
  value,
  onChange,
  apilink,
  isWizardMode = false,
  canAccess,
  addNewBtn,
  addNewTemplate,
  min,
  onBlocked,
  editTitleShow
}) => {
  const tplFields = addNewTemplate?.formFields ?? [];
  const [state, dispatch] = (0, import_react13.useReducer)(panelReducer, {
    methods: initialMethods.map(m => m.isCustom ? mergeTemplateFields(m, tplFields) : m),
    activeTab: (() => {
      const firstOpenMethod = initialMethods.find(m => m.openForm === true);
      return firstOpenMethod ? firstOpenMethod.id : null;
    })(),
    wizardIndex: 0,
    progress: [],
    openDropdown: null,
    iconDropdown: null,
    editId: null,
    editField: null,
    editTitle: "",
    editDesc: ""
  });
  const titleRef = (0, import_react13.useRef)(null);
  const descRef = (0, import_react13.useRef)(null);
  const iconPicker = (0, import_react13.useRef)(null);
  const handleChange = (0, import_react13.useCallback)((methodId, key, val) => {
    if (key === "wizardButtons") {
      return;
    }
    onChange({
      ...value,
      [methodId]: {
        ...(value[methodId] ?? {}),
        [key]: val
      }
    });
  }, [onChange, value]);
  const commitEdit = (0, import_react13.useCallback)(() => {
    if (state.editId && state.editField === "title" && state.editTitle.trim()) {
      handleChange(state.editId, "title", state.editTitle.trim());
    }
    if (state.editId && state.editField === "description") {
      handleChange(state.editId, "description", state.editDesc);
    }
    dispatch({
      type: "COMMIT_EDIT"
    });
  }, [state.editId, state.editField, state.editTitle, state.editDesc, handleChange]);
  const canDelete = (0, import_react13.useCallback)(() => min === void 0 || state.methods.filter(m => m.isCustom).length > min, [min, state.methods]);
  const handleAddNew = (0, import_react13.useCallback)(() => {
    if (!canAccess || !addNewTemplate) {
      return;
    }
    const id = (addNewTemplate.label ?? "item").trim().toLowerCase().replace(/\s+/g, "_") + Math.floor(Math.random() * 1e4);
    const newMethod = {
      id,
      icon: addNewTemplate.icon ?? "",
      label: addNewTemplate.label ?? "New Item",
      desc: addNewTemplate.desc ?? "",
      iconEnable: addNewTemplate.iconEnable ?? false,
      iconOptions: addNewTemplate.iconOptions ?? [],
      connected: false,
      isCustom: true,
      disableBtn: addNewTemplate.disableBtn ?? false,
      formFields: addNewTemplate.formFields?.map(f => ({
        ...f
      })) ?? []
    };
    const mergedMethod = mergeTemplateFields(newMethod, tplFields);
    dispatch({
      type: "ADD_METHOD",
      method: mergedMethod
    });
    const init = {
      isCustom: true,
      title: newMethod.label,
      description: newMethod.desc,
      label: newMethod.label,
      desc: newMethod.desc
    };
    if (addNewTemplate.icon) {
      init.icon = addNewTemplate.icon;
    }
    newMethod.formFields?.forEach(f => {
      init[f.key] = "";
    });
    onChange({
      ...value,
      [id]: init
    });
  }, [canAccess, addNewTemplate, tplFields, onChange, value]);
  const handleDelete = (0, import_react13.useCallback)(methodId => {
    if (!canDelete()) {
      return;
    }
    dispatch({
      type: "DELETE_METHOD",
      id: methodId
    });
    const next = {
      ...value
    };
    delete next[methodId];
    onChange(next);
  }, [canDelete, onChange, value]);
  const saveWizard = (0, import_react13.useCallback)(() => {
    if (!apilink || !ZyraVariable?.nonce) {
      return;
    }
    (0, import_axios4.default)({
      url: getApiLink(ZyraVariable, apilink),
      method: "POST",
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      },
      data: {
        setupWizard: true,
        value
      }
    }).catch(console.error);
  }, [apilink, value]);
  const isContain = (key, methodId, valuee = null) => {
    const settingValue = value[methodId]?.[key];
    if (Array.isArray(settingValue)) {
      if (valuee === null) {
        return settingValue.length > 0;
      }
      return settingValue.includes(valuee);
    }
    if (valuee === null) {
      return Boolean(settingValue);
    }
    return settingValue === valuee;
  };
  const shouldRender = (dependent, methodId) => {
    if (dependent.set === true && !isContain(dependent.key, methodId)) {
      return false;
    }
    if (dependent.set === false && isContain(dependent.key, methodId)) {
      return false;
    }
    if (dependent.value !== void 0 && !isContain(dependent.key, methodId, dependent.value)) {
      return false;
    }
    return true;
  };
  const navigateWizard = (0, import_react13.useCallback)((direction, redirect) => {
    const {
      wizardIndex,
      methods
    } = state;
    const lastIndex = methods.length - 1;
    if (direction === "back") {
      if (wizardIndex === 0) {
        return;
      }
      const newIndex = wizardIndex - 1;
      const method = methods[newIndex];
      dispatch({
        type: "SET_WIZARD_INDEX",
        index: newIndex
      });
      dispatch({
        type: "SET_ACTIVE_TAB",
        id: method.id
      });
      return;
    }
    saveWizard();
    if (wizardIndex < lastIndex) {
      const newIndex = wizardIndex + 1;
      const method = methods[newIndex];
      dispatch({
        type: "SET_WIZARD_INDEX",
        index: newIndex
      });
      dispatch({
        type: "SET_ACTIVE_TAB",
        id: method.id
      });
      return;
    }
    if (redirect) {
      window.open(redirect, "_self");
    }
  }, [state.wizardIndex, state.methods, saveWizard]);
  const renderField = (0, import_react13.useCallback)((methodId, field) => {
    const comp = FIELD_REGISTRY[field.type];
    if (!comp) {
      return null;
    }
    const Render = comp.render;
    const fieldVal = value[methodId]?.[field.key];
    const onChangeF = val => handleChange(methodId, field.key, val);
    if (field.type === "button" && isWizardMode && Array.isArray(field.options)) {
      const buttonActions = {
        back: btn => ({
          ...btn,
          text: btn.label,
          color: "red",
          onClick: () => navigateWizard("back")
        }),
        next: btn => ({
          ...btn,
          text: btn.label,
          color: "purple",
          onClick: () => navigateWizard("next", btn.redirect)
        }),
        skip: btn => ({
          ...btn,
          text: btn.label,
          color: "blue",
          onClick: () => window.open(ZyraVariable?.site_url, "_self")
        })
      };
      const buttonOptions = field.options.map(btn => {
        const actionHandler = buttonActions[btn.action];
        return actionHandler ? actionHandler(btn) : btn;
      });
      return /* @__PURE__ */(0, import_jsx_runtime18.jsx)(Render, {
        field: {
          ...field,
          options: buttonOptions
        },
        value: fieldVal,
        onChange: onChangeF,
        canAccess,
        onBlocked
      });
    }
    return /* @__PURE__ */(0, import_jsx_runtime18.jsx)(Render, {
      field,
      value: fieldVal,
      onChange: onChangeF,
      canAccess
    });
  }, [value, handleChange, isWizardMode, state.wizardIndex, state.methods, canAccess, saveWizard]);
  (0, import_react13.useEffect)(() => {
    if (state.editField === "title") {
      titleRef.current?.focus();
      titleRef.current?.select();
    }
    if (state.editField === "description") {
      descRef.current?.focus();
      descRef.current?.select();
    }
  }, [state.editId, state.editField]);
  (0, import_react13.useEffect)(() => {
    if (!state.editId) {
      return;
    }
    const handler = e => {
      if (e.key === "Escape") {
        dispatch({
          type: "CANCEL_EDIT"
        });
        return;
      }
      if (e.key === "Enter" && (state.editField === "title" || e.ctrlKey)) {
        commitEdit();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [state.editId, state.editField, commitEdit]);
  (0, import_react13.useEffect)(() => {
    if (!state.editId) {
      return;
    }
    const handler = e => {
      const t = e.target;
      if (!titleRef.current?.contains(t) && !descRef.current?.contains(t)) {
        commitEdit();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [state.editId, commitEdit]);
  (0, import_react13.useEffect)(() => {
    if (!state.openDropdown) {
      return;
    }
    const close = () => dispatch({
      type: "SET_OPEN_DROPDOWN",
      id: null
    });
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [state.openDropdown]);
  (0, import_react13.useEffect)(() => {
    if (!state.iconDropdown) {
      return;
    }
    const onMouse = e => {
      if (iconPicker.current && !iconPicker.current.contains(e.target)) {
        dispatch({
          type: "SET_ICON_DROPDOWN",
          id: null
        });
      }
    };
    const onKey = e => {
      if (e.key === "Escape") {
        dispatch({
          type: "SET_ICON_DROPDOWN",
          id: null
        });
      }
    };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, [state.iconDropdown]);
  (0, import_react13.useEffect)(() => {
    if (!isWizardMode) {
      return;
    }
    const newProgress = state.methods.map(m => {
      const methodValue = value[m.id] ?? {};
      return (m.formFields?.filter(isCountableField) ?? []).filter(f => isFilled(methodValue[f.key])).length;
    });
    dispatch({
      type: "SET_PROGRESS",
      progress: newProgress
    });
  }, [value, state.methods, isWizardMode]);
  (0, import_react13.useEffect)(() => {
    const methodsFromValue = new Map(Object.entries(value).map(([id, m]) => [id, {
      id,
      ...m
    }]));
    const updatedMethods = (() => {
      const methodMap = new Map(state.methods.map(m => [m.id, m]));
      methodsFromValue.forEach((persistedMethod, id) => {
        const existingMethod = methodMap.get(id);
        methodMap.set(id, {
          ...existingMethod,
          ...persistedMethod,
          disableBtn: persistedMethod.disableBtn ?? existingMethod?.disableBtn ?? (persistedMethod.isCustom ? addNewTemplate?.disableBtn ?? false : false),
          iconEnable: persistedMethod.iconEnable ?? existingMethod?.iconEnable ?? (persistedMethod.isCustom ? addNewTemplate?.iconEnable : false),
          iconOptions: persistedMethod.iconOptions ?? existingMethod?.iconOptions ?? (persistedMethod.isCustom ? addNewTemplate?.iconOptions : [])
        });
      });
      return Array.from(methodMap.values()).map(m => m.isCustom ? mergeTemplateFields(m, tplFields) : m);
    })();
    if (JSON.stringify(updatedMethods) !== JSON.stringify(state.methods)) {
      dispatch({
        type: "SET_METHODS",
        methods: updatedMethods
      });
    }
  }, [value, addNewTemplate, tplFields]);
  const contextValue = {
    state,
    dispatch,
    value,
    isWizardMode,
    canAccess,
    addNewTemplate,
    tplFields,
    titleRef,
    descRef,
    iconPicker,
    handleChange,
    handleDelete,
    canDelete,
    renderField,
    commitEdit,
    shouldRender,
    editTitleShow: editTitleShow ?? false
  };
  const visible = isWizardMode ? state.methods.slice(0, state.wizardIndex + 1) : state.methods;
  return /* @__PURE__ */(0, import_jsx_runtime18.jsxs)(PanelContext.Provider, {
    value: contextValue,
    children: [/* @__PURE__ */(0, import_jsx_runtime18.jsxs)("div", {
      className: "expandable-panel-group",
      children: [visible.map((method, idx) => /* @__PURE__ */(0, import_jsx_runtime18.jsx)(PanelItem, {
        method,
        idx
      }, method.id)), addNewBtn && /* @__PURE__ */(0, import_jsx_runtime18.jsx)(ButtonInputUI, {
        buttons: [{
          icon: "plus",
          text: "Add New",
          color: "purple",
          onClick: handleAddNew
        }]
      })]
    }), isWizardMode && (() => {
      const step = state.methods[state.wizardIndex];
      const btn = step?.formFields?.find(f => f.key === "wizardButtons");
      return btn ? renderField(step.id, btn) : null;
    })()]
  });
};
var ExpandablePanel = {
  render: ({
    field,
    value,
    onChange,
    canAccess
  }) => /* @__PURE__ */(0, import_jsx_runtime18.jsx)(ExpandablePanelUI, {
    name: field.key,
    apilink: String(field.apiLink),
    methods: field.modal ?? [],
    addNewBtn: field.addNewBtn,
    addNewTemplate: field.addNewTemplate,
    min: field.min,
    value: value || {},
    onChange: val => {
      if (!canAccess) {
        return;
      }
      onChange(val);
    },
    canAccess
  }, field.key),
  validate: () => null
};
var ExpandablePanel_default = ExpandablePanel;

// src/components/FileInput.tsx
var import_react14 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime19 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var getFileName = url => {
  if (!url) {
    return "File";
  }
  return url.split("/").pop()?.split("?")[0] || "File";
};
var isImageFile = url => (url.includes("#") ? url.split("#")[1] : url).match(/\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i) !== null;
var FileInputUI = props => {
  const inputRef = (0, import_react14.useRef)(null);
  const [files, setFiles] = (0, import_react14.useState)([]);
  const [activeIndex, setActiveIndex] = (0, import_react14.useState)(0);
  const [isReplacing, setIsReplacing] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    const src = props.imageSrc;
    if (!src || Array.isArray(src) && src.length === 0) {
      setFiles([]);
      return;
    }
    const normalized = (Array.isArray(src) ? src : [src]).filter(Boolean).map(item => typeof item === "string" ? {
      url: item
    } : item);
    setFiles(normalized);
    setActiveIndex(0);
  }, [props.imageSrc]);
  const updateFile = fileList => {
    setFiles(fileList);
    props.onChange?.(props.multiple ? fileList : fileList[0] || "");
  };
  const handleFileChange = e => {
    const fileList = e.target.files;
    if (!fileList?.length) {
      return;
    }
    const urls = Array.from(fileList).map(f => ({
      url: `${URL.createObjectURL(f)}#${f.name}`
    }));
    let result;
    if (isReplacing) {
      result = [...files];
      if (result[activeIndex]?.startsWith("blob:")) {
        URL.revokeObjectURL(result[activeIndex].split("#")[0]);
      }
      result[activeIndex] = urls[0];
      setIsReplacing(false);
    } else {
      result = props.multiple ? [...files, ...urls] : [urls[0]];
      setActiveIndex(result.length - 1);
    }
    updateFile(result);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const handleUpload = () => {
    if (!wp?.media) {
      return inputRef.current?.click();
    }
    const frame = wp.media({
      title: "Select or Upload File",
      button: {
        text: "Use this file"
      },
      multiple: props.multiple && !isReplacing
    });
    frame.on("select", () => {
      const selected = frame.state().get("selection").toJSON().map(a => ({
        id: a.id,
        url: a.url
      }));
      let result;
      if (isReplacing) {
        result = [...files];
        result[activeIndex] = selected[0];
        setIsReplacing(false);
      } else {
        result = props.multiple ? [...files, ...selected] : [selected[0]];
      }
      updateFile(result);
    });
    frame.open();
  };
  const handleRemove = index => {
    const file = files[index];
    const url = file?.url;
    if (url?.startsWith("blob:")) {
      URL.revokeObjectURL(url.split("#")[0]);
    }
    const result = files.filter((_, i) => i !== index);
    updateFile(result);
    if (activeIndex >= result.length) {
      setActiveIndex(Math.max(0, result.length - 1));
    }
  };
  const currentFile = files[activeIndex]?.url;
  const isCurrentImage = currentFile && isImageFile(currentFile);
  const currentSrc = currentFile;
  return /* @__PURE__ */(0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime19.jsx)("div", {
      className: `file-uploader ${props.wrapperClass || ""} ${props.size || ""}`.trim(),
      style: {
        backgroundImage: isCurrentImage ? `url(${currentSrc})` : "none"
      },
      children: files.length === 0 ? /* @__PURE__ */(0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime19.jsx)("i", {
          className: "upload-icon adminfont-cloud-upload"
        }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)("input", {
          ref: inputRef,
          className: props.inputClass,
          id: props.id,
          type: "hidden",
          name: props.name || "file-input",
          placeholder: props.placeholder,
          accept: props.accept,
          onChange: handleFileChange,
          onClick: props.onClick,
          onMouseOver: props.onMouseOver,
          onMouseOut: props.onMouseOut,
          onFocus: props.onFocus,
          onBlur: props.onBlur,
          multiple: props.multiple
        }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)("span", {
          className: "title",
          children: "Drag and drop your file here"
        }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)("span", {
          children: "Or"
        }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)(ButtonInputUI, {
          buttons: [{
            text: props.openUploader || "Upload File",
            color: "purple",
            onClick: handleUpload
          }]
        })]
      }) : /* @__PURE__ */(0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, {
        children: [!isCurrentImage && /* @__PURE__ */(0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, {
          children: [/* @__PURE__ */(0, import_jsx_runtime19.jsx)("i", {
            className: `upload-icon adminfont-attachment`
          }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)("span", {
            className: "title",
            children: getFileName(currentFile)
          })]
        }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)("div", {
          className: "overlay",
          children: /* @__PURE__ */(0, import_jsx_runtime19.jsxs)("div", {
            className: "button-wrapper",
            children: [/* @__PURE__ */(0, import_jsx_runtime19.jsx)(ButtonInputUI, {
              buttons: [{
                text: "Remove",
                color: "red",
                onClick: () => handleRemove(activeIndex)
              }]
            }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)(ButtonInputUI, {
              buttons: [{
                text: "Replace",
                color: "purple",
                onClick: () => {
                  setIsReplacing(true);
                  handleUpload();
                }
              }]
            })]
          })
        })]
      })
    }), props.multiple && files.length > 0 && /* @__PURE__ */(0, import_jsx_runtime19.jsx)("div", {
      className: "uploaded-image",
      children: files.map((file, i) => {
        const fileSrc = file.url;
        const isActive = i === activeIndex;
        return /* @__PURE__ */(0, import_jsx_runtime19.jsxs)("div", {
          className: `image ${isActive ? "active" : ""}`,
          onClick: () => setActiveIndex(i),
          children: [isImageFile(file.url) ? /* @__PURE__ */(0, import_jsx_runtime19.jsx)("img", {
            src: fileSrc,
            alt: `preview-${i}`,
            width: props.imageWidth || 80,
            height: props.imageHeight || 80
          }) : /* @__PURE__ */(0, import_jsx_runtime19.jsxs)("div", {
            children: [/* @__PURE__ */(0, import_jsx_runtime19.jsx)("i", {
              className: `adminfont-attachment`
            }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)("span", {
              children: getFileName(file.url).substring(0, 12)
            })]
          }), /* @__PURE__ */(0, import_jsx_runtime19.jsx)("i", {
            className: "adminfont-close close-btn",
            onClick: e => {
              e.stopPropagation();
              handleRemove(i);
            }
          })]
        }, i);
      })
    })]
  });
};
var FileInput = {
  render: ({
    field,
    value,
    onChange,
    canAccess,
    appLocalizer
  }) => /* @__PURE__ */(0, import_jsx_runtime19.jsx)(FileInputUI, {
    inputClass: field.class,
    imageSrc: value || "",
    imageWidth: field.width,
    imageHeight: field.height,
    openUploader: appLocalizer?.open_uploader,
    name: field.name,
    accept: field.accept,
    multiple: field.multiple,
    size: field.size,
    onChange: val => canAccess && onChange(val)
  }),
  validate: () => null
};
var FileInput_default = FileInput;

// src/components/BlockBuilder.tsx
var import_react21 = __toESM(__webpack_require__(/*! react */ "react"));

// src/components/CanvasEditor/CanvasEditor.tsx
var import_react20 = __toESM(__webpack_require__(/*! react */ "react"));
var import_react_sortablejs4 = __webpack_require__(/*! react-sortablejs */ "../../../node_modules/.pnpm/react-sortablejs@6.1.4_@types+sortablejs@1.15.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_sortablejs@1.15.7/node_modules/react-sortablejs/dist/index.js");

// src/components/CanvasEditor/BlockRenderer.tsx
var import_jsx_runtime20 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var idCounter = Date.now();
var generateId = () => ++idCounter;
var createBlockID = (type, options) => {
  const id = generateId();
  const {
    fixedName,
    placeholder,
    label,
    context,
    options: presetOptions
  } = options || {};
  const block = {
    id,
    type,
    name: fixedName && fixedName.trim() !== "" ? fixedName : `${type}_${id}`,
    label,
    placeholder,
    context,
    options: presetOptions
  };
  if (type === "columns") {
    block.layout = "2-50";
    block.columns = [[], []];
  }
  return block;
};
var createBlock = (item, context, existingBlocks = []) => {
  const getUniqueName = name => {
    if (!name) {
      return name;
    }
    const matchingBlocks = existingBlocks.filter(block => block.fixedName?.startsWith(name));
    return matchingBlocks.length > 0 ? `${name} ${matchingBlocks.length + 1}` : name;
  };
  const uniqueFixedName = getUniqueName(item.fixedName);
  if (item?.id && item?.type) {
    if (item.type === "columns" && !Array.isArray(item.columns)) {
      return {
        ...item,
        fixedName: uniqueFixedName,
        layout: item.layout ?? "2-50",
        columns: [[], []]
      };
    }
    return {
      ...item,
      fixedName: uniqueFixedName
    };
  }
  if (item?.value) {
    return {
      ...createBlockID(item.value, {
        fixedName: uniqueFixedName,
        placeholder: item.placeholder,
        label: item.label,
        options: item.options,
        context
      }),
      ...item,
      fixedName: uniqueFixedName
    };
  }
  return createBlockID("text", {
    label: "Text",
    fixedName: uniqueFixedName ?? "Text",
    context
  });
};
var renderBlockContent = (block, onChange) => {
  if (!block?.type) {
    return /* @__PURE__ */(0, import_jsx_runtime20.jsx)("div", {
      children: "Invalid block"
    });
  }
  if (block?.type == "radio") {
    return /* @__PURE__ */(0, import_jsx_runtime20.jsx)("div", {
      className: "radio-group",
      children: block.options?.map((opt, i) => /* @__PURE__ */(0, import_jsx_runtime20.jsxs)("label", {
        className: "radio-option",
        children: [/* @__PURE__ */(0, import_jsx_runtime20.jsx)("input", {
          type: "radio",
          name: block.name || `radio-${block.id}`,
          value: opt.value,
          checked: block.value === opt.value,
          onChange: () => onChange({
            id: block.id,
            value: opt.value
          })
        }), opt.label]
      }, i))
    });
  }
  const Component = FIELD_REGISTRY[block.type]?.render;
  if (!Component) {
    return /* @__PURE__ */(0, import_jsx_runtime20.jsxs)("div", {
      children: ["Unknown type: ", block.type]
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime20.jsx)(Component, {
    field: {
      ...block,
      name: block.name || `${block.type}-${block.id}`
    },
    onChange
  });
};
var BlockRenderer = ({
  block,
  onChange,
  onSelect,
  onDelete,
  isActive,
  showMeta = true,
  isColumnChild
}) => /* @__PURE__ */(0, import_jsx_runtime20.jsxs)("div", {
  className: `form-field ${isActive ? "active" : ""} ${isColumnChild ? "column-child" : ""}`,
  onClick: onSelect,
  children: [showMeta && /* @__PURE__ */(0, import_jsx_runtime20.jsxs)("section", {
    className: "meta-menu",
    children: [/* @__PURE__ */(0, import_jsx_runtime20.jsx)("span", {
      className: "drag-handle admin-badge blue",
      children: /* @__PURE__ */(0, import_jsx_runtime20.jsx)("i", {
        className: "adminfont-drag"
      })
    }), onDelete && /* @__PURE__ */(0, import_jsx_runtime20.jsx)("span", {
      className: "admin-badge red",
      onClick: e => {
        e.stopPropagation();
        onDelete(e);
      },
      children: /* @__PURE__ */(0, import_jsx_runtime20.jsx)("i", {
        className: "adminfont-delete"
      })
    })]
  }), /* @__PURE__ */(0, import_jsx_runtime20.jsxs)("section", {
    className: "form-field-container-wrapper",
    children: [block.label && block.type !== "title" && block.type !== "button" && /* @__PURE__ */(0, import_jsx_runtime20.jsx)("label", {
      className: "settings-form-label",
      children: /* @__PURE__ */(0, import_jsx_runtime20.jsx)("div", {
        className: "title",
        children: block.label
      })
    }), renderBlockContent(block, onChange)]
  })]
});
var BlockRenderer_default = BlockRenderer;

// src/components/CanvasEditor/ColumnRenderer.tsx
var import_react15 = __webpack_require__(/*! react */ "react");
var import_react_sortablejs2 = __webpack_require__(/*! react-sortablejs */ "../../../node_modules/.pnpm/react-sortablejs@6.1.4_@types+sortablejs@1.15.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_sortablejs@1.15.7/node_modules/react-sortablejs/dist/index.js");

// src/components/CanvasEditor/blockTypes.ts
var getColumnCount = layout => {
  switch (layout) {
    case "1":
      return 1;
    case "2-50":
    case "2-66":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    default:
      return 2;
  }
};

// src/components/CanvasEditor/ColumnRenderer.tsx
var import_jsx_runtime21 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var safeColumns = block => {
  if (Array.isArray(block.columns) && block.columns.length > 0) {
    return block.columns.map(col => Array.isArray(col) ? [...col] : []);
  }
  return [[], []];
};
var useColumnManager = ({
  blocks,
  onBlocksUpdate,
  openBlock,
  setOpenBlock
}) => {
  const [selectedLocation, setSelectedLocation] = (0, import_react15.useState)(null);
  const replaceParent = (0, import_react15.useCallback)((index, updated) => {
    const next = [...blocks];
    next[index] = updated;
    onBlocksUpdate(next);
  }, [blocks, onBlocksUpdate]);
  const handleChildUpdate = (0, import_react15.useCallback)((parentIdx, colIdx, childIdx, patch) => {
    const parent = blocks[parentIdx];
    if (parent?.type !== "columns") {
      return;
    }
    const columns = safeColumns(parent).map((col, ci) => ci !== colIdx ? col : col.map((child, ri) => ri === childIdx ? {
      ...child,
      ...patch
    } : child));
    replaceParent(parentIdx, {
      ...parent,
      columns
    });
    const updated = columns[colIdx][childIdx];
    if (openBlock?.id === updated?.id) {
      setOpenBlock(updated);
    }
  }, [blocks, openBlock?.id, replaceParent, setOpenBlock]);
  const handleLayoutChange = (0, import_react15.useCallback)((parentIdx, newLayout) => {
    const parent = blocks[parentIdx];
    if (parent?.type !== "columns") {
      return;
    }
    const currentCount = getColumnCount(parent.layout || "2-50");
    const nextCount = getColumnCount(newLayout);
    let columns = safeColumns(parent);
    if (nextCount > currentCount) {
      for (let i = currentCount; i < nextCount; i++) {
        columns.push([]);
      }
    } else if (nextCount < currentCount) {
      const overflow = columns.slice(nextCount).flat();
      columns = [...columns.slice(0, nextCount)];
      columns[nextCount - 1] = [...columns[nextCount - 1], ...overflow];
    }
    const updated = {
      ...parent,
      layout: newLayout,
      columns
    };
    replaceParent(parentIdx, updated);
    if (openBlock?.id === parent.id) {
      setOpenBlock(updated);
    }
  }, [blocks, openBlock?.id, replaceParent, setOpenBlock]);
  const clearSelection = (0, import_react15.useCallback)(() => setSelectedLocation(null), []);
  return {
    selectedLocation,
    setSelectedLocation,
    handleChildUpdate,
    handleLayoutChange,
    clearSelection
  };
};
var ColumnRenderer = ({
  block,
  parentIndex,
  isActive,
  groupName,
  openBlock,
  setOpenBlock,
  onColumnSetList,
  onChildSelect,
  selectedLocation,
  onChildMutate,
  onSelect,
  onDelete,
  showMeta = true
}) => {
  const mutate = (0, import_react15.useCallback)(fn => {
    onChildMutate({
      ...block,
      columns: fn(safeColumns(block))
    });
  }, [block, onChildMutate]);
  const handleChildUpdate = (0, import_react15.useCallback)((colIdx, childIdx, patch) => {
    let updatedChild;
    mutate(cols => cols.map((col, ci) => {
      if (ci !== colIdx) {
        return col;
      }
      return col.map((child, ri) => {
        if (ri !== childIdx) {
          return child;
        }
        updatedChild = {
          ...child,
          ...patch
        };
        return updatedChild;
      });
    }));
    if (updatedChild && openBlock?.id === updatedChild.id) {
      setOpenBlock(updatedChild);
    }
  }, [mutate, openBlock?.id, setOpenBlock]);
  const handleChildDelete = (0, import_react15.useCallback)((colIdx, childIdx) => {
    const deleted2 = safeColumns(block)[colIdx]?.[childIdx];
    mutate(cols => cols.map((col, ci) => ci === colIdx ? col.filter((_, ri) => ri !== childIdx) : col));
    if (deleted2 && openBlock?.id === deleted2.id) {
      setOpenBlock(null);
    }
  }, [block, mutate, openBlock?.id, setOpenBlock]);
  const handleChildSelect = (child, colIdx, childIdx) => {
    onChildSelect({
      parentIndex,
      columnIndex: colIdx,
      childIndex: childIdx
    }, child);
  };
  const columns = safeColumns(block);
  const layout = block.layout || "2-50";
  const styles = generateBlockStyles(block.style, {
    includeText: true
  });
  const enhancedStyles = {
    ...styles,
    display: "flex",
    flexDirection: "column",
    width: "100%"
  };
  return /* @__PURE__ */(0, import_jsx_runtime21.jsxs)("div", {
    className: `form-field ${isActive ? "active" : ""}`,
    onClick: onSelect,
    children: [showMeta && /* @__PURE__ */(0, import_jsx_runtime21.jsxs)("section", {
      className: "meta-menu",
      children: [/* @__PURE__ */(0, import_jsx_runtime21.jsx)("span", {
        className: "drag-handle admin-badge blue",
        children: /* @__PURE__ */(0, import_jsx_runtime21.jsx)("i", {
          className: "adminfont-drag"
        })
      }), /* @__PURE__ */(0, import_jsx_runtime21.jsx)("span", {
        className: "admin-badge red",
        onClick: e => {
          e.stopPropagation();
          onDelete();
        },
        children: /* @__PURE__ */(0, import_jsx_runtime21.jsx)("i", {
          className: "adminfont-delete"
        })
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime21.jsx)("section", {
      className: "form-field-container-wrapper",
      children: /* @__PURE__ */(0, import_jsx_runtime21.jsx)("div", {
        className: `email-columns layout-${layout}`,
        style: {
          display: "flex",
          width: "100%",
          justifyContent: block.style?.justifyContent || "flex-start",
          alignItems: block.style?.alignItems || "stretch",
          gap: block.style?.gap ? `${block.style.gap}rem` : "1rem"
        },
        children: columns.map((column, colIdx) => /* @__PURE__ */(0, import_jsx_runtime21.jsx)("div", {
          className: "email-column-wrapper",
          style: enhancedStyles,
          children: /* @__PURE__ */(0, import_jsx_runtime21.jsx)(import_react_sortablejs2.ReactSortable, {
            list: column,
            setList: list => onColumnSetList(parentIndex, colIdx, list),
            group: {
              name: groupName,
              pull: true,
              put: true
            },
            className: "email-column",
            animation: 150,
            handle: ".drag-handle",
            emptyInsertThreshold: 20,
            children: column.length === 0 ? /* @__PURE__ */(0, import_jsx_runtime21.jsx)("div", {
              className: "column-drop-zone",
              children: /* @__PURE__ */(0, import_jsx_runtime21.jsx)("i", {
                className: "adminfont-plus"
              })
            }) : column.map((child, childIdx) => /* @__PURE__ */(0, import_jsx_runtime21.jsx)(BlockRenderer_default, {
              block: child,
              isColumnChild: true,
              isActive: selectedLocation?.parentIndex === parentIndex && selectedLocation?.columnIndex === colIdx && selectedLocation?.childIndex === childIdx,
              onSelect: e => {
                e?.stopPropagation?.();
                handleChildSelect(child, colIdx, childIdx);
              },
              onChange: patch => handleChildUpdate(colIdx, childIdx, patch),
              onDelete: () => handleChildDelete(colIdx, childIdx)
            }, child.id))
          })
        }, colIdx))
      })
    })]
  });
};

// src/components/SettingMetaBox.tsx
var import_react18 = __webpack_require__(/*! react */ "react");
var import_react_sortablejs3 = __webpack_require__(/*! react-sortablejs */ "../../../node_modules/.pnpm/react-sortablejs@6.1.4_@types+sortablejs@1.15.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_sortablejs@1.15.7/node_modules/react-sortablejs/dist/index.js");

// src/components/UI/Card.tsx
var import_react16 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime22 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var Card = ({
  title,
  desc,
  className,
  id,
  iconName,
  onIconClick,
  action,
  transparent = false,
  contentWidth = false,
  toggle = false,
  defaultExpanded = true,
  // Default to true for backward compatibility
  badges = [],
  children,
  isLoading
}) => {
  const [bodyVisible, setBodyVisible] = (0, import_react16.useState)(defaultExpanded);
  (0, import_react16.useEffect)(() => {
    setBodyVisible(defaultExpanded);
  }, [defaultExpanded]);
  const getToggleIcon = () => {
    if (iconName) {
      return iconName;
    }
    return bodyVisible ? "pagination-right-arrow" : "keyboard-arrow-down";
  };
  return /* @__PURE__ */(0, import_jsx_runtime22.jsx)("div", {
    ...(id ? {
      id
    } : {}),
    className: `card-content ${transparent ? "transparent" : ""} ${contentWidth ? "content-width" : ""} ${className ? className : ""}`,
    children: isLoading ? /* @__PURE__ */(0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, {
      children: [/* @__PURE__ */(0, import_jsx_runtime22.jsxs)("div", {
        className: "card-header",
        children: [/* @__PURE__ */(0, import_jsx_runtime22.jsxs)("div", {
          className: "left",
          children: [/* @__PURE__ */(0, import_jsx_runtime22.jsx)(Skeleton_default, {
            width: 6.25
          }), /* @__PURE__ */(0, import_jsx_runtime22.jsx)(Skeleton_default, {
            width: 10
          })]
        }), /* @__PURE__ */(0, import_jsx_runtime22.jsx)("div", {
          className: "right",
          children: /* @__PURE__ */(0, import_jsx_runtime22.jsx)(Skeleton_default, {
            variant: "circular",
            width: 1.5,
            height: 1.5
          })
        })]
      }), /* @__PURE__ */(0, import_jsx_runtime22.jsxs)("div", {
        className: "card-body",
        children: [/* @__PURE__ */(0, import_jsx_runtime22.jsx)(Skeleton_default, {
          width: "100%",
          height: 8
        }), /* @__PURE__ */(0, import_jsx_runtime22.jsx)(Skeleton_default, {
          width: "100%",
          height: 8
        })]
      })]
    }) : /* @__PURE__ */(0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, {
      children: [(title || iconName || action || toggle) && /* @__PURE__ */(0, import_jsx_runtime22.jsxs)("div", {
        className: "card-header",
        children: [/* @__PURE__ */(0, import_jsx_runtime22.jsxs)("div", {
          className: "left",
          children: [title && /* @__PURE__ */(0, import_jsx_runtime22.jsxs)("div", {
            className: "title",
            children: [title, badges.map((b, i) => /* @__PURE__ */(0, import_jsx_runtime22.jsx)("span", {
              className: `admin-badge ${b.color ?? ""}`,
              children: b.text
            }, i))]
          }), desc && /* @__PURE__ */(0, import_jsx_runtime22.jsx)("div", {
            className: "des",
            children: desc
          })]
        }), /* @__PURE__ */(0, import_jsx_runtime22.jsxs)("div", {
          className: "right",
          children: [action, toggle && /* @__PURE__ */(0, import_jsx_runtime22.jsx)("i", {
            className: `adminfont-${getToggleIcon()}`,
            onClick: () => {
              setBodyVisible(!bodyVisible);
              onIconClick?.();
            }
          }), iconName && !toggle && !action && /* @__PURE__ */(0, import_jsx_runtime22.jsx)("i", {
            className: `adminfont-${iconName}`,
            onClick: () => onIconClick?.(),
            style: {
              cursor: onIconClick ? "pointer" : "default"
            }
          })]
        })]
      }), bodyVisible && children && /* @__PURE__ */(0, import_jsx_runtime22.jsx)("div", {
        className: "card-body",
        children
      })]
    })
  });
};
var Card_default = Card;

// src/components/StyleControl.tsx
var import_jsx_runtime23 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var StyleControls = ({
  style = {},
  onChange,
  includeTextStyles = true
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, {
    children: [includeTextStyles && /* @__PURE__ */(0, import_jsx_runtime23.jsx)(Card_default, {
      toggle: true,
      defaultExpanded: false,
      title: "Text",
      children: /* @__PURE__ */(0, import_jsx_runtime23.jsxs)(FormGroupWrapper_default, {
        children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          label: "Text Align",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(ChoiceToggleUI, {
            options: [{
              key: "left",
              value: "left",
              icon: "left-align"
            }, {
              key: "center",
              value: "center",
              icon: "center-align"
            }, {
              key: "right",
              value: "right",
              icon: "right-align"
            }, {
              key: "justify",
              value: "justify",
              icon: "justify-align"
            }],
            value: style.textAlign || "left",
            onChange: value => onChange({
              ...style,
              textAlign: value
            })
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          cols: 6,
          label: "Font Size (rem)",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
            type: "number",
            minNumber: 0.5,
            maxNumber: 5,
            value: style.fontSize ?? 1,
            onChange: val => {
              onChange({
                ...style,
                fontSize: Number(val)
              });
            }
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          cols: 6,
          label: "Line Height",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
            type: "number",
            minNumber: 1,
            maxNumber: 3,
            value: style.lineHeight ?? 1.5,
            onChange: val => {
              onChange({
                ...style,
                lineHeight: Number(val)
              });
            }
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          cols: 6,
          label: "Font Weight",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsxs)("select", {
            value: style.fontWeight || "normal",
            className: "basic-input",
            onChange: e => onChange({
              ...style,
              fontWeight: e.target.value
            }),
            children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "300",
              children: "Light (300)"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "normal",
              children: "Normal (400)"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "500",
              children: "Medium (500)"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "600",
              children: "Semibold (600)"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "bold",
              children: "Bold (700)"
            })]
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          cols: 6,
          label: "Text Decoration",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsxs)("select", {
            value: style.textDecoration || "none",
            className: "basic-input",
            onChange: e => onChange({
              ...style,
              textDecoration: e.target.value
            }),
            children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "none",
              children: "None"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "underline",
              children: "Underline"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "overline",
              children: "Overline"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "line-through",
              children: "Line Through"
            })]
          })
        })]
      })
    }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(Card_default, {
      toggle: true,
      defaultExpanded: false,
      title: "Color",
      children: /* @__PURE__ */(0, import_jsx_runtime23.jsxs)(FormGroupWrapper_default, {
        children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          cols: 6,
          label: "Background",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
            type: "color",
            value: style.backgroundColor || "#ffffff",
            onChange: val => {
              onChange({
                ...style,
                backgroundColor: val
              });
            }
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          cols: 6,
          label: "Text",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
            type: "color",
            value: style.color || "#000000",
            onChange: val => {
              onChange({
                ...style,
                color: val
              });
            }
          })
        })]
      })
    }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(Card_default, {
      toggle: true,
      defaultExpanded: false,
      title: "Spacing",
      children: /* @__PURE__ */(0, import_jsx_runtime23.jsxs)(FormGroupWrapper_default, {
        children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          label: "Padding",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)("div", {
            className: "spacing-controls",
            children: ["Top", "Right", "Bottom", "Left"].map(position => /* @__PURE__ */(0, import_jsx_runtime23.jsxs)("div", {
              className: "spacing-input",
              children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
                type: "number",
                minNumber: 0,
                value: style[`padding${position}`] ?? 0,
                onChange: val => {
                  onChange({
                    ...style,
                    [`padding${position}`]: Number(val)
                  });
                }
              }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("label", {
                children: position
              })]
            }, `padding-${position}`))
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          label: "Margin",
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)("div", {
            className: "spacing-controls",
            children: ["Top", "Right", "Bottom", "Left"].map(position => /* @__PURE__ */(0, import_jsx_runtime23.jsxs)("div", {
              className: "spacing-input",
              children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
                type: "number",
                minNumber: 0,
                value: style[`margin${position}`] ?? 0,
                onChange: val => {
                  onChange({
                    ...style,
                    [`margin${position}`]: Number(val)
                  });
                }
              }), /* @__PURE__ */(0, import_jsx_runtime23.jsxs)("label", {
                children: [position, "(rem)"]
              })]
            }, `margin-${position}`))
          })
        })]
      })
    }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(Card_default, {
      toggle: true,
      defaultExpanded: false,
      title: "Border",
      children: /* @__PURE__ */(0, import_jsx_runtime23.jsxs)(FormGroupWrapper_default, {
        children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          label: "Width(rem)",
          cols: 6,
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
            type: "number",
            minNumber: 0,
            value: style.borderWidth ?? 0,
            onChange: val => {
              onChange({
                ...style,
                borderWidth: Number(val)
              });
            }
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          label: "Radius(rem)",
          cols: 6,
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
            type: "number",
            minNumber: 0,
            value: style.borderRadius ?? 0,
            onChange: val => {
              onChange({
                ...style,
                borderRadius: Number(val)
              });
            }
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          label: "Color",
          cols: 6,
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsx)(BasicInputUI, {
            type: "color",
            value: style.borderColor || "#000000",
            onChange: val => {
              onChange({
                ...style,
                borderColor: val
              });
            }
          })
        }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)(FormGroup_default, {
          label: "Style",
          cols: 6,
          children: /* @__PURE__ */(0, import_jsx_runtime23.jsxs)("select", {
            value: style.borderStyle || "solid",
            className: "basic-input",
            onChange: e => onChange({
              ...style,
              borderStyle: e.target.value
            }),
            children: [/* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "solid",
              children: "Solid"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "dashed",
              children: "Dashed"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "dotted",
              children: "Dotted"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "double",
              children: "Double"
            }), /* @__PURE__ */(0, import_jsx_runtime23.jsx)("option", {
              value: "none",
              children: "None"
            })]
          })
        })]
      })
    })]
  });
};
var StyleControl_default = StyleControls;

// src/components/MultiCheckbox.tsx
var import_react17 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime24 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
function isBlocked(opt, modules, onBlocked) {
  if (opt.proSetting && !ZyraVariable?.khali_dabba) {
    onBlocked?.("pro");
    return true;
  }
  if (opt.moduleEnabled && !modules.includes(opt.moduleEnabled)) {
    onBlocked?.("module", opt.moduleEnabled);
    return true;
  }
  return false;
}
function formatModuleLabel2(moduleKey) {
  return moduleKey.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
var EditRow = ({
  value,
  onChange,
  onSave
}) => /* @__PURE__ */(0, import_jsx_runtime24.jsx)("div", {
  className: "edit-option-wrapper",
  children: /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("div", {
    className: "edit-option",
    children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("input", {
      type: "text",
      value,
      onChange: e => onChange(e.target.value),
      onKeyDown: e => {
        if (e.key === "Enter") {
          e.preventDefault();
          onSave();
        }
      },
      className: "basic-input",
      autoFocus: true
    }), /* @__PURE__ */(0, import_jsx_runtime24.jsx)("div", {
      className: "edit-icon",
      children: /* @__PURE__ */(0, import_jsx_runtime24.jsx)("span", {
        className: "admin-badge green border adminfont-check",
        onClick: e => {
          e.stopPropagation();
          onSave();
        }
      })
    })]
  })
});
var MultiCheckBoxUI = props => {
  const {
    options,
    value = [],
    modules,
    onBlocked,
    onChange,
    onOptionsChange,
    field,
    look
  } = props;
  const [showNewInput, setShowNewInput] = (0, import_react17.useState)(false);
  const [newOptionValue, setNewOptionValue] = (0, import_react17.useState)("");
  const [editIndex, setEditIndex] = (0, import_react17.useState)(null);
  const [editValue, setEditValue] = (0, import_react17.useState)("");
  const allSelected = value.length === options.length;
  const turnOffSiblings = (selected, options2, parent) => {
    let updated = [...selected];
    const children = options2.filter(opt => opt.dependent === parent);
    children.forEach(child => {
      updated = updated.filter(v => v !== child.value);
      updated = turnOffSiblings(updated, options2, child.value);
    });
    return updated;
  };
  const turnOnSiblings = (selected, options2, childValue) => {
    let updated = [...selected];
    const option = options2.find(opt => opt.value === childValue);
    if (option?.dependent) {
      if (!updated.includes(option.dependent)) {
        updated.push(option.dependent);
      }
      updated = turnOnSiblings(updated, options2, option.dependent);
    }
    return updated;
  };
  const toggle = val => {
    let updated;
    if (value.includes(val)) {
      updated = value.filter(v => v !== val);
      updated = turnOffSiblings(updated, options, val);
    } else {
      updated = [...value, val];
      updated = turnOnSiblings(updated, options, val);
    }
    onChange(updated);
  };
  const handleSelectDeselect = () => {
    const blocked = options.some(opt => isBlocked(opt, modules, onBlocked));
    if (blocked) {
      return;
    }
    props.onMultiSelectDeselectChange?.(allSelected ? [] : options.map(o => o.value));
  };
  const handleSaveNewOption = () => {
    const trimmed = newOptionValue.trim();
    if (!trimmed) {
      return;
    }
    const slug = trimmed.toLowerCase().replace(/\s+/g, "_");
    const newOption = {
      key: slug,
      value: slug,
      label: trimmed,
      edit: true
    };
    onOptionsChange?.([...options, newOption]);
    setNewOptionValue("");
    setShowNewInput(false);
  };
  const handleSaveEdit = index => {
    const trimmed = editValue.trim();
    if (!trimmed) {
      return;
    }
    const updated = options.map((opt, i) => i === index ? {
      ...opt,
      label: trimmed
    } : opt);
    onOptionsChange?.(updated);
    setEditIndex(null);
    setEditValue("");
  };
  const handleDelete = index => {
    const opt = options[index];
    if (isBlocked(opt, modules, onBlocked)) {
      return;
    }
    const updated = options.filter((_, i) => i !== index);
    onOptionsChange?.(updated);
    onChange(value.filter(v => v !== opt.value));
  };
  const inputType = props.type === "radio" ? "radio" : "checkbox";
  return /* @__PURE__ */(0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, {
    children: [!options || options.length === 0 ? /* @__PURE__ */(0, import_jsx_runtime24.jsx)("input", {
      type: "checkbox",
      checked: value.includes(field.rowKey),
      onChange: e => {
        if (!isBlocked(field, modules, onBlocked)) {
          onChange(e.target.checked);
        }
      }
    }) : /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("div", {
      className: props.wrapperClass || (look === "toggle" ? "toggle-btn" : props.selectDeselect ? "checkbox-list-side-by-side" : "simple-checkbox"),
      children: [props.selectDeselect && /* @__PURE__ */(0, import_jsx_runtime24.jsx)("div", {
        className: "checkbox-list-header",
        children: /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("div", {
          className: "checkbox",
          children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("input", {
            type: "checkbox",
            checked: allSelected,
            onChange: handleSelectDeselect,
            className: !allSelected && value.length > 0 ? "minus-icon" : ""
          }), /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("span", {
            children: [value.length, " items"]
          })]
        })
      }), options.map((option, index) => {
        const checked = value.includes(option.value);
        const rowKey = option.key ?? index;
        const inputId = `toggle-switch-${rowKey}`;
        const isEditing = editIndex === index;
        return /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("div", {
          className: "toggle-checkbox-header",
          children: [props.rightContent && /* @__PURE__ */(0, import_jsx_runtime24.jsx)("p", {
            className: "settings-metabox-description",
            dangerouslySetInnerHTML: {
              __html: option.label ?? ""
            }
          }), /* @__PURE__ */(0, import_jsx_runtime24.jsx)("div", {
            className: props.inputInnerWrapperClass || (look === "toggle" ? "toggle-checkbox" : "default-checkbox"),
            "data-tour": props.tour,
            children: isEditing ? /* @__PURE__ */(0, import_jsx_runtime24.jsx)(EditRow, {
              value: editValue,
              onChange: setEditValue,
              onSave: () => {
                if (!isBlocked(option, modules, onBlocked)) {
                  handleSaveEdit(index);
                }
              }
            }) : /* @__PURE__ */(0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, {
              children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("input", {
                className: props.inputClass,
                id: inputId,
                type: inputType,
                name: option.name ?? "basic-input",
                value: option.value,
                checked,
                onChange: () => {
                  if (!isBlocked(option, modules, onBlocked)) {
                    toggle(option.value);
                  }
                }
              }), /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("label", {
                className: "checkbox-label",
                htmlFor: inputId,
                children: [option.label, option.proSetting && !ZyraVariable?.khali_dabba && /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("span", {
                  className: "admin-pro-tag",
                  children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("i", {
                    className: "adminfont-pro-tag"
                  }), " ", "Pro"]
                }), !option.proSetting && option.moduleEnabled && !modules.includes(option.moduleEnabled) && /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("span", {
                  className: "admin-pro-tag module",
                  children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("i", {
                    className: `adminfont-${option.moduleEnabled}`
                  }), formatModuleLabel2(option.moduleEnabled), /* @__PURE__ */(0, import_jsx_runtime24.jsx)("i", {
                    className: "adminfont-lock"
                  })]
                }), /* @__PURE__ */(0, import_jsx_runtime24.jsx)("div", {
                  className: "label-des",
                  children: option.desc
                })]
              }), option.edit && /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("div", {
                className: "edit-icon",
                children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("span", {
                  className: "admin-badge blue border adminfont-edit",
                  onClick: e => {
                    e.stopPropagation();
                    setEditIndex(index);
                    setEditValue(option.label ?? option.value);
                  }
                }), /* @__PURE__ */(0, import_jsx_runtime24.jsx)("span", {
                  className: "admin-badge red border adminfont-delete",
                  onClick: e => {
                    e.stopPropagation();
                    handleDelete(index);
                  }
                })]
              })]
            })
          })]
        }, rowKey);
      })]
    }), props.addNewBtn && (showNewInput ? /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("div", {
      className: "add-new-option",
      children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("input", {
        type: "text",
        value: newOptionValue,
        onChange: e => setNewOptionValue(e.target.value),
        onKeyDown: e => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSaveNewOption();
          }
        },
        placeholder: "Enter new option",
        className: "basic-input",
        autoFocus: true
      }), /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("button", {
        className: "admin-btn btn-green",
        onClick: e => {
          e.preventDefault();
          handleSaveNewOption();
        },
        children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("i", {
          className: "adminfont-active"
        }), " Save"]
      })]
    }) : /* @__PURE__ */(0, import_jsx_runtime24.jsx)("div", {
      className: "add-new-option",
      children: /* @__PURE__ */(0, import_jsx_runtime24.jsxs)("div", {
        className: "admin-btn btn-purple",
        onClick: () => setShowNewInput(true),
        children: [/* @__PURE__ */(0, import_jsx_runtime24.jsx)("i", {
          className: "adminfont-plus"
        }), " ", props.addNewBtn]
      })
    }))]
  });
};
var MultiCheckBox = {
  render: ({
    field,
    value,
    onChange,
    canAccess,
    modules,
    settings,
    onOptionsChange,
    onBlocked
  }) => {
    const normalizedValue = Array.isArray(value) ? value.filter(v => v?.trim()) : typeof value === "string" && value.trim() ? [value] : [];
    const sourceOptions = settings?.[`${field.key}_options`] ?? field.options;
    const normalizedOptions = Array.isArray(sourceOptions) ? sourceOptions.map(opt => ({
      ...opt,
      value: String(opt.value),
      edit: opt.edit ?? !!field.addNewBtnText
    })) : [];
    return /* @__PURE__ */(0, import_jsx_runtime24.jsx)(MultiCheckBoxUI, {
      wrapperClass: field.look === "toggle" ? "toggle-btn" : field.selectDeselect === true ? "checkbox-list-side-by-side" : "simple-checkbox",
      inputInnerWrapperClass: field.look === "toggle" ? "toggle-checkbox" : "default-checkbox",
      inputClass: field.class,
      tour: field.tour,
      selectDeselect: field.selectDeselect,
      selectDeselectValue: "Select / Deselect All",
      rightContent: field.rightContent,
      addNewBtn: field.addNewBtnText,
      options: normalizedOptions,
      value: normalizedValue,
      modules,
      field,
      onChange: val => {
        if (canAccess) {
          onChange(val);
        }
      },
      onOptionsChange: opts => {
        if (canAccess) {
          onOptionsChange?.(opts);
        }
      },
      onBlocked,
      onMultiSelectDeselectChange: allValues => {
        if (canAccess) {
          onChange(allValues);
        }
      }
    });
  },
  validate: (field, value) => {
    if (field.required && (!value || value.length === 0)) {
      return `${field.label} is required`;
    }
    return null;
  }
};
var MultiCheckbox_default = MultiCheckBox;

// src/components/TextArea.tsx
var import_tinymce_react = __webpack_require__(/*! @tinymce/tinymce-react */ "../../../node_modules/.pnpm/@tinymce+tinymce-react@5.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
var import_jsx_runtime25 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var TextAreaUI = ({
  inputClass,
  id,
  name,
  value,
  rowNumber = 6,
  colNumber = 50,
  readOnly,
  placeholder,
  tinymceApiKey,
  usePlainText = false,
  onChange,
  onClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur
}) => {
  const handleEditorChange = content => {
    onChange?.(content);
  };
  const handleTextareaChange = e => {
    onChange?.(e.target.value);
  };
  return /* @__PURE__ */(0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, {
    children: tinymceApiKey && !usePlainText ? /* @__PURE__ */(0, import_jsx_runtime25.jsx)(import_tinymce_react.Editor, {
      apiKey: tinymceApiKey,
      value,
      init: {
        height: rowNumber * 50,
        menubar: false,
        plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste code help wordcount"],
        toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
      },
      onEditorChange: handleEditorChange
    }) : /* @__PURE__ */(0, import_jsx_runtime25.jsx)("textarea", {
      className: `textarea-input ${inputClass || ""}`,
      id,
      name,
      placeholder,
      value,
      rows: rowNumber,
      cols: colNumber,
      onChange: handleTextareaChange,
      onClick,
      onMouseOver,
      onMouseOut,
      onFocus,
      onBlur,
      readOnly
    })
  });
};
var TextArea = {
  render: ({
    field,
    value,
    onChange,
    canAccess
  }) => /* @__PURE__ */(0, import_jsx_runtime25.jsx)(TextAreaUI, {
    inputClass: field.class,
    id: field.id,
    name: field.name,
    placeholder: field.placeholder,
    rowNumber: field.rowNumber,
    colNumber: field.colNumber,
    readOnly: field.readOnly,
    value: value || "",
    usePlainText: field.usePlainText,
    tinymceApiKey: ZyraVariable?.tinymceApiKey ? ZyraVariable.tinymceApiKey : "",
    onChange: val => {
      if (!canAccess) {
        return;
      }
      onChange(val);
    }
  }, field.key),
  validate: () => {
    return null;
  }
};
var TextArea_default = TextArea;

// src/components/SettingMetaBox.tsx
var import_jsx_runtime26 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var RECAPTCHA_PATTERN = /^6[0-9A-Za-z_-]{39}$/;
var LAYOUT_OPTIONS = [{
  value: "1",
  label: "1 Column"
}, {
  value: "2-50",
  label: "50 / 50"
}, {
  value: "2-66",
  label: "66 / 34"
}, {
  value: "3",
  label: "3 Columns"
}, {
  value: "4",
  label: "4 Columns"
}];
var HEADING_LEVELS = [{
  id: "h1",
  value: 1,
  label: "H1"
}, {
  id: "h2",
  value: 2,
  label: "H2"
}, {
  id: "h3",
  value: 3,
  label: "H3"
}, {
  id: "h4",
  value: 4,
  label: "H4"
}, {
  id: "h5",
  value: 5,
  label: "H5"
}, {
  id: "h6",
  value: 6,
  label: "H6"
}];
var STYLED_BLOCKS = /* @__PURE__ */new Set(["richtext", "heading", "image", "button", "divider", "columns"]);
var TEXT_STYLED_BLOCKS = /* @__PURE__ */new Set(["richtext", "heading", "button"]);
var InputField = ({
  label,
  type,
  value,
  onChange,
  readonly = false,
  placeholder
}) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroup_default, {
  label,
  children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(BasicInputUI, {
    type,
    value: value || "",
    onChange: value2 => onChange(String(value2)),
    readOnly: readonly,
    placeholder
  })
});
var ContentGroup = ({
  title,
  children
}) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(Card_default, {
  toggle: true,
  defaultExpanded: true,
  title,
  children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroupWrapper_default, {
    children
  })
});
var VisibilityToggle = ({
  disabled = false,
  onChange
}) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroup_default, {
  label: "Visibility",
  children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(ChoiceToggleUI, {
    options: [{
      key: "visible",
      value: "true",
      label: "Visible"
    }, {
      key: "hidden",
      value: "false",
      label: "Hidden"
    }],
    value: disabled ? "false" : "true",
    onChange: val => onChange(val === "false")
  })
});
var OptionEditor = ({
  options,
  onChange
}) => {
  const addOption = (0, import_react18.useCallback)(() => {
    onChange([...options, {
      id: crypto.randomUUID(),
      label: "Option value",
      value: "value"
    }]);
  }, [options, onChange]);
  const updateOption = (0, import_react18.useCallback)((index, updates) => {
    const newOptions = [...options];
    newOptions[index] = {
      ...newOptions[index],
      ...updates
    };
    onChange(newOptions);
  }, [options, onChange]);
  const deleteOption = (0, import_react18.useCallback)(index => {
    onChange(options.filter((_, i) => i !== index));
  }, [options, onChange]);
  return /* @__PURE__ */(0, import_jsx_runtime26.jsxs)("div", {
    className: "multioption-wrapper",
    onClick: e => e.stopPropagation(),
    children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)("label", {
      children: "Set option"
    }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(import_react_sortablejs3.ReactSortable, {
      list: options,
      setList: onChange,
      handle: ".drag-handle-option",
      children: options.map((opt, index) => /* @__PURE__ */(0, import_jsx_runtime26.jsxs)("div", {
        className: "option-list-wrapper drag-handle-option",
        children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)("div", {
          className: "option-icon admin-badge blue",
          children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)("i", {
            className: "adminfont-drag"
          })
        }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)("div", {
          className: "option-label",
          children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(BasicInputUI, {
            value: opt.label,
            onChange: value => updateOption(index, {
              label: value
            })
          })
        }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)("div", {
          className: "option-icon admin-badge red",
          children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)("div", {
            role: "button",
            className: "delete-btn adminfont-delete",
            tabIndex: 0,
            onClick: () => deleteOption(index)
          })
        })]
      }, opt.id || index))
    }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(ButtonInputUI, {
      buttons: [{
        text: "Add new",
        icon: "plus",
        color: "purple",
        onClick: addOption
      }]
    })]
  });
};
var textFieldSettingsRenderer = ({
  formField,
  onChange
}) => /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
  children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
    label: "Placeholder",
    value: formField.placeholder || "",
    onChange: v => onChange("placeholder", v)
  }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
    label: "Character limit",
    type: "number",
    value: formField.charlimit?.toString() || "",
    onChange: v => onChange("charlimit", Number(v))
  })]
});
var createFieldRenderers = () => ({
  // Basic inputs
  text: textFieldSettingsRenderer,
  email: textFieldSettingsRenderer,
  textarea: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
      label: "Placeholder",
      value: formField.placeholder || "",
      onChange: v => onChange("placeholder", v)
    }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
      label: "Character limit",
      type: "number",
      value: formField.charlimit?.toString() || "",
      onChange: v => onChange("charlimit", Number(v))
    }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
      label: "Row",
      type: "number",
      value: formField.row?.toString() || "",
      onChange: v => onChange("row", Number(v))
    }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
      label: "Column",
      type: "number",
      value: formField.column?.toString() || "",
      onChange: v => onChange("column", Number(v))
    })]
  }),
  // Content blocks
  richtext: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(ContentGroup, {
    title: "Content",
    children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroup_default, {
      label: "HTML Content",
      children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(TextAreaUI, {
        name: "html",
        value: formField.html || "",
        onChange: val => onChange("html", val),
        placeholder: "Enter HTML content"
      })
    })
  }),
  heading: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(ContentGroup, {
    title: "Heading Content",
    children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
      label: "Heading Text",
      value: formField.text || "",
      onChange: v => onChange("text", v),
      placeholder: "Enter heading text"
    }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroup_default, {
      label: "Heading Level",
      children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(ChoiceToggleUI, {
        options: HEADING_LEVELS,
        value: formField.level || 2,
        onChange: val => onChange("level", Number(val))
      })
    })]
  }),
  image: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, {
    children: /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(ContentGroup, {
      title: "Image",
      children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
        label: "Image URL",
        value: formField.src || "",
        onChange: v => onChange("src", v)
      }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
        label: "Alt Text",
        value: formField.alt || "",
        onChange: v => onChange("alt", v)
      })]
    })
  }),
  button: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, {
    children: /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(ContentGroup, {
      title: "Button Content",
      children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
        label: "Button Text",
        value: formField.text || formField.placeholder || "",
        onChange: v => onChange("text", v)
      }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
        label: "Button URL",
        value: formField.url || "",
        onChange: v => onChange("url", v)
      })]
    })
  }),
  columns: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, {
    children: /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(ContentGroup, {
      title: "Layout",
      children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroup_default, {
        label: "Column Layout",
        children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)("select", {
          value: formField.layout || "2-50",
          className: "basic-input",
          onChange: e => onChange("layout", e.target.value),
          children: LAYOUT_OPTIONS.map(({
            value,
            label
          }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)("option", {
            value,
            children: label
          }, value))
        })
      }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroup_default, {
        cols: 6,
        label: "Gap (rem)",
        children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(BasicInputUI, {
          type: "number",
          minNumber: 0,
          maxNumber: 5,
          step: 0.25,
          value: formField.style?.gap ?? 1,
          onChange: val => {
            const currentStyle = formField.style || {};
            onChange("style", {
              ...currentStyle,
              gap: Number(val)
            });
          }
        })
      })]
    })
  }),
  // Selection fields
  "multi-select": ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(OptionEditor, {
    options: formField.options || [],
    onChange: o => {
      onChange("options", o);
    }
  }),
  dropdown: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(OptionEditor, {
    options: formField.options || [],
    onChange: o => onChange("options", o)
  }),
  checkboxes: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(OptionEditor, {
    options: formField.options || [],
    onChange: o => onChange("options", o)
  }),
  radio: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(OptionEditor, {
    options: formField.options || [],
    onChange: o => onChange("options", o)
  }),
  // Special fields
  recaptcha: ({
    formField,
    onChange
  }) => {
    const [isValid, setIsValid] = (0, import_react18.useState)(() => RECAPTCHA_PATTERN.test(formField.sitekey || ""));
    const handleChange = (0, import_react18.useCallback)(value => {
      onChange("sitekey", value);
      setIsValid(RECAPTCHA_PATTERN.test(value));
    }, [onChange]);
    return /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
      children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
        label: "Site key",
        value: formField.sitekey || "",
        onChange: handleChange,
        className: !isValid ? "highlight" : ""
      }), /* @__PURE__ */(0, import_jsx_runtime26.jsxs)("div", {
        children: ["Register your site with Google to obtain the", " ", /* @__PURE__ */(0, import_jsx_runtime26.jsx)("a", {
          href: "https://www.google.com/recaptcha",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "link-item",
          children: "reCAPTCHA script"
        }), "."]
      })]
    });
  },
  attachment: ({
    formField,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
    label: "Max File Size",
    type: "number",
    value: formField.filesize?.toString() || "",
    onChange: v => onChange("filesize", Number(v))
  }),
  default: () => null
});
var FIELD_RENDERERS = createFieldRenderers();
var SettingMetaBox = ({
  formField,
  inputTypeList = [],
  onChange,
  onTypeChange,
  opened,
  option,
  metaType = "setting-meta"
}) => {
  const [hasOpened, setHasOpened] = (0, import_react18.useState)(opened.click);
  const FieldRenderer = FIELD_RENDERERS[formField?.type || "default"] || FIELD_RENDERERS.default;
  (0, import_react18.useEffect)(() => {
    setHasOpened(opened.click);
  }, [opened]);
  const hasStyleControls = (0, import_react18.useMemo)(() => STYLED_BLOCKS.has(formField?.type || ""), [formField?.type]);
  const hasTextStyles = (0, import_react18.useMemo)(() => TEXT_STYLED_BLOCKS.has(formField?.type || ""), [formField?.type]);
  const handleLabelChange = value => {
    onChange("label", value);
  };
  const handleNameChange = value => {
    if (metaType === "setting-meta") {
      onChange("name", value);
    } else {
      onChange("label", value);
    }
  };
  const handlePlaceholderChange = value => {
    onChange("placeholder", value);
  };
  const handleDisabledChange = (0, import_react18.useCallback)(disabled => {
    onChange("disabled", disabled);
  }, [onChange]);
  const handleRequiredChange = (0, import_react18.useCallback)(e => {
    onChange("required", e.target.checked);
  }, [onChange]);
  const handleValueChange = (0, import_react18.useCallback)(value => {
    onChange("value", value);
  }, [onChange]);
  const handleStyleChange = (0, import_react18.useCallback)(style => {
    onChange("style", style);
  }, [onChange]);
  if (!hasOpened || !formField) {
    return null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime26.jsxs)("div", {
    className: "setting-panel",
    onClick: e => e.stopPropagation(),
    children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)("div", {
      className: "settings-title",
      children: formField.type ? `${formField.type.charAt(0).toUpperCase() + formField.type.slice(1)} settings` : "Input settings"
    }), /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(FormGroupWrapper_default, {
      children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
        label: "Field label",
        value: formField.label || "",
        onChange: handleLabelChange
      }), formField.readonly ?
      // Readonly mode
      /* @__PURE__ */
      (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
          label: "Placeholder",
          value: formField.placeholder || "",
          onChange: handlePlaceholderChange
        }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(VisibilityToggle, {
          disabled: formField.disabled,
          onChange: handleDisabledChange
        })]
      }) :
      // Edit mode
      /* @__PURE__ */
      (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
        children: [metaType !== "setting-meta" && /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
          label: "Value",
          value: option?.value || "",
          onChange: handleValueChange
        }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(InputField, {
          label: metaType === "setting-meta" ? "Name" : "Label",
          value: metaType === "setting-meta" ? formField.name || "" : option?.label || "",
          readonly: metaType === "setting-meta" && formField.readonly,
          onChange: handleNameChange
        }), metaType === "setting-meta" && /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
          children: [formField.type && /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FieldRenderer, {
            formField,
            onChange
          }), hasStyleControls && /* @__PURE__ */(0, import_jsx_runtime26.jsx)(StyleControl_default, {
            style: formField.style || {},
            onChange: handleStyleChange,
            includeTextStyles: hasTextStyles
          }), (!hasStyleControls || formField.type === "richtext" && formField.context === "form") && /* @__PURE__ */(0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
            children: [/* @__PURE__ */(0, import_jsx_runtime26.jsx)(VisibilityToggle, {
              disabled: formField.disabled,
              onChange: handleDisabledChange
            }), /* @__PURE__ */(0, import_jsx_runtime26.jsx)(FormGroup_default, {
              label: "Required",
              children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)("div", {
                className: "input-wrapper",
                children: /* @__PURE__ */(0, import_jsx_runtime26.jsx)(MultiCheckBoxUI, {
                  options: [{
                    key: "required",
                    value: "required",
                    label: "Required"
                  }],
                  value: formField.required ? ["required"] : [],
                  onChange: vals => {
                    const next = vals.includes("required");
                    if (next === formField.required) {
                      return;
                    }
                    handleRequiredChange({
                      target: {
                        checked: next
                      }
                    });
                  }
                })
              })
            })]
          })]
        })]
      })]
    })]
  });
};
var SettingMetaBox_default = SettingMetaBox;

// src/components/Tabs.tsx
var import_react19 = __toESM(__webpack_require__(/*! react */ "react"));
var import_jsx_runtime27 =
// <div key={fieldConfig.key || index} className="tab-field-wrapper">
//     {fieldConfig.label && <label className="tab-field-label">{fieldConfig.label}</label>}
__webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var TabsUI = ({
  tabs,
  defaultActiveIndex = 0,
  className = "",
  value,
  onChange,
  canAccess,
  headerExtra,
  modules,
  onBlocked
}) => {
  const [activeIndex, setActiveIndex] = (0, import_react19.useState)(defaultActiveIndex);
  const renderFieldFromConfig = fieldConfig => {
    const registeredField = FIELD_REGISTRY[fieldConfig.type];
    const Render = registeredField?.render;
    if (!registeredField || !Render) {
      return null;
    }
    const fieldValue = value?.[fieldConfig.key] || "";
    const handleFieldChange = newValue => {
      if (onChange) {
        onChange({
          ...value,
          [fieldConfig.key]: newValue
        });
      }
    };
    return /* @__PURE__ */(0, import_jsx_runtime27.jsx)(Render, {
      field: fieldConfig,
      value: fieldValue,
      onChange: handleFieldChange,
      canAccess,
      modules,
      onBlocked
    });
  };
  const processContent = content => {
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (item && typeof item === "object" && !import_react19.default.isValidElement(item) && typeof item.type === "string") {
          return renderFieldFromConfig(item, index);
        }
        return item;
      });
    }
    if (content && typeof content === "object" && !import_react19.default.isValidElement(content) && typeof content.type === "string") {
      return renderFieldFromConfig(content, 0);
    }
    return content;
  };
  const renderTabContent = () => {
    const currentTab = tabs[activeIndex];
    if (!currentTab) {
      return null;
    }
    if (currentTab.type) {
      const registeredField = FIELD_REGISTRY[currentTab.type];
      const Render = registeredField?.render;
      if (registeredField && Render) {
        const tabAsField = {
          ...currentTab,
          type: currentTab.type,
          key: currentTab.key || `tab-${activeIndex}`
        };
        const tabValue = value?.[currentTab.key || `tab-${activeIndex}`] || currentTab.value || "";
        const handleTabChange = newValue => {
          if (onChange) {
            onChange({
              ...value,
              [currentTab.key || `tab-${activeIndex}`]: newValue
            });
          }
        };
        return /* @__PURE__ */(0, import_jsx_runtime27.jsx)(Render, {
          field: tabAsField,
          value: tabValue,
          onChange: handleTabChange,
          canAccess
        });
      }
      return null;
    }
    return processContent(currentTab.content);
  };
  return /* @__PURE__ */(0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, {
    children: [tabs.length > 1 && /* @__PURE__ */(0, import_jsx_runtime27.jsxs)("div", {
      className: `tabs-wrapper ${className}`,
      children: [/* @__PURE__ */(0, import_jsx_runtime27.jsx)("div", {
        className: "tabs-item",
        children: tabs.map((tab, index) => /* @__PURE__ */(0, import_jsx_runtime27.jsx)("div", {
          className: `tab ${index === activeIndex ? "active-tab" : ""}`,
          onClick: () => setActiveIndex(index),
          children: /* @__PURE__ */(0, import_jsx_runtime27.jsxs)("span", {
            className: "tab-name",
            children: [tab.icon && /* @__PURE__ */(0, import_jsx_runtime27.jsx)("i", {
              className: `adminfont-${tab.icon}`
            }), tab.label]
          })
        }, index))
      }), headerExtra && /* @__PURE__ */(0, import_jsx_runtime27.jsx)("div", {
        className: "tabs-header-extra",
        children: headerExtra
      })]
    }), renderTabContent(), tabs[activeIndex]?.footer && /* @__PURE__ */(0, import_jsx_runtime27.jsx)("div", {
      className: "tabs-footer",
      children: /* @__PURE__ */(0, import_jsx_runtime27.jsxs)("a", {
        href: tabs[activeIndex].footer.url,
        className: "admin-btn btn-purple",
        children: [tabs[activeIndex].footer.icon && /* @__PURE__ */(0, import_jsx_runtime27.jsx)("i", {
          className: tabs[activeIndex].footer.icon
        }), tabs[activeIndex].footer.text]
      })
    })]
  });
};
var Tabs = {
  render: ({
    field,
    value,
    onChange,
    canAccess,
    modules,
    onBlocked
  }) => /* @__PURE__ */(0, import_jsx_runtime27.jsx)(TabsUI, {
    tabs: field.tabs || [],
    value,
    onChange,
    canAccess,
    modules,
    onBlocked
  }),
  validate: () => {
    return null;
  }
};
var Tabs_default = Tabs;

// src/components/CanvasEditor/CanvasEditor.tsx
var import_jsx_runtime28 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var CanvasEditor = ({
  blocks: externalBlocks,
  onChange,
  blockGroups,
  visibleGroups = [],
  templates = [],
  activeTemplateId,
  onTemplateSelect,
  showTemplatesTab = false,
  groupName,
  proSettingChange = () => false,
  context = "default",
  inputTypeList,
  availablePlaceholder
}) => {
  const [blocks, setBlocks] = (0, import_react20.useState)(externalBlocks);
  const [openBlock, setOpenBlock] = (0, import_react20.useState)(null);
  const [openGroups, setOpenGroups] = (0, import_react20.useState)(() => Object.fromEntries((visibleGroups.length ? blockGroups.filter(g => visibleGroups.includes(g.id)) : blockGroups).map(g => [g.id, true])));
  const settingHasChanged = (0, import_react20.useRef)(false);
  const initialLoad = (0, import_react20.useRef)(true);
  const isInternalUpdate = (0, import_react20.useRef)(false);
  const blocksRef = (0, import_react20.useRef)(blocks);
  blocksRef.current = blocks;
  const isFormBuilder = context === "form";
  const defaultBlocks = import_react20.default.useMemo(() => {
    return blockGroups.flatMap(group => group.blocks).filter(block => block.defaultField);
  }, [blockGroups]);
  const titleBlock = isFormBuilder ? blocks.find(b => b.type === "title") : null;
  const submitBlock = isFormBuilder ? blocks.find(b => b.type === "button") : null;
  const termsBlock = isFormBuilder ? blocks.find(b => b.type === "richtext" && b.context === "form") : null;
  const dynamicBlocks = isFormBuilder ? blocks.filter(b => b.type !== "button" && b.type !== "title" && b.type !== "richtext") : blocks;
  (0, import_react20.useEffect)(() => {
    if (context !== "form") {
      return;
    }
    setBlocks(prev => {
      const hasSubmit = prev.some(b => b.type === "button");
      if (hasSubmit) {
        return prev;
      }
      return [...prev, createBlock({
        value: "button",
        label: "Submit",
        placeholder: "Submit"
      })];
    });
  }, []);
  (0, import_react20.useEffect)(() => {
    if (context !== "form") {
      return;
    }
    setBlocks(prev => {
      const hasTitle = prev.some(b => b.type === "title");
      if (hasTitle) {
        return prev;
      }
      return [createBlock({
        value: "title",
        label: "Registration Form"
      }), ...prev];
    });
  }, []);
  (0, import_react20.useEffect)(() => {
    const shouldAddStoreNameField = defaultBlocks.some(block => block.id === "name");
    if (context !== "form" || !shouldAddStoreNameField) {
      return;
    }
    setBlocks(prev => {
      const hasStoreName = prev.some(b => b.name === "name");
      if (hasStoreName) {
        return prev;
      }
      return [...prev, createBlock({
        value: "text",
        label: "Store Name",
        fixedName: "name",
        placeholder: "Enter your store name"
      })];
    });
  }, []);
  (0, import_react20.useEffect)(() => {
    if (context !== "form") {
      return;
    }
    const hasExternalTerms = externalBlocks?.some(b => b.type === "richtext" && b.context === "form");
    if (hasExternalTerms) {
      setBlocks(externalBlocks);
      return;
    }
    setBlocks(prev => {
      const hasTerms = prev.some(b => b.type === "richtext" && b.context === "form");
      if (hasTerms) {
        return prev;
      }
      return [...prev, createBlock({
        value: "richtext",
        label: "Terms & Conditions",
        fixedName: "terms_conditions",
        context: "form",
        html: '<a href="#">I agree to the Terms & Conditions</a>',
        required: true
      })];
    });
  }, [context, externalBlocks]);
  (0, import_react20.useEffect)(() => {
    if (!isInternalUpdate.current) {
      if (externalBlocks !== blocksRef.current) {
        setBlocks(externalBlocks.map(b => {
          if (b?.id && b?.type) {
            return b;
          }
          return createBlock(b, context);
        }));
      }
    }
  }, [externalBlocks]);
  (0, import_react20.useEffect)(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
    if (settingHasChanged.current) {
      onChange(blocks);
      settingHasChanged.current = false;
      isInternalUpdate.current = false;
    }
  }, [blocks]);
  const markChanged = (0, import_react20.useCallback)(() => {
    settingHasChanged.current = true;
  }, []);
  const columnManager = useColumnManager({
    blocks,
    onBlocksUpdate: updated => {
      isInternalUpdate.current = true;
      setBlocks(updated);
      markChanged();
    },
    openBlock,
    setOpenBlock
  });
  const pendingDrag = (0, import_react20.useRef)(null);
  const dragFlushPending = (0, import_react20.useRef)(false);
  const flushDrag = (0, import_react20.useCallback)(() => {
    if (!pendingDrag.current) {
      return;
    }
    const {
      canvas,
      columns
    } = pendingDrag.current;
    pendingDrag.current = null;
    dragFlushPending.current = false;
    let next = (() => {
      const current = blocksRef.current;
      if (!canvas) {
        return current;
      }
      if (context !== "form") {
        return [...canvas];
      }
      const title = current.find(b => b.type === "title");
      const submit = current.find(b => b.type === "button");
      let result = [...canvas];
      if (title) {
        result = [title, ...result];
      }
      if (submit) {
        result = [...result, submit];
      }
      return result;
    })();
    columns.forEach((newCol, key) => {
      const [pi, ci] = key.split("-").map(Number);
      next = next.map((b, i) => {
        if (i !== pi || b.type !== "columns") {
          return b;
        }
        const cols = safeColumns(b);
        cols[ci] = newCol;
        return {
          ...b,
          columns: cols
        };
      });
    });
    isInternalUpdate.current = true;
    setBlocks(next);
    markChanged();
  }, [markChanged]);
  const scheduleDragFlush = () => {
    if (!dragFlushPending.current) {
      dragFlushPending.current = true;
      Promise.resolve().then(flushDrag);
    }
  };
  const handleCanvasSetList = (0, import_react20.useCallback)(rawList => {
    if (proSettingChange()) {
      return;
    }
    if (!pendingDrag.current) {
      pendingDrag.current = {
        columns: /* @__PURE__ */new Map()
      };
    }
    pendingDrag.current.canvas = rawList.map(item => createBlock(item, context));
    scheduleDragFlush();
  }, [proSettingChange, context]);
  const handleColumnSetList = (0, import_react20.useCallback)((parentIdx, colIdx, rawList) => {
    if (!pendingDrag.current) {
      pendingDrag.current = {
        columns: /* @__PURE__ */new Map()
      };
    }
    pendingDrag.current.columns.set(`${parentIdx}-${colIdx}`, rawList.map(item => createBlock(item)));
    scheduleDragFlush();
  }, []);
  const updateBlock = (0, import_react20.useCallback)((index, patch) => {
    if (proSettingChange()) {
      return;
    }
    setBlocks(prev => {
      const current = prev[index];
      const isEqualValue = (previousValue, nextValue) => {
        if (Array.isArray(previousValue) && Array.isArray(nextValue)) {
          if (previousValue.length !== nextValue.length) {
            return false;
          }
          return previousValue.every((item, idx) => item === nextValue[idx]);
        }
        return previousValue === nextValue;
      };
      const hasChanged = Object.keys(patch).some(key => !isEqualValue(current[key], patch[key]));
      if (!hasChanged) {
        return prev;
      }
      isInternalUpdate.current = true;
      const next = [...prev];
      next[index] = {
        ...current,
        ...patch
      };
      if (openBlock?.id === next[index].id) {
        setOpenBlock(next[index]);
      }
      return next;
    });
    markChanged();
  }, [proSettingChange, openBlock?.id, markChanged]);
  const deleteBlock = (0, import_react20.useCallback)((index, e) => {
    e?.stopPropagation();
    if (proSettingChange()) {
      return;
    }
    const blockToDelete = dynamicBlocks[index];
    if (blockToDelete?.name === "name") {
      return;
    }
    setBlocks(prev => {
      return prev.filter(b => b.id !== blockToDelete.id);
    });
    markChanged();
    if (openBlock?.id === deleted?.id) {
      setOpenBlock(null);
      columnManager.clearSelection();
    }
  }, [proSettingChange, blocks, openBlock?.id, columnManager, markChanged]);
  const handleChildMutate = (0, import_react20.useCallback)((index, updated) => {
    setBlocks(prev => {
      isInternalUpdate.current = true;
      return prev.map((b, i) => {
        if (i !== index) {
          return b;
        }
        if (b === updated) {
          return b;
        }
        isInternalUpdate.current = true;
        return updated;
      });
    });
    markChanged();
  }, [markChanged]);
  const handleSettingsChange = (0, import_react20.useCallback)((key, value) => {
    if (proSettingChange()) {
      return;
    }
    if (columnManager.selectedLocation) {
      const {
        parentIndex,
        columnIndex,
        childIndex
      } = columnManager.selectedLocation;
      columnManager.handleChildUpdate(parentIndex, columnIndex, childIndex, {
        [key]: value
      });
    } else {
      const index = blocks.findIndex(b => b.name === openBlock?.name);
      if (index < 0) {
        return;
      }
      if (key === "layout" && blocks[index].type === "columns") {
        columnManager.handleLayoutChange(index, value);
      } else {
        updateBlock(index, {
          [key]: value
        });
      }
    }
    markChanged();
  }, [proSettingChange, columnManager, blocks, openBlock?.id, updateBlock, markChanged]);
  const toggleGroup = (0, import_react20.useCallback)(id => setOpenGroups(prev => ({
    ...prev,
    [id]: !prev[id]
  })), []);
  const getInputTypeList = (0, import_react20.useCallback)(() => {
    if (inputTypeList) {
      return inputTypeList;
    }
    return (blockGroups[0]?.blocks ?? []).map(b => ({
      value: b.value,
      label: b.label
    }));
  }, [inputTypeList, blockGroups]);
  const resolvePlaceholderToken = (0, import_react20.useCallback)(value => {
    const trimmed = value.trim();
    if (!trimmed) {
      return "";
    }
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      return trimmed;
    }
    return `[${trimmed}]`;
  }, []);
  const getPlaceholderFieldKey = (0, import_react20.useCallback)(block => {
    switch (block.type) {
      case "richtext":
        return "html";
      case "heading":
      case "button":
      case "title":
        return "text";
      default:
        return "placeholder";
    }
  }, []);
  const insertPlaceholder = (0, import_react20.useCallback)(value => {
    if (proSettingChange() || !openBlock) {
      return;
    }
    const token = resolvePlaceholderToken(value);
    if (!token) {
      return;
    }
    const fieldKey = getPlaceholderFieldKey(openBlock);
    const existingValue = openBlock[fieldKey];
    const nextValue = `${typeof existingValue === "string" ? existingValue : ""}${token}`;
    if (columnManager.selectedLocation) {
      const {
        parentIndex,
        columnIndex,
        childIndex
      } = columnManager.selectedLocation;
      columnManager.handleChildUpdate(parentIndex, columnIndex, childIndex, {
        [fieldKey]: nextValue
      });
      markChanged();
      return;
    }
    const index = blocks.findIndex(b => b.id === openBlock.id);
    if (index < 0) {
      return;
    }
    updateBlock(index, {
      [fieldKey]: nextValue
    });
  }, [proSettingChange, openBlock, resolvePlaceholderToken, getPlaceholderFieldKey, columnManager, markChanged, blocks, updateBlock]);
  const groupsToShow = visibleGroups.length ? blockGroups.filter(g => visibleGroups.includes(g.id)) : blockGroups;
  const renderBlocksContent = () => /* @__PURE__ */(0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, {
    children: groupsToShow.map(({
      id,
      label,
      icon,
      blocks: palette
    }) => /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("aside", {
      className: "elements-section",
      children: [/* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
        className: "section-meta",
        onClick: () => toggleGroup(id),
        children: [/* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
          className: "elements-title",
          children: [icon && /* @__PURE__ */(0, import_jsx_runtime28.jsx)("i", {
            className: icon
          }), label, " ", /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("span", {
            children: ["(", palette.length, ")"]
          })]
        }), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("i", {
          className: `adminfont-pagination-right-arrow ${openGroups[id] ? "rotate" : ""}`
        })]
      }), openGroups[id] && /* @__PURE__ */(0, import_jsx_runtime28.jsx)(import_react_sortablejs4.ReactSortable, {
        list: palette,
        setList: () => {},
        sort: false,
        group: {
          name: groupName,
          pull: "clone",
          put: false
        },
        className: "section-container open",
        children: palette.map(item => /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
          className: "elements-items",
          onClick: () => {
            if (proSettingChange()) {
              return;
            }
            setBlocks(prev => {
              isInternalUpdate.current = true;
              const isTerms = item.value === "richtext";
              if (isTerms) {
                const alreadyExists = prev.some(b => b.type === "richtext" && b.context === "form");
                if (alreadyExists) {
                  return prev;
                }
              }
              return [...prev, createBlock(item, context, prev)];
            });
            markChanged();
          },
          children: [/* @__PURE__ */(0, import_jsx_runtime28.jsx)("i", {
            className: `adminfont-${item.icon}`
          }), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("div", {
            className: "elements-name",
            children: item.fixedName
          })]
        }, item.id || item.value))
      })]
    }, id))
  });
  const renderTemplatesContent = () => /* @__PURE__ */(0, import_jsx_runtime28.jsx)("aside", {
    className: "elements-section",
    children: /* @__PURE__ */(0, import_jsx_runtime28.jsx)("main", {
      className: "template-list",
      children: templates.map(({
        id,
        name
      }) => /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
        className: `template-item ${id === activeTemplateId ? "active" : ""}`,
        onClick: () => onTemplateSelect?.(id),
        children: [/* @__PURE__ */(0, import_jsx_runtime28.jsx)("div", {
          className: "template-name",
          children: name
        }), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("div", {
          className: "template-image-wrapper",
          children: /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
            className: "template-image",
            children: [/* @__PURE__ */(0, import_jsx_runtime28.jsx)("span", {}), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("span", {}), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("span", {}), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("span", {}), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("span", {})]
          })
        })]
      }, id))
    })
  });
  const hasTabsContent = (() => {
    const hasBlockGroups = groupsToShow.some(group => group.blocks.length > 0);
    const hasTemplates = showTemplatesTab && templates.length > 0;
    return hasBlockGroups || hasTemplates;
  })();
  return /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
    className: "registration-from-wrapper",
    children: [hasTabsContent && /* @__PURE__ */(0, import_jsx_runtime28.jsx)("div", {
      className: "elements-wrapper",
      children: /* @__PURE__ */(0, import_jsx_runtime28.jsx)(TabsUI, {
        tabs: [{
          label: "Blocks",
          content: renderBlocksContent()
        }, ...(showTemplatesTab && templates.length ? [{
          label: "Templates",
          content: renderTemplatesContent()
        }] : [])]
      })
    }), /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
      className: "canvas-editor-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime28.jsxs)("div", {
        className: "canvas-editor",
        children: [isFormBuilder && titleBlock && /* @__PURE__ */(0, import_jsx_runtime28.jsx)(BlockRenderer, {
          block: titleBlock,
          isActive: openBlock?.name === titleBlock.name,
          onSelect: () => setOpenBlock(titleBlock),
          onChange: patch => {
            const index = blocks.findIndex(b => b.id === titleBlock.id);
            updateBlock(index, patch);
          },
          showMeta: false
        }), /* @__PURE__ */(0, import_jsx_runtime28.jsx)(import_react_sortablejs4.ReactSortable, {
          list: dynamicBlocks,
          setList: handleCanvasSetList,
          group: {
            name: groupName,
            pull: true,
            put: true
          },
          handle: ".drag-handle",
          animation: 150,
          children: dynamicBlocks.map((block, index) => block.type === "columns" ? /* @__PURE__ */(0, import_jsx_runtime28.jsx)(ColumnRenderer, {
            block,
            parentIndex: index,
            isActive: openBlock?.name === block.name,
            groupName,
            openBlock,
            setOpenBlock,
            onColumnSetList: handleColumnSetList,
            onChildMutate: updated => handleChildMutate(index, updated),
            selectedLocation: columnManager.selectedLocation,
            onChildSelect: (location, child) => {
              setOpenBlock(child);
              columnManager.setSelectedLocation(location);
            },
            onSelect: () => {
              setOpenBlock(block);
              columnManager.clearSelection();
            },
            onDelete: () => deleteBlock(index)
          }, block.id) : /* @__PURE__ */(0, import_jsx_runtime28.jsx)(BlockRenderer, {
            block,
            isActive: openBlock?.name === block.name,
            onSelect: () => {
              setOpenBlock(block);
              columnManager.clearSelection();
            },
            onChange: patch => updateBlock(index, patch),
            onDelete: block.name === "name" ? void 0 : e => deleteBlock(index, e)
          }, block.id))
        }), isFormBuilder && termsBlock && /* @__PURE__ */(0, import_jsx_runtime28.jsx)(BlockRenderer, {
          block: termsBlock,
          isActive: openBlock?.name === termsBlock.name,
          onSelect: () => setOpenBlock(termsBlock),
          onChange: patch => {
            const index = blocks.findIndex(b => b.id === termsBlock.id);
            updateBlock(index, patch);
          },
          showMeta: false
        }), isFormBuilder && submitBlock && /* @__PURE__ */(0, import_jsx_runtime28.jsx)(BlockRenderer, {
          block: submitBlock,
          isActive: openBlock?.name === submitBlock.name,
          onSelect: () => setOpenBlock(submitBlock),
          onChange: patch => {
            const index = blocks.findIndex(b => b.id === submitBlock.id);
            updateBlock(index, patch);
          },
          showMeta: false
        })]
      }), availablePlaceholder && /* @__PURE__ */(0, import_jsx_runtime28.jsx)("div", {
        className: "available-placeholder",
        children: availablePlaceholder?.map((item, index) => /* @__PURE__ */(0, import_jsx_runtime28.jsx)("span", {
          className: `admin-badge`,
          role: "button",
          tabIndex: 0,
          onClick: () => insertPlaceholder(item),
          onKeyDown: e => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              insertPlaceholder(item);
            }
          },
          children: item
        }, index))
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime28.jsx)("div", {
      className: "settings-panel-wrapper",
      children: openBlock && /* @__PURE__ */(0, import_jsx_runtime28.jsx)(SettingMetaBox_default, {
        formField: openBlock,
        opened: {
          click: true
        },
        onChange: handleSettingsChange,
        inputTypeList: getInputTypeList()
      })
    }), proSettingChange && /* @__PURE__ */(0, import_jsx_runtime28.jsxs)("span", {
      className: "admin-pro-tag",
      children: [/* @__PURE__ */(0, import_jsx_runtime28.jsx)("i", {
        className: "adminfont-pro-tag"
      }), "Pro"]
    })]
  });
};
var CanvasEditor_default = CanvasEditor;

// src/components/BlockBuilder.tsx
var import_jsx_runtime29 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var DEFAULT_EMAIL_TEMPLATES = [{
  id: "default",
  name: "Default Template",
  previewText: "Start with a blank email template",
  blocks: []
}];
var BlockBuilderUI = ({
  value,
  onChange,
  field,
  setting = {},
  proSettingChange = () => false,
  name = field?.key,
  canAccess,
  modules,
  onBlocked
}) => {
  const builderContext = field?.context || "form";
  const isEmailBuilder = builderContext === "email";
  const block = content => {
    if (content.proSetting && !ZyraVariable.khali_dabba) {
      onBlocked?.("pro");
      return true;
    }
    if (content.moduleEnabled && !modules.includes(content.moduleEnabled)) {
      onBlocked?.("module", content.moduleEnabled);
      return true;
    }
    if (content.requiredPlugin && !(ZyraVariable.active_plugins || []).includes(content.requiredPlugin)) {
      onBlocked?.("plugin", content);
      return true;
    }
    return false;
  };
  const storedBuilderData = value || setting[name] || {};
  const [emailTemplates, setTemplates] = import_react21.default.useState(() => {
    if (!isEmailBuilder) {
      return [];
    }
    if (field?.emailTemplates?.length) {
      return field.emailTemplates.map(t => ({
        ...t,
        ...storedBuilderData.emailTemplates?.find(st => st.id === t.id)
      }));
    }
    if (storedBuilderData.emailTemplates?.length) {
      return storedBuilderData.emailTemplates;
    }
    return DEFAULT_EMAIL_TEMPLATES;
  });
  const [activeEmailTemplateId, setActiveTemplateId] = import_react21.default.useState(storedBuilderData.activeEmailTemplateId || field?.defaultTemplateId || emailTemplates[0]?.id || DEFAULT_EMAIL_TEMPLATES[0].id);
  const activeEmailTemplate = emailTemplates.find(t => t.id === activeEmailTemplateId);
  const handleBlocksChange = import_react21.default.useCallback(blocks => {
    if (!isEmailBuilder) {
      onChange({
        formfieldlist: blocks
      });
      return;
    }
    setTemplates(prev => {
      const updated = prev.map(t => t.id === activeEmailTemplateId ? {
        ...t,
        blocks
      } : t);
      onChange({
        emailTemplates: updated,
        activeEmailTemplateId
      });
      return updated;
    });
  }, [isEmailBuilder, activeEmailTemplateId, onChange]);
  const handleTemplateSelect = import_react21.default.useCallback(id => {
    if (isEmailBuilder && field?.emailTemplates) {
      const originalTemplate = field.emailTemplates.find(t => t.id === id);
      if (originalTemplate) {
        setTemplates(prev => prev.map(t => t.id === id ? {
          ...t,
          blocks: originalTemplate.blocks
        } : t));
        onChange({
          emailTemplates: emailTemplates.map(t => t.id === id ? {
            ...t,
            blocks: originalTemplate.blocks
          } : t),
          activeEmailTemplateId: id
        });
      }
    }
    setActiveTemplateId(id);
  }, [isEmailBuilder, field?.emailTemplates, emailTemplates, onChange]);
  const initialBlocks = import_react21.default.useMemo(() => {
    if (isEmailBuilder) {
      return activeEmailTemplate?.blocks || [];
    }
    if (Array.isArray(value?.formfieldlist)) {
      return value.formfieldlist;
    }
    if (Array.isArray(setting[name]?.formfieldlist)) {
      return setting[name].formfieldlist;
    }
    return [];
  }, [value, setting, name, isEmailBuilder, activeEmailTemplate]);
  const visibleGroups = field?.visibleGroups || ["registration"];
  return /* @__PURE__ */(0, import_jsx_runtime29.jsx)(CanvasEditor_default, {
    blocks: initialBlocks,
    onChange: value2 => {
      if (!canAccess || block(field)) {
        return;
      }
      handleBlocksChange(value2);
    },
    blockGroups: field?.blockGroups || [],
    visibleGroups,
    groupName: builderContext,
    proSettingChange,
    context: builderContext,
    ...(isEmailBuilder && {
      templates: emailTemplates,
      activeTemplateId: activeEmailTemplateId,
      onTemplateSelect: handleTemplateSelect,
      showTemplatesTab: true
    }),
    availablePlaceholder: field?.availablePlaceholder
  }, activeEmailTemplateId);
};
var BlockBuilder = {
  render: BlockBuilderUI
};
var BlockBuilder_default = BlockBuilder;

// src/components/MapProvider.tsx
var import_react22 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime30 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var DEFAULT_LOCATION = {
  lat: 40.7128,
  lng: -74.006
};
var googleAdapter = {
  async loadScript(apiKey) {
    if (window.google?.maps) {
      return;
    }
    if (document.getElementById("google-map-script")) {
      return;
    }
    const script = document.createElement("script");
    script.id = "google-map-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,marker`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    await new Promise(res => script.onload = res);
  },
  createMap(container, lat, lng, zoom, mapId) {
    return new window.google.maps.Map(container, {
      center: {
        lat,
        lng
      },
      zoom,
      mapId
    });
  },
  createMarker(map, lat, lng, markerType = "default", title) {
    const position = {
      lat,
      lng
    };
    let content;
    if (markerType === "store") {
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.alignItems = "center";
      wrapper.style.gap = "6px";
      const icon = document.createElement("div");
      icon.style.width = "28px";
      icon.style.height = "28px";
      icon.style.borderRadius = "50%";
      icon.style.background = "#4B96F3";
      icon.style.display = "flex";
      icon.style.alignItems = "center";
      icon.style.justifyContent = "center";
      icon.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
      const img = document.createElement("img");
      img.src = "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet.png";
      img.style.width = "16px";
      icon.appendChild(img);
      const label = document.createElement("div");
      label.innerText = title || "";
      label.style.background = "white";
      label.style.padding = "2px 8px";
      label.style.borderRadius = "6px";
      label.style.fontSize = "12px";
      label.style.fontWeight = "500";
      label.style.whiteSpace = "nowrap";
      label.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      content = wrapper;
    } else if (markerType === "default") {
      const img = document.createElement("img");
      img.src = "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png";
      img.style.width = "32px";
      img.style.height = "32px";
      return new google.maps.marker.AdvancedMarkerElement({
        map,
        position,
        content: img,
        gmpDraggable: true
      });
    } else {
      const markerDiv = document.createElement("div");
      markerDiv.style.width = "16px";
      markerDiv.style.height = "16px";
      markerDiv.style.borderRadius = "50%";
      markerDiv.style.background = markerType === "user" ? "#2563eb" : "#ef4444";
      markerDiv.style.border = "2px solid white";
      markerDiv.style.boxShadow = "0 0 4px rgba(0,0,0,0.4)";
      content = markerDiv;
    }
    return new google.maps.marker.AdvancedMarkerElement({
      map,
      position,
      content,
      gmpDraggable: markerType !== "store"
    });
  },
  onDragEnd(marker, cb) {
    marker.addListener("dragend", event => {
      const position = event.latLng;
      cb(position.lat(), position.lng());
    });
  },
  onMapClick(map, cb) {
    map.addListener("click", e => cb(e.latLng.lat(), e.latLng.lng()));
  },
  async reverseGeocode(lat, lng) {
    return new Promise(resolve => {
      new window.google.maps.Geocoder().geocode({
        location: {
          lat,
          lng
        }
      }, (results, status) => resolve(status === "OK" ? results[0] : null));
    });
  },
  extractAddress(result) {
    if (!result) {
      return {};
    }
    const components2 = {};
    result.address_components?.forEach(c => {
      if (c.types.includes("locality")) {
        components2.city = c.long_name;
      }
      if (c.types.includes("administrative_area_level_1")) {
        components2.state = c.long_name;
      }
      if (c.types.includes("country")) {
        components2.country = c.short_name;
      }
      if (c.types.includes("postal_code")) {
        components2.zip = c.long_name;
      }
    });
    return {
      address: result.formatted_address,
      city: components2.city,
      state: components2.state,
      country: components2.country,
      zip: components2.zip,
      location_address: result.formatted_address
    };
  }
};
var mapboxAdapter = {
  async loadScript(apiKey) {
    if (window.mapboxgl) {
      window.mapboxgl.accessToken = apiKey;
      return;
    }
    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v3.18.1/mapbox-gl.js";
    document.head.appendChild(script);
    await new Promise(r => script.onload = r);
    window.mapboxgl.accessToken = apiKey;
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://api.mapbox.com/mapbox-gl-js/v3.18.1/mapbox-gl.css";
    document.head.appendChild(css);
  },
  createMap(container, lat, lng, zoom) {
    return new window.mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/standard",
      center: [lng, lat],
      zoom
    });
  },
  createMarker(map, lat, lng, markerType = "default") {
    const color = markerType === "user" ? "#2563eb" : markerType === "store" ? "#16a34a" : "#ef4444";
    return new window.mapboxgl.Marker({
      draggable: true,
      color
    }).setLngLat([lng, lat]).addTo(map);
  },
  onDragEnd(marker, cb) {
    marker.on("dragend", () => {
      const {
        lat,
        lng
      } = marker.getLngLat();
      cb(lat, lng);
    });
  },
  onMapClick(map, cb) {
    map.on("click", e => cb(e.lngLat.lat, e.lngLat.lng));
  },
  async reverseGeocode(lat, lng) {
    const res = await fetch(`https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lng}&latitude=${lat}&access_token=${window.mapboxgl.accessToken}`);
    const data = await res.json();
    return data.features?.[0];
  },
  extractAddress(result) {
    if (!result) {
      return {};
    }
    const ctx = result.properties?.context || {};
    const address = result.properties?.full_address || result.place_name || "";
    return {
      address,
      city: ctx.place?.name,
      state: ctx.region?.name,
      country: ctx.country?.country_code,
      zip: ctx.postcode?.name,
      location_address: address
    };
  }
};
var PROVIDERS = {
  google_map: googleAdapter,
  mapbox: mapboxAdapter
};
var MapProviderUI = ({
  apiKey,
  mapId,
  locationLat,
  locationLng,
  mapProvider,
  onLocationUpdate,
  placeholderSearch,
  stores
}) => {
  const provider = PROVIDERS[mapProvider] || googleAdapter;
  const containerRef = (0, import_react22.useRef)(null);
  const mapRef = (0, import_react22.useRef)(null);
  const markerRef = (0, import_react22.useRef)(null);
  const storeMarkersRef = (0, import_react22.useRef)([]);
  const inputRef = (0, import_react22.useRef)(null);
  const debounceRef = (0, import_react22.useRef)(null);
  const [query, setQuery] = (0, import_react22.useState)("");
  const [suggestions, setSuggestions] = (0, import_react22.useState)([]);
  const [googleLoaded, setGoogleLoaded] = (0, import_react22.useState)(false);
  const lat = locationLat ? parseFloat(locationLat) : DEFAULT_LOCATION.lat;
  const lng = locationLng ? parseFloat(locationLng) : DEFAULT_LOCATION.lng;
  const updateLocation = async (lat2, lng2) => {
    const result = await provider.reverseGeocode(lat2, lng2);
    const address = provider.extractAddress(result);
    onLocationUpdate({
      ...address,
      location_lat: lat2.toString(),
      location_lng: lng2.toString()
    });
  };
  (0, import_react22.useEffect)(() => {
    if (!containerRef.current) {
      return;
    }
    const init = async () => {
      await provider.loadScript(apiKey);
      if (mapProvider === "google_map") {
        setGoogleLoaded(true);
      }
      const map = provider.createMap(containerRef.current, lat, lng, 12, mapId);
      const marker = provider.createMarker(map, lat, lng, "default");
      mapRef.current = map;
      markerRef.current = marker;
      provider.onDragEnd(marker, updateLocation);
      provider.onMapClick(map, updateLocation);
    };
    init();
  }, []);
  (0, import_react22.useEffect)(() => {
    if (!mapRef.current) {
      return;
    }
    storeMarkersRef.current.forEach(marker => {
      if ("map" in marker) {
        marker.map = null;
      } else if ("remove" in marker) {
        marker.remove();
      }
    });
    storeMarkersRef.current = [];
    stores?.data?.forEach(s => {
      if (!s.location_lat || !s.location_lng) {
        return;
      }
      const marker = provider.createMarker(mapRef.current, parseFloat(s.location_lat), parseFloat(s.location_lng), "store", s.store_name);
      storeMarkersRef.current.push(marker);
    });
  }, [stores, provider]);
  (0, import_react22.useEffect)(() => {
    if (!mapRef.current || !markerRef.current) {
      return;
    }
    const lat2 = parseFloat(locationLat);
    const lng2 = parseFloat(locationLng);
    if (!lat2 || !lng2) {
      return;
    }
    if (mapProvider === "google_map") {
      mapRef.current.setCenter({
        lat: lat2,
        lng: lng2
      });
      markerRef.current.position = {
        lat: lat2,
        lng: lng2
      };
    } else if (mapProvider === "mapbox") {
      mapRef.current.setCenter([lng2, lat2]);
      markerRef.current.setLngLat([lng2, lat2]);
    }
  }, [locationLat, locationLng]);
  (0, import_react22.useEffect)(() => {
    if (mapProvider !== "google_map") {
      return;
    }
    if (!googleLoaded) {
      return;
    }
    if (!inputRef.current) {
      return;
    }
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["geocode"],
      fields: ["formatted_address", "geometry", "address_components", "name"]
    });
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry?.location) {
        return;
      }
      const lat2 = place.geometry.location.lat();
      const lng2 = place.geometry.location.lng();
      if (mapRef.current && markerRef.current) {
        mapRef.current.setCenter({
          lat: lat2,
          lng: lng2
        });
        markerRef.current.position = {
          lat: lat2,
          lng: lng2
        };
        mapRef.current.setZoom(17);
      }
      const address = googleAdapter.extractAddress(place);
      onLocationUpdate({
        ...address,
        location_lat: lat2.toString(),
        location_lng: lng2.toString()
      });
    });
  }, [mapProvider, googleLoaded]);
  const sessionToken = (0, import_react22.useRef)(Math.random().toString(36).substring(2)).current;
  const handleMapboxSearch = text => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const res = await fetch(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${encodeURIComponent(text)}&access_token=${apiKey}&session_token=${sessionToken}`);
      const data = await res.json();
      setSuggestions(data.suggestions || []);
    }, 300);
  };
  const selectMapboxSuggestion = async suggestion => {
    const res = await fetch(`https://api.mapbox.com/search/searchbox/v1/retrieve/${suggestion.mapbox_id}?access_token=${apiKey}&session_token=${sessionToken}`);
    const data = await res.json();
    const feature = data.features?.[0];
    if (!feature) {
      return;
    }
    const [lng2, lat2] = feature.geometry.coordinates;
    if (mapRef.current && markerRef.current) {
      markerRef.current.setLngLat([lng2, lat2]);
      mapRef.current.setCenter([lng2, lat2]);
      mapRef.current.setZoom(17);
    }
    updateLocation(lat2, lng2);
    setSuggestions([]);
    setQuery(feature.properties?.full_address || suggestion.name);
  };
  return /* @__PURE__ */(0, import_jsx_runtime30.jsxs)("div", {
    className: "map-wrapper",
    style: {
      position: "relative"
    },
    children: [/* @__PURE__ */(0, import_jsx_runtime30.jsxs)("div", {
      className: "input-field",
      style: {
        position: "absolute",
        top: "3.83rem",
        left: "0.625rem",
        zIndex: 9
      },
      children: [/* @__PURE__ */(0, import_jsx_runtime30.jsx)("input", {
        ref: inputRef,
        defaultValue: query,
        placeholder: placeholderSearch,
        className: "basic-input",
        onChange: e => {
          setQuery(e.target.value);
          if (mapProvider === "mapbox") {
            handleMapboxSearch(e.target.value);
          }
        }
      }), suggestions.length > 0 && /* @__PURE__ */(0, import_jsx_runtime30.jsx)("ul", {
        children: suggestions.map(s => /* @__PURE__ */(0, import_jsx_runtime30.jsx)("li", {
          onClick: () => selectMapboxSuggestion(s),
          children: s.name
        }, s.mapbox_id))
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime30.jsx)("div", {
      ref: containerRef,
      className: "map",
      style: {
        width: "100%",
        height: "25rem"
      }
    })]
  });
};
var MapProvider = {
  render: ({
    field,
    value,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime30.jsx)(MapProviderUI, {
    apiKey: field.apiKey,
    mapId: field.mapId,
    locationAddress: value?.location_address || "",
    locationLat: value?.location_lat || "",
    locationLng: value?.location_lng || "",
    isUserLocation: field.isUserLocation,
    onLocationUpdate: onChange,
    placeholderSearch: field.placeholderSearch || "Search location",
    stores: field.stores || null,
    mapProvider: field.type
  })
};
var MapProvider_default = MapProvider;

// src/components/Log.tsx
var import_react24 = __webpack_require__(/*! react */ "react");
var import_axios5 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));

// src/components/UI/CopyToClipboard.tsx
var import_react23 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime31 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var CopyToClipboardUI = ({
  text,
  variant = "code",
  copyButtonLabel = "Copy",
  copiedLabel = "Copied!",
  onCopy
}) => {
  const [copied, setCopied] = (0, import_react23.useState)(false);
  const handleCopy = async () => {
    try {
      let valueToCopy = text;
      if (onCopy) {
        const result = onCopy();
        if (typeof result === "string") {
          valueToCopy = result;
        }
      }
      if (!valueToCopy) {
        return;
      }
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
  if (variant === "button") {
    return /* @__PURE__ */(0, import_jsx_runtime31.jsx)("div", {
      className: "buttons-wrapper",
      children: /* @__PURE__ */(0, import_jsx_runtime31.jsxs)("div", {
        className: "admin-btn btn-purple",
        onClick: handleCopy,
        children: [/* @__PURE__ */(0, import_jsx_runtime31.jsx)("i", {
          className: "adminfont-vendor-form-copy"
        }), /* @__PURE__ */(0, import_jsx_runtime31.jsx)("span", {
          className: "copy-success",
          children: copied ? copiedLabel : copyButtonLabel
        })]
      })
    });
  }
  if (variant === "icon") {
    return /* @__PURE__ */(0, import_jsx_runtime31.jsx)(Tooltip_default, {
      className: copied ? "copied" : "",
      text: copied ? copiedLabel : copyButtonLabel,
      children: /* @__PURE__ */(0, import_jsx_runtime31.jsx)("i", {
        className: copied ? "adminfont-check" : "adminfont-vendor-form-copy",
        onClick: handleCopy
      })
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime31.jsxs)("div", {
    className: "copy-to-clipboard",
    children: [/* @__PURE__ */(0, import_jsx_runtime31.jsx)("code", {
      children: text
    }), /* @__PURE__ */(0, import_jsx_runtime31.jsx)(Tooltip_default, {
      className: copied ? "copied" : "",
      text: copied ? copiedLabel : copyButtonLabel,
      children: /* @__PURE__ */(0, import_jsx_runtime31.jsx)("i", {
        className: copied ? "adminfont-check" : "adminfont-vendor-form-copy",
        onClick: handleCopy
      })
    })]
  });
};
var CopyToClipboard = {
  render: ({
    field
  }) => /* @__PURE__ */(0, import_jsx_runtime31.jsx)(CopyToClipboardUI, {
    text: field.text,
    variant: field.variant || "code",
    copyButtonLabel: field.copyButtonLabel,
    copiedLabel: field.copiedLabel,
    onCopy: field.onCopy
  }),
  validate: () => null
};
var CopyToClipboard_default = CopyToClipboard;

// src/components/Log.tsx
var import_jsx_runtime32 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var LogUI = ({
  apiLink,
  downloadFileName,
  downloadBtnText = "Download",
  copyBtnText = "Copy",
  deleteBtnText = "Delete"
}) => {
  const [logData, setLogData] = (0, import_react24.useState)([]);
  const [copied, setCopied] = (0, import_react24.useState)(false);
  const logRegex = /^([^:]+:[^:]+:[^:]+):(.*)$/;
  (0, import_react24.useEffect)(() => {
    (0, import_axios5.default)({
      url: getApiLink(ZyraVariable, apiLink),
      method: "GET",
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      },
      params: {
        logcount: 100
      }
    }).then(response => {
      setLogData(response.data);
    });
  }, [apiLink]);
  const handleDownloadLog = event => {
    event.preventDefault();
    const fileName = downloadFileName;
    (0, import_axios5.default)({
      url: getApiLink(ZyraVariable, `${apiLink}/download`),
      method: "GET",
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      },
      params: {
        file: fileName
      },
      responseType: "blob"
    }).then(response => {
      const blob = new Blob([response.data], {
        type: response.headers["content-type"]
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(error => console.error("Error downloading file:", error));
  };
  const handleClearLog = event => {
    event.preventDefault();
    (0, import_axios5.default)({
      url: getApiLink(ZyraVariable, apiLink),
      method: "DELETE",
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      },
      params: {
        logcount: 100
      }
    }).then(() => {
      setLogData([]);
    });
  };
  const handleCopyToClipboard = event => {
    event.preventDefault();
    const logText = logData.map(log => {
      const match = log.match(logRegex);
      return match ? `${match[1].trim()} : ${match[2].trim()}` : log;
    }).join("\n");
    navigator.clipboard.writeText(logText).then(() => setCopied(true)).catch(error => {
      setCopied(false);
      console.error("Error copying logs to clipboard:", error);
    });
    setTimeout(() => setCopied(false), 1e4);
  };
  return /* @__PURE__ */(0, import_jsx_runtime32.jsxs)("div", {
    className: "section-log-container",
    children: [/* @__PURE__ */(0, import_jsx_runtime32.jsxs)("div", {
      className: "buttons-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime32.jsx)(ButtonInputUI, {
        position: "left",
        buttons: [{
          icon: "import",
          text: downloadBtnText,
          color: "purple",
          onClick: e => {
            handleDownloadLog?.(e);
          }
        }]
      }), /* @__PURE__ */(0, import_jsx_runtime32.jsx)(ButtonInputUI, {
        position: "left",
        buttons: [{
          icon: "delete",
          text: deleteBtnText,
          color: "red",
          onClick: e => {
            handleClearLog?.(e);
          }
        }]
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime32.jsxs)("div", {
      className: "log-container-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime32.jsxs)("div", {
        className: "wrapper-header",
        children: [/* @__PURE__ */(0, import_jsx_runtime32.jsxs)("div", {
          className: "log-viewer-text",
          children: [ZyraVariable.tab_name, " - log viewer"]
        }), /* @__PURE__ */(0, import_jsx_runtime32.jsx)(CopyToClipboardUI, {
          variant: "button",
          copyButtonLabel: copyBtnText,
          copiedLabel: "Copied",
          onCopy: handleCopyToClipboard
        })]
      }), /* @__PURE__ */(0, import_jsx_runtime32.jsx)("div", {
        className: "wrapper-body",
        children: logData.map((log, index) => {
          const match = log.match(logRegex);
          if (match) {
            return /* @__PURE__ */(0, import_jsx_runtime32.jsxs)("div", {
              className: "log-row",
              children: [/* @__PURE__ */(0, import_jsx_runtime32.jsxs)("span", {
                className: "log-creation-date",
                children: [match[1].trim(), " :"]
              }), /* @__PURE__ */(0, import_jsx_runtime32.jsx)("span", {
                className: "log-details",
                children: match[2].trim()
              })]
            }, index);
          }
          return null;
        })
      })]
    })]
  });
};
var Log = {
  render: ({
    field
  }) => /* @__PURE__ */(0, import_jsx_runtime32.jsx)(LogUI, {
    apiLink: String(field.apiLink),
    downloadFileName: String(field.fileName),
    downloadBtnText: field.downloadBtnText,
    copyBtnText: field.copyBtnText,
    deleteBtnText: field.deleteBtnText
  }),
  validate: () => {
    return null;
  }
};
var Log_default = Log;

// src/components/MultiInputTable.tsx
var import_react25 = __toESM(__webpack_require__(/*! react */ "react"));
var import_jsx_runtime33 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
function isBlocked2(opt, modules, onBlocked) {
  if (opt.proSetting && !ZyraVariable?.khali_dabba) {
    onBlocked?.("pro");
    return true;
  }
  if (opt.moduleEnabled && !modules.includes(opt.moduleEnabled)) {
    onBlocked?.("module", opt.moduleEnabled);
    return true;
  }
  return false;
}
var TableCell = ({
  type,
  field,
  fieldKey,
  rowKey,
  column,
  rowLabel,
  value,
  disabled,
  onChange,
  modules,
  onBlocked
}) => {
  const comp = FIELD_REGISTRY[type];
  if (!comp) {
    return /* @__PURE__ */(0, import_jsx_runtime33.jsx)("td", {
      children: "\u2014"
    }, fieldKey);
  }
  const Render = comp.render;
  const fieldConfig = {
    ...column,
    // All column props pass through
    ...field,
    key: fieldKey,
    type,
    label: column.label ?? rowLabel,
    rowKey,
    // Row context
    rowLabel,
    disabled
  };
  return /* @__PURE__ */(0, import_jsx_runtime33.jsx)(Render, {
    field: fieldConfig,
    value,
    modules,
    onBlocked,
    canAccess: !disabled,
    onChange: newValue => {
      if (isBlocked2(fieldConfig, modules, onBlocked)) {
        return;
      }
      onChange(fieldKey, newValue);
    }
  });
};
var MultiInputTableUI = ({
  rows,
  columns,
  setting,
  visibilityContext,
  onChange,
  storeTabSetting,
  proSetting,
  modules,
  onBlocked,
  khali_dabba
}) => {
  const [openGroup, setOpenGroup] = (0, import_react25.useState)(() => {
    if (!Array.isArray(rows) && Object.keys(rows).length > 0) {
      return Object.keys(rows)[0];
    }
    return null;
  });
  const context = visibilityContext ?? setting;
  const isColumnVisible = col => {
    if (!col.visibleWhen) {
      return true;
    }
    const {
      key,
      value
    } = col.visibleWhen;
    if (Array.isArray(value)) {
      return value.includes(context?.[key]);
    }
    return context?.[key] === value;
  };
  const visibleColumns = columns.filter(isColumnVisible);
  const renderCell2 = (column, row, rowKey, rowLabel, isRowActive) => {
    const fields = row.fields ?? column.fields ?? [{
      key: column.key,
      type: "checkbox"
    }];
    return /* @__PURE__ */(0, import_jsx_runtime33.jsx)("td", {
      children: /* @__PURE__ */(0, import_jsx_runtime33.jsx)("div", {
        className: "multi-field-cell",
        children: fields.map(field => {
          if (column.type == "checkbox") {
            const roleKey = column.key;
            const currentValues = setting["role_access_table"]?.[roleKey] ?? setting[roleKey] ?? [];
            const checked = currentValues.includes(rowKey);
            const handleCheckboxChange = e => {
              const newValues = e.target.checked ? [...currentValues, rowKey] : currentValues.filter(k => k !== rowKey);
              onChange(roleKey, newValues);
            };
            return /* @__PURE__ */(0, import_jsx_runtime33.jsx)("input", {
              type: "checkbox",
              checked,
              disabled: !isRowActive,
              onChange: e => {
                if (isBlocked2(column, modules, onBlocked)) {
                  return;
                }
                handleCheckboxChange(e);
              }
            }, `${column.key}_${field.key}_${rowKey}`);
          } else {
            const isCustomField = row.fields || column.fields;
            const fieldKey = isCustomField ? `${column.key}_${field.key}_${row.key}` : `${column.key}`;
            return /* @__PURE__ */(0, import_jsx_runtime33.jsx)(TableCell, {
              type: field.type,
              field,
              fieldKey,
              rowKey,
              column,
              rowLabel,
              value: setting[fieldKey] ?? [],
              disabled: !isRowActive,
              onChange,
              modules,
              onBlocked
            }, fieldKey);
          }
        })
      })
    }, `${column.key}_${rowKey}`);
  };
  const renderFlatRows = flatRows => flatRows.map(row => {
    const isRowActive = row.enabledKey ? setting[row.enabledKey]?.includes(row.key) ?? false : true;
    const handleRowToggle = checked => {
      const current = setting[row.enabledKey] ?? [];
      onChange(row.enabledKey, checked ? [...current, row.key] : current.filter(k => k !== row.key));
    };
    return /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("tr", {
      className: row.enabledKey && !isRowActive ? "row-disabled" : "",
      children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("td", {
        children: row.enabledKey ? /* @__PURE__ */(0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, {
          children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("input", {
            type: "checkbox",
            id: `row-toggle_${row.key}`,
            checked: isRowActive,
            onChange: e => handleRowToggle(e.target.checked)
          }), /* @__PURE__ */(0, import_jsx_runtime33.jsx)("span", {
            children: row.label
          })]
        }) : row.label
      }), !isRowActive ? /* @__PURE__ */(0, import_jsx_runtime33.jsx)("td", {
        colSpan: visibleColumns.length,
        children: /* @__PURE__ */(0, import_jsx_runtime33.jsx)("span", {
          className: "red-color",
          children: row.inactiveMessage ?? "Inactive"
        })
      }) : columns.filter(isColumnVisible).map(col => renderCell2(col, row, row.key, row.label, true))]
    }, row.key);
  });
  const renderGroupedRows = groupedRows => {
    return Object.entries(groupedRows).map(([groupKey, group]) => {
      const isOpen = openGroup === groupKey;
      return /* @__PURE__ */(0, import_jsx_runtime33.jsxs)(import_react25.default.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("div", {
          className: "toggle-header",
          onClick: () => setOpenGroup(isOpen ? null : groupKey),
          children: /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("div", {
            className: "header-title",
            children: [group.label, /* @__PURE__ */(0, import_jsx_runtime33.jsx)("i", {
              className: `adminfont-${isOpen ? "keyboard-arrow-down" : "pagination-right-arrow"}`
            })]
          })
        }), isOpen && Object.entries(group.capability).map(([capKey, capLabel]) => {
          const hasExists = Object.values(storeTabSetting).some(arr => arr?.includes(capKey));
          return /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("tr", {
            children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("td", {
              children: capLabel
            }), columns.filter(isColumnVisible).map(col => renderCell2(col, group, capKey, capLabel, hasExists))]
          }, capKey);
        })]
      }, groupKey);
    });
  };
  return /* @__PURE__ */(0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, {
    children: [proSetting && !khali_dabba && /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("span", {
      className: "admin-pro-tag",
      children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("i", {
        className: "adminfont-pro-tag"
      }), " Pro"]
    }), /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("table", {
      className: "multi-input-table",
      children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("thead", {
        children: /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("tr", {
          children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("th", {}), columns.filter(isColumnVisible).map(column => /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("th", {
            children: [column.label, column.proSetting && !khali_dabba && /* @__PURE__ */(0, import_jsx_runtime33.jsxs)("span", {
              className: "admin-pro-tag",
              children: [/* @__PURE__ */(0, import_jsx_runtime33.jsx)("i", {
                className: "adminfont-pro-tag"
              }), " Pro"]
            })]
          }, column.key))]
        })
      }), /* @__PURE__ */(0, import_jsx_runtime33.jsx)("tbody", {
        children: Array.isArray(rows) ? renderFlatRows(rows) : renderGroupedRows(rows)
      })]
    })]
  });
};
var MultiInputTable = {
  render: ({
    field,
    value,
    onChange,
    canAccess,
    modules,
    settings,
    onBlocked,
    storeTabSetting
  }) => {
    const currentSetting = value && typeof value === "object" && !Array.isArray(value) ? value : {};
    const handleChange = (subKeyOrBatch, subVal) => {
      if (!canAccess) {
        return;
      }
      const patch = typeof subKeyOrBatch === "object" ? subKeyOrBatch : {
        [subKeyOrBatch]: subVal
      };
      onChange({
        ...currentSetting,
        ...patch
      });
    };
    const effectiveSetting = field.storeSetting ? currentSetting : settings;
    return /* @__PURE__ */(0, import_jsx_runtime33.jsx)(MultiInputTableUI, {
      khali_dabba: ZyraVariable?.khali_dabba ?? false,
      rows: field.rows ?? [],
      columns: field.columns ?? [],
      setting: effectiveSetting,
      visibilityContext: settings,
      storeTabSetting: storeTabSetting ?? {},
      proSetting: field.proSetting ?? false,
      modules: modules ?? [],
      onBlocked,
      onChange: handleChange
    });
  },
  validate: () => null
};
var MultiInputTable_default = MultiInputTable;

// src/components/NestedComponent.tsx
var import_react26 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime34 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var NestedComponentUI = ({
  id,
  fields = [],
  value = [],
  onChange,
  addButtonLabel = "Add",
  deleteButtonLabel = "Delete",
  single = false,
  wrapperClass = "",
  canAccess,
  mapping = false
}) => {
  const [rows, setRows] = (0, import_react26.useState)([]);
  (0, import_react26.useEffect)(() => {
    if (single) {
      setRows(value.length ? [value[0]] : [{}]);
    } else {
      setRows(value.length ? value : [{}]);
    }
  }, [value, single]);
  function updateAndSave(updated) {
    setRows(updated);
    onChange(updated);
  }
  function handleChange(rowIndex, key, value2) {
    const updated = rows.map((row, i) => i === rowIndex ? {
      ...(row ?? {}),
      [key]: value2
    } : row);
    onChange(updated);
  }
  const isFieldActive = (field, row, rowIndex) => {
    if (rowIndex === 0 && field.skipFirstRow) {
      return false;
    }
    if (!field.dependent) {
      return true;
    }
    const depVal = row?.[field.dependent.key];
    const depActive = Array.isArray(depVal) ? depVal.includes(field.dependent.value) : depVal === field.dependent.value;
    return field.dependent.set ? depActive : !depActive;
  };
  function isLastRowComplete() {
    if (!rows.length) {
      return true;
    }
    const lastRow = rows[rows.length - 1] ?? {};
    return fields.every(field => {
      if (field.skipFirstRow && rows.length === 1) {
        return true;
      }
      if (!field.key) {
        return true;
      }
      if (!isFieldActive(field, lastRow, rows.length - 1)) {
        return true;
      }
      const val = lastRow[field.key];
      return val !== "";
    });
  }
  function canAddMoreRows() {
    if (!mapping) {
      return true;
    }
    const selectField = fields.find(field => field.type === "select");
    if (!selectField?.options) {
      return true;
    }
    return rows.length < selectField.options.length;
  }
  function addRow() {
    if (single) {
      return;
    }
    if (!isLastRowComplete() || !canAddMoreRows()) {
      return;
    }
    updateAndSave([...rows, {}]);
  }
  function removeRow(index) {
    if (!single) {
      updateAndSave(rows.filter((_, i) => i !== index));
    }
  }
  function getMappedField(field, row, rowIndex) {
    if (field.type !== "select" || !field.options) {
      return field;
    }
    const usedValues = rows.filter((_, index) => index !== rowIndex).map(item => item?.[field.key]);
    const updatedField = {
      ...field,
      options: field.options.filter(option => !usedValues.includes(option.value) || option.value === row?.[field.key])
    };
    return updatedField;
  }
  function renderField(field, row, rowIndex) {
    if (mapping) {
      field = getMappedField(field, row, rowIndex);
    }
    const fieldComponent = FIELD_REGISTRY[field.type];
    if (field.type === "checklist") {
      return /* @__PURE__ */(0, import_jsx_runtime34.jsx)(ItemList_default, {
        className: "checklist",
        items: field.options
      });
    }
    if (!fieldComponent) {
      return null;
    }
    const Render = fieldComponent.render;
    const fieldValue = row?.[field.key];
    const handleInternalChange = val => {
      handleChange(rowIndex, field.key, val);
      return;
    };
    return /* @__PURE__ */(0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, {
      children: [!(rowIndex === 0) && field.label && /* @__PURE__ */(0, import_jsx_runtime34.jsx)("label", {
        children: field.label
      }), /* @__PURE__ */(0, import_jsx_runtime34.jsx)(Render, {
        field,
        value: fieldValue,
        onChange: handleInternalChange,
        canAccess
      })]
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime34.jsx)("div", {
    className: "nested-wrapper",
    id,
    children: rows.map((row, rowIndex) => /* @__PURE__ */(0, import_jsx_runtime34.jsxs)("div", {
      className: `nested-row ${single ? "" : "multiple"} ${wrapperClass}`,
      children: [fields.map(field => {
        if (rowIndex === 0 && field.skipFirstRow) {
          return null;
        }
        if (!isFieldActive(field, row, rowIndex)) {
          return null;
        }
        return /* @__PURE__ */(0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, {
          children: [field.beforeElement && renderField(field.beforeElement, row, rowIndex), renderField(field, row, rowIndex), field.afterElement && renderField(field.afterElement, row, rowIndex)]
        });
      }), !single && /* @__PURE__ */(0, import_jsx_runtime34.jsx)(ButtonInputUI, {
        buttons: [
        //  Add button only on last row
        ...(rowIndex === rows.length - 1 && canAddMoreRows() ? [{
          icon: "plus",
          color: "purple",
          text: addButtonLabel,
          onClick: addRow,
          disabled: !isLastRowComplete()
        }] : []),
        // Delete button on all rows except row 0
        ...(rows.length > 1 && rowIndex > 0 ? [{
          icon: "delete",
          text: deleteButtonLabel,
          color: "red",
          onClick: () => removeRow(rowIndex)
        }] : [])]
      })]
    }, `nested-row-${rowIndex}`))
  });
};
var NestedComponent = {
  render: ({
    field,
    value,
    onChange,
    canAccess
  }) => /* @__PURE__ */(0, import_jsx_runtime34.jsx)(NestedComponentUI, {
    id: field.key,
    label: field.label,
    mapping: field.mapping,
    fields: field.nestedFields ?? [],
    value,
    wrapperClass: field.rowClass,
    addButtonLabel: field.addButtonLabel,
    deleteButtonLabel: field.deleteButtonLabel,
    single: field.single,
    onChange: val => {
      if (!canAccess) {
        return;
      }
      onChange(val);
    },
    canAccess
  }, field.key),
  validate: () => {
    return null;
  }
};
var NestedComponent_default = NestedComponent;

// src/components/PrePostText.tsx
var import_jsx_runtime35 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var PrePostTextUI = ({
  textType,
  preText,
  postText
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, {
    children: [textType == "pre" && /* @__PURE__ */(0, import_jsx_runtime35.jsx)("span", {
      className: "before",
      children: preText
    }), textType == "post" && /* @__PURE__ */(0, import_jsx_runtime35.jsx)("span", {
      className: "after",
      children: postText
    })]
  });
};
var PrePostText = {
  render: ({
    field
  }) => /* @__PURE__ */(0, import_jsx_runtime35.jsx)(PrePostTextUI, {
    type: field.type,
    textType: field.textType,
    preText: field.preText,
    postText: field.postText
  }),
  validate: (field, value) => {
    if (field.required && !value?.[field.key]) {
      return `${field.label} is required`;
    }
    return null;
  }
};
var PrePostText_default = PrePostText;

// src/components/Recaptcha.tsx
var import_jsx_runtime36 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var RecaptchaUI = ({
  formField
}) => {
  if (!formField?.sitekey) {
    return /* @__PURE__ */(0, import_jsx_runtime36.jsx)("div", {
      className: "main-input-wrapper recaptcha",
      children: "Please enter the reCAPTCHA site key in the field settings to enable reCAPTCHA."
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime36.jsx)("div", {
    className: "main-input-wrapper recaptcha",
    children: "reCAPTCHA has been successfully added to the form."
  });
};
var Recaptcha = {
  render: RecaptchaUI,
  validate: (field, value) => {
    if (field.required && !value?.[field.key]) {
      return `${field.label} is required`;
    }
    return null;
  }
};
var Recaptcha_default = Recaptcha;

// src/components/Section.tsx
var import_jsx_runtime37 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var SectionUI = ({
  wrapperClass = "",
  title,
  desc,
  withoutBorder = false
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime37.jsxs)("div", {
    className: `divider-section ${!title ? "border-only" : ""} ${withoutBorder ? "without-border" : ""} ${wrapperClass}`,
    children: [title && /* @__PURE__ */(0, import_jsx_runtime37.jsx)("div", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), desc && /* @__PURE__ */(0, import_jsx_runtime37.jsx)("span", {
      className: "desc",
      children: desc
    })]
  });
};
var Section = {
  render: ({
    field
  }) => /* @__PURE__ */(0, import_jsx_runtime37.jsx)(SectionUI, {
    wrapperClass: field.wrapperClass,
    title: field.title,
    desc: field.desc,
    withoutBorder: field.withoutBorder
  }),
  validate: () => null
};
var Section_default = Section;

// src/components/ShortCodeTable.tsx
var import_jsx_runtime38 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var ShortCodeTableUI = props => {
  const {
    options,
    optionLabel
  } = props;
  const headers2 = optionLabel;
  return /* @__PURE__ */(0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, {
    children: options.map((option, index) => /* @__PURE__ */(0, import_jsx_runtime38.jsxs)("div", {
      className: "shortcode-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime38.jsxs)("div", {
        className: "shortcode-details",
        children: [/* @__PURE__ */(0, import_jsx_runtime38.jsxs)("div", {
          className: "shortcode-title",
          children: [option.name, " -", " ", /* @__PURE__ */(0, import_jsx_runtime38.jsx)(CopyToClipboardUI, {
            text: option.label
          })]
        }), /* @__PURE__ */(0, import_jsx_runtime38.jsx)("div", {
          className: "des",
          children: option.desc
        })]
      }), option.arguments && option.arguments.length > 0 ? /* @__PURE__ */(0, import_jsx_runtime38.jsx)("div", {
        className: "shortcode-table",
        children: /* @__PURE__ */(0, import_jsx_runtime38.jsxs)("table", {
          children: [/* @__PURE__ */(0, import_jsx_runtime38.jsx)("thead", {
            children: /* @__PURE__ */(0, import_jsx_runtime38.jsx)("tr", {
              children: headers2.map((header, idx) => /* @__PURE__ */(0, import_jsx_runtime38.jsx)("th", {
                children: header
              }, idx))
            })
          }), /* @__PURE__ */(0, import_jsx_runtime38.jsx)("tbody", {
            children: option.arguments.map((arg, index2) => /* @__PURE__ */(0, import_jsx_runtime38.jsxs)("tr", {
              children: [/* @__PURE__ */(0, import_jsx_runtime38.jsx)("td", {
                children: /* @__PURE__ */(0, import_jsx_runtime38.jsx)("b", {
                  children: arg.attribute
                })
              }), /* @__PURE__ */(0, import_jsx_runtime38.jsx)("td", {
                children: arg.description
              }), /* @__PURE__ */(0, import_jsx_runtime38.jsx)("td", {
                children: arg.accepted
              }), /* @__PURE__ */(0, import_jsx_runtime38.jsx)("td", {
                children: arg.default
              })]
            }, index2))
          })]
        })
      }) : /* @__PURE__ */(0, import_jsx_runtime38.jsx)("div", {
        className: "no-args-message",
        children: "No arguments required"
      })]
    }, option.label || index))
  });
};
var ShortCodeTable = {
  render: ({
    field
  }) => /* @__PURE__ */(0, import_jsx_runtime38.jsx)(ShortCodeTableUI, {
    icon: field.icon,
    options: Array.isArray(field.options) ? field.options : [],
    optionLabel: field.optionLabel
  }, field.key),
  validate: () => null
};
var ShortCodeTable_default = ShortCodeTable;

// src/components/SystemInfo.tsx
var import_react27 = __webpack_require__(/*! react */ "react");
var import_axios6 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));
var import_jsx_runtime39 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var SystemInfoUI = ({
  apiLink,
  copyButtonLabel = "Copy System Info",
  copiedLabel = "Copied!"
}) => {
  const [data, setData] = (0, import_react27.useState)(null);
  const [openKeys, setOpenKeys] = (0, import_react27.useState)([]);
  (0, import_react27.useEffect)(() => {
    (0, import_axios6.default)({
      url: getApiLink(ZyraVariable, apiLink),
      method: "GET",
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      }
    }).then(response => {
      setData(response.data);
    });
  }, [apiLink]);
  const toggleSection = key => {
    setOpenKeys(prev => prev.includes(key) ? [] : [key]);
  };
  const formatSystemInfo = info => {
    let output = "";
    Object.values(info).forEach(section => {
      output += `=== ${section.label} ===
`;
      Object.values(section.fields).forEach(field => {
        output += `${field.label}: ${field.value}
`;
      });
      output += "\n";
    });
    return output.trim();
  };
  if (!data) {
    return /* @__PURE__ */(0, import_jsx_runtime39.jsxs)("div", {
      className: "system-info",
      children: [/* @__PURE__ */(0, import_jsx_runtime39.jsx)("div", {
        className: "buttons-wrapper",
        children: /* @__PURE__ */(0, import_jsx_runtime39.jsx)("div", {
          className: "admin-btn btn-purple",
          children: /* @__PURE__ */(0, import_jsx_runtime39.jsx)(Skeleton_default, {
            width: 6
          })
        })
      }), Array.from({
        length: 10
      }).map((_, index) => /* @__PURE__ */(0, import_jsx_runtime39.jsx)("div", {
        className: "system-item",
        children: /* @__PURE__ */(0, import_jsx_runtime39.jsxs)("div", {
          className: "name",
          children: [/* @__PURE__ */(0, import_jsx_runtime39.jsx)(Skeleton_default, {
            width: 11.25
          }), /* @__PURE__ */(0, import_jsx_runtime39.jsx)("i", {
            className: "adminfont-pagination-right-arrow"
          })]
        })
      }, index))]
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime39.jsxs)("div", {
    className: "system-info",
    children: [/* @__PURE__ */(0, import_jsx_runtime39.jsx)(CopyToClipboardUI, {
      variant: "button",
      copyButtonLabel,
      copiedLabel,
      onCopy: () => {
        if (!data) {
          return "";
        }
        return formatSystemInfo(data);
      }
    }), Object.entries(data).map(([key, section]) => {
      const isOpen = openKeys.includes(key);
      return /* @__PURE__ */(0, import_jsx_runtime39.jsxs)("div", {
        className: "system-item",
        children: [/* @__PURE__ */(0, import_jsx_runtime39.jsxs)("div", {
          onClick: () => toggleSection(key),
          className: "name",
          children: [/* @__PURE__ */(0, import_jsx_runtime39.jsx)("span", {
            children: section.label
          }), /* @__PURE__ */(0, import_jsx_runtime39.jsx)("i", {
            className: isOpen ? "adminfont-keyboard-arrow-down" : "adminfont-pagination-right-arrow "
          })]
        }), isOpen && /* @__PURE__ */(0, import_jsx_runtime39.jsx)("div", {
          className: "content",
          children: /* @__PURE__ */(0, import_jsx_runtime39.jsx)("table", {
            children: /* @__PURE__ */(0, import_jsx_runtime39.jsx)("tbody", {
              children: Object.entries(section.fields).map(([fieldKey, field]) => /* @__PURE__ */(0, import_jsx_runtime39.jsxs)("tr", {
                children: [/* @__PURE__ */(0, import_jsx_runtime39.jsx)("td", {
                  className: "field-label",
                  children: field.label
                }), /* @__PURE__ */(0, import_jsx_runtime39.jsx)("td", {
                  className: "field-value",
                  children: field.value
                })]
              }, fieldKey))
            })
          })
        })]
      }, key);
    })]
  });
};
var SystemInfo = {
  render: ({
    field,
    appLocalizer
  }) => /* @__PURE__ */(0, import_jsx_runtime39.jsx)(SystemInfoUI, {
    apiLink: field.apiLink,
    appLocalizer,
    copyButtonLabel: field.copyButtonLabel,
    copiedLabel: field.copiedLabel
  }),
  validate: () => null
};
var SystemInfo_default = SystemInfo;

// src/components/RandomInputKeyGenerator.tsx
var import_jsx_runtime40 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var generateRandomKey = len => Array.from({
  length: len
}, () => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62))).join("");
var RandomInputKeyGeneratorUI = ({
  value = "",
  length = 8,
  onChange
}) => {
  const handleGenerate = () => {
    const key = generateRandomKey(length);
    onChange(key);
  };
  const handleDelete = () => {
    onChange("");
  };
  if (!value) {
    return /* @__PURE__ */(0, import_jsx_runtime40.jsx)(ButtonInputUI, {
      buttons: [{
        icon: "star-icon",
        text: "Generate",
        onClick: handleGenerate
      }]
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime40.jsx)(CopyToClipboardUI, {
      text: value,
      variant: "icon",
      copyButtonLabel: "Copy",
      copiedLabel: "Copied!"
    }), /* @__PURE__ */(0, import_jsx_runtime40.jsx)("div", {
      className: "clear-btn",
      onClick: handleDelete,
      children: /* @__PURE__ */(0, import_jsx_runtime40.jsx)("i", {
        className: "adminfont-delete color-red"
      })
    })]
  });
};
var RandomInputKeyGenerator = {
  render: ({
    field,
    value,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime40.jsx)(RandomInputKeyGeneratorUI, {
    value,
    length: field.length,
    onChange
  })
};
var RandomInputKeyGenerator_default = RandomInputKeyGenerator;

// src/components/EmailsInput.tsx
var import_react28 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime41 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var EmailsInputUI = (0, import_react28.forwardRef)(({
  mode = "multiple",
  max,
  value = [],
  primary = "",
  enablePrimary = true,
  placeholder = "Enter email...",
  onChange
}, ref) => {
  const [list, setList] = (0, import_react28.useState)(value);
  const [primaryEmail, setPrimaryEmail] = (0, import_react28.useState)(enablePrimary ? primary : "");
  const [inputValue, setInputValue] = (0, import_react28.useState)("");
  const inputRef = (0, import_react28.useRef)(null);
  const isMultiple = mode === "multiple";
  const hasEmail = list.length > 0;
  (0, import_react28.useEffect)(() => {
    setList(value);
  }, [value]);
  (0, import_react28.useEffect)(() => {
    setPrimaryEmail(enablePrimary ? primary : "");
  }, [primary, enablePrimary]);
  (0, import_react28.useImperativeHandle)(ref, () => inputRef.current);
  const isValidEmail = (0, import_react28.useCallback)(email => /^\S+@\S+\.([a-zA-Z]{2,})$/.test(email), []);
  const addEmail = (0, import_react28.useCallback)(email => {
    email = email.trim();
    if (!email || !isValidEmail(email) || list.includes(email) || max && list.length >= max) {
      return;
    }
    const updated = [...list, email];
    setList(updated);
    let newPrimary = primaryEmail;
    if (enablePrimary && isMultiple && updated.length === 1) {
      setPrimaryEmail(email);
      newPrimary = email;
    }
    setInputValue("");
    onChange?.(updated, newPrimary);
  }, [list, max, isValidEmail, enablePrimary, isMultiple, primaryEmail, onChange]);
  const removeEmail = (0, import_react28.useCallback)(email => {
    const updated = list.filter(e => e !== email);
    if (enablePrimary && primaryEmail === email) {
      setPrimaryEmail(updated[0] || "");
    }
    setList(updated);
    onChange?.(updated, enablePrimary ? updated[0] || "" : "");
  }, [list, primaryEmail, enablePrimary, onChange]);
  const togglePrimary = (0, import_react28.useCallback)(email => {
    if (!enablePrimary || !isMultiple) {
      return;
    }
    setPrimaryEmail(email);
    onChange?.(list, email);
  }, [enablePrimary, isMultiple, list, onChange]);
  const handleKeyDown = e => {
    if (["Enter", ",", " "].includes(e.key)) {
      e.preventDefault();
      addEmail(inputValue);
    }
  };
  const isInputReadOnly = !isMultiple && hasEmail;
  const trimmedInput = inputValue.trim();
  const canShowSuggestion = !isInputReadOnly && trimmedInput && isValidEmail(trimmedInput) && (!isMultiple || !list.includes(trimmedInput));
  return /* @__PURE__ */(0, import_jsx_runtime41.jsxs)("div", {
    className: "emails-section",
    onClick: () => !isInputReadOnly && inputRef.current?.focus(),
    children: [list.map(email => /* @__PURE__ */(0, import_jsx_runtime41.jsxs)("div", {
      className: `email ${enablePrimary && primaryEmail === email ? "primary" : ""}`,
      children: [enablePrimary && isMultiple && /* @__PURE__ */(0, import_jsx_runtime41.jsx)("i", {
        className: `stat-icon adminfont-star${primaryEmail === email ? " primary" : "-o"}`,
        onClick: e => {
          e.stopPropagation();
          togglePrimary(email);
        }
      }), /* @__PURE__ */(0, import_jsx_runtime41.jsx)("span", {
        children: email
      }), /* @__PURE__ */(0, import_jsx_runtime41.jsx)("i", {
        className: "adminfont-close close",
        onClick: e => {
          e.stopPropagation();
          removeEmail(email);
        }
      })]
    }, email)), /* @__PURE__ */(0, import_jsx_runtime41.jsxs)("div", {
      className: "input-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime41.jsx)(BasicInputUI, {
        ref: inputRef,
        type: "email",
        inputClass: "email-input",
        value: inputValue,
        placeholder,
        onChange: val => setInputValue(String(val)),
        onKeyDown: handleKeyDown,
        readOnly: isInputReadOnly
      }), canShowSuggestion && /* @__PURE__ */(0, import_jsx_runtime41.jsxs)("div", {
        className: "inline-suggestion",
        onClick: () => addEmail(trimmedInput),
        children: [/* @__PURE__ */(0, import_jsx_runtime41.jsx)("i", {
          className: "adminfont-mail orange"
        }), " ", trimmedInput]
      })]
    })]
  });
});
var EmailsInput = {
  render: ({
    field,
    value,
    onChange
  }) => /* @__PURE__ */(0, import_jsx_runtime41.jsx)(EmailsInputUI, {
    mode: field.mode,
    max: field.max,
    value: value?.list || [],
    primary: value?.primary || "",
    enablePrimary: field.enablePrimary,
    placeholder: field.placeholder,
    onChange: (list, primary) => onChange?.({
      list,
      primary
    })
  }),
  validate: () => {
    return null;
  }
};
var EmailsInput_default = EmailsInput;

// src/components/SequentialTaskExecutor.tsx
var import_react29 = __webpack_require__(/*! react */ "react");
var import_axios7 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));
var import_jsx_runtime42 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var SequentialTaskExecutorUI = ({
  buttonText,
  buttonIcon,
  apilink,
  variant,
  action,
  parameter,
  interval,
  successMessage,
  failureMessage,
  tasks,
  onComplete,
  onError,
  onTaskComplete,
  onChange,
  value
}) => {
  const [loading, setLoading] = (0, import_react29.useState)(false);
  const [processStatus, setProcessStatus] = (0, import_react29.useState)("");
  const [syncStarted, setSyncStarted] = (0, import_react29.useState)(false);
  const [syncStatus, setSyncStatus] = (0, import_react29.useState)([]);
  const taskIndex = (0, import_react29.useRef)(0);
  const fetchStatusRef = (0, import_react29.useRef)(null);
  const allResponses = (0, import_react29.useRef)({});
  const [currentCompletedIndex, setCurrentCompletedIndex] = (0, import_react29.useState)(0);
  const [taskFailureMessage, setTaskFailureMessage] = (0, import_react29.useState)("");
  (0, import_react29.useEffect)(() => {
    if (currentCompletedIndex < syncStatus.length) {
      const timer = setTimeout(() => {
        setCurrentCompletedIndex(prev => prev + 1);
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [currentCompletedIndex, syncStatus]);
  const executeSequentialTasks = async () => {
    setLoading(true);
    if (taskIndex.current >= tasks.length) {
      setLoading(false);
      setProcessStatus("completed");
      onComplete?.();
      return;
    }
    const currentTask = tasks[taskIndex.current];
    try {
      const payload = {};
      if (action) {
        payload.action = currentTask.action;
      }
      if (parameter) {
        payload.parameter = parameter;
      }
      if (currentTask.previousResponseData?.length) {
        currentTask.previousResponseData.forEach(taskName => {
          payload[taskName] = allResponses.current[taskName];
        });
      }
      const response = await import_axios7.default.post(getApiLink(ZyraVariable, apilink), payload, {
        headers: {
          "X-WP-Nonce": ZyraVariable.nonce
        }
      });
      if (response.data?.error) {
        setProcessStatus("failed");
        setLoading(false);
        setTaskFailureMessage(`${currentTask.failureMessage || failureMessage}`);
        onError?.({
          task: currentTask,
          error: response.data.error
        });
        return;
      }
      allResponses.current[currentTask.action] = response.data;
      setSyncStatus(prev => [...prev, {
        action: currentTask.message,
        status: "success"
      }]);
      onTaskComplete?.(currentTask, response);
      taskIndex.current++;
      await executeSequentialTasks();
    } catch (error) {
      console.error("Task execution failed:", error);
      setProcessStatus("failed");
      setLoading(false);
      setTaskFailureMessage(`${currentTask.failureMessage || failureMessage}
${error.message}`);
      onError?.({
        task: currentTask,
        error
      });
    }
  };
  const executeNormalTasks = () => {
    setLoading(true);
    import_axios7.default.post(getApiLink(ZyraVariable, apilink), {
      parameter
    }, {
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      }
    }).then(response => {
      setProcessStatus(response.data === true ? "success" : "failed");
      if (variant) {
        onChange?.({
          options: response.data || [],
          selected: ""
        });
      }
      setLoading(false);
    }).catch(error => {
      console.error("Task execution failed:", error);
      setProcessStatus("failed");
      setLoading(false);
    });
  };
  const fetchSyncStatus = () => {
    import_axios7.default.get(getApiLink(ZyraVariable, apilink), {
      headers: {
        "X-WP-Nonce": ZyraVariable.nonce
      },
      params: {
        parameter
      }
    }).then(({
      data
    }) => {
      setSyncStarted(data.running);
      setSyncStatus(data.status || []);
    });
  };
  (0, import_react29.useEffect)(() => {
    if (variant) return;
    fetchSyncStatus();
  }, []);
  (0, import_react29.useEffect)(() => {
    if (syncStarted) {
      fetchStatusRef.current = setInterval(fetchSyncStatus, interval);
    } else if (fetchStatusRef.current) {
      clearInterval(fetchStatusRef.current);
      fetchStatusRef.current = null;
    }
    return () => {
      if (fetchStatusRef.current) {
        clearInterval(fetchStatusRef.current);
      }
    };
  }, [syncStarted, fetchSyncStatus, interval]);
  const handleButtonClick = e => {
    e.preventDefault();
    if (tasks?.length) {
      executeSequentialTasks();
      return;
    }
    if (!variant) {
      setSyncStarted(true);
    }
    executeNormalTasks();
  };
  return /* @__PURE__ */(0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime42.jsxs)("div", {
      className: "loader-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime42.jsx)(ButtonInputUI, {
        buttons: [{
          text: buttonText,
          color: "purple-bg",
          onClick: handleButtonClick,
          disabled: loading,
          icon: buttonIcon || "import"
        }],
        position: "left"
      }), loading && /* @__PURE__ */(0, import_jsx_runtime42.jsx)("div", {
        className: "multivendorx-loader"
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime42.jsx)("div", {
      className: "sequential-task-executor",
      children: syncStatus && syncStatus.length > 0 && syncStatus.map((status, idx) => /* @__PURE__ */(0, import_jsx_runtime42.jsxs)("div", {
        className: `sequential-task ${processStatus}`,
        style: {
          ["--progress-time"]: `${interval / 1e3}s`
        },
        children: [status.action, /* @__PURE__ */(0, import_jsx_runtime42.jsxs)("div", {
          className: "status-wrapper",
          children: [/* @__PURE__ */(0, import_jsx_runtime42.jsxs)("span", {
            className: "status-icons",
            children: [processStatus === "failed" && /* @__PURE__ */(0, import_jsx_runtime42.jsx)("i", {
              className: `failed-icon adminfont-error`
            }), processStatus === "completed" && /* @__PURE__ */(0, import_jsx_runtime42.jsx)("i", {
              className: `completed-icon adminfont-check`
            })]
          }), status.total && /* @__PURE__ */(0, import_jsx_runtime42.jsxs)("span", {
            children: [status.current, " / ", status.total]
          })]
        })]
      }, idx))
    }), processStatus && /* @__PURE__ */(0, import_jsx_runtime42.jsx)(Notice, {
      type: processStatus === "failed" ? "error" : "success",
      displayPosition: "inline-notice",
      message: processStatus === "failed" ? taskFailureMessage || failureMessage : successMessage
    }), variant && value?.options?.length > 0 && /* @__PURE__ */(0, import_jsx_runtime42.jsx)(SelectInputUI, {
      options: value.options,
      value: value.selected || "",
      onChange: selected => {
        onChange?.({
          ...value,
          selected
        });
      }
    })]
  });
};
var SequentialTaskExecutor = {
  render: ({
    field,
    value,
    onChange,
    canAccess
  }) => /* @__PURE__ */(0, import_jsx_runtime42.jsx)(SequentialTaskExecutorUI, {
    buttonText: field.buttonText,
    buttonIcon: field.buttonIcon,
    apilink: field.apilink,
    variant: field.variant,
    parameter: field.parameter,
    action: field.action,
    interval: field.interval,
    successMessage: field.successMessage,
    failureMessage: field.failureMessage,
    tasks: field.tasks,
    onComplete: field.onComplete,
    onError: field.onError,
    onTaskComplete: field.onTaskComplete,
    value: value || "",
    onChange: val => {
      if (!canAccess) {
        return;
      }
      onChange(val);
    }
  })
};
var SequentialTaskExecutor_default = SequentialTaskExecutor;

// src/components/FreeFormCustomizer.tsx
var import_react30 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime43 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var FORM_FIELDS_CONFIG = [{
  id: "1",
  type: "text",
  label: "Name",
  name: "name",
  placeholder: "Enter your name here"
}, {
  id: "2",
  type: "email",
  label: "Email",
  name: "email",
  placeholder: "Enter your email here"
}, {
  id: "3",
  type: "text",
  label: "Phone",
  name: "phone",
  placeholder: "Enter your phone number here"
}, {
  id: "4",
  type: "text",
  label: "Address",
  name: "address",
  placeholder: "Enter your address here"
}, {
  id: "5",
  type: "text",
  label: "Subject",
  name: "subject",
  placeholder: "Enter the subject of your enquiry here"
}, {
  id: "6",
  type: "text",
  label: "Comment",
  name: "comment",
  placeholder: "Enter the details of your enquiry here"
}, {
  id: "7",
  type: "fileupload",
  label: "Filesize Limit",
  name: "File upload size limit"
}, {
  id: "8",
  type: "attachment",
  label: "Fileupload",
  name: "File upload",
  placeholder: ""
}, {
  id: "9",
  type: "custom-recaptcha",
  label: "Captcha",
  name: "Captcha",
  placeholder: ""
}, {
  id: "10",
  type: "button",
  label: "Submit"
}];
var toArray = val => Array.isArray(val) ? val : [];
var isSubmitButton = field => field?.name?.trim().toLowerCase() === "submit";
var getDefaultSubmitButton = () => ({
  id: "10",
  type: "button",
  label: "Submit",
  placeholder: "",
  disabled: false,
  name: "Submit"
});
var ensureSubmitPresent = fields => {
  const hasSubmit = fields.some(field => isSubmitButton(field));
  if (hasSubmit) {
    return fields.map(field => isSubmitButton(field) ? {
      ...field,
      disabled: false
    } : field);
  }
  return [...fields, getDefaultSubmitButton()];
};
var FreeFormCustomizerField = ({
  field,
  value,
  canAccess,
  onChange,
  modules,
  onBlocked
}) => {
  const [fields, setFields] = (0, import_react30.useState)(() => ensureSubmitPresent(toArray(value)));
  const [editingFieldId, setEditingFieldId] = (0, import_react30.useState)(null);
  const isDirty = (0, import_react30.useRef)(false);
  const inputRefs = (0, import_react30.useRef)({});
  const block = () => {
    if (field.proSetting && !ZyraVariable?.khali_dabba) {
      onBlocked?.("pro");
      return true;
    }
    if (field.moduleEnabled && !modules?.includes(field.moduleEnabled)) {
      onBlocked?.("module", field.moduleEnabled);
      return true;
    }
    if (field.requiredPlugin && !(ZyraVariable?.active_plugins || []).includes(field.requiredPlugin)) {
      onBlocked?.("plugin", field);
      return true;
    }
    return false;
  };
  (0, import_react30.useEffect)(() => {
    const newFields = toArray(value);
    const merged = ensureSubmitPresent(newFields);
    if (JSON.stringify(fields) !== JSON.stringify(merged)) {
      setFields(merged);
      isDirty.current = false;
    }
  }, [value]);
  (0, import_react30.useEffect)(() => {
    if (isDirty.current) {
      const toSave = ensureSubmitPresent(fields);
      onChange(toSave);
      isDirty.current = false;
    }
  }, [fields, onChange]);
  (0, import_react30.useEffect)(() => {
    const handleClickOutside = event => {
      if (editingFieldId) {
        const inputElement = inputRefs.current[editingFieldId];
        if (inputElement && !inputElement.contains(event.target)) {
          setEditingFieldId(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editingFieldId]);
  const getField = id => fields.find(f => String(f.id) === String(id));
  const ensureFieldExists = id => {
    const existing = getField(id);
    if (existing) return existing;
    const config = FORM_FIELDS_CONFIG.find(f => f.id === id);
    const isSubmit = isSubmitButton(config);
    return {
      id: config?.id || id,
      type: config?.type || "text",
      label: config?.label || id,
      placeholder: config?.placeholder || "",
      disabled: isSubmit ? false : true,
      name: config?.name || ""
    };
  };
  const updateFieldLabel = (id, label) => {
    if (!canAccess) return;
    isDirty.current = true;
    setFields(prev => {
      const existing = prev.find(f => String(f.id) === String(id));
      if (existing) {
        return prev.map(f => String(f.id) === String(id) ? {
          ...f,
          label
        } : f);
      }
      const newField = ensureFieldExists(id);
      return [...prev, {
        ...newField,
        label
      }];
    });
  };
  const updateFieldPlaceholder = (id, placeholder) => {
    if (!canAccess || block()) return;
    isDirty.current = true;
    setFields(prev => {
      const existing = prev.find(f => String(f.id) === String(id));
      if (existing) {
        return prev.map(f => String(f.id) === String(id) ? {
          ...f,
          placeholder
        } : f);
      }
      const newField = ensureFieldExists(id);
      return [...prev, {
        ...newField,
        placeholder
      }];
    });
  };
  const updateFieldActive = (id, disabled) => {
    const targetField = fields.find(f => f.id === id) || FORM_FIELDS_CONFIG.find(f => f.id === id);
    if (isSubmitButton(targetField) || !canAccess) {
      return;
    }
    isDirty.current = true;
    setFields(prev => {
      const existing = prev.find(f => String(f.id) === String(id));
      if (existing) {
        return prev.map(f => String(f.id) === String(id) ? {
          ...f,
          disabled
        } : f);
      }
      const newField = ensureFieldExists(id);
      return [...prev, {
        ...newField,
        disabled
      }];
    });
  };
  const handleToggle = id => {
    const targetField = fields.find(f => f.id === id) || FORM_FIELDS_CONFIG.find(f => f.id === id);
    if (isSubmitButton(targetField) || block()) {
      return;
    }
    const current = getField(id)?.disabled ?? true;
    updateFieldActive(id, !current);
  };
  const handleEditClick = fieldId => {
    if (!canAccess || block()) return;
    setEditingFieldId(fieldId);
    setTimeout(() => {
      if (inputRefs.current[fieldId]) {
        inputRefs.current[fieldId]?.focus();
      }
    }, 0);
  };
  return /* @__PURE__ */(0, import_jsx_runtime43.jsxs)("div", {
    className: "free-form-customizer",
    children: [/* @__PURE__ */(0, import_jsx_runtime43.jsxs)("div", {
      className: "free-form-header",
      children: [/* @__PURE__ */(0, import_jsx_runtime43.jsx)("div", {
        className: "title",
        children: "Field Label"
      }), /* @__PURE__ */(0, import_jsx_runtime43.jsx)("div", {
        className: "title",
        children: "Placeholder Text"
      })]
    }), FORM_FIELDS_CONFIG.map(fieldConfig => {
      const field2 = getField(fieldConfig.id);
      const currentLabel = field2?.label ?? fieldConfig.label ?? "";
      const currentPlaceholder = field2?.placeholder ?? fieldConfig.placeholder ?? "";
      const isSubmit = isSubmitButton(field2) || isSubmitButton(fieldConfig);
      const isActive = isSubmit ? true : !(field2?.disabled ?? true);
      const isEditing = editingFieldId === fieldConfig.id;
      return /* @__PURE__ */(0, import_jsx_runtime43.jsxs)("div", {
        className: `free-form-row ${isActive ? "" : "enable-visibility"} ${isSubmit ? "submit-btn" : ""}`,
        children: [/* @__PURE__ */(0, import_jsx_runtime43.jsx)("div", {
          className: "free-form-input",
          children: isEditing ? /* @__PURE__ */(0, import_jsx_runtime43.jsx)(BasicInputUI, {
            type: "text",
            value: currentLabel,
            onChange: val => updateFieldLabel(fieldConfig.id, val),
            readOnly: !canAccess,
            ref: el => inputRefs.current[fieldConfig.id] = el
          }) : isSubmit ? /* @__PURE__ */(0, import_jsx_runtime43.jsxs)("div", {
            className: "buttons-wrapper",
            onClick: () => handleEditClick(fieldConfig.id),
            children: [/* @__PURE__ */(0, import_jsx_runtime43.jsx)("div", {
              className: "admin-btn btn-purple",
              children: currentLabel
            }), canAccess && /* @__PURE__ */(0, import_jsx_runtime43.jsx)("i", {
              className: "edit-icon adminfont-edit"
            })]
          }) : /* @__PURE__ */(0, import_jsx_runtime43.jsxs)("label", {
            onClick: () => handleEditClick(fieldConfig.id),
            children: [currentLabel, /* @__PURE__ */(0, import_jsx_runtime43.jsx)("i", {
              className: "edit-icon adminfont-edit"
            })]
          })
        }), !isSubmit && /* @__PURE__ */(0, import_jsx_runtime43.jsxs)(import_jsx_runtime43.Fragment, {
          children: [/* @__PURE__ */(0, import_jsx_runtime43.jsx)("div", {
            className: "free-form-input",
            children: /* @__PURE__ */(0, import_jsx_runtime43.jsx)(BasicInputUI, {
              type: "text",
              value: currentPlaceholder,
              onChange: val => updateFieldPlaceholder(fieldConfig.id, val),
              readOnly: !canAccess
            })
          }), /* @__PURE__ */(0, import_jsx_runtime43.jsx)("i", {
            onClick: () => handleToggle(fieldConfig.id),
            className: `visibility-icon adminfont-${isActive ? "eye" : "eye-blocked"}`
          })]
        })]
      }, fieldConfig.id);
    })]
  });
};
var FreeFormCustomizer = {
  render: ({
    field,
    value,
    onChange,
    canAccess,
    modules,
    onBlocked
  }) => /* @__PURE__ */(0, import_jsx_runtime43.jsx)(FreeFormCustomizerField, {
    field,
    value,
    canAccess,
    onChange,
    modules,
    onBlocked
  }),
  validate: () => null
};
var FreeFormCustomizer_default = FreeFormCustomizer;

// src/components/fieldUtils.ts
var ZyraVariable = (() => {
  const localizer = window.appLocalizer || {};
  return {
    nonce: localizer.nonce,
    // system info, modules, renderComponent, module context
    apiUrl: localizer.apiUrl,
    // system info, modules, renderComponent, module context
    restUrl: localizer.restUrl,
    // system info, modules, renderComponent, module context
    khali_dabba: localizer.khali_dabba,
    // system info, modules, renderComponent, module context, settings navigator
    active_plugins: localizer.active_plugins,
    // system info, modules, renderComponent, module context, settings navigator
    shop_url: localizer.shop_url,
    // settings navigator
    tab_name: localizer.tab_name,
    // renderComponent
    site_url: localizer.site_url,
    // renderComponent
    tinymceApiKey: localizer.tinymceApiKey
    // text area
  };
})();
var CountryCodesObject = {
  AF: {
    name: "Afghanistan",
    dial_code: "+93"
  },
  AL: {
    name: "Albania",
    dial_code: "+355"
  },
  DZ: {
    name: "Algeria",
    dial_code: "+213"
  },
  AS: {
    name: "AmericanSamoa",
    dial_code: "+1684"
  },
  AD: {
    name: "Andorra",
    dial_code: "+376"
  },
  AO: {
    name: "Angola",
    dial_code: "+244"
  },
  AI: {
    name: "Anguilla",
    dial_code: "+1264"
  },
  AQ: {
    name: "Antarctica",
    dial_code: "+672"
  },
  AG: {
    name: "Antigua and Barbuda",
    dial_code: "+1268"
  },
  AR: {
    name: "Argentina",
    dial_code: "+54"
  },
  AM: {
    name: "Armenia",
    dial_code: "+374"
  },
  AW: {
    name: "Aruba",
    dial_code: "+297"
  },
  AU: {
    name: "Australia",
    dial_code: "+61"
  },
  AT: {
    name: "Austria",
    dial_code: "+43"
  },
  AZ: {
    name: "Azerbaijan",
    dial_code: "+994"
  },
  BS: {
    name: "Bahamas",
    dial_code: "+1242"
  },
  BH: {
    name: "Bahrain",
    dial_code: "+973"
  },
  BD: {
    name: "Bangladesh",
    dial_code: "+880"
  },
  BB: {
    name: "Barbados",
    dial_code: "+1246"
  },
  BY: {
    name: "Belarus",
    dial_code: "+375"
  },
  BE: {
    name: "Belgium",
    dial_code: "+32"
  },
  BZ: {
    name: "Belize",
    dial_code: "+501"
  },
  BJ: {
    name: "Benin",
    dial_code: "+229"
  },
  BM: {
    name: "Bermuda",
    dial_code: "+1441"
  },
  BT: {
    name: "Bhutan",
    dial_code: "+975"
  },
  BO: {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591"
  },
  BA: {
    name: "Bosnia and Herzegovina",
    dial_code: "+387"
  },
  BW: {
    name: "Botswana",
    dial_code: "+267"
  },
  BR: {
    name: "Brazil",
    dial_code: "+55"
  },
  IO: {
    name: "British Indian Ocean Territory",
    dial_code: "+246"
  },
  BN: {
    name: "Brunei Darussalam",
    dial_code: "+673"
  },
  BG: {
    name: "Bulgaria",
    dial_code: "+359"
  },
  BF: {
    name: "Burkina Faso",
    dial_code: "+226"
  },
  BI: {
    name: "Burundi",
    dial_code: "+257"
  },
  KH: {
    name: "Cambodia",
    dial_code: "+855"
  },
  CM: {
    name: "Cameroon",
    dial_code: "+237"
  },
  CA: {
    name: "Canada",
    dial_code: "+1"
  },
  CV: {
    name: "Cape Verde",
    dial_code: "+238"
  },
  KY: {
    name: "Cayman Islands",
    dial_code: "+345"
  },
  CF: {
    name: "Central African Republic",
    dial_code: "+236"
  },
  TD: {
    name: "Chad",
    dial_code: "+235"
  },
  CL: {
    name: "Chile",
    dial_code: "+56"
  },
  CN: {
    name: "China",
    dial_code: "+86"
  },
  CX: {
    name: "Christmas Island",
    dial_code: "+61"
  },
  CC: {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61"
  },
  CO: {
    name: "Colombia",
    dial_code: "+57"
  },
  KM: {
    name: "Comoros",
    dial_code: "+269"
  },
  CG: {
    name: "Congo",
    dial_code: "+242"
  },
  CD: {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243"
  },
  CK: {
    name: "Cook Islands",
    dial_code: "+682"
  },
  CR: {
    name: "Costa Rica",
    dial_code: "+506"
  },
  CI: {
    name: "Cote d'Ivoire",
    dial_code: "+225"
  },
  HR: {
    name: "Croatia",
    dial_code: "+385"
  },
  CU: {
    name: "Cuba",
    dial_code: "+53"
  },
  CY: {
    name: "Cyprus",
    dial_code: "+357"
  },
  CZ: {
    name: "Czech Republic",
    dial_code: "+420"
  },
  DK: {
    name: "Denmark",
    dial_code: "+45"
  },
  DJ: {
    name: "Djibouti",
    dial_code: "+253"
  },
  DM: {
    name: "Dominica",
    dial_code: "+1767"
  },
  DO: {
    name: "Dominican Republic",
    dial_code: "+1849"
  },
  EC: {
    name: "Ecuador",
    dial_code: "+593"
  },
  EG: {
    name: "Egypt",
    dial_code: "+20"
  },
  SV: {
    name: "El Salvador",
    dial_code: "+503"
  },
  GQ: {
    name: "Equatorial Guinea",
    dial_code: "+240"
  },
  ER: {
    name: "Eritrea",
    dial_code: "+291"
  },
  EE: {
    name: "Estonia",
    dial_code: "+372"
  },
  ET: {
    name: "Ethiopia",
    dial_code: "+251"
  },
  FK: {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500"
  },
  FO: {
    name: "Faroe Islands",
    dial_code: "+298"
  },
  FJ: {
    name: "Fiji",
    dial_code: "+679"
  },
  FI: {
    name: "Finland",
    dial_code: "+358"
  },
  FR: {
    name: "France",
    dial_code: "+33"
  },
  GF: {
    name: "French Guiana",
    dial_code: "+594"
  },
  PF: {
    name: "French Polynesia",
    dial_code: "+689"
  },
  GA: {
    name: "Gabon",
    dial_code: "+241"
  },
  GM: {
    name: "Gambia",
    dial_code: "+220"
  },
  GE: {
    name: "Georgia",
    dial_code: "+995"
  },
  DE: {
    name: "Germany",
    dial_code: "+49"
  },
  GH: {
    name: "Ghana",
    dial_code: "+233"
  },
  GI: {
    name: "Gibraltar",
    dial_code: "+350"
  },
  GR: {
    name: "Greece",
    dial_code: "+30"
  },
  GL: {
    name: "Greenland",
    dial_code: "+299"
  },
  GD: {
    name: "Grenada",
    dial_code: "+1473"
  },
  GP: {
    name: "Guadeloupe",
    dial_code: "+590"
  },
  GU: {
    name: "Guam",
    dial_code: "+1671"
  },
  GT: {
    name: "Guatemala",
    dial_code: "+502"
  },
  GG: {
    name: "Guernsey",
    dial_code: "+44"
  },
  GN: {
    name: "Guinea",
    dial_code: "+224"
  },
  GW: {
    name: "Guinea-Bissau",
    dial_code: "+245"
  },
  GY: {
    name: "Guyana",
    dial_code: "+595"
  },
  HT: {
    name: "Haiti",
    dial_code: "+509"
  },
  VA: {
    name: "Holy See (Vatican City State)",
    dial_code: "+379"
  },
  HN: {
    name: "Honduras",
    dial_code: "+504"
  },
  HK: {
    name: "Hong Kong",
    dial_code: "+852"
  },
  HU: {
    name: "Hungary",
    dial_code: "+36"
  },
  IS: {
    name: "Iceland",
    dial_code: "+354"
  },
  IN: {
    name: "India",
    dial_code: "+91"
  },
  ID: {
    name: "Indonesia",
    dial_code: "+62"
  },
  IR: {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98"
  },
  IQ: {
    name: "Iraq",
    dial_code: "+964"
  },
  IE: {
    name: "Ireland",
    dial_code: "+353"
  },
  IM: {
    name: "Isle of Man",
    dial_code: "+44"
  },
  IL: {
    name: "Israel",
    dial_code: "+972"
  },
  IT: {
    name: "Italy",
    dial_code: "+39"
  },
  JM: {
    name: "Jamaica",
    dial_code: "+1876"
  },
  JP: {
    name: "Japan",
    dial_code: "+81"
  },
  JE: {
    name: "Jersey",
    dial_code: "+44"
  },
  JO: {
    name: "Jordan",
    dial_code: "+962"
  },
  KZ: {
    name: "Kazakhstan",
    dial_code: "+77"
  },
  KE: {
    name: "Kenya",
    dial_code: "+254"
  },
  KI: {
    name: "Kiribati",
    dial_code: "+686"
  },
  KP: {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850"
  },
  KR: {
    name: "Korea, Republic of South Korea",
    dial_code: "+82"
  },
  KW: {
    name: "Kuwait",
    dial_code: "+965"
  },
  KG: {
    name: "Kyrgyzstan",
    dial_code: "+996"
  },
  LA: {
    name: "Laos",
    dial_code: "+856"
  },
  LV: {
    name: "Latvia",
    dial_code: "+371"
  },
  LB: {
    name: "Lebanon",
    dial_code: "+961"
  },
  LS: {
    name: "Lesotho",
    dial_code: "+266"
  },
  LR: {
    name: "Liberia",
    dial_code: "+231"
  },
  LY: {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218"
  },
  LI: {
    name: "Liechtenstein",
    dial_code: "+423"
  },
  LT: {
    name: "Lithuania",
    dial_code: "+370"
  },
  LU: {
    name: "Luxembourg",
    dial_code: "+352"
  },
  MO: {
    name: "Macao",
    dial_code: "+853"
  },
  MK: {
    name: "Macedonia",
    dial_code: "+389"
  },
  MG: {
    name: "Madagascar",
    dial_code: "+261"
  },
  MW: {
    name: "Malawi",
    dial_code: "+265"
  },
  MY: {
    name: "Malaysia",
    dial_code: "+60"
  },
  MV: {
    name: "Maldives",
    dial_code: "+960"
  },
  ML: {
    name: "Mali",
    dial_code: "+223"
  },
  MT: {
    name: "Malta",
    dial_code: "+356"
  },
  MH: {
    name: "Marshall Islands",
    dial_code: "+692"
  },
  MQ: {
    name: "Martinique",
    dial_code: "+596"
  },
  MR: {
    name: "Mauritania",
    dial_code: "+222"
  },
  MU: {
    name: "Mauritius",
    dial_code: "+230"
  },
  YT: {
    name: "Mayotte",
    dial_code: "+262"
  },
  MX: {
    name: "Mexico",
    dial_code: "+52"
  },
  FM: {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691"
  },
  MD: {
    name: "Moldova",
    dial_code: "+373"
  },
  MC: {
    name: "Monaco",
    dial_code: "+377"
  },
  MN: {
    name: "Mongolia",
    dial_code: "+976"
  },
  ME: {
    name: "Montenegro",
    dial_code: "+382"
  },
  MS: {
    name: "Montserrat",
    dial_code: "+1664"
  },
  MA: {
    name: "Morocco",
    dial_code: "+212"
  },
  MZ: {
    name: "Mozambique",
    dial_code: "+258"
  },
  MM: {
    name: "Myanmar",
    dial_code: "+95"
  },
  NA: {
    name: "Namibia",
    dial_code: "+264"
  },
  NR: {
    name: "Nauru",
    dial_code: "+674"
  },
  NP: {
    name: "Nepal",
    dial_code: "+977"
  },
  NL: {
    name: "Netherlands",
    dial_code: "+31"
  },
  AN: {
    name: "Netherlands Antilles",
    dial_code: "+599"
  },
  NC: {
    name: "New Caledonia",
    dial_code: "+687"
  },
  NZ: {
    name: "New Zealand",
    dial_code: "+64"
  },
  NI: {
    name: "Nicaragua",
    dial_code: "+505"
  },
  NE: {
    name: "Niger",
    dial_code: "+227"
  },
  NG: {
    name: "Nigeria",
    dial_code: "+234"
  },
  NU: {
    name: "Niue",
    dial_code: "+683"
  },
  NF: {
    name: "Norfolk Island",
    dial_code: "+672"
  },
  MP: {
    name: "Northern Mariana Islands",
    dial_code: "+1670"
  },
  NO: {
    name: "Norway",
    dial_code: "+47"
  },
  OM: {
    name: "Oman",
    dial_code: "+968"
  },
  PK: {
    name: "Pakistan",
    dial_code: "+92"
  },
  PW: {
    name: "Palau",
    dial_code: "+680"
  },
  PS: {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970"
  },
  PA: {
    name: "Panama",
    dial_code: "+507"
  },
  PG: {
    name: "Papua New Guinea",
    dial_code: "+675"
  },
  PY: {
    name: "Paraguay",
    dial_code: "+595"
  },
  PE: {
    name: "Peru",
    dial_code: "+51"
  },
  PH: {
    name: "Philippines",
    dial_code: "+63"
  },
  PN: {
    name: "Pitcairn",
    dial_code: "+872"
  },
  PL: {
    name: "Poland",
    dial_code: "+48"
  },
  PT: {
    name: "Portugal",
    dial_code: "+351"
  },
  PR: {
    name: "Puerto Rico",
    dial_code: "+1939"
  },
  QA: {
    name: "Qatar",
    dial_code: "+974"
  },
  RO: {
    name: "Romania",
    dial_code: "+40"
  },
  RU: {
    name: "Russia",
    dial_code: "+7"
  },
  RW: {
    name: "Rwanda",
    dial_code: "+250"
  },
  RE: {
    name: "Reunion",
    dial_code: "+262"
  },
  BL: {
    name: "Saint Barthelemy",
    dial_code: "+590"
  },
  SH: {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290"
  },
  KN: {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869"
  },
  LC: {
    name: "Saint Lucia",
    dial_code: "+1758"
  },
  MF: {
    name: "Saint Martin",
    dial_code: "+590"
  },
  PM: {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508"
  },
  VC: {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784"
  },
  WS: {
    name: "Samoa",
    dial_code: "+685"
  },
  SM: {
    name: "San Marino",
    dial_code: "+378"
  },
  ST: {
    name: "Sao Tome and Principe",
    dial_code: "+239"
  },
  SA: {
    name: "Saudi Arabia",
    dial_code: "+966"
  },
  SN: {
    name: "Senegal",
    dial_code: "+221"
  },
  RS: {
    name: "Serbia",
    dial_code: "+381"
  },
  SC: {
    name: "Seychelles",
    dial_code: "+248"
  },
  SL: {
    name: "Sierra Leone",
    dial_code: "+232"
  },
  SG: {
    name: "Singapore",
    dial_code: "+65"
  },
  SK: {
    name: "Slovakia",
    dial_code: "+421"
  },
  SI: {
    name: "Slovenia",
    dial_code: "+386"
  },
  SB: {
    name: "Solomon Islands",
    dial_code: "+677"
  },
  SO: {
    name: "Somalia",
    dial_code: "+252"
  },
  ZA: {
    name: "South Africa",
    dial_code: "+27"
  },
  SS: {
    name: "South Sudan",
    dial_code: "+211"
  },
  GS: {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500"
  },
  ES: {
    name: "Spain",
    dial_code: "+34"
  },
  LK: {
    name: "Sri Lanka",
    dial_code: "+94"
  },
  SD: {
    name: "Sudan",
    dial_code: "+249"
  },
  SR: {
    name: "Suriname",
    dial_code: "+597"
  },
  SJ: {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47"
  },
  SZ: {
    name: "Swaziland",
    dial_code: "+268"
  },
  SE: {
    name: "Sweden",
    dial_code: "+46"
  },
  CH: {
    name: "Switzerland",
    dial_code: "+41"
  },
  SY: {
    name: "Syrian Arab Republic",
    dial_code: "+963"
  },
  TW: {
    name: "Taiwan",
    dial_code: "+886"
  },
  TJ: {
    name: "Tajikistan",
    dial_code: "+992"
  },
  TZ: {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255"
  },
  TH: {
    name: "Thailand",
    dial_code: "+66"
  },
  TL: {
    name: "Timor-Leste",
    dial_code: "+670"
  },
  TG: {
    name: "Togo",
    dial_code: "+228"
  },
  TK: {
    name: "Tokelau",
    dial_code: "+690"
  },
  TO: {
    name: "Tonga",
    dial_code: "+676"
  },
  TT: {
    name: "Trinidad and Tobago",
    dial_code: "+1868"
  },
  TN: {
    name: "Tunisia",
    dial_code: "+216"
  },
  TR: {
    name: "Turkey",
    dial_code: "+90"
  },
  TM: {
    name: "Turkmenistan",
    dial_code: "+993"
  },
  TC: {
    name: "Turks and Caicos Islands",
    dial_code: "+1649"
  },
  TV: {
    name: "Tuvalu",
    dial_code: "+688"
  },
  UG: {
    name: "Uganda",
    dial_code: "+256"
  },
  UA: {
    name: "Ukraine",
    dial_code: "+380"
  },
  AE: {
    name: "United Arab Emirates",
    dial_code: "+971"
  },
  GB: {
    name: "United Kingdom",
    dial_code: "+44"
  },
  US: {
    name: "United States",
    dial_code: "+1"
  },
  UY: {
    name: "Uruguay",
    dial_code: "+598"
  },
  UZ: {
    name: "Uzbekistan",
    dial_code: "+998"
  },
  VU: {
    name: "Vanuatu",
    dial_code: "+678"
  },
  VE: {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58"
  },
  VN: {
    name: "Vietnam",
    dial_code: "+84"
  },
  VG: {
    name: "Virgin Islands, British",
    dial_code: "+1284"
  },
  VI: {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340"
  },
  WF: {
    name: "Wallis and Futuna",
    dial_code: "+681"
  },
  YE: {
    name: "Yemen",
    dial_code: "+967"
  },
  ZM: {
    name: "Zambia",
    dial_code: "+260"
  },
  ZW: {
    name: "Zimbabwe",
    dial_code: "+263"
  }
};
var getFlagEmoji = countryCode => countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0)));
var CountryCodes = Object.entries(CountryCodesObject).map(([code, {
  name,
  dial_code
}]) => ({
  label: `${getFlagEmoji(code)} ${name} ${dial_code}`,
  value: dial_code
}));
var useOutsideClick = (ref, callback) => {
  (0, import_react31.useEffect)(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};
var FIELD_REGISTRY = {
  // BasicInput
  text: BasicInput_default,
  number: BasicInput_default,
  email: BasicInput_default,
  time: BasicInput_default,
  date: BasicInput_default,
  password: BasicInput_default,
  "email-input": EmailsInput_default,
  // SelectInput
  select: SelectInput_default,
  dropdown: SelectInput_default,
  "multi-select": SelectInput_default,
  creatable: SelectInput_default,
  "creatable-multi": SelectInput_default,
  // Content
  title: Content_default,
  heading: Content_default,
  richtext: Content_default,
  // MultiCheckBox
  checkbox: MultiCheckbox_default,
  checkboxes: MultiCheckbox_default,
  // FileInput
  attachment: FileInput_default,
  image: FileInput_default,
  textarea: TextArea_default,
  preposttext: PrePostText_default,
  button: ButtonInput_default,
  nested: NestedComponent_default,
  section: Section_default,
  "multi-checkbox-table": MultiInputTable_default,
  "expandable-panel": ExpandablePanel_default,
  "choice-toggle": ChoiceToggle_default,
  "block-builder": BlockBuilder_default,
  "system-info": SystemInfo_default,
  tab: Tabs_default,
  log: Log_default,
  "calendar-input": CalendarInput_default,
  "event-calendar": EventCalendar_default,
  recaptcha: Recaptcha_default,
  address: AddressField_default,
  divider: Section_default,
  "color-setting": ColorSettingInput_default,
  "sequential-task-executor": SequentialTaskExecutor_default,
  "endpoint-editor": EndpointEditor_default,
  "shortcode-table": ShortCodeTable_default,
  itemlist: ItemList_default,
  notice: Notice_default,
  google_map: MapProvider_default,
  mapbox: MapProvider_default,
  "random-input-key-generator": RandomInputKeyGenerator_default,
  "copy-to-clipboard": CopyToClipboard_default,
  "free-form": FreeFormCustomizer_default
};

// src/contexts/ModuleContext.tsx
var useModules = (0, import_zustand.create)(set => ({
  modules: [],
  insertModule: moduleName => set(state => ({
    modules: [...state.modules, moduleName]
  })),
  removeModule: moduleName => set(state => ({
    modules: state.modules.filter(m => m !== moduleName)
  }))
}));
async function initializeModules(pluginName, pluginSlug, apiLink) {
  if (localStorage.getItem(`force_${pluginName}_context_reload`) === "true") {
    try {
      const response = await import_axios8.default.get(getApiLink(ZyraVariable, apiLink), {
        headers: {
          "X-WP-Nonce": ZyraVariable.nonce
        }
      });
      if (Array.isArray(response.data)) {
        useModules.setState({
          modules: response.data
        });
      }
    } catch (error) {
      console.error("Failed to fetch active modules:", error);
    }
    if (pluginSlug === "pro") {
      localStorage.setItem(`force_${pluginName}_context_reload`, "false");
    }
  }
}

// src/components/RenderComponent.tsx
var import_jsx_runtime44 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var PENALTY = 10;
var COOLDOWN = 1;
var RenderComponent = ({
  setting,
  updateSetting,
  settings,
  Popup: Popup2,
  storeTabSetting
}) => {
  const {
    modal,
    submitUrl,
    id
  } = settings;
  const settingChanged = (0, import_react32.useRef)(false);
  const counter = (0, import_react32.useRef)(0);
  const counterId = (0, import_react32.useRef)(null);
  const [modelOpen, setModelOpen] = (0, import_react32.useState)(false);
  const [modulePopupData, setModulePopupData] = (0, import_react32.useState)({
    moduleName: "",
    settings: "",
    plugin: ""
  });
  const {
    modules
  } = useModules();
  const [errors, setErrors] = (0, import_react32.useState)({});
  (0, import_react32.useEffect)(() => {
    if (settingChanged.current) {
      settingChanged.current = false;
      counter.current = PENALTY;
      if (counterId.current) {
        clearInterval(counterId.current);
      }
      const intervalId = setInterval(() => {
        counter.current -= COOLDOWN;
        if (counter.current < 0) {
          sendApiResponse(ZyraVariable, getApiLink(ZyraVariable, submitUrl), {
            setting,
            settingName: id
          }).then(response => {
            const apiResponse = response;
            if (apiResponse.message) {
              NoticeManager.add({
                title: "Great!",
                message: apiResponse.message,
                type: apiResponse.type || "success",
                position: "float"
              });
            }
            if (apiResponse.redirect_link) {
              window.open(apiResponse.redirect_link, "_self");
            }
          });
          clearInterval(intervalId);
          counterId.current = null;
        }
      }, 50);
      counterId.current = intervalId;
    }
  }, [setting, submitUrl, id]);
  (0, import_react32.useEffect)(() => {
    if (modelOpen === false) {
      const timeout = setTimeout(() => {
        setModulePopupData({
          moduleName: "",
          settings: "",
          plugin: ""
        });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [modelOpen]);
  const getMissingPlugin = plugins => {
    return plugins?.find(({
      plugin
    }) => !ZyraVariable?.active_plugins?.includes(plugin));
  };
  const hasAccess = (proFeaturesEnabled, hasDependentModule, hasDependentSetting, hasDependentPlugin) => {
    if (proFeaturesEnabled && !ZyraVariable?.khali_dabba) {
      return false;
    }
    if (hasDependentModule && !modules.includes(hasDependentModule)) {
      return false;
    }
    if (hasDependentSetting && Array.isArray(setting[hasDependentSetting]) && setting[hasDependentSetting].length === 0) {
      return false;
    }
    if (getMissingPlugin(hasDependentPlugin)) {
      return false;
    }
    return true;
  };
  const handleGroupClick = (e, field) => {
    if (field.proSetting && !ZyraVariable?.khali_dabba) {
      setModelOpen(true);
      e.stopPropagation();
      return;
    }
    if (field.moduleEnabled && !modules.includes(field.moduleEnabled)) {
      setModulePopupData({
        moduleName: field.moduleEnabled,
        settings: "",
        plugin: ""
      });
      setModelOpen(true);
      e.stopPropagation();
      return;
    }
    if (field.dependentSetting && Array.isArray(setting[field.dependentSetting]) && setting[field.dependentSetting].length === 0) {
      setModulePopupData({
        moduleName: "",
        settings: field.dependentSetting,
        plugin: ""
      });
      setModelOpen(true);
      e.stopPropagation();
      return;
    }
    const missingPlugin = getMissingPlugin(field.dependentPlugin);
    if (missingPlugin) {
      setModulePopupData({
        moduleName: "",
        settings: "",
        plugin: missingPlugin
      });
      setModelOpen(true);
      e.stopPropagation();
      return;
    }
  };
  const isContain = (key, value = null) => {
    const settingValue = setting[key];
    if (Array.isArray(value)) {
      return value.includes(settingValue);
    }
    if (Array.isArray(settingValue)) {
      if (value === null && settingValue.length > 0) {
        return true;
      }
      return settingValue.includes(value);
    }
    if (value === null && Boolean(settingValue)) {
      return true;
    }
    return settingValue === value;
  };
  const shouldRender = dependent => !(dependent.set === true && !isContain(dependent.key) || dependent.set === false && isContain(dependent.key) || dependent.value !== void 0 && !isContain(dependent.key, dependent.value));
  const handleModelClose = () => {
    setModelOpen(false);
  };
  const isProSetting = proDependent => {
    return proDependent && !ZyraVariable?.khali_dabba;
  };
  const handleChange = (key, value) => {
    settingChanged.current = true;
    const field = modal.find(f => f.key === key);
    if (!field) {
      return;
    }
    if (field.type === "nested") {
      updateSetting(key, value);
      return;
    }
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object") {
      if (Array.isArray(setting[key]) && setting[key].length > 0) {
        updateSetting(key, []);
        return;
      }
      const newValue = value.filter(option => !isProSetting(option.proSetting ?? false)).map(option => option.value);
      updateSetting(key, newValue);
      return;
    }
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [key]: error
    }));
    if (error) {
      return;
    }
    updateSetting(key, value);
  };
  const VALUE_ADDON_TYPES = ["select", "text"];
  const isCompositeField = field => VALUE_ADDON_TYPES.includes(field.beforeElement?.type) || VALUE_ADDON_TYPES.includes(field.afterElement?.type);
  const openProPopup = () => {
    setModulePopupData({
      moduleName: "",
      settings: "",
      plugin: ""
    });
    setModelOpen(true);
  };
  const openModulePopup = module2 => {
    setModulePopupData({
      moduleName: module2,
      settings: "",
      plugin: ""
    });
    setModelOpen(true);
  };
  const openPluginPopup = plugin => {
    setModulePopupData({
      moduleName: "",
      settings: "",
      plugin
    });
    setModelOpen(true);
  };
  const renderFieldInternal = (field, parentField, value, onChange, canAccess) => {
    if (field.component) {
      return field.component;
    }
    const fieldComponent = FIELD_REGISTRY[field.type];
    if (!fieldComponent) {
      return null;
    }
    const Render = fieldComponent.render;
    const handleInternalChange = val => {
      if (!isCompositeField(parentField)) {
        onChange(field.key, val);
        return;
      }
      onChange(parentField.key, {
        ...(value ?? {}),
        [field.key]: val
      });
    };
    const fieldValue = isCompositeField(parentField) ? value?.[field.key] ?? "" : value ?? "";
    return /* @__PURE__ */(0, import_jsx_runtime44.jsx)(Render, {
      field,
      value: fieldValue,
      onChange: handleInternalChange,
      canAccess,
      modules,
      settings: setting,
      onOptionsChange: opts => {
        settingChanged.current = true;
        updateSetting(`${field.key}_options`, opts);
      },
      onBlocked: (type, payload) => {
        if (type === "pro") {
          openProPopup();
        }
        if (type === "module" && payload) {
          openModulePopup(payload);
        }
        if (type === "plugin" && payload) {
          openPluginPopup(payload);
        }
      },
      storeTabSetting
    });
  };
  const validateField = (field, value) => {
    const component = FIELD_REGISTRY[field.type];
    if (!component?.validate) {
      return null;
    }
    if (!isCompositeField(field)) {
      return component.validate(field, value);
    }
    return component.validate(field, value ?? {});
  };
  const renderForm = () => {
    return modal.map(inputField => {
      const composite = isCompositeField(inputField);
      const value = composite ? setting[inputField.key] ?? {} : setting[inputField.key] ?? "";
      if (Array.isArray(inputField.dependent)) {
        for (const dependent of inputField.dependent) {
          if (!shouldRender(dependent)) {
            return null;
          }
        }
      } else if (inputField.dependent) {
        if (!shouldRender(inputField.dependent)) {
          return null;
        }
      }
      const access = hasAccess(inputField.proSetting ?? false, String(inputField.moduleEnabled ?? ""), String(inputField.dependentSetting ?? ""), inputField.dependentPlugin);
      const input = /* @__PURE__ */(0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, {
        children: [inputField.beforeElement && renderFieldInternal(inputField.beforeElement, inputField, value, handleChange, access), renderFieldInternal(inputField, inputField, value, handleChange, access), inputField.afterElement && renderFieldInternal(inputField.afterElement, inputField, value, handleChange, access)]
      });
      const isLocked = inputField.proSetting && !ZyraVariable?.khali_dabba || inputField.moduleEnabled && !modules.includes(inputField.moduleEnabled) || inputField.dependentSetting && (() => {
        const dependentValue = setting[inputField.dependentSetting];
        return Array.isArray(dependentValue) && dependentValue.length === 0;
      })() || !!getMissingPlugin(inputField.dependentPlugin);
      const fieldContent = inputField.type === "section" ? /* @__PURE__ */(0, import_jsx_runtime44.jsx)(import_jsx_runtime44.Fragment, {
        children: input
      }) : /* @__PURE__ */(0, import_jsx_runtime44.jsxs)("div", {
        className: `form-group ${inputField.row === false ? "" : "row"}  ${inputField.classes ? inputField.classes : ""} ${inputField.proSetting ? "pro-setting" : ""} ${inputField.moduleEnabled && !modules.includes(inputField.moduleEnabled) ? "module-enabled" : ""}`,
        "data-col": inputField.cols,
        onClick: e => handleGroupClick(e, inputField),
        children: [inputField.label && /* @__PURE__ */(0, import_jsx_runtime44.jsxs)("label", {
          className: "settings-form-label",
          htmlFor: inputField.key,
          children: [/* @__PURE__ */(0, import_jsx_runtime44.jsxs)("div", {
            className: "title",
            children: [inputField.icon && /* @__PURE__ */(0, import_jsx_runtime44.jsx)("i", {
              className: `adminfont-${inputField.icon} ${inputField.icon}`
            }), inputField.label]
          }), inputField.settingDescription && /* @__PURE__ */(0, import_jsx_runtime44.jsx)("div", {
            className: "settings-metabox-description",
            children: inputField.settingDescription
          })]
        }, inputField.key), /* @__PURE__ */(0, import_jsx_runtime44.jsxs)("div", {
          className: "settings-input-content",
          children: [isLocked && import_react32.default.isValidElement(input) ? import_react32.default.cloneElement(input, {
            onClick: e => {
              e.stopPropagation();
            }
          }) : input, errors[inputField.key] && /* @__PURE__ */(0, import_jsx_runtime44.jsx)(Notice, {
            uniqueKey: `error-${inputField.key}`,
            type: "error",
            displayPosition: "inline",
            message: errors[inputField.key]
          }), inputField.desc && /* @__PURE__ */(0, import_jsx_runtime44.jsx)("p", {
            className: "settings-metabox-description",
            dangerouslySetInnerHTML: {
              __html: inputField.desc
            }
          })]
        }), (inputField.proSetting && ZyraVariable?.khali_dabba || !inputField.proSetting) && inputField.moduleEnabled && !modules.includes(inputField.moduleEnabled) && /* @__PURE__ */(0, import_jsx_runtime44.jsxs)("span", {
          className: "admin-pro-tag module",
          children: [/* @__PURE__ */(0, import_jsx_runtime44.jsx)("i", {
            className: `adminfont-${inputField.moduleEnabled}`
          }), String(inputField.moduleEnabled).split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "), /* @__PURE__ */(0, import_jsx_runtime44.jsx)("i", {
            className: "adminfont-lock"
          })]
        }), inputField.proSetting && !ZyraVariable.khali_dabba && /* @__PURE__ */(0, import_jsx_runtime44.jsxs)("span", {
          className: "admin-pro-tag",
          children: [/* @__PURE__ */(0, import_jsx_runtime44.jsx)("i", {
            className: "adminfont-pro-tag"
          }), "Pro"]
        })]
      }, inputField.key);
      return fieldContent;
    });
  };
  return /* @__PURE__ */(0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, {
    children: [modelOpen && /* @__PURE__ */(0, import_jsx_runtime44.jsx)(PopupUI, {
      position: "lightbox",
      open: modelOpen,
      onClose: handleModelClose,
      width: 31.25,
      height: "auto",
      children: /* @__PURE__ */(0, import_jsx_runtime44.jsx)(Popup2, {
        moduleName: String(modulePopupData.moduleName),
        settings: modulePopupData.settings,
        plugin: modulePopupData.plugin
      })
    }), /* @__PURE__ */(0, import_jsx_runtime44.jsx)(FormGroupWrapper_default, {
      children: renderForm()
    })]
  });
};
var RenderComponent_default = RenderComponent;

// src/components/FormViewer.tsx
var import_react34 = __webpack_require__(/*! react */ "react");
var import_react_select2 = __toESM(__webpack_require__(/*! react-select */ "../../../node_modules/.pnpm/react-select@5.10.2_@types+react@19.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-select/dist/react-select.esm.js"));

// src/components/CustomRecaptcha.tsx
var import_react33 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime45 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var CustomRecaptcha = props => {
  const {
    captchaValid,
    submitted,
    field
  } = props;
  const [securityCode, setSecurityCode] = (0, import_react33.useState)("");
  const [userInput, setUserInput] = (0, import_react33.useState)("");
  const [isCaptchaValid, setIsCaptchaValid] = (0, import_react33.useState)(true);
  (0, import_react33.useEffect)(() => {
    const generateCode = () => {
      const randomValue = window.crypto.getRandomValues(new Uint32Array(1))[0];
      return (1e5 + randomValue % 9e5).toString();
    };
    setSecurityCode(generateCode());
  }, []);
  const captchCheck = e => {
    e.preventDefault();
    const value = e.target.value;
    setUserInput(value);
    const isValid = value === securityCode;
    setIsCaptchaValid(isValid);
    captchaValid(isValid);
  };
  return /* @__PURE__ */(0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime45.jsx)("input", {
      type: "text",
      id: "securityCode",
      className: "basic-input",
      name: "securityCode",
      onChange: captchCheck,
      value: userInput,
      placeholder: field.placeholder
    }), /* @__PURE__ */(0, import_jsx_runtime45.jsxs)("p", {
      children: ["Your security code is:", " ", securityCode]
    }), !isCaptchaValid && /* @__PURE__ */(0, import_jsx_runtime45.jsx)("p", {
      style: {
        color: "red"
      },
      children: "Invalid security code, please try again."
    }), submitted && !userInput && /* @__PURE__ */(0, import_jsx_runtime45.jsx)("p", {
      style: {
        color: "red"
      },
      children: "Recaptcha is required."
    })]
  });
};
var CustomRecaptcha_default = CustomRecaptcha;

// src/components/FormViewer.tsx
var import_jsx_runtime46 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var enquiryFormData = {
  default_placeholder: {
    name: "",
    email: ""
  }
};
var wholesaleFormData = {
  default_placeholder: {
    name: "",
    email: ""
  }
};
var enquiryCartTable = {
  default_placeholder: {
    name: "",
    email: ""
  }
};
var getDefaultPlaceholder = key => enquiryFormData?.default_placeholder?.[key] ?? wholesaleFormData?.default_placeholder?.[key] ?? enquiryCartTable?.default_placeholder?.[key];
var FormRow = ({
  label,
  fieldName,
  error,
  children
}) => /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("p", {
  className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
  children: [label && /* @__PURE__ */(0, import_jsx_runtime46.jsx)("label", {
    htmlFor: fieldName,
    children: label
  }), children, error && /* @__PURE__ */(0, import_jsx_runtime46.jsx)("span", {
    className: "error-text",
    children: error
  })]
});
var Checkboxes = ({
  options,
  onChange
}) => {
  const [checkedItems, setCheckedItems] = (0, import_react34.useState)(options.filter(({
    isDefault
  }) => isDefault));
  (0, import_react34.useEffect)(() => {
    onChange(checkedItems.map(item => item.value));
  }, [checkedItems, onChange]);
  const handleChange = (option, checked) => {
    const updated = checkedItems.filter(item => item.value !== option.value);
    if (checked) {
      updated.push(option);
    }
    setCheckedItems(updated);
  };
  return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(import_jsx_runtime46.Fragment, {
    children: options.map(option => /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("label", {
      htmlFor: option.value,
      className: "woocommerce-form__label woocommerce-form__label-for-checkbox",
      children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
        type: "checkbox",
        className: "woocommerce-form__input woocommerce-form__input-checkbox",
        id: option.value,
        checked: !!checkedItems.find(item => item.value === option.value),
        onChange: e => handleChange(option, e.target.checked)
      }), /* @__PURE__ */(0, import_jsx_runtime46.jsx)("span", {
        children: option.label
      })]
    }, option.value))
  });
};
var Radio = ({
  options,
  onChange
}) => {
  const [selected, setSelected] = (0, import_react34.useState)(options.find(({
    isDefault
  }) => isDefault)?.value);
  (0, import_react34.useEffect)(() => {
    onChange(selected);
  }, [selected, onChange]);
  return /* @__PURE__ */(0, import_jsx_runtime46.jsx)("div", {
    className: "multiselect-container items-wrapper",
    children: options.map((option, index) => /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("label", {
      className: "woocommerce-form__label woocommerce-form__label-for-radio",
      "data-index": index,
      htmlFor: option.value,
      children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
        type: "radio",
        className: "woocommerce-form__input woocommerce-form__input-radio",
        id: option.value,
        value: option.value,
        checked: selected === option.value,
        onChange: e => setSelected(e.target.value)
      }), /* @__PURE__ */(0, import_jsx_runtime46.jsx)("span", {
        children: option.label
      })]
    }, option.value))
  });
};
var Multiselect = ({
  options = [],
  onChange,
  isMulti = false
}) => {
  const [selectedOptions, setSelectedOptions] = (0, import_react34.useState)(isMulti ? options.filter(({
    isDefault
  }) => isDefault) : options.find(({
    isDefault
  }) => isDefault) || null);
  const handleChange = newValue => {
    setSelectedOptions(newValue);
    if (isMulti) {
      onChange(Array.isArray(newValue) ? newValue.map(o => o.value) : []);
    } else {
      onChange(newValue ? newValue.value : null);
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(import_react_select2.default, {
    isMulti,
    value: selectedOptions,
    onChange: handleChange,
    options
  });
};
var FormViewer = ({
  formFields,
  onClose,
  response,
  onSubmit,
  countryList,
  stateList,
  formMessages = {}
}) => {
  const [inputs, setInputs] = (0, import_react34.useState)({});
  const [errors, setErrors] = (0, import_react34.useState)({});
  const [fileName, setFileName] = (0, import_react34.useState)("");
  const [captchaToken, setCaptchaToken] = (0, import_react34.useState)(null);
  const [captchaError, setCaptchaError] = (0, import_react34.useState)(false);
  const [isCaptchaValid, setIsCaptchaValid] = (0, import_react34.useState)(false);
  const [submitted, setSubmitted] = (0, import_react34.useState)(false);
  const formList = formFields.formfieldlist || [];
  const buttonField = formList.find(f => f.type === "button");
  const otherFields = formList.filter(f => f.type !== "button").sort((a, b) => {
    if (a.type === "richtext") {
      return 1;
    }
    if (b.type === "richtext") {
      return -1;
    }
    return 0;
  });
  const recaptchaField = formList.find(f => f.type === "recaptcha");
  const siteKey = recaptchaField?.sitekey || null;
  const defaultDate = (/* @__PURE__ */new Date()).getFullYear() + "-01-01";
  (0, import_react34.useEffect)(() => {
    if (response) {
      setInputs(response);
    }
  }, [response]);
  (0, import_react34.useEffect)(() => {
    if (!siteKey) {
      return;
    }
    const loadRecaptcha = () => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha?.execute(siteKey, {
          action: "form_submission"
        }).then(setCaptchaToken).catch(() => setCaptchaError(true));
      });
    };
    if (!window.grecaptcha) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.onload = loadRecaptcha;
      script.onerror = () => setCaptchaError(true);
      document.body.appendChild(script);
    } else {
      loadRecaptcha();
    }
  }, [siteKey]);
  const handleChange = (name, value) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = {
          ...prev
        };
        delete updated[name];
        return updated;
      });
    }
  };
  const handleFileChange = (name, e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setInputs(prev => ({
        ...prev,
        [name]: file
      }));
      if (errors[name]) {
        setErrors(prev => {
          const updated = {
            ...prev
          };
          delete updated[name];
          return updated;
        });
      }
    }
  };
  const handleCaptchaValidation = valid => {
    setIsCaptchaValid(valid);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const error = {};
    const customCaptchaField = formList.find(f => f.type === "custom-recaptcha");
    setSubmitted(true);
    if (customCaptchaField && !isCaptchaValid) {
      setErrors(prev => ({
        ...prev,
        [customCaptchaField.label || customCaptchaField.id]: "Invalid security code."
      }));
      return;
    }
    const isValidEmail = email => /^\S+@\S+\.([a-zA-Z]{2,})$/.test(email);
    formList.forEach(field => {
      if (field.disabled || !field.name) {
        return;
      }
      const value = inputs[field.name];
      if (field.name === "name") {
        if (!value || typeof value === "string" && !value.trim()) {
          error[field.name] = formMessages.fieldRequired?.replace("%s", field.label || "Store Name");
        }
        return;
      }
      if (field.type === "email") {
        if (!isValidEmail(value)) {
          error[field.name] = formMessages.invalidEmail;
        }
        return;
      }
      if (!field.required) {
        return;
      }
      switch (field.type) {
        case "text":
        case "email":
        case "textarea":
        case "datepicker":
        case "timepicker":
          if (!value || typeof value === "string" && !value.trim()) {
            error[field.name] = formMessages.fieldRequired?.replace("%s", field.label || "");
          }
          break;
        case "checkboxes":
        case "multi-select":
          if (!Array.isArray(value) || value.length === 0) {
            error[field.name] = formMessages.fieldRequired?.replace("%s", field.label || "");
          }
          break;
        case "dropdown":
        case "radio":
        case "attachment":
          if (!value) {
            error[field.name] = formMessages.fieldRequired?.replace("%s", field.label || "");
          }
          break;
        case "richtext":
          if (!value) {
            error[field.name] = formMessages.termsRequired;
          }
          break;
      }
    });
    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }
    setErrors({});
    const submitData = {};
    for (const key in inputs) {
      const value = inputs[key];
      if (value !== void 0 && value !== null) {
        submitData[key] = value;
      }
    }
    onSubmit(submitData);
  };
  const renderField = (field, index) => {
    if (field.disabled) {
      return null;
    }
    const name = field.name ?? "";
    const error = errors[name];
    const uniqueKey = `${field.id}-${index}`;
    switch (field.type) {
      case "title":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)("h2", {
          children: field.text
        }, uniqueKey);
      case "section":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)("p", {
          className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
          children: field.label
        }, uniqueKey);
      case "divider":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)("p", {
          className: "section-divider-container"
        }, uniqueKey);
      case "text":
        if (field.name === "store-phone" || field.label === "Store Phone" || field.label === "Phone") {
          const value = inputs[name] || {};
          return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
            label: field.label,
            fieldName: name,
            error,
            children: /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("div", {
              style: {
                display: "flex",
                gap: "10px"
              },
              children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("div", {
                style: {
                  minWidth: "140px"
                },
                children: /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("select", {
                  value: value.country_code || "",
                  onChange: e => handleChange(name, {
                    ...value,
                    country_code: e.target.value
                  }),
                  children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("option", {
                    value: "",
                    children: "Select country code"
                  }), CountryCodes.map(opt => /* @__PURE__ */(0, import_jsx_runtime46.jsx)("option", {
                    value: opt.value,
                    children: opt.label
                  }, opt.value))]
                })
              }), /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
                type: "text",
                className: "input-text",
                value: value.phone || "",
                placeholder: field.placeholder,
                onChange: e => handleChange(name, {
                  ...value,
                  phone: e.target.value
                })
              })]
            })
          }, uniqueKey);
        }
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
            type: "text",
            name: field.id,
            className: "input-text",
            value: inputs[name] || "",
            placeholder: field.placeholder,
            onChange: e => handleChange(name, e.target.value),
            required: field.required,
            maxLength: field.charlimit
          })
        }, uniqueKey);
      case "email":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
            type: "email",
            name,
            className: "input-text",
            value: inputs[name] || getDefaultPlaceholder("email") || "",
            placeholder: field.placeholder,
            onChange: e => handleChange(name, e.target.value),
            required: field.required,
            maxLength: field.charlimit
          })
        }, uniqueKey);
      case "textarea":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("textarea", {
            name: field.id,
            className: "input-text",
            value: inputs[name] || "",
            placeholder: field.placeholder,
            onChange: e => handleChange(name, e.target.value),
            required: field.required,
            maxLength: field.charlimit,
            rows: field.row,
            cols: field.col
          })
        }, uniqueKey);
      case "checkboxes":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)(Checkboxes, {
            options: field.options || [],
            onChange: data => handleChange(name, data)
          })
        }, uniqueKey);
      case "multi-select":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("div", {
            className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
            children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)(Multiselect, {
              options: field.options ?? [],
              onChange: data => handleChange(name, data),
              isMulti: true
            })
          })
        }, uniqueKey);
      case "dropdown":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("div", {
            className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
            children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)(Multiselect, {
              options: field.options ?? [],
              onChange: data => handleChange(name, data)
            })
          })
        }, uniqueKey);
      case "radio":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)(Radio, {
            options: field.options ?? [],
            onChange: data => handleChange(name, data)
          })
        }, uniqueKey);
      case "recaptcha":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)("p", {
          className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide",
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("div", {
            className: "recaptcha-wrapper",
            children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
              type: "hidden",
              name: "g-recaptcha-response",
              value: captchaToken,
              className: "input-text"
            })
          })
        }, uniqueKey);
      case "attachment":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
            readOnly: true,
            id: "dropzone-file",
            type: "file",
            className: "hidden",
            onChange: e => handleFileChange(name, e)
          })
        }, uniqueKey);
      case "datepicker":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("div", {
            className: "date-picker-wrapper",
            children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
              type: "date",
              className: "input-text",
              value: inputs[name] || defaultDate,
              onChange: e => handleChange(name, e.target.value)
            })
          })
        }, uniqueKey);
      case "timepicker":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
            type: "time",
            className: "input-text",
            value: inputs[name] || "",
            onChange: e => handleChange(name, e.target.value)
          })
        }, uniqueKey);
      case "address":
        {
          const subFields = field.fields?.length ? field.fields : [{
            key: "address",
            label: "Address Line 1",
            type: "text",
            required: true
          }, {
            key: "address_2",
            label: "Address Line 2",
            type: "text"
          }, {
            key: "city",
            label: "City",
            type: "text",
            required: true
          }, {
            key: "country",
            label: "Country",
            type: "select"
          }, {
            key: "state",
            label: "State",
            type: "select"
          }, {
            key: "zip",
            label: "Postal Code",
            type: "text",
            required: true
          }];
          return /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("fieldset", {
            children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("legend", {
              children: field.label
            }), subFields.map((subField, subIndex) => {
              const inputName = subField.key;
              const subValue = inputs[inputName] ?? "";
              const subUniqueKey = `${uniqueKey}-${subField.key}-${subIndex}`;
              if (subField.type === "text") {
                return /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("p", {
                  className: "woocommerce-form-row form-row",
                  children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("label", {
                    children: subField.label
                  }), /* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
                    type: "text",
                    className: "input-text",
                    value: subValue,
                    placeholder: subField.placeholder,
                    required: subField.required,
                    onChange: e => handleChange(inputName, e.target.value)
                  })]
                }, subUniqueKey);
              }
              if (subField.type === "select") {
                let options = [];
                if (subField.key === "country") {
                  options = countryList || [];
                } else if (subField.key === "state") {
                  const selectedCountry = inputs["country"];
                  const rawStates = stateList?.[selectedCountry];
                  if (Array.isArray(rawStates)) {
                    options = rawStates;
                  } else if (rawStates && typeof rawStates === "object") {
                    options = Object.entries(rawStates).map(([code, label]) => ({
                      value: code,
                      label: String(label)
                    }));
                  }
                }
                return /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("p", {
                  className: "woocommerce-form-row form-row",
                  children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("label", {
                    children: subField.label
                  }), /* @__PURE__ */(0, import_jsx_runtime46.jsx)(Multiselect, {
                    options,
                    onChange: val => handleChange(inputName, val)
                  })]
                }, subUniqueKey);
              }
              return null;
            })]
          }, uniqueKey);
        }
      case "button":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)("p", {
          className: "woocommerce-form-row form-row",
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("button", {
            className: "woocommerce-button button wp-element-button",
            style: field.style ? JSON.parse(field.style) : {},
            onClick: e => {
              const captcha = formList.find(f => f.type === "recaptcha");
              if (captcha?.disabled === false) {
                if (captchaError || !captchaToken) {
                  return;
                }
              }
              handleSubmit(e);
            },
            children: field.label || field.placeholder || "Submit"
          })
        }, uniqueKey);
      case "richtext":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("label", {
          className: "woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide terms-checkbox",
          children: [/* @__PURE__ */(0, import_jsx_runtime46.jsx)("input", {
            type: "checkbox",
            checked: Boolean(inputs[name]),
            className: "woocommerce-form__input woocommerce-form__input-checkbox",
            onChange: e => handleChange(name, e.target.checked)
          }), /* @__PURE__ */(0, import_jsx_runtime46.jsx)("span", {
            className: "richtext-content",
            dangerouslySetInnerHTML: {
              __html: field.html || ""
            }
          }), error && /* @__PURE__ */(0, import_jsx_runtime46.jsx)("span", {
            className: "error-text",
            children: error
          })]
        }, uniqueKey);
      case "custom-recaptcha":
        return /* @__PURE__ */(0, import_jsx_runtime46.jsx)(FormRow, {
          label: field.label,
          fieldName: name,
          error,
          children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)(CustomRecaptcha_default, {
            captchaValid: handleCaptchaValidation,
            submitted,
            field
          })
        }, uniqueKey);
      default:
        return null;
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime46.jsxs)("form", {
    className: "woocommerce-form woocommerce-form-login login",
    children: [onClose && /* @__PURE__ */(0, import_jsx_runtime46.jsx)("svg", {
      className: "close-icon",
      onClick: onClose,
      width: "1rem",
      height: "1rem",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */(0, import_jsx_runtime46.jsx)("path", {
        d: "M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z",
        fill: "#e71313"
      })
    }), otherFields.map((field, index) => renderField(field, index)), buttonField && renderField(buttonField, otherFields.length)]
  });
};
var FormViewer_default = FormViewer;

// src/components/Modules.tsx
var import_react36 = __webpack_require__(/*! react */ "react");

// src/components/HeaderSearch.tsx
var import_react35 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime47 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var HeaderSearch = ({
  search,
  results,
  onQueryUpdate,
  onResultClick,
  width,
  variant = "default"
}) => {
  if (!search) {
    return null;
  }
  const {
    placeholder = "",
    options = []
  } = search;
  const hasDropdown = options.length > 0;
  const [query, setQuery] = (0, import_react35.useState)("");
  const [action, setAction] = (0, import_react35.useState)(hasDropdown && options.length > 0 ? options[0].value : "");
  const [isOpen, setIsOpen] = (0, import_react35.useState)(false);
  const [isExpanded, setIsExpanded] = (0, import_react35.useState)(false);
  const wrapperRef = (0, import_react35.useRef)(null);
  (0, import_react35.useEffect)(() => {
    if (!query) {
      setIsOpen(false);
    }
  }, [query]);
  useOutsideClick(wrapperRef, () => {
    if (variant === "mini-search" && isExpanded && !query) {
      setIsExpanded(false);
    }
    setIsOpen(false);
  });
  const triggerSearch = (value, newAction = action) => {
    onQueryUpdate({
      searchValue: value,
      ...(hasDropdown && {
        searchAction: newAction
      })
    });
  };
  const showResults = isOpen && results && results.length > 0;
  const handleSearchIconClick = () => {
    if (variant === "mini-search") {
      setIsExpanded(!isExpanded);
      if (!isExpanded) {
        setTimeout(() => {
          const input = wrapperRef.current?.querySelector("input");
          input?.focus();
        }, 100);
      }
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime47.jsxs)("div", {
    className: "search-field",
    ref: wrapperRef,
    children: [hasDropdown && /* @__PURE__ */(0, import_jsx_runtime47.jsx)("div", {
      className: "search-action",
      children: /* @__PURE__ */(0, import_jsx_runtime47.jsx)(SelectInputUI, {
        options,
        value: action,
        size: `${width}rem`,
        onChange: value => {
          setAction(value);
          triggerSearch(query, value);
        },
        background: "var(--theme-background-color)",
        color: "var(--theme-color)"
      })
    }), /* @__PURE__ */(0, import_jsx_runtime47.jsxs)("div", {
      className: `search-section`,
      children: [/* @__PURE__ */(0, import_jsx_runtime47.jsx)(BasicInputUI, {
        type: "text",
        placeholder,
        value: query,
        onChange: val => {
          setQuery(val);
          setIsOpen(true);
          triggerSearch(val);
        }
      }), /* @__PURE__ */(0, import_jsx_runtime47.jsx)("i", {
        className: "adminfont-search",
        onClick: handleSearchIconClick
      })]
    }), showResults && /* @__PURE__ */(0, import_jsx_runtime47.jsx)(ItemListUI, {
      className: "search-results",
      items: results.map(item => ({
        title: item.name,
        desc: item.desc,
        icon: item.icon,
        action: () => {
          onResultClick(item);
          setIsOpen(false);
          setQuery("");
          setAction(hasDropdown && options.length > 0 ? options[0].value : "");
          setIsExpanded(false);
          triggerSearch("", hasDropdown && options.length > 0 ? options[0].value : "");
        }
      }))
    })]
  });
};
var HeaderSearch_default = HeaderSearch;

// src/components/Modules.tsx
var import_jsx_runtime48 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var isModule = item => !("type" in item);
var Modules = ({
  modulesArray = {
    category: false,
    modules: []
  },
  apiLink,
  proPopupContent: ProPopupComponent,
  pluginName,
  variant = "default",
  filter = true
}) => {
  const [modelOpen, setModelOpen] = (0, import_react36.useState)(false);
  const [selectedCategory, setSelectedCategory] = (0, import_react36.useState)("All");
  const [selectedFilter, setSelectedFilter] = (0, import_react36.useState)("All");
  const [searchQuery, setSearchQuery] = (0, import_react36.useState)("");
  const [requirePopup, setRequirePopup] = (0, import_react36.useState)(null);
  const {
    modules,
    insertModule,
    removeModule
  } = useModules();
  const moduleList = (0, import_react36.useMemo)(() => modulesArray.modules.filter(isModule), [modulesArray.modules]);
  const totalCount = moduleList.length;
  const activeCount = moduleList.filter(m => modules.includes(m.id)).length;
  const inactiveCount = totalCount - activeCount;
  const formatCategory = category => category.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const getCategories = category => category ? Array.isArray(category) ? category : [category] : [];
  const categories = [{
    id: "All",
    label: "All"
  }, ...modulesArray.modules.filter(item => !isModule(item)).map(item => ({
    id: item.id,
    label: item.label
  }))];
  const isModuleAvailable = module2 => module2.proModule ? ZyraVariable.khali_dabba ?? false : true;
  const handleOnChange = (event, module2) => {
    document.querySelector(".module-list-item.highlight")?.classList.remove("highlight");
    if (!isModuleAvailable(module2)) {
      setModelOpen(true);
      return;
    }
    if (module2.reqPluging?.some(plugin => !(Array.isArray(ZyraVariable.active_plugins) && ZyraVariable.active_plugins.includes(plugin.slug)))) {
      openRequirePopup(module2);
      return;
    }
    const action = event.length > 0 ? "activate" : "deactivate";
    if (action === "activate") {
      insertModule?.(module2.id);
    } else {
      removeModule?.(module2.id);
    }
    localStorage.setItem(`force_${pluginName}_context_reload`, "true");
    sendApiResponse(ZyraVariable, getApiLink(ZyraVariable, apiLink), {
      id: module2.id,
      action
    }).then(() => {
      NoticeManager.add({
        title: "Success!",
        message: `Module ${action}d`,
        type: "success",
        position: "float"
      });
      if (module2.reloadOnChange) {
        window.location.reload();
      }
    }).catch(() => {
      NoticeManager.add({
        title: "Error",
        message: `Failed to ${action} module`,
        type: "error",
        position: "float"
      });
    });
  };
  const openRequirePopup = module2 => {
    if (!module2.reqPluging?.length) {
      return;
    }
    setRequirePopup({
      moduleName: module2.name,
      plugins: module2.reqPluging
    });
  };
  const filteredModules = (0, import_react36.useMemo)(() => {
    return modulesArray.modules.filter(module2 => {
      if (!isModule(module2)) {
        return false;
      }
      if (variant === "mini-module" && !module2.miniModule) {
        return false;
      }
      const moduleCategories = getCategories(module2.category);
      const isActive = modules.includes(module2.id);
      const matchesCategory = selectedCategory === "All" || moduleCategories.includes(selectedCategory);
      const matchesStatus = selectedFilter === "All" || selectedFilter === "Active" && isActive || selectedFilter === "Inactive" && !isActive;
      const matchesSearch = !searchQuery || module2.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [moduleList, selectedCategory, selectedFilter, searchQuery, modules]);
  (0, import_react36.useEffect)(() => {
    let highlightedElement = null;
    let hasHighlightedOnce = false;
    const scrollToTargetSection = () => {
      if (hasHighlightedOnce) {
        return;
      }
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.replace("#&", ""));
      const targetId = params.get("module");
      if (!targetId) {
        return;
      }
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          targetElement.classList.add("highlight");
          highlightedElement = targetElement;
          hasHighlightedOnce = true;
        }
      }, 500);
    };
    const handleClickAnywhere = e => {
      if (highlightedElement && !highlightedElement.contains(e.target)) {
        highlightedElement.classList.remove("highlight");
        highlightedElement = null;
      }
    };
    scrollToTargetSection();
    document.addEventListener("pointerdown", handleClickAnywhere);
    return () => document.removeEventListener("pointerdown", handleClickAnywhere);
  }, []);
  const statusOptions = [{
    label: `All (${totalCount})`,
    value: "All"
  }, {
    label: `Active (${activeCount})`,
    value: "Active"
  }, {
    label: `Inactive (${inactiveCount})`,
    value: "Inactive"
  }];
  return /* @__PURE__ */(0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, {
    children: [requirePopup && /* @__PURE__ */(0, import_jsx_runtime48.jsx)(PopupUI, {
      position: "lightbox",
      open: true,
      onClose: () => setRequirePopup(null),
      width: 28,
      header: {
        icon: "verification11",
        title: `Required plugins missing`,
        description: `This module needs the following plugins to work.`
      },
      children: /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
        className: "required-popup",
        children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
          className: "title",
          children: "Plugins required"
        }), requirePopup.plugins.map((plugin, idx) => /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
          className: "item",
          children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)("span", {
            className: "plugin-name",
            children: plugin.name
          }), /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("a", {
            href: plugin.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "admin-btn btn-purple",
            children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)("i", {
              className: "adminfont-import"
            }), " Install"]
          })]
        }, idx))]
      })
    }), modelOpen && /* @__PURE__ */(0, import_jsx_runtime48.jsx)(PopupUI, {
      position: "lightbox",
      open: modelOpen,
      onClose: () => setModelOpen(false),
      width: 31.25,
      height: "auto",
      children: ProPopupComponent && /* @__PURE__ */(0, import_jsx_runtime48.jsx)(ProPopupComponent, {})
    }), /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
      className: "module-container",
      "data-variant": variant,
      children: [variant === "default" && filter === true && /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
        className: "filter-wrapper",
        children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
          className: "category-filter",
          children: modulesArray.category && categories.length > 1 && categories.map(category => /* @__PURE__ */(0, import_jsx_runtime48.jsx)("span", {
            className: `category-item ${selectedCategory === category.id ? "active" : ""}`,
            onClick: () => setSelectedCategory(category.id),
            children: category.label
          }, category.id))
        }), /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
          className: "module-search",
          children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)(HeaderSearch_default, {
            search: {
              placeholder: "Search ....."
            },
            onQueryUpdate: e => {
              setSearchQuery(e.searchValue);
              if ("searchAction" in e) {
                setSelectedFilter(e.searchAction);
              }
            }
          }), /* @__PURE__ */(0, import_jsx_runtime48.jsx)(SelectInputUI, {
            type: "single-select",
            options: statusOptions,
            value: selectedFilter,
            size: 8,
            onChange: value => setSelectedFilter(value)
          })]
        })]
      }), /* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
        className: "module-option-row",
        children: filteredModules.map((item, index) => {
          if (!isModule(item)) {
            return null;
          }
          const module2 = item;
          const isActive = modules.includes(module2.id);
          const requiredPlugins = module2.reqPluging || [];
          const moduleCategories = getCategories(module2.category);
          const toggleComponent = /* @__PURE__ */(0, import_jsx_runtime48.jsx)(MultiCheckBoxUI, {
            look: "toggle",
            type: "checkbox",
            value: isActive ? [module2.id] : [],
            onChange: e => handleOnChange(e, module2),
            options: [{
              key: module2.id,
              value: module2.id
            }]
          });
          return /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
            id: module2.id,
            "data-index": index,
            className: "module-list-item",
            children: [/* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
              className: "module-body",
              children: [/* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
                className: "module-header",
                children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
                  className: "icon",
                  children: /* @__PURE__ */(0, import_jsx_runtime48.jsx)("i", {
                    className: `font adminfont-${module2.id}`
                  })
                }), module2.proModule && !ZyraVariable.khali_dabba && /* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
                  className: "pro-tag",
                  children: /* @__PURE__ */(0, import_jsx_runtime48.jsx)("i", {
                    className: "adminfont-pro-tag"
                  })
                }), variant === "mini-module" && (ZyraVariable.khali_dabba || !module2.proModule) && toggleComponent]
              }), /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
                className: "module-details",
                children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
                  className: "meta-name",
                  children: module2.name
                }), variant === "default" && /* @__PURE__ */(0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, {
                  children: [moduleCategories.length > 0 && /* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
                    className: "tag-wrapper",
                    children: moduleCategories.map((cat, idx) => /* @__PURE__ */(0, import_jsx_runtime48.jsx)("span", {
                      className: "admin-badge blue",
                      children: formatCategory(cat)
                    }, idx))
                  }), /* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
                    className: "meta-description",
                    dangerouslySetInnerHTML: {
                      __html: module2.desc || ""
                    }
                  })]
                })]
              })]
            }), variant === "default" && /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
              className: "footer-wrapper",
              children: [requiredPlugins.length > 0 && /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
                className: "requires",
                children: [/* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
                  className: "requires-title",
                  children: "Requires:"
                }), /* @__PURE__ */(0, import_jsx_runtime48.jsx)("span", {
                  className: "link-item",
                  onClick: () => openRequirePopup(module2),
                  children: requiredPlugins.map(plugin => plugin.name).join(", ")
                })]
              }), /* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
                className: "module-footer",
                children: [/* @__PURE__ */(0, import_jsx_runtime48.jsxs)("div", {
                  className: "buttons",
                  children: [module2.docLink && /* @__PURE__ */(0, import_jsx_runtime48.jsx)("a", {
                    href: module2.docLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: /* @__PURE__ */(0, import_jsx_runtime48.jsx)("i", {
                      className: "adminfont-document"
                    })
                  }), module2.videoLink && /* @__PURE__ */(0, import_jsx_runtime48.jsx)("a", {
                    href: module2.videoLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: /* @__PURE__ */(0, import_jsx_runtime48.jsx)("i", {
                      className: "adminfont-button-appearance"
                    })
                  }), module2.settingsLink && /* @__PURE__ */(0, import_jsx_runtime48.jsx)("a", {
                    href: module2.settingsLink,
                    children: /* @__PURE__ */(0, import_jsx_runtime48.jsx)("i", {
                      className: "adminfont-setting"
                    })
                  })]
                }), /* @__PURE__ */(0, import_jsx_runtime48.jsx)("div", {
                  "data-tour": `${module2.id}-showcase-tour`,
                  children: toggleComponent
                })]
              })]
            })]
          }, module2.id);
        })
      })]
    })]
  });
};
var Modules_default = Modules;

// src/components/SettingsNavigator.tsx
var import_react37 = __webpack_require__(/*! react */ "react");

// src/components/UI/Container.tsx
var import_jsx_runtime49 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var Container = ({
  column = false,
  general = false,
  children,
  className
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime49.jsx)("div", {
    className: `container-wrapper ${column ? "column" : ""} ${general ? "general-wrapper" : ""} ${className ? className : ""}`,
    children
  });
};
var Container_default = Container;

// src/components/SettingsNavigator.tsx
var import_jsx_runtime50 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var NavigatorHeader = ({
  headerIcon,
  headerTitle,
  headerDescription,
  showPremiumLink,
  buttons = [],
  headerCustomContent
}) => {
  if (!headerTitle && !headerDescription) {
    return null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
    className: "title-section",
    children: [/* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
      className: "title-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
        className: "title",
        children: [headerIcon && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("i", {
          className: `title-icon adminfont-${headerIcon}`
        }), headerTitle]
      }), headerDescription && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
        className: "description",
        children: headerDescription
      })]
    }), showPremiumLink && /* @__PURE__ */(0, import_jsx_runtime50.jsxs)("a", {
      href: showPremiumLink,
      className: "tab pro-btn",
      children: [/* @__PURE__ */(0, import_jsx_runtime50.jsx)("i", {
        className: "adminfont-pro-tag"
      }), "Upgrade", /* @__PURE__ */(0, import_jsx_runtime50.jsx)("i", {
        className: "adminfont-arrow-right"
      })]
    }), buttons.length > 0 && /* @__PURE__ */(0, import_jsx_runtime50.jsx)(ButtonInputUI, {
      buttons: buttons.map(button => ({
        text: button.label,
        icon: button.icon,
        color: button.color,
        onClick: button.onClick
      }))
    }), headerCustomContent && /* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
      className: "title-custom-section",
      children: [" ", headerCustomContent, " "]
    })]
  });
};
var Breadcrumb = ({
  renderBreadcrumb,
  renderMenuItems,
  settingContent = [],
  customContent,
  action
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, {
    children: [renderBreadcrumb && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
      className: "breadcrumbs",
      children: renderBreadcrumb()
    }), renderMenuItems && settingContent.length > 0 && /* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
      className: "tabs-wrapper",
      children: [/* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
        className: "tabs-item",
        children: renderMenuItems(settingContent)
      }), customContent && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
        className: "custom-content",
        children: customContent
      }), action && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
        className: "action-wrapper",
        children: action
      })]
    })]
  });
};
var isHeading = item => item.type === "heading";
var isFile = item => item.type === "file";
var isFolder = item => item.type === "folder";
var SettingsNavigator = ({
  settingContent,
  className = "",
  currentSetting,
  getForm,
  prepareUrl,
  HeaderSection,
  Link,
  settingName = "",
  onNavigate,
  settingTitleSection,
  variant = "default",
  menuIcon,
  action,
  headerTitle,
  headerDescription,
  headerIcon,
  showPremiumLink = false,
  customContent
}) => {
  const [activeSetting, setActiveSetting] = (0, import_react37.useState)(currentSetting);
  const {
    flatContentMap,
    siblingLevelMap,
    hierarchyPathMap,
    folderToFirstFileMap
  } = (0, import_react37.useMemo)(() => {
    const flatContent = {};
    const siblings = {};
    const paths = {};
    const firstFiles = {};
    const traverse = (items, currentPath = []) => {
      let firstFileInThisLevel = null;
      items.forEach(item => {
        if (isFile(item)) {
          const id = item.content.id;
          flatContent[id] = item.content;
          siblings[id] = items;
          paths[id] = [...currentPath, item];
          if (!firstFileInThisLevel) {
            firstFileInThisLevel = id;
          }
        } else if (isFolder(item)) {
          const folderFirstFileId = traverse(item.content, [...currentPath, item]);
          if (folderFirstFileId) {
            firstFiles[item.name || ""] = folderFirstFileId;
            if (!firstFileInThisLevel) {
              firstFileInThisLevel = folderFirstFileId;
            }
          }
        }
      });
      return firstFileInThisLevel;
    };
    traverse(settingContent);
    return {
      flatContentMap: flatContent,
      siblingLevelMap: siblings,
      hierarchyPathMap: paths,
      folderToFirstFileMap: firstFiles
    };
  }, [settingContent]);
  const activeSettingPath = hierarchyPathMap[activeSetting] || [];
  const activeFile = flatContentMap[activeSetting];
  const currentMenu = siblingLevelMap[activeSetting] || settingContent;
  const showSubmenu = activeSettingPath.length > 1;
  const navigate = settingId => {
    if (!settingId || settingId === activeSetting) {
      return;
    }
    setActiveSetting(settingId);
    const url = prepareUrl(settingId);
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.history.pushState(null, "", url);
    }
  };
  const handleBreadcrumbClick = (index, e) => {
    e.preventDefault();
    if (index === 0) {
      const firstRootFile = folderToFirstFileMap["root"] || Object.keys(flatContentMap)[0];
      navigate(firstRootFile);
      return;
    }
    const targetItem = activeSettingPath[index - 1];
    if (!targetItem) {
      return;
    }
    if (isFile(targetItem)) {
      navigate(targetItem.content.id);
    } else if (isFolder(targetItem)) {
      navigate(folderToFirstFileMap[targetItem.name || ""]);
    }
  };
  const renderBreadcrumbLinks = () => {
    const crumbs = [{
      name: settingName,
      id: "root",
      type: "root"
    }];
    activeSettingPath.forEach(item => {
      crumbs.push({
        name: isFile(item) ? item.content.headerTitle : item.name || "",
        id: isFile(item) ? item.content.id : item.name || "",
        type: item.type
      });
    });
    return crumbs.map((crumb, index) => /* @__PURE__ */(0, import_jsx_runtime50.jsxs)("span", {
      children: [index > 0 && " / ", /* @__PURE__ */(0, import_jsx_runtime50.jsx)(Link, {
        to: crumb.type === "file" ? prepareUrl(crumb.id) : "#",
        onClick: e => handleBreadcrumbClick(index, e),
        children: crumb.name
      })]
    }, `${crumb.id}-${index}`));
  };
  const renderSingleMenuItem = (item, index) => {
    if (isHeading(item)) {
      return /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
        className: "tab-heading",
        children: item.content.headerTitle
      }, index);
    }
    if (isFile(item)) {
      const setting = item.content;
      return /* @__PURE__ */(0, import_jsx_runtime50.jsxs)(Link, {
        to: prepareUrl(setting.id),
        className: `tab ${activeSetting === setting.id ? "active-tab" : ""}`,
        onClick: e => {
          if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            navigate(setting.id);
          }
        },
        children: [/* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
          className: "tab-name",
          children: [menuIcon && setting.headerIcon && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("i", {
            className: `adminfont-${setting.headerIcon}`
          }), /* @__PURE__ */(0, import_jsx_runtime50.jsx)("span", {
            children: setting.count
          }), setting.headerTitle]
        }), variant !== "default" && variant !== "settings" && setting.headerDescription && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
          className: "des",
          children: setting.headerDescription
        })]
      }, setting.id);
    }
    if (isFolder(item)) {
      const firstInFolderId = folderToFirstFileMap[item.name || ""];
      const isPartOfActivePath = activeSettingPath.some(pathItem => pathItem === item);
      return /* @__PURE__ */(0, import_jsx_runtime50.jsx)(Link, {
        to: firstInFolderId ? prepareUrl(firstInFolderId) : "#",
        className: `tab ${isPartOfActivePath ? "active-tab" : ""}`,
        onClick: e => {
          if (firstInFolderId && e.button === 0 && !e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            navigate(firstInFolderId);
          }
        },
        children: /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
          className: "tab-name",
          children: item.name
        })
      }, index);
    }
    return null;
  };
  const renderAllMenuItems = items => items.map(renderSingleMenuItem);
  const renderSettingHeaderInfo = () => {
    if (!activeFile || activeFile.id === "support" || activeFile.hideSettingHeader) {
      return null;
    }
    return /* @__PURE__ */(0, import_jsx_runtime50.jsx)(SectionUI, {
      title: activeFile.settingTitle ?? activeFile.headerTitle,
      desc: activeFile.settingSubTitle ?? activeFile.headerDescription
    });
  };
  (0, import_react37.useEffect)(() => {
    if (currentSetting) {
      setActiveSetting(currentSetting);
    } else {
      const availableSettings = Object.keys(flatContentMap);
      if (availableSettings.length > 0) {
        const firstAvailableId = availableSettings[0];
        setActiveSetting(firstAvailableId);
        const url = prepareUrl(firstAvailableId);
        window.history.replaceState(null, "", url);
      }
    }
  }, [currentSetting, flatContentMap, prepareUrl]);
  return /* @__PURE__ */(0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, {
    children: /* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
      className: `settings-wrapper ${className}`,
      "data-template": variant,
      children: [settingTitleSection && /* @__PURE__ */(0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, {
        children: settingTitleSection
      }), /* @__PURE__ */(0, import_jsx_runtime50.jsx)(NavigatorHeader, {
        headerIcon: variant === "default" ? activeFile?.headerIcon : headerIcon,
        headerTitle: variant === "default" ? activeFile?.headerTitle : headerTitle,
        headerDescription,
        showPremiumLink: !ZyraVariable.khali_dabba && showPremiumLink ? ZyraVariable.shop_url : void 0
      }), /* @__PURE__ */(0, import_jsx_runtime50.jsx)(Breadcrumb, {
        renderBreadcrumb: variant === "default" ? renderBreadcrumbLinks : void 0,
        renderMenuItems: () => renderAllMenuItems(settingContent),
        settingContent,
        action,
        customContent
      }), /* @__PURE__ */(0, import_jsx_runtime50.jsxs)(Container_default, {
        general: true,
        children: [HeaderSection && /* @__PURE__ */(0, import_jsx_runtime50.jsx)(HeaderSection, {}), showSubmenu && /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
          id: "tabs-wrapper",
          className: "tabs-wrapper",
          children: /* @__PURE__ */(0, import_jsx_runtime50.jsx)("div", {
            className: "tabs-item",
            children: renderAllMenuItems(currentMenu)
          })
        }), /* @__PURE__ */(0, import_jsx_runtime50.jsxs)("div", {
          className: "tab-content",
          children: [renderSettingHeaderInfo(), getForm(activeSetting)]
        })]
      })]
    })
  });
};
var SettingsNavigator_default = SettingsNavigator;

// src/components/AdminHeader.tsx
var import_react38 = __toESM(__webpack_require__(/*! react */ "react"));
var import_jsx_runtime51 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var AdminHeader = ({
  brandImg,
  results = [],
  search,
  onQueryUpdate,
  onResultClick,
  free,
  pro,
  utilityList = [],
  utilityListWithTab = []
}) => {
  const wrapperRef = (0, import_react38.useRef)(null);
  const [notices, setNotices] = import_react38.default.useState([]);
  (0, import_react38.useEffect)(() => {
    const captureNotices = () => {
      const noticeNodes = document.querySelectorAll("#screen-meta + .wrap .notice, #wpbody-content .notice");
      if (noticeNodes.length > 0) {
        const htmlArray = [];
        noticeNodes.forEach(node => {
          htmlArray.push(node.outerHTML);
          node.remove();
        });
        setNotices(htmlArray);
      }
    };
    captureNotices();
  }, []);
  return /* @__PURE__ */(0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime51.jsx)(NoticeReceiver, {
      position: "banner"
    }), /* @__PURE__ */(0, import_jsx_runtime51.jsxs)("div", {
      className: "admin-header",
      ref: wrapperRef,
      children: [/* @__PURE__ */(0, import_jsx_runtime51.jsxs)("div", {
        className: "left-section",
        children: [/* @__PURE__ */(0, import_jsx_runtime51.jsx)("img", {
          className: "brand-logo",
          src: brandImg,
          alt: "Logo"
        }), /* @__PURE__ */(0, import_jsx_runtime51.jsxs)("div", {
          className: "version-tag",
          children: [/* @__PURE__ */(0, import_jsx_runtime51.jsxs)("span", {
            className: "admin-badge purple",
            children: [/* @__PURE__ */(0, import_jsx_runtime51.jsx)("i", {
              className: "adminfont-info"
            }), " ", /* @__PURE__ */(0, import_jsx_runtime51.jsx)("b", {
              children: "Free:"
            }), free]
          }), /* @__PURE__ */(0, import_jsx_runtime51.jsxs)("span", {
            className: "admin-badge red",
            children: [/* @__PURE__ */(0, import_jsx_runtime51.jsx)("i", {
              className: "adminfont-pro-tag"
            }), " Pro:", pro ? pro : "Not Installed"]
          })]
        })]
      }), /* @__PURE__ */(0, import_jsx_runtime51.jsxs)("div", {
        className: "right-section",
        children: [/* @__PURE__ */(0, import_jsx_runtime51.jsx)(HeaderSearch_default, {
          search,
          results,
          width: 11,
          onQueryUpdate,
          onResultClick
        }), utilityListWithTab.map((list, index) => /* @__PURE__ */(0, import_jsx_runtime51.jsx)(PopupUI, {
          position: "menu-dropdown",
          toggleIcon: list?.toggleIcon,
          tooltipName: list?.tooltipName,
          tooltipPosition: list?.tooltipPosition,
          width: 24,
          children: list?.tabs && /* @__PURE__ */(0, import_jsx_runtime51.jsx)(TabsUI, {
            tabs: list.tabs
          })
        }, index)), utilityList.map((list, index) => /* @__PURE__ */(0, import_jsx_runtime51.jsx)(PopupUI, {
          position: "menu-dropdown",
          toggleIcon: list.toggleIcon,
          tooltipName: list?.tooltipName,
          tooltipPosition: list?.tooltipPosition,
          children: /* @__PURE__ */(0, import_jsx_runtime51.jsx)(ItemListUI, {
            items: list.items
          })
        }, index))]
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime51.jsx)("div", {
      className: "notice-wrapper wrap",
      children: notices.length > 0 && notices.map((html, i) => /* @__PURE__ */(0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime51.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: html
          }
        }, i), /* @__PURE__ */(0, import_jsx_runtime51.jsx)(NoticeReceiver, {
          position: "notice"
        })]
      }))
    }), /* @__PURE__ */(0, import_jsx_runtime51.jsx)(NoticeReceiver, {
      position: "float"
    })]
  });
};
var AdminHeader_default = AdminHeader;

// src/components/GuidedTourProvider.tsx
var import_react39 = __webpack_require__(/*! react */ "react");
var import_axios9 = __toESM(__webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/dist/browser/axios.cjs"));
var import_tour = __webpack_require__(/*! @reactour/tour */ "../../../node_modules/.pnpm/@reactour+tour@3.8.0_react@18.3.1/node_modules/@reactour/tour/dist/index.mjs");
var import_jsx_runtime52 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var headers = {
  headers: {
    "X-WP-Nonce": ZyraVariable.nonce
  }
};
var TourApi = {
  fetchTourStatus: async storeId => {
    const res = await import_axios9.default.get(getApiLink(ZyraVariable, "tour"), {
      ...headers,
      params: {
        store_id: storeId
      }
    });
    return res.data;
  },
  updateTourStatus: async (completed, storeId) => {
    try {
      await import_axios9.default.post(getApiLink(ZyraVariable, "tour"), {
        completed,
        store_id: storeId
      }, headers);
    } catch (e) {
      console.error("Error updating tour status:", e);
    }
  }
};
var STORAGE_KEY2 = "guided_tour_step";
var GuidedTourController = ({
  steps,
  storeId
}) => {
  const {
    setIsOpen,
    setSteps,
    setCurrentStep
  } = (0, import_tour.useTour)();
  const handleFinishTour = (0, import_react39.useCallback)(async () => {
    setIsOpen(false);
    sessionStorage.removeItem(STORAGE_KEY2);
    await TourApi.updateTourStatus(true, storeId);
  }, [setIsOpen]);
  const handleTourNavigation = (0, import_react39.useCallback)((url, step) => {
    const currentUrl = window.location.href;
    if (currentUrl === url) {
      setCurrentStep(step);
    } else {
      sessionStorage.setItem(STORAGE_KEY2, String(step));
      window.location.href = url;
    }
  }, [setCurrentStep]);
  (0, import_react39.useEffect)(() => {
    const initializeTour = async () => {
      try {
        const data = await TourApi.fetchTourStatus(storeId);
        if (!data.completed) {
          const savedStep = sessionStorage.getItem(STORAGE_KEY2);
          const startStep = savedStep ? parseInt(savedStep) : 0;
          const processedSteps = steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return {
              ...step,
              content: () => {
                const buttons = [];
                if (!isLast) {
                  buttons.push({
                    text: "End Tour",
                    color: "red",
                    onClick: handleFinishTour
                  });
                }
                if (!isLast && step.next) {
                  buttons.push({
                    text: "Next",
                    color: "purple",
                    onClick: () => handleTourNavigation(step.next.link, step.next.step)
                  });
                }
                if (isLast || step.finish) {
                  buttons.push({
                    text: "Finish Tour",
                    color: "purple",
                    onClick: handleFinishTour
                  });
                }
                return /* @__PURE__ */(0, import_jsx_runtime52.jsxs)("div", {
                  className: "tour-box",
                  children: [/* @__PURE__ */(0, import_jsx_runtime52.jsx)("div", {
                    className: "title",
                    children: step.title
                  }), /* @__PURE__ */(0, import_jsx_runtime52.jsx)("div", {
                    className: "desc",
                    children: step.description
                  }), /* @__PURE__ */(0, import_jsx_runtime52.jsx)(ButtonInputUI, {
                    buttons
                  })]
                });
              }
            };
          });
          setSteps(processedSteps);
          setCurrentStep(startStep);
          setIsOpen(true);
        }
      } catch (e) {
        console.error("Error loading tour:", e);
      }
    };
    initializeTour();
  }, [steps, setSteps, setIsOpen, setCurrentStep, handleTourNavigation, handleFinishTour]);
  return null;
};
var GuidedTourProvider = ({
  steps,
  storeId,
  ...rest
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime52.jsx)(import_tour.TourProvider, {
    steps: [],
    showNavigation: false,
    showPrevNextButtons: false,
    showDots: false,
    showBadge: false,
    className: "tour-content",
    styles: {
      popover: base => ({
        ...base,
        padding: "1.125rem",
        borderRadius: "0.313rem"
      })
    },
    onClickClose: ({
      setIsOpen
    }) => {
      setIsOpen(false);
      TourApi.updateTourStatus(true, storeId);
      sessionStorage.removeItem(STORAGE_KEY2);
    },
    onClickMask: ({
      setIsOpen
    }) => {
      setIsOpen(false);
      TourApi.updateTourStatus(true, storeId);
      sessionStorage.removeItem(STORAGE_KEY2);
    },
    ...rest,
    children: /* @__PURE__ */(0, import_jsx_runtime52.jsx)(GuidedTourController, {
      steps,
      storeId
    })
  });
};
var GuidedTourProvider_default = GuidedTourProvider;

// src/components/DynamicRowSetting.tsx
var import_jsx_runtime53 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var DynamicRowSetting = ({
  wrapperClass = "",
  template,
  value,
  onChange,
  addLabel = "Add New",
  emptyText = "No items added yet",
  childrenRenderer = () => false,
  canAccess = true
}) => {
  const handleAdd = () => {
    const emptyRow = {};
    template.fields.forEach(field => {
      emptyRow[field.key] = field.type === "file" ? null : "";
    });
    onChange([...value, emptyRow]);
  };
  const handleChange = (rowIndex, fieldKey, newVal) => {
    const updatedRows = [...value];
    updatedRows[rowIndex] = {
      ...updatedRows[rowIndex],
      [fieldKey]: newVal
    };
    onChange(updatedRows);
  };
  const handleDelete = rowIndex => {
    onChange(value.filter((_, i) => i !== rowIndex));
  };
  function renderField(field, row, rowIndex) {
    const fieldComponent = FIELD_REGISTRY[field.type];
    if (!fieldComponent) {
      return null;
    }
    const Render = fieldComponent.render;
    const fieldValue = row?.[field.key];
    const handleInternalChange = val => {
      handleChange(rowIndex, field.key, val);
      return;
    };
    const updateRow = patch => {
      const updatedRows = [...value];
      updatedRows[rowIndex] = {
        ...updatedRows[rowIndex],
        ...patch
      };
      onChange(updatedRows);
    };
    return /* @__PURE__ */(0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, {
      children: [field.label && /* @__PURE__ */(0, import_jsx_runtime53.jsx)("label", {
        children: field.label
      }), /* @__PURE__ */(0, import_jsx_runtime53.jsx)(Render, {
        field: {
          ...field,
          onClick: field.onClick ? () => field.onClick({
            row,
            rowIndex,
            updateRow
          }) : field.onClick
        },
        value: fieldValue,
        onChange: handleInternalChange,
        canAccess
      })]
    });
  }
  return /* @__PURE__ */(0, import_jsx_runtime53.jsx)(import_jsx_runtime53.Fragment, {
    children: /* @__PURE__ */(0, import_jsx_runtime53.jsxs)("div", {
      className: `repeater-field-wrapper ${wrapperClass}`,
      children: [value.length === 0 ? /* @__PURE__ */(0, import_jsx_runtime53.jsx)(Notice, {
        type: "info",
        displayPosition: "inline-notice",
        message: emptyText
      }) : value.map((row, rowIndex) => {
        const nestedChildren = childrenRenderer?.(row, rowIndex);
        return /* @__PURE__ */(0, import_jsx_runtime53.jsxs)("div", {
          className: "repeater-field",
          children: [/* @__PURE__ */(0, import_jsx_runtime53.jsxs)("div", {
            className: "field",
            children: [template.fields.map(field => renderField(field, row, rowIndex)), /* @__PURE__ */(0, import_jsx_runtime53.jsx)(ButtonInputUI, {
              position: "left",
              buttons: [{
                icon: "delete",
                text: "Delete",
                color: "red",
                onClick: () => handleDelete(rowIndex)
              }]
            })]
          }), nestedChildren && /* @__PURE__ */(0, import_jsx_runtime53.jsx)("div", {
            className: "repeater-field-nested",
            children: nestedChildren
          })]
        }, rowIndex);
      }), /* @__PURE__ */(0, import_jsx_runtime53.jsx)(ButtonInputUI, {
        position: "left",
        buttons: [{
          icon: "plus",
          text: addLabel,
          color: "purple",
          onClick: handleAdd
        }]
      })]
    })
  });
};
var DynamicRowSetting_default = DynamicRowSetting;

// src/components/UI/Column.tsx
var import_jsx_runtime54 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var Column = ({
  grid = 12,
  className = "",
  children,
  fullHeight = false,
  row = false
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime54.jsx)("div", {
    className: `card-wrapper ${row ? "row" : ""} ${className} ${fullHeight ? "full-height" : ""}`,
    "data-cols": grid,
    children
  });
};
var Column_default = Column;

// src/components/InfoItem.tsx
var import_jsx_runtime55 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var InfoItem = ({
  title,
  titleLink,
  avatar,
  onClick,
  descriptions = [],
  badges = [],
  amount,
  amountClassName = "",
  className = "",
  isLoading = false,
  rightContent
}) => {
  const renderAvatar = () => {
    if (!avatar) {
      return null;
    }
    const avatarContent = avatar.image ? /* @__PURE__ */(0, import_jsx_runtime55.jsx)("img", {
      src: avatar.image,
      alt: title
    }) : avatar.iconClass ? /* @__PURE__ */(0, import_jsx_runtime55.jsx)("i", {
      className: `adminfont-${avatar.iconClass}`
    }) : /* @__PURE__ */(0, import_jsx_runtime55.jsx)("span", {
      className: `adminfont-${avatar.iconClass}`,
      children: avatar.text
    });
    return /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
      className: "avatar",
      children: avatar.link ? /* @__PURE__ */(0, import_jsx_runtime55.jsx)("a", {
        href: avatar.link,
        target: "_blank",
        rel: "noopener noreferrer",
        children: avatarContent
      }) : avatarContent
    });
  };
  const Title = titleLink ? /* @__PURE__ */(0, import_jsx_runtime55.jsx)("a", {
    href: titleLink,
    rel: "noopener noreferrer",
    children: title
  }) : onClick ? /* @__PURE__ */(0, import_jsx_runtime55.jsx)("span", {
    onClick,
    children: title
  }) : title;
  return /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
    className: "info-item-wrapper",
    children: /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
      className: `info-item ${className}`,
      children: isLoading ? /* @__PURE__ */(0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime55.jsxs)("div", {
          className: "details-wrapper",
          children: [avatar && /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
            className: "avatar",
            children: /* @__PURE__ */(0, import_jsx_runtime55.jsx)(Skeleton_default, {
              variant: "circular",
              width: 1.875,
              height: 1.875
            })
          }), /* @__PURE__ */(0, import_jsx_runtime55.jsxs)("div", {
            className: "details",
            children: [/* @__PURE__ */(0, import_jsx_runtime55.jsxs)("div", {
              className: "name",
              children: [/* @__PURE__ */(0, import_jsx_runtime55.jsx)(Skeleton_default, {
                width: 11.25,
                height: 1.5
              }), badges.length > 0 && /* @__PURE__ */(0, import_jsx_runtime55.jsx)(Skeleton_default, {
                variant: "rectangular",
                width: 3.75,
                height: 1.25
              })]
            }), descriptions && /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
              className: "des",
              children: /* @__PURE__ */(0, import_jsx_runtime55.jsx)(Skeleton_default, {
                width: "90%"
              })
            }), /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
              className: "des",
              children: /* @__PURE__ */(0, import_jsx_runtime55.jsx)(Skeleton_default, {
                width: "75%"
              })
            })]
          })]
        }), amount !== void 0 && /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
          className: "right-details",
          children: /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
            className: "price",
            children: /* @__PURE__ */(0, import_jsx_runtime55.jsx)(Skeleton_default, {
              width: 4.375
            })
          })
        })]
      }) : /* @__PURE__ */(0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime55.jsxs)("div", {
          className: "details-wrapper",
          children: [renderAvatar(), /* @__PURE__ */(0, import_jsx_runtime55.jsxs)("div", {
            className: "details",
            children: [/* @__PURE__ */(0, import_jsx_runtime55.jsxs)("div", {
              className: "name",
              children: [Title, badges.map((badge, index) => /* @__PURE__ */(0, import_jsx_runtime55.jsx)("span", {
                className: `admin-badge ${badge.className}`,
                onClick: badge.onClick,
                children: badge.text
              }, index))]
            }), descriptions.map((desc, index) => /* @__PURE__ */(0, import_jsx_runtime55.jsxs)("div", {
              className: "des",
              children: [desc.label && desc.value && /* @__PURE__ */(0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, {
                children: [desc.boldLabel ? /* @__PURE__ */(0, import_jsx_runtime55.jsx)("b", {
                  children: desc.label
                }) : desc.label, ": "]
              }), desc.value]
            }, index))]
          })]
        }), amount !== void 0 && /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
          className: "right-details",
          children: /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
            className: `price ${amountClassName}`,
            children: amount
          })
        }), rightContent && /* @__PURE__ */(0, import_jsx_runtime55.jsx)("div", {
          className: "right-content",
          children: rightContent
        })]
      })
    })
  });
};
var InfoItem_default = InfoItem;

// src/components/UI/Analytics.tsx
var import_jsx_runtime56 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var Analytics = ({
  data,
  variant = "default",
  cols,
  isLoading = false
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime56.jsx)("div", {
    className: `analytics-container ${cols ? `flex-wrap` : ""}`,
    "data-template": variant,
    children: data.map((item, idx) => /* @__PURE__ */(0, import_jsx_runtime56.jsxs)("div", {
      className: `analytics-item ${cols ? `col-${cols}` : ""} ${item.colorClass || ""}`,
      children: [/* @__PURE__ */(0, import_jsx_runtime56.jsx)("div", {
        className: "analytics-icon",
        children: isLoading ? /* @__PURE__ */(0, import_jsx_runtime56.jsx)(Skeleton_default, {
          width: 3.75,
          height: 3.75
        }) : item.icon && /* @__PURE__ */(0, import_jsx_runtime56.jsx)("i", {
          className: `adminfont-${item.icon} ${item.iconClass || ""}`
        })
      }), /* @__PURE__ */(0, import_jsx_runtime56.jsxs)("div", {
        className: "details",
        children: [/* @__PURE__ */(0, import_jsx_runtime56.jsx)("div", {
          className: "number",
          children: isLoading ? /* @__PURE__ */(0, import_jsx_runtime56.jsx)(Skeleton_default, {
            width: 5
          }) : item.number
        }), /* @__PURE__ */(0, import_jsx_runtime56.jsx)("div", {
          className: "text",
          children: isLoading ? /* @__PURE__ */(0, import_jsx_runtime56.jsx)(Skeleton_default, {
            width: 6.25
          }) : item.text
        }), variant === "dashboard" && /* @__PURE__ */(0, import_jsx_runtime56.jsx)("div", {
          className: "report",
          children: isLoading ? /* @__PURE__ */(0, import_jsx_runtime56.jsx)(Skeleton_default, {
            width: 3.75
          }) : item.extra
        })]
      })]
    }, idx))
  });
};
var Analytics_default = Analytics;

// src/components/UI/ComponentStatusView.tsx
var import_jsx_runtime57 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var ComponentStatusView = ({
  icon = "info",
  iconColor = "red",
  title,
  desc,
  buttonText,
  buttonLink,
  buttonTarget = "_self",
  onButtonClick,
  className = ""
}) => {
  return /* @__PURE__ */(0, import_jsx_runtime57.jsxs)("div", {
    className: `permission-wrapper ${className}`,
    children: [/* @__PURE__ */(0, import_jsx_runtime57.jsx)("i", {
      className: `adminfont-${icon} ${iconColor}`
    }), /* @__PURE__ */(0, import_jsx_runtime57.jsx)("div", {
      className: "title",
      children: title
    }), desc && /* @__PURE__ */(0, import_jsx_runtime57.jsx)("div", {
      className: "desc",
      children: desc
    }), buttonText && (buttonLink ? /* @__PURE__ */(0, import_jsx_runtime57.jsx)("a", {
      href: buttonLink,
      target: buttonTarget,
      rel: buttonTarget === "_blank" ? "noopener noreferrer" : "",
      className: "admin-btn btn-purple",
      children: buttonText
    }) : /* @__PURE__ */(0, import_jsx_runtime57.jsx)("div", {
      className: "admin-btn btn-purple",
      role: "button",
      onClick: () => {
        if (onButtonClick) {
          onButtonClick();
        }
      },
      children: buttonText
    }))]
  });
};
var ComponentStatusView_default = ComponentStatusView;

// src/contexts/SettingContext.tsx
var import_react40 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime58 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var initialState = {
  settingName: "",
  setting: {}
};
var SettingContext = (0, import_react40.createContext)(void 0);
var settingReducer = (state, action) => {
  switch (action.type) {
    case "SET_SETTINGS":
      return {
        ...action.payload
      };
    case "UPDATE_SETTINGS":
      {
        const {
          key,
          value
        } = action.payload;
        const setting = {
          ...state.setting,
          [key]: value
        };
        return {
          ...state,
          setting
        };
      }
    case "CLEAR_SETTINGS":
      return {
        settingName: "",
        setting: {}
      };
    default:
      return state;
  }
};
var SettingProvider = ({
  children
}) => {
  const [state, dispatch] = (0, import_react40.useReducer)(settingReducer, initialState);
  const setSetting = (settingName, setting) => {
    dispatch({
      type: "SET_SETTINGS",
      payload: {
        settingName,
        setting
      }
    });
  };
  const updateSetting = (key, value) => {
    dispatch({
      type: "UPDATE_SETTINGS",
      payload: {
        key,
        value
      }
    });
  };
  const clearSetting = () => {
    dispatch({
      type: "CLEAR_SETTINGS"
    });
  };
  return /* @__PURE__ */(0, import_jsx_runtime58.jsx)(SettingContext.Provider, {
    value: {
      ...state,
      setSetting,
      updateSetting,
      clearSetting
    },
    children
  });
};
var useSetting = () => {
  const context = (0, import_react40.useContext)(SettingContext);
  if (!context) {
    throw new Error("useSetting must be used within a SettingProvider");
  }
  return context;
};

// src/utils/blockHtmlConverter.ts
var styleToString = (style = {}) => {
  return Object.entries(style).map(([key, val]) => {
    if (val === void 0 || val === null) {
      return "";
    }
    const cssKey = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    if (typeof val === "number") {
      return `${cssKey}:${val}rem`;
    }
    return `${cssKey}:${val}`;
  }).filter(Boolean).join(";");
};
var renderBlocksToHTML = blocks => {
  return blocks.map(renderBlock).join("");
};
var renderBlock = block => {
  const style = styleToString(block.style);
  switch (block.type) {
    case "heading":
      return `<h${block.level || 1} style="${style}">
                ${block.text || ""}
            </h${block.level || 1}>`;
    case "richtext":
      return `<div style="${style}">
                ${block.html || ""}
            </div>`;
    case "image":
      return `<img src="${block.src || ""}" alt="${block.alt || ""}" style="${style}" />`;
    case "button":
      return `<a href="${block.url || "#"}" style="${style};display:inline-block;text-decoration:none;">
                ${block.text || "Click"}
            </a>`;
    case "divider":
      return `<hr style="${style}" />`;
    case "columns":
      return renderColumns(block);
    case "section":
      return `<div style="${style}">
                ${(block.columns || []).flat().map(renderBlock).join("")}
            </div>`;
    default:
      return "";
  }
};
var renderColumns = block => {
  const cols = block.columns || [];
  return `
        <table width="100%" cellpadding="0" cellspacing="0" style="${styleToString(block.style)}">
            <tr>
                ${cols.map(col => `
                    <td valign="top" style="padding:10px;">
                        ${col.map(renderBlock).join("")}
                    </td>
                `).join("")}
            </tr>
        </table>
    `;
};
var blockId = Date.now();
var getId = () => blockId++;
var htmlToBlocks = html => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const blocks = [];
  Array.from(doc.body.children).forEach(node => {
    const block = parseNode(node);
    if (block) {
      blocks.push(block);
    }
  });
  return blocks;
};
var parseNode = node => {
  if (node.nodeType === 3) {
    const text = node.textContent.trim();
    if (!text) {
      return null;
    }
    return {
      id: getId(),
      type: "richtext",
      html: text
    };
  }
  if (node.nodeType !== 1) {
    return null;
  }
  const tag = node.tagName.toLowerCase();
  switch (tag) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return {
        id: getId(),
        type: "heading",
        level: parseInt(tag[1]),
        text: node.textContent,
        style: parseStyle(node)
      };
    case "div":
    case "p":
      return {
        id: getId(),
        type: "richtext",
        html: node.innerHTML.trim(),
        style: parseStyle(node)
      };
    case "img":
      return {
        id: getId(),
        type: "image",
        src: node.getAttribute("src"),
        alt: node.getAttribute("alt"),
        style: parseStyle(node)
      };
    case "a":
      return {
        id: getId(),
        type: "button",
        text: node.textContent,
        url: node.getAttribute("href"),
        style: parseStyle(node)
      };
    case "hr":
      return {
        id: getId(),
        type: "divider",
        style: parseStyle(node)
      };
    case "table":
      return parseTable(node);
    default:
      return null;
  }
};
var parseTable = table => {
  const rows = Array.from(table.querySelectorAll("tr"));
  if (!rows.length) {
    return null;
  }
  const columns = [];
  const firstRow = rows[0];
  const cells = Array.from(firstRow.children);
  cells.forEach((cell, index) => {
    const colBlocks = [];
    cell.childNodes.forEach(child => {
      const parsed = parseNode(child);
      if (parsed) {
        colBlocks.push(parsed);
      }
    });
    columns.push(colBlocks);
  });
  return {
    id: getId(),
    type: "columns",
    layout: String(columns.length),
    columns,
    style: parseStyle(table)
  };
};
var parseStyle = node => {
  const style = {};
  const styleAttr = node.getAttribute("style");
  if (!styleAttr) {
    return style;
  }
  styleAttr.split(";").forEach(rule => {
    const [key, value] = rule.split(":");
    if (!key || !value) {
      return;
    }
    const jsKey = key.trim().replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    style[jsKey] = value.trim().replace("rem", "");
  });
  return style;
};

// src/components/table/TableCard.tsx
var import_react44 = __toESM(__webpack_require__(/*! react */ "react"));

// src/components/table/table.tsx
var import_react42 = __webpack_require__(/*! react */ "react");

// src/components/table/TableRowActions.tsx
var import_react41 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime59 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var TableRowActions = ({
  row,
  rowActions
}) => {
  const [open, setOpen] = (0, import_react41.useState)(false);
  const showInline = rowActions.length <= 2;
  const containerRef = (0, import_react41.useRef)(null);
  useOutsideClick(containerRef, () => {
    if (open) {
      setOpen(false);
    }
  });
  const getActionLabel = action => {
    return typeof action.label === "function" ? action.label(row) : action.label;
  };
  const getActionIcon = action => {
    return typeof action.icon === "function" ? action.icon(row) : action.icon;
  };
  return /* @__PURE__ */(0, import_jsx_runtime59.jsx)("div", {
    className: "table-action",
    ref: containerRef,
    children: showInline ? /* @__PURE__ */(0, import_jsx_runtime59.jsx)("div", {
      className: "inline-actions",
      children: rowActions.map((action, index) => /* @__PURE__ */(0, import_jsx_runtime59.jsx)(Tooltip_default, {
        text: getActionLabel(action),
        children: /* @__PURE__ */(0, import_jsx_runtime59.jsx)("i", {
          onClick: () => action.onClick(row),
          className: `adminfont-${getActionIcon(action)}`
        })
      }, index))
    }) : /* @__PURE__ */(0, import_jsx_runtime59.jsxs)("div", {
      className: "action-icons",
      children: [/* @__PURE__ */(0, import_jsx_runtime59.jsx)("i", {
        className: "adminfont-more-vertical",
        onClick: () => setOpen(v => !v)
      }), /* @__PURE__ */(0, import_jsx_runtime59.jsx)("div", {
        className: `action-dropdown ${open ? "show" : "hover"}`,
        children: /* @__PURE__ */(0, import_jsx_runtime59.jsx)("ul", {
          children: rowActions.map((action, index) => /* @__PURE__ */(0, import_jsx_runtime59.jsxs)("li", {
            onClick: () => {
              action.onClick(row);
              setOpen(false);
            },
            children: [/* @__PURE__ */(0, import_jsx_runtime59.jsx)("i", {
              className: `adminfont-${getActionIcon(action)}`
            }), /* @__PURE__ */(0, import_jsx_runtime59.jsx)("span", {
              className: "tooltip-name",
              children: getActionLabel(action)
            })]
          }, index))
        })
      })]
    })
  });
};
var TableRowActions_default = TableRowActions;

// src/components/table/Utill.tsx
var import_jsx_runtime60 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var renderCell = (row = {}, header = {}, format = "", currency = {}) => {
  let value = row[header.key];
  if (!header?.type) {
    return value ?? null;
  }
  switch (header.type) {
    case "status":
      {
        const formattedValue = String(value).toLowerCase().split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        const statusClass = typeof header.statusClass === "function" ? header.statusClass(row) : header.statusClass;
        return /* @__PURE__ */(0, import_jsx_runtime60.jsx)("span", {
          className: `admin-badge badge-${String(statusClass).toLowerCase()}`,
          children: formattedValue
        });
      }
    case "date":
      {
        if (!value) {
          return null;
        }
        const dateObj = new Date(value);
        if (isNaN(dateObj.getTime())) {
          return /* @__PURE__ */(0, import_jsx_runtime60.jsx)("span", {
            children: value
          });
        }
        const map = {
          YYYY: String(dateObj.getFullYear()),
          YY: String(dateObj.getFullYear()).slice(-2),
          MMMM: dateObj.toLocaleString(void 0, {
            month: "long"
          }),
          MMM: dateObj.toLocaleString(void 0, {
            month: "short"
          }),
          MM: String(dateObj.getMonth() + 1).padStart(2, "0"),
          DD: String(dateObj.getDate()).padStart(2, "0"),
          D: String(dateObj.getDate()),
          HH: String(dateObj.getHours()).padStart(2, "0"),
          mm: String(dateObj.getMinutes()).padStart(2, "0"),
          ss: String(dateObj.getSeconds()).padStart(2, "0")
        };
        const dateFormat = format || "YYYY-MM-DD";
        const formattedDate = dateFormat.replace(/YYYY|YY|MMMM|MMM|MM|DD|D|HH|mm|ss/g, token => map[token] ?? token);
        return /* @__PURE__ */(0, import_jsx_runtime60.jsx)("span", {
          children: formattedDate
        });
      }
    case "currency":
      {
        if (value == null || value === "") {
          value = 0;
        }
        const numberValue = typeof value === "number" ? value : parseFloat(value.toString().replace(/[^0-9.-]+/g, ""));
        if (isNaN(numberValue)) {
          return /* @__PURE__ */(0, import_jsx_runtime60.jsx)("span", {
            children: value
          });
        }
        const {
          currencySymbol,
          priceDecimals,
          decimalSeparator,
          thousandSeparator,
          currencyPosition
        } = currency;
        const decimals = Number(priceDecimals ?? 2);
        const fixed = numberValue.toFixed(decimals);
        const parts = fixed.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator ?? ",");
        const formattedNumber = decimals > 0 ? parts.join(decimalSeparator ?? ".") : parts[0];
        let finalValue;
        if ("left" === currencyPosition) {
          finalValue = `${currencySymbol}${formattedNumber}`;
        } else if ("left_space" === currencyPosition) {
          finalValue = `${currencySymbol} ${formattedNumber}`;
        } else if ("right" === currencyPosition) {
          finalValue = `${formattedNumber}${currencySymbol}`;
        } else if ("right_space" === currencyPosition) {
          finalValue = `${formattedNumber} ${currencySymbol}`;
        } else {
          finalValue = `${currencySymbol}${formattedNumber}`;
        }
        return finalValue;
      }
    case "content":
      {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = String(value);
        const decoded = textarea.value;
        const textOnly = decoded.replace(/<[^>]*>/g, "");
        const cleanText = textOnly.replace(/\s+/g, " ").trim();
        const shortText = cleanText.length > 30 ? cleanText.slice(0, 30) + "\u2026" : cleanText;
        return shortText;
      }
    default:
      return value ?? null;
  }
};

// src/components/table/renderEditableCell.tsx
var import_jsx_runtime61 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var renderEditableCell = ({
  header,
  cell,
  isEditing,
  onSave
}) => {
  const value = cell.value;
  if (!isEditing) {
    return /* @__PURE__ */(0, import_jsx_runtime61.jsx)(import_jsx_runtime61.Fragment, {
      children: cell.display ?? value
    });
  }
  switch (header.editType) {
    case "toggle":
      return /* @__PURE__ */(0, import_jsx_runtime61.jsx)("input", {
        type: "checkbox",
        defaultChecked: Boolean(value),
        onChange: e => onSave(e.target.checked),
        autoFocus: true
      });
    case "select":
      return /* @__PURE__ */(0, import_jsx_runtime61.jsx)("select", {
        defaultValue: String(value),
        onBlur: e => onSave(e.target.value),
        autoFocus: true,
        children: header.options?.map(opt => /* @__PURE__ */(0, import_jsx_runtime61.jsx)("option", {
          value: opt.value,
          children: opt.label
        }, opt.value))
      });
    default:
      return /* @__PURE__ */(0, import_jsx_runtime61.jsx)("input", {
        type: "text",
        defaultValue: String(value ?? ""),
        onBlur: e => onSave(e.target.value),
        autoFocus: true
      });
  }
};

// src/components/table/table.tsx
var import_react_drag_listview2 = __toESM(__webpack_require__(/*! react-drag-listview */ "../../../node_modules/.pnpm/react-drag-listview@2.0.0/node_modules/react-drag-listview/es/index.js"));
var import_jsx_runtime62 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var ASC = "asc";
var DESC = "desc";
var Table = ({
  headers: headers2 = {},
  rows = [],
  // caption,
  className = "",
  onSort = () => {},
  emptyMessage,
  query = {},
  ids = [],
  selectedIds = [],
  onSelectRow,
  onSelectAll,
  classNames = "",
  onCellEdit,
  isLoading,
  enableBulkSelect = false,
  format,
  currency,
  onRowReorder,
  expandable = false
}) => {
  const containerRef = (0, import_react42.useRef)(null);
  const [isScrollableRight, setIsScrollableRight] = (0, import_react42.useState)(false);
  const [isScrollableLeft, setIsScrollableLeft] = (0, import_react42.useState)(false);
  const [expandedRows, setExpandedRows] = (0, import_react42.useState)([]);
  const sortedBy = (0, import_react42.useMemo)(() => {
    if (query.orderby) {
      return query.orderby;
    }
    const defaultHeader = Object.entries(headers2).find(([, config]) => config.defaultSort);
    return defaultHeader?.[0];
  }, [query.orderby, headers2]);
  const sortDir = (0, import_react42.useMemo)(() => {
    if (query.order) {
      return query.order;
    }
    const currentHeader = Object.entries(headers2).find(([key]) => key === sortedBy);
    return currentHeader?.[1]?.defaultOrder ?? DESC;
  }, [query.order, headers2, sortedBy]);
  const hasData = rows.length > 0;
  const allSelected = (0, import_react42.useMemo)(() => ids.length > 0 && ids.every(id => selectedIds.includes(id)), [ids, selectedIds]);
  const tabIndex = isScrollableLeft || isScrollableRight ? 0 : null;
  const updateScrollState = (0, import_react42.useCallback)(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = el;
    const scrollable = scrollWidth > clientWidth;
    if (!scrollable) {
      setIsScrollableLeft(false);
      setIsScrollableRight(false);
      return;
    }
    setIsScrollableLeft(scrollLeft > 0);
    setIsScrollableRight(scrollLeft + clientWidth < scrollWidth);
  }, []);
  (0, import_react42.useEffect)(() => {
    updateScrollState();
    const onResize = () => requestAnimationFrame(updateScrollState);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [headers2, rows, updateScrollState]);
  const handleSort = (0, import_react42.useCallback)(key => {
    let direction = DESC;
    if (sortedBy === key) {
      direction = sortDir === ASC ? DESC : ASC;
    }
    onSort(key, direction);
  }, [sortedBy, sortDir, onSort]);
  const toggleAllRows = (0, import_react42.useCallback)(() => {
    onSelectAll?.(!allSelected);
  }, [allSelected, onSelectAll]);
  const toggleRow = (0, import_react42.useCallback)(index => {
    const id = ids[index];
    const isSelected = selectedIds.includes(id);
    onSelectRow?.(id, !isSelected);
  }, [ids, selectedIds, onSelectRow]);
  const getSortIcon = isSorted => {
    if (!isSorted) {
      return /* @__PURE__ */(0, import_jsx_runtime62.jsx)("i", {
        className: "adminfont-arrow-down-up sort-icon"
      });
    }
    return /* @__PURE__ */(0, import_jsx_runtime62.jsx)("i", {
      className: `adminfont-${sortDir === ASC ? "arrow-up" : "arrow-down"} sort-icon`
    });
  };
  const dragProps = {
    nodeSelector: onRowReorder ? "tbody tr" : "",
    onDragEnd: (fromIndex, toIndex) => {
      if (fromIndex === toIndex || toIndex < 0) {
        return;
      }
      onRowReorder?.(fromIndex, toIndex);
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime62.jsx)("div", {
    ref: containerRef,
    className: `table-wrapper ${classNames}`,
    tabIndex,
    role: "group",
    onScroll: updateScrollState,
    children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)(import_react_drag_listview2.default, {
      ...dragProps,
      enableScroll: !!onRowReorder,
      children: /* @__PURE__ */(0, import_jsx_runtime62.jsxs)("table", {
        className: "admin-table",
        children: [/* @__PURE__ */(0, import_jsx_runtime62.jsx)("thead", {
          className: "admin-table-header",
          children: /* @__PURE__ */(0, import_jsx_runtime62.jsxs)("tr", {
            className: "header-row",
            children: [expandable && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("th", {
              className: "header-col expand"
            }), enableBulkSelect && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("th", {
              className: "header-col select",
              children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)("input", {
                type: "checkbox",
                checked: allSelected,
                onChange: toggleAllRows
              })
            }), onRowReorder && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
              className: "admin-column drag"
            }), Object.entries(headers2).map(([key, config], i) => {
              const {
                label,
                isSortable,
                isNumeric,
                screenReaderLabel
              } = config;
              const isSorted = sortedBy === key;
              const thClass = ["header-col", isSortable && "sortable", isSorted && "sorted", isNumeric && "numeric", config.type].filter(Boolean).join(" ");
              return /* @__PURE__ */(0, import_jsx_runtime62.jsx)("th", {
                className: thClass,
                "aria-sort": isSortable && isSorted ? sortDir === ASC ? "ascending" : "descending" : null,
                style: config.width ? {
                  minWidth: typeof config.width === "number" ? `${config.width}rem` : config.width
                } : {},
                children: isSortable ? /* @__PURE__ */(0, import_jsx_runtime62.jsxs)("div", {
                  onClick: hasData ? () => handleSort(config.key) : null,
                  className: "sort-button",
                  children: [label, getSortIcon(isSorted)]
                }) : /* @__PURE__ */(0, import_jsx_runtime62.jsxs)(import_react42.Fragment, {
                  children: [label, screenReaderLabel && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("span", {
                    className: "screen-reader-only",
                    children: screenReaderLabel
                  })]
                })
              }, key || i);
            })]
          })
        }), /* @__PURE__ */(0, import_jsx_runtime62.jsx)("tbody", {
          className: "admin-table-body",
          children: isLoading ? Array.from({
            length: Number(query.per_page) || 5
          }).map((row, rowIndex) => /* @__PURE__ */(0, import_jsx_runtime62.jsxs)("tr", {
            className: "admin-row",
            children: [enableBulkSelect && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
              className: "admin-column select",
              children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)(Skeleton_default, {
                width: 1.25,
                height: 1.25
              })
            }), onRowReorder && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
              className: "admin-column drag",
              children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)(Skeleton_default, {
                width: 1,
                height: 1
              })
            }), Object.entries(headers2).map(([key], colIndex) => /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
              className: "admin-column",
              children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)(Skeleton_default, {
                width: "100%"
              })
            }, key || colIndex))]
          }, rowIndex ?? row.id)) : hasData ? rows.map((row, rowIndex) => /* @__PURE__ */(0, import_jsx_runtime62.jsxs)(import_react42.Fragment, {
            children: [/* @__PURE__ */(0, import_jsx_runtime62.jsxs)("tr", {
              className: "admin-row",
              children: [expandable && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                className: "admin-column expand",
                children: row.variation?.length > 0 && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("i", {
                  className: `adminfont-${expandedRows.includes(row.id) ? "arrow-down" : "arrow-right"}`,
                  onClick: () => setExpandedRows(prev => prev.includes(row.id) ? prev.filter(id => id !== row.id) : [...prev, row.id])
                })
              }), enableBulkSelect && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                className: "admin-column select",
                children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)("input", {
                  type: "checkbox",
                  checked: selectedIds.includes(row.id),
                  onChange: () => toggleRow(rowIndex)
                })
              }), onRowReorder && /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                className: "admin-column drag",
                children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)("i", {
                  className: "adminfont-move"
                })
              }), Object.entries(headers2).map(([key, header], colIndex) => {
                const rowId = row.id;
                const cell = row[header.key] || row[key];
                if (typeof header.render === "function") {
                  return /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                    className: `admin-column ${className} ${header?.type || ""}`,
                    style: header.width ? {
                      minWidth: typeof header.width === "number" ? `${header.width}rem` : header.width
                    } : {},
                    children: header.render(row)
                  }, `${rowId}-${colIndex}`);
                }
                if (header.type === "action") {
                  return /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                    className: "admin-column action",
                    children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)(TableRowActions_default, {
                      row,
                      rowActions: header.actions
                    })
                  }, `action-${rowId}`);
                }
                let displayValue = renderCell(row, header, format, currency);
                return /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                  className: `admin-column ${className} ${header?.type || ""}`,
                  children: header.isEditable ? renderEditableCell({
                    header,
                    cell,
                    isEditing: false,
                    onSave: onCellEdit
                  }) : displayValue
                }, `${rowId}-${colIndex}`);
              })]
            }, row.id ?? rowIndex), expandable && expandedRows.includes(row.id) && row.variation?.map(variation => /* @__PURE__ */(0, import_jsx_runtime62.jsxs)("tr", {
              className: "admin-row variation-row",
              children: [/* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                className: "admin-column expand"
              }), Object.entries(headers2).map(([key, header], colIndex) => /* @__PURE__ */(0, import_jsx_runtime62.jsx)("td", {
                className: `admin-column ${className} ${header?.type || ""}`,
                children: typeof header.render === "function" ? header.render(variation) : renderCell(variation, header, format, currency)
              }, `${variation.id}-${colIndex}`))]
            }, variation.id))]
          }, row.id ?? rowIndex)) : /* @__PURE__ */(0, import_jsx_runtime62.jsx)("tr", {
            className: "admin-row",
            children: /* @__PURE__ */(0, import_jsx_runtime62.jsx)(ComponentStatusView_default, {
              title: emptyMessage || "No data to display"
            })
          })
        })]
      })
    })
  });
};
var table_default = Table;

// src/components/table/Pagination.tsx
var import_react43 = __webpack_require__(/*! react */ "react");
var import_jsx_runtime63 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var DEFAULT_PER_PAGE_OPTIONS = [10, 25, 50, 75, 100];
var Pagination = ({
  page,
  perPage,
  total,
  onPageChange = () => {},
  onPerPageChange = () => {},
  showPagePicker = true,
  showPerPagePicker = true,
  showPageArrowsLabel = true,
  perPageOptions = DEFAULT_PER_PAGE_OPTIONS
}) => {
  const [inputValue, setInputValue] = (0, import_react43.useState)(page);
  const pageCount = Math.ceil(total / perPage);
  (0, import_react43.useEffect)(() => {
    setInputValue(page);
  }, [page]);
  const startIndex = total === 0 ? 0 : (page - 1) * perPage + 1;
  const endIndex = Math.min(page * perPage, total);
  const goToPage = (newPage, action) => {
    if (newPage < 1) {
      newPage = 1;
    }
    if (newPage > pageCount) {
      newPage = pageCount;
    }
    onPageChange(newPage, action);
  };
  const previousPage = () => goToPage(page - 1, "previous");
  const nextPage = () => goToPage(page + 1, "next");
  const firstPage = () => goToPage(1, "first");
  const lastPage = () => goToPage(pageCount, "last");
  const onInputBlur = e => {
    const newPage = Number(e.target.value);
    if (Number.isFinite(newPage) && newPage >= 1 && newPage <= pageCount) {
      goToPage(newPage, "goto");
    } else {
      setInputValue(page);
    }
  };
  const handlePerPageChange = value => {
    onPerPageChange(value);
    const newMaxPage = Math.ceil(total / value);
    if (page > newMaxPage) {
      onPageChange(newMaxPage, "goto");
    }
  };
  const getVisiblePages = () => {
    const pages2 = [];
    if (pageCount <= 6) {
      for (let i = 1; i <= pageCount; i++) {
        pages2.push(i);
      }
      return pages2;
    }
    pages2.push(1, 2);
    let middleStart = page - 1;
    let middleEnd = page + 1;
    middleStart = Math.max(middleStart, 3);
    middleEnd = Math.min(middleEnd, pageCount - 2);
    if (middleStart > 3) {
      pages2.push("...");
    }
    for (let i = middleStart; i <= middleEnd; i++) {
      pages2.push(i);
    }
    if (middleEnd < pageCount - 2) {
      pages2.push("...");
    }
    pages2.push(pageCount - 1, pageCount);
    return pages2;
  };
  const StatusLabel = showPageArrowsLabel && total > 0 && /* @__PURE__ */(0, import_jsx_runtime63.jsxs)("span", {
    className: "show-section",
    role: "status",
    "aria-live": "polite",
    children: ["Showing ", startIndex, " to ", endIndex, " of ", total, " entries."]
  });
  const SizePicker = /* @__PURE__ */(0, import_jsx_runtime63.jsxs)("div", {
    className: "showing-number",
    children: ["Show", /* @__PURE__ */(0, import_jsx_runtime63.jsx)(SelectInputUI, {
      value: perPage,
      options: perPageOptions.map(option => ({
        value: option,
        label: option
      })),
      onChange: value => {
        handlePerPageChange(value);
      }
    }), "entries"]
  });
  if (pageCount <= 1) {
    return /* @__PURE__ */(0, import_jsx_runtime63.jsxs)("div", {
      className: "pagination-number-wrapper",
      children: [StatusLabel, total > perPageOptions[0] && SizePicker]
    });
  }
  const pages = getVisiblePages();
  return /* @__PURE__ */(0, import_jsx_runtime63.jsxs)(import_jsx_runtime63.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime63.jsxs)("div", {
      className: "pagination-number-wrapper",
      children: [StatusLabel, showPerPagePicker && SizePicker]
    }), showPagePicker && /* @__PURE__ */(0, import_jsx_runtime63.jsxs)("div", {
      className: "pagination-number-wrapper",
      children: ["Go to page", /* @__PURE__ */(0, import_jsx_runtime63.jsx)(BasicInputUI, {
        type: "number",
        minNumber: 1,
        maxNumber: pageCount,
        value: inputValue,
        inputClass: "pagination-page-picker-input",
        onChange: val => setInputValue(val),
        onBlur: onInputBlur,
        onClick: e => e.currentTarget.select()
      }), /* @__PURE__ */(0, import_jsx_runtime63.jsxs)("div", {
        className: "pagination-arrow",
        children: [/* @__PURE__ */(0, import_jsx_runtime63.jsx)("span", {
          className: `${page <= 1 ? "pagination-button-disabled" : ""}`,
          onClick: firstPage,
          "aria-label": "First Page",
          children: /* @__PURE__ */(0, import_jsx_runtime63.jsx)("i", {
            className: "admin-font adminfont-pagination-prev-arrow"
          })
        }), /* @__PURE__ */(0, import_jsx_runtime63.jsx)("span", {
          className: `${page <= 1 ? "pagination-button-disabled" : ""}`,
          onClick: previousPage,
          "aria-label": "Previous Page",
          children: /* @__PURE__ */(0, import_jsx_runtime63.jsx)("i", {
            className: "admin-font adminfont-pagination-left-arrow"
          })
        }), /* @__PURE__ */(0, import_jsx_runtime63.jsx)("div", {
          className: "pagination",
          children: pages.map((pageNum, idx) => typeof pageNum === "number" ? /* @__PURE__ */(0, import_jsx_runtime63.jsx)(ButtonInputUI, {
            buttons: {
              text: String(pageNum),
              color: page === pageNum ? "purple-bg" : "white",
              onClick: () => goToPage(pageNum)
            }
          }, idx) : /* @__PURE__ */(0, import_jsx_runtime63.jsx)("span", {
            className: "pagination-ellipsis",
            children: pageNum
          }, idx))
        }), /* @__PURE__ */(0, import_jsx_runtime63.jsx)("span", {
          className: `${page >= pageCount ? "pagination-button-disabled" : ""}`,
          onClick: nextPage,
          "aria-label": "Next Page",
          children: /* @__PURE__ */(0, import_jsx_runtime63.jsx)("i", {
            className: "admin-font adminfont-pagination-right-arrow"
          })
        }), /* @__PURE__ */(0, import_jsx_runtime63.jsx)("span", {
          className: `${page >= pageCount ? "pagination-button-disabled" : ""}`,
          onClick: lastPage,
          "aria-label": "Last Page",
          children: /* @__PURE__ */(0, import_jsx_runtime63.jsx)("i", {
            className: "admin-font adminfont-pagination-next-arrow"
          })
        })]
      })]
    })]
  });
};
var Pagination_default = Pagination;

// src/components/table/BulkActionDropdown.tsx
var import_jsx_runtime64 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var BulkActionDropdown = ({
  actions = [],
  selectedIds,
  onApply,
  onClearSelection,
  onSelectCsvDownloadApply,
  onToggleSelectAll,
  totalIds,
  showDropdown = true
}) => {
  const allSelected = totalIds.length > 0 && selectedIds.length === totalIds.length;
  return /* @__PURE__ */(0, import_jsx_runtime64.jsx)("div", {
    className: "table-filter-wrapper",
    children: /* @__PURE__ */(0, import_jsx_runtime64.jsxs)("div", {
      className: "table-filter bulk",
      children: [/* @__PURE__ */(0, import_jsx_runtime64.jsxs)("span", {
        className: "action-item count",
        children: [selectedIds.length, " Rows selected", /* @__PURE__ */(0, import_jsx_runtime64.jsx)("i", {
          onClick: onClearSelection,
          className: "adminfont-close"
        })]
      }), /* @__PURE__ */(0, import_jsx_runtime64.jsx)("div", {
        className: "action-item",
        children: /* @__PURE__ */(0, import_jsx_runtime64.jsxs)("div", {
          className: "admin-btn",
          onClick: () => onToggleSelectAll(!allSelected),
          children: [" ", allSelected ? "Deselect All" : "Select All"]
        })
      }), showDropdown && actions.length > 0 && onApply && /* @__PURE__ */(0, import_jsx_runtime64.jsx)("div", {
        className: "group-field",
        children: /* @__PURE__ */(0, import_jsx_runtime64.jsx)(SelectInputUI, {
          options: actions,
          value: "",
          placeholder: "Bulk Actions",
          disabled: selectedIds.length === 0,
          onChange: value => {
            if (value) {
              onApply(String(value));
            }
          }
        })
      }), onSelectCsvDownloadApply && /* @__PURE__ */(0, import_jsx_runtime64.jsx)(ButtonInputUI, {
        buttons: {
          text: "CSV",
          icon: "download",
          disabled: selectedIds.length === 0,
          onClick: () => onSelectCsvDownloadApply(selectedIds)
        }
      })]
    })
  });
};
var BulkActionDropdown_default = BulkActionDropdown;

// src/components/table/RealtimeFilter.tsx
var import_jsx_runtime65 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var RealtimeFilters = ({
  filters,
  query,
  onFilterChange,
  rows,
  onResetFilters,
  format
}) => {
  if (!rows || rows.length === 0 && Object.keys(query).length === 0) {
    return null;
  }
  const showResetButton = Object.values(query || {}).some(value => Array.isArray(value) ? value.length : value);
  const getDefaultDateRange = () => {
    const start = /* @__PURE__ */new Date();
    start.setMonth(start.getMonth() - 1);
    return {
      startDate: start,
      endDate: /* @__PURE__ */new Date()
    };
  };
  return /* @__PURE__ */(0, import_jsx_runtime65.jsxs)("div", {
    className: "table-filter-wrapper",
    children: [/* @__PURE__ */(0, import_jsx_runtime65.jsxs)("div", {
      className: "table-filter",
      children: [/* @__PURE__ */(0, import_jsx_runtime65.jsxs)("span", {
        className: "title",
        children: [/* @__PURE__ */(0, import_jsx_runtime65.jsx)("i", {
          className: "adminfont-filter"
        }), "Filter"]
      }), filters.map(filter => {
        const value = query[filter.key];
        if (filter.type === "date") {
          const range = value || getDefaultDateRange();
          return /* @__PURE__ */(0, import_jsx_runtime65.jsx)("div", {
            className: "group-field",
            children: /* @__PURE__ */(0, import_jsx_runtime65.jsx)(CalendarInputUI, {
              value: range,
              onChange: newRange => {
                if (newRange) {
                  onFilterChange(filter.key, newRange);
                }
              },
              format
            })
          }, filter.key);
        }
        const options = filter.options?.map(opt => ({
          label: opt.label,
          value: String(opt.value)
        })) || [];
        return /* @__PURE__ */(0, import_jsx_runtime65.jsx)("div", {
          className: "group-field",
          children: /* @__PURE__ */(0, import_jsx_runtime65.jsx)(SelectInputUI, {
            type: filter.multiple ? "multi-select" : "single-select",
            options,
            value,
            size: `${filter.size}rem`,
            placeholder: `Select ${filter.label}`,
            onChange: selected => {
              onFilterChange(filter.key, selected);
            }
          })
        }, filter.key);
      })]
    }), showResetButton && /* @__PURE__ */(0, import_jsx_runtime65.jsx)(ButtonInputUI, {
      buttons: {
        text: "Reset",
        icon: "refresh",
        color: "red",
        onClick: onResetFilters
      }
    })]
  });
};
var RealtimeFilter_default = RealtimeFilters;

// src/components/table/ButtonActions.tsx
var import_jsx_runtime66 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var ButtonActions = ({
  actions = [],
  query
}) => {
  if (!actions.length) {
    return null;
  }
  const resolvedButtons = actions.map(action => ({
    text: action.label,
    icon: action.icon,
    color: action.color || "",
    onClick: () => {
      if (action.onClickWithQuery && query) {
        action.onClickWithQuery(query);
      } else {
        action.onClick?.();
      }
    }
  }));
  return /* @__PURE__ */(0, import_jsx_runtime66.jsx)(ButtonInputUI, {
    buttons: resolvedButtons,
    position: "left"
  });
};
var ButtonActions_default = ButtonActions;

// src/components/table/TableCard.tsx
var import_jsx_runtime67 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var TableCard = ({
  className = "",
  search,
  headers: headers2 = {},
  ids = [],
  isLoading = false,
  onColumnsChange,
  onSort,
  bulkActions = [],
  onBulkActionApply,
  rows = [],
  showMenu = true,
  emptyMessage,
  summary,
  title,
  totalRows = 0,
  categoryCounts = [],
  activeCategory = "all",
  languageFilterCounts = [],
  activeLanguageFilter = "all",
  filters = [],
  showColumnToggleIcon = true,
  onSelectCsvDownloadApply,
  onCellEdit,
  buttonActions,
  format,
  onRowReorder,
  currency,
  expandable,
  ...props
}) => {
  const [selectedIds, setSelectedIds] = (0, import_react44.useState)([]);
  const [derivedTotalRows, setDerivedTotalRows] = (0, import_react44.useState)(totalRows);
  const [query, setQuery] = (0, import_react44.useState)({
    orderby: "",
    order: "desc",
    paged: 1,
    per_page: 10,
    filter: {},
    categoryFilter: activeCategory,
    languageFilter: activeLanguageFilter
  });
  const onQueryChange = param => (value, direction) => {
    setQuery(prev => ({
      ...prev,
      [param]: param === "paged" || param === "per_page" ? Number(value) : value,
      order: param === "sort" ? direction : prev.order,
      orderby: param === "sort" ? value : prev.orderby
    }));
  };
  const onFilterChange = (key, value) => {
    setQuery(prev => ({
      ...prev,
      paged: 1,
      // reset to first page
      filter: {
        ...prev.filter,
        [key]: value
      }
    }));
  };
  const handleCategoryChange = value => {
    if (categoryCounts && Array.isArray(categoryCounts)) {
      const selectedCategory = categoryCounts.find(cat => cat && cat.value === value);
      setDerivedTotalRows(selectedCategory?.count ?? 0);
    }
    setQuery(prev => ({
      ...prev,
      paged: 1,
      // Reset to first page when category changes
      categoryFilter: value
    }));
  };
  const handleLanguageChange = value => {
    setQuery(prev => ({
      ...prev,
      paged: 1,
      languageFilter: value
    }));
  };
  const visibleCategories = import_react44.default.useMemo(() => {
    if (!categoryCounts || !Array.isArray(categoryCounts)) {
      return [];
    }
    return categoryCounts.filter(cat => cat && cat.count > 0);
  }, [categoryCounts]);
  const visibleLanguages = import_react44.default.useMemo(() => {
    if (!languageFilterCounts || !Array.isArray(languageFilterCounts)) {
      return [];
    }
    return languageFilterCounts.filter(lang => lang && lang.count > 0);
  }, [languageFilterCounts]);
  (0, import_react44.useEffect)(() => {
    props.onQueryUpdate?.(query);
  }, [query]);
  (0, import_react44.useEffect)(() => {
    setDerivedTotalRows(totalRows);
  }, [totalRows]);
  const handleSelectRow = (id, selected) => {
    setSelectedIds(prev => selected ? [...prev, id] : prev.filter(x => x !== id));
  };
  const handleSelectAll = selected => {
    setSelectedIds(selected ? [...ids] : []);
  };
  const handleBulkApply = action => {
    onBulkActionApply?.(action, selectedIds);
    setSelectedIds([]);
  };
  const getShowCols = (headersObj = {}) => {
    return Object.entries(headersObj).filter(([_, config]) => config.visible !== false).map(([key]) => key);
  };
  const [showCols, setShowCols] = (0, import_react44.useState)(getShowCols(headers2));
  const onColumnToggle = key => {
    const isVisible = showCols.includes(key);
    let updated;
    if (isVisible) {
      if (showCols.length <= 1) {
        return;
      }
      if (query.orderby === key) {
        const defaultSort = Object.entries(headers2).find(([_, config]) => config.defaultSort);
        if (defaultSort) {
          onQueryChange("sort")(defaultSort[0], "desc");
        }
      }
      updated = showCols.filter(c => c !== key);
    } else {
      updated = [...showCols, key];
    }
    setShowCols(updated);
    onColumnsChange?.(updated, key);
  };
  const onPageChange = (newPage, direction) => {
    props.onPageChange?.(newPage, direction);
    onQueryChange("paged")(String(newPage), direction);
  };
  const visibleHeaders = Object.entries(headers2).filter(([key, config]) => showCols.includes(key) && config.tableDisplay !== false
  // only include if table !== false (default true)
  ).map(([key, {
    ...rest
  }]) => ({
    key,
    ...rest
    // spread everything else except csv and table
  }));
  return /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("div", {
    className: `admin-table-wrapper ${className}`,
    children: [title && /* @__PURE__ */(0, import_jsx_runtime67.jsx)("div", {
      className: "table-card-header",
      children: /* @__PURE__ */(0, import_jsx_runtime67.jsx)("div", {
        className: "title",
        children: title
      })
    }), (visibleCategories.length > 0 || buttonActions || search || showMenu && showColumnToggleIcon) && /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("div", {
      className: "admin-top-filter",
      children: [(visibleCategories.length > 0 || visibleLanguages.length > 0) && /* @__PURE__ */(0, import_jsx_runtime67.jsx)(import_jsx_runtime67.Fragment, {
        children: /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("div", {
          className: "top-filter-wrapper",
          children: [visibleCategories.length > 0 && /* @__PURE__ */(0, import_jsx_runtime67.jsx)("div", {
            className: "filters category",
            children: visibleCategories.map(({
              label,
              value,
              count
            }) => /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("div", {
              className: `filter-item ${(query.categoryFilter || activeCategory) === value ? "active" : ""}`,
              onClick: () => handleCategoryChange(value),
              children: [label, " (", count, ")"]
            }, value))
          }), visibleLanguages.length > 0 && /* @__PURE__ */(0, import_jsx_runtime67.jsx)("div", {
            className: "filter language",
            children: visibleLanguages.map(({
              label,
              value,
              count
            }) => /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("div", {
              className: `filter-item ${(query.languageFilter || activeLanguageFilter) === value ? "active" : ""}`,
              onClick: () => handleLanguageChange(value),
              children: [label, " (", count, ")"]
            }, value))
          })]
        })
      }), /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("div", {
        className: "table-action-wrapper",
        children: [buttonActions && /* @__PURE__ */(0, import_jsx_runtime67.jsx)(ButtonActions_default, {
          actions: buttonActions,
          query
        }), search && /* @__PURE__ */(0, import_jsx_runtime67.jsx)(HeaderSearch_default, {
          search: {
            placeholder: search.placeholder,
            options: search.options
          },
          width: search.size,
          onQueryUpdate: payload => {
            onQueryChange("searchValue")(payload.searchValue);
            if ("searchAction" in payload) {
              onQueryChange("searchAction")(String(payload.searchAction));
            }
          }
        }), showMenu && showColumnToggleIcon && /* @__PURE__ */(0, import_jsx_runtime67.jsx)(PopupUI, {
          position: "menu-dropdown",
          toggleIcon: "more-vertical",
          tooltipName: "Manage display",
          tooltipPosition: "end",
          children: /* @__PURE__ */(0, import_jsx_runtime67.jsx)(ItemListUI, {
            className: "default table-menu",
            items: Object.entries(headers2).filter(([_, config]) => !config.required).map(([key, config]) => ({
              id: key,
              title: config.label,
              action: () => onColumnToggle(key),
              tags: /* @__PURE__ */(0, import_jsx_runtime67.jsx)("input", {
                type: "checkbox",
                checked: showCols.includes(key),
                onChange: e => {
                  e.stopPropagation();
                  onColumnToggle(key);
                }
              })
            }))
          })
        })]
      })]
    }), /* @__PURE__ */(0, import_jsx_runtime67.jsx)(table_default, {
      rows,
      headers: visibleHeaders,
      query,
      onSort: onSort || onQueryChange("sort"),
      ids,
      onRowReorder,
      selectedIds,
      onSelectRow: handleSelectRow,
      onSelectAll: handleSelectAll,
      onCellEdit,
      enableBulkSelect: bulkActions.length > 0 || !!onSelectCsvDownloadApply,
      emptyMessage,
      isLoading,
      format,
      currency,
      expandable
    }), derivedTotalRows > 0 && /* @__PURE__ */(0, import_jsx_runtime67.jsx)("div", {
      className: "admin-pagination",
      children: isLoading ? /* @__PURE__ */(0, import_jsx_runtime67.jsx)(Skeleton_default, {
        width: "100%"
      }) : /* @__PURE__ */(0, import_jsx_runtime67.jsxs)(import_react44.Fragment, {
        children: [/* @__PURE__ */(0, import_jsx_runtime67.jsx)(Pagination_default, {
          page: Number(query.paged),
          perPage: Number(query.per_page),
          total: derivedTotalRows,
          onPageChange,
          onPerPageChange: perPage => onQueryChange("per_page")(String(perPage))
        }), summary && /* @__PURE__ */(0, import_jsx_runtime67.jsx)("ul", {
          className: "table-summary",
          role: "complementary",
          children: summary.map(({
            label,
            value
          }, i) => /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("li", {
            className: "table-summary-item",
            children: [/* @__PURE__ */(0, import_jsx_runtime67.jsx)("span", {
              className: "table-summary-value",
              children: value
            }), /* @__PURE__ */(0, import_jsx_runtime67.jsx)("span", {
              className: "table-summary-label",
              children: label
            })]
          }, i))
        })]
      })
    }), /* @__PURE__ */(0, import_jsx_runtime67.jsxs)("div", {
      className: "filter-wrapper",
      children: [selectedIds.length <= 1 && filters.length > 0 && /* @__PURE__ */(0, import_jsx_runtime67.jsx)(RealtimeFilter_default, {
        filters,
        query: query.filter || {},
        onFilterChange,
        rows,
        onResetFilters: () => setQuery(prev => ({
          ...prev,
          filter: {},
          paged: 1
        })),
        format
      }), selectedIds.length > 1 && (bulkActions.length > 0 || onSelectCsvDownloadApply) && /* @__PURE__ */(0, import_jsx_runtime67.jsx)(BulkActionDropdown_default, {
        actions: bulkActions,
        selectedIds,
        onApply: handleBulkApply,
        onClearSelection: () => setSelectedIds([]),
        onSelectCsvDownloadApply,
        totalIds: ids,
        onToggleSelectAll: select => setSelectedIds(select ? [...ids] : []),
        showDropdown: bulkActions.length > 0
      })]
    })]
  });
};
var TableCard_default = TableCard;

// src/utils/settingUtil.ts
var getSettingsByPriority = settings => {
  if (!Array.isArray(settings)) {
    return [];
  }
  return settings;
};
var filterSettingByIds = (settings, ids) => {
  const filterSettings = [];
  if (Array.isArray(settings) && Array.isArray(ids)) {
    for (const setting of settings) {
      if (setting.type === "folder") {
        const settingContent = filterSettingByIds(setting.content, ids);
        if (settingContent.length) {
          filterSettings.push({
            ...setting,
            content: settingContent
          });
        }
        continue;
      }
      if (ids.includes(setting.content.id)) {
        filterSettings.push(setting);
      }
    }
  }
  return filterSettings;
};
var getDefaultSettings = settings => {
  const filterSettings = [];
  if (Array.isArray(settings)) {
    settings.forEach(setting => {
      if (setting.type === "folder") {
        setting.content = getDefaultSettings(setting.content);
        if (setting.content.length) {
          filterSettings.push(setting);
        }
        return;
      }
      const content = setting.content;
      if (!content.pro_dependent && !content.module_dependent) {
        filterSettings.push(setting);
      }
    });
  }
  return filterSettings;
};
var getAvailableSettings = (settings, ids = []) => {
  return getSettingsByPriority([...getDefaultSettings(settings), ...filterSettingByIds(settings, ids)]);
};
var getSettingById = (settings, settingId) => {
  if (Array.isArray(settings)) {
    for (const setting of settings) {
      if (setting.type === "folder") {
        const found = getSettingById(setting.content, settingId);
        if (found) {
          return found;
        }
        continue;
      }
      const content = setting.content;
      if (content.id === settingId) {
        return content;
      }
    }
  }
  return null;
};
var isActiveSetting = (setting, proActive, ids) => {
  if (!setting.module_dependent) {
    return true;
  }
  if (ids.includes(setting.id)) {
    if (!setting.pro_dependent) {
      return true;
    }
    if (proActive) {
      return true;
    }
  }
  return false;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);

/***/ },

/***/ "./src/blocks/store-quick-info/view.js"
/*!*********************************************!*\
  !*** ./src/blocks/store-quick-info/view.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StoreQuickInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreQuickInfo */ "./src/blocks/store-quick-info/StoreQuickInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



window.addEventListener('load', () => {
  const el = document.getElementById('multivendorx-store-quick-info');
  if (!el) {
    return;
  }
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el);
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_StoreQuickInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
});

/***/ },

/***/ "./src/blocks/store-quick-info/StoreQuickInfo.tsx"
/*!********************************************************!*\
  !*** ./src/blocks/store-quick-info/StoreQuickInfo.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../../node_modules/.pnpm/axios@1.16.1/node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zyra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zyra */ "../../packages/js/zyra/build/index.js");
/* harmony import */ var zyra__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zyra__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* global StoreInfo */





const StoreQuickInfo = () => {
    const [rating, setRatings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [ratingCount, setRatingsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [totalProducts, setTotalProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const storeDetails = StoreInfo.storeDetails;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const fetchRating = async () => {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,zyra__WEBPACK_IMPORTED_MODULE_2__.getApiLink)(StoreInfo, `reviews/${storeDetails.storeId}`), {
                    headers: {
                        'X-WP-Nonce': StoreInfo.nonce
                    },
                    params: {
                        storeId: storeDetails.storeId
                    }
                });
                setRatings(Number(response.data) || 0);
            }
            catch (err) {
                console.error('Failed to fetch rating', err);
            }
        };
        const fetchRatingCount = async () => {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,zyra__WEBPACK_IMPORTED_MODULE_2__.getApiLink)(StoreInfo, `review`), {
                    headers: {
                        'X-WP-Nonce': StoreInfo.nonce
                    },
                    params: {
                        store_id: storeDetails.storeId
                    }
                });
                setRatingsCount(Number(response.headers['x-wp-total']) || 0);
            }
            catch (err) {
                console.error('Failed to fetch rating', err);
            }
        };
        const fetchTotalProducts = async () => {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${StoreInfo.apiUrl}/wc/v3/products`, {
                    headers: {
                        'X-WP-Nonce': StoreInfo.nonce
                    },
                    params: {
                        per_page: 1,
                        meta_key: 'multivendorx_store_id',
                        value: storeDetails.storeId
                    }
                });
                const total = parseInt(response.headers['x-wp-total'] || '0', 10);
                setTotalProducts(total);
            }
            catch (err) {
                console.error('Failed to fetch total products', err);
            }
        };
        if (StoreInfo.activeModules?.includes('store-review')) {
            fetchRating();
            fetchRatingCount();
        }
        fetchTotalProducts();
    }, [storeDetails.storeId]);
    const renderStars = rating => {
        if (!rating) {
            return null;
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "star-rating",
            role: "img",
            "aria-label": `Rated ${rating.toFixed(1)} out of 5`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                style: {
                    width: `${rating / 5 * 100}%`
                },
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                        className: "rating",
                        children: rating.toFixed(1)
                    }), ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('out of 5', 'multivendorx')]
            })
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "store-card",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "store-header",
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "store-avatar",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                            src: storeDetails.storeLogo || StoreInfo.default_user_avatar,
                            alt: "Store Avatar"
                        })
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "store-info",
                        children: [storeDetails.storeName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                                className: "store-name",
                                children: storeDetails.storeName
                            }), storeDetails.storeEmail && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                                children: [' ', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                                        className: "dashicons dashicons-email"
                                    }), ' ', storeDetails.storeEmail]
                            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                className: "store-rating",
                                children: [renderStars(rating), ratingCount !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                                        className: "rating-count",
                                        children: ratingCount > 0 ? `(${ratingCount} ${ratingCount === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('review', 'multivendorx') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('reviews', 'multivendorx')})` : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(0 reviews)', 'multivendorx')
                                    })]
                            })]
                    })]
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "store-stats",
                children: [totalProducts !== null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "stat-item",
                        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                                className: "stat-number",
                                children: totalProducts
                            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                                className: "stat-label",
                                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Products', 'multivendorx')
                            })]
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "stat-item",
                        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                                className: "stat-number",
                                children: ratingCount || 0
                            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                                className: "stat-label",
                                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Reviews', 'multivendorx')
                            })]
                    })]
            })]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreQuickInfo);


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = window["React"];

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "?d37c"
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
() {

/* (ignored) */

/***/ },

/***/ "?9e5a"
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
() {

/* (ignored) */

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
/******/ 			"block/store-quick-info/view": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/blocks/store-quick-info/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map