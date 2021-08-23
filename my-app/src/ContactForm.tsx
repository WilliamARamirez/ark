import React, { FunctionComponent, useState, useRef } from 'react';
import {TextField, Button} from '@material-ui/core/';
import { Link, useHistory, withRouter } from "react-router-dom";
import {
  useRecoilState,
} from 'recoil';
import atoms from './atoms';
import { makeStyles } from '@material-ui/core/styles';
import contacts from './contacts';






const ContactForm : FunctionComponent = (props : any) =>{
const history = useHistory()
const [ppl, setPpl] = useRecoilState(atoms.people)
setPpl(contacts)
const refPpl = useRef(ppl)
const freshId = ppl.length;
 function vCheck(stateV){
  if(stateV=== null || undefined){
    return {
      id: freshId,
      firstName: '',
      lastName:'',
      email: '',
      phone: '',
      capitalInvested: '',
      address: '',
      state: '',
      zipcode: ''
   }
  }
  if(typeof stateV !== undefined ){

    
    const removeDup =(ppl, idToRemove)=>{
      const newArr =  []
      for (let i = 0; ppl.length; i++){
        if(ppl[i]?.id !== idToRemove ){
          newArr.push(ppl[i])
        }
      }return newArr
    }
    
    const newPpl = removeDup(refPpl, stateV?.id);
    console.log(refPpl)
    // setPpl(newPpl)
    
    return {
      id: stateV?.id,
      firstName: stateV?.firstName,
      lastName: stateV?.lastName,
      email: stateV?.email,
      phone: stateV?.phone,
      capitalInvested: stateV?.capitalInvested,
      address: stateV?.address,
      state: stateV?.state,
      zipcode: stateV?.zipcode,
    }
  }
   }
   
 
  const stateObj = props.location.state;
  const newState = vCheck(stateObj)
  const [newContact, setNewContact] = useState(newState)
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  
  
  
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
    
    setPpl(arr)
    e.preventDefault();
    history.push( '/contactView');
  }
  return(
    
<>
<div id='formWapper'>
<div id ='form'>
<h1>Add Contact</h1>
  <form  className={classes.table} noValidate >
    <div>
    <TextField id="standard-basic" name='firstName' defaultValue={newContact.firstName} label='First Name' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='lastName' defaultValue={newContact.lastName} label='Last Name' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='phone' defaultValue={newContact.phone} label='Phone Number' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='email' defaultValue={newContact.email} label='Email' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='capitalInvested'defaultValue={newContact.capitalInvested} label='Capital Invested' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='address'defaultValue={newContact.address} label='address' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='state'defaultValue={newContact.state} label='state' onChange={onChange}  />
    </div>
    <div>
    <TextField id="standard-basic" name='zipcode'defaultValue={newContact.zipcode} label='zipcode' onChange={onChange}  />
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

  export default withRouter(ContactForm);