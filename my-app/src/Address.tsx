import {FunctionComponent, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core/';
import {Link} from 'react-router-dom'
import { useRecoilValue} from 'recoil';
import contacts from './contacts';

import atoms from './atoms';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Address : FunctionComponent = () =>{
const addresses = useRecoilValue(atoms.people)
  

  
  const classes = useStyles();
 
  return (
    <>
    <div id='aboveTable'>
    <h1>Addresses</h1>
    <Link to = "/contactView">
  <Button variant="contained" color="primary">Contacts</Button>
  </Link>
  </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zipcode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          addresses.map((row: any) => (
          <TableRow key={row.id}>
          <TableCell component="th" scope="row">
          {row.firstName}
          </TableCell>
          <TableCell align="right">{row.lastName}</TableCell>
          <TableCell align="right">{row.address}</TableCell>
          <TableCell align="right">{row.state}</TableCell>
           <TableCell align="right">{row.zipcode}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
  


export default Address;







