import './Blog.css';
import React from 'react';

class TODOProject extends React.Component {
  render() {
    return (
      <body>
        <div className="App">
            <p className='header'>TODO: projects</p>
            <div className='blog-content'>
                <p className='blog-date'>Created: 8/17/2022 | Last updated: 8/13/2022</p>
                <p>(the following is a list of projects I want to finish in the order of appearance. trying to keep it under 3 projects at a time)</p>
                
                <p><b>Coursera | in progress</b></p>
                <p>Currently in further education, taking courses on UI/UX design, AWS Services, and Python.</p>
                <br></br>
                
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
                <br></br>

                <p><b>Life Story Kaggle Data Visualization | in progress</b></p>
                <a href='https://www.kaggle.com/code/tianyimasf/life-story-eda-first-kaggle-notebook'>Link to Kaggle Notebook</a>
                
                <p><b>Florial Field | not started</b></p>
                <p>Use generative art to grow a field of flowers🌸</p>
                <br></br>

                <p><b>all about love project part.1 | not started</b></p>
                <p>Inspired by and in honor of bell hooks' book all about love</p>
                <p>Web scrape love poems and quotes from the internet, including authors and original books if possible.</p>
                <br></br>
                
                <p><b>all about love project part.2 | not started</b></p>
                <p>Visualize the love poems and quotes data scraped from part 1</p>
                <br></br>

                <p><b>all about love project part.3 | not started</b></p>
                <p>Train a language model to write love poem</p>
                <br></br>

                <p><b>all about love project part.4 | not started</b></p>
                <p>Develop a simple app to share love poems and quotes</p>
            </div>
        </div>
      </body>
    );
  }
}

export default TODOProject;