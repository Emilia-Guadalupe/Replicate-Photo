import React from 'react';
import './addComment.css';

function AddComment({photo}){
    return(
        <div id="addCommentSection">
            <div>
                <img id="last_image" src={photo} alt="Photographer" />
            </div>
            <div id="phrase_container">
                <p id="question">What do you think about it?</p>
            </div>
        </div>
    )
}

export default AddComment;