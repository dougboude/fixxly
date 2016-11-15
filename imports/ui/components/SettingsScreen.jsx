import React, { Component } from 'react';import SettingsList from 'SettingsList';

function getSettingsScreenStore(){
	return {
		settingsScreenStore : {
		}
	}
}

export default class SettingsScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = getSettingsScreenStore();

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