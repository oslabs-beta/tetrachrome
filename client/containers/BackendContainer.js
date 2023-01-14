import React from "react";

const BackendContainer = ({routes}) => {

  const routeList = [];

  console.log(routes);
  for (let i = 0; i < routes.length; i++) {
      routeList.push(<h1>{`method: ${routes[i].method}, path: ${routes[i].path}`}</h1>)
  }


  return (
    <>
      <h2>backend requests</h2>
      {routeList}
    </>
  )
};

export default BackendContainer;
