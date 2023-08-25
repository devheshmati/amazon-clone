import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/homePage";
import DealMotherPage from "./pages/dealMotherPage";
import NoPage from "./pages/noPage";
import "./styles/reset.scss";
import "./styles/basic.scss";
import SuperAdminLoginPage from "./pages/superadmin/superAdminLoginPage";
import SuperAdminPage from "./pages/superadmin/superAdminPage";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers/index";
import { createStore } from "redux";

const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
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
                <Route path="main/*" element={<SuperAdminPage />} />
              </Route>
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
