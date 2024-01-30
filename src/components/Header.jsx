import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigationLinks = [
    { to: "/my-portfolio/", text: "Início" },
    { to: "/my-portfolio/about", text: "Sobre" },
    { to: "/my-portfolio/projects", text: "Projetos" },
  ];

  return (
    <div className="flex justify-evenly text-xl py-4 border-solid border-8 bg-cover bg-background2 border-background-50">
      {navigationLinks.map((link) => (
        <div key={link.text}>
          <NavLink
            className="no-underline hover:text-color-#ffdc84"
            to={link.to}
          >
            {link.text}
          </NavLink>
          <hr className="mt-1 shadow-black border-solid border-2 border-background-50" />
        </div>
      ))}
    </div>
  );
};

export default Header;
