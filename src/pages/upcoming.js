import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getUpcoming } from './../actions/movies';

class Mostpopular extends Component {
	
	componentDidMount(){
		this.props.getUpcoming();
	}

	static getDerivedStateFromProps(props, state) {
		//console.log(props)
		return {};
	}

	render() {
	
		return (
			<React.Fragment>
				<div className="container-title">Most upcoming</div>
				<div className="container">
					{this.props.upcoming && this.props.upcoming.map((movie)=>{
						return (<Card key={movie.id} cardMeta={movie} />)
					})}
				</div>		
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getUpcoming
};

const mapStateToProps = (state) =>({
	upcoming: state.movies.upcoming
});

export default connect(mapStateToProps,mapDispatchToProps)(Mostpopular);
