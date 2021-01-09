import {all, fork}from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

export default function* rootSaga(){
//const get= function* () {}; Generator함수
//gen().next()하면서 yield키워드 등장
//yield가 중단점이라고 생각하면 됨. next한번에 하나씩 실행
//실전 리액트 프로그래밍 필기 참고. 
    yield all([ //제너레이터 함수들을 동시에 실행
        fork(postSaga),
        fork(userSaga),
    ]);


}