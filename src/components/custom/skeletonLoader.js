import React, { Component } from 'react';

import './loader.scss';

import TitleLoader from './title';
import ContentLoader from './content';
import DescriptionLoader from './description';
import CardLoader from './card';

const tileSizes = {
	small: {
		width: '150px',
		height: '220px'
	},
	medium: {
		width: '180px',
		height: '280px'
	},
	large: {
		width: '210px',
		height: '320px'
	}
};

class SkeletonLoader extends Component {
	
	constructor(props){
		super(props);
		this.state = {

		}
		this.buildSkeleton = this.buildSkeleton.bind(this);
	}

	buildSkeleton(type){
		const { width, height } = tileSizes && tileSizes[this.props.size];
		switch(type){
			case 'title' : 
				return <TitleLoader />
			case 'content' :
				return <ContentLoader />
			case 'description' :
				return <DescriptionLoader />
			case 'card' :
				return <CardLoader width={width} height={height} />
			default :
				return <div>Loading...</div>

		}
	}

	render() {
		const { type,count,direction } = this.props;
		let printDOM = [];
		let n =0;
		while(n < count){
			printDOM.push(this.buildSkeleton(type));
			n++;
		}
		return (
			<div className="sk-container" style={{'flexDirection':direction}}>
				{printDOM}
			</div>
		);
	}
}

export default SkeletonLoader;

SkeletonLoader.defaultProps = {
	size: 'small',
}

/*
This component will take 3 arguments

type : card / title / content / description
no of loaders (count) : 5
direction : row/column

*/