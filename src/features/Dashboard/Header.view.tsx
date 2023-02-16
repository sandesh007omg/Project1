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

interface HeaderView {
  title?: string;
  collapsed?: boolean;
  setCollapsed?: any;
  onChange?: any;
}

const HeaderView: React.FC<HeaderView> = ({ collapsed, setCollapsed, onChange }) => {
  return (
    <Header>
      <div className="align-left">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
        <Input placeholder="default size" prefix={<Icon iconName="search" />} onChange={onChange} className={'w-96 input-search'} />
      </div>
      <div className="align-right">
        <article className="notification">
          <div className="bell">
            <span className="count">1</span>
            {/* <Icon iconName="icon1" /> */}
            <img src="/public/images/icons/newImages/card1.svg" alt="" />
          </div>
          <div className="message">
            <span className="count">1</span>
            <Icon iconName="message" />
          </div>
        </article>
        <Dropdown menu={{ items: dataList?.items }}>
          <a onClick={(e) => e.preventDefault()}>
            <img src='/public/images/icons/ss.png' alt="AAA" />
            <Space className='text-20-bold'>
              Admin
              <Icon iconName="caret-bottom" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderView;
