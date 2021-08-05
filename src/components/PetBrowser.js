import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
	render() {
		const props = this.props
		return (
			<div className="ui cards">
				{props.pets.map(pet => <Pet
					key={pet.id}
					pet={pet}
					onAdoptPet={props.onAdoptPet}
				/>)}
			</div>
		)
	}
}

export default PetBrowser
