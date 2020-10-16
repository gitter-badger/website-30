import React from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import { GithubFilled, LockTwoTone, UserOutlined } from "@ant-design/icons";
import styles from './index.less';

interface Props {

}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
};

const Index: React.FC<Props> = props => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // github授权登录
  const handleGithubLogin = () => {
    const url = `https://github.com/login/oauth/authorize?client_id=f935013f0e2e5d101795&redirect_uri=http://localhost:8000/oauth/redirect`
    window.location.href = url;
  }

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input prefix={<UserOutlined style={{ color: '#1890ff' }} />} size="large" placeholder="用户名：任意字符即可" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password prefix={<LockTwoTone />} size="large" placeholder="密码：codebug" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          登录
        </Button>
      </Form.Item>
      {/* <Form.Item label="第三方登录" >
        <GithubFilled style={{ marginLeft: 12, fontSize: 18 }} onClick={handleGithubLogin} />
      </Form.Item> */}
    </Form>
  )
}

export default Index
