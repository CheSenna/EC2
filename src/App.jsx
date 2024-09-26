import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminSidebar from './admin-components/AdminSideBar';
// eslint-disable-next-line no-unused-vars
import AdminRoutes from './admin-components/AdminRoutes';
import UserRoutes from './components/UserRoutes';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/*" element={<AdminSidebar />} />
          <Route path="/home/*" element={<UserRoutes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
