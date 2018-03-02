
import {connect} from 'dva';
import Headers from '../components/header/Headers'
import Menus from '../components/menu/Menus'
import {Layout} from 'antd'
import {withRouter} from 'dva/router'
const {Footer,Content} = Layout
const  App =(props)=>{
  const {location,menus,children} = props;
  let pathname = location.pathname;
  pathname =  pathname.startsWith('/')?pathname:`/${pathname}`;
  let currentMenu ;
 const getCurrentMenu = (menus,pathname)=>{
   menus

 }
 //获取父菜单
  const getParentMenu=(menus,id,pid)=>{
   return menus.filter(menu=>menu.id === id)
  }
  const getSubMenu =(menu,pid)=>{
   return menu.children.filter(sub=>sub.pid === pid)
  }

  currentMenu = getCurrentMenu(menus,pathname);
  return(
    <div>
     <Layout>
       <Headers/>
       <Content style={{ padding: '0 50px' }}>
         <Layout style={{ padding: '24px 0', background: '#fff' }}>
           <Menus menus={menus} />
           <Content style={{ padding: '0 24px', minHeight: 755 }}>
             {pathname==='/app'?<div>欢迎使用万众普惠贷后系统</div>:children}
             {currentMenu?currentMenu.url:''}
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
  const {menus} = state.app;
  return {
    menus
  }
}
export default withRouter(connect(selectMenus)(App))  ;
