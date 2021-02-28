import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../src/redux/countries/countriesActions";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouters } from "../src/routers";
import { Navbar } from "../src/companents";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllCountries()), [dispatch]);
  const routers = useRouters();
  return (
    <Router>
      <Navbar />
      <div className="App">{routers}</div>
    </Router>
  );
}

export default App;
