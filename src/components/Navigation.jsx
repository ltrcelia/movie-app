import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="header">
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/coups-de-coeur">
          <li>Coups de coeur</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
