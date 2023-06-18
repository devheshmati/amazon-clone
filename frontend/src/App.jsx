import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import DealMotherPage from "./pages/dealMotherPage";
import NoPage from "./pages/noPage";
import "./styles/reset.scss";
import "./styles/basic.scss";
import Main from "./components/main";
import SuperAdminLoginPage from './pages/superAdminLoginPage';
import SuperAdminDashboard from './pages/superAdminDashboard';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="deals/">
              <Route path="mother" element={<DealMotherPage />} />
            </Route>
            <Route path="super_admin/">
              <Route index element={<SuperAdminLoginPage />} />
              <Route path="dashboard" element={<SuperAdminDashboard />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
