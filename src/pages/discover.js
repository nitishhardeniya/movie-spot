import React from 'react'
import Search from '../components/filters/search';
import Slider from '../components/slider';
import { connect } from 'react-redux';

const Discover = (props) => {
    return (
        <div>
            <Search />
            {props.movies && props.movies.length >0 && 
                <>
                    <div className="cat-header">Search results : <b>{props.filters.query}</b></div>
                    <Slider records={props.movies} type="movie" size="small" />
                </>}         
        </div>
    )
}

const mapStateToProps = (state) => ({
    filters: state.filters,
    movies: state.movies.results,
});

export default connect(mapStateToProps,null)(Discover);
