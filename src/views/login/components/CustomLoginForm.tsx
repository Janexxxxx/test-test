//路由、请求axios、全局状态管理
import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import md5 from 'js-md5';
import { connect } from 'react-redux';
import { loginApi } from '@/api/services/login';
import { Login } from '@/api/interface';
import { setToken } from '@/redux/modules/global/index';

const CustomLoginForm: React.FC = (props: any) => {
  console.log('eeeee', props);
  const { setToken } = props;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values: Login.ReqLoginForm) => {
    // console.log('Success:', values);
    values.password = md5(values.password);

    const { code, data } = await loginApi(values);
    console.log('sss', code, data);

    if (code === 200 && data) {
      setToken(data?.access_token);
      message.success('登录成功！');
      navigate('/home/index');
    } else {
      message.error('登录失败！');
    }
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
      style={{ maxWidth: 10 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType> name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input style={{ width: '300px' }} placeholder="用户名：admin / user" prefix={<UserOutlined rev="username" />} />
      </Form.Item>

      <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password style={{ width: '300px' }} placeholder="密码：123456" prefix={<LockOutlined rev="password" />} />
      </Form.Item>

      {/* <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item style={{ width: '1000px' }}>
        <Button
          htmlType="button"
          onClick={() => {
            form.resetFields();
          }}
          className="w-[100px] mr-[10px]"
        >
          重置
        </Button>
        <Button type="primary" htmlType="submit" className="w-24">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(CustomLoginForm);
