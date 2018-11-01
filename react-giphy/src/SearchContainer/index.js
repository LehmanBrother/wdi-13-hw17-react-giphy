import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class SearchContainer extends Component {
	constructor(){
		super();
		this.state = {
			search: ''
		}
	}

	handleInput = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSearch(this.state.search);
	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Input type='text' name='search' value={this.state.search} onChange={this.handleInput} placeholder='Enter search terms here'/>
				<Button color='teal' size='large' type='Submit'>Search</Button>
			</Form>
		)
	}
}

export default SearchContainer;