import React from "react";
import { useSelector } from "react-redux";
import "../styles/country/country.css";
function Question2() {
  const items = useSelector((state) => state.country.items);
  return (
    <div className="country">
      {" "}
      {items &&
        items.map((item, i) => {
          return <h4 key={item.name}>{item.name}</h4>;
        })}
    </div>
  );
}
export default Question2;
