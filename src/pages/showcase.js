import React, { Component } from 'react';
//import { BASE_URL, POPULAR, TOP_RATED, API_KEY } from './../constants/config';
import Slider from './../components/slider';
import {Search} from './../components/filters';

import { connect } from 'react-redux';
import { getPopular,getToprated,getUpcoming } from './../actions/movies';

class Showcase extends Component {

	constructor(){
		super();
		this.state = {
			movies:[],
			popular:[],
			toprated:[],
			upcoming:[],
			filters : {}
		}
	}

	componentDidMount(){
		this.props.getPopular();
		this.props.getToprated();
		this.props.getUpcoming();
	}

	static getDerivedStateFromProps(props, state) {
		
		if(props.popular){
			return {
				popular:props.popular,
				toprated:props.toprated,
				upcoming:props.upcoming,
				movies: props.movies,
				filters: props.filters
			};
		}
		return {};
	}

	render() {
		return (
			<React.Fragment>
				<section className="section">
					<Search />
					
					{this.state.movies && this.state.movies.length >0 && <React.Fragment> <div className="cat-header">Search results : <b>{this.props.filters.query}</b> </div> <Slider movies={this.state.movies} /> </React.Fragment>}

					{this.state.upcoming && this.state.upcoming.length >0 && <React.Fragment> <div className="cat-header">Upcoming <a className="view-all" href="/upcoming">view all</a> </div> <Slider movies={this.state.upcoming} /> </React.Fragment>}

					{this.state.popular && this.state.popular.length >0 && <React.Fragment> <div className="cat-header">Most Popular <a className="view-all" href="/popular">view all</a> </div> <Slider movies={this.state.popular} /> </React.Fragment>}

					{this.state.toprated && this.state.toprated.length >0 && <React.Fragment> <div className="cat-header">Top rated <a className="view-all" href="/toprated">view all</a></div> <Slider movies={this.state.toprated} /> </React.Fragment>}

				</section>
				
			</React.Fragment>);
	}
}

const mapDispatchToProps = {
	getPopular,
	getToprated,
	getUpcoming
};

const mapStateToProps = (state) => ({
	popular:state.movies.popular,
	toprated: state.movies.toprated,
	upcoming: state.movies.upcoming,
	movies: state.movies.results,
	filters: state.filters
});

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);
