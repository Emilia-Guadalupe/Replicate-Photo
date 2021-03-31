import React from 'react';
import './buttonStyles.css';

function ButtonElements({img}){
    return(
        <div id="heartContainer">
            <img src={img} alt="Heart Button" id="heart_button"/>
        </div>
    )
}

export default ButtonElements;