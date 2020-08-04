import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getMoviesByCategory } from './../actions/movies';
import { getTvSeriesByCategory } from './../actions/tv';
import Titles from './../constants/titles';
import Grid from '../components/custom/Grid';
import PageHeader from '../components/layout/pageheader';

class Category extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			category : props.match.params.category,
			allMovies : [],
			page : 1
		}
		this.loadMoreMovies = this.loadMoreMovies.bind(this);
	}

	componentDidMount() {
		// check if data is there inside store
		const mvData = this.props[this.props.match.params.category];
		if(!mvData || mvData.length === 0){
			const searchType = this.props.match.params.type;
			let query = {
				category : this.state.category.toUpperCase(),
				page: this.state.page
			}
			if(searchType === 'movie') {
				this.props.getMoviesByCategory(query);
			} else {
				this.props.getTvSeriesByCategory(query);
			}
		}
	}

	static getDerivedStateFromProps(props, state) {
		if(state.category){
			return {
				allMovies : props[state.category]
			};
		}
	}

	loadMoreMovies(){
		let {page} = this.state;
		const searchType = this.props.match.params.type;
		this.setState({
			page : page + 1
		},()=>{
			let query = {
				category : this.state.category.toUpperCase(),
				page: this.state.page
			}
			if(searchType === 'movie') {
				this.props.getMoviesByCategory(query);
			} else {
				this.props.getTvSeriesByCategory(query);
			}
		})
	}

	render() {
		const type = this.props.match.params ? this.props.match.params.type : "movie";
		return (
			<>
				<div className="main-content">
					<div className="container-title">
						<PageHeader showBack={true} title={Titles[this.state.category.toUpperCase()]} />
					</div>
					<Grid container className="container">
						{this.state.allMovies && this.state.allMovies.map((movie)=>{
							return <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="wl-box" key={movie.id}>
								<Card key={movie.id} cardMeta={movie} type={type} />
							</Grid>
						})}
						<button className="btn-primary" onClick={this.loadMoreMovies}>+ Load more </button>
					</Grid>
				</div>	
			</>
		);
	}
}

const mapDispatchToProps = {
	getMoviesByCategory,
	getTvSeriesByCategory
};

const mapStateToProps = (state) =>({
	now_playing: state.movies.NOW_PLAYING,
	upcoming: state.movies.UPCOMING,
	top_rated: state.movies.TOP_RATED,
	popular: state.movies.POPULAR,
	top_rated_tv: state.tv.TOP_RATED_TV,
	latest_tv: state.tv.LATEST_TV,
	popular_tv: state.tv.POPULAR_TV,
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);
