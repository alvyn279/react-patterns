import React from 'react';
import { Layout } from 'antd';
import {
  Switch,
  Route,
} from 'react-router-dom';

import '../styles/switcher.css';
import HookDemo from './topic-react-hooks/hook-demo';

const { Content, Header, Footer } = Layout;

const Switcher = () => {
  return (
    <Layout className={'switcher-container'}>
      <Header className={'site-layout-sub-header-background'}>
        React Patterns
      </Header>
      <Content className={'content-container site-layout-background'}>
        <Switch>
          <Route path={'/topic/hooks'}>
            <HookDemo />
          </Route>
          <Route path={'/topic/other'}>
            <div>
              lol
            </div>
          </Route>
          <Route path={'/'}>
            <div>
              Come learn react with me
            </div>
          </Route>
        </Switch>
      </Content>
      <Footer className={'footer'}>React Patterns</Footer>
    </Layout>
  );
};

export default Switcher;
