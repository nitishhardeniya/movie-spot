import React, { Component } from 'react';

const CardLoader = ({ width, height }) => (<div className="slider-tiles loading" style={{width, height}}>
	<div className="tile-body loading"></div>
	{/* <div className="tile-footer loading"></div> */}
</div>);

export default CardLoader;