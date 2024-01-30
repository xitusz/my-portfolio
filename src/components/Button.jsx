import React from "react";
import PropTypes from "prop-types";

const Button = ({
  isSelected,
  className,
  type,
  onClick,
  disabled,
  children,
  dataTestId,
}) => (
  <button
    className={`${className} ${isSelected ? "selected" : ""}`}
    type={type}
    onClick={onClick}
    disabled={disabled}
    data-testid={dataTestId}
  >
    {children}
  </button>
);

Button.propTypes = {
  isSelected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  isSelected: false,
  className:
    "border-solid border-4 border-background-50 bg-background2 bg-cover shadow-black py-2 px-3 mx-3 hover:text-color-#ffdc84 hover:border-7 font-bold active:text-color-#ffba05 duration-75",
  type: "button",
  onClick: () => {},
  disabled: false,
  dataTestId: "",
};

export default Button;
