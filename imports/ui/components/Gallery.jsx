import React, { Component } from 'react';import ImageThumb from 'ImageThumb';

function getGalleryStore(){
	return {
		galleryStore : {
		}
	}
}

export default class Gallery extends React.Component {

	constructor(props) {
		super(props);
		this.state = getGalleryStore();

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