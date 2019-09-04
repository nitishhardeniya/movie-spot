import React, { PureComponent } from 'react';
import Slider from './../components/slider';
import {Search} from './../components/filters';
import SkeletonLoader from './../components/custom/skeletonLoader';

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
			nowplaying:[],
			filters : {}
		}
	}

	componentDidMount(){
		
		if(!this.props.nowplaying){
			this.props.getMoviesByCategory({
				category : 'NOW_PLAYING',
				page: 1
			});	
		}
		
		if(!this.props.upcoming){
			this.props.getMoviesByCategory({
				category : 'UPCOMING',
				page: 1
			});
		}

		if(!this.props.toprated){
			this.props.getMoviesByCategory({
				category : 'TOP_RATED',
				page: 1
			});
		}

		if(!this.props.popular){
			this.props.getMoviesByCategory({
				category : 'POPULAR',
				page: 1
			});
		}
	}

	static getDerivedStateFromProps(props, state) {
		
		if(props.popular){
			return {
				popular:props.popular,
				toprated:props.toprated,
				nowplaying: props.nowplaying,
				upcoming:props.upcoming,
				movies: props.movies,
				filters: props.filters
			};
		}
		return {};
	}

	goto = (e,url) => {
		e.preventDefault();
		this.props.history.push(url);
	}

	render() {
		return (
			<React.Fragment>
				<section className="section">
					<Search />

					{this.state.movies && this.state.movies.length >0 && <React.Fragment> <div className="cat-header">Search results : <b>{this.props.filters.query}</b> </div> <Slider movies={this.state.movies} /> </React.Fragment>}

					{<React.Fragment> <div className="cat-header">{Titles['NOW_PLAYING']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/now_playing')}>view all</a> </div> {(this.state.nowplaying && this.state.nowplaying.length >0) ? <Slider movies={this.state.nowplaying} /> : <SkeletonLoader type="card" count="6" direction="row" /> } </React.Fragment> }

					{<React.Fragment> <div className="cat-header">{Titles['UPCOMING']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/upcoming')}>view all</a> </div> {(this.state.upcoming && this.state.upcoming.length >0) ? <Slider movies={this.state.upcoming} /> : <SkeletonLoader type="card" count="6" direction="row" /> } </React.Fragment>}

					{<React.Fragment> <div className="cat-header">{Titles['POPULAR']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/popular')}>view all</a> </div> {(this.state.popular && this.state.popular.length >0) ? <Slider movies={this.state.popular} /> : <SkeletonLoader type="card" count="6" direction="row" /> } </React.Fragment>}

					{<React.Fragment> <div className="cat-header">{Titles['TOP_RATED']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/top_rated')}>view all</a></div> {(this.state.toprated && this.state.toprated.length >0) ? <Slider movies={this.state.toprated} /> : <SkeletonLoader type="card" count="6" direction="row" /> } </React.Fragment>}

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
	nowplaying: state.movies.NOW_PLAYING,
	upcoming: state.movies.UPCOMING,
	movies: state.movies.results,
	filters: state.filters
});

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);
