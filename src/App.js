import './App.css';
import Header from './Components/Header/Header';
import PhotoProfile from './Components/PhotoProfile/PhotoProfile';
import ButtonElements from './Components/Buttons/ButtonElements';
import MainText from './Components/MainText/MainText';
import Text from './Components/Text/Text';

import Photographer from './Img/ellipse-1.png';
import Designer from './Img/ellipse-2.png';
import Copywriter from './Img/ellipse-3.png';

import Heart from './Img/path.svg';
import Reply from './Img/ic_reply_black_24px.svg'


function App() {
  return (
    <div className="App">
      
      <>
        <Header />
      </>
      
      <div className="elementsContainer">
        <div>
        <PhotoProfile text={"Jamie Andersen"} job={"Photographer"} photo={Photographer} />
        </div>
        <div>
        <ButtonElements img={Heart} />
        </div>
      </div>
      <div id="main_text_container">
        <MainText />
      </div>
      
      <div id="comments_container">
        <p id="comments">Comments (3)</p>
      </div>

      <div id="first_comment">
        <div className="elementsContainer">
          <div>
            <PhotoProfile text={"Jennifer Wood"} job={"Brand Designer"} photo={Designer} />
          </div>
          <div>
            <ButtonElements img={Reply} />
          </div>
        </div>
        <div className="first_text">
          <Text />
        </div>
      </div>
      
      <div id="second-comment">
      <div className="elementsContainer">
        <div>
        <PhotoProfile text={"Jamie Andersen"} job={"Photographer"} photo={Photographer} />
        </div>
        <div>
        <ButtonElements img={Reply} />
        </div>
      </div>
      <div id="second_text">
        <Text />
      </div>
      </div>
      
      <div id="third_comment">
      <div className="elementsContainer">
        <div>
        <PhotoProfile text={"Jeremy Mitchell"} job={"Copywriter"} photo={Copywriter} />
        </div>
        <div>
        <ButtonElements img={Reply} />
        </div>
      </div>
      <div className="first_text">
        <Text />
      </div>
      </div>

    </div>
  );
}

export default App;
