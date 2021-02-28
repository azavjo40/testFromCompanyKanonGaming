import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/country/country.css";
function Question3() {
  const [show, setShow] = useState(true);
  const items = useSelector((state) => state.country.items);
  const changeHandler = (e) => {
    //   const item = items.map((item) => item);
    //   const value = e.target.value.trim();
    //   if (value != "") {
    //     if (item.search(value) == -1) {
    //       setShow(false);
    //     } else {
    //       setShow(true);
    //     }
    //   }
  };
  return (
    <div>
      <input type="text" onInput={changeHandler} />
      {items &&
        items.map((item, i) => {
          return (
            <>
              <h4 key={item.area || i} className={show ? "show" : "hide"}>
                {item.name}
              </h4>
            </>
          );
        })}
    </div>
  );
}
export default Question3;
