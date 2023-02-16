import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Dropdown, Space, Layout } from 'antd';
import Icon from '../../Components/Icon'
import * as dataList from './config'
import { Input, theme } from 'antd';
import { useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;

interface HeaderView {
  title?: string;
  collapsed?: boolean;
  setCollapsed?: any;
  onChange?: any;
}

const HeaderView: React.FC<HeaderView> = ({ collapsed, setCollapsed, onChange }) => {
  const title = useSelector((state: any) => state?.dashboard?.title);
  return (
    <Header>
      <div className="align-left">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
        <Input placeholder="default size" prefix={<img src="/images/icons/newImages/search.svg" alt="back" />} onChange={onChange} className={'w-96 input-search'} />
      </div>
      <div className="align-right">
        <article className="notification">
          <div className="bell">
            <span className="count">1</span>
            <img src="/images/icons/newImages/bell.svg" alt="back" />
          </div>
          <div className="message">
            <span className="count">1</span>
            <img src="/images/icons/newImages/notify.svg" alt="back" />
          </div>
        </article>
        <Dropdown menu={{ items: dataList?.items }}>
          <a onClick={(e) => e.preventDefault()}>
            <img src="/images/icons/newImages/pro.jpg" alt="back" />
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
