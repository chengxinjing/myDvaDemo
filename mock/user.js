const path = require('path');

let userDB = [{
  userName: 'admin',
  password: '123456'
},
  {
    userName: 'super',
    password: 'chengxinjing'
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
  }/*,

  [`GET /!*`](req,res){
    console.log('adsd')
    res.sendFile(path.join('F:\\myDvaDemo\\src','index.js'));
  }*/
}
