import React from 'react';
import './mainTextStyles.css';

function MainText(){
    return(
        <div id="textContainer">
            <h1 id="mainTitle">Rich Places. Personal Photo Project</h1>
            <p className="main_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p id="link">Read More</p>
        </div>
    )
}

export default MainText;