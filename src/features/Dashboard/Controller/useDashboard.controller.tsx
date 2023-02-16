import React, { useState } from 'react';
import { theme } from 'antd';
import { useDispatch } from 'react-redux';
import { getCardList, getTitle } from '../../../store';
import { cardListed } from '../config';

const useDashboard = () => {

  const [collapsed, setCollapsed] = useState(true);
  const [searchTxt, setSearchTxt] = useState<any>('');
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => setSearchTxt(event?.target?.value);
  const state = {
    title: searchTxt,
    cardList: cardListed,
  };
  dispatch(getTitle(state as any));
  dispatch(getCardList(state as any));
  return {
    searchTxt,
    collapsed,
    onChange,
    setCollapsed,
  };
};

export default useDashboard;
