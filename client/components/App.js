import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";

import MainContainer from "../containers/MainContainer";
import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";
import MetricsContainer from "../containers/MetricsContainer";
import GettingStarted from "./GettingStarted";
import Docs from "./Docs";

function App() {
  const [frame, setFrame] = useState('');


  useEffect(() => {
    const currentFrame = document.getElementById('app-frame');
    // const currentFrame = await fetch('http://localhost:8080');
    setFrame(currentFrame);
  },[]);

  return (
    <>
      <Nav />
      <div id="main-container">
        <Routes>
          <Route path="/blueprint" element={<MainContainer />} />
          <Route path="/blueprint/frontend" element={<FrontendContainer frame={frame} />} />
          <Route path="/blueprint/backend" element={<BackendContainer />} />
          <Route path="/blueprint/metrics" element={<MetricsContainer />} />
          <Route path="/blueprint/gettingstarted" element={<GettingStarted />} />
          <Route path="/blueprint/docs" element={<Docs />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
