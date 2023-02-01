import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

<<<<<<< HEAD
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const BackendContainer = ({ routes }) => {
  // const routeList = routes.map(route => {
  //  return ( <p>{`method: ${routes[i].method}, path: ${routes[i].path}`}</p> );
  // });
  // console.log(routes);
  // for (let i = 0; i < routes.length; i++) {
  //     routeList.push(<p>{`method: ${routes[i].method}, path: ${routes[i].path}`}</p>)
  // }

=======
  const routeList = [];
  for (let i = 0; i < routes.length; i++) {
      routeList.push(<p>{`method: ${routes[i].method}, path: ${routes[i].path}`}</p>)
  }
  
>>>>>>> 3e17b4d345331202c61b7b3395923bb0461a269a
  return (
    // <>
    //   <h2>User Route Stack: </h2>
    //   {routeList}
    // </>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>METHOD</StyledTableCell>
            <StyledTableCell align="right">PATH</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {routes.map((route, index) => (
            <StyledTableRow key={route.path+index}>
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
