import { useParams } from "react-router";
const PokemonDetails = (props) => {
	const { pokemonId } = useParams();
	console.log(pokemonId);
	const singlePokemon = props.pokemon.find((poke) => {
		return poke._id === Number(pokemonId);
	});
	console.log(singlePokemon);

	return (
		<>
			<h2>Pokemon Details: {singlePokemon.name} </h2>
			<dl>
				<dt>Weight:</dt>
				<dd>{singlePokemon.weight}</dd>
				<dt>Height:</dt>
				<dd>{singlePokemon.height}</dd>
			</dl>
		</>
	);
};

export default PokemonDetails;
