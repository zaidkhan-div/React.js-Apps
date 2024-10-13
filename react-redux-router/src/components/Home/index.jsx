import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu ,Dropdown,Avatar  } from 'antd';
import { Outlet,Link ,useNavigate } from 'react-router-dom';
import "./style.css";
export default function Home() {
  
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const logoutUser = () =>{
    localStorage.removeItem('isAuth');
    navigate('/')
  }
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         My Profile
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Settings        </a>
      ),
    },
    {
      key: '3',
      label: (
      <span onClick={logoutUser}>
         Logout
         </span>
      ),
    },
  ];
  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: <Link to="/app/stats">Home</Link>,
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <Link to="/app/users">Users</Link>,
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: <Link to="/app/reports">Reports</Link>,
          },{
            key:'4',
            icon: <UploadOutlined />,
            label: <Link to='/app/todo'>Todo</Link>
          }
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        <div class="main-header-component">
        <div class="menu-toggle"> 
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
</div>
<div class="dropdown-menu">
         <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
        class="avt"
      >
          <Avatar
      style={{
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
      </Dropdown>
      </div>
      </div>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>
  )
}
