import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function Featured({type}) {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === 'movie'?"Movies":"Series"}</span>
                    <select name="genre" id="genre">
                        <option > Genre </option>
                        <option > Genre </option>
                        <option > Genre </option>
                        <option > Genre </option>
                        <option > Genre </option>
                    </select>
                </div>
            )}
            <img src="https://images.pexels.com/photos/10442268/pexels-photo-10442268.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="info">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2FiocLnSkavklDkcbkeKHn6sOxs2KqXrT0Ni98WJtMKeod51556257233247compressflag.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642840679&t=2298b32633c99250504b3519c35a788d" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, esse fugit, quis doloribus numquam ea sapiente accusantium, praesentium laboriosam ducimus fuga corporis. Sed aliquam unde adipisci atque in rem tempore?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
