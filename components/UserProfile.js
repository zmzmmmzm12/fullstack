import {Card, Avatar, Button} from 'antd';
import { useCallback } from 'react'; 
import {useDispatch} from 'react-redux';
import {logoutAction} from '../reducers/userReducer';

const userProfile=()=>{
    const dispatch=useDispatch();

    const onLogOut=useCallback(()=>{
        dispatch(logoutAction());
    });
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>,

            ]}>
            <Card.Meta
                avatar={<Avatar>jm</Avatar>}
                title="jumi" />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}

export default userProfile;