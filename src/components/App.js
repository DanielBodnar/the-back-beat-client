import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from '../store/';

import BaseLayout from './BaseLayout';
import Home from './Home';
import LoggedIn from './LoggedIn';
import Logout from './Logout';
import Main from './Main';
import PrivateRoute from './PrivateRoute';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <BaseLayout>
              <Switch>
                <PrivateRoute path="/" exact component={Main} />
                {/* <Route path="/login" component={Home} /> */}
                <Route path="/login" component={Home} />
                <PrivateRoute path="/logout" component={Logout} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            </BaseLayout>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
