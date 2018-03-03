const path = require('path');

let userDB = [{
  userName: 'admin',
  password: '123456'
},
  {
    userName: 'super',
    password: 'chengxinjing'
  }]
let menuDB = [{
  id:'1',
  name:'案件管理',
  icon:'appstore',
  children:[{
    id:'101',
    pid:'1',
    name:'案件',
    url:'/case/show'
  },{
    id:'102',
    pid:'1',
    name:'案件类别',
    url:'/case/type'
  }]
},{
    id:'2',
    name:'客户',
    icon:'user',
    children:[{
      id:'201',
      pid:'2',
     name:'客户信息',
    url:'/customer/info'
  },{
    id:'202',
    pid:'2',
    name:'客户修改',
    url:'/customer/modify'
  }]
},{
  id:'3',
    name:'权限管理',
    icon:'setting',
    children:[{
    id:'301',
    pid:'3',
    name:'角色权限',
    url:'/permisson/show'
  }]
}]
module.exports = {
  [`POST /login`](req, res) {
    const {userName, password} = req.body
    const user = userDB.filter(user => user.userName === userName);
    if (user.length > 0 && user[0].password === password) {
      res.cookie('token', JSON.stringify(req.body));
      res.json({
        success: true,
        message: '登录成功'
      })
    } else {
      res.json({
        success: false,
        message: '用户名或密码错误'
      })
      res.status(200).end();
    }
  },[`GET /getMenus`](req,res){
    res.status(200).json(menuDB);
  }
  /*,

  [`GET /!*`](req,res){
    console.log('adsd')
    res.sendFile(path.join('F:\\myDvaDemo\\src','index.js'));
  }*/
}
