import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/order">Order Online</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
