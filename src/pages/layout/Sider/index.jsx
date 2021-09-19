import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import './index.less'
import IconFont from '../../../components/IconFont'
import menuList from './menuList'

const { SubMenu } = Menu;

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
          <Menu.Item key={item.key} icon={<IconFont className="sider-icon" type={item.icon} />}>{item.title}</Menu.Item>
        )
      }
    })
  )
}

export default function Sider() {
  console.log('menuList:', menuList)
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    setMenus(initMenu(menuList))
  }, [])
  return (
    <div>
      <Menu mode="inline">
        {menus}
      </Menu>
    </div>
  )
}
