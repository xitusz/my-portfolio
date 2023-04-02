import React from "react";
import PropTypes from "prop-types";

class Stack extends React.Component {
  render() {
    const { badge, name } = this.props;
    return (
      <div className="inline">
        <img src={badge} alt={name} className="mx-1 mb-1" />
      </div>
    );
  }
}

Stack.propTypes = {
  badge: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Stack;
