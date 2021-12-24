import './home.scss'
import Navbar from '../../Components/navbar/Navbar'
import Featured from '../../Components/featured/Featured'
import List from '../../Components/list/List'
const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured type='movie'/>
            <List />
            <List />
            <List />
            
        </div>
    )
}

export default Home
