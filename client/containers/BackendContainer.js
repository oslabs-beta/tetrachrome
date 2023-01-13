import React from "react";
import expressObject from "../../build/expressObject.json";
// remember to change the location(path) of the file when bundling
// the file should be in the same folder('bundle') as the bundlesjs/html

const BackendContainer = ({routes}) => {

const routeList = []

console.log(routes);
for (let i = 0; i < routes.length; i++) {
    routeList.push(<h1>{`method: ${routes[i].method}, path: ${routes[i].path}`}</h1>)
}

    // console.log(expressObject)
  return <>
  {routeList}
  </>;
};

export default BackendContainer;
