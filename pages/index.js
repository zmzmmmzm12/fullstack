import AppLayout from "../components/AppLayout";
import {useSelector} from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home= ()=>{
    const isLoggedIn=useSelector((state)=>state.userReducer.isLoggedIn); //위아래 둘다 최적화부분만 빼면 똑같은 소스임
    const mainPosts=useSelector((state)=>state.postReducer.mainPosts);
    return(
        <AppLayout>
            {isLoggedIn&&<PostForm/>}
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
        </AppLayout>
    )
}

export default Home;