import "../styles/superAdminLoginPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuperAdminLoginPage() {
  const [admin, setAdmin] = useState({
    admin: "",
    pwd: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    isAdmin && navigate("/super_admin/dashboard");
  }, [isAdmin]);

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
        setIsAdmin(data.status);
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
      </form>
      <div>{isAdmin && <p>Your are admin!</p>}</div>
    </div>
  );
}
