import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

import Icon from '../../Components/Icon'
import * as dataList from './config'
import { Input, Card, Progress, Layout, Menu, theme } from 'antd';
import useDashboard from './Controller/useDashboard.controller';
import Greet from './Components/Greetings';
import CardContainer from './Components/Card';
import BarDiagram from './Components/BarDiagrams';
import HeaderView from './Header.view'
import SiderView from './Sider.view'


const { Header, Sider, Content } = Layout;


const App: React.FC = () => {
  const { collapsed, onChange, setCollapsed } = useDashboard();
  return (
    <div>
      <Layout>
        <SiderView collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderView collapsed={collapsed} setCollapsed={setCollapsed} onChange={onChange} />
          <Content
            className="custom-scroll"
          >
            <Greet name={'Sandesh'} greetings={'Morning'} />
            <CardContainer dataList={dataList} />
            <BarDiagram />
          </Content>
        </Layout>
      </Layout>
    </div >
  );
};

export default App;