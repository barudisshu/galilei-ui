import React from 'react';

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
