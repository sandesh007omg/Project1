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
import { Input, Card, Progress, Layout, Menu, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Bar from './Bar';
import Icon from '../../features/Dashboard/Components/Icon'
const { Search } = Input;

const { Header, Sider, Content } = Layout;

interface GreetingsHeaderProps {
  name: string;
  greetings: string;
}

const GreetingsHeader = ({ name, greetings }: GreetingsHeaderProps) => (
  <>
    <span className='greetings text-36-semi'>
      Good, {greetings} <span className="bold">{name}</span>
    </span>
  </>
);

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onSearch = (value: string) => console.log(value);
  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => console.log(event?.target?.value);

  const items: MenuProps['items'] = [
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
  const item: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),

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

  const cardList = [{ title: 'Total Booking', value: 998, iconName: 'plus', color: '#9747FF' }, { title: 'Total Booking', value: 998, iconName: 'times', color: '#FF5722' }, { title: 'Total Booking', value: 998, iconName: 'trash', color: '#009688' }, { title: 'Total Booking', value: 998, iconName: 'search', color: '#FF3AD4' }]
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
          <div className="logo" >
            <div className="main-logo">
              {/* <img src="/images/icons/add.svg" alt="logo" /> */}
              <p>H</p>
            </div>
            <p className='text-20-semi'>Main</p>
          </div>
          <Menu
            mode="vertical"
            defaultSelectedKeys={['1']}
            items={item}
          />
        </Sider>
        <Layout className="site-layout">
          <Header >
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
                  <Icon iconName="bell-on" />
                </div>
                <div className="message">
                  <span className="count">1</span>
                  <Icon iconName="message" />
                </div>
              </article>
              <Dropdown menu={{ items }}>
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
          <Content
            className="custom-scroll"
          >
            <GreetingsHeader name={'Sandesh'} greetings={'Morning'} />
            <div className="card-wrapper flex gap-4" >
              {cardList.map((items: any) => (
                <Card style={{ background: `${items?.color}`, color: '#FFFFFF' }}>
                  <article >
                    <div className="text-holder">
                      <span className="title text-20-semi ">{items?.title.toUpperCase()}</span>
                      <span className="value text-24-bold ">{items?.value}</span>
                    </div>
                    <div className="img-holder">
                      <Icon iconName={items?.iconName} />
                    </div>
                  </article>
                  <Progress percent={50} size="small" status="active" />
                </Card>
              )
              )}
            </div>
            <div className="bar-wrap">
              <div className="bar bar-one">
                <h3 className='text-24-normal'>Income And Expenses</h3>
                <Bar />
              </div>
              <div className="bar bar-two">
                <h3 className='text-24-normal'>Visitors</h3>
                <Bar />
              </div>

            </div>
          </Content>
        </Layout>
      </Layout>
    </div >
  );
};

export default App;