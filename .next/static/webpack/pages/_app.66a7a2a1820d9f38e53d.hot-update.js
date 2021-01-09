webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, signupRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupRequestAction", function() { return signupRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
var ADD_POST_TO_ME = "ADD_POST_TO_ME";
var REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

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

    case ADD_POST_TO_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
        })
      });

    case REMOVE_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(function (v) {
            return v.id !== action.id;
          })
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwibG9nSW5FcnJvciIsImlzTG9nZ2luZ091dCIsImlzTG9nZ2VkT3V0IiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic2lnbnVwUmVxdWVzdEFjdGlvbiIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsImZpbHRlciIsInYiXSwibWFwcGluZ3Mi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VUFBQ0MsQ0FBRDtBQUFBLG1CQUFLQSxDQUFDLENBQUNiLEVBQUYsS0FBT1UsTUFBTSxDQUFDVixFQUFuQjtBQUFBLFdBQXRCO0FBRlQ7QUFGTjs7QUFRSjtBQUFTO0FBQ0wsaUNBQVdTLEtBQVg7QUFDSDtBQTNHTDtBQTZHSCxDQTlHRDs7QUFnSGVELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjZhN2EyYTE4MjBkOWYzOGU1M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsIC8v66Gc6re47J24IOyEseqztVxyXG4gICAgaXNMb2dnaW5nSW46IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRXJyb3I6bnVsbCwgLy/roZzqt7jsnbgg7Iuk7YyoXHJcblxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBpc0xvZ2dlZE91dDpmYWxzZSwgLy/roZzqt7jslYTsm4Mg7ISx6rO1XHJcbiAgICBsb2dPdXRFcnJvcjpudWxsLCAvL+uhnOq3uOyVhOybgyDsi6TtjKhcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLCAvL+2ajOybkOqwgOyehSDshLHqs7VcclxuICAgIHNpZ25VcEVycm9yOm51bGwsIC8v7ZqM7JuQ6rCA7J6FIOyLpO2MqFxyXG5cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyEseqztVxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjpudWxsLCAvL+uLieuEpOyehCDrs4Dqsr0g7Iuk7YyoXHJcblxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPVwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTPVwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFPVwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1Q9XCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUz1cIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFPVwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUPVwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1M9XCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRT1cIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUPVwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTPVwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFPVwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVD1cIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUz1cIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRT1cIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVD1cIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1M9XCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFPVwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FPVwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FPVwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlcj0oZGF0YSk9Pih7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6J+yjvOuvuCcsXHJcbiAgICBpZDoxLFxyXG4gICAgUG9zdHM6IFt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbeyBuaWNrbmFtZTon67aA6riw7LSIJ30seyBuaWNrbmFtZTon7KCc66Gc7LSIJ31dLFxyXG4gICAgRm9sbG93ZXJzOlt7IG5pY2tuYW1lOifrtoDquLDstIgnfSx7IG5pY2tuYW1lOifsoJzroZzstIgnfV1cclxufSlcclxuXHJcbi8vYWN0aW9uIGNyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbj0oe2RhdGF9KT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfU1VDQ0VTUydcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfRkFJTFVSRSdcclxuICAgIH1cclxufSovXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6U0lHTl9VUF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOnRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjpudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nT3V0OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZE91dDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dEVycm9yOm51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkT3V0OnRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nT3V0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRPdXQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3I6bnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOnRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6bnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOnRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lOntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICBQb3N0czogW3tpZDphY3Rpb24uZGF0YX0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWU6e1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmlkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9