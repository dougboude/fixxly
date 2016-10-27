import React, { Component } from 'react';
import { render } from 'react-dom';
import Footernav from '../components/footernav.jsx';
console.log('footernav',Footernav);
export default class layoutwithfooternav extends Component {
  render() {
    return (
      <div className="container" style={{marginBottom:"60px",position:"relative",minHeight:"100%"}}>
      	<nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
      	HEADER
      </div>
    </nav>
    <div className="container">
		{ this.props.children }
    </div>
      	
      	<Footernav />      	
      </div>

      );
  }
}