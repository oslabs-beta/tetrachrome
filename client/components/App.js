import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Nav from "./Nav";

import MainContainer from "../containers/MainContainer";
import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";
import MetricsContainer from "../containers/MetricsContainer";
import GettingStarted from "./GettingStarted";
import Docs from "./Docs";

function App() {
  const [frame, setFrame] = useState("");

  useEffect(() => {
    const currentFrame = document.querySelector(".zoid-visible");
    // const currentFrame = await fetch('http://localhost:8080');
    setFrame(currentFrame);
  }, []);

  return (
    <>
      {/* <TopNav /> */}
      <Nav />
      <div id="container">
        <Routes>
          <Route path="/" element={<MainContainer frame={frame} />} />
          <Route
            path="/frontend"
            element={<FrontendContainer frame={frame} />}
          />
          <Route path="/backend" element={<BackendContainer />} />
          <Route path="/metrics" element={<MetricsContainer />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
