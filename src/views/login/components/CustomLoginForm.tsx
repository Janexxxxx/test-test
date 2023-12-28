//路由、请求axios、全局状态管理
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const CustomLoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType> name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input style={{ width: '300px' }} prefix={<UserOutlined rev="username" />} />
      </Form.Item>

      <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password style={{ width: '300px' }} prefix={<LockOutlined rev="password" />} />
      </Form.Item>

      {/* <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item>
        <Button
          htmlType="button"
          onClick={() => {
            form.resetFields();
          }}
          style={{ width: '80px', marginRight: '10px' }}
        >
          重置
        </Button>
        <Button type="primary" htmlType="submit" style={{ width: '80px' }}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomLoginForm;
