import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.less'
import IconFont from '../../components/IconFont'
import GitHubLink from '../../components/GitHubLink'
import { getLocalStorageItem, removeLocalStorageItems } from '../../util/utils'
import { toggleCollapse } from '../../redux/actions/leftSider'

// 获取用户名
const userName = getLocalStorageItem('userName')

function Header(props) {
  console.log('==============', props)
  const history = useHistory();
  // 退出事件
  const logout = () => {
    removeLocalStorageItems(['jwtToken', 'userName', 'userId'])
    history.push('/signin')
  }

  // 构建用户Memu菜单
  const userMenu = (
    <Menu>
      <Menu.Item key="signout" onClick={logout}>退出</Menu.Item>
    </Menu>
  )

  const collapseIcon = props.collapse ?
    <Button type="link" onClick={props.toggleCollapse}>
      <IconFont className="icon-font20" type="icon-hd-collapse-right" />
    </Button> :
    <Button type="link" onClick={props.toggleCollapse}>
      <IconFont className="icon-font20" type="icon-hd-collapse-left" />
    </Button >

  return (
    <div className="header">
      <div className="header-left">
        {collapseIcon}
      </div>
      <div className="header-right">
        <div className="header-right-content">
          <Dropdown overlay={userMenu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {userName}<DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div className="header-right-content">
          <GitHubLink />
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({
  collapse: state.leftSider.collapse,
}), { toggleCollapse })(Header);