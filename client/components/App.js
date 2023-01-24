import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MainContainer from "../containers/MainContainer";
import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";
import MetricsContainer from "../containers/MetricsContainer";
import GettingStarted from "./GettingStarted";
import Docs from "./Docs";
import { io } from "socket.io-client";


function App() {
  const [frame, setFrame] = useState('');
  //ref hook for socket.io
  const socketRef = useRef();
  const [routesStack, setRoutes] = useState([]);
  const logRef = useRef();
  const [logStack, setLogs] = useState([]);

  //function that connects to the websocket and contains events listeners
  function connectSocketIO() {
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
    socketRef.current.on("log", (winstonLogs) => {
      console.log(winstonLogs);
    });

    logRef.current = io("ws://localhost:3030/log")
    logRef.current.on("hello", (data) => {
      console.log(data);
    });
    logRef.current.on("winstonLog", (data) => {
      console.log(data);
    });
  }

  useEffect(() => {
    const currentFrame = document.getElementById('frame');
    setFrame(currentFrame);
    connectSocketIO();
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
          <Route path="/blueprint/backend" element={<BackendContainer routes={routesStack}/>} />
          <Route path="/blueprint/metrics" element={<MetricsContainer />} />
          <Route path="/blueprint/gettingstarted" element={<GettingStarted />} />
          <Route path="/blueprint/docs" element={<Docs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
