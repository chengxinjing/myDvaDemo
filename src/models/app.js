import * as  appService from '../services/appService';
export default {
  namespace:'app',
  state:{
     menus:[]
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
    }
  },
  reducers:{
    updateState(state,{payload}){
      return {...state,...payload}
    }
  }


}
