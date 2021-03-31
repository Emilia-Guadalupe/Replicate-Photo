import React from 'react';
import './photoStyles.css';

function PhotoProfile({text, job, photo}){
    return(
        <div id="photoContainer">
            <div id="mainImageContainer">
            <img src={photo} alt="Photographer" className="photo" id="mainProfile"/>
            </div>
            <div id="mainDataContainer">
            <h5>{text}</h5>
            <h5>{job}</h5>
            </div>
        </div>
    )
}

export default PhotoProfile;