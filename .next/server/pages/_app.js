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
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
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

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/follow');
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result=yield call(followAPI); 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/unfollow');
}

function* unFollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result=yield call(followAPI); 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJwb3N0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwicG9zdCIsImZpbmQiLCJ2IiwicG9zdElkIiwiZmlsdGVyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyUmVkdWNlciIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdJbiIsImxvZ0luRXJyb3IiLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dlZE91dCIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic2lnbnVwUmVxdWVzdEFjdGlvbiIsInB1c2giLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3RzQVBJIiwiYXhpb3MiLCJnZXQiLCJsb2FkUG9zdHMiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsImFkZFBvc3RBUEkiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwibG9nSW5BUEkiLCJsb2dJbiIsIndhdGNoTG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93Iiwid2F0Y2hGb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLE1BQU1BLFFBQVEsR0FBQyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFlO0FBQzFCLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQSxrQkFESjtBQVNILENBVkQ7O0FBWUFELFFBQVEsQ0FBQ0UsU0FBVCxHQUFtQjtBQUNmRCxXQUFTLEVBQUNFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGpCLENBQW5CO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFhLENBQUNSLFFBQUQsQ0FBL0IsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDTyxNQUFNUyxZQUFZLEdBQUM7QUFDdEJDLFdBQVMsRUFBQyxFQURZO0FBSXRCQyxZQUFVLEVBQUMsRUFKVztBQUt0QkMsYUFBVyxFQUFDLElBTFU7QUFNdEJDLGtCQUFnQixFQUFDLEtBTks7QUFPdEJDLGVBQWEsRUFBQyxLQVBRO0FBUXRCQyxnQkFBYyxFQUFDLElBUk87QUFTdEJDLGdCQUFjLEVBQUMsS0FUTztBQVV0QkMsYUFBVyxFQUFDLEtBVlU7QUFXdEJDLGNBQVksRUFBQyxJQVhTO0FBWXRCQyxtQkFBaUIsRUFBQyxLQVpJO0FBYXRCQyxnQkFBYyxFQUFDLEtBYk87QUFjdEJDLGlCQUFlLEVBQUMsSUFkTTtBQWV0QkMsbUJBQWlCLEVBQUMsS0FmSTtBQWdCdEJDLGdCQUFjLEVBQUMsS0FoQk87QUFpQnRCQyxpQkFBZSxFQUFDO0FBakJNLENBQW5CO0FBb0JBLE1BQU1DLGlCQUFpQixHQUFFQyxNQUFELElBQVdDLEtBQUssQ0FBQ0QsTUFBRCxDQUFMLENBQWNFLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCLE9BQUs7QUFDcEVDLElBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURnRTtBQUVwRUMsTUFBSSxFQUFDO0FBQ0RILE1BQUUsRUFBQ0MsOENBQU8sQ0FBQ0MsUUFBUixFQURGO0FBRURFLFlBQVEsRUFBRUMsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFYO0FBRlQsR0FGK0Q7QUFNcEVDLFNBQU8sRUFBRUgsNENBQUssQ0FBQ0ksS0FBTixDQUFZQyxTQUFaLEVBTjJEO0FBT3BFQyxRQUFNLEVBQUMsQ0FBQztBQUNKQyxPQUFHLEVBQUNQLDRDQUFLLENBQUNRLEtBQU4sQ0FBWUEsS0FBWjtBQURBLEdBQUQsQ0FQNkQ7QUFVcEVDLFVBQVEsRUFBQyxDQUFDO0FBQ05YLFFBQUksRUFBQztBQUNESCxRQUFFLEVBQUNDLDhDQUFPLENBQUNDLFFBQVIsRUFERjtBQUVERSxjQUFRLEVBQUVDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBWDtBQUZULEtBREM7QUFLTkMsV0FBTyxFQUFFSCw0Q0FBSyxDQUFDSSxLQUFOLENBQVlNLFFBQVo7QUFMSCxHQUFEO0FBVjJELENBQUwsQ0FBekIsQ0FBbkMsQyxDQW1CUDs7QUFFTyxNQUFNQyxrQkFBa0IsR0FBQyxvQkFBekI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBQyxvQkFBekI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBQyxvQkFBekI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBQyxxQkFBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBQyxxQkFBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBQyxxQkFBMUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBQyxxQkFBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBQyxxQkFBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBQyxxQkFBMUI7QUFFQSxNQUFNQyxPQUFPLEdBQUVDLElBQUQsS0FBUztBQUMxQkMsTUFBSSxFQUFFWCxnQkFEb0I7QUFFMUJVO0FBRjBCLENBQVQsQ0FBZDtBQUtBLE1BQU1FLFVBQVUsR0FBRUYsSUFBRCxLQUFTO0FBQzdCQyxNQUFJLEVBQUVSLG1CQUR1QjtBQUU3Qk87QUFGNkIsQ0FBVCxDQUFqQjs7QUFLUCxNQUFNRyxTQUFTLEdBQUVILElBQUQsS0FBUztBQUNyQjdCLElBQUUsRUFBQzZCLElBQUksQ0FBQzdCLEVBRGE7QUFFckJRLFNBQU8sRUFBQ3FCLElBQUksQ0FBQ3JCLE9BRlE7QUFHckJMLE1BQUksRUFBQztBQUNESCxNQUFFLEVBQUMsQ0FERjtBQUVESSxZQUFRLEVBQUM7QUFGUixHQUhnQjtBQU9yQk8sUUFBTSxFQUFDLEVBUGM7QUFRckJHLFVBQVEsRUFBRTtBQVJXLENBQVQsQ0FBaEI7O0FBV0EsTUFBTW1CLFlBQVksR0FBRUosSUFBRCxLQUFTO0FBQ3hCN0IsSUFBRSxFQUFDQyw4Q0FBTyxDQUFDQyxRQUFSLEVBRHFCO0FBRXhCTSxTQUFPLEVBQUNxQixJQUZnQjtBQUd4QjFCLE1BQUksRUFBQztBQUNESCxNQUFFLEVBQUMsQ0FERjtBQUVESSxZQUFRLEVBQUM7QUFGUjtBQUhtQixDQUFULENBQW5COztBQVNBLE1BQU04QixXQUFXLEdBQUMsQ0FBQ0MsS0FBSyxHQUFDeEQsWUFBUCxFQUFvQnlELE1BQXBCLEtBQThCQyw0Q0FBTyxDQUFDRixLQUFELEVBQVFHLEtBQUQsSUFBUztBQUMvRCxVQUFPRixNQUFNLENBQUNOLElBQWQ7QUFDSSxTQUFLZCxrQkFBTDtBQUNJc0IsV0FBSyxDQUFDdkQsZ0JBQU4sR0FBdUIsSUFBdkI7QUFDQXVELFdBQUssQ0FBQ3RELGFBQU4sR0FBb0IsS0FBcEI7QUFDQXNELFdBQUssQ0FBQ3JELGNBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFFSixTQUFLZ0Msa0JBQUw7QUFDSXFCLFdBQUssQ0FBQzFELFNBQU4sR0FBZ0J3RCxNQUFNLENBQUNQLElBQVAsQ0FBWVUsTUFBWixDQUFtQkQsS0FBSyxDQUFDMUQsU0FBekIsQ0FBaEI7QUFDQTBELFdBQUssQ0FBQ3ZELGdCQUFOLEdBQXVCLEtBQXZCO0FBQ0F1RCxXQUFLLENBQUN0RCxhQUFOLEdBQW9CLElBQXBCO0FBQ0FzRCxXQUFLLENBQUN4RCxXQUFOLEdBQWtCd0QsS0FBSyxDQUFDMUQsU0FBTixDQUFnQjRELE1BQWhCLEdBQXVCLEVBQXpDO0FBQ0E7O0FBRUosU0FBS3RCLGtCQUFMO0FBQ0lvQixXQUFLLENBQUN2RCxnQkFBTixHQUF1QixLQUF2QjtBQUNBdUQsV0FBSyxDQUFDdEQsYUFBTixHQUFvQixLQUFwQjtBQUNBc0QsV0FBSyxDQUFDckQsY0FBTixHQUFxQm1ELE1BQU0sQ0FBQ0ssS0FBNUI7QUFDQTs7QUFFSixTQUFLdEIsZ0JBQUw7QUFDSW1CLFdBQUssQ0FBQ3BELGNBQU4sR0FBcUIsSUFBckI7QUFDQW9ELFdBQUssQ0FBQ25ELFdBQU4sR0FBa0IsS0FBbEI7QUFDQW1ELFdBQUssQ0FBQ2xELFlBQU4sR0FBbUIsSUFBbkI7QUFDQTs7QUFFSixTQUFLZ0MsZ0JBQUw7QUFDSWtCLFdBQUssQ0FBQzFELFNBQU4sQ0FBZ0I4RCxPQUFoQixDQUF3QlYsU0FBUyxDQUFDSSxNQUFNLENBQUNQLElBQVIsQ0FBakM7QUFDQVMsV0FBSyxDQUFDcEQsY0FBTixHQUFxQixLQUFyQjtBQUNBb0QsV0FBSyxDQUFDbkQsV0FBTixHQUFrQixJQUFsQjtBQUNBOztBQUVKLFNBQUtrQyxnQkFBTDtBQUNJaUIsV0FBSyxDQUFDcEQsY0FBTixHQUFxQixLQUFyQjtBQUNBb0QsV0FBSyxDQUFDbkQsV0FBTixHQUFrQixLQUFsQjtBQUNBbUQsV0FBSyxDQUFDbEQsWUFBTixHQUFtQmdELE1BQU0sQ0FBQ0ssS0FBMUI7QUFDQTs7QUFFSixTQUFLbkIsbUJBQUw7QUFDSWdCLFdBQUssQ0FBQ2pELGlCQUFOLEdBQXdCLElBQXhCO0FBQ0FpRCxXQUFLLENBQUNoRCxjQUFOLEdBQXFCLEtBQXJCO0FBQ0FnRCxXQUFLLENBQUMvQyxlQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBRUosU0FBS2dDLG1CQUFMO0FBQ0ksWUFBTW9CLElBQUksR0FBQ0wsS0FBSyxDQUFDMUQsU0FBTixDQUFnQmdFLElBQWhCLENBQXNCQyxDQUFELElBQUtBLENBQUMsQ0FBQzdDLEVBQUYsS0FBT29DLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZaUIsTUFBN0MsQ0FBWDtBQUNBSCxVQUFJLENBQUM3QixRQUFMLENBQWM0QixPQUFkLENBQXNCVCxZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZckIsT0FBYixDQUFsQztBQUNBOEIsV0FBSyxDQUFDakQsaUJBQU4sR0FBd0IsS0FBeEI7QUFDQWlELFdBQUssQ0FBQ2hELGNBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFFSixTQUFLa0MsbUJBQUw7QUFDSWMsV0FBSyxDQUFDakQsaUJBQU4sR0FBd0IsS0FBeEI7QUFDQWlELFdBQUssQ0FBQ2hELGNBQU4sR0FBcUIsS0FBckI7QUFDQWdELFdBQUssQ0FBQy9DLGVBQU4sR0FBc0I2QyxNQUFNLENBQUNLLEtBQTdCO0FBQ0E7O0FBRUosU0FBS2hCLG1CQUFMO0FBQ0lhLFdBQUssQ0FBQzlDLGlCQUFOLEdBQXdCLElBQXhCO0FBQ0E4QyxXQUFLLENBQUM3QyxjQUFOLEdBQXFCLEtBQXJCO0FBQ0E2QyxXQUFLLENBQUM1QyxlQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBRUosU0FBS2dDLG1CQUFMO0FBQ0lZLFdBQUssQ0FBQzFELFNBQU4sR0FBaUIwRCxLQUFLLENBQUMxRCxTQUFOLENBQWdCbUUsTUFBaEIsQ0FBd0JGLENBQUQsSUFBS0EsQ0FBQyxDQUFDN0MsRUFBRixLQUFPb0MsTUFBTSxDQUFDUCxJQUExQyxDQUFqQixFQUNBUyxLQUFLLENBQUM5QyxpQkFBTixHQUF3QixLQUR4QixFQUVBOEMsS0FBSyxDQUFDN0MsY0FBTixHQUFxQixJQUZyQjtBQUdBOztBQUVKLFNBQUtrQyxtQkFBTDtBQUNJVyxXQUFLLENBQUM5QyxpQkFBTixHQUF3QixLQUF4QixFQUNBOEMsS0FBSyxDQUFDN0MsY0FBTixHQUFxQixLQURyQixFQUVBNkMsS0FBSyxDQUFDNUMsZUFBTixHQUFzQjBDLE1BQU0sQ0FBQ0ssS0FGN0I7QUFHQTs7QUFFSjtBQUFTO0FBM0ViO0FBNkVQLENBOUVzRCxDQUF2RDs7QUFnRmVQLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsTUFBTWMsV0FBVyxHQUFDQyw2REFBZSxDQUFDO0FBQzlCQyxNQUFJLEVBQUUsQ0FBQ2YsS0FBSyxHQUFDLEVBQVAsRUFBVUMsTUFBVixLQUFtQjtBQUN6QixZQUFPQSxNQUFNLENBQUNOLElBQWQ7QUFDSSxXQUFLcUIsMERBQUw7QUFDSSwrQ0FBVWhCLEtBQVYsR0FBbUJDLE1BQU0sQ0FBQ2dCLE9BQTFCOztBQUVKO0FBQ0ksZUFBT2pCLEtBQVA7QUFMUjtBQU9DLEdBVDZCO0FBVTlCa0IsbUVBVjhCO0FBVzlCbkIsbUVBQVdBO0FBWG1CLENBQUQsQ0FBakM7QUFjZWMsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVPLE1BQU1yRSxZQUFZLEdBQUM7QUFDdEIyRSxZQUFVLEVBQUUsS0FEVTtBQUNIO0FBQ25CQyxhQUFXLEVBQUUsS0FGUztBQUVGO0FBQ3BCQyxZQUFVLEVBQUMsSUFIVztBQUdMO0FBRWpCQyxjQUFZLEVBQUUsS0FMUTtBQUtEO0FBQ3JCQyxhQUFXLEVBQUMsS0FOVTtBQU1IO0FBQ25CQyxhQUFXLEVBQUMsSUFQVTtBQU9KO0FBRWxCQyxlQUFhLEVBQUUsS0FUTztBQVNBO0FBQ3RCQyxZQUFVLEVBQUMsS0FWVztBQVVKO0FBQ2xCQyxhQUFXLEVBQUMsSUFYVTtBQVdKO0FBRWxCQyx1QkFBcUIsRUFBRSxLQWJEO0FBYVE7QUFDOUJDLG9CQUFrQixFQUFDLEtBZEc7QUFjSTtBQUMxQkMscUJBQW1CLEVBQUMsSUFmRTtBQWVJO0FBRTFCQyxlQUFhLEVBQUUsS0FqQk87QUFpQkE7QUFDdEJDLFlBQVUsRUFBQyxLQWxCVztBQWtCSjtBQUNsQkMsYUFBVyxFQUFDLElBbkJVO0FBbUJKO0FBRWxCQyxpQkFBZSxFQUFFLEtBckJLO0FBcUJFO0FBQ3hCQyxjQUFZLEVBQUMsS0F0QlM7QUFzQkY7QUFDcEJDLGVBQWEsRUFBQyxJQXZCUTtBQXVCRjtBQUlwQkMsSUFBRSxFQUFDLElBM0JtQjtBQTRCdEJDLFlBQVUsRUFBQyxFQTVCVztBQTZCdEJDLFdBQVMsRUFBQztBQTdCWSxDQUFuQjtBQWdDQSxNQUFNQyxjQUFjLEdBQUMsZ0JBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFDLGdCQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBQyxnQkFBckI7QUFFQSxNQUFNQyxlQUFlLEdBQUMsaUJBQXRCO0FBQ0EsTUFBTUMsZUFBZSxHQUFDLGlCQUF0QjtBQUNBLE1BQU1DLGVBQWUsR0FBQyxpQkFBdEI7QUFFQSxNQUFNQyxlQUFlLEdBQUMsaUJBQXRCO0FBQ0EsTUFBTUMsZUFBZSxHQUFDLGlCQUF0QjtBQUNBLE1BQU1DLGVBQWUsR0FBQyxpQkFBdEI7QUFFQSxNQUFNQyx1QkFBdUIsR0FBQyx5QkFBOUI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBQyx5QkFBOUI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBQyx5QkFBOUI7QUFFQSxNQUFNQyxjQUFjLEdBQUMsZ0JBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFDLGdCQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBQyxnQkFBckI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBQyxrQkFBdkI7QUFFQSxNQUFNQyxjQUFjLEdBQUMsZ0JBQXJCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUMsbUJBQXhCOztBQUVQLE1BQU1DLFNBQVMsR0FBRWxFLElBQUQsb0NBQ1RBLElBRFM7QUFFWnpCLFVBQVEsRUFBQyxJQUZHO0FBR1pKLElBQUUsRUFBQyxDQUhTO0FBSVpnRyxPQUFLLEVBQUUsQ0FBQztBQUFDaEcsTUFBRSxFQUFDO0FBQUosR0FBRCxDQUpLO0FBS1ppRyxZQUFVLEVBQUMsQ0FBQztBQUFFN0YsWUFBUSxFQUFDO0FBQVgsR0FBRCxFQUFtQjtBQUFFQSxZQUFRLEVBQUM7QUFBWCxHQUFuQixDQUxDO0FBTVo4RixXQUFTLEVBQUMsQ0FBQztBQUFFOUYsWUFBUSxFQUFDO0FBQVgsR0FBRCxFQUFtQjtBQUFFQSxZQUFRLEVBQUM7QUFBWCxHQUFuQjtBQU5FLEVBQWhCLEMsQ0FTQTs7O0FBQ08sTUFBTStGLGtCQUFrQixHQUFDLENBQUM7QUFBQ3RFO0FBQUQsQ0FBRCxLQUFVO0FBQ3RDLFNBQU07QUFDRkMsUUFBSSxFQUFDNkMsY0FESDtBQUVGOUM7QUFGRSxHQUFOO0FBSUgsQ0FMTTtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU11RSxtQkFBbUIsR0FBQyxNQUFJO0FBQ2pDLFNBQU07QUFDRnRFLFFBQUksRUFBQ2dEO0FBREgsR0FBTjtBQUdILENBSk07QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU11QixtQkFBbUIsR0FBQyxNQUFJO0FBQ2pDLFNBQU07QUFDRnZFLFFBQUksRUFBQ21EO0FBREgsR0FBTjtBQUdILENBSk07O0FBTVAsTUFBTTVCLFdBQVcsR0FBQyxDQUFDbEIsS0FBSyxHQUFDeEQsWUFBUCxFQUFvQnlELE1BQXBCLEtBQTZCO0FBQzNDLFNBQU9DLDRDQUFPLENBQUNGLEtBQUQsRUFBUUcsS0FBRCxJQUFTO0FBQzFCLFlBQU9GLE1BQU0sQ0FBQ04sSUFBZDtBQUNJLFdBQUt5RCxjQUFMO0FBQ0lqRCxhQUFLLENBQUM0QixhQUFOLEdBQW9CLElBQXBCO0FBQ0E1QixhQUFLLENBQUM2QixVQUFOLEdBQWlCLEtBQWpCO0FBQ0E3QixhQUFLLENBQUM4QixXQUFOLEdBQWtCLElBQWxCO0FBQ0E7O0FBRUosV0FBS29CLGNBQUw7QUFDSWxELGFBQUssQ0FBQzRCLGFBQU4sR0FBb0IsS0FBcEI7QUFDQTVCLGFBQUssQ0FBQzZCLFVBQU4sR0FBaUIsSUFBakI7QUFDQTdCLGFBQUssQ0FBQ2tDLEVBQU4sQ0FBU3lCLFVBQVQsQ0FBb0JLLElBQXBCLENBQXlCO0FBQUN0RyxZQUFFLEVBQUNvQyxNQUFNLENBQUNQO0FBQVgsU0FBekI7QUFDQTs7QUFFSixXQUFLNEQsY0FBTDtBQUNJbkQsYUFBSyxDQUFDNEIsYUFBTixHQUFvQixLQUFwQjtBQUNBNUIsYUFBSyxDQUFDNkIsVUFBTixHQUFpQixLQUFqQjtBQUNBN0IsYUFBSyxDQUFDOEIsV0FBTixHQUFrQmhDLE1BQU0sQ0FBQ0ssS0FBekI7QUFDQTs7QUFFSixXQUFLaUQsZ0JBQUw7QUFDSXBELGFBQUssQ0FBQytCLGVBQU4sR0FBc0IsSUFBdEI7QUFDQS9CLGFBQUssQ0FBQ2dDLFlBQU4sR0FBbUIsS0FBbkI7QUFDQWhDLGFBQUssQ0FBQ2lDLGFBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFFSixXQUFLb0IsZ0JBQUw7QUFDSXJELGFBQUssQ0FBQytCLGVBQU4sR0FBc0IsS0FBdEI7QUFDQS9CLGFBQUssQ0FBQ2dDLFlBQU4sR0FBbUIsSUFBbkI7QUFDQWhDLGFBQUssQ0FBQ2tDLEVBQU4sQ0FBU3lCLFVBQVQsR0FBb0IzRCxLQUFLLENBQUNrQyxFQUFOLENBQVN5QixVQUFULENBQW9CbEQsTUFBcEIsQ0FBNEJGLENBQUQsSUFBS0EsQ0FBQyxDQUFDN0MsRUFBRixLQUFPb0MsTUFBTSxDQUFDUCxJQUE5QyxDQUFwQjtBQUNBOztBQUVKLFdBQUsrRCxnQkFBTDtBQUNJdEQsYUFBSyxDQUFDK0IsZUFBTixHQUFzQixLQUF0QjtBQUNBL0IsYUFBSyxDQUFDZ0MsWUFBTixHQUFtQixLQUFuQjtBQUNBaEMsYUFBSyxDQUFDaUMsYUFBTixHQUFvQm5DLE1BQU0sQ0FBQ0ssS0FBM0I7QUFDQTs7QUFFSixXQUFLa0MsY0FBTDtBQUNJckMsYUFBSyxDQUFDaUIsV0FBTixHQUFrQixJQUFsQjtBQUNBakIsYUFBSyxDQUFDZ0IsVUFBTixHQUFpQixLQUFqQjtBQUNBaEIsYUFBSyxDQUFDa0IsVUFBTixHQUFpQixJQUFqQjtBQUNBOztBQUVKLFdBQUtvQixjQUFMO0FBQ0l0QyxhQUFLLENBQUNpQixXQUFOLEdBQWtCLEtBQWxCO0FBQ0FqQixhQUFLLENBQUNnQixVQUFOLEdBQWlCLElBQWpCO0FBQ0FoQixhQUFLLENBQUNrQyxFQUFOLEdBQVV1QixTQUFTLENBQUMzRCxNQUFNLENBQUNQLElBQVIsQ0FBbkI7QUFDQTs7QUFFSixXQUFLZ0QsY0FBTDtBQUNJdkMsYUFBSyxDQUFDaUIsV0FBTixHQUFrQixLQUFsQjtBQUNBakIsYUFBSyxDQUFDZ0IsVUFBTixHQUFpQixLQUFqQjtBQUNBaEIsYUFBSyxDQUFDa0IsVUFBTixHQUFpQnBCLE1BQU0sQ0FBQ0ssS0FBeEI7QUFDQTs7QUFFSixXQUFLcUMsZUFBTDtBQUNJeEMsYUFBSyxDQUFDbUIsWUFBTixHQUFtQixJQUFuQjtBQUNBbkIsYUFBSyxDQUFDb0IsV0FBTixHQUFrQixLQUFsQjtBQUNBcEIsYUFBSyxDQUFDZ0IsVUFBTixHQUFpQixLQUFqQjtBQUNBaEIsYUFBSyxDQUFDcUIsV0FBTixHQUFrQixJQUFsQjtBQUNBOztBQUVKLFdBQUtvQixlQUFMO0FBQ0l6QyxhQUFLLENBQUNtQixZQUFOLEdBQW1CLEtBQW5CO0FBQ0FuQixhQUFLLENBQUNvQixXQUFOLEdBQWtCLElBQWxCO0FBQ0FwQixhQUFLLENBQUNrQyxFQUFOLEdBQVUsSUFBVjtBQUNBOztBQUVKLFdBQUtRLGVBQUw7QUFDSTFDLGFBQUssQ0FBQ21CLFlBQU4sR0FBbUIsS0FBbkIsRUFDQW5CLEtBQUssQ0FBQ29CLFdBQU4sR0FBa0IsS0FEbEIsRUFFQXBCLEtBQUssQ0FBQ3FCLFdBQU4sR0FBbUJ2QixNQUFNLENBQUNLLEtBRjFCLEVBR0FILEtBQUssQ0FBQ2tDLEVBQU4sR0FBVSxJQUhWO0FBSUE7O0FBRUosV0FBS1MsZUFBTDtBQUNJM0MsYUFBSyxDQUFDc0IsYUFBTixHQUFvQixJQUFwQjtBQUNBdEIsYUFBSyxDQUFDdUIsVUFBTixHQUFpQixLQUFqQjtBQUNBdkIsYUFBSyxDQUFDd0IsV0FBTixHQUFrQixJQUFsQjtBQUNBOztBQUVKLFdBQUtvQixlQUFMO0FBQ0k1QyxhQUFLLENBQUNzQixhQUFOLEdBQW9CLEtBQXBCO0FBQ0F0QixhQUFLLENBQUN1QixVQUFOLEdBQWlCLElBQWpCO0FBQ0E7O0FBRUosV0FBS3NCLGVBQUw7QUFDSTdDLGFBQUssQ0FBQ3NCLGFBQU4sR0FBb0IsS0FBcEI7QUFDQXRCLGFBQUssQ0FBQ3VCLFVBQU4sR0FBaUIsS0FBakI7QUFDQXZCLGFBQUssQ0FBQ3dCLFdBQU4sR0FBa0IxQixNQUFNLENBQUNLLEtBQXpCO0FBQ0E7O0FBRUosV0FBSzJDLHVCQUFMO0FBQ0k5QyxhQUFLLENBQUN5QixxQkFBTixHQUE0QixJQUE1QjtBQUNBekIsYUFBSyxDQUFDMEIsa0JBQU4sR0FBeUIsS0FBekI7QUFDQTFCLGFBQUssQ0FBQzJCLG1CQUFOLEdBQTBCLElBQTFCO0FBQ0E7O0FBRUosV0FBS29CLHVCQUFMO0FBQ0kvQyxhQUFLLENBQUN5QixxQkFBTixHQUE0QixLQUE1QjtBQUNBekIsYUFBSyxDQUFDMEIsa0JBQU4sR0FBeUIsSUFBekI7QUFDQTs7QUFFSixXQUFLc0IsdUJBQUw7QUFDSWhELGFBQUssQ0FBQ3lCLHFCQUFOLEdBQTRCLEtBQTVCO0FBQ0F6QixhQUFLLENBQUMwQixrQkFBTixHQUF5QixLQUF6QjtBQUNBMUIsYUFBSyxDQUFDMkIsbUJBQU4sR0FBMEI3QixNQUFNLENBQUNLLEtBQWpDO0FBQ0E7O0FBRUosV0FBS29ELGNBQUw7QUFDSXZELGFBQUssQ0FBQ2tDLEVBQU4sQ0FBU3dCLEtBQVQsQ0FBZXRELE9BQWYsQ0FBdUI7QUFBQzFDLFlBQUUsRUFBQ29DLE1BQU0sQ0FBQ1A7QUFBWCxTQUF2QjtBQUNBOztBQUVKLFdBQUtpRSxpQkFBTDtBQUNJeEQsYUFBSyxDQUFDa0MsRUFBTixDQUFTd0IsS0FBVCxHQUFlMUQsS0FBSyxDQUFDa0MsRUFBTixDQUFTd0IsS0FBVCxDQUFlakQsTUFBZixDQUF1QkYsQ0FBRCxJQUFLQSxDQUFDLENBQUM3QyxFQUFGLEtBQU9vQyxNQUFNLENBQUNQLElBQXpDLENBQWY7QUFDQTs7QUFFSjtBQUFTO0FBckhiO0FBdUhILEdBeEhhLENBQWQ7QUF5SEgsQ0ExSEQ7O0FBNEhld0IsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDL09BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLFVBQVVrRCxRQUFWLEdBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksUUFBTUMsOERBQUcsQ0FBQyxDQUFFO0FBQ1JDLGlFQUFJLENBQUNDLDZDQUFELENBREUsRUFFTkQsK0RBQUksQ0FBQ0UsNkNBQUQsQ0FGRSxDQUFELENBQVQ7QUFNSCxDOzs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBR0EsU0FBU0MsWUFBVCxDQUFzQi9FLElBQXRCLEVBQTJCO0FBQ3ZCLFNBQU9nRiw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsWUFBVixFQUF1QmpGLElBQXZCLENBQVA7QUFDSDs7QUFDRCxVQUFVa0YsU0FBVixDQUFvQjNFLE1BQXBCLEVBQTJCO0FBQ3hCLE1BQUc7QUFDRixVQUFNNEUsZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNaEgsRUFBRSxHQUFDQyw4Q0FBTyxDQUFDQyxRQUFSLEVBQVQsQ0FGRSxDQUdGOztBQUNBLFVBQU0rRyw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUViLHdFQURBO0FBRU5ZLFVBQUksRUFBQ2xDLCtFQUFpQixDQUFDLEVBQUQ7QUFGaEIsS0FBRCxDQUFUO0FBSUEsR0FSRCxDQVNBLE9BQU11SCxHQUFOLEVBQVU7QUFDVCxVQUFNRCw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUVaLHdFQURBO0FBRU5XLFVBQUksRUFBRXFGLEdBQUcsQ0FBQ0MsUUFBSixDQUFhdEY7QUFGYixLQUFELENBQVQ7QUFJQTtBQUNIOztBQUNELFVBQVV1RixjQUFWLEdBQTBCO0FBQ3RCLFFBQU1DLG1FQUFRLENBQUMsSUFBRCxFQUFPckcsd0VBQVAsRUFBMkIrRixTQUEzQixDQUFkO0FBQ0g7O0FBRUQsU0FBU08sVUFBVCxDQUFvQnpGLElBQXBCLEVBQXlCO0FBQ3JCLFNBQU9nRiw0Q0FBSyxDQUFDbEUsSUFBTixDQUFXLFlBQVgsRUFBd0JkLElBQXhCLENBQVA7QUFDSDs7QUFDRCxVQUFVRCxPQUFWLENBQWtCUSxNQUFsQixFQUF5QjtBQUN0QixNQUFHO0FBQ0YsVUFBTTRFLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTWhILEVBQUUsR0FBQ0MsOENBQU8sQ0FBQ0MsUUFBUixFQUFULENBRkUsQ0FHRjs7QUFDQSxVQUFNK0csOERBQUcsQ0FBQztBQUNObkYsVUFBSSxFQUFFVixzRUFEQTtBQUVOUyxVQUFJLEVBQUM7QUFDRDdCLFVBREM7QUFFRFEsZUFBTyxFQUFDNEIsTUFBTSxDQUFDUDtBQUZkO0FBRkMsS0FBRCxDQUFUO0FBT0EsVUFBTW9GLDhEQUFHLENBQUM7QUFDTm5GLFVBQUksRUFBQytELG9FQURDO0FBRU5oRSxVQUFJLEVBQUM3QjtBQUZDLEtBQUQsQ0FBVDtBQUlBLEdBZkQsQ0FnQkEsT0FBTWtILEdBQU4sRUFBVTtBQUNULFVBQU1ELDhEQUFHLENBQUM7QUFDTm5GLFVBQUksRUFBRVQsc0VBREE7QUFFTlEsVUFBSSxFQUFFcUYsR0FBRyxDQUFDQyxRQUFKLENBQWF0RjtBQUZiLEtBQUQsQ0FBVDtBQUlBO0FBQ0g7O0FBQ0QsVUFBVTBGLFlBQVYsR0FBd0I7QUFDcEIsUUFBTUMscUVBQVUsQ0FBQ3JHLHNFQUFELEVBQW1CUyxPQUFuQixDQUFoQjtBQUNIOztBQUVELFNBQVM2RixhQUFULENBQXVCNUYsSUFBdkIsRUFBNEI7QUFDeEIsU0FBT2dGLDRDQUFLLENBQUNsRSxJQUFOLENBQVksY0FBYWQsSUFBSSxDQUFDaUIsTUFBTyxVQUFyQyxFQUErQ2pCLElBQS9DLENBQVA7QUFDSDs7QUFDRCxVQUFVRSxVQUFWLENBQXFCSyxNQUFyQixFQUE0QjtBQUN6QixNQUFHO0FBQ0YsVUFBTTRFLGdFQUFLLENBQUMsSUFBRCxDQUFYLENBREUsQ0FFRjs7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUVQLHlFQURBO0FBRU5NLFVBQUksRUFBRU8sTUFBTSxDQUFDUDtBQUZQLEtBQUQsQ0FBVDtBQUlBLEdBUEQsQ0FRQSxPQUFNcUYsR0FBTixFQUFVO0FBQ1QsVUFBTUQsOERBQUcsQ0FBQztBQUNObkYsVUFBSSxFQUFFTix5RUFEQTtBQUVOSyxVQUFJLEVBQUVxRixHQUFHLENBQUNDLFFBQUosQ0FBYXRGO0FBRmIsS0FBRCxDQUFUO0FBSUE7QUFDSDs7QUFDRCxVQUFVNkYsZUFBVixHQUEyQjtBQUN2QixRQUFNRixxRUFBVSxDQUFDbEcseUVBQUQsRUFBc0JTLFVBQXRCLENBQWhCO0FBQ0g7O0FBRUQsU0FBUzRGLGFBQVQsQ0FBdUI5RixJQUF2QixFQUE0QjtBQUN4QixTQUFPZ0YsNENBQUssQ0FBQ2UsTUFBTixDQUFhLFlBQWIsRUFBMEIvRixJQUExQixDQUFQO0FBQ0g7O0FBQ0QsVUFBVWdHLFVBQVYsQ0FBcUJ6RixNQUFyQixFQUE0QjtBQUN6QixNQUFHO0FBQ0YsVUFBTTRFLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTWhILEVBQUUsR0FBQ0MsOENBQU8sQ0FBQ0MsUUFBUixFQUFULENBRkUsQ0FHRjs7QUFDQSxVQUFNK0csOERBQUcsQ0FBQztBQUNObkYsVUFBSSxFQUFFSix5RUFEQTtBQUVORyxVQUFJLEVBQUNPLE1BQU0sQ0FBQ1A7QUFGTixLQUFELENBQVQ7QUFJQSxVQUFNb0YsOERBQUcsQ0FBQztBQUNObkYsVUFBSSxFQUFDZ0UsdUVBREM7QUFFTmpFLFVBQUksRUFBQ08sTUFBTSxDQUFDUDtBQUZOLEtBQUQsQ0FBVDtBQUlBLEdBWkQsQ0FhQSxPQUFNcUYsR0FBTixFQUFVO0FBQ1QsVUFBTUQsOERBQUcsQ0FBQztBQUNObkYsVUFBSSxFQUFFSCx5RUFEQTtBQUVORSxVQUFJLEVBQUVxRixHQUFHLENBQUNDLFFBQUosQ0FBYXRGO0FBRmIsS0FBRCxDQUFUO0FBSUE7QUFDSDs7QUFDRCxVQUFVaUcsZUFBVixHQUEyQjtBQUN2QixRQUFNTixxRUFBVSxDQUFDL0YseUVBQUQsRUFBc0JvRyxVQUF0QixDQUFoQjtBQUNIOztBQUVjLFVBQVVuQixRQUFWLEdBQW9CO0FBQy9CLFFBQU1GLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2MsWUFBRCxDQURFLEVBRU5kLCtEQUFJLENBQUNXLGNBQUQsQ0FGRSxFQUdOWCwrREFBSSxDQUFDaUIsZUFBRCxDQUhFLEVBSU5qQiwrREFBSSxDQUFDcUIsZUFBRCxDQUpFLENBQUQsQ0FBVDtBQU1ILEM7Ozs7Ozs7Ozs7OztBQzdIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQyxRQUFULEdBQW1CO0FBQ2YsU0FBT2xCLDRDQUFLLENBQUNsRSxJQUFOLENBQVcsWUFBWCxFQUF5QmQsSUFBekIsQ0FBUDtBQUNIOztBQUNELFVBQVVtRyxLQUFWLENBQWdCNUYsTUFBaEIsRUFBdUI7QUFDcEIsTUFBRztBQUNGLFVBQU00RSxnRUFBSyxDQUFDLElBQUQsQ0FBWCxDQURFLENBRUY7QUFDQTs7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUU4QyxvRUFEQTtBQUVOL0MsVUFBSSxFQUFFTyxNQUFNLENBQUNQO0FBRlAsS0FBRCxDQUFUO0FBSUEsR0FSRCxDQVNBLE9BQU1xRixHQUFOLEVBQVU7QUFBRTtBQUNYLFVBQU1ELDhEQUFHLENBQUM7QUFDTm5GLFVBQUksRUFBRStDLG9FQURBO0FBRU5wQyxXQUFLLEVBQUV5RSxHQUFHLENBQUNDLFFBQUosQ0FBYXRGO0FBRmQsS0FBRCxDQUFUO0FBSUE7QUFDSDs7QUFDRCxVQUFVb0csVUFBVixHQUFzQjtBQUNsQixRQUFNVCxxRUFBVSxDQUFDN0Msb0VBQUQsRUFBaUJxRCxLQUFqQixDQUFoQjtBQUNIOztBQUVELFNBQVNFLFNBQVQsR0FBb0I7QUFDaEIsU0FBT3JCLDRDQUFLLENBQUNsRSxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVXdGLE1BQVYsR0FBa0I7QUFDZixNQUFHO0FBQ0YsVUFBTW5CLGdFQUFLLENBQUMsSUFBRCxDQUFYLENBREUsQ0FFRjs7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUVpRCxxRUFBZUE7QUFEZixLQUFELENBQVQ7QUFHQSxHQU5ELENBT0EsT0FBTW1DLEdBQU4sRUFBVTtBQUNULFVBQU1ELDhEQUFHLENBQUM7QUFDTm5GLFVBQUksRUFBRWtELHFFQURBO0FBRU52QyxXQUFLLEVBQUV5RSxHQUFHLENBQUNDLFFBQUosQ0FBYXRGO0FBRmQsS0FBRCxDQUFUO0FBSUE7QUFDSDs7QUFDRCxVQUFVdUcsV0FBVixHQUF1QjtBQUNuQixRQUFNWixxRUFBVSxDQUFDMUMscUVBQUQsRUFBa0JxRCxNQUFsQixDQUFoQjtBQUNIOztBQUVELFNBQVNFLFNBQVQsR0FBb0I7QUFDaEIsU0FBT3hCLDRDQUFLLENBQUNsRSxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVTJGLE1BQVYsR0FBa0I7QUFDZixNQUFHO0FBQ0YsVUFBTXRCLGdFQUFLLENBQUMsSUFBRCxDQUFYLENBREUsQ0FFRjs7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUVvRCxxRUFBZUE7QUFEZixLQUFELENBQVQ7QUFHQSxHQU5ELENBT0EsT0FBTWdDLEdBQU4sRUFBVTtBQUNULFVBQU1ELDhEQUFHLENBQUM7QUFDTm5GLFVBQUksRUFBRXFELHFFQURBO0FBRU4xQyxXQUFLLEVBQUV5RSxHQUFHLENBQUNDLFFBQUosQ0FBYXRGO0FBRmQsS0FBRCxDQUFUO0FBSUE7QUFDSDs7QUFDRCxVQUFVMEcsV0FBVixHQUF1QjtBQUNuQixRQUFNZixxRUFBVSxDQUFDdkMscUVBQUQsRUFBa0JxRCxNQUFsQixDQUFoQjtBQUNIOztBQUVELFNBQVNFLFNBQVQsR0FBb0I7QUFDaEIsU0FBTzNCLDRDQUFLLENBQUNsRSxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVThGLE1BQVYsQ0FBaUJyRyxNQUFqQixFQUF3QjtBQUNyQixNQUFHO0FBQ0YsVUFBTTRFLGdFQUFLLENBQUMsSUFBRCxDQUFYLENBREUsQ0FFRjs7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUUwRCxvRUFEQTtBQUVOM0QsVUFBSSxFQUFDTyxNQUFNLENBQUNQO0FBRk4sS0FBRCxDQUFUO0FBSUEsR0FQRCxDQVFBLE9BQU1xRixHQUFOLEVBQVU7QUFDVCxVQUFNRCw4REFBRyxDQUFDO0FBQ05uRixVQUFJLEVBQUUyRCxvRUFEQTtBQUVOaEQsV0FBSyxFQUFFeUUsR0FBRyxDQUFDQyxRQUFKLENBQWF0RjtBQUZkLEtBQUQsQ0FBVDtBQUlBO0FBQ0g7O0FBQ0QsVUFBVTZHLFdBQVYsR0FBdUI7QUFDbkIsUUFBTWxCLHFFQUFVLENBQUNqQyxvRUFBRCxFQUFpQmtELE1BQWpCLENBQWhCO0FBQ0g7O0FBRUQsU0FBU0UsV0FBVCxHQUFzQjtBQUNsQixTQUFPOUIsNENBQUssQ0FBQ2xFLElBQU4sQ0FBVyxlQUFYLENBQVA7QUFDSDs7QUFDRCxVQUFVaUcsUUFBVixDQUFtQnhHLE1BQW5CLEVBQTBCO0FBQ3ZCLE1BQUc7QUFDRixVQUFNNEUsZ0VBQUssQ0FBQyxJQUFELENBQVgsQ0FERSxDQUVGOztBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTm5GLFVBQUksRUFBRTZELHNFQURBO0FBRU45RCxVQUFJLEVBQUNPLE1BQU0sQ0FBQ1A7QUFGTixLQUFELENBQVQ7QUFJQSxHQVBELENBUUEsT0FBTXFGLEdBQU4sRUFBVTtBQUNULFVBQU1ELDhEQUFHLENBQUM7QUFDTm5GLFVBQUksRUFBRThELHNFQURBO0FBRU5uRCxXQUFLLEVBQUV5RSxHQUFHLENBQUNDLFFBQUosQ0FBYXRGO0FBRmQsS0FBRCxDQUFUO0FBSUE7QUFDSDs7QUFDRCxVQUFVZ0gsYUFBVixHQUF5QjtBQUNyQixRQUFNckIscUVBQVUsQ0FBQzlCLHNFQUFELEVBQW1Ca0QsUUFBbkIsQ0FBaEI7QUFDSDs7QUFFYyxVQUFVakMsUUFBVixHQUFvQjtBQUMvQixRQUFNSCw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNpQyxXQUFELENBREUsRUFFTmpDLCtEQUFJLENBQUNvQyxhQUFELENBRkUsRUFHTnBDLCtEQUFJLENBQUN3QixVQUFELENBSEUsRUFJTnhCLCtEQUFJLENBQUMyQixXQUFELENBSkUsRUFLTjNCLCtEQUFJLENBQUM4QixXQUFELENBTEUsQ0FBRCxDQUFUO0FBT0gsQzs7Ozs7Ozs7Ozs7O0FDcElEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU8sZ0JBQWdCLEdBQUMsQ0FBQztBQUFDQyxVQUFEO0FBQVdDO0FBQVgsQ0FBRCxLQUEwQkMsSUFBRCxJQUFTN0csTUFBRCxJQUFVO0FBQzlEO0FBQ0EsU0FBTzZHLElBQUksQ0FBQzdHLE1BQUQsQ0FBWDtBQUNILENBSEQ7O0FBS0EsTUFBTThHLGNBQWMsR0FBQyxNQUFJO0FBQ3JCLFFBQU1DLGNBQWMsR0FBQ0MsaURBQW9CLEVBQXpDO0FBQ0EsUUFBTUMsV0FBVyxHQUFFLENBQUNGLGNBQUQsRUFBZ0JMLGdCQUFoQixDQUFuQjtBQUNBLFFBQU1RLFFBQVEsR0FBQyxRQUNUQyxTQURTLEdBRVRDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGekI7QUFJQSxRQUFNSyxLQUFLLEdBQUNDLHlEQUFXLENBQUNDLDZEQUFELEVBQVVOLFFBQVYsQ0FBdkI7QUFDQUksT0FBSyxDQUFDRyxRQUFOLEdBQWVWLGNBQWMsQ0FBQ1csR0FBZixDQUFtQnZELDhDQUFuQixDQUFmO0FBQ0EsU0FBT21ELEtBQVA7QUFDSCxDQVZEOztBQVlBLE1BQU1sTCxPQUFPLEdBQUd1TCx3RUFBYSxDQUFDYixjQUFELEVBQWlCO0FBQUNjLE9BQUs7QUFBTixDQUFqQixDQUE3QjtBQUVleEwsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xyXG5cclxuLy/rqqjrk6Ag7Lu07Y+s64SM7Yq4KHBhZ2VzKeyXkOyEnCDqs7XthrXsnbTrqbQg7Jes6riwIOuEo+qzoFxyXG5jb25zdCBOb2RlQmlyZD0oe0NvbXBvbmVudH0pPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXM9e1xyXG4gICAgQ29tcG9uZW50OlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7IiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuLy/rsLHsl5Trk5ztlZzthYwg642w7J207YSwIOq1rOyhsCDrr7jrpqwg67Cb7JWE64aT6riwXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbWFpblBvc3RzOltcclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG4gICAgaGFzTW9yZVBvc3Q6dHJ1ZSxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6bnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6bnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6bnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0PShudW1iZXIpPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpPT4oe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6W3tcclxuICAgICAgICBzcmM6ZmFrZXIuaW1hZ2UuaW1hZ2UoKVxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czpbe1xyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpXHJcblxyXG4vL2luaXRpYWxTdGF0ZS5tYWluUG9zdHM9aW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMTApKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1Q9J0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1M9J0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkU9J0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVD0nQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTPSdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkU9J0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1Q9J0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUz0nQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFPSdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUPSdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1M9J1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRT0nUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50PShkYXRhKT0+KHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0PShkYXRhKT0+KHtcclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEuY29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6W10sXHJcbiAgICBDb21tZW50czogW11cclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOifso7zrr7gnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBwb3N0UmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9YWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3Q9ZHJhZnQubWFpblBvc3RzLmxlbmd0aDw1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3Q9ZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7IiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2VyUmVkdWNlcic7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tICcuL3Bvc3RSZWR1Y2VyJztcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcclxuXHJcblxyXG4vL+ydtOyghOyDge2DnCwgYWN0aW9u7J2EIO2Gte2VtCDri6TsnYzsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByb290UmVkdWNlcj1jb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcm9vdDogKHN0YXRlPXt9LGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm57Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyUmVkdWNlcixcclxuICAgIHBvc3RSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSwgLy/roZzqt7jsnbgg7ISx6rO1XHJcbiAgICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5FcnJvcjpudWxsLCAvL+uhnOq3uOyduCDsi6TtjKhcclxuXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGlzTG9nZ2VkT3V0OmZhbHNlLCAvL+uhnOq3uOyVhOybgyDshLHqs7VcclxuICAgIGxvZ091dEVycm9yOm51bGwsIC8v66Gc6re47JWE7JuDIOyLpO2MqFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsIC8v7ZqM7JuQ6rCA7J6FIOyEseqztVxyXG4gICAgc2lnblVwRXJyb3I6bnVsbCwgLy/tmozsm5DqsIDsnoUg7Iuk7YyoXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOmZhbHNlLCAvL+uLieuEpOyehCDrs4Dqsr0g7ISx6rO1XHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGwsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi6TtjKhcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy/tjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOmZhbHNlLCAvL+2MlOuhnOyasCDshLHqs7VcclxuICAgIGZvbGxvd0Vycm9yOm51bGwsIC8v7YyU66Gc7JqwIOyLpO2MqFxyXG5cclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8v7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOmZhbHNlLCAvL+yWuO2MlOuhnOyasCDshLHqs7VcclxuICAgIHVuZm9sbG93RXJyb3I6bnVsbCwgLy/slrjtjJTroZzsmrAg7Iuk7YyoXHJcblxyXG4gICAgXHJcblxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPVwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTPVwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFPVwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1Q9XCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUz1cIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFPVwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUPVwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1M9XCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRT1cIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUPVwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTPVwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFPVwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVD1cIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUz1cIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRT1cIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVD1cIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1M9XCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFPVwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FPVwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FPVwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlcj0oZGF0YSk9Pih7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6J+yjvOuvuCcsXHJcbiAgICBpZDoxLFxyXG4gICAgUG9zdHM6IFt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbeyBuaWNrbmFtZTon67aA6riw7LSIJ30seyBuaWNrbmFtZTon7KCc66Gc7LSIJ31dLFxyXG4gICAgRm9sbG93ZXJzOlt7IG5pY2tuYW1lOifrtoDquLDstIgnfSx7IG5pY2tuYW1lOifsoJzroZzstIgnfV1cclxufSlcclxuXHJcbi8vYWN0aW9uIGNyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbj0oe2RhdGF9KT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fU1VDQ0VTUycsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb249KHtkYXRhfSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOidMT0dfSU5fRkFJTFVSRScsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfU1VDQ0VTUydcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVRfRkFJTFVSRSdcclxuICAgIH1cclxufSovXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbj0oKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6U0lHTl9VUF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOmFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncz1kcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodik9PnYuaWQhPT1hY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbj10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0PXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0PXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQ9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dD1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPSBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cz1kcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7IiwiaW1wb3J0IHthbGwsIGZvcmt9ZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCl7XHJcbi8vY29uc3QgZ2V0PSBmdW5jdGlvbiogKCkge307IEdlbmVyYXRvcu2VqOyImFxyXG4vL2dlbigpLm5leHQoKe2VmOuptOyEnCB5aWVsZO2CpOybjOuTnCDrk7HsnqVcclxuLy95aWVsZOqwgCDspJHri6jsoJDsnbTrnbzqs6Ag7IOd6rCB7ZWY66m0IOuQqC4gbmV4dO2VnOuyiOyXkCDtlZjrgpjslKkg7Iuk7ZaJXHJcbi8v7Iuk7KCEIOumrOyVoe2KuCDtlITroZzqt7jrnpjrsI0g7ZWE6riwIOywuOqzoC4gXHJcbiAgICB5aWVsZCBhbGwoWyAvL+ygnOuEiOugiOydtO2EsCDtlajsiJjrk6TsnYQg64+Z7Iuc7JeQIOyLpO2WiVxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSk7XHJcblxyXG5cclxufSIsImltcG9ydCB7YWxsLGNhbGwsZm9yaywgdGFrZUxhdGVzdCwgcHV0LCBkZWxheSwgdGhyb3R0bGV9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCxBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxSRU1PVkVfUE9TVF9SRVFVRVNUXHJcbiAgICAsTE9BRF9QT1NUU19GQUlMVVJFLExPQURfUE9TVFNfUkVRVUVTVCxMT0FEX1BPU1RTX1NVQ0NFU1MsIGdlbmVyYXRlRHVtbXlQb3N0XHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXInO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyUmVkdWNlcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy4vYXBpL3Bvc3QnLGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKXtcclxuICAgdHJ5e1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZD1zaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdD15aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTpnZW5lcmF0ZUR1bW15UG9zdCgxMClcclxuICAgIH0pXHJcbiAgIH1cclxuICAgY2F0Y2goZXJyKXsgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpe1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNDAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy4vYXBpL3Bvc3QnLGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbil7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgaWQ9c2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBjb250ZW50OmFjdGlvbi5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTpBRERfUE9TVF9UT19NRSxcclxuICAgICAgICBkYXRhOmlkXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7IFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAuL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbil7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxuICAgY2F0Y2goZXJyKXsgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSgnLi9hcGkvcG9zdCcsZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKXtcclxuICAgdHJ5e1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZD1zaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdD15aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOmFjdGlvbi5kYXRhXHJcbiAgICB9KVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOlJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxuICAgY2F0Y2goZXJyKXsgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdClcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHthbGwsY2FsbCxmb3JrLCB0YWtlTGF0ZXN0LHB1dCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLExPR19PVVRfUkVRVUVTVCxMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCxTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFVORk9MTE9XX0ZBSUxVUkUsVU5GT0xMT1dfU1VDQ0VTU1xyXG59ZnJvbSAnLi4vcmVkdWNlcnMvdXNlclJlZHVjZXInO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbil7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy/shJzrsoTqsIAg7JeG7Jy864uI6rmMIOyVhOuemOuKlCDso7zshJ3sspjrpqxcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy9sb2dJbkFQSeyLpO2WiVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpeyAvL0FQSeyLpO2WiSDtm4Qg7ISc67KEIOyalOyyrSDsi6TtjKgg7IucIOydtOu2gOu2hCDsi6TtlolcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxufVxyXG5mdW5jdGlvbiogbG9nT3V0KCl7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChsb2dPdXRBUEkpOyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWdudXAnKTtcclxufVxyXG5mdW5jdGlvbiogc2lnblVwKCl7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChzaWduVXBBUEkpOyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnKTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbil7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChmb2xsb3dBUEkpOyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTphY3Rpb24uZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpO1xyXG59XHJcbmZ1bmN0aW9uKiB1bkZvbGxvdyhhY3Rpb24pe1xyXG4gICB0cnl7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwoZm9sbG93QVBJKTsgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTphY3Rpb24uZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuRm9sbG93KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKVxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlPSh7ZGlzcGF0Y2gsIGdldFN0YXRlfSk9PiAobmV4dCk9PihhY3Rpb24pPT57XHJcbiAgICAvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZT0oKT0+e1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmU9Y3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzPSBbc2FnYU1pZGRsZXdhcmUsbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlcj1wcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICAgIGNvbnN0IHN0b3JlPWNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrPXNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7ZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=