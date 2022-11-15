import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Nav from "./Nav";

import MainContainer from "../containers/MainContainer";
import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";
import MetricsContainer from "../containers/MetricsContainer";
import GettingStarted from "./GettingStarted";
import Docs from "./Docs";

function App() {
  return (
    <>
      {/* <TopNav /> */}
      <Nav />
      <div id="container">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/frontend" element={<FrontendContainer />} />
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
