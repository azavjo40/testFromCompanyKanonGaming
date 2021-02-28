import React from "react";
import { useSelector } from "react-redux";
function Question1() {
  const items = useSelector((state) => state.country.items);
  return <div>{items && <h4 key={items[0].id}>{items[0].name}</h4>}</div>;
}
export default Question1;
