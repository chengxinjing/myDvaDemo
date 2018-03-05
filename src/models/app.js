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
      //判断是否是登录过
       const response = yield call(appService.isLogin,'/isLogin')
       if(response.data.success){
         const {data} = yield  call(appService.query,'/getMenus');
         yield put({
           type:'updateState',
           payload:{
             menus:data
           }
         })
       }else{
         yield put(routerRedux.push('/login'))

       }
    },
    *loginOut({payload},{put,select,call}){
       yield  call(appService.loginOut,'/loginOut')
       yield  localStorage.removeItem('username')
       yield  put(routerRedux.push('/login'));
    }
  },
  reducers:{
    updateState(state,{payload}){
      return {...state,...payload}
    }
  }


}
