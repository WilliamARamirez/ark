import React, { FunctionComponent } from 'react';
import './App.css';

import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ContactForm from './ContactForm';
import ContactView from './ContactView';

const App : FunctionComponent = ({}) =>{
  return(
  <Router>
      <RecoilRoot>
        <Switch>
          <Route exact path="/" component={ContactForm} />
          <Route exact path="/contactView" component={ContactView} />
          
        </Switch>
      </RecoilRoot>
    </Router>
  )
}

export default App;
