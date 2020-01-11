import React, { Fragment } from 'react';
import './assets/css/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Fragment>

        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
      </Fragment>
    </Router>
  )
}
export default App;
