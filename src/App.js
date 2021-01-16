import logo from './logo.svg';
import './App.css';
import React from "react";
import imageInSrc from "./imageInSrc.jpg"
import style from "./style.css"

function App() {
  return (
    <div className='App'>     
      <div style={{maxWidth:"100vw" ,color:"black" }}>
          <h1 className='title red'  >Beautiful places around the world</h1>
              <div className="sectiondes">
                  <img src="/imageInPublic.jpg" alt ='imageInPublic'/>
                  <h2 className='titleh2'>Spring's beautiful view</h2>
              </div>
          <div className="sectiondes">
              <img src={imageInSrc} alt ='imageInSrc'/>
              <h2 className='titleh2'>Beautiful view in front of the mountains and the sea</h2>
          </div>
      </div>

      <div className="sectiondes">
            <video style={{width:"900px" }} controls>
              <source src="/beautyOfNature.mp4" type="video/mp4" />
            </video>
            <h2 className='titleh2'>Beautiful nature places</h2>
      </div>
    </div>
  );
}

export default App;
