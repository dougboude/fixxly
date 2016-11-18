import React, { Component } from 'react';import SummaryTab from 'SummaryTab';
import TodoTab from 'TodoTab';

function getClaimTabsStore(){
	return {
		claimTabsStore : {
		}
	}
}

export default class ClaimTabs extends React.Component {

	constructor(props) {
		super(props);
		this.state = getClaimTabsStore();

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