import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router, Redirect, Route } from 'react-router-dom';
import './assets/css/styles.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import store from './redux/store';
import history from './helpers/history';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Fragment>

          <Route path="/" exact>
            {
              localStorage.getItem('mw_auth_token')
                ? <Dashboard />
                : <Redirect to="/login" />
            }
          </Route>
          <Route path="/login" exact component={Login} />
        </Fragment>
      </Router>
    </Provider>
  )
}
export default App;
