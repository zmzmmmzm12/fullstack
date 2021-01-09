webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/postReducer.js":
/*!*********************************!*\
  !*** ./reducers/postReducer.js ***!
  \*********************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 //백엔드한테 데이터 구조 미리 받아놓기

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '주미'
    },
    content: '첫번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png'
    }, {
      src: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg'
    }, {
      src: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 개정판이네요'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '고양이'
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '주미'
    },
    Images: [],
    Comments: []
  };
};

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostDone: false,
        addPostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      var postIndex = state.mainPosts.findIndex(function (v) {
        return v.id === action.data.postId;
      });
      var post = state.mainPosts[postIndex];
      var Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));
      post.Comments = post.Comments.slice();

      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

      mainPosts[postIndex] = _objectSpread(_objectSpread({}, post), {}, {
        Comments: Comments
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: mainPosts,
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: false,
        addCommentError: action.error
      });

    default:
      {
        return _objectSpread({}, state);
      }
      ;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (postReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwicG9zdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJkdW1teUNvbW1lbnQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUNPLElBQU1BLFlBQVksR0FBQztBQUN0QkMsV0FBUyxFQUFDLENBQUM7QUFDUEMsTUFBRSxFQUFDLENBREk7QUFFUEMsUUFBSSxFQUFDO0FBQ0RELFFBQUUsRUFBQyxDQURGO0FBRURFLGNBQVEsRUFBQztBQUZSLEtBRkU7QUFNUEMsV0FBTyxFQUFFLHNCQU5GO0FBT1BDLFVBQU0sRUFBQyxDQUFDO0FBQ0pDLFNBQUcsRUFBQztBQURBLEtBQUQsRUFHUDtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQUhPLEVBTVA7QUFDSUEsU0FBRyxFQUFFO0FBRFQsS0FOTyxDQVBBO0FBZ0JQQyxZQUFRLEVBQUMsQ0FBQztBQUNOTCxVQUFJLEVBQUM7QUFDREMsZ0JBQVEsRUFBRTtBQURULE9BREM7QUFJTkMsYUFBTyxFQUFFO0FBSkgsS0FBRCxFQU1UO0FBQ0lGLFVBQUksRUFBQztBQUNEQyxnQkFBUSxFQUFFO0FBRFQsT0FEVDtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQU5TO0FBaEJGLEdBQUQsQ0FEWTtBQThCdEJJLFlBQVUsRUFBQyxFQTlCVztBQStCdEJDLGdCQUFjLEVBQUMsS0EvQk87QUFnQ3RCQyxhQUFXLEVBQUMsS0FoQ1U7QUFpQ3RCQyxjQUFZLEVBQUMsSUFqQ1M7QUFrQ3RCQyxtQkFBaUIsRUFBQyxLQWxDSTtBQW1DdEJDLGdCQUFjLEVBQUMsS0FuQ087QUFvQ3RCQyxpQkFBZSxFQUFDO0FBcENNLENBQW5CO0FBdUNBLElBQU1DLGdCQUFnQixHQUFDLGtCQUF2QjtBQUNBLElBQU1DLGdCQUFnQixHQUFDLGtCQUF2QjtBQUNBLElBQU1DLGdCQUFnQixHQUFDLGtCQUF2QjtBQUVBLElBQU1DLG1CQUFtQixHQUFDLHFCQUExQjtBQUNBLElBQU1DLG1CQUFtQixHQUFDLHFCQUExQjtBQUNBLElBQU1DLG1CQUFtQixHQUFDLHFCQUExQjtBQUVBLElBQU1DLE9BQU8sR0FBQyxTQUFSQSxPQUFRLENBQUNDLElBQUQ7QUFBQSxTQUFTO0FBQzFCQyxRQUFJLEVBQUVSLGdCQURvQjtBQUUxQk8sUUFBSSxFQUFKQTtBQUYwQixHQUFUO0FBQUEsQ0FBZDtBQUtBLElBQU1FLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNGLElBQUQ7QUFBQSxTQUFTO0FBQzdCQyxRQUFJLEVBQUVMLG1CQUR1QjtBQUU3QkksUUFBSSxFQUFKQTtBQUY2QixHQUFUO0FBQUEsQ0FBakI7O0FBS1AsSUFBTUcsU0FBUyxHQUFDLFNBQVZBLFNBQVUsQ0FBQ0gsSUFBRDtBQUFBLFNBQVM7QUFDckJyQixNQUFFLEVBQUN5Qiw4Q0FBTyxDQUFDQyxRQUFSLEVBRGtCO0FBRXJCdkIsV0FBTyxFQUFDa0IsSUFGYTtBQUdyQnBCLFFBQUksRUFBQztBQUNERCxRQUFFLEVBQUMsQ0FERjtBQUVERSxjQUFRLEVBQUM7QUFGUixLQUhnQjtBQU9yQkUsVUFBTSxFQUFDLEVBUGM7QUFRckJFLFlBQVEsRUFBRTtBQVJXLEdBQVQ7QUFBQSxDQUFoQjs7QUFXQSxJQUFNcUIsV0FBVyxHQUFDLFNBQVpBLFdBQVksR0FBNkI7QUFBQSxNQUE1QkMsS0FBNEIsdUVBQXRCOUIsWUFBc0I7QUFBQSxNQUFUK0IsTUFBUzs7QUFDM0MsVUFBT0EsTUFBTSxDQUFDUCxJQUFkO0FBQ0ksU0FBS1IsZ0JBQUw7QUFDSSw2Q0FDT2MsS0FEUDtBQUVJcEIsc0JBQWMsRUFBQyxJQUZuQjtBQUdJQyxtQkFBVyxFQUFDLEtBSGhCO0FBSUlDLG9CQUFZLEVBQUM7QUFKakI7O0FBTUosU0FBS0ssZ0JBQUw7QUFDSSw2Q0FDT2EsS0FEUDtBQUVJN0IsaUJBQVMsR0FBR3lCLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDUixJQUFSLENBQVosc0dBQThCTyxLQUFLLENBQUM3QixTQUFwQyxFQUZiO0FBR0lTLHNCQUFjLEVBQUMsS0FIbkI7QUFJSUMsbUJBQVcsRUFBQztBQUpoQjs7QUFNSixTQUFLTyxnQkFBTDtBQUNJLDZDQUNPWSxLQURQO0FBRUlwQixzQkFBYyxFQUFDLEtBRm5CO0FBR0lDLG1CQUFXLEVBQUMsS0FIaEI7QUFJSUMsb0JBQVksRUFBQ21CLE1BQU0sQ0FBQ0M7QUFKeEI7O0FBT0osU0FBS2IsbUJBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVJakIseUJBQWlCLEVBQUMsSUFGdEI7QUFHSUMsc0JBQWMsRUFBQyxLQUhuQjtBQUlJQyx1QkFBZSxFQUFDO0FBSnBCOztBQU1KLFNBQUtLLG1CQUFMO0FBQ0ksVUFBTWEsU0FBUyxHQUFDSCxLQUFLLENBQUM3QixTQUFOLENBQWdCaUMsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGVBQUtBLENBQUMsQ0FBQ2pDLEVBQUYsS0FBTzZCLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZYSxNQUF4QjtBQUFBLE9BQTFCLENBQWhCO0FBQ0EsVUFBTUMsSUFBSSxHQUFDUCxLQUFLLENBQUM3QixTQUFOLENBQWdCZ0MsU0FBaEIsQ0FBWDtBQUNBLFVBQU16QixRQUFRLElBQUU4QixZQUFZLENBQUNQLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZbEIsT0FBYixDQUFkLHNHQUF1Q2dDLElBQUksQ0FBQzdCLFFBQTVDLEVBQWQ7QUFDQTZCLFVBQUksQ0FBQzdCLFFBQUwsR0FBYzZCLElBQUksQ0FBQzdCLFFBQUwsQ0FBYytCLEtBQWQsRUFBZDs7QUFDQSxVQUFNdEMsU0FBUyxnR0FBSzZCLEtBQUssQ0FBQzdCLFNBQVgsQ0FBZjs7QUFDQUEsZUFBUyxDQUFDZ0MsU0FBRCxDQUFULG1DQUF5QkksSUFBekI7QUFBOEI3QixnQkFBUSxFQUFSQTtBQUE5QjtBQUNBLDZDQUNPc0IsS0FEUDtBQUVJN0IsaUJBQVMsRUFBVEEsU0FGSjtBQUdJWSx5QkFBaUIsRUFBQyxLQUh0QjtBQUlJQyxzQkFBYyxFQUFDO0FBSm5COztBQU1KLFNBQUtPLG1CQUFMO0FBQ0ksNkNBQ09TLEtBRFA7QUFFSWpCLHlCQUFpQixFQUFDLEtBRnRCO0FBR0lDLHNCQUFjLEVBQUMsS0FIbkI7QUFJSUMsdUJBQWUsRUFBQ2dCLE1BQU0sQ0FBQ0M7QUFKM0I7O0FBT0o7QUFBUztBQUNMLGlDQUFXRixLQUFYO0FBQ0g7QUFBQTtBQXJETDtBQXVESCxDQXhERDs7QUEwRGVELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmNlNWFkMzFhMWE3MjhkNjk4N2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG5cclxuLy/rsLHsl5Trk5ztlZzthYwg642w7J207YSwIOq1rOyhsCDrr7jrpqwg67Cb7JWE64aT6riwXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbWFpblBvc3RzOlt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzOlt7XHJcbiAgICAgICAgICAgIHNyYzonaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMy8yOC8xMi8zNS9jYXQtMTI4NTYzNF8xMjgwLnBuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8xMS8zMC8xNC8xMS9jYXQtNTUxNTU0Xzk2MF83MjAuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE0LzA0LzEzLzIwLzQ5L2NhdC0zMjMyNjJfMTI4MC5qcGcnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6W3tcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J2064Sk7JqUJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+qzoOyWkeydtCdcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjpudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUPSdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1M9J0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRT0nQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVD0nQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTPSdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkU9J0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3Q9KGRhdGEpPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdD0oZGF0YSk9Pih7XHJcbiAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOltdLFxyXG4gICAgQ29tbWVudHM6IFtdXHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjpudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6dHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjpudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleD1zdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3Q9c3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IENvbW1lbnRzPVtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHM9cG9zdC5Db21tZW50cy5zbGljZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluUG9zdHM9Wy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdPXsuLi5wb3N0LENvbW1lbnRzfTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOnRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0UmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9