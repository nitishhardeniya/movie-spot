import React from 'react';
import {IMG_THUMB} from './../constants/config';

export default (props)	=>	{
	
	//console.log(props.cardMeta)
	let {id,backdrop_path,title} = props.cardMeta;
	return (<div className="card" key={id}>
				<img src={IMG_THUMB+backdrop_path} width={360} height={270} alt="no img"/>
				{title}
			</div>)
}