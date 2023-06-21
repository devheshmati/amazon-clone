import { useDispatch, useSelector } from "react-redux";
import { SALogout } from "../redux/actions/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuperAdminDashboard() {
  const superAdmin = useSelector((state) => state.superAdminReducer);
  const dispatch = useDispatch();
  const localSuperAdmin = JSON.parse(localStorage.getItem("superAdmin"));
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(SALogout());
    localStorage.setItem("superAdmin", JSON.stringify({ status: false }));
    navigate("/super_admin");
  };

  return (
    <>
      {superAdmin.superAdminStatus || localSuperAdmin.status ? (
        <div>
          <span>This is super admin dashboard</span>
          <button onClick={() => handleClick()}>Logout</button>
        </div>
      ) : (
        <div>Access Denied!</div>
      )}
    </>
  );
}
