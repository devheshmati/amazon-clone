import { Outlet, Link } from "react-router-dom";
import "../styles/productItemNonRegulared.scss";

export default function ProductItem({ data, type, isRegular }) {
  const basicPath = import.meta.env.VITE_LANDING_PAGE_IMG_BASE_URL;
  //
  const bookPath = basicPath + `products/b${data.id}/` + data.img;
  const productPath = basicPath + `products/${data.id}/` + data.img;

  return (
    <div className="productItemNonRegulared">
      <Link to={data.id}>
        <img src={type === "book" ? bookPath : productPath} alt={data.imgAlt} />
      </Link>
      <Outlet />
    </div>
  );
}
