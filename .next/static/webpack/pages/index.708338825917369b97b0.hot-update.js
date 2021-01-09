webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");


var _jsxFileName = "C:\\Users\\82107\\Desktop\\\uAC2D\uC774\uC5B4_\uC0AC\uC804\uC900\uBE44\\\uAC15\uC758\uB530\uB77C\uD558\uAE30\\\uC6F9\uAC8C\uC784\uC744 \uB9CC\uB4E4\uBA70 \uBC30\uC6B0\uB294 \uB9AC\uC561\uD2B8\\fullStack\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    function onScroll() {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    }; //add해주면 항상 리턴해서 remove필요
  }, []);
  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.userReducer.isLoggedIn;
  }); //위아래 둘다 최적화부분만 빼면 똑같은 소스임

  var mainPosts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.postReducer.mainPosts;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 26
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 36
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, _this);
};

_s(Home, "Aw6F9k1tT5tnRctTMa5MKpAFGD4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0xvZ2dlZEluIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwibWFpblBvc3RzIiwicG9zdFJlZHVjZXIiLCJtYXAiLCJwb3N0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRSxTQUFOQSxJQUFNLEdBQUk7QUFBQTs7QUFDWixNQUFNQyxRQUFRLEdBQUNDLCtEQUFXLEVBQTFCO0FBQ0FDLHlEQUFTLENBQUMsWUFBSTtBQUNWRixZQUFRLENBQUM7QUFDTEcsVUFBSSxFQUFFQyx3RUFBa0JBO0FBRG5CLEtBQUQsQ0FBUjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFPQUYseURBQVMsQ0FBQyxZQUFJO0FBQ1YsYUFBU0csUUFBVCxHQUFtQjtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxPQUFuQixFQUEyQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUFwRCxFQUFrRUYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUEzRjtBQUNIOztBQUNETCxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDVCxRQUFqQztBQUNBLFdBQU8sWUFBSTtBQUNQRyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQW9DVixRQUFwQztBQUNILEtBRkQsQ0FMVSxDQU9SO0FBQ0wsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLE1BQU1XLFVBQVUsR0FBQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCSCxVQUEzQjtBQUFBLEdBQUQsQ0FBNUIsQ0FuQlksQ0FtQnlEOztBQUNyRSxNQUFNSSxTQUFTLEdBQUNILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQsU0FBM0I7QUFBQSxHQUFELENBQTNCO0FBRUEsc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSxlQUNLSixVQUFVLGlCQUFFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEakIsRUFFS0ksU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0MsSUFBRDtBQUFBLDBCQUFRLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRUE7QUFBOUIsU0FBZUEsSUFBSSxDQUFDQyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFBQSxLQUFkLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQTVCRDs7R0FBTXpCLEk7VUFDYUUsdUQsRUFrQkVnQix1RCxFQUNEQSx1RDs7O0tBcEJkbEIsSTtBQThCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzA4MzM4ODI1OTE3MzY5Yjk3YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBIb21lPSAoKT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNUXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFksZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsb25TY3JvbGwpO1xyXG4gICAgICAgIH0gLy9hZGTtlbTso7zrqbQg7ZWt7IOBIOumrO2EtO2VtOyEnCByZW1vdmXtlYTsmpRcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXNMb2dnZWRJbj11c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyUmVkdWNlci5pc0xvZ2dlZEluKTsgLy/snITslYTrnpgg65GY64ukIOy1nOygge2ZlOu2gOu2hOunjCDrubzrqbQg65iR6rCZ7J2AIOyGjOyKpOyehFxyXG4gICAgY29uc3QgbWFpblBvc3RzPXVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3RSZWR1Y2VyLm1haW5Qb3N0cyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZEluJiY8UG9zdEZvcm0vPn1cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpPT48UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX1cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9