import React from "react";
import expressObject from "../../build/expressObject.json";
// remember to change the location(path) of the file when bundling
// the file should be in the same folder('bundle') as the bundlesjs/html

const BackendContainer = () => {
//   let route;
//   let routes = [];
//   expressObject.forEach((middleware) => {
//     if (middleware.route) {
//       // routes registered directly on the app
//       routes.push(middleware.route);
//     } else if (middleware.name === "router") {
//       // router middleware
//       middleware.handle.stack.forEach(function (handler) {
//         route = handler.route;
//         route && routes.push(route);
//       });
//     }
//   });
function availableRoutesString() {
    return expressObject
      .filter(r => r.route)
      .map(r => Object.keys(r.route.methods)[0].toUpperCase().padEnd(7) + r.route.path)   
  }
const routesArray = availableRoutesString();
const routeList = []

for (let i = 0; i < routesArray.length; i++) {
    routeList.push(<h1>{routesArray[i]}</h1>)
}

//   console.log(typeof availableRoutesString());
//   console.log(availableRoutesString());
//   console.log(route);
//   console.log(routes);

    // console.log(expressObject)
  return (
    <>
      <h2>backend requests</h2>
      {routeList}
    </>
  )
};

export default BackendContainer;
