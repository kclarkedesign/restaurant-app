import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ navLocation = "header" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${navLocation}__nav`}
      role="navigation"
      aria-label="Main navigation"
      tabIndex="0"
    >
      {/* show hamburger for header nav only */}
      {navLocation == "header" ? (
        <button
          className="nav__toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          ☰
        </button>
      ) : (
        ""
      )}

      <ul className={`nav__list ${menuOpen ? "nav__list--open" : ""}`}>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/menu", label: "Menu" },
          { to: "/reservations", label: "Reservations" },
          { to: "/order", label: "Order Online" },
          { to: "/login", label: "Login" },
        ].map(({ to, label }) => (
          <li key={to} className="nav__list-item">
            <Link
              to={to}
              aria-current={location.pathname === to ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
