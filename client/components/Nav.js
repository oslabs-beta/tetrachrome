import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <>
      <div id="topNav">
        {/* add LOGO here */}
        <ul>
          <li className="navButton">
            <Link to="/blueprint/gettingstarted">Getting Started</Link>
          </li>
          <li className="navButton">
            <Link to="/blueprint/docs">Docs</Link>
          </li>
        </ul>
      </div>
      <div id="sideNav">
        <ul>
          <li className="navButton">
            <Link to="/">Home</Link>
          </li>
          <li className="navButton">
            <Link to="/blueprint/frontend">Frontend</Link>
          </li>
          <li className="navButton">
            <Link to="/blueprint/backend">Backend</Link>
          </li>
          <li className="navButton">
            <Link to="/blueprint/metrics">Metrics</Link>
          </li>
          {/* <li className="navButton">
            <Link to="/">Your App</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Nav;
