import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
const WS_URL = "ws://127.0.0.1:3030";

import Nav from "./Nav";

import MainContainer from "../containers/MainContainer";
import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";
import MetricsContainer from "../containers/MetricsContainer";
import GettingStarted from "./GettingStarted";
import Docs from "./Docs";

function App() {
  const [frame, setFrame] = useState("");
  const socketRef = useRef();
  const [routesStack, setRoutes] = useState([])
  // useWebSocket(WS_URL, {
  //   onOpen: () => {
  //     console.log("websocket connection established");
  //   }
  // });

  function connect() {
    // send a message to the server
    socketRef.current = io("ws://localhost:3030");
    socketRef.current.emit("hello from blueprint", "hello from blueprint");

    // receive a message from the server
    socketRef.current.on("hello from user server", (message) => {
      console.log(message);
    });
    socketRef.current.on("route stack", (routes) => {
      setRoutes(routes);
    });
  }
  useEffect(() => {
    const currentFrame = document.getElementById("app-frame");
    // const currentFrame = await fetch('http://localhost:8080');
    setFrame(currentFrame);
    connect();
  }, []);

  return (
    <>
      <Nav />
      <div id="main-container">
        <Routes>
          <Route path="/blueprint" element={<MainContainer />} />
          <Route
            path="/blueprint/frontend"
            element={<FrontendContainer frame={frame} />}
          />
          <Route path="/blueprint/backend" element={<BackendContainer routes={routesStack}/>} />
          <Route path="/blueprint/metrics" element={<MetricsContainer />} />
          <Route
            path="/blueprint/gettingstarted"
            element={<GettingStarted />}
          />
          <Route path="/blueprint/docs" element={<Docs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
