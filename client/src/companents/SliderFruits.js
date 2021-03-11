import React from "react";
import "../styles/fruits/fruits.css";
const SliderFruits = ({ fruits, trans }) => {
  return (
    <div className="slideCont">
      <div className="sliders">
        {fruits &&
          fruits.map((fruit, i) => {
            return (
              <div key={i} style={{ transform: trans }} className="slide">
                <img src={fruit} alt="fruit" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default SliderFruits;
