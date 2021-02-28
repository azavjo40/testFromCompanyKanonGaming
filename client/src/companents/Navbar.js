import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/openMenu.png";
import "../styles/navbar/onavbar.css";
const Navbar = () => {
  const [isLoadin, setIsLoading] = useState(false);
  function handleResize() {
    if (window.innerWidth > 600) {
      setIsLoading(false);
    }
  }

  window.addEventListener("resize", handleResize);
  return (
    <header className="header">
      <img
        src={icon}
        alt={icon}
        className="imgIcon"
        onClick={() => setIsLoading(!isLoadin)}
      />
      <ul
        className={isLoadin ? "openNav" : "nav_links"}
        onClick={() => setIsLoading(false)}
      >
        <li>
          <NavLink to="/">QuestionGame</NavLink>
        </li>
        <li>
          <NavLink to="/question1">Question1</NavLink>
        </li>
        <li>
          <NavLink to="/question2">Question2</NavLink>
        </li>
        <li>
          <NavLink to="/question3">Question3</NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
