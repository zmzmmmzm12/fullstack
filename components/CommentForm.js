import {Form, Input, Button} from 'antd';
import { useCallback,useEffect } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/postReducer';

const CommentForm=({post})=>{
    const dispatch=useDispatch();

    const id=useSelector((state)=>state.userReducer.me?.id);
    const {addCommentDone, addCommentLoading}=useSelector((state)=>state.postReducer);
    const [commentText, onChangeCommentText, setCommentText]=useInput('');
    
    useEffect(()=>{
        if(addCommentDone){
            setCommentText('');
        }
    }, [addCommentDone])

    const onSubmitComment=useCallback(()=>{
        dispatch({
            type:ADD_COMMENT_REQUEST,
            data:{content:commentText,postId:post.id,userId:id}
            
        })
    }, [commentText, id]);
    return(
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position:'relative', margin: 0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button type="primary" style={{float:'right'}} htmlType="submit" loading={addCommentLoading} >삐약</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.propTypes={
    post: PropTypes.object.isRequired
}

export default CommentForm;