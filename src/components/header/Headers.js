import {Layout,Menu,Icon} from 'antd';
import styles from './Headers.css'
const {Header} = Layout;
const  {SubMenu} =Menu;

const Headers =(props)=>{
  return(
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item><span>万众普惠贷后管理系统</span></Menu.Item>
        <SubMenu title ={<span><Icon type="user"/>{props.username}</span>} className={styles.nav} >
          <Menu.Item  onClick={props.loginOut} >
           <div  onClick={props.loginOut}> Login Out</div>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  )
}
export default Headers;
