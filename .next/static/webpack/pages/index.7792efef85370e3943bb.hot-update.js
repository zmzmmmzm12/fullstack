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
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: HeaderBtn,
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: SlickWrapper,
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
                  lineNumber: 65,
                  columnNumber: 33
                }, _this)
              }, v.src, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "GY9ThWFtzKaOal1ZBlkWzr4yqzk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwib3ZlcmxheSIsInVzZU1lbW8iLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIkhlYWRlciIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiSGVhZGVySDEiLCJtYXJnaW4iLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsIkhlYWRlckJ0biIsImN1cnNvciIsIlNsaWNrV3JhcHBlciIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUMsU0FBWEEsVUFBVyxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDakMsTUFBTUMsT0FBTyxHQUFDQyxxREFBTyxDQUFDO0FBQUEsV0FBSztBQUN2QkMsY0FBUSxFQUFFLE9BRGE7QUFFdkJDLFlBQU0sRUFBRSxJQUZlO0FBR3ZCQyxTQUFHLEVBQUMsQ0FIbUI7QUFJdkJDLFVBQUksRUFBQyxDQUprQjtBQUt2QkMsV0FBSyxFQUFDLENBTGlCO0FBTXZCQyxZQUFNLEVBQUM7QUFOZ0IsS0FBTDtBQUFBLEdBQUQsRUFPbEIsRUFQa0IsQ0FBckI7QUFRQSxNQUFNQyxNQUFNLEdBQUNQLHFEQUFPLENBQUM7QUFBQSxXQUFLO0FBQ3RCUSxZQUFNLEVBQUMs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NzkyZWZlZjg1MzcwZTM5NDNiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGZpeENvbnRyb2xsZWRWYWx1ZSB9IGZyb20gJ2FudGQvbGliL2lucHV0L0lucHV0JztcclxuXHJcbmNvbnN0IEltYWdlc1pvb209KHtpbWFnZXMsb25DbG9zZX0pPT57XHJcbiAgICBjb25zdCBvdmVybGF5PXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgekluZGV4OiA1MDAwLFxyXG4gICAgICAgIHRvcDowLFxyXG4gICAgICAgIGxlZnQ6MCxcclxuICAgICAgICByaWdodDowLFxyXG4gICAgICAgIGJvdHRvbTowXHJcbiAgICB9KSxbXSk7XHJcbiAgICBjb25zdCBIZWFkZXI9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBoZWlnaHQ6JzQ0cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH0pLCBbXSk7XHJcblxyXG4gICAgY29uc3QgSGVhZGVySDE9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICBmb250U2l6ZTonMTdweCcsXHJcbiAgICAgICAgY29sb3I6ICcjMzMzJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCdcclxuICAgIH0pLFtdKTtcclxuXHJcbiAgICBjb25zdCBIZWFkZXJCdG49dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICByaWdodDowLFxyXG4gICAgICAgIHRvcDowLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxNXB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTRweCcsXHJcbiAgICAgICAgY3Vyc29yOidwb2ludGVyJ1xyXG4gICAgfSksW10pO1xyXG5cclxuICAgIGNvbnN0IFNsaWNrV3JhcHBlcj11c2VNZW1vKCgpPT4oe1xyXG4gICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDQ0cHgpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzg5ODk4OSdcclxuICAgIH0pLFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSxzZXRDdXJyZW50U2xpZGVdPXVzZVN0YXRlKDApO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e292ZXJsYXl9PlxyXG4gICAgICAgICAgICA8aGVhZGVyIHN0eWxlPXtIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtIZWFkZXJIMX0+7IOB7IS47J2066+47KeAPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e0hlYWRlckJ0bn0gb25DbGljaz17b25DbG9zZX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1NsaWNrV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpPT5zZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnNyY30gYWx0PXt2LnNyY30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSW1hZ2VzWm9vbS5wcm9wVHlwZXM9e1xyXG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyJdLCJzb3VyY2VSb290IjoiIn0=