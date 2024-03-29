import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, Input, message } from 'antd'
import GitHubLink from '../../components/GitHubLink'
import { userSign } from '../../api/user'
import './index.less'
import { Response } from '../../model/Response'
import { setLocalStorageItems } from '../../util/utils'

const layout = {
  labelCol: 8,
  wrapperCol: 10
}

const Signin = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    try {
      const result = await userSign(values);
      const response = new Response(result.data);
      if (response?.code && response?.jwtToken) {
        // localstorage添加内容
        setLocalStorageItems({
          jwtToken:response.jwtToken, // token
          userId:response.data.id, // 用户id
          userName:response.data.username //用户名称
        })
        history.push('/')
        message.success('登录成功')
      } else {
        message.warning(response.data.message)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="sign">
      <div className="sign-header">
        <div className="sign-header-container">
          <GitHubLink />
        </div>
      </div>
      <div className="sign-body">
        <Form labelCol={{ span: layout.labelCol }} wrapperCol={{ span: layout.wrapperCol }} onFinish={onFinish}>
          <Form.Item name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
            <Input type="password" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: layout.labelCol, span: layout.labelCol }}>
            <Button htmlType="submit" type="primary">登录</Button>
          </Form.Item>
        </Form>
        <div className="sign-body-message">
          没有账户？ <Link to="/signup">先去注册</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin;