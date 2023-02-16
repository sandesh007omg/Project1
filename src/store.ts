import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  cardList:'',
};

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    getTitle(state: any, param: any): any {
      const { payload } = param;
      state.title = payload?.title;
    },
    getCardList(state: any, param: any): any {
      const { payload } = param;
      state.cardList = payload?.cardList;
    },
  },
});
export const { getTitle,getCardList } = DashboardSlice.actions;
const store = configureStore({
  reducer:{
    dashboard:DashboardSlice?.reducer,
  }
});

export default store;
