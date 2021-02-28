import React from "react";
import { useSelector } from "react-redux";
function Question2() {
  const items = useSelector((state) => state.country.items);
  return (
    <div>
      {" "}
      {items &&
        items.map((item, i) => {
          return (
            <>
              <h4 key={item.area || i}>{item.name}</h4>
            </>
          );
        })}
    </div>
  );
}
export default Question2;
