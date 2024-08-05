import { Link } from 'react-router-dom'

import '../../assets/styles/MenuBar.css'

import LogoImage from '../../assets/images/Logo.png'
import HomeIcon from '../../assets/icons/HomeIcon'

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <div className='logo'>
                <Link to='/'>
                    <div>
                        <img src={LogoImage} alt="" />
                        <p>TRIAM PROMPT</p>
                    </div>
                </Link>
            </div>
            <div className='top-menu'>
                <div className='top-menu-button active'>
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className='top-menu-button'>
                    <img src="https://img.icons8.com/?size=100&id=100005&format=png&color=000000" alt="" />
                    <p>Community</p>
                </div>
                <div className='top-menu-button'>
                    <img src="https://img.icons8.com/?size=100&id=86134&format=png&color=000000" alt="" />
                    <p>Store</p>
                </div>
                <div className='top-menu-button'>
                    <img src="https://img.icons8.com/?size=100&id=61397&format=png&color=000000" alt="" />
                    <p>Support</p>
                </div>
            </div>
            <div className='bottom-menu'>
                <div className='bottom-menu-button'>
                    <img src="https://img.icons8.com/?size=100&id=84040&format=png&color=000000" alt="" />
                    <p>Setting</p>
                </div>
                <div className='bottom-menu-button'>
                    <img src="https://img.icons8.com/?size=100&id=59781&format=png&color=000000" alt="" />
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    )
}