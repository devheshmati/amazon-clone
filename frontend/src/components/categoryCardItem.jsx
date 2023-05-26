import "../styles/categoryCardItem.scss";
import { Outlet, Link } from "react-router-dom";
import linkStyle from '../styles/modules/link.module.scss';

export default function CategoryCardItem({ data }) {
  const basicImagePath = import.meta.env.VITE_LANDING_PAGE_IMG_BASE_URL;

  return (
    <div className="categoryCardItem">
      {data.type === "ads" ? (
        <div className="ads-card">
          <div className="context">
            <h3>{data.title}</h3>
            <Link to={data.btnUrl}>{data.btnTitle}</Link>
          </div>
          <div className="ads-context">
            <Link to={data.adUrl}>
              <img
                src={basicImagePath + "cards/ads/" + data.adImg}
                alt={data.adImgAlt}
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="normal-card">
          <h3>{data.title}</h3>
          {data.isDiscount ? (
            <div className="card-item-discount">
              <Link to={data.url}>
                <img
                  src={basicImagePath + "cards/" + data.img}
                  alt={data.imgAlt}
                />
                {data.discount.isTopDeal ? (
                  <div className="topDealInfo">
                    <span>Up to ${data.discount.count}% off</span>
                    <span>Top Deal</span>
                  </div>
                ) : (
                  <div className="dealInfo">
                    <span>`${data.discount.count}% off`</span>
                    <span>Deal</span>
                  </div>
                )}
                <p>{data.discount.context}</p>
              </Link>
            </div>
          ) : data.quadImg ? (
            <div className="card-item-quad">
              {data.quadImg.map((item, index) => (
                <Link key={index} to={item.url}>
                  <img
                    src={basicImagePath + "cards/quad/" + item.img}
                    alt={item.imgAlt}
                  />
                  <h5>{item.title}</h5>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card-item">
              <Link to={data.imgLink}>
                <img
                  src={basicImagePath + "cards/" + data.img}
                  alt={data.imgAlt}
                />
              </Link>
            </div>
          )}
          <Link className={linkStyle.basicLink} to={data.url}>{data.titleLink}</Link>
        </div>
      )}

      <Outlet />
    </div>
  );
}
