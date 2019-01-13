import React from 'react';
import { Input } from '../Input/Input.react';

export class MForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seo_title: '',
    };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
