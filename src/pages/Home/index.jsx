import React from 'react'
import './index.less'
import Header from '../layout/Header'
import Sider from '../layout/Sider'
import MainNav from '../layout/MainNav'
import Main from '../layout/Main'

export default function index() {
  return (
    <div className="container">
      <header className="header-container">
        <Header/>
      </header>
      <div className="left-sidebar-container">
        <Sider/>
      </div>
      <main className="main-continer">
        <MainNav/>
        <Main/>
      </main>
      <footer className="footer-container" style={{ backgroundColor: 'yellow' }}>footer</footer>
    </div>
  )
}
