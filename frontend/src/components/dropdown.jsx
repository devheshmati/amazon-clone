import { Link } from "react-router-dom";
import '../styles/dropdown.scss';

export default function Dropdown({ data, title }) {
  return (
    <div className="dropdown">
      <span className="title">{title}</span>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
