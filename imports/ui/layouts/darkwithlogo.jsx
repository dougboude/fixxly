import React, { Component } from 'react';
import { render } from 'react-dom';

export default class darklayoutwithlogo extends Component {
  render() {
    return (
      <div className="col-xs-12 landingpage">
      	{ this.props.children }
      </div>
      );
  }
}