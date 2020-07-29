import React, { PureComponent } from 'react';
import Slider from './../components/slider';
import SkeletonLoader from './../components/custom/skeletonLoader';

import { connect } from 'react-redux';
import { getMoviesByCategory } from './../actions/movies';
import { getTvSeriesByCategory } from './../actions/tv';
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
			popularTv: [],
			topratedTv: [],
			latestTv: [],
			filters : {}
		}
	}

	componentDidMount(){
		// Fetching movies
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

		// Fetching TV Series
		if(!this.props.latestTv){
			this.props.getTvSeriesByCategory({
				category : 'LATEST_TV',
				page: 1
			});
		}

		if(!this.props.topratedTv){
			this.props.getTvSeriesByCategory({
				category : 'TOP_RATED_TV',
				page: 1
			});
		}

		if(!this.props.popularTv){
			this.props.getTvSeriesByCategory({
				category : 'POPULAR_TV',
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
				popularTv: props.popularTv,
				topratedTv: props.topratedTv,
				latestTv: props.latestTv,
				filters: props.filters
			};
		}
		return {};
	}

	goto = (e,url,type) => {
		e.preventDefault();
		this.props.history.push({pathname:url});
	}

	render() {
		return (
			<React.Fragment>
				{this.state.movies && this.state.movies.length >0 && <React.Fragment> <div className="cat-header">Search results : <b>{this.props.filters.query}</b> </div> <Slider records={this.state.movies} type="movie" size="medium" /> </React.Fragment>}

				{<React.Fragment> <div className="cat-header">{Titles['NOW_PLAYING']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/movie/now_playing')}>view all</a> </div> {(this.state.nowplaying && this.state.nowplaying.length > 0) ? <Slider records={this.state.nowplaying} type="movie" size="small" /> : <SkeletonLoader type="card" count="9" direction="row" size="small" /> } </React.Fragment> }

				{<React.Fragment> <div className="cat-header">{Titles['UPCOMING']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/movie/upcoming')}>view all</a> </div> {(this.state.upcoming && this.state.upcoming.length > 0) ? <Slider records={this.state.upcoming} type="movie" size="small" /> : <SkeletonLoader type="card" count="9" direction="row" size="small"/> } </React.Fragment>}

				{<React.Fragment> <div className="cat-header">{Titles['POPULAR']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/movie/popular')}>view all</a> </div> {(this.state.popular && this.state.popular.length > 0) ? <Slider records={this.state.popular} type="movie" size="small" /> : <SkeletonLoader type="card" count="9" direction="row" size="small" /> } </React.Fragment>}

				{<React.Fragment> <div className="cat-header">{Titles['TOP_RATED']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/movie/top_rated')}>view all</a></div> {(this.state.toprated && this.state.toprated.length > 0) ? <Slider records={this.state.toprated} type="movie" size="small" /> : <SkeletonLoader type="card" count="9" direction="row" size="small"/> } </React.Fragment>}

				{<React.Fragment> <div className="cat-header">{Titles['LATEST_TV']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/tv/latest_tv')}>view all</a></div> {(this.state.latestTv && this.state.latestTv.length > 0) ? <Slider records={this.state.latestTv} type="tv" size="small" /> : <SkeletonLoader type="card" count="9" direction="row" size="small" /> } </React.Fragment>}

				{<React.Fragment> <div className="cat-header">{Titles['POPULAR_TV']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/tv/popular_tv')}>view all</a></div> {(this.state.popularTv && this.state.popularTv.length > 0) ? <Slider records={this.state.popularTv} type="tv" size="small" /> : <SkeletonLoader type="card" count="9" direction="row" size="small" /> } </React.Fragment>}

				{<React.Fragment> <div className="cat-header">{Titles['TOP_RATED_TV']} <a className="view-all" href="" onClick={e => this.goto(e,'/category/tv/top_rated_tv')}>view all</a></div> {(this.state.topratedTv && this.state.topratedTv.length > 0) ? <Slider records={this.state.topratedTv} type="tv" size="small" /> : <SkeletonLoader type="card" count="9" direction="row" size="small" /> } </React.Fragment>}				
			</React.Fragment>);
	}
}

const mapDispatchToProps = {
	getMoviesByCategory,
	getTvSeriesByCategory
};

const mapStateToProps = (state) => ({
	popular:state.movies.POPULAR,
	toprated: state.movies.TOP_RATED,
	nowplaying: state.movies.NOW_PLAYING,
	upcoming: state.movies.UPCOMING,
	movies: state.movies.results,
	topratedTv: state.tv.TOP_RATED_TV,
	latestTv: state.tv.LATEST_TV,
	popularTv: state.tv.POPULAR_TV,
	filters: state.filters
});

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);
