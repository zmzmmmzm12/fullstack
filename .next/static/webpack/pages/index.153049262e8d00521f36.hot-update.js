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
  var Header = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      height: '44px',
      background: 'white',
      position: 'relative',
      padding: 0,
      textAlign: 'center'
    };
  }, []);
  var HeaderH1 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      margin: 0,
      fontSize: '17px',
      color: '#333',
      lineHeight: '44px'
    };
  }, []);
  var HeaderBtn = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: '15px',
      lineHeight: '14px',
      cursor: 'pointer'
    };
  }, []);
  var SlickWrapper = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      height: 'calc(100% - 44px)',
      background: '#898989'
    };
  }, []);
  var ImgWrapper = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      padding: '32px',
      textAlign: 'center'
    };
  }, []);
  var Img = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      margin: '0 auto',
      maxHeight: '750px'
    };
  }, []);
  var Indicator = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      textAlign: 'center'
    };
  }, []);
  var IndicatorDiv = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      width: '75px',
      height: '30px',
      lineHeight: '30px',
      borderRadius: '15px',
      background: '#313131',
      display: 'inline-block',
      textAlign: 'center',
      color: 'white',
      fontSize: '15px'
    };
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: overlay,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      style: Header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        style: HeaderH1,
        children: "\uC0C1\uC138\uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: HeaderBtn,
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: SlickWrapper,
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
              style: ImgWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                style: Img,
                src: v.src,
                alt: v.src
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "DjQplJzG1nkxNtoOxp/lC70eHlU=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwib3ZlcmxheSIsInVzZU1lbW8iLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIkhlYWRlciIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiSGVhZGVySDEiLCJtYXJnaW4iLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsIkhlYWRlckJ0biIsImN1cnNvciIsIlNsaWNrV3JhcHBlciIsIkltZ1dyYXBwZXIiLCJJbWciLCJtYXhIZWlnaHQiLCJJbmRpY2F0b3IiLCJJbmRpY2F0b3JEaXYiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFDLFNBQVhBLFVBQVcsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ2pDLE1BQU1DLE9BQU8sR0FBQ0MscURBQU8sQ0FBQztBQUFBLFdBQUs7QUFDdkJDLGNBQVEsRUFBRSxPQURhO0FBRXZCQyxZQUFNLEVBQUUsSUFGZTtBQUd2QkMsU0FBRyxFQUFDLENBSG1CO0FBSXZCQyxVQUFJLEVBQUMsQ0FKa0I7QUFLdkJDLFdBQUssRUFBQyxDQUxpQjtBQU12QkMsWUFBTSxFQUFDO0FBTmdCLEtB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QVNELGVBQWUsQ0FBQ0MsS0FBRCxDQUF4QjtBQUFBLFdBRmpCO0FBR0ksa0JBQVEsTUFIWjtBQUlJLGdCQUFNLEVBQUUsS0FKWjtBQUtJLHNCQUFZLEVBQUUsQ0FMbEI7QUFNSSx3QkFBYyxFQUFFLENBTnBCO0FBQUEsb0JBUUtsQyxNQUFNLENBQUNtQyxHQUFQLENBQVcsVUFBQ0MsQ0FBRCxFQUFLO0FBQ2I7QUFBQTtBQUFpQixtQkFBSyxFQUFFYixVQUF4QjtBQUFBLHFDQUNJO0FBQUsscUJBQUssRUFBRUMsR0FBWjtBQUFpQixtQkFBRyxFQUFFWSxDQUFDLENBQUNDLEdBQXhCO0FBQTZCLG1CQUFHLEVBQUVELENBQUMsQ0FBQ0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQVVELENBQUMsQ0FBQ0MsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0gsV0FKQTtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBM0ZEOztHQUFNdEMsVTs7S0FBQUEsVTtBQTZGTkEsVUFBVSxDQUFDdUMsU0FBWCxHQUFxQjtBQUNqQnRDLFFBQU0sRUFBRXVDLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCLEVBQW9DQyxVQUQzQjtBQUVqQnpDLFNBQU8sRUFBRXNDLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGUCxDQUFyQjtBQUtlM0MseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTUzMDQ5MjYyZThkMDA1MjFmMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTbGljayBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBmaXhDb250cm9sbGVkVmFsdWUgfSBmcm9tICdhbnRkL2xpYi9pbnB1dC9JbnB1dCc7XHJcblxyXG5jb25zdCBJbWFnZXNab29tPSh7aW1hZ2VzLG9uQ2xvc2V9KT0+e1xyXG4gICAgY29uc3Qgb3ZlcmxheT11c2VNZW1vKCgpPT4oe1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIHpJbmRleDogNTAwMCxcclxuICAgICAgICB0b3A6MCxcclxuICAgICAgICBsZWZ0OjAsXHJcbiAgICAgICAgcmlnaHQ6MCxcclxuICAgICAgICBib3R0b206MFxyXG4gICAgfSksW10pO1xyXG4gICAgY29uc3QgSGVhZGVyPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgaGVpZ2h0Oic0NHB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9KSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEhlYWRlckgxPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgbWFyZ2luOjAsXHJcbiAgICAgICAgZm9udFNpemU6JzE3cHgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzMzMycsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ0cHgnXHJcbiAgICB9KSxbXSk7XHJcblxyXG4gICAgY29uc3QgSGVhZGVyQnRuPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgcmlnaHQ6MCxcclxuICAgICAgICB0b3A6MCxcclxuICAgICAgICBwYWRkaW5nOiAnMTVweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzE0cHgnLFxyXG4gICAgICAgIGN1cnNvcjoncG9pbnRlcidcclxuICAgIH0pLFtdKTtcclxuXHJcbiAgICBjb25zdCBTbGlja1dyYXBwZXI9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA0NHB4KScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyM4OTg5ODknXHJcbiAgICB9KSxbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IEltZ1dyYXBwZXI9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBwYWRkaW5nOiczMnB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9KSxbXSk7XHJcblxyXG4gICAgY29uc3QgSW1nPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc3NTBweCdcclxuICAgIH0pLFtdKTtcclxuXHJcbiAgICBjb25zdCBJbmRpY2F0b3I9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH0pLFtdKTtcclxuXHJcbiAgICBjb25zdCBJbmRpY2F0b3JEaXY9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICB3aWR0aDogJzc1cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxNXB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzMxMzEzMScsXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzE1cHgnXHJcbiAgICB9KSxbXSk7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSxzZXRDdXJyZW50U2xpZGVdPXVzZVN0YXRlKDApO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e292ZXJsYXl9PlxyXG4gICAgICAgICAgICA8aGVhZGVyIHN0eWxlPXtIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtIZWFkZXJIMX0+7IOB7IS47J2066+47KeAPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e0hlYWRlckJ0bn0gb25DbGljaz17b25DbG9zZX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1NsaWNrV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJDaGFuZ2U9eyhzbGlkZSk9PnNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgodik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2LnNyY30gc3R5bGU9e0ltZ1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e0ltZ30gc3JjPXt2LnNyY30gYWx0PXt2LnNyY30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkltYWdlc1pvb20ucHJvcFR5cGVzPXtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTsiXSwic291cmNlUm9vdCI6IiJ9