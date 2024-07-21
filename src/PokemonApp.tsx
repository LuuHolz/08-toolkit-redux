import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from './store/slices/pokemon/thunks'

const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );

    }, [])
    


  return (
    <>
        <h1>PokeApi</h1>
        <hr />

        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </>
  )
}

export {PokemonApp}