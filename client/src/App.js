import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../src/redux/countries/countriesActions";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouters } from "../src/routers";
import { Navbar } from "../src/companents";
import "./App.css";
function App() {
  const items = useSelector((state) => state.country.items);
  const dispatch = useDispatch();
  useEffect(() => !items && dispatch(getAllCountries()), [dispatch, items]);
  const routers = useRouters();
  return (
    <Router>
      <Navbar />
      <div className="App">{routers}</div>
    </Router>
  );
}

export default App;
