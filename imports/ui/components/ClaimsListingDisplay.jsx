import React, { Component } from 'react';import ClaimIcon from 'ClaimIcon';
import ClaimSummary from 'ClaimSummary';

function getClaimsListingDisplayStore(){
	return {
		claimsListingDisplayStore : {
		}
	}
}

export default class ClaimsListingDisplay extends React.Component {

	constructor(props) {
		super(props);
		this.state = getClaimsListingDisplayStore();

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