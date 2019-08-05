import React from 'react';
import {IMG_THUMB} from './../constants/config';

export default (props)	=>	{
	
	//console.log(props.cardMeta)
	let {id,poster_path,title} = props.cardMeta;
	return (<div className="card" key={id}>
				<img src={IMG_THUMB+poster_path} width={240} height={360} alt="no img"/>
				<div>{title}</div>
			</div>)
}