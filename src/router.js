import React from 'react';
import {Route,routerRedux,Switch,Redirect} from 'dva/router';
import dynamic from 'dva/dynamic'
import App from'./routes/App';
import Login  from './routes/login/Login'
const {ConnectedRouter}  = routerRedux
function RouterConfig({ history,app }) {
  const routes =[{
    path:'/case/show',
    component:()=>require('./components/case/show/')
  },{
    path:'/case/type',
    component:()=>require('./components/case/type/')
  }]
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/'  exact render={()=><Redirect to='/login'/>}/>
        <Route path='/login' exact component={Login}/>
       <App>
         {routes.map(({path,...dynamics},key)=>(
           <Route key ={key} path={path} exact component={dynamic({
             app,
             ...dynamics
           })}/>
           )
         )}
       </App>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
