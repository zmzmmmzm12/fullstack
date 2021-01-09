import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import {Form, Input, Checkbox, Button} from 'antd';
import {useCallback, useState, useMemo} from 'react';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const Signup=()=>{
    const dispatch=useDispatch();
    const {signUpLoading} = useSelector((state)=>state.userReducer);

    const [email,onChangeEmail]=useInput('');
    const [pw,onChangePw]=useInput('');
    const [nickname,onChangeNickname]=useInput('');

    const [pwCheck,setPwCheck]=useState('');
    const [pwError,setPwError]=useState(false);
    const onChangePwCheck=useCallback((e)=>{
        setPwCheck(e.target.value);
        setPwError(e.target.value!==pw);
    }, [pw]);
    
    const [term,setTerm]=useState('');
    const [termError,setTermError]=useState(false);
    const onChangeTerm=useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(()=>{
        if(pw!==pwCheck){
            return setPwError(true);
        }
        if(!term){
            return setTermError(true);
        }
        dispatch({
            type: SIGN_UP_REQUEST,
            data:{email,pw,nickname}
        });
    }, [email,pw,pwCheck,term, nickname]);

    const errorStyle=useMemo(()=>({
        color:'red'
    }), []);

    return(
        <>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>
        <AppLayout>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor='user-email'>이메일</label>
                    <br/>
                    <Input type="email" name='user-email' value={email} required onChange={onChangeEmail}/>
                </div>
                <div>
                    <label htmlFor='user-nickname'>닉네임</label>
                    <br/>
                    <Input name='user-nickname' value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor='user-pw'>비밀번호</label>
                    <br/>
                    <Input name='user-pw' type='password' value={pw} required onChange={onChangePw}/>
                </div>
                <div>
                <Input name='user-pw-check'
                    type='password'
                    value={pwCheck}
                    required
                    onChange={onChangePwCheck}/>
                {pwError && <div style={errorStyle}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>약관에 동의합니다</Checkbox>
                    {termError && <div style={errorStyle}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
        </>
    );
};


export default Signup;