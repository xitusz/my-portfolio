import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigationLinks = [
    { to: "/my-portfolio/", text: "Início" },
    { to: "/my-portfolio/about", text: "Sobre" },
    { to: "/my-portfolio/projects", text: "Projetos" },
  ];

  return (
    <div className="flex justify-evenly text-xl py-7 bg-transparent">
      {navigationLinks.map((link) => (
        <div key={link.text}>
          <NavLink
            className="text-color-#ccc no-underline  hover:text-color-#ffdc84"
            to={link.to}
          >
            {link.text}
          </NavLink>
          <hr className="mt-1.5 text-color-#ccc" />
        </div>
      ))}
    </div>
  );
};

export default Header;
