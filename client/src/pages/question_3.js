import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/country/country.css";
function Question3() {
  const [filtrDatalist, setFiltrDatalist] = useState();
  const [filtrCountry, setFiltrCountry] = useState();
  const items = useSelector((state) => state.country.items);

  const changeHandler = (e) => {
    //Search filter
    const country = e.target.value.trim().toLowerCase();
    const filtercountry = items.filter((item) => {
      return item.name.toLowerCase() === country;
    });
    //DataList filter
    const filterDatalist = items.filter((item) => {
      return item.name.toLowerCase() >= country;
    });
    setFiltrDatalist(filterDatalist);
    setFiltrCountry(filtercountry);
  };

  return (
    <div className="country">
      <input
        list="country"
        type="text"
        onInput={changeHandler}
        placeholder="Search Country"
      />
      <datalist id="country">
        {filtrDatalist &&
          filtrDatalist.map((list) => {
            return <option key={list.name} value={list.name} />;
          })}
      </datalist>
      {filtrCountry &&
        filtrCountry.map((item) => {
          return <h4 key={item.name}>{item.name}</h4>;
        })}
    </div>
  );
}
export default Question3;
