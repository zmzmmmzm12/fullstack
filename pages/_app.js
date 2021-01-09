import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga';

//모든 컴포넌트(pages)에서 공통이면 여기 넣고
const NodeBird=({Component})=>{
    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
}

NodeBird.propTypes={
    Component:PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(NodeBird));