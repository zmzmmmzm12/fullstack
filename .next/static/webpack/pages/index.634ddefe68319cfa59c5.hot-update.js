webpackHotUpdate_N_E("pages/index",{

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

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '주미'
    }
  };
};

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(action.data);

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

      var post = _objectSpread({}, state.mainPosts[postIndex]);

      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

      mainPosts[postIndex] = post;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwiZHVtbXlDb21tZW50IiwicG9zdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ08sSUFBTUEsWUFBWSxHQUFDO0FBQ3RCQyxXQUFTLEVBQUMsQ0FBQztBQUNQQyxNQUFFLEVBQUMsQ0FESTtBQUVQQyxRQUFJLEVBQUM7QUFDREQsUUFBRSxFQUFDLENBREY7QUFFREUsY0FBUSxFQUFDO0FBRlIsS0FGRTtBQU1QQyxXQUFPLEVBQUUsc0JBTkY7QUFPUEMsVUFBTSxFQUFDLENBQUM7QUFDSkMsU0FBRyxFQUFDO0FBREEsS0FBRCxFQUdQO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBSE8sRUFNUDtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQU5PLENB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TDtBQUNJLDZDQUNPWSxLQURQO0FBRUlsQix5QkFBaUIsRUFBQyxJQUZ0QjtBQUdJQyxzQkFBYyxFQUFDLEtBSG5CO0FBSUlDLHVCQUFlLEVBQUM7QUFKcEI7O0FBTUosU0FBS0ssbUJBQUw7QUFDSSxVQUFNZ0IsU0FBUyxHQUFDTCxLQUFLLENBQUM5QixTQUFOLENBQWdCb0MsU0FBaEIsQ0FBMEIsVUFBQ0MsQ0FBRDtBQUFBLGVBQUtBLENBQUMsQ0FBQ3BDLEVBQUYsS0FBTzhCLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZZ0IsTUFBeEI7QUFBQSxPQUExQixDQUFoQjs7QUFDQSxVQUFNQyxJQUFJLHFCQUFLVCxLQUFLLENBQUM5QixTQUFOLENBQWdCbUMsU0FBaEIsQ0FBTCxDQUFWOztBQUNBSSxVQUFJLENBQUNoQyxRQUFMLElBQWVxQixZQUFZLENBQUNHLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZbEIsT0FBYixDQUEzQixzR0FBb0RtQyxJQUFJLENBQUNoQyxRQUF6RDs7QUFDQSxVQUFNUCxTQUFTLGdHQUFLOEIsS0FBSyxDQUFDOUIsU0FBWCxDQUFmOztBQUNBQSxlQUFTLENBQUNtQyxTQUFELENBQVQsR0FBcUJJLElBQXJCO0FBQ0EsNkNBQ09ULEtBRFA7QUFFSTlCLGlCQUFTLEVBQVRBLFNBRko7QUFHSVkseUJBQWlCLEVBQUMsS0FIdEI7QUFJSUMsc0JBQWMsRUFBQztBQUpuQjs7QUFPSixTQUFLTyxtQkFBTDtBQUNJLDZDQUNPVSxLQURQO0FBRUlsQix5QkFBaUIsRUFBQyxLQUZ0QjtBQUdJQyxzQkFBYyxFQUFDLEtBSG5CO0FBSUlDLHVCQUFlLEVBQUNpQixNQUFNLENBQUNHO0FBSjNCOztBQU9KO0FBQVM7QUFDTCxpQ0FBV0osS0FBWDtBQUNIO0FBQUE7QUFyREw7QUF1REgsQ0F6REQ7O0FBMkRlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzRkZGVmZTY4MzE5Y2ZhNTljNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcblxyXG4vL+uwseyXlOuTnO2VnO2FjCDrjbDsnbTthLAg6rWs7KGwIOuvuOumrCDrsJvslYTrhpPquLBcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBtYWluUG9zdHM6W3tcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTon7KO866+4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogJ+yyq+uyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6W3tcclxuICAgICAgICAgICAgc3JjOidodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAzLzI4LzEyLzM1L2NhdC0xMjg1NjM0XzEyODAucG5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE0LzExLzMwLzE0LzExL2NhdC01NTE1NTRfOTYwXzcyMC5qcGcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTQvMDQvMTMvMjAvNDkvY2F0LTMyMzI2Ml8xMjgwLmpwZydcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbTrhKTsmpQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdoZXJvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6rOg7JaR7J20J1xyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOm51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOm51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1Q9J0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUz0nQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFPSdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUPSdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1M9J0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRT0nQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50PShkYXRhKT0+KHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0PShkYXRhKT0+KHtcclxuICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6ZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6W10sXHJcbiAgICBDb21tZW50czogW11cclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjpudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6dHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjpudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleD1zdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3Q9ey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cz1bZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluUG9zdHM9Wy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdPXBvc3Q7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTp0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==