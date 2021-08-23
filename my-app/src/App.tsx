import React, { FunctionComponent } from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactForm from './ContactForm';
import ContactView from './ContactView';
import ContactButton from './ContactButton';
import Address from './Address';


const App : FunctionComponent = () =>{
  return(
  <Router>
      <RecoilRoot>
        <Switch>
        <Route exact path="/" component={ContactButton} />
          <Route exact path="/contactForm" component={ContactForm} />
          <Route exact path="/contactView" component={ContactView} />
          <Route exact path="/address" component={Address} />
       
        
        </Switch>
      </RecoilRoot>
    </Router>
  )
}

export default App;
