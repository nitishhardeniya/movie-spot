import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getToprated } from './../actions/movies';

class Toprated extends Component {
	
	componentDidMount(){
		this.props.getToprated();
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
	getToprated
};

const mapStateToProps = (state) =>({
	toprated: state.movies.toprated
});

export default connect(mapStateToProps,mapDispatchToProps)(Toprated);
