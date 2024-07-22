import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from './store/slices/pokemon/thunks';

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <h1>PokeApi</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        onClick={() => dispatch(getPokemons(page))}
        disabled={isLoading}
      >
        Next
      </button>
    </>
  );
};

export { PokemonApp };
