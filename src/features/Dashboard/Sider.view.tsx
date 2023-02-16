import React from 'react';
import * as dataList from './config'
import { Layout, Menu } from 'antd';


const { Sider } = Layout;

interface SiderView {
  collapsed?: boolean;
}

const SiderView: React.FC<SiderView> = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
      <div className="logo" >
        <div className="main-logo">
          <img src="/images/icons/newImages/log1.svg" alt="back" />
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
