import React, { Component } from 'react';import Todos from 'Todos';

function getActiveClaimTodoListStore(){
	return {
		activeClaimTodoListStore : {
		}
	}
}

export default class ActiveClaimTodoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = getActiveClaimTodoListStore();

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