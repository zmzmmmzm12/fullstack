import {HYDRATE} from 'next-redux-wrapper';
import userReducer from './userReducer';
import postReducer from './postReducer';
import {combineReducers} from 'redux';


//이전상태, action을 통해 다음상태를 만들어내는 함수
const rootReducer=combineReducers({
    root: (state={},action)=>{
    switch(action.type){
        case HYDRATE:
            return{...state,...action.payload }
        
        default:
            return state;
    }
    },
    userReducer,
    postReducer,
});

export default rootReducer;