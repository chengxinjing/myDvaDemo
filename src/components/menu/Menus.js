import {Layout,Menu,Icon} from 'antd';
import {Link} from 'dva/router'
const {Sider} =Layout
const {SubMenu} = Menu;
const Menus = (props)=>{
  const {menus,currentMenu} = props;

  const createMenus = menus.map(menu=>{
    return (

      <SubMenu key={menu.id} title={<span><Icon type={menu.icon} />{menu.name}</span>}>
        {menu.children.map(sub=>{
          return  (<Menu.Item key={sub.id}><Link to={sub.url}>{sub.name}</Link></Menu.Item>)
        })}
      </SubMenu>
    )
  })

  return(
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          style={{ height: '100%'}}
          defaultOpenKeys={[`${currentMenu[0].pid}`]}
          selectedKeys={[`${currentMenu[0].id}`]}
        >
        {createMenus}
        </Menu>
      </Sider>
  )
}
export default Menus;
