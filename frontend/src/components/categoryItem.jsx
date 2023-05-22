import {Outlet, Link} from 'react-router-dom';
import "../styles/categoryItem.scss";

export default function CategoryItem({ item }) {
  return (
    <div className="category-item">
      {item.type === "card" ? (
        <div className="category-card">
          <Link to={import.meta.env.VITE_BASE_URL + item.category}>
            <img
              src={
                import.meta.env.VITE_BASIC_PATH_CATEGORY_ITEM +
                "cards/" +
                item.cardImg
              }
              alt={item.cardAlt}
            />
            <p>{item.category}</p>
          </Link>
        </div>
      ) : (
        <div className="category-header">
          {item.linkActive ? (
            <Link to={import.meta.env.VITE_BASE_URL + item.category}>
              <img
                src={
                  import.meta.env.VITE_BASIC_PATH_CATEGORY_ITEM +
                  "headers/" +
                  item.headerImg
                }
                alt={item.headerAlt}
              />
              <h3>{item.title}</h3>
            </Link>
          ) : (
            <div>
              <img
                src={
                  import.meta.env.VITE_BASIC_PATH_CATEGORY_ITEM +
                  "headers/" +
                  item.headerImg
                }
                alt={item.headerAlt}
              />
              <h3>{item.title}</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
