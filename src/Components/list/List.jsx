import './list.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react';
const List = () => {

    const[slideNumber,setSlideNumber]= useState(0)
    const listRef=useRef()//用于控制列表的移动hook
    const handleClick=(diret)=>{
        let distance = listRef.current.getBoundingClientRect().x-50
        if (diret === 'left' && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (diret === 'right'&&slideNumber<5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">继续观看</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className='sliderArrow left'
                    onClick={()=>handleClick('left')}/>
                 {/*箭头用来控制列表的移动方向*/}
                <div className="container" ref={listRef}> 
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlinedIcon className='sliderArrow right'
                    onClick={() => handleClick('right')} /> 
            </div>
        </div>
    );
}

export default List;
