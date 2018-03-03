
import {connect} from 'dva';
import Headers from '../components/header/Headers'
import Menus from '../components/menu/Menus'
import {Layout} from 'antd'
import {withRouter} from 'dva/router'
import pathToRegexp from 'path-to-regexp';
const {Footer,Content} = Layout
const  App =(props)=>{
  const {location,menus,children} = props;
  let pathname = location.pathname;
  pathname =  pathname.startsWith('/')?pathname:`/${pathname}`;
  let currentMenu=[];
 const parentMenu = menus.filter(menu=>pathname.indexOf(menu.purl)!=-1);
  if(parentMenu.length > 0){
    currentMenu =  parentMenu[0].children.filter(menu=>menu.url === pathname)
  }
  if(currentMenu.length === 0){
    currentMenu.push({id:'',pid:''})
  }
  const menuProps={
    menus,
    currentMenu
  }
  return(
    <div>
     <Layout>
       <Headers/>
       <Content style={{ padding: '0 50px' }}>
         <Layout style={{ padding: '24px 0', background: '#fff' }}>
           {menus.length===0?null:<Menus {...menuProps} />}
           <Content style={{ padding: '0 24px', minHeight: 755 }}>
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
  const {menus} = state.app;
  return {
    menus
  }
}
export default withRouter(connect(selectMenus)(App))  ;
