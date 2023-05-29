import "../styles/productCarousel.scss";
import ProductItem from "../components/productItem";
import BookProductItem from "../components/bookProductItem";
import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function ProductCarousel({ data }) {
  const productWrapper = useRef();
  let scrollAmount = 0;

  const handleClick = (str) => {
    {
      str === "left"
        ? productWrapper.current.scrollTo({
          left: (scrollAmount +=
            (productWrapper.current.offsetWidth /
              (data.products.length / 2)) *
            10),
          behavior: "smooth",
        })
        : productWrapper.current.scrollTo({
          left: (scrollAmount -=
            (productWrapper.current.offsetWidth /
              (data.products.length / 2)) *
            10),
          behavior: "smooth",
        });
    }
  };

  return (
    <div className="productCarousel">
      <div>
        <h3>{data.category}</h3>
      </div>
      <div ref={productWrapper} className="productWrapper">
        {data.type === "book"
          ? data.products.map((item, index) => (
            <BookProductItem key={index} data={item} />
          ))
          : data.products.map((item, index) => (
            <ProductItem key={index} data={item} />
          ))}
      </div>
      <button onClick={() => handleClick("left")} className="prevBtn">
        <Icon icon="basil:caret-left-solid" />
      </button>
      <button onClick={() => handleClick("right")} className="nextBtn">
        <Icon icon="basil:caret-left-solid" hFlip={true} />
      </button>
    </div>
  );
}
