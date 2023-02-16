
import Dashboard from './features/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NotFound from './Components/NotFound';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>q
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
