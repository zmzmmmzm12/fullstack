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
  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.userReducer.isLoggedIn;
  }); //위아래 둘다 최적화부분만 빼면 똑같은 소스임

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.postReducer;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePost = _useSelector.hasMorePost,
      loadPostsLoading = _useSelector.loadPostsLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    function onScroll() {
      //console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight)
      if (Math.round(window.scrollY) + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    }; //add해주면 항상 리턴해서 remove필요
  }, [hasMorePost, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 26
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 36
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(Home, "ZILIevRIpwpnzuTH3eofWvOaBXE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpc0xvZ2dlZEluIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwicG9zdFJlZHVjZXIiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdCIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJNYXRoIiwicm91bmQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsInBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFFLFNBQU5BLElBQU0sR0FBSTtBQUFBOztBQUNaLE1BQU1DLFFBQVEsR0FBQ0MsK0RBQVcsRUFBMUI7QUFDQSxNQUFNQyxVQUFVLEdBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkgsVUFBM0I7QUFBQSxHQUFELENBQTVCLENBRlksQ0FFeUQ7O0FBRnpELHFCQUdxQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDRSxXQUFmO0FBQUEsR0FBRCxDQUhoRDtBQUFBLE1BR0xDLFNBSEssZ0JBR0xBLFNBSEs7QUFBQSxNQUdNQyxXQUhOLGdCQUdNQSxXQUhOO0FBQUEsTUFHbUJDLGdCQUhuQixnQkFHbUJBLGdCQUhuQjs7QUFLWkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZWLFlBQVEsQ0FBQztBQUNMVyxVQUFJLEVBQUVDLHdFQUFrQkE7QUFEbkIsS0FBRCxDQUFSO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU9BRix5REFBUyxDQUFDLFlBQUk7QUFDVixhQUFTRyxRQUFULEdBQW1CO0FBQ2Y7QUFDQSxVQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBTSxDQUFDQyxPQUFsQixJQUEyQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUFwRCxHQUFtRUYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUFzQyxHQUE1RyxFQUFnSDtBQUM1RyxZQUFHYixXQUFXLElBQUUsQ0FBQ0MsZ0JBQWpCLEVBQWtDO0FBQzlCVCxrQkFBUSxDQUFDO0FBQ0xXLGdCQUFJLEVBQUVDLHdFQUFrQkE7QUFEbkIsV0FBRCxDQUFSO0FBR0g7QUFDSjtBQUNKOztBQUNESSxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDVCxRQUFqQztBQUNBLFdBQU8sWUFBSTtBQUNQRyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQW9DVixRQUFwQztBQUNILEtBRkQsQ0FaVSxDQWNSO0FBQ0wsR0FmUSxFQWVOLENBQUNMLFdBQUQsRUFBY0MsZ0JBQWQsQ0FmTSxDQUFUO0FBa0JBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsZUFDS1AsVUFBVSxpQkFBRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGpCLEVBRUtLLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FBYyxVQUFDQyxJQUFEO0FBQUEsMEJBQVEscUVBQUMsNERBQUQ7QUFBd0IsWUFBSSxFQUFFQTtBQUE5QixTQUFlQSxJQUFJLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUjtBQUFBLEtBQWQsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBcENEOztHQUFNM0IsSTtVQUNhRSx1RCxFQUNFRSx1RCxFQUNnQ0EsdUQ7OztLQUgvQ0osSTtBQXNDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjI4YTAyZmY0NjIxYjJkYWE0YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBIb21lPSAoKT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkSW49dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlclJlZHVjZXIuaXNMb2dnZWRJbik7IC8v7JyE7JWE656YIOuRmOuLpCDstZzsoIHtmZTrtoDrtoTrp4wg67m866m0IOuYkeqwmeydgCDshozsiqTsnoRcclxuICAgIGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdHNMb2FkaW5nfT11c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0UmVkdWNlcik7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNUXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpXHJcbiAgICAgICAgICAgIGlmKE1hdGgucm91bmQod2luZG93LnNjcm9sbFkpK2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LTMwMCl7XHJcbiAgICAgICAgICAgICAgICBpZihoYXNNb3JlUG9zdCYmIWxvYWRQb3N0c0xvYWRpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNUXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLG9uU2Nyb2xsKTtcclxuICAgICAgICB9IC8vYWRk7ZW07KO866m0IO2VreyDgSDrpqzthLTtlbTshJwgcmVtb3Zl7ZWE7JqUXHJcbiAgICB9LCBbaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7aXNMb2dnZWRJbiYmPFBvc3RGb3JtLz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KT0+PFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==