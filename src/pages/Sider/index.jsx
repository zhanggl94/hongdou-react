import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import './index.less'
import IconFont from '../../components/IconFont'
import menuList from './menuList'
import { addMainTag } from '../../redux/actions/mainTags'

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
          <Menu.Item key={item.key} icon={<IconFont className="sider-icon" type={item.icon} />}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      }
    })
  )
}

const handleMenuItemClick = (mainTags, addMainTag, item) => {
  const tag = {
    title: item.domEvent.target.innerHTML,
    path: item.key
  }
  if (!mainTags.some(t => t.path === item.key)) {
    addMainTag(tag);
  }
}

function Sider({ collapse, mainTags, addMainTag }) {
  const { pathname } = useLocation();
  // 初始化菜单列表
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    setMenus(initMenu(menuList))
  }, [])

  return (
    <div className={collapse ? "left-sider" : "left-sider left-sider-extend"}>
      <div className="title">
        <IconFont className="title-logo" type="icon-hd-hongdou" />
        <span className={collapse ? "title-word-hide" : "title-word"}>HongDou</span>
      </div>
      <Menu mode="inline" onClick={handleMenuItemClick.bind(this, mainTags, addMainTag)} selectedKeys={[pathname]} inlineCollapsed={collapse}>
        {menus}
      </Menu>
    </div>
  )
}

export default connect(({ leftSider, mainTags }) => ({
  collapse: leftSider.collapse,
  mainTags
}), { addMainTag })(Sider)
