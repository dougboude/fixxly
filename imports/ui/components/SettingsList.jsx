import React, { Component } from 'react';import SettingLink from 'SettingLink';
import SettingToggle from 'SettingToggle';

function getSettingsListStore(){
	return {
		settingsListStore : {
		}
	}
}

export default class SettingsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = getSettingsListStore();

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