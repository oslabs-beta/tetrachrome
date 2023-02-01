import React from "react";

const BackendContainer = ({routes}) => {

  const routeList = [];
  for (let i = 0; i < routes.length; i++) {
      routeList.push(<p>{`method: ${routes[i].method}, path: ${routes[i].path}`}</p>)
  }
  
  return (
    <>
      <h2>User Route Stack: </h2>
      {routeList}
    </>
  )
};

export default BackendContainer;
