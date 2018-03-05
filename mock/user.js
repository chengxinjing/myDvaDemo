const path = require('path');
const qs = require('qs');
var Base64 = require('js-base64').Base64;
var sha256 = require('hash.js/lib/hash/sha/256');
let userDB = [{
  id:'0',
  username: 'admin',
  password: 'OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5Mg=='
},
  {
    id:'1',
    username: 'super',
    password: 'OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5Mg=='
  }]
let menuDB = [{
  id:'1',
  pid:'0',
  name:'案件管理',
  icon:'appstore'},{
    id:'101',
    pid:'1',
    name:'案件',
    url:'/case/show'
  },{
    id:'102',
    pid:'1',
    name:'案件类别',
    url:'/case/type'
},{
    id:'2',
    pid:'0',
    name:'客户',
    icon:'user'
},{
      id:'201',
      pid:'2',
      name:'客户信息',
      url:'/customer/info'
  },{
    id:'202',
    pid:'2',
    name:'客户修改',
    url:'/customer/modify'
},{
    id:'3',
    pid:'0',
    name:'权限管理',
    icon:'setting'
},{
    id:'301',
    pid:'3',
    name:'角色权限',
    url:'/permisson/show'
}]
module.exports = {
  [`POST /login`](req, res) {
    let cookie = qs.parse(req.headers.cookie).token;
    const {username, password} = req.body
    const user = userDB.filter(user => user.username === username);
    let hashPassword = Base64.encode(sha256().update(password).digest('hex'));
    if (user.length > 0 && user[0].password === hashPassword) {
      const  now = new Date();
      now.setDate(now.getDate()+1);
      res.cookie('token', JSON.stringify({username:username,deadLine:now.getTime()}),{
        maxAge:900000,
        httpOnly:true,
      });
      res.json({
        success: true,
        message: '登录成功',
        username:username
      })
    } else {
      res.json({
        success: false,
        message: '用户名或密码错误',
        username:''
      })
      res.status(200).end();
    }
  },[`GET /getMenus`](req,res){
    res.status(200).json(menuDB);
  },[`get /loginOut`](req,res){
    res.clearCookie('token');
    res.status(200).end()
  },[`get /isLogin`](req,res){

    const cookie = req.headers.cookie || ''
    const cookies = qs.parse(cookie.replace(/\s/g, ''), { delimiter: ';' })
    const response ={}
    let  token = cookies.token
    if(!token){
      res.status(200).send({message:'Not Login '})
      return
    }
    token  =JSON.parse(token)
    if(token){
      response.success =token.deadLine> new Date().getTime();
    }
    if(response.success){
      //表示token没有过期 保持登录状态

    }
    res.json(response);
    res.status(200).end();
  }
}
