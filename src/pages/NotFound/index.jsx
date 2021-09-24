import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import './index.less'

export default function NotFound() {
    const history = useHistory();
    // 返回首页
    const goHome = () => {
        history.push('/hongdou')
    }
    
    return (
        <div>
            <div className="not-found">
                <div>
                    <span className="not-found-word-4">4</span>
                    <span className="not-found-word-0">0</span>
                    <span className="not-found-word-4">4</span></div>
                <div>
                    <Button onClick={goHome}>回到首页</Button>
                </div>
            </div>
        </div>
    )
}
