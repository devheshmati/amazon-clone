import "../styles/productCarousel.scss";
import ProductItemRegulared from "../components/productItemRegulared";
import ProductItemNonRegulared from "../components/productItemNonRegulared";
import { Icon } from "@iconify/react";
import { useRef, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { basicLink } from "../styles/modules/link.module.scss";

export default function ProductCarousel({ data, isRegular }) {
  const [scrollStatus, setScrollStatus] = useState("left");
  const productCarousel = useRef();
  const productWrapper = useRef();
  const styleBtnDisabled = {
    opacity: 0.4,
  };

  useEffect(() => {
    scrollCheck();
  }, []);

  const handleClick = (str) => {
    const scrollVelocity = 6;
    str === "left"
      ? (productWrapper.current.scrollLeft -=
          (productWrapper.current.scrollWidth / data.products.length) *
          scrollVelocity)
      : (productWrapper.current.scrollLeft +=
          (productWrapper.current.scrollWidth / data.products.length) *
          scrollVelocity);
  };

  const handleScroll = () => {
    scrollCheck();
  };

  const scrollCheck = () => {
    const carouselOffset =
      window.innerWidth - productCarousel.current.offsetWidth;
    const wrapperFullWidth =
      productWrapper.current.scrollWidth -
      productCarousel.current.offsetWidth +
      carouselOffset +
      1;
    const scrollLeft = productWrapper.current.scrollLeft;

    if (scrollLeft === 0) {
      setScrollStatus((state) => (state = "left"));
    } else if (scrollLeft >= wrapperFullWidth) {
      setScrollStatus((state) => (state = "right"));
    } else {
      setScrollStatus((state) => (state = "middle"));
    }
  };

  return (
    <div ref={productCarousel} className="productCarousel">
      <div className="top-sec">
        {data.isHeaderTitle && <h3>{data.headerTitle}</h3>}
        {data.isLink && (
          <Link className={basicLink} to={data.linkInfo.url}>{data.linkInfo.title}</Link>
        )}
      </div>
      <div
        ref={productWrapper}
        className="productWrapper"
        onScroll={(e) => handleScroll(e)}
      >
        {isRegular === true
          ? data.products.map((item, index) => (
              <ProductItemRegulared key={index} data={item} type={data.type} />
            ))
          : data.products.map((item, index) => (
              <ProductItemNonRegulared
                key={index}
                data={item}
                type={data.type}
              />
            ))}
      </div>
      <button
        style={scrollStatus === "left" ? styleBtnDisabled : null}
        disabled={scrollStatus === "left" ? true : false}
        onClick={() => handleClick("left")}
        className="prevBtn"
      >
        <Icon icon="basil:caret-left-solid" />
      </button>
      <button
        style={scrollStatus === "right" ? styleBtnDisabled : null}
        disabled={scrollStatus === "right" ? true : false}
        onClick={() => handleClick("right")}
        className="nextBtn"
      >
        <Icon icon="basil:caret-left-solid" hFlip={true} />
      </button>
      <Outlet />
    </div>
  );
}
