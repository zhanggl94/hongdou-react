import React from 'react'
import { renderRoutes } from 'react-router-config'
import { mainRoutes } from '../../router'
import './index.less'

export default function MainContent() {
  return (
    <div className="main-content">
          {renderRoutes(mainRoutes)}
    </div>
  )
}
