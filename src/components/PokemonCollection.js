import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generatePokemonCards(){
    return this.props.pokemonArray.map((poke)=>
    <PokemonCard key={poke.id} poke={poke}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>

        {this.generatePokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
