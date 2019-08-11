import React, { Component } from 'react';
//import { BASE_URL, POPULAR, TOP_RATED, API_KEY } from './../constants/config';
import Slider from './../components/slider';
import {Search} from './../components/filters';

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
				toprated:props.toprated,
				movies: props.movies
			};
		}
		return {};
	}

	render() {
		return (
			<React.Fragment>
				<section className="section">
					<Search getFilteredResults={this.getFilteredResults}/>
					
					{this.state.movies && this.state.movies.length >0 && <React.Fragment> <div className="cat-header">Search results <a className="view-all" href="/popular">view all</a> </div> <Slider movies={this.state.movies} /> </React.Fragment>}

					{this.state.popular && this.state.popular.length >0 && <React.Fragment> <div className="cat-header">Most Popular <a className="view-all" href="/popular">view all</a> </div> <Slider movies={this.state.popular} /> </React.Fragment>}

					{this.state.toprated && this.state.toprated.length >0 && <React.Fragment> <div className="cat-header">Top rated <a className="view-all" href="/toprated">view all</a></div> <Slider movies={this.state.toprated} /> </React.Fragment>}

				</section>
				
			</React.Fragment>);
	}
}

const mapDispatchToProps = {
	getPopular,
	getToprated
};

const mapStateToProps = (state) => ({
	popular:state.movies.popular,
	toprated: state.movies.toprated,
	movies: state.movies.results
});

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);
