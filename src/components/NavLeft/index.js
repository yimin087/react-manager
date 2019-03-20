import React, { Component } from 'react';
import { Menu } from 'antd';
import './index.less';
import MenuList from '../../common/js/menuConfig'

const SubMenu = Menu.SubMenu;

export class NavLeft extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      MenuTree: ''
    }
  }

  componentDidMount() {
    const MenuTree = this.renderMenu(MenuList)
    this.setState(() => {
      return {
        MenuTree
      }
    })
  }

  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }

  render () {
    const { MenuTree } = this.state
    return (
      <div>
        <div className="navLeft-logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>后台管理</h1>
        </div>
        <Menu mode="vertical" theme="dark">
          { MenuTree }
        </Menu>
      </div>
    )
  }
}

export default NavLeft
