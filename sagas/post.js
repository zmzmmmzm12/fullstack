import {all,call,fork, takeLatest, put, delay, throttle} from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST,
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,
    REMOVE_POST_FAILURE, REMOVE_POST_SUCCESS,REMOVE_POST_REQUEST
    ,LOAD_POSTS_FAILURE,LOAD_POSTS_REQUEST,LOAD_POSTS_SUCCESS, generateDummyPost
} from '../reducers/postReducer';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/userReducer';
import shortId from 'shortid';


function loadPostsAPI(data){
    return axios.get('./api/post',data);
}
function* loadPosts(action){
   try{
    yield delay(1000);
    const id=shortId.generate();
    //const result=yield call(loadPostsAPI, action.data);
    yield put({
        type: LOAD_POSTS_SUCCESS,
        data:generateDummyPost(10)
    })
   }
   catch(err){ 
    yield put({
        type: LOAD_POSTS_FAILURE,
        data: err.response.data
    })
   }
}
function* watchLoadPosts(){
    yield throttle(4000, LOAD_POSTS_REQUEST, loadPosts);
}

function addPostAPI(data){
    return axios.post('./api/post',data);
}
function* addPost(action){
   try{
    yield delay(1000);
    const id=shortId.generate();
    //const result=yield call(addPostAPI, action.data);
    yield put({
        type: ADD_POST_SUCCESS,
        data:{
            id,
            content:action.data
        }
    })
    yield put({
        type:ADD_POST_TO_ME,
        data:id
    })
   }
   catch(err){ 
    yield put({
        type: ADD_POST_FAILURE,
        data: err.response.data
    })
   }
}
function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addCommentAPI(data){
    return axios.post(`./api/post/${data.postId}/comment`,data);
}
function* addComment(action){
   try{
    yield delay(1000);
    //const result=yield call(addCommentAPI, action.data);
    yield put({
        type: ADD_COMMENT_SUCCESS,
        data: action.data
    })
   }
   catch(err){ 
    yield put({
        type: ADD_COMMENT_FAILURE,
        data: err.response.data
    })
   }
}
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function removePostAPI(data){
    return axios.delete('./api/post',data);
}
function* removePost(action){
   try{
    yield delay(1000);
    const id=shortId.generate();
    //const result=yield call(removePostAPI, action.data);
    yield put({
        type: REMOVE_POST_SUCCESS,
        data:action.data
    })
    yield put({
        type:REMOVE_POST_OF_ME,
        data:action.data
    })
   }
   catch(err){ 
    yield put({
        type: REMOVE_POST_FAILURE,
        data: err.response.data
    })
   }
}
function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchAddComment),
        fork(watchRemovePost)
    ]);
}