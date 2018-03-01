const fs =require('fs');
const  path = require('path');
const mock ={};
const mockPath = path.join(__dirname+'/mock');
fs.readdirSync(mockPath).forEach(file=>{
  Object.assign(mock,require('./mock/'+file))
})
export default  mock;
