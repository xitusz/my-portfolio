import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <div className="bg-background2 bg-cover border-solid border-8 mt-12 border-background-50">
      <div className="w-full max-w-screen-xl mx-auto p-10">
        <div>
          <ul className="flex flex-wrap items-center justify-center">
            <li className="p-1">
              <a
                href="https://www.linkedin.com/in/gabrielalves1/"
                target="_blank"
                rel="noreferrer"
                data-testid="linkedin-link"
              >
                <FaLinkedin
                  size={26}
                  className="text-white icon hover:text-color-#ffdc84 active:text-color-#ffba05 hover:scale-125 duration-200"
                  data-testid="linkedin-icon"
                />
              </a>
            </li>
            <li className="p-1">
              <a
                href="mailto:2kgabrielalves@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-testid="gmail-link"
              >
                <FiMail
                  size={29}
                  className="text-white icon hover:text-color-#ffdc84 active:text-color-#ffba05 hover:scale-125 duration-200"
                  data-testid="gmail-icon"
                />
              </a>
            </li>
            <li className="p-1">
              <a
                href="https://github.com/xitusz"
                target="_blank"
                rel="noreferrer"
                data-testid="github-link"
              >
                <FaGithub
                  size={26}
                  className="text-white icon hover:text-color-#ffdc84 active:text-color-#ffba05 hover:scale-125 duration-200"
                  data-testid="github-icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-8 mx-auto text-white" />
        <p className="p-1 w-max m-auto">
          © 2023{" "}
          <a
            href="https://github.com/xitusz"
            target="_blank"
            rel="noreferrer"
            className="hover:text-color-#ffdc84 active:text-color-#ffba05"
          >
            Gabriel Alves
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
