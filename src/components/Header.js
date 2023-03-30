import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/">Início</NavLink>
          <hr />
        </div>
        <div>
          <NavLink to="/about">Sobre</NavLink>
          <hr />
        </div>
        <div>
          <NavLink to="/projects">Projetos</NavLink>
          <hr />
        </div>
      </div>
    );
  }
}

export default Header;
