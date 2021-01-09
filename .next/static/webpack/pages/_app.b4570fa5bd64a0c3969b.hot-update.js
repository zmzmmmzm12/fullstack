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
      {
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });
        var post = state.mainPosts[postIndex];
        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = _objectSpread(_objectSpread({}, post), {}, {
          Comments: Comments
        });
        console.log(123);
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: mainPosts,
          addCommentLoading: false,
          addCommentDone: true
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0Iiwic2hvcnRJZCIsImdlbmVyYXRlIiwiZHVtbXlDb21tZW50IiwicG9zdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ08sSUFBTUEsWUFBWSxHQUFDO0FBQ3RCQyxXQUFTLEVBQUMsQ0FBQztBQUNQQyxNQUFFLEVBQUMsQ0FESTtBQUVQQyxRQUFJLEVBQUM7QUFDREQsUUFBRSxFQUFDLENBREY7QUFFREUsY0FBUSxFQUFDO0FBRlIsS0FGRTtBQU1QQyxXQUFPLEVBQUUsc0JBTkY7QUFPUEMsVUFBTSxFQUFDLENBQUM7QUFDSkMsU0FBRyxFQUFDO0FBREEsS0FBRCxFQUdQO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBSE8sRUFNUDtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQU5PLENBUEE7QUFnQlBDLFlBQVEsRUFBQyxDQUFDO0FBQ05MLFVBQUksRUFBQztBQUNEQyxnQkFBUSxFQUFFO0FBRFQsT0FEQztBQUlOQyxhQUFPLEVBQUU7QUFKSCxLQUFELEVBTVQ7QUFDSUYsVUFBSSxFQUFDO0FBQ0RDLGdCQUFRLEVBQUU7QUFEVCxPQURUO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBTlM7QUFoQkYsR0FBRCxDQURZO0FBOEJ0QkksWUFBVSxFQUFDLEVBOUJXO0FBK0J0QkMsZ0JBQWMsRUFBQyxLQS9CTztBQWdDdEJDLGFBQVcsRUFBQyxLQWhDVTtBQWlDdEJDLGNBQVksRUFBQyxJQWpDUztBQWtDdEJDLG1CQUFpQixFQUFDLEtBbENJO0FBbUN0QkMsZ0JBQWMsRUFBQyxLQW5DTztBQW9DdEJDLGlCQUFlLEVBQUM7QUFwQ00sQ0FBbkI7QUF1Q0EsSUFBTUMsZ0JBQWdCLEdBQUMsa0JBQXZCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUMsa0JBQXZCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUMsa0JBQXZCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUMscUJBQTFCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUMscUJBQTFCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUMscUJBQTFCO0FBRUEsSUFBTUMsT0FBTyxHQUFDLFNBQVJBLE9BQVEsQ0FBQ0MsSUFBRDtBQUFBLFNBQVM7QUFDMUJDLFFBQUksRUFBRVIsZ0JBRG9CO0FBRTFCTyxRQUFJLEVBQUpBO0FBRjBCLEdBQVQ7QUFBQSxDQUFkO0FBS0EsSUFBTUUsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0YsSUFBRDtBQUFBLFNBQVM7QUFDN0JDLFFBQUksRUFBRUwsbUJBRHVCO0FBRTdCSSxRQUFJLEVBQUpBO0FBRjZCLEdBQVQ7QUFBQSxDQUFqQjs7QUFLUCxJQUFNRyxTQUFTLEdBQUMsU0FBVkEsU0FBVSxDQUFDSCxJQUFEO0FBQUEsU0FBUztBQUNyQnJCLE1BQUUsRUFBQ3lCLDhDQUFPLENBQUNDLFFBQVIsRUFEa0I7QUFFckJ2QixXQUFPLEVBQUNrQixJQUZhO0FBR3JCcEIsUUFBSSxFQUFDO0FBQ0RELFFBQUUsRUFBQyxDQURGO0FBRURFLGNBQVEsRUFBQztBQUZSLEtBSGdCO0FBT3JCRSxVQUFNLEVBQUMsRUFQYztBQVFyQkUsWUFBUSxFQUFFO0FBUlcsR0FBVDtBQUFBLENBQWhCOztBQVdBLElBQU1xQixZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDTixJQUFEO0FBQUEsU0FBUztBQUN4QnJCLE1BQUUsRUFBQ3lCLDhDQUFPLENBQUNDLFFBQVIsRUFEcUI7QUFFeEJ2QixXQUFPLEVBQUNrQixJQUZnQjtBQUd4QnBCLFFBQUksRUFBQztBQUNERCxRQUFFLEVBQUMsQ0FERjtBQUVERSxjQUFRLEVBQUM7QUFGUjtBQUhtQixHQUFUO0FBQUEsQ0FBbkI7O0FBU0EsSUFBTTBCLFdBQVcsR0FBQyxTQUFaQSxXQUFZLEdBQTZCO0FBQUEsTUFBNUJDLEtBQTRCLHVFQUF0Qi9CLFlBQXNCO0FBQUEsTUFBVGdDLE1BQVM7O0FBQzNDLFVBQU9BLE1BQU0sQ0FBQ1IsSUFBZDtBQUNJLFNBQUtSLGdCQUFMO0FBQ0ksNkNBQ09lLEtBRFA7QUFFSXJCLHNCQUFjLEVBQUMsSUFGbkI7QUFHSUMsbUJBQVcsRUFBQyxLQUhoQjtBQUlJQyxvQkFBWSxFQUFDO0FBSmpCOztBQU1KLFNBQUtLLGdCQUFMO0FBQ0ksNkNBQ09jLEtBRFA7QUFFSTlCLGlCQUFTLEdBQUd5QixTQUFTLENBQUNNLE1BQU0sQ0FBQ1QsSUFBUixDQUFaLHNHQUE4QlEsS0FBSyxDQUFDOUIsU0FBcEMsRUFGYjtBQUdJUyxzQkFBYyxFQUFDLEtBSG5CO0FBSUlDLG1CQUFXLEVBQUM7QUFKaEI7O0FBTUosU0FBS08sZ0JBQUw7QUFDSSw2Q0FDT2EsS0FEUDtBQUVJckIsc0JBQWMsRUFBQyxLQUZuQjtBQUdJQyxtQkFBVyxFQUFDLEtBSGhCO0FBSUlDLG9CQUFZLEVBQUNvQixNQUFNLENBQUNDO0FBSnhCOztBQU9KLFNBQUtkLG1CQUFMO0FBQ0ksNkNBQ09ZLEtBRFA7QUFFSWxCLHlCQUFpQixFQUFDLElBRnRCO0FBR0lDLHNCQUFjLEVBQUMsS0FIbkI7QUFJSUMsdUJBQWUsRUFBQztBQUpwQjs7QUFNSixTQUFLSyxtQkFBTDtBQUF5QjtBQUNyQixZQUFNYyxTQUFTLEdBQUNILEtBQUssQ0FBQzlCLFNBQU4sQ0FBZ0JrQyxTQUFoQixDQUEwQixVQUFDQyxDQUFEO0FBQUEsaUJBQUtBLENBQUMsQ0FBQ2xDLEVBQUYsS0FBTzhCLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZYyxNQUF4QjtBQUFBLFNBQTFCLENBQWhCO0FBQ0EsWUFBTUMsSUFBSSxHQUFDUCxLQUFLLENBQUM5QixTQUFOLENBQWdCaUMsU0FBaEIsQ0FBWDtBQUNBSSxZQUFJLENBQUM5QixRQUFMLElBQWVxQixZQUFZLENBQUNHLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZbEIsT0FBYixDQUEzQixzR0FBb0RpQyxJQUFJLENBQUM5QixRQUF6RDs7QUFDQSxZQUFNUCxTQUFTLGdHQUFLOEIsS0FBSyxDQUFDOUIsU0FBWCxDQUFmOztBQUNBQSxpQkFBUyxDQUFDaUMsU0FBRCxDQUFULG1DQUF5QkksSUFBekI7QUFBOEI5QixrQkFBUSxFQUFSQTtBQUE5QjtBQUNBK0IsZUFBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBLCtDQUNPVCxLQURQO0FBRUk5QixtQkFBUyxFQUFUQSxTQUZKO0FBR0lZLDJCQUFpQixFQUFDLEtBSHRCO0FBSUlDLHdCQUFjLEVBQUM7QUFKbkI7QUFNSDs7QUFDRCxTQUFLTyxtQkFBTDtBQUNJLDZDQUNPVSxLQURQO0FBRUlsQix5QkFBaUIsRUFBQyxLQUZ0QjtBQUdJQyxzQkFBYyxFQUFDLEtBSG5CO0FBSUlDLHVCQUFlLEVBQUNpQixNQUFNLENBQUNDO0FBSjNCOztBQU9KO0FBQVM7QUFDTCxpQ0FBV0YsS0FBWDtBQUNIO0FBQUE7QUF0REw7QUF3REgsQ0F6REQ7O0FBMkRlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI0NTcwZmE1YmQ2NGEwYzM5NjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuXHJcbi8v67Cx7JeU65Oc7ZWc7YWMIOuNsOydtO2EsCDqtazsobAg66+466asIOuwm+yVhOuGk+q4sFxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIG1haW5Qb3N0czpbe1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKr67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczpbe1xyXG4gICAgICAgICAgICBzcmM6J2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMDMvMjgvMTIvMzUvY2F0LTEyODU2MzRfMTI4MC5wbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTQvMTEvMzAvMTQvMTEvY2F0LTU1MTU1NF85NjBfNzIwLmpwZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wNC8xMy8yMC80OS9jYXQtMzIzMjYyXzEyODAuanBnJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtOuEpOyalCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfqs6DslpHsnbQnXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6bnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVD0nQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTPSdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkU9J0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1Q9J0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUz0nQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFPSdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0PShkYXRhKT0+KHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQ9KGRhdGEpPT4oe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3Q9KGRhdGEpPT4oe1xyXG4gICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDpkYXRhLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZTon7KO866+4J1xyXG4gICAgfSxcclxuICAgIEltYWdlczpbXSxcclxuICAgIENvbW1lbnRzOiBbXVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50PShkYXRhKT0+KHtcclxuICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6ZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IHBvc3RSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOm51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTp0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOm51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleD1zdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3Q9c3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF07XHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHM9W2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzPVsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XT17Li4ucG9zdCxDb21tZW50c307XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDEyMyk7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTp0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGV9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=