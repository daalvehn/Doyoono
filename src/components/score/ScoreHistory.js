import React, {useEffect} from 'react';
import "./ScoreHistory.css"

const ScoreHistory = ({score, userName}) => {
   
    const fromStorage = localStorage.getItem('myScore') || ""
    const scoreArray = fromStorage.split(',')
    console.log('to string :') 
    console.log(scoreArray)

    useEffect (() => {
        scoreArray.sort((a,b) => b - a);
        scoreArray.length = 4
        localStorage.setItem('myScore',  (`${score},${scoreArray.toString()}`));
        return () => {
        }
    }, []);

    return (
        <div> 
            <p className="player-history">{userName}'s 5 best games</p>
            <ul>
                {scoreArray.map((score,index) => 
                score && <li key={index}>{score}</li>
            )} 
            </ul>

         </div>
    );
        }
  


export default ScoreHistory