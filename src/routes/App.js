import {connect} from 'dva';
import Headers from '../components/header/Headers'
import Menus from '../components/menu/Menus'
import {Layout} from 'antd'
import {withRouter} from 'dva/router'
import {arrayToTreeNode} from '../utils/myUtils'
const {Footer,Content} = Layout
const  App =(props)=>{
  const {location,menus,children,dispatch,username} = props;
  let pathname = location.pathname;
  pathname =  pathname.startsWith('/')?pathname:`/${pathname}`;
  let currentMenu=[];
  let treeMenus=[];
  if(menus){
    currentMenu = menus.filter(menu =>menu.url === pathname);
    //将转换成treeNode
    treeMenus  = arrayToTreeNode(menus);
  }
  if(currentMenu.length === 0){
    currentMenu.push({id:'',pid:''})
  }
  const menuProps={
    menus:menus?treeMenus:[],
    currentMenu
  }
   const  loginOut = ()=>{
    dispatch({
      type:'app/loginOut'
    })
  }
  return(
    <div>
     <Layout>
       <Headers loginOut={loginOut} username={username}/>
       <Content style={{ padding: '0 50px' }}>
         <Layout style={{ padding: '24px 0', background: '#fff' }}>
           {treeMenus.length ===0?null:<Menus {...menuProps}/>}
           <Content style={{ padding: '0 24px', minHeight: 450 }}>
             {pathname==='/app'?<div>欢迎使用万众普惠贷后系统</div>:children}
           </Content>
         </Layout>
       </Content>
       <Footer style={{ textAlign: 'center' }}>
         Loan After ©2018 Created by Ant UED
       </Footer>
     </Layout>
    </div>
  )
}
function selectMenus(state) {
  const {menus,username} = state.app;
  return {
    menus,
    username
  }
}
export default withRouter(connect(selectMenus)(App))  ;
