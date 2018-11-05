import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state={
    pokemonArr:[],
  }

  getPokemons= ()=>{
    fetch('http://localhost:3001/pokemon')
      .then(resp=>resp.json())
      .then(pokemons =>{
        this.setState({
          pokemonArr:pokemons
        })
      })
      .then(()=>{
        this.originalArr = [...this.state.pokemonArr]
      })
  }

  componentDidMount = ()=>{
    this.getPokemons()


  }

  handleSubmit = (event, obj) =>{
    let arr = [...this.state.pokemonArr, obj];
    this.setState({
      pokemonArr: arr
    })
    let options ={
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(
        {
          name:obj.name,
          hp: obj.hp,
          frontUrl: obj.frontUrl,
          backUrl: obj.backUrl
        }
      )

      }
      fetch('http://localhost:3000/pokemon',options)
    }



  onSearchChange = (e)=>{
    let arr = [];
    this.originalArr.forEach(pokemon=>{
      if (pokemon.name.includes(e.target.value)) {
        arr.push(pokemon)
      }
    })
    this.setState({
      pokemonArr:arr
    })
  }

  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemonArr} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default PokemonPage
