import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Pollutants = React.lazy(() => import("./pages/Pollutants"));
const AQForecast = React.lazy(() => import("./pages/AQForecast"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pollutants-and-standards" element={<Pollutants />} />
            <Route path="/aq-forecast" element={<AQForecast />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

// 1207#
