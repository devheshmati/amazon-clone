import "../styles/superAdminLoginPage.scss";
import { useState } from "react";

export default function SuperAdminLoginPage() {
  const [user, setUser] = useState({
    username: "",
    pwd: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setUser((state) => ({ ...state, [name]: val }));
  };

  const handleSubmit = (e) => {
    console.log("Form Submitted!");
    e.preventDefault();

    const url = import.meta.env.VITE_API_URL + "super_admin_auth";
    const option = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch(url, option)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setUser({
      username: "",
      email: "",
    });
  };

  return (
    <div className="testPage">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          username
          <input
            name="username"
            type="text"
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          email
          <input
            name="pwd"
            type="text"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
