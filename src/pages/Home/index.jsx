import React from 'react'
import './index.less'

export default function index() {
  return (
    <div className="container">
      <header className="header" style={{ 'background-color': 'red' }}>header</header>
      <div className="left-sidebar" style={{ 'background-color': 'green' }}>leftsidebar</div>
      <main className="main" style={{ 'background-color': 'gray' }}>main</main>
      <footer className="footer" style={{ 'background-color': 'yellow' }}>footer</footer>
    </div>
  )
}