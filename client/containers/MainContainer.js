import React, { useEffect, useState } from "react";

import FrontendContainer from "../containers/FrontendContainer";
import BackendContainer from "../containers/BackendContainer";

function MainContainer() {

  return (
    <>
      <iframe id="frame"
        src='http://localhost:8080'
        width="100%"
        height="420px"
        sandbox="allow-same-origin allow-scripts"
      />
    </>
  );
}

export default MainContainer;
