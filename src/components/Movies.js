// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar" data-testid="navbar-container"> {/* Add data-testid attribute */}
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
}

export default NavBar;
