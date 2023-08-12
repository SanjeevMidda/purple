import './index.css';
import one from "./images/IMG_2672.PNG";

function App() {
  return (
    <div className="App">

      {/* <nav>
        <div className="circle">
          <h3>sm</h3>
        </div>
      </nav> */}

      <div className="cities">
      <h1>SEOUL</h1>
      <h1>LONDON</h1>
      <h1>PARIS</h1>
      </div>
      

      <img src={one} alt="" />
    </div>
  );
}

export default App;
