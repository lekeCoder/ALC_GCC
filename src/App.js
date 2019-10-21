import React from 'react';
import logo from './logo.svg';
import './App.css';

import google_logo from './img/gwbg.png';
import andela_logo from './img/andela_rect.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="sponsor">
          <div id="column1">
              <img src={google_logo} className="App-logo" alt="Google logo" />
              <p>Google</p>
          </div>
          <div id="column2">
              <img src={andela_logo} className="App-logo" alt="Andela logo" />
              <p>Andela</p>
          </div>
        </div>

        <p>Thank you guys for the opportunity to learn about Google Cloud Engine.</p>
        <p> The training has exposed to how the cloud works and how to deploy system using the Google Cloud. </p>
        <p> Designed by&nbsp;&nbsp;
        <a
          className="App-link"
          href="https://linkedin.com/in/lekeadeola"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adeola Adeleke
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
