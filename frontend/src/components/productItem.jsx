import { Outlet, Link } from "react-router-dom";
import "../styles/productItem.scss";

export default function ProductItem({ data, type }) {
  const basicPath = import.meta.env.VITE_LANDING_PAGE_IMG_BASE_URL;
  //
  const bookPath = basicPath + `books/${data.id}/` + data.img;
  const productPath = basicPath + `products/${data.id}/` + data.img;

  return (
    <div className="productItem">
      <Link to={data.id}>
        <img src={type === "book" ? bookPath : productPath} alt={data.imgAlt} />
      </Link>
      <Outlet />
    </div>
  );
}
