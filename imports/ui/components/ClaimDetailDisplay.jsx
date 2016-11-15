import React, { Component } from 'react';import ClaimSummaryDisplay from 'ClaimSummaryDisplay';
import ClaimTabs from 'ClaimTabs';
import Summary from 'Summary';
import FileAttachments from 'FileAttachments';
import Gallery from 'Gallery';
import Description from 'Description';

function getClaimDetailDisplayStore(){
	return {
		claimDetailDisplayStore : {
		}
	}
}

export default class ClaimDetailDisplay extends React.Component {

	constructor(props) {
		super(props);
		this.state = getClaimDetailDisplayStore();

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