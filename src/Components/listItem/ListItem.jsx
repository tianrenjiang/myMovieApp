import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from 'react';
const Listitem = ({index}) => {
    const [isHovered,setIsHovered]=useState(false)
    const trailer ='https://media.w3.org/2010/05/sintel/trailer.mp4'
    return (
        <div className='listItem' 
            style={{ left:isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            <img src="https://images.pexels.com/photos/7978209/pexels-photo-7978209.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            {isHovered && (
            <>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrowIcon className='icon'/>
                    <AddCircleOutlineOutlinedIcon className='icon'/>
                    <ThumbUpOutlinedIcon className='icon'/>
                    <ThumbDownAltOutlinedIcon className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14mins</span>
                    <span className='limit'>+16</span>
                    <span>1999</span>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="genre">Action</div>
                </div>
            </div>
            </>
            )}
        </div>
    );
}

export default Listitem;
