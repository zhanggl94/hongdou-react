import React from 'react'
import { Button } from 'antd'
import IconFont from '../../components/IconFont'
import './index.less'

const GitHubLink = () => {
    return (
        <>
            <Button type="link" href="https://github.com/zhanggl94/hongdou-react" target="_blank"
                icon={<IconFont className="sign-header-github" type="icon-hd-github" />} />
        </>
    )
}
export default GitHubLink