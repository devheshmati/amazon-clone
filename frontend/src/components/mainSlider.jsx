import { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/mainSlider.scss";
import { Icon } from "@iconify/react";

export default function MainSlider({ data }) {
  const [indexNum, setIndexNum] = useState(0);

  const handleClick = (str) => {
    str === "right"
      ? indexNum < data.length - 1
        ? setIndexNum((currState) => currState + 1)
        : setIndexNum(0)
      : indexNum > 0
      ? setIndexNum((currState) => currState - 1)
      : setIndexNum(data.length - 1);
  };

  return (
    <div className="mainSlider">
      <div className="slideFrame">
        <div
          className="slides"
          style={{
            width: `${data.length * 100}%`,
            marginLeft: `-${indexNum * 100}%`,
          }}
        >
          {data.map((item, index) => (
            <div key={index} className="slide">
              <Link to={item.url}>
                <img
                  src={`${import.meta.env.VITE_BASIC_SLIDER_PATH}${item.img}`}
                  alt={item.alt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => handleClick("left")} id="leftBtn">
        <Icon icon="iwwa:angle-left" />
      </button>
      <button onClick={() => handleClick("right")} id="rightBtn">
        <Icon icon="iwwa:angle-left" hFlip={true} />
      </button>
    </div>
  );
}
