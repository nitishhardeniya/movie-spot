import React, { Component } from 'react';

import './loader.scss';

import TitleLoader from './title';
import ContentLoader from './content';
import DescriptionLoader from './description';
import CardLoader from './card';

class SkeletonLoader extends Component {
	
	constructor(props){
		super(props);
		this.state = {

		}
		this.buildSkeleton = this.buildSkeleton.bind(this);
	}

	componentDidMount(){

	}

	buildSkeleton(type){

		switch(type){
			case 'title' : 
				return <TitleLoader />
			case 'content' :
				return <ContentLoader />
			case 'description' :
				return <DescriptionLoader />
			case 'card' :
				return <CardLoader />
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


/*
This component will take 3 arguments

type : card / title / content / description
no of loaders (count) : 5
direction : row/column

*/