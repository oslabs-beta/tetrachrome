import React from "react";
import { Link } from "react-router-dom";

function MainContainer() {

const getElementsHandler = () => {
  const frameObj = document.getElementById('app-frame');
  // console.log(frameObj);
  const frameContent = frameObj.contentWindow.document.body.innerHMTL;
  console.log('frame content: ' + frameContent);
}

  return (
    <div>
      <h1>Loading Page</h1>
    <iframe
    id="app-frame"
    src='http://localhost:8080'
    width="100%"
    height="500px"
    ></iframe>
    <button type="button" onClick={getElementsHandler}>Get Elements</button>
     </div>
  );
}

export default MainContainer;
