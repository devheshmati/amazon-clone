import "../styles/discountInfo.scss";

export default function DiscountInfo({data}) {
  return (
    <div className="discountInfo">
      {data.isTopDeal ? (
        <div className="dealInfo">
          <span>Up to ${data.count}% off</span>
          <span>Top Deal</span>
        </div>
      ) : (
        <div className="dealInfo">
          <span>{data.count}% off</span>
          <span>Deal</span>
        </div>
      )}
    </div>
  );
}
