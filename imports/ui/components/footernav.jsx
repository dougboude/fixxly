import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Footernav extends Component{
  render() {
      return (
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
        );
  }
}