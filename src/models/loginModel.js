import * as LoginService from '../services/loginService';
import {routerRedux} from 'dva/router';
export default {
  namespace:'login',
  state:{},
  reducers:{

  },
  effects:{
     *login({payload},{put,call}){
      const {data} = yield call(LoginService.login,'/login',payload);
      if(data.success){
        yield put({
          type:'app/query'
        })
        yield put(routerRedux.push('/app'))
      }else{
        alert(data.message)
      }
     }
  },
  subscriptions:{
   setup({history,dispatch}){
    return history.listen(({pathname})=>{
        if(pathname !== '/'){
          //查询menus
          dispatch({
            type:'app/query'
          })
        }
     })
   }
  }
}
