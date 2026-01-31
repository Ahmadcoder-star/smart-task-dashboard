import { NavLink } from "react-router-dom";
import { FaTasks, FaCheckCircle, FaCog } from "react-icons/fa";

function Header({ title }) {
  return (
    <header className="header">
      <FaTasks />
      <h2>{title}</h2>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/completed">
          <FaCheckCircle />
        </NavLink>
        <NavLink to="/settings">
          <FaCog />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;