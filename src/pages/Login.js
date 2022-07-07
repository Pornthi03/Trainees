import '../css/Login.css';
import { Button, Card, Input,Form,Radio, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';



export const Login = () => {
  
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left">
        <img className="logo" src="./scgc-logo.png" alt="LOGO-SCGC"/>
        <h2>Welcome!</h2>
        <p>Enter your personai details<br />and start journey with us</p>
        <Button ghost onClick={() => navigate('./Register')} >Sign up</Button>
      </div>
      <div className="right">
        <Card className="card">
          <h2>Sign in</h2>
          <div
          >
            <Form
              form={form}
              layout="vertical"
              autoComplete="off"
            >
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="deniel123@gmail.com" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Space size={68} className="position">
                <Radio className="radio">Remember me</Radio>
                <Link className="link" to="/">Forget password?</Link>
              </Space>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>
          <hr className='position-hr' />
          <Button className="btn" onClick={() => navigate('/')}><img className="btn-image" src="./scgc-logo.png" alt="Submit"/></Button><br />
          <div className="signin-detail">
            <p className="text" >Don't have a account, </p>
            <Link className="link" to="/">Sign up</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
