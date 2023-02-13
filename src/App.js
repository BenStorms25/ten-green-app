//import Data from "./pages/Data";
import React from "react"
// import Pollutants from "./pages/Pollutants";
// import Standards from "./pages/Standards";
// import About from "./pages/About";
// import COLeanMore from "./pages/pollutants-learn-more/COLearnMore.js";
// import ArsenicLearnMore from "./pages/pollutants-learn-more/ArsenicLearnMore";
// import CadmiumLearnMore from "./pages/pollutants-learn-more/CadmiumLearnMore";
// import LeadLearnMore from "./pages/pollutants-learn-more/LeadLearnMore";
// import NO2LearnMore from "./pages/pollutants-learn-more/NO2LearnMore";
// import OzoneLearnMore from "./pages/pollutants-learn-more/OzoneLearnMore";
// import NickelLearnMore from "./pages/pollutants-learn-more/NickelLearnMore";
// import SmallParticulateLearnMore from "./pages/pollutants-learn-more/SmallParticulateLearnMore";
// import SO2LearnMore from "./pages/pollutants-learn-more/SO2LearnMore";
// import LargeParticulateLearnMore from "./pages/pollutants-learn-more/LargeParticulateLearnMore.js";
// import NOLearnMore from "./pages/pollutants-learn-more/NOLearnMore";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";


const Home = React.lazy(() => import("./pages/Home"));
const Data = React.lazy(() => import("./pages/Data"));
const Pollutants = React.lazy(() => import("./pages/Pollutants"));
const Standards = React.lazy(() => import("./pages/Standards"));
const About = React.lazy(() => import("./pages/About"));
const COLeanMore = React.lazy(() => import("./pages/pollutants-learn-more/COLearnMore.js"));
const ArsenicLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/ArsenicLearnMore"));
const CadmiumLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/CadmiumLearnMore"));
const LeadLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/LeadLearnMore"));
const NO2LearnMore = React.lazy(() => import("./pages/pollutants-learn-more/NO2LearnMore"));
const OzoneLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/OzoneLearnMore"));
const NickelLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/NickelLearnMore"));
const SmallParticulateLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/SmallParticulateLearnMore"));
const SO2LearnMore = React.lazy(() => import("./pages/pollutants-learn-more/SO2LearnMore"));
const LargeParticulateLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/LargeParticulateLearnMore.js"));
const NOLearnMore = React.lazy(() => import("./pages/pollutants-learn-more/NOLearnMore"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/score-map" element={<Data />} />
            <Route path="/pollutants-and-standards" element={<Pollutants />} />
            <Route path="/aq-forecast" element={<Standards />} />
            <Route path="/about" element={<About />} />
            <Route path="/pollutants-and-standards/co" element={<COLeanMore />} />
            <Route
              path="/pollutants-and-standards/arsenic"
              element={<ArsenicLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/cadmium"
              element={<CadmiumLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/lead"
              element={<LeadLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/nickel"
              element={<NickelLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/no"
              element={<NOLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/no2"
              element={<NO2LearnMore />}
            />
            <Route
              path="/pollutants-and-standards/ozone"
              element={<OzoneLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/small-particulates"
              element={<SmallParticulateLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/large-particulates"
              element={<LargeParticulateLearnMore />}
            />
            <Route
              path="/pollutants-and-standards/so2"
              element={<SO2LearnMore />}
            />
          </Routes>
        </React.Suspense>

      </div>
    </Router>
  );
}

export default App;

// 1207#
