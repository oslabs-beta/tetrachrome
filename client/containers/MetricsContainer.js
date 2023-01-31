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
    console.log("logList: ", logList);
  }, [logList]);

  const logs = [];

  logList.forEach((log, index) => {
    const singleLog = JSON.parse(log);
    singleLog.id = index;
    logs.push(singleLog);
    // logs.push(
    //   <p key={index} className="single-log">
    //     {log}
    //   </p>
    // );
  });

  return (
    // <>
    //   <h2>Metrics: </h2>
    //   <div id="logs-container">{logs}</div>
    // </>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={logs}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>

    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Method</TableCell>
    //         <TableCell align="right">Endpoint</TableCell>
    //         <TableCell align="right">Status</TableCell>
    //         <TableCell align="right">Content_Length</TableCell>
    //         <TableCell align="right">Response_Time</TableCell>
    //         <TableCell align="right">Date</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {logs.map((log) => (
    //         <TableRow
    //           key={log.date}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {log.method}
    //           </TableCell>
    //           <TableCell align="right">{log.url}</TableCell>
    //           <TableCell align="right">{log.status}</TableCell>
    //           <TableCell align="right">{log.content_length}</TableCell>
    //           <TableCell align="right">{log.response_time}</TableCell>
    //           <TableCell align="right">{log.date}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default MetricsContainer;
