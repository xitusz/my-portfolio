import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <div>
        <button type="button" onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
