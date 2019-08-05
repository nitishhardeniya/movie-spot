import React, { Component } from 'react';
//import { BASE_URL, POPULAR, TOP_RATED, API_KEY } from './../constants/config';
import Header from './../components/header';
import Slider from './../components/slider';

import { connect } from 'react-redux';
import { getPopular,getToprated } from './../actions/movies';

class Showcase extends Component {

	constructor(){
		super();
		this.state = {
			movies:[],
			popular:[],
			toprated:[]
		}
	}

	componentDidMount(){
		this.props.getPopular();
		this.props.getToprated();
	}

	static getDerivedStateFromProps(props, state) {
		
		if(props.popular){
			return {
				popular:props.popular,
				toprated:props.toprated
			};
		}
		return {};
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="section">
					<div className="cat-header">Most Popular <a className="view-all" href="/popular">view all</a> </div>
					{this.state.popular && this.state.popular.length >0 && <Slider movies={this.state.popular} />}

					<div className="cat-header">Top rated <a className="view-all" href="/toprated">view all</a></div>
					{this.state.toprated && this.state.toprated.length >0 && <Slider movies={this.state.toprated}/>}	
				</section>
				
			</React.Fragment>);
	}
}

const mapDispatchToProps = {
	getPopular,
	getToprated
};

const mapStateToProps = (state) => ({
	popular:state.popular,
	toprated: state.toprated
});

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);
