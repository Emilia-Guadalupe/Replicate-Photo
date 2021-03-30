import React from 'react';
import Heart from '../../Img/path.svg';
import './heartStyles.css';

function HeartButton(){
    return(
        <div id="heartContainer">
            <img src={Heart} alt="Heart Button" id="heart_button"/>
        </div>
    )
}

export default HeartButton;