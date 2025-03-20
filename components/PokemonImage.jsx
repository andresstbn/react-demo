export default function PokemonImage({ currentPokemon }) {
  return (
    <div className="flex gap-4">
      <div className="h-20 w-20 bg-red-300 rounded-full">
        <img src={currentPokemon.sprites?.front_default} alt="pokemon" />
      </div>
      <div className="h-20 w-20 bg-red-300 rounded-full">
        <img src={currentPokemon.sprites?.back_default} alt="pokemon" />
      </div>
    </div>
  );
}
