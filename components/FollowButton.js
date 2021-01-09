import PropTypes from 'prop-types';
import {Button} from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UNFOLLOW_REQUEST,FOLLOW_REQUEST } from '../reducers/userReducer';


const FollowButton=({post})=>{
    const dispatch=useDispatch();
    const {me, followLoading, unfollowLoading}=useSelector((state)=>state.userReducer);
    const isFollowing=me?.Followings.find((v)=>v.id===post.User.id)
    const onClickBtn=useCallback(()=>{
        if(isFollowing){
            dispatch({
                type:UNFOLLOW_REQUEST,
                data:post.User.id
            })
        }
        else{
            dispatch({
                type:FOLLOW_REQUEST,
                data:post.User.id
            })
        }
    },[isFollowing])
    return(
        <>
            <Button loading={followLoading || unfollowLoading} onClick={onClickBtn}>
                {isFollowing ? '언팔로우' : '팔로우'}
            </Button>
        </>
    )
}

FollowButton.propTypes={
    post: PropTypes.object.isRequired
}

export default FollowButton