import request from '../utils/request';
export function query(url) {
  return request(url,{credentials:'include'});
}
export  function loginOut(url) {
 return  request(url);
}
