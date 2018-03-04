import * as  appService from '../services/appService';
import {routerRedux} from 'dva/router';
export default {
  namespace:'app',
  state:{
     menus:[],
    username:localStorage.getItem('username')
  },
  effects:{
    *query({payload},{put,call}){
       const {data} = yield  call(appService.query,'/getMenus');
       yield put({
         type:'updateState',
         payload:{
           menus:data
         }
       })
    },
    *loginOut({payload},{put,select,call}){
       yield  call(appService.loginOut,'/loginOut')
       yield  put(routerRedux.push('/'));
    }
  },
  reducers:{
    updateState(state,{payload}){
      return {...state,...payload}
    }
  }


}
