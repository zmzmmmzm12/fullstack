webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/postReducer.js":
/*!*********************************!*\
  !*** ./reducers/postReducer.js ***!
  \*********************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);



 //백엔드한테 데이터 구조 미리 받아놓기

var initialState = {
  mainPosts: [//{
    // id:1,
    // User:{
    //     id:1,
    //     nickname:'주미'
    // },
    // content: '첫번째 게시글 #해시태그 #익스프레스',
    // Images:[{
    //     id:shortId.generate(),
    //     src:'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png'
    // },
    // {
    //     id:shortId.generate(),
    //     src: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg'
    // },
    // {
    //     id:shortId.generate(),
    //     src: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'
    // }],
    // Comments:[{
    //     id:shortId.generate(),
    //     User:{
    //         id:shortId.generate(),
    //         nickname: 'nero'
    //     },
    //     content: '우와 개정판이네요'
    // },
    // {
    //     id:shortId.generate(),
    //     User:{
    //         id:shortId.generate(),
    //         nickname: 'hero'
    //     },
    //     content: '고양이'
    // }]}
  ],
  imagePaths: [],
  hasMorePost: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null
};
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.sentence()
      }]
    };
  });
};
initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
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
    id: data.id,
    content: data.content,
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
    id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePost = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        }), draft.removePostLoading = false, draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false, draft.removePostDone = false, draft.removePostError = action.error;
        break;

      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsImNvbmNhdCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwicG9zdCIsImZpbmQiLCJ2IiwicG9zdElkIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNPLElBQU1BLFlBQVksR0FBQztBQUN0QkMsV0FBUyxFQUFDLENBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DTSxHQURZO0FBc0N0QkMsWUFBVSxFQUFDLEVBdENXO0FBdUN0QkMsYUFBVyxFQUFDLElBdkNVO0FBd0N0QkMsa0JBQWdCLEVBQUMsS0F4Q0s7QUF5Q3RCQyxlQUFhLEVBQUMsS0F6Q1E7QUEwQ3RCQyxnQkFBYyxFQUFDLElBMUNPO0FBMkN0QkMsZ0JBQWMsRUFBQyxLQTNDTztBQTRDdEJDLGFBQVcsRUFBQyxLQTVDVTtBQTZDdEJDLGNBQVksRUFBQyxJQTdDUztBQThDdEJDLG1CQUFpQixFQUFDLEtBOUNJO0FBK0N0QkMsZ0JBQWMsRUFBQyxLQS9DTztBQWdEdEJDLGlCQUFlLEVBQUMsSUFoRE07QUFpRHRCQyxtQkFBaUIsRUFBQyxLQWpESTtBQWtEdEJDLGdCQUFjLEVBQUMsS0FsRE87QUFtRHRCQyxpQkFBZSxFQUFDO0FBbkRNLENBQW5CO0FBc0RBLElBQU1DLGlCQUFpQixHQUFDLFNBQWxCQSxpQkFBa0IsQ0FBQ0MsTUFBRDtBQUFBLFNBQVdDLEtBQUssQ0FBQ0QsTUFBRCxDQUFMLENBQWNFLElBQWQs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QyxtQkFBTDtBQUNJWSxhQUFLLENBQUMzRCxTQUFOLEdBQWlCMkQsS0FBSyxDQUFDM0QsU0FBTixDQUFnQm1FLE1BQWhCLENBQXVCLFVBQUNGLENBQUQ7QUFBQSxpQkFBS0EsQ0FBQyxDQUFDN0MsRUFBRixLQUFPcUMsTUFBTSxDQUFDUCxJQUFuQjtBQUFBLFNBQXZCLENBQWpCLEVBQ0FTLEtBQUssQ0FBQy9DLGlCQUFOLEdBQXdCLEtBRHhCLEVBRUErQyxLQUFLLENBQUM5QyxjQUFOLEdBQXFCLElBRnJCO0FBR0E7O0FBRUosV0FBS21DLG1CQUFMO0FBQ0lXLGFBQUssQ0FBQy9DLGlCQUFOLEdBQXdCLEtBQXhCLEVBQ0ErQyxLQUFLLENBQUM5QyxjQUFOLEdBQXFCLEtBRHJCLEVBRUE4QyxLQUFLLENBQUM3QyxlQUFOLEdBQXNCMkMsTUFBTSxDQUFDSSxLQUY3QjtBQUdBOztBQUVKO0FBQVM7QUEzRWI7QUE2RVAsR0E5RXNELENBQXJDO0FBQUEsQ0FBbEI7O0FBZ0ZlTiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjViMjQzZWM0M2Y0NjUxYzM1YzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG4vL+uwseyXlOuTnO2VnO2FjCDrjbDsnbTthLAg6rWs7KGwIOuvuOumrCDrsJvslYTrhpPquLBcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBtYWluUG9zdHM6W1xyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vIGlkOjEsXHJcbiAgICAgICAgLy8gVXNlcjp7XHJcbiAgICAgICAgLy8gICAgIGlkOjEsXHJcbiAgICAgICAgLy8gICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBjb250ZW50OiAn7LKr67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIC8vIEltYWdlczpbe1xyXG4gICAgICAgIC8vICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgIHNyYzonaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMy8yOC8xMi8zNS9jYXQtMTI4NTYzNF8xMjgwLnBuZydcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICBzcmM6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE0LzExLzMwLzE0LzExL2NhdC01NTE1NTRfOTYwXzcyMC5qcGcnXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgc3JjOiAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wNC8xMy8yMC80OS9jYXQtMzIzMjYyXzEyODAuanBnJ1xyXG4gICAgICAgIC8vIH1dLFxyXG4gICAgICAgIC8vIENvbW1lbnRzOlt7XHJcbiAgICAgICAgLy8gICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgVXNlcjp7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBuaWNrbmFtZTogJ25lcm8nXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J2064Sk7JqUJ1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgIFVzZXI6e1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgbmlja25hbWU6ICdoZXJvJ1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBjb250ZW50OiAn6rOg7JaR7J20J1xyXG4gICAgICAgIC8vIH1dfVxyXG4gICAgXSxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBoYXNNb3JlUG9zdDp0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzpmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjpudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjpudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjpudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3Q9KG51bWJlcik9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCk9Pih7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczpbe1xyXG4gICAgICAgIHNyYzpmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSlcclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHM9aW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMTApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1Q9J0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1M9J0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkU9J0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVD0nQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTPSdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkU9J0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1Q9J0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUz0nQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFPSdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUPSdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1M9J1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRT0nUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50PShkYXRhKT0+KHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0PShkYXRhKT0+KHtcclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEuY29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6W10sXHJcbiAgICBDb21tZW50czogW11cclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9YWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3Q9ZHJhZnQubWFpblBvc3RzLmxlbmd0aDw1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3Q9ZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==