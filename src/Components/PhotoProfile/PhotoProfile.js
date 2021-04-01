import React from 'react';
import './photoStyles.css';

function PhotoProfile({text, job, photo}){
    return(
        <div className="photoContainer">
            <div className="mainImageContainer">
            <img src={photo} alt="Photographer" className="photo" id="mainProfile"/>
            </div>
            <div className="mainDataContainer">
            <h5 className="profile_info">{text}</h5>
            <h5 className="profile_info">{job}</h5>
            </div>
        </div>
    )
}

export default PhotoProfile;