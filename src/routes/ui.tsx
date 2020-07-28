import React, { useState } from "react";
import { Button } from "antd";

import { Layout, Menu, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import "./ui.less";

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const Ui: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }} className="ui-layout">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} /> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <p>
              Ho hi ! <Button type="primary">Button</Button>
            </p>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default Ui;
