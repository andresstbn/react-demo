import PokemonImage from "@/components/PokemonImage";

export default function PokemonDetail({ currentPokemon }) {
  return (
    <div className="bg-blue-200 p-8 rounded-xl">
      {currentPokemon ? (
        <div className="text-center">
          <PokemonImage currentPokemon={currentPokemon}></PokemonImage>
          <div>Altura: {currentPokemon.height}</div>
          <div>Peso: {currentPokemon.weight}</div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
      <h2 className="text-xl text-center font-bold">{currentPokemon?.name}</h2>
    </div>
  );
}
