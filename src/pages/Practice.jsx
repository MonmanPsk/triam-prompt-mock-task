import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../assets/styles/Practice.css'

import BackButton from '../components/common/BackButton';
import Astronaut from '../assets/images/Astronaut Practice.png'

import Star1 from '../assets/images/Star/1.png'
import Star2 from '../assets/images/Star/2.png'
import Star3 from '../assets/images/Star/3.png'
import Star4 from '../assets/images/Star/4.png'
import Star5 from '../assets/images/Star/5.png'
import Star6 from '../assets/images/Star/6.png'

export default function Practice() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [level, setLevel] = useState(0);
    const winningWords = [
        "Well done!",
        "Great job!",
        "Nice work!",
        "Awesome play!",
        "Super effort!",
        "Perfect score!",
        "Fantastic!",
        "You did it!",
        "Brilliant move!",
        "Excellent!",
    ]
    const starImages = [
        Star1,
        Star2,
        Star3,
        Star4,
        Star5,
        Star6,
    ]

    function getData() {
        fetch('data/practice.json')
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Unable to fetch data:", error))
    }

    useEffect(() => {
        getData();
    }, [])

    function nextLevel() {
        if (level == 3) navigate('/');
        const choice = document.getElementsByClassName("choice")[data[level].answer - 1];
        choice.style.background = "";
        choice.getElementsByClassName("text-container")[0].style.color = "#081F5C";
        choice.getElementsByClassName("num-box")[0].style.color = "#777777";
        document.getElementsByClassName("shadow")[data[level].answer - 1].style.setProperty('--shadowBeforeBackground', 'linear-gradient(to bottom, #AD6EFE, #0CD7BD)');
        document.getElementsByClassName("result")[0].style.display = "none";
        setLevel(level + 1);
    }

    function checkAnswer(choiceNum) {
        if (choiceNum == data[level].answer) {
            const choice = document.getElementsByClassName("choice")[choiceNum - 1];
            choice.style.background = "linear-gradient(to bottom, #71E200, #00BE6E)";
            choice.getElementsByClassName("text-container")[0].style.color = "#ffffff";
            choice.getElementsByClassName("num-box")[0].style.color = "#ffffff";
            document.getElementsByClassName("shadow")[choiceNum - 1].style.setProperty('--shadowBeforeBackground', '#009657');
            document.getElementsByClassName("result")[0].style.display = "flex";
        } else {
            document.getElementsByClassName("incorrect")[0].style.display = "flex";
            const choice = document.getElementsByClassName("choice")[choiceNum - 1];
            choice.style.background = "linear-gradient(to bottom, #f01e2c, #ee6b6e)";
            choice.getElementsByClassName("text-container")[0].style.color = "#ffffff";
            choice.getElementsByClassName("num-box")[0].style.color = "#ffffff";
            document.getElementsByClassName("shadow")[choiceNum - 1].style.setProperty('--shadowBeforeBackground', '#c30010');
            setTimeout(() => {
                document.getElementsByClassName("incorrect")[0].style.display = "none";
                const choice = document.getElementsByClassName("choice")[choiceNum - 1];
                choice.style.background = "";
                choice.getElementsByClassName("text-container")[0].style.color = "#081F5C";
                choice.getElementsByClassName("num-box")[0].style.color = "#777777";
                document.getElementsByClassName("shadow")[choiceNum - 1].style.setProperty('--shadowBeforeBackground', 'linear-gradient(to bottom, #AD6EFE, #0CD7BD)');
            }, 400)
        }
    }

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="practice">
            <BackButton to={'/'} />
            <div className='incorrect'></div>
            <div className='result'>
                <div className='popup'>
                    <img src={starImages[Math.floor(Math.random() * starImages.length)]} alt="" />
                    <p>{winningWords[Math.floor(Math.random() * winningWords.length)]}</p>
                    <div className='next-button' onClick={nextLevel}>
                        <p>Next</p>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='header-line'></div>
                <p>PRACTICE</p>
                <div className='header-line'></div>
            </div>
            <div className='title'>
                <img src={Astronaut} alt="" />
                <div className='question'>
                    <p>{data[level].question}</p>
                </div>
            </div>
            <div className='answer'>
                <div className='choice shadow' onClick={() => checkAnswer(1)}>
                    <div className='text-container'>
                        <p>{data[level].choice[0]}</p>
                    </div>
                    <div className='num-box-container'>
                        <div className='num-box'>
                            <p>1</p>
                        </div>
                    </div>
                </div>
                <div className='choice shadow' onClick={() => checkAnswer(2)}>
                    <div className='text-container'>
                        <p>{data[level].choice[1]}</p>
                    </div>
                    <div className='num-box-container'>
                        <div className='num-box'>
                            <p>2</p>
                        </div>
                    </div>
                </div>
                <div className='choice shadow' onClick={() => checkAnswer(3)}>
                    <div className='text-container'>
                        <p>{data[level].choice[2]}</p>
                    </div>
                    <div className='num-box-container'>
                        <div className='num-box'>
                            <p>3</p>
                        </div>
                    </div>
                </div>
                <div className='choice shadow' onClick={() => checkAnswer(4)}>
                    <div className='text-container'>
                        <p>{data[level].choice[3]}</p>
                    </div>
                    <div className='num-box-container'>
                        <div className='num-box'>
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}