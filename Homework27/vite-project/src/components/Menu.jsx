import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Menu() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const textColorClass = theme === "dark" ? "text-primary" : "text-dark";
  return (
    <nav className={`navbar navbar-expand navbar-light ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={`nav-link ${textColorClass}`}>
                Головна
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={`nav-link ${textColorClass}`}>
                Контакти
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={`nav-link ${textColorClass}`}>
                Про мене
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch ms-auto">
            <input className="form-check-input" type="checkbox" id="themeSwitch" checked={theme === "dark"} onChange={toggleTheme} />
            <label className={`form-check-label ${textColorClass}`} htmlFor="themeSwitch">
              {theme === "dark" ? "Темная тема" : "Светлая тема"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
