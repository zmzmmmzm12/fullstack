webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


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
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.isLoggedIn = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.me = dummyUser(action.data);
        break;

      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.isLoggedIn = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.isLoggingOut = true;
        draft.isLoggedOut = false;
        draft.isLoggedIn = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.isLoggedOut = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.isLoggingOut = false, draft.isLoggedOut = false, draft.logOutError = action.error, draft.me = null;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpDone = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwibG9nSW5FcnJvciIsImlzTG9nZ2luZ091dCIsImlzTG9nZ2VkT3V0IiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic2lnbnVwUmVxdWVzdEFjdGlvbiIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsInVuc2hp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S0FBNUI7QUFDQXlDLGFBQUssQ0FBQ3hDLGtCQUFOLEdBQXlCLEtBQXpCO0FBQ0F3QyxhQUFLLENBQUN2QyxtQkFBTixHQUEwQnFDLE1BQU0sQ0FBQ0csS0FBakM7QUFDQTs7QUFFSixXQUFLbEIsY0FBTDtBQUNJaUIsYUFBSyxDQUFDdEMsRUFBTixDQUFTMkIsS0FBVCxDQUFlYSxPQUFmLENBQXVCO0FBQUNkLFlBQUUsRUFBQ1UsTUFBTSxDQUFDWjtBQUFYLFNBQXZCO0FBQ0E7O0FBRUosV0FBS0YsaUJBQUw7QUFDSWdCLGFBQUssQ0FBQ3RDLEVBQU4sQ0FBUzJCLEtBQVQsR0FBZVcsS0FBSyxDQUFDdEMsRUFBTixDQUFTMkIsS0FBVCxDQUFlYyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxpQkFBS0EsQ0FBQyxDQUFDaEIsRUFBRixLQUFPVSxNQUFNLENBQUNaLElBQW5CO0FBQUEsU0FBdEIsQ0FBZjtBQUNBOztBQUVKO0FBQVM7QUFqRmI7QUFtRkgsR0FwRmEsQ0FBZDtBQXFGSCxDQXRGRDs7QUF3RmVVLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0MTIzODg2ZjYyOWI2NGIyNzcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsIC8v66Gc6re47J24IOyEseqztVxyXG4gICAgaXNMb2dnaW5nSW46IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRXJyb3I6bnVsbCwgLy/roZzqt7jsnbgg7Iuk7YyoXHJcblxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBpc0xvZ2dlZE91dDpmYWxzZSwgLy/roZzqt7jslYTsm4Mg7ISx6rO1XHJcbiAgICBsb2dPdXRFcnJvcjpudWxsLCAvL+uhnOq3uOyVhOybgyDsi6TtjKhcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLCAvL+2ajOybkOqwgOyehSDshLHqs7VcclxuICAgIHNpZ25VcEVycm9yOm51bGwsIC8v7ZqM7JuQ6rCA7J6FIOyLpO2MqFxyXG5cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyEseqztVxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjpudWxsLCAvL+uLieuEpOyehCDrs4Dqsr0g7Iuk7YyoXHJcblxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPVwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTPVwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFPVwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1Q9XCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUz1cIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFPVwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUPVwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1M9XCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRT1cIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUPVwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTPVwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFPVwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVD1cIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUz1cIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRT1cIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVD1cIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1M9XCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFPVwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FPVwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FPVwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlcj0oZGF0YSk9Pih7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6J+yjvOuvuCcsXHJcbiAgICBpZDoxLFxyXG4gICAgUG9zdHM6IFt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbeyBuaWNrbmFtZTon67aA6riw7LSIJ30seyBuaWNrbmFtZTon7KCc66Gc7LSIJ31dLFxyXG4gICAgRm9sbG93ZXJzOlt7IG5pY2tuYW1lOifrtoDquLDstIgnfSx7IG5pY2tuYW1lOifsoJzroZzstIgnfV1cclxufSlcclxuXHJcbi8vYWN0aW9uIGNyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbj0oe2RhdGF9KT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfU1VDQ0VTUydcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfRkFJTFVSRSdcclxuICAgIH1cclxufSovXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6U0lHTl9VUF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbj10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0PXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0PXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQ9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dD1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPSBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cz1kcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==