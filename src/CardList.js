import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{
			//anything here is javascript,
			//so we can just move cardsArray
			//inside curly brackets,
			//without the const:

			//robots is still accessible,
			//from props:

			//we use .map to create array:
			//array.map(currentValue, index)
			robots.map((user, i) => {
				return (
					<Card 
						key={user.id} 
						id={i} 
						name={user.name} 
						email={user.email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;