import React from 'react';
import './buttonStyles.css';

function ButtonElements({img}){
    return(
        <div className="button_container">
            <img src={img} alt="button" className="button_class"/>
        </div>
    )
}

export default ButtonElements;