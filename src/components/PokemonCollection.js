import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displayCards = ()=>{
    return this.props.pokemons.map(pokemon=>{
      if (pokemon.hp) {
        return <PokemonCard hp={pokemon.hp} name={pokemon.name} key={pokemon.id} frontUrl={pokemon.frontUrl} backUrl={pokemon.backUrl} />
      }
      return <PokemonCard hp={pokemon.stats[pokemon.stats.length-1].value} key={pokemon.id} name={pokemon.name} frontUrl={pokemon.sprites.front} backUrl={pokemon.sprites.back} />
    })
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
