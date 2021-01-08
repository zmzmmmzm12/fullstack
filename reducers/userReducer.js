import {HYDRATE} from 'next-redux-wrapper';

export const initialState={
    isLoggedIn: false,
    me:null,
    signUpData:{},
    loginData:{}
}


//action creator
export const loginAction=({data})=>{
    return{
        type:'LOG_IN',
        data
    }
}

export const logoutAction=()=>{
    return{
        type:'LOG_OUT'
    }
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return{
                ...state,
                isLoggedIn:true,
                me: action.data
                
            }
            case 'LOG_OUT':
                return{
                    ...state,
                    isLoggedIn:false,
                    me: null
                }
        default: return state;
    }
}

export default userReducer;