import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Router, Routes, Route, Outlet } from "react-router-dom";
import Main from "../../components/main";
import Container from "../../components/container";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SuperAdminDashboardPage from "./superAdminDashboardPage";
import SuperAdminProductManagerPage from "./superAdminProductManagerPage";
import SuperAdminCreateProductPage from './superAdminCreateProductPage';

export default function SuperAdminPage() {
  const superAdmin = useSelector((state) => state.superAdminReducer);
  const localSuperAdmin = JSON.parse(localStorage.getItem("superAdmin"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menus = [
    { title: "Dashboard", to: "" },
    {
      type: "dropdown",
      title: "Products",
      items: [
        { title: "Create Product", to: "create_product" },
        { title: "Products Manager", to: "products_manager" },
      ],
    },
    { type: "signout" },
  ];

  return (
    <>
      {superAdmin.status || localSuperAdmin.status ? (
        <Main style={{ position: "relative", marginLeft: "240px" }}>
          <Sidebar data={menus} />
          <Header />
          <Container>
            <SAContent />
          </Container>
          <Footer />
        </Main>
      ) : (
        <div>Access Denied!</div>
      )}
    </>
  );
}

function SAContent() {
  return (
    <Routes>
      <Route index element={<SuperAdminDashboardPage />} />
      <Route path="create_product" element={<SuperAdminCreateProductPage />} />
      <Route
        path="products_manager"
        element={<SuperAdminProductManagerPage />}
      />
    </Routes>
  );
}
