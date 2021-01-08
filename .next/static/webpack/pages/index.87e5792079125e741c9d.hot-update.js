webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_lib_input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input/Input */ "./node_modules/antd/lib/input/Input.js");
/* harmony import */ var antd_lib_input_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_Input__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\82107\\Desktop\\\uAC2D\uC774\uC5B4_\uC0AC\uC804\uC900\uBE44\\\uAC15\uC758\uB530\uB77C\uD558\uAE30\\\uC6F9\uAC8C\uC784\uC744 \uB9CC\uB4E4\uBA70 \uBC30\uC6B0\uB294 \uB9AC\uC561\uD2B8\\fullStack\\front\\components\\ImagesZoom\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;
  var overlay = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      position: 'fixed',
      zIndex: 5000,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: overlay,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138\uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          afterChange: function afterChange(slide) {
            return setCurrentSlide(slide);
          },
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(function (v) {
            /*#__PURE__*/
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "9OdWbYG6ARiUrjmeWYIyTCAyjm8=");

_c = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c;

$RefreshReg$(_c, "ImagesZoom");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/_util/devWarning.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/_util/devWarning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/reactNode.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/reactNode.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceElement = replaceElement;
exports.cloneElement = cloneElement;
exports.isValidElement = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var isValidElement = React.isValidElement;
exports.isValidElement = isValidElement;

function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}

function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/type.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/type.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tupleNum = exports.tuple = void 0;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;

var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

exports.tupleNum = tupleNum;

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _default = _en_US["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/SizeContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SizeContext = /*#__PURE__*/React.createContext(undefined);

var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

exports.SizeContextProvider = SizeContextProvider;
var _default = SizeContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports.ConfigConsumer = exports.ConfigContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderEmpty = _interopRequireDefault(__webpack_require__(/*! ./renderEmpty */ "./node_modules/antd/lib/config-provider/renderEmpty.js"));

var ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
/** @deprecated Use hooks instead. This is a legacy function */

exports.ConfigConsumer = ConfigConsumer;

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _context.ConfigContext;
  }
});
exports["default"] = exports.configConsumerProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _localeProvider = _interopRequireWildcard(__webpack_require__(/*! ../locale-provider */ "./node_modules/antd/lib/locale-provider/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/config-provider/context.js");

var _SizeContext = __webpack_require__(/*! ./SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js");

var _message = _interopRequireDefault(__webpack_require__(/*! ../message */ "./node_modules/antd/lib/message/index.js"));

var _notification = _interopRequireDefault(__webpack_require__(/*! ../notification */ "./node_modules/antd/lib/notification/index.js"));

// TODO: remove this lint
// SFC has specified a displayName, but not worked.

/* eslint-disable react/display-name */
var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
exports.configConsumerProps = configConsumerProps;

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {
      _message["default"].config({
        rtl: props.direction === 'rtl'
      });

      _notification["default"].config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);

  var getPrefixClsWrapper = function getPrefixClsWrapper(context) {
    return function (suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || context.getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
  };

  var renderProvider = function renderProvider(context, legacyLocale) {
    var children = props.children,
        getTargetContainer = props.getTargetContainer,
        getPopupContainer = props.getPopupContainer,
        renderEmpty = props.renderEmpty,
        csp = props.csp,
        autoInsertSpaceInButton = props.autoInsertSpaceInButton,
        form = props.form,
        input = props.input,
        locale = props.locale,
        pageHeader = props.pageHeader,
        componentSize = props.componentSize,
        direction = props.direction,
        space = props.space,
        virtual = props.virtual,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
    var config = (0, _extends2["default"])((0, _extends2["default"])({}, context), {
      getPrefixCls: getPrefixClsWrapper(context),
      csp: csp,
      autoInsertSpaceInButton: autoInsertSpaceInButton,
      locale: locale || legacyLocale,
      direction: direction,
      space: space,
      virtual: virtual,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth
    });

    if (getTargetContainer) {
      config.getTargetContainer = getTargetContainer;
    }

    if (getPopupContainer) {
      config.getPopupContainer = getPopupContainer;
    }

    if (renderEmpty) {
      config.renderEmpty = renderEmpty;
    }

    if (pageHeader) {
      config.pageHeader = pageHeader;
    }

    if (input) {
      config.input = input;
    }

    if (form) {
      config.form = form;
    }

    var childNode = children; // Additional Form provider

    var validateMessages = {};

    if (locale && locale.Form && locale.Form.defaultValidateMessages) {
      validateMessages = locale.Form.defaultValidateMessages;
    }

    if (form && form.validateMessages) {
      validateMessages = (0, _extends2["default"])((0, _extends2["default"])({}, validateMessages), form.validateMessages);
    }

    if (Object.keys(validateMessages).length > 0) {
      childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
        validateMessages: validateMessages
      }, children);
    }

    var childrenWithLocale = locale === undefined ? childNode : /*#__PURE__*/React.createElement(_localeProvider["default"], {
      locale: locale || legacyLocale,
      _ANT_MARK__: _localeProvider.ANT_MARK
    }, childNode);
    return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
      value: config
    }, childrenWithLocale));
  };

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
    return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (context) {
      return renderProvider(context, legacyLocale);
    });
  });
};
/** @private internal usage. do not use in your production */


ConfigProvider.ConfigContext = _context.ConfigContext;
var _default = ConfigProvider;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/renderEmpty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./node_modules/antd/lib/empty/index.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/config-provider/index.js");

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/locale/en_US */ "./node_modules/rc-picker/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2["default"])({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/empty.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/empty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/antd/lib/empty/empty.js"));

var _simple = _interopRequireDefault(__webpack_require__(/*! ./simple */ "./node_modules/antd/lib/empty/simple.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);

var Empty = function Empty(_a) {
  var className = _a.className,
      customizePrefixCls = _a.prefixCls,
      _a$image = _a.image,
      image = _a$image === void 0 ? defaultEmptyImg : _a$image,
      description = _a.description,
      children = _a.children,
      imageStyle = _a.imageStyle,
      restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Empty"
  }, function (locale) {
    var _classNames;

    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : locale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;

    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/React.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }

    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/React.createElement("p", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/simple.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/empty/simple.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var _default = Simple;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/ClearableLabeledInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/input/ClearableLabeledInput.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPrefixSuffix = hasPrefixSuffix;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var ClearableInputType = (0, _type.tuple)('text', 'input');

function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}

var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ClearableLabeledInput, _React$Component);

  var _super = (0, _createSuper2["default"])(ClearableLabeledInput);

  function ClearableLabeledInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, ClearableLabeledInput);
    _this = _super.apply(this, arguments);
    /** @private Do not use out of this class. We do not promise this is always keep. */

    _this.containerRef = /*#__PURE__*/React.createRef();

    _this.onInputMouseUp = function (e) {
      var _a;

      if ((_a = _this.containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        var triggerFocus = _this.props.triggerFocus;
        triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _this$props = this.props,
          allowClear = _this$props.allowClear,
          value = _this$props.value,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          handleReset = _this$props.handleReset;

      if (!allowClear) {
        return null;
      }

      var needClear = !disabled && !readOnly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], {
        onClick: handleReset,
        className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className, "-hidden"), !needClear), className),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props2 = this.props,
          suffix = _this$props2.suffix,
          allowClear = _this$props2.allowClear;

      if (suffix || allowClear) {
        return /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }

      return null;
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, element) {
      var _classNames2;

      var _this$props3 = this.props,
          focused = _this$props3.focused,
          value = _this$props3.value,
          prefix = _this$props3.prefix,
          className = _this$props3.className,
          size = _this$props3.size,
          suffix = _this$props3.suffix,
          disabled = _this$props3.disabled,
          allowClear = _this$props3.allowClear,
          direction = _this$props3.direction,
          style = _this$props3.style,
          readOnly = _this$props3.readOnly,
          bordered = _this$props3.bordered;
      var suffixNode = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(this.props)) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }

      var prefixNode = prefix ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, prefix) : null;
      var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), disabled), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), suffix && allowClear && value), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames2, "".concat(className), !hasAddon(this.props) && className), _classNames2));
      return /*#__PURE__*/React.createElement("span", {
        ref: this.containerRef,
        className: affixWrapperCls,
        style: style,
        onMouseUp: this.onInputMouseUp
      }, prefixNode, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value,
        className: (0, _Input.getInputClassName)(prefixCls, bordered, size, disabled)
      }), suffixNode);
    }
  }, {
    key: "renderInputWithLabel",
    value: function renderInputWithLabel(prefixCls, labeledElement) {
      var _classNames4;

      var _this$props4 = this.props,
          addonBefore = _this$props4.addonBefore,
          addonAfter = _this$props4.addonAfter,
          style = _this$props4.style,
          size = _this$props4.size,
          className = _this$props4.className,
          direction = _this$props4.direction; // Not wrap when there is not addons

      if (!hasAddon(this.props)) {
        return labeledElement;
      }

      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), wrapperClassName, (0, _defineProperty2["default"])({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
      var mergedGroupClassName = (0, _classnames["default"])("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), className); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return /*#__PURE__*/React.createElement("span", {
        className: mergedGroupClassName,
        style: style
      }, /*#__PURE__*/React.createElement("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, (0, _reactNode.cloneElement)(labeledElement, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element) {
      var _classNames5;

      var _this$props5 = this.props,
          value = _this$props5.value,
          allowClear = _this$props5.allowClear,
          className = _this$props5.className,
          style = _this$props5.style,
          direction = _this$props5.direction,
          bordered = _this$props5.bordered;

      if (!allowClear) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }

      var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (_classNames5 = {}, (0, _defineProperty2["default"])(_classNames5, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames5, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames5, "".concat(className), !hasAddon(this.props) && className), _classNames5));
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style
      }, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          inputType = _this$props6.inputType,
          element = _this$props6.element;

      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }

      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  }]);
  return ClearableLabeledInput;
}(React.Component);

var _default = ClearableLabeledInput;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/Input.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/input/Input.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixControlledValue = fixControlledValue;
exports.resolveOnChange = resolveOnChange;
exports.getInputClassName = getInputClassName;
exports.triggerFocus = triggerFocus;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _ClearableLabeledInput = _interopRequireWildcard(__webpack_require__(/*! ./ClearableLabeledInput */ "./node_modules/antd/lib/input/ClearableLabeledInput.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

function resolveOnChange(target, e, onChange) {
  if (onChange) {
    var event = e;

    if (e.type === 'click') {
      // click clear icon
      event = Object.create(e);
      event.target = target;
      event.currentTarget = target;
      var originalInputValue = target.value; // change target ref value cause e.target.value should be '' when clear input

      target.value = '';
      onChange(event); // reset target ref value

      target.value = originalInputValue;
      return;
    }

    onChange(event);
  }
}

function getInputClassName(prefixCls, bordered, size, disabled, direction) {
  var _classNames;

  return (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames));
}

function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option); // Selection content

  var _ref = option || {},
      cursor = _ref.cursor;

  if (cursor) {
    var len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;

      case 'end':
        element.setSelectionRange(len, len);
        break;

      default:
        element.setSelectionRange(0, len);
    }
  }
}

var Input = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Input, _React$Component);

  var _super = (0, _createSuper2["default"])(Input);

  function Input(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Input);
    _this = _super.call(this, props);
    _this.direction = 'ltr';

    _this.focus = function (option) {
      triggerFocus(_this.input, option);
    };

    _this.saveClearableInput = function (input) {
      _this.clearableInput = input;
    };

    _this.saveInput = function (input) {
      _this.input = input;
    };

    _this.onFocus = function (e) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      }, _this.clearPasswordValueAttribute);

      if (onFocus) {
        onFocus(e);
      }
    };

    _this.onBlur = function (e) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      }, _this.clearPasswordValueAttribute);

      if (onBlur) {
        onBlur(e);
      }
    };

    _this.handleReset = function (e) {
      _this.setValue('', function () {
        _this.focus();
      });

      resolveOnChange(_this.input, e, _this.props.onChange);
    };

    _this.renderInput = function (prefixCls, size, bordered) {
      var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var _this$props = _this.props,
          className = _this$props.className,
          addonBefore = _this$props.addonBefore,
          addonAfter = _this$props.addonAfter,
          customizeSize = _this$props.size,
          disabled = _this$props.disabled; // Fix https://fb.me/react-unknown-prop

      var otherProps = (0, _omit["default"])(_this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue', 'size', 'inputType', 'bordered']);
      return /*#__PURE__*/React.createElement("input", (0, _extends2["default"])({
        autoComplete: input.autoComplete
      }, otherProps, {
        onChange: _this.handleChange,
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        onKeyDown: _this.handleKeyDown,
        className: (0, _classnames["default"])(getInputClassName(prefixCls, bordered, customizeSize || size, disabled, _this.direction), (0, _defineProperty2["default"])({}, className, className && !addonBefore && !addonAfter)),
        ref: _this.saveInput
      }));
    };

    _this.clearPasswordValueAttribute = function () {
      // https://github.com/ant-design/ant-design/issues/20541
      _this.removePasswordTimeout = setTimeout(function () {
        if (_this.input && _this.input.getAttribute('type') === 'password' && _this.input.hasAttribute('value')) {
          _this.input.removeAttribute('value');
        }
      });
    };

    _this.handleChange = function (e) {
      _this.setValue(e.target.value, _this.clearPasswordValueAttribute);

      resolveOnChange(_this.input, e, _this.props.onChange);
    };

    _this.handleKeyDown = function (e) {
      var _this$props2 = _this.props,
          onPressEnter = _this$props2.onPressEnter,
          onKeyDown = _this$props2.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    _this.renderComponent = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls,
          direction = _ref2.direction,
          input = _ref2.input;
      var _this$state = _this.state,
          value = _this$state.value,
          focused = _this$state.focused;
      var _this$props3 = _this.props,
          customizePrefixCls = _this$props3.prefixCls,
          _this$props3$bordered = _this$props3.bordered,
          bordered = _this$props3$bordered === void 0 ? true : _this$props3$bordered;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      _this.direction = direction;
      return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
        return /*#__PURE__*/React.createElement(_ClearableLabeledInput["default"], (0, _extends2["default"])({
          size: size
        }, _this.props, {
          prefixCls: prefixCls,
          inputType: "input",
          value: fixControlledValue(value),
          element: _this.renderInput(prefixCls, size, bordered, input),
          handleReset: _this.handleReset,
          ref: _this.saveClearableInput,
          direction: direction,
          focused: focused,
          triggerFocus: _this.focus,
          bordered: bordered
        }));
      });
    };

    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value,
      focused: false,
      // eslint-disable-next-line react/no-unused-state
      prevValue: props.value
    };
    return _this;
  }

  (0, _createClass2["default"])(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.clearPasswordValueAttribute();
    } // Since polyfill `getSnapshotBeforeUpdate` need work with `componentDidUpdate`.
    // We keep an empty function here.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if ((0, _ClearableLabeledInput.hasPrefixSuffix)(prevProps) !== (0, _ClearableLabeledInput.hasPrefixSuffix)(this.props)) {
        (0, _devWarning["default"])(this.input !== document.activeElement, 'Input', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ");
      }

      return null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.removePasswordTimeout) {
        clearTimeout(this.removePasswordTimeout);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "setSelectionRange",
    value: function setSelectionRange(start, end, direction) {
      this.input.setSelectionRange(start, end, direction);
    }
  }, {
    key: "select",
    value: function select() {
      this.input.select();
    }
  }, {
    key: "setValue",
    value: function setValue(value, callback) {
      if (this.props.value === undefined) {
        this.setState({
          value: value
        }, callback);
      } else {
        callback === null || callback === void 0 ? void 0 : callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, _ref3) {
      var prevValue = _ref3.prevValue;
      var newState = {
        prevValue: nextProps.value
      };

      if (nextProps.value !== undefined || prevValue !== nextProps.value) {
        newState.value = nextProps.value;
      }

      return newState;
    }
  }]);
  return Input;
}(React.Component);

