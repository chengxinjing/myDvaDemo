import {Layout,Menu} from 'antd';
const {Header} = Layout;

const Headers =(props)=>{
  return(
    <Header className="header">
      <div className="logo" />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <div>万众普惠贷后管理系统</div>
      </Menu>
    </Header>
  )
}
export default Headers;
