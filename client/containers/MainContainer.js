import React, { useEffect, useState } from "react";

function MainContainer({ frame }) {
  // const getElementsHandler = () => {
  //   console.log(frame);
  //   const frameContent = frameObj.contentWindow.document.body.innerHMTL;
  //   // console.log('frame content: ' + frameContent);
  // }

  return (
    <>
      <h1>Loading Page</h1>
      <iframe id="app-frame"
        src='http://localhost:8080'
        width="100%"
        height="500px"
        sandbox="allow-same-origin allow-scripts"
      />
      {/* <button type="button" onClick={getElementsHandler}>Get Elements</button> */}
    </>
  );
}

export default MainContainer;
