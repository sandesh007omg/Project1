import API_ROUTES from '../../../constants/apiRoutes';
import errorHandler from '../../../utils/errorHandler';
import http from '../../../utils/http';

export const dashboardTransactionSummary = async () => {
  try {
    const result = await http.get(`${API_ROUTES.DASHBOARD_TRANSACTION_SUMMARY}?range=MONTHLY`);
    return result.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const topSalesPerson = async () => {
  try {
    const result = await http.get(`${API_ROUTES.DASHBOARD_TOP_SALESPERSON}?range=DAILY`);
    return result.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const getAccountingSummary = async () => {
  try {
    const result = await http.get(`${API_ROUTES.DASHBOARD_ACCOUNTING_SUMMARY}?range=WEEKLY`);
    return result.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const getInventoryStatus = async () => {
  try {
    const result = await http.get(`${API_ROUTES.DASHBOARD_INVENTORY_STATUS}`);
    return result.data;
  } catch (error) {
    errorHandler(error);
  }
};
