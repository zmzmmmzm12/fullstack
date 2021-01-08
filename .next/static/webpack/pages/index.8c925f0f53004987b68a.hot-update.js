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
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: HeaderBtn,
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
                lineNumber: 59,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "UZgv3yr97eIICuSzfTZNCOf0Txs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwib3ZlcmxheSIsInVzZU1lbW8iLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIkhlYWRlciIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiSGVhZGVySDEiLCJtYXJnaW4iLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsIkhlYWRlckJ0biIsImN1cnNvciIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUMsU0FBWEEsVUFBVyxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDakMsTUFBTUMsT0FBTyxHQUFDQyxxREFBTyxDQUFDO0FBQUEsV0FBSztBQUN2QkMsY0FBUSxFQUFFLE9BRGE7QUFFdkJDLFlBQU0sRUFBRSxJQUZlO0FBR3ZCQyxTQUFHLEVBQUMsQ0FIbUI7QUFJdkJDLFVBQUksRUFBQyxDQUprQjtBQUt2QkMsV0FBSyxFQUFDLENBTGlCO0FBTXZCQyxZQUFNLEVBQUM7QUFOZ0IsS0FBTDtBQUFBLEdBQUQsRUFPbEIsRUFQa0IsQ0FBckI7QUFRQSxNQUFNQyxNQUFNLEdBQUNQLHFEQUFPLENBQUM7QUFBQSxXQUFLO0FBQ3RCUSxZQUFNLEVBQUMsTUFEZTtBQUV0QkMsZ0JBQVUsRUFBRSxPQUZVO0FBR3RCUixjQUFRLEVBQUUsVUFIWTtBQUl0QlMsYUFBTyxFQUFFLENBSmE7QUFLdEJDLGVBQVMsRUFBQztBQUxZLEtBQUw7QUFBQSxHQUFELEVBTWhCLEVBTmdCLENBQXBCO0FBUUEsTUFBTUMsUUFBUSxHQUFDWixxREFBTyxDQUFDO0FBQUEsV0FBSztBQUN4QmEsWUFBTSxFQUFDLENBRGlCO0FBRXhCQyxjQUFRLEVBQUMsTUFGZTtBQUd4QkMsV0FBSyxFQUFFLE1BSGlCO0FBSXhCQyxnQkFBVSxFQUFFO0FBSlksS0FBTDtBQUFBLEdBQUQsRUFLbkIsRUFMbUIsQ0FBdEI7QUFPQSxNQUFNQyxTQUFTLEdBQUNqQixxREFBTyxDQUFDO0FBQUEsV0FBSztBQUN6QkMsY0FBUSxFQUFFLFVBRGU7QUFFekJJLFdBQUssRUFBQyxDQUZtQjtBQUd6QkYsU0FBRyxFQUFDLENBSHFCO0FBSXpCTyxhQUFPLEVBQUUsTUFKZ0I7QUFLekJNLGdCQUFVLEVBQUUsTUFMYTtBQU16QkUsWUFBTSxFQUFDO0FBTmtCLEtBQUw7QUFBQSxHQUFELEVBT3BCLEVBUG9CLENBQXZCOztBQXhCaUMsa0JBaUNJQyxzREFBUSxDQUFDLENBQUQsQ0FqQ1o7QUFBQSxNQWlDMUJDLFlBakMwQjtBQUFBLE1BaUNiQyxlQWpDYTs7QUFrQ2pDLHNCQUNJO0FBQUssU0FBSyxFQUFFdEIsT0FBWjtBQUFBLDRCQUNJO0FBQVEsV0FBSyxFQUFFUSxNQUFmO0FBQUEsOEJBQ0k7QUFBSSxhQUFLLEVBQUVLLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQVEsYUFBSyxFQUFFSyxTQUFmO0FBQTBCLGVBQU8sRUFBRW5CLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFBLDZCQUNJO0FBQUEsK0JBQ0kscUVBQUMsa0RBQUQ7QUFDSSxzQkFBWSxFQUFFLENBRGxCO0FBRUkscUJBQVcsRUFBRSxxQkFBQ3dCLEtBQUQ7QUFBQSxtQkFBU0QsZUFBZSxDQUFDQyxLQUFELENBQXhCO0FBQUEsV0FGakI7QUFHSSxrQkFBUSxNQUhaO0FBSUksZ0JBQU0sRUFBRSxLQUpaO0FBS0ksc0JBQVksRUFBRSxDQUxsQjtBQU1JLHdCQUFjLEVBQUUsQ0FOcEI7QUFBQSxvQkFRS3pCLE1BQU0sQ0FBQzBCLEdBQVAsQ0FBVyxVQUFDQyxDQUFELEVBQUs7QUFDYjtBQUFBO0FBQUEscUNBQ0k7QUFBSyxtQkFBRyxFQUFFQSxDQUFDLENBQUNDLEdBQVo7QUFBaUIsbUJBQUcsRUFBRUQsQ0FBQyxDQUFDQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBVUQsQ0FBQyxDQUFDQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSCxXQUpBO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0E1REQ7O0dBQU03QixVOztLQUFBQSxVO0FBOEROQSxVQUFVLENBQUM4QixTQUFYLEdBQXFCO0FBQ2pCN0IsUUFBTSxFQUFFOEIsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRDNCO0FBRWpCaEMsU0FBTyxFQUFFNkIsaURBQVMsQ0FBQ0ksSUFBVixDQUFlRDtBQUZQLENBQXJCO0FBS2VsQyx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YzkyNWYwZjUzMDA0OTg3YjY4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGZpeENvbnRyb2xsZWRWYWx1ZSB9IGZyb20gJ2FudGQvbGliL2lucHV0L0lucHV0JztcclxuXHJcbmNvbnN0IEltYWdlc1pvb209KHtpbWFnZXMsb25DbG9zZX0pPT57XHJcbiAgICBjb25zdCBvdmVybGF5PXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgekluZGV4OiA1MDAwLFxyXG4gICAgICAgIHRvcDowLFxyXG4gICAgICAgIGxlZnQ6MCxcclxuICAgICAgICByaWdodDowLFxyXG4gICAgICAgIGJvdHRvbTowXHJcbiAgICB9KSxbXSk7XHJcbiAgICBjb25zdCBIZWFkZXI9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBoZWlnaHQ6JzQ0cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH0pLCBbXSk7XHJcblxyXG4gICAgY29uc3QgSGVhZGVySDE9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICBmb250U2l6ZTonMTdweCcsXHJcbiAgICAgICAgY29sb3I6ICcjMzMzJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCdcclxuICAgIH0pLFtdKTtcclxuXHJcbiAgICBjb25zdCBIZWFkZXJCdG49dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICByaWdodDowLFxyXG4gICAgICAgIHRvcDowLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxNXB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTRweCcsXHJcbiAgICAgICAgY3Vyc29yOidwb2ludGVyJ1xyXG4gICAgfSksW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLHNldEN1cnJlbnRTbGlkZV09dXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17b3ZlcmxheX0+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9e0hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e0hlYWRlckgxfT7sg4HshLjsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17SGVhZGVyQnRufSBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKT0+c2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Yuc3JjfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcz17XHJcbiAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207Il0sInNvdXJjZVJvb3QiOiIifQ==