import React from 'react';
import logo from './logo.svg';
import PFP from './pfp.jpg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import MazeGenerator from './MazeGenerator';
import Reflection1 from './Reflection1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/reflection1" element={<Reflection1 />}>
      </Route>
      <Route path="/mazegen" element={<MazeGenerator />}>
      </Route>
    </Routes>
  );
}

export default App;
