import React from 'react';
import './FinalMessage.css'

const FinalMessage = ({username}) => {
    return (
        <div className="final-message"> 
        Congratulations {username} !
        </div>
    )
}


export default FinalMessage