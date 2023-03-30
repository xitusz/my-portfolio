import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="flex justify-evenly text-xl py-7 bg-transparent">
        <div>
          <NavLink
            to="/"
            className="no-underline  hover:text-color-#ffdc84 nav-link"
          >
            Início
          </NavLink>
          <hr className="mt-1.5 text-color-#ccc" />
        </div>
        <div>
          <NavLink
            to="/about"
            className="no-underline  hover:text-color-#ffdc84 nav-link"
          >
            Sobre
          </NavLink>
          <hr className="mt-1.5 text-color-#ccc" />
        </div>
        <div>
          <NavLink
            to="/projects"
            className="no-underline  hover:text-color-#ffdc84 nav-link"
          >
            Projetos
          </NavLink>
          <hr className="mt-1.5 text-color-#ccc" />
        </div>
      </div>
    );
  }
}

export default Header;
