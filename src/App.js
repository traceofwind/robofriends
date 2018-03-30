import React, { Component } from 'react';
//import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		//in order to use this,
		//we need to call super,
		//which calls the constructor of component.
		super()
		// STATE - an object that can change and effect our app
		// PROPS - things that come out of state
		// STATE >> PROPS
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		//function
		//on search change, 
		//everytime the input changes,
		//we get an event.
		//within this event we will console.log this event.
		
		//sets the state of searchfield to its value
		this.setState ({ searchfield: event.target.value })

		//now we can communicate this value to CardsList
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		//event.target.value gives us the value
		//console.log(event.target.value);
		console.log(filteredRobots);
	}

	//render () {} is required of class
	render () {
	
		//const App = () => {
		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<CardList robots={ this.state.robots }/>
				{
				//SearchBox needs to communicate with CardList.
				//CardList needs to know what's in SearchBox.
				//so that it can filter.
				//SearchBox = parent
				//CardList = child
				}
			</div>
		);
	}
}

export default App;