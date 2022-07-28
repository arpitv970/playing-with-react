import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Dynamic from "./components/Dynamic";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Realtime from "./components/Realtime";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/realtime" element={<Realtime />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}
