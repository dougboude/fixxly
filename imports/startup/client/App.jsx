import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

// App component - represents the whole app

export default class App extends Component {
  render() {
    return (
      <div id="maindiv">
        { this.props.children }
      </div>
    );
  }
}