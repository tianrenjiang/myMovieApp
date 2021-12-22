import React from 'react'
import './navbar.scss'
import netLogo from '../../file/2560px-Netflix_2015_logo.svg.png'
import Search from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <img src={netLogo} 
                        alt="" />
                    <span>Homepage</span>
                     <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>KID</span>
                    <NotificationsIcon className='icon'/>
                    <img src="https://images.pexels.com/photos/8971702/pexels-photo-8971702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
