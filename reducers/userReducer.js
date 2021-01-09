import {HYDRATE} from 'next-redux-wrapper';

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
    switch(action.type){
        case LOG_IN_REQUEST:
            return{
                ...state,
                isLoggingIn:true,
                isLoggedIn:false,
                logInError:null,
            }
        case LOG_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn:false,
                isLoggedIn:true,
                me: dummyUser(action.data)
            }
        case LOG_IN_FAILURE:
            return{
                ...state,
                isLoggingIn:false,
                isLoggedIn:false,
                logInError:action.error
            }

        case LOG_OUT_REQUEST:
            return{
                ...state,
                isLoggingOut:true,
                isLoggedOut:false,
                logOutError:null
            }
        case LOG_OUT_SUCCESS:
            return{
                ...state,
                isLoggingOut:false,
                isLoggedOut:true,
                me: null
            }
        case LOG_OUT_FAILURE:
            return{
                ...state,
                isLoggingOut:false,
                isLoggedOut:false,
                logOutError: action.error,
                me: null
            }

        case SIGN_UP_REQUEST:
            return{
                ...state,
                signUpLoading:true,
                signUpDone:false,
                signUpError:null,
            }
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                signUpLoading:false,
                signUpDone:true,
            }
        case SIGN_UP_FAILURE:
            return{
                ...state,
                signUpLoading:false,
                signUpDone:false,
                signUpError:action.error
            }
        
        case CHANGE_NICKNAME_REQUEST:
            return{
                ...state,
                changeNicknameLoading:true,
                changeNicknameDone:false,
                changeNicknameError:null,
            }
        case CHANGE_NICKNAME_SUCCESS:
            return{
                ...state,
                changeNicknameLoading:false,
                changeNicknameDone:true,
            }
        case CHANGE_NICKNAME_FAILURE:
            return{
                ...state,
                changeNicknameLoading:false,
                changeNicknameDone:false,
                changeNicknameError:action.error
            }
        
        case ADD_POST_TO_ME:
            return{
                ...state,
                me:{
                    ...state.me,
                    Posts: [{id:action.data}, ...state.me.Posts],
                }
            }
        case REMOVE_POST_OF_ME:
            return{
                ...state,
                me:{
                    ...state.me,
                    Posts: state.me.Posts.filter((v)=>v.id!==action.data)
                }
            }

        default: {
            return {...state};
        }
    }
}

export default userReducer;