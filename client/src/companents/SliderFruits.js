import React, { useState } from "react";
import "../styles/fruits/fruits.css";
const SliderFruits = ({ fruits }) => {
  const [slide, setSlide] = useState(0);
  const top = () => {
    if (slide === 1200) {
      setSlide(0);
    } else {
      setSlide(slide + 100);
    }
  };
  setTimeout(() => top(), 3000);

  return (
    <div className="slideCont">
      <div className="sliders">
        {fruits &&
          fruits.map((fruit, i) => {
            return (
              <div
                key={i}
                style={{ transform: `translateY(${-slide}px)` }}
                className="slide"
              >
                <img src={fruit} alt="fruit" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default SliderFruits;
