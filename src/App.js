import logo from "./logo.svg";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard"
import Result from "./Components/Result"
import Graph from "./Components/Graph"

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
