import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Store from './store';
import Api from './lib/api.js'
import { autobind } from 'core-decorators';
import { setAuthAction } from './actions/auth.action';
import App from './components/App/app.component';
import Manage from './components/Manage/manage.component';
//routes
import Login from './routes/Login/index';
import AccountsIndex from './routes/Accounts/index';
import DashBoardIndex from './routes/Dashboard/index';

const history = syncHistoryWithStore(hashHistory, Store);

class router extends React.Component {
  constructor(props) {
    super(props);
  }

  @autobind()
  checkLogin(next, replace) {
    let isLogin = Store.getState().auth.user;
    if (!isLogin && !this.checkLocalSession()) {
      replace('/login');
    }
  }

  @autobind()
  checkLocalSession() {
    let currentUser = Api.currentUser()
    if (currentUser) {
      Store.dispatch(setAuthAction(currentUser));
    }
    return !!currentUser
  }

  render() {
    return (
      <Provider store={Store}>
        <Router history={history}>
          <Route component={App} >
            <Route path="/login" component={Login} />
            <Route path="/" component={Manage} onEnter={this.checkLogin}>
              <IndexRoute component={DashBoardIndex}/>
              <Route path="accounts" component={AccountsIndex} />
            </Route>
          </Route>
          <Redirect from="*" to="/" />
        </Router>
      </Provider>
    );
  }
}

export default router;

