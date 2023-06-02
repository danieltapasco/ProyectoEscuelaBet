import React, { useState } from "react";
import { Route, Link, Switch } from "wouter";
import Form from "./Form";
import "../App.css";
import logo from '../logo.svg';
// Imports Layout
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

export default function LayoutComponent({ childrens }) {
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="menu-style">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logoI">
            <img src={logo} width={100} height={100} alt="Logo"/>
            <p>Sistema Educativo</p>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link href="/"> Home </Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link href="/Comp"> Componente de Prueba </Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="ButtonLayout"
              style={{
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "20px 15px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Switch>
                <Route path="/">
                  <div> {childrens} </div>
                </Route>
                <Route path="/Comp">
                  {() => (
                    <div>
                      <Form />
                    </div>
                  )}
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            El patron ©2023 Created by ...
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
