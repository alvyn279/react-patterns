import React from 'react';
import { Layout } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Switcher from './components/switcher';

const App = () => {
  return (
    <Layout>
      <Router>
        <Sidebar />
        <Switcher />
      </Router>
    </Layout>
  );
};

export default App;
