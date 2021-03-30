import './App.css';
import Header from './Components/Header/Header';
import PhotoProfile from './Components/PhotoProfile/PhotoProfile';
import HeartButton from './Components/HeartButton/HeartButton';

function App() {
  return (
    <div className="App">
      <>
        <Header />
      </>
      <div id="first_area_container">
        <div>
        <PhotoProfile />
        </div>
        <div>
        <HeartButton />
        </div>
      </div>
    </div>
  );
}

export default App;
