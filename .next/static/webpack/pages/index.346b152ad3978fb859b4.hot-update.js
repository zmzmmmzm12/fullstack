webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");



var _jsxFileName = "C:\\Users\\82107\\Desktop\\\uAC2D\uC774\uC5B4_\uC0AC\uC804\uC900\uBE44\\\uAC15\uC758\uB530\uB77C\uD558\uAE30\\\uC6F9\uAC8C\uC784\uC744 \uB9CC\uB4E4\uBA70 \uBC30\uC6B0\uB294 \uB9AC\uC561\uD2B8\\fullStack\\front\\components\\CommentForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    var _state$userReducer$me;

    return (_state$userReducer$me = state.userReducer.me) === null || _state$userReducer$me === void 0 ? void 0 : _state$userReducer$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.postReducer;
  }),
      addCommentDone = _useSelector.addCommentDone,
      addCommentLoading = _useSelector.addCommentLoading;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
      commentText = _useInput2[0],
      onChangeCommentText = _useInput2[1],
      setCommentText = _useInput2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_7__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
    console.log(commentText);
    console.log(post.id);
    console.log(id);
  }, [commentText, id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
      style: {
        position: 'relative',
        margin: 0
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        style: {
          "float": 'right'
        },
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\uC090\uC57D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, _this);
};

_s(CommentForm, "grB1dgAAYOQQBljO+x9f/MnLEVg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJtZSIsInBvc3RSZWR1Y2VyIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwicG9zaXRpb24iLCJtYXJnaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUMsU0FBWkEsV0FBWSxPQUFVO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3hCLE1BQU1DLFFBQVEsR0FBQ0MsK0RBQVcsRUFBMUI7QUFFQSxNQUFNQyxFQUFFLEdBQUNDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLG9DQUFTQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLEVBQTNCLDBEQUFTLHNCQUFzQkosRUFBL0I7QUFBQSxHQUFELENBQXBCOztBQUh3QixxQkFJa0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0csV0FBZjtBQUFBLEdBQUQsQ0FKN0I7QUFBQSxNQUlqQkMsY0FKaUIsZ0JBSWpCQSxjQUppQjtBQUFBLE1BSURDLGlCQUpDLGdCQUlEQSxpQkFKQzs7QUFBQSxrQkFLaUNDLCtEQUFRLENBQUMsRUFBRCxDQUx6QztBQUFBO0FBQUEsTUFLakJDLFdBTGlCO0FBQUEsTUFLSkMsbUJBTEk7QUFBQSxNQUtpQkMsY0FMakI7O0FBT3hCQyx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHTixjQUFILEVBQWtCO0FBQ2RLLG9CQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ0wsY0FBRCxDQUpNLENBQVQ7QUFNQSxNQUFNTyxlQUFlLEdBQUNDLHlEQUFXLENBQUMsWUFBSTtBQUNsQ2hCLFlBQVEsQ0FBQztBQUNMaUIsVUFBSSxFQUFDQyx5RUFEQTtBQUVMQyxVQUFJLEVBQUM7QUFBQ0MsZUFBTyxFQUFDVCxXQUFUO0FBQXFCVSxjQUFNLEVBQUN0QixJQUFJLENBQUNHLEVBQWpDO0FBQW9Db0IsY0FBTSxFQUFDcEI7QUFBM0M7QUFGQSxLQUFELENBQVI7QUFLQXFCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixXQUFaO0FBQ0FZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZekIsSUFBSSxDQUFDRyxFQUFqQjtBQUNBcUIsV0FBTyxDQUFDQyxHQUFSLENBQVl0QixFQUFaO0FBQ0gsR0FUZ0MsRUFTOUIsQ0FBQ1MsV0FBRCxFQUFjVCxFQUFkLENBVDhCLENBQWpDO0FBVUEsc0JBQ0kscUVBQUMseUNBQUQ7QUFBTSxZQUFRLEVBQUVhLGVBQWhCO0FBQUEsMkJBQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBSyxFQUFFO0FBQUNVLGdCQUFRLEVBQUMsVUFBVjtBQUFzQkMsY0FBTSxFQUFFO0FBQTlCLE9BQWxCO0FBQUEsOEJBQ0kscUVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQWdCLGFBQUssRUFBRWYsV0FBdkI7QUFBb0MsZ0JBQVEsRUFBRUMsbUJBQTlDO0FBQW1FLFlBQUksRUFBRTtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSxxRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLGFBQUssRUFBRTtBQUFDLG1CQUFNO0FBQVAsU0FBOUI7QUFBK0MsZ0JBQVEsRUFBQyxRQUF4RDtBQUFpRSxlQUFPLEVBQUVILGlCQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBL0JEOztHQUFNWCxXO1VBQ2FHLHVELEVBRU5FLHVELEVBQ2lDQSx1RCxFQUNlTyx1RDs7O0tBTHZEWixXO0FBaUNOQSxXQUFXLENBQUM2QixTQUFaLEdBQXNCO0FBQ2xCNUIsTUFBSSxFQUFFNkIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFETCxDQUF0QjtBQUllaEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzQ2YjE1MmFkMzk3OGZiODU5YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybSwgSW5wdXQsIEJ1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXInO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm09KHtwb3N0fSk9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoPXVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgaWQ9dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlclJlZHVjZXIubWU/LmlkKTtcclxuICAgIGNvbnN0IHthZGRDb21tZW50RG9uZSwgYWRkQ29tbWVudExvYWRpbmd9PXVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3RSZWR1Y2VyKTtcclxuICAgIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdPXVzZUlucHV0KCcnKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoYWRkQ29tbWVudERvbmUpe1xyXG4gICAgICAgICAgICBzZXRDb21tZW50VGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FkZENvbW1lbnREb25lXSlcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQ9dXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTp7Y29udGVudDpjb21tZW50VGV4dCxwb3N0SWQ6cG9zdC5pZCx1c2VySWQ6aWR9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coY29tbWVudFRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QuaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZScsIG1hcmdpbjogMH19PlxyXG4gICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IHJvd3M9ezR9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OidyaWdodCd9fSBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2FkZENvbW1lbnRMb2FkaW5nfSA+7IKQ7JW9PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzPXtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9