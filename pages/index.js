import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { useEffect } from "react";
import { LOAD_POSTS_REQUEST } from "../reducers/postReducer";

const Home= ()=>{
    const dispatch=useDispatch();
    const isLoggedIn=useSelector((state)=>state.userReducer.isLoggedIn); //위아래 둘다 최적화부분만 빼면 똑같은 소스임
    const {mainPosts, hasMorePost, loadPostsLoading}=useSelector((state)=>state.postReducer);
    
    useEffect(()=>{
        dispatch({
            type: LOAD_POSTS_REQUEST
        })
    }, []);


    useEffect(()=>{
        function onScroll(){
            //console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight)
            if(Math.round(window.scrollY)+document.documentElement.clientHeight > document.documentElement.scrollHeight-300){
                if(hasMorePost&&!loadPostsLoading){
                    dispatch({
                        type: LOAD_POSTS_REQUEST
                    })
                }
            }
        }
        window.addEventListener('scroll',onScroll);
        return ()=>{
            window.removeEventListener('scroll',onScroll);
        } //add해주면 항상 리턴해서 remove필요
    }, [hasMorePost, loadPostsLoading]);
    

    return(
        <AppLayout>
            {isLoggedIn&&<PostForm/>}
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
        </AppLayout>
    )
}

export default Home;