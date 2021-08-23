import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Payment from './Payment';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/' component={Home} />
        <Route path='/payment' component={Payment} />

      </Switch>
    </Router>

  );
}