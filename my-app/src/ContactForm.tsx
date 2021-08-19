import React, { FunctionComponent, useState } from 'react';
import {TextField, Button} from '@material-ui/core/';
import { Link, useHistory } from "react-router-dom";
import {
  useRecoilState,
} from 'recoil';
import atoms from './atoms';
import { makeStyles } from '@material-ui/core/styles';
import contacts from './contacts';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const ContactForm : FunctionComponent = () =>{
  const history = useHistory()
  const [newContact, setNewContact] = useState({
    id: 11,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    capitalInvested: '',
    address: '',
    state: '',
    zipcode: '',
  })
  const classes = useStyles();
  const [ppl, setPpl] = useRecoilState(atoms.people)
  setPpl(contacts)
  const onChange = (e: any) =>{
    let value = e.target.value
    if(e.target.name === 'phone' || e.target.name === 'capitalInvested' ||e.target.name === 'zipcode'  ){
      value = parseInt(e.target.value)
    }
    
    setNewContact({
      ...newContact,
    [e.target.name] : value

    });
    

  }
  
  const saveChanges = (e) => {
    const arr = [...ppl, newContact]
    // arr.push(newContact)
    console.log(arr)
    setPpl(arr)
    e.preventDefault();
    history.push( '/contactView');
  }
  return(
<>
<div id='formWapper'>
<div id ='form'>
<h1>Add Contact</h1>
  <form  className={classes.root} noValidate >
    <div>
    <TextField id="standard-basic" name='firstName' defaultValue={''} label='First Name' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='lastName' defaultValue={''} label='Last Name' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='phone' defaultValue={''} label='Phone Number' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='email' defaultValue={''} label='Email' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='capitalInvested'defaultValue={''} label='Capital Invested' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='address'defaultValue={''} label='address' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='state'defaultValue={''} label='state' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='zipcode'defaultValue={''} label='zipcode' onChange={onChange}  />
    </div>
  </form>
  
  <div id='buttons'>
  
  
  <div>
  <Link to = "/contactView">
  <Button variant="contained" color="primary"> Cancel</Button>
  </Link>
  </div>
  <div id='spaceDiv'></div>
  <div>
  <Button variant="contained" color="primary"onClick={saveChanges}> Save</Button>
  </div>
  </div>
  </div>
  </div>
  </>
  )
  }

  export default ContactForm;