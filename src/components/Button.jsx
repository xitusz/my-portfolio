import React from "react";
import PropTypes from "prop-types";

const Button = ({
  className,
  type,
  onClick,
  disabled,
  children,
  dataTestId,
}) => (
  <button
    className={className}
    type={type}
    onClick={onClick}
    disabled={disabled}
    data-testid={dataTestId}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  className: "border border-solid border-color-#5c4200 shadow-black py-2 px-3 mx-3 rounded-full bg-color-#c45911 hover:bg-color-#ffba05 font-bold active:bg-color-#ffdc84",
  type: "button",
  onClick: () => {},
  disabled: false,
  dataTestId: "",
};

export default Button;

