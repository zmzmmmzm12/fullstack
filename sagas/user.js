import {all,call,fork, takeLatest,put, delay} from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_SUCCESS, LOG_IN_REQUEST, LOG_IN_FAILURE,
    LOG_OUT_FAILURE,LOG_OUT_REQUEST,LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST,SIGN_UP_SUCCESS,
    FOLLOW_FAILURE, FOLLOW_REQUEST,FOLLOW_SUCCESS,
    UNFOLLOW_REQUEST,UNFOLLOW_FAILURE,UNFOLLOW_SUCCESS
}from '../reducers/userReducer';

function logInAPI(){
    return axios.post('/api/login', data);
}
function* logIn(action){
   try{
    yield delay(1000);
    //서버가 없으니까 아래는 주석처리
    //const result=yield call(logInAPI, action.data); //logInAPI실행
    yield put({
        type: LOG_IN_SUCCESS,
        data: action.data
    })
   }
   catch(err){ //API실행 후 서버 요청 실패 시 이부분 실행
    yield put({
        type: LOG_IN_FAILURE,
        error: err.response.data
    })
   }
}
function* watchLogIn(){
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logOutAPI(){
    return axios.post('/api/logout');
}
function* logOut(){
   try{
    yield delay(1000);
    //const result=yield call(logOutAPI); 
    yield put({
        type: LOG_OUT_SUCCESS,
    })
   }
   catch(err){
    yield put({
        type: LOG_OUT_FAILURE,
        error: err.response.data
    })
   }
}
function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function signUpAPI(){
    return axios.post('/api/signup');
}
function* signUp(){
   try{
    yield delay(1000);
    //const result=yield call(signUpAPI); 
    yield put({
        type: SIGN_UP_SUCCESS,
    })
   }
   catch(err){
    yield put({
        type: SIGN_UP_FAILURE,
        error: err.response.data
    })
   }
}
function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function followAPI(){
    return axios.post('/api/follow');
}
function* follow(action){
   try{
    yield delay(1000);
    //const result=yield call(followAPI); 
    yield put({
        type: FOLLOW_SUCCESS,
        data:action.data
    })
   }
   catch(err){
    yield put({
        type: FOLLOW_FAILURE,
        error: err.response.data
    })
   }
}
function* watchFollow(){
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function unfollowAPI(){
    return axios.post('/api/unfollow');
}
function* unFollow(action){
   try{
    yield delay(1000);
    //const result=yield call(followAPI); 
    yield put({
        type: UNFOLLOW_SUCCESS,
        data:action.data
    })
   }
   catch(err){
    yield put({
        type: UNFOLLOW_FAILURE,
        error: err.response.data
    })
   }
}
function* watchUnfollow(){
    yield takeLatest(UNFOLLOW_REQUEST, unFollow);
}

export default function* userSaga(){
    yield all([
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp)
    ]);
}