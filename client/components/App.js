import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Nav2 from "./Nav2";
import MainContainer from "../containers/MainContainer";
import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";
import MetricsContainer from "../containers/MetricsContainer";
import GettingStarted from "./GettingStarted";
import { io } from "socket.io-client";
import immer from "immer";

function App() {
  const [frame, setFrame] = useState("");
  //ref hook for socket.io
  const socketRef = useRef();
  //hook to store the backend routes
  const [routesStack, setRoutes] = useState([]);
  const [logList, setLogList] = useState([]);

  //function that connects to the websocket and contains events listeners
  function connectSocketIO() {
    // send a message to the server
    socketRef.current = io("ws://localhost:3030/log");
    console.log("connected to user socket");
    //event listener to receive the user route stack
    socketRef.current.on("route stack", (routes) => {
      setRoutes(routes);
    });
    //event listener to receive logs from the user app
    socketRef.current.on("log", (newLog) => {
      console.log(newLog);
      setLogList((logs) => {
        const newLogs = immer(logs, (draft) => {
          draft.push(newLog);
        });
        return newLogs;
      });
    });
  }

  useEffect(() => {
    const currentFrame = document.getElementById("frame");
    setFrame(currentFrame);
    connectSocketIO();
  }, []);

  return (
    <>
      <Nav2 />
      <div id="container">
        <MainContainer />
      </div>
      <div id="side-container">
        <Routes>
          <Route
            path="/tetrachrome/frontend"
            element={<FrontendContainer frame={frame} />}
          />
          <Route
            path="/tetrachrome/backend"
            element={<BackendContainer routes={routesStack} />}
          />
          <Route
            path="/tetrachrome/metrics"
            element={<MetricsContainer logList={logList} />}
          />
          <Route
            path="/tetrachrome/gettingstarted"
            element={<GettingStarted />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
