import React from 'react';
import {Route,routerRedux} from 'dva/router';
import App from'./routes/App'
const {ConnectedRouter}  = routerRedux
function RouterConfig({ history,app }) {
  return (
    <ConnectedRouter history={history}>
        <Route path='/app/a/a' exact component={App}/>
    </ConnectedRouter>
  );
}

export default RouterConfig;
