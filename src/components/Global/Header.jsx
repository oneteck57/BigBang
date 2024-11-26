/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "../../App.css";

const Header = ({ bgColor = "bg-transparent", textColor = "text-white" }) => {
  return (
    <header
      className={`absolute w-full flex justify-center items-center top-0 pt-20 left-1/2 transform -translate-x-1/2 ${bgColor} z-10 py-4 px-10`}
    >
      <nav className="flex justify-between items-center">
        <ul
          className={`flex space-x-20 ${textColor} text-xl luckiest-guy-small-outline`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/highlights">Highlights</NavLink>
          </li>
          <li>
            <NavLink to="/schedule">Schedule</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
