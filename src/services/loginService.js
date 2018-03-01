import request from '../utils/request';
import {stringify} from 'qs';
export  function login(url,userInfo) {

return request(url,{
  method:'post',
  credentials:'include',
  headers:{
    'content-type':'application/x-www-form-urlencoded'
  },
  body:stringify(userInfo)
})
}