Input.defaultProps = {
  type: 'text'
};
var _default = Input;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleReceiver = useLocaleReceiver;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale-provider/default.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleReceiver, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleReceiver);

  function LocaleReceiver() {
    (0, _classCallCheck2["default"])(this, LocaleReceiver);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = _context["default"];

function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = React.useContext(_context["default"]);
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || _default["default"][componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var LocaleContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var _default = LocaleContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _default = _default2["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _locale = __webpack_require__(/*! ../modal/locale */ "./node_modules/antd/lib/modal/locale.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleProvider, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LocaleProvider);
    _this = _super.call(this, props);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _devWarning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  (0, _createClass2["default"])(LocaleProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(_context["default"].Provider, {
        value: (0, _extends2["default"])((0, _extends2["default"])({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);
  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.defaultProps = {
  locale: {}
};

/***/ }),

/***/ "./node_modules/antd/lib/locale/default.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/locale/default.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

var _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ "./node_modules/antd/lib/calendar/locale/en_US.js"));

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};
var _default = localeValues;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/message/hooks/useMessage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseMessage;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _ = __webpack_require__(/*! .. */ "./node_modules/antd/lib/message/index.js");

function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var target = args.key || (0, _.getKeyThenIncreaseKey)();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          prefixCls: mergedPrefixCls
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
      return (0, _.attachTypeApi)(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useMessage;
}

/***/ }),

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyThenIncreaseKey = getKeyThenIncreaseKey;
exports.attachTypeApi = attachTypeApi;
exports["default"] = exports.getInstance = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

var _useMessage = _interopRequireDefault(__webpack_require__(/*! ./hooks/useMessage */ "./node_modules/antd/lib/message/hooks/useMessage.js"));

var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;
var rtl = false;

function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var prefixCls = args.prefixCls || localPrefixCls;

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      instance: messageInstance
    });
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;
    callback({
      prefixCls: prefixCls,
      instance: instance
    });
  });
}

var typeToIcon = {
  info: _InfoCircleFilled["default"],
  success: _CheckCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  loading: _LoadingOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = typeToIcon[args.type];
  var messageClass = (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/React.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
    onClose: args.onClose,
    onClick: args.onClick
  };
}

function notice(args) {
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        key: target,
        onClose: callback
      }), prefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
            removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
            destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};

function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0, _extends2["default"])((0, _extends2["default"])({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}

['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = (0, _useMessage["default"])(getRCNotificationInstance, getRCNoticeProps);
/** @private test only function. Not work on production */

var getInstance = function getInstance() {
  return  false ? undefined : null;
};

exports.getInstance = getInstance;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0, _extends2["default"])((0, _extends2["default"])({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
/*!*********************************************************************!*\
  !*** ./node_modules/antd/lib/notification/hooks/useNotification.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseNotification;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/notification/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getInstance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! ./hooks/useNotification */ "./node_modules/antd/lib/notification/hooks/useNotification.js"));

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = 'ant-notification';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
  var outerPrefixCls = args.prefixCls || defaultPrefixCls;
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var cacheKey = "".concat(outerPrefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: prefixCls,
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(outerPrefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: "".concat(outerPrefixCls, "-close-icon")
  }));
  var notificationClass = (0, _classnames["default"])("".concat(outerPrefixCls, "-").concat(placement), (0, _defineProperty2["default"])({}, "".concat(outerPrefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    _rcNotification["default"].newInstance({
      prefixCls: outerPrefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: prefixCls,
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (args.icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (args.type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[args.type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(args.type)
    });
  }

  var autoMarginTag = !args.description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/React.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, args.message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, args.description), args.btn ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, args.btn) : null),
    duration: duration,
    closable: true,
    onClose: args.onClose,
    onClick: args.onClick,
    key: args.key,
    style: args.style || {},
    className: args.className
  };
}

function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls));
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = (0, _useNotification["default"])(getNotificationInstance, getRCNoticeProps);
/** @private test only function. Not work on production */

var getInstance = function getInstance(cacheKey) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",  false ? undefined : null);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

exports.getInstance = getInstance;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-notification/lib/Notice.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-notification/lib/Notice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Notice = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Notice, _Component);

  var _super = (0, _createSuper2.default)(Notice);

  function Notice() {
    var _this;

    (0, _classCallCheck2.default)(this, Notice);
    _this = _super.apply(this, arguments);
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var _this$props = _this.props,
          onClose = _this$props.onClose,
          noticeKey = _this$props.noticeKey;

      if (onClose) {
        onClose(noticeKey);
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closable = _this$props2.closable,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          holder = _this$props2.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});
      var node = React.createElement("div", Object.assign({
        className: (0, _classnames.default)(componentClass, className, (0, _defineProperty2.default)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), React.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? React.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || React.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return _reactDom.default.createPortal(node, holder);
      }

      return node;
    }
  }]);
  return Notice;
}(React.Component);

exports.default = Notice;
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5
};

/***/ }),

/***/ "./node_modules/rc-notification/lib/useNotification.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-notification/lib/useNotification.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNotification;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Notice = _interopRequireDefault(__webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/lib/Notice.js"));

