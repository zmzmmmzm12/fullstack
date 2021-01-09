import {Card, Avatar, Button} from 'antd';
import { useCallback,useEffect } from 'react'; 
import {useDispatch, useSelector} from 'react-redux';
import {logoutRequestAction} from '../reducers/userReducer';
import Router from 'next/router';

const userProfile=()=>{
    const dispatch=useDispatch();
    const{me,isLoggingOut}=useSelector((state)=>state.userReducer);
   console.log(me);
    
    useEffect(()=>{
        if(!(me&&me.id)){
            Router.push('/');
        }
    }, [me&&me.id]);
    

    const onLogOut=useCallback(()=>{
        dispatch(logoutRequestAction());
    });
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br/>{me.Posts.length}</div>,
                <div key="followings">팔로잉<br/>{me.Followings.length}</div>,
                <div key="followers">팔로워<br/>{me.Followers.length}</div>,

            ]}>
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname} />
            <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    )
}

export default userProfile;