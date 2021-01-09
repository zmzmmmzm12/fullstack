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
  mainPosts: [{// id:1,
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
    // }]
  }],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsImNvbmNhdCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwicG9zdCIsImZpbmQiLCJ2IiwicG9zdElkIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNPLElBQU1BLFlBQVksR0FBQztBQUN0QkMsV0FBUyxFQUFDLENBQUMsQ0FDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDTyxHQUFELENBRFk7QUFxQ3RCQyxZQUFVLEVBQUMsRUFyQ1c7QUFzQ3RCQyxhQUFXLEVBQUMsSUF0Q1U7QUF1Q3RCQyxrQkFBZ0IsRUFBQyxLQXZDSztBQXdDdEJDLGVBQWEsRUFBQyxLQXhDUTtBQXlDdEJDLGdCQUFjLEVBQUMsSUF6Q087QUEwQ3RCQyxnQkFBYyxFQUFDLEtBMUNPO0FBMkN0QkMsYUFBVyxFQUFDLEtBM0NVO0FBNEN0QkMsY0FBWSxFQUFDLElBNUNTO0FBNkN0QkMsbUJBQWlCLEVBQUMsS0E3Q0k7QUE4Q3RCQyxnQkFBYyxFQUFDLEtBOUNPO0FBK0N0QkMsaUJBQWUsRUFBQyxJQS9DTTtBQWdEdEJDLG1CQUFpQixFQUFDLEtBaERJO0FBaUR0QkMsZ0JBQWMsRUFBQyxLQWpETztBQWtEdEJDLGlCQUFlLEVBQUM7QUFsRE0sQ0FBbkI7QUFxREEsSUFBTUMsaUJBQWlCLEdBQUMsU0FBbEJBLGlCQUFrQixDQUFDQyxNQUFEO0FBQUEsU0FBV0MsS0FBSyxDQUFDRCxNQUFELENBQUwsQ0FBY0Us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V0FBS2lDLG1CQUFMO0FBQ0lZLGFBQUssQ0FBQzNELFNBQU4sR0FBaUIyRCxLQUFLLENBQUMzRCxTQUFOLENBQWdCbUUsTUFBaEIsQ0FBdUIsVUFBQ0YsQ0FBRDtBQUFBLGlCQUFLQSxDQUFDLENBQUM3QyxFQUFGLEtBQU9xQyxNQUFNLENBQUNQLElBQW5CO0FBQUEsU0FBdkIsQ0FBakIsRUFDQVMsS0FBSyxDQUFDL0MsaUJBQU4sR0FBd0IsS0FEeEIsRUFFQStDLEtBQUssQ0FBQzlDLGNBQU4sR0FBcUIsSUFGckI7QUFHQTs7QUFFSixXQUFLbUMsbUJBQUw7QUFDSVcsYUFBSyxDQUFDL0MsaUJBQU4sR0FBd0IsS0FBeEIsRUFDQStDLEtBQUssQ0FBQzlDLGNBQU4sR0FBcUIsS0FEckIsRUFFQThDLEtBQUssQ0FBQzdDLGVBQU4sR0FBc0IyQyxNQUFNLENBQUNJLEtBRjdCO0FBR0E7O0FBRUo7QUFBUztBQTNFYjtBQTZFUCxHQTlFc0QsQ0FBckM7QUFBQSxDQUFsQjs7QUFnRmVOLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGYyOThiN2VlMGViMDY4MzNhY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbi8v67Cx7JeU65Oc7ZWc7YWMIOuNsOydtO2EsCDqtazsobAg66+466asIOuwm+yVhOuGk+q4sFxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIG1haW5Qb3N0czpbe1xyXG4gICAgICAgIC8vIGlkOjEsXHJcbiAgICAgICAgLy8gVXNlcjp7XHJcbiAgICAgICAgLy8gICAgIGlkOjEsXHJcbiAgICAgICAgLy8gICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBjb250ZW50OiAn7LKr67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIC8vIEltYWdlczpbe1xyXG4gICAgICAgIC8vICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgIHNyYzonaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMy8yOC8xMi8zNS9jYXQtMTI4NTYzNF8xMjgwLnBuZydcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICBzcmM6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE0LzExLzMwLzE0LzExL2NhdC01NTE1NTRfOTYwXzcyMC5qcGcnXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgc3JjOiAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wNC8xMy8yMC80OS9jYXQtMzIzMjYyXzEyODAuanBnJ1xyXG4gICAgICAgIC8vIH1dLFxyXG4gICAgICAgIC8vIENvbW1lbnRzOlt7XHJcbiAgICAgICAgLy8gICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgVXNlcjp7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBuaWNrbmFtZTogJ25lcm8nXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J2064Sk7JqUJ1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgIFVzZXI6e1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgbmlja25hbWU6ICdoZXJvJ1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBjb250ZW50OiAn6rOg7JaR7J20J1xyXG4gICAgICAgIC8vIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBoYXNNb3JlUG9zdDp0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzpmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjpudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjpudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjpudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3Q9KG51bWJlcik9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCk9Pih7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczpbe1xyXG4gICAgICAgIHNyYzpmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSlcclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHM9aW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMTApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1Q9J0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1M9J0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkU9J0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVD0nQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTPSdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkU9J0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1Q9J0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUz0nQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFPSdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUPSdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1M9J1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRT0nUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50PShkYXRhKT0+KHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0PShkYXRhKT0+KHtcclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEuY29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6W10sXHJcbiAgICBDb21tZW50czogW11cclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9YWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3Q9ZHJhZnQubWFpblBvc3RzLmxlbmd0aDw1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3Q9ZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==