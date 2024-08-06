import '../../assets/styles/ProfileBar.css'

import MonImg from '../../assets/images/User/Mon.png'
import KuerImg from '../../assets/images/User/Kuer.png'
import MapleImg from '../../assets/images/User/Maple.png'
import GidImg from '../../assets/images/User/Gid.png'
import PeemImg from '../../assets/images/User/Peem.png'

export default function ProfileBar() {
    const date = new Date();

    return (
        <div className="profile-bar">
            <div className='profile'>
                <div className='profile-pic'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150px"
                        height="150px"
                        viewBox="0 0 36 36">
                        <clipPath id="hexagon-clip-path">
                            <use href="#hexagon-path" />
                        </clipPath>
                        <path
                            id="hexagon-path"
                            d="M15.5 0.65470053837926a4 4 0 0 1 4 0l11.58845726812 6.6905989232415a4 4 0 0 1 2 3.4641016151378l0 13.381197846483a4 4 0 0 1 -2 3.4641016151378l-11.58845726812 6.6905989232415a4 4 0 0 1 -4 0l-11.58845726812 -6.6905989232415a4 4 0 0 1 -2 -3.4641016151378l0 -13.381197846483a4 4 0 0 1 2 -3.4641016151378"
                        />
                        <image
                            clipPath="url(#hexagon-clip-path)"
                            width="100%"
                            href={MonImg}
                        ></image>
                    </svg>
                </div>
                <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
                <p>Kantachad Phoodsongkram</p>
                <p className='username'>@monmanpsk</p>
                <div className='view-profile-button'>
                    <img src="https://img.icons8.com/?size=512&id=3buQveFp0BoL&format=png&color=000000" alt="" />
                    <p>Profile</p>
                </div>
            </div>
            <div className='daily-quest'>
                <div className='header'>
                    <p>Daily Quest</p>
                    <img className='next-button' src="https://img.icons8.com/?size=512&id=98971&format=png&color=000000" alt="" />
                </div>
                <div className='quest-list'>
                    <div className='quest'>
                        <div className='quest-title'>
                            <p>Practice AI</p>
                            <p>2/10</p>
                        </div>
                        <div className='quest-progress'>
                            <div className='inner-bar'></div>
                        </div>
                    </div>
                    <div className='quest'>
                        <div className='quest-title'>
                            <p>E-Learning</p>
                            <p>0/10</p>
                        </div>
                        <div className='quest-progress'>
                            <div className='inner-bar'></div>
                        </div>
                    </div>
                    <div className='quest'>
                        <div className='quest-title'>
                            <p>Game Task</p>
                            <p>0/10</p>
                        </div>
                        <div className='quest-progress'>
                            <div className='inner-bar'></div>
                        </div>
                    </div>
                </div>
                <div className='time'>
                    <div className='time-unit'>
                        <p>{23 - date.getHours()}</p>
                        <p>HOUR</p>
                    </div>
                    <div className='time-unit'>
                        <p>{59 - date.getMinutes()}</p>
                        <p>MIN</p>
                    </div>
                    <div className='time-unit'>
                        <p>{59 - date.getSeconds()}</p>
                        <p>SEC</p>
                    </div>
                </div>
            </div>
            <div className='leaderboard'>
                <div className='header'>
                    <img src="https://img.icons8.com/?size=512&id=ShQuUEaU7uIN&format=png&color=000000" alt="" />
                    <p>Leaderboard</p>
                    <img className='next-button' src="https://img.icons8.com/?size=512&id=98971&format=png&color=000000" alt="" />
                </div>
                <div className='user-list'>
                    <div className='user'>
                        <div className='title'>
                            <p>01</p>
                            <img src={KuerImg} alt="" />
                            <p>@kueinwza007</p>
                        </div>
                        <div className='score'>
                            <p>1074</p>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='title'>
                            <p>02</p>
                            <img src={MapleImg} alt="" />
                            <p>@maplecoolgirl</p>
                        </div>
                        <div className='score'>
                            <p>1059</p>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='title'>
                            <p>03</p>
                            <img src={GidImg} alt="" />
                            <p>@englandenglishno1</p>
                        </div>
                        <div className='score'>
                            <p>1003</p>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='title'>
                            <p>04</p>
                            <img src={PeemImg} alt="" />
                            <p>@peemmmmeiei</p>
                        </div>
                        <div className='score'>
                            <p>972</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}