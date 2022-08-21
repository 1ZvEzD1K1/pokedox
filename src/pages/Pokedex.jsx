import React from 'react'
import PokemonInfo from '../components/PokemonInfo'
import PokemonList from '../components/PokemonList'

const Pokedex = () => {
  return (
    <div className='wrapper'>
        <header className='header'>Pokedex</header>
        <main className='main'>
          <PokemonList/>
          <PokemonInfo/>
        </main>
    </div>
  )
}

export default Pokedex