function useNotification(notificationInstance) {
  var createdRef = React.useRef({});

  var _React$useState = React.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && !createdRef.current[key]) {
        var noticeEle = React.createElement(_Notice.default, Object.assign({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          return [].concat((0, _toConsumableArray2.default)(originElements), [noticeEle]);
        });
      }
    });
  }

  return [notify, React.createElement(React.Fragment, null, elements)];
}

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/en_US.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
var _default = locale;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvZGV2V2FybmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JlYWN0Tm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3R5cGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYWxlbmRhci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9yZW5kZXJFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L2VtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9DbGVhcmFibGVMYWJlbGVkSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaG9va3MvdXNlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaG9va3MvdXNlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL2xpYi9Ob3RpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXBpY2tlci9saWIvbG9jYWxlL2VuX1VTLmpzIl0sIm5hbWVzIjpbIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwib3ZlcmxheSIsInVzZU1lbW8iLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUMsU0FBWEEsVUFBVyxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDakMsTUFBTUMsT0FBTyxHQUFDQyxxREFBTyxDQUFDO0FBQUEsV0FBSztBQUN2QkMsY0FBUSxFQUFFLE9BRGE7QUFFdkJDLFlBQU0sRUFBRSxJQUZlO0FBR3ZCQyxTQUFHLEVBQUMsQ0FIbUI7QUFJdkJDLFVBQUksRUFBQyxDQUprQjtBQUt2QkMsV0FBSyxFQUFDLENBTGlCO0FBTXZCQyxZQUFNLEVBQUM7QUFOZ0IsS0FBTDtBQUFBLEdBQUQsRUFPbEIsRUFQa0IsQ0FBckI7O0FBRGlDLGtCQVNJQyxzREFBUSxDQUFDLENBQUQsQ0FUWjtBQUFBLE1BUzFCQyxZQVQwQjtBQUFBLE1BU2JDLGVBVGE7O0FBVWpDLHNCQUNJO0FBQUssU0FBSyxFQUFFVixPQUFaO0FBQUEsNEJBQ0k7QUFBQSw4QkFD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RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCwySUFBMkk7QUFDM0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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QyxvR0FBc0M7O0FBRTNGLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCxxQ0FBcUMsbUJBQU8sQ0FBQyw4REFBVTs7QUFFdkQ7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM1Q2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7Ozs7Ozs7Ozs7O0FDcEJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44N2U1NzkyMDc5MTI1ZTc0MWM5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGZpeENvbnRyb2xsZWRWYWx1ZSB9IGZyb20gJ2FudGQvbGliL2lucHV0L0lucHV0JztcclxuXHJcbmNvbnN0IEltYWdlc1pvb209KHtpbWFnZXMsb25DbG9zZX0pPT57XHJcbiAgICBjb25zdCBvdmVybGF5PXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgekluZGV4OiA1MDAwLFxyXG4gICAgICAgIHRvcDowLFxyXG4gICAgICAgIGxlZnQ6MCxcclxuICAgICAgICByaWdodDowLFxyXG4gICAgICAgIGJvdHRvbTowXHJcbiAgICB9KSxbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLHNldEN1cnJlbnRTbGlkZV09dXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17b3ZlcmxheX0+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+7IOB7IS47J2066+47KeAPC9oMT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+WDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhzbGlkZSk9PnNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSW1hZ2VzWm9vbS5wcm9wVHlwZXM9e1xyXG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVzZXRXYXJuZWRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dhcm5pbmcucmVzZXRXYXJuZWQ7XG4gIH1cbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy11dGlsL2xpYi93YXJuaW5nXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWQsIGNvbXBvbmVudCwgbWVzc2FnZSkge1xuICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSh2YWxpZCwgXCJbYW50ZDogXCIuY29uY2F0KGNvbXBvbmVudCwgXCJdIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVwbGFjZUVsZW1lbnQgPSByZXBsYWNlRWxlbWVudDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIGlzVmFsaWRFbGVtZW50ID0gUmVhY3QuaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQsIHJlcGxhY2VtZW50LCBwcm9wcykge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSByZXR1cm4gcmVwbGFjZW1lbnQ7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHR5cGVvZiBwcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzKGVsZW1lbnQucHJvcHMgfHwge30pIDogcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQsIHByb3BzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHVwbGVOdW0gPSBleHBvcnRzLnR1cGxlID0gdm9pZCAwO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjE3NjE2NS93YXlzLXRvLWdldC1zdHJpbmctbGl0ZXJhbC10eXBlLW9mLWFycmF5LXZhbHVlcy13aXRob3V0LWVudW0tb3ZlcmhlYWRcbnZhciB0dXBsZSA9IGZ1bmN0aW9uIHR1cGxlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3M7XG59O1xuXG5leHBvcnRzLnR1cGxlID0gdHVwbGU7XG5cbnZhciB0dXBsZU51bSA9IGZ1bmN0aW9uIHR1cGxlTnVtKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gYXJncztcbn07XG5cbmV4cG9ydHMudHVwbGVOdW0gPSB0dXBsZU51bTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9lbl9VU1tcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLlNpemVDb250ZXh0UHJvdmlkZXIgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBTaXplQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbnZhciBTaXplQ29udGV4dFByb3ZpZGVyID0gZnVuY3Rpb24gU2l6ZUNvbnRleHRQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBzaXplID0gX3JlZi5zaXplO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2l6ZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChvcmlnaW5TaXplKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogc2l6ZSB8fCBvcmlnaW5TaXplXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuU2l6ZUNvbnRleHRQcm92aWRlciA9IFNpemVDb250ZXh0UHJvdmlkZXI7XG52YXIgX2RlZmF1bHQgPSBTaXplQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoQ29uZmlnQ29uc3VtZXIgPSB3aXRoQ29uZmlnQ29uc3VtZXI7XG5leHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gZXhwb3J0cy5Db25maWdDb250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZW5kZXJFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyRW1wdHlcIikpO1xuXG52YXIgQ29uZmlnQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgLy8gV2UgcHJvdmlkZSBhIGRlZmF1bHQgZnVuY3Rpb24gZm9yIENvbnRleHQgd2l0aG91dCBwcm92aWRlclxuICBnZXRQcmVmaXhDbHM6IGZ1bmN0aW9uIGdldFByZWZpeENscyhzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgcmV0dXJuIHN1ZmZpeENscyA/IFwiYW50LVwiLmNvbmNhdChzdWZmaXhDbHMpIDogJ2FudCc7XG4gIH0sXG4gIHJlbmRlckVtcHR5OiBfcmVuZGVyRW1wdHlbXCJkZWZhdWx0XCJdXG59KTtcbmV4cG9ydHMuQ29uZmlnQ29udGV4dCA9IENvbmZpZ0NvbnRleHQ7XG52YXIgQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb250ZXh0LkNvbnN1bWVyO1xuLyoqIEBkZXByZWNhdGVkIFVzZSBob29rcyBpbnN0ZWFkLiBUaGlzIGlzIGEgbGVnYWN5IGZ1bmN0aW9uICovXG5cbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb25zdW1lcjtcblxuZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyRnVuYyhDb21wb25lbnQpIHtcbiAgICAvLyBXcmFwIHdpdGggQ29uZmlnQ29uc3VtZXIuIFNpbmNlIHdlIG5lZWQgY29tcGF0aWJsZSB3aXRoIHJlYWN0IDE1LCBiZSBjYXJlIHdoZW4gdXNpbmcgcmVmIG1ldGhvZHNcbiAgICB2YXIgU0ZDID0gZnVuY3Rpb24gU0ZDKHByb3BzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbmZpZ1Byb3BzLCBwcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY29ucyA9IENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgbmFtZSA9IGNvbnMgJiYgY29ucy5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICBTRkMuZGlzcGxheU5hbWUgPSBcIndpdGhDb25maWdDb25zdW1lcihcIi5jb25jYXQobmFtZSwgXCIpXCIpO1xuICAgIHJldHVybiBTRkM7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29uc3VtZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuQ29uZmlnQ29uc3VtZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29udGV4dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb250ZXh0O1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0ZpZWxkRm9ybSA9IHJlcXVpcmUoXCJyYy1maWVsZC1mb3JtXCIpO1xuXG52YXIgX2xvY2FsZVByb3ZpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlclwiKSk7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gcmVxdWlyZShcIi4vU2l6ZUNvbnRleHRcIik7XG5cbnZhciBfbWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21lc3NhZ2VcIikpO1xuXG52YXIgX25vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25vdGlmaWNhdGlvblwiKSk7XG5cbi8vIFRPRE86IHJlbW92ZSB0aGlzIGxpbnRcbi8vIFNGQyBoYXMgc3BlY2lmaWVkIGEgZGlzcGxheU5hbWUsIGJ1dCBub3Qgd29ya2VkLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cbnZhciBjb25maWdDb25zdW1lclByb3BzID0gWydnZXRUYXJnZXRDb250YWluZXInLCAnZ2V0UG9wdXBDb250YWluZXInLCAncm9vdFByZWZpeENscycsICdnZXRQcmVmaXhDbHMnLCAncmVuZGVyRW1wdHknLCAnY3NwJywgJ2F1dG9JbnNlcnRTcGFjZUluQnV0dG9uJywgJ2xvY2FsZScsICdwYWdlSGVhZGVyJ107XG5leHBvcnRzLmNvbmZpZ0NvbnN1bWVyUHJvcHMgPSBjb25maWdDb25zdW1lclByb3BzO1xuXG52YXIgQ29uZmlnUHJvdmlkZXIgPSBmdW5jdGlvbiBDb25maWdQcm92aWRlcihwcm9wcykge1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5kaXJlY3Rpb24pIHtcbiAgICAgIF9tZXNzYWdlW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuXG4gICAgICBfbm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLmRpcmVjdGlvbl0pO1xuXG4gIHZhciBnZXRQcmVmaXhDbHNXcmFwcGVyID0gZnVuY3Rpb24gZ2V0UHJlZml4Q2xzV3JhcHBlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gcHJlZml4Q2xzIHx8IGNvbnRleHQuZ2V0UHJlZml4Q2xzKCcnKTtcbiAgICAgIHJldHVybiBzdWZmaXhDbHMgPyBcIlwiLmNvbmNhdChtZXJnZWRQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc3VmZml4Q2xzKSA6IG1lcmdlZFByZWZpeENscztcbiAgICB9O1xuICB9O1xuXG4gIHZhciByZW5kZXJQcm92aWRlciA9IGZ1bmN0aW9uIHJlbmRlclByb3ZpZGVyKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSkge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBnZXRUYXJnZXRDb250YWluZXIgPSBwcm9wcy5nZXRUYXJnZXRDb250YWluZXIsXG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHJlbmRlckVtcHR5ID0gcHJvcHMucmVuZGVyRW1wdHksXG4gICAgICAgIGNzcCA9IHByb3BzLmNzcCxcbiAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBwcm9wcy5hdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgICAgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICAgIGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgcGFnZUhlYWRlciA9IHByb3BzLnBhZ2VIZWFkZXIsXG4gICAgICAgIGNvbXBvbmVudFNpemUgPSBwcm9wcy5jb21wb25lbnRTaXplLFxuICAgICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgIHNwYWNlID0gcHJvcHMuc3BhY2UsXG4gICAgICAgIHZpcnR1YWwgPSBwcm9wcy52aXJ0dWFsLFxuICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG4gICAgdmFyIGNvbmZpZyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRleHQpLCB7XG4gICAgICBnZXRQcmVmaXhDbHM6IGdldFByZWZpeENsc1dyYXBwZXIoY29udGV4dCksXG4gICAgICBjc3A6IGNzcCxcbiAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOiBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxlZ2FjeUxvY2FsZSxcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgc3BhY2U6IHNwYWNlLFxuICAgICAgdmlydHVhbDogdmlydHVhbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gICAgfSk7XG5cbiAgICBpZiAoZ2V0VGFyZ2V0Q29udGFpbmVyKSB7XG4gICAgICBjb25maWcuZ2V0VGFyZ2V0Q29udGFpbmVyID0gZ2V0VGFyZ2V0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmIChnZXRQb3B1cENvbnRhaW5lcikge1xuICAgICAgY29uZmlnLmdldFBvcHVwQ29udGFpbmVyID0gZ2V0UG9wdXBDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlckVtcHR5KSB7XG4gICAgICBjb25maWcucmVuZGVyRW1wdHkgPSByZW5kZXJFbXB0eTtcbiAgICB9XG5cbiAgICBpZiAocGFnZUhlYWRlcikge1xuICAgICAgY29uZmlnLnBhZ2VIZWFkZXIgPSBwYWdlSGVhZGVyO1xuICAgIH1cblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgY29uZmlnLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgaWYgKGZvcm0pIHtcbiAgICAgIGNvbmZpZy5mb3JtID0gZm9ybTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGROb2RlID0gY2hpbGRyZW47IC8vIEFkZGl0aW9uYWwgRm9ybSBwcm92aWRlclxuXG4gICAgdmFyIHZhbGlkYXRlTWVzc2FnZXMgPSB7fTtcblxuICAgIGlmIChsb2NhbGUgJiYgbG9jYWxlLkZvcm0gJiYgbG9jYWxlLkZvcm0uZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICAgIHZhbGlkYXRlTWVzc2FnZXMgPSBsb2NhbGUuRm9ybS5kZWZhdWx0VmFsaWRhdGVNZXNzYWdlcztcbiAgICB9XG5cbiAgICBpZiAoZm9ybSAmJiBmb3JtLnZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICAgIHZhbGlkYXRlTWVzc2FnZXMgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB2YWxpZGF0ZU1lc3NhZ2VzKSwgZm9ybS52YWxpZGF0ZU1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRhdGVNZXNzYWdlcykubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGROb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjRmllbGRGb3JtLkZvcm1Qcm92aWRlciwge1xuICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzOiB2YWxpZGF0ZU1lc3NhZ2VzXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuV2l0aExvY2FsZSA9IGxvY2FsZSA9PT0gdW5kZWZpbmVkID8gY2hpbGROb2RlIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2xvY2FsZVByb3ZpZGVyW1wiZGVmYXVsdFwiXSwge1xuICAgICAgbG9jYWxlOiBsb2NhbGUgfHwgbGVnYWN5TG9jYWxlLFxuICAgICAgX0FOVF9NQVJLX186IF9sb2NhbGVQcm92aWRlci5BTlRfTUFSS1xuICAgIH0sIGNoaWxkTm9kZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaXplQ29udGV4dC5TaXplQ29udGV4dFByb3ZpZGVyLCB7XG4gICAgICBzaXplOiBjb21wb25lbnRTaXplXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuQ29uZmlnQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbmZpZ1xuICAgIH0sIGNoaWxkcmVuV2l0aExvY2FsZSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCBudWxsLCBmdW5jdGlvbiAoXywgX18sIGxlZ2FjeUxvY2FsZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZW5kZXJQcm92aWRlcihjb250ZXh0LCBsZWdhY3lMb2NhbGUpO1xuICAgIH0pO1xuICB9KTtcbn07XG4vKiogQHByaXZhdGUgaW50ZXJuYWwgdXNhZ2UuIGRvIG5vdCB1c2UgaW4geW91ciBwcm9kdWN0aW9uICovXG5cblxuQ29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCA9IF9jb250ZXh0LkNvbmZpZ0NvbnRleHQ7XG52YXIgX2RlZmF1bHQgPSBDb25maWdQcm92aWRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9lbXB0eVwiKSk7XG5cbnZhciBfID0gcmVxdWlyZShcIi5cIik7XG5cbnZhciByZW5kZXJFbXB0eSA9IGZ1bmN0aW9uIHJlbmRlckVtcHR5KGNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF8uQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXggPSBnZXRQcmVmaXhDbHMoJ2VtcHR5Jyk7XG5cbiAgICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ1RhYmxlJzpcbiAgICAgIGNhc2UgJ0xpc3QnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGltYWdlOiBfZW1wdHlbXCJkZWZhdWx0XCJdLlBSRVNFTlRFRF9JTUFHRV9TSU1QTEVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ1NlbGVjdCc6XG4gICAgICBjYXNlICdUcmVlU2VsZWN0JzpcbiAgICAgIGNhc2UgJ0Nhc2NhZGVyJzpcbiAgICAgIGNhc2UgJ1RyYW5zZmVyJzpcbiAgICAgIGNhc2UgJ01lbnRpb25zJzpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1zbWFsbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIG51bGwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZW5kZXJFbXB0eTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGlja2VyL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbi8vIE1lcmdlIGludG8gYSBsb2NhbGUgb2JqZWN0XG52YXIgbG9jYWxlID0ge1xuICBsYW5nOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRhdGUnLFxuICAgIHllYXJQbGFjZWhvbGRlcjogJ1NlbGVjdCB5ZWFyJyxcbiAgICBxdWFydGVyUGxhY2Vob2xkZXI6ICdTZWxlY3QgcXVhcnRlcicsXG4gICAgbW9udGhQbGFjZWhvbGRlcjogJ1NlbGVjdCBtb250aCcsXG4gICAgd2Vla1BsYWNlaG9sZGVyOiAnU2VsZWN0IHdlZWsnLFxuICAgIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgZGF0ZScsICdFbmQgZGF0ZSddLFxuICAgIHJhbmdlWWVhclBsYWNlaG9sZGVyOiBbJ1N0YXJ0IHllYXInLCAnRW5kIHllYXInXSxcbiAgICByYW5nZU1vbnRoUGxhY2Vob2xkZXI6IFsnU3RhcnQgbW9udGgnLCAnRW5kIG1vbnRoJ10sXG4gICAgcmFuZ2VXZWVrUGxhY2Vob2xkZXI6IFsnU3RhcnQgd2VlaycsICdFbmQgd2VlayddXG4gIH0sIF9lbl9VU1tcImRlZmF1bHRcIl0pLFxuICB0aW1lUGlja2VyTG9jYWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9lbl9VUzJbXCJkZWZhdWx0XCJdKVxufTsgLy8gQWxsIHNldHRpbmdzIGF0OlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9ibG9iL21hc3Rlci9jb21wb25lbnRzL2RhdGUtcGlja2VyL2xvY2FsZS9leGFtcGxlLmpzb25cblxudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1kZWZhdWx0Jyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiMTg0XCIsXG4gICAgaGVpZ2h0OiBcIjE1MlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE4NCAxNTJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNCAzMS42NylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbGxpcHNlXCIpLFxuICAgIGN4OiBcIjY3Ljc5N1wiLFxuICAgIGN5OiBcIjEwNi44OVwiLFxuICAgIHJ4OiBcIjY3Ljc5N1wiLFxuICAgIHJ5OiBcIjEyLjY2OFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTFcIiksXG4gICAgZDogXCJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTJcIiksXG4gICAgZDogXCJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41NilcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0zXCIpLFxuICAgIGQ6IFwiTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtNFwiKSxcbiAgICBkOiBcIk00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5elwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC01XCIpLFxuICAgIGQ6IFwiTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDE0OS42NSAxNS4zODMpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogXCIyMC42NTRcIixcbiAgICBjeTogXCIzLjE2N1wiLFxuICAgIHJ4OiBcIjIuODQ5XCIsXG4gICAgcnk6IFwiMi44MTVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjY5OCA1LjYzSDBMMi44OTguNzA0ek05LjI1OS43MDRoNC45ODVWNS42M0g5LjI1OXpcIlxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtcHR5XCIpKTtcblxudmFyIF9zaW1wbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpbXBsZVwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgZGVmYXVsdEVtcHR5SW1nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG52YXIgc2ltcGxlRW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfc2ltcGxlW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KF9hKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICBfYSRpbWFnZSA9IF9hLmltYWdlLFxuICAgICAgaW1hZ2UgPSBfYSRpbWFnZSA9PT0gdm9pZCAwID8gZGVmYXVsdEVtcHR5SW1nIDogX2EkaW1hZ2UsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLFxuICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgIGltYWdlU3R5bGUgPSBfYS5pbWFnZVN0eWxlLFxuICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIiwgXCJwcmVmaXhDbHNcIiwgXCJpbWFnZVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiY2hpbGRyZW5cIiwgXCJpbWFnZVN0eWxlXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvY2FsZVJlY2VpdmVyW1wiZGVmYXVsdFwiXSwge1xuICAgIGNvbXBvbmVudE5hbWU6IFwiRW1wdHlcIlxuICB9LCBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHknLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgIHZhciBkZXMgPSB0eXBlb2YgZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnID8gZGVzY3JpcHRpb24gOiBsb2NhbGUuZGVzY3JpcHRpb247XG4gICAgdmFyIGFsdCA9IHR5cGVvZiBkZXMgPT09ICdzdHJpbmcnID8gZGVzIDogJ2VtcHR5JztcbiAgICB2YXIgaW1hZ2VOb2RlID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpbWFnZU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIGFsdDogYWx0LFxuICAgICAgICBzcmM6IGltYWdlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2VOb2RlID0gaW1hZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm9ybWFsXCIpLCBpbWFnZSA9PT0gc2ltcGxlRW1wdHlJbWcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKVxuICAgIH0sIHJlc3RQcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZVwiKSxcbiAgICAgIHN0eWxlOiBpbWFnZVN0eWxlXG4gICAgfSwgaW1hZ2VOb2RlKSwgZGVzICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICB9LCBkZXMpLCBjaGlsZHJlbiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpXG4gICAgfSwgY2hpbGRyZW4pKTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIFNpbXBsZSA9IGZ1bmN0aW9uIFNpbXBsZSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLXNpbXBsZScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzLFxuICAgIHdpZHRoOiBcIjY0XCIsXG4gICAgaGVpZ2h0OiBcIjQxXCIsXG4gICAgdmlld0JveDogXCIwIDAgNjQgNDFcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiMzJcIixcbiAgICBjeTogXCIzM1wiLFxuICAgIHJ4OiBcIjMyXCIsXG4gICAgcnk6IFwiN1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIGZpbGxSdWxlOiBcIm5vbnplcm9cIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6XCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGhcIilcbiAgfSkpKSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBTaW1wbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFzUHJlZml4U3VmZml4ID0gaGFzUHJlZml4U3VmZml4O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoXCIuL0lucHV0XCIpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBDbGVhcmFibGVJbnB1dFR5cGUgPSAoMCwgX3R5cGUudHVwbGUpKCd0ZXh0JywgJ2lucHV0Jyk7XG5cbmZ1bmN0aW9uIGhhc1ByZWZpeFN1ZmZpeChwcm9wcykge1xuICByZXR1cm4gISEocHJvcHMucHJlZml4IHx8IHByb3BzLnN1ZmZpeCB8fCBwcm9wcy5hbGxvd0NsZWFyKTtcbn1cblxuZnVuY3Rpb24gaGFzQWRkb24ocHJvcHMpIHtcbiAgcmV0dXJuICEhKHByb3BzLmFkZG9uQmVmb3JlIHx8IHByb3BzLmFkZG9uQWZ0ZXIpO1xufVxuXG52YXIgQ2xlYXJhYmxlTGFiZWxlZElucHV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoQ2xlYXJhYmxlTGFiZWxlZElucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShDbGVhcmFibGVMYWJlbGVkSW5wdXQpO1xuXG4gIGZ1bmN0aW9uIENsZWFyYWJsZUxhYmVsZWRJbnB1dCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIENsZWFyYWJsZUxhYmVsZWRJbnB1dCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvKiogQHByaXZhdGUgRG8gbm90IHVzZSBvdXQgb2YgdGhpcyBjbGFzcy4gV2UgZG8gbm90IHByb21pc2UgdGhpcyBpcyBhbHdheXMga2VlcC4gKi9cblxuICAgIF90aGlzLmNvbnRhaW5lclJlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIF90aGlzLm9uSW5wdXRNb3VzZVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfYTtcblxuICAgICAgaWYgKChfYSA9IF90aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHZhciB0cmlnZ2VyRm9jdXMgPSBfdGhpcy5wcm9wcy50cmlnZ2VyRm9jdXM7XG4gICAgICAgIHRyaWdnZXJGb2N1cyA9PT0gbnVsbCB8fCB0cmlnZ2VyRm9jdXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyaWdnZXJGb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKENsZWFyYWJsZUxhYmVsZWRJbnB1dCwgW3tcbiAgICBrZXk6IFwicmVuZGVyQ2xlYXJJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFySWNvbihwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWxsb3dDbGVhciA9IF90aGlzJHByb3BzLmFsbG93Q2xlYXIsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIHJlYWRPbmx5ID0gX3RoaXMkcHJvcHMucmVhZE9ubHksXG4gICAgICAgICAgaGFuZGxlUmVzZXQgPSBfdGhpcyRwcm9wcy5oYW5kbGVSZXNldDtcblxuICAgICAgaWYgKCFhbGxvd0NsZWFyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmVlZENsZWFyID0gIWRpc2FibGVkICYmICFyZWFkT25seSAmJiB2YWx1ZTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyLWljb25cIik7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBvbkNsaWNrOiBoYW5kbGVSZXNldCxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiLWhpZGRlblwiKSwgIW5lZWRDbGVhciksIGNsYXNzTmFtZSksXG4gICAgICAgIHJvbGU6IFwiYnV0dG9uXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJTdWZmaXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3VmZml4KHByZWZpeENscykge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc3VmZml4ID0gX3RoaXMkcHJvcHMyLnN1ZmZpeCxcbiAgICAgICAgICBhbGxvd0NsZWFyID0gX3RoaXMkcHJvcHMyLmFsbG93Q2xlYXI7XG5cbiAgICAgIGlmIChzdWZmaXggfHwgYWxsb3dDbGVhcikge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3VmZml4XCIpXG4gICAgICAgIH0sIHRoaXMucmVuZGVyQ2xlYXJJY29uKHByZWZpeENscyksIHN1ZmZpeCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMYWJlbGVkSWNvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbGVkSWNvbihwcmVmaXhDbHMsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvY3VzZWQgPSBfdGhpcyRwcm9wczMuZm9jdXNlZCxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMy52YWx1ZSxcbiAgICAgICAgICBwcmVmaXggPSBfdGhpcyRwcm9wczMucHJlZml4LFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5jbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJHByb3BzMy5zaXplLFxuICAgICAgICAgIHN1ZmZpeCA9IF90aGlzJHByb3BzMy5zdWZmaXgsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczMuZGlzYWJsZWQsXG4gICAgICAgICAgYWxsb3dDbGVhciA9IF90aGlzJHByb3BzMy5hbGxvd0NsZWFyLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzMy5kaXJlY3Rpb24sXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczMuc3R5bGUsXG4gICAgICAgICAgcmVhZE9ubHkgPSBfdGhpcyRwcm9wczMucmVhZE9ubHksXG4gICAgICAgICAgYm9yZGVyZWQgPSBfdGhpcyRwcm9wczMuYm9yZGVyZWQ7XG4gICAgICB2YXIgc3VmZml4Tm9kZSA9IHRoaXMucmVuZGVyU3VmZml4KHByZWZpeENscyk7XG5cbiAgICAgIGlmICghaGFzUHJlZml4U3VmZml4KHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmVmaXhOb2RlID0gcHJlZml4ID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXByZWZpeFwiKVxuICAgICAgfSwgcHJlZml4KSA6IG51bGw7XG4gICAgICB2YXIgYWZmaXhXcmFwcGVyQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyXCIpLCAoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItZm9jdXNlZFwiKSwgZm9jdXNlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci1zbVwiKSwgc2l6ZSA9PT0gJ3NtYWxsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItbGdcIiksIHNpemUgPT09ICdsYXJnZScpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLWlucHV0LXdpdGgtY2xlYXItYnRuXCIpLCBzdWZmaXggJiYgYWxsb3dDbGVhciAmJiB2YWx1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci1yZWFkb25seVwiKSwgcmVhZE9ubHkpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLWJvcmRlcmxlc3NcIiksICFib3JkZXJlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChjbGFzc05hbWUpLCAhaGFzQWRkb24odGhpcy5wcm9wcykgJiYgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgcmVmOiB0aGlzLmNvbnRhaW5lclJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBhZmZpeFdyYXBwZXJDbHMsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm9uSW5wdXRNb3VzZVVwXG4gICAgICB9LCBwcmVmaXhOb2RlLCAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgc3R5bGU6IG51bGwsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX0lucHV0LmdldElucHV0Q2xhc3NOYW1lKShwcmVmaXhDbHMsIGJvcmRlcmVkLCBzaXplLCBkaXNhYmxlZClcbiAgICAgIH0pLCBzdWZmaXhOb2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVySW5wdXRXaXRoTGFiZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXRXaXRoTGFiZWwocHJlZml4Q2xzLCBsYWJlbGVkRWxlbWVudCkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzNDtcblxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWRkb25CZWZvcmUgPSBfdGhpcyRwcm9wczQuYWRkb25CZWZvcmUsXG4gICAgICAgICAgYWRkb25BZnRlciA9IF90aGlzJHByb3BzNC5hZGRvbkFmdGVyLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHM0LnN0eWxlLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wczQuc2l6ZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzNC5kaXJlY3Rpb247IC8vIE5vdCB3cmFwIHdoZW4gdGhlcmUgaXMgbm90IGFkZG9uc1xuXG4gICAgICBpZiAoIWhhc0FkZG9uKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHJldHVybiBsYWJlbGVkRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdyb3VwXCIpO1xuICAgICAgdmFyIGFkZG9uQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQod3JhcHBlckNsYXNzTmFtZSwgXCItYWRkb25cIik7XG4gICAgICB2YXIgYWRkb25CZWZvcmVOb2RlID0gYWRkb25CZWZvcmUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGFkZG9uQ2xhc3NOYW1lXG4gICAgICB9LCBhZGRvbkJlZm9yZSkgOiBudWxsO1xuICAgICAgdmFyIGFkZG9uQWZ0ZXJOb2RlID0gYWRkb25BZnRlciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYWRkb25DbGFzc05hbWVcbiAgICAgIH0sIGFkZG9uQWZ0ZXIpIDogbnVsbDtcbiAgICAgIHZhciBtZXJnZWRXcmFwcGVyQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyXCIpLCB3cmFwcGVyQ2xhc3NOYW1lLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdCh3cmFwcGVyQ2xhc3NOYW1lLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpKTtcbiAgICAgIHZhciBtZXJnZWRHcm91cENsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXAtd3JhcHBlclwiKSwgKF9jbGFzc05hbWVzNCA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzNCwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cC13cmFwcGVyLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczQsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXAtd3JhcHBlci1sZ1wiKSwgc2l6ZSA9PT0gJ2xhcmdlJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXM0LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdyb3VwLXdyYXBwZXItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXM0KSwgY2xhc3NOYW1lKTsgLy8gTmVlZCBhbm90aGVyIHdyYXBwZXIgZm9yIGNoYW5naW5nIGRpc3BsYXk6dGFibGUgdG8gZGlzcGxheTppbmxpbmUtYmxvY2tcbiAgICAgIC8vIGFuZCBwdXQgc3R5bGUgcHJvcCBpbiB3cmFwcGVyXG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1lcmdlZEdyb3VwQ2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWVyZ2VkV3JhcHBlckNsYXNzTmFtZVxuICAgICAgfSwgYWRkb25CZWZvcmVOb2RlLCAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGxhYmVsZWRFbGVtZW50LCB7XG4gICAgICAgIHN0eWxlOiBudWxsXG4gICAgICB9KSwgYWRkb25BZnRlck5vZGUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyVGV4dEFyZWFXaXRoQ2xlYXJJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRleHRBcmVhV2l0aENsZWFySWNvbihwcmVmaXhDbHMsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lczU7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHM1LnZhbHVlLFxuICAgICAgICAgIGFsbG93Q2xlYXIgPSBfdGhpcyRwcm9wczUuYWxsb3dDbGVhcixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczUuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHM1LnN0eWxlLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzNS5kaXJlY3Rpb24sXG4gICAgICAgICAgYm9yZGVyZWQgPSBfdGhpcyRwcm9wczUuYm9yZGVyZWQ7XG5cbiAgICAgIGlmICghYWxsb3dDbGVhcikge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShlbGVtZW50LCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWZmaXhXcmFwcGVyQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyXCIpLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItdGV4dGFyZWEtd2l0aC1jbGVhci1idG5cIiksIChfY2xhc3NOYW1lczUgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzNSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLWJvcmRlcmxlc3NcIiksICFib3JkZXJlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXM1LCBcIlwiLmNvbmNhdChjbGFzc05hbWUpLCAhaGFzQWRkb24odGhpcy5wcm9wcykgJiYgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXM1KSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBhZmZpeFdyYXBwZXJDbHMsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShlbGVtZW50LCB7XG4gICAgICAgIHN0eWxlOiBudWxsLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pLCB0aGlzLnJlbmRlckNsZWFySWNvbihwcmVmaXhDbHMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNi5wcmVmaXhDbHMsXG4gICAgICAgICAgaW5wdXRUeXBlID0gX3RoaXMkcHJvcHM2LmlucHV0VHlwZSxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHM2LmVsZW1lbnQ7XG5cbiAgICAgIGlmIChpbnB1dFR5cGUgPT09IENsZWFyYWJsZUlucHV0VHlwZVswXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZXh0QXJlYVdpdGhDbGVhckljb24ocHJlZml4Q2xzLCBlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVySW5wdXRXaXRoTGFiZWwocHJlZml4Q2xzLCB0aGlzLnJlbmRlckxhYmVsZWRJY29uKHByZWZpeENscywgZWxlbWVudCkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2xlYXJhYmxlTGFiZWxlZElucHV0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgX2RlZmF1bHQgPSBDbGVhcmFibGVMYWJlbGVkSW5wdXQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZml4Q29udHJvbGxlZFZhbHVlID0gZml4Q29udHJvbGxlZFZhbHVlO1xuZXhwb3J0cy5yZXNvbHZlT25DaGFuZ2UgPSByZXNvbHZlT25DaGFuZ2U7XG5leHBvcnRzLmdldElucHV0Q2xhc3NOYW1lID0gZ2V0SW5wdXRDbGFzc05hbWU7XG5leHBvcnRzLnRyaWdnZXJGb2N1cyA9IHRyaWdnZXJGb2N1cztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX0NsZWFyYWJsZUxhYmVsZWRJbnB1dCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL0NsZWFyYWJsZUxhYmVsZWRJbnB1dFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0XCIpKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbmZ1bmN0aW9uIGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU9uQ2hhbmdlKHRhcmdldCwgZSwgb25DaGFuZ2UpIHtcbiAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgdmFyIGV2ZW50ID0gZTtcblxuICAgIGlmIChlLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIC8vIGNsaWNrIGNsZWFyIGljb25cbiAgICAgIGV2ZW50ID0gT2JqZWN0LmNyZWF0ZShlKTtcbiAgICAgIGV2ZW50LnRhcmdldCA9IHRhcmdldDtcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICB2YXIgb3JpZ2luYWxJbnB1dFZhbHVlID0gdGFyZ2V0LnZhbHVlOyAvLyBjaGFuZ2UgdGFyZ2V0IHJlZiB2YWx1ZSBjYXVzZSBlLnRhcmdldC52YWx1ZSBzaG91bGQgYmUgJycgd2hlbiBjbGVhciBpbnB1dFxuXG4gICAgICB0YXJnZXQudmFsdWUgPSAnJztcbiAgICAgIG9uQ2hhbmdlKGV2ZW50KTsgLy8gcmVzZXQgdGFyZ2V0IHJlZiB2YWx1ZVxuXG4gICAgICB0YXJnZXQudmFsdWUgPSBvcmlnaW5hbElucHV0VmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZXZlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldElucHV0Q2xhc3NOYW1lKHByZWZpeENscywgYm9yZGVyZWQsIHNpemUsIGRpc2FibGVkLCBkaXJlY3Rpb24pIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHJldHVybiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sZ1wiKSwgc2l6ZSA9PT0gJ2xhcmdlJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJvcmRlcmxlc3NcIiksICFib3JkZXJlZCksIF9jbGFzc05hbWVzKSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJGb2N1cyhlbGVtZW50LCBvcHRpb24pIHtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gIGVsZW1lbnQuZm9jdXMob3B0aW9uKTsgLy8gU2VsZWN0aW9uIGNvbnRlbnRcblxuICB2YXIgX3JlZiA9IG9wdGlvbiB8fCB7fSxcbiAgICAgIGN1cnNvciA9IF9yZWYuY3Vyc29yO1xuXG4gIGlmIChjdXJzb3IpIHtcbiAgICB2YXIgbGVuID0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKGN1cnNvcikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW4sIGxlbik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGxlbik7XG4gICAgfVxuICB9XG59XG5cbnZhciBJbnB1dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKElucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShJbnB1dCk7XG5cbiAgZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIElucHV0KTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5kaXJlY3Rpb24gPSAnbHRyJztcblxuICAgIF90aGlzLmZvY3VzID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgdHJpZ2dlckZvY3VzKF90aGlzLmlucHV0LCBvcHRpb24pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlQ2xlYXJhYmxlSW5wdXQgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIF90aGlzLmNsZWFyYWJsZUlucHV0ID0gaW5wdXQ7XG4gICAgfTtcblxuICAgIF90aGlzLnNhdmVJbnB1dCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25Gb2N1cyA9IF90aGlzLnByb3BzLm9uRm9jdXM7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgICAgfSwgX3RoaXMuY2xlYXJQYXNzd29yZFZhbHVlQXR0cmlidXRlKTtcblxuICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgb25Gb2N1cyhlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25CbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbkJsdXIgPSBfdGhpcy5wcm9wcy5vbkJsdXI7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZDogZmFsc2VcbiAgICAgIH0sIF90aGlzLmNsZWFyUGFzc3dvcmRWYWx1ZUF0dHJpYnV0ZSk7XG5cbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVSZXNldCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5zZXRWYWx1ZSgnJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5mb2N1cygpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlc29sdmVPbkNoYW5nZShfdGhpcy5pbnB1dCwgZSwgX3RoaXMucHJvcHMub25DaGFuZ2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJJbnB1dCA9IGZ1bmN0aW9uIChwcmVmaXhDbHMsIHNpemUsIGJvcmRlcmVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGFkZG9uQmVmb3JlID0gX3RoaXMkcHJvcHMuYWRkb25CZWZvcmUsXG4gICAgICAgICAgYWRkb25BZnRlciA9IF90aGlzJHByb3BzLmFkZG9uQWZ0ZXIsXG4gICAgICAgICAgY3VzdG9taXplU2l6ZSA9IF90aGlzJHByb3BzLnNpemUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZDsgLy8gRml4IGh0dHBzOi8vZmIubWUvcmVhY3QtdW5rbm93bi1wcm9wXG5cbiAgICAgIHZhciBvdGhlclByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkoX3RoaXMucHJvcHMsIFsncHJlZml4Q2xzJywgJ29uUHJlc3NFbnRlcicsICdhZGRvbkJlZm9yZScsICdhZGRvbkFmdGVyJywgJ3ByZWZpeCcsICdzdWZmaXgnLCAnYWxsb3dDbGVhcicsIC8vIElucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkLFxuICAgICAgLy8gc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCBib3RoLlxuICAgICAgJ2RlZmF1bHRWYWx1ZScsICdzaXplJywgJ2lucHV0VHlwZScsICdib3JkZXJlZCddKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGF1dG9Db21wbGV0ZTogaW5wdXQuYXV0b0NvbXBsZXRlXG4gICAgICB9LCBvdGhlclByb3BzLCB7XG4gICAgICAgIG9uQ2hhbmdlOiBfdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IF90aGlzLm9uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogX3RoaXMub25CbHVyLFxuICAgICAgICBvbktleURvd246IF90aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZ2V0SW5wdXRDbGFzc05hbWUocHJlZml4Q2xzLCBib3JkZXJlZCwgY3VzdG9taXplU2l6ZSB8fCBzaXplLCBkaXNhYmxlZCwgX3RoaXMuZGlyZWN0aW9uKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgY2xhc3NOYW1lLCBjbGFzc05hbWUgJiYgIWFkZG9uQmVmb3JlICYmICFhZGRvbkFmdGVyKSksXG4gICAgICAgIHJlZjogX3RoaXMuc2F2ZUlucHV0XG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyUGFzc3dvcmRWYWx1ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzIwNTQxXG4gICAgICBfdGhpcy5yZW1vdmVQYXNzd29yZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLmlucHV0ICYmIF90aGlzLmlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAncGFzc3dvcmQnICYmIF90aGlzLmlucHV0Lmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgICAgIF90aGlzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShlLnRhcmdldC52YWx1ZSwgX3RoaXMuY2xlYXJQYXNzd29yZFZhbHVlQXR0cmlidXRlKTtcblxuICAgICAgcmVzb2x2ZU9uQ2hhbmdlKF90aGlzLmlucHV0LCBlLCBfdGhpcy5wcm9wcy5vbkNoYW5nZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uUHJlc3NFbnRlciA9IF90aGlzJHByb3BzMi5vblByZXNzRW50ZXIsXG4gICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHMyLm9uS2V5RG93bjtcblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgb25QcmVzc0VudGVyKSB7XG4gICAgICAgIG9uUHJlc3NFbnRlcihlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICBvbktleURvd24oZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYyLmdldFByZWZpeENscyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmMi5kaXJlY3Rpb24sXG4gICAgICAgICAgaW5wdXQgPSBfcmVmMi5pbnB1dDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkc3RhdGUudmFsdWUsXG4gICAgICAgICAgZm9jdXNlZCA9IF90aGlzJHN0YXRlLmZvY3VzZWQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX3RoaXMkcHJvcHMzLnByZWZpeENscyxcbiAgICAgICAgICBfdGhpcyRwcm9wczMkYm9yZGVyZWQgPSBfdGhpcyRwcm9wczMuYm9yZGVyZWQsXG4gICAgICAgICAgYm9yZGVyZWQgPSBfdGhpcyRwcm9wczMkYm9yZGVyZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfdGhpcyRwcm9wczMkYm9yZGVyZWQ7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdpbnB1dCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICBfdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXS5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbGVhcmFibGVMYWJlbGVkSW5wdXRbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBpbnB1dFR5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgICB2YWx1ZTogZml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKSxcbiAgICAgICAgICBlbGVtZW50OiBfdGhpcy5yZW5kZXJJbnB1dChwcmVmaXhDbHMsIHNpemUsIGJvcmRlcmVkLCBpbnB1dCksXG4gICAgICAgICAgaGFuZGxlUmVzZXQ6IF90aGlzLmhhbmRsZVJlc2V0LFxuICAgICAgICAgIHJlZjogX3RoaXMuc2F2ZUNsZWFyYWJsZUlucHV0LFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICAgIGZvY3VzZWQ6IGZvY3VzZWQsXG4gICAgICAgICAgdHJpZ2dlckZvY3VzOiBfdGhpcy5mb2N1cyxcbiAgICAgICAgICBib3JkZXJlZDogYm9yZGVyZWRcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBwcm9wcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyBwcm9wcy5kZWZhdWx0VmFsdWUgOiBwcm9wcy52YWx1ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZVxuICAgICAgcHJldlZhbHVlOiBwcm9wcy52YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShJbnB1dCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFyUGFzc3dvcmRWYWx1ZUF0dHJpYnV0ZSgpO1xuICAgIH0gLy8gU2luY2UgcG9seWZpbGwgYGdldFNuYXBzaG90QmVmb3JlVXBkYXRlYCBuZWVkIHdvcmsgd2l0aCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICAvLyBXZSBrZWVwIGFuIGVtcHR5IGZ1bmN0aW9uIGhlcmUuXG5cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmICgoMCwgX0NsZWFyYWJsZUxhYmVsZWRJbnB1dC5oYXNQcmVmaXhTdWZmaXgpKHByZXZQcm9wcykgIT09ICgwLCBfQ2xlYXJhYmxlTGFiZWxlZElucHV0Lmhhc1ByZWZpeFN1ZmZpeCkodGhpcy5wcm9wcykpIHtcbiAgICAgICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkodGhpcy5pbnB1dCAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCwgJ0lucHV0JywgXCJXaGVuIElucHV0IGlzIGZvY3VzZWQsIGR5bmFtaWMgYWRkIG9yIHJlbW92ZSBwcmVmaXggLyBzdWZmaXggd2lsbCBtYWtlIGl0IGxvc2UgZm9jdXMgY2F1c2VkIGJ5IGRvbSBzdHJ1Y3R1cmUgY2hhbmdlLiBSZWFkIG1vcmU6IGh0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2lucHV0LyNGQVFcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnJlbW92ZVBhc3N3b3JkVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZW1vdmVQYXNzd29yZFRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0U2VsZWN0aW9uUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QoKSB7XG4gICAgICB0aGlzLmlucHV0LnNlbGVjdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrID09PSBudWxsIHx8IGNhbGxiYWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJDb21wb25lbnQpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBfcmVmMykge1xuICAgICAgdmFyIHByZXZWYWx1ZSA9IF9yZWYzLnByZXZWYWx1ZTtcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgcHJldlZhbHVlOiBuZXh0UHJvcHMudmFsdWVcbiAgICAgIH07XG5cbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCB8fCBwcmV2VmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgICBuZXdTdGF0ZS52YWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSW5wdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3RleHQnXG59O1xudmFyIF9kZWZhdWx0ID0gSW5wdXQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlTG9jYWxlUmVjZWl2ZXIgPSB1c2VMb2NhbGVSZWNlaXZlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWZhdWx0XCIpKTtcblxudmFyIF9jb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcblxudmFyIExvY2FsZVJlY2VpdmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyKTtcblxuICBmdW5jdGlvbiBMb2NhbGVSZWNlaXZlcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIExvY2FsZVJlY2VpdmVyKTtcbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyLCBbe1xuICAgIGtleTogXCJnZXRMb2NhbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb21wb25lbnROYW1lID0gX3RoaXMkcHJvcHMuY29tcG9uZW50TmFtZSxcbiAgICAgICAgICBkZWZhdWx0TG9jYWxlID0gX3RoaXMkcHJvcHMuZGVmYXVsdExvY2FsZTtcbiAgICAgIHZhciBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlIHx8IF9kZWZhdWx0W1wiZGVmYXVsdFwiXVtjb21wb25lbnROYW1lIHx8ICdnbG9iYWwnXTtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQ7XG4gICAgICB2YXIgbG9jYWxlRnJvbUNvbnRleHQgPSBjb21wb25lbnROYW1lICYmIGFudExvY2FsZSA/IGFudExvY2FsZVtjb21wb25lbnROYW1lXSA6IHt9O1xuICAgICAgcmV0dXJuICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHR5cGVvZiBsb2NhbGUgPT09ICdmdW5jdGlvbicgPyBsb2NhbGUoKSA6IGxvY2FsZSksIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG9jYWxlQ29kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGVDb2RlKCkge1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dDtcbiAgICAgIHZhciBsb2NhbGVDb2RlID0gYW50TG9jYWxlICYmIGFudExvY2FsZS5sb2NhbGU7IC8vIEhhZCB1c2UgTG9jYWxlUHJvdmlkZSBidXQgZGlkbid0IHNldCBsb2NhbGVcblxuICAgICAgaWYgKGFudExvY2FsZSAmJiBhbnRMb2NhbGUuZXhpc3QgJiYgIWxvY2FsZUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5sb2NhbGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhbGVDb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5nZXRMb2NhbGUoKSwgdGhpcy5nZXRMb2NhbGVDb2RlKCksIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2NhbGVSZWNlaXZlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2NhbGVSZWNlaXZlcjtcbkxvY2FsZVJlY2VpdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50TmFtZTogJ2dsb2JhbCdcbn07XG5Mb2NhbGVSZWNlaXZlci5jb250ZXh0VHlwZSA9IF9jb250ZXh0W1wiZGVmYXVsdFwiXTtcblxuZnVuY3Rpb24gdXNlTG9jYWxlUmVjZWl2ZXIoY29tcG9uZW50TmFtZSwgZGVmYXVsdExvY2FsZSkge1xuICB2YXIgYW50TG9jYWxlID0gUmVhY3QudXNlQ29udGV4dChfY29udGV4dFtcImRlZmF1bHRcIl0pO1xuICB2YXIgY29tcG9uZW50TG9jYWxlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdW2NvbXBvbmVudE5hbWUgfHwgJ2dsb2JhbCddO1xuICAgIHZhciBsb2NhbGVGcm9tQ29udGV4dCA9IGNvbXBvbmVudE5hbWUgJiYgYW50TG9jYWxlID8gYW50TG9jYWxlW2NvbXBvbmVudE5hbWVdIDoge307XG4gICAgcmV0dXJuICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHR5cGVvZiBsb2NhbGUgPT09ICdmdW5jdGlvbicgPyBsb2NhbGUoKSA6IGxvY2FsZSksIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgfSwgW2NvbXBvbmVudE5hbWUsIGRlZmF1bHRMb2NhbGUsIGFudExvY2FsZV0pO1xuICByZXR1cm4gW2NvbXBvbmVudExvY2FsZV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIExvY2FsZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSh1bmRlZmluZWQpO1xudmFyIF9kZWZhdWx0ID0gTG9jYWxlQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmYXVsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZGVmYXVsdFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9kZWZhdWx0MltcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5BTlRfTUFSSyA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoXCIuLi9tb2RhbC9sb2NhbGVcIik7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBBTlRfTUFSSyA9ICdpbnRlcm5hbE1hcmsnO1xuZXhwb3J0cy5BTlRfTUFSSyA9IEFOVF9NQVJLO1xuXG52YXIgTG9jYWxlUHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBMb2NhbGVQcm92aWRlcik7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkocHJvcHMubG9jYWxlICYmIHByb3BzLmxvY2FsZS5Nb2RhbCk7XG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkocHJvcHMuX0FOVF9NQVJLX18gPT09IEFOVF9NQVJLLCAnTG9jYWxlUHJvdmlkZXInLCAnYExvY2FsZVByb3ZpZGVyYCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBsb2NhbGVgIHdpdGggYENvbmZpZ1Byb3ZpZGVyYCBpbnN0ZWFkOiBodHRwOi8vdS5hbnQuZGVzaWduL2xvY2FsZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUHJvdmlkZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgbG9jYWxlID0gdGhpcy5wcm9wcy5sb2NhbGU7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubG9jYWxlICE9PSBsb2NhbGUpIHtcbiAgICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkobG9jYWxlICYmIGxvY2FsZS5Nb2RhbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgKDAsIF9sb2NhbGUuY2hhbmdlQ29uZmlybUxvY2FsZSkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9jYWxlID0gX3RoaXMkcHJvcHMubG9jYWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW47XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBsb2NhbGUpLCB7XG4gICAgICAgICAgZXhpc3Q6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvY2FsZVByb3ZpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2FsZVByb3ZpZGVyO1xuTG9jYWxlUHJvdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBsb2NhbGU6IHt9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2FsZW5kYXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG52YXIgdHlwZVRlbXBsYXRlID0gJyR7bGFiZWx9IGlzIG5vdCBhIHZhbGlkICR7dHlwZX0nO1xudmFyIGxvY2FsZVZhbHVlcyA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBQYWdpbmF0aW9uOiBfZW5fVVNbXCJkZWZhdWx0XCJdLFxuICBEYXRlUGlja2VyOiBfZW5fVVMyW1wiZGVmYXVsdFwiXSxcbiAgVGltZVBpY2tlcjogX2VuX1VTM1tcImRlZmF1bHRcIl0sXG4gIENhbGVuZGFyOiBfZW5fVVM0W1wiZGVmYXVsdFwiXSxcbiAgZ2xvYmFsOiB7XG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2Ugc2VsZWN0J1xuICB9LFxuICBUYWJsZToge1xuICAgIGZpbHRlclRpdGxlOiAnRmlsdGVyIG1lbnUnLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgZmlsdGVyRW1wdHlUZXh0OiAnTm8gZmlsdGVycycsXG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0Tm9uZTogJ0NsZWFyIGFsbCBkYXRhJyxcbiAgICBzZWxlY3Rpb25BbGw6ICdTZWxlY3QgYWxsIGRhdGEnLFxuICAgIHNvcnRUaXRsZTogJ1NvcnQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCByb3cnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2Ugcm93JyxcbiAgICB0cmlnZ2VyRGVzYzogJ0NsaWNrIHRvIHNvcnQgZGVzY2VuZGluZycsXG4gICAgdHJpZ2dlckFzYzogJ0NsaWNrIHRvIHNvcnQgYXNjZW5kaW5nJyxcbiAgICBjYW5jZWxTb3J0OiAnQ2xpY2sgdG8gY2FuY2VsIHNvcnRpbmcnXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgIGp1c3RPa1RleHQ6ICdPSydcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICB9LFxuICBUcmFuc2Zlcjoge1xuICAgIHRpdGxlczogWycnLCAnJ10sXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2ggaGVyZScsXG4gICAgaXRlbVVuaXQ6ICdpdGVtJyxcbiAgICBpdGVtc1VuaXQ6ICdpdGVtcycsXG4gICAgcmVtb3ZlOiAnUmVtb3ZlJyxcbiAgICBzZWxlY3RDdXJyZW50OiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgcmVtb3ZlQ3VycmVudDogJ1JlbW92ZSBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwgZGF0YScsXG4gICAgcmVtb3ZlQWxsOiAnUmVtb3ZlIGFsbCBkYXRhJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnQgY3VycmVudCBwYWdlJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdSZW1vdmUgZmlsZScsXG4gICAgdXBsb2FkRXJyb3I6ICdVcGxvYWQgZXJyb3InLFxuICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBmaWxlJyxcbiAgICBkb3dubG9hZEZpbGU6ICdEb3dubG9hZCBmaWxlJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnTm8gRGF0YSdcbiAgfSxcbiAgSWNvbjoge1xuICAgIGljb246ICdpY29uJ1xuICB9LFxuICBUZXh0OiB7XG4gICAgZWRpdDogJ0VkaXQnLFxuICAgIGNvcHk6ICdDb3B5JyxcbiAgICBjb3BpZWQ6ICdDb3BpZWQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCdcbiAgfSxcbiAgUGFnZUhlYWRlcjoge1xuICAgIGJhY2s6ICdCYWNrJ1xuICB9LFxuICBGb3JtOiB7XG4gICAgb3B0aW9uYWw6ICcob3B0aW9uYWwpJyxcbiAgICBkZWZhdWx0VmFsaWRhdGVNZXNzYWdlczoge1xuICAgICAgXCJkZWZhdWx0XCI6ICdGaWVsZCB2YWxpZGF0aW9uIGVycm9yIGZvciAke2xhYmVsfScsXG4gICAgICByZXF1aXJlZDogJ1BsZWFzZSBlbnRlciAke2xhYmVsfScsXG4gICAgICBcImVudW1cIjogJyR7bGFiZWx9IG11c3QgYmUgb25lIG9mIFske2VudW19XScsXG4gICAgICB3aGl0ZXNwYWNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGEgYmxhbmsgY2hhcmFjdGVyJyxcbiAgICAgIGRhdGU6IHtcbiAgICAgICAgZm9ybWF0OiAnJHtsYWJlbH0gZGF0ZSBmb3JtYXQgaXMgaW52YWxpZCcsXG4gICAgICAgIHBhcnNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhIGRhdGUnLFxuICAgICAgICBpbnZhbGlkOiAnJHtsYWJlbH0gaXMgYW4gaW52YWxpZCBkYXRlJ1xuICAgICAgfSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIHN0cmluZzogdHlwZVRlbXBsYXRlLFxuICAgICAgICBtZXRob2Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgYXJyYXk6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgb2JqZWN0OiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG51bWJlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBkYXRlOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIFwiYm9vbGVhblwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGludGVnZXI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJmbG9hdFwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHJlZ2V4cDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBlbWFpbDogdHlwZVRlbXBsYXRlLFxuICAgICAgICB1cmw6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaGV4OiB0eXBlVGVtcGxhdGVcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgbGVuOiAnJHtsYWJlbH0gbXVzdCBiZSAke2xlbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMnLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtdXN0IGJlIHVwIHRvICR7bWF4fSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSBjaGFyYWN0ZXJzJ1xuICAgICAgfSxcbiAgICAgIG51bWJlcjoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlIGVxdWFsIHRvICR7bGVufScsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IG11c3QgYmUgbWluaW11bSAke21pbn0nLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtdXN0IGJlIG1heGltdW0gJHttYXh9JyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSdcbiAgICAgIH0sXG4gICAgICBhcnJheToge1xuICAgICAgICBsZW46ICdNdXN0IGJlICR7bGVufSAke2xhYmVsfScsXG4gICAgICAgIG1pbjogJ0F0IGxlYXN0ICR7bWlufSAke2xhYmVsfScsXG4gICAgICAgIG1heDogJ0F0IG1vc3QgJHttYXh9ICR7bGFiZWx9JyxcbiAgICAgICAgcmFuZ2U6ICdUaGUgYW1vdW50IG9mICR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgbWlzbWF0Y2g6ICcke2xhYmVsfSBkb2VzIG5vdCBtYXRjaCB0aGUgcGF0dGVybiAke3BhdHRlcm59J1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgSW1hZ2U6IHtcbiAgICBwcmV2aWV3OiAnUHJldmlldydcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZVZhbHVlcztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVVc2VNZXNzYWdlO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF8gPSByZXF1aXJlKFwiLi5cIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU1lc3NhZ2UoZ2V0UmNOb3RpZmljYXRpb25JbnN0YW5jZSwgZ2V0UkNOb3RpY2VQcm9wcykge1xuICB2YXIgdXNlTWVzc2FnZSA9IGZ1bmN0aW9uIHVzZU1lc3NhZ2UoKSB7XG4gICAgLy8gV2UgY2FuIG9ubHkgZ2V0IGNvbnRlbnQgYnkgcmVuZGVyXG4gICAgdmFyIGdldFByZWZpeENsczsgLy8gV2UgY3JlYXRlIGEgcHJveHkgdG8gaGFuZGxlIGRlbGF5IGNyZWF0ZWQgaW5zdGFuY2VcblxuICAgIHZhciBpbm5lckluc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcHJveHkgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spIHtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9PT0gbnVsbCB8fCBpbm5lckluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbm5lckluc3RhbmNlLmNvbXBvbmVudC5hZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF91c2VSQ05vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkocHJveHkpLFxuICAgICAgICBfdXNlUkNOb3RpZmljYXRpb24yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VSQ05vdGlmaWNhdGlvbiwgMiksXG4gICAgICAgIGhvb2tOb3RpZnkgPSBfdXNlUkNOb3RpZmljYXRpb24yWzBdLFxuICAgICAgICBob2xkZXIgPSBfdXNlUkNOb3RpZmljYXRpb24yWzFdO1xuXG4gICAgZnVuY3Rpb24gbm90aWZ5KGFyZ3MpIHtcbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ21lc3NhZ2UnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIHRhcmdldCA9IGFyZ3Mua2V5IHx8ICgwLCBfLmdldEtleVRoZW5JbmNyZWFzZUtleSkoKTtcbiAgICAgIHZhciBjbG9zZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3Mub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJncy5vbkNsb3NlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0UmNOb3RpZmljYXRpb25JbnN0YW5jZSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICAgIHByZWZpeENsczogbWVyZ2VkUHJlZml4Q2xzXG4gICAgICAgIH0pLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgICAgIGlubmVySW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgICBob29rTm90aWZ5KGdldFJDTm90aWNlUHJvcHMoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgICAgIGtleTogdGFyZ2V0LFxuICAgICAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgICAgICB9KSwgcHJlZml4Q2xzKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgICAgIGlmIChpbm5lckluc3RhbmNlKSB7XG4gICAgICAgICAgaW5uZXJJbnN0YW5jZS5yZW1vdmVOb3RpY2UodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVzdWx0LnRoZW4gPSBmdW5jdGlvbiAoZmlsbGVkLCByZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gY2xvc2VQcm9taXNlLnRoZW4oZmlsbGVkLCByZWplY3RlZCk7XG4gICAgICB9O1xuXG4gICAgICByZXN1bHQucHJvbWlzZSA9IGNsb3NlUHJvbWlzZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSAvLyBGaWxsIGZ1bmN0aW9uc1xuXG5cbiAgICB2YXIgaG9va0FwaVJlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gICAgaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4gPSBub3RpZnk7XG4gICAgWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvcicsICdsb2FkaW5nJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgcmV0dXJuICgwLCBfLmF0dGFjaFR5cGVBcGkpKGhvb2tBcGlSZWYuY3VycmVudCwgdHlwZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtob29rQXBpUmVmLmN1cnJlbnQsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwge1xuICAgICAga2V5OiBcImhvbGRlclwiXG4gICAgfSwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIGdldFByZWZpeENscyA9IGNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgcmV0dXJuIGhvbGRlcjtcbiAgICB9KV07XG4gIH07XG5cbiAgcmV0dXJuIHVzZU1lc3NhZ2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRLZXlUaGVuSW5jcmVhc2VLZXkgPSBnZXRLZXlUaGVuSW5jcmVhc2VLZXk7XG5leHBvcnRzLmF0dGFjaFR5cGVBcGkgPSBhdHRhY2hUeXBlQXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLmdldEluc3RhbmNlID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmNOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb25cIikpO1xuXG52YXIgX0xvYWRpbmdPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0xvYWRpbmdPdXRsaW5lZFwiKSk7XG5cbnZhciBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfQ2xvc2VDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfQ2hlY2tDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0luZm9DaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX3VzZU1lc3NhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hvb2tzL3VzZU1lc3NhZ2VcIikpO1xuXG52YXIgbWVzc2FnZUluc3RhbmNlO1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDM7XG52YXIgZGVmYXVsdFRvcDtcbnZhciBrZXkgPSAxO1xudmFyIGxvY2FsUHJlZml4Q2xzID0gJ2FudC1tZXNzYWdlJztcbnZhciB0cmFuc2l0aW9uTmFtZSA9ICdtb3ZlLXVwJztcbnZhciBnZXRDb250YWluZXI7XG52YXIgbWF4Q291bnQ7XG52YXIgcnRsID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGdldEtleVRoZW5JbmNyZWFzZUtleSgpIHtcbiAgcmV0dXJuIGtleSsrO1xufVxuXG5mdW5jdGlvbiBzZXRNZXNzYWdlQ29uZmlnKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMudG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0VG9wID0gb3B0aW9ucy50b3A7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDsgLy8gZGVsZXRlIG1lc3NhZ2VJbnN0YW5jZSBmb3IgbmV3IGRlZmF1bHRUb3BcbiAgfVxuXG4gIGlmIChvcHRpb25zLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0RHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucHJlZml4Q2xzICE9PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbFByZWZpeENscyA9IG9wdGlvbnMucHJlZml4Q2xzO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBnZXRDb250YWluZXIgPSBvcHRpb25zLmdldENvbnRhaW5lcjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnRyYW5zaXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICB0cmFuc2l0aW9uTmFtZSA9IG9wdGlvbnMudHJhbnNpdGlvbk5hbWU7XG4gICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDsgLy8gZGVsZXRlIG1lc3NhZ2VJbnN0YW5jZSBmb3IgbmV3IHRyYW5zaXRpb25OYW1lXG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXhDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4Q291bnQgPSBvcHRpb25zLm1heENvdW50O1xuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBpZiAob3B0aW9ucy5ydGwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJ0bCA9IG9wdGlvbnMucnRsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFJDTm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgY2FsbGJhY2spIHtcbiAgdmFyIHByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzIHx8IGxvY2FsUHJlZml4Q2xzO1xuXG4gIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGluc3RhbmNlOiBtZXNzYWdlSW5zdGFuY2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBfcmNOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdLm5ld0luc3RhbmNlKHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgc3R5bGU6IHtcbiAgICAgIHRvcDogZGVmYXVsdFRvcFxuICAgIH0sXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgbWF4Q291bnQ6IG1heENvdW50XG4gIH0sIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBtZXNzYWdlSW5zdGFuY2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2VJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgdHlwZVRvSWNvbiA9IHtcbiAgaW5mbzogX0luZm9DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBzdWNjZXNzOiBfQ2hlY2tDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBlcnJvcjogX0Nsb3NlQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgbG9hZGluZzogX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl1cbn07XG5cbmZ1bmN0aW9uIGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBhcmdzLmR1cmF0aW9uIDogZGVmYXVsdER1cmF0aW9uO1xuICB2YXIgSWNvbkNvbXBvbmVudCA9IHR5cGVUb0ljb25bYXJncy50eXBlXTtcbiAgdmFyIG1lc3NhZ2VDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY3VzdG9tLWNvbnRlbnRcIiksIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYXJncy50eXBlKSwgYXJncy50eXBlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIHJ0bCA9PT0gdHJ1ZSksIF9jbGFzc05hbWVzKSk7XG4gIHJldHVybiB7XG4gICAga2V5OiBhcmdzLmtleSxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgc3R5bGU6IGFyZ3Muc3R5bGUgfHwge30sXG4gICAgY2xhc3NOYW1lOiBhcmdzLmNsYXNzTmFtZSxcbiAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IG1lc3NhZ2VDbGFzc1xuICAgIH0sIGFyZ3MuaWNvbiB8fCBJY29uQ29tcG9uZW50ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db21wb25lbnQsIG51bGwpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgYXJncy5jb250ZW50KSksXG4gICAgb25DbG9zZTogYXJncy5vbkNsb3NlLFxuICAgIG9uQ2xpY2s6IGFyZ3Mub25DbGlja1xuICB9O1xufVxuXG5mdW5jdGlvbiBub3RpY2UoYXJncykge1xuICB2YXIgdGFyZ2V0ID0gYXJncy5rZXkgfHwga2V5Kys7XG4gIHZhciBjbG9zZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXJncy5vbkNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgIH07XG5cbiAgICBnZXRSQ05vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgaW5zdGFuY2Uubm90aWNlKGdldFJDTm90aWNlUHJvcHMoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAga2V5OiB0YXJnZXQsXG4gICAgICAgIG9uQ2xvc2U6IGNhbGxiYWNrXG4gICAgICB9KSwgcHJlZml4Q2xzKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgbWVzc2FnZUluc3RhbmNlLnJlbW92ZU5vdGljZSh0YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICByZXN1bHQudGhlbiA9IGZ1bmN0aW9uIChmaWxsZWQsIHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIGNsb3NlUHJvbWlzZS50aGVuKGZpbGxlZCwgcmVqZWN0ZWQpO1xuICB9O1xuXG4gIHJlc3VsdC5wcm9taXNlID0gY2xvc2VQcm9taXNlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc0FyZ3NQcm9wcyhjb250ZW50KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY29udGVudCkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmICEhY29udGVudC5jb250ZW50O1xufVxuXG52YXIgYXBpID0ge1xuICBvcGVuOiBub3RpY2UsXG4gIGNvbmZpZzogc2V0TWVzc2FnZUNvbmZpZyxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShtZXNzYWdlS2V5KSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgaWYgKG1lc3NhZ2VLZXkpIHtcbiAgICAgICAgdmFyIF9tZXNzYWdlSW5zdGFuY2UgPSBtZXNzYWdlSW5zdGFuY2UsXG4gICAgICAgICAgICByZW1vdmVOb3RpY2UgPSBfbWVzc2FnZUluc3RhbmNlLnJlbW92ZU5vdGljZTtcbiAgICAgICAgcmVtb3ZlTm90aWNlKG1lc3NhZ2VLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9tZXNzYWdlSW5zdGFuY2UyID0gbWVzc2FnZUluc3RhbmNlLFxuICAgICAgICAgICAgZGVzdHJveSA9IF9tZXNzYWdlSW5zdGFuY2UyLmRlc3Ryb3k7XG4gICAgICAgIGRlc3Ryb3koKTtcbiAgICAgICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGF0dGFjaFR5cGVBcGkob3JpZ2luYWxBcGksIHR5cGUpIHtcbiAgb3JpZ2luYWxBcGlbdHlwZV0gPSBmdW5jdGlvbiAoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpIHtcbiAgICBpZiAoaXNBcmdzUHJvcHMoY29udGVudCkpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEFwaS5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRlbnQpLCB7XG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNsb3NlID0gZHVyYXRpb247XG4gICAgICBkdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3JpZ2luYWxBcGkub3Blbih7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG9uQ2xvc2U6IG9uQ2xvc2VcbiAgICB9KTtcbiAgfTtcbn1cblxuWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvcicsICdsb2FkaW5nJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4gYXR0YWNoVHlwZUFwaShhcGksIHR5cGUpO1xufSk7XG5hcGkud2FybiA9IGFwaS53YXJuaW5nO1xuYXBpLnVzZU1lc3NhZ2UgPSAoMCwgX3VzZU1lc3NhZ2VbXCJkZWZhdWx0XCJdKShnZXRSQ05vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKTtcbi8qKiBAcHJpdmF0ZSB0ZXN0IG9ubHkgZnVuY3Rpb24uIE5vdCB3b3JrIG9uIHByb2R1Y3Rpb24gKi9cblxudmFyIGdldEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID8gbWVzc2FnZUluc3RhbmNlIDogbnVsbDtcbn07XG5cbmV4cG9ydHMuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbnZhciBfZGVmYXVsdCA9IGFwaTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGFuZ2VDb25maXJtTG9jYWxlID0gY2hhbmdlQ29uZmlybUxvY2FsZTtcbmV4cG9ydHMuZ2V0Q29uZmlybUxvY2FsZSA9IGdldENvbmZpcm1Mb2NhbGU7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZGVmYXVsdFwiKSk7XG5cbnZhciBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDb25maXJtTG9jYWxlKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB7XG4gICAgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJ1bnRpbWVMb2NhbGUpLCBuZXdMb2NhbGUpO1xuICB9IGVsc2Uge1xuICAgIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlybUxvY2FsZSgpIHtcbiAgcmV0dXJuIHJ1bnRpbWVMb2NhbGU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVVc2VOb3RpZmljYXRpb247XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VOb3RpZmljYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1ub3RpZmljYXRpb24vbGliL3VzZU5vdGlmaWNhdGlvblwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVVc2VOb3RpZmljYXRpb24oZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UsIGdldFJDTm90aWNlUHJvcHMpIHtcbiAgdmFyIHVzZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIHVzZU5vdGlmaWNhdGlvbigpIHtcbiAgICAvLyBXZSBjYW4gb25seSBnZXQgY29udGVudCBieSByZW5kZXJcbiAgICB2YXIgZ2V0UHJlZml4Q2xzOyAvLyBXZSBjcmVhdGUgYSBwcm94eSB0byBoYW5kbGUgZGVsYXkgY3JlYXRlZCBpbnN0YW5jZVxuXG4gICAgdmFyIGlubmVySW5zdGFuY2UgPSBudWxsO1xuICAgIHZhciBwcm94eSA9IHtcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKG5vdGljZVByb3BzLCBob2xkZXJDYWxsYmFjaykge1xuICAgICAgICBpbm5lckluc3RhbmNlID09PSBudWxsIHx8IGlubmVySW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlubmVySW5zdGFuY2UuY29tcG9uZW50LmFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX3VzZVJDTm90aWZpY2F0aW9uID0gKDAsIF91c2VOb3RpZmljYXRpb25bXCJkZWZhdWx0XCJdKShwcm94eSksXG4gICAgICAgIF91c2VSQ05vdGlmaWNhdGlvbjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVJDTm90aWZpY2F0aW9uLCAyKSxcbiAgICAgICAgaG9va05vdGlmeSA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMF0sXG4gICAgICAgIGhvbGRlciA9IF91c2VSQ05vdGlmaWNhdGlvbjJbMV07XG5cbiAgICBmdW5jdGlvbiBub3RpZnkoYXJncykge1xuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzO1xuICAgICAgdmFyIG1lcmdlZFByZWZpeENscyA9IGdldFByZWZpeENscygnbm90aWZpY2F0aW9uJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIGdldE5vdGlmaWNhdGlvbkluc3RhbmNlKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgIHByZWZpeENsczogbWVyZ2VkUHJlZml4Q2xzXG4gICAgICB9KSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgICBpbm5lckluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIGhvb2tOb3RpZnkoZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gRmlsbCBmdW5jdGlvbnNcblxuXG4gICAgdmFyIGhvb2tBcGlSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICAgIGhvb2tBcGlSZWYuY3VycmVudC5vcGVuID0gbm90aWZ5O1xuICAgIFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBob29rQXBpUmVmLmN1cnJlbnRbdHlwZV0gPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICByZXR1cm4gaG9va0FwaVJlZi5jdXJyZW50Lm9wZW4oKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXJncyksIHtcbiAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIFtob29rQXBpUmVmLmN1cnJlbnQsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwge1xuICAgICAga2V5OiBcImhvbGRlclwiXG4gICAgfSwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIGdldFByZWZpeENscyA9IGNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgcmV0dXJuIGhvbGRlcjtcbiAgICB9KV07XG4gIH07XG5cbiAgcmV0dXJuIHVzZU5vdGlmaWNhdGlvbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuZ2V0SW5zdGFuY2UgPSB2b2lkIDA7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9DbG9zZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VPdXRsaW5lZFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0luZm9DaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0luZm9DaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ob29rcy91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgX19hd2FpdGVyID0gdm9pZCAwICYmICh2b2lkIDApLl9fYXdhaXRlciB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xuICAgIH1cblxuICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59O1xuXG52YXIgbm90aWZpY2F0aW9uSW5zdGFuY2UgPSB7fTtcbnZhciBkZWZhdWx0RHVyYXRpb24gPSA0LjU7XG52YXIgZGVmYXVsdFRvcCA9IDI0O1xudmFyIGRlZmF1bHRCb3R0b20gPSAyNDtcbnZhciBkZWZhdWx0UHJlZml4Q2xzID0gJ2FudC1ub3RpZmljYXRpb24nO1xudmFyIGRlZmF1bHRQbGFjZW1lbnQgPSAndG9wUmlnaHQnO1xudmFyIGRlZmF1bHRHZXRDb250YWluZXI7XG52YXIgZGVmYXVsdENsb3NlSWNvbjtcbnZhciBydGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0Tm90aWZpY2F0aW9uQ29uZmlnKG9wdGlvbnMpIHtcbiAgdmFyIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgIHBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm90dG9tID0gb3B0aW9ucy5ib3R0b20sXG4gICAgICB0b3AgPSBvcHRpb25zLnRvcCxcbiAgICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyLFxuICAgICAgY2xvc2VJY29uID0gb3B0aW9ucy5jbG9zZUljb24sXG4gICAgICBwcmVmaXhDbHMgPSBvcHRpb25zLnByZWZpeENscztcblxuICBpZiAocHJlZml4Q2xzICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0UHJlZml4Q2xzID0gcHJlZml4Q2xzO1xuICB9XG5cbiAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0RHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgfVxuXG4gIGlmIChwbGFjZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5ydGwpIHtcbiAgICBkZWZhdWx0UGxhY2VtZW50ID0gJ3RvcExlZnQnO1xuICB9XG5cbiAgaWYgKGJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdEJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGlmICh0b3AgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRUb3AgPSB0b3A7XG4gIH1cblxuICBpZiAoZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0R2V0Q29udGFpbmVyID0gZ2V0Q29udGFpbmVyO1xuICB9XG5cbiAgaWYgKGNsb3NlSWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdENsb3NlSWNvbiA9IGNsb3NlSWNvbjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJ0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcnRsID0gb3B0aW9ucy5ydGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50U3R5bGUocGxhY2VtZW50KSB7XG4gIHZhciB0b3AgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRUb3A7XG4gIHZhciBib3R0b20gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGRlZmF1bHRCb3R0b207XG4gIHZhciBzdHlsZTtcblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYm90dG9tOiAnYXV0bydcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGNhbGxiYWNrKSB7XG4gIHZhciBfYXJncyRwbGFjZW1lbnQgPSBhcmdzLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9hcmdzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gZGVmYXVsdFBsYWNlbWVudCA6IF9hcmdzJHBsYWNlbWVudCxcbiAgICAgIHRvcCA9IGFyZ3MudG9wLFxuICAgICAgYm90dG9tID0gYXJncy5ib3R0b20sXG4gICAgICBfYXJncyRnZXRDb250YWluZXIgPSBhcmdzLmdldENvbnRhaW5lcixcbiAgICAgIGdldENvbnRhaW5lciA9IF9hcmdzJGdldENvbnRhaW5lciA9PT0gdm9pZCAwID8gZGVmYXVsdEdldENvbnRhaW5lciA6IF9hcmdzJGdldENvbnRhaW5lcixcbiAgICAgIF9hcmdzJGNsb3NlSWNvbiA9IGFyZ3MuY2xvc2VJY29uLFxuICAgICAgY2xvc2VJY29uID0gX2FyZ3MkY2xvc2VJY29uID09PSB2b2lkIDAgPyBkZWZhdWx0Q2xvc2VJY29uIDogX2FyZ3MkY2xvc2VJY29uO1xuICB2YXIgb3V0ZXJQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscyB8fCBkZWZhdWx0UHJlZml4Q2xzO1xuICB2YXIgcHJlZml4Q2xzID0gXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLW5vdGljZVwiKTtcbiAgdmFyIGNhY2hlS2V5ID0gXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocGxhY2VtZW50KTtcbiAgdmFyIGNhY2hlSW5zdGFuY2UgPSBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV07XG5cbiAgaWYgKGNhY2hlSW5zdGFuY2UpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoY2FjaGVJbnN0YW5jZSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNsb3NlSWNvblRvUmVuZGVyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1jbG9zZS14XCIpXG4gIH0sIGNsb3NlSWNvbiB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpXG4gIH0pKTtcbiAgdmFyIG5vdGlmaWNhdGlvbkNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocGxhY2VtZW50KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsID09PSB0cnVlKSk7XG4gIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgX3JjTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5uZXdJbnN0YW5jZSh7XG4gICAgICBwcmVmaXhDbHM6IG91dGVyUHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lOiBub3RpZmljYXRpb25DbGFzcyxcbiAgICAgIHN0eWxlOiBnZXRQbGFjZW1lbnRTdHlsZShwbGFjZW1lbnQsIHRvcCwgYm90dG9tKSxcbiAgICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgICAgY2xvc2VJY29uOiBjbG9zZUljb25Ub1JlbmRlclxuICAgIH0sIGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgIHJlc29sdmUobm90aWZpY2F0aW9uKTtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBub3RpZmljYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIHR5cGVUb0ljb24gPSB7XG4gIHN1Y2Nlc3M6IF9DaGVja0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgaW5mbzogX0luZm9DaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIGVycm9yOiBfQ2xvc2VDaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIHdhcm5pbmc6IF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXVxufTtcblxuZnVuY3Rpb24gZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJncy5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdER1cmF0aW9uIDogYXJncy5kdXJhdGlvbjtcbiAgdmFyIGljb25Ob2RlID0gbnVsbDtcblxuICBpZiAoYXJncy5pY29uKSB7XG4gICAgaWNvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIilcbiAgICB9LCBhcmdzLmljb24pO1xuICB9IGVsc2UgaWYgKGFyZ3MudHlwZSkge1xuICAgIGljb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZVRvSWNvblthcmdzLnR5cGVdIHx8IG51bGwsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uLVwiKS5jb25jYXQoYXJncy50eXBlKVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGF1dG9NYXJnaW5UYWcgPSAhYXJncy5kZXNjcmlwdGlvbiAmJiBpY29uTm9kZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lc3NhZ2Utc2luZ2xlLWxpbmUtYXV0by1tYXJnaW5cIilcbiAgfSkgOiBudWxsO1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogaWNvbk5vZGUgPyBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdpdGgtaWNvblwiKSA6ICcnLFxuICAgICAgcm9sZTogXCJhbGVydFwiXG4gICAgfSwgaWNvbk5vZGUsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZXNzYWdlXCIpXG4gICAgfSwgYXV0b01hcmdpblRhZywgYXJncy5tZXNzYWdlKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRlc2NyaXB0aW9uXCIpXG4gICAgfSwgYXJncy5kZXNjcmlwdGlvbiksIGFyZ3MuYnRuID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1idG5cIilcbiAgICB9LCBhcmdzLmJ0bikgOiBudWxsKSxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgb25DbG9zZTogYXJncy5vbkNsb3NlLFxuICAgIG9uQ2xpY2s6IGFyZ3Mub25DbGljayxcbiAgICBrZXk6IGFyZ3Mua2V5LFxuICAgIHN0eWxlOiBhcmdzLnN0eWxlIHx8IHt9LFxuICAgIGNsYXNzTmFtZTogYXJncy5jbGFzc05hbWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm90aWNlKGFyZ3MpIHtcbiAgZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5ub3RpY2UoZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpKTtcbiAgfSk7XG59XG5cbnZhciBhcGkgPSB7XG4gIG9wZW46IG5vdGljZSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGtleSkge1xuICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0pLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLnJlbW92ZU5vdGljZShrZXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGNvbmZpZzogc2V0Tm90aWZpY2F0aW9uQ29uZmlnLFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBkZWxldGUgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldOyAvLyBsZ3RtW2pzL21pc3NpbmctYXdhaXRdXG4gICAgfSk7XG4gIH1cbn07XG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBhcGlbdHlwZV0gPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiBhcGkub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuYXBpLndhcm4gPSBhcGkud2FybmluZztcbmFwaS51c2VOb3RpZmljYXRpb24gPSAoMCwgX3VzZU5vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0pKGdldE5vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKTtcbi8qKiBAcHJpdmF0ZSB0ZXN0IG9ubHkgZnVuY3Rpb24uIE5vdCB3b3JrIG9uIHByb2R1Y3Rpb24gKi9cblxudmFyIGdldEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW5zdGFuY2UoY2FjaGVLZXkpIHtcbiAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvcltcImRlZmF1bHRcIl0ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyA/IG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSA6IG51bGwpO1xuXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xufTtcblxuZXhwb3J0cy5nZXRJbnN0YW5jZSA9IGdldEluc3RhbmNlO1xudmFyIF9kZWZhdWx0ID0gYXBpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgdGltZScsXG4gIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgdGltZScsICdFbmQgdGltZSddXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIE5vdGljZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMi5kZWZhdWx0KShOb3RpY2UsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMi5kZWZhdWx0KShOb3RpY2UpO1xuXG4gIGZ1bmN0aW9uIE5vdGljZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMi5kZWZhdWx0KSh0aGlzLCBOb3RpY2UpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgbm90aWNlS2V5ID0gX3RoaXMkcHJvcHMubm90aWNlS2V5O1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKG5vdGljZUtleSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXJ0Q2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sIF90aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jbG9zZVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyLmRlZmF1bHQpKE5vdGljZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24gIT09IHByZXZQcm9wcy5kdXJhdGlvbiB8fCB0aGlzLnByb3BzLnVwZGF0ZU1hcmsgIT09IHByZXZQcm9wcy51cGRhdGVNYXJrKSB7XG4gICAgICAgIHRoaXMucmVzdGFydENsb3NlVGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN0YXJ0Q2xvc2VUaW1lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXN0YXJ0Q2xvc2VUaW1lcigpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjbG9zYWJsZSA9IF90aGlzJHByb3BzMi5jbG9zYWJsZSxcbiAgICAgICAgICBjbG9zZUljb24gPSBfdGhpcyRwcm9wczIuY2xvc2VJY29uLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczIub25DbGljayxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBob2xkZXIgPSBfdGhpcyRwcm9wczIuaG9sZGVyO1xuICAgICAgdmFyIGNvbXBvbmVudENsYXNzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3RpY2VcIik7XG4gICAgICB2YXIgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA1KSA9PT0gJ2RhdGEtJyB8fCBrZXkuc3Vic3RyKDAsIDUpID09PSAnYXJpYS0nIHx8IGtleSA9PT0gJ3JvbGUnKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBfdGhpczIucHJvcHNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgICB2YXIgbm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNvbXBvbmVudENsYXNzLCBjbGFzc05hbWUsICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2FibGVcIiksIGNsb3NhYmxlKSksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmNsZWFyQ2xvc2VUaW1lcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnN0YXJ0Q2xvc2VUaW1lcixcbiAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgfSwgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNvbnRlbnRcIilcbiAgICAgIH0sIGNoaWxkcmVuKSwgY2xvc2FibGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmNsb3NlLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zZVwiKVxuICAgICAgfSwgY2xvc2VJY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2UteFwiKVxuICAgICAgfSkpIDogbnVsbCk7XG5cbiAgICAgIGlmIChob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdERvbS5kZWZhdWx0LmNyZWF0ZVBvcnRhbChub2RlLCBob2xkZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE5vdGljZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTm90aWNlO1xuTm90aWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICBkdXJhdGlvbjogMS41XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZU5vdGlmaWNhdGlvbjtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfTm90aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob3RpY2VcIikpO1xuXG5mdW5jdGlvbiB1c2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSW5zdGFuY2UpIHtcbiAgdmFyIGNyZWF0ZWRSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShbXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RWxlbWVudHMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeShub3RpY2VQcm9wcykge1xuICAgIG5vdGlmaWNhdGlvbkluc3RhbmNlLmFkZChub3RpY2VQcm9wcywgZnVuY3Rpb24gKGRpdiwgcHJvcHMpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wcy5rZXk7XG5cbiAgICAgIGlmIChkaXYgJiYgIWNyZWF0ZWRSZWYuY3VycmVudFtrZXldKSB7XG4gICAgICAgIHZhciBub3RpY2VFbGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Ob3RpY2UuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBob2xkZXI6IGRpdlxuICAgICAgICB9KSk7XG4gICAgICAgIGNyZWF0ZWRSZWYuY3VycmVudFtrZXldID0gbm90aWNlRWxlO1xuICAgICAgICBzZXRFbGVtZW50cyhmdW5jdGlvbiAob3JpZ2luRWxlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG9yaWdpbkVsZW1lbnRzKSwgW25vdGljZUVsZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbbm90aWZ5LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBlbGVtZW50cyldO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICAvLyBPcHRpb25zLmpzeFxuICBpdGVtc19wZXJfcGFnZTogJy8gcGFnZScsXG4gIGp1bXBfdG86ICdHbyB0bycsXG4gIGp1bXBfdG9fY29uZmlybTogJ2NvbmZpcm0nLFxuICBwYWdlOiAnJyxcbiAgLy8gUGFnaW5hdGlvbi5qc3hcbiAgcHJldl9wYWdlOiAnUHJldmlvdXMgUGFnZScsXG4gIG5leHRfcGFnZTogJ05leHQgUGFnZScsXG4gIHByZXZfNTogJ1ByZXZpb3VzIDUgUGFnZXMnLFxuICBuZXh0XzU6ICdOZXh0IDUgUGFnZXMnLFxuICBwcmV2XzM6ICdQcmV2aW91cyAzIFBhZ2VzJyxcbiAgbmV4dF8zOiAnTmV4dCAzIFBhZ2VzJ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGxvY2FsZSA9IHtcbiAgbG9jYWxlOiAnZW5fVVMnLFxuICB0b2RheTogJ1RvZGF5JyxcbiAgbm93OiAnTm93JyxcbiAgYmFja1RvVG9kYXk6ICdCYWNrIHRvIHRvZGF5JyxcbiAgb2s6ICdPaycsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb250aDogJ01vbnRoJyxcbiAgeWVhcjogJ1llYXInLFxuICB0aW1lU2VsZWN0OiAnc2VsZWN0IHRpbWUnLFxuICBkYXRlU2VsZWN0OiAnc2VsZWN0IGRhdGUnLFxuICB3ZWVrU2VsZWN0OiAnQ2hvb3NlIGEgd2VlaycsXG4gIG1vbnRoU2VsZWN0OiAnQ2hvb3NlIGEgbW9udGgnLFxuICB5ZWFyU2VsZWN0OiAnQ2hvb3NlIGEgeWVhcicsXG4gIGRlY2FkZVNlbGVjdDogJ0Nob29zZSBhIGRlY2FkZScsXG4gIHllYXJGb3JtYXQ6ICdZWVlZJyxcbiAgZGF0ZUZvcm1hdDogJ00vRC9ZWVlZJyxcbiAgZGF5Rm9ybWF0OiAnRCcsXG4gIGRhdGVUaW1lRm9ybWF0OiAnTS9EL1lZWVkgSEg6bW06c3MnLFxuICBtb250aEJlZm9yZVllYXI6IHRydWUsXG4gIHByZXZpb3VzTW9udGg6ICdQcmV2aW91cyBtb250aCAoUGFnZVVwKScsXG4gIG5leHRNb250aDogJ05leHQgbW9udGggKFBhZ2VEb3duKScsXG4gIHByZXZpb3VzWWVhcjogJ0xhc3QgeWVhciAoQ29udHJvbCArIGxlZnQpJyxcbiAgbmV4dFllYXI6ICdOZXh0IHllYXIgKENvbnRyb2wgKyByaWdodCknLFxuICBwcmV2aW91c0RlY2FkZTogJ0xhc3QgZGVjYWRlJyxcbiAgbmV4dERlY2FkZTogJ05leHQgZGVjYWRlJyxcbiAgcHJldmlvdXNDZW50dXJ5OiAnTGFzdCBjZW50dXJ5JyxcbiAgbmV4dENlbnR1cnk6ICdOZXh0IGNlbnR1cnknXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==