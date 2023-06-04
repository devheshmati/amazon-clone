import "../styles/productCarousel.scss";
import ProductItem from "../components/productItem";
import { Icon } from "@iconify/react";
import { useRef, useEffect, useState } from "react";

export default function ProductCarousel({ data }) {
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
    const carouselOffset =
      window.innerWidth - productCarousel.current.offsetWidth;
    const wrapperFullWidth =
      productWrapper.current.scrollWidth -
      productCarousel.current.offsetWidth +
      carouselOffset +
      1;

    scrollCheck(wrapperFullWidth);
  };

  const scrollCheck = (num) => {
    const scrollLeft = productWrapper.current.scrollLeft;
    if (scrollLeft === 0) {
      setScrollStatus((state) => (state = "left"));
    } else if (scrollLeft >= num) {
      setScrollStatus((state) => (state = "right"));
    } else {
      setScrollStatus((state) => (state = "middle"));
    }
  };

  return (
    <div ref={productCarousel} className="productCarousel">
      <div>
        <h3>{data.category}</h3>
      </div>
      <div
        ref={productWrapper}
        className="productWrapper"
        onScroll={(e) => handleScroll(e)}
      >
        {data.products.map((item, index) => (
          <ProductItem key={index} data={item} type={data.type} />
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
    </div>
  );
}
