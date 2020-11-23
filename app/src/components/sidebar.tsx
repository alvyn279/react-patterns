import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      breakpoint={'md'}
      collapsedWidth={'0'}
    >
      <div className={'logo'} />
      <Menu
        theme={'dark'}
        mode={'inline'}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key={'1'}>
          <Link to={'/topic/hooks'}>Hooks</Link>
        </Menu.Item>
        <Menu.Item key={'2'}>
          <Link to={'/topic/other'}>Other</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
