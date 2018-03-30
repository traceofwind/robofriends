import React, { Component } from 'react';
//import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
	/*
	Life Cycle Hooks

	Each component has several “lifecycle methods” that you can
	override to run code at particular times in the process. 
	Methods prefixed with will are called right before something 
	happens, and methods prefixed with did are called 
	right after something happens.

	1. Mounting
	2. Updating
	3. UnMounting

	*/
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log('constructor');

	}

	componentDidMount() {
		console.log('componentDidMount');

		this.setState({ robots: robots });

		//Life time cycle: everytime we change state we are calling the 
		//Updating hook. Therefore:
		// this.setState()
		// Update
		// ... ... ... ... render()

		//Because the virtual DOM recognises there's a change it 
		//repaints the DOM.
	}

	onSearchChange = (event) => {
		this.setState ({ searchfield: event.target.value })
	}

	render () {
		console.log('render');
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<CardList robots={ filteredRobots }/>
			</div>
		);
	}
}

export default App;