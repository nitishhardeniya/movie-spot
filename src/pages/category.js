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
			allMovies : []
		}
	}

	componentDidMount(){
		this.props.getMoviesByCategory(this.state.category.toUpperCase());	
	}

	static getDerivedStateFromProps(props, state) {
		if(state.category){
			return {
				allMovies : props[state.category]
			};
		}
	}

	render() {
	
		return (
			<React.Fragment>
				<div className="container-title">{Titles[this.state.category.toUpperCase()]}</div>
				<div className="container">
					{this.state.allMovies && this.state.allMovies.map((movie)=>{
						return (<Card key={movie.id} cardMeta={movie} />)
					})}
				</div>		
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getMoviesByCategory
};

const mapStateToProps = (state) =>({
	upcoming: state.movies.UPCOMING,
	top_rated: state.movies.TOP_RATED,
	popular: state.movies.POPULAR
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);
