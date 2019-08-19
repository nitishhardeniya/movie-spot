import React from 'react';
const Rating = (props) =>{
	const count_stars = props.score /2;
	return (<div className="stars">
				&#9733; &#9733; &#9733; &#9733; &#9733;
			</div>)
}

export default Rating;