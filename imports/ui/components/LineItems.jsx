import React, { Component } from 'react';import LineItem from 'LineItem';

function getLineItemsStore(){
	return {
		lineItemsStore : {
		}
	}
}

export default class LineItems extends React.Component {

	constructor(props) {
		super(props);
		this.state = getLineItemsStore();

	}

	componentDidMount() {

	}
	
	render(){
		return(
			<div>
				
			<div>
		)
	}
};