webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");



var _jsxFileName = "C:\\Users\\82107\\Desktop\\\uAC2D\uC774\uC5B4_\uC0AC\uC804\uC900\uBE44\\\uAC15\uC758\uB530\uB77C\uD558\uAE30\\\uC6F9\uAC8C\uC784\uC744 \uB9CC\uB4E4\uBA70 \uBC30\uC6B0\uB294 \uB9AC\uC561\uD2B8\\fullStack\\front\\components\\FollowButton.js",
    _this = undefined,
    _s = $RefreshSig$();







var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.userReducer;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  console.log(isFollowing);
  var onClickBtn = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_5__["FOLLOW_REQUEST"]
      });
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      loading: followLoading || unfollowLoading,
      onClick: onClickBtn,
      children: isFollowing ? '언팔로우' : '팔로우'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(FollowButton, "1u+yAZHsRUVJGcS5AxOHw5AuyWg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJtZSIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsImlkIiwiVXNlciIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrQnRuIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJGT0xMT1dfUkVRVUVTVCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsWUFBWSxHQUFDLFNBQWJBLFlBQWEsT0FBVTtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN6QixNQUFNQyxRQUFRLEdBQUNDLCtEQUFXLEVBQTFCOztBQUR5QixxQkFFa0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsV0FBZjtBQUFBLEdBQUQsQ0FGN0I7QUFBQSxNQUVsQkMsRUFGa0IsZ0JBRWxCQSxFQUZrQjtBQUFBLE1BRWRDLGFBRmMsZ0JBRWRBLGFBRmM7QUFBQSxNQUVDQyxlQUZELGdCQUVDQSxlQUZEOztBQUd6QixNQUFNQyxXQUFXLEdBQUNILEVBQUQsYUFBQ0EsRUFBRCx1QkFBQ0EsRUFBRSxDQUFFSSxVQUFKLENBQWVDLElBQWYsQ0FBb0IsVUFBQ0MsQ0FBRDtBQUFBLFdBQUtBLENBQUMsQ0FBQ0MsRUFBRixLQUFPYixJQUFJLENBQUNjLElBQUwsQ0FBVUQsRUFBdEI7QUFBQSxHQUFwQixDQUFsQjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNBLE1BQU1RLFVBQVUsR0FBQ0MseURBQVcsQ0FBQyxZQUFJO0FBQzdCLFFBQUdULFdBQUgsRUFBZTtBQUNYUixjQUFRLENBQUM7QUFDTGtCLFlBQUksRUFBQ0Msc0VBREE7QUFFTEMsWUFBSSxFQUFDckIsSUFBSSxDQUFDYyxJQUFMLENBQVVEO0FBRlYsT0FBRCxDQUFSO0FBSUgsS0FMRCxNQU1JO0FBQ0FaLGNBQVEsQ0FBQztBQUNMa0IsWUFBSSxFQUFDRyxvRUFBY0E7QUFEZCxPQUFELENBQVI7QUFHSDtBQUNKLEdBWjJCLEVBWTFCLENBQUNiLFdBQUQsQ0FaMEIsQ0FBNUI7QUFhQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFRixhQUFhLElBQUlDLGVBQWxDO0FBQW1ELGFBQU8sRUFBRVMsVUFBNUQ7QUFBQSxnQkFDS1IsV0FBVyxHQUFHLE1BQUgsR0FBWTtBQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFPSCxDQXpCRDs7R0FBTVYsWTtVQUNhRyx1RCxFQUM0QkMsdUQ7OztLQUZ6Q0osWTtBQTJCTkEsWUFBWSxDQUFDd0IsU0FBYixHQUF1QjtBQUNuQnZCLE1BQUksRUFBRXdCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREosQ0FBdkI7QUFJZTNCLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2MGI3MjEyNTk4ZTdlYjFkYzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVORk9MTE9XX1JFUVVFU1QsRk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyUmVkdWNlcic7XHJcblxyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uPSh7cG9zdH0pPT57XHJcbiAgICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmd9PXVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXJSZWR1Y2VyKTtcclxuICAgIGNvbnN0IGlzRm9sbG93aW5nPW1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpPT52LmlkPT09cG9zdC5Vc2VyLmlkKVxyXG4gICAgY29uc29sZS5sb2coaXNGb2xsb3dpbmcpO1xyXG4gICAgY29uc3Qgb25DbGlja0J0bj11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGlmKGlzRm9sbG93aW5nKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTpwb3N0LlVzZXIuaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTpGT0xMT1dfUkVRVUVTVFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lzRm9sbG93aW5nXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnRufT5cclxuICAgICAgICAgICAgICAgIHtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzPXtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9