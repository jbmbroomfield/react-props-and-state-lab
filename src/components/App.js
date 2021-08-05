import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			pets: [],
			filters: {
				type: 'all'
			}
		}
	}

	handleChangeType = newType => {
		this.setState({
			...this.state,
			filters: {
				...this.state.filters,
				type: newType
			}
		})
	}

	handleFindPetsClick = () => {
		const type = this.state.filters.type
		let url = '/api/pets'
		if (type !== 'all') {
			url += `?type=${type}`
		}
		this.fetchPets(url)
	}

	fetchPets = url => {
		fetch(url)
		.then(response => response.json())
		.then(this.setPets)
	}

	setPets = data => {
		this.setState({
			...this.state,
			pets: data
		})
	}

	handleAdoptPet = petID => {
		const nextPets = this.state.pets
		for (let i = 0; i < nextPets.length; i++) {
			const pet = nextPets[i]
			nextPets[i].isAdopted = pet.id === petID ? true : pet.isAdopted
		}
		this.setState({
			...this.state,
			pets: nextPets
		})
	}

	render() {
		return (
		<div className="ui container">
			<header>
			<h1 className="ui dividing header">React Animal Shelter</h1>
			</header>
			<div className="ui container">
			<div className="ui grid">
				<div className="four wide column">
				<Filters
					type={this.state.filters.type}
					onChangeType={this.handleChangeType}
					onFindPetsClick={this.handleFindPetsClick}
				/>
				</div>
				<div className="twelve wide column">
				<PetBrowser
					pets={this.state.pets}
					onAdoptPet={this.handleAdoptPet}
				/>
				</div>
			</div>
			</div>
		</div>
		)
	}
}

export default App
