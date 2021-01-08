import PropTypes from 'prop-types';
import Slick from 'react-slick';
import {useState, useMemo} from 'react';
import {Button} from 'antd';
import { fixControlledValue } from 'antd/lib/input/Input';

const ImagesZoom=({images,onClose})=>{
    const overlay=useMemo(()=>({
        position: 'fixed',
        zIndex: 6,
        top:0,
        left:0,
        right:0,
        bottom:0
    }),[]);
    const Header=useMemo(()=>({
        height:'44px',
        background: 'white',
        position: 'relative',
        padding: 0,
        textAlign:'center'
    }), []);

    const HeaderH1=useMemo(()=>({
        margin:0,
        fontSize:'17px',
        color: '#333',
        lineHeight: '44px'
    }),[]);

    const HeaderBtn=useMemo(()=>({
        position: 'absolute',
        right:0,
        top:0,
        padding: '15px',
        lineHeight: '14px',
        cursor:'pointer'
    }),[]);

    const SlickWrapper=useMemo(()=>({
        height: 'calc(100% - 44px)',
        background: '#898989'
    }),[]);
    
    const ImgWrapper=useMemo(()=>({
        padding:'32px',
        textAlign: 'center'
    }),[]);

    const Img=useMemo(()=>({
        margin: '0 auto',
        maxHeight: '750px'
    }),[]);

    const Indicator=useMemo(()=>({
        textAlign:'center'
    }),[]);

    const IndicatorDiv=useMemo(()=>({
        width: '75px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '15px',
        background: '#313131',
        display: 'inline-block',
        textAlign: 'center',
        color: 'white',
        fontSize: '15px'
    }),[]);

    const [currentSlide,setCurrentSlide]=useState(0);
    return(
        <div style={overlay}>
            <header style={Header}>
                <h1 style={HeaderH1}>상세이미지</h1>
                <button style={HeaderBtn} onClick={onClose}>X</button>
            </header>
            <div>
                <div style={SlickWrapper}>
                    <Slick
                        initialSlide={0}
                        afterChange={(slide)=>setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v)=>{
                            <div key={v.src} style={ImgWrapper}>
                                <img style={Img} src={v.src} alt={v.src}/>
                            </div>
                        })}
                    </Slick>
                </div>
            </div>
        </div>
    )
}

ImagesZoom.propTypes={
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired
}

export default ImagesZoom;