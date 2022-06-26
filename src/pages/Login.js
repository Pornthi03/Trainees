import '../css/login.css';
import { Button, Card, Input,Form,Radio, Layout, Col, Row} from 'antd';
import { Link } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';

export const Login = () => {
  const [form] = Form.useForm();
  return (
    <div className="container">
      <div className="left">
        <img className="logo" src="./scgc-logo.png" alt="LOGO-SCGC"/>
        <h2>Welcome!</h2>
        <p>Enter your personai details<br />and start journey with us</p>
          <Button ghost >Sign up</Button>
        <div className="wave"></div>
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
              <div className="signin-detail">
                <Radio className="radio">Remember me</Radio>
                <Link className="link" to="/Signup">Forget password?</Link>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>
          <hr className='position-hr' />
          <Button className="btn"><img className="btn-image" src="./scgc-logo.png" alt="Submit"/></Button>
          <Button className="btn"><img className="btn-image" src="./scgc-logo.png" alt="Submit"/></Button>
          <div className="signin-detail">
            <p className="text" >Don't have a account, </p>
            <Link className="link" to="/">Sign up</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
