import React from 'react'
import { connect } from 'react-redux'
import MainTag from '../MainTag'
import './index.less'

function MainTags({ mainTags }) {
  return (
    <div className="main-tags">
      {mainTags.map(item => (<MainTag tag={item} key={item.path} />))}
    </div>
  )
}

export default connect(({ mainTags }) => ({ mainTags }), null)(MainTags)