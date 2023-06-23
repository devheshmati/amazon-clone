import "../styles/dropdown.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function Dropdown({ data, title }) {
  const [toggleBtn, setToggleBtn] = useState({ status: false });
  const roateStyle = {
    transform: toggleBtn ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <div className="dropdown">
      <div>
        <button
          onClick={() =>
            setToggleBtn((state) => (state = { status: !state.status }))
          }
        >
          <span>{title}</span>
          <span className={toggleBtn.status ? "active" : ""}>
            <Icon icon="icon-park-solid:up-one" />
          </span>
        </button>
      </div>
      <div>
        <ul className={toggleBtn.status ? "active" : ""}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
