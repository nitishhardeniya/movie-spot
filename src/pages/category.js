import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getMoviesByCategory } from './../actions/movies';
import Titles from './../constants/titles';

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

	componentDidMount(){
		let query = {
			category : this.state.category.toUpperCase(),
			page: this.state.page
		}
		this.props.getMoviesByCategory(query);
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
		this.setState({
			page : page + 1
		},()=>{
			let query = {
				category : this.state.category.toUpperCase(),
				page: this.state.page
			}
			this.props.getMoviesByCategory(query);	
		})
	}

	render() {
	
		return (
			<React.Fragment>
				<div className="container-title">{Titles[this.state.category.toUpperCase()]}</div>
				<div className="container">
					{this.state.allMovies && this.state.allMovies.map((movie)=>{
						return (<Card key={movie.id} cardMeta={movie} />)
					})}

					<button className="btn-primary" onClick={this.loadMoreMovies}>+ Load more </button>
				</div>		
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getMoviesByCategory
};

const mapStateToProps = (state) =>({
	now_playing: state.movies.NOW_PLAYING,
	upcoming: state.movies.UPCOMING,
	top_rated: state.movies.TOP_RATED,
	popular: state.movies.POPULAR
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);
