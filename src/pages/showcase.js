import React, { PureComponent } from 'react';
import Slider from './../components/slider';
import {Search} from './../components/filters';

import { connect } from 'react-redux';
import { getMoviesByCategory } from './../actions/movies';
import Titles from './../constants/titles';

class Showcase extends PureComponent {

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
		this.props.getMoviesByCategory('UPCOMING');
		this.props.getMoviesByCategory('TOP_RATED');
		this.props.getMoviesByCategory('POPULAR');
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

					{this.state.upcoming && this.state.upcoming.length >0 && <React.Fragment> <div className="cat-header">{Titles['UPCOMING']} <a className="view-all" href="/category/upcoming">view all</a> </div> <Slider movies={this.state.upcoming} /> </React.Fragment>}

					{this.state.popular && this.state.popular.length >0 && <React.Fragment> <div className="cat-header">{Titles['POPULAR']} <a className="view-all" href="/category/popular">view all</a> </div> <Slider movies={this.state.popular} /> </React.Fragment>}

					{this.state.toprated && this.state.toprated.length >0 && <React.Fragment> <div className="cat-header">{Titles['TOP_RATED']} <a className="view-all" href="/category/top_rated">view all</a></div> <Slider movies={this.state.toprated} /> </React.Fragment>}

				</section>
				
			</React.Fragment>);
	}
}

const mapDispatchToProps = {
	getMoviesByCategory
};

const mapStateToProps = (state) => ({
	popular:state.movies.POPULAR,
	toprated: state.movies.TOP_RATED,
	upcoming: state.movies.UPCOMING,
	movies: state.movies.results,
	filters: state.filters
});

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);
