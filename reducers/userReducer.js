import {HYDRATE} from 'next-redux-wrapper';
import produce from 'immer';

export const initialState={
    isLoggedIn: false, //로그인 성공
    isLoggingIn: false, //로그인 시도중
    logInError:null, //로그인 실패

    isLoggingOut: false, //로그아웃 시도중
    isLoggedOut:false, //로그아웃 성공
    logOutError:null, //로그아웃 실패

    signUpLoading: false, //회원가입 시도중
    signUpDone:false, //회원가입 성공
    signUpError:null, //회원가입 실패

    changeNicknameLoading: false, //닉네임 변경 시도중
    changeNicknameDone:false, //닉네임 변경 성공
    changeNicknameError:null, //닉네임 변경 실패

    me:null,
    signUpData:{},
    loginData:{}
}

export const LOG_IN_REQUEST="LOG_IN_REQUEST";
export const LOG_IN_SUCCESS="LOG_IN_SUCCESS";
export const LOG_IN_FAILURE="LOG_IN_FAILURE";

export const LOG_OUT_REQUEST="LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS="LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE="LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST="SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS="SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE="SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST="CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS="CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE="CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST="FOLLOW_REQUEST";
export const FOLLOW_SUCCESS="FOLLOW_SUCCESS";
export const FOLLOW_FAILURE="FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST="UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS="UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE="UNFOLLOW_FAILURE";

export const ADD_POST_TO_ME="ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME="REMOVE_POST_OF_ME";

const dummyUser=(data)=>({
    ...data,
    nickname:'주미',
    id:1,
    Posts: [{id:1}],
    Followings:[{ nickname:'부기초'},{ nickname:'제로초'}],
    Followers:[{ nickname:'부기초'},{ nickname:'제로초'}]
})

//action creator
export const loginRequestAction=({data})=>{
    return{
        type:LOG_IN_REQUEST,
        data
    }
}
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

export const logoutRequestAction=()=>{
    return{
        type:LOG_OUT_REQUEST
    }
}
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

export const signupRequestAction=()=>{
    return{
        type:SIGN_UP_REQUEST
    }
}

const userReducer=(state=initialState,action)=>{
    return produce(state,(draft)=>{
        switch(action.type){
            case LOG_IN_REQUEST:
                draft.isLoggingIn=true;
                draft.isLoggedIn=false;
                draft.logInError=null;
                break;

            case LOG_IN_SUCCESS:
                draft.isLoggingIn=false;
                draft.isLoggedIn=true;
                draft.me= dummyUser(action.data);
                break;

            case LOG_IN_FAILURE:
                draft.isLoggingIn=false;
                draft.isLoggedIn=false;
                draft.logInError=action.error;
                break;
    
            case LOG_OUT_REQUEST:
                draft.isLoggingOut=true;
                draft.isLoggedOut=false;
                draft.logOutError=null;
                break;

            case LOG_OUT_SUCCESS:
                draft.isLoggingOut=false;
                draft.isLoggedOut=true;
                draft.me= null;
                break;

            case LOG_OUT_FAILURE:
                draft.isLoggingOut=false,
                draft.isLoggedOut=false,
                draft.logOutError= action.error,
                draft.me= null;
                break;
    
            case SIGN_UP_REQUEST:
                draft.signUpLoading=true;
                draft.signUpDone=false;
                draft.signUpError=null;
                break;

            case SIGN_UP_SUCCESS:
                draft.signUpLoading=false;
                draft.signUpDone=true;
                break;

            case SIGN_UP_FAILURE:
                draft.signUpLoading=false;
                draft.signUpDone=false;
                draft.signUpError=action.error;
                break;
            
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading=true;
                draft.changeNicknameDone=false;
                draft.changeNicknameError=null;
                break;

            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading=false;
                draft.changeNicknameDone=true;
                break;

            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading=false;
                draft.changeNicknameDone=false;
                draft.changeNicknameError=action.error;
                break;

            case ADD_POST_TO_ME:
                draft.me.Posts.unshift({id:action.data});
                break;

            case REMOVE_POST_OF_ME:
                draft.me.Posts=draft.me.Posts.filter((v)=>v.id!==action.data);
                break;
    
            default: break;
        }
    })
}

export default userReducer;