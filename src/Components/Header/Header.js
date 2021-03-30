import React from 'react';
import Rectangle from '../../Img/rectangle-3.png';
import './headerStyles.css';

function Header() {
    return(
        <div id="presentation">
            <img src={Rectangle} alt="Mountains" className="mainImage"></img>
        </div>
    )
}

export default Header;