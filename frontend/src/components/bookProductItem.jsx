import { Outlet, Link } from "react-router-dom";
import "../styles/bookProductItem.scss";

export default function BookProductItem({ data }) {
  return (
    <div className="bookProductItem">
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
