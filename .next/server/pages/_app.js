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
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(() => ({
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
})));
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiY29uY2F0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwic2VudGVuY2UiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicG9zdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsInBvc3QiLCJmaW5kIiwidiIsInBvc3RJZCIsImZpbHRlciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlclJlZHVjZXIiLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nSW4iLCJsb2dJbkVycm9yIiwiaXNMb2dnaW5nT3V0IiwiaXNMb2dnZWRPdXQiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJheGlvcyIsImRlbGF5IiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwibG9nSW5BUEkiLCJsb2dJbiIsIndhdGNoTG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xyXG5cclxuLy/rqqjrk6Ag7Lu07Y+s64SM7Yq4KHBhZ2VzKeyXkOyEnCDqs7XthrXsnbTrqbQg7Jes6riwIOuEo+qzoFxyXG5jb25zdCBOb2RlQmlyZD0oe0NvbXBvbmVudH0pPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXM9e1xyXG4gICAgQ29tcG9uZW50OlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7IiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuLy/rsLHsl5Trk5ztlZzthYwg642w7J207YSwIOq1rOyhsCDrr7jrpqwg67Cb7JWE64aT6riwXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbWFpblBvc3RzOlt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgSW1hZ2VzOlt7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOidodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAzLzI4LzEyLzM1L2NhdC0xMjg1NjM0XzEyODAucG5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTQvMTEvMzAvMTQvMTEvY2F0LTU1MTU1NF85NjBfNzIwLmpwZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE0LzA0LzEzLzIwLzQ5L2NhdC0zMjMyNjJfMTI4MC5qcGcnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6W3tcclxuICAgICAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbTrhKTsmpQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfqs6DslpHsnbQnXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6bnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6ZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6bnVsbCxcclxufVxyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cz1pbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuICAgIEFycmF5KDIwKS5maWxsKCkubWFwKCgpPT4oe1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAgICAgSW1hZ2VzOlt7XHJcbiAgICAgICAgICAgIHNyYzpmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6W3tcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBpZDpzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgfV0sXHJcbiAgICB9KSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUPSdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1M9J0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRT0nQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVD0nQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTPSdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkU9J0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1Q9J1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUz0nUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFPSdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0PShkYXRhKT0+KHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQ9KGRhdGEpPT4oe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3Q9KGRhdGEpPT4oe1xyXG4gICAgaWQ6ZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6ZGF0YS5jb250ZW50LFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZTon7KO866+4J1xyXG4gICAgfSxcclxuICAgIEltYWdlczpbXSxcclxuICAgIENvbW1lbnRzOiBbXVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50PShkYXRhKT0+KHtcclxuICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6ZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yjvOuvuCdcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IHBvc3RSZWR1Y2VyPShzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+IHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3Q9ZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdFJlZHVjZXI7IiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2VyUmVkdWNlcic7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tICcuL3Bvc3RSZWR1Y2VyJztcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcclxuXHJcblxyXG4vL+ydtOyghOyDge2DnCwgYWN0aW9u7J2EIO2Gte2VtCDri6TsnYzsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByb290UmVkdWNlcj1jb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcm9vdDogKHN0YXRlPXt9LGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm57Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyUmVkdWNlcixcclxuICAgIHBvc3RSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSwgLy/roZzqt7jsnbgg7ISx6rO1XHJcbiAgICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5FcnJvcjpudWxsLCAvL+uhnOq3uOyduCDsi6TtjKhcclxuXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGlzTG9nZ2VkT3V0OmZhbHNlLCAvL+uhnOq3uOyVhOybgyDshLHqs7VcclxuICAgIGxvZ091dEVycm9yOm51bGwsIC8v66Gc6re47JWE7JuDIOyLpO2MqFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsIC8v7ZqM7JuQ6rCA7J6FIOyEseqztVxyXG4gICAgc2lnblVwRXJyb3I6bnVsbCwgLy/tmozsm5DqsIDsnoUg7Iuk7YyoXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOmZhbHNlLCAvL+uLieuEpOyehCDrs4Dqsr0g7ISx6rO1XHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGwsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi6TtjKhcclxuXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1Q9XCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1M9XCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkU9XCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVD1cIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTPVwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkU9XCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1Q9XCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUz1cIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFPVwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q9XCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M9XCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU9XCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUPVwiRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTPVwiRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFPVwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUPVwiVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUz1cIlVORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkU9XCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUU9XCJBRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUU9XCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyPShkYXRhKT0+KHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTon7KO866+4JyxcclxuICAgIGlkOjEsXHJcbiAgICBQb3N0czogW3tpZDoxfV0sXHJcbiAgICBGb2xsb3dpbmdzOlt7IG5pY2tuYW1lOifrtoDquLDstIgnfSx7IG5pY2tuYW1lOifsoJzroZzstIgnfV0sXHJcbiAgICBGb2xsb3dlcnM6W3sgbmlja25hbWU6J+u2gOq4sOy0iCd9LHsgbmlja25hbWU6J+ygnOuhnOy0iCd9XVxyXG59KVxyXG5cclxuLy9hY3Rpb24gY3JlYXRvclxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uPSh7ZGF0YX0pPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuLypcclxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2Vzc0FjdGlvbj0oe2RhdGF9KT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19JTl9TVUNDRVNTJyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbj0oe2RhdGF9KT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6J0xPR19JTl9GQUlMVVJFJyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn0qL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb249KCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTonTE9HX09VVF9TVUNDRVNTJ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRGYWlsdXJlQWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTonTE9HX09VVF9GQUlMVVJFJ1xyXG4gICAgfVxyXG59Ki9cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXBSZXF1ZXN0QWN0aW9uPSgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpTSUdOX1VQX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdXNlclJlZHVjZXI9KHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQ9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dD10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0PWZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRPdXQ9ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj0gYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDphY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHM9ZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyOyIsImltcG9ydCB7YWxsLCBmb3JrfWZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4vL2NvbnN0IGdldD0gZnVuY3Rpb24qICgpIHt9OyBHZW5lcmF0b3LtlajsiJhcclxuLy9nZW4oKS5uZXh0KCntlZjrqbTshJwgeWllbGTtgqTsm4zrk5wg65Ox7J6lXHJcbi8veWllbGTqsIAg7KSR64uo7KCQ7J2065286rOgIOyDneqwge2VmOuptCDrkKguIG5leHTtlZzrsojsl5Ag7ZWY64KY7JSpIOyLpO2WiVxyXG4vL+yLpOyghCDrpqzslaHtirgg7ZSE66Gc6re4656Y67CNIO2VhOq4sCDssLjqs6AuIFxyXG4gICAgeWllbGQgYWxsKFsgLy/soJzrhIjroIjsnbTthLAg7ZWo7IiY65Ok7J2EIOuPmeyLnOyXkCDsi6TtlolcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pO1xyXG5cclxuXHJcbn0iLCJpbXBvcnQge2FsbCxjYWxsLGZvcmssIHRha2VMYXRlc3QsIHB1dCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCxBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxSRU1PVkVfUE9TVF9SRVFVRVNUXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdFJlZHVjZXInO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyUmVkdWNlcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcuL2FwaS9wb3N0JyxkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pe1xyXG4gICB0cnl7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IGlkPXNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgY29udGVudDphY3Rpb24uZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6QUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgZGF0YTppZFxyXG4gICAgfSlcclxuICAgfVxyXG4gICBjYXRjaChlcnIpeyBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgLi9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCxkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pe1xyXG4gICB0cnl7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vY29uc3QgcmVzdWx0PXlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7IFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoJy4vYXBpL3Bvc3QnLGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbil7XHJcbiAgIHRyeXtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3QgaWQ9c2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTphY3Rpb24uZGF0YVxyXG4gICAgfSlcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICBkYXRhOmFjdGlvbi5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7IFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7YWxsLGNhbGwsZm9yaywgdGFrZUxhdGVzdCxwdXQsIGRlbGF5fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9SRVFVRVNULCBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfRkFJTFVSRSxMT0dfT1VUX1JFUVVFU1QsTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsU0lHTl9VUF9TVUNDRVNTXHJcbn1mcm9tICcuLi9yZWR1Y2Vycy91c2VyUmVkdWNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKXtcclxuICAgdHJ5e1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvL+yEnOuyhOqwgCDsl4bsnLzri4jquYwg7JWE656Y64qUIOyjvOyEneyymOumrFxyXG4gICAgLy9jb25zdCByZXN1bHQ9eWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpOyAvL2xvZ0luQVBJ7Iuk7ZaJXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7IC8vQVBJ7Iuk7ZaJIO2bhCDshJzrsoQg7JqU7LKtIOyLpO2MqCDsi5wg7J2067aA67aEIOyLpO2WiVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dPdXQoKXtcclxuICAgdHJ5e1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdD15aWVsZCBjYWxsKGxvZ091dEFQSSk7IFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcpO1xyXG59XHJcbmZ1bmN0aW9uKiBzaWduVXAoKXtcclxuICAgdHJ5e1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvL2NvbnN0IHJlc3VsdD15aWVsZCBjYWxsKHNpZ25VcEFQSSk7IFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KVxyXG4gICB9XHJcbiAgIGNhdGNoKGVycil7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKVxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlPSh7ZGlzcGF0Y2gsIGdldFN0YXRlfSk9PiAobmV4dCk9PihhY3Rpb24pPT57XHJcbiAgICAvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZT0oKT0+e1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmU9Y3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzPSBbc2FnYU1pZGRsZXdhcmUsbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlcj1wcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cclxuICAgIGNvbnN0IHN0b3JlPWNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrPXNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7ZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=