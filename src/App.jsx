import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animation from "./Components/Animation";
// eslint-disable-next-line
import Home from "./Components/Home";
import ModeState from "./context/ModeState";

export default function App() {
  return (
    <ModeState>
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Animation />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </div>
      </Router>
    </ModeState>
  );
}
