import React from 'react'
import './index.less'
import Header from '../layout/Header'

export default function index() {
  return (
    <div className="container">
      <header className="header-container">
        <Header/>
      </header>
      <div className="left-sidebar-container" style={{ backgroundColor: 'green' }}>leftsidebar</div>
      <main className="main" style={{ backgroundColor: 'gray' }}>main</main>
      <footer className="footer-container" style={{ backgroundColor: 'yellow' }}>footer</footer>
    </div>
  )
}
