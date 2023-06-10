import "../styles/priceInfo.scss";

export default function PriceInfo({ price, isDiscount, discount }) {
  return (
    <div className="priceInfo">
      {isDiscount ? (
        <div>
          <span>$</span>
          <span>{Math.ceil(price - price * (discount.count / 100))} </span>
          <span className="disc">List Price: </span>
          <span className="prevPrice">${price}</span>
        </div>
      ) : (
        <div>
          <span>$</span>
          <span>{price} </span>
          <span className="disc">Price</span>
        </div>
      )}
    </div>
  );
}
