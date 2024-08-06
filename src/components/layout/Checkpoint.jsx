import { useNavigate } from 'react-router-dom'

import '../../assets/styles/Checkpoint.css'

import BackButton from '../common/BackButton'

import Level1 from '../../assets/images/Level/1.png'
import Level2 from '../../assets/images/Level/2.png'
import Level3 from '../../assets/images/Level/3.png'

export default function Checkpoint() {
    const navigate = useNavigate();
    
    return (
        <div className="checkpoint">
            <div className='linear-fill'></div>
            <BackButton to={'/'} />
            <div className='header'>
                <div className='header-line'></div>
                <p>TASK</p>
                <div className='header-line'></div>
            </div>
            <div className='level-header'>
                <p>LEVEL 1</p>
                <div className='progress'>
                    <div className='progress-bar'>
                        <div className='inner-bar' style={{width: '33%'}}></div>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=kPENNmiEJv3b&format=png&color=000000" alt="" />
                </div>
                <img className='astronaut-level' src={Level1} alt="" />
            </div>
            <div className='planets-container'>
                <div className='planet passed' style={{marginLeft: '50px'}} onClick={() => navigate('/level-1')}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
                <div className='planet' style={{marginRight: '350px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
                <div className='planet locked' style={{marginRight: '100px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
            </div>

            <div className='level-header'>
                <p>LEVEL 2</p>
                <div className='progress'>
                    <div className='progress-bar'>
                        <div className='inner-bar' style={{width: '0'}}></div>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=kPENNmiEJv3b&format=png&color=000000" alt="" />
                </div>
                <img className='astronaut-level' src={Level2} alt="" />
            </div>
            <div className='planets-container'>
                <div className='planet locked' style={{marginRight: '200px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
                <div className='planet locked' style={{marginLeft: '300px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
                <div className='planet locked' style={{marginRight: '50px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
            </div>

            <div className='level-header'>
                <p>LEVEL 3</p>
                <div className='progress'>
                    <div className='progress-bar'>
                        <div className='inner-bar' style={{width: '0'}}></div>
                    </div>
                    <img src="https://img.icons8.com/?size=512&id=kPENNmiEJv3b&format=png&color=000000" alt="" />
                </div>
                <img className='astronaut-level' src={Level3} alt="" />
            </div>
            <div className='planets-container'>
                <div className='planet locked' style={{marginRight: '20px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
                <div className='planet locked' style={{marginLeft: '200px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
                <div className='planet locked' style={{marginRight: '250px'}}>
                    <img src="https://img.icons8.com/?size=512&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=512&id=NTsYlUSE7CmD&format=png&color=000000" alt="" />
                </div>
            </div>
        </div>
    )
}