import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
export default function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlinedIcon />
                home
            </div>
            <video className="video" autoPlay progress controls src="https://media.w3.org/2010/05/sintel/trailer.mp4" ></video>
        </div>
    )
}
