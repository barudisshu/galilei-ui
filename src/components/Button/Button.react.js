import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button style={{ backgroundColor: '#fff', border: '1px solid #ccc' }}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
