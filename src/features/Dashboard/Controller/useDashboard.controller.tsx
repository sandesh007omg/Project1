import { useQuery } from 'react-query';
import {
  dashboardTransactionSummary,
  getAccountingSummary,
  getInventoryStatus,
  topSalesPerson,
} from '../Repository/Dashboard.remote';

const useDashboard = () => {
  const { data: transactionSummary, isLoading: loadingTransactionSummary } = useQuery(
    'transaction-summary',
    dashboardTransactionSummary
  );

  const { data: salesPerson, isLoading: loadingSalesPersion } = useQuery('top-sales-person', topSalesPerson);
  const { data: accountingSummary, isLoading: loadingAccountingSummary } = useQuery(
    'accounting-summary',
    getAccountingSummary
  );

  const { data: inventoryStatus, isLoading: loadingInventoryStatus } = useQuery(
    'inventory-status',
    getInventoryStatus,
    { enabled: false }
  );

  return {
    transactionSummary,
    salesPerson,
    accountingSummary,
    inventoryStatus,
  };
};

export default useDashboard;
