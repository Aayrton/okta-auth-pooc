// @ts-nocheck

import React from 'react';
import Header from './Header'
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router';

import TestComponent from './TestComponent'
import logo from '/logo.svg';
import './App.css';


import Home from './Home'

const oktaAuthFirst = new OktaAuth({
  issuer: 'https://dev-16835171.okta.com/oauth2/default',
  clientId: '0oa10lmyof2LWW3TD5d7',
  redirectUri: window.location.origin + '/login/callback'
});

function App() {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <div className="App">
      <Security oktaAuth={oktaAuthFirst} restoreOriginalUri={restoreOriginalUri}>
        <Header />
        <SecureRoute path='/' exact={true} component={Home}/>
        <SecureRoute path='/private' exact={true} component={Home}/>
        <Route path='/login/callback' component={LoginCallback}/>
      </Security>
    </div>
  );
}

export default App;
  