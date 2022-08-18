import './Blog.css';
import React from 'react';

class TODOProject extends React.Component {
  render() {
    return (
      <body>
        <div className="App">
            <p className='header'>TODO: projects</p>
            <div className='blog-content'>
                <p className='blog-date'>Created: 8/8/2022 | Last updated: 8/13/2022</p>
                <p>(the following is a list of projects I want to finish in the order of appearance. trying to keep it under 3 projects at a time)</p>
                <p><b>Maze generation | in progress</b></p>
                <p>Following is the algorithm: </p>
                <p>Step 1: forming an initial maze:</p>
                <p>First, form an n x n square. for i in n, generate a branch at a rate of alpha ~= 0.5, then the branch can uniformly choose one of each:
                they continue straight, or turn right, or turn left. If they reach a point where moving to that direction would have "touched" 
                another branch, they will proceed moving and "block" the pathway if it won't cause a rectangle formed by the branches of any shape to appear. 
                then they stop growing. edges are considered branches. branches will grow from other branches. this step stops when no branch is still growing.</p>
                <p>Step 2: search for path:</p>
                <p>Pick an entrance. from that entrance, perform BFS. For the first search path that reached an edge and both side of the pathway
                is blocked by branches of at least length 1, open the edge in front of the path. if one entrance doesn't work, try randomly 
                another one</p>
                <p>Notes: implementationally, need to store the branches as lists of coordinates. then uses a BFS to generate branches</p>
                <br></br>
  
                <p><b>Glossary Extraction | not started</b></p>
                <p>Write simple heuristics to extract definitions from textbooks, and display summary statistics about them segmented by chapter.</p>
                <br></br>
  
                <p><b>Math and Art | not started</b></p>
                <p>Combine math and art, generate fun patterns using some mathematic formulas</p>
                <br></br>

                <p><b>3D Shapes | not started</b></p>
                <p>Model 3D Shapes and present them in browser</p>
                <br></br>

                <p><b>Collage Maker | not started</b></p>
                <p>Upload a set of PNGs and make collage with them!</p>
                <br></br>

                <p><b>Graph visualizer and analyzer | not started</b></p>
                <p>Visualize and analyze complex networks! (plan to be implemented in python)</p>
            </div>
        </div>
      </body>
    );
  }
}

export default TODOProject;