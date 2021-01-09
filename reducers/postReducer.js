import {HYDRATE} from 'next-redux-wrapper';
import shortId from 'shortid';


//백엔드한테 데이터 구조 미리 받아놓기
export const initialState={
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:'주미'
        },
        content: '첫번째 게시글 #해시태그 #익스프레스',
        Images:[{
            id:shortId.generate(),
            src:'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png'
        },
        {
            id:shortId.generate(),
            src: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg'
        },
        {
            id:shortId.generate(),
            src: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'
        }],
        Comments:[{
            id:shortId.generate(),
            User:{
                id:shortId.generate(),
                nickname: 'nero'
            },
            content: '우와 개정판이네요'
        },
        {
            id:shortId.generate(),
            User:{
                id:shortId.generate(),
                nickname: 'hero'
            },
            content: '고양이'
        }]
    }],
    imagePaths:[],
    addPostLoading:false,
    addPostDone:false,
    addPostError:null,
    addCommentLoading:false,
    addCommentDone:false,
    addCommentError:null,
    removePostLoading:false,
    removePostDone:false,
    removePostError:null,
}

export const ADD_POST_REQUEST='ADD_POST_REQUEST';
export const ADD_POST_SUCCESS='ADD_POST_SUCCESS';
export const ADD_POST_FAILURE='ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST='ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS='ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE='ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST='REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS='REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE='REMOVE_POST_FAILURE';

export const addPost=(data)=>({
    type: ADD_POST_REQUEST,
    data,
})

export const addComment=(data)=>({
    type: ADD_COMMENT_REQUEST,
    data,
})

const dummyPost=(data)=>({
    id:data.id,
    content:data.content,
    User:{
        id:1,
        nickname:'주미'
    },
    Images:[],
    Comments: []
})

const dummyComment=(data)=>({
    id:shortId.generate(),
    content:data,
    User:{
        id:1,
        nickname:'주미'
    }
})

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST_REQUEST:
            return{
                ...state,
                addPostLoading:true,
                addPostDone:false,
                addPostError:null
            }
        case ADD_POST_SUCCESS:
            return{
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading:false,
                addPostDone:true
            };
        case ADD_POST_FAILURE:
            return{
                ...state,
                addPostLoading:false,
                addPostDone:false,
                addPostError:action.error
            }
        
        case ADD_COMMENT_REQUEST:
            return{
                ...state,
                addCommentLoading:true,
                addCommentDone:false,
                addCommentError:null
            }
        case ADD_COMMENT_SUCCESS:
            const postIndex=state.mainPosts.findIndex((v)=>v.id===action.data.postId);
            const post={...state.mainPosts[postIndex]};
            post.Comments=[dummyComment(action.data.content),...post.Comments];
            const mainPosts=[...state.mainPosts];
            mainPosts[postIndex]=post;
            return{
                ...state,
                mainPosts,
                addCommentLoading:false,
                addCommentDone:true
            };
        
        case ADD_COMMENT_FAILURE:
            return{
                ...state,
                addCommentLoading:false,
                addCommentDone:false,
                addCommentError:action.error
            };

        case REMOVE_POST_REQUEST:
            return{
                ...state,
                removePostLoading:true,
                removePostDone:false,
                removePostError:null
            }
        case REMOVE_POST_SUCCESS:
            return{
                ...state,
                mainPosts: state.mainPosts.filter((v)=>v.id!==action.data),
                removePostLoading:false,
                removePostDone:true
            };
        case REMOVE_POST_FAILURE:
            return{
                ...state,
                removePostLoading:false,
                removePostDone:false,
                removePostError:action.error
            }

        default: {
            return {...state};
        };
    }
}

export default postReducer;