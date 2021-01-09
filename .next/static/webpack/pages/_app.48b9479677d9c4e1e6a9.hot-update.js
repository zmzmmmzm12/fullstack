webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_5__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);







function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('./api/post', data);
}

function addPost(action) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          id = shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate(); //const result=yield call(addPostAPI, action.data);

          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: {
              id: id,
              content: action.data
            }
          });

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: id
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            data: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("./api/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: action.data
          });

        case 5:
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            data: _context3.t0.response.data
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]('./api/post', data);
}

function removePost(action) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          id = shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate(); //const result=yield call(removePostAPI, action.data);

          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: {
              id: id,
              content: action.data
            }
          });

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: id
          });

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            data: _context5.t0.response.data
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0Iiwid2F0Y2hBZGRQb3N0IiwiYWRkQ29tbWVudCIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJwb3N0U2FnYSIsImFkZFBvc3RBUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiY29udGVudCIsIkFERF9QT1NUX1RPX01FIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicmVtb3ZlUG9zdEFQSSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBYVVBLE87bUdBd0JBQyxZO21HQU9BQyxVO21HQWdCQUMsZTttR0FPQUMsVTttR0F3QkFDLGU7bUdBSWVDLFE7O0FBL0Z6QjtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQXlCO0FBQ3JCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0g7O0FBQ0QsU0FBVVIsT0FBVixDQUFrQlcsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVJLGlCQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFG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LENBQVQ7O0FBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCQSxTQUFVSCxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNa0IscUVBQVUsQ0FBQ1cseUVBQUQsRUFBc0I5QixVQUF0QixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNNkIsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDbkMsWUFBRCxDQURFLEVBRU5tQywrREFBSSxDQUFDakMsZUFBRCxDQUZFLEVBR05pQywrREFBSSxDQUFDL0IsZUFBRCxDQUhFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ4Yjk0Nzk2NzdkOWM0ZTFlNmE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCxjYWxsLGZvcmssIHRha2VMYXRlc3QsIHB1dCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCxBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxSRU1PVkVfUE9TVF9SRVFVRVNUXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXInO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyUmVkdWNlcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcuL2FwaS9wb3N0JyxkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pe1xyXG4gICB0cnl7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IGlkPXNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgY29udGVudDphY3Rpb24uZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6QUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgZGF0YTppZFxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpeyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgLi9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCxkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pe1xyXG4gICB0cnl7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7IFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoJy4vYXBpL3Bvc3QnLGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbil7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgaWQ9c2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBjb250ZW50OmFjdGlvbi5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICBkYXRhOmlkXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7IFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=