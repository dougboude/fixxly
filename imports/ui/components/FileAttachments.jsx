import React, { Component } from 'react';import DocumentButton from 'DocumentButton';
import CameraPhotoButton from 'CameraPhotoButton';
import ReceiptButton from 'ReceiptButton';

function getFileAttachmentsStore(){
	return {
		fileAttachmentsStore : {
		}
	}
}

export default class FileAttachments extends React.Component {

	constructor(props) {
		super(props);
		this.state = getFileAttachmentsStore();

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