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
  followLoading: false,
  //팔로우 시도중
  followDone: false,
  //팔로우 성공
  followError: null,
  //팔로우 실패
  unfollowLoading: false,
  //언팔로우 시도중
  unfollowDone: false,
  //언팔로우 성공
  unfollowError: null,
  //언팔로우 실패
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
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followDone = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me = dummyUser(action.data);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowDone = false;
        draft.unfollowError = action.error;
        break;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwibG9nSW5FcnJvciIsImlzTG9nZ2luZ091dCIsImlzTG9nZ2VkT3V0IiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInB1c2giLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUM7QUFDdEJDLFlBQVUsRUFBRSxLQURVO0FBQ0g7QUFDbkJDLGFBQVcsRUFBRSxLQUZTO0FBRUY7QUFDcEJDLFlBQVUsRUFBQyxJQUhXO0FBR0w7QUFFakJDLGNBQVksRUFBRSxLQUxRO0FBS0Q7QUFDckJDLGFBQVcsRUFBQyxLQU5VO0FBTUg7QUFDbkJDLGFBQVcsRUFBQyxJQVBVO0FBT0o7QUFFbEJDLGVBQWEsRUFBRSxLQVRPO0FBU0E7QUFDdEJDLFlBQVUsRUFBQyxLQVZXO0FBVUo7QUFDbEJDLGFBQVcsRUFBQyxJQVhVO0FBV0o7QUFFbEJDLHVCQUFxQixFQUFFLEtBYkQ7QUFhUTtBQUM5QkMsb0JBQWtCLEVBQUMsS0FkRztBQWNJO0FBQzFCQyxxQkFBbUIsRUFBQyxJQWZFO0FBZUk7QUFFMUJDLGVBQWEsRUFBRSxLQWpCTztBQWlCQTtBQUN0QkMsWUFBVSxFQUFDLEtBbEJXO0FBa0JKO0FBQ2xCQyxhQUFXLEVBQUMsSUFuQlU7QUFtQko7QUFFbEJDLGlCQUFlLEVBQUUsS0FyQks7QUFxQkU7QUFDeEJDLGNBQVksRUFBQyxLQXRCUztBQXNCRjtBQUNwQkMsZUFBYSxFQUFDLElBdkJRO0FBdUJGO0FBSXBCQyxJQUFFLEVBQUMsSUEzQm1CO0FBNEJ0QkMsWUFBVSxFQUFDLEVBNUJXO0FBNkJ0QkMsV0FBUyxFQUFDO0FBN0JZLENBQW5CO0FBZ0NBLElBQU1DLGNBQWMsR0FBQyxnQkFBckI7QUFDQSxJQUFNQyxjQUFjLEdBQUMsZ0JBQXJCO0FBQ0EsSUFBTUMsY0FBYyxHQUFDLGdCQUFyQjtBQUVBLElBQU1DLGVBQWUsR0FBQyxpQkFBdEI7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V0FBSzVCLHVCQUFMO0FBQ0kwQixhQUFLLENBQUMvQyxxQkFBTixHQUE0QixJQUE1QjtBQUNBK0MsYUFBSyxDQUFDOUMsa0JBQU4sR0FBeUIsS0FBekI7QUFDQThDLGFBQUssQ0FBQzdDLG1CQUFOLEdBQTBCLElBQTFCO0FBQ0E7O0FBRUosV0FBS29CLHVCQUFMO0FBQ0l5QixhQUFLLENBQUMvQyxxQkFBTixHQUE0QixLQUE1QjtBQUNBK0MsYUFBSyxDQUFDOUMsa0JBQU4sR0FBeUIsSUFBekI7QUFDQTs7QUFFSixXQUFLc0IsdUJBQUw7QUFDSXdCLGFBQUssQ0FBQy9DLHFCQUFOLEdBQTRCLEtBQTVCO0FBQ0ErQyxhQUFLLENBQUM5QyxrQkFBTixHQUF5QixLQUF6QjtBQUNBOEMsYUFBSyxDQUFDN0MsbUJBQU4sR0FBMEIyQyxNQUFNLENBQUNJLEtBQWpDO0FBQ0E7O0FBRUosV0FBS25CLGNBQUw7QUFDSWlCLGFBQUssQ0FBQ3RDLEVBQU4sQ0FBUzJCLEtBQVQsQ0FBZWMsT0FBZixDQUF1QjtBQUFDZixZQUFFLEVBQUNVLE1BQU0sQ0FBQ1o7QUFBWCxTQUF2QjtBQUNBOztBQUVKLFdBQUtGLGlCQUFMO0FBQ0lnQixhQUFLLENBQUN0QyxFQUFOLENBQVMyQixLQUFULEdBQWVXLEtBQUssQ0FBQ3RDLEVBQU4sQ0FBUzJCLEtBQVQsQ0FBZWUsTUFBZixDQUFzQixVQUFDQyxDQUFEO0FBQUEsaUJBQUtBLENBQUMsQ0FBQ2pCLEVBQUYsS0FBT1UsTUFBTSxDQUFDWixJQUFuQjtBQUFBLFNBQXRCLENBQWY7QUFDQTs7QUFFSjtBQUFTO0FBckhiO0FBdUhILEdBeEhhLENBQWQ7QUF5SEgsQ0ExSEQ7O0FBNEhlVSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM4MGUzZjRlYjRjMjc3NTQ0NWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsIC8v66Gc6re47J24IOyEseqztVxyXG4gICAgaXNMb2dnaW5nSW46IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRXJyb3I6bnVsbCwgLy/roZzqt7jsnbgg7Iuk7YyoXHJcblxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBpc0xvZ2dlZE91dDpmYWxzZSwgLy/roZzqt7jslYTsm4Mg7ISx6rO1XHJcbiAgICBsb2dPdXRFcnJvcjpudWxsLCAvL+uhnOq3uOyVhOybgyDsi6TtjKhcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLCAvL+2ajOybkOqwgOyehSDshLHqs7VcclxuICAgIHNpZ25VcEVycm9yOm51bGwsIC8v7ZqM7JuQ6rCA7J6FIOyLpO2MqFxyXG5cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyEseqztVxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjpudWxsLCAvL+uLieuEpOyehCDrs4Dqsr0g7Iuk7YyoXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8v7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgZm9sbG93RG9uZTpmYWxzZSwgLy/tjJTroZzsmrAg7ISx6rO1XHJcbiAgICBmb2xsb3dFcnJvcjpudWxsLCAvL+2MlOuhnOyasCDsi6TtjKhcclxuXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvL+yWuO2MlOuhnOyasCDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93RG9uZTpmYWxzZSwgLy/slrjtjJTroZzsmrAg7ISx6rO1XHJcbiAgICB1bmZvbGxvd0Vycm9yOm51bGwsIC8v7Ja47YyU66Gc7JqwIOyLpO2MqFxyXG5cclxuICAgIFxyXG5cclxuICAgIG1lOm51bGwsXHJcbiAgICBzaWduVXBEYXRhOnt9LFxyXG4gICAgbG9naW5EYXRhOnt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVD1cIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUz1cIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRT1cIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUPVwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1M9XCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRT1cIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVD1cIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTPVwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkU9XCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVD1cIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUz1cIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRT1cIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1Q9XCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1M9XCJGT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkU9XCJGT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1Q9XCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTPVwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRT1cIlVORk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRT1cIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRT1cIlJFTU9WRV9QT1NUX09GX01FXCI7XHJcblxyXG5jb25zdCBkdW1teVVzZXI9KGRhdGEpPT4oe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lOifso7zrr7gnLFxyXG4gICAgaWQ6MSxcclxuICAgIFBvc3RzOiBbe2lkOjF9XSxcclxuICAgIEZvbGxvd2luZ3M6W3sgbmlja25hbWU6J+u2gOq4sOy0iCd9LHsgbmlja25hbWU6J+ygnOuhnOy0iCd9XSxcclxuICAgIEZvbGxvd2VyczpbeyBuaWNrbmFtZTon67aA6riw7LSIJ30seyBuaWNrbmFtZTon7KCc66Gc7LSIJ31dXHJcbn0pXHJcblxyXG4vL2FjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uPSh7ZGF0YX0pPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTonTE9HX0lOX1NVQ0NFU1MnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uPSh7ZGF0YX0pPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTonTE9HX0lOX0ZBSUxVUkUnLFxyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxufSovXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuLypcclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfT1VUX1NVQ0NFU1MnXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfT1VUX0ZBSUxVUkUnXHJcbiAgICB9XHJcbn0qL1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cFJlcXVlc3RBY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOlNJR05fVVBfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDphY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRPdXQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dD1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0PWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzPWRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodik9PnYuaWQhPT1hY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9