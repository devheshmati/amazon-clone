import { Outlet, Link } from "react-router-dom";
import "../styles/productItem.scss";

export default function ProductItem({ data }) {
  return (
    <div className="productItem">
      <Link to={data.id}>
        <img
          src={
            import.meta.env.VITE_LANDING_PAGE_IMG_BASE_URL +
            `products/${data.id}/` +
            data.img
          }
          alt={data.imgAlt}
        />
      </Link>
      <Outlet />
    </div>
  );
}
