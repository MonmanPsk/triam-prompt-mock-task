import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../assets/styles/Level1.css'

import BackButton from '../components/common/BackButton';
import Astronaut from '../assets/images/Astronaut Practice.png'

import Star1 from '../assets/images/Star/1.png'
import Star2 from '../assets/images/Star/2.png'
import Star3 from '../assets/images/Star/3.png'
import Star4 from '../assets/images/Star/4.png'
import Star5 from '../assets/images/Star/5.png'
import Star6 from '../assets/images/Star/6.png'

export default function Level1() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [data, setData] = useState([]);
    const [passed, setPassed] = useState([false, false, false, false])
    const [pair, setPair] = useState([-1, -1])
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
        fetch('data/level-1.json')
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Unable to fetch data:", error))
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        checkPassed();
    }, [passed]);

    useEffect(() => {
        checkAnswer();
    }, [pair]);

    function nextLevel() {
        navigate('/task')
    }

    function checkPassed() {
        for (const ans of passed) {
            if (ans == false) return;
        }
        document.getElementsByClassName('level-1')[0].getElementsByClassName("result")[0].style.display = "flex";
    }

    function checkAnswer() {
        if (pair[0] == -1 || pair[1] == -1) return;

        if (data[state.level].answers[pair[0]] == pair[1]) {
            const newPassed = [...passed];
            newPassed[pair[0]] = true;
            setPassed(newPassed);

            document.getElementsByClassName('left-choice')[0].getElementsByClassName("choice")[pair[0]].style.background = "linear-gradient(225deg, #71E200, #00BE6E)";
            document.getElementsByClassName('left-choice')[0].getElementsByClassName("shadow")[pair[0]].style.setProperty('--shadowBeforeBackground', '#009657');
            document.getElementsByClassName('left-choice')[0].getElementsByClassName("choice")[pair[0]].getElementsByTagName('img')[0].style.display = 'flex'
            document.getElementsByClassName('right-choice')[0].getElementsByClassName("choice")[pair[1]].style.background = "linear-gradient(225deg, #71E200, #00BE6E)";
            document.getElementsByClassName('right-choice')[0].getElementsByClassName("shadow")[pair[1]].style.setProperty('--shadowBeforeBackground', '#009657');
            document.getElementsByClassName('right-choice')[0].getElementsByClassName("choice")[pair[1]].getElementsByTagName('img')[0].style.display = 'flex'
        } else {
            document.getElementsByClassName("incorrect")[0].style.display = "flex";
            document.getElementsByClassName('left-choice')[0].getElementsByClassName("choice")[pair[0]].style.background = "linear-gradient(225deg, #f01e2c, #ee6b6e)";
            document.getElementsByClassName('left-choice')[0].getElementsByClassName("shadow")[pair[0]].style.setProperty('--shadowBeforeBackground', '#c30010');
            document.getElementsByClassName('right-choice')[0].getElementsByClassName("choice")[pair[1]].style.background = "linear-gradient(225deg, #f01e2c, #ee6b6e)";
            document.getElementsByClassName('right-choice')[0].getElementsByClassName("shadow")[pair[1]].style.setProperty('--shadowBeforeBackground', '#c30010');
            setTimeout(() => {
                document.getElementsByClassName("incorrect")[0].style.display = "none";
                document.getElementsByClassName('left-choice')[0].getElementsByClassName("choice")[pair[0]].style.background = "";
                document.getElementsByClassName('left-choice')[0].getElementsByClassName("shadow")[pair[0]].style.setProperty('--shadowBeforeBackground', 'linear-gradient(225deg, #B721FF, #21D4FD)');
                document.getElementsByClassName('left-choice')[0].getElementsByClassName("choice")[pair[0]].getElementsByTagName('p')[0].style.color = "#081F5C";
                document.getElementsByClassName('right-choice')[0].getElementsByClassName("choice")[pair[1]].style.background = "";
                document.getElementsByClassName('right-choice')[0].getElementsByClassName("shadow")[pair[1]].style.setProperty('--shadowBeforeBackground', 'linear-gradient(225deg, #B721FF, #21D4FD)');
                document.getElementsByClassName('right-choice')[0].getElementsByClassName("choice")[pair[1]].getElementsByTagName('p')[0].style.color = "#081F5C";
            }, 400)
        }
        setPair([-1, -1]);
    }

    function selectedChoice(side, answer) {
        if (side == 0 && passed[answer] == true) return;
        if (side == 1 && passed[data[state.level].answers.indexOf(answer)] == true) return;

        if (side == 0 && pair[0] != -1) return;
        if (side == 1 && pair[1] != -1) return;

        let sideName = ''
        if (side == 0) {
            sideName = 'left-choice';
            setPair([answer, pair[1]]);
        } else {
            sideName = 'right-choice';
            setPair([pair[0], answer]);
        }

        const choice = document.getElementsByClassName(sideName)[0].getElementsByClassName("choice")[answer];
        choice.style.background = "linear-gradient(225deg, #B721FF, #21D4FD)";
        choice.getElementsByTagName('p')[0].style.color = "#ffffff";
        document.getElementsByClassName(sideName)[0].getElementsByClassName("shadow")[answer].style.setProperty('--shadowBeforeBackground', '#fff');
    }

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="level-1">
            <BackButton to={'/task'} />
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
            <div className='background'></div>
            <div className='header'>
                <div className='header-line'></div>
                <p>LEVEL 1</p>
                <div className='header-line'></div>
            </div>
            <div className='title'>
                <img src={Astronaut} alt="" />
                <div className='question'>
                    <p>LET’S MATCHING!</p>
                </div>
            </div>
            <div className='pair-container'>
                <div className='left-choice'>
                    <div className='choice shadow' onClick={() => selectedChoice(0, 0)}>
                        <p>Role</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                    <div className='choice shadow' onClick={() => selectedChoice(0, 1)}>
                        <p>Task</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                    <div className='choice shadow' onClick={() => selectedChoice(0, 2)}>
                        <p>Condition</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                    <div className='choice shadow' onClick={() => selectedChoice(0, 3)}>
                        <p>Format</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                </div>
                <div className='right-choice'>
                    <div className='choice shadow' onClick={() => selectedChoice(1, 0)}>
                        <p>{data[state.level].choices[0]}</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                    <div className='choice shadow' onClick={() => selectedChoice(1, 1)}>
                        <p>{data[state.level].choices[1]}</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                    <div className='choice shadow' onClick={() => selectedChoice(1, 2)}>
                        <p>{data[state.level].choices[2]}</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                    <div className='choice shadow' onClick={() => selectedChoice(1, 3)}>
                        <p>{data[state.level].choices[3]}</p>
                        <img src="https://img.icons8.com/?size=512&id=uNzoeGXjLfRM&format=png&color=000000" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}