import {HYDRATE} from 'next-redux-wrapper';
import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

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

initialState.mainPosts=initialState.mainPosts.concat(
    Array(20).fill().map(()=>({
        id: shortId.generate(),
        User:{
            id:shortId.generate(),
            nickname: faker.name.findName()
        },
        content: faker.lorem.paragraph(),
        Images:[{
            src:faker.image.image()
        }],
        Comments:[{
            User:{
                id:shortId.generate(),
                nickname: faker.name.findName()
            },
            content: faker.lorem.sentence(),
        }],
    }))
);

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

const postReducer=(state=initialState,action)=> produce(state,(draft)=>{
        switch(action.type){
            case ADD_POST_REQUEST:
                draft.addPostLoading=true;
                draft.addPostDone=false;
                draft.addPostError=null;
                break;
                
            case ADD_POST_SUCCESS:
                draft.mainPosts.unshift(dummyPost(action.data));
                draft.addPostLoading=false;
                draft.addPostDone=true;
                break;
                
            case ADD_POST_FAILURE:
                draft.addPostLoading=false;
                draft.addPostDone=false;
                draft.addPostError=action.error;
                break;
            
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading=true;
                draft.addCommentDone=false;
                draft.addCommentError=null;
                break;

            case ADD_COMMENT_SUCCESS:
                const post=draft.mainPosts.find((v)=>v.id===action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading=false;
                draft.addCommentDone=true;
                break;
            
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading=false;
                draft.addCommentDone=false;
                draft.addCommentError=action.error;
                break;
    
            case REMOVE_POST_REQUEST:
                draft.removePostLoading=true;
                draft.removePostDone=false;
                draft.removePostError=null;
                break;

            case REMOVE_POST_SUCCESS:
                draft.mainPosts= draft.mainPosts.filter((v)=>v.id!==action.data),
                draft.removePostLoading=false,
                draft.removePostDone=true;
                break;

            case REMOVE_POST_FAILURE:
                draft.removePostLoading=false,
                draft.removePostDone=false,
                draft.removePostError=action.error;
                break;

            default: break;
        }
})

export default postReducer;