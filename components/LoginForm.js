import {Form, Input, Button} from 'antd';
import { useCallback, useState, useMemo } from 'react';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequestAction} from '../reducers/userReducer';

const LoginForm=()=>{
    const dispatch=useDispatch();

    const {isLoggingIn} = useSelector((state)=>state.userReducer);

    //컴포넌트에 props로 넘기는 함수는 useCallback꼭 쓰기=>최적화
    const [email,onChangeEmail]=useInput('');
    const [pw,onChangePw]=useInput('');

    //useMemo는 함수를 콜백함. style을 useMemo로 만드는 대신 css를 따로 추가해줘도됨
    //리랜더링 해줘도 최적화됨(jsx에 인라인으로 객체 넣으면 계속 랜더링되는 문제.)
    const style=useMemo(()=>({
        marginTop:10
    }), []);

    const formWrapper=useMemo(()=>({
        padding:10
    }), []);


    const onSubmitForm= useCallback(()=>{
        //antd의 onFinish은 이미 prevent가 적용되어있으므로 안해줘도됨
        dispatch(loginRequestAction({email,pw}));
    },[email,pw]);
    return(
        <>
            <Form onFinish={onSubmitForm} style={formWrapper}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br/>
                    <Input type="email" name="user-email" value={email} onChange={onChangeEmail} required/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={pw} onChange={onChangePw} required/>
                </div>
                <div style={style}>
                    <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                    <Link href="Signup"><a><Button>회원가입</Button></a></Link>
                </div>
            </Form>
        </>
    )
}


export default LoginForm;