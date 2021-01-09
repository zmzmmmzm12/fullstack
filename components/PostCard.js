import {Button, Card, Popover, Avatar, List, Comment} from 'antd';
import {
    RetweetOutlined,EllipsisOutlined, HeartOutlined, MessageOutlined, HeartTwoTone
 } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import {useCallback, useState} from 'react';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/postReducer';
import FollowButton from './FollowButton';

const PostCard=({post})=>{
    const {me}=useSelector((state)=>state.userReducer);
    const id=me?.id;
    const {removePostLoading} = useSelector((state)=>state.postReducer);
    const dispatch=useDispatch();
    const [liked,setLiked]=useState(false);
    const onToggleLike=useCallback(()=>{
        setLiked((prev)=>!prev);
    },[])
    const onToggleComment=useCallback(()=>{
        setCommentFormOpened((prev)=>!prev);
    },[])

    const onRemovePost=useCallback(()=>{
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id
        })
    }, [])

    const [commentFormOpened, setCommentFormOpened]=useState(false);
    return(
        <div style={{marginBottom:20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked
                        ? <HeartTwoTone twoToneColor='#eb2f96' key="heart" onClick={onToggleLike}/>
                        : <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id&&post.User.id===id ?(
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                                </>)
                            : <Button>신고</Button> }
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                extra={id&& <FollowButton post={post}/>}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content}/>}
                />
            </Card>
            {commentFormOpened &&
            <div>
                <CommentForm post={post}/>
                <List 
                    header={`${post.Comments.length}개의 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments}
                    renderItem={(item)=>(
                        <li>
                            <Comment
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content = {item.content}
                            />
                        </li>
                    )}
                />
            </div>}
        </div>
    )
}
PostCard.proptypes={
    //object로 한번에 묶는 것보다 shape로 풀어서 써주는게 좋음
    post:PropTypes.shape({
        id: PropTypes.number,
        user:PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments:PropTypes.arrayOf(PropTypes.object),
        Images:PropTypes.arrayOf(PropTypes.object),
    }).isRequired
}


export default PostCard;