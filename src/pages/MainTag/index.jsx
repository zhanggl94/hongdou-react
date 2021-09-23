import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import IconFont from '../../components/IconFont'
import { removeMainTag } from '../../redux/actions/mainTags'
import './index.less'

function MainTag({ tag, removeMainTag }) {
    const { pathname } = useLocation();
    const [tagClassName, setClassName] = useState('main-tag ')
    useEffect(() => {
        if (pathname === tag.path) {
            setClassName('main-tag main-tag-active');
        } else {
            setClassName('main-tag');
        }
        console.log('tagClassName: ', tagClassName)
    }, [pathname, tag.path, tagClassName])

    return (
        <div className={tagClassName}>
            <Link to={tag.path}>{tag.title}</Link>
            <div><Button type="link" onClick={() => removeMainTag(tag)} icon={<IconFont className="main-tag-close" type="icon-hd-close" />} /></div>
        </div>
    )
}

export default connect(null, { removeMainTag })(MainTag)
