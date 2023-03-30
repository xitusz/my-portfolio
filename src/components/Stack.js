import React from "react";
import PropTypes from "prop-types";

class Stack extends React.Component {
  render() {
    const { badge, name } = this.props;
    return (
      <div>
        <img src={badge} alt={name} />
      </div>
    );
  }
}

Stack.propTypes = {
  badge: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Stack;
