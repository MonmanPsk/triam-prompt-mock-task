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
                        <img src="https://img.icons8.com/?size=512&id=MAaTs0aKUYik&format=png&color=000000" alt="" />
                        <p>Get Started</p>
                    </div>
                </div>
                <div className='careers-menu'>
                    <p>Career Tasks</p>
                    <div className='careers'>
                        <div className='career' onClick={() => { navigate('/task'); }}>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ZyOJrX7NHhIC&format=png&color=000000" alt="" />
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Software Development</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Graphic Design</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Education</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Content Creation</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Healthcare</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Entertainment</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Product Design</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Architecture</p>
                            </div>
                        </div>
                        <div className='career locked'>
                            <div className='linear-fill'></div>
                            <div className='title'>
                                <img src="https://img.icons8.com/?size=512&id=ONONoVyZoVvz&format=png&color=000000" alt="" />
                                <p>Fashion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}