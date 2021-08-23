import {FunctionComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core/';
import { useRecoilState} from 'recoil';
import atoms from './atoms';
import {Link, useHistory, withRouter} from 'react-router-dom'
import Styled from 'styled-components'


const StyledLink = Styled(Link)`

  color: pink;
`

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ContactView : FunctionComponent = () =>{
const [contactList, setContactList] = useRecoilState(atoms.people)
const history = useHistory();

  
  const classes = useStyles();
  function updateContact(row : any){
    
    history.push( '/contactForm',row, )}



  return (
    <>
    <div id='aboveTable'>
    <h1>Contacts</h1>
    <Link to = "/address">
    <Button variant="contained" color="primary"> Addresses</Button>
  </Link>
  </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Capital Invested</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          contactList.map((row: any) => (
          
            
          <TableRow key={row.id} onClick={(e) => {
            e.preventDefault();
            updateContact(row)
            
            } 
            }>
          
          {/* <TableCell component="th" scope="row"> */}
          <TableCell component="th" scope="row">{row.firstName}</TableCell>
          
          
          <TableCell align="right">{row.lastName}</TableCell>
          
          
          <TableCell align="right">{row.phone}</TableCell>
          
          <TableCell align="right">{row.email}</TableCell>
          
           <TableCell align="right">{row.capitalInvested}</TableCell>
           
          </TableRow>
          
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
  


export default withRouter(ContactView);







