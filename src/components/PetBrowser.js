import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(x => <Pet pet={x} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(x.id)} />)}
      </div>
    );
  }
}

export default PetBrowser;