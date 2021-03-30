import React from 'react';
import Photographer from '../../Img/ellipse-1.png';
import './photoStyles.css';

function PhotoProfile(){
    return(
        <div id="photoContainer">
            <div id="mainImageContainer">
            <img src={Photographer} alt="Photographer" className="photo" id="mainProfile"/>
            </div>
            <div id="mainDataContainer">
            <h5>Jamie Andersen</h5>
            <h5>Photographer</h5>
            </div>
        </div>
    )
}

export default PhotoProfile;