import React, { Component } from 'react';import TodoItem from 'TodoItem';

function getTodosStore(){
	return {
		todosStore : {
		}
	}
}

export default class Todos extends React.Component {

	constructor(props) {
		super(props);
		this.state = getTodosStore();

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