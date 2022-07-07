import '../css/Register.css';
import { Button, Card, Input,Form,Radio,Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


export const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        }
      };

    return (
        <div className="container">
            <div className="r-left">
                <Card className="card">
                    <h2>Create Account</h2>
                    <div
                    >
                        <Form
                        form={form}
                        layout="vertical"
                        autoComplete="off"
                        validateMessages={validateMessages}
                        className="form"
                        >
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                            className="form-Item"
                        >
                            <Input placeholder="deniel123@gmail.com" />
                        </Form.Item>
                        <Space size={40}>
                            <Form.Item
                                className="form-Item "
                                name="firstname"
                                label="First name"
                                rules={[
                                {
                                    required: true,
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                className="form-Item "
                                name="lastname"
                                label="Last name"
                                rules={[
                                {
                                    required: true,
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Space>
                        <Form.Item
                            className="form-Item"
                            name="email"
                            label="Email"
                            rules={[
                            {
                                required: true,
                                type: 'email'
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            className="form-Item"
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
                        <Form.Item
                            className="form-Item"
                            name="confirmpassword"
                            label="Confirm Password"
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
                            Sign up
                            </Button>
                        </Form.Item>
                        </Form>
                    </div>
                    <hr className='position-hr' />
                    <Button className="btn" onClick={() => navigate('/')}><img className="btn-image" src="./scgc-logo.png" alt="Submit"/></Button>
                </Card>
            </div>
            <div className="r-right">
                <img className="logo" src="./scgc-logo.png" alt="LOGO-SCGC"/>
                <h2>Welcome Back!</h2>
                <p>To keep connected with us<br /> please login with personal info</p>
                <Button ghost onClick={() => navigate('/')} >Sign in</Button>
            </div>
        </div>
    )
}