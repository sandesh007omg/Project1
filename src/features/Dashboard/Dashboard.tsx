import { Dispatch } from 'redux';
import SideNav from './SideNav';
import { DashboardStyled } from './Dashboard.styled'

const Dashboard = () => {
  return (
    <DashboardStyled>
      <SideNav />
    </DashboardStyled>
  );
};

export default Dashboard;
