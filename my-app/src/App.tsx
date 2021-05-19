import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import React, { Suspense, lazy } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from './configs/routes';
import NotFound from './containers/NotFound/views/NotFound';

const Login = lazy(() => import('./containers/Login/views/Login'));

const App = () => {
  const xAuthToken = localStorage.getItem('X-Auth-Token');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (xAuthToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [xAuthToken]);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            {loggedIn ? routes.map((route) => {
              return <Route {...route} />
            }) : ""}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
};

export default App;
