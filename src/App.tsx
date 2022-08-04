import React from 'react';
import logo from './logo.svg';
import PFP from './pfp.jpg';
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <p className='header'>Tianyi Ma's Home Page</p>
        <div className='intro'>
          <div className='introPfp'>
            <img src={PFP} className='pfp'></img>
          </div>
          <div className='introText'>
            <p>Tianyi is a math nerd who took all the honor math class, has a thesis, but didn't get an honor version of the major.</p>
            <p>She programs quite a bit, and apparently also talks in third person perspective</p>
            <p>She grew up in Beijing, with a lot of good people, and consider herself very privileged.</p>
            <p>Her current interests includes algorithmic game theory, data science, and building software infrastructure.</p>
            <p><a href='https://www.linkedin.com/in/tianyi-ma-9b2012170/'>LinkedIn</a> Email: tianyi.ma@scale.com</p>
          </div>
        </div>
        <br></br>
        <p className='creation'>Following are stuff she created: </p>
        <p className='creation'><a href='#!'>Maze Generation</a></p>
      </div>
    </body>
  );
}

export default App;
