import React, { useState } from 'react';
import { Input, Card, Progress, Layout, Menu, theme } from 'antd';

const useDashboard = () => {

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => console.log(event?.target?.value);


  return {
    collapsed,
    onChange,
    setCollapsed,
  };
};

export default useDashboard;
