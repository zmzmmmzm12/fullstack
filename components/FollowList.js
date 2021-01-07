import {List, Button, Card} from 'antd';
import {useMemo} from 'react';
import PropTypes from "prop-types";
import {StopOutlined} from '@ant-design/icons';

const FollowList=({header,data})=>{
    const style=useMemo(()=>({
        marginBottom:20
    }),[]);
    const moreStyle=useMemo(()=>({
        textAlign:'center',
        margin:'10px 0'
    }),[]);
    const grid=useMemo(()=>({
        gutter:4,
        xs:2,
        md:3
    }),[]);
    return(
        <List
            style={style}
            grid={grid}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={moreStyle}><Button>더보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item)=>(
                <List.Item style={style}>
                    <Card actions={[<StopOutlined key="stop"/>]}>
                        <Card.Meta description={item.nickname}/>
                    </Card>
                </List.Item>
            )}
        />
    )
}

FollowList.propTypes={
    header: PropTypes.string.isRequired,
    data:PropTypes.array.isRequired
}

export default FollowList;