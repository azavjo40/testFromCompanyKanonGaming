import React from "react";
import { SliderFruits } from "./index";
const FruitsCart = ({ data }) => {
  const changeFruis = () => {
    if (data) {
      const fruits = data.fruits.map((f) => {
        return [f.fruit, f.fruit, f.fruit, f.fruit];
      });
      return fruits.flat();
    }
  };
  const fruits = changeFruis();
  return (
    <div className="fruitsCart">
      <SliderFruits fruits={fruits} />
    </div>
  );
};
export default FruitsCart;
