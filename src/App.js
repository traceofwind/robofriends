import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

const state = {
	robots: robots,
	searchField: ''
}

const App = () => {
	return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots={ robots }/>
			{
			//SearchBox needs to communicate with CardList.
			//CardList needs to know what's in SearchBox.
			//so that it can filter.
			//SearchBox = parent
			//CardList = child

			// STATE - an object that describes the state of our app
			// PROPS - things that come out of state
			// STATE >> PROPS
			}
		</div>
	);
}

export default App;