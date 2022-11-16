import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <>
      <div id="topNav">
        {/* add LOGO here */}
        <ul>
          <li className="navButton">
            <Link to="/gettingstarted">Getting Started</Link>
          </li>
          <li className="navButton">
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </div>
      <div id="sideNav">
        <ul>
          <li className="navButton">
            <Link to="/">Home</Link>
          </li>
          <li className="navButton">
            <Link to="/frontend">Frontend</Link>
          </li>
          <li className="navButton">
            <Link to="/backend">Backend</Link>
          </li>
          <li className="navButton">
            <Link to="/metrics">Metrics</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
