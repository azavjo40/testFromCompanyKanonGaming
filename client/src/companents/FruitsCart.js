import React from "react";
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
export default FruitsCart;
