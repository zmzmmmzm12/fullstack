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
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: HeaderBtn,
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
                lineNumber: 74,
                columnNumber: 33
              }, _this)
            }, v.src, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};

_s(ImagesZoom, "mDyk072YSg6MgIDf7Sgxvp8qtzM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwib3ZlcmxheSIsInVzZU1lbW8iLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIkhlYWRlciIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiSGVhZGVySDEiLCJtYXJnaW4iLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsIkhlYWRlckJ0biIsImN1cnNvciIsIlNsaWNrV3JhcHBlciIsIkltZ1dyYXBwZXIiLCJJbWciLCJtYXhIZWlnaHQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFDLFNBQVhBLFVBQVcsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ2pDLE1BQU1DLE9BQU8sR0FBQ0MscURBQU8sQ0FBQztBQUFBLFdBQUs7QUFDdkJDLGNBQVEsRUFBRSxPQURhO0FBRXZCQyxZQUFNLEVBQUUsSUFGZTtBQUd2QkMsU0FBRyxFQUFDLENBSG1CO0FBSXZCQyxVQUFJLEVBQUMsQ0FKa0I7QUFLdkJDLFdBQUssRUFBQyxDQUxpQjtBQU12QkMsWUFBTSxFQUFDO0FBTmdCLEtBQUw7QUFBQSxHQUFELEVBT2xCLEVBUGtCLENBQXJCO0FBUUEsTUFBTUMsTUFBTSxHQUFDUCxxREFBTyxDQUFDO0FBQUEsV0FBSztBQUN0QlEsWUFBTSxFQUFDLE1BRGU7QUFFdEJDLGdCQUFVLEVBQUUsT0FGVTtBQUd0QlIsY0FBUSxFQUFFLFVBSFk7QUFJdEJTLGFBQU8sRUFBRSxDQUphO0FBS3RCQyxlQUFTLEVBQUM7QUFMWSxLQUFMO0FBQUEsR0FBRCxFQU1oQixFQU5nQixDQUFwQjtBQVFBLE1BQU1DLFFBQVEsR0FBQ1oscURBQU8sQ0FBQztBQUFBLFdBQUs7QUFDeEJhLFlBQU0sRUFBQyxDQURpQjtBQUV4QkMsY0FBUSxFQUFDLE1BRmU7QUFHeEJDLFdBQUssRUFBRSxNQUhpQjtBQUl4QkMsZ0JBQVUsRUFBRTtBQUpZLEtBQUw7QUFBQSxHQUFELEVBS25CLEVBTG1CLENBQXRCO0FBT0EsTUFBTUMsU0FBUyxHQUFDakIscURBQU8sQ0FBQztBQUFBLFdBQUs7QUFDekJDLGNBQVEsRUFBRSxVQURlO0FBRXpCSSxXQUFLLEVBQUMsQ0FGbUI7QUFHekJGLFNBQUcsRUFBQyxDQUhxQjtBQUl6Qk8sYUFBTyxFQUFFLE1BSmdCO0FBS3pCTSxnQkFBVSxFQUFFLE1BTGE7QUFNekJFLFlBQU0sRUFBQztBQU5rQixLQUFMO0FBQUEsR0FBRCxFQU9wQixFQVBvQixDQUF2QjtBQVNBLE1BQU1DLFlBQVksR0FBQ25CLHFEQUFPLENBQUM7QUFBQSxXQUFLO0FBQzVCUSxZQUFNLEVBQUUsbUJBRG9CO0FBRTVCQyxnQkFBVSxFQUFFO0FBRmdCLEtBQUw7QUFBQSxHQUFELEVBR3ZCLEVBSHVCLENBQTFCO0FBS0EsTUFBTVcsVUFBVSxHQUFDcEIscURBQU8sQ0FBQztBQUFBLFdBQUs7QUFDMUJVLGFBQU8sRUFBQyxNQURrQjtBQUUxQkMsZUFBUyxFQUFFO0FBRmUsS0FBTDtBQUFBLEdBQUQsRUFHckIsRUFIcUIsQ0FBeEI7QUFLQSxNQUFNVSxHQUFHLEdBQUNyQixxREFBTyxDQUFDO0FBQUEsV0FBSztBQUNuQmEsWUFBTSxFQUFFLFFBRFc7QUFFbkJTLGVBQVMsRUFBRTtBQUZRLEtBQUw7QUFBQSxHQUFELEVBR2QsRUFIYyxDQUFqQjs7QUEzQ2lDLGtCQWdESUMsc0RBQVEsQ0FBQyxDQUFELENBaERaO0FBQUEsTUFnRDFCQyxZQWhEMEI7QUFBQSxNQWdEYkMsZUFoRGE7O0FBaURqQyxzQkFDSTtBQUFLLFNBQUssRUFBRTFCLE9BQVo7QUFBQSw0QkFDSTtBQUFRLFdBQUssRUFBRVEsTUFBZjtBQUFBLDhCQUNJO0FBQUksYUFBSyxFQUFFSyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFRLGFBQUssRUFBRUssU0FBZjtBQUEwQixlQUFPLEVBQUVuQixPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0k7QUFBQSw2QkFDSTtBQUFLLGFBQUssRUFBRXFCLFlBQVo7QUFBQSwrQkFDSSxxRUFBQyxrREFBRDtBQUNJLHNCQUFZLEVBQUUsQ0FEbEI7QUFFSSxxQkFBVyxFQUFFLHFCQUFDTyxLQUFEO0FBQUEsbUJBQVNELGVBQWUsQ0FBQ0MsS0FBRCxDQUF4QjtBQUFBLFdBRmpCO0FBR0ksa0JBQVEsTUFIWjtBQUlJLGdCQUFNLEVBQUUsS0FKWjtBQUtJLHNCQUFZLEVBQUUsQ0FMbEI7QUFNSSx3QkFBYyxFQUFFLENBTnBCO0FBQUEsb0JBUUs3QixNQUFNLENBQUM4QixHQUFQLENBQVcsVUFBQ0MsQ0FBRCxFQUFLO0FBQ2I7QUFBQTtBQUFpQixtQkFBSyxFQUFFUixVQUF4QjtBQUFBLHFDQUNJO0FBQUsscUJBQUssRUFBRUMsR0FBWjtBQUFpQixtQkFBRyxFQUFFTyxDQUFDLENBQUNDLEdBQXhCO0FBQTZCLG1CQUFHLEVBQUVELENBQUMsQ0FBQ0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGVBQVVELENBQUMsQ0FBQ0MsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0gsV0FKQTtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBM0VEOztHQUFNakMsVTs7S0FBQUEsVTtBQTZFTkEsVUFBVSxDQUFDa0MsU0FBWCxHQUFxQjtBQUNqQmpDLFFBQU0sRUFBRWtDLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCLEVBQW9DQyxVQUQzQjtBQUVqQnBDLFNBQU8sRUFBRWlDLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGUCxDQUFyQjtBQUtldEMseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTQxMDgzMzZlMDQ4OTE5MWE5ZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTbGljayBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBmaXhDb250cm9sbGVkVmFsdWUgfSBmcm9tICdhbnRkL2xpYi9pbnB1dC9JbnB1dCc7XHJcblxyXG5jb25zdCBJbWFnZXNab29tPSh7aW1hZ2VzLG9uQ2xvc2V9KT0+e1xyXG4gICAgY29uc3Qgb3ZlcmxheT11c2VNZW1vKCgpPT4oe1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIHpJbmRleDogNTAwMCxcclxuICAgICAgICB0b3A6MCxcclxuICAgICAgICBsZWZ0OjAsXHJcbiAgICAgICAgcmlnaHQ6MCxcclxuICAgICAgICBib3R0b206MFxyXG4gICAgfSksW10pO1xyXG4gICAgY29uc3QgSGVhZGVyPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgaGVpZ2h0Oic0NHB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICB9KSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEhlYWRlckgxPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgbWFyZ2luOjAsXHJcbiAgICAgICAgZm9udFNpemU6JzE3cHgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzMzMycsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ0cHgnXHJcbiAgICB9KSxbXSk7XHJcblxyXG4gICAgY29uc3QgSGVhZGVyQnRuPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgcmlnaHQ6MCxcclxuICAgICAgICB0b3A6MCxcclxuICAgICAgICBwYWRkaW5nOiAnMTVweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzE0cHgnLFxyXG4gICAgICAgIGN1cnNvcjoncG9pbnRlcidcclxuICAgIH0pLFtdKTtcclxuXHJcbiAgICBjb25zdCBTbGlja1dyYXBwZXI9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSA0NHB4KScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyM4OTg5ODknXHJcbiAgICB9KSxbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IEltZ1dyYXBwZXI9dXNlTWVtbygoKT0+KHtcclxuICAgICAgICBwYWRkaW5nOiczMnB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9KSxbXSk7XHJcblxyXG4gICAgY29uc3QgSW1nPXVzZU1lbW8oKCk9Pih7XHJcbiAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICBtYXhIZWlnaHQ6ICc3NTBweCdcclxuICAgIH0pLFtdKTtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFNsaWRlLHNldEN1cnJlbnRTbGlkZV09dXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZT17b3ZlcmxheX0+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9e0hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e0hlYWRlckgxfT7sg4HshLjsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17SGVhZGVyQnRufSBvbkNsaWNrPXtvbkNsb3NlfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U2xpY2tXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKT0+c2V0Q3VycmVudFNsaWRlKHNsaWRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Yuc3JjfSBzdHlsZT17SW1nV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17SW1nfSBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSW1hZ2VzWm9vbS5wcm9wVHlwZXM9e1xyXG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyJdLCJzb3VyY2VSb290IjoiIn0=