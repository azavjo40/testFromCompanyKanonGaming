import React from "react";

const SliderFruits = ({ fruits }) => {
  return (
    <div className="sliders">
      {fruits &&
        fruits.map((fruit, i) => {
          return (
            <div className="fruits" key={i}>
              <img src={fruit} alt="fruit" />
            </div>
          );
        })}
    </div>
  );
};
export default SliderFruits;
