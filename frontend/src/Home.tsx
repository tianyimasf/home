import './App.css';
import React from 'react';
import PFP from './pfp.jpg';

class Home extends React.Component {
  render() {
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
          <p className='creation'><a href='/mazegen'>Maze Generation</a></p>
          <p className='creation'>Blogs</p>
          <p className='creation'><a href='/TODOProjects'>TODO: projects | last updated: 8/8/2022</a></p>
          <p className='creation'><a href='/reflection1'>Reflection 1 | last updated: 8/6/2022</a></p>
        </div>
      </body>
    );
  }
}

export default Home;