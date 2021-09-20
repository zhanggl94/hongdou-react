import React from 'react'
import './index.less'
import Header from '../Header'
import Sider from '../Sider'
import Main from '../Main'

export default function index() {
  return (
    <div className="container">
      <div className="left-sidebar-container">
        <Sider />
      </div>
      <main className="main-continer">
        <Header />
        <Main />
      </main>
    </div>
  )
}
