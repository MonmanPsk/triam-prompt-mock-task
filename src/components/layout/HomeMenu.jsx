import { useNavigate } from 'react-router-dom'

import '../../assets/styles/HomeMenu.css'

import AstronautImage from '../../assets/images/Astronaut.png'

export default function HomeMenu() {
    const navigate = useNavigate();

    return (
        <div className="home-menu">
            <div className='header'>
                <div className='header-line'></div>
                <p>TRIAM PROMPT</p>
                <div className='header-line'></div>
            </div>
            <div className='menu'>
                <div className='new-ai-menu'>
                    <div className='linear-fill'></div>
                    <img className='astronaut-image' src={AstronautImage} alt="" />
                    <p className='title'>Are you new at AI?</p>
                    <div className='get-started-button' onClick={() => { navigate('/practice'); }}>
                        <img src="https://img.icons8.com/?size=100&id=MAaTs0aKUYik&format=png&color=000000" alt="" />
                        <p>Get Started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}