import axios from 'axios';
import React,{ useEffect, useState } from 'react';

function PokemonAxios () {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect( () => {
        // const list = await fetchPokemon();
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(res => {
          setPokemonList(res.data.results);
        }).catch(err => console.error(err));
      }, []);

    return (

        <div>

            <ul>
        {
          pokemonList.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)
        }
      </ul>
        </div>
    );


}
export default PokemonAxios;