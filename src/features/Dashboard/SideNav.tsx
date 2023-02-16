import React from 'react';
import { Layout } from 'antd';
import useDashboard from './Controller/useDashboard.controller';
import Greet from './Components/Greetings';
import CardContainer from './Components/Card';
import BarDiagram from './Components/BarDiagrams';
import HeaderView from './Header.view'
import SiderView from './Sider.view'


const { Content } = Layout;

const App: React.FC = () => {
  const { collapsed, onChange, setCollapsed, searchTxt = 'Sandesh' } = useDashboard();
  return (
    <div>
      <Layout>
        <SiderView collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderView collapsed={collapsed} setCollapsed={setCollapsed} onChange={onChange} />
          <Content
            className="custom-scroll"
          >
            <Greet name={searchTxt} greetings={'Morning'} />
            <CardContainer />
            <BarDiagram />
          </Content>
        </Layout>
      </Layout>
    </div >
  );
};

export default App;