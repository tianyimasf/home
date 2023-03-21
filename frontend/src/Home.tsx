import "./App.css";
import React from "react";
import PFP from "./pfp.jpg";

class Home extends React.Component {
  render() {
    return (
      <body>
        <div className="App">
          <p className="header">Tianyi Ma's Home Page</p>
          <div className="intro">
            <div className="introPfp">
              <img src={PFP} className="pfp"></img>
            </div>
            <div className="introText">
              <p>
                Tianyi is a math nerd who took all the honor math class, has a
                thesis, but didn't get an honor version of the major.
              </p>
              <p>
                She programs quite a bit, and apparently also talks in third
                person perspective
              </p>
              <p>She grew up in Beijing, with a lot of good people.</p>
              <p>
                Her current interests resolves around data and software,
                especially climate informatic
              </p>
              <p>
                <a href="https://www.linkedin.com/in/tianyi-ma-9b2012170/">
                  LinkedIn
                </a>{" "}
                <a href="https://github.com/tianyimasf">Github</a> Email:
                tianyi437@gmail.com
              </p>
            </div>
          </div>
          <br></br>
          <p className="creation">
            Following are some of her coding projects:{" "}
          </p>
          <p className="creation">
            <a href="https://stargazingnight.herokuapp.com/">
              Star gazing! (3D scientific star visualization) Still ongoing
            </a>
          </p>
          <p className="creation">
            <a href="https://www.kaggle.com/code/tianyimasf/real-disaster-tweets-prediction-with-transformer">
              Real Disaster Tweet Classification using Transformer: NLP (70%
              progress)
            </a>
          </p>
          <p className="creation">
            <a href="https://www.kaggle.com/code/tianyimasf/wids-datathon-tianyi-yukyung-and-irsa">
              WiDS Datathon: extreme weather forcasting
            </a>
          </p>
          <p className="creation">
            <a href="https://github.com/tianyimasf/data-mining-specialization-uiuc/blob/main/data-viz/week3/fb_network_3000_viz.png">
              A FB social network visualization created using Tableau
            </a>
          </p>
          <p className="creation">Blogs</p>
          <p className="creation">
            <a href="/endofyearreflect">
              End Of Year Reflect 2022 | last updated: 12/29/2022
            </a>
          </p>
          <p className="creation">
            <a href="/playingoverwatch">
              Playing Overwatch, From 2016 to Now | last updated: 9/22/2022
            </a>
          </p>
          <p className="creation">
            <a href="/lateeveningwalking">
              傍晚散步 Late Evening Walking | last updated: 8/16/2022
            </a>
          </p>
          <p className="creation">
            <a href="/freefromstress">
              Free From Stress | last updated: 8/13/2022
            </a>
          </p>
          <p className="creation">
            <a href="/TODOProjects">TODO: projects | last updated: 8/17/2022</a>
          </p>
        </div>
      </body>
    );
  }
}

export default Home;
