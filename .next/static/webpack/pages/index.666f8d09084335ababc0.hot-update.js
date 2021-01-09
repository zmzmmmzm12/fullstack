webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");



var _jsxFileName = "C:\\Users\\82107\\Desktop\\\uAC2D\uC774\uC5B4_\uC0AC\uC804\uC900\uBE44\\\uAC15\uC758\uB530\uB77C\uD558\uAE30\\\uC6F9\uAC8C\uC784\uC744 \uB9CC\uB4E4\uBA70 \uBC30\uC6B0\uB294 \uB9AC\uC561\uD2B8\\fullStack\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();











var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.userReducer;
  }),
      me = _useSelector.me;

  var id = me === null || me === void 0 ? void 0 : me.id;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    dispatch({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_9__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 42
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 27
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 27
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              type: "danger",
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 37
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 31
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 29
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 34
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 41
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "exJ45wXCJVOpU9/z8fmoUI0xScA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = PostCard;
PostCard.proptypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJtZSIsImlkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25SZW1vdmVQb3N0IiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiY29tbWVudEZvcm1PcGVuZWQiLCJtYXJnaW5Cb3R0b20iLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcHR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJ1c2VyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFDLFNBQVRBLFFBQVMsT0FBVTtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxxQkFDVkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxXQUFmO0FBQUEsR0FBRCxDQUREO0FBQUEsTUFDZEMsRUFEYyxnQkFDZEEsRUFEYzs7QUFFckIsTUFBTUMsRUFBRSxHQUFDRCxFQUFELGFBQUNBLEVBQUQsdUJBQUNBLEVBQUUsQ0FBRUMsRUFBYjtBQUNBLE1BQU1DLFFBQVEsR0FBQ0MsK0RBQVcsRUFBMUI7O0FBSHFCLGtCQUlFQyxz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LENBQUNLLE1BSEY7QUFJakJDLGFBQVMsRUFBRU4saURBQVMsQ0FBQ0ksTUFKSjtBQUtqQlIsWUFBUSxFQUFDSSxpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDSSxNQUE1QixDQUxRO0FBTWpCWixVQUFNLEVBQUNRLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNJLE1BQTVCO0FBTlUsR0FBaEIsRUFPRkk7QUFSWSxDQUFuQjtBQVlldkMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjY2ZjhkMDkwODQzMzVhYmFiYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBBdmF0YXIsIExpc3QsIENvbW1lbnR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1xyXG4gICAgUmV0d2VldE91dGxpbmVkLEVsbGlwc2lzT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgSGVhcnRUd29Ub25lXHJcbiB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXInO1xyXG5cclxuY29uc3QgUG9zdENhcmQ9KHtwb3N0fSk9PntcclxuICAgIGNvbnN0IHttZX09dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlclJlZHVjZXIpO1xyXG4gICAgY29uc3QgaWQ9bWU/LmlkO1xyXG4gICAgY29uc3QgZGlzcGF0Y2g9dXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtsaWtlZCxzZXRMaWtlZF09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlPXVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0TGlrZWQoKHByZXYpPT4hcHJldik7XHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50PXVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpPT4hcHJldik7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdD11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjIwfX0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9JyNlYjJmOTYnIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQmJnBvc3QuVXNlci5pZD09PWlkID8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9Lz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblBvc3RDYXJkLnByb3B0eXBlcz17XHJcbiAgICBwb3N0OlByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgdXNlcjpQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIENvbW1lbnRzOlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIEltYWdlczpQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=