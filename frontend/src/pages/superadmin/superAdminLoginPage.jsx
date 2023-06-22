import "../../styles/superAdminLoginPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SALogin, SALogout } from "../../redux/actions/index";

export default function SuperAdminLoginPage() {
  const [admin, setAdmin] = useState({
    admin: "",
    pwd: "",
  });

  const [err, setErr] = useState("");

  const superAdmin = useSelector((state) => state.superAdminReducer);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem("superAdmin"));
    if (getLocal.status) {
      navigate("main");
    }
  }, []);

  useEffect(() => {
    superAdmin.superAdminStatus && navigate("main");
  }, [superAdmin.superAdminStatus]);

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setAdmin((state) => ({ ...state, [name]: val }));
  };

  const handleSubmit = (e) => {
    console.log("Form Submitted!");
    e.preventDefault();

    const uri = import.meta.env.VITE_API_URL + "super_admin_auth";
    const option = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    };

    fetch(uri, option)
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          dispatch(SALogin(data));
          localStorage.setItem("superAdmin", JSON.stringify(data));
          setErr((state) => (state = ""));
        } else {
          setErr((state) => (state = "Access denied!"));
        }
      })
      .catch((err) => console.log(err));

    setAdmin({
      admin: "",
      pwd: "",
    });
  };

  return (
    <div className="superAdminLoginPage">
      <form method="post" onSubmit={(e) => handleSubmit(e)}>
        <label>
          admin
          <input
            name="admin"
            type="text"
            value={admin.admin}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          password
          <input
            name="pwd"
            type="text"
            value={admin.pwd}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Submit</button>
        {superAdmin.superAdminStatus && <div>You are admin!</div>}
        {err && <div>{err}</div>}
      </form>
    </div>
  );
}
