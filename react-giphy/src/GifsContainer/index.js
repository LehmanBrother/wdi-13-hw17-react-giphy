import React, { Component } from 'react';
import apiKey from '../apiKey.js'

const endPoint = 'https://api.giphy.com/v1/gifs/search?q=';

class GifsContainer extends Component {
	constructor(){
		super();
		this.state = {
			search: '',
			gifs: []
		}
	}

	getGifs = async () => {
		try {
			const endPoint2 = endPoint + this.props.search.replace(' ','+') + '&api_key=' + apiKey + '&limit=10';
			const gifs = await fetch(endPoint2);
			const gifsJson = await gifs.json();
			console.log(gifsJson, ' gifsJson');
			return gifsJson;
		} catch(err) {
			return err
		}
	}

	componentDidMount(){
		console.log('gifsContainer componentDidMount');
		this.getGifs().then((gifs) => {
			console.log(gifs, ' this is data');
			this.setState({gifs: gifs.data});
			console.log(this.state.gifs);
		}).catch((err) => {
			console.log(err);
		})
	}

	render(){
		const gifs = this.state.gifs.map((gif,i) => {
			return(
				<img key={i} src={gif.images.fixed_width.url}/>
			)
		})
		return (
			<div>
				<p>GifsContainer</p>
				{gifs}
			</div>
		)
	}
}

export default GifsContainer;