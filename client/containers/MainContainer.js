import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import TestWindow from "../components/TestWindow";

const ReactTestWindow = TestWindow.driver("react", {
  React: React,
  ReactDOM: ReactDOM,
});

function MainContainer() {
  // const iFrameRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("message", function (e) {
  //     if (e.origin !== "http://localhost:8080") return;
  //     console.log(e.data);
  //   });
  // }, []);

  const getElementsHandler = () => {
    const frameObj = document.querySelector(".zoid-visible");
    // console.log(frameObj.contentWindow.document);
    console.log(frameObj);
    // const frameContent = frameObj.contentWindow.document.body.innerHMTL;
    // console.log('frame content: ' + frameContent);
  };

  return (
    <div>
      <h1>Loading Page</h1>
      {/* <iframe
    id="app-frame"
    src='http://localhost:8080'
    width="100%"
    height="500px"
    sandbox="allow-scripts"
    ></iframe> */}
      <ReactTestWindow />
      <button type="button" onClick={getElementsHandler}>
        Get Elements
      </button>
    </div>
  );
}

export default MainContainer;
