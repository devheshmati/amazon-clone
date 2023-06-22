import "../styles/sidebar.scss";
import { Link, Outlet } from "react-router-dom";
import { SALogout } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown";

export default function Sidebar({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(SALogout());
    localStorage.setItem("superAdmin", JSON.stringify({ status: false }));
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              {!item.type ? (
                <Link to={item.to}>{item.title}</Link>
              ) : item.type === "signout" ? (
                <button onClick={handleClick}>{item.title}</button>
              ) : (
                  <Dropdown data={item.items} title={item.title} />
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
