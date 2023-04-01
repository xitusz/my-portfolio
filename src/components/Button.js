import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <div>
        <button
          type="button"
          className="border border-solid border-color-#5c4200 shadow-black py-2 px-3 mx-3 rounded-full bg-color-#c45911 hover:bg-color-#ffba05 font-bold active:bg-color-#ffdc84"
          onClick={onClick}
        >
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
