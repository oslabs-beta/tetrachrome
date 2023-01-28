import React from "react";
import Nav2 from "./Nav2";

function Nav() {

  return (
    <>
      <Nav2 />
      <div id="topNav">
        {/* add LOGO here */}
        {/* <p className="logo">
          <Link to="/blueprint"><span id="blue">blue</span><span id="print">print</span></Link>
        </p>
        <ul>
        <li className="navButton">
          <Link to="/blueprint/frontend">frontend</Link>
        </li>
        <li className="navButton">
          <Link to="/blueprint/backend">backend</Link>
        </li>
        <li className="navButton">
          <Link to="/blueprint/metrics">metrics</Link>
        </li>
        <li className="navButton">
          <Link to="/blueprint/gettingstarted">getting started</Link>
        </li>
        <li className="navButton">
          <Link to="/blueprint/docs">docs</Link>
        </li>
        </ul> */}
      </div>
    </>
  );
}

export default Nav;
