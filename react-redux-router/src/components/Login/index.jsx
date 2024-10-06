import React ,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/slices/counterSlice'
import { Button, Checkbox, Form, Input ,message } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";



const LoginForm  = () => {
  const count = useSelector((state) => state.counter.value)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    
    const [loading, setLoading] = useState([]);
    const  onFinish = async (values) => {
    setLoading(['true']);
    // const { username, password } = values;
    const loginResponse = await LoginUser(values);
    console.log('loginResponse',loginResponse)
    if(loginResponse==='success'){
      navigate('/app/stats')
    }
    else{
     message.error('Username or Passwrod is incorrect');
     }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  async function LoginUser(values) {
    const { username, password } = values;
    const url = "https://fakestoreapi.com/auth/login";
    const userObj = JSON.stringify({
      username,
      password
  })
    try {
      const response = await fetch(url,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json' // Specify the content type
      },
        body:userObj
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      const {token} = json;
      localStorage.setItem('isAuth',token)
      setLoading([]);
      return 'success'
    } catch (error) {
      setLoading([]); 
      console.error(error.message);
      return error.message;
    }
  }
  

  return (
    <div className="main-login">
      <h5> mor_2314/83r5^_ </h5>
      <span>{count}</span>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" loading={loading[0]}>
            Login
          </Button>
        </Form.Item>
      </Form>

      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

    </div>
  );
};
export default LoginForm;
