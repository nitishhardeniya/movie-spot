import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getMoviesByCategory } from './../actions/movies';

class Mostpopular extends Component {
	
	componentDidMount(){
		this.props.getMoviesByCategory('POPULAR');
	}

	static getDerivedStateFromProps(props, state) {
		//console.log(props)
		return {};
	}

	render() {
	
		return (
			<React.Fragment>
				<div className="container-title">Most popular</div>
				<div className="container">
					{this.props.popular && this.props.popular.map((movie)=>{
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
	popular: state.movies.POPULAR
});

export default connect(mapStateToProps,mapDispatchToProps)(Mostpopular);
