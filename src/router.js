import React from 'react';
import {Route,routerRedux,Switch} from 'dva/router';
import App from'./routes/App';
import Test from'./routes/Test';
import Login from './routes/login/Login'
const {ConnectedRouter}  = routerRedux
function RouterConfig({ history,app }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={Login}/>

          <App>
            <Route path='/test/me' exact component={Test}/>
          </App>

      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
