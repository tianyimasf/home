import React from 'react';
import logo from './logo.svg';
import PFP from './pfp.jpg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import MazeGenerator from './MazeGenerator';
import TODOProject from './TODOProjects';
import FreeFromStress from './freeFromStress';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/mazegen" element={<MazeGenerator />}>
      </Route>
      <Route path="/todoprojects" element={<TODOProject />}>
      </Route>
      <Route path="/freefromstress" element={<FreeFromStress />}>
      </Route>
    </Routes>
  );
}

export default App;
