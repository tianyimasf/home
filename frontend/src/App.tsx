import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import MazeGenerator from "./MazeGenerator";
import TODOProject from "./blogs/TODOProjects";
import FreeFromStress from "./blogs/FreeFromStress";
import LateEveningWalking from "./blogs/LateEveningWalking";
import PlayingOverwatch from "./blogs/PlayingOverwatch";
import EndOfYearReflect from "./blogs/EndOFYearReflect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/mazegen" element={<MazeGenerator />}></Route>
      <Route path="/todoprojects" element={<TODOProject />}></Route>
      <Route path="/freefromstress" element={<FreeFromStress />}></Route>
      <Route
        path="/lateeveningwalking"
        element={<LateEveningWalking />}
      ></Route>
      <Route path="/playingoverwatch" element={<PlayingOverwatch />}></Route>
      <Route path="/endofyearreflect" element={<EndOfYearReflect />}></Route>
    </Routes>
  );
}

export default App;
