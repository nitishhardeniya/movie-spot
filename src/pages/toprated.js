import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getMoviesByCategory } from './../actions/movies';

class Toprated extends Component {
	
	componentDidMount(){
		this.props.getMoviesByCategory('TOP_RATED');
	}

	static getDerivedStateFromProps(props, state) {
		//console.log(props)
		return {};
	}

	render() {
	
		return (
			<React.Fragment>
				<div className="container-title">Toprated</div>
				<div className="container">
					{this.props.toprated && this.props.toprated.map((movie)=>{
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
	toprated: state.movies.TOP_RATED
});

export default connect(mapStateToProps,mapDispatchToProps)(Toprated);
