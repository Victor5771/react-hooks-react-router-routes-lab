import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar"> {/* Ensures that the content is wrapped in a div with the class "navbar" */}
      {/* NavLink for the home page */}
      <NavLink exact to="/">
        Home
      </NavLink>
      {/* NavLink for the movies page */}
      <NavLink to="/movies">Movies</NavLink>
      {/* NavLink for the directors page */}
      <NavLink to="/directors">Directors</NavLink>
      {/* NavLink for the actors page */}
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
}

export default NavBar;
