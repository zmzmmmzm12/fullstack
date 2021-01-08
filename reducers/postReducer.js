import {HYDRATE} from 'next-redux-wrapper';


//백엔드한테 데이터 구조 미리 받아놓기
export const initialState={
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:'제로초'
        },
        content: '첫번째 게시글 #해시태그 #익스프레스',
        Images:[{
            src:'https://photos.google.com/photo/AF1QipNQ3sMlT1-FfEICKbFLTOQA1x1b2SQ4gdpK9eaz'
        },
        {
            src: 'https://photos.google.com/photo/AF1QipO1wBOTbbCcNja-4guF1bAGLJYnbXmuqi5tVlGn'
        }],
        Comments:[{
            User:{
                nickname: 'nero'
            },
            content: '우와 개정판이네요'
        },
        {
            User:{
                nickname: 'hero'
            },
            content: '고양이'
        }]
    }],
    imagePaths:[],
    postAdded:false
}

const ADD_POST='ADD_POST';
export const addPost={
    type: ADD_POST,
}

const dummyPost={
    id:2,
    content:'더미데이터',
    User:{
        id:1,
        nickname:'제로초'
    },
    Images:[],
    Comments: []
}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded:true
            };

        default: return state;
    }
}

export default postReducer;