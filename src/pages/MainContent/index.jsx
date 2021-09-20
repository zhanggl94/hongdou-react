import React from 'react'
import { renderRoutes } from 'react-router-config'
import { mainRoutes } from '../../router'

export default function MainContent() {
  return (
    <div>
          {renderRoutes(mainRoutes)}
    </div>
  )
}
