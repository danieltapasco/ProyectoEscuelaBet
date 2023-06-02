import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import LayoutComponent from "./LayoutComponent";

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const checkAutenticationState = () => {
    setIsAuthenticated(true);
    // TO-DO Login...
  };

  useEffect(() => {
    checkAutenticationState();
  });

  return (
    <>
      {isAuthenticated ? (
          <LayoutComponent>

          </LayoutComponent>
      ) : (
        <Form
          name="login-form"
          labelCol={{
            span: 7,
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
            label="Usuario"
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
            label="Contraseña: "
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}
