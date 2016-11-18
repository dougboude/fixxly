import React, { Component } from 'react';
import WeatherAlertsDisplay from 'WeatherAlertsDisplay';

function getHomeStore(){
	return {
		homeStore : {
		}
	}
}

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = getHomeStore();

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