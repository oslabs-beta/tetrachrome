import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//websocket package
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
//url for websockets
const WS_URL = 'ws://127.0.0.1:3030';

import Nav from "./Nav";

import MainContainer from "../containers/MainContainer";
import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";
import MetricsContainer from "../containers/MetricsContainer";
import GettingStarted from "./GettingStarted";
import Docs from "./Docs";



function App() {
  const [frame, setFrame] = useState('');

  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("websocket connection established");
    }
  });

  useEffect(() => {
    const currentFrame = document.getElementById('frame');
    setFrame(currentFrame);
  }, []);

  return (
    <>
      <Nav />
      <div id="container">
        <MainContainer />
      </div>
      <div id="side-container">
        <Routes>
          <Route path="/blueprint/frontend" element={<FrontendContainer frame={frame}/>} />
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
