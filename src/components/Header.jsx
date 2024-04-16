import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/coups-de-coeur"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Coups de coeur</li>
            </NavLink>
          </ul>
        </nav>
        <h1>React Movies</h1>
      </div>
    </div>
  );
};

export default Header;
