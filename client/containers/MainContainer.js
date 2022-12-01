import React, { useEffect, useState } from "react";

function MainContainer({ frame }) {
  const getElementsHandler = () => {
    const frameObj = document.getElementById('app-frame');
    console.log(frameObj);
    const frameContent = frameObj.contentWindow.document;
    console.log(frameContent);
  }

  return (
    <>
      <h1>Loading Page</h1>
      <iframe id="app-frame"
        src='http://localhost:8080'
        width="100%"
        height="500px"
        sandbox="allow-same-origin allow-scripts"
      />
      {/* <object id="app-frame"
        data='http://localhost:8080'
        width="100%"
        height="500px"
      /> */}
      <button type="button" onClick={getElementsHandler}>Get Elements</button>
    </>
  );
}

export default MainContainer;
