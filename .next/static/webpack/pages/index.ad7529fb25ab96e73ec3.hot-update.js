webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginRequestAction, logoutRequestAction, signupRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupRequestAction", function() { return signupRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  isLoggedIn: false,
  //로그인 성공
  isLoggingIn: false,
  //로그인 시도중
  logInError: null,
  //로그인 실패
  isLoggingOut: false,
  //로그아웃 시도중
  isLoggedOut: false,
  //로그아웃 성공
  logOutError: null,
  //로그아웃 실패
  signUpLoading: false,
  //회원가입 시도중
  signUpDone: false,
  //회원가입 성공
  signUpError: null,
  //회원가입 실패
  changeNicknameLoading: false,
  //닉네임 변경 시도중
  changeNicknameDone: false,
  //닉네임 변경 성공
  changeNicknameError: null,
  //닉네임 변경 실패
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
var CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
var CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
var FOLLOW_REQUEST = "FOLLOW_REQUEST";
var FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
var FOLLOW_FAILURE = "FOLLOW_FAILURE";
var UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
var UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
var UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '주미',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '부기초'
    }, {
      nickname: '제로초'
    }],
    Followers: [{
      nickname: '부기초'
    }, {
      nickname: '제로초'
    }]
  });
}; //action creator


var loginRequestAction = function loginRequestAction(_ref) {
  var data = _ref.data;
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
/*
export const loginSuccessAction=({data})=>{
    return{
        type:'LOG_IN_SUCCESS',
        data
    }
}
export const loginFailureAction=({data})=>{
    return{
        type:'LOG_IN_FAILURE',
        data
    }
}*/

var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
/*
export const logoutSuccessAction=()=>{
    return{
        type:'LOG_OUT_SUCCESS'
    }
}
export const logoutFailureAction=()=>{
    return{
        type:'LOG_OUT_FAILURE'
    }
}*/

var signupRequestAction = function signupRequestAction() {
  return {
    type: SIGN_UP_REQUEST
  };
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: true,
        isLoggedIn: false,
        logInError: null
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: true,
        isLoggedOut: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        isLoggedOut: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        isLoggedOut: false,
        logOutError: action.error,
        me: null
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: false,
        signUpError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: false,
        changeNicknameError: action.error
      });

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwibG9nSW5FcnJvciIsImlzTG9nZ2luZ091dCIsImlzTG9nZ2VkT3V0IiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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QyxxQkFBYSxFQUFDLEtBRmxCO0FBR0lDLGtCQUFVLEVBQUM7QUFIZjs7QUFLSixTQUFLZ0IsZUFBTDtBQUNJLDZDQUNPc0IsS0FEUDtBQUVJdkMscUJBQWEsRUFBQyxLQUZsQjtBQUdJQyxrQkFBVSxFQUFDLEtBSGY7QUFJSUMsbUJBQVcsRUFBQ3NDLE1BQU0sQ0FBQ0M7QUFKdkI7O0FBT0osU0FBS3ZCLHVCQUFMO0FBQ0ksNkNBQ09xQixLQURQO0FBRUlwQyw2QkFBcUIsRUFBQyxJQUYxQjtBQUdJQywwQkFBa0IsRUFBQyxLQUh2QjtBQUlJQywyQkFBbUIsRUFBQztBQUp4Qjs7QUFNSixTQUFLYyx1QkFBTDtBQUNJLDZDQUNPb0IsS0FEUDtBQUVJcEMsNkJBQXFCLEVBQUMsS0FGMUI7QUFHSUMsMEJBQWtCLEVBQUM7QUFIdkI7O0FBS0osU0FBS2dCLHVCQUFMO0FBQ0ksNkNBQ09tQixLQURQO0FBRUlwQyw2QkFBcUIsRUFBQyxLQUYxQjtBQUdJQywwQkFBa0IsRUFBQyxLQUh2QjtBQUlJQywyQkFBbUIsRUFBQ21DLE1BQU0sQ0FBQ0M7QUFKL0I7O0FBT0o7QUFBUztBQUNMLGlDQUFXRixLQUFYO0FBQ0g7QUExRkw7QUE0RkgsQ0E3RkQ7O0FBK0ZlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZDc1MjlmYjI1YWI5NmU3M2VjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSwgLy/roZzqt7jsnbgg7ISx6rO1XHJcbiAgICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5FcnJvcjpudWxsLCAvL+uhnOq3uOyduCDsi6TtjKhcclxuXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGlzTG9nZ2VkT3V0OmZhbHNlLCAvL+uhnOq3uOyVhOybgyDshLHqs7VcclxuICAgIGxvZ091dEVycm9yOm51bGwsIC8v66Gc6re47JWE7JuDIOyLpO2MqFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsIC8v7ZqM7JuQ6rCA7J6FIOyEseqztVxyXG4gICAgc2lnblVwRXJyb3I6bnVsbCwgLy/tmozsm5DqsIDsnoUg7Iuk7YyoXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOmZhbHNlLCAvL+uLieuEpOyehCDrs4Dqsr0g7ISx6rO1XHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGwsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi6TtjKhcclxuXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1Q9XCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1M9XCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkU9XCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVD1cIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTPVwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkU9XCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1Q9XCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUz1cIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFPVwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q9XCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M9XCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU9XCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUPVwiRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTPVwiRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFPVwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUPVwiVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUz1cIlVORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkU9XCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5jb25zdCBkdW1teVVzZXI9KGRhdGEpPT4oe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lOifso7zrr7gnLFxyXG4gICAgaWQ6MSxcclxuICAgIFBvc3RzOiBbe2lkOjF9XSxcclxuICAgIEZvbGxvd2luZ3M6W3sgbmlja25hbWU6J+u2gOq4sOy0iCd9LHsgbmlja25hbWU6J+ygnOuhnOy0iCd9XSxcclxuICAgIEZvbGxvd2VyczpbeyBuaWNrbmFtZTon67aA6riw7LSIJ30seyBuaWNrbmFtZTon7KCc66Gc7LSIJ31dXHJcbn0pXHJcblxyXG4vL2FjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uPSh7ZGF0YX0pPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTonTE9HX0lOX1NVQ0NFU1MnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uPSh7ZGF0YX0pPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTonTE9HX0lOX0ZBSUxVUkUnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufSovXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuLypcclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfT1VUX1NVQ0NFU1MnXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfT1VUX0ZBSUxVUkUnXHJcbiAgICB9XHJcbn0qL1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOlNJR05fVVBfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6bnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOnRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRPdXQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXRFcnJvcjpudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZE91dDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkT3V0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwTG9hZGluZzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOm51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRG9uZTp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9