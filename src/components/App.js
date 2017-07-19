import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onChangeType = (type) => {
    this.setState({
      ...this.state,
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
       .then(x => x.json())
       .then(x => this.setPets(x))
     } else {
       fetch(`/api/pets?type=${this.state.filters.type}`)
       .then(x => x.json())
       .then(x => this.setPets(x))
     }
  }

  setPets = (pet) => {
    this.setState({
      pets: pet
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;