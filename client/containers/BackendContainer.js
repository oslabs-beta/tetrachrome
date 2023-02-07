import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
    fontFamily: 'Inter',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: 'Inter',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BackendContainer = ({ routes }) => {
  
  const filteredRoutes = routes.filter(
    (routeObj, index) =>
      routes.findIndex(
        (item) => item.method === routeObj.method && item.path === routeObj.path
      ) === index
  );

  return (
    <TableContainer component={Paper}>
      <div class="subtitle tc">&#x1F310;Backend Routes</ div>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>METHOD</StyledTableCell>
            <StyledTableCell align="right">PATH</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRoutes.map((route, index) => (
            <StyledTableRow key={route.path + index}>
              <StyledTableCell component="th" scope="row">
                {route.method}
              </StyledTableCell>
              <StyledTableCell align="right">{route.path}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BackendContainer;
