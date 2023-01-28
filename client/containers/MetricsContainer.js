import React, { useEffect, useState } from "react";

const MetricsContainer = ({ logList }) => {
    
  useEffect(() => {
    console.log("logList: ", logList);
  }, [logList]);

  const logs = [];

  logList.forEach((log, index) => {
    logs.push(
      <p key={index} className="single-log">
        {log}
      </p>
    );
  });

  return (
    <>
      <h2>Metrics: </h2>
      <div id="logs-container">{logs}</div>
    </>
  );
};

export default MetricsContainer;
