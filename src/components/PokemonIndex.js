import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state={
    pokemonArray: [],
    searchName: '',
    // selectedPokemon : {}
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon(){
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(data=>this.setState({pokemonArray:data}))
  }


  handleChange=(value)=>{

    this.setState({
      searchName: value
    }
    )
  }


  findPokemon(searchName){
    let foundPokemon = this.state.pokemonArray.filter((poke)=>{
      return poke.name.includes(searchName)
    })
    return foundPokemon
  }


  handleSubmit=(e, newObj)=>{
    e.preventDefault()
    // const newData = [...this.state.pokemonArray, newObj]
    // this.setState({
    //   pokemonArray: newData
    // })
    let data = {
      name: e.target.name.value,
      hp:e.target.hp.value,
      frontUrl: e.target.frontUrl.value,
      backUrl: e.target.backUrl.value
    }
    this.postPokemon(data)
  }

  postPokemon(obj){
    const options={
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        "Content-Type" : 'application/json',
        Accept: 'application/json'
      }
    }
    return fetch('http://localhost:3000/pokemon', options)
    .then(res=>res.json())
    .then(data=>this.setState({pokemonArray:data}, ()=>console.log(this.state.pokemonArray)))
  }




  render() {
    const pokemonToRender = this.state.searchName !=='' ?
      this.findPokemon(this.state.searchName) : this.state.pokemonArray
      console.log(pokemonToRender)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />

        <Search onSearchChange={(e) =>this.handleChange(e.target.value)} showNoResults={false}  />

        <br />
        <PokemonCollection pokemonArray={pokemonToRender}/>
        <br />
        <PokemonForm handleSubmit= {this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
