import {Form, Input, Button} from 'antd';
import { useCallback, useState, useMemo } from 'react';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import {useDispatch} from 'react-redux';
import {loginAction} from '../reducers/userReducer';

const LoginForm=()=>{
    const dispatch=useDispatch();

    //컴포넌트에 props로 넘기는 함수는 useCallback꼭 쓰기=>최적화
    const [id,onChangeId]=useInput('');
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
        dispatch(loginAction({id,pw}));
    },[id,pw]);
    return(
        <>
            <Form onFinish={onSubmitForm} style={formWrapper}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} onChange={onChangeId} required/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={pw} onChange={onChangePw} required/>
                </div>
                <div style={style}>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                    <Link href="Signup"><a><Button>회원가입</Button></a></Link>
                </div>
            </Form>
        </>
    )
}


export default LoginForm;