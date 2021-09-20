import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import IconFont from '../../../components/IconFont'
import menuList from './menuList'

const { SubMenu } = Menu;

// 初始化左侧菜单
const initMenu = menuList => {
  return (
    menuList.map(item => {
      if (item.type === 'submenu') {
        return (
          <SubMenu key={item.key} icon={<IconFont className="sider-icon" type={item.icon} />} title={item.title}>
            {item.children ? initMenu(item.children) : ''}
          </SubMenu>
        )
      } else if (item.type === 'itemGroup') {
        return (
          <Menu.ItemGroup key={item.key} icon={<IconFont className="sider-icon" type={item.icon} />} title={item.title}>
            {item.children ? initMenu(item.children) : ''}
          </Menu.ItemGroup>
        )
      } else {
        return (
          <Menu.Item key={item.key} icon={<IconFont className="sider-icon" onClick={handleMenuItemClick} type={item.icon} />}>
            <Link to={item.key} replace>{item.title}</Link>
          </Menu.Item>
        )
      }
    })
  )
}

const handleMenuItemClick = (item) => {
  console.log('===========', item)
}

export default function Sider() {
  // 初始化菜单列表
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    setMenus(initMenu(menuList))
  }, [])

  return (
    <div>
      <Menu mode="inline" onClick={handleMenuItemClick}>
        {menus}
      </Menu>
    </div>
  )
}
