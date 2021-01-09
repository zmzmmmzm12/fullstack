webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/postReducer.js":
/*!*********************************!*\
  !*** ./reducers/postReducer.js ***!
  \*********************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, addComment, default */
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
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '주미'
    },
    content: '첫번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      src: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      src: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      src: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
        nickname: 'nero'
      },
      content: '우와 개정판이네요'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
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
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null
};
initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(function () {
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
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiY29uY2F0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwic2VudGVuY2UiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicG9zdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsInBvc3QiLCJmaW5kIiwidiIsInBvc3RJZCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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UCxDQUFZckMsT0FBYixDQUFsQztBQUNBOEMsYUFBSyxDQUFDcEMsaUJBQU4sR0FBd0IsS0FBeEI7QUFDQW9DLGFBQUssQ0FBQ25DLGNBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFFSixXQUFLcUIsbUJBQUw7QUFDSWMsYUFBSyxDQUFDcEMsaUJBQU4sR0FBd0IsS0FBeEI7QUFDQW9DLGFBQUssQ0FBQ25DLGNBQU4sR0FBcUIsS0FBckI7QUFDQW1DLGFBQUssQ0FBQ2xDLGVBQU4sR0FBc0JnQyxNQUFNLENBQUNJLEtBQTdCO0FBQ0E7O0FBRUosV0FBS2YsbUJBQUw7QUFDSWEsYUFBSyxDQUFDakMsaUJBQU4sR0FBd0IsSUFBeEI7QUFDQWlDLGFBQUssQ0FBQ2hDLGNBQU4sR0FBcUIsS0FBckI7QUFDQWdDLGFBQUssQ0FBQy9CLGVBQU4sR0FBc0IsSUFBdEI7QUFDQTs7QUFFSixXQUFLbUIsbUJBQUw7QUFDSVksYUFBSyxDQUFDbEQsU0FBTixHQUFpQmtELEtBQUssQ0FBQ2xELFNBQU4sQ0FBZ0J5RCxNQUFoQixDQUF1QixVQUFDRixDQUFEO0FBQUEsaUJBQUtBLENBQUMsQ0FBQ3RELEVBQUYsS0FBTytDLE1BQU0sQ0FBQ1AsSUFBbkI7QUFBQSxTQUF2QixDQUFqQixFQUNBUyxLQUFLLENBQUNqQyxpQkFBTixHQUF3QixLQUR4QixFQUVBaUMsS0FBSyxDQUFDaEMsY0FBTixHQUFxQixJQUZyQjtBQUdBOztBQUVKLFdBQUtxQixtQkFBTDtBQUNJVyxhQUFLLENBQUNqQyxpQkFBTixHQUF3QixLQUF4QixFQUNBaUMsS0FBSyxDQUFDaEMsY0FBTixHQUFxQixLQURyQixFQUVBZ0MsS0FBSyxDQUFDL0IsZUFBTixHQUFzQjZCLE1BQU0sQ0FBQ0ksS0FGN0I7QUFHQTs7QUFFSjtBQUFTO0FBeERiO0FBMERQLEdBM0RzRCxDQUFyQztBQUFBLENBQWxCOztBQTZEZU4sMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDU3NTM5OTk3NWI1Nzg5NTY5ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbi8v67Cx7JeU65Oc7ZWc7YWMIOuNsOydtO2EsCDqtazsobAg66+466asIOuwm+yVhOuGk+q4sFxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIG1haW5Qb3N0czpbe1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKr67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczpbe1xyXG4gICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzonaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMy8yOC8xMi8zNS9jYXQtMTI4NTYzNF8xMjgwLnBuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE0LzExLzMwLzE0LzExL2NhdC01NTE1NTRfOTYwXzcyMC5qcGcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wNC8xMy8yMC80OS9jYXQtMzIzMjYyXzEyODAuanBnJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J2064Sk7JqUJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdoZXJvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6rOg7JaR7J20J1xyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOm51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOm51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOm51bGwsXHJcbn1cclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHM9aW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoXHJcbiAgICBBcnJheSgyMCkuZmlsbCgpLm1hcCgoKT0+KHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgICAgIEltYWdlczpbe1xyXG4gICAgICAgICAgICBzcmM6ZmFrZXIuaW1hZ2UuaW1hZ2UoKVxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfSkpXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVD0nQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTPSdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkU9J0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1Q9J0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUz0nQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFPSdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUPSdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1M9J1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRT0nUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50PShkYXRhKT0+KHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0PShkYXRhKT0+KHtcclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEuY29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6W10sXHJcbiAgICBDb21tZW50czogW11cclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0PWRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=