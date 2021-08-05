import React from 'react'

class Pet extends React.Component {

	onAdoptPet = () => {
		const props = this.props
		props.onAdoptPet(props.pet.id)
	}

	render() {
		const props = this.props
		const pet = props.pet
		const adoptButton = pet.isAdopted ?
			(<button className="ui disabled button">Already adopted</button>) :
			(<button
				className="ui primary button"
				onClick={this.onAdoptPet}
			>Adopt pet</button>)	
		return (
			<div className="card">
				<div className="content">
					<a className="header">
						{{'male': '♂', 'female': '♀'}[pet.gender]}
						{pet.name}
					</a>
					<div className="meta">
						<span className="date">{pet.type}</span>
					</div>
					<div className="description">
						<p>Age: {pet.age}</p>
						<p>Weight: {pet.weight}</p>
					</div>
					<div className="extra content">{adoptButton}</div>
				</div>
			</div>
		)
	}
}

export default Pet
