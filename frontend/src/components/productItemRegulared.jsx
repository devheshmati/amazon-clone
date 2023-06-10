import DiscountInfo from "./discountInfo";
import PriceInfo from "./priceInfo";
import "../styles/productItemRegulared.scss";

export default function ProductItemRegulared({ data }) {
  return (
    <div className="productItemRegulared">
      <div className="imgFrame">
        <img
          src={
            import.meta.env.VITE_LANDING_PAGE_IMG_BASE_URL +
            `products/${data.id}/` +
            data.img
          }
          alt={data.imgAlt}
        />
      </div>
      <div className="info">
        {data.isDiscount && <DiscountInfo data={data.discount} />}
        {data.isPrice &&
          (data.isDiscount ? (
            <PriceInfo
              price={data.price}
              isDiscount={true}
              discount={data.discount}
            />
          ) : (
            <PriceInfo price={data.price} />
          ))}
        {data.isTitle && <p className="disc">{data.title}</p>}
      </div>
    </div>
  );
}
