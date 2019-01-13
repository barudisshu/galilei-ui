import React from 'react';
import PropTypes from 'prop-types';

const STATUS = {
  NORMAL: 'normal',
  FOCUS: 'focus',
};

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this._onFocus = this._onFocus.bind(this);
    this._onRemain = this._onRemain.bind(this);
    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onFocus() {
    this.setState({ class: STATUS.FOCUS });
  }

  _onRemain() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.label}>{this.props.text}</label>
        <input
          type={this.props.type}
          className="form-control"
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
