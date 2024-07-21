import { startLoadingPokemons, setPokemons } from './pokemonSlice';
import { pokemonApi } from '../../../api/pokemonApi';


export const getPokemons = (  page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() )

        //realizar peticion http con AXIOS

        //con FECH
        // const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await respuesta.json();
        // console.log(data)
        
        //con AXIOS (pokemonApi.ts)
        const { data }  = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)


        dispatch( setPokemons({ pokemons: data.results, data: page + 1 }) )
    }
}