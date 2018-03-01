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
        yield put(routerRedux.push('/app'))
      }else{
        alert(data.message)
      }
     }
  },
  subscriptions:{
   setup({history}){
    return history.listen(({pathname})=>{
      alert(pathname)
     })
   }
  }
}
