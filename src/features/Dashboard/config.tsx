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
  DownOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

export const items: MenuProps['items'] = [
  {
    label: (
      <span>Main</span>
    ),
    key: '0.1',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
export const item: MenuItem[] = [
  getItem(<Link to="/dashboard">Dashboard</Link>, '1', <PieChartOutlined />),

  getItem(<Link to="/not-found">Tele</Link>, '2', <DesktopOutlined />),
  getItem(<Link to="/not-found">Customer</Link>, '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
];
export const cardListed = [{ title: 'Total Booking', value: 998, iconName: "/images/icons/newImages/card1.svg", color: '#9747FF' }, { title: 'Available Rooms', value: 998, iconName: "/images/icons/newImages/card2.svg", color: '#FF5722' }, { title: 'Enquiry', value: 998, iconName: "/images/icons/newImages/card3.svg", color: '#009688' }, { title: 'Collections', value: 998, iconName: "/images/icons/newImages/card4.svg", color: '#FF3AD4' }]