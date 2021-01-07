import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import {useSelector} from 'react-redux';

//개별 컴포넌트에서 공통인 경우 레이아웃을 만들어서 감싸기
const AppLayout=({ children })=>{

    const isLoggedIn=useSelector(state => state.user.isLoggedIn);
    
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/Profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{ verticalAlign:'middle'}} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/Signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn?<UserProfile/>:<LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">ZeroCho</a>
                </Col>
            </Row>
        </div>    
    )
}

AppLayout.protoTypes={
    children:PropTypes.node.isRequired,
}

export default AppLayout;