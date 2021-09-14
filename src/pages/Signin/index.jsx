import React from 'react'
import { Button, Form, Input } from 'antd'
import './index.less'

const layout = {
  labelCol: 8,
  wrapperCol: 10
}

const onFinish = (values) => {
  console.log('values: ', values)
}

const Signin = () => {
  return (
    <div className="sign">
      <div className="sign-header"></div>
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
      </div>
    </div>
  )
}
export default Signin;