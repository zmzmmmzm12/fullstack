module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\82107\\Desktop\\\uAC2D\uC774\uC5B4_\uC0AC\uC804\uC900\uBE44\\\uAC15\uC758\uB530\uB77C\uD558\uAE30\\\uC6F9\uAC8C\uC784\uC744 \uB9CC\uB4E4\uBA70 \uBC30\uC6B0\uB294 \uB9AC\uC561\uD2B8\\fullStack\\front\\pages\\_app.js";




 //모든 컴포넌트(pages)에서 공통이면 여기 넣고

const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird)));

/***/ }),

/***/ "./reducers/postReducer.js":
/*!*********************************!*\
  !*** ./reducers/postReducer.js ***!
  \*********************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);



 //백엔드한테 데이터 구조 미리 받아놓기

const initialState = {
  mainPosts: [],
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
const generateDummyPost = number => Array(number).fill().map(() => ({
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
})); //initialState.mainPosts=initialState.mainPosts.concat(generateDummyPost(10));

const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '주미'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '주미'
  }
});

const postReducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_2___default()(state, draft => {
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
      const post = draft.mainPosts.find(v => v.id === action.data.postId);
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
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data), draft.removePostLoading = false, draft.removePostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false, draft.removePostDone = false, draft.removePostError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (postReducer);

/***/ }),

/***/ "./reducers/rootReducer.js":
/*!*********************************!*\
  !*** ./reducers/rootReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer */ "./reducers/userReducer.js");
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postReducer */ "./reducers/postReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //이전상태, action을 통해 다음상태를 만들어내는 함수

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  root: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  userReducer: _userReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  postReducer: _postReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/userReducer.js":
/*!*********************************!*\
  !*** ./reducers/userReducer.js ***!
  \*********************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, signupRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
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
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
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
}); //action creator


const loginRequestAction = ({
  data
}) => {
  return {
    type: LOG_IN_REQUEST,
    data
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

const logoutRequestAction = () => {
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

const signupRequestAction = () => {
  return {
    type: SIGN_UP_REQUEST
  };
};

const userReducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
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
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");



function* rootSaga() {
  //const get= function* () {}; Generator함수
  //gen().next()하면서 yield키워드 등장
  //yield가 중단점이라고 생각하면 됨. next한번에 하나씩 실행
  //실전 리액트 프로그래밍 필기 참고. 
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([//제너레이터 함수들을 동시에 실행
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/postReducer */ "./reducers/postReducer.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('./api/post', data);
}

function* loadPosts(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate(); //const result=yield call(loadPostsAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(4000, _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('./api/post', data);
}

function* addPost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate(); //const result=yield call(addPostAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`./api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result=yield call(addCommentAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('./api/post', data);
}

function* removePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate(); //const result=yield call(removePostAPI, action.data);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_postReducer__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/userReducer */ "./reducers/userReducer.js");




function logInAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* logIn(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //서버가 없으니까 아래는 주석처리
    //const result=yield call(logInAPI, action.data); //logInAPI실행

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    //API실행 후 서버 요청 실패 시 이부분 실행
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result=yield call(logOutAPI); 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signup');
}

function* signUp() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result=yield call(signUpAPI); 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/rootReducer */ "./reducers/rootReducer.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  //console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwicG9zdCIsImZpbmQiLCJ2IiwicG9zdElkIiwiZmlsdGVyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyUmVkdWNlciIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdJbiIsImxvZ0luRXJyb3IiLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dlZE91dCIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInNpZ251cFJlcXVlc3RBY3Rpb24iLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3RzQVBJIiwiYXhpb3MiLCJnZXQiLCJsb2FkUG9zdHMiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsImFkZFBvc3RBUEkiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwibG9nSW5BUEkiLCJsb2dJbiIsIndhdGNoTG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcclxuXHJcbi8v66qo65OgIOy7tO2PrOuEjO2KuChwYWdlcynsl5DshJwg6rO17Ya17J2066m0IOyXrOq4sCDrhKPqs6BcclxuY29uc3QgTm9kZUJpcmQ9KHtDb21wb25lbnR9KT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzPXtcclxuICAgIENvbXBvbmVudDpQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShOb2RlQmlyZCkpOyIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbi8v67Cx7JeU65Oc7ZWc7YWMIOuNsOydtO2EsCDqtazsobAg66+466asIOuwm+yVhOuGk+q4sFxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIG1haW5Qb3N0czpbXHJcbiAgICAgICAgXHJcbiAgICBdLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIGhhc01vcmVQb3N0OnRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTpmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOm51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOm51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOm51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOm51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdD0obnVtYmVyKT0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKT0+KHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOlt7XHJcbiAgICAgICAgc3JjOmZha2VyLmltYWdlLmltYWdlKClcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudHM6W3tcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbn0pKVxyXG5cclxuLy9pbml0aWFsU3RhdGUubWFpblBvc3RzPWluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KDEwKSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUPSdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTPSdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFPSdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1Q9J0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUz0nQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFPSdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUPSdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1M9J0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRT0nQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVD0nUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTPSdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkU9J1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3Q9KGRhdGEpPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdD0oZGF0YSk9Pih7XHJcbiAgICBpZDpkYXRhLmlkLFxyXG4gICAgY29udGVudDpkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOltdLFxyXG4gICAgQ29tbWVudHM6IFtdXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQ9KGRhdGEpPT4oe1xyXG4gICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDpkYXRhLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZTon7KO866+4J1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgcG9zdFJlZHVjZXI9KHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzPWFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0PWRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGg8NTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0PWRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RSZWR1Y2VyOyIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlclJlZHVjZXInO1xyXG5pbXBvcnQgcG9zdFJlZHVjZXIgZnJvbSAnLi9wb3N0UmVkdWNlcic7XHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcblxyXG5cclxuLy/snbTsoITsg4Htg5wsIGFjdGlvbuydhCDthrXtlbQg64uk7J2M7IOB7YOc66W8IOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3Qgcm9vdFJlZHVjZXI9Y29tYmluZVJlZHVjZXJzKHtcclxuICAgIHJvb3Q6IChzdGF0ZT17fSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuey4uLnN0YXRlLC4uLmFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlclJlZHVjZXIsXHJcbiAgICBwb3N0UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsIC8v66Gc6re47J24IOyEseqztVxyXG4gICAgaXNMb2dnaW5nSW46IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRXJyb3I6bnVsbCwgLy/roZzqt7jsnbgg7Iuk7YyoXHJcblxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBpc0xvZ2dlZE91dDpmYWxzZSwgLy/roZzqt7jslYTsm4Mg7ISx6rO1XHJcbiAgICBsb2dPdXRFcnJvcjpudWxsLCAvL+uhnOq3uOyVhOybgyDsi6TtjKhcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLCAvL+2ajOybkOqwgOyehSDshLHqs7VcclxuICAgIHNpZ25VcEVycm9yOm51bGwsIC8v7ZqM7JuQ6rCA7J6FIOyLpO2MqFxyXG5cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyEseqztVxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjpudWxsLCAvL+uLieuEpOyehCDrs4Dqsr0g7Iuk7YyoXHJcblxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPVwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTPVwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFPVwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1Q9XCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUz1cIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFPVwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUPVwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1M9XCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRT1cIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUPVwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTPVwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFPVwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVD1cIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUz1cIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRT1cIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVD1cIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1M9XCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFPVwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FPVwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FPVwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlcj0oZGF0YSk9Pih7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6J+yjvOuvuCcsXHJcbiAgICBpZDoxLFxyXG4gICAgUG9zdHM6IFt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbeyBuaWNrbmFtZTon67aA6riw7LSIJ30seyBuaWNrbmFtZTon7KCc66Gc7LSIJ31dLFxyXG4gICAgRm9sbG93ZXJzOlt7IG5pY2tuYW1lOifrtoDquLDstIgnfSx7IG5pY2tuYW1lOifsoJzroZzstIgnfV1cclxufSlcclxuXHJcbi8vYWN0aW9uIGNyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbj0oe2RhdGF9KT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfU1VDQ0VTUydcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfRkFJTFVSRSdcclxuICAgIH1cclxufSovXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6U0lHTl9VUF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbj10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0PXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRPdXQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dD1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0PWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzPWRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodik9PnYuaWQhPT1hY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjsiLCJpbXBvcnQge2FsbCwgZm9ya31mcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuLy9jb25zdCBnZXQ9IGZ1bmN0aW9uKiAoKSB7fTsgR2VuZXJhdG9y7ZWo7IiYXHJcbi8vZ2VuKCkubmV4dCgp7ZWY66m07IScIHlpZWxk7YKk7JuM65OcIOuTseyepVxyXG4vL3lpZWxk6rCAIOykkeuLqOygkOydtOudvOqzoCDsg53qsIHtlZjrqbQg65CoLiBuZXh07ZWc67KI7JeQIO2VmOuCmOyUqSDsi6TtlolcclxuLy/si6TsoIQg66as7JWh7Yq4IO2UhOuhnOq3uOuemOuwjSDtlYTquLAg7LC46rOgLiBcclxuICAgIHlpZWxkIGFsbChbIC8v7KCc64SI66CI7J207YSwIO2VqOyImOuTpOydhCDrj5nsi5zsl5Ag7Iuk7ZaJXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBdKTtcclxuXHJcblxyXG59IiwiaW1wb3J0IHthbGwsY2FsbCxmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGRlbGF5LCB0aHJvdHRsZX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLCBSRU1PVkVfUE9TVF9TVUNDRVNTLFJFTU9WRV9QT1NUX1JFUVVFU1RcclxuICAgICxMT0FEX1BPU1RTX0ZBSUxVUkUsTE9BRF9QT1NUU19SRVFVRVNULExPQURfUE9TVFNfU1VDQ0VTUywgZ2VuZXJhdGVEdW1teVBvc3RcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0UmVkdWNlcic7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXJSZWR1Y2VyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnLi9hcGkvcG9zdCcsZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pe1xyXG4gICB0cnl7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IGlkPXNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOmdlbmVyYXRlRHVtbXlQb3N0KDEwKVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpeyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCl7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg0MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnLi9hcGkvcG9zdCcsZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKXtcclxuICAgdHJ5e1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZD1zaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdD15aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6YWN0aW9uLmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOkFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgIGRhdGE6aWRcclxuICAgIH0pXHJcbiAgIH1cclxuICAgY2F0Y2goZXJyKXsgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC4vYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKXtcclxuICAgdHJ5e1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdD15aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpeyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcuL2FwaS9wb3N0JyxkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pe1xyXG4gICB0cnl7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IGlkPXNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcclxuICAgIH0pXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgZGF0YTphY3Rpb24uZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpeyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KVxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQge2FsbCxjYWxsLGZvcmssIHRha2VMYXRlc3QscHV0LCBkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsTE9HX09VVF9SRVFVRVNULExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULFNJR05fVVBfU1VDQ0VTU1xyXG59ZnJvbSAnLi4vcmVkdWNlcnMvdXNlclJlZHVjZXInO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy/shJzrsoTqsIAg7JeG7Jy864uI6rmMIOyVhOuemOuKlCDso7zshJ3sspjrpqxcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy9sb2dJbkFQSeyLpO2WiVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpeyAvL0FQSeyLpO2WiSDtm4Qg7ISc67KEIOyalOyyrSDsi6TtjKgg7IucIOydtOu2gOu2hCDsi6TtlolcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxufVxyXG5mdW5jdGlvbiogbG9nT3V0KCl7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChsb2dPdXRBUEkpOyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWdudXAnKTtcclxufVxyXG5mdW5jdGlvbiogc2lnblVwKCl7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChzaWduVXBBUEkpOyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcClcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20ncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZT0oe2Rpc3BhdGNoLCBnZXRTdGF0ZX0pPT4gKG5leHQpPT4oYWN0aW9uKT0+e1xyXG4gICAgLy9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmU9KCk9PntcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlPWNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcz0gW3NhZ2FNaWRkbGV3YXJlLGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXI9cHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHJcbiAgICBjb25zdCBzdG9yZT1jcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzaz1zYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge2RlYnVnOnByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50J30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9