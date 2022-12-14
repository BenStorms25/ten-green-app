import Home from "./pages/Home";
import Data from "./pages/Data";
import Pollutants from "./pages/Pollutants";
import Standards from "./pages/Standards";
import Ozone from "./pages/Ozone";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/pollutants" element={<Pollutants />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/ozone" element={<Ozone />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
