import { NavLink } from "react-router-dom";
import "../../App.css";
const Header = () => {
  return (
    <header className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-transparent z-50 py-4 px-10">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-20 text-white text-xl  luckiest-guy-small-outline">
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
