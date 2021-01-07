import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import {Form, Input, Checkbox, Button} from 'antd';
import {useCallback, useState, useMemo} from 'react';
import useInput from '../hooks/useInput';

const Signup=()=>{
    const [id,onChangeId]=useInput('');
    const [pw,onChangePw]=useInput('');
    const [nick,onChangeNick]=useInput('');

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
        console.log(id,nick,pw);
    }, [pw,pwCheck,term]);

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
                    <label htmlFor='user-id'>아이디</label>
                    <br/>
                    <Input name='user-id' value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor='user-nick'>닉네임</label>
                    <br/>
                    <Input name='user-nick' value={nick} required onChange={onChangeNick}/>
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
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
        </>
    );
};


export default Signup;