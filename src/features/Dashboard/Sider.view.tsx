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


const { Header, Sider, Content } = Layout;

interface SiderView {
  collapsed?: boolean;
}

const SiderView: React.FC<SiderView> = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
      <div className="logo" >
        <div className="main-logo">
          <p>H</p>
        </div>
        <p className='text-20-semi'>Main</p>
      </div>
      <Menu
        mode="vertical"
        defaultSelectedKeys={['1']}
        items={dataList?.item}
      />
    </Sider>
  );
};

export default SiderView;
