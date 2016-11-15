import React, { Component } from 'react';import TodoDescription from 'TodoDescription';
import CallHistoryListing from 'CallHistoryListing';
import ChatBoxInput from 'ChatBoxInput';
import CameraPhotoButton from 'CameraPhotoButton';
import MessageDisplay from 'MessageDisplay';
import ImageBoxScreen from 'ImageBoxScreen';

function getTodoDetailScreenStore(){
	return {
		todoDetailScreenStore : {
		}
	}
}

export default class TodoDetailScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = getTodoDetailScreenStore();

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