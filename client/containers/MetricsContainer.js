import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "method", headerName: "Method", width: 130 },
  { field: "url", headerName: "Endpoint", width: 130 },
  { field: "status", headerName: "Status", type: "number", width: 90,},
  { field: "content_length", headerName: "Content Length", type: "number", width: 160, },
  { field: "response_time", headerName: "Response Time", type: "number", width: 160, },
  { field: "date", headerName: "Date", type: "date", width: 160, },
];

const MetricsContainer = ({ logList }) => {
  
  useEffect(() => {
    // console.log("logList: ", logList);
  }, [logList]);

  const logs = [];

  logList.forEach((log, index) => {
    const singleLog = JSON.parse(log);
    singleLog.id = index;
    logs.push(singleLog);

  });

  return (

    <div style={{ height: 400, width: '100%', fontFamily: 'Inter' }}>
      <div class="subtitle tc">HTTP Logs</ div>
      <DataGrid
        rows={logs}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>

  );
};

export default MetricsContainer;
